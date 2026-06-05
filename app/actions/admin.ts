"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import { createSupabaseActionClient } from "@/lib/supabase/server";

type CallerRole = "admin" | "prof" | null;

function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

async function getCallerRole(): Promise<CallerRole> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return null;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data: role } = await supabase.rpc("get_my_role");
  if (role === "admin" || role === "prof") return role;
  return null;
}

export async function changeRoleAction(userId: string, newRole: "eleve" | "prof" | "admin") {
  const caller = await getCallerRole();
  if (caller !== "admin") return { ok: false, reason: "Non autorisé" };
  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Service role non configuré" };
  const { error } = await svc
    .from("profiles")
    .update({ role: newRole, is_admin: newRole === "admin" })
    .eq("id", userId);
  if (error) return { ok: false, reason: error.message };
  revalidatePath("/admin");
  return { ok: true };
}

export async function deleteUserAction(userId: string) {
  const caller = await getCallerRole();
  if (caller !== "admin") return { ok: false, reason: "Non autorisé" };
  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Service role non configuré" };
  const { error } = await svc.auth.admin.deleteUser(userId);
  if (error) return { ok: false, reason: error.message };
  revalidatePath("/admin");
  return { ok: true };
}

export async function resetAllElevesAction(mode: "delete" | "archive" = "delete") {
  const caller = await getCallerRole();
  if (caller !== "admin") return { ok: false, reason: "Non autorisé" };
  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Service role non configuré" };

  if (mode === "archive") {
    const year = new Date().getFullYear();
    const { error, count } = await svc
      .from("profiles")
      .update({ classe: `ancien ${year}`, updated_at: new Date().toISOString() }, { count: "exact" })
      .eq("role", "eleve");
    if (error) return { ok: false, reason: error.message };
    revalidatePath("/admin");
    return { ok: true, count: count ?? 0 };
  }

  const { data: eleves, error } = await svc
    .from("profiles")
    .select("id")
    .eq("role", "eleve");
  if (error) return { ok: false, reason: error.message };

  for (const e of eleves ?? []) {
    await svc.auth.admin.deleteUser(e.id);
  }

  revalidatePath("/admin");
  return { ok: true, count: (eleves ?? []).length };
}

export async function changePasswordAction(userId: string, newPassword: string) {
  const caller = await getCallerRole();
  if (!caller) return { ok: false, reason: "Non autorisé" };
  if (newPassword.length < 8) return { ok: false, reason: "Au moins 8 caractères requis." };
  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Service role non configuré" };
  const { error } = await svc.auth.admin.updateUserById(userId, { password: newPassword });
  if (error) return { ok: false, reason: error.message };
  return { ok: true };
}

export async function updateUserProfileAction(
  userId: string,
  data: { nom?: string; prenom?: string; classe?: string; adresse?: string; npa?: string; localite?: string; telephone?: string; langue?: string },
) {
  const caller = await getCallerRole();
  if (!caller) return { ok: false, reason: "Non autorisé" };
  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Service role non configuré" };
  const { error } = await svc.from("profiles").update(data).eq("id", userId);
  if (error) return { ok: false, reason: error.message };
  revalidatePath("/admin");
  return { ok: true };
}

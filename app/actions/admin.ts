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

export async function getPlacementHistoryForUserAction(userId: string): Promise<{
  ok: boolean;
  history: Array<{ date: string; points: number; maxPoints: number; percent: number }>;
  error?: string;
}> {
  const caller = await getCallerRole();
  if (!caller) return { ok: false, history: [], error: "Non autorisé" };
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, history: [], error: "Erreur supabase" };
  const { data, error } = await supabase
    .from("profiles")
    .select("placement_test_history")
    .eq("id", userId)
    .maybeSingle();
  if (error) return { ok: false, history: [], error: error.message };
  const raw = Array.isArray(data?.placement_test_history) ? data.placement_test_history : [];
  return {
    ok: true,
    history: (raw as Array<{ date: string; points: number; maxPoints: number; percent: number }>)
      .map(a => ({ date: a.date, points: a.points, maxPoints: a.maxPoints, percent: a.percent })),
  };
}

export async function getUserForAdminAction(userId: string): Promise<{
  ok: boolean;
  user?: import("@/components/admin/AdminTable").UserRow;
  error?: string;
}> {
  const caller = await getCallerRole();
  if (!caller) return { ok: false, error: "Non autorisé" };
  const svc = createServiceClient();
  if (!svc) return { ok: false, error: "Service role non configuré" };

  const [{ data, error }, { data: authData }] = await Promise.all([
    svc
      .from("profiles")
      .select("id, login_id, nom, prenom, classe, adresse, npa, localite, telephone, langue, progress_data, progress_updated_at, is_admin, role, placement_test_history")
      .eq("id", userId)
      .single(),
    svc.auth.admin.getUserById(userId),
  ]);

  if (error || !data) return { ok: false, error: error?.message ?? "Utilisateur non trouvé" };

  const history = Array.isArray(data.placement_test_history) ? data.placement_test_history as Array<{ date: string; points: number; maxPoints: number; percent: number }> : [];
  const placement_test_best = history.length > 0
    ? history.reduce((best, a) => a.percent > best.percent ? a : best)
    : null;

  return {
    ok: true,
    user: {
      ...data,
      email: authData?.user?.email ?? "",
      placement_test_best: placement_test_best ? { points: placement_test_best.points, maxPoints: placement_test_best.maxPoints, percent: placement_test_best.percent } : null,
    } as import("@/components/admin/AdminTable").UserRow,
  };
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

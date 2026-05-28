"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import { createSupabaseActionClient } from "@/lib/supabase/server";

function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

async function requireAdmin() {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return null;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data: isAdmin } = await supabase.rpc("get_my_is_admin");
  if (!isAdmin) return null;
  return user;
}

export async function toggleAdminAction(userId: string, currentValue: boolean) {
  if (!await requireAdmin()) return { ok: false, reason: "Non autorisé" };
  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Service role non configuré" };
  const { error } = await svc.from("profiles").update({ is_admin: !currentValue }).eq("id", userId);
  if (error) return { ok: false, reason: error.message };
  revalidatePath("/admin");
  return { ok: true };
}

export async function deleteUserAction(userId: string) {
  if (!await requireAdmin()) return { ok: false, reason: "Non autorisé" };
  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Service role non configuré" };
  const { error } = await svc.auth.admin.deleteUser(userId);
  if (error) return { ok: false, reason: error.message };
  revalidatePath("/admin");
  return { ok: true };
}

export async function updateUserProfileAction(
  userId: string,
  data: { nom?: string; prenom?: string; classe?: string; adresse?: string; npa?: string; localite?: string; telephone?: string },
) {
  if (!await requireAdmin()) return { ok: false, reason: "Non autorisé" };
  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Service role non configuré" };
  const { error } = await svc.from("profiles").update(data).eq("id", userId);
  if (error) return { ok: false, reason: error.message };
  revalidatePath("/admin");
  return { ok: true };
}

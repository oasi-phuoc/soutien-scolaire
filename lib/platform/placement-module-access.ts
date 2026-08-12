import { createSupabaseServerClient } from "@/lib/supabase/server";

/** Students may open /placement only when this returns true. Staff always allowed. */
export async function canAccessPlacementModule(): Promise<boolean> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return true;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return true;

  const { data: role } = await supabase.rpc("get_my_role");
  if (role === "admin" || role === "prof") return true;

  // RPC : module global OU override individuel (can_placement).
  const { data: access, error } = await supabase.rpc("can_access_placement");
  if (!error) return Boolean(access);

  // Fallback avant migration / si RPC absente.
  const [{ data: enabled }, { data: profile }] = await Promise.all([
    supabase.rpc("get_placement_module_enabled"),
    supabase.from("profiles").select("can_placement").eq("id", user.id).maybeSingle(),
  ]);
  if (enabled !== false) return true;
  return Boolean((profile as { can_placement?: boolean } | null)?.can_placement);
}

import { createSupabaseServerClient } from "@/lib/supabase/server";

/** Students may open /placement only when this returns true. Staff always allowed. */
export async function canAccessPlacementModule(): Promise<boolean> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return true;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return true;

  const { data: role } = await supabase.rpc("get_my_role");
  if (role === "admin" || role === "prof") return true;

  const { data: enabled, error } = await supabase.rpc("get_placement_module_enabled");
  if (error) return true;
  return enabled !== false;
}

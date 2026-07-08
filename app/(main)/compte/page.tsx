import { CompteDashboard } from "@/components/CompteDashboard";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isPivotCode } from "@/lib/pivot-langs";

export default async function ComptePage() {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return (
      <CompteDashboard user={null} profilePivot={null} supabaseConfigured={false} />
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <CompteDashboard user={null} profilePivot={null} supabaseConfigured />
    );
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("preferred_pivot_lang, login_id")
    .eq("id", user.id)
    .maybeSingle();

  const { data: myRole } = await supabase.rpc("get_my_role");
  const { data: hasSuiviAccess } = await supabase.rpc("has_suivi_access");

  const piv = profile?.preferred_pivot_lang;

  return (
    <CompteDashboard
      user={{
        id: user.id,
        email: user.email ?? "",
        loginId: profile?.login_id ?? null,
        createdAt: user.created_at ?? null,
      }}
      profilePivot={isPivotCode(piv) ? piv : null}
      supabaseConfigured
      isAdmin={myRole === "admin"}
      hasSuiviAccess={!!hasSuiviAccess}
    />
  );
}

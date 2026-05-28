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
    .select("preferred_pivot_lang, is_admin")
    .eq("id", user.id)
    .maybeSingle();

  const piv = profile?.preferred_pivot_lang;

  return (
    <CompteDashboard
      user={{
        id: user.id,
        email: user.email ?? "",
      }}
      profilePivot={isPivotCode(piv) ? piv : null}
      supabaseConfigured
      isAdmin={profile?.is_admin === true}
    />
  );
}

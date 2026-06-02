import { MathematiquesClient } from "@/components/math/MathematiquesClient";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function MathematiquesPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return <MathematiquesClient />;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return <MathematiquesClient />;

  const { data: isAdminData } = await supabase.rpc("get_my_is_admin");

  return (
    <MathematiquesClient
      isLoggedIn
      isAdmin={isAdminData === true}
    />
  );
}

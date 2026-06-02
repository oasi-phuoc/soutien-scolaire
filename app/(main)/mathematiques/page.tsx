import { MathematiquesClient } from "@/components/math/MathematiquesClient";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ComingSoon } from "@/components/ComingSoon";

export default async function MathematiquesPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return <ComingSoon />;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return <ComingSoon />;

  const { data: myRole } = await supabase.rpc("get_my_role");
  if (myRole !== "admin") return <ComingSoon />;

  return <MathematiquesClient isLoggedIn isAdmin />;
}

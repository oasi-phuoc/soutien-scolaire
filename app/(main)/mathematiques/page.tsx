import { MathematiquesClient } from "@/components/math/MathematiquesClient";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function MathematiquesPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return <MathematiquesClient />;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return <MathematiquesClient />;

  const { data: myRole } = await supabase.rpc("get_my_role");

  return (
    <MathematiquesClient
      isLoggedIn
      isAdmin={myRole === "admin" || myRole === "prof"}
    />
  );
}

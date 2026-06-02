import { MathematiquesClient } from "@/components/math/MathematiquesClient";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function MathematiquesPage() {
  const supabase = await createSupabaseServerClient();
  const isLoggedIn = supabase
    ? (await supabase.auth.getUser()).data.user !== null
    : false;

  return <MathematiquesClient isLoggedIn={isLoggedIn} />;
}

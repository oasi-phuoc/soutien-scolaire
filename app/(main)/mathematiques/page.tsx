import { Suspense } from "react";
import { MathematiquesClient } from "@/components/math/MathematiquesClient";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function MathematiquesPage() {
  const supabase = await createSupabaseServerClient();
  let isLoggedIn = false;
  let isAdmin = false;

  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      isLoggedIn = true;
      const { data: myRole } = await supabase.rpc("get_my_role");
      isAdmin = myRole === "admin" || myRole === "prof";
    }
  }

  return (
    <Suspense fallback={null}>
      <MathematiquesClient isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
    </Suspense>
  );
}

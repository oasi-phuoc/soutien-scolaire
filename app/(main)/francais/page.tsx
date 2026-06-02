import { Suspense } from "react";
import { FrancaisClient } from "@/components/FrancaisClient";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function FrancaisPage() {
  const supabase = await createSupabaseServerClient();
  let isAdmin = false;
  if (supabase) {
    const { data: myRole } = await supabase.rpc("get_my_role");
    isAdmin = myRole === "admin" || myRole === "prof";
  }
  return (
    <Suspense>
      <FrancaisClient isAdmin={isAdmin} />
    </Suspense>
  );
}

import { Suspense } from "react";
import { LectureClient } from "@/components/lecture/LectureClient";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function LecturePage() {
  const supabase = await createSupabaseServerClient();
  let isAdmin = false;
  if (supabase) {
    const { data: myRole } = await supabase.rpc("get_my_role");
    isAdmin = myRole === "admin" || myRole === "prof";
  }
  return (
    <Suspense fallback={null}>
      <LectureClient isAdmin={isAdmin} />
    </Suspense>
  );
}

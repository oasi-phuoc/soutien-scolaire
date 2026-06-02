import { CommunicationClient } from "@/components/communication/CommunicationClient";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ComingSoon } from "@/components/ComingSoon";

export default async function CommunicationPage() {
  const supabase = await createSupabaseServerClient();
  let isAdmin = false;
  if (supabase) {
    const { data: myRole } = await supabase.rpc("get_my_role");
    isAdmin = myRole === "admin";
  }
  if (!isAdmin) return <ComingSoon />;
  return <CommunicationClient isAdmin />;
}

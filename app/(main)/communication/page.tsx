import { CommunicationClient } from "@/components/communication/CommunicationClient";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function CommunicationPage() {
  const supabase = await createSupabaseServerClient();
  let isAdmin = false;
  if (supabase) {
    const { data: myRole } = await supabase.rpc("get_my_role");
    isAdmin = myRole === "admin" || myRole === "prof";
  }
  return <CommunicationClient isAdmin={isAdmin} />;
}

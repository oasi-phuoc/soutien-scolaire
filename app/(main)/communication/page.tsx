import { CommunicationHome } from "@/components/communication/CommunicationHome";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function CommunicationPage() {
  const supabase = await createSupabaseServerClient();
  let isAdmin = false;
  if (supabase) {
    const { data: myRole } = await supabase.rpc("get_my_role");
    isAdmin = myRole === "admin";
  }
  return <CommunicationHome isAdmin={isAdmin} />;
}

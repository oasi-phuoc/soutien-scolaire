import { getExpressionInboxAction } from "@/app/actions/expression";
import { ExpressionMailbox } from "@/components/expression/ExpressionMailbox";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function MailboxPage() {
  const supabase = await createSupabaseServerClient();
  const { data: role } = supabase ? await supabase.rpc("get_my_role") : { data: null };
  const rows = await getExpressionInboxAction();
  return <ExpressionMailbox rows={rows} isTeacher={role === "prof" || role === "admin"} />;
}

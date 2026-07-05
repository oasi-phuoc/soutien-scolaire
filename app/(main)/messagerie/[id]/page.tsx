import { notFound } from "next/navigation";
import { getExpressionSubmissionAction, getTaskMessageAction } from "@/app/actions/expression";
import { ExpressionSubmissionDetail } from "@/components/expression/ExpressionSubmissionDetail";
import { TaskMessageDetail } from "@/components/expression/TaskMessageDetail";
import { createSupabaseServerClient } from "@/lib/supabase/server";

async function correspondentNameForSubmission(
  item: { student_id: string; teacher_id: string },
  isTeacher: boolean,
): Promise<string> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return "";
  const targetId = isTeacher ? item.student_id : item.teacher_id;
  const { data } = await supabase.from("profiles").select("prenom, nom").eq("id", targetId).maybeSingle();
  return [data?.prenom, data?.nom].filter(Boolean).join(" ");
}

export default async function SubmissionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const taskMessage = await getTaskMessageAction(id);
  if (taskMessage) {
    return <TaskMessageDetail item={taskMessage} />;
  }

  const { item, isTeacher } = await getExpressionSubmissionAction(id);
  if (!item) notFound();

  const correspondentName = await correspondentNameForSubmission(item, isTeacher);
  return <ExpressionSubmissionDetail item={item} isTeacher={isTeacher} correspondentName={correspondentName} />;
}

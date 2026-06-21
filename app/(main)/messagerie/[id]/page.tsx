import { notFound } from "next/navigation";
import { getExpressionSubmissionAction } from "@/app/actions/expression";
import { ExpressionSubmissionDetail } from "@/components/expression/ExpressionSubmissionDetail";

export default async function SubmissionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { item, isTeacher } = await getExpressionSubmissionAction(id);
  if (!item) notFound();
  return <ExpressionSubmissionDetail item={item} isTeacher={isTeacher} />;
}

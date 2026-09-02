import { redirect, notFound } from "next/navigation";
import { canAccessStudentAction } from "@/app/actions/suivi";
import { getUserForAdminAction } from "@/app/actions/admin";
import { getNavAccess } from "@/lib/auth/nav-access";
import { EleveDetailPage } from "@/components/admin/EleveDetailPage";

export default async function SuiviElevePage({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const { slug, id } = await params;
  const classLabel = decodeURIComponent(slug);

  const access = await getNavAccess();
  if (!access.authenticated || !access.userId) redirect("/connexion");
  if (access.role !== "admin" && access.role !== "prof") redirect("/");
  if (!access.hasSuiviAccess && !access.isAdmin) redirect("/");

  const canAccess = await canAccessStudentAction(id);
  if (!canAccess) notFound();

  const res = await getUserForAdminAction(id);
  if (!res.ok || !res.user) notFound();

  return (
    <EleveDetailPage
      user={res.user}
      currentUserId={access.userId}
      currentUserRole={access.role as "admin" | "prof"}
      context="suivi"
      backHref={`/suivi/classes/${encodeURIComponent(classLabel)}`}
    />
  );
}

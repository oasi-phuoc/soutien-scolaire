import { redirect, notFound } from "next/navigation";
import { canAccessClassAction, getClassStudentsSuiviAction } from "@/app/actions/suivi";
import { getNavAccess } from "@/lib/auth/nav-access";
import { SuiviClassDashboard } from "@/components/suivi/SuiviClassDashboard";
import { SuiviPageHeader } from "@/components/suivi/SuiviPageHeader";
import { APP_SHELL_FULL } from "@/lib/layout/page-shell";

export default async function SuiviClassPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const classLabel = decodeURIComponent(slug);

  const access = await getNavAccess();
  if (!access.authenticated) redirect("/connexion");
  if (access.role !== "admin" && access.role !== "prof") redirect("/");
  if (!access.hasSuiviAccess && !access.isAdmin) redirect("/");

  const canAccess = await canAccessClassAction(classLabel);
  if (!canAccess) notFound();

  const studentsRes = await getClassStudentsSuiviAction(classLabel);

  return (
    <main className={`${APP_SHELL_FULL} flex-1 py-10 pb-28`}>
      <SuiviPageHeader title={classLabel} subtitle="Tableau de bord de la classe" />
      <SuiviClassDashboard
        classLabel={classLabel}
        initialStudents={studentsRes.ok ? studentsRes.students : undefined}
        initialError={studentsRes.ok ? null : (studentsRes.error ?? "Erreur")}
      />
    </main>
  );
}

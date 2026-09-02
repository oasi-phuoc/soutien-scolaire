import { redirect } from "next/navigation";
import { getNavAccess } from "@/lib/auth/nav-access";
import { SuiviClassAssignmentsClient } from "@/components/suivi/SuiviClassAssignmentsClient";
import { SuiviPageHeader } from "@/components/suivi/SuiviPageHeader";
import { APP_SHELL_FULL } from "@/lib/layout/page-shell";

export default async function SuiviAttributionsPage() {
  const access = await getNavAccess();
  if (!access.authenticated) redirect("/connexion");
  if (access.role !== "admin" && access.role !== "prof") redirect("/");
  if (!access.isAdmin && !access.hasSuiviAccess) redirect("/");

  return (
    <main className={`${APP_SHELL_FULL} flex-1 py-10 pb-28`}>
      <SuiviPageHeader
        title="Attribution des classes"
        subtitle="Classe principale et classes secondaires"
        backHref="/suivi"
        backLabel="suivi pédagogique"
      />
      <SuiviClassAssignmentsClient />
    </main>
  );
}

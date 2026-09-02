import { PageBackButton } from "@/components/ui/PageBackButton";
import { redirect } from "next/navigation";
import { getNavAccess } from "@/lib/auth/nav-access";
import { ProfessorAttributionsClient } from "@/components/admin/ProfessorAttributionsClient";
import { APP_SHELL_FULL } from "@/lib/layout/page-shell";

export default async function AdminProfessorAttributionsPage() {
  const access = await getNavAccess();
  if (!access.authenticated) redirect("/connexion");
  if (!access.isAdmin) redirect(access.role === "prof" ? "/suivi" : "/");

  return (
    <main className={`${APP_SHELL_FULL} flex-1 py-10 pb-28`}>
      <div className="mb-6 flex items-start gap-3">
        <PageBackButton href="/admin" className="mt-0.5" ariaLabel="Retour à la gestion des comptes" />
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Attribution des professeurs
          </h1>
          <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
            Classe principale et classes secondaires par professeur
          </p>
        </div>
      </div>

      <ProfessorAttributionsClient />
    </main>
  );
}

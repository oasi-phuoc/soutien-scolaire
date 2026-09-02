import { PageBackButton } from "@/components/ui/PageBackButton";
import { redirect } from "next/navigation";
import { getNavAccess } from "@/lib/auth/nav-access";
import { APP_SHELL_FULL } from "@/lib/layout/page-shell";
import { ContenuAdminClient } from "@/components/content-editor/ContenuAdminClient";

export default async function AdminContenuPage() {
  const access = await getNavAccess();
  if (access.authenticated) {
    if (!access.isAdmin) redirect(access.role === "prof" ? "/suivi" : "/");
  } else if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    redirect("/connexion");
  }
  // Sans Supabase : page accessible en local pour l'édition de contenu

  return (
    <main className={`${APP_SHELL_FULL} flex-1 py-10 pb-28`}>
      <div className="mb-6 flex items-center gap-2">
        <PageBackButton href="/admin" ariaLabel="Retour admin" />
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Contenu pédagogique
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Édition bureau uniquement — brouillon jusqu&apos;à Enregistrer
          </p>
        </div>
      </div>
      <ContenuAdminClient />
    </main>
  );
}

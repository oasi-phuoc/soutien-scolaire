import { redirect } from "next/navigation";
import Link from "next/link";
import { getSuiviContextAction } from "@/app/actions/suivi";
import { getNavAccess } from "@/lib/auth/nav-access";
import { SuiviClassesClient } from "@/components/suivi/SuiviClassesClient";
import { SuiviPageHeader } from "@/components/suivi/SuiviPageHeader";
import { APP_SHELL_FULL } from "@/lib/layout/page-shell";

function AttributionsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  );
}

export default async function SuiviPage() {
  const access = await getNavAccess();
  if (!access.authenticated) redirect("/connexion");
  if (access.role !== "admin" && access.role !== "prof") redirect("/");
  if (!access.isAdmin && !access.hasSuiviAccess) redirect("/");

  const ctx = await getSuiviContextAction();
  const initialClasses = ctx?.hasAccess ? ctx.classes : [];
  const initialError = !ctx
    ? "Non autorisé"
    : !ctx.hasAccess
      ? "Aucune classe affectée."
      : null;

  const subtitle = access.isAdmin
    ? "Toutes les classes de l'établissement"
    : "Classes, progression et devoirs";

  return (
    <main className={`${APP_SHELL_FULL} flex-1 py-10 pb-28`}>
      <SuiviPageHeader
        title="Suivi pédagogique"
        subtitle={subtitle}
        backHref="/"
        backLabel="accueil"
        actions={
          <Link
            href="/suivi/attributions"
            aria-label="Attribution des classes principale et secondaire"
            title="Attribution des classes"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-theme)]/35 text-[var(--color-theme)] transition-colors hover:bg-[var(--color-theme-light)]"
          >
            <AttributionsIcon />
          </Link>
        }
      />
      <SuiviClassesClient initialClasses={initialClasses} initialError={initialError} />
    </main>
  );
}

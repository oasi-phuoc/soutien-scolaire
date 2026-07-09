import { redirect } from "next/navigation";
import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
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
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: role } = await supabase.rpc("get_my_role");
  if (role !== "admin" && role !== "prof") redirect("/");

  const { data: hasAccess } = await supabase.rpc("has_suivi_access");
  if (!hasAccess && role !== "admin") redirect("/");

  const subtitle = role === "admin"
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
      <SuiviClassesClient />
    </main>
  );
}

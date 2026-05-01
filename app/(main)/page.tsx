import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type Props = { searchParams?: Promise<{ msg?: string }> };

export default async function HomePage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};

  const supabase = await createSupabaseServerClient();
  let email: string | null = null;

  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    email = user?.email ?? null;
  }

  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-10 pb-28">
      {q.msg ? (
        <p className="rounded-xl border border-teal-300 bg-teal-50 px-4 py-3 text-sm text-teal-950 dark:border-teal-800 dark:bg-teal-950/40 dark:text-teal-50">
          {q.msg}
        </p>
      ) : null}

      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Accueil
      </h1>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        Parcours français (pré-alpha → B2) et mathématiques (algèbre, géométrie, statistiques) selon la
        structure PER / Valais. Authentification Supabase pour le compte.
      </p>

      {email ? (
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Connecté : <span className="font-medium">{email}</span>
        </p>
      ) : (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Tu n&apos;es pas connecté.
        </p>
      )}

      <nav className="grid gap-3 pt-2 sm:grid-cols-2">
        <Link
          href="/francais"
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--color-accent-fr)] px-6 text-base font-semibold text-white"
        >
          Français
        </Link>
        <Link
          href="/mathematiques"
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--color-accent-alg)] px-6 text-base font-semibold text-white"
        >
          Mathématiques
        </Link>
        <Link
          href="/placement"
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-zinc-300 px-6 text-base font-semibold dark:border-zinc-600 sm:col-span-2"
        >
          Test de positionnement
        </Link>
        <Link
          href="/compte"
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--color-theme)] px-6 text-base font-semibold text-white dark:bg-[var(--color-theme-muted)] sm:col-span-2"
        >
          Réglages
        </Link>
        {email ? null : (
          <>
            <Link
              href="/connexion"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-zinc-300 px-6 text-base font-semibold dark:border-zinc-600"
            >
              Connexion
            </Link>
            <Link
              href="/inscription"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-zinc-300 px-6 text-base font-semibold dark:border-zinc-600"
            >
              Inscription
            </Link>
          </>
        )}
      </nav>
    </main>
  );
}

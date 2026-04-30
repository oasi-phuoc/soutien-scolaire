import { AppHeader } from "@/components/AppHeader";
import Link from "next/link";

export default function PlacementPage() {
  return (
    <>
      <AppHeader title="Placement rapide" backHref="/" />
      <main className="mx-auto w-full max-w-2xl flex-1 space-y-6 px-4 py-6">
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Ce questionnaire court (images et choix simples) sera branché aux modules
          recommandés. Pour l’instant, utilise la bibliothèque et choisis un module qui
          te semble adapté.
        </p>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Bientôt disponible</p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Début prévu dans une prochaine mise à jour.
          </p>
        </div>
        <Link
          href="/bibliotheque"
          className="flex min-h-12 items-center justify-center rounded-xl bg-teal-700 text-base font-semibold text-white hover:bg-teal-800 dark:bg-teal-600"
        >
          Ouvrir la bibliothèque
        </Link>
      </main>
    </>
  );
}

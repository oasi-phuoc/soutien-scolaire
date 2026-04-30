import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-4 dark:bg-zinc-950">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Page introuvable</h1>
      <p className="max-w-md text-center text-zinc-600 dark:text-zinc-400">
        Ce module ou cette adresse n’existe pas. Retourne à l’accueil ou choisis Français /
        mathématiques.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-teal-700 px-6 text-base font-semibold text-white"
        >
          Accueil
        </Link>
        <Link
          href="/francais"
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-zinc-300 px-6 text-base font-semibold dark:border-zinc-600"
        >
          Français
        </Link>
        <Link
          href="/mathematiques"
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-zinc-300 px-6 text-base font-semibold dark:border-zinc-600"
        >
          Mathématiques
        </Link>
      </div>
    </div>
  );
}

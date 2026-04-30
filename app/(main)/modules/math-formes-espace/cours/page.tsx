import type { Metadata } from "next";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { CfrChapterCourse } from "@/components/CfrChapterCourse";
import { GEOMETRY_CFR_CHAPTERS, GEOMETRY_CFR_SOURCE_NOTE, geometryCfrChapterCount } from "@/lib/geometry-cfr-course";

export const metadata: Metadata = {
  title: "Cours géométrie CFR",
  description:
    "Théorie simplifiée et complétée par chapitre (formes, angles, périmètres, aires, repérage…)",
};

export default function GeometrieCfrCoursPage() {
  const n = geometryCfrChapterCount();

  return (
    <>
      <AppHeader title={`Cours — ${n} chapitres`} backHref="/modules/math-formes-espace" />
      <main className="mx-auto w-full max-w-4xl flex-1 space-y-8 px-4 py-6">
        <header className="space-y-2">
          <p className="text-sm font-medium text-violet-800 dark:text-violet-300">Module « Formes et repérage »</p>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Géométrie CFR — cours par chapitres
          </h1>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Chaque chapitre reprend les idées du livret officiel avec deux niveaux&nbsp;: une version courte et claire («
            en bref »), puis une version enrichie (« pour aller plus loin ») avec précisions mathématiques et formules utiles.
            Les exercices sur figures restent dans le livre papier et en classe.
          </p>
        </header>

        <nav
          aria-label="Sommaire des chapitres"
          className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/40"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Sommaire</p>
          <ol className="mt-3 columns-2 gap-x-6 text-sm sm:columns-3">
            {GEOMETRY_CFR_CHAPTERS.map((ch) => (
              <li key={ch.roman} className="mb-1 break-inside-avoid">
                <Link
                  href={`#chapitre-${ch.roman}`}
                  className="text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950 dark:text-teal-300 dark:hover:text-teal-200"
                >
                  {ch.roman}. {ch.title}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <CfrChapterCourse chapters={GEOMETRY_CFR_CHAPTERS} sourceNote={GEOMETRY_CFR_SOURCE_NOTE} />

        <div className="flex flex-wrap gap-3 pb-8">
          <Link
            href="/modules/math-formes-espace"
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl border border-zinc-300 px-5 text-base font-semibold text-zinc-800 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Retour au module
          </Link>
          <Link
            href="/modules/math-formes-espace/quiz"
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl bg-teal-700 px-5 text-base font-semibold text-white hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
          >
            Mini-test
          </Link>
        </div>
      </main>
    </>
  );
}

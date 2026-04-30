import Link from "next/link";
import { notFound } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { ModuleActions } from "@/components/ModuleActions";
import {
  MODULES,
  TRACK_LABELS,
  getModuleBySlug,
  getRecommendedTitles,
} from "@/lib/modules";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return MODULES.map((m) => ({ slug: m.slug }));
}

function objectivesForModule(titleFr: string, summaryFr: string): string[] {
  return [
    `Comprendre : ${summaryFr}`,
    `Rappels en français simple sur : ${titleFr.split("–")[0].trim()}.`,
    "Mini-test à la fin pour valider le module.",
  ];
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) notFound();

  const reco = getRecommendedTitles(mod.recommendedAfterSlugs);
  const objectives = objectivesForModule(mod.titleFr, mod.summaryFr);

  return (
    <>
      <AppHeader
        title={mod.titleFr}
        backHref="/bibliotheque"
        rightSlot={
          mod.hasPdf ? (
            <Link
              href={`/modules/${slug}/fiche`}
              className="rounded-lg bg-teal-100 px-2 py-1 text-xs font-medium text-teal-900 hover:bg-teal-200 dark:bg-teal-900/50 dark:text-teal-100 dark:hover:bg-teal-800/70"
            >
              Fiche
            </Link>
          ) : null
        }
      />
      <main className="mx-auto w-full max-w-2xl flex-1 space-y-6 px-4 py-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span className="rounded-full bg-zinc-100 px-3 py-1 font-medium dark:bg-zinc-800">
            {TRACK_LABELS[mod.track]}
          </span>
          <span>· {mod.estimatedMinutes} min</span>
        </div>

        {reco.length > 0 ? (
          <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
            <span className="font-semibold">Recommandé après : </span>
            {reco.join(" · ")}
          </p>
        ) : null}

        <section aria-labelledby="objectifs">
          <h2 id="objectifs" className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            Objectifs
          </h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {objectives.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </section>

        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Fais le mini-test pour valider le module. Une fiche imprimable aide à travailler sur
          papier. Sinon, tu peux encore enregistrer une progression simple sur cet appareil.
        </p>

        <ModuleActions slug={mod.slug} hasFiche={mod.hasPdf} />

        <nav className="flex flex-wrap gap-3 pt-2 print:hidden">
          <Link
            href="/bibliotheque"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-zinc-300 px-5 text-base font-semibold text-zinc-800 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Autres modules
          </Link>
        </nav>
      </main>
    </>
  );
}

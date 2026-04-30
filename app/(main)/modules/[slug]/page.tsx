import Link from "next/link";
import { notFound } from "next/navigation";
import { ModuleActions } from "@/components/ModuleActions";
import {
  MODULES,
  getModuleBySlug,
  getModulePillLabel,
  getRecommendedTitles,
} from "@/lib/modules";
import { moduleListHref, moduleListLabel } from "@/lib/module-list-routes";

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

  const listHref = moduleListHref(mod);
  const listLabel = moduleListLabel(mod);
  const reco = getRecommendedTitles(mod.recommendedAfterSlugs);
  const objectives = objectivesForModule(mod.titleFr, mod.summaryFr);

  return (
    <>
      <main className="mx-auto w-full max-w-2xl flex-1 space-y-6 px-4 py-6">
        <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Link
            href={listHref}
            className="text-sm font-semibold text-teal-800 underline underline-offset-2 hover:text-teal-950 dark:text-teal-400"
          >
            ← {listLabel}
          </Link>
          {mod.hasPdf ? (
            <Link
              href={`/modules/${slug}/fiche`}
              className="rounded-lg bg-teal-100 px-3 py-1.5 text-xs font-medium text-teal-900 hover:bg-teal-200 dark:bg-teal-900/50 dark:text-teal-100 dark:hover:bg-teal-800/70"
            >
              Fiche
            </Link>
          ) : null}
        </div>

        <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">{mod.titleFr}</h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span className="rounded-full bg-zinc-100 px-3 py-1 font-medium dark:bg-zinc-800">
            {getModulePillLabel(mod)}
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
          Fais le mini-test pour valider le module.
          {mod.hasPdf ? (
            <>
              {" "}
              Une fiche imprimable aide à travailler sur papier.
            </>
          ) : null}{" "}
          Sinon, tu peux encore enregistrer une progression simple sur cet appareil.
        </p>

        <ModuleActions slug={mod.slug} hasFiche={mod.hasPdf} />

        <nav className="flex flex-wrap gap-3 pt-2 print:hidden">
          <Link
            href={listHref}
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-zinc-300 px-5 text-base font-semibold text-zinc-800 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Autres modules ({listLabel})
          </Link>
        </nav>
      </main>
    </>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { ModuleQuizClient } from "@/components/ModuleQuizClient";
import { getQuizForModule } from "@/lib/quiz";
import { MODULES, getModuleBySlug } from "@/lib/modules";
import { moduleListHref, moduleListLabel } from "@/lib/module-list-routes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return MODULES.map((m) => ({ slug: m.slug }));
}

export default async function ModuleQuizPage({ params }: Props) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  const quiz = getQuizForModule(slug);
  if (!mod || !quiz) notFound();

  return (
    <>
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-6">
        <div className="mb-4 print:hidden">
          <Link
            href={`/modules/${slug}`}
            className="text-sm font-semibold text-teal-800 underline underline-offset-2 hover:text-teal-950 dark:text-teal-400"
          >
            ← Retour au module
          </Link>
        </div>
        <h1 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">Mini-test</h1>
        <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
          3 questions sur le module « {mod.titleFr} ». Tu peux te tromper : à la fin
          tu vois les bonnes réponses.
        </p>
        <ModuleQuizClient
          slug={slug}
          passingPercent={quiz.passingPercent}
          items={quiz.items}
          moduleTitle={mod.titleFr}
          modulesIndexHref={moduleListHref(mod)}
          modulesIndexLabel={`Liste ${moduleListLabel(mod)}`}
        />
        <p className="mt-6 text-center print:hidden">
          <Link href={`/modules/${slug}/fiche`} className="text-sm text-teal-700 underline dark:text-teal-400">
            Fiche à imprimer
          </Link>
        </p>
      </main>
    </>
  );
}

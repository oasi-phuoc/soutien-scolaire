import Link from "next/link";
import { notFound } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { ModuleQuizClient } from "@/components/ModuleQuizClient";
import { getQuizForModule } from "@/lib/quiz";
import { MODULES, getModuleBySlug } from "@/lib/modules";

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
      <AppHeader title="Mini-test" backHref={`/modules/${slug}`} />
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-6">
        <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
          3 questions sur le module « {mod.titleFr} ». Tu peux te tromper : à la fin
          tu vois les bonnes réponses.
        </p>
        <ModuleQuizClient
          slug={slug}
          passingPercent={quiz.passingPercent}
          items={quiz.items}
          moduleTitle={mod.titleFr}
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

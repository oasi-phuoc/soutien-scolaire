import { notFound } from "next/navigation";
import { getGrammarLesson } from "@/lib/curriculum/grammar-data";
import { GrammaireRunner } from "@/components/francais/GrammaireRunner";
import { getContentOverridesMapAction } from "@/app/actions/content-editor";
import { grammarLessonKey } from "@/lib/content-editor/keys";
import type { GrammarLesson } from "@/lib/curriculum/grammar-data";

type Props = { params: Promise<{ slug: string }> };

export default async function GrammairePage({ params }: Props) {
  const { slug } = await params;
  const base = getGrammarLesson(slug);
  const { map } = await getContentOverridesMapAction();
  const ov = map[grammarLessonKey(slug)]?.payload as GrammarLesson | undefined;
  const lesson = ov ?? base;
  if (!lesson) notFound();
  return (
    <main className="flex min-h-screen flex-col">
      <GrammaireRunner lesson={lesson} subject="Grammaire" />
    </main>
  );
}

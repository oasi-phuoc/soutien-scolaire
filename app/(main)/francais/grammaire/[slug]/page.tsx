import { notFound } from "next/navigation";
import { getGrammarLesson } from "@/lib/curriculum/grammar-data";
import { ConjugaisonRunner } from "@/components/francais/ConjugaisonRunner";

type Props = { params: Promise<{ slug: string }> };

export default async function GrammairePage({ params }: Props) {
  const { slug } = await params;
  const lesson = getGrammarLesson(slug);
  if (!lesson) notFound();
  const resolvedLesson = lesson!;
  return (
    <main className="flex min-h-screen flex-col">
      <ConjugaisonRunner lesson={resolvedLesson} subject="Grammaire" />
    </main>
  );
}

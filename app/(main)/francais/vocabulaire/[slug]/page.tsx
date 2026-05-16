import { notFound } from "next/navigation";
import { getVocabLesson } from "@/lib/curriculum/vocabulary-data";
import { ConjugaisonRunner } from "@/components/francais/ConjugaisonRunner";

type Props = { params: Promise<{ slug: string }> };

export default async function VocabulairePage({ params }: Props) {
  const { slug } = await params;
  const lesson = getVocabLesson(slug);
  if (!lesson) notFound();
  const resolvedLesson = lesson!;
  return (
    <main className="flex min-h-screen flex-col">
      <ConjugaisonRunner lesson={resolvedLesson} subject="Vocabulaire" />
    </main>
  );
}

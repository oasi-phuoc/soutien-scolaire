import { notFound } from "next/navigation";
import { getVocabTheme, getVocabLesson } from "@/lib/curriculum/vocabulary-data";
import { VocabRunner } from "@/components/francais/VocabRunner";
import { ConjugaisonRunner } from "@/components/francais/ConjugaisonRunner";

type Props = { params: Promise<{ slug: string }> };

export default async function VocabulairePage({ params }: Props) {
  const { slug } = await params;

  const theme = getVocabTheme(slug);
  if (theme) {
    return (
      <main className="flex min-h-screen flex-col">
        <VocabRunner theme={theme} />
      </main>
    );
  }

  const lesson = getVocabLesson(slug);
  if (!lesson) notFound();
  return (
    <main className="flex min-h-screen flex-col">
      <ConjugaisonRunner lesson={lesson!} subject="Vocabulaire" />
    </main>
  );
}

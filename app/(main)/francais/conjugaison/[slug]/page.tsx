import { notFound } from "next/navigation";
import { getConjLesson } from "@/lib/curriculum/conjugation-data";
import { GrammaireRunner } from "@/components/francais/GrammaireRunner";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ returnTab?: string }>;
};

export default async function ConjugaisonPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { returnTab } = await searchParams;
  const lesson = getConjLesson(slug);
  if (!lesson) notFound();
  const resolvedLesson = lesson!;
  const subject =
    returnTab === "grammaire"   ? "Grammaire" :
    returnTab === "vocabulaire" ? "Vocabulaire" :
    "Conjugaison";
  return (
    <main className="flex min-h-screen flex-col">
      <GrammaireRunner lesson={resolvedLesson} subject={subject} />
    </main>
  );
}

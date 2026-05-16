import { notFound } from "next/navigation";
import { getConjLesson } from "@/lib/curriculum/conjugation-data";
import { ConjugaisonRunner } from "@/components/francais/ConjugaisonRunner";

type Props = { params: Promise<{ slug: string }> };

export default async function ConjugaisonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = getConjLesson(slug);
  if (!lesson) notFound();
  // lesson is guaranteed non-undefined here; notFound() throws
  const resolvedLesson = lesson!;
  return (
    <main className="flex min-h-screen flex-col">
      <ConjugaisonRunner lesson={resolvedLesson} />
    </main>
  );
}

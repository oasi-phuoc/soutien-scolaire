import { notFound } from "next/navigation";
import { getVocabTheme } from "@/lib/curriculum/vocabulary-data";
import { VocabRunner } from "@/components/francais/VocabRunner";

type Props = { params: Promise<{ slug: string }> };

export default async function VocabulairePage({ params }: Props) {
  const { slug } = await params;
  const theme = getVocabTheme(slug);
  if (!theme) notFound();
  return (
    <main className="flex min-h-screen flex-col">
      <VocabRunner theme={theme} />
    </main>
  );
}

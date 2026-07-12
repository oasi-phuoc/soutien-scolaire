import { notFound } from "next/navigation";
import { getVocabTheme } from "@/lib/curriculum/vocabulary-data";
import { VocabRunner } from "@/components/francais/VocabRunner";
import { getContentOverridesMapAction } from "@/app/actions/content-editor";
import { vocabThemeKey } from "@/lib/content-editor/keys";
import type { VocabTheme } from "@/lib/curriculum/vocabulary-data";

type Props = { params: Promise<{ slug: string }> };

export default async function VocabulairePage({ params }: Props) {
  const { slug } = await params;
  const base = getVocabTheme(slug);
  const { map } = await getContentOverridesMapAction();
  const ov = map[vocabThemeKey(slug)]?.payload as VocabTheme | undefined;
  const theme = ov ?? base;
  if (!theme) notFound();
  return (
    <main className="flex min-h-screen flex-col">
      <VocabRunner theme={theme} />
    </main>
  );
}

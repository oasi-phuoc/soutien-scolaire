import type { PivotCode } from "@/lib/pivot-langs";
import type { VocabTheme, VocabTheoryBlock } from "@/lib/curriculum/vocabulary-data";
import { getVocabThemePivots } from "@/lib/curriculum/vocab-theme-pivots";

export function pickVocabTitle(theme: VocabTheme, lang: PivotCode, showPivot: boolean): string {
  if (!showPivot || lang === "fr") return theme.title;
  const pivots = theme.titlePivot ?? getVocabThemePivots(theme.slug)?.titlePivot;
  return pivots?.[lang] ?? theme.title;
}

type TheoryPivotBlock = NonNullable<VocabTheme["theoryPivot"]>[number];

export function resolveVocabTheoryBlock(
  block: VocabTheoryBlock,
  index: number,
  theme: VocabTheme,
  lang: PivotCode,
  showPivot: boolean,
): VocabTheoryBlock {
  if (!showPivot || lang === "fr") return block;
  const pivotBlocks = theme.theoryPivot ?? getVocabThemePivots(theme.slug)?.theoryPivot;
  const pivot = pivotBlocks?.[index] as TheoryPivotBlock | undefined;
  if (!pivot) return block;

  if (block.type === "table" && pivot.type === "table") {
    return {
      ...block,
      headers: pivot.headers?.[lang] ?? block.headers,
      rows: pivot.rows?.[lang] ?? block.rows,
    };
  }
  if (block.type === "clocks" && pivot.type === "clocks") {
    const labels = pivot.labels?.[lang];
    if (!labels) return block;
    return {
      ...block,
      items: block.items.map((item, i) => ({ ...item, label: labels[i] ?? item.label })),
    };
  }
  if (block.type === "section" && pivot.type === "section") {
    return {
      ...block,
      title: pivot.title?.[lang] ?? block.title,
      items: pivot.items?.[lang] ?? block.items,
    };
  }
  if (block.type === "note" && pivot.type === "note") {
    return {
      ...block,
      text: pivot.text?.[lang] ?? block.text,
    };
  }
  return block;
}

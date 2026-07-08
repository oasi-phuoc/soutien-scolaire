import type { PivotCode } from "@/lib/pivot-langs";
import type { TheoryPivotBlock } from "@/lib/curriculum/vocabulary-data";
import raw from "../../scripts/vocab-title-translations.json";

export type VocabThemePivots = {
  titlePivot?: Partial<Record<PivotCode, string>>;
  theoryPivot?: TheoryPivotBlock[];
};

const data = raw as Record<string, unknown>;

const SLUGS = Object.keys(data).filter((k) => !k.startsWith("theory-") && k !== "v9-train-display");

export const VOCAB_TITLE_PIVOT_OVERRIDES: Record<string, Partial<Record<PivotCode, string>>> = {
  "v9-train-display": data["v9-train-display"] as Partial<Record<PivotCode, string>>,
};

export function getVocabThemePivots(slug: string): VocabThemePivots | undefined {
  const titlePivot = data[slug] as Partial<Record<PivotCode, string>> | undefined;
  const theoryPivot = slug === "v2-heure"
    ? (data["theory-v2-heure"] as TheoryPivotBlock[] | undefined)
    : undefined;
  if (!titlePivot && !theoryPivot) return undefined;
  return { titlePivot, theoryPivot };
}

export function hasVocabThemePivots(slug: string): boolean {
  return SLUGS.includes(slug) || slug === "v2-heure";
}

export function listVocabSlugsWithTitlePivot(): string[] {
  return SLUGS;
}

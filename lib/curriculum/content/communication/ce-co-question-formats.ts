import { hashSeedString } from "@/lib/placement/progressive-pick";

export type CeCoFormatType = "text" | "image" | "fill";

/** CE — 4 premières questions : saisie, QCM image, 2× QCM texte. */
const CE_CORE_FORMATS: CeCoFormatType[] = ["fill", "image", "text", "text"];

/** CO — 4 premières questions : QCM image, 2× QCM texte, saisie. */
const CO_CORE_FORMATS: CeCoFormatType[] = ["image", "text", "text", "fill"];

export const CE_CORE_SLOT_LABELS = CE_CORE_FORMATS.map((f) => formatLabel(f));
export const CO_CORE_SLOT_LABELS = CO_CORE_FORMATS.map((f) => formatLabel(f));

function formatLabel(fmt: CeCoFormatType): string {
  if (fmt === "fill") return "saisie";
  if (fmt === "image") return "QCM image";
  return "QCM texte";
}

const ALL_FORMATS: CeCoFormatType[] = ["text", "image", "fill"];

function hashSeed(seed: string): number {
  return hashSeedString(seed) || 1;
}

function pickFormatFromCore(
  coreFormats: CeCoFormatType[],
  index: number,
  seed: string,
  questionId: string,
  imageable: boolean,
): CeCoFormatType {
  if (index < coreFormats.length) {
    const preferred = coreFormats[index]!;
    if (preferred === "image" && !imageable) return "text";
    return preferred;
  }

  const formats = imageable ? ALL_FORMATS : ALL_FORMATS.filter((f) => f !== "image");
  return formats[hashSeed(`${seed}-${questionId}-${index}`) % formats.length]!;
}

/** Choisit le format d'une question CE selon sa position dans la série. */
export function pickCeCoQuestionFormat(
  index: number,
  seed: string,
  questionId: string,
  imageable: boolean,
): CeCoFormatType {
  return pickFormatFromCore(CE_CORE_FORMATS, index, seed, questionId, imageable);
}

/** Choisit le format d'une question CO selon sa position dans la série. */
export function pickCoQuestionFormat(
  index: number,
  seed: string,
  questionId: string,
  imageable: boolean,
): CeCoFormatType {
  return pickFormatFromCore(CO_CORE_FORMATS, index, seed, questionId, imageable);
}

/** CO scolaire avancé / B1 — alternance QCM texte et saisie (pas d'image). */
export function pickCoScolaireAvanceQuestionFormat(index: number): CeCoFormatType {
  return index % 2 === 0 ? "text" : "fill";
}

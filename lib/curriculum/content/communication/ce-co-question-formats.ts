import { hashSeedString } from "@/lib/placement/progressive-pick";

export type CeCoFormatType = "text" | "image" | "fill";

/** 4 premières questions : saisie, QCM image, 2× QCM texte. */
const CORE_FORMATS: CeCoFormatType[] = ["fill", "image", "text", "text"];

const ALL_FORMATS: CeCoFormatType[] = ["text", "image", "fill"];

function hashSeed(seed: string): number {
  return hashSeedString(seed) || 1;
}

/** Choisit le format d'une question CE/CO selon sa position dans la série. */
export function pickCeCoQuestionFormat(
  index: number,
  seed: string,
  questionId: string,
  imageable: boolean,
): CeCoFormatType {
  if (index < CORE_FORMATS.length) {
    const preferred = CORE_FORMATS[index]!;
    if (preferred === "image" && !imageable) return "text";
    return preferred;
  }

  const formats = imageable ? ALL_FORMATS : ALL_FORMATS.filter((f) => f !== "image");
  return formats[hashSeed(`${seed}-${questionId}-${index}`) % formats.length]!;
}

import { hashSeedString } from "@/lib/placement/progressive-pick";

/** Formats E1.x écoute — comme CO + vrai/faux. */
export type ExpressListeningFormat = "text" | "image" | "fill" | "vf";

/** 4 premières questions : image, texte, saisie, vrai/faux. */
const EXPRESS_CORE_FORMATS: ExpressListeningFormat[] = ["image", "text", "fill", "vf"];

const ALL_FORMATS: ExpressListeningFormat[] = ["text", "image", "fill", "vf"];

function hashSeed(seed: string): number {
  return hashSeedString(seed) || 1;
}

/** Choisit le format d'une question d'écoute Expression (ordre + seed). */
export function pickExpressListeningFormat(
  index: number,
  seed: string,
  questionId: string,
  imageable: boolean,
  hasVf: boolean,
): ExpressListeningFormat {
  const preferred =
    index < EXPRESS_CORE_FORMATS.length
      ? EXPRESS_CORE_FORMATS[index]!
      : ALL_FORMATS[hashSeed(`${seed}-${questionId}-${index}`) % ALL_FORMATS.length]!;

  if (preferred === "image" && !imageable) return "text";
  if (preferred === "vf" && !hasVf) return "text";
  return preferred;
}

/** Icônes de consigne — impression lecture uniquement. */
export const LECTURE_PRINT_ICONS = {
  colorier: "/assets/lecture/icones/icon-colorier.svg",
  souligner: "/assets/lecture/icones/icon-souligner.svg",
  cocher: "/assets/lecture/icones/icon-cocher.svg",
  relier: "/assets/lecture/icones/icon-relier.svg",
  prononcer: "/assets/lecture/icones/icon-prononcer.svg",
  lire: "/assets/lecture/icones/icon-lire.svg",
  entourer: "/assets/lecture/icones/icon-entourer.svg",
  ecouter: "/assets/lecture/icones/icon-ecouter.svg",
} as const;

export type LecturePrintIconId = keyof typeof LECTURE_PRINT_ICONS;

const VOWELS = ["a", "e", "i", "o", "u", "y"];
const CONSONANTS = ["b", "c", "d", "f", "g", "l", "m", "n", "p", "r", "s", "t", "v"];

/** Syllabes 2–3 lettres autour de la lettre (CV + VC des étapes 10–11). */
export function matchSyllablePool(
  letterLower: string,
  kind: "vowel" | "consonant",
): string[] {
  const letter = letterLower.toLowerCase();
  const out = new Set<string>();
  if (kind === "consonant") {
    for (const v of VOWELS) {
      out.add(`${letter}${v}`);
      out.add(`${v}${letter}`);
      out.add(`${letter}${v}${letter}`);
    }
  } else {
    for (const c of CONSONANTS) {
      if (c === letter) continue;
      out.add(`${c}${letter}`);
      out.add(`${letter}${c}`);
      out.add(`${c}${letter}${c}`);
    }
  }
  return [...out].filter((s) => s.length >= 2 && s.length <= 3);
}

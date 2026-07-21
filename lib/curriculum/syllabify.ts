import { CONSONANTS, VOWELS, type PronStep } from "./lecture-data";

const KNOWN_SYLLABLES = new Map<string, string>();

for (const lesson of [...VOWELS, ...CONSONANTS]) {
  if (!("pronunciationChain" in lesson)) continue;
  for (const step of lesson.pronunciationChain) {
    KNOWN_SYLLABLES.set(step.word.toLowerCase(), step.syllable);
  }
}

const VOWEL_RE = /[aeiouyàâäéèêëïîôùûüœæ]+/giu;

/** Syllabation pédagogique CP pour un mot bisyllabique (ex. tube → tu-be). */
export function pedagogicSyllable(word: string): string {
  const known = KNOWN_SYLLABLES.get(word.toLowerCase());
  if (known) return known;
  return guessBisyllableSyllable(word);
}

function guessBisyllableSyllable(word: string): string {
  const w = word.toLowerCase();
  const matches = [...w.matchAll(VOWEL_RE)];
  if (matches.length < 2) return word;

  const firstEnd = matches[0]!.index! + matches[0]![0].length;
  const secondStart = matches[1]!.index!;
  const between = w.slice(firstEnd, secondStart);

  let split: number;
  if (between.length === 0) {
    split = secondStart;
  } else if (between.length === 1) {
    split = firstEnd;
  } else {
    split = firstEnd + 1;
  }

  return `${word.slice(0, split)}-${word.slice(split)}`;
}

/** Nombre de syllabes affichées (segments séparés par « - »). */
export function pedagogicSyllableCount(word: string): number {
  return pedagogicSyllable(word).split("-").filter(Boolean).length;
}

export function isPedagogicBisyllable(word: string): boolean {
  return pedagogicSyllableCount(word) === 2;
}

export function phonemeLabelForLetter(letterLower: string): string {
  const lesson =
    VOWELS.find((v) => v.letterLower === letterLower) ??
    CONSONANTS.find((c) => c.letterLower === letterLower);
  return lesson?.pronunciationChain?.[0]?.phoneme ?? letterLower;
}

export function wordToPronStep(word: string, letterLower: string): PronStep {
  return {
    phoneme: phonemeLabelForLetter(letterLower),
    syllable: pedagogicSyllable(word),
    word,
  };
}

export function wordToComplexPronStep(word: string, graphemeLabel: string): PronStep {
  return {
    phoneme: graphemeLabel,
    syllable: pedagogicSyllable(word),
    word,
  };
}

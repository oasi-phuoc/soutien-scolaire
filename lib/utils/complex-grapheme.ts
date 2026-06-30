// Shared helpers for the L7 "sons complexes" (multi-letter graphemes such as
// OU, AN/EN, GN, ILL, TION…). Used by both the lesson runner and the evaluation.

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j]!, next[i]!];
  }
  return next;
}

export function normalizeGraph(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/gu, "")
    .toLowerCase();
}

/** Maps a grapheme label (e.g. "AN / EN") to the spelling variants to spot. */
export function complexTargets(label: string): string[] {
  const key = normalizeGraph(label);
  // New L7 graphemes — checked first because they contain substrings ("on", "en",
  // "oi"…) that would otherwise match the looser nasal/vowel rules below.
  if (key.includes("tion")) return ["tion"];
  if (key.includes("oin")) return ["oin"];
  if (key.includes("ien")) return ["ien"];
  if (key.includes("eu") || key.includes("oeu") || key.includes("œu")) return ["œu", "oeu", "eu"];
  if (key.includes("an") || key.includes("en")) return ["an", "en", "am", "em"];
  if (key.includes("in") || key.includes("ain")) return ["in", "ain", "ein", "im", "aim"];
  if (key.includes("on")) return ["on", "om"];
  if (key.includes("au") || key.includes("eau")) return ["au", "eau"];
  if (key.includes("ou")) return ["ou"];
  if (key.includes("oi")) return ["oi"];
  if (key.includes("ch")) return ["ch"];
  if (key.includes("ph")) return ["ph"];
  return key.split(/\s*\/\s*/u).map((entry) => entry.replace(/[^a-z]/gu, "")).filter(Boolean);
}

/** 25-cell grid of grapheme targets mixed with syllable distractors. */
export function makeComplexGrid(targets: string[], isUppercase: boolean): string[] {
  const distractors = ["la", "ri", "ma", "to", "be", "su", "fe", "po", "di", "ve", "ra", "mi", "lo", "te", "nu"]
    .filter((entry) => !targets.includes(entry));
  const targetCount = 6 + Math.floor(Math.random() * 4);
  const cells = [
    ...Array.from({ length: targetCount }, (_, i) => targets[i % targets.length]!),
    ...Array.from({ length: 25 - targetCount }, () => distractors[Math.floor(Math.random() * distractors.length)]!),
  ];
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cells[i], cells[j]] = [cells[j]!, cells[i]!];
  }
  return cells.map((cell) => (isUppercase ? cell.toUpperCase() : cell.toLowerCase()));
}

const SYLLABLE_CONSONANTS = ["b", "d", "f", "l", "m", "n", "p", "r", "s", "t", "v"];

/** 6 syllables built around the grapheme (consonne+graphème, etc.). */
export function makeComplexSyllables(targets: string[], mode: "cv" | "vc" | "mixed"): string[] {
  const cons = shuffle([...SYLLABLE_CONSONANTS]);
  const result: string[] = [];
  for (let i = 0; i < 6; i++) {
    const c1 = cons[i % cons.length]!;
    const c2 = cons[(i + 4) % cons.length]!;
    const g = targets[i % targets.length]!;
    const syl = mode === "cv" ? `${c1}${g}` : mode === "vc" ? `${g}${c1}` : `${c1}${g}${c2}`;
    result.push(Math.random() > 0.5 ? syl.toUpperCase() : syl.toLowerCase());
  }
  return shuffle(result);
}

/** Splits a word into single-character chunks, flagging those in the grapheme. */
export function splitComplexWord(word: string, targets: string[]): Array<{ text: string; hit: boolean }> {
  const sorted = [...targets].sort((a, b) => b.length - a.length);
  const chunks: Array<{ text: string; hit: boolean }> = [];
  for (let i = 0; i < word.length;) {
    const rest = normalizeGraph(word.slice(i));
    const found = sorted.find((target) => rest.startsWith(target));
    if (found) {
      for (let offset = 0; offset < found.length; offset++) {
        chunks.push({ text: word.slice(i + offset, i + offset + 1), hit: true });
      }
      i += found.length;
    } else {
      chunks.push({ text: word.slice(i, i + 1), hit: false });
      i += 1;
    }
  }
  return chunks;
}

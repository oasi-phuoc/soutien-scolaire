/** Pronoms qui s'élident devant voyelle ou h muet. */
const ELIDABLE: Record<string, string> = {
  le: "l'",
  la: "l'",
  me: "m'",
  te: "t'",
  se: "s'",
  ne: "n'",
};

/** Voyelle ou h muet en début de mot (règle scolaire FR). */
export function startsWithVowelOrSilentH(word: string): boolean {
  const w = word
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (!w) return false;
  return /^[aeiouyhéèêëàâîïôùûü]/.test(w);
}

/** Mot immédiatement après le blanc `___` dans une phrase d'exercice. */
export function wordAfterBlank(sentence: string): string | null {
  const idx = sentence.indexOf("___");
  if (idx < 0) return null;
  const after = sentence.slice(idx + 3).trimStart();
  const m = after.match(/^([^\s.,!?;:'"()]+)/u);
  return m?.[1] ?? null;
}

/** Élision d'un pronom seul (le → l', la → l', me → m', etc.). */
export function elidePronoun(pronoun: string, followingWord: string): string {
  const key = pronoun.trim().toLowerCase();
  const elided = ELIDABLE[key];
  if (!elided || !startsWithVowelOrSilentH(followingWord)) return pronoun;
  return elided;
}

/**
 * Applique l'élision sur la première partie d'une réponse composée.
 * Ex. « me habille » → « m'habille », « la » → « l' ».
 */
export function applyElisionToAnswer(answer: string, followingWord: string): string {
  const parts = answer.trim().split(/\s+/);
  if (parts.length === 0) return answer;

  const first = parts[0]!;
  const nextAfterFirst = parts[1] ?? followingWord;
  const elided = elidePronoun(first, nextAfterFirst);
  if (!elided.endsWith("'")) return answer;

  if (parts.length === 1) return elided;
  return elided + parts.slice(1).join("");
}

/** Insère la réponse dans un blanc, sans espace après l'élision (Tu l'aides). */
export function fillBlank(sentence: string, answer: string): string {
  const blank = "___";
  const idx = sentence.indexOf(blank);
  if (idx < 0) return sentence.replace(blank, answer);
  const before = sentence.slice(0, idx);
  let after = sentence.slice(idx + blank.length);
  if (answer.endsWith("'") && after.startsWith(" ")) {
    after = after.slice(1);
  }
  return before + answer + after;
}

/** Ajuste answer + phrase si le mot suivant impose l'élision. */
export function withPronounElision(sentence: string, answer: string): string {
  const following = wordAfterBlank(sentence);
  if (!following) return answer;
  return applyElisionToAnswer(answer, following);
}

import { WORD_IMAGE_INDEX } from "./content/communication/word-image-index";
import aliasesJson from "./content/communication/word-image-aliases.json";

const ALIASES = aliasesJson as Record<string, string>;

/** French determiners / articles stripped from the front of a label. */
const DETERMINERS = new Set([
  "le", "la", "les", "l", "un", "une", "des", "du", "de", "d", "au", "aux",
  "mon", "ma", "mes", "ton", "ta", "tes", "son", "sa", "ses",
  "ce", "cet", "cette", "ces", "the", "a",
]);

function baseSlug(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u0153/g, "oe")
    .replace(/\u0152/g, "oe")
    .replace(/\u00e6/g, "ae")
    .replace(/\u00c6/g, "ae")
    .toLowerCase();
}

function tokenize(label: string): string[] {
  return baseSlug(label)
    .replace(/['’]/g, " ")
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/[\s-]+/)
    .filter(Boolean);
}

function stripDeterminers(tokens: string[]): string[] {
  const out = [...tokens];
  while (out.length > 1 && DETERMINERS.has(out[0]!)) out.shift();
  return out;
}

/**
 * Candidate slugs for a label, from most to least specific. Only whole-phrase
 * variants (with and without leading determiners, hyphenated and joined) are
 * produced — single-token guesses are avoided to prevent false matches
 * (e.g. "appareil photo" must not resolve to "photo"). Cross-filename synonyms
 * are handled explicitly through the alias map.
 */
function candidateSlugs(label: string): string[] {
  const tokens = tokenize(label);
  if (!tokens.length) return [];
  const stripped = stripDeterminers(tokens);
  const set = new Set<string>();
  const push = (arr: string[]) => {
    if (!arr.length) return;
    set.add(arr.join("-"));
    set.add(arr.join(""));
  };
  push(stripped);
  push(tokens);
  return [...set];
}

/**
 * Resolve a French word/label to an existing image in vocabulaire or lecture.
 * Returns the public URL path, or `null` when no image exists for the word.
 */
export function resolveWordImage(label: string | undefined | null): string | null {
  if (!label) return null;
  for (const candidate of candidateSlugs(label)) {
    const direct = WORD_IMAGE_INDEX[candidate];
    if (direct) return direct;
    const alias = ALIASES[candidate];
    if (alias && WORD_IMAGE_INDEX[alias]) return WORD_IMAGE_INDEX[alias];
  }
  return null;
}

/** True when the path already points at a real vocab/lecture image asset. */
export function isResolvedImagePath(path: string | undefined | null): boolean {
  return !!path && (path.startsWith("/vocab/images/") || path.startsWith("/assets/words/img/"));
}

/**
 * Best image source for a labelled choice: an already-resolved asset path wins,
 * otherwise fall back to resolving the label against vocabulaire / lecture.
 */
export function imageSourceFor(label: string, path?: string): string | null {
  if (isResolvedImagePath(path)) return path!;
  return resolveWordImage(label);
}

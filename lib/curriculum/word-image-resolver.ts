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
 * Canonical slug of a single time expression (e.g. "9 h", "9h30", "À 8 h 30",
 * "midi"), or `null` for ranges / non-times. Must match
 * scripts/generate-clock-price-images.cjs.
 */
function timeSlug(label: string): string | null {
  const t = label.trim().toLowerCase().replace(/^à\s+/, "");
  if (t === "midi") return "horloge-12h00";
  if (t === "minuit") return "horloge-00h00";
  if (/^midi\s+et\s+quart$/.test(t)) return "horloge-12h15";
  if (/^midi\s+et\s+demie?$/.test(t)) return "horloge-12h30";
  const m = t.match(/^(\d{1,2})\s*h\s*(\d{1,2})?$/) || t.match(/^(\d{1,2})h(\d{2})?$/);
  if (!m) return null;
  const h = parseInt(m[1]!, 10);
  const mn = m[2] ? parseInt(m[2], 10) : 0;
  if (h > 23 || mn > 59) return null;
  return `horloge-${String(h).padStart(2, "0")}h${String(mn).padStart(2, "0")}`;
}

/** Canonical slug of a single price (e.g. "5 €", "5,50 €", "30 € HT"), or null. */
function priceSlug(label: string): string | null {
  const m = label.trim().match(/^(\d+(?:[.,]\d+)?)\s*(€|euros?|francs?|chf)(\s*ht)?$/i);
  if (!m) return null;
  const cur = /€|euro/i.test(m[2]!) ? "eur" : /franc/i.test(m[2]!) ? "fr" : "chf";
  return `prix-${m[1]!.replace(/[.,]/g, "-")}-${cur}${m[3] ? "-ht" : ""}`;
}

/**
 * Resolve a French word/label to an existing image in vocabulaire, lecture,
 * or a generated clock/price image. Returns the public URL path, or `null`
 * when no image exists for the label (times ranges, names, places, numbers…).
 */
export function resolveWordImage(label: string | undefined | null): string | null {
  if (!label) return null;
  const time = timeSlug(label);
  if (time && WORD_IMAGE_INDEX[time]) return WORD_IMAGE_INDEX[time];
  const price = priceSlug(label);
  if (price && WORD_IMAGE_INDEX[price]) return WORD_IMAGE_INDEX[price];
  for (const candidate of candidateSlugs(label)) {
    const direct = WORD_IMAGE_INDEX[candidate];
    if (direct) return direct;
    const alias = ALIASES[candidate];
    if (alias && WORD_IMAGE_INDEX[alias]) return WORD_IMAGE_INDEX[alias];
  }
  return null;
}

/** True when the label can be shown as an image (object, time or price). */
export function isImageableLabel(label: string | undefined | null): boolean {
  return resolveWordImage(label) !== null;
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

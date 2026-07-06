import { WORD_IMAGE_INDEX } from "./content/communication/word-image-index";
import aliasesJson from "./content/communication/word-image-aliases.json";

const ALIASES = aliasesJson as Record<string, string>;

/** French determiners / articles stripped from the front of a label. */
const DETERMINERS = new Set([
  "le", "la", "les", "l", "un", "une", "des", "du", "de", "d", "au", "aux",
  "mon", "ma", "mes", "ton", "ta", "tes", "son", "sa", "ses",
  "ce", "cet", "cette", "ces", "the", "a",
]);

const MONTHS = /(janv|févr|fevr|mars|avril|mai|juin|juil|août|aout|sept|oct|nov|déc|dec)\b/i;

/** Jours — jamais en QCM image (réponse calendaire, pas une scène). */
const WEEKDAYS = new Set([
  "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche",
]);

/** Pays / villes fréquents dans CE/CO — pas d'image dédiée fiable. */
const GEOGRAPHY = new Set([
  "allemagne", "belgique", "suisse", "france", "espagne", "italie", "portugal",
  "strasbourg", "toulouse", "bruxelles", "paris", "lyon", "marseille", "bordeaux",
  "nantes", "lille", "nice", "rennes", "montpellier", "geneve", "genève",
  "lausanne", "zurich", "berne", "bale", "bâle", "namur", "liege", "liège",
  "etats-unis", "états-unis", "canada", "maroc", "tunisie", "senegal", "sénégal",
  "rungis", "beaulieu", "moisins", "francs-moisins",
]);

/**
 * Mots simples illustrables (transport, lieu, objet…) — autorisés en QCM image
 * même sans article. Doit rester aligné avec les objets réellement illustrés.
 */
const CONCRETE_SINGLE = new Set([
  "bus", "train", "tramway", "metro", "métro", "avion", "bateau", "voiture", "taxi", "velo", "vélo",
  "restaurant", "piscine", "cinema", "cinéma", "theatre", "théâtre", "musee", "musée", "bibliotheque",
  "bibliothèque", "gare", "aeroport", "aéroport", "hopital", "hôpital", "pharmacie", "boulangerie",
  "tomates", "fromage", "pain", "pizza", "gateau", "gâteau", "fruit", "fruits", "salade", "sandwich",
  "maillot", "lunettes", "parapluie", "sac", "cahier", "livre", "stylo", "crayon", "telephone", "téléphone",
  "ordinateur", "photo", "appareil", "camera", "caméra", "cle", "clé", "carte", "passeport",
  "neige", "plage", "soleil", "boxe", "marche", "ski", "haltere", "haltère", "guitare", "piano",
  "fleur", "fleurs", "boutique", "fleuriste", "boisson", "infusion", "hygiene", "hygiène",
]);

/** Homographes : mot illustrable mais utilisé comme prénom/nom propre dans CO. */
const PROPER_NAME_HOMOGRAPHS = new Set([
  "rose", "iris", "jade", "olivier", "marguerite", "violette", "pivoine",
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

/** Plage horaire (non illustrable par une seule horloge). */
export function isTimeRange(label: string): boolean {
  const t = label.trim();
  if (/\d{1,2}\s*h(\s*\d{0,2})?\s*[–-]\s*\d{1,2}\s*h/i.test(t)) return true;
  if (/^\d{1,2}h\d{0,2}[–-]\d{1,2}h/i.test(t)) return true;
  if (/\d{1,2}\s*h\s*\d{0,2}\s*[–-]\s*\d{1,2}\s*h\s*\d{0,2}/i.test(t)) return true;
  return false;
}

/** Heure unique (une horloge). */
export function isSingleTime(label: string): boolean {
  if (isTimeRange(label)) return false;
  const t = label.trim();
  if (/^(à\s+)?\d{1,2}\s*h(\s*\d{1,2})?$/i.test(t)) return true;
  if (/^\d{1,2}\s*h\s*\d{2}$/i.test(t)) return true;
  if (/^\d{1,2}h(\d{2})?$/i.test(t)) return true;
  if (/^(midi|minuit)(\s+(et\s+)?(quart|demie?))?$/i.test(t)) return true;
  return false;
}

/** Prix unique (une étiquette). */
export function isSinglePrice(label: string): boolean {
  if (isPriceRange(label)) return false;
  return /^(\d+(?:[.,]\d+)?)\s*(€|euros?|francs?|chf)(\s*ht)?$/i.test(label.trim());
}

export function isPriceRange(label: string): boolean {
  const t = label.trim();
  if (/^\d+\s*\+\s*€/.test(t)) return true;
  if (/^\d+([.,]\d+)?\s*[-–]\s*\d+([.,]\d+)?\s*(€|euros?)/i.test(t)) return true;
  return false;
}

export function isPercentLabel(label: string): boolean {
  return /%/.test(label);
}

export function isNumberLabel(label: string): boolean {
  const t = label.trim();
  if (/^[\d\s.,'’\-+/²°:]+$/.test(t)) return true;
  if (/^\d/.test(t) && /\b(kg|km\/h|km|m²|m|cm|min|minutes?|g|lux|M|milliard|million|ans?|jours?|mois|semaines?|nuits?|personnes?|pays|doses?|croissants?|sandwichs?|viennoiseries?|enfants?|moteurs?|roues?|heures?|invitations?|doses?)\b/i.test(t)) {
    return true;
  }
  if (MONTHS.test(t) && /\d/.test(t)) return true;
  if (/^\d{2}(\s\d{2}){2,}$/.test(t)) return true;
  if (/^(1[5-9]|20)\d\d$/.test(t)) return true;
  if (/^\d+\s*(euro|€)/i.test(t) && !isSinglePrice(t)) return true;
  return false;
}

/** Prénom / nom de famille / commerce (capitalisé, mot unique). */
export function isProperNameLabel(label: string): boolean {
  const raw = label.trim();
  if (/^(le |la |les |l'|un |une |des |du |de la |chez |rue |avenue |place |quartier )/i.test(raw)) {
    return false;
  }
  const tokens = stripDeterminers(tokenize(raw));
  if (tokens.length !== 1) return false;
  const slug = tokens[0]!;
  if (CONCRETE_SINGLE.has(slug) || WEEKDAYS.has(slug) || GEOGRAPHY.has(slug)) return false;
  if (PROPER_NAME_HOMOGRAPHS.has(slug) && !/^(le |la |les |l'|un |une |des |du )/i.test(raw)) return true;
  if (/^[a-z]/.test(raw)) return false;
  if (!/^[A-ZÀ-Ü]/.test(raw)) return false;
  if (/^\d/.test(raw)) return false;
  if (isSingleTime(raw) || isSinglePrice(raw) || isPercentLabel(raw) || isNumberLabel(raw)) return false;
  return /^[A-ZÀ-Ü][a-zà-üéèêëïîôùûüç\-']+$/.test(raw);
}

export function isPlaceOrAddressLabel(label: string): boolean {
  const t = label.trim();
  if (/^(rue |avenue |boulevard |place |quartier |chez )/i.test(t)) return true;
  const tokens = stripDeterminers(tokenize(t));
  if (tokens.some((tok) => GEOGRAPHY.has(tok))) return true;
  if (tokens.length === 1 && GEOGRAPHY.has(tokens[0]!)) return true;
  return false;
}

export type ImageLabelCategory =
  | "time"
  | "price"
  | "object"
  | "percent"
  | "number"
  | "name"
  | "place"
  | "other";

/** Catégorise un libellé de réponse QCM image (audit / debug). */
export function classifyImageLabel(label: string): ImageLabelCategory {
  if (!label.trim()) return "other";
  if (isPercentLabel(label)) return "percent";
  if (isNumberLabel(label)) return "number";
  if (isTimeRange(label)) return "other";
  if (isSingleTime(label)) return "time";
  if (isPriceRange(label)) return "other";
  if (isSinglePrice(label)) return "price";
  if (isProperNameLabel(label)) return "name";
  if (isPlaceOrAddressLabel(label)) return "place";
  const tokens = stripDeterminers(tokenize(label));
  if (tokens.some((tok) => WEEKDAYS.has(tok))) return "other";
  if (resolveWordImage(label)) return "object";
  return "other";
}

/**
 * Canonical slug of a single time expression. Must match
 * scripts/generate-clock-price-images.cjs.
 */
export function timeSlug(label: string): string | null {
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

/** Canonical slug of a single price, or null. */
export function priceSlug(label: string): string | null {
  const m = label.trim().match(/^(\d+(?:[.,]\d+)?)\s*(€|euros?|francs?|chf)(\s*ht)?$/i);
  if (!m) return null;
  const cur = /€|euro/i.test(m[2]!) ? "eur" : /franc/i.test(m[2]!) ? "fr" : "chf";
  return `prix-${m[1]!.replace(/[.,]/g, "-")}-${cur}${m[3] ? "-ht" : ""}`;
}

function isLikelyIllustrableObject(label: string): boolean {
  const raw = label.trim();
  const tokens = tokenize(raw);
  const stripped = stripDeterminers(tokens);
  const core = stripped.join(" ");

  if (WEEKDAYS.has(core) || GEOGRAPHY.has(core)) return false;
  if (stripped.some((tok) => WEEKDAYS.has(tok) || GEOGRAPHY.has(tok))) return false;
  if (stripped.length === 1 && PROPER_NAME_HOMOGRAPHS.has(stripped[0]!) && tokens.length === stripped.length) {
    return false;
  }

  if (tokens.length !== stripped.length) return resolveWordImage(label) !== null;
  if (stripped.length >= 2) return resolveWordImage(label) !== null;
  if (stripped.length === 1 && CONCRETE_SINGLE.has(stripped[0]!)) return resolveWordImage(label) !== null;

  return false;
}

/**
 * Resolve a French word/label to an existing image in vocabulaire, lecture,
 * or a generated clock/price image.
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

/**
 * True when the label can be shown as a QCM image (horloge, prix ou objet
 * concret illustré). Exclut prénoms, lieux, nombres, pourcentages, plages…
 */
export function isImageableLabel(label: string | undefined | null): boolean {
  if (!label?.trim()) return false;

  if (isPercentLabel(label) || isNumberLabel(label)) return false;
  if (isProperNameLabel(label) || isPlaceOrAddressLabel(label)) return false;
  if (isTimeRange(label) || isPriceRange(label)) return false;

  if (isSingleTime(label)) {
    const slug = timeSlug(label);
    return !!slug && !!WORD_IMAGE_INDEX[slug];
  }
  if (isSinglePrice(label)) {
    const slug = priceSlug(label);
    return !!slug && !!WORD_IMAGE_INDEX[slug];
  }

  return isLikelyIllustrableObject(label);
}

/** True when the path already points at a real vocab/lecture/clock/price asset. */
export function isResolvedImagePath(path: string | undefined | null): boolean {
  return !!path && (
    path.startsWith("/vocab/images/")
    || path.startsWith("/assets/words/img/")
    || path.startsWith("/expression/")
  );
}

/** CE/CO — assets /expression/ + horloges/prix programmatiques (pas le pool vocab/lecture). */
export function ceCoImageSource(path?: string | null, label?: string): string | null {
  if (path?.startsWith("/expression/")) return path;
  if (path && /^\/assets\/words\/img\/(horloge|prix)-/.test(path)) return path;
  if (label && (isSingleTime(label) || isSinglePrice(label))) {
    return resolveWordImage(label);
  }
  return null;
}

/** @deprecated Préférer ceCoImageSource */
export function expressionImageSource(path?: string | null): string | null {
  return ceCoImageSource(path);
}

/** Best image source for a labelled choice (vocab/lecture/horloge/prix). */
export function imageSourceFor(label: string, path?: string): string | null {
  if (expressionImageSource(path)) return path!;
  if (isResolvedImagePath(path)) return path!;
  if (!isImageableLabel(label)) return null;
  return resolveWordImage(label);
}

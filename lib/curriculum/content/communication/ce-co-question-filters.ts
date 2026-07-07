/** Filtres partagés CE/CO base et moyen — exclusions et QCM image interdits. */

export type CeCoRawQuestion = {
  textQ: string;
  text: [string, string, string];
  textC: number;
  img: [string, string, string];
  fill: string;
  fillQ?: string;
  fillA?: string[];
};

const DAYS = new Set([
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
  "lun–ven",
  "lun–sam",
  "lun-ven",
  "lun-sam",
]);

const DAY_PREFIX =
  /^(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche|lun|mar|mer|jeu|ven|sam|dim)\b/i;

const STREET_MARKERS = /\b(rue|avenue|boulevard|place|allée|impasse|adresse|arrêt)\b/i;

const EXCLUDED_TEXT_Q =
  /^(qui (laisse|appelle)|comment s['']appelle|quelle ville|dans quelle ville|quel pays|quelle pays|d['']où revient|d['']où vient|à quelle adresse|quelle est l['']adresse|quel est le numéro)/i;

const COMMON_CAP_WORDS = new Set([
  "midi",
  "internet",
  "nouveau",
  "document",
  "matin",
  "soir",
  "demi",
  "demie",
  "quart",
]);

function normalizeLabel(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/** Réponses attendues qui sont un prénom, nom, commerce, etc. */
export function isProperNameAnswer(value: string): boolean {
  const answer = value.trim();
  if (!answer) return false;
  if (/^(Le |La |Les |L'|Un |Une |Des |Du |De la |D')/i.test(answer)) return false;
  if (/\d/.test(answer)) return false;
  if (isDayLabel(answer)) return false;
  if (isStreetLabel(answer)) return false;
  if (isCityOrCountryLabel(answer)) return false;
  const norm = normalizeLabel(answer);
  if (COMMON_CAP_WORDS.has(norm)) return false;
  if (/^[A-ZÀ-Ü][a-zà-ü]+ [A-ZÀ-Ü][a-zà-ü]/.test(answer)) return true;
  if (/^[A-ZÀ-Ü][a-zà-üéèêëïîôùûüç\-']+$/.test(answer)) return true;
  return false;
}

export function isDayLabel(label: string): boolean {
  const norm = normalizeLabel(label);
  if (DAYS.has(norm)) return true;
  if (DAY_PREFIX.test(norm)) return true;
  if (/\b(janvier|février|fevrier|mars|avril|mai|juin|juillet|août|aout|septembre|octobre|novembre|décembre|decembre)\b/i.test(norm)) {
    return true;
  }
  return false;
}

export function isStreetLabel(label: string): boolean {
  const norm = normalizeLabel(label);
  if (STREET_MARKERS.test(norm)) return true;
  if (/^rue des /i.test(label.trim())) return true;
  if (/guerriers|peupliers|clochottes|gare/i.test(norm)) return true;
  return false;
}

export function isCityOrCountryLabel(label: string): boolean {
  const norm = normalizeLabel(label);
  const places = new Set([
    "paris",
    "bruxelles",
    "berlin",
    "toulouse",
    "strasbourg",
    "lyon",
    "marseille",
    "allemagne",
    "suisse",
    "belgique",
    "france",
    "espagne",
    "italie",
    "australie",
    "gabon",
    "chine",
    "bresil",
    "brésil",
    "londres",
    "madrid",
    "zurich",
    "tours",
    "nantes",
    "perpignan",
    "orleans",
    "orléans",
    "quimper",
    "luxembourg",
    "mexique",
    "hoedic",
  ]);
  return places.has(norm);
}

export function isPersonLabel(label: string): boolean {
  if (isDayLabel(label) || isStreetLabel(label) || isCityOrCountryLabel(label)) return false;
  const norm = normalizeLabel(label);
  if (COMMON_CAP_WORDS.has(norm)) return false;
  if (/^(garage|magasin|agence|club|hotel|hôtel|restaurant|pizzeria|bar)\b/i.test(label.trim())) return false;
  return isProperNameAnswer(label) || /^[A-ZÀ-Ü][a-zà-ü\-']+$/.test(label.trim());
}

/** QCM image interdit pour jours, noms, rues, villes, pays. */
export function hasBlockedImageChoices(labels: readonly string[]): boolean {
  return labels.some(
    (label) =>
      isDayLabel(label) ||
      isStreetLabel(label) ||
      isCityOrCountryLabel(label) ||
      isPersonLabel(label),
  );
}

function isChezPersonFill(item: CeCoRawQuestion): boolean {
  if (!item.fillQ) return false;
  if (!/\bchez\s+_{2,}/i.test(item.fillQ)) return false;
  const correctChoice = item.text[item.textC] ?? "";
  if (/chez\s/i.test(correctChoice)) return true;
  if (isProperNameAnswer(item.fill)) return true;
  if (item.fillA?.some((a) => isProperNameAnswer(a))) return true;
  return false;
}

/** Questions à retirer des pools CE/CO base et moyen. */
export function isExcludedCeCoQuestion(item: CeCoRawQuestion): boolean {
  const textQ = item.textQ;
  const correctChoice = item.text[item.textC] ?? "";
  const fillAnswer = item.fill;

  if (EXCLUDED_TEXT_Q.test(textQ)) return true;
  if (/\badresse\b/i.test(textQ)) return true;
  if (/\bnuméro de téléphone\b/i.test(textQ)) return true;
  if (isChezPersonFill(item)) return true;

  if (/^qui /i.test(textQ)) {
    if (isProperNameAnswer(correctChoice) || isProperNameAnswer(fillAnswer)) return true;
    if (item.text.every((c) => isProperNameAnswer(c) || isPersonLabel(c))) return true;
  }

  if (isStreetLabel(fillAnswer) || isCityOrCountryLabel(fillAnswer)) return true;
  if (item.text.every(isCityOrCountryLabel)) return true;
  if (isProperNameAnswer(fillAnswer) && /appelle|nom|commerce|magasin|garage|agence|hôtel|hotel/i.test(textQ)) {
    return true;
  }

  return false;
}

/** Découpe un énoncé de saisie base en avant / après le blanc. */
export function parseFillStem(stem: string): { before: string; after: string } | null {
  const match = stem.match(/^(.*?)(_{3,}|_{2,})([\s\S]*)$/);
  if (!match) return null;
  return { before: match[1]!.trimEnd(), after: match[3]!.trimStart() };
}

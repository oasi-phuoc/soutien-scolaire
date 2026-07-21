/**
 * Matching tolérant pour la reconnaissance vocale française (lecture).
 * Gère les écarts orthographiques quand le son est le même (ex. « ob » ↔ « aube »).
 */

/** Normalise une transcription : minuscules, sans accents ni ponctuation. */
export function normalizeSpeechText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .replace(/[^a-z]/gu, "");
}

/** Retire les articles courants en début de mot reconnu. */
function stripLeadingArticles(text: string): string {
  for (const article of ["les", "des", "une", "le", "la", "un", "du", "de"]) {
    if (text.startsWith(article) && text.length > article.length) {
      return text.slice(article.length);
    }
  }
  return text;
}

/**
 * Approximation phonétique grossière (lecture CP–CE1).
 * « aube » → « ob », « eau » → « o », « château » → « chato », etc.
 */
export function toRoughFrenchPhonetic(text: string): string {
  let s = normalizeSpeechText(text);
  if (!s) return "";

  const rules: Array<[RegExp, string]> = [
    [/eau/g, "o"],
    [/œu|oeu/g, "eu"],
    [/tion/g, "sion"],
    [/ch/g, "ch"],
    [/ph/g, "f"],
    [/gn/g, "gn"],
    [/qu/g, "k"],
    [/ill/g, "y"],
    [/ain|ein|in|im|un/g, "in"],
    [/an|am|en|em/g, "an"],
    [/on|om/g, "on"],
    [/oi/g, "wa"],
    [/ou/g, "ou"],
    [/ai|ei/g, "e"],
    [/au/g, "o"],
    [/eu/g, "eu"],
  ];

  for (const [pattern, replacement] of rules) {
    s = s.replace(pattern, replacement);
  }

  // « e » muet final fréquent (aube → ob), sans toucher aux syllabes courtes « be », « le »…
  if (s.length >= 3 && s.endsWith("e") && !s.endsWith("eu")) {
    s = s.slice(0, -1);
  }

  return s;
}

function expandAliases(text: string): string[] {
  const base = normalizeSpeechText(text);
  if (!base) return [];
  const aliases = new Set([base, base.replace(/y/g, "i"), base.replace(/i/g, "y")]);
  return Array.from(aliases);
}

function literalMatch(heard: string, target: string): boolean {
  const h = normalizeSpeechText(heard);
  const t = normalizeSpeechText(target);
  if (!h || !t) return false;
  return expandAliases(target).some(
    (alias) => h === alias || h.includes(alias) || alias.includes(h),
  );
}

function phoneticMatch(heard: string, target: string, syllableMode: boolean): boolean {
  const heardPhon = toRoughFrenchPhonetic(stripLeadingArticles(normalizeSpeechText(heard)));
  const targetPhon = toRoughFrenchPhonetic(normalizeSpeechText(target));
  if (!heardPhon || !targetPhon) return false;

  if (heardPhon === targetPhon) return true;

  for (const alias of expandAliases(target)) {
    const aliasPhon = toRoughFrenchPhonetic(alias);
    if (!aliasPhon) continue;
    if (heardPhon === aliasPhon) return true;

    if (syllableMode) {
      // Le micro peut renvoyer un mot entier (« aube ») pour une syllabe cible (« ob »).
      if (heardPhon.startsWith(aliasPhon) || aliasPhon.startsWith(heardPhon)) return true;
    } else if (heardPhon.includes(aliasPhon) || aliasPhon.includes(heardPhon)) {
      return true;
    }
  }

  return false;
}

/** Correspondance pour une syllabe affichée (ex. « ob », « BA », « chu »). */
export function matchesSyllable(transcript: string, target: string): boolean {
  if (!transcript.trim() || !target.trim()) return false;
  return literalMatch(transcript, target) || phoneticMatch(transcript, target, true);
}

/** Correspondance pour un mot entier à prononcer (ex. « aube », « château »). */
export function matchesSpokenWord(transcript: string, target: string): boolean {
  if (!transcript.trim() || !target.trim()) return false;
  const stripped = stripLeadingArticles(normalizeSpeechText(transcript));
  const heard = stripped || normalizeSpeechText(transcript);
  return (
    literalMatch(heard, target) ||
    literalMatch(transcript, target) ||
    phoneticMatch(transcript, target, false)
  );
}

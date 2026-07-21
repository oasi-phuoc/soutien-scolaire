/**
 * Formes orales d'un mot de vocabulaire (pour TTS / MP3).
 * Ex. français → « la France, le français, la française »
 *     grand → « grand, grande »
 *     étudiant → « les études, un étudiant, une étudiante »
 */

import type { VocabWord } from "@/lib/curriculum/vocabulary-data";

const VOWEL_START = /^[aeiouyàâäéèêëïîôöùûüœæh]/i;

/** Clé de dédup qui conserve le/la, un/une (épicènes : le/la réceptionniste). */
function normalizePhraseKey(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .replace(/[''`]/g, "'")
    .replace(/\s+/g, " ");
}

/** Lemme sans article (comparer masculin / féminin). */
function normalizeLemmaKey(text: string): string {
  return normalizePhraseKey(text).replace(
    /^(l'|le|la|les|un|une|des|du|de|d')\s*/i,
    "",
  );
}

function joinArticle(article: string, word: string): string {
  const a = article.trim();
  if (!a) return word;
  if (a.endsWith("'")) return `${a}${word}`;
  return `${a} ${word}`;
}

/** Article féminin correspondant (un→une, le→la, …). */
export function feminizeArticle(article: string): string {
  const a = article.trim().toLowerCase();
  if (a === "un") return "une";
  if (a === "le") return "la";
  if (a === "du") return "de la";
  if (a === "au") return "à la";
  if (a === "ce") return "cette";
  if (a === "cet") return "cette";
  if (a === "mon") return "ma";
  if (a === "ton") return "ta";
  if (a === "son") return "sa";
  // l', la, les, une, des… inchangés
  return article.trim();
}

function defaultArticle(word: string, gender: "m" | "f"): string {
  if (VOWEL_START.test(word)) return "l'";
  return gender === "f" ? "la" : "le";
}

/**
 * Liste ordonnée des formes distinctes à prononcer.
 * Ordre : relatedWords → mot (avec article) → féminin (si différent).
 */
export function vocabSpokenForms(w: VocabWord): string[] {
  const forms: string[] = [];
  const seen = new Set<string>();

  const add = (phrase: string | undefined) => {
    const p = (phrase ?? "").trim();
    if (!p) return;
    const key = normalizePhraseKey(p);
    if (!key || seen.has(key)) return;
    seen.add(key);
    forms.push(p);
  };

  for (const related of w.relatedWords ?? []) add(related);

  const hasCountryRelated = (w.relatedWords ?? []).some((r) =>
    /^(l'|le|la|les)\s/i.test(r.trim()) || /^l'/i.test(r.trim()),
  );

  if (w.article) {
    // Noms avec article explicite (professions, objets…)
    add(joinArticle(w.article, w.word));
  } else if (w.feminine && hasCountryRelated) {
    // Nationalités : « le français », « la française »
    add(joinArticle(defaultArticle(w.word, "m"), w.word));
  } else {
    // Adjectifs / mots seuls : « grand »
    add(w.word);
  }

  if (w.feminine) {
    const femKey = normalizeLemmaKey(w.feminine);
    const mascKey = normalizeLemmaKey(w.word);
    const sameLemma = Boolean(femKey && femKey === mascKey);
    if (femKey && (!sameLemma || w.article)) {
      // Même lemme épicène (ex. réceptionniste) : ajouter « la … » si article.
      if (w.article) {
        add(joinArticle(feminizeArticle(w.article), w.feminine));
      } else if (!sameLemma && hasCountryRelated) {
        add(joinArticle(defaultArticle(w.feminine, "f"), w.feminine));
      } else if (!sameLemma) {
        // Adjectifs : « grande » sans article
        add(w.feminine);
      }
    }
  }

  return forms;
}

/** Texte lu à voix haute (formes séparées par une virgule). */
export function vocabSpokenText(w: VocabWord): string {
  return vocabSpokenForms(w).join(", ");
}

/** Slug fichier audio : nom de fichier image (sans chemin), sinon le mot. */
export function vocabAudioSlug(w: VocabWord): string {
  if (w.image) {
    const name = w.image.split("/").pop() ?? w.image;
    const base = name.replace(/\.(webp|png|svg|jpe?g)$/i, "");
    if (base) return base.toLowerCase();
  }
  return w.word.trim().toLowerCase();
}

export function vocabAudioFolder(theme: { imageFolder?: string; section: string }): string {
  return theme.imageFolder ?? theme.section;
}

export function vocabAudioPath(
  gender: "f" | "m",
  folder: string,
  slug: string,
): string {
  return `/assets/words/son_${gender}/vocab/${folder}/${slug}.mp3`;
}

/** Audio vocab à la racine de son_f/vocab (prioritaire sur V1, V2…). */
export function vocabAudioRootPath(gender: "f" | "m", slug: string): string {
  return `/assets/words/son_${gender}/vocab/${slug}.mp3`;
}

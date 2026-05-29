// Vocabulary lesson content: types + data for all 16 A1/A2 vocabulary lessons.
// Types are imported from conjugation-data to avoid duplication.

import type { TheoryBlock, Exercise } from "./conjugation-data";

export type { TheoryBlock, Exercise };

export type VocabLesson = {
  slug: string;
  code: string;
  level: "A1" | "A2";
  title: string;
  theory: TheoryBlock[];
  exercises: Exercise[];
};

// ── New VocabTheme system (step-based runner) ─────────────────────────────────

export type VocabWord = {
  word: string;
  article?: string;      // "le" / "la" / "les" / "un" / "une"
  image?: string;        // path under /public/vocab/images/
  audio?: string;        // path under /public/vocab/audio/
  definition?: string;   // short definition in French
  gender?: "m" | "f";
};

export type VocabSentence = {
  sentence: string; // uses ___ for the blank
  answer: string;   // exact word that fills the blank
};

export type VocabTheoryBlock =
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "clocks"; items: Array<{ h: number; m: number; label?: string }>; cols?: number }
  | { type: "section"; title?: string; items: string[] }
  | { type: "note"; text: string };

export type VocabTheme = {
  slug: string;
  code: string;
  title: string;
  section: "A0" | "A1" | "A2" | "B1" | "B2";
  words: VocabWord[];
  sentences?: VocabSentence[];
  theory?: VocabTheoryBlock[];
};

// ── Imports ───────────────────────────────────────────────────────────────────

import { A0_VOC_NATIONALITES } from "./content/francais/vocabulaire-a0-nationalites";
import { A0_SE_PRESENTER } from "./content/francais/vocabulaire-a0-presenter";
import { A1_VOC_FAMILLE } from "./content/francais/vocabulaire-a1-famille";
import { A1_VOC_DESCRIPTION } from "./content/francais/vocabulaire-a1-description";
import { A1_VOC_HEURE } from "./content/francais/vocabulaire-a1-heure";
import { A1_VOC_L02 } from "./content/francais/vocabulaire-a1-l02";
import { A1_VOC_L13 } from "./content/francais/vocabulaire-a1-l13";
import { A1_VOC_L16 } from "./content/francais/vocabulaire-a1-l16";
import { A1_VOC_L21 } from "./content/francais/vocabulaire-a1-l21";
import { A1_VOC_L26 } from "./content/francais/vocabulaire-a1-l26";
import { A1_VOC_L12 } from "./content/francais/vocabulaire-a1-l12";
import { A1_VOC_L17 } from "./content/francais/vocabulaire-a1-l17";
import { A1_VOC_L27 } from "./content/francais/vocabulaire-a1-l27";
import { A1_VOC_L18 } from "./content/francais/vocabulaire-a1-l18";
import { VACANCES_PLAGE } from "./content/francais/vocabulaire-a1-vacances-plage";
import { A2_VOC_L01 } from "./content/francais/vocabulaire-a2-l01";
import { A2_VOC_L02 } from "./content/francais/vocabulaire-a2-l02";
import { A2_VOC_L03 } from "./content/francais/vocabulaire-a2-l03";
import { A2_VOC_L04 } from "./content/francais/vocabulaire-a2-l04";
import { A2_VOC_L05 } from "./content/francais/vocabulaire-a2-l05";
import { A2_VOC_L06 } from "./content/francais/vocabulaire-a2-l06";
import { A2_VOC_L07 } from "./content/francais/vocabulaire-a2-l07";
import { A2_VOC_L08 } from "./content/francais/vocabulaire-a2-l08";

// ── Registry ──────────────────────────────────────────────────────────────────

export const VOCAB_LESSONS: VocabLesson[] = [
  A0_VOC_NATIONALITES,
  A0_SE_PRESENTER,
  A1_VOC_FAMILLE,
  A1_VOC_DESCRIPTION,
  A1_VOC_HEURE,
  A1_VOC_L02,
  A1_VOC_L13,
  A1_VOC_L16,
  A1_VOC_L21,
  A1_VOC_L26,
  A1_VOC_L12,
  A1_VOC_L17,
  A1_VOC_L27,
  A1_VOC_L18,
  VACANCES_PLAGE,
  A2_VOC_L01,
  A2_VOC_L02,
  A2_VOC_L03,
  A2_VOC_L04,
  A2_VOC_L05,
  A2_VOC_L06,
  A2_VOC_L07,
  A2_VOC_L08,
];

export function getVocabLesson(slug: string): VocabLesson | undefined {
  return VOCAB_LESSONS.find((l) => l.slug === slug);
}

export function getAllVocabLessons(): VocabLesson[] {
  return VOCAB_LESSONS;
}

// ── VocabTheme registry ───────────────────────────────────────────────────────

import { FAMILLE_THEME } from "./content/francais/vocab-theme-famille";
import { NATIONALITES_THEME } from "./content/francais/vocab-theme-nationalites";
import { PRESENTER_THEME } from "./content/francais/vocab-theme-presenter";
import { NATIONALITES_A1_THEME } from "./content/francais/vocab-theme-nationalites-a1";
import { DESCRIPTION_THEME } from "./content/francais/vocab-theme-description";
import { HEURE_THEME } from "./content/francais/vocab-theme-heure";
import { TRANSPORT_THEME } from "./content/francais/vocab-theme-transport";
import { NOURRITURE_THEME } from "./content/francais/vocab-theme-nourriture";
import { TEMPS_THEME } from "./content/francais/vocab-theme-temps";
import { CORPS_THEME } from "./content/francais/vocab-theme-corps";
import { VILLE_THEME } from "./content/francais/vocab-theme-ville";
import { LOGEMENT_THEME } from "./content/francais/vocab-theme-logement";
import { VETEMENTS_THEME } from "./content/francais/vocab-theme-vetements";
import { LOISIRS_THEME } from "./content/francais/vocab-theme-loisirs";
import { VACANCES_THEME } from "./content/francais/vocab-theme-vacances";
import { VOYAGES_THEME } from "./content/francais/vocab-theme-voyages";
import { SANTE_THEME } from "./content/francais/vocab-theme-sante";
import { TRAVAIL_THEME } from "./content/francais/vocab-theme-travail";
import { SORTIES_THEME } from "./content/francais/vocab-theme-sorties";
import { CUISINE_THEME } from "./content/francais/vocab-theme-cuisine";
import { RELATIONS_THEME } from "./content/francais/vocab-theme-relations";
import { MEDIAS_THEME } from "./content/francais/vocab-theme-medias";
import { VILLE_SERVICES_THEME } from "./content/francais/vocab-theme-ville-services";

export const VOCAB_THEMES: VocabTheme[] = [
  NATIONALITES_THEME,
  PRESENTER_THEME,
  FAMILLE_THEME,
  NATIONALITES_A1_THEME,
  DESCRIPTION_THEME,
  HEURE_THEME,
  TRANSPORT_THEME,
  NOURRITURE_THEME,
  TEMPS_THEME,
  CORPS_THEME,
  VILLE_THEME,
  LOGEMENT_THEME,
  VETEMENTS_THEME,
  LOISIRS_THEME,
  VACANCES_THEME,
  VOYAGES_THEME,
  SANTE_THEME,
  TRAVAIL_THEME,
  SORTIES_THEME,
  CUISINE_THEME,
  RELATIONS_THEME,
  MEDIAS_THEME,
  VILLE_SERVICES_THEME,
];

export function getVocabTheme(slug: string): VocabTheme | undefined {
  return VOCAB_THEMES.find((t) => t.slug === slug);
}

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
  article?: string;        // "le" / "la" / "l'" / "un" / "une"
  feminine?: string;       // feminine form, e.g. "française" for "français"
  relatedWords?: string[]; // extra forms shown on card, e.g. ["la France"]
  image?: string;          // path under /public/vocab/images/
  audio?: string;          // path under /public/vocab/audio/
  definition?: string;     // short definition in French
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
  section: "A0" | "A1" | "A2" | "B1" | "B2" | "V1" | "V2" | "V3" | "V4" | "V5" | "V6" | "V7" | "V8" | "V9";
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
  return VOCAB_THEMES.find((t) => t.slug === slug) ?? VOCAB_V_THEMES.find((t) => t.slug === slug);
}

// ── V1-V9 themes ────────────────────────────────────────────────────────────

import { V1_NATIONALITES_THEME } from "./content/francais/vocab-v1-nationalites";
import { V1_PROFESSIONS_THEME } from "./content/francais/vocab-v1-professions";
import { V1_FAMILLE_THEME } from "./content/francais/vocab-v1-famille";
import { V1_ETAT_CIVIL_THEME } from "./content/francais/vocab-v1-etat-civil";
import { V1_DESCRIPTION_PHYSIQUE_THEME } from "./content/francais/vocab-v1-description-physique";
import { V1_DESCRIPTION_MORALE_THEME } from "./content/francais/vocab-v1-description-morale";
import { V2_JOURS_MOIS_DATES_THEME } from "./content/francais/vocab-v2-jours-mois-dates";
import { V2_HEURE_THEME } from "./content/francais/vocab-v2-heure";
import { V2_SAISONS_THEME } from "./content/francais/vocab-v2-saisons";
import { V2_METEO_THEME } from "./content/francais/vocab-v2-meteo";
import { V3_SPORT_THEME } from "./content/francais/vocab-v3-sport";
import { V3_ACTIVITES_SPORTIVES_THEME } from "./content/francais/vocab-v3-activites-sportives";
import { V4_TYPE_LOGEMENT_THEME } from "./content/francais/vocab-v4-type-logement";
import { V4_ADRESSE_THEME } from "./content/francais/vocab-v4-adresse";
import { V4_PIECES_MAISON_THEME } from "./content/francais/vocab-v4-pieces-maison";
import { V4_IMMEUBLE_THEME } from "./content/francais/vocab-v4-immeuble";
import { V4_PANNES_THEME } from "./content/francais/vocab-v4-pannes";
import { V4_EQUIPEMENTS_THEME } from "./content/francais/vocab-v4-equipements";
import { V5_MATIERES_THEME } from "./content/francais/vocab-v5-matieres";
import { V5_MATERIEL_SCOLAIRE_THEME } from "./content/francais/vocab-v5-materiel-scolaire";
import { V5_STRUCTURE_ECOLE_THEME } from "./content/francais/vocab-v5-structure-ecole";
import { V6_VETEMENTS_THEME } from "./content/francais/vocab-v6-vetements";
import { V6_ACCESSOIRES_THEME } from "./content/francais/vocab-v6-accessoires";
import { V6_COULEURS_THEME } from "./content/francais/vocab-v6-couleurs";
import { V6_MATIERES_THEME } from "./content/francais/vocab-v6-matieres";
import { V7_FRUITS_THEME } from "./content/francais/vocab-v7-fruits";
import { V7_LEGUMES_THEME } from "./content/francais/vocab-v7-legumes";
import { V7_RESTAURANT_THEME } from "./content/francais/vocab-v7-restaurant";
import { V7_BOULANGERIE_THEME } from "./content/francais/vocab-v7-boulangerie";
import { V7_CUISINE_THEME } from "./content/francais/vocab-v7-cuisine";
import { V7_RECETTES_THEME } from "./content/francais/vocab-v7-recettes";
import { V7_QUANTITES_THEME } from "./content/francais/vocab-v7-quantites";
import { V8_CORPS_THEME } from "./content/francais/vocab-v8-corps";
import { V8_MALADIES_THEME } from "./content/francais/vocab-v8-maladies";
import { V8_MEDECINS_THEME } from "./content/francais/vocab-v8-medecins";
import { V8_PHARMACIE_THEME } from "./content/francais/vocab-v8-pharmacie";
import { V9_VILLE_THEME } from "./content/francais/vocab-v9-ville";
import { V9_TRANSPORT_THEME } from "./content/francais/vocab-v9-transport";
import { V9_DIRECTION_THEME } from "./content/francais/vocab-v9-direction";
import { V9_ESPACE_CULTUREL_THEME } from "./content/francais/vocab-v9-espace-culturel";
import { V9_TRAIN_THEME } from "./content/francais/vocab-v9-train";
import { V9_AEROPORT_THEME } from "./content/francais/vocab-v9-aeroport";
import { V9_HOTEL_THEME } from "./content/francais/vocab-v9-hotel";
import { V9_PAYSAGE_THEME } from "./content/francais/vocab-v9-paysage";

export const VOCAB_V_THEMES: VocabTheme[] = [
  V1_NATIONALITES_THEME,
  V1_PROFESSIONS_THEME,
  V1_FAMILLE_THEME,
  V1_ETAT_CIVIL_THEME,
  V1_DESCRIPTION_PHYSIQUE_THEME,
  V1_DESCRIPTION_MORALE_THEME,
  V2_JOURS_MOIS_DATES_THEME,
  V2_HEURE_THEME,
  V2_SAISONS_THEME,
  V2_METEO_THEME,
  V3_SPORT_THEME,
  V3_ACTIVITES_SPORTIVES_THEME,
  V4_TYPE_LOGEMENT_THEME,
  V4_ADRESSE_THEME,
  V4_PIECES_MAISON_THEME,
  V4_IMMEUBLE_THEME,
  V4_PANNES_THEME,
  V4_EQUIPEMENTS_THEME,
  V5_MATIERES_THEME,
  V5_MATERIEL_SCOLAIRE_THEME,
  V5_STRUCTURE_ECOLE_THEME,
  V6_VETEMENTS_THEME,
  V6_ACCESSOIRES_THEME,
  V6_COULEURS_THEME,
  V6_MATIERES_THEME,
  V7_FRUITS_THEME,
  V7_LEGUMES_THEME,
  V7_RESTAURANT_THEME,
  V7_BOULANGERIE_THEME,
  V7_CUISINE_THEME,
  V7_RECETTES_THEME,
  V7_QUANTITES_THEME,
  V8_CORPS_THEME,
  V8_MALADIES_THEME,
  V8_MEDECINS_THEME,
  V8_PHARMACIE_THEME,
  V9_VILLE_THEME,
  V9_TRANSPORT_THEME,
  V9_DIRECTION_THEME,
  V9_ESPACE_CULTUREL_THEME,
  V9_TRAIN_THEME,
  V9_AEROPORT_THEME,
  V9_HOTEL_THEME,
  V9_PAYSAGE_THEME,
];

export function getVocabVTheme(slug: string): VocabTheme | undefined {
  return VOCAB_V_THEMES.find((t) => t.slug === slug);
}

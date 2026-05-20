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

// Grammar lesson content: types + data for all 28 A1/A2 grammar lessons.
// Types are imported from conjugation-data to avoid duplication.

import type { TheoryBlock, Exercise, VerbToggleVerb } from "./conjugation-data";

export type { TheoryBlock, Exercise, VerbToggleVerb };

export type GrammarLesson = {
  slug: string;
  code: string;
  level: "A1" | "A2";
  title: string;
  theory: TheoryBlock[];
  exercises: Exercise[];
  evalExercises?: Exercise[];
};

// ── Imports ───────────────────────────────────────────────────────────────────

import { A1_GR_L01 } from "./content/francais/grammaire-r1.1";
import { A1_GR_CEST } from "./content/francais/grammaire-r1.9";
import { A1_GR_PHRASES } from "./content/francais/grammaire-r1.6";
import { A1_GR_L02 } from "./content/francais/grammaire-r1.7";
import { A1_GR_INTERRO } from "./content/francais/grammaire-r1.8";
import { A1_GR_L03 } from "./content/francais/grammaire-r1.4";
import { A1_GR_L04 } from "./content/francais/grammaire-r1.3";
import { A1_GR_L05 } from "./content/francais/grammaire-r3.2";
import { A1_GR_L06 } from "./content/francais/grammaire-r1.7b";
import { A1_GR_L10 } from "./content/francais/grammaire-r2.4";
import { A1_GR_L11 } from "./content/francais/grammaire-r2.5";
import { A1_GR_L14 } from "./content/francais/grammaire-r3.1";
import { A1_GR_L17 } from "./content/francais/grammaire-r3.3";
import { A1_GR_L18 } from "./content/francais/grammaire-r3.4b";
import { A1_GR_L19 } from "./content/francais/grammaire-r3.5b";
import { A1_GR_L22 } from "./content/francais/grammaire-r3.6b";
import { A1_GR_L23 } from "./content/francais/grammaire-r3.7b";
import { A1_GR_L24 } from "./content/francais/grammaire-r4.7";
import { A1_GR_L25 } from "./content/francais/grammaire-r4.8";
import { A1_GR_L07 } from "./content/francais/grammaire-r3.4";
import { A1_GR_L08 } from "./content/francais/grammaire-r3.5";
import { A1_GR_L09 } from "./content/francais/grammaire-r3.6";
import { A1_GR_L20 } from "./content/francais/grammaire-r3.7";
import { A2_GR_L07 } from "./content/francais/grammaire-r4.12";
import { A2_GR_L09 } from "./content/francais/grammaire-r4.13";
import { A2_GR_L11 } from "./content/francais/grammaire-r4.17";
import { A2_GR_L12 } from "./content/francais/grammaire-r4.18";
import { A2_GR_L18 } from "./content/francais/grammaire-r4.16";
import { A2_GR_L19 } from "./content/francais/grammaire-r4.19";
import { A2_GR_L25 } from "./content/francais/grammaire-r4.20";
import { A2_GR_L35 } from "./content/francais/grammaire-r4.22";
import { A2_GR_L36 } from "./content/francais/grammaire-r4.23";
import { A2_GR_L39 } from "./content/francais/grammaire-r4.27";
import { A2_GR_L42 } from "./content/francais/grammaire-r4.21";
import { A2_GR_L52 } from "./content/francais/grammaire-r4.28";

// ── Registry ──────────────────────────────────────────────────────────────────

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  A1_GR_L01,
  A1_GR_CEST,
  A1_GR_PHRASES,
  A1_GR_L02,
  A1_GR_INTERRO,
  A1_GR_L03,
  A1_GR_L04,
  A1_GR_L05,
  A1_GR_L06,
  A1_GR_L10,
  A1_GR_L11,
  A1_GR_L14,
  A1_GR_L17,
  A1_GR_L18,
  A1_GR_L19,
  A1_GR_L22,
  A1_GR_L23,
  A1_GR_L24,
  A1_GR_L25,
  A1_GR_L07,
  A1_GR_L08,
  A1_GR_L09,
  A1_GR_L20,
  A2_GR_L07,
  A2_GR_L09,
  A2_GR_L11,
  A2_GR_L12,
  A2_GR_L18,
  A2_GR_L19,
  A2_GR_L25,
  A2_GR_L35,
  A2_GR_L36,
  A2_GR_L39,
  A2_GR_L42,
  A2_GR_L52,
];

export function getGrammarLesson(slug: string): GrammarLesson | undefined {
  const lesson = GRAMMAR_LESSONS.find((l) => l.slug === slug);
  if (!lesson) return undefined;
  if (lesson.code.startsWith("R1.") || lesson.code.startsWith("R2.")) {
    return { ...lesson, evalExercises: lesson.exercises };
  }
  return lesson;
}

export function getAllGrammarLessons(): GrammarLesson[] {
  return GRAMMAR_LESSONS;
}

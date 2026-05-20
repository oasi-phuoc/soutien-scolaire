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
};

// ── Imports ───────────────────────────────────────────────────────────────────

import { A1_GR_L01 } from "./content/francais/a1-gr-l01";
import { A1_GR_PHRASES } from "./content/francais/a1-gr-phrases";
import { A1_GR_L02 } from "./content/francais/a1-gr-l02";
import { A1_GR_INTERRO } from "./content/francais/a1-gr-interro";
import { A1_GR_L03 } from "./content/francais/a1-gr-l03";
import { A1_GR_L04 } from "./content/francais/a1-gr-l04";
import { A1_GR_L05 } from "./content/francais/a1-gr-l05";
import { A1_GR_L06 } from "./content/francais/a1-gr-l06";
import { A1_GR_L10 } from "./content/francais/a1-gr-l10";
import { A1_GR_L11 } from "./content/francais/a1-gr-l11";
import { A1_GR_L14 } from "./content/francais/a1-gr-l14";
import { A1_GR_L17 } from "./content/francais/a1-gr-l17";
import { A1_GR_L18 } from "./content/francais/a1-gr-l18";
import { A1_GR_L19 } from "./content/francais/a1-gr-l19";
import { A1_GR_L22 } from "./content/francais/a1-gr-l22";
import { A1_GR_L23 } from "./content/francais/a1-gr-l23";
import { A1_GR_L24 } from "./content/francais/a1-gr-l24";
import { A1_GR_L25 } from "./content/francais/a1-gr-l25";
import { A1_GR_L07 } from "./content/francais/a1-gr-l07";
import { A1_GR_L08 } from "./content/francais/a1-gr-l08";
import { A1_GR_L09 } from "./content/francais/a1-gr-l09";
import { A1_GR_L20 } from "./content/francais/a1-gr-l20";
import { A2_GR_L07 } from "./content/francais/a2-gr-l07";
import { A2_GR_L09 } from "./content/francais/a2-gr-l09";
import { A2_GR_L11 } from "./content/francais/a2-gr-l11";
import { A2_GR_L12 } from "./content/francais/a2-gr-l12";
import { A2_GR_L18 } from "./content/francais/a2-gr-l18";
import { A2_GR_L19 } from "./content/francais/a2-gr-l19";
import { A2_GR_L25 } from "./content/francais/a2-gr-l25";
import { A2_GR_L35 } from "./content/francais/a2-gr-l35";
import { A2_GR_L36 } from "./content/francais/a2-gr-l36";
import { A2_GR_L39 } from "./content/francais/a2-gr-l39";
import { A2_GR_L42 } from "./content/francais/a2-gr-l42";
import { A2_GR_L52 } from "./content/francais/a2-gr-l52";

// ── Registry ──────────────────────────────────────────────────────────────────

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  A1_GR_L01,
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
  return GRAMMAR_LESSONS.find((l) => l.slug === slug);
}

export function getAllGrammarLessons(): GrammarLesson[] {
  return GRAMMAR_LESSONS;
}

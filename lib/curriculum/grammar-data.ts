// Données françaises unifiées — grammaire + conjugaison
// Source unique pour tous les types, leçons et fonctions de recherche.

// ── Types ─────────────────────────────────────────────────────────────────────

export type ConjugRow = { pronoun: string; form: string; phonetic?: string };
export type ConjugTable = { verb: string; rows: ConjugRow[]; accentForms?: boolean; verbBold?: boolean };

export type Trans = Partial<Record<"en" | "ar" | "fa" | "ti" | "uk", string>>;
type TransList = Partial<Record<"en" | "ar" | "fa" | "ti" | "uk", string[]>>;

export type VerbToggleVerb = {
  infinitive: string;
  radical: string;
  reflexivePronouns?: string[];
  meaning?: string;
  example?: string;
  rows: Array<{ pronoun: string; ending: string; radical?: string }>;
};

export type TheoryBlock =
  | { type: "heading"; text: string; trans?: Trans; sub?: boolean; accent?: boolean }
  | { type: "table"; tables: ConjugTable[] }
  | { type: "rule"; text: string; examples?: { correct: string; wrong?: string }[] }
  | { type: "note"; text: string }
  | { type: "vocab"; title: string; items: string[] }
  | { type: "grid"; headers: string[]; rows: string[][]; transHeaders?: TransList; transRows?: Partial<Record<"en" | "ar" | "fa" | "ti" | "uk", string[][]>>; pronounGrid?: boolean; boldFirstCol?: boolean; equalCols?: boolean }
  | { type: "plain_list"; label?: string; items: string[]; transItems?: TransList; noBulletItems?: number[]; allBullets?: boolean }
  | { type: "highlight"; label: string; items: string[]; transLabel?: Trans; transItems?: TransList; noFirstBullet?: boolean; inlineArrows?: boolean; noBulletItems?: number[] }
  | { type: "verb_toggle"; verbs: VerbToggleVerb[]; negation?: boolean; buttonCols?: number; noArrow?: boolean }
  | { type: "clock_display"; clocks: { h: number; m: number; label?: string }[]; cols?: number }
  | { type: "word_cards"; items: string[]; cols?: 2 | 3 | 4 }
  | { type: "illus_cards"; items: Array<{ label: string; svg: string }>; cols?: 2 | 3 | 4 | 5 }
  | { type: "grammar_link"; text: string; href: string }
  | { type: "selector"; labelPrefix?: string; tabs: Array<{ label: string; content: TheoryBlock[] }> };

export type QcmItem = { sentence: string; svg?: string; choices: string[]; correctIdx: number };
export type FillItem = { sentence: string; hint: string; answer: string };
export type MatchPair = { left: string; right: string };

export type Exercise =
  | { type: "qcm"; title: string; instruction: string; transInstruction?: Trans; items: QcmItem[]; pool?: QcmItem[]; poolSize?: number; toggleChoices?: boolean; inlineChoices?: boolean; svgChoiceLayout?: "stacked" }
  | { type: "fill"; title: string; instruction: string; transInstruction?: Trans; items: FillItem[]; pool?: FillItem[]; poolSize?: number }
  | { type: "fill_select"; title: string; instruction: string; transInstruction?: Trans; wordBank: string[]; items: FillItem[]; pool?: FillItem[]; poolSize?: number }
  | { type: "match"; title: string; instruction: string; transInstruction?: Trans; pairs: MatchPair[]; pool?: MatchPair[]; poolSize?: number; leftLabel?: string; rightLabel?: string }
  | { type: "write"; title: string; instruction: string; transInstruction?: Trans; prompts?: string[]; promptPool?: string[]; promptPoolSize?: number; verb?: "être" | "avoir"; verbPool?: string[]; verbPoolSize?: number; promptLayout?: "stacked" }
  | { type: "trueFalse"; title: string; instruction: string; transInstruction?: Trans; items: { statement: string; answer: boolean }[] }
  | { type: "order"; title: string; instruction: string; transInstruction?: Trans; items: { sentence: string; hint?: string }[] }
  | { type: "classify"; title: string; instruction: string; transInstruction?: Trans; categories: string[]; items: { word: string; categoryIdx: number }[]; pool?: { word: string; categoryIdx: number }[]; poolSize?: number; allowPartialValidation?: boolean }
  | { type: "word_order"; title: string; instruction: string; transInstruction?: Trans; items: { sentence: string; words: string[] }[]; pool?: { sentence: string; words: string[] }[]; poolSize?: number; allowPartialValidation?: boolean }
  | { type: "color_highlight"; title: string; instruction: string; transInstruction?: Trans; colors: string[]; items: { words: string[]; answers: (number | null)[] }[] }
  | { type: "clock_read"; title: string; instruction: string; transInstruction?: Trans; clocks: { h: number; m: number; label: string; answer: string }[] }
  | { type: "tag2"; title: string; instruction: string; transInstruction?: Trans; pool: { word: string; companion?: string; gender: "M" | "F" | null; number: "S" | "P" }[]; poolSize?: number };

export type GrammarLesson = {
  slug: string;
  code: string;
  level: "A1" | "A2";
  title: string;
  theory: TheoryBlock[];
  exercises: Exercise[];
  evalExercises?: Exercise[];
};

export type ConjLesson = {
  slug: string;
  code: string;
  level: "A1" | "A2";
  title: string;
  theory: TheoryBlock[];
  theory2?: TheoryBlock[];
  midExercises?: Exercise[];
  exercises: Exercise[];
  evalExercises?: Exercise[];
};

// ── Imports — grammaire ───────────────────────────────────────────────────────

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

// ── Imports — conjugaison ─────────────────────────────────────────────────────

import { A1_CONJ_L00 } from "./content/francais/grammaire-r1.1b";
import { A1_CONJ_L01 } from "./content/francais/grammaire-r1.2";
import { A1_CONJ_L07 } from "./content/francais/grammaire-r1.5";
import { A1_CONJ_L08 } from "./content/francais/grammaire-r2.1";
import { A1_CONJ_L09 } from "./content/francais/grammaire-r2.2";
import { A1_CONJ_L15 } from "./content/francais/grammaire-r2.3b";
import { A1_CONJ_L20 } from "./content/francais/grammaire-r4.1";
import { A1_CONJ_L27 } from "./content/francais/grammaire-r4.2";
import { A1_CONJ_L28 } from "./content/francais/grammaire-r4.3";
import { A1_CONJ_L29 } from "./content/francais/grammaire-r4.4";
import { A1_CONJ_L30 } from "./content/francais/grammaire-r4.5";
import { NEGATION_PASSE_COMPOSE } from "./content/francais/grammaire-r4.6";
import { A2_CONJ_L01 } from "./content/francais/grammaire-r4.9";
import { A2_CONJ_L02 } from "./content/francais/grammaire-r4.10";
import { A2_CONJ_L03 } from "./content/francais/grammaire-r4.11";
import { A2_CONJ_L04 } from "./content/francais/grammaire-r4.14";
import { A2_CONJ_L05 } from "./content/francais/grammaire-r4.15";
import { A2_CONJ_L06 } from "./content/francais/grammaire-r4.24";
import { A2_CONJ_L07 } from "./content/francais/grammaire-r4.25";
import { A2_CONJ_L08 } from "./content/francais/grammaire-r4.26";

// ── Registre — grammaire ──────────────────────────────────────────────────────

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

// ── Registre — conjugaison ────────────────────────────────────────────────────

export const CONJUGAISON_LESSONS: ConjLesson[] = [
  A1_CONJ_L00,
  A1_CONJ_L01,
  A1_CONJ_L07,
  A1_CONJ_L08,
  A1_CONJ_L09,
  A1_CONJ_L15,
  A1_CONJ_L20,
  A1_CONJ_L27,
  A1_CONJ_L28,
  A1_CONJ_L29,
  A1_CONJ_L30,
  NEGATION_PASSE_COMPOSE,
  A2_CONJ_L01,
  A2_CONJ_L02,
  A2_CONJ_L03,
  A2_CONJ_L04,
  A2_CONJ_L05,
  A2_CONJ_L06,
  A2_CONJ_L07,
  A2_CONJ_L08,
];

// ── Fonctions de recherche ────────────────────────────────────────────────────

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

export function getConjLesson(slug: string): ConjLesson | undefined {
  const lesson = CONJUGAISON_LESSONS.find((l) => l.slug === slug);
  if (!lesson) return undefined;
  if (lesson.code.startsWith("R1.") || lesson.code.startsWith("R2.")) {
    return { ...lesson, evalExercises: lesson.exercises };
  }
  return lesson;
}

export function getAllConjLessons(): ConjLesson[] {
  return CONJUGAISON_LESSONS;
}

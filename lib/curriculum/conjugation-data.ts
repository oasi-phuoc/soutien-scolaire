// Conjugaison lesson content: types + data for all 18 A1/A2 conjugation lessons.

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
  | { type: "grammar_link"; text: string; href: string };

export type QcmItem = { sentence: string; choices: string[]; correctIdx: number };
export type FillItem = { sentence: string; hint: string; answer: string };
export type MatchPair = { left: string; right: string };

export type Exercise =
  | { type: "qcm"; title: string; instruction: string; transInstruction?: Trans; items: QcmItem[]; pool?: QcmItem[]; poolSize?: number; toggleChoices?: boolean; inlineChoices?: boolean }
  | { type: "fill"; title: string; instruction: string; transInstruction?: Trans; items: FillItem[]; pool?: FillItem[]; poolSize?: number }
  | { type: "match"; title: string; instruction: string; transInstruction?: Trans; pairs: MatchPair[]; pool?: MatchPair[]; poolSize?: number; leftLabel?: string; rightLabel?: string }
  | { type: "write"; title: string; instruction: string; transInstruction?: Trans; prompts?: string[]; verb?: "être" | "avoir"; verbPool?: string[]; verbPoolSize?: number }
  | { type: "trueFalse"; title: string; instruction: string; transInstruction?: Trans; items: { statement: string; answer: boolean }[] }
  | { type: "order"; title: string; instruction: string; transInstruction?: Trans; items: { sentence: string; hint?: string }[] }
  | { type: "classify"; title: string; instruction: string; transInstruction?: Trans; categories: string[]; items: { word: string; categoryIdx: number }[]; pool?: { word: string; categoryIdx: number }[]; poolSize?: number }
  | { type: "word_order"; title: string; instruction: string; items: { sentence: string; words: string[] }[] }
  | { type: "color_highlight"; title: string; instruction: string; colors: string[]; items: { words: string[]; answers: (number | null)[] }[] }
  | { type: "clock_read"; title: string; instruction: string; clocks: { h: number; m: number; label: string; answer: string }[] }
  | { type: "tag2"; title: string; instruction: string; transInstruction?: Trans; pool: { word: string; companion?: string; gender: "M" | "F" | null; number: "S" | "P" }[]; poolSize?: number };

export type ConjLesson = {
  slug: string;
  code: string;
  level: "A1" | "A2";
  title: string;
  theory: TheoryBlock[];
  theory2?: TheoryBlock[];
  midExercises?: Exercise[];
  exercises: Exercise[];
};

// ── Imports ───────────────────────────────────────────────────────────────────

import { A1_CONJ_L00 } from "./content/francais/conjugaison-a1-l00";
import { A1_CONJ_L01 } from "./content/francais/conjugaison-a1-l01";
import { A1_CONJ_L07 } from "./content/francais/conjugaison-a1-l07";
import { A1_CONJ_L08 } from "./content/francais/conjugaison-a1-l08";
import { A1_CONJ_L09 } from "./content/francais/conjugaison-a1-l09";
import { A1_CONJ_L15 } from "./content/francais/conjugaison-a1-l15";
import { A1_CONJ_L20 } from "./content/francais/conjugaison-a1-l20";
import { A1_CONJ_L27 } from "./content/francais/conjugaison-a1-l27";
import { A1_CONJ_L28 } from "./content/francais/conjugaison-a1-l28";
import { A1_CONJ_L29 } from "./content/francais/conjugaison-a1-l29";
import { A1_CONJ_L30 } from "./content/francais/conjugaison-a1-l30";
import { NEGATION_PASSE_COMPOSE } from "./content/francais/conjugaison-a1-negation-passe-compose";
import { A2_CONJ_L01 } from "./content/francais/conjugaison-a2-l01";
import { A2_CONJ_L02 } from "./content/francais/conjugaison-a2-l02";
import { A2_CONJ_L03 } from "./content/francais/conjugaison-a2-l03";
import { A2_CONJ_L04 } from "./content/francais/conjugaison-a2-l04";
import { A2_CONJ_L05 } from "./content/francais/conjugaison-a2-l05";
import { A2_CONJ_L06 } from "./content/francais/conjugaison-a2-l06";
import { A2_CONJ_L07 } from "./content/francais/conjugaison-a2-l07";
import { A2_CONJ_L08 } from "./content/francais/conjugaison-a2-l08";

// ── Registry ──────────────────────────────────────────────────────────────────

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

export function getConjLesson(slug: string): ConjLesson | undefined {
  return CONJUGAISON_LESSONS.find((l) => l.slug === slug);
}

export function getAllConjLessons(): ConjLesson[] {
  return CONJUGAISON_LESSONS;
}

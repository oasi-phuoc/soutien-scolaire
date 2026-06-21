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
  note?: string;
  noteTrans?: Partial<Record<"en" | "ar" | "fa" | "ti" | "uk", string>>;
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
  | { type: "fill_select"; title: string; instruction: string; transInstruction?: Trans; wordBank: string[]; items: FillItem[]; pool?: FillItem[]; poolSize?: number; letterSelect?: boolean; hideWordBank?: boolean }
  | { type: "match"; title: string; instruction: string; transInstruction?: Trans; pairs: MatchPair[]; pool?: MatchPair[]; poolSize?: number; leftLabel?: string; rightLabel?: string }
  | { type: "write"; title: string; instruction: string; transInstruction?: Trans; prompts?: string[]; promptPool?: string[]; promptPoolSize?: number; verb?: "être" | "avoir"; verbPool?: string[]; verbPoolSize?: number; promptLayout?: "stacked"; imagePool?: { image: string; promptPool: string[] }[] }
  | { type: "trueFalse"; title: string; instruction: string; transInstruction?: Trans; items: { statement: string; answer: boolean }[]; imagePool?: { image: string; items: { statement: string; answer: boolean }[] }[]; poolSize?: number }
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
import { A1_GR_L06 } from "./content/francais/grammaire-r1.7b";
import { A1_GR_L10 } from "./content/francais/grammaire-r2.4";
import { A1_GR_L11 } from "./content/francais/grammaire-r2.5";
import { A1_GR_TIME_EXPRESSIONS } from "./content/francais/grammaire-r4.2-temps";
import { A1_GR_DOUBLE_AUXILIAIRE } from "./content/francais/grammaire-r5.5-double-auxiliaire";
import { A1_GR_PRONOMINAUX_PASSE } from "./content/francais/grammaire-r5.6-pronominaux";
import { A2_GR_IMPARFAIT_IRREGULIERS } from "./content/francais/grammaire-r6.2-irreguliers";
import { A2_GR_PASSE_OU_IMPARFAIT } from "./content/francais/grammaire-r6.3-passe-imparfait";
import { A2_GR_FUTUR_IRREGULIERS } from "./content/francais/grammaire-r7.2-irreguliers";
import { A2_GR_FUTUR_SIMPLE_PROCHE } from "./content/francais/grammaire-r7.3-futurs";
import { A2_GR_HYPOTHESE_FUTUR } from "./content/francais/grammaire-r7.5-hypothese";
import { GR_MARQUEURS_TEMPS_COMPLET } from "./content/francais/grammaire-r9.1-marqueurs-temps";
import { A2_GR_BON_BIEN } from "./content/francais/grammaire-r8.2-bon-bien";
import { A2_GR_SUPERLATIF } from "./content/francais/grammaire-r8.3-superlatif";

import { A1_GR_L14 } from "./content/francais/grammaire-r3.1";
import { A1_GR_L18 } from "./content/francais/grammaire-r3.4b";
import { A1_GR_L19 } from "./content/francais/grammaire-r3.5b";
import { A1_GR_L22 } from "./content/francais/grammaire-r3.6b";
import { A1_GR_L23 } from "./content/francais/grammaire-r3.7b";
import { A1_GR_L24 } from "./content/francais/grammaire-r4.7";

import { A1_GR_L07 } from "./content/francais/grammaire-r3.4";
import { A1_GR_L08 } from "./content/francais/grammaire-r3.5";
import { A1_GR_L09 } from "./content/francais/grammaire-r3.6";
import { A1_GR_L20 } from "./content/francais/grammaire-r3.7";
import { A2_GR_L07 } from "./content/francais/grammaire-r4.12";
import { A2_GR_L09 } from "./content/francais/grammaire-r4.13";
import { A2_GR_L11 } from "./content/francais/grammaire-r4.17";
import { A2_GR_L12 } from "./content/francais/grammaire-r4.18";

import { A2_GR_L19 } from "./content/francais/grammaire-r4.19";
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
import { A2_CONJ_IRREGULIERS } from "./content/francais/grammaire-r2-irreguliers";
import { A1_CONJ_L20 } from "./content/francais/grammaire-r4.1";

import { A1_CONJ_L28 } from "./content/francais/grammaire-r4.3";
import { A1_CONJ_L29 } from "./content/francais/grammaire-r4.4";
import { A1_CONJ_L30 } from "./content/francais/grammaire-r4.5";
import { NEGATION_PASSE_COMPOSE } from "./content/francais/grammaire-r4.6";
import { A2_CONJ_L01 } from "./content/francais/grammaire-r4.9";
import { A2_CONJ_L02 } from "./content/francais/grammaire-r4.10";

import { A2_CONJ_L04 } from "./content/francais/grammaire-r4.14";
import { A2_CONJ_L05 } from "./content/francais/grammaire-r4.15";
import { A2_GR_CONDITIONNEL } from "./content/francais/grammaire-r6.2";
import { A2_GR_GERONDIF } from "./content/francais/grammaire-r6.4";
import { A2_GR_SUBJONCTIF } from "./content/francais/grammaire-r6.5";
import { A2_CONJ_L06 } from "./content/francais/grammaire-r4.24";
import { A2_CONJ_L07 } from "./content/francais/grammaire-r4.25";
import { A2_CONJ_L08 } from "./content/francais/grammaire-r4.26";

// ── Registre — grammaire ──────────────────────────────────────────────────────

const REORGANIZED_CODES: Record<string, string> = {
  "a1-gr-interro": "R3.1",
  "a2-gr-l07": "R3.2",
  "a2-gr-l09": "R3.3",
  "a1-gr-l10": "R3.4",
  "a1-gr-l23": "R4.1",
  "a1-gr-l18": "R4.2",
  "a1-gr-l19": "R4.3",
  "a1-gr-l14": "R4.4",
  "a1-gr-l11": "R4.5",
  "a2-gr-l19": "R5.1",
  "a2-gr-l35": "R5.2",
  "a2-gr-l36": "R5.3",
  "a1-conj-l28": "R6.1",
  "a1-conj-l29": "R6.2",
  "a1-conj-l30": "R6.3",
  "negation-passe-compose": "R6.4",
  "a1-gr-verbes-double-auxiliaire": "R6.5",
  "a1-gr-pronominaux-passe-compose": "R6.6",
  "a2-conj-l07": "R6.7",
  "a2-gr-imparfait-irreguliers": "R6.8",
  "a2-gr-passe-compose-ou-imparfait": "R6.9",
  "a1-conj-l20": "R7.1",
  "a1-gr-l22": "R7.2",
  "a2-conj-l08": "R7.3",
  "a2-gr-futur-irreguliers": "R7.4",
  "a2-gr-futur-simple-ou-proche": "R7.5",
  "a2-gr-hypothese-futur": "R7.6",
  "a2-conj-l04": "R8.1",
  "a2-gr-conditionnel": "R8.2",
  "a2-conj-l05": "R8.3",
  "a2-gr-gerondif": "R8.4",
  "a2-gr-subjonctif": "R8.5",
  "gr-marqueurs-temps-complet": "R9.1",
  "a2-gr-l52": "R9.2",
  "a1-gr-expressions-temps": "R9.3",
  "a2-gr-l39": "R10.1",
  "a2-gr-bon-bien-meilleur-mieux": "R10.2",
  "a2-gr-superlatif": "R10.3",
  "a2-gr-l42": "R10.4",
};

const ADJECTIFS_QUALIFICATIFS: GrammarLesson = {
  ...A1_GR_L23,
  code: "R4.1",
  title: "Les adjectifs qualificatifs",
  theory: [...A2_GR_L11.theory, ...A2_GR_L12.theory],
};

function applyReorganizedCode<T extends GrammarLesson | ConjLesson>(lesson: T): T {
  const code = REORGANIZED_CODES[lesson.slug];
  return code ? { ...lesson, code } : lesson;
}

const BASE_GRAMMAR_LESSONS: GrammarLesson[] = [
  A1_GR_L01,
  A1_GR_CEST,
  A1_GR_PHRASES,
  A1_GR_L02,
  A1_GR_INTERRO,
  A1_GR_L03,
  A1_GR_L04,
  A1_GR_L06,
  A1_GR_L10,
  ADJECTIFS_QUALIFICATIFS,
  A1_GR_L18,
  A1_GR_L19,
  A1_GR_L14,
  A1_GR_L11,
  A1_GR_L22,
  A1_GR_TIME_EXPRESSIONS,
  A1_GR_DOUBLE_AUXILIAIRE,
  A1_GR_PRONOMINAUX_PASSE,
  A2_GR_IMPARFAIT_IRREGULIERS,
  A2_GR_PASSE_OU_IMPARFAIT,
  A2_GR_FUTUR_IRREGULIERS,
  A2_GR_FUTUR_SIMPLE_PROCHE,
  A2_GR_HYPOTHESE_FUTUR,
  A2_GR_BON_BIEN,
  A2_GR_SUPERLATIF,
  GR_MARQUEURS_TEMPS_COMPLET,

  A1_GR_L24,

  A1_GR_L07,
  A1_GR_L08,
  A1_GR_L09,
  A1_GR_L20,
  A2_GR_L07,
  A2_GR_L09,
  A2_GR_L19,
  A2_GR_L35,
  A2_GR_L36,
  A2_GR_L39,
  A2_GR_L42,
  A2_GR_L52,

  A2_GR_CONDITIONNEL,
  A2_GR_GERONDIF,
  A2_GR_SUBJONCTIF,
];

export const GRAMMAR_LESSONS: GrammarLesson[] = BASE_GRAMMAR_LESSONS.map(applyReorganizedCode);

// ── Registre — conjugaison ────────────────────────────────────────────────────

const BASE_CONJUGAISON_LESSONS: ConjLesson[] = [
  A1_CONJ_L00,
  A1_CONJ_L01,
  A1_CONJ_L07,
  A1_CONJ_L08,
  A1_CONJ_L09,
  A1_CONJ_L15,
  A2_CONJ_IRREGULIERS,
  A1_CONJ_L20,

  A1_CONJ_L28,
  A1_CONJ_L29,
  A1_CONJ_L30,
  NEGATION_PASSE_COMPOSE,
  A2_CONJ_L01,
  A2_CONJ_L02,

  A2_CONJ_L04,
  A2_CONJ_L05,
  A2_CONJ_L06,
  A2_CONJ_L07,
  A2_CONJ_L08,
];

export const CONJUGAISON_LESSONS: ConjLesson[] = BASE_CONJUGAISON_LESSONS.map(applyReorganizedCode);

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

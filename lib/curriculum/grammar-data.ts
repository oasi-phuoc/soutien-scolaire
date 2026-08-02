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
  | { type: "selector"; labelPrefix?: string; buttonCols?: number; tabs: Array<{ label: string; content: TheoryBlock[] }> };

export type ExerciseDifficulty = "A1" | "A2" | "B1";
export type QcmItem = { sentence: string; svg?: string; choices: string[]; correctIdx: number; difficulty?: ExerciseDifficulty };
export type FillItem = { sentence: string; hint: string; answer: string; difficulty?: ExerciseDifficulty };
export type MatchPair = { left: string; right: string };

export type Exercise =
  | { type: "qcm"; title: string; instruction: string; transInstruction?: Trans; items: QcmItem[]; pool?: QcmItem[]; poolSize?: number; toggleChoices?: boolean; inlineChoices?: boolean; svgChoiceLayout?: "stacked" }
  | { type: "fill"; title: string; instruction: string; transInstruction?: Trans; items: FillItem[]; pool?: FillItem[]; poolSize?: number; inputWidth?: string }
  | { type: "fill_select"; title: string; instruction: string; transInstruction?: Trans; wordBank: string[]; items: FillItem[]; pool?: FillItem[]; poolSize?: number; letterSelect?: boolean; hideWordBank?: boolean }
  | { type: "match"; title: string; instruction: string; transInstruction?: Trans; pairs: MatchPair[]; pool?: MatchPair[]; poolSize?: number; leftLabel?: string; rightLabel?: string }
  | { type: "write"; title: string; instruction: string; transInstruction?: Trans; prompts?: string[]; promptPool?: string[]; levelPromptPools?: Record<ExerciseDifficulty, string[]>; promptPoolSize?: number; verb?: "être" | "avoir"; verbPool?: string[]; verbPoolSize?: number; promptLayout?: "stacked"; imagePool?: { image: string; promptPool: string[] }[] }
  | { type: "trueFalse"; title: string; instruction: string; transInstruction?: Trans; items: { statement: string; answer: boolean }[]; imagePool?: { image: string; items: { statement: string; answer: boolean }[] }[]; poolSize?: number }
  | { type: "order"; title: string; instruction: string; transInstruction?: Trans; items: { sentence: string; hint?: string }[] }
  | { type: "classify"; title: string; instruction: string; transInstruction?: Trans; categories: string[]; items: { word: string; categoryIdx: number }[]; pool?: { word: string; categoryIdx: number }[]; poolSize?: number; allowPartialValidation?: boolean }
  | { type: "word_order"; title: string; instruction: string; transInstruction?: Trans; items: { sentence: string; words: string[]; difficulty?: ExerciseDifficulty }[]; pool?: { sentence: string; words: string[]; difficulty?: ExerciseDifficulty }[]; poolSize?: number; allowPartialValidation?: boolean }
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
import { A1_GR_AVOIR } from "./content/francais/grammaire-a1-avoir";
import { A1_GR_VERBES_ER } from "./content/francais/grammaire-a1-verbes-er";
import { A1_GR_PRONOMINAUX } from "./content/francais/grammaire-a1-pronominaux";
import { A1_GR_MODAUX } from "./content/francais/grammaire-a1-modaux";
import { A1_GR_VERBES_IR } from "./content/francais/grammaire-a1-verbes-ir";
import { A1_GR_VERBES_RE_OIR } from "./content/francais/grammaire-a1-verbes-re-oir";
import { A1_GR_GENRE_CHOSES } from "./content/francais/grammaire-a1-genre-choses";
import { A1_GR_GENRE_ADJECTIFS } from "./content/francais/grammaire-a1-genre-adjectifs";
import { A1_GR_ADJ_ACCORDS_PART } from "./content/francais/grammaire-a1-adjectifs-accords-particuliers";
import { A1_GR_PLURIEL_ADJECTIFS } from "./content/francais/grammaire-a1-pluriel-adjectifs";
import { A1_GR_FEMININ_ADJ_PART } from "./content/francais/grammaire-a1-feminin-adjectifs-particuliers";
import { A1_GR_PLACE_ADJECTIF } from "./content/francais/grammaire-a1-place-adjectif";
import { A1_GR_PLACE_ADJECTIF_PART } from "./content/francais/grammaire-a1-place-adjectif-particuliers";
import { A1_GR_ARTICLES_CONTRACTES } from "./content/francais/grammaire-a1-articles-contractes";
import { A1_GR_ARTICLE_PARTITIF } from "./content/francais/grammaire-a1-article-partitif";
import { A1_GR_EXPRESSION_QUANTITE } from "./content/francais/grammaire-a1-expression-quantite";
import { A1_GR_ADJECTIFS_INDEFINIS } from "./content/francais/grammaire-a1-adjectifs-indefinis";
import { A1_GR_QUESTION_TOTALE } from "./content/francais/grammaire-a1-question-totale";
import { A1_GR_QUESTION_OUVERTE_QUI } from "./content/francais/grammaire-a1-question-ouverte-qui";
import { A1_GR_QUESTION_OUVERTE_OU } from "./content/francais/grammaire-a1-question-ouverte-ou";
import { A1_GR_NEGATION_NE_PAS } from "./content/francais/grammaire-a1-negation-ne-pas";
import { A1_GR_AUTRES_NEGATIONS } from "./content/francais/grammaire-a1-autres-negations";
import { A1_GR_QUESTION_INVERSION } from "./content/francais/grammaire-a1-question-inversion";
import { A1_GR_PHRASE_EXCLAMATIVE } from "./content/francais/grammaire-a1-phrase-exclamative";
import { A1_GR_A_EN_DE_LIEUX } from "./content/francais/grammaire-a1-a-en-de-lieux";
import { A1_GR_AUTRES_PREPOSITIONS } from "./content/francais/grammaire-a1-autres-prepositions";
import { A1_GR_PASSE_COMPOSE_AVOIR } from "./content/francais/grammaire-a1-passe-compose-avoir";
import { A1_GR_PASSE_COMPOSE_ETRE } from "./content/francais/grammaire-a1-passe-compose-etre";
import { A1_GR_IMPARFAIT } from "./content/francais/grammaire-a1-imparfait";
import { A1_GR_PASSE_RECENT } from "./content/francais/grammaire-a1-passe-recent";
import { A1_GR_IMPARFAIT_PASSE_COMPOSE } from "./content/francais/grammaire-a1-imparfait-passe-compose";
import { A1_GR_PLUS_QUE_PARFAIT } from "./content/francais/grammaire-a1-plus-que-parfait";
import { A1_GR_ACCORD_PARTICIPE_PASSE } from "./content/francais/grammaire-a1-accord-participe-passe";
import { A1_GR_FUTUR_PROCHE } from "./content/francais/grammaire-a1-futur-proche";
import { A1_GR_FUTUR_SIMPLE } from "./content/francais/grammaire-a1-futur-simple";
import { A1_GR_FUTUR_ANTERIEUR } from "./content/francais/grammaire-a1-futur-anterieur";
import { A1_GR_COMPARAISON_ADJ_ADV } from "./content/francais/grammaire-a1-comparaison-adj-adv";
import { A1_GR_COMPARAISON_NOM_VERBE } from "./content/francais/grammaire-a1-comparaison-nom-verbe";
import { A1_GR_SUPERLATIF } from "./content/francais/grammaire-a1-superlatif";
import { A1_GR_EXPRESSION_TEMPS_MOMENT } from "./content/francais/grammaire-a1-expression-temps-moment";
import { A1_GR_MARQUEURS_TEMPS } from "./content/francais/grammaire-a1-marqueurs-temps";
import { A1_GR_PRONOMS_TONIQUES } from "./content/francais/grammaire-a1-pronoms-toniques";
import { A1_GR_PRONOMS_COD_COI } from "./content/francais/grammaire-a1-pronoms-cod-coi";
import { A1_GR_PRONOM_EN } from "./content/francais/grammaire-a1-pronom-en";
import { A1_GR_PRONOMS_Y_EN_LIEU } from "./content/francais/grammaire-a1-pronoms-y-en-lieu";
import { A1_GR_EN_Y_PRONOM_TONIQUE } from "./content/francais/grammaire-a1-en-y-pronom-tonique";
import { A1_GR_DOUBLES_PRONOMS } from "./content/francais/grammaire-a1-doubles-pronoms";
import { A1_GR_PRONOMS_DEMONSTRATIFS } from "./content/francais/grammaire-a1-pronoms-demonstratifs";
import { A1_GR_PRONOMS_POSSESSIFS } from "./content/francais/grammaire-a1-pronoms-possessifs";
import { A1_GR_PRONOMS_INDEFINIS } from "./content/francais/grammaire-a1-pronoms-indefinis";
import { A1_GR_PRONOMS_RELATIFS_QUI_QUE_OU } from "./content/francais/grammaire-a1-pronoms-relatifs-qui-que-ou";
import { A1_GR_PRONOM_RELATIF_DONT } from "./content/francais/grammaire-a1-pronom-relatif-dont";
import { A1_GR_PRONOMS_RELATIFS_COMPOSES } from "./content/francais/grammaire-a1-pronoms-relatifs-composes";
import { A1_GR_ADVERBES_INTENSITE } from "./content/francais/grammaire-a1-adverbes-intensite";
import { A1_GR_ADVERBES_MENT } from "./content/francais/grammaire-a1-adverbes-ment";
import { A1_GR_MOTS_LIAISON } from "./content/francais/grammaire-a1-mots-liaison";
import { A1_GR_IMPERATIF } from "./content/francais/grammaire-a1-imperatif";
import { A1_GR_FORME_PASSIVE } from "./content/francais/grammaire-a1-forme-passive";
import { A1_GR_GERONDIF } from "./content/francais/grammaire-a1-gerondif";
import { A1_GR_SUBJONCTIF_PRESENT } from "./content/francais/grammaire-a1-subjonctif-present";
import { A1_GR_SUBJONCTIF_PASSE } from "./content/francais/grammaire-a1-subjonctif-passe";
import { A1_GR_SUBJONCTIF_OU_INDICATIF } from "./content/francais/grammaire-a1-subjonctif-ou-indicatif";
import { A1_GR_SUBJONCTIF_OU_INFINITIF } from "./content/francais/grammaire-a1-subjonctif-ou-infinitif";
import { A1_GR_NOMS_COMPOSES } from "./content/francais/grammaire-a1-noms-composes";
import { A1_GR_PLURIEL_NOMS } from "./content/francais/grammaire-a1-pluriel-noms";
import { A1_GR_GENRE_PERSONNES } from "./content/francais/grammaire-a1-genre-personnes";
import { A1_GR_PRESENT_PROGRESSIF } from "./content/francais/grammaire-a1-present-progressif";
import { A1_GR_VERBES_ER_PART } from "./content/francais/grammaire-a1-verbes-er-particuliers";
import { A1_GR_CEST } from "./content/francais/grammaire-r1.9";
import { A1_GR_PHRASES } from "./content/francais/grammaire-r1.6";
import { A1_GR_L02 } from "./content/francais/grammaire-r1.7";
import { A1_GR_INTERRO } from "./content/francais/grammaire-r1.8";
import { A1_GR_L03 } from "./content/francais/grammaire-r1.4";
import { A1_GR_L04 } from "./content/francais/grammaire-r1.3";
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
import { A2_GR_ADVERBES } from "./content/francais/grammaire-r10.5-adverbes";

import { A1_GR_L14 } from "./content/francais/grammaire-r3.1";
import { A1_GR_L18 } from "./content/francais/grammaire-r3.4b";
import { A1_GR_L19 } from "./content/francais/grammaire-r3.5b";
import { A1_GR_L22 } from "./content/francais/grammaire-r3.6b";
import { A1_GR_L23 } from "./content/francais/grammaire-r3.7b";
import { A2_GR_L07 } from "./content/francais/grammaire-r4.12";
import { A2_GR_L09 } from "./content/francais/grammaire-r4.13";

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
import { A2_CONJ_L02 } from "./content/francais/grammaire-r4.10";

import { A2_CONJ_L04 } from "./content/francais/grammaire-r4.14";
import { A2_CONJ_L05 } from "./content/francais/grammaire-r4.15";
import { A2_GR_CONDITIONNEL } from "./content/francais/grammaire-r6.2";
import { A2_GR_GERONDIF } from "./content/francais/grammaire-r6.4";
import { A2_GR_SUBJONCTIF } from "./content/francais/grammaire-r6.5";
import { A2_CONJ_L07 } from "./content/francais/grammaire-r4.25";
import { A2_CONJ_L08 } from "./content/francais/grammaire-r4.26";
import { generatedGrammarExercises } from "./content/francais/generated-grammar-exercises";
import {
  applyConjProfile,
  bumpPoolSizes,
  buildNegationExercises,
  annotateConjInstructions,
} from "./content/francais/conj-exercise-builders";
import {
  getProfileForLesson,
  getR2NegationProfile,
  NEGATION_PASSE_COMPOSE_SLUG,
  R2_CONJ_SLUGS,
  TENSE_LESSON_SLUGS,
} from "./content/francais/conj-lesson-profiles";

// ── Registre — grammaire ──────────────────────────────────────────────────────

const REORGANIZED_CODES: Record<string, string> = {
  // G1 — Chapitre 1 (unités 1–10)
  "a1-gr-l01": "G1.1",
  "a1-gr-avoir": "G1.2",
  "a1-gr-cest-il-est": "G1.3",
  "a1-gr-verbes-er": "G1.4",
  "a1-gr-pronominaux": "G1.5",
  "a1-gr-modaux": "G1.6",
  "a1-gr-verbes-er-particuliers": "G1.7",
  "a1-gr-verbes-ir": "G1.8",
  "a1-gr-verbes-re-oir": "G1.9",
  "a1-gr-present-progressif": "G1.10",
  // G2 — Chapitre 2 (unités 11–20)
  "a1-gr-genre-personnes": "G2.1",
  "a1-gr-genre-choses": "G2.2",
  "a1-gr-pluriel-noms": "G2.3",
  "a1-gr-noms-composes": "G2.4",
  "a1-gr-genre-adjectifs": "G2.5",
  "a1-gr-feminin-adjectifs-particuliers": "G2.6",
  "a1-gr-pluriel-adjectifs": "G2.7",
  "a1-gr-adjectifs-accords-particuliers": "G2.8",
  "a1-gr-place-adjectif": "G2.9",
  "a1-gr-place-adjectif-particuliers": "G2.10",
  // G3 — Chapitre 3 (unités 21–30)
  "a1-gr-l04": "G3.1",
  "a1-gr-articles-contractes": "G3.2",
  "a1-gr-article-partitif": "G3.3",
  "a1-gr-expression-quantite": "G3.4",
  "a1-gr-l18": "G3.5",
  "a1-gr-l19": "G3.6",
  "a1-gr-adjectifs-indefinis": "G3.7",
  "a1-gr-question-totale": "G3.8",
  "a1-gr-question-ouverte-qui": "G3.9",
  "a1-gr-question-ouverte-ou": "G3.10",
  // G4 — Chapitre 4 (unités 31–100)
  "a1-gr-negation-ne-pas": "G4.1",
  "a1-gr-autres-negations": "G4.2",
  "a1-gr-question-inversion": "G4.3",
  "a1-gr-phrase-exclamative": "G4.4",
  "a1-gr-a-en-de-lieux": "G4.5",
  "a1-gr-autres-prepositions": "G4.6",
  "a1-gr-passe-compose-avoir": "G4.7",
  "a1-gr-passe-compose-etre": "G4.8",
  "a1-gr-imparfait": "G4.9",
  "a1-gr-passe-recent": "G4.10",
  "a1-gr-imparfait-passe-compose": "G4.11",
  "a1-gr-plus-que-parfait": "G4.12",
  "a1-gr-accord-participe-passe": "G4.13",
  "a1-gr-futur-proche": "G4.14",
  "a1-gr-futur-simple": "G4.15",
  "a1-gr-futur-anterieur": "G4.16",
  "a1-gr-comparaison-adj-adv": "G4.17",
  "a1-gr-comparaison-nom-verbe": "G4.18",
  "a1-gr-superlatif": "G4.19",
  "a1-gr-expression-temps-moment": "G4.20",
  "a1-gr-marqueurs-temps": "G4.21",
  "a1-gr-pronoms-toniques": "G4.22",
  "a1-gr-pronoms-cod-coi": "G4.23",
  "a1-gr-pronom-en": "G4.24",
  "a1-gr-pronoms-y-en-lieu": "G4.25",
  "a1-gr-en-y-pronom-tonique": "G4.26",
  "a1-gr-doubles-pronoms": "G4.27",
  "a1-gr-pronoms-demonstratifs": "G4.28",
  "a1-gr-pronoms-possessifs": "G4.29",
  "a1-gr-pronoms-indefinis": "G4.30",
  "a1-gr-pronoms-relatifs-qui-que-ou": "G4.31",
  "a1-gr-pronom-relatif-dont": "G4.32",
  "a1-gr-pronoms-relatifs-composes": "G4.33",
  "a1-gr-adverbes-intensite": "G4.34",
  "a1-gr-adverbes-ment": "G4.35",
  "a1-gr-mots-liaison": "G4.36",
  "a1-gr-imperatif": "G4.37",
  "a1-gr-forme-passive": "G4.38",
  "a1-gr-gerondif": "G4.39",
  "a1-gr-subjonctif-present": "G4.40",
  "a1-gr-subjonctif-passe": "G4.41",
  "a1-gr-subjonctif-ou-indicatif": "G4.42",
  "a1-gr-subjonctif-ou-infinitif": "G4.43",
  "a1-gr-l03": "G4.44",
  "a1-gr-phrases": "G4.45",
  "a1-gr-l02": "G4.46",
  "a1-gr-interro": "G4.47",
  "a1-gr-l10": "G4.48",
  "a1-gr-l11": "G4.49",
  "a1-gr-l14": "G4.50",
  "a1-gr-l23": "G4.51",
  "a2-gr-l07": "G4.52",
  "a2-gr-l09": "G4.53",
  "a1-gr-expressions-temps": "G4.54",
  "a1-gr-l22": "G4.55",
  "a2-gr-l39": "G4.56",
  "a2-gr-bon-bien-meilleur-mieux": "G4.57",
  "a2-gr-superlatif": "G4.58",
  "a2-gr-l42": "G4.59",
  "a2-gr-l19": "G4.60",
  "a2-gr-l35": "G4.61",
  "a2-gr-l36": "G4.62",
  "gr-marqueurs-temps-complet": "G4.63",
  "a2-gr-l52": "G4.64",
  "a2-gr-adverbes-types": "G4.65",
  "a1-gr-verbes-double-auxiliaire": "G4.66",
  "a1-gr-pronominaux-passe-compose": "G4.67",
  "a2-gr-passe-compose-ou-imparfait": "G4.68",
  "a2-gr-imparfait-irreguliers": "G4.69",
  "a2-gr-futur-irreguliers": "G4.70",
  "a2-gr-futur-simple-ou-proche": "G4.71",
  "a2-gr-hypothese-futur": "G4.72",
  "a2-gr-conditionnel": "G4.73",
  "a2-gr-gerondif": "G4.74",
  "a2-gr-subjonctif": "G4.75",
    // C1 — Verbes essentiels
  "a1-conj-l00": "C1.1",
  "a1-conj-l01": "C1.2",
  "a1-conj-l07": "C1.3",
  "a1-conj-l08": "C1.4",
  "a1-conj-l09": "C1.5",
  "a1-conj-l15": "C1.6",
  "a2-conj-irreguliers": "C1.7",
  "a2-conj-l02": "C1.8",
  // C2 — Passé
  "a1-conj-l28": "C2.1",
  "a1-conj-l29": "C2.2",
  "a1-conj-l30": "C2.3",
  "negation-passe-compose": "C2.4",
  "a2-conj-l07": "C2.5",
  // C3 — Futur
  "a1-conj-l20": "C3.1",
  "a2-conj-l08": "C3.2",
  // C4 — Autres temps
  "a2-conj-l04": "C4.1",
  "a2-conj-l05": "C4.2",
};

const ADJECTIFS_QUALIFICATIFS: GrammarLesson = {
  ...A1_GR_L23,
  code: "G4.51",
  title: "Les adjectifs qualificatifs",
};

function applyReorganizedCode<T extends GrammarLesson | ConjLesson>(lesson: T): T {
  const code = REORGANIZED_CODES[lesson.slug];
  return code ? { ...lesson, code } : lesson;
}

function addGeneratedExercises<T extends GrammarLesson | ConjLesson>(lesson: T): T {
  if (lesson.exercises.length > 0) return lesson;
  const exercises = generatedGrammarExercises(lesson.slug);
  return exercises.length > 0 ? { ...lesson, exercises } : lesson;
}

/** R6/R7/R8 temps de verbe : pack R2 (8 ex.) + négation (6 ex.). */
function augmentTenseLessonExercises<T extends GrammarLesson | ConjLesson>(lesson: T): T {
  const profile = getProfileForLesson(lesson.slug);
  if (profile) {
    return { ...lesson, exercises: applyConjProfile(profile) };
  }
  return lesson;
}

/** R2 : tailles de pool + bloc négation. Autres conj : tailles de pool. */
function augmentConjLessonExercises(lesson: ConjLesson): ConjLesson {
  if (TENSE_LESSON_SLUGS.has(lesson.slug)) {
    return augmentTenseLessonExercises(lesson);
  }
  if (lesson.slug === NEGATION_PASSE_COMPOSE_SLUG) {
    return { ...lesson, exercises: bumpPoolSizes(annotateConjInstructions(lesson.exercises, "passé composé")) };
  }
  if (R2_CONJ_SLUGS.has(lesson.slug)) {
    const negProfile = getR2NegationProfile(lesson.slug);
    const base = bumpPoolSizes(annotateConjInstructions(lesson.exercises, "présent"));
    const neg = negProfile ? buildNegationExercises({ ...negProfile, negation: true }) : [];
    return { ...lesson, exercises: [...base, ...neg] };
  }
  return { ...lesson, exercises: bumpPoolSizes(annotateConjInstructions(lesson.exercises, "présent")) };
}

/** Grammaire R6/R7/R8 (temps de verbe) : même traitement que conjugaison. */
function augmentGrammarLessonExercises(lesson: GrammarLesson): GrammarLesson {
  if (TENSE_LESSON_SLUGS.has(lesson.slug)) {
    return augmentTenseLessonExercises(lesson);
  }
  return lesson;
}

const BASE_GRAMMAR_LESSONS: GrammarLesson[] = [
  A1_GR_L01,
  A1_GR_AVOIR,
  A1_GR_VERBES_ER,
  A1_GR_PRONOMINAUX,
  A1_GR_MODAUX,
  A1_GR_VERBES_ER_PART,
  A1_GR_VERBES_IR,
  A1_GR_VERBES_RE_OIR,
  A1_GR_PRESENT_PROGRESSIF,
  A1_GR_GENRE_PERSONNES,
  A1_GR_GENRE_CHOSES,
  A1_GR_PLURIEL_NOMS,
  A1_GR_NOMS_COMPOSES,
  A1_GR_GENRE_ADJECTIFS,
  A1_GR_FEMININ_ADJ_PART,
  A1_GR_PLURIEL_ADJECTIFS,
  A1_GR_ADJ_ACCORDS_PART,
  A1_GR_PLACE_ADJECTIF,
  A1_GR_PLACE_ADJECTIF_PART,
  A1_GR_ARTICLES_CONTRACTES,
  A1_GR_ARTICLE_PARTITIF,
  A1_GR_EXPRESSION_QUANTITE,
  A1_GR_ADJECTIFS_INDEFINIS,
  A1_GR_QUESTION_TOTALE,
  A1_GR_QUESTION_OUVERTE_QUI,
  A1_GR_QUESTION_OUVERTE_OU,
  A1_GR_NEGATION_NE_PAS,
  A1_GR_AUTRES_NEGATIONS,
  A1_GR_QUESTION_INVERSION,
  A1_GR_PHRASE_EXCLAMATIVE,
  A1_GR_A_EN_DE_LIEUX,
  A1_GR_AUTRES_PREPOSITIONS,
  A1_GR_PASSE_COMPOSE_AVOIR,
  A1_GR_PASSE_COMPOSE_ETRE,
  A1_GR_IMPARFAIT,
  A1_GR_PASSE_RECENT,
  A1_GR_IMPARFAIT_PASSE_COMPOSE,
  A1_GR_PLUS_QUE_PARFAIT,
  A1_GR_ACCORD_PARTICIPE_PASSE,
  A1_GR_FUTUR_PROCHE,
  A1_GR_FUTUR_SIMPLE,
  A1_GR_FUTUR_ANTERIEUR,
  A1_GR_COMPARAISON_ADJ_ADV,
  A1_GR_COMPARAISON_NOM_VERBE,
  A1_GR_SUPERLATIF,
  A1_GR_EXPRESSION_TEMPS_MOMENT,
  A1_GR_MARQUEURS_TEMPS,
  A1_GR_PRONOMS_TONIQUES,
  A1_GR_PRONOMS_COD_COI,
  A1_GR_PRONOM_EN,
  A1_GR_PRONOMS_Y_EN_LIEU,
  A1_GR_EN_Y_PRONOM_TONIQUE,
  A1_GR_DOUBLES_PRONOMS,
  A1_GR_PRONOMS_DEMONSTRATIFS,
  A1_GR_PRONOMS_POSSESSIFS,
  A1_GR_PRONOMS_INDEFINIS,
  A1_GR_PRONOMS_RELATIFS_QUI_QUE_OU,
  A1_GR_PRONOM_RELATIF_DONT,
  A1_GR_PRONOMS_RELATIFS_COMPOSES,
  A1_GR_ADVERBES_INTENSITE,
  A1_GR_ADVERBES_MENT,
  A1_GR_MOTS_LIAISON,
  A1_GR_IMPERATIF,
  A1_GR_FORME_PASSIVE,
  A1_GR_GERONDIF,
  A1_GR_SUBJONCTIF_PRESENT,
  A1_GR_SUBJONCTIF_PASSE,
  A1_GR_SUBJONCTIF_OU_INDICATIF,
  A1_GR_SUBJONCTIF_OU_INFINITIF,
  A1_GR_CEST,
  A1_GR_PHRASES,
  A1_GR_L02,
  A1_GR_INTERRO,
  A1_GR_L03,
  A1_GR_L04,
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
  A2_GR_ADVERBES,
  GR_MARQUEURS_TEMPS_COMPLET,

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

export const GRAMMAR_LESSONS: GrammarLesson[] = BASE_GRAMMAR_LESSONS
  .map(applyReorganizedCode)
  .map(addGeneratedExercises)
  .map(augmentGrammarLessonExercises);

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
  A2_CONJ_L02,

  A2_CONJ_L04,
  A2_CONJ_L05,
  A2_CONJ_L07,
  A2_CONJ_L08,
];

export const CONJUGAISON_LESSONS: ConjLesson[] = BASE_CONJUGAISON_LESSONS
  .map(applyReorganizedCode)
  .map(addGeneratedExercises)
  .map(augmentConjLessonExercises);

// ── Fonctions de recherche ────────────────────────────────────────────────────

function hasUnlockedEval(code: string): boolean {
  return /^G1\.|^C[1-4]\./.test(code);
}

export function getGrammarLesson(slug: string): GrammarLesson | undefined {
  const lesson = GRAMMAR_LESSONS.find((l) => l.slug === slug);
  if (!lesson) return undefined;
  if (hasUnlockedEval(lesson.code)) {
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
  if (hasUnlockedEval(lesson.code)) {
    return { ...lesson, evalExercises: lesson.exercises };
  }
  return lesson;
}

export function getAllConjLessons(): ConjLesson[] {
  return CONJUGAISON_LESSONS;
}

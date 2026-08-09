// Données françaises unifiées — grammaire + conjugaison
// Source unique pour tous les types, leçons et fonctions de recherche.

// ── Types ─────────────────────────────────────────────────────────────────────

export type ConjugRow = { pronoun: string; form: string; phonetic?: string };
export type ConjugTable = { verb: string; rows: ConjugRow[]; accentForms?: boolean; verbBold?: boolean };

/** Langues pivot (hors français) — alignées sur `lib/pivot-langs.ts`. */
export type GrammarPivotLang = "en" | "ar" | "fa" | "pt" | "so" | "ti" | "tr" | "ps" | "uk";
export type Trans = Partial<Record<GrammarPivotLang, string>>;
type TransList = Partial<Record<GrammarPivotLang, string[]>>;

export type VerbToggleVerb = {
  infinitive: string;
  radical: string;
  reflexivePronouns?: string[];
  meaning?: string;
  example?: string;
  note?: string;
  noteTrans?: Partial<Record<GrammarPivotLang, string>>;
  rows: Array<{ pronoun: string; ending: string; radical?: string }>;
};

export type TheoryBlock =
  | { type: "heading"; text: string; trans?: Trans; sub?: boolean; accent?: boolean }
  | { type: "table"; tables: ConjugTable[] }
  | { type: "rule"; text: string; examples?: { correct: string; wrong?: string }[] }
  | { type: "note"; text: string }
  | { type: "vocab"; title: string; items: string[] }
  | { type: "grid"; headers: string[]; rows: string[][]; transHeaders?: TransList; transRows?: Partial<Record<GrammarPivotLang, string[][]>>; pronounGrid?: boolean; boldFirstCol?: boolean; equalCols?: boolean; colWidths?: string[] }
  /** Label accent + texte plain optionnel + liste (remplace plain_list / highlight / highlight_text). */
  | { type: "text"; label?: string; text?: string; items?: string[]; transLabel?: Trans; transText?: Trans; transItems?: TransList; noFirstBullet?: boolean; inlineArrows?: boolean; noBulletItems?: number[]; allBullets?: boolean }
  | { type: "verb_toggle"; verbs: VerbToggleVerb[]; negation?: boolean; buttonCols?: number; noArrow?: boolean }
  | { type: "clock_display"; clocks: { h: number; m: number; label?: string }[]; cols?: number }
  | { type: "word_cards"; items: string[]; cols?: 2 | 3 | 4 }
  | { type: "illus_cards"; items: Array<{ label: string; svg: string }>; cols?: 2 | 3 | 4 | 5 }
  | { type: "grammar_link"; text: string; href: string }
  | { type: "selector"; labelPrefix?: string; buttonCols?: number; tabs: Array<{ label: string; content: TheoryBlock[] }> };

export type ExerciseDifficulty = "A1" | "A2" | "B1";
export type QcmItem = { sentence: string; svg?: string; choices: string[]; correctIdx: number; difficulty?: ExerciseDifficulty; /** Même id = même gabarit (ne pas tirer 2× dans une session). */ gabaritId?: string };
export type FillItem = { sentence: string; hint: string; answer: string; difficulty?: ExerciseDifficulty; /** Même id = même gabarit (ne pas tirer 2× dans une session). */ gabaritId?: string };
export type MatchPair = { left: string; right: string };
/** Prompt d'écriture libre ; `side` sert au tirage équilibré c'est / il est. */
export type WritePrompt = string | { prompt: string; side?: "cest" | "ilest" };

export type Exercise =
  | { type: "qcm"; title: string; instruction: string; transInstruction?: Trans; items: QcmItem[]; pool?: QcmItem[]; poolSize?: number; toggleChoices?: boolean; inlineChoices?: boolean; svgChoiceLayout?: "stacked"; /** Garantit au moins un item par valeur de choix correct (ex. le / la / l'), puis complète au hasard. */ poolEnsure?: string[] }
  | { type: "fill"; title: string; instruction: string; transInstruction?: Trans; items: FillItem[]; pool?: FillItem[]; poolSize?: number; inputWidth?: string; /** Garantit au moins un item par réponse (ex. le / la / l'), puis complète au hasard. */ poolEnsure?: string[] }
  | { type: "fill_select"; title: string; instruction: string; transInstruction?: Trans; wordBank: string[]; items: FillItem[]; pool?: FillItem[]; poolSize?: number; letterSelect?: boolean; hideWordBank?: boolean; /** Garantit au moins un item par réponse (ex. le / la / l'), puis complète au hasard. */ poolEnsure?: string[] }
  | { type: "match"; title: string; instruction: string; transInstruction?: Trans; pairs: MatchPair[]; pool?: MatchPair[]; poolSize?: number; leftLabel?: string; rightLabel?: string }
  | { type: "write"; title: string; instruction: string; transInstruction?: Trans; prompts?: string[]; /** Pool de prompts ; `side` permet un tirage équilibré c'est / il est (2–3 de chaque). */ promptPool?: WritePrompt[]; levelPromptPools?: Record<ExerciseDifficulty, string[]>; promptPoolSize?: number; verb?: "être" | "avoir"; verbPool?: string[]; verbPoolSize?: number; promptLayout?: "stacked"; imagePool?: { image: string; promptPool: string[] }[] }
  | { type: "trueFalse"; title: string; instruction: string; transInstruction?: Trans; items: { statement: string; answer: boolean }[]; imagePool?: { image: string; items: { statement: string; answer: boolean }[] }[]; poolSize?: number }
  | { type: "order"; title: string; instruction: string; transInstruction?: Trans; items: { sentence: string; hint?: string }[] }
  | { type: "classify"; title: string; instruction: string; transInstruction?: Trans; categories: string[]; items: { word: string; categoryIdx: number }[]; pool?: { word: string; categoryIdx: number }[]; poolSize?: number; allowPartialValidation?: boolean }
  | { type: "word_order"; title: string; instruction: string; transInstruction?: Trans; items: { sentence: string; words: string[]; difficulty?: ExerciseDifficulty; gabaritId?: string }[]; pool?: { sentence: string; words: string[]; difficulty?: ExerciseDifficulty; gabaritId?: string }[]; poolSize?: number; /** Tirage par catégorie (ex. 1×1adj + 2×2adj + 2×3adj). */ poolMix?: { gabaritId: string; count: number }[]; allowPartialValidation?: boolean }
  | { type: "color_highlight"; title: string; instruction: string; transInstruction?: Trans; colors: string[]; items: { words: string[]; answers: (number | null)[] }[] }
  | { type: "clock_read"; title: string; instruction: string; transInstruction?: Trans; clocks: { h: number; m: number; label: string; answer: string }[] }
  | { type: "tag2"; title: string; instruction: string; transInstruction?: Trans; pool: { word: string; companion?: string; gender: "M" | "F" | null; number: "S" | "P" }[]; poolSize?: number; /** Affiche uniquement M/F (pas S/P). À l'impression : trait à remplir. */ genderOnly?: boolean };

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

import { A1_GR_L01 } from "./content/francais/grammaire-g1.1";
import { A1_GR_ETRE } from "./content/francais/grammaire-g1.2";
import { A1_GR_AVOIR } from "./content/francais/grammaire-g1.3";
import { A1_GR_VERBES_ER } from "./content/francais/grammaire-g1.5";
import { A1_GR_PRONOMINAUX } from "./content/francais/grammaire-g1.6";
import { A1_GR_MODAUX } from "./content/francais/grammaire-g1.7";
import { A1_GR_VERBES_IR } from "./content/francais/grammaire-g1.9";
import { A1_GR_VERBES_RE_OIR } from "./content/francais/grammaire-g1.10";
import { A1_GR_GENRE_CHOSES } from "./content/francais/grammaire-g2.2";
import { A1_GR_GENRE_ADJECTIFS } from "./content/francais/grammaire-g3.1";
import { A1_GR_ADJ_ACCORDS_PART } from "./content/francais/grammaire-g3.3";
import { A1_GR_PLURIEL_ADJECTIFS } from "./content/francais/grammaire-g3.2";
import { A1_GR_PLACE_ADJECTIF } from "./content/francais/grammaire-g3.4";
import { A1_GR_ARTICLES_CONTRACTES } from "./content/francais/grammaire-g4.2";
import { A1_GR_ARTICLE_PARTITIF } from "./content/francais/grammaire-g4.3";
import { A1_GR_EXPRESSION_QUANTITE } from "./content/francais/grammaire-g4.4";
import { A1_GR_ADJECTIFS_INDEFINIS } from "./content/francais/grammaire-g4.7";
import { A1_GR_QUESTION_TOTALE } from "./content/francais/grammaire-g5.3";
import { A1_GR_QUESTION_OUVERTE_QUI } from "./content/francais/grammaire-g5.4";
import { A1_GR_NEGATION_NE_PAS } from "./content/francais/grammaire-g5.5";
import { A1_GR_AUTRES_NEGATIONS } from "./content/francais/grammaire-g5.6";
import { A1_GR_PHRASE_EXCLAMATIVE } from "./content/francais/grammaire-g5.7";
import { A1_GR_A_EN_DE_LIEUX } from "./content/francais/grammaire-g7.1";
import { A1_GR_AUTRES_PREPOSITIONS } from "./content/francais/grammaire-g7.2";
import { A1_GR_PASSE_COMPOSE_AVOIR } from "./content/francais/grammaire-g8.1";
import { A1_GR_PASSE_COMPOSE_ETRE } from "./content/francais/grammaire-g8.2";
import { A1_GR_IMPARFAIT } from "./content/francais/grammaire-g8.5";
import { A1_GR_PASSE_RECENT } from "./content/francais/grammaire-g8.6";
import { A1_GR_IMPARFAIT_PASSE_COMPOSE } from "./content/francais/grammaire-g8.7";
import { A1_GR_PLUS_QUE_PARFAIT } from "./content/francais/grammaire-g8.8";
import { A1_GR_ACCORD_PARTICIPE_PASSE } from "./content/francais/grammaire-g8.9";
import { A1_GR_FUTUR_PROCHE } from "./content/francais/grammaire-g9.1";
import { A1_GR_FUTUR_SIMPLE } from "./content/francais/grammaire-g9.2";
import { A1_GR_FUTUR_ANTERIEUR } from "./content/francais/grammaire-g9.5";
import { A1_GR_COMPARAISON_ADJ_ADV } from "./content/francais/grammaire-g10.1";
import { A1_GR_COMPARAISON_NOM_VERBE } from "./content/francais/grammaire-g10.2";
import { A1_GR_SUPERLATIF } from "./content/francais/grammaire-g10.3";
import { A1_GR_EXPRESSION_TEMPS_MOMENT } from "./content/francais/grammaire-g11.1";
import { A1_GR_MARQUEURS_TEMPS } from "./content/francais/grammaire-g11.2";
import { A1_GR_PRONOMS_TONIQUES } from "./content/francais/grammaire-g12.1";
import { A1_GR_PRONOMS_COD_COI } from "./content/francais/grammaire-g12.2";
import { A1_GR_PRONOM_EN } from "./content/francais/grammaire-g12.3";
import { A1_GR_PRONOMS_Y_EN_LIEU } from "./content/francais/grammaire-g12.4";
import { A1_GR_EN_Y_PRONOM_TONIQUE } from "./content/francais/grammaire-g12.5";
import { A1_GR_DOUBLES_PRONOMS } from "./content/francais/grammaire-g12.6";
import { A1_GR_PRONOMS_DEMONSTRATIFS } from "./content/francais/grammaire-g12.7";
import { A1_GR_PRONOMS_POSSESSIFS } from "./content/francais/grammaire-g12.8";
import { A1_GR_PRONOMS_INDEFINIS } from "./content/francais/grammaire-g12.9";
import { A1_GR_PRONOMS_RELATIFS_QUI_QUE_OU } from "./content/francais/grammaire-g12.10";
import { A1_GR_PRONOM_RELATIF_DONT } from "./content/francais/grammaire-g12.11";
import { A1_GR_PRONOMS_RELATIFS_COMPOSES } from "./content/francais/grammaire-g12.12";
import { A1_GR_ADVERBES_INTENSITE } from "./content/francais/grammaire-g14.1";
import { A1_GR_ADVERBES_MENT } from "./content/francais/grammaire-g14.2";
import { A1_GR_MOTS_LIAISON } from "./content/francais/grammaire-g15.1";
import { A1_GR_IMPERATIF } from "./content/francais/grammaire-g16.1";
import { A1_GR_FORME_PASSIVE } from "./content/francais/grammaire-g16.2";
import { A1_GR_GERONDIF } from "./content/francais/grammaire-g16.3";
import { A1_GR_SUBJONCTIF_PRESENT } from "./content/francais/grammaire-g16.4";
import { A1_GR_SUBJONCTIF_PASSE } from "./content/francais/grammaire-g16.5";
import { A1_GR_SUBJONCTIF_OU_INDICATIF } from "./content/francais/grammaire-g16.6";
import { A1_GR_SUBJONCTIF_OU_INFINITIF } from "./content/francais/grammaire-g16.7";
import { A1_GR_CONDITIONNEL_PRESENT } from "./content/francais/grammaire-g16.8";
import { A1_GR_CONDITIONNEL_PASSE } from "./content/francais/grammaire-g16.9";
import { A1_GR_EXPRESSION_CAUSE } from "./content/francais/grammaire-g17.1";
import { A1_GR_EXPRESSION_CONSEQUENCE } from "./content/francais/grammaire-g17.2";
import { A1_GR_CONJONCTIONS_TEMPS } from "./content/francais/grammaire-g17.3";
import { A1_GR_EXPRESSION_BUT } from "./content/francais/grammaire-g17.4";
import { A1_GR_OPPOSITION_CONCESSION } from "./content/francais/grammaire-g17.5";
import { A1_GR_HYPOTHESE_CONDITION } from "./content/francais/grammaire-g17.6";
import { A1_GR_DISCOURS_INDIRECT_PRESENT } from "./content/francais/grammaire-g17.7";
import { A1_GR_BILAN_A1 } from "./content/francais/grammaire-g6.1";
import { A1_GR_BILAN_A2 } from "./content/francais/grammaire-g13.1";
import { A1_GR_BILAN_B1 } from "./content/francais/grammaire-g18.1";
import { A1_GR_NOMS_COMPOSES } from "./content/francais/grammaire-g2.4";
import { A1_GR_PLURIEL_NOMS } from "./content/francais/grammaire-g2.3";
import { A1_GR_GENRE_PERSONNES } from "./content/francais/grammaire-g2.1";
import { A1_GR_PRESENT_PROGRESSIF } from "./content/francais/grammaire-g1.11";
import { A1_GR_VERBES_ER_PART } from "./content/francais/grammaire-g1.8";
import { A1_GR_CEST } from "./content/francais/grammaire-g1.4";
import { A1_GR_PHRASES } from "./content/francais/grammaire-g5.1";
import { A1_GR_INTERRO } from "./content/francais/grammaire-g5.2";
import { A1_GR_L04 } from "./content/francais/grammaire-g4.1";
import { A1_GR_DOUBLE_AUXILIAIRE } from "./content/francais/grammaire-g8.3";
import { A1_GR_PRONOMINAUX_PASSE } from "./content/francais/grammaire-g8.4";
import { A2_GR_FUTUR_SIMPLE_PROCHE } from "./content/francais/grammaire-g9.3";
import { A2_GR_HYPOTHESE_FUTUR } from "./content/francais/grammaire-g9.4";

import { A1_GR_L18 } from "./content/francais/grammaire-g4.5";
import { A1_GR_L19 } from "./content/francais/grammaire-g4.6";
import { A1_GR_L22 } from "./content/francais/grammaire-g14.3";

import { generatedGrammarExercises } from "./content/francais/generated-grammar-exercises";
import { applyConjProfile } from "./content/francais/conj-exercise-builders";
import { getProfileForLesson, TENSE_LESSON_SLUGS } from "./content/francais/conj-lesson-profiles";

// ── Registre — grammaire ──────────────────────────────────────────────────────

const REORGANIZED_CODES: Record<string, string> = {
  "a1-gr-l01": "G1.1",
  "a1-gr-etre": "G1.2",
  "a1-gr-avoir": "G1.3",
  "a1-gr-cest-il-est": "G1.4",
  "a1-gr-verbes-er": "G1.5",
  "a1-gr-pronominaux": "G1.6",
  "a1-gr-modaux": "G1.7",
  "a1-gr-verbes-er-particuliers": "G1.8",
  "a1-gr-verbes-ir": "G1.9",
  "a1-gr-verbes-re-oir": "G1.10",
  "a1-gr-present-progressif": "G1.11",
  "a1-gr-genre-personnes": "G2.1",
  "a1-gr-genre-choses": "G2.2",
  "a1-gr-pluriel-noms": "G2.3",
  "a1-gr-noms-composes": "G2.4",
  "a1-gr-genre-adjectifs": "G3.1",
  "a1-gr-pluriel-adjectifs": "G3.2",
  "a1-gr-adjectifs-accords-particuliers": "G3.3",
  "a1-gr-place-adjectif": "G3.4",
  "a1-gr-l04": "G4.1",
  "a1-gr-articles-contractes": "G4.2",
  "a1-gr-article-partitif": "G4.3",
  "a1-gr-expression-quantite": "G4.4",
  "a1-gr-l18": "G4.5",
  "a1-gr-l19": "G4.6",
  "a1-gr-adjectifs-indefinis": "G4.7",
  "a1-gr-question-totale": "G5.3",
  "a1-gr-question-ouverte-qui": "G5.4",
  "a1-gr-negation-ne-pas": "G5.5",
  "a1-gr-autres-negations": "G5.6",
  "a1-gr-phrase-exclamative": "G5.7",
  "a1-gr-bilan-a1": "G6.1",
  "a1-gr-a-en-de-lieux": "G7.1",
  "a1-gr-autres-prepositions": "G7.2",
  "a1-gr-passe-compose-avoir": "G8.1",
  "a1-gr-passe-compose-etre": "G8.2",
  "a1-gr-imparfait": "G8.5",
  "a1-gr-passe-recent": "G8.6",
  "a1-gr-imparfait-passe-compose": "G8.7",
  "a1-gr-plus-que-parfait": "G8.8",
  "a1-gr-accord-participe-passe": "G8.9",
  "a1-gr-futur-proche": "G9.1",
  "a1-gr-futur-simple": "G9.2",
  "a1-gr-futur-anterieur": "G9.5",
  "a1-gr-comparaison-adj-adv": "G10.1",
  "a1-gr-comparaison-nom-verbe": "G10.2",
  "a1-gr-superlatif": "G10.3",
  "a1-gr-expression-temps-moment": "G11.1",
  "a1-gr-marqueurs-temps": "G11.2",
  "a1-gr-pronoms-toniques": "G12.1",
  "a1-gr-pronoms-cod-coi": "G12.2",
  "a1-gr-pronom-en": "G12.3",
  "a1-gr-pronoms-y-en-lieu": "G12.4",
  "a1-gr-en-y-pronom-tonique": "G12.5",
  "a1-gr-doubles-pronoms": "G12.6",
  "a1-gr-pronoms-demonstratifs": "G12.7",
  "a1-gr-pronoms-possessifs": "G12.8",
  "a1-gr-pronoms-indefinis": "G12.9",
  "a1-gr-pronoms-relatifs-qui-que-ou": "G12.10",
  "a1-gr-pronom-relatif-dont": "G12.11",
  "a1-gr-pronoms-relatifs-composes": "G12.12",
  "a1-gr-bilan-a2": "G13.1",
  "a1-gr-adverbes-intensite": "G14.1",
  "a1-gr-adverbes-ment": "G14.2",
  "a1-gr-mots-liaison": "G15.1",
  "a1-gr-imperatif": "G16.1",
  "a1-gr-forme-passive": "G16.2",
  "a1-gr-gerondif": "G16.3",
  "a1-gr-subjonctif-present": "G16.4",
  "a1-gr-subjonctif-passe": "G16.5",
  "a1-gr-subjonctif-ou-indicatif": "G16.6",
  "a1-gr-subjonctif-ou-infinitif": "G16.7",
  "a1-gr-conditionnel-present": "G16.8",
  "a1-gr-conditionnel-passe": "G16.9",
  "a1-gr-expression-cause": "G17.1",
  "a1-gr-expression-consequence": "G17.2",
  "a1-gr-conjonctions-temps": "G17.3",
  "a1-gr-expression-but": "G17.4",
  "a1-gr-opposition-concession": "G17.5",
  "a1-gr-hypothese-condition": "G17.6",
  "a1-gr-discours-indirect-present": "G17.7",
  "a1-gr-bilan-b1": "G18.1",
  "a1-gr-phrases": "G5.1",
  "a1-gr-interro": "G5.2",
  "a1-gr-l22": "G14.3",
  "a2-gr-l35": "G12.2",
  "a1-gr-verbes-double-auxiliaire": "G8.3",
  "a1-gr-pronominaux-passe-compose": "G8.4",
  "a2-gr-futur-simple-ou-proche": "G9.3",
  "a2-gr-hypothese-futur": "G9.4",
  "a1-conj-l08": "G4.2",
  "a1-conj-l00": "G1.1",
  "a1-conj-l01": "G1.2",
  "a1-conj-l07": "G1.5",
  "a1-conj-l09": "G1.6",
  "a1-conj-l15": "G1.7",
  "a2-conj-irreguliers": "G1.10",
  "a2-conj-l02": "G1.9",
  "a1-conj-l28": "G8.6",
  "a1-conj-l29": "G8.1",
  "a1-conj-l30": "G8.2",
  "negation-passe-compose": "G8.1",
  "a2-conj-l07": "G8.5",
  "a1-conj-l20": "G9.1",
  "a2-conj-l08": "G9.2",
  "a2-conj-l04": "G16.8",
  "a2-conj-l05": "G16.1",
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

/** Temps de verbe (imparfait, futur simple, conditionnel…) : pack procédural. */
function augmentTenseLessonExercises<T extends GrammarLesson | ConjLesson>(lesson: T): T {
  const profile = getProfileForLesson(lesson.slug);
  if (profile) {
    return { ...lesson, exercises: applyConjProfile(profile) };
  }
  return lesson;
}

function augmentGrammarLessonExercises(lesson: GrammarLesson): GrammarLesson {
  if (TENSE_LESSON_SLUGS.has(lesson.slug)) {
    return augmentTenseLessonExercises(lesson);
  }
  return lesson;
}

const BASE_GRAMMAR_LESSONS: GrammarLesson[] = [
  A1_GR_L01,
  A1_GR_ETRE,
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
  A1_GR_PLURIEL_ADJECTIFS,
  A1_GR_ADJ_ACCORDS_PART,
  A1_GR_PLACE_ADJECTIF,
  A1_GR_ARTICLES_CONTRACTES,
  A1_GR_ARTICLE_PARTITIF,
  A1_GR_EXPRESSION_QUANTITE,
  A1_GR_ADJECTIFS_INDEFINIS,
  A1_GR_QUESTION_TOTALE,
  A1_GR_QUESTION_OUVERTE_QUI,
  A1_GR_NEGATION_NE_PAS,
  A1_GR_AUTRES_NEGATIONS,
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
  A1_GR_CONDITIONNEL_PRESENT,
  A1_GR_CONDITIONNEL_PASSE,
  A1_GR_EXPRESSION_CAUSE,
  A1_GR_EXPRESSION_CONSEQUENCE,
  A1_GR_CONJONCTIONS_TEMPS,
  A1_GR_EXPRESSION_BUT,
  A1_GR_OPPOSITION_CONCESSION,
  A1_GR_HYPOTHESE_CONDITION,
  A1_GR_DISCOURS_INDIRECT_PRESENT,
  A1_GR_BILAN_A1,
  A1_GR_BILAN_A2,
  A1_GR_BILAN_B1,
  A1_GR_CEST,
  A1_GR_PHRASES,
  A1_GR_INTERRO,
  A1_GR_L04,
  A1_GR_L18,
  A1_GR_L19,
  A1_GR_L22,
  A1_GR_DOUBLE_AUXILIAIRE,
  A1_GR_PRONOMINAUX_PASSE,
  A2_GR_FUTUR_SIMPLE_PROCHE,
  A2_GR_HYPOTHESE_FUTUR,

];


/** Ancien slug conjugaison → leçon grammaire qui le remplace (prérequis / redirections). */
export const CONJ_SLUG_TO_GRAMMAR: Record<string, string> = {
  "a1-conj-l00": "a1-gr-l01",
  "a1-conj-l01": "a1-gr-etre",
  "a1-conj-l07": "a1-gr-verbes-er",
  "a1-conj-l08": "a1-gr-articles-contractes",
  "a1-conj-l09": "a1-gr-pronominaux",
  "a1-conj-l15": "a1-gr-modaux",
  "a2-gr-l35": "a1-gr-pronoms-cod-coi",
  "a2-conj-irreguliers": "a1-gr-verbes-re-oir",
  "a2-conj-l02": "a1-gr-verbes-ir",
  "a1-conj-l28": "a1-gr-passe-recent",
  "a1-conj-l29": "a1-gr-passe-compose-avoir",
  "negation-passe-compose": "a1-gr-passe-compose-avoir",
  "a1-conj-l30": "a1-gr-passe-compose-etre",
  "a2-conj-l07": "a1-gr-imparfait",
  "a1-conj-l20": "a1-gr-futur-proche",
  "a2-conj-l08": "a1-gr-futur-simple",
  "a2-conj-l04": "a1-gr-conditionnel-present",
  "a2-conj-l05": "a1-gr-imperatif",
};

export function resolveFrenchPrereqSlug(slug: string): string {
  return CONJ_SLUG_TO_GRAMMAR[slug] ?? slug;
}

export const GRAMMAR_LESSONS: GrammarLesson[] = BASE_GRAMMAR_LESSONS
  .map(applyReorganizedCode)
  .map(addGeneratedExercises)
  .map(augmentGrammarLessonExercises);

/** Anciennes leçons conjugaison : alias vers la leçon G correspondante (plus de fichiers R/RP). */
export const CONJUGAISON_LESSONS: ConjLesson[] = Object.entries(CONJ_SLUG_TO_GRAMMAR).map(
  ([conjSlug, grSlug]) => {
    const g = GRAMMAR_LESSONS.find((l) => l.slug === grSlug);
    return {
      slug: conjSlug,
      code: g?.code ?? conjSlug,
      level: g?.level ?? "A1",
      title: g?.title ?? conjSlug,
      theory: g?.theory ?? [],
      exercises: g?.exercises ?? [],
      evalExercises: g?.exercises,
    };
  },
);

// ── Fonctions de recherche ────────────────────────────────────────────────────

function hasUnlockedEval(code: string): boolean {
  return /^G\d+\./.test(code);
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
  const mapped = CONJ_SLUG_TO_GRAMMAR[slug];
  if (mapped) {
    const g = getGrammarLesson(mapped);
    if (!g) return undefined;
    return {
      slug,
      code: g.code,
      level: g.level,
      title: g.title,
      theory: g.theory,
      exercises: g.exercises,
      evalExercises: g.evalExercises ?? g.exercises,
    };
  }
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

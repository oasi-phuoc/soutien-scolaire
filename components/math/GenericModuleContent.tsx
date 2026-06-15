"use client";

import { useRouter } from "next/navigation";
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { answerMatches } from "@/lib/curriculum/content/math/math-a1-types";
import type { MathExerciseItem, MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";
import { getTrad } from "@/lib/curriculum/content/math/trad";
import type { BlockTrad } from "@/lib/curriculum/content/math/trad";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { getMathModule } from "@/lib/curriculum/math-data";
import { loadProgress, saveProgress, completeSubmodule } from "@/lib/progress/math-progress";
import { medalFromPercent, PASSING_GRADE, linearSwissGrade } from "@/lib/scoring";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import type { PivotCode } from "@/lib/pivot-langs";
import EvalProgressBar from "@/components/math/EvalProgressBar";
import TrainingProgressBar from "@/components/math/TrainingProgressBar";
import {
  Exercise16 as PlacementRectangleExercise,
  Exercise25 as PlacementParallelogramExercise,
  Exercise26 as PlacementTriangleExercise,
  Exercise27 as PlacementRhombusExercise,
} from "@/components/math/placement/PlacementExercises16to27";
import {
  Exercise37 as PlacementTrapezoidExercise,
  Exercise38 as PlacementCircleExercise,
} from "@/components/math/placement/PlacementExercises28to38";
import { G5VolumeExercise } from "@/components/math/geo/G5VolumeExercises";

const CLS_WRONG = "rounded-none border-0 border-b-2 border-amber-500";
const MATH_TEXT_INPUT_BASE = "rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 text-center font-mono outline-none transition-colors focus:border-[var(--color-accent-alg)] disabled:opacity-70";
const MATH_NUMBER_INPUT_BASE = `${MATH_TEXT_INPUT_BASE} appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`;

function renderBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return <>{text}</>;
  return <>{parts.map((p, i) => i % 2 === 1 ? <strong key={i} className="font-bold text-[var(--color-accent-alg)]">{p}</strong> : p)}</>;
}

function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function preserveEvidence(fr: string | undefined, text: string | undefined) {
  if (!text) return fr ?? "";
  if (text.includes("**")) return text;
  const tokens = [...(fr ?? "").matchAll(/\*\*(.+?)\*\*/g)].map((m) => m[1]).filter(Boolean) as string[];
  return tokens.reduce((acc, token) => {
    if (!token || token.length > 12) return acc;
    return acc.replace(new RegExp(`(?<!\\*)${escapeRegExp(token)}(?!\\*)`, "g"), `**${token}**`);
  }, text);
}

function renderText(text: string): React.ReactNode {
  const parts = text.split(/(\[\[frac:[^/\]]+\/[^\]]+\]\])/);
  if (parts.length === 1) return renderBold(text);
  const nodes: React.ReactNode[] = [];
  parts.forEach((part, i) => {
    const m = part.match(/^\[\[frac:([^/\]]+)\/([^\]]+)\]\]$/);
    if (m) {
      nodes.push(
        <span key={i} className="inline-flex flex-col items-center leading-none gap-0.5 mx-0.5 align-middle">
          <span className="text-xs font-bold text-[var(--color-accent-alg)]">{m[1]}</span>
          <span className="h-[1.5px] self-stretch rounded bg-[var(--color-text-primary)]" />
          <span className="text-xs font-bold text-[var(--color-text-primary)]">{m[2]}</span>
        </span>
      );
    } else if (part) {
      nodes.push(<span key={i}>{renderBold(part)}</span>);
    }
  });
  return <>{nodes}</>;
}

function formatCompNum(n: number): string {
  const s = n.toString();
  if (s.length <= 3) return s;
  if (s.length <= 6) return s.slice(0, s.length - 3) + "â€¯" + s.slice(s.length - 3);
  return s;
}

// â”€â”€ Step types â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
type ArithOp = "+" | "-" | "Ã—" | "Ã·";
type ArithQuestion = { a: number; b: number; result: number; op: ArithOp; missingPos: "result" | "a" | "b"; answer: string };
type ArithGroupConfig = { questions: ArithQuestion[]; exNum: number; op: ArithOp; range: [number, number]; missingOperand: boolean; timer?: number };
type RoundingQ = { prompt: string; answer: string };
type RoundingConfig = { questions: RoundingQ[]; exNum: number; count: number; consigne: string; kind: string };
type RoundingStep = { kind: "rounding_group"; lesson: MathSubmoduleLesson; config: RoundingConfig };
type ColGridQ = { a: number; b: number; result: number; op: ArithOp; carryRow: (number | null)[] };
type ColGridConfig = { questions: ColGridQ[]; exNum: number; op: ArithOp; preFilledOperands: boolean };

type Mul2DigitQ = {
  a: number; b: number;
  partial1: number;
  partial2: number;
  result: number;
  carries1: (number|null)[];
  carries2: (number|null)[];
};
type Mul2DigitConfig = { questions: Mul2DigitQ[]; exNum: number; preFilledOperands: boolean };
type Mul2DigitStep = { kind: "mul_two_digit"; lesson: MathSubmoduleLesson; config: Mul2DigitConfig };

type DivStep = { partialDiv: number; quotientDigit: number; product: number; partRemainder: number; colEnd: number };
type DivColGridQ = { dividend: number; divisor: number; quotient: number; remainder: number; steps: DivStep[]; dividendCols: number; divisorCols: number; quotientCols: number };
type DivColGridConfig = { questions: DivColGridQ[]; exNum: number; preFilledOperands: boolean; dividendCols: number; divisorCols: number; quotientCols: number };

type ExprCompQ = { la: number; lop: ArithOp; lb: number; ra: number; rop: ArithOp; rb: number; answer: "<" | "=" | ">" };
type ExprCompConfig = { questions: ExprCompQ[]; exNum: number; op: ArithOp };

// Fraction types
type FracIdQ = { num: number; den: number; ask: "num" | "den" };
type FracIdConfig = { questions: FracIdQ[]; exNum: number };
type FracIdStep = { kind: "frac_id"; lesson: MathSubmoduleLesson; config: FracIdConfig };

type FracEquivQ = { srcNum: number; srcDen: number; tgtNum: number; tgtDen: number; missingPos: "num" | "den"; answer: number };
type FracEquivConfig = { questions: FracEquivQ[]; exNum: number; range: [number, number] };
type FracEquivStep = { kind: "frac_equiv"; lesson: MathSubmoduleLesson; config: FracEquivConfig };

type FracSimplifyQ = { num: number; den: number; simNum: number; simDen: number };
type FracSimplifyConfig = { questions: FracSimplifyQ[]; exNum: number; range: [number, number] };
type FracSimplifyStep = { kind: "frac_simplify"; lesson: MathSubmoduleLesson; config: FracSimplifyConfig };

type FracCompQ = { num1: number; den1: number; num2: number; den2: number; answer: "<" | "=" | ">" };
type FracCompConfig = { questions: FracCompQ[]; exNum: number; mode: "same_den" | "same_num" | "random" };
type FracCompStep = { kind: "frac_compare"; lesson: MathSubmoduleLesson; config: FracCompConfig };

type TheoryStep      = { kind: "theory";           lesson: MathSubmoduleLesson };
type ExerciseStep    = { kind: "exercise";          lesson: MathSubmoduleLesson; item: MathExerciseItem };
type NumberLineStep  = { kind: "number_line";       lesson: MathSubmoduleLesson; nlConfig: NLConfig };
type ComparisonStep  = { kind: "comparison_ex";     lesson: MathSubmoduleLesson; config: ComparisonConfig };
type ArithGroupStep  = { kind: "arithmetic_group";  lesson: MathSubmoduleLesson; config: ArithGroupConfig; timer?: number };
type ColumnGridStep  = { kind: "column_grid";       lesson: MathSubmoduleLesson; config: ColGridConfig };
type DivColGridStep  = { kind: "div_column_grid";   lesson: MathSubmoduleLesson; config: DivColGridConfig };
type ExprCompStep    = { kind: "expr_comparison";   lesson: MathSubmoduleLesson; config: ExprCompConfig };
type EvalStartStep   = { kind: "eval_start";        lesson: MathSubmoduleLesson };
type PassToggleStep  = { kind: "pass_toggle";       lesson: MathSubmoduleLesson };

// A1.3 new types
type NumberSelectConfig = { mode: "gt"|"lt"|"between"; threshold: number; threshold2?: number; numbers: number[]; exNum: number; consigne: string };
type NumberSelectStep = { kind: "number_select"; lesson: MathSubmoduleLesson; config: NumberSelectConfig };

type EncadrementQ = { n: number; lo: number; hi: number; dir: "<" | ">" };
type EncadrementConfig = { questions: EncadrementQ[]; exNum: number; unit: 10|100 };
type EncadrementStep = { kind: "encadrement"; lesson: MathSubmoduleLesson; config: EncadrementConfig };

// A1.4 new types
type OddEvenQ = { n: number; answer: "pair"|"impair" };
type OddEvenConfig = { questions: OddEvenQ[]; exNum: number };
type OddEvenStep = { kind: "odd_even"; lesson: MathSubmoduleLesson; config: OddEvenConfig };

type NLMultiQ = { nlConfig: NLConfig; mode: "read"|"less"|"more" };
type NLMultiConfig = { questions: NLMultiQ[]; exNum: number; consigne: string; noFeedback?: boolean };
type NLMultiStep = { kind: "nl_multi"; lesson: MathSubmoduleLesson; config: NLMultiConfig };

// A1.5 new types
type OrderingQ = { numbers: number[] };
type OrderingConfig = { questions: OrderingQ[]; direction: "asc"|"desc"; exNum: number };
type OrderingStep = { kind: "ordering"; lesson: MathSubmoduleLesson; config: OrderingConfig };

type SeqRuleQ = { nums: number[]; step: number; op: "+"|"-" };
type SeqRuleConfig = { questions: SeqRuleQ[]; exNum: number };
type SeqRuleStep = { kind: "seq_rule"; lesson: MathSubmoduleLesson; config: SeqRuleConfig };

type SeqCompleteQ = { allNums: number[]; blankIdxs: number[]; step: number };
type SeqCompleteConfig = { questions: SeqCompleteQ[]; exNum: number };
type SeqCompleteStep = { kind: "seq_complete"; lesson: MathSubmoduleLesson; config: SeqCompleteConfig };

// A5.2 decimal sequence types (numbers stored as hundredths: integer * 100)
type DecOrderingQ = { hundredths: number[] };
type DecOrderingConfig = { questions: DecOrderingQ[]; direction: "asc"|"desc"; exNum: number };
type DecOrderingStep = { kind: "dec_ordering"; lesson: MathSubmoduleLesson; config: DecOrderingConfig };

type DecSeqRuleQ = { nums: number[]; step: number; op: "+"|"-" };
type DecSeqRuleConfig = { questions: DecSeqRuleQ[]; exNum: number };
type DecSeqRuleStep = { kind: "dec_seq_rule"; lesson: MathSubmoduleLesson; config: DecSeqRuleConfig };

type DecSeqCompleteQ = { allNums: number[]; blankIdxs: number[]; step: number };
type DecSeqCompleteConfig = { questions: DecSeqCompleteQ[]; exNum: number };
type DecSeqCompleteStep = { kind: "dec_seq_complete"; lesson: MathSubmoduleLesson; config: DecSeqCompleteConfig };

// A3.5 types
type MultSelectConfig = { base: number; numbers: number[]; exNum: number };
type MultSelectStep = { kind: "mult_select"; lesson: MathSubmoduleLesson; config: MultSelectConfig };
type MultListConfig = { bases: [number, number]; exNum: number };
type MultListStep = { kind: "mult_list"; lesson: MathSubmoduleLesson; config: MultListConfig };
type TrueFalseMultDivQ = { statement: string; answer: boolean; type: "multiple"|"diviseur" };
type TrueFalseMultDivConfig = { questions: TrueFalseMultDivQ[]; exNum: number };
type TrueFalseMultDivStep = { kind: "true_false_mult_div"; lesson: MathSubmoduleLesson; config: TrueFalseMultDivConfig };
type FindDivisorsConfig = { questions: Array<{ number: number; divisors: number[] }>; exNum: number };
type FindDivisorsStep = { kind: "find_divisors"; lesson: MathSubmoduleLesson; config: FindDivisorsConfig };
type DivSelectConfig = { base: number; numbers: number[]; exNum: number };
type DivSelectStep = { kind: "div_select"; lesson: MathSubmoduleLesson; config: DivSelectConfig };
type DivByConfig = { questions: Array<{n: number; validDivisors: number[]; choices: number[]}>; exNum: number };
type DivByStep = { kind: "div_by"; lesson: MathSubmoduleLesson; config: DivByConfig };
type MissingDigitDivQ = { prefix: string; divisor: number; validDigits: string[] };
type MissingDigitDivConfig = { questions: MissingDigitDivQ[]; exNum: number };
type MissingDigitDivStep = { kind: "missing_digit_div"; lesson: MathSubmoduleLesson; config: MissingDigitDivConfig };
// A3.6 types
type GcdLcmConfig = { questions: Array<{nums: number[]; answer: number}>; exNum: number; op: "pgcd"|"ppmc"; count: 2|3 };
type GcdLcmStep = { kind: "gcd_lcm"; lesson: MathSubmoduleLesson; config: GcdLcmConfig };
type TrueFalseGcdLcmQ = { statement: string; answer: boolean; type: "pgcd"|"ppmc" };
type TrueFalseGcdLcmConfig = { questions: TrueFalseGcdLcmQ[]; exNum: number };
type TrueFalseGcdLcmStep = { kind: "true_false_gcd_lcm"; lesson: MathSubmoduleLesson; config: TrueFalseGcdLcmConfig };

type WordLevel = "a1" | "a2" | "b1";
type WordProblemQ = { textFr: string; answer: number; op: "+" | "-" };
type WordProblemsConfig = { exNum: number; level: WordLevel; questions: WordProblemQ[] };
type WordProblemsStep = { kind: "word_problems"; lesson: MathSubmoduleLesson; config: WordProblemsConfig };
type UnitConversionDomain = "length" | "area" | "volume" | "capacity" | "mass" | "time";
type UnitConversionQ = { value: string; from: string; to: string; answer: string };
type UnitConversionConfig = { exNum: number; domain: UnitConversionDomain; decimals: boolean; questions: UnitConversionQ[] };
type UnitConversionStep = { kind: "unit_conversion"; lesson: MathSubmoduleLesson; config: UnitConversionConfig };
type GeoPlacementKind = "square" | "rectangle" | "triangle" | "parallelogram" | "trapezoid" | "circle" | "rhombus";
type GeoPlacementStep = { kind: "geo_placement"; lesson: MathSubmoduleLesson; geoKind: GeoPlacementKind; exNum: number; label: string };
type VolumePlacementKind = "cube" | "cuboid" | "prism" | "cylinder" | "pyramid" | "cone_sphere";
type VolumePlacementStep = { kind: "volume_placement"; lesson: MathSubmoduleLesson; volumeKind: VolumePlacementKind; exNum: number; mode: "volume" | "missing"; decimals?: boolean; label: string };

type FlatStep = TheoryStep | ExerciseStep | NumberLineStep | ComparisonStep | ArithGroupStep | ColumnGridStep | DivColGridStep | ExprCompStep | EvalStartStep | PassToggleStep | RoundingStep | FracIdStep | FracEquivStep | FracSimplifyStep | FracCompStep | NumberSelectStep | EncadrementStep | OddEvenStep | NLMultiStep | OrderingStep | SeqRuleStep | SeqCompleteStep | Mul2DigitStep | DecOrderingStep | DecSeqRuleStep | DecSeqCompleteStep | MultSelectStep | MultListStep | TrueFalseMultDivStep | FindDivisorsStep | DivSelectStep | DivByStep | MissingDigitDivStep | GcdLcmStep | TrueFalseGcdLcmStep | WordProblemsStep | UnitConversionStep | GeoPlacementStep | VolumePlacementStep;

// â”€â”€ Comparison exercise â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
type ComparisonQ = { a: number; b: number; answer: "<" | "=" | ">" };
type ComparisonConfig = { questions: ComparisonQ[]; level: 1 | 2 };

function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// â”€â”€ Unit conversion generators (G2.1 / G2.2) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const UNIT_FACTORS: Record<UnitConversionDomain, Record<string, number>> = {
  length: { km: 1000, hm: 100, dam: 10, m: 1, dm: 0.1, cm: 0.01, mm: 0.001 },
  area: { "kmÂ²": 1_000_000, "hmÂ²": 10_000, "damÂ²": 100, "mÂ²": 1, "dmÂ²": 0.01, "cmÂ²": 0.0001, "mmÂ²": 0.000001 },
  volume: { "kmÂ³": 1_000_000_000, "hmÂ³": 1_000_000, "damÂ³": 1000, "mÂ³": 1, "dmÂ³": 0.001, "cmÂ³": 0.000001, "mmÂ³": 0.000000001 },
  capacity: { kl: 1000, hl: 100, dal: 10, l: 1, dl: 0.1, cl: 0.01, ml: 0.001 },
  mass: { t: 1_000_000, q: 100_000, kg: 1000, hg: 100, dag: 10, g: 1, dg: 0.1, cg: 0.01, mg: 0.001 },
  time: { j: 86400, h: 3600, min: 60, s: 1 },
};

function fmtPlainNumber(n: number, maxDecimals = 12): string {
  const rounded = Number(n.toFixed(maxDecimals));
  return rounded.toLocaleString("fr-CH", {
    useGrouping: false,
    maximumFractionDigits: maxDecimals,
  });
}

function randomDecimalValue(): number {
  const decimals = rnd(1, 4);
  const scale = 10 ** decimals;
  return rnd(scale, 99999 * scale) / scale;
}

function genUnitConversionQ(domain: UnitConversionDomain, decimals: boolean): UnitConversionQ {
  const factors = UNIT_FACTORS[domain];
  const units = Object.keys(factors);
  const from = units[rnd(0, units.length - 1)]!;
  let to = units[rnd(0, units.length - 1)]!;
  while (to === from) to = units[rnd(0, units.length - 1)]!;
  const valueNum = decimals ? randomDecimalValue() : rnd(1, 99999);
  const answer = valueNum * factors[from]! / factors[to]!;
  return {
    value: fmtPlainNumber(valueNum, 4),
    from,
    to,
    answer: fmtPlainNumber(answer),
  };
}

function genUnitConversion(domain: UnitConversionDomain, decimals: boolean, exNum: number, count = 5): UnitConversionConfig {
  return {
    exNum,
    domain,
    decimals,
    questions: Array.from({ length: count }, () => genUnitConversionQ(domain, decimals)),
  };
}

function numericAnswerMatches(input: string, expected: string): boolean {
  const a = Number(input.trim().replace(/\s/g, "").replace(",", "."));
  const b = Number(expected.trim().replace(/\s/g, "").replace(",", "."));
  if (!Number.isFinite(a) || !Number.isFinite(b)) return false;
  return Math.abs(a - b) <= Math.max(1e-9, Math.abs(b) * 1e-10);
}

// â”€â”€ Word Problems (A2.4) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const WP_ADD: Array<(a: number, b: number) => string> = [
  (a, b) => `${a} enfants jouent dans la cour. ${b} autres enfants les rejoignent. Combien y a-t-il d'enfants en tout ?`,
  (a, b) => `Marie a ${a} billes. Elle en gagne ${b} de plus Ã  la rÃ©crÃ©ation. Combien de billes a-t-elle ?`,
  (a, b) => `Il y a ${a} livres sur l'Ã©tagÃ¨re. On y ajoute ${b} nouveaux livres. Combien y en a-t-il ?`,
  (a, b) => `Paul a Ã©conomisÃ© ${a} CHF. Sa grand-mÃ¨re lui donne ${b} CHF. Combien a-t-il au total ?`,
  (a, b) => `Une boÃ®te contient ${a} crayons. On y met ${b} crayons de plus. Combien y a-t-il de crayons ?`,
  (a, b) => `LÃ©a a ${a} autocollants. Elle en achÃ¨te ${b} autres. Combien en possÃ¨de-t-elle ?`,
  (a, b) => `Un fermier a ${a} poules. Il en achÃ¨te ${b} de plus au marchÃ©. Combien de poules a-t-il ?`,
  (a, b) => `${a} spectateurs sont dans la salle. ${b} autres arrivent. Combien y a-t-il de spectateurs ?`,
  (a, b) => `Une boulangerie vend ${a} croissants le matin et ${b} l'aprÃ¨s-midi. Combien en a-t-elle vendu en tout ?`,
  (a, b) => `Tom a lu ${a} pages hier. Il en lit ${b} aujourd'hui. Combien de pages a-t-il lues au total ?`,
  (a, b) => `Un jardinier a plantÃ© ${a} tulipes. Il en plante ${b} autres. Combien en a-t-il plantÃ© ?`,
  (a, b) => `Dans un tiroir, il y a ${a} stylos. On y range ${b} stylos de plus. Combien y en a-t-il ?`,
  (a, b) => `ZoÃ© a ${a} points dans son jeu. Elle en gagne ${b} de plus. Quel est son nouveau total ?`,
  (a, b) => `Le matin, ${a} Ã©lÃ¨ves arrivent Ã  l'Ã©cole. ${b} autres s'ajoutent pour le sport. Combien y en a-t-il ?`,
  (a, b) => `Un bus transporte ${a} passagers. Ã€ l'arrÃªt suivant, ${b} personnes montent. Combien y en a-t-il ?`,
];
const WP_SUB: Array<(a: number, b: number) => string> = [
  (a, b) => `${a} enfants jouent dans la cour. ${b} rentrent Ã  la maison. Combien reste-t-il d'enfants ?`,
  (a, b) => `Une bibliothÃ¨que possÃ¨de ${a} livres. On en retire ${b}. Combien en reste-t-il ?`,
  (a, b) => `Paul a ${a} billes. Il en perd ${b}. Combien lui en reste-t-il ?`,
  (a, b) => `Marie a ${a} CHF. Elle en dÃ©pense ${b} au magasin. Combien lui reste-t-il ?`,
  (a, b) => `Un bocal contient ${a} bonbons. Les enfants en mangent ${b}. Combien en reste-t-il ?`,
  (a, b) => `${a} personnes font la queue. ${b} s'en vont. Combien en reste-t-il ?`,
  (a, b) => `Il y a ${a} livres sur une Ã©tagÃ¨re. On en enlÃ¨ve ${b}. Combien en reste-t-il ?`,
  (a, b) => `Un fermier a ${a} Å“ufs. Il en vend ${b} au marchÃ©. Combien lui en reste-t-il ?`,
  (a, b) => `Tom avait ${a} points. Il en perd ${b}. Quel est son nouveau score ?`,
  (a, b) => `Un train avait ${a} passagers. ${b} sont descendus Ã  la gare. Combien en reste-t-il ?`,
  (a, b) => `LÃ©a avait ${a} autocollants. Elle en donne ${b} Ã  son amie. Combien lui en reste-t-il ?`,
  (a, b) => `Il y avait ${a} pommes dans le panier. On en a retirÃ© ${b}. Combien en reste-t-il ?`,
  (a, b) => `Un magasin avait ${a} articles. Il en vend ${b} dans la journÃ©e. Combien lui en reste-t-il ?`,
  (a, b) => `${a} oiseaux Ã©taient sur un arbre. ${b} s'envolent. Combien en reste-t-il sur l'arbre ?`,
  (a, b) => `ZoÃ© avait ${a} figurines. Elle en offre ${b} Ã  sa cousine. Combien lui en reste-t-il ?`,
];

const WP_ADD_A1: Array<(a: number, b: number) => string> = [
  (a, b) => `Lina a ${a} billes. Elle en gagne ${b}. Combien a-t-elle de billes ?`,
  (a, b) => `Il y a ${a} pommes. On ajoute ${b} pommes. Combien y a-t-il de pommes ?`,
  (a, b) => `${a} enfants jouent. ${b} enfants arrivent. Combien y a-t-il d'enfants ?`,
  (a, b) => `Noa a ${a} cartes. Il reÃ§oit ${b} cartes. Combien a-t-il de cartes ?`,
  (a, b) => `Dans la boÃ®te, il y a ${a} crayons. On met ${b} crayons. Combien y en a-t-il ?`,
  (a, b) => `Il y a ${a} fleurs. On plante ${b} fleurs. Combien y a-t-il de fleurs ?`,
  (a, b) => `Mia lit ${a} pages. Elle lit encore ${b} pages. Combien de pages lit-elle ?`,
  (a, b) => `Un panier contient ${a} poires. On ajoute ${b} poires. Combien y en a-t-il ?`,
  (a, b) => `Tom a ${a} points. Il gagne ${b} points. Quel est son total ?`,
  (a, b) => `Il y a ${a} voitures. ${b} voitures arrivent. Combien y a-t-il de voitures ?`,
  (a, b) => `Sara a ${a} gommes. Elle achÃ¨te ${b} gommes. Combien en a-t-elle ?`,
  (a, b) => `${a} oiseaux sont sur le fil. ${b} oiseaux arrivent. Combien y en a-t-il ?`,
  (a, b) => `Un sac contient ${a} cubes. On ajoute ${b} cubes. Combien de cubes y a-t-il ?`,
  (a, b) => `Il y a ${a} Ã©lÃ¨ves. ${b} Ã©lÃ¨ves entrent. Combien y a-t-il d'Ã©lÃ¨ves ?`,
  (a, b) => `Eli a ${a} autocollants. Il en reÃ§oit ${b}. Combien en a-t-il ?`,
];

const WP_SUB_A1: Array<(a: number, b: number) => string> = [
  (a, b) => `Lina a ${a} billes. Elle en perd ${b}. Combien lui en reste-t-il ?`,
  (a, b) => `Il y a ${a} pommes. On enlÃ¨ve ${b} pommes. Combien reste-t-il de pommes ?`,
  (a, b) => `${a} enfants jouent. ${b} enfants partent. Combien reste-t-il d'enfants ?`,
  (a, b) => `Noa a ${a} cartes. Il donne ${b} cartes. Combien lui en reste-t-il ?`,
  (a, b) => `Dans la boÃ®te, il y a ${a} crayons. On retire ${b} crayons. Combien y en a-t-il ?`,
  (a, b) => `Il y a ${a} fleurs. On coupe ${b} fleurs. Combien reste-t-il de fleurs ?`,
  (a, b) => `Mia a ${a} pages Ã  lire. Elle lit ${b} pages. Combien reste-t-il de pages ?`,
  (a, b) => `Un panier contient ${a} poires. On mange ${b} poires. Combien en reste-t-il ?`,
  (a, b) => `Tom a ${a} points. Il perd ${b} points. Quel est son total ?`,
  (a, b) => `Il y a ${a} voitures. ${b} voitures partent. Combien reste-t-il de voitures ?`,
  (a, b) => `Sara a ${a} gommes. Elle en donne ${b}. Combien lui en reste-t-il ?`,
  (a, b) => `${a} oiseaux sont sur le fil. ${b} oiseaux s'envolent. Combien en reste-t-il ?`,
  (a, b) => `Un sac contient ${a} cubes. On enlÃ¨ve ${b} cubes. Combien de cubes reste-t-il ?`,
  (a, b) => `Il y a ${a} Ã©lÃ¨ves. ${b} Ã©lÃ¨ves sortent. Combien reste-t-il d'Ã©lÃ¨ves ?`,
  (a, b) => `Eli a ${a} autocollants. Il en donne ${b}. Combien lui en reste-t-il ?`,
];

const WP_ADD_B1: Array<(a: number, b: number) => string> = [
  (a, b) => `Pour une sortie scolaire, ${a} billets sont rÃ©servÃ©s le matin. Dans l'aprÃ¨s-midi, l'Ã©cole ajoute ${b} billets pour une autre classe. Combien de billets sont rÃ©servÃ©s au total ?`,
  (a, b) => `Une association collecte ${a} CHF lors d'une vente. Le lendemain, elle reÃ§oit encore ${b} CHF de dons. Quelle somme possÃ¨de-t-elle maintenant ?`,
  (a, b) => `La bibliothÃ¨que avait dÃ©jÃ  classÃ© ${a} livres. Une nouvelle livraison de ${b} livres doit aussi Ãªtre rangÃ©e. Combien de livres sont Ã  classer en tout ?`,
  (a, b) => `Un club sportif compte ${a} inscriptions en dÃ©but de semaine. AprÃ¨s la journÃ©e portes ouvertes, ${b} nouvelles personnes s'inscrivent. Combien d'inscriptions y a-t-il ?`,
  (a, b) => `Une entreprise a prÃ©parÃ© ${a} colis lundi. Mardi, elle en prÃ©pare ${b} supplÃ©mentaires. Combien de colis ont Ã©tÃ© prÃ©parÃ©s ?`,
  (a, b) => `Lors d'un tournoi, ${a} spectateurs sont entrÃ©s avant midi. AprÃ¨s midi, ${b} autres spectateurs arrivent. Combien de spectateurs sont entrÃ©s ?`,
  (a, b) => `Un magasin vend ${a} articles pendant la matinÃ©e. Il en vend encore ${b} pendant l'aprÃ¨s-midi. Combien d'articles a-t-il vendus ?`,
  (a, b) => `Une ville plante ${a} arbres dans un quartier. Elle en plante ensuite ${b} dans un parc voisin. Combien d'arbres sont plantÃ©s ?`,
  (a, b) => `Un entrepÃ´t contient ${a} cahiers. Une commande de ${b} cahiers arrive. Combien de cahiers l'entrepÃ´t contient-il ?`,
  (a, b) => `Une course accueille ${a} participants inscrits en ligne. Le jour mÃªme, ${b} participants s'inscrivent sur place. Combien de participants y a-t-il ?`,
  (a, b) => `Un musÃ©e reÃ§oit ${a} visiteurs pendant la semaine. Le week-end, ${b} visiteurs supplÃ©mentaires viennent. Combien de visiteurs a-t-il reÃ§us ?`,
  (a, b) => `Une Ã©cole possÃ¨de ${a} tablettes. Elle en achÃ¨te ${b} pour Ã©quiper de nouvelles classes. Combien de tablettes possÃ¨de-t-elle ?`,
  (a, b) => `Une usine produit ${a} piÃ¨ces avant la pause. AprÃ¨s la pause, elle produit ${b} piÃ¨ces de plus. Combien de piÃ¨ces sont produites ?`,
  (a, b) => `Un agriculteur rÃ©colte ${a} kg de pommes le matin. Il rÃ©colte encore ${b} kg l'aprÃ¨s-midi. Combien de kilogrammes rÃ©colte-t-il ?`,
  (a, b) => `Une caisse contient ${a} enveloppes. On ajoute ${b} enveloppes pour prÃ©parer un envoi. Combien d'enveloppes contient la caisse ?`,
];

const WP_SUB_B1: Array<(a: number, b: number) => string> = [
  (a, b) => `Un cinÃ©ma avait prÃ©vu ${a} places pour une sÃ©ance. AprÃ¨s plusieurs annulations, ${b} places ne sont plus rÃ©servÃ©es. Combien de places restent rÃ©servÃ©es ?`,
  (a, b) => `Une association possÃ¨de ${a} CHF pour financer un projet. Elle dÃ©pense ${b} CHF pour acheter du matÃ©riel. Quelle somme lui reste-t-il ?`,
  (a, b) => `La bibliothÃ¨que compte ${a} livres dans une rÃ©serve. Elle en transfÃ¨re ${b} vers les classes. Combien de livres restent dans la rÃ©serve ?`,
  (a, b) => `Un club sportif avait ${a} ballons en stock. AprÃ¨s un tournoi, ${b} ballons sont abÃ®mÃ©s et retirÃ©s. Combien de ballons utilisables restent-ils ?`,
  (a, b) => `Une entreprise doit livrer ${a} colis. Elle en livre ${b} le matin. Combien de colis reste-t-il Ã  livrer ?`,
  (a, b) => `Lors d'un salon, ${a} badges sont imprimÃ©s. Les organisateurs en distribuent ${b} dÃ¨s l'ouverture. Combien de badges restent-ils ?`,
  (a, b) => `Un magasin avait ${a} articles en rayon. Il en vend ${b} pendant la journÃ©e. Combien d'articles restent en rayon ?`,
  (a, b) => `Une ville dispose de ${a} plants pour ses jardins. Elle en utilise ${b} dans le premier quartier. Combien de plants restent disponibles ?`,
  (a, b) => `Un entrepÃ´t contient ${a} cahiers. Une Ã©cole en commande ${b}. Combien de cahiers restent dans l'entrepÃ´t ?`,
  (a, b) => `Une course comptait ${a} inscrits. Avant le dÃ©part, ${b} personnes se dÃ©sistent. Combien de participants restent inscrits ?`,
  (a, b) => `Un musÃ©e reÃ§oit ${a} brochures. Il en distribue ${b} aux visiteurs. Combien de brochures reste-t-il ?`,
  (a, b) => `Une Ã©cole possÃ¨de ${a} tablettes. Elle en prÃªte ${b} Ã  une autre Ã©cole. Combien de tablettes lui restent-elles ?`,
  (a, b) => `Une usine a produit ${a} piÃ¨ces. Lors du contrÃ´le, ${b} piÃ¨ces sont Ã©cartÃ©es. Combien de piÃ¨ces restent acceptÃ©es ?`,
  (a, b) => `Un agriculteur rÃ©colte ${a} kg de pommes. Il en vend ${b} kg au marchÃ©. Combien de kilogrammes lui restent-ils ?`,
  (a, b) => `Une caisse contient ${a} enveloppes. On en utilise ${b} pour un envoi. Combien d'enveloppes restent dans la caisse ?`,
];

const WP_ADD_BY_LEVEL: Record<WordLevel, Array<(a: number, b: number) => string>> = {
  a1: WP_ADD_A1,
  a2: WP_ADD,
  b1: WP_ADD_B1,
};

const WP_SUB_BY_LEVEL: Record<WordLevel, Array<(a: number, b: number) => string>> = {
  a1: WP_SUB_A1,
  a2: WP_SUB,
  b1: WP_SUB_B1,
};

function genWP(level: WordLevel, exNum: number): WordProblemsConfig {
  const addPool = WP_ADD_BY_LEVEL[level];
  const subPool = WP_SUB_BY_LEVEL[level];
  const addIdx = Math.floor(Math.random() * addPool.length);
  const subIdx = Math.floor(Math.random() * subPool.length);
  let addA: number, addB: number, subA: number, subB: number;
  if (level === "a1") {
    addA = rnd(5, 25);   addB = rnd(3, 15);
    subA = rnd(10, 30);  subB = rnd(2, Math.max(2, Math.min(subA - 1, 12)));
  } else if (level === "a2") {
    addA = rnd(30, 180); addB = rnd(15, 70);
    subA = rnd(50, 250); subB = rnd(10, Math.max(10, Math.min(subA - 5, 80)));
  } else {
    addA = rnd(200, 900);  addB = rnd(50, 350);
    subA = rnd(300, 1500); subB = rnd(50, Math.max(50, Math.min(Math.floor(subA * 0.6), 600)));
  }
  return {
    exNum,
    level,
    questions: [
      { textFr: addPool[addIdx]!(addA, addB), answer: addA + addB, op: "+" },
      { textFr: subPool[subIdx]!(subA, subB), answer: subA - subB, op: "-" },
    ],
  };
}

function fmtDec(h: number): string {
  const whole = Math.floor(h / 100);
  const frac = h % 100;
  if (frac === 0) return `${whole}`;
  if (frac % 10 === 0) return `${whole},${frac / 10}`;
  return `${whole},${String(frac).padStart(2, "0")}`;
}

function parseDec(s: string): number {
  const n = parseFloat(s.replace(",", "."));
  return isNaN(n) ? NaN : Math.round(n * 100);
}

function genComparisonConfig(level: 1 | 2): ComparisonConfig {
  if (level === 1) {
    const signs: Array<"<" | "=" | ">"> = ["<", "<", ">", ">", "="];
    for (let i = signs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [signs[i], signs[j]] = [signs[j]!, signs[i]!];
    }
    const questions: ComparisonQ[] = signs.map(answer => {
      let a = 0, b = 0;
      if (answer === "=") { a = rnd(1, 99); b = a; }
      else if (answer === ">") { do { a = rnd(1, 99); b = rnd(1, 99); } while (a <= b); }
      else { do { a = rnd(1, 99); b = rnd(1, 99); } while (a >= b); }
      return { a, b, answer };
    });
    return { questions, level };
  }

  // Level 2: 6-digit numbers with guaranteed structure
  // Q1: equal (a === b)
  const eq = rnd(100000, 999999);
  const qEqual: ComparisonQ = { a: eq, b: eq, answer: "=" };

  // Q2: 2 shared leading digits (d1 d2 differ at position 3)
  const d1 = rnd(1, 9), d2 = rnd(0, 9);
  const prefix2 = d1 * 100000 + d2 * 10000;
  let d3a: number, d3b: number;
  do { d3a = rnd(0, 9); d3b = rnd(0, 9); } while (d3a === d3b);
  const tail2a = rnd(0, 999), tail2b = rnd(0, 999);
  const n2a = prefix2 + d3a * 1000 + tail2a;
  const n2b = prefix2 + d3b * 1000 + tail2b;
  const qTwo: ComparisonQ = { a: n2a, b: n2b, answer: n2a < n2b ? "<" : ">" };

  // Q3: 3 or 4 shared leading digits
  const sharedDigits = Math.random() < 0.5 ? 3 : 4;
  const d1b = rnd(1, 9), d2b = rnd(0, 9), d3c = rnd(0, 9), d4 = rnd(0, 9);
  const prefix34 =
    sharedDigits === 3
      ? d1b * 100000 + d2b * 10000 + d3c * 1000
      : d1b * 100000 + d2b * 10000 + d3c * 1000 + d4 * 100;
  const diffMul = sharedDigits === 3 ? 100 : 10;
  let diffA: number, diffB: number;
  do { diffA = rnd(0, 9); diffB = rnd(0, 9); } while (diffA === diffB);
  const rem34a = rnd(0, diffMul - 1), rem34b = rnd(0, diffMul - 1);
  const n34a = prefix34 + diffA * diffMul + rem34a;
  const n34b = prefix34 + diffB * diffMul + rem34b;
  const q34: ComparisonQ = { a: n34a, b: n34b, answer: n34a < n34b ? "<" : ">" };

  // Q4 & Q5: normal random pairs (one < one >)
  let r4a = 0, r4b = 0;
  do { r4a = rnd(100000, 999999); r4b = rnd(100000, 999999); } while (r4a >= r4b);
  const q4: ComparisonQ = { a: r4a, b: r4b, answer: "<" };

  let r5a = 0, r5b = 0;
  do { r5a = rnd(100000, 999999); r5b = rnd(100000, 999999); } while (r5a <= r5b);
  const q5: ComparisonQ = { a: r5a, b: r5b, answer: ">" };

  // Shuffle all 5
  const questions = [qEqual, qTwo, q34, q4, q5];
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j]!, questions[i]!];
  }
  return { questions, level };
}

function ComparisonExercise({
  config,
  answers,
  validated,
  onAnswer,
}: {
  config: ComparisonConfig;
  answers: Array<"<" | "=" | ">" | null>;
  validated: boolean;
  onAnswer: (i: number, sym: "<" | "=" | ">") => void;
}) {
  const maxA = Math.max(...config.questions.map(q => q.a));
  const numW = maxA >= 10000 ? "6ch" : maxA >= 1000 ? "5ch" : maxA >= 100 ? "3ch" : "2ch";
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.level}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Comparez les deux nombres.</p>
      <div className="space-y-3">
          {config.questions.map((q, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex items-center shrink-0">
                <span className="w-5 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="shrink-0 text-right font-mono text-sm text-[var(--color-text-primary)]" style={{ width: numW }}>{formatCompNum(q.a)}</span>
              </div>
              <div className="flex shrink-0 gap-1">
                {(["<", "=", ">"] as const).map(sym => {
                  const sel = answers[i] === sym;
                  const isCorrect = sym === q.answer;
                  let cls = "h-8 w-8 shrink-0 rounded border text-sm font-bold transition-colors ";
                  if (!validated) {
                    cls += sel ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]";
                  } else if (sel) {
                    cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                  } else if (isCorrect) {
                    cls += CLS_WRONG;
                  } else {
                    cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-40";
                  }
                  return <button key={sym} type="button" disabled={validated} onClick={() => onAnswer(i, sym)} className={cls}>{sym}</button>;
                })}
              </div>
              <span className="shrink-0 font-mono text-sm text-[var(--color-text-primary)]">{formatCompNum(q.b)}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

// â”€â”€ Expression comparison exercise â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function genExprComp(op: ArithOp, range: [number, number], exNum: number, count = 5): ExprCompConfig {
  const [min, max] = range;
  const evalOp = (a: number, b: number) => op === "+" ? a + b : a - b;
  const rndPair = (): [number, number] => {
    if (op === "+") return [rnd(min, max), rnd(min, max)];
    const a = rnd(min, max); const b = rnd(min, a); return [a, b];
  };
  const targets: Array<"<" | "=" | ">"> = ["<", "<", ">", ">", "="];
  for (let i = targets.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [targets[i], targets[j]] = [targets[j]!, targets[i]!];
  }
  const questions: ExprCompQ[] = targets.slice(0, count).map(answer => {
    let la: number, lb: number, ra: number, rb: number;
    let tries = 0;
    do {
      [la, lb] = rndPair();
      if (answer === "=") {
        const target = evalOp(la, lb);
        ra = rnd(min, max);
        rb = op === "+" ? target - ra : ra - target;
        if (rb >= min && rb <= max && (op === "+" || rb <= ra)) break;
      } else {
        [ra, rb] = rndPair();
        const lv = evalOp(la, lb), rv = evalOp(ra, rb);
        if (answer === "<" && lv < rv) break;
        if (answer === ">" && lv > rv) break;
      }
    } while (++tries < 500);
    return { la, lop: op, lb, ra, rop: op, rb, answer };
  });
  return { questions, exNum, op };
}

function ExprCompExercise({
  config, answers, validated, onAnswer,
}: {
  config: ExprCompConfig;
  answers: Array<"<" | "=" | ">" | null>;
  validated: boolean;
  onAnswer: (i: number, sym: "<" | "=" | ">") => void;
}) {
  const maxVal = Math.max(...config.questions.flatMap(q => [Math.abs(q.la), Math.abs(q.lb), Math.abs(q.ra), Math.abs(q.rb)]));
  const numW = maxVal >= 1000 ? "4ch" : maxVal >= 100 ? "3ch" : "2ch";
  const num = (n: number) => (
    <span className="shrink-0 text-right text-[var(--color-text-primary)]" style={{ width: numW }}>{n}</span>
  );
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
        <div className="space-y-3">
          {config.questions.map((q, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex items-center shrink-0">
                <span className="w-6 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="shrink-0 inline-flex items-center gap-1 font-mono text-sm">{num(q.la)} <span className="text-[var(--color-text-secondary)]">{q.lop}</span> {num(q.lb)}</span>
              </div>
              <div className="flex shrink-0 gap-1">
                {(["<", "=", ">"] as const).map(sym => {
                  const sel = answers[i] === sym;
                  const isCorrect = sym === q.answer;
                  let cls = "h-8 w-8 shrink-0 rounded border text-sm font-bold transition-colors ";
                  if (!validated) {
                    cls += sel ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]";
                  } else if (sel) {
                    cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                  } else if (!sel && isCorrect) {
                    cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]";
                  } else {
                    cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-40";
                  }
                  return <button key={sym} type="button" disabled={validated} onClick={() => onAnswer(i, sym)} className={cls}>{sym}</button>;
                })}
              </div>
              <span className="shrink-0 inline-flex items-center gap-1 font-mono text-sm">{num(q.ra)} <span className="text-[var(--color-text-secondary)]">{q.rop}</span> {num(q.rb)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// â”€â”€ Number line â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
type NLConfig = { start: number; end: number; step: number; divCount: number; labelEvery: number; target: number };

function _genNLConfig(): NLConfig {
  const presets: Array<{ start: number; end: number; step: number }> = [
    { start: 0, end: 20, step: 1 },
    { start: 0, end: 50, step: 5 },
    { start: 0, end: 100, step: 10 },
    { start: 50, end: 150, step: 5 },
    { start: 100, end: 200, step: 10 },
    { start: 200, end: 400, step: 20 },
    { start: 0, end: 200, step: 10 },
    { start: 0, end: 1000, step: 100 },
    { start: 500, end: 1000, step: 50 },
  ];
  const p = presets[Math.floor(Math.random() * presets.length)]!;
  const divCount = (p.end - p.start) / p.step;
  const labelEvery = divCount <= 5 ? 1 : divCount <= 10 ? 2 : 4;
  const allTicks = Array.from({ length: divCount + 1 }, (_, i) => p.start + i * p.step);
  const unlabeled = allTicks.filter((_, i) => i % labelEvery !== 0 && i > 0 && i < divCount);
  const candidates = unlabeled.length > 0 ? unlabeled : allTicks.slice(1, divCount);
  const target = candidates[Math.floor(Math.random() * candidates.length)]!;
  return { start: p.start, end: p.end, step: p.step, divCount, labelEvery, target };
}

function NumberLineSVG({ config }: { config: NLConfig }) {
  const W = 320, H = 68;
  const PL = 26, PR = 26;
  const lineW = W - PL - PR;
  const lineY = 38;
  const labelY = 60;
  const fs = config.end >= 1000 ? 7 : config.end >= 100 ? 8 : 10;
  const ticks = Array.from({ length: config.divCount + 1 }, (_, i) => {
    const val = config.start + i * config.step;
    const x = PL + (i / config.divCount) * lineW;
    const labeled = i % config.labelEvery === 0;
    return { val, x, labeled, isTarget: val === config.target };
  });
  const tx = PL + ((config.target - config.start) / (config.end - config.start)) * lineW;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }} aria-label="Droite numÃ©rique">
      <line x1={PL} y1={lineY} x2={W - PR} y2={lineY} stroke="currentColor" strokeWidth="1.5" />
      <polygon points={`${PL - 2},${lineY - 4} ${PL - 2},${lineY + 4} ${PL - 9},${lineY}`} fill="currentColor" />
      <polygon points={`${W - PR + 2},${lineY - 4} ${W - PR + 2},${lineY + 4} ${W - PR + 9},${lineY}`} fill="currentColor" />
      {ticks.map((t) => (
        <g key={t.val}>
          <line x1={t.x} y1={t.labeled ? lineY - 6 : lineY - 2} x2={t.x} y2={t.labeled ? lineY + 6 : lineY + 2}
            stroke="currentColor" strokeWidth={t.labeled ? 1.5 : 0.5} />
          {t.labeled && !t.isTarget && (
            <text x={t.x} y={labelY} textAnchor="middle" fontSize={fs} fill="currentColor">{t.val}</text>
          )}
        </g>
      ))}
      <line x1={tx} y1={6} x2={tx} y2={lineY - 12} stroke="var(--color-accent-alg)" strokeWidth="1.5" strokeDasharray="4,2" />
      <polygon points={`${tx - 4},${lineY - 13} ${tx + 4},${lineY - 13} ${tx},${lineY - 6}`} fill="var(--color-accent-alg)" />
      <text x={tx} y={12} textAnchor="middle" fontSize="10" fill="var(--color-accent-alg)" fontWeight="bold">?</text>
    </svg>
  );
}

// â”€â”€ Arithmetic group generators â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function genArithGroup(op: ArithOp, range: [number, number], exNum: number, missingOperand = false, timer?: number): ArithGroupConfig {
  const [lo, hi] = range;
  const qs: ArithQuestion[] = [];
  const count = timer ? 8 : 5;
  for (let i = 0; i < count; i++) {
    let a: number, b: number, result: number;
    if (op === "+") {
      a = rnd(lo, hi); b = rnd(lo, hi); result = a + b;
    } else if (op === "-") {
      do { a = rnd(lo, hi); b = rnd(lo, hi); } while (a < b);
      result = a - b;
    } else if (op === "Ã—") {
      // a âˆˆ [range[0], range[1]], b âˆˆ [1, 12]
      a = rnd(lo, hi); b = rnd(1, 12); result = a * b;
    } else {
      // Ã·: pick divisor b âˆˆ [range[0], range[1]], quotient a âˆˆ [1, 12]
      // Dividend = a * b, question: (a*b) Ã· b = a
      b = rnd(lo, hi === 0 ? 1 : hi); if (b === 0) b = 1;
      a = rnd(1, 12);
      result = a; // the quotient
      // Rewrite: dividend = a*b, divisor = b, result (quotient) = a
      // We store: a=dividend, b=divisor, result=quotient
      const dividend = a * b;
      a = dividend;
      result = a / b; // = original a = quotient
    }
    const missingPos = !missingOperand ? ("result" as const) : Math.random() < 0.5 ? ("a" as const) : ("b" as const);
    const answer = missingPos === "result" ? String(result) : missingPos === "a" ? String(a) : String(b);
    qs.push({ a, b, result, op, missingPos, answer });
  }
  return { questions: qs, exNum, op, range, missingOperand, ...(timer !== undefined ? { timer } : {}) };
}

// â”€â”€ Rounding generators â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function roundTo10(n: number) { return Math.round(n / 10) * 10; }
function roundTo100(n: number) { return Math.round(n / 100) * 100; }
function roundTo1000(n: number) { return Math.round(n / 1000) * 1000; }

function roundDecToTenth(x: number, d1: number, d2: number): string {
  const tenths = x * 10 + d1 + (d2 >= 5 ? 1 : 0);
  const rW = Math.floor(tenths / 10), rD = tenths % 10;
  return rD === 0 ? String(rW) : `${rW},${rD}`;
}
function roundDecToCent(x: number, d1: number, d2: number, d3: number): string {
  const h = x * 100 + d1 * 10 + d2 + (d3 >= 5 ? 1 : 0);
  const rW = Math.floor(h / 100), rF = h % 100;
  if (rF === 0) return String(rW);
  if (rF % 10 === 0) return `${rW},${rF / 10}`;
  return `${rW},${String(rF).padStart(2, "0")}`;
}
function roundDecToUnit(x: number, d1: number): string { return String(d1 >= 5 ? x + 1 : x); }

type RoundingKind = "diz_near" | "cent_near_new" | "est_diz_2" | "est_diz_large_2" | "est_diz_three" | "cent_near" | "thou_near" | "est_add" | "est_sub" | "est_mixed" | "mixed" | "dec_dix" | "dec_cent" | "dec_unit" | "dec_mixed";

function genRounding(kind: RoundingKind, exNum: number, count: number): RoundingConfig {
  const consigneMap: Record<RoundingKind, string> = {
    "diz_near":         "Arrondissez Ã  la dizaine la plus proche les nombres suivants.",
    "cent_near_new":    "Arrondissez Ã  la centaine la plus proche les nombres suivants.",
    "est_diz_2":        "Estimez le rÃ©sultat du calcul Ã  la dizaine la plus proche.",
    "est_diz_large_2":  "Estimez le rÃ©sultat du calcul Ã  la centaine la plus proche.",
    "est_diz_three":    "Estimez le rÃ©sultat du calcul Ã  la centaine la plus proche.",
    "cent_near": "", "thou_near": "", "est_add": "", "est_sub": "", "est_mixed": "", "mixed": "",
    "dec_dix":   "Arrondissez au dixiÃ¨me le plus proche.",
    "dec_cent":  "Arrondissez au centiÃ¨me le plus proche.",
    "dec_unit":  "Arrondissez Ã  l'unitÃ© la plus proche.",
    "dec_mixed": "Arrondissez chaque nombre Ã  la prÃ©cision indiquÃ©e.",
  };
  const consigne = consigneMap[kind];
  const qs: RoundingQ[] = [];
  for (let i = 0; i < count; i++) {
    if (kind === "diz_near") {
      let x: number;
      do { x = rnd(11, 99); } while (x % 10 === 0);
      qs.push({ prompt: String(x), answer: String(roundTo10(x)) });
    } else if (kind === "cent_near_new") {
      let x: number;
      do { x = rnd(101, 999); } while (x % 100 === 0);
      qs.push({ prompt: String(x), answer: String(roundTo100(x)) });
    } else if (kind === "est_diz_2") {
      let x = rnd(11, 99), y = rnd(11, 99);
      const useAdd = Math.random() < 0.5;
      if (!useAdd && x < y) [x, y] = [y, x];
      const op = useAdd ? "+" : "âˆ’";
      const ans = useAdd ? roundTo10(x) + roundTo10(y) : roundTo10(x) - roundTo10(y);
      qs.push({ prompt: `${x} ${op} ${y} â‰ˆ`, answer: String(ans) });
    } else if (kind === "est_diz_large_2") {
      let x = rnd(101, 999), y = rnd(101, 999);
      const useAdd = Math.random() < 0.5;
      if (!useAdd && x < y) [x, y] = [y, x];
      const op = useAdd ? "+" : "âˆ’";
      const ans = useAdd ? roundTo100(x) + roundTo100(y) : roundTo100(x) - roundTo100(y);
      qs.push({ prompt: `${x} ${op} ${y} â‰ˆ`, answer: String(ans) });
    } else if (kind === "est_diz_three") {
      let a: number, b: number, c: number, op1: "+" | "âˆ’", op2: "+" | "âˆ’", ans: number;
      let tries = 0;
      do {
        a = rnd(101, 999); b = rnd(101, 999); c = rnd(101, 999);
        op1 = Math.random() < 0.5 ? "+" : "âˆ’";
        op2 = Math.random() < 0.5 ? "+" : "âˆ’";
        ans = roundTo100(a) + (op1 === "+" ? roundTo100(b) : -roundTo100(b)) + (op2 === "+" ? roundTo100(c) : -roundTo100(c));
        tries++;
      } while (ans < 0 && tries < 30);
      if (ans! < 0) { op1 = "+"; op2 = "+"; ans = roundTo100(a!) + roundTo100(b!) + roundTo100(c!); }
      qs.push({ prompt: `${a!} ${op1!} ${b!} ${op2!} ${c!} â‰ˆ`, answer: String(ans!) });
    } else if (kind === "cent_near") {
      const x = rnd(101, 999);
      qs.push({ prompt: `Arrondissez ${x} Ã  la centaine la plus proche.`, answer: String(roundTo100(x)) });
    } else if (kind === "thou_near") {
      const x = rnd(1001, 9999);
      qs.push({ prompt: `Arrondissez ${x} au millier le plus proche.`, answer: String(roundTo1000(x)) });
    } else if (kind === "est_add") {
      const x = rnd(1, 999), y = rnd(1, 999);
      qs.push({ prompt: `${x} + ${y} â‰ˆ ?`, answer: String(roundTo100(x) + roundTo100(y)) });
    } else if (kind === "est_sub") {
      let x = rnd(1, 999), y = rnd(1, 999);
      if (x < y) [x, y] = [y, x];
      qs.push({ prompt: `${x} âˆ’ ${y} â‰ˆ ?`, answer: String(roundTo100(x) - roundTo100(y)) });
    } else if (kind === "dec_dix") {
      const x = rnd(1, 15), d1 = rnd(0, 9), d2 = rnd(0, 9);
      qs.push({ prompt: `${x},${d1}${d2}`, answer: roundDecToTenth(x, d1, d2) });
    } else if (kind === "dec_cent") {
      const x = rnd(1, 15), d1 = rnd(0, 9), d2 = rnd(0, 9), d3 = rnd(0, 9);
      qs.push({ prompt: `${x},${d1}${d2}${d3}`, answer: roundDecToCent(x, d1, d2, d3) });
    } else if (kind === "dec_unit") {
      const x = rnd(1, 20), d1 = rnd(1, 9);
      const d2 = Math.random() < 0.5 ? rnd(0, 9) : undefined;
      qs.push({ prompt: d2 !== undefined ? `${x},${d1}${d2}` : `${x},${d1}`, answer: roundDecToUnit(x, d1) });
    } else if (kind === "dec_mixed") {
      const mixTypes = ["dix", "cent", "unit"] as const;
      const t = mixTypes[i % 3]!;
      if (t === "dix") {
        const x = rnd(1, 15), d1 = rnd(0, 9), d2 = rnd(0, 9);
        qs.push({ prompt: `${x},${d1}${d2} â†’ dixiÃ¨me`, answer: roundDecToTenth(x, d1, d2) });
      } else if (t === "cent") {
        const x = rnd(1, 15), d1 = rnd(0, 9), d2 = rnd(0, 9), d3 = rnd(0, 9);
        qs.push({ prompt: `${x},${d1}${d2}${d3} â†’ centiÃ¨me`, answer: roundDecToCent(x, d1, d2, d3) });
      } else {
        const x = rnd(1, 20), d1 = rnd(1, 9);
        qs.push({ prompt: `${x},${d1}${rnd(0, 9)} â†’ unitÃ©`, answer: roundDecToUnit(x, d1) });
      }
    } else {
      const x = rnd(1, 999), y = rnd(1, 999), z = rnd(1, 999);
      const addFirst = Math.random() < 0.5;
      const prompt = addFirst ? `${x} + ${y} âˆ’ ${z} â‰ˆ ?` : `${x} âˆ’ ${y} + ${z} â‰ˆ ?`;
      const ans = addFirst ? roundTo100(x) + roundTo100(y) - roundTo100(z) : roundTo100(x) - roundTo100(y) + roundTo100(z);
      qs.push({ prompt, answer: String(ans) });
    }
  }
  return { questions: qs, exNum, count, consigne, kind };
}

function genRoundingMixed(exNum: number, count: number): RoundingConfig {
  const qs: RoundingQ[] = [];
  const halfAdd = Math.floor(count / 2);
  for (let i = 0; i < count; i++) {
    if (i < halfAdd) {
      const x = rnd(1, 999), y = rnd(1, 999);
      qs.push({ prompt: `${x} + ${y} â‰ˆ ?`, answer: String(roundTo100(x) + roundTo100(y)) });
    } else {
      let x = rnd(1, 999), y = rnd(1, 999);
      if (x < y) [x, y] = [y, x];
      qs.push({ prompt: `${x} âˆ’ ${y} â‰ˆ ?`, answer: String(roundTo100(x) - roundTo100(y)) });
    }
  }
  return { questions: qs, exNum, count, consigne: "", kind: "mixed" };
}

// â”€â”€ Fraction generators â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function genFracId(exNum: number): FracIdConfig {
  const questions: FracIdQ[] = [];
  const asks: Array<"num" | "den"> = ["num","den","num","den","num"];
  for (let i = 0; i < 5; i++) {
    const num = rnd(1, 11);
    const den = rnd(num + 1, 12);
    questions.push({ num, den, ask: asks[i]! });
  }
  return { questions, exNum };
}

function genFracEquiv(range: [number, number], exNum: number, count = 5): FracEquivConfig {
  const questions: FracEquivQ[] = [];
  const missingPattern: Array<"num" | "den"> = ["num","den","num","den","num"];
  for (let i = 0; i < count; i++) {
    let srcNum: number, srcDen: number, tgtNum: number, tgtDen: number, k: number;
    const isSmall = range[1] <= 144;
    for (;;) {
      if (isSmall) {
        const a = rnd(1, 11); const b = rnd(a + 1, 12);
        if (gcd(a, b) !== 1) continue;
        k = rnd(2, 12);
        srcNum = a * k; srcDen = b * k;
        tgtNum = a; tgtDen = b;
      } else {
        const a = rnd(1, 9); const b = rnd(a + 1, 12);
        if (gcd(a, b) !== 1) continue;
        k = rnd(2, Math.floor(range[1] / Math.max(a, b)));
        if (k < 2) continue;
        srcNum = a * k; srcDen = b * k;
        tgtNum = a; tgtDen = b;
      }
      if (srcNum <= range[1] && srcDen <= range[1]) break;
    }
    const missingPos = missingPattern[i % missingPattern.length]!;
    const answer = missingPos === "num" ? tgtNum : tgtDen;
    questions.push({ srcNum, srcDen, tgtNum, tgtDen, missingPos, answer });
  }
  return { questions, exNum, range };
}

function genFracSimplify(range: [number, number], exNum: number, count = 5): FracSimplifyConfig {
  const questions: FracSimplifyQ[] = [];
  for (let i = 0; i < count; i++) {
    let num: number, den: number, simNum: number, simDen: number;
    const isSmall = range[1] <= 144;
    for (;;) {
      if (isSmall) {
        simNum = rnd(1, 11); simDen = rnd(simNum + 1, 12);
        if (gcd(simNum, simDen) !== 1) continue;
        const k = rnd(2, 12);
        num = simNum * k; den = simDen * k;
      } else {
        simNum = rnd(1, 9); simDen = rnd(simNum + 1, 12);
        if (gcd(simNum, simDen) !== 1) continue;
        const k = rnd(2, Math.floor(range[1] / Math.max(simNum, simDen)));
        if (k < 2) continue;
        num = simNum * k; den = simDen * k;
      }
      if (num <= range[1] && den <= range[1]) break;
    }
    questions.push({ num, den, simNum, simDen });
  }
  return { questions, exNum, range };
}

function genFracCompare(mode: "same_den" | "same_num" | "random", range: [number, number], exNum: number, count = 5): FracCompConfig {
  const [lo, hi] = range;
  const questions: FracCompQ[] = [];
  const targets: Array<"<" | "=" | ">"> = ["<","<",">",">","="];
  for (let i = targets.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [targets[i], targets[j]] = [targets[j]!, targets[i]!];
  }
  for (let i = 0; i < count; i++) {
    const target = targets[i]!;
    let num1: number, den1: number, num2: number, den2: number;
    let tries = 0;
    do {
      if (mode === "same_den") {
        const d = rnd(2, hi);
        den1 = d; den2 = d;
        if (target === "=") { num1 = rnd(1, d); num2 = num1; }
        else if (target === "<") { do { num1 = rnd(1, d); num2 = rnd(1, d); } while (num1 >= num2); }
        else { do { num1 = rnd(1, d); num2 = rnd(1, d); } while (num1 <= num2); }
      } else if (mode === "same_num") {
        const n = rnd(1, Math.min(hi, 20));
        num1 = n; num2 = n;
        if (target === "=") { den1 = rnd(n + 1, hi); den2 = den1; }
        else if (target === "<") { do { den1 = rnd(n + 1, hi); den2 = rnd(n + 1, hi); } while (den1 <= den2); }
        else { do { den1 = rnd(n + 1, hi); den2 = rnd(n + 1, hi); } while (den1 >= den2); }
      } else {
        num1 = rnd(lo, hi); den1 = rnd(lo + 1, hi + 1);
        num2 = rnd(lo, hi); den2 = rnd(lo + 1, hi + 1);
        const cmp = num1 * den2 - num2 * den1;
        const actual: "<"|"="|">" = cmp < 0 ? "<" : cmp > 0 ? ">" : "=";
        if (actual !== target) { tries++; continue; }
      }
      break;
    } while (tries < 500);
    questions.push({ num1, den1, num2, den2, answer: target });
  }
  return { questions, exNum, mode };
}

// â”€â”€ A1.3 / A1.4 / A1.5 generators â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function genNumberSelect(mode: "gt"|"lt"|"between", exNum: number): NumberSelectConfig {
  const threshold = mode === "between" ? rnd(100, 700) : rnd(100, 900);
  const threshold2 = mode === "between" ? Math.min(threshold + rnd(50, 250), 999) : undefined;
  const correctCount = rnd(5, 10);
  const numbers: number[] = [];
  while (numbers.length < correctCount) {
    let n: number;
    if (mode === "gt") n = rnd(threshold + 1, 999);
    else if (mode === "lt") n = rnd(1, threshold - 1);
    else n = rnd(threshold + 1, threshold2! - 1);
    if (!numbers.includes(n)) numbers.push(n);
  }
  while (numbers.length < 15) {
    let n: number;
    if (mode === "gt") n = rnd(1, threshold);
    else if (mode === "lt") n = rnd(threshold, 999);
    else n = Math.random() < 0.5 ? rnd(1, threshold) : rnd(threshold2!, Math.min(threshold2! + 300, 9999));
    if (!numbers.includes(n)) numbers.push(n);
  }
  for (let i = 14; i > 0; i--) { const j = rnd(0, i); [numbers[i], numbers[j]] = [numbers[j]!, numbers[i]!]; }
  let consigne: string;
  if (mode === "gt") consigne = `SÃ©lectionnez les nombres plus grands que ${threshold.toLocaleString("fr-CH")}.`;
  else if (mode === "lt") consigne = `SÃ©lectionnez les nombres plus petits que ${threshold.toLocaleString("fr-CH")}.`;
  else consigne = `SÃ©lectionnez les nombres entre ${threshold.toLocaleString("fr-CH")} et ${threshold2!.toLocaleString("fr-CH")}.`;
  return { mode, threshold, threshold2, numbers, exNum, consigne };
}

function genEncadrement(unit: 10|100, exNum: number, count = 5): EncadrementConfig {
  const questions: EncadrementQ[] = [];
  for (let i = 0; i < count; i++) {
    let n: number;
    do { n = unit === 10 ? rnd(11, 999) : rnd(101, 99999); } while (n % unit === 0);
    const lo = Math.floor(n / unit) * unit;
    const hi = lo + unit;
    const dir: "<" | ">" = Math.random() < 0.5 ? "<" : ">";
    questions.push({ n, lo, hi, dir });
  }
  return { questions, exNum, unit };
}

function genOddEven(exNum: number): OddEvenConfig {
  const questions: OddEvenQ[] = Array.from({ length: 5 }, () => {
    const n = rnd(1, 9999);
    return { n, answer: n % 2 === 0 ? "pair" : "impair" };
  });
  return { questions, exNum };
}

function genNLFine(count: number): NLConfig[] {
  const PRESETS = [
    { start: 0, end: 100, step: 10 },
    { start: 0, end: 200, step: 20 },
    { start: 100, end: 200, step: 10 },
    { start: 0, end: 150, step: 10 },
    { start: 50, end: 150, step: 10 },
    { start: 200, end: 400, step: 20 },
  ];
  return Array.from({ length: count }, () => {
    const p = PRESETS[rnd(0, PRESETS.length - 1)]!;
    const divCount = (p.end - p.start) / p.step;
    const labelEvery = divCount <= 5 ? 1 : divCount <= 10 ? 2 : 5;
    const allTicks = Array.from({ length: divCount + 1 }, (_, i) => p.start + i * p.step);
    const unlabeled = allTicks.filter((_, i) => i % labelEvery !== 0 && i > 0 && i < divCount);
    const candidates = unlabeled.length > 0 ? unlabeled : allTicks.slice(1, divCount);
    const target = candidates[rnd(0, candidates.length - 1)]!;
    return { start: p.start, end: p.end, step: p.step, divCount, labelEvery, target };
  });
}

function genNLCoarse(count: number): NLConfig[] {
  const PRESETS = [
    { start: 0, end: 500, step: 10 },
    { start: 0, end: 1000, step: 10 },
    { start: 500, end: 1000, step: 10 },
    { start: 0, end: 1000, step: 20 },
    { start: 0, end: 2000, step: 20 },
  ];
  return Array.from({ length: count }, () => {
    const p = PRESETS[rnd(0, PRESETS.length - 1)]!;
    const divCount = (p.end - p.start) / p.step;
    const labelEvery = 10;
    const allTicks = Array.from({ length: divCount + 1 }, (_, i) => p.start + i * p.step);
    const unlabeled = allTicks.filter((_, i) => i % labelEvery !== 0 && i > 0 && i < divCount);
    const candidates = unlabeled.length > 0 ? unlabeled : allTicks.slice(1, divCount);
    const target = candidates[rnd(0, candidates.length - 1)]!;
    return { start: p.start, end: p.end, step: p.step, divCount, labelEvery, target };
  });
}

function regenNLMultiConfig(config: NLMultiConfig): NLMultiConfig {
  const questions = config.questions.map(q => {
    const newNL = q.nlConfig.end <= 400 ? genNLFine(1)[0]! : genNLCoarse(1)[0]!;
    return { ...q, nlConfig: newNL };
  });
  return { ...config, questions };
}

function genOrdering(direction: "asc"|"desc", exNum: number): OrderingConfig {
  const questions: OrderingQ[] = Array.from({ length: 2 }, () => {
    const nums = new Set<number>();
    while (nums.size < 4) nums.add(rnd(1, 9999));
    return { numbers: [...nums] };
  });
  return { questions, direction, exNum };
}

function genSeqRule(range: [number, number], exNum: number, count = 5, termCount = 4): SeqRuleConfig {
  const questions: SeqRuleQ[] = Array.from({ length: count }, () => {
    const step = rnd(1, Math.max(1, Math.floor((range[1] - range[0]) / 20)));
    const op: "+"|"-" = Math.random() < 0.5 ? "+" : "-";
    const start = rnd(range[0], Math.max(range[0], range[1] - (termCount - 1) * step));
    const nums = Array.from({ length: termCount }, (_, k) => start + k * step);
    if (op === "-") nums.reverse();
    return { nums, step, op };
  });
  return { questions, exNum };
}

function genSeqComplete(range: [number, number], exNum: number, count: number, blanks: number, termCount = 5): SeqCompleteConfig {
  const questions: SeqCompleteQ[] = Array.from({ length: count }, () => {
    const b = blanks < 0 ? rnd(2, 3) : blanks;
    const step = rnd(1, Math.max(1, Math.floor((range[1] - range[0]) / 10)));
    const op: "+"|"-" = Math.random() < 0.5 ? "+" : "-";
    let start: number;
    if (op === "+") {
      start = rnd(range[0], Math.max(range[0], range[1] - (termCount - 1) * step));
    } else {
      start = rnd(Math.max(range[0], (termCount - 1) * step + 1), Math.max(range[0], (termCount - 1) * step + 1, range[1]));
    }
    const allNums = Array.from({ length: termCount }, (_, i) => op === "+" ? start + i * step : start - i * step);
    const available = Array.from({ length: termCount - 1 }, (_, i) => i + 1);
    const blankIdxs: number[] = [];
    while (blankIdxs.length < b && available.length > 0) {
      const idx = rnd(0, available.length - 1);
      blankIdxs.push(available[idx]!);
      available.splice(idx, 1);
    }
    return { allNums, blankIdxs: blankIdxs.sort((a,b) => a-b), step };
  });
  return { questions, exNum };
}

function genDecOrdering(direction: "asc"|"desc", exNum: number): DecOrderingConfig {
  const questions: DecOrderingQ[] = Array.from({ length: 2 }, () => {
    const nums = new Set<number>();
    while (nums.size < 4) nums.add(rnd(100, 2500));
    return { hundredths: [...nums] };
  });
  return { questions, direction, exNum };
}

const DEC_STEPS = [3, 5, 10, 15, 20, 25, 50, 75, 100, 125, 150, 200, 250];

function genDecSeqRule(exNum: number, count = 5, termCount = 4): DecSeqRuleConfig {
  const questions: DecSeqRuleQ[] = Array.from({ length: count }, () => {
    const step = DEC_STEPS[rnd(0, DEC_STEPS.length - 1)]!;
    const op: "+"|"-" = Math.random() < 0.5 ? "+" : "-";
    // Start must be a multiple of step so fmtDec produces clean decimal places
    const minStart = op === "-" ? (termCount - 1) * step + step : 50;
    const minMult = Math.ceil(Math.max(50, minStart) / step);
    const start = rnd(minMult, minMult + Math.floor(1500 / step)) * step;
    const nums = Array.from({ length: termCount }, (_, k) =>
      op === "+" ? start + k * step : start - k * step
    );
    return { nums, step, op };
  });
  return { questions, exNum };
}

function genDecSeqComplete(exNum: number, count: number, blanks: number, termCount = 5): DecSeqCompleteConfig {
  const questions: DecSeqCompleteQ[] = Array.from({ length: count }, () => {
    const step = DEC_STEPS[rnd(0, DEC_STEPS.length - 1)]!;
    const op: "+"|"-" = Math.random() < 0.5 ? "+" : "-";
    const b = blanks < 0 ? rnd(2, 3) : blanks;
    // Start must be a multiple of step so fmtDec produces clean decimal places
    const minStart = op === "-" ? (termCount - 1) * step + step : 50;
    const minMult = Math.ceil(Math.max(50, minStart) / step);
    const start = rnd(minMult, minMult + Math.floor(1500 / step)) * step;
    const allNums = Array.from({ length: termCount }, (_, i) =>
      op === "+" ? start + i * step : start - i * step
    );
    const available = Array.from({ length: termCount - 1 }, (_, i) => i + 1);
    const blankIdxs: number[] = [];
    while (blankIdxs.length < b && available.length > 0) {
      const idx = rnd(0, available.length - 1);
      blankIdxs.push(available[idx]!);
      available.splice(idx, 1);
    }
    return { allNums, blankIdxs: blankIdxs.sort((a, b) => a - b), step };
  });
  return { questions, exNum };
}

// â”€â”€ Column grid generators â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function getD4(n: number): [number, number, number, number] {
  return [Math.floor(n / 1000) % 10, Math.floor(n / 100) % 10, Math.floor(n / 10) % 10, n % 10];
}

function getD5(n: number): [number,number,number,number,number] {
  return [Math.floor(n/10000)%10, Math.floor(n/1000)%10, Math.floor(n/100)%10, Math.floor(n/10)%10, n%10];
}

function computeCarries(a: number, b: number, op: ArithOp): (number | null)[] {
  const row: (number | null)[] = [null, null, null, null];
  const ad = getD4(a), bd = getD4(b);
  if (op === "+") {
    let c = 0;
    for (let i = 3; i >= 0; i--) {
      const s = ad[i]! + bd[i]! + c;
      c = Math.floor(s / 10);
      if (i > 0 && c > 0) row[i - 1] = c;
    }
  } else if (op === "Ã—") {
    let c = 0;
    for (let i = 3; i >= 0; i--) {
      const prod = ad[i]! * b + c;
      c = Math.floor(prod / 10);
      if (i > 0 && c > 0) row[i - 1] = c;
    }
  } else {
    let borrow = 0;
    for (let i = 3; i >= 0; i--) {
      const d = ad[i]! - bd[i]! - borrow;
      if (d < 0) { borrow = 1; if (i > 0) row[i - 1] = ad[i - 1]! > 0 ? ad[i - 1]! - 1 : 9; }
      else { borrow = 0; }
    }
  }
  return row;
}

function genColGridQ(op: ArithOp): ColGridQ {
  for (;;) {
    let a: number, b: number;
    if (op === "+") { a = rnd(100, 4999); b = rnd(100, 9999 - a); }
    else if (op === "-") { a = rnd(1000, 9999); b = rnd(100, a - 1); }
    else { a = rnd(12, 999); b = rnd(2, 9); }
    const result = op === "+" ? a + b : op === "-" ? a - b : a * b;
    if (result >= 0 && result <= 9999) return { a, b, result, op, carryRow: computeCarries(a, b, op) };
  }
}

function genColumnGrid(op: ArithOp, preFilledOperands: boolean, exNum: number, count = 4): ColGridConfig {
  return { questions: Array.from({ length: count }, () => genColGridQ(op)), exNum, op, preFilledOperands };
}

function computeCarries5(a: number, bDigit: number): (number|null)[] {
  const ad = getD5(a);
  const row: (number|null)[] = [null,null,null,null,null];
  let c = 0;
  for (let i = 4; i >= 0; i--) {
    const prod = ad[i]! * bDigit + c;
    c = Math.floor(prod / 10);
    if (i > 0 && c > 0) row[i-1] = c;
  }
  return row;
}

function genMul2DigitQ(): Mul2DigitQ {
  for (;;) {
    const a = rnd(12, 999);
    let b: number;
    do { b = rnd(11, 99); } while (b % 10 === 0);
    const result = a * b;
    if (result > 99999) continue;
    const bUnits = b % 10;
    const bTens = Math.floor(b / 10);
    const partial1 = a * bUnits;
    const partial2 = a * bTens;
    return { a, b, partial1, partial2, result,
      carries1: computeCarries5(a, bUnits),
      carries2: computeCarries5(a, bTens) };
  }
}

function genMul2Digit(preFilledOperands: boolean, exNum: number, count = 4): Mul2DigitConfig {
  return { questions: Array.from({length: count}, genMul2DigitQ), exNum, preFilledOperands };
}

function computeDivSteps(dividend: number, divisor: number): DivStep[] {
  const digits = dividend.toString().split("").map(Number);
  const steps: DivStep[] = [];
  let current = 0;
  for (let i = 0; i < digits.length; i++) {
    current = current * 10 + digits[i]!;
    if (current < divisor && i < digits.length - 1) continue;
    const quotientDigit = Math.floor(current / divisor);
    const product = quotientDigit * divisor;
    const partRemainder = current - product;
    steps.push({ partialDiv: current, quotientDigit, product, partRemainder, colEnd: i });
    current = partRemainder;
  }
  return steps;
}

function genDivColGridQ(dividendCols: number, divisorCols: number, quotientCols: number): DivColGridQ {
  for (;;) {
    let dividend: number, divisor: number;
    if (dividendCols === 4) {
      dividend = rnd(1000, 9999);
      divisor = rnd(2, 9);
    } else if (dividendCols === 5) {
      dividend = rnd(10000, 99999);
      divisor = rnd(11, 99);
    } else {
      dividend = rnd(100000, 999999);
      divisor = rnd(11, 99);
    }
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
    if (quotient.toString().length > quotientCols) continue;
    if (quotient === 0) continue;
    const steps = computeDivSteps(dividend, divisor);
    return { dividend, divisor, quotient, remainder, steps, dividendCols, divisorCols, quotientCols };
  }
}

function genDivColumnGrid(dividendCols: number, divisorCols: number, preFilledOperands: boolean, exNum: number, count = 1): DivColGridConfig {
  const quotientCols = dividendCols === 6 ? 5 : 4;
  return {
    questions: Array.from({ length: count }, () => genDivColGridQ(dividendCols, divisorCols, quotientCols)),
    exNum, preFilledOperands, dividendCols, divisorCols, quotientCols,
  };
}

// â”€â”€ A3.5 / A3.6 math helpers & generators â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function gcd2(a: number, b: number): number { return b === 0 ? a : gcd2(b, a % b); }
function gcdN(...nums: number[]): number { return nums.reduce(gcd2); }
function lcm2(a: number, b: number): number { return a / gcd2(a, b) * b; }
function lcmN(...nums: number[]): number { return nums.reduce(lcm2); }
function getDivisors(n: number): number[] {
  const d: number[] = [];
  for (let i = 1; i <= n; i++) if (n % i === 0) d.push(i);
  return d;
}
function shuffleArr<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

function genMultSelect(exNum: number): MultSelectConfig {
  const base = rnd(2, 9);
  const multiples: number[] = [];
  for (let k = 1; multiples.length < 5; k++) {
    const m = base * k;
    if (m <= 100) multiples.push(m);
    else break;
  }
  // fill to 5 if needed
  for (let k = 1; multiples.length < 5; k++) multiples.push(base * k);
  const nonMultiples: Set<number> = new Set();
  while (nonMultiples.size < 10) {
    const n = rnd(2, 100);
    if (n % base !== 0 && !nonMultiples.has(n)) nonMultiples.add(n);
  }
  const numbers = shuffleArr([...multiples.slice(0, 5), ...Array.from(nonMultiples)]);
  return { base, numbers, exNum };
}

function genMultList(exNum: number): MultListConfig {
  const first = rnd(2, 12);
  let second = rnd(2, 12);
  while (second === first) second = rnd(2, 12);
  return { bases: [first, second], exNum };
}

function formatNumsEt(nums: number[]): string {
  if (nums.length <= 2) return nums.join(" et ");
  return `${nums.slice(0, -1).join(", ")} et ${nums[nums.length - 1]}`;
}

function parseNumberList(input: string): number[] {
  return input
    .split(/[,;\s]+/)
    .map((part) => parseInt(part.trim(), 10))
    .filter((n) => !isNaN(n));
}

function matchesMultList(input: string, base: number): boolean {
  const expected = Array.from({ length: 5 }, (_, i) => base * (i + 1));
  const values = parseNumberList(input);
  return values.length === expected.length && values.every((n, i) => n === expected[i]);
}

function genTrueFalseMultDiv(exNum: number): TrueFalseMultDivConfig {
  const questions: TrueFalseMultDivQ[] = [];
  const multCount = Math.random() < 0.5 ? 2 : 3;
  for (let i = 0; i < 5; i++) {
    const isMultType = i < multCount;
    if (isMultType) {
      const b = rnd(2, 9);
      const k = rnd(2, 12);
      const a = b * k;
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        questions.push({ statement: `${a} est un multiple de ${b}`, answer: true, type: "multiple" });
      } else {
        // make false: use a+1 or a-1
        const falseA = a + rnd(1, b - 1);
        questions.push({ statement: `${falseA} est un multiple de ${b}`, answer: false, type: "multiple" });
      }
    } else {
      const b = rnd(2, 9);
      const k = rnd(2, 12);
      const a = b * k;
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        questions.push({ statement: `${b} est un diviseur de ${a}`, answer: true, type: "diviseur" });
      } else {
        const falseB = b + rnd(1, 3);
        questions.push({ statement: `${falseB} est un diviseur de ${a}`, answer: false, type: "diviseur" });
      }
    }
  }
  return { questions: shuffleArr(questions), exNum };
}

function genFindDivisors(exNum: number): FindDivisorsConfig {
  const candidates = [12,15,16,18,20,24,28,30,32,36,40,42,45,48,50,54,56,60];
  const first = candidates[rnd(0, candidates.length - 1)]!;
  let second = candidates[rnd(0, candidates.length - 1)]!;
  while (second === first) second = candidates[rnd(0, candidates.length - 1)]!;
  return {
    questions: [first, second].map((number) => ({ number, divisors: getDivisors(number) })),
    exNum,
  };
}

function genDivSelect(exNum: number): DivSelectConfig {
  const bases = [2, 3, 4, 5, 6, 9, 10];
  const base = bases[rnd(0, bases.length - 1)]!;
  const divisibles: number[] = [];
  for (let k = 1; divisibles.length < 5; k++) {
    const m = base * k;
    if (m <= 100) divisibles.push(m);
    if (divisibles.length >= 5) break;
    if (m > 100) { for (let kk = 1; divisibles.length < 5; kk++) divisibles.push(base * kk); break; }
  }
  const nonDiv: Set<number> = new Set();
  while (nonDiv.size < 10) {
    const n = rnd(2, 99);
    if (n % base !== 0 && !nonDiv.has(n)) nonDiv.add(n);
  }
  const numbers = shuffleArr([...divisibles.slice(0, 5), ...Array.from(nonDiv)]);
  return { base, numbers, exNum };
}

function genDivBy(exNum: number): DivByConfig {
  const validBases = [2, 3, 4, 5, 6, 9, 10];
  const questions: DivByConfig["questions"] = [];
  for (let i = 0; i < 5; i++) {
    const base = validBases[rnd(0, validBases.length - 1)]!;
    const k = rnd(2, 15);
    const n = base * k;
    const vd = validBases.filter(b => n % b === 0);
    let choices = shuffleArr(validBases).slice(0, 5);
    if (!choices.some((choice) => vd.includes(choice))) {
      choices = shuffleArr([vd[0]!, ...choices.slice(1)]);
    }
    questions.push({ n, validDivisors: vd, choices });
  }
  return { questions, exNum };
}

function genMissingDigitDiv(exNum: number): MissingDigitDivConfig {
  const validBases = [2, 3, 4, 5, 6, 9, 10];
  const questions: MissingDigitDivQ[] = [];
  const fixedDigitCounts = [1, 1, 2, 2, 3];
  for (let i = 0; i < 5; i++) {
    const divisor = validBases[rnd(0, validBases.length - 1)]!;
    const digitCount = fixedDigitCounts[i] ?? 1;
    const minPrefix = 10 ** (digitCount - 1);
    const maxPrefix = 10 ** digitCount - 1;
    const prefix = rnd(minPrefix, maxPrefix);
    const validDigits: string[] = [];
    for (let d = 0; d <= 9; d++) {
      const full = prefix * 10 + d;
      if (full % divisor === 0) validDigits.push(String(d));
    }
    if (validDigits.length > 0) {
      questions.push({ prefix: String(prefix), divisor, validDigits });
    } else {
      // fallback: pick a number and find prefix
      const k = rnd(1, 9);
      const num = divisor * k;
      const p = Math.floor(num / 10);
      const dig = num % 10;
      questions.push({ prefix: String(p), divisor, validDigits: [String(dig)] });
    }
  }
  return { questions, exNum };
}

function genGcdLcm(op: "pgcd"|"ppmc", count: 2|3, exNum: number): GcdLcmConfig {
  const questions: Array<{nums: number[]; answer: number}> = [];
  const uniqueRnd = (min: number, max: number, amount: number) => {
    const nums: number[] = [];
    while (nums.length < amount) {
      const n = rnd(min, max);
      if (!nums.includes(n)) nums.push(n);
    }
    return nums;
  };
  for (let i = 0; i < 5; i++) {
    let nums: number[];
    let answer: number;
    if (op === "pgcd") {
      if (count === 2) {
        const g = rnd(2, 12);
        const a = g * rnd(2, 8);
        const b = g * rnd(2, 8);
        nums = [a, b];
        answer = gcdN(a, b);
      } else {
        nums = uniqueRnd(10, 100, 3);
        answer = gcdN(nums[0]!, nums[1]!, nums[2]!);
      }
    } else {
      if (count === 2) {
        nums = uniqueRnd(2, 99, 2);
        answer = lcmN(nums[0]!, nums[1]!);
      } else {
        nums = uniqueRnd(10, 100, 3);
        answer = lcmN(nums[0]!, nums[1]!, nums[2]!);
      }
    }
    questions.push({ nums, answer });
  }
  return { questions, exNum, op, count };
}

function genTrueFalseGcdLcm(exNum: number): TrueFalseGcdLcmConfig {
  const questions: TrueFalseGcdLcmQ[] = [];
  const pgcdCount = Math.random() < 0.5 ? 2 : 3;
  for (let i = 0; i < 5; i++) {
    const isPgcd = i < pgcdCount;
    const a = rnd(2, 12);
    const b = rnd(2, 12);
    if (isPgcd) {
      const correct = gcdN(a, b);
      const isTrue = Math.random() < 0.5;
      const stated = isTrue ? correct : (correct + rnd(1, 3));
      questions.push({ statement: `Le PGDC de ${a} et ${b} est ${stated}`, answer: isTrue, type: "pgcd" });
    } else {
      const correct = lcmN(a, b);
      const isTrue = Math.random() < 0.5;
      const stated = isTrue ? correct : (correct + rnd(1, 3) * a);
      questions.push({ statement: `Le PPMC de ${a} et ${b} est ${stated}`, answer: isTrue, type: "ppmc" });
    }
  }
  return { questions: shuffleArr(questions), exNum };
}

// â”€â”€ WordProblemsExercise (A2.4) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function WordProblemsExercise({
  config, answers, validated, results, onChange, consigne,
}: {
  config: WordProblemsConfig;
  answers: string[];
  validated: boolean;
  results: boolean[];
  onChange: (i: number, val: string) => void;
  consigne?: string;
}) {
  const inputCls = `w-28 px-0 pb-2 text-sm ${MATH_TEXT_INPUT_BASE}`;
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{consigne ?? "RÃ©solvez les problÃ¨mes. Ã‰crivez uniquement la rÃ©ponse numÃ©rique."}</p>
      </div>
      <div className="space-y-6">
        {config.questions.map((q, i) => {
          const v = answers[i] ?? "";
          const ok = validated ? (results[i] ?? false) : null;
          const wrong = ok === false;
          return (
            <div key={i} className="space-y-3">
              <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4">
                <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{q.textFr}</p>
              </div>
              <div className="flex items-center gap-3 pl-2">
                <span className="shrink-0 text-sm text-[var(--color-text-secondary)]">RÃ©ponse :</span>
                {wrong ? (
                  <div className="w-28 h-9 rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center">
                    <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{v || "â€”"}</span>
                    <span className="text-xs font-bold leading-none text-amber-600">{q.answer.toLocaleString("fr-CH")}</span>
                  </div>
                ) : (
                  <input
                    type="text"
                    inputMode="numeric"
                    value={v}
                    disabled={validated}
                    onChange={e => onChange(i, e.target.value.replace(/[^0-9 ]/g, ""))}
                    className={inputCls}
                  />
                )}
                {ok === true && (
                  <span className="text-sm font-bold text-[var(--color-accent-alg)]">âœ“</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// â”€â”€ ArithmeticGroupExercise â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function UnitConversionExercise({
  config, answers, validated, results, onChange,
}: {
  config: UnitConversionConfig;
  answers: string[];
  validated: boolean;
  results: boolean[];
  onChange: (i: number, val: string) => void;
}) {
  const inputCls = `w-28 px-0 pb-2 text-sm ${MATH_TEXT_INPUT_BASE}`;
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          Convertissez les valeurs vers l&apos;unité de mesure demandée.
        </p>
      </div>
      <div className="space-y-4">
        {config.questions.map((q, i) => {
          const v = answers[i] ?? "";
          const ok = validated ? (results[i] ?? false) : null;
          const wrong = ok === false;
          return (
            <div key={`${q.value}-${q.from}-${q.to}-${i}`} className="inline-flex w-auto items-center gap-3 text-sm">
              <span className="font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="w-28 shrink-0 font-mono text-[var(--color-text-primary)]">{q.value} {q.from}</span>
              <span className="text-[var(--color-text-secondary)]">=</span>
              <div className="inline-flex w-auto items-center gap-2">
                {wrong ? (
                  <div className="w-28 h-10 rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center">
                    <span className="text-[10px] leading-none text-[var(--color-text-secondary)] line-through">{v || "—"}</span>
                    <span className="text-xs font-bold leading-none text-amber-600">{q.answer}</span>
                  </div>
                ) : (
                  <input
                    type="text"
                    inputMode="decimal"
                    value={v}
                    disabled={validated}
                    onChange={e => onChange(i, e.target.value.replace(/[^0-9,.\s-]/g, ""))}
                    className={inputCls}
                  />
                )}
                <span className="font-mono text-[var(--color-text-primary)]">{q.to}</span>
                {ok === true && <span className="text-sm font-bold text-[var(--color-accent-alg)]">✓</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function ArithmeticGroupExercise({
  config, answers, validated, results, onChange, onTimerExpired, onTimeUpdate, hideTimerDisplay, consigne,
}: {
  config: ArithGroupConfig;
  answers: string[];
  validated: boolean;
  results: boolean[];
  onChange: (i: number, val: string) => void;
  onTimerExpired?: () => void;
  onTimeUpdate?: (t: number) => void;
  hideTimerDisplay?: boolean;
  consigne?: string;
}) {
  const [timeLeft, setTimeLeft] = useState<number | null>(() =>
    config.timer !== undefined ? config.timer : null
  );
  const onTimerExpiredRef = useRef(onTimerExpired);
  onTimerExpiredRef.current = onTimerExpired;
  const onTimeUpdateRef = useRef(onTimeUpdate);
  onTimeUpdateRef.current = onTimeUpdate;

  useEffect(() => {
    if (config.timer === undefined || validated) return;
    setTimeLeft(config.timer);
    onTimeUpdateRef.current?.(config.timer);
    const id = setInterval(() => {
      setTimeLeft(prev => {
        const next = prev === null || prev <= 1 ? 0 : prev - 1;
        if (next === 0) {
          clearInterval(id);
          onTimerExpiredRef.current?.();
        }
        onTimeUpdateRef.current?.(next);
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.timer]);

  const numCls = "w-14 text-center font-mono text-sm text-[var(--color-text-primary)]";
  const inputBase = `w-14 px-1 py-1.5 text-sm ${MATH_NUMBER_INPUT_BASE}`;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
        {config.timer !== undefined && !hideTimerDisplay && (
          <span className={`rounded-full px-2 py-0.5 text-xs font-bold tabular-nums ${
            timeLeft !== null && !validated
              ? timeLeft <= 15
                ? "bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400"
                : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]"
              : "invisible"
          }`}>
            {timeLeft !== null ? formatTime(timeLeft) : "00:00"}
          </span>
        )}
      </div>
      {consigne && (
        <p className="text-sm text-[var(--color-text-secondary)]">{consigne}</p>
      )}
      <div className="space-y-3">
        {config.questions.map((q, i) => {
          const v = answers[i] ?? "";
          const ok = validated ? results[i] ?? false : null;
          const wrongField = ok === false;
          return (
            <div key={i} className="flex min-h-[2.25rem] items-center gap-1.5">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              {q.missingPos === "a"
                ? wrongField
                  ? <div className="w-14 h-8 rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center"><span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{v||"â€”"}</span><span className="text-xs font-bold leading-none text-amber-600">{q.answer}</span></div>
                  : <input type="text" inputMode="numeric" value={v} disabled={validated} onChange={e => onChange(i, e.target.value.replace(/[^0-9,.\-]/g, ""))} className={inputBase} />
                : <span className={numCls}>{q.a}</span>}
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">{q.op}</span>
              {q.missingPos === "b"
                ? wrongField
                  ? <div className="w-14 h-8 rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center"><span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{v||"â€”"}</span><span className="text-xs font-bold leading-none text-amber-600">{q.answer}</span></div>
                  : <input type="text" inputMode="numeric" value={v} disabled={validated} onChange={e => onChange(i, e.target.value.replace(/[^0-9,.\-]/g, ""))} className={inputBase} />
                : <span className={numCls}>{q.b}</span>}
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
              {q.missingPos === "result"
                ? wrongField
                  ? <div className="w-14 h-8 rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center"><span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{v||"â€”"}</span><span className="text-xs font-bold leading-none text-amber-600">{q.answer}</span></div>
                  : <input type="text" inputMode="numeric" value={v} disabled={validated} onChange={e => onChange(i, e.target.value.replace(/[^0-9,.\-]/g, ""))} className={inputBase} />
                : <span className={numCls}>{q.result}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// â”€â”€ ColumnGridExercise â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const COL_LABELS = ["M", "C", "D", "U"] as const;

function ColumnGridCard({
  q, cardIdx, cellAnswers, carryInputs, validated, cardCorrect: _cardCorrect, preFilledOperands, exNum: _exNum, onChange, onCarryChange,
}: {
  q: ColGridQ; cardIdx: number; cellAnswers: string[]; carryInputs: string[];
  validated: boolean; cardCorrect: boolean; preFilledOperands: boolean; exNum: number;
  onChange: (cardIdx: number, cellIdx: number, val: string) => void;
  onCarryChange: (cardIdx: number, col: number, val: string) => void;
}) {
  const ad = getD4(q.a), bd = getD4(q.b), rd = getD4(q.result);
  const firstNzA = ad.findIndex(d => d !== 0);
  const firstNzB = bd.findIndex(d => d !== 0);
  const firstNzR = rd.findIndex(d => d !== 0);
  // cellIdx layout: [0-3]=op1, [4-7]=op2, [8-11]=result (when not preFilledOperands)
  // cellIdx layout: [0-3]=result only (when preFilledOperands)
  const resBase = preFilledOperands ? 0 : 8;

  // Leading zero = zero before first significant digit â†’ not required
  const cellOk = (expected: number, val: string, col: number, firstNz: number) => {
    const trimmed = val.trim();
    if (trimmed === String(expected)) return true;
    if (expected === 0 && col < firstNz) return trimmed === "" || trimmed === "0";
    return false;
  };

  function tabNav(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Tab") return;
    e.preventDefault();
    const card = e.currentTarget.closest("[data-grid-card]");
    if (!card) return;
    const inputs = Array.from(card.querySelectorAll("input:not(:disabled)")) as HTMLInputElement[];
    const idx = inputs.indexOf(e.currentTarget);
    const next = e.shiftKey ? inputs[idx - 1] : inputs[idx + 1];
    if (next) {
      next.focus();
      next.setSelectionRange(next.value.length, next.value.length);
    }
  }

  const cellInput = ({ base, col, expected, firstNz }: { base: number; col: number; expected: number; firstNz?: number }) => {
    const idx = base + col;
    const val = cellAnswers[idx] ?? "";
    const ok = validated ? cellOk(expected, val, col, firstNz ?? 0) : null;
    if (ok === false) {
      return (
        <div className={`h-8 w-8 flex flex-col items-center justify-center border-amber-400`}>
          <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{val || "â€”"}</span>
          <span className="text-[9px] font-bold leading-none text-amber-600">{expected}</span>
        </div>
      );
    }
    return (
      <input
        type="text"
        inputMode="numeric"
        maxLength={1}
        value={val}
        disabled={validated}
        onChange={e => {
          const v = e.target.value.replace(/[^0-9]/g, "").slice(-1);
          onChange(cardIdx, idx, v);
        }}
        onKeyDown={tabNav}
        onFocus={e => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
        className={`h-8 w-8 px-0 text-base ${MATH_TEXT_INPUT_BASE}`}
      />
    );
  };

  const Prefilled = ({ digit, isLeading }: { digit: number; isLeading: boolean }) => (
    <div className="flex h-8 w-8 items-center justify-center font-mono text-base text-[var(--color-text-primary)]">
      {isLeading ? "" : digit}
    </div>
  );

  return (
    <div data-grid-card className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
      {!preFilledOperands && (
        <p className="mb-2 text-center text-xs text-[var(--color-text-secondary)]">
          {formatCompNum(q.a)} {q.op} {formatCompNum(q.b)}
        </p>
      )}
      <table className="mx-auto border-collapse table-fixed">
        <thead>
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {COL_LABELS.map(h => (
              <th key={h} style={{ width: CELL_W, padding: 0 }} className="text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Carry / borrow row â€” input fields */}
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">{q.op === "+" || q.op === "Ã—" ? "R" : "E"}</td>
            {q.carryRow.map((c, ci) => {
              const carryVal = carryInputs[ci] ?? "";
              const expectedCarry = c !== null ? String(c) : null;
              const carryWrong = validated && expectedCarry !== null && carryVal.trim() !== expectedCarry;
              return (
                <td key={ci} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                  {carryWrong ? (
                    <div className={`h-5 w-8 flex flex-col items-center justify-center border-amber-400`}>
                      <span className="text-[8px] leading-none text-[var(--color-text-primary)]">{carryVal || "â€”"}</span>
                      <span className="text-[8px] font-bold leading-none text-amber-600">{expectedCarry}</span>
                    </div>
                  ) : (
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={carryVal}
                      disabled={validated}
                      onChange={e => {
                        const v = e.target.value.replace(/[^0-9]/g, "").slice(-1);
                        onCarryChange(cardIdx, ci, v);
                      }}
                      onKeyDown={tabNav}
                      onFocus={e => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
                      className={`h-5 w-8 px-0 text-[10px] text-orange-500 ${MATH_TEXT_INPUT_BASE}`}
                    />
                  )}
                </td>
              );
            })}
          </tr>
          {/* Operand 1 */}
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {[0, 1, 2, 3].map(col => (
              <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                {preFilledOperands ? <Prefilled digit={ad[col]!} isLeading={col < firstNzA} /> : cellInput({ base: 0, col, expected: ad[col]!, firstNz: firstNzA })}
              </td>
            ))}
          </tr>
          {/* Operand 2 */}
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">{q.op}</td>
            {[0, 1, 2, 3].map(col => (
              <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                {preFilledOperands ? <Prefilled digit={bd[col]!} isLeading={col < firstNzB} /> : cellInput({ base: 4, col, expected: bd[col]!, firstNz: firstNzB })}
              </td>
            ))}
          </tr>
          {/* Separator */}
          <tr><td colSpan={5}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          {/* Result */}
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {[0, 1, 2, 3].map(col => (
              <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                {cellInput({ base: resBase, col, expected: rd[col]!, firstNz: firstNzR })}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ColumnGridExercise({
  config, answers, carryInputs, validated, results, onChange, onCarryChange, consigne,
}: {
  config: ColGridConfig;
  answers: string[][];
  carryInputs: string[][];
  validated: boolean;
  results: boolean[];
  onChange: (cardIdx: number, cellIdx: number, val: string) => void;
  onCarryChange: (cardIdx: number, col: number, val: string) => void;
  consigne?: string;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      {consigne && (
        <p className="text-sm text-[var(--color-text-secondary)]">{consigne}</p>
      )}
      <div className="grid grid-cols-2 gap-3">
        {config.questions.map((q, qi) => (
          <ColumnGridCard
            key={qi}
            q={q}
            cardIdx={qi}
            cellAnswers={answers[qi] ?? []}
            carryInputs={carryInputs[qi] ?? []}
            validated={validated}
            cardCorrect={results[qi] ?? false}
            preFilledOperands={config.preFilledOperands}
            exNum={config.exNum}
            onChange={onChange}
            onCarryChange={onCarryChange}
          />
        ))}
      </div>
    </div>
  );
}

// â”€â”€ DivColumnGridExercise â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const DIV_COL_LABELS_4 = ["M", "C", "D", "U"];
const DIV_COL_LABELS_5 = ["DM", "M", "C", "D", "U"];
const DIV_COL_LABELS_6 = ["CM", "DM", "M", "C", "D", "U"];
const CELL_W = 32;
// EMPTY_TD removed (no longer used after DivColumnCard grid rewrite)

function DivColumnCard({
  q, cardIdx, quotientInputs, remainderInput, operandInputs, workInputs, validated, preFilledOperands,
  onQuotientChange, onRemainderChange, onOperandChange, onWorkChange,
}: {
  q: DivColGridQ; cardIdx: number;
  quotientInputs: string[]; remainderInput: string;
  operandInputs: string[][];
  workInputs: string[][][];
  validated: boolean; preFilledOperands: boolean;
  onQuotientChange: (ci: number, idx: number, val: string) => void;
  onRemainderChange: (ci: number, val: string) => void;
  onOperandChange: (ci: number, isDivisor: boolean, idx: number, val: string) => void;
  onWorkChange: (ci: number, si: number, type: 0|1, di: number, val: string) => void;
}) {
  const { dividend, divisor, quotient, remainder, steps, dividendCols, divisorCols, quotientCols } = q;
  const colLabels = dividendCols === 4 ? DIV_COL_LABELS_4 : dividendCols === 5 ? DIV_COL_LABELS_5 : DIV_COL_LABELS_6;
  const dividendStr = dividend.toString().padStart(dividendCols, "0");
  const divisorStr = divisor.toString().padStart(divisorCols, "0");
  // Left-align quotient: digit i â†’ cell i; cells >= quotientLen are empty
  const quotientDigitStr = quotient.toString();
  const quotientLen = quotientDigitStr.length;
  const BSEP: React.CSSProperties = { borderLeft: "2px solid var(--color-text-primary)" };

  function tabNav(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Tab") return;
    e.preventDefault();
    const card = e.currentTarget.closest("[data-divcol-card]");
    if (!card) return;
    const inputs = Array.from(card.querySelectorAll("input:not(:disabled)")) as HTMLInputElement[];
    const idx = inputs.indexOf(e.currentTarget);
    const next = e.shiftKey ? inputs[idx - 1] : inputs[idx + 1];
    if (next) { next.focus(); next.setSelectionRange(next.value.length, next.value.length); }
  }

  const inputCell = ({ val, expected, onChange }: {
    val: string; expected: string; onChange: (v: string) => void;
  }) => {
    const ok = validated ? val.trim() === expected : null;
    if (ok === false) return (
      <div className={`h-8 w-8 flex flex-col items-center justify-center border-amber-400`}>
        <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{val || "â€”"}</span>
        <span className="text-[9px] font-bold leading-none text-amber-600">{expected}</span>
      </div>
    );
    return (
      <input type="text" inputMode="numeric" maxLength={1} value={val} disabled={validated}
        onChange={e => onChange(e.target.value.replace(/[^0-9]/g, "").slice(-1))}
        onKeyDown={tabNav}
        onFocus={e => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
        className={`h-8 w-8 px-0 text-base ${MATH_TEXT_INPUT_BASE}`}
      />
    );
  };

  const preCell = ({ digit, hide }: { digit: string; hide?: boolean }) =>
    <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">{hide ? "" : digit}</div>;

  const emptyCell = () =>
    <div className="h-8 w-8" />;

  const remOk = validated ? remainderInput.trim() === remainder.toString() : null;

  // Render full dividend-column-width row with inputs at specified positions
  function FullWorkRow({ numStr, colEnd, si, type }: { numStr: string; colEnd: number; si: number; type: 0|1 }) {
    const startCol = colEnd - numStr.length + 1;
    return (
      <>
        {Array.from({ length: dividendCols }, (_, col) => {
          const relIdx = col - startCol;
          const hasDigit = relIdx >= 0 && relIdx < numStr.length;
          return (
            <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
              {hasDigit
                ? inputCell({ val: (workInputs?.[si]?.[type]?.[relIdx]) ?? "", expected: numStr[relIdx]!,
                    onChange: v => onWorkChange(cardIdx, si, type, relIdx, v) })
                : emptyCell()}
            </td>
          );
        })}
      </>
    );
  }

  return (
    <div data-divcol-card className="overflow-x-auto">
      <p className="mb-2 text-center font-mono text-sm text-[var(--color-text-primary)]">
        {dividend} Ã· {divisor}
      </p>
      <table className="mx-auto border-collapse table-fixed">
        <tbody>
          {/* Row 0: Column headers */}
          <tr>
            <td style={{ width: 20, padding: 0 }} />
            {colLabels.map((lbl, i) => (
              <td key={i} style={{ width: CELL_W, padding: 0 }}
                className="text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{lbl}</td>
            ))}
            {Array.from({ length: quotientCols }, (_, i) => (
              <td key={i} style={{ width: CELL_W, padding: 0, ...(i === 0 ? BSEP : {}) }} />
            ))}
          </tr>

          {/* Row 1: Dividend | Divisor */}
          <tr>
            <td style={{ padding: 0 }} />
            {Array.from({ length: dividendCols }, (_, i) => {
              const isLeading = i < dividendCols - dividend.toString().length;
              return (
                <td key={i} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                  {preFilledOperands
                    ? preCell({ digit: dividendStr[i]!, hide: isLeading })
                    : inputCell({ val: operandInputs[0]?.[i] ?? "", expected: dividendStr[i]!,
                        onChange: v => onOperandChange(cardIdx, false, i, v) })
                  }
                </td>
              );
            })}
            {Array.from({ length: quotientCols }, (_, i) => {
              const isDivCol = i < divisorCols;
              const isLeading = isDivCol && i < divisorCols - divisor.toString().length;
              return (
                <td key={i} style={{
                  width: CELL_W, padding: 2,
                  ...(i === 0 ? BSEP : {}),
                  ...(isDivCol ? { borderBottom: "2px solid var(--color-text-primary)" } : {}),
                }} className="align-middle text-center">
                  {isDivCol
                    ? preFilledOperands
                      ? preCell({ digit: divisorStr[i]!, hide: isLeading })
                      : inputCell({ val: operandInputs[1]?.[i] ?? "", expected: divisorStr[i]!,
                          onChange: v => onOperandChange(cardIdx, true, i, v) })
                    : null}
                </td>
              );
            })}
          </tr>

          {/* Quotient row â€” shown right below dividend/divisor */}
          <tr>
            <td style={{ padding: 0 }} />
            {Array.from({ length: dividendCols }, (_, col) => (
              <td key={col} style={{ width: CELL_W, padding: 0 }}><div className="h-8 w-8" /></td>
            ))}
            {Array.from({ length: quotientCols }, (_, qi) => {
              const isEmpty = qi >= quotientLen;
              return (
                <td key={qi} style={{ width: CELL_W, padding: 2, ...(qi === 0 ? BSEP : {}) }} className="align-middle text-center">
                  {isEmpty
                    ? <div className="h-8 w-8" />
                    : inputCell({ val: quotientInputs[qi] ?? "", expected: quotientDigitStr[qi]!,
                        onChange: v => onQuotientChange(cardIdx, qi, v) })
                  }
                </td>
              );
            })}
          </tr>

          {/* Work steps */}
          {steps.map((step, si) => {
            const pdStr = step.partialDiv.toString();
            const prStr = step.product.toString();
            const pdStart = step.colEnd - pdStr.length + 1;
            const prStart = step.colEnd - prStr.length + 1;
            const lineStart = Math.min(pdStart, prStart);
            const lineEnd = step.colEnd;

            return (
              <Fragment key={si}>
                {/* Partial dividend row â€” skip si===0 (already visible in dividend row above) */}
                {si > 0 && (
                  <tr>
                    <td style={{ padding: 0 }} />
                    <FullWorkRow numStr={pdStr} colEnd={step.colEnd} si={si} type={0} />
                    <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                  </tr>
                )}

                {/* Product row */}
                <tr>
                  <td style={{ padding: 0, textAlign: "center", verticalAlign: "middle", fontSize: 14, color: "var(--color-text-secondary)" }}>âˆ’</td>
                  <FullWorkRow numStr={prStr} colEnd={step.colEnd} si={si} type={1} />
                  <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                </tr>

                {/* Step separator line */}
                <tr>
                  <td style={{ padding: 0 }} />
                  {Array.from({ length: dividendCols }, (_, col) => (
                    <td key={col} style={{ padding: 0, width: CELL_W }}>
                      {col >= lineStart && col <= lineEnd
                        ? <div className="h-px bg-[var(--color-text-primary)] opacity-50 my-1" />
                        : null}
                    </td>
                  ))}
                  <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                </tr>
              </Fragment>
            );
          })}

          {/* Reste row */}
          <tr>
            <td colSpan={dividendCols} style={{ padding: "4px 6px 4px 0", textAlign: "right", verticalAlign: "middle", fontSize: 12, color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>
              Reste :
            </td>
            <td style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
              {remOk === false
                ? <div className={`h-8 w-8 flex flex-col items-center justify-center border-amber-400`}>
                    <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{remainderInput || "â€”"}</span>
                    <span className="text-[9px] font-bold leading-none text-amber-600">{remainder}</span>
                  </div>
                : <input type="text" inputMode="numeric" maxLength={2} value={remainderInput} disabled={validated}
                    onChange={e => onRemainderChange(cardIdx, e.target.value.replace(/[^0-9]/g, "").slice(0, 2))}
                    onKeyDown={tabNav}
                    onFocus={e => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
                    className={`h-8 w-8 px-0 text-base ${MATH_TEXT_INPUT_BASE}`}
                  />}
            </td>
            <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const COL5_LABELS = ["DM","M","C","D","U"];

function Mul2DigitCard({
  q, cardIdx, cellAnswers, carryInputs, validated, preFilledOperands,
  onChange, onCarryChange,
}: {
  q: Mul2DigitQ; cardIdx: number; cellAnswers: string[]; carryInputs: string[];
  validated: boolean; preFilledOperands: boolean;
  onChange: (cardIdx: number, cellIdx: number, val: string) => void;
  onCarryChange: (cardIdx: number, col: number, val: string) => void;
}) {
  const ad = getD5(q.a), bd = getD5(q.b);
  const p1d = getD5(q.partial1), p2d = getD5(q.partial2);
  const rd = getD5(q.result);
  const firstNzA = ad.findIndex(d => d !== 0);
  const firstNzB = bd.findIndex(d => d !== 0);
  const firstNzP1 = p1d.findIndex(d => d !== 0);
  const firstNzR = rd.findIndex(d => d !== 0);
  // For p2shifted (cols 0-3): col i â†’ p2d[i+1]; col 4 is fixed
  const firstNzP2s = [0,1,2,3].findIndex(c => (p2d[c + 1]!) !== 0);
  const aBase = 0, bBase = 5;
  const p1Base = preFilledOperands ? 0 : 10;
  const p2Base = preFilledOperands ? 5 : 15;
  const rBase  = preFilledOperands ? 10 : 20;

  // Dynamic column count: use 5 cols (DM,M,C,D,U) only if result > 9999
  const numCols = q.result > 9999 ? 5 : 4;
  const colStart = 5 - numCols; // 0 for 5-cols, 1 for 4-cols
  const visibleCols = Array.from({length: numCols}, (_, i) => colStart + i);
  const colLabels = COL5_LABELS.slice(colStart);
  const totalSpan = numCols + 1; // label col + data cols

  // partial2 shifted: col i â†’ p2d[i+1], except col 4 (U) = 0 (fixed)
  const p2ShiftedDigit = (col: number): number => col === 4 ? 0 : p2d[col + 1]!;

  function tabNav(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Tab") return;
    e.preventDefault();
    const card = e.currentTarget.closest("[data-grid-card]");
    if (!card) return;
    const inputs = Array.from(card.querySelectorAll("input:not(:disabled)")) as HTMLInputElement[];
    const idx = inputs.indexOf(e.currentTarget);
    const next = e.shiftKey ? inputs[idx - 1] : inputs[idx + 1];
    if (next) { next.focus(); next.setSelectionRange(next.value.length, next.value.length); }
  }

  const cellInput = ({ base, col, expected, firstNz }: { base: number; col: number; expected: number; firstNz?: number }) => {
    const idx = base + col;
    const val = cellAnswers[idx] ?? "";
    const fNz = firstNz ?? 0;
    const isLeading = expected === 0 && col < fNz;
    const ok = validated ? (isLeading ? (val.trim() === "" || val.trim() === "0") : val.trim() === String(expected)) : null;
    if (ok === false) {
      return (
        <div className={`h-8 w-8 flex flex-col items-center justify-center border-amber-400`}>
          <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{val || "â€”"}</span>
          <span className="text-[9px] font-bold leading-none text-amber-600">{expected}</span>
        </div>
      );
    }
    return (
      <input type="text" inputMode="numeric" maxLength={1} value={val} disabled={validated}
        onChange={e => { const v = e.target.value.replace(/[^0-9]/g,"").slice(-1); onChange(cardIdx, idx, v); }}
        onKeyDown={tabNav}
        onFocus={e => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
        className={`h-8 w-8 px-0 text-base ${MATH_TEXT_INPUT_BASE}`}
      />
    );
  };

  const Prefilled = ({ digit, isLeading }: { digit: number; isLeading: boolean }) => (
    <div className="flex h-8 w-8 items-center justify-center font-mono text-base text-[var(--color-text-primary)]">
      {isLeading ? "" : digit}
    </div>
  );

  const carryCell = (rowBase: number, col: number, expectedCarries: (number | null)[]) => {
    const idx = rowBase + col;
    const val = carryInputs[idx] ?? "";
    const expected = expectedCarries[col];
    if (validated && expected !== null && val.trim() !== String(expected)) {
      return (
        <div className={`h-5 w-8 flex flex-col items-center justify-center border-amber-400`}>
          <span className="text-[8px] leading-none text-[var(--color-text-primary)]">{val || "â€”"}</span>
          <span className="text-[8px] font-bold leading-none text-amber-600">{expected}</span>
        </div>
      );
    }
    return (
      <input type="text" inputMode="numeric" maxLength={1} value={val} disabled={validated}
        onChange={e => { const v = e.target.value.replace(/[^0-9]/g,"").slice(-1); onCarryChange(cardIdx, idx, v); }}
        onKeyDown={tabNav}
        onFocus={e => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
        className={`h-5 w-8 px-0 text-[10px] text-orange-500 ${MATH_TEXT_INPUT_BASE}`}
      />
    );
  };

  return (
    <div data-grid-card className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
      {!preFilledOperands && (
        <p className="mb-2 text-center text-xs text-[var(--color-text-secondary)]">
          {formatCompNum(q.a)} Ã— {formatCompNum(q.b)}
        </p>
      )}
      <table className="mx-auto border-collapse table-fixed">
        <thead>
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {colLabels.map(h => (
              <th key={h} style={{ width: CELL_W, padding: 0 }} className="text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* R2 â€” carries for tens-digit multiplication (shown first/top) */}
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R2</td>
            {visibleCols.map(col => (
              <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">{carryCell(5, col, q.carries2)}</td>
            ))}
          </tr>
          {/* R1 â€” carries for units-digit multiplication */}
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R1</td>
            {visibleCols.map(col => (
              <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">{carryCell(0, col, q.carries1)}</td>
            ))}
          </tr>
          {/* Operand a */}
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {visibleCols.map(col => (
              <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                {preFilledOperands
                  ? <Prefilled digit={ad[col]!} isLeading={col < firstNzA} />
                  : cellInput({base: aBase, col, expected: ad[col]!, firstNz: firstNzA})}
              </td>
            ))}
          </tr>
          {/* Operand b */}
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">Ã—</td>
            {visibleCols.map(col => (
              <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                {preFilledOperands
                  ? <Prefilled digit={bd[col]!} isLeading={col < firstNzB} />
                  : cellInput({base: bBase, col, expected: bd[col]!, firstNz: firstNzB})}
              </td>
            ))}
          </tr>
          {/* Separator 1 */}
          <tr><td colSpan={totalSpan}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          {/* Partial product 1 (a Ã— bUnits) */}
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {visibleCols.map(col => (
              <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">{cellInput({base: p1Base, col, expected: p1d[col]!, firstNz: firstNzP1})}</td>
            ))}
          </tr>
          {/* Partial product 2 shifted (a Ã— bTens Ã— 10) */}
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-center font-mono text-sm text-[var(--color-text-primary)]">+</td>
            {visibleCols.map(col => {
              if (col === 4) {
                // Fixed "0" in units position â€” shown in accent colour
                return (
                  <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                    <div className="flex h-8 w-8 items-center justify-center font-mono text-base font-bold text-[var(--color-accent-alg)] opacity-60">0</div>
                  </td>
                );
              }
              return <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">{cellInput({base: p2Base, col, expected: p2ShiftedDigit(col), firstNz: firstNzP2s < 0 ? 5 : firstNzP2s})}</td>;
            })}
          </tr>
          {/* Separator 2 */}
          <tr><td colSpan={totalSpan}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          {/* Result */}
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {visibleCols.map(col => (
              <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">{cellInput({base: rBase, col, expected: rd[col]!, firstNz: firstNzR})}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Mul2DigitExercise({
  config, answers, carryInputs, validated, results, onChange, onCarryChange,
}: {
  config: Mul2DigitConfig;
  answers: string[][];
  carryInputs: string[][];
  validated: boolean;
  results: boolean[];
  onChange: (cardIdx: number, cellIdx: number, val: string) => void;
  onCarryChange: (cardIdx: number, col: number, val: string) => void;
}) {
  void results;
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Effectuez les multiplications en colonnes. Ã‰crivez les produits partiels, les retenues et le rÃ©sultat.
      </p>
      <div className="flex flex-col gap-4">
        {config.questions.map((q, qi) => (
          <Mul2DigitCard
            key={qi}
            q={q}
            cardIdx={qi}
            cellAnswers={answers[qi] ?? []}
            carryInputs={carryInputs[qi] ?? []}
            validated={validated}
            preFilledOperands={config.preFilledOperands}
            onChange={onChange}
            onCarryChange={onCarryChange}
          />
        ))}
      </div>
    </div>
  );
}

function DivColumnGridExercise({
  config, quotientInputs, remainderInputs, operandInputs, workInputs, validated,
  onQuotientChange, onRemainderChange, onOperandChange, onWorkChange,
  consigne, consigneLang, consigneDir,
}: {
  config: DivColGridConfig;
  quotientInputs: string[][];
  remainderInputs: string[];
  operandInputs: string[][][];
  workInputs: string[][][][];
  validated: boolean;
  onQuotientChange: (ci: number, idx: number, val: string) => void;
  onRemainderChange: (ci: number, val: string) => void;
  onOperandChange: (ci: number, isDivisor: boolean, idx: number, val: string) => void;
  onWorkChange: (ci: number, si: number, type: 0|1, di: number, val: string) => void;
  consigne?: string;
  consigneLang?: string;
  consigneDir?: "ltr" | "rtl";
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]" lang={consigneLang} dir={consigneDir}>{consigne ?? "Effectuez les divisions en colonnes."}</p>
      <div className="flex flex-col gap-3">
        {config.questions.map((q, qi) => (
          <DivColumnCard
            key={qi} q={q} cardIdx={qi}
            quotientInputs={quotientInputs[qi] ?? []}
            remainderInput={remainderInputs[qi] ?? ""}
            operandInputs={operandInputs[qi] ?? [[], []]}
            workInputs={workInputs[qi] ?? []}
            validated={validated}
            preFilledOperands={config.preFilledOperands}
            onQuotientChange={onQuotientChange}
            onRemainderChange={onRemainderChange}
            onOperandChange={onOperandChange}
            onWorkChange={onWorkChange}
          />
        ))}
      </div>
    </div>
  );
}

// â”€â”€ RoundingExercise â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function RoundingExercise({
  config, answers, validated, results, onChange,
}: {
  config: RoundingConfig;
  answers: string[];
  validated: boolean;
  results: boolean[];
  onChange: (i: number, val: string) => void;
}) {
  const inputBase = `w-[4.5rem] h-8 shrink-0 px-2 text-sm ${MATH_NUMBER_INPUT_BASE}`;
  const isNew = config.consigne !== "";
  const isDecKind = config.kind.startsWith("dec_");
  const isDecMixed = config.kind === "dec_mixed";
  const isInline = config.kind === "diz_near" || config.kind === "cent_near_new" || isDecKind;

  const gridCols = isDecMixed
    ? "1.25rem max-content 1.2rem max-content max-content 4.5rem"
    : isInline
      ? "1.25rem max-content max-content 4.5rem"
      : isNew && !isInline ? "1.25rem max-content max-content" : undefined;

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      {isNew && <p className="text-sm text-[var(--color-text-secondary)]">{config.consigne}</p>}
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div
          className={isInline || isDecMixed ? "grid items-center gap-x-2 gap-y-3" : isNew && !isInline ? "grid gap-y-3" : "space-y-3"}
          style={gridCols ? { gridTemplateColumns: gridCols } : undefined}
        >
          {config.questions.map((q, i) => {
            const v = answers[i] ?? "";
            const ok = validated ? results[i] ?? false : null;
            const wrongField = ok === false;
            const numLabel = <span className="text-xs font-bold text-[var(--color-accent-alg)] self-center">{i + 1}.</span>;
            const prompt = <span className={`${isNew && !isInline ? "font-mono" : "flex-1"} text-sm text-[var(--color-text-primary)] self-center`}>{q.prompt}</span>;
            const field = wrongField
              ? <div className={`${inputBase} rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center overflow-hidden`}>
                  <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{v || "â€”"}</span>
                  <span className="text-[9px] font-bold leading-none text-amber-600">{q.answer}</span>
                </div>
              : <input
                  type="text"
                  inputMode={isDecKind ? "decimal" : "numeric"}
                  value={v}
                  disabled={validated}
                  onChange={e => onChange(i, isDecKind ? e.target.value.replace(/[^0-9,.]/g, "") : e.target.value.replace(/[^0-9]/g, ""))}
                  className={inputBase}
                />;
            if (isDecMixed) {
              const parts = q.prompt.split(" â†’ ");
              const numPart = parts[0] ?? q.prompt;
              const labelPart = parts[1] ?? "";
              return (
                <Fragment key={i}>
                  <span className="text-xs font-bold text-[var(--color-accent-alg)] self-center">{i + 1}.</span>
                  <span className="font-mono text-sm text-[var(--color-text-primary)] self-center">{numPart}</span>
                  <span className="text-sm font-bold text-[var(--color-accent-alg)] self-center">â†’</span>
                  <span className="text-sm text-[var(--color-text-secondary)] self-center">{labelPart}</span>
                  <span className="text-sm text-[var(--color-text-secondary)] self-center">â‰ˆ</span>
                  {field}
                </Fragment>
              );
            }
            if (isInline) {
              return (
                <Fragment key={i}>
                  <span className="text-xs font-bold text-[var(--color-accent-alg)] self-center">{i + 1}.</span>
                  <span className="font-mono text-sm text-[var(--color-text-primary)] self-center">{q.prompt}</span>
                  <span className="text-sm text-[var(--color-text-secondary)] self-center">â‰ˆ</span>
                  {field}
                </Fragment>
              );
            }
            return isNew
              ? <Fragment key={i}>{numLabel}{prompt}{field}</Fragment>
              : <div key={i} className="flex items-center gap-2 flex-wrap min-h-[2.25rem]">{numLabel}{prompt}{field}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

function shufflePick<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy.slice(0, Math.min(n, copy.length));
}

// â”€â”€ FracDisplay helper â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function FracDisplay({ num, den }: { num: number | string; den: number | string }) {
  return (
    <span className="inline-flex flex-col items-center leading-none gap-[3px] mx-1 align-middle">
      <span className="text-sm font-bold text-[var(--color-accent-alg)]">{num}</span>
      <span className="h-[1.5px] self-stretch min-w-[1.2em] rounded bg-[var(--color-text-primary)]" />
      <span className="text-sm font-bold text-[var(--color-text-primary)]">{den}</span>
    </span>
  );
}

// â”€â”€ FracIdExercise â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function FracIdExercise({ config, answers, validated, results, onChange }: {
  config: FracIdConfig; answers: string[]; validated: boolean; results: boolean[];
  onChange: (i: number, val: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4 space-y-4">
        {config.questions.map((q, i) => {
          const v = answers[i] ?? "";
          const ok = validated ? results[i] : null;
          const wrong = ok === false;
          const label = q.ask === "num" ? "Quel est le numÃ©rateur ?" : "Quel est le dÃ©nominateur ?";
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <FracDisplay num={q.num} den={q.den} />
              <span className="text-sm text-[var(--color-text-secondary)]">{label}</span>
              {wrong ? (
                <div className={`w-14 px-1 py-1.5 text-sm flex flex-col items-center justify-center rounded-none border-0 border-b-2 border-amber-500`}>
                  <span className="text-xs leading-none text-[var(--color-text-primary)]">{v||"â€”"}</span>
                  <span className="text-xs font-bold text-amber-600 leading-none">{q.ask === "num" ? q.num : q.den}</span>
                </div>
              ) : (
                <input
                  type="text"
                  inputMode="numeric"
                  value={v}
                  disabled={validated}
                  onChange={e => onChange(i, e.target.value.replace(/[^0-9]/g, ""))}
                  className={`w-14 px-1 py-1.5 text-sm ${MATH_NUMBER_INPUT_BASE}`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// â”€â”€ FracEquivExercise â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function FracEquivExercise({ config, answers, validated, results, onChange }: {
  config: FracEquivConfig; answers: string[]; validated: boolean; results: boolean[];
  onChange: (i: number, val: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">ComplÃ©tez les fractions Ã©quivalentes.</p>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4 space-y-5">
        {config.questions.map((q, i) => {
          const v = answers[i] ?? "";
          const ok = validated ? results[i] : null;
          const wrong = ok === false;
          const correctAns = q.answer;
          const inputW = `w-12 px-1 py-1.5 text-sm ${MATH_NUMBER_INPUT_BASE}`;
          return (
            <div key={i} className="flex items-center gap-2">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <FracDisplay num={q.srcNum} den={q.srcDen} />
              <span className="text-sm font-bold text-[var(--color-text-secondary)]">=</span>
              {q.missingPos === "num" ? (
                <span className="inline-flex flex-col items-center leading-none gap-[3px] mx-1 align-middle">
                  {wrong ? (
                    <div className={`w-12 flex flex-col items-center justify-center py-1 rounded-none border-0 border-b-2 border-amber-500`}>
                      <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{v||"â€”"}</span>
                      <span className="text-[9px] font-bold text-amber-600 leading-none">{correctAns}</span>
                    </div>
                  ) : (
                    <input type="text" inputMode="numeric" value={v} disabled={validated} onChange={e => onChange(i, e.target.value.replace(/[^0-9]/g, ""))}
                      className={inputW} />
                  )}
                  <span className="h-[1.5px] self-stretch min-w-[3em] rounded bg-[var(--color-text-primary)]" />
                  <span className="text-sm font-bold text-[var(--color-text-primary)]">{q.tgtDen}</span>
                </span>
              ) : (
                <span className="inline-flex flex-col items-center leading-none gap-[3px] mx-1 align-middle">
                  <span className="text-sm font-bold text-[var(--color-accent-alg)]">{q.tgtNum}</span>
                  <span className="h-[1.5px] self-stretch min-w-[3em] rounded bg-[var(--color-text-primary)]" />
                  {wrong ? (
                    <div className={`w-12 flex flex-col items-center justify-center py-1 rounded-none border-0 border-b-2 border-amber-500`}>
                      <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{v||"â€”"}</span>
                      <span className="text-[9px] font-bold text-amber-600 leading-none">{correctAns}</span>
                    </div>
                  ) : (
                    <input type="text" inputMode="numeric" value={v} disabled={validated} onChange={e => onChange(i, e.target.value.replace(/[^0-9]/g, ""))}
                      className={inputW} />
                  )}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// â”€â”€ FracSimplifyExercise â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function FracSimplifyExercise({ config, answers, validated, results, onChange }: {
  config: FracSimplifyConfig;
  answers: Array<{ num: string; den: string }>;
  validated: boolean;
  results: boolean[];
  onChange: (i: number, part: "num" | "den", val: string) => void;
}) {
  const inputW = `w-12 px-1 py-1.5 text-sm ${MATH_NUMBER_INPUT_BASE}`;
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Simplifiez les fractions.</p>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4 space-y-5">
        {config.questions.map((q, i) => {
          const ans = answers[i] ?? { num: "", den: "" };
          const ok = validated ? results[i] : null;
          const wrong = ok === false;
          return (
            <div key={i} className="flex items-center gap-2">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <FracDisplay num={q.num} den={q.den} />
              <span className="text-sm font-bold text-[var(--color-text-secondary)]">=</span>
              <span className="inline-flex flex-col items-center leading-none gap-[3px] mx-1 align-middle">
                {wrong ? (
                  <div className={`w-12 flex flex-col items-center justify-center py-1 rounded-none border-0 border-b-2 border-amber-500`}>
                    <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{ans.num||"â€”"}</span>
                    <span className="text-[9px] font-bold text-amber-600 leading-none">{q.simNum}</span>
                  </div>
                ) : (
                  <input type="text" inputMode="numeric" value={ans.num} disabled={validated} onChange={e => onChange(i, "num", e.target.value.replace(/[^0-9]/g, ""))}
                    className={inputW} />
                )}
                <span className="h-[1.5px] self-stretch min-w-[3em] rounded bg-[var(--color-text-primary)]" />
                {wrong ? (
                  <div className={`w-12 flex flex-col items-center justify-center py-1 rounded-none border-0 border-b-2 border-amber-500`}>
                    <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{ans.den||"â€”"}</span>
                    <span className="text-[9px] font-bold text-amber-600 leading-none">{q.simDen}</span>
                  </div>
                ) : (
                  <input type="text" inputMode="numeric" value={ans.den} disabled={validated} onChange={e => onChange(i, "den", e.target.value.replace(/[^0-9]/g, ""))}
                    className={inputW} />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// â”€â”€ FracCompareExercise â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function FracCompareExercise({ config, answers, validated, onAnswer }: {
  config: FracCompConfig;
  answers: Array<"<" | "=" | ">" | null>;
  validated: boolean;
  onAnswer: (i: number, sym: "<" | "=" | ">") => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Comparez les fractions suivantes.</p>
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4 space-y-4">
        {config.questions.map((q, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <FracDisplay num={q.num1} den={q.den1} />
            <div className="flex shrink-0 gap-1">
              {(["<", "=", ">"] as const).map(sym => {
                const sel = answers[i] === sym;
                const isCorrect = sym === q.answer;
                let cls = "h-8 w-8 shrink-0 rounded border text-sm font-bold transition-colors ";
                if (!validated) {
                  cls += sel ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]";
                } else if (sel && isCorrect) {
                  cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                } else if (sel && !isCorrect) {
                  cls += CLS_WRONG;
                } else if (!sel && isCorrect) {
                  cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]";
                } else {
                  cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-40";
                }
                return <button key={sym} type="button" disabled={validated} onClick={() => onAnswer(i, sym)} className={cls}>{sym}</button>;
              })}
            </div>
            <FracDisplay num={q.num2} den={q.den2} />
          </div>
        ))}
      </div>
    </div>
  );
}

const G3_GEO_PLACEMENT: Partial<Record<string, { geoKind: GeoPlacementKind; label: string }>> = {
  "G4-1": { geoKind: "square", label: "PÃ©rimÃ¨tre et aire du carrÃ©" },
  "G4-2": { geoKind: "rectangle", label: "PÃ©rimÃ¨tre et aire du rectangle" },
  "G4-3": { geoKind: "triangle", label: "PÃ©rimÃ¨tre et aire du triangle" },
  "G4-4": { geoKind: "parallelogram", label: "PÃ©rimÃ¨tre et aire du parallÃ©logramme" },
  "G4-5": { geoKind: "trapezoid", label: "PÃ©rimÃ¨tre et aire du trapÃ¨ze" },
  "G4-6": { geoKind: "circle", label: "PÃ©rimÃ¨tre et aire du disque" },
  "G4-7": { geoKind: "rhombus", label: "PÃ©rimÃ¨tre et aire du losange" },
};

const G5_VOLUME_PLACEMENT: Partial<Record<string, { volumeKind: VolumePlacementKind; label: string }>> = {
  "G5-4": { volumeKind: "cube", label: "Volume du cube" },
  "G5-5": { volumeKind: "cuboid", label: "Volume du pavÃ© droit" },
  "G5-6": { volumeKind: "prism", label: "Volume du prisme" },
  "G5-7": { volumeKind: "cylinder", label: "Volume du cylindre" },
  "G5-8": { volumeKind: "pyramid", label: "Volume de la pyramide" },
  "G5-9": { volumeKind: "cone_sphere", label: "Volume du cÃ´ne et de la sphÃ¨re" },
};

function GeoLineInput({
  label,
  unit,
  value,
  answer,
  onChange,
  validated,
}: {
  label: string;
  unit: string;
  value: number;
  answer: string;
  onChange: (value: string) => void;
  validated: boolean;
}) {
  const correct = Number.isInteger(value) ? String(value) : value.toFixed(1).replace(".", ",");
  const wrong = validated && answer.trim().replace(".", ",") !== correct;
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-[var(--color-text-secondary)]">{label} =</span>
      <div className={`w-20 min-h-9 flex flex-col items-center justify-center rounded-none border-0 border-b-2 px-1 py-1 text-center font-mono text-sm ${wrong ? "border-amber-500" : "border-[var(--color-accent-alg)]/60"}`}>
        {validated ? (
          wrong ? (
            <>
              {answer.trim() && <span className="text-[10px] leading-none text-[var(--color-text-primary)]">{answer}</span>}
              <span className="font-bold text-amber-600">{correct}</span>
            </>
          ) : (
            <span>{answer || correct}</span>
          )
        ) : (
          <input
            type="text"
            inputMode="decimal"
            value={answer}
            onChange={(event) => onChange(event.target.value.replace(/[^0-9,.]/g, ""))}
            className="h-6 w-full bg-transparent text-center outline-none"
          />
        )}
      </div>
      <span className="text-sm text-[var(--color-text-secondary)]">{unit}</span>
    </div>
  );
}

function SquareGeoExercise({
  exerciseKey,
  validated,
  validateTrigger,
  onValidated,
}: {
  exerciseKey: number;
  validated: boolean;
  validateTrigger: number;
  onValidated: (score: number, max: number) => void;
}) {
  const [data] = useState(() => {
    const side = rnd(3, 15);
    return { side, perimeter: 4 * side, area: side * side };
  });
  const [answerP, setAnswerP] = useState("");
  const [answerA, setAnswerA] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    const norm = (value: string) => value.trim().replace(".", ",");
    let score = 0;
    if (norm(answerP) === String(data.perimeter)) score++;
    if (norm(answerA) === String(data.area)) score++;
    onValidated(score, 2);
  }, [validateTrigger, answerP, answerA, data, onValidated]);

  return (
    <div className="space-y-4" data-exercise-key={exerciseKey}>
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le pÃ©rimÃ¨tre et l&apos;aire.</p>
      <svg viewBox="0 0 260 160" width="260" height="160" className="block mx-auto">
        <rect
          x="55"
          y="25"
          width="110"
          height="110"
          fill="var(--color-accent-alg)"
          fillOpacity={0.15}
          stroke="var(--color-accent-alg)"
          strokeWidth="2"
        />
        <text x="110" y="17" textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">{data.side} cm</text>
        <text x="177" y="82" textAnchor="start" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">{data.side} cm</text>
      </svg>
      <div className="space-y-2">
        <GeoLineInput label="PÃ©rimÃ¨tre" unit="cm" value={data.perimeter} answer={answerP} onChange={setAnswerP} validated={validated} />
        <GeoLineInput label="Aire" unit="cmÂ²" value={data.area} answer={answerA} onChange={setAnswerA} validated={validated} />
      </div>
    </div>
  );
}

function GeoPlacementExercise({
  step,
  exerciseKey,
  validated,
  validateTrigger,
  onValidated,
}: {
  step: GeoPlacementStep;
  exerciseKey: number;
  validated: boolean;
  validateTrigger: number;
  onValidated: (score: number, max: number) => void;
}) {
  const common = {
    exerciseKey,
    validated,
    validateTrigger,
    onValidated,
  };
  const ExerciseComponent =
    step.geoKind === "square" ? SquareGeoExercise :
    step.geoKind === "rectangle" ? PlacementRectangleExercise :
    step.geoKind === "triangle" ? PlacementTriangleExercise :
    step.geoKind === "parallelogram" ? PlacementParallelogramExercise :
    step.geoKind === "trapezoid" ? PlacementTrapezoidExercise :
    step.geoKind === "circle" ? PlacementCircleExercise :
    PlacementRhombusExercise;

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {step.exNum}</h2>
      <ExerciseComponent {...common} />
    </div>
  );
}

function buildSteps(lessons: MathSubmoduleLesson[], withEval: boolean): FlatStep[] {
  const steps: FlatStep[] = [];
  for (const lesson of lessons) {
    steps.push({ kind: "theory", lesson });
    const sid = lesson.submoduleId;
    const geoPlacement = G3_GEO_PLACEMENT[sid];
    const volumePlacement = G5_VOLUME_PLACEMENT[sid];
    if (geoPlacement) {
      steps.push({ kind: "geo_placement", lesson, ...geoPlacement, exNum: 1 });
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "geo_placement", lesson, ...geoPlacement, exNum: 1 });
    } else if (volumePlacement) {
      const pushVolumeSet = () => {
        steps.push({ kind: "volume_placement", lesson, ...volumePlacement, exNum: 1, mode: "volume" });
        steps.push({ kind: "volume_placement", lesson, ...volumePlacement, exNum: 2, mode: "missing" });
        steps.push({ kind: "volume_placement", lesson, ...volumePlacement, exNum: 3, mode: "volume", decimals: true });
        steps.push({ kind: "volume_placement", lesson, ...volumePlacement, exNum: 4, mode: "missing", decimals: true });
      };
      pushVolumeSet();
      steps.push({ kind: "eval_start", lesson });
      pushVolumeSet();
    } else if (sid === "G5-10") {
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("volume", false, 1) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("volume", true, 2) });
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("volume", false, 1) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("volume", true, 2) });
    } else if (sid === "G2-1") {
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("length", false, 1) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("length", true, 2) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("area", false, 3) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("area", true, 4) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("volume", false, 5) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("volume", true, 6) });
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("length", false, 1) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("length", true, 2) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("area", false, 3) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("area", true, 4) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("volume", false, 5) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("volume", true, 6) });
    } else if (sid === "G2-2") {
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("capacity", false, 1) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("capacity", true, 2) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("mass", false, 3) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("mass", true, 4) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("time", false, 5) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("time", true, 6) });
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("capacity", false, 1) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("capacity", true, 2) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("mass", false, 3) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("mass", true, 4) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("time", false, 5) });
      steps.push({ kind: "unit_conversion", lesson, config: genUnitConversion("time", true, 6) });
    } else if (sid === "A2-1" || sid === "A2-2") {
      const op: ArithOp = sid === "A2-1" ? "+" : "-";
      // EntraÃ®nement 1â€“8
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 9], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 9], 2, false, 60) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 9], 3, true) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 99], 4) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 99], 5, false, 60) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 99], 6, true) });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid(op, true, 7) });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid(op, false, 8) });
      // Comparaison (avant Ã©valuation)
      steps.push({ kind: "expr_comparison", lesson, config: genExprComp(op, [1, 99], 9) });
      steps.push({ kind: "expr_comparison", lesson, config: genExprComp(op, [100, 999], 10) });
      // Ã‰valuation â€” 5 exercices sur pages sÃ©parÃ©es
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 99], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 99], 2, true) });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid(op, true, 3, 2) });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid(op, false, 4, 2) });
      steps.push({ kind: "expr_comparison", lesson, config: { questions: [...genExprComp(op, [1, 99], 5, 2).questions, ...genExprComp(op, [100, 999], 5, 2).questions], exNum: 5, op } });
    } else if (sid === "A2-3") {
      // EntraÃ®nement arrondi/estimation
      steps.push({ kind: "rounding_group", lesson, config: genRounding("diz_near", 1, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("cent_near_new", 2, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_diz_2", 3, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_diz_large_2", 4, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_diz_three", 5, 5) });
      // Ã‰valuation
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("diz_near", 1, 3) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("cent_near_new", 2, 3) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_diz_2", 3, 3) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_diz_large_2", 4, 3) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_diz_three", 5, 3) });
    } else if (sid === "A2-4") {
      // ProblÃ¨mes â€” entraÃ®nement
      steps.push({ kind: "word_problems", lesson, config: genWP("a1", 1) });
      steps.push({ kind: "word_problems", lesson, config: genWP("a2", 2) });
      steps.push({ kind: "word_problems", lesson, config: genWP("b1", 3) });
      // Ã‰valuation
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "word_problems", lesson, config: genWP("a1", 1) });
      steps.push({ kind: "word_problems", lesson, config: genWP("a2", 2) });
      steps.push({ kind: "word_problems", lesson, config: genWP("b1", 3) });
    } else if (sid === "A3-1") {
      // Tables de multiplications â€” entraÃ®nement
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã—", [1, 12], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã—", [1, 12], 2, false, 60) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã—", [1, 12], 3, true) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã—", [1, 12], 4, true, 60) });
      // Ã‰valuation
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã—", [1, 12], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã—", [1, 12], 2) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã—", [1, 12], 3, true) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã—", [1, 12], 4, true) });
    } else if (sid === "A3-2") {
      // Multiplication en colonnes â€” entraÃ®nement
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid("Ã—", true, 1) });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid("Ã—", false, 2) });
      steps.push({ kind: "mul_two_digit", lesson, config: genMul2Digit(true, 3, 2) });
      steps.push({ kind: "mul_two_digit", lesson, config: genMul2Digit(false, 4, 2) });
      // Ã‰valuation
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid("Ã—", true, 1, 2) });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid("Ã—", false, 2, 2) });
      steps.push({ kind: "mul_two_digit", lesson, config: genMul2Digit(true, 3, 2) });
      steps.push({ kind: "mul_two_digit", lesson, config: genMul2Digit(false, 4, 2) });
    } else if (sid === "A3-3") {
      // Tables de divisions â€” entraÃ®nement
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã·", [1, 12], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã·", [1, 12], 2, false, 60) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã·", [1, 12], 3, true) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã·", [1, 12], 4, true, 60) });
      // Ã‰valuation
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã·", [1, 12], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã·", [1, 12], 2) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã·", [1, 12], 3, true) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("Ã·", [1, 12], 4, true) });
    } else if (sid === "A3-4") {
      // Division en colonnes â€” entraÃ®nement
      steps.push({ kind: "div_column_grid", lesson, config: genDivColumnGrid(4, 1, true, 1) });
      steps.push({ kind: "div_column_grid", lesson, config: genDivColumnGrid(5, 2, true, 2) });
      steps.push({ kind: "div_column_grid", lesson, config: genDivColumnGrid(4, 1, false, 3) });
      steps.push({ kind: "div_column_grid", lesson, config: genDivColumnGrid(5, 2, false, 4) });
      // Ã‰valuation
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "div_column_grid", lesson, config: genDivColumnGrid(4, 1, false, 1) });
      steps.push({ kind: "div_column_grid", lesson, config: genDivColumnGrid(5, 2, false, 2) });
    } else if (sid === "A4-1") {
      steps.push({ kind: "frac_id", lesson, config: genFracId(1) });
      steps.push({ kind: "frac_equiv", lesson, config: genFracEquiv([2, 144], 2) });
      steps.push({ kind: "frac_equiv", lesson, config: genFracEquiv([2, 999], 3) });
      steps.push({ kind: "frac_simplify", lesson, config: genFracSimplify([2, 144], 4) });
      steps.push({ kind: "frac_simplify", lesson, config: genFracSimplify([2, 999], 5) });
    } else if (sid === "A4-2") {
      steps.push({ kind: "frac_simplify", lesson, config: genFracSimplify([2, 144], 1) });
      steps.push({ kind: "frac_simplify", lesson, config: genFracSimplify([2, 999], 2) });
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "frac_simplify", lesson, config: genFracSimplify([2, 144], 1, 3) });
      steps.push({ kind: "frac_simplify", lesson, config: genFracSimplify([2, 999], 2, 3) });
    } else if (sid === "A4-3") {
      steps.push({ kind: "frac_compare", lesson, config: genFracCompare("same_den", [1, 100], 1) });
      steps.push({ kind: "frac_compare", lesson, config: genFracCompare("same_num", [1, 100], 2) });
      steps.push({ kind: "frac_compare", lesson, config: genFracCompare("random", [1, 10], 3) });
      steps.push({ kind: "frac_compare", lesson, config: genFracCompare("random", [1, 100], 4) });
    } else if (sid === "A1-3") {
      steps.push({ kind: "comparison_ex", lesson, config: genComparisonConfig(1) });
      steps.push({ kind: "comparison_ex", lesson, config: genComparisonConfig(2) });
      steps.push({ kind: "number_select", lesson, config: genNumberSelect("gt", 3) });
      steps.push({ kind: "number_select", lesson, config: genNumberSelect("lt", 4) });
      steps.push({ kind: "number_select", lesson, config: genNumberSelect("between", 5) });
      steps.push({ kind: "encadrement", lesson, config: genEncadrement(10, 6) });
      steps.push({ kind: "encadrement", lesson, config: genEncadrement(100, 7) });
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "number_select", lesson, config: genNumberSelect(Math.random() < 0.5 ? "gt" : "lt", 1) });
      steps.push({ kind: "number_select", lesson, config: genNumberSelect(Math.random() < 0.5 ? "gt" : "lt", 2) });
      steps.push({ kind: "number_select", lesson, config: genNumberSelect("between", 3) });
      steps.push({ kind: "encadrement", lesson, config: genEncadrement(10, 4, 3) });
      steps.push({ kind: "encadrement", lesson, config: genEncadrement(100, 5, 3) });
    } else if (sid === "A1-4") {
      steps.push({ kind: "odd_even", lesson, config: genOddEven(1) });
      steps.push({ kind: "nl_multi", lesson, config: { questions: genNLFine(2).map(c => ({ nlConfig: c, mode: "read" as const })), exNum: 2, consigne: "Ã‰crivez le nombre indiquÃ© par la flÃ¨che.", noFeedback: true } });
      steps.push({ kind: "nl_multi", lesson, config: { questions: genNLCoarse(2).map(c => ({ nlConfig: c, mode: "read" as const })), exNum: 3, consigne: "Ã‰crivez le nombre indiquÃ© par la flÃ¨che.", noFeedback: true } });
      steps.push({ kind: "nl_multi", lesson, config: { questions: [...genNLFine(1).map(c => ({ nlConfig: c, mode: "less" as const })), ...genNLCoarse(1).map(c => ({ nlConfig: c, mode: "less" as const }))], exNum: 4, consigne: "Ã‰crivez un nombre plus petit que le nombre indiquÃ© par la flÃ¨che.", noFeedback: true } });
      steps.push({ kind: "nl_multi", lesson, config: { questions: [...genNLFine(1).map(c => ({ nlConfig: c, mode: "more" as const })), ...genNLCoarse(1).map(c => ({ nlConfig: c, mode: "more" as const }))], exNum: 5, consigne: "Ã‰crivez un nombre plus grand que le nombre indiquÃ© par la flÃ¨che.", noFeedback: true } });
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "odd_even", lesson, config: genOddEven(1) });
      steps.push({ kind: "nl_multi", lesson, config: { questions: [...genNLFine(1).map(c => ({ nlConfig: c, mode: "read" as const })), ...genNLCoarse(1).map(c => ({ nlConfig: c, mode: "read" as const }))], exNum: 2, consigne: "Ã‰crivez le nombre indiquÃ© par la flÃ¨che.", noFeedback: true } });
      steps.push({ kind: "nl_multi", lesson, config: { questions: [...genNLFine(1).map(c => ({ nlConfig: c, mode: "less" as const })), ...genNLCoarse(1).map(c => ({ nlConfig: c, mode: "less" as const }))], exNum: 3, consigne: "Ã‰crivez un nombre plus petit que le nombre indiquÃ© par la flÃ¨che.", noFeedback: true } });
      steps.push({ kind: "nl_multi", lesson, config: { questions: [...genNLFine(1).map(c => ({ nlConfig: c, mode: "more" as const })), ...genNLCoarse(1).map(c => ({ nlConfig: c, mode: "more" as const }))], exNum: 4, consigne: "Ã‰crivez un nombre plus grand que le nombre indiquÃ© par la flÃ¨che.", noFeedback: true } });
    } else if (sid === "A1-5") {
      steps.push({ kind: "ordering", lesson, config: genOrdering("asc", 1) });
      steps.push({ kind: "ordering", lesson, config: genOrdering("desc", 2) });
      steps.push({ kind: "seq_rule", lesson, config: { questions: genSeqRule([1, 99], 3).questions, exNum: 3 } });
      steps.push({ kind: "seq_rule", lesson, config: { questions: genSeqRule([1000, 9999], 4, 5, 3).questions, exNum: 4 } });
      steps.push({ kind: "seq_complete", lesson, config: { questions: genSeqComplete([1, 100], 5, 5, -1, 6).questions, exNum: 5 } });
      steps.push({ kind: "seq_complete", lesson, config: { questions: genSeqComplete([1, 999], 6, 5, -1).questions, exNum: 6 } });
      steps.push({ kind: "eval_start", lesson });
      const ascFirst = Math.random() < 0.5;
      steps.push({ kind: "ordering", lesson, config: genOrdering(ascFirst ? "asc" : "desc", 1) });
      steps.push({ kind: "ordering", lesson, config: genOrdering(ascFirst ? "desc" : "asc", 2) });
      steps.push({ kind: "seq_rule", lesson, config: { questions: [...genSeqRule([1, 99], 4, 1, 3).questions, ...genSeqRule([1, 999], 4, 2, 3).questions, ...genSeqRule([1, 9999], 4, 2, 3).questions], exNum: 4 } });
      steps.push({ kind: "seq_complete", lesson, config: { questions: [...genSeqComplete([1, 99], 5, 1, -1).questions, ...genSeqComplete([1, 999], 5, 2, -1).questions, ...genSeqComplete([1, 9999], 5, 2, -1).questions], exNum: 5 } });
    } else if (sid === "A5-3") {
      steps.push({ kind: "rounding_group", lesson, config: genRounding("dec_dix", 1, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("dec_cent", 2, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("dec_unit", 3, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("dec_mixed", 4, 5) });
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("dec_dix", 1, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("dec_cent", 2, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("dec_unit", 3, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("dec_mixed", 4, 5) });
    } else if (sid === "A5-2") {
      steps.push({ kind: "dec_ordering", lesson, config: genDecOrdering("asc", 1) });
      steps.push({ kind: "dec_ordering", lesson, config: genDecOrdering("desc", 2) });
      steps.push({ kind: "dec_seq_rule", lesson, config: genDecSeqRule(3, 5, 3) });
      steps.push({ kind: "dec_seq_rule", lesson, config: genDecSeqRule(4, 5, 3) });
      steps.push({ kind: "dec_seq_complete", lesson, config: genDecSeqComplete(5, 5, -1, 5) });
      steps.push({ kind: "eval_start", lesson });
      const ascFirst52 = Math.random() < 0.5;
      steps.push({ kind: "dec_ordering", lesson, config: genDecOrdering(ascFirst52 ? "asc" : "desc", 1) });
      steps.push({ kind: "dec_ordering", lesson, config: genDecOrdering(ascFirst52 ? "desc" : "asc", 2) });
      steps.push({ kind: "dec_seq_rule", lesson, config: genDecSeqRule(3, 5, 4) });
      steps.push({ kind: "dec_seq_complete", lesson, config: genDecSeqComplete(4, 5, -1, 5) });
    } else if (sid === "A3-5") {
      // Training
      steps.push({ kind: "mult_select", lesson, config: genMultSelect(1) });
      steps.push({ kind: "mult_list", lesson, config: genMultList(2) });
      steps.push({ kind: "true_false_mult_div", lesson, config: genTrueFalseMultDiv(3) });
      steps.push({ kind: "find_divisors", lesson, config: genFindDivisors(4) });
      steps.push({ kind: "div_select", lesson, config: genDivSelect(5) });
      steps.push({ kind: "div_by", lesson, config: genDivBy(6) });
      steps.push({ kind: "missing_digit_div", lesson, config: genMissingDigitDiv(7) });
      // Eval
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "mult_select", lesson, config: genMultSelect(1) });
      steps.push({ kind: "mult_list", lesson, config: genMultList(2) });
      steps.push({ kind: "true_false_mult_div", lesson, config: genTrueFalseMultDiv(3) });
      steps.push({ kind: "find_divisors", lesson, config: genFindDivisors(4) });
      steps.push({ kind: "div_select", lesson, config: genDivSelect(5) });
      steps.push({ kind: "div_by", lesson, config: genDivBy(6) });
      steps.push({ kind: "missing_digit_div", lesson, config: genMissingDigitDiv(7) });
    } else if (sid === "A3-6") {
      // Training
      steps.push({ kind: "gcd_lcm", lesson, config: genGcdLcm("pgcd", 2, 1) });
      steps.push({ kind: "gcd_lcm", lesson, config: genGcdLcm("ppmc", 2, 2) });
      steps.push({ kind: "gcd_lcm", lesson, config: genGcdLcm("pgcd", 3, 3) });
      steps.push({ kind: "gcd_lcm", lesson, config: genGcdLcm("ppmc", 3, 4) });
      steps.push({ kind: "true_false_gcd_lcm", lesson, config: genTrueFalseGcdLcm(5) });
      // Eval
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "gcd_lcm", lesson, config: genGcdLcm("pgcd", 2, 1) });
      steps.push({ kind: "gcd_lcm", lesson, config: genGcdLcm("ppmc", 2, 2) });
      steps.push({ kind: "gcd_lcm", lesson, config: genGcdLcm("pgcd", 3, 3) });
      steps.push({ kind: "gcd_lcm", lesson, config: genGcdLcm("ppmc", 3, 4) });
      steps.push({ kind: "true_false_gcd_lcm", lesson, config: genTrueFalseGcdLcm(5) });
    } else {
      if (sid !== "A1-3" && sid !== "A1-4" && sid !== "A1-5" && sid !== "A5-2") {
        const pool = lesson.exercisePool;
        const size = lesson.poolSize ?? 5;
        const exercises = pool && pool.length > 0 ? shufflePick(pool, size) : lesson.exercises.slice(0, size);
        for (const item of exercises) steps.push({ kind: "exercise", lesson, item });
      }
    }
  }
  const hasDrillsNoPassToggle = lessons.some(l =>
    l.submoduleId === "A2-1" || l.submoduleId === "A2-2" ||
    l.submoduleId === "A2-3" || l.submoduleId === "A2-4" || l.submoduleId === "A3-1" || l.submoduleId === "A3-2" ||
    l.submoduleId === "A3-3" || l.submoduleId === "A3-4" || l.submoduleId === "A4-2" ||
    l.submoduleId === "A1-3" || l.submoduleId === "A1-4" || l.submoduleId === "A1-5" ||
    l.submoduleId === "A5-2" || l.submoduleId === "A5-3" ||
    l.submoduleId === "A3-5" || l.submoduleId === "A3-6" ||
    l.submoduleId === "G2-1" || l.submoduleId === "G2-2" ||
    l.submoduleId === "G5-10" ||
    !!G3_GEO_PLACEMENT[l.submoduleId] ||
    !!G5_VOLUME_PLACEMENT[l.submoduleId]
  );
  if (withEval && lessons.length > 0 && !hasDrillsNoPassToggle) {
    const lastLesson = lessons[lessons.length - 1]!;
    steps.push({ kind: "eval_start", lesson: lastLesson });
    steps.push({ kind: "pass_toggle", lesson: lastLesson });
  }
  // A2-1/A2-2/A2-3/A3-1/A3-2/A3-3/A3-4/A4-2: eval_start + eval exercises already pushed above; no pass_toggle
  return steps;
}

// â”€â”€ Power table block â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const POWER_PAIRS: Array<[number, number | null]> = [[2,3],[4,5],[6,7],[8,9],[10,null]];
const SUPS: Record<number, string> = {1:"Â¹",2:"Â²",3:"Â³",4:"â´",5:"âµ"};

function PowerTableBlock() {
  const [pair, setPair] = useState<[number, number | null]>(POWER_PAIRS[0]!);
  const [a, b] = pair;
  return (
    <div className="space-y-3">
      <div className="flex overflow-hidden rounded-xl border border-[var(--color-border-default)]">
        {POWER_PAIRS.map(([x, y], idx) => (
          <button key={x} type="button" onClick={() => setPair([x, y])}
            className={`flex-1 px-2 py-1.5 text-sm font-bold transition-colors ${
              idx > 0 ? "border-l border-[var(--color-border-default)]" : ""
            } ${
              pair[0] === x
                ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
            }`}
          >
            {y !== null ? `${x}â€“${y}` : String(x)}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
        <table className="w-full text-sm">
          <tbody>
            {[1,2,3,4,5].map(n => (
              <tr key={n} className={n % 2 === 0 ? "bg-[var(--color-bg-secondary)]/40" : "bg-[var(--color-bg-primary)]"}>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{a}{SUPS[n]}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">=</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{Math.pow(a, n)}</td>
                {b !== null ? (
                  <>
                    <td className="w-6" />
                    <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{b}{SUPS[n]}</td>
                    <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">=</td>
                    <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{Math.pow(b, n)}</td>
                  </>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// â”€â”€ Multiplication table block â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const MULT_PAIRS: [number, number][] = [[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]];

function MultiplicationTableBlock() {
  const [pair, setPair] = useState<[number, number]>(MULT_PAIRS[0]!);
  const [a, b] = pair;
  return (
    <div className="space-y-3">
      <div className="flex overflow-hidden rounded-xl border border-[var(--color-border-default)]">
        {MULT_PAIRS.map(([x, y], idx) => (
          <button
            key={`${x}-${y}`}
            type="button"
            onClick={() => setPair([x, y])}
            className={`flex-1 px-2 py-1.5 text-sm font-bold transition-colors ${
              idx > 0 ? "border-l border-[var(--color-border-default)]" : ""
            } ${
              pair[0] === x
                ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
            }`}
          >
            {x}â€“{y}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
        <table className="w-full text-sm">
          <tbody>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <tr key={n} className={n % 2 === 0 ? "bg-[var(--color-bg-secondary)]/40" : "bg-[var(--color-bg-primary)]"}>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{a}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">Ã—</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{n}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">=</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{a * n}</td>
                <td className="w-6" />
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{b}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">Ã—</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{n}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">=</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{b * n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DivisionTableBlock() {
  const [pair, setPair] = useState<[number, number]>(MULT_PAIRS[0]!);
  const [a, b] = pair;
  return (
    <div className="space-y-3">
      <div className="flex overflow-hidden rounded-xl border border-[var(--color-border-default)]">
        {MULT_PAIRS.map(([x, y], idx) => (
          <button
            key={`${x}-${y}`}
            type="button"
            onClick={() => setPair([x, y])}
            className={`flex-1 px-2 py-1.5 text-sm font-bold transition-colors ${
              idx > 0 ? "border-l border-[var(--color-border-default)]" : ""
            } ${
              pair[0] === x
                ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
            }`}
          >
            {x}â€“{y}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
        <table className="w-full text-sm">
          <tbody>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <tr key={n} className={n % 2 === 0 ? "bg-[var(--color-bg-secondary)]/40" : "bg-[var(--color-bg-primary)]"}>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{a * n}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">Ã·</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{a}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">=</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{n}</td>
                <td className="w-6" />
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{b * n}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">Ã·</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{b}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">=</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// â”€â”€ Rich block renderer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function MulDemoGrid({ a, b, op, carries, result, prevCarries, prevResult }: {
  a: number[]; b: number[]; op: string;
  carries: (number | null)[]; result: (number | null)[];
  prevCarries?: (number | null)[] | null;
  prevResult?: (number | null)[] | null;
}) {
  const COL_LABELS = ["M", "C", "D", "U"];
  const firstNzA = a.findIndex(d => d !== 0);
  const firstNzB = b.findIndex(d => d !== 0);
  const isNewC = (i: number) => carries[i] !== null && (prevCarries == null || prevCarries[i] === null);
  const isNewR = (i: number) => result[i] !== null && (prevResult == null || prevResult[i] === null);
  return (
    <table className="border-collapse shrink-0">
      <thead>
        <tr>
          <td className="w-6" />
          {COL_LABELS.map(h => (
            <th key={h} className="w-8 text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R</td>
          {carries.map((c, ci) => (
            <td key={ci} className="text-center">
              <div className={`h-5 w-8 flex items-center justify-center font-mono text-[10px] font-bold ${isNewC(ci) ? "text-orange-500" : "text-orange-300"}`}>
                {c !== null ? c : ""}
              </div>
            </td>
          ))}
        </tr>
        <tr>
          <td />
          {a.map((d, di) => (
            <td key={di} className="text-center">
              <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">
                {di < firstNzA ? "" : d}
              </div>
            </td>
          ))}
        </tr>
        <tr>
          <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">{op}</td>
          {b.map((d, di) => (
            <td key={di} className="text-center">
              <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">
                {di < firstNzB ? "" : d}
              </div>
            </td>
          ))}
        </tr>
        <tr><td colSpan={5}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
        <tr>
          <td />
          {result.map((d, di) => (
            <td key={di} className="text-center">
              <div className={`h-8 w-8 flex items-center justify-center font-mono text-base rounded border ${
                d !== null
                  ? isNewR(di)
                    ? "border-[var(--color-border-default)] text-[var(--color-accent-alg)] font-bold"
                    : "border-[var(--color-border-default)] text-[var(--color-text-secondary)]"
                  : "border-dashed border-[var(--color-border-default)] text-transparent"
              }`}>
                {d !== null ? d : "0"}
              </div>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

function Mul2DemoGrid({ a, b, result: totalResult, carries1, carries2, p1, p2shifted, res,
  prevCarries1, prevCarries2, prevP1, prevP2shifted, prevRes, decimalPos }: {
  a: number[]; b: number[]; result: number;
  carries1: (number | null)[];
  carries2: (number | null)[];
  p1: (number | null)[];
  p2shifted: (number | null)[];
  res: (number | null)[];
  prevCarries1?: (number | null)[] | null;
  prevCarries2?: (number | null)[] | null;
  prevP1?: (number | null)[] | null;
  prevP2shifted?: (number | null)[] | null;
  prevRes?: (number | null)[] | null;
  decimalPos?: number;
}) {
  const numCols = totalResult > 9999 ? 5 : 4;
  const colStart = 5 - numCols;
  const visibleCols = Array.from({length: numCols}, (_, i) => colStart + i);
  const COL5 = ["DM","M","C","D","U"];
  const colLabels = COL5.slice(colStart);
  const totalSpan = numCols + 1;
  const firstNzA = a.findIndex(d => d !== 0);
  const firstNzB = b.findIndex(d => d !== 0);

  const isNew = (arr: (number|null)[], prev: (number|null)[]|null|undefined, col: number) =>
    arr[col] !== null && (prev == null || prev[col] === null);

  const staticCell = (val: number | null, isNewFlag?: boolean, commaAfter?: boolean) => (
    <div className="relative">
      <div className={`h-8 w-8 flex items-center justify-center font-mono text-base rounded border ${
        val !== null
          ? isNewFlag
            ? "border-[var(--color-border-default)] text-[var(--color-accent-alg)] font-bold"
            : "border-[var(--color-border-default)] text-[var(--color-text-secondary)]"
          : "border-transparent text-transparent"
      }`}>
        {val !== null ? val : ""}
      </div>
      {commaAfter && val !== null && (
        <span className="absolute -right-2 top-0 h-full flex items-center font-mono text-base font-bold text-[var(--color-accent-alg)]">,</span>
      )}
    </div>
  );

  const carryCell = (val: number | null, isNewFlag?: boolean) => (
    <div className={`h-5 w-8 flex items-center justify-center font-mono text-[10px] font-bold ${isNewFlag ? "text-orange-500" : "text-orange-300"}`}>
      {val !== null ? val : ""}
    </div>
  );

  return (
    <table className="border-collapse shrink-0">
      <thead>
        <tr>
          <td className="w-6" />
          {colLabels.map(h => (
            <th key={h} className="w-8 text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* R2 */}
        <tr>
          <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R2</td>
          {visibleCols.map(col => <td key={col} className="text-center">{carryCell(carries2[col] ?? null, isNew(carries2, prevCarries2, col))}</td>)}
        </tr>
        {/* R1 */}
        <tr>
          <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R1</td>
          {visibleCols.map(col => <td key={col} className="text-center">{carryCell(carries1[col] ?? null, isNew(carries1, prevCarries1, col))}</td>)}
        </tr>
        {/* Operand a */}
        <tr>
          <td />
          {visibleCols.map(col => (
            <td key={col} className="text-center">
              <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">
                {col < firstNzA ? "" : a[col]}
              </div>
            </td>
          ))}
        </tr>
        {/* Operand b */}
        <tr>
          <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">Ã—</td>
          {visibleCols.map(col => (
            <td key={col} className="text-center">
              <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">
                {col < firstNzB ? "" : b[col]}
              </div>
            </td>
          ))}
        </tr>
        {/* Separator 1 */}
        <tr><td colSpan={totalSpan}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
        {/* p1 */}
        <tr>
          <td />
          {visibleCols.map(col => <td key={col} className="text-center">{staticCell(p1[col] ?? null, isNew(p1, prevP1, col))}</td>)}
        </tr>
        {/* p2shifted */}
        <tr>
          <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-primary)]">+</td>
          {visibleCols.map(col => {
            if (col === 4) {
              return (
                <td key={col} className="text-center">
                  <div className="flex h-8 w-8 items-center justify-center font-mono text-base font-bold text-[var(--color-accent-alg)] opacity-60">0</div>
                </td>
              );
            }
            return <td key={col} className="text-center">{staticCell(p2shifted[col] ?? null, isNew(p2shifted, prevP2shifted, col))}</td>;
          })}
        </tr>
        {/* Separator 2 */}
        <tr><td colSpan={totalSpan}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
        {/* Result */}
        <tr>
          <td />
          {visibleCols.map((col, vIdx) => <td key={col} className="text-center">{staticCell(res[col] ?? null, isNew(res, prevRes, col), decimalPos !== undefined && vIdx === numCols - decimalPos - 1)}</td>)}
        </tr>
      </tbody>
    </table>
  );
}

function DivDemoGrid({ dividend, divisor, stepsComplete }: {
  dividend: number; divisor: number; stepsComplete: number;
}) {
  const COL4 = ["M","C","D","U"];
  const BSEP: React.CSSProperties = { borderLeft: "2px solid var(--color-text-primary)" };
  const dividendCols = 4;
  const quotientCols = 4;
  const dividendStr = dividend.toString().padStart(dividendCols, "0");
  const divisorStr  = divisor.toString();

  const divSteps = computeDivSteps(dividend, divisor);
  const quotient    = Math.floor(dividend / divisor);
  const remainder   = dividend % divisor;
  const quotientStr = quotient.toString();
  const quotientLen = quotientStr.length;

  const showCell = (val: string | number, accent?: boolean) => (
    <div className={`h-8 w-8 flex items-center justify-center font-mono text-base ${
      accent ? "font-bold text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"
    }`}>{String(val)}</div>
  );
  const emptyCell = () => <div className="h-8 w-8" />;
  const showCellNew = (val: string | number) => (
    <div className="h-8 w-8 flex items-center justify-center font-mono text-base font-bold text-[var(--color-accent-alg)]">{String(val)}</div>
  );
  const showCellOld = (val: string | number) => (
    <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-secondary)]">{String(val)}</div>
  );

  function StaticWorkRow({ numStr, colEnd, fresh }: { numStr: string; colEnd: number; fresh?: boolean }) {
    const startCol = colEnd - numStr.length + 1;
    return (
      <>
        {Array.from({ length: dividendCols }, (_, col) => {
          const ri = col - startCol;
          const has = ri >= 0 && ri < numStr.length;
          return (
            <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
              {has ? (fresh ? showCellNew(numStr[ri]!) : showCellOld(numStr[ri]!)) : emptyCell()}
            </td>
          );
        })}
      </>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="border-collapse table-fixed mx-auto">
        <tbody>
          <tr>
            <td style={{ width: 20, padding: 0 }} />
            {COL4.map((lbl, i) => (
              <td key={i} style={{ width: CELL_W, padding: 0 }}
                className="text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{lbl}</td>
            ))}
            {Array.from({ length: quotientCols }, (_, i) => (
              <td key={i} style={{ width: CELL_W, padding: 0, ...(i === 0 ? BSEP : {}) }} />
            ))}
          </tr>
          <tr>
            <td style={{ padding: 0 }} />
            {Array.from({ length: dividendCols }, (_, i) => {
              const isLeading = i < dividendCols - dividend.toString().length;
              return (
                <td key={i} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                  {isLeading ? emptyCell() : showCell(dividendStr[i]!)}
                </td>
              );
            })}
            {Array.from({ length: quotientCols }, (_, i) => {
              const isDivCol = i < divisorStr.length;
              return (
                <td key={i} style={{
                  width: CELL_W, padding: 2,
                  ...(i === 0 ? BSEP : {}),
                  ...(isDivCol ? { borderBottom: "2px solid var(--color-text-primary)" } : {}),
                }} className="align-middle text-center">
                  {isDivCol ? showCell(divisorStr[i]!) : null}
                </td>
              );
            })}
          </tr>

          {divSteps.slice(0, stepsComplete).map((step, si) => {
            const pdStr = step.partialDiv.toString();
            const prStr = step.product.toString();
            const lineStart = Math.min(step.colEnd - pdStr.length + 1, step.colEnd - prStr.length + 1);
            const lineEnd   = step.colEnd;
            const fresh = si === stepsComplete - 1;
            return (
              <Fragment key={si}>
                <tr>
                  <td style={{ padding: 0 }} />
                  <StaticWorkRow numStr={pdStr} colEnd={step.colEnd} fresh={fresh} />
                  {si === 0
                    ? Array.from({ length: quotientCols }, (_, qi) => {
                        const revealed = qi < stepsComplete && qi < quotientLen;
                        const isEmpty  = qi >= quotientLen;
                        const isNewQ   = qi === stepsComplete - 1 && qi < quotientLen;
                        return (
                          <td key={qi} style={{ width: CELL_W, padding: 2, ...(qi === 0 ? BSEP : {}) }}
                            className="align-middle text-center">
                            {isEmpty ? emptyCell() : revealed
                              ? (isNewQ ? showCellNew(quotientStr[qi]!) : showCellOld(quotientStr[qi]!))
                              : emptyCell()}
                          </td>
                        );
                      })
                    : <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                  }
                </tr>
                <tr>
                  <td style={{ padding:0, textAlign:"center", verticalAlign:"middle", fontSize:14, color:"var(--color-text-secondary)" }}>âˆ’</td>
                  <StaticWorkRow numStr={prStr} colEnd={step.colEnd} fresh={fresh} />
                  <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                </tr>
                <tr>
                  <td style={{ padding: 0 }} />
                  {Array.from({ length: dividendCols }, (_, col) => (
                    <td key={col} style={{ padding: 0, width: CELL_W }}>
                      {col >= lineStart && col <= lineEnd
                        ? <div className="h-px bg-[var(--color-text-primary)] opacity-50 my-1" />
                        : null}
                    </td>
                  ))}
                  <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                </tr>
              </Fragment>
            );
          })}

          {stepsComplete >= divSteps.length && divSteps.length > 0 && (
            <tr>
              <td colSpan={dividendCols} style={{ padding:"4px 6px 4px 0", textAlign:"right", verticalAlign:"middle", fontSize:12, color:"var(--color-text-secondary)", whiteSpace:"nowrap" }}>
                Reste :
              </td>
              <td style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                {showCell(remainder, true)}
              </td>
              <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function AddDemoGrid({ colLabels, op, carryLabel = "R", a, b, carries, result, prevCarries, prevResult }: {
  colLabels: string[];
  op: string;
  carryLabel?: string;
  a: (number | null)[];
  b: (number | null)[];
  carries: (number | null)[];
  result: (number | null)[];
  prevCarries?: (number | null)[] | null;
  prevResult?: (number | null)[] | null;
}) {
  const isComma = (i: number) => colLabels[i] === ",";
  const isNewC = (i: number) => !isComma(i) && carries[i] !== null && (prevCarries == null || prevCarries[i] === null);
  const isNewR = (i: number) => !isComma(i) && result[i] !== null && (prevResult == null || prevResult[i] === null);
  return (
    <table className="border-collapse shrink-0">
      <thead>
        <tr>
          <td className="w-6" />
          {colLabels.map((lbl, i) => (
            <th key={i} style={{ width: lbl === "," ? 14 : 32 }}
              className="text-center text-[10px] font-bold text-[var(--color-accent-alg)]">
              {lbl === "," ? "" : lbl}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Carry/borrow row */}
        <tr>
          <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">{carryLabel}</td>
          {carries.map((c, ci) => (
            <td key={ci} className="text-center">
              {isComma(ci) ? <div style={{ width: 14 }} /> : (
                <div className={`h-5 w-8 flex items-center justify-center font-mono text-[10px] font-bold ${isNewC(ci) ? "text-orange-500" : "text-orange-300"}`}>
                  {c !== null ? c : ""}
                </div>
              )}
            </td>
          ))}
        </tr>
        {/* Operand a */}
        <tr>
          <td />
          {a.map((d, di) => (
            <td key={di} className="text-center">
              {isComma(di)
                ? <div style={{ width: 14 }} className="h-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">,</div>
                : <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">{d !== null ? d : ""}</div>
              }
            </td>
          ))}
        </tr>
        {/* Operand b with operator */}
        <tr>
          <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">{op}</td>
          {b.map((d, di) => (
            <td key={di} className="text-center">
              {isComma(di)
                ? <div style={{ width: 14 }} className="h-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">,</div>
                : <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">{d !== null ? d : ""}</div>
              }
            </td>
          ))}
        </tr>
        {/* Separator */}
        <tr>
          <td colSpan={colLabels.length + 1}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td>
        </tr>
        {/* Result */}
        <tr>
          <td />
          {result.map((d, di) => (
            <td key={di} className="text-center">
              {isComma(di)
                ? <div style={{ width: 14 }} className="h-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">,</div>
                : <div className={`h-8 w-8 flex items-center justify-center font-mono text-base rounded border ${
                    d !== null
                      ? isNewR(di)
                        ? "border-[var(--color-border-default)] text-[var(--color-accent-alg)] font-bold"
                        : "border-[var(--color-border-default)] text-[var(--color-text-secondary)]"
                      : "border-dashed border-[var(--color-border-default)] text-transparent"
                  }`}>
                    {d !== null ? d : "0"}
                  </div>
              }
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

function BlockView({ block, blockIdx, tradBlocks, pivot, showPivot }: {
  block: MathRichBlock;
  blockIdx?: number;
  tradBlocks?: BlockTrad[];
  pivot: PivotCode;
  showPivot: boolean;
}) {
  const bt = blockIdx !== undefined ? tradBlocks?.[blockIdx] : undefined;
  const pivotText = bt?.text?.[pivot];
  const isRtl = pivot === "ar" || pivot === "fa";
  const usePivot = showPivot;
  const textFor = (fr: string | undefined, pv?: string) => usePivot && pv ? preserveEvidence(fr, pv) : (fr ?? "");
  const itemsFor = (fr: string[], pv?: string[]) => usePivot && pv?.length ? pv.map((item, i) => preserveEvidence(fr[i], item)) : fr;
  const headersFor = (fr: string[], pv?: string[]) => usePivot && pv?.length ? pv : fr;
  const captionFor = (fr?: string, pv?: string) => usePivot && pv ? pv : fr;
  const stepTextFor = (step: { numFr: string; textsFr: string[] }, stepIdx: number) => {
    const raw = bt?.items?.[pivot]?.[stepIdx];
    if (!usePivot || !raw) return { title: step.numFr, texts: step.textsFr };
    const [title, ...texts] = raw.split("||");
    return {
      title: preserveEvidence(step.numFr, title ?? step.numFr),
      texts: texts.length ? texts.map((text, i) => preserveEvidence(step.textsFr[i], text)) : step.textsFr,
    };
  };
  const textDir = usePivot && isRtl ? "rtl" : "ltr";
  const textLang = usePivot ? pivot : undefined;
  switch (block.type) {
    case "heading": {
      const pvHead = pivotText;
      const headingText = textFor(block.fr, pvHead);
      return block.black ? (
        <div>
          <h3 className="mt-3 mb-1 text-base font-bold text-[var(--color-text-primary)]" lang={textLang} dir={textDir}>{headingText}</h3>
        </div>
      ) : (
        <div>
          <h3 className="mt-4 mb-1 text-sm font-bold text-[var(--color-accent-alg)]" lang={textLang} dir={textDir}>{headingText}</h3>
        </div>
      );
    }
    case "plain":
      if (!block.fr) return <div className="h-3" />;
      const plainText = textFor(block.fr, pivotText);
      return (
        <div>
          <p className="text-sm leading-relaxed text-[var(--color-text-primary)]" lang={textLang} dir={textDir}>{renderText(plainText)}</p>
        </div>
      );
    case "note":
      const noteText = textFor(block.fr, pivotText ?? block.pivot?.[pivot]);
      return (
        <div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-xs text-blue-800 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300">
            <span lang={textLang} dir={textDir}>{renderText(noteText)}</span>
          </div>
        </div>
      );
    case "example":
      const exampleText = textFor(block.fr, pivotText ?? block.pivot?.[pivot]);
      return (
        <div>
          <div className="rounded-xl bg-[var(--color-bg-secondary)] px-4 py-3 font-mono text-xs text-[var(--color-text-primary)]" lang={textLang} dir={textDir}>
            {renderBold(exampleText)}
          </div>
        </div>
      );
    case "highlight":
      const highlightText = textFor(block.fr, pivotText ?? block.pivot?.[pivot]);
      return (
        <div>
          <p className="text-sm font-bold text-[var(--color-accent-alg)]" lang={textLang} dir={textDir}>{renderBold(highlightText)}</p>
        </div>
      );
    case "rule": {
      const pvLabel = bt?.label?.[pivot];
      const pvRule = block.pivot?.[pivot];
      const title = textFor(block.titleFr, pvLabel ?? bt?.text?.[pivot] ?? pvRule?.title);
      const items = itemsFor(block.itemsFr, bt?.items?.[pivot] ?? pvRule?.items);
      return (
        <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-4 py-3 space-y-2">
          <p className="text-xs font-bold text-[var(--color-text-primary)]" lang={textLang} dir={textDir}>{title}</p>
          <ul className="list-disc space-y-1 pl-4">
            {items.map((it, i) => (
              <li key={i} className="text-xs text-[var(--color-text-secondary)]" lang={textLang} dir={textDir}>
                {renderText(it)}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    case "table": {
      const tableHeaders = headersFor(block.headersFr, bt?.headers?.[pivot]);
      const tableCaption = captionFor(block.captionFr, bt?.caption?.[pivot]);
      const tableRows = showPivot && bt?.items?.[pivot]?.length
        ? bt.items[pivot]!.map((row) => row.split("|").map((cell) => cell.trim()))
        : block.rows;
      return (
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
          <table className="w-full text-sm">
            <thead>
              <tr className={block.accentHeader ? "bg-[var(--color-accent-alg)]/15" : "bg-[var(--color-bg-secondary)]"}>
                {tableHeaders.map((h, i) => (
                  <th key={i} className={`px-3 py-2 text-center text-xs font-bold ${block.accentHeader ? "uppercase tracking-wide text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-[var(--color-bg-primary)]" : "bg-[var(--color-bg-secondary)]/40"}>
                  {row.map((cell, ci) => {
                    const align = block.colAligns?.[ci] ?? block.textAlignRows ?? "center";
                    return (
                      <td key={ci} className={`px-3 py-2 text-sm text-[var(--color-text-primary)] ${align === "left" ? "text-left" : "text-center"}`} lang={textLang} dir={textDir}>
                        {cell.trim().split(/\n/).map((line, li) => (
                          <span key={li}>{li > 0 && <br />}{renderBold(line.trim())}</span>
                        ))}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          {tableCaption && (
            <p className="px-3 py-1 text-[10px] text-[var(--color-text-secondary)]" lang={textLang} dir={textDir}>{tableCaption}</p>
          )}
        </div>
      );
    }
    case "svg":
      const svgCaption = captionFor(block.captionFr, bt?.caption?.[pivot]);
      return block.noFrame ? (
        <div className="my-2">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {svgCaption && (
            <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]" lang={textLang} dir={textDir}>{svgCaption}</p>
          )}
        </div>
      ) : (
        <div className="my-1 overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-white p-3">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {svgCaption && (
            <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]" lang={textLang} dir={textDir}>{svgCaption}</p>
          )}
        </div>
      );
    case "section": {
      const label = textFor(block.labelFr, bt?.label?.[pivot]);
      const items = itemsFor(block.itemsFr, bt?.items?.[pivot]);
      return (
        <div className="space-y-1.5">
          {label && <p className="text-sm font-bold text-[var(--color-accent-alg)]" lang={textLang} dir={textDir}>{label}</p>}
          {items.length > 0 && (
            <ul className="space-y-1 border-l-2 border-[var(--color-accent-alg)]/30 pl-3">
              {items.map((item, ii) => (
                <li key={ii} className="text-sm leading-relaxed text-[var(--color-text-primary)]" lang={textLang} dir={textDir}>
                  {renderText(item)}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    case "bullets": {
      const label = textFor(block.labelFr, bt?.label?.[pivot]);
      const items = itemsFor(block.itemsFr, bt?.items?.[pivot]);
      return (
        <div className="space-y-1.5">
          {label && <p className="text-sm font-bold text-[var(--color-accent-alg)]" lang={textLang} dir={textDir}>{label}</p>}
          {items.length > 0 && (
            <ul className="space-y-1 pl-1">
              {items.map((item, ii) => (
                <li key={ii} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
                  <span className="mt-1 shrink-0 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-alg)]" />
                  <span lang={textLang} dir={textDir}>
                    {renderText(item ?? "")}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    case "svg_row":
      return (
        <div className="flex gap-3">
          {block.items.map((item, ii) => (
            <div key={ii} className="flex-1 overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-white p-3">
              <div dangerouslySetInnerHTML={{ __html: item.markup }} />
              {item.captionFr && (
                <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{item.captionFr}</p>
              )}
            </div>
          ))}
        </div>
      );
    case "power_table":
      return <PowerTableBlock />;
    case "mult_table":
      return <MultiplicationTableBlock />;
    case "div_table":
      return <DivisionTableBlock />;
    case "mul_step_cards":
      return (
        <div className="space-y-6">
          {block.steps.map((step, si) => {
            const prev = si > 0 ? block.steps[si - 1] : null;
            const stepText = stepTextFor(step, si);
            return (
              <div key={si} className="space-y-2">
                <p className="text-sm font-bold text-[var(--color-accent-alg)]" lang={textLang} dir={textDir}>{stepText.title}</p>
                <div className="border-l-2 border-[var(--color-accent-alg)] pl-3 space-y-0.5">
                  {stepText.texts.map((t, ti) => (
                    <p key={ti} className="text-sm leading-relaxed text-[var(--color-text-primary)]" lang={textLang} dir={textDir}>{renderText(t)}</p>
                  ))}
                </div>
                <MulDemoGrid
                  a={block.a} b={block.b} op={block.op}
                  carries={step.carries} result={step.result}
                  prevCarries={prev?.carries ?? null}
                  prevResult={prev?.result ?? null}
                />
              </div>
            );
          })}
        </div>
      );
    case "mul2_step_cards":
      return (
        <div className="space-y-6">
          {block.steps.map((step, si) => {
            const prev = si > 0 ? block.steps[si - 1] : null;
            const stepText = stepTextFor(step, si);
            return (
              <div key={si} className="space-y-2">
                <p className="text-sm font-bold text-[var(--color-accent-alg)]" lang={textLang} dir={textDir}>{stepText.title}</p>
                <div className="border-l-2 border-[var(--color-accent-alg)] pl-3 space-y-0.5">
                  {stepText.texts.map((t, ti) => (
                    <p key={ti} className="text-sm leading-relaxed text-[var(--color-text-primary)]" lang={textLang} dir={textDir}>{renderText(t)}</p>
                  ))}
                </div>
                <Mul2DemoGrid
                  a={block.a} b={block.b} result={block.result}
                  carries1={step.carries1} carries2={step.carries2}
                  p1={step.p1} p2shifted={step.p2shifted} res={step.res}
                  prevCarries1={prev?.carries1 ?? null}
                  prevCarries2={prev?.carries2 ?? null}
                  prevP1={prev?.p1 ?? null}
                  prevP2shifted={prev?.p2shifted ?? null}
                  prevRes={prev?.res ?? null}
                  decimalPos={block.decimalPos}
                />
              </div>
            );
          })}
        </div>
      );
    case "div_step_cards":
      return (
        <div className="space-y-6">
          {block.steps.map((step, si) => {
            const stepText = stepTextFor(step, si);
            return (
              <div key={si} className="space-y-2">
                <p className="text-sm font-bold text-[var(--color-accent-alg)]" lang={textLang} dir={textDir}>{stepText.title}</p>
                <div className="border-l-2 border-[var(--color-accent-alg)] pl-3 space-y-0.5">
                  {stepText.texts.map((t, ti) => (
                    <p key={ti} className="text-sm leading-relaxed text-[var(--color-text-primary)]" lang={textLang} dir={textDir}>{renderText(t)}</p>
                  ))}
                </div>
                <DivDemoGrid
                  dividend={block.dividend} divisor={block.divisor}
                  stepsComplete={step.stepsComplete}
                />
              </div>
            );
          })}
        </div>
      );
    case "add_step_cards":
      return (
        <div className="space-y-6">
          {block.steps.map((step, si) => {
            const prev = si > 0 ? block.steps[si - 1] : null;
            return (
              <div key={si} className="space-y-2">
                <p className="text-sm font-bold text-[var(--color-accent-alg)]">{step.numFr}</p>
                <div className="border-l-2 border-[var(--color-accent-alg)] pl-3 space-y-0.5">
                  {step.textsFr.map((t, ti) => (
                    <p key={ti} className="text-sm leading-relaxed text-[var(--color-text-primary)]">{t}</p>
                  ))}
                </div>
                <AddDemoGrid
                  colLabels={block.colLabels}
                  op={block.op}
                  carryLabel={block.carryLabel}
                  a={block.a}
                  b={block.b}
                  carries={step.carries}
                  result={step.result}
                  prevCarries={prev?.carries ?? null}
                  prevResult={prev?.result ?? null}
                />
              </div>
            );
          })}
        </div>
      );
    case "theory_tabs": {
      return <TheoryTabsBlock block={block} pivot={pivot} showPivot={showPivot} bt={bt} />;
    }
    case "shape_explorer":
      return <ShapeExplorerBlock block={block} pivot={pivot} showPivot={showPivot} />;
    default:
      return null;
  }
}

function TheoryTabsBlock({
  block, pivot, showPivot, bt,
}: {
  block: Extract<MathRichBlock, { type: "theory_tabs" }>;
  pivot: PivotCode;
  showPivot: boolean;
  bt: BlockTrad | undefined;
}) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const activeBlocks = block.tabs[activeIdx]?.blocks ?? [];
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {block.tabs.map((tab, i) => (
          <button key={i} type="button" onClick={() => setActiveIdx(i)}
            className={`flex-1 px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
              activeIdx === i
                ? "border border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                : "border border-[var(--color-accent-alg)]/30 text-[var(--color-accent-alg)] hover:bg-[var(--color-accent-alg)]/10"
            }`}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {activeBlocks.map((b, i) => (
          <BlockView key={`tab${activeIdx}-${i}`} block={b} blockIdx={i} tradBlocks={bt ? [bt] : undefined} pivot={pivot} showPivot={showPivot} />
        ))}
      </div>
    </div>
  );
}

function ShapeExplorerBlock({
  block, pivot, showPivot: _showPivot,
}: {
  block: Extract<MathRichBlock, { type: "shape_explorer" }>;
  pivot: PivotCode;
  showPivot: boolean;
}) {
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const selectedShape = block.shapes[selectedIdx];
  return (
    <div className="space-y-4">
      {/* Shape tabs â€” 4Ã—2 grid */}
      <div className="grid grid-cols-4 gap-2">
        {block.shapes.map((shape, i) => (
          <button
            key={shape.id}
            type="button"
            onClick={() => setSelectedIdx(i)}
            className={`aspect-square rounded-xl border-2 p-1.5 transition-all ${
              selectedIdx === i
                ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15"
                : "border-[var(--color-border-default)] bg-white dark:bg-zinc-900 hover:border-[var(--color-accent-alg)]/60"
            }`}
          >
            <div className="pointer-events-none w-full h-full" dangerouslySetInnerHTML={{ __html: shape.svg }} />
          </button>
        ))}
      </div>
      {/* Content: all 3 sections (Angles / Droites / SymÃ©trie) stacked */}
      {selectedShape && (
        <div className="space-y-6">
          {selectedShape.tabs.map((tab, ti) => (
            <div key={`${selectedIdx}-${ti}`}>
              <p className="mb-2 text-sm font-bold text-[var(--color-text-primary)]">{tab.label}</p>
              <div className="space-y-3">
                {tab.blocks.map((b, bi) => (
                  <BlockView key={`s${selectedIdx}-t${ti}-b${bi}`} block={b} blockIdx={bi} tradBlocks={undefined} pivot={pivot} showPivot={false} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// â”€â”€ Hint popup + button â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function HintPopup({ hint, onClose }: { hint: string; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative w-full max-w-sm rounded-2xl bg-[var(--color-bg-primary)] p-5 shadow-xl dark:shadow-black/50 border border-[var(--color-border-default)]" onClick={e => e.stopPropagation()}>
        <button type="button" onClick={onClose}
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Fermer">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <p className="mb-2 text-sm font-bold text-[var(--color-accent-alg)]">ðŸ’¡ Astuce</p>
        <p className="text-sm leading-relaxed text-[var(--color-text-primary)] pr-4">{hint}</p>
        <button type="button" onClick={onClose}
          className="mt-4 w-full rounded-xl py-2 text-sm font-semibold text-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 hover:bg-[var(--color-accent-alg)]/20 transition-colors">
          OK
        </button>
      </div>
    </div>
  );
}

function HintButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick}
      className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--color-accent-alg)] text-xs font-bold text-[var(--color-accent-alg)] transition-colors hover:bg-[var(--color-accent-alg)]/10"
      aria-label="Aide">
      ?
    </button>
  );
}

function getStepHint(step: FlatStep | undefined): string | undefined {
  if (!step) return undefined;
  if (step.kind === "exercise") return step.item.hintFr;
  if (step.kind === "arithmetic_group") {
    const op = step.config.op;
    if (op === "+") return "Additionne chiffre par chiffre de droite Ã  gauche. Si la somme dÃ©passe 9, note le chiffre des unitÃ©s et retiens 1.";
    if (op === "-") return "Soustrait de droite Ã  gauche. Si le chiffre du bas est plus grand, emprunte 1 Ã  la colonne suivante.";
    if (op === "Ã—") return "Multiplie chaque chiffre sÃ©parÃ©ment, puis additionne les produits partiels.";
    if (op === "Ã·") return "Cherche combien de fois le diviseur entre dans le dividende. Multiplie, soustrais, abaisse le chiffre suivant.";
  }
  if (step.kind === "column_grid") {
    const op = step.config.op;
    if (op === "+" || op === "-") return "Aligne les chiffres par colonne (unitÃ©s sous unitÃ©s, dizaines sous dizaines). Calcule de droite Ã  gauche.";
    if (op === "Ã—") return "Multiplie chaque chiffre du bas par l'ensemble du nombre du haut. DÃ©cale d'une colonne vers la gauche Ã  chaque ligne.";
  }
  if (step.kind === "div_column_grid") return "ProcÃ¨de par Ã©tapes : combien de fois le diviseur entre-t-il ? Multiplie, soustrais, abaisse le chiffre suivant.";
  if (step.kind === "number_line") return "Compte les graduations entre les deux valeurs affichÃ©es. La flÃ¨che indique la position du nombre Ã  trouver.";
  if (step.kind === "comparison_ex") return "Compare les chiffres de gauche Ã  droite, en commenÃ§ant par la position de la plus grande valeur.";
  if (step.kind === "rounding_group") return "Regarde le chiffre juste aprÃ¨s la position d'arrondi : si â‰¥ 5, arrondis au-dessus ; si < 5, arrondis au-dessous.";
  if (step.kind === "frac_id") return "Le numÃ©rateur (en haut) indique les parties colorÃ©es. Le dÃ©nominateur (en bas) indique le nombre total de parts Ã©gales.";
  if (step.kind === "frac_equiv") return "Deux fractions sont Ã©quivalentes si on peut multiplier ou diviser numÃ©rateur ET dÃ©nominateur par le mÃªme nombre.";
  if (step.kind === "frac_simplify") return "Trouve le PGCD du numÃ©rateur et du dÃ©nominateur, puis divise les deux par ce nombre.";
  if (step.kind === "frac_compare") return "Pour comparer, rÃ©duis au mÃªme dÃ©nominateur (dÃ©nominateur commun), puis compare les numÃ©rateurs.";
  if (step.kind === "number_select") return "Utilise la dÃ©finition vue dans la thÃ©orie pour identifier les nombres qui correspondent au critÃ¨re demandÃ©.";
  if (step.kind === "encadrement") return "Cherche les deux multiples de la puissance de 10 entre lesquels se trouve le nombre.";
  if (step.kind === "odd_even") return "Un nombre pair se termine par 0, 2, 4, 6 ou 8. Un nombre impair se termine par 1, 3, 5, 7 ou 9.";
  if (step.kind === "nl_multi") return "Lis la valeur de chaque graduation en comptant par intervalles rÃ©guliers.";
  if (step.kind === "ordering") return "Compare d'abord les signes (positif/nÃ©gatif), puis les valeurs absolues. Les nÃ©gatifs sont plus petits que les positifs.";
  if (step.kind === "seq_rule") return "Calcule la diffÃ©rence entre deux termes consÃ©cutifs â€” c'est la raison de la suite.";
  if (step.kind === "seq_complete") return "Applique la raison trouvÃ©e : ajoute (ou soustrait) la mÃªme valeur Ã  chaque terme pour trouver le suivant.";
  if (step.kind === "mul_two_digit") return "Multiplie d'abord par les unitÃ©s du deuxiÃ¨me facteur, puis par ses dizaines (en dÃ©calant d'une colonne). Additionne les deux rÃ©sultats.";
  if (step.kind === "expr_comparison") return "Calcule chacune des deux expressions sÃ©parÃ©ment, puis compare les rÃ©sultats obtenus.";
  if (step.kind === "mult_select") return "Un multiple de n est le rÃ©sultat de n Ã— 1, n Ã— 2, n Ã— 3â€¦ VÃ©rifie la divisibilitÃ©.";
  if (step.kind === "mult_list") return "Multiplie n par 1, 2, 3, 4, 5â€¦ pour obtenir la liste de ses multiples.";
  if (step.kind === "true_false_mult_div") return "Un diviseur divise le nombre exactement (reste = 0). Un multiple est dans la table du nombre.";
  if (step.kind === "find_divisors") return "Teste chaque nombre de 1 jusqu'Ã  la racine carrÃ©e. Si n Ã· d = entier, alors d et nÃ·d sont tous les deux diviseurs.";
  if (step.kind === "div_select") return "Un diviseur de n divise n exactement. Teste si n Ã· d = nombre entier sans reste.";
  if (step.kind === "div_by") return "Diviser par 10 : dÃ©place la virgule d'un rang Ã  gauche. Par 100 : deux rangs. Par 0,1 : c'est multiplier par 10.";
  if (step.kind === "missing_digit_div") return "Retrouve le chiffre manquant en faisant le calcul Ã  rebours : multiplie le quotient par le diviseur et vÃ©rifie.";
  if (step.kind === "gcd_lcm") return "PGDC : dÃ©compose en facteurs premiers, prends les facteurs communs au plus petit exposant. PPMC = (a Ã— b) Ã· PGDC(a,b).";
  if (step.kind === "true_false_gcd_lcm") return "PGDC divise les deux nombres. PPMC est divisible par les deux. VÃ©rifie avec la dÃ©finition.";
  if (step.kind === "dec_ordering") return "Compare les chiffres position par position : entiers d'abord, puis dixiÃ¨mes, centiÃ¨mesâ€¦";
  if (step.kind === "dec_seq_rule") return "Calcule la diffÃ©rence entre deux termes dÃ©cimaux consÃ©cutifs.";
  if (step.kind === "dec_seq_complete") return "Applique la raison dÃ©cimale trouvÃ©e pour complÃ©ter les termes manquants.";
  return undefined;
}

// â”€â”€ Theory view â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function TheoryView({ lesson, pivot, showPivot }: {
  lesson: MathSubmoduleLesson;
  pivot: PivotCode;
  showPivot: boolean;
}) {
  const { theory } = lesson;
  const trad = getTrad(lesson.submoduleId);
  const isRtl = pivot === "ar" || pivot === "fa";
  const pivotTitle = showPivot ? trad?.title?.[pivot] ?? theory.title[pivot] : undefined;
  const pivotParas = showPivot ? trad?.paragraphs?.[pivot] ?? theory.paragraphs[pivot] : undefined;
  const title = pivotTitle ?? theory.title.fr;
  const paragraphs = pivotParas?.length ? pivotParas : theory.paragraphs.fr;
  return (
    <div className="space-y-4">
      {title && (
        <div>
          <h2 className="text-base font-bold text-[var(--color-text-primary)]" lang={showPivot && pivotTitle ? pivot : undefined} dir={showPivot && pivotTitle && isRtl ? "rtl" : "ltr"}>
            {title}
          </h2>
        </div>
      )}
      {theory.blocks && theory.blocks.length > 0 ? (
        <div className="space-y-3">
          {theory.blocks.map((block, i) => (
            <BlockView key={i} block={block} blockIdx={i} tradBlocks={trad?.blocks} pivot={pivot} showPivot={showPivot} />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {paragraphs.map((p, i) => (
            <div key={i}>
              <p className="text-sm leading-relaxed text-[var(--color-text-primary)]" lang={showPivot && pivotParas?.[i] ? pivot : undefined} dir={showPivot && pivotParas?.[i] && isRtl ? "rtl" : "ltr"}>{p}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// â”€â”€ Main component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const A11_WORDS: Record<number, string[]> = {
  1: ["un", "une"], 2: ["deux"], 3: ["trois"], 4: ["quatre"], 5: ["cinq"],
  6: ["six"], 7: ["sept"], 8: ["huit"], 9: ["neuf"], 10: ["dix"],
};

function revisionExercise(lesson: MathSubmoduleLesson, id: string, promptFr: string, acceptable: string[], type: MathExerciseItem["type"] = "short_text"): FlatStep {
  return {
    kind: "exercise",
    lesson,
    item: { id, promptFr, type, acceptable },
  };
}

function buildA11RevisionEvalSteps(lesson: MathSubmoduleLesson): FlatStep[] {
  const n1 = rnd(1, 10);
  const n2 = rnd(20, 99);
  const start = rnd(10, 80);
  const missing = start + 2;
  return [
    revisionExercise(lesson, "ra1-a11-letters", `Ã‰cris en lettres : ${n1}`, A11_WORDS[n1] ?? [String(n1)]),
    revisionExercise(lesson, "ra1-a11-digits", `Ã‰cris en chiffres : ${n2}`, [String(n2)], "number"),
    revisionExercise(lesson, "ra1-a11-series", `ComplÃ¨te la suite : ${start}, ${start + 1}, ___, ${start + 3}, ${start + 4}`, [String(missing)], "number"),
  ];
}

function buildA12RevisionEvalSteps(lesson: MathSubmoduleLesson): FlatStep[] {
  const n3 = rnd(111, 999);
  const h = Math.floor(n3 / 100);
  const d = Math.floor((n3 % 100) / 10);
  const u = n3 % 10;
  const n4 = rnd(1000, 9999);
  const m4 = Math.floor(n4 / 1000);
  const c4 = Math.floor((n4 % 1000) / 100);
  const d4 = Math.floor((n4 % 100) / 10);
  const u4 = n4 % 10;
  const cubes = rnd(2, 9) * 100 + rnd(1, 9) * 10 + rnd(1, 9);
  const arrowBase = rnd(11, 89) * 10;
  const nextHundred = Math.ceil(n4 / 100) * 100;
  return [
    revisionExercise(lesson, "ra1-a12-read-blocks", `Quel nombre est formÃ© par ${h} centaines, ${d} dizaines et ${u} unitÃ©s ?`, [String(n3)], "number"),
    revisionExercise(lesson, "ra1-a12-write-number", `Ã‰cris le nombre : ${m4} milliers, ${c4} centaines, ${d4} dizaines et ${u4} unitÃ©s.`, [String(n4)], "number"),
    revisionExercise(lesson, "ra1-a12-milliers", `Dans ${n4}, quelle est la valeur du chiffre des milliers ?`, [String(m4 * 1000)], "number"),
    revisionExercise(lesson, "ra1-a12-centaines", `Dans ${n4}, quelle est la valeur du chiffre des centaines ?`, [String(c4 * 100)], "number"),
    revisionExercise(lesson, "ra1-a12-cubes", `Combien y a-t-il de cubes si on a ${Math.floor(cubes / 100)} centaines, ${Math.floor((cubes % 100) / 10)} dizaines et ${cubes % 10} unitÃ©s ?`, [String(cubes)], "number"),
    revisionExercise(lesson, "ra1-a12-dizaine", `Quel est le nombre juste aprÃ¨s ${arrowBase} sur une droite graduÃ©e de 10 en 10 ?`, [String(arrowBase + 10)], "number"),
    revisionExercise(lesson, "ra1-a12-centaine", `Quel est le nombre juste avant ${nextHundred} sur une droite graduÃ©e de 100 en 100 ?`, [String(nextHundred - 100)], "number"),
  ];
}

function buildRevisionFlatSteps(lessons: MathSubmoduleLesson[]): FlatStep[] {
  const result: FlatStep[] = [];
  for (const lesson of lessons) {
    if (lesson.submoduleId === "A1-1") {
      result.push(...buildA11RevisionEvalSteps(lesson));
      continue;
    }
    if (lesson.submoduleId === "A1-2") {
      result.push(...buildA12RevisionEvalSteps(lesson));
      continue;
    }
    const allSteps = buildSteps([lesson], true);
    const esi = allSteps.findIndex(s => s.kind === "eval_start");
    if (esi < 0) continue;
    const endi = allSteps.findIndex((s, i) => i > esi && (s.kind === "pass_toggle" || s.kind === "eval_start"));
    const slice = endi >= 0 ? allSteps.slice(esi + 1, endi) : allSteps.slice(esi + 1);
    if (slice.length > 0) {
      result.push(...slice);
    } else {
      const pool = lesson.exercisePool;
      const size = lesson.poolSize ?? 5;
      const exercises = pool && pool.length > 0 ? shufflePick(pool, size) : lesson.exercises.slice(0, size);
      for (const item of exercises) result.push({ kind: "exercise", lesson, item });
    }
  }
  return result;
}

export function GenericModuleContent({
  moduleId,
  startSubmoduleId,
  startAtEval,
  revisionMode,
}: {
  moduleId: string;
  startSubmoduleId?: string;
  startAtEval?: boolean;
  revisionMode?: boolean;
}) {
  const router = useRouter();
  const pivot = usePivotLang();
  const { showPivot: showPivotTranslation } = useTranslation();
  const allLessons = getLessonsForModule(moduleId);
  const lessons = startSubmoduleId && allLessons
    ? allLessons.filter((l) => l.submoduleId === startSubmoduleId)
    : allLessons;

  const withEval = !!startSubmoduleId || !!revisionMode;

  const [steps, setSteps] = useState<FlatStep[]>(() => {
    if (!lessons || lessons.length === 0) return [];
    if (revisionMode) {
      const evalSteps = buildRevisionFlatSteps(lessons);
      const lastLesson = lessons[lessons.length - 1]!;
      return [
        { kind: "eval_start", lesson: lastLesson },
        ...evalSteps,
        ...(evalSteps.length === 0 ? [{ kind: "pass_toggle" as const, lesson: lastLesson }] : []),
      ];
    }
    return buildSteps(lessons, withEval);
  });

  const evalStartIdx = steps.findIndex((s) => s.kind === "eval_start");
  const initialIdx = (startAtEval || revisionMode) && evalStartIdx >= 0 ? evalStartIdx : 0;

  const [stepIdx, setStepIdx] = useState(initialIdx);
  const [answer, setAnswer] = useState("");
  const [exStatus, setExStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [exAttempts, setExAttempts] = useState(0);
  const [toggleAnswer, setToggleAnswer] = useState<"oui" | "non" | null>(null);

  // Comparison exercise lifted state
  const [compAnswers, setCompAnswers] = useState<Array<"<" | "=" | ">" | null>>(() => Array(5).fill(null));
  const [compValidated, setCompValidated] = useState(false);
  const [compOverrideConfigs, setCompOverrideConfigs] = useState<Record<number, ComparisonConfig>>({});
  const [exprCompAnswers, setExprCompAnswers] = useState<Array<"<" | "=" | ">" | null>>(() => Array(5).fill(null));
  const [exprCompValidated, setExprCompValidated] = useState(false);
  const [exprCompOverrideConfigs, setExprCompOverrideConfigs] = useState<Record<number, ExprCompConfig>>({});
  const [arithOverrideConfigs, setArithOverrideConfigs] = useState<Record<number, ArithGroupConfig>>({});
  const [gridOverrideConfigs, setGridOverrideConfigs] = useState<Record<number, ColGridConfig>>({});

  // Arithmetic group exercise state
  const [arithResetKey, setArithResetKey] = useState(0);
  const [arithAnswers, setArithAnswers] = useState<string[]>(() => Array(5).fill(""));
  const [arithValidated, setArithValidated] = useState(false);
  const [arithResults, setArithResults] = useState<boolean[]>(() => Array(5).fill(false));

  // Rounding group exercise state
  const [roundingAnswers, setRoundingAnswers] = useState<string[]>(() => Array(5).fill(""));
  const [roundingValidated, setRoundingValidated] = useState(false);
  const [roundingResults, setRoundingResults] = useState<boolean[]>(() => Array(5).fill(false));
  const [roundingOverrideConfigs, setRoundingOverrideConfigs] = useState<Record<number, RoundingConfig>>({});
  const [wpAnswers, setWpAnswers] = useState<string[]>(() => Array(2).fill(""));
  const [wpValidated, setWpValidated] = useState(false);
  const [wpResults, setWpResults] = useState<boolean[]>([]);
  const [wpOverrideConfigs, setWpOverrideConfigs] = useState<Record<number, WordProblemsConfig>>({});
  const [unitConversionAnswers, setUnitConversionAnswers] = useState<string[]>(() => Array(5).fill(""));
  const [unitConversionValidated, setUnitConversionValidated] = useState(false);
  const [unitConversionResults, setUnitConversionResults] = useState<boolean[]>(() => Array(5).fill(false));
  const [unitConversionOverrideConfigs, setUnitConversionOverrideConfigs] = useState<Record<number, UnitConversionConfig>>({});
  const [numberSelectOverrideConfigs, setNumberSelectOverrideConfigs] = useState<Record<number, NumberSelectConfig>>({});
  const [encadrementOverrideConfigs, setEncadrementOverrideConfigs] = useState<Record<number, EncadrementConfig>>({});
  const [oddEvenOverrideConfigs, setOddEvenOverrideConfigs] = useState<Record<number, OddEvenConfig>>({});
  const [nlMultiOverrideConfigs, setNlMultiOverrideConfigs] = useState<Record<number, NLMultiConfig>>({});
  const [orderingOverrideConfigs, setOrderingOverrideConfigs] = useState<Record<number, OrderingConfig>>({});
  const [seqRuleOverrideConfigs, setSeqRuleOverrideConfigs] = useState<Record<number, SeqRuleConfig>>({});
  const [seqCompleteOverrideConfigs, setSeqCompleteOverrideConfigs] = useState<Record<number, SeqCompleteConfig>>({});
  const [decOrderingOverrideConfigs, setDecOrderingOverrideConfigs] = useState<Record<number, DecOrderingConfig>>({});
  const [decSeqRuleOverrideConfigs, setDecSeqRuleOverrideConfigs] = useState<Record<number, DecSeqRuleConfig>>({});
  const [decSeqCompleteOverrideConfigs, setDecSeqCompleteOverrideConfigs] = useState<Record<number, DecSeqCompleteConfig>>({});
  const [roundingResetKey, setRoundingResetKey] = useState(0);

  // Fraction exercise state
  const [fracIdAnswers, setFracIdAnswers] = useState<string[]>(() => Array(5).fill(""));
  const [fracIdValidated, setFracIdValidated] = useState(false);
  const [fracIdResults, setFracIdResults] = useState<boolean[]>(() => Array(5).fill(false));

  const [fracEquivAnswers, setFracEquivAnswers] = useState<string[]>(() => Array(5).fill(""));
  const [fracEquivValidated, setFracEquivValidated] = useState(false);
  const [fracEquivResults, setFracEquivResults] = useState<boolean[]>(() => Array(5).fill(false));

  const [fracSimplifyAnswers, setFracSimplifyAnswers] = useState<Array<{num:string;den:string}>>(() => Array.from({length:5}, () => ({num:"",den:""})));
  const [fracSimplifyValidated, setFracSimplifyValidated] = useState(false);
  const [fracSimplifyResults, setFracSimplifyResults] = useState<boolean[]>(() => Array(5).fill(false));

  const [fracCompareAnswers, setFracCompareAnswers] = useState<Array<"<"|"="|">"|null>>(() => Array(5).fill(null));
  const [fracCompareValidated, setFracCompareValidated] = useState(false);
  const [fracCompareResults, setFracCompareResults] = useState<boolean[]>(() => Array(5).fill(false));

  // Column grid exercise state (4 cards Ã— 12 cells max)
  const emptyGrid = () => Array.from({ length: 4 }, () => Array(12).fill("") as string[]);
  const emptyCarryGrid = () => Array.from({ length: 4 }, () => Array(4).fill("") as string[]);
  const [gridAnswers, setGridAnswers] = useState<string[][]>(emptyGrid);
  const [gridCarryInputs, setGridCarryInputs] = useState<string[][]>(emptyCarryGrid);
  const [gridValidated, setGridValidated] = useState(false);
  const [gridResults, setGridResults] = useState<boolean[]>(() => Array(4).fill(false));

  // Two-digit multiplication exercise state (4 cards Ã— 25 cells max, 10 carries)
  const emptyMul2Grid = () => Array.from({length: 4}, () => Array(25).fill("") as string[]);
  const emptyMul2Carry = () => Array.from({length: 4}, () => Array(10).fill("") as string[]);
  const [mul2dAnswers, setMul2dAnswers] = useState<string[][]>(emptyMul2Grid);
  const [mul2dCarryInputs, setMul2dCarryInputs] = useState<string[][]>(emptyMul2Carry);
  const [mul2dValidated, setMul2dValidated] = useState(false);
  const [mul2dResults, setMul2dResults] = useState<boolean[]>(() => Array(4).fill(false));
  const [mul2dOverrideConfigs, setMul2dOverrideConfigs] = useState<Record<number, Mul2DigitConfig>>({});

  // Division column grid state (3 cards max)
  const emptyDivQuotient = () => Array.from({ length: 3 }, () => Array(5).fill("") as string[]);
  const emptyDivRemainder = () => Array(3).fill("") as string[];
  const emptyDivOperands = () => Array.from({ length: 3 }, () => [Array(6).fill(""), Array(2).fill("")] as string[][]);
  const [divGridQuotientInputs, setDivGridQuotientInputs] = useState<string[][]>(emptyDivQuotient);
  const [divGridRemainderInputs, setDivGridRemainderInputs] = useState<string[]>(emptyDivRemainder);
  const [divGridOperandInputs, setDivGridOperandInputs] = useState<string[][][]>(emptyDivOperands);
  const [divGridValidated, setDivGridValidated] = useState(false);
  const [divGridResults, setDivGridResults] = useState<boolean[]>(() => Array(3).fill(false));
  const [divGridOverrideConfigs, setDivGridOverrideConfigs] = useState<Record<number, DivColGridConfig>>({});
  const emptyDivWork = () => Array.from({ length: 3 }, () =>
    Array.from({ length: 5 }, () => [Array(6).fill("") as string[], Array(6).fill("") as string[]])
  );
  const [divGridWorkInputs, setDivGridWorkInputs] = useState<string[][][][]>(emptyDivWork);

  // A1.3 state
  const [numberSelectAnswers, setNumberSelectAnswers] = useState<boolean[]>(() => Array(15).fill(false));
  const [numberSelectValidated, setNumberSelectValidated] = useState(false);
  const [_numberSelectResults, setNumberSelectResults] = useState<boolean[]>(() => Array(15).fill(false));

  const [encadrementAnswers, setEncadrementAnswers] = useState<Array<{lo:string;hi:string}>>(() => Array(5).fill(null).map(()=>({lo:"",hi:""})));
  const [encadrementValidated, setEncadrementValidated] = useState(false);
  const [encadrementResults, setEncadrementResults] = useState<boolean[]>(() => Array(5).fill(false));

  // A1.4 state
  const [oddEvenAnswers, setOddEvenAnswers] = useState<Array<"pair"|"impair"|null>>(() => Array(5).fill(null));
  const [oddEvenValidated, setOddEvenValidated] = useState(false);
  const [oddEvenResults, setOddEvenResults] = useState<boolean[]>(() => Array(5).fill(false));

  const [nlMultiAnswers, setNlMultiAnswers] = useState<string[]>(() => Array(4).fill(""));
  const [nlMultiValidated, setNlMultiValidated] = useState(false);
  const [nlMultiResults, setNlMultiResults] = useState<boolean[]>(() => Array(4).fill(false));

  // A1.5 state
  const [orderingSelected, setOrderingSelected] = useState<Array<number[]>>(() => [[], []]);
  const [orderingValidated, setOrderingValidated] = useState(false);
  const [orderingResults, setOrderingResults] = useState<boolean[]>(() => Array(2).fill(false));

  const [seqRuleAnswers, setSeqRuleAnswers] = useState<string[]>(() => Array(5).fill(""));
  const [seqRuleValidated, setSeqRuleValidated] = useState(false);
  const [seqRuleResults, setSeqRuleResults] = useState<boolean[]>(() => Array(5).fill(false));

  const [seqCompleteAnswers, setSeqCompleteAnswers] = useState<Array<string[]>>(() => Array(5).fill(null).map(()=>Array(4).fill("")));
  const [seqCompleteValidated, setSeqCompleteValidated] = useState(false);
  const [_seqCompleteResults, setSeqCompleteResults] = useState<boolean[]>(() => Array(5).fill(false));

  // A5.2 decimal sequence state
  const [decOrderingSelected, setDecOrderingSelected] = useState<Array<number[]>>(() => [[], []]);
  const [decOrderingValidated, setDecOrderingValidated] = useState(false);
  const [decOrderingResults, setDecOrderingResults] = useState<boolean[]>(() => Array(2).fill(false));

  const [decSeqRuleAnswers, setDecSeqRuleAnswers] = useState<string[]>(() => Array(5).fill(""));
  const [decSeqRuleValidated, setDecSeqRuleValidated] = useState(false);
  const [decSeqRuleResults, setDecSeqRuleResults] = useState<boolean[]>(() => Array(5).fill(false));

  const [decSeqCompleteAnswers, setDecSeqCompleteAnswers] = useState<Array<string[]>>(() => Array(5).fill(null).map(()=>Array(4).fill("")));
  const [decSeqCompleteValidated, setDecSeqCompleteValidated] = useState(false);

  // Training timer (bubbled up from ArithmeticGroupExercise)
  const [trainingTimerLeft, setTrainingTimerLeft] = useState<number | null>(null);

  // A3.5 state
  const [multSelectAnswers, setMultSelectAnswers] = useState<boolean[]>(() => Array(15).fill(false));
  const [multSelectValidated, setMultSelectValidated] = useState(false);
  const [multSelectOverride, setMultSelectOverride] = useState<Record<number, MultSelectConfig>>({});
  const [multListAnswers, setMultListAnswers] = useState<string[]>(() => Array(2).fill(""));
  const [multListValidated, setMultListValidated] = useState(false);
  const [multListOverride, setMultListOverride] = useState<Record<number, MultListConfig>>({});
  const [tfMultDivAnswers, setTfMultDivAnswers] = useState<Array<boolean|null>>(() => Array(5).fill(null));
  const [tfMultDivValidated, setTfMultDivValidated] = useState(false);
  const [tfMultDivOverride, setTfMultDivOverride] = useState<Record<number, TrueFalseMultDivConfig>>({});
  const [findDivisorsAnswers, setFindDivisorsAnswers] = useState<string[]>(() => Array(2).fill(""));
  const [findDivisorsValidated, setFindDivisorsValidated] = useState(false);
  const [findDivisorsOverride, setFindDivisorsOverride] = useState<Record<number, FindDivisorsConfig>>({});
  const [divSelectAnswers, setDivSelectAnswers] = useState<boolean[]>(() => Array(15).fill(false));
  const [divSelectValidated, setDivSelectValidated] = useState(false);
  const [divSelectOverride, setDivSelectOverride] = useState<Record<number, DivSelectConfig>>({});
  const [divByAnswers, setDivByAnswers] = useState<boolean[][]>(() => Array.from({ length: 5 }, () => Array(5).fill(false)));
  const [divByValidated, setDivByValidated] = useState(false);
  const [divByOverride, setDivByOverride] = useState<Record<number, DivByConfig>>({});
  const [missingDigitAnswers, setMissingDigitAnswers] = useState<string[]>(() => Array(5).fill(""));
  const [missingDigitValidated, setMissingDigitValidated] = useState(false);
  const [missingDigitOverride, setMissingDigitOverride] = useState<Record<number, MissingDigitDivConfig>>({});
  // A3.6 state
  const [gcdLcmAnswers, setGcdLcmAnswers] = useState<string[]>(() => Array(5).fill(""));
  const [gcdLcmValidated, setGcdLcmValidated] = useState(false);
  const [gcdLcmOverride, setGcdLcmOverride] = useState<Record<number, GcdLcmConfig>>({});
  const [tfGcdLcmAnswers, setTfGcdLcmAnswers] = useState<Array<boolean|null>>(() => Array(5).fill(null));
  const [tfGcdLcmValidated, setTfGcdLcmValidated] = useState(false);
  const [tfGcdLcmOverride, setTfGcdLcmOverride] = useState<Record<number, TrueFalseGcdLcmConfig>>({});
  const [geoValidated, setGeoValidated] = useState(false);
  const [geoValidateTrigger, setGeoValidateTrigger] = useState(0);
  const [geoResults, setGeoResults] = useState<boolean[]>([]);
  const [geoResetKey, setGeoResetKey] = useState(0);

  // Eval timer
  const [evalTimeLeft, setEvalTimeLeft] = useState<number | null>(null);

  // Revision 30-minute timer
  const [revTimerLeft, setRevTimerLeft] = useState<number | null>(null);

  // Hint popup
  const [showHint, setShowHint] = useState(false);

  // Eval phase state
  const [evalPageSavedResults, setEvalPageSavedResults] = useState<boolean[][]>([]);
  const [showEvalScore, setShowEvalScore] = useState(false);
  const [evalFinalGrade, setEvalFinalGrade] = useState<number | null>(null);
  const [evalEarnedPts, setEvalEarnedPts] = useState(0);
  const [evalTotalPts_state, setEvalTotalPts_state] = useState(0);
  const [evalRowData, setEvalRowData] = useState<Array<{ label: string; score: number; max: number }>>([]);
  const [showEvalCancelConfirm, setShowEvalCancelConfirm] = useState(false);

  const currentStep = steps[stepIdx];
  const isFirstStep = stepIdx === 0;
  const isLastStep = stepIdx === steps.length - 1;
  const evalSteps = evalStartIdx >= 0 ? steps.slice(evalStartIdx + 1) : [];
  const isInEvalPhase = evalStartIdx >= 0 && stepIdx > evalStartIdx && !showEvalScore;
  const inEvalPhase = currentStep?.kind === "eval_start" || currentStep?.kind === "pass_toggle" || isInEvalPhase || showEvalScore;

  const goTo = useCallback((idx: number) => {
    setStepIdx(idx);
    setShowHint(false);
    setAnswer("");
    setExStatus("idle");
    setExAttempts(0);
    setToggleAnswer(null);
    setCompAnswers(Array(5).fill(null));
    setCompValidated(false);
    setExprCompAnswers(Array(5).fill(null));
    setExprCompValidated(false);
    setArithAnswers(Array(5).fill(""));
    setArithValidated(false);
    setArithResults(Array(5).fill(false));
    setGridAnswers(emptyGrid());
    setGridCarryInputs(emptyCarryGrid());
    setGridValidated(false);
    setGridResults(Array(4).fill(false));
    setMul2dAnswers(emptyMul2Grid());
    setMul2dCarryInputs(emptyMul2Carry());
    setMul2dValidated(false);
    setMul2dResults(Array(4).fill(false));
    setRoundingAnswers(Array(5).fill(""));
    setRoundingValidated(false);
    setRoundingResults(Array(5).fill(false));
    setFracIdAnswers(Array(5).fill(""));
    setFracIdValidated(false);
    setFracIdResults(Array(5).fill(false));
    setFracEquivAnswers(Array(5).fill(""));
    setFracEquivValidated(false);
    setFracEquivResults(Array(5).fill(false));
    setFracSimplifyAnswers(Array.from({length:5}, () => ({num:"",den:""})));
    setFracSimplifyValidated(false);
    setFracSimplifyResults(Array(5).fill(false));
    setFracCompareAnswers(Array(5).fill(null));
    setFracCompareValidated(false);
    setFracCompareResults(Array(5).fill(false));
    setNumberSelectAnswers(Array(15).fill(false));
    setNumberSelectValidated(false);
    setNumberSelectResults(Array(15).fill(false));
    setEncadrementAnswers(Array(5).fill(null).map(()=>({lo:"",hi:""})));
    setEncadrementValidated(false);
    setEncadrementResults(Array(5).fill(false));
    setOddEvenAnswers(Array(5).fill(null));
    setOddEvenValidated(false);
    setOddEvenResults(Array(5).fill(false));
    setNlMultiAnswers(Array(4).fill(""));
    setNlMultiValidated(false);
    setNlMultiResults(Array(4).fill(false));
    setOrderingSelected([[], []]);
    setOrderingValidated(false);
    setOrderingResults(Array(2).fill(false));
    setSeqRuleAnswers(Array(5).fill(""));
    setSeqRuleValidated(false);
    setSeqRuleResults(Array(5).fill(false));
    setSeqCompleteAnswers(Array(5).fill(null).map(()=>Array(4).fill("")));
    setSeqCompleteValidated(false);
    setSeqCompleteResults(Array(5).fill(false));
    setDecOrderingSelected([[], []]);
    setDecOrderingValidated(false);
    setDecOrderingResults(Array(2).fill(false));
    setDecSeqRuleAnswers(Array(5).fill(""));
    setDecSeqRuleValidated(false);
    setDecSeqRuleResults(Array(5).fill(false));
    setDecSeqCompleteAnswers(Array(5).fill(null).map(()=>Array(4).fill("")));
    setDecSeqCompleteValidated(false);
    setDivGridQuotientInputs(Array.from({ length: 3 }, () => Array(5).fill("")));
    setDivGridRemainderInputs(Array(3).fill(""));
    setDivGridOperandInputs(Array.from({ length: 3 }, () => [Array(6).fill(""), Array(2).fill("")]));
    setDivGridWorkInputs(emptyDivWork());
    setDivGridValidated(false);
    setDivGridResults(Array(3).fill(false));
    setTrainingTimerLeft(null);
    // A3.5 resets
    setMultSelectAnswers(Array(15).fill(false));
    setMultSelectValidated(false);
    setMultListAnswers(Array(2).fill(""));
    setMultListValidated(false);
    setTfMultDivAnswers(Array(5).fill(null));
    setTfMultDivValidated(false);
    setFindDivisorsAnswers(Array(2).fill(""));
    setFindDivisorsValidated(false);
    setDivSelectAnswers(Array(15).fill(false));
    setDivSelectValidated(false);
    setDivByAnswers(Array.from({ length: 5 }, () => Array(5).fill(false)));
    setDivByValidated(false);
    setMissingDigitAnswers(Array(5).fill(""));
    setMissingDigitValidated(false);
    // A3.6 resets
    setGcdLcmAnswers(Array(5).fill(""));
    setGcdLcmValidated(false);
    setTfGcdLcmAnswers(Array(5).fill(null));
    setTfGcdLcmValidated(false);
    setWpAnswers(Array(2).fill(""));
    setWpValidated(false);
    setWpResults([]);
    setUnitConversionAnswers(Array(5).fill(""));
    setUnitConversionValidated(false);
    setUnitConversionResults(Array(5).fill(false));
    setGeoValidated(false);
    setGeoValidateTrigger(0);
    setGeoResults([]);
    setGeoResetKey(k => k + 1);
    if (idx <= (evalStartIdx >= 0 ? evalStartIdx : 0)) {
      setEvalPageSavedResults([]);
      setShowEvalScore(false);
      setEvalFinalGrade(null);
      setEvalEarnedPts(0);
      setEvalTotalPts_state(0);
      setEvalRowData([]);
    }
  }, [evalStartIdx]);

  const goBack = useCallback(() => {
    if (isInEvalPhase) { setShowEvalCancelConfirm(true); return; }
    if (showEvalScore) return;
    if (!isFirstStep) goTo(stepIdx - 1);
  }, [isFirstStep, stepIdx, goTo, isInEvalPhase, showEvalScore]);

  // Eval timer countdown
  useEffect(() => {
    if (!isInEvalPhase || evalTimeLeft === null || evalTimeLeft <= 0) return;
    const id = setInterval(() => setEvalTimeLeft((t: number | null) => (t ?? 1) - 1), 1000);
    return () => clearInterval(id);
  }, [isInEvalPhase, evalTimeLeft]);

  // Revision 30-minute timer countdown + auto-jump to pass_toggle when time runs out
  useEffect(() => {
    if (!revisionMode || !isInEvalPhase || revTimerLeft === null || revTimerLeft <= 0) return;
    const id = setInterval(() => setRevTimerLeft((t: number | null) => (t ?? 1) - 1), 1000);
    return () => clearInterval(id);
  }, [revisionMode, isInEvalPhase, revTimerLeft]);

  useEffect(() => {
    if (!revisionMode || revTimerLeft !== 0) return;
    const passIdx = steps.findLastIndex((s: FlatStep) => s.kind === "pass_toggle");
    if (passIdx >= 0 && stepIdx !== passIdx) {
      setRevTimerLeft(null);
      goTo(passIdx);
    }
  }, [revisionMode, revTimerLeft, steps, stepIdx, goTo]);

  function startEval() {
    if (revisionMode) {
      setRevTimerLeft(30 * 60);
    } else {
      setEvalTimeLeft(5 * 60);
    }
    setEvalPageSavedResults([]);
    setShowEvalScore(false);
    setEvalFinalGrade(null);
    setEvalEarnedPts(0);
    setEvalTotalPts_state(0);
    setEvalRowData([]);
    setSteps(buildSteps(lessons ?? [], withEval));
    goTo(stepIdx + 1);
  }

  function cancelEval() {
    setShowEvalCancelConfirm(false);
    setEvalPageSavedResults([]);
    setShowEvalScore(false);
    setEvalFinalGrade(null);
    setEvalEarnedPts(0);
    setEvalTotalPts_state(0);
    setEvalRowData([]);
    goTo(evalStartIdx >= 0 ? evalStartIdx : 0);
  }

  function finishEval(correct: boolean) {
    if (!startSubmoduleId) { router.push(backUrl); return; }
    const p = loadProgress();
    // Don't downgrade a submodule that was already passed
    if (!correct) {
      const existing = p.submoduleScores?.[startSubmoduleId];
      if (existing && existing.grade >= PASSING_GRADE) {
        router.push(backUrl);
        return;
      }
    }
    const grade = linearSwissGrade(correct ? 1 : 0, 1);
    const medal = correct ? medalFromPercent(100) : undefined;
    saveProgress(completeSubmodule(p, moduleId, startSubmoduleId, correct ? 1 : 0, 1, grade));
    void medal;
    router.push(backUrl);
  }

  const activeCompConfig = currentStep?.kind === "comparison_ex"
    ? (compOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeExprCompConfig = currentStep?.kind === "expr_comparison"
    ? (exprCompOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeArithConfig = currentStep?.kind === "arithmetic_group"
    ? (arithOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeGridConfig = currentStep?.kind === "column_grid"
    ? (gridOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeRoundingConfig = currentStep?.kind === "rounding_group"
    ? (roundingOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeNumberSelectConfig = currentStep?.kind === "number_select"
    ? (numberSelectOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeEncadrementConfig = currentStep?.kind === "encadrement"
    ? (encadrementOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeOddEvenConfig = currentStep?.kind === "odd_even"
    ? (oddEvenOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeNlMultiConfig = currentStep?.kind === "nl_multi"
    ? (nlMultiOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeOrderingConfig = currentStep?.kind === "ordering"
    ? (orderingOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeSeqRuleConfig = currentStep?.kind === "seq_rule"
    ? (seqRuleOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeSeqCompleteConfig = currentStep?.kind === "seq_complete"
    ? (seqCompleteOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeDecOrderingConfig = currentStep?.kind === "dec_ordering"
    ? (decOrderingOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeDecSeqRuleConfig = currentStep?.kind === "dec_seq_rule"
    ? (decSeqRuleOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeDecSeqCompleteConfig = currentStep?.kind === "dec_seq_complete"
    ? (decSeqCompleteOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeDivGridConfig = currentStep?.kind === "div_column_grid"
    ? (divGridOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeMul2Config = currentStep?.kind === "mul_two_digit"
    ? (mul2dOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeMultSelectConfig = currentStep?.kind === "mult_select"
    ? (multSelectOverride[stepIdx] ?? currentStep.config)
    : null;
  const activeMultListConfig = currentStep?.kind === "mult_list"
    ? (multListOverride[stepIdx] ?? currentStep.config)
    : null;
  const activeTfMultDivConfig = currentStep?.kind === "true_false_mult_div"
    ? (tfMultDivOverride[stepIdx] ?? currentStep.config)
    : null;
  const activeFindDivisorsConfig = currentStep?.kind === "find_divisors"
    ? (findDivisorsOverride[stepIdx] ?? currentStep.config)
    : null;
  const activeDivSelectConfig = currentStep?.kind === "div_select"
    ? (divSelectOverride[stepIdx] ?? currentStep.config)
    : null;
  const activeDivByConfig = currentStep?.kind === "div_by"
    ? (divByOverride[stepIdx] ?? currentStep.config)
    : null;
  const activeMissingDigitConfig = currentStep?.kind === "missing_digit_div"
    ? (missingDigitOverride[stepIdx] ?? currentStep.config)
    : null;
  const activeGcdLcmConfig = currentStep?.kind === "gcd_lcm"
    ? (gcdLcmOverride[stepIdx] ?? currentStep.config)
    : null;
  const activeTfGcdLcmConfig = currentStep?.kind === "true_false_gcd_lcm"
    ? (tfGcdLcmOverride[stepIdx] ?? currentStep.config)
    : null;
  const activeWpConfig = currentStep?.kind === "word_problems"
    ? (wpOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeUnitConversionConfig = currentStep?.kind === "unit_conversion"
    ? (unitConversionOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;

  const goNext = useCallback(() => {
    if (showEvalScore) { router.push(backUrl); return; }
    if (currentStep?.kind === "pass_toggle") {
      finishEval(toggleAnswer === "oui");
      return;
    }
    if (isInEvalPhase && currentStep) {
      let currentResults: boolean[] = [];
      if (currentStep.kind === "exercise") {
        currentResults = [answerMatches(answer, currentStep.item.acceptable)];
      } else if (currentStep.kind === "arithmetic_group") {
        currentResults = arithResults.slice(0, (arithOverrideConfigs[stepIdx] ?? currentStep.config).questions.length);
      } else if (currentStep.kind === "column_grid") {
        const cfg = gridOverrideConfigs[stepIdx] ?? currentStep.config;
        if (currentStep.lesson.submoduleId === "A3-2") {
          // Partial scoring: carries ignored
          currentResults = [];
          const zOkEval = (d: number, c: number, fNz: number, v: string) =>
            v === String(d) || (d === 0 && c < fNz && (v === "" || v === "0"));
          for (let qi = 0; qi < cfg.questions.length; qi++) {
            const q = cfg.questions[qi]!;
            const cells = gridAnswers[qi] ?? [];
            const rd = getD4(q.result);
            const firstNzREval = rd.findIndex(v => v !== 0);
            const resBase = cfg.preFilledOperands ? 0 : 8;
            const rOk = rd.every((d, col) => zOkEval(d, col, firstNzREval, (cells[resBase + col] ?? "").trim()));
            if (cfg.preFilledOperands) {
              // Ex 1: 2 pts for correct result
              currentResults.push(rOk, rOk);
            } else {
              // Ex 2: 1 pt operands + 2 pts result
              const ad = getD4(q.a), bd = getD4(q.b);
              const firstNzAEval = ad.findIndex(v => v !== 0);
              const firstNzBEval = bd.findIndex(v => v !== 0);
              const opOk = ad.every((d, col) => zOkEval(d, col, firstNzAEval, (cells[col] ?? "").trim())) &&
                           bd.every((d, col) => zOkEval(d, col, firstNzBEval, (cells[4 + col] ?? "").trim()));
              currentResults.push(opOk, rOk, rOk);
            }
          }
        } else {
          currentResults = gridResults.slice(0, cfg.questions.length);
        }
      } else if (currentStep.kind === "rounding_group") {
        currentResults = roundingResults.slice(0, (roundingOverrideConfigs[stepIdx] ?? currentStep.config).questions.length);
      } else if (currentStep.kind === "unit_conversion") {
        currentResults = unitConversionResults.slice(0, (unitConversionOverrideConfigs[stepIdx] ?? currentStep.config).questions.length);
      } else if (currentStep.kind === "frac_id") {
        currentResults = fracIdResults.slice(0, currentStep.config.questions.length);
      } else if (currentStep.kind === "frac_equiv") {
        currentResults = fracEquivResults.slice(0, currentStep.config.questions.length);
      } else if (currentStep.kind === "frac_simplify") {
        currentResults = fracSimplifyResults.slice(0, currentStep.config.questions.length);
      } else if (currentStep.kind === "frac_compare") {
        currentResults = fracCompareResults.slice(0, currentStep.config.questions.length);
      } else if (currentStep.kind === "number_select") {
        const cfg = numberSelectOverrideConfigs[stepIdx] ?? currentStep.config;
        const total = cfg.numbers.length;
        const correct = cfg.numbers.filter((n, i) => {
          const shouldSelect = cfg.mode === "gt" ? n > cfg.threshold : cfg.mode === "lt" ? n < cfg.threshold : n > cfg.threshold && n < cfg.threshold2!;
          return (numberSelectAnswers[i] ?? false) === shouldSelect;
        }).length;
        // 4 pts all correct Â· 2 pts more than half Â· 0 pts otherwise
        if (correct === total) currentResults = [true, true, true, true];
        else if (correct > total / 2) currentResults = [true, true, false, false];
        else currentResults = [false, false, false, false];
      } else if (currentStep.kind === "encadrement") {
        const cfg = encadrementOverrideConfigs[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => {
          const a = encadrementAnswers[i] ?? {lo:"",hi:""};
          return parseInt(a.lo) === q.lo && parseInt(a.hi) === q.hi;
        });
      } else if (currentStep.kind === "odd_even") {
        const oeActive = oddEvenOverrideConfigs[stepIdx] ?? currentStep.config;
        currentResults = oeActive.questions.slice(0, 4).map((q, i) => oddEvenAnswers[i] === q.answer);
      } else if (currentStep.kind === "nl_multi") {
        const nlActive = nlMultiOverrideConfigs[stepIdx] ?? currentStep.config;
        currentResults = nlActive.questions.map((q, i) => {
          const ans = parseInt(nlMultiAnswers[i] ?? "");
          if (q.mode === "read") return ans === q.nlConfig.target;
          if (q.mode === "less") return !isNaN(ans) && ans < q.nlConfig.target;
          return !isNaN(ans) && ans > q.nlConfig.target;
        });
      } else if (currentStep.kind === "ordering") {
        currentResults = currentStep.config.questions.map((q, qi) => {
          const sel = orderingSelected[qi] ?? [];
          const sorted = [...q.numbers].sort((a,b) => currentStep.config.direction === "asc" ? a-b : b-a);
          return sel.length === q.numbers.length && sel.every((n,i) => n === sorted[i]);
        });
      } else if (currentStep.kind === "seq_rule") {
        currentResults = currentStep.config.questions.map((q, i) => {
          const ans = seqRuleAnswers[i]?.trim() ?? "";
          return ans === `${q.op}${q.step}`;
        });
      } else if (currentStep.kind === "seq_complete") {
        currentResults = currentStep.config.questions.map((q, qi) => {
          return q.blankIdxs.every((bi, ii) => parseInt(seqCompleteAnswers[qi]?.[ii] ?? "") === q.allNums[bi]);
        });
      } else if (currentStep.kind === "dec_ordering") {
        currentResults = (activeDecOrderingConfig?.questions ?? []).map((q, qi) => {
          const sel = decOrderingSelected[qi] ?? [];
          const sorted = [...q.hundredths].sort((a,b) => (activeDecOrderingConfig?.direction === "asc" ? a-b : b-a));
          return sel.length === q.hundredths.length && sel.every((n,i) => n === sorted[i]);
        });
      } else if (currentStep.kind === "dec_seq_rule") {
        currentResults = (activeDecSeqRuleConfig?.questions ?? []).map((q, i) => {
          const ans = decSeqRuleAnswers[i]?.trim() ?? "";
          const correct = `${q.op}${fmtDec(q.step)}`;
          const correctAlt = `${q.op}${fmtDec(q.step).replace(",",".")}`;
          return ans === correct || ans === correctAlt;
        });
      } else if (currentStep.kind === "dec_seq_complete") {
        currentResults = (activeDecSeqCompleteConfig?.questions ?? []).map((q, qi) => {
          return q.blankIdxs.every((bi, ii) => {
            const v = decSeqCompleteAnswers[qi]?.[ii] ?? "";
            return parseDec(v) === q.allNums[bi];
          });
        });
      } else if (currentStep.kind === "div_column_grid") {
        const cfg = divGridOverrideConfigs[stepIdx] ?? currentStep.config;
        currentResults = divGridResults.slice(0, cfg.questions.length);
      } else if (currentStep.kind === "expr_comparison") {
        const cfg = exprCompOverrideConfigs[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => exprCompAnswers[i] === q.answer);
      } else if (currentStep.kind === "mul_two_digit") {
        const cfg = mul2dOverrideConfigs[stepIdx] ?? currentStep.config;
        // Partial scoring for A3.2; carries always ignored
        currentResults = [];
        const zOkMul2 = (d: number, c: number, fNz: number, v: string) =>
          v === String(d) || (d === 0 && c < fNz && (v === "" || v === "0"));
        for (let qi = 0; qi < cfg.questions.length; qi++) {
          const q = cfg.questions[qi]!;
          const cells = mul2dAnswers[qi] ?? [];
          const p1d = getD5(q.partial1), p2d = getD5(q.partial2), rd = getD5(q.result);
          const p2SD = (col: number) => col === 4 ? 0 : p2d[col + 1]!;
          const p1Base = cfg.preFilledOperands ? 0 : 10;
          const p2Base = cfg.preFilledOperands ? 5 : 15;
          const rBase  = cfg.preFilledOperands ? 10 : 20;
          const cs = q.result > 9999 ? 0 : 1;
          const vc = Array.from({length: 5 - cs}, (_, i) => cs + i);
          const firstNzP1m = p1d.findIndex(v => v !== 0);
          const firstNzRm = rd.findIndex(v => v !== 0);
          const p2sFirstNzM = [0,1,2,3].findIndex(c => p2SD(c) !== 0);
          const p1Ok = vc.every(c => zOkMul2(p1d[c]!, c, firstNzP1m, (cells[p1Base+c] ?? "").trim()));
          const p2Ok = vc.filter(c => c !== 4).every(c => zOkMul2(p2SD(c), c, p2sFirstNzM < 0 ? 5 : p2sFirstNzM, (cells[p2Base+c] ?? "").trim()));
          const rOk  = vc.every(c => zOkMul2(rd[c]!, c, firstNzRm, (cells[rBase+c] ?? "").trim()));
          if (cfg.preFilledOperands) {
            // Ex 3: 1 pt p1 + 1 pt p2 + 1 pt result
            currentResults.push(p1Ok, p2Ok, rOk);
          } else {
            // Ex 4: 1 pt operands + 1 pt p1 + 1 pt p2 + 1 pt result
            const ad = getD5(q.a), bd = getD5(q.b);
            const firstNzAM = ad.findIndex(v => v !== 0);
            const firstNzBM = bd.findIndex(v => v !== 0);
            const opOk = vc.every(c => zOkMul2(ad[c]!, c, firstNzAM, (cells[c] ?? "").trim())) &&
                         vc.every(c => zOkMul2(bd[c]!, c, firstNzBM, (cells[5+c] ?? "").trim()));
            currentResults.push(opOk, p1Ok, p2Ok, rOk);
          }
        }
      } else if (currentStep.kind === "mult_select") {
        const cfg = multSelectOverride[stepIdx] ?? currentStep.config;
        const total = cfg.numbers.length;
        const correct = cfg.numbers.filter((n, i) => {
          const shouldSel = n % cfg.base === 0;
          return (multSelectAnswers[i] ?? false) === shouldSel;
        }).length;
        if (correct === total) currentResults = [true, true, true, true];
        else if (correct > total / 2) currentResults = [true, true, false, false];
        else currentResults = [false, false, false, false];
      } else if (currentStep.kind === "mult_list") {
        const cfg = multListOverride[stepIdx] ?? currentStep.config;
        currentResults = cfg.bases.map((base, i) => matchesMultList(multListAnswers[i] ?? "", base));
      } else if (currentStep.kind === "true_false_mult_div") {
        const cfg = tfMultDivOverride[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => tfMultDivAnswers[i] === q.answer);
      } else if (currentStep.kind === "find_divisors") {
        const cfg = findDivisorsOverride[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => {
          const parts = parseNumberList(findDivisorsAnswers[i] ?? "");
          const userSet = new Set(parts);
          const correct = new Set(q.divisors);
          return userSet.size === correct.size && [...correct].every(d => userSet.has(d));
        });
      } else if (currentStep.kind === "div_select") {
        const cfg = divSelectOverride[stepIdx] ?? currentStep.config;
        const total = cfg.numbers.length;
        const correct = cfg.numbers.filter((n, i) => {
          const shouldSel = n % cfg.base === 0;
          return (divSelectAnswers[i] ?? false) === shouldSel;
        }).length;
        if (correct === total) currentResults = [true, true, true, true];
        else if (correct > total / 2) currentResults = [true, true, false, false];
        else currentResults = [false, false, false, false];
      } else if (currentStep.kind === "div_by") {
        const cfg = divByOverride[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => {
          const selected = divByAnswers[i] ?? [];
          return q.choices.every((choice, j) => selected[j] === q.validDivisors.includes(choice));
        });
      } else if (currentStep.kind === "missing_digit_div") {
        const cfg = missingDigitOverride[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => {
          const ans = (missingDigitAnswers[i] ?? "").trim();
          return q.validDigits.includes(ans);
        });
      } else if (currentStep.kind === "gcd_lcm") {
        const cfg = gcdLcmOverride[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => {
          const ans = parseInt(gcdLcmAnswers[i] ?? "");
          return ans === q.answer;
        });
      } else if (currentStep.kind === "true_false_gcd_lcm") {
        const cfg = tfGcdLcmOverride[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => tfGcdLcmAnswers[i] === q.answer);
      } else if (currentStep.kind === "word_problems") {
        const cfg = wpOverrideConfigs[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => {
          const v = (wpAnswers[i] ?? "").trim().replace(/\s+/g, "");
          return parseInt(v, 10) === q.answer;
        });
      } else if (currentStep.kind === "geo_placement" || currentStep.kind === "volume_placement") {
        currentResults = geoResults.length > 0 ? geoResults : [false, false];
      }
      const newSaved = [...evalPageSavedResults, currentResults];
      if (isLastStep) {
        const allRes = newSaved.flat();
        const correct = allRes.filter(Boolean).length;
        const total = allRes.length;
        const grade = linearSwissGrade(correct, total);
        const rows = newSaved.map((res, i) => {
          const es = steps[evalStartIdx + 1 + i];
          const label = es?.kind === "column_grid"
            ? (es.config.preFilledOperands ? "Calcul en colonnes (guidÃ©)" : "Calcul en colonnes")
            : es?.kind === "arithmetic_group"
              ? (es.config.missingOperand ? "Termes manquants" : "Calculs mentaux")
              : es?.kind === "rounding_group"
                ? "Arrondis et estimations"
                : es?.kind === "frac_id" ? "NumÃ©rateur et dÃ©nominateur"
                : es?.kind === "frac_equiv" ? "Fractions Ã©quivalentes"
                : es?.kind === "frac_simplify" ? "Simplification"
                : es?.kind === "frac_compare" ? "Comparaison de fractions"
                : es?.kind === "number_select" ? "SÃ©lection de nombres"
                : es?.kind === "encadrement" ? "Encadrement"
                : es?.kind === "odd_even" ? "Pairs et impairs"
                : es?.kind === "nl_multi" ? "Droite numÃ©rique"
                : es?.kind === "ordering" ? "Classement"
                : es?.kind === "seq_rule" ? "RÃ¨gle de la suite"
                : es?.kind === "seq_complete" ? "ComplÃ©ter la suite"
                : es?.kind === "dec_ordering" ? "Classement dÃ©cimaux"
                : es?.kind === "dec_seq_rule" ? "RÃ¨gle de la suite dÃ©cimale"
                : es?.kind === "dec_seq_complete" ? "ComplÃ©ter la suite dÃ©cimale"
                : es?.kind === "expr_comparison" ? "Comparaison d'expressions"
                : es?.kind === "div_column_grid" ? (es.config.preFilledOperands ? "Division en colonnes (guidÃ©e)" : "Division en colonnes")
                : es?.kind === "mul_two_digit" ? (es.config.preFilledOperands ? "Multiplication Ã  2 chiffres (guidÃ©e)" : "Multiplication Ã  2 chiffres")
                : es?.kind === "mult_select" ? "Multiples â€” sÃ©lection"
                : es?.kind === "mult_list" ? "Liste des multiples"
                : es?.kind === "true_false_mult_div" ? "Vrai ou faux â€” multiples/diviseurs"
                : es?.kind === "find_divisors" ? "Trouver les diviseurs"
                : es?.kind === "div_select" ? "DivisibilitÃ© â€” sÃ©lection"
                : es?.kind === "div_by" ? "Divisible par"
                : es?.kind === "missing_digit_div" ? "Chiffre manquant"
                : es?.kind === "gcd_lcm" ? (es.config.op === "pgcd" ? `PGDC (${es.config.count} nombres)` : `PPMC (${es.config.count} nombres)`)
                : es?.kind === "true_false_gcd_lcm" ? "Vrai ou faux â€” PGDC/PPMC"
                : es?.kind === "word_problems" ? "ProblÃ¨mes"
                : es?.kind === "geo_placement" || es?.kind === "volume_placement" ? es.label
                : `Exercice ${i + 1}`;
          return { label, score: res.filter(Boolean).length, max: res.length };
        });
        setEvalPageSavedResults(newSaved);
        setEvalFinalGrade(grade);
        setEvalEarnedPts(correct);
        setEvalTotalPts_state(total);
        setEvalRowData(rows);
        setShowEvalScore(true);
        if (startSubmoduleId) {
          const p = loadProgress();
          saveProgress(completeSubmodule(p, moduleId, startSubmoduleId, correct, total, grade));
        }
      } else {
        setEvalPageSavedResults(newSaved);
        goTo(stepIdx + 1);
      }
      return;
    }
    if (isLastStep) {
      if (currentStep?.kind === "exercise" && exStatus === "correct") {
        const p = loadProgress();
        saveProgress(completeSubmodule(p, moduleId, currentStep.lesson.submoduleId));
      }
      if (currentStep?.kind === "column_grid" || currentStep?.kind === "arithmetic_group" || currentStep?.kind === "expr_comparison" || currentStep?.kind === "rounding_group" || currentStep?.kind === "div_column_grid") {
        const p = loadProgress();
        saveProgress(completeSubmodule(p, moduleId, currentStep.lesson.submoduleId));
      }
      router.push(backUrl);
    } else {
      if (currentStep?.kind === "exercise") {
        const nextStep = steps[stepIdx + 1];
        const isLastExOfLesson =
          !nextStep ||
          nextStep.kind !== "exercise" ||
          nextStep.lesson.submoduleId !== currentStep.lesson.submoduleId;
        if (isLastExOfLesson && exStatus === "correct") {
          const p = loadProgress();
          saveProgress(completeSubmodule(p, moduleId, currentStep.lesson.submoduleId));
        }
      }
      goTo(stepIdx + 1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLastStep, currentStep, steps, stepIdx, exStatus, answer, moduleId, goTo, router, startSubmoduleId, toggleAnswer, showEvalScore, isInEvalPhase, arithResults, gridResults, arithOverrideConfigs, gridOverrideConfigs, roundingResults, roundingOverrideConfigs, evalPageSavedResults, evalStartIdx, fracIdResults, fracEquivResults, fracSimplifyResults, fracCompareResults, numberSelectAnswers, encadrementAnswers, oddEvenAnswers, nlMultiAnswers, orderingSelected, seqRuleAnswers, seqCompleteAnswers, numberSelectOverrideConfigs, encadrementOverrideConfigs, oddEvenOverrideConfigs, nlMultiOverrideConfigs, activeOrderingConfig, activeSeqRuleConfig, activeSeqCompleteConfig, orderingOverrideConfigs, seqRuleOverrideConfigs, seqCompleteOverrideConfigs, divGridResults, divGridOverrideConfigs, mul2dResults, mul2dOverrideConfigs, decOrderingSelected, decSeqRuleAnswers, decSeqCompleteAnswers, activeDecOrderingConfig, activeDecSeqRuleConfig, activeDecSeqCompleteConfig, decOrderingOverrideConfigs, decSeqRuleOverrideConfigs, decSeqCompleteOverrideConfigs, multSelectAnswers, multSelectOverride, multListAnswers, multListOverride, tfMultDivAnswers, tfMultDivOverride, findDivisorsAnswers, findDivisorsOverride, divSelectAnswers, divSelectOverride, divByAnswers, divByOverride, missingDigitAnswers, missingDigitOverride, gcdLcmAnswers, gcdLcmOverride, tfGcdLcmAnswers, tfGcdLcmOverride, wpAnswers, wpOverrideConfigs, unitConversionAnswers, unitConversionResults, unitConversionOverrideConfigs, geoResults]);

  let stepValidate: (() => void) | undefined;
  let stepReset: (() => void) | undefined;
  let stepCanValidate = true;

  if ((currentStep?.kind === "exercise" || currentStep?.kind === "number_line") && exStatus !== "correct") {
    stepCanValidate = answer.trim().length > 0;
    stepValidate = () => {
      if (!currentStep) return;
      let ok: boolean;
      if (currentStep.kind === "exercise") {
        ok = answerMatches(answer, currentStep.item.acceptable);
      } else {
        ok = parseInt(answer.trim(), 10) === currentStep.nlConfig.target;
      }
      setExStatus(ok ? "correct" : "wrong");
      setExAttempts((a) => a + 1);
    };
    stepReset = () => { setAnswer(""); setExStatus("idle"); setExAttempts(0); };
  }

  if (currentStep?.kind === "comparison_ex") {
    const step = currentStep as ComparisonStep;
    stepReset = () => {
      setCompOverrideConfigs(prev => ({ ...prev, [stepIdx]: genComparisonConfig(step.config.level) }));
      setCompAnswers(Array(5).fill(null));
      setCompValidated(false);
    };
    if (!compValidated) {
      stepCanValidate = true;
      stepValidate = () => {
        if (!activeCompConfig) return;
        setCompValidated(true);
      };
    } else {
      stepCanValidate = false;
      stepValidate = () => {};
    }
  }

  if (currentStep?.kind === "expr_comparison") {
    const cfg = activeExprCompConfig!;
    stepReset = () => {
      setExprCompOverrideConfigs(prev => ({ ...prev, [stepIdx]: genExprComp(cfg.op, cfg.questions[0]!.la > 99 ? [100, 999] : [1, 99], cfg.exNum) }));
      setExprCompAnswers(Array(5).fill(null));
      setExprCompValidated(false);
    };
    if (!exprCompValidated) {
      stepCanValidate = true;
      stepValidate = () => setExprCompValidated(true);
    } else {
      stepCanValidate = false;
      stepValidate = () => {};
    }
  }

  if (currentStep?.kind === "arithmetic_group") {
    const cfg = activeArithConfig!;
    stepCanValidate = !arithValidated;
    stepValidate = arithValidated ? () => {} : () => {
      setArithResults(cfg.questions.map((q, i) => (arithAnswers[i] ?? "").trim() === q.answer));
      setArithValidated(true);
    };
    stepReset = () => {
      setArithOverrideConfigs(prev => ({ ...prev, [stepIdx]: genArithGroup(cfg.op, cfg.range, cfg.exNum, cfg.missingOperand, cfg.timer) }));
      setArithAnswers(Array(5).fill(""));
      setArithValidated(false);
      setArithResults(Array(5).fill(false));
      setArithResetKey(k => k + 1);
    };
  }

  if (currentStep?.kind === "column_grid") {
    const cfg = activeGridConfig!;
    const resBase = cfg.preFilledOperands ? 0 : 8;
    stepCanValidate = !gridValidated;
    stepValidate = gridValidated ? () => {} : () => {
      const res = cfg.questions.map((q, qi) => {
        const cells = gridAnswers[qi] ?? [];
        const rd = getD4(q.result);
        const firstNzR4 = rd.findIndex(v => v !== 0);
        const zOk4 = (d: number, c: number, fNz: number, v: string) =>
          v === String(d) || (d === 0 && c < fNz && (v === "" || v === "0"));
        const resultOk = rd.every((d, col) => zOk4(d, col, firstNzR4, (cells[resBase + col] ?? "").trim()));
        if (cfg.preFilledOperands) return resultOk;
        const ad = getD4(q.a), bd = getD4(q.b);
        const firstNzA4 = ad.findIndex(v => v !== 0);
        const firstNzB4 = bd.findIndex(v => v !== 0);
        const op1Ok = ad.every((d, col) => zOk4(d, col, firstNzA4, (cells[col] ?? "").trim()));
        const op2Ok = bd.every((d, col) => zOk4(d, col, firstNzB4, (cells[4 + col] ?? "").trim()));
        return resultOk && op1Ok && op2Ok;
      });
      setGridResults(res);
      setGridValidated(true);
    };
    stepReset = () => {
      setGridOverrideConfigs(prev => ({ ...prev, [stepIdx]: genColumnGrid(cfg.op, cfg.preFilledOperands, cfg.exNum) }));
      setGridAnswers(Array.from({ length: 4 }, () => Array(12).fill("")));
      setGridCarryInputs(Array.from({ length: 4 }, () => Array(4).fill("")));
      setGridValidated(false);
      setGridResults(Array(4).fill(false));
    };
  }

  if (currentStep?.kind === "div_column_grid") {
    const cfg = activeDivGridConfig!;
    stepCanValidate = !divGridValidated;
    stepValidate = divGridValidated ? () => {} : () => {
      const res = cfg.questions.map((q, qi) => {
        const quotientDigitStr = q.quotient.toString();
        const quotientLen = quotientDigitStr.length;
        const qInputs = divGridQuotientInputs[qi] ?? [];
        // Left-aligned: cells 0..quotientLen-1 have digits; rest are empty (no validation needed)
        const quotOk = Array.from({ length: quotientLen }, (_, i) => {
          const v = (qInputs[i] ?? "").trim();
          return v === quotientDigitStr[i];
        }).every(Boolean);
        const remOk = (divGridRemainderInputs[qi] ?? "").trim() === q.remainder.toString();
        if (cfg.preFilledOperands) return quotOk && remOk;
        const divStr = q.dividend.toString().padStart(q.dividendCols, "0");
        const divisorStr = q.divisor.toString().padStart(q.divisorCols, "0");
        const opInputs = divGridOperandInputs[qi] ?? [[], []];
        const divOk = Array.from({ length: q.dividendCols }, (_, i) => (opInputs[0]?.[i] ?? "").trim() === divStr[i]).every(Boolean);
        const divisorOk = Array.from({ length: q.divisorCols }, (_, i) => (opInputs[1]?.[i] ?? "").trim() === divisorStr[i]).every(Boolean);
        return quotOk && remOk && divOk && divisorOk;
      });
      setDivGridResults(res);
      setDivGridValidated(true);
    };
    stepReset = () => {
      setDivGridOverrideConfigs(prev => ({ ...prev, [stepIdx]: genDivColumnGrid(cfg.dividendCols, cfg.divisorCols, cfg.preFilledOperands, cfg.exNum, cfg.questions.length) }));
      setDivGridQuotientInputs(Array.from({ length: 3 }, () => Array(5).fill("")));
      setDivGridRemainderInputs(Array(3).fill(""));
      setDivGridOperandInputs(Array.from({ length: 3 }, () => [Array(6).fill(""), Array(2).fill("")]));
      setDivGridWorkInputs(emptyDivWork());
      setDivGridValidated(false);
      setDivGridResults(Array(3).fill(false));
    };
  }

  if (currentStep?.kind === "mul_two_digit") {
    const cfg = activeMul2Config!;
    stepCanValidate = !mul2dValidated;
    stepValidate = mul2dValidated ? () => {} : () => {
      const res = cfg.questions.map((q, qi) => {
        const cells = mul2dAnswers[qi] ?? [];
        const p1d = getD5(q.partial1), p2d = getD5(q.partial2), rd = getD5(q.result);
        const p2ShiftedD = (col: number) => col === 4 ? 0 : p2d[col + 1]!;
        const p1Base = cfg.preFilledOperands ? 0 : 10;
        const p2Base = cfg.preFilledOperands ? 5 : 15;
        const rBase  = cfg.preFilledOperands ? 10 : 20;
        const colStart = q.result > 9999 ? 0 : 1;
        const visCols = Array.from({length: 5 - colStart}, (_, i) => colStart + i);
        const zOk5 = (d: number, c: number, fNz: number, v: string) =>
          v === String(d) || (d === 0 && c < fNz && (v === "" || v === "0"));
        const firstNzP1 = p1d.findIndex(v => v !== 0);
        const firstNzR5 = rd.findIndex(v => v !== 0);
        const p2sFirstNz = [0,1,2,3].findIndex(c => p2ShiftedD(c) !== 0);
        const p1Ok = visCols.every(col => zOk5(p1d[col]!, col, firstNzP1, (cells[p1Base+col] ?? "").trim()));
        const p2Ok = visCols.filter(c => c !== 4).every(col => zOk5(p2ShiftedD(col), col, p2sFirstNz < 0 ? 5 : p2sFirstNz, (cells[p2Base+col] ?? "").trim()));
        const rOk  = visCols.every(col => zOk5(rd[col]!, col, firstNzR5, (cells[rBase+col] ?? "").trim()));
        if (cfg.preFilledOperands) return p1Ok && p2Ok && rOk;
        const ad = getD5(q.a), bd = getD5(q.b);
        const firstNzA5 = ad.findIndex(v => v !== 0);
        const firstNzB5 = bd.findIndex(v => v !== 0);
        const aOk = visCols.every(col => zOk5(ad[col]!, col, firstNzA5, (cells[col] ?? "").trim()));
        const bOk = visCols.every(col => zOk5(bd[col]!, col, firstNzB5, (cells[5+col] ?? "").trim()));
        return p1Ok && p2Ok && rOk && aOk && bOk;
      });
      setMul2dResults(res);
      setMul2dValidated(true);
    };
    stepReset = () => {
      setMul2dOverrideConfigs(prev => ({ ...prev, [stepIdx]: genMul2Digit(cfg.preFilledOperands, cfg.exNum, cfg.questions.length) }));
      setMul2dAnswers(emptyMul2Grid());
      setMul2dCarryInputs(emptyMul2Carry());
      setMul2dValidated(false);
      setMul2dResults(Array(4).fill(false));
    };
  }

  if (currentStep?.kind === "word_problems") {
    const _wpCfg = activeWpConfig!;
    stepCanValidate = !wpValidated;
    stepValidate = wpValidated ? () => {} : () => {
      const cfg = wpOverrideConfigs[stepIdx] ?? _wpCfg;
      setWpResults(cfg.questions.map((q, i) => {
        const v = (wpAnswers[i] ?? "").trim().replace(/\s+/g, "");
        return parseInt(v, 10) === q.answer;
      }));
      setWpValidated(true);
    };
    stepReset = () => {
      const cfg = wpOverrideConfigs[stepIdx] ?? _wpCfg;
      const newCfg = genWP(cfg.level, cfg.exNum);
      setWpOverrideConfigs(prev => ({ ...prev, [stepIdx]: newCfg }));
      setWpAnswers(Array(cfg.questions.length).fill(""));
      setWpValidated(false);
      setWpResults([]);
    };
  }

  if (currentStep?.kind === "unit_conversion") {
    const cfg = activeUnitConversionConfig!;
    stepCanValidate = !unitConversionValidated;
    stepValidate = unitConversionValidated ? () => {} : () => {
      setUnitConversionResults(cfg.questions.map((q, i) => numericAnswerMatches(unitConversionAnswers[i] ?? "", q.answer)));
      setUnitConversionValidated(true);
    };
    stepReset = () => {
      const newCfg = genUnitConversion(cfg.domain, cfg.decimals, cfg.exNum, cfg.questions.length);
      setUnitConversionOverrideConfigs(prev => ({ ...prev, [stepIdx]: newCfg }));
      setUnitConversionAnswers(Array(cfg.questions.length).fill(""));
      setUnitConversionValidated(false);
      setUnitConversionResults(Array(cfg.questions.length).fill(false));
    };
  }

  if (currentStep?.kind === "geo_placement" || currentStep?.kind === "volume_placement") {
    stepCanValidate = !geoValidated;
    stepValidate = geoValidated ? () => {} : () => {
      setGeoValidateTrigger((n) => n + 1);
    };
    stepReset = () => {
      setGeoValidated(false);
      setGeoValidateTrigger(0);
      setGeoResults([]);
      setGeoResetKey((k) => k + 1);
    };
  }

  if (currentStep?.kind === "rounding_group") {
    const cfg = activeRoundingConfig!;
    stepCanValidate = !roundingValidated;
    stepValidate = roundingValidated ? () => {} : () => {
      setRoundingResults(cfg.questions.map((q, i) => (roundingAnswers[i] ?? "").trim().replace(".", ",") === q.answer));
      setRoundingValidated(true);
    };
    stepReset = () => {
      const rk = cfg.kind as RoundingKind;
      const newCfg = (rk === "mixed") ? genRoundingMixed(cfg.exNum, cfg.count) : genRounding(rk, cfg.exNum, cfg.count);
      setRoundingOverrideConfigs(prev => ({ ...prev, [stepIdx]: newCfg }));
      setRoundingAnswers(Array(cfg.count).fill(""));
      setRoundingValidated(false);
      setRoundingResults(Array(cfg.count).fill(false));
      setRoundingResetKey(n => n + 1);
    };
  }

  if (currentStep?.kind === "frac_id") {
    const cfg = currentStep.config;
    stepCanValidate = !fracIdValidated;
    stepValidate = fracIdValidated ? () => {} : () => {
      setFracIdResults(cfg.questions.map((q, i) =>
        parseInt((fracIdAnswers[i] ?? "").trim(), 10) === (q.ask === "num" ? q.num : q.den)
      ));
      setFracIdValidated(true);
    };
  }

  if (currentStep?.kind === "frac_equiv") {
    const cfg = currentStep.config;
    stepCanValidate = !fracEquivValidated;
    stepValidate = fracEquivValidated ? () => {} : () => {
      setFracEquivResults(cfg.questions.map((q, i) =>
        parseInt((fracEquivAnswers[i] ?? "").trim(), 10) === q.answer
      ));
      setFracEquivValidated(true);
    };
  }

  if (currentStep?.kind === "frac_simplify") {
    const cfg = currentStep.config;
    stepCanValidate = !fracSimplifyValidated;
    stepValidate = fracSimplifyValidated ? () => {} : () => {
      setFracSimplifyResults(cfg.questions.map((q, i) => {
        const ans = fracSimplifyAnswers[i] ?? { num: "", den: "" };
        const n = parseInt(ans.num.trim(), 10);
        const d = parseInt(ans.den.trim(), 10);
        return n === q.simNum && d === q.simDen;
      }));
      setFracSimplifyValidated(true);
    };
  }

  if (currentStep?.kind === "frac_compare") {
    const allAnswered = fracCompareAnswers.slice(0, currentStep.config.questions.length).every(a => a !== null);
    stepCanValidate = !fracCompareValidated && allAnswered;
    stepValidate = fracCompareValidated ? () => {} : () => {
      setFracCompareResults(currentStep.config.questions.map((q, i) => fracCompareAnswers[i] === q.answer));
      setFracCompareValidated(true);
    };
  }

  if (currentStep?.kind === "number_select") {
    stepCanValidate = !numberSelectValidated;
    const _nsStep = currentStep;
    stepValidate = numberSelectValidated ? () => {} : () => {
      const cfg = activeNumberSelectConfig ?? _nsStep.config;
      const results = cfg.numbers.map((n, i) => {
        const shouldSelect = cfg.mode === "gt" ? n > cfg.threshold
          : cfg.mode === "lt" ? n < cfg.threshold
          : n > cfg.threshold && n < cfg.threshold2!;
        return (numberSelectAnswers[i] ?? false) === shouldSelect;
      });
      setNumberSelectResults(results);
      setNumberSelectValidated(true);
    };
    stepReset = () => {
      const newCfg = genNumberSelect(_nsStep.config.mode, _nsStep.config.exNum);
      setNumberSelectOverrideConfigs(prev => ({ ...prev, [stepIdx]: newCfg }));
      setNumberSelectAnswers(Array(15).fill(false));
      setNumberSelectValidated(false);
      setNumberSelectResults(Array(15).fill(false));
    };
  }

  if (currentStep?.kind === "encadrement") {
    stepCanValidate = !encadrementValidated;
    const _encStep = currentStep;
    stepValidate = encadrementValidated ? () => {} : () => {
      const cfg = activeEncadrementConfig ?? _encStep.config;
      const results = cfg.questions.map((q, i) => {
        const a = encadrementAnswers[i] ?? {lo:"",hi:""};
        return parseInt(a.lo) === q.lo && parseInt(a.hi) === q.hi;
      });
      setEncadrementResults(results);
      setEncadrementValidated(true);
    };
    stepReset = () => {
      const cfg = _encStep.config;
      const newCfg = genEncadrement(cfg.unit, cfg.exNum, cfg.questions.length);
      setEncadrementOverrideConfigs(prev => ({ ...prev, [stepIdx]: newCfg }));
      setEncadrementAnswers(Array(cfg.questions.length).fill(null).map(()=>({lo:"",hi:""})));
      setEncadrementValidated(false);
      setEncadrementResults(Array(cfg.questions.length).fill(false));
    };
  }

  if (currentStep?.kind === "odd_even") {
    stepCanValidate = !oddEvenValidated;
    stepValidate = oddEvenValidated ? () => {} : () => {
      const cfg = oddEvenOverrideConfigs[stepIdx] ?? currentStep.config;
      setOddEvenResults(cfg.questions.map((q, i) => oddEvenAnswers[i] === q.answer));
      setOddEvenValidated(true);
    };
    stepReset = () => {
      const newCfg = genOddEven(currentStep.config.exNum);
      setOddEvenOverrideConfigs(prev => ({ ...prev, [stepIdx]: newCfg }));
      setOddEvenAnswers(Array(5).fill(null));
      setOddEvenValidated(false);
      setOddEvenResults(Array(5).fill(false));
    };
  }

  if (currentStep?.kind === "nl_multi") {
    stepCanValidate = !nlMultiValidated;
    stepValidate = nlMultiValidated ? () => {} : () => {
      const cfg = nlMultiOverrideConfigs[stepIdx] ?? currentStep.config;
      const results = cfg.questions.map((q, i) => {
        const ans = parseInt(nlMultiAnswers[i] ?? "");
        if (q.mode === "read") return ans === q.nlConfig.target;
        if (q.mode === "less") return !isNaN(ans) && ans < q.nlConfig.target;
        return !isNaN(ans) && ans > q.nlConfig.target;
      });
      setNlMultiResults(results);
      setNlMultiValidated(true);
    };
    stepReset = () => {
      const cfg = nlMultiOverrideConfigs[stepIdx] ?? currentStep.config;
      const newCfg = regenNLMultiConfig(cfg);
      setNlMultiOverrideConfigs(prev => ({ ...prev, [stepIdx]: newCfg }));
      setNlMultiAnswers(Array(cfg.questions.length).fill(""));
      setNlMultiValidated(false);
      setNlMultiResults(Array(cfg.questions.length).fill(false));
    };
  }

  if (currentStep?.kind === "ordering" && activeOrderingConfig) {
    stepCanValidate = !orderingValidated;
    stepValidate = orderingValidated ? () => {} : () => {
      const results = activeOrderingConfig.questions.map((q, qi) => {
        const sel = orderingSelected[qi] ?? [];
        const sorted = [...q.numbers].sort((a,b) => activeOrderingConfig.direction === "asc" ? a-b : b-a);
        return sel.length === q.numbers.length && sel.every((n,i) => n === sorted[i]);
      });
      setOrderingResults(results);
      setOrderingValidated(true);
    };
    stepReset = () => {
      setOrderingOverrideConfigs(prev => ({ ...prev, [stepIdx]: genOrdering(currentStep.config.direction, currentStep.config.exNum) }));
      setOrderingSelected([[], []]);
      setOrderingValidated(false);
      setOrderingResults(Array(2).fill(false));
    };
  }

  if (currentStep?.kind === "seq_rule" && activeSeqRuleConfig) {
    stepCanValidate = !seqRuleValidated;
    stepValidate = seqRuleValidated ? () => {} : () => {
      const results = activeSeqRuleConfig.questions.map((q, i) => {
        const ans = seqRuleAnswers[i]?.trim() ?? "";
        return ans === `${q.op}${q.step}`;
      });
      setSeqRuleResults(results);
      setSeqRuleValidated(true);
    };
    stepReset = () => {
      const exNum = currentStep.config.exNum;
      let newCfg: SeqRuleConfig;
      if (!isInEvalPhase && exNum === 3) newCfg = { questions: genSeqRule([1, 99], 3).questions, exNum: 3 };
      else if (!isInEvalPhase && exNum === 4) newCfg = genSeqRule([1000, 9999], 4, 5, 3);
      else if (isInEvalPhase && exNum === 4) newCfg = { questions: [...genSeqRule([1, 99], 4, 1, 3).questions, ...genSeqRule([1, 999], 4, 2, 3).questions, ...genSeqRule([1, 9999], 4, 2, 3).questions], exNum: 4 };
      else newCfg = { questions: genSeqRule([1, 99], 3).questions, exNum };
      setSeqRuleOverrideConfigs(prev => ({ ...prev, [stepIdx]: newCfg }));
      setSeqRuleAnswers(Array(5).fill(""));
      setSeqRuleValidated(false);
      setSeqRuleResults(Array(5).fill(false));
    };
  }

  if (currentStep?.kind === "seq_complete" && activeSeqCompleteConfig) {
    stepCanValidate = !seqCompleteValidated;
    stepValidate = seqCompleteValidated ? () => {} : () => {
      const results = activeSeqCompleteConfig.questions.map((q, qi) => {
        return q.blankIdxs.every((bi, ii) => {
          const ans = parseInt(seqCompleteAnswers[qi]?.[ii] ?? "");
          return ans === q.allNums[bi];
        });
      });
      setSeqCompleteResults(results);
      setSeqCompleteValidated(true);
    };
    stepReset = () => {
      const exNum = currentStep.config.exNum;
      let newCfg: SeqCompleteConfig;
      if (!isInEvalPhase && exNum === 5) newCfg = genSeqComplete([1, 100], 5, 5, -1, 6);
      else if (!isInEvalPhase && exNum === 6) newCfg = genSeqComplete([1, 999], 6, 5, -1);
      else if (isInEvalPhase && exNum === 5) newCfg = { questions: [...genSeqComplete([1, 99], 5, 1, -1).questions, ...genSeqComplete([1, 999], 5, 2, -1).questions, ...genSeqComplete([1, 9999], 5, 2, -1).questions], exNum: 5 };
      else newCfg = genSeqComplete([1, 100], 5, 5, -1, 6);
      setSeqCompleteOverrideConfigs(prev => ({ ...prev, [stepIdx]: newCfg }));
      setSeqCompleteAnswers(Array(5).fill(null).map(()=>Array(4).fill("")));
      setSeqCompleteValidated(false);
      setSeqCompleteResults(Array(5).fill(false));
    };
  }

  if (currentStep?.kind === "dec_ordering" && activeDecOrderingConfig) {
    stepCanValidate = !decOrderingValidated;
    stepValidate = decOrderingValidated ? () => {} : () => {
      const results = activeDecOrderingConfig.questions.map((q, qi) => {
        const sel = decOrderingSelected[qi] ?? [];
        const sorted = [...q.hundredths].sort((a,b) => activeDecOrderingConfig.direction === "asc" ? a-b : b-a);
        return sel.length === q.hundredths.length && sel.every((n,i) => n === sorted[i]);
      });
      setDecOrderingResults(results);
      setDecOrderingValidated(true);
    };
    stepReset = () => {
      setDecOrderingOverrideConfigs(prev => ({ ...prev, [stepIdx]: genDecOrdering(currentStep.config.direction, currentStep.config.exNum) }));
      setDecOrderingSelected([[], []]);
      setDecOrderingValidated(false);
      setDecOrderingResults(Array(2).fill(false));
    };
  }

  if (currentStep?.kind === "dec_seq_rule" && activeDecSeqRuleConfig) {
    stepCanValidate = !decSeqRuleValidated;
    stepValidate = decSeqRuleValidated ? () => {} : () => {
      const results = activeDecSeqRuleConfig.questions.map((q, i) => {
        const ans = decSeqRuleAnswers[i]?.trim() ?? "";
        const correct = `${q.op}${fmtDec(q.step)}`;
        const correctAlt = `${q.op}${fmtDec(q.step).replace(",",".")}`;
        return ans === correct || ans === correctAlt;
      });
      setDecSeqRuleResults(results);
      setDecSeqRuleValidated(true);
    };
    stepReset = () => {
      setDecSeqRuleOverrideConfigs(prev => ({ ...prev, [stepIdx]: genDecSeqRule(currentStep.config.exNum, activeDecSeqRuleConfig.questions.length) }));
      setDecSeqRuleAnswers(Array(5).fill(""));
      setDecSeqRuleValidated(false);
      setDecSeqRuleResults(Array(5).fill(false));
    };
  }

  if (currentStep?.kind === "dec_seq_complete" && activeDecSeqCompleteConfig) {
    stepCanValidate = !decSeqCompleteValidated;
    stepValidate = decSeqCompleteValidated ? () => {} : () => {
      setDecSeqCompleteValidated(true);
    };
    stepReset = () => {
      setDecSeqCompleteOverrideConfigs(prev => ({ ...prev, [stepIdx]: genDecSeqComplete(currentStep.config.exNum, activeDecSeqCompleteConfig.questions.length, -1) }));
      setDecSeqCompleteAnswers(Array(5).fill(null).map(()=>Array(4).fill("")));
      setDecSeqCompleteValidated(false);
    };
  }

  // A3.5 stepValidate/stepReset/stepCanValidate
  if (currentStep?.kind === "mult_select" && activeMultSelectConfig) {
    stepCanValidate = !multSelectValidated;
    stepValidate = multSelectValidated ? () => {} : () => setMultSelectValidated(true);
    stepReset = () => {
      setMultSelectOverride(prev => ({ ...prev, [stepIdx]: genMultSelect(activeMultSelectConfig.exNum) }));
      setMultSelectAnswers(Array(15).fill(false));
      setMultSelectValidated(false);
    };
  }

  if (currentStep?.kind === "mult_list" && activeMultListConfig) {
    stepCanValidate = !multListValidated;
    stepValidate = multListValidated ? () => {} : () => setMultListValidated(true);
    stepReset = () => {
      setMultListOverride(prev => ({ ...prev, [stepIdx]: genMultList(activeMultListConfig.exNum) }));
      setMultListAnswers(Array(2).fill(""));
      setMultListValidated(false);
    };
  }

  if (currentStep?.kind === "true_false_mult_div" && activeTfMultDivConfig) {
    stepCanValidate = !tfMultDivValidated;
    stepValidate = tfMultDivValidated ? () => {} : () => setTfMultDivValidated(true);
    stepReset = () => {
      setTfMultDivOverride(prev => ({ ...prev, [stepIdx]: genTrueFalseMultDiv(activeTfMultDivConfig.exNum) }));
      setTfMultDivAnswers(Array(5).fill(null));
      setTfMultDivValidated(false);
    };
  }

  if (currentStep?.kind === "find_divisors" && activeFindDivisorsConfig) {
    stepCanValidate = !findDivisorsValidated && findDivisorsAnswers.some((value) => value.trim().length > 0);
    stepValidate = findDivisorsValidated ? () => {} : () => setFindDivisorsValidated(true);
    stepReset = () => {
      setFindDivisorsOverride(prev => ({ ...prev, [stepIdx]: genFindDivisors(activeFindDivisorsConfig.exNum) }));
      setFindDivisorsAnswers(Array(2).fill(""));
      setFindDivisorsValidated(false);
    };
  }

  if (currentStep?.kind === "div_select" && activeDivSelectConfig) {
    stepCanValidate = !divSelectValidated;
    stepValidate = divSelectValidated ? () => {} : () => setDivSelectValidated(true);
    stepReset = () => {
      setDivSelectOverride(prev => ({ ...prev, [stepIdx]: genDivSelect(activeDivSelectConfig.exNum) }));
      setDivSelectAnswers(Array(15).fill(false));
      setDivSelectValidated(false);
    };
  }

  if (currentStep?.kind === "div_by" && activeDivByConfig) {
    stepCanValidate = !divByValidated;
    stepValidate = divByValidated ? () => {} : () => setDivByValidated(true);
    stepReset = () => {
      setDivByOverride(prev => ({ ...prev, [stepIdx]: genDivBy(activeDivByConfig.exNum) }));
      setDivByAnswers(Array.from({ length: 5 }, () => Array(5).fill(false)));
      setDivByValidated(false);
    };
  }

  if (currentStep?.kind === "missing_digit_div" && activeMissingDigitConfig) {
    stepCanValidate = !missingDigitValidated;
    stepValidate = missingDigitValidated ? () => {} : () => setMissingDigitValidated(true);
    stepReset = () => {
      setMissingDigitOverride(prev => ({ ...prev, [stepIdx]: genMissingDigitDiv(activeMissingDigitConfig.exNum) }));
      setMissingDigitAnswers(Array(5).fill(""));
      setMissingDigitValidated(false);
    };
  }

  // A3.6 stepValidate/stepReset/stepCanValidate
  if (currentStep?.kind === "gcd_lcm" && activeGcdLcmConfig) {
    stepCanValidate = !gcdLcmValidated;
    stepValidate = gcdLcmValidated ? () => {} : () => setGcdLcmValidated(true);
    stepReset = () => {
      setGcdLcmOverride(prev => ({ ...prev, [stepIdx]: genGcdLcm(activeGcdLcmConfig.op, activeGcdLcmConfig.count, activeGcdLcmConfig.exNum) }));
      setGcdLcmAnswers(Array(5).fill(""));
      setGcdLcmValidated(false);
    };
  }

  if (currentStep?.kind === "true_false_gcd_lcm" && activeTfGcdLcmConfig) {
    const allAnswered = activeTfGcdLcmConfig.questions.every((_, i) => tfGcdLcmAnswers[i] !== null);
    stepCanValidate = !tfGcdLcmValidated && allAnswered;
    stepValidate = tfGcdLcmValidated ? () => {} : () => setTfGcdLcmValidated(true);
    stepReset = () => {
      setTfGcdLcmOverride(prev => ({ ...prev, [stepIdx]: genTrueFalseGcdLcm(activeTfGcdLcmConfig.exNum) }));
      setTfGcdLcmAnswers(Array(5).fill(null));
      setTfGcdLcmValidated(false);
    };
  }

  if (!lessons || lessons.length === 0 || steps.length === 0) {
    return (
      <p className="text-sm text-[var(--color-text-secondary)]">
        Contenu non disponible pour ce module.
      </p>
    );
  }

  // Training steps (before eval_start) for main progress bar
  const trainingSteps = evalStartIdx >= 0 ? steps.slice(0, evalStartIdx) : steps.filter(s => s.kind !== "eval_start" && s.kind !== "pass_toggle");
  const trainingStepIdx = Math.min(stepIdx, trainingSteps.length);
  const evalStepOffset = isInEvalPhase ? stepIdx - evalStartIdx - 1 : -1;
  const currentStepTrad = currentStep ? getTrad(currentStep.lesson.submoduleId) : undefined;
  const currentStepHasPivotTitle = !revisionMode && !!(currentStep && showPivotTranslation && currentStepTrad?.title?.[pivot]);
  const revisionTitle = revisionMode ? getMathModule(moduleId)?.title : null;
  const currentStepTitle = currentStepHasPivotTitle
    ? currentStepTrad!.title[pivot]!
    : revisionTitle ?? currentStep?.lesson.theory.title.fr ?? "";
  const moduleInfo = getMathModule(moduleId);
  const isGeometryModule = moduleInfo?.branch === "geometry";
  const geoStyle = isGeometryModule ? { "--color-accent-alg": "var(--color-accent-geo)" } as React.CSSProperties : undefined;
  const backUrl = isGeometryModule ? "/mathematiques?tab=geometry" : "/mathematiques";

  return (
    <div className="pb-40" style={geoStyle}>
      {/* Cancel eval confirmation dialog */}
      {showEvalCancelConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="mx-4 w-full max-w-sm space-y-4 rounded-[var(--radius-lg)] bg-[var(--color-bg-primary)] p-6 shadow-xl">
            <p className="text-base font-bold text-[var(--color-text-primary)]">Annuler l&apos;Ã©valuation ?</p>
            <p className="text-sm text-[var(--color-text-secondary)]">Ta progression dans l&apos;Ã©valuation sera perdue.</p>
            <div className="flex gap-3">
              <button type="button" onClick={cancelEval}
                className="flex-1 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]">
                Annuler
              </button>
              <button type="button" onClick={() => setShowEvalCancelConfirm(false)}
                className="flex-1 rounded-[var(--radius-lg)] bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
                Continuer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main progress bar â€” training steps only */}
      {!inEvalPhase && (
        <TrainingProgressBar
          current={trainingStepIdx}
          total={trainingSteps.length}
          timeLeft={trainingTimerLeft}
        />
      )}
      {/* Eval progress bar */}
      {isInEvalPhase && !showEvalScore && (
        <EvalProgressBar current={evalStepOffset} total={evalSteps.length} timeLeft={revisionMode ? revTimerLeft : evalTimeLeft} />
      )}

      {/* Hint button â€” floated right, aligns with exercise title */}
      {!inEvalPhase && currentStep && currentStep.kind !== "theory" && getStepHint(currentStep) && (
        <div className="float-right ml-2">
          <HintButton onClick={() => setShowHint(true)} />
        </div>
      )}
      {showHint && getStepHint(currentStep) && (
        <HintPopup hint={getStepHint(currentStep)!} onClose={() => setShowHint(false)} />
      )}

      {/* Theory */}
      {currentStep?.kind === "theory" && <TheoryView lesson={currentStep.lesson} pivot={pivot} showPivot={!!showPivotTranslation} />}

      {/* Exercise */}
      {currentStep?.kind === "exercise" && (
        <div className="space-y-4">
          <p
            className="text-sm font-medium leading-relaxed text-[var(--color-text-primary)]"
            lang={showPivotTranslation && (currentStep.item.promptPivot?.[pivot] || currentStepTrad?.consignes?.[currentStep.item.id]?.[pivot]) ? pivot : undefined}
            dir={showPivotTranslation && (currentStep.item.promptPivot?.[pivot] || currentStepTrad?.consignes?.[currentStep.item.id]?.[pivot]) && (pivot === "ar" || pivot === "fa") ? "rtl" : "ltr"}
          >
            {showPivotTranslation
              ? currentStep.item.promptPivot?.[pivot] ?? currentStepTrad?.consignes?.[currentStep.item.id]?.[pivot] ?? currentStep.item.promptFr
              : currentStep.item.promptFr}
          </p>
          <input
            type="text"
            inputMode={currentStep.item.type === "number" ? "numeric" : "text"}
            value={answer}
            onChange={(e) => { const val = currentStep.item.type === "number" ? e.target.value.replace(/[^0-9,.\-]/g, "") : e.target.value; setAnswer(val); if (exStatus !== "idle") setExStatus("idle"); }}
            onKeyDown={(e) => { if (e.key === "Enter" && answer.trim() && exStatus !== "correct") stepValidate?.(); }}
            placeholder="Votre rÃ©ponseâ€¦"
            className={`w-full px-4 py-3 text-sm ${MATH_TEXT_INPUT_BASE} ${
              exStatus === "wrong"
                ? CLS_WRONG
                : ""
            }`}
          />
          {exStatus === "wrong" && (
            <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
              {exAttempts >= 2 ? `RÃ©ponse attendue : ${currentStep.item.acceptable[0]}` : "Essayez encoreâ€¦"}
            </p>
          )}
        </div>
      )}

      {/* Number line exercise */}
      {currentStep?.kind === "number_line" && (
        <div className="space-y-4">
          <p className="text-sm font-medium text-[var(--color-text-primary)]">
            Quel est le nombre indiquÃ© par la flÃ¨che ?
          </p>
          <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
            <NumberLineSVG config={currentStep.nlConfig} />
          </div>
          <input
            type="text"
            inputMode="decimal"
            value={answer}
            onChange={(e) => { setAnswer(e.target.value.replace(/[^0-9,.\-]/g, "")); if (exStatus !== "idle") setExStatus("idle"); }}
            onKeyDown={(e) => { if (e.key === "Enter" && answer.trim() && exStatus !== "correct") stepValidate?.(); }}
            placeholder="Votre rÃ©ponseâ€¦"
            className={`w-full px-4 py-3 text-sm ${MATH_NUMBER_INPUT_BASE} ${
              exStatus === "wrong"
                ? CLS_WRONG
                : ""
            }`}
          />
          {exStatus === "wrong" && (
            <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
              {exAttempts >= 2 ? `RÃ©ponse attendue : ${currentStep.nlConfig.target}` : "Essayez encoreâ€¦"}
            </p>
          )}
        </div>
      )}

      {/* Number select exercise (A1.3) */}
      {!showEvalScore && currentStep?.kind === "number_select" && activeNumberSelectConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeNumberSelectConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">{activeNumberSelectConfig.consigne}</p>
          <div className="grid grid-cols-5 gap-2">
            {activeNumberSelectConfig.numbers.map((n, i) => {
              const sel = numberSelectAnswers[i] ?? false;
              const shouldSelect = activeNumberSelectConfig.mode === "gt" ? n > activeNumberSelectConfig.threshold
                : activeNumberSelectConfig.mode === "lt" ? n < activeNumberSelectConfig.threshold
                : n > activeNumberSelectConfig.threshold && n < activeNumberSelectConfig.threshold2!;
              let cls = "rounded-lg border px-2 py-2.5 text-center text-sm font-mono font-bold transition-colors ";
              if (!numberSelectValidated) {
                cls += sel
                  ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                  : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]";
              } else {
                if (sel && shouldSelect) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                else if (sel && !shouldSelect) cls += CLS_WRONG;
                else if (!sel && shouldSelect) cls += CLS_WRONG;
                else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-50";
              }
              return (
                <button key={i} type="button" disabled={numberSelectValidated}
                  onClick={() => setNumberSelectAnswers(prev => prev.map((v, j) => j === i ? !v : v))}
                  className={cls}>
                  {n.toLocaleString("fr-CH")}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Encadrement exercise (A1.3) */}
      {!showEvalScore && currentStep?.kind === "encadrement" && activeEncadrementConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeEncadrementConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Encadrez chaque nombre Ã  la {activeEncadrementConfig.unit === 10 ? "dizaine" : "centaine"} prÃ¨s.
          </p>
          <div className="space-y-3">
            {activeEncadrementConfig.questions.map((q, i) => {
              const a = encadrementAnswers[i] ?? {lo:"",hi:""};
              const ok = encadrementValidated ? encadrementResults[i] : null;
              const wrong = ok === false;
              const dir = q.dir ?? "<";
              const firstKey = dir === "<" ? "lo" : "hi";
              const secondKey = dir === "<" ? "hi" : "lo";
              const firstExpected = dir === "<" ? q.lo : q.hi;
              const secondExpected = dir === "<" ? q.hi : q.lo;
              const firstVal = a[firstKey] ?? "";
              const secondVal = a[secondKey] ?? "";
              const inputCls = `w-20 px-2 py-1.5 text-sm ${MATH_NUMBER_INPUT_BASE}`;
              const symCls = "shrink-0 text-sm font-bold text-[var(--color-text-secondary)]";
              const numCls = "w-20 shrink-0 text-center font-mono text-sm text-[var(--color-text-primary)]";
              const firstBlock = wrong ? (
                <div className={`${inputCls} h-[2.125rem] rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center`}>
                  <span className="text-xs text-[var(--color-text-primary)] leading-none">{firstVal||"â€”"}</span>
                  <span className="text-xs font-bold text-amber-600 leading-none">{firstExpected}</span>
                </div>
              ) : (
                <input type="text" inputMode="numeric" value={firstVal} disabled={encadrementValidated}
                  onChange={e => setEncadrementAnswers(prev => prev.map((v,j) => j===i ? {...v, [firstKey]: e.target.value.replace(/[^0-9]/g, "")} : v))}
                  className={inputCls} />
              );
              const secondBlock = wrong ? (
                <div className={`${inputCls} h-[2.125rem] rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center`}>
                  <span className="text-xs text-[var(--color-text-primary)] leading-none">{secondVal||"â€”"}</span>
                  <span className="text-xs font-bold text-amber-600 leading-none">{secondExpected}</span>
                </div>
              ) : (
                <input type="text" inputMode="numeric" value={secondVal} disabled={encadrementValidated}
                  onChange={e => setEncadrementAnswers(prev => prev.map((v,j) => j===i ? {...v, [secondKey]: e.target.value.replace(/[^0-9]/g, "")} : v))}
                  className={inputCls} />
              );
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  {firstBlock}
                  <span className={symCls}>{dir}</span>
                  <span className={numCls}>{q.n.toLocaleString("fr-CH")}</span>
                  <span className={symCls}>{dir}</span>
                  {secondBlock}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Odd/Even exercise (A1.4) */}
      {!showEvalScore && currentStep?.kind === "odd_even" && activeOddEvenConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeOddEvenConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Indiquez si chaque nombre est pair ou impair.</p>
          <div className="space-y-3">
            {activeOddEvenConfig.questions.map((q, i) => {
              const sel = oddEvenAnswers[i];
              const ok = oddEvenValidated ? oddEvenResults[i] : null;
              return (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <span className="w-16 font-mono text-sm text-[var(--color-text-primary)]">{q.n.toLocaleString("fr-CH")}</span>
                  <div className="flex rounded-full border overflow-hidden border-[var(--color-border-default)]">
                    {(["pair","impair"] as const).map((opt, oi) => {
                      const isSelected = sel === opt;
                      const isCorrect = opt === q.answer;
                      let cls = "w-[4.5rem] py-1.5 text-sm font-bold text-center transition-colors focus:outline-none ";
                      if (oi === 1) cls += "border-l border-[var(--color-border-default)] ";
                      if (!oddEvenValidated) {
                        cls += isSelected
                          ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                          : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]";
                      } else if (isSelected && isCorrect) {
                        cls += "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                      } else if (isSelected && !isCorrect) {
                        cls += "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                      } else if (!isSelected && isCorrect && ok === false) {
                        cls += "bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)] border-[var(--color-accent-alg)]";
                      } else {
                        cls += "text-[var(--color-text-secondary)] opacity-40";
                      }
                      return (
                        <button key={opt} type="button" disabled={oddEvenValidated}
                          onClick={() => setOddEvenAnswers(prev => prev.map((v,j) => j===i ? opt : v))}
                          className={cls}>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Number line multi exercise (A1.4) */}
      {!showEvalScore && currentStep?.kind === "nl_multi" && activeNlMultiConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeNlMultiConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">{activeNlMultiConfig.consigne}</p>
          <div className="space-y-5">
            {activeNlMultiConfig.questions.map((q, i) => {
              const v = nlMultiAnswers[i] ?? "";
              const ok = nlMultiValidated ? nlMultiResults[i] : null;
              const noFeedback = activeNlMultiConfig.noFeedback;
              const wrong = ok === false;
              const inputCls = `flex-1 h-[2.75rem] px-4 py-2.5 text-sm ${MATH_NUMBER_INPUT_BASE}`;
              let afterText = "";
              if (!noFeedback) {
                if (nlMultiValidated && q.mode === "read" && ok === false) afterText = `RÃ©ponse attendue : ${q.nlConfig.target}`;
                else if (nlMultiValidated && q.mode === "less" && ok === false) afterText = `La flÃ¨che indique ${q.nlConfig.target}. Votre rÃ©ponse doit Ãªtre plus petite.`;
                else if (nlMultiValidated && q.mode === "more" && ok === false) afterText = `La flÃ¨che indique ${q.nlConfig.target}. Votre rÃ©ponse doit Ãªtre plus grande.`;
              }
              return (
                <div key={i} className="space-y-2">
                  <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
                    <NumberLineSVG config={q.nlConfig} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="shrink-0 text-xs font-bold text-[var(--color-accent-alg)] w-5">{i + 1}.</span>
                    {wrong ? (
                      <div className={`${inputCls} rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center gap-0.5`}>
                        <span className="text-xs text-[var(--color-text-primary)] leading-none">{v||"â€”"}</span>
                        {q.mode === "read" && <span className="text-xs font-bold text-amber-600 leading-none">{q.nlConfig.target}</span>}
                      </div>
                    ) : (
                      <input type="text" inputMode="decimal" value={v} disabled={nlMultiValidated}
                        onChange={e => setNlMultiAnswers(prev => prev.map((a,j) => j===i ? e.target.value.replace(/[^0-9,.\-]/g, "") : a))}
                        className={inputCls} />
                    )}
                  </div>
                  {afterText && <p className="text-xs text-amber-600 pl-7">{afterText}</p>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Ordering exercise (A1.5) */}
      {currentStep?.kind === "ordering" && activeOrderingConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeOrderingConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Classez les nombres dans l&apos;ordre {activeOrderingConfig.direction === "asc" ? "croissant (du plus petit au plus grand)" : "dÃ©croissant (du plus grand au plus petit)"}.
          </p>
          <div className="space-y-6">
            {activeOrderingConfig.questions.map((q, qi) => {
              const sel = orderingSelected[qi] ?? [];
              const available = q.numbers.filter(n => !sel.includes(n));
              const sorted = [...q.numbers].sort((a,b) => currentStep.config.direction === "asc" ? a-b : b-a);
              const ok = orderingValidated ? orderingResults[qi] : null;
              const sep = activeOrderingConfig.direction === "asc" ? "<" : ">";
              const chipBase = "w-20 flex h-10 items-center justify-center rounded-lg border px-1.5 text-sm font-mono font-bold transition-colors ";
              const toggleChip = (n: number) => {
                if (orderingValidated) return;
                setOrderingSelected(prev => {
                  const next = prev.map(a => [...a]);
                  const cur = next[qi] ?? [];
                  next[qi] = cur.includes(n) ? cur.filter(x => x !== n) : [...cur, n];
                  return next;
                });
              };
              return (
                <div key={qi} className="space-y-3">
                  {available.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {available.map((n, ni) => (
                        <button key={ni} type="button" disabled={orderingValidated} onClick={() => toggleChip(n)}
                          className={chipBase + (orderingValidated
                            ? "cursor-default border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-40"
                            : "cursor-pointer border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]")}>
                          {n.toLocaleString("fr-CH")}
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="flex min-h-[48px] flex-wrap items-center gap-1.5 border-b-2 border-[var(--color-accent-alg)] pb-1">
                    <span className="shrink-0 mr-1 text-xs font-bold text-[var(--color-accent-alg)]">{qi + 1}.</span>
                    {sel.map((n, si) => (
                      <Fragment key={si}>
                        <button type="button" disabled={orderingValidated} onClick={() => toggleChip(n)}
                          className={chipBase + (orderingValidated ? "cursor-default" : "cursor-pointer") + " border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white"}>
                          {n.toLocaleString("fr-CH")}
                        </button>
                        {si < sel.length - 1 && <span className="text-sm font-bold text-[var(--color-text-secondary)]">{sep}</span>}
                      </Fragment>
                    ))}
                  </div>
                  {orderingValidated && ok === false && (
                    <div className="flex flex-wrap items-center gap-1">
                      <span className="text-xs font-bold text-amber-600 mr-1">Ordre correct :</span>
                      {sorted.map((n, si) => (
                        <Fragment key={si}>
                          <span className="font-mono text-sm font-bold text-amber-700">{n.toLocaleString("fr-CH")}</span>
                          {si < sorted.length - 1 && <span className="text-amber-500 text-xs">{sep}</span>}
                        </Fragment>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sequence rule exercise (A1.5) */}
      {currentStep?.kind === "seq_rule" && activeSeqRuleConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeSeqRuleConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Trouvez la rÃ¨gle de chaque suite (ex: +5 ou -3).</p>
          <div className="space-y-4">
            {activeSeqRuleConfig.questions.map((q, i) => {
              const v = seqRuleAnswers[i] ?? "";
              const ok = seqRuleValidated ? seqRuleResults[i] : null;
              const wrong = ok === false;
              const correctAns = `${q.op}${q.step.toLocaleString("fr-CH")}`;
              const chipCls = `${activeSeqRuleConfig.exNum === 3 ? "w-12 " : activeSeqRuleConfig.exNum === 4 ? "w-16 " : ""}shrink-0 flex items-center justify-center rounded-lg border border-[var(--color-border-default)] ${activeSeqRuleConfig.exNum === 4 ? "px-[10px]" : "px-3"} py-2 font-mono text-sm text-[var(--color-text-primary)]`;
              const inputRowCls = `w-24 px-3 py-2 text-sm ${MATH_TEXT_INPUT_BASE}`;
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  {q.nums.map((n, ni) => (
                    <span key={ni} className={chipCls}>{n.toLocaleString("fr-CH")}</span>
                  ))}
                  {wrong ? (
                    <div className="w-24 h-9 rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center">
                      <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{v||"â€”"}</span>
                      <span className="text-xs font-bold leading-none text-amber-600">{correctAns}</span>
                    </div>
                  ) : (
                    <input type="text" inputMode="decimal" value={v} disabled={seqRuleValidated}
                      onChange={e => setSeqRuleAnswers(prev => prev.map((a,j) => j===i ? e.target.value.replace(/[^0-9,.\-+]/g, "") : a))}
                      placeholder="Â± nombre"
                      className={inputRowCls} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sequence complete exercise (A1.5) */}
      {currentStep?.kind === "seq_complete" && activeSeqCompleteConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeSeqCompleteConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">ComplÃ©tez les suites de nombres.</p>
          <div className="space-y-5">
            {(() => {
              const globalMaxN = Math.max(...activeSeqCompleteConfig.questions.flatMap(q => q.allNums.map(n => Math.abs(n))));
              const cellW = activeSeqCompleteConfig.exNum === 6 ? "w-[54px]" : globalMaxN >= 10000 ? "w-20" : globalMaxN >= 1000 ? "w-16" : globalMaxN > 100 ? "w-14" : "w-12";
              const inputCls = `${cellW} shrink-0 h-9 px-1 text-sm ${MATH_NUMBER_INPUT_BASE}`;
              return activeSeqCompleteConfig.questions.map((q, qi) => {
              let blankCounter = 0;
              return (
                <div key={qi} className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <span className="shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{qi + 1}.</span>
                    {q.allNums.map((n, ni) => {
                      const blankIdx = q.blankIdxs.indexOf(ni);
                      if (blankIdx !== -1) {
                        const bIdx = blankCounter++;
                        const v = seqCompleteAnswers[qi]?.[bIdx] ?? "";
                        const expected = q.allNums[ni]!;
                        const wrong = seqCompleteValidated && parseFloat(v) !== expected;
                        return wrong ? (
                          <div key={ni} className={`${inputCls} rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center`}>
                            <span className="text-xs text-[var(--color-text-primary)] leading-none">{v||"â€”"}</span>
                            <span className="text-xs font-bold text-amber-600 leading-none">{expected.toLocaleString("fr-CH")}</span>
                          </div>
                        ) : (
                          <input key={ni} type="text" inputMode="decimal" value={v} disabled={seqCompleteValidated}
                            onChange={e => setSeqCompleteAnswers(prev => {
                              const next = prev.map(r => [...r]);
                              if (!next[qi]) next[qi] = [];
                              next[qi]![bIdx] = e.target.value.replace(/[^0-9,.\-]/g, "");
                              return next;
                            })}
                            className={inputCls} />
                        );
                      }
                      return (
                        <span key={ni} className={`${cellW} shrink-0 h-9 flex items-center justify-center rounded-lg border border-[var(--color-border-default)] font-mono text-sm text-[var(--color-text-primary)]`}>{n.toLocaleString("fr-CH")}</span>
                      );
                    })}
                  </div>
                  {seqCompleteValidated && activeSeqCompleteConfig.exNum !== 5 && activeSeqCompleteConfig.exNum !== 6 && (
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-[var(--color-text-secondary)]">
                        RÃ¨gle : {q.allNums[1]! - q.allNums[0]! >= 0 ? "+" : ""}{q.allNums[1]! - q.allNums[0]!}
                      </span>
                    </div>
                  )}
                </div>
              );
            });
            })()}
          </div>
        </div>
      )}

      {/* Decimal ordering exercise (A5.2) */}
      {!showEvalScore && currentStep?.kind === "dec_ordering" && activeDecOrderingConfig && (
        <div className="space-y-4">
          <div>
            <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeDecOrderingConfig.exNum}.</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {activeDecOrderingConfig.direction === "desc"
                ? "Classez les nombres dans lâ€™ordre dÃ©croissant (plus grand au plus petit)."
                : "Classez les nombres dans lâ€™ordre croissant (plus petit au plus grand)."}
            </p>
          </div>
          <div className="space-y-6">
            {activeDecOrderingConfig.questions.map((q, qi) => {
              const sel = decOrderingSelected[qi] ?? [];
              const available = q.hundredths.filter(n => !sel.includes(n));
              const sorted = [...q.hundredths].sort((a,b) => activeDecOrderingConfig.direction === "asc" ? a-b : b-a);
              const ok = decOrderingValidated ? decOrderingResults[qi] : null;
              const sep = activeDecOrderingConfig.direction === "asc" ? "<" : ">";
              const chipBase = "w-[4.5rem] flex h-10 items-center justify-center rounded-lg border px-1.5 text-sm font-mono font-bold transition-colors ";
              const toggleChip = (n: number) => {
                if (decOrderingValidated) return;
                setDecOrderingSelected(prev => {
                  const next = prev.map(a => [...a]);
                  const cur = next[qi] ?? [];
                  next[qi] = cur.includes(n) ? cur.filter(x => x !== n) : [...cur, n];
                  return next;
                });
              };
              return (
                <div key={qi} className="space-y-3">
                  <div className="space-y-3">
                    {available.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {available.map((n, ni) => (
                          <button key={ni} type="button" disabled={decOrderingValidated} onClick={() => toggleChip(n)}
                            className={chipBase + "cursor-pointer border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]"}>
                            {fmtDec(n)}
                          </button>
                        ))}
                      </div>
                    )}
                    <div className="flex min-h-[48px] flex-wrap items-center gap-1.5 border-b-2 border-[var(--color-accent-alg)] pb-1">
                      <span className="shrink-0 mr-1 text-xs font-bold text-[var(--color-accent-alg)]">{qi + 1}.</span>
                      {sel.map((n, si) => (
                        <Fragment key={si}>
                          <button type="button" disabled={decOrderingValidated} onClick={() => toggleChip(n)}
                            className={chipBase + (decOrderingValidated ? "cursor-default" : "cursor-pointer") + " border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white"}>
                            {fmtDec(n)}
                          </button>
                          {si < sel.length - 1 && <span className="text-sm font-bold text-[var(--color-text-secondary)]">{sep}</span>}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                  {decOrderingValidated && ok === false && (
                    <div className="flex flex-wrap items-center gap-1">
                      <span className="text-xs font-bold text-amber-600 mr-1">Ordre correct :</span>
                      {sorted.map((n, si) => (
                        <Fragment key={si}>
                          <span className="font-mono text-sm font-bold text-amber-700">{fmtDec(n)}</span>
                          {si < sorted.length - 1 && <span className="text-amber-500 text-xs">{sep}</span>}
                        </Fragment>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Decimal sequence rule exercise (A5.2) */}
      {!showEvalScore && currentStep?.kind === "dec_seq_rule" && activeDecSeqRuleConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeDecSeqRuleConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Trouvez la rÃ¨gle de chaque suite (ex: +0,5 ou -1,25).</p>
          <div className="overflow-x-auto">
            <div
              className="inline-grid items-center gap-x-2 gap-y-3"
              style={{ gridTemplateColumns: `1.5rem repeat(${activeDecSeqRuleConfig.questions[0]?.nums.length ?? 4}, 4rem) 5rem` }}
            >
              {activeDecSeqRuleConfig.questions.map((q, i) => {
                const v = decSeqRuleAnswers[i] ?? "";
                const ok = decSeqRuleValidated ? decSeqRuleResults[i] : null;
                const wrong = ok === false;
                const correctAns = `${q.op}${fmtDec(q.step)}`;
                return (
                  <Fragment key={i}>
                    <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                    {q.nums.map((n, ni) => (
                      <span key={ni} className="h-9 flex items-center justify-center rounded-lg border border-[var(--color-border-default)] font-mono text-sm text-[var(--color-text-primary)]">{fmtDec(n)}</span>
                    ))}
                    {wrong ? (
                      <div className={`h-9 px-1 text-sm font-mono rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center`}>
                        <span className="text-xs leading-none text-[var(--color-text-primary)]">{v || "â€”"}</span>
                        <span className="text-xs font-bold leading-none">{correctAns}</span>
                      </div>
                    ) : (
                      <input type="text" inputMode="decimal" value={v} disabled={decSeqRuleValidated}
                        onChange={e => setDecSeqRuleAnswers(prev => prev.map((a, j) => j === i ? e.target.value.replace(/[^0-9,.\-+]/g, "") : a))}
                        placeholder="Â±0,00"
                        className={`h-9 w-full px-1 text-sm ${MATH_TEXT_INPUT_BASE}`} />
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Decimal sequence complete exercise (A5.3) */}
      {!showEvalScore && currentStep?.kind === "dec_seq_complete" && activeDecSeqCompleteConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeDecSeqCompleteConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">ComplÃ©tez les suites de nombres dÃ©cimaux.</p>
          <div className="overflow-x-auto">
            <div
              className="grid items-center gap-x-1 gap-y-3"
              style={{ gridTemplateColumns: `1.25rem repeat(${activeDecSeqCompleteConfig.questions[0]?.allNums.length ?? 5}, 3.5rem)` }}
            >
              {activeDecSeqCompleteConfig.questions.map((q, qi) => {
                let blankCounter = 0;
                return (
                  <Fragment key={qi}>
                    <span className="text-xs font-bold text-[var(--color-accent-alg)]">{qi + 1}.</span>
                    {q.allNums.map((n, ni) => {
                      const blankIdx = q.blankIdxs.indexOf(ni);
                      if (blankIdx !== -1) {
                        const bIdx = blankCounter++;
                        const v = decSeqCompleteAnswers[qi]?.[bIdx] ?? "";
                        const expected = q.allNums[ni]!;
                        const wrong = decSeqCompleteValidated && parseDec(v) !== expected;
                        return wrong ? (
                          <div key={ni} className={`h-9 px-1 font-mono text-sm rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center`}>
                            <span className="text-xs leading-none text-[var(--color-text-primary)]">{v || "â€”"}</span>
                            <span className="text-xs font-bold leading-none">{fmtDec(expected)}</span>
                          </div>
                        ) : (
                          <input key={ni} type="text" inputMode="decimal" value={v} disabled={decSeqCompleteValidated}
                            onChange={e => setDecSeqCompleteAnswers(prev => {
                              const next = prev.map(r => [...r]);
                              if (!next[qi]) next[qi] = [];
                              next[qi]![bIdx] = e.target.value.replace(/[^0-9,.\-]/g, "");
                              return next;
                            })}
                            className={`h-9 w-full px-1 text-sm ${MATH_TEXT_INPUT_BASE}`} />
                        );
                      }
                      return (
                        <span key={ni} className="h-9 flex items-center justify-center rounded-lg border border-[var(--color-border-default)] font-mono text-sm text-[var(--color-text-primary)]">{fmtDec(n)}</span>
                      );
                    })}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Geometry exercises imported from the placement test */}
      {!showEvalScore && currentStep?.kind === "geo_placement" && (
        <GeoPlacementExercise
          key={`geo-${stepIdx}-${geoResetKey}`}
          step={currentStep}
          exerciseKey={stepIdx * 1000 + geoResetKey}
          validated={geoValidated}
          validateTrigger={geoValidateTrigger}
          onValidated={(score, max) => {
            setGeoResults(Array.from({ length: max }, (_, i) => i < score));
            setGeoValidated(true);
          }}
        />
      )}

      {!showEvalScore && currentStep?.kind === "volume_placement" && (
        <G5VolumeExercise
          key={`volume-${stepIdx}-${geoResetKey}`}
          exNum={currentStep.exNum}
          solidKind={currentStep.volumeKind}
          mode={currentStep.mode}
          decimals={currentStep.decimals}
          validateCommand={geoValidateTrigger}
          onValidated={(_ok, score = 0, max = 2) => {
            setGeoResults(Array.from({ length: max }, (_, i) => i < score));
            setGeoValidated(true);
          }}
        />
      )}

      {!showEvalScore && currentStep?.kind === "unit_conversion" && activeUnitConversionConfig && (
        <UnitConversionExercise
          config={activeUnitConversionConfig}
          answers={unitConversionAnswers}
          validated={unitConversionValidated}
          results={unitConversionResults}
          onChange={(i, val) => setUnitConversionAnswers(prev => prev.map((a, j) => j === i ? val : a))}
        />
      )}

      {/* Comparison exercise */}
      {currentStep?.kind === "comparison_ex" && activeCompConfig && (
        <ComparisonExercise
          config={activeCompConfig}
          answers={compAnswers}
          validated={compValidated}
          onAnswer={(i, sym) => setCompAnswers(prev => prev.map((a, j) => j === i ? sym : a))}
        />
      )}

      {!showEvalScore && currentStep?.kind === "expr_comparison" && activeExprCompConfig && (
        <ExprCompExercise
          config={activeExprCompConfig}
          answers={exprCompAnswers}
          validated={exprCompValidated}
          onAnswer={(i, sym) => setExprCompAnswers(prev => prev.map((a, j) => j === i ? sym : a))}
        />
      )}

      {/* Arithmetic group exercise */}
      {!showEvalScore && currentStep?.kind === "arithmetic_group" && activeArithConfig && (
        <ArithmeticGroupExercise
          key={`arith-${stepIdx}-${arithResetKey}`}
          config={activeArithConfig}
          answers={arithAnswers}
          validated={arithValidated}
          results={arithResults}
          onChange={(i, val) => setArithAnswers(prev => prev.map((a, j) => j === i ? val : a))}
          onTimerExpired={stepValidate}
          hideTimerDisplay={!isInEvalPhase}
          onTimeUpdate={!isInEvalPhase ? (t) => setTrainingTimerLeft(t) : undefined}
          consigne={
            activeArithConfig.missingOperand
              ? "Trouvez la valeur manquante."
              : activeArithConfig.op === "+"
                ? "Effectuez les additions."
                : activeArithConfig.op === "-"
                  ? "Effectuez les soustractions."
                  : activeArithConfig.op === "Ã—"
                    ? "Effectuez les multiplications."
                    : "Effectuez les divisions."
          }
        />
      )}

      {/* Word problems exercise (A2.4) */}
      {!showEvalScore && currentStep?.kind === "word_problems" && activeWpConfig && (
        <WordProblemsExercise
          key={`wp-${stepIdx}`}
          config={activeWpConfig}
          answers={wpAnswers}
          validated={wpValidated}
          results={wpResults}
          onChange={(i, val) => setWpAnswers(prev => prev.map((a, j) => j === i ? val : a))}
          consigne={showPivotTranslation ? currentStepTrad?.consignes?.wordProblems?.[pivot] : undefined}
        />
      )}

      {/* Rounding group exercise */}
      {!showEvalScore && currentStep?.kind === "rounding_group" && activeRoundingConfig && (
        <RoundingExercise
          key={`rounding-${stepIdx}-${roundingResetKey}`}
          config={activeRoundingConfig}
          answers={roundingAnswers}
          validated={roundingValidated}
          results={roundingResults}
          onChange={(i, val) => setRoundingAnswers(prev => prev.map((a, j) => j === i ? val : a))}
        />
      )}

      {/* Fraction identification exercise */}
      {!showEvalScore && currentStep?.kind === "frac_id" && (
        <FracIdExercise
          config={currentStep.config}
          answers={fracIdAnswers}
          validated={fracIdValidated}
          results={fracIdResults}
          onChange={(i, v) => setFracIdAnswers(prev => { const a = [...prev]; a[i] = v; return a; })}
        />
      )}

      {/* Fraction equivalence exercise */}
      {!showEvalScore && currentStep?.kind === "frac_equiv" && (
        <FracEquivExercise
          config={currentStep.config}
          answers={fracEquivAnswers}
          validated={fracEquivValidated}
          results={fracEquivResults}
          onChange={(i, v) => setFracEquivAnswers(prev => { const a = [...prev]; a[i] = v; return a; })}
        />
      )}

      {/* Fraction simplification exercise */}
      {!showEvalScore && currentStep?.kind === "frac_simplify" && (
        <FracSimplifyExercise
          config={currentStep.config}
          answers={fracSimplifyAnswers}
          validated={fracSimplifyValidated}
          results={fracSimplifyResults}
          onChange={(i, part, v) => setFracSimplifyAnswers(prev => {
            const a = prev.map(x => ({...x}));
            a[i] = { ...(a[i] ?? {num:"",den:""}), [part]: v };
            return a;
          })}
        />
      )}

      {/* Fraction comparison exercise */}
      {!showEvalScore && currentStep?.kind === "frac_compare" && (
        <FracCompareExercise
          config={currentStep.config}
          answers={fracCompareAnswers}
          validated={fracCompareValidated}
          onAnswer={(i, sym) => {
            if (fracCompareValidated) return;
            setFracCompareAnswers(prev => { const a = [...prev]; a[i] = sym; return a; });
          }}
        />
      )}

      {/* Column grid exercise */}
      {!showEvalScore && currentStep?.kind === "column_grid" && activeGridConfig && (
        <ColumnGridExercise
          config={activeGridConfig}
          answers={gridAnswers}
          carryInputs={gridCarryInputs}
          validated={gridValidated}
          results={gridResults}
          onChange={(cardIdx, cellIdx, val) =>
            setGridAnswers(prev => prev.map((card, ci) =>
              ci === cardIdx ? card.map((v, vi) => vi === cellIdx ? val : v) : card
            ))
          }
          onCarryChange={(cardIdx, col, val) =>
            setGridCarryInputs(prev => prev.map((card, ci) =>
              ci === cardIdx ? card.map((v, vi) => vi === col ? val : v) : card
            ))
          }
          consigne={
            activeGridConfig.op === "+"
              ? "Effectuez les additions en colonnes. Ã‰crivez le rÃ©sultat et les retenues."
              : "Effectuez les soustractions en colonnes. Ã‰crivez le rÃ©sultat et les emprunts."
          }
        />
      )}

      {/* Two-digit multiplication exercise */}
      {!showEvalScore && currentStep?.kind === "mul_two_digit" && activeMul2Config && (
        <Mul2DigitExercise
          config={activeMul2Config}
          answers={mul2dAnswers}
          carryInputs={mul2dCarryInputs}
          validated={mul2dValidated}
          results={mul2dResults}
          onChange={(cardIdx, cellIdx, val) =>
            setMul2dAnswers(prev => prev.map((card, ci) =>
              ci === cardIdx ? card.map((v, vi) => vi === cellIdx ? val : v) : card
            ))
          }
          onCarryChange={(cardIdx, col, val) =>
            setMul2dCarryInputs(prev => prev.map((card, ci) =>
              ci === cardIdx ? card.map((v, vi) => vi === col ? val : v) : card
            ))
          }
        />
      )}

      {/* Division column grid exercise */}
      {!showEvalScore && currentStep?.kind === "div_column_grid" && activeDivGridConfig && (
        <DivColumnGridExercise
          config={activeDivGridConfig}
          quotientInputs={divGridQuotientInputs}
          remainderInputs={divGridRemainderInputs}
          operandInputs={divGridOperandInputs}
          workInputs={divGridWorkInputs}
          validated={divGridValidated}
          consigne={showPivotTranslation ? currentStepTrad?.consignes?.divColumnGrid?.[pivot] : undefined}
          consigneLang={showPivotTranslation && currentStepTrad?.consignes?.divColumnGrid?.[pivot] ? pivot : undefined}
          consigneDir={showPivotTranslation && currentStepTrad?.consignes?.divColumnGrid?.[pivot] && (pivot === "ar" || pivot === "fa" || pivot === "ps") ? "rtl" : "ltr"}
          onQuotientChange={(ci, idx, val) =>
            setDivGridQuotientInputs(prev => prev.map((card, ci2) =>
              ci2 === ci ? card.map((v, vi) => vi === idx ? val : v) : card
            ))
          }
          onRemainderChange={(ci, val) =>
            setDivGridRemainderInputs(prev => prev.map((v, i) => i === ci ? val : v))
          }
          onOperandChange={(ci, isDivisor, idx, val) =>
            setDivGridOperandInputs(prev => prev.map((card, ci2) => {
              if (ci2 !== ci) return card;
              const side = isDivisor ? 1 : 0;
              return card.map((row, ri) =>
                ri === side ? row.map((v, vi) => vi === idx ? val : v) : row
              );
            }))
          }
          onWorkChange={(ci, si, type, di, val) =>
            setDivGridWorkInputs(prev => prev.map((card, ci2) => {
              if (ci2 !== ci) return card;
              return card.map((step, si2) => {
                if (si2 !== si) return step;
                return step.map((row, ri) =>
                  ri === type ? row.map((v, vi) => vi === di ? val : v) : row
                );
              });
            }))
          }
        />
      )}

      {/* A3.5 â€” Mult select exercise */}
      {!showEvalScore && currentStep?.kind === "mult_select" && activeMultSelectConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeMultSelectConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">SÃ©lectionnez les multiples de <strong className="font-bold">{activeMultSelectConfig.base}</strong>.</p>
          <div className="grid grid-cols-5 gap-2">
            {activeMultSelectConfig.numbers.map((n, i) => {
              const sel = multSelectAnswers[i] ?? false;
              const shouldSel = n % activeMultSelectConfig.base === 0;
              let cls = "rounded-lg border px-3 py-2 text-center text-sm font-mono font-bold transition-colors ";
              if (!multSelectValidated) {
                cls += sel
                  ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                  : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]";
              } else {
                if (sel && shouldSel) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                else if (sel && !shouldSel) cls += CLS_WRONG;
                else if (!sel && shouldSel) cls += CLS_WRONG;
                else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-50";
              }
              return (
                <button key={i} type="button" disabled={multSelectValidated}
                  onClick={() => setMultSelectAnswers(prev => prev.map((v, j) => j === i ? !v : v))}
                  className={cls}>
                  {n}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* A3.5 â€” Mult list exercise */}
      {!showEvalScore && currentStep?.kind === "mult_list" && activeMultListConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeMultListConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Ã‰crivez les 5 premiers multiple des nombres. SÃ©parez les par des virgules.</p>
          <div className="space-y-4">
            {activeMultListConfig.bases.map((base, i) => {
              const expected = Array.from({ length: 5 }, (_, idx) => base * (idx + 1)).join(", ");
              const v = multListAnswers[i] ?? "";
              const ok = multListValidated ? matchesMultList(v, base) : null;
              const wrong = ok === false;
              const inputCls = `h-11 w-full px-3 text-left text-sm ${MATH_TEXT_INPUT_BASE}`;
              return (
                <div key={i} className="space-y-2">
                  <p className="text-sm text-[var(--color-text-primary)]">
                    <span className="mr-2 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                    Du nombre <strong className="font-bold">{base}</strong>
                  </p>
                  {wrong ? (
                    <div className={`${inputCls} flex flex-col justify-center rounded-none border-0 border-b-2 border-amber-500`}>
                      <span className="text-xs text-[var(--color-text-primary)] leading-none">{v || "â€”"}</span>
                      <span className="text-xs font-bold text-amber-600 leading-none">{expected}</span>
                    </div>
                  ) : (
                    <input type="text" inputMode="numeric" value={v} disabled={multListValidated}
                      onChange={e => setMultListAnswers(prev => prev.map((a, j) => j === i ? e.target.value.replace(/[^0-9]/g, "") : a))}
                      className={inputCls} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* A3.5 â€” True/false mult/div exercise */}
      {!showEvalScore && currentStep?.kind === "true_false_mult_div" && activeTfMultDivConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeTfMultDivConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">SÃ©lectionnez si c&apos;est vrai ou faux.</p>
          <div className="space-y-3">
            {activeTfMultDivConfig.questions.map((q, i) => {
              const sel = tfMultDivAnswers[i];
              return (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <span className="flex-1 text-sm text-[var(--color-text-primary)]">{q.statement}</span>
                  <div className="flex gap-1 shrink-0">
                    {([true, false] as const).map((val) => {
                      const label = val ? "Vrai" : "Faux";
                      const isSelected = sel === val;
                      const isCorrect = val === q.answer;
                      let cls = "px-3 py-1.5 rounded border text-xs font-bold transition-colors ";
                      if (!tfMultDivValidated) {
                        cls += isSelected
                          ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                          : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]";
                      } else if (isSelected) {
                        cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                      } else if (!isSelected && isCorrect) {
                        cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]";
                      } else {
                        cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-40";
                      }
                      return (
                        <button key={String(val)} type="button" disabled={tfMultDivValidated}
                          onClick={() => setTfMultDivAnswers(prev => prev.map((a, j) => j === i ? val : a))}
                          className={cls}>
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* A3.5 â€” Find divisors exercise */}
      {!showEvalScore && currentStep?.kind === "find_divisors" && activeFindDivisorsConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeFindDivisorsConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Trouve tous les diviseurs des nombres. SÃ©pare les par des virgules.</p>
          <div className="space-y-4">
            {activeFindDivisorsConfig.questions.map((q, i) => {
              const v = findDivisorsAnswers[i] ?? "";
              const parts = parseNumberList(v);
              const userSet = new Set(parts);
              const correct = new Set(q.divisors);
              const ok = findDivisorsValidated ? userSet.size === correct.size && [...correct].every(d => userSet.has(d)) : null;
              return (
                <div key={q.number} className="space-y-2">
                  <p className="text-sm text-[var(--color-text-primary)]">
                    <span className="mr-2 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                    Du nombre <strong className="font-bold">{q.number}</strong>
                  </p>
                  {ok === false ? (
                    <div className={`w-full px-4 py-3 text-sm font-mono rounded-none border-0 border-b-2 border-amber-500 flex flex-col gap-0.5`}>
                      <span className="text-xs text-[var(--color-text-primary)] leading-none">{v || "â€”"}</span>
                      <span className="text-xs font-bold text-amber-600 leading-none">{q.divisors.join(", ")}</span>
                    </div>
                  ) : (
                    <input type="text" inputMode="numeric" value={v} disabled={findDivisorsValidated}
                      onChange={e => setFindDivisorsAnswers(prev => prev.map((answer, j) => j === i ? e.target.value.replace(/[^0-9, ]/g, "") : answer))}
                      className={`w-full px-4 py-3 text-sm ${MATH_TEXT_INPUT_BASE}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* A3.5 â€” Div select exercise */}
      {!showEvalScore && currentStep?.kind === "div_select" && activeDivSelectConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeDivSelectConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">SÃ©lectionnez les nombres divisibles par <strong className="font-bold">{activeDivSelectConfig.base}</strong>.</p>
          <div className="grid grid-cols-5 gap-2">
            {activeDivSelectConfig.numbers.map((n, i) => {
              const sel = divSelectAnswers[i] ?? false;
              const shouldSel = n % activeDivSelectConfig.base === 0;
              let cls = "rounded-lg border px-3 py-2 text-center text-sm font-mono font-bold transition-colors ";
              if (!divSelectValidated) {
                cls += sel
                  ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                  : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]";
              } else {
                if (sel && shouldSel) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                else if (sel && !shouldSel) cls += CLS_WRONG;
                else if (!sel && shouldSel) cls += CLS_WRONG;
                else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-50";
              }
              return (
                <button key={i} type="button" disabled={divSelectValidated}
                  onClick={() => setDivSelectAnswers(prev => prev.map((v, j) => j === i ? !v : v))}
                  className={cls}>
                  {n}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* A3.5 â€” Div by exercise */}
      {!showEvalScore && currentStep?.kind === "div_by" && activeDivByConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeDivByConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">SÃ©lectionnez le ou les diviseurs corrects pour les nombres suivants.</p>
          <div className="grid items-center gap-x-2 gap-y-3" style={{ gridTemplateColumns: "1.25rem max-content repeat(5, 2.5rem)" }}>
            {activeDivByConfig.questions.map((q, i) => {
              return (
                <Fragment key={i}>
                  <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <span className="font-mono text-sm text-[var(--color-text-primary)]">{q.n}</span>
                  {q.choices.map((choice, j) => {
                      const selected = divByAnswers[i]?.[j] ?? false;
                      const shouldSelect = q.validDivisors.includes(choice);
                      let cls = "h-9 w-10 rounded-lg border px-2 text-center text-sm font-mono font-bold transition-colors ";
                      if (!divByValidated) {
                        cls += selected
                          ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                          : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]";
                      } else if (selected) {
                        cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                      } else if (shouldSelect) {
                        cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]";
                      } else {
                        cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-50";
                      }
                      return (
                        <button key={choice} type="button" disabled={divByValidated}
                          onClick={() => setDivByAnswers(prev => prev.map((row, rowIdx) => (
                            rowIdx === i ? row.map((value, colIdx) => colIdx === j ? !value : value) : row
                          )))}
                          className={cls}>
                          {choice}
                        </button>
                      );
                    })}
                </Fragment>
              );
            })}
          </div>
        </div>
      )}

      {/* A3.5 â€” Missing digit exercise */}
      {!showEvalScore && currentStep?.kind === "missing_digit_div" && activeMissingDigitConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeMissingDigitConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Trouvez le chiffre manquant pour que le nombre soit divisible.</p>
          <div className="grid items-center gap-x-4 gap-y-3" style={{ gridTemplateColumns: "1.25rem max-content max-content" }}>
            {activeMissingDigitConfig.questions.map((q, i) => {
              const v = missingDigitAnswers[i] ?? "";
              const ok = missingDigitValidated ? q.validDigits.includes(v.trim()) : null;
              const wrong = ok === false;
              const inputCls = "w-5 border-0 border-b-2 border-[var(--color-accent-alg)] bg-transparent px-0 text-center font-mono text-sm font-bold text-[var(--color-accent-alg)] outline-none transition-colors";
              return (
                <Fragment key={i}>
                  <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <span className="flex items-end font-mono text-sm text-[var(--color-text-primary)]">
                    {q.prefix}
                  {wrong ? (
                      <span className={`${inputCls} inline-flex h-6 flex-col items-center justify-center leading-none`}>
                        <span className="text-[10px] font-bold leading-none text-[var(--color-text-primary)]">{v || "â€”"}</span>
                        <span className="text-[10px] font-bold leading-none text-amber-600">{q.validDigits[0]}</span>
                      </span>
                  ) : (
                    <input type="text" inputMode="numeric" maxLength={1} value={v} disabled={missingDigitValidated}
                      onChange={e => setMissingDigitAnswers(prev => prev.map((a, j) => j === i ? e.target.value.replace(/[^0-9]/g, "") : a))}
                      className={`${inputCls} ${ok === null ? "focus:border-[var(--color-accent-alg)]" : ""}`} />
                  )}
                  </span>
                  <span className="text-sm text-[var(--color-text-secondary)]">est divisible par <span className="font-bold text-[var(--color-text-primary)]">{q.divisor}</span></span>
                </Fragment>
              );
            })}
          </div>
        </div>
      )}

      {/* A3.6 â€” GCD/LCM exercise */}
      {!showEvalScore && currentStep?.kind === "gcd_lcm" && activeGcdLcmConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeGcdLcmConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Calculez le {activeGcdLcmConfig.op === "pgcd" ? "PGDC" : "PPMC"} des nombres.
          </p>
          <div className="space-y-3">
            {activeGcdLcmConfig.questions.map((q, i) => {
              const v = gcdLcmAnswers[i] ?? "";
              const ok = gcdLcmValidated ? parseInt(v) === q.answer : null;
              const wrong = ok === false;
              const inputCls = `w-20 h-9 px-2 text-sm ${MATH_NUMBER_INPUT_BASE}`;
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <span className="text-sm text-[var(--color-text-secondary)]">{formatNumsEt(q.nums)} =</span>
                  {wrong ? (
                    <div className={`${inputCls} flex flex-col items-center justify-center rounded-none border-0 border-b-2 border-amber-500`}>
                      <span className="text-xs text-[var(--color-text-primary)] leading-none">{v || "â€”"}</span>
                      <span className="text-xs font-bold text-amber-600 leading-none">{q.answer}</span>
                    </div>
                  ) : (
                    <input type="text" inputMode="numeric" value={v} disabled={gcdLcmValidated}
                      onChange={e => setGcdLcmAnswers(prev => prev.map((a, j) => j === i ? e.target.value.replace(/[^0-9]/g, "") : a))}
                      className={`${inputCls} ${ok === null ? "focus:border-[var(--color-accent-alg)]" : ""}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* A3.6 â€” True/false GCD/LCM exercise */}
      {!showEvalScore && currentStep?.kind === "true_false_gcd_lcm" && activeTfGcdLcmConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeTfGcdLcmConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">SÃ©lectionnez si c&apos;est vrai ou faux.</p>
          <div className="space-y-3">
            {activeTfGcdLcmConfig.questions.map((q, i) => {
              const sel = tfGcdLcmAnswers[i];
              return (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <span className="flex-1 text-sm text-[var(--color-text-primary)]">{q.statement}</span>
                  <div className="flex gap-1 shrink-0">
                    {([true, false] as const).map((val) => {
                      const label = val ? "Vrai" : "Faux";
                      const isSelected = sel === val;
                      const isCorrect = val === q.answer;
                      let cls = "px-3 py-1.5 rounded border text-xs font-bold transition-colors ";
                      if (!tfGcdLcmValidated) {
                        cls += isSelected
                          ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                          : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]";
                      } else if (isSelected && isCorrect) {
                        cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                      } else if (isSelected && !isCorrect) {
                        cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                      } else if (!isSelected && isCorrect) {
                        cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]";
                      } else {
                        cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-40";
                      }
                      return (
                        <button key={String(val)} type="button" disabled={tfGcdLcmValidated}
                          onClick={() => setTfGcdLcmAnswers(prev => prev.map((a, j) => j === i ? val : a))}
                          className={cls}>
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Eval score screen */}
      {showEvalScore && evalFinalGrade !== null && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">RÃ©sultats de l&apos;Ã©valuation</h2>
          <ul className="space-y-2">
            {evalRowData.map((row, i) => {
              const color = row.score === row.max ? "text-green-600" : row.score > 0 ? "text-amber-600" : "text-red-500";
              return (
                <li key={i} className="flex items-center justify-between rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3">
                  <span className="text-sm text-[var(--color-text-primary)]">{row.label}</span>
                  <span className={`text-sm font-bold ${color}`}>{row.score}/{row.max}</span>
                </li>
              );
            })}
          </ul>
          <div className={`rounded-[var(--radius-lg)] border-2 p-6 text-center ${evalFinalGrade >= PASSING_GRADE ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/5" : "border-red-400 bg-red-50 dark:bg-red-900/10"}`}>
            <p className="text-xs uppercase tracking-wide text-[var(--color-text-secondary)]">Note</p>
            <p className="text-5xl font-bold text-[var(--color-text-primary)]">{evalFinalGrade.toFixed(1)}</p>
            <p className="text-sm text-[var(--color-text-secondary)]">sur 6 Â· {evalEarnedPts}/{evalTotalPts_state} pts</p>
            <p className={`mt-3 text-base font-bold ${evalFinalGrade >= PASSING_GRADE ? "text-[var(--color-accent-alg)]" : "text-red-500"}`}>
              {evalFinalGrade >= PASSING_GRADE ? "âœ“ RÃ©ussi" : "âœ— Ã€ amÃ©liorer"}
            </p>
            <p className="mt-1 text-xs text-[var(--color-text-secondary)]">Seuil de rÃ©ussite : {PASSING_GRADE}/6</p>
          </div>
        </div>
      )}

      {/* Eval start screen */}
      {currentStep?.kind === "eval_start" && (
        <div className="flex flex-col gap-8 py-8">
          <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--color-accent-alg)]/10">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-alg)" strokeWidth="1.5" aria-hidden>
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-alg)]">
              Ã‰valuation
            </p>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" lang={currentStepHasPivotTitle ? pivot : undefined} dir={currentStepHasPivotTitle && (pivot === "ar" || pivot === "fa") ? "rtl" : "ltr"}>
              {currentStepTitle}
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Ã‰value ta maÃ®trise de ce module.</p>
            <p className="text-sm text-[var(--color-text-secondary)]">L&apos;Ã©valuation est chronomÃ©trÃ©e. Tu as {revisionMode ? "30 minutes" : "5 minutes"} pour complÃ©ter l&apos;Ã©valuation.</p>
            <p className="text-sm text-[var(--color-text-secondary)]">Les exercices apparaÃ®tront au dÃ©marrage du chronomÃ¨tre.</p>
          </div>
          <button
            type="button"
            onClick={startEval}
            className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] px-6 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80"
          >
            Commencer
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          </div>
        </div>
      )}

      {/* Pass toggle */}
      {currentStep?.kind === "pass_toggle" && (
        <div className="flex flex-col items-center gap-8 py-4 text-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-alg)]">
              Ã‰valuation
            </p>
            <h2 className="mt-2 text-xl font-bold text-[var(--color-text-primary)]">
              Passer le module ?
            </h2>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              As-tu compris et maÃ®trisÃ© ce module ?
            </p>
          </div>
          <div className="flex w-full gap-3">
            <button
              type="button"
              onClick={() => setToggleAnswer("oui")}
              className={`flex-1 rounded-xl py-5 text-base font-bold transition-all ${
                toggleAnswer === "oui"
                  ? "border-2 border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)] shadow-sm"
                  : "border-2 border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)] hover:bg-blue-50 dark:hover:bg-blue-950/20"
              }`}
            >
              Oui
            </button>
            <button
              type="button"
              onClick={() => setToggleAnswer("non")}
              className={`flex-1 rounded-xl py-5 text-base font-bold transition-all ${
                toggleAnswer === "non"
                  ? "bg-red-400 text-white shadow-sm"
                  : "border-2 border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-950/20"
              }`}
            >
              Non
            </button>
          </div>
        </div>
      )}

      {/* Fixed bottom nav â€” hidden on eval_start announce screen */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)] ${currentStep?.kind === "eval_start" ? "hidden" : ""}`}>
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            {/* Back button â€” hidden on eval start and score screen */}
            {(currentStep?.kind !== "eval_start" && !showEvalScore) ? (
              <button
                type="button"
                onClick={goBack}
                disabled={isFirstStep || currentStep?.kind === "pass_toggle"}
                className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-opacity disabled:opacity-30"
              >
                â† Retour
              </button>
            ) : (
              <span />
            )}

            {/* Validate (exercises only) â€” hidden on score screen */}
            {!showEvalScore && (stepValidate || (!isInEvalPhase && stepReset)) ? (
              <div className="flex items-center gap-2">
                {!isInEvalPhase && stepReset && (
                  <button
                    type="button"
                    onClick={stepReset}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90"
                    aria-label="RÃ©initialiser"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 .49-4" />
                    </svg>
                  </button>
                )}
                {stepValidate && (
                  <button
                    type="button"
                    onClick={stepValidate}
                    disabled={!stepCanValidate}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-alg)] text-white shadow-sm transition-opacity hover:opacity-90 active:scale-90 disabled:opacity-30"
                    aria-label="Valider"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </button>
                )}
              </div>
            ) : (
              <span />
            )}

            {/* Next / Finish */}
            {currentStep?.kind !== "eval_start" && (
              <button
                type="button"
                onClick={goNext}
                disabled={
                  (currentStep?.kind === "pass_toggle" && toggleAnswer === null) ||
                  (isInEvalPhase && (
                    (currentStep?.kind === "arithmetic_group" && !arithValidated) ||
                    (currentStep?.kind === "column_grid" && !gridValidated) ||
                    (currentStep?.kind === "word_problems" && !wpValidated) ||
                    (currentStep?.kind === "unit_conversion" && !unitConversionValidated) ||
                    (currentStep?.kind === "rounding_group" && !roundingValidated) ||
                    (currentStep?.kind === "frac_id" && !fracIdValidated) ||
                    (currentStep?.kind === "frac_equiv" && !fracEquivValidated) ||
                    (currentStep?.kind === "frac_simplify" && !fracSimplifyValidated) ||
                    (currentStep?.kind === "frac_compare" && !fracCompareValidated) ||
                    (currentStep?.kind === "number_select" && !numberSelectValidated) ||
                    (currentStep?.kind === "encadrement" && !encadrementValidated) ||
                    (currentStep?.kind === "odd_even" && !oddEvenValidated) ||
                    (currentStep?.kind === "nl_multi" && !nlMultiValidated) ||
                    (currentStep?.kind === "ordering" && !orderingValidated) ||
                    (currentStep?.kind === "seq_rule" && !seqRuleValidated) ||
                    (currentStep?.kind === "seq_complete" && !seqCompleteValidated) ||
                    (currentStep?.kind === "div_column_grid" && !divGridValidated) ||
                    (currentStep?.kind === "mul_two_digit" && !mul2dValidated) ||
                    (currentStep?.kind === "expr_comparison" && !exprCompValidated) ||
                    (currentStep?.kind === "mult_select" && !multSelectValidated) ||
                    (currentStep?.kind === "mult_list" && !multListValidated) ||
                    (currentStep?.kind === "true_false_mult_div" && !tfMultDivValidated) ||
                    (currentStep?.kind === "find_divisors" && !findDivisorsValidated) ||
                    (currentStep?.kind === "div_select" && !divSelectValidated) ||
                    (currentStep?.kind === "div_by" && !divByValidated) ||
                    (currentStep?.kind === "missing_digit_div" && !missingDigitValidated) ||
                    (currentStep?.kind === "gcd_lcm" && !gcdLcmValidated) ||
                    (currentStep?.kind === "true_false_gcd_lcm" && !tfGcdLcmValidated) ||
                    (currentStep?.kind === "dec_ordering" && !decOrderingValidated) ||
                    (currentStep?.kind === "dec_seq_rule" && !decSeqRuleValidated) ||
                    (currentStep?.kind === "dec_seq_complete" && !decSeqCompleteValidated)
                  ))
                }
                className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl bg-[var(--color-accent-alg)] px-4 text-sm font-medium text-white transition-opacity disabled:opacity-30"
              >
                {showEvalScore || currentStep?.kind === "pass_toggle" || isLastStep
                  ? "Terminer âœ“"
                  : "Suivant â†’"}
              </button>
            )}
          </div>
        </div>
        <div style={{ height: 72 }} />
      </div>
    </div>
  );
}

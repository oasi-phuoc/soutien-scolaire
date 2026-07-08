"use client";

import { useRouter } from "next/navigation";
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { answerMatches } from "@/lib/curriculum/content/math/math-a1-types";
import type { MathExerciseItem, MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";
import { GENERATED_ALGEBRA_LESSONS, generateAlgebraQuestions } from "@/lib/curriculum/content/math/generated-algebra-exercises";
import { getTrad } from "@/lib/curriculum/content/math/trad";
import type { BlockTrad } from "@/lib/curriculum/content/math/trad";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { getMathModule } from "@/lib/curriculum/math-data";
import { loadProgress, saveProgress, completeSubmodule } from "@/lib/progress/math-progress";
import { medalFromPercent, PASSING_GRADE, linearSwissGrade } from "@/lib/scoring";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { EvalGuardSentinel } from "@/components/EvalNavGuard";
import { EvalAnnounceScreen } from "@/components/ui/EvalAnnounceScreen";
import { EvalFinishButton } from "@/components/ui/EvalFinishButton";
import type { PivotCode } from "@/lib/pivot-langs";
import { PrintConfigSheet } from "@/components/ui/PrintConfigSheet";

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
import {
  G6GridReadExercise,
  G6GridPlaceExercise,
  G6MedievalLocateExercise,
  G6CartesianCoordsExercise,
  G6Q1FigureCoordsExercise,
  G6Q2FigureCoordsExercise,
  G6QAllFigureCoordsExercise,
  G6MapGenevaExercise,
  G6MapBielExercise,
  G6RebeuvelierExercise,
  type G6EvalSnapshot,
} from "@/components/math/geo/G6PlanExercises";
import {
  G6LineIntersectExercise,
  G6CartesianPlaceExercise,
  G6FindVertexExercise,
  G6PerpParallelPlaceExercise,
} from "@/components/math/geo/G6CartesianExercises";
import { EvalRevealContext } from "@/lib/eval-reveal-context";

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

function formatAlgebraDisplay(text: string) {
  return text
    .replace(/−\s*-\s*(\d+(?:[,.]\d+)?)/g, "-(-$1)")
    .replace(/-\s*-\s*(\d+(?:[,.]\d+)?)/g, "-(-$1)")
    .replace(/\+\s*-\s*(\d+(?:[,.]\d+)?)/g, "+ (-$1)");
}

function cleanAlgebraNumberInput(value: string) {
  return value
    .replace(/−/g, "-")
    .replace(/,/g, ".")
    .replace(/[^0-9./-]/g, "")
    .replace(/(?!^)-/g, "");
}

function formatCompNum(n: number): string {
  const s = n.toString();
  if (s.length <= 3) return s;
  if (s.length <= 6) return s.slice(0, s.length - 3) + " " + s.slice(s.length - 3);
  return s;
}

// ── Step types ──────────────────────────────────────────────────────────────
type ArithOp = "+" | "-" | "×" | "÷";
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

type WordLevel = "a1" | "a2" | "b1" | "multdiv" | "decimal_e" | "decimal_m" | "decimal_h" | "propor_e" | "propor_m" | "propor_h" | "eq_e" | "eq_m" | "eq_h";
type WordProblemQ = { textFr: string; answer: number; op: ArithOp; calculation?: string };
type WordProblemsConfig = { exNum: number; level: WordLevel; questions: WordProblemQ[] };
type WordProblemsStep = { kind: "word_problems"; lesson: MathSubmoduleLesson; config: WordProblemsConfig };
type UnitConversionDomain = "length" | "area" | "volume" | "capacity" | "mass" | "time";
type UnitConversionQ = { value: string; from: string; to: string; answer: string };
type UnitConversionConfig = { exNum: number; domain: UnitConversionDomain; decimals: boolean; questions: UnitConversionQ[] };
type UnitConversionStep = { kind: "unit_conversion"; lesson: MathSubmoduleLesson; config: UnitConversionConfig };
type GeoPlacementKind = "square" | "rectangle" | "triangle" | "parallelogram" | "trapezoid" | "circle" | "rhombus";
type GeoPlacementStep = { kind: "geo_placement"; lesson: MathSubmoduleLesson; geoKind: GeoPlacementKind; exNum: number; label: string };
type VolumePlacementKind = "cube" | "cuboid" | "prism" | "cylinder" | "pyramid" | "cone_sphere" | "prism_pyramid";
type VolumePlacementStep = { kind: "volume_placement"; lesson: MathSubmoduleLesson; volumeKind: VolumePlacementKind; exNum: number; mode: "volume" | "missing"; decimals?: boolean; label: string };
type G6PlanStep = { kind: "g6_plan"; lesson: MathSubmoduleLesson; variant: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15; exNum: number };

type AlgebraGroupQuestion = { expr: string; answer: number; difficulty: "easy" | "medium" | "hard" };
type AlgebraGroupStep = { kind: "algebra_group"; lesson: MathSubmoduleLesson; letter: string; value: number; questions: AlgebraGroupQuestion[] };
type EquationSolution = { kind: "rational"; num: number; den: number } | { kind: "impossible" } | { kind: "infinite" };
type EquationQuestion = { expr: string; solution: EquationSolution; development?: string[]; operations?: string[] };
type EquationGroupStep = { kind: "equation_group"; lesson: MathSubmoduleLesson; questions: EquationQuestion[]; exNum?: number };
type SystemEquationQuestion = { equations: [string, string]; answer: string; acceptable: string[]; development: string[]; operations?: string[] };
type SystemEquationStep = { kind: "system_equation"; lesson: MathSubmoduleLesson; question: SystemEquationQuestion; exNum?: number };
type FracEqSide = { terms: Array<{ num: number; den: number; xMul: number }> };
type FracEquationGroupStep = { kind: "frac_equation_group"; lesson: MathSubmoduleLesson; questions: Array<{ lhs: FracEqSide; rhs: FracEqSide; solution: EquationSolution }> };
type MonomialQuestion = {
  expression: string;
  coefficient: string[];
  literal: string[];
  degree: number;
};
type MonomialGroupStep = { kind: "monomial_group"; lesson: MathSubmoduleLesson; questions: MonomialQuestion[] };
type SymbolicQuestion = { expression: string; acceptable: string[]; truth?: boolean };
type SymbolicGroupStep = {
  kind: "symbolic_group";
  lesson: MathSubmoduleLesson;
  exNum: number;
  instruction: string;
  mode: "input" | "true_false";
  questions: SymbolicQuestion[];
  // Shared variable values shown once below the instruction (A9.3).
  givens?: { letter: string; value: number }[];
};

type FlatStep = TheoryStep | ExerciseStep | NumberLineStep | ComparisonStep | ArithGroupStep | ColumnGridStep | DivColGridStep | ExprCompStep | EvalStartStep | PassToggleStep | RoundingStep | FracIdStep | FracEquivStep | FracSimplifyStep | FracCompStep | NumberSelectStep | EncadrementStep | OddEvenStep | NLMultiStep | OrderingStep | SeqRuleStep | SeqCompleteStep | Mul2DigitStep | DecOrderingStep | DecSeqRuleStep | DecSeqCompleteStep | MultSelectStep | MultListStep | TrueFalseMultDivStep | FindDivisorsStep | DivSelectStep | DivByStep | MissingDigitDivStep | GcdLcmStep | TrueFalseGcdLcmStep | WordProblemsStep | UnitConversionStep | GeoPlacementStep | VolumePlacementStep | G6PlanStep | AlgebraGroupStep | MonomialGroupStep | SymbolicGroupStep | EquationGroupStep | SystemEquationStep | FracEquationGroupStep;

// ── Comparison exercise ───────────────────────────────────────────────────────
type ComparisonQ = { a: number; b: number; answer: "<" | "=" | ">" };
type ComparisonConfig = { questions: ComparisonQ[]; level: 1 | 2 };

function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ── Unit conversion generators (G2.1 / G2.2) ──────────────────────────────────
const UNIT_FACTORS: Record<UnitConversionDomain, Record<string, number>> = {
  length: { km: 1000, hm: 100, dam: 10, m: 1, dm: 0.1, cm: 0.01, mm: 0.001 },
  area: { "km²": 1_000_000, "hm²": 10_000, "dam²": 100, "m²": 1, "dm²": 0.01, "cm²": 0.0001, "mm²": 0.000001 },
  volume: { "km³": 1_000_000_000, "hm³": 1_000_000, "dam³": 1000, "m³": 1, "dm³": 0.001, "cm³": 0.000001, "mm³": 0.000000001 },
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

// Max unit-step span per domain to keep answers within safe integer range (< 10^13)
const UNIT_MAX_SPAN: Partial<Record<UnitConversionDomain, number>> = {
  volume: 3,  // each step = ×1000; 3 steps → max ratio 10^9
  area: 5,    // each step = ×100; 5 steps → max ratio 10^10
};

function genUnitConversionQ(domain: UnitConversionDomain, decimals: boolean): UnitConversionQ {
  const factors = UNIT_FACTORS[domain];
  const units = Object.keys(factors);
  const maxSpan = UNIT_MAX_SPAN[domain] ?? units.length - 1;

  let from: string, to: string, fromIdx: number, toIdx: number;
  let attempts = 0;
  do {
    fromIdx = rnd(0, units.length - 1);
    toIdx = rnd(0, units.length - 1);
    from = units[fromIdx]!;
    to = units[toIdx]!;
    if (++attempts > 100) break;
  } while (to === from || Math.abs(fromIdx - toIdx) > maxSpan);

  const valueNum = decimals ? randomDecimalValue() : rnd(1, 99999);
  const rawAnswer = valueNum * factors[from]! / factors[to]!;
  // Round to 10 significant figures to eliminate floating-point noise from large power-of-10 ratios
  const answer = rawAnswer === 0 ? 0 : parseFloat(rawAnswer.toPrecision(10));
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

// ── Word Problems (A2.4) ──────────────────────────────────────────────────────
const WP_ADD: Array<(a: number, b: number) => string> = [
  (a, b) => `${a} enfants jouent dans la cour. ${b} autres enfants les rejoignent. Combien y a-t-il d'enfants en tout ?`,
  (a, b) => `Marie a ${a} billes. Elle en gagne ${b} de plus à la récréation. Combien de billes a-t-elle ?`,
  (a, b) => `Il y a ${a} livres sur l'étagère. On y ajoute ${b} nouveaux livres. Combien y en a-t-il ?`,
  (a, b) => `Paul a économisé ${a} CHF. Sa grand-mère lui donne ${b} CHF. Combien a-t-il au total ?`,
  (a, b) => `Une boîte contient ${a} crayons. On y met ${b} crayons de plus. Combien y a-t-il de crayons ?`,
  (a, b) => `Léa a ${a} autocollants. Elle en achète ${b} autres. Combien en possède-t-elle ?`,
  (a, b) => `Un fermier a ${a} poules. Il en achète ${b} de plus au marché. Combien de poules a-t-il ?`,
  (a, b) => `${a} spectateurs sont dans la salle. ${b} autres arrivent. Combien y a-t-il de spectateurs ?`,
  (a, b) => `Une boulangerie vend ${a} croissants le matin et ${b} l'après-midi. Combien en a-t-elle vendu en tout ?`,
  (a, b) => `Tom a lu ${a} pages hier. Il en lit ${b} aujourd'hui. Combien de pages a-t-il lues au total ?`,
  (a, b) => `Un jardinier a planté ${a} tulipes. Il en plante ${b} autres. Combien en a-t-il planté ?`,
  (a, b) => `Dans un tiroir, il y a ${a} stylos. On y range ${b} stylos de plus. Combien y en a-t-il ?`,
  (a, b) => `Zoé a ${a} points dans son jeu. Elle en gagne ${b} de plus. Quel est son nouveau total ?`,
  (a, b) => `Le matin, ${a} élèves arrivent à l'école. ${b} autres s'ajoutent pour le sport. Combien y en a-t-il ?`,
  (a, b) => `Un bus transporte ${a} passagers. À l'arrêt suivant, ${b} personnes montent. Combien y en a-t-il ?`,
];
const WP_SUB: Array<(a: number, b: number) => string> = [
  (a, b) => `${a} enfants jouent dans la cour. ${b} rentrent à la maison. Combien reste-t-il d'enfants ?`,
  (a, b) => `Une bibliothèque possède ${a} livres. On en retire ${b}. Combien en reste-t-il ?`,
  (a, b) => `Paul a ${a} billes. Il en perd ${b}. Combien lui en reste-t-il ?`,
  (a, b) => `Marie a ${a} CHF. Elle en dépense ${b} au magasin. Combien lui reste-t-il ?`,
  (a, b) => `Un bocal contient ${a} bonbons. Les enfants en mangent ${b}. Combien en reste-t-il ?`,
  (a, b) => `${a} personnes font la queue. ${b} s'en vont. Combien en reste-t-il ?`,
  (a, b) => `Il y a ${a} livres sur une étagère. On en enlève ${b}. Combien en reste-t-il ?`,
  (a, b) => `Un fermier a ${a} œufs. Il en vend ${b} au marché. Combien lui en reste-t-il ?`,
  (a, b) => `Tom avait ${a} points. Il en perd ${b}. Quel est son nouveau score ?`,
  (a, b) => `Un train avait ${a} passagers. ${b} sont descendus à la gare. Combien en reste-t-il ?`,
  (a, b) => `Léa avait ${a} autocollants. Elle en donne ${b} à son amie. Combien lui en reste-t-il ?`,
  (a, b) => `Il y avait ${a} pommes dans le panier. On en a retiré ${b}. Combien en reste-t-il ?`,
  (a, b) => `Un magasin avait ${a} articles. Il en vend ${b} dans la journée. Combien lui en reste-t-il ?`,
  (a, b) => `${a} oiseaux étaient sur un arbre. ${b} s'envolent. Combien en reste-t-il sur l'arbre ?`,
  (a, b) => `Zoé avait ${a} figurines. Elle en offre ${b} à sa cousine. Combien lui en reste-t-il ?`,
];

const WP_ADD_A1: Array<(a: number, b: number) => string> = [
  (a, b) => `Lina a ${a} billes. Elle en gagne ${b}. Combien a-t-elle de billes ?`,
  (a, b) => `Il y a ${a} pommes. On ajoute ${b} pommes. Combien y a-t-il de pommes ?`,
  (a, b) => `${a} enfants jouent. ${b} enfants arrivent. Combien y a-t-il d'enfants ?`,
  (a, b) => `Noa a ${a} cartes. Il reçoit ${b} cartes. Combien a-t-il de cartes ?`,
  (a, b) => `Dans la boîte, il y a ${a} crayons. On met ${b} crayons. Combien y en a-t-il ?`,
  (a, b) => `Il y a ${a} fleurs. On plante ${b} fleurs. Combien y a-t-il de fleurs ?`,
  (a, b) => `Mia lit ${a} pages. Elle lit encore ${b} pages. Combien de pages lit-elle ?`,
  (a, b) => `Un panier contient ${a} poires. On ajoute ${b} poires. Combien y en a-t-il ?`,
  (a, b) => `Tom a ${a} points. Il gagne ${b} points. Quel est son total ?`,
  (a, b) => `Il y a ${a} voitures. ${b} voitures arrivent. Combien y a-t-il de voitures ?`,
  (a, b) => `Sara a ${a} gommes. Elle achète ${b} gommes. Combien en a-t-elle ?`,
  (a, b) => `${a} oiseaux sont sur le fil. ${b} oiseaux arrivent. Combien y en a-t-il ?`,
  (a, b) => `Un sac contient ${a} cubes. On ajoute ${b} cubes. Combien de cubes y a-t-il ?`,
  (a, b) => `Il y a ${a} élèves. ${b} élèves entrent. Combien y a-t-il d'élèves ?`,
  (a, b) => `Eli a ${a} autocollants. Il en reçoit ${b}. Combien en a-t-il ?`,
];

const WP_SUB_A1: Array<(a: number, b: number) => string> = [
  (a, b) => `Lina a ${a} billes. Elle en perd ${b}. Combien lui en reste-t-il ?`,
  (a, b) => `Il y a ${a} pommes. On enlève ${b} pommes. Combien reste-t-il de pommes ?`,
  (a, b) => `${a} enfants jouent. ${b} enfants partent. Combien reste-t-il d'enfants ?`,
  (a, b) => `Noa a ${a} cartes. Il donne ${b} cartes. Combien lui en reste-t-il ?`,
  (a, b) => `Dans la boîte, il y a ${a} crayons. On retire ${b} crayons. Combien y en a-t-il ?`,
  (a, b) => `Il y a ${a} fleurs. On coupe ${b} fleurs. Combien reste-t-il de fleurs ?`,
  (a, b) => `Mia a ${a} pages à lire. Elle lit ${b} pages. Combien reste-t-il de pages ?`,
  (a, b) => `Un panier contient ${a} poires. On mange ${b} poires. Combien en reste-t-il ?`,
  (a, b) => `Tom a ${a} points. Il perd ${b} points. Quel est son total ?`,
  (a, b) => `Il y a ${a} voitures. ${b} voitures partent. Combien reste-t-il de voitures ?`,
  (a, b) => `Sara a ${a} gommes. Elle en donne ${b}. Combien lui en reste-t-il ?`,
  (a, b) => `${a} oiseaux sont sur le fil. ${b} oiseaux s'envolent. Combien en reste-t-il ?`,
  (a, b) => `Un sac contient ${a} cubes. On enlève ${b} cubes. Combien de cubes reste-t-il ?`,
  (a, b) => `Il y a ${a} élèves. ${b} élèves sortent. Combien reste-t-il d'élèves ?`,
  (a, b) => `Eli a ${a} autocollants. Il en donne ${b}. Combien lui en reste-t-il ?`,
];

const WP_ADD_B1: Array<(a: number, b: number) => string> = [
  (a, b) => `Pour une sortie scolaire, ${a} billets sont réservés le matin. Dans l'après-midi, l'école ajoute ${b} billets pour une autre classe. Combien de billets sont réservés au total ?`,
  (a, b) => `Une association collecte ${a} CHF lors d'une vente. Le lendemain, elle reçoit encore ${b} CHF de dons. Quelle somme possède-t-elle maintenant ?`,
  (a, b) => `La bibliothèque avait déjà classé ${a} livres. Une nouvelle livraison de ${b} livres doit aussi être rangée. Combien de livres sont à classer en tout ?`,
  (a, b) => `Un club sportif compte ${a} inscriptions en début de semaine. Après la journée portes ouvertes, ${b} nouvelles personnes s'inscrivent. Combien d'inscriptions y a-t-il ?`,
  (a, b) => `Une entreprise a préparé ${a} colis lundi. Mardi, elle en prépare ${b} supplémentaires. Combien de colis ont été préparés ?`,
  (a, b) => `Lors d'un tournoi, ${a} spectateurs sont entrés avant midi. Après midi, ${b} autres spectateurs arrivent. Combien de spectateurs sont entrés ?`,
  (a, b) => `Un magasin vend ${a} articles pendant la matinée. Il en vend encore ${b} pendant l'après-midi. Combien d'articles a-t-il vendus ?`,
  (a, b) => `Une ville plante ${a} arbres dans un quartier. Elle en plante ensuite ${b} dans un parc voisin. Combien d'arbres sont plantés ?`,
  (a, b) => `Un entrepôt contient ${a} cahiers. Une commande de ${b} cahiers arrive. Combien de cahiers l'entrepôt contient-il ?`,
  (a, b) => `Une course accueille ${a} participants inscrits en ligne. Le jour même, ${b} participants s'inscrivent sur place. Combien de participants y a-t-il ?`,
  (a, b) => `Un musée reçoit ${a} visiteurs pendant la semaine. Le week-end, ${b} visiteurs supplémentaires viennent. Combien de visiteurs a-t-il reçus ?`,
  (a, b) => `Une école possède ${a} tablettes. Elle en achète ${b} pour équiper de nouvelles classes. Combien de tablettes possède-t-elle ?`,
  (a, b) => `Une usine produit ${a} pièces avant la pause. Après la pause, elle produit ${b} pièces de plus. Combien de pièces sont produites ?`,
  (a, b) => `Un agriculteur récolte ${a} kg de pommes le matin. Il récolte encore ${b} kg l'après-midi. Combien de kilogrammes récolte-t-il ?`,
  (a, b) => `Une caisse contient ${a} enveloppes. On ajoute ${b} enveloppes pour préparer un envoi. Combien d'enveloppes contient la caisse ?`,
];

const WP_SUB_B1: Array<(a: number, b: number) => string> = [
  (a, b) => `Un cinéma avait prévu ${a} places pour une séance. Après plusieurs annulations, ${b} places ne sont plus réservées. Combien de places restent réservées ?`,
  (a, b) => `Une association possède ${a} CHF pour financer un projet. Elle dépense ${b} CHF pour acheter du matériel. Quelle somme lui reste-t-il ?`,
  (a, b) => `La bibliothèque compte ${a} livres dans une réserve. Elle en transfère ${b} vers les classes. Combien de livres restent dans la réserve ?`,
  (a, b) => `Un club sportif avait ${a} ballons en stock. Après un tournoi, ${b} ballons sont abîmés et retirés. Combien de ballons utilisables restent-ils ?`,
  (a, b) => `Une entreprise doit livrer ${a} colis. Elle en livre ${b} le matin. Combien de colis reste-t-il à livrer ?`,
  (a, b) => `Lors d'un salon, ${a} badges sont imprimés. Les organisateurs en distribuent ${b} dès l'ouverture. Combien de badges restent-ils ?`,
  (a, b) => `Un magasin avait ${a} articles en rayon. Il en vend ${b} pendant la journée. Combien d'articles restent en rayon ?`,
  (a, b) => `Une ville dispose de ${a} plants pour ses jardins. Elle en utilise ${b} dans le premier quartier. Combien de plants restent disponibles ?`,
  (a, b) => `Un entrepôt contient ${a} cahiers. Une école en commande ${b}. Combien de cahiers restent dans l'entrepôt ?`,
  (a, b) => `Une course comptait ${a} inscrits. Avant le départ, ${b} personnes se désistent. Combien de participants restent inscrits ?`,
  (a, b) => `Un musée reçoit ${a} brochures. Il en distribue ${b} aux visiteurs. Combien de brochures reste-t-il ?`,
  (a, b) => `Une école possède ${a} tablettes. Elle en prête ${b} à une autre école. Combien de tablettes lui restent-elles ?`,
  (a, b) => `Une usine a produit ${a} pièces. Lors du contrôle, ${b} pièces sont écartées. Combien de pièces restent acceptées ?`,
  (a, b) => `Un agriculteur récolte ${a} kg de pommes. Il en vend ${b} kg au marché. Combien de kilogrammes lui restent-ils ?`,
  (a, b) => `Une caisse contient ${a} enveloppes. On en utilise ${b} pour un envoi. Combien d'enveloppes restent dans la caisse ?`,
];

const WP_ADD_BY_LEVEL: Record<"a1" | "a2" | "b1", Array<(a: number, b: number) => string>> = {
  a1: WP_ADD_A1,
  a2: WP_ADD,
  b1: WP_ADD_B1,
};

const WP_SUB_BY_LEVEL: Record<"a1" | "a2" | "b1", Array<(a: number, b: number) => string>> = {
  a1: WP_SUB_A1,
  a2: WP_SUB,
  b1: WP_SUB_B1,
};

const A2_4_CONTEXT_NAMES = [
  // Élèves de classe
  "Yousef", "Daryna", "Yaroslav", "Mariam", "Sofia", "Ahmed", "Svitlana", "Omar",
  "Rachid", "Sana", "Leila", "Aïcha", "Timur", "Salma", "Farid", "Zahra",
  "Nadia", "Mustafa", "Iryna", "Rustam", "Amina", "Bilal", "Fatima", "Murat",
  "Zabi", "Kamram", "Selma", "Alsina", "Rojda", "Yoko", "Alicia", "Adna",
  "Rémi", "Jalal", "Rohani", "Sirin", "Elsa", "Alona", "Khalil", "Mozamel",
  "Muzghan", "Yaseen", "Ahmad", "Saber", "Yllia", "Zabihullah", "Sadik", "Olivia",
  // Arabes / maghrébins masculins
  "Ali", "Sami", "Adam", "Amir", "Karim", "Youssef", "Hassan", "Rami", "Nabil",
  "Malik", "Mohamed", "Ibrahim", "Hamza", "Khaled", "Walid", "Anas", "Tarek",
  // Arabes / maghrébins féminins
  "Sara", "Lina", "Nour", "Aya", "Amal", "Hana", "Mira", "Maya", "Samira",
  "Rania", "Yasmin", "Khadija", "Zainab", "Hiba", "Iman", "Asma", "Malika",
  // Persan / irano-afghan communs
  "Reza", "Farhad", "Navid", "Hamid", "Arash", "Sayed", "Jawad", "Bashir",
  "Soraya", "Shirin", "Laila", "Roya", "Nasrin", "Parisa",
  // Africains sub-sahariens premiers arrivants
  "Tesfay", "Dawit", "Yohannes", "Samuel", "Merhawi", "Daniel",
  "Selam", "Saba", "Ruta", "Meron", "Eden", "Senait",
  // Ukrainiens premiers arrivants
  "Andriy", "Oleksandr", "Mykola", "Viktor", "Roman", "Ivan",
  "Olena", "Kateryna", "Yulia", "Natalia", "Anastasia",
  // Divers
  "Elias", "Noé", "Milan", "Arben", "Dilan", "Anna", "Elena", "Irina", "Dina",
  // Neutres
  "Alex", "Noor", "Sasha", "Dany", "Mika", "Eli", "Rayan",
  // Ukrainiens masculins
  "Bohdan", "Dmytro", "Vasyl", "Ihor", "Pavlo", "Oleh", "Mykhailo", "Serhii",
  "Volodymyr", "Taras", "Petro", "Yuriy", "Kostiantyn", "Oleksiy", "Vitaliy",
  "Anatoliy", "Valentyn", "Artem", "Kyrylo", "Maksym", "Yevhen", "Stanislav",
  "Nazar", "Denys", "Borys", "Vadym", "Fedir", "Hryhorii", "Hlib", "Ruslan",
  // Ukrainiennes féminines
  "Oksana", "Inna", "Vira", "Liudmyla", "Halyna", "Tetiana", "Nadiia", "Uliana",
  "Mariia", "Larysa", "Tamara", "Valentyna", "Veronika", "Yevheniia", "Zhanna",
  "Khrystyna", "Marta", "Liliia", "Ruslana", "Zoriana", "Bohdana", "Olha",
  "Viktoriia", "Yelyzaveta", "Yaryna", "Sonya", "Alla", "Liuba", "Hanna", "Milena",
  // Afghans masculins
  "Ezatullah", "Nawab", "Naeem", "Shaheen", "Faizullah", "Ghulam", "Wali",
  "Rohullah", "Sediq", "Zia", "Niaz", "Daoud", "Qais", "Omid", "Bahroz",
  "Rahim", "Sharif", "Hafiz", "Shoaib", "Parwiz", "Zarghun", "Sardar",
  "Kabir", "Anwar", "Nasim", "Hazrat", "Naseer", "Aziz", "Ramiz", "Rafiullah",
  // Afghanes féminines
  "Freshta", "Hasina", "Farida", "Nilufar", "Zohal", "Saghar", "Zarlasht",
  "Gulnaz", "Anisa", "Hawa", "Mursal", "Najiba", "Palwasha", "Setara",
  "Farzana", "Pareesa", "Malalai", "Nafisa", "Marzia", "Breshna", "Rokhsar",
  "Sima", "Samia", "Nahid", "Aziza", "Sabrina", "Shaesta", "Roshan", "Latifa", "Zarghona",
  // Africains sub-sahariens masculins
  "Haile", "Yonas", "Berhe", "Amanuel", "Kibrom", "Tewolde", "Tekle", "Negasi",
  "Goitom", "Fissehaye", "Berhane", "Kofi", "Kwame", "Amadou", "Boubacar",
  "Moussa", "Sekou", "Mamadou", "Ibrahima", "Cheikh", "Ousmane", "Juma",
  "Baraka", "Emmanuel", "Sipho", "Themba", "Abdi", "Osei", "Kweku", "Yaw",
  // Africaines sub-sahariennes féminines
  "Tigist", "Hiwet", "Lidya", "Tsehay", "Lemlem", "Awet", "Feven", "Amara",
  "Adanech", "Fatou", "Aminata", "Mariama", "Aissatou", "Rokhaya", "Bineta",
  "Kadiatou", "Coumba", "Astou", "Ndèye", "Aïda", "Grace", "Mercy", "Joyce",
  "Abeba", "Chaltu", "Zenash", "Hirut", "Selamawit", "Miriam", "Desta",
  // Syriens masculins
  "Yaser", "Amin", "Firas", "Nizar", "Samir", "Wasim", "Bassem", "Ghassan",
  "Ziad", "Haitham", "Louai", "Ayman", "Mazen", "Jad", "Samer",
  // Syriennes féminines
  "Razan", "Nisreen", "Ghalia", "Bisan", "Dima", "Maysaa", "Rasha", "Ghada",
  "Reem", "Lana", "Yara", "Sireen", "Noura", "Nariman", "Dalia",
  // Portugais masculins
  "João", "Tiago", "André", "Ricardo", "Gonçalo", "Hugo", "Diogo", "Rui",
  "Carlos", "Luís", "Pedro", "Miguel", "Nuno", "Paulo", "Filipe",
  // Portugaises féminines
  "Ana", "Inês", "Catarina", "Patrícia", "Cláudia", "Rita", "Raquel", "Beatriz",
  "Joana", "Mariana", "Isabel", "Filipa", "Mónica", "Vanessa", "Carla",
  // Italiens masculins
  "Marco", "Luca", "Matteo", "Lorenzo", "Andrea", "Francesco", "Alessandro",
  "Davide", "Giulio", "Stefano", "Nicola", "Alberto", "Dario", "Claudio", "Roberto",
  // Italiennes féminines
  "Giulia", "Chiara", "Valentina", "Federica", "Alessandra", "Serena", "Francesca",
  "Laura", "Roberta", "Cristina", "Silvia", "Beatrice", "Patrizia", "Daniela", "Giorgia",
];

type A24ProblemTemplate = () => WordProblemQ;

function genA24ContextProblem(): WordProblemQ {
  const name = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
  const templates: A24ProblemTemplate[] = [
    () => {
      const r = rnd(80, 260), v = rnd(20, 90), j = rnd(10, 70);
      return { textFr: `Dans la cuisine, ${name} a trois bocaux de bonbons. Le premier contient ${r} bonbons rouges, le deuxième ${v} bonbons verts et le troisième ${j} bonbons jaunes. Combien y a-t-il de bonbons en tout ?`, answer: r + v + j, op: "+", calculation: `${r} + ${v} + ${j} = ${r + v + j}` };
    },
    () => {
      const r = rnd(120, 320), j = rnd(20, 110);
      return { textFr: `${name} a ${r} bonbons rouges et ${j} bonbons jaunes. Combien y a-t-il de bonbons rouges de plus que de bonbons jaunes ?`, answer: r - j, op: "-", calculation: `${r} − ${j} = ${r - j}` };
    },
    () => {
      const r = rnd(80, 220), v = rnd(20, 90), j = rnd(15, 80);
      return { textFr: `${name} possède ${r} bonbons rouges, ${v} bonbons verts et ${j} bonbons jaunes. Il donne tous les bonbons rouges à un ami. Combien lui reste-t-il de bonbons ?`, answer: v + j, op: "+", calculation: `${v} + ${j} = ${v + j}` };
    },
    () => {
      const total = rnd(350, 950), empr = rnd(80, 260);
      return { textFr: `La bibliothèque de l'école a ${total} livres de français. Actuellement, ${empr} livres sont empruntés par des élèves. Combien de livres reste-t-il à la bibliothèque ?`, answer: total - empr, op: "-", calculation: `${total} − ${empr} = ${total - empr}` };
    },
    () => {
      const total = rnd(600, 1400), empr = rnd(100, 280), demain = rnd(80, 260);
      return { textFr: `La bibliothèque a ${total} livres. ${empr} livres sont déjà prêtés. Demain, ${demain} livres supplémentaires seront prêtés. Combien de livres restera-t-il à la bibliothèque ?`, answer: total - empr - demain, op: "-", calculation: `${total} − ${empr} − ${demain} = ${total - empr - demain}` };
    },
    () => {
      const pages = rnd(900, 2500), lues = rnd(250, pages - 120);
      return { textFr: `${name} a emprunté un livre de ${pages} pages à la médiathèque. Il a déjà lu ${lues} pages. Combien de pages doit-il encore lire ?`, answer: pages - lues, op: "-", calculation: `${pages} − ${lues} = ${pages - lues}` };
    },
    () => {
      const classes = rnd(18, 42), eleves = rnd(320, 780), profs = rnd(25, 70);
      return { textFr: `Dans une école, il y a ${classes} classes, ${eleves} élèves et ${profs} professeurs. Combien de personnes y a-t-il en tout dans l'école ?`, answer: eleves + profs, op: "+", calculation: `${eleves} + ${profs} = ${eleves + profs}` };
    },
    () => {
      const eleves = rnd(350, 820), filles = rnd(140, Math.floor(eleves * 0.55));
      return { textFr: `Dans une école, il y a ${eleves} élèves. Parmi eux, ${filles} sont des filles. Combien y a-t-il de garçons ?`, answer: eleves - filles, op: "-", calculation: `${eleves} − ${filles} = ${eleves - filles}` };
    },
    () => {
      const eleves = rnd(350, 820), malades = rnd(20, 80), retard = rnd(5, 35);
      return { textFr: `Aujourd'hui, une école compte ${eleves} élèves inscrits. ${malades} élèves sont malades et ${retard} sont en retard. Combien d'élèves sont déjà à l'école ?`, answer: eleves - malades - retard, op: "-", calculation: `${eleves} − ${malades} − ${retard} = ${eleves - malades - retard}` };
    },
    () => {
      const base = rnd(2500, 5200), plus = rnd(200, 900);
      return { textFr: `${name} gagne ${base} francs par mois. Son amie gagne ${plus} francs de plus. Combien gagne son amie ?`, answer: base + plus, op: "+", calculation: `${base} + ${plus} = ${base + plus}` };
    },
    () => {
      const name2 = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
      const count = rnd(700, 1800), diff = rnd(80, 360);
      return { textFr: `${name} collectionne les gommettes. ${name} en a ${count}. C'est ${diff} de moins que ${name2}. Combien ${name2} en a-t-il ?`, answer: count + diff, op: "+", calculation: `${count} + ${diff} = ${count + diff}` };
    },
    () => {
      const today = rnd(60, 180), diff = rnd(20, 110);
      return { textFr: `Ce matin, dans le parking de la gare de Sion, il y a ${today} vélos. Hier, il y avait ${diff} vélos de plus. Combien y avait-il de vélos hier ?`, answer: today + diff, op: "+", calculation: `${today} + ${diff} = ${today + diff}` };
    },
    () => {
      const livre = rnd(20, 80), jeuPlus = rnd(8, 35), puzzle = rnd(20, 60), peluche = rnd(25, 70), billet = rnd(180, 300);
      const depenses = livre + livre + jeuPlus + puzzle + peluche;
      return { textFr: `${name} achète un livre à ${livre} francs, un jeu qui coûte ${jeuPlus} francs de plus que le livre, un puzzle à ${puzzle} francs et une peluche à ${peluche} francs. Il paie avec ${billet} francs. Combien reçoit-il de monnaie ?`, answer: billet - depenses, op: "-", calculation: `${billet} − ${depenses} = ${billet - depenses}` };
    },
    () => {
      const depart = rnd(10, 45), total = depart + rnd(10, 45);
      return { textFr: `${name} fabrique un collier. Il a déjà enfilé ${depart} perles bleues. Le collier terminé contient ${total} perles. Combien de perles doit-il encore ajouter ?`, answer: total - depart, op: "-", calculation: `${total} − ${depart} = ${total - depart}` };
    },
    () => {
      const fiction = rnd(500, 1600), doc = rnd(200, 900), albums = rnd(150, 700), bd = rnd(250, 1000);
      return { textFr: `La médiathèque de Sion achète ${fiction} livres de fiction, ${doc} documentaires, ${albums} albums jeunesse et ${bd} bandes dessinées. Combien d'articles ont été achetés au total ?`, answer: fiction + doc + albums + bd, op: "+", calculation: `${fiction} + ${doc} + ${albums} + ${bd} = ${fiction + doc + albums + bd}` };
    },
    () => {
      const grande = rnd(900, 2200), diff = rnd(150, 700);
      return { textFr: `${name} a ${grande} livres dans sa bibliothèque. Il en a ${diff} de plus que son frère. Combien de livres son frère a-t-il ?`, answer: grande - diff, op: "-", calculation: `${grande} − ${diff} = ${grande - diff}` };
    },
    () => {
      const name2 = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
      const n1Money = rnd(1200, 4200), moreMoney = rnd(400, 1900);
      return { textFr: `Dans un jeu, ${name} possède ${n1Money} francs. ${name2} a ${moreMoney} francs de plus. Combien ${name2} possède-t-il ?`, answer: n1Money + moreMoney, op: "+", calculation: `${n1Money} + ${moreMoney} = ${n1Money + moreMoney}` };
    },
    () => {
      const bleus = rnd(40, 130), vertsPlus = rnd(20, 70), rougesMoins = rnd(10, 50);
      const verts = bleus + vertsPlus, rouges = verts - rougesMoins, jaunes = verts;
      return { textFr: `Les élèves fabriquent des bonnets. Il y a ${bleus} bonnets bleus, ${vertsPlus} bonnets verts de plus que les bleus, ${rougesMoins} bonnets rouges de moins que les verts et autant de bonnets jaunes que de verts. Combien de bonnets y a-t-il en tout ?`, answer: bleus + verts + rouges + jaunes, op: "+", calculation: `${bleus} + ${verts} + ${rouges} + ${jaunes} = ${bleus + verts + rouges + jaunes}` };
    },
    () => {
      const chevaux = rnd(120, 550), chats = rnd(80, 420);
      return { textFr: `${name} prend des photos. Il possède ${chevaux} photos de chevaux et ${chats} photos de chats. Combien a-t-il de photos d'animaux au total ?`, answer: chevaux + chats, op: "+", calculation: `${chevaux} + ${chats} = ${chevaux + chats}` };
    },
    () => {
      const total = rnd(900, 2200), rouges = rnd(120, 420), bleues = rnd(120, 420), blanches = rnd(120, 500), vertes = rnd(80, 300);
      return { textFr: `${name} réalise une mosaïque avec ${total} tesselles. Il utilise ${rouges} rouges, ${bleues} bleues, ${blanches} blanches et ${vertes} vertes. Combien de tesselles jaunes a-t-il utilisées ?`, answer: total - rouges - bleues - blanches - vertes, op: "-", calculation: `${total} − ${rouges} − ${bleues} − ${blanches} − ${vertes} = ${total - rouges - bleues - blanches - vertes}` };
    },
    () => {
      const lundi = rnd(120, 360), plus = rnd(40, 130);
      return { textFr: `Un maraîcher récolte ${lundi} salades le lundi. Le mardi, il en récolte ${plus} de plus que le lundi. Combien de salades a-t-il récoltées pendant les deux premiers jours ?`, answer: lundi + lundi + plus, op: "+", calculation: `${lundi} + ${lundi + plus} = ${lundi + lundi + plus}` };
    },
    () => {
      const premiere = rnd(8, 25), plus = rnd(3, 12);
      return { textFr: `${name} est allé deux fois à la piscine cette semaine. La première fois, il a fait ${premiere} traversées. La deuxième fois, il en a fait ${plus} de plus. Combien de traversées a-t-il faites cette semaine ?`, answer: premiere + premiere + plus, op: "+", calculation: `${premiere} + ${premiere + plus} = ${premiere + premiere + plus}` };
    },
    () => {
      const a = rnd(1, 3), b = rnd(1, 3), c = rnd(1, 4);
      return { textFr: `${name} a des drapeaux. Il y en a ${a} avec du vert, du rouge et du bleu, ${b} avec du rouge, du bleu et du jaune, et ${c} avec du vert, du jaune et du noir. Combien y a-t-il de drapeaux avec du rouge ?`, answer: a + b, op: "+", calculation: `${a} + ${b} = ${a + b}` };
    },
    () => {
      const petits = rnd(8, 24), grands = rnd(2, 8);
      return { textFr: `Pour son anniversaire, ${name} a reçu ${petits} petits paquets et ${grands} grands paquets. Combien de paquets a-t-il reçus en tout ?`, answer: petits + grands, op: "+", calculation: `${petits} + ${grands} = ${petits + grands}` };
    },
    () => {
      const ajoutes = rnd(10, 35), total = ajoutes + rnd(12, 55);
      return { textFr: `${name} a mis ${ajoutes} fruits dans un panier. Il y a maintenant ${total} fruits. Combien y avait-il de fruits dans le panier avant ?`, answer: total - ajoutes, op: "-", calculation: `${total} − ${ajoutes} = ${total - ajoutes}` };
    },
    () => {
      const chiens = rnd(5, 20), arbres = rnd(10, 45), oiseaux = rnd(4, 18);
      return { textFr: `${name} a vu ${chiens} chiens, ${arbres} arbres et ${oiseaux} oiseaux. Combien a-t-il vu d'animaux au total ?`, answer: chiens + oiseaux, op: "+", calculation: `${chiens} + ${oiseaux} = ${chiens + oiseaux}` };
    },
    () => {
      const total = rnd(150, 450), donnes = rnd(40, 160);
      return { textFr: `${name} a ${total} vignettes. Il en donne ${donnes} à son ami. Combien lui en reste-t-il ?`, answer: total - donnes, op: "-", calculation: `${total} − ${donnes} = ${total - donnes}` };
    },
    () => {
      const a = rnd(100, 280), b = rnd(150, 400), c = rnd(200, Math.min(a + b - 10, 600));
      const totalA = a + b;
      return { textFr: `${name} fait d'abord ${a} sauts à la corde, puis encore ${b} sauts. Son amie en fait ${c} en tout. Combien ${name} a-t-il fait de sauts de plus ?`, answer: totalA - c, op: "-", calculation: `${a} + ${b} = ${totalA}, puis ${totalA} − ${c} = ${totalA - c}` };
    },
    () => {
      const a = rnd(2, 8), b = rnd(3, 10), c = rnd(8, 20), d = rnd(12, 28), cadeau = rnd(2, 6);
      return { textFr: `Sur le bureau de ${name}, il y a ${a} livres verts, ${b} jaunes, ${c} oranges et ${d} violets. Sa sœur lui en donne ${cadeau} autres. Combien y a-t-il de livres en tout ?`, answer: a + b + c + d + cadeau, op: "+", calculation: `${a} + ${b} + ${c} + ${d} + ${cadeau} = ${a + b + c + d + cadeau}` };
    },
    () => {
      const a = rnd(80, 190), diff = rnd(10, 50), b = a + diff;
      return { textFr: `${name} et son ami prennent l'ascenseur ensemble. ${name} s'arrête au ${a}e étage. Son ami continue jusqu'au ${b}e étage. Combien d'étages son ami monte-t-il tout seul ?`, answer: diff, op: "-", calculation: `${b} − ${a} = ${diff}` };
    },
    () => {
      const a = rnd(1200, 4000), diff = rnd(200, 1200);
      return { textFr: `Le Musée d'art a vendu ${a} billets. Le Musée d'histoire en a vendu ${diff} de plus. Combien le Musée d'histoire a-t-il vendu de billets ?`, answer: a + diff, op: "+", calculation: `${a} + ${diff} = ${a + diff}` };
    },
    () => {
      const total = rnd(100, 280), vendus = rnd(30, 110);
      return { textFr: `Pour le spectacle de la classe, il y avait ${total} tickets. ${name} en a vendu ${vendus}. Combien de tickets reste-t-il ?`, answer: total - vendus, op: "-", calculation: `${total} − ${vendus} = ${total - vendus}` };
    },
    () => {
      const filles = rnd(90, 160), sansBesoin = rnd(25, 70), gSans = rnd(35, 100);
      if (sansBesoin >= filles) return { textFr: "", answer: -1, op: "+" as const };
      const fillNeed = filles - sansBesoin;
      return { textFr: `Dans l'école, il y a ${filles} filles. ${sansBesoin} filles n'ont pas besoin de boussoles. ${gSans} garçons n'ont pas de boussoles. Combien de boussoles la maîtresse doit-elle acheter ?`, answer: fillNeed + gSans, op: "+", calculation: `(${filles} − ${sansBesoin}) + ${gSans} = ${fillNeed} + ${gSans} = ${fillNeed + gSans}` };
    },
    () => {
      const tailleBase = rnd(140, 175);
      const diffTenths = rnd(5, 29) * 10 + rnd(0, 1) * 5;
      const diffFmt = diffTenths % 10 === 0 ? `${diffTenths / 10}` : `${Math.floor(diffTenths / 10)},5`;
      const ansTenths = tailleBase * 10 + diffTenths;
      const ansFmt = ansTenths % 10 === 0 ? `${ansTenths / 10}` : `${Math.floor(ansTenths / 10)},5`;
      return { textFr: `${name} mesure ${tailleBase} cm. Son ami mesure ${diffFmt} cm de plus. Quelle est la taille de son ami ?`, answer: ansTenths / 10, op: "+", calculation: `${tailleBase} + ${diffFmt} = ${ansFmt}` };
    },
    () => {
      const pairs = [[1161, 637], [1483, 749], [922, 385], [1358, 621], [1045, 468], [1720, 845]] as const;
      const [longInt, diffInt] = pairs[rnd(0, pairs.length - 1)]!;
      const courtInt = longInt - diffInt;
      const fmt = (n: number) => `${Math.floor(n / 100)},${String(n % 100).padStart(2, "0")}`;
      return { textFr: `Pour aller d'un endroit à un autre, il y a deux chemins. Le premier mesure ${fmt(longInt)} km. Il est ${fmt(diffInt)} km plus long que le deuxième. Combien de kilomètres mesure le deuxième chemin ?`, answer: courtInt / 100, op: "-", calculation: `${fmt(longInt)} − ${fmt(diffInt)} = ${fmt(courtInt)}` };
    },
    () => {
      const aInt = rnd(30, 150) * 100 + rnd(0, 99), bInt = rnd(10, 80) * 100 + rnd(0, 99);
      const fmt = (n: number) => `${Math.floor(n / 100)},${String(n % 100).padStart(2, "0")}`;
      return { textFr: `${name} a dépensé ${fmt(aInt)} francs pour ses courses. Son ami a dépensé ${fmt(bInt)} francs de plus. Combien son ami a-t-il dépensé ?`, answer: (aInt + bInt) / 100, op: "+", calculation: `${fmt(aInt)} + ${fmt(bInt)} = ${fmt(aInt + bInt)}` };
    },
    () => {
      const avantInt = rnd(70000, 100000) * 10 + rnd(0, 1) * 5;
      const perteInt = rnd(5000, 20000) * 10 + rnd(0, 1) * 5;
      const maintInt = avantInt - perteInt;
      const fmt = (n: number) => n % 10 === 0 ? `${n / 10},0` : `${Math.floor(n / 10)},5`;
      return { textFr: `Un glacier mesurait ${fmt(avantInt)} mètres. Aujourd'hui, il mesure ${fmt(maintInt)} mètres. Combien de mètres a-t-il perdu ?`, answer: perteInt / 10, op: "-", calculation: `${fmt(avantInt)} − ${fmt(maintInt)} = ${fmt(perteInt)}` };
    },
    () => {
      const piecesInt = rnd(500, 2500) * 100 + rnd(0, 99), travailInt = rnd(200, 1000) * 100 + rnd(0, 99);
      const totalInt = piecesInt + travailInt;
      const fmt = (n: number) => `${Math.floor(n / 100)},${String(n % 100).padStart(2, "0")}`;
      return { textFr: `Pour réparer sa voiture, ${name} a acheté des pièces pour ${fmt(piecesInt)} francs. La facture totale s'élève à ${fmt(totalInt)} francs. Combien coûte le travail de réparation ?`, answer: travailInt / 100, op: "-", calculation: `${fmt(totalInt)} − ${fmt(piecesInt)} = ${fmt(travailInt)}` };
    },
  ];
  for (let attempt = 0; attempt < 20; attempt++) {
    const q = templates[rnd(0, templates.length - 1)]!();
    if (Number.isFinite(q.answer) && q.answer >= 0) return q;
  }
  return templates[0]!();
}

function genA37MultDivProblem(): WordProblemQ {
  const name = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
  const templates: A24ProblemTemplate[] = [
    () => {
      const every = rnd(4, 12), stones = rnd(25, 120);
      return { textFr: `${name} marche sur un chemin. Il met un petit caillou tous les ${every} pas. Il a mis ${stones} cailloux. Combien de pas a-t-il faits ?`, answer: every * stones, op: "×", calculation: `${every} × ${stones} = ${every * stones}` };
    },
    () => {
      const rows = rnd(4, 12), per = rnd(18, 70);
      return { textFr: `Dans le jardin de ${name}, il y a ${rows} lignes de ${per} choux. Combien de choux ont été plantés ?`, answer: rows * per, op: "×", calculation: `${rows} × ${per} = ${rows * per}` };
    },
    () => {
      const per = rnd(4, 12), boxes = rnd(18, 140);
      return { textFr: `Dans la chambre de ${name}, ${per * boxes} pierres précieuses sont cachées. Dans chaque boîte, il y a ${per} pierres précieuses. Combien de boîtes sont cachées ?`, answer: boxes, op: "÷", calculation: `${per * boxes} ÷ ${per} = ${boxes}` };
    },
    () => {
      const bins = rnd(8, 30), per = rnd(15, 45);
      return { textFr: `Dans la bibliothèque de ${name}, chaque bac contient ${per} livres. Combien de livres peut-on ranger dans ${bins} bacs ?`, answer: bins * per, op: "×", calculation: `${bins} × ${per} = ${bins * per}` };
    },
    () => {
      const base = rnd(12, 45), factor = rnd(3, 8);
      return { textFr: `${name} a une collection de ${base} bandes dessinées. Son amie en a ${factor} fois plus. Combien de bandes dessinées son amie a-t-elle ?`, answer: base * factor, op: "×", calculation: `${base} × ${factor} = ${base * factor}` };
    },
    () => {
      const pupils = rnd(12, 28), per = rnd(8, 24);
      return { textFr: `Dans une classe de ${pupils} élèves, l'enseignante distribue ${per} crayons de couleur à chaque élève. Combien de crayons distribue-t-elle ?`, answer: pupils * per, op: "×", calculation: `${pupils} × ${per} = ${pupils * per}` };
    },
    () => {
      const cards = rnd(8, 24), per = rnd(35, 180);
      return { textFr: `${name} a acheté ${cards} cartes. Chaque carte contient ${per} papillons. Combien de papillons cela représente-t-il en tout ?`, answer: cards * per, op: "×", calculation: `${cards} × ${per} = ${cards * per}` };
    },
    () => {
      const francs = rnd(8, 28), students = rnd(15, 75);
      return { textFr: `L'enseignante reçoit ${francs} francs pour chacun de ses ${students} étudiants. Quelle somme totale reçoit-elle ?`, answer: francs * students, op: "×", calculation: `${francs} × ${students} = ${francs * students}` };
    },
    () => {
      const students = [10, 20, 25][rnd(0, 2)]!, packs = rnd(4, 12), per = 100;
      return { textFr: `Pour son cours d'ACM, une enseignante achète ${packs} paquets de feuilles. Chaque paquet contient ${per} feuilles. Sa classe compte ${students} élèves. Combien de feuilles chaque élève recevra-t-il ?`, answer: Math.floor((packs * per) / students), op: "÷", calculation: `${packs * per} ÷ ${students} = ${Math.floor((packs * per) / students)}` };
    },
    () => {
      const teams = rnd(8, 32), per = rnd(6, 12);
      return { textFr: `Un tournoi est organisé à l'école. Les élèves sont répartis en ${teams} équipes de ${per} joueurs. Combien d'élèves participent au tournoi ?`, answer: teams * per, op: "×", calculation: `${teams} × ${per} = ${teams * per}` };
    },
    () => {
      const total = rnd(400, 1200), per = [10, 20, 25, 50][rnd(0, 3)]!;
      return { textFr: `Pour décorer le terrain de sport, il faut ${total} ballons. Les ballons sont vendus par sachets de ${per}. Combien de sachets faut-il acheter ?`, answer: Math.ceil(total / per), op: "÷", calculation: `${total} ÷ ${per} = ${Math.ceil(total / per)}` };
    },
    () => {
      const packs = rnd(8, 35), per = [10, 12, 20, 25, 50, 100][rnd(0, 5)]!;
      return { textFr: `Le professeur achète ${packs} paquets. Chaque paquet contient ${per} objets. Combien d'objets a-t-il achetés au total ?`, answer: packs * per, op: "×", calculation: `${packs} × ${per} = ${packs * per}` };
    },
    () => {
      const total = rnd(700, 2500), per = [10, 20, 25, 50, 100][rnd(0, 4)]!;
      return { textFr: `${name} range ${total} bâtonnets. Chaque fois qu'il a ${per} bâtonnets, il forme un paquet. Combien de paquets complets peut-il former ?`, answer: Math.floor(total / per), op: "÷", calculation: `${total} ÷ ${per} = ${Math.floor(total / per)}` };
    },
    () => {
      const per = rnd(10, 30), rows = rnd(8, 24);
      return { textFr: `À la gare de Sierre, un parking à vélos contient ${rows} rangées de ${per} places. Combien y a-t-il de places en tout ?`, answer: rows * per, op: "×", calculation: `${rows} × ${per} = ${rows * per}` };
    },
    () => {
      const start = rnd(10, 60), factor = rnd(2, 8);
      return { textFr: `Dimanche, il y avait ${start} vélos sur le parking. Maintenant, il y en a ${factor} fois plus. Combien de vélos se trouvent maintenant sur le parking ?`, answer: start * factor, op: "×", calculation: `${start} × ${factor} = ${start * factor}` };
    },
    () => {
      const zoneA = rnd(3, 9), ptsA = [20, 30, 40, 50][rnd(0, 3)]!, zoneB = rnd(2, 8), ptsB = [60, 70, 80, 100][rnd(0, 3)]!;
      return { textFr: `${name} joue aux fléchettes. Il place ${zoneA} fléchettes dans la zone à ${ptsA} points et ${zoneB} fléchettes dans la zone à ${ptsB} points. Combien de points obtient-il ?`, answer: zoneA * ptsA + zoneB * ptsB, op: "×", calculation: `${zoneA} × ${ptsA} + ${zoneB} × ${ptsB} = ${zoneA * ptsA + zoneB * ptsB}` };
    },
    () => {
      const perDay = rnd(3, 8), days = 31, absent = rnd(4, 14);
      return { textFr: `Chaque soir de décembre, ${name} brûle ${perDay} bûches dans la cheminée. ${name} est absent(e) pendant ${absent} jours. Combien de bûches sont brûlées en décembre ?`, answer: perDay * (days - absent), op: "×", calculation: `${perDay} × ${days - absent} = ${perDay * (days - absent)}` };
    },
    () => {
      const trays = rnd(3, 9), perTray = 30, usedPer = rnd(2, 4);
      const totalEggs = trays * perTray, omelets = rnd(5, Math.floor(totalEggs / usedPer) - 2);
      return { textFr: `Un cuisinier achète ${trays} plateaux de ${perTray} œufs. Pour préparer une omelette, il utilise ${usedPer} œufs et il prépare ${omelets} omelettes. Combien d'œufs lui reste-t-il ?`, answer: totalEggs - usedPer * omelets, op: "-", calculation: `${totalEggs} − ${usedPer * omelets} = ${totalEggs - usedPer * omelets}` };
    },
    () => {
      const pages = rnd(8, 20), lines = rnd(4, 8), perLine = rnd(5, 12);
      const totalStamps = pages * lines * perLine, placed = rnd(10, totalStamps - 10);
      return { textFr: `${name} reçoit un album de ${pages} pages. Chaque page comporte ${lines} lignes et chaque ligne peut contenir ${perLine} timbres. ${name} a déjà placé ${placed} timbres. Combien de timbres doit-il encore ajouter pour remplir l'album ?`, answer: totalStamps - placed, op: "-", calculation: `${totalStamps} − ${placed} = ${totalStamps - placed}` };
    },
    () => {
      const bottles = rnd(90, 360), perCarton = [6, 9, 12, 18][rnd(0, 3)]!;
      return { textFr: `${name} emballe ${bottles} bouteilles dans des cartons de ${perCarton} bouteilles. Combien de cartons peut-il remplir entièrement ?`, answer: Math.floor(bottles / perCarton), op: "÷", calculation: `${bottles} ÷ ${perCarton} = ${Math.floor(bottles / perCarton)}` };
    },
    () => {
      const hens = rnd(4, 18), eggsPerMonth = rnd(15, 30);
      return { textFr: `Dans un poulailler, il y a ${hens} poules. Chaque poule pond ${eggsPerMonth} œufs par mois. Combien d'œufs sont pondus en une année complète ?`, answer: hens * eggsPerMonth * 12, op: "×", calculation: `${hens} × ${eggsPerMonth} × 12 = ${hens * eggsPerMonth * 12}` };
    },
    () => {
      const packs = rnd(20, 150), per = rnd(25, 100);
      return { textFr: `La professeure de dessin commande ${packs} paquets de papier cartonné. Chaque paquet contient ${per} feuilles. Combien de feuilles reçoit-elle ?`, answer: packs * per, op: "×", calculation: `${packs} × ${per} = ${packs * per}` };
    },
    () => {
      const buildings = rnd(8, 35), apartments = rnd(12, 48);
      return { textFr: `${name} déménage dans un nouveau quartier qui compte ${buildings} immeubles de ${apartments} appartements chacun. Combien d'appartements y a-t-il dans ce quartier ?`, answer: buildings * apartments, op: "×", calculation: `${buildings} × ${apartments} = ${buildings * apartments}` };
    },
    () => {
      const remaining = rnd(20, 90), factor = rnd(3, 8);
      return { textFr: `Après ses achats, ${name} a encore ${remaining} fr. dans son portemonnaie. C'est ${factor} fois moins qu'avant les achats. Quel montant ${name} avait-il avant ?`, answer: remaining * factor, op: "×", calculation: `${remaining} × ${factor} = ${remaining * factor}` };
    },
    () => {
      const name2 = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
      const saved = rnd(20, 120), diff = rnd(5, 40);
      return { textFr: `${name} a économisé ${saved} fr. C'est ${diff} fr. de moins que ${name2}. Combien ${name2} a-t-il économisé ?`, answer: saved + diff, op: "+", calculation: `${saved} + ${diff} = ${saved + diff}` };
    },
    () => {
      const name2 = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
      const nameCount = rnd(12, 45), morePlanted = rnd(3, 18);
      return { textFr: `${name} a planté ${nameCount} tulipes. ${name2} en a planté ${morePlanted} de plus. Combien ${name2} a-t-il planté de tulipes ?`, answer: nameCount + morePlanted, op: "+", calculation: `${nameCount} + ${morePlanted} = ${nameCount + morePlanted}` };
    },
    () => {
      const bouquets = rnd(12, 40), roses = rnd(3, 12);
      return { textFr: `${name}, fleuriste, compose ${bouquets} bouquets de roses. Dans chaque bouquet, il y a ${roses} roses. Combien de roses ont été utilisées en tout ?`, answer: bouquets * roses, op: "×", calculation: `${bouquets} × ${roses} = ${bouquets * roses}` };
    },
    () => {
      const towers = rnd(4, 16), cubes = rnd(8, 25);
      return { textFr: `${name} a construit ${towers} tours. Chaque tour est formée de ${cubes} cubes. Combien de cubes ont été utilisés en tout ?`, answer: towers * cubes, op: "×", calculation: `${towers} × ${cubes} = ${towers * cubes}` };
    },
    () => {
      const name2 = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
      const towers1 = rnd(4, 10), cubes1 = rnd(8, 16), towers2 = rnd(11, 22), cubes2 = rnd(14, 28);
      const total1 = towers1 * cubes1, total2 = towers2 * cubes2;
      return { textFr: `${name} a construit ${towers1} tours de ${cubes1} cubes. ${name2} a construit ${towers2} tours de ${cubes2} cubes. De combien de cubes ${name2} en a-t-il utilisé de plus ?`, answer: total2 - total1, op: "-", calculation: `${total2} − ${total1} = ${total2 - total1}` };
    },
    () => {
      const rows = rnd(12, 28), places = rnd(10, 24);
      return { textFr: `À la gare, il y a un grand parking à vélos. Dans ce parking, il y a ${rows} rangées de ${places} places. Combien y a-t-il de places en tout ?`, answer: rows * places, op: "×", calculation: `${rows} × ${places} = ${rows * places}` };
    },
    () => {
      const today = rnd(60, 180), more = rnd(25, 120);
      return { textFr: `Ce matin, il y a ${today} vélos dans le parking. Hier, il y avait ${more} vélos de plus. Combien y avait-il de vélos hier ?`, answer: today + more, op: "+", calculation: `${today} + ${more} = ${today + more}` };
    },
    () => {
      const start = rnd(12, 45), factor = rnd(3, 8);
      return { textFr: `Dimanche, il y avait ${start} vélos sur le parking. Maintenant, il y en a ${factor} fois plus. Combien y a-t-il de vélos maintenant ?`, answer: start * factor, op: "×", calculation: `${start} × ${factor} = ${start * factor}` };
    },
    () => {
      const teams = rnd(12, 36), children = rnd(6, 12);
      return { textFr: `${teams} équipes de ${children} enfants participent à un tournoi de handball. Combien d'enfants participent à ce tournoi ?`, answer: teams * children, op: "×", calculation: `${teams} × ${children} = ${teams * children}` };
    },
    () => {
      const bestTeams = rnd(3, 5), players = rnd(6, 11);
      return { textFr: `À la fin du tournoi, seuls les ${players} joueurs des ${bestTeams} meilleures équipes reçoivent une médaille. Combien d'enfants reçoivent une médaille ?`, answer: bestTeams * players, op: "×", calculation: `${bestTeams} × ${players} = ${bestTeams * players}` };
    },
    () => {
      const goals = rnd(8, 35), factor = rnd(2, 5);
      return { textFr: `L'équipe qui a terminé 6e a marqué ${goals} buts en tout. L'équipe gagnante a marqué ${factor} fois plus de buts. Combien l'équipe gagnante a-t-elle marqué de buts ?`, answer: goals * factor, op: "×", calculation: `${goals} × ${factor} = ${goals * factor}` };
    },
    () => {
      const yellow = rnd(400, 900), blue = rnd(500, 950), red = rnd(600, 1100), brown = rnd(400, 900), green = rnd(700, 1300);
      const boxes = Math.floor(yellow / 10) + Math.floor(blue / 10) + Math.floor(red / 10) + Math.floor(brown / 10) + Math.floor(green / 10);
      return { textFr: `Pour Pâques, les élèves ont peint ${yellow} œufs jaunes, ${blue} œufs bleus, ${red} œufs rouges, ${brown} œufs bruns et ${green} œufs verts. La maîtresse souhaite les emballer par couleur dans des boîtes de 10. Combien de boîtes complètes peut-elle remplir ?`, answer: boxes, op: "÷", calculation: `${Math.floor(yellow / 10)} + ${Math.floor(blue / 10)} + ${Math.floor(red / 10)} + ${Math.floor(brown / 10)} + ${Math.floor(green / 10)} = ${boxes}` };
    },
    () => {
      const students = rnd(80, 760), perStudent = rnd(4, 9), lost = rnd(1, 3);
      const total = students * perStudent;
      return { textFr: `Au début de l'année, le professeur a ${total} feutres. Il donne ${perStudent} feutres à chaque élève. Ensuite, chaque élève perd ${lost} feutres. Combien y a-t-il d'élèves dans l'école ?`, answer: students, op: "÷", calculation: `${total} ÷ ${perStudent} = ${students}` };
    },
    () => {
      const students = [10, 20, 25][rnd(0, 2)]!, packs = rnd(5, 12), perPack = 100;
      return { textFr: `L'enseignante doit distribuer des feuilles A3 pour le cours d'ACM. Il y a ${students} élèves dans sa classe. Elle achète ${packs} paquets de feuilles. Chaque paquet contient ${perPack} feuilles. Combien de feuilles reçoit chaque élève ?`, answer: (packs * perPack) / students, op: "÷", calculation: `${packs * perPack} ÷ ${students} = ${(packs * perPack) / students}` };
    },
    () => {
      const teams = rnd(8, 20), players = rnd(8, 12);
      return { textFr: `Il y a un tournoi de cricket à l'école. Les élèves se séparent en ${teams} équipes de ${players} joueurs. Combien d'élèves sont inscrits dans le tournoi ?`, answer: teams * players, op: "×", calculation: `${teams} × ${players} = ${teams * players}` };
    },
    () => {
      const total = rnd(450, 1200), perBag = [20, 25, 50][rnd(0, 2)]!;
      return { textFr: `Pour décorer autour du terrain du tournoi, il faut ${total} ballons. Les ballons sont vendus par sachets de ${perBag}. Combien de sachets de ballons le professeur doit-il acheter ?`, answer: Math.ceil(total / perBag), op: "÷", calculation: `${total} ÷ ${perBag} = ${Math.ceil(total / perBag)}` };
    },
    () => {
      const packs = rnd(12, 45), perPack = 100;
      return { textFr: `Le professeur a aussi acheté des pailles pour les invités. Il a acheté ${packs} paquets de ${perPack} pailles. Combien y a-t-il de pailles au total ?`, answer: packs * perPack, op: "×", calculation: `${packs} × ${perPack} = ${packs * perPack}` };
    },
    () => {
      const packs = rnd(12, 45), ice = rnd(8, 16);
      return { textFr: `Le professeur offre des glaces aux joueurs du tournoi. Il achète ${packs} paquets de ${ice} glaces. Combien y a-t-il de glaces au total ?`, answer: packs * ice, op: "×", calculation: `${packs} × ${ice} = ${packs * ice}` };
    },
    () => {
      const trays = rnd(3, 8), perTray = 30, perOmelet = rnd(2, 3);
      const totalEggs2 = trays * perTray, omelets = rnd(5, Math.floor(totalEggs2 / perOmelet) - 2);
      return { textFr: `Un cuisinier a acheté ${trays} plateaux de ${perTray} œufs. Il utilise ${perOmelet} œufs pour faire une omelette. Combien lui reste-t-il d'œufs après avoir préparé ${omelets} omelettes ?`, answer: totalEggs2 - perOmelet * omelets, op: "-", calculation: `${totalEggs2} − ${perOmelet * omelets} = ${totalEggs2 - perOmelet * omelets}` };
    },
    () => {
      const name2 = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
      const brownPages = rnd(10, 20), brownPer = rnd(8, 16), yellowPages = rnd(8, 18), yellowPer = rnd(8, 16), greenPages = rnd(6, 14), greenPer = rnd(12, 22);
      const brown = brownPages * brownPer, yellow = yellowPages * yellowPer, green = greenPages * greenPer;
      return { textFr: `${name} et ${name2} regardent trois albums de photos : un album brun de ${brownPages} pages avec ${brownPer} photos par page, un album jaune de ${yellowPages} pages avec ${yellowPer} photos par page et un album vert de ${greenPages} pages avec ${greenPer} photos par page. Combien de photos contient l'album qui en a le plus ?`, answer: Math.max(brown, yellow, green), op: "×", calculation: `max(${brown}, ${yellow}, ${green}) = ${Math.max(brown, yellow, green)}` };
    },
    () => {
      const students = rnd(12, 28), price = rnd(5, 9);
      const cost = students * price, rest = rnd(10, 50), budget = cost + rest;
      return { textFr: `${name} souhaite aller au zoo avec ${students} élèves. L'entrée coûte ${price} fr. par enfant. Les accompagnants ne paient pas. ${name} a ${budget} fr. Combien d'argent restera-t-il après avoir payé les entrées ?`, answer: rest, op: "-", calculation: `${budget} − ${cost} = ${rest}` };
    },
    () => {
      const students = rnd(20, 45), transport = rnd(3, 8), entry = rnd(3, 7);
      const cost = students * (transport + entry), rest = rnd(10, 80), budget = cost + rest;
      return { textFr: `${students} élèves veulent faire une sortie à la piscine. Il faut compter ${transport} fr. par élève pour le transport et ${entry} fr. par élève pour l'entrée. Les enseignants donnent ${budget} fr. Combien reste-t-il ?`, answer: rest, op: "-", calculation: `${budget} − ${cost} = ${rest}` };
    },
    () => {
      const children = rnd(8, 20), adults = rnd(2, 5), adultPrice = rnd(10, 15);
      const totalPeople = children + adults, total = totalPeople * adultPrice;
      return { textFr: `Une entrée au cinéma coûte ${adultPrice} fr. pour les adultes. Une classe regarde un film ce soir. Il y a ${children} élèves et ${adults} enseignants, qui paient tous le prix adulte. Combien paient-ils en tout ?`, answer: total, op: "×", calculation: `${totalPeople} × ${adultPrice} = ${total}` };
    },
    () => {
      const students = rnd(15, 28), received = 20, entry = rnd(2, 4), ice = 2, bus = rnd(20, 60);
      const money = students * received, cost = bus + students * (entry + ice), diff = money - cost;
      return { textFr: `${name} va au musée avec ${students} élèves. ${name} reçoit ${received} fr. par élève. ${name} paie ${bus} fr. pour le bus, ${entry} fr. par élève pour l'entrée et ${ice} fr. par élève pour une glace. Combien reste-t-il ?`, answer: diff, op: "-", calculation: `${money} − ${bus} − ${students} × ${entry + ice} = ${diff}` };
    },
    () => {
      const book = rnd(8, 20), diff = rnd(2, 8), puzzle = rnd(6, 15), plush = rnd(6, 15);
      const game = book + diff, paid = 100, change = paid - book - game - puzzle - plush;
      return { textFr: `${name} achète un livre à ${book} fr. C'est ${diff} fr. de moins que le jeu acheté aussi. ${name} ajoute un puzzle à ${puzzle} fr. et une peluche à ${plush} fr. ${name} paie avec ${paid} fr. Combien le vendeur lui rend-il ?`, answer: change, op: "-", calculation: `${paid} − ${book} − ${game} − ${puzzle} − ${plush} = ${change}` };
    },
    () => {
      const sticks = rnd(800, 2500), perPack = [10, 20, 25, 50][rnd(0, 3)]!;
      return { textFr: `${name} range ses ${sticks} bâtonnets. Chaque fois qu'${name} a ${perPack} bâtonnets, ${name} forme un paquet et l'attache avec un élastique rouge. Combien d'élastiques rouges sont utilisés ?`, answer: Math.floor(sticks / perPack), op: "÷", calculation: `${sticks} ÷ ${perPack} = ${Math.floor(sticks / perPack)}` };
    },
    () => {
      const beads = rnd(1200, 4200), perNecklace = [50, 100, 120, 150][rnd(0, 3)]!;
      return { textFr: `${name}, bijoutier/ère, possède ${beads} petites perles de verre. ${name} décide de fabriquer des colliers de ${perNecklace} perles exactement. Combien de colliers peuvent être fabriqués ?`, answer: Math.floor(beads / perNecklace), op: "÷", calculation: `${beads} ÷ ${perNecklace} = ${Math.floor(beads / perNecklace)}` };
    },
    () => {
      const candies = rnd(800, 1800), perBag = [10, 20, 25][rnd(0, 2)]!;
      return { textFr: `Une confiserie a fabriqué ${candies} caramels. Les caramels sont emballés par sachets de ${perBag}. Combien de sachets faut-il préparer ?`, answer: Math.ceil(candies / perBag), op: "÷", calculation: `${candies} ÷ ${perBag} = ${Math.ceil(candies / perBag)}` };
    },
    () => {
      const tickets = rnd(20, 80), price = rnd(10, 22);
      const total = tickets * price;
      return { textFr: `Au cinéma, toutes les places sont à ${price} fr. Ce soir, la caissière vend ${tickets} billets. Quelle somme reçoit-elle ?`, answer: total, op: "×", calculation: `${tickets} × ${price} = ${total}` };
    },
    () => {
      const bags = rnd(20, 80), waffles = rnd(8, 18);
      return { textFr: `Un confiseur a préparé des gaufres. Il a rempli exactement ${bags} sachets. Chaque sachet contient ${waffles} gaufres. Combien de gaufres a-t-il préparées au total ?`, answer: bags * waffles, op: "×", calculation: `${bags} × ${waffles} = ${bags * waffles}` };
    },
    () => {
      const green = rnd(8, 25), yellow = green * 2;
      return { textFr: `Dans son sac, ${name} a ${green + yellow} billes en tout. Certaines sont jaunes, les autres sont vertes. Il y a deux fois plus de billes jaunes que de billes vertes. Combien y a-t-il de billes jaunes ?`, answer: yellow, op: "÷", calculation: `${green + yellow} ÷ 3 × 2 = ${yellow}` };
    },
    () => {
      const name2 = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
      const n1books = rnd(120, 260), diff = rnd(10, 60);
      return { textFr: `${name} a ${n1books} livres dans sa bibliothèque. C'est ${diff} de plus que ${name2}. Combien de livres ${name2} a-t-il dans sa bibliothèque ?`, answer: n1books - diff, op: "-", calculation: `${n1books} − ${diff} = ${n1books - diff}` };
    },
    () => {
      const length = rnd(30, 90), width = rnd(6, 20);
      return { textFr: `Le concierge observe que le sol du couloir forme un long rectangle recouvert de carrés de lino. Il en compte ${length} en longueur et ${width} en largeur. Combien y a-t-il de carrés de lino dans le couloir ?`, answer: length * width, op: "×", calculation: `${length} × ${width} = ${length * width}` };
    },
    () => {
      const bottles = rnd(120, 360), perBox = [12, 18, 24][rnd(0, 2)]!;
      return { textFr: `${name} et des collègues emballent ${bottles} bouteilles d'huile d'olive dans des cartons de ${perBox} bouteilles. Combien de cartons peuvent-ils remplir entièrement ?`, answer: Math.floor(bottles / perBox), op: "÷", calculation: `${bottles} ÷ ${perBox} = ${Math.floor(bottles / perBox)}` };
    },
    () => {
      const sheets = rnd(80, 240), rows = rnd(2, 5), cols = rnd(5, 10);
      return { textFr: `La maîtresse a commandé ${sheets} feuilles de gommettes. Sur chaque feuille, il y a ${rows} lignes de ${cols} gommettes. Combien y a-t-il de gommettes en tout ?`, answer: sheets * rows * cols, op: "×", calculation: `${sheets} × ${rows} × ${cols} = ${sheets * rows * cols}` };
    },
    () => {
      const first = rnd(8, 25), more = rnd(3, 10);
      return { textFr: `${name} est allé(e) deux fois à la piscine cette semaine. La première fois, ${name} a fait ${first} traversées. La deuxième fois, ${name} en a fait ${more} de plus. Combien de traversées en tout ?`, answer: first + first + more, op: "+", calculation: `${first} + ${first + more} = ${first + first + more}` };
    },
    () => {
      const saved = rnd(90, 220), missing = rnd(10, 60);
      const price = saved + missing;
      return { textFr: `${name} aimerait s'acheter une paire de baskets. ${name} a déjà économisé ${saved} fr. et reçoit ${missing} fr. en cadeau. Combien coûte la paire de baskets ?`, answer: price, op: "+", calculation: `${saved} + ${missing} = ${price}` };
    },
    () => {
      const name2 = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
      const expensive = rnd(60, 210) * 2;
      return { textFr: `${name} a dépensé ${expensive} fr. pour un nouvel aspirateur. L'aspirateur de ${name2} est deux fois moins cher. Quel est le prix de l'aspirateur de ${name2} ?`, answer: expensive / 2, op: "÷", calculation: `${expensive} ÷ 2 = ${expensive / 2}` };
    },
    () => {
      const name2 = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
      const dist1 = rnd(120, 420), diff = rnd(10, 80);
      return { textFr: `${name} a fait un trajet de ${dist1} km. ${name2} a fait un trajet de ${diff} km de moins. Combien de kilomètres ${name2} a-t-il parcourus ?`, answer: dist1 - diff, op: "-", calculation: `${dist1} − ${diff} = ${dist1 - diff}` };
    },
    () => {
      const pupils = rnd(15, 28), minigolf = rnd(8, 15), ice = rnd(2, 5);
      const total = pupils * minigolf + (pupils + 1) * ice;
      return { textFr: `La classe EPL 1 ira en promenade. Il y a ${pupils} élèves. Chaque élève fait une partie de minigolf à ${minigolf} fr. et mange une glace à ${ice} fr. L'enseignante ne joue pas au minigolf mais mange aussi une glace. Combien l'enseignante devra-t-elle payer en tout ?`, answer: total, op: "×", calculation: `${pupils} × ${minigolf} + ${pupils + 1} × ${ice} = ${total}` };
    },
    () => {
      const fiction = rnd(800, 1600), docs = rnd(400, 900), albums = rnd(400, 900), comics = rnd(500, 1100), cds = rnd(10, 60), audio = rnd(2, 20), dvds = rnd(20, 90), kami = rnd(10, 40);
      const total = fiction + docs + albums + comics + cds + audio + dvds + kami;
      return { textFr: `La bibliothèque municipale a acheté ${fiction} livres de fiction, ${docs} documentaires, ${albums} albums pour enfants, ${comics} bandes dessinées, ${cds} CD, ${audio} livres audio, ${dvds} DVD et ${kami} kamishibaïs. Combien d'articles a-t-elle achetés au total ?`, answer: total, op: "+", calculation: `${fiction} + ${docs} + ${albums} + ${comics} + ${cds} + ${audio} + ${dvds} + ${kami} = ${total}` };
    },
    () => {
      const fiction = rnd(500, 1200), docs = rnd(150, 400), albums = rnd(100, 300), comics = rnd(200, 500), cds = rnd(10, 50), audio = rnd(2, 15), dvds = rnd(15, 60), kami = rnd(8, 30);
      const target = fiction + docs + albums + comics + cds + audio + dvds + kami;
      const less = rnd(100, 400), referenceTotal = target + less;
      return { textFr: `La bibliothèque de Couvrelivre a acheté ${docs} documentaires, ${albums} albums, ${comics} bandes dessinées, ${cds} CD, ${audio} livres audio, ${dvds} DVD, ${kami} kamishibaïs et des livres de fiction. Elle a acheté en tout ${less} articles de moins qu'une autre bibliothèque qui en a acheté ${referenceTotal}. Combien a-t-elle acheté de livres de fiction ?`, answer: fiction, op: "-", calculation: `${target} − ${docs} − ${albums} − ${comics} − ${cds} − ${audio} − ${dvds} − ${kami} = ${fiction}` };
    },
    () => {
      const startBlue = rnd(12, 30), addedEach = rnd(10, 25), total = startBlue + addedEach * 2;
      return { textFr: `${name} fait un collier de perles. ${name} a déjà enfilé ${startBlue} perles bleues. ${name} ajoute ensuite le même nombre de perles bleues que de perles blanches. Une fois terminé, le collier comporte ${total} perles. Combien y a-t-il de perles bleues en tout ?`, answer: startBlue + addedEach, op: "+", calculation: `${startBlue} + (${total} − ${startBlue}) ÷ 2 = ${startBlue + addedEach}` };
    },
    () => {
      const name2 = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
      const name3 = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
      const n1money = rnd(3000, 7000), minus = rnd(800, 2200), plus = rnd(900, 2600);
      const n2money = n1money - minus, n3money = n2money + plus;
      return { textFr: `Dans un jeu de société, ${name} a ${n1money} francs. ${name2} a ${minus} francs de moins que ${name}. ${name3} a ${plus} francs de plus que ${name2}. Combien ${name3} possède-t-il ?`, answer: n3money, op: "+", calculation: `${n1money} − ${minus} + ${plus} = ${n3money}` };
    },
    () => {
      const blue = rnd(60, 140), greenMore = rnd(20, 70), redLess = rnd(20, 60);
      const green = blue + greenMore, red = green - redLess, yellow = green;
      return { textFr: `Les élèves confectionnent des bonnets de lutin. On compte ${blue} bonnets bleus. Il y a ${greenMore} bonnets verts de plus que de bonnets bleus. Il y a ${redLess} bonnets rouges de moins que de bonnets verts et autant de bonnets jaunes que de bonnets verts. Combien y a-t-il d'élèves dans l'école ?`, answer: blue + green + red + yellow, op: "+", calculation: `${blue} + ${green} + ${red} + ${yellow} = ${blue + green + red + yellow}` };
    },
    () => {
      const mountains = rnd(80, 240), forests = rnd(60, 180), horses = rnd(70, 180), mice = rnd(70, 180);
      return { textFr: `${name} photographie souvent la nature. Sur son ordinateur, ${name} a ${mountains} photos de montagnes, ${forests} photos de forêts, ${horses} photos de chevaux et ${mice} photos de souris. Combien ${name} a-t-il de photos d'animaux en tout ?`, answer: horses + mice, op: "+", calculation: `${horses} + ${mice} = ${horses + mice}` };
    },
    () => {
      const salary = rnd(3200, 5600), remaining = rnd(900, salary - 100);
      const spent = salary - remaining;
      return { textFr: `Par mois, ${name} gagne ${salary} fr. Après avoir payé toutes les factures, ${name} a encore ${remaining} fr. Combien ${name} a-t-il dépensé ?`, answer: spent, op: "-", calculation: `${salary} − ${remaining} = ${spent}` };
    },
    () => {
      const name2 = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
      const n1gommettes = rnd(800, 2400), diff = rnd(80, 320);
      return { textFr: `${name} et ${name2} collectionnent les gommettes. ${name} en a ${n1gommettes}. C'est ${diff} de moins que ${name2}. Combien ${name2} a-t-il de gommettes ?`, answer: n1gommettes + diff, op: "+", calculation: `${n1gommettes} + ${diff} = ${n1gommettes + diff}` };
    },
    () => {
      const grocery = rnd(40, 80), bakery = rnd(10, 30), butcher = rnd(15, 40), remaining = rnd(5, 20);
      const budget = grocery + bakery + butcher + remaining;
      return { textFr: `${name} dispose de ${budget} fr. pour faire ses courses. ${name} dépense ${grocery} fr. à l'épicerie et ${bakery} fr. à la boulangerie, puis passe à la boucherie. Une fois les courses terminées, il reste ${remaining} fr. Combien a-t-il été dépensé à la boucherie ?`, answer: butcher, op: "-", calculation: `${budget} − ${grocery} − ${bakery} − ${remaining} = ${butcher}` };
    },
    () => {
      const monday = rnd(120, 360), more = rnd(30, 120);
      return { textFr: `Lundi, un maraîcher a ramassé ${monday} salades pour les vendre. Le mardi, il en a ramassé ${more} de plus que le lundi. Combien de salades le maraîcher a-t-il ramassées les deux premiers jours de la semaine ?`, answer: monday + monday + more, op: "+", calculation: `${monday} + ${monday + more} = ${monday + monday + more}` };
    },
    () => {
      const instrument = rnd(600, 1200), caseAndAccessories = rnd(80, 200), bow = rnd(50, 150);
      const total = instrument + caseAndAccessories + bow;
      return { textFr: `${name} a acheté un violon complet avec étui, accessoires et archet pour ${total} fr. au total. Le prix de l'instrument est ${instrument} fr. L'étui et les accessoires ont coûté ${caseAndAccessories} fr. Quel est le prix de l'archet ?`, answer: bow, op: "-", calculation: `${total} − ${instrument} − ${caseAndAccessories} = ${bow}` };
    },
    () => {
      const red = rnd(50, 150), blue = rnd(60, 160), white = rnd(80, 180), green = rnd(40, 120), yellow = rnd(30, 100);
      const total = red + blue + white + green + yellow;
      return { textFr: `Pour réaliser une mosaïque, ${name} a utilisé ${total} tesselles en tout. ${name} a collé ${red} tesselles rouges, ${blue} bleues, ${white} blanches, ${green} vertes et des jaunes. Combien de tesselles jaunes ont été utilisées ?`, answer: yellow, op: "-", calculation: `${total} − ${red} − ${blue} − ${white} − ${green} = ${yellow}` };
    },
    () => {
      const weightPerBrick = rnd(2, 6), sampleA = rnd(10, 25), sampleB = rnd(30, 50), bricks = [25, 50, 75, 95][rnd(0, 3)]!;
      return { textFr: `Nina est maçonne. Pour construire un nouveau mur, elle utilise des briques qui ont toutes le même poids. ${sampleA} briques pèsent ${sampleA * weightPerBrick} kilos et ${sampleB} briques pèsent ${sampleB * weightPerBrick} kilos. Combien pèsent ${bricks} briques ?`, answer: bricks * weightPerBrick, op: "×", calculation: `${bricks} × ${weightPerBrick} = ${bricks * weightPerBrick}` };
    },
    () => {
      const inhabitants = rnd(80, 320), factor = rnd(8, 25);
      return { textFr: `Lou habite dans un petit village de ${inhabitants} habitants. Son cousin Émile habite dans un village ${factor} fois plus peuplé. Combien y a-t-il d'habitants dans le village d'Émile ?`, answer: inhabitants * factor, op: "×", calculation: `${inhabitants} × ${factor} = ${inhabitants * factor}` };
    },
    () => {
      const rows = rnd(6, 12), visibleCols = rnd(5, 9), hiddenCols = rnd(2, 12);
      return { textFr: `Loïc avait une feuille rectangulaire quadrillée. Il a gardé une partie qui montre ${rows} lignes et ${visibleCols} colonnes, puis il se rappelle qu'il manque encore ${hiddenCols} colonnes sur la droite. Combien y avait-il de carrés sur la feuille entière ?`, answer: rows * (visibleCols + hiddenCols), op: "×", calculation: `${rows} × ${visibleCols + hiddenCols} = ${rows * (visibleCols + hiddenCols)}` };
    },
    () => {
      const total = rnd(180, 520), loaned = rnd(40, 160);
      return { textFr: `La bibliothèque a une collection de ${total} bandes dessinées. ${loaned} de ces bandes dessinées sont actuellement en prêt. Combien reste-t-il de bandes dessinées à la bibliothèque ?`, answer: total - loaned, op: "-", calculation: `${total} − ${loaned} = ${total - loaned}` };
    },
    () => {
      const pages = rnd(900, 1800), total = pages + rnd(300, 900);
      return { textFr: `Véra a déjà lu les ${pages} premières pages de son livre qui en contient ${total}. Combien de pages Véra doit-elle encore lire pour finir son livre ?`, answer: total - pages, op: "-", calculation: `${total} − ${pages} = ${total - pages}` };
    },
    () => {
      const pupils = rnd(380, 780), girls = rnd(140, 360);
      return { textFr: `Dans une école, il y a ${rnd(20, 45)} classes. Au total, il y a ${pupils} élèves et ${rnd(25, 60)} professeurs. Il y a ${girls} filles. Combien y a-t-il de garçons dans cette école ?`, answer: pupils - girls, op: "-", calculation: `${pupils} − ${girls} = ${pupils - girls}` };
    },
    () => {
      const francs = rnd(8, 28), students = rnd(25, 75);
      const total = francs * students;
      return { textFr: `L'enseignante a reçu ${francs} fr. pour chacun de ses ${students} étudiants. Quelle est la somme totale que l'enseignante a reçue ?`, answer: total, op: "×", calculation: `${francs} × ${students} = ${total}` };
    },
    () => {
      const a = rnd(3, 9), ptsA = [30, 50, 70][rnd(0, 2)]!, b = rnd(2, 8), ptsB = [60, 80, 90][rnd(0, 2)]!;
      return { textFr: `Léo lance des fléchettes sur une cible. Il met ${a} fléchettes dans le ${ptsA} et ${b} dans le ${ptsB}. Combien Léo a-t-il de points ?`, answer: a * ptsA + b * ptsB, op: "×", calculation: `${a} × ${ptsA} + ${b} × ${ptsB} = ${a * ptsA + b * ptsB}` };
    },
    () => {
      const perDay = rnd(3, 8);
      return { textFr: `Chaque soir, Zack fait du feu dans sa cheminée et brûle ${perDay} bûches. Combien de bûches Zack va-t-il brûler au mois de novembre ?`, answer: perDay * 30, op: "×", calculation: `${perDay} × 30 = ${perDay * 30}` };
    },
    () => {
      const perDay = rnd(3, 8), absent = rnd(5, 14);
      return { textFr: `Chaque soir de décembre, Zack brûle ${perDay} bûches dans sa cheminée. Il est absent ${absent} jours. Combien de bûches brûle-t-il en décembre ?`, answer: perDay * (31 - absent), op: "×", calculation: `${perDay} × ${31 - absent} = ${perDay * (31 - absent)}` };
    },
  ];
  for (let attempt = 0; attempt < 20; attempt++) {
    const q = templates[rnd(0, templates.length - 1)]!();
    if (Number.isInteger(q.answer) && q.answer > 0) return q;
  }
  return templates[0]!();
}

// ── Decimal word problems (A5.7) ─────────────────────────────────────────────
function genA57DecimalProblem(level: "e" | "m" | "h"): WordProblemQ {
  const name = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
  // fmt: format a hundredths-integer as French decimal string
  const fmt = (h: number) => fmtDec(Math.round(h));

  if (level === "e") {
    const templates: Array<() => WordProblemQ> = [
      () => {
        const a2 = rnd(4, 16), b2 = rnd(2, 10);
        const a = a2 / 2, b = b2 / 2, tot = (a2 + b2) / 2;
        const items = ["pommes", "poires", "cerises", "fraises", "légumes"][rnd(0, 4)]!;
        return { textFr: `${name} achète ${fmt(a * 100)} kg de ${items}, puis ${fmt(b * 100)} kg de plus. Combien de kg cela fait-il en tout ?`, answer: tot, op: "+", calculation: `${fmt(a * 100)} + ${fmt(b * 100)} = ${fmt(tot * 100)} kg` };
      },
      () => {
        const tot2 = rnd(8, 20), used2 = rnd(2, Math.max(2, tot2 - 3));
        const tot = tot2 / 2, used = used2 / 2, rem = (tot2 - used2) / 2;
        const liquid = ["jus", "eau", "lait", "sirop"][rnd(0, 3)]!;
        return { textFr: `${name} a ${fmt(tot * 100)} litre${tot > 1 ? "s" : ""} de ${liquid}. ${name} en utilise ${fmt(used * 100)} litre${used > 1 ? "s" : ""}. Combien reste-t-il ?`, answer: rem, op: "-", calculation: `${fmt(tot * 100)} − ${fmt(used * 100)} = ${fmt(rem * 100)}` };
      },
      () => {
        const n = rnd(2, 8), p2 = rnd(2, 12);
        const p = p2 / 2, tot = (p2 * n) / 2;
        const item = ["stylo", "carnet", "cahier", "livre"][rnd(0, 3)]!;
        return { textFr: `Un ${item} coûte ${fmt(p * 100)} fr. ${name} en achète ${n}. Combien cela coûte-t-il ?`, answer: tot, op: "×", calculation: `${n} × ${fmt(p * 100)} = ${fmt(tot * 100)} fr.` };
      },
      () => {
        const n = rnd(2, 6), part2 = rnd(3, 12);
        const total = (n * part2) / 2, part = part2 / 2;
        const thing = ["ruban", "corde", "tissu", "câble"][rnd(0, 3)]!;
        return { textFr: `${name} coupe ${fmt(total * 100)} m de ${thing} en ${n} morceaux égaux. Combien mesure chaque morceau ?`, answer: part, op: "÷", calculation: `${fmt(total * 100)} ÷ ${n} = ${fmt(part * 100)} m` };
      },
      () => {
        const v = rnd(4, 12), t2 = rnd(2, 8);
        const t = t2 / 2, dist = (v * t2) / 2;
        return { textFr: `${name} roule à ${v} km/h pendant ${fmt(t * 100)} heure${t > 1 ? "s" : ""}. Quelle est la distance parcourue ?`, answer: dist, op: "×", calculation: `${v} × ${fmt(t * 100)} = ${fmt(dist * 100)} km` };
      },
      () => {
        const tot2 = rnd(10, 30), spent2 = rnd(4, Math.max(4, tot2 - 3));
        const tot = tot2 / 2, spent = spent2 / 2, rem = (tot2 - spent2) / 2;
        return { textFr: `${name} a ${fmt(tot * 100)} fr. ${name} dépense ${fmt(spent * 100)} fr. Quel montant reste-t-il ?`, answer: rem, op: "-", calculation: `${fmt(tot * 100)} − ${fmt(spent * 100)} = ${fmt(rem * 100)} fr.` };
      },
    ];
    for (let attempt = 0; attempt < 20; attempt++) {
      const q = templates[rnd(0, templates.length - 1)]!();
      if (Number.isFinite(q.answer) && q.answer > 0) return q;
    }
    return templates[0]!();
  }

  if (level === "m") {
    const templates: Array<() => WordProblemQ> = [
      () => {
        const n = rnd(3, 15), p100 = rnd(125, 900);
        const tot = Math.round(p100 * n) / 100;
        const item = ["article", "billet", "repas", "abonnement"][rnd(0, 3)]!;
        return { textFr: `Un ${item} coûte ${fmt(p100)} fr. ${name} en achète ${n}. Combien cela coûte-t-il ?`, answer: tot, op: "×", calculation: `${n} × ${fmt(p100)} = ${fmt(Math.round(p100 * n))} fr.` };
      },
      () => {
        const n = rnd(2, 8), part100 = rnd(50, 200);
        const part = part100 / 100;
        const item = ["farine", "sucre", "riz", "café"][rnd(0, 3)]!;
        return { textFr: `${name} répartit ${fmt(n * part100)} kg de ${item} dans ${n} sacs égaux. Combien pèse chaque sac ?`, answer: part, op: "÷", calculation: `${fmt(n * part100)} ÷ ${n} = ${fmt(part100)} kg` };
      },
      () => {
        const taux100 = rnd(1200, 2500), h_num = rnd(3, 10);
        const tot = Math.round(taux100 * h_num) / 100;
        return { textFr: `${name} gagne ${fmt(taux100)} fr. de l'heure. En ${h_num} heures, quel est le salaire de ${name} ?`, answer: tot, op: "×", calculation: `${h_num} × ${fmt(taux100)} = ${fmt(Math.round(taux100 * h_num))} fr.` };
      },
      () => {
        const spd = rnd(8, 20), t2 = rnd(4, 16);
        const t = t2 / 2, dist = Math.round(spd * t * 100) / 100;
        return { textFr: `Une voiture roule à ${spd} km/h pendant ${fmt(t2 * 50)} heures. Quelle distance parcourt-elle ?`, answer: dist, op: "×", calculation: `${spd} × ${fmt(t2 * 50)} = ${fmt(Math.round(spd * t * 100))} km` };
      },
      () => {
        const a100 = rnd(500, 3000), b100 = rnd(200, 1500);
        const tot = (a100 + b100) / 100;
        return { textFr: `${name} dépense ${fmt(a100)} fr. le matin et ${fmt(b100)} fr. l'après-midi. Quel est le montant total ?`, answer: tot, op: "+", calculation: `${fmt(a100)} + ${fmt(b100)} = ${fmt(a100 + b100)} fr.` };
      },
      () => {
        const tot100 = rnd(1500, 8000), used100 = rnd(500, tot100 - 500);
        const rem = (tot100 - used100) / 100;
        const unit = ["m", "kg", "litres"][rnd(0, 2)]!;
        return { textFr: `Un camion transporte ${fmt(tot100)} ${unit} de marchandises. Il en livre ${fmt(used100)} ${unit}. Combien reste-t-il ?`, answer: rem, op: "-", calculation: `${fmt(tot100)} − ${fmt(used100)} = ${fmt(tot100 - used100)} ${unit}` };
      },
      () => {
        const n = rnd(4, 12), per100 = rnd(75, 400);
        const per = per100 / 100;
        return { textFr: `${name} partage ${fmt(Math.round(n * per100))} litres de jus entre ${n} verres égaux. Combien y a-t-il dans chaque verre ?`, answer: per, op: "÷", calculation: `${fmt(Math.round(n * per100))} ÷ ${n} = ${fmt(per100)} litre${per !== 1 ? "s" : ""}` };
      },
    ];
    for (let attempt = 0; attempt < 20; attempt++) {
      const q = templates[rnd(0, templates.length - 1)]!();
      if (Number.isFinite(q.answer) && q.answer > 0) return q;
    }
    return templates[0]!();
  }

  // level === "h": multi-step
  const templates: Array<() => WordProblemQ> = [
    () => {
      const n1 = rnd(2, 8), n2 = rnd(2, 8);
      const p1100 = rnd(150, 800), p2100 = rnd(100, 600);
      const cost1 = Math.round(n1 * p1100), cost2 = Math.round(n2 * p2100);
      const tot = (cost1 + cost2) / 100;
      const item1 = ["carnets", "livres", "stylos"][rnd(0, 2)]!;
      const item2 = ["règles", "gommes", "feutres"][rnd(0, 2)]!;
      return { textFr: `${name} achète ${n1} ${item1} à ${fmt(p1100)} fr. et ${n2} ${item2} à ${fmt(p2100)} fr. Quel est le montant total dépensé ?`, answer: tot, op: "+", calculation: `${n1} × ${fmt(p1100)} + ${n2} × ${fmt(p2100)} = ${fmt(cost1)} + ${fmt(cost2)} = ${fmt(cost1 + cost2)} fr.` };
    },
    () => {
      const n = rnd(2, 6), p100 = rnd(150, 600);
      const budMax = n * p100 + rnd(200, 2000);
      const budget100 = Math.round(budMax / 50) * 50;
      const cost100 = n * p100, rem100 = budget100 - cost100;
      const item = ["billets", "livres", "repas"][rnd(0, 2)]!;
      return { textFr: `${name} a ${fmt(budget100)} fr. ${name} achète ${n} ${item} à ${fmt(p100)} fr. chacun. Quel montant reste-t-il ?`, answer: rem100 / 100, op: "-", calculation: `${n} × ${fmt(p100)} = ${fmt(cost100)} ; ${fmt(budget100)} − ${fmt(cost100)} = ${fmt(rem100)} fr.` };
    },
    () => {
      const taux100 = rnd(1500, 2500), hours = rnd(5, 8), days = rnd(3, 5);
      const expenses100 = rnd(1000, 3000);
      const total100 = taux100 * hours * days;
      const savings100 = total100 - expenses100;
      if (savings100 <= 0) return { textFr: "", answer: -1, op: "+" };
      return { textFr: `${name} gagne ${fmt(taux100)} fr./h, ${hours} h/jour pendant ${days} jours. ${name} dépense ${fmt(expenses100)} fr. Quelle somme est économisée ?`, answer: savings100 / 100, op: "-", calculation: `${fmt(taux100)} × ${hours} × ${days} = ${fmt(total100)} ; − ${fmt(expenses100)} = ${fmt(savings100)} fr.` };
    },
    () => {
      const n = rnd(4, 12), w100 = rnd(25, 150);
      const total100 = n * w100, used100 = rnd(50, total100 - 50);
      const rem100 = total100 - used100;
      const item = ["fromages", "pains", "gâteaux"][rnd(0, 2)]!;
      return { textFr: `Un boulanger prépare ${n} ${item} de ${fmt(w100)} kg chacun. Il en vend ${fmt(used100)} kg. Combien de kg lui reste-t-il ?`, answer: rem100 / 100, op: "-", calculation: `${n} × ${fmt(w100)} = ${fmt(total100)} ; − ${fmt(used100)} = ${fmt(rem100)} kg` };
    },
    () => {
      const n1 = rnd(3, 8), n2 = rnd(2, 6), p100 = rnd(100, 400);
      const fixed100 = rnd(500, 1500);
      const tot = (n1 * n2 * p100 + fixed100) / 100;
      return { textFr: `${name} achète ${n1} paquets de ${n2} articles à ${fmt(p100)} fr. l'article, plus ${fmt(fixed100)} fr. de frais. Quel est le total ?`, answer: tot, op: "+", calculation: `${n1} × ${n2} × ${fmt(p100)} = ${fmt(n1 * n2 * p100)} ; + ${fmt(fixed100)} = ${fmt(Math.round(tot * 100))} fr.` };
    },
  ];
  for (let attempt = 0; attempt < 20; attempt++) {
    const q = templates[rnd(0, templates.length - 1)]!();
    if (Number.isFinite(q.answer) && q.answer > 0) return q;
  }
  return templates[0]!();
}

// ── Proportion / rate / percentage word problems (A6.4) ───────────────────────
function genA64ProportionProblem(level: "e" | "m" | "h"): WordProblemQ {
  const name = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
  const fmt = (h: number) => fmtDec(Math.round(h));

  if (level === "e") {
    // Easy: integers, simple proportions and round percentages
    const templates: Array<() => WordProblemQ> = [
      () => {
        // Direct proportion: unit method
        const unitPrice = rnd(2, 8), qty = rnd(3, 12);
        const totalRef = unitPrice * rnd(2, 5), qtyRef = totalRef / unitPrice;
        const tot = unitPrice * qty;
        return { textFr: `${qtyRef} articles coûtent ${totalRef} fr. Combien coûtent ${qty} articles du même type ?`, answer: tot, op: "×", calculation: `Prix unitaire : ${totalRef} ÷ ${qtyRef} = ${unitPrice} fr. → ${qty} × ${unitPrice} = ${tot} fr.` };
      },
      () => {
        // Simple percentage: 10%
        const base = rnd(2, 20) * 10;
        const pct = 10, res = base * pct / 100;
        return { textFr: `Quel est ${pct}% de ${base} ?`, answer: res, op: "×", calculation: `${base} × ${pct} ÷ 100 = ${res}` };
      },
      () => {
        // Simple percentage: 25%
        const base = rnd(1, 12) * 4;
        const pct = 25, res = base * pct / 100;
        return { textFr: `Quel est ${pct}% de ${base} ?`, answer: res, op: "×", calculation: `${base} × ${pct} ÷ 100 = ${res}` };
      },
      () => {
        // Simple percentage: 50%
        const base = rnd(2, 30) * 2;
        const res = base / 2;
        return { textFr: `Quel est 50% de ${base} ?`, answer: res, op: "÷", calculation: `${base} ÷ 2 = ${res}` };
      },
      () => {
        // Speed × time = distance (integer)
        const v = rnd(40, 120), t = rnd(1, 5);
        const dist = v * t;
        return { textFr: `Une voiture roule à ${v} km/h pendant ${t} heure${t > 1 ? "s" : ""}. Quelle distance parcourt-elle ?`, answer: dist, op: "×", calculation: `${v} × ${t} = ${dist} km` };
      },
      () => {
        // Discount (round %)
        const base = rnd(2, 20) * 10, pct = [10, 20, 25, 50][rnd(0, 3)]!;
        const disc = base * pct / 100, final = base - disc;
        return { textFr: `Un article coûte ${base} fr. ${name} obtient une réduction de ${pct}%. Quel est le prix final ?`, answer: final, op: "-", calculation: `${base} × ${pct}/100 = ${disc} ; ${base} − ${disc} = ${final} fr.` };
      },
      () => {
        // Production rate: n per hour × hours
        const rate = rnd(8, 40), hours = rnd(3, 8);
        const tot = rate * hours;
        return { textFr: `Une machine produit ${rate} pièces par heure. En ${hours} heures, combien de pièces produit-elle ?`, answer: tot, op: "×", calculation: `${rate} × ${hours} = ${tot}` };
      },
    ];
    for (let attempt = 0; attempt < 20; attempt++) {
      const q = templates[rnd(0, templates.length - 1)]!();
      if (Number.isFinite(q.answer) && q.answer > 0) return q;
    }
    return templates[0]!();
  }

  if (level === "m") {
    // Medium: decimals, non-round percentages, unit prices
    const templates: Array<() => WordProblemQ> = [
      () => {
        // Unit price (decimal): find total
        const qty = rnd(3, 15), p100 = rnd(125, 800);
        const tot = Math.round(qty * p100) / 100;
        const item = ["kg de fruits", "litres de lait", "mètres de tissu", "articles"][rnd(0, 3)]!;
        return { textFr: `${name} achète ${qty} ${item} à ${fmt(p100)} fr. l'unité. Quel est le coût total ?`, answer: tot, op: "×", calculation: `${qty} × ${fmt(p100)} = ${fmt(Math.round(qty * p100))} fr.` };
      },
      () => {
        // Find unit price from total
        const n = rnd(2, 8), tot100 = n * rnd(150, 600);
        const unit = tot100 / 100 / n;
        const item = ["billets", "repas", "abonnements"][rnd(0, 2)]!;
        return { textFr: `${n} ${item} coûtent ${fmt(tot100)} fr. au total. Quel est le prix par ${item.slice(0, -1)} ?`, answer: unit, op: "÷", calculation: `${fmt(tot100)} ÷ ${n} = ${fmt(tot100 / n)} fr.` };
      },
      () => {
        // Percentage non-round
        const base100 = rnd(100, 500) * 10, pct = [15, 20, 30, 40][rnd(0, 3)]!;
        const res100 = Math.round(base100 * pct / 100);
        const res = res100 / 100;
        return { textFr: `Quel est ${pct}% de ${fmt(base100)} fr. ?`, answer: res, op: "×", calculation: `${fmt(base100)} × ${pct} ÷ 100 = ${fmt(res100)} fr.` };
      },
      () => {
        // Discount (decimal result)
        const base100 = rnd(50, 300) * 10, pct = [15, 20, 30][rnd(0, 2)]!;
        const disc100 = Math.round(base100 * pct / 100), final100 = base100 - disc100;
        const final = final100 / 100;
        return { textFr: `Un article vaut ${fmt(base100)} fr. Après une réduction de ${pct}%, quel est le prix à payer ?`, answer: final, op: "-", calculation: `${fmt(base100)} × ${1 - pct / 100} = ${fmt(final100)} fr.` };
      },
      () => {
        // Speed × decimal time
        const v = rnd(50, 120), t2 = rnd(3, 10);
        const t = t2 / 2, dist = Math.round(v * t * 100) / 100;
        return { textFr: `Un train roule à ${v} km/h pendant ${fmt(t2 * 50)} heures. Quelle distance parcourt-il ?`, answer: dist, op: "×", calculation: `${v} × ${fmt(t2 * 50)} = ${fmt(Math.round(v * t * 100))} km` };
      },
      () => {
        // Proportion (cross-multiply): decimal answer
        // 5 articles cost X. How much for n?
        const n2 = rnd(3, 15), perUnit100b = rnd(75, 400);
        const refQty = rnd(2, 5), refCost100b = refQty * perUnit100b;
        const totb = (n2 * perUnit100b) / 100;
        return { textFr: `Si ${refQty} kg coûtent ${fmt(refCost100b)} fr., combien coûtent ${n2} kg ?`, answer: totb, op: "×", calculation: `Prix au kg : ${fmt(refCost100b)} ÷ ${refQty} = ${fmt(perUnit100b)} fr./kg → ${n2} × ${fmt(perUnit100b)} = ${fmt(Math.round(totb * 100))} fr.` };
      },
    ];
    for (let attempt = 0; attempt < 20; attempt++) {
      const q = templates[rnd(0, templates.length - 1)]!();
      if (Number.isFinite(q.answer) && q.answer > 0) return q;
    }
    return templates[0]!();
  }

  // level === "h": multi-step proportion/rate/percentage
  const templates: Array<() => WordProblemQ> = [
    () => {
      // Budget − proportional discount
      const base100 = rnd(200, 600) * 10, pct = [10, 15, 20, 25][rnd(0, 3)]!;
      const disc100 = Math.round(base100 * pct / 100), after100 = base100 - disc100;
      const tax = 8, final100 = Math.round(after100 * (1 + tax / 100));
      const final = final100 / 100;
      return { textFr: `Un article vaut ${fmt(base100)} fr. ${name} obtient ${pct}% de réduction, puis paie ${tax}% de TVA. Quel est le prix final ?`, answer: final, op: "+", calculation: `${fmt(base100)} − ${pct}% = ${fmt(after100)} ; + ${tax}% TVA = ${fmt(final100)} fr.` };
    },
    () => {
      // Total cost: two groups with unit prices
      const n1 = rnd(3, 10), p1100 = rnd(100, 500), n2 = rnd(2, 8), p2100 = rnd(75, 350);
      const cost1 = n1 * p1100, cost2 = n2 * p2100, tot = (cost1 + cost2) / 100;
      const item1 = ["cahiers", "livres", "stylos"][rnd(0, 2)]!;
      const item2 = ["règles", "gommes", "feutres"][rnd(0, 2)]!;
      return { textFr: `${name} achète ${n1} ${item1} à ${fmt(p1100)} fr. et ${n2} ${item2} à ${fmt(p2100)} fr. Quel est le total ?`, answer: tot, op: "+", calculation: `${n1}×${fmt(p1100)} + ${n2}×${fmt(p2100)} = ${fmt(cost1)} + ${fmt(cost2)} = ${fmt(cost1 + cost2)} fr.` };
    },
    () => {
      // Work: rate × time × days
      const rate100 = rnd(1500, 2800), hoursDay = rnd(5, 8), days = rnd(3, 6);
      const tot100 = rate100 * hoursDay * days;
      const tot = tot100 / 100;
      return { textFr: `${name} gagne ${fmt(rate100)} fr./h. ${name} travaille ${hoursDay} h/jour pendant ${days} jours. Quel est le salaire total ?`, answer: tot, op: "×", calculation: `${fmt(rate100)} × ${hoursDay} × ${days} = ${fmt(tot100)} fr.` };
    },
    () => {
      // Percentage increase: new price
      const base100 = rnd(100, 400) * 10, pct = [5, 8, 10, 12, 15][rnd(0, 4)]!;
      const increase100 = Math.round(base100 * pct / 100), new100 = base100 + increase100;
      return { textFr: `Le prix d'un abonnement est de ${fmt(base100)} fr. Il augmente de ${pct}%. Quel est le nouveau prix ?`, answer: new100 / 100, op: "+", calculation: `${fmt(base100)} × ${pct}/100 = ${fmt(increase100)} ; ${fmt(base100)} + ${fmt(increase100)} = ${fmt(new100)} fr.` };
    },
    () => {
      // Split costs proportionally (not % but ratio)
      const total100 = rnd(500, 3000) * 10, persons = rnd(3, 8);
      const share100 = Math.round(total100 / persons);
      if (share100 * persons !== total100) return { textFr: "", answer: -1, op: "+" };
      return { textFr: `${name} et ${persons - 1} amis partagent des dépenses de ${fmt(total100)} fr. en parts égales. Combien chacun paie-t-il ?`, answer: share100 / 100, op: "÷", calculation: `${fmt(total100)} ÷ ${persons} = ${fmt(share100)} fr.` };
    },
  ];
  for (let attempt = 0; attempt < 20; attempt++) {
    const q = templates[rnd(0, templates.length - 1)]!();
    if (Number.isFinite(q.answer) && q.answer > 0) return q;
  }
  return templates[0]!();
}

// ── Equation word problems (A10.5) ────────────────────────────────────────────
function genA105EquationProblem(level: "e" | "m" | "h"): WordProblemQ {
  const name = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;
  const name2 = A2_4_CONTEXT_NAMES[rnd(0, A2_4_CONTEXT_NAMES.length - 1)]!;

  if (level === "e") {
    // 1-step equations: x+a=b (15), a×x=b (15), x-a=b (12), x÷a=b (8)
    const templates: Array<() => WordProblemQ> = [
      // ── x + a = b (find initial or added) — 15 templates ─────────────────
      () => { const a = rnd(5, 30), b = rnd(a + 3, a + 40); return { textFr: `${name} a une collection de cartes. Après en avoir reçu ${a} de plus, ${name} en a ${b} au total. Combien ${name} en avait-il au départ ?`, answer: b - a, op: "+", calculation: `x + ${a} = ${b} → x = ${b} − ${a} = ${b - a}` }; },
      () => { const a = rnd(10, 50), b = rnd(a + 5, a + 60); return { textFr: `${name} dépose ${a} francs sur son compte en banque. Le solde passe à ${b} francs. Quel était le solde initial ?`, answer: b - a, op: "+", calculation: `x + ${a} = ${b} → x = ${b} − ${a} = ${b - a}` }; },
      () => { const a = rnd(3, 20), b = rnd(a + 5, a + 30); return { textFr: `Au départ, ${name} parcourt une partie du chemin. Après ${a} km de plus, ${name} a parcouru ${b} km au total. Quelle distance avait-il déjà faite ?`, answer: b - a, op: "+", calculation: `x + ${a} = ${b} → x = ${b} − ${a} = ${b - a}` }; },
      () => { const a = rnd(5, 25), b = rnd(a + 3, a + 35); return { textFr: `Un sac pèse déjà une certaine masse. On y ajoute ${a} kg. Le sac pèse maintenant ${b} kg. Quelle était la masse initiale du sac ?`, answer: b - a, op: "+", calculation: `x + ${a} = ${b} → x = ${b} − ${a} = ${b - a}` }; },
      () => { const a = rnd(20, 80), b = rnd(a + 10, a + 100); return { textFr: `${name} marque ${a} points supplémentaires et totalise ${b} points. Combien de points avait-il avant ?`, answer: b - a, op: "+", calculation: `x + ${a} = ${b} → x = ${b} − ${a} = ${b - a}` }; },
      () => { const a = rnd(4, 20), b = rnd(a + 2, a + 25); return { textFr: `${name} reçoit ${a} billes d'un ami. Maintenant ${name} possède ${b} billes. Combien en avait-il avant ?`, answer: b - a, op: "+", calculation: `x + ${a} = ${b} → x = ${b} − ${a} = ${b - a}` }; },
      () => { const a = rnd(10, 40), b = rnd(a + 8, a + 50); return { textFr: `La bibliothèque achète ${a} nouveaux livres et en possède maintenant ${b}. Combien en avait-elle avant l'achat ?`, answer: b - a, op: "+", calculation: `x + ${a} = ${b} → x = ${b} − ${a} = ${b - a}` }; },
      () => { const x = rnd(5, 40), a = rnd(3, 20); return { textFr: `${name} a économisé ${x} francs. Combien doit-il encore épargner pour atteindre ${x + a} francs ?`, answer: a, op: "+", calculation: `${x} + x = ${x + a} → x = ${x + a} − ${x} = ${a}` }; },
      () => { const x = rnd(10, 60), a = rnd(5, 30); return { textFr: `Une équipe a déjà marqué ${x} buts. Combien de buts supplémentaires faut-il marquer pour en avoir ${x + a} au total ?`, answer: a, op: "+", calculation: `${x} + x = ${x + a} → x = ${x + a} − ${x} = ${a}` }; },
      () => { const x = rnd(50, 200), a = rnd(20, 80); return { textFr: `Un magasin reçoit une livraison. Après reception, le stock passe de ${x} à ${x + a} articles. Combien d'articles ont été livrés ?`, answer: a, op: "+", calculation: `${x} + x = ${x + a} → x = ${x + a} − ${x} = ${a}` }; },
      () => { const x = rnd(5, 30), a = rnd(3, 15); return { textFr: `${name} plante ${x} graines. Après quelques jours, ${a} graines germent en plus. Combien de pousses ${name} a-t-il maintenant ?`, answer: x + a, op: "+", calculation: `${x} + ${a} = ${x + a}` }; },
      () => { const a = rnd(8, 30), b = rnd(a + 5, a + 40); return { textFr: `${name} avait une certaine somme. Après avoir reçu ${a} fr. de sa part, ${name} a maintenant ${b} fr. Quelle somme avait ${name} au départ ?`, answer: b - a, op: "+", calculation: `x + ${a} = ${b} → x = ${b} − ${a} = ${b - a}` }; },
      () => { const a = rnd(15, 60), b = rnd(a + 10, a + 80); return { textFr: `Un réservoir contient déjà de l'eau. On y verse ${a} litres de plus ; il en contient maintenant ${b} litres. Quelle quantité y avait-il au départ ?`, answer: b - a, op: "+", calculation: `x + ${a} = ${b} → x = ${b} − ${a} = ${b - a}` }; },
      () => { const x = rnd(20, 80), a = rnd(10, 40); return { textFr: `Un train transporte ${x} passagers. À la gare suivante, des voyageurs montent et le train a maintenant ${x + a} passagers. Combien sont montés ?`, answer: a, op: "+", calculation: `${x} + x = ${x + a} → x = ${x + a} − ${x} = ${a}` }; },
      () => { const a = rnd(3, 15), b = rnd(a + 2, a + 20); return { textFr: `${name} a des stylos. Après en avoir trouvé ${a} dans son cartable, ${name} en a ${b} au total. Combien en avait-il avant ?`, answer: b - a, op: "+", calculation: `x + ${a} = ${b} → x = ${b} − ${a} = ${b - a}` }; },
      // ── a × x = b (find unit) — 15 templates ─────────────────────────────
      () => { const a = rnd(2, 8), x = rnd(3, 15); return { textFr: `${name} achète ${a} carnets au même prix. Le total est de ${a * x} francs. Quel est le prix d'un carnet ?`, answer: x, op: "×", calculation: `${a} × x = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(3, 7), x = rnd(4, 20); return { textFr: `Un ouvrier remplit ${a} sacs égaux avec ${a * x} kg de sable en tout. Quelle masse contient chaque sac ?`, answer: x, op: "×", calculation: `${a} × x = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(2, 10), x = rnd(5, 25); return { textFr: `Une boîte contient ${a} rangées de ${x} chocolats chacune... non : ${a} boîtes identiques contiennent ${a * x} chocolats au total. Combien y a-t-il de chocolats par boîte ?`, answer: x, op: "×", calculation: `${a} × x = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(4, 9), x = rnd(3, 12); return { textFr: `Un camion effectue ${a} voyages identiques et transporte ${a * x} colis au total. Combien de colis transporte-t-il par voyage ?`, answer: x, op: "×", calculation: `${a} × x = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(5, 12), x = rnd(6, 20); return { textFr: `${name} travaille ${a} jours et gagne ${a * x} francs en tout. Quel est le salaire journalier de ${name} ?`, answer: x, op: "×", calculation: `${a} × x = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(3, 8), x = rnd(4, 18); return { textFr: `Une machine produit le même nombre de pièces chaque heure. En ${a} heures, elle produit ${a * x} pièces. Combien produit-elle par heure ?`, answer: x, op: "×", calculation: `${a} × x = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(2, 6), x = rnd(8, 30); return { textFr: `${name} achète ${a} billets de cinéma pour ${a * x} fr. au total. Quel est le prix d'un billet ?`, answer: x, op: "×", calculation: `${a} × x = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(4, 10), x = rnd(5, 20); return { textFr: `Un groupe de ${a} personnes partage un repas de ${a * x} fr. de façon égale. Combien chacun paie-t-il ?`, answer: x, op: "×", calculation: `${a} × x = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(3, 9), x = rnd(7, 25); return { textFr: `${name} fait ${a} tours de piste identiques et parcourt ${a * x} km au total. Quelle est la longueur d'un tour ?`, answer: x, op: "×", calculation: `${a} × x = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(2, 7), x = rnd(10, 40); return { textFr: `${a} boîtes identiques pèsent ${a * x} kg en tout. Quelle est la masse d'une boîte ?`, answer: x, op: "×", calculation: `${a} × x = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(5, 10), x = rnd(4, 15); return { textFr: `${name} met le même nombre de graines dans chacun des ${a} pots. Au total, ${name} a planté ${a * x} graines. Combien y en a-t-il par pot ?`, answer: x, op: "×", calculation: `${a} × x = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(3, 8), x = rnd(6, 22); return { textFr: `Un fermier ramasse le même nombre d'œufs chaque matin. En ${a} jours, il ramasse ${a * x} œufs. Combien en ramasse-t-il par jour ?`, answer: x, op: "×", calculation: `${a} × x = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(2, 6), x = rnd(5, 30); return { textFr: `Un livre de ${a * x} pages est divisé en ${a} chapitres de même longueur. Combien de pages compte chaque chapitre ?`, answer: x, op: "×", calculation: `${a} × x = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(4, 8), x = rnd(3, 12); return { textFr: `${name} achète ${a} sacs de fruits au même prix unitaire. Le total est de ${a * x} fr. Quel est le prix d'un sac ?`, answer: x, op: "×", calculation: `${a} × x = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(3, 7), x = rnd(5, 18); return { textFr: `Une corde est coupée en ${a} morceaux égaux et mesure ${a * x} m au total. Quelle est la longueur de chaque morceau ?`, answer: x, op: "÷", calculation: `${a} × x = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      // ── x - a = b (find original before removal) — 12 templates ──────────
      () => { const a = rnd(5, 25), x = rnd(a + 3, a + 40); return { textFr: `${name} dépense ${a} francs et il lui reste ${x - a} francs. Combien ${name} avait-il au départ ?`, answer: x, op: "-", calculation: `x − ${a} = ${x - a} → x = ${x - a} + ${a} = ${x}` }; },
      () => { const a = rnd(10, 50), x = rnd(a + 5, a + 80); return { textFr: `${name} prête ${a} livres à des amis. Il lui en reste ${x - a}. Combien de livres ${name} possédait-il au départ ?`, answer: x, op: "-", calculation: `x − ${a} = ${x - a} → x = ${x - a} + ${a} = ${x}` }; },
      () => { const a = rnd(3, 15), x = rnd(a + 2, a + 30); return { textFr: `Un marchand vend ${a} fruits et il lui en reste ${x - a}. Combien en avait-il au départ ?`, answer: x, op: "-", calculation: `x − ${a} = ${x - a} → x = ${x - a} + ${a} = ${x}` }; },
      () => { const a = rnd(20, 80), x = rnd(a + 10, a + 100); return { textFr: `${name} mange ${a} bonbons de son stock et il lui en reste ${x - a}. Combien ${name} en avait-il avant ?`, answer: x, op: "-", calculation: `x − ${a} = ${x - a} → x = ${x - a} + ${a} = ${x}` }; },
      () => { const a = rnd(5, 30), x = rnd(a + 5, a + 60); return { textFr: `Un entrepôt expédie ${a} caisses. Il en reste ${x - a}. Combien y avait-il de caisses avant l'expédition ?`, answer: x, op: "-", calculation: `x − ${a} = ${x - a} → x = ${x - a} + ${a} = ${x}` }; },
      () => { const a = rnd(8, 40), x = rnd(a + 5, a + 70); return { textFr: `Une classe comptait un certain nombre d'élèves. ${a} sont partis en excursion et il en reste ${x - a} en classe. Combien y avait-il d'élèves au total ?`, answer: x, op: "-", calculation: `x − ${a} = ${x - a} → x = ${x - a} + ${a} = ${x}` }; },
      () => { const a = rnd(15, 60), x = rnd(a + 10, a + 90); return { textFr: `${name} retire ${a} francs au distributeur. Le solde de son compte passe à ${x - a} fr. Quel était le solde avant le retrait ?`, answer: x, op: "-", calculation: `x − ${a} = ${x - a} → x = ${x - a} + ${a} = ${x}` }; },
      () => { const a = rnd(4, 20), x = rnd(a + 2, a + 35); return { textFr: `${name} donne ${a} autocollants à ${name2}. ${name} en a maintenant ${x - a}. Combien en avait-il avant ?`, answer: x, op: "-", calculation: `x − ${a} = ${x - a} → x = ${x - a} + ${a} = ${x}` }; },
      () => { const a = rnd(10, 45), x = rnd(a + 8, a + 70); return { textFr: `Un fleuriste vend ${a} bouquets dans la matinée et en a ${x - a} à midi. Combien en avait-il au matin ?`, answer: x, op: "-", calculation: `x − ${a} = ${x - a} → x = ${x - a} + ${a} = ${x}` }; },
      () => { const a = rnd(5, 25), x = rnd(a + 3, a + 45); return { textFr: `Après avoir utilisé ${a} feuilles de papier, ${name} en a encore ${x - a}. Combien en avait-il au début ?`, answer: x, op: "-", calculation: `x − ${a} = ${x - a} → x = ${x - a} + ${a} = ${x}` }; },
      () => { const a = rnd(30, 100), x = rnd(a + 20, a + 120); return { textFr: `Un parking avait un certain nombre de voitures. ${a} voitures sont reparties ; il en reste ${x - a}. Combien y en avait-il ?`, answer: x, op: "-", calculation: `x − ${a} = ${x - a} → x = ${x - a} + ${a} = ${x}` }; },
      () => { const a = rnd(6, 28), x = rnd(a + 4, a + 40); return { textFr: `${name} consomme ${a} litres d'eau d'une bonbonne et il en reste ${x - a} litres. Quelle était la quantité initiale ?`, answer: x, op: "-", calculation: `x − ${a} = ${x - a} → x = ${x - a} + ${a} = ${x}` }; },
      // ── x ÷ a = b (find total from sharing/rate) — 8 templates ───────────
      () => { const a = rnd(2, 8), b = rnd(3, 15); return { textFr: `${name} partage des biscuits en ${a} parts égales. Chaque part contient ${b} biscuits. Combien ${name} avait-il de biscuits au départ ?`, answer: a * b, op: "÷", calculation: `x ÷ ${a} = ${b} → x = ${b} × ${a} = ${a * b}` }; },
      () => { const a = rnd(3, 7), b = rnd(4, 20); return { textFr: `${name} divise une somme d'argent entre ${a} enfants. Chacun reçoit ${b} francs. Quelle était la somme totale ?`, answer: a * b, op: "÷", calculation: `x ÷ ${a} = ${b} → x = ${b} × ${a} = ${a * b}` }; },
      () => { const a = rnd(4, 10), b = rnd(5, 18); return { textFr: `Une longue corde est coupée en ${a} morceaux de ${b} m chacun. Quelle était la longueur totale de la corde ?`, answer: a * b, op: "÷", calculation: `x ÷ ${a} = ${b} → x = ${b} × ${a} = ${a * b}` }; },
      () => { const a = rnd(2, 6), b = rnd(6, 25); return { textFr: `${name} répartit des livres dans ${a} cartons identiques. Chaque carton contient ${b} livres. Combien de livres ${name} avait-il ?`, answer: a * b, op: "÷", calculation: `x ÷ ${a} = ${b} → x = ${b} × ${a} = ${a * b}` }; },
      () => { const a = rnd(5, 10), b = rnd(4, 12); return { textFr: `Un magasin reçoit des articles répartis en ${a} colis identiques de ${b} articles chacun. Combien d'articles au total ?`, answer: a * b, op: "÷", calculation: `x ÷ ${a} = ${b} → x = ${b} × ${a} = ${a * b}` }; },
      () => { const a = rnd(3, 8), b = rnd(5, 20); return { textFr: `Une production est divisée en ${a} lots égaux de ${b} pièces. Quelle est la production totale ?`, answer: a * b, op: "÷", calculation: `x ÷ ${a} = ${b} → x = ${b} × ${a} = ${a * b}` }; },
      () => { const a = rnd(4, 9), b = rnd(3, 15); return { textFr: `${name} partage des graines entre ${a} jardinets. Chaque jardinet reçoit ${b} graines. Combien de graines ${name} avait-il ?`, answer: a * b, op: "÷", calculation: `x ÷ ${a} = ${b} → x = ${b} × ${a} = ${a * b}` }; },
      () => { const a = rnd(2, 7), b = rnd(8, 30); return { textFr: `${name} répartit des pages de lecture sur ${a} jours. Chaque jour, ${name} lit ${b} pages. Combien de pages compte le livre ?`, answer: a * b, op: "÷", calculation: `x ÷ ${a} = ${b} → x = ${b} × ${a} = ${a * b}` }; },
    ];
    for (let attempt = 0; attempt < 20; attempt++) {
      const q = templates[rnd(0, templates.length - 1)]!();
      if (Number.isFinite(q.answer) && q.answer > 0) return q;
    }
    return templates[0]!();
  }

  if (level === "m") {
    // 2-step equations: ax+b=c (15), a(x+b)=c (10), ax-b=c (10), x/a+b=c (8), mixed (7)
    const templates: Array<() => WordProblemQ> = [
      // ── ax + b = c (base/fixed + variable = total) — 15 templates ─────────
      () => { const a = rnd(2, 8), b = rnd(5, 30), x = rnd(3, 15); const c = a * x + b; return { textFr: `Un abonnement de base coûte ${b} fr., puis ${a} fr. par utilisation. ${name} paie ${c} fr. au total. Combien d'utilisations a-t-il faites ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c} − ${b} = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(3, 10), b = rnd(10, 50), x = rnd(2, 12); const c = a * x + b; return { textFr: `L'entrée d'un parc coûte ${b} fr. fixe plus ${a} fr. par attraction. ${name} dépense ${c} fr. Combien d'attractions a-t-il visitées ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(5, 15), b = rnd(20, 80), x = rnd(3, 10); const c = a * x + b; return { textFr: `${name} reçoit un salaire de base de ${b} fr. et ${a} fr. par heure supplémentaire. Ce mois, ${name} touche ${c} fr. Combien d'heures supplémentaires a-t-il faites ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(2, 7), b = rnd(8, 40), x = rnd(4, 18); const c = a * x + b; return { textFr: `Un forfait téléphonique coûte ${b} fr./mois et ${a} fr. par SMS hors forfait. La facture de ${name} est de ${c} fr. Combien de SMS hors forfait a-t-il envoyés ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(4, 12), b = rnd(15, 60), x = rnd(2, 10); const c = a * x + b; return { textFr: `Une salle de sport facture ${b} fr. d'inscription et ${a} fr. par séance. ${name} paye ${c} fr. en tout. Combien de séances a-t-il faites ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(3, 9), b = rnd(12, 45), x = rnd(3, 14); const c = a * x + b; return { textFr: `La livraison coûte ${b} fr. de frais fixes plus ${a} fr. par colis. ${name} paye ${c} fr. Combien de colis a-t-il envoyés ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(5, 20), b = rnd(25, 100), x = rnd(2, 8); const c = a * x + b; return { textFr: `${name} loue un vélo avec ${b} fr. de caution et ${a} fr. de l'heure. ${name} paie ${c} fr. Combien d'heures a-t-il loué le vélo ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(6, 18), b = rnd(20, 70), x = rnd(3, 12); const c = a * x + b; return { textFr: `Un cours de cuisine coûte ${b} fr. pour les ingrédients de base, plus ${a} fr. par heure d'enseignement. ${name} paie ${c} fr. Combien d'heures de cours a-t-il eu ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(2, 8), b = rnd(5, 30), x = rnd(5, 20); const c = a * x + b; return { textFr: `Un club de lecture demande ${b} fr. d'adhésion annuelle et ${a} fr. par livre emprunté. ${name} paie ${c} fr. Combien de livres a-t-il empruntés ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(3, 10), b = rnd(10, 50), x = rnd(4, 15); const c = a * x + b; return { textFr: `${name} paie ${b} fr. de frais administratifs et ${a} fr. par document traduit. La facture totale est de ${c} fr. Combien de documents ont été traduits ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(8, 20), b = rnd(30, 80), x = rnd(2, 9); const c = a * x + b; return { textFr: `Un parking facture ${b} fr. d'abonnement mensuel et ${a} fr. par nuit supplémentaire. ${name} paie ${c} fr. ce mois. Combien de nuits supplémentaires a-t-il passées ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(4, 14), b = rnd(15, 55), x = rnd(3, 11); const c = a * x + b; return { textFr: `${name} paie ${b} fr. de matériel et ${a} fr. par atelier de bricolage. Au total, ${name} dépense ${c} fr. Combien d'ateliers a-t-il suivis ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(10, 25), b = rnd(40, 100), x = rnd(2, 7); const c = a * x + b; return { textFr: `Un service de nettoyage coûte ${b} fr. de déplacement et ${a} fr. de l'heure. La facture de ${name} est de ${c} fr. Combien d'heures de nettoyage a-t-il commandées ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(5, 12), b = rnd(18, 60), x = rnd(4, 14); const c = a * x + b; return { textFr: `${name} achète un abonnement bus à ${b} fr. et recharge ${x} fois sa carte de ${a} fr. Le total débité est de ${c} fr. Combien de recharges a-t-il effectuées ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(3, 9), b = rnd(10, 40), x = rnd(5, 18); const c = a * x + b; return { textFr: `Une piscine facture ${b} fr. de cotisation annuelle et ${a} fr. par entrée. ${name} dépense ${c} fr. Combien d'entrées a-t-il utilisées ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      // ── a(x + b) = c (groups with base+extra = total) — 10 templates ──────
      () => { const a = rnd(2, 6), b = rnd(2, 8), x = rnd(5, 20); const c = a * (x + b); return { textFr: `${a} packs de bouteilles sont vendus. Chaque pack contient des bouteilles normales plus ${b} bouteilles bonus. Au total, il y a ${c} bouteilles. Combien de bouteilles normales contient un pack ?`, answer: x, op: "×", calculation: `${a}(x + ${b}) = ${c} → x + ${b} = ${c} ÷ ${a} = ${c / a} → x = ${c / a} − ${b} = ${x}` }; },
      () => { const a = rnd(3, 7), b = rnd(1, 4), x = rnd(4, 15); const c = a * (x + b); return { textFr: `${a} groupes d'élèves partent en excursion. Chaque groupe comprend des élèves et ${b} accompagnateurs. En tout, il y a ${c} personnes. Combien d'élèves compte chaque groupe ?`, answer: x, op: "×", calculation: `${a}(x + ${b}) = ${c} → x + ${b} = ${c} ÷ ${a} = ${c / a} → x = ${c / a} − ${b} = ${x}` }; },
      () => { const a = rnd(2, 5), b = rnd(3, 10), x = rnd(6, 20); const c = a * (x + b); return { textFr: `${name} prépare ${a} boîtes-cadeaux identiques. Chaque boîte contient des articles achetés et ${b} articles reçus en cadeau. Au total, il y a ${c} articles. Combien d'articles achetés contient chaque boîte ?`, answer: x, op: "×", calculation: `${a}(x + ${b}) = ${c} → x + ${b} = ${c} ÷ ${a} = ${c / a} → x = ${c / a} − ${b} = ${x}` }; },
      () => { const a = rnd(4, 8), b = rnd(2, 6), x = rnd(5, 14); const c = a * (x + b); return { textFr: `Un marchand vend ${a} lots identiques. Chaque lot comprend des articles payants et ${b} articles offerts. Il remet ${c} articles en tout. Combien d'articles payants contient chaque lot ?`, answer: x, op: "×", calculation: `${a}(x + ${b}) = ${c} → x + ${b} = ${c} ÷ ${a} = ${c / a} → x = ${c / a} − ${b} = ${x}` }; },
      () => { const a = rnd(3, 6), b = rnd(2, 5), x = rnd(4, 12); const c = a * (x + b); return { textFr: `${a} navettes transportent des personnes. Chaque navette transporte des adultes et ${b} enfants. En tout, ${c} personnes sont transportées. Combien d'adultes sont dans chaque navette ?`, answer: x, op: "×", calculation: `${a}(x + ${b}) = ${c} → x + ${b} = ${c} ÷ ${a} = ${c / a} → x = ${c / a} − ${b} = ${x}` }; },
      () => { const a = rnd(2, 5), b = rnd(4, 10), x = rnd(8, 22); const c = a * (x + b); return { textFr: `${a} étagères identiques contiennent des livres de fiction et ${b} dictionnaires chacune. On compte ${c} livres au total sur ces étagères. Combien de livres de fiction sont sur chaque étagère ?`, answer: x, op: "×", calculation: `${a}(x + ${b}) = ${c} → x + ${b} = ${c} ÷ ${a} = ${c / a} → x = ${c / a} − ${b} = ${x}` }; },
      () => { const a = rnd(3, 7), b = rnd(2, 6), x = rnd(5, 18); const c = a * (x + b); return { textFr: `${a} camions livrent des palettes. Chaque camion transporte des palettes pleines et ${b} palettes vides. En tout, ${c} palettes sont transportées. Combien de palettes pleines par camion ?`, answer: x, op: "×", calculation: `${a}(x + ${b}) = ${c} → x + ${b} = ${c} ÷ ${a} = ${c / a} → x = ${c / a} − ${b} = ${x}` }; },
      () => { const a = rnd(2, 6), b = rnd(3, 8), x = rnd(6, 16); const c = a * (x + b); return { textFr: `${a} équipes participent à un tournoi. Chaque équipe a des joueurs titulaires et ${b} remplaçants. Il y a ${c} joueurs en tout. Combien de titulaires par équipe ?`, answer: x, op: "×", calculation: `${a}(x + ${b}) = ${c} → x + ${b} = ${c} ÷ ${a} = ${c / a} → x = ${c / a} − ${b} = ${x}` }; },
      () => { const a = rnd(4, 8), b = rnd(1, 4), x = rnd(4, 12); const c = a * (x + b); return { textFr: `${a} classes visitent un musée. Chaque classe comprend des élèves et ${b} professeurs. Au total, ${c} personnes visitent le musée. Combien d'élèves y a-t-il par classe ?`, answer: x, op: "×", calculation: `${a}(x + ${b}) = ${c} → x + ${b} = ${c} ÷ ${a} = ${c / a} → x = ${c / a} − ${b} = ${x}` }; },
      () => { const a = rnd(3, 6), b = rnd(2, 7), x = rnd(5, 15); const c = a * (x + b); return { textFr: `${a} sacs identiques contiennent des oranges et ${b} citrons chacun. On compte ${c} fruits au total. Combien d'oranges dans chaque sac ?`, answer: x, op: "×", calculation: `${a}(x + ${b}) = ${c} → x + ${b} = ${c} ÷ ${a} = ${c / a} → x = ${c / a} − ${b} = ${x}` }; },
      // ── ax - b = c (earnings - fixed cost = net) — 10 templates ──────────
      () => { const a = rnd(3, 10), b = rnd(10, 50), x = rnd(5, 20); const c = a * x - b; if (c <= 0) return { textFr: "", answer: -1, op: "+" }; return { textFr: `${name} vend des articles à ${a} fr. l'unité, mais paie ${b} fr. de location de stand. ${name} gagne ${c} fr. de bénéfice net. Combien d'articles a-t-il vendus ?`, answer: x, op: "×", calculation: `${a}x − ${b} = ${c} → ${a}x = ${c} + ${b} = ${c + b} → x = ${c + b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(5, 15), b = rnd(20, 80), x = rnd(4, 14); const c = a * x - b; if (c <= 0) return { textFr: "", answer: -1, op: "+" }; return { textFr: `${name} gagne ${a} fr. par heure mais paie ${b} fr. de frais de transport. Le revenu net est de ${c} fr. Combien d'heures a-t-il travaillé ?`, answer: x, op: "×", calculation: `${a}x − ${b} = ${c} → ${a}x = ${c + b} → x = ${c + b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(4, 12), b = rnd(15, 60), x = rnd(5, 15); const c = a * x - b; if (c <= 0) return { textFr: "", answer: -1, op: "+" }; return { textFr: `Un agriculteur gagne ${a} fr. par kg vendu, mais paie ${b} fr. de frais d'emballage. Son revenu net est de ${c} fr. Combien de kg a-t-il vendus ?`, answer: x, op: "×", calculation: `${a}x − ${b} = ${c} → ${a}x = ${c + b} → x = ${c + b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(6, 20), b = rnd(25, 90), x = rnd(3, 12); const c = a * x - b; if (c <= 0) return { textFr: "", answer: -1, op: "+" }; return { textFr: `${name} vend des gâteaux ${a} fr. pièce. Après avoir remboursé ${b} fr. de coût de production, ${name} garde ${c} fr. de profit. Combien de gâteaux a-t-il vendus ?`, answer: x, op: "×", calculation: `${a}x − ${b} = ${c} → ${a}x = ${c + b} → x = ${c + b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(8, 18), b = rnd(30, 80), x = rnd(4, 10); const c = a * x - b; if (c <= 0) return { textFr: "", answer: -1, op: "+" }; return { textFr: `Un taxi facture ${a} fr. par course. Après déduction de ${b} fr. d'essence, le chauffeur a gagné ${c} fr. nets. Combien de courses a-t-il effectuées ?`, answer: x, op: "×", calculation: `${a}x − ${b} = ${c} → ${a}x = ${c + b} → x = ${c + b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(5, 12), b = rnd(20, 70), x = rnd(5, 14); const c = a * x - b; if (c <= 0) return { textFr: "", answer: -1, op: "+" }; return { textFr: `${name} vend des abonnements à ${a} fr. par abonné. Après avoir payé ${b} fr. de publicité, il lui reste ${c} fr. Combien d'abonnements a-t-il vendus ?`, answer: x, op: "×", calculation: `${a}x − ${b} = ${c} → ${a}x = ${c + b} → x = ${c + b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(3, 9), b = rnd(10, 45), x = rnd(6, 18); const c = a * x - b; if (c <= 0) return { textFr: "", answer: -1, op: "+" }; return { textFr: `${name} gagne ${a} fr. par heure de babysitting. Après avoir payé ${b} fr. de bus, son bénéfice net est de ${c} fr. Combien d'heures a-t-il gardé les enfants ?`, answer: x, op: "×", calculation: `${a}x − ${b} = ${c} → ${a}x = ${c + b} → x = ${c + b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(10, 25), b = rnd(40, 100), x = rnd(3, 9); const c = a * x - b; if (c <= 0) return { textFr: "", answer: -1, op: "+" }; return { textFr: `Un atelier facture ${a} fr. par pièce réparée. Après déduction de ${b} fr. de fournitures, le technicien touche ${c} fr. nets. Combien de pièces a-t-il réparées ?`, answer: x, op: "×", calculation: `${a}x − ${b} = ${c} → ${a}x = ${c + b} → x = ${c + b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(4, 10), b = rnd(12, 50), x = rnd(5, 16); const c = a * x - b; if (c <= 0) return { textFr: "", answer: -1, op: "+" }; return { textFr: `${name} perçoit ${a} fr. par article vendu sur internet. Après paiement de ${b} fr. de commission, ${name} garde ${c} fr. Combien d'articles a-t-il vendus ?`, answer: x, op: "×", calculation: `${a}x − ${b} = ${c} → ${a}x = ${c + b} → x = ${c + b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(6, 14), b = rnd(18, 60), x = rnd(4, 12); const c = a * x - b; if (c <= 0) return { textFr: "", answer: -1, op: "+" }; return { textFr: `${name} produit et vend des pots de confiture à ${a} fr. Après ${b} fr. de frais d'ingrédients, son bénéfice est de ${c} fr. Combien de pots a-t-il vendus ?`, answer: x, op: "×", calculation: `${a}x − ${b} = ${c} → ${a}x = ${c + b} → x = ${c + b} ÷ ${a} = ${x}` }; },
      // ── x/a + b = c (partial amount + supplement = final) — 8 templates ───
      () => { const a = rnd(2, 5), b = rnd(3, 15), x = rnd(a * 2, a * 20); const r = x / a; if (!Number.isInteger(r)) return { textFr: "", answer: -1, op: "+" }; const c = r + b; return { textFr: `${name} paie la moitié du prix d'un vélo (soit le prix divisé par ${a}) plus ${b} fr. de frais de livraison. ${name} paie ${c} fr. en tout. Quel est le prix du vélo ?`, answer: x, op: "+", calculation: `x/${a} + ${b} = ${c} → x/${a} = ${c} − ${b} = ${r} → x = ${r} × ${a} = ${x}` }; },
      () => { const a = 2, b = rnd(5, 20), x = rnd(10, 60) * 2; const r = x / a; const c = r + b; return { textFr: `${name} verse la moitié de son salaire sur son compte épargne, plus ${b} fr. supplémentaires. Au total, ${name} a versé ${c} fr. Quel est son salaire ?`, answer: x, op: "+", calculation: `x/2 + ${b} = ${c} → x/2 = ${c - b} → x = ${c - b} × 2 = ${x}` }; },
      () => { const a = 3, b = rnd(4, 18), x = rnd(5, 15) * 3; const r = x / a; const c = r + b; return { textFr: `${name} mange un tiers d'une pizza, puis prend ${b} tranches supplémentaires d'une autre. Au total, ${name} a consommé l'équivalent de ${c} tranches. Combien de tranches compte la pizza entière ?`, answer: x, op: "+", calculation: `x/3 + ${b} = ${c} → x/3 = ${c - b} → x = ${c - b} × 3 = ${x}` }; },
      () => { const a = 4, b = rnd(5, 20), x = rnd(4, 12) * 4; const r = x / a; const c = r + b; return { textFr: `${name} utilise un quart de son stock de farine, puis reçoit ${b} kg en cadeau. ${name} a maintenant ${c} kg. Quelle était la taille initiale du stock ?`, answer: x, op: "+", calculation: `x/4 + ${b} = ${c} → x/4 = ${c - b} → x = ${c - b} × 4 = ${x}` }; },
      () => { const a = 2, b = rnd(8, 30), x = rnd(6, 30) * 2; const r = x / a; const c = r + b; return { textFr: `${name} lit la moitié d'un roman puis ${b} pages supplémentaires. ${name} a lu ${c} pages en tout. Combien de pages compte le roman ?`, answer: x, op: "+", calculation: `x/2 + ${b} = ${c} → x/2 = ${c - b} → x = ${c - b} × 2 = ${x}` }; },
      () => { const a = 5, b = rnd(3, 12), x = rnd(3, 10) * 5; const r = x / a; const c = r + b; return { textFr: `Un groupe dépense un cinquième de son budget pour le transport, puis ${b} fr. pour la restauration. Le groupe a dépensé ${c} fr. en tout. Quel était le budget total ?`, answer: x, op: "+", calculation: `x/5 + ${b} = ${c} → x/5 = ${c - b} → x = ${c - b} × 5 = ${x}` }; },
      () => { const a = 2, b = rnd(10, 40), x = rnd(8, 40) * 2; const r = x / a; const c = r + b; return { textFr: `${name} donne la moitié de ses économies à une association et verse encore ${b} fr. par la suite. Au total, ${name} a donné ${c} fr. Quelle était la somme initiale de ses économies ?`, answer: x, op: "+", calculation: `x/2 + ${b} = ${c} → x/2 = ${c - b} → x = ${c - b} × 2 = ${x}` }; },
      () => { const a = 3, b = rnd(6, 24), x = rnd(4, 14) * 3; const r = x / a; const c = r + b; return { textFr: `${name} parcourt un tiers d'un sentier de randonnée le matin, puis encore ${b} km l'après-midi. ${name} a marché ${c} km. Quelle est la longueur totale du sentier ?`, answer: x, op: "+", calculation: `x/3 + ${b} = ${c} → x/3 = ${c - b} → x = ${c - b} × 3 = ${x}` }; },
      // ── Mixed 2-step — 7 templates ────────────────────────────────────────
      () => { const a = rnd(2, 6), b = rnd(3, 10), c2 = rnd(5, 15), x = rnd(4, 14); const tot = a * x + b * c2; return { textFr: `${name} achète ${a} chemises à x fr. et ${c2} cravates à ${b} fr. Le total est de ${tot} fr. Quel est le prix d'une chemise ?`, answer: x, op: "×", calculation: `${a}x + ${b * c2} = ${tot} → ${a}x = ${tot} − ${b * c2} = ${a * x} → x = ${a * x} ÷ ${a} = ${x}` }; },
      () => { const d = rnd(5, 20), n = rnd(3, 8), x = rnd(10, 50); const tot = x * n - d; if (tot <= 0) return { textFr: "", answer: -1, op: "+" }; return { textFr: `${name} vend ${n} articles au même prix et dépense ${d} fr. en matériel. Le bénéfice net est de ${tot} fr. Quel est le prix de vente d'un article ?`, answer: x, op: "×", calculation: `${n}x − ${d} = ${tot} → ${n}x = ${tot + d} → x = ${tot + d} ÷ ${n} = ${x}` }; },
      () => { const a = rnd(2, 5), b = rnd(2, 8), x = rnd(5, 18); const c = (x + b) * a; return { textFr: `${name} et ${a - 1} amis organisent un repas. Chacun apporte ${b} plats et en prépare x en plus. Il y a ${c} plats en tout. Combien chacun a-t-il préparé ?`, answer: x, op: "×", calculation: `${a}(x + ${b}) = ${c} → x + ${b} = ${c / a} → x = ${c / a - b}` }; },
      () => { const a = rnd(10, 30), x = rnd(3, 12), b = rnd(2, 8); const c = a * x - a * b; if (c <= 0) return { textFr: "", answer: -1, op: "+" }; return { textFr: `${name} gagne ${a} fr. de l'heure. Après avoir payé ${a * b} fr. de charges, il lui reste ${c} fr. Combien d'heures a-t-il travaillé ?`, answer: x, op: "×", calculation: `${a}x − ${a * b} = ${c} → ${a}x = ${c + a * b} → x = ${(c + a * b)} ÷ ${a} = ${x}` }; },
      () => { const k = rnd(2, 4), b = rnd(5, 20), x = rnd(4, 15); const c = k * x + b; return { textFr: `${name} parcourt ${k} fois une même distance en voiture, puis marche encore ${b} km. Au total, ${name} a couvert ${c} km. Quelle est la distance en voiture ?`, answer: x, op: "×", calculation: `${k}x + ${b} = ${c} → ${k}x = ${c - b} → x = ${c - b} ÷ ${k} = ${x}` }; },
      () => { const a = rnd(2, 5), b = rnd(3, 12), x = rnd(6, 20); const c = a * x + b; return { textFr: `${name} remplit ${a} bouteilles identiques et a encore ${b} cl de jus restants. Au total, ${name} avait ${c} cl de jus. Quelle est la contenance d'une bouteille ?`, answer: x, op: "×", calculation: `${a}x + ${b} = ${c} → ${a}x = ${c - b} → x = ${c - b} ÷ ${a} = ${x}` }; },
      () => { const a = rnd(3, 7), b = rnd(8, 30), x = rnd(5, 18); const c = a * x - b; if (c <= 0) return { textFr: "", answer: -1, op: "+" }; return { textFr: `Une association collecte ${a} fr. par donateur. Après avoir payé ${b} fr. de frais administratifs, il reste ${c} fr. pour la cause. Combien de donateurs ont contribué ?`, answer: x, op: "×", calculation: `${a}x − ${b} = ${c} → ${a}x = ${c + b} → x = ${c + b} ÷ ${a} = ${x}` }; },
    ];
    for (let attempt = 0; attempt < 20; attempt++) {
      const q = templates[rnd(0, templates.length - 1)]!();
      if (Number.isFinite(q.answer) && q.answer > 0) return q;
    }
    return templates[0]!();
  }

  // level === "h" — Systems of 2 equations
  const templates: Array<() => WordProblemQ> = [
    // ── x + y = a, x - y = b (sum and difference) — 12 templates ────────────
    () => { const y = rnd(3, 20), d = rnd(2, 15); const x = y + d, a = x + y; return { textFr: `${name} et ${name2} ont en tout ${a} cartes. ${name} en a ${d} de plus que ${name2}. Combien ${name} en a-t-il ?`, answer: x, op: "+", calculation: `Soit x = cartes de ${name}, y = cartes de ${name2}\nÉq.1 : x + y = ${a}\nÉq.2 : x − y = ${d}\n→ Addition : 2x = ${a + d} → x = ${(a + d) / 2} = ${x}` }; },
    () => { const y = rnd(5, 25), d = rnd(3, 18); const x = y + d, a = x + y; return { textFr: `${name} et ${name2} ont collecté ${a} points au total. ${name} a ${d} points de plus que ${name2}. Quel est le score de ${name} ?`, answer: x, op: "+", calculation: `Soit x = score de ${name}, y = score de ${name2}\nÉq.1 : x + y = ${a}\nÉq.2 : x − y = ${d}\n→ 2x = ${a + d} → x = ${x}` }; },
    () => { const y = rnd(10, 40), d = rnd(4, 20); const x = y + d, a = x + y; return { textFr: `Deux sacs pèsent ${a} kg ensemble. Le premier est plus lourd de ${d} kg. Quelle est la masse du premier sac ?`, answer: x, op: "+", calculation: `Soit x = masse 1er sac, y = masse 2e sac\nÉq.1 : x + y = ${a}\nÉq.2 : x − y = ${d}\n→ 2x = ${a + d} → x = ${x}` }; },
    () => { const y = rnd(5, 30), d = rnd(2, 14); const x = y + d, a = x + y; return { textFr: `${name} et ${name2} ont lu ${a} pages en tout. ${name} a lu ${d} pages de plus. Combien de pages ${name} a-t-il lues ?`, answer: x, op: "+", calculation: `Soit x = pages de ${name}, y = pages de ${name2}\nÉq.1 : x + y = ${a}\nÉq.2 : x − y = ${d}\n→ 2x = ${a + d} → x = ${x}` }; },
    () => { const y = rnd(8, 30), d = rnd(3, 16); const x = y + d, a = x + y; return { textFr: `Deux jardins ont ensemble une surface de ${a} m². Le plus grand est plus vaste de ${d} m². Quelle est la surface du grand jardin ?`, answer: x, op: "+", calculation: `Soit x = grand jardin, y = petit jardin\nÉq.1 : x + y = ${a}\nÉq.2 : x − y = ${d}\n→ 2x = ${a + d} → x = ${x}` }; },
    () => { const y = rnd(6, 25), d = rnd(2, 12); const x = y + d, a = x + y; return { textFr: `${name} et ${name2} ont en tout ${a} bonbons. ${name} en a ${d} de plus que ${name2}. Combien ${name} en possède-t-il ?`, answer: x, op: "+", calculation: `Soit x = bonbons de ${name}, y = bonbons de ${name2}\nÉq.1 : x + y = ${a}\nÉq.2 : x − y = ${d}\n→ 2x = ${a + d} → x = ${x}` }; },
    () => { const y = rnd(4, 20), d = rnd(2, 10); const x = y + d, a = x + y; return { textFr: `Deux équipes ont marqué ${a} buts ensemble. L'équipe gagnante a marqué ${d} buts de plus. Combien de buts l'équipe gagnante a-t-elle marqués ?`, answer: x, op: "+", calculation: `Soit x = buts gagnants, y = buts perdants\nÉq.1 : x + y = ${a}\nÉq.2 : x − y = ${d}\n→ 2x = ${a + d} → x = ${x}` }; },
    () => { const y = rnd(10, 35), d = rnd(4, 18); const x = y + d, a = x + y; return { textFr: `Deux villes sont reliées par une route de ${a} km. La première portion est plus longue de ${d} km. Quelle est la longueur de la première portion ?`, answer: x, op: "+", calculation: `Soit x = 1re portion, y = 2e portion\nÉq.1 : x + y = ${a}\nÉq.2 : x − y = ${d}\n→ 2x = ${a + d} → x = ${x}` }; },
    () => { const y = rnd(5, 22), d = rnd(3, 14); const x = y + d, a = x + y; return { textFr: `${name} a ${d} livres de plus que ${name2}. Ensemble, ils en ont ${a}. Combien ${name} en a-t-il ?`, answer: x, op: "+", calculation: `Soit x = livres de ${name}, y = livres de ${name2}\nÉq.1 : x + y = ${a}\nÉq.2 : x − y = ${d}\n→ 2x = ${a + d} → x = ${x}` }; },
    () => { const y = rnd(12, 40), d = rnd(5, 20); const x = y + d, a = x + y; return { textFr: `Deux boulangeries vendent ${a} pains par jour ensemble. La grande en vend ${d} de plus. Combien la grande boulangerie en vend-elle ?`, answer: x, op: "+", calculation: `Soit x = grande boulangerie, y = petite\nÉq.1 : x + y = ${a}\nÉq.2 : x − y = ${d}\n→ 2x = ${a + d} → x = ${x}` }; },
    () => { const y = rnd(4, 18), d = rnd(2, 8); const x = y + d, a = x + y; return { textFr: `${name} et ${name2} ont fait ${a} km de vélo ensemble. ${name} en a parcouru ${d} de plus. Quelle distance ${name} a-t-il couverte ?`, answer: x, op: "+", calculation: `Soit x = distance de ${name}, y = distance de ${name2}\nÉq.1 : x + y = ${a}\nÉq.2 : x − y = ${d}\n→ 2x = ${a + d} → x = ${x}` }; },
    () => { const y = rnd(8, 28), d = rnd(3, 15); const x = y + d, a = x + y; return { textFr: `Deux caisses contiennent ${a} pommes au total. La première contient ${d} pommes de plus. Combien y a-t-il de pommes dans la première caisse ?`, answer: x, op: "+", calculation: `Soit x = 1re caisse, y = 2e caisse\nÉq.1 : x + y = ${a}\nÉq.2 : x − y = ${d}\n→ 2x = ${a + d} → x = ${x}` }; },
    // ── x + y = a, px + qy = b (count + weighted sum) — 20 templates ─────────
    () => { const x = rnd(8, 30), y = rnd(5, 25), pa = rnd(10, 20), pb = rnd(5, 9); const a = x + y, b = pa * x + pb * y; return { textFr: `Une salle de spectacle vend des billets adultes à ${pa} fr. et enfants à ${pb} fr. ${a} billets sont vendus pour une recette de ${b} fr. Combien de billets adultes ont été vendus ?`, answer: x, op: "+", calculation: `Soit x = billets adultes, y = billets enfants\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ De Éq.1 : y = ${a} − x\n→ ${pa}x + ${pb}(${a} − x) = ${b}\n→ ${pa - pb}x + ${pb * a} = ${b}\n→ ${pa - pb}x = ${b - pb * a}\n→ x = ${x}` }; },
    () => { const x = rnd(5, 20), y = rnd(8, 25), pa = rnd(12, 25), pb = rnd(6, 11); const a = x + y, b = pa * x + pb * y; return { textFr: `${name} achète des roses à ${pa} fr. et des tulipes à ${pb} fr. ${name} achète ${a} fleurs et dépense ${b} fr. Combien de roses a-t-il achetées ?`, answer: x, op: "+", calculation: `Soit x = roses, y = tulipes\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a} − x → ${pa}x + ${pb}(${a}−x) = ${b} → ${pa - pb}x = ${b - pb * a} → x = ${x}` }; },
    () => { const x = rnd(6, 20), y = rnd(4, 18), pa = rnd(8, 18), pb = rnd(3, 7); const a = x + y, b = pa * x + pb * y; return { textFr: `Un kiosque vend des sandwichs à ${pa} fr. et des boissons à ${pb} fr. En tout, ${a} articles sont vendus pour ${b} fr. Combien de sandwichs ont été vendus ?`, answer: x, op: "+", calculation: `Soit x = sandwichs, y = boissons\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a}−x → ${pa}x + ${pb}(${a}−x) = ${b} → ${pa - pb}x = ${b - pb * a} → x = ${x}` }; },
    () => { const x = rnd(10, 30), y = rnd(5, 20), pa = 2, pb = 1; const a = x + y, b = pa * x + pb * y; return { textFr: `Un bus transporte des adultes qui paient ${pa} fr. et des enfants qui paient ${pb} fr. ${a} passagers paient ${b} fr. en tout. Combien d'adultes y a-t-il ?`, answer: x, op: "+", calculation: `Soit x = adultes, y = enfants\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a}−x → ${pa}x + (${a}−x) = ${b} → x + ${a} = ${b} → x = ${x}` }; },
    () => { const x = rnd(5, 18), y = rnd(6, 20), pa = rnd(15, 30), pb = rnd(8, 14); const a = x + y, b = pa * x + pb * y; return { textFr: `Un restaurant propose des plats à ${pa} fr. et des salades à ${pb} fr. ${a} commandes pour ${b} fr. Combien de plats ont été commandés ?`, answer: x, op: "+", calculation: `Soit x = plats, y = salades\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a}−x → ${pa - pb}x = ${b - pb * a} → x = ${x}` }; },
    () => { const x = rnd(8, 25), y = rnd(4, 15), pa = rnd(5, 10), pb = rnd(2, 4); const a = x + y, b = pa * x + pb * y; return { textFr: `${name} conditionne des pommes (${pa} fr./kg) et des poires (${pb} fr./kg). ${name} conditionne ${a} kg de fruits pour ${b} fr. Combien de kg de pommes ?`, answer: x, op: "+", calculation: `Soit x = kg pommes, y = kg poires\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a}−x → ${pa - pb}x = ${b - pb * a} → x = ${x}` }; },
    () => { const x = rnd(6, 22), y = rnd(4, 18), pa = rnd(50, 100), pb = rnd(20, 45); const a = x + y, b = pa * x + pb * y; return { textFr: `Un hôtel loue des chambres doubles à ${pa} fr. et des chambres simples à ${pb} fr. ${a} chambres sont occupées pour une recette de ${b} fr. Combien de chambres doubles ?`, answer: x, op: "+", calculation: `Soit x = doubles, y = simples\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a}−x → ${pa - pb}x = ${b - pb * a} → x = ${x}` }; },
    () => { const x = rnd(10, 35), y = rnd(5, 20), pa = rnd(3, 8), pb = 1; const a = x + y, b = pa * x + pb * y; return { textFr: `Un marché vend des billets à ${pa} fr. (premium) et à ${pb} fr. (standard). ${a} billets vendus, recette de ${b} fr. Combien de billets premium ?`, answer: x, op: "+", calculation: `Soit x = premium, y = standard\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + y = ${b}\n→ (${pa}−1)x = ${b}−${a} → ${pa - 1}x = ${b - a} → x = ${x}` }; },
    () => { const x = rnd(4, 15), y = rnd(6, 20), pa = rnd(20, 40), pb = rnd(8, 18); const a = x + y, b = pa * x + pb * y; return { textFr: `Un club vend des maillots à ${pa} fr. et des casquettes à ${pb} fr. ${a} articles pour ${b} fr. Combien de maillots ?`, answer: x, op: "+", calculation: `Soit x = maillots, y = casquettes\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a}−x → ${pa - pb}x = ${b - pb * a} → x = ${x}` }; },
    () => { const x = rnd(5, 18), y = rnd(8, 22), pa = rnd(10, 20), pb = rnd(4, 9); const a = x + y, b = pa * x + pb * y; return { textFr: `Une fête vend des pizzas à ${pa} fr. et des hot-dogs à ${pb} fr. ${a} ventes pour ${b} fr. Combien de pizzas ont été vendues ?`, answer: x, op: "+", calculation: `Soit x = pizzas, y = hot-dogs\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a}−x → ${pa - pb}x = ${b - pb * a} → x = ${x}` }; },
    () => { const x = rnd(6, 20), y = rnd(4, 16), pa = rnd(30, 60), pb = rnd(12, 25); const a = x + y, b = pa * x + pb * y; return { textFr: `Un musée vend des places adultes à ${pa} fr. et enfants à ${pb} fr. ${a} entrées pour ${b} fr. Combien d'adultes ?`, answer: x, op: "+", calculation: `Soit x = adultes, y = enfants\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a}−x → ${pa - pb}x = ${b - pb * a} → x = ${x}` }; },
    () => { const x = rnd(8, 24), y = rnd(5, 18), pa = rnd(5, 12), pb = rnd(2, 4); const a = x + y, b = pa * x + pb * y; return { textFr: `${name} achète des cahiers à ${pa} fr. et des crayons à ${pb} fr. ${name} achète ${a} fournitures pour ${b} fr. Combien de cahiers ?`, answer: x, op: "+", calculation: `Soit x = cahiers, y = crayons\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a}−x → ${pa - pb}x = ${b - pb * a} → x = ${x}` }; },
    () => { const x = rnd(5, 16), y = rnd(6, 22), pa = rnd(40, 80), pb = rnd(15, 35); const a = x + y, b = pa * x + pb * y; return { textFr: `Un concessionnaire vend des VTT à ${pa} fr. et des trottinettes à ${pb} fr. ${a} ventes pour ${b} fr. Combien de VTT ?`, answer: x, op: "+", calculation: `Soit x = VTT, y = trottinettes\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a}−x → ${pa - pb}x = ${b - pb * a} → x = ${x}` }; },
    () => { const x = rnd(10, 28), y = rnd(4, 16), pa = rnd(2, 5), pb = 1; const a = x + y, b = pa * x + pb * y; return { textFr: `Un marché distribue des jetons de ${pa} fr. et de ${pb} fr. ${a} jetons distribués valent ${b} fr. au total. Combien de jetons à ${pa} fr. ?`, answer: x, op: "+", calculation: `Soit x = jetons ${pa} fr., y = jetons ${pb} fr.\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + y = ${b}\n→ (${pa}-1)x = ${b - a} → x = ${x}` }; },
    () => { const x = rnd(5, 15), y = rnd(8, 20), pa = rnd(6, 14), pb = rnd(2, 5); const a = x + y, b = pa * x + pb * y; return { textFr: `Une cantine vend des menus chauds à ${pa} fr. et des salades à ${pb} fr. ${a} repas servis pour ${b} fr. Combien de menus chauds ?`, answer: x, op: "+", calculation: `Soit x = menus chauds, y = salades\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a}−x → ${pa - pb}x = ${b - pb * a} → x = ${x}` }; },
    () => { const x = rnd(6, 18), y = rnd(5, 16), pa = rnd(10, 18), pb = rnd(4, 8); const a = x + y, b = pa * x + pb * y; return { textFr: `Une boutique vend des livres à ${pa} fr. et des BD à ${pb} fr. ${a} achats pour ${b} fr. Combien de livres ?`, answer: x, op: "+", calculation: `Soit x = livres, y = BD\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a}−x → ${pa - pb}x = ${b - pb * a} → x = ${x}` }; },
    () => { const x = rnd(4, 14), y = rnd(6, 18), pa = rnd(25, 50), pb = rnd(10, 20); const a = x + y, b = pa * x + pb * y; return { textFr: `${name} collecte des chemises (${pa} fr.) et des pulls (${pb} fr.) pour une vente caritative. ${a} vêtements collectés valent ${b} fr. Combien de chemises ?`, answer: x, op: "+", calculation: `Soit x = chemises, y = pulls\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a}−x → ${pa - pb}x = ${b - pb * a} → x = ${x}` }; },
    () => { const x = rnd(5, 20), y = rnd(4, 15), pa = rnd(8, 16), pb = rnd(3, 7); const a = x + y, b = pa * x + pb * y; return { textFr: `Un atelier produit des pièces A (${pa} min/pièce) et des pièces B (${pb} min/pièce). En ${a} pièces, l'atelier utilise ${b} minutes. Combien de pièces A ?`, answer: x, op: "+", calculation: `Soit x = pièces A, y = pièces B\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a}−x → ${pa - pb}x = ${b - pb * a} → x = ${x}` }; },
    () => { const x = rnd(6, 22), y = rnd(5, 18), pa = rnd(20, 45), pb = rnd(8, 18); const a = x + y, b = pa * x + pb * y; return { textFr: `Une salle vend ${a} places : des sièges de luxe à ${pa} fr. et des sièges standards à ${pb} fr. La recette est de ${b} fr. Combien de sièges de luxe ?`, answer: x, op: "+", calculation: `Soit x = luxe, y = standard\nÉq.1 : x + y = ${a}\nÉq.2 : ${pa}x + ${pb}y = ${b}\n→ y = ${a}−x → ${pa - pb}x = ${b - pb * a} → x = ${x}` }; },
    // ── x + y = a, x = ky (one is multiple of other) — 10 templates ──────────
    () => { const k = rnd(2, 4), y = rnd(3, 15); const x = k * y, a = x + y; return { textFr: `${name} a ${k} fois plus de stickers que ${name2}. Ensemble, ils en ont ${a}. Combien ${name} en a-t-il ?`, answer: x, op: "×", calculation: `Soit x = stickers de ${name}, y = stickers de ${name2}\nx = ${k}y et x + y = ${a}\n→ ${k}y + y = ${a} → ${k + 1}y = ${a} → y = ${y} → x = ${k} × ${y} = ${x}` }; },
    () => { const k = rnd(2, 5), y = rnd(4, 12); const x = k * y, a = x + y; return { textFr: `Dans une ferme, le nombre de poules est ${k} fois le nombre de lapins. Il y a ${a} animaux au total. Combien de poules ?`, answer: x, op: "×", calculation: `Soit x = poules, y = lapins\nx = ${k}y et x + y = ${a}\n→ ${k}y + y = ${a} → ${k + 1}y = ${a} → y = ${y} → x = ${x}` }; },
    () => { const k = 3, y = rnd(5, 18); const x = k * y, a = x + y; return { textFr: `${name} a trois fois plus de livres que ${name2}. Ensemble, ils en ont ${a}. Combien de livres ${name} possède-t-il ?`, answer: x, op: "×", calculation: `Soit x = livres de ${name}, y = livres de ${name2}\nx = 3y et x + y = ${a}\n→ 4y = ${a} → y = ${y} → x = 3 × ${y} = ${x}` }; },
    () => { const k = 2, y = rnd(6, 20); const x = k * y, a = x + y; return { textFr: `${name} a le double de billes de ${name2}. Ensemble, ils en ont ${a}. Combien ${name} en a-t-il ?`, answer: x, op: "×", calculation: `Soit x = billes de ${name}, y = billes de ${name2}\nx = 2y et x + y = ${a}\n→ 3y = ${a} → y = ${y} → x = 2 × ${y} = ${x}` }; },
    () => { const k = rnd(2, 4), y = rnd(5, 16); const x = k * y, a = x + y; return { textFr: `Un grand contenant a ${k} fois la capacité d'un petit. Ensemble, ils contiennent ${a} litres. Quelle est la capacité du grand contenant ?`, answer: x, op: "×", calculation: `Soit x = grand, y = petit\nx = ${k}y et x + y = ${a}\n→ ${k + 1}y = ${a} → y = ${y} → x = ${k} × ${y} = ${x}` }; },
    () => { const k = rnd(2, 5), y = rnd(3, 10); const x = k * y, a = x + y; return { textFr: `Dans une classe, le nombre de filles est ${k} fois le nombre de garçons. Il y a ${a} élèves en tout. Combien de filles ?`, answer: x, op: "×", calculation: `Soit x = filles, y = garçons\nx = ${k}y et x + y = ${a}\n→ ${k + 1}y = ${a} → y = ${y} → x = ${k} × ${y} = ${x}` }; },
    () => { const k = 4, y = rnd(4, 10); const x = k * y, a = x + y; return { textFr: `Un champ a quatre fois la surface d'un jardin. Ensemble, ils font ${a} ares. Quelle est la surface du champ ?`, answer: x, op: "×", calculation: `Soit x = champ, y = jardin\nx = 4y et x + y = ${a}\n→ 5y = ${a} → y = ${y} → x = 4 × ${y} = ${x}` }; },
    () => { const k = rnd(2, 3), y = rnd(8, 22); const x = k * y, a = x + y; return { textFr: `Le plus rapide des deux coureurs met ${k} fois moins de temps que le plus lent. Ensemble, ils utilisent ${a} minutes. Combien de minutes le plus rapide met-il ?`, answer: y, op: "×", calculation: `Soit x = temps rapide, y = temps lent\ny = ${k}x et x + y = ${a}\n→ x + ${k}x = ${a} → ${k + 1}x = ${a} → x = ${y}` }; },
    () => { const k = rnd(2, 4), y = rnd(4, 14); const x = k * y, a = x + y; return { textFr: `${name} a ${k} fois plus de photos que ${name2}. Ils ont ${a} photos au total. Combien ${name} en a-t-il ?`, answer: x, op: "×", calculation: `Soit x = photos de ${name}, y = photos de ${name2}\nx = ${k}y et x + y = ${a}\n→ ${k + 1}y = ${a} → y = ${y} → x = ${k} × ${y} = ${x}` }; },
    () => { const k = 3, y = rnd(6, 15); const x = k * y, a = x + y; return { textFr: `Un entrepôt A stocke trois fois plus de cartons que l'entrepôt B. Les deux entrepôts contiennent ${a} cartons. Combien y a-t-il de cartons dans l'entrepôt A ?`, answer: x, op: "×", calculation: `Soit x = entrepôt A, y = entrepôt B\nx = 3y et x + y = ${a}\n→ 4y = ${a} → y = ${y} → x = 3 × ${y} = ${x}` }; },
    // ── px + qy = a, rx + sy = b (two weighted conditions) — 8 templates ─────
    () => { const x = rnd(4, 12), y = rnd(3, 10); const p = rnd(2, 5), q = rnd(3, 7), r = rnd(1, 3), s = rnd(4, 8); const a = p * x + q * y, b = r * x + s * y; return { textFr: `Une recette de tarte nécessite ${p} œufs et ${q} dl de lait. Une recette de crêpes nécessite ${r} œuf et ${s} dl de lait. En faisant ${x} tartes et ${y} lots de crêpes, on utilise ${a} œufs et ${b} dl de lait. Combien de tartes ?`, answer: x, op: "×", calculation: `Soit x = tartes, y = lots crêpes\nÉq.1 : ${p}x + ${q}y = ${a}\nÉq.2 : ${r}x + ${s}y = ${b}\n→ Résolution par substitution → x = ${x}` }; },
    () => { const x = rnd(3, 10), y = rnd(4, 12); const p = rnd(2, 4), q = rnd(1, 3), r = rnd(3, 6), s = rnd(2, 5); const a = p * x + q * y, b = r * x + s * y; return { textFr: `Pour construire, on utilise ${p} sacs de ciment et ${q} sacs de sable par mur intérieur, et ${r} sacs de ciment et ${s} sacs de sable par mur extérieur. ${x} murs intérieurs et ${y} murs extérieurs utilisent ${a} sacs de ciment et ${b} sacs de sable. Combien de murs intérieurs ?`, answer: x, op: "×", calculation: `Soit x = murs int., y = murs ext.\nÉq.1 : ${p}x + ${r}y = ${a}\nÉq.2 : ${q}x + ${s}y = ${b}\n→ Résolution → x = ${x}` }; },
    () => { const x = rnd(3, 9), y = rnd(4, 11); const h1 = rnd(3, 6), h2 = rnd(2, 4), r1 = rnd(8, 15), r2 = rnd(4, 8); const a = h1 * x + h2 * y, b = r1 * x + r2 * y; return { textFr: `${name} travaille ${h1} h/j sur le projet A et ${h2} h/j sur le projet B. ${name2} travaille ${r1} min/j sur le projet A et ${r2} min/j sur le projet B. En ${x} jours sur A et ${y} jours sur B, ${name} fait ${a} heures et ${name2} fait ${b} minutes. Combien de jours sur A ?`, answer: x, op: "×", calculation: `Soit x = jours A, y = jours B\nÉq.1 : ${h1}x + ${h2}y = ${a}\nÉq.2 : ${r1}x + ${r2}y = ${b}\n→ Résolution → x = ${x}` }; },
    () => { const x = rnd(2, 8), y = rnd(3, 9); const p = rnd(3, 6), q = rnd(2, 4), r = rnd(1, 3), s = rnd(4, 7); const a = p * x + q * y, b = r * x + s * y; return { textFr: `Un magasin mélange du café A (${p} g/cuill.) et du café B (${q} g/cuill.) pour la boisson froide, et du café A (${r} g/cuill.) et du café B (${s} g/cuill.) pour la boisson chaude. ${x} boissons froides et ${y} boissons chaudes utilisent ${a} g du café A et ${b} g du café B. Combien de boissons froides ?`, answer: x, op: "×", calculation: `Soit x = boissons froides, y = boissons chaudes\nÉq.1 : ${p}x + ${r}y = ${a}\nÉq.2 : ${q}x + ${s}y = ${b}\n→ Résolution → x = ${x}` }; },
    () => { const x = rnd(4, 10), y = rnd(3, 9); const p = rnd(2, 5), q = rnd(1, 3), r = rnd(3, 6), s = rnd(2, 4); const a = p * x + q * y, b = r * x + s * y; return { textFr: `Deux types de machines produisent des pièces. La machine X produit ${p} pièces/min et consomme ${r} W. La machine Y produit ${q} pièces/min et consomme ${s} W. En ${x} min de X et ${y} min de Y, on obtient ${a} pièces et on consomme ${b} W. Combien de minutes sur la machine X ?`, answer: x, op: "×", calculation: `Soit x = min machine X, y = min machine Y\nÉq.1 : ${p}x + ${q}y = ${a}\nÉq.2 : ${r}x + ${s}y = ${b}\n→ Résolution → x = ${x}` }; },
    () => { const x = rnd(3, 8), y = rnd(4, 10); const p = 5, q = 3, r = 2, s = 4; const a = p * x + q * y, b = r * x + s * y; return { textFr: `Une équipe de peintres : les peintres de type A couvrent ${p} m²/h et utilisent ${r} litres/h de peinture. Les peintres de type B couvrent ${q} m²/h et utilisent ${s} litres/h. En ${x} h de peintres A et ${y} h de peintres B, on couvre ${a} m² et consomme ${b} litres. Combien d'heures de peintres A ?`, answer: x, op: "×", calculation: `Soit x = h peintres A, y = h peintres B\nÉq.1 : ${p}x + ${q}y = ${a}\nÉq.2 : ${r}x + ${s}y = ${b}\n→ Résolution → x = ${x}` }; },
    () => { const x = rnd(2, 7), y = rnd(3, 8); const p = rnd(4, 8), q = rnd(2, 4), r = rnd(1, 3), s = rnd(5, 9); const a = p * x + q * y, b = r * x + s * y; return { textFr: `Deux types de véhicules transportent des marchandises. Le camion transporte ${p} tonnes et utilise ${r} chauffeurs. Le fourgon transporte ${q} tonnes et utilise ${s} chauffeurs. ${x} camions et ${y} fourgons transportent ${a} tonnes avec ${b} chauffeurs. Combien de camions ?`, answer: x, op: "×", calculation: `Soit x = camions, y = fourgons\nÉq.1 : ${p}x + ${q}y = ${a}\nÉq.2 : ${r}x + ${s}y = ${b}\n→ Résolution → x = ${x}` }; },
    () => { const x = rnd(3, 9), y = rnd(2, 7); const p = rnd(3, 6), q = rnd(2, 5), r = rnd(4, 8), s = rnd(1, 3); const a = p * x + q * y, b = r * x + s * y; return { textFr: `${name} achète ${x} chemises et ${y} pantalons. Chaque chemise pèse ${p} g et chaque pantalon pèse ${q} g ; la valeur en points de fidélité est ${r} par chemise et ${s} par pantalon. Le colis pèse ${a} g et rapporte ${b} points. Combien de chemises ?`, answer: x, op: "×", calculation: `Soit x = chemises, y = pantalons\nÉq.1 : ${p}x + ${q}y = ${a}\nÉq.2 : ${r}x + ${s}y = ${b}\n→ Résolution → x = ${x}` }; },
  ];
  for (let attempt = 0; attempt < 20; attempt++) {
    const q = templates[rnd(0, templates.length - 1)]!();
    if (Number.isFinite(q.answer) && q.answer > 0) return q;
  }
  return templates[0]!();
}

function genWP(level: WordLevel, exNum: number): WordProblemsConfig {
  if (level === "a1" && exNum === 1) {
    const first = genA24ContextProblem();
    let second = genA24ContextProblem();
    for (let attempt = 0; attempt < 10 && second.textFr === first.textFr; attempt++) second = genA24ContextProblem();
    return { exNum, level, questions: [first, second] };
  }
  if (level === "multdiv") {
    const first = genA37MultDivProblem();
    let second = genA37MultDivProblem();
    for (let attempt = 0; attempt < 10 && second.textFr === first.textFr; attempt++) second = genA37MultDivProblem();
    return { exNum, level, questions: [first, second] };
  }
  if (level === "decimal_e" || level === "decimal_m" || level === "decimal_h") {
    const lev = level === "decimal_e" ? "e" : level === "decimal_m" ? "m" : "h";
    const first = genA57DecimalProblem(lev);
    let second = genA57DecimalProblem(lev);
    for (let attempt = 0; attempt < 10 && second.textFr === first.textFr; attempt++) second = genA57DecimalProblem(lev);
    return { exNum, level, questions: [first, second] };
  }
  if (level === "propor_e" || level === "propor_m" || level === "propor_h") {
    const lev = level === "propor_e" ? "e" : level === "propor_m" ? "m" : "h";
    const first = genA64ProportionProblem(lev);
    let second = genA64ProportionProblem(lev);
    for (let attempt = 0; attempt < 10 && second.textFr === first.textFr; attempt++) second = genA64ProportionProblem(lev);
    return { exNum, level, questions: [first, second] };
  }
  if (level === "eq_e" || level === "eq_m" || level === "eq_h") {
    const lev = level === "eq_e" ? "e" : level === "eq_m" ? "m" : "h";
    const first = genA105EquationProblem(lev);
    let second = genA105EquationProblem(lev);
    for (let attempt = 0; attempt < 10 && second.textFr === first.textFr; attempt++) second = genA105EquationProblem(lev);
    return { exNum, level, questions: [first, second] };
  }
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
      { textFr: addPool[addIdx]!(addA, addB), answer: addA + addB, op: "+", calculation: `${addA} + ${addB} = ${addA + addB}` },
      { textFr: subPool[subIdx]!(subA, subB), answer: subA - subB, op: "-", calculation: `${subA} − ${subB} = ${subA - subB}` },
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
  revealCorrection = true,
}: {
  config: ComparisonConfig;
  answers: Array<"<" | "=" | ">" | null>;
  validated: boolean;
  onAnswer: (i: number, sym: "<" | "=" | ">") => void;
  revealCorrection?: boolean;
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
                  if (!(validated && revealCorrection)) {
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

// ── Expression comparison exercise ───────────────────────────────────────────
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
  config, answers, validated, onAnswer, revealCorrection = true,
}: {
  config: ExprCompConfig;
  answers: Array<"<" | "=" | ">" | null>;
  validated: boolean;
  onAnswer: (i: number, sym: "<" | "=" | ">") => void;
  revealCorrection?: boolean;
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
                  if (!(validated && revealCorrection)) {
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

// ── Number line ──────────────────────────────────────────────────────────────
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
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }} aria-label="Droite numérique">
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

// ── Arithmetic group generators ──────────────────────────────────────────────
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
    } else if (op === "×") {
      // a ∈ [range[0], range[1]], b ∈ [1, 12]
      a = rnd(lo, hi); b = rnd(1, 12); result = a * b;
    } else {
      // ÷: pick divisor b ∈ [range[0], range[1]], quotient a ∈ [1, 12]
      // Dividend = a * b, question: (a*b) ÷ b = a
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

function arithAnswerSlotCount(cfg: ArithGroupConfig | undefined): number {
  return cfg?.questions.length ?? 5;
}

// ── Rounding generators ──────────────────────────────────────────────────────
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
    "diz_near":         "Arrondissez à la dizaine la plus proche les nombres suivants.",
    "cent_near_new":    "Arrondissez à la centaine la plus proche les nombres suivants.",
    "est_diz_2":        "Estimez le résultat du calcul à la dizaine la plus proche.",
    "est_diz_large_2":  "Estimez le résultat du calcul à la centaine la plus proche.",
    "est_diz_three":    "Estimez le résultat du calcul à la centaine la plus proche.",
    "cent_near": "", "thou_near": "", "est_add": "", "est_sub": "", "est_mixed": "", "mixed": "",
    "dec_dix":   "Arrondissez au dixième le plus proche.",
    "dec_cent":  "Arrondissez au centième le plus proche.",
    "dec_unit":  "Arrondissez à l'unité la plus proche.",
    "dec_mixed": "Arrondissez chaque nombre à la précision indiquée.",
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
      const op = useAdd ? "+" : "−";
      const ans = useAdd ? roundTo10(x) + roundTo10(y) : roundTo10(x) - roundTo10(y);
      qs.push({ prompt: `${x} ${op} ${y} ≈`, answer: String(ans) });
    } else if (kind === "est_diz_large_2") {
      let x = rnd(101, 999), y = rnd(101, 999);
      const useAdd = Math.random() < 0.5;
      if (!useAdd && x < y) [x, y] = [y, x];
      const op = useAdd ? "+" : "−";
      const ans = useAdd ? roundTo100(x) + roundTo100(y) : roundTo100(x) - roundTo100(y);
      qs.push({ prompt: `${x} ${op} ${y} ≈`, answer: String(ans) });
    } else if (kind === "est_diz_three") {
      let a: number, b: number, c: number, op1: "+" | "−", op2: "+" | "−", ans: number;
      let tries = 0;
      do {
        a = rnd(101, 999); b = rnd(101, 999); c = rnd(101, 999);
        op1 = Math.random() < 0.5 ? "+" : "−";
        op2 = Math.random() < 0.5 ? "+" : "−";
        ans = roundTo100(a) + (op1 === "+" ? roundTo100(b) : -roundTo100(b)) + (op2 === "+" ? roundTo100(c) : -roundTo100(c));
        tries++;
      } while (ans < 0 && tries < 30);
      if (ans! < 0) { op1 = "+"; op2 = "+"; ans = roundTo100(a!) + roundTo100(b!) + roundTo100(c!); }
      qs.push({ prompt: `${a!} ${op1!} ${b!} ${op2!} ${c!} ≈`, answer: String(ans!) });
    } else if (kind === "cent_near") {
      const x = rnd(101, 999);
      qs.push({ prompt: `Arrondissez ${x} à la centaine la plus proche.`, answer: String(roundTo100(x)) });
    } else if (kind === "thou_near") {
      const x = rnd(1001, 9999);
      qs.push({ prompt: `Arrondissez ${x} au millier le plus proche.`, answer: String(roundTo1000(x)) });
    } else if (kind === "est_add") {
      const x = rnd(1, 999), y = rnd(1, 999);
      qs.push({ prompt: `${x} + ${y} ≈ ?`, answer: String(roundTo100(x) + roundTo100(y)) });
    } else if (kind === "est_sub") {
      let x = rnd(1, 999), y = rnd(1, 999);
      if (x < y) [x, y] = [y, x];
      qs.push({ prompt: `${x} − ${y} ≈ ?`, answer: String(roundTo100(x) - roundTo100(y)) });
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
        qs.push({ prompt: `${x},${d1}${d2} → dixième`, answer: roundDecToTenth(x, d1, d2) });
      } else if (t === "cent") {
        const x = rnd(1, 15), d1 = rnd(0, 9), d2 = rnd(0, 9), d3 = rnd(0, 9);
        qs.push({ prompt: `${x},${d1}${d2}${d3} → centième`, answer: roundDecToCent(x, d1, d2, d3) });
      } else {
        const x = rnd(1, 20), d1 = rnd(1, 9);
        qs.push({ prompt: `${x},${d1}${rnd(0, 9)} → unité`, answer: roundDecToUnit(x, d1) });
      }
    } else {
      const x = rnd(1, 999), y = rnd(1, 999), z = rnd(1, 999);
      const addFirst = Math.random() < 0.5;
      const prompt = addFirst ? `${x} + ${y} − ${z} ≈ ?` : `${x} − ${y} + ${z} ≈ ?`;
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
      qs.push({ prompt: `${x} + ${y} ≈ ?`, answer: String(roundTo100(x) + roundTo100(y)) });
    } else {
      let x = rnd(1, 999), y = rnd(1, 999);
      if (x < y) [x, y] = [y, x];
      qs.push({ prompt: `${x} − ${y} ≈ ?`, answer: String(roundTo100(x) - roundTo100(y)) });
    }
  }
  return { questions: qs, exNum, count, consigne: "", kind: "mixed" };
}

// ── Fraction generators ───────────────────────────────────────────────────────
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

// ── A1.3 / A1.4 / A1.5 generators ───────────────────────────────────────────

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
  if (mode === "gt") consigne = `Sélectionnez les nombres plus grands que ${threshold.toLocaleString("fr-CH")}.`;
  else if (mode === "lt") consigne = `Sélectionnez les nombres plus petits que ${threshold.toLocaleString("fr-CH")}.`;
  else consigne = `Sélectionnez les nombres entre ${threshold.toLocaleString("fr-CH")} et ${threshold2!.toLocaleString("fr-CH")}.`;
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

// ── Column grid generators ────────────────────────────────────────────────────
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
  } else if (op === "×") {
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

// ── A3.5 / A3.6 math helpers & generators ────────────────────────────────────
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

// ── WordProblemsExercise (A2.4) ───────────────────────────────────────────────
function WordProblemsExercise({
  config, answers, validated, results, onChange, consigne, revealCorrection = true, noFrame = false,
}: {
  config: WordProblemsConfig;
  answers: string[];
  validated: boolean;
  results: boolean[];
  onChange: (i: number, val: string) => void;
  consigne?: string;
  revealCorrection?: boolean;
  noFrame?: boolean;
}) {
  const inputCls = `w-28 px-0 pb-2 text-sm ${MATH_TEXT_INPUT_BASE}`;
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{consigne ?? "Résolvez les problèmes. Écrivez uniquement la réponse numérique."}</p>
      </div>
      <div className="space-y-6">
        {config.questions.map((q, i) => {
          const v = answers[i] ?? "";
          const ok = validated && revealCorrection ? (results[i] ?? false) : null;
          const wrong = ok === false;
          return (
            <div key={i} className="space-y-3">
              <div className={noFrame ? "" : "rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4"}>
                <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{q.textFr}</p>
              </div>
              <div className="flex items-center gap-3 pl-2">
                <span className="shrink-0 text-sm text-[var(--color-text-secondary)]">Réponse :</span>
                {wrong ? (
                  <div className="w-28 h-9 rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center">
                    <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{v || "—"}</span>
                    <span className="text-xs font-bold leading-none text-amber-600">{q.answer.toLocaleString("fr-CH")}</span>
                  </div>
                ) : (
                  <input
                    type="text"
                    inputMode="decimal"
                    value={v}
                    disabled={validated}
                    onChange={e => onChange(i, e.target.value.replace(/[^0-9,.\- ]/g, ""))}
                    className={inputCls}
                  />
                )}
                {ok === true && (
                  <span className="text-sm font-bold text-[var(--color-accent-alg)]">✓</span>
                )}
              </div>
              {validated && revealCorrection && q.calculation && (
                <p className="mt-1 pl-2 text-xs text-[var(--color-text-secondary)]">
                  Calcul : <span className="font-mono text-[var(--color-text-primary)]">{q.calculation}</span>
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── ArithmeticGroupExercise ───────────────────────────────────────────────────
function UnitConversionExercise({
  config, answers, validated, results, onChange, revealCorrection = true,
}: {
  config: UnitConversionConfig;
  answers: string[];
  validated: boolean;
  results: boolean[];
  onChange: (i: number, val: string) => void;
  revealCorrection?: boolean;
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
          const ok = validated && revealCorrection ? (results[i] ?? false) : null;
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
  config, answers, validated, results, onChange, onTimerExpired, onTimeUpdate, hideTimerDisplay, consigne, revealCorrection = true,
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
  revealCorrection?: boolean;
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
          const ok = validated && revealCorrection ? results[i] ?? false : null;
          const wrongField = ok === false;
          return (
            <div key={i} className="flex min-h-[2.25rem] items-center gap-1.5">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              {q.missingPos === "a"
                ? wrongField
                  ? <div className="w-14 h-8 rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center"><span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{v||"—"}</span><span className="text-xs font-bold leading-none text-amber-600">{q.answer}</span></div>
                  : <input type="text" inputMode="numeric" value={v} disabled={validated} onChange={e => onChange(i, e.target.value.replace(/[^0-9,.\-]/g, ""))} className={inputBase} />
                : <span className={numCls}>{q.a}</span>}
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">{q.op}</span>
              {q.missingPos === "b"
                ? wrongField
                  ? <div className="w-14 h-8 rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center"><span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{v||"—"}</span><span className="text-xs font-bold leading-none text-amber-600">{q.answer}</span></div>
                  : <input type="text" inputMode="numeric" value={v} disabled={validated} onChange={e => onChange(i, e.target.value.replace(/[^0-9,.\-]/g, ""))} className={inputBase} />
                : <span className={numCls}>{q.b}</span>}
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
              {q.missingPos === "result"
                ? wrongField
                  ? <div className="w-14 h-8 rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center"><span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{v||"—"}</span><span className="text-xs font-bold leading-none text-amber-600">{q.answer}</span></div>
                  : <input type="text" inputMode="numeric" value={v} disabled={validated} onChange={e => onChange(i, e.target.value.replace(/[^0-9,.\-]/g, ""))} className={inputBase} />
                : <span className={numCls}>{q.result}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── ColumnGridExercise ────────────────────────────────────────────────────────
const COL_LABELS = ["M", "C", "D", "U"] as const;

function ColumnGridCard({
  q, cardIdx, cellAnswers, carryInputs, validated, cardCorrect: _cardCorrect, preFilledOperands, exNum: _exNum, onChange, onCarryChange, revealCorrection = true,
}: {
  q: ColGridQ; cardIdx: number; cellAnswers: string[]; carryInputs: string[];
  validated: boolean; cardCorrect: boolean; preFilledOperands: boolean; exNum: number;
  onChange: (cardIdx: number, cellIdx: number, val: string) => void;
  onCarryChange: (cardIdx: number, col: number, val: string) => void;
  revealCorrection?: boolean;
}) {
  const ad = getD4(q.a), bd = getD4(q.b), rd = getD4(q.result);
  const firstNzA = ad.findIndex(d => d !== 0);
  const firstNzB = bd.findIndex(d => d !== 0);
  const firstNzR = rd.findIndex(d => d !== 0);
  // cellIdx layout: [0-3]=op1, [4-7]=op2, [8-11]=result (when not preFilledOperands)
  // cellIdx layout: [0-3]=result only (when preFilledOperands)
  const resBase = preFilledOperands ? 0 : 8;

  // Leading zero = zero before first significant digit → not required
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
    const ok = validated && revealCorrection ? cellOk(expected, val, col, firstNz ?? 0) : null;
    if (ok === false) {
      return (
        <div className={`h-8 w-8 flex flex-col items-center justify-center border-amber-400`}>
          <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
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
          {/* Carry / borrow row — input fields */}
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">{q.op === "+" || q.op === "×" ? "R" : "E"}</td>
            {q.carryRow.map((c, ci) => {
              const carryVal = carryInputs[ci] ?? "";
              const expectedCarry = c !== null ? String(c) : null;
              const carryWrong = validated && revealCorrection && expectedCarry !== null && carryVal.trim() !== expectedCarry;
              return (
                <td key={ci} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                  {carryWrong ? (
                    <div className={`h-5 w-8 flex flex-col items-center justify-center border-amber-400`}>
                      <span className="text-[8px] leading-none text-[var(--color-text-primary)]">{carryVal || "—"}</span>
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
  config, answers, carryInputs, validated, results, onChange, onCarryChange, consigne, revealCorrection = true,
}: {
  config: ColGridConfig;
  answers: string[][];
  carryInputs: string[][];
  validated: boolean;
  results: boolean[];
  onChange: (cardIdx: number, cellIdx: number, val: string) => void;
  onCarryChange: (cardIdx: number, col: number, val: string) => void;
  consigne?: string;
  revealCorrection?: boolean;
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
            revealCorrection={revealCorrection}
          />
        ))}
      </div>
    </div>
  );
}

// ── DivColumnGridExercise ─────────────────────────────────────────────────────
const DIV_COL_LABELS_4 = ["M", "C", "D", "U"];
const DIV_COL_LABELS_5 = ["DM", "M", "C", "D", "U"];
const DIV_COL_LABELS_6 = ["CM", "DM", "M", "C", "D", "U"];
const CELL_W = 32;
// EMPTY_TD removed (no longer used after DivColumnCard grid rewrite)

function DivColumnCard({
  q, cardIdx, quotientInputs, remainderInput, operandInputs, workInputs, validated, preFilledOperands,
  onQuotientChange, onRemainderChange, onOperandChange, onWorkChange, revealCorrection = true,
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
  revealCorrection?: boolean;
}) {
  const { dividend, divisor, quotient, remainder, steps, dividendCols, divisorCols, quotientCols } = q;
  const colLabels = dividendCols === 4 ? DIV_COL_LABELS_4 : dividendCols === 5 ? DIV_COL_LABELS_5 : DIV_COL_LABELS_6;
  const dividendStr = dividend.toString().padStart(dividendCols, "0");
  const divisorStr = divisor.toString().padStart(divisorCols, "0");
  // Left-align quotient: digit i → cell i; cells >= quotientLen are empty
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
    const ok = validated && revealCorrection ? val.trim() === expected : null;
    if (ok === false) return (
      <div className={`h-8 w-8 flex flex-col items-center justify-center border-amber-400`}>
        <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
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

  const remOk = validated && revealCorrection ? remainderInput.trim() === remainder.toString() : null;

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
        {dividend} ÷ {divisor}
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

          {/* Quotient row — shown right below dividend/divisor */}
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
                {/* Partial dividend row — skip si===0 (already visible in dividend row above) */}
                {si > 0 && (
                  <tr>
                    <td style={{ padding: 0 }} />
                    <FullWorkRow numStr={pdStr} colEnd={step.colEnd} si={si} type={0} />
                    <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                  </tr>
                )}

                {/* Product row */}
                <tr>
                  <td style={{ padding: 0, textAlign: "center", verticalAlign: "middle", fontSize: 14, color: "var(--color-text-secondary)" }}>−</td>
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
                    <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{remainderInput || "—"}</span>
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
  onChange, onCarryChange, revealCorrection = true,
}: {
  q: Mul2DigitQ; cardIdx: number; cellAnswers: string[]; carryInputs: string[];
  validated: boolean; preFilledOperands: boolean;
  onChange: (cardIdx: number, cellIdx: number, val: string) => void;
  onCarryChange: (cardIdx: number, col: number, val: string) => void;
  revealCorrection?: boolean;
}) {
  const ad = getD5(q.a), bd = getD5(q.b);
  const p1d = getD5(q.partial1), p2d = getD5(q.partial2);
  const rd = getD5(q.result);
  const firstNzA = ad.findIndex(d => d !== 0);
  const firstNzB = bd.findIndex(d => d !== 0);
  const firstNzP1 = p1d.findIndex(d => d !== 0);
  const firstNzR = rd.findIndex(d => d !== 0);
  // For p2shifted (cols 0-3): col i → p2d[i+1]; col 4 is fixed
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

  // partial2 shifted: col i → p2d[i+1], except col 4 (U) = 0 (fixed)
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
    const ok = validated && revealCorrection ? (isLeading ? (val.trim() === "" || val.trim() === "0") : val.trim() === String(expected)) : null;
    if (ok === false) {
      return (
        <div className={`h-8 w-8 flex flex-col items-center justify-center border-amber-400`}>
          <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
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
    if (validated && revealCorrection && expected !== null && val.trim() !== String(expected)) {
      return (
        <div className={`h-5 w-8 flex flex-col items-center justify-center border-amber-400`}>
          <span className="text-[8px] leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
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
          {formatCompNum(q.a)} × {formatCompNum(q.b)}
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
          {/* R2 — carries for tens-digit multiplication (shown first/top) */}
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R2</td>
            {visibleCols.map(col => (
              <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">{carryCell(5, col, q.carries2)}</td>
            ))}
          </tr>
          {/* R1 — carries for units-digit multiplication */}
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
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">×</td>
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
          {/* Partial product 1 (a × bUnits) */}
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {visibleCols.map(col => (
              <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">{cellInput({base: p1Base, col, expected: p1d[col]!, firstNz: firstNzP1})}</td>
            ))}
          </tr>
          {/* Partial product 2 shifted (a × bTens × 10) */}
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-center font-mono text-sm text-[var(--color-text-primary)]">+</td>
            {visibleCols.map(col => {
              if (col === 4) {
                // Fixed "0" in units position — shown in accent colour
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
  config, answers, carryInputs, validated, results, onChange, onCarryChange, revealCorrection = true,
}: {
  config: Mul2DigitConfig;
  answers: string[][];
  carryInputs: string[][];
  validated: boolean;
  results: boolean[];
  onChange: (cardIdx: number, cellIdx: number, val: string) => void;
  onCarryChange: (cardIdx: number, col: number, val: string) => void;
  revealCorrection?: boolean;
}) {
  void results;
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Effectuez les multiplications en colonnes. Écrivez les produits partiels, les retenues et le résultat.
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
            revealCorrection={revealCorrection}
          />
        ))}
      </div>
    </div>
  );
}

function DivColumnGridExercise({
  config, quotientInputs, remainderInputs, operandInputs, workInputs, validated,
  onQuotientChange, onRemainderChange, onOperandChange, onWorkChange,
  consigne, consigneLang, consigneDir, revealCorrection = true,
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
  revealCorrection?: boolean;
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
            revealCorrection={revealCorrection}
          />
        ))}
      </div>
    </div>
  );
}

// ── RoundingExercise ──────────────────────────────────────────────────────────
function RoundingExercise({
  config, answers, validated, results, onChange, revealCorrection = true, noFrame = false,
}: {
  config: RoundingConfig;
  answers: string[];
  validated: boolean;
  results: boolean[];
  onChange: (i: number, val: string) => void;
  revealCorrection?: boolean;
  noFrame?: boolean;
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
      <div className={noFrame ? "" : "rounded-xl border border-[var(--color-border-default)] p-4"}>
        <div
          className={isInline || isDecMixed ? "grid items-center gap-x-2 gap-y-3" : isNew && !isInline ? "grid gap-y-3" : "space-y-3"}
          style={gridCols ? { gridTemplateColumns: gridCols } : undefined}
        >
          {config.questions.map((q, i) => {
            const v = answers[i] ?? "";
            const ok = validated && revealCorrection ? results[i] ?? false : null;
            const wrongField = ok === false;
            const numLabel = <span className="text-xs font-bold text-[var(--color-accent-alg)] self-center">{i + 1}.</span>;
            const prompt = <span className={`${isNew && !isInline ? "font-mono" : "flex-1"} text-sm text-[var(--color-text-primary)] self-center`}>{q.prompt}</span>;
            const field = wrongField
              ? <div className={`${inputBase} rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center overflow-hidden`}>
                  <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{v || "—"}</span>
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
              const parts = q.prompt.split(" → ");
              const numPart = parts[0] ?? q.prompt;
              const labelPart = parts[1] ?? "";
              return (
                <Fragment key={i}>
                  <span className="text-xs font-bold text-[var(--color-accent-alg)] self-center">{i + 1}.</span>
                  <span className="font-mono text-sm text-[var(--color-text-primary)] self-center">{numPart}</span>
                  <span className="text-sm font-bold text-[var(--color-accent-alg)] self-center">→</span>
                  <span className="text-sm text-[var(--color-text-secondary)] self-center">{labelPart}</span>
                  <span className="text-sm text-[var(--color-text-secondary)] self-center">≈</span>
                  {field}
                </Fragment>
              );
            }
            if (isInline) {
              return (
                <Fragment key={i}>
                  <span className="text-xs font-bold text-[var(--color-accent-alg)] self-center">{i + 1}.</span>
                  <span className="font-mono text-sm text-[var(--color-text-primary)] self-center">{q.prompt}</span>
                  <span className="text-sm text-[var(--color-text-secondary)] self-center">≈</span>
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

// ── FracDisplay helper ────────────────────────────────────────────────────────
function FracDisplay({ num, den }: { num: number | string; den: number | string }) {
  return (
    <span className="inline-flex flex-col items-center leading-none gap-[3px] mx-1 align-middle">
      <span className="text-sm font-bold text-[var(--color-accent-alg)]">{num}</span>
      <span className="h-[1.5px] self-stretch min-w-[1.2em] rounded bg-[var(--color-text-primary)]" />
      <span className="text-sm font-bold text-[var(--color-text-primary)]">{den}</span>
    </span>
  );
}

// ── FracIdExercise ────────────────────────────────────────────────────────────
function FracIdExercise({ config, answers, validated, results, onChange, revealCorrection = true, noFrame = false }: {
  config: FracIdConfig; answers: string[]; validated: boolean; results: boolean[];
  onChange: (i: number, val: string) => void;
  revealCorrection?: boolean;
  noFrame?: boolean;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <div className={`${noFrame ? "" : "rounded-xl border border-[var(--color-border-default)] p-4 "}space-y-4`}>
        {config.questions.map((q, i) => {
          const v = answers[i] ?? "";
          const ok = validated && revealCorrection ? results[i] : null;
          const wrong = ok === false;
          const label = q.ask === "num" ? "Quel est le numérateur ?" : "Quel est le dénominateur ?";
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <FracDisplay num={q.num} den={q.den} />
              <span className="text-sm text-[var(--color-text-secondary)]">{label}</span>
              {wrong ? (
                <div className={`w-14 px-1 py-1.5 text-sm flex flex-col items-center justify-center rounded-none border-0 border-b-2 border-amber-500`}>
                  <span className="text-xs leading-none text-[var(--color-text-primary)]">{v||"—"}</span>
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

// ── FracEquivExercise ─────────────────────────────────────────────────────────
function FracEquivExercise({ config, answers, validated, results, onChange, revealCorrection = true, noFrame = false }: {
  config: FracEquivConfig; answers: string[]; validated: boolean; results: boolean[];
  onChange: (i: number, val: string) => void;
  revealCorrection?: boolean;
  noFrame?: boolean;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Complétez les fractions équivalentes.</p>
      <div className={`${noFrame ? "" : "rounded-xl border border-[var(--color-border-default)] p-4 "}space-y-5`}>
        {config.questions.map((q, i) => {
          const v = answers[i] ?? "";
          const ok = validated && revealCorrection ? results[i] : null;
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
                      <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{v||"—"}</span>
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
                      <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{v||"—"}</span>
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

// ── FracSimplifyExercise ──────────────────────────────────────────────────────
function FracSimplifyExercise({ config, answers, validated, results, onChange, revealCorrection = true, noFrame = false }: {
  config: FracSimplifyConfig;
  answers: Array<{ num: string; den: string }>;
  validated: boolean;
  results: boolean[];
  onChange: (i: number, part: "num" | "den", val: string) => void;
  revealCorrection?: boolean;
  noFrame?: boolean;
}) {
  const inputW = `w-12 px-1 py-1.5 text-sm ${MATH_NUMBER_INPUT_BASE}`;
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Simplifiez les fractions.</p>
      <div className={`${noFrame ? "" : "rounded-xl border border-[var(--color-border-default)] p-4 "}space-y-5`}>
        {config.questions.map((q, i) => {
          const ans = answers[i] ?? { num: "", den: "" };
          const ok = validated && revealCorrection ? results[i] : null;
          const wrong = ok === false;
          return (
            <div key={i} className="flex items-center gap-2">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <FracDisplay num={q.num} den={q.den} />
              <span className="text-sm font-bold text-[var(--color-text-secondary)]">=</span>
              <span className="inline-flex flex-col items-center leading-none gap-[3px] mx-1 align-middle">
                {wrong ? (
                  <div className={`w-12 flex flex-col items-center justify-center py-1 rounded-none border-0 border-b-2 border-amber-500`}>
                    <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{ans.num||"—"}</span>
                    <span className="text-[9px] font-bold text-amber-600 leading-none">{q.simNum}</span>
                  </div>
                ) : (
                  <input type="text" inputMode="numeric" value={ans.num} disabled={validated} onChange={e => onChange(i, "num", e.target.value.replace(/[^0-9]/g, ""))}
                    className={inputW} />
                )}
                <span className="h-[1.5px] self-stretch min-w-[3em] rounded bg-[var(--color-text-primary)]" />
                {wrong ? (
                  <div className={`w-12 flex flex-col items-center justify-center py-1 rounded-none border-0 border-b-2 border-amber-500`}>
                    <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{ans.den||"—"}</span>
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

// ── FracCompareExercise ───────────────────────────────────────────────────────
function FracCompareExercise({ config, answers, validated, onAnswer, revealCorrection = true, noFrame = false }: {
  config: FracCompConfig;
  answers: Array<"<" | "=" | ">" | null>;
  validated: boolean;
  onAnswer: (i: number, sym: "<" | "=" | ">") => void;
  revealCorrection?: boolean;
  noFrame?: boolean;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Comparez les fractions suivantes.</p>
      <div className={`${noFrame ? "" : "rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4 "}space-y-4`}>
        {config.questions.map((q, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <FracDisplay num={q.num1} den={q.den1} />
            <div className="flex shrink-0 gap-1">
              {(["<", "=", ">"] as const).map(sym => {
                const sel = answers[i] === sym;
                const isCorrect = sym === q.answer;
                let cls = "h-8 w-8 shrink-0 rounded border text-sm font-bold transition-colors ";
                if (!(validated && revealCorrection)) {
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
  "G4-1": { geoKind: "square", label: "Périmètre et aire du carré" },
  "G4-2": { geoKind: "rectangle", label: "Périmètre et aire du rectangle" },
  "G4-3": { geoKind: "triangle", label: "Périmètre et aire du triangle" },
  "G4-4": { geoKind: "parallelogram", label: "Périmètre et aire du parallélogramme" },
  "G4-5": { geoKind: "trapezoid", label: "Périmètre et aire du trapèze" },
  "G4-6": { geoKind: "circle", label: "Périmètre et aire du disque" },
  "G4-7": { geoKind: "rhombus", label: "Périmètre et aire du losange" },
};

const G5_VOLUME_PLACEMENT: Partial<Record<string, { volumeKind: VolumePlacementKind; label: string }>> = {
  "G5-2": { volumeKind: "cube", label: "Volume du cube" },
  "G5-3": { volumeKind: "cuboid", label: "Volume du pavé droit" },
  "G5-4": { volumeKind: "prism_pyramid", label: "Volume du prisme et de la pyramide" },
  "G5-5": { volumeKind: "cylinder", label: "Volume du cylindre" },
  "G5-6": { volumeKind: "cone_sphere", label: "Volume du cône et de la sphère" },
};

function GeoLineInput({
  label,
  unit,
  value,
  answer,
  onChange,
  validated,
  revealCorrection = true,
}: {
  label: string;
  unit: string;
  value: number;
  answer: string;
  onChange: (value: string) => void;
  validated: boolean;
  revealCorrection?: boolean;
}) {
  const correct = Number.isInteger(value) ? String(value) : value.toFixed(1).replace(".", ",");
  const wrong = validated && revealCorrection && answer.trim().replace(".", ",") !== correct;
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
            <span>{answer || (revealCorrection ? correct : "")}</span>
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
  revealCorrection = true,
}: {
  exerciseKey: number;
  validated: boolean;
  validateTrigger: number;
  onValidated: (score: number, max: number) => void;
  revealCorrection?: boolean;
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
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le périmètre et l&apos;aire.</p>
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
        <GeoLineInput label="Périmètre" unit="cm" value={data.perimeter} answer={answerP} onChange={setAnswerP} validated={validated} revealCorrection={revealCorrection} />
        <GeoLineInput label="Aire" unit="cm²" value={data.area} answer={answerA} onChange={setAnswerA} validated={validated} revealCorrection={revealCorrection} />
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
  revealCorrection = true,
}: {
  step: GeoPlacementStep;
  exerciseKey: number;
  validated: boolean;
  validateTrigger: number;
  onValidated: (score: number, max: number) => void;
  revealCorrection?: boolean;
}) {
  const common = {
    exerciseKey,
    validated,
    validateTrigger,
    onValidated,
  };

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {step.exNum}</h2>
      {step.geoKind === "square" ? <SquareGeoExercise {...common} revealCorrection={revealCorrection} /> :
        step.geoKind === "rectangle" ? <PlacementRectangleExercise {...common} /> :
        step.geoKind === "triangle" ? <PlacementTriangleExercise {...common} /> :
        step.geoKind === "parallelogram" ? <PlacementParallelogramExercise {...common} /> :
        step.geoKind === "trapezoid" ? <PlacementTrapezoidExercise {...common} /> :
        step.geoKind === "circle" ? <PlacementCircleExercise {...common} /> :
        <PlacementRhombusExercise {...common} />}
    </div>
  );
}

function genAlgebraGroupStep(lesson: MathSubmoduleLesson): AlgebraGroupStep {
  const ri = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
  const LETTERS = ["n", "x", "y", "k", "m", "p", "t"];
  const letter = LETTERS[ri(0, LETTERS.length - 1)]!;
  const value = ri(2, 9);
  const l = letter;
  const v = value;
  // Helpers: cl(1) → "x", cl(3) → "3x" | cl2(1) → "x²" | cl3(1) → "x³"
  const cl  = (a: number) => a === 1 ? l : `${a}${l}`;
  const cl2 = (a: number) => a === 1 ? `${l}²` : `${a}${l}²`;
  const cl3 = (a: number) => a === 1 ? `${l}³` : `${a}${l}³`;

  // ── Facile (10 templates très variés) ──────────────────────────────────────
  const easyGens: Array<() => { expr: string; answer: number }> = [
    // 1. al  (produit seul)
    () => { const a=ri(2,9); return { expr: cl(a), answer: a*v }; },
    // 2. al + b
    () => { const a=ri(2,6), b=ri(1,9); return { expr: `${cl(a)} + ${b}`, answer: a*v+b }; },
    // 3. b + al  (constante en premier)
    () => { const a=ri(2,6), b=ri(2,9); return { expr: `${b} + ${cl(a)}`, answer: b+a*v }; },
    // 4. l + b  (coefficient 1 implicite)
    () => { const b=ri(2,9); return { expr: `${l} + ${b}`, answer: v+b }; },
    // 5. (a + b)l  (somme entre parenthèses × variable)
    () => { const a=ri(1,5), b=ri(1,5); return { expr: `(${a} + ${b})${l}`, answer: (a+b)*v }; },
    // 6. al + l  (deux occurrences, dont un coefficient 1)
    () => { const a=ri(2,7); return { expr: `${cl(a)} + ${l}`, answer: (a+1)*v }; },
    // 7. l + l + b  (deux variables + constante)
    () => { const b=ri(1,8); return { expr: `${l} + ${l} + ${b}`, answer: 2*v+b }; },
    // 8. al + b + l  (ordre mélangé, termes semblables à repérer)
    () => { const a=ri(2,6), b=ri(1,8); return { expr: `${cl(a)} + ${b} + ${l}`, answer: (a+1)*v+b }; },
    // 9. a(l + b)  (distribution simple)
    () => { const a=ri(2,5), b=ri(1,6); return { expr: `${a}(${l} + ${b})`, answer: a*(v+b) }; },
    // 10. a(l − b)  (distribution avec soustraction)
    () => { const a=ri(2,5), b=ri(1,3); return { expr: `${a}(${l} − ${b})`, answer: a*(v-b) }; },
  ];

  // ── Moyen (10 templates — distribution, termes multiples, parenthèses) ────
  const mediumGens: Array<() => { expr: string; answer: number }> = [
    // 1. al + bl − c  (réduire les termes semblables)
    () => { const a=ri(2,5), b=ri(2,4), c=ri(1,8); return { expr: `${cl(a)} + ${cl(b)} − ${c}`, answer: (a+b)*v-c }; },
    // 2. al + b(l + c)  (distribution + combinaison)
    () => { const a=ri(2,4), b=ri(2,4), c=ri(1,5); return { expr: `${cl(a)} + ${b}(${l} + ${c})`, answer: a*v+b*(v+c) }; },
    // 3. (al + b) + cl  (parenthèses puis addition)
    () => { const a=ri(2,5), b=ri(1,8), c=ri(2,4); return { expr: `(${cl(a)} + ${b}) + ${cl(c)}`, answer: (a+c)*v+b }; },
    // 4. al − bl + c  (soustraction de termes semblables, a > b)
    () => { const a=ri(4,8), b=ri(1,3), c=ri(1,8); return { expr: `${cl(a)} − ${cl(b)} + ${c}`, answer: (a-b)*v+c }; },
    // 5. a(l + b) + cl  (distribuer puis combiner)
    () => { const a=ri(2,4), b=ri(1,5), c=ri(2,5); return { expr: `${a}(${l} + ${b}) + ${cl(c)}`, answer: a*(v+b)+c*v }; },
    // 6. (a + b)l + c  (coefficient groupé puis constante)
    () => { const a=ri(1,4), b=ri(1,4), c=ri(2,9); return { expr: `(${a} + ${b})${l} + ${c}`, answer: (a+b)*v+c }; },
    // 7. al + bl + cl  (trois termes semblables)
    () => { const a=ri(2,4), b=ri(1,3), c=ri(1,3); return { expr: `${cl(a)} + ${cl(b)} + ${cl(c)}`, answer: (a+b+c)*v }; },
    // 8. a(bl + c)  (coefficient imbriqué)
    () => { const a=ri(2,3), b=ri(2,4), c=ri(1,5); return { expr: `${a}(${cl(b)} + ${c})`, answer: a*(b*v+c) }; },
    // 9. al + b − cl  (ordre différent, a > c)
    () => { const a=ri(4,8), b=ri(2,9), c=ri(1,3); return { expr: `${cl(a)} + ${b} − ${cl(c)}`, answer: (a-c)*v+b }; },
    // 10. (al + b) − cl  (parenthèses puis soustraction)
    () => { const a=ri(4,7), b=ri(2,8), c=ri(1,3); return { expr: `(${cl(a)} + ${b}) − ${cl(c)}`, answer: (a-c)*v+b }; },
  ];

  // ── Difficile (10 templates — ² et ³ à des positions variées) ────────────
  const hardGens: Array<() => { expr: string; answer: number }> = [
    // 1. al² + bl − c  (classique : puissance en premier)
    () => { const a=ri(1,2), b=ri(2,5), c=ri(1,6); return { expr: `${cl2(a)} + ${cl(b)} − ${c}`, answer: a*v*v+b*v-c }; },
    // 2. al + bl²  (linéaire EN PREMIER, puis puissance)
    () => { const a=ri(2,5), b=ri(2,3); return { expr: `${cl(a)} + ${cl2(b)}`, answer: a*v+b*v*v }; },
    // 3. l³ + al  (cubique en premier, linéaire après)
    () => { const a=ri(2,6); return { expr: `${l}³ + ${cl(a)}`, answer: v*v*v+a*v }; },
    // 4. a(l² + b)  (distribution avec carré à l'intérieur)
    () => { const a=ri(2,3), b=ri(1,6); return { expr: `${a}(${l}² + ${b})`, answer: a*(v*v+b) }; },
    // 5. b + al²  (constante EN PREMIER, puis carré)
    () => { const a=ri(1,3), b=ri(2,9); return { expr: `${b} + ${cl2(a)}`, answer: b+a*v*v }; },
    // 6. al + bl³  (linéaire EN PREMIER, cubique après)
    () => { const a=ri(2,5), b=ri(1,2); return { expr: `${cl(a)} + ${cl3(b)}`, answer: a*v+b*v*v*v }; },
    // 7. al² − bl² + cl  (deux termes au carré, puis linéaire)
    () => { const a=ri(2,4), b=ri(1,2), c=ri(2,5); return { expr: `${cl2(a)} − ${cl2(b)} + ${cl(c)}`, answer: (a-b)*v*v+c*v }; },
    // 8. al² + bl² + c  (sommer les carrés, puis constante)
    () => { const a=ri(1,2), b=ri(1,2), c=ri(1,8); return { expr: `${cl2(a)} + ${cl2(b)} + ${c}`, answer: (a+b)*v*v+c }; },
    // 9. l³ − al + b  (cubique, puis soustraction linéaire)
    () => { const a=ri(1,4), b=ri(1,8); return { expr: `${l}³ − ${cl(a)} + ${b}`, answer: v*v*v-a*v+b }; },
    // 10. al² + b − cl  (carré + constante − linéaire, ordre varié)
    () => { const a=ri(1,2), b=ri(2,8), c=ri(1,3); return { expr: `${cl2(a)} + ${b} − ${cl(c)}`, answer: a*v*v+b-c*v }; },
  ];

  function pickUnique(
    gens: Array<() => { expr: string; answer: number }>,
    count: number,
    difficulty: "easy" | "medium" | "hard",
  ): AlgebraGroupQuestion[] {
    const results: AlgebraGroupQuestion[] = [];
    const shuffled = [...gens.keys()].sort(() => Math.random() - 0.5);
    for (const idx of shuffled) {
      if (results.length >= count) break;
      for (let t = 0; t < 20; t++) {
        const { expr, answer } = gens[idx]!();
        if (answer > 0 && answer < 500) { results.push({ expr, answer, difficulty }); break; }
      }
    }
    return results;
  }

  const questions: AlgebraGroupQuestion[] = [
    ...pickUnique(easyGens, 2, "easy"),
    ...pickUnique(mediumGens, 2, "medium"),
    ...pickUnique(hardGens, 1, "hard"),
  ];

  return { kind: "algebra_group", lesson, letter, value, questions };
}

// ── Equation group (A10.1) ─────────────────────────────────────────────────
function genEquationGroupStep(lesson: MathSubmoduleLesson, exNum = 1): EquationGroupStep {
  const ri = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1)) + a;
  function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
  function rat(n: number, d: number): EquationSolution {
    if (d === 0) return { kind: "impossible" };
    if (d < 0) { n = -n; d = -d; }
    const g = gcd(Math.abs(n), d);
    return { kind: "rational", num: n / g, den: d / g };
  }
  const sx = (coef: number) => coef === 1 ? "x" : coef === -1 ? "-x" : `${coef}x`;
  const term = (coef: number, first = false) => {
    if (coef === 0) return first ? "0" : "";
    const abs = Math.abs(coef);
    const body = coef === 1 || coef === -1 ? "x" : `${abs}x`;
    if (first) return coef < 0 ? `-${body}` : body;
    return coef < 0 ? ` - ${body}` : ` + ${body}`;
  };
  const cn = (value: number, first = false) => {
    if (first) return `${value}`;
    return value < 0 ? ` - ${Math.abs(value)}` : ` + ${value}`;
  };
  const lin = (xCoef: number, constant: number) => {
    if (xCoef === 0) return `${constant}`;
    if (constant === 0) return term(xCoef, true);
    return `${term(xCoef, true)}${cn(constant)}`;
  };
  const solText = (sol: EquationSolution) =>
    sol.kind === "impossible" ? "∅" : sol.kind === "infinite" ? "infini" : sol.den === 1 ? `${sol.num}` : `${sol.num}/${sol.den}`;
  const opAdd = (n: number) => n < 0 ? `- ${Math.abs(n)}` : `+ ${n}`;
  const opMoveX = (coef: number) => coef < 0 ? `+ ${sx(Math.abs(coef))}` : `- ${sx(coef)}`;
  const makeA101 = (
    expr: string,
    a: number,
    b: number,
    c: number,
    d: number,
    pre: string[] = [],
    preOps: string[] = [],
  ): EquationQuestion => {
    const development = [...pre];
    const operations = [...preOps];
    const leftAfterMove = a - c;
    development.push(`${lin(leftAfterMove, b)} = ${d}`);
    operations.push(opMoveX(c));
    if (leftAfterMove === 0) {
      if (b === d) {
        development.push("une infinité de possibilités !");
        development.push("S = IR");
        operations.push("");
        operations.push("");
        return { expr, solution: { kind: "infinite" }, development, operations };
      }
      development.push("impossible !");
      development.push("S = ∅");
      operations.push("");
      operations.push("");
      return { expr, solution: { kind: "impossible" }, development, operations };
    }
    if (b !== 0) {
      development.push(`${sx(leftAfterMove)} = ${d - b}`);
      operations.push(opAdd(-b));
    }
    const solution = rat(d - b, leftAfterMove);
    if (solution.kind === "rational") {
      development.push(`x = ${solText(solution)}`);
      development.push(`S = {${solText(solution)}}`);
      operations.push(`: ${leftAfterMove < 0 ? `(${leftAfterMove})` : leftAfterMove}`);
      operations.push("");
    }
    return { expr, solution, development, operations };
  };
  const a101Templates: Array<() => EquationQuestion> = [
    () => { const a=ri(4,9), c=ri(1,a-2), b=-ri(1,9), x=ri(2,9), d=(a-c)*x+b; return makeA101(`${a}x${cn(b)} = ${c}x${cn(d)}`, a,b,c,d); },
    () => { const p=ri(4,10), b=ri(2,9), x=ri(-6,-1), c=ri(1,p-2), d=(p-c)*x-b; return makeA101(`${p}x - ${b} = ${d} ${c < 0 ? "-" : "+"} ${Math.abs(c)}x`, p,-b,c,d); },
    () => { const a=ri(2,6), k=ri(2,9); return makeA101(`${a}(x + ${k}) = ${a}x + ${a*k}`, a,a*k,a,a*k, [`${a}x + ${a*k} = ${a}x + ${a*k}`], ["effectuer"]); },
    () => { const a=ri(2,8), c=ri(a+1,a+6); return makeA101(`${a}x = ${c}x`, a,0,c,0); },
    () => { const c=ri(3,9), x=ri(2,7), d=ri(1,9), left=c*x-d; return makeA101(`${left} = ${c}x - ${d}`, 0,left,c,-d); },
    () => { const a=ri(2,6), k=ri(2,8), add=ri(1,6); const b=-a*k+add, d=b-ri(1,5); return makeA101(`${a}(x - ${k}) + ${add} = x${cn(d)} + ${a-1}x`, a,b,a,d, [`${a}x - ${a*k} + ${add} = ${a}x${cn(d)}`, `${lin(a,b)} = ${lin(a,d)}`], ["effectuer", "réduire"]); },
    () => { const p=ri(3,7), q=ri(2,5), r=ri(2,5), c=ri(2,8), b=-ri(1,6), d=ri(1,12); return makeA101(`${p} · ${q}x + ${r}x · 2${cn(b)} = ${d} + ${c}x`, p*q+r*2,b,c,d, [`${p*q}x + ${r*2}x${cn(b)} = ${d} + ${c}x`, `${lin(p*q+r*2,b)} = ${lin(c,d)}`], ["effectuer", "réduire"]); },
    () => { const m=ri(2,5), n=ri(2,5), a=ri(2,5), k=ri(2,7), add=ri(1,6); return makeA101(`${m} · ${n} - ${a} · ${k}x = ${a}(x - ${k}) + ${add}`, -a*k,m*n,a,add-a*k, [`${m*n} - ${a*k}x = ${a}x - ${a*k} + ${add}`, `${lin(-a*k,m*n)} = ${lin(a,add-a*k)}`], ["effectuer", "réduire"]); },
    () => { const c=ri(4,9), b=ri(1,6), d=ri(1,8); return makeA101(`x - ${b} = ${c}x${cn(d)}`, 1,-b,c,d); },
    () => { const a=ri(4,9), m=ri(2,5), n=ri(2,5); return makeA101(`${a}x - ${m} · ${n} = ${a-1}x - ${m*n} + x`, a,-m*n,a,-m*n, [`${a}x - ${m*n} = ${a}x - ${m*n}`], ["effectuer"]); },
    () => { const a=ri(2,6), b=ri(1,8), d=ri(1,9); return makeA101(`-${b} - ${a}x = ${-(a-1)}x - ${d}`, -a,-b,-(a-1),-d); },
    () => { const p=ri(3,7), q=ri(2,6), r=ri(2,5), rhs=ri(6,20); return makeA101(`${p}(${q} - ${r}x) - x = ${rhs}`, -p*r-1,p*q,0,rhs, [`${p*q} - ${p*r}x - x = ${rhs}`, `${lin(-p*r-1,p*q)} = ${rhs}`], ["effectuer", "réduire"]); },
    () => { const a=ri(2,6), k=ri(1,7), d=ri(1,8); return makeA101(`${a}(x - ${k}) = x + ${d} + ${a-1}x`, a,-a*k,a,d, [`${a}x - ${a*k} = ${a}x + ${d}`], ["effectuer"]); },
    () => { const p=ri(2,8), q=ri(2,6), d=ri(1,8), left=ri(10,35); return makeA101(`${left} = (x + ${p}) · ${q} - ${d}`, 0,left,q,p*q-d, [`${left} = ${q}x + ${p*q} - ${d}`, `${left} = ${lin(q,p*q-d)}`], ["effectuer", "réduire"]); },
    () => { const a=ri(3,8), c=ri(a+2,a+9), b=ri(2,9), d=ri(1,9); return makeA101(`${a}x - ${b} = ${c}x + ${d}`, a,-b,c,d); },
    () => { const p=ri(3,8), q=ri(2,4), add=ri(1,6), r=ri(2,6), k=ri(2,7); return makeA101(`${p}x · ${q} - ${add} = ${r}(x - ${k}) + x`, p*q,-add,r+1,-r*k, [`${p*q}x - ${add} = ${r}x - ${r*k} + x`, `${lin(p*q,-add)} = ${lin(r+1,-r*k)}`], ["effectuer", "réduire"]); },
    () => { const a=ri(2,8), c=ri(a+10,a+80), b=ri(10,60); return makeA101(`${a}x + ${b} = ${c}x`, a,b,c,0); },
    () => { const a=ri(4,9), c=ri(a+1,a+6), b=ri(1,8), d=-ri(1,8); return makeA101(`${a}x + ${b} = ${c}x${cn(d)}`, a,b,c,d); },
    () => { const k=ri(2,5), m=ri(2,6), n=ri(2,6), p=ri(2,5), q=ri(2,6); return makeA101(`(x - ${k}) · ${m} = ${p}(${q} - ${n}x)`, m,-m*k,-p*n,p*q, [`${m}x - ${m*k} = ${p*q} - ${p*n}x`], ["effectuer"]); },
    () => { const a=ri(2,5), c=ri(1,5); return makeA101(`${a}x · 2 - x = x - ${c} + ${2*a-2}x`, 2*a-1,0,2*a-1,-c, [`${2*a}x - x = ${2*a-1}x - ${c}`, `${lin(2*a-1,0)} = ${lin(2*a-1,-c)}`], ["effectuer", "réduire"]); },
    () => { const c=ri(2,6), b=ri(2,12); return makeA101(`x + ${b} = ${b} + ${c}x`, 1,b,c,b); },
    () => { const a=ri(4,9), k=ri(1,5), r=ri(2,6), s=ri(1,4), t=ri(2,5); return makeA101(`${a}(x - ${k}) + x = ${r}(${s} - ${t}x)`, a+1,-a*k,-r*t,r*s, [`${a}x - ${a*k} + x = ${r*s} - ${r*t}x`, `${lin(a+1,-a*k)} = ${lin(-r*t,r*s)}`], ["effectuer", "réduire"]); },
    () => { const a=ri(2,6), b=ri(1,6), c=ri(1,4), d=ri(1,6); return makeA101(`${a}x - ${b} + x = ${c}x - ${d} + ${a+1-c}x${cn(b-d)}`, a+1,-b,a+1,-b, [`${lin(a+1,-b)} = ${lin(a+1,-b)}`], ["réduire"]); },
    () => { const a=ri(2,5), b=ri(1,5), m=ri(2,4), add=ri(1,8), c=ri(2,5), d=ri(2,5), r=ri(1,10); return makeA101(`(${a}x - ${b}) · ${m} + ${add} = ${c}x · ${d} + ${r}`, a*m, -b*m+add, c*d, r, [`${a*m}x - ${b*m} + ${add} = ${c*d}x + ${r}`, `${lin(a*m,-b*m+add)} = ${lin(c*d,r)}`], ["effectuer", "réduire"]); },
    () => { const b=ri(5,15), d=-ri(20,60); return makeA101(`x - ${b} = ${d}`, 1,-b,0,d); },
    () => { const a=ri(4,9), c=ri(1,a-2), b=-ri(1,9), d=-ri(1,12); return makeA101(`${a}x${cn(b)} = ${d} + ${c}x`, a,b,c,d); },
    () => { const a=ri(2,7), k=ri(2,9); return makeA101(`${a}(x + ${k}) = ${a}x + ${a*k}`, a,a*k,a,a*k, [`${a}x + ${a*k} = ${a}x + ${a*k}`], ["effectuer"]); },
    () => { const a=ri(2,8), c=ri(a+1,a+7); return makeA101(`${a}x = ${c}x`, a,0,c,0); },
    () => { const c=ri(2,9), x=ri(1,7), b=ri(1,12); return makeA101(`${c*x-b} = ${c}x - ${b}`, 0,c*x-b,c,-b); },
    () => { const a=ri(2,6), k=ri(2,8), add=ri(1,5), d=-a*k+add-ri(1,5); return makeA101(`${a}(x - ${k}) + ${add} = x${cn(d)} + ${a-1}x`, a,-a*k+add,a,d, [`${a}x - ${a*k} + ${add} = ${a}x${cn(d)}`, `${lin(a,-a*k+add)} = ${lin(a,d)}`], ["effectuer", "réduire"]); },
    () => { const p=ri(3,7), q=ri(2,8), r=ri(2,6), c=ri(1,10), b=-ri(1,6), d=ri(1,15); return makeA101(`${p} · ${q}x + ${r}x · 2${cn(b)} = ${d} + ${c}x`, p*q+r*2,b,c,d, [`${p*q}x + ${r*2}x${cn(b)} = ${d} + ${c}x`, `${lin(p*q+r*2,b)} = ${lin(c,d)}`], ["effectuer", "réduire"]); },
    () => { const m=ri(2,10), n=ri(2,5), a=ri(2,5), k=ri(1,7), add=ri(1,8); return makeA101(`${m} · ${n} - ${a} · ${k}x = ${a}(x - ${k}) + ${add}`, -a*k,m*n,a,add-a*k, [`${m*n} - ${a*k}x = ${a}x - ${a*k} + ${add}`, `${lin(-a*k,m*n)} = ${lin(a,add-a*k)}`], ["effectuer", "réduire"]); },
  ];
  const fixedA102: EquationQuestion[] = [
    { expr: "4x · 3 - 2(x + 1) = 5x - 3 + x", solution: rat(-1, 4), development: ["12x - 2x - 2 = 6x - 3", "10x - 2 = 6x - 3", "4x - 2 = -3", "4x = -1", "x = -1/4", "S = {-1/4}"], operations: ["effectuer", "réduire", "- 6x", "+ 2", ": 4", ""] },
    { expr: "7 - (8 - 2x) = 7x + (2x - 1) · 3", solution: rat(2, 11), development: ["7 - 8 + 2x = 7x + 6x - 3", "-1 + 2x = 13x - 3", "-1 - 11x = -3", "-11x = -2", "x = 2/11", "S = {2/11}"], operations: ["effectuer", "réduire", "- 13x", "+ 1", ": (-11)", ""] },
    { expr: "8x + x + x + 2x = (x - 2) - (x + 3)", solution: rat(-5, 12), development: ["12x = x - 2 - x - 3", "12x = -5", "x = -5/12", "S = {-5/12}"], operations: ["effectuer", "réduire", ": 12", ""] },
    { expr: "5x + (x - 3) · 2 = 3(x - 7) + 4x", solution: { kind: "impossible" }, development: ["5x + 2x - 6 = 3x - 21 + 4x", "7x - 6 = 7x - 21", "-6 = -21", "impossible !", "S = ∅"], operations: ["effectuer", "réduire", "- 7x", "", ""] },
    { expr: "3x² + 4x - 2 = 3x(x - 3) + 1", solution: rat(3, 13), development: ["3x² + 4x - 2 = 3x² - 9x + 1", "4x - 2 = -9x + 1", "13x - 2 = 1", "13x = 3", "x = 3/13", "S = {3/13}"], operations: ["effectuer", "- 3x²", "+ 9x", "+ 2", ": 13", ""] },
    { expr: "5x · 2 - 3x · (-2) + 1 = 10", solution: rat(9, 16), development: ["10x + 6x + 1 = 10", "16x + 1 = 10", "16x = 9", "x = 9/16", "S = {9/16}"], operations: ["effectuer", "réduire", "- 1", ": 16", ""] },
    { expr: "6(x - 3) + 2 · 5 = 3(x - 2) + 3x - 2", solution: { kind: "infinite" }, development: ["6x - 18 + 10 = 3x - 6 + 3x - 2", "6x - 8 = 6x - 8", "-8 = -8", "une infinité de possibilités !", "S = IR"], operations: ["effectuer", "réduire", "- 6x", "", ""] },
    { expr: "4x · (x - 3) - 4x² = (5 + 2x) · 7", solution: rat(-35, 26), development: ["4x² - 12x - 4x² = 35 + 14x", "-12x = 35 + 14x", "-26x = 35", "x = -35/26", "S = {-35/26}"], operations: ["effectuer", "réduire", "- 14x", ": (-26)", ""] },
    { expr: "10x - 3 · (-2x) + 5 = 7x · 3 - 2", solution: rat(7, 5), development: ["10x + 6x + 5 = 21x - 2", "16x + 5 = 21x - 2", "-5x + 5 = -2", "-5x = -7", "x = 7/5", "S = {7/5}"], operations: ["effectuer", "réduire", "- 21x", "- 5", ": (-5)", ""] },
    { expr: "(x - 7) - 2(x + 2) = (x - 3) · 2", solution: rat(-5, 3), development: ["x - 7 - 2x - 4 = 2x - 6", "-x - 11 = 2x - 6", "-3x - 11 = -6", "-3x = 5", "x = -5/3", "S = {-5/3}"], operations: ["effectuer", "réduire", "- 2x", "+ 11", ": (-3)", ""] },
    { expr: "5x · 3 + 2 - x = 7(1 + 2x) - 5", solution: { kind: "infinite" }, development: ["15x + 2 - x = 7 + 14x - 5", "14x + 2 = 2 + 14x", "2 = 2", "une infinité de possibilités !", "S = IR"], operations: ["effectuer", "réduire", "- 14x", ""] },
    { expr: "5x² · 3 · (-4x) + 2 = x(5x + 2)", solution: rat(-1, 5), development: ["5x² + 12x + 2 = 5x² + 2x", "12x + 2 = 2x", "10x + 2 = 0", "10x = -2", "x = -1/5", "S = {-1/5}"], operations: ["effectuer", "- 5x²", "- 2x", "- 2", ": 10", ""] },
    { expr: "(x + 2) · 3 - 1 = x · 3 - 1 - 1", solution: { kind: "impossible" }, development: ["3x + 6 - 1 = 3x - 2", "3x + 5 = 3x - 2", "5 = -2", "impossible !", "S = ∅"], operations: ["effectuer", "réduire", "- 3x", "", ""] },
    { expr: "8x - (3x - 1) + 2 = (x - 3) · 4", solution: rat(-15, 1), development: ["8x - 3x + 1 + 2 = 4x - 12", "5x + 3 = 4x - 12", "x + 3 = -12", "x = -15", "S = {-15}"], operations: ["effectuer", "réduire", "- 4x", "- 3", ""] },
    { expr: "x + x + x - 3 = (x + 2) - (4x - 7)", solution: rat(2, 1), development: ["3x - 3 = x + 2 - 4x + 7", "3x - 3 = -3x + 9", "6x - 3 = 9", "6x = 12", "x = 2", "S = {2}"], operations: ["effectuer", "réduire", "+ 3x", "+ 3", ": 6", ""] },
    { expr: "5(x - 2) + 2(8 + 3x) = 0", solution: rat(-6, 11), development: ["5x - 10 + 16 + 6x = 0", "11x + 6 = 0", "11x = -6", "x = -6/11", "S = {-6/11}"], operations: ["effectuer", "réduire", "- 6", ": 11", ""] },
    { expr: "50 - 3(x - 1) = (4 + 3x) · 2", solution: rat(5, 1), development: ["50 - 3x + 3 = 8 + 6x", "53 - 3x = 8 + 6x", "53 - 9x = 8", "-9x = -45", "x = 5", "S = {5}"], operations: ["effectuer", "réduire", "- 6x", "- 53", ": (-9)", ""] },
    { expr: "3x · 2x - 8 = 7x² + 2 - x(x + 1)", solution: rat(10, 1), development: ["6x² - 8 = 7x² + 2 - x² - x", "6x² - 8 = 6x² + 2 - x", "-8 = 2 - x", "-10 = -x", "x = 10", "S = {10}"], operations: ["effectuer", "réduire", "- 6x²", "- 2", "· (-1)", ""] },
    { expr: "(8 - 3x) - (7 - 3x) = 10", solution: { kind: "impossible" }, development: ["8 - 3x - 7 + 3x = 10", "1 = 10", "impossible !", "S = ∅"], operations: ["effectuer", "réduire", "", ""] },
    { expr: "5 · (-3x) - 3(2 + 4x) = 5(1 - x) + 2x", solution: rat(11, -24), development: ["-15x - 6 - 12x = 5 - 5x + 2x", "-27x - 6 = 5 - 3x", "-24x - 6 = 5", "-24x = 11", "x = -11/24", "S = {-11/24}"], operations: ["effectuer", "réduire", "+ 3x", "+ 6", ": (-24)", ""] },
    { expr: "7 · (-3) + 4 · (-2x) = 5 · (-1) - 3 · (-x)", solution: rat(-16, 11), development: ["-21 - 8x = -5 + 3x", "-21 - 11x = -5", "-11x = 16", "x = -16/11", "S = {-16/11}"], operations: ["effectuer", "- 3x", "+ 21", ": (-11)", ""] },
    { expr: "8 - (2x - 1) - 1 = 7x · 3 + 4", solution: rat(-4, 23), development: ["8 - 2x + 1 - 1 = 21x + 4", "8 - 2x = 21x + 4", "8 - 23x = 4", "-23x = -4", "x = 4/23", "S = {4/23}"], operations: ["effectuer", "réduire", "- 21x", "- 8", ": (-23)", ""] },
    { expr: "10x · 3 + 7 · (2 + x) = 3 · (4 + 10x) + 2 + 7x", solution: { kind: "infinite" }, development: ["30x + 14 + 7x = 12 + 30x + 2 + 7x", "37x + 14 = 14 + 37x", "14 = 14", "une infinité de possibilités !", "S = IR"], operations: ["effectuer", "réduire", "- 37x", "", ""] },
    { expr: "(x - 3) · 10 + 2 = 5 · (2x + 3) - 1", solution: { kind: "impossible" }, development: ["10x - 30 + 2 = 10x + 15 - 1", "10x - 28 = 10x + 14", "-28 = 14", "impossible !", "S = ∅"], operations: ["effectuer", "réduire", "- 10x", "", ""] },
    { expr: "8 - (10 - 3x) = 3(x + 4) - 2", solution: { kind: "impossible" }, development: ["8 - 10 + 3x = 3x + 12 - 2", "-2 + 3x = 3x + 10", "-2 = 10", "impossible !", "S = ∅"], operations: ["effectuer", "réduire", "- 3x", "", ""] },
    { expr: "(x - 7) - (8x + 6) = 3 · (-5x)", solution: rat(13, 8), development: ["x - 7 - 8x - 6 = -15x", "-7x - 13 = -15x", "-13 = -8x", "x = 13/8", "S = {13/8}"], operations: ["effectuer", "réduire", "+ 7x", ": (-8)", ""] },
    { expr: "2x · 3x - x + 2 = 6x(x - 1) + 5x + 2", solution: { kind: "infinite" }, development: ["6x² - x + 2 = 6x² - 6x + 5x + 2", "6x² - x + 2 = 6x² - x + 2", "2 = 2", "une infinité de possibilités !", "S = IR"], operations: ["effectuer", "réduire", "- 6x²", "+ x", ""] },
    { expr: "(x - 2) · (-2) - 4(5 + x) = 0", solution: rat(-8, 3), development: ["-2x + 4 - 20 - 4x = 0", "-6x - 16 = 0", "-6x = 16", "x = -8/3", "S = {-8/3}"], operations: ["effectuer", "réduire", "+ 16", ": (-6)", ""] },
    { expr: "(8x - 2) · 3 - 2(x + 4) = 2 · (-7)", solution: rat(0, 1), development: ["24x - 6 - 2x - 8 = -14", "22x - 14 = -14", "22x = 0", "x = 0", "S = {0}"], operations: ["effectuer", "réduire", "+ 14", ": 22", ""] },
    { expr: "(x - 7) · (-3) - 1 = (x + 2) · 2 + x", solution: rat(8, 3), development: ["-3x + 21 - 1 = 2x + 4 + x", "-3x + 20 = 3x + 4", "-6x + 20 = 4", "-6x = -16", "x = 8/3", "S = {8/3}"], operations: ["effectuer", "réduire", "- 3x", "- 20", ": (-6)", ""] },
    { expr: "3x · 2 - 4 · 5x = 8 - (4 + 5x)", solution: rat(-4, 9), development: ["6x - 20x = 8 - 4 - 5x", "-14x = 4 - 5x", "-9x = 4", "x = -4/9", "S = {-4/9}"], operations: ["effectuer", "réduire", "+ 5x", ": (-9)", ""] },
    { expr: "5x · (-2) - 3x = 2x + 7 - 6x + 3", solution: rat(-10, 9), development: ["-10x - 3x = -4x + 10", "-13x = -4x + 10", "-9x = 10", "x = -10/9", "S = {-10/9}"], operations: ["effectuer", "réduire", "+ 4x", ": (-9)", ""] },
  ];
  if (lesson.submoduleId === "A10-1" && exNum === 1) {
    return { kind: "equation_group", lesson, exNum, questions: [a101Templates[Math.floor(Math.random() * a101Templates.length)]!()] };
  }
  if (lesson.submoduleId === "A10-1" && exNum === 2) {
    return { kind: "equation_group", lesson, exNum, questions: [fixedA102[Math.floor(Math.random() * fixedA102.length)]!] };
  }
  const imp: EquationSolution = { kind: "impossible" };
  const inf: EquationSolution = { kind: "infinite" };
  // Helpers for signed display
  const s = (n: number) => n < 0 ? ` − ${-n}` : ` + ${n}`;  // " + 3" or " − 3"
  const sl = (n: number) => n < 0 ? ` − ${-n}x` : ` + ${n}x`; // " + 3x" or " − 3x"

  type EqGen = () => EquationQuestion;
  const templates: EqGen[] = [
    // 1. ax + b = cx + d  (integer solution, a > c)
    () => { const a=ri(3,8),c=ri(1,a-1),x=ri(1,6),b=ri(1,9),d=(a-c)*x+b; return { expr:`${a}x${s(b)} = ${c}x${s(d)}`, solution:rat(x,1) }; },
    // 2. ax + b = cx + d  (negative x, a < c)
    () => { const c=ri(3,8),a=ri(1,c-1),x=ri(-5,-1),b=ri(2,9),d=(a-c)*x+b; return { expr:`${a}x${s(b)} = ${c}x${s(d)}`, solution:rat(x,1) }; },
    // 3. a(x + b) = cx + d
    () => { const a=ri(2,5),c=ri(1,a-1),x=ri(1,7),b=ri(1,5),d=(a-c)*x+a*b; return { expr:`${a}(x${s(b)}) = ${c}x${s(d)}`, solution:rat(x,1) }; },
    // 4. a(x − b) = cx + d  (negative x possible)
    () => { const a=ri(2,5),c=ri(1,a-1),x=ri(-4,4),b=ri(1,5),d=(a-c)*x-a*b; return { expr:`${a}(x − ${b}) = ${c}x${s(d)}`, solution:rat(x,1) }; },
    // 5. a(x + b) = c(x + d)  → (a−c)x = cd−ab
    () => { const a=ri(3,7),c=ri(1,a-1),b=ri(1,5),d=ri(1,6); const num=c*d-a*b,den=a-c; return { expr:`${a}(x${s(b)}) = ${c}(x${s(d)})`, solution:rat(num,den) }; },
    // 6. a·b·x + c = dx + e  (product shown)
    () => { const a=ri(2,4),b=ri(2,4),c=ri(1,9),d=ri(1,a*b-1),x=ri(1,6),e=(a*b-d)*x+c; return { expr:`${a}·${b}·x${s(c)} = ${d}x${s(e)}`, solution:rat(x,1) }; },
    // 7. ax + b(x + c) = d(x + e)  (multi-paren)
    () => { const a=ri(2,5),b=ri(2,4),c=ri(1,5),d=ri(1,a+b-1),e=ri(1,6); const num=d*e-b*c,den=a+b-d; return { expr:`${a}x${sl(b)}(x${s(c)}) = ${d}(x${s(e)})`, solution: den===0?(num===0?inf:imp):rat(num,den) }; },
    // 8. a - b(x + c) = d(x + e)  (subtract distribution)
    () => { const a=ri(5,15),b=ri(2,4),c=ri(1,4),d=ri(1,4),e=ri(1,4); const num=a-b*c-d*e,den=b+d; return { expr:`${a} − ${b}(x${s(c)}) = ${d}(x${s(e)})`, solution:rat(num,den) }; },
    // 9. "fake quadratic" ax(x + b) = ax² + cx + d  (x² cancels)
    () => { const a=ri(2,4),b=ri(2,5),c=ri(1,a*b-1),d=ri(1,8); const num=d,den=a*b-c; return { expr:`${a}x(x${s(b)}) = ${a}x²${sl(c)}${s(d)}`, solution: den===0?(d===0?inf:imp):rat(num,den) }; },
    // 10. ax² + bx + c = ax(x + d) + e  (x² cancels)
    () => { const a=ri(2,4),b=ri(3,8),d=ri(1,b-1),c=ri(1,8),e=ri(1,8); const num=e-c,den=b-a*d; return { expr:`${a}x²${sl(b)}${s(c)} = ${a}x(x${s(d)})${s(e)}`, solution: den===0?(num===0?inf:imp):rat(num,den) }; },
    // 11. Impossible: ax + b = ax + c  (b ≠ c)
    () => { const a=ri(2,7),b=ri(1,9); let c=ri(1,9); while(c===b) c=ri(1,9); return { expr:`${a}x${s(b)} = ${a}x${s(c)}`, solution:imp }; },
    // 12. Impossible disguised: a(x + b) = ax + c (c ≠ ab)
    () => { const a=ri(2,5),b=ri(2,6); let c=ri(1,20); while(c===a*b) c=ri(1,20); return { expr:`${a}(x${s(b)}) = ${a}x${s(c)}`, solution:imp }; },
    // 13. Infinite: a(x + b) = ax + ab
    () => { const a=ri(2,5),b=ri(2,8); return { expr:`${a}(x${s(b)}) = ${a}x${s(a*b)}`, solution:inf }; },
    // 14. Infinite: ax + bx = (a+b)x
    () => { const a=ri(2,6),b=ri(1,4); return { expr:`${a}x${sl(b)} = ${a+b}x`, solution:inf }; },
    // 15. b = ax + c  (reverse form, x positive)
    () => { const a=ri(2,6),c=ri(1,8),x=ri(1,7),B=a*x+c; return { expr:`${B} = ${a}x${s(c)}`, solution:rat(x,1) }; },
    // 16. ax·b + cx = d  (product notation, x positive)
    () => { const a=ri(2,4),b=ri(2,3),c=ri(1,5),x=ri(1,4); return { expr:`${a}·${b}·x${sl(c)} = ${a*b*x+c*x}`, solution:rat(1,1) /* recomputed below */ }; },
    // 17. a + bx = c(x + d)  → a+bx = cx+cd → (b-c)x = cd-a
    () => { const a=ri(2,10),b=ri(3,8),c=ri(1,b-1),d=ri(1,6); const num=c*d-a,den=b-c; return { expr:`${a}${sl(b)} = ${c}(x${s(d)})`, solution: den===0?(num===0?inf:imp):rat(num,den) }; },
    // 18. Simple: ax − b = c  (integer x positive)
    () => { const a=ri(2,7),b=ri(1,9),x=ri(1,8),c=a*x-b; return { expr:`${a}x − ${b} = ${c}`, solution:rat(x,1) }; },
    // 19. Simple: ax + b = c  (integer x negative)
    () => { const a=ri(2,6),b=ri(5,15),x=ri(-5,-1),c=a*x+b; return { expr:`${a}x${s(b)} = ${c}`, solution:rat(x,1) }; },
    // 20. ax + b(x − c) = d  (two terms, combine)
    () => { const a=ri(2,5),b=ri(2,4),c=ri(1,4),x=ri(-4,6); return { expr:`${a}x${sl(b)}(x − ${c}) = ${(a+b)*x-b*c}`, solution:rat(x,1) }; },
  ];

  // Fix template 16 properly
  templates[15] = () => {
    const a=ri(2,4),b=ri(2,3),c=ri(1,5),x=ri(1,6),d=a*b*x+c*x;
    return { expr:`${a}·${b}x${sl(c)} = ${d}`, solution:rat(x,1) };
  };

  const shuffled = [...templates.keys()].sort(() => Math.random() - 0.5);
  const questions: EquationQuestion[] = [];
  for (const idx of shuffled) {
    if (questions.length >= 5) break;
    for (let t = 0; t < 15; t++) {
      const q = templates[idx]!();
      if (q.solution.kind !== "rational" || (Math.abs(q.solution.num) < 500 && Math.abs(q.solution.den) < 50)) {
        questions.push(q);
        break;
      }
    }
  }
  // Ensure at least 5 (fallback: simple equations)
  while (questions.length < 5) {
    const a=ri(2,6),b=ri(1,9),x=ri(1,8);
    questions.push({ expr:`${a}x${s(b)} = ${a*x+b}`, solution:rat(x,1) });
  }
  return { kind: "equation_group", lesson, questions };
}

// ── Fraction equation group (A10.2) ───────────────────────────────────────
function genFracEquationGroupStep(lesson: MathSubmoduleLesson, exNum = 1): EquationGroupStep {
  function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
  function rat(n: number, d: number): EquationSolution {
    if (d === 0) return { kind: "impossible" };
    if (d < 0) { n = -n; d = -d; }
    const g = gcd(Math.abs(n), d);
    return { kind: "rational", num: n / g, den: d / g };
  }
  const f = (num: string, den: string) => `[[frac:${num}/${den}]]`;
  const question = (expr: string, solution: EquationSolution, development: string[], operations: string[] = []): EquationQuestion =>
    ({ expr, solution, development, operations });
  const commonOps = (mult: number, more: string[]) => [
    "même dénominateur",
    `· ${mult}\n(«explosion de fractions»)`,
    "réduire",
    ...more,
  ];
  const templates: EquationQuestion[] = [
    question(`- ${f("x", "2")} + ${f("3", "5")} = ${f("1", "3")} x - ${f("5", "2")}`, rat(93, 25), [
      `${f("-15x", "30")} + ${f("18", "30")} = ${f("10x", "30")} - ${f("75", "30")}`,
      "-15x + 18 = 10x - 75", "-25x + 18 = -75", "-25x = -93", `x = ${f("93", "25")}`, `S = {${f("93", "25")}}`,
    ], commonOps(30, ["- 10x", "- 18", ": 25", ""])),
    question(`${f("x - 7", "3")} - 1 = ${f("2x + 2", "5")}`, rat(-56, 1), [
      `${f("5x - 35", "15")} - ${f("15", "15")} = ${f("6x + 6", "15")}`,
      "5x - 35 - 15 = 6x + 6", "5x - 50 = 6x + 6", "-x - 50 = 6", "-x = 56", "x = -56", "S = {-56}",
    ], commonOps(15, ["- 6x", "+ 50", "· (-1)", ""])),
    question(`${f("2x - 3", "2")} - ${f("2 - 4x", "7")} = 0`, rat(25, 22), [
      `${f("14x - 21", "14")} - ${f("4 - 8x", "14")} = ${f("0", "14")}`,
      "14x - 21 - 4 + 8x = 0", "22x - 25 = 0", "22x = 25", `x = ${f("25", "22")}`, `S = {${f("25", "22")}}`,
    ], commonOps(14, ["+ 25", ": 22", ""])),
    question(`${f("3", "4")} x - ${f("x", "2")} = 6`, rat(24, 1), [
      `${f("3x", "4")} - ${f("2x", "4")} = ${f("24", "4")}`,
      "3x - 2x = 24", "x = 24", "S = {24}",
    ], commonOps(4, [""])),
    question(`${f("5 - 7x", "9")} + ${f("1", "2")} = ${f("x", "4")}`, rat(38, 37), [
      `${f("20 - 28x", "36")} + ${f("18", "36")} = ${f("9x", "36")}`,
      "20 - 28x + 18 = 9x", "38 - 28x = 9x", "38 = 37x", `x = ${f("38", "37")}`, `S = {${f("38", "37")}}`,
    ], commonOps(36, ["+ 28x", ": 37", ""])),
    question(`8x + ${f("3", "5")} = 7 - ${f("8 - 3x", "6")}`, rat(152, 225), [
      `${f("240x", "30")} + ${f("18", "30")} = ${f("210", "30")} - ${f("40 - 15x", "30")}`,
      "240x + 18 = 210 - 40 + 15x", "240x + 18 = 170 + 15x", "225x + 18 = 170", "225x = 152", `x = ${f("152", "225")}`, `S = {${f("152", "225")}}`,
    ], commonOps(30, ["- 15x", "- 18", ": 225", ""])),
    question(`1 - ${f("2x + 3", "2")} = ${f("5", "2")}`, rat(-3, 1), [
      `${f("2", "2")} - ${f("2x + 3", "2")} = ${f("5", "2")}`,
      "2 - 2x - 3 = 5", "-1 - 2x = 5", "-2x = 6", "x = -3", "S = {-3}",
    ], commonOps(2, ["+ 1", ": (-2)", ""])),
    question(`10 = ${f("3", "4")} - ${f("8x - 3", "5")}`, rat(-173, 32), [
      `${f("200", "20")} = ${f("15", "20")} - ${f("32x - 12", "20")}`,
      "200 = 15 - 32x + 12", "200 = 27 - 32x", "173 = -32x", `x = ${f("-173", "32")}`, `S = {${f("-173", "32")}}`,
    ], commonOps(20, ["- 27", ": -32", ""])),
    question(`6x - ${f("8 - x", "2")} = ${f("x + 3", "3")} - 1`, rat(24, 37), [
      `${f("36x", "6")} - ${f("24 - 3x", "6")} = ${f("2x + 6", "6")} - ${f("6", "6")}`,
      "36x - 24 + 3x = 2x + 6 - 6", "39x - 24 = 2x", "-24 = -37x", `x = ${f("24", "37")}`, `S = {${f("24", "37")}}`,
    ], commonOps(6, ["- 39x", ": (-37)", ""])),
    question(`${f("x - 7", "3")} = ${f("x + 2", "9")}`, rat(23, 2), [
      `${f("3x - 21", "9")} = ${f("x + 2", "9")}`,
      "3x - 21 = x + 2", "2x - 21 = 2", "2x = 23", `x = ${f("23", "2")}`, `S = {${f("23", "2")}}`,
    ], commonOps(9, ["- x", "+ 21", ": 2", ""])),
    question(`5x - ${f("1", "7")} x = ${f("3", "4")} x + 2`, rat(56, 115), [
      `${f("140x", "28")} - ${f("4x", "28")} = ${f("21x", "28")} + ${f("56", "28")}`,
      "140x - 4x = 21x + 56", "115x = 56", `x = ${f("56", "115")}`, `S = {${f("56", "115")}}`,
    ], commonOps(28, ["- 21x", ": 115", ""])),
    question(`${f("6x - 7", "3")} = -x + ${f("2", "11")}`, rat(83, 99), [
      `${f("66x - 77", "33")} = ${f("-33x", "33")} + ${f("6", "33")}`,
      "66x - 77 = -33x + 6", "99x - 77 = 6", "99x = 83", `x = ${f("83", "99")}`, `S = {${f("83", "99")}}`,
    ], commonOps(33, ["+ 33x", "+ 77", ": 99", ""])),
    question(`${f("x - 7", "7")} - ${f("-8 + 2x", "6")} = ${f("1", "2")} x`, rat(14, 29), [
      `${f("6x - 42", "42")} - ${f("-56 + 14x", "42")} = ${f("21x", "42")}`,
      "6x - 42 + 56 - 14x = 21x", "-8x + 14 = 21x", "14 = 29x", `x = ${f("14", "29")}`, `S = {${f("14", "29")}}`,
    ], commonOps(42, ["+ 8x", ": 29", ""])),
    question(`6 = 8 + ${f("5 - 3x", "3")}`, rat(11, 3), [
      `${f("18", "3")} = ${f("24", "3")} + ${f("5 - 3x", "3")}`,
      "18 = 24 + 5 - 3x", "18 = 29 - 3x", "-11 = -3x", `x = ${f("11", "3")}`, `S = {${f("11", "3")}}`,
    ], commonOps(3, ["- 29", ": (-3)", ""])),
    question(`${f("8", "7")} - ${f("1", "2")} x = ${f("3", "7")} - ${f("3", "2")} x`, rat(-5, 7), [
      `${f("16", "14")} - ${f("7x", "14")} = ${f("6", "14")} - ${f("21x", "14")}`,
      "16 - 7x = 6 - 21x", "16 + 14x = 6", "14x = -10", `x = ${f("-5", "7")}`, `S = {${f("-5", "7")}}`,
    ], commonOps(14, ["+ 21x", "- 16", ": 14", ""])),
    question(`${f("x - 1", "3")} = ${f("7 - 3x", "10")}`, rat(31, 19), [
      `${f("10x - 10", "30")} = ${f("21 - 9x", "30")}`,
      "10x - 10 = 21 - 9x", "19x - 10 = 21", "19x = 31", `x = ${f("31", "19")}`, `S = {${f("31", "19")}}`,
    ], commonOps(30, ["+ 9x", "+ 10", ": 19", ""])),
    question(`5x - ${f("3", "8")} = ${f("1", "3")} + x`, rat(17, 96), [
      `${f("120x", "24")} - ${f("9", "24")} = ${f("8", "24")} + ${f("24x", "24")}`,
      "120x - 9 = 8 + 24x", "96x - 9 = 8", "96x = 17", `x = ${f("17", "96")}`, `S = {${f("17", "96")}}`,
    ], commonOps(24, ["- 24x", "+ 9", ": 96", ""])),
    question(`${f("5x - 3", "2")} = ${f("x + 7", "8")}`, rat(1, 1), [
      `${f("20x - 12", "8")} = ${f("x + 7", "8")}`,
      "20x - 12 = x + 7", "19x - 12 = 7", "19x = 19", "x = 1", "S = {1}",
    ], commonOps(8, ["- x", "+ 12", ": 19", ""])),
    question(`7 - ${f("2x + 3", "5")} = ${f("1", "4")} x + 2`, rat(88, 13), [
      `${f("140", "20")} - ${f("8x + 12", "20")} = ${f("5x", "20")} + ${f("40", "20")}`,
      "140 - 8x - 12 = 5x + 40", "128 - 8x = 5x + 40", "128 - 13x = 40", "-13x = -88", `x = ${f("88", "13")}`, `S = {${f("88", "13")}}`,
    ], commonOps(20, ["- 5x", "- 128", ": (-13)", ""])),
    question(`5x - 3 = ${f("1", "2")} + 2x`, rat(7, 6), [
      `${f("10x", "2")} - ${f("6", "2")} = ${f("1", "2")} + ${f("4x", "2")}`,
      "10x - 6 = 1 + 4x", "6x - 6 = 1", "6x = 7", `x = ${f("7", "6")}`, `S = {${f("7", "6")}}`,
    ], commonOps(2, ["- 4x", "+ 6", ": 6", ""])),
    question(`${f("8", "5")} - ${f("3", "2")} x = 7 + 5x`, rat(-54, 65), [
      `${f("16", "10")} - ${f("15x", "10")} = ${f("70", "10")} + ${f("50x", "10")}`,
      "16 - 15x = 70 + 50x", "16 - 65x = 70", "-65x = 54", `x = ${f("-54", "65")}`, `S = {${f("-54", "65")}}`,
    ], commonOps(10, ["- 50x", "- 16", ": (-65)", ""])),
    question(`${f("3", "7")} - ${f("x + 2", "2")} = ${f("1", "4")} x`, rat(-16, 21), [
      `${f("12", "28")} - ${f("14x + 28", "28")} = ${f("7x", "28")}`,
      "12 - 14x - 28 = 7x", "-16 - 14x = 7x", "-16 = 21x", `x = ${f("-16", "21")}`, `S = {${f("-16", "21")}}`,
    ], commonOps(28, ["+ 14x", ": 21", ""])),
    question(`3 - ${f("2x - 7", "3")} = ${f("4", "6")} + x`, rat(14, 5), [
      `${f("18", "6")} - ${f("4x - 14", "6")} = ${f("4", "6")} + ${f("6x", "6")}`,
      "18 - 4x + 14 = 4 + 6x", "32 - 4x = 4 + 6x", "32 - 10x = 4", "-10x = -28", `x = ${f("14", "5")}`, `S = {${f("14", "5")}}`,
    ], commonOps(6, ["- 6x", "- 32", ": (-10)", ""])),
    question(`${f("5", "2")} - 2x = 6x + ${f("3", "5")}`, rat(19, 80), [
      `${f("25", "10")} - ${f("20x", "10")} = ${f("60x", "10")} + ${f("6", "10")}`,
      "25 - 20x = 60x + 6", "25 - 80x = 6", "-80x = -19", `x = ${f("19", "80")}`, `S = {${f("19", "80")}}`,
    ], commonOps(10, ["- 60x", "- 25", ": (-80)", ""])),
    question(`${f("4", "3")} x + 2 = 5x`, rat(6, 11), [
      `${f("4x", "3")} + ${f("6", "3")} = ${f("15x", "3")}`,
      "4x + 6 = 15x", "-11x + 6 = 0", "-11x = -6", `x = ${f("6", "11")}`, `S = {${f("6", "11")}}`,
    ], commonOps(3, ["- 15x", "- 6", ": (-11)", ""])),
    question(`${f("7x - 2", "3")} + ${f("1", "4")} = 2`, rat(29, 28), [
      `${f("28x - 8", "12")} + ${f("3", "12")} = ${f("24", "12")}`,
      "28x - 8 + 3 = 24", "28x - 5 = 24", "28x = 29", `x = ${f("29", "28")}`, `S = {${f("29", "28")}}`,
    ], commonOps(12, ["+ 5", ": 28", ""])),
    question(`4 - ${f("1", "5")} x = ${f("2", "3")} + x`, rat(25, 9), [
      `${f("60", "15")} - ${f("3x", "15")} = ${f("10", "15")} + ${f("15x", "15")}`,
      "60 - 3x = 10 + 15x", "60 - 18x = 10", "-18x = -50", `x = ${f("25", "9")}`, `S = {${f("25", "9")}}`,
    ], commonOps(15, ["- 15x", "- 60", ": (-18)", ""])),
    question(`${f("8", "3")} - ${f("5 - 3x", "2")} = ${f("2", "5")}`, rat(7, 45), [
      `${f("80", "30")} - ${f("75 - 45x", "30")} = ${f("12", "30")}`,
      "80 - 75 + 45x = 12", "5 + 45x = 12", "45x = 7", `x = ${f("7", "45")}`, `S = {${f("7", "45")}}`,
    ], commonOps(30, ["- 5", ": 45", ""])),
    question(`8 - ${f("2", "3")} x = - ${f("1", "2")} x + 4`, rat(24, 1), [
      `${f("48", "6")} - ${f("4x", "6")} = ${f("-3x", "6")} + ${f("24", "6")}`,
      "48 - 4x = -3x + 24", "48 - x = 24", "-x = -24", "x = 24", "S = {24}",
    ], commonOps(6, ["+ 3x", "- 48", "· (-1)", ""])),
    question(`${f("x - 2", "3")} + ${f("2x - 3", "5")} = 1`, rat(34, 11), [
      `${f("5x - 10", "15")} + ${f("6x - 9", "15")} = ${f("15", "15")}`,
      "5x - 10 + 6x - 9 = 15", "11x - 19 = 15", "11x = 34", `x = ${f("34", "11")}`, `S = {${f("34", "11")}}`,
    ], commonOps(15, ["+ 19", ": 11", ""])),
  ];
  return { kind: "equation_group", lesson, exNum, questions: [templates[Math.floor(Math.random() * templates.length)]!] };
}

function genSystemEquationStep(lesson: MathSubmoduleLesson): SystemEquationStep {
  const f = (num: string, den: string) => `[[frac:${num}/${den}]]`;
  const acceptPair = (x: string, y: string) => [
    `${x};${y}`, `${x},${y}`, `(${x};${y})`, `(${x},${y})`,
    `{(${x};${y})}`, `{(${x},${y})}`, `s={(${x};${y})}`, `s={(${x},${y})}`,
  ];
  const sys = (
    equations: [string, string],
    answer: string,
    acceptable: string[],
    development: string[],
    operations: string[] = [],
  ): SystemEquationQuestion => ({ equations, answer, acceptable, development, operations });
  const templates: SystemEquationQuestion[] = [
    sys(["3x + y = 1", "5x - 8y = -37"], `{(-1 ; 4)}`, acceptPair("-1", "4"), [
      "isoler y dans I", "3x + y = 1", "y = 1 - 3x", "injecter I → II et résoudre",
      "5x - 8(1 - 3x) = -37", "5x - 8 + 24x = -37", "29x - 8 = -37", "29x = -29", "x = -1", "chercher la valeur de y", "y = 1 - 3x", "y = 1 - 3 · (-1) = 4", "S = {(-1 ; 4)}",
    ], ["", "- 3x", "", "", "effectuer", "réduire", "+ 8", ": 29", "", "", "", ""]),
    sys(["2x - 4y = 26", "7y = -32 - x"], `{(3 ; -5)}`, acceptPair("3", "-5"), [
      "isoler x dans II", "7y = -32 - x", "7y + 32 = -x", "-7y - 32 = x", "injecter II → I et résoudre",
      "2(-7y - 32) - 4y = 26", "-14y - 64 - 4y = 26", "-18y - 64 = 26", "-18y = 90", "y = -5", "chercher la valeur de x", "-7y - 32 = x", "x = -7 · (-5) - 32 = 3", "S = {(3 ; -5)}",
    ], ["", "+ 32", "· (-1)", "", "", "effectuer", "réduire", "+ 64", ": (-18)", "", "", ""]),
    sys(["3x - y = -22", "5x + 3y = -46"], `{(-8 ; -2)}`, acceptPair("-8", "-2"), [
      "isoler y dans I", "3x - y = -22", "-y = -22 - 3x", "y = 22 + 3x", "injecter I → II et résoudre",
      "5x + 3(22 + 3x) = -46", "5x + 66 + 9x = -46", "14x + 66 = -46", "14x = -112", "x = -8", "chercher la valeur de y", "y = 22 + 3x", "y = 22 + 3 · (-8) = -2", "S = {(-8 ; -2)}",
    ], ["", "- 3x", "· (-1)", "", "", "effectuer", "réduire", "- 66", ": 14", "", "", ""]),
    sys(["4x + 4y = 28", "x - (-2y) = 14"], `{(0 ; 7)}`, acceptPair("0", "7"), [
      "isoler x dans II", "x + 2y = 14", "x = 14 - 2y", "injecter II → I et résoudre",
      "4(14 - 2y) + 4y = 28", "56 - 8y + 4y = 28", "56 - 4y = 28", "-4y = -28", "y = 7", "chercher la valeur de x", "x = 14 - 2y", "x = 14 - 2 · 7 = 0", "S = {(0 ; 7)}",
    ], ["", "- 2y", "", "", "effectuer", "réduire", "- 56", ": (-4)", "", "", ""]),
    sys(["8y - 5x = 10", "10 - y = 4x + 3"], `{(${f("46", "37")} ; ${f("75", "37")})}`, acceptPair("46/37", "75/37"), [
      "isoler y dans II", "10 - y = 4x + 3", "-y = 4x - 7", "y = -4x + 7", "injecter II → I et résoudre",
      "8(-4x + 7) - 5x = 10", "-32x + 56 - 5x = 10", "-37x + 56 = 10", "-37x = -46", `x = ${f("46", "37")}`, "chercher la valeur de y",
      "y = -4x + 7", `y = -4 · ${f("46", "37")} + 7 = ${f("75", "37")}`, `S = {(${f("46", "37")} ; ${f("75", "37")})}`,
    ], ["", "- 10", "· (-1)", "", "", "effectuer", "réduire", "- 56", ": (-37)", "", ""]),
    sys(["5x + 10 = y", "-4y + 40 = -20x"], `IR`, ["ir", "s=ir", "infini", "infinité"], [
      "y est déjà isolé dans I", "injecter I → II et résoudre", "-4(5x + 10) + 40 = -20x", "-20x - 40 + 40 = -20x", "-20x = -20x", "0 = 0", "infinité de possibilités !", "S = IR",
    ], ["", "", "effectuer", "réduire", "+ 20x", "", ""]),
    sys(["15 - 3y = 5x + 2", "8y + 7 = 12 - x"], `{(${f("89", "37")} ; ${f("12", "37")})}`, acceptPair("89/37", "12/37"), [
      "isoler x dans II", "8y + 7 = 12 - x", "8y - 5 = -x", "-8y + 5 = x", "injecter II → I et résoudre",
      "15 - 3y = 5(-8y + 5) + 2", "15 - 3y = -40y + 25 + 2", "15 + 37y = 27", "37y = 12", `y = ${f("12", "37")}`,
      "chercher la valeur de x", "x = -8y + 5", `x = -8 · ${f("12", "37")} + 5 = ${f("89", "37")}`, `S = {(${f("89", "37")} ; ${f("12", "37")})}`,
    ], ["", "- 12", "· (-1)", "", "", "effectuer", "réduire", "- 15", ": 37", "", ""]),
    sys(["3(y - 7) = 12 + x", "5(x + 1) = 3y + 2"], `{(${f("15", "2")} ; ${f("27", "2")})}`, acceptPair("15/2", "27/2"), [
      "tout d'abord, effectuer", "I   3y - 21 = 12 + x", "II  5x + 5 = 3y + 2", "isoler x dans I", "3y - 21 = 12 + x", "3y - 33 = x", "injecter I → II et résoudre",
      "5(3y - 33) + 5 = 3y + 2", "15y - 165 + 5 = 3y + 2", "12y - 160 = 2", "12y = 162", `y = ${f("27", "2")}`, "chercher la valeur de x", "x = 3y - 33", `x = 3 · ${f("27", "2")} - 33 = ${f("15", "2")}`, `S = {(${f("15", "2")} ; ${f("27", "2")})}`,
    ], ["", "", "", "", "- 12", "", "", "effectuer", "- 3y", "+ 160", ": 12", "", ""]),
    sys(["x - 7 = 8 + 3y", "2y - 5x = 10"], `{(${f("-60", "13")} ; ${f("-85", "13")})}`, acceptPair("-60/13", "-85/13"), [
      "isoler x dans I", "x - 7 = 8 + 3y", "x = 15 + 3y", "injecter I → II et résoudre", "2y - 5(15 + 3y) = 10", "2y - 75 - 15y = 10", "-13y - 75 = 10", "-13y = 85", `y = ${f("-85", "13")}`,
      "chercher la valeur de x", "x = 15 + 3y", `x = 15 + 3 · ${f("-85", "13")} = ${f("-60", "13")}`, `S = {(${f("-60", "13")} ; ${f("-85", "13")})}`,
    ], ["", "+ 7", "", "", "effectuer", "réduire", "+ 75", ": -13", "", ""]),
    sys(["2x + 3y = 10", "8x = y - 7"], `{(${f("-11", "26")} ; ${f("47", "13")})}`, acceptPair("-11/26", "47/13"), [
      "isoler y dans II", "8x = y - 7", "8x + 7 = y", "injecter II → I et résoudre", "2x + 3(8x + 7) = 10", "2x + 24x + 21 = 10", "26x + 21 = 10", "26x = -11", `x = ${f("-11", "26")}`,
      "chercher la valeur de y", "8x + 7 = y", `8 · ${f("-11", "26")} + 7 = y`, `y = ${f("47", "13")}`, `S = {(${f("-11", "26")} ; ${f("47", "13")})}`,
    ], ["", "+ 7", "", "", "effectuer", "réduire", "- 21", ": 26", "", ""]),
    sys(["4x + 3 = 5 - y", "7y + 1 = 8x + 3"], `{(${f("1", "3")} ; ${f("2", "3")})}`, acceptPair("1/3", "2/3"), [
      "isoler y dans I", "4x + 3 = 5 - y", "4x - 2 = -y", "-4x + 2 = y", "injecter I → II et résoudre", "7(-4x + 2) + 1 = 8x + 3", "-28x + 14 + 1 = 8x + 3", "-28x + 15 = 8x + 3", "-36x + 15 = 3", "-36x = -12", `x = ${f("1", "3")}`,
      "chercher la valeur de y", "-4x + 2 = y", `-4 · ${f("1", "3")} + 2 = y`, `y = ${f("2", "3")}`, `S = {(${f("1", "3")} ; ${f("2", "3")})}`,
    ], ["", "- 5", "· (-1)", "", "", "effectuer", "réduire", "- 8x", "- 15", ": (-36)", ""]),
    sys(["5y + x = 7", "10y = 14 - 2x"], `IR`, ["ir", "s=ir", "infini", "infinité"], [
      "isoler x dans I", "5y + x = 7", "x = 7 - 5y", "injecter II → I et résoudre", "10y = 14 - 2(7 - 5y)", "10y = 14 - 14 + 10y", "10y = 10y", "0 = 0", "infinité de possibilités !", "S = IR",
    ], ["", "- 5y", "", "", "effectuer", "réduire", "- 10y", ""]),
    sys(["y - 7 = 5x + 19", "3x - 8 = 2y + 1"], `{(${f("-61", "7")} ; ${f("-123", "7")})}`, acceptPair("-61/7", "-123/7"), [
      "isoler y dans I", "y - 7 = 5x + 19", "y = 5x + 26", "injecter I → II et résoudre", "3x - 8 = 2(5x + 26) + 1", "3x - 8 = 10x + 52 + 1", "-8 = 7x + 53", "-61 = 7x", `x = ${f("-61", "7")}`,
      "chercher la valeur de y", "y = 5x + 26", `y = 5 · ${f("-61", "7")} + 26 = ${f("-123", "7")}`, `S = {(${f("-61", "7")} ; ${f("-123", "7")})}`,
    ], ["", "+ 7", "", "", "effectuer", "- 3x", "- 53", ": 7", "", ""]),
    sys(["5(x - 7) = 8y + 2", "10 + y = 3(8 - 2x)"], `{(${f("149", "53")} ; ${f("-152", "53")})}`, acceptPair("149/53", "-152/53"), [
      "tout d'abord, effectuer", "I   5x - 35 = 8y + 2", "II  10 + y = 24 - 6x", "isoler y dans II", "10 + y = 24 - 6x", "y = 14 - 6x", "injecter II → I et résoudre",
      "5x - 35 = 8(14 - 6x) + 2", "5x - 35 = 112 - 48x + 2", "53x - 35 = 114", "53x = 149", `x = ${f("149", "53")}`, "chercher la valeur de y", "y = 14 - 6x", `y = 14 - 6 · ${f("149", "53")} = ${f("-152", "53")}`, `S = {(${f("149", "53")} ; ${f("-152", "53")})}`,
    ], ["", "", "", "", "- 10", "", "", "effectuer", "+ 48x", "+ 35", ": 53", ""]),
    sys(["4x + 7y = 10", "x - 9y = 3"], `{(${f("111", "43")} ; ${f("-2", "43")})}`, acceptPair("111/43", "-2/43"), [
      "isoler x dans II", "x - 9y = 3", "x = 3 + 9y", "injecter II → I et résoudre", "4(3 + 9y) + 7y = 10", "12 + 36y + 7y = 10", "43y = -2", `y = ${f("-2", "43")}`,
      "chercher la valeur de x", "x = 3 + 9y", `x = 3 + 9 · ${f("-2", "43")} = ${f("111", "43")}`, `S = {(${f("111", "43")} ; ${f("-2", "43")})}`,
    ], ["", "+ 9y", "", "", "effectuer", "- 12", ": 43", "", ""]),
    sys(["8y - x = 12", "-5x - 65 = -40y"], `impossible`, ["impossible", "s=∅", "vide", "∅"], [
      "isoler x dans I", "8y - x = 12", "-x = 12 - 8y", "x = -12 + 8y", "injecter I → II et résoudre", "-5(-12 + 8y) - 65 = -40y", "60 - 40y - 65 = -40y", "-5 = 0", "impossible !", "S = ∅",
    ], ["", "- 8y", "· (-1)", "", "", "effectuer", "+ 40y", ""]),
    sys(["4y + 5x = 10", "3 - x = 7 + 8y"], `{(${f("8", "3")} ; ${f("-5", "6")})}`, acceptPair("8/3", "-5/6"), [
      "isoler x dans II", "3 - x = 7 + 8y", "-x = 4 + 8y", "x = -4 - 8y", "injecter II → I et résoudre", "4y + 5(-4 - 8y) = 10", "4y - 20 - 40y = 10", "-36y = 30", `y = ${f("-5", "6")}`,
      "chercher la valeur de x", "x = -4 - 8y", `x = -4 - 8 · ${f("-5", "6")} = ${f("8", "3")}`, `S = {(${f("8", "3")} ; ${f("-5", "6")})}`,
    ], ["", "- 3", "· (-1)", "", "", "effectuer", "+ 20", ": (-36)", "", ""]),
    sys(["8x = 24", "5x - 3y = 36"], `{(3 ; -7)}`, acceptPair("3", "-7"), [
      "isoler x dans I", "8x = 24", "x = 3", "injecter I → II et résoudre", "5 · 3 - 3y = 36", "-3y = 21", "y = -7", "S = {(3 ; -7)}",
    ], ["", ": 8", "", "", "- 15", ": (-3)", ""]),
    sys(["8y = 15 + x", "-3x = 45 - 24y"], `IR`, ["ir", "s=ir", "infini", "infinité"], [
      "isoler x dans I", "8y = 15 + x", "8y - 15 = x", "injecter I → II et résoudre", "-3(8y - 15) = 45 - 24y", "-24y + 45 = 45 - 24y", "45 = 45", "infinité de possibilités !", "S = IR",
    ], ["", "- 15", "", "", "effectuer", "+ 24y", ""]),
    sys(["5y - 2x = 3", "10x + y = 7"], `{(${f("8", "13")} ; ${f("11", "13")})}`, acceptPair("8/13", "11/13"), [
      "isoler y dans II", "10x + y = 7", "y = 7 - 10x", "injecter II → I et résoudre", "5(7 - 10x) - 2x = 3", "35 - 50x - 2x = 3", "35 - 52x = 3", "-52x = -32", `x = ${f("8", "13")}`,
      "chercher la valeur de y", "y = 7 - 10x", `y = 7 - 10 · ${f("8", "13")} = ${f("11", "13")}`, `S = {(${f("8", "13")} ; ${f("11", "13")})}`,
    ], ["", "- 10x", "", "", "effectuer", "réduire", "- 35", ": (-52)", "", ""]),
  ];
  return { kind: "system_equation", lesson, exNum: 1, question: templates[Math.floor(Math.random() * templates.length)]! };
}

function genLinearCombinationStep(lesson: MathSubmoduleLesson): SystemEquationStep {
  const f = (num: string, den: string) => `[[frac:${num}/${den}]]`;
  const acceptPair = (x: string, y: string) => [
    `${x};${y}`, `${x},${y}`, `(${x};${y})`, `(${x},${y})`,
    `{(${x};${y})}`, `{(${x},${y})}`, `s={(${x};${y})}`, `s={(${x},${y})}`,
  ];
  const sys = (
    equations: [string, string],
    answer: string,
    acceptable: string[],
    development: string[],
    operations: string[] = [],
  ): SystemEquationQuestion => ({ equations, answer, acceptable, development, operations });

  const templatesA104: SystemEquationQuestion[] = [
    sys(["3x - 2y = 1", "8x + 4y = 68"], `{(5 ; 7)}`, acceptPair("5", "7"), [
      "I · 2", "6x - 4y = 2", "8x + 4y = 68", "14x = 70", "x = 5",
      "dans I", "3 · 5 - 2y = 1", "15 - 2y = 1", "-2y = -14", "y = 7", "S = {(5 ; 7)}",
    ], ["· 2", "", "", ": 14", "", "", "", "- 15", ": (-2)", "", ""]),
    sys(["-5x + 3y = -1", "3x - 5y = 7"], `{(-1 ; -2)}`, acceptPair("-1", "-2"), [
      "I · 3", "-15x + 9y = -3", "II · 5", "15x - 25y = 35", "-16y = 32", "y = -2",
      "dans II", "3x - 5 · (-2) = 7", "3x + 10 = 7", "3x = -3", "x = -1", "S = {(-1 ; -2)}",
    ], ["· 3", "", "· 5", "", ": (-16)", "", "", "", "- 10", ": 3", "", ""]),
    sys(["4x = 40 + 5y", "-2x + 8y = -20"], `{(10 ; 0)}`, acceptPair("10", "0"), [
      "mettre I dans le même ordre", "I : 4x - 5y = 40", "II · 2 : -4x + 16y = -40",
      "11y = 0", "y = 0", "dans I", "4x - 5 · 0 = 40", "4x = 40", "x = 10", "S = {(10 ; 0)}",
    ], ["- 5y", "", "· 2", ": 11", "", "", "", ": 4", "", ""]),
    sys(["-2x - 3y = 19", "7y = -25 + 5x"], `{(-2 ; -5)}`, acceptPair("-2", "-5"), [
      "mettre II dans le même ordre", "II : -5x + 7y = -25", "I · 5 : -10x - 15y = 95",
      "II · 2 : -10x + 14y = -50", "-29y = 145", "y = -5",
      "dans I", "-2x - 3 · (-5) = 19", "-2x + 15 = 19", "-2x = 4", "x = -2", "S = {(-2 ; -5)}",
    ], ["- 5x", "", "· 5", "· 2", ": (-29)", "", "", "", "- 15", ": (-2)", "", ""]),
    sys(["4x + 10y = 7", "20x + y = 2"], `{(13/196 ; 33/49)}`, acceptPair("13/196", "33/49"), [
      "I · 5", "20x + 50y = 35", "II", "20x + y = 2", "49y = 33", "y = [[frac:33/49]]",
      "dans II", "20x + [[frac:33/49]] = 2", "20x = 2 - [[frac:33/49]]", "20x = [[frac:65/49]]",
      "x = [[frac:13/196]]", "S = {([[frac:13/196]] ; [[frac:33/49]])}",
    ], ["· 5", "", "", "", ": 49", "", "", "", "- [[frac:33/49]]", ": 20", "", ""]),
    sys(["4y + 3x = 10", "7y + 2x = 20"], `{(-10/13 ; 40/13)}`, acceptPair("-10/13", "40/13"), [
      "I · 2", "8y + 6x = 20", "II · 3", "21y + 6x = 60", "-13y = -40", "y = [[frac:40/13]]",
      "dans I", "4 · [[frac:40/13]] + 3x = 10", "[[frac:160/13]] + 3x = 10",
      "3x = 10 - [[frac:160/13]]", "3x = [[frac:-30/13]]", "x = [[frac:-10/13]]",
      "S = {([[frac:-10/13]] ; [[frac:40/13]])}",
    ], ["· 2", "", "· 3", "", ": (-13)", "", "", "", "", "- [[frac:160/13]]", ": 3", "", ""]),
    sys(["3y - 2 = 4x + 4", "8x + 7 = 4y - 1"], `{(0 ; 2)}`, acceptPair("0", "2"), [
      "mettre dans le même ordre", "I : -4x + 3y = 6", "II : 8x - 4y = -8",
      "I · 2", "-8x + 6y = 12", "II", "8x - 4y = -8", "2y = 4", "y = 2",
      "dans I", "-4x + 3 · 2 = 6", "-4x = 0", "x = 0", "S = {(0 ; 2)}",
    ], ["", "- 4x / + 2", "- 4y / - 7", "· 2", "", "", "", ": 2", "", "", "- 6", ": (-4)", "", ""]),
    sys(["7y + 1 = 4x - 8", "-12x + 27 = -21y"], `IR`, ["ir", "s=ir", "infini", "infinité"], [
      "mettre dans le même ordre", "I : -4x + 7y = -9", "II : -12x + 21y = -27",
      "I · 3", "-12x + 21y = -27", "II", "-12x + 21y = -27", "0 = 0",
      "infinité de possibilités !", "S = IR",
    ], ["", "- 4x / - 9", "+ 21y / - 27", "· 3", "", "", "", "", ""]),
    sys(["3x + 8y = 1", "5x - 2y = 1"], `{(5/23 ; 1/23)}`, acceptPair("5/23", "1/23"), [
      "I · 5", "15x + 40y = 5", "II · 3", "15x - 6y = 3", "46y = 2", "y = [[frac:1/23]]",
      "dans I", "3x + 8 · [[frac:1/23]] = 1", "3x + [[frac:8/23]] = 1",
      "3x = [[frac:23/23]] - [[frac:8/23]]", "3x = [[frac:15/23]]", "x = [[frac:5/23]]",
      "S = {([[frac:5/23]] ; [[frac:1/23]])}",
    ], ["· 5", "", "· 3", "", ": 46", "", "", "", "", "- [[frac:8/23]]", ": 3", "", ""]),
    sys(["2x + 3y = 4", "15 = -4x - 6y"], `impossible`, ["impossible", "s=∅", "vide", "∅"], [
      "mettre II dans le même ordre", "II : 4x + 6y = -15", "I · 2", "4x + 6y = 8",
      "II", "4x + 6y = -15", "0 = 23", "impossible !", "S = ∅",
    ], ["+ 4x / + 6y / - 15", "", "· 2", "", "", "", "", ""]),
    sys(["7y + 2 = 4x - 3", "4y + 2x = 10"], `{(3 ; 1)}`, acceptPair("3", "1"), [
      "mettre I dans le même ordre", "I : -4x + 7y = -5", "II : 2x + 4y = 10",
      "II · 2", "4x + 8y = 20", "I", "-4x + 7y = -5", "15y = 15", "y = 1",
      "dans I", "-4x + 7 · 1 = -5", "-4x = -12", "x = 3", "S = {(3 ; 1)}",
    ], ["- 4x / - 2", "", "", "· 2", "", "", "", ": 15", "", "", "- 7", ": (-4)", "", ""]),
    sys(["7x - 5y = 10", "3x + 8y = 4"], `{(100/71 ; -2/71)}`, acceptPair("100/71", "-2/71"), [
      "I · 3", "21x - 15y = 30", "II · 7", "21x + 56y = 28", "-71y = 2", "y = [[frac:-2/71]]",
      "dans II", "3x + 8 · ([[frac:-2/71]]) = 4", "3x - [[frac:16/71]] = 4",
      "3x = [[frac:284/71]] + [[frac:16/71]]", "3x = [[frac:300/71]]", "x = [[frac:100/71]]",
      "S = {([[frac:100/71]] ; [[frac:-2/71]])}",
    ], ["· 3", "", "· 7", "", ": (-71)", "", "", "", "", "+ [[frac:16/71]]", ": 3", "", ""]),
    sys(["4x - 10y = 7", "6x - 3y = 8"], `{(59/48 ; -5/24)}`, acceptPair("59/48", "-5/24"), [
      "I · 3", "12x - 30y = 21", "II · 2", "12x - 6y = 16", "-24y = 5", "y = [[frac:-5/24]]",
      "dans I", "4x - 10 · ([[frac:-5/24]]) = 7", "4x + [[frac:25/12]] = 7",
      "4x = [[frac:84/12]] - [[frac:25/12]]", "4x = [[frac:59/12]]", "x = [[frac:59/48]]",
      "S = {([[frac:59/48]] ; [[frac:-5/24]])}",
    ], ["· 3", "", "· 2", "", ": (-24)", "", "", "", "", "- [[frac:25/12]]", ": 4", "", ""]),
    sys(["3(x + 2) = 2y - 5", "4x - 7 = 3(y + 1)"], `{(-53 ; -74)}`, acceptPair("-53", "-74"), [
      "effectuer", "I : 3x - 2y = -11", "II : 4x - 3y = 10",
      "I · 4", "12x - 8y = -44", "II · 3", "12x - 9y = 30", "y = -74",
      "dans I", "3x - 2 · (-74) = -11", "3x + 148 = -11", "3x = -159", "x = -53",
      "S = {(-53 ; -74)}",
    ], ["", "- 2y / - 6", "- 3y / + 7", "· 4", "", "· 3", "", "", "", "", "- 148", ": 3", "", ""]),
    sys(["8y - 3 = 4x + 3", "-2x - 3 = -4y"], `IR`, ["ir", "s=ir", "infini", "infinité"], [
      "mettre dans le même ordre", "I : -4x + 8y = 6", "II : 2x - 4y = 3",
      "II · 2", "4x - 8y = 6", "I", "-4x + 8y = 6", "0 = 0",
      "infinité de possibilités !", "S = IR",
    ], ["- 4x / + 3", "+ 4y / + 3", "", "· 2", "", "", "", "", ""]),
    sys(["5y - 2x = 10", "15 - 7y = 5(x + 8)"], `{(-5 ; 0)}`, acceptPair("-5", "0"), [
      "effectuer", "I : 5y - 2x = 10", "II : -7y - 5x = 25",
      "I · 7", "35y - 14x = 70", "II · 5", "-35y - 25x = 125", "-39x = 195", "x = -5",
      "dans I", "5y - 2 · (-5) = 10", "5y + 10 = 10", "5y = 0", "y = 0", "S = {(-5 ; 0)}",
    ], ["", "", "- 5x / - 15", "· 7", "", "· 5", "", ": (-39)", "", "", "", "- 10", ": 5", "", ""]),
    sys(["10y + 7x - 1 = 0", "40y + 28x - 10 = 0"], `impossible`, ["impossible", "s=∅", "vide", "∅"], [
      "I · 4", "40y + 28x - 4 = 0", "II", "40y + 28x - 10 = 0", "6 = 0", "impossible !", "S = ∅",
    ], ["· 4", "", "", "", "", ""]),
    sys(["(x - 8) · 2 = 10 + 3y", "10x - 7 = 4(3 - 5y)"], `{(577/70 ; -111/35)}`, acceptPair("577/70", "-111/35"), [
      "effectuer", "I : 2x - 16 = 10 + 3y", "II : 10x - 7 = 12 - 20y",
      "I · 5", "10x - 80 = 50 + 15y", "II", "10x - 7 = 12 - 20y", "-73 = 38 + 35y",
      "-111 = 35y", "y = [[frac:-111/35]]", "dans I",
      "2x - 16 = 10 + 3 · ([[frac:-111/35]])", "2x - 16 = [[frac:17/35]]",
      "2x = [[frac:577/35]]", "x = [[frac:577/70]]",
      "S = {([[frac:577/70]] ; [[frac:-111/35]])}",
    ], ["", "", "", "· 5", "", "", "", "- 38", ": 35", "", "", "effectuer", "+ 16", ": 2", "", ""]),
    sys(["3y - 7 = 8x + 1", "5x + 1 = 7y - 5"], `{(-38/41 ; 8/41)}`, acceptPair("-38/41", "8/41"), [
      "mettre dans le même ordre", "I : -8x + 3y = 8", "II : 5x - 7y = -6",
      "I · 5", "-40x + 15y = 40", "II · 8", "40x - 56y = -48", "-41y = -8",
      "y = [[frac:8/41]]", "dans I", "-8x + 3 · [[frac:8/41]] = 8",
      "-8x + [[frac:24/41]] = 8", "-8x = [[frac:304/41]]", "x = [[frac:-38/41]]",
      "S = {([[frac:-38/41]] ; [[frac:8/41]])}",
    ], ["", "- 8x / + 7", "- 7y / - 1", "· 5", "", "· 8", "", ": (-41)", "", "", "", "- [[frac:24/41]]", ": (-8)", "", ""]),
    sys(["8(x - 3) = 4(y + 2)", "5(y - 5) = 2x + 1"], `{(33/4 ; 17/2)}`, acceptPair("33/4", "17/2"), [
      "effectuer", "I : 8x - 4y = 32", "II : -2x + 5y = 26",
      "II · 4", "-8x + 20y = 104", "I", "8x - 4y = 32", "16y = 136", "y = [[frac:17/2]]",
      "dans I", "8x - 4 · [[frac:17/2]] = 32", "8x - 34 = 32", "8x = 66", "x = [[frac:33/4]]",
      "S = {([[frac:33/4]] ; [[frac:17/2]])}",
    ], ["", "- 4y / + 24", "- 2x / + 25", "· 4", "", "", "", ": 16", "", "", "", "+ 34", ": 8", "", ""]),
  ];

  return { kind: "system_equation", lesson, exNum: 1, question: templatesA104[Math.floor(Math.random() * templatesA104.length)]! };

  // All solutions verified by substituting (x₀,y₀) into both original equations.
  const templates: SystemEquationQuestion[] = [
    // ── T1: I·2 + II → 14x=70 → x=5, y=7  (3·5−2·7=1✓  8·5+4·7=68✓) ──────
    sys(["3x − 2y = 1", "8x + 4y = 68"], `{(5 ; 7)}`, acceptPair("5", "7"), [
      "I · 2 :  6x − 4y = 2",
      "II    :  8x + 4y = 68",
      "addition I·2 + II  →  14x = 70",
      "x = 5",
      "dans I : 3(5) − 2y = 1",
      "−2y = 1 − 15 = −14",
      "y = 7",
      "S = {(5 ; 7)}",
    ], ["× 2", "", "I·2 + II", ": 14", "substitution", "effectuer", ": (−2)", ""]),
    // ── T2: I·3 + II·5 → −16y=32 → y=−2, x=−1  (−5·−1+3·−2=−1✓) ───────────
    sys(["−5x + 3y = −1", "3x − 5y = 7"], `{(−1 ; −2)}`, acceptPair("-1", "-2"), [
      "I · 3  : −15x +  9y = −3",
      "II · 5 :  15x − 25y = 35",
      "addition I·3 + II·5  →  −16y = 32",
      "y = −2",
      "dans II : 3x − 5(−2) = 7",
      "3x + 10 = 7",
      "3x = −3",
      "x = −1",
      "S = {(−1 ; −2)}",
    ], ["× 3", "× 5", "I·3 + II·5", ": (−16)", "substitution", "effectuer", "− 10", ": 3", ""]),
    // ── T3: rearrange I, I + II·2 → 11y=0 → y=0, x=10  (4·10=40+5·0✓) ──────
    sys(["4x = 40 + 5y", "−2x + 8y = −20"], `{(10 ; 0)}`, acceptPair("10", "0"), [
      "remettre I en forme : 4x − 5y = 40",
      "I        :  4x − 5y = 40",
      "II · 2   : −4x + 16y = −40",
      "addition I + II·2  →  11y = 0",
      "y = 0",
      "dans I : 4x − 5(0) = 40",
      "x = 10",
      "S = {(10 ; 0)}",
    ], ["forme std", "", "× 2", "I + II·2", ": 11", "substitution", ": 4", ""]),
    // ── T4: rearrange II, I·5 − II·2 → −29y=145 → y=−5, x=−2  (verified) ───
    sys(["−2x − 3y = 19", "7y = −25 + 5x"], `{(−2 ; −5)}`, acceptPair("-2", "-5"), [
      "remettre II en forme : −5x + 7y = −25",
      "I · 5  : −10x − 15y = 95",
      "II · 2 : −10x + 14y = −50",
      "I·5 − II·2  →  −29y = 145",
      "y = −5",
      "dans I : −2x − 3(−5) = 19",
      "−2x + 15 = 19",
      "−2x = 4",
      "x = −2",
      "S = {(−2 ; −5)}",
    ], ["forme std", "× 5", "× 2", "I·5 − II·2", ": (−29)", "substitution", "effectuer", "− 15", ": (−2)", ""]),
    // ── T5: I + II → 2x=6 → x=3, y=2  (3+2=5✓  3−2=1✓) ────────────────────
    sys(["x + y = 5", "x − y = 1"], `{(3 ; 2)}`, acceptPair("3", "2"), [
      "I  :  x + y = 5",
      "II :  x − y = 1",
      "addition I + II  →  2x = 6",
      "x = 3",
      "dans I : 3 + y = 5",
      "y = 2",
      "S = {(3 ; 2)}",
    ], ["", "", "I + II", ": 2", "substitution", "− 3", ""]),
    // ── T6: I·3 + II → 7x=14 → x=2, y=3  (2·2+3=7✓  2−3·3=−7✓) ────────────
    sys(["2x + y = 7", "x − 3y = −7"], `{(2 ; 3)}`, acceptPair("2", "3"), [
      "I · 3 :  6x + 3y = 21",
      "II    :   x − 3y = −7",
      "addition I·3 + II  →  7x = 14",
      "x = 2",
      "dans I : 2(2) + y = 7",
      "y = 3",
      "S = {(2 ; 3)}",
    ], ["× 3", "", "I·3 + II", ": 7", "substitution", "− 4", ""]),
    // ── T7: I·2 − II → 5x=10 → x=2, y=1  (3·2+2·1=8✓  2+4·1=6✓) ───────────
    sys(["3x + 2y = 8", "x + 4y = 6"], `{(2 ; 1)}`, acceptPair("2", "1"), [
      "I · 2 :  6x + 4y = 16",
      "II    :   x + 4y = 6",
      "soustraction I·2 − II  →  5x = 10",
      "x = 2",
      "dans II : 2 + 4y = 6",
      "4y = 4",
      "y = 1",
      "S = {(2 ; 1)}",
    ], ["× 2", "", "I·2 − II", ": 5", "substitution", "− 2", ": 4", ""]),
    // ── T8: II·3 + I → 17x=34 → x=2, y=3  (2·2+3·3=13✓  5·2−3=7✓) ─────────
    sys(["2x + 3y = 13", "5x − y = 7"], `{(2 ; 3)}`, acceptPair("2", "3"), [
      "II · 3 : 15x − 3y = 21",
      "I      :  2x + 3y = 13",
      "addition II·3 + I  →  17x = 34",
      "x = 2",
      "dans I : 2(2) + 3y = 13",
      "3y = 9",
      "y = 3",
      "S = {(2 ; 3)}",
    ], ["× 3", "", "II·3 + I", ": 17", "substitution", "− 4", ": 3", ""]),
    // ── T9: I·8 + II → 29x=−29 → x=−1, y=4  (3·−1+4=1✓  5·−1−8·4=−37✓) ────
    sys(["3x + y = 1", "5x − 8y = −37"], `{(−1 ; 4)}`, acceptPair("-1", "4"), [
      "I · 8 :  24x + 8y = 8",
      "II    :   5x − 8y = −37",
      "addition I·8 + II  →  29x = −29",
      "x = −1",
      "dans I : 3(−1) + y = 1",
      "y = 4",
      "S = {(−1 ; 4)}",
    ], ["× 8", "", "I·8 + II", ": 29", "substitution", "+ 3", ""]),
    // ── T10: I·2 − II → 9x=18 → x=2, y=−3  (4·2+(−3)=5✓  −2+2·(−3)=−8✓) ───
    sys(["4x + y = 5", "−x + 2y = −8"], `{(2 ; −3)}`, acceptPair("2", "-3"), [
      "I · 2 :  8x + 2y = 10",
      "II    : −x + 2y = −8",
      "soustraction I·2 − II  →  9x = 18",
      "x = 2",
      "dans I : 4(2) + y = 5",
      "y = −3",
      "S = {(2 ; −3)}",
    ], ["× 2", "", "I·2 − II", ": 9", "substitution", "− 8", ""]),
    // ── T11: II·2 − I → −11y=22 → y=−2, x=5  (2·5+3·(−2)=4✓  5−4·(−2)=13✓) ─
    sys(["2x + 3y = 4", "x − 4y = 13"], `{(5 ; −2)}`, acceptPair("5", "-2"), [
      "II · 2 :  2x − 8y = 26",
      "I      :  2x + 3y = 4",
      "soustraction II·2 − I  →  −11y = 22",
      "y = −2",
      "dans II : x − 4(−2) = 13",
      "x + 8 = 13",
      "x = 5",
      "S = {(5 ; −2)}",
    ], ["× 2", "", "II·2 − I", ": (−11)", "substitution", "effectuer", "− 8", ""]),
    // ── T12: II − I → −y=2 → y=−2, x=1  (3·1−(−2)=5✓  3·1−2·(−2)=7✓) ──────
    sys(["3x − y = 5", "3x − 2y = 7"], `{(1 ; −2)}`, acceptPair("1", "-2"), [
      "II :  3x − 2y = 7",
      "I  :  3x −  y = 5",
      "soustraction II − I  →  −y = 2",
      "y = −2",
      "dans I : 3x − (−2) = 5",
      "3x = 3",
      "x = 1",
      "S = {(1 ; −2)}",
    ], ["", "", "II − I", "· (−1)", "substitution", "− 2", ": 3", ""]),
    // ── T13: II·3 + I → 10x=30 → x=3, y=2  (4·3−3·2=6✓  2·3+2=8✓) ─────────
    sys(["4x − 3y = 6", "2x + y = 8"], `{(3 ; 2)}`, acceptPair("3", "2"), [
      "II · 3 :  6x + 3y = 24",
      "I      :  4x − 3y = 6",
      "addition II·3 + I  →  10x = 30",
      "x = 3",
      "dans II : 2(3) + y = 8",
      "y = 2",
      "S = {(3 ; 2)}",
    ], ["× 3", "", "II·3 + I", ": 10", "substitution", "− 6", ""]),
    // ── T14: impossible  (2x+3y=5 vs 4x+6y=15) ──────────────────────────────
    sys(["2x + 3y = 5", "4x + 6y = 15"], `impossible`, ["impossible", "s=∅", "vide", "∅"], [
      "I · 2  : 4x + 6y = 10",
      "II     : 4x + 6y = 15",
      "soustraction II − I·2  →  0 = 5",
      "contradiction : impossible !",
      "S = ∅",
    ], ["× 2", "", "II − I·2", "", ""]),
    // ── T15: infinite solutions  (x+2y=4 vs 3x+6y=12) ───────────────────────
    sys(["x + 2y = 4", "3x + 6y = 12"], `IR`, ["ir", "s=ir", "infini", "infinité"], [
      "I · 3  : 3x + 6y = 12",
      "II     : 3x + 6y = 12",
      "soustraction II − I·3  →  0 = 0",
      "identité : infinité de solutions !",
      "S = IR",
    ], ["× 3", "", "II − I·3", "", ""]),
    // ── T16: II·2 + I → 7x=21 → x=3, y=2  (3+2·2=7✓  3·3−2=7✓) ────────────
    sys(["x + 2y = 7", "3x − y = 7"], `{(3 ; 2)}`, acceptPair("3", "2"), [
      "II · 2 :  6x − 2y = 14",
      "I      :   x + 2y = 7",
      "addition II·2 + I  →  7x = 21",
      "x = 3",
      "dans I : 3 + 2y = 7",
      "2y = 4",
      "y = 2",
      "S = {(3 ; 2)}",
    ], ["× 2", "", "II·2 + I", ": 7", "substitution", "− 3", ": 2", ""]),
    // ── T17: I + II → 3x=12 → x=4, y=2  (2·4+2=10✓  4−2=2✓) ───────────────
    sys(["2x + y = 10", "x − y = 2"], `{(4 ; 2)}`, acceptPair("4", "2"), [
      "I  :  2x + y = 10",
      "II :   x − y = 2",
      "addition I + II  →  3x = 12",
      "x = 4",
      "dans II : 4 − y = 2",
      "y = 2",
      "S = {(4 ; 2)}",
    ], ["", "", "I + II", ": 3", "substitution", "− 4", ""]),
    // ── T18: II·3 + I → 8x=16 → x=2, y=2  (5·2+3·2=16✓  2−2=0✓) ───────────
    sys(["5x + 3y = 16", "x − y = 0"], `{(2 ; 2)}`, acceptPair("2", "2"), [
      "II · 3 :  3x − 3y = 0",
      "I      :  5x + 3y = 16",
      "addition II·3 + I  →  8x = 16",
      "x = 2",
      "dans II : 2 − y = 0",
      "y = 2",
      "S = {(2 ; 2)}",
    ], ["× 3", "", "II·3 + I", ": 8", "substitution", "", ""]),
    // ── T19: I·2 − II → 7y=17 → y=17/7, x=19/7  (x+3·17/7=10✓) ─────────────
    sys(["x + 3y = 10", "2x − y = 3"], `{(${f("19", "7")} ; ${f("17", "7")})}`, acceptPair("19/7", "17/7"), [
      "I · 2 :  2x + 6y = 20",
      "II    :  2x −  y = 3",
      "soustraction I·2 − II  →  7y = 17",
      `y = ${f("17", "7")}`,
      `dans I : x + 3 · ${f("17", "7")} = 10`,
      `x = 10 − ${f("51", "7")} = ${f("19", "7")}`,
      `S = {(${f("19", "7")} ; ${f("17", "7")})}`,
    ], ["× 2", "", "I·2 − II", ": 7", "substitution", "effectuer", ""]),
    // ── T20: II·3 + I → 11x=22 → x=2, y=3  (5·2−3·3=1✓  2·2+3=7✓) ─────────
    sys(["5x − 3y = 1", "2x + y = 7"], `{(2 ; 3)}`, acceptPair("2", "3"), [
      "II · 3 :  6x + 3y = 21",
      "I      :  5x − 3y = 1",
      "addition II·3 + I  →  11x = 22",
      "x = 2",
      "dans II : 2(2) + y = 7",
      "y = 3",
      "S = {(2 ; 3)}",
    ], ["× 3", "", "II·3 + I", ": 11", "substitution", "− 4", ""]),
    // ── T21: II·2 + I → 14x=42 → x=3, y=2  (2·3+3·2=12✓  4·3−2=10✓) ────────
    sys(["2x + 3y = 12", "4x − y = 10"], `{(3 ; 2)}`, acceptPair("3", "2"), [
      "II · 3 : 12x − 3y = 30",
      "I      :  2x + 3y = 12",
      "addition II·3 + I  →  14x = 42",
      "x = 3",
      "dans I : 2(3) + 3y = 12",
      "3y = 6",
      "y = 2",
      "S = {(3 ; 2)}",
    ], ["× 3", "", "II·3 + I", ": 14", "substitution", "− 6", ": 3", ""]),
    // ── T22: I + II → 4x=12 → x=3, y=5  (3+5=8✓  3·3−5=4✓) ────────────────
    sys(["x + y = 8", "3x − y = 4"], `{(3 ; 5)}`, acceptPair("3", "5"), [
      "I  :   x +  y = 8",
      "II :  3x −  y = 4",
      "addition I + II  →  4x = 12",
      "x = 3",
      "dans I : 3 + y = 8",
      "y = 5",
      "S = {(3 ; 5)}",
    ], ["", "", "+ II", ": 4", "substitution", "− 3", ""]),
    // ── T23: I·2 + II → 7x=2 → x=2/7, y=29/7  (3·2/7+29/7=5✓  2/7−2·29/7=−8✓)
    sys(["3x + y = 5", "x − 2y = −8"], `{(${f("2", "7")} ; ${f("29", "7")})}`, acceptPair("2/7", "29/7"), [
      "I · 2 :  6x + 2y = 10",
      "II    :   x − 2y = −8",
      "addition I·2 + II  →  7x = 2",
      `x = ${f("2", "7")}`,
      `dans I : 3 · ${f("2", "7")} + y = 5`,
      `y = 5 − ${f("6", "7")} = ${f("29", "7")}`,
      `S = {(${f("2", "7")} ; ${f("29", "7")})}`,
    ], ["× 2", "", "I·2 + II", ": 7", "substitution", "effectuer", ""]),
    // ── T24: I·5 + II·4 → 23x=92 → x=4, y=1  (3·4+4·1=16✓  2·4−5·1=3✓) ────
    sys(["3x + 4y = 16", "2x − 5y = 3"], `{(4 ; 1)}`, acceptPair("4", "1"), [
      "I · 5  : 15x + 20y = 80",
      "II · 4 :  8x − 20y = 12",
      "addition I·5 + II·4  →  23x = 92",
      "x = 4",
      "dans I : 3(4) + 4y = 16",
      "4y = 4",
      "y = 1",
      "S = {(4 ; 1)}",
    ], ["× 5", "× 4", "I·5 + II·4", ": 23", "substitution", "− 12", ": 4", ""]),
    // ── T25: II·3 + I → 17x=51 → x=3, y=1  (2·3+3·1=9✓  5·3−1=14✓) ─────────
    sys(["2x + 3y = 9", "5x − y = 14"], `{(3 ; 1)}`, acceptPair("3", "1"), [
      "II · 3 : 15x − 3y = 42",
      "I      :  2x + 3y = 9",
      "addition II·3 + I  →  17x = 51",
      "x = 3",
      "dans I : 2(3) + 3y = 9",
      "3y = 3",
      "y = 1",
      "S = {(3 ; 1)}",
    ], ["× 3", "", "II·3 + I", ": 17", "substitution", "− 6", ": 3", ""]),
    // ── T26: I·2 + II → 7x=18 → x=18/7, y=19/7  (3·18/7−19/7=5✓) ───────────
    sys(["3x − y = 5", "x + 2y = 8"], `{(${f("18", "7")} ; ${f("19", "7")})}`, acceptPair("18/7", "19/7"), [
      "I · 2 :  6x − 2y = 10",
      "II    :   x + 2y = 8",
      "addition I·2 + II  →  7x = 18",
      `x = ${f("18", "7")}`,
      `dans II : ${f("18", "7")} + 2y = 8`,
      `2y = 8 − ${f("18", "7")} = ${f("38", "7")}`,
      `y = ${f("19", "7")}`,
      `S = {(${f("18", "7")} ; ${f("19", "7")})}`,
    ], ["× 2", "", "I·2 + II", ": 7", "substitution", "effectuer", ": 2", ""]),
  ];
  return { kind: "system_equation", lesson, exNum: 1, question: templates[Math.floor(Math.random() * templates.length)]! };
}

const ALGEBRA_SYMBOLS = ["a", "b", "c", "m", "n", "x", "y"] as const;
const SUPER_DIGITS: Record<number, string> = { 1: "", 2: "²", 3: "³", 4: "⁴" };

function symbolicVariants(value: string): string[] {
  return [
    value,
    value.replace(/−/g, "-").replace(/·/g, "*"),
    value.replace(/²/g, "^2").replace(/³/g, "^3").replace(/⁴/g, "^4"),
  ];
}

function normalizeSymbolicInput(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/,/g, ".")
    .replace(/−/g, "-")
    .replace(/[·×]/g, "*")
    .replace(/\^2/g, "²")
    .replace(/\^3/g, "³")
    .replace(/\^4/g, "⁴");
}

function symbolicMatches(value: string, acceptable: string[]): boolean {
  const normalized = normalizeSymbolicInput(value);
  return normalized !== "" && acceptable.some((answer) => normalizeSymbolicInput(answer) === normalized);
}

function literalText(powers: Record<string, number>): string {
  return Object.keys(powers).sort().map((letter) => `${letter}${SUPER_DIGITS[powers[letter]!] ?? `^${powers[letter]}`}`).join("");
}

function monomialText(coefficient: number, literal: string): string {
  if (!literal) return String(coefficient);
  if (coefficient === 1) return literal;
  if (coefficient === -1) return `−${literal}`;
  return `${coefficient < 0 ? "−" : ""}${Math.abs(coefficient)}${literal}`;
}

function polynomialText(terms: Array<{ coefficient: number; literal: string }>): string {
  const grouped = new Map<string, number>();
  terms.forEach(({ coefficient, literal }) => grouped.set(literal, (grouped.get(literal) ?? 0) + coefficient));
  const entries = [...grouped.entries()]
    .filter(([, coefficient]) => coefficient !== 0)
    .sort(([left], [right]) => right.length - left.length || left.localeCompare(right));
  if (entries.length === 0) return "0";
  return entries.map(([literal, coefficient], index) => {
    const term = monomialText(Math.abs(coefficient), literal);
    if (index === 0) return coefficient < 0 ? `−${term}` : term;
    return `${coefficient < 0 ? "−" : "+"} ${term}`;
  }).join(" ");
}

function expressionFromTerms(terms: Array<{ coefficient: number; display: string }>): string {
  return terms.map(({ coefficient, display }, index) => {
    const body = display.replace(/^−/, "");
    if (index === 0) return coefficient < 0 ? `−${body}` : body;
    return `${coefficient < 0 ? "−" : "+"} ${body}`;
  }).join(" ");
}

function generateProductQuestion(templateIndex: number): SymbolicQuestion {
  const factorCount = 3 + (templateIndex % 4);
  const powers: Record<string, number> = {};
  let coefficient = 1;
  const factors: string[] = [];
  for (let index = 0; index < factorCount; index++) {
    const numeric = (templateIndex + index) % 3 === 0;
    if (numeric) {
      const value = 2 + ((templateIndex * 3 + index) % 7);
      coefficient *= value;
      factors.push(String(value));
    } else {
      const letter = ALGEBRA_SYMBOLS[(templateIndex + index * 2) % ALGEBRA_SYMBOLS.length]!;
      const exponent = (templateIndex + index) % 5 === 0 ? 2 : 1;
      powers[letter] = (powers[letter] ?? 0) + exponent;
      factors.push(`${letter}${SUPER_DIGITS[exponent]}`);
    }
  }
  const result = monomialText(coefficient, literalText(powers));
  return { expression: factors.join(" · "), acceptable: symbolicVariants(result) };
}

function generateReductionQuestion(templateIndex: number, mixed: boolean): SymbolicQuestion {
  const termCount = 4 + (templateIndex % 4);
  const literals = [
    ALGEBRA_SYMBOLS[templateIndex % ALGEBRA_SYMBOLS.length]!,
    ALGEBRA_SYMBOLS[(templateIndex + 3) % ALGEBRA_SYMBOLS.length]!,
  ];
  const terms: Array<{ coefficient: number; literal: string; display: string }> = [];
  for (let index = 0; index < termCount; index++) {
    const isConstant = (templateIndex + index) % (mixed ? 4 : 6) === 0;
    const letter = isConstant ? "" : literals[(templateIndex + index) % literals.length]!;
    const exponent = !letter || (templateIndex + index) % 5 !== 0 ? 1 : 2;
    const literal = letter ? `${letter}${SUPER_DIGITS[exponent]}` : "";
    const magnitude = 1 + ((templateIndex * 2 + index * 3) % 9);
    const coefficient = (templateIndex + index) % 4 === 0 ? -magnitude : magnitude;
    if (mixed && letter && index % 2 === 0) {
      const left = 1 + ((templateIndex + index) % 4);
      const right = Math.max(1, Math.floor(magnitude / left));
      const actualCoefficient = left * right * Math.sign(coefficient);
      terms.push({ coefficient: actualCoefficient, literal, display: `${coefficient < 0 ? "−" : ""}${left} · ${right} · ${literal}` });
    } else {
      terms.push({ coefficient, literal, display: monomialText(coefficient, literal) });
    }
  }
  const answer = polynomialText(terms);
  return {
    expression: expressionFromTerms(terms.map(({ coefficient, display }) => ({ coefficient, display }))),
    acceptable: symbolicVariants(answer),
  };
}

function genSymbolicGroupStep(lesson: MathSubmoduleLesson, exNum: number): SymbolicGroupStep {
  const templates = Array.from({ length: 50 }, (_, index) => {
    if (exNum === 1) return generateProductQuestion(index);
    return generateReductionQuestion(index, exNum === 3);
  });
  const instruction = exNum === 1
    ? "Simplifiez les produits."
    : exNum === 2
      ? "Réduisez les termes semblables."
      : "Simplifiez les expressions quand c'est possible.";
  return {
    kind: "symbolic_group",
    lesson,
    exNum,
    instruction,
    mode: "input",
    questions: shufflePick(templates, 5),
  };
}

// A9.5 — developing expressions. Three dynamic exercises (refreshable), each a
// pool of 50 templates that randomize both the letters and the numbers.
function genDevelopGroupStep(lesson: MathSubmoduleLesson, exNum: number): SymbolicGroupStep {
  const ri = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1)) + a;
  const pick = <T,>(items: readonly T[]) => items[ri(0, items.length - 1)]!;
  const letters = ["x", "y", "a", "b", "m", "n", "t"] as const;

  // Exercise 1 — simple distributive: k(sym ± p), −k(sym ± p) or sym(sym ± p).
  const simple = (): SymbolicQuestion => {
    const sym = pick(letters);
    const p = ri(1, 12);
    const minus = Math.random() < 0.5;
    const s = minus ? -p : p;
    if (Math.random() < 0.3) {
      const terms = [
        { coefficient: 1, literal: `${sym}²` },
        { coefficient: s, literal: sym },
      ];
      return { expression: `${sym}(${sym} ${minus ? "−" : "+"} ${p})`, acceptable: symbolicVariants(polynomialText(terms)) };
    }
    const k = ri(2, 9);
    const neg = Math.random() < 0.3;
    const coef = neg ? -k : k;
    const terms = [
      { coefficient: coef, literal: sym },
      { coefficient: coef * s, literal: "" },
    ];
    return { expression: `${neg ? "−" : ""}${k}(${sym} ${minus ? "−" : "+"} ${p})`, acceptable: symbolicVariants(polynomialText(terms)) };
  };

  // Exercise 2 — the 8 remarkable identities. Letters and numbers are randomized;
  // answers are built in canonical (textbook) order so grading is unambiguous.
  // buildPoly keeps the given term order (does NOT re-sort) and handles signs.
  const buildPoly = (terms: Array<{ c: number; l: string }>): string => {
    const nz = terms.filter((t) => t.c !== 0);
    if (nz.length === 0) return "0";
    return nz.map((t, i) => {
      const body = monomialText(Math.abs(t.c), t.l);
      if (i === 0) return t.c < 0 ? `−${body}` : body;
      return `${t.c < 0 ? "−" : "+"} ${body}`;
    }).join(" ");
  };
  const threeLetters = () => {
    const s = [...letters].sort(() => Math.random() - 0.5);
    return [s[0]!, s[1]!, s[2]!] as const;
  };
  // Each entry expands a product/power into its developed, canonical form.
  const identityForms: Array<() => SymbolicQuestion> = [
    // Carré d'une somme : (a·sym + b)²
    () => {
      const sym = pick(letters); const a = Math.random() < 0.5 ? 1 : ri(2, 5); const b = ri(1, 9); const aS = a === 1 ? "" : String(a);
      return { expression: `(${aS}${sym} + ${b})²`, acceptable: symbolicVariants(buildPoly([{ c: a * a, l: `${sym}²` }, { c: 2 * a * b, l: sym }, { c: b * b, l: "" }])) };
    },
    // Carré d'une différence : (a·sym − b)²
    () => {
      const sym = pick(letters); const a = Math.random() < 0.5 ? 1 : ri(2, 5); const b = ri(1, 9); const aS = a === 1 ? "" : String(a);
      return { expression: `(${aS}${sym} − ${b})²`, acceptable: symbolicVariants(buildPoly([{ c: a * a, l: `${sym}²` }, { c: -2 * a * b, l: sym }, { c: b * b, l: "" }])) };
    },
    // Différence de deux carrés : (a·sym + b)(a·sym − b)
    () => {
      const sym = pick(letters); const a = Math.random() < 0.5 ? 1 : ri(2, 5); const b = ri(1, 9); const aS = a === 1 ? "" : String(a);
      return { expression: `(${aS}${sym} + ${b})(${aS}${sym} − ${b})`, acceptable: symbolicVariants(buildPoly([{ c: a * a, l: `${sym}²` }, { c: -b * b, l: "" }])) };
    },
    // Cube d'une somme : (sym + k)³
    () => {
      const sym = pick(letters); const k = ri(1, 6);
      return { expression: `(${sym} + ${k})³`, acceptable: symbolicVariants(buildPoly([{ c: 1, l: `${sym}³` }, { c: 3 * k, l: `${sym}²` }, { c: 3 * k * k, l: sym }, { c: k * k * k, l: "" }])) };
    },
    // Cube d'une différence : (sym − k)³
    () => {
      const sym = pick(letters); const k = ri(1, 6);
      return { expression: `(${sym} − ${k})³`, acceptable: symbolicVariants(buildPoly([{ c: 1, l: `${sym}³` }, { c: -3 * k, l: `${sym}²` }, { c: 3 * k * k, l: sym }, { c: -k * k * k, l: "" }])) };
    },
    // Somme de deux cubes : (sym + k)(sym² − k·sym + k²) = sym³ + k³
    () => {
      const sym = pick(letters); const k = ri(2, 6); const kx = k === 1 ? sym : `${k}${sym}`;
      return { expression: `(${sym} + ${k})(${sym}² − ${kx} + ${k * k})`, acceptable: symbolicVariants(buildPoly([{ c: 1, l: `${sym}³` }, { c: k * k * k, l: "" }])) };
    },
    // Différence de deux cubes : (sym − k)(sym² + k·sym + k²) = sym³ − k³
    () => {
      const sym = pick(letters); const k = ri(2, 6); const kx = k === 1 ? sym : `${k}${sym}`;
      return { expression: `(${sym} − ${k})(${sym}² + ${kx} + ${k * k})`, acceptable: symbolicVariants(buildPoly([{ c: 1, l: `${sym}³` }, { c: -k * k * k, l: "" }])) };
    },
    // Carré de trois termes : (p + q + r)²
    () => {
      const [p, q, r] = threeLetters();
      const pair = (x: string, y: string) => [x, y].sort().join("");
      return {
        expression: `(${p} + ${q} + ${r})²`,
        acceptable: symbolicVariants(buildPoly([
          { c: 1, l: `${p}²` }, { c: 1, l: `${q}²` }, { c: 1, l: `${r}²` },
          { c: 2, l: pair(p, q) }, { c: 2, l: pair(p, r) }, { c: 2, l: pair(q, r) },
        ])),
      };
    },
  ];

  // Exercise 3 — complex: a(sym ± p) ± c(sym ± q), sometimes with a sym² lead.
  const complex = (): SymbolicQuestion => {
    const sym = pick(letters);
    const a = ri(2, 6);
    const c = ri(2, 6);
    const p = ri(1, 9);
    const q = ri(1, 9);
    const s1 = Math.random() < 0.5 ? -p : p;
    const s2 = Math.random() < 0.5 ? -q : q;
    const outer = Math.random() < 0.5 ? -1 : 1;
    if (Math.random() < 0.4) {
      const terms = [
        { coefficient: 1, literal: `${sym}²` },
        { coefficient: s1 + outer * c, literal: sym },
        { coefficient: outer * c * s2, literal: "" },
      ];
      return {
        expression: `${sym}(${sym} ${s1 < 0 ? "−" : "+"} ${p}) ${outer < 0 ? "−" : "+"} ${c}(${sym} ${s2 < 0 ? "−" : "+"} ${q})`,
        acceptable: symbolicVariants(polynomialText(terms)),
      };
    }
    const terms = [
      { coefficient: a + outer * c, literal: sym },
      { coefficient: a * s1 + outer * c * s2, literal: "" },
    ];
    return {
      expression: `${a}(${sym} ${s1 < 0 ? "−" : "+"} ${p}) ${outer < 0 ? "−" : "+"} ${c}(${sym} ${s2 < 0 ? "−" : "+"} ${q})`,
      acceptable: symbolicVariants(polynomialText(terms)),
    };
  };

  const instruction = exNum === 1
    ? "Développez chaque expression. Expression simple."
    : exNum === 2
      ? "Développez chaque expression. Identité remarquable."
      : "Développez chaque expression. Expression complexe.";
  // Exercise 2 draws 5 distinct identities (each with randomized letters/numbers)
  // from the 8 remarkable-identity templates; exercises 1 & 3 use a 50-deep pool.
  const questions = exNum === 2
    ? shufflePick(identityForms.map((make) => make()), 5)
    : shufflePick(Array.from({ length: 50 }, () => (exNum === 1 ? simple() : complex())), 5);
  return { kind: "symbolic_group", lesson, exNum, instruction, mode: "input", questions };
}

function genSymbolicTrueFalseStep(lesson: MathSubmoduleLesson): SymbolicGroupStep {
  const templates = Array.from({ length: 50 }, (_, index) => {
    const base = index % 2 === 0 ? generateProductQuestion(index) : generateReductionQuestion(index, true);
    const correct = index % 3 !== 0;
    const right = correct
      ? base.acceptable[0]!
      : `${base.acceptable[0]} ${index % 2 === 0 ? "+ 1" : "+ 2"}`;
    return {
      expression: `${base.expression} = ${right}`,
      acceptable: [correct ? "vrai" : "faux"],
      truth: correct,
    };
  });
  const trueQuestions = shufflePick(templates.filter((question) => question.truth), 3);
  const falseQuestions = shufflePick(templates.filter((question) => !question.truth), 2);
  return {
    kind: "symbolic_group",
    lesson,
    exNum: 4,
    instruction: "Cochez les bonnes réponses.",
    mode: "true_false",
    questions: shufflePick([...trueQuestions, ...falseQuestions], 5),
  };
}

function genEvalExpressionGroupStep(lesson: MathSubmoduleLesson, exNum: number): SymbolicGroupStep {
  const vars = ["x", "y", "a", "b", "c", "m", "n", "p"];
  const riLocal = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1)) + a;
  const pickLocal = <T,>(items: T[]) => items[riLocal(0, items.length - 1)]!;
  const value = () => {
    let n = 0;
    while (n === 0) n = riLocal(-9, 9);
    return n;
  };
  const compactSigned = (n: number) => n < 0 ? ` - ${Math.abs(n)}` : ` + ${n}`;
  const sqrtChoices = [4, 9, 16, 25, 36, 49, 64, 81];

  // The 5 expressions of a step all share the SAME (randomly picked) letters and
  // values; these are shown once in a "données" block above the questions.
  const varCount = exNum === 1 ? 2 : 3;
  const shuffledVars = [...vars].sort(() => Math.random() - 0.5).slice(0, varCount);
  const [u, v, w] = shuffledVars;
  const uv = value();
  const vv = value();
  const wv = value();
  const givens = shuffledVars.map((letter, i) => ({ letter, value: [uv, vv, wv][i]! }));

  const templates2: Array<() => SymbolicQuestion> = Array.from({ length: 100 }, (_, index) => () => {
    const a = riLocal(2, 9);
    const b = riLocal(2, 9);
    const c = riLocal(-12, 12);
    const mode = index % 5;
    const expression = mode === 0 ? `${a}${u} + ${b}${v}${compactSigned(c)}`
      : mode === 1 ? `${a}(${u} + ${v})${compactSigned(c)}`
        : mode === 2 ? `${a}${u} - ${b}(${v}${compactSigned(Math.abs(c) || 1)})`
          : mode === 3 ? `${a}(${u} - ${v}) + ${b}${u}`
            : `${a}${u} · ${b} - ${v}${compactSigned(c)}`;
    const result = mode === 0 ? a * uv + b * vv + c
      : mode === 1 ? a * (uv + vv) + c
        : mode === 2 ? a * uv - b * (vv + (Math.abs(c) || 1))
          : mode === 3 ? a * (uv - vv) + b * uv
            : a * uv * b - vv + c;
    return { expression, acceptable: symbolicVariants(String(result)) };
  });

  const templates3: Array<() => SymbolicQuestion> = Array.from({ length: 100 }, (_, index) => () => {
    const a = riLocal(2, 7);
    const b = riLocal(2, 7);
    const c = riLocal(2, 7);
    const mode = index % 5;
    const expression = mode === 0 ? `${a}${u} + ${b}${v} - ${c}${w}`
      : mode === 1 ? `${a}(${u} + ${v}) - ${c}${w}`
        : mode === 2 ? `${a}${u} - ${b}(${v} - ${w})`
          : mode === 3 ? `${a}${u} · ${b} + ${v} - ${c}${w}`
            : `${a}(${u} - ${v} + ${w})`;
    const result = mode === 0 ? a * uv + b * vv - c * wv
      : mode === 1 ? a * (uv + vv) - c * wv
        : mode === 2 ? a * uv - b * (vv - wv)
          : mode === 3 ? a * uv * b + vv - c * wv
            : a * (uv - vv + wv);
    return { expression, acceptable: symbolicVariants(String(result)) };
  });

  const templatesAdvanced: Array<() => SymbolicQuestion> = Array.from({ length: 100 }, (_, index) => () => {
    const a = riLocal(2, 5);
    const b = riLocal(2, 5);
    const sq = pickLocal(sqrtChoices);
    const root = Math.sqrt(sq);
    const mode = index % 5;
    const expression = mode === 0 ? `${u}² + ${a}${v} - √${sq}`
      : mode === 1 ? `${a}${u}² - ${b}${v} + ${w}`
        : mode === 2 ? `√${sq} + ${a}(${u} - ${v}) + ${w}²`
          : mode === 3 ? `${a}${u}² + ${b}${v}² - ${w}`
            : `${a}(${u} + ${v})² - √${sq} - ${w}`;
    const result = mode === 0 ? uv * uv + a * vv - root
      : mode === 1 ? a * uv * uv - b * vv + wv
        : mode === 2 ? root + a * (uv - vv) + wv * wv
          : mode === 3 ? a * uv * uv + b * vv * vv - wv
            : a * (uv + vv) * (uv + vv) - root - wv;
    return { expression, acceptable: symbolicVariants(String(result)) };
  });

  const source = exNum === 1 ? templates2 : exNum === 2 ? templates3 : templatesAdvanced;
  return {
    kind: "symbolic_group",
    lesson,
    exNum,
    instruction: exNum === 1
      ? "Évaluez les expressions avec deux variables. Les 5 expressions utilisent les mêmes valeurs."
      : exNum === 2
        ? "Évaluez les expressions avec trois variables. Les 5 expressions utilisent les mêmes valeurs."
        : "Évaluez les expressions avec puissances et racines. Les 5 expressions utilisent les mêmes valeurs.",
    mode: "input",
    givens,
    questions: shufflePick(source, 5).map((make) => make()),
  };
}

function genMonomialGroupStep(lesson: MathSubmoduleLesson): MonomialGroupStep {
  const templates = Array.from({ length: 50 }, (_, index): MonomialQuestion => {
    const first = ALGEBRA_SYMBOLS[index % ALGEBRA_SYMBOLS.length]!;
    const second = ALGEBRA_SYMBOLS[(index + 2) % ALGEBRA_SYMBOLS.length]!;
    const third = ALGEBRA_SYMBOLS[(index + 5) % ALGEBRA_SYMBOLS.length]!;
    const powers: Record<string, number> = { [first]: 1 + (index % 3) };
    if (index % 2 === 0) powers[second] = 1 + (index % 2);
    if (index % 5 === 0) powers[third] = 1;
    const literal = literalText(powers);
    const coefficientMode = index % 5;
    const integer = 2 + (index % 8);
    const coefficient = coefficientMode === 0 ? "1"
      : coefficientMode === 1 ? "−1"
        : coefficientMode === 2 ? String(integer)
          : coefficientMode === 3 ? `${integer}/3`
            : `${integer},5`;
    const shownCoefficient = coefficient === "1" ? "" : coefficient === "−1" ? "−" : coefficient;
    return {
      expression: `${shownCoefficient}${literal}`,
      coefficient: symbolicVariants(coefficient),
      literal: symbolicVariants(literal),
      degree: Object.values(powers).reduce((sum, exponent) => sum + exponent, 0),
    };
  });
  return { kind: "monomial_group", lesson, questions: shufflePick(templates, 5) };
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
    } else if (sid === "G6-1") {
      const pushG6GridSet = () => {
        steps.push({ kind: "g6_plan", lesson, variant: 1, exNum: 1 });
        steps.push({ kind: "g6_plan", lesson, variant: 2, exNum: 2 });
        steps.push({ kind: "g6_plan", lesson, variant: 4, exNum: 3 });
      };
      pushG6GridSet();
      steps.push({ kind: "eval_start", lesson });
      pushG6GridSet();
    } else if (sid === "G6-2") {
      const pushG6CartesianSet = () => {
        steps.push({ kind: "g6_plan", lesson, variant: 14, exNum: 1 });
        steps.push({ kind: "g6_plan", lesson, variant: 15, exNum: 2 });
        steps.push({ kind: "g6_plan", lesson, variant: 8, exNum: 3 });
        steps.push({ kind: "g6_plan", lesson, variant: 10, exNum: 4 });
        steps.push({ kind: "g6_plan", lesson, variant: 11, exNum: 5 });
        steps.push({ kind: "g6_plan", lesson, variant: 12, exNum: 6 });
        steps.push({ kind: "g6_plan", lesson, variant: 13, exNum: 7 });
      };
      pushG6CartesianSet();
      steps.push({ kind: "eval_start", lesson });
      pushG6CartesianSet();
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
      // Entraînement 1–8
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 9], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 9], 2, false, 60) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 9], 3, true) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 99], 4) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 99], 5, false, 60) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 99], 6, true) });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid(op, true, 7) });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid(op, false, 8) });
      // Comparaison (avant évaluation)
      steps.push({ kind: "expr_comparison", lesson, config: genExprComp(op, [1, 99], 9) });
      steps.push({ kind: "expr_comparison", lesson, config: genExprComp(op, [100, 999], 10) });
      // Évaluation — 5 exercices sur pages séparées
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 99], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 99], 2, true) });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid(op, true, 3, 2) });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid(op, false, 4, 2) });
      steps.push({ kind: "expr_comparison", lesson, config: { questions: [...genExprComp(op, [1, 99], 5, 2).questions, ...genExprComp(op, [100, 999], 5, 2).questions], exNum: 5, op } });
    } else if (sid === "A2-3") {
      // Entraînement arrondi/estimation
      steps.push({ kind: "rounding_group", lesson, config: genRounding("diz_near", 1, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("cent_near_new", 2, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_diz_2", 3, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_diz_large_2", 4, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_diz_three", 5, 5) });
      // Évaluation
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("diz_near", 1, 3) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("cent_near_new", 2, 3) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_diz_2", 3, 3) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_diz_large_2", 4, 3) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_diz_three", 5, 3) });
    } else if (sid === "A2-4") {
      // Problèmes — entraînement
      steps.push({ kind: "word_problems", lesson, config: genWP("a1", 1) });
      steps.push({ kind: "word_problems", lesson, config: genWP("a2", 2) });
      steps.push({ kind: "word_problems", lesson, config: genWP("b1", 3) });
      // Évaluation
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "word_problems", lesson, config: genWP("a1", 1) });
      steps.push({ kind: "word_problems", lesson, config: genWP("a2", 2) });
      steps.push({ kind: "word_problems", lesson, config: genWP("b1", 3) });
    } else if (sid === "A3-1") {
      // Tables de multiplications — entraînement
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 2, false, 60) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 3, true) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 4, true, 60) });
      // Évaluation
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 2) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 3, true) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 4, true) });
    } else if (sid === "A3-2") {
      // Multiplication en colonnes — entraînement
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid("×", true, 1) });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid("×", false, 2) });
      steps.push({ kind: "mul_two_digit", lesson, config: genMul2Digit(true, 3, 2) });
      steps.push({ kind: "mul_two_digit", lesson, config: genMul2Digit(false, 4, 2) });
      // Évaluation
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid("×", true, 1, 2) });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid("×", false, 2, 2) });
      steps.push({ kind: "mul_two_digit", lesson, config: genMul2Digit(true, 3, 2) });
      steps.push({ kind: "mul_two_digit", lesson, config: genMul2Digit(false, 4, 2) });
    } else if (sid === "A3-3") {
      // Tables de divisions — entraînement
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 2, false, 60) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 3, true) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 4, true, 60) });
      // Évaluation
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 2) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 3, true) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 4, true) });
    } else if (sid === "A3-4") {
      // Division en colonnes — entraînement
      steps.push({ kind: "div_column_grid", lesson, config: genDivColumnGrid(4, 1, true, 1) });
      steps.push({ kind: "div_column_grid", lesson, config: genDivColumnGrid(5, 2, true, 2) });
      steps.push({ kind: "div_column_grid", lesson, config: genDivColumnGrid(4, 1, false, 3) });
      steps.push({ kind: "div_column_grid", lesson, config: genDivColumnGrid(5, 2, false, 4) });
      // Évaluation
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
      steps.push({ kind: "nl_multi", lesson, config: { questions: genNLFine(2).map(c => ({ nlConfig: c, mode: "read" as const })), exNum: 2, consigne: "Écrivez le nombre indiqué par la flèche.", noFeedback: true } });
      steps.push({ kind: "nl_multi", lesson, config: { questions: genNLCoarse(2).map(c => ({ nlConfig: c, mode: "read" as const })), exNum: 3, consigne: "Écrivez le nombre indiqué par la flèche.", noFeedback: true } });
      steps.push({ kind: "nl_multi", lesson, config: { questions: [...genNLFine(1).map(c => ({ nlConfig: c, mode: "less" as const })), ...genNLCoarse(1).map(c => ({ nlConfig: c, mode: "less" as const }))], exNum: 4, consigne: "Écrivez un nombre plus petit que le nombre indiqué par la flèche.", noFeedback: true } });
      steps.push({ kind: "nl_multi", lesson, config: { questions: [...genNLFine(1).map(c => ({ nlConfig: c, mode: "more" as const })), ...genNLCoarse(1).map(c => ({ nlConfig: c, mode: "more" as const }))], exNum: 5, consigne: "Écrivez un nombre plus grand que le nombre indiqué par la flèche.", noFeedback: true } });
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "odd_even", lesson, config: genOddEven(1) });
      steps.push({ kind: "nl_multi", lesson, config: { questions: [...genNLFine(1).map(c => ({ nlConfig: c, mode: "read" as const })), ...genNLCoarse(1).map(c => ({ nlConfig: c, mode: "read" as const }))], exNum: 2, consigne: "Écrivez le nombre indiqué par la flèche.", noFeedback: true } });
      steps.push({ kind: "nl_multi", lesson, config: { questions: [...genNLFine(1).map(c => ({ nlConfig: c, mode: "less" as const })), ...genNLCoarse(1).map(c => ({ nlConfig: c, mode: "less" as const }))], exNum: 3, consigne: "Écrivez un nombre plus petit que le nombre indiqué par la flèche.", noFeedback: true } });
      steps.push({ kind: "nl_multi", lesson, config: { questions: [...genNLFine(1).map(c => ({ nlConfig: c, mode: "more" as const })), ...genNLCoarse(1).map(c => ({ nlConfig: c, mode: "more" as const }))], exNum: 4, consigne: "Écrivez un nombre plus grand que le nombre indiqué par la flèche.", noFeedback: true } });
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
    } else if (sid === "A3-7") {
      steps.push({ kind: "word_problems", lesson, config: genWP("multdiv", 1) });
      steps.push({ kind: "word_problems", lesson, config: genWP("multdiv", 2) });
      steps.push({ kind: "word_problems", lesson, config: genWP("multdiv", 3) });
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "word_problems", lesson, config: genWP("multdiv", 1) });
      steps.push({ kind: "word_problems", lesson, config: genWP("multdiv", 2) });
      steps.push({ kind: "word_problems", lesson, config: genWP("multdiv", 3) });
    } else if (sid === "A5-7") {
      steps.push({ kind: "word_problems", lesson, config: genWP("decimal_e", 1) });
      steps.push({ kind: "word_problems", lesson, config: genWP("decimal_m", 2) });
      steps.push({ kind: "word_problems", lesson, config: genWP("decimal_h", 3) });
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "word_problems", lesson, config: genWP("decimal_e", 1) });
      steps.push({ kind: "word_problems", lesson, config: genWP("decimal_m", 2) });
      steps.push({ kind: "word_problems", lesson, config: genWP("decimal_h", 3) });
    } else if (sid === "A6-4") {
      steps.push({ kind: "word_problems", lesson, config: genWP("propor_e", 1) });
      steps.push({ kind: "word_problems", lesson, config: genWP("propor_m", 2) });
      steps.push({ kind: "word_problems", lesson, config: genWP("propor_h", 3) });
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "word_problems", lesson, config: genWP("propor_e", 1) });
      steps.push({ kind: "word_problems", lesson, config: genWP("propor_m", 2) });
      steps.push({ kind: "word_problems", lesson, config: genWP("propor_h", 3) });
    } else if (sid === "A10-1") {
      steps.push(genEquationGroupStep(lesson, 1));
      steps.push(genEquationGroupStep(lesson, 2));
      steps.push({ kind: "eval_start", lesson });
      steps.push(genEquationGroupStep(lesson, 1));
      steps.push(genEquationGroupStep(lesson, 2));
    } else if (sid === "A10-2") {
      steps.push(genFracEquationGroupStep(lesson, 1));
      steps.push(genFracEquationGroupStep(lesson, 2));
      steps.push({ kind: "eval_start", lesson });
      steps.push(genFracEquationGroupStep(lesson, 1));
      steps.push(genFracEquationGroupStep(lesson, 2));
    } else if (sid === "A10-3") {
      steps.push(genSystemEquationStep(lesson));
      steps.push({ kind: "eval_start", lesson });
      steps.push(genSystemEquationStep(lesson));
    } else if (sid === "A10-4") {
      steps.push(genLinearCombinationStep(lesson));
      steps.push({ kind: "eval_start", lesson });
      steps.push(genLinearCombinationStep(lesson));
    } else if (sid === "A10-5") {
      steps.push({ kind: "word_problems", lesson, config: genWP("eq_e", 1) });
      steps.push({ kind: "word_problems", lesson, config: genWP("eq_m", 2) });
      steps.push({ kind: "word_problems", lesson, config: genWP("eq_h", 3) });
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "word_problems", lesson, config: genWP("eq_e", 1) });
      steps.push({ kind: "word_problems", lesson, config: genWP("eq_m", 2) });
      steps.push({ kind: "word_problems", lesson, config: genWP("eq_h", 3) });
    } else if (GENERATED_ALGEBRA_LESSONS.has(sid)) {
      if (sid === "A9-1") {
        steps.push(genMonomialGroupStep(lesson));
      } else if (sid === "A9-2") {
        steps.push(genAlgebraGroupStep(lesson));
      } else if (sid === "A9-3") {
        steps.push(genEvalExpressionGroupStep(lesson, 1));
        steps.push(genEvalExpressionGroupStep(lesson, 2));
        steps.push(genEvalExpressionGroupStep(lesson, 3));
      } else if (sid === "A9-4") {
        steps.push(genSymbolicGroupStep(lesson, 1));
        steps.push(genSymbolicGroupStep(lesson, 2));
        steps.push(genSymbolicGroupStep(lesson, 3));
        steps.push(genSymbolicTrueFalseStep(lesson));
      } else if (sid === "A9-5") {
        steps.push(genDevelopGroupStep(lesson, 1));
        steps.push(genDevelopGroupStep(lesson, 2));
        steps.push(genDevelopGroupStep(lesson, 3));
      } else {
        generateAlgebraQuestions(sid, 5, "practice").forEach(item =>
          steps.push({ kind: "exercise", lesson, item }),
        );
      }
      steps.push({ kind: "eval_start", lesson });
      if (sid === "A9-1") {
        steps.push(genMonomialGroupStep(lesson));
      } else if (sid === "A9-2") {
        steps.push(genAlgebraGroupStep(lesson));
      } else if (sid === "A9-3") {
        steps.push(genEvalExpressionGroupStep(lesson, 1));
        steps.push(genEvalExpressionGroupStep(lesson, 2));
        steps.push(genEvalExpressionGroupStep(lesson, 3));
      } else if (sid === "A9-4") {
        steps.push(genSymbolicGroupStep(lesson, 1));
        steps.push(genSymbolicGroupStep(lesson, 2));
        steps.push(genSymbolicGroupStep(lesson, 3));
        steps.push(genSymbolicTrueFalseStep(lesson));
      } else if (sid === "A9-5") {
        steps.push(genDevelopGroupStep(lesson, 1));
        steps.push(genDevelopGroupStep(lesson, 2));
        steps.push(genDevelopGroupStep(lesson, 3));
      } else {
        generateAlgebraQuestions(sid, 5, "evaluation").forEach(item =>
          steps.push({ kind: "exercise", lesson, item }),
        );
      }
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
    l.submoduleId === "A3-5" || l.submoduleId === "A3-6" || l.submoduleId === "A3-7" ||
    l.submoduleId === "A5-7" || l.submoduleId === "A6-4" ||
    l.submoduleId === "G2-1" || l.submoduleId === "G2-2" ||
    l.submoduleId === "G5-10" ||
    l.submoduleId === "A10-1" || l.submoduleId === "A10-2" ||
    l.submoduleId === "A10-3" || l.submoduleId === "A10-4" || l.submoduleId === "A10-5" ||
    l.submoduleId === "G6-1" ||
    l.submoduleId === "G6-2" ||
    !!G3_GEO_PLACEMENT[l.submoduleId] ||
    !!G5_VOLUME_PLACEMENT[l.submoduleId] ||
    GENERATED_ALGEBRA_LESSONS.has(l.submoduleId)
  );
  if (withEval && lessons.length > 0 && !hasDrillsNoPassToggle) {
    const lastLesson = lessons[lessons.length - 1]!;
    steps.push({ kind: "eval_start", lesson: lastLesson });
    steps.push({ kind: "pass_toggle", lesson: lastLesson });
  }
  // A2-1/A2-2/A2-3/A3-1/A3-2/A3-3/A3-4/A4-2: eval_start + eval exercises already pushed above; no pass_toggle
  return steps;
}

// ── Power table block ────────────────────────────────────────────────────────
const POWER_PAIRS: Array<[number, number | null]> = [[2,3],[4,5],[6,7],[8,9],[10,null]];
const SUPS: Record<number, string> = {1:"¹",2:"²",3:"³",4:"⁴",5:"⁵"};

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
            {y !== null ? `${x}–${y}` : String(x)}
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

// ── Multiplication table block ───────────────────────────────────────────────
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
            {x}–{y}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
        <table className="w-full text-sm">
          <tbody>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <tr key={n} className={n % 2 === 0 ? "bg-[var(--color-bg-secondary)]/40" : "bg-[var(--color-bg-primary)]"}>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{a}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">×</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{n}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">=</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{a * n}</td>
                <td className="w-6" />
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{b}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">×</td>
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
            {x}–{y}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
        <table className="w-full text-sm">
          <tbody>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <tr key={n} className={n % 2 === 0 ? "bg-[var(--color-bg-secondary)]/40" : "bg-[var(--color-bg-primary)]"}>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{a * n}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">÷</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{a}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">=</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{n}</td>
                <td className="w-6" />
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-text-primary)]">{b * n}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">÷</td>
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

// ── Rich block renderer ──────────────────────────────────────────────────────
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
          <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">×</td>
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
                  <td style={{ padding:0, textAlign:"center", verticalAlign:"middle", fontSize:14, color:"var(--color-text-secondary)" }}>−</td>
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
      // autoWidth: columns size to their content (tighter padding, table hugs
      // its text and is centered) instead of stretching to the full width.
      const tCellPad = block.autoWidth ? "px-2 py-1.5" : "px-3 py-2";
      return (
        <div className={`overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border-default)] ${block.autoWidth ? "mx-auto w-fit max-w-full" : ""}`}>
          <table className={`text-sm ${block.autoWidth ? "w-auto" : "w-full"}`}>
            <thead>
              <tr className={block.accentHeader ? "bg-[var(--color-accent-alg)]/15" : "bg-[var(--color-bg-secondary)]"}>
                {tableHeaders.map((h, i) => (
                  <th key={i} className={`${tCellPad} text-center text-xs font-bold ${block.accentHeader ? "uppercase tracking-wide text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"}`}>
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
                      <td key={ci} className={`${tCellPad} text-sm text-[var(--color-text-primary)] ${align === "left" ? "text-left" : "text-center"}`} lang={textLang} dir={textDir}>
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
      {/* Shape tabs — 4×2 grid */}
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
      {/* Content: all 3 sections (Angles / Droites / Symétrie) stacked */}
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

// ── Hint popup + button ──────────────────────────────────────────────────────
function HintPopup({ hint, onClose }: { hint: string; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative w-full max-w-sm rounded-2xl bg-[var(--color-bg-primary)] p-5 shadow-xl dark:shadow-black/50 border border-[var(--color-border-default)]" onClick={e => e.stopPropagation()}>
        <p className="mb-2 text-sm font-bold text-[var(--color-accent-alg)]">💡 Astuce</p>
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
    if (op === "+") return "Additionne chiffre par chiffre de droite à gauche. Si la somme dépasse 9, note le chiffre des unités et retiens 1.";
    if (op === "-") return "Soustrait de droite à gauche. Si le chiffre du bas est plus grand, emprunte 1 à la colonne suivante.";
    if (op === "×") return "Multiplie chaque chiffre séparément, puis additionne les produits partiels.";
    if (op === "÷") return "Cherche combien de fois le diviseur entre dans le dividende. Multiplie, soustrais, abaisse le chiffre suivant.";
  }
  if (step.kind === "column_grid") {
    const op = step.config.op;
    if (op === "+" || op === "-") return "Aligne les chiffres par colonne (unités sous unités, dizaines sous dizaines). Calcule de droite à gauche.";
    if (op === "×") return "Multiplie chaque chiffre du bas par l'ensemble du nombre du haut. Décale d'une colonne vers la gauche à chaque ligne.";
  }
  if (step.kind === "div_column_grid") return "Procède par étapes : combien de fois le diviseur entre-t-il ? Multiplie, soustrais, abaisse le chiffre suivant.";
  if (step.kind === "number_line") return "Compte les graduations entre les deux valeurs affichées. La flèche indique la position du nombre à trouver.";
  if (step.kind === "comparison_ex") return "Compare les chiffres de gauche à droite, en commençant par la position de la plus grande valeur.";
  if (step.kind === "rounding_group") return "Regarde le chiffre juste après la position d'arrondi : si ≥ 5, arrondis au-dessus ; si < 5, arrondis au-dessous.";
  if (step.kind === "frac_id") return "Le numérateur (en haut) indique les parties colorées. Le dénominateur (en bas) indique le nombre total de parts égales.";
  if (step.kind === "frac_equiv") return "Deux fractions sont équivalentes si on peut multiplier ou diviser numérateur ET dénominateur par le même nombre.";
  if (step.kind === "frac_simplify") return "Trouve le PGCD du numérateur et du dénominateur, puis divise les deux par ce nombre.";
  if (step.kind === "frac_compare") return "Pour comparer, réduis au même dénominateur (dénominateur commun), puis compare les numérateurs.";
  if (step.kind === "number_select") return "Utilise la définition vue dans la théorie pour identifier les nombres qui correspondent au critère demandé.";
  if (step.kind === "encadrement") return "Cherche les deux multiples de la puissance de 10 entre lesquels se trouve le nombre.";
  if (step.kind === "odd_even") return "Un nombre pair se termine par 0, 2, 4, 6 ou 8. Un nombre impair se termine par 1, 3, 5, 7 ou 9.";
  if (step.kind === "nl_multi") return "Lis la valeur de chaque graduation en comptant par intervalles réguliers.";
  if (step.kind === "ordering") return "Compare d'abord les signes (positif/négatif), puis les valeurs absolues. Les négatifs sont plus petits que les positifs.";
  if (step.kind === "seq_rule") return "Calcule la différence entre deux termes consécutifs — c'est la raison de la suite.";
  if (step.kind === "seq_complete") return "Applique la raison trouvée : ajoute (ou soustrait) la même valeur à chaque terme pour trouver le suivant.";
  if (step.kind === "mul_two_digit") return "Multiplie d'abord par les unités du deuxième facteur, puis par ses dizaines (en décalant d'une colonne). Additionne les deux résultats.";
  if (step.kind === "expr_comparison") return "Calcule chacune des deux expressions séparément, puis compare les résultats obtenus.";
  if (step.kind === "mult_select") return "Un multiple de n est le résultat de n × 1, n × 2, n × 3… Vérifie la divisibilité.";
  if (step.kind === "mult_list") return "Multiplie n par 1, 2, 3, 4, 5… pour obtenir la liste de ses multiples.";
  if (step.kind === "true_false_mult_div") return "Un diviseur divise le nombre exactement (reste = 0). Un multiple est dans la table du nombre.";
  if (step.kind === "find_divisors") return "Teste chaque nombre de 1 jusqu'à la racine carrée. Si n ÷ d = entier, alors d et n÷d sont tous les deux diviseurs.";
  if (step.kind === "div_select") return "Un diviseur de n divise n exactement. Teste si n ÷ d = nombre entier sans reste.";
  if (step.kind === "div_by") return "Diviser par 10 : déplace la virgule d'un rang à gauche. Par 100 : deux rangs. Par 0,1 : c'est multiplier par 10.";
  if (step.kind === "missing_digit_div") return "Retrouve le chiffre manquant en faisant le calcul à rebours : multiplie le quotient par le diviseur et vérifie.";
  if (step.kind === "gcd_lcm") return "PGDC : décompose en facteurs premiers, prends les facteurs communs au plus petit exposant. PPMC = (a × b) ÷ PGDC(a,b).";
  if (step.kind === "true_false_gcd_lcm") return "PGDC divise les deux nombres. PPMC est divisible par les deux. Vérifie avec la définition.";
  if (step.kind === "dec_ordering") return "Compare les chiffres position par position : entiers d'abord, puis dixièmes, centièmes…";
  if (step.kind === "dec_seq_rule") return "Calcule la différence entre deux termes décimaux consécutifs.";
  if (step.kind === "dec_seq_complete") return "Applique la raison décimale trouvée pour compléter les termes manquants.";
  return undefined;
}

// ── Theory view ──────────────────────────────────────────────────────────────
function TheoryView({ lesson, pivot, showPivot }: {
  lesson: MathSubmoduleLesson;
  pivot: PivotCode;
  showPivot: boolean;
}) {
  const { theory } = lesson;
  const trad = getTrad(lesson.submoduleId);
  const isRtl = pivot === "ar" || pivot === "fa";
  const pivotParas = showPivot ? trad?.paragraphs?.[pivot] ?? theory.paragraphs[pivot] : undefined;
  const paragraphs = pivotParas?.length ? pivotParas : theory.paragraphs.fr;
  return (
    <div className="space-y-4">
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

// ── Main component ───────────────────────────────────────────────────────────
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
    revisionExercise(lesson, "ra1-a11-letters", `Écris en lettres : ${n1}`, A11_WORDS[n1] ?? [String(n1)]),
    revisionExercise(lesson, "ra1-a11-digits", `Écris en chiffres : ${n2}`, [String(n2)], "number"),
    revisionExercise(lesson, "ra1-a11-series", `Complète la suite : ${start}, ${start + 1}, ___, ${start + 3}, ${start + 4}`, [String(missing)], "number"),
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
    revisionExercise(lesson, "ra1-a12-read-blocks", `Quel nombre est formé par ${h} centaines, ${d} dizaines et ${u} unités ?`, [String(n3)], "number"),
    revisionExercise(lesson, "ra1-a12-write-number", `Écris le nombre : ${m4} milliers, ${c4} centaines, ${d4} dizaines et ${u4} unités.`, [String(n4)], "number"),
    revisionExercise(lesson, "ra1-a12-milliers", `Dans ${n4}, quelle est la valeur du chiffre des milliers ?`, [String(m4 * 1000)], "number"),
    revisionExercise(lesson, "ra1-a12-centaines", `Dans ${n4}, quelle est la valeur du chiffre des centaines ?`, [String(c4 * 100)], "number"),
    revisionExercise(lesson, "ra1-a12-cubes", `Combien y a-t-il de cubes si on a ${Math.floor(cubes / 100)} centaines, ${Math.floor((cubes % 100) / 10)} dizaines et ${cubes % 10} unités ?`, [String(cubes)], "number"),
    revisionExercise(lesson, "ra1-a12-dizaine", `Quel est le nombre juste après ${arrowBase} sur une droite graduée de 10 en 10 ?`, [String(arrowBase + 10)], "number"),
    revisionExercise(lesson, "ra1-a12-centaine", `Quel est le nombre juste avant ${nextHundred} sur une droite graduée de 100 en 100 ?`, [String(nextHundred - 100)], "number"),
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
  const trainingHasWordProblems = evalStartIdx >= 0 && steps.slice(0, evalStartIdx).some(s => s.kind === "word_problems");
  const initialIdx = !trainingHasWordProblems && (startAtEval || revisionMode) && evalStartIdx >= 0 ? evalStartIdx : 0;
  const trainingExercisePrompts = (() => {
    const textExercises = (evalStartIdx >= 0 ? steps.slice(0, evalStartIdx) : steps)
      .filter((s) => s.kind === "exercise")
      .map((s) => (s as { kind: "exercise"; item: { promptFr: string } }).item.promptFr);
    if (textExercises.length > 0) return textExercises;
    // Fallback for interactive-only modules (A1.3/A1.4/A1.5/A3.4): use exercisePool for PDF display
    const pool = lessons?.[0]?.exercisePool;
    const size = lessons?.[0]?.poolSize ?? 5;
    if (pool && pool.length > 0 && size > 0)
      return shufflePick(pool, size).map((e) => e.promptFr);
    return [];
  })();

  const [stepIdx, setStepIdx] = useState(initialIdx);
  const [answer, setAnswer] = useState("");
  const [exStatus, setExStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [exAttempts, setExAttempts] = useState(0);
  const [toggleAnswer, setToggleAnswer] = useState<"oui" | "non" | null>(null);

  // Algebra group exercise state (A9.1)
  const [algebraGroupAnswers, setAlgebraGroupAnswers] = useState<string[]>([]);
  const [algebraGroupValidated, setAlgebraGroupValidated] = useState(false);
  const [algebraGroupResults, setAlgebraGroupResults] = useState<boolean[]>([]);
  const [eqAnswers, setEqAnswers] = useState<string[]>([]);
  const [eqWorkAnswers, setEqWorkAnswers] = useState<string[]>([]);
  const [eqValidated, setEqValidated] = useState(false);
  const [eqResults, setEqResults] = useState<boolean[]>([]);
  const [equationOverrideSteps, setEquationOverrideSteps] = useState<Record<number, EquationGroupStep>>({});
  const [systemOverrideSteps, setSystemOverrideSteps] = useState<Record<number, SystemEquationStep>>({});
  const [algebraOverrideSteps, setAlgebraOverrideSteps] = useState<Record<number, AlgebraGroupStep>>({});
  const [monomialOverrideSteps, setMonomialOverrideSteps] = useState<Record<number, MonomialGroupStep>>({});
  const [symbolicOverrideSteps, setSymbolicOverrideSteps] = useState<Record<number, SymbolicGroupStep>>({});
  const [monomialAnswers, setMonomialAnswers] = useState<Array<{ coefficient: string; literal: string; degree: string }>>([]);
  const [monomialValidated, setMonomialValidated] = useState(false);
  const [monomialResults, setMonomialResults] = useState<Array<{ coefficient: boolean; literal: boolean; degree: boolean }>>([]);
  const [symbolicAnswers, setSymbolicAnswers] = useState<string[]>([]);
  const [symbolicValidated, setSymbolicValidated] = useState(false);
  const [symbolicResults, setSymbolicResults] = useState<boolean[]>([]);

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

  // Column grid exercise state (4 cards × 12 cells max)
  const emptyGrid = () => Array.from({ length: 4 }, () => Array(12).fill("") as string[]);
  const emptyCarryGrid = () => Array.from({ length: 4 }, () => Array(4).fill("") as string[]);
  const [gridAnswers, setGridAnswers] = useState<string[][]>(emptyGrid);
  const [gridCarryInputs, setGridCarryInputs] = useState<string[][]>(emptyCarryGrid);
  const [gridValidated, setGridValidated] = useState(false);
  const [gridResults, setGridResults] = useState<boolean[]>(() => Array(4).fill(false));

  // Two-digit multiplication exercise state (4 cards × 25 cells max, 10 carries)
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
  const [geoAnswerSnapshot, setGeoAnswerSnapshot] = useState<G6EvalSnapshot | null>(null);
  const geoSnapshotRef = useRef<G6EvalSnapshot | null>(null);
  const pendingG6EvalRef = useRef<Record<number, { results: boolean[]; snapshot: G6EvalSnapshot }>>({});
  const [geoResetKey, setGeoResetKey] = useState(0);

  // Eval timer
  const [evalTimeLeft, setEvalTimeLeft] = useState<number | null>(null);

  // Revision 30-minute timer
  const [revTimerLeft, setRevTimerLeft] = useState<number | null>(null);

  // Hint popup
  const [showHint, setShowHint] = useState(false);

  // Print config sheet
  const [showPrintConfig, setShowPrintConfig] = useState(false);

  const handlePrint = useCallback(() => {
    setShowPrintConfig(false);
  }, []);

  // Eval phase state
  const [evalSavedResults, setEvalSavedResults] = useState<Record<number, boolean[]>>({});
  const [evalSavedAnswers, setEvalSavedAnswers] = useState<Record<number, string>>({});
  const [showEvalScore, setShowEvalScore] = useState(false);
  const [evalFinalGrade, setEvalFinalGrade] = useState<number | null>(null);
  const [evalEarnedPts, setEvalEarnedPts] = useState(0);
  const [evalTotalPts_state, setEvalTotalPts_state] = useState(0);
  const [evalRowData, setEvalRowData] = useState<Array<{ label: string; score: number; max: number }>>([]);
  const [showEvalCancelConfirm, setShowEvalCancelConfirm] = useState(false);
  const [evalExValidatedFlags, setEvalExValidatedFlags] = useState<Record<number, boolean>>({});
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [evalAnswerSnapshots, setEvalAnswerSnapshots] = useState<Record<number, any>>({});
  const [selectedResultIdx, setSelectedResultIdx] = useState<number | null>(null);

  const currentStep = steps[stepIdx];
  const activeEquationStep = currentStep?.kind === "equation_group"
    ? (equationOverrideSteps[stepIdx] ?? currentStep)
    : undefined;
  const activeSystemStep = currentStep?.kind === "system_equation"
    ? (systemOverrideSteps[stepIdx] ?? currentStep)
    : undefined;
  const activeAlgebraStep = currentStep?.kind === "algebra_group"
    ? (algebraOverrideSteps[stepIdx] ?? currentStep)
    : undefined;
  const activeMonomialStep = currentStep?.kind === "monomial_group"
    ? (monomialOverrideSteps[stepIdx] ?? currentStep)
    : undefined;
  const activeSymbolicStep = currentStep?.kind === "symbolic_group"
    ? (symbolicOverrideSteps[stepIdx] ?? currentStep)
    : undefined;
  const isFirstStep = stepIdx === 0;
  const isLastStep = stepIdx === steps.length - 1;
  const evalSteps = evalStartIdx >= 0 ? steps.slice(evalStartIdx + 1) : [];
  const isInEvalPhase = evalStartIdx >= 0 && stepIdx > evalStartIdx && !showEvalScore;
  const revealCorrection = !isInEvalPhase;
  const inEvalPhase = currentStep?.kind === "eval_start" || currentStep?.kind === "pass_toggle" || isInEvalPhase || showEvalScore;
  const evalStepOffset = isInEvalPhase ? stepIdx - evalStartIdx - 1 : -1;

  const handleG6Validated = useCallback((
    score: number,
    max: number,
    results?: boolean[],
    snapshot?: G6EvalSnapshot,
  ) => {
    const res = results ?? Array.from({ length: max }, (_, i) => i < score);
    setGeoResults(res);
    if (snapshot) {
      geoSnapshotRef.current = snapshot;
      setGeoAnswerSnapshot(snapshot);
      if (isInEvalPhase && evalStepOffset >= 0) {
        pendingG6EvalRef.current[evalStepOffset] = { results: res, snapshot };
      }
    }
    setGeoValidated(true);
  }, [isInEvalPhase, evalStepOffset]);

  // Exercices chronométrés (8 questions) : A2.1/A2.2 ex. 2 et 5, A3.1/A3.3 ex. 2 et 4.
  useEffect(() => {
    if (currentStep?.kind !== "arithmetic_group") return;
    const cfg = arithOverrideConfigs[stepIdx] ?? currentStep.config;
    const n = arithAnswerSlotCount(cfg);
    setArithAnswers((prev) => {
      if (prev.length >= n) return prev;
      return [...prev, ...Array(n - prev.length).fill("")];
    });
    setArithResults((prev) => {
      if (prev.length >= n) return prev;
      return [...prev, ...Array(n - prev.length).fill(false)];
    });
  }, [currentStep, stepIdx, arithOverrideConfigs]);

  const goTo = useCallback((idx: number) => {
    setStepIdx(idx);
    setShowHint(false);
    setAnswer("");
    setExStatus("idle");
    setExAttempts(0);
    setToggleAnswer(null);
    setAlgebraGroupAnswers([]);
    setAlgebraGroupValidated(false);
    setAlgebraGroupResults([]);
    setEqAnswers([]);
    setEqWorkAnswers([]);
    setEqValidated(false);
    setEqResults([]);
    setMonomialAnswers([]);
    setMonomialValidated(false);
    setMonomialResults([]);
    setSymbolicAnswers([]);
    setSymbolicValidated(false);
    setSymbolicResults([]);
    setCompAnswers(Array(5).fill(null));
    setCompValidated(false);
    setExprCompAnswers(Array(5).fill(null));
    setExprCompValidated(false);
    const targetStep = steps[idx];
    const arithN = targetStep?.kind === "arithmetic_group"
      ? arithAnswerSlotCount(arithOverrideConfigs[idx] ?? targetStep.config)
      : 5;
    setArithAnswers(Array(arithN).fill(""));
    setArithValidated(false);
    setArithResults(Array(arithN).fill(false));
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
    setGeoAnswerSnapshot(null);
    geoSnapshotRef.current = null;
    setGeoResetKey(k => k + 1);
    if (idx <= (evalStartIdx >= 0 ? evalStartIdx : 0)) {
      setEvalSavedResults({});
      setShowEvalScore(false);
      setEvalFinalGrade(null);
      setEvalEarnedPts(0);
      setEvalTotalPts_state(0);
      setEvalRowData([]);
    }
  }, [evalStartIdx, steps, arithOverrideConfigs]);

  const goBack = useCallback(() => {
    if (isInEvalPhase) {
      const total = evalSteps.length;
      const offset = stepIdx - evalStartIdx - 1;
      for (let i = 1; i <= total; i++) {
        const idx = (offset - i + total) % total;
        if (!evalExValidatedFlags[idx]) {
          goTo(evalStartIdx + 1 + idx);
          return;
        }
      }
      return;
    }
    if (showEvalScore) return;
    if (!isFirstStep) goTo(stepIdx - 1);
  }, [isFirstStep, stepIdx, goTo, isInEvalPhase, showEvalScore, evalStartIdx, evalSteps.length, evalExValidatedFlags]);

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
    setEvalSavedResults({});
    setEvalSavedAnswers({});
    setShowEvalScore(false);
    setEvalFinalGrade(null);
    setEvalEarnedPts(0);
    setEvalTotalPts_state(0);
    setEvalRowData([]);
    setEvalExValidatedFlags({});
    setSteps(buildSteps(lessons ?? [], withEval));
    goTo(stepIdx + 1);
  }

  function cancelEval() {
    setShowEvalCancelConfirm(false);
    setEvalSavedResults({});
    setEvalSavedAnswers({});
    setShowEvalScore(false);
    setEvalFinalGrade(null);
    setEvalEarnedPts(0);
    setEvalTotalPts_state(0);
    setEvalRowData([]);
    setEvalExValidatedFlags({});
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
      // Revisited exercise (already saved): navigate without re-saving results
      if (evalSavedResults[evalStepOffset] !== undefined) {
        const total = evalSteps.length;
        for (let i = 1; i <= total; i++) {
          const idx = (evalStepOffset + i) % total;
          if (!evalExValidatedFlags[idx]) {
            goTo(evalStartIdx + 1 + idx);
            break;
          }
        }
        return;
      }
      // Suivant clicked without validating: skip to next unvalidated without saving results
      if (!evalExValidatedFlags[evalStepOffset]) {
        const total = evalSteps.length;
        for (let i = 1; i < total; i++) {
          const idx = (evalStepOffset + i) % total;
          if (!evalExValidatedFlags[idx]) {
            goTo(evalStartIdx + 1 + idx);
            break;
          }
        }
        return;
      }
      let currentResults: boolean[] = [];
      if (currentStep.kind === "exercise") {
        currentResults = [answerMatches(answer, currentStep.item.acceptable)];
        setEvalSavedAnswers(prev => ({ ...prev, [evalStepOffset]: answer }));
      } else if (currentStep.kind === "monomial_group") {
        currentResults = monomialResults.map((result) => result.coefficient && result.literal && result.degree);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: monomialAnswers } }));
      } else if (currentStep.kind === "symbolic_group") {
        currentResults = symbolicResults.slice(0, currentStep.questions.length);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: symbolicAnswers } }));
      } else if (currentStep.kind === "equation_group") {
        const step = equationOverrideSteps[stepIdx] ?? currentStep;
        currentResults = eqResults.slice(0, step.questions.length);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: eqAnswers, work: eqWorkAnswers } }));
      } else if (currentStep.kind === "system_equation") {
        currentResults = eqResults.slice(0, 1);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: eqAnswers, work: eqWorkAnswers } }));
      } else if (currentStep.kind === "arithmetic_group") {
        currentResults = arithResults.slice(0, (arithOverrideConfigs[stepIdx] ?? currentStep.config).questions.length);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: arithAnswers } }));
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
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: gridAnswers, carries: gridCarryInputs } }));
      } else if (currentStep.kind === "rounding_group") {
        currentResults = roundingResults.slice(0, (roundingOverrideConfigs[stepIdx] ?? currentStep.config).questions.length);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: roundingAnswers } }));
      } else if (currentStep.kind === "unit_conversion") {
        currentResults = unitConversionResults.slice(0, (unitConversionOverrideConfigs[stepIdx] ?? currentStep.config).questions.length);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: unitConversionAnswers } }));
      } else if (currentStep.kind === "frac_id") {
        currentResults = fracIdResults.slice(0, currentStep.config.questions.length);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: fracIdAnswers } }));
      } else if (currentStep.kind === "frac_equiv") {
        currentResults = fracEquivResults.slice(0, currentStep.config.questions.length);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: fracEquivAnswers } }));
      } else if (currentStep.kind === "frac_simplify") {
        currentResults = fracSimplifyResults.slice(0, currentStep.config.questions.length);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: fracSimplifyAnswers } }));
      } else if (currentStep.kind === "frac_compare") {
        currentResults = fracCompareResults.slice(0, currentStep.config.questions.length);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: fracCompareAnswers } }));
      } else if (currentStep.kind === "number_select") {
        const cfg = numberSelectOverrideConfigs[stepIdx] ?? currentStep.config;
        const total = cfg.numbers.length;
        const correct = cfg.numbers.filter((n, i) => {
          const shouldSelect = cfg.mode === "gt" ? n > cfg.threshold : cfg.mode === "lt" ? n < cfg.threshold : n > cfg.threshold && n < cfg.threshold2!;
          return (numberSelectAnswers[i] ?? false) === shouldSelect;
        }).length;
        // 4 pts all correct · 2 pts more than half · 0 pts otherwise
        if (correct === total) currentResults = [true, true, true, true];
        else if (correct > total / 2) currentResults = [true, true, false, false];
        else currentResults = [false, false, false, false];
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: numberSelectAnswers } }));
      } else if (currentStep.kind === "encadrement") {
        const cfg = encadrementOverrideConfigs[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => {
          const a = encadrementAnswers[i] ?? {lo:"",hi:""};
          return parseInt(a.lo) === q.lo && parseInt(a.hi) === q.hi;
        });
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: encadrementAnswers } }));
      } else if (currentStep.kind === "odd_even") {
        const oeActive = oddEvenOverrideConfigs[stepIdx] ?? currentStep.config;
        currentResults = oeActive.questions.slice(0, 4).map((q, i) => oddEvenAnswers[i] === q.answer);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: oddEvenAnswers } }));
      } else if (currentStep.kind === "nl_multi") {
        const nlActive = nlMultiOverrideConfigs[stepIdx] ?? currentStep.config;
        currentResults = nlActive.questions.map((q, i) => {
          const ans = parseInt(nlMultiAnswers[i] ?? "");
          if (q.mode === "read") return ans === q.nlConfig.target;
          if (q.mode === "less") return !isNaN(ans) && ans < q.nlConfig.target;
          return !isNaN(ans) && ans > q.nlConfig.target;
        });
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: nlMultiAnswers } }));
      } else if (currentStep.kind === "ordering") {
        currentResults = currentStep.config.questions.map((q, qi) => {
          const sel = orderingSelected[qi] ?? [];
          const sorted = [...q.numbers].sort((a,b) => currentStep.config.direction === "asc" ? a-b : b-a);
          return sel.length === q.numbers.length && sel.every((n,i) => n === sorted[i]);
        });
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { selected: orderingSelected } }));
      } else if (currentStep.kind === "seq_rule") {
        currentResults = currentStep.config.questions.map((q, i) => {
          const ans = seqRuleAnswers[i]?.trim() ?? "";
          return ans === `${q.op}${q.step}`;
        });
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: seqRuleAnswers } }));
      } else if (currentStep.kind === "seq_complete") {
        currentResults = currentStep.config.questions.map((q, qi) => {
          return q.blankIdxs.every((bi, ii) => parseInt(seqCompleteAnswers[qi]?.[ii] ?? "") === q.allNums[bi]);
        });
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: seqCompleteAnswers } }));
      } else if (currentStep.kind === "dec_ordering") {
        currentResults = (activeDecOrderingConfig?.questions ?? []).map((q, qi) => {
          const sel = decOrderingSelected[qi] ?? [];
          const sorted = [...q.hundredths].sort((a,b) => (activeDecOrderingConfig?.direction === "asc" ? a-b : b-a));
          return sel.length === q.hundredths.length && sel.every((n,i) => n === sorted[i]);
        });
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { selected: decOrderingSelected } }));
      } else if (currentStep.kind === "dec_seq_rule") {
        currentResults = (activeDecSeqRuleConfig?.questions ?? []).map((q, i) => {
          const ans = decSeqRuleAnswers[i]?.trim() ?? "";
          const correct = `${q.op}${fmtDec(q.step)}`;
          const correctAlt = `${q.op}${fmtDec(q.step).replace(",",".")}`;
          return ans === correct || ans === correctAlt;
        });
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: decSeqRuleAnswers } }));
      } else if (currentStep.kind === "dec_seq_complete") {
        currentResults = (activeDecSeqCompleteConfig?.questions ?? []).map((q, qi) => {
          return q.blankIdxs.every((bi, ii) => {
            const v = decSeqCompleteAnswers[qi]?.[ii] ?? "";
            return parseDec(v) === q.allNums[bi];
          });
        });
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: decSeqCompleteAnswers } }));
      } else if (currentStep.kind === "div_column_grid") {
        const cfg = divGridOverrideConfigs[stepIdx] ?? currentStep.config;
        currentResults = divGridResults.slice(0, cfg.questions.length);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: {
          quotientInputs: divGridQuotientInputs, remainderInputs: divGridRemainderInputs,
          operandInputs: divGridOperandInputs, workInputs: divGridWorkInputs,
        } }));
      } else if (currentStep.kind === "expr_comparison") {
        const cfg = exprCompOverrideConfigs[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => exprCompAnswers[i] === q.answer);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: exprCompAnswers } }));
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
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: mul2dAnswers, carries: mul2dCarryInputs } }));
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
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: multSelectAnswers } }));
      } else if (currentStep.kind === "mult_list") {
        const cfg = multListOverride[stepIdx] ?? currentStep.config;
        currentResults = cfg.bases.map((base, i) => matchesMultList(multListAnswers[i] ?? "", base));
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: multListAnswers } }));
      } else if (currentStep.kind === "true_false_mult_div") {
        const cfg = tfMultDivOverride[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => tfMultDivAnswers[i] === q.answer);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: tfMultDivAnswers } }));
      } else if (currentStep.kind === "find_divisors") {
        const cfg = findDivisorsOverride[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => {
          const parts = parseNumberList(findDivisorsAnswers[i] ?? "");
          const userSet = new Set(parts);
          const correct = new Set(q.divisors);
          return userSet.size === correct.size && [...correct].every(d => userSet.has(d));
        });
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: findDivisorsAnswers } }));
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
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: divSelectAnswers } }));
      } else if (currentStep.kind === "div_by") {
        const cfg = divByOverride[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => {
          const selected = divByAnswers[i] ?? [];
          return q.choices.every((choice, j) => selected[j] === q.validDivisors.includes(choice));
        });
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: divByAnswers } }));
      } else if (currentStep.kind === "missing_digit_div") {
        const cfg = missingDigitOverride[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => {
          const ans = (missingDigitAnswers[i] ?? "").trim();
          return q.validDigits.includes(ans);
        });
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: missingDigitAnswers } }));
      } else if (currentStep.kind === "gcd_lcm") {
        const cfg = gcdLcmOverride[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => {
          const ans = parseInt(gcdLcmAnswers[i] ?? "");
          return ans === q.answer;
        });
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: gcdLcmAnswers } }));
      } else if (currentStep.kind === "true_false_gcd_lcm") {
        const cfg = tfGcdLcmOverride[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => tfGcdLcmAnswers[i] === q.answer);
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: tfGcdLcmAnswers } }));
      } else if (currentStep.kind === "word_problems") {
        const cfg = wpOverrideConfigs[stepIdx] ?? currentStep.config;
        currentResults = cfg.questions.map((q, i) => {
          const v = (wpAnswers[i] ?? "").trim().replace(/\s+/g, "");
          return numericAnswerMatches(v, String(q.answer));
        });
        setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: { answers: wpAnswers } }));
      } else if (currentStep.kind === "geo_placement" || currentStep.kind === "volume_placement" || currentStep.kind === "g6_plan") {
        const fallbackLen = currentStep.kind === "g6_plan" ? 4 : 2;
        const pending = currentStep.kind === "g6_plan" ? pendingG6EvalRef.current[evalStepOffset] : undefined;
        currentResults = pending?.results
          ?? (geoResults.length > 0 ? geoResults : Array(fallbackLen).fill(false));
        if (currentStep.kind === "g6_plan") {
          const snap = pending?.snapshot ?? geoSnapshotRef.current ?? geoAnswerSnapshot;
          if (snap) {
            setEvalAnswerSnapshots(prev => ({ ...prev, [evalStepOffset]: snap }));
          }
        }
      }
      const newSavedDict = { ...evalSavedResults, [evalStepOffset]: currentResults };
      setEvalSavedResults(newSavedDict);
      const newValidatedFlags = { ...evalExValidatedFlags, [evalStepOffset]: true };
      setEvalExValidatedFlags(newValidatedFlags);
      const isDoneNow = evalSteps.length > 0 && Array.from({ length: evalSteps.length }, (_, i) => !!newValidatedFlags[i]).every(Boolean);
      if (isDoneNow) {
        const orderedResults = Array.from({ length: evalSteps.length }, (_, i) => newSavedDict[i] ?? []);
        const allRes = orderedResults.flat();
        const correct = allRes.filter(Boolean).length;
        const total = allRes.length;
        const grade = linearSwissGrade(correct, total);
        const rows = orderedResults.map((res, i) => {
          const es = steps[evalStartIdx + 1 + i];
          const label = es?.kind === "column_grid"
            ? (es.config.preFilledOperands ? "Calcul en colonnes (guidé)" : "Calcul en colonnes")
                : es?.kind === "monomial_group" ? "Coefficient, partie littérale et degré"
                : es?.kind === "symbolic_group" ? es.instruction
                : es?.kind === "equation_group" ? "Équations"
                : es?.kind === "system_equation" ? "Systèmes d'équations"
                : es?.kind === "arithmetic_group"
              ? (es.config.missingOperand ? "Termes manquants" : "Calculs mentaux")
              : es?.kind === "rounding_group"
                ? "Arrondis et estimations"
                : es?.kind === "frac_id" ? "Numérateur et dénominateur"
                : es?.kind === "frac_equiv" ? "Fractions équivalentes"
                : es?.kind === "frac_simplify" ? "Simplification"
                : es?.kind === "frac_compare" ? "Comparaison de fractions"
                : es?.kind === "number_select" ? "Sélection de nombres"
                : es?.kind === "encadrement" ? "Encadrement"
                : es?.kind === "odd_even" ? "Pairs et impairs"
                : es?.kind === "nl_multi" ? "Droite numérique"
                : es?.kind === "ordering" ? "Classement"
                : es?.kind === "seq_rule" ? "Règle de la suite"
                : es?.kind === "seq_complete" ? "Compléter la suite"
                : es?.kind === "dec_ordering" ? "Classement décimaux"
                : es?.kind === "dec_seq_rule" ? "Règle de la suite décimale"
                : es?.kind === "dec_seq_complete" ? "Compléter la suite décimale"
                : es?.kind === "expr_comparison" ? "Comparaison d'expressions"
                : es?.kind === "div_column_grid" ? (es.config.preFilledOperands ? "Division en colonnes (guidée)" : "Division en colonnes")
                : es?.kind === "mul_two_digit" ? (es.config.preFilledOperands ? "Multiplication à 2 chiffres (guidée)" : "Multiplication à 2 chiffres")
                : es?.kind === "mult_select" ? "Multiples — sélection"
                : es?.kind === "mult_list" ? "Liste des multiples"
                : es?.kind === "true_false_mult_div" ? "Vrai ou faux — multiples/diviseurs"
                : es?.kind === "find_divisors" ? "Trouver les diviseurs"
                : es?.kind === "div_select" ? "Divisibilité — sélection"
                : es?.kind === "div_by" ? "Divisible par"
                : es?.kind === "missing_digit_div" ? "Chiffre manquant"
                : es?.kind === "gcd_lcm" ? (es.config.op === "pgcd" ? `PGDC (${es.config.count} nombres)` : `PPMC (${es.config.count} nombres)`)
                : es?.kind === "true_false_gcd_lcm" ? "Vrai ou faux — PGDC/PPMC"
                : es?.kind === "word_problems" ? "Problèmes"
                : es?.kind === "geo_placement" || es?.kind === "volume_placement" ? es.label
                : es?.kind === "g6_plan" ? `Exercice ${es.exNum}`
                : `Exercice ${i + 1}`;
          return { label, score: res.filter(Boolean).length, max: res.length };
        });
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
        const total = evalSteps.length;
        for (let i = 1; i <= total; i++) {
          const idx = (evalStepOffset + i) % total;
          if (!newValidatedFlags[idx]) {
            goTo(evalStartIdx + 1 + idx);
            break;
          }
        }
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
  }, [isLastStep, currentStep, steps, stepIdx, exStatus, answer, moduleId, goTo, router, startSubmoduleId, toggleAnswer, showEvalScore, isInEvalPhase, arithResults, gridResults, arithOverrideConfigs, gridOverrideConfigs, roundingResults, roundingOverrideConfigs, evalSavedResults, evalExValidatedFlags, evalStartIdx, evalStepOffset, evalSteps.length, eqAnswers, eqWorkAnswers, eqResults, fracIdResults, fracEquivResults, fracSimplifyResults, fracCompareResults, numberSelectAnswers, encadrementAnswers, oddEvenAnswers, nlMultiAnswers, orderingSelected, seqRuleAnswers, seqCompleteAnswers, numberSelectOverrideConfigs, encadrementOverrideConfigs, oddEvenOverrideConfigs, nlMultiOverrideConfigs, activeOrderingConfig, activeSeqRuleConfig, activeSeqCompleteConfig, orderingOverrideConfigs, seqRuleOverrideConfigs, seqCompleteOverrideConfigs, divGridResults, divGridOverrideConfigs, mul2dResults, mul2dOverrideConfigs, decOrderingSelected, decSeqRuleAnswers, decSeqCompleteAnswers, activeDecOrderingConfig, activeDecSeqRuleConfig, activeDecSeqCompleteConfig, decOrderingOverrideConfigs, decSeqRuleOverrideConfigs, decSeqCompleteOverrideConfigs, multSelectAnswers, multSelectOverride, multListAnswers, multListOverride, tfMultDivAnswers, tfMultDivOverride, findDivisorsAnswers, findDivisorsOverride, divSelectAnswers, divSelectOverride, divByAnswers, divByOverride, missingDigitAnswers, missingDigitOverride, gcdLcmAnswers, gcdLcmOverride, tfGcdLcmAnswers, tfGcdLcmOverride, wpAnswers, wpOverrideConfigs, unitConversionAnswers, unitConversionResults, unitConversionOverrideConfigs, geoResults]);

  const goNextRef = useRef<() => void>(() => {});
  useEffect(() => { goNextRef.current = goNext; });

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

  function checkEqAnswer(user: string, sol: EquationSolution): boolean {
    const t = user.trim().toLowerCase().replace(/\s+/g, "");
    if (sol.kind === "impossible") return ["impossible","∅","vide","s=∅","s={}"].some(k => t.includes(k));
    if (sol.kind === "infinite") return ["ir","ℝ","infini","s=ir","s=r","s=ℝ"].some(k => t.includes(k));
    const { num, den } = sol;
    const m1 = t.match(/^(-?\d+)$/); if (m1) return parseInt(m1[1]!) * den === num;
    const m2 = t.match(/^(-?\d+)\/(\d+)$/); if (m2) return parseInt(m2[1]!) * den === num * parseInt(m2[2]!);
    return false;
  }

  function normalizeSystemAnswer(value: string): string {
    return value
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/,/g, ";")
      .replace(/−/g, "-")
      .replace(/\[\[frac:([^/\]]+)\/([^\]]+)\]\]/g, "$1/$2");
  }

  if (currentStep?.kind === "equation_group" || currentStep?.kind === "frac_equation_group") {
    if (!eqValidated) {
      stepCanValidate = true;
      stepValidate = () => {
        const qs = currentStep.kind === "equation_group"
          ? (activeEquationStep ?? currentStep as EquationGroupStep).questions
          : (currentStep as FracEquationGroupStep).questions.map(q => ({ expr: "", solution: q.solution }));
        const results = qs.map((q, i) => checkEqAnswer(eqAnswers[i] ?? "", q.solution));
        setEqResults(results);
        setEqValidated(true);
        setExStatus("correct");
      };
    } else if (!isInEvalPhase) {
      stepCanValidate = false;
      stepValidate = () => {};
    }
    stepReset = () => {
      if (currentStep.kind === "equation_group") {
        const lesson = currentStep.lesson;
        const exNum = currentStep.exNum ?? 1;
        const regenerated = lesson.submoduleId === "A10-2"
          ? genFracEquationGroupStep(lesson, exNum)
          : genEquationGroupStep(lesson, exNum);
        setEquationOverrideSteps(prev => ({ ...prev, [stepIdx]: regenerated }));
      }
      setEqAnswers([]);
      setEqWorkAnswers([]);
      setEqValidated(false);
      setEqResults([]);
      setExStatus("idle");
    };
  }

  if (currentStep?.kind === "system_equation") {
    if (!eqValidated) {
      stepCanValidate = true;
      stepValidate = () => {
        const step = activeSystemStep ?? currentStep;
        const expected = step.question.acceptable.map(normalizeSystemAnswer);
        const x = (eqAnswers[0] ?? "").trim();
        const y = (eqAnswers[1] ?? "").trim();
        const xLow = x.toLowerCase().replace(/\s+/g, "");
        const isSpecial = ["ir","ℝ","infini","infinité","impossible","∅","vide"].some(k => xLow === k || xLow.includes(k));
        const combined = isSpecial ? normalizeSystemAnswer(x) : normalizeSystemAnswer(`${x};${y}`);
        const ok = expected.some((item) => combined === item || combined.includes(item));
        setEqResults([ok]);
        setEqValidated(true);
        setExStatus("correct");
      };
    } else if (!isInEvalPhase) {
      stepCanValidate = false;
      stepValidate = () => {};
    }
    stepReset = () => {
      const regenerated = currentStep.lesson.submoduleId === "A10-4"
        ? genLinearCombinationStep(currentStep.lesson)
        : genSystemEquationStep(currentStep.lesson);
      setSystemOverrideSteps(prev => ({ ...prev, [stepIdx]: regenerated }));
      setEqAnswers([]);
      setEqWorkAnswers([]);
      setEqValidated(false);
      setEqResults([]);
      setExStatus("idle");
    };
  }

  if (currentStep?.kind === "algebra_group") {
    if (!algebraGroupValidated) {
      stepCanValidate = true;
      stepValidate = () => {
        const step = activeAlgebraStep ?? currentStep;
        const results = step.questions.map((q, i) => {
          const userAns = (algebraGroupAnswers[i] ?? "").trim();
          return userAns !== "" && Number(userAns) === q.answer;
        });
        setAlgebraGroupResults(results);
        setAlgebraGroupValidated(true);
        setExStatus("correct");
      };
    } else if (!isInEvalPhase) {
      stepCanValidate = false;
      stepValidate = () => {};
    }
    stepReset = () => {
      setAlgebraOverrideSteps(prev => ({ ...prev, [stepIdx]: genAlgebraGroupStep(currentStep.lesson) }));
      setAlgebraGroupAnswers([]);
      setAlgebraGroupValidated(false);
      setAlgebraGroupResults([]);
      setExStatus("idle");
    };
  }

  if (currentStep?.kind === "monomial_group") {
    if (!monomialValidated) {
      stepCanValidate = true;
      stepValidate = () => {
        const step = activeMonomialStep ?? currentStep;
        const results = step.questions.map((question, index) => {
          const user = monomialAnswers[index] ?? { coefficient: "", literal: "", degree: "" };
          return {
            coefficient: symbolicMatches(user.coefficient, question.coefficient),
            literal: symbolicMatches(user.literal, question.literal),
            degree: parseInt(user.degree, 10) === question.degree,
          };
        });
        setMonomialResults(results);
        setMonomialValidated(true);
        setExStatus("correct");
      };
    } else if (!isInEvalPhase) {
      stepCanValidate = false;
      stepValidate = () => {};
    }
    stepReset = () => {
      setMonomialOverrideSteps(prev => ({ ...prev, [stepIdx]: genMonomialGroupStep(currentStep.lesson) }));
      setMonomialAnswers([]);
      setMonomialValidated(false);
      setMonomialResults([]);
      setExStatus("idle");
    };
  }

  if (currentStep?.kind === "symbolic_group") {
    if (!symbolicValidated) {
      stepCanValidate = true;
      stepValidate = () => {
        const step = activeSymbolicStep ?? currentStep;
        const results = step.questions.map((question, index) =>
          symbolicMatches(symbolicAnswers[index] ?? "", question.acceptable),
        );
        setSymbolicResults(results);
        setSymbolicValidated(true);
        setExStatus("correct");
      };
    } else if (!isInEvalPhase) {
      stepCanValidate = false;
      stepValidate = () => {};
    }
    stepReset = () => {
      const exNum = currentStep.exNum;
      const regenerated = currentStep.lesson.submoduleId === "A9-3"
        ? genEvalExpressionGroupStep(currentStep.lesson, exNum)
        : currentStep.lesson.submoduleId === "A9-5"
          ? genDevelopGroupStep(currentStep.lesson, exNum)
          : currentStep.mode === "true_false"
            ? genSymbolicTrueFalseStep(currentStep.lesson)
            : genSymbolicGroupStep(currentStep.lesson, exNum);
      setSymbolicOverrideSteps(prev => ({ ...prev, [stepIdx]: regenerated }));
      setSymbolicAnswers([]);
      setSymbolicValidated(false);
      setSymbolicResults([]);
      setExStatus("idle");
    };
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
      const nextCfg = genArithGroup(cfg.op, cfg.range, cfg.exNum, cfg.missingOperand, cfg.timer);
      const n = arithAnswerSlotCount(nextCfg);
      setArithOverrideConfigs(prev => ({ ...prev, [stepIdx]: nextCfg }));
      setArithAnswers(Array(n).fill(""));
      setArithValidated(false);
      setArithResults(Array(n).fill(false));
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
        return numericAnswerMatches(v, String(q.answer));
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

  if (currentStep?.kind === "geo_placement" || currentStep?.kind === "volume_placement" || currentStep?.kind === "g6_plan") {
    stepCanValidate = !geoValidated;
    stepValidate = geoValidated ? () => {} : () => {
      setGeoValidateTrigger((n) => n + 1);
    };
    stepReset = () => {
      setGeoValidated(false);
      setGeoValidateTrigger(0);
      setGeoResults([]);
      setGeoAnswerSnapshot(null);
      geoSnapshotRef.current = null;
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

  // In eval phase, wrap stepValidate to auto-advance after correction display
  if (stepValidate && isInEvalPhase) {
    const origValidate = stepValidate;
    const capturedOffset = evalStepOffset;
    stepValidate = () => {
      origValidate();
      setEvalExValidatedFlags(prev => ({ ...prev, [capturedOffset]: true }));
      setTimeout(() => goNextRef.current(), 0);
    };
  }

  // Renders the read-only "what did I answer" detail for one eval result row, using the
  // historical step config (evalSteps[stepOffset]) and the answer snapshot captured in
  // goNext() at the moment the student moved past that step. Always fully reveals correction.
  function renderEvalReviewDetail(stepOffset: number): React.ReactNode {
    const step = evalSteps[stepOffset];
    if (!step) return null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const snapshot = evalAnswerSnapshots[stepOffset] as any;
    const results = evalSavedResults[stepOffset] ?? [];
    const noop = () => {};

    switch (step.kind) {
      case "exercise": {
        const userAns = evalSavedAnswers[stepOffset];
        const expectedAns = step.item.acceptable[0];
        if (userAns === undefined || expectedAns === undefined) return null;
        return (
          <div className="text-xs">
            <span className="text-[var(--color-text-secondary)]">Ta réponse : </span>
            <span className="font-mono text-amber-600">{userAns || "—"}</span>
            <span className="mx-1 text-[var(--color-text-secondary)]">→</span>
            <span className="font-mono font-bold text-[var(--color-accent-alg)]">{expectedAns}</span>
          </div>
        );
      }
      case "monomial_group":
        if (!snapshot) return null;
        return (
          <div className="space-y-1 text-xs">
            {step.questions.map((question, index) => {
              const user = snapshot.answers?.[index] ?? {};
              return (
                <p key={index}>
                  <span className="font-mono">{question.expression}</span>
                  <span className="text-[var(--color-text-secondary)]"> : </span>
                  <span className="text-amber-600">{user.coefficient || "—"}; {user.literal || "—"}; {user.degree || "—"}</span>
                  <span className="text-[var(--color-text-secondary)]"> → </span>
                  <span className="font-bold text-[var(--color-accent-alg)]">{question.coefficient[0]}; {question.literal[0]}; {question.degree}</span>
                </p>
              );
            })}
          </div>
        );
      case "symbolic_group":
        if (!snapshot) return null;
        return (
          <div className="space-y-1 text-xs">
            {step.questions.map((question, index) => (
              <p key={index}>
                <span className="font-mono">{question.expression}</span>
                <span className="text-[var(--color-text-secondary)]"> : </span>
                <span className="text-amber-600">{snapshot.answers?.[index] || "—"}</span>
                <span className="text-[var(--color-text-secondary)]"> → </span>
                <span className="font-bold text-[var(--color-accent-alg)]">{question.acceptable[0]}</span>
              </p>
            ))}
          </div>
        );
      case "arithmetic_group":
        if (!snapshot) return null;
        return (
          <ArithmeticGroupExercise
            config={step.config}
            answers={snapshot.answers}
            validated={true}
            results={results}
            onChange={noop}
            revealCorrection={true}
          />
        );
      case "column_grid":
        if (!snapshot) return null;
        return (
          <ColumnGridExercise
            config={step.config}
            answers={snapshot.answers}
            carryInputs={snapshot.carries}
            validated={true}
            results={results}
            onChange={noop}
            onCarryChange={noop}
            revealCorrection={true}
          />
        );
      case "rounding_group":
        if (!snapshot) return null;
        return (
          <RoundingExercise
            config={step.config}
            answers={snapshot.answers}
            validated={true}
            results={results}
            onChange={noop}
            revealCorrection={true}
            noFrame={true}
          />
        );
      case "unit_conversion":
        if (!snapshot) return null;
        return (
          <UnitConversionExercise
            config={step.config}
            answers={snapshot.answers}
            validated={true}
            results={results}
            onChange={noop}
            revealCorrection={true}
          />
        );
      case "frac_id":
        if (!snapshot) return null;
        return (
          <FracIdExercise
            config={step.config}
            answers={snapshot.answers}
            validated={true}
            results={results}
            onChange={noop}
            revealCorrection={true}
            noFrame={true}
          />
        );
      case "frac_equiv":
        if (!snapshot) return null;
        return (
          <FracEquivExercise
            config={step.config}
            answers={snapshot.answers}
            validated={true}
            results={results}
            onChange={noop}
            revealCorrection={true}
            noFrame={true}
          />
        );
      case "frac_simplify":
        if (!snapshot) return null;
        return (
          <FracSimplifyExercise
            config={step.config}
            answers={snapshot.answers}
            validated={true}
            results={results}
            onChange={noop}
            revealCorrection={true}
            noFrame={true}
          />
        );
      case "frac_compare":
        if (!snapshot) return null;
        return (
          <FracCompareExercise
            config={step.config}
            answers={snapshot.answers}
            validated={true}
            onAnswer={noop}
            revealCorrection={true}
            noFrame={true}
          />
        );
      case "div_column_grid":
        if (!snapshot) return null;
        return (
          <DivColumnGridExercise
            config={step.config}
            quotientInputs={snapshot.quotientInputs}
            remainderInputs={snapshot.remainderInputs}
            operandInputs={snapshot.operandInputs}
            workInputs={snapshot.workInputs}
            validated={true}
            onQuotientChange={noop}
            onRemainderChange={noop}
            onOperandChange={noop}
            onWorkChange={noop}
            revealCorrection={true}
          />
        );
      case "expr_comparison":
        if (!snapshot) return null;
        return (
          <ExprCompExercise
            config={step.config}
            answers={snapshot.answers}
            validated={true}
            onAnswer={noop}
            revealCorrection={true}
          />
        );
      case "mul_two_digit":
        if (!snapshot) return null;
        return (
          <Mul2DigitExercise
            config={step.config}
            answers={snapshot.answers}
            carryInputs={snapshot.carries}
            validated={true}
            results={results}
            onChange={noop}
            onCarryChange={noop}
            revealCorrection={true}
          />
        );
      case "word_problems":
        if (!snapshot) return null;
        return (
          <WordProblemsExercise
            config={step.config}
            answers={snapshot.answers}
            validated={true}
            results={results}
            onChange={noop}
            revealCorrection={true}
            noFrame={true}
          />
        );
      case "number_select": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: boolean[] = snapshot.answers;
        return (
          <div className="grid grid-cols-5 gap-2">
            {cfg.numbers.map((n, i) => {
              const sel = answers[i] ?? false;
              const shouldSelect = cfg.mode === "gt" ? n > cfg.threshold : cfg.mode === "lt" ? n < cfg.threshold : n > cfg.threshold && n < cfg.threshold2!;
              let cls = "rounded-lg border px-2 py-2.5 text-center text-sm font-mono font-bold ";
              if (sel && shouldSelect) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
              else if (sel && !shouldSelect) cls += CLS_WRONG;
              else if (!sel && shouldSelect) cls += CLS_WRONG;
              else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-50";
              return <div key={i} className={cls}>{n.toLocaleString("fr-CH")}</div>;
            })}
          </div>
        );
      }
      case "encadrement": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: Array<{ lo: string; hi: string }> = snapshot.answers;
        return (
          <div className="space-y-3">
            {cfg.questions.map((q, i) => {
              const a = answers[i] ?? { lo: "", hi: "" };
              const dir = q.dir ?? "<";
              const firstKey = dir === "<" ? "lo" : "hi";
              const secondKey = dir === "<" ? "hi" : "lo";
              const firstExpected = dir === "<" ? q.lo : q.hi;
              const secondExpected = dir === "<" ? q.hi : q.lo;
              const firstVal = a[firstKey] ?? "";
              const secondVal = a[secondKey] ?? "";
              const wrong = results[i] === false;
              const box = (val: string, expected: number) => wrong ? (
                <div className="w-20 h-[2.125rem] rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center">
                  <span className="text-xs text-[var(--color-text-primary)] leading-none">{val || "—"}</span>
                  <span className="text-xs font-bold text-amber-600 leading-none">{expected}</span>
                </div>
              ) : (
                <span className="w-20 inline-flex h-[2.125rem] items-center justify-center font-mono text-sm text-[var(--color-text-primary)]">{val}</span>
              );
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  {box(firstVal, firstExpected)}
                  <span className="shrink-0 text-sm font-bold text-[var(--color-text-secondary)]">{dir}</span>
                  <span className="w-20 shrink-0 text-center font-mono text-sm text-[var(--color-text-primary)]">{q.n.toLocaleString("fr-CH")}</span>
                  <span className="shrink-0 text-sm font-bold text-[var(--color-text-secondary)]">{dir}</span>
                  {box(secondVal, secondExpected)}
                </div>
              );
            })}
          </div>
        );
      }
      case "odd_even": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: Array<"pair" | "impair" | null> = snapshot.answers;
        return (
          <div className="space-y-3">
            {cfg.questions.slice(0, 4).map((q, i) => {
              const sel = answers[i];
              return (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <span className="w-16 font-mono text-sm text-[var(--color-text-primary)]">{q.n.toLocaleString("fr-CH")}</span>
                  <div className="flex rounded-full border overflow-hidden border-[var(--color-border-default)]">
                    {(["pair", "impair"] as const).map((opt, oi) => {
                      const isSelected = sel === opt;
                      const isCorrect = opt === q.answer;
                      let cls = "w-[4.5rem] py-1.5 text-sm font-bold text-center ";
                      if (oi === 1) cls += "border-l border-[var(--color-border-default)] ";
                      if (isSelected) cls += "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                      else if (isCorrect) cls += "bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]";
                      else cls += "text-[var(--color-text-secondary)] opacity-40";
                      return <span key={opt} className={cls}>{opt}</span>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
      case "nl_multi": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: string[] = snapshot.answers;
        return (
          <div className="space-y-5">
            {cfg.questions.map((q, i) => {
              const v = answers[i] ?? "";
              const wrong = results[i] === false;
              return (
                <div key={i} className="space-y-2">
                  <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
                    <NumberLineSVG config={q.nlConfig} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="shrink-0 text-xs font-bold text-[var(--color-accent-alg)] w-5">{i + 1}.</span>
                    {wrong ? (
                      <div className="flex-1 h-[2.75rem] px-4 py-2.5 text-sm rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center gap-0.5">
                        <span className="text-xs text-[var(--color-text-primary)] leading-none">{v || "—"}</span>
                        {q.mode === "read" && <span className="text-xs font-bold text-amber-600 leading-none">{q.nlConfig.target}</span>}
                      </div>
                    ) : (
                      <span className="flex-1 font-mono text-sm text-[var(--color-text-primary)]">{v}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
      case "ordering": {
        if (!snapshot) return null;
        const cfg = step.config;
        const selected: Array<number[]> = snapshot.selected;
        const sep = cfg.direction === "asc" ? "<" : ">";
        return (
          <div className="space-y-6">
            {cfg.questions.map((q, qi) => {
              const sel = selected[qi] ?? [];
              const sorted = [...q.numbers].sort((a, b) => cfg.direction === "asc" ? a - b : b - a);
              const ok = results[qi];
              return (
                <div key={qi} className="space-y-3">
                  <div className="flex min-h-[48px] flex-wrap items-center gap-1.5 border-b-2 border-[var(--color-accent-alg)] pb-1">
                    <span className="shrink-0 mr-1 text-xs font-bold text-[var(--color-accent-alg)]">{qi + 1}.</span>
                    {sel.map((n, si) => (
                      <Fragment key={si}>
                        <span className="w-20 flex h-10 items-center justify-center rounded-lg border border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] px-1.5 text-sm font-mono font-bold text-white">{n.toLocaleString("fr-CH")}</span>
                        {si < sel.length - 1 && <span className="text-sm font-bold text-[var(--color-text-secondary)]">{sep}</span>}
                      </Fragment>
                    ))}
                  </div>
                  {ok === false && (
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
        );
      }
      case "seq_rule": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: string[] = snapshot.answers;
        return (
          <div className="space-y-4">
            {cfg.questions.map((q, i) => {
              const v = answers[i] ?? "";
              const wrong = results[i] === false;
              const correctAns = `${q.op}${q.step.toLocaleString("fr-CH")}`;
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  {q.nums.map((n, ni) => (
                    <span key={ni} className="shrink-0 flex items-center justify-center rounded-lg border border-[var(--color-border-default)] px-3 py-2 font-mono text-sm text-[var(--color-text-primary)]">{n.toLocaleString("fr-CH")}</span>
                  ))}
                  {wrong ? (
                    <div className="w-24 h-9 rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center">
                      <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{v || "—"}</span>
                      <span className="text-xs font-bold leading-none text-amber-600">{correctAns}</span>
                    </div>
                  ) : (
                    <span className="w-24 text-center font-mono text-sm text-[var(--color-text-primary)]">{v}</span>
                  )}
                </div>
              );
            })}
          </div>
        );
      }
      case "seq_complete": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: Array<string[]> = snapshot.answers;
        return (
          <div className="space-y-5">
            {cfg.questions.map((q, qi) => {
              let blankCounter = 0;
              return (
                <div key={qi} className="flex items-center gap-1.5 flex-wrap">
                  <span className="shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{qi + 1}.</span>
                  {q.allNums.map((n, ni) => {
                    const blankIdx = q.blankIdxs.indexOf(ni);
                    if (blankIdx !== -1) {
                      const bIdx = blankCounter++;
                      const v = answers[qi]?.[bIdx] ?? "";
                      const expected = q.allNums[ni]!;
                      const wrong = parseInt(v) !== expected;
                      return wrong ? (
                        <div key={ni} className="w-12 h-9 rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center">
                          <span className="text-xs text-[var(--color-text-primary)] leading-none">{v || "—"}</span>
                          <span className="text-xs font-bold text-amber-600 leading-none">{expected.toLocaleString("fr-CH")}</span>
                        </div>
                      ) : (
                        <span key={ni} className="w-12 h-9 flex items-center justify-center font-mono text-sm text-[var(--color-text-primary)]">{v}</span>
                      );
                    }
                    return (
                      <span key={ni} className="w-12 h-9 flex items-center justify-center rounded-lg border border-[var(--color-border-default)] font-mono text-sm text-[var(--color-text-primary)]">{n.toLocaleString("fr-CH")}</span>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      }
      case "dec_ordering": {
        if (!snapshot) return null;
        const cfg = step.config;
        const selected: Array<number[]> = snapshot.selected;
        const sep = cfg.direction === "asc" ? "<" : ">";
        return (
          <div className="space-y-6">
            {cfg.questions.map((q, qi) => {
              const sel = selected[qi] ?? [];
              const sorted = [...q.hundredths].sort((a, b) => cfg.direction === "asc" ? a - b : b - a);
              const ok = results[qi];
              return (
                <div key={qi} className="space-y-3">
                  <div className="flex min-h-[48px] flex-wrap items-center gap-1.5 border-b-2 border-[var(--color-accent-alg)] pb-1">
                    <span className="shrink-0 mr-1 text-xs font-bold text-[var(--color-accent-alg)]">{qi + 1}.</span>
                    {sel.map((n, si) => (
                      <Fragment key={si}>
                        <span className="w-[4.5rem] flex h-10 items-center justify-center rounded-lg border border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] px-1.5 text-sm font-mono font-bold text-white">{fmtDec(n)}</span>
                        {si < sel.length - 1 && <span className="text-sm font-bold text-[var(--color-text-secondary)]">{sep}</span>}
                      </Fragment>
                    ))}
                  </div>
                  {ok === false && (
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
        );
      }
      case "dec_seq_rule": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: string[] = snapshot.answers;
        return (
          <div className="space-y-3">
            {cfg.questions.map((q, i) => {
              const v = answers[i] ?? "";
              const wrong = results[i] === false;
              const correctAns = `${q.op}${fmtDec(q.step)}`;
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  {q.nums.map((n, ni) => (
                    <span key={ni} className="h-9 flex items-center justify-center rounded-lg border border-[var(--color-border-default)] px-2 font-mono text-sm text-[var(--color-text-primary)]">{fmtDec(n)}</span>
                  ))}
                  {wrong ? (
                    <div className="h-9 w-20 px-1 text-sm font-mono rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center">
                      <span className="text-xs leading-none text-[var(--color-text-primary)]">{v || "—"}</span>
                      <span className="text-xs font-bold leading-none">{correctAns}</span>
                    </div>
                  ) : (
                    <span className="h-9 w-20 flex items-center justify-center font-mono text-sm text-[var(--color-text-primary)]">{v}</span>
                  )}
                </div>
              );
            })}
          </div>
        );
      }
      case "dec_seq_complete": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: Array<string[]> = snapshot.answers;
        return (
          <div className="space-y-3">
            {cfg.questions.map((q, qi) => {
              let blankCounter = 0;
              return (
                <div key={qi} className="flex items-center gap-1 flex-wrap">
                  <span className="shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{qi + 1}.</span>
                  {q.allNums.map((n, ni) => {
                    const blankIdx = q.blankIdxs.indexOf(ni);
                    if (blankIdx !== -1) {
                      const bIdx = blankCounter++;
                      const v = answers[qi]?.[bIdx] ?? "";
                      const expected = q.allNums[ni]!;
                      const wrong = parseDec(v) !== expected;
                      return wrong ? (
                        <div key={ni} className="h-9 w-14 px-1 font-mono text-sm rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center">
                          <span className="text-xs leading-none text-[var(--color-text-primary)]">{v || "—"}</span>
                          <span className="text-xs font-bold leading-none">{fmtDec(expected)}</span>
                        </div>
                      ) : (
                        <span key={ni} className="h-9 w-14 flex items-center justify-center font-mono text-sm text-[var(--color-text-primary)]">{v}</span>
                      );
                    }
                    return (
                      <span key={ni} className="h-9 w-14 flex items-center justify-center rounded-lg border border-[var(--color-border-default)] font-mono text-sm text-[var(--color-text-primary)]">{fmtDec(n)}</span>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      }
      case "mult_select": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: boolean[] = snapshot.answers;
        return (
          <div className="grid grid-cols-5 gap-2">
            {cfg.numbers.map((n, i) => {
              const sel = answers[i] ?? false;
              const shouldSel = n % cfg.base === 0;
              let cls = "rounded-lg border px-3 py-2 text-center text-sm font-mono font-bold ";
              if (sel && shouldSel) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
              else if (sel && !shouldSel) cls += CLS_WRONG;
              else if (!sel && shouldSel) cls += CLS_WRONG;
              else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-50";
              return <div key={i} className={cls}>{n}</div>;
            })}
          </div>
        );
      }
      case "mult_list": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: string[] = snapshot.answers;
        return (
          <div className="space-y-3">
            {cfg.bases.map((base, i) => {
              const expected = Array.from({ length: 5 }, (_, idx) => base * (idx + 1)).join(", ");
              const v = answers[i] ?? "";
              const wrong = !matchesMultList(v, base);
              return (
                <div key={i} className="space-y-1">
                  <p className="text-xs text-[var(--color-text-secondary)]">Du nombre <strong className="font-bold text-[var(--color-text-primary)]">{base}</strong></p>
                  {wrong ? (
                    <div className="h-11 w-full px-3 flex flex-col justify-center rounded-none border-0 border-b-2 border-amber-500">
                      <span className="text-xs text-[var(--color-text-primary)] leading-none">{v || "—"}</span>
                      <span className="text-xs font-bold text-amber-600 leading-none">{expected}</span>
                    </div>
                  ) : (
                    <p className="font-mono text-sm text-[var(--color-text-primary)]">{v}</p>
                  )}
                </div>
              );
            })}
          </div>
        );
      }
      case "true_false_mult_div": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: Array<boolean | null> = snapshot.answers;
        return (
          <div className="space-y-2">
            {cfg.questions.map((q, i) => {
              const sel = answers[i];
              return (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <span className="flex-1 text-sm text-[var(--color-text-primary)]">{q.statement}</span>
                  <span className={`text-xs font-bold ${sel === q.answer ? "text-[var(--color-accent-alg)]" : "text-amber-600"}`}>
                    {sel === null || sel === undefined ? "—" : sel ? "Vrai" : "Faux"}
                    {sel !== q.answer && ` (att. ${q.answer ? "Vrai" : "Faux"})`}
                  </span>
                </div>
              );
            })}
          </div>
        );
      }
      case "find_divisors": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: string[] = snapshot.answers;
        return (
          <div className="space-y-3">
            {cfg.questions.map((q, i) => {
              const v = answers[i] ?? "";
              const wrong = results[i] === false;
              return (
                <div key={q.number} className="space-y-1">
                  <p className="text-xs text-[var(--color-text-secondary)]">Du nombre <strong className="font-bold text-[var(--color-text-primary)]">{q.number}</strong></p>
                  {wrong ? (
                    <div className="w-full px-3 py-2 text-sm font-mono rounded-none border-0 border-b-2 border-amber-500 flex flex-col gap-0.5">
                      <span className="text-xs text-[var(--color-text-primary)] leading-none">{v || "—"}</span>
                      <span className="text-xs font-bold text-amber-600 leading-none">{q.divisors.join(", ")}</span>
                    </div>
                  ) : (
                    <p className="font-mono text-sm text-[var(--color-text-primary)]">{v}</p>
                  )}
                </div>
              );
            })}
          </div>
        );
      }
      case "div_select": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: boolean[] = snapshot.answers;
        return (
          <div className="grid grid-cols-5 gap-2">
            {cfg.numbers.map((n, i) => {
              const sel = answers[i] ?? false;
              const shouldSel = n % cfg.base === 0;
              let cls = "rounded-lg border px-3 py-2 text-center text-sm font-mono font-bold ";
              if (sel && shouldSel) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
              else if (sel && !shouldSel) cls += CLS_WRONG;
              else if (!sel && shouldSel) cls += CLS_WRONG;
              else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-50";
              return <div key={i} className={cls}>{n}</div>;
            })}
          </div>
        );
      }
      case "div_by": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: boolean[][] = snapshot.answers;
        return (
          <div className="grid items-center gap-x-2 gap-y-3" style={{ gridTemplateColumns: "1.25rem max-content repeat(5, 2.5rem)" }}>
            {cfg.questions.map((q, i) => (
              <Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm text-[var(--color-text-primary)]">{q.n}</span>
                {q.choices.map((choice, j) => {
                  const selected = answers[i]?.[j] ?? false;
                  const shouldSelect = q.validDivisors.includes(choice);
                  let cls = "h-9 w-10 rounded-lg border px-2 text-center text-sm font-mono font-bold ";
                  if (selected && shouldSelect) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                  else if (selected && !shouldSelect) cls += CLS_WRONG;
                  else if (!selected && shouldSelect) cls += CLS_WRONG;
                  else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-50";
                  return <div key={choice} className={cls}>{choice}</div>;
                })}
              </Fragment>
            ))}
          </div>
        );
      }
      case "missing_digit_div": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: string[] = snapshot.answers;
        return (
          <div className="grid items-center gap-x-4 gap-y-3" style={{ gridTemplateColumns: "1.25rem max-content max-content" }}>
            {cfg.questions.map((q, i) => {
              const v = answers[i] ?? "";
              const wrong = !q.validDigits.includes(v.trim());
              return (
                <Fragment key={i}>
                  <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <span className="flex items-end font-mono text-sm text-[var(--color-text-primary)]">
                    {q.prefix}
                    {wrong ? (
                      <span className="w-5 inline-flex h-6 flex-col items-center justify-center leading-none border-0 border-b-2 border-amber-500">
                        <span className="text-[10px] font-bold leading-none text-[var(--color-text-primary)]">{v || "—"}</span>
                        <span className="text-[10px] font-bold leading-none text-amber-600">{q.validDigits[0]}</span>
                      </span>
                    ) : (
                      <span className="w-5 inline-flex justify-center font-bold text-[var(--color-accent-alg)]">{v}</span>
                    )}
                  </span>
                  <span className="text-sm text-[var(--color-text-secondary)]">est divisible par <span className="font-bold text-[var(--color-text-primary)]">{q.divisor}</span></span>
                </Fragment>
              );
            })}
          </div>
        );
      }
      case "gcd_lcm": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: string[] = snapshot.answers;
        return (
          <div className="space-y-2">
            {cfg.questions.map((q, i) => {
              const v = answers[i] ?? "";
              const wrong = parseInt(v) !== q.answer;
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <span className="text-sm text-[var(--color-text-secondary)]">{formatNumsEt(q.nums)} =</span>
                  {wrong ? (
                    <div className="w-20 h-9 px-2 flex flex-col items-center justify-center rounded-none border-0 border-b-2 border-amber-500">
                      <span className="text-xs text-[var(--color-text-primary)] leading-none">{v || "—"}</span>
                      <span className="text-xs font-bold text-amber-600 leading-none">{q.answer}</span>
                    </div>
                  ) : (
                    <span className="font-mono text-sm text-[var(--color-text-primary)]">{v}</span>
                  )}
                </div>
              );
            })}
          </div>
        );
      }
      case "true_false_gcd_lcm": {
        if (!snapshot) return null;
        const cfg = step.config;
        const answers: Array<boolean | null> = snapshot.answers;
        return (
          <div className="space-y-2">
            {cfg.questions.map((q, i) => {
              const sel = answers[i];
              return (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <span className="flex-1 text-sm text-[var(--color-text-primary)]">{q.statement}</span>
                  <span className={`text-xs font-bold ${sel === q.answer ? "text-[var(--color-accent-alg)]" : "text-amber-600"}`}>
                    {sel === null || sel === undefined ? "—" : sel ? "Vrai" : "Faux"}
                    {sel !== q.answer && ` (att. ${q.answer ? "Vrai" : "Faux"})`}
                  </span>
                </div>
              );
            })}
          </div>
        );
      }
      // geo_placement / volume_placement: GeoPlacementExercise / G5VolumeExercise only report
      // an aggregate score+max via onValidated — there is no per-field raw answer to recover,
      // so detailed review is intentionally not available for these kinds.
      case "geo_placement":
      case "volume_placement":
        return (
          <p className="text-xs italic text-[var(--color-text-secondary)]">Détail non disponible pour cet exercice.</p>
        );
      case "g6_plan": {
        const snap = snapshot as G6EvalSnapshot | undefined;
        if (!snap) return null;
        if (step.variant === 1 && snap.kind === "g6_read") {
          return (
            <G6GridReadExercise
              exNum={step.exNum}
              validateCommand={0}
              onValidated={() => {}}
              reviewSnapshot={snap}
            />
          );
        }
        if (step.variant === 2 && snap.kind === "g6_place") {
          return (
            <G6GridPlaceExercise
              exNum={step.exNum}
              validateCommand={0}
              onValidated={() => {}}
              reviewSnapshot={snap}
            />
          );
        }
        if (step.variant === 4 && step.lesson.submoduleId === "G6-1" && snap.kind === "g6_q1_figure") {
          return (
            <G6Q1FigureCoordsExercise
              exNum={step.exNum}
              validateCommand={0}
              onValidated={() => {}}
              reviewSnapshot={snap}
            />
          );
        }
        if ((step.variant === 14 || step.variant === 15) && snap.kind === "g6_q2_figure") {
          return (
            <G6Q2FigureCoordsExercise
              exNum={step.exNum}
              validateCommand={0}
              onValidated={() => {}}
              reviewSnapshot={snap}
              half={snap.half}
            />
          );
        }
        return (
          <p className="text-xs italic text-[var(--color-text-secondary)]">Détail non disponible pour cet exercice.</p>
        );
      }
      // comparison_ex is never produced inside evalSteps (it's an A1.4 training-only exercise,
      // not part of the timed eval flow) — defensive no-op, should be unreachable here.
      case "comparison_ex":
        return null;
      default:
        return null;
    }
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
  const currentStepTrad = currentStep ? getTrad(currentStep.lesson.submoduleId) : undefined;
  const g6Cons = (key: string) => {
    const t = showPivotTranslation ? currentStepTrad?.consignes?.[key]?.[pivot] : undefined;
    return {
      consigne: t,
      consigneLang: t ? pivot : undefined,
      consigneDir: (t && (pivot === "ar" || pivot === "fa" || pivot === "ps")) ? "rtl" as const : "ltr" as const,
    };
  };
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
      {isInEvalPhase && <EvalGuardSentinel />}
      {/* Cancel eval confirmation dialog */}
      {showEvalCancelConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="mx-4 w-full max-w-sm space-y-4 rounded-[var(--radius-lg)] bg-[var(--color-bg-primary)] p-6 shadow-xl">
            <p className="text-base font-bold text-[var(--color-text-primary)]">Annuler l&apos;évaluation ?</p>
            <p className="text-sm text-[var(--color-text-secondary)]">Ta progression dans l&apos;évaluation sera perdue.</p>
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

      {/* Print config sheet */}
      {showPrintConfig && (
        <PrintConfigSheet
          onClose={() => setShowPrintConfig(false)}
          onPrint={handlePrint}
          lessonTitle={revisionTitle ?? currentStep?.lesson.theory.title.fr ?? ""}
          theoryPreview={(() => {
            const ts = trainingSteps.find(s => s.kind === "theory") as { kind: "theory"; lesson: MathSubmoduleLesson } | undefined;
            return ts ? <TheoryView lesson={ts.lesson} pivot={pivot} showPivot={!!showPivotTranslation} /> : undefined;
          })()}
          exercises={trainingExercisePrompts.map((prompt, i) => ({
            id: String(i),
            label: `Exercice ${i + 1}`,
            preview: <p>{prompt}</p>,
          }))}
          accentColor="var(--color-accent-alg)"
        />
      )}

      {/* Main progress bar — training steps only */}
      {!inEvalPhase && (
        <div data-no-print>
          <TrainingProgressBar
            current={trainingStepIdx}
            total={trainingSteps.length}
            timeLeft={trainingTimerLeft}
          />
        </div>
      )}
      {/* Eval progress bar */}
      {isInEvalPhase && !showEvalScore && (
        <div className="mb-6" data-no-print>
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-correction)]">Évaluation</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{evalSteps.length - Object.keys(evalExValidatedFlags).length} restant(s)</p>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: evalSteps.length }).map((_, i) => {
              if (evalExValidatedFlags[i]) return null;
              return (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i === evalStepOffset ? "bg-[var(--color-correction)]" : "bg-[var(--color-border-default)]"
                  }`}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Hint button — floated right, only on exercise steps */}
      {!inEvalPhase && currentStep && currentStep.kind !== "theory" && getStepHint(currentStep) && (
        <div className="float-right ml-2 flex gap-1.5" data-no-print>
          <HintButton onClick={() => setShowHint(true)} />
        </div>
      )}
      {showHint && getStepHint(currentStep) && (
        <div data-no-print>
          <HintPopup hint={getStepHint(currentStep)!} onClose={() => setShowHint(false)} />
        </div>
      )}

      {/* Print config button — floated right, only on theory step */}
      {!showEvalScore && currentStep?.kind === "theory" && (
        <div className="float-right ml-2" data-no-print>
          <button
            type="button"
            onClick={() => setShowPrintConfig(true)}
            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--color-accent-alg)] text-[var(--color-accent-alg)] transition-colors hover:bg-[var(--color-accent-alg)]/10"
            aria-label="Imprimer en PDF"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M6 9V2h12v7" /><rect x="6" y="14" width="12" height="8" rx="1" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <circle cx="18" cy="13" r="0.5" fill="currentColor" />
            </svg>
          </button>
        </div>
      )}

      {/* Theory */}
      {currentStep?.kind === "theory" && (
        <TheoryView lesson={currentStep.lesson} pivot={pivot} showPivot={!!showPivotTranslation} />
      )}

      {/* Exercise */}
      {!showEvalScore && currentStep?.kind === "exercise" && (
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
            placeholder="Votre réponse…"
            className={`w-full px-4 py-3 text-sm ${MATH_TEXT_INPUT_BASE} ${
              exStatus === "wrong"
                ? CLS_WRONG
                : ""
            }`}
          />
          {exStatus === "wrong" && (
            <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
              {exAttempts >= 2 ? `Réponse attendue : ${currentStep.item.acceptable[0]}` : "Essayez encore…"}
            </p>
          )}
        </div>
      )}

      {/* Monomial analysis (A9.1) */}
      {!showEvalScore && currentStep?.kind === "monomial_group" && (() => {
        const step = activeMonomialStep ?? (currentStep as MonomialGroupStep);
        const update = (index: number, field: "coefficient" | "literal" | "degree", value: string) => {
          setMonomialAnswers((previous) => {
            const next = [...previous];
            while (next.length <= index) next.push({ coefficient: "", literal: "", degree: "" });
            next[index] = { ...next[index]!, [field]: value };
            return next;
          });
        };
        return (
          <div className="space-y-4">
            <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice 1</h2>
            <p className="text-sm text-[var(--color-text-primary)]">
              Indiquez le coefficient, la partie littérale et le degré de chaque monôme.
            </p>
            <div className="overflow-x-auto">
              <div className="grid min-w-[34rem] grid-cols-[2rem_minmax(6rem,1fr)_8rem_10rem_5rem] items-stretch text-sm">
                {["", "Monôme", "Coefficient", "Partie littérale", "Degré"].map((heading) => (
                  <div key={heading} className="border-b border-[var(--color-border-default)] px-2 py-2 text-center text-xs font-bold text-[var(--color-text-secondary)]">
                    {heading}
                  </div>
                ))}
                {step.questions.flatMap((question, index) => {
                  const user = monomialAnswers[index] ?? { coefficient: "", literal: "", degree: "" };
                  const result = monomialResults[index];
                  const fields = [
                    { key: "coefficient" as const, value: user.coefficient, correct: question.coefficient[0]!, ok: result?.coefficient },
                    { key: "literal" as const, value: user.literal, correct: question.literal[0]!, ok: result?.literal },
                    { key: "degree" as const, value: user.degree, correct: String(question.degree), ok: result?.degree },
                  ];
                  return [
                    <div key={`${index}-num`} className="flex items-center justify-center border-b border-[var(--color-border-default)] px-1 py-2 text-xs font-bold text-[var(--color-accent-alg)]">{index + 1}.</div>,
                    <div key={`${index}-expr`} className="flex items-center justify-center border-b border-[var(--color-border-default)] px-2 py-2 font-mono font-bold">{question.expression}</div>,
                    ...fields.map((field) => (
                      <div key={`${index}-${field.key}`} className="flex min-h-12 items-center justify-center border-b border-[var(--color-border-default)] px-2 py-1">
                        {monomialValidated && field.ok === false ? (
                          <div className="flex min-w-16 flex-col items-center border-b-2 border-amber-500 pb-1">
                            <span className="text-[10px] text-[var(--color-text-secondary)] line-through">{field.value || "—"}</span>
                            <span className="font-bold text-amber-600">{field.correct}</span>
                          </div>
                        ) : (
                          <input
                            type="text"
                            inputMode={field.key === "degree" ? "numeric" : "text"}
                            value={field.value}
                            disabled={monomialValidated}
                            onChange={(event) => update(index, field.key, event.target.value)}
                            className="w-full min-w-0 border-0 border-b-2 border-[var(--color-accent-alg)]/60 bg-transparent px-1 pb-1 text-center outline-none focus:border-amber-500"
                          />
                        )}
                      </div>
                    )),
                  ];
                })}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Symbolic simplification groups (A9.4) */}
      {!showEvalScore && currentStep?.kind === "symbolic_group" && (() => {
        const step = activeSymbolicStep ?? (currentStep as SymbolicGroupStep);
        const numericOnly = step.lesson.submoduleId === "A9-3";
        return (
          <div className="space-y-4">
            <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {step.exNum}</h2>
            <p className="text-sm text-[var(--color-text-primary)]">{step.instruction}</p>
            {step.givens && step.givens.length > 0 && (
              <p className="text-sm text-[var(--color-text-secondary)]">
                {step.givens.map((g, i) => (
                  <span key={g.letter}>
                    {i > 0 && (i === step.givens!.length - 1 ? " et " : ", ")}
                    <span className="font-bold text-[var(--color-accent-alg)]">{g.letter}</span>
                    {" = "}
                    <span className="font-mono font-bold text-[var(--color-text-primary)]">{g.value}</span>
                  </span>
                ))}
              </p>
            )}
            <div className="space-y-7">
              {step.questions.map((question, index) => {
                const value = symbolicAnswers[index] ?? "";
                const ok = symbolicResults[index];
                return (
                  <div key={index} className="grid grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-x-2 gap-y-2">
                    <span className="pt-0.5 text-xs font-bold text-[var(--color-accent-alg)]">{index + 1}.</span>
                    <span className="min-w-0 overflow-x-auto whitespace-nowrap font-mono text-sm text-[var(--color-text-primary)]">{formatAlgebraDisplay(question.expression)}</span>
                    {step.mode === "true_false" ? (
                      <div className="col-start-2 flex gap-1">
                        {(["vrai", "faux"] as const).map((choice) => {
                          const selected = value === choice;
                          const isCorrectChoice = question.acceptable[0] === choice;
                          return (
                            <button
                              key={choice}
                              type="button"
                              disabled={symbolicValidated}
                              onClick={() => setSymbolicAnswers((previous) => {
                                const next = [...previous];
                                next[index] = choice;
                                return next;
                              })}
                              className={`min-h-9 min-w-14 rounded-md border px-2 text-xs font-semibold transition-colors ${
                                selected ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] text-[var(--color-text-secondary)]"
                              } ${symbolicValidated && isCorrectChoice ? "!border-amber-500 !text-amber-600" : ""}`}
                            >
                              {choice === "vrai" ? "Vrai" : "Faux"}
                            </button>
                          );
                        })}
                      </div>
                    ) : symbolicValidated && ok === false ? (
                      <div className="col-start-2 flex w-full flex-col items-center border-b-2 border-amber-500 pb-1">
                        <span className="text-[10px] text-[var(--color-text-secondary)] line-through">{value || "—"}</span>
                        <span className="text-center text-xs font-bold text-amber-600">{question.acceptable[0]}</span>
                      </div>
                    ) : (
                      <input
                        type="text"
                        inputMode={numericOnly ? "decimal" : "text"}
                        value={value}
                        disabled={symbolicValidated}
                        onChange={(event) => setSymbolicAnswers((previous) => {
                          const next = [...previous];
                          next[index] = numericOnly ? cleanAlgebraNumberInput(event.target.value) : event.target.value;
                          return next;
                        })}
                        className="col-start-2 w-full border-0 border-b-2 border-[var(--color-accent-alg)]/60 bg-transparent px-1 pb-1 text-center font-mono text-sm outline-none focus:border-amber-500"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* Equation group (A10.1) */}
      {!showEvalScore && currentStep?.kind === "equation_group" && (() => {
        const step = activeEquationStep ?? (currentStep as EquationGroupStep);
        const formatSol = (sol: EquationSolution) =>
          sol.kind === "impossible" ? "impossible" : sol.kind === "infinite" ? "infini" :
          sol.den === 1 ? `${sol.num}` : `${sol.num}/${sol.den}`;
        const formatXSol = (sol: EquationSolution) =>
          sol.kind === "impossible" ? "impossible" : sol.kind === "infinite" ? "infini" :
          sol.den === 1 ? `${sol.num}` : `${sol.num}/${sol.den}`;
        const inputCls = "w-24 px-0 pb-1 text-sm text-center font-mono rounded-none border-0 border-b-2 outline-none transition-colors disabled:opacity-70 border-[var(--color-accent-alg)]/60 focus:border-[var(--color-accent-alg)]";
        const workInputCls = "w-full px-0 pb-1 text-sm font-mono rounded-none border-0 border-b-2 outline-none transition-colors disabled:opacity-70 border-[var(--color-accent-alg)]/50 focus:border-amber-500";
        const singleQuestion = step.questions.length === 1 && !!step.questions[0]?.development;
        if (singleQuestion) {
          const q = step.questions[0]!;
          const userAns = eqAnswers[0] ?? "";
          const result = eqValidated ? (eqResults[0] ?? null) : null;
          const isWrong = result === false;
          const infActive = userAns.trim().toLowerCase() === "infini";
          const impActive = userAns.trim().toLowerCase() === "impossible";
          const btnClsSingle = (active: boolean) => `px-1.5 py-0.5 text-xs rounded border transition-colors ${active ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]/50"}`;
          return (
            <div className="space-y-5">
              <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {step.exNum ?? 1}</h2>
              <p className="text-sm text-[var(--color-text-secondary)]">Résolvez l&apos;équation. Écrivez le développement, puis la valeur de x.</p>
              <div className="space-y-5">
                <div className="mb-5 text-center font-mono text-sm text-[var(--color-text-primary)]">{renderText(q.expr)}</div>
                <div className="space-y-3">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div key={i}>
                      <input
                        type="text"
                        inputMode="text"
                        value={eqWorkAnswers[i] ?? ""}
                        disabled={eqValidated}
                        onChange={(e) => setEqWorkAnswers(prev => {
                          const next = [...prev];
                          while (next.length <= i) next.push("");
                          next[i] = e.target.value;
                          return next;
                        })}
                        className={workInputCls}
                      />
                    </div>
                  ))}
                  {!eqValidated && (
                    <div className="flex justify-center gap-2">
                      <button type="button" onClick={() => setEqAnswers(prev => { const n=[...prev]; n[0]=infActive?"":"infini"; return n; })} className={btnClsSingle(infActive)}>∞</button>
                      <button type="button" onClick={() => setEqAnswers(prev => { const n=[...prev]; n[0]=impActive?"":"impossible"; return n; })} className={btnClsSingle(impActive)}>impossible</button>
                    </div>
                  )}
                  <div className="grid grid-cols-[auto_8rem] items-end justify-center gap-2 pt-2">
                    <span className="text-sm font-semibold text-[var(--color-text-primary)]">x =</span>
                    {isWrong ? (
                      <div className="flex flex-col items-center border-b-2 border-amber-500 pb-1">
                        <span className="text-[10px] leading-none text-[var(--color-text-secondary)] line-through">{userAns || "—"}</span>
                        <span className="text-xs font-bold leading-none text-amber-600">{formatXSol(q.solution)}</span>
                      </div>
                    ) : (
                      <input
                        type="text"
                        inputMode="decimal"
                        value={userAns}
                        disabled={eqValidated || infActive || impActive}
                        onChange={e => setEqAnswers(prev => {
                          const next = [...prev];
                          next[0] = cleanAlgebraNumberInput(e.target.value);
                          return next;
                        })}
                        className={inputCls}
                      />
                    )}
                    {result === true && <span className="col-start-2 text-center text-xs text-[var(--color-accent-alg)]">✓</span>}
                  </div>
                </div>
                {eqValidated && (
                  <div className="mt-5 border-t border-[var(--color-border)] pt-4">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wide text-amber-600">Correction</div>
                    <div className="space-y-1 font-mono text-sm text-amber-600">
                      {q.development!.map((line, i) => {
                        const op = q.operations?.[i] ?? "";
                        const equalIndex = line.indexOf("=");
                        const hasEquation = equalIndex > 0;
                        return (
                          <div key={`${line}-${i}`} className="grid grid-cols-[minmax(5rem,1fr)_1rem_minmax(5rem,1fr)_minmax(3.5rem,auto)] items-center gap-2">
                            {hasEquation ? (
                              <>
                                <span className="text-right">{renderText(line.slice(0, equalIndex).trim())}</span>
                                <span className="text-center">=</span>
                                <span>{renderText(line.slice(equalIndex + 1).trim())}</span>
                              </>
                            ) : (
                              <span className="col-span-3 text-center font-bold">{renderText(line)}</span>
                            )}
                            <span className={`min-h-5 whitespace-pre-line border-l border-amber-500 pl-3 ${op ? "" : "text-transparent"}`}>{op || "."}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        }
        return (
          <div className="space-y-4">
            <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {step.exNum ?? 1}</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Résolvez les équations. Entrez un entier (ex&nbsp;: 4&nbsp;ou&nbsp;−6), une fraction (ex&nbsp;: −1/4), <em>impossible</em> ou <em>IR</em>.</p>
            <div className="space-y-4">
              {step.questions.map((q, i) => {
                const userAns = eqAnswers[i] ?? "";
                const result = eqValidated ? (eqResults[i] ?? null) : null;
                const isWrong = result === false;
                const infA = userAns.trim().toLowerCase() === "infini";
                const impA = userAns.trim().toLowerCase() === "impossible";
                const btnCls = (active: boolean) => `px-1.5 py-0.5 text-xs rounded border transition-colors ${active ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]/50"}`;
                return (
                  <div key={i} className="flex flex-wrap items-center gap-2">
                    <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                    <span className="font-mono text-sm text-[var(--color-text-primary)]">{renderText(q.expr)}</span>
                    <span className="text-sm text-[var(--color-text-secondary)] mx-1">x =</span>
                    {isWrong ? (
                      <div className="w-24 flex flex-col items-center rounded-none border-0 border-b-2 border-amber-500 px-0 py-0.5">
                        <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{userAns || "—"}</span>
                        <span className="text-xs font-bold leading-none text-amber-600">{formatSol(q.solution)}</span>
                      </div>
                    ) : (
                      <input type="text" inputMode="decimal" value={userAns} disabled={eqValidated || infA || impA}
                        onChange={e => setEqAnswers(prev => { const n=[...prev]; while(n.length<=i)n.push(""); n[i]=cleanAlgebraNumberInput(e.target.value); return n; })}
                        className={inputCls} />
                    )}
                    {!eqValidated && <button type="button" onClick={() => setEqAnswers(prev => { const n=[...prev]; while(n.length<=i)n.push(""); n[i]=infA?"":"infini"; return n; })} className={btnCls(infA)}>∞</button>}
                    {!eqValidated && <button type="button" onClick={() => setEqAnswers(prev => { const n=[...prev]; while(n.length<=i)n.push(""); n[i]=impA?"":"impossible"; return n; })} className={btnCls(impA)}>impossible</button>}
                    {result === true && <span className="text-xs text-[var(--color-accent-alg)]">✓</span>}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* System equation group (A10.3) */}
      {!showEvalScore && currentStep?.kind === "system_equation" && (() => {
        const step = activeSystemStep ?? (currentStep as SystemEquationStep);
        const q = step.question;
        const result = eqValidated ? (eqResults[0] ?? null) : null;
        const isWrong = result === false;
        const inputCls = "w-28 px-0 pb-1 text-sm text-center font-mono rounded-none border-0 border-b-2 outline-none transition-colors disabled:opacity-70 border-[var(--color-accent-alg)]/60 focus:border-[var(--color-accent-alg)]";
        const workInputCls = "w-full px-0 pb-1 text-sm font-mono rounded-none border-0 border-b-2 outline-none transition-colors disabled:opacity-70 border-[var(--color-accent-alg)]/50 focus:border-amber-500";
        return (
          <div className="space-y-5">
            <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {step.exNum ?? 1}</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Résolvez le système. Écrivez le développement, puis l&apos;ensemble solution.</p>
            <div className="mx-auto grid w-fit grid-cols-[auto_auto_1fr] items-center gap-x-3 font-mono text-sm text-[var(--color-text-primary)]">
              <span className="text-sm font-serif">I</span>
              <span className="row-span-2 text-5xl leading-none text-[var(--color-text-secondary)]">{"{"}</span>
              <span>{renderText(q.equations[0])}</span>
              <span className="text-sm font-serif">II</span>
              <span>{renderText(q.equations[1])}</span>
            </div>
            <div className="space-y-3">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="grid grid-cols-[1.5rem_1fr] items-end gap-2">
                  <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <input
                    type="text"
                    inputMode="text"
                    value={eqWorkAnswers[i] ?? ""}
                    disabled={eqValidated}
                    onChange={(e) => setEqWorkAnswers(prev => {
                      const next = [...prev];
                      while (next.length <= i) next.push("");
                      next[i] = e.target.value;
                      return next;
                    })}
                    className={workInputCls}
                  />
                </div>
              ))}
              {(() => {
                const isPairSol = (q.acceptable[0] ?? "").includes(";");
                const corrX = isPairSol ? ((q.acceptable[0] ?? "").split(";")[0] ?? "") : q.answer;
                const corrY = isPairSol ? ((q.acceptable[0] ?? "").split(";")[1] ?? "") : "";
                const userX = eqAnswers[0] ?? "";
                const userY = eqAnswers[1] ?? "";
                const xLow = userX.trim().toLowerCase().replace(/\s+/g, "");
                const isSpecialBtn = xLow === "infini" || xLow === "impossible" || xLow === "∅";
                const infA = xLow === "infini";
                const impA = xLow === "impossible" || xLow === "∅";
                const btnCls = (active: boolean) => `px-1.5 py-0.5 text-xs rounded border transition-colors ${active ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]/50"}`;
                return (
                  <div className="space-y-2 pt-2">
                    {!eqValidated && (
                      <div className="flex justify-center gap-2">
                        <button type="button" onClick={() => setEqAnswers(prev => { const n=[...prev]; while(n.length<2)n.push(""); n[0]=infA?"":"infini"; if(!infA)n[1]=""; return n; })} className={btnCls(infA)}>∞</button>
                        <button type="button" onClick={() => setEqAnswers(prev => { const n=[...prev]; while(n.length<2)n.push(""); n[0]=impA?"":"impossible"; if(!impA)n[1]=""; return n; })} className={btnCls(impA)}>impossible</button>
                      </div>
                    )}
                    <div className="flex items-end justify-center gap-2">
                      <span className="text-sm font-semibold text-[var(--color-text-primary)]">x =</span>
                      {isWrong ? (
                        <div className="w-28 flex flex-col items-center rounded-none border-0 border-b-2 border-amber-500 px-0 py-0.5">
                          <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{userX || "—"}</span>
                          <span className="text-xs font-bold leading-none text-amber-600">{renderText(corrX)}</span>
                        </div>
                      ) : (
                        <input type="text" inputMode="decimal" value={userX} disabled={eqValidated || isSpecialBtn}
                          onChange={e => setEqAnswers(prev => { const n=[...prev]; while(n.length<2)n.push(""); n[0]=cleanAlgebraNumberInput(e.target.value); return n; })}
                          className={inputCls} />
                      )}
                    </div>
                    {(!isSpecialBtn || isWrong) && isPairSol && (
                      <div className="flex items-end justify-center gap-2">
                        <span className="text-sm font-semibold text-[var(--color-text-primary)]">y =</span>
                        {isWrong ? (
                          <div className="w-28 flex flex-col items-center rounded-none border-0 border-b-2 border-amber-500 px-0 py-0.5">
                            <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{userY || "—"}</span>
                            <span className="text-xs font-bold leading-none text-amber-600">{renderText(corrY)}</span>
                          </div>
                        ) : (
                          <input type="text" inputMode="decimal" value={userY} disabled={eqValidated}
                            onChange={e => setEqAnswers(prev => { const n=[...prev]; while(n.length<2)n.push(""); n[1]=cleanAlgebraNumberInput(e.target.value); return n; })}
                            className={inputCls} />
                        )}
                      </div>
                    )}
                    {result === true && <div className="text-center text-xs text-[var(--color-accent-alg)]">✓</div>}
                  </div>
                );
              })()}
            </div>
            {eqValidated && (
              <div className="mt-5 border-t border-[var(--color-border)] pt-4">
                <div className="mb-2 text-xs font-bold uppercase tracking-wide text-amber-600">Correction</div>
                <div className="space-y-1 font-mono text-sm text-amber-600">
                  {q.development.map((line, i) => {
                    const op = q.operations?.[i] ?? "";
                    const equalIndex = line.indexOf("=");
                    const hasEquation = equalIndex > 0;
                    return (
                      <div key={`${line}-${i}`} className="grid grid-cols-[minmax(5rem,1fr)_1rem_minmax(5rem,1fr)_minmax(3.5rem,auto)] items-center gap-2">
                        {hasEquation ? (
                          <>
                            <span className="text-right">{renderText(line.slice(0, equalIndex).trim())}</span>
                            <span className="text-center">=</span>
                            <span>{renderText(line.slice(equalIndex + 1).trim())}</span>
                          </>
                        ) : (
                          <span className="col-span-3 text-center font-bold">{renderText(line)}</span>
                        )}
                        <span className={`min-h-5 whitespace-pre-line border-l border-amber-500 pl-3 ${op ? "" : "text-transparent"}`}>{op || "."}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })()}

      {/* Fraction equation group (A10.2) */}
      {!showEvalScore && currentStep?.kind === "frac_equation_group" && (() => {
        const step = currentStep as FracEquationGroupStep;
        const formatSol = (sol: EquationSolution) =>
          sol.kind === "impossible" ? "impossible" : sol.kind === "infinite" ? "infini" :
          sol.den === 1 ? `${sol.num}` : `${sol.num}/${sol.den}`;
        const inputCls = "w-24 px-0 pb-1 text-sm text-center font-mono rounded-none border-0 border-b-2 outline-none transition-colors disabled:opacity-70 border-[var(--color-accent-alg)]/60 focus:border-[var(--color-accent-alg)]";
        // Render a side (list of terms) as inline fraction elements
        const renderTerm = (t: { num: number; den: number; xMul: number }, idx: number) => {
          const isNeg = t.num < 0;
          const absN = Math.abs(t.num);
          const sign = idx === 0 ? (isNeg ? "−" : "") : (isNeg ? " − " : " + ");
          const coef = t.den === 1
            ? <span className="font-mono">{absN === 1 && t.xMul === 1 ? "" : absN}</span>
            : <FracDisplay num={`${absN}`} den={`${t.den}`} />;
          const varPart = t.xMul === 1 ? <span className="font-mono">x</span> : null;
          return <span key={idx} className="inline-flex items-center">{sign}{coef}{varPart}</span>;
        };
        const renderSide = (side: FracEqSide) => (
          <span className="inline-flex items-center flex-wrap gap-0">
            {side.terms.map((t, i) => renderTerm(t, i))}
          </span>
        );
        return (
          <div className="space-y-4">
            <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice 1</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Résolvez les équations. Entrez une fraction (ex&nbsp;: 3/4), un entier, <em>impossible</em> ou <em>infini</em>.</p>
            <div className="space-y-5">
              {step.questions.map((q, i) => {
                const userAns = eqAnswers[i] ?? "";
                const result = eqValidated ? (eqResults[i] ?? null) : null;
                const isWrong = result === false;
                const infA = userAns.trim().toLowerCase() === "infini";
                const impA = userAns.trim().toLowerCase() === "impossible";
                const btnCls = (active: boolean) => `px-1.5 py-0.5 text-xs rounded border transition-colors ${active ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]/50"}`;
                return (
                  <div key={i} className="flex flex-wrap items-center gap-2">
                    <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                    <span className="inline-flex items-center text-sm text-[var(--color-text-primary)]">
                      {renderSide(q.lhs)}
                      <span className="mx-2 font-mono">=</span>
                      {renderSide(q.rhs)}
                    </span>
                    <span className="text-sm text-[var(--color-text-secondary)] mx-1">x =</span>
                    {isWrong ? (
                      <div className="w-24 flex flex-col items-center rounded-none border-0 border-b-2 border-amber-500 px-0 py-0.5">
                        <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{userAns || "—"}</span>
                        <span className="text-xs font-bold leading-none text-amber-600">{formatSol(q.solution)}</span>
                      </div>
                    ) : (
                      <input type="text" inputMode="decimal" value={userAns} disabled={eqValidated || infA || impA}
                        onChange={e => setEqAnswers(prev => { const n=[...prev]; while(n.length<=i)n.push(""); n[i]=cleanAlgebraNumberInput(e.target.value); return n; })}
                        className={inputCls} />
                    )}
                    {!eqValidated && <button type="button" onClick={() => setEqAnswers(prev => { const n=[...prev]; while(n.length<=i)n.push(""); n[i]=infA?"":"infini"; return n; })} className={btnCls(infA)}>∞</button>}
                    {!eqValidated && <button type="button" onClick={() => setEqAnswers(prev => { const n=[...prev]; while(n.length<=i)n.push(""); n[i]=impA?"":"impossible"; return n; })} className={btnCls(impA)}>impossible</button>}
                    {result === true && <span className="text-xs text-[var(--color-accent-alg)]">✓</span>}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* Algebra group exercise (A9.2) */}
      {!showEvalScore && currentStep?.kind === "algebra_group" && (() => {
        const step = activeAlgebraStep ?? (currentStep as AlgebraGroupStep);
        return (
          <div className="space-y-4">
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">Calculez le résultat.</p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              <span className="font-bold text-[var(--color-accent-alg)]">{step.letter}</span>
              {" = "}
              <span className="font-mono font-bold text-[var(--color-text-primary)]">{step.value}</span>
            </p>
            {/* Single grid for all rows so the "=" and answer boxes line up vertically.
                The answer column takes all remaining width. */}
            <div className="grid w-full grid-cols-[1.5rem_auto_1rem_minmax(0,1fr)] items-center gap-x-3 gap-y-3">
              {step.questions.map((q, i) => {
                const userAns = algebraGroupAnswers[i] ?? "";
                const result = algebraGroupValidated ? (algebraGroupResults[i] ?? null) : null;
                const isWrong = result === false;
                return (
                  <Fragment key={i}>
                    <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                    <span className="whitespace-nowrap font-mono text-sm text-[var(--color-text-primary)]">{q.expr}</span>
                    <span className="text-center font-mono text-sm text-[var(--color-text-primary)]">=</span>
                    {isWrong ? (
                      <div className="w-full flex flex-col items-center rounded-none border-0 border-b-2 border-amber-500 px-0 py-0.5">
                        <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{userAns || "—"}</span>
                        <span className="text-xs font-bold leading-none text-amber-600">{q.answer}</span>
                      </div>
                    ) : (
                      <input
                        type="text"
                        inputMode="decimal"
                        value={userAns}
                        disabled={algebraGroupValidated}
                        onChange={e => {
                          const val = cleanAlgebraNumberInput(e.target.value);
                          setAlgebraGroupAnswers(prev => {
                            const next = [...prev];
                            while (next.length <= i) next.push("");
                            next[i] = val;
                            return next;
                          });
                        }}
                        className={`w-full px-0 pb-1 text-sm text-center font-mono rounded-none border-0 border-b-2 outline-none transition-colors disabled:opacity-70 ${
                          result === true
                            ? "border-[var(--color-accent-alg)]"
                            : "border-[var(--color-accent-alg)]/60 focus:border-[var(--color-accent-alg)]"
                        }`}
                      />
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* Number line exercise */}
      {!showEvalScore && currentStep?.kind === "number_line" && (
        <div className="space-y-4">
          <p className="text-sm font-medium text-[var(--color-text-primary)]">
            Quel est le nombre indiqué par la flèche ?
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
            placeholder="Votre réponse…"
            className={`w-full px-4 py-3 text-sm ${MATH_NUMBER_INPUT_BASE} ${
              exStatus === "wrong"
                ? CLS_WRONG
                : ""
            }`}
          />
          {exStatus === "wrong" && (
            <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
              {exAttempts >= 2 ? `Réponse attendue : ${currentStep.nlConfig.target}` : "Essayez encore…"}
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
              if (!(numberSelectValidated && revealCorrection)) {
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
            Encadrez chaque nombre à la {activeEncadrementConfig.unit === 10 ? "dizaine" : "centaine"} près.
          </p>
          <div className="space-y-3">
            {activeEncadrementConfig.questions.map((q, i) => {
              const a = encadrementAnswers[i] ?? {lo:"",hi:""};
              const ok = encadrementValidated && revealCorrection ? encadrementResults[i] : null;
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
                  <span className="text-xs text-[var(--color-text-primary)] leading-none">{firstVal||"—"}</span>
                  <span className="text-xs font-bold text-amber-600 leading-none">{firstExpected}</span>
                </div>
              ) : (
                <input type="text" inputMode="numeric" value={firstVal} disabled={encadrementValidated}
                  onChange={e => setEncadrementAnswers(prev => prev.map((v,j) => j===i ? {...v, [firstKey]: e.target.value.replace(/[^0-9]/g, "")} : v))}
                  className={inputCls} />
              );
              const secondBlock = wrong ? (
                <div className={`${inputCls} h-[2.125rem] rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center`}>
                  <span className="text-xs text-[var(--color-text-primary)] leading-none">{secondVal||"—"}</span>
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
              const ok = oddEvenValidated && revealCorrection ? oddEvenResults[i] : null;
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
                      if (!(oddEvenValidated && revealCorrection)) {
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
              const ok = nlMultiValidated && revealCorrection ? nlMultiResults[i] : null;
              const noFeedback = activeNlMultiConfig.noFeedback;
              const wrong = ok === false;
              const inputCls = `flex-1 h-[2.75rem] px-4 py-2.5 text-sm ${MATH_NUMBER_INPUT_BASE}`;
              let afterText = "";
              if (!noFeedback) {
                if (nlMultiValidated && revealCorrection && q.mode === "read" && ok === false) afterText = `Réponse attendue : ${q.nlConfig.target}`;
                else if (nlMultiValidated && revealCorrection && q.mode === "less" && ok === false) afterText = `La flèche indique ${q.nlConfig.target}. Votre réponse doit être plus petite.`;
                else if (nlMultiValidated && revealCorrection && q.mode === "more" && ok === false) afterText = `La flèche indique ${q.nlConfig.target}. Votre réponse doit être plus grande.`;
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
                        <span className="text-xs text-[var(--color-text-primary)] leading-none">{v||"—"}</span>
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
      {!showEvalScore && currentStep?.kind === "ordering" && activeOrderingConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeOrderingConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Classez les nombres dans l&apos;ordre {activeOrderingConfig.direction === "asc" ? "croissant (du plus petit au plus grand)" : "décroissant (du plus grand au plus petit)"}.
          </p>
          <div className="space-y-6">
            {activeOrderingConfig.questions.map((q, qi) => {
              const sel = orderingSelected[qi] ?? [];
              const available = q.numbers.filter(n => !sel.includes(n));
              const sorted = [...q.numbers].sort((a,b) => currentStep.config.direction === "asc" ? a-b : b-a);
              const ok = orderingValidated && revealCorrection ? orderingResults[qi] : null;
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
                  {orderingValidated && revealCorrection && ok === false && (
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
      {!showEvalScore && currentStep?.kind === "seq_rule" && activeSeqRuleConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeSeqRuleConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Trouvez la règle de chaque suite (ex: +5 ou -3).</p>
          <div className="space-y-4">
            {activeSeqRuleConfig.questions.map((q, i) => {
              const v = seqRuleAnswers[i] ?? "";
              const ok = seqRuleValidated && revealCorrection ? seqRuleResults[i] : null;
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
                      <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{v||"—"}</span>
                      <span className="text-xs font-bold leading-none text-amber-600">{correctAns}</span>
                    </div>
                  ) : (
                    <input type="text" inputMode="decimal" value={v} disabled={seqRuleValidated}
                      onChange={e => setSeqRuleAnswers(prev => prev.map((a,j) => j===i ? e.target.value.replace(/[^0-9,.\-+]/g, "") : a))}
                      placeholder="± nombre"
                      className={inputRowCls} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sequence complete exercise (A1.5) */}
      {!showEvalScore && currentStep?.kind === "seq_complete" && activeSeqCompleteConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeSeqCompleteConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Complétez les suites de nombres.</p>
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
                        const wrong = seqCompleteValidated && revealCorrection && parseFloat(v) !== expected;
                        return wrong ? (
                          <div key={ni} className={`${inputCls} rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center`}>
                            <span className="text-xs text-[var(--color-text-primary)] leading-none">{v||"—"}</span>
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
                  {seqCompleteValidated && revealCorrection && activeSeqCompleteConfig.exNum !== 5 && activeSeqCompleteConfig.exNum !== 6 && (
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-[var(--color-text-secondary)]">
                        Règle : {q.allNums[1]! - q.allNums[0]! >= 0 ? "+" : ""}{q.allNums[1]! - q.allNums[0]!}
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
                ? "Classez les nombres dans l’ordre décroissant (plus grand au plus petit)."
                : "Classez les nombres dans l’ordre croissant (plus petit au plus grand)."}
            </p>
          </div>
          <div className="space-y-6">
            {activeDecOrderingConfig.questions.map((q, qi) => {
              const sel = decOrderingSelected[qi] ?? [];
              const available = q.hundredths.filter(n => !sel.includes(n));
              const sorted = [...q.hundredths].sort((a,b) => activeDecOrderingConfig.direction === "asc" ? a-b : b-a);
              const ok = decOrderingValidated && revealCorrection ? decOrderingResults[qi] : null;
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
                  {decOrderingValidated && revealCorrection && ok === false && (
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
          <p className="text-sm text-[var(--color-text-secondary)]">Trouvez la règle de chaque suite (ex: +0,5 ou -1,25).</p>
          <div className="overflow-x-auto">
            <div
              className="inline-grid items-center gap-x-2 gap-y-3"
              style={{ gridTemplateColumns: `1.5rem repeat(${activeDecSeqRuleConfig.questions[0]?.nums.length ?? 4}, 4rem) 5rem` }}
            >
              {activeDecSeqRuleConfig.questions.map((q, i) => {
                const v = decSeqRuleAnswers[i] ?? "";
                const ok = decSeqRuleValidated && revealCorrection ? decSeqRuleResults[i] : null;
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
                        <span className="text-xs leading-none text-[var(--color-text-primary)]">{v || "—"}</span>
                        <span className="text-xs font-bold leading-none">{correctAns}</span>
                      </div>
                    ) : (
                      <input type="text" inputMode="decimal" value={v} disabled={decSeqRuleValidated}
                        onChange={e => setDecSeqRuleAnswers(prev => prev.map((a, j) => j === i ? e.target.value.replace(/[^0-9,.\-+]/g, "") : a))}
                        placeholder="±0,00"
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
          <p className="text-sm text-[var(--color-text-secondary)]">Complétez les suites de nombres décimaux.</p>
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
                        const wrong = decSeqCompleteValidated && revealCorrection && parseDec(v) !== expected;
                        return wrong ? (
                          <div key={ni} className={`h-9 px-1 font-mono text-sm rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center`}>
                            <span className="text-xs leading-none text-[var(--color-text-primary)]">{v || "—"}</span>
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
          revealCorrection={revealCorrection}
          onValidated={(score, max) => {
            setGeoResults(Array.from({ length: max }, (_, i) => i < score));
            setGeoValidated(true);
          }}
        />
      )}

      {!showEvalScore && currentStep?.kind === "volume_placement" && (
        <EvalRevealContext.Provider value={revealCorrection}>
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
        </EvalRevealContext.Provider>
      )}

      {!showEvalScore && currentStep?.kind === "g6_plan" && (
        <EvalRevealContext.Provider value={revealCorrection}>
          {currentStep.variant === 1 && (
            <G6GridReadExercise key={`g6r-${stepIdx}-${geoResetKey}`} exNum={currentStep.exNum} validateCommand={geoValidateTrigger}
              onValidated={handleG6Validated} {...g6Cons("g6GridRead")} />
          )}
          {currentStep.variant === 2 && (
            <G6GridPlaceExercise key={`g6p-${stepIdx}-${geoResetKey}`} exNum={currentStep.exNum} validateCommand={geoValidateTrigger}
              onValidated={handleG6Validated} {...g6Cons("g6GridPlace")} />
          )}
          {currentStep.variant === 3 && (
            <G6MedievalLocateExercise key={`g6m-${stepIdx}-${geoResetKey}`} exNum={currentStep.exNum} validateCommand={geoValidateTrigger}
              onValidated={(score, max) => { setGeoResults(Array.from({ length: max }, (_, i) => i < score)); setGeoValidated(true); }} />
          )}
          {currentStep.variant === 4 && currentStep.lesson.submoduleId === "G6-1" && (
            <G6Q1FigureCoordsExercise key={`g6q1-${stepIdx}-${geoResetKey}`} exNum={currentStep.exNum} validateCommand={geoValidateTrigger}
              onValidated={handleG6Validated} {...g6Cons("g6Q1FigureCoords")} />
          )}
          {currentStep.variant === 4 && currentStep.lesson.submoduleId !== "G6-1" && (
            <G6CartesianCoordsExercise key={`g6c-${stepIdx}-${geoResetKey}`} exNum={currentStep.exNum} validateCommand={geoValidateTrigger}
              onValidated={(score, max) => { setGeoResults(Array.from({ length: max }, (_, i) => i < score)); setGeoValidated(true); }} />
          )}
          {currentStep.variant === 14 && (
            <G6Q2FigureCoordsExercise key={`g6q2a-${stepIdx}-${geoResetKey}`} exNum={currentStep.exNum} half="q12" validateCommand={geoValidateTrigger}
              onValidated={handleG6Validated} {...g6Cons("g6Q2FigureCoords")} />
          )}
          {currentStep.variant === 15 && (
            <G6Q2FigureCoordsExercise key={`g6q2b-${stepIdx}-${geoResetKey}`} exNum={currentStep.exNum} half="q34" validateCommand={geoValidateTrigger}
              onValidated={handleG6Validated} {...g6Cons("g6Q2FigureCoords")} />
          )}
          {currentStep.variant === 5 && (
            <G6MapGenevaExercise key={`g6g-${stepIdx}-${geoResetKey}`} exNum={currentStep.exNum} validateCommand={geoValidateTrigger}
              onValidated={(score, max) => { setGeoResults(Array.from({ length: max }, (_, i) => i < score)); setGeoValidated(true); }} />
          )}
          {currentStep.variant === 6 && (
            <G6MapBielExercise key={`g6b-${stepIdx}-${geoResetKey}`} exNum={currentStep.exNum} validateCommand={geoValidateTrigger}
              onValidated={(score, max) => { setGeoResults(Array.from({ length: max }, (_, i) => i < score)); setGeoValidated(true); }} />
          )}
          {currentStep.variant === 7 && (
            <G6RebeuvelierExercise key={`g6rv-${stepIdx}-${geoResetKey}`} exNum={currentStep.exNum} validateCommand={geoValidateTrigger}
              onValidated={(score, max) => { setGeoResults(Array.from({ length: max }, (_, i) => i < score)); setGeoValidated(true); }} />
          )}
          {currentStep.variant === 8 && (
            <G6QAllFigureCoordsExercise key={`g6qall-${stepIdx}-${geoResetKey}`} exNum={currentStep.exNum} validateCommand={geoValidateTrigger}
              onValidated={(score, max) => { setGeoResults(Array.from({ length: max }, (_, i) => i < score)); setGeoValidated(true); }}
              {...g6Cons("g6QAllFigureCoords")} />
          )}
          {currentStep.variant === 10 && (
            <G6LineIntersectExercise key={`g6li-${stepIdx}-${geoResetKey}`} exNum={currentStep.exNum} validateCommand={geoValidateTrigger}
              onValidated={(score, max) => { setGeoResults(Array.from({ length: max }, (_, i) => i < score)); setGeoValidated(true); }}
              {...g6Cons("g6LineIntersect")} />
          )}
          {currentStep.variant === 11 && (
            <G6CartesianPlaceExercise key={`g6cp-${stepIdx}-${geoResetKey}`} exNum={currentStep.exNum} validateCommand={geoValidateTrigger}
              onValidated={(score, max) => { setGeoResults(Array.from({ length: max }, (_, i) => i < score)); setGeoValidated(true); }}
              {...g6Cons("g6CartesianPlace")} />
          )}
          {currentStep.variant === 12 && (
            <G6FindVertexExercise key={`g6fv-${stepIdx}-${geoResetKey}`} exNum={currentStep.exNum} validateCommand={geoValidateTrigger}
              onValidated={(score, max) => { setGeoResults(Array.from({ length: max }, (_, i) => i < score)); setGeoValidated(true); }}
              consigneLang={showPivotTranslation ? pivot : undefined}
              consigneDir={showPivotTranslation && (pivot === "ar" || pivot === "fa" || pivot === "ps") ? "rtl" : "ltr"} />
          )}
          {currentStep.variant === 13 && (
            <G6PerpParallelPlaceExercise key={`g6pp-${stepIdx}-${geoResetKey}`} exNum={currentStep.exNum} validateCommand={geoValidateTrigger}
              onValidated={(score, max) => { setGeoResults(Array.from({ length: max }, (_, i) => i < score)); setGeoValidated(true); }}
              {...g6Cons("g6PerpParallelPlace")} />
          )}
        </EvalRevealContext.Provider>
      )}

      {!showEvalScore && currentStep?.kind === "unit_conversion" && activeUnitConversionConfig && (
        <UnitConversionExercise
          config={activeUnitConversionConfig}
          answers={unitConversionAnswers}
          validated={unitConversionValidated}
          results={unitConversionResults}
          onChange={(i, val) => setUnitConversionAnswers(prev => prev.map((a, j) => j === i ? val : a))}
          revealCorrection={revealCorrection}
        />
      )}

      {/* Comparison exercise */}
      {currentStep?.kind === "comparison_ex" && activeCompConfig && (
        <ComparisonExercise
          config={activeCompConfig}
          answers={compAnswers}
          validated={compValidated}
          onAnswer={(i, sym) => setCompAnswers(prev => prev.map((a, j) => j === i ? sym : a))}
          revealCorrection={revealCorrection}
        />
      )}

      {!showEvalScore && currentStep?.kind === "expr_comparison" && activeExprCompConfig && (
        <ExprCompExercise
          config={activeExprCompConfig}
          answers={exprCompAnswers}
          validated={exprCompValidated}
          onAnswer={(i, sym) => setExprCompAnswers(prev => prev.map((a, j) => j === i ? sym : a))}
          revealCorrection={revealCorrection}
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
          onChange={(i, val) => setArithAnswers(prev => {
            const n = Math.max(prev.length, i + 1, activeArithConfig?.questions.length ?? 0);
            return Array.from({ length: n }, (_, j) => (j === i ? val : (prev[j] ?? "")));
          })}
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
                  : activeArithConfig.op === "×"
                    ? "Effectuez les multiplications."
                    : "Effectuez les divisions."
          }
          revealCorrection={revealCorrection}
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
          revealCorrection={revealCorrection}
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
          revealCorrection={revealCorrection}
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
          revealCorrection={revealCorrection}
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
          revealCorrection={revealCorrection}
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
          revealCorrection={revealCorrection}
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
          revealCorrection={revealCorrection}
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
              ? "Effectuez les additions en colonnes. Écrivez le résultat et les retenues."
              : "Effectuez les soustractions en colonnes. Écrivez le résultat et les emprunts."
          }
          revealCorrection={revealCorrection}
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
          revealCorrection={revealCorrection}
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
          revealCorrection={revealCorrection}
        />
      )}

      {/* A3.5 — Mult select exercise */}
      {!showEvalScore && currentStep?.kind === "mult_select" && activeMultSelectConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeMultSelectConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Sélectionnez les multiples de <strong className="font-bold">{activeMultSelectConfig.base}</strong>.</p>
          <div className="grid grid-cols-5 gap-2">
            {activeMultSelectConfig.numbers.map((n, i) => {
              const sel = multSelectAnswers[i] ?? false;
              const shouldSel = n % activeMultSelectConfig.base === 0;
              let cls = "rounded-lg border px-3 py-2 text-center text-sm font-mono font-bold transition-colors ";
              if (!(multSelectValidated && revealCorrection)) {
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

      {/* A3.5 — Mult list exercise */}
      {!showEvalScore && currentStep?.kind === "mult_list" && activeMultListConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeMultListConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Écrivez les 5 premiers multiple des nombres. Séparez les par des virgules.</p>
          <div className="space-y-4">
            {activeMultListConfig.bases.map((base, i) => {
              const expected = Array.from({ length: 5 }, (_, idx) => base * (idx + 1)).join(", ");
              const v = multListAnswers[i] ?? "";
              const ok = multListValidated && revealCorrection ? matchesMultList(v, base) : null;
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
                      <span className="text-xs text-[var(--color-text-primary)] leading-none">{v || "—"}</span>
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

      {/* A3.5 — True/false mult/div exercise */}
      {!showEvalScore && currentStep?.kind === "true_false_mult_div" && activeTfMultDivConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeTfMultDivConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Sélectionnez si c&apos;est vrai ou faux.</p>
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
                      if (!(tfMultDivValidated && revealCorrection)) {
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

      {/* A3.5 — Find divisors exercise */}
      {!showEvalScore && currentStep?.kind === "find_divisors" && activeFindDivisorsConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeFindDivisorsConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Trouve tous les diviseurs des nombres. Sépare les par des virgules.</p>
          <div className="space-y-4">
            {activeFindDivisorsConfig.questions.map((q, i) => {
              const v = findDivisorsAnswers[i] ?? "";
              const parts = parseNumberList(v);
              const userSet = new Set(parts);
              const correct = new Set(q.divisors);
              const ok = findDivisorsValidated && revealCorrection ? userSet.size === correct.size && [...correct].every(d => userSet.has(d)) : null;
              return (
                <div key={q.number} className="space-y-2">
                  <p className="text-sm text-[var(--color-text-primary)]">
                    <span className="mr-2 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                    Du nombre <strong className="font-bold">{q.number}</strong>
                  </p>
                  {ok === false ? (
                    <div className={`w-full px-4 py-3 text-sm font-mono rounded-none border-0 border-b-2 border-amber-500 flex flex-col gap-0.5`}>
                      <span className="text-xs text-[var(--color-text-primary)] leading-none">{v || "—"}</span>
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

      {/* A3.5 — Div select exercise */}
      {!showEvalScore && currentStep?.kind === "div_select" && activeDivSelectConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeDivSelectConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Sélectionnez les nombres divisibles par <strong className="font-bold">{activeDivSelectConfig.base}</strong>.</p>
          <div className="grid grid-cols-5 gap-2">
            {activeDivSelectConfig.numbers.map((n, i) => {
              const sel = divSelectAnswers[i] ?? false;
              const shouldSel = n % activeDivSelectConfig.base === 0;
              let cls = "rounded-lg border px-3 py-2 text-center text-sm font-mono font-bold transition-colors ";
              if (!(divSelectValidated && revealCorrection)) {
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

      {/* A3.5 — Div by exercise */}
      {!showEvalScore && currentStep?.kind === "div_by" && activeDivByConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeDivByConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Sélectionnez le ou les diviseurs corrects pour les nombres suivants.</p>
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
                      if (!(divByValidated && revealCorrection)) {
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

      {/* A3.5 — Missing digit exercise */}
      {!showEvalScore && currentStep?.kind === "missing_digit_div" && activeMissingDigitConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeMissingDigitConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Trouvez le chiffre manquant pour que le nombre soit divisible.</p>
          <div className="grid items-center gap-x-4 gap-y-3" style={{ gridTemplateColumns: "1.25rem max-content max-content" }}>
            {activeMissingDigitConfig.questions.map((q, i) => {
              const v = missingDigitAnswers[i] ?? "";
              const ok = missingDigitValidated && revealCorrection ? q.validDigits.includes(v.trim()) : null;
              const wrong = ok === false;
              const inputCls = "w-5 border-0 border-b-2 border-[var(--color-accent-alg)] bg-transparent px-0 text-center font-mono text-sm font-bold text-[var(--color-accent-alg)] outline-none transition-colors";
              return (
                <Fragment key={i}>
                  <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <span className="flex items-end font-mono text-sm text-[var(--color-text-primary)]">
                    {q.prefix}
                  {wrong ? (
                      <span className={`${inputCls} inline-flex h-6 flex-col items-center justify-center leading-none`}>
                        <span className="text-[10px] font-bold leading-none text-[var(--color-text-primary)]">{v || "—"}</span>
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

      {/* A3.6 — GCD/LCM exercise */}
      {!showEvalScore && currentStep?.kind === "gcd_lcm" && activeGcdLcmConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeGcdLcmConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Calculez le {activeGcdLcmConfig.op === "pgcd" ? "PGDC" : "PPMC"} des nombres.
          </p>
          <div className="space-y-3">
            {activeGcdLcmConfig.questions.map((q, i) => {
              const v = gcdLcmAnswers[i] ?? "";
              const ok = gcdLcmValidated && revealCorrection ? parseInt(v) === q.answer : null;
              const wrong = ok === false;
              const inputCls = `w-20 h-9 px-2 text-sm ${MATH_NUMBER_INPUT_BASE}`;
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <span className="text-sm text-[var(--color-text-secondary)]">{formatNumsEt(q.nums)} =</span>
                  {wrong ? (
                    <div className={`${inputCls} flex flex-col items-center justify-center rounded-none border-0 border-b-2 border-amber-500`}>
                      <span className="text-xs text-[var(--color-text-primary)] leading-none">{v || "—"}</span>
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

      {/* A3.6 — True/false GCD/LCM exercise */}
      {!showEvalScore && currentStep?.kind === "true_false_gcd_lcm" && activeTfGcdLcmConfig && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {activeTfGcdLcmConfig.exNum}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Sélectionnez si c&apos;est vrai ou faux.</p>
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
                      if (!(tfGcdLcmValidated && revealCorrection)) {
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
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[var(--color-accent-alg)]">Résultats</p>
          {/* 3-column score summary */}
          <div className="grid grid-cols-3 gap-3">
            {/* Col 1: Points — no frame */}
            <div className="flex flex-col items-center justify-center p-3 text-center">
              <p className="text-[10px] text-[var(--color-text-secondary)]">Points</p>
              <p className="text-2xl font-bold text-[var(--color-text-primary)]">
                {evalEarnedPts}<span className="text-sm font-normal text-[var(--color-text-secondary)]">/{evalTotalPts_state}</span>
              </p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
                <div className={`h-full rounded-full transition-all duration-700 ${evalFinalGrade >= PASSING_GRADE ? "bg-[var(--color-accent-alg)]" : "bg-red-400"}`}
                  style={{ width: `${evalTotalPts_state > 0 ? Math.round((evalEarnedPts / evalTotalPts_state) * 100) : 0}%` }} />
              </div>
            </div>
            {/* Col 2: Note — no frame */}
            <div className="flex flex-col items-center justify-center p-3 text-center">
              <p className="text-[10px] text-[var(--color-text-secondary)]">Note</p>
              <p className="text-2xl font-bold text-[var(--color-text-primary)]">{evalFinalGrade.toFixed(1)}<span className="text-sm font-normal text-[var(--color-text-secondary)]">/6</span></p>
            </div>
            {/* Col 3: Mention — framed */}
            <div className={`flex flex-col items-center justify-center rounded-xl border-2 bg-[var(--color-bg-primary)] p-3 text-center ${
              evalFinalGrade !== null && evalFinalGrade >= PASSING_GRADE ? "border-green-500" : "border-red-400"
            }`}>
              <p className="text-[10px] text-[var(--color-text-secondary)]">Mention</p>
              <p className={`mt-1 text-sm font-bold ${evalFinalGrade !== null && evalFinalGrade >= PASSING_GRADE ? "text-green-600" : "text-red-500"}`}>
                {evalFinalGrade !== null && evalFinalGrade >= PASSING_GRADE ? "Réussi" : "À améliorer"}
              </p>
            </div>
          </div>
          <p className="text-xs text-center text-[var(--color-text-secondary)]">Cliquez sur un exercice pour voir la correction.</p>
          {/* Exercise detail list */}
          <ul className="space-y-2">
            {evalRowData.map((row, i) => {
              const color = row.score === row.max ? "text-green-600" : row.score > 0 ? "text-amber-600" : "text-red-500";
              const isSelected = selectedResultIdx === i;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => setSelectedResultIdx(isSelected ? null : i)}
                    className={`flex w-full items-center gap-3 rounded-[var(--radius-lg)] border px-4 py-3 min-h-[44px] text-left transition-colors ${
                      isSelected
                        ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10"
                        : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] hover:border-[var(--color-accent-alg)]/60"
                    }`}
                  >
                    <span className="flex-1 text-sm text-[var(--color-text-primary)]">{row.label}</span>
                    <span className={`shrink-0 text-sm font-bold tabular-nums ${color}`}>{row.score}/{row.max}</span>
                    <svg
                      className={`h-3 w-3 shrink-0 text-[var(--color-text-secondary)] transition-transform ${isSelected ? "rotate-90" : ""}`}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                  {isSelected && (
                    <div className="px-1 py-3">
                      <EvalRevealContext.Provider value={true}>
                        {renderEvalReviewDetail(i) ?? (
                          <p className="text-xs italic text-[var(--color-text-secondary)]">Détail non disponible pour cet exercice.</p>
                        )}
                      </EvalRevealContext.Provider>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <EvalFinishButton onClick={goNext} accent="var(--color-accent-alg)" />
        </div>
      )}

      {/* Eval start screen */}
      {currentStep?.kind === "eval_start" && (
        <EvalAnnounceScreen
          accent="var(--color-accent-alg)"
          lessonTitle={currentStepTitle}
          minutes={revisionMode ? 30 : 5}
          onStart={startEval}
        />
      )}

      {/* Pass toggle */}
      {currentStep?.kind === "pass_toggle" && (
        <div className="flex flex-col items-center gap-8 py-4 text-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-alg)]">
              Évaluation
            </p>
            <h2 className="mt-2 text-xl font-bold text-[var(--color-text-primary)]">
              Passer le module ?
            </h2>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              As-tu compris et maîtrisé ce module ?
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

      {/* Fixed bottom nav — hidden on eval_start announce screen */}
      <div className={`hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)] ${currentStep?.kind === "eval_start" ? "hidden" : ""}`}>
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            {/* Back button — hidden on eval start and score screen */}
            {(currentStep?.kind !== "eval_start" && !showEvalScore) ? (
              <button
                type="button"
                onClick={goBack}
                disabled={isFirstStep || currentStep?.kind === "pass_toggle"}
                data-nav-action="back"
                className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-opacity disabled:opacity-30"
              >
                ← Retour
              </button>
            ) : (
              <span />
            )}

            {/* Validate (exercises only) — hidden on score screen */}
            {!showEvalScore && (stepValidate || (!isInEvalPhase && stepReset)) ? (
              <div className="flex items-center gap-2">
                {!isInEvalPhase && stepReset && (
                  <button
                    type="button"
                    onClick={stepReset}
                    data-nav-action="refresh"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90"
                    aria-label="Réinitialiser"
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
                    data-nav-action="validate"
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
                  (currentStep?.kind === "pass_toggle" && toggleAnswer === null)
                }
                data-nav-action="next"
                className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl bg-[var(--color-accent-alg)] px-4 text-sm font-medium text-white transition-opacity disabled:opacity-30"
              >
                {showEvalScore || currentStep?.kind === "pass_toggle" || isLastStep
                  ? "Terminer ✓"
                  : "Suivant →"}
              </button>
            )}
          </div>
        </div>
        <div style={{ height: 72 }} />
      </div>
    </div>
  );
}

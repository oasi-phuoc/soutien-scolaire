"use client";

import { useRouter } from "next/navigation";
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { answerMatches } from "@/lib/curriculum/content/math/math-a1-types";
import type { MathExerciseItem, MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";
import { getTrad } from "@/lib/curriculum/content/math/trad";
import type { BlockTrad } from "@/lib/curriculum/content/math/trad";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { loadProgress, saveProgress, completeSubmodule } from "@/lib/progress/math-progress";
import { percentToSwissGrade, medalFromPercent, PASSING_GRADE, linearSwissGrade } from "@/lib/scoring";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import type { PivotCode } from "@/lib/pivot-langs";
import EvalProgressBar from "@/components/math/EvalProgressBar";

const CLS_WRONG = "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";

function renderBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return <>{text}</>;
  return <>{parts.map((p, i) => i % 2 === 1 ? <strong key={i} className="font-bold text-[var(--color-accent-alg)]">{p}</strong> : p)}</>;
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

type FlatStep = TheoryStep | ExerciseStep | NumberLineStep | ComparisonStep | ArithGroupStep | ColumnGridStep | DivColGridStep | ExprCompStep | EvalStartStep | PassToggleStep | RoundingStep | FracIdStep | FracEquivStep | FracSimplifyStep | FracCompStep | NumberSelectStep | EncadrementStep | OddEvenStep | NLMultiStep | OrderingStep | SeqRuleStep | SeqCompleteStep | Mul2DigitStep;

// ── Comparison exercise ───────────────────────────────────────────────────────
type ComparisonQ = { a: number; b: number; answer: "<" | "=" | ">" };
type ComparisonConfig = { questions: ComparisonQ[]; level: 1 | 2 };

function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.level}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Comparez les deux nombres.</p>
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
        <div className="space-y-3">
          {config.questions.map((q, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex items-center shrink-0">
                <span className="w-5 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="shrink-0 font-mono text-sm text-[var(--color-text-primary)]">{formatCompNum(q.a)}</span>
              </div>
              <div className="flex shrink-0 gap-1">
                {(["<", "=", ">"] as const).map(sym => {
                  const sel = answers[i] === sym;
                  const isCorrect = sym === q.answer;
                  let cls = "h-8 w-8 shrink-0 rounded border text-sm font-bold transition-colors ";
                  if (!validated) {
                    cls += sel ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white" : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]";
                  } else if (sel) {
                    cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white";
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
                    cls += sel ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white" : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]";
                  } else if (sel) {
                    cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white";
                  } else if (!sel && isCorrect) {
                    cls += "border-amber-400 bg-amber-50 text-amber-600 dark:bg-amber-950/20";
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
      <line x1={tx} y1={6} x2={tx} y2={lineY - 12} stroke="var(--color-accent-alg)" strokeWidth="2" />
      <polygon points={`${tx - 5},${lineY - 13} ${tx + 5},${lineY - 13} ${tx},${lineY - 6}`} fill="var(--color-accent-alg)" />
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

// ── Rounding generators ──────────────────────────────────────────────────────
function roundTo10(n: number) { return Math.round(n / 10) * 10; }
function roundTo100(n: number) { return Math.round(n / 100) * 100; }
function roundTo1000(n: number) { return Math.round(n / 1000) * 1000; }

type RoundingKind = "diz_near" | "cent_near_new" | "est_diz_2" | "est_diz_large_2" | "est_diz_three" | "cent_near" | "thou_near" | "est_add" | "est_sub" | "est_mixed" | "mixed";

function genRounding(kind: RoundingKind, exNum: number, count: number): RoundingConfig {
  const consigneMap: Record<RoundingKind, string> = {
    "diz_near":         "Arrondissez à la dizaine la plus proche les nombres suivants.",
    "cent_near_new":    "Arrondissez à la centaine la plus proche les nombres suivants.",
    "est_diz_2":        "Estimez le résultat du calcul à la dizaine la plus proche.",
    "est_diz_large_2":  "Estimez le résultat du calcul à la centaine la plus proche.",
    "est_diz_three":    "Estimez le résultat du calcul à la centaine la plus proche.",
    "cent_near": "", "thou_near": "", "est_add": "", "est_sub": "", "est_mixed": "", "mixed": "",
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

// ── ArithmeticGroupExercise ───────────────────────────────────────────────────
function ArithmeticGroupExercise({
  config, answers, validated, results, onChange, onTimerExpired, consigne,
}: {
  config: ArithGroupConfig;
  answers: string[];
  validated: boolean;
  results: boolean[];
  onChange: (i: number, val: string) => void;
  onTimerExpired?: () => void;
  consigne?: string;
}) {
  const [timeLeft, setTimeLeft] = useState<number | null>(() =>
    config.timer !== undefined ? config.timer : null
  );
  const onTimerExpiredRef = useRef(onTimerExpired);
  onTimerExpiredRef.current = onTimerExpired;

  useEffect(() => {
    if (config.timer === undefined || validated) return;
    setTimeLeft(config.timer);
    const id = setInterval(() => {
      setTimeLeft(prev => {
        if (prev === null || prev <= 1) {
          clearInterval(id);
          onTimerExpiredRef.current?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.timer]);

  const numCls = "w-14 text-center font-mono text-sm text-[var(--color-text-primary)]";
  const inputBase = "w-14 rounded border px-1 py-1.5 text-center font-mono text-sm outline-none transition-colors appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
        {config.timer !== undefined && (
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
      <div className="rounded-xl border border-[var(--color-border-default)] p-4 space-y-3">
        {config.questions.map((q, i) => {
          const v = answers[i] ?? "";
          const ok = validated ? results[i] ?? false : null;
          const wrongField = ok === false;
          return (
            <div key={i} className="flex min-h-[2.25rem] items-center gap-1.5">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              {q.missingPos === "a"
                ? wrongField
                  ? <div className={`${inputBase} ${CLS_WRONG} flex items-center justify-center gap-0.5`}><span className="line-through text-amber-500 text-xs">{v||"—"}</span><span className="text-[var(--color-text-primary)] text-xs font-bold">{q.answer}</span></div>
                  : <input type="number" value={v} disabled={validated} onChange={e => onChange(i, e.target.value)} className={`${inputBase} ${ok === null ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20"}`} />
                : <span className={numCls}>{q.a}</span>}
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">{q.op}</span>
              {q.missingPos === "b"
                ? wrongField
                  ? <div className={`${inputBase} ${CLS_WRONG} flex items-center justify-center gap-0.5`}><span className="line-through text-amber-500 text-xs">{v||"—"}</span><span className="text-[var(--color-text-primary)] text-xs font-bold">{q.answer}</span></div>
                  : <input type="number" value={v} disabled={validated} onChange={e => onChange(i, e.target.value)} className={`${inputBase} ${ok === null ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20"}`} />
                : <span className={numCls}>{q.b}</span>}
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
              {q.missingPos === "result"
                ? wrongField
                  ? <div className={`${inputBase} ${CLS_WRONG} flex items-center justify-center gap-0.5`}><span className="line-through text-amber-500 text-xs">{v||"—"}</span><span className="text-[var(--color-text-primary)] text-xs font-bold">{q.answer}</span></div>
                  : <input type="number" value={v} disabled={validated} onChange={e => onChange(i, e.target.value)} className={`${inputBase} ${ok === null ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20"}`} />
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
    const ok = validated ? cellOk(expected, val, col, firstNz ?? 0) : null;
    if (ok === false) {
      return (
        <div className={`h-8 w-8 rounded border flex flex-col items-center justify-center ${CLS_WRONG}`}>
          <span className="line-through text-amber-500 text-[9px] leading-none">{val || "—"}</span>
          <span className="text-[var(--color-text-primary)] text-[9px] font-bold leading-none">{expected}</span>
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
        className={`h-8 w-8 rounded border text-center font-mono text-base outline-none transition-colors bg-blue-50 dark:bg-blue-950/30 ${
          ok === null ? "border-[var(--color-border-default)] focus:border-[var(--color-accent-alg)]"
          : "border-[var(--color-border-default)]"
        }`}
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
      <table className="mx-auto border-collapse">
        <thead>
          <tr>
            <td className="w-6" />
            {COL_LABELS.map(h => (
              <th key={h} className="w-8 text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Carry / borrow row — input fields */}
          <tr>
            <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">{q.op === "+" || q.op === "×" ? "R" : "E"}</td>
            {q.carryRow.map((c, ci) => {
              const carryVal = carryInputs[ci] ?? "";
              const expectedCarry = c !== null ? String(c) : null;
              const carryWrong = validated && expectedCarry !== null && carryVal.trim() !== expectedCarry;
              return (
                <td key={ci} className="text-center">
                  {carryWrong ? (
                    <div className={`h-5 w-8 rounded border flex flex-col items-center justify-center ${CLS_WRONG}`}>
                      <span className="line-through text-amber-500 text-[8px] leading-none">{carryVal || "—"}</span>
                      <span className="text-[var(--color-text-primary)] text-[8px] font-bold leading-none">{expectedCarry}</span>
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
                      className={`h-5 w-8 rounded border text-center font-mono text-[10px] outline-none transition-colors bg-blue-50 dark:bg-blue-950/30 border-[var(--color-border-default)] text-orange-500 focus:border-[var(--color-accent-alg)]`}
                    />
                  )}
                </td>
              );
            })}
          </tr>
          {/* Operand 1 */}
          <tr>
            <td />
            {[0, 1, 2, 3].map(col => (
              <td key={col} className="text-center">
                {preFilledOperands ? <Prefilled digit={ad[col]!} isLeading={col < firstNzA} /> : cellInput({ base: 0, col, expected: ad[col]!, firstNz: firstNzA })}
              </td>
            ))}
          </tr>
          {/* Operand 2 */}
          <tr>
            <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">{q.op}</td>
            {[0, 1, 2, 3].map(col => (
              <td key={col} className="text-center">
                {preFilledOperands ? <Prefilled digit={bd[col]!} isLeading={col < firstNzB} /> : cellInput({ base: 4, col, expected: bd[col]!, firstNz: firstNzB })}
              </td>
            ))}
          </tr>
          {/* Separator */}
          <tr><td colSpan={5}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          {/* Result */}
          <tr>
            <td />
            {[0, 1, 2, 3].map(col => (
              <td key={col} className="text-center">
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

// ── DivColumnGridExercise ─────────────────────────────────────────────────────
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
    const ok = validated ? val.trim() === expected : null;
    if (ok === false) return (
      <div className={`h-8 w-8 rounded border flex flex-col items-center justify-center ${CLS_WRONG}`}>
        <span className="line-through text-amber-500 text-[9px] leading-none">{val || "—"}</span>
        <span className="text-[var(--color-text-primary)] text-[9px] font-bold leading-none">{expected}</span>
      </div>
    );
    return (
      <input type="text" inputMode="numeric" maxLength={1} value={val} disabled={validated}
        onChange={e => onChange(e.target.value.replace(/[^0-9]/g, "").slice(-1))}
        onKeyDown={tabNav}
        onFocus={e => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
        className={`h-8 w-8 rounded border text-center font-mono text-base outline-none transition-colors bg-blue-50 dark:bg-blue-950/30 ${
          ok === null ? "border-[var(--color-border-default)] focus:border-[var(--color-accent-alg)]" : "border-[var(--color-border-default)]"
        }`}
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
                {/* Partial dividend row | quotient cells (si===0 only, left-aligned) */}
                <tr>
                  <td style={{ padding: 0 }} />
                  <FullWorkRow numStr={pdStr} colEnd={step.colEnd} si={si} type={0} />
                  {si === 0
                    ? Array.from({ length: quotientCols }, (_, qi) => {
                        // Left-align: cell qi has digit if qi < quotientLen, else empty
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
                      })
                    : <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                  }
                </tr>

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
                ? <div className={`h-8 w-8 rounded border flex flex-col items-center justify-center ${CLS_WRONG}`}>
                    <span className="line-through text-amber-500 text-[9px] leading-none">{remainderInput || "—"}</span>
                    <span className="text-[var(--color-text-primary)] text-[9px] font-bold leading-none">{remainder}</span>
                  </div>
                : <input type="text" inputMode="numeric" maxLength={2} value={remainderInput} disabled={validated}
                    onChange={e => onRemainderChange(cardIdx, e.target.value.replace(/[^0-9]/g, "").slice(0, 2))}
                    onKeyDown={tabNav}
                    onFocus={e => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
                    className={`h-8 w-8 rounded border text-center font-mono text-base outline-none transition-colors bg-blue-50 dark:bg-blue-950/30 ${
                      remOk === null
                        ? "border-[var(--color-border-default)] focus:border-[var(--color-accent-alg)]"
                        : "border-[var(--color-border-default)]"
                    }`}
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
    const ok = validated ? (isLeading ? (val.trim() === "" || val.trim() === "0") : val.trim() === String(expected)) : null;
    if (ok === false) {
      return (
        <div className={`h-8 w-8 rounded border flex flex-col items-center justify-center ${CLS_WRONG}`}>
          <span className="line-through text-amber-500 text-[9px] leading-none">{val || "—"}</span>
          <span className="text-[var(--color-text-primary)] text-[9px] font-bold leading-none">{expected}</span>
        </div>
      );
    }
    return (
      <input type="text" inputMode="numeric" maxLength={1} value={val} disabled={validated}
        onChange={e => { const v = e.target.value.replace(/[^0-9]/g,"").slice(-1); onChange(cardIdx, idx, v); }}
        onKeyDown={tabNav}
        onFocus={e => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
        className={`h-8 w-8 rounded border text-center font-mono text-base outline-none transition-colors ${
          ok === null ? "border-[var(--color-border-default)] focus:border-[var(--color-accent-alg)]"
          : "border-[var(--color-border-default)]"
        }`}
      />
    );
  };

  const Prefilled = ({ digit, isLeading }: { digit: number; isLeading: boolean }) => (
    <div className="flex h-8 w-8 items-center justify-center font-mono text-base text-[var(--color-text-primary)]">
      {isLeading ? "" : digit}
    </div>
  );

  const carryCell = (rowBase: number, col: number) => {
    const idx = rowBase + col;
    const val = carryInputs[idx] ?? "";
    return (
      <input type="text" inputMode="numeric" maxLength={1} value={val} disabled={validated}
        onChange={e => { const v = e.target.value.replace(/[^0-9]/g,"").slice(-1); onCarryChange(cardIdx, idx, v); }}
        onKeyDown={tabNav}
        onFocus={e => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
        className="h-5 w-8 rounded border text-center font-mono text-[10px] outline-none transition-colors border-[var(--color-border-default)] text-orange-500 focus:border-[var(--color-accent-alg)]"
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
      <table className="mx-auto border-collapse">
        <thead>
          <tr>
            <td className="w-6" />
            {colLabels.map(h => (
              <th key={h} className="w-8 text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* R2 — carries for tens-digit multiplication (shown first/top) */}
          <tr>
            <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R2</td>
            {visibleCols.map(col => (
              <td key={col} className="text-center">{carryCell(5, col)}</td>
            ))}
          </tr>
          {/* R1 — carries for units-digit multiplication */}
          <tr>
            <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R1</td>
            {visibleCols.map(col => (
              <td key={col} className="text-center">{carryCell(0, col)}</td>
            ))}
          </tr>
          {/* Operand a */}
          <tr>
            <td />
            {visibleCols.map(col => (
              <td key={col} className="text-center">
                {preFilledOperands
                  ? <Prefilled digit={ad[col]!} isLeading={col < firstNzA} />
                  : cellInput({base: aBase, col, expected: ad[col]!, firstNz: firstNzA})}
              </td>
            ))}
          </tr>
          {/* Operand b */}
          <tr>
            <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">×</td>
            {visibleCols.map(col => (
              <td key={col} className="text-center">
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
            <td />
            {visibleCols.map(col => (
              <td key={col} className="text-center">{cellInput({base: p1Base, col, expected: p1d[col]!, firstNz: firstNzP1})}</td>
            ))}
          </tr>
          {/* Partial product 2 shifted (a × bTens × 10) */}
          <tr>
            <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-primary)]">+</td>
            {visibleCols.map(col => {
              if (col === 4) {
                // Fixed "0" in units position — shown in accent colour
                return (
                  <td key={col} className="text-center">
                    <div className="flex h-8 w-8 items-center justify-center font-mono text-base font-bold text-[var(--color-accent-alg)] opacity-60">0</div>
                  </td>
                );
              }
              return <td key={col} className="text-center">{cellInput({base: p2Base, col, expected: p2ShiftedDigit(col), firstNz: firstNzP2s < 0 ? 5 : firstNzP2s})}</td>;
            })}
          </tr>
          {/* Separator 2 */}
          <tr><td colSpan={totalSpan}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          {/* Result */}
          <tr>
            <td />
            {visibleCols.map(col => (
              <td key={col} className="text-center">{cellInput({base: rBase, col, expected: rd[col]!, firstNz: firstNzR})}</td>
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
          />
        ))}
      </div>
    </div>
  );
}

function DivColumnGridExercise({
  config, quotientInputs, remainderInputs, operandInputs, workInputs, validated,
  onQuotientChange, onRemainderChange, onOperandChange, onWorkChange,
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
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Effectuez les divisions en colonnes.</p>
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

// ── RoundingExercise ──────────────────────────────────────────────────────────
function RoundingExercise({
  config, answers, validated, results, onChange,
}: {
  config: RoundingConfig;
  answers: string[];
  validated: boolean;
  results: boolean[];
  onChange: (i: number, val: string) => void;
}) {
  const inputBase = "w-[4.5rem] h-8 shrink-0 rounded border px-2 text-center font-mono text-sm outline-none transition-colors appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";
  const CLS_WRONG_INL = "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";
  const isNew = config.consigne !== "";
  const isInline = config.kind === "diz_near" || config.kind === "cent_near_new";

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      {isNew && <p className="text-sm text-[var(--color-text-secondary)]">{config.consigne}</p>}
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className={isNew && !isInline ? "grid gap-y-3" : "space-y-3"} style={isNew && !isInline ? { gridTemplateColumns: "1.25rem 1fr auto" } : undefined}>
          {config.questions.map((q, i) => {
            const v = answers[i] ?? "";
            const ok = validated ? results[i] ?? false : null;
            const wrongField = ok === false;
            const numLabel = <span className="text-xs font-bold text-[var(--color-accent-alg)] self-center">{i + 1}.</span>;
            const prompt = <span className={`${isNew && !isInline ? "font-mono" : "flex-1"} text-sm text-[var(--color-text-primary)] self-center`}>{q.prompt}</span>;
            const field = wrongField
              ? <div className={`${inputBase} ${CLS_WRONG_INL} flex items-center justify-center gap-0.5 overflow-hidden`}>
                  <span className="line-through text-amber-500 text-[9px]">{v || "—"}</span>
                  <span className="text-[var(--color-text-primary)] text-[9px] font-bold ml-0.5">{q.answer}</span>
                </div>
              : <input
                  type="number"
                  inputMode="numeric"
                  value={v}
                  disabled={validated}
                  onChange={e => onChange(i, e.target.value)}
                  className={`${inputBase} ${ok === null ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20"}`}
                />;
            if (isInline) {
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <span className="font-mono text-sm text-[var(--color-text-primary)]">{q.prompt}</span>
                  <span className="text-sm text-[var(--color-text-secondary)] mx-1">≈</span>
                  {field}
                </div>
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
          const label = q.ask === "num" ? "Quel est le numérateur ?" : "Quel est le dénominateur ?";
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <FracDisplay num={q.num} den={q.den} />
              <span className="text-sm text-[var(--color-text-secondary)]">{label}</span>
              {wrong ? (
                <div className={`w-14 rounded border px-1 py-1.5 text-center font-mono text-sm flex items-center justify-center gap-0.5 ${CLS_WRONG}`}>
                  <span className="line-through text-amber-500 text-xs">{v||"—"}</span>
                  <span className="text-xs font-bold">{q.ask === "num" ? q.num : q.den}</span>
                </div>
              ) : (
                <input
                  type="number"
                  value={v}
                  disabled={validated}
                  onChange={e => onChange(i, e.target.value)}
                  className={`w-14 rounded border px-1 py-1.5 text-center font-mono text-sm outline-none transition-colors appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${
                    ok === true ? "border-[var(--color-accent-alg)] bg-blue-50 dark:bg-blue-950/20"
                    : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]"
                  }`}
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
function FracEquivExercise({ config, answers, validated, results, onChange }: {
  config: FracEquivConfig; answers: string[]; validated: boolean; results: boolean[];
  onChange: (i: number, val: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Complétez les fractions équivalentes.</p>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4 space-y-5">
        {config.questions.map((q, i) => {
          const v = answers[i] ?? "";
          const ok = validated ? results[i] : null;
          const wrong = ok === false;
          const correctAns = q.answer;
          const inputW = "w-12 rounded border px-1 py-1.5 text-center font-mono text-sm outline-none transition-colors appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";
          return (
            <div key={i} className="flex items-center gap-2">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <FracDisplay num={q.srcNum} den={q.srcDen} />
              <span className="text-sm font-bold text-[var(--color-text-secondary)]">=</span>
              {q.missingPos === "num" ? (
                <span className="inline-flex flex-col items-center leading-none gap-[3px] mx-1 align-middle">
                  {wrong ? (
                    <div className={`w-12 rounded border flex items-center justify-center gap-0.5 py-1 ${CLS_WRONG}`}>
                      <span className="line-through text-amber-500 text-[9px]">{v||"—"}</span>
                      <span className="text-[9px] font-bold">{correctAns}</span>
                    </div>
                  ) : (
                    <input type="number" value={v} disabled={validated} onChange={e => onChange(i, e.target.value)}
                      className={`${inputW} ${ok === true ? "border-[var(--color-accent-alg)] bg-blue-50 dark:bg-blue-950/20" : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]"}`} />
                  )}
                  <span className="h-[1.5px] self-stretch min-w-[3em] rounded bg-[var(--color-text-primary)]" />
                  <span className="text-sm font-bold text-[var(--color-text-primary)]">{q.tgtDen}</span>
                </span>
              ) : (
                <span className="inline-flex flex-col items-center leading-none gap-[3px] mx-1 align-middle">
                  <span className="text-sm font-bold text-[var(--color-accent-alg)]">{q.tgtNum}</span>
                  <span className="h-[1.5px] self-stretch min-w-[3em] rounded bg-[var(--color-text-primary)]" />
                  {wrong ? (
                    <div className={`w-12 rounded border flex items-center justify-center gap-0.5 py-1 ${CLS_WRONG}`}>
                      <span className="line-through text-amber-500 text-[9px]">{v||"—"}</span>
                      <span className="text-[9px] font-bold">{correctAns}</span>
                    </div>
                  ) : (
                    <input type="number" value={v} disabled={validated} onChange={e => onChange(i, e.target.value)}
                      className={`${inputW} ${ok === true ? "border-[var(--color-accent-alg)] bg-blue-50 dark:bg-blue-950/20" : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]"}`} />
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
function FracSimplifyExercise({ config, answers, validated, results, onChange }: {
  config: FracSimplifyConfig;
  answers: Array<{ num: string; den: string }>;
  validated: boolean;
  results: boolean[];
  onChange: (i: number, part: "num" | "den", val: string) => void;
}) {
  const inputW = "w-12 rounded border px-1 py-1.5 text-center font-mono text-sm outline-none transition-colors appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";
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
                  <div className={`w-12 rounded border flex items-center justify-center gap-0.5 py-1 ${CLS_WRONG}`}>
                    <span className="line-through text-amber-500 text-[9px]">{ans.num||"—"}</span>
                    <span className="text-[9px] font-bold">{q.simNum}</span>
                  </div>
                ) : (
                  <input type="number" value={ans.num} disabled={validated} onChange={e => onChange(i, "num", e.target.value)}
                    className={`${inputW} ${ok === true ? "border-[var(--color-accent-alg)] bg-blue-50 dark:bg-blue-950/20" : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]"}`} />
                )}
                <span className="h-[1.5px] self-stretch min-w-[3em] rounded bg-[var(--color-text-primary)]" />
                {wrong ? (
                  <div className={`w-12 rounded border flex items-center justify-center gap-0.5 py-1 ${CLS_WRONG}`}>
                    <span className="line-through text-amber-500 text-[9px]">{ans.den||"—"}</span>
                    <span className="text-[9px] font-bold">{q.simDen}</span>
                  </div>
                ) : (
                  <input type="number" value={ans.den} disabled={validated} onChange={e => onChange(i, "den", e.target.value)}
                    className={`${inputW} ${ok === true ? "border-[var(--color-accent-alg)] bg-blue-50 dark:bg-blue-950/20" : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]"}`} />
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
                  cls += sel ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white" : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]";
                } else if (sel && isCorrect) {
                  cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white";
                } else if (sel && !isCorrect) {
                  cls += CLS_WRONG;
                } else if (!sel && isCorrect) {
                  cls += "border-amber-400 bg-amber-50 text-amber-600 dark:bg-amber-950/20";
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

function buildSteps(lessons: MathSubmoduleLesson[], withEval: boolean): FlatStep[] {
  const steps: FlatStep[] = [];
  for (const lesson of lessons) {
    steps.push({ kind: "theory", lesson });
    const sid = lesson.submoduleId;
    if (sid === "A2-1" || sid === "A2-2") {
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
    } else {
      if (sid !== "A1-3" && sid !== "A1-4" && sid !== "A1-5") {
        const pool = lesson.exercisePool;
        const size = lesson.poolSize ?? 5;
        const exercises = pool && pool.length > 0 ? shufflePick(pool, size) : lesson.exercises.slice(0, size);
        for (const item of exercises) steps.push({ kind: "exercise", lesson, item });
      }
    }
  }
  const hasDrillsNoPassToggle = lessons.some(l =>
    l.submoduleId === "A2-1" || l.submoduleId === "A2-2" ||
    l.submoduleId === "A2-3" || l.submoduleId === "A3-1" || l.submoduleId === "A3-2" ||
    l.submoduleId === "A3-3" || l.submoduleId === "A3-4" || l.submoduleId === "A4-2" ||
    l.submoduleId === "A1-3" || l.submoduleId === "A1-4" || l.submoduleId === "A1-5"
  );
  if (withEval && lessons.length > 0 && !hasDrillsNoPassToggle) {
    const lastLesson = lessons[lessons.length - 1]!;
    steps.push({ kind: "eval_start", lesson: lastLesson });
    steps.push({ kind: "pass_toggle", lesson: lastLesson });
  }
  // A2-1/A2-2/A2-3/A3-1/A3-2/A3-3/A3-4/A4-2: eval_start + eval exercises already pushed above; no pass_toggle
  return steps;
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
                ? "bg-[var(--color-accent-alg)] text-white"
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
                ? "bg-[var(--color-accent-alg)] text-white"
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
function MulDemoGrid({ a, b, op, carries, result }: {
  a: number[]; b: number[]; op: string;
  carries: (number | null)[]; result: (number | null)[];
}) {
  const COL_LABELS = ["M", "C", "D", "U"];
  const firstNzA = a.findIndex(d => d !== 0);
  const firstNzB = b.findIndex(d => d !== 0);
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
              <div className="h-5 w-8 flex items-center justify-center font-mono text-[10px] font-bold text-orange-500">
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
                  ? "border-[var(--color-border-default)] text-[var(--color-accent-alg)] font-bold"
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

function Mul2DemoGrid({ a, b, result: totalResult, carries1, carries2, p1, p2shifted, res }: {
  a: number[]; b: number[]; result: number;
  carries1: (number | null)[];
  carries2: (number | null)[];
  p1: (number | null)[];
  p2shifted: (number | null)[];
  res: (number | null)[];
}) {
  const numCols = totalResult > 9999 ? 5 : 4;
  const colStart = 5 - numCols;
  const visibleCols = Array.from({length: numCols}, (_, i) => colStart + i);
  const COL5 = ["DM","M","C","D","U"];
  const colLabels = COL5.slice(colStart);
  const totalSpan = numCols + 1;
  const firstNzA = a.findIndex(d => d !== 0);
  const firstNzB = b.findIndex(d => d !== 0);

  const staticCell = (val: number | null, accent?: boolean) => (
    <div className={`h-8 w-8 flex items-center justify-center font-mono text-base rounded border ${
      val !== null
        ? accent
          ? "border-[var(--color-border-default)] text-[var(--color-accent-alg)] font-bold"
          : "border-[var(--color-border-default)] text-[var(--color-text-primary)]"
        : "border-transparent text-transparent"
    }`}>
      {val !== null ? val : ""}
    </div>
  );

  const carryCell = (val: number | null) => (
    <div className="h-5 w-8 flex items-center justify-center font-mono text-[10px] font-bold text-orange-500">
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
          {visibleCols.map(col => <td key={col} className="text-center">{carryCell(carries2[col] ?? null)}</td>)}
        </tr>
        {/* R1 */}
        <tr>
          <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R1</td>
          {visibleCols.map(col => <td key={col} className="text-center">{carryCell(carries1[col] ?? null)}</td>)}
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
          {visibleCols.map(col => <td key={col} className="text-center">{staticCell(p1[col] ?? null)}</td>)}
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
            return <td key={col} className="text-center">{staticCell(p2shifted[col] ?? null)}</td>;
          })}
        </tr>
        {/* Separator 2 */}
        <tr><td colSpan={totalSpan}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
        {/* Result */}
        <tr>
          <td />
          {visibleCols.map(col => <td key={col} className="text-center">{staticCell(res[col] ?? null, true)}</td>)}
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

  function StaticWorkRow({ numStr, colEnd }: { numStr: string; colEnd: number }) {
    const startCol = colEnd - numStr.length + 1;
    return (
      <>
        {Array.from({ length: dividendCols }, (_, col) => {
          const ri = col - startCol;
          const has = ri >= 0 && ri < numStr.length;
          return (
            <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
              {has ? showCell(numStr[ri]!) : emptyCell()}
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
            return (
              <Fragment key={si}>
                <tr>
                  <td style={{ padding: 0 }} />
                  <StaticWorkRow numStr={pdStr} colEnd={step.colEnd} />
                  {si === 0
                    ? Array.from({ length: quotientCols }, (_, qi) => {
                        const revealed = qi < stepsComplete && qi < quotientLen;
                        const isEmpty  = qi >= quotientLen;
                        return (
                          <td key={qi} style={{ width: CELL_W, padding: 2, ...(qi === 0 ? BSEP : {}) }}
                            className="align-middle text-center">
                            {isEmpty ? emptyCell() : revealed ? showCell(quotientStr[qi]!, true) : emptyCell()}
                          </td>
                        );
                      })
                    : <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                  }
                </tr>
                <tr>
                  <td style={{ padding:0, textAlign:"center", verticalAlign:"middle", fontSize:14, color:"var(--color-text-secondary)" }}>−</td>
                  <StaticWorkRow numStr={prStr} colEnd={step.colEnd} />
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
  switch (block.type) {
    case "heading": {
      const pvHead = pivotText;
      return block.black ? (
        <div>
          <h3 className="mt-3 mb-1 text-base font-bold text-[var(--color-text-primary)]">{block.fr}</h3>
          {showPivot && pvHead && pvHead !== block.fr && (
            <p className="mt-0.5 text-xs italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pvHead}</p>
          )}
        </div>
      ) : (
        <div>
          <h3 className="mt-4 mb-1 text-sm font-bold text-[var(--color-accent-alg)]">{block.fr}</h3>
          {showPivot && pvHead && pvHead !== block.fr && (
            <p className="mt-0.5 text-xs italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pvHead}</p>
          )}
        </div>
      );
    }
    case "plain":
      if (!block.fr) return <div className="h-3" />;
      return (
        <div>
          <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{renderText(block.fr)}</p>
          {showPivot && pivotText && pivotText !== block.fr && (
            <p className="mt-1 border-l-2 border-[var(--color-accent-alg)]/30 pl-3 text-xs italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pivotText}</p>
          )}
        </div>
      );
    case "note":
      return (
        <div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-xs text-blue-800 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300">
            {block.fr}
          </div>
          {showPivot && pivotText && pivotText !== block.fr && (
            <p className="mt-1 border-l-2 border-[var(--color-accent-alg)]/30 pl-3 text-xs italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pivotText}</p>
          )}
        </div>
      );
    case "example":
      return (
        <div>
          <div className="rounded-xl bg-[var(--color-bg-secondary)] px-4 py-3 font-mono text-xs text-[var(--color-text-primary)]">
            {block.fr}
          </div>
          {showPivot && pivotText && pivotText !== block.fr && (
            <p className="mt-1 border-l-2 border-[var(--color-accent-alg)]/30 pl-3 text-xs italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pivotText}</p>
          )}
        </div>
      );
    case "highlight":
      return (
        <div>
          <p className="text-sm font-bold text-[var(--color-accent-alg)]">{block.fr}</p>
          {showPivot && pivotText && pivotText !== block.fr && (
            <p className="mt-0.5 text-xs italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pivotText}</p>
          )}
        </div>
      );
    case "rule": {
      const pvLabel = bt?.label?.[pivot];
      return (
        <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-4 py-3 space-y-2">
          <p className="text-xs font-bold text-[var(--color-text-primary)]">{block.titleFr}</p>
          {showPivot && pvLabel && pvLabel !== block.titleFr && (
            <p className="text-xs italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pvLabel}</p>
          )}
          <ul className="list-disc space-y-1 pl-4">
            {block.itemsFr.map((it, i) => (
              <li key={i} className="text-xs text-[var(--color-text-secondary)]">
                {it}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    case "table": {
      const pvHeaders = showPivot ? bt?.headers?.[pivot] : undefined;
      return (
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
          <table className="w-full text-sm">
            <thead>
              <tr className={block.accentHeader ? "bg-[var(--color-accent-alg)]/15" : "bg-[var(--color-bg-secondary)]"}>
                {(pvHeaders ?? block.headersFr).map((h, i) => (
                  <th key={i} className={`px-3 py-2 text-center text-xs font-bold ${block.accentHeader ? "uppercase tracking-wide text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-[var(--color-bg-primary)]" : "bg-[var(--color-bg-secondary)]/40"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-center text-sm text-[var(--color-text-primary)]">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.captionFr && (
            <p className="px-3 py-1 text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p>
          )}
        </div>
      );
    }
    case "svg":
      return block.noFrame ? (
        <div className="my-2">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {block.captionFr && (
            <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p>
          )}
        </div>
      ) : (
        <div className="my-1 overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-white p-3">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {block.captionFr && (
            <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p>
          )}
        </div>
      );
    case "section": {
      const pvLabel = bt?.label?.[pivot];
      const pvItems = showPivot ? bt?.items?.[pivot] : undefined;
      return (
        <div className="space-y-1.5">
          {block.labelFr && <p className="text-sm font-bold text-[var(--color-accent-alg)]">{block.labelFr}</p>}
          {showPivot && pvLabel && pvLabel !== block.labelFr && (
            <p className="text-xs italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pvLabel}</p>
          )}
          {block.itemsFr.length > 0 && (
            <ul className="space-y-1 border-l-2 border-[var(--color-accent-alg)]/30 pl-3">
              {block.itemsFr.map((item, ii) => (
                <li key={ii} className="text-sm leading-relaxed text-[var(--color-text-primary)]">
                  {renderText(item)}
                  {pvItems?.[ii] && pvItems[ii] !== item && (
                    <span className="ml-2 text-xs italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pvItems[ii]}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    case "bullets": {
      const pvBulletItems = showPivot ? bt?.items?.[pivot] : undefined;
      return (
        <div className="space-y-1.5">
          {block.labelFr && <p className="text-sm font-bold text-[var(--color-accent-alg)]">{block.labelFr}</p>}
          {block.itemsFr.length > 0 && (
            <ul className="space-y-1 pl-1">
              {block.itemsFr.map((item, ii) => (
                <li key={ii} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
                  <span className="mt-1 shrink-0 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-alg)]" />
                  <span>
                    {renderText(item)}
                    {pvBulletItems?.[ii] && pvBulletItems[ii] !== item && (
                      <span className="ml-2 text-xs italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pvBulletItems[ii]}</span>
                    )}
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
    case "mult_table":
      return <MultiplicationTableBlock />;
    case "div_table":
      return <DivisionTableBlock />;
    case "mul_step_cards":
      return (
        <div className="space-y-3">
          {block.steps.map((step, si) => (
            <div key={si} className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3 flex items-start gap-4">
              <div className="flex-1 space-y-1 min-w-0">
                <p className="text-sm font-bold text-[var(--color-accent-alg)]">{step.numFr}</p>
                {step.textsFr.map((t, ti) => (
                  <p key={ti} className="text-sm leading-relaxed text-[var(--color-text-primary)]">{t}</p>
                ))}
              </div>
              <MulDemoGrid
                a={block.a} b={block.b} op={block.op}
                carries={step.carries} result={step.result}
              />
            </div>
          ))}
        </div>
      );
    case "mul2_step_cards":
      return (
        <div className="space-y-3">
          {block.steps.map((step, si) => (
            <div key={si} className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3 flex items-start gap-4">
              <div className="flex-1 space-y-1 min-w-0">
                <p className="text-sm font-bold text-[var(--color-accent-alg)]">{step.numFr}</p>
                {step.textsFr.map((t, ti) => (
                  <p key={ti} className="text-sm leading-relaxed text-[var(--color-text-primary)]">{t}</p>
                ))}
              </div>
              <Mul2DemoGrid
                a={block.a} b={block.b} result={block.result}
                carries1={step.carries1} carries2={step.carries2}
                p1={step.p1} p2shifted={step.p2shifted} res={step.res}
              />
            </div>
          ))}
        </div>
      );
    case "div_step_cards":
      return (
        <div className="space-y-3">
          {block.steps.map((step, si) => (
            <div key={si} className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3 flex items-start gap-4">
              <div className="flex-1 space-y-1 min-w-0">
                <p className="text-sm font-bold text-[var(--color-accent-alg)]">{step.numFr}</p>
                {step.textsFr.map((t, ti) => (
                  <p key={ti} className="text-sm leading-relaxed text-[var(--color-text-primary)]">{t}</p>
                ))}
              </div>
              <DivDemoGrid
                dividend={block.dividend} divisor={block.divisor}
                stepsComplete={step.stepsComplete}
              />
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
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
  const pivotTitle = showPivot ? trad?.title?.[pivot] : undefined;
  const pivotParas = showPivot ? trad?.paragraphs?.[pivot] : undefined;
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">
          {theory.title.fr}
        </h2>
        {pivotTitle && pivotTitle !== theory.title.fr && (
          <p className="mt-0.5 text-xs italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pivotTitle}</p>
        )}
      </div>
      {theory.blocks && theory.blocks.length > 0 ? (
        <div className="space-y-3">
          {theory.blocks.map((block, i) => (
            <BlockView key={i} block={block} blockIdx={i} tradBlocks={trad?.blocks} pivot={pivot} showPivot={showPivot} />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {theory.paragraphs.fr.map((p, i) => (
            <div key={i}>
              <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{p}</p>
              {pivotParas?.[i] && pivotParas[i] !== p && (
                <p className="mt-1 border-l-2 border-[var(--color-accent-alg)]/30 pl-3 text-xs italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pivotParas[i]}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export function GenericModuleContent({
  moduleId,
  startSubmoduleId,
  startAtEval,
}: {
  moduleId: string;
  startSubmoduleId?: string;
  startAtEval?: boolean;
}) {
  const router = useRouter();
  const pivot = usePivotLang();
  const { showPivot: showPivotTranslation } = useTranslation();
  const allLessons = getLessonsForModule(moduleId);
  const lessons = startSubmoduleId && allLessons
    ? allLessons.filter((l) => l.submoduleId === startSubmoduleId)
    : allLessons;

  const withEval = !!startSubmoduleId;

  const [steps] = useState<FlatStep[]>(() =>
    lessons && lessons.length > 0 ? buildSteps(lessons, withEval) : [],
  );

  const evalStartIdx = steps.findIndex((s) => s.kind === "eval_start");
  const initialIdx = startAtEval && evalStartIdx >= 0 ? evalStartIdx : 0;

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
  const [numberSelectOverrideConfigs, setNumberSelectOverrideConfigs] = useState<Record<number, NumberSelectConfig>>({});
  const [encadrementOverrideConfigs, setEncadrementOverrideConfigs] = useState<Record<number, EncadrementConfig>>({});
  const [oddEvenOverrideConfigs, setOddEvenOverrideConfigs] = useState<Record<number, OddEvenConfig>>({});
  const [nlMultiOverrideConfigs, setNlMultiOverrideConfigs] = useState<Record<number, NLMultiConfig>>({});
  const [orderingOverrideConfigs, setOrderingOverrideConfigs] = useState<Record<number, OrderingConfig>>({});
  const [seqRuleOverrideConfigs, setSeqRuleOverrideConfigs] = useState<Record<number, SeqRuleConfig>>({});
  const [seqCompleteOverrideConfigs, setSeqCompleteOverrideConfigs] = useState<Record<number, SeqCompleteConfig>>({});
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

  // Eval timer
  const [evalTimeLeft, setEvalTimeLeft] = useState<number | null>(null);

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
    setDivGridQuotientInputs(Array.from({ length: 3 }, () => Array(5).fill("")));
    setDivGridRemainderInputs(Array(3).fill(""));
    setDivGridOperandInputs(Array.from({ length: 3 }, () => [Array(6).fill(""), Array(2).fill("")]));
    setDivGridWorkInputs(emptyDivWork());
    setDivGridValidated(false);
    setDivGridResults(Array(3).fill(false));
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

  function startEval() {
    setEvalTimeLeft(5 * 60);
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
    if (!startSubmoduleId) { router.push("/mathematiques"); return; }
    const p = loadProgress();
    // Don't downgrade a submodule that was already passed
    if (!correct) {
      const existing = p.submoduleScores?.[startSubmoduleId];
      if (existing && existing.grade >= PASSING_GRADE) {
        router.push("/mathematiques");
        return;
      }
    }
    const pct = correct ? 100 : 0;
    const grade = percentToSwissGrade(pct);
    const medal = correct ? medalFromPercent(pct) : undefined;
    saveProgress(completeSubmodule(p, moduleId, startSubmoduleId, correct ? 1 : 0, 1, grade));
    void medal;
    router.push("/mathematiques");
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
  const activeDivGridConfig = currentStep?.kind === "div_column_grid"
    ? (divGridOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;
  const activeMul2Config = currentStep?.kind === "mul_two_digit"
    ? (mul2dOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;

  const goNext = useCallback(() => {
    if (showEvalScore) { router.push("/mathematiques"); return; }
    if (currentStep?.kind === "pass_toggle") {
      finishEval(toggleAnswer === "oui");
      return;
    }
    if (isInEvalPhase && currentStep) {
      let currentResults: boolean[] = [];
      if (currentStep.kind === "arithmetic_group") {
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
        // 4 pts all correct · 2 pts more than half · 0 pts otherwise
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
            ? (es.config.preFilledOperands ? "Calcul en colonnes (guidé)" : "Calcul en colonnes")
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
                : es?.kind === "expr_comparison" ? "Comparaison d'expressions"
                : es?.kind === "div_column_grid" ? (es.config.preFilledOperands ? "Division en colonnes (guidée)" : "Division en colonnes")
                : es?.kind === "mul_two_digit" ? (es.config.preFilledOperands ? "Multiplication à 2 chiffres (guidée)" : "Multiplication à 2 chiffres")
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
      router.push("/mathematiques");
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
  }, [isLastStep, currentStep, steps, stepIdx, exStatus, moduleId, goTo, router, startSubmoduleId, toggleAnswer, showEvalScore, isInEvalPhase, arithResults, gridResults, arithOverrideConfigs, gridOverrideConfigs, roundingResults, roundingOverrideConfigs, evalPageSavedResults, evalStartIdx, fracIdResults, fracEquivResults, fracSimplifyResults, fracCompareResults, numberSelectAnswers, encadrementAnswers, oddEvenAnswers, nlMultiAnswers, orderingSelected, seqRuleAnswers, seqCompleteAnswers, numberSelectOverrideConfigs, encadrementOverrideConfigs, oddEvenOverrideConfigs, nlMultiOverrideConfigs, activeOrderingConfig, activeSeqRuleConfig, activeSeqCompleteConfig, orderingOverrideConfigs, seqRuleOverrideConfigs, seqCompleteOverrideConfigs, divGridResults, divGridOverrideConfigs, mul2dResults, mul2dOverrideConfigs]);

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

  if (currentStep?.kind === "rounding_group") {
    const cfg = activeRoundingConfig!;
    stepCanValidate = !roundingValidated;
    stepValidate = roundingValidated ? () => {} : () => {
      setRoundingResults(cfg.questions.map((q, i) => (roundingAnswers[i] ?? "").trim() === q.answer));
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

  return (
    <div className="pb-40">
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

      {/* Main progress bar — training steps only */}
      {!inEvalPhase && (
        <div className="mb-6 flex gap-1">
          {trainingSteps.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i < trainingStepIdx
                  ? "bg-[var(--color-accent-alg)]"
                  : i === trainingStepIdx
                    ? "bg-[var(--color-accent-alg)] opacity-60"
                    : "bg-[var(--color-border-default)]"
              }`}
            />
          ))}
        </div>
      )}
      {/* Eval progress bar */}
      {isInEvalPhase && !showEvalScore && (
        <EvalProgressBar current={evalStepOffset} total={evalSteps.length} timeLeft={evalTimeLeft} />
      )}

      {/* Theory */}
      {currentStep?.kind === "theory" && <TheoryView lesson={currentStep.lesson} pivot={pivot} showPivot={!!showPivotTranslation} />}

      {/* Exercise */}
      {currentStep?.kind === "exercise" && (
        <div className="space-y-4">
          <p className="text-sm font-medium leading-relaxed text-[var(--color-text-primary)]">
            {currentStep.item.promptFr}
          </p>
          <input
            type="text"
            inputMode={currentStep.item.type === "number" ? "numeric" : "text"}
            value={answer}
            onChange={(e) => { setAnswer(e.target.value); if (exStatus !== "idle") setExStatus("idle"); }}
            onKeyDown={(e) => { if (e.key === "Enter" && answer.trim() && exStatus !== "correct") stepValidate?.(); }}
            placeholder="Votre réponse…"
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
              exStatus === "wrong"
                ? CLS_WRONG
                : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]"
            }`}
          />
          {exStatus === "wrong" && (
            <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
              {exAttempts >= 2 ? `Réponse attendue : ${currentStep.item.acceptable[0]}` : "Essayez encore…"}
            </p>
          )}
        </div>
      )}

      {/* Number line exercise */}
      {currentStep?.kind === "number_line" && (
        <div className="space-y-4">
          <p className="text-sm font-medium text-[var(--color-text-primary)]">
            Quel est le nombre indiqué par la flèche ?
          </p>
          <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
            <NumberLineSVG config={currentStep.nlConfig} />
          </div>
          <input
            type="number"
            inputMode="numeric"
            value={answer}
            onChange={(e) => { setAnswer(e.target.value); if (exStatus !== "idle") setExStatus("idle"); }}
            onKeyDown={(e) => { if (e.key === "Enter" && answer.trim() && exStatus !== "correct") stepValidate?.(); }}
            placeholder="Votre réponse…"
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
              exStatus === "wrong"
                ? CLS_WRONG
                : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]"
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
              if (!numberSelectValidated) {
                cls += sel
                  ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white"
                  : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]";
              } else {
                if (sel && shouldSelect) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white";
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
          <div className="rounded-xl border border-[var(--color-border-default)] p-4 space-y-3">
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
              const inputCls = "w-20 rounded border px-2 py-1.5 text-center font-mono text-sm outline-none transition-colors appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";
              const symCls = "shrink-0 text-sm font-bold text-[var(--color-text-secondary)]";
              const numCls = "w-20 shrink-0 text-center font-mono text-sm font-bold text-[var(--color-text-primary)]";
              const firstBlock = wrong ? (
                <div className={`${inputCls} h-[2.125rem] ${CLS_WRONG} flex items-center justify-center gap-1`}>
                  <span className="line-through text-amber-500 text-xs">{firstVal||"—"}</span>
                  <span className="text-xs font-bold text-[var(--color-text-primary)]">{firstExpected}</span>
                </div>
              ) : (
                <input type="number" inputMode="numeric" value={firstVal} disabled={encadrementValidated}
                  onChange={e => setEncadrementAnswers(prev => prev.map((v,j) => j===i ? {...v, [firstKey]: e.target.value} : v))}
                  className={`${inputCls} ${ok === null ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20"}`} />
              );
              const secondBlock = wrong ? (
                <div className={`${inputCls} h-[2.125rem] ${CLS_WRONG} flex items-center justify-center gap-1`}>
                  <span className="line-through text-amber-500 text-xs">{secondVal||"—"}</span>
                  <span className="text-xs font-bold text-[var(--color-text-primary)]">{secondExpected}</span>
                </div>
              ) : (
                <input type="number" inputMode="numeric" value={secondVal} disabled={encadrementValidated}
                  onChange={e => setEncadrementAnswers(prev => prev.map((v,j) => j===i ? {...v, [secondKey]: e.target.value} : v))}
                  className={`${inputCls} ${ok === null ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20"}`} />
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
          <div className="rounded-xl border border-[var(--color-border-default)] p-4 space-y-3">
            {activeOddEvenConfig.questions.map((q, i) => {
              const sel = oddEvenAnswers[i];
              const ok = oddEvenValidated ? oddEvenResults[i] : null;
              return (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  <span className="w-16 font-mono text-sm font-bold text-[var(--color-text-primary)]">{q.n.toLocaleString("fr-CH")}</span>
                  <div className="flex rounded-full border overflow-hidden border-[var(--color-border-default)]">
                    {(["pair","impair"] as const).map((opt, oi) => {
                      const isSelected = sel === opt;
                      const isCorrect = opt === q.answer;
                      let cls = "w-[4.5rem] py-1.5 text-sm font-bold text-center transition-colors focus:outline-none ";
                      if (oi === 1) cls += "border-l border-[var(--color-border-default)] ";
                      if (!oddEvenValidated) {
                        cls += isSelected
                          ? "bg-[var(--color-accent-alg)] text-white"
                          : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]";
                      } else if (isSelected && isCorrect) {
                        cls += "bg-[var(--color-accent-alg)] text-white";
                      } else if (isSelected && !isCorrect) {
                        cls += "bg-amber-100 text-amber-600 border-amber-300 dark:bg-amber-950/30";
                      } else if (!isSelected && isCorrect && ok === false) {
                        cls += "bg-amber-100 text-amber-600 border-amber-300 dark:bg-amber-950/30";
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
              const inputCls = "flex-1 h-[2.75rem] rounded-xl border px-4 py-2.5 text-sm font-mono outline-none transition-colors appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";
              let afterText = "";
              if (!noFeedback) {
                if (nlMultiValidated && q.mode === "read" && ok === false) afterText = `Réponse attendue : ${q.nlConfig.target}`;
                else if (nlMultiValidated && q.mode === "less" && ok === false) afterText = `La flèche indique ${q.nlConfig.target}. Votre réponse doit être plus petite.`;
                else if (nlMultiValidated && q.mode === "more" && ok === false) afterText = `La flèche indique ${q.nlConfig.target}. Votre réponse doit être plus grande.`;
              }
              return (
                <div key={i} className="space-y-2">
                  <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
                    <NumberLineSVG config={q.nlConfig} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="shrink-0 text-xs font-bold text-[var(--color-accent-alg)] w-5">{i + 1}.</span>
                    {wrong ? (
                      <div className={`${inputCls} ${CLS_WRONG} flex items-center gap-2`}>
                        <span className="line-through text-amber-500 text-xs">{v||"—"}</span>
                        {q.mode === "read" && <span className="text-xs font-bold">{q.nlConfig.target}</span>}
                      </div>
                    ) : (
                      <input type="number" inputMode="numeric" value={v} disabled={nlMultiValidated}
                        onChange={e => setNlMultiAnswers(prev => prev.map((a,j) => j===i ? e.target.value : a))}
                        className={`${inputCls} ${ok === null ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20"}`} />
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
            Classez les nombres dans l&apos;ordre {activeOrderingConfig.direction === "asc" ? "croissant (du plus petit au plus grand)" : "décroissant (du plus grand au plus petit)"}.
          </p>
          <div className="space-y-6">
            {activeOrderingConfig.questions.map((q, qi) => {
              const sel = orderingSelected[qi] ?? [];
              const sorted = [...q.numbers].sort((a,b) => currentStep.config.direction === "asc" ? a-b : b-a);
              const ok = orderingValidated ? orderingResults[qi] : null;
              const sep = activeOrderingConfig.direction === "asc" ? "<" : ">";
              return (
                <div key={qi} className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {q.numbers.map((n, ni) => {
                      const isSelected = sel.includes(n);
                      const selIdx = sel.indexOf(n);
                      let cls = "w-16 flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-mono font-bold transition-colors ";
                      if (!orderingValidated) {
                        cls += isSelected
                          ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white"
                          : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]";
                      } else {
                        if (isSelected && sorted[selIdx] === n) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white";
                        else if (isSelected) cls += CLS_WRONG;
                        else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-50";
                      }
                      return (
                        <button key={ni} type="button" disabled={orderingValidated}
                          onClick={() => {
                            setOrderingSelected(prev => {
                              const next = prev.map(a => [...a]);
                              const cur = next[qi] ?? [];
                              if (cur.includes(n)) { next[qi] = cur.filter(x => x !== n); }
                              else { next[qi] = [...cur, n]; }
                              return next;
                            });
                          }}
                          className={cls}>
                          {n.toLocaleString("fr-CH")}
                        </button>
                      );
                    })}
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-[var(--color-accent-alg)]">{qi + 1}. Votre ordre :</span>
                    <div className="flex flex-wrap items-center gap-1 min-h-[1.5rem]">
                      {sel.length > 0 ? sel.map((n, si) => (
                        <Fragment key={si}>
                          <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">{n.toLocaleString("fr-CH")}</span>
                          {si < sel.length - 1 && <span className="text-[var(--color-text-secondary)] text-xs">{sep}</span>}
                        </Fragment>
                      )) : <span className="text-xs text-[var(--color-text-secondary)] italic">—</span>}
                    </div>
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
          <p className="text-sm text-[var(--color-text-secondary)]">Trouvez la règle de chaque suite (ex: +5 ou -3).</p>
          <div className="space-y-4">
            {activeSeqRuleConfig.questions.map((q, i) => {
              const v = seqRuleAnswers[i] ?? "";
              const ok = seqRuleValidated ? seqRuleResults[i] : null;
              const wrong = ok === false;
              const correctAns = `${q.op}${q.step}`;
              const chipCls = `${activeSeqRuleConfig.exNum === 3 ? "w-12 " : activeSeqRuleConfig.exNum === 4 ? "w-16 " : ""}shrink-0 flex items-center justify-center rounded-lg border border-[var(--color-border-default)] ${activeSeqRuleConfig.exNum === 4 ? "px-[10px]" : "px-3"} py-2 font-mono text-sm font-bold text-[var(--color-text-primary)]`;
              const inputRowCls = "w-24 rounded border px-3 py-2 text-sm font-mono outline-none transition-colors";
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                  {q.nums.map((n, ni) => (
                    <span key={ni} className={chipCls}>{n.toLocaleString("fr-CH")}</span>
                  ))}
                  {wrong ? (
                    <div className={`${inputRowCls} ${CLS_WRONG} flex items-center justify-center gap-1`}>
                      <span className="line-through text-amber-500 text-xs">{v||"—"}</span>
                      <span className="text-xs font-bold">{correctAns}</span>
                    </div>
                  ) : (
                    <input type="text" value={v} disabled={seqRuleValidated}
                      onChange={e => setSeqRuleAnswers(prev => prev.map((a,j) => j===i ? e.target.value : a))}
                      placeholder="± nombre"
                      className={`${inputRowCls} ${ok === null ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20"}`} />
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
          <p className="text-sm text-[var(--color-text-secondary)]">Complétez les suites de nombres.</p>
          <div className="space-y-5">
            {(() => {
              const globalMaxN = Math.max(...activeSeqCompleteConfig.questions.flatMap(q => q.allNums.map(n => Math.abs(n))));
              const cellW = activeSeqCompleteConfig.exNum === 6 ? "w-[54px]" : globalMaxN >= 10000 ? "w-20" : globalMaxN >= 1000 ? "w-16" : globalMaxN > 100 ? "w-14" : "w-12";
              const inputCls = `${cellW} shrink-0 h-9 rounded border px-1 text-center font-mono text-sm outline-none transition-colors appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`;
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
                        const wrong = seqCompleteValidated && parseInt(v) !== expected;
                        return wrong ? (
                          <div key={ni} className={`${inputCls} ${CLS_WRONG} flex items-center justify-center gap-0.5`}>
                            <span className="line-through text-amber-500 text-xs">{v||"—"}</span>
                            <span className="text-xs font-bold">{expected.toLocaleString("fr-CH")}</span>
                          </div>
                        ) : (
                          <input key={ni} type="number" inputMode="numeric" value={v} disabled={seqCompleteValidated}
                            onChange={e => setSeqCompleteAnswers(prev => {
                              const next = prev.map(r => [...r]);
                              if (!next[qi]) next[qi] = [];
                              next[qi]![bIdx] = e.target.value;
                              return next;
                            })}
                            className={`${inputCls} ${seqCompleteValidated ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20" : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]"}`} />
                        );
                      }
                      return (
                        <span key={ni} className={`${cellW} shrink-0 h-9 flex items-center justify-center rounded-lg border border-[var(--color-border-default)] font-mono text-sm font-bold text-[var(--color-text-primary)]`}>{n.toLocaleString("fr-CH")}</span>
                      );
                    })}
                  </div>
                  {seqCompleteValidated && activeSeqCompleteConfig.exNum !== 5 && activeSeqCompleteConfig.exNum !== 6 && (
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

      {/* Comparison exercise */}
      {currentStep?.kind === "comparison_ex" && activeCompConfig && (
        <div className="space-y-4">
          {currentStep.lesson.submoduleId === "A1-3" && (
            <p className="text-sm text-[var(--color-text-secondary)]">Comparez les deux nombres.</p>
          )}
          <ComparisonExercise
            config={activeCompConfig}
            answers={compAnswers}
            validated={compValidated}
            onAnswer={(i, sym) => setCompAnswers(prev => prev.map((a, j) => j === i ? sym : a))}
          />
        </div>
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
              ? "Effectuez les additions en colonnes. Écrivez le résultat et les retenues."
              : "Effectuez les soustractions en colonnes. Écrivez le résultat et les emprunts."
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

      {/* Eval score screen */}
      {showEvalScore && evalFinalGrade !== null && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Résultats de l&apos;évaluation</h2>
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
            <p className="text-sm text-[var(--color-text-secondary)]">sur 6 · {evalEarnedPts}/{evalTotalPts_state} pts</p>
            <p className={`mt-3 text-base font-bold ${evalFinalGrade >= PASSING_GRADE ? "text-[var(--color-accent-alg)]" : "text-red-500"}`}>
              {evalFinalGrade >= PASSING_GRADE ? "✓ Réussi" : "✗ À améliorer"}
            </p>
            <p className="mt-1 text-xs text-[var(--color-text-secondary)]">Seuil de réussite : {PASSING_GRADE}/6</p>
          </div>
        </div>
      )}

      {/* Eval start screen */}
      {currentStep?.kind === "eval_start" && (
        <div className="flex flex-col items-center gap-8 py-8 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--color-accent-alg)]/10">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-alg)" strokeWidth="1.5" aria-hidden>
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-alg)]">
              Évaluation
            </p>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
              {currentStep.lesson.theory.title.fr}
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Évalue ta maîtrise de ce module.</p>
            <p className="text-sm text-[var(--color-text-secondary)]">L&apos;évaluation est chronométrée. Tu as 5 minutes pour compléter l&apos;évaluation.</p>
            <p className="text-sm text-[var(--color-text-secondary)]">Les exercices apparaîtront au démarrage du chronomètre.</p>
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
                  ? "bg-[var(--color-accent-alg)] text-white shadow-sm"
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

      {/* Fixed bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            {/* Back button — hidden on eval start and score screen */}
            {(currentStep?.kind !== "eval_start" && !showEvalScore) ? (
              <button
                type="button"
                onClick={goBack}
                disabled={isFirstStep || currentStep?.kind === "pass_toggle"}
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
                    (currentStep?.kind === "mul_two_digit" && !mul2dValidated)
                  ))
                }
                className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl bg-[var(--color-accent-alg)] px-4 text-sm font-medium text-white transition-opacity disabled:opacity-30"
              >
                {showEvalScore || currentStep?.kind === "pass_toggle" || isLastStep
                  ? "Terminer ✓"
                  : "Suivant →"}
              </button>
            )}
          </div>
        </div>
        <div style={{ height: 68 }} />
      </div>
    </div>
  );
}

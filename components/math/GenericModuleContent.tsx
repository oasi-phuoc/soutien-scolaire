"use client";

import { useRouter } from "next/navigation";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { answerMatches } from "@/lib/curriculum/content/math/math-a1-types";
import type { MathExerciseItem, MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { loadProgress, saveProgress, completeSubmodule } from "@/lib/progress/math-progress";
import { percentToSwissGrade, medalFromPercent, PASSING_GRADE, linearSwissGrade } from "@/lib/scoring";

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
type RoundingConfig = { questions: RoundingQ[]; exNum: number; count: number };
type RoundingStep = { kind: "rounding_group"; lesson: MathSubmoduleLesson; config: RoundingConfig };
type ColGridQ = { a: number; b: number; result: number; op: ArithOp; carryRow: (number | null)[] };
type ColGridConfig = { questions: ColGridQ[]; exNum: number; op: ArithOp; preFilledOperands: boolean };

type ExprCompQ = { la: number; lop: ArithOp; lb: number; ra: number; rop: ArithOp; rb: number; answer: "<" | "=" | ">" };
type ExprCompConfig = { questions: ExprCompQ[]; exNum: number; op: ArithOp };

type TheoryStep      = { kind: "theory";           lesson: MathSubmoduleLesson };
type ExerciseStep    = { kind: "exercise";          lesson: MathSubmoduleLesson; item: MathExerciseItem };
type NumberLineStep  = { kind: "number_line";       lesson: MathSubmoduleLesson; nlConfig: NLConfig };
type ComparisonStep  = { kind: "comparison_ex";     lesson: MathSubmoduleLesson; config: ComparisonConfig };
type ArithGroupStep  = { kind: "arithmetic_group";  lesson: MathSubmoduleLesson; config: ArithGroupConfig; timer?: number };
type ColumnGridStep  = { kind: "column_grid";       lesson: MathSubmoduleLesson; config: ColGridConfig };
type ExprCompStep    = { kind: "expr_comparison";   lesson: MathSubmoduleLesson; config: ExprCompConfig };
type EvalStartStep   = { kind: "eval_start";        lesson: MathSubmoduleLesson };
type PassToggleStep  = { kind: "pass_toggle";       lesson: MathSubmoduleLesson };
type FlatStep = TheoryStep | ExerciseStep | NumberLineStep | ComparisonStep | ArithGroupStep | ColumnGridStep | ExprCompStep | EvalStartStep | PassToggleStep | RoundingStep;

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
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
        <div className="space-y-3">
          {config.questions.map((q, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className={`${config.level === 1 ? "w-8" : "w-[5rem]"} shrink-0 text-right font-mono text-sm text-[var(--color-text-primary)]`}>{formatCompNum(q.a)}</span>
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
function genExprComp(op: ArithOp, range: [number, number], exNum: number): ExprCompConfig {
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
  const questions: ExprCompQ[] = targets.map(answer => {
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
  const num = (n: number) => (
    <span className="font-mono font-bold text-[var(--color-accent-alg)]">{n}</span>
  );
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3" style={{ gridTemplateColumns: "1.5rem 1fr auto 1fr" }}>
          {config.questions.map((q, i) => (
            <Fragment key={i}>
              <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="justify-self-end font-mono text-sm">{num(q.la)} <span className="text-[var(--color-text-secondary)]">{q.lop}</span> {num(q.lb)}</span>
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
              <span className="font-mono text-sm">{num(q.ra)} <span className="text-[var(--color-text-secondary)]">{q.rop}</span> {num(q.rb)}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Number line ──────────────────────────────────────────────────────────────
type NLConfig = { start: number; end: number; step: number; divCount: number; labelEvery: number; target: number };

function genNLConfig(): NLConfig {
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
          <line x1={t.x} y1={t.labeled ? lineY - 6 : lineY - 3} x2={t.x} y2={t.labeled ? lineY + 6 : lineY + 3}
            stroke="currentColor" strokeWidth={t.labeled ? 1.5 : 1} />
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
function roundTo100(n: number) { return Math.round(n / 100) * 100; }
function roundTo1000(n: number) { return Math.round(n / 1000) * 1000; }

function genRounding(kind: "cent_near" | "thou_near" | "est_add" | "est_sub" | "est_mixed", exNum: number, count: number): RoundingConfig {
  const qs: RoundingQ[] = [];
  for (let i = 0; i < count; i++) {
    if (kind === "cent_near") {
      const x = rnd(101, 999);
      qs.push({ prompt: `Arrondissez ${x} à la centaine la plus proche.`, answer: String(roundTo100(x)) });
    } else if (kind === "thou_near") {
      const x = rnd(1001, 9999);
      qs.push({ prompt: `Arrondissez ${x} au millier le plus proche.`, answer: String(roundTo1000(x)) });
    } else if (kind === "est_add") {
      const x = rnd(1, 999), y = rnd(1, 999);
      const ans = roundTo100(x) + roundTo100(y);
      qs.push({ prompt: `${x} + ${y} ≈ ?`, answer: String(ans) });
    } else if (kind === "est_sub") {
      let x = rnd(1, 999), y = rnd(1, 999);
      if (x < y) [x, y] = [y, x];
      const ans = roundTo100(x) - roundTo100(y);
      qs.push({ prompt: `${x} − ${y} ≈ ?`, answer: String(ans) });
    } else {
      // est_mixed: 3 numbers with 2 mixed operators
      const x = rnd(1, 999), y = rnd(1, 999), z = rnd(1, 999);
      const useAddFirst = Math.random() < 0.5;
      let prompt: string;
      let ans: number;
      if (useAddFirst) {
        prompt = `${x} + ${y} − ${z} ≈ ?`;
        ans = roundTo100(x) + roundTo100(y) - roundTo100(z);
      } else {
        prompt = `${x} − ${y} + ${z} ≈ ?`;
        ans = roundTo100(x) - roundTo100(y) + roundTo100(z);
      }
      qs.push({ prompt, answer: String(ans) });
    }
  }
  return { questions: qs, exNum, count };
}

function genRoundingMixed(exNum: number, count: number): RoundingConfig {
  const qs: RoundingQ[] = [];
  const halfAdd = Math.floor(count / 2);
  for (let i = 0; i < count; i++) {
    if (i < halfAdd) {
      const x = rnd(1, 999), y = rnd(1, 999);
      const ans = roundTo100(x) + roundTo100(y);
      qs.push({ prompt: `${x} + ${y} ≈ ?`, answer: String(ans) });
    } else {
      let x = rnd(1, 999), y = rnd(1, 999);
      if (x < y) [x, y] = [y, x];
      const ans = roundTo100(x) - roundTo100(y);
      qs.push({ prompt: `${x} − ${y} ≈ ?`, answer: String(ans) });
    }
  }
  return { questions: qs, exNum, count };
}

// ── Column grid generators ────────────────────────────────────────────────────
function getD4(n: number): [number, number, number, number] {
  return [Math.floor(n / 1000) % 10, Math.floor(n / 100) % 10, Math.floor(n / 10) % 10, n % 10];
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
  } else {
    let borrow = 0;
    for (let i = 3; i >= 0; i--) {
      const d = ad[i]! - bd[i]! - borrow;
      if (d < 0) { borrow = 1; if (i > 0) row[i - 1] = 1; }
      else { borrow = 0; }
    }
  }
  return row;
}

function genColGridQ(op: ArithOp): ColGridQ {
  for (;;) {
    let a: number, b: number;
    if (op === "+") { a = rnd(100, 4999); b = rnd(100, 9999 - a); }
    else { a = rnd(1000, 9999); b = rnd(100, a - 1); }
    const result = op === "+" ? a + b : a - b;
    if (result >= 0 && result <= 9999) return { a, b, result, op, carryRow: computeCarries(a, b, op) };
  }
}

function genColumnGrid(op: ArithOp, preFilledOperands: boolean, exNum: number, count = 4): ColGridConfig {
  return { questions: Array.from({ length: count }, () => genColGridQ(op)), exNum, op, preFilledOperands };
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
        {timeLeft !== null && !validated && (
          <span className={`rounded-full px-3 py-1 text-sm font-bold tabular-nums ${timeLeft <= 15 ? "bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400" : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]"}`}>
            {formatTime(timeLeft)}
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
  q, cardIdx, cellAnswers, carryInputs, validated, cardCorrect: _cardCorrect, preFilledOperands, exNum, onChange, onCarryChange,
}: {
  q: ColGridQ; cardIdx: number; cellAnswers: string[]; carryInputs: string[];
  validated: boolean; cardCorrect: boolean; preFilledOperands: boolean; exNum: number;
  onChange: (cardIdx: number, cellIdx: number, val: string) => void;
  onCarryChange: (cardIdx: number, col: number, val: string) => void;
}) {
  const ad = getD4(q.a), bd = getD4(q.b), rd = getD4(q.result);
  const firstNzA = ad.findIndex(d => d !== 0);
  const firstNzB = bd.findIndex(d => d !== 0);
  // cellIdx layout: [0-3]=op1, [4-7]=op2, [8-11]=result (when not preFilledOperands)
  // cellIdx layout: [0-3]=result only (when preFilledOperands)
  const resBase = preFilledOperands ? 0 : 8;
  const strictZero = exNum >= 7;

  const cellOk = (expected: number, val: string) => {
    const trimmed = val.trim();
    if (strictZero) return trimmed === String(expected);
    return trimmed === String(expected) || (expected === 0 && trimmed === "");
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

  const CellInput = ({ base, col, expected }: { base: number; col: number; expected: number }) => {
    const idx = base + col;
    const val = cellAnswers[idx] ?? "";
    const ok = validated ? cellOk(expected, val) : null;
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
            <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">{q.op === "+" ? "R" : "E"}</td>
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
                {preFilledOperands ? <Prefilled digit={ad[col]!} isLeading={col < firstNzA} /> : <CellInput base={0} col={col} expected={ad[col]!} />}
              </td>
            ))}
          </tr>
          {/* Operand 2 */}
          <tr>
            <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">{q.op}</td>
            {[0, 1, 2, 3].map(col => (
              <td key={col} className="text-center">
                {preFilledOperands ? <Prefilled digit={bd[col]!} isLeading={col < firstNzB} /> : <CellInput base={4} col={col} expected={bd[col]!} />}
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
                <CellInput base={resBase} col={col} expected={rd[col]!} />
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
  const inputBase = "rounded border px-2 py-1.5 text-center font-mono text-sm outline-none transition-colors appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";
  const CLS_WRONG_INL = "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {config.exNum}</h2>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4 space-y-3">
        {config.questions.map((q, i) => {
          const v = answers[i] ?? "";
          const ok = validated ? results[i] ?? false : null;
          const wrongField = ok === false;
          return (
            <div key={i} className="flex min-h-[2.25rem] items-center gap-2 flex-wrap">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="flex-1 text-sm text-[var(--color-text-primary)]">{q.prompt}</span>
              {wrongField
                ? <div className={`${inputBase} ${CLS_WRONG_INL} min-w-[5rem] flex items-center justify-center gap-0.5`}>
                    <span className="line-through text-amber-500 text-xs">{v || "—"}</span>
                    <span className="text-[var(--color-text-primary)] text-xs font-bold ml-1">{q.answer}</span>
                  </div>
                : <input
                    type="number"
                    inputMode="numeric"
                    value={v}
                    disabled={validated}
                    onChange={e => onChange(i, e.target.value)}
                    className={`${inputBase} min-w-[5rem] ${ok === null ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]" : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20"}`}
                  />
              }
            </div>
          );
        })}
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
      // Évaluation — 4 exercices sur pages séparées
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 99], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup(op, [0, 99], 2, true) });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid(op, true, 3, 2) });
      steps.push({ kind: "column_grid", lesson, config: genColumnGrid(op, false, 4, 2) });
    } else if (sid === "A2-3") {
      // Entraînement arrondi/estimation
      steps.push({ kind: "rounding_group", lesson, config: genRounding("cent_near", 1, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("thou_near", 2, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_add", 3, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_sub", 4, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_mixed", 5, 5) });
      // Évaluation
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("cent_near", 1, 3) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("thou_near", 2, 3) });
      steps.push({ kind: "rounding_group", lesson, config: genRoundingMixed(3, 5) });
      steps.push({ kind: "rounding_group", lesson, config: genRounding("est_mixed", 4, 4) });
    } else if (sid === "A3-1") {
      // Tables de multiplications — entraînement
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 6], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [7, 12], 2) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 3) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 4, false, 60) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 5, true) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 6, true, 60) });
      // Évaluation
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 2) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 3, true) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("×", [1, 12], 4, true) });
    } else if (sid === "A3-3") {
      // Tables de divisions — entraînement
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 6], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [7, 12], 2) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 3) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 4, false, 60) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 5, true) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 6, true, 60) });
      // Évaluation
      steps.push({ kind: "eval_start", lesson });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 1) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 2) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 3, true) });
      steps.push({ kind: "arithmetic_group", lesson, config: genArithGroup("÷", [1, 12], 4, true) });
    } else {
      if (sid === "A1-4") steps.push({ kind: "number_line", lesson, nlConfig: genNLConfig() });
      if (sid === "A1-3") {
        steps.push({ kind: "comparison_ex", lesson, config: genComparisonConfig(1) });
        steps.push({ kind: "comparison_ex", lesson, config: genComparisonConfig(2) });
      }
      if (sid !== "A1-3") {
        const pool = lesson.exercisePool;
        const size = lesson.poolSize ?? 5;
        const exercises = pool && pool.length > 0 ? shufflePick(pool, size) : lesson.exercises.slice(0, size);
        for (const item of exercises) steps.push({ kind: "exercise", lesson, item });
      }
    }
  }
  const hasDrillsNoPassToggle = lessons.some(l =>
    l.submoduleId === "A2-1" || l.submoduleId === "A2-2" ||
    l.submoduleId === "A2-3" || l.submoduleId === "A3-1" || l.submoduleId === "A3-3"
  );
  if (withEval && lessons.length > 0 && !hasDrillsNoPassToggle) {
    const lastLesson = lessons[lessons.length - 1]!;
    steps.push({ kind: "eval_start", lesson: lastLesson });
    steps.push({ kind: "pass_toggle", lesson: lastLesson });
  }
  // A2-1/A2-2/A2-3/A3-1/A3-3: eval_start + eval exercises already pushed above; no pass_toggle
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
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{a}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">×</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{n}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">=</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{a * n}</td>
                <td className="w-6" />
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{b}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">×</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{n}</td>
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
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{a * n}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">÷</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{a}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">=</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{n}</td>
                <td className="w-6" />
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{b * n}</td>
                <td className="px-1 py-1.5 text-center font-mono text-[var(--color-text-primary)]">÷</td>
                <td className="px-2 py-1.5 text-center font-mono font-bold text-[var(--color-accent-alg)]">{b}</td>
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
function BlockView({ block }: { block: MathRichBlock }) {
  switch (block.type) {
    case "heading":
      return block.black ? (
        <h3 className="mt-3 mb-1 text-base font-bold text-[var(--color-text-primary)]">{block.fr}</h3>
      ) : (
        <h3 className="mt-4 mb-1 text-sm font-bold text-[var(--color-accent-alg)]">{block.fr}</h3>
      );
    case "plain":
      if (!block.fr) return <div className="h-3" />;
      return (
        <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{renderText(block.fr)}</p>
      );
    case "note":
      return (
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-xs text-blue-800 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300">
          {block.fr}
        </div>
      );
    case "example":
      return (
        <div className="rounded-xl bg-[var(--color-bg-secondary)] px-4 py-3 font-mono text-xs text-[var(--color-text-primary)]">
          {block.fr}
        </div>
      );
    case "highlight":
      return (
        <p className="text-sm font-bold text-[var(--color-accent-alg)]">{block.fr}</p>
      );
    case "rule":
      return (
        <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-4 py-3 space-y-2">
          <p className="text-xs font-bold text-[var(--color-text-primary)]">{block.titleFr}</p>
          <ul className="list-disc space-y-1 pl-4">
            {block.itemsFr.map((it, i) => (
              <li key={i} className="text-xs text-[var(--color-text-secondary)]">
                {it}
              </li>
            ))}
          </ul>
        </div>
      );
    case "table":
      return (
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
          <table className="w-full text-sm">
            <thead>
              <tr className={block.accentHeader ? "bg-[var(--color-accent-alg)]/15" : "bg-[var(--color-bg-secondary)]"}>
                {block.headersFr.map((h, i) => (
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
    case "section":
      return (
        <div className="space-y-1.5">
          {block.labelFr && <p className="text-sm font-bold text-[var(--color-accent-alg)]">{block.labelFr}</p>}
          {block.itemsFr.length > 0 && (
            <ul className="space-y-1 border-l-2 border-[var(--color-accent-alg)]/30 pl-3">
              {block.itemsFr.map((item, ii) => (
                <li key={ii} className="text-sm leading-relaxed text-[var(--color-text-primary)]">
                  {renderText(item)}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    case "bullets":
      return (
        <div className="space-y-1.5">
          {block.labelFr && <p className="text-sm font-bold text-[var(--color-accent-alg)]">{block.labelFr}</p>}
          {block.itemsFr.length > 0 && (
            <ul className="space-y-1 pl-1">
              {block.itemsFr.map((item, ii) => (
                <li key={ii} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
                  <span className="mt-1 shrink-0 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-alg)]" />
                  <span>{renderText(item)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
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
    default:
      return null;
  }
}

// ── Theory view ──────────────────────────────────────────────────────────────
function TheoryView({ lesson }: { lesson: MathSubmoduleLesson }) {
  const { theory } = lesson;
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-text-primary)]">
        {theory.title.fr}
      </h2>
      {theory.blocks && theory.blocks.length > 0 ? (
        <div className="space-y-3">
          {theory.blocks.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {theory.paragraphs.fr.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-[var(--color-text-primary)]">
              {p}
            </p>
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
  const [roundingResetKey, setRoundingResetKey] = useState(0);

  // Column grid exercise state (4 cards × 12 cells max)
  const emptyGrid = () => Array.from({ length: 4 }, () => Array(12).fill("") as string[]);
  const emptyCarryGrid = () => Array.from({ length: 4 }, () => Array(4).fill("") as string[]);
  const [gridAnswers, setGridAnswers] = useState<string[][]>(emptyGrid);
  const [gridCarryInputs, setGridCarryInputs] = useState<string[][]>(emptyCarryGrid);
  const [gridValidated, setGridValidated] = useState(false);
  const [gridResults, setGridResults] = useState<boolean[]>(() => Array(4).fill(false));

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
    setRoundingAnswers(Array(5).fill(""));
    setRoundingValidated(false);
    setRoundingResults(Array(5).fill(false));
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
        currentResults = gridResults.slice(0, (gridOverrideConfigs[stepIdx] ?? currentStep.config).questions.length);
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
      if (currentStep?.kind === "column_grid" || currentStep?.kind === "arithmetic_group" || currentStep?.kind === "expr_comparison" || currentStep?.kind === "rounding_group") {
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
  }, [isLastStep, currentStep, steps, stepIdx, exStatus, moduleId, goTo, router, startSubmoduleId, toggleAnswer, showEvalScore, isInEvalPhase, arithResults, gridResults, arithOverrideConfigs, gridOverrideConfigs, evalPageSavedResults, evalStartIdx]);

  let stepValidate: (() => void) | undefined;
  let stepReset: (() => void) | undefined;
  let stepCanValidate = true;

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
    const strictZero = cfg.exNum >= 7;
    const cellOkVal = (d: number, v: string) =>
      v === String(d) || (!strictZero && d === 0 && v === "");
    stepCanValidate = !gridValidated;
    stepValidate = gridValidated ? () => {} : () => {
      const res = cfg.questions.map((q, qi) => {
        const cells = gridAnswers[qi] ?? [];
        const rd = getD4(q.result);
        const resultOk = rd.every((d, col) => cellOkVal(d, (cells[resBase + col] ?? "").trim()));
        if (cfg.preFilledOperands) return resultOk;
        const ad = getD4(q.a), bd = getD4(q.b);
        const op1Ok = ad.every((d, col) => cellOkVal(d, (cells[col] ?? "").trim()));
        const op2Ok = bd.every((d, col) => cellOkVal(d, (cells[4 + col] ?? "").trim()));
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

  if (currentStep?.kind === "rounding_group") {
    const cfg = activeRoundingConfig!;
    stepCanValidate = !roundingValidated;
    stepValidate = roundingValidated ? () => {} : () => {
      setRoundingResults(cfg.questions.map((q, i) => (roundingAnswers[i] ?? "").trim() === q.answer));
      setRoundingValidated(true);
    };
    stepReset = () => {
      const kind = cfg.questions[0]?.prompt.includes("centaine") ? "cent_near"
        : cfg.questions[0]?.prompt.includes("millier") ? "thou_near"
        : cfg.questions[0]?.prompt.includes("≈") && cfg.count <= 3 ? "est_add"
        : "est_mixed";
      setRoundingOverrideConfigs(prev => ({ ...prev, [stepIdx]: genRounding(kind as Parameters<typeof genRounding>[0], cfg.exNum, cfg.count) }));
      setRoundingAnswers(Array(cfg.count).fill(""));
      setRoundingValidated(false);
      setRoundingResults(Array(cfg.count).fill(false));
      setRoundingResetKey(k => k + 1);
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
              <button type="button" onClick={() => setShowEvalCancelConfirm(false)}
                className="flex-1 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]">
                Continuer
              </button>
              <button type="button" onClick={cancelEval}
                className="flex-1 rounded-[var(--radius-lg)] bg-red-500 px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
                Annuler
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
      {/* Secondary eval progress bar */}
      {isInEvalPhase && !showEvalScore && (
        <div className="mb-6">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-alg)]">Évaluation</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{evalStepOffset + 1} / {evalSteps.length}</p>
          </div>
          <div className="flex gap-1">
            {evalSteps.map((_, i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${
                i < evalStepOffset ? "bg-[var(--color-accent-alg)]" : i === evalStepOffset ? "bg-[var(--color-accent-alg)] opacity-60" : "bg-[var(--color-border-default)]"
              }`} />
            ))}
          </div>
        </div>
      )}

      {/* Theory */}
      {currentStep?.kind === "theory" && <TheoryView lesson={currentStep.lesson} />}

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

      {/* Comparison exercise */}
      {currentStep?.kind === "comparison_ex" && activeCompConfig && (
        <ComparisonExercise
          config={activeCompConfig}
          answers={compAnswers}
          validated={compValidated}
          onAnswer={(i, sym) => setCompAnswers(prev => prev.map((a, j) => j === i ? sym : a))}
        />
      )}

      {currentStep?.kind === "expr_comparison" && activeExprCompConfig && (
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
            onClick={() => goTo(stepIdx + 1)}
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

            {/* Validate (exercises only) */}
            {(stepValidate || (!isInEvalPhase && stepReset)) ? (
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
                    (currentStep?.kind === "column_grid" && !gridValidated)
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

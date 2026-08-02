"use client";
import React, { useState, useMemo, useEffect } from "react";
import type { PlacementExerciseProps } from "./PlacementExercises1to15";
import {
  placementRandInt as randInt,
  placementShuffle as shuffle,
  placementRandom,
} from "@/components/math/placement/placement-print-rng";
import {
  printQuestionsListClass,
  usePrintQuestionLayout,
} from "@/components/print/PrintExerciseLayoutContext";

// ── Helpers ───────────────────────────────────────────────────────────────────


function parseNum(input: string): number {
  return parseFloat(input.replace(/\s/g, "").replace(",", "."));
}
function matchNum(input: string, expected: number, tol = 0.001): boolean {
  const v = parseNum(input.trim());
  return !isNaN(v) && Math.abs(v - expected) <= tol;
}
function fmtDec(n: number, d: number): string {
  return n.toFixed(d).replace(".", ",");
}
function fmtMeasure(n: number): string {
  return Number.isInteger(n) ? String(n) : fmtDec(n, 1);
}
function randOneDecimal(minTenths: number, maxTenths: number): number {
  let value = randInt(minTenths, maxTenths);
  while (value % 10 === 0) value = randInt(minTenths, maxTenths);
  return value / 10;
}
function randDecimalValue(): number {
  const decimals = placementRandom() < 0.5 ? 1 : 3;
  const scale = decimals === 1 ? 10 : 1000;
  return randInt(10 * scale, 100 * scale - 1) / scale;
}

// ── CorrectionInput ───────────────────────────────────────────────────────────

function CorrectionInput({
  value, onChange, correct, validated, width = "w-16", variant = "line",
}: {
  value: string; onChange: (v: string) => void; correct: string;
  validated: boolean; width?: string; placeholder?: string; variant?: "line" | "box";
}) {
  const wrong = validated && value.trim().replace(".", ",") !== correct.trim().replace(".", ",");
  const frameCls = variant === "box"
    ? `rounded-md border-2 ${wrong ? "border-amber-500" : "border-[var(--color-accent-alg)]/45"} bg-transparent`
    : `rounded-none border-0 border-b-2 ${wrong ? "border-amber-500" : "border-[var(--color-accent-alg)]/60"} bg-transparent`;
  return (
    <div className={`${width} min-h-9 flex flex-col items-center justify-center ${frameCls} px-1 py-1 text-center font-mono text-sm text-[var(--color-text-primary)]`}>
      {validated ? (
        wrong ? (
          <div className="flex flex-col items-center leading-tight">
            {value.trim() && <span className="text-[10px] text-[var(--color-text-primary)]">{value}</span>}
            <span className="font-bold text-amber-600">{correct}</span>
          </div>
        ) : (
          <span>{value || correct}</span>
        )
      ) : (
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/[^0-9,.]/g, ""))}
          className="h-6 w-full bg-transparent text-center outline-none"
        />
      )}
    </div>
  );
}

function CorrectionInputText({
  value, onChange, correct, validated, width = "w-20",
}: {
  value: string; onChange: (v: string) => void; correct: string;
  validated: boolean; width?: string; placeholder?: string;
}) {
  const norm = (s: string) => s.trim().replace(/\s+/g, "").toLowerCase();
  const wrong = validated && norm(value) !== norm(correct);
  return (
    <div className={`${width} min-h-9 flex flex-col items-center justify-center rounded-none border-0 border-b-2 ${wrong ? "border-amber-500" : "border-[var(--color-accent-alg)]/60"} bg-transparent px-1 py-1 text-center font-mono text-sm text-[var(--color-text-primary)]`}>
      {validated ? (
        wrong ? (
          <div className="flex flex-col items-center leading-tight">
            {value.trim() && <span className="text-[10px] text-[var(--color-text-primary)]">{value}</span>}
            <span className="font-bold text-amber-600">{correct}</span>
          </div>
        ) : (
          <span>{value || correct}</span>
        )
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-6 w-full bg-transparent text-center outline-none"
        />
      )}
    </div>
  );
}

function FracInput({
  numVal, denVal, numCorrect, denCorrect,
  onNumChange, onDenChange, validated,
}: {
  numVal: string; denVal: string;
  numCorrect: string; denCorrect: string;
  onNumChange: (v: string) => void; onDenChange: (v: string) => void;
  validated: boolean;
}) {
  const numWrong = validated && numVal.trim() !== numCorrect;
  const denWrong = validated && denVal.trim() !== denCorrect;

  const cellBase = "flex h-9 w-14 items-center justify-center rounded-md border-2 bg-transparent text-center font-mono text-sm";
  const cell = (val: string, correct: string, wrong: boolean, onChange: (v: string) => void) => {
    if (validated) {
      return (
        <span className={`${cellBase} ${wrong ? "border-amber-500 text-amber-600" : "border-[var(--color-accent-alg)]/45 text-[var(--color-text-primary)]"}`}>
          {wrong ? correct : (val || correct)}
        </span>
      );
    }
    return (
      <span className={`${cellBase} border-[var(--color-accent-alg)]/45 text-[var(--color-text-primary)]`}>
        <input
          type="text"
          value={val}
          onChange={e => onChange(e.target.value.replace(/[^0-9-]/g, ""))}
          className="h-6 w-full bg-transparent text-center font-mono text-sm outline-none"
        />
      </span>
    );
  };

  return (
    <span className="inline-flex w-16 flex-col items-center justify-center align-middle">
      {cell(numVal, numCorrect, numWrong, onNumChange)}
      <span className="my-0.5 h-[2px] w-14 rounded bg-[var(--color-theme)]" />
      {cell(denVal, denCorrect, denWrong, onDenChange)}
    </span>
  );
}

// Fraction display helper
function Frac({ n, d, className = "", bold = true, barClass = "bg-current" }: { n: React.ReactNode; d: React.ReactNode; className?: string; bold?: boolean; barClass?: string }) {
  const weight = bold ? "font-bold" : "font-normal";
  return (
    <span className={`inline-flex flex-col items-center gap-[2px] align-middle ${className}`}>
      <span className={`flex min-h-[1.75rem] items-center justify-center px-0.5 text-sm ${weight} tabular-nums`}>{n}</span>
      <span className={`h-px w-full min-w-[1.5rem] ${barClass}`} />
      <span className={`flex min-h-[1.75rem] items-center justify-center px-0.5 text-sm ${weight} tabular-nums`}>{d}</span>
    </span>
  );
}

// ── Exercise 28: Powers, roots, ×÷ by powers of 10 ──────────────────────────

type Ex28Q =
  | { kind: "cube"; base: number; ans: number }
  | { kind: "sqrt"; sq: number; ans: number }
  | { kind: "mul10"; mult: number; pwr10: number; ans: number }
  | { kind: "div10"; divVal: number; pwr10: number; ans: number };

const EX28_POWERS = [10, 100, 1000, 10000];

function genEx28Q(slot: number): Ex28Q {
  if (slot === 0) {
    const base = randInt(2, 7);
    return { kind: "cube", base, ans: base ** 3 };
  }
  if (slot === 1) {
    const sq = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169][randInt(0, 11)]!;
    return { kind: "sqrt", sq, ans: Math.sqrt(sq) };
  }
  if (slot === 2) {
    const mult = parseFloat((placementRandom() < 0.5 ? randInt(1, 99) * 0.1 : randInt(1, 999) * 0.01).toFixed(2));
    const pwr10 = EX28_POWERS[randInt(0, EX28_POWERS.length - 1)]!;
    return { kind: "mul10", mult, pwr10, ans: parseFloat((mult * pwr10).toFixed(4)) };
  }
  const pwr10 = EX28_POWERS[randInt(0, EX28_POWERS.length - 1)]!;
  const divVal = parseFloat((randInt(1, 999) * (pwr10 === 10 ? 10 : pwr10 === 100 ? 100 : 1000)).toFixed(0));
  return { kind: "div10", divVal, pwr10, ans: parseFloat((divVal / pwr10).toFixed(4)) };
}

export function Exercise28({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(4);
  const questions = useMemo(
    () => Array.from({ length: questionCount }, (_, i) => genEx28Q(i % 4)),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => { if (matchNum(answers[i] ?? "", q.ans, 0.001)) pts++; });
    onValidated(pts, 4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const fmtAns = (n: number) => {
    if (Number.isInteger(n)) return String(n);
    return fmtDec(n, 2);
  };
  const pow10Exp = (n: number) => Math.round(Math.log10(n));
  const exprFor = (q: Ex28Q) => {
    if (q.kind === "cube") return <span>{q.base}<sup>3</sup></span>;
    if (q.kind === "sqrt") return <span>√{q.sq}</span>;
    if (q.kind === "mul10") return <span className="font-mono">{fmtDec(q.mult, 2)} × 10<sup>{pow10Exp(q.pwr10)}</sup></span>;
    return <span className="font-mono">{q.divVal} ÷ 10<sup>{pow10Exp(q.pwr10)}</sup></span>;
  };
  const correctFor = (q: Ex28Q) => (q.kind === "cube" || q.kind === "sqrt" ? String(q.ans) : fmtAns(q.ans));

  const listCls = forPrint ? printQuestionsListClass(columns) : "grid grid-cols-2 gap-x-4 gap-y-3";

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez les résultats.</p>
      <div className={`${listCls} text-sm`}>
        {questions.map((q, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            {exprFor(q)}
            <span className="text-[var(--color-text-secondary)]">=</span>
            <CorrectionInput
              value={answers[i] ?? ""}
              onChange={(v) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a))}
              correct={correctFor(q)}
              validated={validated}
              width="w-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 29: Order of operations ─────────────────────────────────────────

type NumericExpression = { expr: React.ReactNode; text: string; ans: number };

export function Exercise29({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(4);
  const data = useMemo(() => {
    const templates: Array<() => NumericExpression>[] = [
      [
        () => { const a = randInt(2, 12), b = randInt(2, 9), c = randInt(2, 8), d = randInt(1, 10); return { text: `${a} + ${b} × ${c} − ${d}`, expr: <>{a} + {b} × {c} − {d}</>, ans: a + b * c - d }; },
        () => { const a = randInt(2, 10), b = randInt(2, 10), c = randInt(2, 7); return { text: `(${a} + ${b}) × ${c}`, expr: <>({a} + {b}) × {c}</>, ans: (a + b) * c }; },
        () => { const a = randInt(2, 7), b = randInt(2, 5), c = randInt(2, 4); return { text: `${a}² + ${b} × ${c}`, expr: <>{a}<sup>2</sup> + {b} × {c}</>, ans: a * a + b * c }; },
        () => { const a = randInt(8, 20), b = randInt(2, 5), c = randInt(2, 9); return { text: `${a} ÷ ${b} + ${c}`, expr: <>{a} ÷ {b} + {c}</>, ans: a / b + c }; },
        () => { const a = randInt(2, 8), b = randInt(2, 8), c = randInt(1, 9); return { text: `[${a} + ${b}] × ${c}`, expr: <>[{a} + {b}] × {c}</>, ans: (a + b) * c }; },
        () => { const a = randInt(3, 9), b = randInt(2, 8), c = randInt(1, 8); return { text: `${a} × (${b} + ${c})`, expr: <>{a} × ({b} + {c})</>, ans: a * (b + c) }; },
        () => { const r = randInt(3, 10), a = randInt(2, 8), b = randInt(1, 7); return { text: `√${r * r} + ${a} × ${b}`, expr: <>√{r * r} + {a} × {b}</>, ans: r + a * b }; },
        () => { const a = randInt(2, 8), b = randInt(2, 5), c = randInt(2, 9); return { text: `${a} + ${b}³ − ${c}`, expr: <>{a} + {b}<sup>3</sup> − {c}</>, ans: a + b ** 3 - c }; },
        () => { const a = randInt(10, 30), b = randInt(2, 6), c = randInt(2, 8); return { text: `(${a} − ${b}) ÷ ${c}`, expr: <>({a} − {b}) ÷ {c}</>, ans: (a - b) / c }; },
        () => { const a = randInt(2, 7), b = randInt(2, 7), c = randInt(2, 7); return { text: `${a} × ${b} + ${c}`, expr: <>{a} × {b} + {c}</>, ans: a * b + c }; },
      ],
      [
        () => { const a = randInt(2, 12), b = randInt(2, 12), c = randInt(2, 6), d = randInt(1, 9); return { text: `(${a} + ${b}) × ${c} − ${d}`, expr: <>({a} + {b}) × {c} − {d}</>, ans: (a + b) * c - d }; },
        () => { const a = randInt(2, 8), b = randInt(2, 5), c = randInt(2, 8), d = randInt(1, 8); return { text: `${a}² − ${b} × (${c} − ${d})`, expr: <>{a}<sup>2</sup> − {b} × ({c} − {d})</>, ans: a * a - b * (c - d) }; },
        () => { const r = randInt(4, 12), a = randInt(2, 8), b = randInt(2, 6); return { text: `[√${r * r} + ${a}] × ${b}`, expr: <>[√{r * r} + {a}] × {b}</>, ans: (r + a) * b }; },
        () => { const a = randInt(2, 7), b = randInt(2, 6), c = randInt(3, 9), d = randInt(1, 8); return { text: `${a} × [${b} + ${c}] − ${d}`, expr: <>{a} × [{b} + {c}] − {d}</>, ans: a * (b + c) - d }; },
        () => { const a = randInt(3, 8), b = randInt(2, 5), c = randInt(2, 7), d = randInt(2, 6); return { text: `(${a} + ${b})² − ${c} × ${d}`, expr: <>({a} + {b})<sup>2</sup> − {c} × {d}</>, ans: (a + b) ** 2 - c * d }; },
        () => { const a = randInt(20, 60), b = randInt(2, 6), c = randInt(3, 9), d = randInt(1, 6); return { text: `${a} ÷ ${b} + (${c} − ${d})`, expr: <>{a} ÷ {b} + ({c} − {d})</>, ans: a / b + (c - d) }; },
        () => { const a = randInt(2, 8), b = randInt(2, 7), c = randInt(2, 5), d = randInt(1, 9); return { text: `[${a} × ${b}] + ${c}² − ${d}`, expr: <>[{a} × {b}] + {c}<sup>2</sup> − {d}</>, ans: a * b + c ** 2 - d }; },
        () => { const r = randInt(3, 9), a = randInt(2, 6), b = randInt(2, 9), c = randInt(1, 6); return { text: `${a} × (√${r * r} + ${b}) − ${c}`, expr: <>{a} × (√{r * r} + {b}) − {c}</>, ans: a * (r + b) - c }; },
        () => { const a = randInt(3, 9), b = randInt(2, 7), c = randInt(2, 5), d = randInt(1, 6); return { text: `(${a} + ${b}) × (${c} + ${d})`, expr: <>({a} + {b}) × ({c} + {d})</>, ans: (a + b) * (c + d) }; },
        () => { const a = randInt(2, 8), b = randInt(2, 6), c = randInt(2, 8), d = randInt(1, 7); return { text: `${a}³ − [${b} × ${c}] + ${d}`, expr: <>{a}<sup>3</sup> − [{b} × {c}] + {d}</>, ans: a ** 3 - b * c + d }; },
      ],
    ];
    // Motif actuel [0, 1, 1, 1] répété : 1 question facile pour 3 difficiles.
    return Array.from({ length: questionCount }, (_, i) =>
      templates[i % 4 === 0 ? 0 : 1]![randInt(0, 9)]!()
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[]>(() => Array(data.length).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => { if (matchNum(answers[i] ?? "", q.ans)) pts++; });
    onValidated(pts, 4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const listCls = forPrint ? printQuestionsListClass(columns) : "grid grid-cols-2 gap-x-4 gap-y-3";

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez les résultats.</p>
      <div className={`${listCls} text-sm`}>
        {data.map((q, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            {/* Largeur fixe → tous les « = » alignés verticalement */}
            <span className="inline-block w-[18ch] shrink-0 text-right font-mono">{q.expr}</span>
            <span className="text-[var(--color-text-secondary)]">=</span>
            <CorrectionInput
              value={answers[i] ?? ""}
              onChange={(v) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a))}
              correct={Number.isInteger(q.ans) ? String(q.ans) : fmtDec(q.ans, 2)}
              validated={validated}
              width="w-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 30: Relative numbers ─────────────────────────────────────────────

function genEx30Q(opSlot: number): { left: string; op: string; right: string; ans: number } {
  const sign = () => (placementRandom() < 0.5 ? 1 : -1);
  const fmtN = (n: number) => n < 0 ? `(${n})` : `(+${n})`;
  if (opSlot === 0) {
    const a = sign() * randInt(2, 15), b = sign() * randInt(2, 15);
    return { left: fmtN(a), op: "+", right: fmtN(b), ans: a + b };
  }
  if (opSlot === 1) {
    const a = sign() * randInt(2, 15), b = sign() * randInt(2, 15);
    return { left: fmtN(a), op: "−", right: fmtN(b), ans: a - b };
  }
  if (opSlot === 2) {
    const a = sign() * randInt(2, 9), b = sign() * randInt(2, 9);
    return { left: fmtN(a), op: "×", right: fmtN(b), ans: a * b };
  }
  const n = sign() * randInt(2, 9) * randInt(2, 9), d = sign() * randInt(2, 9);
  return { left: fmtN(n), op: "÷", right: fmtN(d), ans: n / d };
}

export function Exercise30({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(8);
  const data = useMemo(() => {
    // Motif actuel répété : 2 additions, 2 soustractions, 2 multiplications, 2 divisions
    return Array.from({ length: questionCount }, (_, i) => genEx30Q(Math.floor((i % 8) / 2)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[]>(() => Array(data.length).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => {
      if (matchNum(answers[i] ?? "", q.ans)) pts += 0.5;
    });
    onValidated(pts, 4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const listCls = forPrint ? printQuestionsListClass(columns) : "grid grid-cols-2 gap-x-4 gap-y-3";

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez les résultats.</p>
      <div className={`${listCls} text-sm`}>
        {data.map((q, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            {/* Largeurs fixes → tous les « = » alignés verticalement */}
            <span className="inline-block w-12 shrink-0 text-center font-mono">{q.left}</span>
            <span className="inline-block w-4 shrink-0 text-center font-mono text-[var(--color-text-secondary)]">{q.op}</span>
            <span className="inline-block w-12 shrink-0 text-center font-mono">{q.right}</span>
            <span className="text-[var(--color-text-secondary)]">=</span>
            <CorrectionInput
              value={answers[i] ?? ""}
              onChange={(v) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a))}
              correct={Number.isInteger(q.ans) ? String(q.ans) : fmtDec(q.ans, 2)}
              validated={validated}
              width="w-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 31: Fractions ────────────────────────────────────────────────────

function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
function simplify(n: number, d: number): [number, number] {
  const g = gcd(Math.abs(n), Math.abs(d));
  return [n / g, d / g];
}

type Ex31Frac = { n: number; d: number };
type Ex31Q =
  | { kind: "simplify1"; fullN: number; fullD: number; n: number; d: number; ask: "num" | "den" }
  | { kind: "simplify2"; fullN: number; fullD: number; n: number; d: number }
  | { kind: "op"; a: Ex31Frac; b: Ex31Frac; negA: boolean; negB: boolean; op: "+" | "−" | "×" | "÷"; ans: string };

function pickReducedFrac(): Ex31Frac {
  for (;;) {
    const n = randInt(2, 9);
    const d = randInt(3, 12);
    if (n !== d && gcd(n, d) === 1) return { n, d };
  }
}
function fracAnsStr(n: number, d: number): string {
  const [rawN, rawD] = simplify(n, d);
  const sn = rawD < 0 ? -rawN : rawN;
  const sd = Math.abs(rawD);
  return sd === 1 ? String(sn) : `${sn}/${sd}`;
}

// Motif actuel (8 questions) : simplification ×2, +, −, ×, ÷, ± signée, ×÷ signée.
function genEx31Q(slot: number): Ex31Q {
  if (slot === 0) {
    const base = pickReducedFrac();
    const factor = randInt(2, 6);
    const ask = placementRandom() < 0.5 ? "num" as const : "den" as const;
    return { kind: "simplify1", fullN: base.n * factor, fullD: base.d * factor, n: base.n, d: base.d, ask };
  }
  if (slot === 1) {
    const base = pickReducedFrac();
    const factor = randInt(2, 6);
    return { kind: "simplify2", fullN: base.n * factor, fullD: base.d * factor, n: base.n, d: base.d };
  }
  const a = pickReducedFrac();
  const b = pickReducedFrac();
  if (slot === 2) return { kind: "op", a, b, negA: false, negB: false, op: "+", ans: fracAnsStr(a.n * b.d + b.n * a.d, a.d * b.d) };
  if (slot === 3) return { kind: "op", a, b, negA: false, negB: false, op: "−", ans: fracAnsStr(a.n * b.d - b.n * a.d, a.d * b.d) };
  if (slot === 4) return { kind: "op", a, b, negA: false, negB: false, op: "×", ans: fracAnsStr(a.n * b.n, a.d * b.d) };
  if (slot === 5) return { kind: "op", a, b, negA: false, negB: false, op: "÷", ans: fracAnsStr(a.n * b.d, a.d * b.n) };
  const op = slot === 6
    ? (placementRandom() < 0.5 ? "+" as const : "−" as const)
    : (placementRandom() < 0.5 ? "×" as const : "÷" as const);
  let negA = placementRandom() < 0.5;
  const negB = placementRandom() < 0.5;
  if (!negA && !negB) negA = true;
  const aN = negA ? -a.n : a.n;
  const bN = negB ? -b.n : b.n;
  let ans: string;
  if (op === "+") ans = fracAnsStr(aN * b.d + bN * a.d, a.d * b.d);
  else if (op === "−") ans = fracAnsStr(aN * b.d - bN * a.d, a.d * b.d);
  else if (op === "×") ans = fracAnsStr(aN * bN, a.d * b.d);
  else ans = fracAnsStr(aN * b.d, a.d * bN);
  return { kind: "op", a, b, negA, negB, op, ans };
}

export function Exercise31({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(8);
  const questions = useMemo(
    () => Array.from({ length: questionCount }, (_, i) => genEx31Q(i % 8)),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [exerciseKey, questionCount]);

  // numAns[i] = numérateur (ou case unique) ; denAns[i] = dénominateur
  const [numAns, setNumAns] = useState<string[]>(() => Array(questions.length).fill(""));
  const [denAns, setDenAns] = useState<string[]>(() => Array(questions.length).fill(""));
  const setNA = (i: number) => (v: string) => setNumAns((prev) => prev.map((a, j) => j === i ? v : a));
  const setDA = (i: number) => (v: string) => setDenAns((prev) => prev.map((a, j) => j === i ? v : a));

  const splitAns = (ans: string): [string, string] => {
    if (ans.includes("/")) {
      const [n, d] = ans.split("/");
      return [n ?? "", d ?? ""];
    }
    return [ans, "1"];
  };

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    const norm = (s: string) => s.trim().replace(/\s/g, "");
    questions.forEach((q, i) => {
      const nv = norm(numAns[i] ?? "");
      const dv = norm(denAns[i] ?? "");
      let ok = false;
      if (q.kind === "simplify1") ok = nv === String(q.ask === "num" ? q.n : q.d);
      else if (q.kind === "simplify2") ok = nv === String(q.n) && dv === String(q.d);
      else { const [en, ed] = splitAns(q.ans); ok = nv === en && dv === ed; }
      if (ok) pts += 0.5;
    });
    onValidated(pts, 4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const smallBox = (value: string, onChange: (v: string) => void, correct: string) => (
    <CorrectionInput
      value={value}
      onChange={(v) => onChange(v.replace(/[^0-9/-]/g, ""))}
      correct={correct}
      validated={validated}
      width="w-14"
      variant="box"
    />
  );
  const negFrac = (neg: boolean, n: number, d: number) =>
    neg ? <Frac n={<>−{n}</>} d={d} /> : <Frac n={n} d={d} />;

  const listCls = forPrint ? printQuestionsListClass(columns) : "grid grid-cols-2 gap-x-4 gap-y-3";
  const THEME_BAR = "bg-[var(--color-theme)]";

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez et simplifiez les fractions.</p>

      <div className={listCls}>
        {questions.map((q, i) => {
          const label = <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>;
          if (q.kind === "simplify1") return (
            <div key={i} className="flex items-center gap-2 text-sm">
              {label}
              <Frac n={q.fullN} d={q.fullD} />
              <span>=</span>
              <Frac
                barClass={THEME_BAR}
                n={q.ask === "num" ? smallBox(numAns[i] ?? "", setNA(i), String(q.n)) : q.n}
                d={q.ask === "den" ? smallBox(numAns[i] ?? "", setNA(i), String(q.d)) : q.d}
              />
            </div>
          );
          if (q.kind === "simplify2") return (
            <div key={i} className="flex items-center gap-2 text-sm">
              {label}
              <Frac n={q.fullN} d={q.fullD} />
              <span>=</span>
              <Frac
                barClass={THEME_BAR}
                n={smallBox(numAns[i] ?? "", setNA(i), String(q.n))}
                d={smallBox(denAns[i] ?? "", setDA(i), String(q.d))}
              />
            </div>
          );
          return (
            <div key={i} className="flex items-center gap-2">
              {label}
              <div className="flex justify-center">{negFrac(q.negA, q.a.n, q.a.d)}</div>
              <span className="text-base font-semibold text-[var(--color-text-primary)]">{q.op}</span>
              <div className="flex justify-center">{negFrac(q.negB, q.b.n, q.b.d)}</div>
              <span className="text-base font-semibold text-[var(--color-text-secondary)]">=</span>
              <FracInput
                numVal={numAns[i] ?? ""} denVal={denAns[i] ?? ""}
                numCorrect={splitAns(q.ans)[0]} denCorrect={splitAns(q.ans)[1]}
                onNumChange={setNA(i)} onDenChange={setDA(i)}
                validated={validated}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Exercise 32: Percentage + rule of 3 ──────────────────────────────────────

const EX32_FRUITS = ["pommes", "bananes", "oranges", "poires", "fraises", "carottes", "tomates", "citrons", "raisins", "prunes"];

type Ex32Q =
  | { kind: "pct"; pct: number; base: number; ans: number }
  | { kind: "prop"; knownQty: number; targetQty: number; fruitName: string; knownPrice: number; ans: number };

function genEx32Q(slot: number): Ex32Q {
  if (slot === 0) {
    // pourcentage d'un nombre
    const pct = [10, 20, 25, 30, 50, 75][randInt(0, 5)]!;
    const base = randInt(2, 20) * 10;
    return { kind: "pct", pct, base, ans: (pct * base) / 100 };
  }
  // prix proportionnel au kg (règle de trois)
  const knownQty = randInt(3, 9);
  let targetQty = randInt(3, 9);
  while (targetQty === knownQty) targetQty = randInt(3, 9);
  const fruitName = EX32_FRUITS[randInt(0, EX32_FRUITS.length - 1)]!;
  const unitPrice = 0.5 + randInt(3, 15) * 0.1;
  const knownPrice = parseFloat((knownQty * unitPrice).toFixed(2));
  const ans = parseFloat((targetQty * unitPrice).toFixed(2));
  return { kind: "prop", knownQty, targetQty, fruitName, knownPrice, ans };
}

export function Exercise32({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const questions = useMemo(
    () => Array.from({ length: questionCount }, (_, i) => genEx32Q(i % 2)),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));
  const setAns = (i: number) => (v: string) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => { if (matchNum(answers[i] ?? "", q.ans, 0.01)) pts++; });
    onValidated(pts, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const listCls = forPrint ? printQuestionsListClass(columns) : "grid grid-cols-2 gap-x-4 gap-y-3";

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez les résultats.</p>
      <div className={`${listCls} text-sm`}>
        {questions.map((q, i) => {
          const label = <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>;
          if (q.kind === "pct") return (
            <div key={i} className="flex items-center gap-2">
              {label}
              <span>{q.pct}% de {q.base}</span>
              <span className="text-[var(--color-text-secondary)]">=</span>
              <CorrectionInput value={answers[i] ?? ""} onChange={setAns(i)} correct={Number.isInteger(q.ans) ? String(q.ans) : fmtDec(q.ans, 2)} validated={validated} width="w-20" />
            </div>
          );
          return (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-start gap-2">
                {label}
                <div className="min-w-0 space-y-1">
                  <div>{q.knownQty} kg de {q.fruitName} → {fmtDec(q.knownPrice, q.knownPrice % 1 === 0 ? 0 : 1)} CHF</div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span>{q.targetQty} kg de {q.fruitName}</span>
                    <span className="text-[var(--color-text-secondary)]">=</span>
                    <CorrectionInput value={answers[i] ?? ""} onChange={setAns(i)} correct={fmtDec(q.ans, 2)} validated={validated} width="w-24" />
                    <span className="text-[var(--color-text-secondary)]">CHF</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Exercise 33: Algebraic simplification ────────────────────────────────────

export function Exercise33({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(4);
  const data = useMemo(() => {
    const clean = (s: string) => s.replace(/\+ -/g, "− ").replace(/- /g, "− ");
    const lin1 = (x: number, c = 0) => clean(`${x}x ${c >= 0 ? "+" : "−"} ${Math.abs(c)}`);
    const lin2 = (x: number, y: number, c = 0) => clean(`${x}x ${y >= 0 ? "+" : "−"} ${Math.abs(y)}y ${c >= 0 ? "+" : "−"} ${Math.abs(c)}`);
    const lin3 = (x: number, y: number, z: number, c = 0) => clean(`${x}x ${y >= 0 ? "+" : "−"} ${Math.abs(y)}y ${z >= 0 ? "+" : "−"} ${Math.abs(z)}z ${c >= 0 ? "+" : "−"} ${Math.abs(c)}`);
    const pick = <T,>(arr: T[]) => arr[randInt(0, arr.length - 1)]!;

    const oneUnknown: Array<() => { expr: string; corr: string }> = [
      () => { const a=randInt(2,9), b=randInt(2,9), c=randInt(1,9); return { expr:`${a}x + ${b}x + ${c}`, corr:lin1(a+b,c) }; },
      () => { const a=randInt(2,9), b=randInt(1,8), c=randInt(2,9); return { expr:`${a}x − ${b} + ${c}x`, corr:lin1(a+c,-b) }; },
      () => { const a=randInt(2,7), b=randInt(1,9); return { expr:`${a}(x + ${b})`, corr:lin1(a,a*b) }; },
      () => { const a=randInt(2,7), b=randInt(1,9); return { expr:`${a}(x − ${b})`, corr:lin1(a,-a*b) }; },
      () => { const a=randInt(2,7), b=randInt(2,8), c=randInt(1,9); return { expr:`${a}(${b}x + ${c})`, corr:lin1(a*b,a*c) }; },
      () => { const a=randInt(2,7), b=randInt(1,9), c=randInt(1,8); return { expr:`${a}x + ${b} − ${c}`, corr:lin1(a,b-c) }; },
      () => { const a=randInt(2,8), b=randInt(2,8), c=randInt(1,9); return { expr:`${a}x − (${b}x + ${c})`, corr:lin1(a-b,-c) }; },
      () => { const a=randInt(2,6), b=randInt(2,8), c=randInt(1,9); return { expr:`${a}(${b}x − ${c})`, corr:lin1(a*b,-a*c) }; },
      () => { const a=randInt(2,8), b=randInt(1,9), c=randInt(2,8); return { expr:`${a}x + ${b} + ${c}x`, corr:lin1(a+c,b) }; },
      () => { const a=randInt(2,8), b=randInt(1,9), c=randInt(2,8); return { expr:`${a}x − ${b} − ${c}x`, corr:lin1(a-c,-b) }; },
      () => { const a=randInt(2,6), b=randInt(2,6), c=randInt(1,8); return { expr:`${a}(x + ${b}) − ${c}x`, corr:lin1(a-c,a*b) }; },
      () => { const a=randInt(2,6), b=randInt(2,6), c=randInt(1,8); return { expr:`${a}x + ${b}(x − ${c})`, corr:lin1(a+b,-b*c) }; },
      () => { const a=randInt(2,9), b=randInt(2,9); return { expr:`${a}x + x − ${b}`, corr:lin1(a+1,-b) }; },
      () => { const a=randInt(2,9), b=randInt(2,9); return { expr:`${a}x − x + ${b}`, corr:lin1(a-1,b) }; },
      () => { const a=randInt(2,6), b=randInt(1,8), c=randInt(1,9); return { expr:`${a}(x + ${b}) + ${c}`, corr:lin1(a,a*b+c) }; },
    ];
    const twoUnknown: Array<() => { expr: string; corr: string }> = [
      () => { const a=randInt(2,8), b=randInt(2,8), c=randInt(2,8); return { expr:`${a}x + ${b}y + ${c}x`, corr:lin2(a+c,b) }; },
      () => { const a=randInt(2,7), b=randInt(2,7), c=randInt(1,8); return { expr:`${a}(x + y) + ${b}x − ${c}`, corr:lin2(a+b,a,-c) }; },
      () => { const a=randInt(2,7), b=randInt(1,8), c=randInt(2,7); return { expr:`${a}x − ${b}y + ${c}y`, corr:lin2(a,c-b) }; },
      () => { const a=randInt(2,6), b=randInt(2,6), c=randInt(1,8); return { expr:`${a}(${b}x + y) − ${c}y`, corr:lin2(a*b,a-c) }; },
      () => { const a=randInt(2,8), b=randInt(2,8), c=randInt(1,9); return { expr:`${a}x + ${b}y + ${c}`, corr:lin2(a,b,c) }; },
      () => { const a=randInt(2,6), b=randInt(2,6), c=randInt(1,8); return { expr:`${a}(x − y) + ${b}y + ${c}`, corr:lin2(a,b-a,c) }; },
      () => { const a=randInt(2,8), b=randInt(2,8), c=randInt(1,9); return { expr:`${a}x − (${b}y + ${c})`, corr:lin2(a,-b,-c) }; },
      () => { const a=randInt(2,6), b=randInt(2,6); return { expr:`${a}(x + y) + ${b}(x − y)`, corr:lin2(a+b,a-b) }; },
      () => { const a=randInt(2,8), b=randInt(2,8); return { expr:`x + ${a}y + ${b}x`, corr:lin2(b+1,a) }; },
      () => { const a=randInt(2,7), b=randInt(2,7), c=randInt(2,7); return { expr:`${a}(${b}x − ${c}y)`, corr:lin2(a*b,-a*c) }; },
      () => { const a=randInt(2,7), b=randInt(1,8); return { expr:`${a}x + y − ${b}x`, corr:lin2(a-b,1) }; },
      () => { const a=randInt(2,7), b=randInt(1,8); return { expr:`${a}y + x − ${b}y`, corr:lin2(1,a-b) }; },
      () => { const a=randInt(2,6), b=randInt(2,6), c=randInt(1,9); return { expr:`${a}(x + ${c}) + ${b}y`, corr:lin2(a,b,a*c) }; },
      () => { const a=randInt(2,6), b=randInt(2,6), c=randInt(1,9); return { expr:`${a}x + ${b}(y − ${c})`, corr:lin2(a,b,-b*c) }; },
      () => { const a=randInt(2,6), b=randInt(2,6); return { expr:`${a}(x + y) − ${b}(x + y)`, corr:lin2(a-b,a-b) }; },
    ];
    const threeUnknown: Array<() => { expr: string; corr: string }> = [
      () => { const a=randInt(2,7), b=randInt(2,7), c=randInt(2,7); return { expr:`${a}x + ${b}y + ${c}z`, corr:lin3(a,b,c) }; },
      () => { const a=randInt(2,7), b=randInt(2,7), c=randInt(2,7); return { expr:`${a}(x + y + z) − ${b}x + ${c}`, corr:lin3(a-b,a,a,c) }; },
      () => { const a=randInt(2,6), b=randInt(2,6); return { expr:`${a}(x − y) + ${b}z`, corr:lin3(a,-a,b) }; },
      () => { const a=randInt(2,6), b=randInt(2,6), c=randInt(2,6); return { expr:`${a}x + ${b}(y − z) + ${c}z`, corr:lin3(a,b,c-b) }; },
      () => { const a=randInt(2,6), b=randInt(1,8); return { expr:`${a}(x + y) + z − ${b}`, corr:lin3(a,a,1,-b) }; },
      () => { const a=randInt(2,6), b=randInt(2,6), c=randInt(2,6); return { expr:`${a}(x + z) − ${b}y + ${c}z`, corr:lin3(a,-b,a+c) }; },
      () => { const a=randInt(2,8), b=randInt(2,8); return { expr:`x + ${a}y + ${b}z − y`, corr:lin3(1,a-1,b) }; },
      () => { const a=randInt(2,8), b=randInt(2,8); return { expr:`${a}x − z + ${b}z + y`, corr:lin3(a,1,b-1) }; },
      () => { const a=randInt(2,6), b=randInt(2,6); return { expr:`${a}(x + y − z) + ${b}z`, corr:lin3(a,a,b-a) }; },
      () => { const a=randInt(2,6), b=randInt(1,9); return { expr:`${a}x + ${a}y + ${a}z + ${b}`, corr:lin3(a,a,a,b) }; },
      () => { const a=randInt(2,6), b=randInt(2,6), c=randInt(2,6); return { expr:`${a}(x − y) + ${b}(y − z) + ${c}z`, corr:lin3(a,b-a,c-b) }; },
      () => { const a=randInt(2,6), b=randInt(2,6); return { expr:`${a}(x + z) − ${b}(y + z)`, corr:lin3(a,-b,a-b) }; },
      () => { const a=randInt(2,6), b=randInt(2,6), c=randInt(1,8); return { expr:`${a}x + ${b}y − (${c}z + y)`, corr:lin3(a,b-1,-c) }; },
      () => { const a=randInt(2,7), b=randInt(1,8); return { expr:`${a}(x + y + z) − ${b}z`, corr:lin3(a,a,a-b) }; },
      () => { const a=randInt(2,7), b=randInt(2,7), c=randInt(1,9); return { expr:`${a}x + ${b}y + z − ${c}`, corr:lin3(a,b,1,-c) }; },
    ];
    const identities: Array<() => { expr: string; corr: string }> = [
      () => { const a=randInt(2,9); return { expr:`(x + ${a})²`, corr:`x² + ${2*a}x + ${a*a}` }; },
      () => { const a=randInt(2,9); return { expr:`(x − ${a})²`, corr:`x² − ${2*a}x + ${a*a}` }; },
      () => { const a=randInt(2,9); return { expr:`(x + ${a})(x − ${a})`, corr:`x² − ${a*a}` }; },
      () => { const a=randInt(2,6), b=randInt(2,9); return { expr:`(${a}x + ${b})²`, corr:`${a*a}x² + ${2*a*b}x + ${b*b}` }; },
      () => { const a=randInt(2,6), b=randInt(2,9); return { expr:`(${a}x − ${b})²`, corr:`${a*a}x² − ${2*a*b}x + ${b*b}` }; },
    ];
    // Motif actuel répété : 1 inconnue, 2 inconnues, 3 inconnues, identité remarquable.
    const categories = [oneUnknown, twoUnknown, threeUnknown, identities];
    return Array.from({ length: questionCount }, (_, i) => pick(categories[i % 4]!)());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[]>(() => Array(data.length).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    const norm = (s: string) => s.trim().replace(/\s+/g, "").toLowerCase();
    let pts = 0;
    data.forEach((q, i) => { if (norm(answers[i] ?? "") === norm(q.corr)) pts += 0.5; });
    onValidated(pts, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Simplifiez les expressions.</p>
      {forPrint && columns > 1 ? (
        <div className={printQuestionsListClass(columns)}>
          {data.map((q, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="font-mono">{q.expr}</span>
              <span className="text-[var(--color-text-secondary)]">=</span>
              <CorrectionInputText
                value={answers[i] ?? ""}
                onChange={(v) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a))}
                correct={q.corr}
                validated={validated}
                width="min-w-0 flex-1"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid w-full items-center gap-x-2 gap-y-3 text-sm" style={{gridTemplateColumns:"1.5rem minmax(0, max-content) 1rem minmax(0, 1fr)"}}>
          {data.map((q, i) => (
            <React.Fragment key={i}>
              <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="min-w-0 font-mono">{q.expr}</span>
              <span className="text-center text-[var(--color-text-secondary)]">=</span>
              <CorrectionInputText
                value={answers[i] ?? ""}
                onChange={(v) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a))}
                correct={q.corr}
                validated={validated}
                width="w-full"
              />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Exercise 34: Evaluate expressions with variables ─────────────────────────

export function Exercise34({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const data = useMemo(() => {
    const letters = shuffle(["a", "b", "c", "x", "y", "z", "m", "n"]).slice(0, 3);
    const nums = shuffle([2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 3);
    const values = Object.fromEntries(letters.map((letter, i) => [letter, nums[i]!])) as Record<string, number>;
    const [l1, l2, l3] = letters as [string, string, string];
    const v1 = values[l1]!, v2 = values[l2]!, v3 = values[l3]!;
    const easy: Array<() => NumericExpression> = Array.from({ length: 20 }, () => () => {
      const k1 = randInt(2, 6), k2 = randInt(2, 9), root = randInt(2, 9);
      const variants = [
        { expr: <>{k1}{l1} + {l2} + {k2}</>, text: `${k1}${l1} + ${l2} + ${k2}`, ans: k1 * v1 + v2 + k2 },
        { expr: <>{l1}<sup>2</sup> + {k1}{l2} − {k2}</>, text: `${l1}² + ${k1}${l2} − ${k2}`, ans: v1 ** 2 + k1 * v2 - k2 },
        { expr: <>√{root * root} + {l1} × {l2}</>, text: `√${root * root} + ${l1} × ${l2}`, ans: root + v1 * v2 },
        { expr: <>{k1}({l1} + {l2}) − {k2}</>, text: `${k1}(${l1} + ${l2}) − ${k2}`, ans: k1 * (v1 + v2) - k2 },
      ];
      return variants[randInt(0, variants.length - 1)]!;
    });
    const hard: Array<() => NumericExpression> = Array.from({ length: 20 }, () => () => {
      const k1 = randInt(2, 5), k2 = randInt(2, 6), k3 = randInt(2, 9), root = randInt(3, 10);
      const variants = [
        { expr: <>{k1}{l1}<sup>2</sup> + {k2}{l2} − {l3} + {k3}</>, text: `${k1}${l1}² + ${k2}${l2} − ${l3} + ${k3}`, ans: k1 * v1 ** 2 + k2 * v2 - v3 + k3 },
        { expr: <>({l1} + {k1})({l2} − {k2}) + {l3}</>, text: `(${l1} + ${k1})(${l2} − ${k2}) + ${l3}`, ans: (v1 + k1) * (v2 - k2) + v3 },
        { expr: <>√{root * root} × {l1} + {k1}{l2} − {k2}</>, text: `√${root * root} × ${l1} + ${k1}${l2} − ${k2}`, ans: root * v1 + k1 * v2 - k2 },
        { expr: <>[{k1}{l1} + {l2}<sup>2</sup>] − ({l3} + {k3})</>, text: `[${k1}${l1} + ${l2}²] − (${l3} + ${k3})`, ans: k1 * v1 + v2 ** 2 - (v3 + k3) },
      ];
      return variants[randInt(0, variants.length - 1)]!;
    });
    // Motif actuel répété : alternance facile / difficile.
    const questions = Array.from({ length: questionCount }, (_, i) =>
      (i % 2 === 0 ? easy : hard)[randInt(0, 19)]!()
    );
    return { assignments: letters.map((letter) => ({ letter, value: values[letter]! })), questions };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[]>(() => Array(data.questions.length).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.questions.forEach((q, i) => { if (matchNum(answers[i] ?? "", q.ans)) pts++; });
    onValidated(pts, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const listCls = forPrint ? printQuestionsListClass(columns, "space-y-3") : "space-y-3";

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">
        Calculez les résultats.
        <br />
        {data.assignments.map((item, i) => (
          <React.Fragment key={item.letter}>
            {i > 0 ? ", " : ""}
            <strong className="text-[var(--color-accent-alg)]">{item.letter}</strong>
            <span> = </span>
            <strong className="text-[var(--color-accent-alg)]">{item.value}</strong>
          </React.Fragment>
        ))}
      </p>
      <div className={listCls}>
        {data.questions.map((q, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            {/* Largeur fixe → tous les « = » alignés verticalement */}
            <span className="inline-block w-[19ch] shrink-0 text-right font-mono">{q.expr}</span>
            <span className="text-[var(--color-text-secondary)]">=</span>
            <CorrectionInput
              value={answers[i] ?? ""}
              onChange={(v) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a))}
              correct={String(q.ans)}
              validated={validated}
              width="min-w-0 flex-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 35: Solve equations ──────────────────────────────────────────────

type Ex35Q = { left: React.ReactNode; right: React.ReactNode; x: number };

function genEx35Easy(): Ex35Q {
  const fmtSigned = (n: number) => n < 0 ? `− ${Math.abs(n)}` : `+ ${n}`;
  const x = randInt(-9, 9) || 4;
  const a = randInt(2, 8), b = randInt(1, 12);
  const variants = [
    { left: `${a}x ${fmtSigned(b)}`, right: String(a * x + b), x },
    { left: `${a}(x ${fmtSigned(b)})`, right: String(a * (x + b)), x },
    { left: `${a}x ${fmtSigned(-b)}`, right: String(a * x - b), x },
    { left: `${a}(x − ${b}) + ${randInt(1, 8)}`, right: "", x },
  ];
  const picked = variants[randInt(0, variants.length - 1)]!;
  if (picked.right === "") {
    const c = randInt(1, 8);
    return { left: `${a}(x − ${b}) + ${c}`, right: String(a * (x - b) + c), x };
  }
  return picked;
}

function genEx35Hard(): Ex35Q {
  const x = randInt(-8, 8) || -3;
  const d = randInt(2, 6);
  const a = randInt(2, 8), b = randInt(1, 12), c = randInt(1, 9);
  const numerator = d * (c - b) - a * x;
  const variants: Ex35Q[] = [
    { left: <><Frac n={`${a}x + ${numerator}`} d={d} bold={false} /> + {b}</>, right: String(c), x },
    { left: <>{a}x + <Frac n={b} d={d} bold={false} /></>, right: <><Frac n={a * x * d + b} d={d} bold={false} /></>, x },
    { left: <><Frac n={`${a}x − ${b}`} d={d} bold={false} /> − {c}</>, right: <><Frac n={a * x - b - c * d} d={d} bold={false} /></>, x },
  ];
  return variants[randInt(0, variants.length - 1)]!;
}

export function Exercise35({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const questions = useMemo(
    // Motif actuel répété : alternance facile / difficile.
    () => Array.from({ length: questionCount }, (_, i) => (i % 2 === 0 ? genEx35Easy() : genEx35Hard())),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => { if (matchNum(answers[i] ?? "", q.x)) pts++; });
    onValidated(pts, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  // Lignes de développement « ___ = ___ » en couleur thème
  const workLine = (key: string) => (
    <div key={key} className="flex w-full items-center gap-2">
      <span className="inline-block min-w-[6rem] flex-1 border-b-2 border-[var(--color-theme)]" />
      <span className="text-[var(--color-text-secondary)]">=</span>
      <span className="inline-block min-w-[6rem] flex-1 border-b-2 border-[var(--color-theme)]" />
    </div>
  );

  const listCls = forPrint ? printQuestionsListClass(columns) : "grid grid-cols-2 gap-x-6 gap-y-4";

  return (
    <div className="space-y-3">
      <p className="text-xs text-[var(--color-text-secondary)]">Trouver la valeur de x.</p>
      <div className={`${listCls} text-sm`}>
        {questions.map((q, i) => (
          <div key={i} className="flex flex-col items-stretch gap-2">
            <div className="flex items-center gap-2">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="font-mono">{q.left}</span>
              <span className="text-[var(--color-text-secondary)]">=</span>
              <span className="font-mono">{q.right}</span>
            </div>
            {[0, 1, 2].map(w => workLine(`q${i}-w${w}`))}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[var(--color-text-primary)]">x</span>
              <span className="text-[var(--color-text-secondary)]">=</span>
              <CorrectionInput
                value={answers[i] ?? ""}
                onChange={(v) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a))}
                correct={String(q.x)}
                validated={validated}
                width="w-20"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 36: Unit conversions (area, volume, capacity, mass) ──────────────

type UnitGroup = { units: string[]; factors: number[] };
const UNIT_GROUPS: Record<string, UnitGroup> = {
  area: {
    units: ["mm²", "cm²", "dm²", "m²"],
    factors: [1, 100, 10000, 1000000],
  },
  volume: {
    units: ["mm³", "cm³", "dm³", "m³"],
    factors: [1, 1000, 1000000, 1000000000],
  },
  capacity: {
    units: ["ml", "cl", "dl", "l"],
    factors: [1, 10, 100, 1000],
  },
  mass: {
    units: ["mg", "g", "kg", "t"],
    factors: [1, 1000, 1000000, 1000000000],
  },
};

function genConversion(group: UnitGroup): { value: number; from: string; to: string; ans: number } {
  const n = group.units.length;
  let fi: number, ti: number;
  do {
    fi = randInt(0, n - 1);
    ti = randInt(0, n - 1);
  } while (fi === ti);
  const factor = group.factors[fi]! / group.factors[ti]!;
  const value = randDecimalValue();
  return { value, from: group.units[fi]!, to: group.units[ti]!, ans: value * factor };
}

export function Exercise36({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(4);
  const questions = useMemo(() => {
    // Motif actuel répété : aire, volume, capacité, masse.
    const groups = [UNIT_GROUPS.area!, UNIT_GROUPS.volume!, UNIT_GROUPS.capacity!, UNIT_GROUPS.mass!];
    return Array.from({ length: questionCount }, (_, i) => genConversion(groups[i % 4]!));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      if (matchNum(answers[i] ?? "", q.ans, q.ans * 0.001)) pts++;
    });
    onValidated(pts, 4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const fmtV = (n: number) => {
    if (Number.isInteger(n)) return String(n);
    const absN = Math.abs(n);
    if (absN === 0) return "0";
    const dp = absN >= 1 ? 3 : Math.max(3, 2 - Math.floor(Math.log10(absN)));
    return fmtDec(n, Math.min(dp, 10)).replace(/,?0+$/, "");
  };

  const listCls = forPrint ? printQuestionsListClass(columns) : "grid grid-cols-2 gap-x-4 gap-y-3";

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Transformez dans l&apos;unité indiquée.</p>
      <div className={`${listCls} text-sm`}>
        {questions.map((q, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            {/* Largeur fixe → tous les « = » alignés verticalement */}
            <span className="inline-block w-[11ch] shrink-0 text-right font-mono">{fmtV(q.value)} {q.from}</span>
            <span className="text-[var(--color-text-secondary)]">=</span>
            <CorrectionInput
              value={answers[i] ?? ""}
              onChange={(v) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a))}
              correct={fmtV(q.ans)}
              validated={validated}
              width="w-24"
            />
            <span className="text-[var(--color-text-secondary)]">{q.to}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 37: Trapezoid ────────────────────────────────────────────────────

export function Exercise37({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const a = randInt(4, 10); // top base
    const b = a + randInt(2, 6); // bottom base (larger)
    const h = randInt(3, 8);
    const leg = randOneDecimal(30, 80); // lateral side (isosceles: both equal)
    const perimeter = a + b + 2 * leg;
    const area = ((a + b) * h) / 2;
    return { a, b, h, leg, perimeter, area };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ansP, setAnsP] = useState("");
  const [ansA, setAnsA] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchNum(ansP, data.perimeter)) pts++;
    if (matchNum(ansA, data.area, 0.01)) pts++;
    onValidated(pts, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  // Fixed visual isosceles trapezoid — shape identical every refresh
  const svgW = 360, svgH = 145;
  const TLx = 92, TLy = 32, TRx = 202, TRy = 32; // top base = 110px
  const BLx = 54, BLy = 120, BRx = 244, BRy = 120; // bottom base = 190px
  const bkX = 270, tickLen = 5;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le périmètre et l&apos;aire.</p>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} width={svgW} height={svgH} className="block mx-auto h-auto w-full max-w-[440px] overflow-visible">
        {/* Shape */}
        <polygon points={`${TLx},${TLy} ${TRx},${TRy} ${BRx},${BRy} ${BLx},${BLy}`}
          fill="var(--color-accent-alg)" fillOpacity={0.15} stroke="var(--color-accent-alg)" strokeWidth="2" />
        {/* Top base label */}
        <text x={(TLx + TRx) / 2} y={TLy - 7} textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">a = {data.a} cm</text>
        {/* Bottom base label */}
        <text x={(BLx + BRx) / 2} y={BLy + 14} textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">b = {data.b} cm</text>
        {/* Left side label */}
        <text x={(BLx + TLx) / 2 - 8} y={(BLy + TLy) / 2} textAnchor="end" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">{fmtMeasure(data.leg)} cm</text>
        {/* Dashed reference lines to bracket */}
        <line x1={BRx} y1={BRy} x2={bkX - 2} y2={BRy} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
        <line x1={TRx} y1={TRy} x2={bkX - 2} y2={TRy} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
        {/* Height bracket */}
        <line x1={bkX} y1={TRy} x2={bkX} y2={BRy} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <line x1={bkX - tickLen} y1={TRy} x2={bkX + tickLen} y2={TRy} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <line x1={bkX - tickLen} y1={BRy} x2={bkX + tickLen} y2={BRy} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <text x={bkX + tickLen + 4} y={(TRy + BRy) / 2} textAnchor="start" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">h = {data.h} cm</text>
      </svg>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <span className="shrink-0 text-sm text-[var(--color-text-secondary)]">Périmètre =</span>
          <CorrectionInput value={ansP} onChange={setAnsP} correct={fmtMeasure(data.perimeter)} validated={validated} />
          <span className="text-sm text-[var(--color-text-secondary)]">cm</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="shrink-0 text-sm text-[var(--color-text-secondary)]">Aire =</span>
          <CorrectionInput value={ansA} onChange={setAnsA}
            correct={Number.isInteger(data.area) ? String(data.area) : fmtDec(data.area, 1)}
            validated={validated} />
          <span className="text-sm text-[var(--color-text-secondary)]">cm²</span>
        </div>
      </div>
    </div>
  );
}

// ── Exercise 38: Circle ───────────────────────────────────────────────────────

const PI_APPROX = 3.14;

export function Exercise38({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const d = [3, 5, 7, 9, 11, 13, 15, 17][randInt(0, 7)]!;
    const r = d / 2;
    const perimeter = parseFloat((PI_APPROX * d).toFixed(2));
    const area = parseFloat((PI_APPROX * r * r).toFixed(3));
    return { r, d, perimeter, area };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ansC, setAnsC] = useState("");
  const [ansA, setAnsA] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchNum(ansC, data.perimeter, 0.05)) pts++;
    if (matchNum(ansA, data.area, 0.05)) pts++;
    onValidated(pts, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  // Fixed visual circle — diameter shown as a line inside
  const svgCx = 90, svgCy = 68, svgR = 52;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">
        Calculez le périmètre et l&apos;aire. (<strong className="font-bold text-[var(--color-accent-alg)]">π</strong> = 3,14)
      </p>
      <svg viewBox="0 0 180 140" width={180} height={140} className="block mx-auto">
        <circle cx={svgCx} cy={svgCy} r={svgR}
          fill="var(--color-accent-alg)" fillOpacity={0.15} stroke="var(--color-accent-alg)" strokeWidth="2" />
        {/* Diameter line across full circle */}
        <line x1={svgCx - svgR} y1={svgCy} x2={svgCx + svgR} y2={svgCy}
          stroke="var(--color-accent-alg)" strokeWidth="1.5" />
        {/* Center dot */}
        <circle cx={svgCx} cy={svgCy} r={2.5} fill="var(--color-accent-alg)" />
        {/* Diameter label below the line */}
        <text x={svgCx} y={svgCy + 14} textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">
          d = {data.d} cm
        </text>
      </svg>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <span className="shrink-0 text-sm text-[var(--color-text-secondary)]">Périmètre =</span>
          <CorrectionInput value={ansC} onChange={setAnsC}
            correct={fmtDec(data.perimeter, 2)}
            validated={validated} width="w-20" />
          <span className="text-sm text-[var(--color-text-secondary)]">cm</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="shrink-0 text-sm text-[var(--color-text-secondary)]">Aire =</span>
          <CorrectionInput value={ansA} onChange={setAnsA}
            correct={fmtDec(data.area, 3)}
            validated={validated} width="w-24" />
          <span className="text-sm text-[var(--color-text-secondary)]">cm²</span>
        </div>
      </div>
    </div>
  );
}

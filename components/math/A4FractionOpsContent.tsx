"use client";

import React, { useCallback, useEffect, useState } from "react";
import { answerMatches } from "@/lib/curriculum/content/math/math-a1-types";

export type FracOpMode = "add-sub" | "mul" | "div";

// ── Math helpers ───────────────────────────────────────────────────────────────
function gcd(a: number, b: number): number {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a || 1;
}
function simplify(n: number, d: number): [number, number] {
  if (d === 0) return [n, 1];
  if (n === 0) return [0, 1];
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(Math.abs(n), d);
  return [n / g, d / g];
}
function ri(lo: number, hi: number): number {
  return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}
function pickOp(mode: FracOpMode): string {
  if (mode === "mul") return "×";
  if (mode === "div") return "÷";
  return Math.random() < 0.5 ? "+" : "−";
}
function applyOp(aN: number, aD: number, bN: number, bD: number, op: string): [number, number] {
  if (op === "+") return simplify(aN * bD + bN * aD, aD * bD);
  if (op === "−") return simplify(aN * bD - bN * aD, aD * bD);
  if (op === "×") return simplify(aN * bN, aD * bD);
  return simplify(aN * bD, aD * bN); // ÷
}
function makeAcceptables(rawN: number, rawD: number): string[] {
  const [sN, sD] = simplify(rawN, rawD);
  const s = new Set([`${rawN}/${rawD}`, `${sN}/${sD}`]);
  if (sD === 1) s.add(`${sN}`);
  return [...s];
}

// ── Question data ──────────────────────────────────────────────────────────────
type Part = { kind: "frac"; n: number; d: number } | { kind: "int"; v: number };
interface OpQ { parts: Part[]; ops: string[]; ansNum: number; ansDen: number; acceptables: string[] }

// ── Generators ─────────────────────────────────────────────────────────────────
function gen1(mode: FracOpMode, lo: number, hi: number): OpQ {
  for (let t = 0; t < 200; t++) {
    const op = pickOp(mode);
    const d = ri(Math.max(2, lo), hi);
    const a = ri(lo, Math.max(lo, d));
    const b = ri(lo, Math.max(lo, d));
    if (b === 0) continue;
    let rawN: number, rawD: number;
    if (op === "+") { rawN = a + b; rawD = d; }
    else if (op === "−") { if (a <= b) continue; rawN = a - b; rawD = d; }
    else if (op === "×") { rawN = a * b; rawD = d * d; }
    else { rawN = a; rawD = b; } // a/d ÷ b/d = a/b
    const [sN, sD] = simplify(rawN, rawD);
    if (sN <= 0 || sD <= 0) continue;
    return { parts: [{ kind: "frac", n: a, d }, { kind: "frac", n: b, d }], ops: [op], ansNum: sN, ansDen: sD, acceptables: makeAcceptables(rawN, rawD) };
  }
  // fallback: 1/2 + 1/2
  const [sN, sD] = simplify(2, 2);
  return { parts: [{ kind: "frac", n: 1, d: 2 }, { kind: "frac", n: 1, d: 2 }], ops: ["+"], ansNum: sN, ansDen: sD, acceptables: makeAcceptables(2, 2) };
}

function gen2(mode: FracOpMode, lo: number, hi: number): OpQ {
  for (let t = 0; t < 200; t++) {
    const op = pickOp(mode);
    const d = ri(Math.max(2, lo), hi);
    const a = ri(lo, hi);
    const n = ri(lo, hi);
    if (n === 0 || d === 0) continue;
    let rawN: number, rawD: number;
    if (op === "+") { rawN = a + n * d; rawD = d; }
    else if (op === "−") { rawN = a - n * d; rawD = d; if (rawN <= 0) continue; }
    else if (op === "×") { rawN = a * n; rawD = d; }
    else { rawN = a; rawD = d * n; }
    const [sN, sD] = simplify(rawN, rawD);
    if (sN <= 0 || sD <= 0) continue;
    return { parts: [{ kind: "frac", n: a, d }, { kind: "int", v: n }], ops: [op], ansNum: sN, ansDen: sD, acceptables: makeAcceptables(rawN, rawD) };
  }
  const d = Math.max(2, lo); const a = lo; const n = lo;
  const [sN, sD] = simplify(a + n * d, d);
  return { parts: [{ kind: "frac", n: a, d }, { kind: "int", v: n }], ops: ["+"], ansNum: sN, ansDen: sD, acceptables: makeAcceptables(a + n * d, d) };
}

function gen3(mode: FracOpMode, lo: number, hi: number): OpQ {
  for (let t = 0; t < 200; t++) {
    const op = pickOp(mode);
    const d = ri(Math.max(2, lo), hi);
    const a = ri(lo, hi);
    const n = ri(lo, hi);
    if (n === 0 || d === 0) continue;
    let rawN: number, rawD: number;
    if (op === "+") { rawN = n * d + a; rawD = d; }
    else if (op === "−") { rawN = n * d - a; rawD = d; if (rawN <= 0) continue; }
    else if (op === "×") { rawN = n * a; rawD = d; }
    else { rawN = n * d; rawD = a; if (rawD <= 0) continue; }
    const [sN, sD] = simplify(rawN, rawD);
    if (sN <= 0 || sD <= 0) continue;
    return { parts: [{ kind: "int", v: n }, { kind: "frac", n: a, d }], ops: [op], ansNum: sN, ansDen: sD, acceptables: makeAcceptables(rawN, rawD) };
  }
  const d = Math.max(2, lo); const a = lo; const n = lo + 1;
  const [sN, sD] = simplify(n * d + a, d);
  return { parts: [{ kind: "int", v: n }, { kind: "frac", n: a, d }], ops: ["+"], ansNum: sN, ansDen: sD, acceptables: makeAcceptables(n * d + a, d) };
}

function gen4(mode: FracOpMode, lo: number, hi: number): OpQ {
  for (let t = 0; t < 200; t++) {
    const op = pickOp(mode);
    const d1 = ri(Math.max(2, lo), hi);
    let d2 = ri(Math.max(2, lo), hi);
    if (d2 === d1) continue; // ensure different denominators
    const a = ri(lo, Math.max(lo, d1));
    const b = ri(lo, Math.max(lo, d2));
    if (b === 0 || d2 === 0) continue;
    const [rawN, rawD] = applyOp(a, d1, b, d2, op);
    if (rawN <= 0 || rawD <= 0) continue;
    return { parts: [{ kind: "frac", n: a, d: d1 }, { kind: "frac", n: b, d: d2 }], ops: [op], ansNum: rawN, ansDen: rawD, acceptables: makeAcceptables(a * d2 + (op === "−" ? -b * d1 : b * d1), d1 * d2) };
  }
  return gen1(mode, lo, hi); // fallback
}

function gen5(mode: FracOpMode, lo: number, hi: number): OpQ {
  for (let t = 0; t < 200; t++) {
    const op1 = pickOp(mode);
    const op2 = pickOp(mode);
    const d1 = ri(Math.max(2, lo), hi);
    const samePair = Math.random() < 0.5;
    const d2 = samePair ? d1 : ri(Math.max(2, lo), hi);
    let d3 = ri(Math.max(2, lo), hi);
    if (samePair && d3 === d1) continue;
    if (!samePair && d3 === d1 && d3 === d2) continue; // avoid all three equal
    const a = ri(lo, Math.max(lo, d1));
    const b = ri(lo, Math.max(lo, d2));
    const c = ri(lo, Math.max(lo, d3));
    if (a === 0 || b === 0 || c === 0) continue;
    const [r1N, r1D] = applyOp(a, d1, b, d2, op1);
    if (r1N <= 0 || r1D <= 0) continue;
    const [rN, rD] = applyOp(r1N, r1D, c, d3, op2);
    if (rN <= 0 || rD <= 0) continue;
    return {
      parts: [{ kind: "frac", n: a, d: d1 }, { kind: "frac", n: b, d: d2 }, { kind: "frac", n: c, d: d3 }],
      ops: [op1, op2],
      ansNum: rN, ansDen: rD,
      acceptables: makeAcceptables(rN, rD),
    };
  }
  return gen1(mode, lo, hi);
}

function genQ(structType: 1|2|3|4|5, mode: FracOpMode, lo: number, hi: number): OpQ {
  if (structType === 1) return gen1(mode, lo, hi);
  if (structType === 2) return gen2(mode, lo, hi);
  if (structType === 3) return gen3(mode, lo, hi);
  if (structType === 4) return gen4(mode, lo, hi);
  return gen5(mode, lo, hi);
}

// ── Inline vertical fraction (question display) ────────────────────────────────
function VFrac({ n, d }: { n: number; d: number }) {
  return (
    <span className="inline-flex flex-col items-center gap-[2px] align-middle mx-0.5">
      <span className="text-sm font-bold leading-none tabular-nums text-[var(--color-text-primary)]">{n}</span>
      <span className="h-[1.5px] w-6 rounded bg-[var(--color-text-primary)]" />
      <span className="text-sm font-bold leading-none tabular-nums text-[var(--color-text-primary)]">{d}</span>
    </span>
  );
}

// ── Answer input (vertical numerator + bar + denominator) ──────────────────────
function FracAnswerInput({ numVal, denVal, onNum, onDen, status, disabled }: {
  numVal: string; denVal: string;
  onNum: (v: string) => void; onDen: (v: string) => void;
  status: "idle" | "correct" | "wrong"; disabled: boolean;
}) {
  const iCls = `w-12 rounded-xl border px-1 py-1 text-sm text-center outline-none transition-colors ${
    status === "wrong"
      ? "border-amber-500 bg-amber-50 text-amber-600 line-through dark:bg-amber-950/20"
      : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] focus:border-[var(--color-accent-alg)]"
  }`;
  return (
    <span className="inline-flex flex-col items-center gap-[2px] align-middle mx-0.5">
      <input type="text" value={numVal} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onNum(e.target.value)}
        placeholder="…" disabled={disabled} className={iCls} />
      <span className="h-[1.5px] w-12 rounded bg-[var(--color-text-primary)]" />
      <input type="text" value={denVal} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onDen(e.target.value)}
        placeholder="…" disabled={disabled} className={iCls} />
    </span>
  );
}

// ── Exercise titles ────────────────────────────────────────────────────────────
const STRUCT_TITLES: Record<1|2|3|4|5, string> = {
  1: "Fractions de même dénominateur",
  2: "Fraction et nombre entier",
  3: "Nombre entier et fraction",
  4: "Fractions de dénominateurs différents",
  5: "Trois fractions",
};

// ── FractionOpsExercise ────────────────────────────────────────────────────────
export function FractionOpsExercise({ exType, opMode, validateCommand, onValidated }: {
  exType: 1|2|3|4|5|6|7|8|9|10;
  opMode: FracOpMode;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const structType = (exType > 5 ? exType - 5 : exType) as 1|2|3|4|5;
  const [lo, hi]: [number, number] = exType > 5 ? [10, 99] : [1, 12];

  const [questions] = useState<OpQ[]>(() =>
    Array.from({ length: 5 }, () => genQ(structType, opMode, lo, hi))
  );
  const [nums, setNums] = useState<string[]>(() => Array(5).fill(""));
  const [dens, setDens] = useState<string[]>(() => Array(5).fill(""));
  const [statuses, setStatuses] = useState<("idle"|"correct"|"wrong")[]>(() => Array(5).fill("idle"));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const sts = questions.map((q: OpQ, i: number) => {
      const combined = dens[i]?.trim() ? `${nums[i]}/${dens[i]}` : (nums[i] ?? "");
      return answerMatches(combined, q.acceptables) ? "correct" : "wrong";
    }) as ("correct"|"wrong")[];
    setStatuses(sts);
    onValidated(sts.every(s => s === "correct"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, questions, nums, dens]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">
          Exercice {exType} — {STRUCT_TITLES[structType]}
        </h2>
      </div>
      <div className="space-y-5">
        {(questions as OpQ[]).map((q: OpQ, i: number) => {
          const isWrong = statuses[i] === "wrong";
          return (
            <div key={i} className={`rounded-xl border p-3 ${isWrong ? "border-amber-500 bg-amber-50/30 dark:bg-amber-950/10" : "border-[var(--color-border-default)]"}`}>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                {(q.parts as Part[]).map((part: Part, pi: number) => (
                  <React.Fragment key={pi}>
                    {pi > 0 && (
                      <span className="text-base font-semibold text-[var(--color-text-primary)]">{q.ops[pi - 1]}</span>
                    )}
                    {part.kind === "frac"
                      ? <VFrac n={part.n} d={part.d} />
                      : <span className="text-sm font-bold text-[var(--color-text-primary)]">{part.v}</span>
                    }
                  </React.Fragment>
                ))}
                <span className="text-base font-semibold text-[var(--color-text-primary)]">=</span>
                <FracAnswerInput
                  numVal={nums[i]!} denVal={dens[i]!}
                  onNum={(v: string) => { if (!validated) setNums((p: string[]) => { const n = [...p]; n[i] = v; return n; }); }}
                  onDen={(v: string) => { if (!validated) setDens((p: string[]) => { const n = [...p]; n[i] = v; return n; }); }}
                  status={statuses[i]!}
                  disabled={validated}
                />
                {isWrong && (
                  q.ansDen === 1
                    ? <span className="text-sm font-bold text-[var(--color-text-primary)]">{q.ansNum}</span>
                    : <VFrac n={q.ansNum} d={q.ansDen} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

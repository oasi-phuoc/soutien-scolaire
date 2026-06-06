"use client";
import React, { useState, useMemo, useEffect } from "react";
import type { PlacementExerciseProps } from "./PlacementExercises1to15";

// ── Helpers ───────────────────────────────────────────────────────────────────

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

function Pow10({ exp }: { exp: number }) {
  return <span>10<sup>{exp}</sup></span>;
}

function Radical({ value }: { value: number }) {
  return (
    <span className="inline-flex items-start">
      <span className="text-base leading-none">√</span>
      <span className="px-0.5 leading-tight">{value}</span>
    </span>
  );
}

// ── CorrectionInput ───────────────────────────────────────────────────────────

function CorrectionInput({
  value, onChange, correct, validated, width = "w-16", placeholder = "",
}: {
  value: string; onChange: (v: string) => void; correct: string;
  validated: boolean; width?: string; placeholder?: string;
}) {
  const showCorrection = validated && value.trim() !== correct.trim();
  return (
    <span className="inline-flex flex-col items-center gap-0.5 align-middle">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={validated}
        className={`${width} h-9 rounded border px-1 text-center font-mono text-sm outline-none focus:ring-1 disabled:opacity-80 ${
          showCorrection
            ? "border-red-400 bg-red-50 focus:border-red-400 focus:ring-red-200"
            : "border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 focus:border-[var(--color-accent-alg)] focus:ring-[var(--color-accent-alg)]/20"
        }`}
      />
      {showCorrection && <span className="text-[10px] font-semibold text-green-600">✓ {correct}</span>}
    </span>
  );
}

function CorrectionInputText({
  value, onChange, correct, validated, width = "w-20", placeholder = "",
}: {
  value: string; onChange: (v: string) => void; correct: string;
  validated: boolean; width?: string; placeholder?: string;
}) {
  const showCorrection = validated && value.trim().replace(/\s+/g, "").toLowerCase() !== correct.trim().replace(/\s+/g, "").toLowerCase();
  return (
    <span className="inline-flex flex-col items-center gap-0.5 align-middle">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={validated}
        className={`${width} h-9 rounded border px-1 text-center font-mono text-sm outline-none focus:ring-1 disabled:opacity-80 ${
          showCorrection
            ? "border-red-400 bg-red-50 focus:border-red-400 focus:ring-red-200"
            : "border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 focus:border-[var(--color-accent-alg)] focus:ring-[var(--color-accent-alg)]/20"
        }`}
      />
      {showCorrection && <span className="text-[10px] font-semibold text-green-600">✓ {correct}</span>}
    </span>
  );
}

// ── Exercise 28: Powers, roots, ×÷ by powers of 10 ──────────────────────────

export function Exercise28({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const b = randInt(2, 7);
    const sq = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169][randInt(0, 11)]!;
    const sqRoot = Math.sqrt(sq);
    const mult = parseFloat((Math.random() < 0.5 ? randInt(1, 99) * 0.1 : randInt(1, 999) * 0.01).toFixed(2));
    const expMult = randInt(1, 4);
    let expDiv = randInt(1, 4);
    while (expDiv === expMult) expDiv = randInt(1, 4);
    const pwr10mult = 10 ** expMult;
    const pwr10div = 10 ** expDiv;
    const divVal = parseFloat((randInt(1, 999) * pwr10div).toFixed(0));

    return {
      q1: { base: b, ans: b ** 3 },                                                    // a³
      q2: { sq, sqRoot },                                                               // √sq
      q3: { mult, exp: expMult, ans: parseFloat((mult * pwr10mult).toFixed(4)) },      // ×10^n
      q4: { divVal, exp: expDiv, ans: parseFloat((divVal / pwr10div).toFixed(4)) },    // ÷10^n
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchNum(a1, data.q1.ans)) pts++;
    if (matchNum(a2, data.q2.sqRoot)) pts++;
    if (matchNum(a3, data.q3.ans, 0.001)) pts++;
    if (matchNum(a4, data.q4.ans, 0.001)) pts++;
    onValidated(pts, 4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const fmtAns = (n: number) => {
    if (Number.isInteger(n)) return String(n);
    return fmtDec(n, 2);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez les résultats.</p>
      <div className="grid gap-y-2 gap-x-2 items-center text-sm" style={{gridTemplateColumns:"max-content 5rem 1.25rem 5rem max-content max-content"}}>
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
        <span className="justify-self-end">{data.q1.base}<sup>3</sup></span>
        <span />
        <span />
        <span className="justify-self-center text-[var(--color-text-secondary)]">=</span>
        <CorrectionInput value={a1} onChange={setA1} correct={String(data.q1.ans)} validated={validated} width="w-20" />

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
        <span className="justify-self-end"><Radical value={data.q2.sq} /></span>
        <span />
        <span />
        <span className="justify-self-center text-[var(--color-text-secondary)]">=</span>
        <CorrectionInput value={a2} onChange={setA2} correct={String(data.q2.sqRoot)} validated={validated} width="w-20" />

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">3.</span>
        <span className="justify-self-end font-mono">{fmtDec(data.q3.mult, 2)}</span>
        <span className="justify-self-center font-mono text-[var(--color-text-secondary)]">×</span>
        <span className="justify-self-start font-mono"><Pow10 exp={data.q3.exp} /></span>
        <span className="justify-self-center text-[var(--color-text-secondary)]">=</span>
        <CorrectionInput value={a3} onChange={setA3} correct={fmtAns(data.q3.ans)} validated={validated} width="w-20" />

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">4.</span>
        <span className="justify-self-end font-mono">{data.q4.divVal}</span>
        <span className="justify-self-center font-mono text-[var(--color-text-secondary)]">÷</span>
        <span className="justify-self-start font-mono"><Pow10 exp={data.q4.exp} /></span>
        <span className="justify-self-center text-[var(--color-text-secondary)]">=</span>
        <CorrectionInput value={a4} onChange={setA4} correct={fmtAns(data.q4.ans)} validated={validated} width="w-20" />
      </div>
    </div>
  );
}

// ── Exercise 29: Order of operations ─────────────────────────────────────────

export function Exercise29({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const makeDiv = () => {
      const divisor = randInt(2, 6);
      const quotient = randInt(2, 9);
      return { dividend: divisor * quotient, divisor, quotient };
    };
    const makeSquare = () => {
      const root = randInt(3, 12);
      return { sq: root ** 2, root };
    };
    type PriTemplate = () => { expr: string; ans: number };
    const pick = (templates: PriTemplate[], used: Set<number>) => {
      let idx = randInt(0, templates.length - 1);
      while (used.has(idx)) idx = randInt(0, templates.length - 1);
      used.add(idx);
      return templates[idx]!();
    };

    const fiveTermTemplates: PriTemplate[] = [
      () => {
        const d = makeDiv(); const a = randInt(2, 9), b = randInt(2, 9), c = randInt(2, 5);
        return { expr: `[(${a} + ${b}) × ${c} − ${d.dividend} ÷ ${d.divisor}]`, ans: (a + b) * c - d.quotient };
      },
      () => {
        const s = makeSquare(); const a = randInt(2, 7), b = randInt(2, 8), c = randInt(2, 5), e = randInt(1, 10);
        return { expr: `${a}² + (${b} × ${c}) − √${s.sq} + ${e}`, ans: a ** 2 + b * c - s.root + e };
      },
      () => {
        const d = makeDiv(); const a = randInt(7, 15), b = randInt(1, 6), c = randInt(2, 5);
        return { expr: `[${d.dividend} ÷ ${d.divisor} + (${a} − ${b}) × ${c}]`, ans: d.quotient + (a - b) * c };
      },
      () => {
        const d = makeDiv(); const a = randInt(2, 6), b = randInt(1, 5), e = randInt(1, 12);
        return { expr: `(${a} + ${b})² − ${d.dividend} ÷ ${d.divisor} + ${e}`, ans: (a + b) ** 2 - d.quotient + e };
      },
      () => {
        const s = makeSquare(); const a = randInt(2, 8), b = randInt(1, 6), c = randInt(1, 6), e = randInt(1, 10);
        return { expr: `[√${s.sq} + ${a} × (${b} + ${c})] − ${e}`, ans: s.root + a * (b + c) - e };
      },
      () => {
        const d = makeDiv(); const s = makeSquare(); const a = randInt(2, 5), b = randInt(1, 8);
        return { expr: `${a} × [${b} + √${s.sq} − ${d.dividend} ÷ ${d.divisor}]`, ans: a * (b + s.root - d.quotient) };
      },
      () => {
        const s = makeSquare(); const a = randInt(2, 6), b = randInt(2, 6), c = randInt(1, 5), e = randInt(1, 4);
        return { expr: `[(${a} × ${b}) − (${c} + ${e})²] + √${s.sq}`, ans: a * b - (c + e) ** 2 + s.root };
      },
      () => {
        const d = makeDiv(); const s = makeSquare(); const a = randInt(1, 6), b = randInt(1, 6);
        return { expr: `√${s.sq} × (${a} + ${b}) − ${d.dividend} ÷ ${d.divisor}`, ans: s.root * (a + b) - d.quotient };
      },
      () => {
        const s = makeSquare(); const a = randInt(4, 9), b = randInt(1, 5), c = randInt(1, 5), e = randInt(2, 5);
        return { expr: `[${a}² − (${b} + ${c}) × ${e}] + √${s.sq}`, ans: a ** 2 - (b + c) * e + s.root };
      },
      () => {
        const d = makeDiv(); const a = randInt(3, 9), b = randInt(5, 12), c = randInt(1, 4);
        return { expr: `${d.dividend} ÷ ${d.divisor} − [${a} × (${b} − ${c})]`, ans: d.quotient - a * (b - c) };
      },
    ];

    const sixTermTemplates: PriTemplate[] = [
      () => {
        const d = makeDiv(); const s = makeSquare(); const a = randInt(2, 8), b = randInt(2, 8), c = randInt(2, 5);
        return { expr: `[(${a} + ${b}) × ${c} − ${d.dividend} ÷ ${d.divisor}] + √${s.sq}`, ans: (a + b) * c - d.quotient + s.root };
      },
      () => {
        const d = makeDiv(); const a = randInt(2, 7), b = randInt(2, 7), c = randInt(1, 5), e = randInt(1, 5);
        return { expr: `[${a}² + ${b} × (${c} + ${e})] − ${d.dividend} ÷ ${d.divisor}`, ans: a ** 2 + b * (c + e) - d.quotient };
      },
      () => {
        const d = makeDiv(); const s = makeSquare(); const a = randInt(1, 8), b = randInt(2, 5), e = randInt(1, 9);
        return { expr: `(${a} + √${s.sq}) × ${b} − [${d.dividend} ÷ ${d.divisor} + ${e}]`, ans: (a + s.root) * b - (d.quotient + e) };
      },
      () => {
        const d = makeDiv(); const a = randInt(2, 5), b = randInt(1, 5), c = randInt(2, 7), e = randInt(1, 5);
        return { expr: `[(${a} + ${b})² − ${c} × ${e}] + ${d.dividend} ÷ ${d.divisor}`, ans: (a + b) ** 2 - c * e + d.quotient };
      },
      () => {
        const d = makeDiv(); const a = randInt(8, 15), b = randInt(1, 6), c = randInt(2, 5), e = randInt(2, 6);
        return { expr: `[${d.dividend} ÷ ${d.divisor} − (${a} − ${b}) × ${c}] + ${e}²`, ans: d.quotient - (a - b) * c + e ** 2 };
      },
      () => {
        const d = makeDiv(); const s = makeSquare(); const a = randInt(2, 8), b = randInt(1, 6), c = randInt(1, 6);
        return { expr: `√${s.sq} + [${a} × (${b} + ${c})] − ${d.dividend} ÷ ${d.divisor}`, ans: s.root + a * (b + c) - d.quotient };
      },
      () => {
        const d = makeDiv(); const s = makeSquare(); const a = randInt(4, 9), b = randInt(2, 8), c = randInt(2, 5);
        return { expr: `[${a}² − √${s.sq}] + (${b} × ${c}) − ${d.dividend} ÷ ${d.divisor}`, ans: a ** 2 - s.root + b * c - d.quotient };
      },
      () => {
        const d = makeDiv(); const s = makeSquare(); const a = randInt(2, 5), b = randInt(6, 12), c = randInt(1, 5);
        return { expr: `${a} × [${b} + ${c} − √${s.sq}] + ${d.dividend} ÷ ${d.divisor}`, ans: a * (b + c - s.root) + d.quotient };
      },
      () => {
        const d = makeDiv(); const a = randInt(2, 7), b = randInt(2, 7), c = randInt(1, 5), e = randInt(1, 5);
        return { expr: `[(${a} × ${b}) + (${c} + ${e})²] − ${d.dividend} ÷ ${d.divisor}`, ans: a * b + (c + e) ** 2 - d.quotient };
      },
      () => {
        const d = makeDiv(); const s = makeSquare(); const a = randInt(1, 6), b = randInt(1, 6), c = randInt(2, 5);
        return { expr: `${d.dividend} ÷ ${d.divisor} + [(${a} + ${b}) × ${c}] − √${s.sq}`, ans: d.quotient + (a + b) * c - s.root };
      },
    ];

    const usedFive = new Set<number>();
    const usedSix = new Set<number>();
    return [
      pick(fiveTermTemplates, usedFive),
      pick(fiveTermTemplates, usedFive),
      pick(sixTermTemplates, usedSix),
      pick(sixTermTemplates, usedSix),
    ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchNum(a1, data[0]!.ans)) pts++;
    if (matchNum(a2, data[1]!.ans)) pts++;
    if (matchNum(a3, data[2]!.ans)) pts++;
    if (matchNum(a4, data[3]!.ans)) pts++;
    onValidated(pts, 4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez les résultats.</p>
      <div className="grid gap-y-3 gap-x-2 items-center text-sm" style={{gridTemplateColumns:"max-content max-content max-content"}}>
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
        <span className="font-mono">{data[0]!.expr}</span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a1} onChange={setA1} correct={String(data[0]!.ans)} validated={validated} /></div>

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
        <span className="font-mono">{data[1]!.expr}</span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a2} onChange={setA2} correct={String(data[1]!.ans)} validated={validated} /></div>

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">3.</span>
        <span className="font-mono">{data[2]!.expr}</span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a3} onChange={setA3} correct={String(data[2]!.ans)} validated={validated} /></div>

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">4.</span>
        <span className="font-mono">{data[3]!.expr}</span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a4} onChange={setA4} correct={String(data[3]!.ans)} validated={validated} /></div>
      </div>
    </div>
  );
}

// ── Exercise 30: Relative numbers ─────────────────────────────────────────────

export function Exercise30({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    // 2 additions, 2 subtractions, 2 multiplications, 2 divisions
    const sign = () => (Math.random() < 0.5 ? 1 : -1);
    const a1 = sign() * randInt(2, 15), b1 = sign() * randInt(2, 15);
    const a2 = sign() * randInt(2, 15), b2 = sign() * randInt(2, 15);
    const a3 = sign() * randInt(2, 15), b3 = sign() * randInt(2, 15);
    const a4 = sign() * randInt(2, 15), b4 = sign() * randInt(2, 15);
    const m1 = sign() * randInt(2, 9), m2 = sign() * randInt(2, 9);
    const m3 = sign() * randInt(2, 9), m4 = sign() * randInt(2, 9);
    const d1n = sign() * randInt(2, 9) * randInt(2, 9), d1d = sign() * randInt(2, 9);
    const d2n = sign() * randInt(2, 9) * randInt(2, 9), d2d = sign() * randInt(2, 9);

    const fmtN = (n: number) => n < 0 ? `(${n})` : String(n);

    return [
      { left: fmtN(a1), op: "+", right: fmtN(b1), ans: a1 + b1 },
      { left: fmtN(a2), op: "+", right: fmtN(b2), ans: a2 + b2 },
      { left: fmtN(a3), op: "−", right: fmtN(b3), ans: a3 - b3 },
      { left: fmtN(a4), op: "−", right: fmtN(b4), ans: a4 - b4 },
      { left: fmtN(m1), op: "×", right: fmtN(m2), ans: m1 * m2 },
      { left: fmtN(m3), op: "×", right: fmtN(m4), ans: m3 * m4 },
      { left: fmtN(d1n), op: "÷", right: fmtN(d1d), ans: d1n / d1d },
      { left: fmtN(d2n), op: "÷", right: fmtN(d2d), ans: d2n / d2d },
    ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(() => Array(8).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => {
      if (matchNum(answers[i] ?? "", q.ans)) pts += 0.5;
    });
    onValidated(pts, 4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez les résultats.</p>
      <div className="grid gap-y-2 gap-x-2 items-center text-sm" style={{gridTemplateColumns:"max-content 5.5rem 1.5rem 5.5rem 1rem max-content"}}>
        {data.map((q, i) => (
          <React.Fragment key={i}>
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <span className="flex w-[5.5rem] justify-end font-mono tabular-nums">{q.left}</span>
            <span className="flex w-6 justify-center font-mono text-[var(--color-text-secondary)]">{q.op}</span>
            <span className="flex w-[5.5rem] justify-start font-mono tabular-nums">{q.right}</span>
            <span className="justify-self-center text-[var(--color-text-secondary)]">=</span>
            <CorrectionInput
              value={answers[i] ?? ""}
              onChange={(v) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a))}
              correct={Number.isInteger(q.ans) ? String(q.ans) : fmtDec(q.ans, 2)}
              validated={validated}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 31: Fractions ────────────────────────────────────────────────────

function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
function simplify(n: number, d: number): [number, number] {
  const g = gcd(Math.abs(n), Math.abs(d));
  const sign = d < 0 ? -1 : 1;
  return [(n / g) * sign, Math.abs(d / g)];
}

type FracQ = { n1: number; d1: number; n2: number; d2: number; op: "+" | "−" | "×" | "÷"; ansN: number; ansD: number };

function VFracNum({ n, d }: { n: number; d: number }) {
  return (
    <span className="inline-flex flex-col items-center gap-[2px] align-middle">
      <span className="flex h-8 w-12 items-center justify-center text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{n}</span>
      <span className="h-[1.5px] w-12 rounded bg-[var(--color-text-primary)]" />
      <span className="flex h-8 w-12 items-center justify-center text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{d}</span>
    </span>
  );
}

function VFracInputOne({ n, d, missing, value, onChange, validated }: {
  n: number; d: number; missing: "num" | "den"; value: string; onChange: (v: string) => void; validated: boolean;
}) {
  const inputCls = "h-8 w-12 rounded-xl border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 px-1 text-center text-sm font-mono outline-none focus:border-[var(--color-accent-alg)] disabled:opacity-60";
  const fixedCls = "flex h-8 w-12 items-center justify-center text-sm font-bold tabular-nums text-[var(--color-text-primary)]";
  return (
    <span className="inline-flex flex-col items-center gap-[2px] align-middle">
      {missing === "num" ? <input type="text" value={value} onChange={e => onChange(e.target.value)} disabled={validated} className={inputCls} /> : <span className={fixedCls}>{n}</span>}
      <span className="h-[1.5px] w-12 rounded bg-[var(--color-text-primary)]" />
      {missing === "den" ? <input type="text" value={value} onChange={e => onChange(e.target.value)} disabled={validated} className={inputCls} /> : <span className={fixedCls}>{d}</span>}
    </span>
  );
}

function VFracInputBoth({ num, den, onNum, onDen, validated }: {
  num: string; den: string; onNum: (v: string) => void; onDen: (v: string) => void; validated: boolean;
}) {
  const inputCls = "h-8 w-12 rounded-xl border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 px-1 text-center text-sm font-mono outline-none focus:border-[var(--color-accent-alg)] disabled:opacity-60";
  return (
    <span className="inline-flex flex-col items-center gap-[2px] align-middle">
      <input type="text" value={num} onChange={e => onNum(e.target.value)} disabled={validated} className={inputCls} />
      <span className="h-[1.5px] w-12 rounded bg-[var(--color-text-primary)]" />
      <input type="text" value={den} onChange={e => onDen(e.target.value)} disabled={validated} className={inputCls} />
    </span>
  );
}

function makeSimpleFrac(allowNegative = false): [number, number] {
  const d = randInt(2, 9);
  let n = randInt(1, d - 1);
  if (allowNegative && Math.random() < 0.5) n *= -1;
  return simplify(n, d);
}

function makeFracOp(op: FracQ["op"], allowNegative = false): FracQ {
  const [n1, d1] = makeSimpleFrac(allowNegative);
  let [n2, d2] = makeSimpleFrac(allowNegative);
  while (op === "÷" && n2 === 0) [n2, d2] = makeSimpleFrac(allowNegative);
  const raw =
    op === "+" ? [n1 * d2 + n2 * d1, d1 * d2] :
    op === "−" ? [n1 * d2 - n2 * d1, d1 * d2] :
    op === "×" ? [n1 * n2, d1 * d2] :
    [n1 * d2, d1 * n2];
  const [ansN, ansD] = simplify(raw[0]!, raw[1]!);
  return { n1, d1, n2, d2, op, ansN, ansD };
}

function FracAnswerRow({ q, idx, num, den, onNum, onDen, validated }: {
  q: FracQ; idx: number; num: string; den: string; onNum: (v: string) => void; onDen: (v: string) => void; validated: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
      <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{idx}.</span>
      <VFracNum n={q.n1} d={q.d1} />
      <span className="text-base font-semibold text-[var(--color-text-primary)]">{q.op}</span>
      <VFracNum n={q.n2} d={q.d2} />
      <span className="text-base font-semibold text-[var(--color-text-primary)]">=</span>
      <VFracInputBoth num={num} den={den} onNum={onNum} onDen={onDen} validated={validated} />
    </div>
  );
}

export function Exercise31({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const sN = randInt(1, 9);
    let sD = randInt(2, 10);
    while (gcd(sN, sD) !== 1) sD = randInt(2, 10);
    const k1 = randInt(2, 9);
    const missing: "num" | "den" = Math.random() < 0.5 ? "num" : "den";

    const q2sN = randInt(1, 9);
    let q2sD = randInt(2, 10);
    while (gcd(q2sN, q2sD) !== 1) q2sD = randInt(2, 10);
    const k2 = randInt(2, 9);

    return {
      q1: { bigN: sN * k1, bigD: sD * k1, smallN: sN, smallD: sD, missing, answer: missing === "num" ? sN : sD },
      q2: { bigN: q2sN * k2, bigD: q2sD * k2, smallN: q2sN, smallD: q2sD },
      q3: makeFracOp("+"),
      q4: makeFracOp("−"),
      q5: makeFracOp(Math.random() < 0.5 ? "+" : "−", true),
      q6: makeFracOp("×"),
      q7: makeFracOp("÷"),
      q8: makeFracOp(Math.random() < 0.5 ? "×" : "÷", true),
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [q1Ans, setQ1Ans] = useState("");
  const [nums, setNums] = useState<string[]>(() => Array(7).fill(""));
  const [dens, setDens] = useState<string[]>(() => Array(7).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if ((q1Ans.trim() ?? "") === String(data.q1.answer)) pts += 0.5;
    const expected = [
      [data.q2.smallN, data.q2.smallD],
      [data.q3.ansN, data.q3.ansD],
      [data.q4.ansN, data.q4.ansD],
      [data.q5.ansN, data.q5.ansD],
      [data.q6.ansN, data.q6.ansD],
      [data.q7.ansN, data.q7.ansD],
      [data.q8.ansN, data.q8.ansD],
    ];
    expected.forEach(([n, d], i) => {
      if ((nums[i] ?? "").trim() === String(n) && (dens[i] ?? "").trim() === String(d)) pts += 0.5;
    });
    onValidated(pts, 4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const setNum = (i: number) => (v: string) => setNums(prev => { const n = [...prev]; n[i] = v; return n; });
  const setDen = (i: number) => (v: string) => setDens(prev => { const n = [...prev]; n[i] = v; return n; });
  const opQuestions = [data.q3, data.q4, data.q5, data.q6, data.q7, data.q8];

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez les résultats.</p>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
          <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">1.</span>
          <VFracNum n={data.q1.bigN} d={data.q1.bigD} />
          <span className="text-base font-semibold text-[var(--color-text-primary)]">=</span>
          <VFracInputOne n={data.q1.smallN} d={data.q1.smallD} missing={data.q1.missing} value={q1Ans} onChange={setQ1Ans} validated={validated} />
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
          <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">2.</span>
          <VFracNum n={data.q2.bigN} d={data.q2.bigD} />
          <span className="text-base font-semibold text-[var(--color-text-primary)]">=</span>
          <VFracInputBoth num={nums[0] ?? ""} den={dens[0] ?? ""} onNum={setNum(0)} onDen={setDen(0)} validated={validated} />
        </div>

        {opQuestions.map((q, i) => (
          <FracAnswerRow
            key={i}
            q={q}
            idx={i + 3}
            num={nums[i + 1] ?? ""}
            den={dens[i + 1] ?? ""}
            onNum={setNum(i + 1)}
            onDen={setDen(i + 1)}
            validated={validated}
          />
        ))}
      </div>
    </div>
  );
}

// ── Exercise 32: Percentage + rule of 3 ──────────────────────────────────────

export function Exercise32({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const fruits = ["pommes", "bananes", "oranges", "poires", "fraises", "carottes", "tomates", "citrons", "raisins", "prunes"];
  const data = useMemo(() => {
    // q1: percentage of a number
    const pct1 = [10, 20, 25, 30, 50, 75][randInt(0, 5)]!;
    const base1 = randInt(2, 20) * 10;
    const ans1 = (pct1 * base1) / 100;

    // q2: pricing - kilograms of fruit/vegetable -> decimal CHF
    const qty = randInt(3, 9);
    let targetQty = randInt(3, 9);
    while (targetQty === qty) targetQty = randInt(3, 9);
    const fruitName = fruits[randInt(0, fruits.length - 1)]!;
    const price = randInt(11, 99) / 10;
    const ans2 = parseFloat(((targetQty * price) / qty).toFixed(2));

    return { pct1, base1, ans1, qty, targetQty, fruitName, price, ans2 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchNum(a1, data.ans1, 0.01)) pts++;
    if (matchNum(a2, data.ans2, 0.01)) pts++;
    onValidated(pts, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez les résultats.</p>
      <div className="grid gap-y-3 gap-x-2 items-center text-sm" style={{gridTemplateColumns:"max-content max-content max-content"}}>
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
        <span>{data.pct1}% de {data.base1}</span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a1} onChange={setA1} correct={Number.isInteger(data.ans1) ? String(data.ans1) : fmtDec(data.ans1, 2)} validated={validated} /></div>

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
        <span>{data.qty} kg de {data.fruitName} → {fmtDec(data.price, 1)} CHF ; {data.targetQty} kg de {data.fruitName}</span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a2} onChange={setA2} correct={fmtDec(data.ans2, 2)} validated={validated} width="w-20" placeholder="CHF" /></div>
      </div>
    </div>
  );
}

// ── Exercise 33: Algebraic simplification ────────────────────────────────────

export function Exercise33({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    type AlgQ = { expr: string; corr: string };
    type AlgTemplate = () => AlgQ;
    const nz = (min: number, max: number) => {
      let n = randInt(min, max);
      while (n === 0) n = randInt(min, max);
      return n;
    };
    const signed = (n: number) => n < 0 ? `− ${Math.abs(n)}` : `+ ${n}`;
    const signedTerm = (coef: number, variable: "x" | "y") => {
      const abs = Math.abs(coef);
      return `${coef < 0 ? "−" : "+"} ${abs === 1 ? "" : abs}${variable}`;
    };
    const linear = (x: number, y = 0, c = 0) => {
      const parts: string[] = [];
      const addTerm = (coef: number, variable?: "x" | "y") => {
        if (coef === 0) return;
        const abs = Math.abs(coef);
        const body = variable ? `${abs === 1 ? "" : abs}${variable}` : String(abs);
        if (parts.length === 0) parts.push(coef < 0 ? `−${body}` : body);
        else parts.push(`${coef < 0 ? "−" : "+"} ${body}`);
      };
      addTerm(x, "x");
      addTerm(y, "y");
      addTerm(c);
      return parts.length ? parts.join(" ") : "0";
    };
    const pick = (templates: AlgTemplate[]) => templates[randInt(0, templates.length - 1)]!();

    const q1Templates: AlgTemplate[] = [
      () => { const a=nz(-9,9), b=nz(-9,9), c=nz(-8,8), d=nz(-8,8), e=nz(-12,12), f=nz(-12,12); return { expr: `${a}x ${signedTerm(b,"x")} ${signedTerm(c,"y")} ${signedTerm(d,"y")} ${signed(e)} ${signed(f)}`, corr: linear(a+b,c+d,e+f) }; },
      () => { const a=nz(2,9), b=nz(2,9), c=nz(2,8), d=nz(2,8), e=nz(1,12); return { expr: `${a}x + ${b}y − ${c}x + ${d}y ${signed(e)}`, corr: linear(a-c,b+d,e) }; },
      () => { const a=nz(-8,8), b=nz(-8,8), c=nz(-8,8), d=nz(-8,8); return { expr: `${a}x ${signedTerm(b,"y")} − (${Math.abs(c)}x ${signedTerm(d,"y")})`, corr: linear(a-Math.abs(c),b-d) }; },
      () => { const a=nz(2,9), b=nz(1,8), c=nz(2,9), d=nz(1,8), e=nz(-10,10); return { expr: `${a}x − ${b}y + ${c}x − ${d}y ${signed(e)}`, corr: linear(a+c,-b-d,e) }; },
      () => { const a=nz(-9,9), b=nz(-9,9), c=nz(-9,9), d=nz(1,12); return { expr: `${a}x ${signedTerm(b,"x")} ${signedTerm(c,"x")} ${signed(d)}`, corr: linear(a+b+c,0,d) }; },
      () => { const a=nz(2,9), b=nz(2,8), c=nz(1,9), d=nz(1,9); return { expr: `${a}y + ${b}x − ${c}y + ${d}x`, corr: linear(b+d,a-c) }; },
      () => { const a=nz(2,9), b=nz(1,8), c=nz(1,8), d=nz(2,9); return { expr: `${a}x − (${b}x − ${c}y) + ${d}y`, corr: linear(a-b,c+d) }; },
      () => { const a=nz(3,9), b=nz(2,8), c=nz(1,8), d=nz(1,9); return { expr: `${a}x + ${b} − ${c}x + ${d}`, corr: linear(a-c,0,b+d) }; },
      () => { const a=nz(2,9), b=nz(2,9), c=nz(2,9), d=nz(2,9); return { expr: `${a}x + ${b}y + ${c}y − ${d}x`, corr: linear(a-d,b+c) }; },
      () => { const a=nz(-9,9), b=nz(1,9), c=nz(1,9), d=nz(-9,9); return { expr: `(${a}x + ${b}y) + (${d}x − ${c}y)`, corr: linear(a+d,b-c) }; },
    ];

    const q2Templates: AlgTemplate[] = [
      () => { const a=nz(2,7), b=nz(2,8), c=nz(-9,9), d=nz(-10,10); return { expr: `${a}(${b}x ${signed(c)}) ${signed(d)}`, corr: linear(a*b,0,a*c+d) }; },
      () => { const a=nz(2,6), b=nz(2,7), c=nz(1,8), d=nz(1,10); return { expr: `${a}(${b}x − ${c}) + ${d}`, corr: linear(a*b,0,-a*c+d) }; },
      () => { const a=nz(2,7), b=nz(2,8), c=nz(2,8), d=nz(-10,10); return { expr: `${a}(${b}x + ${c}y) ${signed(d)}`, corr: linear(a*b,a*c,d) }; },
      () => { const a=nz(2,6), b=nz(2,8), c=nz(1,8), d=nz(1,8); return { expr: `${a}(${b}x − ${c}y) + ${d}y`, corr: linear(a*b,-a*c+d) }; },
      () => { const a=nz(2,7), b=nz(2,8), c=nz(1,8), d=nz(1,10); return { expr: `${d} − ${a}(${b}x + ${c})`, corr: linear(-a*b,0,d-a*c) }; },
      () => { const a=nz(2,6), b=nz(1,7), c=nz(2,8), d=nz(1,9); return { expr: `${a}(${b}x + ${c}) − ${d}x`, corr: linear(a*b-d,0,a*c) }; },
      () => { const a=nz(2,6), b=nz(2,8), c=nz(1,7), d=nz(2,8); return { expr: `${a}(${b}x + ${c}y) − ${d}x`, corr: linear(a*b-d,a*c) }; },
      () => { const a=nz(2,7), b=nz(2,8), c=nz(1,8), d=nz(1,8); return { expr: `−${a}(${b}x − ${c}) + ${d}`, corr: linear(-a*b,0,a*c+d) }; },
      () => { const a=nz(2,6), b=nz(2,8), c=nz(1,8), d=nz(1,9); return { expr: `${a}(${b}y + ${c}) − ${d}`, corr: linear(0,a*b,a*c-d) }; },
      () => { const a=nz(2,5), b=nz(2,9), c=nz(1,8), d=nz(2,8); return { expr: `${a}(${b}x − ${c}y + ${d})`, corr: linear(a*b,-a*c,a*d) }; },
    ];

    const q3Templates: AlgTemplate[] = [
      () => { const a=nz(2,6), b=nz(2,8), c=nz(1,8), d=nz(2,6), e=nz(1,8), f=nz(1,8); return { expr: `${a}(${b}x + ${c}) + ${d}(${e}x − ${f})`, corr: linear(a*b+d*e,0,a*c-d*f) }; },
      () => { const a=nz(2,6), b=nz(1,8), c=nz(2,6), d=nz(1,8), e=nz(1,10); return { expr: `${a}(x + ${b}) − ${c}(x − ${d}) + ${e}`, corr: linear(a-c,0,a*b+c*d+e) }; },
      () => { const a=nz(2,5), b=nz(2,8), c=nz(1,7), d=nz(2,5), e=nz(1,7); return { expr: `${a}(${b}x − ${c}y) + ${d}(${e}y − x)`, corr: linear(a*b-d,-a*c+d*e) }; },
      () => { const a=nz(2,6), b=nz(1,7), c=nz(1,7), d=nz(2,6), e=nz(1,9); return { expr: `${a}(x + ${b}y) − ${d}(${c}x − ${e})`, corr: linear(a-d*c,a*b,d*e) }; },
      () => { const a=nz(2,6), b=nz(2,8), c=nz(1,9), d=nz(1,8); return { expr: `${a}(${b}x + ${c}) − (${d}x + ${c})`, corr: linear(a*b-d,0,a*c-c) }; },
      () => { const a=nz(2,6), b=nz(1,8), c=nz(2,6), d=nz(1,8), e=nz(1,8); return { expr: `(${a}x + ${b}) + ${c}(${d}x − ${e})`, corr: linear(a+c*d,0,b-c*e) }; },
      () => { const a=nz(2,5), b=nz(2,7), c=nz(1,7), d=nz(2,5), e=nz(1,7); return { expr: `${a}(${b}x + y) − ${d}(x − ${e}y) + ${c}`, corr: linear(a*b-d,a+d*e,c) }; },
      () => { const a=nz(2,6), b=nz(1,7), c=nz(2,6), d=nz(1,7), e=nz(1,8); return { expr: `${a}(${b}x − ${d}) + ${c}(${e} − x)`, corr: linear(a*b-c,0,-a*d+c*e) }; },
      () => { const a=nz(2,6), b=nz(1,8), c=nz(2,6), d=nz(1,8); return { expr: `${a}(x + y) + ${b}x − ${c}(${d}y − x)`, corr: linear(a+b+c,a-c*d) }; },
      () => { const a=nz(2,5), b=nz(1,7), c=nz(2,5), d=nz(1,7), e=nz(1,7); return { expr: `${a}(${b}x + ${d}y − ${e}) − ${c}(x + y)`, corr: linear(a*b-c,a*d-c,-a*e) }; },
    ];

    const q4Templates: AlgTemplate[] = [
      () => { const a=nz(2,5), b=nz(1,6), c=nz(1,6), d=nz(2,5), e=nz(1,6), f=nz(1,6); return { expr: `${a}[${b}x − (${c}y + ${d})] + ${e}(x + ${f}y)`, corr: linear(a*b+e,-a*c+e*f,-a*d) }; },
      () => { const a=nz(2,5), b=nz(1,8), c=nz(2,5), d=nz(1,8), e=nz(1,8); return { expr: `${a}(${b}x + ${e}) − [${c}(${d}x − ${e}) + x]`, corr: linear(a*b-c*d-1,0,a*e+c*e) }; },
      () => { const a=nz(2,5), b=nz(1,7), c=nz(1,7), d=nz(2,5), e=nz(1,7); return { expr: `${a}(x − ${b}y) − ${d}[${c}x − (${e}y + 1)]`, corr: linear(a-d*c,-a*b+d*e,d) }; },
      () => { const a=nz(2,5), b=nz(1,6), c=nz(2,5), d=nz(1,6), e=nz(1,9); return { expr: `${a}[${b}(x + y) − ${e}] + ${c}(x − ${d}y)`, corr: linear(a*b+c,a*b-c*d,-a*e) }; },
      () => { const a=nz(2,5), b=nz(2,6), c=nz(1,6), d=nz(2,5), e=nz(1,6); return { expr: `${a}(${b}x − ${c}) − ${d}[x − (${e}y + ${c})]`, corr: linear(a*b-d,d*e,-a*c+d*c) }; },
      () => { const a=nz(2,5), b=nz(1,7), c=nz(1,7), d=nz(2,5), e=nz(1,7); return { expr: `${a}[${b}x + (${c}y − ${e})] − ${d}(${b}x − y)`, corr: linear(a*b-d*b,a*c+d,-a*e) }; },
      () => { const a=nz(2,5), b=nz(1,7), c=nz(1,7), d=nz(2,5), e=nz(1,7); return { expr: `${a}(x + ${b}) + ${d}[${c}x − (${e} − y)]`, corr: linear(a+d*c,d,a*b-d*e) }; },
      () => { const a=nz(2,5), b=nz(1,6), c=nz(1,6), d=nz(2,5), e=nz(1,6); return { expr: `${a}[${b}x − ${c}(y + 1)] + ${d}(x + ${e})`, corr: linear(a*b+d,-a*c,-a*c+d*e) }; },
      () => { const a=nz(2,5), b=nz(1,7), c=nz(2,5), d=nz(1,7), e=nz(1,7); return { expr: `${a}(${b}x + y) − [${c}(x − ${d}y) − ${e}]`, corr: linear(a*b-c,a+c*d,e) }; },
      () => { const a=nz(2,5), b=nz(1,7), c=nz(1,7), d=nz(2,5), e=nz(1,7); return { expr: `${a}[${b}x + ${c} − (${d}y − ${e})] − x`, corr: linear(a*b-1,a*d*-1,a*c+a*e) }; },
    ];

    return [pick(q1Templates), pick(q2Templates), pick(q3Templates), pick(q4Templates)];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(() => Array(4).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    const norm = (s: string) => s.trim().replace(/\s+/g, "").replace(/−/g, "-").toLowerCase();
    let pts = 0;
    data.forEach((q, i) => {
      if (norm(answers[i] ?? "") === norm(q.corr)) pts++;
    });
    onValidated(pts, 4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez les résultats.</p>
      <div className="grid gap-y-3 gap-x-2 items-center text-sm" style={{gridTemplateColumns:"max-content max-content max-content"}}>
        {data.map((q, i) => (
          <React.Fragment key={i}>
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <span className="font-mono">{q.expr}</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[var(--color-text-secondary)]">=</span>
              <CorrectionInputText
                value={answers[i] ?? ""}
                onChange={v => setAnswers(prev => prev.map((a, j) => j === i ? v : a))}
                correct={q.corr}
                validated={validated}
                width="w-32"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 34: Evaluate expressions with variables ─────────────────────────

export function Exercise34({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const names = ["a", "b", "c", "x", "y", "z", "m", "n", "p"];
    const pickedNames = [...names].sort(() => Math.random() - 0.5).slice(0, 3) as [string, string, string];
    const pickedValues: number[] = [];
    while (pickedValues.length < 3) {
      const value = randInt(2, 9);
      if (!pickedValues.includes(value)) pickedValues.push(value);
    }
    const [l1, l2, l3] = pickedNames;
    const [v1, v2, v3] = pickedValues as [number, number, number];
    const square = (l: string) => `${l}²`;
    const rootSquare = (l: string) => `√(${l}²)`;
    type EvalTemplate = () => { expr: string; ans: number };
    const pick = (items: EvalTemplate[]) => items[randInt(0, items.length - 1)]!();

    const easyTemplates: EvalTemplate[] = [
      () => ({ expr: `${l1} + ${l2} + ${l3}`, ans: v1 + v2 + v3 }),
      () => ({ expr: `${l1} × ${l2} + ${l3}`, ans: v1 * v2 + v3 }),
      () => ({ expr: `${l1} + ${l2} × ${l3}`, ans: v1 + v2 * v3 }),
      () => ({ expr: `${square(l1)} + ${l2} − ${l3}`, ans: v1 ** 2 + v2 - v3 }),
      () => ({ expr: `${l1} + ${square(l2)} − ${l3}`, ans: v1 + v2 ** 2 - v3 }),
      () => ({ expr: `${rootSquare(l1)} + ${l2} + ${l3}`, ans: v1 + v2 + v3 }),
      () => ({ expr: `${l1} × ${l3} ÷ ${l3} + ${l2}`, ans: v1 + v2 }),
      () => ({ expr: `(${l1} + ${l2}) × ${l3}`, ans: (v1 + v2) * v3 }),
      () => ({ expr: `${l1} × (${l2} − ${l3})`, ans: v1 * (v2 - v3) }),
      () => ({ expr: `${square(l3)} − ${l1} × ${l2}`, ans: v3 ** 2 - v1 * v2 }),
      () => ({ expr: `${l1} + ${rootSquare(l2)} × ${l3}`, ans: v1 + v2 * v3 }),
      () => ({ expr: `${l1} × ${l2} − ${rootSquare(l3)}`, ans: v1 * v2 - v3 }),
      () => ({ expr: `(${l1} + ${l3})² − ${l2}`, ans: (v1 + v3) ** 2 - v2 }),
      () => ({ expr: `${l1} × ${l2} + ${l3}²`, ans: v1 * v2 + v3 ** 2 }),
      () => ({ expr: `${l3}² ÷ ${l3} + ${l1} × ${l2}`, ans: v3 + v1 * v2 }),
      () => ({ expr: `${l1} + (${l2} × ${l3}) − ${rootSquare(l1)}`, ans: v1 + v2 * v3 - v1 }),
      () => ({ expr: `${l1}² − (${l2} + ${l3})`, ans: v1 ** 2 - (v2 + v3) }),
      () => ({ expr: `(${l1} + ${l2} + ${l3}) × 2`, ans: (v1 + v2 + v3) * 2 }),
      () => ({ expr: `${l1} × (${l2} + ${l3}) ÷ ${l1}`, ans: v2 + v3 }),
      () => ({ expr: `${rootSquare(l1)} + ${rootSquare(l2)} + ${rootSquare(l3)}`, ans: v1 + v2 + v3 }),
    ];

    const hardTemplates: EvalTemplate[] = [
      () => ({ expr: `(${l1} + ${l2})² − ${l3} × ${l1}`, ans: (v1 + v2) ** 2 - v3 * v1 }),
      () => ({ expr: `${l1} × (${l2}² − ${l3}) + ${rootSquare(l1)}`, ans: v1 * (v2 ** 2 - v3) + v1 }),
      () => ({ expr: `(${l1} × ${l2} + ${l3}²) ÷ ${l1}`, ans: (v1 * v2 + v3 ** 2) / v1 }),
      () => ({ expr: `${rootSquare(l2)} × (${l1} + ${l3}) − ${l1}²`, ans: v2 * (v1 + v3) - v1 ** 2 }),
      () => ({ expr: `(${l1} + ${l2} × ${l3}) − (${l2}² ÷ ${l2})`, ans: v1 + v2 * v3 - v2 }),
      () => ({ expr: `${l1}² + ${l2}² − ${l3} × (${l1} − ${l2})`, ans: v1 ** 2 + v2 ** 2 - v3 * (v1 - v2) }),
      () => ({ expr: `(${l1} × ${l2}) ÷ ${l2} + (${l3} + ${l1})²`, ans: v1 + (v3 + v1) ** 2 }),
      () => ({ expr: `${l3} × (${l1}² − ${l2}) + ${rootSquare(l3)}`, ans: v3 * (v1 ** 2 - v2) + v3 }),
      () => ({ expr: `(${l1} + ${l2} + ${l3})² ÷ ${l1}`, ans: (v1 + v2 + v3) ** 2 / v1 }),
      () => ({ expr: `${l1} × ${l2} × ${l3} ÷ ${l2} − ${l3}²`, ans: v1 * v3 - v3 ** 2 }),
      () => ({ expr: `(${l1}² − ${l2}) × (${l3} + ${l2})`, ans: (v1 ** 2 - v2) * (v3 + v2) }),
      () => ({ expr: `${rootSquare(l1)} × ${rootSquare(l2)} + ${l3}² − ${l1}`, ans: v1 * v2 + v3 ** 2 - v1 }),
      () => ({ expr: `(${l1} × ${l3} + ${l2})² ÷ ${l3}`, ans: (v1 * v3 + v2) ** 2 / v3 }),
      () => ({ expr: `${l2} × (${l1} + ${l3})² − ${l1} × ${l3}`, ans: v2 * (v1 + v3) ** 2 - v1 * v3 }),
      () => ({ expr: `(${l1}² + ${l2} × ${l3}) − (${l3}² ÷ ${l3})`, ans: v1 ** 2 + v2 * v3 - v3 }),
      () => ({ expr: `${l1} × (${l2} + ${rootSquare(l3)}) − ${l2}²`, ans: v1 * (v2 + v3) - v2 ** 2 }),
      () => ({ expr: `(${l1} + ${l2}) × (${l2} + ${l3}) − ${l1}²`, ans: (v1 + v2) * (v2 + v3) - v1 ** 2 }),
      () => ({ expr: `${l3}² + (${l1} × ${l2}) ÷ ${l1} − ${rootSquare(l2)}`, ans: v3 ** 2 + v2 - v2 }),
      () => ({ expr: `(${l1} × ${l2} − ${l3})² ÷ ${l1}`, ans: (v1 * v2 - v3) ** 2 / v1 }),
      () => ({ expr: `${l1}² × ${l2} − (${l3} + ${l1}) × ${rootSquare(l2)}`, ans: v1 ** 2 * v2 - (v3 + v1) * v2 }),
    ];

    return {
      vars: [
        { letter: l1, value: v1 },
        { letter: l2, value: v2 },
        { letter: l3, value: v3 },
      ],
      q1: pick(easyTemplates),
      q2: pick(hardTemplates),
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchNum(a1, data.q1.ans, 0.001)) pts++;
    if (matchNum(a2, data.q2.ans, 0.001)) pts++;
    onValidated(pts, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <p className="text-sm text-[var(--color-text-secondary)]">Calculez les résultats.</p>
        <p className="text-sm font-mono text-[var(--color-text-secondary)]">
          {data.vars.map(v => `${v.letter} = ${v.value}`).join(", ")}
        </p>
      </div>
      <div className="grid gap-y-3 gap-x-2 items-center text-sm" style={{gridTemplateColumns:"max-content max-content max-content"}}>
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
        <span className="font-mono">{data.q1.expr}</span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a1} onChange={setA1} correct={String(data.q1.ans)} validated={validated} /></div>

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
        <span className="font-mono">{data.q2.expr}</span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a2} onChange={setA2} correct={String(data.q2.ans)} validated={validated} width="w-20" /></div>
      </div>
    </div>
  );
}

// ── Exercise 35: Solve equations ──────────────────────────────────────────────

function InlineFraction({ top, bottom }: { top: React.ReactNode; bottom: React.ReactNode }) {
  return (
    <span className="inline-flex flex-col items-center px-1 align-middle leading-none">
      <span className="border-b border-[var(--color-text-primary)] px-1 pb-0.5">{top}</span>
      <span className="px-1 pt-0.5">{bottom}</span>
    </span>
  );
}

export function Exercise35({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    type EqQ = { expr: React.ReactNode; ans: number };
    type EqTemplate = () => EqQ;
    const xVal = () => {
      let x = randInt(-12, 12);
      while (x === 0) x = randInt(-12, 12);
      return x;
    };
    const s = (n: number) => n < 0 ? `− ${Math.abs(n)}` : `+ ${n}`;
    const pick = (items: EqTemplate[]) => items[randInt(0, items.length - 1)]!();

    const medium: EqTemplate[] = [
      () => { const x=xVal(), a=randInt(2,8), b=randInt(-15,15); return { expr: <>{a}x {s(b)} = {a*x+b}</>, ans:x }; },
      () => { const x=xVal(), a=randInt(2,7), b=randInt(1,12); return { expr: <>{a}(x {s(b)}) = {a*(x+b)}</>, ans:x }; },
      () => { const x=xVal(), a=randInt(3,9), b=randInt(1,12), c=randInt(1,6); return { expr: <>{a}x {s(b)} = {c}x {s((a-c)*x+b)}</>, ans:x }; },
      () => { const x=xVal(), a=randInt(2,8), b=randInt(1,12), c=randInt(2,8); return { expr: <>{a}(x − {b}) + {c} = {a*(x-b)+c}</>, ans:x }; },
      () => { const x=xVal(), a=randInt(2,6), b=randInt(1,8), c=randInt(1,10); return { expr: <>{a}x − ({b}x {s(c)}) = {(a-b)*x-c}</>, ans:x }; },
      () => { const x=xVal(), a=randInt(2,7), b=randInt(2,7), c=randInt(1,10); return { expr: <>{a}(x + {b}) − {c}x = {(a-c)*x+a*b}</>, ans:x }; },
      () => { const x=xVal(), a=randInt(2,8), b=randInt(1,10), c=randInt(1,8); return { expr: <>{a}x + {b} = {a*x+b+c} − {c}</>, ans:x }; },
      () => { const x=xVal(), a=randInt(2,7), b=randInt(1,9), c=randInt(2,7); return { expr: <>{a}(x + {b}) = {c}x {s((a-c)*x+a*b)}</>, ans:x }; },
      () => { const x=xVal(), a=randInt(2,9), b=randInt(1,10), c=randInt(1,8); return { expr: <>{a}x − {b} = {a*x-b-c} + {c}</>, ans:x }; },
      () => { const x=xVal(), a=randInt(2,6), b=randInt(2,6), c=randInt(1,8); return { expr: <>{a}(x − {c}) + {b}x = {(a+b)*x-a*c}</>, ans:x }; },
    ];

    const hard: EqTemplate[] = [
      () => { const x=xVal(), d=randInt(2,6), b=randInt(1,8), r=x+b; return { expr: <><InlineFraction top={<>x + {b}</>} bottom={d} /> = {r / d}</>, ans:x }; },
      () => { const x=xVal(), a=randInt(2,8), d=randInt(2,6), r=a*x/d; return { expr: <><InlineFraction top={<>{a}x</>} bottom={d} /> = {r}</>, ans:x }; },
      () => { const x=xVal(), d=randInt(2,6), b=randInt(1,8), c=randInt(1,8), r=(x-b)/d+c; return { expr: <><InlineFraction top={<>x − {b}</>} bottom={d} /> + {c} = {r}</>, ans:x }; },
      () => { const x=xVal(), a=randInt(2,7), b=randInt(1,8), d=randInt(2,6), r=(a*x+b)/d; return { expr: <><InlineFraction top={<>{a}x + {b}</>} bottom={d} /> = {r}</>, ans:x }; },
      () => { let x=xVal(), c=randInt(1,8); while (x + c === 0) { x=xVal(); c=randInt(1,8); } const k=randInt(2,6), d=k*(x+c); return { expr: <><InlineFraction top={d} bottom={<>x + {c}</>} /> = {k}</>, ans:x }; },
      () => { let x=xVal(), b=randInt(1,8); while (x - b === 0) { x=xVal(); b=randInt(1,8); } const k=randInt(2,6), a=k*(x-b); return { expr: <><InlineFraction top={a} bottom={<>x − {b}</>} /> = {k}</>, ans:x }; },
      () => { const x=xVal(), a=randInt(2,6), d=randInt(2,6), b=randInt(1,7), r=(x+b)/d+a; return { expr: <>{a} + <InlineFraction top={<>x + {b}</>} bottom={d} /> = {r}</>, ans:x }; },
      () => { const x=xVal(), a=randInt(2,7), d=randInt(2,6), b=randInt(1,7), r=(a*x-b)/d; return { expr: <><InlineFraction top={<>{a}x − {b}</>} bottom={d} /> = {r}</>, ans:x }; },
      () => { const x=xVal(), a=randInt(2,6), b=randInt(1,8), d=randInt(2,6), c=randInt(1,6), r=(a*x+b)/d-c; return { expr: <><InlineFraction top={<>{a}x + {b}</>} bottom={d} /> − {c} = {r}</>, ans:x }; },
      () => { let x=xVal(), b=randInt(1,8); while (x + b === 0) { x=xVal(); b=randInt(1,8); } const k=randInt(2,6), a=k*(x+b); return { expr: <><InlineFraction top={a} bottom={<>x + {b}</>} /> = {k}</>, ans:x }; },
    ];

    return [pick(medium), pick(hard)];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchNum(a1, data[0]!.ans)) pts++;
    if (matchNum(a2, data[1]!.ans)) pts++;
    onValidated(pts, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez les résultats.</p>
      <div className="space-y-4 text-sm">
        {[{ ans: a1, setAns: setA1 }, { ans: a2, setAns: setA2 }].map((state, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="font-mono">{data[i]!.expr}</span>
            </div>
            <div className="ml-6 flex items-center gap-1.5">
              <span className="text-[var(--color-text-secondary)]">x =</span>
              <CorrectionInput value={state.ans} onChange={state.setAns} correct={String(data[i]!.ans)} validated={validated} />
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
    units: ["mL", "cL", "dL", "L"],
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
  const factor = group.factors[ti]! / group.factors[fi]!;
  let value: number;
  if (factor >= 1) {
    // converting to smaller unit: use a simple number
    value = randInt(1, 20);
  } else {
    // converting to larger unit: use a value that's a multiple
    value = randInt(1, 20) * (1 / factor);
  }
  return { value, from: group.units[fi]!, to: group.units[ti]!, ans: value * factor };
}

export function Exercise36({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const questions = useMemo(() => {
    return [
      genConversion(UNIT_GROUPS.area!),
      genConversion(UNIT_GROUPS.volume!),
      genConversion(UNIT_GROUPS.capacity!),
      genConversion(UNIT_GROUPS.mass!),
    ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(() => Array(4).fill(""));

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
    return fmtDec(n, 3).replace(/,?0+$/, "");
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Transformez dans l&apos;unité indiquée.</p>
      <div className="grid gap-y-2 gap-x-2 items-center text-sm" style={{gridTemplateColumns:"max-content max-content max-content"}}>
        {questions.map((q, i) => (
          <React.Fragment key={i}>
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <span>{fmtV(q.value)} {q.from}</span>
            <div className="flex items-center gap-1.5">
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
          </React.Fragment>
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
    const leg = randInt(3, 8); // lateral side (isosceles: both equal)
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
  const svgW = 370, svgH = 145;
  const TLx = 58, TLy = 32, TRx = 168, TRy = 32; // top base = 110px
  const BLx = 20, BLy = 120, BRx = 210, BRy = 120; // bottom base = 190px
  const bkX = 232, tickLen = 5;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le périmètre et l&apos;aire.</p>
      <svg viewBox={`-55 0 ${svgW} ${svgH}`} width={svgW} height={svgH} className="mx-auto block h-auto w-full max-w-[370px]">
        {/* Shape */}
        <polygon points={`${TLx},${TLy} ${TRx},${TRy} ${BRx},${BRy} ${BLx},${BLy}`}
          fill="var(--color-accent-alg)" fillOpacity={0.15} stroke="var(--color-accent-alg)" strokeWidth="2" />
        {/* Top base label */}
        <text x={(TLx + TRx) / 2} y={TLy - 7} textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">a = {data.a} cm</text>
        {/* Bottom base label */}
        <text x={(BLx + BRx) / 2} y={BLy + 14} textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">b = {data.b} cm</text>
        {/* Left side label */}
        <text x={(BLx + TLx) / 2 - 8} y={(BLy + TLy) / 2} textAnchor="end" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">{data.leg} cm</text>
        {/* Dashed reference lines to bracket */}
        <line x1={BRx} y1={BRy} x2={bkX - 2} y2={BRy} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
        <line x1={TRx} y1={TRy} x2={bkX - 2} y2={TRy} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
        {/* Height bracket */}
        <line x1={bkX} y1={TRy} x2={bkX} y2={BRy} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <line x1={bkX - tickLen} y1={TRy} x2={bkX + tickLen} y2={TRy} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <line x1={bkX - tickLen} y1={BRy} x2={bkX + tickLen} y2={BRy} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <text x={bkX + tickLen + 4} y={(TRy + BRy) / 2} textAnchor="start" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">h = {data.h} cm</text>
      </svg>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-28 text-sm text-[var(--color-text-secondary)]">Périmètre =</span>
          <CorrectionInput value={ansP} onChange={setAnsP} correct={String(data.perimeter)} validated={validated} />
          <span className="text-sm text-[var(--color-text-secondary)]">cm</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-28 text-sm text-[var(--color-text-secondary)]">Aire =</span>
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
    const r = randInt(2, 9);
    const d = 2 * r;
    const circumference = parseFloat((PI_APPROX * d).toFixed(2));
    const area = parseFloat((PI_APPROX * r * r).toFixed(2));
    return { r, d, circumference, area };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ansC, setAnsC] = useState("");
  const [ansA, setAnsA] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchNum(ansC, data.circumference, 0.05)) pts++;
    if (matchNum(ansA, data.area, 0.05)) pts++;
    onValidated(pts, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  // Fixed visual circle — diameter shown as a line inside
  const svgCx = 90, svgCy = 68, svgR = 52;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le périmètre et l&apos;aire. (π = 3,14)</p>
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
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-36 text-sm text-[var(--color-text-secondary)]">Périmètre =</span>
          <CorrectionInput value={ansC} onChange={setAnsC}
            correct={fmtDec(data.circumference, 2)}
            validated={validated} width="w-20" />
          <span className="text-sm text-[var(--color-text-secondary)]">cm</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-36 text-sm text-[var(--color-text-secondary)]">Aire =</span>
          <CorrectionInput value={ansA} onChange={setAnsA}
            correct={fmtDec(data.area, 2)}
            validated={validated} width="w-20" />
          <span className="text-sm text-[var(--color-text-secondary)]">cm²</span>
        </div>
      </div>
    </div>
  );
}


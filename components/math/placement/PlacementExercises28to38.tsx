"use client";
import React, { useState, useMemo, useEffect } from "react";
import type { PlacementExerciseProps } from "./PlacementExercises1to15";

// ── Helpers ───────────────────────────────────────────────────────────────────

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
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
function fmtMeasure(n: number): string {
  return Number.isInteger(n) ? String(n) : fmtDec(n, 1);
}
function randOneDecimal(minTenths: number, maxTenths: number): number {
  let value = randInt(minTenths, maxTenths);
  while (value % 10 === 0) value = randInt(minTenths, maxTenths);
  return value / 10;
}
function randDecimalValue(): number {
  const decimals = Math.random() < 0.5 ? 1 : 3;
  const scale = decimals === 1 ? 10 : 1000;
  return randInt(10 * scale, 100 * scale - 1) / scale;
}

// ── CorrectionInput ───────────────────────────────────────────────────────────

function CorrectionInput({
  value, onChange, correct, validated, width = "w-16",
}: {
  value: string; onChange: (v: string) => void; correct: string;
  validated: boolean; width?: string; placeholder?: string;
}) {
  const wrong = validated && value.trim() !== "" && value.trim().replace(".", ",") !== correct.trim().replace(".", ",");
  return (
    <div className={`${width} min-h-9 rounded border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 px-1 py-1 text-center font-mono text-sm`}>
      {validated ? (
        wrong ? (
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] text-[var(--color-text-secondary)] line-through">{value}</span>
            <span className="font-bold text-amber-500">{correct}</span>
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

function CorrectionInputText({
  value, onChange, correct, validated, width = "w-20",
}: {
  value: string; onChange: (v: string) => void; correct: string;
  validated: boolean; width?: string; placeholder?: string;
}) {
  const norm = (s: string) => s.trim().replace(/\s+/g, "").toLowerCase();
  const wrong = validated && value.trim() !== "" && norm(value) !== norm(correct);
  return (
    <div className={`${width} min-h-9 rounded border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 px-1 py-1 text-center font-mono text-sm`}>
      {validated ? (
        wrong ? (
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] text-[var(--color-text-secondary)] line-through">{value}</span>
            <span className="font-bold text-amber-500">{correct}</span>
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

// Fraction display helper
function Frac({ n, d, className = "" }: { n: string | number; d: string | number; className?: string }) {
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span className="border-b border-current px-0.5 text-sm">{n}</span>
      <span className="px-0.5 text-sm">{d}</span>
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
    const powers = [10, 100, 1000, 10000];
    const pwr10mult = powers[randInt(0, powers.length - 1)]!;
    let pwr10div = powers[randInt(0, powers.length - 1)]!;
    while (pwr10div === pwr10mult) pwr10div = powers[randInt(0, powers.length - 1)]!;
    const divVal = parseFloat((randInt(1, 999) * (pwr10div === 10 ? 10 : pwr10div === 100 ? 100 : 1000)).toFixed(0));

    return {
      q1: { base: b, ans: b ** 3 },                                                    // a³
      q2: { sq, sqRoot },                                                               // √sq
      q3: { mult, pwr10: pwr10mult, ans: parseFloat((mult * pwr10mult).toFixed(4)) },  // ×10^n
      q4: { divVal, pwr10: pwr10div, ans: parseFloat((divVal / pwr10div).toFixed(4)) },// ÷10^n
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
  const pow10Exp = (n: number) => Math.round(Math.log10(n));

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez les résultats.</p>
      <div className="grid items-center gap-x-2 gap-y-2 text-sm" style={{gridTemplateColumns:"1.5rem max-content 1rem max-content"}}>
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
        <span>{data.q1.base}<sup>3</sup></span>
        <span className="text-center text-[var(--color-text-secondary)]">=</span>
        <CorrectionInput value={a1} onChange={setA1} correct={String(data.q1.ans)} validated={validated} width="w-20" />

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
        <span>√{data.q2.sq}</span>
        <span className="text-center text-[var(--color-text-secondary)]">=</span>
        <CorrectionInput value={a2} onChange={setA2} correct={String(data.q2.sqRoot)} validated={validated} width="w-20" />

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">3.</span>
        <span className="font-mono">{fmtDec(data.q3.mult, 2)} × 10<sup>{pow10Exp(data.q3.pwr10)}</sup></span>
        <span className="text-center text-[var(--color-text-secondary)]">=</span>
        <CorrectionInput value={a3} onChange={setA3} correct={fmtAns(data.q3.ans)} validated={validated} width="w-20" />

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">4.</span>
        <span className="font-mono">{data.q4.divVal} ÷ 10<sup>{pow10Exp(data.q4.pwr10)}</sup></span>
        <span className="text-center text-[var(--color-text-secondary)]">=</span>
        <CorrectionInput value={a4} onChange={setA4} correct={fmtAns(data.q4.ans)} validated={validated} width="w-20" />
      </div>
    </div>
  );
}

// ── Exercise 29: Order of operations ─────────────────────────────────────────

type NumericExpression = { expr: React.ReactNode; text: string; ans: number };

export function Exercise29({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
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
    return [0, 1, 1, 1].map((tier) => templates[tier]![randInt(0, 9)]!());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    [a1, a2, a3, a4].forEach((answer, i) => { if (matchNum(answer, data[i]!.ans)) pts++; });
    onValidated(pts, 4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez les résultats.</p>
      <div className="grid items-center gap-x-2 gap-y-3 text-sm" style={{gridTemplateColumns:"1.5rem max-content 1rem max-content"}}>
        {data.map((q, i) => (
          <React.Fragment key={i}>
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <span className="font-mono">{q.expr}</span>
            <span className="text-center text-[var(--color-text-secondary)]">=</span>
            <CorrectionInput
              value={[a1, a2, a3, a4][i] ?? ""}
              onChange={[setA1, setA2, setA3, setA4][i]!}
              correct={Number.isInteger(q.ans) ? String(q.ans) : fmtDec(q.ans, 2)}
              validated={validated}
              width="w-20"
            />
          </React.Fragment>
        ))}
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
      <div className="grid items-center gap-x-2 gap-y-2 text-sm" style={{gridTemplateColumns:"1.5rem max-content 1.25rem max-content 1rem max-content"}}>
        {data.map((q, i) => (
          <React.Fragment key={i}>
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <span className="justify-self-end font-mono">{q.left}</span>
            <span className="text-center font-mono text-[var(--color-text-secondary)]">{q.op}</span>
            <span className="justify-self-end font-mono">{q.right}</span>
            <span className="text-center text-[var(--color-text-secondary)]">=</span>
            <CorrectionInput
              value={answers[i] ?? ""}
              onChange={(v) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a))}
              correct={Number.isInteger(q.ans) ? String(q.ans) : fmtDec(q.ans, 2)}
              validated={validated}
              width="w-20"
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
  return [n / g, d / g];
}

export function Exercise31({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    // 8 fraction questions, 0.5 pt each = 4 pts total
    // q1: simplify a fraction
    const g1 = [2, 3, 4][randInt(0, 2)]!;
    const n1r = randInt(2, 7), d1r = randInt(n1r + 1, 12);
    const [n1s, d1s] = simplify(n1r * g1, d1r * g1);

    // q2: convert mixed to improper fraction
    const whole2 = randInt(2, 5), num2 = randInt(1, 4), den2 = randInt(num2 + 1, 7);
    const impN2 = whole2 * den2 + num2;

    // q3: addition same denominator
    const den3 = randInt(3, 8);
    const n3a = randInt(1, den3 - 1), n3b = randInt(1, den3 - 1);
    const sumN3 = n3a + n3b;
    const [sn3, sd3] = simplify(sumN3, den3);

    // q4: subtraction same denominator
    const den4 = randInt(4, 10);
    const n4a = randInt(3, den4 * 2), n4b = randInt(1, n4a - 1);
    const diffN4 = n4a - n4b;
    const [sn4, sd4] = simplify(diffN4, den4);

    // q5: addition different denominators (LCD = d5a * d5b)
    const d5a = [2, 3, 4, 5][randInt(0, 3)]!;
    const d5b = [3, 4, 5, 6].filter((x) => x !== d5a)[randInt(0, 2)]!;
    const n5a = randInt(1, d5a - 1), n5b = randInt(1, d5b - 1);
    const lcd5 = d5a * d5b;
    const sumN5 = n5a * d5b + n5b * d5a;
    const [sn5, sd5] = simplify(sumN5, lcd5);

    // q6: multiply fractions
    const n6a = randInt(2, 5), d6a = randInt(3, 7);
    const n6b = randInt(2, 5), d6b = randInt(3, 7);
    const [sn6, sd6] = simplify(n6a * n6b, d6a * d6b);

    // q7: divide fractions
    const n7a = randInt(2, 5), d7a = randInt(3, 7);
    const n7b = randInt(2, 5), d7b = randInt(3, 7);
    const [sn7, sd7] = simplify(n7a * d7b, d7a * n7b);

    // q8: fraction of a number
    const den8 = [2, 4, 5, 10][randInt(0, 3)]!;
    const num8 = randInt(1, den8 - 1);
    const base8 = den8 * randInt(2, 8);
    const ans8 = (num8 * base8) / den8;

    return { n1r, d1r, g1, n1s, d1s, whole2, num2, den2, impN2,
      n3a, n3b, den3, sn3, sd3, n4a, n4b, den4, sn4, sd4,
      d5a, d5b, n5a, n5b, sn5, sd5, n6a, d6a, n6b, d6b, sn6, sd6,
      n7a, d7a, n7b, d7b, sn7, sd7, num8, den8, base8, ans8 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(() => Array(8).fill(""));
  const setAns = (i: number) => (v: string) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    const checks = [
      () => {
        // simplify: accept n1s/d1s or whole number if d1s=1
        const inp = (answers[0] ?? "").trim().replace(/\s/g, "");
        if (data.d1s === 1) return inp === String(data.n1s);
        return inp === `${data.n1s}/${data.d1s}` || inp === `${data.n1s}`;
      },
      () => {
        const inp = (answers[1] ?? "").trim().replace(/\s/g, "");
        return inp === `${data.impN2}/${data.den2}`;
      },
      () => {
        const inp = (answers[2] ?? "").trim().replace(/\s/g, "");
        if (data.sd3 === 1) return inp === String(data.sn3);
        return inp === `${data.sn3}/${data.sd3}`;
      },
      () => {
        const inp = (answers[3] ?? "").trim().replace(/\s/g, "");
        if (data.sd4 === 1) return inp === String(data.sn4);
        return inp === `${data.sn4}/${data.sd4}`;
      },
      () => {
        const inp = (answers[4] ?? "").trim().replace(/\s/g, "");
        if (data.sd5 === 1) return inp === String(data.sn5);
        return inp === `${data.sn5}/${data.sd5}`;
      },
      () => {
        const inp = (answers[5] ?? "").trim().replace(/\s/g, "");
        if (data.sd6 === 1) return inp === String(data.sn6);
        return inp === `${data.sn6}/${data.sd6}`;
      },
      () => {
        const inp = (answers[6] ?? "").trim().replace(/\s/g, "");
        if (data.sd7 === 1) return inp === String(data.sn7);
        return inp === `${data.sn7}/${data.sd7}`;
      },
      () => matchNum(answers[7] ?? "", data.ans8),
    ];
    checks.forEach((check) => { if (check()) pts += 0.5; });
    onValidated(pts, 4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const corrFrac = (n: number, d: number) => d === 1 ? String(n) : `${n}/${d}`;

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Écrivez les fractions sous la forme n/d.</p>
      <div className="grid items-center gap-x-2 gap-y-2" style={{gridTemplateColumns:"1.5rem max-content 1rem max-content"}}>
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
        <span className="text-sm">Simplifier <Frac n={data.n1r * data.g1} d={data.d1r * data.g1} /></span>
        <span className="text-center text-sm text-[var(--color-text-secondary)]">=</span>
        <CorrectionInputText value={answers[0] ?? ""} onChange={setAns(0)} correct={corrFrac(data.n1s, data.d1s)} validated={validated} width="w-24" />

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
        <span className="text-sm">{data.whole2} <Frac n={data.num2} d={data.den2} className="text-xs" /></span>
        <span className="text-center text-sm text-[var(--color-text-secondary)]">=</span>
        <CorrectionInputText value={answers[1] ?? ""} onChange={setAns(1)} correct={`${data.impN2}/${data.den2}`} validated={validated} width="w-24" />

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">3.</span>
        <span className="text-sm"><Frac n={data.n3a} d={data.den3} /> + <Frac n={data.n3b} d={data.den3} /></span>
        <span className="text-center text-sm text-[var(--color-text-secondary)]">=</span>
        <CorrectionInputText value={answers[2] ?? ""} onChange={setAns(2)} correct={corrFrac(data.sn3, data.sd3)} validated={validated} width="w-24" />

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">4.</span>
        <span className="text-sm"><Frac n={data.n4a} d={data.den4} /> − <Frac n={data.n4b} d={data.den4} /></span>
        <span className="text-center text-sm text-[var(--color-text-secondary)]">=</span>
        <CorrectionInputText value={answers[3] ?? ""} onChange={setAns(3)} correct={corrFrac(data.sn4, data.sd4)} validated={validated} width="w-24" />

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">5.</span>
        <span className="text-sm"><Frac n={data.n5a} d={data.d5a} /> + <Frac n={data.n5b} d={data.d5b} /></span>
        <span className="text-center text-sm text-[var(--color-text-secondary)]">=</span>
        <CorrectionInputText value={answers[4] ?? ""} onChange={setAns(4)} correct={corrFrac(data.sn5, data.sd5)} validated={validated} width="w-24" />

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">6.</span>
        <span className="text-sm"><Frac n={data.n6a} d={data.d6a} /> × <Frac n={data.n6b} d={data.d6b} /></span>
        <span className="text-center text-sm text-[var(--color-text-secondary)]">=</span>
        <CorrectionInputText value={answers[5] ?? ""} onChange={setAns(5)} correct={corrFrac(data.sn6, data.sd6)} validated={validated} width="w-24" />

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">7.</span>
        <span className="text-sm"><Frac n={data.n7a} d={data.d7a} /> ÷ <Frac n={data.n7b} d={data.d7b} /></span>
        <span className="text-center text-sm text-[var(--color-text-secondary)]">=</span>
        <CorrectionInputText value={answers[6] ?? ""} onChange={setAns(6)} correct={corrFrac(data.sn7, data.sd7)} validated={validated} width="w-24" />

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">8.</span>
        <span className="text-sm"><Frac n={data.num8} d={data.den8} /> de {data.base8}</span>
        <span className="text-center text-sm text-[var(--color-text-secondary)]">=</span>
        <CorrectionInput value={answers[7] ?? ""} onChange={setAns(7)} correct={Number.isInteger(data.ans8) ? String(data.ans8) : fmtDec(data.ans8, 2)} validated={validated} width="w-24" />
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

    // q2: proportional price in kg
    const knownQty = randInt(3, 9);
    let targetQty = randInt(3, 9);
    while (targetQty === knownQty) targetQty = randInt(3, 9);
    const fruitName = fruits[randInt(0, fruits.length - 1)]!;
    const unitPrice = 0.5 + randInt(3, 15) * 0.1;
    const knownPrice = parseFloat((knownQty * unitPrice).toFixed(2));
    const ans2 = parseFloat((targetQty * unitPrice).toFixed(2));

    return { pct1, base1, ans1, knownQty, targetQty, fruitName, knownPrice, ans2 };
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
      <div className="grid items-center gap-x-2 gap-y-3 text-sm" style={{gridTemplateColumns:"1.5rem max-content"}}>
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
        <div className="grid items-center gap-x-2" style={{ gridTemplateColumns: "max-content 1rem max-content" }}>
          <span>{data.pct1}% de {data.base1}</span>
          <span className="text-center text-[var(--color-text-secondary)]">=</span>
          <CorrectionInput value={a1} onChange={setA1} correct={Number.isInteger(data.ans1) ? String(data.ans1) : fmtDec(data.ans1, 2)} validated={validated} width="w-20" />
        </div>

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
        <div className="grid items-center gap-x-2 gap-y-1" style={{ gridTemplateColumns: "max-content 1rem max-content max-content" }}>
          <div className="col-span-4">{data.knownQty} kg de {data.fruitName} → {fmtDec(data.knownPrice, data.knownPrice % 1 === 0 ? 0 : 1)} CHF</div>
          <div>{data.targetQty} kg de {data.fruitName}</div>
          <span className="text-center text-[var(--color-text-secondary)]">=</span>
          <CorrectionInput value={a2} onChange={setA2} correct={fmtDec(data.ans2, 2)} validated={validated} width="w-24" />
          <span className="text-[var(--color-text-secondary)]">CHF</span>
        </div>
      </div>
    </div>
  );
}

// ── Exercise 33: Algebraic simplification ────────────────────────────────────

export function Exercise33({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const fmtLin = (x: number, c = 0) => c === 0 ? `${x}x` : `${x}x ${c > 0 ? "+" : "−"} ${Math.abs(c)}`;
    const simpleTemplates = Array.from({ length: 10 }, () => () => {
      const a = randInt(2, 9), b = randInt(2, 9), c = randInt(1, 8);
      const variants = [
        { expr: `${a}x + ${b}x + ${c}`, corr: fmtLin(a + b, c) },
        { expr: `${a}x − ${b} + ${c}x`, corr: fmtLin(a + c, -b) },
        { expr: `${a}(x + ${b})`, corr: fmtLin(a, a * b) },
        { expr: `${a}x + ${b} − ${c}`, corr: fmtLin(a, b - c) },
      ];
      return variants[randInt(0, variants.length - 1)]!;
    });
    const hardTemplates = Array.from({ length: 10 }, () => () => {
      const a = randInt(2, 6), b = randInt(2, 7), c = randInt(1, 8), d = randInt(2, 6), e = randInt(1, 9);
      const variants = [
        { expr: `${a}(${b}x + ${c}) − ${d}x`, corr: fmtLin(a * b - d, a * c) },
        { expr: `${a}x + ${b}(${c}x − ${d})`, corr: fmtLin(a + b * c, -b * d) },
        { expr: `${a}(x + ${b}) + ${c}(x − ${d})`, corr: fmtLin(a + c, a * b - c * d) },
        { expr: `${a}(${b}x + ${c}) − (${d}x + ${e})`, corr: fmtLin(a * b - d, a * c - e) },
      ];
      return variants[randInt(0, variants.length - 1)]!;
    });
    return [
      simpleTemplates[randInt(0, 9)]!(),
      simpleTemplates[randInt(0, 9)]!(),
      hardTemplates[randInt(0, 9)]!(),
      hardTemplates[randInt(0, 9)]!(),
    ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(() => Array(4).fill(""));

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
      <div className="grid items-center gap-x-2 gap-y-3 text-sm" style={{gridTemplateColumns:"1.5rem max-content 1rem max-content"}}>
        {data.map((q, i) => (
          <React.Fragment key={i}>
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <span className="font-mono">{q.expr}</span>
            <span className="text-center text-[var(--color-text-secondary)]">=</span>
            <CorrectionInputText
              value={answers[i] ?? ""}
              onChange={(v) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a))}
              correct={q.corr}
              validated={validated}
              width="w-28"
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 34: Evaluate expressions with variables ─────────────────────────

export function Exercise34({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
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
    return { assignments: letters.map((letter) => ({ letter, value: values[letter]! })), q1: easy[randInt(0, 19)]!(), q2: hard[randInt(0, 19)]!() };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchNum(a1, data.q1.ans)) pts++;
    if (matchNum(a2, data.q2.ans)) pts++;
    onValidated(pts, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

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
      <div className="grid items-center gap-x-2 gap-y-3 text-sm" style={{gridTemplateColumns:"1.5rem max-content 1rem max-content"}}>
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
        <span className="font-mono">{data.q1.expr}</span>
        <span className="text-center text-[var(--color-text-secondary)]">=</span>
        <CorrectionInput value={a1} onChange={setA1} correct={String(data.q1.ans)} validated={validated} width="w-20" />

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
        <span className="font-mono">{data.q2.expr}</span>
        <span className="text-center text-[var(--color-text-secondary)]">=</span>
        <CorrectionInput value={a2} onChange={setA2} correct={String(data.q2.ans)} validated={validated} width="w-20" />
      </div>
    </div>
  );
}

// ── Exercise 35: Solve equations ──────────────────────────────────────────────

export function Exercise35({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const fmtSigned = (n: number) => n < 0 ? `− ${Math.abs(n)}` : `+ ${n}`;
    const easy = Array.from({ length: 20 }, () => () => {
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
    });
    const hard = Array.from({ length: 20 }, () => () => {
      const x = randInt(-8, 8) || -3;
      const d = randInt(2, 6);
      const a = randInt(2, 8), b = randInt(1, 12), c = randInt(1, 9);
      const numerator = d * (c - b) - a * x;
      const variants = [
        { left: <><Frac n={`${a}x + ${numerator}`} d={d} /> + {b}</>, right: String(c), x },
        { left: <>{a}x + <Frac n={b} d={d} /></>, right: <><Frac n={a * x * d + b} d={d} /></>, x },
        { left: <><Frac n={`${a}x − ${b}`} d={d} /> − {c}</>, right: <><Frac n={a * x - b - c * d} d={d} /></>, x },
      ];
      return variants[randInt(0, variants.length - 1)]!;
    });
    return { q1: easy[randInt(0, 19)]!(), q2: hard[randInt(0, 19)]!() };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchNum(a1, data.q1.x)) pts++;
    if (matchNum(a2, data.q2.x)) pts++;
    onValidated(pts, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-3">
      <p className="text-xs text-[var(--color-text-secondary)]">Trouver la valeur de x.</p>
      <div className="space-y-5 text-sm">
        <div className="grid items-center gap-x-2 gap-y-2" style={{ gridTemplateColumns: "max-content max-content max-content max-content" }}>
          <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
          <span className="font-mono">{data.q1.left}</span>
          <span className="justify-self-center text-[var(--color-text-secondary)]">=</span>
          <span className="font-mono">{data.q1.right}</span>

          <span />
          <span />
          <span className="justify-self-center text-[var(--color-text-secondary)]">x =</span>
          <CorrectionInput value={a1} onChange={setA1} correct={String(data.q1.x)} validated={validated} width="w-20" />
        </div>

        <div className="grid items-center gap-x-2 gap-y-2" style={{ gridTemplateColumns: "max-content max-content max-content max-content" }}>
          <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
          <span className="font-mono">{data.q2.left}</span>
          <span className="justify-self-center text-[var(--color-text-secondary)]">=</span>
          <span className="font-mono">{data.q2.right}</span>

          <span />
          <span />
          <span className="justify-self-center text-[var(--color-text-secondary)]">x =</span>
          <CorrectionInput value={a2} onChange={setA2} correct={String(data.q2.x)} validated={validated} width="w-20" />
        </div>
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
  const factor = group.factors[ti]! / group.factors[fi]!;
  const value = randDecimalValue();
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
      <div className="grid items-center gap-x-2 gap-y-2 text-sm" style={{gridTemplateColumns:"1.5rem max-content 1rem max-content max-content"}}>
        {questions.map((q, i) => (
          <React.Fragment key={i}>
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <span>{fmtV(q.value)} {q.from}</span>
            <span className="text-center text-[var(--color-text-secondary)]">=</span>
            <CorrectionInput
              value={answers[i] ?? ""}
              onChange={(v) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a))}
              correct={fmtV(q.ans)}
              validated={validated}
              width="w-24"
            />
            <span className="text-[var(--color-text-secondary)]">{q.to}</span>
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
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-28 text-sm text-[var(--color-text-secondary)]">Périmètre =</span>
          <CorrectionInput value={ansP} onChange={setAnsP} correct={fmtMeasure(data.perimeter)} validated={validated} />
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
    const d = [3, 5, 7, 9, 11, 13, 15, 17][randInt(0, 7)]!;
    const r = d / 2;
    const perimeter = parseFloat((PI_APPROX * d).toFixed(2));
    const area = parseFloat((PI_APPROX * r * r).toFixed(2));
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
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-36 text-sm text-[var(--color-text-secondary)]">Périmètre =</span>
          <CorrectionInput value={ansC} onChange={setAnsC}
            correct={fmtDec(data.perimeter, 2)}
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

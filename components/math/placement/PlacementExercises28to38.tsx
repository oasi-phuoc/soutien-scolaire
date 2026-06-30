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

  const cell = (val: string, correct: string, wrong: boolean, onChange: (v: string) => void) => {
    if (validated) {
      return (
        <span className={`block w-10 text-center font-mono text-sm leading-none ${wrong ? "text-amber-600" : "text-[var(--color-text-primary)]"}`}>
          {wrong ? correct : (val || correct)}
        </span>
      );
    }
    return (
      <input
        type="text"
        value={val}
        onChange={e => onChange(e.target.value.replace(/[^0-9-]/g, ""))}
        className="block h-6 w-10 bg-transparent text-center font-mono text-sm outline-none"
      />
    );
  };

  return (
    <span className="inline-flex min-h-16 w-14 flex-col items-center justify-center rounded-md border-2 border-[var(--color-accent-alg)]/45 bg-transparent px-1 py-1">
      {cell(numVal, numCorrect, numWrong, onNumChange)}
      <span className="my-0.5 h-px w-full bg-[var(--color-text-primary)]" />
      {cell(denVal, denCorrect, denWrong, onDenChange)}
    </span>
  );
}

// Fraction display helper
function Frac({ n, d, className = "", bold = true }: { n: React.ReactNode; d: React.ReactNode; className?: string; bold?: boolean }) {
  const weight = bold ? "font-bold" : "font-normal";
  return (
    <span className={`inline-flex flex-col items-center gap-[2px] align-middle ${className}`}>
      <span className={`flex min-h-[1.75rem] items-center justify-center px-0.5 text-sm ${weight} tabular-nums`}>{n}</span>
      <span className="h-px w-full min-w-[1.5rem] bg-current" />
      <span className={`flex min-h-[1.75rem] items-center justify-center px-0.5 text-sm ${weight} tabular-nums`}>{d}</span>
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

    const fmtN = (n: number) => n < 0 ? `(${n})` : `(+${n})`;

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

  const [answers, setAnswers] = useState<string[]>(() => Array(9).fill(""));

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
    const pickReduced = () => {
      for (;;) {
        const n = randInt(2, 9);
        const d = randInt(3, 12);
        if (n !== d && gcd(n, d) === 1) return { n, d };
      }
    };
    const fracAns = (n: number, d: number) => {
      const [rawN, rawD] = simplify(n, d);
      const sn = rawD < 0 ? -rawN : rawN;
      const sd = Math.abs(rawD);
      return sd === 1 ? String(sn) : `${sn}/${sd}`;
    };
    const makePair = () => {
      const a = pickReduced();
      const b = pickReduced();
      return { a, b };
    };

    const q1Base = pickReduced();
    const q1Factor = randInt(2, 6);
    const q1Ask = Math.random() < 0.5 ? "num" as const : "den" as const;

    const q2Base = pickReduced();
    const q2Factor = randInt(2, 6);

    const q3 = makePair();
    const q3Ans = fracAns(q3.a.n * q3.b.d + q3.b.n * q3.a.d, q3.a.d * q3.b.d);

    const q4 = makePair();
    const q4Ans = fracAns(q4.a.n * q4.b.d - q4.b.n * q4.a.d, q4.a.d * q4.b.d);

    const q5 = makePair();
    const q5Ans = fracAns(q5.a.n * q5.b.n, q5.a.d * q5.b.d);

    const q6 = makePair();
    const q6Ans = fracAns(q6.a.n * q6.b.d, q6.a.d * q6.b.n);

    const q7 = makePair();
    const q7Op = Math.random() < 0.5 ? "+" as const : "−" as const;
    let q7NegA = Math.random() < 0.5;
    const q7NegB = Math.random() < 0.5;
    if (!q7NegA && !q7NegB) q7NegA = true;
    const q7aN = q7NegA ? -q7.a.n : q7.a.n;
    const q7bN = q7NegB ? -q7.b.n : q7.b.n;
    const q7Ans = q7Op === "+"
      ? fracAns(q7aN * q7.b.d + q7bN * q7.a.d, q7.a.d * q7.b.d)
      : fracAns(q7aN * q7.b.d - q7bN * q7.a.d, q7.a.d * q7.b.d);

    const q8 = makePair();
    const q8Op = Math.random() < 0.5 ? "×" as const : "÷" as const;
    let q8NegA = Math.random() < 0.5;
    const q8NegB = Math.random() < 0.5;
    if (!q8NegA && !q8NegB) q8NegA = true;
    const q8aN = q8NegA ? -q8.a.n : q8.a.n;
    const q8bN = q8NegB ? -q8.b.n : q8.b.n;
    const q8Ans = q8Op === "×"
      ? fracAns(q8aN * q8bN, q8.a.d * q8.b.d)
      : fracAns(q8aN * q8.b.d, q8.a.d * q8bN);

    return {
      q1: { fullN: q1Base.n * q1Factor, fullD: q1Base.d * q1Factor, n: q1Base.n, d: q1Base.d, ask: q1Ask },
      q2: { fullN: q2Base.n * q2Factor, fullD: q2Base.d * q2Factor, n: q2Base.n, d: q2Base.d },
      q3: { ...q3, ans: q3Ans },
      q4: { ...q4, ans: q4Ans },
      q5: { ...q5, ans: q5Ans },
      q6: { ...q6, ans: q6Ans },
      q7: { ...q7, op: q7Op, negA: q7NegA, negB: q7NegB, ans: q7Ans },
      q8: { ...q8, op: q8Op, negA: q8NegA, negB: q8NegB, ans: q8Ans },
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(() => Array(8).fill(""));
  const setAns = (i: number) => (v: string) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a));
  const [fracNums, setFracNums] = useState<string[]>(() => Array(6).fill(""));
  const [fracDens, setFracDens] = useState<string[]>(() => Array(6).fill(""));
  const setFN = (i: number) => (v: string) => setFracNums(prev => prev.map((a, j) => j === i ? v : a));
  const setFD = (i: number) => (v: string) => setFracDens(prev => prev.map((a, j) => j === i ? v : a));

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
    const checks = [
      () => norm(answers[0] ?? "") === String(data.q1.ask === "num" ? data.q1.n : data.q1.d),
      () => norm(answers[1] ?? "") === String(data.q2.n),
      () => { const [en,ed]=splitAns(data.q3.ans); return norm(fracNums[0]??"")=== en && norm(fracDens[0]??"")=== ed; },
      () => { const [en,ed]=splitAns(data.q4.ans); return norm(fracNums[1]??"")=== en && norm(fracDens[1]??"")=== ed; },
      () => { const [en,ed]=splitAns(data.q5.ans); return norm(fracNums[2]??"")=== en && norm(fracDens[2]??"")=== ed; },
      () => { const [en,ed]=splitAns(data.q6.ans); return norm(fracNums[3]??"")=== en && norm(fracDens[3]??"")=== ed; },
      () => { const [en,ed]=splitAns(data.q7.ans); return norm(fracNums[4]??"")=== en && norm(fracDens[4]??"")=== ed; },
      () => { const [en,ed]=splitAns(data.q8.ans); return norm(fracNums[5]??"")=== en && norm(fracDens[5]??"")=== ed; },
    ];
    checks.forEach((check) => { if (check()) pts += 0.5; });
    onValidated(pts, 4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const smallBox = (idx: number, correct: string) => (
    <CorrectionInput
      value={answers[idx] ?? ""}
      onChange={(v) => setAns(idx)(v.replace(/[^0-9/-]/g, ""))}
      correct={correct}
      validated={validated}
      width="w-14"
      variant="box"
    />
  );
  const negFrac = (neg: boolean, n: number, d: number) =>
    neg ? <Frac n={<>−{n}</>} d={d} /> : <Frac n={n} d={d} />;

  const opRows: Array<{ num: number; fa: React.ReactNode; op: string; fb: React.ReactNode; fi: number; ans: string }> = [
    { num: 3, fa: <Frac n={data.q3.a.n} d={data.q3.a.d} />, op: "+",       fb: <Frac n={data.q3.b.n} d={data.q3.b.d} />, fi: 0, ans: data.q3.ans },
    { num: 4, fa: <Frac n={data.q4.a.n} d={data.q4.a.d} />, op: "−",       fb: <Frac n={data.q4.b.n} d={data.q4.b.d} />, fi: 1, ans: data.q4.ans },
    { num: 5, fa: <Frac n={data.q5.a.n} d={data.q5.a.d} />, op: "×",       fb: <Frac n={data.q5.b.n} d={data.q5.b.d} />, fi: 2, ans: data.q5.ans },
    { num: 6, fa: <Frac n={data.q6.a.n} d={data.q6.a.d} />, op: "÷",       fb: <Frac n={data.q6.b.n} d={data.q6.b.d} />, fi: 3, ans: data.q6.ans },
    { num: 7, fa: negFrac(data.q7.negA, data.q7.a.n, data.q7.a.d), op: data.q7.op, fb: negFrac(data.q7.negB, data.q7.b.n, data.q7.b.d), fi: 4, ans: data.q7.ans },
    { num: 8, fa: negFrac(data.q8.negA, data.q8.a.n, data.q8.a.d), op: data.q8.op, fb: negFrac(data.q8.negB, data.q8.b.n, data.q8.b.d), fi: 5, ans: data.q8.ans },
  ];

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez et simplifiez les fractions.</p>

      {/* q1, q2: simplification */}
      <div className="grid items-center gap-x-2 gap-y-2" style={{gridTemplateColumns:"1.5rem max-content"}}>
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
        <span className="text-sm">
          <Frac n={data.q1.fullN} d={data.q1.fullD} /> ={" "}
          <Frac
            n={data.q1.ask === "num" ? smallBox(0, String(data.q1.n)) : data.q1.n}
            d={data.q1.ask === "den" ? smallBox(0, String(data.q1.d)) : data.q1.d}
          />
        </span>

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
        <span className="text-sm">
          <Frac n={data.q2.fullN} d={data.q2.fullD} /> ={" "}
          <Frac
            n={smallBox(1, String(data.q2.n))}
            d={data.q2.d}
          />
        </span>
      </div>

      {/* q3-q8: opérations — opérateur dans sa propre colonne pour centrage vertical */}
      <div className="grid items-center gap-x-3 gap-y-3" style={{gridTemplateColumns:"1.5rem max-content 1.5rem max-content 1rem max-content"}}>
        {opRows.map(({ num, fa, op, fb, fi, ans }) => (
          <React.Fragment key={num}>
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{num}.</span>
            <div className="flex justify-center">{fa}</div>
            <span className="text-center text-base font-semibold text-[var(--color-text-primary)]">{op}</span>
            <div className="flex justify-center">{fb}</div>
            <span className="text-center text-base font-semibold text-[var(--color-text-secondary)]">=</span>
            <FracInput
              numVal={fracNums[fi] ?? ""} denVal={fracDens[fi] ?? ""}
              numCorrect={splitAns(ans)[0]} denCorrect={splitAns(ans)[1]}
              onNumChange={setFN(fi)} onDenChange={setFD(fi)}
              validated={validated}
            />
          </React.Fragment>
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

        <span className="pt-5 text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
        <div className="grid items-center gap-x-2 gap-y-1 pt-5" style={{ gridTemplateColumns: "max-content 1rem max-content max-content" }}>
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
    return [pick(oneUnknown)(), pick(twoUnknown)(), pick(threeUnknown)(), pick(identities)()];
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
        { left: <><Frac n={`${a}x + ${numerator}`} d={d} bold={false} /> + {b}</>, right: String(c), x },
        { left: <>{a}x + <Frac n={b} d={d} bold={false} /></>, right: <><Frac n={a * x * d + b} d={d} bold={false} /></>, x },
        { left: <><Frac n={`${a}x − ${b}`} d={d} bold={false} /> − {c}</>, right: <><Frac n={a * x - b - c * d} d={d} bold={false} /></>, x },
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
        <div className="grid items-center gap-x-2 gap-y-2" style={{ gridTemplateColumns: "1.5rem minmax(0, max-content) 2.5rem max-content" }}>
          <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
          <span className="font-mono">{data.q1.left}</span>
          <span className="justify-self-center text-[var(--color-text-secondary)]">=</span>
          <span className="font-mono">{data.q1.right}</span>

          <span />
          <span className="justify-self-end font-mono text-[var(--color-text-primary)]">x</span>
          <span className="justify-self-center text-[var(--color-text-secondary)]">=</span>
          <CorrectionInput value={a1} onChange={setA1} correct={String(data.q1.x)} validated={validated} width="w-20" />
        </div>

        <div className="grid items-center gap-x-2 gap-y-2" style={{ gridTemplateColumns: "1.5rem minmax(0, max-content) 2.5rem max-content" }}>
          <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
          <span className="font-mono">{data.q2.left}</span>
          <span className="justify-self-center text-[var(--color-text-secondary)]">=</span>
          <span className="font-mono">{data.q2.right}</span>

          <span />
          <span className="justify-self-end font-mono text-[var(--color-text-primary)]">x</span>
          <span className="justify-self-center text-[var(--color-text-secondary)]">=</span>
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
  const factor = group.factors[fi]! / group.factors[ti]!;
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
    const absN = Math.abs(n);
    if (absN === 0) return "0";
    const dp = absN >= 1 ? 3 : Math.max(3, 2 - Math.floor(Math.log10(absN)));
    return fmtDec(n, Math.min(dp, 10)).replace(/,?0+$/, "");
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
            correct={fmtDec(data.area, 3)}
            validated={validated} width="w-24" />
          <span className="text-sm text-[var(--color-text-secondary)]">cm²</span>
        </div>
      </div>
    </div>
  );
}

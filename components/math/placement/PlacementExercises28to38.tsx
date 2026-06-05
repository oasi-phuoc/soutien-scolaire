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
      <span className="border-t border-current px-0.5 leading-tight">{value}</span>
    </span>
  );
}

// ── CorrectionInput ───────────────────────────────────────────────────────────

function CorrectionInput({
  value, onChange, correct: _correct, validated, width = "w-16", placeholder = "",
}: {
  value: string; onChange: (v: string) => void; correct: string;
  validated: boolean; width?: string; placeholder?: string;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={validated}
      className={`${width} h-9 rounded border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 px-1 text-center font-mono text-sm outline-none focus:border-[var(--color-accent-alg)] focus:ring-1 focus:ring-[var(--color-accent-alg)]/20 disabled:opacity-60`}
    />
  );
}

function CorrectionInputText({
  value, onChange, correct: _correct, validated, width = "w-20", placeholder = "",
}: {
  value: string; onChange: (v: string) => void; correct: string;
  validated: boolean; width?: string; placeholder?: string;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={validated}
      className={`${width} h-9 rounded border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 px-1 text-center font-mono text-sm outline-none focus:border-[var(--color-accent-alg)] focus:ring-1 focus:ring-[var(--color-accent-alg)]/20 disabled:opacity-60`}
    />
  );
}

// ── Exercise 28: Powers, roots, ×÷ by powers of 10 ──────────────────────────

export function Exercise28({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const b = randInt(2, 7);
    const sq = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169][randInt(0, 11)]!;
    const sqRoot = Math.sqrt(sq);
    const mult = parseFloat((Math.random() < 0.5 ? randInt(1, 99) * 0.1 : randInt(1, 999) * 0.01).toFixed(2));
    const expMult = [1, 2, 3][randInt(0, 2)]!;
    const expDiv = [1, 2, 3][randInt(0, 2)]!;
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
      <p className="text-xs text-[var(--color-text-secondary)]">Consigne : calculez chaque puissance, racine et opération avec une puissance de 10.</p>
      <div className="grid gap-y-2 gap-x-2 items-center text-sm" style={{gridTemplateColumns:"max-content max-content max-content"}}>
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
        <span>{data.q1.base}<sup>3</sup></span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a1} onChange={setA1} correct={String(data.q1.ans)} validated={validated} /></div>

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
        <span><Radical value={data.q2.sq} /></span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a2} onChange={setA2} correct={String(data.q2.sqRoot)} validated={validated} /></div>

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">3.</span>
        <span className="font-mono">{fmtDec(data.q3.mult, 2)} × <Pow10 exp={data.q3.exp} /></span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a3} onChange={setA3} correct={fmtAns(data.q3.ans)} validated={validated} width="w-20" /></div>

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">4.</span>
        <span className="font-mono">{data.q4.divVal} ÷ <Pow10 exp={data.q4.exp} /></span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a4} onChange={setA4} correct={fmtAns(data.q4.ans)} validated={validated} width="w-20" /></div>
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
    const d1 = makeDiv();
    const a1 = randInt(2, 9), b1 = randInt(2, 9), c1 = randInt(2, 5), f1 = randInt(1, 12);
    const q1 = {
      expr: `[(${a1} + ${b1}) × ${c1} − ${d1.dividend} ÷ ${d1.divisor}] + ${f1}`,
      ans: (a1 + b1) * c1 - d1.quotient + f1,
    };

    const d2 = makeDiv();
    const a2 = randInt(2, 9), b2 = randInt(2, 9), c2 = randInt(2, 5), f2 = randInt(2, 9);
    const q2 = {
      expr: `[(${a2} + ${b2}) × ${c2} − ${d2.dividend} ÷ ${d2.divisor}] + ${f2}²`,
      ans: (a2 + b2) * c2 - d2.quotient + f2 ** 2,
    };

    const d3 = makeDiv();
    const a3 = randInt(2, 6), b3 = randInt(1, 5), e3 = randInt(2, 8), f3 = randInt(2, 5), g3 = randInt(1, 12);
    const q3 = {
      expr: `[(${a3} + ${b3})² − ${d3.dividend} ÷ ${d3.divisor}] + (${e3} × ${f3}) − ${g3}`,
      ans: (a3 + b3) ** 2 - d3.quotient + (e3 * f3) - g3,
    };

    const d4 = makeDiv();
    const squares = [9, 16, 25, 36, 49, 64, 81, 100, 121, 144];
    const sq4 = squares[randInt(0, squares.length - 1)]!;
    const a4 = randInt(2, 6), b4 = randInt(1, 5), c4 = randInt(2, 7), e4 = randInt(1, 10);
    const q4 = {
      expr: `[(${a4} + ${b4})² + ${c4} × ${e4}] − [${d4.dividend} ÷ ${d4.divisor} + √${sq4}]`,
      ans: (a4 + b4) ** 2 + c4 * e4 - (d4.quotient + Math.sqrt(sq4)),
    };

    return [q1, q2, q3, q4];
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
      <p className="text-xs text-[var(--color-text-secondary)]">Consigne : calculez chaque expression en respectant les priorités opératoires.</p>
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
      { expr: `${fmtN(a1)} + ${fmtN(b1)}`, ans: a1 + b1 },
      { expr: `${fmtN(a2)} + ${fmtN(b2)}`, ans: a2 + b2 },
      { expr: `${fmtN(a3)} − ${fmtN(b3)}`, ans: a3 - b3 },
      { expr: `${fmtN(a4)} − ${fmtN(b4)}`, ans: a4 - b4 },
      { expr: `${fmtN(m1)} × ${fmtN(m2)}`, ans: m1 * m2 },
      { expr: `${fmtN(m3)} × ${fmtN(m4)}`, ans: m3 * m4 },
      { expr: `${fmtN(d1n)} ÷ ${fmtN(d1d)}`, ans: d1n / d1d },
      { expr: `${fmtN(d2n)} ÷ ${fmtN(d2d)}`, ans: d2n / d2d },
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
      <p className="text-xs text-[var(--color-text-secondary)]">Consigne : effectuez les opérations avec les nombres relatifs.</p>
      <div className="grid gap-y-2 gap-x-2 items-center text-sm" style={{gridTemplateColumns:"max-content max-content max-content"}}>
        {data.map((q, i) => (
          <React.Fragment key={i}>
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <span className="font-mono">{q.expr}</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[var(--color-text-secondary)]">=</span>
              <CorrectionInput
                value={answers[i] ?? ""}
                onChange={(v) => setAnswers((prev) => prev.map((a, j) => j === i ? v : a))}
                correct={Number.isInteger(q.ans) ? String(q.ans) : fmtDec(q.ans, 2)}
                validated={validated}
              />
            </div>
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
      <p className="text-xs text-[var(--color-text-secondary)]">Consigne : complétez, simplifiez et calculez les fractions.</p>
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

    // q2: pricing - integer units of fruit/vegetable -> decimal CHF
    const qty = randInt(1, 9);
    let targetQty = randInt(1, 9);
    while (targetQty === qty) targetQty = randInt(1, 9);
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
      <p className="text-xs text-[var(--color-text-secondary)]">Consigne : calculez le pourcentage, puis le prix proportionnel demandé.</p>
      <div className="grid gap-y-3 gap-x-2 items-center text-sm" style={{gridTemplateColumns:"max-content max-content max-content"}}>
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
        <span>{data.pct1}% de {data.base1}</span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a1} onChange={setA1} correct={Number.isInteger(data.ans1) ? String(data.ans1) : fmtDec(data.ans1, 2)} validated={validated} /></div>

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
        <span className="space-y-1">
          <span className="block">{data.qty} {data.fruitName} → {fmtDec(data.price, 1)} CHF</span>
          <span className="block">{data.targetQty} {data.fruitName}</span>
        </span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a2} onChange={setA2} correct={fmtDec(data.ans2, 2)} validated={validated} width="w-20" placeholder="CHF" /></div>
      </div>
    </div>
  );
}

// ── Exercise 33: Algebraic simplification ────────────────────────────────────

export function Exercise33({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    // q1: combine like terms — ax + bx + cy + dy
    const a = randInt(2, 7), b = randInt(2, 7), c = randInt(2, 6), d = randInt(2, 6);
    const ans1x = a + b, ans1y = c + d;
    const expr1 = `${a}x + ${b}x + ${c}y + ${d}y`;
    const corr1 = `${ans1x}x + ${ans1y}y`;

    // q2: expand parentheses — a(bx + c) + d
    const fa = randInt(2, 5), fb = randInt(2, 5), fc = randInt(1, 8), fd = randInt(1, 10);
    const ans2x = fa * fb, ans2c = fa * fc + fd;
    const expr2 = `${fa}(${fb}x + ${fc}) + ${fd}`;
    const corr2 = ans2c === 0 ? `${ans2x}x` : `${ans2x}x + ${ans2c}`;

    return { expr1, corr1, expr2, corr2 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    const norm = (s: string) => s.trim().replace(/\s+/g, "").toLowerCase();
    let pts = 0;
    if (norm(a1) === norm(data.corr1)) pts++;
    if (norm(a2) === norm(data.corr2)) pts++;
    onValidated(pts, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-3">
      <p className="text-xs text-[var(--color-text-secondary)]">Simplifiez les expressions</p>
      <div className="grid gap-y-3 gap-x-2 items-center text-sm" style={{gridTemplateColumns:"max-content max-content max-content"}}>
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
        <span className="font-mono">{data.expr1}</span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInputText value={a1} onChange={setA1} correct={data.corr1} validated={validated} width="w-24" /></div>

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
        <span className="font-mono">{data.expr2}</span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInputText value={a2} onChange={setA2} correct={data.corr2} validated={validated} width="w-24" /></div>
      </div>
    </div>
  );
}

// ── Exercise 34: Evaluate expressions with variables ─────────────────────────

export function Exercise34({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    // q1: ax + b where x is given
    const a = randInt(2, 8), b = randInt(1, 12), x1 = randInt(2, 10);
    const ans1 = a * x1 + b;

    // q2: ax² − bx + c
    const a2 = randInt(1, 4), b2 = randInt(1, 6), c2 = randInt(1, 10), x2 = randInt(2, 5);
    const ans2 = a2 * x2 * x2 - b2 * x2 + c2;

    return { a, b, x1, ans1, a2, b2, c2, x2, ans2 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchNum(a1, data.ans1)) pts++;
    if (matchNum(a2, data.ans2)) pts++;
    onValidated(pts, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-3">
      <div className="grid gap-y-3 gap-x-2 items-center text-sm" style={{gridTemplateColumns:"max-content max-content max-content"}}>
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
        <span>Si x = {data.x1}, calculer {data.a}x + {data.b}</span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a1} onChange={setA1} correct={String(data.ans1)} validated={validated} /></div>

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
        <span>Si x = {data.x2}, calculer {data.a2}x² − {data.b2}x + {data.c2}</span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">=</span><CorrectionInput value={a2} onChange={setA2} correct={String(data.ans2)} validated={validated} /></div>
      </div>
    </div>
  );
}

// ── Exercise 35: Solve equations ──────────────────────────────────────────────

export function Exercise35({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    // q1: ax + b = c  → x = (c - b) / a
    const a1 = randInt(2, 6), b1 = randInt(1, 10), x1 = randInt(1, 12);
    const c1 = a1 * x1 + b1;

    // q2: ax − b = cx + d  → (a − c)x = d + b → x = (d + b) / (a − c)
    let a2: number, c2: number;
    do {
      a2 = randInt(3, 9);
      c2 = randInt(1, a2 - 1);
    } while (a2 === c2);
    const x2 = randInt(1, 10);
    const b2 = randInt(1, 8);
    const d2 = (a2 - c2) * x2 - b2;

    return { a1, b1, c1, x1, a2, b2, c2, d2: d2 < 0 ? -d2 : d2, d2neg: d2 < 0, x2 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchNum(a1, data.x1)) pts++;
    if (matchNum(a2, data.x2)) pts++;
    onValidated(pts, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-3">
      <p className="text-xs text-[var(--color-text-secondary)]">Trouver la valeur de x.</p>
      <div className="grid gap-y-3 gap-x-2 items-center text-sm" style={{gridTemplateColumns:"max-content max-content max-content"}}>
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
        <span className="font-mono">{data.a1}x + {data.b1} = {data.c1}</span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">x =</span><CorrectionInput value={a1} onChange={setA1} correct={String(data.x1)} validated={validated} /></div>

        <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
        <span className="font-mono">{data.a2}x − {data.b2} = {data.c2}x {data.d2neg ? "−" : "+"} {data.d2}</span>
        <div className="flex items-center gap-1.5"><span className="text-[var(--color-text-secondary)]">x =</span><CorrectionInput value={a2} onChange={setA2} correct={String(data.x2)} validated={validated} /></div>
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
  const svgW = 305, svgH = 145;
  const TLx = 58, TLy = 32, TRx = 168, TRy = 32; // top base = 110px
  const BLx = 20, BLy = 120, BRx = 210, BRy = 120; // bottom base = 190px
  const bkX = 232, tickLen = 5;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le périmètre et l&apos;aire.</p>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} width={svgW} height={svgH} className="block mx-auto">
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
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez la circonférence et l&apos;aire. (π = 3,14)</p>
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
          <span className="w-36 text-sm text-[var(--color-text-secondary)]">Circonférence =</span>
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


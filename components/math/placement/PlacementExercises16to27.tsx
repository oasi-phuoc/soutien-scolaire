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
function matchNum(input: string, expected: number, tol = 0.01): boolean {
  const v = parseNum(input.trim());
  return !isNaN(v) && Math.abs(v - expected) <= tol;
}
function matchInt(input: string, expected: number): boolean {
  const v = parseInt(input.replace(/[\s.]/g, "").replace(",", ""));
  return !isNaN(v) && v === expected;
}
function fmtInt(n: number): string {
  return n.toLocaleString("fr-CH");
}
function fmtDec(n: number, d: number): string {
  return n.toFixed(d).replace(".", ",");
}

// ── CorrectionInput ───────────────────────────────────────────────────────────

function CorrectionInput({ value, onChange, correct, validated, width = "w-16", placeholder = "" }: {
  value: string; onChange: (v: string) => void; correct: string;
  validated: boolean; width?: string; placeholder?: string;
}) {
  const isCorrect = validated && value.trim() === correct;
  const isWrong = validated && value.trim() !== correct;
  if (validated) {
    return (
      <span className={`inline-flex flex-col items-center justify-center ${width}`}>
        {isWrong && <span className="text-[10px] font-medium line-through text-amber-500 leading-tight">{value || "—"}</span>}
        <span className={`inline-flex items-center justify-center rounded border px-1 font-mono text-sm font-bold min-w-[2.5rem] ${
          isCorrect ? "border-green-300 bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400"
            : "border-amber-300 bg-amber-50 text-[var(--color-text-primary)] dark:bg-amber-950/30"
        }`}>{correct}</span>
      </span>
    );
  }
  return (
    <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      className={`${width} rounded border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 px-1 py-0.5 text-center font-mono text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-alg)] focus:ring-1 focus:ring-[var(--color-accent-alg)]/20`}
    />
  );
}

// ── Geometry answer row ───────────────────────────────────────────────────────

function GeoRow({ label, unit, value, answer, onChange, validated }: {
  label: string; unit: string; value: number;
  answer: string; onChange: (v: string) => void; validated: boolean;
}) {
  const correct = String(value);
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-sm text-[var(--color-text-secondary)]">{label} =</span>
      <CorrectionInput value={answer} onChange={onChange} correct={correct} validated={validated} width="w-20" />
      <span className="text-sm text-[var(--color-text-secondary)]">{unit}</span>
    </div>
  );
}

// ── Exercise 16 — Rectangle ───────────────────────────────────────────────────

export function Exercise16({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const w = randInt(3, 15); let h = randInt(3, 12);
    while (h === w) h = randInt(3, 12);
    return { w, h, perimeter: 2 * (w + h), area: w * h };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ansP, setAnsP] = useState("");
  const [ansA, setAnsA] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchInt(ansP, data.perimeter)) pts++;
    if (matchInt(ansA, data.area)) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  const { w, h } = data;
  const svgW = 200, svgH = 120;
  const rW = Math.min(140, w * 9), rH = Math.min(80, h * 6);
  const rx = (svgW - rW) / 2, ry = (svgH - rH) / 2;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le périmètre et l&apos;aire.</p>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} width={svgW} height={svgH} className="block mx-auto">
        <rect x={rx} y={ry} width={rW} height={rH}
          fill="var(--color-bg-secondary)" stroke="var(--color-text-primary)" strokeWidth="2" />
        <text x={rx + rW / 2} y={ry - 6} textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">{w} cm</text>
        <text x={rx + rW + 8} y={ry + rH / 2} textAnchor="start" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">{h} cm</text>
      </svg>
      <div className="space-y-2">
        <GeoRow label="Périmètre" unit="cm" value={data.perimeter} answer={ansP} onChange={setAnsP} validated={validated} />
        <GeoRow label="Aire" unit="cm²" value={data.area} answer={ansA} onChange={setAnsA} validated={validated} />
      </div>
    </div>
  );
}

// ── Exercise 17 — Number sequences (6 terms, 4 blanks) ───────────────────────

function genSeq17Int() {
  const steps = [];
  for (let s = 125; s <= 975; s += 25) steps.push(s);
  const step = steps[randInt(0, steps.length - 1)]!;
  const isAsc = Math.random() < 0.5;
  const maxStart = isAsc ? 999999 - 5 * step : 999999;
  const minStart = isAsc ? 100000 : 100000 + 5 * step;
  if (minStart > maxStart) return genSeq17Int();
  const start = randInt(Math.ceil(minStart / step), Math.floor(maxStart / step)) * step;
  const vals = Array.from({ length: 6 }, (_, i) => isAsc ? start + i * step : start - i * step);
  const pairStart = randInt(0, 4);
  return { vals, visPos: [pairStart, pairStart + 1] as [number, number], isAsc };
}

function genSeq17Dec() {
  const steps = Array.from({ length: 95 }, (_, i) => Math.round((i + 1) * 0.01 * 100) / 100);
  const step = steps[randInt(0, steps.length - 1)]!;
  const isAsc = Math.random() < 0.5;
  const minVal = 0.01, maxVal = 9.99;
  const totalSpan = 5 * step;
  if (totalSpan > maxVal - minVal) return genSeq17Dec();
  const startCandidates = Math.floor((maxVal - minVal - totalSpan) / step);
  const startSteps = isAsc ? randInt(0, startCandidates) : randInt(0, startCandidates);
  const start = Math.round((minVal + startSteps * step) * 100) / 100;
  const vals = Array.from({ length: 6 }, (_, i) => {
    const v = isAsc ? start + i * step : start - i * step;
    return Math.round(v * 100) / 100;
  });
  const pairStart = randInt(0, 4);
  return { vals, visPos: [pairStart, pairStart + 1] as [number, number], isAsc };
}

function SeqRow({ vals, visPos, isInt, answers, onChange, validated }: {
  vals: number[]; visPos: [number, number]; isInt: boolean;
  answers: string[]; onChange: (i: number, v: string) => void; validated: boolean;
}) {
  let blankIdx = 0;
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {vals.map((v, i) => {
        const isVisible = i === visPos[0] || i === visPos[1];
        const display = isInt ? fmtInt(v) : fmtDec(v, 2);
        if (isVisible) {
          return (
            <React.Fragment key={i}>
              {i > 0 && <span className="text-[var(--color-text-secondary)] text-sm">—</span>}
              <span className="font-mono text-sm font-semibold text-[var(--color-text-primary)]">{display}</span>
            </React.Fragment>
          );
        }
        const bi = blankIdx++;
        const correct = display;
        const ans = answers[bi] ?? "";
        return (
          <React.Fragment key={i}>
            {i > 0 && <span className="text-[var(--color-text-secondary)] text-sm">—</span>}
            <CorrectionInput value={ans} onChange={v2 => onChange(bi, v2)} correct={correct}
              validated={validated} width={isInt ? "w-24" : "w-16"} />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export function Exercise17({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const s1 = genSeq17Int();
    const s2 = genSeq17Dec();
    return { s1, s2 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ans1, setAns1] = useState<string[]>(["", "", "", ""]);
  const [ans2, setAns2] = useState<string[]>(["", "", "", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    const { s1, s2 } = data;
    let pts = 0;
    // Build blank positions for s1
    const blanks1 = s1.vals.map((_, i) => i !== s1.visPos[0] && i !== s1.visPos[1]);
    const blanksVals1 = s1.vals.filter((_, i) => blanks1[i]);
    const all1 = blanksVals1.every((v, i) => matchInt(ans1[i] ?? "", v));
    if (all1) pts += 1.5;
    const blanks2 = s2.vals.map((_, i) => i !== s2.visPos[0] && i !== s2.visPos[1]);
    const blanksVals2 = s2.vals.filter((_, i) => blanks2[i]);
    const all2 = blanksVals2.every((v, i) => matchNum(ans2[i] ?? "", v, 0.001));
    if (all2) pts += 1.5;
    onValidated(pts, 3);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">Complétez les suites. Tous les blancs d&apos;une suite doivent être corrects pour obtenir les points.</p>
      <div className="space-y-2">
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">Suite 1</span>
        <SeqRow vals={data.s1.vals} visPos={data.s1.visPos} isInt answers={ans1}
          onChange={(i, v) => setAns1(p => { const n = [...p]; n[i] = v; return n; })} validated={validated} />
      </div>
      <div className="space-y-2">
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">Suite 2</span>
        <SeqRow vals={data.s2.vals} visPos={data.s2.visPos} isInt={false} answers={ans2}
          onChange={(i, v) => setAns2(p => { const n = [...p]; n[i] = v; return n; })} validated={validated} />
      </div>
    </div>
  );
}

// ── Exercise 18 — Sort numbers ────────────────────────────────────────────────

export function Exercise18({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    // Series 1: 1 six-digit + 3 seven-digit integers, 2 seven-digit share a digit
    const n6 = randInt(100000, 999999);
    const base7 = randInt(1000000, 9999999);
    const n7a = base7;
    // Same digit at position 1 (hundreds-thousands digit)
    const sharedDigit = Math.floor((base7 % 1000000) / 100000);
    let n7b = randInt(1000000, 9999999);
    n7b = Math.floor(n7b / 1000000) * 1000000 + sharedDigit * 100000 + (n7b % 100000);
    const n7c = randInt(1000000, 9999999);
    const ints = shuffle([n6, n7a, n7b, n7c]);
    const sortedInts = [...ints].sort((a, b) => a - b);

    // Series 2: 4 decimals, same integer part (10–49), varying decimals
    const intPart = randInt(10, 49);
    const d1 = parseFloat((intPart + randInt(1, 9) / 10).toFixed(1));
    const d2 = parseFloat((intPart + randInt(10, 99) / 100).toFixed(2));
    // Confusing pair: e.g. 49.9 and 49.09
    const tenths = randInt(1, 9);
    const d3 = parseFloat((intPart + tenths / 10).toFixed(1));
    const d4 = parseFloat((intPart + Math.floor(tenths / 10 * 10) / 100 + randInt(1, 9) / 100).toFixed(2));
    const decs = shuffle([d1, d2, d3, d4]);
    const sortedDecs = [...decs].sort((a, b) => a - b);

    return { ints, sortedInts, decs, sortedDecs };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ans1, setAns1] = useState<string[]>(["", "", "", ""]);
  const [ans2, setAns2] = useState<string[]>(["", "", "", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    const ok1 = data.sortedInts.every((v, i) => matchInt(ans1[i] ?? "", v));
    if (ok1) pts++;
    const ok2 = data.sortedDecs.every((v, i) => matchNum(ans2[i] ?? "", v, 0.001));
    if (ok2) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  const ordinals = ["1er", "2e", "3e", "4e"];

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">Classez du plus petit au plus grand.</p>
      <div className="space-y-3">
        <p className="text-xs font-bold text-[var(--color-accent-alg)]">Série 1 — grands nombres</p>
        <div className="flex flex-wrap gap-2 font-mono text-sm text-[var(--color-text-primary)]">
          {data.ints.map((n, i) => <span key={i} className="rounded bg-[var(--color-bg-secondary)] px-2 py-0.5">{fmtInt(n)}</span>)}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {ordinals.map((ord, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-8 text-xs text-[var(--color-text-secondary)]">{ord}</span>
              <CorrectionInput value={ans1[i] ?? ""} onChange={v => setAns1(p => { const n = [...p]; n[i] = v; return n; })}
                correct={fmtInt(data.sortedInts[i]!)} validated={validated} width="w-28" />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs font-bold text-[var(--color-accent-alg)]">Série 2 — nombres décimaux</p>
        <div className="flex flex-wrap gap-2 font-mono text-sm text-[var(--color-text-primary)]">
          {data.decs.map((n, i) => <span key={i} className="rounded bg-[var(--color-bg-secondary)] px-2 py-0.5">{fmtDec(n, n % 1 === Math.round(n * 10) / 10 % 1 ? 1 : 2)}</span>)}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {ordinals.map((ord, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-8 text-xs text-[var(--color-text-secondary)]">{ord}</span>
              <CorrectionInput value={ans2[i] ?? ""} onChange={v => setAns2(p => { const n = [...p]; n[i] = v; return n; })}
                correct={String(data.sortedDecs[i]!).replace(".", ",")} validated={validated} width="w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Exercise 19 — Column arithmetic with decimals ────────────────────────────

function DecColGrid({ aStr, bStr, op, result, answer, onChange, validated }: {
  aStr: string; bStr: string; op: "+" | "-";
  result: number; answer: string; onChange: (v: string) => void; validated: boolean;
}) {
  const correctStr = fmtDec(result, 2);
  const isCorrect = validated && matchNum(answer, result, 0.005);
  const isWrong = validated && !isCorrect;
  const maxLen = Math.max(aStr.length, bStr.length) + 1;
  return (
    <div className="inline-flex flex-col items-end font-mono text-base border border-[var(--color-border-default)] rounded-lg px-3 py-2 bg-[var(--color-bg-secondary)]">
      <span className="text-[var(--color-text-primary)] whitespace-pre">{aStr.padStart(maxLen)}</span>
      <div className="flex items-center gap-0.5 w-full">
        <span className="text-[var(--color-text-secondary)]">{op}</span>
        <span className="text-[var(--color-text-primary)] flex-1 text-right whitespace-pre">{bStr.padStart(maxLen - 1)}</span>
      </div>
      <div className="w-full h-px bg-[var(--color-text-primary)] my-1" />
      {validated ? (
        <span className="inline-flex flex-col items-end">
          {isWrong && <span className="text-[10px] line-through text-amber-500">{answer || "—"}</span>}
          <span className={`text-sm font-bold ${isCorrect ? "text-green-700 dark:text-green-400" : "text-[var(--color-text-primary)]"}`}>{correctStr}</span>
        </span>
      ) : (
        <input type="text" value={answer} onChange={e => onChange(e.target.value)}
          className="w-24 rounded border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-1 py-0.5 text-right font-mono text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-alg)]"
        />
      )}
    </div>
  );
}

export function Exercise19({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    function dec2(a: number, b: number, op: "+" | "-") {
      const aStr = fmtDec(a, 2); const bStr = fmtDec(b, 2);
      return { aStr, bStr, op, result: op === "+" ? a + b : a - b };
    }
    function decMix(a: number, b: number, op: "+" | "-") {
      const aStr = fmtDec(a, 1); const bStr = fmtDec(b, 2);
      return { aStr, bStr, op, result: op === "+" ? a + b : a - b };
    }
    const a1 = randInt(10, 90) + randInt(1, 99) / 100;
    const b1 = randInt(10, 90) + randInt(1, 99) / 100;
    const a2 = randInt(10, 90) + randInt(1, 9) / 10;
    const b2 = randInt(1, 9) + randInt(1, 99) / 100;
    let a3 = randInt(20, 90) + randInt(1, 99) / 100;
    let b3 = randInt(5, 40) + randInt(1, 99) / 100;
    if (b3 > a3) [a3, b3] = [b3, a3];
    let a4 = randInt(20, 90) + randInt(1, 9) / 10;
    const b4 = randInt(1, 9) + randInt(1, 99) / 100;
    if (b4 > a4) { a4 += 10; }
    return [
      dec2(Math.round(a1 * 100) / 100, Math.round(b1 * 100) / 100, "+"),
      decMix(Math.round(a2 * 10) / 10, Math.round(b2 * 100) / 100, "+"),
      dec2(Math.round(a3 * 100) / 100, Math.round(b3 * 100) / 100, "-"),
      decMix(Math.round(a4 * 10) / 10, Math.round(b4 * 100) / 100, "-"),
    ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(["", "", "", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => { if (matchNum(answers[i] ?? "", q.result, 0.005)) pts++; });
    onValidated(pts, 4);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez en colonnes. Inscrivez le résultat.</p>
      <div className="flex flex-wrap gap-4">
        {data.map((q, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <DecColGrid aStr={q.aStr} bStr={q.bStr} op={q.op} result={q.result}
              answer={answers[i] ?? ""} onChange={v => setAnswers(p => { const n = [...p]; n[i] = v; return n; })} validated={validated} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 20 — Column multiplication with decimals ────────────────────────

export function Exercise20({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const a1 = randInt(111, 999);
    const b1d = randInt(2, 9); const b1 = b1d / 10;
    const a2i = randInt(11, 99); const a2d = randInt(1, 99); const a2 = a2i + a2d / 100;
    const b2d = randInt(2, 9); const b2 = b2d / 10;
    return [
      { aStr: String(a1), bStr: fmtDec(b1, 1), result: Math.round(a1 * b1d) / 10 },
      { aStr: fmtDec(Math.round(a2 * 100) / 100, 2), bStr: fmtDec(b2, 1), result: Math.round(a2i * 100 + a2d) * b2d / 1000 },
    ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(["", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => { if (matchNum(answers[i] ?? "", q.result, 0.01)) pts++; });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez en colonnes. Inscrivez le résultat.</p>
      <div className="flex flex-wrap gap-4">
        {data.map((q, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <DecColGrid aStr={q.aStr} bStr={q.bStr} op="+" result={q.result}
              answer={answers[i] ?? ""} onChange={v => setAnswers(p => { const n = [...p]; n[i] = v; return n; })} validated={validated} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 21 — Column division with decimals ──────────────────────────────

export function Exercise21({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    // Grid 1: dividend 5.0–9.9 (1 decimal), divisor 2–5
    const d1 = randInt(2, 5);
    const q1int = randInt(10, 19);
    const dividend1 = Math.round(d1 * q1int) / 10;
    const quotient1 = q1int / 10;

    // Grid 2: dividend 11–99 (2 decimals), divisor 2–5
    const d2 = randInt(2, 5);
    const q2int = randInt(100, 199);
    const dividend2 = Math.round(d2 * q2int) / 100;
    const quotient2 = q2int / 100;

    return [
      { dividend: dividend1, divisor: d1, quotient: quotient1, decPlaces: 1 },
      { dividend: dividend2, divisor: d2, quotient: quotient2, decPlaces: 2 },
    ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(["", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => { if (matchNum(answers[i] ?? "", q.quotient, 0.005)) pts++; });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez les divisions. Résultat exact (sans reste).</p>
      <div className="flex flex-wrap gap-4">
        {data.map((q, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <div className="inline-flex flex-col items-end font-mono text-base border border-[var(--color-border-default)] rounded-lg px-3 py-2 bg-[var(--color-bg-secondary)]">
              <div className="flex items-center gap-2">
                <span className="text-[var(--color-text-primary)]">{fmtDec(q.dividend, q.decPlaces)}</span>
                <span className="text-[var(--color-text-secondary)]">÷</span>
                <span className="text-[var(--color-text-primary)]">{q.divisor}</span>
                <span className="text-[var(--color-text-secondary)]">=</span>
                <CorrectionInput value={answers[i] ?? ""} onChange={v => setAnswers(p => { const n = [...p]; n[i] = v; return n; })}
                  correct={fmtDec(q.quotient, q.decPlaces)} validated={validated} width="w-16" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 22 — Color fractions ────────────────────────────────────────────

function FractionColorCard({ num, den, answer, onChange, validated }: {
  num: number; den: number; answer: number; onChange: (v: number) => void; validated: boolean;
}) {
  const isCorrect = validated && answer === num;
  const cellW = Math.min(36, Math.floor(200 / den));
  const totalW = cellW * den;

  return (
    <div className="space-y-2">
      <p className="text-sm text-[var(--color-text-primary)]">
        Colorie <span className="font-bold text-[var(--color-accent-alg)]">{num}/{den}</span>
      </p>
      <svg viewBox={`0 0 ${totalW + 2} 42`} width={totalW + 2} height={42} className="block">
        {Array.from({ length: den }, (_, i) => {
          const colored = i < answer;
          return (
            <rect key={i} x={1 + i * cellW} y={1} width={cellW - 1} height={40}
              fill={colored ? "var(--color-accent-alg)" : "var(--color-bg-secondary)"}
              fillOpacity={colored ? 0.6 : 1}
              stroke="var(--color-border-default)" strokeWidth="1"
              style={{ cursor: validated ? "default" : "pointer" }}
              onClick={() => { if (!validated) onChange(i + 1 === answer ? 0 : i + 1); }}
            />
          );
        })}
      </svg>
      {validated && (
        <p className={`text-xs font-semibold ${isCorrect ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"}`}>
          {isCorrect ? "✓ Correct" : `✗ Il fallait colorier ${num} case${num > 1 ? "s" : ""}`}
        </p>
      )}
    </div>
  );
}

export function Exercise22({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const questions = useMemo(() => {
    const qs = [];
    for (let i = 0; i < 4; i++) {
      const den = randInt(4, 10);
      const num = randInt(1, den - 1);
      qs.push({ num, den });
    }
    return qs;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => { if ((answers[i] ?? 0) === q.num) pts += 0.5; });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Cliquez sur les cases pour colorier la fraction demandée.</p>
      <div className="grid grid-cols-2 gap-5">
        {questions.map((q, i) => (
          <div key={i}>
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <FractionColorCard num={q.num} den={q.den} answer={answers[i] ?? 0}
              onChange={v => setAnswers(p => { const n = [...p]; n[i] = v; return n; })} validated={validated} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 23 — Length unit conversions ────────────────────────────────────

const LENGTH_UNITS = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convFactor(from: string, to: string): number {
  const fi = LENGTH_UNITS.indexOf(from), ti = LENGTH_UNITS.indexOf(to);
  return Math.pow(10, ti - fi);
}

export function Exercise23({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const questions = useMemo(() => {
    const qs: { value: number; from: string; to: string; result: number; decPlaces: number }[] = [];
    // 4 integer conversions, 4 decimal
    const pairs = [
      ["km", "m"], ["m", "cm"], ["km", "hm"], ["cm", "mm"],
      ["m", "km"], ["cm", "m"], ["mm", "m"], ["hm", "m"],
    ];
    const shuffled = shuffle(pairs).slice(0, 8);
    shuffled.forEach(([from, to], i) => {
      const factor = convFactor(from!, to!);
      let value: number, decPlaces: number;
      if (i < 4) {
        value = randInt(1, 999);
        decPlaces = 0;
      } else {
        const intPart = randInt(1, 99);
        const decPart = randInt(1, 9);
        value = intPart + decPart / 10;
        decPlaces = 1;
      }
      const result = Math.round(value * factor * 1000) / 1000;
      qs.push({ value, from: from!, to: to!, result, decPlaces });
    });
    return qs;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(() => Array(8).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => { if (matchNum(answers[i] ?? "", q.result, q.result > 1 ? 0.01 : 0.0001)) pts += 0.5; });
    onValidated(pts, 4);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Transformez dans l&apos;unité indiquée.</p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {questions.map((q, i) => {
          const displayVal = q.decPlaces > 0 ? fmtDec(q.value, 1) : String(q.value);
          const correct = q.result % 1 === 0 ? String(q.result) : fmtDec(q.result, q.result.toString().split(".")[1]?.length ?? 1);
          return (
            <div key={i} className="flex items-center gap-1.5 text-sm">
              <span className="text-xs font-bold text-[var(--color-accent-alg)] w-4">{i + 1}.</span>
              <span className="font-mono text-[var(--color-text-primary)]">{displayVal} {q.from}</span>
              <span className="text-[var(--color-text-secondary)]">=</span>
              <CorrectionInput value={answers[i] ?? ""} onChange={v => setAnswers(p => { const n = [...p]; n[i] = v; return n; })}
                correct={correct} validated={validated} width="w-20" />
              <span className="font-mono text-[var(--color-text-secondary)]">{q.to}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Exercise 24 — Decimal inline calculations ─────────────────────────────────

const SPECIAL_FACTORS = [0.2, 0.25, 0.5, 0.75];

export function Exercise24({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const questions = useMemo(() => {
    function r1(min: number, max: number) { return Math.round((Math.random() * (max - min) + min) * 10) / 10; }
    const qs: { label: string; result: number }[] = [];
    // 1. int + dec
    const a1 = randInt(10, 50), b1 = r1(1, 9);
    qs.push({ label: `${a1} + ${fmtDec(b1, 1)}`, result: Math.round((a1 + b1) * 10) / 10 });
    // 2. dec + dec
    const a2 = r1(5, 20), b2 = r1(1, 10);
    qs.push({ label: `${fmtDec(a2, 1)} + ${fmtDec(b2, 1)}`, result: Math.round((a2 + b2) * 10) / 10 });
    // 3. int - dec
    const a3 = randInt(15, 50), b3 = r1(1, 9);
    qs.push({ label: `${a3} − ${fmtDec(b3, 1)}`, result: Math.round((a3 - b3) * 10) / 10 });
    // 4. dec - dec
    const a4 = r1(10, 30); const b4 = r1(1, a4 - 1);
    qs.push({ label: `${fmtDec(a4, 1)} − ${fmtDec(b4, 1)}`, result: Math.round((a4 - b4) * 10) / 10 });
    // 5. int × special factor
    const f5 = SPECIAL_FACTORS[randInt(0, 3)]!;
    let a5 = randInt(4, 20);
    while ((a5 * f5 * 100) % 1 !== 0) a5++;
    qs.push({ label: `${a5} × ${fmtDec(f5, f5 === 0.2 || f5 === 0.5 ? 1 : 2)}`, result: Math.round(a5 * f5 * 100) / 100 });
    // 6. dec × int
    const a6 = r1(1, 9), b6 = randInt(2, 8);
    qs.push({ label: `${fmtDec(a6, 1)} × ${b6}`, result: Math.round(a6 * b6 * 10) / 10 });
    // 7. int ÷ special factor
    const f7 = SPECIAL_FACTORS[randInt(0, 3)]!;
    let a7 = randInt(2, 15);
    while ((a7 / f7) % 1 !== 0) a7++;
    qs.push({ label: `${a7} ÷ ${fmtDec(f7, f7 === 0.2 || f7 === 0.5 ? 1 : 2)}`, result: Math.round(a7 / f7 * 100) / 100 });
    // 8. dec ÷ int
    const b8 = randInt(2, 6); const q8 = r1(1, 9);
    const a8 = Math.round(q8 * b8 * 10) / 10;
    qs.push({ label: `${fmtDec(a8, 1)} ÷ ${b8}`, result: q8 });
    return qs;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(() => Array(8).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => { if (matchNum(answers[i] ?? "", q.result, 0.01)) pts += 0.5; });
    onValidated(pts, 4);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez mentalement.</p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {questions.map((q, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-[var(--color-accent-alg)] w-4">{i + 1}.</span>
            <span className="font-mono text-sm text-[var(--color-text-primary)] min-w-[7rem]">{q.label} =</span>
            <CorrectionInput value={answers[i] ?? ""} onChange={v => setAnswers(p => { const n = [...p]; n[i] = v; return n; })}
              correct={String(q.result).replace(".", ",")} validated={validated} width="w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 25 — Parallelogram ───────────────────────────────────────────────

export function Exercise25({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const b = randInt(8, 16), a = randInt(4, 10);
    const h = randInt(3, a - 1 < 3 ? 3 : a - 1);
    return { b, a, h, perimeter: 2 * (a + b), area: b * h };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ansP, setAnsP] = useState("");
  const [ansA, setAnsA] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchInt(ansP, data.perimeter)) pts++;
    if (matchInt(ansA, data.area)) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  const { b, a, h } = data;
  const offset = Math.round(h * 0.6);
  const svgW = 220, svgH = 130;
  const bPx = b * 10, hPx = h * 8;
  const x0 = 20, y0 = svgH - 30;
  const pts2 = `${x0},${y0} ${x0 + offset},${y0 - hPx} ${x0 + offset + bPx},${y0 - hPx} ${x0 + bPx},${y0}`;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le périmètre et l&apos;aire.</p>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} width={svgW} height={svgH} className="block mx-auto">
        <polygon points={pts2} fill="var(--color-bg-secondary)" stroke="var(--color-text-primary)" strokeWidth="2" />
        <text x={x0 + bPx / 2 + offset / 2} y={y0 - hPx - 8} textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">{b} cm</text>
        <text x={x0 + bPx + offset + 6} y={y0 - hPx / 2} textAnchor="start" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">{a} cm</text>
        <line x1={x0 + bPx} y1={y0} x2={x0 + bPx} y2={y0 - hPx} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
        <text x={x0 + bPx + 6} y={y0 - hPx / 2 + 14} textAnchor="start" fontSize="11" fill="var(--color-accent-alg)">{h}</text>
      </svg>
      <div className="space-y-2">
        <GeoRow label="Périmètre" unit="cm" value={data.perimeter} answer={ansP} onChange={setAnsP} validated={validated} />
        <GeoRow label="Aire" unit="cm²" value={data.area} answer={ansA} onChange={setAnsA} validated={validated} />
      </div>
    </div>
  );
}

// ── Exercise 26 — Triangle ────────────────────────────────────────────────────

const PYTH_TRIPLES = [[3,4,5],[5,12,13],[6,8,10],[8,15,17]] as const;

export function Exercise26({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const [pa, pb, pc] = PYTH_TRIPLES[randInt(0, PYTH_TRIPLES.length - 1)]!;
    const k = randInt(1, 2);
    const a = pa * k, b = pb * k, c = pc * k;
    return { a, b, c, perimeter: a + b + c, area: (a * b) / 2 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ansP, setAnsP] = useState("");
  const [ansA, setAnsA] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchInt(ansP, data.perimeter)) pts++;
    if (matchInt(ansA, data.area)) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  const { a, b, c } = data;
  const aPx = Math.min(a * 8, 120), bPx = Math.min(b * 6, 90);
  const svgW = 220, svgH = 140;
  const x0 = 20, y0 = svgH - 20;
  const triPts = `${x0},${y0} ${x0 + aPx},${y0} ${x0},${y0 - bPx}`;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le périmètre et l&apos;aire.</p>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} width={svgW} height={svgH} className="block mx-auto">
        <polygon points={triPts} fill="var(--color-bg-secondary)" stroke="var(--color-text-primary)" strokeWidth="2" />
        <text x={x0 + aPx / 2} y={y0 + 14} textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">{a} cm</text>
        <text x={x0 - 22} y={y0 - bPx / 2} textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">{b} cm</text>
        <text x={x0 + aPx / 2 + 14} y={y0 - bPx / 2} textAnchor="start" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">{c} cm</text>
      </svg>
      <div className="space-y-2">
        <GeoRow label="Périmètre" unit="cm" value={data.perimeter} answer={ansP} onChange={setAnsP} validated={validated} />
        <GeoRow label="Aire" unit="cm²" value={data.area} answer={ansA} onChange={setAnsA} validated={validated} />
      </div>
    </div>
  );
}

// ── Exercise 27 — Losange ─────────────────────────────────────────────────────

export function Exercise27({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    // Use (3,4,5) triple for half-diagonals: d1/2=3k, d2/2=4k, side=5k
    const triples = [[3,4,5],[5,12,13]] as const;
    const [pa, pb, pc] = triples[randInt(0, triples.length - 1)]!;
    const k = randInt(1, 2);
    const d1 = pa * k * 2, d2 = pb * k * 2, side = pc * k;
    return { d1, d2, side, perimeter: 4 * side, area: (d1 * d2) / 2 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ansP, setAnsP] = useState("");
  const [ansA, setAnsA] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchInt(ansP, data.perimeter)) pts++;
    if (matchInt(ansA, data.area)) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  const { d1, d2 } = data;
  const svgW = 220, svgH = 140;
  const cx = svgW / 2, cy = svgH / 2;
  const rx = Math.min(d1 * 5, 90), ry = Math.min(d2 * 4, 55);
  const diaPts = `${cx},${cy - ry} ${cx + rx},${cy} ${cx},${cy + ry} ${cx - rx},${cy}`;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le périmètre et l&apos;aire.</p>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} width={svgW} height={svgH} className="block mx-auto">
        <polygon points={diaPts} fill="var(--color-bg-secondary)" stroke="var(--color-text-primary)" strokeWidth="2" />
        <line x1={cx - rx} y1={cy} x2={cx + rx} y2={cy} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="3,3" />
        <line x1={cx} y1={cy - ry} x2={cx} y2={cy + ry} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="3,3" />
        <text x={cx} y={cy + ry + 14} textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">d₁ = {d1} cm</text>
        <text x={cx + rx + 6} y={cy} textAnchor="start" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">d₂ = {d2} cm</text>
        <text x={cx + rx / 2 + 6} y={cy - ry / 2 - 4} textAnchor="start" fontSize="11" fill="var(--color-accent-alg)">{data.side} cm</text>
      </svg>
      <div className="space-y-2">
        <GeoRow label="Périmètre" unit="cm" value={data.perimeter} answer={ansP} onChange={setAnsP} validated={validated} />
        <GeoRow label="Aire" unit="cm²" value={data.area} answer={ansA} onChange={setAnsA} validated={validated} />
      </div>
    </div>
  );
}

"use client";
import React, { useState, useMemo, useEffect } from "react";
import type { PlacementExerciseProps } from "./PlacementExercises1to15";
import {
  FractionDisplay,
  FractionShape,
  ShapesRow,
  computeScale,
  preColorFlat,
} from "@/components/math/A4ModuleContent";
import type { ShapeKind } from "@/components/math/A4ModuleContent";

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

function CorrectionInput({ value, onChange, correct: _correct, validated, width = "w-16", placeholder = "" }: {
  value: string; onChange: (v: string) => void; correct: string;
  validated: boolean; width?: string; placeholder?: string;
}) {
  return (
    <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      disabled={validated}
      className={`${width} h-9 rounded border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 px-1 text-center font-mono text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-alg)] focus:ring-1 focus:ring-[var(--color-accent-alg)]/20 disabled:opacity-60`}
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
  const svgW = 260, svgH = 140;
  const rW = 150, rH = 90;
  const rx = 20, ry = 25;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le périmètre et l&apos;aire.</p>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} width={svgW} height={svgH} className="block mx-auto">
        <rect x={rx} y={ry} width={rW} height={rH}
          fill="var(--color-accent-alg)" fillOpacity={0.15} stroke="var(--color-accent-alg)" strokeWidth="2" />
        <text x={rx + rW / 2} y={ry - 8} textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">{w} cm</text>
        <text x={rx + rW + 10} y={ry + rH / 2} textAnchor="start" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">{h} cm</text>
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
  // gaps: multiples of 5, 115–995, not ending in 00
  const steps: number[] = [];
  for (let s = 115; s <= 995; s += 5) {
    if (s % 100 !== 0) steps.push(s);
  }
  const step = steps[randInt(0, steps.length - 1)]!;
  const isAsc = Math.random() < 0.5;
  const totalSpan = 5 * step;
  const startMin = isAsc ? 1000 : 1000 + totalSpan;
  const startMax = isAsc ? 50000 - totalSpan : 50000;
  const start = randInt(startMin, startMax);
  const vals = Array.from({ length: 6 }, (_, i) => isAsc ? start + i * step : start - i * step);
  const pairStart = randInt(1, 3);
  return { vals, visPos: [pairStart, pairStart + 1] as [number, number], isAsc };
}

function genSeq17Dec() {
  // gaps: odd multiples of 0.05 in [0.05, 0.95] (don't end in 0)
  // work in units of 0.05 to avoid float precision issues
  const oddK = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  const stepK = oddK[randInt(0, oddK.length - 1)]!;
  const isAsc = Math.random() < 0.5;
  // Range: 1 to 199 units of 0.05 (= 0.05 to 9.95)
  const spanK = 5 * stepK;
  const startMinK = isAsc ? 1 : 1 + spanK;
  const startMaxK = isAsc ? 199 - spanK : 199;
  const startK = randInt(startMinK, startMaxK);
  const vals = Array.from({ length: 6 }, (_, i) => {
    const u = isAsc ? startK + i * stepK : startK - i * stepK;
    return Math.round(u * 5) / 100; // u × 0.05
  });
  const pairStart = randInt(1, 3);
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
        const pillCls = isInt
          ? "h-9 w-28 inline-flex items-center justify-center rounded-full font-mono text-sm font-semibold"
          : "h-9 w-20 inline-flex items-center justify-center rounded-full font-mono text-sm font-semibold";
        if (isVisible) {
          return (
            <div key={i} className={`${pillCls} border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]`}>{display}</div>
          );
        }
        const bi = blankIdx++;
        const correct = display;
        const ans = answers[bi] ?? "";
        return (
          <CorrectionInput key={i} value={ans} onChange={v2 => onChange(bi, v2)} correct={correct}
            validated={validated} width={isInt ? "w-28 rounded-full" : "w-20 rounded-full"} />
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
      <p className="text-sm text-[var(--color-text-secondary)]">Complétez les suites de nombres.</p>
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

// ── Exercise 18 — Sort numbers (click mechanism) ─────────────────────────────

function OrderingChips({ numbers, selected, onToggle, validated, fmt, desc = false, chipW = "w-28" }: {
  numbers: number[]; selected: number[];
  onToggle: (n: number) => void; validated: boolean;
  fmt: (n: number) => string; desc?: boolean; chipW?: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {numbers.map((n, ni) => {
          const isSelected = selected.includes(n);
          const selIdx = selected.indexOf(n);
          let cls = `${chipW} flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-mono font-bold transition-colors cursor-pointer `;
          if (!validated) {
            cls += isSelected
              ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white"
              : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]";
          } else {
            cls += isSelected
              ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white opacity-70"
              : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-40";
          }
          return (
            <button key={ni} type="button" disabled={validated} onClick={() => onToggle(n)} className={cls}>
              {selIdx >= 0 && <span className="mr-1.5 text-xs opacity-75">{selIdx + 1}.</span>}
              {fmt(n)}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center gap-1 min-h-[1.5rem]">
        <span className="text-xs font-bold text-[var(--color-accent-alg)] mr-1">Votre ordre :</span>
        {selected.length > 0
          ? selected.map((n, si) => (
            <React.Fragment key={si}>
              <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">{fmt(n)}</span>
              {si < selected.length - 1 && <span className="text-[var(--color-text-secondary)] text-xs mx-0.5">{desc ? ">" : "<"}</span>}
            </React.Fragment>
          ))
          : <span className="text-xs text-[var(--color-text-secondary)] italic">—</span>}
      </div>
    </div>
  );
}

export function Exercise18({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    // Series 1: 3 seven-digit + 1 six-digit number
    //   n1 & n2 (7-digit) share first 3 digits (ABC)
    //   n1 & n3 (7-digit) share last 3 digits (EFG)
    //   n4 is the 6-digit number
    const top3 = randInt(100, 999);       // shared first 3 digits for n1 & n2
    let top3b = randInt(100, 999);        // first 3 digits for n3
    while (top3b === top3) top3b = randInt(100, 999);
    const bot3 = randInt(100, 999);       // shared last 3 digits for n1 & n3
    let bot3b = randInt(100, 999);        // last 3 digits for n2
    while (bot3b === bot3) bot3b = randInt(100, 999);
    const n1 = top3 * 10000 + randInt(0, 9) * 1000 + bot3;
    const n2 = top3 * 10000 + randInt(0, 9) * 1000 + bot3b;
    const n3 = top3b * 10000 + randInt(0, 9) * 1000 + bot3;
    const n4 = randInt(100000, 999999); // 6-digit number
    const ints = shuffle([n1, n2, n3, n4]);
    const sortedInts = [...ints].sort((a, b) => a - b);

    // Series 2: 4 decimals, same integer part (10–49), varying decimals
    const intPart = randInt(10, 49);
    const d1 = parseFloat((intPart + randInt(1, 9) / 10).toFixed(1));
    const d2 = parseFloat((intPart + randInt(10, 99) / 100).toFixed(2));
    const tenths = randInt(1, 9);
    const d3 = parseFloat((intPart + tenths / 10).toFixed(1));
    const d4 = parseFloat((intPart + Math.floor(tenths / 10 * 10) / 100 + randInt(1, 9) / 100).toFixed(2));
    const decs = shuffle([d1, d2, d3, d4]);
    const sortedDecs = [...decs].sort((a, b) => a - b);
    const sortedDecsDesc = [...sortedDecs].reverse();

    return { ints, sortedInts, decs, sortedDecs, sortedDecsDesc };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [sel1, setSel1] = useState<number[]>([]);
  const [sel2, setSel2] = useState<number[]>([]);

  const toggle = (setter: React.Dispatch<React.SetStateAction<number[]>>) => (n: number) => {
    setter(prev => prev.includes(n) ? prev.filter(x => x !== n) : [...prev, n]);
  };

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    const ok1 = sel1.length === data.sortedInts.length && data.sortedInts.every((v, i) => sel1[i] === v);
    if (ok1) pts++;
    const ok2 = sel2.length === data.sortedDecsDesc.length && data.sortedDecsDesc.every((v, i) => sel2[i] === v);
    if (ok2) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  const fmtDec2 = (n: number) => fmtDec(n, String(n).includes(".") && String(n).split(".")[1]!.length === 2 ? 2 : 1);

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">Classez les nombres dans l&apos;ordre demandée.</p>
      <div className="space-y-3">
        <p className="text-sm font-bold text-[var(--color-accent-alg)]">Série 1</p>
        <p className="text-sm text-[var(--color-text-secondary)]">Dans l&apos;ordre croissant (plus petit au plus grand)</p>
        <OrderingChips numbers={data.ints} selected={sel1} onToggle={toggle(setSel1)}
          validated={validated} fmt={fmtInt} chipW="w-32" />
      </div>
      <div className="space-y-3">
        <p className="text-sm font-bold text-[var(--color-accent-alg)]">Série 2</p>
        <p className="text-sm text-[var(--color-text-secondary)]">Dans l&apos;ordre décroissant (plus grand au plus petit)</p>
        <OrderingChips numbers={data.decs} selected={sel2} onToggle={toggle(setSel2)}
          validated={validated} fmt={fmtDec2} desc chipW="w-24" />
      </div>
    </div>
  );
}

// ── Exercise 19 — Column arithmetic with decimals (A5.4 Ex9 layout) ──────────

// Parse a decimal string like "45,67" or "3,5" into hundredths digits [C,D,U,dx,cx]
function decStrToDigits(s: string): [number, number, number, number, number] {
  const normalized = s.replace(",", ".");
  const val = parseFloat(normalized);
  if (isNaN(val)) return [0, 0, 0, 0, 0];
  const hundredths = Math.round(val * 100);
  const cx = hundredths % 10;
  const dx = Math.floor(hundredths / 10) % 10;
  const u  = Math.floor(hundredths / 100) % 10;
  const d  = Math.floor(hundredths / 1000) % 10;
  const c  = Math.floor(hundredths / 10000) % 10;
  return [c, d, u, dx, cx];
}

function DecColGridFull({ aStr, bStr, op, aAnswers, bAnswers, resultAnswers, carries,
  onAChange, onBChange, onResultChange, onCarryChange, validated }: {
  aStr: string; bStr: string; op: "+" | "-";
  aAnswers: string[];      // 5 cells: C, D, U, dx, cx
  bAnswers: string[];
  resultAnswers: string[];
  carries: string[];
  onAChange: (col: number, val: string) => void;
  onBChange: (col: number, val: string) => void;
  onResultChange: (col: number, val: string) => void;
  onCarryChange: (col: number, val: string) => void;
  validated: boolean;
}) {
  const labels = ["C", "D", "U", "", "dx", "cx"];

  const commaCell = (key: string) => (
    <td key={key} className="w-8 text-center">
      <div className="h-8 w-8 flex items-center justify-center font-mono text-base font-bold text-[var(--color-text-secondary)]">,</div>
    </td>
  );

  const inputStyle = "h-8 w-8 rounded border text-center font-mono text-sm outline-none transition-colors bg-[var(--color-accent-alg)]/10 border-[var(--color-accent-alg)]/40 focus:border-[var(--color-accent-alg)] disabled:opacity-60";
  const carryStyle = "h-6 w-6 rounded border text-center font-mono text-xs outline-none transition-colors bg-[var(--color-bg-secondary)] border-[var(--color-border-default)] focus:border-[var(--color-accent-alg)] disabled:opacity-60 text-[var(--color-text-secondary)]";

  const rowInput = (answers: string[], onChange: (col: number, val: string) => void, col: number) => (
    <td key={col} className="w-8 p-0.5 text-center">
      <input type="text" inputMode="numeric" maxLength={1} value={answers[col] ?? ""}
        disabled={validated}
        onChange={e => onChange(col, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
        className={inputStyle} />
    </td>
  );

  const carryInput = (col: number) => (
    <td key={col} className="w-8 p-0.5 text-center">
      <input type="text" inputMode="numeric" maxLength={1} value={carries[col] ?? ""}
        disabled={validated}
        onChange={e => onCarryChange(col, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
        className={carryStyle} />
    </td>
  );

  return (
    <div className="p-1">
      <p className="mb-2 text-center text-sm font-mono font-bold text-[var(--color-text-primary)]">
        {aStr} {op} {bStr}
      </p>
      <table className="mx-auto border-collapse">
        <thead>
          <tr>
            <td className="w-6" />
            {labels.map((l, i) => (
              l === "" ? <th key={i} className="w-8" /> :
              <th key={i} className="w-8 text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{l}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Carry row */}
          <tr>
            <td className="pr-1 text-center text-[10px] font-bold text-[var(--color-text-secondary)]">R</td>
            {carryInput(0)}{carryInput(1)}{carryInput(2)}
            <td className="w-8" />
            {carryInput(3)}{carryInput(4)}
          </tr>
          {/* Row A */}
          <tr>
            <td />
            {rowInput(aAnswers, onAChange, 0)}{rowInput(aAnswers, onAChange, 1)}{rowInput(aAnswers, onAChange, 2)}
            {commaCell("a-comma")}
            {rowInput(aAnswers, onAChange, 3)}{rowInput(aAnswers, onAChange, 4)}
          </tr>
          {/* Row B */}
          <tr>
            <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">{op}</td>
            {rowInput(bAnswers, onBChange, 0)}{rowInput(bAnswers, onBChange, 1)}{rowInput(bAnswers, onBChange, 2)}
            {commaCell("b-comma")}
            {rowInput(bAnswers, onBChange, 3)}{rowInput(bAnswers, onBChange, 4)}
          </tr>
          <tr><td colSpan={7}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          {/* Result row */}
          <tr>
            <td />
            {rowInput(resultAnswers, onResultChange, 0)}{rowInput(resultAnswers, onResultChange, 1)}{rowInput(resultAnswers, onResultChange, 2)}
            {commaCell("r-comma")}
            {rowInput(resultAnswers, onResultChange, 3)}{rowInput(resultAnswers, onResultChange, 4)}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function Exercise19({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    function mkQ(a: number, b: number, op: "+" | "-", decA: number, decB: number) {
      const aStr = fmtDec(a, decA); const bStr = fmtDec(b, decB);
      const result = op === "+" ? a + b : a - b;
      const resultDigits = decStrToDigits(fmtDec(Math.round(result * 100) / 100, 2));
      return { aStr, bStr, op, result, resultDigits };
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
      mkQ(Math.round(a1 * 100) / 100, Math.round(b1 * 100) / 100, "+", 2, 2),
      mkQ(Math.round(a2 * 10) / 10, Math.round(b2 * 100) / 100, "+", 1, 2),
      mkQ(Math.round(a3 * 100) / 100, Math.round(b3 * 100) / 100, "-", 2, 2),
      mkQ(Math.round(a4 * 10) / 10, Math.round(b4 * 100) / 100, "-", 1, 2),
    ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [aAnswers, setAAnswers] = useState<string[][]>(() => Array.from({length: 4}, () => Array(5).fill("")));
  const [bAnswers, setBAnswers] = useState<string[][]>(() => Array.from({length: 4}, () => Array(5).fill("")));
  const [resultAnswers, setResultAnswers] = useState<string[][]>(() => Array.from({length: 4}, () => Array(5).fill("")));
  const [carries, setCarries] = useState<string[][]>(() => Array.from({length: 4}, () => Array(5).fill("")));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, qi) => {
      const ans = resultAnswers[qi]!;
      const rDigits = q.resultDigits;
      const ok = rDigits.every((exp, col) => {
        const val = (ans[col] ?? "").trim();
        if (val === String(exp)) return true;
        return exp === 0 && col < 3 && (val === "" || val === "0");
      });
      if (ok) pts++;
    });
    onValidated(pts, 4);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Posez et effectuez les calculs en colonnes.</p>
      <div className="space-y-3">
        {data.map((q, i) => (
          <div key={i} className="flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
            <DecColGridFull
              aStr={q.aStr} bStr={q.bStr} op={q.op}
              aAnswers={aAnswers[i]!}
              bAnswers={bAnswers[i]!}
              resultAnswers={resultAnswers[i]!}
              carries={carries[i]!}
              onAChange={(col, val) => setAAnswers(p => { const n = p.map(r => [...r]); n[i]![col] = val; return n; })}
              onBChange={(col, val) => setBAnswers(p => { const n = p.map(r => [...r]); n[i]![col] = val; return n; })}
              onResultChange={(col, val) => setResultAnswers(p => { const n = p.map(r => [...r]); n[i]![col] = val; return n; })}
              onCarryChange={(col, val) => setCarries(p => { const n = p.map(r => [...r]); n[i]![col] = val; return n; })}
              validated={validated}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── DecMulGridFull — A5.5 Ex7 style, all rows are inputs ─────────────────────

function fmtDecResult(intResult: number, decimals: number): string {
  const s = String(intResult);
  const padded = s.padStart(decimals + 1, "0");
  const intPart = padded.slice(0, padded.length - decimals) || "0";
  const decPart = padded.slice(padded.length - decimals).replace(/0+$/, "");
  return decPart ? `${intPart},${decPart}` : intPart;
}

// cells[28]: 0-3 Row A, 4-7 Row B, 8-11 R2 carries, 12-15 R1 carries,
//            16-19 Partial1, 20-22 Partial2 (M/C/D), 23 unused, 24-27 Sum
function DecMulGridFull({ aStr, bStr, resultStr, cells, onCellChange, decResult, onDecResultChange, validated }: {
  aStr: string; bStr: string; resultStr: string;
  cells: string[];
  onCellChange: (idx: number, val: string) => void;
  decResult: string;
  onDecResultChange: (val: string) => void;
  validated: boolean;
}) {
  const colLabels = ["M", "C", "D", "U"];
  const inputCls = "h-8 w-8 rounded border text-center font-mono text-sm outline-none transition-colors bg-[var(--color-accent-alg)]/10 border-[var(--color-accent-alg)]/40 focus:border-[var(--color-accent-alg)] disabled:opacity-60";
  const carryCls = "h-5 w-8 rounded border text-center font-mono text-[10px] outline-none transition-colors border-[var(--color-border-default)] text-orange-500 focus:border-[var(--color-accent-alg)] disabled:opacity-60";

  const cellIn = (base: number, col: number) => (
    <td key={col} className="w-8 text-center p-0.5">
      <input type="text" inputMode="numeric" maxLength={1}
        value={cells[base + col] ?? ""}
        disabled={validated}
        onChange={e => onCellChange(base + col, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
        className={inputCls} />
    </td>
  );
  const carryIn = (base: number, col: number) => (
    <td key={col} className="w-8 text-center p-0.5">
      <input type="text" inputMode="numeric" maxLength={1}
        value={cells[base + col] ?? ""}
        disabled={validated}
        onChange={e => onCellChange(base + col, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
        className={carryCls} />
    </td>
  );

  return (
    <div className="space-y-3">
      <p className="text-center text-sm font-mono font-bold text-[var(--color-text-primary)]">
        {aStr} × {bStr}
      </p>
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
          <tr>
            <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R2</td>
            {[0,1,2,3].map(col => carryIn(8, col))}
          </tr>
          <tr>
            <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R1</td>
            {[0,1,2,3].map(col => carryIn(12, col))}
          </tr>
          <tr>
            <td />
            {[0,1,2,3].map(col => cellIn(0, col))}
          </tr>
          <tr>
            <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">×</td>
            {[0,1,2,3].map(col => cellIn(4, col))}
          </tr>
          <tr><td colSpan={5}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          <tr>
            <td />
            {[0,1,2,3].map(col => cellIn(16, col))}
          </tr>
          <tr>
            <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-primary)]">+</td>
            {[0,1,2].map(col => cellIn(20, col))}
            <td className="w-8 text-center">
              <div className="flex h-8 w-8 items-center justify-center font-mono text-base font-bold text-[var(--color-accent-alg)] opacity-60">0</div>
            </td>
          </tr>
          <tr><td colSpan={5}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          <tr>
            <td />
            {[0,1,2,3].map(col => cellIn(24, col))}
          </tr>
        </tbody>
      </table>
      <div className="flex items-center gap-2 pt-1">
        <span className="text-xs text-[var(--color-text-secondary)] shrink-0">Résultat :</span>
        <input type="text" value={decResult} disabled={validated}
          onChange={e => onDecResultChange(e.target.value)}
          placeholder={`ex. ${resultStr}`}
          className="w-28 rounded-xl border px-2 py-1 text-sm text-center outline-none transition-colors border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 focus:border-[var(--color-accent-alg)] disabled:opacity-60"
        />
      </div>
    </div>
  );
}

// ── Exercise 20 — Column multiplication with decimals (A5.5 Ex7 layout) ──────

export function Exercise20({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    return Array.from({ length: 2 }, () => {
      const aDecimals = Math.random() < 0.5 ? 1 : 2;
      let bInt: number;
      do { bInt = randInt(11, 29); } while (bInt % 10 === 0);
      const aInt = randInt(100, 299);
      const intResult = aInt * bInt;
      const resultStr = fmtDecResult(intResult, aDecimals + 1);
      return {
        aStr: fmtDecResult(aInt, aDecimals),
        bStr: fmtDecResult(bInt, 1),
        resultStr,
        result: intResult / Math.pow(10, aDecimals + 1),
      };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [cells, setCells] = useState<string[][]>(() => Array(2).fill(null).map(() => Array(28).fill("")));
  const [decResults, setDecResults] = useState<string[]>(["", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => { if (matchNum(decResults[i] ?? "", q.result, 0.005)) pts++; });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Posez et effectuez les multiplications en colonnes. Donnez le résultat décimal.</p>
      <div className="space-y-3">
        {data.map((q, i) => (
          <div key={i} className="flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
            <DecMulGridFull
              aStr={q.aStr} bStr={q.bStr} resultStr={q.resultStr}
              cells={cells[i]!}
              onCellChange={(idx, val) => setCells(p => { const n = p.map(r => [...r]); n[i]![idx] = val; return n; })}
              decResult={decResults[i] ?? ""}
              onDecResultChange={val => setDecResults(p => { const n = [...p]; n[i] = val; return n; })}
              validated={validated}
            />
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

// ── Shape helpers for fraction placement exercises ────────────────────────────

type FracShapeItem = { kind: ShapeKind; d: number; n: number; copies: number; multi: boolean };

function pickSingleShapeCfg(): { kind: ShapeKind; d: number } {
  const pickers: (() => { kind: ShapeKind; d: number })[] = [
    () => ({ kind: "rect",          d: randInt(2, 12) }),
    () => ({ kind: "square",        d: ([2, 4, 9, 16] as const)[randInt(0, 3)]! }),
    () => ({ kind: "triangle",      d: ([2, 3, 4, 6, 9] as const)[randInt(0, 4)]! }),
    () => ({ kind: "circle",        d: randInt(2, 10) }),
    () => ({ kind: "semicircle",    d: randInt(2, 8) }),
    () => ({ kind: "quartercircle", d: randInt(2, 8) }),
    () => ({ kind: "hexagon",       d: ([2, 3, 4, 6, 9, 12] as const)[randInt(0, 5)]! }),
  ];
  return shuffle(pickers)[0]!();
}

function pickMultiShapeCfg(): { kind: ShapeKind; d: number } {
  const pickers: (() => { kind: ShapeKind; d: number })[] = [
    () => ({ kind: "rect",          d: randInt(2, 5) }),
    () => ({ kind: "square",        d: ([2, 4] as const)[randInt(0, 1)]! }),
    () => ({ kind: "triangle",      d: ([2, 3, 4] as const)[randInt(0, 2)]! }),
    () => ({ kind: "circle",        d: randInt(2, 5) }),
    () => ({ kind: "semicircle",    d: randInt(2, 4) }),
    () => ({ kind: "quartercircle", d: randInt(2, 4) }),
    () => ({ kind: "hexagon",       d: ([2, 3, 4, 6] as const)[randInt(0, 3)]! }),
  ];
  return shuffle(pickers)[0]!();
}

function genFracColorItems(): FracShapeItem[] {
  return [
    ...Array.from({ length: 2 }, () => {
      const cfg = pickSingleShapeCfg();
      return { ...cfg, n: randInt(1, cfg.d - 1), copies: 1, multi: false };
    }),
    ...Array.from({ length: 2 }, () => {
      const cfg = pickMultiShapeCfg();
      const copies = randInt(2, 3);
      return { ...cfg, n: randInt(cfg.d + 1, copies * cfg.d - 1), copies, multi: true };
    }),
  ];
}

function genFracReadItems(): FracShapeItem[] {
  return [
    ...Array.from({ length: 2 }, () => {
      const cfg = pickSingleShapeCfg();
      return { ...cfg, n: randInt(1, cfg.d - 1), copies: 1, multi: false };
    }),
    ...Array.from({ length: 2 }, () => {
      const cfg = pickMultiShapeCfg();
      const copies = randInt(2, 3);
      return { ...cfg, n: randInt(cfg.d + 1, copies * cfg.d - 1), copies, multi: true };
    }),
  ];
}

// ── Exercise 22 — Colorier les fractions (A4.1 Ex2+Ex4 style) ────────────────

export function Exercise22({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const items = useMemo(genFracColorItems, [exerciseKey]); // eslint-disable-line react-hooks/exhaustive-deps
  const [coloredSets, setColoredSets] = useState<Set<number>[]>(() => items.map(() => new Set<number>()));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    items.forEach((item, i) => { if ((coloredSets[i]?.size ?? 0) === item.n) pts += 0.5; });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  function toggle(i: number, idx: number) {
    if (validated) return;
    setColoredSets(prev => {
      const next = prev.map(s => new Set(s));
      if (next[i]!.has(idx)) next[i]!.delete(idx); else next[i]!.add(idx);
      return next;
    });
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Cliquez sur les parties pour colorier la fraction demandée.</p>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-[var(--color-border-default)] p-3">
            <div className="flex items-center gap-3">
              <div className="shrink-0">
                <FractionDisplay numerator={item.n} denominator={item.d} highlightPart="num" />
              </div>
              <div className="flex flex-1 justify-center overflow-hidden">
                {item.multi ? (
                  <ShapesRow kind={item.kind} d={item.d} copies={item.copies}
                    colored={coloredSets[i]!}
                    onToggle={validated ? undefined : fi => toggle(i, fi)}
                    scale={computeScale(item.kind, item.copies)}
                  />
                ) : (
                  <FractionShape kind={item.kind} d={item.d} colored={coloredSets[i]!}
                    onToggle={validated ? undefined : ci => toggle(i, ci)}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── ExerciseFracRead — Lire les fractions (A4.1 Ex3+Ex5 style) ───────────────

export function ExerciseFracRead({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const items = useMemo(genFracReadItems, [exerciseKey]); // eslint-disable-line react-hooks/exhaustive-deps
  const [nums, setNums] = useState<string[]>(() => Array(4).fill(""));
  const [dens, setDens] = useState<string[]>(() => Array(4).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    items.forEach((item, i) => {
      const n = parseInt(nums[i] ?? "");
      const d = parseInt(dens[i] ?? "");
      if (!isNaN(n) && !isNaN(d) && n === item.n && d === item.d) pts += 0.5;
    });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  const inputCls = `w-12 rounded-xl border px-2 py-1.5 text-sm text-center outline-none transition-colors border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 focus:border-[var(--color-accent-alg)] disabled:opacity-60`;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Observe les formes coloriées et écris la fraction représentée.</p>
      <div className="space-y-3">
        {items.map((item, i) => {
          const preColored = item.multi ? preColorFlat(item.n, item.d) : new Set(Array.from({ length: item.n }, (_, k) => k));
          return (
            <div key={i} className="rounded-xl border border-[var(--color-border-default)] p-3">
              <div className="flex items-center gap-3">
                <div className="shrink-0 flex flex-col items-center gap-1">
                  <input type="text" value={nums[i]} disabled={validated}
                    onChange={e => { if (!validated) setNums(p => { const n = [...p]; n[i] = e.target.value; return n; }); }}
                    className={inputCls} />
                  <span className="h-[2px] w-12 rounded bg-[var(--color-text-primary)]" />
                  <input type="text" value={dens[i]} disabled={validated}
                    onChange={e => { if (!validated) setDens(p => { const n = [...p]; n[i] = e.target.value; return n; }); }}
                    className={inputCls} />
                </div>
                <div className="flex flex-1 justify-center overflow-hidden">
                  {item.multi ? (
                    <ShapesRow kind={item.kind} d={item.d} copies={item.copies}
                      colored={preColored}
                      scale={computeScale(item.kind, item.copies)}
                    />
                  ) : (
                    <FractionShape kind={item.kind} d={item.d} colored={preColored} />
                  )}
                </div>
              </div>
            </div>
          );
        })}
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
      <div className="grid gap-y-2 gap-x-2 items-center text-sm" style={{gridTemplateColumns:"1.5rem 1fr auto"}}>
        {questions.map((q, i) => {
          const displayVal = q.decPlaces > 0 ? fmtDec(q.value, 1) : String(q.value);
          const correct = q.result % 1 === 0 ? String(q.result) : fmtDec(q.result, q.result.toString().split(".")[1]?.length ?? 1);
          return (
            <React.Fragment key={i}>
              <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="font-mono text-[var(--color-text-primary)]">{displayVal} {q.from}</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[var(--color-text-secondary)]">=</span>
                <CorrectionInput value={answers[i] ?? ""} onChange={v => setAnswers(p => { const n = [...p]; n[i] = v; return n; })}
                  correct={correct} validated={validated} width="w-20" />
                <span className="font-mono text-[var(--color-text-secondary)]">{q.to}</span>
              </div>
            </React.Fragment>
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
      <div className="grid gap-y-2 gap-x-2 items-center text-sm" style={{gridTemplateColumns:"1.5rem 1fr auto"}}>
        {questions.map((q, i) => (
          <React.Fragment key={i}>
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <span className="font-mono text-[var(--color-text-primary)]">{q.label}</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[var(--color-text-secondary)]">=</span>
              <CorrectionInput value={answers[i] ?? ""} onChange={v => setAnswers(p => { const n = [...p]; n[i] = v; return n; })}
                correct={String(q.result).replace(".", ",")} validated={validated} width="w-16" />
            </div>
          </React.Fragment>
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
  // Fixed visual parallelogram — shape identical every refresh
  const svgW = 275, svgH = 145;
  const BLx = 30,  BLy = 118; // bottom-left
  const BRx = 170, BRy = 118; // bottom-right  (base = 140px)
  const TLx = 62,  TLy = 38;  // top-left      (skew=32px, height=80px)
  const TRx = 202, TRy = 38;  // top-right
  const paraPts = `${BLx},${BLy} ${BRx},${BRy} ${TRx},${TRy} ${TLx},${TLy}`;
  // Height bracket — outside right
  const bkX = 228, tickLen = 5;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le périmètre et l&apos;aire.</p>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} width={svgW} height={svgH} className="block mx-auto">
        {/* Shape */}
        <polygon points={paraPts} fill="var(--color-accent-alg)" fillOpacity={0.15} stroke="var(--color-accent-alg)" strokeWidth="2" />
        {/* Base label above */}
        <text x={(TLx + TRx) / 2} y={TLy - 8} textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">{b} cm</text>
        {/* Side label left */}
        <text x={BLx - 6} y={(BLy + TLy) / 2} textAnchor="end" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">{a} cm</text>
        {/* Dashed reference lines from shape to bracket */}
        <line x1={BRx} y1={BRy} x2={bkX - 2} y2={BRy} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
        <line x1={TRx} y1={TRy} x2={bkX - 2} y2={TRy} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
        {/* Bracket vertical line */}
        <line x1={bkX} y1={TRy} x2={bkX} y2={BRy} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        {/* Ticks */}
        <line x1={bkX - tickLen} y1={TRy} x2={bkX + tickLen} y2={TRy} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <line x1={bkX - tickLen} y1={BRy} x2={bkX + tickLen} y2={BRy} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        {/* Height label */}
        <text x={bkX + tickLen + 4} y={(TRy + BRy) / 2} textAnchor="start" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">h = {h} cm</text>
      </svg>
      <div className="space-y-2">
        <GeoRow label="Périmètre" unit="cm" value={data.perimeter} answer={ansP} onChange={setAnsP} validated={validated} />
        <GeoRow label="Aire" unit="cm²" value={data.area} answer={ansA} onChange={setAnsA} validated={validated} />
      </div>
    </div>
  );
}

// ── Exercise 26 — Triangle quelconque ────────────────────────────────────────

export function Exercise26({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const a = randInt(8, 14);
    let b = randInt(6, 12); while (b === a) b = randInt(6, 12);
    let c = randInt(5, 11); while (c === a || c === b) c = randInt(5, 11);
    // ensure h gives integer area: a*h must be even
    let h = randInt(4, 8); if ((a * h) % 2 !== 0) h++;
    return { a, b, c, h, perimeter: a + b + c, area: (a * h) / 2 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ansP, setAnsP] = useState("");
  const [ansA, setAnsA] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchInt(ansP, data.perimeter)) pts++;
    if (matchNum(ansA, data.area, 0.05)) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  // Fixed scalene triangle — apex offset left of center, no right angles
  const svgW = 295, svgH = 145;
  const Tx = 72, Ty = 28, BLx = 22, BLy = 122, BRx = 185, BRy = 122;
  const bkX = 215, tickLen = 5;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le périmètre et l&apos;aire.</p>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} width={svgW} height={svgH} className="block mx-auto">
        {/* Shape */}
        <polygon points={`${Tx},${Ty} ${BLx},${BLy} ${BRx},${BRy}`}
          fill="var(--color-accent-alg)" fillOpacity={0.15} stroke="var(--color-accent-alg)" strokeWidth="2" />
        {/* Side labels */}
        <text x={(BLx + BRx) / 2} y={BLy + 14} textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">a = {data.a} cm</text>
        <text x={(Tx + BRx) / 2 + 8} y={(Ty + BRy) / 2 - 4} textAnchor="start" fontSize="12" fill="var(--color-text-secondary)">b = {data.b} cm</text>
        <text x={(Tx + BLx) / 2 - 8} y={(Ty + BLy) / 2 - 4} textAnchor="end" fontSize="12" fill="var(--color-text-secondary)">c = {data.c} cm</text>
        {/* Dashed reference lines to bracket */}
        <line x1={BRx} y1={BRy} x2={bkX - 2} y2={BRy} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
        <line x1={Tx} y1={Ty} x2={bkX - 2} y2={Ty} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
        {/* Height bracket */}
        <line x1={bkX} y1={Ty} x2={bkX} y2={BRy} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <line x1={bkX - tickLen} y1={Ty} x2={bkX + tickLen} y2={Ty} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <line x1={bkX - tickLen} y1={BRy} x2={bkX + tickLen} y2={BRy} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <text x={bkX + tickLen + 4} y={(Ty + BRy) / 2} textAnchor="start" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">h = {data.h} cm</text>
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

  // Fixed visual losange — shape identical every refresh
  const svgW = 265, svgH = 178;
  const cx = 105, cy = 73;
  const rx = 78, ry = 52; // fixed half-diagonals in pixels
  const Ttop = [cx, cy - ry], Tright = [cx + rx, cy], Tbot = [cx, cy + ry], Tleft = [cx - rx, cy];
  const diaPts = `${Ttop[0]},${Ttop[1]} ${Tright[0]},${Tright[1]} ${Tbot[0]},${Tbot[1]} ${Tleft[0]},${Tleft[1]}`;
  const bkX = 205, bkY = 148, tickLen = 5;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le périmètre et l&apos;aire.</p>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} width={svgW} height={svgH} className="block mx-auto">
        {/* Shape */}
        <polygon points={diaPts}
          fill="var(--color-accent-alg)" fillOpacity={0.15} stroke="var(--color-accent-alg)" strokeWidth="2" />
        {/* Side label — top-left side */}
        <text x={(Ttop[0]! + Tleft[0]!) / 2 - 6} y={(Ttop[1]! + Tleft[1]!) / 2} textAnchor="end" fontSize="11" fill="var(--color-text-secondary)" dominantBaseline="middle">c = {data.side} cm</text>
        {/* Dashed reference lines to d2 bracket (right) */}
        <line x1={Tright[0]} y1={Ttop[1]} x2={bkX - 2} y2={Ttop[1]} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
        <line x1={Tright[0]} y1={Tbot[1]} x2={bkX - 2} y2={Tbot[1]} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
        {/* d2 bracket (right) */}
        <line x1={bkX} y1={Ttop[1]!} x2={bkX} y2={Tbot[1]!} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <line x1={bkX - tickLen} y1={Ttop[1]!} x2={bkX + tickLen} y2={Ttop[1]!} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <line x1={bkX - tickLen} y1={Tbot[1]!} x2={bkX + tickLen} y2={Tbot[1]!} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <text x={bkX + tickLen + 4} y={cy} textAnchor="start" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">d₂ = {data.d2} cm</text>
        {/* Dashed reference lines to d1 bracket (bottom) */}
        <line x1={Tleft[0]} y1={Tleft[1]! + 2} x2={Tleft[0]} y2={bkY - 2} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
        <line x1={Tright[0]} y1={Tright[1]! + 2} x2={Tright[0]} y2={bkY - 2} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
        {/* d1 bracket (bottom) */}
        <line x1={Tleft[0]!} y1={bkY} x2={Tright[0]!} y2={bkY} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <line x1={Tleft[0]!} y1={bkY - tickLen} x2={Tleft[0]!} y2={bkY + tickLen} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <line x1={Tright[0]!} y1={bkY - tickLen} x2={Tright[0]!} y2={bkY + tickLen} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <text x={cx} y={bkY + tickLen + 12} textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">d₁ = {data.d1} cm</text>
      </svg>
      <div className="space-y-2">
        <GeoRow label="Périmètre" unit="cm" value={data.perimeter} answer={ansP} onChange={setAnsP} validated={validated} />
        <GeoRow label="Aire" unit="cm²" value={data.area} answer={ansA} onChange={setAnsA} validated={validated} />
      </div>
    </div>
  );
}

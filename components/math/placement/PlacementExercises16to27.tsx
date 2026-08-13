"use client";
import React, { useState, useMemo, useEffect } from "react";
import { PlacementInstruction, type PlacementExerciseProps } from "./PlacementExercises1to15";
import {
  FractionDisplay,
  FractionShape,
  ShapesRow,
  computeScale,
  preColorFlat,
} from "@/components/math/A4ModuleContent";
import type { ShapeKind } from "@/components/math/A4ModuleContent";
import {
  placementRandInt as randInt,
  placementShuffle as shuffle,
  placementRandom,
} from "@/components/math/placement/placement-print-rng";
import { usePrintQuestionLayout } from "@/components/print/PrintExerciseLayoutContext";
import type { PrintExerciseColumns } from "@/components/print/PrintExerciseLayoutContext";

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Sur mobile : 1 colonne pour que les grilles restent saisissables. */
function screenGridClass(fallback: string): string {
  return fallback
    .replace(/\bgrid-cols-2\b/g, "grid-cols-1 sm:grid-cols-2")
    .replace(/\bgrid-cols-3\b/g, "grid-cols-1 sm:grid-cols-2 md:grid-cols-3");
}

/** Classes de liste selon les colonnes d'impression (1 = pile). */
function printColsClass(columns: PrintExerciseColumns, stacked = "space-y-3"): string {
  if (columns === 2) return "grid grid-cols-2 items-start gap-x-4 gap-y-3";
  if (columns === 3) return "grid grid-cols-3 items-start gap-x-3 gap-y-3";
  if (columns === 4) return "grid grid-cols-4 items-start gap-x-3 gap-y-3";
  if (columns === 5) return "grid grid-cols-5 items-start gap-x-2 gap-y-3";
  return stacked;
}

function screenOrPrintCols(
  forPrint: boolean | undefined,
  columns: PrintExerciseColumns,
  screenFallback: string,
): string {
  if (forPrint) return printColsClass(columns);
  return screenGridClass(screenFallback);
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
function fmtMeasure(n: number): string {
  return Number.isInteger(n) ? String(n) : fmtDec(n, 1);
}
function randOneDecimal(minTenths: number, maxTenths: number): number {
  let value = randInt(minTenths, maxTenths);
  while (value % 10 === 0) value = randInt(minTenths, maxTenths);
  return value / 10;
}

// ── CorrectionInput ───────────────────────────────────────────────────────────

function CorrectionInput({ value, onChange, correct, validated, width = "w-16", compact = false, variant = "line", maxLength, padX = "px-1" }: {
  value: string; onChange: (v: string) => void; correct: string;
  validated: boolean; width?: string; placeholder?: string; compact?: boolean; variant?: "line" | "box"; maxLength?: number; padX?: string;
}) {
  const wrong = validated && value.trim().replace(".", ",") !== correct.trim().replace(".", ",");
  const heightCls = compact ? "min-h-8" : "min-h-9";
  const textCls = compact ? "text-[13px]" : "text-sm";
  const inputHeightCls = compact ? "h-5" : "h-6";
  const baseBoxCls = variant === "box"
    ? "rounded-md border-2 border-[var(--color-accent-alg)]/45 bg-transparent"
    : "rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60";
  const wrongBoxCls = variant === "box"
    ? "rounded-md border-2 border-amber-500 bg-transparent"
    : "rounded-none border-0 border-b-2 border-amber-500";
  if (wrong) {
    return (
      <div className={`${width} ${heightCls} flex flex-col items-center justify-center ${wrongBoxCls} ${padX} py-1 text-center font-mono ${textCls} text-[var(--color-text-primary)]`}>
        {value.trim() && <span className="text-[10px] leading-none text-[var(--color-text-primary)]">{value}</span>}
        <span className="font-bold text-amber-600">{correct}</span>
      </div>
    );
  }
  if (validated) {
    return (
      <div className={`${width} ${heightCls} flex flex-col items-center justify-center ${baseBoxCls} ${padX} py-1 text-center font-mono ${textCls} text-[var(--color-text-primary)]`}>
        <span>{value || correct}</span>
      </div>
    );
  }
  return (
    <div className={`${width} ${heightCls} flex flex-col items-center justify-center ${baseBoxCls} ${padX} py-1 text-center font-mono ${textCls} text-[var(--color-text-primary)]`}>
      <input
        type="text"
        inputMode="decimal"
        enterKeyHint="done"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        value={value}
        onChange={e => onChange(e.target.value.replace(/[^0-9,.]/g, ""))}
        maxLength={maxLength}
        className={`${inputHeightCls} min-h-10 w-full touch-manipulation bg-transparent text-center text-base outline-none`}
      />
    </div>
  );
}

// ── Geometry answer row ───────────────────────────────────────────────────────

function GeoRow({ label, unit, value, answer, onChange, validated }: {
  label: string; unit: string; value: number;
  answer: string; onChange: (v: string) => void; validated: boolean;
}) {
  const correct = fmtMeasure(value);
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex w-[5.75rem] shrink-0 justify-end text-sm text-[var(--color-text-secondary)]">{label}</span>
      <span className="shrink-0 text-sm text-[var(--color-text-secondary)]">=</span>
      <CorrectionInput value={answer} onChange={onChange} correct={correct} validated={validated} width="w-20" />
      <span className="text-sm text-[var(--color-text-secondary)]">{unit}</span>
    </div>
  );
}

/** Réponses géométrie : 1 colonne (2 lignes) sur mobile, 2 colonnes dès sm. */
const GEO_ANSWERS_GRID = "grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-3";

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
      <div className={GEO_ANSWERS_GRID}>
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
  const isAsc = placementRandom() < 0.5;
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
  const isAsc = placementRandom() < 0.5;
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
    <div className="flex flex-nowrap items-center gap-1.5 overflow-x-auto pb-1">
      {vals.map((v, i) => {
        const isVisible = i === visPos[0] || i === visPos[1];
        const display = isInt ? fmtInt(v) : fmtDec(v, 2);
        const pillCls = "inline-flex h-9 w-[4.5rem] items-center justify-center rounded-full px-1 font-mono text-sm font-semibold";
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
            validated={validated} width="h-9 w-[4.5rem] px-1 rounded-full" padX="px-1" maxLength={isInt ? 5 : 5} />
        );
      })}
    </div>
  );
}

export function Exercise17({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const rows = useMemo(
    () => Array.from({ length: questionCount }, (_, i) =>
      i % 2 === 0 ? { ...genSeq17Int(), isInt: true } : { ...genSeq17Dec(), isInt: false }),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[][]>(() => rows.map(() => ["", "", "", ""]));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    rows.forEach((row, r) => {
      const blankVals = row.vals.filter((_, i) => i !== row.visPos[0] && i !== row.visPos[1]);
      const all = blankVals.every((v, k) => row.isInt
        ? matchInt(answers[r]?.[k] ?? "", v)
        : matchNum(answers[r]?.[k] ?? "", v, 0.001));
      if (all) pts += 1.5;
    });
    onValidated(pts, rows.length * 1.5);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Complétez les suites numériques.</p>
      <div className={forPrint ? printColsClass(columns, "space-y-3") : "space-y-3"}>
        {rows.map((row, r) => (
          <div key={r} className="flex items-center gap-2">
            <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{r + 1}.</span>
            <SeqRow vals={row.vals} visPos={row.visPos} isInt={row.isInt} answers={answers[r] ?? []}
              onChange={(k, v) => setAnswers(p => p.map((rowAns, ri) =>
                ri === r ? rowAns.map((a, j) => j === k ? v : a) : rowAns))}
              validated={validated} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 18 — Sort numbers (click mechanism) ─────────────────────────────

function OrderingChips({ numbers, selected, onToggle, validated, fmt, desc = false, chipW = "w-28", numberLabel, correctOrder, forPrint = false }: {
  numbers: number[]; selected: number[];
  onToggle: (n: number) => void; validated: boolean;
  fmt: (n: number) => string; desc?: boolean; chipW?: string; numberLabel?: string;
  correctOrder?: number[]; forPrint?: boolean;
}) {
  const available = numbers.filter(n => !selected.includes(n));
  const isWrong = validated && correctOrder && !(
    selected.length === correctOrder.length &&
    correctOrder.every((v, i) => selected[i] === v)
  );
  const sep = desc ? ">" : "<";

  const chipBase = `${chipW} flex h-10 items-center justify-center rounded-lg border px-1.5 text-base font-mono font-bold transition-colors `;

  if (forPrint) {
    // Lignes de réponse : mêmes traits que l'Exercise17 (CorrectionInput compact),
    // corrigé standard ambre (réponse attendue bold text-amber-600).
    const blanks = correctOrder ?? numbers;
    return (
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {numbers.map((n, ni) => (
            <button
              key={ni}
              type="button"
              disabled
              className={`${chipBase} pointer-events-none cursor-default border-[var(--color-border-default)] text-[var(--color-text-primary)]`}
            >
              {fmt(n)}
            </button>
          ))}
        </div>
        <div className="flex min-h-[48px] flex-wrap items-center gap-2">
          {numberLabel && (
            <span className="mr-1 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{numberLabel}</span>
          )}
          {blanks.map((n, bi) => (
            <React.Fragment key={bi}>
              <CorrectionInput value="" onChange={() => {}} correct={fmt(n)}
                validated={validated} width={chipW} compact />
              {bi < blanks.length - 1 && (
                <span className="text-sm font-bold text-[var(--color-text-secondary)]">{sep}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {available.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {available.map((n, ni) => {
            const cls = chipBase + (validated
              ? "cursor-default border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-40"
              : "cursor-pointer border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]");
            return (
              <button key={ni} type="button" disabled={validated} onClick={() => onToggle(n)} className={cls}>
                {fmt(n)}
              </button>
            );
          })}
        </div>
      )}
      <div className="flex min-h-[48px] flex-wrap items-center gap-1.5 border-b-2 border-[var(--color-accent-alg)] pb-1">
        {numberLabel && (
          <span className="shrink-0 mr-1 text-xs font-bold text-[var(--color-accent-alg)]">{numberLabel}</span>
        )}
        {selected.length > 0
          ? selected.map((n, si) => (
            <React.Fragment key={si}>
              <button
                type="button"
                disabled={validated}
                onClick={() => onToggle(n)}
                className={`${chipBase}${validated ? "cursor-default" : "cursor-pointer"} border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white`}
              >
                {fmt(n)}
              </button>
              {si < selected.length - 1 && <span className="text-sm font-bold text-[var(--color-text-secondary)]">{sep}</span>}
            </React.Fragment>
          ))
          : null}
      </div>
      {isWrong && correctOrder && (
        <div className="mt-2 space-y-1">
          <p className="text-[10px] font-bold text-amber-600">Correction :</p>
          <div className="flex flex-wrap items-center gap-1.5">
            {correctOrder.map((n, ci) => {
              const misplaced = selected[ci] !== n;
              const chipTone = misplaced
                ? "border-amber-500 bg-amber-50 text-amber-600"
                : "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]";
              return (
              <React.Fragment key={ci}>
                <div className={`${chipW} flex h-10 items-center justify-center rounded-lg border px-1.5 text-base font-mono font-bold ${chipTone}`}>
                  {fmt(n)}
                </div>
                {ci < correctOrder.length - 1 && <span className="text-sm font-bold text-amber-400">{sep}</span>}
              </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

type SortSeries = { numbers: number[]; correctOrder: number[]; desc: boolean; isInt: boolean };

// Série entiers : 3 nombres à 6 chiffres + 1 à 5 chiffres, ordre croissant.
//   n1 & n2 partagent les 2 premiers chiffres ; n1 & n3 les 3 derniers.
function genSortIntSeries(): SortSeries {
  const top2 = randInt(10, 99);
  let top2b = randInt(10, 99);
  while (top2b === top2) top2b = randInt(10, 99);
  const bot3 = randInt(100, 999);       // shared last 3 digits for n1 & n3
  let bot3b = randInt(100, 999);        // last 3 digits for n2
  while (bot3b === bot3) bot3b = randInt(100, 999);
  const n1 = top2 * 10000 + randInt(0, 9) * 1000 + bot3;
  const n2 = top2 * 10000 + randInt(0, 9) * 1000 + bot3b;
  const n3 = top2b * 10000 + randInt(0, 9) * 1000 + bot3;
  const n4 = randInt(10000, 99999);
  const numbers = shuffle([n1, n2, n3, n4]);
  return { numbers, correctOrder: [...numbers].sort((a, b) => a - b), desc: false, isInt: true };
}

// Série décimaux : même partie entière (10–49), décimales variées, ordre décroissant.
// Contient une paire type 44,9 / 44,09 (même chiffre en dixièmes puis centièmes).
function genSortDecSeries(): SortSeries {
  const intPart = randInt(10, 49);
  const tenths = randInt(1, 9);
  const decsBase = [
    parseFloat((intPart + tenths / 10).toFixed(1)),
    parseFloat((intPart + tenths / 100).toFixed(2)),
  ];
  while (decsBase.length < 4) {
    const decimals = placementRandom() < 0.5
      ? randInt(1, 9) * 10
      : randInt(11, 99);
    if (decimals % 10 === 0 && decimals / 10 === tenths) continue;
    const candidate = parseFloat((intPart + decimals / 100).toFixed(decimals % 10 === 0 ? 1 : 2));
    if (!decsBase.includes(candidate)) decsBase.push(candidate);
  }
  const numbers = shuffle(decsBase);
  return { numbers, correctOrder: [...numbers].sort((a, b) => b - a), desc: true, isInt: false };
}

export function Exercise18({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const series = useMemo(
    () => Array.from({ length: questionCount }, (_, i) =>
      i % 2 === 0 ? genSortIntSeries() : genSortDecSeries()),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [exerciseKey, questionCount]);

  const [sels, setSels] = useState<number[][]>(() => series.map(() => []));

  const toggle = (idx: number) => (n: number) => {
    setSels(prev => prev.map((sel, i) =>
      i === idx ? (sel.includes(n) ? sel.filter(x => x !== n) : [...sel, n]) : sel));
  };

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    series.forEach((s, i) => {
      const sel = sels[i] ?? [];
      if (sel.length === s.correctOrder.length && s.correctOrder.every((v, k) => sel[k] === v)) pts++;
    });
    onValidated(pts, series.length);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  const fmtDec2 = (n: number) => fmtDec(n, String(n).includes(".") && String(n).split(".")[1]!.length === 2 ? 2 : 1);

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">Classez les nombres dans l&apos;ordre demandée.</p>
      <div className={forPrint ? printColsClass(columns, "space-y-5") : "space-y-5"}>
        {series.map((s, i) => (
          <div key={i} className="space-y-3">
            <p className="text-sm text-[var(--color-text-secondary)]">
              {s.desc
                ? "Dans l'ordre décroissant (plus grand au plus petit)"
                : "Dans l'ordre croissant (plus petit au plus grand)"}
            </p>
            <OrderingChips numbers={s.numbers} selected={sels[i] ?? []} onToggle={toggle(i)}
              validated={validated} fmt={s.isInt ? (n) => String(n) : fmtDec2} desc={s.desc}
              chipW="w-[4.9rem]" numberLabel={`${i + 1}.`}
              correctOrder={s.correctOrder} forPrint={forPrint} />
          </div>
        ))}
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

  const aValNum = parseFloat(aStr.replace(",", "."));
  const bValNum = parseFloat(bStr.replace(",", "."));
  const resNum = op === "+" ? aValNum + bValNum : aValNum - bValNum;
  const correctResultDigits = decStrToDigits(fmtDec(Math.round(resNum * 100) / 100, 2));
  const correctADigits = decStrToDigits(aStr);
  const correctBDigits = decStrToDigits(bStr);

  // Retenues attendues (même convention que computeDecCarries d'A5) :
  // addition → valeur de la retenue ; soustraction → chiffre du minuende décrémenté.
  const expectedCarries: (number | null)[] = (() => {
    const row: (number | null)[] = [null, null, null, null, null];
    if (op === "+") {
      let c = 0;
      for (let i = 4; i >= 0; i--) {
        const s = (correctADigits[i] ?? 0) + (correctBDigits[i] ?? 0) + c;
        c = Math.floor(s / 10);
        if (i > 0 && c > 0) row[i - 1] = c;
      }
    } else {
      let borrow = 0;
      for (let i = 4; i >= 0; i--) {
        const d = (correctADigits[i] ?? 0) - (correctBDigits[i] ?? 0) - borrow;
        if (d < 0) {
          borrow = 1;
          if (i > 0) row[i - 1] = (correctADigits[i - 1] ?? 0) > 0 ? (correctADigits[i - 1] ?? 0) - 1 : 9;
        } else {
          borrow = 0;
        }
      }
    }
    return row;
  })();

  const commaCell = (key: string) => (
    <td key={key} className="w-8 text-center">
      <div className="h-8 w-8 flex items-center justify-center font-mono text-base font-bold text-[var(--color-text-secondary)]">,</div>
    </td>
  );

  const inputStyle = "h-8 w-8 rounded-none border-0 border-b-2 text-center font-mono text-sm outline-none transition-colors border-[var(--color-accent-alg)]/60 focus:border-[var(--color-accent-alg)] disabled:opacity-60";
  const carryStyle = "h-5 w-8 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/30 text-center font-mono text-[10px] text-orange-500 outline-none focus:border-orange-400 disabled:opacity-40";

  const rowInput = (answers: string[], correctDigits: number[], onChange: (col: number, val: string) => void, col: number) => {
    const correct = correctDigits[col] ?? 0;
    const val = answers[col] ?? "";
    const firstNz = correctDigits.findIndex(d => d !== 0);
    const optionalLeadingZero = correct === 0 && col < (firstNz === -1 ? 2 : firstNz);
    if (validated) {
      const isOk = val.trim() === String(correct) || (optionalLeadingZero && (val === "" || val === "0"));
      return (
        <td key={col} className="w-8 p-0.5 text-center">
          <div className={`flex h-8 w-8 items-center justify-center rounded-none border-0 border-b-2 font-mono text-sm ${
            isOk ? "border-[var(--color-accent-alg)]/60 text-[var(--color-text-primary)]" : "border-amber-500 font-bold text-amber-600"
          }`}>
            {optionalLeadingZero && val.trim() === "" ? "" : isOk ? (val || String(correct)) : String(correct)}
          </div>
        </td>
      );
    }
    return (
      <td key={col} className="w-8 p-0.5 text-center">
        <input type="text" inputMode="numeric" maxLength={1} value={val}
          disabled={validated}
          onChange={e => onChange(col, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
          className={inputStyle} />
      </td>
    );
  };

  const resultRowInput = (col: number) => {
    const correct = correctResultDigits[col] ?? 0;
    const val = resultAnswers[col] ?? "";
    if (validated) {
      const isBlankLeadingZero = correct === 0 && col < 3 && (val === "" || val === "0");
      const isOk = val.trim() === String(correct) || isBlankLeadingZero;
      return (
        <td key={col} className="w-8 p-0.5 text-center">
          <div className={`flex h-8 w-8 items-center justify-center rounded-none border-0 border-b-2 font-mono text-sm ${
            isOk ? "border-[var(--color-accent-alg)]/60 text-[var(--color-text-primary)]"
                 : "border-amber-500 font-bold text-amber-600"
          }`}>
            {isOk ? (val || String(correct)) : String(correct)}
          </div>
        </td>
      );
    }
    return (
      <td key={col} className="w-8 p-0.5 text-center">
        <input type="text" inputMode="numeric" maxLength={1} value={val}
          disabled={validated}
          onChange={e => onResultChange(col, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
          className={inputStyle} />
      </td>
    );
  };

  const carryInput = (col: number) => {
    const val = (carries[col] ?? "").trim();
    if (validated) {
      const expected = expectedCarries[col] ?? null;
      const expStr = expected === null ? "" : String(expected);
      const isOk = expected === null ? (val === "" || val === "0") : val === expStr;
      return (
        <td key={col} className="w-8 p-0.5 text-center">
          <div className={`flex h-5 w-8 items-center justify-center rounded-none border-0 border-b-2 font-mono text-[10px] ${
            isOk ? "border-[var(--color-accent-alg)]/30 text-orange-500" : "border-amber-500 font-bold text-amber-600"
          }`}>
            {isOk ? val : expStr}
          </div>
        </td>
      );
    }
    return (
      <td key={col} className="w-8 p-0.5 text-center">
        <input type="text" inputMode="numeric" maxLength={1} value={carries[col] ?? ""}
          disabled={validated}
          onChange={e => onCarryChange(col, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
          className={carryStyle} />
      </td>
    );
  };

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
            {rowInput(aAnswers, correctADigits, onAChange, 0)}{rowInput(aAnswers, correctADigits, onAChange, 1)}{rowInput(aAnswers, correctADigits, onAChange, 2)}
            {commaCell("a-comma")}
            {rowInput(aAnswers, correctADigits, onAChange, 3)}{rowInput(aAnswers, correctADigits, onAChange, 4)}
          </tr>
          {/* Row B */}
          <tr>
            <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">{op}</td>
            {rowInput(bAnswers, correctBDigits, onBChange, 0)}{rowInput(bAnswers, correctBDigits, onBChange, 1)}{rowInput(bAnswers, correctBDigits, onBChange, 2)}
            {commaCell("b-comma")}
            {rowInput(bAnswers, correctBDigits, onBChange, 3)}{rowInput(bAnswers, correctBDigits, onBChange, 4)}
          </tr>
          <tr><td colSpan={7}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          {/* Result row */}
          <tr>
            <td />
            {resultRowInput(0)}{resultRowInput(1)}{resultRowInput(2)}
            {commaCell("r-comma")}
            {resultRowInput(3)}{resultRowInput(4)}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function Exercise19({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(4);
  const data = useMemo(() => {
    function mkQ(a: number, b: number, op: "+" | "-", decA: number, decB: number) {
      const aStr = fmtDec(a, decA); const bStr = fmtDec(b, decB);
      const result = op === "+" ? a + b : a - b;
      const resultDigits = decStrToDigits(fmtDec(Math.round(result * 100) / 100, 2));
      return { aStr, bStr, op, result, resultDigits };
    }
    const makers = [
      () => {
        const a = randInt(10, 90) + randInt(1, 99) / 100;
        const b = randInt(10, 90) + randInt(1, 99) / 100;
        return mkQ(Math.round(a * 100) / 100, Math.round(b * 100) / 100, "+", 2, 2);
      },
      () => {
        const a = randInt(10, 90) + randInt(1, 9) / 10;
        const b = randInt(1, 9) + randInt(1, 99) / 100;
        return mkQ(Math.round(a * 10) / 10, Math.round(b * 100) / 100, "+", 1, 2);
      },
      () => {
        let a = randInt(20, 90) + randInt(1, 99) / 100;
        let b = randInt(5, 40) + randInt(1, 99) / 100;
        if (b > a) [a, b] = [b, a];
        return mkQ(Math.round(a * 100) / 100, Math.round(b * 100) / 100, "-", 2, 2);
      },
      () => {
        let a = randInt(20, 90) + randInt(1, 9) / 10;
        const b = randInt(1, 9) + randInt(1, 99) / 100;
        if (b > a) { a += 10; }
        return mkQ(Math.round(a * 10) / 10, Math.round(b * 100) / 100, "-", 1, 2);
      },
    ];
    return Array.from({ length: questionCount }, (_, i) => makers[i % makers.length]!());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [aAnswers, setAAnswers] = useState<string[][]>(() => data.map(() => Array(5).fill("")));
  const [bAnswers, setBAnswers] = useState<string[][]>(() => data.map(() => Array(5).fill("")));
  const [resultAnswers, setResultAnswers] = useState<string[][]>(() => data.map(() => Array(5).fill("")));
  const [carries, setCarries] = useState<string[][]>(() => data.map(() => Array(5).fill("")));

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
    onValidated(pts, data.length);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <PlacementInstruction text="Posez et effectuez les calculs en colonnes." />
      <div className={screenOrPrintCols(forPrint, columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3")}>
        {data.map((q, i) => (
          <div key={i} className="flex flex-col items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
            <div className="font-mono text-base font-bold text-[var(--color-text-primary)]">
              {q.aStr} {q.op === "+" ? "+" : "−"} {q.bStr}
            </div>
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
function DecMulGridFull({ aStr, bStr, aInt, bInt, cells, onCellChange, decResult, onDecResultChange, validated }: {
  aStr: string; bStr: string; aInt: number; bInt: number;
  cells: string[];
  onCellChange: (idx: number, val: string) => void;
  decResult: string;
  onDecResultChange: (val: string) => void;
  validated: boolean;
}) {
  const colLabels = ["M", "C", "D", "U"];
  const ad = [Math.floor(aInt / 1000) % 10, Math.floor(aInt / 100) % 10, Math.floor(aInt / 10) % 10, aInt % 10];
  const bd = [Math.floor(bInt / 1000) % 10, Math.floor(bInt / 100) % 10, Math.floor(bInt / 10) % 10, bInt % 10];
  const aFz = ad.findIndex(d => d !== 0);
  const bFz = bd.findIndex(d => d !== 0);
  const onesDigit = bInt % 10;
  const tensDigit = Math.floor(bInt / 10) % 10;
  const partial1Digits = String(aInt * onesDigit).padStart(4, "0").slice(-4).split("").map(Number);
  const partial2Digits = String(aInt * tensDigit).padStart(3, "0").slice(-3).split("").map(Number);
  const totalDigits = String(aInt * bInt).padStart(4, "0").slice(-4).split("").map(Number);

  // Retenues attendues pour a × chiffre (même convention que GenericModuleContent "×") :
  // la retenue produite en colonne i s'écrit au-dessus de la colonne i-1.
  const mulCarryRow = (mult: number): (number | null)[] => {
    const row: (number | null)[] = [null, null, null, null];
    let c = 0;
    for (let i = 3; i >= 0; i--) {
      const p = ad[i]! * mult + c;
      c = Math.floor(p / 10);
      if (i > 0 && c > 0) row[i - 1] = c;
    }
    return row;
  };
  const r1Expected = mulCarryRow(onesDigit);
  const r2Expected = mulCarryRow(tensDigit);
  const inputCls = "h-8 w-8 rounded-none border-0 border-b-2 text-center font-mono text-sm outline-none transition-colors border-[var(--color-accent-alg)]/60 focus:border-[var(--color-accent-alg)] disabled:opacity-60";
  const carryCls = "h-5 w-8 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/30 text-center font-mono text-[10px] text-orange-500 outline-none focus:border-orange-400 disabled:opacity-40";

  const cellIn = (base: number, col: number, correctDigits?: number[], optionalLeading = true) => {
    const val = cells[base + col] ?? "";
    const correct = correctDigits?.[col];
    if (validated && correctDigits && correct !== undefined) {
      const firstNz = correctDigits.findIndex(d => d !== 0);
      const optionalLeadingZero = optionalLeading && correct === 0 && col < (firstNz === -1 ? correctDigits.length - 1 : firstNz);
      const isOk = val === String(correct) || (optionalLeadingZero && (val === "" || val === "0"));
      return (
        <td key={col} className="w-8 text-center p-0.5">
          <div className={`flex h-8 w-8 items-center justify-center rounded-none border-0 border-b-2 font-mono text-sm ${
            isOk ? "border-[var(--color-accent-alg)]/60 text-[var(--color-text-primary)]" : "border-amber-500 font-bold text-amber-600"
          }`}>
            {optionalLeadingZero && val === "" ? "" : isOk ? (val || String(correct)) : String(correct)}
          </div>
        </td>
      );
    }
    return (
      <td key={col} className="w-8 text-center p-0.5">
        <input type="text" inputMode="numeric" maxLength={1}
          value={val}
          disabled={validated}
          onChange={e => onCellChange(base + col, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
          className={inputCls} />
      </td>
    );
  };
  const carryIn = (base: number, col: number, expectedRow: (number | null)[]) => {
    const val = (cells[base + col] ?? "").trim();
    if (validated) {
      const expected = expectedRow[col] ?? null;
      const expStr = expected === null ? "" : String(expected);
      const isOk = expected === null ? (val === "" || val === "0") : val === expStr;
      return (
        <td key={col} className="w-8 text-center p-0.5">
          <div className={`flex h-5 w-8 items-center justify-center rounded-none border-0 border-b-2 font-mono text-[10px] ${
            isOk ? "border-[var(--color-accent-alg)]/30 text-orange-500" : "border-amber-500 font-bold text-amber-600"
          }`}>
            {isOk ? val : expStr}
          </div>
        </td>
      );
    }
    return (
      <td key={col} className="w-8 text-center p-0.5">
        <input type="text" inputMode="numeric" maxLength={1}
          value={cells[base + col] ?? ""}
          disabled={validated}
          onChange={e => onCellChange(base + col, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
          className={carryCls} />
      </td>
    );
  };
  const _pre = (digits: number[], col: number, firstNz: number) => (
    <td key={col} className="w-8 text-center p-0.5">
      <div className="flex h-8 w-8 items-center justify-center font-mono text-base text-[var(--color-text-primary)]">
        {col < firstNz ? "" : digits[col]}
      </div>
    </td>
  );

  const preIn = (digits: number[], col: number, _firstNz: number, base: number) => {
    const correct = String(digits[col]);
    const val = cells[base + col] ?? "";
    if (validated) {
      const isBlankZero = correct === "0" && (val === "" || val === "0");
      const isOk = val === correct || isBlankZero;
      return (
        <td key={col} className="w-8 text-center p-0.5">
          <div className={`flex h-8 w-8 items-center justify-center font-mono text-base ${isOk ? "text-[var(--color-text-primary)]" : "text-amber-600"}`}>
            {isOk ? (val || correct) : correct}
          </div>
        </td>
      );
    }
    return (
      <td key={col} className="w-8 text-center p-0.5">
        <input type="text" inputMode="numeric" maxLength={1}
          value={val} disabled={validated}
          onChange={e => onCellChange(base + col, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
          className={inputCls} />
      </td>
    );
  };

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
            {[0,1,2,3].map(col => carryIn(8, col, r2Expected))}
          </tr>
          <tr>
            <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R1</td>
            {[0,1,2,3].map(col => carryIn(12, col, r1Expected))}
          </tr>
          <tr>
            <td />
            {[0,1,2,3].map(col => preIn(ad, col, aFz, 0))}
          </tr>
          <tr>
            <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">×</td>
            {[0,1,2,3].map(col => preIn(bd, col, bFz, 4))}
          </tr>
          <tr><td colSpan={5}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          <tr>
            <td />
            {[0,1,2,3].map(col => cellIn(16, col, partial1Digits))}
          </tr>
          <tr>
            <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-primary)]">+</td>
            {[0,1,2].map(col => cellIn(20, col, partial2Digits))}
            <td className="w-8 text-center">
              <div className="flex h-8 w-8 items-center justify-center font-mono text-base font-bold text-[var(--color-accent-alg)] opacity-60">0</div>
            </td>
          </tr>
          <tr><td colSpan={5}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          <tr>
            <td />
            {[0,1,2,3].map(col => cellIn(24, col, totalDigits))}
          </tr>
        </tbody>
      </table>
      {(() => {
        const aDecPl = aStr.includes(",") ? aStr.split(",")[1]!.length : 0;
        const bDecPl = bStr.includes(",") ? bStr.split(",")[1]!.length : 0;
        const totalDecPl = aDecPl + bDecPl;
        const correctResultNum = (aInt * bInt) / Math.pow(10, totalDecPl);
        const correctResultStr = fmtDecResult(aInt * bInt, totalDecPl);
        const isWrong = validated && !matchNum(decResult, correctResultNum, 0.005);
        return (
          <div className="flex items-center gap-2 pt-1">
            <span className="text-xs font-bold text-[var(--color-accent-alg)] shrink-0">Résultat :</span>
            <input type="text" inputMode="decimal" value={isWrong ? correctResultStr : decResult} disabled={validated}
              onChange={e => onDecResultChange(e.target.value.replace(/[^0-9,.]/g, ""))}
              className={`w-28 rounded-none border-0 border-b-2 px-2 py-1 text-sm text-center outline-none transition-colors disabled:opacity-60 ${
                isWrong ? "border-amber-500 font-bold text-amber-600" : "border-[var(--color-accent-alg)]/60 focus:border-[var(--color-accent-alg)]"
              }`}
            />
          </div>
        );
      })()}
    </div>
  );
}

// ── Exercise 20 — Column multiplication with decimals (A5.5 Ex7 layout) ──────

export function Exercise20({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const data = useMemo(() => {
    return Array.from({ length: questionCount }, () => {
      const aDecimals = placementRandom() < 0.5 ? 1 : 2;
      let bInt: number;
      do { bInt = randInt(11, 29); } while (bInt % 10 === 0);
      const aInt = randInt(100, 299);
      const intResult = aInt * bInt;
      return {
        aStr: fmtDecResult(aInt, aDecimals),
        bStr: fmtDecResult(bInt, 1),
        aInt,
        bInt,
        intResult,
        result: intResult / Math.pow(10, aDecimals + 1),
      };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [cells, setCells] = useState<string[][]>(() => data.map(() => Array(28).fill("")));
  const [decResults, setDecResults] = useState<string[]>(() => data.map(() => ""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => { if (matchNum(decResults[i] ?? "", q.result, 0.005)) pts += 2; });
    onValidated(pts, data.length * 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <PlacementInstruction text="Posez et effectuez les multiplications en colonnes." />
      <div className={screenOrPrintCols(forPrint, columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3")}>
        {data.map((q, i) => (
          <div key={i} className="flex flex-col items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
            <div className="font-mono text-base font-bold text-[var(--color-text-primary)]">
              {q.aStr} × {q.bStr}
            </div>
            <DecMulGridFull
              aStr={q.aStr} bStr={q.bStr} aInt={q.aInt} bInt={q.bInt}
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

function computeDecimalDivSteps(dividend: number, divisor: number): Array<{ partialDiv: number; product: number; colEnd: number }> {
  const digits = dividend.toString().split("").map(Number);
  const steps: Array<{ partialDiv: number; product: number; colEnd: number }> = [];
  let current = 0;
  for (let i = 0; i < digits.length; i++) {
    current = current * 10 + digits[i]!;
    if (current < divisor && i < digits.length - 1) continue;
    const quotientDigit = Math.floor(current / divisor);
    const product = quotientDigit * divisor;
    steps.push({ partialDiv: current, product, colEnd: i });
    current -= product;
  }
  return steps;
}

function DecimalDivisionGrid({
  dividendInt,
  divisor,
  quotientInt,
  quotientInputs,
  remainderInput,
  workFlat,
  decResult,
  decCorrect,
  dividendInputs,
  divisorInputs,
  onQuotientChange,
  onRemainderChange,
  onWorkChange,
  onDecResultChange,
  onDividendChange,
  onDivisorChange,
  validated,
}: {
  dividendInt: number;
  divisor: number;
  quotientInt: number;
  quotientInputs: string[];
  remainderInput: string;
  workFlat: string[];
  decResult: string;
  decCorrect: string;
  dividendInputs: string[];
  divisorInputs: string[];
  onQuotientChange: (idx: number, value: string) => void;
  onRemainderChange: (value: string) => void;
  onWorkChange: (step: number, type: 0 | 1, col: number, value: string) => void;
  onDecResultChange: (value: string) => void;
  onDividendChange: (idx: number, value: string) => void;
  onDivisorChange: (idx: number, value: string) => void;
  validated: boolean;
}) {
  const steps = computeDecimalDivSteps(dividendInt, divisor);
  const dividendStr = String(dividendInt);
  const divisorStr = String(divisor);
  const quotientStr = String(quotientInt);
  const dividendCols = dividendStr.length;
  const quotientCols = Math.max(quotientStr.length, divisorStr.length);
  const resultWrong = validated && !matchNum(decResult, parseNum(decCorrect), 0.005);
  const BSEP: React.CSSProperties = { borderLeft: "2px solid var(--color-text-primary)" };
  const CW = 34;

  const digitInput = (value: string, onChange: (value: string) => void) => (
    <input
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={value}
      disabled={validated}
      onChange={e => onChange(e.target.value.replace(/[^0-9]/g, "").slice(-1))}
      className="h-8 w-8 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 text-center font-mono text-base outline-none focus:border-[var(--color-accent-alg)] disabled:opacity-60"
    />
  );

  const correctedDigit = (value: string, correct: string) => {
    const isOk = value === correct;
    return (
      <div className={`flex h-8 w-8 items-center justify-center rounded-none border-0 border-b-2 font-mono text-base ${
        isOk ? "border-[var(--color-accent-alg)]/60 text-[var(--color-text-primary)]" : "border-amber-500 font-bold text-amber-600"
      }`}>
        {isOk ? (value || correct) : correct}
      </div>
    );
  };

  const _fixedCell = (value: string) => (
    <div className="flex h-8 w-8 items-center justify-center font-mono text-base text-[var(--color-text-primary)]">
      {value}
    </div>
  );

  const emptyCell = () => <div className="h-8 w-8" />;

  const dividendCell = (idx: number) => {
    const correct = dividendStr[idx]!;
    const val = dividendInputs[idx] ?? "";
    if (validated) {
      return <div className={`flex h-8 w-8 items-center justify-center font-mono text-base ${val === correct ? "text-[var(--color-text-primary)]" : "text-amber-600"}`}>{val === correct ? (val || correct) : correct}</div>;
    }
    return digitInput(val, v => onDividendChange(idx, v));
  };

  const divisorCell = (idx: number) => {
    const correct = divisorStr[idx]!;
    const val = divisorInputs[idx] ?? "";
    if (validated) {
      return <div className={`flex h-8 w-8 items-center justify-center font-mono text-base ${val === correct ? "text-[var(--color-text-primary)]" : "text-amber-600"}`}>{val === correct ? (val || correct) : correct}</div>;
    }
    return digitInput(val, v => onDivisorChange(idx, v));
  };

  function WorkRow({ numStr, colEnd, stepIndex, type }: { numStr: string; colEnd: number; stepIndex: number; type: 0 | 1 }) {
    const startCol = colEnd - numStr.length + 1;
    return (
      <>
        {Array.from({ length: dividendCols }, (_, col) => {
          const relIdx = col - startCol;
          const hasDigit = relIdx >= 0 && relIdx < numStr.length;
          const flatIdx = stepIndex * 2 * dividendCols + type * dividendCols + relIdx;
          return (
            <td key={col} style={{ width: CW, padding: 2 }} className="align-middle text-center">
              {hasDigit
                ? validated
                  ? correctedDigit(workFlat[flatIdx] ?? "", numStr[relIdx] ?? "")
                  : digitInput(workFlat[flatIdx] ?? "", value => onWorkChange(stepIndex, type, relIdx, value))
                : emptyCell()}
            </td>
          );
        })}
      </>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 overflow-x-auto">
      <table className="mx-auto border-collapse table-fixed">
        <tbody>
          <tr>
            <td style={{ width: 20, padding: 0 }} />
            {Array.from({ length: dividendCols }, (_, i) => (
              <td key={i} style={{ width: CW, padding: 2 }} className="align-middle text-center">
                {dividendCell(i)}
              </td>
            ))}
            {Array.from({ length: quotientCols }, (_, i) => (
              <td
                key={i}
                style={{
                  width: CW,
                  padding: 2,
                  ...(i === 0 ? BSEP : {}),
                  ...(i < divisorStr.length ? { borderBottom: "2px solid var(--color-text-primary)" } : {}),
                }}
                className="align-middle text-center"
              >
                {i < divisorStr.length ? divisorCell(i) : null}
              </td>
            ))}
          </tr>
          <tr>
            <td style={{ padding: 0 }} />
            {Array.from({ length: dividendCols }, (_, k) => <td key={k} style={{ width: CW, padding: 0 }} />)}
            {Array.from({ length: quotientCols }, (_, qi) => (
              <td key={qi} style={{ width: CW, padding: 2, ...(qi === 0 ? BSEP : {}) }} className="align-middle text-center">
                {qi < quotientStr.length
                  ? <CorrectionInput
                      value={quotientInputs[qi] ?? ""}
                      onChange={value => onQuotientChange(qi, value.replace(/[^0-9]/g, "").slice(-1))}
                      correct={quotientStr[qi] ?? ""}
                      validated={validated}
                      width="w-8"
                    />
                  : emptyCell()}
              </td>
            ))}
          </tr>
          {steps.map((step, stepIndex) => {
            const partialStr = String(step.partialDiv);
            const productStr = String(step.product);
            const partialStart = step.colEnd - partialStr.length + 1;
            const productStart = step.colEnd - productStr.length + 1;
            const lineStart = Math.min(partialStart, productStart);
            return (
              <React.Fragment key={stepIndex}>
                {stepIndex > 0 && (
                <tr>
                  <td style={{ padding: 0 }} />
                  <WorkRow numStr={partialStr} colEnd={step.colEnd} stepIndex={stepIndex} type={0} />
                  <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                </tr>
                )}
                <tr>
                  <td style={{ padding: 0, textAlign: "center", verticalAlign: "middle", fontSize: 14, color: "var(--color-text-secondary)" }}>−</td>
                  <WorkRow numStr={productStr} colEnd={step.colEnd} stepIndex={stepIndex} type={1} />
                  <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                </tr>
                <tr>
                  <td style={{ padding: 0 }} />
                  {Array.from({ length: dividendCols }, (_, col) => (
                    <td key={col} style={{ width: CW, padding: 0 }}>
                      {col >= lineStart && col <= step.colEnd
                        ? <div className="my-1 h-px bg-[var(--color-text-primary)] opacity-50" />
                        : null}
                    </td>
                  ))}
                  <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                </tr>
              </React.Fragment>
            );
          })}
          <tr>
            <td colSpan={dividendCols} style={{ padding: "4px 6px 4px 0", textAlign: "right", verticalAlign: "middle", fontSize: 12, color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>
              Reste :
            </td>
            <td style={{ width: CW, padding: 2 }} className="align-middle text-center">
              <CorrectionInput
                value={remainderInput}
                onChange={value => onRemainderChange(value.replace(/[^0-9]/g, "").slice(0, 2))}
                correct={String(dividendInt % divisor)}
                validated={validated}
                width="w-8"
              />
            </td>
            <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
          </tr>
        </tbody>
      </table>
      <div className="flex items-center gap-2 pt-1">
        <span className="shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">Résultat :</span>
        <input
          type="text"
          inputMode="decimal"
          value={resultWrong ? decCorrect : decResult}
          disabled={validated}
          onChange={e => onDecResultChange(e.target.value.replace(/[^0-9,.]/g, ""))}
          className={`w-28 rounded-none border-0 border-b-2 px-2 py-1 text-center text-sm outline-none transition-colors disabled:opacity-60 ${
            resultWrong ? "border-amber-500 font-bold text-amber-600" : "border-[var(--color-accent-alg)]/60 focus:border-[var(--color-accent-alg)]"
          }`}
        />
      </div>
    </div>
  );
}

export function Exercise21({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const data = useMemo(() => {
    const makeQ = (decPlaces: 1 | 2) => {
      const scale = decPlaces === 1 ? 10 : 100;
      const minDividendInt = 100 * scale;
      const maxDividendInt = 999 * scale + (scale - 1);

      for (;;) {
        const divisor = randInt(2, 9);
        const minQuotientInt = Math.ceil(minDividendInt / divisor);
        const maxQuotientInt = Math.floor(maxDividendInt / divisor);
        const quotientInt = randInt(minQuotientInt, maxQuotientInt);
        const dividendInt = quotientInt * divisor;
        if (dividendInt < minDividendInt || dividendInt > maxDividendInt) continue;
        if (dividendInt % 10 === 0) continue;
        return {
          dividendInt,
          divisor,
          quotientInt,
          dividend: dividendInt / scale,
          quotient: quotientInt / scale,
          decPlaces,
        };
      }
    };
    const makeSmallDecimalQ = () => {
      const decPlaces = (placementRandom() < 0.5 ? 2 : 3) as 2 | 3;
      const scale = decPlaces === 2 ? 100 : 1000;
      for (;;) {
        const divisor = randInt(2, 9);
        const digits = Array.from({ length: 4 }, () => randInt(1, 9));
        digits[randInt(1, 2)] = 0;
        if (digits[3] === 0) digits[3] = randInt(1, 9);
        const dividendInt = Number(digits.join(""));
        if (dividendInt % divisor !== 0) continue;
        const quotientInt = dividendInt / divisor;
        return {
          dividendInt,
          divisor,
          quotientInt,
          dividend: dividendInt / scale,
          quotient: quotientInt / scale,
          decPlaces,
        };
      }
    };

    return Array.from({ length: questionCount }, (_, i) =>
      i % 2 === 0 ? makeQ(1) : makeSmallDecimalQ());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [quotients, setQuotients] = useState<string[][]>(() => data.map(() => Array(5).fill("")));
  const [remainders, setRemainders] = useState<string[]>(() => data.map(() => ""));
  const [works, setWorks] = useState<string[][]>(() => data.map(() => Array(80).fill("")));
  const [answers, setAnswers] = useState<string[]>(() => data.map(() => ""));
  const [dividendInputs, setDividendInputs] = useState<string[][]>(() =>
    data.map(q => Array(String(q.dividendInt).length).fill(""))
  );
  const [divisorInputs, setDivisorInputs] = useState<string[][]>(() =>
    data.map(q => Array(String(q.divisor).length).fill(""))
  );

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => { if (matchNum(answers[i] ?? "", q.quotient, 0.005)) pts += 2; });
    onValidated(pts, data.length * 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <PlacementInstruction text="Posez et effectuez les divisions en colonnes." />
      <div className={screenOrPrintCols(forPrint, columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3")}>
        {data.map((q, i) => (
          <div key={i} className="flex flex-col items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
            <div className="font-mono text-base font-bold text-[var(--color-text-primary)]">
              {fmtDec(q.dividend, q.decPlaces)} ÷ {q.divisor}
            </div>
            <DecimalDivisionGrid
              dividendInt={q.dividendInt}
              divisor={q.divisor}
              quotientInt={q.quotientInt}
              quotientInputs={quotients[i] ?? []}
              remainderInput={remainders[i] ?? ""}
              workFlat={works[i] ?? []}
              decResult={answers[i] ?? ""}
              decCorrect={fmtDec(q.quotient, q.decPlaces)}
              dividendInputs={dividendInputs[i]!}
              divisorInputs={divisorInputs[i]!}
              onQuotientChange={(idx, value) => setQuotients(prev => {
                const next = prev.map(row => [...row]);
                next[i]![idx] = value;
                return next;
              })}
              onRemainderChange={value => setRemainders(prev => {
                const next = [...prev];
                next[i] = value;
                return next;
              })}
              onWorkChange={(step, type, col, value) => setWorks(prev => {
                const next = prev.map(row => [...row]);
                const idx = step * 2 * String(q.dividendInt).length + type * String(q.dividendInt).length + col;
                next[i]![idx] = value;
                return next;
              })}
              onDecResultChange={value => setAnswers(prev => {
                const next = [...prev];
                next[i] = value;
                return next;
              })}
              onDividendChange={(idx, val) => setDividendInputs(p => { const n = p.map(r => [...r]); n[i]![idx] = val; return n; })}
              onDivisorChange={(idx, val) => setDivisorInputs(p => { const n = p.map(r => [...r]); n[i]![idx] = val; return n; })}
              validated={validated}
            />
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
    () => ({ kind: "hexagon",       d: ([2, 3, 4, 6, 12] as const)[randInt(0, 4)]! }),
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

// Première moitié : formes simples ; seconde moitié : multi-formes.
// Le plafond d'essais évite une boucle infinie quand le nombre de
// configurations distinctes est épuisé (impression avec beaucoup de questions).
function genFracItems(count: number): FracShapeItem[] {
  const items: FracShapeItem[] = [];
  const usedConfigs = new Set<string>();
  const singles = Math.ceil(count / 2);

  for (let i = 0; i < count; i++) {
    const isSingle = i < singles;
    let cfg;
    let tries = 0;
    do {
      cfg = isSingle ? pickSingleShapeCfg() : pickMultiShapeCfg();
    } while (usedConfigs.has(`${cfg.kind}-${cfg.d}`) && ++tries < 40);
    usedConfigs.add(`${cfg.kind}-${cfg.d}`);
    if (isSingle) {
      items.push({ ...cfg, n: randInt(1, cfg.d - 1), copies: 1, multi: false });
    } else {
      const copies = randInt(2, 3);
      items.push({ ...cfg, n: randInt(cfg.d + 1, copies * cfg.d - 1), copies, multi: true });
    }
  }

  return items;
}

// ── Exercise 22 — Colorier les fractions (A4.1 Ex2+Ex4 style) ────────────────

export function Exercise22({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const items = useMemo(() => genFracItems(questionCount), [exerciseKey, questionCount]);
  const [coloredSets, setColoredSets] = useState<Set<number>[]>(() => items.map(() => new Set<number>()));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    items.forEach((item, i) => { if ((coloredSets[i]?.size ?? 0) === item.n) pts += 0.5; });
    onValidated(pts, items.length * 0.5);
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
      <div className={forPrint ? printColsClass(columns) : "grid grid-cols-2 items-stretch gap-3"}>
        {items.map((item, i) => {
          const correctSet = item.multi
            ? preColorFlat(item.n, item.d)
            : new Set(Array.from({ length: item.n }, (_, k) => k));
          const studentSet = coloredSets[i]!;
          const displayColored = validated
            ? new Set([...studentSet].filter(x => correctSet.has(x)))
            : studentSet;
          const missSet = validated ? new Set([...correctSet].filter(x => !studentSet.has(x))) : undefined;
          const extraSet = validated ? new Set([...studentSet].filter(x => !correctSet.has(x))) : undefined;
          return (
            <div key={i} className="flex h-full flex-col rounded-xl border border-[var(--color-border-default)] p-3">
              <div className="flex h-full flex-1 items-center gap-3">
                <div className="shrink-0">
                  <FractionDisplay numerator={item.n} denominator={item.d} highlightPart="num" />
                </div>
                <div className="flex flex-1 items-center justify-center overflow-hidden">
                  {item.multi ? (
                    <ShapesRow kind={item.kind} d={item.d} copies={item.copies}
                      colored={displayColored}
                      onToggle={validated ? undefined : fi => toggle(i, fi)}
                      scale={computeScale(item.kind, item.copies)}
                      missSet={missSet}
                      extraSet={extraSet}
                    />
                  ) : (
                    <FractionShape kind={item.kind} d={item.d}
                      colored={displayColored}
                      onToggle={validated ? undefined : ci => toggle(i, ci)}
                      missSet={missSet}
                      extraSet={extraSet}
                    />
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

// ── ExerciseFracRead — Lire les fractions (A4.1 Ex3+Ex5 style) ───────────────

export function ExerciseFracRead({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const items = useMemo(() => genFracItems(questionCount), [exerciseKey, questionCount]);
  const [nums, setNums] = useState<string[]>(() => Array(items.length).fill(""));
  const [dens, setDens] = useState<string[]>(() => Array(items.length).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    items.forEach((item, i) => {
      const n = parseInt(nums[i] ?? "");
      const d = parseInt(dens[i] ?? "");
      if (!isNaN(n) && !isNaN(d) && n === item.n && d === item.d) pts += 0.5;
    });
    onValidated(pts, items.length * 0.5);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <PlacementInstruction text="Observez les formes coloriées et écrivez la fraction représentée." />
      <div className={forPrint ? printColsClass(columns) : "grid grid-cols-2 items-stretch gap-3"}>
        {items.map((item, i) => {
          const preColored = item.multi ? preColorFlat(item.n, item.d) : new Set(Array.from({ length: item.n }, (_, k) => k));
          return (
            <div key={i} className="flex h-full flex-col rounded-xl border border-[var(--color-border-default)] p-3">
              <div className="flex h-full flex-1 items-center gap-3">
                <div className="flex shrink-0 flex-col items-center gap-1">
                  <CorrectionInput
                    value={nums[i] ?? ""}
                    onChange={v => setNums(p => { const n = [...p]; n[i] = v; return n; })}
                    correct={String(item.n)}
                    validated={validated}
                    width="w-12"
                    variant="box"
                  />
                  <span className="h-[2px] w-12 rounded bg-[var(--color-text-primary)]" />
                  <CorrectionInput
                    value={dens[i] ?? ""}
                    onChange={v => setDens(p => { const n = [...p]; n[i] = v; return n; })}
                    correct={String(item.d)}
                    validated={validated}
                    width="w-12"
                    variant="box"
                  />
                </div>
                <div className="flex flex-1 items-center justify-center overflow-hidden">
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

export function Exercise23({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(8);
  const questions = useMemo(() => {
    // Première moitié : conversions entières ; seconde moitié : décimales.
    const pairs = [
      ["km", "m"], ["m", "cm"], ["km", "hm"], ["cm", "mm"],
      ["m", "km"], ["cm", "m"], ["mm", "m"], ["hm", "m"],
    ];
    const pool = shuffle(pairs);
    const intCount = Math.ceil(questionCount / 2);
    return Array.from({ length: questionCount }, (_, i) => {
      const [from, to] = pool[i % pool.length]!;
      const factor = convFactor(from!, to!);
      let value: number, decPlaces: number;
      if (i < intCount) {
        value = randInt(1, 999);
        decPlaces = 0;
      } else {
        const intPart = randInt(1, 99);
        const decPart = randInt(1, 9);
        value = intPart + decPart / 10;
        decPlaces = 1;
      }
      const result = Math.round(value * factor * 1000) / 1000;
      return { value, from: from!, to: to!, result, decPlaces };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => { if (matchNum(answers[i] ?? "", q.result, q.result > 1 ? 0.01 : 0.0001)) pts += 0.5; });
    onValidated(pts, questions.length * 0.5);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Transformez dans l&apos;unité indiquée.</p>
      <div className={`${screenOrPrintCols(forPrint, columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3")} text-base`}>
        {questions.map((q, i) => {
          const displayVal = q.decPlaces > 0 ? fmtDec(q.value, 1) : String(q.value);
          const correct = q.result % 1 === 0 ? String(q.result) : fmtDec(q.result, q.result.toString().split(".")[1]?.length ?? 1);
          return (
            <div key={i} className="flex items-center gap-2">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="inline-flex w-[7.5rem] shrink-0 justify-start font-mono text-[var(--color-text-primary)]">{displayVal} {q.from}</span>
              <span className="inline-flex w-4 shrink-0 justify-center text-[var(--color-text-secondary)]">=</span>
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

export function Exercise24({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(8);
  const questions = useMemo(() => {
    function r1(min: number, max: number) { return Math.round((placementRandom() * (max - min) + min) * 10) / 10; }
    type Q = { left: string; op: string; right: string; result: number };
    const makers: (() => Q)[] = [
      // 1. int + dec
      () => {
        const a = randInt(10, 50), b = r1(1, 9);
        return { left: String(a), op: "+", right: fmtDec(b, 1), result: Math.round((a + b) * 10) / 10 };
      },
      // 2. dec + dec
      () => {
        const a = r1(5, 20), b = r1(1, 10);
        return { left: fmtDec(a, 1), op: "+", right: fmtDec(b, 1), result: Math.round((a + b) * 10) / 10 };
      },
      // 3. int - dec
      () => {
        const a = randInt(15, 50), b = r1(1, 9);
        return { left: String(a), op: "−", right: fmtDec(b, 1), result: Math.round((a - b) * 10) / 10 };
      },
      // 4. dec - dec
      () => {
        const a = r1(10, 30); const b = r1(1, a - 1);
        return { left: fmtDec(a, 1), op: "−", right: fmtDec(b, 1), result: Math.round((a - b) * 10) / 10 };
      },
      // 5. int × special factor
      () => {
        const f = SPECIAL_FACTORS[randInt(0, 3)]!;
        let a = randInt(4, 20);
        while ((a * f * 100) % 1 !== 0) a++;
        return { left: String(a), op: "×", right: fmtDec(f, f === 0.2 || f === 0.5 ? 1 : 2), result: Math.round(a * f * 100) / 100 };
      },
      // 6. dec × int
      () => {
        const a = r1(1, 9), b = randInt(2, 8);
        return { left: fmtDec(a, 1), op: "×", right: String(b), result: Math.round(a * b * 10) / 10 };
      },
      // 7. int ÷ special factor
      () => {
        const f = SPECIAL_FACTORS[randInt(0, 3)]!;
        let a = randInt(2, 15);
        while ((a / f) % 1 !== 0) a++;
        return { left: String(a), op: "÷", right: fmtDec(f, f === 0.2 || f === 0.5 ? 1 : 2), result: Math.round(a / f * 100) / 100 };
      },
      // 8. dec ÷ int
      () => {
        const b = randInt(2, 6); const q = r1(1, 9);
        const a = Math.round(q * b * 10) / 10;
        return { left: fmtDec(a, 1), op: "÷", right: String(b), result: q };
      },
    ];
    return Array.from({ length: questionCount }, (_, i) => makers[i % makers.length]!());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => { if (matchNum(answers[i] ?? "", q.result, 0.01)) pts += 0.5; });
    onValidated(pts, questions.length * 0.5);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-3">
      <PlacementInstruction text="Effectuez les calculs." />
      <div className={`${screenOrPrintCols(forPrint, columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3")} text-base`}>
        {questions.map((q, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <span className="inline-flex w-12 shrink-0 justify-end font-mono text-[var(--color-text-primary)]">{q.left}</span>
            <span className="inline-flex w-4 shrink-0 justify-center font-mono text-[var(--color-text-secondary)]">{q.op}</span>
            <span className="inline-flex w-12 shrink-0 justify-start font-mono text-[var(--color-text-primary)]">{q.right}</span>
            <span className="inline-flex w-4 shrink-0 justify-center text-[var(--color-text-secondary)]">=</span>
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
    const b = randInt(8, 16), a = randOneDecimal(40, 100);
    const h = randInt(3, Math.max(3, Math.floor(a - 1)));
    return { b, a, h, perimeter: 2 * (a + b), area: b * h };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ansP, setAnsP] = useState("");
  const [ansA, setAnsA] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchNum(ansP, data.perimeter, 0.01)) pts++;
    if (matchInt(ansA, data.area)) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  const { b, a, h } = data;
  // Fixed visual parallelogram — shape identical every refresh
  const svgW = 350, svgH = 145;
  const BLx = 76,  BLy = 118; // bottom-left
  const BRx = 216, BRy = 118; // bottom-right  (base = 140px)
  const TLx = 108, TLy = 38;  // top-left      (skew=32px, height=80px)
  const TRx = 248, TRy = 38;  // top-right
  const paraPts = `${BLx},${BLy} ${BRx},${BRy} ${TRx},${TRy} ${TLx},${TLy}`;
  // Height bracket — outside right
  const bkX = 286, tickLen = 5;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le périmètre et l&apos;aire.</p>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} width={svgW} height={svgH} className="block mx-auto h-auto w-full max-w-[480px] overflow-visible">
        {/* Shape */}
        <polygon points={paraPts} fill="var(--color-accent-alg)" fillOpacity={0.15} stroke="var(--color-accent-alg)" strokeWidth="2" />
        {/* Base label above */}
        <text x={(TLx + TRx) / 2} y={TLy - 8} textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">{b} cm</text>
        {/* Side label left */}
        <text x={BLx - 10} y={(BLy + TLy) / 2} textAnchor="end" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">{fmtMeasure(a)} cm</text>
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
      <div className={GEO_ANSWERS_GRID}>
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
    let c = randOneDecimal(50, 110); while (c === a || c === b) c = randOneDecimal(50, 110);
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
    if (matchNum(ansP, data.perimeter, 0.01)) pts++;
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
        <text x={(Tx + BLx) / 2 - 8} y={(Ty + BLy) / 2 - 4} textAnchor="end" fontSize="12" fill="var(--color-text-secondary)">c = {fmtMeasure(data.c)} cm</text>
        {/* Dashed reference lines to bracket */}
        <line x1={BRx} y1={BRy} x2={bkX - 2} y2={BRy} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
        <line x1={Tx} y1={Ty} x2={bkX - 2} y2={Ty} stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
        {/* Height bracket */}
        <line x1={bkX} y1={Ty} x2={bkX} y2={BRy} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <line x1={bkX - tickLen} y1={Ty} x2={bkX + tickLen} y2={Ty} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <line x1={bkX - tickLen} y1={BRy} x2={bkX + tickLen} y2={BRy} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <text x={bkX + tickLen + 4} y={(Ty + BRy) / 2} textAnchor="start" fontSize="12" fill="var(--color-text-secondary)" dominantBaseline="middle">h = {data.h} cm</text>
      </svg>
      <div className={GEO_ANSWERS_GRID}>
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
    const d1 = pa * k * 2, d2 = pb * k * 2, side = pc * k + randInt(1, 9) / 10;
    return { d1, d2, side, perimeter: 4 * side, area: (d1 * d2) / 2 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ansP, setAnsP] = useState("");
  const [ansA, setAnsA] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (matchNum(ansP, data.perimeter, 0.01)) pts++;
    if (matchInt(ansA, data.area)) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  // Fixed visual losange — shape identical every refresh
  const svgW = 330, svgH = 178;
  const cx = 125, cy = 73;
  const rx = 78, ry = 52; // fixed half-diagonals in pixels
  const Ttop = [cx, cy - ry], Tright = [cx + rx, cy], Tbot = [cx, cy + ry], Tleft = [cx - rx, cy];
  const diaPts = `${Ttop[0]},${Ttop[1]} ${Tright[0]},${Tright[1]} ${Tbot[0]},${Tbot[1]} ${Tleft[0]},${Tleft[1]}`;
  const bkX = 235, bkY = 148, tickLen = 5;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez le périmètre et l&apos;aire.</p>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} width={svgW} height={svgH} className="block mx-auto h-auto w-full max-w-[420px] overflow-visible">
        {/* Shape */}
        <polygon points={diaPts}
          fill="var(--color-accent-alg)" fillOpacity={0.15} stroke="var(--color-accent-alg)" strokeWidth="2" />
        {/* Side label — top-left side */}
        <text x={(Ttop[0]! + Tleft[0]!) / 2 - 12} y={(Ttop[1]! + Tleft[1]!) / 2} textAnchor="end" fontSize="11" fill="var(--color-text-secondary)" dominantBaseline="middle">c = {fmtMeasure(data.side)} cm</text>
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
      <div className={GEO_ANSWERS_GRID}>
        <GeoRow label="Périmètre" unit="cm" value={data.perimeter} answer={ansP} onChange={setAnsP} validated={validated} />
        <GeoRow label="Aire" unit="cm²" value={data.area} answer={ansA} onChange={setAnsA} validated={validated} />
      </div>
    </div>
  );
}

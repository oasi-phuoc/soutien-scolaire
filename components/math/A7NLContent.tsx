"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useEvalReveal } from "@/lib/eval-reveal-context";

function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle<T>(a: T[]): T[] {
  const c = [...a];
  for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [c[i], c[j]] = [c[j]!, c[i]!];
  }
  return c;
}

// Unicode minus for display, accepts ASCII hyphen too
function _fmtInt(n: number): string {
  if (n === 0) return "0";
  if (n > 0) return `+${n}`;
  return `−${Math.abs(n)}`; // − U+2212
}

function fmtNum(n: number, step: number): string {
  if (n === 0) return "0";
  const abs = Math.abs(n);
  const decimals = step < 1 ? (step <= 0.1 ? 1 : 1) : 0;
  const absFmt = decimals > 0 ? abs.toFixed(decimals).replace(".", ",") : String(abs);
  return n > 0 ? `+${absFmt}` : `−${absFmt}`;
}

function normalize(s: string): string {
  return s.trim().replace(/−/g, "-").replace(/–/g, "-").replace(/,/g, ".");
}

function acceptable(n: number, step = 1): string[] {
  if (n === 0) return ["0"];
  const abs = Math.abs(n);
  const decimals = step < 1 ? 1 : 0;
  const absDot = decimals > 0 ? abs.toFixed(decimals) : String(abs);
  const absComma = absDot.replace(".", ",");
  const variants = [...new Set([absDot, absComma])];
  if (n > 0) return variants.flatMap(v => [v, `+${v}`]);
  return variants.flatMap(v => [`-${v}`, `−${v}`]);
}

// ── SVG axis ────────────────────────────────────────────────────────────────

const ML = 30, lineW = 420, lineY = 55;

function nlPos(v: number, min: number, max: number): number {
  return ML + ((v - min) / (max - min)) * lineW;
}

function NLAxis({ min, max, step = 1, hideAt = [] }: {
  min: number; max: number; step?: number; hideAt?: number[];
}) {
  // Support descending axes (min > max): ticks are always generated in value order
  const lo = Math.min(min, max);
  const hi = Math.max(min, max);
  const range = hi - lo;
  const n = Math.round(range / step);
  const ticks: number[] = [];
  for (let i = 0; i <= n; i++) ticks.push(Math.round((lo + i * step) * 1000) / 1000);

  // Label only at clean multiples of labelStep (value-based, not endpoint-based)
  const labelStep = step >= 1
    ? (range > 30 ? 10 : range > 15 ? 5 : range > 7 ? 2 : 1)
    : 1; // for decimals, label at whole-number values

  return (
    <>
      <line x1={ML} y1={lineY} x2={ML + lineW} y2={lineY} stroke="currentColor" strokeWidth="2" />
      <polygon points={`${ML - 8},${lineY} ${ML},${lineY - 4} ${ML},${lineY + 4}`} fill="currentColor" />
      <polygon points={`${ML + lineW + 8},${lineY} ${ML + lineW},${lineY - 4} ${ML + lineW},${lineY + 4}`} fill="currentColor" />
      {ticks.map((v, ti) => {
        const x = nlPos(v, min, max);
        const isHidden = hideAt.some(h => Math.abs(h - v) < 0.001);
        // Show label only at exact multiples of labelStep, not at arbitrary endpoints
        const isClean = Math.abs(Math.round(v / labelStep) * labelStep - v) < 0.001;
        const isLabel = isClean && !isHidden;
        const isMid = step >= 1 && labelStep >= 5 && Math.abs(Math.round(v / 5) * 5 - v) < 0.001;
        const tickLen = isLabel ? 7 : isMid ? 4 : 2;
        const color = v < -0.0001 ? "#ef4444" : v > 0.0001 ? "#3b82f6" : "#0f172a";
        return (
          <g key={ti}>
            <line x1={x} y1={lineY - tickLen} x2={x} y2={lineY + tickLen}
              stroke={color} strokeWidth={Math.abs(v) < 0.001 ? 2.5 : isLabel ? 1.5 : 1} />
            {isLabel && (
              <text x={x} y={lineY + 22} textAnchor="middle" fontSize="10" fill={color}
                fontWeight={Math.abs(v) < 0.001 ? "bold" : "normal"}>
                {fmtNum(v, step)}
              </text>
            )}
          </g>
        );
      })}
    </>
  );
}

// ── Read exercises (Ex 1 and Ex 3) ──────────────────────────────────────────

type NLReadQuestion = { min: number; max: number; step: number; arrow: number };
type NLReadCfg = { questions: NLReadQuestion[] };

function genMixed(): NLReadCfg {
  // Q1: integers ascending, range ~10–15 units within [-50, +50]
  const range1 = rnd(10, 15);
  const min1 = rnd(-48, 50 - range1);
  const max1 = min1 + range1;
  const cands1: number[] = [];
  for (let v = min1 + 1; v < max1; v++) cands1.push(v);
  const arrow1 = shuffle(cands1)[0]!;

  // Q2: integers descending (min > max), range ~10–15, within [-50, +50]
  const range2 = rnd(10, 15);
  const hiEnd = rnd(-50 + range2, 50);
  const loEnd = hiEnd - range2;
  const cands2: number[] = [];
  for (let v = loEnd + 1; v < hiEnd; v++) cands2.push(v);
  const arrow2 = shuffle(cands2)[0]!;

  // Q3: decimal 0.5 step, 16 ticks (range=8), within [-20, +20]
  const min3 = rnd(-18, 12);
  const max3 = min3 + 8;
  const cands3: number[] = [];
  for (let i = 1; i <= 15; i++) cands3.push(Math.round((min3 + i * 0.5) * 10) / 10);
  const arrow3 = shuffle(cands3)[0]!;

  return { questions: [
    { min: min1, max: max1, step: 1, arrow: arrow1 },
    { min: hiEnd, max: loEnd, step: 1, arrow: arrow2 }, // descending: min > max
    { min: min3, max: max3, step: 0.5, arrow: arrow3 },
  ]};
}

function genNegOnly(): NLReadCfg {
  const ranges = [10, 20, 30, 40, 50] as const;
  const range = ranges[rnd(0, ranges.length - 1)];
  const max = rnd(-2, -1);
  const min = max - range;
  const third = Math.floor(range / 3);
  const a1 = rnd(min + 1, min + third);
  const a2 = rnd(min + third + 1, min + 2 * third);
  const a3 = rnd(min + 2 * third + 1, max - 1);
  return { questions: [
    { min, max, step: 1, arrow: a1 },
    { min, max, step: 1, arrow: a2 },
    { min, max, step: 1, arrow: a3 },
  ]};
}

const svgHRead = 85;

function NLReadExercise({ exNum, validateCommand, onValidated, cfg }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void; cfg: NLReadCfg;
}) {
  const [vals, setVals] = useState<string[]>(() => cfg.questions.map(() => ""));
  const [wrongs, setWrongs] = useState<boolean[]>(() => cfg.questions.map(() => false));
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const w = cfg.questions.map((q, i) => !acceptable(q.arrow, q.step).includes(normalize(vals[i] ?? "")));
    setWrongs(w);
    onValidated(w.every(x => !x));
  }, [validated, cfg, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  const inputCls = "flex-1 h-[2.75rem] rounded-none border-0 border-b-2 px-4 py-2.5 text-sm font-mono outline-none transition-colors";

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Écrivez la valeur indiquée par chaque flèche.</p>
      <div className="space-y-5">
        {cfg.questions.map((q, ai) => {
          const x = nlPos(q.arrow, q.min, q.max);
          const isWrong = revealCorrection && wrongs[ai];
          const expected = fmtNum(q.arrow, q.step);
          return (
            <div key={ai} className="space-y-2">
              <div className="rounded-xl border border-[var(--color-border-default)] p-3">
                <div className="w-full overflow-x-auto">
                  <svg viewBox={`0 0 480 ${svgHRead}`} width="100%" style={{ display: "block" }}>
                    <NLAxis min={q.min} max={q.max} step={q.step} hideAt={[q.arrow]} />
                    <line x1={x} y1={12} x2={x} y2={lineY - 6}
                      stroke="var(--color-accent-alg)" strokeWidth="1.5" strokeDasharray="4,2" />
                    <polygon points={`${x},${lineY - 4} ${x - 4},${lineY - 11} ${x + 4},${lineY - 11}`}
                      fill="var(--color-accent-alg)" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="shrink-0 w-5 text-xs font-bold text-[var(--color-accent-alg)]">{ai + 1}.</span>
                {isWrong ? (
                  <div className={`${inputCls} rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center`}>
                    <span className="text-xs text-[var(--color-text-primary)] leading-none">{vals[ai] || "—"}</span>
                    <span className="text-xs font-bold text-amber-600 leading-none">{expected}</span>
                  </div>
                ) : (
                  <input type="text" inputMode="decimal" value={vals[ai] ?? ""} disabled={validated}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVals((p: string[]) => p.map((c: string, ci: number) => ci === ai ? e.target.value.replace(/[^0-9,.\-]/g, "") : c))}

                    className={`${inputCls} ${validated ? "border-[var(--color-accent-alg)]/60" : "border-[var(--color-accent-alg)]/60 focus:border-[var(--color-accent-alg)]"}`} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function A7NLReadMixedExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const [cfg] = useState<NLReadCfg>(genMixed);
  return <NLReadExercise exNum={exNum} validateCommand={validateCommand} onValidated={onValidated} cfg={cfg} />;
}

export function A7NLReadNegExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const [cfg] = useState<NLReadCfg>(genNegOnly);
  return <NLReadExercise exNum={exNum} validateCommand={validateCommand} onValidated={onValidated} cfg={cfg} />;
}

// ── Place exercises (Ex 2 and Ex 4) ─────────────────────────────────────────

type NLPlaceGroup = { min: number; max: number; step: number; positions: number[] };
type NLPlaceCfg = { groups: NLPlaceGroup[] };

function genPlaceMixed(): NLPlaceCfg {
  // Group 1: integers, mixed positive/negative
  const min1 = rnd(-6, -3);
  const max1 = min1 + rnd(8, 11);
  const cands1: number[] = [];
  for (let v = min1 + 1; v < max1; v++) cands1.push(v);
  const positions1 = shuffle(cands1).slice(0, 5).sort((a, b) => a - b);

  // Group 2: decimal 0.5 step, range toward -50
  const min2 = rnd(-48, -35);
  const max2 = min2 + 8; // 8-unit range = 16 half-steps
  const cands2: number[] = [];
  for (let i = 1; i <= 15; i++) cands2.push(Math.round((min2 + i * 0.5) * 10) / 10);
  const positions2 = shuffle(cands2).slice(0, 4).sort((a, b) => a - b);

  return { groups: [
    { min: min1, max: max1, step: 1, positions: positions1 },
    { min: min2, max: max2, step: 0.5, positions: positions2 },
  ]};
}

function genPlaceNeg(): NLPlaceCfg {
  function makeGroup() {
    const ranges = [10, 20, 30, 40, 50] as const;
    const range = ranges[rnd(0, ranges.length - 1)]!;
    const max = rnd(-2, -1);
    const min = max - range;
    const third = Math.floor(range / 3);
    const cands: number[] = [];
    for (let v = min + 1; v < max; v++) cands.push(v);
    const p1 = rnd(min + 1, min + third);
    const p2 = rnd(min + third + 1, min + 2 * third);
    const p3 = rnd(min + 2 * third + 1, max - 1);
    const p4 = shuffle(cands.filter(v => v !== p1 && v !== p2 && v !== p3))[0] ?? p2 + 1;
    return { min, max, step: 1 as const, positions: [p1, p2, p3, p4].sort((a, b) => a - b) };
  }
  return { groups: [makeGroup(), makeGroup()] };
}

const svgHPlace = 100;

function NLPlaceGroup({ group, gi, assignments, activeChip, validated, posWrong, revealCorrection, onChipClick, onPosClick }: {
  group: NLPlaceGroup;
  gi: number;
  assignments: (number | null)[];
  activeChip: number | null;
  validated: boolean;
  posWrong: boolean[];
  revealCorrection: boolean;
  onChipClick: (v: number) => void;
  onPosClick: (gi: number, pi: number) => void;
}) {
  const [chips] = useState<number[]>(() => shuffle([...group.positions]));
  const assignedSet = new Set(assignments.filter((a: number | null) => a !== null));
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-[var(--color-border-default)] p-3">
        <div className="w-full overflow-x-auto">
          <svg viewBox={`0 0 480 ${svgHPlace}`} width="100%" style={{ display: "block" }}>
            <NLAxis min={group.min} max={group.max} step={group.step} hideAt={group.positions} />
            {group.positions.map((v, pi) => {
              const x = nlPos(v, group.min, group.max);
              const assigned = assignments[pi];
              const w = revealCorrection && posWrong[pi];
              const fillColor = w ? "#FEF3C7" : assigned !== null ? "#DBEAFE" : "#F3F4F6";
              const strokeColor = w ? "var(--color-correction)" : assigned !== null ? "var(--color-accent-alg)" : "#9CA3AF";
              return (
                <g key={pi} style={{ cursor: validated ? "default" : "pointer" }} onClick={() => onPosClick(gi, pi)}>
                  <circle cx={x} cy={lineY} r="7" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
                  <text x={x} y={lineY - 14} textAnchor="middle" fontSize="9" fontWeight="bold"
                    fill="var(--color-accent-alg)">P{pi + 1}</text>
                  {assigned !== null && (
                    <text x={x} y={lineY + 35} textAnchor="middle" fontSize="10" fontWeight="bold"
                      fill={w ? "#D97706" : "var(--color-accent-alg)"}>
                      {w ? `${fmtNum(assigned, group.step)}≠${fmtNum(v, group.step)}` : fmtNum(assigned, group.step)}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <span className="shrink-0 text-sm font-bold text-[var(--color-accent-alg)] pt-2">{gi + 1}.</span>
        <div className="flex flex-wrap gap-2">
          {chips.map((v: number) => {
            const isAssigned = assignedSet.has(v);
            const isActive = activeChip === v;
            let cls = "w-16 rounded-xl border py-2 text-sm font-mono font-bold text-center transition-colors ";
            if (isActive) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
            else if (isAssigned) cls += "border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] opacity-50";
            else cls += "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)] cursor-pointer";
            return (
              <button key={v} type="button" className={cls}
                onClick={() => onChipClick(v)} disabled={validated}>
                {fmtNum(v, group.step)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function NLPlaceExercise({ exNum, validateCommand, onValidated, cfg }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void; cfg: NLPlaceCfg;
}) {
  const [allAssignments, setAllAssignments] = useState<(number | null)[][]>(
    () => cfg.groups.map(g => g.positions.map(() => null))
  );
  const [activeChip, setActiveChip] = useState<{ gi: number; v: number } | null>(null);
  const [validated, setValidated] = useState(false);
  const [allWrong, setAllWrong] = useState<boolean[][]>(
    () => cfg.groups.map(g => g.positions.map(() => false))
  );
  const revealCorrection = useEvalReveal();

  function handleChipClick(v: number, gi: number) {
    if (validated) return;
    setActiveChip((prev: { gi: number; v: number } | null) => prev?.gi === gi && prev.v === v ? null : { gi, v });
  }

  function handlePosClick(gi: number, pi: number) {
    if (validated || activeChip === null || activeChip.gi !== gi) return;
    const chip = activeChip.v;
    setAllAssignments((prev: (number | null)[][]) => prev.map((row: (number | null)[], ri: number) => {
      if (ri !== gi) return row;
      const next = row.map((a: number | null) => a === chip ? null : a);
      next[pi] = chip;
      return next;
    }));
    setActiveChip(null);
  }

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const wrongGroups = cfg.groups.map((g, gi) =>
      g.positions.map((v, pi) => allAssignments[gi]?.[pi] !== v)
    );
    setAllWrong(wrongGroups);
    onValidated(wrongGroups.every(g => g.every(w => !w)));
  }, [validated, cfg, allAssignments, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Cliquez un nombre ci-dessous, puis cliquez sa position P sur la droite numérique.</p>
      <div className="space-y-6">
        {cfg.groups.map((group, gi) => (
          <NLPlaceGroup key={gi}
            group={group} gi={gi}
            assignments={(allAssignments[gi] ?? []) as (number | null)[]}
            activeChip={(activeChip?.gi === gi ? activeChip.v : null) as number | null}
            validated={validated as boolean}
            posWrong={(allWrong[gi] ?? []) as boolean[]}
            revealCorrection={revealCorrection}
            onChipClick={(v: number) => handleChipClick(v, gi)}
            onPosClick={handlePosClick}
          />
        ))}
      </div>
    </div>
  );
}

export function A7NLPlaceMixedExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const [cfg] = useState<NLPlaceCfg>(genPlaceMixed);
  return <NLPlaceExercise exNum={exNum} validateCommand={validateCommand} onValidated={onValidated} cfg={cfg} />;
}

export function A7NLPlaceNegExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const [cfg] = useState<NLPlaceCfg>(genPlaceNeg);
  return <NLPlaceExercise exNum={exNum} validateCommand={validateCommand} onValidated={onValidated} cfg={cfg} />;
}

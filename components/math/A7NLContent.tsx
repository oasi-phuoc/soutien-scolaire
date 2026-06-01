"use client";

import React, { useCallback, useEffect, useState } from "react";

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
function fmtInt(n: number): string {
  if (n === 0) return "0";
  if (n > 0) return `+${n}`;
  return `−${Math.abs(n)}`; // − U+2212
}

function normalize(s: string): string {
  return s.trim().replace(/−/g, "-").replace(/–/g, "-");
}

function acceptable(n: number): string[] {
  if (n === 0) return ["0"];
  if (n > 0) return [`${n}`, `+${n}`];
  return [`-${Math.abs(n)}`];
}

// ── SVG axis ────────────────────────────────────────────────────────────────

const ML = 30, lineW = 420, lineY = 55;

function nlPos(v: number, min: number, max: number): number {
  return ML + ((v - min) / (max - min)) * lineW;
}

function NLAxis({ min, max }: { min: number; max: number }) {
  const range = max - min;
  const labelEvery = range <= 10 ? 1 : range <= 20 ? 2 : range <= 30 ? 5 : 10;
  const ticks: number[] = [];
  for (let v = min; v <= max; v++) ticks.push(v);
  return (
    <>
      <line x1={ML} y1={lineY} x2={ML + lineW} y2={lineY} stroke="currentColor" strokeWidth="2" />
      <polygon points={`${ML - 8},${lineY} ${ML},${lineY - 4} ${ML},${lineY + 4}`} fill="currentColor" />
      <polygon points={`${ML + lineW + 8},${lineY} ${ML + lineW},${lineY - 4} ${ML + lineW},${lineY + 4}`} fill="currentColor" />
      {ticks.map(v => {
        const x = nlPos(v, min, max);
        const isLabel = v % labelEvery === 0 || v === min || v === max;
        const isMid = labelEvery >= 10 && v % 5 === 0;
        const tickLen = isLabel ? 7 : isMid ? 4 : 2;
        const color = v < 0 ? "#ef4444" : v > 0 ? "#3b82f6" : "#0f172a";
        return (
          <g key={v}>
            <line x1={x} y1={lineY - tickLen} x2={x} y2={lineY + tickLen}
              stroke={color} strokeWidth={v === 0 ? 2.5 : isLabel ? 1.5 : 1} />
            {isLabel && (
              <text x={x} y={lineY + 22} textAnchor="middle" fontSize="10" fill={color}
                fontWeight={v === 0 ? "bold" : "normal"}>
                {fmtInt(v)}
              </text>
            )}
          </g>
        );
      })}
    </>
  );
}

// ── Read exercises (Ex 1 and Ex 3) ──────────────────────────────────────────

type NLReadCfg = { min: number; max: number; arrows: number[] };

function genMixed(): NLReadCfg {
  const min = rnd(-8, -3);
  const max = min + 10;
  const cands: number[] = [];
  for (let v = min + 1; v < max; v++) cands.push(v);
  const arrows = shuffle(cands).slice(0, 3).sort((a, b) => a - b);
  return { min, max, arrows };
}

function genNegOnly(): NLReadCfg {
  const ranges = [10, 20, 30, 40, 50] as const;
  const range = ranges[rnd(0, ranges.length - 1)];
  const max = rnd(-2, -1);
  const min = max - range;
  // spread 3 arrows across thirds of the range
  const third = Math.floor(range / 3);
  const a1 = rnd(min + 1, min + third);
  const a2 = rnd(min + third + 1, min + 2 * third);
  const a3 = rnd(min + 2 * third + 1, max - 1);
  const arrows = [a1, a2, a3].sort((a, b) => a - b);
  return { min, max, arrows };
}

const svgHRead = 85;

function NLReadExercise({ exNum, validateCommand, onValidated, cfg }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void; cfg: NLReadCfg;
}) {
  const [vals, setVals] = useState<string[]>(() => cfg.arrows.map(() => ""));
  const [wrongs, setWrongs] = useState<boolean[]>(() => cfg.arrows.map(() => false));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const w = cfg.arrows.map((v, i) => !acceptable(v).includes(normalize(vals[i] ?? "")));
    setWrongs(w);
    onValidated(w.every(x => !x));
  }, [validated, cfg, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  const inputCls = "flex-1 h-[2.75rem] rounded-xl border px-4 py-2.5 text-sm font-mono outline-none transition-colors";
  const CLS_WRONG = "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Écrivez la valeur indiquée par chaque flèche.</p>
      <div className="space-y-5">
        {cfg.arrows.map((v, ai) => {
          const x = nlPos(v, cfg.min, cfg.max);
          const isWrong = wrongs[ai];
          const expected = fmtInt(v);
          return (
            <div key={ai} className="space-y-2">
              <div className="rounded-xl border border-[var(--color-border-default)] p-3">
                <div className="w-full overflow-x-auto">
                  <svg viewBox={`0 0 480 ${svgHRead}`} width="100%" style={{ display: "block" }}>
                    <NLAxis min={cfg.min} max={cfg.max} />
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
                  <div className={`${inputCls} ${CLS_WRONG} flex items-center gap-2`}>
                    <span className="line-through text-amber-500 text-xs">{vals[ai] || "—"}</span>
                    <span className="text-xs font-bold text-[var(--color-text-primary)]">{expected}</span>
                  </div>
                ) : (
                  <input type="text" inputMode="numeric" value={vals[ai] ?? ""} disabled={validated}
                    onChange={e => setVals(p => p.map((c, ci) => ci === ai ? e.target.value : c))}
                    className={`${inputCls} ${validated ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20" : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]"}`} />
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

type NLPlaceCfg = { min: number; max: number; positions: number[] };

function genPlaceMixed(): NLPlaceCfg {
  const min = rnd(-6, -3);
  const max = min + rnd(8, 11);
  const cands: number[] = [];
  for (let v = min + 1; v < max; v++) cands.push(v);
  const positions = shuffle(cands).slice(0, 5).sort((a, b) => a - b);
  return { min, max, positions };
}

function genPlaceNeg(): NLPlaceCfg {
  const max = rnd(-2, -1);
  const min = max - rnd(7, 9);
  const cands: number[] = [];
  for (let v = min + 1; v < max; v++) cands.push(v);
  const positions = shuffle(cands).slice(0, 5).sort((a, b) => a - b);
  return { min, max, positions };
}

const svgHPlace = 100;

function NLPlaceExercise({ exNum, validateCommand, onValidated, cfg }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void; cfg: NLPlaceCfg;
}) {
  const chips = useState(() => shuffle([...cfg.positions]))[0];
  const [assignments, setAssignments] = useState<(number | null)[]>(() => cfg.positions.map(() => null));
  const [activeChip, setActiveChip] = useState<number | null>(null);
  const [validated, setValidated] = useState(false);
  const [posWrong, setPosWrong] = useState<boolean[]>(() => cfg.positions.map(() => false));

  const assignedSet = new Set(assignments.filter(a => a !== null));

  function handleChipClick(v: number) {
    if (validated) return;
    setActiveChip(prev => prev === v ? null : v);
  }

  function handlePosClick(pi: number) {
    if (validated || activeChip === null) return;
    const chip = activeChip;
    setAssignments(prev => {
      const next = prev.map(a => a === chip ? null : a);
      next[pi] = chip;
      return next;
    });
    setActiveChip(null);
  }

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const w = cfg.positions.map((v, i) => assignments[i] !== v);
    setPosWrong(w);
    onValidated(w.every(x => !x));
  }, [validated, cfg, assignments, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Cliquez un nombre ci-dessous, puis cliquez sa position P sur la droite.</p>
      <div className="rounded-xl border border-[var(--color-border-default)] p-3">
        <div className="w-full overflow-x-auto">
          <svg viewBox={`0 0 480 ${svgHPlace}`} width="100%" style={{ display: "block" }}>
            <NLAxis min={cfg.min} max={cfg.max} />
            {cfg.positions.map((v, pi) => {
              const x = nlPos(v, cfg.min, cfg.max);
              const assigned = assignments[pi];
              const w = posWrong[pi];
              const fillColor = w ? "#FEF3C7" : assigned !== null ? "#DBEAFE" : "#F3F4F6";
              const strokeColor = w ? "#F59E0B" : assigned !== null ? "var(--color-accent-alg)" : "#9CA3AF";
              return (
                <g key={pi} style={{ cursor: validated ? "default" : "pointer" }} onClick={() => handlePosClick(pi)}>
                  <circle cx={x} cy={lineY} r="7" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
                  <text x={x} y={lineY - 14} textAnchor="middle" fontSize="9" fontWeight="bold"
                    fill="var(--color-accent-alg)">P{pi + 1}</text>
                  {assigned !== null && (
                    <text x={x} y={lineY + 35} textAnchor="middle" fontSize="10" fontWeight="bold"
                      fill={w ? "#D97706" : "var(--color-accent-alg)"}>
                      {w ? `${fmtInt(assigned)}≠${fmtInt(v)}` : fmtInt(assigned)}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {chips.map(v => {
          const isAssigned = assignedSet.has(v);
          const isActive = activeChip === v;
          let cls = "rounded-xl border px-4 py-2 text-sm font-mono font-bold transition-colors ";
          if (isActive) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white";
          else if (isAssigned) cls += "border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] opacity-50";
          else cls += "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)] cursor-pointer";
          return (
            <button key={v} type="button" className={cls}
              onClick={() => handleChipClick(v)} disabled={validated}>
              {fmtInt(v)}
            </button>
          );
        })}
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

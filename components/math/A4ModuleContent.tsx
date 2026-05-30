"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { answerMatches } from "@/lib/curriculum/content/math/math-a1-types";
import type { MathExerciseItem, MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { loadProgress, saveProgress, completeSubmodule } from "@/lib/progress/math-progress";

// ── Step types ─────────────────────────────────────────────────────────────────
type TheoryStep              = { kind: "theory"; lesson: MathSubmoduleLesson };
type FractionToggleStep      = { kind: "fraction_toggle"; lesson: MathSubmoduleLesson };
type FractionColoringStep    = { kind: "fraction_coloring"; lesson: MathSubmoduleLesson };
type FractionReadStep        = { kind: "fraction_read"; lesson: MathSubmoduleLesson };
type DecimalExercisesStep    = { kind: "a4_decimal_exercises" };
type ExerciseStep            = { kind: "exercise"; lesson: MathSubmoduleLesson; item: MathExerciseItem; exNum: number };
type FlatStep = TheoryStep | FractionToggleStep | FractionColoringStep | FractionReadStep | DecimalExercisesStep | ExerciseStep;

// ── Helpers ────────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}
function shufflePick<T>(arr: T[], n: number): T[] { return shuffle(arr).slice(0, n); }

function fracToDecStr(n: number, d: number): string {
  const val = n / d;
  if (Number.isInteger(val)) return val.toString();
  if (d === 10) return val.toFixed(1).replace(".", ",");
  return val.toFixed(2).replace(".", ",");
}

function buildSteps(lessons: MathSubmoduleLesson[]): FlatStep[] {
  const steps: FlatStep[] = [];
  for (const lesson of lessons) {
    steps.push({ kind: "theory", lesson });
    if (lesson.submoduleId === "A4-1") {
      steps.push({ kind: "fraction_toggle", lesson });
      steps.push({ kind: "fraction_coloring", lesson });
      steps.push({ kind: "fraction_read", lesson });
    } else if (lesson.submoduleId === "A4-2") {
      steps.push({ kind: "a4_decimal_exercises" });
    } else {
      const pool = lesson.exercisePool;
      const size = lesson.poolSize ?? 5;
      const exs = pool && pool.length > 0 ? shufflePick(pool, size) : lesson.exercises.slice(0, size);
      exs.forEach((item, i) => steps.push({ kind: "exercise", lesson, item, exNum: i + 1 }));
    }
  }
  return steps;
}

// ── Inline fraction text renderer ─────────────────────────────────────────────
// Parses [[frac:N/D]] markers in strings and renders them as vertical fractions
function renderFracText(text: string): React.ReactNode {
  const parts = text.split(/\[\[frac:(\d+)\/(\d+)\]\]/);
  if (parts.length === 1) return text;
  const nodes: React.ReactNode[] = [];
  for (let i = 0; i < parts.length; i += 3) {
    if (parts[i]) nodes.push(parts[i]);
    if (i + 1 < parts.length) {
      const num = parts[i + 1]!;
      const den = parts[i + 2]!;
      nodes.push(
        <span key={i} className="inline-flex flex-col items-center leading-none gap-0.5 mx-0.5 align-middle">
          <span className="text-xs font-bold text-[var(--color-accent-alg)]">{num}</span>
          <span className="h-[1.5px] w-6 rounded bg-[var(--color-text-primary)]" />
          <span className="text-xs font-bold text-[var(--color-text-primary)]">{den}</span>
        </span>
      );
    }
  }
  return <>{nodes}</>;
}

// ── Block renderer ─────────────────────────────────────────────────────────────
function BlockView({ block }: { block: MathRichBlock }) {
  switch (block.type) {
    case "heading":
      return block.black ? (
        <h3 className="mt-3 mb-1 text-base font-bold text-[var(--color-text-primary)]">{block.fr}</h3>
      ) : (
        <h3 className="mt-4 mb-1 text-sm font-bold text-[var(--color-accent-alg)]">{block.fr}</h3>
      );
    case "plain":
      if (!block.fr) return <div className="h-3" />;
      return <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{block.fr}</p>;
    case "note":
      return (
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-xs text-blue-800 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300">
          {block.fr}
        </div>
      );
    case "example":
      return (
        <div className="rounded-xl bg-[var(--color-bg-secondary)] px-4 py-3 font-mono text-xs text-[var(--color-text-primary)]">
          {block.fr}
        </div>
      );
    case "highlight":
      return (
        <div className="rounded-xl border border-[var(--color-accent-alg)]/30 bg-[var(--color-accent-alg)]/8 px-4 py-3 text-sm font-semibold text-[var(--color-text-primary)]">
          {block.fr}
        </div>
      );
    case "rule":
      return (
        <div className="space-y-2 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-4 py-3">
          <p className="text-xs font-bold text-[var(--color-text-primary)]">{block.titleFr}</p>
          <ul className="list-disc space-y-1 pl-4">
            {block.itemsFr.map((it, i) => (
              <li key={i} className="text-xs text-[var(--color-text-secondary)]">{it}</li>
            ))}
          </ul>
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-[var(--color-border-default)]">
          <table className="min-w-full text-xs">
            <thead>
              <tr className="bg-[var(--color-bg-secondary)]">
                {block.headersFr.map((h, i) => (
                  <th key={i} className={`px-3 py-2 text-left font-semibold ${block.accentHeader ? "text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-[var(--color-border-default)]">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-[var(--color-text-secondary)]">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.captionFr && (
            <p className="px-3 py-1 text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p>
          )}
        </div>
      );
    case "svg":
      return block.noFrame ? (
        <div className="my-2">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {block.captionFr && (
            <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p>
          )}
        </div>
      ) : (
        <div className="my-1 overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-white p-3">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {block.captionFr && (
            <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p>
          )}
        </div>
      );
    case "section":
      return (
        <div className="space-y-1.5">
          <p className="text-sm font-bold text-[var(--color-accent-alg)]">{block.labelFr}</p>
          {block.itemsFr.length > 0 && (
            <ul className="space-y-1 border-l-2 border-[var(--color-accent-alg)]/30 pl-3">
              {block.itemsFr.map((item, ii) => (
                <li key={ii} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
                  <span className="mt-0.5 shrink-0 text-[var(--color-accent-alg)]">•</span>
                  <span>{renderFracText(item)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    case "svg_row":
      return (
        <div className="flex gap-3">
          {block.items.map((item, ii) => (
            <div key={ii} className="flex-1 overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-white p-3">
              <div dangerouslySetInnerHTML={{ __html: item.markup }} />
              {item.captionFr && (
                <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{item.captionFr}</p>
              )}
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

function TheoryView({ lesson }: { lesson: MathSubmoduleLesson }) {
  const { theory, submoduleCode } = lesson;
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">{submoduleCode}</p>
        <h2 className="mt-0.5 text-lg font-bold text-[var(--color-text-primary)]">{theory.title.fr}</h2>
      </div>
      {theory.blocks && theory.blocks.length > 0 ? (
        <div className="space-y-3">
          {theory.blocks.map((block, i) => <BlockView key={i} block={block} />)}
        </div>
      ) : (
        <div className="space-y-3">
          {theory.paragraphs.fr.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-[var(--color-text-primary)]">{p}</p>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Fraction display (vertical) ────────────────────────────────────────────────
function FractionDisplay({ numerator, denominator, highlightPart }: {
  numerator: number; denominator: number; highlightPart: "num" | "den";
}) {
  return (
    <span className="inline-flex flex-col items-center gap-0.5 py-0.5">
      <span className={`text-base font-bold leading-none tabular-nums ${highlightPart === "num" ? "text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"}`}>
        {numerator}
      </span>
      <span className="h-[1.5px] w-6 rounded bg-[var(--color-text-primary)]" />
      <span className={`text-base font-bold leading-none tabular-nums ${highlightPart === "den" ? "text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"}`}>
        {denominator}
      </span>
    </span>
  );
}

// Small inline fraction (for matching/conversion rows)
function FracInline({ frac }: { frac: string }) {
  const parts = frac.split("/");
  const n = parts[0] ?? "";
  const d = parts[1] ?? "";
  return (
    <span className="inline-flex flex-col items-center leading-none gap-0.5">
      <span className="text-sm font-bold text-[var(--color-accent-alg)]">{n}</span>
      <span className="h-[1.5px] w-5 rounded bg-[var(--color-text-primary)]" />
      <span className="text-sm font-bold text-[var(--color-text-primary)]">{d}</span>
    </span>
  );
}

// ── Shape renderer ─────────────────────────────────────────────────────────────
type ShapeKind = "rect" | "grid" | "square" | "triangle" | "circle";

function FractionShape({ kind, d, colored, onToggle }: {
  kind: ShapeKind;
  d: number;
  colored: Set<number>;
  onToggle?: (i: number) => void;
}) {
  if (kind === "grid") {
    const cols = 10, cellW = 13, cellH = 10;
    const W = cols * cellW, H = 10 * cellH;
    return (
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="mx-auto block">
        {Array.from({ length: 100 }, (_, i) => {
          const r = Math.floor(i / cols), c = i % cols;
          return (
            <rect key={i} x={c * cellW} y={r * cellH} width={cellW} height={cellH}
              fill={colored.has(i) ? "#3b82f6" : "#eff6ff"}
              stroke="#93c5fd" strokeWidth={0.5}
              style={onToggle ? { cursor: "pointer" } : {}}
              onClick={onToggle ? () => onToggle(i) : undefined}
            />
          );
        })}
        <rect x={0} y={0} width={W} height={H} fill="none" stroke="#2563eb" strokeWidth={1.5} />
      </svg>
    );
  }
  if (kind === "square") {
    const S = 100;
    const sqrtD = Math.round(Math.sqrt(d));
    const isGrid = sqrtD * sqrtD === d && d >= 4;
    if (d === 2) {
      // Two vertical halves
      return (
        <svg width={S} height={S} viewBox={`0 0 ${S} ${S}`} className="mx-auto block">
          {[0, 1].map(k => (
            <rect key={k} x={k * 50} y={0} width={50} height={S}
              fill={colored.has(k) ? "#3b82f6" : "#eff6ff"}
              stroke="#2563eb" strokeWidth={1}
              style={onToggle ? { cursor: "pointer" } : {}}
              onClick={onToggle ? () => onToggle(k) : undefined}
            />
          ))}
          <rect x={0} y={0} width={S} height={S} fill="none" stroke="#2563eb" strokeWidth={1.5} />
        </svg>
      );
    }
    if (isGrid) {
      // N×N grid (N=2→4, N=3→9, N=4→16)
      const cellSize = S / sqrtD;
      return (
        <svg width={S} height={S} viewBox={`0 0 ${S} ${S}`} className="mx-auto block">
          {Array.from({ length: d }, (_, k) => {
            const r = Math.floor(k / sqrtD), c = k % sqrtD;
            return (
              <rect key={k} x={c * cellSize} y={r * cellSize} width={cellSize} height={cellSize}
                fill={colored.has(k) ? "#3b82f6" : "#eff6ff"}
                stroke="#2563eb" strokeWidth={1}
                style={onToggle ? { cursor: "pointer" } : {}}
                onClick={onToggle ? () => onToggle(k) : undefined}
              />
            );
          })}
          <rect x={0} y={0} width={S} height={S} fill="none" stroke="#2563eb" strokeWidth={1.5} />
        </svg>
      );
    }
    // Fallback: horizontal strips
    const stripH = S / d;
    return (
      <svg width={S} height={S} viewBox={`0 0 ${S} ${S}`} className="mx-auto block">
        {Array.from({ length: d }, (_, k) => (
          <rect key={k} x={0} y={k * stripH} width={S} height={stripH}
            fill={colored.has(k) ? "#3b82f6" : "#eff6ff"}
            stroke="#2563eb" strokeWidth={1}
            style={onToggle ? { cursor: "pointer" } : {}}
            onClick={onToggle ? () => onToggle(k) : undefined}
          />
        ))}
        <rect x={0} y={0} width={S} height={S} fill="none" stroke="#2563eb" strokeWidth={1.5} />
      </svg>
    );
  }
  if (kind === "triangle") {
    // Fixed isosceles triangle: apex A, base-left BL, base-right BR
    const W = 150, H = 130;
    const Ax = 75,  Ay = 5;
    const BLx = 5,  BLy = 125;
    const BRx = 145, BRy = 125;
    // Derived key points
    const Gx = 75,  Gy = 85;    // centroid
    const MBx = 75, MBy = 125;  // base midpoint
    const MLx = 40, MLy = 65;   // left-side midpoint
    const MRx = 110, MRy = 65;  // right-side midpoint
    // Trisection points for N=9 grid (P{a}{b} = barycentric a/3 from A, b/3 from BL)
    const P10x = 51.7,  P10y = 45;
    const P01x = 98.3,  P01y = 45;
    const P20x = 28.3,  P20y = 85;
    const P02x = 121.7, P02y = 85;
    const P21x = 51.7,  P21y = 125;
    const P12x = 98.3,  P12y = 125;

    type Poly = number[][];
    let polygons: Poly[];

    switch (d) {
      case 2:
        polygons = [
          [[Ax,Ay],[MBx,MBy],[BLx,BLy]],   // left half
          [[Ax,Ay],[BRx,BRy],[MBx,MBy]],   // right half
        ];
        break;
      case 3:
        polygons = [
          [[Ax,Ay],[BRx,BRy],[Gx,Gy]],     // right sector
          [[BRx,BRy],[BLx,BLy],[Gx,Gy]],   // bottom sector
          [[BLx,BLy],[Ax,Ay],[Gx,Gy]],     // left sector
        ];
        break;
      case 4:
        polygons = [
          [[Ax,Ay],[MRx,MRy],[MLx,MLy]],       // top
          [[MLx,MLy],[MBx,MBy],[BLx,BLy]],     // bottom-left
          [[MLx,MLy],[MRx,MRy],[MBx,MBy]],     // center (inverted)
          [[MRx,MRy],[BRx,BRy],[MBx,MBy]],     // bottom-right
        ];
        break;
      case 6:
        polygons = [
          [[Ax,Ay],[MRx,MRy],[Gx,Gy]],          // apex-right
          [[MRx,MRy],[BRx,BRy],[Gx,Gy]],        // base-right outer
          [[Gx,Gy],[BRx,BRy],[MBx,MBy]],        // base-right inner
          [[Gx,Gy],[MBx,MBy],[BLx,BLy]],        // base-left inner
          [[BLx,BLy],[MLx,MLy],[Gx,Gy]],        // base-left outer
          [[MLx,MLy],[Ax,Ay],[Gx,Gy]],          // apex-left
        ];
        break;
      case 9:
        polygons = [
          [[Ax,Ay],[P01x,P01y],[P10x,P10y]],            // row0: top
          [[P10x,P10y],[Gx,Gy],[P20x,P20y]],            // row1: left-up
          [[P10x,P10y],[P01x,P01y],[Gx,Gy]],            // row1: center-down
          [[P01x,P01y],[P02x,P02y],[Gx,Gy]],            // row1: right-up
          [[P20x,P20y],[P21x,P21y],[BLx,BLy]],          // row2: far-left-up
          [[P20x,P20y],[Gx,Gy],[P21x,P21y]],            // row2: left-center-down
          [[Gx,Gy],[P12x,P12y],[P21x,P21y]],            // row2: center-up
          [[Gx,Gy],[P02x,P02y],[P12x,P12y]],            // row2: right-center-down
          [[P02x,P02y],[BRx,BRy],[P12x,P12y]],          // row2: far-right-up
        ];
        break;
      default:
        // Fallback: equal-height horizontal strips
        polygons = Array.from({ length: d }, (_, k) => {
          const t0 = k / d, t1 = (k + 1) / d;
          const y0 = Ay + t0 * (BLy - Ay), y1 = Ay + t1 * (BLy - Ay);
          const hw0 = t0 * (BRx - Ax), hw1 = t1 * (BRx - Ax);
          return k === 0
            ? [[Ax, Ay], [Ax + hw1, y1], [Ax - hw1, y1]]
            : [[Ax - hw0, y0], [Ax + hw0, y0], [Ax + hw1, y1], [Ax - hw1, y1]];
        });
    }

    return (
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="mx-auto block">
        {polygons.map((poly, k) => (
          <polygon key={k}
            points={poly.map(([x, y]) => `${x},${y}`).join(' ')}
            fill={colored.has(k) ? "#3b82f6" : "#eff6ff"}
            stroke="#2563eb" strokeWidth={1}
            style={onToggle ? { cursor: "pointer" } : {}}
            onClick={onToggle ? () => onToggle(k) : undefined}
          />
        ))}
      </svg>
    );
  }
  if (kind === "circle") {
    // Equal pie slices (equal angle = equal area)
    const W = 120, H = 120, cx = 60, cy = 60, r = 52;
    const sliceAngle = (2 * Math.PI) / d;
    return (
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="mx-auto block">
        {Array.from({ length: d }, (_, k) => {
          const a0 = -Math.PI / 2 + k * sliceAngle;
          const a1 = -Math.PI / 2 + (k + 1) * sliceAngle;
          const x1 = cx + r * Math.cos(a0), y1 = cy + r * Math.sin(a0);
          const x2 = cx + r * Math.cos(a1), y2 = cy + r * Math.sin(a1);
          const largeArc = sliceAngle > Math.PI ? 1 : 0;
          const pathD = `M ${cx} ${cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;
          return (
            <path key={k} d={pathD}
              fill={colored.has(k) ? "#3b82f6" : "#eff6ff"}
              stroke="#2563eb" strokeWidth={1}
              style={onToggle ? { cursor: "pointer" } : {}}
              onClick={onToggle ? () => onToggle(k) : undefined}
            />
          );
        })}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#2563eb" strokeWidth={1.5} />
      </svg>
    );
  }
  // rect: d equal vertical strips (landscape band)
  const W = 220, H = 52;
  const cellW = W / d;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="mx-auto block">
      {Array.from({ length: d }, (_, i) => {
        const x = Math.round(i * cellW);
        const w = Math.round((i + 1) * cellW) - x;
        return (
          <rect key={i} x={x} y={0} width={w} height={H}
            fill={colored.has(i) ? "#3b82f6" : "#eff6ff"}
            stroke="#2563eb" strokeWidth={1}
            style={onToggle ? { cursor: "pointer" } : {}}
            onClick={onToggle ? () => onToggle(i) : undefined}
          />
        );
      })}
      <rect x={0} y={0} width={W} height={H} fill="none" stroke="#2563eb" strokeWidth={1.5} />
    </svg>
  );
}

// ── Exercise 1 — Fraction toggle ───────────────────────────────────────────────
type FractionItem = { numerator: number; denominator: number; highlight: "num" | "den" };

function generateFractionItems(): FractionItem[] {
  const pairs: { n: number; d: number }[] = [];
  const used = new Set<string>();
  while (pairs.length < 5) {
    const n = Math.floor(Math.random() * 9) + 1;
    const d = Math.floor(Math.random() * 9) + 1;
    if (n !== d && !used.has(`${n}-${d}`)) { pairs.push({ n, d }); used.add(`${n}-${d}`); }
  }
  return pairs.map(({ n, d }) => ({ numerator: n, denominator: d, highlight: (Math.random() < 0.5 ? "num" : "den") as "num" | "den" }));
}

export function FractionToggleExercise({ validateCommand, onValidated }: {
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [items] = useState<FractionItem[]>(generateFractionItems);
  const [selected, setSelected] = useState<(string | null)[]>(() => Array(5).fill(null));
  const [validated, setValidated] = useState(false);

  function select(i: number, choice: "num" | "den") {
    if (validated) return;
    setSelected(prev => { const n = [...prev]; n[i] = choice; return n; });
  }

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    onValidated(items.every((item, i) => selected[i] === item.highlight));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, items, selected]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  const mkCls = (chosen: boolean, isCorrect: boolean, isRight: boolean) => {
    let cls = `flex-1 py-2.5 text-sm font-medium text-center transition-colors `;
    if (isRight) cls += "border-l border-[var(--color-border-default)] ";
    if (!validated) {
      cls += chosen ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]" : "bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]";
    } else {
      cls += chosen ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
        : isCorrect ? "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
        : "bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] opacity-50";
    }
    return cls;
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 1</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Le nombre en bleu est-il le numérateur ou le dénominateur ?</p>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => {
          const numSel = selected[i] === "num", denSel = selected[i] === "den";
          const numCorrect = item.highlight === "num", denCorrect = item.highlight === "den";
          return (
            <div key={i} className="flex items-center gap-3">
              <p className="w-6 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</p>
              <FractionDisplay numerator={item.numerator} denominator={item.denominator} highlightPart={item.highlight} />
              <div className="flex flex-1 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)]">
                <button type="button" className={mkCls(numSel, numCorrect, false)} onClick={() => select(i, "num")} disabled={validated}>numérateur</button>
                <button type="button" className={mkCls(denSel, denCorrect, true)} onClick={() => select(i, "den")} disabled={validated}>dénominateur</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Exercise: Fraction coloring (A4-1 step) ───────────────────────────────────
export function FractionColoringExercise({ validateCommand, onValidated }: {
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [colorItems] = useState(generateColoringItems);
  const [colored, setColored] = useState<Set<number>[]>(() => colorItems.map(() => new Set<number>()));
  const [colorResults, setColorResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const res = colorItems.map((item, i) => colored[i]!.size === item.n);
    setColorResults(res);
    onValidated(res.every(Boolean));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, colorItems, colored]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  function toggleColor(itemIdx: number, cellIdx: number) {
    if (validated) return;
    setColored(prev => {
      const next = prev.map(s => new Set(s));
      if (next[itemIdx]!.has(cellIdx)) next[itemIdx]!.delete(cellIdx);
      else next[itemIdx]!.add(cellIdx);
      return next;
    });
  }

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 2 — Colorie la fraction demandée</h2>
      </div>
      <div className="space-y-5">
        {colorItems.map((item, i) => (
          <div key={i} className={`rounded-xl border p-3 ${validated ? (colorResults[i] ? "border-[var(--color-border-default)]" : "border-amber-500 bg-amber-50/30 dark:bg-amber-950/10") : "border-[var(--color-border-default)]"}`}>
            <div className="flex items-center gap-3">
              <span className="w-6 shrink-0 text-center text-sm font-bold text-[var(--color-accent-alg)]">{item.label}.</span>
              <div className="shrink-0">
                <FractionDisplay numerator={item.n} denominator={item.d} highlightPart="num" />
              </div>
              <div className="flex flex-1 justify-center">
                <FractionShape kind={item.kind} d={item.d} colored={colored[i]!} onToggle={validated ? undefined : (ci) => toggleColor(i, ci)} />
              </div>
            </div>
            {validated && !colorResults[i] && (
              <p className="mt-2 text-xs font-medium text-amber-600 dark:text-amber-400">Il fallait colorier {item.n} partie{item.n > 1 ? "s" : ""} sur {item.d}.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise: Fraction read from shape (A4-1 step) ────────────────────────────
export function FractionReadExercise({ validateCommand, onValidated }: {
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [readItems] = useState(generateFractionReadItems);
  const [readNums, setReadNums] = useState<string[]>(() => Array(4).fill(""));
  const [readDens, setReadDens] = useState<string[]>(() => Array(4).fill(""));
  const [readStatuses, setReadStatuses] = useState<("idle" | "correct" | "wrong")[]>(() => Array(4).fill("idle"));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const sts = readItems.map((item, i) => {
      const combined = `${readNums[i]}/${readDens[i]}`;
      return answerMatches(combined, [item.answer]) ? "correct" : "wrong";
    }) as ("correct" | "wrong")[];
    setReadStatuses(sts);
    onValidated(sts.every(s => s === "correct"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, readItems, readNums, readDens]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 3 — Observe et écris la fraction</h2>
      </div>
      <div className="space-y-5">
        {readItems.map((item, i) => {
          const preColored = new Set(Array.from({ length: item.n }, (_, k) => k));
          const isWrong = readStatuses[i] === "wrong";
          const [correctNum, correctDen] = item.answer.split("/");
          const inputCls = `w-12 bg-transparent text-center text-sm outline-none pb-0.5 border-b-2 ${isWrong ? "border-amber-500 text-amber-600 line-through" : "border-[var(--color-text-primary)] focus:border-[var(--color-accent-alg)]"}`;
          return (
            <div key={i} className={`rounded-xl border p-3 ${isWrong ? "border-amber-500 bg-amber-50/30 dark:bg-amber-950/10" : "border-[var(--color-border-default)]"}`}>
              <div className="flex items-center gap-3">
                <span className="w-6 shrink-0 text-center text-sm font-bold text-[var(--color-accent-alg)]">{item.label}.</span>
                <div className="flex flex-1 justify-center">
                  <FractionShape kind={item.kind} d={item.d} colored={preColored} />
                </div>
                <div className="shrink-0 flex flex-col items-center gap-1">
                  <input
                    type="text"
                    value={readNums[i]}
                    onChange={(e) => { if (!validated) setReadNums(prev => { const n = [...prev]; n[i] = e.target.value; return n; }); }}
                    placeholder="…"
                    className={inputCls}
                  />
                  <span className="h-[2px] w-12 rounded bg-[var(--color-text-primary)]" />
                  <input
                    type="text"
                    value={readDens[i]}
                    onChange={(e) => { if (!validated) setReadDens(prev => { const n = [...prev]; n[i] = e.target.value; return n; }); }}
                    placeholder="…"
                    className={inputCls}
                  />
                  {isWrong && (
                    <span className="mt-2 flex flex-col items-center gap-0.5">
                      <span className="text-xs font-bold text-[var(--color-text-primary)]">{correctNum}</span>
                      <span className="h-[1.5px] w-8 rounded bg-[var(--color-text-primary)]" />
                      <span className="text-xs font-bold text-[var(--color-text-primary)]">{correctDen}</span>
                    </span>
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

// ── Generators for combined exercise ──────────────────────────────────────────
interface ColoringSpec { label: string; kind: ShapeKind; d: number; n: number; desc: string; }
interface FracReadSpec { label: string; kind: ShapeKind; d: number; n: number; answer: string; }
interface MatchPair { frac: string; dec: string; }
interface DecConvItem { label: string; frac: string; answer: string; }
interface FracConvItem { label: string; decStr: string; answer: string; denominator: number; }

function rnd(min: number, max: number) { return Math.floor(Math.random() * (max - min + 1)) + min; }

const TRIANGLE_DENOMS = [2, 3, 4, 6, 9] as const;
function pickTriangleDenom() { return TRIANGLE_DENOMS[Math.floor(Math.random() * TRIANGLE_DENOMS.length)]!; }

const SQUARE_DENOMS = [2, 4, 9, 16] as const;
function pickSquareDenom() { return SQUARE_DENOMS[Math.floor(Math.random() * SQUARE_DENOMS.length)]!; }

function generateColoringItems(): ColoringSpec[] {
  const d1 = rnd(2, 20), d2 = pickSquareDenom(), d3 = pickTriangleDenom(), d4 = rnd(2, 15);
  const n1 = rnd(1, d1 - 1), n2 = rnd(1, d2 - 1), n3 = rnd(1, d3 - 1), n4 = rnd(1, d4 - 1);
  return [
    { label: "1", kind: "rect",     d: d1, n: n1, desc: `${n1}/${d1} d'un rectangle partagé en ${d1} parties égales` },
    { label: "2", kind: "square",   d: d2, n: n2, desc: `${n2}/${d2} d'un carré partagé en ${d2} parties égales` },
    { label: "3", kind: "triangle", d: d3, n: n3, desc: `${n3}/${d3} d'un triangle partagé en ${d3} parties égales` },
    { label: "4", kind: "circle",   d: d4, n: n4, desc: `${n4}/${d4} d'un cercle partagé en ${d4} parties égales` },
  ];
}

function generateFractionReadItems(): FracReadSpec[] {
  const d1 = rnd(2, 20), d2 = pickSquareDenom(), d3 = pickTriangleDenom(), d4 = rnd(2, 15);
  const n1 = rnd(1, d1 - 1), n2 = rnd(1, d2 - 1), n3 = rnd(1, d3 - 1), n4 = rnd(1, d4 - 1);
  return [
    { label: "1", kind: "rect",     d: d1, n: n1, answer: `${n1}/${d1}` },
    { label: "2", kind: "square",   d: d2, n: n2, answer: `${n2}/${d2}` },
    { label: "3", kind: "triangle", d: d3, n: n3, answer: `${n3}/${d3}` },
    { label: "4", kind: "circle",   d: d4, n: n4, answer: `${n4}/${d4}` },
  ];
}

function generateMatchPairs(): MatchPair[] {
  const tens: number[] = [];
  while (tens.length < 2) { const n = Math.floor(Math.random() * 18) + 1; if (!tens.includes(n)) tens.push(n); }
  const hundreds: number[] = [];
  while (hundreds.length < 2) { const n = Math.floor(Math.random() * 9) + 1; if (!hundreds.includes(n)) hundreds.push(n); }
  return shuffle([
    ...tens.map(n => ({ frac: `${n}/10`, dec: fracToDecStr(n, 10) })),
    ...hundreds.map(n => ({ frac: `${n}/100`, dec: fracToDecStr(n, 100) })),
  ]);
}

function generateDecConvItems(): DecConvItem[] {
  const n1 = Math.floor(Math.random() * 9) + 1;
  const n2 = Math.floor(Math.random() * 20) + 11;
  const n3 = Math.floor(Math.random() * 9) + 1;
  const n4 = Math.floor(Math.random() * 100) + 100;
  return [
    { label: "a", frac: `${n1}/10`, answer: fracToDecStr(n1, 10) },
    { label: "b", frac: `${n2}/10`, answer: fracToDecStr(n2, 10) },
    { label: "c", frac: `${n3}/100`, answer: fracToDecStr(n3, 100) },
    { label: "d", frac: `${n4}/100`, answer: fracToDecStr(n4, 100) },
  ];
}

function generateFracConvItems(): FracConvItem[] {
  const n1 = Math.floor(Math.random() * 9) + 1;
  const n2 = Math.floor(Math.random() * 99) + 1;
  const n3 = Math.floor(Math.random() * 20) + 11;
  const n4 = Math.floor(Math.random() * 100) + 100;
  return [
    { label: "a", decStr: fracToDecStr(n1, 10), answer: n1.toString(), denominator: 10 },
    { label: "b", decStr: fracToDecStr(n2, 100), answer: n2.toString(), denominator: 100 },
    { label: "c", decStr: fracToDecStr(n3, 10), answer: n3.toString(), denominator: 10 },
    { label: "d", decStr: fracToDecStr(n4, 100), answer: n4.toString(), denominator: 100 },
  ];
}

// ── Combined Decimal Exercises (A4.2 — single step) ───────────────────────────
export function CombinedDecimalExercise({ validateCommand, onValidated }: {
  validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  // Ex 1 — Matching
  const [pairs] = useState(generateMatchPairs);
  const [shuffledDecs] = useState(() => shuffle(pairs.map(p => p.dec)));
  const [selectedFrac, setSelectedFrac] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [matchResults, setMatchResults] = useState<boolean[]>([]);

  // Ex 2 — Decimal conv
  const [decItems] = useState(generateDecConvItems);
  const [decAnswers, setDecAnswers] = useState<string[]>(() => Array(4).fill(""));
  const [decStatuses, setDecStatuses] = useState<("idle" | "correct" | "wrong")[]>(() => Array(4).fill("idle"));

  // Ex 3 — Fraction conv
  const [fracItems] = useState(generateFracConvItems);
  const [fracAnswers, setFracAnswers] = useState<string[]>(() => Array(4).fill(""));
  const [fracStatuses, setFracStatuses] = useState<("idle" | "correct" | "wrong")[]>(() => Array(4).fill("idle"));

  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const matchRes = pairs.map((pair, fi) => matches[fi] !== undefined && shuffledDecs[matches[fi]!] === pair.dec);
    setMatchResults(matchRes);
    const decSts = decItems.map((item, i) => (answerMatches(decAnswers[i]!, [item.answer]) ? "correct" : "wrong")) as ("correct" | "wrong")[];
    setDecStatuses(decSts);
    const fracSts = fracItems.map((item, i) => (answerMatches(fracAnswers[i]!, [item.answer]) ? "correct" : "wrong")) as ("correct" | "wrong")[];
    setFracStatuses(fracSts);
    onValidated(
      matchRes.every(Boolean) &&
      decSts.every(s => s === "correct") &&
      fracSts.every(s => s === "correct"),
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, pairs, shuffledDecs, matches, decItems, decAnswers, fracItems, fracAnswers]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  function handleFracClick(fi: number) {
    if (validated) return;
    if (selectedFrac === fi) { setSelectedFrac(null); return; }
    if (matches[fi] !== undefined) setMatches(prev => { const n = { ...prev }; delete n[fi]; return n; });
    setSelectedFrac(fi);
  }

  function handleDecClick(di: number) {
    if (validated || selectedFrac === null) return;
    const existing = Object.entries(matches).find(([, v]) => v === di);
    if (existing) setMatches(prev => { const n = { ...prev }; delete n[parseInt(existing[0])]; return n; });
    setMatches(prev => ({ ...prev, [selectedFrac]: di }));
    setSelectedFrac(null);
  }

  const fracCls = (fi: number) => {
    const sel = selectedFrac === fi;
    const matched = matches[fi] !== undefined;
    if (validated && matched) {
      return matchResults[fi]
        ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20 text-[var(--color-text-primary)]"
        : "border-amber-500 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400";
    }
    if (validated) return "border-amber-500 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400";
    if (sel) return "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]";
    if (matched) return "border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/5 text-[var(--color-text-primary)]";
    return "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]";
  };

  const decCls = (di: number) => {
    const matchedEntry = Object.entries(matches).find(([, v]) => v === di);
    if (validated && matchedEntry) {
      const fi = parseInt(matchedEntry[0]);
      return matchResults[fi]
        ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20 text-[var(--color-text-primary)]"
        : "border-amber-500 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400";
    }
    if (matchedEntry) return "border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/5 text-[var(--color-text-primary)]";
    if (selectedFrac !== null && !validated) return "border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent-alg)]/5 cursor-pointer";
    return "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)]";
  };

  return (
    <div className="space-y-8">
      {/* Exercise 1 — Matching */}
      <div className="space-y-4">
        <div>
          <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 1 — Relie chaque fraction à son écriture décimale</h2>
          {selectedFrac !== null && !validated && (
            <p className="mt-1 text-xs text-[var(--color-accent-alg)]">Sélectionne maintenant l&apos;écriture décimale correspondante →</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-3">
            {pairs.map((pair, fi) => (
              <button key={fi} type="button" onClick={() => handleFracClick(fi)}
                className={`flex w-full items-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition-colors ${fracCls(fi)}`}>
                <span className="w-4 shrink-0 text-xs font-bold text-[var(--color-text-secondary)]">{fi + 1}.</span>
                <FracInline frac={pair.frac} />
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {shuffledDecs.map((dec, di) => (
              <button key={di} type="button" onClick={() => handleDecClick(di)}
                className={`w-full rounded-xl border px-3 py-3 text-sm font-bold transition-colors ${decCls(di)}`}>
                {dec}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Exercise 2 — Decimal conv */}
      <div className="space-y-5">
        <div>
          <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 2 — Écris sous forme décimale</h2>
        </div>
        <div className="space-y-3">
          {decItems.map((item, i) => (
            <div key={i} className="flex flex-wrap items-center gap-2">
              <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{item.label})</span>
              <FracInline frac={item.frac} />
              <span className="text-sm text-[var(--color-text-primary)]">=</span>
              <input
                type="text"
                value={decAnswers[i]}
                onChange={(e) => { if (!validated) setDecAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; }); }}
                placeholder="…"
                className={`w-24 rounded-xl border px-3 py-2 text-sm outline-none transition-colors ${decStatuses[i] === "correct" ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20" : decStatuses[i] === "wrong" ? "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20" : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] focus:border-[var(--color-accent-alg)]"}`}
              />
              {decStatuses[i] === "wrong" && <span className="text-xs font-medium text-amber-600 dark:text-amber-400"><span className="line-through">{decAnswers[i]}</span> <span className="font-bold text-[var(--color-text-primary)]">{item.answer}</span></span>}
            </div>
          ))}
        </div>
      </div>

      {/* Exercise 3 — Fraction conv */}
      <div className="space-y-5">
        <div>
          <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 3 — Écris sous forme de fraction</h2>
        </div>
        <div className="space-y-3">
          {fracItems.map((item, i) => (
            <div key={i} className="flex flex-wrap items-center gap-2">
              <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{item.label})</span>
              <span className="text-sm font-medium text-[var(--color-text-primary)]">{item.decStr} =</span>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  value={fracAnswers[i]}
                  onChange={(e) => { if (!validated) setFracAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; }); }}
                  placeholder="…"
                  className={`w-20 rounded-xl border px-3 py-2 text-sm outline-none transition-colors ${fracStatuses[i] === "correct" ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20" : fracStatuses[i] === "wrong" ? "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20" : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] focus:border-[var(--color-accent-alg)]"}`}
                />
                <span className="text-sm font-medium text-[var(--color-text-primary)]">/{item.denominator}</span>
              </div>
              {fracStatuses[i] === "wrong" && <span className="text-xs font-medium text-amber-600 dark:text-amber-400"><span className="line-through">{fracAnswers[i]}</span> <span className="font-bold text-[var(--color-text-primary)]">{item.answer}</span></span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export function A4ModuleContent() {
  const router = useRouter();
  const lessons = getLessonsForModule("A4");
  const [steps] = useState<FlatStep[]>(() => (lessons ? buildSteps(lessons) : []));
  const [stepIdx, setStepIdx] = useState(0);
  const [exerciseKey, setExerciseKey] = useState(0);
  const [validateCommand, setValidateCommand] = useState(0);
  const [canValidate, setCanValidate] = useState(true);

  // For generic text exercises (A4.2+)
  const [answer, setAnswer] = useState("");
  const [exStatus, setExStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [exAttempts, setExAttempts] = useState(0);

  const currentStep = steps[stepIdx];
  const isFirstStep = stepIdx === 0;
  const isLastStep = stepIdx === steps.length - 1;
  const isExercise = currentStep !== undefined && currentStep.kind !== "theory";

  const goTo = useCallback((idx: number) => {
    setStepIdx(idx);
    setAnswer("");
    setExStatus("idle");
    setExAttempts(0);
    setValidateCommand(0);
    setCanValidate(true);
    setExerciseKey(k => k + 1);
  }, []);

  function goBack() { if (!isFirstStep) goTo(stepIdx - 1); }

  function goNext() {
    if (isLastStep) { router.push("/mathematiques"); }
    else { goTo(stepIdx + 1); }
  }

  function refresh() {
    setAnswer(""); setExStatus("idle"); setExAttempts(0);
    setValidateCommand(0); setCanValidate(true);
    setExerciseKey(k => k + 1);
  }

  function handleCustomValidated(ok: boolean) {
    setCanValidate(false);
    if (currentStep?.kind === "fraction_toggle" || currentStep?.kind === "fraction_coloring" || currentStep?.kind === "fraction_read") {
      const p = loadProgress();
      saveProgress(completeSubmodule(p, "A4", currentStep.lesson.submoduleId));
    } else if (currentStep?.kind === "a4_decimal_exercises") {
      const p = loadProgress();
      saveProgress(completeSubmodule(p, "A4", "A4-2"));
    }
    void ok;
  }

  function validateText() {
    if (currentStep?.kind !== "exercise") return;
    const ok = answerMatches(answer, currentStep.item.acceptable);
    setExStatus(ok ? "correct" : "wrong");
    setExAttempts(a => a + 1);
    if (ok) {
      setCanValidate(false);
      const nextStep = steps[stepIdx + 1];
      const isLastOfLesson = !nextStep || nextStep.kind !== "exercise" || nextStep.lesson.submoduleId !== currentStep.lesson.submoduleId;
      if (isLastOfLesson) { const p = loadProgress(); saveProgress(completeSubmodule(p, "A4", currentStep.lesson.submoduleId)); }
    }
  }

  const isCustomA4 = currentStep !== undefined && currentStep.kind !== "theory" && currentStep.kind !== "exercise";
  const validateDisabled = currentStep?.kind === "exercise" ? exStatus === "correct" : !canValidate;

  if (!lessons || steps.length === 0) {
    return <p className="text-sm text-[var(--color-text-secondary)]">Contenu non disponible.</p>;
  }

  return (
    <div className="pb-40">
      {/* Progress bar */}
      <div className="mb-6 flex gap-1">
        {steps.map((_, i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < stepIdx ? "bg-[var(--color-accent-alg)]" : i === stepIdx ? "bg-[var(--color-accent-alg)] opacity-60" : "bg-[var(--color-border-default)]"}`} />
        ))}
      </div>

      {/* Content */}
      {currentStep?.kind === "theory" && <TheoryView lesson={currentStep.lesson} />}

      {currentStep?.kind === "fraction_toggle" && (
        <FractionToggleExercise key={exerciseKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "fraction_coloring" && (
        <FractionColoringExercise key={exerciseKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "fraction_read" && (
        <FractionReadExercise key={exerciseKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a4_decimal_exercises" && (
        <CombinedDecimalExercise key={exerciseKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {currentStep?.kind === "exercise" && (
        <div className="space-y-4">
          <div>
            <h2 className="text-base font-bold text-[var(--color-text-primary)]">
              Exercice {currentStep.exNum} — {currentStep.lesson.submoduleCode}
            </h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-text-primary)]">
              {currentStep.item.promptFr}
            </p>
          </div>
          <input
            key={exerciseKey}
            type={currentStep.item.type === "number" ? "number" : "text"}
            value={answer}
            onChange={(e) => { setAnswer(e.target.value); if (exStatus !== "idle") setExStatus("idle"); }}
            onKeyDown={(e) => { if (e.key === "Enter" && answer.trim() && exStatus !== "correct") validateText(); }}
            placeholder="Votre réponse…"
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${exStatus === "correct" ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20" : exStatus === "wrong" ? "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20" : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] focus:border-[var(--color-accent-alg)]"}`}
          />
          {exStatus === "wrong" && <p className="text-xs font-medium text-amber-600 dark:text-amber-400">{exAttempts >= 2 ? <><span className="line-through">{answer}</span> <span className="font-bold text-[var(--color-text-primary)]">{currentStep.item.acceptable[0]}</span></> : "Essayez encore…"}</p>}
        </div>
      )}

      {/* Fixed bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            <button type="button" onClick={goBack} disabled={isFirstStep}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-30">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 18l-6-6 6-6" /></svg>
              Retour
            </button>

            {isExercise && (
              <div className="flex items-center gap-2">
                <button type="button" aria-label="Recommencer" onClick={refresh}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 .49-4" /></svg>
                </button>
                <button type="button" aria-label="Valider"
                  onClick={() => { if (isCustomA4) setValidateCommand(c => c + 1); else validateText(); }}
                  disabled={validateDisabled}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-alg)] text-white transition-opacity hover:opacity-90 active:scale-90 disabled:cursor-not-allowed disabled:opacity-30">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                </button>
              </div>
            )}

            <button type="button" onClick={goNext}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80">
              {isLastStep ? (
                <>Terminer <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg></>
              ) : (
                <>Suivant <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M9 18l6-6-6-6" /></svg></>
              )}
            </button>
          </div>
        </div>
        <div style={{ height: 68 }} />
      </div>
    </div>
  );
}

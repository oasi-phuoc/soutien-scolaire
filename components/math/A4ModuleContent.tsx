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
type ShapeKind = "rect" | "grid" | "square" | "triangle" | "circle" | "semicircle" | "quartercircle" | "hexagon";

function FractionShape({ kind, d, colored, onToggle, scale = 1, missSet, extraSet }: {
  kind: ShapeKind;
  d: number;
  colored: Set<number>;
  onToggle?: (i: number) => void;
  scale?: number;
  missSet?: Set<number>;
  extraSet?: Set<number>;
}) {
  const toggle = onToggle;
  const s = scale;

  function cellFill(i: number): string {
    if (colored.has(i)) return "#3b82f6";
    if (missSet?.has(i)) return "#fbbf24";
    return "#eff6ff";
  }

  function xMark(cx: number, cy: number, r: number, i: number) {
    if (!extraSet?.has(i)) return null;
    return (
      <g key={`x-${i}`} pointerEvents="none">
        <line x1={cx - r} y1={cy - r} x2={cx + r} y2={cy + r} stroke="#d97706" strokeWidth={1.5} strokeLinecap="round" />
        <line x1={cx + r} y1={cy - r} x2={cx - r} y2={cy + r} stroke="#d97706" strokeWidth={1.5} strokeLinecap="round" />
      </g>
    );
  }

  if (kind === "grid") {
    const cols = 10, cellW = 13, cellH = 10;
    const W = cols * cellW, H = 10 * cellH;
    return (
      <svg width={Math.round(W * s)} height={Math.round(H * s)} viewBox={`0 0 ${W} ${H}`} className="mx-auto block">
        {Array.from({ length: 100 }, (_, i) => {
          const r = Math.floor(i / cols), c = i % cols;
          return (
            <rect key={i} x={c * cellW} y={r * cellH} width={cellW} height={cellH}
              fill={colored.has(i) ? "#3b82f6" : "#eff6ff"}
              stroke="#93c5fd" strokeWidth={0.5}
              style={toggle ? { cursor: "pointer" } : {}}
              onClick={toggle ? () => toggle(i) : undefined}
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
      return (
        <svg width={Math.round(S * s)} height={Math.round(S * s)} viewBox={`0 0 ${S} ${S}`} className="mx-auto block">
          {[0, 1].map(k => (
            <rect key={k} x={k * 50} y={0} width={50} height={S}
              fill={cellFill(k)}
              stroke="#2563eb" strokeWidth={1}
              style={toggle ? { cursor: "pointer" } : {}}
              onClick={toggle ? () => toggle(k) : undefined}
            />
          ))}
          <rect x={0} y={0} width={S} height={S} fill="none" stroke="#2563eb" strokeWidth={1.5} />
          {[0, 1].map(k => xMark(k * 50 + 25, S / 2, 12, k))}
        </svg>
      );
    }
    if (isGrid) {
      const cellSize = S / sqrtD;
      return (
        <svg width={Math.round(S * s)} height={Math.round(S * s)} viewBox={`0 0 ${S} ${S}`} className="mx-auto block">
          {Array.from({ length: d }, (_, k) => {
            const r = Math.floor(k / sqrtD), c = k % sqrtD;
            return (
              <rect key={k} x={c * cellSize} y={r * cellSize} width={cellSize} height={cellSize}
                fill={cellFill(k)}
                stroke="#2563eb" strokeWidth={1}
                style={toggle ? { cursor: "pointer" } : {}}
                onClick={toggle ? () => toggle(k) : undefined}
              />
            );
          })}
          <rect x={0} y={0} width={S} height={S} fill="none" stroke="#2563eb" strokeWidth={1.5} />
          {Array.from({ length: d }, (_, k) => {
            const r = Math.floor(k / sqrtD), c = k % sqrtD;
            return xMark((c + 0.5) * cellSize, (r + 0.5) * cellSize, cellSize * 0.28, k);
          })}
        </svg>
      );
    }
    const stripH = S / d;
    return (
      <svg width={Math.round(S * s)} height={Math.round(S * s)} viewBox={`0 0 ${S} ${S}`} className="mx-auto block">
        {Array.from({ length: d }, (_, k) => (
          <rect key={k} x={0} y={k * stripH} width={S} height={stripH}
            fill={cellFill(k)}
            stroke="#2563eb" strokeWidth={1}
            style={toggle ? { cursor: "pointer" } : {}}
            onClick={toggle ? () => toggle(k) : undefined}
          />
        ))}
        <rect x={0} y={0} width={S} height={S} fill="none" stroke="#2563eb" strokeWidth={1.5} />
        {Array.from({ length: d }, (_, k) => xMark(S / 2, (k + 0.5) * stripH, Math.min(stripH * 0.28, 10), k))}
      </svg>
    );
  }
  if (kind === "triangle") {
    const W = 150, H = 130;
    const Ax = 75,  Ay = 5;
    const BLx = 5,  BLy = 125;
    const BRx = 145, BRy = 125;
    const Gx = 75,  Gy = 85;
    const MBx = 75, MBy = 125;
    const MLx = 40, MLy = 65;
    const MRx = 110, MRy = 65;
    const P10x = 51.7,  P10y = 45;
    const P01x = 98.3,  P01y = 45;
    const P20x = 28.3,  P20y = 85;
    const P02x = 121.7, P02y = 85;
    const P21x = 51.7,  P21y = 125;
    const P12x = 98.3,  P12y = 125;
    type Poly = number[][];
    let polygons: Poly[];
    switch (d) {
      case 2: polygons = [[[Ax,Ay],[MBx,MBy],[BLx,BLy]],[[Ax,Ay],[BRx,BRy],[MBx,MBy]]]; break;
      case 3: polygons = [[[Ax,Ay],[BRx,BRy],[Gx,Gy]],[[BRx,BRy],[BLx,BLy],[Gx,Gy]],[[BLx,BLy],[Ax,Ay],[Gx,Gy]]]; break;
      case 4: polygons = [[[Ax,Ay],[MRx,MRy],[MLx,MLy]],[[MLx,MLy],[MBx,MBy],[BLx,BLy]],[[MLx,MLy],[MRx,MRy],[MBx,MBy]],[[MRx,MRy],[BRx,BRy],[MBx,MBy]]]; break;
      case 6: polygons = [[[Ax,Ay],[MRx,MRy],[Gx,Gy]],[[MRx,MRy],[BRx,BRy],[Gx,Gy]],[[Gx,Gy],[BRx,BRy],[MBx,MBy]],[[Gx,Gy],[MBx,MBy],[BLx,BLy]],[[BLx,BLy],[MLx,MLy],[Gx,Gy]],[[MLx,MLy],[Ax,Ay],[Gx,Gy]]]; break;
      case 9: polygons = [[[Ax,Ay],[P01x,P01y],[P10x,P10y]],[[P10x,P10y],[Gx,Gy],[P20x,P20y]],[[P10x,P10y],[P01x,P01y],[Gx,Gy]],[[P01x,P01y],[P02x,P02y],[Gx,Gy]],[[P20x,P20y],[P21x,P21y],[BLx,BLy]],[[P20x,P20y],[Gx,Gy],[P21x,P21y]],[[Gx,Gy],[P12x,P12y],[P21x,P21y]],[[Gx,Gy],[P02x,P02y],[P12x,P12y]],[[P02x,P02y],[BRx,BRy],[P12x,P12y]]]; break;
      default:
        polygons = Array.from({ length: d }, (_, k) => {
          const t0 = k / d, t1 = (k + 1) / d;
          const y0 = Ay + t0 * (BLy - Ay), y1 = Ay + t1 * (BLy - Ay);
          const hw0 = t0 * (BRx - Ax), hw1 = t1 * (BRx - Ax);
          return k === 0 ? [[Ax,Ay],[Ax+hw1,y1],[Ax-hw1,y1]] : [[Ax-hw0,y0],[Ax+hw0,y0],[Ax+hw1,y1],[Ax-hw1,y1]];
        });
    }
    return (
      <svg width={Math.round(W * s)} height={Math.round(H * s)} viewBox={`0 0 ${W} ${H}`} className="mx-auto block">
        {polygons.map((poly, k) => (
          <polygon key={k}
            points={poly.map(([x, y]) => `${x},${y}`).join(' ')}
            fill={cellFill(k)}
            stroke="#2563eb" strokeWidth={1}
            style={toggle ? { cursor: "pointer" } : {}}
            onClick={toggle ? () => toggle(k) : undefined}
          />
        ))}
        {polygons.map((poly, k) => {
          const cx = poly.reduce((sum, [x]) => sum + x!, 0) / poly.length;
          const cy = poly.reduce((sum, [, y]) => sum + y!, 0) / poly.length;
          return xMark(cx, cy, 8, k);
        })}
      </svg>
    );
  }
  if (kind === "circle") {
    const W = 120, H = 120, cx = 60, cy = 60, r = 52;
    const sliceAngle = (2 * Math.PI) / d;
    return (
      <svg width={Math.round(W * s)} height={Math.round(H * s)} viewBox={`0 0 ${W} ${H}`} className="mx-auto block">
        {Array.from({ length: d }, (_, k) => {
          const a0 = -Math.PI / 2 + k * sliceAngle;
          const a1 = -Math.PI / 2 + (k + 1) * sliceAngle;
          const x1 = cx + r * Math.cos(a0), y1 = cy + r * Math.sin(a0);
          const x2 = cx + r * Math.cos(a1), y2 = cy + r * Math.sin(a1);
          const largeArc = sliceAngle > Math.PI ? 1 : 0;
          const pathD = `M ${cx} ${cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;
          return (
            <path key={k} d={pathD}
              fill={cellFill(k)}
              stroke="#2563eb" strokeWidth={1}
              style={toggle ? { cursor: "pointer" } : {}}
              onClick={toggle ? () => toggle(k) : undefined}
            />
          );
        })}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#2563eb" strokeWidth={1.5} />
        {Array.from({ length: d }, (_, k) => {
          const midAngle = -Math.PI / 2 + (k + 0.5) * sliceAngle;
          return xMark(cx + r * 0.5 * Math.cos(midAngle), cy + r * 0.5 * Math.sin(midAngle), r * 0.2, k);
        })}
      </svg>
    );
  }
  if (kind === "semicircle") {
    // viewBox 0 0 100 56, R=48, center=(50,50) — flat edge at bottom
    const W = 100, H = 56, scx = 50, scy = 50, sr = 48;
    const sliceAngle = Math.PI / d;
    return (
      <svg width={Math.round(W * s)} height={Math.round(H * s)} viewBox={`0 0 ${W} ${H}`} className="mx-auto block">
        {Array.from({ length: d }, (_, k) => {
          // sectors go from right (angle=0) counter-clockwise through top to left (angle=π)
          const a0 = k * sliceAngle;
          const a1 = (k + 1) * sliceAngle;
          const x1 = scx + sr * Math.cos(a0), y1 = scy - sr * Math.sin(a0);
          const x2 = scx + sr * Math.cos(a1), y2 = scy - sr * Math.sin(a1);
          const pathD = `M ${scx} ${scy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${sr} ${sr} 0 0 0 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;
          return (
            <path key={k} d={pathD}
              fill={cellFill(k)}
              stroke="#2563eb" strokeWidth={1}
              style={toggle ? { cursor: "pointer" } : {}}
              onClick={toggle ? () => toggle(k) : undefined}
            />
          );
        })}
        {/* outline: semicircle arc + flat base */}
        <path d={`M ${scx - sr} ${scy} A ${sr} ${sr} 0 0 1 ${scx + sr} ${scy} Z`} fill="none" stroke="#2563eb" strokeWidth={1.5} />
        {Array.from({ length: d }, (_, k) => {
          const midA = (k + 0.5) * sliceAngle;
          return xMark(scx + sr * 0.55 * Math.cos(midA), scy - sr * 0.55 * Math.sin(midA), 6, k);
        })}
      </svg>
    );
  }
  if (kind === "quartercircle") {
    // viewBox 0 0 100 100, R=96, corner at bottom-left (2,98)
    const W = 100, H = 100, qcx = 2, qcy = 98, qr = 96;
    const sliceAngle = (Math.PI / 2) / d;
    return (
      <svg width={Math.round(W * s)} height={Math.round(H * s)} viewBox={`0 0 ${W} ${H}`} className="mx-auto block">
        {Array.from({ length: d }, (_, k) => {
          const a0 = k * sliceAngle;
          const a1 = (k + 1) * sliceAngle;
          const x1 = qcx + qr * Math.cos(a0), y1 = qcy - qr * Math.sin(a0);
          const x2 = qcx + qr * Math.cos(a1), y2 = qcy - qr * Math.sin(a1);
          const pathD = `M ${qcx} ${qcy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${qr} ${qr} 0 0 0 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;
          return (
            <path key={k} d={pathD}
              fill={cellFill(k)}
              stroke="#2563eb" strokeWidth={1}
              style={toggle ? { cursor: "pointer" } : {}}
              onClick={toggle ? () => toggle(k) : undefined}
            />
          );
        })}
        <path d={`M ${qcx} ${qcy} L ${qcx + qr} ${qcy} A ${qr} ${qr} 0 0 0 ${qcx} ${qcy - qr} Z`} fill="none" stroke="#2563eb" strokeWidth={1.5} />
        {Array.from({ length: d }, (_, k) => {
          const midA = (k + 0.5) * sliceAngle;
          return xMark(qcx + qr * 0.55 * Math.cos(midA), qcy - qr * 0.55 * Math.sin(midA), 6, k);
        })}
      </svg>
    );
  }
  if (kind === "hexagon") {
    // Regular hexagon, flat-top orientation, center (50,50), circumradius=46
    // Vertices: v0=(96,50), v1=(73,10), v2=(27,10), v3=(4,50), v4=(27,90), v5=(73,90)
    const hcx = 50, hcy = 50, hR = 46;
    const vx = (i: number) => hcx + hR * Math.cos((i * Math.PI) / 3);
    const vy = (i: number) => hcy - hR * Math.sin((i * Math.PI) / 3);
    // 6 vertices
    const V: [number, number][] = Array.from({ length: 6 }, (_, i) => [vx(i), vy(i)]);
    // edge midpoints
    const M: [number, number][] = Array.from({ length: 6 }, (_, i) => [(V[i]![0] + V[(i + 1) % 6]![0]) / 2, (V[i]![1] + V[(i + 1) % 6]![1]) / 2]);
    const C: [number, number] = [hcx, hcy];

    // Build polygon list per d
    let polygons: [number, number][][];
    if (d === 2) {
      polygons = [
        [V[0]!, V[1]!, V[2]!, V[3]!],
        [V[3]!, V[4]!, V[5]!, V[0]!],
      ];
    } else if (d === 3) {
      polygons = [
        [C, V[0]!, V[1]!, V[2]!],
        [C, V[2]!, V[3]!, V[4]!],
        [C, V[4]!, V[5]!, V[0]!],
      ];
    } else if (d === 4) {
      polygons = [
        [C, V[0]!, V[1]!, M[1]!],
        [C, M[1]!, V[2]!, V[3]!],
        [C, V[3]!, V[4]!, M[4]!],
        [C, M[4]!, V[5]!, V[0]!],
      ];
    } else if (d === 6) {
      polygons = Array.from({ length: 6 }, (_, i) => [C, V[i]!, V[(i + 1) % 6]!]);
    } else if (d === 9) {
      // 3 rhombuses (like d=3), each split into 3 equal parallelograms
      // by lines parallel to the rhombus's short diagonal
      polygons = [];
      const lerp = (p: [number,number], q: [number,number], f: number): [number,number] => [p[0]+(q[0]-p[0])*f, p[1]+(q[1]-p[1])*f];
      for (let r = 0; r < 3; r++) {
        const vi0 = V[(r * 2) % 6]!;
        const vi1 = V[(r * 2 + 1) % 6]!;
        const vi2 = V[(r * 2 + 2) % 6]!;
        // Rhombus vertices: C, vi0, vi1, vi2
        // Lines parallel to vi0–vi2 at 1/3 and 2/3 from C toward vi1
        const p0a = lerp(C, vi0, 1/3), p0b = lerp(C, vi0, 2/3);
        const p1a = lerp(C, vi1, 1/3), p1b = lerp(C, vi1, 2/3);
        const p2a = lerp(C, vi2, 1/3), p2b = lerp(C, vi2, 2/3);
        polygons.push([C,   p0a, p1a, p2a]);
        polygons.push([p0a, p0b, p1b, p2b, p2a, p1a]);
        polygons.push([p0b, vi0, vi1, vi2, p2b, p1b]);
      }
    } else if (d === 12) {
      // 12 triangles: center → each vertex and adjacent edge midpoint
      polygons = Array.from({ length: 6 }, (_, i) => [
        [C, V[i]!, M[i]!] as [number,number][],
        [C, M[i]!, V[(i + 1) % 6]!] as [number,number][],
      ]).flat();
    } else {
      // fallback: all 6 triangles (d=6)
      polygons = Array.from({ length: 6 }, (_, i) => [C, V[i]!, V[(i + 1) % 6]!]);
    }

    const polyPoints = (pts: [number,number][]) => pts.map(([x,y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
    const polyCx = (pts: [number,number][]) => pts.reduce((s,[x]) => s+x, 0) / pts.length;
    const polyCy = (pts: [number,number][]) => pts.reduce((s,[,y]) => s+y, 0) / pts.length;

    return (
      <svg width={Math.round(100 * s)} height={Math.round(100 * s)} viewBox="0 0 100 100" className="mx-auto block">
        {polygons.map((poly, k) => (
          <polygon key={k}
            points={polyPoints(poly)}
            fill={cellFill(k)}
            stroke="#2563eb" strokeWidth={1}
            style={toggle ? { cursor: "pointer" } : {}}
            onClick={toggle ? () => toggle(k) : undefined}
          />
        ))}
        <polygon points={V.map(([x,y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ')} fill="none" stroke="#2563eb" strokeWidth={1.5} />
        {polygons.map((poly, k) => xMark(polyCx(poly), polyCy(poly), 5, k))}
      </svg>
    );
  }
  // rect: d equal vertical strips
  const W = 220, H = 52;
  const cellW = W / d;
  return (
    <svg width={Math.round(W * s)} height={Math.round(H * s)} viewBox={`0 0 ${W} ${H}`} className="mx-auto block">
      {Array.from({ length: d }, (_, i) => {
        const x = Math.round(i * cellW);
        const w = Math.round((i + 1) * cellW) - x;
        return (
          <rect key={i} x={x} y={0} width={w} height={H}
            fill={cellFill(i)}
            stroke="#2563eb" strokeWidth={1}
            style={toggle ? { cursor: "pointer" } : {}}
            onClick={toggle ? () => toggle(i) : undefined}
          />
        );
      })}
      <rect x={0} y={0} width={W} height={H} fill="none" stroke="#2563eb" strokeWidth={1.5} />
      {Array.from({ length: d }, (_, i) => {
        const x = Math.round(i * cellW);
        const w = Math.round((i + 1) * cellW) - x;
        return xMark(x + w / 2, H / 2, Math.min(w * 0.28, 10), i);
      })}
    </svg>
  );
}

// ── Multi-shape helpers ────────────────────────────────────────────────────────
function naturalW(kind: ShapeKind): number {
  return { rect: 220, square: 100, triangle: 150, circle: 120, grid: 130, semicircle: 100, quartercircle: 100, hexagon: 100 }[kind] ?? 120;
}
function computeScale(kind: ShapeKind, copies: number): number {
  if (copies <= 1) return 1;
  const available = 200;
  const gap = 8 * (copies - 1);
  const perShape = Math.floor((available - gap) / copies);
  return Math.min(1, perShape / naturalW(kind));
}
function preColorFlat(n: number, d: number): Set<number> {
  const s = new Set<number>();
  let rem = n;
  let copy = 0;
  while (rem > 0) { for (let k = 0; k < Math.min(d, rem); k++) s.add(copy * d + k); rem -= Math.min(d, rem); copy++; }
  return s;
}

function ShapesRow({ kind, d, copies, colored, onToggle, scale, missSet, extraSet }: {
  kind: ShapeKind; d: number; copies: number;
  colored: Set<number>;
  onToggle?: (flatIdx: number) => void;
  scale?: number;
  missSet?: Set<number>;
  extraSet?: Set<number>;
}) {
  return (
    <div className="flex items-center gap-2 justify-center overflow-hidden max-w-full">
      {Array.from({ length: copies }, (_, copy) => {
        const copySet = new Set(Array.from({ length: d }, (_, k) => k).filter(k => colored.has(copy * d + k)));
        const copyMissSet = missSet ? new Set(Array.from({ length: d }, (_, k) => k).filter(k => missSet.has(copy * d + k))) : undefined;
        const copyExtraSet = extraSet ? new Set(Array.from({ length: d }, (_, k) => k).filter(k => extraSet.has(copy * d + k))) : undefined;
        const handleToggle = onToggle ? (ci: number) => onToggle(copy * d + ci) : undefined;
        return <FractionShape key={copy} kind={kind} d={d} colored={copySet} onToggle={handleToggle} scale={scale} missSet={copyMissSet} extraSet={copyExtraSet} />;
      })}
    </div>
  );
}

// ── Correction helpers ─────────────────────────────────────────────────────────
function getCorrectionSets(n: number, d: number, coloredSet: Set<number>): { missSet: Set<number>; extraSet: Set<number> } {
  const sorted = [...coloredSet].sort((a, b) => a - b);
  const extra = new Set<number>();
  if (sorted.length > n) sorted.slice(n).forEach(k => extra.add(k));
  const miss = new Set<number>();
  if (sorted.length < n) {
    Array.from({ length: d }, (_, k) => k).filter(k => !coloredSet.has(k)).slice(0, n - sorted.length).forEach(k => miss.add(k));
  }
  return { missSet: miss, extraSet: extra };
}

function getFlatCorrectionSets(n: number, d: number, copies: number, coloredSet: Set<number>): { missSet: Set<number>; extraSet: Set<number> } {
  const totalCells = copies * d;
  const allFlat = Array.from({ length: totalCells }, (_, k) => k);
  const sorted = allFlat.filter(k => coloredSet.has(k)).sort((a, b) => a - b);
  const extra = new Set<number>();
  if (sorted.length > n) sorted.slice(n).forEach(k => extra.add(k));
  const miss = new Set<number>();
  if (sorted.length < n) {
    allFlat.filter(k => !coloredSet.has(k)).slice(0, n - sorted.length).forEach(k => miss.add(k));
  }
  return { missSet: miss, extraSet: extra };
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
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
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
    const results = items.map((item, i) => selected[i] === item.highlight);
    onValidated(results.every(Boolean), results.filter(Boolean).length, results.length);
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
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
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
    onValidated(res.every(Boolean), res.filter(Boolean).length, res.length);
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
                {(() => { const corr = validated && !colorResults[i] ? getCorrectionSets(item.n, item.d, colored[i]!) : null; return (
                <FractionShape kind={item.kind} d={item.d} colored={colored[i]!}
                  onToggle={validated ? undefined : (ci) => toggleColor(i, ci)}
                  missSet={corr?.missSet}
                  extraSet={corr?.extraSet}
                />
                ); })()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise: Fraction read from shape (A4-1 step) ────────────────────────────
export function FractionReadExercise({ validateCommand, onValidated }: {
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
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
    onValidated(sts.every(s => s === "correct"), sts.filter(s => s === "correct").length, sts.length);
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
          const inputCls = `w-14 rounded-xl border px-2 py-1.5 text-sm text-center outline-none transition-colors ${isWrong ? "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20" : "border-[var(--color-accent-alg)]/40 bg-blue-50 dark:bg-blue-950/20 focus:border-[var(--color-accent-alg)]"}`;
          return (
            <div key={i} className={`rounded-xl border p-3 ${isWrong ? "border-amber-500 bg-amber-50/30 dark:bg-amber-950/10" : "border-[var(--color-border-default)]"}`}>
              <div className="flex items-center gap-3">
                <span className="w-6 shrink-0 text-center text-sm font-bold text-[var(--color-accent-alg)]">{item.label}.</span>
                <div className="shrink-0 flex flex-col items-center gap-1">
                  {isWrong ? (
                    <div className="w-14 rounded-xl border border-amber-500 bg-amber-50 dark:bg-amber-950/20 px-2 py-1.5 text-sm flex items-center justify-center gap-0.5">
                      <span className="text-amber-600 line-through">{readNums[i] || "—"}</span>
                      <span className="font-bold text-[var(--color-text-primary)]">{correctNum}</span>
                    </div>
                  ) : (
                    <input type="text" value={readNums[i]} onChange={(e) => { if (!validated) setReadNums(prev => { const n = [...prev]; n[i] = e.target.value; return n; }); }} className={inputCls} />
                  )}
                  <span className="h-[2px] w-14 rounded bg-[var(--color-text-primary)]" />
                  {isWrong ? (
                    <div className="w-14 rounded-xl border border-amber-500 bg-amber-50 dark:bg-amber-950/20 px-2 py-1.5 text-sm flex items-center justify-center gap-0.5">
                      <span className="text-amber-600 line-through">{readDens[i] || "—"}</span>
                      <span className="font-bold text-[var(--color-text-primary)]">{correctDen}</span>
                    </div>
                  ) : (
                    <input type="text" value={readDens[i]} onChange={(e) => { if (!validated) setReadDens(prev => { const n = [...prev]; n[i] = e.target.value; return n; }); }} className={inputCls} />
                  )}
                </div>
                <div className="flex flex-1 justify-center">
                  <FractionShape kind={item.kind} d={item.d} colored={preColored} />
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

const HEXAGON_DENOMS = [2, 3, 4, 6, 9, 12] as const;
function pickHexDenom() { return HEXAGON_DENOMS[Math.floor(Math.random() * HEXAGON_DENOMS.length)]!; }

// All 7 basic shape configs (kind, denominator picker)
type ShapeConfig = { kind: ShapeKind; d: number };
function pickShapeConfigs(count: number): ShapeConfig[] {
  const pickers: (() => ShapeConfig)[] = [
    () => ({ kind: "rect",         d: rnd(2, 20) }),
    () => ({ kind: "square",       d: pickSquareDenom() }),
    () => ({ kind: "triangle",     d: pickTriangleDenom() }),
    () => ({ kind: "circle",       d: rnd(2, 15) }),
    () => ({ kind: "semicircle",   d: rnd(2, 10) }),
    () => ({ kind: "quartercircle",d: rnd(2, 10) }),
    () => ({ kind: "hexagon",      d: pickHexDenom() }),
  ];
  return shuffle(pickers).slice(0, count).map(fn => fn());
}

function generateColoringItems(): ColoringSpec[] {
  const configs = pickShapeConfigs(4);
  return configs.map((cfg, i) => {
    const n = rnd(1, cfg.d - 1);
    const names: Record<ShapeKind, string> = { rect: "rectangle", square: "carré", triangle: "triangle", circle: "cercle", grid: "grille", semicircle: "demi-cercle", quartercircle: "quart de cercle", hexagon: "hexagone" };
    return { label: String(i + 1), kind: cfg.kind, d: cfg.d, n, desc: `${n}/${cfg.d} d'un ${names[cfg.kind]} partagé en ${cfg.d} parties égales` };
  });
}

function generateFractionReadItems(): FracReadSpec[] {
  const configs = pickShapeConfigs(4);
  return configs.map((cfg, i) => {
    const n = rnd(1, cfg.d - 1);
    return { label: String(i + 1), kind: cfg.kind, d: cfg.d, n, answer: `${n}/${cfg.d}` };
  });
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

// ── Multi-shape generators ────────────────────────────────────────────────────
interface MultiColoringSpec { label: string; kind: ShapeKind; d: number; copies: number; n: number; }
interface MultiReadSpec { label: string; kind: ShapeKind; d: number; copies: number; n: number; answer: string; }

function pickMultiShapeConfigs(): ShapeConfig[] {
  // For multi-shape, keep denominators small so copies scale properly
  const pickers: (() => ShapeConfig)[] = [
    () => ({ kind: "rect",          d: rnd(2, 5) }),
    () => ({ kind: "square",        d: ([2, 4] as const)[Math.floor(Math.random() * 2)]! }),
    () => ({ kind: "triangle",      d: ([2, 3, 4] as const)[Math.floor(Math.random() * 3)]! }),
    () => ({ kind: "circle",        d: rnd(2, 5) }),
    () => ({ kind: "semicircle",    d: rnd(2, 5) }),
    () => ({ kind: "quartercircle", d: rnd(2, 5) }),
    () => ({ kind: "hexagon",       d: ([2, 3, 4, 6] as const)[Math.floor(Math.random() * 4)]! }),
  ];
  return shuffle(pickers).slice(0, 4).map(fn => fn());
}

function generateMultiColoringItems(): MultiColoringSpec[] {
  return pickMultiShapeConfigs().map((cfg, i) => {
    const copies = rnd(2, 3);
    const n = rnd(cfg.d + 1, copies * cfg.d - 1);
    return { label: String(i + 1), kind: cfg.kind, d: cfg.d, copies, n };
  });
}

function generateMultiReadItems(): MultiReadSpec[] {
  return pickMultiShapeConfigs().map((cfg, i) => {
    const copies = rnd(2, 3);
    const n = rnd(cfg.d + 1, copies * cfg.d - 1);
    return { label: String(i + 1), kind: cfg.kind, d: cfg.d, copies, n, answer: `${n}/${cfg.d}` };
  });
}

// ── Exercise 4 — Multi-shape coloring (improper fractions) ────────────────────
export function FractionMultiColoringExercise({ validateCommand, onValidated }: {
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [items] = useState(generateMultiColoringItems);
  const [colored, setColored] = useState<Set<number>[]>(() => items.map(() => new Set<number>()));
  const [results, setResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const res = items.map((item, i) => colored[i]!.size === item.n);
    setResults(res);
    onValidated(res.every(Boolean), res.filter(Boolean).length, res.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, items, colored]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  function toggleCell(itemIdx: number, flatIdx: number) {
    if (validated) return;
    setColored(prev => {
      const next = prev.map(s => new Set(s));
      if (next[itemIdx]!.has(flatIdx)) next[itemIdx]!.delete(flatIdx);
      else next[itemIdx]!.add(flatIdx);
      return next;
    });
  }

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 4 — Colorie la fraction demandée</h2>
      </div>
      <div className="space-y-5">
        {items.map((item, i) => {
          const sc = computeScale(item.kind, item.copies);
          const isWrong = validated && !results[i];
          return (
            <div key={i} className={`rounded-xl border p-3 ${isWrong ? "border-amber-500 bg-amber-50/30 dark:bg-amber-950/10" : "border-[var(--color-border-default)]"}`}>
              <div className="flex items-center gap-3">
                <span className="w-6 shrink-0 text-center text-sm font-bold text-[var(--color-accent-alg)]">{item.label}.</span>
                <div className="shrink-0">
                  <FractionDisplay numerator={item.n} denominator={item.d} highlightPart="num" />
                </div>
                <div className="flex flex-1 justify-center overflow-hidden">
                  {(() => { const corr = validated && !results[i] ? getFlatCorrectionSets(item.n, item.d, item.copies, colored[i]!) : null; return (
                  <ShapesRow kind={item.kind} d={item.d} copies={item.copies}
                    colored={colored[i]!}
                    onToggle={validated ? undefined : (fi) => toggleCell(i, fi)}
                    scale={sc}
                    missSet={corr?.missSet}
                    extraSet={corr?.extraSet}
                  />
                  ); })()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Exercise 5 — Multi-shape read (improper fractions) ────────────────────────
export function FractionMultiReadExercise({ validateCommand, onValidated }: {
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [items] = useState(generateMultiReadItems);
  const [readNums, setReadNums] = useState<string[]>(() => Array(4).fill(""));
  const [readDens, setReadDens] = useState<string[]>(() => Array(4).fill(""));
  const [statuses, setStatuses] = useState<("idle" | "correct" | "wrong")[]>(() => Array(4).fill("idle"));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const sts = items.map((item, i) => {
      const combined = `${readNums[i]}/${readDens[i]}`;
      return answerMatches(combined, [item.answer]) ? "correct" : "wrong";
    }) as ("correct" | "wrong")[];
    setStatuses(sts);
    onValidated(sts.every(s => s === "correct"), sts.filter(s => s === "correct").length, sts.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, items, readNums, readDens]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 5 — Observe et écris la fraction</h2>
      </div>
      <div className="space-y-5">
        {items.map((item, i) => {
          const preColored = preColorFlat(item.n, item.d);
          const sc = computeScale(item.kind, item.copies);
          const isWrong = statuses[i] === "wrong";
          const [correctNum, correctDen] = item.answer.split("/");
          const inputCls = `w-14 rounded-xl border px-2 py-1.5 text-sm text-center outline-none transition-colors ${isWrong ? "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20" : "border-[var(--color-accent-alg)]/40 bg-blue-50 dark:bg-blue-950/20 focus:border-[var(--color-accent-alg)]"}`;
          return (
            <div key={i} className={`rounded-xl border p-3 ${isWrong ? "border-amber-500 bg-amber-50/30 dark:bg-amber-950/10" : "border-[var(--color-border-default)]"}`}>
              <div className="flex items-center gap-3">
                <span className="w-6 shrink-0 text-center text-sm font-bold text-[var(--color-accent-alg)]">{item.label}.</span>
                <div className="shrink-0 flex flex-col items-center gap-1">
                  {isWrong ? (
                    <div className="w-14 rounded-xl border border-amber-500 bg-amber-50 dark:bg-amber-950/20 px-2 py-1.5 text-sm flex items-center justify-center gap-0.5">
                      <span className="text-amber-600 line-through">{readNums[i] || "—"}</span>
                      <span className="font-bold text-[var(--color-text-primary)]">{correctNum}</span>
                    </div>
                  ) : (
                    <input type="text" value={readNums[i]} onChange={(e) => { if (!validated) setReadNums(prev => { const n = [...prev]; n[i] = e.target.value; return n; }); }} className={inputCls} />
                  )}
                  <span className="h-[2px] w-14 rounded bg-[var(--color-text-primary)]" />
                  {isWrong ? (
                    <div className="w-14 rounded-xl border border-amber-500 bg-amber-50 dark:bg-amber-950/20 px-2 py-1.5 text-sm flex items-center justify-center gap-0.5">
                      <span className="text-amber-600 line-through">{readDens[i] || "—"}</span>
                      <span className="font-bold text-[var(--color-text-primary)]">{correctDen}</span>
                    </div>
                  ) : (
                    <input type="text" value={readDens[i]} onChange={(e) => { if (!validated) setReadDens(prev => { const n = [...prev]; n[i] = e.target.value; return n; }); }} className={inputCls} />
                  )}
                </div>
                <div className="flex flex-1 justify-center overflow-hidden">
                  <ShapesRow kind={item.kind} d={item.d} copies={item.copies} colored={preColored} scale={sc} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── A4.2 Helpers ──────────────────────────────────────────────────────────────
function gcdA4(a: number, b: number): number {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a || 1;
}
function riA4(lo: number, hi: number): number {
  return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}

// Vertical fraction (number-based)
function VFracNum({ n, d }: { n: number; d: number }) {
  return (
    <span className="inline-flex flex-col items-center gap-[2px] align-middle mx-0.5">
      <span className="h-8 w-12 flex items-center justify-center text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{n}</span>
      <span className="h-[1.5px] w-12 rounded-full bg-[var(--color-text-primary)]" />
      <span className="h-8 w-12 flex items-center justify-center text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{d}</span>
    </span>
  );
}

// Fraction with one input box (either numerator or denominator is a textbox)
function VFracBoxOne({ n, d, missingPos, inputVal, onInput, status, disabled, correctVal }: {
  n: number; d: number;
  missingPos: "num" | "den";
  inputVal: string;
  onInput: (v: string) => void;
  status: "idle" | "correct" | "wrong";
  disabled: boolean;
  correctVal?: string;
}) {
  const iCls = `w-12 !h-8 py-0 rounded-xl border px-1 text-sm text-center outline-none transition-colors border-[var(--color-accent-alg)]/40 bg-blue-50 dark:bg-blue-950/20 focus:border-[var(--color-accent-alg)]`;
  const numCls = "h-8 w-12 flex items-center justify-center text-sm font-bold tabular-nums text-[var(--color-text-primary)]";
  const corrBox = (val: string) => (
    <span className="w-12 h-8 rounded-xl border border-amber-500 bg-amber-50 dark:bg-amber-950/20 px-1 flex items-center justify-center gap-0.5">
      <span className="text-xs text-amber-600 line-through tabular-nums">{val || "—"}</span>
      <span className="text-xs font-bold text-[var(--color-text-primary)] tabular-nums">{correctVal}</span>
    </span>
  );
  return (
    <span className="inline-flex flex-col items-center gap-[2px] align-middle mx-0.5">
      {missingPos === "num"
        ? (status === "wrong" ? corrBox(inputVal) : <input type="text" value={inputVal} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInput(e.target.value)} disabled={disabled} className={iCls} />)
        : <span className={numCls}>{n}</span>
      }
      <span className="h-[1.5px] w-12 rounded bg-[var(--color-text-primary)]" />
      {missingPos === "den"
        ? (status === "wrong" ? corrBox(inputVal) : <input type="text" value={inputVal} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInput(e.target.value)} disabled={disabled} className={iCls} />)
        : <span className={numCls}>{d}</span>
      }
    </span>
  );
}

// Fraction with both inputs (for simplify exercise)
function VFracBoxBoth({ numVal, denVal, onNum, onDen, status, disabled, correctNum, correctDen }: {
  numVal: string; denVal: string;
  onNum: (v: string) => void; onDen: (v: string) => void;
  status: "idle" | "correct" | "wrong";
  disabled: boolean;
  correctNum?: string;
  correctDen?: string;
}) {
  const iCls = `w-12 !h-8 py-0 rounded-xl border px-1 text-sm text-center outline-none transition-colors border-[var(--color-accent-alg)]/40 bg-blue-50 dark:bg-blue-950/20 focus:border-[var(--color-accent-alg)]`;
  const corrBox = (val: string, correct: string | undefined) => (
    <span className="w-12 h-8 rounded-xl border border-amber-500 bg-amber-50 dark:bg-amber-950/20 px-1 flex items-center justify-center gap-0.5">
      <span className="text-xs text-amber-600 line-through tabular-nums">{val || "—"}</span>
      <span className="text-xs font-bold text-[var(--color-text-primary)] tabular-nums">{correct}</span>
    </span>
  );
  return (
    <span className="inline-flex flex-col items-center gap-[2px] align-middle mx-0.5">
      {status === "wrong" ? corrBox(numVal, correctNum) : <input type="text" value={numVal} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onNum(e.target.value)} disabled={disabled} className={iCls} />}
      <span className="h-[1.5px] w-12 rounded bg-[var(--color-text-primary)]" />
      {status === "wrong" ? corrBox(denVal, correctDen) : <input type="text" value={denVal} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onDen(e.target.value)} disabled={disabled} className={iCls} />}
    </span>
  );
}

interface EquivQ { bigN: number; bigD: number; smallN: number; smallD: number; missingPos: "num" | "den"; answer: number; }
interface SimplifyQ { bigN: number; bigD: number; smallN: number; smallD: number; }

function genEquivQ(): EquivQ {
  for (let t = 0; t < 200; t++) {
    const sN = riA4(1, 12);
    const sD = riA4(2, 12);
    if (gcdA4(sN, sD) !== 1) continue;
    const k = riA4(2, 12);
    const bigN = sN * k;
    const bigD = sD * k;
    if (bigN > 144 || bigD > 144) continue;
    const missingPos: "num" | "den" = Math.random() < 0.5 ? "num" : "den";
    return { bigN, bigD, smallN: sN, smallD: sD, missingPos, answer: missingPos === "num" ? sN : sD };
  }
  return { bigN: 4, bigD: 20, smallN: 1, smallD: 5, missingPos: "num", answer: 1 };
}

function genSimplifyQ(): SimplifyQ {
  for (let t = 0; t < 200; t++) {
    const sN = riA4(1, 12);
    const sD = riA4(2, 12);
    if (gcdA4(sN, sD) !== 1) continue;
    const k = riA4(2, 12);
    const bigN = sN * k;
    const bigD = sD * k;
    if (bigN > 144 || bigD > 144) continue;
    return { bigN, bigD, smallN: sN, smallD: sD };
  }
  return { bigN: 4, bigD: 20, smallN: 1, smallD: 5 };
}

// ── Exercise 1 — Find the missing value (A4.2) ────────────────────────────────
export function FractionEquivExercise({ validateCommand, onValidated }: {
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<EquivQ[]>(() => Array.from({ length: 5 }, genEquivQ));
  const [answers, setAnswers] = useState<string[]>(() => Array(5).fill(""));
  const [statuses, setStatuses] = useState<("idle" | "correct" | "wrong")[]>(() => Array(5).fill("idle"));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const sts = questions.map((q, i) =>
      (answers[i]?.trim() ?? "") === String(q.answer) ? "correct" : "wrong"
    ) as ("correct" | "wrong")[];
    setStatuses(sts);
    onValidated(sts.every(s => s === "correct"), sts.filter(s => s === "correct").length, sts.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, questions, answers]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 1</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Trouvez la valeur manquante.</p>
      </div>
      <div className="space-y-4">
        {questions.map((q, i) => (
          <div key={i} className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <VFracNum n={q.bigN} d={q.bigD} />
            <span className="text-base font-semibold text-[var(--color-text-primary)]">=</span>
            <VFracBoxOne
              n={q.smallN} d={q.smallD}
              missingPos={q.missingPos}
              inputVal={answers[i]!}
              onInput={(v) => { if (!validated) setAnswers(prev => { const n = [...prev]; n[i] = v; return n; }); }}
              status={statuses[i]!}
              disabled={validated}
              correctVal={String(q.answer)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 2 — Simplify fractions (A4.2) ───────────────────────────────────
export function FractionSimplifyExercise({ validateCommand, onValidated }: {
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<SimplifyQ[]>(() => Array.from({ length: 5 }, genSimplifyQ));
  const [nums, setNums] = useState<string[]>(() => Array(5).fill(""));
  const [dens, setDens] = useState<string[]>(() => Array(5).fill(""));
  const [statuses, setStatuses] = useState<("idle" | "correct" | "wrong")[]>(() => Array(5).fill("idle"));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const sts = questions.map((q, i) =>
      (nums[i]?.trim() ?? "") === String(q.smallN) && (dens[i]?.trim() ?? "") === String(q.smallD)
        ? "correct" : "wrong"
    ) as ("correct" | "wrong")[];
    setStatuses(sts);
    onValidated(sts.every(s => s === "correct"), sts.filter(s => s === "correct").length, sts.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, questions, nums, dens]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 2</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Simplifiez les fractions.</p>
      </div>
      <div className="space-y-4">
        {questions.map((q, i) => (
          <div key={i} className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <VFracNum n={q.bigN} d={q.bigD} />
            <span className="text-base font-semibold text-[var(--color-text-primary)]">=</span>
            <VFracBoxBoth
              numVal={nums[i]!} denVal={dens[i]!}
              onNum={(v) => { if (!validated) setNums(prev => { const n = [...prev]; n[i] = v; return n; }); }}
              onDen={(v) => { if (!validated) setDens(prev => { const n = [...prev]; n[i] = v; return n; }); }}
              status={statuses[i]!}
              disabled={validated}
              correctNum={String(q.smallN)}
              correctDen={String(q.smallD)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise — Compare fractions (A4.3) ───────────────────────────────────────
interface ComparePair { n1: number; d1: number; n2: number; d2: number; answer: "<" | "=" | ">"; }

function genCompareSameDen(): ComparePair {
  const d = riA4(2, 12);
  const n1 = riA4(1, d + 4);
  let n2 = riA4(1, d + 4);
  while (n2 === n1) n2 = riA4(1, d + 4);
  const diff = n1 - n2;
  return { n1, d1: d, n2, d2: d, answer: diff < 0 ? "<" : diff > 0 ? ">" : "=" };
}

function genCompareSameNum(): ComparePair {
  const n = riA4(1, 11);
  const d1 = riA4(2, 12);
  let d2 = riA4(2, 12);
  while (d2 === d1) d2 = riA4(2, 12);
  // larger denominator → smaller fraction
  return { n1: n, d1, n2: n, d2, answer: d1 < d2 ? ">" : "<" };
}

function genCompareDiffBoth(): ComparePair {
  for (let t = 0; t < 200; t++) {
    const n1 = riA4(1, 11);
    const d1 = riA4(2, 12);
    const n2 = riA4(1, 11);
    const d2 = riA4(2, 12);
    if (n1 === n2 || d1 === d2) continue;
    const diff = n1 * d2 - n2 * d1;
    return { n1, d1, n2, d2, answer: diff < 0 ? "<" : diff > 0 ? ">" : "=" };
  }
  return { n1: 2, d1: 3, n2: 3, d2: 5, answer: ">" };
}

// ── Fraction Operation Comparison (A4.4 Ex6, A4.5 Ex6, A4.6 Ex6) ─────────────
const SMALL_DENS = [2, 3, 4, 6];

function randSmallFrac(): [number, number] {
  const d = SMALL_DENS[Math.floor(Math.random() * SMALL_DENS.length)]!;
  return [riA4(1, d - 1), d];
}

interface FracOpCompareQ {
  la: number; lb: number; lop: "+" | "-" | "×" | "÷"; lc: number; ld: number;
  ra: number; rb: number; rop: "+" | "-" | "×" | "÷"; rc: number; rd: number;
  answer: "<" | "=" | ">";
}

function genFracOpCompareQ(opMode: "add-sub" | "mul" | "div"): FracOpCompareQ {
  for (let attempt = 0; attempt < 200; attempt++) {
    const [la, lb] = randSmallFrac();
    const [lc, ld] = randSmallFrac();
    const [ra, rb] = randSmallFrac();
    const [rc, rd] = randSmallFrac();
    let lop: "+" | "-" | "×" | "÷" = "+";
    let rop: "+" | "-" | "×" | "÷" = "+";
    let lval: number, rval: number;
    if (opMode === "add-sub") {
      lop = Math.random() < 0.6 ? "+" : "-";
      rop = Math.random() < 0.6 ? "+" : "-";
      lval = lop === "+" ? la / lb + lc / ld : la / lb - lc / ld;
      rval = rop === "+" ? ra / rb + rc / rd : ra / rb - rc / rd;
      if (lval <= 0 || rval <= 0) continue;
    } else if (opMode === "mul") {
      lop = "×"; rop = "×";
      lval = (la * lc) / (lb * ld);
      rval = (ra * rc) / (rb * rd);
    } else {
      lop = "÷"; rop = "÷";
      lval = (la * ld) / (lb * lc);
      rval = (ra * rd) / (rb * rc);
    }
    const eps = 1e-9;
    const answer: "<" | "=" | ">" =
      Math.abs(lval - rval) < eps ? "=" : lval < rval ? "<" : ">";
    return { la, lb, lop, lc, ld, ra, rb, rop, rc, rd, answer };
  }
  return { la: 1, lb: 2, lop: "+", lc: 1, ld: 4, ra: 1, rb: 4, rop: "+", rc: 1, rd: 4, answer: ">" };
}

export function FracOpCompareExercise({ exNum, opMode, validateCommand, onValidated }: {
  exNum: number;
  opMode: "add-sub" | "mul" | "div";
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<FracOpCompareQ[]>(() => Array.from({ length: 5 }, () => genFracOpCompareQ(opMode)));
  const [selected, setSelected] = useState<(string | null)[]>(() => Array(5).fill(null));
  const [statuses, setStatuses] = useState<("idle" | "correct" | "wrong")[]>(() => Array(5).fill("idle"));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const sts = questions.map((q, i) =>
      selected[i] === q.answer ? "correct" : "wrong"
    ) as ("correct" | "wrong")[];
    setStatuses(sts);
    onValidated(sts.every(s => s === "correct"), sts.filter(s => s === "correct").length, sts.length);
  }, [validated, questions, selected, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  const title = opMode === "add-sub"
    ? "Comparez les expressions. Choisissez <, = ou >."
    : opMode === "mul"
    ? "Comparez les produits. Choisissez <, = ou >."
    : "Comparez les quotients. Choisissez <, = ou >.";

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{title}</p>
      </div>
      <div className="space-y-4">
        {questions.map((q, i) => {
          const st = statuses[i]!;
          const sel = selected[i];
          const btnCls = (sym: "<" | "=" | ">") => {
            const isSelected = sel === sym;
            const isCorrect = sym === q.answer;
            if (!validated) {
              return `w-10 py-2 text-sm font-bold rounded-xl border transition-colors ${
                isSelected
                  ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)] border-[var(--color-accent-alg)]/30"
                  : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
              }`;
            }
            if (st === "wrong" && (isSelected || isCorrect)) {
              return "w-10 py-2 text-sm font-bold rounded-xl border border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20 transition-colors";
            }
            return `w-10 py-2 text-sm font-bold rounded-xl border transition-colors ${
              isSelected
                ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)] border-[var(--color-accent-alg)]/30"
                : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] opacity-40"
            }`;
          };
          return (
            <div key={i} className="flex items-center gap-2 flex-wrap">
              <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <div className="flex items-center gap-0.5">
                <VFracNum n={q.la} d={q.lb} />
                <span className="shrink-0 px-1 text-sm font-bold text-[var(--color-text-secondary)]">{q.lop}</span>
                <VFracNum n={q.lc} d={q.ld} />
              </div>
              <div className="flex gap-1.5">
                {(["<", "=", ">"] as const).map(sym => (
                  <button key={sym} type="button"
                    onClick={() => { if (!validated) setSelected(prev => { const n = [...prev]; n[i] = sym; return n; }); }}
                    className={btnCls(sym)}>
                    {sym}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-0.5">
                <VFracNum n={q.ra} d={q.rb} />
                <span className="shrink-0 px-1 text-sm font-bold text-[var(--color-text-secondary)]">{q.rop}</span>
                <VFracNum n={q.rc} d={q.rd} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FractionCompareExercise({ exNum, mode, validateCommand, onValidated }: {
  exNum: number;
  mode: "same-den" | "same-num" | "diff-both";
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const gen = mode === "same-den" ? genCompareSameDen : mode === "same-num" ? genCompareSameNum : genCompareDiffBoth;
  const [pairs] = useState<ComparePair[]>(() => Array.from({ length: 5 }, gen));
  const [selected, setSelected] = useState<(string | null)[]>(() => Array(5).fill(null));
  const [statuses, setStatuses] = useState<("idle" | "correct" | "wrong")[]>(() => Array(5).fill("idle"));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const sts = pairs.map((p, i) =>
      selected[i] === p.answer ? "correct" : "wrong"
    ) as ("correct" | "wrong")[];
    setStatuses(sts);
    onValidated(sts.every(s => s === "correct"), sts.filter(s => s === "correct").length, sts.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, pairs, selected]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Comparez les fractions. Choisissez &lt;, = ou &gt;.</p>
      </div>
      <div className="space-y-4">
        {pairs.map((p, i) => {
          const st = statuses[i]!;
          const sel = selected[i];
          const btnCls = (sym: "<" | "=" | ">") => {
            const isSelected = sel === sym;
            const isCorrect = sym === p.answer;
            if (!validated) {
              return `w-10 py-2 text-sm font-bold rounded-xl border transition-colors ${
                isSelected
                  ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)] border-[var(--color-accent-alg)]/30"
                  : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
              }`;
            }
            if (st === "wrong" && (isSelected || isCorrect)) {
              return "w-10 py-2 text-sm font-bold rounded-xl border border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20 transition-colors";
            }
            return `w-10 py-2 text-sm font-bold rounded-xl border transition-colors ${
              isSelected
                ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)] border-[var(--color-accent-alg)]/30"
                : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] opacity-40"
            }`;
          };
          return (
            <div key={i} className="flex items-center gap-3 flex-wrap">
              <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <VFracNum n={p.n1} d={p.d1} />
              <div className="flex gap-1.5">
                {(["<", "=", ">"] as const).map(sym => (
                  <button key={sym} type="button" onClick={() => { if (!validated) setSelected(prev => { const n = [...prev]; n[i] = sym; return n; }); }} className={btnCls(sym)}>
                    {sym}
                  </button>
                ))}
              </div>
              <VFracNum n={p.n2} d={p.d2} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── A4.7 Exercise 1 & 3 — Fraction → Decimal ─────────────────────────────────
interface FracToDecQ { num: number; den: number; answer: string; acceptable: string[]; }

function genFracToDecQ(): FracToDecQ {
  const den = Math.random() < 0.5 ? 10 : 100;
  const num = riA4(1, den === 100 ? 999 : 99);
  const places = den === 100 ? 2 : 1;
  const commaStr = (num / den).toFixed(places).replace('.', ',');
  return { num, den, answer: commaStr, acceptable: [commaStr, (num / den).toFixed(places)] };
}

const EXT_DENS = [{d: 2, p: 1}, {d: 4, p: 2}, {d: 5, p: 1}, {d: 8, p: 3}, {d: 10, p: 1}];

function genFracToDecExtQ(): FracToDecQ {
  const info = EXT_DENS[Math.floor(Math.random() * EXT_DENS.length)]!;
  const num = riA4(1, 144);
  const commaStr = (num / info.d).toFixed(info.p).replace('.', ',');
  return { num, den: info.d, answer: commaStr, acceptable: [commaStr, (num / info.d).toFixed(info.p)] };
}

export function FracToDecExercise({ exNum = 1, variant = "basic", validateCommand, onValidated }: {
  exNum?: number; variant?: "basic" | "extended";
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const gen = variant === "extended" ? genFracToDecExtQ : genFracToDecQ;
  const [questions] = useState<FracToDecQ[]>(() => Array.from({ length: 5 }, gen));
  const [answers, setAnswers] = useState<string[]>(() => Array(5).fill(""));
  const [statuses, setStatuses] = useState<("idle" | "correct" | "wrong")[]>(() => Array(5).fill("idle"));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const sts = questions.map((q, i) =>
      q.acceptable.includes((answers[i] ?? "").trim()) ? "correct" : "wrong"
    ) as ("correct" | "wrong")[];
    setStatuses(sts);
    onValidated(sts.every(s => s === "correct"), sts.filter(s => s === "correct").length, sts.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, questions, answers]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Écris sous forme décimale.</p>
      </div>
      <div className="space-y-4">
        {questions.map((q, i) => {
          const isWrong = statuses[i] === "wrong";
          const iCls = `w-24 rounded-xl border px-2 py-1.5 text-sm text-center outline-none transition-colors border-[var(--color-accent-alg)]/40 bg-blue-50 dark:bg-blue-950/20 focus:border-[var(--color-accent-alg)]`;
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{String.fromCharCode(96 + i + 1)})</span>
              <span className="inline-flex flex-col items-center gap-[2px]">
                <span className="h-8 flex items-center justify-center text-sm font-bold tabular-nums text-[var(--color-accent-alg)]">{q.num}</span>
                <span className="h-[1.5px] w-8 rounded bg-[var(--color-text-primary)]" />
                <span className="h-8 flex items-center justify-center text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{q.den}</span>
              </span>
              <span className="text-base font-semibold text-[var(--color-text-primary)]">=</span>
              {isWrong ? (
                <div className="w-24 rounded-xl border border-amber-500 bg-amber-50 dark:bg-amber-950/20 px-2 py-1.5 text-sm flex items-center justify-center gap-1">
                  <span className="text-amber-600 line-through tabular-nums">{answers[i] || "—"}</span>
                  <span className="font-bold text-[var(--color-text-primary)] tabular-nums">{q.answer}</span>
                </div>
              ) : (
                <input type="text" value={answers[i]!} onChange={e => { if (!validated) setAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; }); }} className={iCls} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── A4.7 Exercise 2 & 4 — Decimal → Fraction ─────────────────────────────────
interface DecToFracQ { decStr: string; den: number; answer: number; }

function genDecToFracQ(): DecToFracQ {
  const den = Math.random() < 0.5 ? 10 : 100;
  const num = riA4(1, den === 100 ? 999 : 99);
  const places = den === 100 ? 2 : 1;
  return { decStr: (num / den).toFixed(places).replace('.', ','), den, answer: num };
}

function genDecToFracExtQ(): DecToFracQ {
  const info = EXT_DENS[Math.floor(Math.random() * EXT_DENS.length)]!;
  const num = riA4(1, 144);
  return { decStr: (num / info.d).toFixed(info.p).replace('.', ','), den: info.d, answer: num };
}

export function DecToFracExercise({ exNum = 2, variant = "basic", validateCommand, onValidated }: {
  exNum?: number; variant?: "basic" | "extended";
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const gen = variant === "extended" ? genDecToFracExtQ : genDecToFracQ;
  const [questions] = useState<DecToFracQ[]>(() => Array.from({ length: 5 }, gen));
  const [answers, setAnswers] = useState<string[]>(() => Array(5).fill(""));
  const [statuses, setStatuses] = useState<("idle" | "correct" | "wrong")[]>(() => Array(5).fill("idle"));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const sts = questions.map((q, i) =>
      (answers[i] ?? "").trim() === String(q.answer) ? "correct" : "wrong"
    ) as ("correct" | "wrong")[];
    setStatuses(sts);
    onValidated(sts.every(s => s === "correct"), sts.filter(s => s === "correct").length, sts.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, questions, answers]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Écris sous forme de fraction.</p>
      </div>
      <div className="grid gap-x-3 gap-y-5" style={{ gridTemplateColumns: "1.5rem 3.5rem 1.5rem 3.5rem", alignItems: "center" }}>
        {questions.map((q, i) => {
          const isWrong = statuses[i] === "wrong";
          const iCls = `w-12 !h-8 py-0 rounded-xl border px-1 text-sm text-center outline-none transition-colors border-[var(--color-accent-alg)]/40 bg-blue-50 dark:bg-blue-950/20 focus:border-[var(--color-accent-alg)]`;
          return (
            <React.Fragment key={i}>
              <span className="text-sm font-bold text-[var(--color-accent-alg)]">{String.fromCharCode(96 + i + 1)})</span>
              <span className="text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{q.decStr}</span>
              <span className="text-base font-semibold text-[var(--color-text-primary)] text-center">=</span>
              <span className="flex flex-col items-center gap-[2px]">
                {isWrong ? (
                  <span className="w-12 h-8 rounded-xl border border-amber-500 bg-amber-50 dark:bg-amber-950/20 px-1 flex items-center justify-center gap-0.5">
                    <span className="text-xs text-amber-600 line-through tabular-nums">{answers[i] || "—"}</span>
                    <span className="text-xs font-bold text-[var(--color-text-primary)] tabular-nums">{q.answer}</span>
                  </span>
                ) : (
                  <input type="text" value={answers[i]!} onChange={e => { if (!validated) setAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; }); }} className={iCls} />
                )}
                <span className="h-[1.5px] w-12 rounded bg-[var(--color-text-primary)]" />
                <span className="h-8 w-12 flex items-center justify-center text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{q.den}</span>
              </span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

// ── Combined Decimal Exercises (A4.2 — single step) ───────────────────────────
export function CombinedDecimalExercise({ validateCommand, onValidated }: {
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
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

  function handleCustomValidated(ok: boolean, _correct?: number, _total?: number) {
    setCanValidate(false);
    if (currentStep?.kind === "fraction_toggle" || currentStep?.kind === "fraction_coloring" || currentStep?.kind === "fraction_read") {
      const p = loadProgress();
      saveProgress(completeSubmodule(p, "A4", currentStep.lesson.submoduleId));
    } else if (currentStep?.kind === "a4_decimal_exercises") {
      const p = loadProgress();
      saveProgress(completeSubmodule(p, "A4", "A4-2"));
    }
    void ok; void _correct; void _total;
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

"use client";

import type { PlacementFrenchSession, PlacementMathAttempt } from "@/lib/placement/types";

const MATH_COLOR = "#c06078";
const FRENCH_COLOR = "#e8b4c0";

const Y_TICKS = [0, 20, 40, 60, 80, 100];
const SLOTS = 5;

function formatHalf(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function lastSlots<T>(items: T[]): Array<T | null> {
  return Array.from({ length: SLOTS }, (_, i) => items[Math.max(0, items.length - SLOTS) + i] ?? null);
}

function SubjectEvolutionPanel({
  label,
  color,
  items,
}: {
  label: string;
  color: string;
  items: Array<{ points: number } | null>;
}) {
  const leftPad = 24;
  const chartTop = 8;
  const chartH = 120;
  const chartBottom = chartTop + chartH;
  const slotW = 28;
  const gap = 6;
  const barW = 14;
  const barsAreaW = SLOTS * slotW + (SLOTS - 1) * gap;
  const svgW = leftPad + barsAreaW + 4;
  const svgH = chartBottom + 4;
  const maxPts = 100;

  const toY = (pts: number) => chartTop + chartH - Math.round((Math.min(pts, maxPts) / maxPts) * chartH);

  return (
    <div className="min-w-0 flex-1">
      <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">
        {label}
      </p>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} className="mx-auto w-full max-w-[11rem] overflow-visible">
        {Y_TICKS.map((tick) => {
          const y = toY(tick);
          return (
            <g key={tick}>
              <line
                x1={leftPad}
                y1={y}
                x2={leftPad + barsAreaW}
                y2={y}
                stroke="var(--color-border-default)"
                strokeOpacity={tick === 0 ? 1 : 0.35}
              />
              <text
                x={leftPad - 6}
                y={y + 3}
                textAnchor="end"
                fontSize="9"
                fontWeight="500"
                fill="var(--color-text-secondary)"
              >
                {tick}
              </text>
            </g>
          );
        })}
        {items.map((item, i) => {
          const x = leftPad + i * (slotW + gap) + (slotW - barW) / 2;
          if (!item) {
            return (
              <rect
                key={i}
                x={x}
                y={chartTop}
                width={barW}
                height={chartH}
                rx={2}
                fill="none"
                stroke="var(--color-border-default)"
                strokeDasharray="3,3"
                opacity={0.5}
              />
            );
          }
          const barY = toY(item.points);
          const barHeight = chartBottom - barY;
          return (
            <rect
              key={i}
              x={x}
              y={barY}
              width={barW}
              height={barHeight}
              rx={2}
              fill={color}
              opacity={0.9}
            />
          );
        })}
        <line
          x1={leftPad}
          y1={chartBottom}
          x2={leftPad + barsAreaW}
          y2={chartBottom}
          stroke="var(--color-border-default)"
        />
      </svg>
    </div>
  );
}

export function PlacementEvolutionChart({
  mathAttempts,
  frenchSessions,
  mathCounted,
  frenchCounted,
}: {
  mathAttempts: PlacementMathAttempt[];
  frenchSessions: PlacementFrenchSession[];
  mathCounted: number;
  frenchCounted: number;
}) {
  const mathItems = lastSlots(mathAttempts).map((a) => (a ? { points: a.points } : null));
  const frenchItems = lastSlots(frenchSessions).map((s) => (s ? { points: s.countedTotal } : null));

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3 text-center text-sm">
        <p className="font-semibold text-[var(--color-text-primary)]">
          Math : <span className="tabular-nums">{formatHalf(mathCounted)}</span>
          <span className="text-[var(--color-text-secondary)]"> / 100</span>
        </p>
        <p className="font-semibold text-[var(--color-text-primary)]">
          Français : <span className="tabular-nums">{formatHalf(frenchCounted)}</span>
          <span className="text-[var(--color-text-secondary)]"> / 100</span>
        </p>
      </div>

      <div className="flex items-end gap-8">
        <SubjectEvolutionPanel label="Mathématiques" color={MATH_COLOR} items={mathItems} />
        <SubjectEvolutionPanel label="Français" color={FRENCH_COLOR} items={frenchItems} />
      </div>

      <div className="flex items-center justify-center gap-4 text-[10px] text-[var(--color-text-secondary)]">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: MATH_COLOR }} />
          Maths
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: FRENCH_COLOR }} />
          Français
        </span>
      </div>
    </div>
  );
}

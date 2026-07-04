"use client";

import { PLACEMENT_ZONES } from "@/lib/placement/scoring";
import type { PlacementTotalSnapshot } from "@/lib/placement/types";

const ACCENT = "var(--color-accent-quiz)";
const MATH_COLOR = "#c06078";
const FRENCH_COLOR = "#e8b4c0";

const ZONE_COLORS: Record<string, string> = {
  CSC: "#94a3b8",
  CFR: "#c06078",
  CAF: "#c06078",
  CAP: "#c06078",
};

const SCALE_TICKS = [0, 50, 100, 150, 200];

export function PlacementEvolutionChart({ history }: { history: PlacementTotalSnapshot[] }) {
  const chartTop = 22;
  const chartH = 120;
  const chartBottom = chartTop + chartH;
  const slotW = 48;
  const gap = 10;
  const leftPad = 4;
  const slots = 5;
  const maxPts = 200;
  const barsAreaW = slots * slotW + (slots - 1) * gap;
  const svgW = leftPad + barsAreaW + 4;
  const svgH = chartBottom + 20;
  const items = Array.from({ length: slots }, (_, i) => history[Math.max(0, history.length - slots) + i] ?? null);

  const toY = (pts: number) => chartTop + chartH - Math.round((pts / maxPts) * chartH);

  const linePoints = items
    .map((item, i) => {
      if (!item) return null;
      const avg = (item.mathCounted + item.frenchCounted) / 2;
      const x = leftPad + i * (slotW + gap) + slotW / 2;
      const y = toY(avg);
      return `${x},${y}`;
    })
    .filter(Boolean)
    .join(" ");

  const barW = 14;

  return (
    <div className="space-y-1">
      <div className="relative px-0.5" style={{ height: 14 }}>
        {SCALE_TICKS.map((tick) => (
          <span
            key={tick}
            className="absolute -translate-x-1/2 text-[9px] font-medium text-[var(--color-text-secondary)]"
            style={{ left: `${(tick / maxPts) * 100}%` }}
          >
            {tick}
          </span>
        ))}
      </div>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full overflow-visible">
        {PLACEMENT_ZONES.map((z) => {
          const y1 = toY(z.max);
          const y2 = toY(z.min);
          return (
            <rect
              key={z.zone}
              x={leftPad}
              y={y1}
              width={barsAreaW}
              height={Math.max(1, y2 - y1)}
              fill={ZONE_COLORS[z.zone]}
              opacity={0.08}
            />
          );
        })}
        <line x1={leftPad} y1={chartBottom} x2={leftPad + barsAreaW} y2={chartBottom} stroke="var(--color-border-default)" />
        {linePoints && (
          <polyline
            points={linePoints}
            fill="none"
            stroke={ACCENT}
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        )}
        {items.map((item, i) => {
          const x = leftPad + i * (slotW + gap);
          if (!item) return null;
          const mathY = toY(item.mathCounted);
          const frenchY = toY(item.frenchCounted);
          const mathH = chartBottom - mathY;
          const frenchH = chartBottom - frenchY;
          const mathX = x + slotW / 2 - barW - 2;
          const frenchX = x + slotW / 2 + 2;
          return (
            <g key={item.date + i}>
              <rect x={mathX} y={mathY} width={barW} height={mathH} rx={3} fill={MATH_COLOR} opacity={0.9} />
              <rect x={frenchX} y={frenchY} width={barW} height={frenchH} rx={3} fill={FRENCH_COLOR} opacity={0.95} />
            </g>
          );
        })}
      </svg>
      <div className="flex items-center justify-center gap-4 text-[10px] text-[var(--color-text-secondary)]">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: MATH_COLOR }} />
          Maths
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: FRENCH_COLOR }} />
          Français
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-0.5 w-4 rounded" style={{ background: ACCENT }} />
          Moyenne
        </span>
      </div>
    </div>
  );
}

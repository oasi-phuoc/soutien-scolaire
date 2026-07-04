"use client";

import type { PlacementTotalSnapshot } from "@/lib/placement/types";

const MATH_COLOR = "#c06078";
const FRENCH_COLOR = "#e8b4c0";

const Y_TICKS = [0, 20, 40, 60, 80, 100];

function formatHalf(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

export function PlacementEvolutionChart({
  history,
  mathCounted,
  frenchCounted,
}: {
  history: PlacementTotalSnapshot[];
  mathCounted: number;
  frenchCounted: number;
}) {
  const leftPad = 28;
  const chartTop = 8;
  const chartH = 120;
  const chartBottom = chartTop + chartH;
  const slotW = 44;
  const gap = 8;
  const slots = 5;
  const maxPts = 100;
  const barW = 12;
  const barsAreaW = slots * slotW + (slots - 1) * gap;
  const svgW = leftPad + barsAreaW + 8;
  const svgH = chartBottom + 4;
  const items = Array.from({ length: slots }, (_, i) => history[Math.max(0, history.length - slots) + i] ?? null);

  const toY = (pts: number) => chartTop + chartH - Math.round((Math.min(pts, maxPts) / maxPts) * chartH);

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
      <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full overflow-visible">
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
              <rect x={mathX} y={mathY} width={barW} height={mathH} rx={2} fill={MATH_COLOR} opacity={0.9} />
              <rect x={frenchX} y={frenchY} width={barW} height={frenchH} rx={2} fill={FRENCH_COLOR} opacity={0.95} />
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
      </div>
    </div>
  );
}

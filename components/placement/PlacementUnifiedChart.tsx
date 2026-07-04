"use client";

import { PLACEMENT_ZONES } from "@/lib/placement/scoring";
import {
  PLACEMENT_CHART_ACCENT,
  PLACEMENT_ZONE_FILL,
  PLACEMENT_ZONE_LABEL,
} from "@/lib/placement/chart-colors";

const ACCENT = PLACEMENT_CHART_ACCENT;

const SCALE_TICKS = [0, 50, 100, 150, 200];

const PAD_X = 20;
const CHART_TOP = 8;
const CHART_H = 100;
const CHART_BOTTOM = CHART_TOP + CHART_H;
const CHART_W = 200;
const SVG_W = PAD_X + CHART_W + PAD_X;
const SVG_H = CHART_BOTTOM + 8;

export function PlacementUnifiedChart({ total }: { total: number }) {
  const max = 200;
  const tickX = (tick: number) => PAD_X + (tick / max) * CHART_W;
  const markerX = tickX(Math.min(max, Math.max(0, total)));

  return (
    <svg
      viewBox={`0 0 ${SVG_W} ${SVG_H}`}
      className="block w-full overflow-visible"
      style={{ aspectRatio: `${SVG_W} / ${SVG_H}` }}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      {PLACEMENT_ZONES.map((z) => {
        const x1 = tickX(z.min);
        const x2 = tickX(z.max);
        const colW = x2 - x1;
        const midX = x1 + colW / 2;
        return (
          <g key={z.zone}>
            <rect x={x1} y={CHART_TOP} width={colW} height={CHART_H} fill={PLACEMENT_ZONE_FILL[z.zone]} />
            <text
              x={midX}
              y={CHART_TOP + CHART_H / 2 + 4}
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill={PLACEMENT_ZONE_LABEL[z.zone]}
            >
              {z.zone}
            </text>
          </g>
        );
      })}
      {SCALE_TICKS.map((tick) => {
        const x = tickX(tick);
        const labelY = CHART_TOP + CHART_H / 2;
        return (
          <g key={tick}>
            <line
              x1={x}
              y1={CHART_TOP}
              x2={x}
              y2={CHART_BOTTOM}
              stroke="var(--color-border-default)"
              strokeOpacity={tick === 0 ? 0.8 : 0.35}
            />
            <text
              x={x}
              y={labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="9"
              fontWeight="500"
              fill="var(--color-text-secondary)"
              transform={`rotate(-90 ${x} ${labelY})`}
            >
              {tick}
            </text>
          </g>
        );
      })}
      <line
        x1={tickX(0)}
        y1={CHART_BOTTOM}
        x2={tickX(200)}
        y2={CHART_BOTTOM}
        stroke="var(--color-border-default)"
      />
      <circle cx={markerX} cy={CHART_TOP + CHART_H / 2} r={6} fill={ACCENT} />
    </svg>
  );
}

"use client";

import { PLACEMENT_ZONES } from "@/lib/placement/scoring";

const ACCENT = "var(--color-accent-quiz)";

const ZONE_COLORS: Record<string, string> = {
  CSC: "#94a3b8",
  CFR: "#c06078",
  CAF: "#c06078",
  CAP: "#c06078",
};

const SCALE_TICKS = [0, 50, 100, 150, 200];

export function PlacementUnifiedChart({ total }: { total: number }) {
  const max = 200;
  const chartTop = 22;
  const chartH = 100;
  const chartBottom = chartTop + chartH;
  const w = 280;
  const markerX = Math.min(w - 4, Math.round((total / max) * w));

  return (
    <div className="space-y-1">
      <div className="relative px-0.5" style={{ height: 14 }}>
        {SCALE_TICKS.map((tick) => (
          <span
            key={tick}
            className="absolute -translate-x-1/2 text-[9px] font-medium text-[var(--color-text-secondary)]"
            style={{ left: `${(tick / max) * 100}%` }}
          >
            {tick}
          </span>
        ))}
      </div>
      <svg viewBox={`0 0 ${w} ${chartBottom + 8}`} className="w-full">
        {PLACEMENT_ZONES.map((z) => {
          const x1 = (z.min / max) * w;
          const x2 = (z.max / max) * w;
          const colW = x2 - x1;
          const midX = x1 + colW / 2;
          return (
            <g key={z.zone}>
              <rect x={x1} y={chartTop} width={colW} height={chartH} fill={ZONE_COLORS[z.zone]} opacity={0.14} />
              <text
                x={midX}
                y={chartTop + chartH / 2 + 4}
                textAnchor="middle"
                fontSize="11"
                fontWeight="700"
                fill={ZONE_COLORS[z.zone]}
              >
                {z.zone}
              </text>
            </g>
          );
        })}
        <line x1={0} y1={chartBottom} x2={w} y2={chartBottom} stroke="var(--color-border-default)" />
        <circle cx={markerX} cy={chartTop + chartH / 2} r={6} fill={ACCENT} />
      </svg>
    </div>
  );
}

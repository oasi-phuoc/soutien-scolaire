"use client";

import { PLACEMENT_ZONES } from "@/lib/placement/scoring";

const ACCENT = "var(--color-accent-quiz)";

const ZONE_COLORS: Record<string, string> = {
  CSC: "#94a3b8",
  CFR: "#c06078",
  CAF: "#c06078",
  CAP: "#c06078",
};

export function PlacementUnifiedChart({ total }: { total: number }) {
  const max = 200;
  const h = 120;
  const w = 280;
  const x = Math.min(w - 8, Math.round((total / max) * w));
  return (
    <svg viewBox={`0 0 ${w} ${h + 24}`} className="w-full">
      {PLACEMENT_ZONES.map((z) => {
        const x1 = (z.min / max) * w;
        const x2 = (z.max / max) * w;
        return (
          <g key={z.zone}>
            <rect x={x1} y={8} width={x2 - x1} height={h} fill={ZONE_COLORS[z.zone]} opacity={0.12} />
            <text x={x1 + 4} y={h + 20} fontSize="8" fontWeight="700" fill={ZONE_COLORS[z.zone]}>{z.zone}</text>
          </g>
        );
      })}
      <line x1={0} y1={h + 4} x2={w} y2={h + 4} stroke="var(--color-border-default)" />
      <circle cx={x} cy={h / 2 + 4} r={6} fill={ACCENT} />
      <text x={4} y={16} fontSize="9" fill="var(--color-text-secondary)">0</text>
      <text x={w - 16} y={16} fontSize="9" fill="var(--color-text-secondary)">200</text>
    </svg>
  );
}

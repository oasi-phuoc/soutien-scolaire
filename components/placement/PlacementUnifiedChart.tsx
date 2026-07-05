"use client";

import { PLACEMENT_ZONES } from "@/lib/placement/scoring";
import {
  PLACEMENT_CHART_ACCENT,
  PLACEMENT_LINE_STROKE,
  PLACEMENT_ZONE_FILL,
  PLACEMENT_ZONE_LABEL,
} from "@/lib/placement/chart-colors";

const ACCENT = PLACEMENT_CHART_ACCENT;

const STEP_W = 62;
const STEP_H = 22;
const BASE_Y = 118;
const VIEW_PAD_L = 8;
const ARROW_SHIFT = 2 * STEP_W;
const STEP_ORIGIN = VIEW_PAD_L + ARROW_SHIFT;
const CHART_W = STEP_W * PLACEMENT_ZONES.length;
const SVG_W = STEP_ORIGIN + CHART_W + 16;
const SVG_H = BASE_Y + 22;
const TREAD_LABEL_Y = STEP_H * 0.68;
const LINE_UP = 14;

const THRESHOLDS = [0, 50, 100, 150];

function arrowEnds() {
  const x0 = STEP_ORIGIN + 10 - ARROW_SHIFT;
  const y0 = BASE_Y - STEP_H * 0.55;
  const x1 = STEP_ORIGIN + CHART_W - 10 - ARROW_SHIFT;
  const y1 = BASE_Y - PLACEMENT_ZONES.length * STEP_H - STEP_H * 0.45;
  return { x0, y0, x1, y1 };
}

/** Point sur la flèche diagonale (score 0 → 200). */
function arrowPoint(score: number) {
  const t = Math.min(200, Math.max(0, score)) / 200;
  const { x0, y0, x1, y1 } = arrowEnds();
  return {
    x: x0 + t * (x1 - x0),
    y: y0 + t * (y1 - y0),
  };
}

export function PlacementUnifiedChart({ total }: { total: number }) {
  const marker = arrowPoint(total);
  const { x0, y0, x1, y1 } = arrowEnds();
  const lastTreadY = BASE_Y - PLACEMENT_ZONES.length * STEP_H;

  return (
    <svg
      viewBox={`0 0 ${SVG_W} ${SVG_H}`}
      className="block w-full overflow-visible"
      style={{ aspectRatio: `${SVG_W} / ${SVG_H}` }}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <marker
          id="placement-arrow-head"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path
            d="M0,0 L8,4 L0,8 Z"
            fill={PLACEMENT_LINE_STROKE}
          />
        </marker>
      </defs>

      {/* Marches */}
      {PLACEMENT_ZONES.map((z, i) => {
        const x = STEP_ORIGIN + i * STEP_W;
        const y = BASE_Y - (i + 1) * STEP_H;
        return (
          <g key={z.zone}>
            {/* Contremarche (sauf première marche) */}
            {i > 0 && (
              <rect
                x={x}
                y={y}
                width={2}
                height={STEP_H}
                fill="color-mix(in oklch, var(--color-accent-quiz) 20%, var(--color-border-default))"
              />
            )}
            {/* Tread */}
            <rect
              x={x}
              y={y}
              width={STEP_W}
              height={STEP_H}
              fill={PLACEMENT_ZONE_FILL[z.zone]}
              stroke="color-mix(in oklch, var(--color-accent-quiz) 15%, var(--color-border-default))"
              strokeWidth={1}
            />
            {/* Seuil — colonne à gauche de l'ancienne position */}
            <text
              x={STEP_ORIGIN + (i - 1) * STEP_W + 6}
              y={y + TREAD_LABEL_Y}
              fontSize="11"
              fontWeight="700"
              fill="var(--color-text-secondary)"
            >
              {THRESHOLDS[i]}
            </text>
            {/* Niveau — ancienne position des seuils */}
            <text
              x={x + 6}
              y={y + TREAD_LABEL_Y}
              fontSize="11"
              fontWeight="700"
              fill={PLACEMENT_ZONE_LABEL[z.zone]}
            >
              {z.zone}
            </text>
          </g>
        );
      })}

      {/* Seuil final 200 — une ligne au-dessus */}
      <text
        x={STEP_ORIGIN + CHART_W - 4}
        y={lastTreadY + TREAD_LABEL_Y - LINE_UP}
        textAnchor="end"
        fontSize="11"
        fontWeight="700"
        fill="var(--color-text-secondary)"
      >
        200
      </text>

      {/* Flèche de progression 0 → 200 (décalée 2 cases à gauche) */}
      <line
        x1={x0}
        y1={y0}
        x2={x1}
        y2={y1}
        stroke={PLACEMENT_LINE_STROKE}
        strokeWidth={2.5}
        strokeLinecap="round"
        markerEnd="url(#placement-arrow-head)"
      />

      {/* Cercle du total sur la flèche */}
      <circle
        cx={marker.x}
        cy={marker.y}
        r={7}
        fill={ACCENT}
        stroke="white"
        strokeWidth={2}
      />
    </svg>
  );
}

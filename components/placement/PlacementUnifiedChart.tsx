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
const SCORE_MAX = 200;
const ARROW_MAX = 250;
const SVG_W = STEP_ORIGIN + CHART_W + STEP_W + 20;
const SVG_H = BASE_Y + 28;
const VIEW_TOP = -18;

const THRESHOLDS = [0, 50, 100, 150];

/** Centre horizontal d'une colonne de seuil (0 → col -1, 50 → col 0, …, 200 → col 3). */
function thresholdColCenter(index: number) {
  return STEP_ORIGIN + (index - 1) * STEP_W + STEP_W / 2;
}

function arrowEndsAt(score: number) {
  const x0 = STEP_ORIGIN + 10 - ARROW_SHIFT;
  const y0 = BASE_Y - STEP_H * 0.55;
  const x200 = STEP_ORIGIN + CHART_W - 10 - ARROW_SHIFT;
  const y200 = BASE_Y - PLACEMENT_ZONES.length * STEP_H - STEP_H * 0.45;
  const t = score / SCORE_MAX;
  return {
    x: x0 + t * (x200 - x0),
    y: y0 + t * (y200 - y0),
  };
}

/** Point sur la flèche (score 0 → 200 pour le marqueur). */
function arrowPoint(score: number) {
  const clamped = Math.min(SCORE_MAX, Math.max(0, score));
  return arrowEndsAt(clamped);
}

export function PlacementUnifiedChart({ total }: { total: number }) {
  const marker = arrowPoint(total);
  const arrowStart = arrowEndsAt(0);
  const arrowEnd = arrowEndsAt(ARROW_MAX);
  const lastTreadY = BASE_Y - PLACEMENT_ZONES.length * STEP_H;

  return (
    <svg
      viewBox={`0 ${VIEW_TOP} ${SVG_W} ${SVG_H - VIEW_TOP}`}
      className="block w-full overflow-visible"
      style={{ aspectRatio: `${SVG_W} / ${SVG_H - VIEW_TOP}` }}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <marker
          id="placement-arrow-head"
          markerWidth="11"
          markerHeight="11"
          refX="9.5"
          refY="5.5"
          orient="auto"
        >
          <path
            d="M0,0 L11,5.5 L0,11 Z"
            fill={PLACEMENT_LINE_STROKE}
          />
        </marker>
      </defs>

      {/* Marches */}
      {PLACEMENT_ZONES.map((z, i) => {
        const x = STEP_ORIGIN + i * STEP_W;
        const y = BASE_Y - (i + 1) * STEP_H;
        const treadCy = y + STEP_H / 2;
        return (
          <g key={z.zone}>
            {i > 0 && (
              <rect
                x={x}
                y={y}
                width={2}
                height={STEP_H}
                fill="color-mix(in oklch, var(--color-accent-quiz) 20%, var(--color-border-default))"
              />
            )}
            <rect
              x={x}
              y={y}
              width={STEP_W}
              height={STEP_H}
              fill={PLACEMENT_ZONE_FILL[z.zone]}
              stroke="color-mix(in oklch, var(--color-accent-quiz) 15%, var(--color-border-default))"
              strokeWidth={1}
            />
            <text
              x={thresholdColCenter(i)}
              y={treadCy}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="11"
              fontWeight="700"
              fill="var(--color-text-secondary)"
            >
              {THRESHOLDS[i]}
            </text>
            <text
              x={x + STEP_W / 2}
              y={treadCy}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="11"
              fontWeight="700"
              fill={PLACEMENT_ZONE_LABEL[z.zone]}
            >
              {z.zone}
            </text>
          </g>
        );
      })}

      {/* Seuil 200 — centré dans la colonne de la dernière marche */}
      <text
        x={thresholdColCenter(4)}
        y={lastTreadY + STEP_H / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="11"
        fontWeight="700"
        fill="var(--color-text-secondary)"
      >
        200
      </text>

      {/* Flèche 0 → 250 (250 invisible, prolongement au-delà de 200) */}
      <line
        x1={arrowStart.x}
        y1={arrowStart.y}
        x2={arrowEnd.x}
        y2={arrowEnd.y}
        stroke={PLACEMENT_LINE_STROKE}
        strokeWidth={4}
        strokeLinecap="round"
        markerEnd="url(#placement-arrow-head)"
      />

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

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
const ZONE_COUNT = PLACEMENT_ZONES.length;
/** Ligne virtuelle au-dessus de 200 — pointe de flèche à 250 (invisible). */
const ARROW_TOP_ROW = ZONE_COUNT + 1;
const VIEW_PAD_L = 8;
const ARROW_SHIFT = 2 * STEP_W;
const STEP_ORIGIN = VIEW_PAD_L + ARROW_SHIFT;
const SCORE_MAX = 200;
const ARROW_MAX = 250;
const BASE_Y = 118 + STEP_H;
const VIEW_TOP = -40;
const LABEL_ABOVE = 7;

const THRESHOLDS = [0, 50, 100, 150];

/** Centre horizontal d'une colonne de seuil (0 → col -1, 50 → col 0, …). */
function thresholdColCenter(index: number) {
  return STEP_ORIGIN + (index - 1) * STEP_W + STEP_W / 2;
}

function treadAt(rowIndex: number) {
  const x = STEP_ORIGIN + rowIndex * STEP_W;
  const y = BASE_Y - (rowIndex + 1) * STEP_H;
  return {
    x,
    y,
    cx: x + STEP_W / 2,
    cy: y + STEP_H / 2,
  };
}

function arrowEndsAt(score: number) {
  const t = score / ARROW_MAX;
  const start = {
    x: STEP_ORIGIN + 10 - ARROW_SHIFT,
    y: BASE_Y - STEP_H * 0.55,
  };
  const end = treadAt(ARROW_TOP_ROW);
  const endX = end.x + STEP_W - 10;
  const endY = end.y + STEP_H * 0.45;
  return {
    x: start.x + t * (endX - start.x),
    y: start.y + t * (endY - start.y),
  };
}

/** Point sur la flèche (score 0 → 200 pour le marqueur). */
function arrowPoint(score: number) {
  const clamped = Math.min(SCORE_MAX, Math.max(0, score));
  return arrowEndsAt(clamped);
}

function chartViewBox(arrowStart: { x: number; y: number }, arrowEnd: { x: number; y: number }) {
  let minX = Math.min(arrowStart.x, thresholdColCenter(0) - STEP_W / 2);
  let maxX = arrowEnd.x + 8;
  let minY = VIEW_TOP;

  for (let i = 0; i < ZONE_COUNT; i += 1) {
    const tread = treadAt(i);
    minX = Math.min(minX, tread.x, thresholdColCenter(i) - STEP_W / 2);
    maxX = Math.max(maxX, tread.x + STEP_W);
    minY = Math.min(minY, tread.y - LABEL_ABOVE - 10);
  }

  const padX = 8;
  const maxY = BASE_Y + 20;
  return {
    minX: minX - padX,
    minY,
    width: maxX - minX + padX * 2,
    height: maxY - minY,
  };
}

export function PlacementUnifiedChart({ total }: { total: number }) {
  const marker = arrowPoint(total);
  const arrowStart = arrowEndsAt(0);
  const arrowEnd = arrowEndsAt(ARROW_MAX);
  const view = chartViewBox(arrowStart, arrowEnd);

  return (
    <div className="flex w-full justify-center">
      <svg
        viewBox={`${view.minX} ${view.minY} ${view.width} ${view.height}`}
        className="block h-auto w-full max-w-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <marker
            id="placement-arrow-head"
            markerWidth="4"
            markerHeight="4"
            refX="3.5"
            refY="2"
            orient="auto"
          >
            <path
              d="M0,0 L4,2 L0,4 Z"
              fill={PLACEMENT_LINE_STROKE}
            />
          </marker>
        </defs>

        {/* Marches zones CSC → CAP */}
        {PLACEMENT_ZONES.map((z, i) => {
          const { x, y, cx, cy } = treadAt(i);
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
                y={cy}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="11"
                fontWeight="700"
                fill="var(--color-text-secondary)"
              >
                {THRESHOLDS[i]}
              </text>
              <text
                x={cx}
                y={y - LABEL_ABOVE}
                textAnchor="middle"
                dominantBaseline="auto"
                fontSize="11"
                fontWeight="700"
                fill="var(--color-text-secondary)"
              >
                {z.max}
              </text>
              <text
                x={cx}
                y={cy}
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

        {/* Flèche 0 → 250 (250 invisible, une ligne au-dessus de 200) */}
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
    </div>
  );
}

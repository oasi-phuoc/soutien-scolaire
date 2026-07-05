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
const VIEW_PAD_L = 8;
const ARROW_SHIFT = 2 * STEP_W;
const STEP_ORIGIN = VIEW_PAD_L + ARROW_SHIFT;
const SCORE_MAX = 200;
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

/** Flèche le long du bas de l'escalier — ne traverse pas les libellés. */
function arrowGeometry() {
  const start = {
    x: STEP_ORIGIN - ARROW_SHIFT + 8,
    y: BASE_Y - 6,
  };
  const cap = treadAt(ZONE_COUNT - 1);
  const end = {
    x: cap.x + STEP_W - 8,
    y: cap.y + STEP_H * 0.72,
  };
  return { start, end };
}

function arrowPointAt(score: number) {
  const { start, end } = arrowGeometry();
  const t = Math.min(SCORE_MAX, Math.max(0, score)) / SCORE_MAX;
  return {
    x: start.x + t * (end.x - start.x),
    y: start.y + t * (end.y - start.y),
  };
}

function chartViewBox() {
  let minX = STEP_ORIGIN - ARROW_SHIFT;
  let maxX = STEP_ORIGIN + ZONE_COUNT * STEP_W;
  let minY = VIEW_TOP;

  for (let i = 0; i < ZONE_COUNT; i += 1) {
    const tread = treadAt(i);
    minX = Math.min(minX, tread.x, thresholdColCenter(i) - STEP_W / 2);
    maxX = Math.max(maxX, tread.x + STEP_W);
    minY = Math.min(minY, tread.y - LABEL_ABOVE - 10);
  }

  const padX = 8;
  const maxY = BASE_Y + 16;
  return {
    minX: minX - padX,
    minY,
    width: maxX - minX + padX * 2,
    height: maxY - minY,
  };
}

export function PlacementUnifiedChart({ total }: { total: number }) {
  const marker = arrowPointAt(total);
  const { start, end } = arrowGeometry();
  const view = chartViewBox();

  return (
    <div className="flex w-full justify-center">
      <svg
        viewBox={`${view.minX} ${view.minY} ${view.width} ${view.height}`}
        className="block h-auto w-full max-w-full overflow-hidden"
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

        {/* Flèche derrière les marches */}
        <line
          x1={start.x}
          y1={start.y}
          x2={end.x}
          y2={end.y}
          stroke={PLACEMENT_LINE_STROKE}
          strokeWidth={3}
          strokeLinecap="round"
          markerEnd="url(#placement-arrow-head)"
        />

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

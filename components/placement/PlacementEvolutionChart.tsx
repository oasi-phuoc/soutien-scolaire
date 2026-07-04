"use client";

import type { PlacementFrenchSession, PlacementMathAttempt } from "@/lib/placement/types";

const ACCENT = "var(--color-accent-quiz)";
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
  barColor,
  lineColor,
  items,
}: {
  label: string;
  barColor: string;
  lineColor: string;
  items: Array<{ points: number } | null>;
}) {
  const leftPad = 34;
  const rightPad = 12;
  const chartTop = 12;
  const chartH = 130;
  const chartBottom = chartTop + chartH;
  const chartW = 268;
  const svgW = leftPad + chartW + rightPad;
  const svgH = chartBottom + 16;
  const maxPts = 100;
  const slotW = chartW / SLOTS;
  const barW = Math.min(40, slotW * 0.55);

  const toY = (pts: number) => chartTop + chartH - (Math.min(pts, maxPts) / maxPts) * chartH;
  const slotCenterX = (i: number) => leftPad + i * slotW + slotW / 2;

  const linePoints = items
    .map((item, i) => (item ? { x: slotCenterX(i), y: toY(item.points) } : null))
    .filter((p): p is { x: number; y: number } => p !== null);

  const linePath = linePoints.length >= 2
    ? linePoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")
    : "";

  return (
    <div className="w-full">
      <p
        className="mb-3 text-xs font-bold uppercase tracking-wide"
        style={{ color: ACCENT }}
      >
        {label}
      </p>
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        className="block w-full overflow-visible"
        style={{ aspectRatio: `${svgW} / ${svgH}` }}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {Y_TICKS.map((tick) => {
          const y = toY(tick);
          return (
            <g key={tick}>
              <line
                x1={leftPad}
                y1={y}
                x2={leftPad + chartW}
                y2={y}
                stroke="var(--color-border-default)"
                strokeOpacity={tick === 0 ? 1 : 0.35}
              />
              <text
                x={leftPad - 8}
                y={y + 4}
                textAnchor="end"
                fontSize="11"
                fontWeight="600"
                fill="var(--color-text-secondary)"
              >
                {tick}
              </text>
            </g>
          );
        })}

        {items.map((item, i) => {
          const cx = slotCenterX(i);
          const x = cx - barW / 2;
          if (!item) {
            return (
              <rect
                key={i}
                x={x}
                y={chartTop}
                width={barW}
                height={chartH}
                rx={3}
                fill="none"
                stroke="var(--color-border-default)"
                strokeDasharray="4,4"
                opacity={0.45}
              />
            );
          }
          const barY = toY(item.points);
          const barHeight = chartBottom - barY;
          const label = formatHalf(item.points);
          return (
            <g key={i}>
              <rect
                x={x}
                y={barY}
                width={barW}
                height={barHeight}
                rx={3}
                fill={barColor}
                opacity={0.92}
              />
              <text
                x={cx}
                y={barY - 6}
                textAnchor="middle"
                fontSize="11"
                fontWeight="700"
                fill="var(--color-text-primary)"
              >
                {label}
              </text>
            </g>
          );
        })}

        {linePath && (
          <path
            d={linePath}
            fill="none"
            stroke={lineColor}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.95}
          />
        )}
        {linePoints.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={4}
            fill="white"
            stroke={lineColor}
            strokeWidth={2}
          />
        ))}

        <line
          x1={leftPad}
          y1={chartBottom}
          x2={leftPad + chartW}
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
}: {
  mathAttempts: PlacementMathAttempt[];
  frenchSessions: PlacementFrenchSession[];
  mathCounted?: number;
  frenchCounted?: number;
}) {
  const mathItems = lastSlots(mathAttempts).map((a) => (a ? { points: a.points } : null));
  const frenchItems = lastSlots(frenchSessions).map((s) => (s ? { points: s.countedTotal } : null));

  return (
    <div className="space-y-6">
      <SubjectEvolutionPanel
        label="Mathématiques"
        barColor={MATH_COLOR}
        lineColor={MATH_COLOR}
        items={mathItems}
      />
      <SubjectEvolutionPanel
        label="Français"
        barColor={FRENCH_COLOR}
        lineColor={MATH_COLOR}
        items={frenchItems}
      />
    </div>
  );
}

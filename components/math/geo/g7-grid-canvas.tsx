"use client";

import type { GridPoint, GridSegment, G7SymAxis } from "@/lib/curriculum/content/math/g7-reproduce-data";

export const G7_CELL = 24;
export const G7_MARGIN = 20;

export function snapGridPoint(
  px: number,
  py: number,
  width: number,
  height: number,
  cell: number = G7_CELL,
  margin: number = G7_MARGIN,
): GridPoint | null {
  let best: GridPoint | null = null;
  let bestD = Math.max(10, cell * 0.55);
  for (let x = 0; x <= width; x++) {
    for (let y = 0; y <= height; y++) {
      const cx = margin + x * cell;
      const cy = margin + y * cell;
      const d = Math.hypot(px - cx, py - cy);
      if (d < bestD) {
        bestD = d;
        best = { x, y };
      }
    }
  }
  return best;
}

function parseSeg(key: string): GridSegment {
  const [a, b] = key.split("|");
  const [x1, y1] = a!.split(",").map(Number);
  const [x2, y2] = b!.split(",").map(Number);
  return { x1: x1!, y1: y1!, x2: x2!, y2: y2! };
}

export function G7GridCanvas({
  width,
  height,
  cellSize = G7_CELL,
  dots = new Set<string>(),
  segments = new Set<string>(),
  lockedSegments = new Set<string>(),
  lockedDots = new Set<string>(),
  interactive,
  pending,
  wrongDots,
  wrongSegments,
  expectedDots,
  expectedSegments,
  validated,
  axis,
  axisColor = "#dc2626",
  /** Flèche de translation (vecteur) en couleur thème. */
  arrow,
  arrowColor = "#2563eb",
  onPointClick,
  maxWidthClass = "max-w-[320px]",
}: {
  width: number;
  height: number;
  cellSize?: number;
  dots?: Set<string>;
  segments?: Set<string>;
  lockedSegments?: Set<string>;
  lockedDots?: Set<string>;
  interactive?: boolean;
  pending?: GridPoint | null;
  wrongDots?: Set<string>;
  wrongSegments?: Set<string>;
  expectedDots?: Set<string>;
  expectedSegments?: Set<string>;
  validated?: boolean;
  axis?: G7SymAxis;
  axisColor?: string;
  arrow?: { x1: number; y1: number; x2: number; y2: number } | null;
  arrowColor?: string;
  onPointClick?: (p: GridPoint) => void;
  maxWidthClass?: string;
}) {
  const cell = cellSize;
  const margin = G7_MARGIN;
  const w = margin * 2 + width * cell;
  const h = margin * 2 + height * cell;
  const pt = (p: GridPoint) => ({ cx: margin + p.x * cell, cy: margin + p.y * cell });
  const dotR = cell >= 22 ? 4 : 3;

  const renderSeg = (key: string, stroke: string, dash?: string) => {
    const s = parseSeg(key);
    return (
      <line
        key={key}
        x1={margin + s.x1 * cell}
        y1={margin + s.y1 * cell}
        x2={margin + s.x2 * cell}
        y2={margin + s.y2 * cell}
        stroke={stroke}
        strokeWidth={2}
        strokeDasharray={dash}
        strokeLinecap="round"
      />
    );
  };

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={`mx-auto w-full ${maxWidthClass}`}
      onClick={(e) => {
        if (!interactive || !onPointClick) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const scaleX = w / rect.width;
        const scaleY = h / rect.height;
        const p = snapGridPoint(
          (e.clientX - rect.left) * scaleX,
          (e.clientY - rect.top) * scaleY,
          width,
          height,
          cell,
          margin,
        );
        if (p) onPointClick(p);
      }}
    >
      {Array.from({ length: width + 1 }, (_, i) => (
        <line
          key={`vx-${i}`}
          x1={margin + i * cell}
          y1={margin}
          x2={margin + i * cell}
          y2={margin + height * cell}
          stroke="#e2e8f0"
          strokeWidth={1}
        />
      ))}
      {Array.from({ length: height + 1 }, (_, i) => (
        <line
          key={`hy-${i}`}
          x1={margin}
          y1={margin + i * cell}
          x2={margin + width * cell}
          y2={margin + i * cell}
          stroke="#e2e8f0"
          strokeWidth={1}
        />
      ))}

      {axis?.kind === "vertical" && (
        <line
          x1={margin + axis.x * cell}
          y1={margin}
          x2={margin + axis.x * cell}
          y2={margin + height * cell}
          stroke={axisColor}
          strokeWidth={3}
        />
      )}
      {axis?.kind === "horizontal" && (
        <line
          x1={margin}
          y1={margin + axis.y * cell}
          x2={margin + width * cell}
          y2={margin + axis.y * cell}
          stroke={axisColor}
          strokeWidth={3}
        />
      )}
      {(axis?.kind === "diag_main" || axis?.kind === "diag_anti") && (() => {
        const pts: { x: number; y: number }[] = [];
        for (let x = 0; x <= width; x++) {
          const y = axis.kind === "diag_main" ? x + axis.c : axis.c - x;
          if (y >= 0 && y <= height) pts.push({ x, y });
        }
        if (pts.length < 2) return null;
        const a = pts[0]!;
        const b = pts[pts.length - 1]!;
        return (
          <line
            x1={margin + a.x * cell}
            y1={margin + a.y * cell}
            x2={margin + b.x * cell}
            y2={margin + b.y * cell}
            stroke={axisColor}
            strokeWidth={3}
          />
        );
      })()}

      {arrow && (() => {
        const x1 = margin + arrow.x1 * cell;
        const y1 = margin + arrow.y1 * cell;
        const x2 = margin + arrow.x2 * cell;
        const y2 = margin + arrow.y2 * cell;
        const ang = Math.atan2(y2 - y1, x2 - x1);
        const head = Math.max(8, cell * 0.45);
        const p1x = x2 - head * Math.cos(ang - Math.PI / 7);
        const p1y = y2 - head * Math.sin(ang - Math.PI / 7);
        const p2x = x2 - head * Math.cos(ang + Math.PI / 7);
        const p2y = y2 - head * Math.sin(ang + Math.PI / 7);
        return (
          <g>
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={arrowColor}
              strokeWidth={3}
              strokeLinecap="round"
            />
            <polygon
              points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`}
              fill={arrowColor}
            />
          </g>
        );
      })()}

      {[...lockedSegments].map((key) => renderSeg(`lock-s-${key}`, "#64748b"))}
      {[...segments].map((key) => {
        if (lockedSegments.has(key)) return null;
        return renderSeg(`s-${key}`, wrongSegments?.has(key) ? "#d97706" : "#1e293b");
      })}
      {validated && expectedSegments && [...expectedSegments]
        .filter((k) => !segments.has(k) && !lockedSegments.has(k))
        .map((key) => renderSeg(`exp-s-${key}`, "#d97706", "4 3"))}

      {[...lockedDots].map((key) => {
        const [x, y] = key.split(",").map(Number);
        return <circle key={`lock-d-${key}`} cx={margin + x! * cell} cy={margin + y! * cell} r={dotR} fill="#64748b" />;
      })}
      {[...dots].map((key) => {
        if (lockedDots.has(key)) return null;
        const [x, y] = key.split(",").map(Number);
        return (
          <circle
            key={`d-${key}`}
            cx={margin + x! * cell}
            cy={margin + y! * cell}
            r={dotR}
            fill={wrongDots?.has(key) ? "#d97706" : "#1e293b"}
          />
        );
      })}
      {validated && expectedDots && [...expectedDots]
        .filter((k) => !dots.has(k) && !lockedDots.has(k))
        .map((key) => {
          const [x, y] = key.split(",").map(Number);
          return <circle key={`exp-d-${key}`} cx={margin + x! * cell} cy={margin + y! * cell} r={dotR} fill="#d97706" />;
        })}

      {pending && <circle {...pt(pending)} r={6} fill="none" stroke="var(--color-accent-alg)" strokeWidth={2} />}
      {interactive && <rect x={0} y={0} width={w} height={h} fill="transparent" className="cursor-crosshair" />}
    </svg>
  );
}

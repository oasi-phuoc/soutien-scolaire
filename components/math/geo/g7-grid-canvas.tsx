"use client";

import type { GridPoint, GridSegment, G7SymAxis } from "@/lib/curriculum/content/math/g7-reproduce-data";

export const G7_CELL = 24;
export const G7_MARGIN = 20;

export function snapGridPoint(px: number, py: number, width: number, height: number): GridPoint | null {
  let best: GridPoint | null = null;
  let bestD = 14;
  for (let x = 0; x <= width; x++) {
    for (let y = 0; y <= height; y++) {
      const cx = G7_MARGIN + x * G7_CELL;
      const cy = G7_MARGIN + y * G7_CELL;
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
  onPointClick,
  maxWidthClass = "max-w-[320px]",
}: {
  width: number;
  height: number;
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
  onPointClick?: (p: GridPoint) => void;
  maxWidthClass?: string;
}) {
  const w = G7_MARGIN * 2 + width * G7_CELL;
  const h = G7_MARGIN * 2 + height * G7_CELL;
  const pt = (p: GridPoint) => ({ cx: G7_MARGIN + p.x * G7_CELL, cy: G7_MARGIN + p.y * G7_CELL });

  const renderSeg = (key: string, stroke: string, dash?: string) => {
    const s = parseSeg(key);
    return (
      <line
        key={key}
        x1={G7_MARGIN + s.x1 * G7_CELL}
        y1={G7_MARGIN + s.y1 * G7_CELL}
        x2={G7_MARGIN + s.x2 * G7_CELL}
        y2={G7_MARGIN + s.y2 * G7_CELL}
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
        const p = snapGridPoint((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY, width, height);
        if (p) onPointClick(p);
      }}
    >
      {Array.from({ length: width + 1 }, (_, i) => (
        <line
          key={`vx-${i}`}
          x1={G7_MARGIN + i * G7_CELL}
          y1={G7_MARGIN}
          x2={G7_MARGIN + i * G7_CELL}
          y2={G7_MARGIN + height * G7_CELL}
          stroke="#e2e8f0"
          strokeWidth={1}
        />
      ))}
      {Array.from({ length: height + 1 }, (_, i) => (
        <line
          key={`hy-${i}`}
          x1={G7_MARGIN}
          y1={G7_MARGIN + i * G7_CELL}
          x2={G7_MARGIN + width * G7_CELL}
          y2={G7_MARGIN + i * G7_CELL}
          stroke="#e2e8f0"
          strokeWidth={1}
        />
      ))}

      {axis?.kind === "vertical" && (
        <line
          x1={G7_MARGIN + axis.x * G7_CELL}
          y1={G7_MARGIN}
          x2={G7_MARGIN + axis.x * G7_CELL}
          y2={G7_MARGIN + height * G7_CELL}
          stroke={axisColor}
          strokeWidth={3}
        />
      )}
      {axis?.kind === "horizontal" && (
        <line
          x1={G7_MARGIN}
          y1={G7_MARGIN + axis.y * G7_CELL}
          x2={G7_MARGIN + width * G7_CELL}
          y2={G7_MARGIN + axis.y * G7_CELL}
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
            x1={G7_MARGIN + a.x * G7_CELL}
            y1={G7_MARGIN + a.y * G7_CELL}
            x2={G7_MARGIN + b.x * G7_CELL}
            y2={G7_MARGIN + b.y * G7_CELL}
            stroke={axisColor}
            strokeWidth={3}
          />
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
        return <circle key={`lock-d-${key}`} cx={G7_MARGIN + x! * G7_CELL} cy={G7_MARGIN + y! * G7_CELL} r={4} fill="#64748b" />;
      })}
      {[...dots].map((key) => {
        if (lockedDots.has(key)) return null;
        const [x, y] = key.split(",").map(Number);
        return (
          <circle
            key={`d-${key}`}
            cx={G7_MARGIN + x! * G7_CELL}
            cy={G7_MARGIN + y! * G7_CELL}
            r={4}
            fill={wrongDots?.has(key) ? "#d97706" : "#1e293b"}
          />
        );
      })}
      {validated && expectedDots && [...expectedDots]
        .filter((k) => !dots.has(k) && !lockedDots.has(k))
        .map((key) => {
          const [x, y] = key.split(",").map(Number);
          return <circle key={`exp-d-${key}`} cx={G7_MARGIN + x! * G7_CELL} cy={G7_MARGIN + y! * G7_CELL} r={4} fill="#d97706" />;
        })}

      {pending && <circle {...pt(pending)} r={6} fill="none" stroke="var(--color-accent-alg)" strokeWidth={2} />}
      {interactive && <rect x={0} y={0} width={w} height={h} fill="transparent" className="cursor-crosshair" />}
    </svg>
  );
}

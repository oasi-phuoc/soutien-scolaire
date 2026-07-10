"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { GridPoint, G7SymAxis } from "@/lib/curriculum/content/math/g7-reproduce-data";
import {
  G7_AXES_GRID,
  axisFromPoints,
  axisKey,
  axisSpan,
  pickSymmetryAxesTask,
  symmetryAxesConsigne,
} from "@/lib/curriculum/content/math/g7-symmetry-data";

const ACCENT = "var(--color-accent-alg)";
const CELL = 28;
const MARGIN = 20;
const FILL = "#7dd3fc";
const STROKE = "#0284c8";

function snapPoint(px: number, py: number, size: number): GridPoint | null {
  let best: GridPoint | null = null;
  let bestD = 14;
  for (let x = 0; x <= size; x++) {
    for (let y = 0; y <= size; y++) {
      const cx = MARGIN + x * CELL;
      const cy = MARGIN + y * CELL;
      const d = Math.hypot(px - cx, py - cy);
      if (d < bestD) {
        bestD = d;
        best = { x, y };
      }
    }
  }
  return best;
}

function AxisLine({
  axis,
  color,
  dash,
}: {
  axis: G7SymAxis;
  color: string;
  dash?: string;
}) {
  const s = axisSpan(axis, G7_AXES_GRID);
  return (
    <line
      x1={MARGIN + s.x1 * CELL}
      y1={MARGIN + s.y1 * CELL}
      x2={MARGIN + s.x2 * CELL}
      y2={MARGIN + s.y2 * CELL}
      stroke={color}
      strokeWidth={3}
      strokeDasharray={dash}
      strokeLinecap="round"
    />
  );
}

export function G7SymmetryAxesExercise({
  exNum,
  validateCommand,
  onValidated,
  seed = 0,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (score: number, maxPoints: number) => void;
  seed?: number;
}) {
  const [task] = useState(() => pickSymmetryAxesTask(exNum * 883 + 11 + seed * 23));
  const expectedKeys = useMemo(() => new Set(task.axes.map(axisKey)), [task]);

  const [userAxes, setUserAxes] = useState<G7SymAxis[]>([]);
  const [pending, setPending] = useState<GridPoint | null>(null);
  const [validated, setValidated] = useState(false);
  const [wrongKeys, setWrongKeys] = useState<Set<string>>(new Set());
  const [invalidMsg, setInvalidMsg] = useState<string | null>(null);

  const userKeys = useMemo(() => new Set(userAxes.map(axisKey)), [userAxes]);

  const onPointClick = useCallback((p: GridPoint) => {
    if (validated) return;
    setInvalidMsg(null);
    if (!pending) {
      setPending(p);
      return;
    }
    if (pending.x === p.x && pending.y === p.y) {
      setPending(null);
      return;
    }
    const axis = axisFromPoints(pending, p);
    setPending(null);
    if (!axis) {
      setInvalidMsg("L'axe doit être horizontal, vertical ou en diagonale à 45°.");
      return;
    }
    const key = axisKey(axis);
    setUserAxes((prev) => {
      if (prev.some((a) => axisKey(a) === key)) {
        return prev.filter((a) => axisKey(a) !== key);
      }
      return [...prev, axis];
    });
  }, [pending, validated]);

  const doValidate = useCallback(() => {
    if (validated) return;
    const wrong = new Set<string>();
    let ok = true;
    for (const k of userKeys) {
      if (!expectedKeys.has(k)) {
        wrong.add(k);
        ok = false;
      }
    }
    for (const k of expectedKeys) {
      if (!userKeys.has(k)) ok = false;
    }
    setWrongKeys(wrong);
    setValidated(true);
    onValidated(ok ? 1 : 0, 1);
  }, [expectedKeys, onValidated, userKeys, validated]);

  useEffect(() => {
    if (validateCommand > 0) doValidate();
  }, [validateCommand, doValidate]);

  const size = G7_AXES_GRID;
  const w = MARGIN * 2 + size * CELL;
  const h = MARGIN * 2 + size * CELL;

  const missingAxes = validated
    ? task.axes.filter((a) => !userKeys.has(axisKey(a)))
    : [];

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold" style={{ color: ACCENT }}>Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">{symmetryAxesConsigne()}</p>
      <div className="rounded-lg border border-[var(--color-border-default)] bg-white p-3 dark:bg-[var(--color-bg-primary)]">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="mx-auto w-full max-w-[360px]"
          onClick={(e) => {
            if (validated) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const scaleX = w / rect.width;
            const scaleY = h / rect.height;
            const pt = snapPoint((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY, size);
            if (pt) onPointClick(pt);
          }}
        >
          {Array.from({ length: size + 1 }, (_, i) => (
            <g key={`g-${i}`}>
              <line
                x1={MARGIN + i * CELL}
                y1={MARGIN}
                x2={MARGIN + i * CELL}
                y2={MARGIN + size * CELL}
                stroke="#e2e8f0"
                strokeWidth={1}
              />
              <line
                x1={MARGIN}
                y1={MARGIN + i * CELL}
                x2={MARGIN + size * CELL}
                y2={MARGIN + i * CELL}
                stroke="#e2e8f0"
                strokeWidth={1}
              />
            </g>
          ))}

          {/* evenodd : polygones concentriques (cadre, anneau…) apparaissent creux */}
          <path
            d={task.polygons
              .map((poly) => {
                if (poly.length === 0) return "";
                const [first, ...rest] = poly;
                return `M ${MARGIN + first!.x * CELL} ${MARGIN + first!.y * CELL} ${rest
                  .map((pt) => `L ${MARGIN + pt.x * CELL} ${MARGIN + pt.y * CELL}`)
                  .join(" ")} Z`;
              })
              .join(" ")}
            fill={FILL}
            fillRule="evenodd"
            stroke={STROKE}
            strokeWidth={2}
            strokeLinejoin="round"
          />

          {userAxes.map((axis) => {
            const key = axisKey(axis);
            const wrong = validated && wrongKeys.has(key);
            return (
              <AxisLine
                key={`user-${key}`}
                axis={axis}
                color={wrong ? "#d97706" : "#dc2626"}
              />
            );
          })}

          {missingAxes.map((axis) => (
            <AxisLine
              key={`miss-${axisKey(axis)}`}
              axis={axis}
              color="#d97706"
              dash="5 4"
            />
          ))}

          {pending && (
            <circle
              cx={MARGIN + pending.x * CELL}
              cy={MARGIN + pending.y * CELL}
              r={6}
              fill="none"
              stroke={ACCENT}
              strokeWidth={2}
            />
          )}

          {!validated && (
            <rect x={0} y={0} width={w} height={h} fill="transparent" className="cursor-crosshair" />
          )}
        </svg>
      </div>
      {invalidMsg && (
        <p className="text-xs text-amber-600">{invalidMsg}</p>
      )}
      {!validated && (
        <p className="text-xs text-[var(--color-text-secondary)]">
          Astuce : un axe traverse toute la figure comme un miroir. Tracez tous les axes possibles.
        </p>
      )}
      {validated && expectedKeys.size === 0 && userKeys.size === 0 && (
        <p className="text-xs text-[var(--color-text-secondary)]">
          Cette figure n&apos;a aucun axe de symétrie — réponse correcte.
        </p>
      )}
    </div>
  );
}

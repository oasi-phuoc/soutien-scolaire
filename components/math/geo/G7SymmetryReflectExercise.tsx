"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { pointKey, segmentKey, type GridPoint } from "@/lib/curriculum/content/math/g7-reproduce-data";
import {
  expectedReflection,
  isDrawSide,
  pickSymmetryReflectTask,
  reflectConsigne,
  type SymmetryReflectTask,
} from "@/lib/curriculum/content/math/g7-symmetry-reflect-data";
import {
  expectedReflectionH,
  isDrawSideH,
  pickSymmetryReflectHTask,
  reflectHConsigne,
  type SymmetryReflectHTask,
} from "@/lib/curriculum/content/math/g7-symmetry-reflect-h-data";
import { G7GridCanvas } from "@/components/math/geo/g7-grid-canvas";

const ACCENT = "var(--color-accent-alg)";

type ReflectAxis = "vertical" | "horizontal";

export function G7SymmetryReflectExercise({
  exNum,
  validateCommand,
  onValidated,
  seed = 0,
  axis = "vertical",
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (score: number, maxPoints: number) => void;
  seed?: number;
  /** vertical = ex.2 (20×10) · horizontal = ex.3 (10×20) */
  axis?: ReflectAxis;
}) {
  const [task] = useState<SymmetryReflectTask | SymmetryReflectHTask>(() =>
    axis === "horizontal"
      ? pickSymmetryReflectHTask(exNum * 709 + 31 + seed * 37)
      : pickSymmetryReflectTask(exNum * 701 + 19 + seed * 29),
  );

  const lockedSegments = useMemo(
    () => new Set(task.sourceSegments.map(segmentKey)),
    [task],
  );
  const lockedDots = useMemo(
    () => new Set(task.sourceDots.map(pointKey)),
    [task],
  );
  const expected = useMemo(
    () => (axis === "horizontal"
      ? expectedReflectionH(task as SymmetryReflectHTask)
      : expectedReflection(task as SymmetryReflectTask)),
    [axis, task],
  );

  const [userSegments, setUserSegments] = useState<Set<string>>(() => new Set());
  const [userDots, setUserDots] = useState<Set<string>>(() => new Set());
  const [pending, setPending] = useState<GridPoint | null>(null);
  const [validated, setValidated] = useState(false);
  const [wrongSegments, setWrongSegments] = useState<Set<string>>(new Set());
  const [wrongDots, setWrongDots] = useState<Set<string>>(new Set());

  const canDraw = useCallback((p: GridPoint) => {
    return axis === "horizontal"
      ? isDrawSideH(p, task as SymmetryReflectHTask)
      : isDrawSide(p, task as SymmetryReflectTask);
  }, [axis, task]);

  const onPointClick = useCallback((p: GridPoint) => {
    if (validated) return;
    if (!canDraw(p)) {
      setPending(null);
      return;
    }
    const key = pointKey(p);
    if (!pending) {
      setPending(p);
      return;
    }
    if (!canDraw(pending)) {
      setPending(p);
      return;
    }
    if (pending.x === p.x && pending.y === p.y) {
      if (!lockedDots.has(key)) {
        setUserDots((prev) => {
          const next = new Set(prev);
          if (next.has(key)) next.delete(key);
          else next.add(key);
          return next;
        });
      }
      setPending(null);
      return;
    }
    const seg = segmentKey({ x1: pending.x, y1: pending.y, x2: p.x, y2: p.y });
    if (!lockedSegments.has(seg)) {
      setUserSegments((prev) => {
        const next = new Set(prev);
        if (next.has(seg)) next.delete(seg);
        else next.add(seg);
        return next;
      });
    }
    setPending(null);
  }, [canDraw, lockedDots, lockedSegments, pending, validated]);

  const doValidate = useCallback(() => {
    if (validated) return;
    let ok = true;
    const wS = new Set<string>();
    const wD = new Set<string>();
    for (const k of userSegments) {
      if (!expected.segments.has(k)) { wS.add(k); ok = false; }
    }
    for (const k of userDots) {
      if (!expected.dots.has(k)) { wD.add(k); ok = false; }
    }
    for (const k of expected.segments) {
      if (!userSegments.has(k)) ok = false;
    }
    for (const k of expected.dots) {
      if (!userDots.has(k)) ok = false;
    }
    setWrongSegments(wS);
    setWrongDots(wD);
    setValidated(true);
    onValidated(ok ? 1 : 0, 1);
  }, [expected, onValidated, userDots, userSegments, validated]);

  useEffect(() => {
    if (validateCommand > 0) doValidate();
  }, [validateCommand, doValidate]);

  const displaySegments = useMemo(
    () => new Set([...lockedSegments, ...userSegments]),
    [lockedSegments, userSegments],
  );
  const displayDots = useMemo(
    () => new Set([...lockedDots, ...userDots]),
    [lockedDots, userDots],
  );

  const consigne = axis === "horizontal"
    ? reflectHConsigne(task as SymmetryReflectHTask)
    : reflectConsigne(task as SymmetryReflectTask);

  const axisProp = axis === "horizontal"
    ? { kind: "horizontal" as const, y: (task as SymmetryReflectHTask).axisY }
    : { kind: "vertical" as const, x: (task as SymmetryReflectTask).axisX };

  // Grille 10×20 : cellules un peu plus petites pour tenir à l'écran
  const cellSize = axis === "horizontal" ? 20 : undefined;

  return (
    <div className="space-y-4">
      <h2 className="mb-2 text-base font-bold" style={{ color: ACCENT }}>Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">{consigne}</p>
      <div className="overflow-x-auto rounded-lg border border-[var(--color-border-default)] bg-white p-3">
        <G7GridCanvas
          width={task.width}
          height={task.height}
          cellSize={cellSize}
          segments={displaySegments}
          dots={displayDots}
          lockedSegments={lockedSegments}
          lockedDots={lockedDots}
          interactive={!validated}
          pending={pending}
          axis={axisProp}
          axisColor="#2563eb"
          wrongSegments={validated ? wrongSegments : undefined}
          wrongDots={validated ? wrongDots : undefined}
          expectedSegments={validated ? expected.segments : undefined}
          expectedDots={validated ? expected.dots : undefined}
          validated={validated}
          onPointClick={onPointClick}
          maxWidthClass="max-w-full"
        />
      </div>
      {!validated && (
        <p className="text-xs text-[var(--color-text-secondary)]">
          Tracez uniquement de l&apos;autre côté de l&apos;axe bleu. Chaque point a son symétrique à égale distance de l&apos;axe.
        </p>
      )}
    </div>
  );
}

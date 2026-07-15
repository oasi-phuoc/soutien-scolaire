"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { pointKey, segmentKey, type GridPoint } from "@/lib/curriculum/content/math/g7-reproduce-data";
import {
  centralConsigne,
  centralPoint,
  expectedCentral,
  isDrawSideCentral,
  pickCentralSymmetryTask,
  type CentralSymmetryTask,
} from "@/lib/curriculum/content/math/g7-central-symmetry-data";
import { G7GridCanvas } from "@/components/math/geo/g7-grid-canvas";

const ACCENT = "var(--color-accent-alg)";

export function G7CentralSymmetryExercise({
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
  const [task] = useState<CentralSymmetryTask>(() =>
    pickCentralSymmetryTask(exNum * 811 + 47 + seed * 41),
  );

  const exampleImage = useMemo(
    () => centralPoint(task.examplePoint, task.origin),
    [task],
  );

  const lockedSegments = useMemo(
    () => new Set(task.sourceSegments.map(segmentKey)),
    [task],
  );
  const lockedDots = useMemo(() => {
    const s = new Set(task.sourceDots.map(pointKey));
    s.add(pointKey(task.examplePoint));
    s.add(pointKey(exampleImage));
    return s;
  }, [exampleImage, task]);

  const expected = useMemo(() => expectedCentral(task), [task]);

  const [userSegments, setUserSegments] = useState<Set<string>>(() => new Set());
  const [userDots, setUserDots] = useState<Set<string>>(() => new Set());
  const [pending, setPending] = useState<GridPoint | null>(null);
  const [validated, setValidated] = useState(false);
  const [wrongSegments, setWrongSegments] = useState<Set<string>>(new Set());
  const [wrongDots, setWrongDots] = useState<Set<string>>(new Set());

  const canDraw = useCallback(
    (p: GridPoint) => isDrawSideCentral(p, task.origin),
    [task],
  );

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

  const guideLine = {
    x1: task.examplePoint.x,
    y1: task.examplePoint.y,
    x2: exampleImage.x,
    y2: exampleImage.y,
  };

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold" style={{ color: ACCENT }}>Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">{centralConsigne(task)}</p>
      <div className="overflow-x-auto rounded-lg border border-[var(--color-border-default)] bg-white p-3">
        <G7GridCanvas
          width={task.width}
          height={task.height}
          cellSize={18}
          segments={displaySegments}
          dots={displayDots}
          lockedSegments={lockedSegments}
          lockedDots={lockedDots}
          interactive={!validated}
          pending={pending}
          centerPoint={task.origin}
          centerColor="#2563eb"
          guideLine={guideLine}
          guideColor="#93c5fd"
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
          Le point bleu est le centre O. Chaque point M a son image M&apos; telle que O est le milieu de [MM&apos;]
          (rotation de 180°). Le trait en pointillés montre un exemple.
        </p>
      )}
    </div>
  );
}

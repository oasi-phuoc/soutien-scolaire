"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { pointKey, segmentKey, type GridPoint } from "@/lib/curriculum/content/math/g7-reproduce-data";
import {
  expectedReflection,
  isTargetSide,
  pickSymmetryTask,
  symmetryConsigne,
} from "@/lib/curriculum/content/math/g7-symmetry-data";
import { G7GridCanvas } from "@/components/math/geo/g7-grid-canvas";

const ACCENT = "var(--color-accent-alg)";

export function G7SymmetryReflectExercise({
  exNum,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (score: number, maxPoints: number) => void;
}) {
  const [task] = useState(() => pickSymmetryTask(exNum * 883 + 11));
  const lockedSegments = useMemo(() => {
    const s = new Set(task.sourceSegments.map(segmentKey));
    for (const h of task.hintSegments ?? []) s.add(segmentKey(h));
    return s;
  }, [task]);
  const hintSegmentKeys = useMemo(
    () => new Set((task.hintSegments ?? []).map(segmentKey)),
    [task],
  );
  const lockedDots = useMemo(() => {
    const d = new Set((task.sourceDots ?? []).map(pointKey));
    for (const p of task.hintDots ?? []) d.add(pointKey(p));
    return d;
  }, [task]);
  const expected = useMemo(() => expectedReflection(task), [task]);

  const [userSegments, setUserSegments] = useState<Set<string>>(() => new Set());
  const [userDots, setUserDots] = useState<Set<string>>(() => new Set());
  const [pending, setPending] = useState<GridPoint | null>(null);
  const [validated, setValidated] = useState(false);
  const [wrongSegments, setWrongSegments] = useState<Set<string>>(new Set());
  const [wrongDots, setWrongDots] = useState<Set<string>>(new Set());

  const onPointClick = useCallback((p: GridPoint) => {
    if (validated) return;
    if (!isTargetSide(p, task.axis)) {
      setPending(null);
      return;
    }
    const key = pointKey(p);
    if (!pending) {
      setPending(p);
      return;
    }
    if (!isTargetSide(pending, task.axis)) {
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
  }, [pending, task.axis, validated, lockedDots, lockedSegments]);

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
      if (!hintSegmentKeys.has(k) && !userSegments.has(k)) ok = false;
    }
    for (const k of expected.dots) {
      if (!userDots.has(k)) ok = false;
    }
    setWrongSegments(wS);
    setWrongDots(wD);
    setValidated(true);
    onValidated(ok ? 1 : 0, 1);
  }, [expected, hintSegmentKeys, onValidated, userDots, userSegments, validated]);

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

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold" style={{ color: ACCENT }}>Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">{symmetryConsigne(task)}</p>
      <p className="text-xs font-semibold text-[var(--color-text-primary)]">{task.label}</p>
      <div className="rounded-lg border border-[var(--color-border-default)] bg-white p-3 dark:bg-[var(--color-bg-primary)]">
        <G7GridCanvas
          width={task.width}
          height={task.height}
          segments={displaySegments}
          dots={displayDots}
          lockedSegments={lockedSegments}
          lockedDots={lockedDots}
          interactive={!validated}
          pending={pending}
          axis={task.axis}
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
          Tracez uniquement du côté opposé à la figure modèle (traits gris). Les traits rouges indiquent l&apos;axe de symétrie.
        </p>
      )}
    </div>
  );
}

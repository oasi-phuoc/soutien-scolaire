"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { pointKey, segmentKey, type GridPoint } from "@/lib/curriculum/content/math/g7-reproduce-data";
import {
  expectedTranslation,
  pickTranslationTask,
  translationConsigne,
  type TranslationTask,
} from "@/lib/curriculum/content/math/g7-translation-data";
import { G7GridCanvas } from "@/components/math/geo/g7-grid-canvas";

const ACCENT = "var(--color-accent-alg)";
const ARROW_BLUE = "#2563eb";

export function G7TranslationExercise({
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
  const [task] = useState<TranslationTask>(() =>
    pickTranslationTask(exNum * 823 + 53 + seed * 43),
  );

  const lockedSegments = useMemo(
    () => new Set(task.sourceSegments.map(segmentKey)),
    [task],
  );
  const lockedDots = useMemo(
    () => new Set(task.sourceDots.map(pointKey)),
    [task],
  );
  const expected = useMemo(() => expectedTranslation(task), [task]);

  const [userSegments, setUserSegments] = useState<Set<string>>(() => new Set());
  const [userDots, setUserDots] = useState<Set<string>>(() => new Set());
  const [pending, setPending] = useState<GridPoint | null>(null);
  const [validated, setValidated] = useState(false);
  const [wrongSegments, setWrongSegments] = useState<Set<string>>(new Set());
  const [wrongDots, setWrongDots] = useState<Set<string>>(new Set());

  const onPointClick = useCallback((p: GridPoint) => {
    if (validated) return;
    const key = pointKey(p);
    if (!pending) {
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
  }, [lockedDots, lockedSegments, pending, validated]);

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

  const arrow = {
    x1: task.arrowFrom.x,
    y1: task.arrowFrom.y,
    x2: task.arrowFrom.x + task.vector.dx,
    y2: task.arrowFrom.y + task.vector.dy,
  };

  return (
    <div className="space-y-4">
      <h2 className="mb-2 text-base font-bold" style={{ color: ACCENT }}>Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">{translationConsigne(task)}</p>
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
          arrow={arrow}
          arrowColor={ARROW_BLUE}
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
          Chaque point M(x ; y) a pour image M&apos;(x + a ; y + b), où (a ; b) est le vecteur indiqué par la flèche bleue.
        </p>
      )}
    </div>
  );
}

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  cellKey,
  expectedFriezeCompletion,
  friezeConsigne,
  pickFriezeTask,
} from "@/lib/curriculum/content/math/g7-frieze-data";

const ACCENT = "var(--color-accent-alg)";
const CELL = 28;

export function G7FriezeExercise({
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
  const [task] = useState(() => pickFriezeTask(exNum * 991 + 7 + seed * 19));
  const { locked, expected, toComplete } = useMemo(() => expectedFriezeCompletion(task), [task]);

  const [userCells, setUserCells] = useState<Set<string>>(() => new Set());
  const [validated, setValidated] = useState(false);
  const [wrongCells, setWrongCells] = useState<Set<string>>(new Set());

  const toggleCell = useCallback((c: number, r: number) => {
    if (validated) return;
    const key = cellKey({ c, r });
    if (locked.has(key)) return;
    setUserCells((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, [locked, validated]);

  const doValidate = useCallback(() => {
    if (validated) return;
    let ok = true;
    const wrong = new Set<string>();
    for (const k of userCells) {
      if (!expected.has(k)) {
        wrong.add(k);
        ok = false;
      }
    }
    for (const k of toComplete) {
      if (!userCells.has(k)) ok = false;
    }
    setWrongCells(wrong);
    setValidated(true);
    onValidated(ok ? 1 : 0, 1);
  }, [expected, onValidated, toComplete, userCells, validated]);

  useEffect(() => {
    if (validateCommand > 0) doValidate();
  }, [validateCommand, doValidate]);

  const w = task.cols * CELL + 2;
  const h = task.rows * CELL + 2;

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold" style={{ color: ACCENT }}>Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">{friezeConsigne()}</p>
      <div className="overflow-x-auto rounded-lg border border-[var(--color-border-default)] bg-white p-3 dark:bg-[var(--color-bg-primary)]">
        <svg viewBox={`0 0 ${w} ${h}`} className="mx-auto w-full max-w-full" style={{ minWidth: Math.min(w, 480) }}>
          {Array.from({ length: task.rows }, (_, r) =>
            Array.from({ length: task.cols }, (_, c) => {
              const key = cellKey({ c, r });
              const isLocked = locked.has(key);
              const isUser = userCells.has(key);
              const isMissing = validated && toComplete.has(key) && !userCells.has(key);
              const isWrong = validated && wrongCells.has(key);
              let fill = "transparent";
              if (isLocked) fill = "#94a3b8";
              else if (isWrong) fill = "#f59e0b";
              else if (isMissing) fill = "#fcd34d";
              else if (isUser) fill = "#1e293b";
              return (
                <rect
                  key={key}
                  x={1 + c * CELL}
                  y={1 + r * CELL}
                  width={CELL}
                  height={CELL}
                  fill={fill}
                  stroke="#cbd5e1"
                  strokeWidth={1}
                  className={validated || isLocked ? undefined : "cursor-pointer"}
                  onClick={() => toggleCell(c, r)}
                />
              );
            }),
          )}
        </svg>
      </div>
      {!validated && (
        <p className="text-xs text-[var(--color-text-secondary)]">
          Astuce : observez le motif qui se répète, puis coloriez les cases suivantes de la même façon.
        </p>
      )}
    </div>
  );
}

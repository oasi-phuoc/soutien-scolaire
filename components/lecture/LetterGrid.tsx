"use client";

import { forwardRef, useCallback, useImperativeHandle, useState } from "react";

export interface LetterGridHandle {
  reset: () => void;
  validate: () => void;
}

interface Props {
  target: string;
  isUppercase: boolean;
  cols?: 4 | 5;
}

type CellState = "idle" | "selected" | "correct" | "wrong" | "missed";

const GRID_SIZE = 25;

function makeGrid(target: string, isUppercase: boolean): string[] {
  const alpha = isUppercase
    ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    : "abcdefghijklmnopqrstuvwxyz";
  const distractors = alpha.split("").filter((c) => c !== target);
  const targetCount = 4 + Math.floor(Math.random() * 4); // 4–7
  const cells: string[] = [
    ...Array(targetCount).fill(target),
    ...Array.from({ length: GRID_SIZE - targetCount }, () =>
      distractors[Math.floor(Math.random() * distractors.length)],
    ),
  ];
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cells[i], cells[j]] = [cells[j]!, cells[i]!];
  }
  return cells;
}

export const LetterGrid = forwardRef<LetterGridHandle, Props>(
  function LetterGrid({ target, isUppercase, cols = 5 }, ref) {
    const [grid, setGrid] = useState(() => makeGrid(target, isUppercase));
    const [states, setStates] = useState<CellState[]>(() => Array(GRID_SIZE).fill("idle"));
    const [validated, setValidated] = useState(false);

    const reset = useCallback(() => {
      setGrid(makeGrid(target, isUppercase));
      setStates(Array(GRID_SIZE).fill("idle"));
      setValidated(false);
    }, [target, isUppercase]);

    const validate = useCallback(() => {
      if (validated) return;
      setValidated(true);
      setStates((prev) =>
        prev.map((s, i) => {
          const isTarget = grid[i] === target;
          if (s === "selected") return isTarget ? "correct" : "wrong";
          if (isTarget) return "missed";
          return "idle";
        }),
      );
    }, [validated, grid, target]);

    useImperativeHandle(ref, () => ({ reset, validate }), [reset, validate]);

    function tap(i: number) {
      if (validated) return;
      setStates((prev) => {
        const next = [...prev];
        next[i] = prev[i] === "selected" ? "idle" : "selected";
        return next;
      });
    }

    return (
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Reconnaître la lettre</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Touchez chaque{" "}
          <strong className="text-[var(--color-accent-lecture)]">
            {isUppercase ? target.toUpperCase() : target.toLowerCase()}
          </strong>
        </p>
        <div className={`grid gap-2 ${cols === 5 ? "grid-cols-5" : "grid-cols-4"}`}>
          {grid.map((letter, i) => {
            const s = states[i];
            return (
              <button
                key={i}
                type="button"
                onClick={() => tap(i)}
                disabled={validated}
                className={`flex aspect-square items-center justify-center rounded-[var(--radius-lg)] border text-lg font-bold transition-colors ${
                  s === "correct"
                    ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10 text-[var(--color-accent-lecture)]"
                    : s === "wrong" || s === "missed"
                      ? "border-red-400 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                      : s === "selected"
                        ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10 text-[var(--color-accent-lecture)]"
                        : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] active:scale-95"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </section>
    );
  },
);

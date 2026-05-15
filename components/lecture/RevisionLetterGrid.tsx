"use client";

import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { lectureUi } from "@/lib/i18n/lecture-ui";

export interface RevisionLetterGridHandle {
  reset: () => void;
  validate: () => void;
}

interface Props {
  letterA: string;
  letterB: string;
  isUppercase: boolean;
}

type CellState = "idle" | "selected" | "correct" | "wrong" | "missed";

const GRID_SIZE = 25;

function makeGrid(letterA: string, letterB: string, isUppercase: boolean): string[] {
  const a = isUppercase ? letterA : letterA.toLowerCase();
  const b = isUppercase ? letterB : letterB.toLowerCase();
  const alpha = isUppercase
    ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    : "abcdefghijklmnopqrstuvwxyz";
  const distractors = alpha.split("").filter((c) => c !== a && c !== b);
  const totalTargets = 6 + Math.floor(Math.random() * 3);
  const countA = Math.ceil(totalTargets / 2);
  const countB = totalTargets - countA;
  const cells: string[] = [
    ...Array(countA).fill(a),
    ...Array(countB).fill(b),
    ...Array.from({ length: GRID_SIZE - totalTargets }, () =>
      distractors[Math.floor(Math.random() * distractors.length)],
    ),
  ];
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cells[i], cells[j]] = [cells[j]!, cells[i]!];
  }
  return cells;
}

export const RevisionLetterGrid = forwardRef<RevisionLetterGridHandle, Props>(
  function RevisionLetterGrid({ letterA, letterB, isUppercase }, ref) {
    const lang = usePivotLang();
    const { showPivot } = useTranslation();
    const a = isUppercase ? letterA : letterA.toLowerCase();
    const b = isUppercase ? letterB : letterB.toLowerCase();

    const [grid, setGrid] = useState(() => makeGrid(letterA, letterB, isUppercase));
    const [states, setStates] = useState<CellState[]>(() => Array(GRID_SIZE).fill("idle"));
    const [validated, setValidated] = useState(false);

    const reset = useCallback(() => {
      setGrid(makeGrid(letterA, letterB, isUppercase));
      setStates(Array(GRID_SIZE).fill("idle"));
      setValidated(false);
    }, [letterA, letterB, isUppercase]);

    const validate = useCallback(() => {
      if (validated) return;
      const ta = isUppercase ? letterA : letterA.toLowerCase();
      const tb = isUppercase ? letterB : letterB.toLowerCase();
      const targets = new Set([ta, tb]);
      setValidated(true);
      setStates((prev) =>
        prev.map((s, i) => {
          const isTarget = targets.has(grid[i]!);
          if (s === "selected") return isTarget ? "correct" : "wrong";
          if (isTarget) return "missed";
          return "idle";
        }),
      );
    }, [validated, grid, letterA, letterB, isUppercase]);

    useImperativeHandle(ref, () => ({ reset, validate }), [reset, validate]);

    function tap(i: number) {
      if (validated) return;
      setStates((prev) => {
        const next = [...prev] as CellState[];
        next[i] = prev[i] === "selected" ? "idle" : "selected";
        return next;
      });
    }

    return (
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Reconnaître les lettres</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Touchez toutes les{" "}
          <strong className="text-[var(--color-accent-lecture)]">{a}</strong>
          {" "}et toutes les{" "}
          <strong className="text-[var(--color-accent-lecture)]">{b}</strong>
        </p>
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {lectureUi(lang, "tapAllAandB", { a, b })}
          </p>
        )}
        <div className="grid grid-cols-5 gap-2">
          {grid.map((letter, i) => {
            const s = states[i];
            return (
              <button
                key={i}
                type="button"
                onClick={() => tap(i)}
                disabled={validated}
                className={`flex aspect-square items-center justify-center rounded-[var(--radius-lg)] border text-4xl font-bold transition-colors ${
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

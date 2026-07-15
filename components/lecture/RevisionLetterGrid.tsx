"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
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
  /** Éval : majuscules et minuscules mélangées (50/50 aléatoire). */
  mixedCase?: boolean;
  onValidated?: (score: number, max: number) => void;
  shouldValidate?: boolean;
}

type CellState = "idle" | "selected" | "correct" | "wrong" | "missed";

const GRID_SIZE = 25;

function randomCase(letter: string): string {
  return Math.random() < 0.5 ? letter : letter.toLowerCase();
}

function makeGrid(letterA: string, letterB: string, isUppercase: boolean, mixedCase = false): string[] {
  const a = mixedCase ? randomCase(letterA) : isUppercase ? letterA : letterA.toLowerCase();
  const b = mixedCase ? randomCase(letterB) : isUppercase ? letterB : letterB.toLowerCase();
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const distractors = mixedCase
    ? alpha.split("").flatMap((c) => {
        if (c === letterA || c === letterB) return [];
        return [c, c.toLowerCase()];
      })
    : (isUppercase ? alpha : alpha.toLowerCase()).split("").filter((c) => c !== a && c !== b);
  const totalTargets = 6 + Math.floor(Math.random() * 3);
  const countA = Math.ceil(totalTargets / 2);
  const countB = totalTargets - countA;
  const cells: string[] = [
    ...Array.from({ length: countA }, () => (mixedCase ? randomCase(letterA) : a)),
    ...Array.from({ length: countB }, () => (mixedCase ? randomCase(letterB) : b)),
    ...Array.from({ length: GRID_SIZE - totalTargets }, () =>
      distractors[Math.floor(Math.random() * distractors.length)]!,
    ),
  ];
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cells[i], cells[j]] = [cells[j]!, cells[i]!];
  }
  return cells;
}

function targetSet(letterA: string, letterB: string, isUppercase: boolean, mixedCase: boolean): Set<string> {
  if (mixedCase) {
    return new Set([letterA, letterA.toLowerCase(), letterB, letterB.toLowerCase()]);
  }
  const a = isUppercase ? letterA : letterA.toLowerCase();
  const b = isUppercase ? letterB : letterB.toLowerCase();
  return new Set([a, b]);
}

export const RevisionLetterGrid = forwardRef<RevisionLetterGridHandle, Props>(
  function RevisionLetterGrid({ letterA, letterB, isUppercase, mixedCase = false, onValidated, shouldValidate }, ref) {
    const lang = usePivotLang();
    const { showPivot } = useTranslation();
    const a = mixedCase ? `${letterA}/${letterA.toLowerCase()}` : isUppercase ? letterA : letterA.toLowerCase();
    const b = mixedCase ? `${letterB}/${letterB.toLowerCase()}` : isUppercase ? letterB : letterB.toLowerCase();

    const [grid, setGrid] = useState(() => makeGrid(letterA, letterB, isUppercase, mixedCase));
    const [states, setStates] = useState<CellState[]>(() => Array(GRID_SIZE).fill("idle"));
    const [validated, setValidated] = useState(false);

    const reset = useCallback(() => {
      setGrid(makeGrid(letterA, letterB, isUppercase, mixedCase));
      setStates(Array(GRID_SIZE).fill("idle"));
      setValidated(false);
    }, [letterA, letterB, isUppercase, mixedCase]);

    const validate = useCallback(() => {
      if (validated) return;
      const targets = targetSet(letterA, letterB, isUppercase, mixedCase);
      const newStates = states.map((s, i) => {
        const isTarget = targets.has(grid[i]!);
        if (s === "selected") return isTarget ? "correct" : "wrong";
        if (isTarget) return "missed";
        return "idle";
      }) as CellState[];
      setValidated(true);
      setStates(newStates);
      if (onValidated) {
        const max = grid.filter((cell) => targets.has(cell)).length;
        const score = newStates.filter((s) => s === "correct").length;
        onValidated(score, max);
      }
    }, [validated, grid, letterA, letterB, isUppercase, mixedCase, states, onValidated]);

    const validateRef = useRef(validate);
    validateRef.current = validate;
    useEffect(() => {
      if (shouldValidate) validateRef.current();
    }, [shouldValidate]);

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

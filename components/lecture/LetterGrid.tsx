"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { lectureUi } from "@/lib/i18n/lecture-ui";

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

const DESKTOP_MQ = "(min-width: 768px)";
const MOBILE_GRID_SIZE = 25;
const DESKTOP_GRID_SIZE = 32;

function useLetterGridSize(): number {
  const [size, setSize] = useState(() => {
    if (typeof window === "undefined") return MOBILE_GRID_SIZE;
    return window.matchMedia(DESKTOP_MQ).matches ? DESKTOP_GRID_SIZE : MOBILE_GRID_SIZE;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(DESKTOP_MQ);
    const update = () => setSize(mq.matches ? DESKTOP_GRID_SIZE : MOBILE_GRID_SIZE);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return size;
}

function targetCountForSize(gridSize: number): number {
  const min = Math.round(4 * gridSize / MOBILE_GRID_SIZE);
  const max = Math.round(7 * gridSize / MOBILE_GRID_SIZE);
  return min + Math.floor(Math.random() * (max - min + 1));
}

function makeGrid(target: string, isUppercase: boolean, gridSize: number): string[] {
  const alpha = isUppercase
    ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    : "abcdefghijklmnopqrstuvwxyz";
  const distractors = alpha.split("").filter((c) => c !== target);
  const targetCount = targetCountForSize(gridSize);
  const cells: string[] = [
    ...Array(targetCount).fill(target),
    ...Array.from({ length: gridSize - targetCount }, () =>
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
    const lang = usePivotLang();
    const { showPivot } = useTranslation();
    const gridSize = useLetterGridSize();
    const prevGridSize = useRef(gridSize);
    const [grid, setGrid] = useState(() => makeGrid(target, isUppercase, gridSize));
    const [states, setStates] = useState<CellState[]>(() => Array(gridSize).fill("idle"));
    const [validated, setValidated] = useState(false);

    useEffect(() => {
      if (prevGridSize.current === gridSize) return;
      prevGridSize.current = gridSize;
      setGrid(makeGrid(target, isUppercase, gridSize));
      setStates(Array(gridSize).fill("idle"));
      setValidated(false);
    }, [gridSize, target, isUppercase]);

    const reset = useCallback(() => {
      setGrid(makeGrid(target, isUppercase, gridSize));
      setStates(Array(gridSize).fill("idle"));
      setValidated(false);
    }, [target, isUppercase, gridSize]);

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
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {lectureUi(lang, "recognizeLetter")}
          </p>
        )}
        <p className="text-sm text-[var(--color-text-secondary)]">
          Touchez chaque{" "}
          <strong className="text-[var(--color-accent-lecture)]">
            {isUppercase ? target.toUpperCase() : target.toLowerCase()}
          </strong>
        </p>
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {lectureUi(lang, "tapEachLetter", { x: isUppercase ? target.toUpperCase() : target.toLowerCase() })}
          </p>
        )}
        <div
          className={`grid gap-2 ${
            cols === 4 ? "grid-cols-4" : "grid-cols-5 md:grid-cols-8 md:gap-1.5"
          }`}
        >
          {grid.map((letter, i) => {
            const s = states[i];
            return (
              <button
                key={i}
                type="button"
                onClick={() => tap(i)}
                disabled={validated}
                className={`flex aspect-square items-center justify-center rounded-[var(--radius-lg)] border text-4xl font-bold transition-colors md:text-2xl ${
                  s === "correct"
                    ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10 text-[var(--color-accent-lecture)]"
                    : s === "wrong" || s === "missed"
                      ? "border-amber-400 bg-amber-50 text-amber-700"
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

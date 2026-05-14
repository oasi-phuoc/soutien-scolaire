"use client";

import { useState } from "react";
import { speak } from "@/lib/utils/speech";

interface Props {
  target: string;
  grid: string[];
  isUppercase: boolean;
  cols?: 4 | 5;
}

type State = "idle" | "correct" | "wrong";

export function LetterGrid({ target, grid, isUppercase, cols = 4 }: Props) {
  const [states, setStates] = useState<State[]>(() => grid.map(() => "idle"));

  function tap(i: number) {
    if (states[i] !== "idle") return;
    speak(grid[i]);
    setStates((prev) => {
      const next = [...prev];
      next[i] = grid[i] === target ? "correct" : "wrong";
      return next;
    });
  }

  const allFound = grid.every((l, i) => l !== target || states[i] === "correct");

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
              className={`flex items-center justify-center rounded-[var(--radius-lg)] border p-3 text-lg font-bold transition-colors ${
                s === "correct"
                  ? "border-green-500 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : s === "wrong"
                    ? "border-red-400 bg-red-50 text-red-500 dark:bg-red-900/20"
                    : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] active:scale-95"
              }`}
            >
              {letter}
            </button>
          );
        })}
      </div>
      {allFound && (
        <p className="text-center text-sm font-semibold text-green-600 dark:text-green-400">
          Bravo ! Toutes les lettres trouvées.
        </p>
      )}
    </section>
  );
}

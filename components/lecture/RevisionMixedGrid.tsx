"use client";

import { useState } from "react";
import { speak } from "@/lib/utils/speech";

interface Props {
  letterA: string;
  letterB: string;
  phonemeA: string;
  phonemeB: string;
  grid: string[];
}

type State = "idle" | "correct" | "wrong";

export function RevisionMixedGrid({ letterA, letterB, phonemeA, phonemeB, grid }: Props) {
  const targets = new Set([letterA, letterB, letterA.toLowerCase(), letterB.toLowerCase()]);
  const [states, setStates] = useState<State[]>(() => grid.map(() => "idle"));

  function tap(i: number) {
    if (states[i] !== "idle") return;
    speak(grid[i]);
    setStates((prev) => {
      const next = [...prev];
      next[i] = targets.has(grid[i]) ? "correct" : "wrong";
      return next;
    });
  }

  const allFound = grid.every((l, i) => !targets.has(l) || states[i] === "correct");

  return (
    <section className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">
        Touchez les lettres :{" "}
        <strong className="text-[var(--color-accent-lecture)]">
          {letterA}/{letterA.toLowerCase()}
        </strong>
        {" · "}
        <strong className="text-[var(--color-accent-alg)]">
          {letterB}/{letterB.toLowerCase()}
        </strong>
      </p>
      <div className="grid grid-cols-5 gap-2">
        {grid.map((letter, i) => {
          const s = states[i];
          const isA = letter === letterA || letter === letterA.toLowerCase();
          return (
            <button
              key={i}
              type="button"
              onClick={() => tap(i)}
              className={`flex items-center justify-center rounded-[var(--radius-lg)] border p-3 text-base font-bold transition-colors ${
                s === "correct"
                  ? isA
                    ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
                    : "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
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
          Excellent ! Toutes les lettres trouvées.
        </p>
      )}
    </section>
  );
}

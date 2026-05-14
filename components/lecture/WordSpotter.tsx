"use client";

import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { randomWordsWithLetter } from "@/lib/curriculum/word-pool";

export interface WordSpotterHandle {
  reset: () => void;
  validate: () => void;
}

interface Props {
  target: string;
  isUppercase: boolean;
}

type CharState = "idle" | "selected" | "correct" | "wrong" | "missed";

const WORD_COUNT = 5;

function buildWords(target: string, isUppercase: boolean): string[] {
  const raw = randomWordsWithLetter(target.toLowerCase(), WORD_COUNT);
  return raw.map((w) => (isUppercase ? w.toUpperCase() : w.toLowerCase()));
}

export const WordSpotter = forwardRef<WordSpotterHandle, Props>(
  function WordSpotter({ target, isUppercase }, ref) {
    const [words, setWords] = useState(() => buildWords(target, isUppercase));
    // states keyed by "wi-li"
    const [states, setStates] = useState<Record<string, CharState>>({});
    const [validated, setValidated] = useState(false);

    const reset = useCallback(() => {
      setWords(buildWords(target, isUppercase));
      setStates({});
      setValidated(false);
    }, [target, isUppercase]);

    const validate = useCallback(() => {
      if (validated) return;
      setValidated(true);
      setStates((prev) => {
        const next: Record<string, CharState> = {};
        words.forEach((word, wi) => {
          word.split("").forEach((char, li) => {
            const key = `${wi}-${li}`;
            const isTarget = char === target;
            const s = prev[key] ?? "idle";
            if (s === "selected") {
              next[key] = isTarget ? "correct" : "wrong";
            } else if (isTarget) {
              next[key] = "missed";
            }
            // non-target, unselected chars keep no state (idle)
          });
        });
        return next;
      });
    }, [validated, words, target]);

    useImperativeHandle(ref, () => ({ reset, validate }), [reset, validate]);

    function tap(wi: number, li: number) {
      if (validated) return;
      const key = `${wi}-${li}`;
      setStates((prev) => {
        const next = { ...prev };
        next[key] = prev[key] === "selected" ? "idle" : "selected";
        return next;
      });
    }

    return (
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Repérer dans les mots</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Touchez la lettre{" "}
          <strong className="text-[var(--color-accent-lecture)]">{target}</strong>{" "}
          dans chaque mot
        </p>
        <ul className="space-y-2">
          {words.map((word, wi) => (
            <li
              key={wi}
              className="flex items-center justify-center gap-0.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3"
            >
              {word.split("").map((char, li) => {
                const key = `${wi}-${li}`;
                const s = states[key] ?? "idle";
                return (
                  <button
                    key={li}
                    type="button"
                    disabled={validated}
                    onClick={() => tap(wi, li)}
                    className={`min-w-[1.25rem] text-center text-base tracking-widest transition-colors ${
                      s === "correct"
                        ? "font-bold text-[var(--color-accent-lecture)]"
                        : s === "wrong" || s === "missed"
                          ? "font-bold text-red-500"
                          : s === "selected"
                            ? "font-bold text-[var(--color-accent-lecture)]"
                            : "font-semibold text-[var(--color-text-primary)]"
                    }`}
                  >
                    {char}
                  </button>
                );
              })}
            </li>
          ))}
        </ul>
      </section>
    );
  },
);

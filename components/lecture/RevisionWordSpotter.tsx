"use client";

import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { randomWordsWithLetter } from "@/lib/curriculum/word-pool";

export interface RevisionWordSpotterHandle {
  reset: () => void;
  validate: () => void;
}

interface Props {
  letterA: string;
  letterB: string;
  isUppercase: boolean;
}

type CharState = "idle" | "selected" | "correct" | "wrong" | "missed";

const WORD_COUNT = 5;

function buildWords(letterA: string, letterB: string, isUppercase: boolean): string[] {
  const a = letterA.toLowerCase();
  const b = letterB.toLowerCase();
  const rawA = randomWordsWithLetter(a, 15).filter((w) => w.length <= 9);
  const rawB = randomWordsWithLetter(b, 15).filter((w) => w.length <= 9);
  const merged = [...new Set([...rawA, ...rawB])].slice(0, WORD_COUNT);
  return merged.map((w) => (isUppercase ? w.toUpperCase() : w.toLowerCase()));
}

export const RevisionWordSpotter = forwardRef<RevisionWordSpotterHandle, Props>(
  function RevisionWordSpotter({ letterA, letterB, isUppercase }, ref) {
    const a = isUppercase ? letterA : letterA.toLowerCase();
    const b = isUppercase ? letterB : letterB.toLowerCase();

    const [words, setWords] = useState(() => buildWords(letterA, letterB, isUppercase));
    const [states, setStates] = useState<Record<string, CharState>>({});
    const [validated, setValidated] = useState(false);

    const reset = useCallback(() => {
      setWords(buildWords(letterA, letterB, isUppercase));
      setStates({});
      setValidated(false);
    }, [letterA, letterB, isUppercase]);

    const validate = useCallback(() => {
      if (validated) return;
      const ta = isUppercase ? letterA : letterA.toLowerCase();
      const tb = isUppercase ? letterB : letterB.toLowerCase();
      const targets = new Set([ta, tb]);
      setValidated(true);
      setStates((prev) => {
        const next: Record<string, CharState> = {};
        words.forEach((word, wi) => {
          word.split("").forEach((char, li) => {
            const key = `${wi}-${li}`;
            const isTarget = targets.has(char);
            const s = prev[key] ?? "idle";
            if (s === "selected") {
              next[key] = isTarget ? "correct" : "wrong";
            } else if (isTarget) {
              next[key] = "missed";
            }
          });
        });
        return next;
      });
    }, [validated, words, letterA, letterB, isUppercase]);

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
          Touchez les lettres{" "}
          <strong className="text-[var(--color-accent-lecture)]">{a}</strong>
          {" "}et{" "}
          <strong className="text-[var(--color-accent-lecture)]">{b}</strong>
          {" "}dans chaque mot
        </p>
        <ul className="space-y-2">
          {words.map((word, wi) => (
            <li
              key={wi}
              className="flex flex-wrap items-center justify-center gap-0.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 py-3"
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
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-base font-bold transition-colors ${
                      s === "correct"
                        ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
                        : s === "wrong" || s === "missed"
                          ? "border-red-400 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                          : s === "selected"
                            ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
                            : "border-transparent text-[var(--color-text-primary)]"
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

"use client";

import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { speak } from "@/lib/utils/speech";

export interface RevisionSoundStepHandle {
  reset: () => void;
  validate: () => void;
}

interface Props {
  phonemeA: string;
  phonemeB: string;
  words: { word: string; answer: "A" | "B" }[];
}

export const RevisionSoundStep = forwardRef<RevisionSoundStepHandle, Props>(
  function RevisionSoundStep({ phonemeA, phonemeB, words }, ref) {
    const [answers, setAnswers] = useState<Record<number, "A" | "B">>({});
    const [validated, setValidated] = useState(false);

    const reset = useCallback(() => {
      setAnswers({});
      setValidated(false);
    }, []);

    const validate = useCallback(() => {
      if (validated) return;
      setValidated(true);
    }, [validated]);

    useImperativeHandle(ref, () => ({ reset, validate }), [reset, validate]);

    function pick(i: number, choice: "A" | "B") {
      if (validated) return;
      setAnswers((prev) => ({ ...prev, [i]: choice }));
    }

    return (
      <section className="space-y-3 pb-8">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Entre les sons</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Écoutez le mot. Quel son entendez-vous ?
        </p>
        <ul className="space-y-2">
          {words.map(({ word, answer }, i) => {
            const chosen = answers[i];
            return (
              <li
                key={i}
                className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3"
              >
                <button
                  type="button"
                  onClick={() => speak(word)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-text-primary)] text-white"
                  aria-label={`Écouter ${word}`}
                >
                  <SpeakerIcon />
                </button>
                <span className="flex-1 text-sm font-medium text-[var(--color-text-primary)]">{word}</span>
                {(["A", "B"] as const).map((opt) => {
                  const isChosen = chosen === opt;
                  const isCorrect = answer === opt;
                  const showResult = validated && isChosen;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => pick(i, opt)}
                      disabled={validated}
                      className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                        showResult
                          ? isCorrect
                            ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
                            : "border-red-400 bg-red-50 text-red-700"
                          : isChosen
                            ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
                            : "border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]"
                      }`}
                    >
                      {opt === "A" ? phonemeA : phonemeB}
                    </button>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </section>
    );
  },
);

function SpeakerIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}

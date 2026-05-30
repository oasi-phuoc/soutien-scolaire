"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import {
  ExerciseProps, pickN, playWord, normalizeText, SoundIcon,
} from "./vocabUtils";

type WordState = { answer: string; checked: boolean; correct: boolean };

export function ExDictation({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const [words] = useState<VocabWord[]>(() => pickN(theme.words, 6));
  const [states, setStates] = useState<Record<string, WordState>>(() =>
    Object.fromEntries(words.map((w) => [w.word, { answer: "", checked: false, correct: false }]))
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(true); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const updated: Record<string, WordState> = {};
    words.forEach((w) => {
      const userAns = states[w.word]?.answer ?? "";
      const ok = normalizeText(userAns) === normalizeText(w.word);
      if (ok) correct++;
      updated[w.word] = { answer: userAns, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct, words.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 5}` : "Exercice 8";

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Écoutez et écrivez le mot.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {words.map((w) => {
          const s = states[w.word]!;
          return (
            <div
              key={w.word}
              className="flex flex-col gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3"
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => playWord(w)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-accent-fr)] transition-colors hover:bg-[var(--color-accent-fr)]/10 active:scale-90"
                  aria-label="Écouter"
                >
                  <SoundIcon />
                </button>
              </div>
              {s.checked && !s.correct ? (
                <p className="h-8 w-full text-sm leading-8">
                  <span className="text-amber-600 line-through dark:text-amber-400">{s.answer || "—"}</span>
                  {" "}
                  <span className="font-medium text-[var(--color-text-primary)]">{w.word}</span>
                </p>
              ) : (
                <input
                  type="text"
                  value={s.answer}
                  onChange={(e) =>
                    setStates((prev) => ({
                      ...prev,
                      [w.word]: { ...prev[w.word]!, answer: e.target.value, checked: false, correct: false },
                    }))
                  }
                  className="h-8 w-full border-b border-[var(--color-accent-fr)] bg-transparent text-sm outline-none"
                  readOnly={s.checked && s.correct}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

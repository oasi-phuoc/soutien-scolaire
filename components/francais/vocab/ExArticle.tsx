"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import {
  ExerciseProps, normalizeText,
  WRONG_INPUT_CLS, WRONG_TEXT_CLS, WRONG_ANSWER_CLS,
} from "./vocabUtils";

type WordState = { answer: string; checked: boolean; correct: boolean };

export function ExArticle({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const [words] = useState<VocabWord[]>(() => theme.words.slice(0, 10));
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
      const expected = w.article ?? "";
      const ok = expected !== "" && normalizeText(userAns) === normalizeText(expected);
      if (ok) correct++;
      updated[w.word] = { answer: userAns, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct, words.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 1}` : "Exercice 2";

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Écrivez l'article correct (le, la, les, un, une…).
      </p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {words.map((w) => {
          const s = states[w.word]!;
          return (
            <div key={w.word} className="flex items-center gap-2">
              <div className="flex min-w-0 flex-1 items-center gap-1.5">
                {s.checked && !s.correct ? (
                  <>
                    <span className={`text-sm ${WRONG_TEXT_CLS}`}>{s.answer || "—"}</span>
                    <span className={`text-sm ${WRONG_ANSWER_CLS}`}>{w.article}</span>
                  </>
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
                    placeholder="article"
                    className={`w-16 border-b bg-transparent text-sm outline-none placeholder:text-[var(--color-text-tertiary)] ${
                      s.checked && !s.correct
                        ? WRONG_INPUT_CLS
                        : "border-[var(--color-border-emphasis)]"
                    }`}
                    readOnly={s.checked && s.correct}
                  />
                )}
                <span className="truncate text-sm text-[var(--color-text-primary)]">{w.word}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

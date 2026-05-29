"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import {
  ExerciseProps, pickN,
  WRONG_DISPLAY_INPUT_CLS,
} from "./vocabUtils";

type WordState = { answer: string; checked: boolean; correct: boolean };

export function ExQuestionWrite({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const [words] = useState<VocabWord[]>(() => pickN(theme.words, isEval ? 2 : 4));
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
      const userAns = states[w.word]?.answer.trim() ?? "";
      const ok = userAns.length > 0;
      if (ok) correct++;
      updated[w.word] = { answer: userAns, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct, words.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 7}` : "Exercice 10";

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Écrivez une question en utilisant le mot proposé. Utilisez les mots interrogatifs (qui, quand, où, comment, combien, lequel, pourquoi).
      </p>
      <div className="space-y-4">
        {words.map((w, i) => {
          const s = states[w.word]!;
          return (
            <div key={w.word} className="space-y-1.5">
              <p className="text-sm font-bold text-[var(--color-text-primary)]">
                <span className="mr-2 text-[var(--color-accent-fr)]">{i + 1}.</span>
                {w.article && (
                  <span className="font-normal text-[var(--color-text-secondary)]">{w.article} </span>
                )}
                {w.word}
              </p>
              {s.checked && !s.correct ? (
                <input readOnly value={s.answer || "—"} className={`w-full text-sm ${WRONG_DISPLAY_INPUT_CLS}`} />
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
                  className="w-full border-b border-[var(--color-border-emphasis)] bg-transparent text-sm outline-none"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

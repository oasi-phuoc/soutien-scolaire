"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import {
  ExerciseProps, pickN, normalizeText,
  WRONG_INPUT_CLS, WRONG_TEXT_CLS, WRONG_ANSWER_CLS,
} from "./vocabUtils";

type WordState = { answer: string; checked: boolean; correct: boolean };

export function ExImageWrite({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const [words] = useState<VocabWord[]>(() => pickN(theme.words, 5));
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

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 4}` : "Exercice 7";

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Regardez l&apos;image et écrivez le mot correspondant.
      </p>
      <div className="space-y-3">
        {words.map((w, i) => {
          const s = states[w.word]!;
          return (
            <div key={w.word} className="flex items-center gap-3">
              <span className="text-sm font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
              {w.image ? (
                <img src={w.image} alt="" className="h-14 w-14 shrink-0 rounded object-cover" />
              ) : (
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-[var(--color-bg-secondary)] text-xs text-[var(--color-text-tertiary)]">
                  {w.article} {w.word}
                </div>
              )}
              <div className="flex flex-1 items-center gap-2">
                {s.checked && !s.correct ? (
                  <>
                    <span className={`text-sm ${WRONG_TEXT_CLS}`}>{s.answer || "—"}</span>
                    <span className={`text-sm ${WRONG_ANSWER_CLS}`}>{w.word}</span>
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
                    placeholder="mot…"
                    className={`w-full border-b bg-transparent text-sm outline-none placeholder:text-[var(--color-text-tertiary)] ${
                      s.checked && !s.correct
                        ? WRONG_INPUT_CLS
                        : "border-[var(--color-border-emphasis)]"
                    }`}
                    readOnly={s.checked && s.correct}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

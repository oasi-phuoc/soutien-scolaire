"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import {
  ExerciseProps, pickN, shuffle, normalizeText,
  WRONG_DISPLAY_INPUT_CLS, CORRECT_DISPLAY_INPUT_CLS,
} from "./vocabUtils";

type MatchState = { answer: string; checked: boolean; correct: boolean };

export function ExImageMatch({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const [words] = useState<VocabWord[]>(() => pickN(theme.words, 6));
  const [shuffledImages] = useState<VocabWord[]>(() => shuffle([...words]));
  const [states, setStates] = useState<Record<string, MatchState>>(() =>
    Object.fromEntries(
      shuffledImages.map((w) => [w.word, { answer: "", checked: false, correct: false }])
    )
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(true); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const updated: Record<string, MatchState> = {};
    shuffledImages.forEach((w) => {
      const expectedIdx = words.findIndex((p) => p.word === w.word);
      const expected = String(expectedIdx + 1);
      const userAns = states[w.word]?.answer.trim() ?? "";
      const ok = normalizeText(userAns) === expected;
      if (ok) correct++;
      updated[w.word] = { answer: userAns, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct, shuffledImages.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 1}` : "Exercice 1";

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Associez chaque image au mot en écrivant le numéro correspondant.
      </p>
      {/* Word list — two columns */}
      <div className="mb-4 grid grid-cols-2 gap-x-6 gap-y-1">
        {words.map((w, i) => (
          <p key={w.word} className="text-sm text-[var(--color-text-primary)]">
            <span className="mr-2 font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
            {w.article && <span className="text-[var(--color-text-secondary)]">{w.article} </span>}
            {w.word}
          </p>
        ))}
      </div>
      {/* Image cards — two columns */}
      <div className="grid grid-cols-2 gap-3">
        {shuffledImages.map((w) => {
          const s = states[w.word]!;
          const correctIdx = words.findIndex((p) => p.word === w.word);
          return (
            <div
              key={w.word}
              className="flex flex-col items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-2"
            >
              {w.image ? (
                <img src={w.image} alt="" className="h-20 w-full rounded object-cover" />
              ) : (
                <div className="flex h-20 w-full items-center justify-center rounded bg-[var(--color-bg-secondary)] text-xs text-[var(--color-text-tertiary)]">
                  {w.article} {w.word}
                </div>
              )}
              <div className="flex items-center gap-1.5">
                {s.checked && !s.correct ? (
                  <>
                    <input readOnly value={s.answer || "—"} className={`w-10 text-center text-sm ${WRONG_DISPLAY_INPUT_CLS}`} />
                    <input readOnly value={String(correctIdx + 1)} className={`w-10 text-center text-sm ${CORRECT_DISPLAY_INPUT_CLS}`} />
                  </>
                ) : (
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={s.answer}
                    onChange={(e) =>
                      setStates((prev) => ({
                        ...prev,
                        [w.word]: { ...prev[w.word]!, answer: e.target.value, checked: false, correct: false },
                      }))
                    }
                    className="w-16 border-b border-[var(--color-border-emphasis)] bg-transparent text-center text-sm outline-none"
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

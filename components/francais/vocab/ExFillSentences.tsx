"use client";
import { useEffect, useState } from "react";
import {
  ExerciseProps, pickN, shuffle, normalizeText, WRONG_BOX_CLS,
} from "./vocabUtils";

type SentState = { answer: string; checked: boolean; correct: boolean };

export function ExFillSentences({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const allSentences = theme.sentences ?? [];
  const sentences = isEval ? allSentences.slice(0, 2) : allSentences;

  const [bankWords] = useState<string[]>(() => {
    const answers = new Set(allSentences.map((s) => s.answer));
    const answerWords = theme.words.filter((w) => answers.has(w.word));
    const others = theme.words.filter((w) => !answers.has(w.word));
    const picked = shuffle([
      ...answerWords,
      ...pickN(others, Math.max(0, 9 - answerWords.length)),
    ]);
    return picked.map((w) => w.word);
  });

  const [states, setStates] = useState<SentState[]>(() =>
    sentences.map(() => ({ answer: "", checked: false, correct: false }))
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(true); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    if (sentences.length === 0) { onValidated(0, 0); return; }
    let correct = 0;
    const updated = sentences.map((sent, i) => {
      const userAns = states[i]?.answer ?? "";
      const ok = normalizeText(userAns) === normalizeText(sent.answer);
      if (ok) correct++;
      return { answer: userAns, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct, sentences.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 3}` : "Exercice 6";

  if (sentences.length === 0) {
    return (
      <div>
        <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Aucune phrase disponible pour ce thème.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-3 text-xs text-[var(--color-text-secondary)]">
        Complétez chaque phrase avec le mot correct.
      </p>
      {/* Word bank — uniform-width pills, no outer frame */}
      <div className="mb-4 flex flex-wrap gap-2">
        {bankWords.map((word) => (
          <span
            key={word}
            className="inline-flex w-24 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 py-1 text-sm text-[var(--color-text-primary)] shadow-sm"
          >
            {word}
          </span>
        ))}
      </div>
      {/* Sentences */}
      <div className="space-y-4">
        {sentences.map((sent, i) => {
          const s = states[i]!;
          const [before, after] = sent.sentence.split("___");
          return (
            <div key={i} className="text-sm">
              <span className="mr-2 font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
              <span className="text-[var(--color-text-primary)]">{before}</span>
              {s.checked && !s.correct ? (
                <span className={`mx-1 ${WRONG_BOX_CLS}`}>
                  <span className="text-sm text-amber-600 line-through dark:text-amber-400">{s.answer || "—"}</span>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">{sent.answer}</span>
                </span>
              ) : (
                <input
                  type="text"
                  value={s.answer}
                  onChange={(e) =>
                    setStates((prev) =>
                      prev.map((st, j) =>
                        j === i ? { ...st, answer: e.target.value, checked: false, correct: false } : st
                      )
                    )
                  }
                  className="mx-1 inline-block w-24 border-b border-[var(--color-border-emphasis)] bg-transparent text-sm outline-none"
                  readOnly={s.checked && s.correct}
                />
              )}
              <span className="text-[var(--color-text-primary)]">{after}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

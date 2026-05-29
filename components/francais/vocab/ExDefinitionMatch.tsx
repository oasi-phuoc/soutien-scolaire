"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import {
  ExerciseProps, pickN, shuffle, normalizeText,
  WRONG_INPUT_CLS, WRONG_TEXT_CLS, WRONG_ANSWER_CLS,
} from "./vocabUtils";

type MatchState = { answer: string; checked: boolean; correct: boolean };

export function ExDefinitionMatch({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const [words] = useState<VocabWord[]>(() => {
    const withDef = theme.words.filter((w) => !!w.definition);
    return pickN(withDef.length >= 4 ? withDef : theme.words, 4);
  });
  const [shuffledDefs] = useState<VocabWord[]>(() => shuffle([...words]));
  const [states, setStates] = useState<Record<string, MatchState>>(() =>
    Object.fromEntries(
      shuffledDefs.map((w) => [w.word, { answer: "", checked: false, correct: false }])
    )
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(true); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const updated: Record<string, MatchState> = {};
    shuffledDefs.forEach((w) => {
      const expectedIdx = words.findIndex((p) => p.word === w.word);
      const expected = String(expectedIdx + 1);
      const userAns = states[w.word]?.answer.trim() ?? "";
      const ok = normalizeText(userAns) === expected;
      if (ok) correct++;
      updated[w.word] = { answer: userAns, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct, shuffledDefs.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 5}` : "Exercice 5";

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Associez chaque définition au mot correspondant en écrivant le numéro.
      </p>
      {/* Word list */}
      <div className="mb-4 space-y-1">
        {words.map((w, i) => (
          <p key={w.word} className="text-sm text-[var(--color-text-primary)]">
            <span className="mr-2 font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
            {w.article && (
              <span className="text-[var(--color-text-secondary)]">{w.article} </span>
            )}
            {w.word}
          </p>
        ))}
      </div>
      {/* Definition rows */}
      <div className="space-y-2">
        {shuffledDefs.map((w) => {
          const s = states[w.word]!;
          const correctIdx = words.findIndex((p) => p.word === w.word);
          return (
            <div key={w.word} className="flex items-start gap-3">
              <p className="flex-1 text-sm text-[var(--color-text-secondary)]">
                {w.definition ?? w.word}
              </p>
              <div className="flex shrink-0 items-center gap-2">
                {s.checked && !s.correct && (
                  <>
                    <span className={`text-sm ${WRONG_TEXT_CLS}`}>{s.answer || "—"}</span>
                    <span className={`text-sm ${WRONG_ANSWER_CLS}`}>{correctIdx + 1}</span>
                  </>
                )}
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
                  className={`w-10 border-b bg-transparent text-center text-sm outline-none ${
                    s.checked && !s.correct
                      ? WRONG_INPUT_CLS
                      : "border-[var(--color-border-emphasis)]"
                  }`}
                  readOnly={s.checked && s.correct}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

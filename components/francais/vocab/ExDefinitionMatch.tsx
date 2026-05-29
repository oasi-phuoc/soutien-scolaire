"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import {
  ExerciseProps, pickN, shuffle, normalizeText, WRONG_BOX_CLS,
} from "./vocabUtils";

const LETTERS = ["a", "b", "c", "d", "e", "f"];

type MatchState = { answer: string; checked: boolean; correct: boolean };

export function ExDefinitionMatch({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const [words] = useState<VocabWord[]>(() => {
    const withDef = theme.words.filter((w) => !!w.definition);
    return pickN(withDef.length >= 6 ? withDef : theme.words, 6);
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
        Associez chaque définition au mot correspondant en choisissant le numéro.
      </p>
      {/* Word list — two columns */}
      <div className="mb-4 grid grid-cols-2 gap-x-6 gap-y-1">
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
      {/* Definition rows — two columns */}
      <div className="grid grid-cols-2 gap-3">
        {shuffledDefs.map((w, idx) => {
          const s = states[w.word]!;
          const correctIdx = words.findIndex((p) => p.word === w.word);
          return (
            <div key={w.word} className="flex items-start gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-2">
              <span className="shrink-0 font-bold text-[var(--color-accent-fr)] text-sm">{LETTERS[idx]}.</span>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {w.definition ?? w.word}
                </p>
                <div className="flex items-center">
                  {s.checked && !s.correct ? (
                    <div className={WRONG_BOX_CLS}>
                      <span className="text-sm text-amber-600 line-through dark:text-amber-400">{s.answer || "—"}</span>
                      <span className="text-sm font-medium text-[var(--color-text-primary)]">{String(correctIdx + 1)}</span>
                    </div>
                  ) : (
                    <select
                      value={s.answer}
                      disabled={s.checked && s.correct}
                      onChange={(e) =>
                        setStates((prev) => ({
                          ...prev,
                          [w.word]: { ...prev[w.word]!, answer: e.target.value, checked: false, correct: false },
                        }))
                      }
                      className="rounded border border-[var(--color-border-emphasis)] bg-transparent px-2 py-1 text-sm outline-none"
                    >
                      <option value="">—</option>
                      {words.map((_, n) => (
                        <option key={n + 1} value={String(n + 1)}>{n + 1}</option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

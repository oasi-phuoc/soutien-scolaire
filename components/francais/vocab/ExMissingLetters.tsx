"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import {
  ExerciseProps, normalizeText, WRONG_BOX_CLS,
} from "./vocabUtils";

function makeMissingPattern(word: string): string {
  const vowels = "aeiouàâäèéêëîïôùûüœæ";
  let blanked = 0;
  const chars = word.split("").map((c) => {
    if (blanked < 3 && vowels.includes(c.toLowerCase())) {
      blanked++;
      return "_";
    }
    return c;
  });
  if (blanked === 0 && chars.length > 1) chars[1] = "_";
  return chars.join("");
}

type WordState = { answer: string; checked: boolean; correct: boolean };

export function ExMissingLetters({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const [words] = useState<VocabWord[]>(() => theme.words.slice(0, 10));
  const [patterns] = useState<Record<string, string>>(() =>
    Object.fromEntries(words.map((w) => [w.word, makeMissingPattern(w.word)]))
  );
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

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 2}` : "Exercice 4";

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Complétez le mot entier à partir du modèle.
      </p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {words.map((w) => {
          const s = states[w.word]!;
          const pattern = patterns[w.word]!;
          return (
            <div key={w.word} className="space-y-0.5">
              <p className="font-mono text-sm text-[var(--color-text-secondary)]">{pattern}</p>
              {s.checked && !s.correct ? (
                <div className={`w-full ${WRONG_BOX_CLS}`}>
                  <span className="text-sm text-amber-600 line-through dark:text-amber-400">{s.answer || "—"}</span>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">{w.word}</span>
                </div>
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

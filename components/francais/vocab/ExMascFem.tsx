"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import { ExerciseProps, pickN, normalizeText } from "./vocabUtils";

type WordState = { answer: string; checked: boolean; correct: boolean };
type WordEntry = { word: VocabWord; mascArt: string; femArt: string };

const VOWEL_RE = /^[aeiouhéèêëàâïîôùûœæ]/i;

function randomArticles(w: VocabWord): { mascArt: string; femArt: string } {
  const useDefinite = Math.random() < 0.5;
  if (useDefinite) {
    return {
      mascArt: VOWEL_RE.test(w.word) ? "l'" : "le",
      femArt: VOWEL_RE.test(w.feminine ?? "") ? "l'" : "la",
    };
  }
  return { mascArt: "un", femArt: "une" };
}

export function ExMascFem({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber, exerciseNumber,
}: ExerciseProps) {
  const [entries] = useState<WordEntry[]>(() =>
    pickN(theme.words.filter((w) => !!w.feminine), 6).map((w) => ({
      word: w,
      ...randomArticles(w),
    }))
  );

  const [states, setStates] = useState<Record<string, WordState>>(() =>
    Object.fromEntries(entries.map((e) => [e.word.word, { answer: "", checked: false, correct: false }]))
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(true); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const updated: Record<string, WordState> = {};
    entries.forEach(({ word: w }) => {
      const userAns = (states[w.word]?.answer ?? "").trim();
      const ok = normalizeText(userAns) === normalizeText(w.feminine!);
      if (ok) correct++;
      updated[w.word] = { answer: userAns, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct, entries.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const title = isEval
    ? `Évaluation — Exercice ${evalNumber ?? 7}`
    : `Exercice ${exerciseNumber ?? 7}`;

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Mettez les mots au féminin.
      </p>
      <div className="space-y-3">
        {entries.map(({ word: w, mascArt, femArt }, i) => {
          const s = states[w.word]!;
          const mascDisplay = mascArt.endsWith("'") ? `${mascArt}${w.word}` : `${mascArt} ${w.word}`;
          return (
            <div key={w.word} className="flex items-center gap-2">
              <span className="w-6 shrink-0 text-sm font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
              <span className="min-w-[7rem] shrink-0 text-sm text-[var(--color-text-secondary)]">
                {mascDisplay}
              </span>
              <span className="shrink-0 text-xs text-[var(--color-text-tertiary)]">→</span>
              <span className="shrink-0 text-sm text-[var(--color-text-secondary)]">{femArt}</span>
              {s.checked && !s.correct ? (
                <p className="flex h-8 w-32 items-center gap-1.5 border-b border-amber-400 text-sm">
                  <span className="text-amber-600 line-through dark:text-amber-400">{s.answer || "—"}</span>
                  <span className="font-medium text-[var(--color-text-primary)]">{w.feminine}</span>
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
                  readOnly={s.checked}
                  className="h-8 w-32 border-b border-[var(--color-accent-fr)] bg-transparent text-sm outline-none"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

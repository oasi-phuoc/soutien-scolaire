"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import { ExerciseProps, normalizeText } from "./vocabUtils";

const VOWELS = "aeiouàâäèéêëîïôùûüœæ";
const ALPHABET = "abcdefghijklmnopqrstuvwxyzàâäéèêëîïôùûüçœ".split("");

function makePatternChars(word: string): string[] {
  let blanked = 0;
  const chars = word.split("").map((c) => {
    if (blanked < 3 && VOWELS.includes(c.toLowerCase())) {
      blanked++;
      return "_";
    }
    return c;
  });
  if (blanked === 0 && chars.length > 1) chars[1] = "_";
  return chars;
}

type WordState = {
  blanks: Record<number, string>; // position in word → chosen letter
  checked: boolean;
  correct: boolean;
};

export function ExMissingLetters({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const [words] = useState<VocabWord[]>(() => theme.words.slice(0, 10));
  const [patterns] = useState<Record<string, string[]>>(() =>
    Object.fromEntries(words.map((w) => [w.word, makePatternChars(w.word)]))
  );
  const [states, setStates] = useState<Record<string, WordState>>(() =>
    Object.fromEntries(words.map((w) => {
      const blanks: Record<number, string> = {};
      makePatternChars(w.word).forEach((c, i) => { if (c === "_") blanks[i] = ""; });
      return [w.word, { blanks, checked: false, correct: false }];
    }))
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(true); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const updated: Record<string, WordState> = {};
    words.forEach((w) => {
      const s = states[w.word]!;
      const pattern = patterns[w.word]!;
      const built = pattern.map((c, i) => (c === "_" ? (s.blanks[i] ?? "") : c)).join("");
      const ok = normalizeText(built) === normalizeText(w.word);
      if (ok) correct++;
      updated[w.word] = { ...s, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct, words.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  function setBlank(word: string, pos: number, value: string) {
    setStates((prev) => ({
      ...prev,
      [word]: { ...prev[word]!, blanks: { ...prev[word]!.blanks, [pos]: value }, checked: false, correct: false },
    }));
  }

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 2}` : "Exercice 3";

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Choisissez les lettres manquantes pour compléter le mot.
      </p>
      <div className="space-y-3">
        {words.map((w, i) => {
          const s = states[w.word]!;
          const pattern = patterns[w.word]!;
          return (
            <div key={w.word} className="flex items-center gap-2">
              <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
              <div className="flex flex-wrap items-center gap-1">
                {s.checked && !s.correct ? (
                  /* Correction: show the correct word in amber, plain */
                  <p className="text-sm font-medium text-amber-500 dark:text-amber-400">{w.word}</p>
                ) : (
                  pattern.map((char, pos) =>
                    char === "_" ? (
                      <select
                        key={pos}
                        value={s.blanks[pos] ?? ""}
                        disabled={s.checked && s.correct}
                        onChange={(e) => setBlank(w.word, pos, e.target.value)}
                        className="h-8 w-12 rounded border border-[var(--color-accent-fr)]/40 bg-[var(--color-accent-fr)]/10 text-center text-sm font-bold text-[var(--color-accent-fr)] outline-none"
                      >
                        <option value="">_</option>
                        {ALPHABET.map((l) => (
                          <option key={l} value={l}>{l}</option>
                        ))}
                      </select>
                    ) : (
                      <span
                        key={pos}
                        className="flex h-8 min-w-[1.75rem] items-center justify-center rounded border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-1 text-sm font-medium text-[var(--color-text-primary)]"
                      >
                        {char}
                      </span>
                    )
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import { ExerciseProps, normalizeText, WRONG_BOX_CLS } from "./vocabUtils";

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
  blanks: Record<number, string>;       // position → chosen letter
  blankOk: Record<number, boolean>;     // position → correct after check
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
      return [w.word, { blanks, blankOk: {}, checked: false, correct: false }];
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
      const blankOk: Record<number, boolean> = {};
      pattern.forEach((c, pos) => {
        if (c === "_") {
          blankOk[pos] = normalizeText(s.blanks[pos] ?? "") === normalizeText(w.word[pos] ?? "");
        }
      });
      const built = pattern.map((c, i) => (c === "_" ? (s.blanks[i] ?? "") : c)).join("");
      const ok = normalizeText(built) === normalizeText(w.word);
      if (ok) correct++;
      updated[w.word] = { ...s, blankOk, checked: true, correct: ok };
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
                {pattern.map((char, pos) =>
                  char === "_" ? (
                    // Blank position: select or correction box
                    s.checked && s.blankOk[pos] === false ? (
                      <div key={pos} className={`h-8 w-7 justify-center ${WRONG_BOX_CLS}`}>
                        <span className="text-xs text-amber-600 line-through dark:text-amber-400">{s.blanks[pos] || "—"}</span>
                        <span className="text-xs font-bold text-[var(--color-text-primary)]">{w.word[pos]}</span>
                      </div>
                    ) : (
                      <select
                        key={pos}
                        value={s.blanks[pos] ?? ""}
                        disabled={s.checked}
                        onChange={(e) => setBlank(w.word, pos, e.target.value)}
                        className="h-8 w-7 appearance-none rounded border border-[var(--color-accent-fr)]/40 bg-[var(--color-accent-fr)]/10 text-center text-sm font-bold text-[var(--color-accent-fr)] outline-none"
                      >
                        <option value="">_</option>
                        {ALPHABET.map((l) => (
                          <option key={l} value={l}>{l}</option>
                        ))}
                      </select>
                    )
                  ) : (
                    // Known letter tile
                    <span
                      key={pos}
                      className="flex h-8 w-7 items-center justify-center rounded border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-sm font-medium text-[var(--color-text-primary)]"
                    >
                      {char}
                    </span>
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

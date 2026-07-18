"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import { ExerciseProps, shuffle, normalizeText } from "./vocabUtils";
import { useEvalReveal } from "@/lib/eval-reveal-context";

const VOWELS = "aeiouàâäèéêëîïôùûüœæ";

const BLANK_INPUT_CLS =
  "h-8 w-7 rounded-none border-0 border-b-2 border-[var(--color-accent-fr)]/60 bg-transparent px-0 pb-0.5 text-center text-sm outline-none transition-colors focus:border-[var(--color-accent-fr)]";

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
  const [words] = useState<VocabWord[]>(() => shuffle(theme.words).slice(0, 7));
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
  const revealCorrection = useEvalReveal();

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
      <p className="eval-exercise-title mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Écrivez les lettres manquantes pour compléter le mot.
      </p>
      <div className="space-y-6">
        {words.map((w, i) => {
          const s = states[w.word]!;
          const pattern = patterns[w.word]!;
          return (
            <div key={w.word} className="flex items-center gap-2">
              <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
              <div className="flex flex-wrap items-center gap-1">
                {pattern.map((char, pos) =>
                  char === "_" ? (
                    s.checked && s.blankOk[pos] === false && revealCorrection ? (
                      <div
                        key={pos}
                        className="h-8 w-7 flex flex-col items-center justify-center rounded-none border-0 border-b-2 border-amber-500 px-0 text-center"
                      >
                        <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{s.blanks[pos] || "—"}</span>
                        <span className="text-xs font-bold leading-none text-amber-600">{w.word[pos]}</span>
                      </div>
                    ) : (
                      <input
                        key={pos}
                        type="text"
                        inputMode="text"
                        maxLength={1}
                        value={s.blanks[pos] ?? ""}
                        disabled={s.checked}
                        onChange={(e) => {
                          const v = e.target.value.slice(-1);
                          setBlank(w.word, pos, v);
                        }}
                        className={BLANK_INPUT_CLS}
                        aria-label={`Lettre manquante position ${pos + 1}`}
                      />
                    )
                  ) : (
                    <span
                      key={pos}
                      className="flex h-8 w-7 items-center justify-center text-sm font-medium text-[var(--color-text-primary)]"
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

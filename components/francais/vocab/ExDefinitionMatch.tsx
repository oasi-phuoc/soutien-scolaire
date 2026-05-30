"use client";
import { useEffect, useState } from "react";
import {
  ExerciseProps, pickN, shuffle, normalizeText, WRONG_BOX_CLS,
} from "./vocabUtils";

const WORD_LETTERS = ["a", "b", "c", "d", "e", "f"];

type MatchState = { answer: string; checked: boolean; correct: boolean };

export function ExDefinitionMatch({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const [{ words, shownDefs, pickedDefs }] = useState(() => {
    const withDef = theme.words.filter((w) => !!w.definition);
    const shown = pickN(withDef, Math.min(4, withDef.length));
    const shownSet = new Set(shown.map((w) => w.word));
    const distractors = pickN(
      theme.words.filter((w) => !shownSet.has(w.word)),
      Math.max(0, 6 - shown.length)
    );
    const pickedDefs: Record<string, string> = {};
    for (const w of shown) {
      const def = w.definition;
      pickedDefs[w.word] = Array.isArray(def)
        ? def[Math.floor(Math.random() * def.length)]!
        : (def ?? w.word);
    }
    return {
      words: shuffle([...shown, ...distractors]),
      shownDefs: shuffle([...shown]),
      pickedDefs,
    };
  });

  const [states, setStates] = useState<Record<string, MatchState>>(() =>
    Object.fromEntries(shownDefs.map((w) => [w.word, { answer: "", checked: false, correct: false }]))
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(true); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const updated: Record<string, MatchState> = {};
    shownDefs.forEach((w) => {
      const expectedIdx = words.findIndex((p) => p.word === w.word);
      const expected = WORD_LETTERS[expectedIdx] ?? "";
      const userAns = states[w.word]?.answer.trim() ?? "";
      const ok = normalizeText(userAns) === expected;
      if (ok) correct++;
      updated[w.word] = { answer: userAns, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct, shownDefs.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  function handleSelect(cardWord: string, newValue: string) {
    setStates((prev) => {
      const oldValue = prev[cardWord]?.answer ?? "";
      const next = { ...prev };
      const clash = Object.entries(prev).find(([w, s]) => w !== cardWord && s.answer === newValue && newValue !== "");
      if (clash) {
        next[clash[0]] = { ...prev[clash[0]]!, answer: oldValue, checked: false, correct: false };
      }
      next[cardWord] = { ...prev[cardWord]!, answer: newValue, checked: false, correct: false };
      return next;
    });
  }

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 5}` : "Exercice 5";

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-3 text-xs text-[var(--color-text-secondary)]">
        Associez chaque définition au mot correspondant en choisissant la lettre.
      </p>
      {/* Word list — two columns, 6 words, lettered a–f */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-1">
        {words.map((w, i) => (
          <div key={w.word} className="flex items-baseline">
            <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-fr)]">{WORD_LETTERS[i]}.</span>
            <span className="text-sm text-[var(--color-text-primary)]">
              {w.article && <span className="text-[var(--color-text-secondary)]">{w.article} </span>}
              {w.word}
            </span>
          </div>
        ))}
      </div>
      {/* Separator */}
      <hr className="mt-3 border-[var(--color-border-default)]" />
      <div className="mb-4" />
      {/* Definition rows — numbered 1–4, select shows letters a–f */}
      <div className="space-y-2">
        {shownDefs.map((w, idx) => {
          const s = states[w.word]!;
          const correctIdx = words.findIndex((p) => p.word === w.word);
          return (
            <div key={w.word} className="flex items-center gap-2">
              <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-fr)]">{idx + 1}.</span>
              <p className="flex-1 text-sm text-[var(--color-text-primary)]">{pickedDefs[w.word]}</p>
              <div className="shrink-0">
                {s.checked && !s.correct ? (
                  <div className={`h-8 w-20 ${WRONG_BOX_CLS}`}>
                    <span className="text-sm text-amber-600 line-through dark:text-amber-400">{s.answer || "—"}</span>
                    <span className="text-sm font-medium text-[var(--color-text-primary)]">{WORD_LETTERS[correctIdx]}</span>
                  </div>
                ) : (
                  <select
                    value={s.answer}
                    disabled={s.checked && s.correct}
                    onChange={(e) => handleSelect(w.word, e.target.value)}
                    className="h-8 w-20 appearance-none rounded border border-[var(--color-accent-fr)]/40 bg-[var(--color-accent-fr)]/10 text-center text-sm text-[var(--color-accent-fr)] outline-none"
                  >
                    <option value="">—</option>
                    {WORD_LETTERS.map((letter) => (
                      <option key={letter} value={letter}>{letter}</option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

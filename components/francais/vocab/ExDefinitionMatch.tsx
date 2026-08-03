"use client";
import { useEffect, useState } from "react";
import {
  ExerciseProps, pickN, shuffle, normalizeText,
} from "./vocabUtils";
import { useEvalReveal } from "@/lib/eval-reveal-context";
import { usePrintQuestionLayout } from "@/components/print/PrintExerciseLayoutContext";

const WORD_LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

const LETTER_INPUT_CLS =
  "h-8 w-12 rounded-none border-0 border-b-2 border-[var(--color-accent-fr)] " +
  "bg-transparent px-0 pb-0.5 text-center text-sm outline-none " +
  "transition-colors focus:border-[var(--color-accent-fr)]";

type MatchState = { answer: string; checked: boolean; correct: boolean };

export function ExDefinitionMatch({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const { questionCount, listClass } = usePrintQuestionLayout(5);
  const [{ words, shownDefs, pickedDefs }] = useState(() => {
    const withDef = theme.words.filter((w) => !!w.definition);
    const shown = pickN(withDef, Math.min(questionCount, withDef.length));
    const shownSet = new Set(shown.map((w) => w.word));
    const distractors = pickN(
      theme.words.filter((w) => !shownSet.has(w.word)),
      Math.max(0, 8 - shown.length)
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
  const revealCorrection = useEvalReveal();

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

  function handleChange(cardWord: string, raw: string) {
    const letter = raw.replace(/[^a-zA-Z]/g, "").slice(-1).toLowerCase();
    setStates((prev) => ({
      ...prev,
      [cardWord]: { ...prev[cardWord]!, answer: letter, checked: false, correct: false },
    }));
  }

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 5}` : "Exercice 5";

  return (
    <div>
      <p className="eval-exercise-title mb-3 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-3 text-xs text-[var(--color-text-secondary)]">
        Associez chaque définition au mot correspondant en écrivant la lettre.
      </p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
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
      <hr className="mt-3 border-[var(--color-border-default)]" />
      <div className="mb-4" />
      <div
        className={
          listClass.startsWith("grid")
            ? listClass
            : "grid w-max max-w-full grid-cols-[auto_auto_3rem] items-center gap-x-1.5 gap-y-2.5"
        }
      >
        {shownDefs.map((w, idx) => {
          const s = states[w.word]!;
          const correctIdx = words.findIndex((p) => p.word === w.word);
          const letterField =
            s.checked && !s.correct && revealCorrection ? (
              <div
                key={`ans-${w.word}`}
                className="flex h-8 w-12 flex-col items-center justify-center rounded-none border-0 border-b-2 border-amber-500"
              >
                <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{s.answer || "—"}</span>
                <span className="text-xs font-bold leading-none text-amber-600">{WORD_LETTERS[correctIdx]}</span>
              </div>
            ) : (
              <input
                key={`ans-${w.word}`}
                type="text"
                inputMode="text"
                maxLength={1}
                value={s.answer}
                onChange={(e) => handleChange(w.word, e.target.value)}
                readOnly={s.checked}
                className={LETTER_INPUT_CLS}
                aria-label={`Lettre pour la définition ${idx + 1}`}
              />
            );
          if (listClass.startsWith("grid")) {
            return (
              <div key={w.word} className="flex items-center gap-x-1.5">
                <span className="shrink-0 text-sm font-bold text-[var(--color-accent-fr)]">{idx + 1}.</span>
                <p className="min-w-0 text-sm leading-snug text-[var(--color-text-primary)]">{pickedDefs[w.word]}</p>
                {letterField}
              </div>
            );
          }
          return [
            <span key={`n-${w.word}`} className="text-sm font-bold text-[var(--color-accent-fr)]">
              {idx + 1}.
            </span>,
            <span key={`d-${w.word}`} className="text-sm leading-snug text-[var(--color-text-primary)]">
              {pickedDefs[w.word]}
            </span>,
            letterField,
          ];
        })}
      </div>
    </div>
  );
}

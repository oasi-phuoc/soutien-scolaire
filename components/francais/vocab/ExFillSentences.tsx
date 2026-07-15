"use client";
import { useEffect, useState } from "react";
import {
  ExerciseProps, shuffle, normalizeText, WRONG_BOX_CLS,
} from "./vocabUtils";
import { AppSelect } from "@/components/ui/AppSelect";
import { useEvalReveal } from "@/lib/eval-reveal-context";

const WORD_LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

type SentState = { answer: string; checked: boolean; correct: boolean };

export function ExFillSentences({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const allSentences = theme.sentences ?? [];

  // Pick 5 sentences each with a DIFFERENT answer word to avoid repetition
  const [sentences] = useState(() => {
    const byAnswer = new Map<string, typeof allSentences[number][]>();
    for (const s of allSentences) {
      if (!byAnswer.has(s.answer)) byAnswer.set(s.answer, []);
      byAnswer.get(s.answer)!.push(s);
    }
    const uniqueAnswers = shuffle([...byAnswer.keys()]);
    const picked: typeof allSentences[number][] = [];
    for (const ans of uniqueAnswers) {
      if (picked.length >= 5) break;
      const group = byAnswer.get(ans)!;
      picked.push(group[Math.floor(Math.random() * group.length)]!);
    }
    return picked;
  });

  const [bankWords] = useState<string[]>(() => {
    const sentAnswers = new Set(sentences.map((s) => s.answer));
    const answerForms: string[] = [];
    for (const w of theme.words) {
      if (sentAnswers.has(w.word)) answerForms.push(w.word);
      if (w.feminine && sentAnswers.has(w.feminine)) answerForms.push(w.feminine);
    }
    const answerSet = new Set(answerForms);
    const distractorPool: string[] = [];
    for (const w of theme.words) {
      if (!answerSet.has(w.word)) distractorPool.push(w.word);
      if (w.feminine && !answerSet.has(w.feminine)) distractorPool.push(w.feminine);
    }
    const distractors = shuffle(distractorPool).slice(0, Math.max(0, 8 - answerForms.length));
    return shuffle([...answerForms, ...distractors]).slice(0, 8);
  });

  const [states, setStates] = useState<SentState[]>(() =>
    sentences.map(() => ({ answer: "", checked: false, correct: false }))
  );
  const revealCorrection = useEvalReveal();

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
        <p className="eval-exercise-title mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Aucune phrase disponible pour ce thème.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="eval-exercise-title mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-3 text-xs text-[var(--color-text-secondary)]">
        Complétez chaque phrase avec le mot correct.
      </p>
      {/* Word bank — plain lettered list, no pill borders */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
        {bankWords.map((word, i) => (
          <div key={word} className="flex items-baseline">
            <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-fr)]">{WORD_LETTERS[i]}.</span>
            <span className="text-sm text-[var(--color-text-primary)]">{word}</span>
          </div>
        ))}
      </div>
      {/* Separator + spacing */}
      <hr className="mt-3 border-[var(--color-border-default)]" />
      <div className="mb-4" />
      {/* Sentences */}
      <div className="space-y-4">
        {sentences.map((sent, i) => {
          const s = states[i]!;
          const [before, after] = sent.sentence.split("___");
          return (
            <div key={i} className="text-sm">
              <span className="mr-2 font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
              <span className="text-[var(--color-text-primary)]">{before}</span>
              {s.checked && !s.correct && revealCorrection ? (
                <span className={`mx-1 inline-flex h-8 w-28 ${WRONG_BOX_CLS}`}>
                  <span className="text-[9px] leading-none text-amber-600 line-through">{s.answer || "—"}</span>
                  <span className="mt-0.5 text-[10px] leading-none font-medium text-[var(--color-text-primary)]">{sent.answer}</span>
                </span>
              ) : (
                <AppSelect
                  value={s.answer}
                  onChange={(v) =>
                    setStates((prev) =>
                      prev.map((st, j) =>
                        j === i ? { ...st, answer: v, checked: false, correct: false } : st
                      )
                    )
                  }
                  options={bankWords.map((word) => ({ value: word, label: word }))}
                  placeholder=""
                  emptyOption={{ value: "", label: "" }}
                  disabled={s.checked}
                  size="sm"
                  className="mx-1 inline-block w-28"
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

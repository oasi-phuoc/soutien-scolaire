"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import { ExerciseProps, pickN } from "./vocabUtils";

const LT_IGNORE = new Set(["WHITESPACE_RULE", "FRENCH_WHITESPACE", "COMMA_PARENTHESIS_WHITESPACE", "UNPAIRED_BRACKETS"]);

const INTERROGATIVE_WORDS = ["qui", "quand", "où", "comment", "combien", "lequel", "laquelle", "lesquels", "lesquelles", "pourquoi", "que", "qu'", "est-ce"];

type LTError = { shortMessage: string; message: string; suggestions: string[] };

type WordState = {
  answer: string;
  checked: boolean;
  correct: boolean;
  basicErrors: string[];
  grammarErrors: LTError[];
  grammarChecking: boolean;
};

function initState(): WordState {
  return { answer: "", checked: false, correct: false, basicErrors: [], grammarErrors: [], grammarChecking: false };
}

function checkBasic(answer: string, word: string): string[] {
  const errors: string[] = [];
  if (answer.length === 0) return errors;
  const first = answer[0]!;
  if (first !== first.toUpperCase() || first === first.toLowerCase()) {
    errors.push("La question doit commencer par une majuscule.");
  }
  if (!answer.endsWith("?")) {
    errors.push("La question doit se terminer par un point d'interrogation.");
  }
  if (!answer.toLowerCase().includes(word.toLowerCase())) {
    errors.push(`Le mot « ${word} » doit être dans la question.`);
  }
  const lower = answer.toLowerCase();
  const hasInterrogative = INTERROGATIVE_WORDS.some((iw) => lower.includes(iw));
  if (!hasInterrogative) {
    errors.push("La question doit contenir un mot interrogatif (qui, quand, où, comment, combien, pourquoi…).");
  }
  return errors;
}

export function ExQuestionWrite({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const [words] = useState<VocabWord[]>(() => pickN(theme.words, isEval ? 2 : 4));
  const [states, setStates] = useState<Record<string, WordState>>(() =>
    Object.fromEntries(words.map((w) => [w.word, initState()]))
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(true); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const updated: Record<string, WordState> = {};

    words.forEach((w) => {
      const answer = (states[w.word]?.answer ?? "").trim();
      const basicErrors = checkBasic(answer, w.word);
      const ok = answer.length > 0 && basicErrors.length === 0;
      if (ok) correct++;
      updated[w.word] = {
        answer,
        checked: true,
        correct: ok,
        basicErrors,
        grammarErrors: [],
        grammarChecking: answer.length > 3,
      };
    });

    setStates(updated);
    onValidated(correct, words.length);

    words.forEach((w) => {
      const answer = updated[w.word]?.answer ?? "";
      if (answer.length <= 3) return;
      fetch("/api/check-grammar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: answer }),
      })
        .then(async (res) => {
          if (!res.ok) throw new Error("api");
          const data = await res.json();
          const errors: LTError[] = (data.matches ?? [])
            .filter((m: { rule?: { id: string } }) => !LT_IGNORE.has(m.rule?.id ?? ""))
            .map((m: { shortMessage?: string; message: string; replacements?: { value: string }[] }) => ({
              shortMessage: m.shortMessage || m.message,
              message: m.message,
              suggestions: (m.replacements ?? []).slice(0, 3).map((r) => r.value).filter(Boolean),
            }));
          setStates((prev) => ({
            ...prev,
            [w.word]: { ...prev[w.word]!, grammarErrors: errors, grammarChecking: false },
          }));
        })
        .catch(() => {
          setStates((prev) => ({
            ...prev,
            [w.word]: { ...prev[w.word]!, grammarChecking: false },
          }));
        });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 7}` : "Exercice 11";

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Écrivez une question avec le mot proposé. Utilisez un mot interrogatif (
        <strong className="font-bold text-[var(--color-accent-fr)]">qui</strong>,{" "}
        <strong className="font-bold text-[var(--color-accent-fr)]">quand</strong>,{" "}
        <strong className="font-bold text-[var(--color-accent-fr)]">où</strong>,{" "}
        <strong className="font-bold text-[var(--color-accent-fr)]">comment</strong>,{" "}
        <strong className="font-bold text-[var(--color-accent-fr)]">combien</strong>,{" "}
        <strong className="font-bold text-[var(--color-accent-fr)]">pourquoi</strong>…).
        Commencez par une majuscule et terminez par un point d&apos;interrogation.
      </p>
      <div className="space-y-4">
        {words.map((w, i) => {
          const s = states[w.word]!;
          const isClean = s.checked && !s.grammarChecking && s.basicErrors.length === 0 && s.grammarErrors.length === 0 && s.answer.length > 0;
          return (
            <div key={w.word} className="space-y-1.5">
              <p className="text-sm font-bold text-[var(--color-text-primary)]">
                <span className="mr-2 text-[var(--color-accent-fr)]">{i + 1}.</span>
                {w.article && <span className="font-normal text-[var(--color-text-secondary)]">{w.article} </span>}
                {w.word}
              </p>
              <input
                type="text"
                value={s.answer}
                onChange={(e) =>
                  setStates((prev) => ({
                    ...prev,
                    [w.word]: { ...initState(), answer: e.target.value },
                  }))
                }
                readOnly={s.checked}
                className="w-full border-b border-[var(--color-accent-fr)] bg-transparent py-1 text-sm text-[var(--color-text-primary)] outline-none"
              />
              {s.checked && s.grammarChecking && (
                <p className="animate-pulse text-xs text-[var(--color-text-secondary)]">Correction en cours…</p>
              )}
              {s.checked && !s.grammarChecking && (
                <ul className="space-y-0.5">
                  {s.basicErrors.map((err, ei) => (
                    <li key={`b${ei}`} className="text-xs text-amber-600 dark:text-amber-400">⚠ {err}</li>
                  ))}
                  {s.grammarErrors.map((err, ei) => (
                    <li key={`g${ei}`} className="flex flex-wrap items-baseline gap-1 text-xs">
                      <span className="text-amber-600 dark:text-amber-400">• {err.shortMessage}</span>
                      {err.suggestions.length > 0 && (
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                          → {err.suggestions.join(" / ")}
                        </span>
                      )}
                    </li>
                  ))}
                  {isClean && (
                    <li className="text-xs text-emerald-600 dark:text-emerald-400">✓ Aucune erreur détectée</li>
                  )}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

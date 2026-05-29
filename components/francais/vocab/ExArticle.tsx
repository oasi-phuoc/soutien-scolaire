"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import {
  ExerciseProps, normalizeText,
  WRONG_INPUT_CLS, WRONG_TEXT_CLS, WRONG_ANSWER_CLS,
} from "./vocabUtils";

type WordState = { answer: string; checked: boolean; correct: boolean; displayAnswer?: string };

function buildWordList(theme: import("@/lib/curriculum/vocabulary-data").VocabTheme): VocabWord[] {
  // Primary: words that already have an article
  const withArticle = theme.words.filter((w) => w.article);
  if (withArticle.length >= 4) return withArticle.slice(0, 10);

  // Fallback: extract country names from relatedWords (e.g. "la France" → article "la", word "France")
  const fromCountries: VocabWord[] = theme.words
    .map((w) => {
      const rw = w.relatedWords?.[0];
      if (!rw) return null;
      const m = rw.match(/^(le |la |l'|les )(.+)$/i);
      if (!m) return null;
      return { word: m[2]!, article: m[1]!.trimEnd() } as VocabWord;
    })
    .filter((w): w is VocabWord => w !== null);

  return fromCountries.slice(0, 10);
}

export function ExArticle({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const [words] = useState<VocabWord[]>(() => buildWordList(theme));
  const [states, setStates] = useState<Record<string, WordState>>(() =>
    Object.fromEntries(words.map((w) => [w.word, { answer: "", checked: false, correct: false }]))
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(words.length > 0); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    if (words.length === 0) { onValidated(0, 0); return; }
    let correct = 0;
    const updated: Record<string, WordState> = {};
    words.forEach((w) => {
      const userAns = states[w.word]?.answer ?? "";
      const expected = w.article ?? "";
      const userNorm = normalizeText(userAns);
      const expectedNorm = normalizeText(expected);
      // Elision applies only to singular articles (le/la → l'), not to "les"
      const isSingular = expected === "le" || expected === "la";
      const needsElision = isSingular && /^[aeiouhéèêëàâïîôùûœæ]/i.test(w.word);
      const ok =
        expectedNorm !== "" &&
        (userNorm === expectedNorm ||
          (needsElision && userNorm === normalizeText("l'")));
      const displayAnswer = needsElision ? "l'" : expected;
      if (ok) correct++;
      updated[w.word] = { answer: userAns, checked: true, correct: ok, displayAnswer };
    });
    setStates(updated);
    onValidated(correct, words.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 1}` : "Exercice 2";

  if (words.length === 0) {
    return (
      <div>
        <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
        <p className="text-sm text-[var(--color-text-secondary)]">Aucun mot avec article pour ce thème.</p>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Écrivez l&apos;article correct (le, la, les ou l&apos;).
      </p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {words.map((w, i) => {
          const s = states[w.word]!;
          return (
            <div key={w.word} className="flex items-center gap-2">
              <span className="shrink-0 text-sm font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
              <div className="flex min-w-0 flex-1 items-center gap-1.5">
                {s.checked && !s.correct ? (
                  <>
                    <span className={`text-sm ${WRONG_TEXT_CLS}`}>{s.answer || "—"}</span>
                    <span className={`text-sm ${WRONG_ANSWER_CLS}`}>{s.displayAnswer ?? w.article}</span>
                  </>
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
                    className={`w-16 border-b bg-transparent text-sm outline-none ${
                      s.checked && !s.correct
                        ? WRONG_INPUT_CLS
                        : "border-[var(--color-border-emphasis)]"
                    }`}
                    readOnly={s.checked && s.correct}
                  />
                )}
                <span className="truncate text-sm text-[var(--color-text-primary)]">{w.word}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

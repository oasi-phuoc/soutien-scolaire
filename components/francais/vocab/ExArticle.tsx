"use client";
import { useEffect, useState } from "react";
import type { VocabWord, VocabTheme } from "@/lib/curriculum/vocabulary-data";
import {
  ExerciseProps, shuffle, normalizeText,
} from "./vocabUtils";

type WordState = { answer: string; checked: boolean; correct: boolean; displayAnswer?: string };

function pluralForm(word: string): string {
  if (/[sxz]$/i.test(word)) return word;
  if (/eau$|au$/i.test(word)) return word + "x";
  if (/al$/i.test(word)) return word.slice(0, -2) + "aux";
  return word + "s";
}

function toDefiniteArticle(art: string, word: string): string {
  const a = normalizeText(art);
  const vowel = /^[aeiouhéèêëàâïîôùûœæ]/i.test(word);
  if (a === "un" || a === "le") return vowel ? "l'" : "le";
  if (a === "une" || a === "la") return vowel ? "l'" : "la";
  if (a === "des") return "les";
  return art; // already l' or les
}


function buildWordList(theme: VocabTheme): VocabWord[] {
  const result: VocabWord[] = [];

  for (const w of theme.words) {
    const rw = w.relatedWords?.[0];

    // Country name from relatedWords — only for themes where words have articles
    if (rw && w.article) {
      const m = rw.match(/^(le |la |l'|les )(.+)$/i);
      if (m) result.push({ word: m[2]!, article: m[1]!.trimEnd() });
    }

    // Singular form — always use definite article
    if (w.article) {
      result.push({ word: w.word, article: toDefiniteArticle(w.article, w.word) });
      // Plural masculine
      const plMasc = pluralForm(w.word);
      if (plMasc !== w.word) result.push({ word: plMasc, article: "les" });
    }

    // Feminine form — definite article
    if (w.feminine) {
      const femArt = w.article ? toDefiniteArticle(["un","le","l'"].includes(normalizeText(w.article)) ? "une" : w.article, w.feminine) : "la";
      result.push({ word: w.feminine, article: femArt });
      // Plural feminine
      const plFem = pluralForm(w.feminine);
      if (plFem !== w.feminine) result.push({ word: plFem, article: "les" });
    }
  }

  // Deduplicate by word, shuffle, limit
  const deduped = [...new Map(result.map((w) => [w.word, w])).values()];
  return shuffle(deduped).slice(0, 10);
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
      // Elision applies only to singular definite articles (le/la → l')
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
        Écrivez l&apos;article défini (le, la, l&apos;, les).
      </p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {words.map((w, i) => {
          const s = states[w.word]!;
          return (
            <div key={w.word} className="flex min-w-0 items-center gap-2 overflow-hidden">
              <span className="w-6 shrink-0 text-sm font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
              <div className="flex min-w-0 flex-1 items-center gap-1.5">
                {s.checked && !s.correct ? (
                  <div className="flex w-16 flex-col justify-center rounded-xl border border-amber-400 px-2 py-1">
                    <span className="text-[10px] leading-none text-amber-500 dark:text-amber-400">{s.answer || "—"}</span>
                    <span className="mt-0.5 text-[11px] leading-none font-medium text-zinc-900 dark:text-zinc-100">{s.displayAnswer ?? w.article ?? ""}</span>
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
                    className="h-8 w-16 rounded-xl border border-[var(--color-accent-fr)] bg-transparent px-2 text-center text-sm outline-none transition-colors focus:border-amber-500"
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

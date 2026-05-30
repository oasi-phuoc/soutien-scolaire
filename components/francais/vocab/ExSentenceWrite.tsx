"use client";
import { useEffect, useState } from "react";
import type { VocabTheme } from "@/lib/curriculum/vocabulary-data";
import { ExerciseProps, pickN } from "./vocabUtils";

const LT_IGNORE = new Set(["WHITESPACE_RULE", "FRENCH_WHITESPACE", "COMMA_PARENTHESIS_WHITESPACE", "UNPAIRED_BRACKETS"]);

type LTError = { shortMessage: string; message: string; suggestions: string[] };

type WordState = {
  answer: string;
  checked: boolean;
  correct: boolean;
  basicErrors: string[];
  grammarErrors: LTError[];
  grammarChecking: boolean;
};

type PromptWord = { word: string; displayArticle: string };

function initState(): WordState {
  return { answer: "", checked: false, correct: false, basicErrors: [], grammarErrors: [], grammarChecking: false };
}

function randomArticle(definite: string, word: string): string {
  const norm = definite.toLowerCase().replace(/['']/g, "'").trim();
  const vowelStart = /^[aeiouhéèêëàâïîôùûœæ]/i.test(word);
  const useDefinite = Math.random() < 0.5;
  if (norm === "le" || norm === "un") return useDefinite ? (vowelStart ? "l'" : "le") : "un";
  if (norm === "la" || norm === "une") return useDefinite ? (vowelStart ? "l'" : "la") : "une";
  if (norm === "l'") return useDefinite ? "l'" : (Math.random() < 0.5 ? "un" : "une");
  if (norm === "les" || norm === "des") return useDefinite ? "les" : "des";
  return definite;
}

function buildPool(theme: VocabTheme, count: number): PromptWord[] {
  const pool: Array<{ word: string; defArt: string }> = [];
  for (const w of theme.words) {
    const rw = w.relatedWords?.[0];
    if (rw && w.article) {
      const m = rw.match(/^(le |la |l'|les )(.+)$/i);
      if (m) pool.push({ word: m[2]!.trim(), defArt: m[1]!.trim() });
    }
    const defArtM = w.article ?? (rw ? "le" : "");
    if (defArtM) pool.push({ word: w.word, defArt: defArtM });
    if (w.feminine) {
      const defArtF = w.article === "le" || w.article === "un" ? "la" : (w.article ?? "la");
      pool.push({ word: w.feminine, defArt: defArtF });
    }
  }
  const deduped = [...new Map(pool.map((p) => [p.word, p])).values()];
  return pickN(deduped, count).map((p) => ({ word: p.word, displayArticle: randomArticle(p.defArt, p.word) }));
}

function checkBasic(answer: string, word: string): string[] {
  const errors: string[] = [];
  if (answer.length === 0) return errors;
  const first = answer[0]!;
  if (first !== first.toUpperCase() || first === first.toLowerCase()) errors.push("La phrase doit commencer par une majuscule.");
  if (!answer.endsWith(".")) errors.push("La phrase doit se terminer par un point.");
  if (!answer.toLowerCase().includes(word.toLowerCase())) errors.push(`Le mot « ${word} » doit être dans la phrase.`);
  return errors;
}

export function ExSentenceWrite({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber, exerciseNumber,
}: ExerciseProps) {
  const [prompts] = useState<PromptWord[]>(() => buildPool(theme, isEval ? 2 : 4));
  const [states, setStates] = useState<Record<string, WordState>>(() =>
    Object.fromEntries(prompts.map((p) => [p.word, initState()]))
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(true); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const updated: Record<string, WordState> = {};
    prompts.forEach((p) => {
      const answer = (states[p.word]?.answer ?? "").trim();
      const basicErrors = checkBasic(answer, p.word);
      const ok = answer.length > 0 && basicErrors.length === 0;
      if (ok) correct++;
      updated[p.word] = { answer, checked: true, correct: ok, basicErrors, grammarErrors: [], grammarChecking: answer.length > 3 };
    });
    setStates(updated);
    onValidated(correct, prompts.length);

    prompts.forEach((p) => {
      const answer = updated[p.word]?.answer ?? "";
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
          setStates((prev) => ({ ...prev, [p.word]: { ...prev[p.word]!, grammarErrors: errors, grammarChecking: false } }));
        })
        .catch(() => {
          setStates((prev) => ({ ...prev, [p.word]: { ...prev[p.word]!, grammarChecking: false } }));
        });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 6}` : `Exercice ${exerciseNumber ?? 10}`;

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Écrivez une phrase complète avec le mot proposé.<br />Commencez par une majuscule et terminez par un point.
      </p>
      <div className="space-y-4">
        {prompts.map((p, i) => {
          const s = states[p.word]!;
          const hasErrors = s.basicErrors.length > 0 || s.grammarErrors.length > 0;
          const isCheckedDone = s.checked && !s.grammarChecking;
          const articleDisplay = p.displayArticle.endsWith("'") ? p.displayArticle : `${p.displayArticle} `;
          return (
            <div key={p.word} className="space-y-0.5">
              <p className="text-sm font-bold text-[var(--color-text-primary)]">
                <span className="mr-2 text-[var(--color-accent-fr)]">{i + 1}.</span>
                <span className="font-normal text-[var(--color-text-secondary)]">{articleDisplay}</span>
                {p.word}
              </p>
              {isCheckedDone && hasErrors ? (
                <div className="border-b border-amber-400 py-1 text-center">
                  <p className="text-sm text-amber-600 line-through dark:text-amber-400">{s.answer || "—"}</p>
                  <ul className="mt-0.5 space-y-0.5">
                    {s.basicErrors.map((err, ei) => (
                      <li key={`b${ei}`} className="text-xs text-amber-600 dark:text-amber-400">{err}</li>
                    ))}
                    {s.grammarErrors.map((err, ei) => (
                      <li key={`g${ei}`} className="text-xs text-amber-600 dark:text-amber-400">
                        {err.shortMessage}
                        {err.suggestions.length > 0 && (
                          <span className="ml-1 font-semibold text-[var(--color-text-primary)]">→ {err.suggestions.join(" / ")}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <input
                  type="text"
                  value={s.answer}
                  onChange={(e) => setStates((prev) => ({ ...prev, [p.word]: { ...initState(), answer: e.target.value } }))}
                  readOnly={s.checked}
                  className="w-full border-b border-[var(--color-accent-fr)] bg-transparent py-1 text-center text-sm text-[var(--color-text-primary)] outline-none"
                />
              )}
              {s.checked && s.grammarChecking && (
                <p className="animate-pulse text-center text-xs text-[var(--color-text-secondary)]">Correction en cours…</p>
              )}
              {isCheckedDone && !hasErrors && s.answer.length > 0 && (
                <p className="text-center text-xs text-[var(--color-text-secondary)]">✓</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import {
  ExerciseProps, pickN, normalizeText,
} from "./vocabUtils";

type WordState = { answer: string; checked: boolean; correct: boolean };

/** Returns all accepted article forms for a word (definite + indefinite). */
function getValidArticles(w: VocabWord): string[] {
  if (!w.article) return [];
  const a = normalizeText(w.article);
  const vowelStart = /^[aeiouhéèêëàâïîôùûœæ]/i.test(w.word);

  if (a === "le" || a === "un") {
    const valid = ["le", "un"];
    if (vowelStart) valid.push("l'");
    return valid;
  }
  if (a === "la" || a === "une") {
    const valid = ["la", "une"];
    if (vowelStart) valid.push("l'");
    return valid;
  }
  if (a === "l'") {
    return ["l'", "un", "une"];
  }
  if (a === "les" || a === "des") {
    return ["les", "des"];
  }
  return [a];
}

/** Splits user input into article + word, handling elision (l'arbre). */
function parseUserInput(input: string): { article: string; word: string } | null {
  const trimmed = input.trim();
  const elisionMatch = trimmed.match(/^(l['']\s*)(.+)$/i);
  if (elisionMatch) {
    return { article: "l'", word: elisionMatch[2]!.trim() };
  }
  const spaceIdx = trimmed.indexOf(" ");
  if (spaceIdx === -1) return null;
  return { article: trimmed.slice(0, spaceIdx).trim(), word: trimmed.slice(spaceIdx + 1).trim() };
}

function checkAnswer(userAns: string, w: VocabWord): boolean {
  if (!userAns.trim()) return false;
  if (!w.article) {
    return normalizeText(userAns) === normalizeText(w.word);
  }
  const parsed = parseUserInput(userAns);
  if (!parsed) return false;
  if (normalizeText(parsed.word) !== normalizeText(w.word)) return false;
  return getValidArticles(w).includes(normalizeText(parsed.article));
}

/** Returns the definite article form with proper elision for display. */
function getCorrectDisplay(w: VocabWord): string {
  if (!w.article) return w.word;
  const vowelStart = /^[aeiouhéèêëàâïîôùûœæ]/i.test(w.word);
  const isSingularDef = w.article === "le" || w.article === "la";
  const art = isSingularDef && vowelStart ? "l'" : w.article;
  return art.endsWith("'") ? `${art}${w.word}` : `${art} ${w.word}`;
}

export function ExImageWrite({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
  exerciseNumber,
}: ExerciseProps) {
  const [words] = useState<VocabWord[]>(() => pickN(theme.words, 5));

  const imageFolder = theme.imageFolder ?? theme.section;
  function resolveImg(img?: string) {
    if (!img) return undefined;
    if (img.startsWith("/")) return img;
    return `/vocab/images/${imageFolder}/${img}`;
  }
  const [states, setStates] = useState<Record<string, WordState>>(() =>
    Object.fromEntries(words.map((w) => [w.word, { answer: "", checked: false, correct: false }]))
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(true); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const updated: Record<string, WordState> = {};
    words.forEach((w) => {
      const userAns = (states[w.word]?.answer ?? "").trim();
      const ok = checkAnswer(userAns, w);
      if (ok) correct++;
      updated[w.word] = { answer: userAns, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct, words.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 4}` : `Exercice ${exerciseNumber ?? 7}`;

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Regardez l&apos;image et écrivez le mot correspondant avec l&apos;article.
      </p>
      <div className="space-y-3">
        {words.map((w, i) => {
          const s = states[w.word]!;
          return (
            <div key={w.word} className="flex items-center gap-3">
              <span className="text-sm font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
              {resolveImg(w.image) ? (
                <img
                  src={resolveImg(w.image)}
                  alt=""
                  className="h-14 w-14 shrink-0 rounded object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              ) : (
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-[var(--color-bg-secondary)] text-xs text-[var(--color-text-tertiary)]">
                  {w.article} {w.word}
                </div>
              )}
              <div className="flex flex-1 items-center gap-1.5">
                {s.checked && !s.correct ? (
                  <p className="flex-1 text-sm">
                    <span className="text-amber-600 line-through dark:text-amber-400">{s.answer || "—"}</span>
                    {" "}
                    <span className="font-medium text-[var(--color-text-primary)]">{getCorrectDisplay(w)}</span>
                  </p>
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
                    className="w-full border-b border-[var(--color-accent-fr)] bg-transparent text-sm outline-none"
                    readOnly={s.checked && s.correct}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

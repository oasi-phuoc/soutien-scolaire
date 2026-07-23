"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import {
  ExerciseProps, pickN, normalizeText,
} from "./vocabUtils";
import { useEvalReveal } from "@/lib/eval-reveal-context";
import { resolveVocabImage } from "@/lib/curriculum/vocab-image";

type WordState = { answer: string; checked: boolean; correct: boolean };

/** Returns all accepted article forms for a given base article + word form. */
function validArticles(article: string, word: string): string[] {
  const a = normalizeText(article);
  const vowelStart = /^[aeiouhéèêëàâïîôùûœæ]/i.test(word);
  if (a === "le" || a === "un") {
    const v = ["le", "un"]; if (vowelStart) v.push("l'"); return v;
  }
  if (a === "la" || a === "une") {
    const v = ["la", "une"]; if (vowelStart) v.push("l'"); return v;
  }
  if (a === "l'") return ["l'", "un", "une"];
  if (a === "les" || a === "des") return ["les", "des"];
  return [a];
}

function femArticle(mascArt: string): string {
  const a = normalizeText(mascArt);
  if (a === "le" || a === "l'") return "la";
  if (a === "un") return "une";
  if (a === "les") return "les";
  if (a === "des") return "des";
  return mascArt;
}

/** Splits user input into article + word, handling elision (l'arbre). */
function parseUserInput(input: string): { article: string; word: string } | null {
  const trimmed = input.trim();
  const elisionMatch = trimmed.match(/^(l['']\s*)(.+)$/i);
  if (elisionMatch) return { article: "l'", word: elisionMatch[2]!.trim() };
  const spaceIdx = trimmed.indexOf(" ");
  if (spaceIdx === -1) return null;
  return { article: trimmed.slice(0, spaceIdx).trim(), word: trimmed.slice(spaceIdx + 1).trim() };
}

function checkForm(userAns: string, word: string, article?: string): boolean {
  if (!article) return normalizeText(userAns) === normalizeText(word);
  const parsed = parseUserInput(userAns);
  if (!parsed) return false;
  if (normalizeText(parsed.word) !== normalizeText(word)) return false;
  return validArticles(article, word).includes(normalizeText(parsed.article));
}

function checkAnswer(userAns: string, w: VocabWord): boolean {
  if (!userAns.trim()) return false;
  if (checkForm(userAns, w.word, w.article)) return true;
  if (w.feminine && w.article) {
    if (checkForm(userAns, w.feminine, femArticle(w.article))) return true;
  }
  return false;
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
    return resolveVocabImage(img, imageFolder);
  }
  const [states, setStates] = useState<Record<string, WordState>>(() =>
    Object.fromEntries(words.map((w) => [w.word, { answer: "", checked: false, correct: false }]))
  );
  const revealCorrection = useEvalReveal();
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
      <p className="eval-exercise-title mb-3 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Regardez et écrivez le mot correspondant avec l&apos;article défini ou indéfini.
      </p>
      <div className="space-y-3">
        {words.map((w, i) => {
          const s = states[w.word]!;
          return (
            <div key={w.word} className="flex items-center gap-3">
              <span className="text-sm font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded border border-[var(--color-border-default)] bg-white">
                {resolveImg(w.image) && (
                  <Image src={resolveImg(w.image)!} alt="" fill
                    className="object-cover"
                    sizes="56px" />
                )}
              </div>
              <div className="flex flex-1 min-w-0 items-center gap-1.5">
                {s.checked && !s.correct && revealCorrection ? (
                  <div className="h-8 flex flex-1 flex-col justify-center rounded-none border-0 border-b-2 border-amber-500 px-0">
                    <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{s.answer || "—"}</span>
                    <span className="text-xs font-bold leading-none text-amber-600">{getCorrectDisplay(w)}</span>
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
                    className="h-8 w-full rounded-none border-0 border-b-2 border-[var(--color-accent-fr)]/60 bg-transparent px-0 pb-0.5 text-sm outline-none transition-colors focus:border-[var(--color-accent-fr)]"
                    readOnly={s.checked}
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

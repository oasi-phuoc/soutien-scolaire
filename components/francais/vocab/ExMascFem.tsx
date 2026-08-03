"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import { ExerciseProps, pickN, normalizeText } from "./vocabUtils";
import { useEvalReveal } from "@/lib/eval-reveal-context";
import { usePrintQuestionLayout } from "@/components/print/PrintExerciseLayoutContext";

type WordState = { answer: string; checked: boolean; correct: boolean };
type WordEntry = { word: VocabWord; mascArt: string };

const VOWEL_RE = /^[aeiouhéèêëàâïîôùûœæ]/i;

function randomMascArt(w: VocabWord): string {
  const useDefinite = Math.random() < 0.5;
  if (useDefinite) return VOWEL_RE.test(w.word) ? "l'" : "le";
  return "un";
}

/** Valid feminine articles — matches the article type shown for the masculine. */
function validFemArts(feminine: string, mascArt: string): string[] {
  const vowelStart = VOWEL_RE.test(feminine);
  if (mascArt === "un") return vowelStart ? ["une", "l'"] : ["une"];
  return vowelStart ? ["l'", "la"] : ["la"];
}

/** Correct feminine display using the same article type as the masculine hint. */
function correctFemDisplay(feminine: string, mascArt: string): string {
  const vowelStart = VOWEL_RE.test(feminine);
  const art = mascArt === "un" ? "une" : (vowelStart ? "l'" : "la");
  return art.endsWith("'") ? `${art}${feminine}` : `${art} ${feminine}`;
}

/** Parse user input into article + word (handles elision). */
function parseInput(input: string): { article: string; word: string } | null {
  const t = input.trim();
  const elision = t.match(/^(l['']\s*)(.+)$/i);
  if (elision) return { article: "l'", word: elision[2]!.trim() };
  const sp = t.indexOf(" ");
  if (sp === -1) return null;
  return { article: t.slice(0, sp).trim(), word: t.slice(sp + 1).trim() };
}

function checkAnswer(userAns: string, feminine: string, mascArt: string): boolean {
  if (!userAns.trim()) return false;
  const parsed = parseInput(userAns);
  if (!parsed) return false;
  if (normalizeText(parsed.word) !== normalizeText(feminine)) return false;
  return validFemArts(feminine, mascArt).includes(normalizeText(parsed.article));
}

export function ExMascFem({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber, exerciseNumber,
}: ExerciseProps) {
  const { questionCount, listClass } = usePrintQuestionLayout(6);
  const [entries] = useState<WordEntry[]>(() =>
    pickN(theme.words.filter((w) => !!w.feminine), questionCount).map((w) => ({
      word: w,
      mascArt: randomMascArt(w),
    }))
  );

  const [states, setStates] = useState<Record<string, WordState>>(() =>
    Object.fromEntries(entries.map((e) => [e.word.word, { answer: "", checked: false, correct: false }]))
  );
  const revealCorrection = useEvalReveal();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(true); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const updated: Record<string, WordState> = {};
    entries.forEach(({ word: w, mascArt }) => {
      const userAns = (states[w.word]?.answer ?? "").trim();
      const ok = checkAnswer(userAns, w.feminine!, mascArt);
      if (ok) correct++;
      updated[w.word] = { answer: userAns, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct, entries.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const title = isEval
    ? `Évaluation — Exercice ${evalNumber ?? 7}`
    : `Exercice ${exerciseNumber ?? 7}`;

  return (
    <div>
      <p className="eval-exercise-title mb-3 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Mettez les mots au féminin avec l&apos;article.
      </p>
      <div className={listClass}>
        {entries.map(({ word: w, mascArt }, i) => {
          const s = states[w.word]!;
          const mascDisplay = mascArt.endsWith("'") ? `${mascArt}${w.word}` : `${mascArt} ${w.word}`;
          return (
            <div key={w.word} className="flex items-center gap-2">
              <span className="w-6 shrink-0 text-sm font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
              <span className="min-w-[7rem] shrink-0 text-sm text-[var(--color-text-secondary)]">
                {mascDisplay}
              </span>
              <span className="shrink-0 text-xs text-[var(--color-text-tertiary)]">→</span>
              {s.checked && !s.correct && revealCorrection ? (
                <div className="h-8 flex flex-1 min-w-0 flex-col justify-center rounded-none border-0 border-b-2 border-amber-500 px-0">
                  <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{s.answer || "—"}</span>
                  <span className="text-xs font-bold leading-none text-amber-600">{correctFemDisplay(w.feminine!, mascArt)}</span>
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
                  readOnly={s.checked}
                  className="h-8 flex-1 min-w-0 rounded-none border-0 border-b-2 border-[var(--color-accent-fr)]/60 bg-transparent px-0 pb-0.5 text-sm outline-none transition-colors focus:border-[var(--color-accent-fr)]"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

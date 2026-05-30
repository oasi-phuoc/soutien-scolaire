"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import { ExerciseProps, pickN, shuffle, normalizeText } from "./vocabUtils";

type LetterTile = { id: string; char: string };
type WordAnagram = {
  word: VocabWord;
  remaining: LetterTile[];
  answer: LetterTile[];
  checked: boolean;
  correct: boolean;
};

function makeTiles(word: string): LetterTile[] {
  return shuffle(word.split("").map((char, i) => ({ id: `${char}-${i}`, char })));
}

export function ExAnagram({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const [items, setItems] = useState<WordAnagram[]>(() =>
    pickN(theme.words, 5).map((w) => ({
      word: w,
      remaining: makeTiles(w.word),
      answer: [],
      checked: false,
      correct: false,
    }))
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(true); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const next = items.map((item) => {
      const built = item.answer.map((t) => t.char).join("");
      const ok = normalizeText(built) === normalizeText(item.word.word);
      if (ok) correct++;
      return { ...item, checked: true, correct: ok };
    });
    setItems(next);
    onValidated(correct, items.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  function addTile(itemIdx: number, tile: LetterTile) {
    setItems((prev) =>
      prev.map((item, i) =>
        i !== itemIdx
          ? item
          : {
              ...item,
              remaining: item.remaining.filter((t) => t.id !== tile.id),
              answer: [...item.answer, tile],
            }
      )
    );
  }

  function removeTile(itemIdx: number, tile: LetterTile) {
    setItems((prev) =>
      prev.map((item, i) =>
        i !== itemIdx
          ? item
          : {
              ...item,
              answer: item.answer.filter((t) => t.id !== tile.id),
              remaining: [...item.remaining, tile],
            }
      )
    );
  }

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 4}` : "Exercice 4";

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Cliquez sur les lettres pour former le mot.
      </p>
      <div className="space-y-5">
        {items.map((item, idx) => {
          const builtWord = item.answer.map((t) => t.char).join("");
          return (
            <div key={item.word.word}>
              {/* Row 1: number + answer line */}
              <div className="flex items-center gap-2">
                <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-fr)]">{idx + 1}.</span>
                {item.checked ? (
                  /* Correction in-place: strikethrough wrong + correct on same line */
                  <div className="flex min-h-[2rem] flex-1 items-center gap-2 border-b-2 border-amber-400/40 pb-0.5">
                    <span className="text-sm text-amber-500 line-through dark:text-amber-400">{builtWord || "—"}</span>
                    {!item.correct && (
                      <span className="text-sm font-bold text-[var(--color-text-primary)]">{item.word.word}</span>
                    )}
                  </div>
                ) : (
                  /* Answer zone with underline */
                  <div className="flex min-h-[2rem] flex-1 flex-wrap items-center gap-px border-b-2 border-[var(--color-accent-fr)]/50 pb-0.5">
                    {item.answer.length === 0 ? (
                      <span className="text-xs text-[var(--color-text-tertiary)]">…</span>
                    ) : (
                      item.answer.map((tile) => (
                        <button
                          key={tile.id}
                          type="button"
                          onClick={() => !item.checked && removeTile(idx, tile)}
                          className="text-sm font-bold text-[var(--color-accent-fr)] transition-opacity hover:opacity-50"
                        >
                          {tile.char}
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
              {/* Row 2: available letter tiles */}
              {!item.checked && (
                <div className="ml-7 mt-1.5 flex flex-wrap gap-1">
                  {item.remaining.map((tile) => (
                    <button
                      key={tile.id}
                      type="button"
                      onClick={() => addTile(idx, tile)}
                      className="flex h-8 min-w-[2rem] items-center justify-center rounded border border-[var(--color-border-default)] px-1.5 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-95"
                    >
                      {tile.char}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

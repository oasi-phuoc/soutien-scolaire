"use client";
import { useEffect, useState } from "react";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import { ExerciseProps, pickN, shuffle, normalizeText, WRONG_DISPLAY_INPUT_CLS, CORRECT_DISPLAY_INPUT_CLS } from "./vocabUtils";

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

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 3}` : "Exercice 3";

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
            <div key={item.word.word} className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
              {item.word.article && (
                <p className="mb-1 text-xs text-[var(--color-text-secondary)]">{item.word.article} ___</p>
              )}
              {/* Answer area */}
              <div className="mb-2 flex min-h-[2.5rem] flex-wrap gap-1 rounded border border-dashed border-[var(--color-border-default)] p-1.5">
                {item.answer.map((tile) => (
                  <button
                    key={tile.id}
                    type="button"
                    onClick={() => !item.checked && removeTile(idx, tile)}
                    className="flex h-8 min-w-[2rem] items-center justify-center rounded bg-[var(--color-accent-fr)]/15 px-1.5 text-sm font-bold text-[var(--color-accent-fr)] transition-colors hover:bg-[var(--color-accent-fr)]/25 active:scale-95"
                  >
                    {tile.char}
                  </button>
                ))}
              </div>
              {/* Remaining tiles */}
              <div className="flex flex-wrap gap-1">
                {item.remaining.map((tile) => (
                  <button
                    key={tile.id}
                    type="button"
                    onClick={() => !item.checked && addTile(idx, tile)}
                    className="flex h-8 min-w-[2rem] items-center justify-center rounded border border-[var(--color-border-default)] px-1.5 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-95"
                  >
                    {tile.char}
                  </button>
                ))}
              </div>
              {/* Correction */}
              {item.checked && !item.correct && (
                <div className="mt-1.5 flex items-center gap-1.5">
                  <input readOnly value={builtWord || "—"} className={`w-28 text-sm ${WRONG_DISPLAY_INPUT_CLS}`} />
                  <input readOnly value={item.word.word} className={`w-28 text-sm ${CORRECT_DISPLAY_INPUT_CLS}`} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import {
  ExerciseProps, pickN, shuffle, normalizeText, WRONG_BOX_CLS,
} from "./vocabUtils";

const WORD_LETTERS = ["a", "b", "c", "d", "e", "f"];

function ImgOrPlaceholder({ src, alt, placeholder }: { src?: string; alt: string; placeholder: string }) {
  const [failed, setFailed] = useState(false);
  if (src && !failed) {
    return <img src={src} alt={alt} onError={() => setFailed(true)} className="h-20 w-full rounded object-contain" />;
  }
  return (
    <div className="flex h-20 w-full items-center justify-center rounded bg-[var(--color-bg-secondary)] text-center text-xs text-[var(--color-text-tertiary)]">
      {placeholder}
    </div>
  );
}

type MatchState = { answer: string; checked: boolean; correct: boolean };

export function ExImageMatch({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const [{ words, shownCards }] = useState(() => {
    const picked = pickN(theme.words, 6);
    const subset = shuffle([...picked]).slice(0, 4);
    return { words: picked, shownCards: subset };
  });

  const [states, setStates] = useState<Record<string, MatchState>>(() =>
    Object.fromEntries(shownCards.map((w) => [w.word, { answer: "", checked: false, correct: false }]))
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(true); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const updated: Record<string, MatchState> = {};
    shownCards.forEach((w) => {
      const expectedIdx = words.findIndex((p) => p.word === w.word);
      const expected = WORD_LETTERS[expectedIdx] ?? "";
      const userAns = states[w.word]?.answer.trim() ?? "";
      const ok = normalizeText(userAns) === expected;
      if (ok) correct++;
      updated[w.word] = { answer: userAns, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct, shownCards.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  function handleSelect(cardWord: string, newValue: string) {
    setStates((prev) => {
      const oldValue = prev[cardWord]?.answer ?? "";
      const next = { ...prev };
      const clash = Object.entries(prev).find(([w, s]) => w !== cardWord && s.answer === newValue && newValue !== "");
      if (clash) {
        next[clash[0]] = { ...prev[clash[0]]!, answer: oldValue, checked: false, correct: false };
      }
      next[cardWord] = { ...prev[cardWord]!, answer: newValue, checked: false, correct: false };
      return next;
    });
  }

  const imageFolder = theme.imageFolder ?? theme.section;
  function resolveImg(img?: string) {
    if (!img) return undefined;
    if (img.startsWith("/")) return img;
    return `/vocab/images/${imageFolder}/${img}`;
  }

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 1}` : "Exercice 1";

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Associez chaque image au mot en choisissant la lettre correspondante.
      </p>
      {/* Word list — two columns, 6 words, lettered a–f */}
      <div className="mb-4 grid grid-cols-2 gap-x-6 gap-y-1">
        {words.map((w, i) => (
          <div key={w.word} className="flex items-baseline">
            <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-fr)]">{WORD_LETTERS[i]}.</span>
            <span className="text-sm text-[var(--color-text-primary)]">
              {w.article && <span className="text-[var(--color-text-secondary)]">{w.article} </span>}
              {w.word}
            </span>
          </div>
        ))}
      </div>
      {/* Image cards — 4 cards, numbered 1-4 with letter select */}
      <div className="grid grid-cols-2 gap-3">
        {shownCards.map((w, cardIdx) => {
          const s = states[w.word]!;
          const correctIdx = words.findIndex((p) => p.word === w.word);
          return (
            <div
              key={w.word}
              className="flex flex-col items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-2"
            >
              <ImgOrPlaceholder
                src={resolveImg(w.image)}
                alt={w.word}
                placeholder={w.relatedWords?.[0] ?? `${w.article ?? ""} ${w.word}`.trim()}
              />
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-bold text-[var(--color-accent-fr)]">{cardIdx + 1}.</span>
                {s.checked && !s.correct ? (
                  <div className={`h-8 w-20 justify-center ${WRONG_BOX_CLS}`}>
                    <span className="text-sm text-amber-600 line-through dark:text-amber-400">{s.answer || "—"}</span>
                    <span className="text-sm font-medium text-[var(--color-text-primary)]">{WORD_LETTERS[correctIdx]}</span>
                  </div>
                ) : (
                  <select
                    value={s.answer}
                    disabled={s.checked && s.correct}
                    onChange={(e) => handleSelect(w.word, e.target.value)}
                    className="h-8 w-20 appearance-none rounded border border-[var(--color-accent-fr)]/40 bg-[var(--color-accent-fr)]/10 text-center [text-align-last:center] text-sm text-[var(--color-accent-fr)] outline-none"
                  >
                    <option value="">—</option>
                    {WORD_LETTERS.map((letter) => (
                      <option key={letter} value={letter}>{letter}</option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

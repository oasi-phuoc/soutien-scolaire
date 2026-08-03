"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ExerciseProps, pickN, shuffle, normalizeText,
} from "./vocabUtils";
import { useEvalReveal } from "@/lib/eval-reveal-context";
import { resolveVocabImage } from "@/lib/curriculum/vocab-image";
import { usePrintQuestionLayout } from "@/components/print/PrintExerciseLayoutContext";

const WORD_LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

const LETTER_INPUT_CLS =
  "h-8 w-10 rounded-none border-0 border-b-2 border-[var(--color-accent-fr)]/60 " +
  "bg-transparent px-0 pb-0.5 text-center text-sm outline-none " +
  "transition-colors focus:border-[var(--color-accent-fr)]";

/** Cadre 4:3 — hauteur ≈ 2× l’ancien h-14/h-16 (≈7–8 rem). */
const IMG_FRAME_CLS =
  "relative mx-auto aspect-[4/3] h-[7rem] w-auto overflow-hidden rounded border border-[var(--color-border-default)] bg-white sm:h-[8rem]";

function ImgOrPlaceholder({ src, alt, placeholder }: { src?: string; alt: string; placeholder: string }) {
  const [failed, setFailed] = useState(false);
  if (src && !failed) {
    return (
      <div className={IMG_FRAME_CLS}>
        <Image src={src} alt={alt} fill
          className="object-contain object-center p-0.5"
          onError={() => setFailed(true)}
          sizes="180px" />
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-center text-center text-[10px] text-[var(--color-text-tertiary)] ${IMG_FRAME_CLS}`}>
      {placeholder}
    </div>
  );
}

type MatchState = { answer: string; checked: boolean; correct: boolean };

export function ExImageMatch({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber,
}: ExerciseProps) {
  const { questionCount } = usePrintQuestionLayout(6);
  const [{ words, shownCards }] = useState(() => {
    const picked = pickN(theme.words, questionCount);
    const subset = shuffle([...picked]).slice(0, 4);
    return { words: picked, shownCards: subset };
  });

  const [states, setStates] = useState<Record<string, MatchState>>(() =>
    Object.fromEntries(shownCards.map((w) => [w.word, { answer: "", checked: false, correct: false }]))
  );
  const revealCorrection = useEvalReveal();

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

  function handleChange(cardWord: string, raw: string) {
    const letter = raw.replace(/[^a-zA-Z]/g, "").slice(-1).toLowerCase();
    setStates((prev) => ({
      ...prev,
      [cardWord]: { ...prev[cardWord]!, answer: letter, checked: false, correct: false },
    }));
  }

  const imageFolder = theme.imageFolder ?? theme.section;
  function resolveImg(img?: string) {
    return resolveVocabImage(img, imageFolder);
  }

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 1}` : "Exercice 1";

  return (
    <div>
      <p className="eval-exercise-title mb-3 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Associez chaque image au mot en écrivant la lettre correspondante.
      </p>
      {/* Word list — two columns, lettered */}
      <div className="mb-3 grid grid-cols-2 gap-x-6 gap-y-1">
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
      {/* Image cards — grille 2×2, cadre 4:3, image entière */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-8">
        {shownCards.map((w, cardIdx) => {
          const s = states[w.word]!;
          const correctIdx = words.findIndex((p) => p.word === w.word);
          return (
            <div
              key={w.word}
              className="flex flex-col items-center gap-2"
            >
              <ImgOrPlaceholder
                src={resolveImg(w.image)}
                alt={w.word}
                placeholder={w.relatedWords?.[0] ?? `${w.article ?? ""} ${w.word}`.trim()}
              />
              <div className="flex items-center justify-center gap-1.5">
                <span className="text-sm font-bold text-[var(--color-accent-fr)]">{cardIdx + 1}.</span>
                {s.checked && !s.correct && revealCorrection ? (
                  <div className="flex h-8 w-10 flex-col items-center justify-center rounded-none border-0 border-b-2 border-amber-500">
                    <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{s.answer || "—"}</span>
                    <span className="text-xs font-bold leading-none text-amber-600">{WORD_LETTERS[correctIdx]}</span>
                  </div>
                ) : (
                  <input
                    type="text"
                    inputMode="text"
                    maxLength={1}
                    value={s.answer}
                    onChange={(e) => handleChange(w.word, e.target.value)}
                    readOnly={s.checked}
                    className={LETTER_INPUT_CLS}
                    aria-label={`Lettre pour l'image ${cardIdx + 1}`}
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

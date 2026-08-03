"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ExerciseProps, pickN, shuffle, normalizeText, WRONG_BOX_CLS,
} from "./vocabUtils";
import { AppSelect } from "@/components/ui/AppSelect";
import { useEvalReveal } from "@/lib/eval-reveal-context";
import { resolveVocabImage } from "@/lib/curriculum/vocab-image";
import { usePrintQuestionLayout } from "@/components/print/PrintExerciseLayoutContext";

const WORD_LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

function ImgOrPlaceholder({ src, alt, placeholder }: { src?: string; alt: string; placeholder: string }) {
  const [failed, setFailed] = useState(false);
  if (src && !failed) {
    return (
      <div className="relative w-full overflow-hidden rounded border border-[var(--color-border-default)] bg-white" style={{ aspectRatio: "4/3" }}>
        <Image src={src} alt={alt} fill
          className="object-cover"
          onError={() => setFailed(true)}
          sizes="(max-width: 640px) 45vw, 140px" />
      </div>
    );
  }
  return (
    <div className="flex w-full items-center justify-center rounded border border-[var(--color-border-default)] bg-white text-center text-xs text-[var(--color-text-tertiary)]" style={{ aspectRatio: "4/3" }}>
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
    return resolveVocabImage(img, imageFolder);
  }

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 1}` : "Exercice 1";

  return (
    <div>
      <p className="eval-exercise-title mb-3 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
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
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {shownCards.map((w, cardIdx) => {
          const s = states[w.word]!;
          const correctIdx = words.findIndex((p) => p.word === w.word);
          return (
            <div
              key={w.word}
              className="flex flex-col items-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-1.5"
            >
              <ImgOrPlaceholder
                src={resolveImg(w.image)}
                alt={w.word}
                placeholder={w.relatedWords?.[0] ?? `${w.article ?? ""} ${w.word}`.trim()}
              />
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-bold text-[var(--color-accent-fr)]">{cardIdx + 1}.</span>
                {s.checked && !s.correct && revealCorrection ? (
                  <div className={`h-8 w-20 ${WRONG_BOX_CLS}`}>
                    <span className="text-[9px] leading-none text-amber-600 line-through">{s.answer || "—"}</span>
                    <span className="mt-0.5 text-[10px] leading-none font-medium text-[var(--color-text-primary)]">{WORD_LETTERS[correctIdx]}</span>
                  </div>
                ) : (
                  <AppSelect
                    value={s.answer}
                    onChange={(v) => handleSelect(w.word, v)}
                    options={WORD_LETTERS.slice(0, words.length).map((letter) => ({ value: letter, label: letter }))}
                    placeholder=""
                    emptyOption={{ value: "", label: "" }}
                    disabled={s.checked}
                    size="sm"
                    className="w-20"
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

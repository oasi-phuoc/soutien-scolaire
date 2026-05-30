"use client";
import { useEffect, useState } from "react";
import { ExerciseProps, shuffle } from "./vocabUtils";

type Token = { id: string; text: string };

type PhraseState = {
  remaining: Token[];
  answer: Token[];
  checked: boolean;
  correct: boolean;
};

function tokenize(sentence: string): Token[] {
  return sentence.split(/\s+/).filter(Boolean).map((t, i) => ({ id: `${t}-${i}`, text: t }));
}

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/['']/g, "'").replace(/\s+/g, " ");
}

export function ExWordOrder({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber, exerciseNumber,
}: ExerciseProps) {
  const [phrases] = useState<string[]>(() =>
    (theme.sentences ?? []).slice(0, 5).map((s) => s.sentence.replace("___", s.answer))
  );

  const [states, setStates] = useState<PhraseState[]>(() =>
    phrases.map((p) => ({ remaining: shuffle(tokenize(p)), answer: [], checked: false, correct: false }))
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(true); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const next = states.map((s, i) => {
      const built = s.answer.map((t) => t.text).join(" ");
      const ok = normalize(built) === normalize(phrases[i] ?? "");
      if (ok) correct++;
      return { ...s, checked: true, correct: ok };
    });
    setStates(next);
    onValidated(correct, phrases.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  function addToken(pi: number, token: Token) {
    setStates((prev) => prev.map((s, i) => i !== pi ? s : {
      ...s, remaining: s.remaining.filter((t) => t.id !== token.id), answer: [...s.answer, token],
    }));
  }

  function removeToken(pi: number, token: Token) {
    setStates((prev) => prev.map((s, i) => i !== pi ? s : {
      ...s, answer: s.answer.filter((t) => t.id !== token.id), remaining: [...s.remaining, token],
    }));
  }

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 9}` : `Exercice ${exerciseNumber ?? 9}`;

  if (phrases.length === 0) {
    return (
      <div>
        <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
        <p className="text-sm text-[var(--color-text-secondary)]">Pas de phrases disponibles pour ce thème.</p>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Cliquez sur les mots pour former une phrase.
        Un mot commence par une majuscule et un mot contient la ponctuation.
      </p>
      <div className="space-y-5">
        {states.map((s, idx) => {
          const builtPhrase = s.answer.map((t) => t.text).join(" ");
          return (
            <div key={idx}>
              {/* Row 1: number + answer line */}
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-5 shrink-0 text-sm font-bold text-[var(--color-accent-fr)]">{idx + 1}.</span>
                {s.checked && !s.correct ? (
                  <div className="flex flex-1 flex-col border-b-2 border-amber-400 pb-0.5">
                    <span className="text-sm text-amber-500 line-through dark:text-amber-400">{builtPhrase || "—"}</span>
                    <span className="text-sm font-bold text-[var(--color-text-primary)]">{phrases[idx]}</span>
                  </div>
                ) : (
                  <div className="flex min-h-[2rem] flex-1 flex-wrap items-center gap-1 border-b-2 border-[var(--color-accent-fr)]/50 pb-0.5">
                    {s.answer.length === 0 ? (
                      <span className="text-xs text-[var(--color-text-tertiary)]">…</span>
                    ) : (
                      s.answer.map((token) => (
                        <button
                          key={token.id}
                          type="button"
                          onClick={() => !s.checked && removeToken(idx, token)}
                          className="rounded bg-[var(--color-accent-fr)]/10 px-1.5 py-0.5 text-sm font-medium text-[var(--color-accent-fr)] transition-opacity hover:opacity-50"
                        >
                          {token.text}
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
              {/* Row 2: available word tiles */}
              {!s.checked && (
                <div className="ml-7 mt-1.5 flex flex-wrap gap-1.5">
                  {s.remaining.map((token) => (
                    <button
                      key={token.id}
                      type="button"
                      onClick={() => addToken(idx, token)}
                      className="rounded border border-[var(--color-border-default)] px-2 py-1 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-95"
                    >
                      {token.text}
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

"use client";
import { useEffect } from "react";
import type { VocabTheme } from "@/lib/curriculum/vocabulary-data";
import { playWord, SoundIcon } from "./vocabUtils";

interface Props {
  theme: VocabTheme;
  onCanValidateChange: (can: boolean) => void;
}

export function VocabCards({ theme, onCanValidateChange }: Props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(false); }, []);

  return (
    <div>
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[var(--color-accent-fr)]">
        {theme.code} — {theme.title}
      </p>
      <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
        {theme.words.length} mots à apprendre
      </p>
      <div className="grid grid-cols-3 gap-3">
        {theme.words.map((w) => (
          <div
            key={w.word}
            className="flex flex-col items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3"
          >
            {w.image ? (
              <img src={w.image} alt={w.word} className="h-14 w-full rounded object-cover" />
            ) : (
              <div className="h-14 w-full rounded bg-[var(--color-bg-secondary)]" aria-hidden />
            )}
            <p className="text-center text-sm font-bold leading-tight text-[var(--color-text-primary)]">
              {w.article && (
                <span className="mr-0.5 font-normal text-[var(--color-text-secondary)]">
                  {w.article}
                </span>
              )}
              {w.word}
            </p>
            <button
              type="button"
              onClick={() => playWord(w)}
              className="flex h-6 w-6 items-center justify-center rounded-full text-[var(--color-accent-fr)] transition-colors hover:bg-[var(--color-accent-fr)]/10 active:scale-90"
              aria-label={`Écouter ${w.word}`}
            >
              <SoundIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

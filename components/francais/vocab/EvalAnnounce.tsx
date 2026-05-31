"use client";
import { useEffect } from "react";
import type { VocabTheme } from "@/lib/curriculum/vocabulary-data";

interface Props {
  theme: VocabTheme;
  onCanValidateChange: (can: boolean) => void;
  onStart: () => void;
}

export function EvalAnnounce({ theme, onCanValidateChange, onStart }: Props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(false); }, []);

  return (
    <div className="flex flex-col items-center py-6 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent-fr)]/15 text-3xl">
        ✏️
      </div>
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[var(--color-accent-fr)]">
        Évaluation
      </p>
      <h2 className="mb-3 text-xl font-bold text-[var(--color-text-primary)]">
        Prêt(e) pour l&apos;évaluation&nbsp;?
      </h2>
      <p className="mb-3 max-w-xs text-sm text-[var(--color-text-secondary)]">
        Vous avez terminé la partie entraînement pour{" "}
        <strong className="text-[var(--color-text-primary)]">{theme.title}</strong>.
      </p>
      <p className="mb-8 max-w-xs text-sm text-[var(--color-text-secondary)]">
        L&apos;évaluation comporte 6 exercices notés et est chronométrée.{" "}
        <strong className="text-[var(--color-text-primary)]">Vous avez 10 minutes</strong>{" "}
        pour compléter l&apos;évaluation.
      </p>
      <button
        type="button"
        onClick={onStart}
        className="w-full max-w-xs rounded-[var(--radius-lg)] bg-[var(--color-accent-fr)] px-6 py-3 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90 active:opacity-80"
      >
        Commencer
      </button>
    </div>
  );
}

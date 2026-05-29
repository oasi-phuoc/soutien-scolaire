"use client";
import { useEffect } from "react";
import type { VocabTheme } from "@/lib/curriculum/vocabulary-data";

interface Props {
  theme: VocabTheme;
  onCanValidateChange: (can: boolean) => void;
}

export function EvalAnnounce({ theme, onCanValidateChange }: Props) {
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
      <p className="mb-6 max-w-xs text-sm text-[var(--color-text-secondary)]">
        L&apos;évaluation comporte 6 exercices notés et est chronométrée.{" "}
        <strong className="text-[var(--color-text-primary)]">Vous avez 10 minutes</strong>{" "}
        pour compléter l&apos;évaluation.
      </p>
      <div className="w-full max-w-xs space-y-2 text-left">
        {[
          "Écrire l'article",
          "Compléter les lettres manquantes",
          "Compléter des phrases",
          "Écrire le mot (image)",
          "Dictée",
          "Écrire une phrase",
        ].map((ex, i) => (
          <div key={ex} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-fr)]/15 text-xs font-bold text-[var(--color-accent-fr)]">
              {i + 1}
            </span>
            {ex}
          </div>
        ))}
      </div>
    </div>
  );
}

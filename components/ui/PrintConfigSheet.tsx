"use client";

import { useEffect, useState } from "react";

export interface PrintConfig {
  exercises: boolean;
  evalMode: boolean;
  pointsPerExercise: number;
}

interface PrintConfigSheetProps {
  onClose: () => void;
  onPrint: (config: PrintConfig) => void;
  hasExercises?: boolean;
  accentColor?: string;
}

export function PrintConfigSheet({
  onClose,
  onPrint,
  hasExercises = false,
  accentColor = "var(--color-theme)",
}: PrintConfigSheetProps) {
  const [exercises, setExercises] = useState(true);
  const [evalMode, setEvalMode] = useState(false);
  const [points, setPoints] = useState(1);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[var(--color-bg-primary)]">
      <header className="shrink-0 border-b border-[var(--color-border-default)] bg-[var(--color-bg-primary)]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 w-full max-w-xl items-center gap-4 px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            aria-label="Retour"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition-opacity hover:opacity-85"
            style={{ background: accentColor }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <div>
            <h1 className="text-lg font-bold text-[var(--color-text-primary)]">
              Imprimer / Enregistrer en PDF
            </h1>
            <p className="mt-0.5 text-sm text-[var(--color-text-secondary)]">
              Choisissez le contenu à inclure
            </p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
      <main className="mx-auto w-full max-w-xl px-5 pb-6 pt-8">
        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-wide" style={{ color: accentColor }}>
            Contenu du document
          </h2>

        {/* Options */}
        <div className="space-y-5 border-y border-[var(--color-border-default)] py-5">
          {/* Theory — always included */}
          <div className="flex min-h-14 items-center gap-4 opacity-60">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">Théorie</p>
              <p className="text-xs text-[var(--color-text-secondary)]">Toujours incluse</p>
            </div>
          </div>

          {/* Exercises toggle */}
          {hasExercises && (
            <label className="flex min-h-14 cursor-pointer items-center gap-4">
              <div
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors"
                style={{
                  borderColor: exercises ? accentColor : "var(--color-border-default)",
                  background: exercises ? accentColor : "transparent",
                }}
              >
                {exercises && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                    <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <input
                type="checkbox"
                checked={exercises}
                onChange={(e) => setExercises(e.target.checked)}
                className="sr-only"
              />
              <div>
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  Exercices d&apos;entraînement
                </p>
              </div>
            </label>
          )}

          {/* Eval mode toggle */}
          <label className="flex min-h-14 cursor-pointer items-center gap-4">
            <div
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors"
              style={{
                borderColor: evalMode ? accentColor : "var(--color-border-default)",
                background: evalMode ? accentColor : "transparent",
              }}
            >
              {evalMode && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <input
              type="checkbox"
              checked={evalMode}
              onChange={(e) => setEvalMode(e.target.checked)}
              className="sr-only"
            />
            <div>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">Mode évaluation</p>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Attribue des points à chaque exercice
              </p>
            </div>
          </label>

          {/* Points per exercise — only when eval mode is on */}
          {evalMode && (
            <div className="ml-10 flex items-center gap-3">
              <label htmlFor="print-points" className="text-sm text-[var(--color-text-secondary)]">
                Points par exercice :
              </label>
              <input
                id="print-points"
                type="text"
                inputMode="numeric"
                value={points}
                onChange={(e) => {
                  const v = parseInt(e.target.value.replace(/[^0-9]/g, "")) || 1;
                  setPoints(Math.max(1, Math.min(20, v)));
                }}
                className="h-10 w-16 rounded-lg border border-[var(--color-border-default)] bg-transparent px-2 text-center text-base text-[var(--color-text-primary)] outline-none focus:border-current"
                style={{ color: accentColor }}
              />
            </div>
          )}
        </div>

        </div>
      </main>
      </div>

      {/* Print button — sticky footer always visible */}
      <div className="shrink-0 border-t border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-5 py-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
        <div className="mx-auto w-full max-w-xl">
          <button
            type="button"
            onClick={() =>
              onPrint({
                exercises: hasExercises ? exercises : false,
                evalMode,
                pointsPerExercise: points,
              })
            }
            className="min-h-12 w-full rounded-xl py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: accentColor }}
          >
            Imprimer
          </button>
        </div>
      </div>
    </div>
  );
}

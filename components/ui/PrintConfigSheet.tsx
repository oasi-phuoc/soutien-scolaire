"use client";

import { useState } from "react";

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/30"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-t-2xl border border-[var(--color-border-default)] border-b-0 bg-[var(--color-bg-primary)] p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle */}
        <div className="mb-5">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-[var(--color-border-default)]" />
          <h3 className="text-base font-bold text-[var(--color-text-primary)]">
            Imprimer / Enregistrer en PDF
          </h3>
          <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">
            Choisissez le contenu à inclure
          </p>
        </div>

        {/* Options */}
        <div className="mb-5 space-y-4">
          {/* Theory — always included */}
          <div className="flex items-start gap-3 opacity-60">
            <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]">
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
            <label className="flex cursor-pointer items-start gap-3">
              <div
                className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors"
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
          <label className="flex cursor-pointer items-start gap-3">
            <div
              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors"
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
            <div className="ml-7 flex items-center gap-2">
              <span className="text-xs text-[var(--color-text-secondary)]">
                Points par exercice :
              </span>
              <input
                type="text"
                inputMode="numeric"
                value={points}
                onChange={(e) => {
                  const v = parseInt(e.target.value.replace(/[^0-9]/g, "")) || 1;
                  setPoints(Math.max(1, Math.min(20, v)));
                }}
                className="w-12 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-2 py-0.5 text-center text-sm text-[var(--color-text-primary)]"
              />
            </div>
          )}
        </div>

        {/* Print button */}
        <button
          type="button"
          onClick={() =>
            onPrint({
              exercises: hasExercises ? exercises : false,
              evalMode,
              pointsPerExercise: points,
            })
          }
          className="w-full rounded-xl py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: accentColor }}
        >
          Imprimer
        </button>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export interface PrintExercise {
  id: string;
  label: string;
}

export interface ExercisePrintSelection {
  id: string;
  included: boolean;
  occurrences: number;
}

export interface PrintConfig {
  theory: boolean;
  evalMode: boolean;
  pointsPerExercise: number;
  exerciseSelection: ExercisePrintSelection[];
}

interface PrintConfigSheetProps {
  onClose: () => void;
  onPrint: (config: PrintConfig) => void;
  exercises?: PrintExercise[];
  accentColor?: string;
}

function CheckBox({
  checked,
  onChange,
  accent,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  accent: string;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors"
      style={{
        borderColor: checked ? accent : "var(--color-border-default)",
        background: checked ? accent : "transparent",
      }}
    >
      {checked && (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

function Counter({
  value,
  onChange,
  min = 1,
  max = 10,
  accent,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--color-border-default)] text-sm font-bold text-[var(--color-text-secondary)] transition-opacity disabled:opacity-30"
        aria-label="Moins"
      >−</button>
      <span
        className="min-w-[2rem] text-center text-sm font-semibold tabular-nums"
        style={{ color: accent }}
      >
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--color-border-default)] text-sm font-bold text-[var(--color-text-secondary)] transition-opacity disabled:opacity-30"
        aria-label="Plus"
      >+</button>
    </div>
  );
}

export function PrintConfigSheet({
  onClose,
  onPrint,
  exercises = [],
  accentColor = "var(--color-theme)",
}: PrintConfigSheetProps) {
  const [evalMode, setEvalMode] = useState(false);
  const [points, setPoints] = useState(5);
  const [theory, setTheory] = useState(true);
  const [selection, setSelection] = useState<ExercisePrintSelection[]>(() =>
    exercises.map((ex) => ({ id: ex.id, included: true, occurrences: 1 }))
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);

  const setIncluded = (id: string, included: boolean) =>
    setSelection((prev) => prev.map((s) => s.id === id ? { ...s, included } : s));

  const setOccurrences = (id: string, occurrences: number) =>
    setSelection((prev) => prev.map((s) => s.id === id ? { ...s, occurrences } : s));

  const handlePrint = () =>
    onPrint({ theory, evalMode, pointsPerExercise: points, exerciseSelection: selection });

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[var(--color-bg-primary)]">
      {/* Header */}
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

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <main className="mx-auto w-full max-w-xl px-5 pb-6 pt-6">

          {/* ── Mode évaluation ── */}
          <section className="mb-5">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: accentColor }}>
              Mode
            </h2>
            <div className="rounded-xl border border-[var(--color-border-default)] divide-y divide-[var(--color-border-default)]">
              <div className="flex min-h-14 cursor-pointer items-center gap-4 px-4">
                <CheckBox checked={evalMode} onChange={setEvalMode} accent={accentColor} />
                <button
                  type="button"
                  className="flex-1 text-left"
                  onClick={() => setEvalMode((v) => !v)}
                >
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">Mode évaluation</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">Affiche un barème sur le PDF</p>
                </button>
              </div>
              {evalMode && (
                <div className="flex items-center gap-3 px-4 py-3">
                  <span className="flex-1 text-sm text-[var(--color-text-secondary)]">Points par exercice</span>
                  <Counter value={points} onChange={setPoints} min={1} max={20} accent={accentColor} />
                </div>
              )}
            </div>
          </section>

          {/* ── Théorie ── */}
          <section className="mb-5">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: accentColor }}>
              Théorie
            </h2>
            <div className="rounded-xl border border-[var(--color-border-default)]">
              <div className="flex min-h-14 cursor-pointer items-center gap-4 px-4">
                <CheckBox checked={theory} onChange={setTheory} accent={accentColor} />
                <button
                  type="button"
                  className="flex-1 text-left"
                  onClick={() => setTheory((v) => !v)}
                >
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">Inclure la théorie</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    {theory ? "La leçon sera incluse dans le PDF" : "Seulement les exercices"}
                  </p>
                </button>
              </div>
            </div>
          </section>

          {/* ── Exercices ── */}
          {exercises.length > 0 && (
            <section>
              <h2 className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: accentColor }}>
                Exercices
              </h2>
              <div className="rounded-xl border border-[var(--color-border-default)] divide-y divide-[var(--color-border-default)]">
                {exercises.map((ex) => {
                  const sel = selection.find((s) => s.id === ex.id)!;
                  return (
                    <div key={ex.id} className="px-4 py-3">
                      <div className="flex items-center gap-4">
                        <CheckBox
                          checked={sel.included}
                          onChange={(v) => setIncluded(ex.id, v)}
                          accent={accentColor}
                        />
                        <button
                          type="button"
                          className="flex-1 text-left"
                          onClick={() => setIncluded(ex.id, !sel.included)}
                        >
                          <p className={`text-sm font-medium ${sel.included ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)] line-through"}`}>
                            {ex.label}
                          </p>
                        </button>
                      </div>
                      {sel.included && (
                        <div className="mt-3 flex items-center justify-between pl-10">
                          <span className="text-xs text-[var(--color-text-secondary)]">Récurrences</span>
                          <Counter
                            value={sel.occurrences}
                            onChange={(v) => setOccurrences(ex.id, v)}
                            min={1}
                            max={10}
                            accent={accentColor}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </main>
      </div>

      {/* Sticky print button */}
      <div className="shrink-0 border-t border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-5 py-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
        <div className="mx-auto w-full max-w-xl">
          <button
            type="button"
            onClick={handlePrint}
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

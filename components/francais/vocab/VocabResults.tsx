"use client";

interface Props {
  evalScores: Array<{ correct: number; total: number }>;
  grade: number;
  passingGrade: number;
  selectedResultIdx: number | null;
  onSelect: (i: number | null) => void;
}

const EVAL_LABELS = [
  "Article",
  "Lettres manquantes",
  "Phrases à compléter",
  "Mot (image)",
  "Dictée",
  "Phrase libre",
  "Question libre",
];

export function VocabResults({ evalScores, grade, passingGrade, selectedResultIdx, onSelect }: Props) {
  const totalCorrect = evalScores.reduce((s, e) => s + e.correct, 0);
  const totalItems = evalScores.reduce((s, e) => s + e.total, 0);
  const passed = grade >= passingGrade;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Résultats de l&apos;évaluation</h2>

      {/* Per-exercise breakdown */}
      <ul className="space-y-2">
        {evalScores.map((row, i) => {
          const color =
            row.correct === row.total
              ? "text-green-600"
              : row.correct > 0
                ? "text-amber-600"
                : "text-red-500";
          const isSelected = selectedResultIdx === i;
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => onSelect(isSelected ? null : i)}
                className={`flex w-full items-center gap-3 rounded-[var(--radius-lg)] border px-4 py-3 text-left transition-colors ${
                  isSelected
                    ? "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10"
                    : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] hover:border-[var(--color-accent-fr)]/60"
                }`}
              >
                <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-fr)]">{i + 1}</span>
                <span className="flex-1 text-sm text-[var(--color-text-primary)]">
                  {EVAL_LABELS[i] ?? `Exercice ${i + 1}`}
                </span>
                <span className={`shrink-0 text-sm font-bold tabular-nums ${color}`}>
                  {row.correct}/{row.total}
                </span>
                <svg
                  className={`h-3 w-3 shrink-0 text-[var(--color-text-secondary)] transition-transform ${isSelected ? "rotate-90" : ""}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Final grade */}
      <div className={`rounded-[var(--radius-lg)] border-2 p-6 text-center ${
        passed
          ? "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/5"
          : "border-red-400 bg-red-50 dark:bg-red-900/10"
      }`}>
        <p className="text-xs uppercase tracking-wide text-[var(--color-text-secondary)]">Note</p>
        <p className="text-5xl font-bold text-[var(--color-text-primary)]">{grade.toFixed(1)}</p>
        <p className="text-sm text-[var(--color-text-secondary)]">sur 6 · {totalCorrect}/{totalItems} pts</p>
        <p className={`mt-3 text-base font-bold ${passed ? "text-[var(--color-accent-fr)]" : "text-red-500"}`}>
          {passed ? "✓ Réussi" : "✗ À améliorer"}
        </p>
        <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
          Seuil de réussite : {passingGrade.toFixed(1)}/6
        </p>
      </div>
    </div>
  );
}

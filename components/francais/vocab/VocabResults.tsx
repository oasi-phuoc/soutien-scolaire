"use client";

interface Props {
  evalScores: Array<{ correct: number; total: number }>;
  grade: number;
  passingGrade: number;
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

export function VocabResults({ evalScores, grade, passingGrade }: Props) {
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
          return (
            <li
              key={i}
              className="flex items-center justify-between rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3"
            >
              <span className="text-sm text-[var(--color-text-primary)]">
                {EVAL_LABELS[i] ?? `Exercice ${i + 1}`}
              </span>
              <span className={`text-sm font-bold ${color}`}>
                {row.correct}/{row.total}
              </span>
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

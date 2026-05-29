"use client";

interface Props {
  evalScores: Array<{ correct: number; total: number }>;
  passed: boolean;
  percentage: number;
}

const EVAL_LABELS = [
  "Article",
  "Lettres manquantes",
  "Phrases à compléter",
  "Mot (image)",
  "Dictée",
  "Phrase libre",
];

export function VocabResults({ evalScores, passed, percentage }: Props) {
  return (
    <div className="flex flex-col items-center py-4">
      <div
        className={`mb-3 flex h-20 w-20 items-center justify-center rounded-full text-4xl ${
          passed
            ? "bg-[var(--color-accent-fr)]/15"
            : "bg-amber-100 dark:bg-amber-900/20"
        }`}
      >
        {passed ? "🎉" : "📚"}
      </div>
      <p
        className={`mb-1 text-3xl font-bold ${
          passed ? "text-[var(--color-accent-fr)]" : "text-amber-600 dark:text-amber-400"
        }`}
      >
        {percentage}%
      </p>
      <p className="mb-1 text-base font-bold text-[var(--color-text-primary)]">
        {passed ? "Félicitations !" : "Continuez vos efforts !"}
      </p>
      <p className="mb-6 text-sm text-[var(--color-text-secondary)]">
        {passed
          ? "Vous avez réussi l'évaluation. Leçon complétée !"
          : `Score insuffisant. Il faut au moins 60% pour valider. (${percentage}% obtenu)`}
      </p>
      {/* Score breakdown */}
      <div className="w-full space-y-2">
        {evalScores.map((s, i) => {
          const pct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
          return (
            <div key={i} className="flex items-center gap-3 text-sm">
              <span className="w-40 text-[var(--color-text-secondary)]">
                {EVAL_LABELS[i] ?? `Exercice ${i + 1}`}
              </span>
              <div className="flex-1 overflow-hidden rounded-full bg-[var(--color-bg-secondary)] h-2">
                <div
                  className={`h-full rounded-full ${
                    pct >= 60 ? "bg-[var(--color-accent-fr)]" : "bg-amber-400"
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="w-20 text-right text-[var(--color-text-secondary)]">
                {s.correct}/{s.total}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

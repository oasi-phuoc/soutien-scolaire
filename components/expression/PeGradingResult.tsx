import { rubricForPeExercise } from "@/lib/curriculum/content/communication/pe-grading-rubrics";
import type { ExerciseGrading, SubmissionExercise } from "@/lib/curriculum/content/communication/expression-submission-types";

function formatPoints(value: number): string {
  return Number.isInteger(value) ? String(value) : value.toLocaleString("fr-CH", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

export function PeGradingResult({
  exercise,
  grading,
}: {
  exercise: SubmissionExercise;
  grading?: ExerciseGrading;
}) {
  const rubric = rubricForPeExercise(exercise.kind, exercise.maxPoints);
  if (!rubric || !grading) return null;

  const scoreMap = new Map(grading.criteria.map((entry) => [entry.id, entry.points]));

  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--color-theme)]/20 bg-[var(--color-theme-light)]/20 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-[var(--color-text-primary)]">Points attribués</p>
        <p className="text-sm font-bold text-[var(--color-theme)]">
          {grading.total.toLocaleString("fr-CH")} / {exercise.maxPoints} pts
        </p>
      </div>
      <ul className="space-y-2">
        {rubric.criteria.map((criterion) => (
          <li key={criterion.id} className="flex items-start justify-between gap-3 text-sm">
            <span className="text-[var(--color-text-primary)]">
              <span className="font-semibold">{criterion.label}</span>
              <span className="mt-0.5 block text-xs text-[var(--color-text-secondary)]">{criterion.description}</span>
            </span>
            <span className="shrink-0 font-bold text-[var(--color-theme)]">
              {formatPoints(scoreMap.get(criterion.id) ?? 0)} pt
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

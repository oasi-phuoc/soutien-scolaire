"use client";

import { rubricForPeExercise, rubricMaxPoints } from "@/lib/curriculum/content/communication/pe-grading-rubrics";
import { AppSelect } from "@/components/ui/AppSelect";
import type { ExerciseGrading, SubmissionExercise } from "@/lib/curriculum/content/communication/expression-submission-types";

function formatPoints(value: number): string {
  return Number.isInteger(value) ? String(value) : value.toLocaleString("fr-CH", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

export function PeGradingRubric({
  exercise,
  grading,
  onChange,
}: {
  exercise: SubmissionExercise;
  grading?: ExerciseGrading;
  onChange: (grading: ExerciseGrading) => void;
}) {
  const rubric = rubricForPeExercise(exercise.kind, exercise.maxPoints);
  if (!rubric) return null;

  const current = new Map((grading?.criteria ?? []).map((entry) => [entry.id, entry.points]));
  const rubricDef = rubric;
  const cap = exercise.maxPoints > 0 ? exercise.maxPoints : rubricMaxPoints(rubricDef);

  function setCriterion(id: string, points: number) {
    const criteria = rubricDef.criteria.map((criterion) => ({
      id: criterion.id,
      points: criterion.id === id ? points : (current.get(criterion.id) ?? 0),
    }));
    const total = Math.min(cap, criteria.reduce((sum, entry) => sum + entry.points, 0));
    onChange({ exerciseId: exercise.id, criteria, total });
  }

  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-theme-light)]/10 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-[var(--color-text-primary)]">Grille de notation</p>
        <p className="text-sm font-bold text-[var(--color-theme)]">
          {(grading?.total ?? 0).toLocaleString("fr-CH")} / {exercise.maxPoints} pts
        </p>
      </div>
      <div className="space-y-3">
        {rubricDef.criteria.map((criterion) => (
          <label key={criterion.id} className="block rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-3 py-2.5">
            <span className="block text-sm font-semibold text-[var(--color-text-primary)]">{criterion.label}</span>
            <span className="mt-0.5 block text-xs text-[var(--color-text-secondary)]">{criterion.description}</span>
            <AppSelect
              value={String(current.get(criterion.id) ?? 0)}
              onChange={(v) => setCriterion(criterion.id, Number(v))}
              options={criterion.options.map((option) => ({
                value: String(option),
                label: `${formatPoints(option)} pt${option > 1 ? "s" : ""}`,
              }))}
              className="mt-2 w-full"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export function sumGradingTotal(exercises: ExerciseGrading[]): number {
  return exercises.reduce((sum, exercise) => sum + exercise.total, 0);
}

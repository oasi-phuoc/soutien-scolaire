"use client";

import type { Exercise, GrammarLesson, TheoryBlock } from "@/lib/curriculum/grammar-data";

/**
 * Éditeur structuré léger pour grammaire / conjugaison :
 * métadonnées + JSON des blocs théorie et exercices.
 */
export function GrammarLessonFields({
  value,
  setValue,
}: {
  value: unknown;
  setValue: (next: unknown, history?: "debounce" | "immediate") => void;
}) {
  const lesson = value as GrammarLesson & { theory2?: TheoryBlock[]; midExercises?: Exercise[] };

  function patch(partial: Record<string, unknown>, history: "debounce" | "immediate" = "debounce") {
    setValue({ ...lesson, ...partial }, history);
  }

  function theoryJson(blocks: TheoryBlock[]) {
    return JSON.stringify(blocks, null, 2);
  }

  function exercisesJson(exercises: Exercise[]) {
    return JSON.stringify(exercises, null, 2);
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-xs">
          <span className="mb-1 block font-semibold text-amber-950">Titre</span>
          <input
            type="text"
            value={lesson.title ?? ""}
            onChange={(e) => patch({ title: e.target.value })}
            className="w-full rounded-md border border-amber-200 bg-white px-2 py-1.5 text-sm"
          />
        </label>
        <label className="block text-xs">
          <span className="mb-1 block font-semibold text-amber-950">Code</span>
          <input
            type="text"
            value={lesson.code ?? ""}
            onChange={(e) => patch({ code: e.target.value })}
            className="w-full rounded-md border border-amber-200 bg-white px-2 py-1.5 text-sm"
          />
        </label>
        <label className="block text-xs">
          <span className="mb-1 block font-semibold text-amber-950">Slug</span>
          <input
            type="text"
            value={lesson.slug ?? ""}
            onChange={(e) => patch({ slug: e.target.value })}
            className="w-full rounded-md border border-amber-200 bg-white px-2 py-1.5 text-sm"
          />
        </label>
        <label className="block text-xs">
          <span className="mb-1 block font-semibold text-amber-950">Niveau</span>
          <input
            type="text"
            value={lesson.level ?? ""}
            onChange={(e) => patch({ level: e.target.value })}
            className="w-full rounded-md border border-amber-200 bg-white px-2 py-1.5 text-sm"
          />
        </label>
      </div>

      <label className="block text-xs">
        <span className="mb-1 block font-semibold text-amber-950">
          Théorie (JSON — blocs de mise en forme)
        </span>
        <textarea
          value={theoryJson(lesson.theory ?? [])}
          onChange={(e) => {
            try {
              const parsed = JSON.parse(e.target.value) as TheoryBlock[];
              patch({ theory: parsed });
            } catch {
              /* keep typing */
            }
          }}
          spellCheck={false}
          className="min-h-[160px] w-full rounded-lg border border-amber-200 bg-white p-2 font-mono text-[11px]"
        />
      </label>

      <label className="block text-xs">
        <span className="mb-1 block font-semibold text-amber-950">
          Exercices (JSON)
        </span>
        <textarea
          value={exercisesJson(lesson.exercises ?? [])}
          onChange={(e) => {
            try {
              const parsed = JSON.parse(e.target.value) as Exercise[];
              patch({ exercises: parsed });
            } catch {
              /* keep typing */
            }
          }}
          spellCheck={false}
          className="min-h-[180px] w-full rounded-lg border border-amber-200 bg-white p-2 font-mono text-[11px]"
        />
      </label>

      {lesson.evalExercises && (
        <label className="block text-xs">
          <span className="mb-1 block font-semibold text-amber-950">
            Exercices d&apos;évaluation (JSON)
          </span>
          <textarea
            value={exercisesJson(lesson.evalExercises)}
            onChange={(e) => {
              try {
                const parsed = JSON.parse(e.target.value) as Exercise[];
                patch({ evalExercises: parsed });
              } catch {
                /* keep typing */
              }
            }}
            spellCheck={false}
            className="min-h-[140px] w-full rounded-lg border border-amber-200 bg-white p-2 font-mono text-[11px]"
          />
        </label>
      )}
    </div>
  );
}

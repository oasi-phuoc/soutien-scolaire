"use client";

import type { MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";

/**
 * Éditeur maths : titre / paragraphes / blocs de théorie / exercices (JSON).
 */
export function MathLessonFields({
  value,
  setValue,
}: {
  value: unknown;
  setValue: (next: unknown, history?: "debounce" | "immediate") => void;
}) {
  const lesson = value as MathSubmoduleLesson;

  function patch(partial: Record<string, unknown>, history: "debounce" | "immediate" = "debounce") {
    setValue({ ...lesson, ...partial }, history);
  }

  const titleFr = lesson.theory?.title?.fr ?? "";
  const paragraphsFr = (lesson.theory?.paragraphs?.fr ?? []).join("\n");
  const blocksJson = JSON.stringify(lesson.theory?.blocks ?? [], null, 2);
  const exercisesJson = JSON.stringify(lesson.exercises ?? [], null, 2);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-xs">
          <span className="mb-1 block font-semibold text-amber-950">Sous-module</span>
          <input
            type="text"
            value={lesson.submoduleId ?? ""}
            onChange={(e) => patch({ submoduleId: e.target.value })}
            className="w-full rounded-md border border-amber-200 bg-white px-2 py-1.5 text-sm"
          />
        </label>
        <label className="block text-xs">
          <span className="mb-1 block font-semibold text-amber-950">Code</span>
          <input
            type="text"
            value={lesson.submoduleCode ?? ""}
            onChange={(e) => patch({ submoduleCode: e.target.value })}
            className="w-full rounded-md border border-amber-200 bg-white px-2 py-1.5 text-sm"
          />
        </label>
      </div>

      <label className="block text-xs">
        <span className="mb-1 block font-semibold text-amber-950">Titre (FR)</span>
        <input
          type="text"
          value={titleFr}
          onChange={(e) =>
            patch({
              theory: {
                ...lesson.theory,
                title: { ...(lesson.theory?.title ?? {}), fr: e.target.value },
              },
            })
          }
          className="w-full rounded-md border border-amber-200 bg-white px-2 py-1.5 text-sm"
        />
      </label>

      <label className="block text-xs">
        <span className="mb-1 block font-semibold text-amber-950">
          Paragraphes (un par ligne)
        </span>
        <textarea
          value={paragraphsFr}
          onChange={(e) =>
            patch({
              theory: {
                ...lesson.theory,
                paragraphs: {
                  ...(lesson.theory?.paragraphs ?? {}),
                  fr: e.target.value.split("\n"),
                },
              },
            })
          }
          className="min-h-[100px] w-full rounded-lg border border-amber-200 bg-white p-2 text-sm"
        />
      </label>

      <label className="block text-xs">
        <span className="mb-1 block font-semibold text-amber-950">
          Blocs de mise en forme (JSON — heading, section, table…)
        </span>
        <textarea
          value={blocksJson}
          onChange={(e) => {
            try {
              const blocks = JSON.parse(e.target.value) as unknown[];
              patch({
                theory: {
                  ...lesson.theory,
                  blocks,
                },
              });
            } catch {
              /* keep typing */
            }
          }}
          spellCheck={false}
          className="min-h-[180px] w-full rounded-lg border border-amber-200 bg-white p-2 font-mono text-[11px]"
        />
      </label>

      <label className="block text-xs">
        <span className="mb-1 block font-semibold text-amber-950">Exercices (JSON)</span>
        <textarea
          value={exercisesJson}
          onChange={(e) => {
            try {
              const exercises = JSON.parse(e.target.value) as unknown[];
              patch({ exercises });
            } catch {
              /* keep typing */
            }
          }}
          spellCheck={false}
          className="min-h-[160px] w-full rounded-lg border border-amber-200 bg-white p-2 font-mono text-[11px]"
        />
      </label>
    </div>
  );
}

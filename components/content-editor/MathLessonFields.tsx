"use client";

import type { MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";
import { MathRichBlocksEditor } from "./MathRichBlocksEditor";

const inputCls =
  "w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-2.5 py-2 text-sm outline-none focus:border-[var(--color-theme)]";
const labelCls = "mb-1 block text-xs font-semibold text-[var(--color-theme-muted)]";

/**
 * Éditeur maths structuré : métadonnées + blocs de théorie (visuels) + exercices (JSON avancé).
 */
export function MathLessonFields({
  value,
  setValue,
}: {
  value: unknown;
  setValue: (next: unknown, history?: "debounce" | "immediate") => void;
}) {
  const lesson = value as MathSubmoduleLesson;

  function patch(
    partial: Record<string, unknown>,
    history: "debounce" | "immediate" = "debounce",
  ) {
    setValue({ ...lesson, ...partial }, history);
  }

  const titleFr = lesson.theory?.title?.fr ?? "";
  const paragraphsFr = (lesson.theory?.paragraphs?.fr ?? []).join("\n");
  const blocks = (lesson.theory?.blocks ?? []) as MathSubmoduleLesson["theory"]["blocks"];
  const exercisesJson = JSON.stringify(lesson.exercises ?? [], null, 2);

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          <span className={labelCls}>Sous-module</span>
          <input
            type="text"
            value={lesson.submoduleId ?? ""}
            onChange={(e) => patch({ submoduleId: e.target.value })}
            className={inputCls}
          />
        </label>
        <label className="block text-sm">
          <span className={labelCls}>Code</span>
          <input
            type="text"
            value={lesson.submoduleCode ?? ""}
            onChange={(e) => patch({ submoduleCode: e.target.value })}
            className={inputCls}
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className={labelCls}>Titre principal</span>
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
          className={inputCls}
        />
      </label>

      <label className="block text-sm">
        <span className={labelCls}>Paragraphes d&apos;intro (un par ligne)</span>
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
          className={`min-h-[88px] ${inputCls}`}
        />
      </label>

      <div>
        <p className={`${labelCls} mb-2`}>Contenu — blocs de théorie</p>
        <MathRichBlocksEditor
          blocks={blocks ?? []}
          onChange={(next) =>
            patch(
              {
                theory: {
                  ...lesson.theory,
                  blocks: next,
                },
              },
              "immediate",
            )
          }
        />
      </div>

      <details className="rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/40 p-3">
        <summary className="cursor-pointer text-xs font-semibold text-[var(--color-text-secondary)]">
          Exercices (JSON avancé — {Array.isArray(lesson.exercises) ? lesson.exercises.length : 0})
        </summary>
        <textarea
          value={exercisesJson}
          onChange={(e) => {
            try {
              const exercises = JSON.parse(e.target.value) as unknown[];
              patch({ exercises }, "immediate");
            } catch {
              /* keep typing */
            }
          }}
          spellCheck={false}
          className="mt-2 min-h-[120px] w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white p-2 font-mono text-[11px] outline-none focus:border-[var(--color-theme)]"
        />
      </details>
    </div>
  );
}

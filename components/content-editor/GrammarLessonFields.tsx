"use client";

import { useState } from "react";
import type { Exercise, GrammarLesson, TheoryBlock } from "@/lib/curriculum/grammar-data";
import { GrammarTheoryBlocksEditor } from "./GrammarTheoryBlocksEditor";

const labelCls = "mb-1 block text-xs font-semibold text-[var(--color-theme-muted)]";
const inputCls =
  "w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-2.5 py-2 text-sm outline-none focus:border-[var(--color-theme)]";
const areaCls =
  "w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-2.5 py-2 text-sm outline-none focus:border-[var(--color-theme)]";

const EXERCISE_TYPE_LABELS: Record<string, string> = {
  qcm: "QCM",
  fill: "Texte à trous",
  fill_select: "Choix dans la phrase",
  match: "Association",
  write: "Écriture",
  trueFalse: "Vrai / Faux",
  order: "Ordre",
  classify: "Classement",
  word_order: "Ordre des mots",
  color_highlight: "Surlignage",
  clock_read: "Lecture d’horloge",
  tag2: "Genre / nombre",
};

function exerciseTypeLabel(type: string) {
  return EXERCISE_TYPE_LABELS[type] ?? type;
}

/** Items / pool payload for the collapsible technical JSON (excludes title/instruction). */
function exerciseItemsPayload(ex: Exercise): unknown {
  const { title: _t, instruction: _i, transInstruction: _tr, type: _ty, ...rest } = ex as Exercise &
    Record<string, unknown>;
  return rest;
}

function mergeExerciseItems(ex: Exercise, itemsPayload: unknown): Exercise {
  if (!itemsPayload || typeof itemsPayload !== "object" || Array.isArray(itemsPayload)) {
    return ex;
  }
  return {
    ...ex,
    ...(itemsPayload as Record<string, unknown>),
    type: ex.type,
    title: ex.title,
    instruction: ex.instruction,
  } as Exercise;
}

function ExerciseListEditor({
  exercises,
  onChange,
  sectionTitle,
}: {
  exercises: Exercise[];
  onChange: (next: Exercise[]) => void;
  sectionTitle: string;
}) {
  const [openJson, setOpenJson] = useState<Record<number, boolean>>({});

  const updateAt = (i: number, next: Exercise) =>
    onChange(exercises.map((e, j) => (j === i ? next : e)));

  return (
    <div>
      <p className={`${labelCls} mb-2`}>
        {sectionTitle} ({exercises.length})
      </p>
      <div className="space-y-2">
        {exercises.map((ex, i) => {
          const itemsJson = JSON.stringify(exerciseItemsPayload(ex), null, 2);
          const isOpen = !!openJson[i];
          return (
            <div
              key={i}
              className="rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white p-2.5"
            >
              <div className="mb-2 flex flex-wrap items-center gap-1.5">
                <span className="rounded-md bg-[var(--color-theme-light)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-theme-muted)]">
                  Exercice {i + 1}
                </span>
                <span className="rounded border border-[var(--color-border-default)] px-1.5 py-0.5 text-[10px] font-semibold text-[var(--color-text-secondary)]">
                  {exerciseTypeLabel(ex.type)}
                </span>
              </div>
              <div className="space-y-2">
                <label className="block">
                  <span className={labelCls}>Titre</span>
                  <input
                    type="text"
                    value={ex.title ?? ""}
                    onChange={(e) => updateAt(i, { ...ex, title: e.target.value })}
                    className={inputCls}
                  />
                </label>
                <label className="block">
                  <span className={labelCls}>Consigne</span>
                  <textarea
                    value={ex.instruction ?? ""}
                    onChange={(e) => updateAt(i, { ...ex, instruction: e.target.value })}
                    className={`min-h-[56px] ${areaCls}`}
                  />
                </label>
                <details
                  open={isOpen}
                  onToggle={(e) =>
                    setOpenJson((prev) => ({
                      ...prev,
                      [i]: (e.target as HTMLDetailsElement).open,
                    }))
                  }
                  className="rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/40 p-2"
                >
                  <summary className="cursor-pointer text-xs font-semibold text-[var(--color-text-secondary)]">
                    Détails techniques (JSON)
                  </summary>
                  <textarea
                    value={itemsJson}
                    spellCheck={false}
                    onChange={(e) => {
                      try {
                        const parsed = JSON.parse(e.target.value) as unknown;
                        updateAt(i, mergeExerciseItems(ex, parsed));
                      } catch {
                        /* keep typing */
                      }
                    }}
                    className="mt-2 min-h-[100px] w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white p-2 font-mono text-[11px] outline-none focus:border-[var(--color-theme)]"
                  />
                </details>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Éditeur structuré pour grammaire / conjugaison :
 * métadonnées + blocs théorie visuels + listes d’exercices.
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

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          <span className={labelCls}>Titre</span>
          <input
            type="text"
            value={lesson.title ?? ""}
            onChange={(e) => patch({ title: e.target.value })}
            className={inputCls}
          />
        </label>
        <label className="block text-sm">
          <span className={labelCls}>Code</span>
          <input
            type="text"
            value={lesson.code ?? ""}
            onChange={(e) => patch({ code: e.target.value })}
            className={inputCls}
          />
        </label>
        <label className="block text-sm">
          <span className={labelCls}>Niveau</span>
          <select
            value={lesson.level ?? "A1"}
            onChange={(e) => patch({ level: e.target.value })}
            className={inputCls}
          >
            <option value="A1">A1</option>
            <option value="A2">A2</option>
          </select>
        </label>
        <label className="block text-sm">
          <span className={labelCls}>Slug</span>
          <input
            type="text"
            value={lesson.slug ?? ""}
            onChange={(e) => patch({ slug: e.target.value })}
            className={inputCls}
          />
        </label>
      </div>

      <div>
        <p className={`${labelCls} mb-2`}>Théorie</p>
        <GrammarTheoryBlocksEditor
          blocks={lesson.theory ?? []}
          onChange={(theory) => patch({ theory }, "immediate")}
        />
      </div>

      {Array.isArray(lesson.theory2) && (
        <div>
          <p className={`${labelCls} mb-2`}>Théorie (partie 2)</p>
          <GrammarTheoryBlocksEditor
            blocks={lesson.theory2}
            onChange={(theory2) => patch({ theory2 }, "immediate")}
          />
        </div>
      )}

      <ExerciseListEditor
        sectionTitle="Exercices"
        exercises={lesson.exercises ?? []}
        onChange={(exercises) => patch({ exercises }, "immediate")}
      />

      {Array.isArray(lesson.midExercises) && lesson.midExercises.length > 0 && (
        <ExerciseListEditor
          sectionTitle="Exercices intermédiaires"
          exercises={lesson.midExercises}
          onChange={(midExercises) => patch({ midExercises }, "immediate")}
        />
      )}

      {Array.isArray(lesson.evalExercises) && (
        <ExerciseListEditor
          sectionTitle="Exercices d’évaluation"
          exercises={lesson.evalExercises}
          onChange={(evalExercises) => patch({ evalExercises }, "immediate")}
        />
      )}
    </div>
  );
}

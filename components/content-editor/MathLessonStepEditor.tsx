"use client";

import { useState } from "react";
import type {
  MathExerciseItem,
  MathRichBlock,
  MathSubmoduleLesson,
} from "@/lib/curriculum/content/math/math-a1-types";
import { MathRichBlocksEditor } from "./MathRichBlocksEditor";

const inputCls =
  "w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-3 py-2.5 text-sm outline-none focus:border-[var(--color-theme)]";
const labelCls =
  "mb-1 block text-xs font-semibold text-[var(--color-theme-muted)]";

const BLOCK_LABELS: Record<string, string> = {
  heading: "Titre",
  highlight: "Sous-titre coloré",
  plain: "Paragraphe",
  note: "Note",
  example: "Exemple",
  section: "Encadré (lignes)",
  bullets: "Liste à puces",
  rule: "Règle",
  table: "Tableau",
  theory_tabs: "Onglets",
  theory_toggle: "Basculer A/B",
  svg: "Image SVG",
  svg_row: "Rangée d’images",
  shape_explorer: "Explorateur de formes",
  mult_table: "Table de multiplication",
  div_table: "Table de division",
  power_table: "Table des puissances",
  mul_step_cards: "Étapes multiplication",
  mul2_step_cards: "Étapes multiplication 2 chiffres",
  div_step_cards: "Étapes division",
  add_step_cards: "Étapes addition/soustraction",
  add_sub_toggle_cards: "Étapes +/−",
};

function blockLabel(type: string) {
  return BLOCK_LABELS[type] ?? "Bloc spécial";
}

function blockPreview(block: MathRichBlock): string {
  if ("fr" in block && typeof block.fr === "string" && block.fr.trim())
    return block.fr.trim().slice(0, 60);
  if ("titleFr" in block && typeof block.titleFr === "string" && block.titleFr)
    return block.titleFr.slice(0, 60);
  if ("labelFr" in block && typeof block.labelFr === "string" && block.labelFr)
    return block.labelFr.slice(0, 60);
  if (block.type === "theory_tabs")
    return block.tabs.map((t) => t.label).join(" · ").slice(0, 60);
  if (block.type === "table")
    return block.headersFr.join(" / ").slice(0, 60);
  return blockLabel(block.type);
}

type StepId =
  | { kind: "info" }
  | { kind: "intro" }
  | { kind: "block"; index: number }
  | { kind: "exercise"; index: number };

const ADDABLE_TYPES = [
  "heading",
  "highlight",
  "plain",
  "section",
  "bullets",
  "note",
  "example",
  "rule",
  "table",
  "theory_tabs",
] as const;

function emptyBlock(type: (typeof ADDABLE_TYPES)[number]): MathRichBlock {
  switch (type) {
    case "heading":
      return { type: "heading", fr: "Nouveau titre", black: true };
    case "highlight":
      return { type: "highlight", fr: "Sous-titre" };
    case "plain":
      return { type: "plain", fr: "" };
    case "note":
      return { type: "note", fr: "" };
    case "example":
      return { type: "example", fr: "" };
    case "section":
      return { type: "section", labelFr: "", itemsFr: [""] };
    case "bullets":
      return { type: "bullets", labelFr: "Liste", itemsFr: [""] };
    case "rule":
      return { type: "rule", titleFr: "Règle", itemsFr: [""] };
    case "table":
      return {
        type: "table",
        headersFr: ["Colonne 1", "Colonne 2"],
        rows: [["", ""]],
        accentHeader: true,
      };
    case "theory_tabs":
      return {
        type: "theory_tabs",
        tabs: [{ label: "Onglet 1", blocks: [{ type: "plain", fr: "" }] }],
      };
  }
}

function emptyExercise(index: number): MathExerciseItem {
  return {
    id: `ex-${Date.now()}-${index}`,
    promptFr: "",
    type: "short_text",
    acceptable: [""],
  };
}

/**
 * Éditeur maths instinctif : navigation étape par étape
 * (infos → intro → chaque bloc → chaque exercice).
 */
export function MathLessonStepEditor({
  value,
  setValue,
}: {
  value: unknown;
  setValue: (next: unknown, history?: "debounce" | "immediate") => void;
}) {
  const lesson = value as MathSubmoduleLesson;
  const blocks = lesson.theory?.blocks ?? [];
  const exercises = lesson.exercises ?? [];

  const [step, setStep] = useState<StepId>({ kind: "info" });
  const [addType, setAddType] = useState<(typeof ADDABLE_TYPES)[number]>("plain");

  function patch(
    partial: Record<string, unknown>,
    history: "debounce" | "immediate" = "debounce",
  ) {
    setValue({ ...lesson, ...partial }, history);
  }

  function setBlocks(next: MathRichBlock[], history: "debounce" | "immediate" = "immediate") {
    patch(
      {
        theory: {
          ...lesson.theory,
          blocks: next,
        },
      },
      history,
    );
  }

  function setExercises(
    next: MathExerciseItem[],
    history: "debounce" | "immediate" = "immediate",
  ) {
    patch({ exercises: next }, history);
  }

  // Keep step valid if list shrinks
  const safeStep: StepId =
    step.kind === "block" && step.index >= blocks.length
      ? blocks.length
        ? { kind: "block", index: blocks.length - 1 }
        : { kind: "intro" }
      : step.kind === "exercise" && step.index >= exercises.length
        ? exercises.length
          ? { kind: "exercise", index: exercises.length - 1 }
          : { kind: "info" }
        : step;

  const titleFr = lesson.theory?.title?.fr ?? "";
  const paragraphs = lesson.theory?.paragraphs?.fr ?? [];

  return (
    <div className="space-y-4">
      <p className="rounded-[var(--radius-sm)] border border-[var(--color-theme)]/30 bg-[var(--color-theme-light)]/50 px-3 py-2 text-xs text-[var(--color-theme-muted)]">
        Parcourez la leçon <strong>étape par étape</strong>. Chaque bloc et
        chaque exercice s’édite avec des champs simples — aucun code.
      </p>

      {/* Step navigator */}
      <div className="flex flex-wrap gap-1.5">
        <StepChip
          active={safeStep.kind === "info"}
          onClick={() => setStep({ kind: "info" })}
          label="1. Infos"
        />
        <StepChip
          active={safeStep.kind === "intro"}
          onClick={() => setStep({ kind: "intro" })}
          label="2. Intro"
        />
        {blocks.map((b, i) => (
          <StepChip
            key={`b-${i}`}
            active={safeStep.kind === "block" && safeStep.index === i}
            onClick={() => setStep({ kind: "block", index: i })}
            label={`${i + 3}. ${blockLabel(b.type)}`}
          />
        ))}
        {exercises.map((_, i) => (
          <StepChip
            key={`e-${i}`}
            active={safeStep.kind === "exercise" && safeStep.index === i}
            onClick={() => setStep({ kind: "exercise", index: i })}
            label={`Ex. ${i + 1}`}
          />
        ))}
      </div>

      {/* Add controls */}
      <div className="flex flex-wrap items-center gap-2 rounded-[var(--radius-sm)] border border-dashed border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/40 px-3 py-2">
        <select
          value={addType}
          onChange={(e) =>
            setAddType(e.target.value as (typeof ADDABLE_TYPES)[number])
          }
          className="rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-2 py-1.5 text-xs"
        >
          {ADDABLE_TYPES.map((t) => (
            <option key={t} value={t}>
              {blockLabel(t)}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="rounded-[var(--radius-sm)] bg-[var(--color-theme)] px-3 py-1.5 text-xs font-bold text-white"
          onClick={() => {
            const next = [...blocks, emptyBlock(addType)];
            setBlocks(next);
            setStep({ kind: "block", index: next.length - 1 });
          }}
        >
          + Ajouter un bloc
        </button>
        <button
          type="button"
          className="rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-text-primary)]"
          onClick={() => {
            const next = [...exercises, emptyExercise(exercises.length)];
            setExercises(next);
            setStep({ kind: "exercise", index: next.length - 1 });
          }}
        >
          + Ajouter un exercice
        </button>
      </div>

      {/* Step content */}
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white p-4 shadow-sm">
        {safeStep.kind === "info" && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
              Informations de la leçon
            </h3>
            <label className="block">
              <span className={labelCls}>Titre affiché aux élèves</span>
              <input
                type="text"
                value={titleFr}
                onChange={(e) =>
                  patch({
                    theory: {
                      ...lesson.theory,
                      title: {
                        ...(lesson.theory?.title ?? {}),
                        fr: e.target.value,
                      },
                    },
                  })
                }
                className={inputCls}
                placeholder="Ex. Les additions"
              />
            </label>
            <label className="block">
              <span className={labelCls}>Code (ex. A1.1)</span>
              <input
                type="text"
                value={lesson.submoduleCode ?? ""}
                onChange={(e) => patch({ submoduleCode: e.target.value })}
                className={inputCls}
              />
            </label>
          </div>
        )}

        {safeStep.kind === "intro" && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
              Introduction
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Un paragraphe par ligne. Laissez vide si la leçon commence
              directement par les blocs.
            </p>
            <textarea
              value={paragraphs.join("\n")}
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
              className={`min-h-32 ${inputCls}`}
              placeholder="Texte d’introduction…"
            />
          </div>
        )}

        {safeStep.kind === "block" && blocks[safeStep.index] && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-theme-muted)]">
                  Étape {safeStep.index + 3} · {blockLabel(blocks[safeStep.index].type)}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  {blockPreview(blocks[safeStep.index])}
                </p>
              </div>
              <div className="flex flex-wrap gap-1">
                <button
                  type="button"
                  disabled={safeStep.index === 0}
                  className="rounded px-2 py-1 text-xs font-bold disabled:opacity-30"
                  onClick={() => {
                    const i = safeStep.index;
                    const next = blocks.slice();
                    [next[i - 1], next[i]] = [next[i], next[i - 1]];
                    setBlocks(next);
                    setStep({ kind: "block", index: i - 1 });
                  }}
                >
                  ↑
                </button>
                <button
                  type="button"
                  disabled={safeStep.index >= blocks.length - 1}
                  className="rounded px-2 py-1 text-xs font-bold disabled:opacity-30"
                  onClick={() => {
                    const i = safeStep.index;
                    const next = blocks.slice();
                    [next[i], next[i + 1]] = [next[i + 1], next[i]];
                    setBlocks(next);
                    setStep({ kind: "block", index: i + 1 });
                  }}
                >
                  ↓
                </button>
                <button
                  type="button"
                  className="rounded px-2 py-1 text-xs font-bold text-red-700"
                  onClick={() => {
                    if (!confirm("Supprimer ce bloc ?")) return;
                    const i = safeStep.index;
                    setBlocks(blocks.filter((_, j) => j !== i));
                    setStep(
                      i > 0 ? { kind: "block", index: i - 1 } : { kind: "intro" },
                    );
                  }}
                >
                  Supprimer
                </button>
              </div>
            </div>
            {/* Single-block editor via MathRichBlocksEditor filtered to one item */}
            <MathRichBlocksEditor
              single
              blocks={[blocks[safeStep.index]]}
              onChange={(next) => {
                if (!next[0]) return;
                const copy = blocks.slice();
                copy[safeStep.index] = next[0];
                setBlocks(copy);
              }}
            />
          </div>
        )}

        {safeStep.kind === "exercise" && exercises[safeStep.index] && (
          <ExerciseStep
            exercise={exercises[safeStep.index]}
            index={safeStep.index}
            total={exercises.length}
            onChange={(ex) => {
              const next = exercises.slice();
              next[safeStep.index] = ex;
              setExercises(next, "debounce");
            }}
            onMove={(dir) => {
              const i = safeStep.index;
              const j = i + dir;
              if (j < 0 || j >= exercises.length) return;
              const next = exercises.slice();
              [next[i], next[j]] = [next[j], next[i]];
              setExercises(next);
              setStep({ kind: "exercise", index: j });
            }}
            onDelete={() => {
              if (!confirm("Supprimer cet exercice ?")) return;
              const i = safeStep.index;
              setExercises(exercises.filter((_, j) => j !== i));
              setStep(
                i > 0
                  ? { kind: "exercise", index: i - 1 }
                  : blocks.length
                    ? { kind: "block", index: blocks.length - 1 }
                    : { kind: "intro" },
              );
            }}
          />
        )}
      </div>

      {/* Prev / Next */}
      <div className="flex flex-wrap justify-between gap-2">
        <button
          type="button"
          className="rounded-lg border border-[var(--color-border-default)] px-3 py-2 text-xs font-semibold disabled:opacity-40"
          disabled={safeStep.kind === "info"}
          onClick={() => {
            if (safeStep.kind === "intro") setStep({ kind: "info" });
            else if (safeStep.kind === "block") {
              setStep(
                safeStep.index === 0
                  ? { kind: "intro" }
                  : { kind: "block", index: safeStep.index - 1 },
              );
            } else if (safeStep.kind === "exercise") {
              setStep(
                safeStep.index === 0
                  ? blocks.length
                    ? { kind: "block", index: blocks.length - 1 }
                    : { kind: "intro" }
                  : { kind: "exercise", index: safeStep.index - 1 },
              );
            }
          }}
        >
          ← Étape précédente
        </button>
        <button
          type="button"
          className="rounded-lg bg-[var(--color-theme)] px-3 py-2 text-xs font-bold text-white disabled:opacity-40"
          onClick={() => {
            if (safeStep.kind === "info") setStep({ kind: "intro" });
            else if (safeStep.kind === "intro") {
              setStep(
                blocks.length
                  ? { kind: "block", index: 0 }
                  : exercises.length
                    ? { kind: "exercise", index: 0 }
                    : { kind: "intro" },
              );
            } else if (safeStep.kind === "block") {
              if (safeStep.index < blocks.length - 1)
                setStep({ kind: "block", index: safeStep.index + 1 });
              else if (exercises.length)
                setStep({ kind: "exercise", index: 0 });
            } else if (
              safeStep.kind === "exercise" &&
              safeStep.index < exercises.length - 1
            ) {
              setStep({ kind: "exercise", index: safeStep.index + 1 });
            }
          }}
        >
          Étape suivante →
        </button>
      </div>
    </div>
  );
}

function StepChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`max-w-[11rem] truncate rounded-full px-2.5 py-1 text-[11px] font-semibold transition ${
        active
          ? "bg-[var(--color-theme)] text-white"
          : "border border-[var(--color-border-default)] bg-white text-[var(--color-text-secondary)] hover:border-[var(--color-theme)]/40"
      }`}
      title={label}
    >
      {label}
    </button>
  );
}

function ExerciseStep({
  exercise,
  index,
  total,
  onChange,
  onMove,
  onDelete,
}: {
  exercise: MathExerciseItem;
  index: number;
  total: number;
  onChange: (ex: MathExerciseItem) => void;
  onMove: (dir: -1 | 1) => void;
  onDelete: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
          Exercice {index + 1} / {total}
        </h3>
        <div className="flex gap-1">
          <button
            type="button"
            disabled={index === 0}
            className="rounded px-2 py-1 text-xs font-bold disabled:opacity-30"
            onClick={() => onMove(-1)}
          >
            ↑
          </button>
          <button
            type="button"
            disabled={index >= total - 1}
            className="rounded px-2 py-1 text-xs font-bold disabled:opacity-30"
            onClick={() => onMove(1)}
          >
            ↓
          </button>
          <button
            type="button"
            className="rounded px-2 py-1 text-xs font-bold text-red-700"
            onClick={onDelete}
          >
            Supprimer
          </button>
        </div>
      </div>

      <label className="block">
        <span className={labelCls}>Question / énoncé</span>
        <textarea
          value={exercise.promptFr}
          onChange={(e) => onChange({ ...exercise, promptFr: e.target.value })}
          className={`min-h-24 ${inputCls}`}
          placeholder="Écrivez la question posée à l’élève…"
        />
      </label>

      <label className="block">
        <span className={labelCls}>Type de réponse</span>
        <select
          value={exercise.type}
          onChange={(e) =>
            onChange({
              ...exercise,
              type: e.target.value as MathExerciseItem["type"],
            })
          }
          className={inputCls}
        >
          <option value="short_text">Texte court</option>
          <option value="number">Nombre</option>
        </select>
      </label>

      <div className="space-y-1.5">
        <span className={labelCls}>
          Bonnes réponses acceptées (une par ligne)
        </span>
        <textarea
          value={exercise.acceptable.join("\n")}
          onChange={(e) =>
            onChange({
              ...exercise,
              acceptable: e.target.value
                .split("\n")
                .map((s) => s.trim())
                .filter(Boolean),
            })
          }
          className={`min-h-20 ${inputCls}`}
          placeholder={"15\n15 francs"}
        />
      </div>

      <label className="block">
        <span className={labelCls}>Astuce (bouton « ? », optionnel)</span>
        <input
          type="text"
          value={exercise.hintFr ?? ""}
          onChange={(e) =>
            onChange({
              ...exercise,
              hintFr: e.target.value || undefined,
            })
          }
          className={inputCls}
        />
      </label>
    </div>
  );
}

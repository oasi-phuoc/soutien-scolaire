"use client";

import { useState } from "react";
import type {
  VocabSentence,
  VocabTheme,
  VocabWord,
} from "@/lib/curriculum/vocabulary-data";
import { ImageUploadField } from "./ImageUploadField";

const inputCls =
  "w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-theme)]";
const labelCls =
  "mb-1 block text-xs font-semibold text-[var(--color-theme-muted)]";

type StepId =
  | "words"
  | "fill-sentences"
  | "example-sentences"
  | "word-order";

const STEPS: { id: StepId; label: string; hint: string }[] = [
  {
    id: "words",
    label: "Étape 1 — Mots",
    hint: "Vocabulaire : mot, image, définition",
  },
  {
    id: "fill-sentences",
    label: "Étape 6 — Phrases à trous",
    hint: "Phrases avec ___ pour l’exercice 6",
  },
  {
    id: "example-sentences",
    label: "Étape 7 — Phrases avec le mot",
    hint: "Phrases d’exemple liées à chaque mot",
  },
  {
    id: "word-order",
    label: "Étape 10 — Remise en ordre",
    hint: "Phrases à reconstruire (mots mélangés)",
  },
];

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block text-xs">
      <span className={labelCls}>{label}</span>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={inputCls}
      />
    </label>
  );
}

function definitionToText(def: VocabWord["definition"]): string {
  if (Array.isArray(def)) return def.join(" / ");
  return def ?? "";
}

/**
 * Éditeur vocabulaire étape par étape (1 · 6 · 7 · 10).
 */
export function VocabThemeStepEditor({
  value,
  setValue,
}: {
  value: unknown;
  setValue: (next: unknown, history?: "debounce" | "immediate") => void;
}) {
  const theme = value as VocabTheme;
  const [stepIdx, setStepIdx] = useState(0);
  const step = STEPS[stepIdx]!;

  function patch(
    partial: Partial<VocabTheme>,
    history: "debounce" | "immediate" = "debounce",
  ) {
    setValue({ ...theme, ...partial }, history);
  }

  function updateWord(i: number, next: VocabWord) {
    const words = theme.words.slice();
    words[i] = next;
    patch({ words }, "debounce");
  }

  function updateSentence(i: number, next: VocabSentence) {
    const sentences = (theme.sentences ?? []).slice();
    sentences[i] = next;
    patch({ sentences }, "debounce");
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-1.5">
        {STEPS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setStepIdx(i)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              i === stepIdx
                ? "bg-[var(--color-theme)] text-white"
                : "border border-[var(--color-border-default)] bg-white text-[var(--color-text-secondary)] hover:border-[var(--color-theme)]/40"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="rounded-[10px] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/40 px-3 py-2">
        <p className="text-sm font-semibold text-[var(--color-text-primary)]">
          {step.label}
        </p>
        <p className="text-xs text-[var(--color-text-secondary)]">{step.hint}</p>
      </div>

      {step.id === "words" && (
        <div className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <Field
              label="Titre"
              value={theme.title ?? ""}
              onChange={(v) => patch({ title: v })}
            />
            <Field
              label="Code"
              value={theme.code ?? ""}
              onChange={(v) => patch({ code: v })}
            />
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wide text-[var(--color-theme-muted)]">
              Mots ({theme.words.length})
            </h4>
            <button
              type="button"
              className="text-[11px] font-bold text-[var(--color-theme)] hover:underline"
              onClick={() =>
                patch(
                  {
                    words: [
                      ...theme.words,
                      { word: "", article: "un", gender: "m" },
                    ],
                  },
                  "immediate",
                )
              }
            >
              + Mot
            </button>
          </div>
          <div className="max-h-[420px] space-y-2 overflow-y-auto pr-1">
            {theme.words.map((w, i) => (
              <div
                key={i}
                className="space-y-2 rounded-lg border border-[var(--color-border-default)] bg-white p-3"
              >
                <div className="grid gap-2 sm:grid-cols-[1fr_1fr_1fr_auto]">
                  <input
                    placeholder="mot"
                    value={w.word}
                    onChange={(e) =>
                      updateWord(i, { ...w, word: e.target.value })
                    }
                    className={inputCls}
                  />
                  <input
                    placeholder="article"
                    value={w.article ?? ""}
                    onChange={(e) =>
                      updateWord(i, { ...w, article: e.target.value })
                    }
                    className={inputCls}
                  />
                  <input
                    placeholder="féminin"
                    value={w.feminine ?? ""}
                    onChange={(e) =>
                      updateWord(i, {
                        ...w,
                        feminine: e.target.value || undefined,
                      })
                    }
                    className={inputCls}
                  />
                  <button
                    type="button"
                    className="rounded-md px-2 text-xs font-bold text-red-700 hover:bg-red-50"
                    onClick={() =>
                      patch(
                        { words: theme.words.filter((_, j) => j !== i) },
                        "immediate",
                      )
                    }
                  >
                    ×
                  </button>
                </div>
                <input
                  placeholder="définition"
                  value={definitionToText(w.definition)}
                  onChange={(e) =>
                    updateWord(i, {
                      ...w,
                      definition: e.target.value || undefined,
                    })
                  }
                  className={inputCls}
                />
                <ImageUploadField
                  label="Image du mot"
                  value={w.image}
                  word={w.word}
                  folder={theme.imageFolder ?? theme.section}
                  domain="vocab"
                  onChange={(url) =>
                    updateWord(i, { ...w, image: url || undefined })
                  }
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {step.id === "fill-sentences" && (
        <div className="space-y-3">
          <p className="text-xs text-[var(--color-text-secondary)]">
            Utilisez <code className="rounded bg-white px-1">___</code> pour le
            trou. La réponse doit correspondre à un mot du thème (étape 1).
          </p>
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wide text-[var(--color-theme-muted)]">
              Phrases ({(theme.sentences ?? []).length})
            </h4>
            <button
              type="button"
              className="text-[11px] font-bold text-[var(--color-theme)] hover:underline"
              onClick={() =>
                patch(
                  {
                    sentences: [
                      ...(theme.sentences ?? []),
                      { sentence: "___", answer: "" },
                    ],
                  },
                  "immediate",
                )
              }
            >
              + Phrase
            </button>
          </div>
          <div className="max-h-[420px] space-y-2 overflow-y-auto pr-1">
            {(theme.sentences ?? []).map((s, i) => (
              <div
                key={i}
                className="grid gap-2 rounded-lg border border-[var(--color-border-default)] bg-white p-3 sm:grid-cols-[1fr_1fr_auto]"
              >
                <input
                  placeholder="phrase (___ = trou)"
                  value={s.sentence}
                  onChange={(e) =>
                    updateSentence(i, { ...s, sentence: e.target.value })
                  }
                  className={inputCls}
                />
                <input
                  placeholder="réponse (mot)"
                  value={s.answer}
                  onChange={(e) =>
                    updateSentence(i, { ...s, answer: e.target.value })
                  }
                  className={inputCls}
                />
                <button
                  type="button"
                  className="rounded-md px-2 text-xs font-bold text-red-700 hover:bg-red-50"
                  onClick={() =>
                    patch(
                      {
                        sentences: (theme.sentences ?? []).filter(
                          (_, j) => j !== i,
                        ),
                      },
                      "immediate",
                    )
                  }
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {step.id === "example-sentences" && (
        <div className="space-y-3">
          <p className="text-xs text-[var(--color-text-secondary)]">
            Phrases modèles associées à chaque mot (niveaux A1 / A2 / B1).
          </p>
          <div className="max-h-[480px] space-y-3 overflow-y-auto pr-1">
            {theme.words.map((w, i) => {
              const ex = w.exampleSentences ?? {};
              const levels: ("a1" | "a2" | "b1")[] = ["a1", "a2", "b1"];
              return (
                <div
                  key={i}
                  className="space-y-2 rounded-lg border border-[var(--color-border-default)] bg-white p-3"
                >
                  <p className="text-sm font-bold text-[var(--color-text-primary)]">
                    {w.article ? `${w.article} ` : ""}
                    {w.word || `Mot ${i + 1}`}
                  </p>
                  {levels.map((level) => {
                    const list = ex[level] ?? [];
                    return (
                      <div key={level} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase text-[var(--color-theme-muted)]">
                            {level.toUpperCase()}
                          </span>
                          <button
                            type="button"
                            className="text-[11px] font-bold text-[var(--color-theme)] hover:underline"
                            onClick={() => {
                              const next = {
                                ...ex,
                                [level]: [...list, ""],
                              };
                              updateWord(i, {
                                ...w,
                                exampleSentences: next,
                              });
                            }}
                          >
                            + Phrase
                          </button>
                        </div>
                        {list.map((phrase, pi) => (
                          <div key={pi} className="flex gap-1">
                            <input
                              value={phrase}
                              onChange={(e) => {
                                const nextList = list.slice();
                                nextList[pi] = e.target.value;
                                updateWord(i, {
                                  ...w,
                                  exampleSentences: {
                                    ...ex,
                                    [level]: nextList,
                                  },
                                });
                              }}
                              className={inputCls}
                              placeholder={`Phrase ${level.toUpperCase()}`}
                            />
                            <button
                              type="button"
                              className="rounded-md px-2 text-xs font-bold text-red-700"
                              onClick={() => {
                                updateWord(i, {
                                  ...w,
                                  exampleSentences: {
                                    ...ex,
                                    [level]: list.filter((_, j) => j !== pi),
                                  },
                                });
                              }}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {step.id === "word-order" && (
        <div className="space-y-3">
          <p className="text-xs text-[var(--color-text-secondary)]">
            L&apos;exercice 10 reprend les phrases de l&apos;étape 6 (trou
            remplacé par la réponse). Ajoutez ici des phrases complètes si
            besoin — elles sont stockées dans la même liste.
          </p>
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wide text-[var(--color-theme-muted)]">
              Phrases ordre ({(theme.sentences ?? []).length})
            </h4>
            <button
              type="button"
              className="text-[11px] font-bold text-[var(--color-theme)] hover:underline"
              onClick={() =>
                patch(
                  {
                    sentences: [
                      ...(theme.sentences ?? []),
                      { sentence: "", answer: "" },
                    ],
                  },
                  "immediate",
                )
              }
            >
              + Phrase complète
            </button>
          </div>
          <div className="max-h-[420px] space-y-2 overflow-y-auto pr-1">
            {(theme.sentences ?? []).map((s, i) => {
              const display =
                s.sentence.includes("___") && s.answer
                  ? s.sentence.replace("___", s.answer)
                  : s.sentence;
              return (
                <div
                  key={i}
                  className="space-y-2 rounded-lg border border-[var(--color-border-default)] bg-white p-3"
                >
                  <p className="text-[11px] text-[var(--color-text-secondary)]">
                    Aperçu ordre :{" "}
                    <span className="font-medium text-[var(--color-text-primary)]">
                      {display || "—"}
                    </span>
                  </p>
                  <input
                    placeholder="Phrase complète (ou avec ___ )"
                    value={s.sentence}
                    onChange={(e) =>
                      updateSentence(i, { ...s, sentence: e.target.value })
                    }
                    className={inputCls}
                  />
                  <div className="flex gap-2">
                    <input
                      placeholder="mot du trou (si ___)"
                      value={s.answer}
                      onChange={(e) =>
                        updateSentence(i, { ...s, answer: e.target.value })
                      }
                      className={inputCls}
                    />
                    <button
                      type="button"
                      className="shrink-0 rounded-md px-2 text-xs font-bold text-red-700"
                      onClick={() =>
                        patch(
                          {
                            sentences: (theme.sentences ?? []).filter(
                              (_, j) => j !== i,
                            ),
                          },
                          "immediate",
                        )
                      }
                    >
                      ×
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex justify-between gap-2 pt-1">
        <button
          type="button"
          disabled={stepIdx === 0}
          onClick={() => setStepIdx((i) => Math.max(0, i - 1))}
          className="rounded-lg border border-[var(--color-border-default)] bg-white px-3 py-2 text-xs font-semibold disabled:opacity-40"
        >
          ← Précédent
        </button>
        <button
          type="button"
          disabled={stepIdx >= STEPS.length - 1}
          onClick={() => setStepIdx((i) => Math.min(STEPS.length - 1, i + 1))}
          className="rounded-lg bg-[var(--color-theme)] px-3 py-2 text-xs font-bold text-white disabled:opacity-40"
        >
          Suivant →
        </button>
      </div>
    </div>
  );
}

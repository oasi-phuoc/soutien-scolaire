"use client";

import { useMemo, useState } from "react";
import type { LetterData, PronStep, ReadingGrid } from "@/lib/curriculum/lecture-data";
import { ImageUploadField } from "./ImageUploadField";

const inputCls =
  "w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-theme)]";
const labelCls =
  "mb-1 block text-xs font-semibold text-[var(--color-theme-muted)]";

type StepId =
  | "discover"
  | "words-upper"
  | "words-lower"
  | "syllables-cv"
  | "syllables-vc"
  | "syll-2"
  | "pronounce"
  | "grids";

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block text-xs">
      <span className={labelCls}>{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputCls}
      />
    </label>
  );
}

function ListEditor({
  label,
  items,
  onChange,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-[var(--color-theme-muted)]">
          {label} ({items.length})
        </span>
        <button
          type="button"
          className="text-[11px] font-bold text-[var(--color-theme)] hover:underline"
          onClick={() => onChange([...items, ""])}
        >
          + Ajouter
        </button>
      </div>
      <div className="max-h-[320px] space-y-1 overflow-y-auto pr-1">
        {items.map((item, i) => (
          <div key={i} className="flex gap-1">
            <input
              type="text"
              value={item}
              onChange={(e) => {
                const next = items.slice();
                next[i] = e.target.value;
                onChange(next);
              }}
              className={inputCls}
            />
            <button
              type="button"
              className="rounded-md px-2 text-xs font-bold text-red-700 hover:bg-red-50"
              onClick={() => onChange(items.filter((_, j) => j !== i))}
              aria-label="Supprimer"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

type EditableLetter = LetterData & {
  cvSyllables?: string[];
  vcSyllables?: string[];
  syll2Items?: string[];
};

function buildSteps(data: EditableLetter): { id: StepId; label: string; hint: string }[] {
  const isWordList =
    data.type === "monosyllable" || data.type === "multisyllable";
  if (isWordList) {
    return [
      {
        id: "discover",
        label: "Infos",
        hint: "Titre et phonème de la leçon",
      },
      {
        id: "grids",
        label: "Listes de mots",
        hint: "Ajouter ou supprimer des mots des grilles L6 / L8",
      },
    ];
  }

  const steps: { id: StepId; label: string; hint: string }[] = [
    {
      id: "discover",
      label: "Étape 1 — Découverte",
      hint: "Lettre, phonème, mot exemple et image",
    },
  ];

  if (
    data.type === "vowel" ||
    data.type === "consonant" ||
    data.type === "complex-sound"
  ) {
    steps.push(
      {
        id: "words-upper",
        label: "Étape 4 — Mots (MAJ)",
        hint: "Mots en majuscules pour l’exercice",
      },
      {
        id: "words-lower",
        label: "Étape 5 — Mots (min)",
        hint: "Mots en minuscules pour l’exercice",
      },
    );
  }

  if (data.type === "consonant" || data.type === "vowel" || data.type === "complex-sound") {
    steps.push(
      {
        id: "syllables-cv",
        label: "Étape 8 — Syllabes CV",
        hint: "Liste optionnelle (sinon générée depuis la lettre)",
      },
      {
        id: "syllables-vc",
        label: "Étape 9 — Syllabes VC",
        hint: "Liste optionnelle (sinon générée depuis la lettre)",
      },
      {
        id: "syll-2",
        label: "Étape 10 — 2 syllabes",
        hint: "Suites de 2 syllabes (optionnel)",
      },
      {
        id: "pronounce",
        label: "Étape 12 — Prononcer",
        hint: "Chaîne phonème → syllabe → mot",
      },
    );
  }

  if (data.type === "syllable" && Array.isArray(data.grids)) {
    steps.push({
      id: "grids",
      label: "Grilles de syllabes",
      hint: "Items des grilles de lecture",
    });
  }

  return steps;
}

/**
 * Éditeur lecture étape par étape (1, 4, 5, 8, 9, 10, 12 + L6/L8).
 */
export function LectureLetterStepEditor({
  value,
  setValue,
}: {
  value: unknown;
  setValue: (next: unknown, history?: "debounce" | "immediate") => void;
}) {
  const data = value as EditableLetter;
  const steps = useMemo(() => buildSteps(data), [data.type]);
  const [stepIdx, setStepIdx] = useState(0);
  const safeIdx = Math.min(stepIdx, steps.length - 1);
  const step = steps[safeIdx]!;

  function patch(
    partial: Record<string, unknown>,
    history: "debounce" | "immediate" = "debounce",
  ) {
    setValue({ ...data, ...partial }, history);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-1.5">
        {steps.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setStepIdx(i)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              i === safeIdx
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

      {step.id === "discover" && (
        <div className="grid gap-3 sm:grid-cols-2">
          <Field
            label="Phonème"
            value={data.phoneme ?? ""}
            onChange={(v) => patch({ phoneme: v })}
          />
          {"title" in data && (
            <Field
              label="Titre"
              value={(data as { title?: string }).title ?? ""}
              onChange={(v) => patch({ title: v })}
            />
          )}
          <Field
            label="Lettre (minuscule)"
            value={data.letterLower ?? ""}
            onChange={(v) =>
              patch({ letterLower: v, letter: v.toUpperCase() })
            }
          />
          {"exampleWord" in data && (
            <Field
              label="Mot exemple"
              value={(data as { exampleWord?: string }).exampleWord ?? ""}
              onChange={(v) => patch({ exampleWord: v })}
            />
          )}
          {"exampleWord" in data && (
            <div className="sm:col-span-2">
              <ImageUploadField
                label="Image du mot exemple"
                value={(data as { exampleImagePath?: string }).exampleImagePath}
                word={(data as { exampleWord?: string }).exampleWord}
                domain="lecture"
                onChange={(url) =>
                  patch({ exampleImagePath: url || undefined }, "immediate")
                }
              />
            </div>
          )}
        </div>
      )}

      {step.id === "words-upper" && (
        <div className="space-y-3">
          {"upperWords" in data && Array.isArray(data.upperWords) && (
            <ListEditor
              label="Mots majuscules"
              items={data.upperWords}
              onChange={(items) => patch({ upperWords: items }, "immediate")}
            />
          )}
          {"upperWordsSet1" in data &&
            Array.isArray((data as { upperWordsSet1: string[] }).upperWordsSet1) && (
              <ListEditor
                label="Mots maj. — série 1"
                items={(data as { upperWordsSet1: string[] }).upperWordsSet1}
                onChange={(items) =>
                  patch({ upperWordsSet1: items }, "immediate")
                }
              />
            )}
          {"upperWordsSet2" in data &&
            Array.isArray((data as { upperWordsSet2: string[] }).upperWordsSet2) && (
              <ListEditor
                label="Mots maj. — série 2"
                items={(data as { upperWordsSet2: string[] }).upperWordsSet2}
                onChange={(items) =>
                  patch({ upperWordsSet2: items }, "immediate")
                }
              />
            )}
        </div>
      )}

      {step.id === "words-lower" && "lowerWords" in data && Array.isArray(data.lowerWords) && (
        <ListEditor
          label="Mots minuscules"
          items={data.lowerWords}
          onChange={(items) => patch({ lowerWords: items }, "immediate")}
        />
      )}

      {step.id === "syllables-cv" && (
        <ListEditor
          label="Syllabes CV (optionnel)"
          items={data.cvSyllables ?? []}
          onChange={(items) => patch({ cvSyllables: items }, "immediate")}
        />
      )}

      {step.id === "syllables-vc" && (
        <ListEditor
          label="Syllabes VC (optionnel)"
          items={data.vcSyllables ?? []}
          onChange={(items) => patch({ vcSyllables: items }, "immediate")}
        />
      )}

      {step.id === "syll-2" && (
        <ListEditor
          label="Suites 2 syllabes (optionnel)"
          items={data.syll2Items ?? []}
          onChange={(items) => patch({ syll2Items: items }, "immediate")}
        />
      )}

      {step.id === "pronounce" &&
        "pronunciationChain" in data &&
        Array.isArray(data.pronunciationChain) && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[var(--color-theme-muted)]">
                Chaîne de prononciation
              </span>
              <button
                type="button"
                className="text-[11px] font-bold text-[var(--color-theme)] hover:underline"
                onClick={() => {
                  const chain: PronStep[] = [
                    ...(data.pronunciationChain as PronStep[]),
                    { phoneme: "", syllable: "", word: "" },
                  ];
                  patch({ pronunciationChain: chain }, "immediate");
                }}
              >
                + Étape
              </button>
            </div>
            {(data.pronunciationChain as PronStep[]).map((entry, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_1fr_1fr_auto] gap-1"
              >
                <input
                  placeholder="phonème"
                  value={entry.phoneme}
                  onChange={(e) => {
                    const chain = (data.pronunciationChain as PronStep[]).slice();
                    chain[i] = { ...entry, phoneme: e.target.value };
                    patch({ pronunciationChain: chain });
                  }}
                  className={inputCls}
                />
                <input
                  placeholder="syllabe"
                  value={entry.syllable}
                  onChange={(e) => {
                    const chain = (data.pronunciationChain as PronStep[]).slice();
                    chain[i] = { ...entry, syllable: e.target.value };
                    patch({ pronunciationChain: chain });
                  }}
                  className={inputCls}
                />
                <input
                  placeholder="mot"
                  value={entry.word}
                  onChange={(e) => {
                    const chain = (data.pronunciationChain as PronStep[]).slice();
                    chain[i] = { ...entry, word: e.target.value };
                    patch({ pronunciationChain: chain });
                  }}
                  className={inputCls}
                />
                <button
                  type="button"
                  className="rounded-md px-2 text-xs font-bold text-red-700"
                  onClick={() => {
                    const chain = (data.pronunciationChain as PronStep[]).filter(
                      (_, j) => j !== i,
                    );
                    patch({ pronunciationChain: chain }, "immediate");
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

      {step.id === "grids" &&
        "grids" in data &&
        Array.isArray((data as { grids: ReadingGrid[] }).grids) && (
          <div className="space-y-3">
            {(data as { grids: ReadingGrid[] }).grids.map((g, gi) => (
              <div
                key={g.key || gi}
                className="rounded-lg border border-[var(--color-border-default)] bg-white p-3"
              >
                <Field
                  label="Label de grille"
                  value={g.label}
                  onChange={(v) => {
                    const grids = (
                      data as { grids: ReadingGrid[] }
                    ).grids.slice();
                    grids[gi] = { ...g, label: v };
                    patch({ grids }, "debounce");
                  }}
                />
                <div className="mt-2">
                  <ListEditor
                    label="Mots / items"
                    items={g.items}
                    onChange={(items) => {
                      const grids = (
                        data as { grids: ReadingGrid[] }
                      ).grids.slice();
                      grids[gi] = { ...g, items };
                      patch({ grids }, "immediate");
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

      <div className="flex justify-between gap-2 pt-1">
        <button
          type="button"
          disabled={safeIdx === 0}
          onClick={() => setStepIdx((i) => Math.max(0, i - 1))}
          className="rounded-lg border border-[var(--color-border-default)] bg-white px-3 py-2 text-xs font-semibold disabled:opacity-40"
        >
          ← Précédent
        </button>
        <button
          type="button"
          disabled={safeIdx >= steps.length - 1}
          onClick={() => setStepIdx((i) => Math.min(steps.length - 1, i + 1))}
          className="rounded-lg bg-[var(--color-theme)] px-3 py-2 text-xs font-bold text-white disabled:opacity-40"
        >
          Suivant →
        </button>
      </div>
    </div>
  );
}

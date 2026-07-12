"use client";

import { useState } from "react";
import type { TheoryBlock } from "@/lib/curriculum/grammar-data";

const labelCls = "mb-1 block text-xs font-semibold text-[var(--color-theme-muted)]";
const inputCls =
  "w-full rounded-none border-0 border-b border-[var(--color-border-default)] bg-transparent px-0 py-1.5 text-sm outline-none focus:border-[var(--color-theme)]";
const areaCls =
  "w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-2.5 py-2 text-sm outline-none focus:border-[var(--color-theme)]";
const btnIcon =
  "rounded px-1.5 py-0.5 text-xs font-bold text-[var(--color-text-secondary)] hover:bg-[var(--color-theme-light)] hover:text-[var(--color-theme-muted)] disabled:opacity-30";

const ADDABLE = [
  "heading",
  "plain_list",
  "highlight",
  "note",
  "rule",
  "vocab",
  "grid",
  "word_cards",
] as const;

type Addable = (typeof ADDABLE)[number];

const TYPE_LABELS: Record<string, string> = {
  heading: "Titre",
  plain_list: "Liste",
  highlight: "Encadré",
  note: "Note",
  rule: "Règle",
  vocab: "Vocabulaire",
  grid: "Tableau",
  word_cards: "Cartes mots",
  table: "Tableaux de conjugaison",
  verb_toggle: "Basculer verbes",
  clock_display: "Horloges",
  illus_cards: "Cartes illustrées",
  grammar_link: "Lien grammaire",
  selector: "Sélecteur d’onglets",
};

function typeLabel(type: string) {
  return TYPE_LABELS[type] ?? type;
}

function emptyBlock(type: Addable): TheoryBlock {
  switch (type) {
    case "heading":
      return { type: "heading", text: "" };
    case "plain_list":
      return { type: "plain_list", items: [""] };
    case "highlight":
      return { type: "highlight", label: "", items: [""] };
    case "note":
      return { type: "note", text: "" };
    case "rule":
      return { type: "rule", text: "", examples: [{ correct: "" }] };
    case "vocab":
      return { type: "vocab", title: "", items: [""] };
    case "grid":
      return { type: "grid", headers: [""], rows: [[""]] };
    case "word_cards":
      return { type: "word_cards", items: [""] };
  }
}

function StringListEditor({
  items,
  onChange,
  label,
}: {
  items: string[];
  onChange: (next: string[]) => void;
  label?: string;
}) {
  return (
    <div className="space-y-1.5">
      {label ? <span className={labelCls}>{label}</span> : null}
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <input
            type="text"
            value={item}
            onChange={(e) => onChange(items.map((x, j) => (j === i ? e.target.value : x)))}
            className={`min-w-0 flex-1 ${inputCls}`}
          />
          <button
            type="button"
            className={btnIcon}
            onClick={() => onChange(items.filter((_, j) => j !== i))}
            aria-label="Supprimer la ligne"
          >
            ×
          </button>
        </div>
      ))}
      <button
        type="button"
        className="text-xs font-semibold text-[var(--color-theme)] hover:underline"
        onClick={() => onChange([...items, ""])}
      >
        + Ligne
      </button>
    </div>
  );
}

function JsonBlockEditor({
  block,
  onChange,
}: {
  block: TheoryBlock;
  onChange: (next: TheoryBlock) => void;
}) {
  const [draft, setDraft] = useState(() => JSON.stringify(block, null, 2));
  return (
    <div>
      <p className="mb-1.5 text-xs font-semibold text-[var(--color-theme-muted)]">
        Bloc spécial — réglages avancés
      </p>
      <span className={labelCls}>JSON du bloc</span>
      <textarea
        value={draft}
        spellCheck={false}
        onChange={(e) => {
          const v = e.target.value;
          setDraft(v);
          try {
            onChange(JSON.parse(v) as TheoryBlock);
          } catch {
            /* keep typing */
          }
        }}
        className={`min-h-[100px] font-mono text-[11px] ${areaCls}`}
      />
    </div>
  );
}

function BlockFields({
  block,
  onChange,
}: {
  block: TheoryBlock;
  onChange: (next: TheoryBlock) => void;
}) {
  switch (block.type) {
    case "heading":
      return (
        <div className="space-y-2">
          <label className="block">
            <span className={labelCls}>Texte</span>
            <input
              type="text"
              value={block.text}
              onChange={(e) => onChange({ ...block, text: e.target.value })}
              className={inputCls}
            />
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={!!block.accent}
              onChange={(e) => onChange({ ...block, accent: e.target.checked || undefined })}
            />
            <span className="text-xs font-semibold text-[var(--color-theme-muted)]">
              Titre accent
            </span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={!!block.sub}
              onChange={(e) => onChange({ ...block, sub: e.target.checked || undefined })}
            />
            <span className="text-xs font-semibold text-[var(--color-theme-muted)]">
              Sous-titre
            </span>
          </label>
        </div>
      );
    case "note":
      return (
        <label className="block">
          <span className={labelCls}>Texte</span>
          <textarea
            value={block.text}
            onChange={(e) => onChange({ ...block, text: e.target.value })}
            className={`min-h-[64px] ${areaCls}`}
          />
        </label>
      );
    case "rule":
      return (
        <div className="space-y-3">
          <label className="block">
            <span className={labelCls}>Texte</span>
            <textarea
              value={block.text}
              onChange={(e) => onChange({ ...block, text: e.target.value })}
              className={`min-h-[56px] ${areaCls}`}
            />
          </label>
          <div className="space-y-2">
            <span className={labelCls}>Exemples</span>
            {(block.examples ?? []).map((ex, i) => (
              <div
                key={i}
                className="flex flex-wrap items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--color-border-default)]/60 p-2"
              >
                <input
                  type="text"
                  value={ex.correct}
                  placeholder="Correct"
                  onChange={(e) => {
                    const examples = [...(block.examples ?? [])];
                    examples[i] = { ...examples[i], correct: e.target.value };
                    onChange({ ...block, examples });
                  }}
                  className={`min-w-0 flex-1 ${inputCls}`}
                />
                <input
                  type="text"
                  value={ex.wrong ?? ""}
                  placeholder="Incorrect (optionnel)"
                  onChange={(e) => {
                    const examples = [...(block.examples ?? [])];
                    examples[i] = {
                      ...examples[i],
                      wrong: e.target.value || undefined,
                    };
                    onChange({ ...block, examples });
                  }}
                  className={`min-w-0 flex-1 ${inputCls}`}
                />
                <button
                  type="button"
                  className={btnIcon}
                  onClick={() =>
                    onChange({
                      ...block,
                      examples: (block.examples ?? []).filter((_, j) => j !== i),
                    })
                  }
                  aria-label="Supprimer l’exemple"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              className="text-xs font-semibold text-[var(--color-theme)] hover:underline"
              onClick={() =>
                onChange({
                  ...block,
                  examples: [...(block.examples ?? []), { correct: "" }],
                })
              }
            >
              + Exemple
            </button>
          </div>
        </div>
      );
    case "vocab":
      return (
        <div className="space-y-3">
          <label className="block">
            <span className={labelCls}>Titre</span>
            <input
              type="text"
              value={block.title}
              onChange={(e) => onChange({ ...block, title: e.target.value })}
              className={inputCls}
            />
          </label>
          <StringListEditor
            label="Items"
            items={block.items}
            onChange={(items) => onChange({ ...block, items })}
          />
        </div>
      );
    case "plain_list":
      return (
        <div className="space-y-3">
          <label className="block">
            <span className={labelCls}>Label (optionnel)</span>
            <input
              type="text"
              value={block.label ?? ""}
              onChange={(e) =>
                onChange({
                  ...block,
                  label: e.target.value || undefined,
                })
              }
              className={inputCls}
            />
          </label>
          <StringListEditor
            label="Items"
            items={block.items}
            onChange={(items) => onChange({ ...block, items })}
          />
        </div>
      );
    case "highlight":
      return (
        <div className="space-y-3">
          <label className="block">
            <span className={labelCls}>Label</span>
            <input
              type="text"
              value={block.label}
              onChange={(e) => onChange({ ...block, label: e.target.value })}
              className={inputCls}
            />
          </label>
          <StringListEditor
            label="Items"
            items={block.items}
            onChange={(items) => onChange({ ...block, items })}
          />
        </div>
      );
    case "grid":
      return (
        <div className="space-y-3">
          <label className="block">
            <span className={labelCls}>En-têtes (séparés par virgule)</span>
            <input
              type="text"
              value={block.headers.join(", ")}
              onChange={(e) =>
                onChange({
                  ...block,
                  headers: e.target.value.split(",").map((s) => s.trim()),
                })
              }
              className={inputCls}
            />
          </label>
          <label className="block">
            <span className={labelCls}>Lignes (une par ligne, cellules séparées par |)</span>
            <textarea
              value={block.rows.map((r) => r.join(" | ")).join("\n")}
              onChange={(e) =>
                onChange({
                  ...block,
                  rows: e.target.value
                    .split("\n")
                    .map((line) => line.split("|").map((c) => c.trim())),
                })
              }
              className={`min-h-[88px] font-mono text-xs ${areaCls}`}
            />
          </label>
        </div>
      );
    case "word_cards":
      return (
        <StringListEditor
          label="Mots"
          items={block.items}
          onChange={(items) => onChange({ ...block, items })}
        />
      );
    default:
      return <JsonBlockEditor block={block} onChange={onChange} />;
  }
}

export function GrammarTheoryBlocksEditor({
  blocks,
  onChange,
}: {
  blocks: TheoryBlock[];
  onChange: (blocks: TheoryBlock[]) => void;
}) {
  const [addType, setAddType] = useState<Addable>("heading");

  const updateAt = (i: number, next: TheoryBlock) =>
    onChange(blocks.map((b, j) => (j === i ? next : b)));
  const removeAt = (i: number) => onChange(blocks.filter((_, j) => j !== i));
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= blocks.length) return;
    const next = [...blocks];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div className="space-y-2">
      {blocks.map((block, i) => (
        <div
          key={i}
          className="rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white p-2.5"
        >
          <div className="mb-2 flex items-center gap-1.5">
            <span className="rounded-md bg-[var(--color-theme-light)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-theme-muted)]">
              Étape {i + 1}
            </span>
            <span className="text-xs font-semibold text-[var(--color-text-secondary)]">
              {typeLabel(block.type)}
            </span>
            <div className="ml-auto flex items-center gap-0.5">
              <button type="button" className={btnIcon} disabled={i === 0} onClick={() => move(i, -1)}>
                ↑
              </button>
              <button
                type="button"
                className={btnIcon}
                disabled={i === blocks.length - 1}
                onClick={() => move(i, 1)}
              >
                ↓
              </button>
              <button type="button" className={btnIcon} onClick={() => removeAt(i)} aria-label="Supprimer">
                ×
              </button>
            </div>
          </div>
          <BlockFields block={block} onChange={(next) => updateAt(i, next)} />
        </div>
      ))}

      <div className="flex flex-wrap items-center gap-2 pt-1">
        <select
          value={addType}
          onChange={(e) => setAddType(e.target.value as Addable)}
          className="rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-2 py-1.5 text-xs outline-none focus:border-[var(--color-theme)]"
        >
          {ADDABLE.map((t) => (
            <option key={t} value={t}>
              {TYPE_LABELS[t]}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="rounded-[var(--radius-sm)] bg-[var(--color-theme-light)] px-3 py-1.5 text-xs font-bold text-[var(--color-theme-muted)] hover:bg-[var(--color-theme)] hover:text-white"
          onClick={() => onChange([...blocks, emptyBlock(addType)])}
        >
          + Ajouter un bloc
        </button>
      </div>
    </div>
  );
}

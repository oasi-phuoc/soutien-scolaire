"use client";

import { useState } from "react";
import type { MathRichBlock } from "@/lib/curriculum/content/math/math-a1-types";

const labelCls = "mb-1 block text-xs font-semibold text-[var(--color-theme-muted)]";
const inputCls =
  "w-full rounded-none border-0 border-b border-[var(--color-border-default)] bg-transparent px-0 py-1.5 text-sm outline-none focus:border-[var(--color-theme)]";
const areaCls =
  "w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-2.5 py-2 text-sm outline-none focus:border-[var(--color-theme)]";
const btnIcon =
  "rounded px-1.5 py-0.5 text-xs font-bold text-[var(--color-text-secondary)] hover:bg-[var(--color-theme-light)] hover:text-[var(--color-theme-muted)] disabled:opacity-30";

const BLOCK_LABELS: Record<string, string> = {
  heading: "Titre",
  highlight: "Sous-titre coloré",
  plain: "Paragraphe",
  note: "Note",
  example: "Exemple",
  section: "Encadré",
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
  add_step_cards: "Étapes +/−",
  add_sub_toggle_cards: "Étapes +/−",
};

function frenchType(type: string) {
  return BLOCK_LABELS[type] ?? "Bloc spécial";
}

const ADDABLE = [
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

type Addable = (typeof ADDABLE)[number];

function emptyBlock(type: Addable): MathRichBlock {
  switch (type) {
    case "heading":
      return { type: "heading", fr: "" };
    case "highlight":
      return { type: "highlight", fr: "" };
    case "plain":
      return { type: "plain", fr: "" };
    case "note":
      return { type: "note", fr: "" };
    case "example":
      return { type: "example", fr: "" };
    case "section":
      return { type: "section", labelFr: "", itemsFr: [""] };
    case "bullets":
      return { type: "bullets", itemsFr: [""] };
    case "rule":
      return { type: "rule", titleFr: "", itemsFr: [""] };
    case "table":
      return { type: "table", headersFr: [""], rows: [[""]], accentHeader: true };
    case "theory_tabs":
      return { type: "theory_tabs", tabs: [{ label: "Onglet", blocks: [] }] };
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
  block: MathRichBlock;
  onChange: (next: MathRichBlock) => void;
}) {
  const [draft, setDraft] = useState(() => JSON.stringify(block, null, 2));
  return (
    <div>
      <p className="mb-1 text-xs text-[var(--color-text-secondary)]">
        Bloc spécial ({frenchType(block.type)}). Modifiez avec précaution.
      </p>
      <span className={labelCls}>Réglages techniques</span>
      <textarea
        value={draft}
        spellCheck={false}
        onChange={(e) => {
          const v = e.target.value;
          setDraft(v);
          try {
            onChange(JSON.parse(v) as MathRichBlock);
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
  depth,
}: {
  block: MathRichBlock;
  onChange: (next: MathRichBlock) => void;
  depth: number;
}) {
  switch (block.type) {
    case "heading":
      return (
        <div className="space-y-2">
          <label className="block">
            <span className={labelCls}>Texte</span>
            <input
              type="text"
              value={block.fr}
              onChange={(e) => onChange({ ...block, fr: e.target.value })}
              className={inputCls}
            />
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={!!block.black}
              onChange={(e) => onChange({ ...block, black: e.target.checked || undefined })}
            />
            <span className="text-xs font-semibold text-[var(--color-theme-muted)]">
              Titre principal
            </span>
          </label>
        </div>
      );
    case "highlight":
      return (
        <label className="block">
          <span className={labelCls}>Texte</span>
          <input
            type="text"
            value={block.fr}
            onChange={(e) => onChange({ ...block, fr: e.target.value })}
            className={inputCls}
          />
        </label>
      );
    case "plain":
    case "note":
    case "example":
      return (
        <label className="block">
          <span className={labelCls}>Texte</span>
          <textarea
            value={block.fr}
            onChange={(e) => onChange({ ...block, fr: e.target.value })}
            className={`min-h-[64px] ${areaCls}`}
          />
        </label>
      );
    case "section":
      return (
        <div className="space-y-3">
          <label className="block">
            <span className={labelCls}>Label</span>
            <input
              type="text"
              value={block.labelFr}
              onChange={(e) => onChange({ ...block, labelFr: e.target.value })}
              className={inputCls}
            />
          </label>
          <StringListEditor
            label="Items"
            items={block.itemsFr}
            onChange={(itemsFr) => onChange({ ...block, itemsFr })}
          />
        </div>
      );
    case "bullets":
      return (
        <div className="space-y-3">
          <label className="block">
            <span className={labelCls}>Label (optionnel)</span>
            <input
              type="text"
              value={block.labelFr ?? ""}
              onChange={(e) =>
                onChange({
                  ...block,
                  labelFr: e.target.value || undefined,
                })
              }
              className={inputCls}
            />
          </label>
          <StringListEditor
            label="Items"
            items={block.itemsFr}
            onChange={(itemsFr) => onChange({ ...block, itemsFr })}
          />
        </div>
      );
    case "rule":
      return (
        <div className="space-y-3">
          <label className="block">
            <span className={labelCls}>Titre</span>
            <input
              type="text"
              value={block.titleFr}
              onChange={(e) => onChange({ ...block, titleFr: e.target.value })}
              className={inputCls}
            />
          </label>
          <StringListEditor
            label="Items"
            items={block.itemsFr}
            onChange={(itemsFr) => onChange({ ...block, itemsFr })}
          />
        </div>
      );
    case "table":
      return (
        <div className="space-y-3">
          <label className="block">
            <span className={labelCls}>En-têtes (séparés par virgule)</span>
            <input
              type="text"
              value={block.headersFr.join(", ")}
              onChange={(e) =>
                onChange({
                  ...block,
                  headersFr: e.target.value.split(",").map((s) => s.trim()),
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
          <label className="block">
            <span className={labelCls}>Légende</span>
            <input
              type="text"
              value={block.captionFr ?? ""}
              onChange={(e) =>
                onChange({
                  ...block,
                  captionFr: e.target.value || undefined,
                })
              }
              className={inputCls}
            />
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={!!block.accentHeader}
              onChange={(e) => onChange({ ...block, accentHeader: e.target.checked })}
            />
            <span className="text-xs font-semibold text-[var(--color-theme-muted)]">
              En-tête accent
            </span>
          </label>
        </div>
      );
    case "theory_tabs":
      return (
        <div className="space-y-3">
          {block.tabs.map((tab, ti) => (
            <div
              key={ti}
              className="rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/30 p-2.5"
            >
              <div className="mb-2 flex items-center gap-1.5">
                <input
                  type="text"
                  value={tab.label}
                  onChange={(e) =>
                    onChange({
                      ...block,
                      tabs: block.tabs.map((t, j) =>
                        j === ti ? { ...t, label: e.target.value } : t,
                      ),
                    })
                  }
                  className={`min-w-0 flex-1 ${inputCls}`}
                  placeholder="Label onglet"
                />
                <button
                  type="button"
                  className={btnIcon}
                  disabled={block.tabs.length <= 1}
                  onClick={() =>
                    onChange({
                      ...block,
                      tabs: block.tabs.filter((_, j) => j !== ti),
                    })
                  }
                >
                  ×
                </button>
              </div>
              <MathRichBlocksEditor
                blocks={tab.blocks}
                depth={depth + 1}
                onChange={(blocks) =>
                  onChange({
                    ...block,
                    tabs: block.tabs.map((t, j) => (j === ti ? { ...t, blocks } : t)),
                  })
                }
              />
            </div>
          ))}
          <button
            type="button"
            className="text-xs font-semibold text-[var(--color-theme)] hover:underline"
            onClick={() =>
              onChange({
                ...block,
                tabs: [...block.tabs, { label: "Onglet", blocks: [] }],
              })
            }
          >
            + Onglet
          </button>
        </div>
      );
    case "theory_toggle":
      return (
        <div className="space-y-3">
          <div className="grid gap-2 sm:grid-cols-2">
            <label className="block">
              <span className={labelCls}>Label A</span>
              <input
                type="text"
                value={block.labelA}
                onChange={(e) => onChange({ ...block, labelA: e.target.value })}
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className={labelCls}>Label B</span>
              <input
                type="text"
                value={block.labelB}
                onChange={(e) => onChange({ ...block, labelB: e.target.value })}
                className={inputCls}
              />
            </label>
          </div>
          <div>
            <span className={labelCls}>Blocs A</span>
            <MathRichBlocksEditor
              blocks={block.blocksA}
              depth={depth + 1}
              onChange={(blocksA) => onChange({ ...block, blocksA })}
            />
          </div>
          <div>
            <span className={labelCls}>Blocs B</span>
            <MathRichBlocksEditor
              blocks={block.blocksB}
              depth={depth + 1}
              onChange={(blocksB) => onChange({ ...block, blocksB })}
            />
          </div>
        </div>
      );
    default:
      return <JsonBlockEditor block={block} onChange={onChange} />;
  }
}

export function MathRichBlocksEditor({
  blocks,
  onChange,
  depth = 0,
  single = false,
}: {
  blocks: MathRichBlock[];
  onChange: (blocks: MathRichBlock[]) => void;
  depth?: number;
  /** Mode un seul bloc (étape) : pas de barre ↑↓ / ajouter. */
  single?: boolean;
}) {
  const [addType, setAddType] = useState<Addable>("plain");

  const updateAt = (i: number, next: MathRichBlock) =>
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
    <div className={depth > 0 ? "ml-2 space-y-2 border-l-2 border-[var(--color-theme-light)] pl-2" : "space-y-2"}>
      {blocks.map((block, i) => (
        <div
          key={i}
          className="rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white p-2.5"
        >
          {!single && (
            <div className="mb-2 flex items-center gap-1.5">
              <span className="rounded-md bg-[var(--color-theme-light)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-theme-muted)]">
                {frenchType(block.type)}
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
          )}
          <BlockFields block={block} depth={depth} onChange={(next) => updateAt(i, next)} />
        </div>
      ))}

      {!single && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <select
            value={addType}
            onChange={(e) => setAddType(e.target.value as Addable)}
            className="rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-2 py-1.5 text-xs outline-none focus:border-[var(--color-theme)]"
          >
            {ADDABLE.map((t) => (
              <option key={t} value={t}>
                {frenchType(t)}
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
      )}
    </div>
  );
}

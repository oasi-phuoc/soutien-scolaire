"use client";

import type { RefObject } from "react";

type Props = {
  textareaRef: RefObject<HTMLTextAreaElement | null>;
  value: string;
  onChange: (next: string) => void;
};

function ToolBtn({
  label,
  title,
  onClick,
}: {
  label: string;
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      onClick={onClick}
      className="inline-flex h-9 min-w-9 items-center justify-center gap-1 rounded-[10px] border border-[var(--color-border-default)] bg-white px-2 text-xs font-medium text-[var(--color-text-primary)] transition hover:border-[var(--color-theme)]/40 hover:bg-[var(--color-theme-light)] active:scale-[0.97]"
    >
      <span className="sm:inline">{label}</span>
    </button>
  );
}

function applyInline(
  value: string,
  start: number,
  end: number,
  before: string,
  after: string,
  placeholder = "texte",
) {
  const selected = value.slice(start, end);
  const inner = selected || placeholder;
  const next = value.slice(0, start) + before + inner + after + value.slice(end);
  const selStart = start + before.length;
  const selEnd = selStart + inner.length;
  return { next, selStart, selEnd };
}

function applyLinePrefix(
  value: string,
  start: number,
  end: number,
  prefixFor: (line: string, index: number) => string,
) {
  const lineStart = value.lastIndexOf("\n", start - 1) + 1;
  let lineEnd = value.indexOf("\n", end);
  if (lineEnd === -1) lineEnd = value.length;
  const block = value.slice(lineStart, lineEnd);
  const lines = block.split("\n");
  const nextBlock = lines
    .map((line, i) => prefixFor(line.replace(/^#{1,3}\s+|^[-*]\s+|^\d+\.\s+/, ""), i))
    .join("\n");
  const next = value.slice(0, lineStart) + nextBlock + value.slice(lineEnd);
  return {
    next,
    selStart: lineStart,
    selEnd: lineStart + nextBlock.length,
  };
}

/**
 * Barre d'outils markdown (style EPCAS) pour l'éditeur de contenu.
 */
export function MarkdownToolbar({ textareaRef, value, onChange }: Props) {
  const focusApply = (result: { next: string; selStart: number; selEnd: number }) => {
    onChange(result.next);
    requestAnimationFrame(() => {
      const el = textareaRef.current;
      if (!el) return;
      el.focus();
      el.setSelectionRange(result.selStart, result.selEnd);
    });
  };

  function withSelection(
    fn: (value: string, start: number, end: number) => {
      next: string;
      selStart: number;
      selEnd: number;
    },
  ) {
    const el = textareaRef.current;
    const start = el?.selectionStart ?? 0;
    const end = el?.selectionEnd ?? 0;
    focusApply(fn(value, start, end));
  }

  return (
    <div className="flex flex-wrap gap-1.5 rounded-[14px] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/60 p-2">
      <ToolBtn
        label="H1 Titre"
        title="Titre H1"
        onClick={() =>
          withSelection((v, s, e) =>
            applyLinePrefix(v, s, e, (line) => `# ${line || "Titre"}`),
          )
        }
      />
      <ToolBtn
        label="H2 Sous-titre"
        title="Sous-titre H2"
        onClick={() =>
          withSelection((v, s, e) =>
            applyLinePrefix(v, s, e, (line) => `## ${line || "Sous-titre"}`),
          )
        }
      />
      <ToolBtn
        label="H3 Petit titre"
        title="Petit titre H3"
        onClick={() =>
          withSelection((v, s, e) =>
            applyLinePrefix(v, s, e, (line) => `### ${line || "Petit titre"}`),
          )
        }
      />
      <ToolBtn
        label="B Gras"
        title="Gras"
        onClick={() =>
          withSelection((v, s, e) => applyInline(v, s, e, "**", "**", "gras"))
        }
      />
      <ToolBtn
        label="I Italique"
        title="Italique"
        onClick={() =>
          withSelection((v, s, e) => applyInline(v, s, e, "*", "*", "italique"))
        }
      />
      <ToolBtn
        label="Surligner"
        title="Surligner"
        onClick={() =>
          withSelection((v, s, e) => applyInline(v, s, e, "==", "==", "surligné"))
        }
      />
      <ToolBtn
        label="Puces"
        title="Liste à puces"
        onClick={() =>
          withSelection((v, s, e) =>
            applyLinePrefix(v, s, e, (line) => `- ${line || "item"}`),
          )
        }
      />
      <ToolBtn
        label="Numéros"
        title="Liste numérotée"
        onClick={() =>
          withSelection((v, s, e) =>
            applyLinePrefix(v, s, e, (line, i) => `${i + 1}. ${line || "item"}`),
          )
        }
      />
      <ToolBtn
        label="Citation"
        title="Citation"
        onClick={() =>
          withSelection((v, s, e) =>
            applyLinePrefix(v, s, e, (line) => `> ${line || "citation"}`),
          )
        }
      />
      <ToolBtn
        label="Lien"
        title="Lien"
        onClick={() =>
          withSelection((v, s, e) =>
            applyInline(v, s, e, "[", "](https://)", "texte"),
          )
        }
      />
      <ToolBtn
        label="Tableau"
        title="Tableau"
        onClick={() =>
          withSelection((v, s, e) => {
            const table =
              "| Colonne | Colonne |\n| --- | --- |\n| Cellule | Cellule |\n";
            const next = v.slice(0, s) + table + v.slice(e);
            return { next, selStart: s, selEnd: s + table.length };
          })
        }
      />
      <ToolBtn
        label="Ligne"
        title="Ligne horizontale"
        onClick={() =>
          withSelection((v, s, e) => {
            const insert = "\n---\n";
            const next = v.slice(0, s) + insert + v.slice(e);
            return { next, selStart: s + insert.length, selEnd: s + insert.length };
          })
        }
      />
      <ToolBtn
        label="Nettoyer"
        title="Nettoyer le formatage markdown"
        onClick={() =>
          withSelection((v, s, e) => {
            const selected = v.slice(s, e) || v;
            const cleaned = selected
              .replace(/#{1,6}\s+/g, "")
              .replace(/\*\*|__/g, "")
              .replace(/\*|_/g, "")
              .replace(/==/g, "")
              .replace(/^>\s+/gm, "")
              .replace(/^[-*]\s+/gm, "")
              .replace(/^\d+\.\s+/gm, "");
            if (s === e) {
              return { next: cleaned, selStart: 0, selEnd: cleaned.length };
            }
            const next = v.slice(0, s) + cleaned + v.slice(e);
            return { next, selStart: s, selEnd: s + cleaned.length };
          })
        }
      />
    </div>
  );
}

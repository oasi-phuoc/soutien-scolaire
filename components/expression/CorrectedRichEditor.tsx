"use client";

import { useEffect, useRef } from "react";
import {
  hasCorrectedContent,
  looksLikeHtml,
  plainTextToEditorHtml,
  sanitizeCorrectedHtml,
} from "@/lib/curriculum/content/communication/sanitize-corrected-html";

/** Couleurs fixes de la correction : texte rouge, surlignage ambre. */
const TEXT_COLOR = "#dc2626";
const HIGHLIGHT_COLOR = "#fde68a";

function runCommand(command: string, value?: string) {
  try {
    document.execCommand(command, false, value);
  } catch {
    /* ignore unsupported commands */
  }
}

function ToolBtn({
  title,
  active,
  onClick,
  children,
}: {
  title: string;
  active?: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      aria-pressed={active}
      onMouseDown={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`inline-flex h-8 min-w-8 items-center justify-center rounded-md px-1.5 text-xs font-bold transition-colors ${
        active
          ? "bg-amber-500 text-white"
          : "bg-white text-[var(--color-text-primary)] hover:bg-amber-50"
      } border border-[var(--color-border-default)]`}
    >
      {children}
    </button>
  );
}

function IconTextColor({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden className="block">
      <path
        d="M5 19h14M9.2 15.5 12 5l2.8 10.5M10.1 12.5h3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="4" y="20" width="16" height="2.5" rx="0.5" fill={color} />
    </svg>
  );
}

function IconHighlight({ color }: { color: string }) {
  const fill = color === "transparent" ? "#e5e7eb" : color;
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden className="block">
      <path
        d="M4 17.5 14.5 7l2.5 2.5L6.5 20H4v-2.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="m14.5 7 1.8-1.8a1.5 1.5 0 0 1 2.1 0l1.4 1.4a1.5 1.5 0 0 1 0 2.1L17 11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="3" y="20.5" width="12" height="2.5" rx="0.5" fill={fill} />
    </svg>
  );
}

function IconEraser() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden className="block">
      <path
        d="M8.5 19 3.7 14.2a2 2 0 0 1 0-2.8l7.8-7.8a2 2 0 0 1 2.8 0l5.5 5.5a2 2 0 0 1 0 2.8L13 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 9.9 14.1 17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 21h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Vue élève / lecture seule de la version corrigée (HTML ou texte). */
export function CorrectedTextView({
  original,
  corrected,
}: {
  original: string;
  corrected: string;
}) {
  if (!hasCorrectedContent(corrected)) return null;

  if (looksLikeHtml(corrected)) {
    return (
      <div
        className="corrected-rich-view whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text-primary)] [&_mark]:rounded-sm [&_mark]:px-0.5 [&_u]:underline [&_strong]:font-bold [&_b]:font-bold"
        dangerouslySetInnerHTML={{ __html: sanitizeCorrectedHtml(corrected) }}
      />
    );
  }

  const before = original.split(/(\s+)/u);
  const after = corrected.split(/(\s+)/u);
  return (
    <p className="whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text-primary)]">
      {after.map((token, index) => (
        <span
          key={index}
          className={token !== before[index] && token.trim() ? "font-semibold text-amber-600" : undefined}
        >
          {token}
        </span>
      ))}
    </p>
  );
}

/** Éditeur contentEditable + barre de mise en forme pour la correction. */
export function CorrectedRichEditor({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const seeded = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seeded.current) return;
    el.innerHTML = plainTextToEditorHtml(value);
    seeded.current = true;
  }, [value]);

  function emit() {
    const el = ref.current;
    if (!el) return;
    onChange(el.innerHTML);
  }

  function apply(command: string, arg?: string) {
    ref.current?.focus();
    runCommand(command, arg);
    emit();
  }

  function applyTextColor() {
    ref.current?.focus();
    runCommand("foreColor", TEXT_COLOR);
    emit();
  }

  function applyHighlight() {
    ref.current?.focus();
    runCommand("hiliteColor", HIGHLIGHT_COLOR);
    runCommand("backColor", HIGHLIGHT_COLOR);
    emit();
  }

  /** Gomme : retire toute la mise en forme de la sélection (gras, italique,
      souligné, barré, couleur du texte et surlignage). */
  function clearFormatting() {
    ref.current?.focus();
    runCommand("removeFormat");
    runCommand("hiliteColor", "transparent");
    runCommand("backColor", "transparent");
    emit();
  }

  const empty = !hasCorrectedContent(value);

  return (
    <div className="overflow-hidden rounded-[var(--radius-md)] border-2 border-amber-300 bg-white">
      <div className="flex flex-wrap items-center gap-1 border-b border-amber-200 bg-amber-50/80 px-2 py-1.5">
        <ToolBtn title="Gras" onClick={() => apply("bold")}>
          <span className="font-black">G</span>
        </ToolBtn>
        <ToolBtn title="Italique" onClick={() => apply("italic")}>
          <span className="italic">I</span>
        </ToolBtn>
        <ToolBtn title="Souligné" onClick={() => apply("underline")}>
          <span className="underline">S</span>
        </ToolBtn>
        <ToolBtn title="Barré" onClick={() => apply("strikeThrough")}>
          <span className="line-through">abc</span>
        </ToolBtn>
        <span className="mx-1 h-5 w-px bg-amber-200" aria-hidden />
        <ToolBtn title="Texte en rouge" onClick={applyTextColor}>
          <IconTextColor color={TEXT_COLOR} />
        </ToolBtn>
        <ToolBtn title="Surligner en ambre" onClick={applyHighlight}>
          <IconHighlight color={HIGHLIGHT_COLOR} />
        </ToolBtn>
        <ToolBtn title="Effacer la mise en forme" onClick={clearFormatting}>
          <IconEraser />
        </ToolBtn>
      </div>
      <div className="relative">
        {empty && placeholder && (
          <p className="pointer-events-none absolute left-4 top-4 text-sm text-zinc-400">{placeholder}</p>
        )}
        <div
          ref={ref}
          role="textbox"
          aria-multiline
          aria-label="Version corrigée"
          contentEditable
          suppressContentEditableWarning
          onInput={emit}
          onBlur={emit}
          className="min-h-[9rem] w-full p-4 text-sm leading-relaxed outline-none empty:before:content-[''] [&_mark]:rounded-sm [&_mark]:px-0.5"
        />
      </div>
    </div>
  );
}

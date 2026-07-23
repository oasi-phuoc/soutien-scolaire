"use client";

import { useEffect, useRef } from "react";
import {
  hasCorrectedContent,
  looksLikeHtml,
  plainTextToEditorHtml,
  sanitizeCorrectedHtml,
} from "@/lib/curriculum/content/communication/sanitize-corrected-html";

const TEXT_COLORS = [
  { label: "Noir", value: "#171717" },
  { label: "Rouge", value: "#dc2626" },
  { label: "Orange", value: "#d97706" },
  { label: "Vert", value: "#059669" },
  { label: "Bleu", value: "#2563eb" },
] as const;

const HIGHLIGHT_COLORS = [
  { label: "Jaune", value: "#fde68a" },
  { label: "Rose", value: "#fecdd3" },
  { label: "Vert", value: "#bbf7d0" },
  { label: "Bleu", value: "#bfdbfe" },
  { label: "Aucun", value: "transparent" },
] as const;

function runCommand(command: string, value?: string) {
  try {
    document.execCommand(command, false, value);
  } catch {
    /* ignore unsupported commands */
  }
}

function ToolBtn({
  label,
  title,
  active,
  onClick,
  children,
}: {
  label: string;
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
      {children ?? label}
    </button>
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

  function applyHighlight(color: string) {
    ref.current?.focus();
    if (color === "transparent") {
      runCommand("removeFormat");
    } else {
      // Chrome: hiliteColor ; Firefox: backColor
      runCommand("hiliteColor", color);
      runCommand("backColor", color);
    }
    emit();
  }

  const empty = !hasCorrectedContent(value);

  return (
    <div className="overflow-hidden rounded-[var(--radius-md)] border-2 border-amber-300 bg-white">
      <div className="flex flex-wrap items-center gap-1 border-b border-amber-200 bg-amber-50/80 px-2 py-1.5">
        <ToolBtn label="G" title="Gras" onClick={() => apply("bold")}>
          <span className="font-black">G</span>
        </ToolBtn>
        <ToolBtn label="I" title="Italique" onClick={() => apply("italic")}>
          <span className="italic">I</span>
        </ToolBtn>
        <ToolBtn label="S" title="Souligné" onClick={() => apply("underline")}>
          <span className="underline">S</span>
        </ToolBtn>
        <ToolBtn label=" Barré" title="Barré" onClick={() => apply("strikeThrough")}>
          <span className="line-through">abc</span>
        </ToolBtn>
        <span className="mx-1 h-5 w-px bg-amber-200" aria-hidden />
        <span className="px-1 text-[10px] font-semibold uppercase tracking-wide text-amber-700">Couleur</span>
        {TEXT_COLORS.map((c) => (
          <button
            key={c.value}
            type="button"
            title={c.label}
            aria-label={`Couleur ${c.label}`}
            onMouseDown={(e) => {
              e.preventDefault();
              apply("foreColor", c.value);
            }}
            className="h-6 w-6 rounded-full border border-zinc-300 shadow-sm"
            style={{ background: c.value }}
          />
        ))}
        <span className="mx-1 h-5 w-px bg-amber-200" aria-hidden />
        <span className="px-1 text-[10px] font-semibold uppercase tracking-wide text-amber-700">Surligné</span>
        {HIGHLIGHT_COLORS.map((c) => (
          <button
            key={c.value}
            type="button"
            title={`Surlignage ${c.label}`}
            aria-label={`Surlignage ${c.label}`}
            onMouseDown={(e) => {
              e.preventDefault();
              applyHighlight(c.value);
            }}
            className="h-6 w-6 rounded border border-zinc-300 shadow-sm"
            style={{
              background: c.value === "transparent" ? "#fff" : c.value,
              backgroundImage:
                c.value === "transparent"
                  ? "linear-gradient(45deg,#ccc 25%,transparent 25%,transparent 75%,#ccc 75%),linear-gradient(45deg,#ccc 25%,transparent 25%,transparent 75%,#ccc 75%)"
                  : undefined,
              backgroundSize: c.value === "transparent" ? "6px 6px" : undefined,
              backgroundPosition: c.value === "transparent" ? "0 0, 3px 3px" : undefined,
            }}
          />
        ))}
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
      <p className="border-t border-amber-100 px-3 py-1.5 text-[10px] text-amber-700/80">
        Sélectionnez un passage puis appliquez gras, souligné, surlignage ou couleur pour montrer la correction à l&apos;élève.
      </p>
    </div>
  );
}

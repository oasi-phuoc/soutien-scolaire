"use client";

import { useEffect, useRef, useState } from "react";
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
  { label: "Violet", value: "#7c3aed" },
] as const;

const HIGHLIGHT_COLORS = [
  { label: "Aucun", value: "transparent" },
  { label: "Jaune", value: "#fde68a" },
  { label: "Rose", value: "#fecdd3" },
  { label: "Vert", value: "#bbf7d0" },
  { label: "Bleu", value: "#bfdbfe" },
  { label: "Orange", value: "#fed7aa" },
] as const;

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

function ColorSwatchButton({
  color,
  label,
  selected,
  onPick,
  checkerboard,
}: {
  color: string;
  label: string;
  selected: boolean;
  onPick: () => void;
  checkerboard?: boolean;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={selected}
      onMouseDown={(e) => {
        e.preventDefault();
        onPick();
      }}
      className={`h-7 w-7 rounded-md border-2 shadow-sm transition-transform hover:scale-105 ${
        selected ? "border-zinc-800 ring-1 ring-zinc-800/30" : "border-white"
      }`}
      style={{
        background: checkerboard || color === "transparent" ? "#fff" : color,
        backgroundImage:
          checkerboard || color === "transparent"
            ? "linear-gradient(45deg,#d4d4d8 25%,transparent 25%,transparent 75%,#d4d4d8 75%),linear-gradient(45deg,#d4d4d8 25%,transparent 25%,transparent 75%,#d4d4d8 75%)"
            : undefined,
        backgroundSize: checkerboard || color === "transparent" ? "8px 8px" : undefined,
        backgroundPosition: checkerboard || color === "transparent" ? "0 0, 4px 4px" : undefined,
      }}
    />
  );
}

type PanelKind = "text" | "highlight" | null;

function ColorPickerButton({
  kind,
  open,
  onToggle,
  onClose,
  currentColor,
  colors,
  onPick,
  title,
  icon,
}: {
  kind: "text" | "highlight";
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  currentColor: string;
  colors: readonly { label: string; value: string }[];
  onPick: (color: string) => void;
  title: string;
  icon: React.ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const borderColor = currentColor === "transparent" ? "#a1a1aa" : currentColor;

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) onClose();
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        title={title}
        aria-label={title}
        aria-expanded={open}
        aria-haspopup="dialog"
        onMouseDown={(e) => {
          e.preventDefault();
          onToggle();
        }}
        className="inline-flex h-8 min-w-8 items-center justify-center rounded-md border-2 bg-white px-1.5 text-[var(--color-text-primary)] transition-colors hover:bg-amber-50"
        style={{ borderColor }}
      >
        {icon}
      </button>
      {open && (
        <div
          role="dialog"
          aria-label={title}
          className="absolute left-0 top-full z-30 mt-1 min-w-[9.5rem] rounded-lg border border-zinc-200 bg-white p-2 shadow-lg"
        >
          <div className="grid grid-cols-3 gap-1.5">
            {colors.map((c) => (
              <ColorSwatchButton
                key={`${kind}-${c.value}`}
                color={c.value}
                label={c.label}
                selected={c.value === currentColor}
                checkerboard={c.value === "transparent"}
                onPick={() => {
                  onPick(c.value);
                  onClose();
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
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
  const [textColor, setTextColor] = useState("#dc2626");
  const [highlightColor, setHighlightColor] = useState("#fde68a");
  const [openPanel, setOpenPanel] = useState<PanelKind>(null);

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

  function applyTextColor(color: string) {
    setTextColor(color);
    ref.current?.focus();
    runCommand("foreColor", color);
    emit();
  }

  function applyHighlight(color: string) {
    setHighlightColor(color);
    ref.current?.focus();
    if (color === "transparent") {
      // Retire le fond sans tout effacer si possible
      runCommand("hiliteColor", "transparent");
      runCommand("backColor", "transparent");
    } else {
      runCommand("hiliteColor", color);
      runCommand("backColor", color);
    }
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
        <ColorPickerButton
          kind="text"
          title="Couleur du texte"
          open={openPanel === "text"}
          onToggle={() => setOpenPanel((p) => (p === "text" ? null : "text"))}
          onClose={() => setOpenPanel(null)}
          currentColor={textColor}
          colors={TEXT_COLORS}
          onPick={applyTextColor}
          icon={<IconTextColor color={textColor} />}
        />
        <ColorPickerButton
          kind="highlight"
          title="Couleur de surlignage"
          open={openPanel === "highlight"}
          onToggle={() => setOpenPanel((p) => (p === "highlight" ? null : "highlight"))}
          onClose={() => setOpenPanel(null)}
          currentColor={highlightColor}
          colors={HIGHLIGHT_COLORS}
          onPick={applyHighlight}
          icon={<IconHighlight color={highlightColor} />}
        />
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

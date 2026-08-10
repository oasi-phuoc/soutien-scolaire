"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";

export type AppSelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type AppSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: readonly (AppSelectOption | string)[];
  placeholder?: string;
  emptyOption?: AppSelectOption | null;
  disabled?: boolean;
  error?: boolean;
  size?: "sm" | "md";
  placement?: "bottom" | "top";
  className?: string;
  style?: CSSProperties;
  menuClassName?: string;
  id?: string;
  name?: string;
  "aria-label"?: string;
};

function normalizeOptions(options: readonly (AppSelectOption | string)[]): AppSelectOption[] {
  return options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt,
  );
}

export function AppSelect({
  value,
  onChange,
  options,
  placeholder = "Sélectionner",
  emptyOption = null,
  disabled = false,
  error = false,
  size = "md",
  placement = "bottom",
  className = "",
  style,
  menuClassName = "",
  id,
  name,
  "aria-label": ariaLabel,
}: AppSelectProps) {
  const autoId = useId();
  const selectId = id ?? autoId;
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const normalized = useMemo(() => normalizeOptions(options), [options]);
  const selected = normalized.find((opt) => opt.value === value)
    ?? (emptyOption && value === emptyOption.value ? emptyOption : null);

  const triggerLabel = selected?.label ?? placeholder;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) close();
    }
    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  function pick(next: string) {
    onChange(next);
    close();
  }

  function onTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (disabled) return;
    if (event.key === "Enter" || event.key === " " || event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
    }
  }

  const sizeCls =
    size === "sm"
      ? "h-8 min-h-8 rounded-lg px-2 text-sm"
      : "min-h-10 rounded-[22px] px-4 py-2 text-sm";

  const menuRounded =
    placement === "top"
      ? "rounded-t-md rounded-b-[22px]"
      : "rounded-b-[22px] rounded-t-md";

  const menuPosition =
    placement === "top"
      ? "bottom-full mb-1"
      : "top-full mt-1";

  const isNumericSelection = /^\d+$/.test(triggerLabel);

  return (
    <div ref={rootRef} className={`relative ${className}`} style={style}>
      {name ? <input type="hidden" name={name} value={value} /> : null}
      <button
        id={selectId}
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
        onKeyDown={onTriggerKeyDown}
        className={`flex w-full items-center justify-between border bg-white text-left shadow-sm outline-none transition-colors dark:bg-zinc-900 ${sizeCls} ${
          error
            ? "border-amber-500"
            : open
              ? "border-[var(--color-theme)] ring-2 ring-[var(--color-theme)]/20"
              : "border-[var(--color-theme-muted)]/40 dark:border-[var(--color-theme)]/40"
        } disabled:cursor-not-allowed disabled:opacity-50`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
      >
        <span
          className={`min-w-0 ${
            size === "sm"
              ? `flex-1 truncate text-center font-semibold ${isNumericSelection ? "" : "uppercase"}`
              : "line-clamp-2 whitespace-normal"
          } ${
            selected
              ? error
                ? "font-semibold text-amber-600"
                : "text-zinc-800 dark:text-zinc-100"
              : "text-zinc-500 dark:text-zinc-400"
          }`}
        >
          {triggerLabel}
        </span>
        <svg
          className={`shrink-0 text-[var(--color-theme)] transition-transform ${
            size === "sm" ? "opacity-70" : ""
          } ${open ? "rotate-180" : ""}`}
          width={size === "sm" ? 14 : 17}
          height={size === "sm" ? 14 : 17}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          className={`absolute left-0 right-0 z-[80] ${menuPosition} overflow-hidden ${menuRounded} bg-white shadow-lg ring-1 ring-[var(--color-theme)]/15 dark:bg-zinc-900 dark:ring-[var(--color-theme)]/30 ${menuClassName}`}
        >
          <div className="app-select-scroll max-h-72 overflow-y-auto overscroll-contain py-2" role="listbox" aria-labelledby={selectId}>
            {emptyOption ? (
              <button
                type="button"
                disabled={emptyOption.disabled}
                onClick={() => pick(emptyOption.value)}
                className={`block w-full px-4 py-2 text-left text-sm sm:px-5 ${
                  value === emptyOption.value
                    ? "font-semibold text-[var(--color-theme)]"
                    : "text-zinc-700 hover:bg-[var(--color-theme-light)] dark:text-zinc-200 dark:hover:bg-[var(--color-theme)]/10"
                } disabled:opacity-50`}
                role="option"
                aria-selected={value === emptyOption.value}
              >
                <span className="line-clamp-2 whitespace-normal">{emptyOption.label}</span>
              </button>
            ) : null}
            {normalized.map((opt) => (
              <button
                key={opt.value}
                type="button"
                disabled={opt.disabled}
                onClick={() => pick(opt.value)}
                className={`block w-full px-4 py-2 text-left text-sm sm:px-5 ${
                  value === opt.value
                    ? "font-semibold text-[var(--color-theme)]"
                    : "text-zinc-700 hover:bg-[var(--color-theme-light)] dark:text-zinc-200 dark:hover:bg-[var(--color-theme)]/10"
                } disabled:opacity-50`}
                role="option"
                aria-selected={value === opt.value}
              >
                <span className="line-clamp-2 whitespace-normal">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

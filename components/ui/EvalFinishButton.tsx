"use client";

export function EvalFinishButton({
  onClick,
  accent = "var(--color-accent-lecture)",
  className = "",
}: {
  onClick: () => void;
  accent?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`mt-6 w-full rounded-[var(--radius-lg)] py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 ${className}`}
      style={{ background: accent }}
    >
      Terminer
    </button>
  );
}

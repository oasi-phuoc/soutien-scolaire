import type { HTMLAttributes } from "react";

type Variant = "level" | "module" | "note" | "medal" | "status";

export type AppBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant;
  tone?: "fr" | "alg" | "geo" | "quiz" | "neutral";
};

const toneBg: Record<NonNullable<AppBadgeProps["tone"]>, string> = {
  fr: "bg-[color-mix(in_oklch,var(--color-accent-fr)_15%,transparent)] text-[var(--color-accent-fr)]",
  alg: "bg-[color-mix(in_oklch,var(--color-accent-alg)_15%,transparent)] text-[var(--color-accent-alg)]",
  geo: "bg-[color-mix(in_oklch,var(--color-accent-geo)_15%,transparent)] text-[var(--color-accent-geo)]",
  quiz: "bg-[color-mix(in_oklch,var(--color-accent-quiz)_18%,transparent)] text-[var(--color-accent-quiz)]",
  neutral: "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]",
};

export function AppBadge({
  variant = "status",
  tone = "neutral",
  className = "",
  children,
  ...rest
}: AppBadgeProps) {
  const medal =
    variant === "medal"
      ? "bg-amber-100 text-amber-950 dark:bg-amber-900/40 dark:text-amber-100"
      : "";
  return (
    <span
      {...rest}
      className={`inline-flex items-center rounded-[var(--radius-pill)] px-2 py-0.5 text-[length:var(--font-size-xs)] font-medium ${variant === "medal" ? medal : toneBg[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

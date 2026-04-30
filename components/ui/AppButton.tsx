import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "success";
type Size = "sm" | "md" | "lg";

export type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  accent?: "fr" | "alg" | "geo" | "quiz";
};

const accentBg: Record<NonNullable<AppButtonProps["accent"]>, string> = {
  fr: "bg-[var(--color-accent-fr)]",
  alg: "bg-[var(--color-accent-alg)]",
  geo: "bg-[var(--color-accent-geo)]",
  quiz: "bg-[var(--color-accent-quiz)]",
};

export function AppButton({
  variant = "primary",
  size = "md",
  loading,
  fullWidth,
  iconLeft,
  iconRight,
  accent = "fr",
  className = "",
  disabled,
  children,
  ...rest
}: AppButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-1.5 rounded-[var(--radius-md)] font-medium transition-transform active:scale-[0.98] focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[color-mix(in_oklch,var(--color-accent-fr)_30%,transparent)] disabled:pointer-events-none disabled:opacity-40";
  const sizes: Record<Size, string> = {
    sm: "min-h-11 px-3 text-[length:var(--font-size-sm)]",
    md: "min-h-12 px-4 text-[length:var(--font-size-base)]",
    lg: "min-h-[52px] px-5 text-[length:var(--font-size-lg)]",
  };
  const styles: Record<Variant, string> = {
    primary: `${accentBg[accent]} text-white shadow-sm`,
    secondary:
      "border border-[var(--color-border-emphasis)] bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]",
    ghost:
      "bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
    danger:
      "bg-[color-mix(in_oklch,var(--color-danger)_12%,white)] text-[var(--color-danger)] dark:bg-[color-mix(in_oklch,var(--color-danger)_25%,black)]",
    success:
      "bg-[color-mix(in_oklch,var(--color-success)_12%,white)] text-[var(--color-success)] dark:bg-[color-mix(in_oklch,var(--color-success)_25%,black)]",
  };

  return (
    <button
      type="button"
      {...rest}
      disabled={disabled || loading}
      className={`${base} ${sizes[size]} ${styles[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {loading ? (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden
        />
      ) : (
        iconLeft
      )}
      {children}
      {iconRight}
    </button>
  );
}

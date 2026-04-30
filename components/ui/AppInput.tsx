import type { InputHTMLAttributes } from "react";

export type AppInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function AppInput({ label, error, id, className = "", ...rest }: AppInputProps) {
  const aid =
    id ??
    `input-${label || "field"}`.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="w-full">
      {label ? (
        <label
          htmlFor={aid}
          className="mb-1 block text-[length:var(--font-size-sm)] text-[var(--color-text-secondary)]"
        >
          {label}
        </label>
      ) : null}
      <input
        id={aid}
        {...rest}
        className={`h-10 w-full rounded-[var(--radius-md)] border bg-[var(--color-bg-primary)] px-3 text-[length:var(--font-size-base)] text-[var(--color-text-primary)] outline-none transition-shadow focus-visible:border-[var(--color-accent-alg)] focus-visible:ring-[3px] focus-visible:ring-[color-mix(in_oklch,var(--color-accent-alg)_22%,transparent)] ${
          error
            ? "border-[var(--color-danger)]"
            : "border-[var(--color-border-default)]"
        } ${className}`}
      />
      {error ? (
        <p className="mt-1 text-[length:var(--font-size-xs)] text-[var(--color-danger)]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

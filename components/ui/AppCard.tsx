import type { HTMLAttributes, ReactNode } from "react";

type Variant = "default" | "elevated" | "info" | "success" | "warning";

export type AppCardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: Variant;
  header?: ReactNode;
  footer?: ReactNode;
};

const borders: Record<Variant, string> = {
  default: "border border-[var(--color-border-default)]",
  elevated: "border border-[var(--color-border-emphasis)] shadow-sm",
  info: "border-2 border-[var(--color-accent-alg)]/40",
  success: "border border-[var(--color-success)]/35",
  warning: "border border-[var(--color-warning)]/45",
};

export function AppCard({
  variant = "default",
  header,
  footer,
  className = "",
  children,
  ...rest
}: AppCardProps) {
  return (
    <div
      {...rest}
      className={`rounded-[var(--radius-lg)] bg-[var(--color-bg-primary)] p-4 ${borders[variant]} ${className}`}
    >
      {header ? (
        <div className="mb-3 border-b border-[var(--color-border-default)] pb-3">
          {header}
        </div>
      ) : null}
      <div className="leading-relaxed">{children}</div>
      {footer ? (
        <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--color-border-default)] pt-3">
          {footer}
        </div>
      ) : null}
    </div>
  );
}

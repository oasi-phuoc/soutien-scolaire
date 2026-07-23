import type { ReactNode } from "react";

/** Consigne d’exercice (placement FR / impression) — style italic gras. */
export function ExerciseConsigne({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  if (children == null || children === "") return null;
  return (
    <p
      className={`text-sm font-semibold italic leading-relaxed text-[var(--color-text-primary)] ${className}`.trim()}
    >
      {children}
    </p>
  );
}

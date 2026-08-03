"use client";

/**
 * Traits d’écriture pleine largeur (vocab Ex11–12 / grammaire Ex7).
 * Petit écart sous le mot (pt-1.5 ≈ moitié d’un pt-3), pas collé à 0.
 */
export function PrintAnswerLines({
  count,
  className = "border-[var(--color-accent-fr)]/50",
}: {
  count: number;
  className?: string;
}) {
  const n = Math.max(1, count);
  return (
    <div className="pt-1.5">
      <div className={`border-b-2 ${className}`} />
      {Array.from({ length: n - 1 }, (_, i) => (
        <div key={i} className={`mt-5 h-7 border-b-2 ${className}`} />
      ))}
    </div>
  );
}

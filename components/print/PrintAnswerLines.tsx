"use client";

/** Traits d’écriture pleine largeur pour l’impression (1er trait collé, suivants espacés). */
export function PrintAnswerLines({
  count,
  className = "border-[var(--color-accent-fr)]/50",
}: {
  count: number;
  className?: string;
}) {
  const n = Math.max(1, count);
  return (
    <div>
      <div className={`border-b-2 ${className}`} />
      {Array.from({ length: n - 1 }, (_, i) => (
        <div key={i} className={`mt-5 h-7 border-b-2 ${className}`} />
      ))}
    </div>
  );
}

"use client";

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

interface EvalProgressBarProps {
  /** 0-based index of the current page/step */
  current: number;
  /** Total number of pages/steps */
  total: number;
  /** Seconds remaining; null/undefined = no timer displayed */
  timeLeft?: number | null;
  /** Number of already-validated exercises (their segments disappear) */
  validatedCount?: number;
}

export default function EvalProgressBar({ current, total, timeLeft, validatedCount = 0 }: EvalProgressBarProps) {
  const remaining = total - validatedCount;
  return (
    <div className="mb-6">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-correction)]">Évaluation</p>
        <div className="flex items-center gap-3">
          {timeLeft != null && (
            <span className="rounded-full bg-[var(--color-correction-soft)] px-2 py-0.5 text-xs font-bold tabular-nums text-[var(--color-correction)]">
              {formatTime(timeLeft)}
            </span>
          )}
          <p className="text-xs text-[var(--color-text-secondary)]">{remaining} restant(s)</p>
        </div>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: total }).map((_, i) => {
          if (i < validatedCount) return null;
          return (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i === current ? "bg-[var(--color-correction)] opacity-70" : "bg-[var(--color-border-default)]"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

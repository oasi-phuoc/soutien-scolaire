"use client";

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

interface TrainingProgressBarProps {
  current: number;
  total: number;
  timeLeft?: number | null;
}

export default function TrainingProgressBar({ current, total, timeLeft }: TrainingProgressBarProps) {
  return (
    <div className="mb-6">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-alg)]">Entraînement</p>
        <div className="flex items-center gap-3">
          {timeLeft != null && (
            <span className={`rounded-full px-2 py-0.5 text-xs font-bold tabular-nums ${
              timeLeft <= 15
                ? "bg-red-100 text-red-600"
                : "bg-amber-100 text-amber-700"
            }`}>
              {formatTime(timeLeft)}
            </span>
          )}
          <p className="text-xs text-[var(--color-text-secondary)]">{current + 1} / {total}</p>
        </div>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < current
                ? "bg-[var(--color-accent-alg)]"
                : i === current
                  ? "bg-[var(--color-accent-alg)] opacity-60"
                  : "bg-[var(--color-border-default)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

type Props = {
  value: number;
  color?: string;
  height?: 4 | 6 | 8;
  label?: boolean;
};

export function AppProgressBar({
  value,
  color = "var(--color-accent-alg)",
  height = 6,
  label,
}: Props) {
  const h = height === 4 ? "h-1" : height === 6 ? "h-1.5" : "h-2";
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full">
      <div
        className={`w-full overflow-hidden rounded-[var(--radius-pill)] bg-[var(--color-bg-secondary)] ${h}`}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-[var(--radius-pill)] transition-all duration-300"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      {label ? (
        <p className="mt-1 text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
          {pct}%
        </p>
      ) : null}
    </div>
  );
}

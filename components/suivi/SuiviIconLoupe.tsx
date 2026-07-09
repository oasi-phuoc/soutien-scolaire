export function SuiviIconLoupe({
  active = false,
  className = "",
}: {
  active?: boolean;
  className?: string;
}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`${active ? "text-[var(--color-theme)]" : "text-zinc-400"} ${className}`.trim()}
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

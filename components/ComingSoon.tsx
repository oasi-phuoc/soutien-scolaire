export function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-6 py-20 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-zinc-400 dark:text-zinc-500"
          aria-hidden
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-theme)]">
          En cours de création
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
          Bientôt disponible
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Cette section n&apos;est pas encore disponible.
        </p>
      </div>
    </div>
  );
}

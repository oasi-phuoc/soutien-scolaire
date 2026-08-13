import { APP_SHELL_FULL } from "@/lib/layout/page-shell";

export function ChargementEnCours({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "flex flex-col items-center justify-center gap-2 py-10"
          : "flex flex-col items-center justify-center gap-3 py-16"
      }
      role="status"
      aria-live="polite"
    >
      <span
        className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--color-theme)]/25 border-t-[var(--color-theme)]"
        aria-hidden
      />
      <p className="text-sm font-medium text-[var(--color-text-secondary)]">Chargement en cours</p>
    </div>
  );
}

export function ChargementEnCoursPage() {
  return (
    <main className={`${APP_SHELL_FULL} flex-1 py-10 pb-28`}>
      <ChargementEnCours />
    </main>
  );
}

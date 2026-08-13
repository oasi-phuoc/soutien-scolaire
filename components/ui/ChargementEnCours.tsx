import { APP_SHELL, APP_SHELL_BLEED, APP_SHELL_FULL } from "@/lib/layout/page-shell";

const ACCENT = "var(--color-theme)";

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

/** Carte bordée + titre uppercase, identique au suivi pédagogique de l’accueil. */
export function ChargementEnCoursCard({
  title,
  compact = true,
}: {
  title: string;
  compact?: boolean;
}) {
  return (
    <section className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
      <div className="px-4 py-4" style={{ background: `color-mix(in oklch, ${ACCENT} 10%, transparent)` }}>
        <p className="text-xl font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
          {title}
        </p>
      </div>
      <ChargementEnCours compact={compact} />
    </section>
  );
}

export function ChargementEnCoursPage({
  title,
  shell = "default",
}: {
  title: string;
  shell?: "default" | "full" | "bleed";
}) {
  const shellCls =
    shell === "bleed"
      ? `${APP_SHELL_BLEED} flex-1 py-4 pb-28 lg:py-6`
      : shell === "full"
        ? `${APP_SHELL_FULL} flex-1 py-10 pb-28`
        : `${APP_SHELL} flex-1 py-8 pb-32 lg:pb-28`;
  return (
    <main className={shellCls}>
      <ChargementEnCoursCard title={title} />
    </main>
  );
}

import Link from "next/link";

export function MathModuleComingSoon({
  moduleCode,
  moduleTitle,
  backHref,
}: {
  moduleCode: string;
  moduleTitle: string;
  backHref: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-6 py-16 text-center">
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{ background: "color-mix(in srgb, var(--color-accent-alg) 12%, transparent)" }}
      >
        <span className="text-lg font-bold text-[var(--color-accent-alg)]">{moduleCode}</span>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-alg)]">
          En cours de développement
        </p>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">{moduleTitle}</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Ce module n&apos;est pas encore disponible pour les élèves.
        </p>
      </div>
      <Link
        href={backHref}
        className="rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Retour aux mathématiques
      </Link>
    </div>
  );
}

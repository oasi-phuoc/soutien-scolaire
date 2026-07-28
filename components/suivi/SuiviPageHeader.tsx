import Link from "next/link";

export function SuiviPageHeader({
  title,
  subtitle,
  backHref = "/suivi",
  backLabel = "Suivi",
  actions,
}: {
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
  actions?: React.ReactNode;
}) {
  const backBtn = (
    <Link
      href={backHref}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-theme)] text-white transition-opacity hover:opacity-80"
      aria-label={`Retour ${backLabel}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </Link>
  );

  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div className="flex min-w-0 items-start gap-3">
        {/* Mobile : retour à gauche du titre */}
        <div className="mt-0.5 lg:hidden">{backBtn}</div>
        <div className="min-w-0">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">{title}</h1>
          {subtitle ? (
            <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-2">
        {actions}
        {/* Desktop : retour aligné à droite dans la barre de titre */}
        <div className="hidden lg:block">{backBtn}</div>
      </div>
    </div>
  );
}

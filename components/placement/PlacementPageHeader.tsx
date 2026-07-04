"use client";

import Link from "next/link";

export function PlacementBackButton({
  href,
  onClick,
  ariaLabel = "Retour",
}: {
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const className =
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-quiz)] text-white transition-opacity hover:opacity-80";
  const icon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={className}>
        {icon}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={className}>
      {icon}
    </button>
  );
}

export function PlacementPageHeader({
  label,
  title,
  subtitle,
  backHref,
  onBack,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  backHref?: string;
  onBack?: () => void;
}) {
  return (
    <header className="space-y-2">
      {label && (
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-quiz)]">
          {label}
        </p>
      )}
      <div className="flex items-center gap-2">
        <PlacementBackButton href={backHref} onClick={onBack} />
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">{title}</h1>
      </div>
      {subtitle && (
        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{subtitle}</p>
      )}
    </header>
  );
}

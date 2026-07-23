import Link from "next/link";

/** Raccourci Accueil → hub d'impression (admins uniquement). */
export function HomeImpressionCard() {
  return (
    <Link
      href="/admin/impression"
      className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-theme)]/25 bg-white/75 p-4 shadow-sm transition-transform hover:-translate-y-0.5"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-theme-light)] text-[var(--color-theme)]">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M6 9V2h12v7" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" rx="1" />
        </svg>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-[var(--color-text-primary)]">Impression</span>
        <span className="block text-xs text-[var(--color-text-secondary)]">
          Documents d&apos;exercice — Maths, Français, Placement
        </span>
      </span>
      <span className="text-xl text-[var(--color-theme)]">›</span>
    </Link>
  );
}

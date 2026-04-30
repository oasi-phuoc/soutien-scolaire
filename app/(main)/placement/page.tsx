import Link from "next/link";

export default function PlacementPage() {
  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-8 pb-32">
      <Link
        href="/"
        className="inline-flex min-h-11 items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
      >
        ← Accueil
      </Link>
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-quiz)]">
          Positionnement
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Quiz d&apos;entrée adaptatifs
        </h1>
        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
          Deux parcours distincts : français (oral → écrit progressif) et mathématiques (numération → algèbre /
          géométrie). Les étapes détaillées sont dans la structure pédagogique ; cette page servira de wizard
          non chronométré.
        </p>
      </header>
      <div className="space-y-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/40 p-4 text-sm text-[var(--color-text-secondary)]">
        <p>
          <strong className="text-[var(--color-text-primary)]">Français</strong> : détection alpha (visuel, sans
          lecture), puis discrimination auditive, enfin tests écrits A0→B1.
        </p>
        <p>
          <strong className="text-[var(--color-text-primary)]">Mathématiques</strong> : scores séparés pour
          l&apos;algèbre et la géométrie (un élève peut être avancé en calcul et en retard sur les solides).
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/francais"
          className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-fr)] px-5 text-sm font-semibold text-white"
        >
          Ouvrir le parcours français
        </Link>
        <Link
          href="/mathematiques"
          className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-emphasis)] px-5 text-sm font-semibold text-[var(--color-text-primary)]"
        >
          Ouvrir les mathématiques
        </Link>
      </div>
    </main>
  );
}

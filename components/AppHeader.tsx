import Link from "next/link";

type Props = {
  /** Si absent ou vide : pas de titre visible (accueil épurée). */
  title?: string;
  backHref?: string;
  rightSlot?: React.ReactNode;
};

export function AppHeader({ title, backHref, rightSlot }: Props) {
  const showTitle = Boolean(title?.trim());

  return (
    <header className="print:hidden sticky top-0 z-40 border-b border-zinc-200 bg-white/90 px-4 py-3 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex max-w-2xl items-center gap-3">
        {backHref ? (
          <Link
            href={backHref}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-label="Retour"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
        ) : null}
        {showTitle ? (
          <h1 className="min-w-0 flex-1 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </h1>
        ) : (
          <div className="min-w-0 flex-1" aria-hidden="true" />
        )}
        {rightSlot ? <div className="shrink-0">{rightSlot}</div> : null}
      </div>
    </header>
  );
}

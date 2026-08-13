import Link from "next/link";
import { PageBackButton } from "@/components/ui/PageBackButton";
import type { TaskMessage } from "@/app/actions/expression";
import { formatMailboxFullDate } from "@/lib/messagerie/inbox";

export function TaskMessageDetail({ item }: { item: TaskMessage }) {
  return (
    <main className="app-shell app-shell--wide flex flex-1 flex-col pb-28 pt-4 sm:pt-6">
      <header className="mb-4 flex items-center gap-3 border-b border-[var(--color-border-default)] pb-4">
        <PageBackButton href="/messagerie" ariaLabel="Retour à la boîte de réception" />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-theme)]">Devoir</p>
          <h1 className="truncate text-lg font-bold text-[var(--color-text-primary)] sm:text-xl">{item.title}</h1>
        </div>
      </header>

      <article className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-white shadow-sm">
        <div className="border-b border-[var(--color-border-default)] bg-[var(--color-theme-light)]/25 px-4 py-4 sm:px-6">
          <h2 className="text-lg font-bold text-[var(--color-text-primary)] sm:text-xl">{item.title}</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="grid grid-cols-[4.5rem_1fr] gap-x-3 gap-y-1 sm:grid-cols-[5.5rem_1fr]">
              <dt className="font-semibold text-[var(--color-text-secondary)]">De</dt>
              <dd className="text-[var(--color-text-primary)]">{item.sender_name}</dd>
              <dt className="font-semibold text-[var(--color-text-secondary)]">À</dt>
              <dd className="text-[var(--color-text-primary)]">Moi</dd>
              <dt className="font-semibold text-[var(--color-text-secondary)]">Date</dt>
              <dd className="text-[var(--color-text-primary)]">{formatMailboxFullDate(item.created_at)}</dd>
            </div>
          </dl>
        </div>

        <div className="px-4 py-6 sm:px-6">
          <div className="whitespace-pre-line text-base leading-7 text-[var(--color-text-primary)]">
            {item.body || "Un nouveau devoir vous a été attribué."}
          </div>
        </div>

        <footer className="flex flex-wrap gap-3 border-t border-[var(--color-border-default)] bg-[var(--color-theme-light)]/20 px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-theme)] px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            Voir mes devoirs
          </Link>
          <Link
            href="/messagerie"
            className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-theme-light)]/40"
          >
            Retour à la boîte de réception
          </Link>
        </footer>
      </article>
    </main>
  );
}

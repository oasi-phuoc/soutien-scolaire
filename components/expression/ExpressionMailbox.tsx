import Link from "next/link";
import type { ExpressionInboxRow } from "@/app/actions/expression";
import { formatMailboxDate, INBOX_MAX_MESSAGES, mailboxPreview } from "@/lib/messagerie/inbox";

const LEVEL_LABELS = { base: "Base", moyen: "Moyen", avance: "Avancé" } as const;

function rowSubject(row: ExpressionInboxRow): string {
  if (row.kind === "task") return row.prompt_title;
  if (row.status === "reviewed" && row.direction === "received") {
    return `Correction : ${row.prompt_title}`;
  }
  if (row.direction === "sent") {
    return `Envoi : ${row.prompt_title}`;
  }
  return row.prompt_title;
}

function rowPreview(row: ExpressionInboxRow): string {
  if (row.body) return mailboxPreview(row.body);
  if (row.kind === "task") return "Nouveau devoir attribué.";
  if (row.status === "reviewed") return "Correction disponible — ouvrez le message pour voir le résultat.";
  if (row.direction === "sent") return "Production envoyée — en attente de correction.";
  return "Production reçue — à corriger.";
}

function correspondentLabel(row: ExpressionInboxRow, isTeacher: boolean, isAdmin: boolean): string {
  const name = row.correspondent_name?.trim();
  if (row.kind === "task") return name || "Professeur";
  if (row.direction === "sent") return isTeacher || isAdmin ? (name || "Professeur") : "Moi";
  return name || (isTeacher ? "Élève" : "Professeur");
}

function EmailRow({
  row,
  isTeacher,
  isAdmin,
}: {
  row: ExpressionInboxRow;
  isTeacher: boolean;
  isAdmin: boolean;
}) {
  const subject = rowSubject(row);
  const preview = rowPreview(row);
  const from = correspondentLabel(row, isTeacher, isAdmin);
  const dateLabel = formatMailboxDate(row.created_at);
  const levelLabel = row.level ? LEVEL_LABELS[row.level] : null;

  const content = (
    <>
      <span
        className={`mt-2 h-2 w-2 shrink-0 rounded-full ${row.unread ? "bg-[var(--color-theme)]" : "bg-transparent"}`}
        aria-hidden
      />
      <span className="min-w-0 flex-1">
        <span className="flex items-baseline gap-2">
          <span className={`w-36 shrink-0 truncate sm:w-44 ${row.unread ? "font-bold text-[var(--color-text-primary)]" : "font-medium text-[var(--color-text-secondary)]"}`}>
            {from}
          </span>
          <span className={`min-w-0 flex-1 truncate ${row.unread ? "font-semibold text-[var(--color-text-primary)]" : "text-[var(--color-text-primary)]"}`}>
            {subject}
          </span>
          <span className="hidden shrink-0 text-xs text-[var(--color-text-secondary)] sm:inline">
            {levelLabel && (
              <span className="mr-2 rounded bg-[var(--color-theme-light)] px-1.5 py-0.5 text-[10px] font-bold text-[var(--color-theme)]">
                {levelLabel}
              </span>
            )}
            {row.kind === "task" && (
              <span className="mr-2 rounded bg-[var(--color-theme-light)] px-1.5 py-0.5 text-[10px] font-bold text-[var(--color-theme)]">
                Devoir
              </span>
            )}
          </span>
        </span>
        <span className="mt-0.5 flex items-baseline gap-2">
          <span className="hidden w-36 shrink-0 sm:block" />
          <span className="min-w-0 flex-1 truncate text-sm text-[var(--color-text-secondary)]">
            {preview}
          </span>
          <time className="shrink-0 text-xs tabular-nums text-[var(--color-text-secondary)]" dateTime={row.created_at}>
            {dateLabel}
          </time>
        </span>
      </span>
    </>
  );

  const rowClass =
    "flex w-full items-start gap-3 border-b border-[var(--color-border-default)] px-4 py-3 text-left transition-colors hover:bg-[var(--color-theme-light)]/35";

  if (row.kind === "task") {
    return (
      <Link href={`/messagerie/${row.submission_id}`} className={rowClass}>
        {content}
      </Link>
    );
  }

  return (
    <Link href={`/messagerie/${row.submission_id}`} className={rowClass}>
      {content}
    </Link>
  );
}

export function ExpressionMailbox({
  rows,
  isTeacher,
  isAdmin = false,
}: {
  rows: ExpressionInboxRow[];
  isTeacher: boolean;
  isAdmin?: boolean;
}) {
  const unreadCount = rows.filter((row) => row.unread).length;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-3 pb-28 pt-4 sm:px-4 sm:pt-6">
      <header className="mb-4 flex items-center gap-3 border-b border-[var(--color-border-default)] pb-4">
        <Link
          href="/"
          aria-label="Retour"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-theme-light)] hover:text-[var(--color-theme)]"
        >
          ‹
        </Link>
        <div className="min-w-0 flex-1">
          <h1 className="text-xl font-bold text-[var(--color-text-primary)] sm:text-2xl">Boîte de réception</h1>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {rows.length
              ? `${rows.length} message${rows.length > 1 ? "s" : ""}${unreadCount ? ` · ${unreadCount} non lu${unreadCount > 1 ? "s" : ""}` : ""}`
              : "Aucun message"}
            {rows.length > 0 && (
              <span className="text-[var(--color-text-secondary)]/70"> · max. {INBOX_MAX_MESSAGES}</span>
            )}
          </p>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-theme-light)] text-[var(--color-theme)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </span>
      </header>

      {rows.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border-default)] bg-white/60 px-6 py-16 text-center">
          <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-theme-light)] text-[var(--color-theme)]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </span>
          <p className="font-semibold text-[var(--color-text-primary)]">Votre boîte de réception est vide</p>
          <p className="mt-1 max-w-sm text-sm text-[var(--color-text-secondary)]">
            Les productions, corrections et devoirs apparaîtront ici comme dans une messagerie.
          </p>
        </div>
      ) : (
        <section className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-white shadow-sm">
          <div className="hidden border-b border-[var(--color-border-default)] bg-[var(--color-theme-light)]/40 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-secondary)] sm:grid sm:grid-cols-[1.5rem_1fr_5rem] sm:gap-3">
            <span />
            <span>Expéditeur / Objet</span>
            <span className="text-right">Date</span>
          </div>
          <div className="divide-y divide-[var(--color-border-default)]">
            {rows.map((row) => (
              <EmailRow key={row.submission_id} row={row} isTeacher={isTeacher} isAdmin={isAdmin} />
            ))}
          </div>
        </section>
      )}

      {rows.length >= INBOX_MAX_MESSAGES && (
        <p className="mt-3 text-center text-xs text-[var(--color-text-secondary)]">
          Les messages les plus anciens sont automatiquement supprimés au-delà de {INBOX_MAX_MESSAGES} messages.
        </p>
      )}
    </main>
  );
}

import Link from "next/link";
import { openTaskMessageAction, type ExpressionInboxRow } from "@/app/actions/expression";

const LEVEL_LABELS = { base: "Base", moyen: "Moyen", avance: "Avance" } as const;

function StatusLabel({ row }: { row: ExpressionInboxRow }) {
  if (row.kind === "task") {
    return <span className="shrink-0 text-xs font-bold text-emerald-600">{row.unread ? "Nouveau" : "Devoir"}</span>;
  }
  return (
    <span className={`shrink-0 text-xs font-bold ${row.status === "reviewed" ? "text-emerald-600" : "text-amber-600"}`}>
      {row.status === "reviewed" ? "Corrige" : row.direction === "sent" ? "Envoye" : "A corriger"}
    </span>
  );
}

function RowContent({ row, isAdmin }: { row: ExpressionInboxRow; isAdmin: boolean }) {
  const levelLabel = row.level ? LEVEL_LABELS[row.level] : null;
  return (
    <>
      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${row.unread ? "bg-amber-500" : "bg-zinc-200"}`} />
      <span className="min-w-0 flex-1 text-left">
        <span className="flex flex-wrap items-center gap-2">
          <span className="font-bold text-[var(--color-text-primary)]">{row.prompt_title}</span>
          {levelLabel && (
            <span className="rounded-full bg-[var(--color-theme-light)] px-2 py-0.5 text-[10px] font-bold text-[var(--color-theme)]">
              {levelLabel}
            </span>
          )}
          {row.kind === "task" && (
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
              Tache
            </span>
          )}
          {isAdmin && row.kind !== "task" && (
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-bold text-zinc-600">
              {row.direction === "sent" ? "Envoyee" : "Recue"}
            </span>
          )}
        </span>
        <span className="mt-1 block text-xs text-[var(--color-text-secondary)]">
          {row.correspondent_name || (row.direction === "received" ? "Eleve" : "Professeur")} - {new Date(row.created_at).toLocaleDateString("fr-CH")}
        </span>
        {row.body && <span className="mt-2 line-clamp-2 block whitespace-pre-line text-xs text-[var(--color-text-secondary)]">{row.body}</span>}
      </span>
      <StatusLabel row={row} />
    </>
  );
}

export function ExpressionMailbox({ rows, isTeacher, isAdmin = false }: { rows: ExpressionInboxRow[]; isTeacher: boolean; isAdmin?: boolean }) {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 pb-32 pt-8">
      <header className="mb-6 flex items-center gap-3">
        <Link href="/" aria-label="Retour" className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-theme)] text-xl text-white">
          ‹
        </Link>
        <div>
          <p className="text-xs font-bold uppercase text-[var(--color-theme)]">Expression</p>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Messagerie</h1>
        </div>
      </header>

      <p className="mb-5 text-sm text-[var(--color-text-secondary)]">
        {isAdmin
          ? "Productions recues, productions envoyees et messages de devoirs."
          : isTeacher
            ? "Productions que les eleves vous ont envoyees."
            : "Vos productions envoyees, les corrections recues et les devoirs affectes."}
      </p>

      {rows.length === 0 ? (
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-white/70 p-8 text-center">
          <p className="font-semibold text-[var(--color-text-primary)]">La messagerie est vide.</p>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Les productions ecrites, corrections et devoirs apparaitront ici.</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {rows.map((row) => (
            <li key={row.submission_id}>
              {row.kind === "task" ? (
                <form action={openTaskMessageAction.bind(null, row.submission_id)}>
                  <button type="submit" className="flex w-full items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white/80 p-4 shadow-sm transition-colors hover:border-[var(--color-theme)]/50">
                    <RowContent row={row} isAdmin={isAdmin} />
                  </button>
                </form>
              ) : (
                <Link href={`/messagerie/${row.submission_id}`} className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white/80 p-4 shadow-sm transition-colors hover:border-[var(--color-theme)]/50">
                  <RowContent row={row} isAdmin={isAdmin} />
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

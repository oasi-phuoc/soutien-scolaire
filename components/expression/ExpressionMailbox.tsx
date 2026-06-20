import Link from "next/link";
import type { ExpressionInboxRow } from "@/app/actions/expression";

const LEVEL_LABELS = { base: "Base", moyen: "Moyen", avance: "Avancé" } as const;

export function ExpressionMailbox({ rows, isTeacher }: { rows: ExpressionInboxRow[]; isTeacher: boolean }) {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 pb-32 pt-8">
      <header className="mb-6 flex items-center gap-3">
        <Link href="/" aria-label="Retour" className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-theme)] text-xl text-white">‹</Link>
        <div>
          <p className="text-xs font-bold uppercase text-[var(--color-theme)]">Expression</p>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Messagerie</h1>
        </div>
      </header>

      <p className="mb-5 text-sm text-[var(--color-text-secondary)]">
        {isTeacher ? "Productions que les élèves vous ont envoyées." : "Vos productions envoyées et les corrections reçues."}
      </p>

      {rows.length === 0 ? (
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-white/70 p-8 text-center">
          <p className="font-semibold text-[var(--color-text-primary)]">La messagerie est vide.</p>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Les productions écrites apparaîtront ici.</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {rows.map((row) => (
            <li key={row.submission_id}>
              <Link href={`/messagerie/${row.submission_id}`} className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white/80 p-4 shadow-sm transition-colors hover:border-[var(--color-theme)]/50">
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${row.unread ? "bg-amber-500" : "bg-zinc-200"}`} />
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-[var(--color-text-primary)]">{row.prompt_title}</span>
                    <span className="rounded-full bg-[var(--color-theme-light)] px-2 py-0.5 text-[10px] font-bold text-[var(--color-theme)]">{LEVEL_LABELS[row.level]}</span>
                  </span>
                  <span className="mt-1 block text-xs text-[var(--color-text-secondary)]">
                    {row.correspondent_name || (isTeacher ? "Élève" : "Professeur")} · {new Date(row.created_at).toLocaleDateString("fr-CH")}
                  </span>
                </span>
                <span className={`shrink-0 text-xs font-bold ${row.status === "reviewed" ? "text-emerald-600" : "text-amber-600"}`}>
                  {row.status === "reviewed" ? "Corrigé" : "À corriger"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

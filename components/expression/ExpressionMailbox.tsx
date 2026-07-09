"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition, useRef, useEffect, useId } from "react";
import {
  deleteInboxMessagesAction,
  type ExpressionInboxRow,
  type InboxDeleteItem,
} from "@/app/actions/expression";
import {
  countMailboxRowsByFilter,
  filterMailboxRows,
  formatMailboxDateTime,
  INBOX_MAX_MESSAGES,
  MAILBOX_FILTER_LABELS,
  MAILBOX_LEVEL_LABELS,
  mailboxNote,
  mailboxSubject,
  type MailboxFilter,
} from "@/lib/messagerie/inbox";

function correspondentLabel(row: ExpressionInboxRow, isTeacher: boolean, isAdmin: boolean): string {
  const name = row.correspondent_name?.trim();
  if (row.kind === "task") return name || "Professeur";
  if (row.direction === "sent") return isTeacher || isAdmin ? (name || "Professeur") : "Moi";
  return name || (isTeacher ? "Élève" : "Professeur");
}

function rowKind(row: ExpressionInboxRow): InboxDeleteItem["kind"] {
  return row.kind === "task" ? "task" : "expression";
}

const FILTER_OPTIONS: MailboxFilter[] = [
  "all",
  "unread",
  "tasks",
  "written",
  "oral",
  "pending",
  "reviewed",
];

function MailboxFilterMenu({
  filter,
  counts,
  onChange,
}: {
  filter: MailboxFilter;
  counts: Record<MailboxFilter, number>;
  onChange: (filter: MailboxFilter) => void;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const active = filter !== "all";

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={active ? `Filtrer : ${MAILBOX_FILTER_LABELS[filter]}` : "Filtrer les messages"}
        title="Filtrer"
        className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
          open || active
            ? "bg-[var(--color-theme-light)] text-[var(--color-theme)]"
            : "text-[var(--color-text-secondary)] hover:bg-[var(--color-theme-light)] hover:text-[var(--color-theme)]"
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 3H2l8 9v7l4 2v-9z" />
        </svg>
        {active && (
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[var(--color-theme)]" aria-hidden />
        )}
      </button>

      {open && (
        <div
          id={panelId}
          role="menu"
          aria-label="Filtrer les messages"
          className="absolute right-0 top-full z-20 mt-2 w-[min(16.5rem,calc(100vw-2rem))] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-white py-1 shadow-lg"
        >
          {FILTER_OPTIONS.map((option) => {
            const count = counts[option];
            const selected = filter === option;
            return (
              <button
                key={option}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                disabled={option !== "all" && count === 0}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                  selected
                    ? "bg-[var(--color-theme-light)] font-semibold text-[var(--color-theme)]"
                    : "text-[var(--color-text-primary)] hover:bg-[var(--color-theme-light)]/50"
                }`}
              >
                <span>{MAILBOX_FILTER_LABELS[option]}</span>
                <span className={`tabular-nums text-xs ${selected ? "text-[var(--color-theme)]" : "text-[var(--color-text-secondary)]"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function EmailRow({
  row,
  isTeacher,
  isAdmin,
  selectionMode,
  selected,
  onToggle,
}: {
  row: ExpressionInboxRow;
  isTeacher: boolean;
  isAdmin: boolean;
  selectionMode: boolean;
  selected: boolean;
  onToggle: () => void;
}) {
  const subject = mailboxSubject(row);
  const note = mailboxNote(row);
  const from = correspondentLabel(row, isTeacher, isAdmin);
  const dateLabel = formatMailboxDateTime(row.created_at);
  const levelLabel = row.level ? MAILBOX_LEVEL_LABELS[row.level] : null;

  const rowInner = (
    <div className="grid min-w-0 grid-cols-[1.25rem_minmax(5.5rem,7.5rem)_minmax(0,1fr)_minmax(4.5rem,6.5rem)] items-center gap-2 px-3 py-3 sm:grid-cols-[1.25rem_minmax(6.5rem,8.5rem)_minmax(0,1fr)_minmax(5rem,7rem)] sm:gap-3 sm:px-4">
      <div className="flex items-center justify-center">
        {selectionMode ? (
          <input
            type="checkbox"
            checked={selected}
            onChange={onToggle}
            onClick={(event) => event.stopPropagation()}
            aria-label={`Sélectionner le message de ${from}`}
            className="h-4 w-4 accent-[var(--color-theme)]"
          />
        ) : (
          <span
            className={`h-2 w-2 rounded-full ${row.unread ? "bg-[var(--color-theme)]" : "bg-transparent"}`}
            aria-hidden
          />
        )}
      </div>

      <div className="min-w-0">
        <p className={`truncate text-sm ${row.unread ? "font-bold text-[var(--color-text-primary)]" : "font-medium text-[var(--color-text-secondary)]"}`}>
          {from}
        </p>
        <time className="mt-0.5 block truncate text-[11px] tabular-nums text-[var(--color-text-secondary)]" dateTime={row.created_at}>
          {dateLabel}
        </time>
      </div>

      <div className="flex min-w-0 items-center gap-1.5">
        {levelLabel && (
          <span className="shrink-0 rounded bg-[var(--color-theme-light)] px-1.5 py-0.5 text-[10px] font-bold text-[var(--color-theme)]">
            {levelLabel}
          </span>
        )}
        {row.kind === "task" && (
          <span className="shrink-0 rounded bg-[var(--color-theme-light)] px-1.5 py-0.5 text-[10px] font-bold text-[var(--color-theme)]">
            Devoir
          </span>
        )}
        <span className={`min-w-0 truncate text-sm ${row.unread ? "font-semibold text-[var(--color-text-primary)]" : "text-[var(--color-text-primary)]"}`}>
          {subject}
        </span>
      </div>

      <p className={`truncate text-right text-xs tabular-nums ${note === "En attente" ? "font-medium text-[var(--color-text-secondary)]" : "font-semibold text-[var(--color-text-primary)]"}`}>
        {note}
      </p>
    </div>
  );

  const rowClass =
    "block w-full border-b border-[var(--color-border-default)] text-left transition-colors last:border-b-0 hover:bg-[var(--color-theme-light)]/35";

  if (selectionMode) {
    return (
      <button
        type="button"
        onClick={onToggle}
        className={`${rowClass} ${selected ? "bg-[var(--color-theme-light)]/50" : ""}`}
      >
        {rowInner}
      </button>
    );
  }

  return (
    <Link href={`/messagerie/${row.submission_id}`} className={rowClass}>
      {rowInner}
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
  const router = useRouter();
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<MailboxFilter>("all");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const filterCounts = useMemo(() => countMailboxRowsByFilter(rows), [rows]);
  const visibleRows = useMemo(() => filterMailboxRows(rows, filter), [rows, filter]);
  const unreadCount = rows.filter((row) => row.unread).length;
  const filterActive = filter !== "all";

  const selectedItems = useMemo(
    () =>
      visibleRows
        .filter((row) => selectedIds.has(row.submission_id))
        .map((row) => ({ id: row.submission_id, kind: rowKind(row) })),
    [visibleRows, selectedIds],
  );

  const allSelected = visibleRows.length > 0 && visibleRows.every((row) => selectedIds.has(row.submission_id));
  const someSelected = visibleRows.some((row) => selectedIds.has(row.submission_id)) && !allSelected;
  const selectAllRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = someSelected;
    }
  }, [someSelected]);

  const toggleSelectAll = () => {
    setSelectedIds(
      allSelected
        ? new Set()
        : new Set(visibleRows.map((row) => row.submission_id)),
    );
  };

  const handleFilterChange = (next: MailboxFilter) => {
    setFilter(next);
    setSelectedIds(new Set());
    setError(null);
  };

  const exitSelection = () => {
    setSelectionMode(false);
    setSelectedIds(new Set());
    setError(null);
  };

  const toggleRow = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const confirmDelete = () => {
    if (!selectedItems.length) {
      setError("Sélectionnez au moins un message.");
      return;
    }
    setError(null);
    startTransition(async () => {
      const result = await deleteInboxMessagesAction(selectedItems);
      if (!result.ok) {
        setError(result.reason ?? "Impossible de supprimer les messages.");
        return;
      }
      exitSelection();
      router.refresh();
    });
  };

  return (
    <main className="app-shell app-shell--wide flex flex-1 flex-col pb-28 pt-4 sm:pt-6">
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
              ? filterActive
                ? `${visibleRows.length} message${visibleRows.length > 1 ? "s" : ""} sur ${rows.length} · ${MAILBOX_FILTER_LABELS[filter]}`
                : `${rows.length} message${rows.length > 1 ? "s" : ""}${unreadCount ? ` · ${unreadCount} non lu${unreadCount > 1 ? "s" : ""}` : ""}`
              : "Aucun message"}
            {rows.length > 0 && (
              <span className="text-[var(--color-text-secondary)]/70"> · max. {INBOX_MAX_MESSAGES}</span>
            )}
          </p>
        </div>

        {rows.length > 0 && (
          <div className="flex shrink-0 items-center gap-2">
            {selectionMode ? (
              <>
                <button
                  type="button"
                  onClick={exitSelection}
                  disabled={isPending}
                  className="rounded-full px-3 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-theme-light)] disabled:opacity-60"
                >
                  Annuler
                </button>
                <button
                  type="button"
                  onClick={confirmDelete}
                  disabled={isPending || selectedItems.length === 0}
                  className="rounded-full bg-red-600 px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {isPending ? "Suppression…" : `Supprimer (${selectedItems.length})`}
                </button>
              </>
            ) : (
              <>
                <MailboxFilterMenu filter={filter} counts={filterCounts} onChange={handleFilterChange} />
                <button
                  type="button"
                  onClick={() => setSelectionMode(true)}
                  aria-label="Supprimer des messages"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors hover:bg-red-50 hover:text-red-600"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M3 6h18" />
                    <path d="M8 6V4h8v2" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                  </svg>
                </button>
              </>
            )}
          </div>
        )}

        {!selectionMode && (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-theme-light)] text-[var(--color-theme)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </span>
        )}
      </header>

      {error && (
        <p className="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

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
      ) : visibleRows.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border-default)] bg-white/60 px-6 py-16 text-center">
          <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-theme-light)] text-[var(--color-theme)]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
              <path d="M22 3H2l8 9v7l4 2v-9z" />
            </svg>
          </span>
          <p className="font-semibold text-[var(--color-text-primary)]">Aucun message pour ce filtre</p>
          <p className="mt-1 max-w-sm text-sm text-[var(--color-text-secondary)]">
            Aucun résultat pour « {MAILBOX_FILTER_LABELS[filter]} ».
          </p>
          <button
            type="button"
            onClick={() => handleFilterChange("all")}
            className="mt-4 rounded-full bg-[var(--color-theme-light)] px-4 py-2 text-sm font-semibold text-[var(--color-theme)] transition-opacity hover:opacity-90"
          >
            Afficher tous les messages
          </button>
        </div>
      ) : (
        <section className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-white shadow-sm">
          <div className="grid grid-cols-[1.25rem_minmax(5.5rem,7.5rem)_minmax(0,1fr)_minmax(4.5rem,6.5rem)] gap-2 border-b border-[var(--color-border-default)] bg-[var(--color-theme-light)]/40 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-secondary)] sm:grid-cols-[1.25rem_minmax(6.5rem,8.5rem)_minmax(0,1fr)_minmax(5rem,7rem)] sm:gap-3 sm:px-4 sm:text-[11px]">
            <div className="flex items-center justify-center">
              {selectionMode ? (
                <input
                  ref={selectAllRef}
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleSelectAll}
                  aria-label="Tout sélectionner"
                  className="h-4 w-4 accent-[var(--color-theme)]"
                />
              ) : (
                <span aria-hidden />
              )}
            </div>
            <span>Expéditeur</span>
            <span>Objet</span>
            <span className="text-right">Note</span>
          </div>
          <div>
            {visibleRows.map((row) => (
              <EmailRow
                key={row.submission_id}
                row={row}
                isTeacher={isTeacher}
                isAdmin={isAdmin}
                selectionMode={selectionMode}
                selected={selectedIds.has(row.submission_id)}
                onToggle={() => toggleRow(row.submission_id)}
              />
            ))}
          </div>
        </section>
      )}

      {selectionMode && (
        <p className="mt-3 text-center text-xs text-[var(--color-text-secondary)]">
          Cochez les messages à supprimer, puis validez avec le bouton rouge.
        </p>
      )}

      {rows.length >= INBOX_MAX_MESSAGES && (
        <p className="mt-3 text-center text-xs text-[var(--color-text-secondary)]">
          Les messages les plus anciens sont automatiquement supprimés au-delà de {INBOX_MAX_MESSAGES} messages.
        </p>
      )}
    </main>
  );
}

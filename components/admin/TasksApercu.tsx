"use client";

import { Fragment, useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { TaskRow, TaskStudentStatus } from "@/app/actions/tasks";
import { deleteTaskAction, getTaskStudentsAction, updateTaskAction } from "@/app/actions/tasks";
import { SuiviIconLoupe } from "@/components/suivi/SuiviIconLoupe";

const TASKS_TABLE_PAGE_SIZE = 30;

function formatDate(iso: string | null) {
  if (!iso) return null;
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("fr-CH", { day: "numeric", month: "short", year: "numeric" });
}

/** Date compacte JJ.MM.AA pour mobile (colonne étroite). */
function formatDateCompact(iso: string | null) {
  if (!iso) return null;
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return null;
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(-2);
  return `${dd}.${mm}.${yy}`;
}

function isDueSoon(iso: string | null) {
  if (!iso) return false;
  const due = new Date(iso + "T00:00:00");
  const now = new Date();
  return due.getTime() - now.getTime() < 3 * 24 * 60 * 60 * 1000;
}

function isTaskSettled(task: TaskRow) {
  return task.total_students > 0 && task.done_count >= task.total_students;
}

function IconTrash() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

function TaskDetailPanel({ task, onClose, onDeleted }: { task: TaskRow; onClose: () => void; onDeleted?: () => void }) {
  const router = useRouter();
  const [students, setStudents] = useState<TaskStudentStatus[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description ?? "");
  const [dueDate, setDueDate] = useState(task.due_date ?? "");
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saveOk, setSaveOk] = useState(false);
  const [isSaving, startSave] = useTransition();
  const [isDeleting, startDelete] = useTransition();
  const settled = isTaskSettled(task);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadError(null);
    getTaskStudentsAction(task.task_id).then((res) => {
      if (cancelled) return;
      if (res.ok) setStudents(res.students);
      else setLoadError(res.error ?? "Erreur de chargement.");
      setLoading(false);
    });
    return () => { cancelled = true; };
  }, [task.task_id]);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaveError(null);
    setSaveOk(false);
    startSave(async () => {
      const res = await updateTaskAction(task.task_id, {
        title: title.trim() || task.title,
        description: description.trim() || null,
        due_date: dueDate || null,
      });
      if (!res.ok) { setSaveError(res.reason ?? "Erreur."); return; }
      setSaveOk(true);
      router.refresh();
      setTimeout(() => setSaveOk(false), 2500);
    });
  }

  function handleDelete() {
    if (!settled) return;
    if (!window.confirm(`Supprimer le devoir « ${task.title} » ?`)) return;
    startDelete(async () => {
      const res = await deleteTaskAction(task.task_id);
      if (!res.ok) {
        setSaveError(res.reason ?? "Impossible de supprimer.");
        return;
      }
      onDeleted?.();
      onClose();
      router.refresh();
    });
  }

  const inputCls =
    "w-full rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-900 outline-none transition-colors focus:border-[var(--color-theme)] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50";

  return (
    <div className="space-y-3">
      {/* Edit form */}
      <form onSubmit={handleSave} className="space-y-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950">
        <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Modifier la tâche</p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs text-zinc-500">Titre *</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className={inputCls} />
          </div>
          <div>
            <label className="mb-1 block text-xs text-zinc-500">Date limite</label>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className={inputCls} />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-xs text-zinc-500">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            className={`${inputCls} resize-none`}
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={isSaving}
            className="rounded-lg bg-[var(--color-theme)] px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {isSaving ? "Enregistrement…" : "Enregistrer"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-900"
          >
            Fermer
          </button>
          {settled && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
              className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 disabled:opacity-50 dark:border-red-900/50 dark:text-red-400 dark:hover:bg-red-950/30"
            >
              <IconTrash />
              {isDeleting ? "Suppression…" : "Supprimer"}
            </button>
          )}
          {saveOk && <span className="text-xs text-green-600 dark:text-green-400">Enregistré ✓</span>}
          {saveError && <span className="text-xs text-red-500">{saveError}</span>}
        </div>
      </form>

      {/* Student progress */}
      <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950">
        <p className="mb-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          Avancement — {task.done_count}/{task.total_students} élève{task.total_students !== 1 ? "s" : ""} terminé{task.done_count !== 1 ? "s" : ""}
        </p>
        {loading && <p className="text-xs text-zinc-400">Chargement…</p>}
        {loadError && <p className="text-xs text-red-500">{loadError}</p>}
        {students !== null && students.length === 0 && (
          <p className="text-xs italic text-zinc-400">Aucun élève assigné.</p>
        )}
        {students !== null && students.length > 0 && (
          <div className="grid gap-1.5 sm:grid-cols-2">
            {students.map((s) => {
              const name = [s.prenom, s.nom].filter(Boolean).join(" ") || s.student_id.slice(0, 8);
              const done = s.status === "done";
              return (
                <div
                  key={s.student_id}
                  className="flex items-center gap-2 rounded-lg bg-zinc-50 px-2.5 py-1.5 dark:bg-zinc-900"
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${
                      done
                        ? "bg-[var(--color-theme-light)] text-[var(--color-theme)] dark:bg-[var(--color-theme)]/20 dark:text-[var(--color-theme-muted)]"
                        : "bg-zinc-200 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"
                    }`}
                  >
                    {done ? "✓" : "·"}
                  </span>
                  <span className="flex-1 truncate text-xs text-zinc-700 dark:text-zinc-300">{name}</span>
                  {s.classe && <span className="shrink-0 text-[10px] text-zinc-400">{s.classe}</span>}
                  <span
                    className={`shrink-0 text-[10px] font-medium ${
                      done ? "text-[var(--color-theme)] dark:text-[var(--color-theme-muted)]" : "text-zinc-400"
                    }`}
                  >
                    {done ? (s.done_at ? formatDate(s.done_at.slice(0, 10)) : "Validé") : "En attente"}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export function TasksApercu({ tasks }: { tasks: TaskRow[] }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [openTaskId, setOpenTaskId] = useState<string | null>(null);
  const [isDeleting, startDelete] = useTransition();
  const [visibleCount, setVisibleCount] = useState(TASKS_TABLE_PAGE_SIZE);

  const q = search.toLowerCase();
  const filtered = q
    ? tasks.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          (t.module_ref ?? "").toLowerCase().includes(q) ||
          (t.lesson_ref ?? "").toLowerCase().includes(q)
      )
    : tasks;

  useEffect(() => {
    setVisibleCount(TASKS_TABLE_PAGE_SIZE);
  }, [search]);

  const cappedVisible = Math.min(visibleCount, filtered.length);
  const visibleTasks = filtered.slice(0, cappedVisible);
  const hasMore = cappedVisible < filtered.length;

  function handleDeleteTask(task: TaskRow) {
    if (!isTaskSettled(task)) return;
    if (!window.confirm(`Supprimer le devoir « ${task.title} » ?`)) return;
    startDelete(async () => {
      const res = await deleteTaskAction(task.task_id);
      if (!res.ok) return;
      if (openTaskId === task.task_id) setOpenTaskId(null);
      router.refresh();
    });
  }

  return (
    <div className="space-y-4">
      {/* Search bar */}
      <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900">
        <svg
          width="15" height="15" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          className="shrink-0 text-zinc-400" aria-hidden
        >
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher par titre, module ou leçon…"
          className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400 dark:text-zinc-50"
        />
        {search && (
          <button onClick={() => setSearch("")} className="shrink-0 text-zinc-400 hover:text-zinc-600">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Une seule table (en-tête sticky) — évite le décalage de ScrollableTable à 2 tables */}
      <div className="app-table-scroll max-h-[calc(100dvh-14rem)] overflow-y-auto overflow-x-hidden rounded-2xl border border-zinc-200 lg:max-h-[calc(100dvh-12rem)] dark:border-zinc-800">
        <table className="tasks-apercu-table w-full table-fixed text-sm">
          <colgroup>
            <col className="tasks-apercu-table__loupe" />
            <col className="tasks-apercu-table__titre" />
            <col className="tasks-apercu-table__module" />
            <col className="tasks-apercu-table__date" />
            <col className="tasks-apercu-table__eleves" />
            <col className="tasks-apercu-table__avancement" />
            <col className="tasks-apercu-table__actions" />
          </colgroup>
          <thead className="sticky top-0 z-20">
            <tr className="border-b border-[var(--color-theme)] bg-[var(--color-theme)]">
              <th
                className="tasks-apercu-table__loupe bg-[var(--color-theme)]"
                aria-label="Détail"
              />
              <th className="tasks-apercu-table__titre min-w-0 bg-[var(--color-theme)] px-2 py-2 text-left text-xs font-semibold uppercase tracking-wide text-white sm:px-4 sm:py-3">Titre</th>
              <th className="tasks-apercu-table__module hidden bg-[var(--color-theme)] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-white md:table-cell">Module / Leçon</th>
              <th className="tasks-apercu-table__date bg-[var(--color-theme)] px-1 py-2 text-left text-[10px] font-semibold uppercase tracking-wide text-white sm:px-4 sm:py-3 sm:text-xs" title="Date limite">
                <span className="sm:hidden">Limite</span>
                <span className="hidden sm:inline">Date limite</span>
              </th>
              <th className="tasks-apercu-table__eleves bg-[var(--color-theme)] px-1 py-2 text-left text-[10px] font-semibold uppercase tracking-wide text-white sm:px-4 sm:py-3 sm:text-xs" title="Élèves">
                <span className="sm:hidden">Él.</span>
                <span className="hidden sm:inline">Élèves</span>
              </th>
              <th className="tasks-apercu-table__avancement hidden bg-[var(--color-theme)] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-white lg:table-cell">Avancement</th>
              <th className="tasks-apercu-table__actions bg-[var(--color-theme)] px-2 py-2 sm:px-3 sm:py-3" aria-label="Supprimer" />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-sm text-zinc-400">
                  {tasks.length === 0 ? "Aucune tâche assignée pour l'instant." : "Aucun résultat pour cette recherche."}
                </td>
              </tr>
            ) : (
              visibleTasks.map((task) => {
                const pct = task.total_students > 0 ? Math.round((task.done_count / task.total_students) * 100) : 0;
                const overdue =
                  task.due_date &&
                  new Date(task.due_date + "T00:00:00") < new Date() &&
                  task.done_count < task.total_students;
                const soon = !overdue && isDueSoon(task.due_date);
                const isOpen = openTaskId === task.task_id;
                const settled = isTaskSettled(task);
                const dateFull = formatDate(task.due_date);
                const dateCompact = formatDateCompact(task.due_date);
                const dateCls = overdue
                  ? "text-red-600 dark:text-red-400"
                  : soon
                    ? "text-amber-600 dark:text-amber-400"
                    : "text-zinc-600 dark:text-zinc-400";
                return (
                  <Fragment key={task.task_id}>
                    <tr className={`group align-middle transition-colors ${isOpen ? "bg-zinc-50 dark:bg-zinc-900/60" : "bg-white dark:bg-zinc-950"} border-b border-zinc-100 dark:border-zinc-800`}>
                      <td
                        className={`tasks-apercu-table__loupe sticky left-0 z-10 shadow-[2px_0_4px_-2px_rgba(0,0,0,0.12)] ${
                          isOpen
                            ? "bg-zinc-50 dark:bg-zinc-900/60"
                            : "bg-white group-hover:bg-zinc-50 dark:bg-zinc-950 dark:group-hover:bg-zinc-900"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenTaskId(isOpen ? null : task.task_id)}
                          className="inline-flex rounded-lg p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                          aria-label={isOpen ? "Fermer le détail" : "Voir et modifier la tâche"}
                          title={isOpen ? "Fermer" : "Voir / modifier"}
                        >
                          <SuiviIconLoupe active={isOpen} />
                        </button>
                      </td>
                      <td className="tasks-apercu-table__titre min-w-0 px-2 py-2.5 sm:px-4 sm:py-3">
                        <span className="block truncate font-medium text-zinc-800 dark:text-zinc-200" title={task.title}>{task.title}</span>
                        {task.description && (
                          <span className="hidden truncate text-xs text-zinc-400 sm:block" title={task.description}>{task.description}</span>
                        )}
                      </td>
                      <td className="tasks-apercu-table__module hidden px-4 py-3 md:table-cell">
                        {task.module_ref || task.lesson_ref ? (
                          <div className="min-w-0 space-y-0.5">
                            {task.module_ref && <span className="block truncate text-xs font-medium text-zinc-700 dark:text-zinc-300">{task.module_ref}</span>}
                            {task.lesson_ref && <span className="block truncate text-xs text-zinc-400">{task.lesson_ref}</span>}
                          </div>
                        ) : (
                          <span className="text-zinc-400">—</span>
                        )}
                      </td>
                      <td className="tasks-apercu-table__date px-1 py-2.5 sm:px-4 sm:py-3" title={dateFull ?? undefined}>
                        {task.due_date ? (
                          <>
                            <span className={`block truncate text-[11px] font-medium tabular-nums sm:hidden ${dateCls}`}>
                              {overdue && "⚠ "}{dateCompact}
                            </span>
                            <span className={`hidden truncate text-xs font-medium sm:block ${dateCls}`}>
                              {overdue && "⚠ "}{dateFull}
                            </span>
                          </>
                        ) : (
                          <span className="text-zinc-400">—</span>
                        )}
                      </td>
                      <td className="tasks-apercu-table__eleves px-1 py-2.5 text-[11px] font-semibold tabular-nums text-zinc-700 sm:px-4 sm:py-3 sm:text-xs dark:text-zinc-300">
                        <span className="block truncate">{task.done_count}/{task.total_students}</span>
                      </td>
                      <td className="tasks-apercu-table__avancement hidden px-4 py-3 lg:table-cell">
                        <div className="flex min-w-0 items-center gap-2">
                          <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                            <div
                              className={`h-full rounded-full ${pct === 100 ? "bg-[var(--color-theme)]" : "bg-blue-500"}`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="w-9 shrink-0 text-right text-xs tabular-nums text-zinc-500">{pct}%</span>
                        </div>
                      </td>
                      <td className="tasks-apercu-table__actions px-2 py-3 sm:px-3">
                        {settled ? (
                          <button
                            type="button"
                            onClick={() => handleDeleteTask(task)}
                            disabled={isDeleting}
                            className="flex h-7 w-7 items-center justify-center rounded-lg text-red-500 transition-colors hover:bg-red-50 disabled:opacity-50 dark:hover:bg-red-950/30"
                            aria-label={`Supprimer le devoir ${task.title}`}
                            title="Supprimer (devoir terminé)"
                          >
                            <IconTrash />
                          </button>
                        ) : null}
                      </td>
                    </tr>
                    {isOpen && (
                      <tr className="bg-zinc-50/60 dark:bg-zinc-900/30">
                        <td colSpan={7} className="px-4 py-4">
                          <TaskDetailPanel
                            task={task}
                            onClose={() => setOpenTaskId(null)}
                            onDeleted={() => setOpenTaskId(null)}
                          />
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((n) => n + TASKS_TABLE_PAGE_SIZE)}
            className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Afficher plus ({filtered.length - cappedVisible} restant{filtered.length - cappedVisible > 1 ? "s" : ""})
          </button>
        </div>
      )}

      <p className="text-xs text-zinc-400">
        {cappedVisible} / {filtered.length} tâche{filtered.length !== 1 ? "s" : ""} affichée{filtered.length !== 1 ? "s" : ""}
      </p>
    </div>
  );
}

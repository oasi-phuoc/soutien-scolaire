"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import {
  createTaskAction,
  deleteTaskAction,
  getTeacherTasksAction,
  type StudentOption,
  type TaskRow,
} from "@/app/actions/tasks";

function formatDate(iso: string | null) {
  if (!iso) return null;
  const d = new Date(iso + (iso.includes("T") ? "" : "T00:00:00"));
  return d.toLocaleDateString("fr-CH", { day: "numeric", month: "short", year: "numeric" });
}

function isOverdue(due: string | null) {
  if (!due) return false;
  return new Date(due + "T23:59:59") < new Date();
}

export function TasksPanel({ students }: { students: StudentOption[] }) {
  const [tasks, setTasks] = useState<TaskRow[]>([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Group students by classe
  const byClasse = students.reduce<Record<string, StudentOption[]>>((acc, s) => {
    const key = s.classe ?? "—";
    (acc[key] ??= []).push(s);
    return acc;
  }, {});
  const classes = Object.keys(byClasse).sort();

  const reload = useCallback(async () => {
    setLoading(true);
    const res = await getTeacherTasksAction();
    setTasks(res.tasks);
    setLoading(false);
  }, []);

  useEffect(() => { void reload(); }, [reload]);

  function toggleStudent(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  function toggleClasse(classe: string) {
    const ids = (byClasse[classe] ?? []).map((s) => s.id);
    const allSelected = ids.every((id) => selectedIds.has(id));
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allSelected) ids.forEach((id) => next.delete(id));
      else ids.forEach((id) => next.add(id));
      return next;
    });
  }

  function toggleAll() {
    if (selectedIds.size === students.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(students.map((s) => s.id)));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(false);
    startTransition(async () => {
      const res = await createTaskAction(title, description, dueDate || null, Array.from(selectedIds));
      if (!res.ok) {
        setFormError(res.reason ?? "Erreur inconnue.");
        return;
      }
      setTitle("");
      setDescription("");
      setDueDate("");
      setSelectedIds(new Set());
      setFormSuccess(true);
      await reload();
      setTimeout(() => setFormSuccess(false), 3000);
    });
  }

  function handleDelete(taskId: string) {
    startTransition(async () => {
      await deleteTaskAction(taskId);
      await reload();
    });
  }

  const inputCls = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition-colors focus:border-green-500 focus:ring-2 focus:ring-green-500/15 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50";

  return (
    <div className="space-y-8">

      {/* ── Nouvelle tâche ── */}
      <section>
        <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">Nouvelle tâche</h2>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">

          <div>
            <label className="mb-1 block text-xs font-semibold text-zinc-500 dark:text-zinc-400">Titre *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Réviser les tables de multiplication"
              required
              className={inputCls}
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-zinc-500 dark:text-zinc-400">Description (optionnel)</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              placeholder="Précisions supplémentaires…"
              className={`${inputCls} resize-none`}
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-zinc-500 dark:text-zinc-400">Date limite (optionnel)</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className={inputCls}
            />
          </div>

          {/* Student selector */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Élèves * <span className="font-normal text-zinc-400">({selectedIds.size} sélectionné{selectedIds.size !== 1 ? "s" : ""})</span>
              </label>
              {students.length > 0 && (
                <button
                  type="button"
                  onClick={toggleAll}
                  className="text-xs text-green-600 hover:underline"
                >
                  {selectedIds.size === students.length ? "Tout désélectionner" : "Tout sélectionner"}
                </button>
              )}
            </div>

            {students.length === 0 ? (
              <p className="text-xs text-zinc-400 italic">Aucun élève enregistré.</p>
            ) : (
              <div className="max-h-56 overflow-y-auto rounded-xl border border-zinc-200 dark:border-zinc-700">
                {classes.map((classe) => {
                  const classeStudents = byClasse[classe] ?? [];
                  const allInClasse = classeStudents.every((s) => selectedIds.has(s.id));
                  return (
                    <div key={classe}>
                      {/* Classe header */}
                      <button
                        type="button"
                        onClick={() => toggleClasse(classe)}
                        className="flex w-full items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-3 py-1.5 text-left text-xs font-semibold text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
                      >
                        <span className={`h-3.5 w-3.5 shrink-0 rounded border text-[10px] leading-none flex items-center justify-center ${allInClasse ? "border-green-500 bg-green-500 text-white" : "border-zinc-300 dark:border-zinc-600"}`}>
                          {allInClasse ? "✓" : ""}
                        </span>
                        Classe : {classe}
                      </button>
                      {/* Students in this class */}
                      {classeStudents.map((s) => {
                        const checked = selectedIds.has(s.id);
                        const name = [s.prenom, s.nom].filter(Boolean).join(" ") || s.id.slice(0, 8);
                        return (
                          <label
                            key={s.id}
                            className="flex cursor-pointer items-center gap-2.5 border-b border-zinc-100 px-4 py-2 text-sm text-zinc-700 hover:bg-green-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-green-950/20 last:border-0"
                          >
                            <span className={`h-3.5 w-3.5 shrink-0 rounded border text-[10px] leading-none flex items-center justify-center ${checked ? "border-green-500 bg-green-500 text-white" : "border-zinc-300 dark:border-zinc-600"}`}>
                              {checked ? "✓" : ""}
                            </span>
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleStudent(s.id)}
                              className="sr-only"
                            />
                            {name}
                          </label>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {formError && (
            <p className="text-sm text-red-600 dark:text-red-400">{formError}</p>
          )}
          {formSuccess && (
            <p className="text-sm text-green-600 dark:text-green-400">Tâche créée et assignée !</p>
          )}

          <button
            type="submit"
            disabled={isPending || !title.trim() || selectedIds.size === 0}
            className="w-full rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-700 disabled:opacity-50"
          >
            {isPending ? "Envoi…" : "Assigner la tâche"}
          </button>
        </form>
      </section>

      {/* ── Tâches existantes ── */}
      <section>
        <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">
          Tâches assignées
          {tasks.length > 0 && (
            <span className="ml-2 rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-normal text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
              {tasks.length}
            </span>
          )}
        </h2>

        {loading ? (
          <p className="text-sm text-zinc-400">Chargement…</p>
        ) : tasks.length === 0 ? (
          <p className="rounded-xl border border-dashed border-zinc-200 p-6 text-center text-sm text-zinc-400 dark:border-zinc-700">
            Aucune tâche assignée pour le moment.
          </p>
        ) : (
          <ul className="space-y-3">
            {tasks.map((t) => {
              const overdue = isOverdue(t.due_date);
              const progress = t.total_students > 0 ? Math.round((t.done_count / t.total_students) * 100) : 0;
              return (
                <li key={t.task_id} className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-zinc-900 dark:text-zinc-50">{t.title}</p>
                      {t.description && (
                        <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">{t.description}</p>
                      )}
                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
                        {t.due_date && (
                          <span className={overdue ? "font-semibold text-red-500" : ""}>
                            Échéance : {formatDate(t.due_date)}{overdue ? " — en retard" : ""}
                          </span>
                        )}
                        <span>Assignée le {formatDate(t.created_at)}</span>
                      </div>
                      {/* Progress bar */}
                      {t.total_students > 0 && (
                        <div className="mt-3">
                          <div className="mb-1 flex justify-between text-xs text-zinc-400">
                            <span>{t.done_count}/{t.total_students} terminé{t.done_count !== 1 ? "s" : ""}</span>
                            <span>{progress}%</span>
                          </div>
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                            <div
                              className="h-full rounded-full bg-green-500 transition-all"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDelete(t.task_id)}
                      disabled={isPending}
                      title="Supprimer la tâche"
                      className="shrink-0 rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-red-50 hover:text-red-500 disabled:opacity-50 dark:hover:bg-red-950/20"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
                      </svg>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}

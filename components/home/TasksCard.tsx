"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import { getMyAssignmentsAction, markAssignmentDoneAction, type AssignmentRow } from "@/app/actions/tasks";

function formatDate(iso: string | null) {
  if (!iso) return null;
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("fr-CH", { day: "numeric", month: "short" });
}

function isOverdue(due: string | null) {
  if (!due) return false;
  return new Date(due + "T23:59:59") < new Date();
}

export function TasksCard() {
  const [assignments, setAssignments] = useState<AssignmentRow[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [isPending, startTransition] = useTransition();

  const reload = useCallback(async () => {
    const res = await getMyAssignmentsAction();
    setAssignments(res.assignments);
    setLoaded(true);
  }, []);

  useEffect(() => { void reload(); }, [reload]);

  const pending = assignments.filter((a) => a.status === "pending");
  const done = assignments.filter((a) => a.status === "done");

  if (!loaded) return null;
  if (assignments.length === 0) return null;

  function markDone(assignmentId: string) {
    startTransition(async () => {
      await markAssignmentDoneAction(assignmentId);
      await reload();
    });
  }

  return (
    <section className="rounded-2xl border border-green-200 bg-green-50 p-4 dark:border-green-900/40 dark:bg-green-950/20">
      <div className="mb-3 flex items-center gap-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-green-600" aria-hidden>
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
        <h2 className="text-sm font-semibold text-green-800 dark:text-green-300">
          Tâches{" "}
          {pending.length > 0 && (
            <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-green-600 px-1.5 text-[10px] font-bold text-white">
              {pending.length}
            </span>
          )}
        </h2>
      </div>

      {/* Pending tasks */}
      {pending.length > 0 && (
        <ul className="space-y-2">
          {pending.map((a) => {
            const overdue = isOverdue(a.due_date);
            return (
              <li key={a.assignment_id} className="flex items-start gap-3 rounded-xl bg-white px-3 py-2.5 shadow-sm dark:bg-zinc-900">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{a.title}</p>
                  {a.description && (
                    <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">{a.description}</p>
                  )}
                  {a.due_date && (
                    <p className={`mt-1 text-xs font-medium ${overdue ? "text-red-500" : "text-zinc-400"}`}>
                      {overdue ? "⚠ En retard — " : "Avant le "}
                      {formatDate(a.due_date)}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => markDone(a.assignment_id)}
                  disabled={isPending}
                  className="shrink-0 rounded-lg bg-green-100 px-2.5 py-1.5 text-xs font-semibold text-green-700 transition-colors hover:bg-green-200 disabled:opacity-50 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50"
                >
                  Fait ✓
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {/* Done tasks (collapsed summary) */}
      {done.length > 0 && (
        <p className="mt-2 text-xs text-green-600 dark:text-green-500">
          {done.length} tâche{done.length !== 1 ? "s" : ""} terminée{done.length !== 1 ? "s" : ""} ✓
        </p>
      )}

      {pending.length === 0 && done.length > 0 && (
        <p className="text-center text-sm font-semibold text-green-700 dark:text-green-400">
          Toutes les tâches sont terminées 🎉
        </p>
      )}
    </section>
  );
}

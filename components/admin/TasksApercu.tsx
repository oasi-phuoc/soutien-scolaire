"use client";

import { useState } from "react";
import type { TaskRow } from "@/app/actions/tasks";

function formatDate(iso: string | null) {
  if (!iso) return null;
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("fr-CH", { day: "numeric", month: "short", year: "numeric" });
}

function isDueSoon(iso: string | null) {
  if (!iso) return false;
  const due = new Date(iso + "T00:00:00");
  const now = new Date();
  return due.getTime() - now.getTime() < 3 * 24 * 60 * 60 * 1000;
}

export function TasksApercu({ tasks }: { tasks: TaskRow[] }) {
  const [search, setSearch] = useState("");

  const q = search.toLowerCase();
  const filtered = q
    ? tasks.filter(t =>
        t.title.toLowerCase().includes(q) ||
        (t.module_ref ?? "").toLowerCase().includes(q) ||
        (t.lesson_ref ?? "").toLowerCase().includes(q)
      )
    : tasks;

  return (
    <div className="space-y-4">
      {/* Search bar */}
      <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-zinc-400" aria-hidden>
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
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

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-green-700 bg-green-600 dark:border-green-800 dark:bg-green-700">
              {["Titre", "Module / Leçon", "Date limite", "Élèves", "Avancement"].map((h, i) => (
                <th key={i} className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-green-50">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-sm text-zinc-400">
                  {tasks.length === 0 ? "Aucune tâche assignée pour l'instant." : "Aucun résultat pour cette recherche."}
                </td>
              </tr>
            ) : filtered.map(task => {
              const pct = task.total_students > 0 ? Math.round((task.done_count / task.total_students) * 100) : 0;
              const overdue = task.due_date && new Date(task.due_date + "T00:00:00") < new Date() && task.done_count < task.total_students;
              const soon = !overdue && isDueSoon(task.due_date);
              return (
                <tr key={task.task_id} className="bg-white hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900">
                  <td className="max-w-[200px] px-4 py-3">
                    <span className="block font-medium text-zinc-800 dark:text-zinc-200 truncate" title={task.title}>{task.title}</span>
                    {task.description && (
                      <span className="block truncate text-xs text-zinc-400" title={task.description}>{task.description}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {task.module_ref || task.lesson_ref ? (
                      <div className="space-y-0.5">
                        {task.module_ref && <span className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">{task.module_ref}</span>}
                        {task.lesson_ref && <span className="block text-xs text-zinc-400">{task.lesson_ref}</span>}
                      </div>
                    ) : (
                      <span className="text-zinc-400">—</span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {task.due_date ? (
                      <span className={`text-xs font-medium ${overdue ? "text-red-600 dark:text-red-400" : soon ? "text-amber-600 dark:text-amber-400" : "text-zinc-600 dark:text-zinc-400"}`}>
                        {overdue && "⚠ "}{formatDate(task.due_date)}
                      </span>
                    ) : (
                      <span className="text-zinc-400">—</span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    {task.done_count}/{task.total_students}
                  </td>
                  <td className="w-36 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                        <div className={`h-full rounded-full ${pct === 100 ? "bg-green-500" : "bg-blue-500"}`} style={{ width: `${pct}%` }} />
                      </div>
                      <span className="w-9 shrink-0 text-right text-xs tabular-nums text-zinc-500">{pct}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-zinc-400">{filtered.length} tâche{filtered.length !== 1 ? "s" : ""} affichée{filtered.length !== 1 ? "s" : ""}</p>
    </div>
  );
}

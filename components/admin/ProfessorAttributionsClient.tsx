"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useTransition } from "react";
import {
  getProfessorAttributionsAction,
  saveProfessorAttributionsAction,
  type ProfessorAttributionRow,
  type ProfessorClassOption,
} from "@/app/actions/suivi";
import { AppSelect } from "@/components/ui/AppSelect";

type DraftRow = {
  primaryClassId: string | null;
  secondaryClassIds: Set<string>;
};

function professorName(row: ProfessorAttributionRow) {
  return [row.prenom, row.nom].filter(Boolean).join(" ") || row.email || "—";
}

function setsEqual(a: Set<string>, b: Set<string>) {
  if (a.size !== b.size) return false;
  for (const v of a) if (!b.has(v)) return false;
  return true;
}

function rowToDraft(row: ProfessorAttributionRow): DraftRow {
  return {
    primaryClassId: row.primaryClassId,
    secondaryClassIds: new Set(row.secondaryClassIds),
  };
}

function draftsEqual(a: DraftRow, b: DraftRow) {
  return a.primaryClassId === b.primaryClassId && setsEqual(a.secondaryClassIds, b.secondaryClassIds);
}

function IconSave() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  );
}

function ClassMultiPicker({
  options,
  value,
  excludeClassId,
  disabled,
  onChange,
}: {
  options: ProfessorClassOption[];
  value: Set<string>;
  excludeClassId: string | null;
  disabled?: boolean;
  onChange: (next: Set<string>) => void;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const available = useMemo(
    () => options.filter((c) => c.class_id !== excludeClassId),
    [options, excludeClassId],
  );

  const selectedLabels = available
    .filter((c) => value.has(c.class_id))
    .map((c) => c.label);

  const summary =
    selectedLabels.length === 0
      ? "Aucune"
      : selectedLabels.length <= 2
        ? selectedLabels.join(", ")
        : `${selectedLabels.length} classes`;

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  function toggle(classId: string, checked: boolean) {
    const next = new Set(value);
    if (checked) next.add(classId);
    else next.delete(classId);
    onChange(next);
  }

  return (
    <div ref={rootRef} className="relative min-w-[10rem]">
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
        className={`flex h-10 w-full min-w-[10rem] items-center justify-between rounded-[22px] border bg-white px-4 text-left text-sm shadow-sm outline-none transition-colors dark:bg-zinc-900 ${
          open
            ? "border-[var(--color-theme)] ring-2 ring-[var(--color-theme)]/20"
            : "border-[var(--color-theme-muted)]/40 dark:border-[var(--color-theme)]/40"
        } disabled:cursor-not-allowed disabled:opacity-50`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={`min-w-0 truncate ${selectedLabels.length ? "text-zinc-800 dark:text-zinc-100" : "text-zinc-500"}`}>
          {summary}
        </span>
        <svg
          className={`shrink-0 text-[var(--color-theme)] transition-transform ${open ? "rotate-180" : ""}`}
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 right-0 z-30 mt-1 overflow-hidden rounded-b-[22px] rounded-t-md bg-white shadow-lg ring-1 ring-[var(--color-theme)]/15 dark:bg-zinc-900 dark:ring-[var(--color-theme)]/30">
          <div className="app-select-scroll max-h-56 overflow-y-auto overscroll-contain py-2" role="listbox">
            {available.length === 0 ? (
              <p className="px-4 py-2 text-sm text-zinc-400">Aucune classe disponible</p>
            ) : (
              available.map((cls) => (
                <label
                  key={cls.class_id}
                  className="flex cursor-pointer items-center gap-3 px-4 py-2 text-sm hover:bg-[var(--color-theme-light)] dark:hover:bg-[var(--color-theme)]/10 sm:px-5"
                >
                  <input
                    type="checkbox"
                    checked={value.has(cls.class_id)}
                    onChange={(e) => toggle(cls.class_id, e.target.checked)}
                    className="h-4 w-4 accent-[var(--color-theme)]"
                  />
                  <span className="text-zinc-800 dark:text-zinc-100">{cls.label}</span>
                </label>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function ProfessorAttributionsClient() {
  const [professors, setProfessors] = useState<ProfessorAttributionRow[]>([]);
  const [classes, setClasses] = useState<ProfessorClassOption[]>([]);
  const [drafts, setDrafts] = useState<Record<string, DraftRow>>({});
  const [savedDrafts, setSavedDrafts] = useState<Record<string, DraftRow>>({});
  const [error, setError] = useState<string | null>(null);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const classOptions = useMemo(
    () => classes.map((c) => ({ value: c.class_id, label: c.label })),
    [classes],
  );

  const applyServerRows = useCallback((rows: ProfessorAttributionRow[]) => {
    const nextDrafts: Record<string, DraftRow> = {};
    for (const row of rows) {
      nextDrafts[row.id] = rowToDraft(row);
    }
    setDrafts(nextDrafts);
    setSavedDrafts(nextDrafts);
  }, []);

  const reload = useCallback(async () => {
    const res = await getProfessorAttributionsAction();
    if (!res.ok) {
      setError(res.error ?? "Erreur");
      return;
    }
    setProfessors(res.professors);
    setClasses(res.classes);
    applyServerRows(res.professors);
    setError(null);
  }, [applyServerRows]);

  useEffect(() => {
    void reload();
  }, [reload]);

  const changedTeacherIds = useMemo(() => {
    return professors
      .filter((p) => {
        const draft = drafts[p.id];
        const saved = savedDrafts[p.id];
        if (!draft || !saved) return false;
        return !draftsEqual(draft, saved);
      })
      .map((p) => p.id);
  }, [professors, drafts, savedDrafts]);

  const hasChanges = changedTeacherIds.length > 0;

  function updatePrimary(teacherId: string, primaryClassId: string | null) {
    setSaveMsg(null);
    setDrafts((prev) => {
      const current = prev[teacherId];
      if (!current) return prev;
      const secondaryClassIds = new Set(current.secondaryClassIds);
      if (primaryClassId) secondaryClassIds.delete(primaryClassId);
      return {
        ...prev,
        [teacherId]: { primaryClassId, secondaryClassIds },
      };
    });
  }

  function updateSecondary(teacherId: string, secondaryClassIds: Set<string>) {
    setSaveMsg(null);
    setDrafts((prev) => {
      const current = prev[teacherId];
      if (!current) return prev;
      const next = new Set(secondaryClassIds);
      if (current.primaryClassId) next.delete(current.primaryClassId);
      return {
        ...prev,
        [teacherId]: { ...current, secondaryClassIds: next },
      };
    });
  }

  function save() {
    if (!hasChanges) return;
    startTransition(async () => {
      const updates = changedTeacherIds.map((teacherId) => {
        const draft = drafts[teacherId]!;
        return {
          teacherId,
          primaryClassId: draft.primaryClassId,
          secondaryClassIds: [...draft.secondaryClassIds],
        };
      });
      const res = await saveProfessorAttributionsAction(updates);
      if (!res.ok) {
        setSaveMsg(res.reason ?? "Erreur lors de l'enregistrement.");
        return;
      }
      setSaveMsg("Affectations enregistrées.");
      await reload();
    });
  }

  if (error) {
    return (
      <p className="rounded-xl border border-dashed border-zinc-300 p-6 text-center text-sm text-zinc-500">
        {error}
      </p>
    );
  }

  return (
    <div className="space-y-4 pb-32">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Affectez en une fois la classe principale (titulariat) et les classes secondaires de chaque professeur.
      </p>

      <div className="overflow-x-auto rounded-xl border border-[var(--color-border-default)]">
        <table className="w-full min-w-[42rem] text-sm">
          <thead>
            <tr className="border-b border-[var(--color-theme)] bg-[var(--color-theme)]">
              <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-white">
                Professeur
              </th>
              <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-white">
                Titulariat
              </th>
              <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-white">
                Autres classes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
            {professors.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-3 py-8 text-center text-sm text-zinc-400">
                  Aucun compte professeur.
                </td>
              </tr>
            ) : (
              professors.map((prof) => {
                const draft = drafts[prof.id] ?? rowToDraft(prof);
                const changed = changedTeacherIds.includes(prof.id);
                return (
                  <tr
                    key={prof.id}
                    className={`hover:bg-zinc-50 dark:hover:bg-zinc-900 ${changed ? "bg-[var(--color-theme-light)]/40 dark:bg-[var(--color-theme)]/5" : ""}`}
                  >
                    <td className="px-3 py-3 align-top">
                      <p className="font-semibold text-zinc-800 dark:text-zinc-100">{professorName(prof)}</p>
                      <p className="mt-0.5 text-xs text-zinc-400">{prof.email}</p>
                    </td>
                    <td className="px-3 py-3 align-top">
                      <AppSelect
                        value={draft.primaryClassId ?? ""}
                        onChange={(v) => updatePrimary(prof.id, v || null)}
                        options={classOptions}
                        placeholder="— Aucune —"
                        emptyOption={{ value: "", label: "— Aucune —" }}
                        disabled={isPending}
                        className="min-w-[9rem]"
                        aria-label={`Titulariat de ${professorName(prof)}`}
                      />
                    </td>
                    <td className="px-3 py-3 align-top">
                      <ClassMultiPicker
                        options={classes}
                        value={draft.secondaryClassIds}
                        excludeClassId={draft.primaryClassId}
                        disabled={isPending}
                        onChange={(next) => updateSecondary(prof.id, next)}
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {saveMsg && (
        <p className={`text-sm ${saveMsg.includes("Erreur") ? "text-red-600" : "text-emerald-700"}`} role="status">
          {saveMsg}
        </p>
      )}

      <div className="fixed inset-x-0 bottom-[calc(5.75rem+env(safe-area-inset-bottom,0px))] z-20 flex items-center justify-end gap-3 px-4 lg:bottom-6">
        {hasChanges && (
          <span className="hidden text-sm text-zinc-500 sm:inline">
            {changedTeacherIds.length} modification{changedTeacherIds.length !== 1 ? "s" : ""}
          </span>
        )}
        <button
          type="button"
          onClick={save}
          disabled={isPending || !hasChanges}
          className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-theme)] px-5 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <IconSave />
          {isPending ? "Enregistrement…" : "Enregistrer"}
        </button>
      </div>
    </div>
  );
}

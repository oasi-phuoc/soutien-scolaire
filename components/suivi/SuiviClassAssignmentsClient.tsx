"use client";

import { useCallback, useEffect, useMemo, useState, useTransition } from "react";
import {
  getAttributionClassesAction,
  saveMyClassAttributionsAction,
  type TeacherClassRow,
} from "@/app/actions/suivi";
import { CLASS_LEVELS, groupClassesByLevel } from "@/lib/suivi/class-levels";
import { ChargementEnCoursCard } from "@/components/ui/ChargementEnCours";

function isRealClassId(classId: string) {
  return !classId.startsWith("label:");
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

function setsEqual(a: Set<string>, b: Set<string>) {
  if (a.size !== b.size) return false;
  for (const v of a) if (!b.has(v)) return false;
  return true;
}

export function SuiviClassAssignmentsClient() {
  const [classes, setClasses] = useState<TeacherClassRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);
  const [draftPrimaryId, setDraftPrimaryId] = useState<string | null>(null);
  const [draftSecondaryIds, setDraftSecondaryIds] = useState<Set<string>>(new Set());
  const [savedPrimaryId, setSavedPrimaryId] = useState<string | null>(null);
  const [savedSecondaryIds, setSavedSecondaryIds] = useState<Set<string>>(new Set());
  const [isPending, startTransition] = useTransition();

  const applyServerState = useCallback((rows: TeacherClassRow[]) => {
    const primary = rows.find((c) => c.is_primary)?.class_id ?? null;
    const secondary = new Set(rows.filter((c) => c.is_secondary).map((c) => c.class_id));
    setDraftPrimaryId(primary);
    setDraftSecondaryIds(new Set(secondary));
    setSavedPrimaryId(primary);
    setSavedSecondaryIds(new Set(secondary));
  }, []);

  const reload = useCallback(async () => {
    const res = await getAttributionClassesAction();
    if (!res.ok) {
      setError(res.error ?? "Erreur");
      setLoading(false);
      return;
    }
    setClasses(res.classes);
    applyServerState(res.classes);
    setError(null);
    setLoading(false);
  }, [applyServerState]);

  useEffect(() => {
    void reload();
  }, [reload]);

  const grouped = useMemo(() => groupClassesByLevel(classes), [classes]);

  const hasChanges = useMemo(() => {
    return draftPrimaryId !== savedPrimaryId || !setsEqual(draftSecondaryIds, savedSecondaryIds);
  }, [draftPrimaryId, draftSecondaryIds, savedPrimaryId, savedSecondaryIds]);

  function setPrimary(classId: string) {
    if (!isRealClassId(classId)) return;
    setSaveMsg(null);
    setDraftPrimaryId(classId);
  }

  function toggleSecondary(classId: string, enabled: boolean) {
    if (!isRealClassId(classId)) return;
    setSaveMsg(null);
    setDraftSecondaryIds((prev) => {
      const next = new Set(prev);
      if (enabled) next.add(classId);
      else next.delete(classId);
      return next;
    });
  }

  function save() {
    if (!hasChanges) return;
    startTransition(async () => {
      const res = await saveMyClassAttributionsAction(
        draftPrimaryId,
        [...draftSecondaryIds],
      );
      if (!res.ok) {
        setSaveMsg(res.reason ?? "Erreur lors de l'enregistrement.");
        return;
      }
      setSaveMsg("Modifications enregistrées.");
      await reload();
    });
  }

  if (loading) return <ChargementEnCoursCard title="Attribution des classes" />;

  if (error) {
    return (
      <p className="rounded-xl border border-dashed border-zinc-300 p-6 text-center text-sm text-zinc-500">
        {error}
      </p>
    );
  }

  return (
    <div className="space-y-6 pb-32">
      {CLASS_LEVELS.map((level) => {
        const levelClasses = grouped[level];
        if (levelClasses.length === 0) return null;
        return (
          <div key={level} className="app-table-scroll overflow-x-auto rounded-xl border border-[var(--color-border-default)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-theme)] bg-[var(--color-theme)]">
                  <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-white">
                    {level}
                  </th>
                  <th className="hidden px-3 py-2.5 text-center text-[10px] font-semibold uppercase tracking-wide text-white sm:table-cell">
                    Élèves
                  </th>
                  <th className="w-20 px-2 py-2 text-center text-[10px] font-semibold uppercase tracking-wide text-white sm:w-24 sm:px-3 sm:py-2.5">
                    Principal
                  </th>
                  <th className="w-20 px-2 py-2 text-center text-[10px] font-semibold uppercase tracking-wide text-white sm:w-24 sm:px-3 sm:py-2.5">
                    Secondaire
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
                {levelClasses.map((cls) => {
                  const canAssign = isRealClassId(cls.class_id);
                  const isPrimary = draftPrimaryId === cls.class_id;
                  const isSecondary = draftSecondaryIds.has(cls.class_id);
                  return (
                    <tr key={cls.class_id} className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                      <td className="px-3 py-2.5 font-semibold text-zinc-800 dark:text-zinc-100">{cls.label}</td>
                      <td className="hidden px-3 py-2.5 text-center tabular-nums text-zinc-600 sm:table-cell dark:text-zinc-300">
                        {cls.student_count}
                      </td>
                      <td className="px-2 py-2 text-center sm:px-3 sm:py-2.5">
                        <input
                          type="radio"
                          name="attribution-primary"
                          checked={isPrimary}
                          disabled={isPending || !canAssign}
                          onChange={() => setPrimary(cls.class_id)}
                          className="h-4 w-4 accent-[var(--color-theme)]"
                          aria-label={`Classe principale : ${cls.label}`}
                        />
                      </td>
                      <td className="px-2 py-2 text-center sm:px-3 sm:py-2.5">
                        <input
                          type="checkbox"
                          checked={isSecondary}
                          disabled={isPending || !canAssign || isPrimary}
                          onChange={(e) => toggleSecondary(cls.class_id, e.target.checked)}
                          className="h-4 w-4 accent-[var(--color-theme)]"
                          aria-label={`Classe secondaire : ${cls.label}`}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}

      {classes.length === 0 && (
        <p className="rounded-xl border border-dashed border-zinc-300 p-6 text-center text-sm text-zinc-500">
          Aucune classe enregistrée.
        </p>
      )}

      {saveMsg && (
        <p className={`text-sm ${saveMsg.includes("Erreur") ? "text-red-600" : "text-emerald-700"}`} role="status">
          {saveMsg}
        </p>
      )}

      <div className="fixed inset-x-0 bottom-[calc(5.75rem+env(safe-area-inset-bottom,0px))] z-20 flex justify-end px-4 lg:bottom-6">
        <button
          type="button"
          onClick={save}
          disabled={isPending || !hasChanges}
          aria-label="Enregistrer les modifications"
          title="Enregistrer"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-theme)] text-white shadow-lg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <IconSave />
        </button>
      </div>
    </div>
  );
}

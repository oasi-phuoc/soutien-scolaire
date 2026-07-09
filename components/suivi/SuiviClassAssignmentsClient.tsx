"use client";

import { useCallback, useEffect, useMemo, useState, useTransition } from "react";
import {
  getAttributionClassesAction,
  setPrimaryClassAction,
  toggleSecondaryClassAction,
  type TeacherClassRow,
} from "@/app/actions/suivi";
import { CLASS_LEVELS, groupClassesByLevel } from "@/lib/suivi/class-levels";

function isRealClassId(classId: string) {
  return !classId.startsWith("label:");
}

export function SuiviClassAssignmentsClient() {
  const [classes, setClasses] = useState<TeacherClassRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const reload = useCallback(async () => {
    const res = await getAttributionClassesAction();
    if (!res.ok) {
      setError(res.error ?? "Erreur");
      return;
    }
    setClasses(res.classes);
    setError(null);
  }, []);

  useEffect(() => {
    void reload();
  }, [reload]);

  const grouped = useMemo(() => groupClassesByLevel(classes), [classes]);

  function setPrimary(classId: string) {
    if (!isRealClassId(classId)) return;
    startTransition(async () => {
      await setPrimaryClassAction(classId);
      await reload();
    });
  }

  function toggleSecondary(classId: string, enabled: boolean) {
    if (!isRealClassId(classId)) return;
    startTransition(async () => {
      await toggleSecondaryClassAction(classId, enabled);
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
    <div className="space-y-6">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Choisissez votre classe principale et vos classes secondaires. Ces réglages ne sont plus modifiables depuis le
        tableau du suivi pédagogique.
      </p>

      {CLASS_LEVELS.map((level) => {
        const levelClasses = grouped[level];
        if (levelClasses.length === 0) return null;
        return (
          <section key={level} className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--color-theme)]">{level}</h2>
            <div className="overflow-x-auto rounded-xl border border-[var(--color-border-default)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-theme)] bg-[var(--color-theme)]">
                    <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-white">
                      Classe
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
                    return (
                      <tr key={cls.class_id} className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                        <td className="px-3 py-2.5 font-semibold text-zinc-800 dark:text-zinc-100">{cls.label}</td>
                        <td className="hidden px-3 py-2.5 text-center tabular-nums text-zinc-600 sm:table-cell dark:text-zinc-300">
                          {cls.student_count}
                        </td>
                        <td className="px-2 py-2 text-center sm:px-3 sm:py-2.5">
                          <input
                            type="radio"
                            name={`attribution-primary-${level}`}
                            checked={cls.is_primary}
                            disabled={isPending || !canAssign}
                            onChange={() => setPrimary(cls.class_id)}
                            className="h-4 w-4 accent-[var(--color-theme)]"
                            aria-label={`Classe principale : ${cls.label}`}
                          />
                        </td>
                        <td className="px-2 py-2 text-center sm:px-3 sm:py-2.5">
                          <input
                            type="checkbox"
                            checked={cls.is_secondary}
                            disabled={isPending || !canAssign || cls.is_primary}
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
          </section>
        );
      })}

      {classes.length === 0 && (
        <p className="rounded-xl border border-dashed border-zinc-300 p-6 text-center text-sm text-zinc-500">
          Aucune classe enregistrée.
        </p>
      )}
    </div>
  );
}

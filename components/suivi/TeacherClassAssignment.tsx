"use client";

import { useEffect, useState, useTransition } from "react";
import { getSchoolClassesAction } from "@/app/actions/classes";
import {
  getTeacherClassAssignmentsAction,
  setTeacherClassesAction,
} from "@/app/actions/suivi";
import { AppSelect } from "@/components/ui/AppSelect";

export function TeacherClassAssignment({ teacherId }: { teacherId: string }) {
  const [allClasses, setAllClasses] = useState<{ class_id: string; label: string }[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [primaryId, setPrimaryId] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    void Promise.all([
      getSchoolClassesAction(),
      getTeacherClassAssignmentsAction(teacherId),
    ]).then(([classesRes, assignRes]) => {
      if (classesRes.ok) {
        setAllClasses(classesRes.classes.map((c) => ({ class_id: c.class_id, label: c.label })));
      }
      if (assignRes.ok) {
        setSelected(new Set(assignRes.classIds));
        setPrimaryId(assignRes.primaryClassId);
      }
    });
  }, [teacherId]);

  function toggle(classId: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(classId)) {
        next.delete(classId);
        if (primaryId === classId) setPrimaryId(null);
      } else {
        next.add(classId);
      }
      return next;
    });
    setMsg(null);
  }

  function save() {
    startTransition(async () => {
      const classIds = [...selected];
      const primary = primaryId && selected.has(primaryId) ? primaryId : classIds[0] ?? null;
      const res = await setTeacherClassesAction(teacherId, classIds, primary);
      if (res.ok) {
        setPrimaryId(primary);
        setMsg("Affectation enregistrée.");
      } else {
        setMsg(res.reason ?? "Erreur");
      }
    });
  }

  if (allClasses.length === 0) {
    return (
      <p className="text-sm text-zinc-500">
        Aucune classe disponible. Les classes sont créées à partir des profils élèves.
      </p>
    );
  }

  const selectedList = allClasses.filter((c) => selected.has(c.class_id));

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {allClasses.map((cls) => (
          <label
            key={cls.class_id}
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-200 px-4 py-3 dark:border-zinc-700"
          >
            <input
              type="checkbox"
              checked={selected.has(cls.class_id)}
              onChange={() => toggle(cls.class_id)}
              className="h-4 w-4 accent-[var(--color-theme)]"
            />
            <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">{cls.label}</span>
          </label>
        ))}
      </div>

      {selectedList.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">Classe principale</p>
          <AppSelect
            value={primaryId ?? selectedList[0]?.class_id ?? ""}
            onChange={(v) => setPrimaryId(v || null)}
            options={selectedList.map((c) => ({ value: c.class_id, label: c.label }))}
            className="w-full"
          />
        </div>
      )}

      <button
        type="button"
        onClick={save}
        disabled={isPending}
        className="rounded-xl bg-[var(--color-theme)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50"
      >
        {isPending ? "Enregistrement…" : "Enregistrer l'affectation"}
      </button>
      {msg ? <p className="text-sm text-zinc-600 dark:text-zinc-400">{msg}</p> : null}
    </div>
  );
}

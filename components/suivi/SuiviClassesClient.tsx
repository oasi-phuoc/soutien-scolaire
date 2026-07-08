"use client";

import Link from "next/link";
import { Fragment, useCallback, useEffect, useMemo, useState, useTransition } from "react";
import {
  getClassRowByLabelAction,
  getSuiviContextAction,
  searchSuiviAction,
  setPrimaryClassAction,
  toggleSecondaryClassAction,
  type SuiviSearchStudent,
  type TeacherClassRow,
} from "@/app/actions/suivi";
import { SuiviClassDashboard } from "@/components/suivi/SuiviClassDashboard";

function IconLoupe({ active }: { active?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={active ? "text-[var(--color-theme)]" : "text-zinc-400"}
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function isRealClassId(classId: string) {
  return !classId.startsWith("label:");
}

export function SuiviClassesClient() {
  const [classes, setClasses] = useState<TeacherClassRow[]>([]);
  const [extraClasses, setExtraClasses] = useState<TeacherClassRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [expandedLabel, setExpandedLabel] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [searchStudents, setSearchStudents] = useState<SuiviSearchStudent[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const reload = useCallback(async () => {
    const ctx = await getSuiviContextAction();
    if (!ctx) {
      setError("Non autorisé");
      return;
    }
    if (!ctx.hasAccess) {
      setError("Aucune classe affectée.");
      return;
    }
    setClasses(ctx.classes);
    setError(null);
  }, []);

  useEffect(() => {
    void reload();
  }, [reload]);

  useEffect(() => {
    const q = search.trim();
    if (q.length < 2) {
      setSearchStudents([]);
      setExtraClasses([]);
      return;
    }

    const timer = setTimeout(() => {
      setSearchLoading(true);
      void searchSuiviAction(q).then(async (res) => {
        if (!res.ok) {
          setSearchLoading(false);
          return;
        }
        setSearchStudents(res.students);

        const knownLabels = new Set(classes.map((c) => c.label));
        const additions: TeacherClassRow[] = [];
        for (const hit of res.classes) {
          if (knownLabels.has(hit.label)) continue;
          const rowRes = await getClassRowByLabelAction(hit.label);
          if (rowRes.ok && rowRes.row) additions.push(rowRes.row);
        }
        setExtraClasses(additions);
        setSearchLoading(false);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [search, classes]);

  const displayClasses = useMemo(() => {
    const q = search.trim().toLowerCase();
    const merged = [...classes];
    for (const extra of extraClasses) {
      if (!merged.some((c) => c.label === extra.label)) merged.push(extra);
    }

    if (q.length < 2) {
      return merged.sort((a, b) => a.label.localeCompare(b.label, "fr"));
    }

    const matchLabels = new Set<string>();
    for (const c of merged) {
      if (c.label.toLowerCase().includes(q)) matchLabels.add(c.label);
    }
    for (const s of searchStudents) {
      matchLabels.add(s.classLabel);
    }

    return merged
      .filter((c) => matchLabels.has(c.label))
      .sort((a, b) => a.label.localeCompare(b.label, "fr"));
  }, [classes, extraClasses, search, searchStudents]);

  const searchHint = useMemo(() => {
    const q = search.trim();
    if (q.length < 2 || searchStudents.length === 0) return null;
    const byClass = new Map<string, SuiviSearchStudent[]>();
    for (const s of searchStudents) {
      const list = byClass.get(s.classLabel) ?? [];
      list.push(s);
      byClass.set(s.classLabel, list);
    }
    return [...byClass.entries()].map(([label, students]) => ({
      label,
      names: students.map((s) => [s.prenom, s.nom].filter(Boolean).join(" ")).join(", "),
    }));
  }, [search, searchStudents]);

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
      if (enabled) {
        const rowRes = await getClassRowByLabelAction(
          displayClasses.find((c) => c.class_id === classId)?.label ?? "",
        );
        if (rowRes.ok && rowRes.row && !classes.some((c) => c.label === rowRes.row!.label)) {
          setExtraClasses((prev) => {
            if (prev.some((c) => c.class_id === classId)) return prev;
            return [...prev, rowRes.row!];
          });
        }
      }
    });
  }

  function openClass(label: string) {
    setExpandedLabel((cur) => (cur === label ? null : label));
  }

  if (error) {
    return <p className="rounded-xl border border-dashed border-zinc-300 p-6 text-center text-sm text-zinc-500">{error}</p>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Link href="/suivi/devoirs" className="rounded-xl bg-[var(--color-theme)] px-4 py-2 text-sm font-semibold text-white">
          Devoirs
        </Link>
        <Link
          href="/suivi/devoirs/apercu"
          className="rounded-xl border border-[var(--color-theme)] px-4 py-2 text-sm font-semibold text-[var(--color-theme)]"
        >
          Suivi des devoirs
        </Link>
      </div>

      <div className="relative max-w-md">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher une classe ou un élève…"
          className="w-full rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none placeholder:text-zinc-400 focus:border-[var(--color-theme)] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
        {searchLoading && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400">…</span>
        )}
      </div>

      {searchHint && searchHint.length > 0 && (
        <div className="space-y-1 text-xs text-zinc-500">
          {searchHint.map((hit) => (
            <p key={hit.label}>
              <button
                type="button"
                onClick={() => {
                  setExpandedLabel(hit.label);
                  setSearch(hit.label);
                }}
                className="font-semibold text-[var(--color-theme)] hover:underline"
              >
                {hit.label}
              </button>
              {" — "}
              {hit.names}
            </p>
          ))}
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-[var(--color-border-default)]">
        <table className="w-full min-w-[32rem] text-sm">
          <thead>
            <tr className="border-b border-[var(--color-theme)] bg-[var(--color-theme)]">
              <th className="w-10 px-2 py-2.5" aria-label="Détail" />
              <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-white">Classe</th>
              <th className="px-3 py-2.5 text-center text-[10px] font-semibold uppercase tracking-wide text-white">Élèves</th>
              <th className="w-24 px-3 py-2.5 text-center text-[10px] font-semibold uppercase tracking-wide text-white">Principal</th>
              <th className="w-24 px-3 py-2.5 text-center text-[10px] font-semibold uppercase tracking-wide text-white">Secondaire</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
            {displayClasses.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-3 py-8 text-center text-sm text-zinc-400">
                  {search.trim().length >= 2 ? "Aucune classe trouvée." : "Aucune classe."}
                </td>
              </tr>
            ) : (
              displayClasses.map((cls) => {
                const isExpanded = expandedLabel === cls.label;
                const canAssign = isRealClassId(cls.class_id);
                return (
                  <Fragment key={cls.class_id}>
                    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                      <td className="px-2 py-2.5">
                        <button
                          type="button"
                          onClick={() => openClass(cls.label)}
                          className="inline-flex rounded-lg p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                          aria-label={isExpanded ? "Masquer le détail" : "Voir le détail de la classe"}
                          aria-expanded={isExpanded}
                        >
                          <IconLoupe active={isExpanded} />
                        </button>
                      </td>
                      <td className="px-3 py-2.5 font-semibold text-zinc-800 dark:text-zinc-100">{cls.label}</td>
                      <td className="px-3 py-2.5 text-center tabular-nums text-zinc-600 dark:text-zinc-300">{cls.student_count}</td>
                      <td className="px-3 py-2.5 text-center">
                        <input
                          type="radio"
                          name="suivi-primary-class"
                          checked={cls.is_primary}
                          disabled={isPending || !canAssign}
                          onChange={() => setPrimary(cls.class_id)}
                          className="h-4 w-4 accent-[var(--color-theme)]"
                          aria-label={`Classe principale : ${cls.label}`}
                        />
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <input
                          type="checkbox"
                          checked={cls.is_secondary}
                          disabled={isPending || !canAssign}
                          onChange={(e) => toggleSecondary(cls.class_id, e.target.checked)}
                          className="h-4 w-4 accent-[var(--color-theme)]"
                          aria-label={`Classe secondaire : ${cls.label}`}
                        />
                      </td>
                    </tr>
                    {isExpanded && (
                      <tr className="bg-zinc-50 dark:bg-zinc-900/50">
                        <td colSpan={5} className="px-4 py-4">
                          <SuiviClassDashboard
                            classLabel={cls.label}
                            initialStudentQuery={searchStudents.some((s) => s.classLabel === cls.label) ? search.trim() : ""}
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
    </div>
  );
}

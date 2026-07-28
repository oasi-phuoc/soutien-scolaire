"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  getClassRowByLabelAction,
  getSuiviContextAction,
  searchSuiviAction,
  type SuiviSearchStudent,
  type TeacherClassRow,
} from "@/app/actions/suivi";
import { SuiviIconLoupe } from "@/components/suivi/SuiviIconLoupe";

export function SuiviClassesClient() {
  const router = useRouter();
  const [classes, setClasses] = useState<TeacherClassRow[]>([]);
  const [extraClasses, setExtraClasses] = useState<TeacherClassRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [searchStudents, setSearchStudents] = useState<SuiviSearchStudent[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

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

  function openClass(label: string) {
    router.push(`/suivi/classes/${encodeURIComponent(label)}`);
  }

  if (error) {
    return <p className="rounded-xl border border-dashed border-zinc-300 p-6 text-center text-sm text-zinc-500">{error}</p>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Link href="/suivi/devoirs/apercu" className="rounded-xl bg-[var(--color-theme)] px-4 py-2 text-sm font-semibold text-white">
          Devoirs
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
                onClick={() => openClass(hit.label)}
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
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-theme)] bg-[var(--color-theme)]">
              <th className="w-8 px-1 py-2 sm:px-2 sm:py-2.5" aria-label="Détail" />
              <th className="px-2 py-2 text-left text-[10px] font-semibold uppercase tracking-wide text-white sm:px-3 sm:py-2.5">Classe</th>
              <th className="px-2 py-2 text-left text-[10px] font-semibold uppercase tracking-wide text-white sm:px-3 sm:py-2.5">Titulaire</th>
              <th className="px-2 py-2 text-center text-[10px] font-semibold uppercase tracking-wide text-white sm:px-3 sm:py-2.5">Élèves</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
            {displayClasses.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-3 py-8 text-center text-sm text-zinc-400">
                  {search.trim().length >= 2 ? "Aucune classe trouvée." : "Aucune classe."}
                </td>
              </tr>
            ) : (
              displayClasses.map((cls) => (
                <tr key={cls.class_id} className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                  <td className="px-2 py-2.5">
                    <button
                      type="button"
                      onClick={() => openClass(cls.label)}
                      className="inline-flex rounded-lg p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      aria-label={`Voir la classe ${cls.label}`}
                      title={`Voir ${cls.label}`}
                    >
                      <SuiviIconLoupe />
                    </button>
                  </td>
                  <td className="px-2 py-2 font-semibold text-zinc-800 sm:px-3 sm:py-2.5 dark:text-zinc-100">{cls.label}</td>
                  <td className="max-w-[7rem] truncate px-2 py-2 text-xs text-zinc-600 sm:max-w-none sm:px-3 sm:py-2.5 sm:text-sm dark:text-zinc-300" title={cls.titulaire ?? undefined}>
                    {cls.titulaire ?? "—"}
                  </td>
                  <td className="px-2 py-2 text-center tabular-nums text-zinc-600 sm:px-3 sm:py-2.5 dark:text-zinc-300">{cls.student_count}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

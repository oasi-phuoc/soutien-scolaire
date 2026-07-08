"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import {
  getClassStudentsSuiviAction,
  type ClassStudentSuiviRow,
} from "@/app/actions/suivi";
import { StudentPersonalInfoCard, StudentInfoButton } from "@/components/suivi/StudentPersonalInfoCard";
import { StudentProgressDetail } from "@/components/suivi/StudentProgressDetail";

const PROGRESS_COL_W = "w-[5.5rem]";

function lastSeen(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  const now = new Date();
  const diff = Math.floor((now.getTime() - d.getTime()) / 1000);
  if (diff < 60) return "À l'instant";
  if (diff < 3600) return `Il y a ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `Il y a ${Math.floor(diff / 3600)} h`;
  const days = Math.floor(diff / 86400);
  if (days < 30) return `Il y a ${days} j`;
  return d.toLocaleDateString("fr-CH", { day: "2-digit", month: "short", year: "numeric" });
}

function ProgressBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

function ProgressCell({
  done,
  total,
  pct,
  color,
}: {
  done: number;
  total: number;
  pct: number;
  color: string;
}) {
  return (
    <div className={`flex flex-col gap-1 ${PROGRESS_COL_W}`}>
      <span className="text-[10px] font-semibold tabular-nums text-zinc-800 dark:text-zinc-200">
        {done}/{total}
      </span>
      <ProgressBar pct={pct} color={color} />
    </div>
  );
}

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

function matchesStudent(s: ClassStudentSuiviRow, q: string) {
  const full = [s.prenom, s.nom].filter(Boolean).join(" ").toLowerCase();
  return full.includes(q);
}

export function SuiviClassDashboard({
  classLabel,
  initialStudentQuery = "",
}: {
  classLabel: string;
  initialStudentQuery?: string;
}) {
  const [students, setStudents] = useState<ClassStudentSuiviRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [studentSearch, setStudentSearch] = useState(initialStudentQuery);
  const [expandedProgressId, setExpandedProgressId] = useState<string | null>(null);
  const [expandedInfoId, setExpandedInfoId] = useState<string | null>(null);

  useEffect(() => {
    setStudentSearch(initialStudentQuery);
  }, [initialStudentQuery, classLabel]);

  useEffect(() => {
    setLoading(true);
    setExpandedProgressId(null);
    setExpandedInfoId(null);
    void getClassStudentsSuiviAction(classLabel).then((result) => {
      if (!result.ok) setError(result.error ?? "Erreur");
      else {
        setStudents(result.students);
        setError(null);
      }
      setLoading(false);
    });
  }, [classLabel]);

  const filteredStudents = useMemo(() => {
    const q = studentSearch.trim().toLowerCase();
    if (!q) return students;
    return students.filter((s) => matchesStudent(s, q));
  }, [students, studentSearch]);

  if (loading) {
    return (
      <div className="space-y-2 py-2 animate-pulse">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-10 rounded-lg bg-zinc-200/80 dark:bg-zinc-700/80" />
        ))}
      </div>
    );
  }

  if (error) return <p className="text-sm text-red-500">{error}</p>;

  return (
    <div className="space-y-3">
      <div className="relative max-w-sm">
        <input
          type="search"
          value={studentSearch}
          onChange={(e) => setStudentSearch(e.target.value)}
          placeholder="Rechercher un élève…"
          className="w-full rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-[var(--color-theme)] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>

      <div className="overflow-x-auto rounded-xl border border-[var(--color-border-default)]">
        <table className="w-full min-w-[38rem] text-sm">
          <thead>
            <tr className="border-b border-[var(--color-theme)] bg-[var(--color-theme)]">
              <th className="w-10 px-2 py-2.5" aria-label="Progression" />
              <th className="w-10 px-2 py-2.5" aria-label="Informations" />
              {["Prénom, Nom", "Dernier accès", "Maths", "Français", "Lecture"].map((h) => (
                <th
                  key={h}
                  className="whitespace-nowrap px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-white"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
            {filteredStudents.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-3 py-8 text-center text-sm text-zinc-400">
                  {studentSearch.trim() ? "Aucun élève trouvé." : "Aucun élève dans cette classe."}
                </td>
              </tr>
            ) : (
              filteredStudents.map((s) => {
                const fullName = [s.prenom, s.nom].filter(Boolean).join(" ") || "—";
                const progressOpen = expandedProgressId === s.id;
                const infoOpen = expandedInfoId === s.id;
                return (
                  <Fragment key={s.id}>
                    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                      <td className="px-2 py-2.5">
                        <button
                          type="button"
                          onClick={() => {
                            setExpandedProgressId((id) => (id === s.id ? null : s.id));
                            if (expandedInfoId === s.id) setExpandedInfoId(null);
                          }}
                          className="inline-flex rounded-lg p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                          aria-label={progressOpen ? "Masquer la progression" : "Voir la progression"}
                          aria-expanded={progressOpen}
                        >
                          <IconLoupe active={progressOpen} />
                        </button>
                      </td>
                      <td className="px-2 py-2.5">
                        <StudentInfoButton
                          active={infoOpen}
                          onClick={() => {
                            setExpandedInfoId((id) => (id === s.id ? null : s.id));
                            if (expandedProgressId === s.id) setExpandedProgressId(null);
                          }}
                        />
                      </td>
                      <td className="max-w-[12rem] px-3 py-2.5">
                        <span className="block truncate font-medium text-zinc-800 dark:text-zinc-200">{fullName}</span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-2.5 text-xs text-zinc-500 dark:text-zinc-400">
                        {lastSeen(s.progress_updated_at)}
                      </td>
                      <td className="px-3 py-2.5">
                        <ProgressCell done={s.math_done} total={s.math_total} pct={s.math_pct} color="bg-blue-500" />
                      </td>
                      <td className="px-3 py-2.5">
                        <ProgressCell done={s.french_done} total={s.french_total} pct={s.french_pct} color="bg-emerald-500" />
                      </td>
                      <td className="px-3 py-2.5">
                        <ProgressCell done={s.lecture_done} total={s.lecture_total} pct={s.lecture_pct} color="bg-amber-500" />
                      </td>
                    </tr>
                    {infoOpen && (
                      <tr className="bg-zinc-50 dark:bg-zinc-900/50">
                        <td colSpan={7} className="px-4 py-4">
                          <StudentPersonalInfoCard student={s} />
                        </td>
                      </tr>
                    )}
                    {progressOpen && (
                      <tr className="bg-zinc-50 dark:bg-zinc-900/50">
                        <td colSpan={7} className="px-4 py-4">
                          <StudentProgressDetail userId={s.id} />
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })
            )}
          </tbody>
        </table>
        {filteredStudents.length > 0 && (
          <p className="border-t border-zinc-100 px-3 py-2 text-xs text-zinc-500 dark:border-zinc-800">
            {filteredStudents.length} élève{filteredStudents.length !== 1 ? "s" : ""}
            {studentSearch.trim() && students.length !== filteredStudents.length
              ? ` sur ${students.length}`
              : ""}
          </p>
        )}
      </div>
    </div>
  );
}

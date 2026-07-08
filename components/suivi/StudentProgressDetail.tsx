"use client";

import { useEffect, useState } from "react";
import { getPlacementHistoryForUserAction } from "@/app/actions/admin";
import { getStudentProgressDetailAction } from "@/app/actions/suivi";
import { getUserTimeStatsAction } from "@/app/actions/sessions";
import { frenchProgress, lectureProgress, mathProgress } from "@/lib/suivi/progress-metrics";
import {
  getFrenchModuleGroups,
  getLectureModuleGroups,
  getMathModuleGroups,
  getRecentFrenchLessons,
  getRecentLectureLessons,
  getRecentMathLessons,
  type ModuleProgressGroup,
} from "@/lib/suivi/lesson-progress-views";
import type { StoredProgressV1 } from "@/lib/curriculum/types";

function formatDuration(sec: number): string {
  const m = Math.floor(sec / 60);
  const h = Math.floor(m / 60);
  if (h > 0) return `${h} h ${m % 60} min`;
  return `${m} min`;
}

function formatPlacementHalf(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function IconLoupe({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function Bar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

function PlacementSubjectBar({
  points,
  fillClass,
  circleClass,
}: {
  points: number;
  fillClass: string;
  circleClass: string;
}) {
  const pct = Math.min(100, Math.max(0, (points / 100) * 100));
  const circleLeft = `clamp(0px, calc(${pct}% - 10px), calc(100% - 20px))`;
  return (
    <div className="relative h-6 flex-1 overflow-visible">
      <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
        <div className={`h-full rounded-full ${fillClass}`} style={{ width: `${pct}%` }} />
      </div>
      <div
        className={`absolute top-1/2 flex h-5 min-w-5 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white px-0.5 text-[7px] font-bold leading-none text-white shadow-sm dark:border-zinc-900 ${circleClass}`}
        style={{ left: circleLeft }}
      >
        {formatPlacementHalf(points)}
      </div>
    </div>
  );
}

function PillToggle<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700">
      {options.map((opt, i) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => onChange(opt.id)}
          className={`flex-1 px-3 py-1.5 text-xs font-semibold transition-colors ${
            i > 0 ? "border-l border-zinc-200 dark:border-zinc-700" : ""
          } ${value === opt.id ? "bg-[var(--color-theme)] text-white" : "bg-white text-zinc-500 hover:text-zinc-700 dark:bg-zinc-900"}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function RecentLessons({ items }: { items: { code: string; title: string; gradeLabel: string | null }[] }) {
  if (items.length === 0) {
    return <p className="text-xs text-zinc-400">Aucune leçon complétée récemment.</p>;
  }
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item.code} className="flex items-center justify-between gap-2 text-xs">
          <span className="min-w-0 truncate text-zinc-700 dark:text-zinc-200">
            <span className="font-semibold text-zinc-500">{item.code}</span>
            {" — "}
            {item.title}
          </span>
          {item.gradeLabel && (
            <span className="shrink-0 font-bold tabular-nums text-zinc-600 dark:text-zinc-300">{item.gradeLabel}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

function ModuleLessonList({ groups }: { groups: ModuleProgressGroup[] }) {
  if (groups.length === 0) {
    return <p className="text-xs text-zinc-400">Aucune leçon dans cette section.</p>;
  }
  return (
    <div className="space-y-3">
      {groups.map((group) => (
        <div key={group.moduleId}>
          <p className="text-xs font-bold text-[var(--color-theme)]">Module {group.moduleCode}</p>
          <ul className="mt-1 divide-y divide-zinc-100 dark:divide-zinc-800">
            {group.lessons.map((lesson) => (
              <li key={lesson.id} className="flex items-center justify-between gap-2 py-1.5 text-xs">
                <span className="min-w-0 truncate text-zinc-700 dark:text-zinc-200">
                  <span className="font-semibold text-zinc-500">{lesson.code}</span>
                  {" — "}
                  {lesson.title}
                </span>
                <span className={`shrink-0 font-bold tabular-nums ${lesson.gradeLabel ? "text-zinc-700 dark:text-zinc-200" : "text-zinc-300"}`}>
                  {lesson.gradeLabel ?? "—"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SubjectBlock({
  label,
  stat,
  color,
  open,
  onToggle,
  children,
}: {
  label: string;
  stat: { done: number; total: number; pct: number };
  color: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-zinc-100 dark:border-zinc-800">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left"
      >
        <span className="flex min-w-0 items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200">
          <IconLoupe className={`shrink-0 text-zinc-400 ${open ? "text-[var(--color-theme)]" : ""}`} />
          {label}
        </span>
        <span className="shrink-0 font-mono text-xs text-zinc-500">
          {stat.done}/{stat.total} — {stat.pct}%
        </span>
      </button>
      <div className="px-3 pb-1">
        <Bar pct={stat.pct} color={color} />
      </div>
      {open && <div className="space-y-3 border-t border-zinc-100 px-3 py-3 dark:border-zinc-800">{children}</div>}
    </div>
  );
}

type PlacementRow = {
  date: string;
  total: number;
  mathCounted: number;
  frenchCounted: number;
  zone: string;
};

export function StudentProgressDetail({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState<StoredProgressV1 | null>(null);
  const [time7d, setTime7d] = useState<number | null>(null);
  const [placementRows, setPlacementRows] = useState<PlacementRow[]>([]);
  const [combinedProfile, setCombinedProfile] = useState<{
    total: number;
    zone: string;
    mathCounted: number;
    frenchCounted: number;
  } | null>(null);

  const [openSubject, setOpenSubject] = useState<"math" | "french" | "lecture" | "placement" | null>(null);
  const [mathBranch, setMathBranch] = useState<"algebra" | "geometry">("algebra");
  const [frenchTab, setFrenchTab] = useState<"vocabulaire" | "grammaire" | "communication">("vocabulaire");
  const [mathListOpen, setMathListOpen] = useState(false);
  const [frenchListOpen, setFrenchListOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    setOpenSubject(null);
    setMathListOpen(false);
    setFrenchListOpen(false);
    void Promise.all([
      getStudentProgressDetailAction(userId),
      getUserTimeStatsAction(userId),
      getPlacementHistoryForUserAction(userId),
    ]).then(([progressRes, timeRes, placementRes]) => {
      if (progressRes.ok) setProgress(progressRes.progress_data);
      if (timeRes.ok) setTime7d(timeRes.last7DaysSec);
      if (placementRes.ok) {
        setPlacementRows(placementRes.totalHistory);
        setCombinedProfile(placementRes.combinedProfile);
      }
      setLoading(false);
    });
  }, [userId]);

  if (loading) {
    return (
      <div className="space-y-2 py-2 animate-pulse">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-12 rounded-lg bg-zinc-200/80 dark:bg-zinc-700/80" />
        ))}
      </div>
    );
  }

  const math = mathProgress(progress);
  const french = frenchProgress(progress);
  const lecture = lectureProgress(progress);
  const placementPct = combinedProfile ? Math.round((combinedProfile.total / 200) * 100) : 0;
  const placementHistory = [...placementRows].reverse().slice(0, 5);

  return (
    <div className="space-y-3">
      <SubjectBlock
        label="Maths"
        stat={math}
        color="bg-blue-500"
        open={openSubject === "math"}
        onToggle={() => {
          setOpenSubject((s) => {
            if (s === "math") {
              setMathListOpen(false);
              return null;
            }
            return "math";
          });
        }}
      >
        <div className="rounded-lg border border-zinc-100 p-3 dark:border-zinc-800">
          <p className="text-[10px] uppercase tracking-wide text-zinc-400">Temps · 7 derniers jours</p>
          <p className="text-lg font-bold text-zinc-800 dark:text-zinc-100">{formatDuration(time7d ?? 0)}</p>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Dernières leçons complétées</p>
          <RecentLessons items={getRecentMathLessons(progress)} />
        </div>
        <PillToggle
          options={[
            { id: "algebra" as const, label: "Algèbre" },
            { id: "geometry" as const, label: "Géométrie" },
          ]}
          value={mathBranch}
          onChange={(v) => {
            setMathBranch(v);
            setMathListOpen(true);
          }}
        />
        {mathListOpen && <ModuleLessonList groups={getMathModuleGroups(progress, mathBranch)} />}
      </SubjectBlock>

      <SubjectBlock
        label="Français"
        stat={french}
        color="bg-emerald-500"
        open={openSubject === "french"}
        onToggle={() => {
          setOpenSubject((s) => {
            if (s === "french") {
              setFrenchListOpen(false);
              return null;
            }
            return "french";
          });
        }}
      >
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Dernières leçons complétées</p>
          <RecentLessons items={getRecentFrenchLessons(progress)} />
        </div>
        <PillToggle
          options={[
            { id: "vocabulaire" as const, label: "Vocabulaire" },
            { id: "grammaire" as const, label: "Grammaire" },
            { id: "communication" as const, label: "Expression" },
          ]}
          value={frenchTab}
          onChange={(v) => {
            setFrenchTab(v);
            setFrenchListOpen(true);
          }}
        />
        {frenchListOpen && <ModuleLessonList groups={getFrenchModuleGroups(progress, frenchTab)} />}
      </SubjectBlock>

      <SubjectBlock
        label="Lecture"
        stat={lecture}
        color="bg-amber-500"
        open={openSubject === "lecture"}
        onToggle={() => setOpenSubject((s) => (s === "lecture" ? null : "lecture"))}
      >
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Dernières leçons complétées</p>
          <RecentLessons items={getRecentLectureLessons(progress)} />
        </div>
        <p className="text-xs font-bold text-amber-700 dark:text-amber-300">Apprendre</p>
        <ModuleLessonList groups={getLectureModuleGroups(progress)} />
      </SubjectBlock>

      <div className="rounded-xl border border-zinc-100 dark:border-zinc-800">
        <button
          type="button"
          onClick={() => setOpenSubject((s) => (s === "placement" ? null : "placement"))}
          className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left"
        >
          <span className="flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200">
            <IconLoupe className={openSubject === "placement" ? "text-[var(--color-theme)]" : "text-zinc-400"} />
            Test de placement
          </span>
          {combinedProfile ? (
            <span className="font-mono text-xs text-violet-600 dark:text-violet-400">
              {formatPlacementHalf(combinedProfile.total)}/200 · {combinedProfile.zone}
            </span>
          ) : (
            <span className="text-xs text-zinc-400">Aucun résultat</span>
          )}
        </button>
        {combinedProfile && (
          <>
            <p className="px-3 pb-2 text-xs text-zinc-500">
              Total /200 : {formatPlacementHalf(combinedProfile.total)} (maths {formatPlacementHalf(combinedProfile.mathCounted)} + français {formatPlacementHalf(combinedProfile.frenchCounted)}) · zone {combinedProfile.zone}
            </p>
            <div className="px-3 pb-2">
              <Bar pct={placementPct} color="bg-violet-500" />
            </div>
          </>
        )}
        {openSubject === "placement" && placementHistory.length > 0 && (
          <div className="space-y-2 border-t border-zinc-100 px-3 py-3 dark:border-zinc-800">
            <div className="grid grid-cols-[3.5rem_1fr_1fr_3.5rem] items-center gap-2 px-0.5">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400">Date</span>
              <span className="text-center text-[10px] font-semibold uppercase tracking-wide text-zinc-400">Math</span>
              <span className="text-center text-[10px] font-semibold uppercase tracking-wide text-zinc-400">Français</span>
              <span className="text-right text-[10px] font-semibold uppercase tracking-wide text-zinc-400">Total</span>
            </div>
            {placementHistory.map((row, i) => {
              const d = new Date(row.date);
              return (
                <div key={`${row.date}-${i}`} className="grid grid-cols-[3.5rem_1fr_1fr_3.5rem] items-center gap-2">
                  <span className="text-[11px] tabular-nums text-zinc-400">
                    {d.toLocaleDateString("fr-CH", { day: "2-digit", month: "2-digit", year: "2-digit" })}
                  </span>
                  <PlacementSubjectBar points={row.mathCounted} fillClass="bg-blue-400" circleClass="bg-blue-500" />
                  <PlacementSubjectBar points={row.frenchCounted} fillClass="bg-emerald-400" circleClass="bg-emerald-500" />
                  <span className="text-right text-[11px] font-semibold tabular-nums text-zinc-700 dark:text-zinc-200">
                    {formatPlacementHalf(row.total)}/200
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

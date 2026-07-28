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
import { PROGRESS_ACCENT, PROGRESS_FILL } from "@/lib/suivi/progress-colors";
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

function Bar({ pct, fill }: { pct: number; fill: string }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: fill }} />
    </div>
  );
}

function PlacementSubjectBar({
  points,
  fill,
  accent,
}: {
  points: number;
  fill: string;
  accent: string;
}) {
  const pct = Math.min(100, Math.max(0, (points / 100) * 100));
  const circleLeft = `clamp(0px, calc(${pct}% - 10px), calc(100% - 20px))`;
  return (
    <div className="relative h-6 flex-1 overflow-visible">
      <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: fill }} />
      </div>
      <div
        className="absolute top-1/2 flex h-5 min-w-5 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white px-0.5 text-[7px] font-bold leading-none text-white shadow-sm dark:border-zinc-900"
        style={{ left: circleLeft, background: accent }}
      >
        {formatPlacementHalf(points)}
      </div>
    </div>
  );
}

function BranchToggle<T extends string>({
  options,
  selected,
  onToggle,
}: {
  options: { id: T; label: string }[];
  selected: T | null;
  onToggle: (id: T) => void;
}) {
  return (
    <div className="flex overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700">
      {options.map((opt, i) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => onToggle(opt.id)}
          className={`flex-1 px-3 py-1.5 text-xs font-semibold transition-colors ${
            i > 0 ? "border-l border-zinc-200 dark:border-zinc-700" : ""
          } ${selected === opt.id ? "bg-[var(--color-theme)] text-white" : "bg-white text-zinc-500 hover:text-zinc-700 dark:bg-zinc-900"}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function RecentLesson({ item }: { item: { code: string; title: string; gradeLabel: string | null } | null }) {
  if (!item) {
    return <p className="text-xs text-zinc-400">Aucune leçon complétée récemment.</p>;
  }
  return (
    <div className="flex min-w-0 items-center justify-between gap-2 text-xs">
      <span className="min-w-0 flex-1 truncate text-zinc-700 dark:text-zinc-200" title={`${item.code} — ${item.title}`}>
        <span className="font-semibold text-zinc-500">{item.code}</span>
        {" — "}
        {item.title}
      </span>
      {item.gradeLabel && (
        <span className="shrink-0 font-bold tabular-nums text-zinc-600 dark:text-zinc-300">{item.gradeLabel}</span>
      )}
    </div>
  );
}

const MODULE_ROW_BG = [
  "bg-zinc-50 dark:bg-zinc-900/40",
  "bg-white dark:bg-zinc-950",
] as const;

function ModuleLessonList({ groups }: { groups: ModuleProgressGroup[] }) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  if (groups.length === 0) {
    return <p className="text-xs text-zinc-400">Aucune leçon dans cette section.</p>;
  }

  function toggleModule(moduleId: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(moduleId)) next.delete(moduleId);
      else next.add(moduleId);
      return next;
    });
  }

  return (
    <div className="min-w-0 space-y-1 overflow-hidden">
      {groups.map((group, idx) => {
        const isOpen = expanded.has(group.moduleId);
        return (
          <div key={group.moduleId} className={`overflow-hidden rounded-lg ${MODULE_ROW_BG[idx % 2]}`}>
            <button
              type="button"
              onClick={() => toggleModule(group.moduleId)}
              className="flex w-full min-w-0 items-center justify-between gap-2 px-2.5 py-2 text-left"
              aria-expanded={isOpen}
            >
              <span className="min-w-0 truncate text-xs font-bold text-[var(--color-theme)]">
                Module {group.moduleCode}
              </span>
              <span className="shrink-0 text-base font-light leading-none text-zinc-400" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <ul className="divide-y divide-zinc-100 border-t border-zinc-100/80 px-2 dark:divide-zinc-800 dark:border-zinc-800">
                {group.lessons.map((lesson) => (
                  <li key={lesson.id} className="flex min-w-0 items-center justify-between gap-2 py-1.5 text-xs">
                    <span
                      className="min-w-0 flex-1 truncate text-zinc-700 dark:text-zinc-200"
                      title={`${lesson.code} — ${lesson.title}`}
                    >
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
            )}
          </div>
        );
      })}
    </div>
  );
}

function SubjectBlock({
  label,
  stat,
  fill,
  open,
  onToggle,
  children,
}: {
  label: string;
  stat: { done: number; total: number; pct: number };
  fill: string;
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
        <Bar pct={stat.pct} fill={fill} />
      </div>
      {open && <div className="min-w-0 space-y-3 overflow-hidden border-t border-zinc-100 px-3 py-3 dark:border-zinc-800">{children}</div>}
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

type PlacementProfile = {
  total: number;
  zone: string;
  mathCounted: number;
  frenchCounted: number;
};

export function StudentProgressDetail({
  userId,
  progressData: progressDataProp,
}: {
  userId: string;
  progressData?: StoredProgressV1 | null;
}) {
  const hasInitialProgress = progressDataProp !== undefined;
  const [loading, setLoading] = useState(!hasInitialProgress);
  const [fetchedProgress, setFetchedProgress] = useState<StoredProgressV1 | null>(null);
  const progress = hasInitialProgress ? (progressDataProp ?? null) : fetchedProgress;
  const [time7d, setTime7d] = useState<number | null>(null);
  const [placementRows, setPlacementRows] = useState<PlacementRow[]>([]);
  const [combinedProfile, setCombinedProfile] = useState<PlacementProfile | null>(null);

  const [openSubject, setOpenSubject] = useState<"math" | "french" | "lecture" | "placement" | null>(null);
  const [mathBranch, setMathBranch] = useState<"algebra" | "geometry" | null>(null);
  const [frenchTab, setFrenchTab] = useState<"vocabulaire" | "conjugaison" | "grammaire" | "communication" | null>(null);
  const [lectureSection, setLectureSection] = useState<"apprendre" | null>(null);

  useEffect(() => {
    setOpenSubject(null);
    setMathBranch(null);
    setFrenchTab(null);
    setLectureSection(null);

    if (!hasInitialProgress) setLoading(true);

    void Promise.all([
      hasInitialProgress
        ? Promise.resolve()
        : getStudentProgressDetailAction(userId).then((res) => {
            if (res.ok) setFetchedProgress(res.progress_data);
          }),
      getUserTimeStatsAction(userId).then((res) => {
        if (res.ok) setTime7d(res.last7DaysSec);
      }),
      getPlacementHistoryForUserAction(userId).then((res) => {
        if (res.ok) {
          setPlacementRows(res.totalHistory);
          setCombinedProfile(res.combinedProfile);
        }
      }),
    ]).then(() => setLoading(false));
  }, [userId, hasInitialProgress]);

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

  function toggleBranch<T extends string>(current: T | null, id: T, setter: (v: T | null) => void) {
    setter(current === id ? null : id);
  }

  return (
    <div className="min-w-0 max-w-full space-y-3 overflow-hidden">
      <SubjectBlock
        label="Maths"
        stat={math}
        fill={PROGRESS_FILL.math}
        open={openSubject === "math"}
        onToggle={() => setOpenSubject((s) => (s === "math" ? null : "math"))}
      >
        <div className="rounded-lg border border-zinc-100 p-3 dark:border-zinc-800">
          <p className="text-[10px] uppercase tracking-wide text-zinc-400">Temps · 7 derniers jours</p>
          <p className="text-lg font-bold text-zinc-800 dark:text-zinc-100">{formatDuration(time7d ?? 0)}</p>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Dernière leçon complétée</p>
          <RecentLesson item={getRecentMathLessons(progress, 1)[0] ?? null} />
        </div>
        <BranchToggle
          options={[
            { id: "algebra" as const, label: "Algèbre" },
            { id: "geometry" as const, label: "Géométrie" },
          ]}
          selected={mathBranch}
          onToggle={(id) => toggleBranch(mathBranch, id, setMathBranch)}
        />
        {mathBranch && <ModuleLessonList key={mathBranch} groups={getMathModuleGroups(progress, mathBranch)} />}
      </SubjectBlock>

      <SubjectBlock
        label="Français"
        stat={french}
        fill={PROGRESS_FILL.french}
        open={openSubject === "french"}
        onToggle={() => setOpenSubject((s) => (s === "french" ? null : "french"))}
      >
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Dernière leçon complétée</p>
          <RecentLesson item={getRecentFrenchLessons(progress, 1)[0] ?? null} />
        </div>
        <BranchToggle
          options={[
            { id: "vocabulaire" as const, label: "Vocabulaire" },
            { id: "conjugaison" as const, label: "Conjugaison" },
            { id: "grammaire" as const, label: "Grammaire" },
            { id: "communication" as const, label: "Communication" },
          ]}
          selected={frenchTab}
          onToggle={(id) => toggleBranch(frenchTab, id, setFrenchTab)}
        />
        {frenchTab && <ModuleLessonList key={frenchTab} groups={getFrenchModuleGroups(progress, frenchTab)} />}
      </SubjectBlock>

      <SubjectBlock
        label="Lecture"
        stat={lecture}
        fill={PROGRESS_FILL.lecture}
        open={openSubject === "lecture"}
        onToggle={() => setOpenSubject((s) => (s === "lecture" ? null : "lecture"))}
      >
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Dernière leçon complétée</p>
          <RecentLesson item={getRecentLectureLessons(progress, 1)[0] ?? null} />
        </div>
        <BranchToggle
          options={[{ id: "apprendre" as const, label: "Apprendre" }]}
          selected={lectureSection}
          onToggle={(id) => toggleBranch(lectureSection, id, setLectureSection)}
        />
        {lectureSection && <ModuleLessonList key="apprendre" groups={getLectureModuleGroups(progress)} />}
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
            <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
              {formatPlacementHalf(combinedProfile.total)} / 200 · zone {combinedProfile.zone}
            </span>
          ) : (
            <span className="text-xs text-zinc-400">Aucun résultat</span>
          )}
        </button>
        {combinedProfile && (
          <div className="px-3 pb-2">
            <Bar pct={placementPct} fill={PROGRESS_FILL.placement} />
          </div>
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
                  <PlacementSubjectBar
                    points={row.mathCounted}
                    fill={PROGRESS_FILL.math}
                    accent={PROGRESS_ACCENT.math}
                  />
                  <PlacementSubjectBar
                    points={row.frenchCounted}
                    fill={PROGRESS_FILL.french}
                    accent={PROGRESS_ACCENT.french}
                  />
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

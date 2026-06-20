"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LECTURE_MODULES, STORIES, getRevision } from "@/lib/curriculum/lecture-data";
import {
  loadLectureProgress,
  getSubmoduleState,
  getModuleState,
  getEvaluationResult,
  getRevisionState,
  REVISION_CHECKPOINTS,
} from "@/lib/progress/lecture-progress";
import type { LectureProgressV2, ItemState, ModuleState } from "@/lib/progress/lecture-progress";

type TabId = "apprendre" | "histoires";

// ── State badges ───────────────────────────────────────────────────────────────

function SubStateDot({ state }: { state: ItemState }) {
  if (state === "completed")
    return (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-lecture)] text-white">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
    );
  if (state === "available")
    return (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-accent-lecture)]">
        <span className="h-2 w-2 rounded-full bg-[var(--color-accent-lecture)]" />
      </span>
    );
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-emphasis)]">
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    </span>
  );
}

function ModuleStateBadge({ state }: { state: ModuleState }) {
  if (state === "completed")
    return (
      <span className="rounded-full bg-[var(--color-accent-lecture)]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-accent-lecture)]">
        Terminé
      </span>
    );
  if (state === "in_progress")
    return (
      <span className="rounded-full bg-[var(--color-accent-lecture)]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-accent-lecture)]">
        En cours
      </span>
    );
  if (state === "available")
    return (
      <span className="rounded-full bg-[var(--color-accent-lecture)]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-accent-lecture)]">
        En cours
      </span>
    );
  return (
    <span className="rounded-full border border-[var(--color-border-default)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--color-text-secondary)]">
      Verrouillé
    </span>
  );
}

// ── Module card ────────────────────────────────────────────────────────────────

function ModuleCard({
  mod,
  progress,
  hydrated,
  highlighted,
  isAdmin,
}: {
  mod: (typeof LECTURE_MODULES)[number];
  progress: LectureProgressV2;
  hydrated: boolean;
  highlighted?: boolean;
  isAdmin?: boolean;
}) {
  const router = useRouter();
  const modState = hydrated ? getModuleState(progress, mod.id) : "locked";
  const locked = !isAdmin && modState === "locked";
  const isCollapsible = locked || modState === "completed";
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (hydrated && !isCollapsible) setExpanded(true);
  }, [hydrated, isCollapsible]);


  return (
    <div
      className={`rounded-[var(--radius-lg)] border bg-[var(--color-bg-primary)] transition-colors ${
        locked
          ? "border-[var(--color-border-default)] opacity-50"
          : highlighted
            ? "border-[var(--color-accent-lecture)]/50"
            : "border-[var(--color-border-default)]"
      }`}
    >
      {/* Module header */}
      <button
        type="button"
        onClick={() => isCollapsible && setExpanded((e) => !e)}
        className={`flex w-full items-center gap-3 px-4 pt-4 pb-3 text-left ${isCollapsible ? "" : "cursor-default"}`}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-lecture)]/10">
          <span className="text-sm font-bold text-[var(--color-accent-lecture)]">{mod.code}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-[var(--color-text-primary)]">{mod.title}</p>
        </div>
        <ModuleStateBadge state={modState} />
        {isCollapsible && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`shrink-0 text-[var(--color-text-secondary)] transition-transform ${expanded ? "rotate-90" : ""}`} aria-hidden>
            <path d="M9 18l6-6-6-6" />
          </svg>
        )}
      </button>

      {/* Progress bar (in_progress only) */}
      {expanded && modState === "in_progress" && hydrated && (
        <div className="px-4 pb-2">
          <div className="flex gap-1">
            {mod.letters.map((letter) => {
              const subState = getSubmoduleState(progress, mod.id, letter.letterLower);
              const isDone = subState === "completed";
              const isCurrent = subState === "available";
              return (
                <div
                  key={letter.letterLower}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${isDone || isCurrent ? "" : "bg-[var(--color-border-default)]"} ${isCurrent ? "opacity-60" : ""}`}
                  style={isDone || isCurrent ? { background: "var(--color-accent-lecture)" } : undefined}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Submodule list */}
      {expanded && <ul className="divide-y divide-[var(--color-border-default)] border-t border-[var(--color-border-default)]">
        {mod.letters.flatMap((letter, i) => {
          const subState = hydrated
            ? getSubmoduleState(progress, mod.id, letter.letterLower)
            : "locked";
          const isLocked = !isAdmin && subState === "locked";
          const subCode = `${mod.code}.${i + 1}`;

          const isAvailable = subState === "available";
          const evalResult = hydrated ? getEvaluationResult(progress, mod.id, letter.letterLower) : undefined;
          const hasFailedEval = isAvailable && evalResult !== undefined && !evalResult.passed;

          const rowContent = (
            <div className="flex min-h-[52px] items-center gap-3 px-4 py-2.5">
              <SubStateDot state={subState} />
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold text-[var(--color-text-secondary)]">
                  {subCode}
                </span>
                <span className="ml-1.5 text-xs font-medium text-[var(--color-text-primary)]">
                  Lettre {letter.letter} - {letter.letterLower}
                </span>
                <span className="ml-1 text-[10px] text-[var(--color-text-secondary)]">
                  {letter.phoneme}
                </span>
              </div>
              {isAvailable ? (
                <div className="flex shrink-0 items-center gap-1">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full text-white" style={{ background: "var(--color-accent-lecture)" }} aria-hidden>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="8,5 19,12 8,19" />
                    </svg>
                  </span>
                  {hasFailedEval && (
                    <button
                      type="button"
                      aria-label="Aller à l'évaluation"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push(`/lecture/${mod.id}/${letter.letterLower}?eval=1`); }}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-accent-lecture)] text-[var(--color-accent-lecture)] transition-colors hover:bg-[var(--color-accent-lecture)]/10"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </button>
                  )}
                </div>
              ) : !isLocked && subState === "completed" ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[var(--color-text-secondary)]" aria-hidden>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              ) : null}
            </div>
          );

          const letterLi = (
            <li key={letter.letterLower}>
              {isLocked ? (
                rowContent
              ) : (
                <Link
                  href={`/lecture/${mod.id}/${letter.letterLower}`}
                  className="block transition-colors hover:bg-[var(--color-bg-secondary)]"
                >
                  {rowContent}
                </Link>
              )}
            </li>
          );

          const revCheckpoint = REVISION_CHECKPOINTS.find(
            (r) => r.afterModuleId === mod.id && r.afterLetterId === letter.letterLower,
          );

          if (!revCheckpoint) return [letterLi];

          const revState = hydrated ? getRevisionState(progress, revCheckpoint.pair) : "locked";
          const revData = getRevision(revCheckpoint.pair);
          const revTitle = revData?.title ?? `Révision ${revCheckpoint.pair}`;
          const revLocked = !isAdmin && revState === "locked";

          const revRowContent = (
            <div className="flex min-h-[52px] items-center gap-3 px-4 py-2">
              <SubStateDot state={revState} />
              <div className="flex-1 min-w-0 flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-[var(--color-accent-lecture)]" aria-hidden>
                  <path d="M1 4v6h6" />
                  <path d="M3.51 15a9 9 0 1 0 .49-4.5" />
                </svg>
                <span className="text-xs font-medium text-[var(--color-text-primary)]">
                  {revTitle}
                </span>
              </div>
              {!revLocked && revState !== "completed" && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[var(--color-text-secondary)]" aria-hidden>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              )}
            </div>
          );

          const revLi = (
            <li key={`rev-${revCheckpoint.pair}`} className="bg-[var(--color-bg-secondary)]/40">
              {revLocked ? (
                <div className="opacity-40">{revRowContent}</div>
              ) : (
                <Link
                  href={`/lecture/revision/${revCheckpoint.pair}`}
                  className="block transition-colors hover:bg-[var(--color-bg-secondary)]"
                >
                  {revRowContent}
                </Link>
              )}
            </li>
          );

          return [letterLi, revLi];
        })}
      </ul>}
    </div>
  );
}

// ── Stories tab ────────────────────────────────────────────────────────────────

const LEVEL_META: Record<string, { label: string; color: string }> = {
  A1: { label: "Débutant", color: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300" },
  A2: { label: "Moyen", color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300" },
  B1: { label: "Avancé", color: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300" },
};

function StoriesList() {
  const groups = (["A1", "A2", "B1"] as const).map((level) => ({
    level,
    ...LEVEL_META[level]!,
    stories: STORIES.filter((s) => s.level === level),
  }));

  return (
    <div className="space-y-5">
      {groups.map(({ level, label, stories }) => (
        <section key={level} className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[var(--color-text-primary)]">{label}</span>
          </div>
          <ul className="space-y-2">
            {stories.map((story) => (
              <li key={story.id}>
                <Link
                  href={`/lecture/histoires/${story.id}`}
                  className="flex w-full items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3 transition-colors hover:border-[var(--color-accent-lecture)]/40"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-lecture)]/10 text-[var(--color-accent-lecture)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">{story.title}</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      {story.sentences.length} phrases
                    </p>
                  </div>
                  <span className="text-[var(--color-accent-lecture)]" aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export function LectureClient({ isAdmin = false }: { isAdmin?: boolean }) {
  const [tab, setTab] = useState<TabId>("apprendre");
  const [progress, setProgress] = useState<LectureProgressV2>(() => ({
    version: 2,
    modules: { l1: "locked", l2: "locked", l3: "locked", l4: "locked" },
    submodules: {},
  }));
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(loadLectureProgress());
    setHydrated(true);
  }, []);

  const activeModuleId = hydrated
    ? (LECTURE_MODULES.find((m) => getModuleState(progress, m.id) === "in_progress")?.id ??
       LECTURE_MODULES.find((m) => getModuleState(progress, m.id) === "available")?.id)
    : null;

  return (
    <div className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 pt-8 pb-32">
      <header className="relative overflow-hidden rounded-[var(--radius-lg)] px-5 py-5" style={{ background: "color-mix(in oklch, var(--color-accent-lecture) 11%, white)" }}>
        <div className="pointer-events-none absolute -bottom-4 -right-4 text-[var(--color-accent-lecture)]" aria-hidden>
          <svg width="120" height="108" viewBox="0 0 110 100" fill="none">
            <path d="M55 20 C40 16 20 18 8 24 L8 80 C20 74 40 72 55 76 Z" fill="currentColor" opacity="0.22"/>
            <path d="M55 20 C70 16 90 18 102 24 L102 80 C90 74 70 72 55 76 Z" fill="currentColor" opacity="0.32"/>
            <line x1="55" y1="20" x2="55" y2="76" stroke="currentColor" strokeWidth="2" opacity="0.38"/>
            <line x1="18" y1="36" x2="48" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>
            <line x1="18" y1="47" x2="48" y2="45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>
            <line x1="18" y1="58" x2="38" y2="56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>
            <line x1="63" y1="36" x2="93" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>
            <line x1="63" y1="47" x2="93" y2="45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>
            <line x1="63" y1="58" x2="80" y2="56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>
          </svg>
        </div>
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-lecture)]">Lecture</p>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Alphabétisation</h1>
        </div>
      </header>

      {/* Tab toggle */}
      <div
        role="tablist"
        aria-label="Sections lecture"
        className="flex gap-2 rounded-[var(--radius-lg)] bg-[var(--color-accent-lecture)]/15 p-1"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "apprendre"}
          onClick={() => setTab("apprendre")}
          className={`min-h-11 flex-1 rounded-[var(--radius-md)] px-3 text-sm font-medium transition-colors ${
            tab === "apprendre"
              ? "bg-[var(--color-accent-lecture)] text-white shadow-sm"
              : "bg-[var(--color-accent-lecture)]/8 text-[var(--color-accent-lecture)] hover:bg-[var(--color-accent-lecture)]/15"
          }`}
        >
          Apprendre
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "histoires"}
          onClick={() => setTab("histoires")}
          className={`min-h-11 flex-1 rounded-[var(--radius-md)] px-3 text-sm font-medium transition-colors ${
            tab === "histoires"
              ? "bg-[var(--color-accent-lecture)] text-white shadow-sm"
              : "bg-[var(--color-accent-lecture)]/8 text-[var(--color-accent-lecture)] hover:bg-[var(--color-accent-lecture)]/15"
          }`}
        >
          Histoires
        </button>
      </div>

      {tab === "apprendre" ? (
        <>
          {/* Module cards */}
          <section className="space-y-4" aria-label="Modules de lecture">
            {LECTURE_MODULES.map((mod) => (
              <ModuleCard
                key={mod.id}
                mod={mod}
                progress={progress}
                hydrated={hydrated}
                highlighted={hydrated && mod.id === activeModuleId}
                isAdmin={isAdmin}
              />
            ))}
          </section>
        </>
      ) : (
        <section aria-label="Histoires à lire">
          <StoriesList />
        </section>
      )}
    </div>
  );
}

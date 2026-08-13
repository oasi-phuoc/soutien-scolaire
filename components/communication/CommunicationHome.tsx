"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  COMM_MODULES,
  isCommModuleUnlocked,
  normalizeCommunicationProgress,
} from "@/lib/curriculum/communication-data";
import { useContentEditor } from "@/components/content-editor/ContentEditorProvider";
import { resolveCommModules } from "@/lib/content-editor/catalog";
import {
  commIdAllowed,
  hasFrenchLessonAccess,
  type LessonAccessFlags,
} from "@/lib/auth/lesson-access";

const ACCENT = "var(--color-accent-comm)";
const COMM_PROGRESS_KEY = "soutien-comm-progress-v1";

function prereqLabel(id: string): string {
  return id.replace("-", ".");
}

function moduleStateLabel(state: "completed" | "in_progress" | "locked") {
  if (state === "completed") return "TERMINÉ";
  if (state === "locked") return "VERROUILLÉ";
  return "EN COURS";
}

function ModuleStateBadge({ state }: { state: "completed" | "in_progress" | "locked" }) {
  return (
    <span
      className="shrink-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide"
      style={{
        background: state === "locked" ? "var(--color-bg-secondary)" : `color-mix(in srgb, ${ACCENT} 13%, transparent)`,
        color: state === "locked" ? "var(--color-text-secondary)" : ACCENT,
      }}
    >
      {moduleStateLabel(state)}
    </span>
  );
}

function ModuleProgressBar({ total, completed }: { total: number; completed: number }) {
  if (total <= 0) return null;
  return (
    <div className="px-4 pb-3">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}>
        {Array.from({ length: total }, (_, index) => (
          <span
            key={index}
            className="h-1.5 rounded-full"
            style={{
              background:
                index < completed
                  ? ACCENT
                  : index === completed
                    ? `color-mix(in srgb, ${ACCENT} 38%, var(--color-border-default))`
                    : "var(--color-border-default)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function CommunicationModuleList({
  isAdmin = false,
  freeAccess = false,
  canPartialFrenchComm = false,
}: {
  isAdmin?: boolean;
  freeAccess?: boolean;
  canPartialFrenchComm?: boolean;
}) {
  const router = useRouter();
  const { overrides } = useContentEditor();
  const commModules = resolveCommModules(COMM_MODULES, overrides);
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [manualExpanded, setManualExpanded] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  const lessonAccess: LessonAccessFlags = {
    canFreeAccess: Boolean(isAdmin || freeAccess),
    canPartialFrenchGrammar: false,
    canPartialFrenchComm: Boolean(isAdmin || freeAccess || canPartialFrenchComm),
    canPartialMathA3: false,
    canPartialMathA8: false,
    canPartialMathG3: false,
  };
  const frenchOk = isAdmin || hasFrenchLessonAccess(lessonAccess);
  const unlockAll = Boolean(isAdmin || freeAccess);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(COMM_PROGRESS_KEY);
      if (raw) setCompleted(normalizeCommunicationProgress(JSON.parse(raw)));
    } catch { /* ignore */ }
    setHydrated(true);
  }, []);

  const modulesView = useMemo(() => {
    let previousAllDone = true;
    return commModules.map((m) => {
      const visibleSubs = m.submodules.filter((s) => {
        if (!s.available && !isAdmin) return false;
        return unlockAll || commIdAllowed(s.id, lessonAccess);
      });
      const completedCount = visibleSubs.filter((s) => completed[s.id]).length;
      const allDone = completedCount === visibleSubs.length && visibleSubs.length > 0;
      const sequentialOk = isCommModuleUnlocked(m.id, previousAllDone, unlockAll);
      if (visibleSubs.length > 0) previousAllDone = allDone;
      const moduleAccessible = frenchOk && visibleSubs.length > 0 && sequentialOk;
      const moduleState: "completed" | "in_progress" | "locked" = !moduleAccessible
        ? "locked"
        : allDone
          ? "completed"
          : "in_progress";
      return { m, visibleSubs, completedCount, allDone, moduleState, moduleAccessible };
    });
  // lessonAccess dérivé de unlockAll / canPartialFrenchComm
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commModules, completed, frenchOk, unlockAll, isAdmin, canPartialFrenchComm, freeAccess]);

  const primaryInProgressId = useMemo(() => {
    if (!hydrated || !frenchOk) return null;
    for (const row of modulesView) {
      if (row.moduleAccessible && !row.allDone) return row.m.id;
    }
    return null;
  }, [modulesView, hydrated, frenchOk]);

  function isExpanded(moduleId: string, moduleState: "completed" | "in_progress" | "locked"): boolean {
    if (manualExpanded[moduleId] !== undefined) return manualExpanded[moduleId];
    // Un seul module en cours déplié ; terminés / autres repliés
    return moduleId === primaryInProgressId && moduleState === "in_progress";
  }

  function toggleExpanded(moduleId: string, moduleState: "completed" | "in_progress" | "locked") {
    const currently = isExpanded(moduleId, moduleState);
    setManualExpanded((prev) => ({ ...prev, [moduleId]: !currently }));
  }

  return (
    <ul className="space-y-4">
      {modulesView.map(({ m, visibleSubs, completedCount, moduleState, moduleAccessible }) => {
        if (visibleSubs.length === 0 && !isAdmin) return null;
        const expanded = isExpanded(m.id, moduleState);
        const firstAvailableIdx = visibleSubs.findIndex((s) => !completed[s.id]);

        return (
          <li key={m.id}>
            <div
              className={`overflow-hidden rounded-[var(--radius-lg)] border bg-[var(--color-bg-primary)] ${
                !moduleAccessible
                  ? "border-[var(--color-border-default)] opacity-50"
                  : expanded
                    ? "border-[var(--color-border-default)]"
                    : "border-[var(--color-border-default)]"
              }`}
              style={expanded && moduleAccessible ? { borderColor: `color-mix(in srgb, ${ACCENT} 50%, var(--color-border-default))` } : undefined}
            >
              <div
                className="module-list-header"
                style={{ "--module-header-accent": ACCENT } as React.CSSProperties}
              >
                {expanded && moduleState === "in_progress" ? (
                  <div className="flex w-full items-center gap-3 px-4 py-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/70 dark:bg-zinc-900/40">
                      <span className="text-sm font-bold" style={{ color: ACCENT }}>{m.level}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-[var(--color-text-primary)]">{m.title}</p>
                    </div>
                    <ModuleStateBadge state={moduleState} />
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => toggleExpanded(m.id, moduleState)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/70 dark:bg-zinc-900/40">
                      <span className="text-sm font-bold" style={{ color: ACCENT }}>{m.level}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-[var(--color-text-primary)]">{m.title}</p>
                    </div>
                    <ModuleStateBadge state={moduleState} />
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className={`shrink-0 text-[var(--color-text-secondary)] transition-transform ${expanded ? "rotate-90" : ""}`} aria-hidden>
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                )}

                {expanded && moduleAccessible && (
                  <ModuleProgressBar total={visibleSubs.length} completed={completedCount} />
                )}
              </div>

              {expanded && (
                <ul className="divide-y divide-[var(--color-border-default)] border-t border-[var(--color-border-default)]">
                  {visibleSubs.map((sub, idx) => {
                    const isDone = !!completed[sub.id];
                    // E x.1 du module débloqué par défaut ; suivante après complétion
                    const canOpen = moduleAccessible && (
                      unlockAll
                      || isDone
                      || idx === firstAvailableIdx
                    );
                    const isLocked = !canOpen && !isDone;
                    const missingPrereqs = !unlockAll && idx > 0 && !completed[visibleSubs[idx - 1]?.id]
                      ? [prereqLabel(visibleSubs[idx - 1].id)]
                      : [];

                    return (
                      <li key={sub.id}
                        className={`flex min-h-[52px] items-center gap-3 px-4 py-2.5 ${
                          isDone || canOpen ? "cursor-pointer hover:bg-[var(--color-bg-secondary)] transition-colors" : "opacity-50"
                        }`}
                        onClick={canOpen || isDone ? () => router.push(`/communication/${sub.id}`) : undefined}
                      >
                        {isDone ? (
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white" style={{ background: ACCENT }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                          </span>
                        ) : isLocked ? (
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-emphasis)]">
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                              <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                          </span>
                        ) : (
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2" style={{ borderColor: ACCENT }}>
                            <span className="h-2 w-2 rounded-full" style={{ background: ACCENT }} />
                          </span>
                        )}
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-semibold text-[var(--color-text-secondary)]">{sub.code}</span>
                          <span className="ml-1.5 text-xs font-medium text-[var(--color-text-primary)]">{sub.title}</span>
                          {isLocked && missingPrereqs.length > 0 ? (
                            <p className="mt-0.5 text-[10px] text-[var(--color-text-secondary)]">
                              Requis : {missingPrereqs.join(" · ")}
                            </p>
                          ) : null}
                        </div>
                        {canOpen && !isDone ? (
                          <button type="button"
                            onClick={(e) => { e.stopPropagation(); router.push(`/communication/${sub.id}`); }}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition-opacity hover:opacity-80"
                            style={{ background: ACCENT }} aria-label={`Commencer ${sub.code}`}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden><polygon points="8,5 19,12 8,19" /></svg>
                          </button>
                        ) : isDone ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            className="text-[var(--color-text-secondary)]" aria-hidden><path d="M9 18l6-6-6-6" /></svg>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function CommunicationHome({
  isAdmin = false,
  freeAccess = false,
  canPartialFrenchComm = false,
}: {
  isAdmin?: boolean;
  freeAccess?: boolean;
  canPartialFrenchComm?: boolean;
}) {
  return (
    <div className="app-shell flex-1 space-y-6 py-8 pb-32 lg:pb-28">
      <header className="space-y-1">
        <p
          className="text-xs font-medium uppercase tracking-wide"
          style={{ color: ACCENT }}
        >
          Communication
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
          S&apos;exprimer en français
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Apprenez à rédiger et à communiquer en français avec clarté.
        </p>
      </header>

      <section aria-label="Liste des modules" className="space-y-4">
        <CommunicationModuleList
          isAdmin={isAdmin}
          freeAccess={freeAccess}
          canPartialFrenchComm={canPartialFrenchComm}
        />
      </section>

      <p className="text-center text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
        Progression stockée localement.
      </p>
    </div>
  );
}

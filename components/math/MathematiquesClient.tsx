"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  MATH_ALGEBRA_ORDER,
  MATH_GEOMETRY_TAB_ORDER,
  getMathModule,
  prerequisitesMet,
} from "@/lib/curriculum/math-data";
import {
  computeRecommendation,
  type MathTabId,
} from "@/lib/curriculum/recommendation";
import {
  completedPassingIds,
  createInitialProgress,
  loadProgress,
  saveProgress,
} from "@/lib/progress/math-progress";
import type { StoredProgressV1 } from "@/lib/curriculum/types";
import { PASSING_GRADE } from "@/lib/scoring";

type ModuleDisplayState = "locked" | "available" | "in_progress" | "completed";

function getModuleDisplayState(
  prog: StoredProgressV1["math"][string] | undefined,
  prereqOk: boolean,
): ModuleDisplayState {
  if (!prereqOk) return "locked";
  if (!prog || prog.state === "locked") return "available";
  if (prog.state === "in_progress") return "in_progress";
  if (prog.state === "completed") return "completed";
  return "available";
}

function StateBadge({ state, missing }: { state: ModuleDisplayState; missing?: string[] }) {
  if (state === "completed")
    return (
      <span className="rounded-full bg-[var(--color-accent-alg)]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-accent-alg)]">
        Terminé
      </span>
    );
  if (state === "in_progress")
    return (
      <span className="rounded-full bg-[var(--color-accent-alg)]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-accent-alg)]">
        En cours
      </span>
    );
  if (state === "available") return null;
  return (
    <span
      className="rounded-full border border-[var(--color-border-default)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--color-text-secondary)]"
      title={missing?.length ? `Terminer : ${missing.join(", ")}` : undefined}
    >
      Verrouillé
    </span>
  );
}

function SubDot({ done, current, accent, moduleLocked }: { done: boolean; current: boolean; accent: string; moduleLocked: boolean }) {
  if (done)
    return (
      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
        style={{ background: accent }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
    );
  if (current)
    return (
      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
        style={{ borderColor: accent }}
      >
        <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
      </span>
    );
  if (moduleLocked)
    return (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-emphasis)]">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </span>
    );
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-default)]" />
  );
}

export function MathematiquesClient({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  const router = useRouter();
  const [tab, setTab] = useState<MathTabId>("algebra");
  const [progress, setProgress] = useState<StoredProgressV1>(createInitialProgress);
  const [hydrated, setHydrated] = useState(false);
  const [manualOverrides, setManualOverrides] = useState<Record<string, boolean>>({});

  function isModuleExpanded(id: string, state: ModuleDisplayState): boolean {
    if (id in manualOverrides) return manualOverrides[id]!;
    return state === "in_progress" || state === "available";
  }

  function toggleModule(id: string, state: ModuleDisplayState) {
    setManualOverrides((prev) => ({ ...prev, [id]: !isModuleExpanded(id, state) }));
  }

  useEffect(() => {
    setProgress(loadProgress());
    setHydrated(true);
  }, []);

  const _persist = useCallback((next: StoredProgressV1) => {
    setProgress(next);
    saveProgress(next);
  }, []);

  const order = tab === "algebra" ? MATH_ALGEBRA_ORDER : MATH_GEOMETRY_TAB_ORDER;
  const modules = useMemo(
    () => order.map((id) => getMathModule(id)).filter(Boolean),
    [order],
  );

  const reco = useMemo(() => computeRecommendation(tab, progress), [tab, progress]);

  const done = useMemo(
    () => (hydrated ? completedPassingIds(progress) : new Set<string>()),
    [hydrated, progress],
  );

  const accentColor = tab === "geometry" ? "var(--color-accent-geo)" : "var(--color-accent-alg)";

  return (
    <div className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-8 pb-32">
      <header className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-alg)]">
          Mathématiques
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Algèbre et géométrie
        </h1>
      </header>

      {/* Tab toggle */}
      <div
        role="tablist"
        aria-label="Branches mathématiques"
        className="flex gap-2 rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] p-1"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "algebra"}
          className={`min-h-11 flex-1 rounded-[var(--radius-md)] px-3 text-sm font-medium transition-colors ${
            tab === "algebra"
              ? "bg-white text-[var(--color-accent-alg)] shadow-sm dark:bg-zinc-900"
              : "text-[var(--color-text-secondary)]"
          }`}
          onClick={() => setTab("algebra")}
        >
          Calculs
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "geometry"}
          className={`min-h-11 flex-1 rounded-[var(--radius-md)] px-3 text-sm font-medium transition-colors ${
            tab === "geometry"
              ? "bg-white text-[var(--color-accent-geo)] shadow-sm dark:bg-zinc-900"
              : "text-[var(--color-text-secondary)]"
          }`}
          onClick={() => setTab("geometry")}
        >
          Formes
        </button>
      </div>

{/* Module cards */}
      <section aria-label="Liste des modules" className="space-y-4">
        <ul className="space-y-4">
          {modules.map((m) => {
            if (!m) return null;
            const prog = hydrated ? progress.math[m.id] : undefined;
            const pre = hydrated
              ? prerequisitesMet(m, done)
              : { ok: false as const, missing: [] as string[] };
            const displayState = hydrated ? getModuleDisplayState(prog, pre.ok) : "locked";
            const isLocked = displayState === "locked";
            const recoHighlight = hydrated && reco.moduleId === m.id && reco.kind !== "revision_grade";

            const completedSubIds = new Set(
              hydrated
                ? m.submodules
                    .filter((sub) => progress.submoduleStates?.[sub.id] === "completed")
                    .map((sub) => sub.id)
                : [],
            );
            // A submodule is "passed" if completed with grade ≥ PASSING_GRADE,
            // OR completed without any saved score (no eval required / old-style completion)
            const passedSubIds = new Set(
              hydrated
                ? m.submodules
                    .filter((sub) => {
                      if (!completedSubIds.has(sub.id)) return false;
                      const sc = progress.submoduleScores?.[sub.id];
                      return sc === undefined || sc.grade >= PASSING_GRADE;
                    })
                    .map((sub) => sub.id)
                : [],
            );
            const firstAvailableSubIdx = m.submodules.findIndex((sub) => !passedSubIds.has(sub.id));

            const isRevisionSub = (sub: { code: string }) =>
              sub.code.startsWith("RA.") || sub.code.startsWith("RG.");
            const nonRevisionSubs = m.submodules.filter((sub) => !isRevisionSub(sub));
            const allNonRevisionCompleted =
              nonRevisionSubs.length > 0 &&
              nonRevisionSubs.every((sub) => completedSubIds.has(sub.id));

            const expanded = isModuleExpanded(m.id, displayState);

            return (
              <li key={m.id}>
                <div
                  className={`rounded-[var(--radius-lg)] border bg-[var(--color-bg-primary)] transition-colors ${
                    isLocked
                      ? "border-[var(--color-border-default)] opacity-60"
                      : recoHighlight
                        ? "border-[var(--color-accent-alg)]/50"
                        : "border-[var(--color-border-default)]"
                  }`}
                >
                  {/* Module header */}
                  <button
                    type="button"
                    onClick={() => {
                      if (displayState === "in_progress" || displayState === "available") {
                        const target = firstAvailableSubIdx >= 0
                          ? m.submodules[firstAvailableSubIdx]
                          : m.submodules[0];
                        if (target) router.push(`/mathematiques/${target.id}`);
                      } else {
                        toggleModule(m.id, displayState);
                      }
                    }}
                    className="flex w-full items-center gap-3 px-4 pt-4 pb-3 text-left"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: `color-mix(in srgb, ${accentColor} 15%, transparent)` }}
                    >
                      <span className="text-sm font-bold" style={{ color: accentColor }}>
                        {m.code}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[var(--color-text-primary)]">{m.title}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      {prog?.medal ? (
                        <span className="text-sm">{prog.medal}</span>
                      ) : null}
                      <StateBadge state={displayState} missing={pre.ok ? undefined : pre.missing} />
                      {displayState === "completed" && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`shrink-0 text-[var(--color-text-secondary)] transition-transform ${expanded ? "rotate-90" : ""}`} aria-hidden>
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Progress bar (in_progress only, when expanded) */}
                  {expanded && displayState === "in_progress" && hydrated && (
                    <div className="px-4 pb-2">
                      <div className="flex gap-1">
                        {m.submodules.map((sub, si) => (
                          <div
                            key={sub.id}
                            className={`h-1.5 flex-1 rounded-full transition-colors ${
                              completedSubIds.has(sub.id)
                                ? ""
                                : si === firstAvailableSubIdx
                                  ? "opacity-60"
                                  : "bg-[var(--color-border-default)]"
                            }`}
                            style={
                              completedSubIds.has(sub.id) || si === firstAvailableSubIdx
                                ? { background: accentColor }
                                : undefined
                            }
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Submodule list */}
                  {expanded && m.submodules.length > 0 && (
                    <ul className="divide-y divide-[var(--color-border-default)] border-t border-[var(--color-border-default)]">
                      {m.submodules.map((sub, idx) => {
                        const subDone = completedSubIds.has(sub.id);
                        const isRev = isRevisionSub(sub);
                        const subAvailable = !isLocked && !subDone && (
                          isRev
                            ? allNonRevisionCompleted
                            : idx === firstAvailableSubIdx
                        );
                        const subLocked = !subDone && !subAvailable;
                        const score = hydrated ? progress.submoduleScores?.[sub.id] : undefined;
                        const hasFailedEval = subDone && score !== undefined && score.grade < PASSING_GRADE;
                        return (
                          <li
                            key={sub.id}
                            className={`flex min-h-[52px] items-center gap-3 px-4 py-2.5 ${subDone ? "cursor-pointer hover:bg-[var(--color-bg-secondary)] transition-colors" : ""}`}
                            onClick={subDone ? (e) => { e.stopPropagation(); router.push(`/mathematiques/${sub.id}`); } : undefined}
                          >
                            <SubDot done={subDone} current={subAvailable} accent={accentColor} moduleLocked={subLocked} />
                            <div className="flex-1 min-w-0">
                              <span className="text-xs font-semibold text-[var(--color-text-secondary)]">
                                {sub.code}
                              </span>
                              <span className="ml-1.5 text-xs font-medium text-[var(--color-text-primary)]">
                                {sub.title}
                              </span>
                            </div>
                            {subDone ? (
                              <div className="flex shrink-0 items-center gap-1.5">
                                {hasFailedEval ? (
                                  <button
                                    type="button"
                                    aria-label="Aller à l'évaluation"
                                    onClick={(e) => { e.stopPropagation(); router.push(`/mathematiques/${sub.id}?eval=1`); }}
                                    className="flex h-8 w-8 items-center justify-center rounded-full border transition-colors hover:opacity-80"
                                    style={{ borderColor: accentColor, color: accentColor }}
                                  >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                                      <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                  </button>
                                ) : (
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-text-secondary)]" aria-hidden>
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                )}
                              </div>
                            ) : subAvailable ? (
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); router.push(`/mathematiques/${sub.id}`); }}
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition-opacity hover:opacity-80 active:opacity-70"
                                style={{ background: accentColor }}
                                aria-label={`Commencer ${sub.code}`}
                              >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                  <polygon points="8,5 19,12 8,19" />
                                </svg>
                              </button>
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
      </section>

      <p className="text-center text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
        {isLoggedIn ? "Progression synchronisée avec le cloud." : "Progression stockée localement."}
      </p>
    </div>
  );
}

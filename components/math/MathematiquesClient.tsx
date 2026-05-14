"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AppProgressBar } from "@/components/ui/AppProgressBar";
import {
  MATH_ALGEBRA_ORDER,
  MATH_GEOMETRY_TAB_ORDER,
  getMathModule,
  prerequisitesMet,
} from "@/lib/curriculum/math-data";
import {
  computeRecommendation,
  findPendingEvaluationModule,
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
  if (state === "available")
    return (
      <span className="rounded-full bg-[var(--color-bg-secondary)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">
        Disponible
      </span>
    );
  return (
    <span
      className="rounded-full border border-[var(--color-border-default)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--color-text-secondary)]"
      title={missing?.length ? `Terminer : ${missing.join(", ")}` : undefined}
    >
      Verrouillé
    </span>
  );
}

function SubDot({ done, accent }: { done: boolean; accent: string }) {
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
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-emphasis)]">
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    </span>
  );
}

export function MathematiquesClient() {
  const router = useRouter();
  const [tab, setTab] = useState<MathTabId>("algebra");
  const [progress, setProgress] = useState<StoredProgressV1>(createInitialProgress);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setHydrated(true);
  }, []);

  const persist = useCallback((next: StoredProgressV1) => {
    setProgress(next);
    saveProgress(next);
  }, []);

  const order = tab === "algebra" ? MATH_ALGEBRA_ORDER : MATH_GEOMETRY_TAB_ORDER;
  const modules = useMemo(
    () => order.map((id) => getMathModule(id)).filter(Boolean),
    [order],
  );

  const reco = useMemo(() => computeRecommendation(tab, progress), [tab, progress]);
  const pendingEvalId = useMemo(
    () => findPendingEvaluationModule(tab, progress),
    [tab, progress],
  );
  const pendingModule = pendingEvalId ? getMathModule(pendingEvalId) : undefined;

  const branchProgress = useMemo(() => {
    const total = order.length;
    const done = completedPassingIds(progress);
    const n = order.filter((id) => done.has(id)).length;
    return total ? Math.round((n / total) * 100) : 0;
  }, [order, progress]);

  const accentColor = tab === "geometry" ? "var(--color-accent-geo)" : "var(--color-accent-alg)";

  return (
    <div className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-8 pb-32">
      <header className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-alg)]">
          Mathématiques
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Algèbre, géométrie et statistiques
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
          Algèbre et calcul
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
          Géométrie et données
        </button>
      </div>

      {/* Branch progress */}
      {hydrated && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
            <span>Progression de la branche</span>
            <span>{branchProgress}%</span>
          </div>
          <AppProgressBar value={branchProgress} color={accentColor} height={6} />
        </div>
      )}

      {/* Pending evaluation banner */}
      {hydrated && pendingModule && pendingEvalId ? (
        <div className="rounded-[var(--radius-lg)] border border-amber-400/50 bg-amber-50 px-4 py-3 dark:bg-amber-950/20">
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
            Module {pendingModule.code} terminé — bravo !
          </p>
          <p className="mt-0.5 text-xs text-amber-700 dark:text-amber-400">
            Évalue tes connaissances avant de continuer (seuil {PASSING_GRADE}/6).
          </p>
        </div>
      ) : null}

      {/* Module cards */}
      <section aria-label="Liste des modules" className="space-y-4">
        <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">Modules</h2>
        <ul className="space-y-4">
          {modules.map((m) => {
            if (!m) return null;
            const prog = hydrated ? progress.math[m.id] : undefined;
            const done = hydrated ? completedPassingIds(progress) : new Set<string>();
            const pre = prerequisitesMet(m, done);
            const displayState = hydrated ? getModuleDisplayState(prog, pre.ok) : "locked";
            const isLocked = displayState === "locked";
            const recoHighlight = hydrated && reco.moduleId === m.id && reco.kind !== "revision_grade";
            const subPct =
              prog && prog.subTotal
                ? Math.round((prog.subProgress / prog.subTotal) * 100)
                : 0;

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
                  {/* Module header — clickable */}
                  <button
                    type="button"
                    disabled={isLocked}
                    onClick={() => { if (!isLocked) router.push(`/mathematiques/${m.id}`); }}
                    className="flex w-full items-center gap-3 px-4 pt-4 pb-3 text-left disabled:cursor-not-allowed"
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
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        {displayState === "completed"
                          ? `Terminé · note ${prog?.grade?.toFixed(1) ?? "—"}/6`
                          : displayState === "in_progress"
                            ? `${prog?.subProgress ?? 0} / ${prog?.subTotal ?? m.submodules.length} sous-modules`
                            : isLocked
                              ? `Terminer : ${pre.ok ? "" : pre.missing.join(", ")}`
                              : `${m.submodules.length} sous-module${m.submodules.length > 1 ? "s" : ""}`}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      {prog?.medal ? (
                        <span className="text-sm">{prog.medal}</span>
                      ) : null}
                      <StateBadge state={displayState} missing={pre.ok ? undefined : pre.missing} />
                      {!isLocked && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-text-secondary)]" aria-hidden>
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Progress bar (in_progress only) */}
                  {displayState === "in_progress" && hydrated && (
                    <div className="px-4 pb-2">
                      <AppProgressBar value={subPct} color={accentColor} height={4} />
                      <p className="mt-1 text-right text-[10px] text-[var(--color-text-secondary)]">
                        {subPct}%
                      </p>
                    </div>
                  )}

                  {/* Submodule list */}
                  {m.submodules.length > 0 && (
                    <ul className="divide-y divide-[var(--color-border-default)] border-t border-[var(--color-border-default)]">
                      {m.submodules.map((sub) => {
                        const subDone = hydrated
                          ? progress.submoduleStates?.[sub.id] === "completed"
                          : false;
                        const score = hydrated ? progress.submoduleScores?.[sub.id] : undefined;
                        return (
                          <li key={sub.id} className="flex items-center gap-3 px-4 py-2.5">
                            <SubDot done={subDone} accent={accentColor} />
                            <div className="flex-1 min-w-0">
                              <span className="text-xs font-semibold text-[var(--color-text-secondary)]">
                                {sub.code}
                              </span>
                              <span className="ml-1.5 text-xs font-medium text-[var(--color-text-primary)]">
                                {sub.title}
                              </span>
                            </div>
                            {subDone && score ? (
                              <span className="shrink-0 text-[10px] text-[var(--color-text-secondary)]">
                                {score.grade.toFixed(1)}/6
                              </span>
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
        Progression stockée localement.
      </p>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { COMM_MODULES, normalizeCommunicationProgress } from "@/lib/curriculum/communication-data";

const ACCENT = "var(--color-accent-comm)";
const COMM_PROGRESS_KEY = "soutien-comm-progress-v1";

function moduleStateLabel(state: "completed" | "in_progress" | "development" | "locked") {
  if (state === "completed") return "TERMINÉ";
  if (state === "development") return "DÉVELOPPEMENT";
  if (state === "locked") return "VERROUILLÉ";
  return "EN COURS";
}

function ModuleStateBadge({ state }: { state: "completed" | "in_progress" | "development" | "locked" }) {
  return (
    <span
      className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide"
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

export function CommunicationModuleList({ isAdmin = false }: { isAdmin?: boolean }) {
  const router = useRouter();
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ PE: true });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(COMM_PROGRESS_KEY);
      if (raw) setCompleted(normalizeCommunicationProgress(JSON.parse(raw)));
    } catch { /* ignore */ }
  }, []);

  function toggleExpanded(moduleId: string) {
    setExpanded((prev) => ({ ...prev, [moduleId]: !prev[moduleId] }));
  }

  return (
    <ul className="space-y-4">
      {COMM_MODULES.map((m) => {
        const isExpanded = !!expanded[m.id];
        const allUnavailable = !isAdmin && m.submodules.every((s) => !s.available);
        const completedCount = m.submodules.filter((s) => completed[s.id]).length;
        const allDone = completedCount === m.submodules.length && m.submodules.length > 0;
        const moduleState = allUnavailable ? "development" : allDone ? "completed" : "in_progress";

        return (
          <li key={m.id}>
            <div className={`rounded-[var(--radius-lg)] border bg-[var(--color-bg-primary)] border-[var(--color-border-default)] ${allUnavailable ? "opacity-50" : ""}`}>
              <button
                type="button"
                onClick={allUnavailable ? undefined : () => toggleExpanded(m.id)}
                disabled={allUnavailable}
                className="flex w-full items-center gap-3 px-4 pt-4 pb-3 text-left"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: `color-mix(in srgb, ${ACCENT} 15%, transparent)` }}
                >
                  <span className="text-sm font-bold" style={{ color: ACCENT }}>{m.level}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-bold text-[var(--color-text-primary)]">{m.title}</p>
                    <ModuleStateBadge state={moduleState} />
                  </div>
                  {m.description && <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">{m.description}</p>}
                </div>
                {allUnavailable ? (
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-emphasis)]">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </span>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className={`shrink-0 text-[var(--color-text-secondary)] transition-transform ${isExpanded ? "rotate-90" : ""}`} aria-hidden>
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                )}
              </button>

              {!allUnavailable && <ModuleProgressBar total={m.submodules.length} completed={completedCount} />}

              {isExpanded && (
                <ul className="divide-y divide-[var(--color-border-default)] border-t border-[var(--color-border-default)]">
                  {m.submodules.map((sub) => {
                    const isDone = !!completed[sub.id];
                    const isAvailable = isAdmin || sub.available;
                    const isLocked = !isAvailable && !isDone;
                    return (
                      <li key={sub.id}
                        className={`flex min-h-[52px] items-center gap-3 px-4 py-2.5 ${
                          isDone || isAvailable ? "cursor-pointer hover:bg-[var(--color-bg-secondary)] transition-colors" : "opacity-50"
                        }`}
                        onClick={isAvailable || isDone ? () => router.push(`/communication/${sub.id}`) : undefined}
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
                        </div>
                        {isAvailable && !isDone ? (
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

export function CommunicationHome({ isAdmin = false }: { isAdmin?: boolean }) {
  return (
    <div className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-8 pb-32">
      <header className="space-y-1">
        <p
          className="text-xs font-medium uppercase tracking-wide"
          style={{ color: ACCENT }}
        >
          Expression
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
          S&apos;exprimer en français
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Apprenez à rédiger et à communiquer en français avec clarté.
        </p>
      </header>

      <section aria-label="Liste des modules" className="space-y-4">
        <CommunicationModuleList isAdmin={isAdmin} />
      </section>

      <p className="text-center text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
        Progression stockée localement.
      </p>
    </div>
  );
}

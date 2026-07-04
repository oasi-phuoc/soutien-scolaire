"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FRENCH_THEMES } from "@/lib/curriculum/french-data";
import type { FrenchTab, FrenchTheme } from "@/lib/curriculum/types";
import { getCompletedFrenchLessons } from "@/lib/progress/french-progress";

type SectionDef  = { id: string; code: string; title: string };
type SectionState = "locked" | "in_progress" | "completed";
type LessonState  = "locked" | "available" | "completed";


const SECTIONS: SectionDef[] = [
  { id: "A0", code: "A0", title: "Niveau A0" },
  { id: "A1", code: "A1", title: "Niveau A1" },
  { id: "A2", code: "A2", title: "Niveau A2" },
  { id: "B1", code: "B1", title: "Niveau B1" },
  { id: "B2", code: "B2", title: "Niveau B2" },
];

const GRAMMAR_GROUPS: SectionDef[] = [
  { id: "R1", code: "R1", title: "Les fondamentaux" },
  { id: "R2", code: "R2", title: "Les verbes essentiels" },
  { id: "R3", code: "R3", title: "L'interrogation" },
  { id: "R4", code: "R4", title: "Les adjectifs" },
  { id: "R5", code: "R5", title: "Les pronoms" },
  { id: "R6", code: "R6", title: "Le passé" },
  { id: "R7", code: "R7", title: "Le futur" },
  { id: "R8", code: "R8", title: "Les autres temps" },
  { id: "R9", code: "R9", title: "La comparaison" },
];

function grammarGroupId(code: string): string {
  if (code.startsWith("R1.")) return "R1";
  if (code.startsWith("R2.")) return "R2";
  if (code.startsWith("R3.")) return "R3";
  if (code.startsWith("R4.")) return "R4";
  if (code.startsWith("R5.")) return "R5";
  if (code.startsWith("R6.")) return "R6";
  if (code.startsWith("R7.")) return "R7";
  if (code.startsWith("R8.")) return "R8";
  return "R9";
}

const VOCAB_MODULES: SectionDef[] = [
  { id: "V1", code: "V1", title: "L'identité" },
  { id: "V2", code: "V2", title: "Le temps" },
  { id: "V3", code: "V3", title: "Les loisirs" },
  { id: "V4", code: "V4", title: "Le logement" },
  { id: "V5", code: "V5", title: "L'école" },
  { id: "V6", code: "V6", title: "Les vêtements" },
  { id: "V7", code: "V7", title: "La nourriture" },
  { id: "V8", code: "V8", title: "La santé" },
  { id: "V9", code: "V9", title: "Les lieux" },
  { id: "V10", code: "V10", title: "Services et voyages" },
];

const TABS: { id: FrenchTab; label: string }[] = [
  { id: "vocabulaire",    label: "Vocabulaire" },
  { id: "grammaire",      label: "Grammaire" },
  { id: "communication",  label: "Expression" },
];

const VALID_TABS: FrenchTab[] = ["vocabulaire", "grammaire", "communication"];

function lessonHref(th: FrenchTheme): string {
  if (th.tab === "conjugaison") return `/francais/conjugaison/${th.slug}`;
  if (th.tab === "grammaire")   return `/francais/grammaire/${th.slug}`;
  if (th.tab === "vocabulaire") return `/francais/vocabulaire/${th.slug}`;
  return `/francais/${th.slug}`;
}

// ── State badges ──────────────────────────────────────────────────────────────

function SectionStateBadge({ state, comingSoon }: { state: SectionState; comingSoon?: boolean }) {
  if (state === "completed")
    return (
      <span className="rounded-full bg-[var(--color-accent-fr)]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-accent-fr)]">
        Terminé
      </span>
    );
  if (state === "in_progress")
    return (
      <span className="rounded-full bg-[var(--color-accent-fr)]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-accent-fr)]">
        En cours
      </span>
    );
  if (comingSoon)
    return (
      <span className="rounded-full border border-[var(--color-border-default)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--color-text-secondary)]">
        Bientôt
      </span>
    );
  return (
    <span className="rounded-full border border-[var(--color-border-default)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--color-text-secondary)]">
      Verrouillé
    </span>
  );
}

function LessonDot({ state }: { state: LessonState }) {
  if (state === "completed")
    return (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-fr)] text-white">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
    );
  if (state === "available")
    return (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-accent-fr)]">
        <span className="h-2 w-2 rounded-full bg-[var(--color-accent-fr)]" />
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

// ── Vocab flat list (no section grouping) ────────────────────────────────────

function _VocabFlatList({
  themes,
  completedSlugs,
  hydrated,
  vocabGrades,
}: {
  themes: FrenchTheme[];
  completedSlugs: Set<string>;
  hydrated: boolean;
  vocabGrades: Record<string, { score: number; passed: boolean }>;
}) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-accent-fr)]/50 bg-[var(--color-bg-primary)]">
      <ul className="divide-y divide-[var(--color-border-default)]">
        {themes.map((th) => {
          const ls: LessonState = !hydrated ? "locked" : completedSlugs.has(th.slug) ? "completed" : "available";
          const vocabGrade = vocabGrades?.[th.slug];
          const inner = (
            <div className="flex min-h-[52px] items-center gap-3 px-4 py-2.5">
              <LessonDot state={ls} />
              <div className="min-w-0 flex-1">
                <span className="text-xs font-semibold text-[var(--color-text-secondary)]">{th.code}</span>
                <span className="ml-1.5 text-xs font-medium text-[var(--color-text-primary)]">{th.title}</span>
              </div>
              {vocabGrade && (
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold tabular-nums ${
                  vocabGrade.passed
                    ? "bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]"
                    : "bg-amber-100 text-amber-600 dark:bg-amber-900/20"
                }`}>
                  {vocabGrade.score.toFixed(1)}/6
                </span>
              )}
              {ls === "available" && (
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ background: "var(--color-accent-fr)" }}
                  aria-hidden
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="8,5 19,12 8,19" />
                  </svg>
                </span>
              )}
            </div>
          );
          return (
            <li key={th.id}>
              <Link href={lessonHref(th)} className="block transition-colors hover:bg-[var(--color-bg-secondary)]">
                {inner}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ── Section card ──────────────────────────────────────────────────────────────

function SectionCard({
  sec,
  state,
  themes,
  completedSlugs,
  hydrated,
  returnTab,
  vocabGrades,
  isAdmin,
  comingSoon,
}: {
  sec: SectionDef;
  state: SectionState;
  themes: FrenchTheme[];
  completedSlugs: Set<string>;
  hydrated: boolean;
  returnTab?: FrenchTab;
  vocabGrades?: Record<string, { score: number; passed: boolean }>;
  isAdmin?: boolean;
  comingSoon?: boolean;
}) {
  const locked     = state === "locked";
  const inProgress = state === "in_progress";
  const [expanded, setExpanded] = useState(false);
  // in_progress section is always open; completed/locked can be toggled
  const showContent = inProgress || expanded;

  // First uncompleted lesson — the only one accessible in in_progress
  const firstAvailableSlug =
    hydrated && !locked
      ? (themes.find((th) => !completedSlugs.has(th.slug))?.slug ?? null)
      : null;

  function lessonState(th: FrenchTheme): LessonState {
    // Vocabulary lessons are always accessible — no sequential locking
    if (th.tab === "vocabulaire") {
      if (!hydrated) return "locked";
      return completedSlugs.has(th.slug) ? "completed" : "available";
    }
    if (locked) return "locked";
    if (completedSlugs.has(th.slug)) return "completed";
    // Completed section or admin: all lessons accessible
    if (state === "completed" || isAdmin) return "available";
    // In-progress: only the first uncompleted lesson is accessible
    if (th.slug === firstAvailableSlug) return "available";
    return "locked";
  }

  const iconBox = (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
      style={{ background: "color-mix(in srgb, var(--color-accent-fr) 15%, transparent)" }}
    >
      <span className="text-sm font-bold text-[var(--color-accent-fr)]">{sec.code}</span>
    </div>
  );

  return (
    <div
      className={`overflow-hidden rounded-[var(--radius-lg)] border bg-[var(--color-bg-primary)] transition-colors ${
        locked
          ? "border-[var(--color-border-default)] opacity-50"
          : inProgress || expanded
            ? "border-[var(--color-accent-fr)]/50"
            : "border-[var(--color-border-default)]"
      }`}
    >
      {/* Header */}
      {inProgress ? (
        <div className="flex w-full items-center gap-3 px-4 pt-4 pb-3">
          {iconBox}
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-[var(--color-text-primary)]">{sec.title}</p>
          </div>
          <SectionStateBadge state={state} comingSoon={comingSoon} />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="flex w-full items-center gap-3 px-4 pt-4 pb-3 text-left"
        >
          {iconBox}
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-[var(--color-text-primary)]">{sec.title}</p>
          </div>
          <SectionStateBadge state={state} comingSoon={comingSoon} />
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            className={`shrink-0 text-[var(--color-text-secondary)] transition-transform ${expanded ? "rotate-90" : ""}`}
            aria-hidden
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {/* Progress bar (in_progress only) */}
      {inProgress && hydrated && themes.length > 0 && (
        <div className="px-4 pb-2">
          <div className="flex gap-1">
            {themes.map((th) => {
              const isDone = completedSlugs.has(th.slug);
              const isCurrent = th.slug === firstAvailableSlug;
              return (
                <div
                  key={th.id}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${isDone || isCurrent ? "" : "bg-[var(--color-border-default)]"} ${isCurrent ? "opacity-60" : ""}`}
                  style={isDone || isCurrent ? { background: "var(--color-accent-fr)" } : undefined}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Lesson list */}
      {showContent && (
        themes.length > 0 ? (
          <ul className="divide-y divide-[var(--color-border-default)] border-t border-[var(--color-border-default)]">
            {themes.map((th) => {
              const ls = lessonState(th);
              const isLocked    = ls === "locked";
              const isAvailable = ls === "available";

              const vocabGrade = th.tab === "vocabulaire" ? vocabGrades?.[th.slug] : undefined;
              const inner = (
                <div className={`flex min-h-[52px] items-center gap-3 px-4 py-2.5 ${isLocked ? "opacity-40" : ""}`}>
                  <LessonDot state={ls} />
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold text-[var(--color-text-secondary)]">{th.code}</span>
                    <span className="ml-1.5 text-xs font-medium text-[var(--color-text-primary)]">{th.title}</span>
                  </div>
                  {vocabGrade && (
                    <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold tabular-nums ${
                      vocabGrade.passed
                        ? "bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]"
                        : "bg-amber-100 text-amber-600 dark:bg-amber-900/20"
                    }`}>
                      {vocabGrade.score.toFixed(1)}/6
                    </span>
                  )}
                  {isAvailable ? (
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ background: "var(--color-accent-fr)" }}
                      aria-hidden
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="8,5 19,12 8,19" />
                      </svg>
                    </span>
                  ) : ls === "completed" ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className="shrink-0 text-[var(--color-text-secondary)]" aria-hidden>
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  ) : null}
                </div>
              );

              if (isLocked) return <li key={th.id}>{inner}</li>;
              return (
                <li key={th.id}>
                  <Link
                    href={lessonHref(th) + (returnTab && th.tab !== returnTab ? `?returnTab=${returnTab}` : "")}
                    className="block transition-colors hover:bg-[var(--color-bg-secondary)]"
                  >
                    {inner}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="border-t border-[var(--color-border-default)] px-4 py-3 text-xs text-[var(--color-text-secondary)]">
            Contenu à venir.
          </p>
        )
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function FrancaisClient({ isAdmin = false }: { isAdmin?: boolean }) {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") as FrenchTab | null;
  const [tab, setTab] = useState<FrenchTab>(
    initialTab && VALID_TABS.includes(initialTab) ? initialTab : "vocabulaire",
  );
  const [completedSlugs, setCompletedSlugs] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);
  const [vocabGrades, setVocabGrades] = useState<Record<string, { score: number; passed: boolean }>>({});

  function refreshProgress() {
    setCompletedSlugs(getCompletedFrenchLessons());
    try {
      const stored = JSON.parse(localStorage.getItem("soutien-vocab-eval-v1") ?? "{}");
      setVocabGrades(stored);
    } catch {}
  }

  useEffect(() => {
    refreshProgress();
    setHydrated(true);

    window.addEventListener("soutien-french-lesson-complete", refreshProgress);
    return () => window.removeEventListener("soutien-french-lesson-complete", refreshProgress);
  }, []);

  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 pt-8 pb-32">
      <header className="relative overflow-hidden rounded-[var(--radius-lg)] px-5 py-5" style={{ background: "color-mix(in oklch, var(--color-accent-fr) 11%, white)" }}>
        <div className="pointer-events-none absolute -bottom-4 -right-4 text-[var(--color-accent-fr)]" aria-hidden>
          <svg width="108" height="108" viewBox="0 0 100 100" fill="none">
            <rect x="10" y="10" width="60" height="76" rx="8" fill="currentColor" opacity="0.18"/>
            <rect x="10" y="10" width="60" height="76" rx="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.28"/>
            <line x1="22" y1="30" x2="58" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.38"/>
            <line x1="22" y1="42" x2="58" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.38"/>
            <line x1="22" y1="54" x2="50" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.38"/>
            <line x1="22" y1="66" x2="55" y2="66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.38"/>
            <path d="M70 76 L88 20 L96 28 Z" fill="currentColor" opacity="0.48"/>
            <path d="M68 79 L72 73 L88 20 L82 14 Z" fill="currentColor" opacity="0.32"/>
            <ellipse cx="68" cy="81" rx="3" ry="2" fill="currentColor" opacity="0.48"/>
          </svg>
        </div>
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-fr)]">Français</p>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Compréhension et expression</h1>
        </div>
      </header>

      {/* Tab toggle */}
      <div
        role="tablist"
        aria-label="Catégories français"
        className="grid grid-cols-3 gap-1 rounded-[var(--radius-lg)] bg-[var(--color-accent-fr)]/15 p-1"
      >
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`min-h-11 rounded-[var(--radius-lg)] px-2 text-sm font-medium transition-colors ${
              tab === id
                ? "bg-[var(--color-accent-fr)] text-white shadow-sm"
                : "bg-transparent text-[var(--color-accent-fr)] hover:bg-white/40"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "communication" ? (
        <section aria-label="Test de placement français" className="space-y-4">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent-fr)]">Expression</p>
            <h2 className="mt-1 text-lg font-bold text-[var(--color-text-primary)]">Test de placement français</h2>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              CE, CO, PE et PO regroupés en une batterie (100 points). Accessible depuis la section placement.
            </p>
            <Link
              href="/placement"
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-fr)] px-5 text-sm font-semibold text-white"
            >
              Ouvrir le test de placement
            </Link>
          </div>
        </section>
      ) : null}

      <section className="space-y-4" aria-label={`Leçons — ${tab}`} hidden={tab === "communication"}>
        {tab === "vocabulaire" ? (
          <>
            {VOCAB_MODULES.map((mod) => {
              const themes = FRENCH_THEMES.filter((th) => th.section === mod.id && th.tab === "vocabulaire");
              if (themes.length === 0) return null;
              const allDone = hydrated && themes.every((th) => completedSlugs.has(th.slug));
              const state: SectionState = !hydrated ? "locked" : allDone ? "completed" : "in_progress";
              return (
                <SectionCard
                  key={mod.id}
                  sec={mod}
                  state={state}
                  themes={themes}
                  completedSlugs={hydrated ? completedSlugs : new Set()}
                  hydrated={hydrated}
                  returnTab={tab}
                  vocabGrades={vocabGrades}
                  isAdmin={isAdmin}
                />
              );
            })}
          </>
        ) : (
          (() => {
            const groups = tab === "grammaire" ? GRAMMAR_GROUPS : SECTIONS;

            const allTabThemes = tab === "grammaire"
              ? GRAMMAR_GROUPS.flatMap((grp) =>
                  FRENCH_THEMES.filter(
                    (th) =>
                      (th.tab === "grammaire" || th.tab === "conjugaison") &&
                      grammarGroupId(th.code) === grp.id,
                  ),
                )
              : SECTIONS.flatMap((sec) =>
                  FRENCH_THEMES.filter(
                    (th) => th.section === sec.id && th.tab === tab,
                  ),
                );

            const GRAMMAR_AVAILABLE = new Set(["R1", "R2"]);
            let prevCount = 0;

            return (
              <>
                {groups.map((grp) => {
                  const themes = tab === "grammaire"
                    ? allTabThemes.filter((th) => grammarGroupId(th.code) === grp.id)
                    : allTabThemes.filter((th) => th.section === grp.id);
                  if (themes.length === 0) return null;

                  const isComingSoon = tab === "grammaire" && !GRAMMAR_AVAILABLE.has(grp.id) && !isAdmin;

                  let state: SectionState;
                  if (!hydrated || (tab === "grammaire" && !GRAMMAR_AVAILABLE.has(grp.id) && !isAdmin)) {
                    state = "locked";
                  } else {
                    const prevThemes = allTabThemes.slice(0, prevCount);
                    const sectionAccessible =
                      prevThemes.length === 0 ||
                      prevThemes.every((th) => completedSlugs.has(th.slug));

                    if (!sectionAccessible && !isAdmin) {
                      state = "locked";
                    } else {
                      const allDone = themes.every((th) => completedSlugs.has(th.slug));
                      state = allDone ? "completed" : "in_progress";
                    }
                  }

                  prevCount += themes.length;

                  return (
                    <SectionCard
                      key={grp.id}
                      sec={grp}
                      state={state}
                      themes={themes}
                      completedSlugs={hydrated ? completedSlugs : new Set()}
                      hydrated={hydrated}
                      returnTab={tab}
                      isAdmin={isAdmin}
                      comingSoon={isComingSoon}
                    />
                  );
                })}
              </>
            );
          })()
        )}
      </section>

    </main>
  );
}

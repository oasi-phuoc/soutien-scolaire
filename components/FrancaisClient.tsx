"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FRENCH_THEMES } from "@/lib/curriculum/french-data";
import type { FrenchSection, FrenchTab, FrenchTheme } from "@/lib/curriculum/types";
import { loadProgress } from "@/lib/progress/math-progress";
import { getCompletedFrenchLessons } from "@/lib/progress/french-progress";

type SectionDef  = { id: FrenchSection; code: string; title: string };
type SectionState = "locked" | "in_progress" | "completed" | "unlocked";
type LessonState  = "locked" | "available" | "completed";

const SECTIONS: SectionDef[] = [
  { id: "A0", code: "A0", title: "Niveau A0" },
  { id: "A1", code: "A1", title: "Niveau A1" },
  { id: "A2", code: "A2", title: "Niveau A2" },
  { id: "B1", code: "B1", title: "Niveau B1" },
  { id: "B2", code: "B2", title: "Niveau B2" },
];

const SECTION_ORDER: FrenchSection[] = ["A0", "A1", "A2", "B1", "B2"];

const TABS: { id: FrenchTab; label: string }[] = [
  { id: "vocabulaire", label: "Vocabulaire" },
  { id: "grammaire",   label: "Grammaire" },
];

const LEVEL_TO_SECTION: Record<string, FrenchSection> = {
  PA: "A0", ALPHA: "A0", A0: "A0", A1: "A1", A2: "A2", B1: "B1", B2: "B2",
};

const VALID_TABS: FrenchTab[] = ["vocabulaire", "grammaire"];

function getSectionState(sectionId: FrenchSection, currentSection: FrenchSection | null): SectionState {
  if (!currentSection) return "locked";
  const currentIdx = SECTION_ORDER.indexOf(currentSection);
  const sectionIdx = SECTION_ORDER.indexOf(sectionId);
  if (sectionIdx < currentIdx) return "completed";
  if (sectionIdx === currentIdx) return "in_progress";
  return "locked";
}

function lessonHref(th: FrenchTheme): string {
  if (th.tab === "conjugaison") return `/francais/conjugaison/${th.slug}`;
  if (th.tab === "grammaire")   return `/francais/grammaire/${th.slug}`;
  if (th.tab === "vocabulaire") return `/francais/vocabulaire/${th.slug}`;
  return `/francais/${th.slug}`;
}

// ── State badges ──────────────────────────────────────────────────────────────

function SectionStateBadge({ state }: { state: SectionState }) {
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
  if (state === "unlocked") return null;
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

// ── Section card (all tabs) ───────────────────────────────────────────────────

function SectionCard({
  sec,
  state,
  themes,
  completedSlugs,
  hydrated,
  returnTab,
}: {
  sec: SectionDef;
  state: SectionState;
  themes: FrenchTheme[];
  completedSlugs: Set<string>;
  hydrated: boolean;
  returnTab?: FrenchTab;
}) {
  const locked = state === "locked";
  const inProgress = state === "in_progress";
  // in_progress: always visible, not toggleable
  // locked / completed: collapsed by default, toggleable
  const [expanded, setExpanded] = useState(false);
  const showContent = inProgress || expanded;

  // First uncompleted lesson in this section (for sequential unlock within in_progress)
  const firstAvailableSlug =
    hydrated && !locked
      ? (themes.find((th) => !completedSlugs.has(th.slug))?.slug ?? null)
      : null;

  function lessonState(th: FrenchTheme): LessonState {
    if (locked) return "locked";
    if (completedSlugs.has(th.slug)) return "completed";
    // Only fully-completed sections (all lessons done) have every lesson accessible
    if (state === "completed") return "available";
    // In-progress or unlocked: only first uncompleted is available; rest locked
    if (th.slug === firstAvailableSlug) return "available";
    return "locked";
  }

  // Shared icon box
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
      className={`rounded-[var(--radius-lg)] border bg-[var(--color-bg-primary)] transition-colors ${
        locked
          ? "border-[var(--color-border-default)] opacity-50"
          : inProgress || expanded
            ? "border-[var(--color-accent-fr)]/50"
            : "border-[var(--color-border-default)]"
      }`}
    >
      {/* Header — in_progress: static div; locked/completed: clickable button */}
      {inProgress ? (
        <div className="flex w-full items-center gap-3 px-4 pt-4 pb-3">
          {iconBox}
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-[var(--color-text-primary)]">{sec.title}</p>
          </div>
          <SectionStateBadge state={state} />
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
          <SectionStateBadge state={state} />
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

      {/* Lesson list */}
      {showContent && (
        themes.length > 0 ? (
          <ul className="divide-y divide-[var(--color-border-default)] border-t border-[var(--color-border-default)]">
            {themes.map((th) => {
              const ls = lessonState(th);
              const isLocked    = ls === "locked";
              const isAvailable = ls === "available";

              const inner = (
                <div className={`flex items-center gap-3 px-4 py-2.5 ${isLocked ? "opacity-40" : ""}`}>
                  <LessonDot state={ls} />
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold text-[var(--color-text-secondary)]">{th.code}</span>
                    <span className="ml-1.5 text-xs font-medium text-[var(--color-text-primary)]">{th.title}</span>
                  </div>
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

export function FrancaisClient() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") as FrenchTab | null;
  const [tab, setTab] = useState<FrenchTab>(
    initialTab && VALID_TABS.includes(initialTab) ? initialTab : "vocabulaire",
  );
  const [currentSection, setCurrentSection] = useState<FrenchSection | null>(null);
  const [completedSlugs, setCompletedSlugs] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const prog  = loadProgress();
    const level = prog.frenchLevel ?? "PA";
    setCurrentSection((LEVEL_TO_SECTION[level] ?? "A0") as FrenchSection);
    setCompletedSlugs(getCompletedFrenchLessons());
    setHydrated(true);

    function onComplete() { setCompletedSlugs(getCompletedFrenchLessons()); }
    window.addEventListener("soutien-french-lesson-complete", onComplete);
    return () => window.removeEventListener("soutien-french-lesson-complete", onComplete);
  }, []);

  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-8 pb-32">
      <header className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-fr)]">Français</p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Compréhension et expression</h1>
      </header>

      {/* Tab toggle */}
      <div
        role="tablist"
        aria-label="Catégories français"
        className="grid grid-cols-2 gap-1 rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] p-1"
      >
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`min-h-10 rounded-[var(--radius-md)] px-2 text-xs font-medium transition-colors ${
              tab === id
                ? "bg-white text-[var(--color-accent-fr)] shadow-sm dark:bg-zinc-900"
                : "text-[var(--color-text-secondary)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <section className="space-y-4" aria-label={`Leçons — ${tab}`}>
        {SECTIONS.map((sec) => {
          const rawState = hydrated ? getSectionState(sec.id, currentSection) : "locked";
          const themes = FRENCH_THEMES.filter(
            (th) => th.section === sec.id &&
              (th.tab === tab || (tab === "grammaire" && th.tab === "conjugaison")),
          );
          if (themes.length === 0) return null;
          const allDone = hydrated && themes.length > 0 && themes.every((th) => completedSlugs.has(th.slug));
          const state: SectionState = rawState === "locked" ? "locked" : allDone ? "completed" : rawState === "in_progress" ? "in_progress" : "unlocked";
          return (
            <SectionCard
              key={sec.id}
              sec={sec}
              state={state}
              themes={themes}
              completedSlugs={hydrated ? completedSlugs : new Set()}
              hydrated={hydrated}
              returnTab={tab}
            />
          );
        })}
      </section>

      <p className="text-center text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
        Test de positionnement :{" "}
        <Link href="/placement" className="underline text-[var(--color-accent-fr)]">
          voir la page dédiée
        </Link>
        .
      </p>
    </main>
  );
}

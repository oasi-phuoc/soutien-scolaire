"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FRENCH_THEMES } from "@/lib/curriculum/french-data";
import { useContentEditor } from "@/components/content-editor/ContentEditorProvider";
import { resolveFrenchThemes } from "@/lib/content-editor/catalog";
import type { FrenchTab, FrenchTheme } from "@/lib/curriculum/types";
import { getCompletedFrenchLessons } from "@/lib/progress/french-progress";
import { CommunicationModuleList } from "@/components/communication/CommunicationHome";
import {
  grammarCodeAllowed,
  hasFrenchLessonAccess,
  type LessonAccessFlags,
} from "@/lib/auth/lesson-access";
import {
  buildGrammarModuleLessonSlugs,
  isGrammarModuleUnlocked,
} from "@/lib/progress/french-grammar-gates";

type SectionDef  = { id: string; code: string; title: string };
type SectionState = "locked" | "in_progress" | "completed";
type LessonState  = "locked" | "available" | "completed";


/** Module = Gx ; leçon = Gx.y (affichage du code, sans « Unité » / « Chapitre »). */
const GRAMMAR_GROUPS: SectionDef[] = [
  { id: "G1", code: "G1", title: "Le présent" },
  { id: "G2", code: "G2", title: "Le nom" },
  { id: "G3", code: "G3", title: "L'adjectif qualificatif" },
  { id: "G4", code: "G4", title: "Les déterminants" },
  { id: "G5", code: "G5", title: "La structure de la phrase" },
  { id: "G6", code: "G6", title: "Bilan A1" },
  { id: "G7", code: "G7", title: "Les prépositions de lieu" },
  { id: "G8", code: "G8", title: "Le passé" },
  { id: "G9", code: "G9", title: "Le futur" },
  { id: "G10", code: "G10", title: "La comparaison" },
  { id: "G11", code: "G11", title: "L'expression de temps" },
  { id: "G12", code: "G12", title: "Les pronoms" },
  { id: "G13", code: "G13", title: "Bilan A2" },
  { id: "G14", code: "G14", title: "Les adverbes" },
  { id: "G15", code: "G15", title: "Les mots de liaison" },
  { id: "G16", code: "G16", title: "Les autres temps des verbes" },
  { id: "G17", code: "G17", title: "Les phrases complexes" },
  { id: "G18", code: "G18", title: "Bilan B1" },
];

function moduleGroupId(code: string): string {
  const m = /^(G\d+)\./.exec(code);
  return m?.[1] ?? "";
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
  { id: "V10", code: "V10", title: "Services, voyages et animaux" },
];

type ActiveFrenchTab = "vocabulaire" | "grammaire" | "communication";

const TABS: { id: ActiveFrenchTab; label: string }[] = [
  { id: "vocabulaire", label: "Vocabulaire" },
  { id: "grammaire", label: "Grammaire" },
  { id: "communication", label: "Communication" },
];

const TAB_TITLES: Record<ActiveFrenchTab, string> = {
  vocabulaire: "Vocabulaire",
  grammaire: "Grammaire",
  communication: "Communication",
};

function lessonHref(th: FrenchTheme): string {
  if (th.tab === "grammaire" || th.tab === "conjugaison") return `/francais/grammaire/${th.slug}`;
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
  freeAccess,
  autoExpand = false,
}: {
  sec: SectionDef;
  state: SectionState;
  themes: FrenchTheme[];
  completedSlugs: Set<string>;
  hydrated: boolean;
  returnTab?: FrenchTab;
  vocabGrades?: Record<string, { score: number; passed: boolean }>;
  isAdmin?: boolean;
  freeAccess?: boolean;
  /** Un seul module « en cours » est ouvert automatiquement. */
  autoExpand?: boolean;
}) {
  const locked = state === "locked";
  const [expanded, setExpanded] = useState(false);
  // Seul le module principal en cours est ouvert ; terminé / verrouillé / autres en cours → repliés
  const showContent = autoExpand || expanded;
  const unlockAll = Boolean(isAdmin || freeAccess);

  // Première leçon non complétée du module (Gx.1 débloqué par défaut)
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
    // Accès libre / admin : toutes les leçons du module
    if (unlockAll) return "available";
    // Parcours normal : seule la première leçon non complétée (Gx.1 puis Gx.2 après éval…)
    if (th.slug === firstAvailableSlug) return "available";
    return "locked";
  }

  const iconBox = (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/70 dark:bg-zinc-900/40">
      <span className="text-sm font-bold text-[var(--color-accent-fr)]">{sec.code}</span>
    </div>
  );

  return (
    <div
      className={`overflow-hidden rounded-[var(--radius-lg)] border bg-[var(--color-bg-primary)] transition-colors ${
        locked
          ? "border-[var(--color-border-default)] opacity-50"
          : autoExpand || expanded
            ? "border-[var(--color-accent-fr)]/50"
            : "border-[var(--color-border-default)]"
      }`}
    >
      {/* Header */}
      <div
        className="module-list-header"
        style={{ "--module-header-accent": "var(--color-accent-fr)" } as React.CSSProperties}
      >
        {autoExpand ? (
          <div className="flex w-full items-center gap-3 px-4 py-3">
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
            className="flex w-full items-center gap-3 px-4 py-3 text-left"
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

        {/* Progress bar (module en cours principal) */}
        {autoExpand && hydrated && themes.length > 0 && (
          <div className="px-4 pb-3">
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
      </div>

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
                    <span className="text-xs font-semibold text-[var(--color-text-secondary)]">
                      {th.code}
                    </span>
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

export function FrancaisClient({
  isAdmin = false,
  freeAccess = false,
  canPartialFrenchGrammar = false,
  canPartialFrenchComm = false,
}: {
  isAdmin?: boolean;
  freeAccess?: boolean;
  canPartialFrenchGrammar?: boolean;
  canPartialFrenchComm?: boolean;
}) {
  const lessonAccess: LessonAccessFlags = {
    canFreeAccess: Boolean(isAdmin || freeAccess),
    canPartialFrenchGrammar: Boolean(isAdmin || freeAccess || canPartialFrenchGrammar),
    canPartialFrenchComm: Boolean(isAdmin || freeAccess || canPartialFrenchComm),
    canPartialMathA3: false,
    canPartialMathA8: false,
    canPartialMathG3: false,
  };
  const frenchOk = isAdmin || hasFrenchLessonAccess(lessonAccess);
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") as FrenchTab | null;
  const { overrides } = useContentEditor();
  const frenchThemes = resolveFrenchThemes(FRENCH_THEMES, overrides);
  const asActiveTab = (value: string | null): ActiveFrenchTab | null =>
    value === "vocabulaire" || value === "grammaire" || value === "communication"
      ? value
      : null;
  const initialTab: ActiveFrenchTab =
    tabParam === "conjugaison" ? "grammaire" : asActiveTab(tabParam) ?? "vocabulaire";
  const [tab, setTab] = useState<ActiveFrenchTab>(initialTab);
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

  // Sync with sidebar / URL (?tab=) — soft nav does not remount the page
  useEffect(() => {
    if (tabParam === "conjugaison") {
      setTab("grammaire");
      window.history.replaceState(null, "", "/francais?tab=grammaire");
      return;
    }
    const next = asActiveTab(tabParam);
    if (next) setTab(next);
  }, [tabParam]);

  useEffect(() => {
    refreshProgress();
    setHydrated(true);

    window.addEventListener("soutien-french-lesson-complete", refreshProgress);
    return () => window.removeEventListener("soutien-french-lesson-complete", refreshProgress);
  }, []);

  function renderGrammarGroups(groups: SectionDef[]) {
    const unlockAll = isAdmin || freeAccess;
    const themesByGroup = new Map<string, FrenchTheme[]>();
    const moduleLessonSlugs = buildGrammarModuleLessonSlugs(
      frenchThemes.filter((th) => th.tab === "grammaire"),
    );

    for (const grp of groups) {
      const themes = frenchThemes
        .filter((th) => moduleGroupId(th.code) === grp.id)
        .filter((th) => unlockAll || grammarCodeAllowed(th.code, lessonAccess))
        .sort((a, b) => {
          const ua = Number(/^G\d+\.(\d+)$/.exec(a.code)?.[1] ?? 0);
          const ub = Number(/^G\d+\.(\d+)$/.exec(b.code)?.[1] ?? 0);
          return ua - ub;
        });
      themesByGroup.set(grp.id, themes);
    }

    // Premier module débloqué non terminé → seul déplié automatiquement
    let primaryInProgressId: string | null = null;
    if (hydrated && frenchOk) {
      for (const grp of groups) {
        const themes = themesByGroup.get(grp.id) ?? [];
        if (themes.length === 0) continue;
        if (
          !unlockAll &&
          !isGrammarModuleUnlocked(grp.id, completedSlugs, moduleLessonSlugs)
        ) {
          continue;
        }
        if (!themes.every((th) => completedSlugs.has(th.slug))) {
          primaryInProgressId = grp.id;
          break;
        }
      }
    }

    return (
      <>
        {!frenchOk && hydrated ? (
          <p className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3 text-sm text-[var(--color-text-secondary)]">
            Accès français non accordé. Demandez à votre enseignant un accès partiel ou complet.
          </p>
        ) : null}
        {groups.map((grp) => {
          const themes = themesByGroup.get(grp.id) ?? [];
          if (themes.length === 0) return null;

          let state: SectionState;
          if (!hydrated || !frenchOk) {
            state = "locked";
          } else if (
            !unlockAll &&
            !isGrammarModuleUnlocked(grp.id, completedSlugs, moduleLessonSlugs)
          ) {
            state = "locked";
          } else {
            const allDone = themes.every((th) => completedSlugs.has(th.slug));
            state = allDone ? "completed" : "in_progress";
          }

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
              freeAccess={freeAccess}
              autoExpand={grp.id === primaryInProgressId}
            />
          );
        })}
      </>
    );
  }

  return (
    <main className="app-shell flex-1 space-y-6 pt-8 pb-32 lg:pb-28">
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
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
            {TAB_TITLES[tab]}
          </h1>
        </div>
      </header>

      {/* Tab toggle — mobile only (desktop: barre latérale) */}
      <div
        role="tablist"
        aria-label="Catégories français"
        className="grid grid-cols-3 gap-1 rounded-[var(--radius-lg)] bg-[var(--color-accent-fr)]/15 p-1 lg:hidden"
      >
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-label={label}
            aria-selected={tab === id}
            title={label}
            onClick={() => {
              setTab(id);
              window.history.replaceState(null, "", `/francais?tab=${id}`);
            }}
            className={`min-h-11 min-w-0 truncate rounded-[var(--radius-lg)] px-1 text-xs font-medium transition-colors sm:text-sm ${
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
        <section aria-label="Communication" className="space-y-4">
          <CommunicationModuleList
            isAdmin={isAdmin}
            freeAccess={freeAccess}
            canPartialFrenchComm={canPartialFrenchComm}
          />
        </section>
      ) : null}

      <section className="space-y-4" aria-label={`Leçons — ${tab}`} hidden={tab === "communication"}>
        {tab === "vocabulaire" ? (
          <>
            {!frenchOk && hydrated ? (
              <p className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3 text-sm text-[var(--color-text-secondary)]">
                Accès français non accordé. Demandez à votre enseignant un accès partiel ou complet.
              </p>
            ) : null}
            {VOCAB_MODULES.map((mod, idx) => {
              const themes = frenchThemes.filter((th) => th.section === mod.id && th.tab === "vocabulaire");
              if (themes.length === 0) return null;
              const allDone = hydrated && frenchOk && themes.every((th) => completedSlugs.has(th.slug));
              const state: SectionState = !hydrated || !frenchOk
                ? "locked"
                : allDone
                  ? "completed"
                  : "in_progress";
              const isPrimaryVocab =
                frenchOk &&
                hydrated &&
                !allDone &&
                VOCAB_MODULES.findIndex((m) => {
                  const t = frenchThemes.filter((th) => th.section === m.id && th.tab === "vocabulaire");
                  return t.length > 0 && !t.every((th) => completedSlugs.has(th.slug));
                }) === idx;
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
                  freeAccess={freeAccess || frenchOk}
                  autoExpand={isPrimaryVocab}
                />
              );
            })}
          </>
        ) : tab === "grammaire" ? (
          renderGrammarGroups(GRAMMAR_GROUPS)
        ) : null}
      </section>

    </main>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FRENCH_THEMES, frenchThemesBySection } from "@/lib/curriculum/french-data";
import type { FrenchSection, FrenchTab, FrenchTheme } from "@/lib/curriculum/types";
import { loadProgress } from "@/lib/progress/math-progress";
import { AppProgressBar } from "@/components/ui/AppProgressBar";

type SectionDef = { id: FrenchSection; code: string; title: string; description: string };
type SectionState = "locked" | "in_progress" | "completed";

const SECTIONS: SectionDef[] = [
  { id: "ALPHA", code: "PA", title: "Pré-alphabétisation", description: "Sens de l'écrit, phonèmes, alphabet latin, syllabes" },
  { id: "A0",    code: "A0", title: "Niveau A0 — Débutant",    description: "Salutations, chiffres, couleurs, famille, corps, classe" },
  { id: "A1",    code: "A1", title: "Niveau A1 — Découverte",  description: "Quotidien, logement, nourriture, transports, météo, achats" },
  { id: "A2",    code: "A2", title: "Niveau A2 — Élémentaire", description: "Passé composé, imparfait, santé, travail, loisirs, services" },
  { id: "B1",    code: "B1", title: "Niveau B1 — Seuil",       description: "Opinions, projets, monde du travail, société, documents" },
  { id: "B2",    code: "B2", title: "Niveau B2 — Avancé",      description: "Argumentation, littérature, écrits professionnels, TCF" },
];

const SECTION_ORDER: FrenchSection[] = ["ALPHA", "A0", "A1", "A2", "B1", "B2"];

const TABS: { id: FrenchTab; label: string }[] = [
  { id: "general",     label: "Général" },
  { id: "vocabulaire", label: "Vocabulaire" },
  { id: "grammaire",   label: "Grammaire" },
  { id: "conjugaison", label: "Conjugaison" },
];

const LEVEL_TO_SECTION: Record<string, FrenchSection> = {
  PA: "ALPHA", ALPHA: "ALPHA", A0: "A0", A1: "A1", A2: "A2", B1: "B1", B2: "B2",
};

function getSectionState(sectionId: FrenchSection, currentSection: FrenchSection | null): SectionState {
  if (!currentSection) return "locked";
  const currentIdx = SECTION_ORDER.indexOf(currentSection);
  const sectionIdx = SECTION_ORDER.indexOf(sectionId);
  if (sectionIdx < currentIdx) return "completed";
  if (sectionIdx === currentIdx) return "in_progress";
  return "locked";
}

// ── State badge ────────────────────────────────────────────────────────────────

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

// ── Section card (Général tab) ─────────────────────────────────────────────────

function SectionCard({ sec, state, isActive }: { sec: SectionDef; state: SectionState; isActive: boolean }) {
  const themes = frenchThemesBySection(sec.id);
  const isCollapsible = state === "locked" || state === "completed";
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (state === "in_progress") setExpanded(true);
  }, [state]);

  return (
    <div
      className={`rounded-[var(--radius-lg)] border bg-[var(--color-bg-primary)] transition-colors ${
        state === "locked"
          ? "border-[var(--color-border-default)] opacity-50"
          : isActive
            ? "border-[var(--color-accent-fr)]/50"
            : "border-[var(--color-border-default)]"
      }`}
    >
      <button
        type="button"
        onClick={() => isCollapsible && setExpanded((e) => !e)}
        className={`flex w-full items-center gap-3 px-4 pt-4 pb-3 text-left ${isCollapsible ? "" : "cursor-default"}`}
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
          style={{ background: "color-mix(in srgb, var(--color-accent-fr) 15%, transparent)" }}
        >
          <span className="text-sm font-bold text-[var(--color-accent-fr)]">{sec.code}</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-[var(--color-text-primary)]">{sec.title}</p>
          <p className="text-xs text-[var(--color-text-secondary)]">{sec.description}</p>
        </div>
        <SectionStateBadge state={state} />
        {isCollapsible && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`shrink-0 text-[var(--color-text-secondary)] transition-transform ${expanded ? "rotate-90" : ""}`} aria-hidden>
            <path d="M9 18l6-6-6-6" />
          </svg>
        )}
      </button>

      {expanded && themes.length > 0 && (
        <ul className="divide-y divide-[var(--color-border-default)] border-t border-[var(--color-border-default)]">
          {themes.map((th) => (
            <li key={th.id}>
              <Link
                href={`/francais/${th.slug}`}
                className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-[var(--color-bg-secondary)]"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-semibold text-[var(--color-text-secondary)]">{th.code}</span>
                  <span className="ml-1.5 text-xs font-medium text-[var(--color-text-primary)]">{th.title}</span>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[var(--color-text-secondary)]" aria-hidden>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ── Lesson list (Grammaire / Vocabulaire / Conjugaison tabs) ───────────────────

function LessonSection({ sec, themes }: { sec: SectionDef; themes: FrenchTheme[] }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 px-1">
        <span className="text-xs font-bold uppercase text-[var(--color-accent-fr)]">{sec.code}</span>
        <span className="text-xs text-[var(--color-text-secondary)]">{sec.title}</span>
      </div>
      <ul className="divide-y divide-[var(--color-border-default)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
        {themes.map((th) => (
          <li key={th.id}>
            <Link
              href={`/francais/${th.slug}`}
              className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-[var(--color-bg-secondary)]"
            >
              <span className="w-14 shrink-0 text-[10px] font-bold text-[var(--color-accent-fr)]">{th.code}</span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-[var(--color-text-primary)]">{th.title}</p>
                <p className="mt-0.5 text-xs leading-snug text-[var(--color-text-secondary)]">{th.summary}</p>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[var(--color-text-secondary)]" aria-hidden>
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export function FrancaisClient() {
  const [tab, setTab] = useState<FrenchTab>("general");
  const [currentSection, setCurrentSection] = useState<FrenchSection | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const prog = loadProgress();
    const level = prog.frenchLevel ?? "PA";
    const section = LEVEL_TO_SECTION[level] ?? "ALPHA";
    setCurrentSection(section);
    setHydrated(true);
  }, []);

  const currentIdx = currentSection ? SECTION_ORDER.indexOf(currentSection) : -1;
  const completedCount = currentIdx >= 0 ? currentIdx : 0;
  const totalSections = SECTION_ORDER.length;
  const pct = Math.round((completedCount / totalSections) * 100);

  const lessonGroups =
    tab !== "general"
      ? SECTIONS.map((sec) => ({
          sec,
          themes: FRENCH_THEMES.filter((th) => th.section === sec.id && th.tab === tab),
        })).filter((g) => g.themes.length > 0)
      : [];

  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-8 pb-32">
      <header className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-fr)]">Français</p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Pré-alpha → B2</h1>
      </header>

      {/* Tab toggle */}
      <div
        role="tablist"
        aria-label="Catégories français"
        className="grid grid-cols-4 gap-1 rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] p-1"
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

      {/* Global progress — only on Général tab */}
      {hydrated && tab === "general" && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
            <span>Progression globale</span>
            <span>{completedCount} / {totalSections} niveaux · {pct}%</span>
          </div>
          <AppProgressBar value={pct} color="var(--color-accent-fr)" height={6} />
        </div>
      )}

      {tab === "general" ? (
        /* Section cards */
        <section className="space-y-4" aria-label="Modules de français">
          {SECTIONS.map((sec) => (
            <SectionCard
              key={sec.id}
              sec={sec}
              state={getSectionState(sec.id, currentSection)}
              isActive={hydrated && sec.id === currentSection}
            />
          ))}
        </section>
      ) : (
        /* Lesson lists */
        <section className="space-y-6" aria-label={`Leçons — ${tab}`}>
          {lessonGroups.length > 0 ? (
            lessonGroups.map(({ sec, themes }) => (
              <LessonSection key={sec.id} sec={sec} themes={themes} />
            ))
          ) : (
            <p className="text-center text-sm text-[var(--color-text-secondary)]">
              Contenu à venir.
            </p>
          )}
        </section>
      )}

      <p className="text-center text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
        Test de positionnement :{" "}
        <Link href="/placement" className="underline text-[var(--color-accent-fr)]">voir la page dédiée</Link>.
      </p>
    </main>
  );
}

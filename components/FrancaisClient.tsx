"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { frenchThemesBySection } from "@/lib/curriculum/french-data";
import type { FrenchSection } from "@/lib/curriculum/types";
import { loadProgress } from "@/lib/progress/math-progress";

type SectionDef = { id: FrenchSection; code: string; title: string; description: string };

const SECTIONS: SectionDef[] = [
  { id: "ALPHA", code: "PA", title: "Pré-alphabétisation", description: "Sens de l'écrit, phonèmes, alphabet latin, syllabes" },
  { id: "A0",    code: "A0", title: "Niveau A0 — Débutant",    description: "Salutations, chiffres, couleurs, famille, corps, classe" },
  { id: "A1",    code: "A1", title: "Niveau A1 — Découverte",  description: "Quotidien, logement, nourriture, transports, météo, achats" },
  { id: "A2",    code: "A2", title: "Niveau A2 — Élémentaire", description: "Passé composé, imparfait, santé, travail, loisirs, services" },
  { id: "B1",    code: "B1", title: "Niveau B1 — Seuil",       description: "Opinions, projets, monde du travail, société, documents" },
  { id: "B2",    code: "B2", title: "Niveau B2 — Avancé",      description: "Argumentation, littérature, écrits professionnels, TCF" },
];

const LEVEL_TO_SECTION: Record<string, FrenchSection> = {
  PA: "ALPHA", ALPHA: "ALPHA", A0: "A0", A1: "A1", A2: "A2", B1: "B1", B2: "B2",
};

export function FrancaisClient() {
  const [activeSection, setActiveSection] = useState<FrenchSection | null>(null);

  useEffect(() => {
    const prog = loadProgress();
    const level = prog.frenchLevel ?? "PA";
    setActiveSection(LEVEL_TO_SECTION[level] ?? "ALPHA");
  }, []);

  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-8 pb-32">
      <header className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-fr)]">Français</p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Pré-alpha → B2</h1>
      </header>

      <section aria-label="Liste des modules" className="space-y-4">
        <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">Modules</h2>
        <ul className="space-y-4">
          {SECTIONS.map((sec) => {
            const themes = frenchThemesBySection(sec.id);
            const isActive = activeSection === sec.id;
            return (
              <li key={sec.id}>
                <div
                  className={`rounded-[var(--radius-lg)] border bg-[var(--color-bg-primary)] ${
                    isActive
                      ? "border-[var(--color-accent-fr)]/50"
                      : "border-[var(--color-border-default)]"
                  }`}
                >
                  <div className="flex items-center gap-3 px-4 pt-4 pb-3">
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
                    <span className="shrink-0 text-xs text-[var(--color-text-secondary)]">
                      {themes.length} thème{themes.length > 1 ? "s" : ""}
                    </span>
                  </div>

                  {themes.length > 0 && (
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
              </li>
            );
          })}
        </ul>
      </section>

      <p className="text-center text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
        Test de positionnement :{" "}
        <Link href="/placement" className="underline text-[var(--color-accent-fr)]">voir la page dédiée</Link>.
      </p>
    </main>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { COMM_MODULES, normalizeCommunicationProgress } from "@/lib/curriculum/communication-data";
import { useContentEditor } from "@/components/content-editor/ContentEditorProvider";
import { resolveCommModules } from "@/lib/content-editor/catalog";
import { getCompletedFrenchLessons } from "@/lib/progress/french-progress";

const ACCENT = "var(--color-accent-comm)";
const COMM_PROGRESS_KEY = "soutien-comm-progress-v1";

const PREREQ_LABELS: Record<string, string> = {
  "a1-conj-l00": "C1.1 Pronoms",
  "a1-conj-l01": "C1.2 Être / avoir",
  "a1-conj-l07": "C1.3 Verbes en -er",
  "a1-conj-l08": "C1.4 Mouvement",
  "a1-conj-l09": "C1.5 Pronominaux",
  "a1-conj-l15": "C1.6 Modaux",
  "a1-conj-l20": "C3.1 Futur proche",
  "a1-conj-l28": "C2.1 Passé récent",
  "a1-conj-l29": "C2.2 Passé composé (avoir)",
  "a1-conj-l30": "C2.3 Passé composé (être)",
  "a1-gr-l02": "Unité 36 La négation",
  "a1-gr-l03": "Unité 34 Le genre des noms et des adj",
  "a1-gr-l04": "Unité 21 Les articles définis et indé",
  "a1-gr-negation-ne-pas": "Unité 31 La négation ne… pas",
  "a1-gr-l10": "Unité 38 Les questions ouvertes",
  "a1-gr-l11": "Unité 39 Les prépositions de lieu",
  "a1-gr-l14": "Unité 40 Les adjectifs partitifs",
  "a1-gr-l18": "Unité 25 Les adjectifs démonstratifs",
  "a1-gr-l19": "Unité 26 Les adjectifs possessifs",
  "a1-gr-l23": "Unité 41 Les adjectifs qualificatifs",
  "a1-gr-pronominaux-passe-compose": "Unité 57 Les verbes pronominaux au pa",
  "a2-conj-l04": "C4.1 Conditionnel politesse",
  "a2-conj-l05": "C4.2 Impératif",
  "a2-conj-l07": "C2.5 Imparfait",
  "a2-conj-l08": "C3.2 Futur simple",
  "a2-gr-l07": "Unité 42 Les questions fermées",
  "a2-gr-l19": "Unité 50 Les pronoms relatifs qui et ",
  "a2-gr-l35": "Unité 51 Les pronoms COD et COI",
  "a2-gr-l36": "Unité 52 Les pronoms Y et EN",
  "a2-gr-l39": "Unité 46 Le comparatif",
  "a2-gr-l42": "Unité 49 La négation (2/2)",
  "a2-gr-l52": "Unité 54 Les relations logiques",
  "a2-gr-hypothese-futur": "Unité 62 L'hypothèse sur le futur",
  "a2-gr-subjonctif": "Unité 65 Le subjonctif",
  "gr-marqueurs-temps-complet": "Unité 53 Les marqueurs de temps",
  "v1-nationalites": "V1.1 Nationalités",
  "v1-professions": "V1.2 Professions",
  "v1-famille": "V1.3 Famille",
  "v1-etat-civil": "V1.4 État civil",
  "v1-description-morale": "V1.6 Description morale",
  "v2-jours-mois-dates": "V2.1 Jours / mois",
  "v2-heure": "V2.2 Heure",
  "v2-saisons": "V2.3 Saisons",
  "v2-meteo": "V2.4 Météo",
  "v3-sport": "V3.1 Sport",
  "v4-type-logement": "V4.1 Logement",
  "v4-pieces-maison": "V4.2 Pièces",
  "v4-equipements": "V4.3 Meubles",
  "v4-appareils-electromenagers": "V4.4 Électroménager",
  "v4-pannes": "V4.5 Pannes",
  "v5-matieres": "V5.1 Matières",
  "v5-materiel-scolaire": "V5.2 Matériel",
  "v5-structure-ecole": "V5.3 Structure école",
  "v6-vetements": "V6.1 Vêtements",
  "v6-accessoires": "V6.2 Accessoires",
  "v6-couleurs": "V6.3 Couleurs",
  "v6-matieres": "V6.4 Matières",
  "v7-restaurant": "V10.1 Restaurant",
  "v7-boulangerie": "V10.2 Boulangerie",
  "v7-recettes": "V7.4 Recettes",
  "v7-quantites": "V7.5 Quantités",
  "v8-corps": "V8.1 Corps",
  "v8-maladies": "V8.2 Maladies",
  "v8-medecins": "V8.3 Médecins",
  "v8-pharmacie": "V8.4 Pharmacie",
  "v9-ville": "V9.1 Ville",
  "v9-transport": "V9.2 Transport",
  "v9-direction": "V9.3 Direction",
  "v9-espace-culturel": "V9.4 Culture",
  "v9-paysage": "V9.5 Paysage",
  "v9-aeroport": "V10.4 Aéroport",
  "v9-hotel": "V10.5 Hôtel",
  "E1-1": "E1.1 Se présenter",
  "E1-2": "E1.2 Famille",
  "E1-3": "E1.3 Inviter",
  "E2-1": "E2.1 Logement",
  "E2-2": "E2.2 Panne",
  "E2-3": "E2.3 Règlement",
  "E3-1": "E3.1 École",
  "E3-2": "E3.2 Quotidien",
  "E3-3": "E3.3 Travail",
  "E4-1": "E4.1 Vêtements",
  "E4-2": "E4.2 Restaurant",
  "E4-3": "E4.3 Boulangerie",
  "E5-1": "E5.1 Médecin",
  "E5-2": "E5.2 Pharmacie",
  "E6-1": "E6.1 Chemin",
  "E6-2": "E6.2 Transport",
  "E6-3": "E6.3 Aéroport",
  "E7-1": "E7.1 Hôtel",
  "E7-2": "E7.2 Sport",
  "E7-3": "E7.3 Culture",
  "E8-1": "E8.1 Bilan A1",
  "E9-1": "E9.1 Achats",
  "E9-2": "E9.2 Déplacements",
  "E9-3": "E9.3 Logement",
  "E9-4": "E9.4 Démarches",
  "E9-5": "E9.5 Actualité",
  "E10-1": "E10.1 Inviter",
  "E10-2": "E10.2 Rencontres",
  "E10-3": "E10.3 Événement",
  "E10-4": "E10.4 Vie scolaire",
  "E10-5": "E10.5 Association",
  "E11-1": "E11.1 Cuisine",
  "E11-2": "E11.2 Activité",
  "E11-3": "E11.3 Goûts",
  "E11-4": "E11.4 Vacances",
  "E12-1": "E12.1 Santé",
  "E12-2": "E12.2 Sport",
  "E12-3": "E12.3 Alimentation",
  "E12-4": "E12.4 Ville",
  "E12-5": "E12.5 Soin de soi",
  "E13-1": "E13.1 Formation",
  "E13-2": "E13.2 Stage",
  "E13-3": "E13.3 Offre d'emploi",
  "E13-4": "E13.4 Entretien",
  "E13-5": "E13.5 Entreprise",
};

function moduleStateLabel(state: "completed" | "in_progress" | "development" | "locked") {
  if (state === "completed") return "TERMINÉ";
  if (state === "development") return "DÉVELOPPEMENT";
  if (state === "locked") return "VERROUILLÉ";
  return "EN COURS";
}

function ModuleStateBadge({ state }: { state: "completed" | "in_progress" | "development" | "locked" }) {
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

export function CommunicationModuleList({ isAdmin = false }: { isAdmin?: boolean }) {
  const router = useRouter();
  const { overrides } = useContentEditor();
  const commModules = resolveCommModules(COMM_MODULES, overrides);
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [frenchDone, setFrenchDone] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ E1: true });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(COMM_PROGRESS_KEY);
      if (raw) setCompleted(normalizeCommunicationProgress(JSON.parse(raw)));
    } catch { /* ignore */ }
    setFrenchDone(getCompletedFrenchLessons());
  }, []);

  function toggleExpanded(moduleId: string) {
    setExpanded((prev) => ({ ...prev, [moduleId]: !prev[moduleId] }));
  }

  function frenchPrereqsMet(slugs?: string[]): boolean {
    if (!slugs?.length) return true;
    return slugs.every((slug) => frenchDone.has(slug));
  }

  function commPrereqsMet(ids?: string[]): boolean {
    if (!ids?.length) return true;
    return ids.every((id) => completed[id]);
  }

  return (
    <ul className="space-y-4">
      {commModules.map((m) => {
        const isExpanded = !!expanded[m.id];
        const visibleSubs = m.submodules.filter((s) => s.available);
        const allUnavailable = visibleSubs.length === 0;
        const completedCount = visibleSubs.filter((s) => completed[s.id]).length;
        const allDone = completedCount === visibleSubs.length && visibleSubs.length > 0;
        const moduleState = allUnavailable ? "development" : allDone ? "completed" : "in_progress";

        return (
          <li key={m.id}>
            <div className={`overflow-hidden rounded-[var(--radius-lg)] border bg-[var(--color-bg-primary)] border-[var(--color-border-default)] ${allUnavailable ? "opacity-50" : ""}`}>
              <div
                className="module-list-header"
                style={{ "--module-header-accent": ACCENT } as React.CSSProperties}
              >
                <button
                  type="button"
                  onClick={allUnavailable ? undefined : () => toggleExpanded(m.id)}
                  disabled={allUnavailable}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/70 dark:bg-zinc-900/40">
                    <span className="text-sm font-bold" style={{ color: ACCENT }}>{m.level}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-[var(--color-text-primary)]">{m.title}</p>
                  </div>
                  <ModuleStateBadge state={moduleState} />
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

                {!allUnavailable && <ModuleProgressBar total={visibleSubs.length} completed={completedCount} />}
              </div>

              {isExpanded && (
                <ul className="divide-y divide-[var(--color-border-default)] border-t border-[var(--color-border-default)]">
                  {visibleSubs.map((sub) => {
                    const isDone = !!completed[sub.id];
                    const prereqOk =
                      isAdmin ||
                      (frenchPrereqsMet(sub.prerequisiteFrenchSlugs) &&
                        commPrereqsMet(sub.prerequisiteCommIds));
                    const isAvailable = (isAdmin || sub.available) && prereqOk;
                    const isLocked = !isAvailable && !isDone;
                    const missingPrereqs = [
                      ...(sub.prerequisiteCommIds ?? [])
                        .filter((id) => !completed[id])
                        .map((id) => PREREQ_LABELS[id] ?? id),
                      ...(sub.prerequisiteFrenchSlugs ?? [])
                        .filter((slug) => !frenchDone.has(slug))
                        .map((slug) => PREREQ_LABELS[slug] ?? slug),
                    ];
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
                          {isLocked && missingPrereqs.length > 0 ? (
                            <p className="mt-0.5 text-[10px] text-[var(--color-text-secondary)]">
                              Requis : {missingPrereqs.join(" · ")}
                            </p>
                          ) : null}
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
        <CommunicationModuleList isAdmin={isAdmin} />
      </section>

      <p className="text-center text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
        Progression stockée localement.
      </p>
    </div>
  );
}

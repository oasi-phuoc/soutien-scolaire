import Link from "next/link";
import {
  ALPHA_TO_A0_THRESHOLD,
  FRENCH_THEMES,
  frenchThemesBySection,
} from "@/lib/curriculum/french-data";
import type { FrenchSection } from "@/lib/curriculum/types";
import { PedagogicMarkerBadge } from "@/components/PedagogicMarkerBadge";

const SECTIONS: { id: FrenchSection | "INTRO"; title: string; blurb?: string }[] = [
  {
    id: "INTRO",
    title: "Contexte",
    blurb:
      "Français sur toute la ligne : pré-alphabétisation (ALPHA), puis A0 à B2, pour publics allophones, démarche PER et volet professionnel.",
  },
  { id: "ALPHA", title: "Section 0 — Pré-alphabétisation (ALPHA)" },
  { id: "A0", title: "Niveau A0 — Débutant lecteur" },
  { id: "A1", title: "Niveau A1 — Découverte" },
  { id: "A2", title: "Niveau A2 — Survie / élémentaire" },
  { id: "B1", title: "Niveau B1 — Seuil / autonomie" },
  { id: "B2", title: "Niveau B2 — Avancé" },
];

function CompetenceLegend() {
  const items = [
    { src: "/assets/icons/competences/icon-co.svg", label: "CO — Compréhension orale", code: "CO" },
    { src: "/assets/icons/competences/icon-ce.svg", label: "CE — Compréhension écrite", code: "CE" },
    { src: "/assets/icons/competences/icon-po.svg", label: "PO — Production orale", code: "PO" },
    { src: "/assets/icons/competences/icon-pe.svg", label: "PE — Production écrite", code: "PE" },
  ];
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-fr)]">
        Compétences
      </p>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it.code} className="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={it.src} alt="" width={24} height={24} className="shrink-0" />
            <span>{it.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FrancaisPage() {
  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-8 px-4 py-8 pb-32">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-fr)]">
          Français
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Pré-alpha → B2 (structure officielle)
        </h1>
        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
          Chaque thème est une porte d&apos;entrée vers les contenus CO / CE / PO / PE et les quiz notés
          (barème suisse). Les fiches détaillées arriveront module par module.
        </p>
      </header>

      <CompetenceLegend />

      <section aria-labelledby="marqueurs" className="space-y-2">
        <h2 id="marqueurs" className="text-sm font-semibold text-[var(--color-text-primary)]">
          Marqueurs pédagogiques
        </h2>
        <div className="flex flex-wrap gap-2">
          <PedagogicMarkerBadge marker="prerequisite" text="Prérequis à valider" />
          <PedagogicMarkerBadge marker="cross_ref" text="Renvoi vers un autre module" />
          <PedagogicMarkerBadge marker="quiz" text="Quiz chronométré et noté" />
        </div>
      </section>

      {SECTIONS.map((sec) => (
        <section key={sec.id} aria-labelledby={`sec-${sec.id}`} className="space-y-3">
          <h2 id={`sec-${sec.id}`} className="text-lg font-semibold text-[var(--color-text-primary)]">
            {sec.title}
          </h2>
          {sec.blurb ? (
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{sec.blurb}</p>
          ) : null}
          {sec.id !== "INTRO" ? (
            <ul className="space-y-2">
              {frenchThemesBySection(sec.id).map((th) => (
                <li key={th.id}>
                  <Link
                    href={`/francais/${th.slug}`}
                    className="flex min-h-12 items-center justify-between gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3 text-left transition-colors hover:border-[var(--color-accent-fr)]/50"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-[var(--color-text-primary)]">
                        {th.code} — {th.title}
                      </span>
                      <span className="block text-xs text-[var(--color-text-secondary)]">
                        {th.summary}
                      </span>
                    </span>
                    <span className="text-[var(--color-accent-fr)]" aria-hidden>
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      <AppCardFrenchThreshold />

      <p className="text-center text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
        Test de positionnement : voir{" "}
        <Link href="/placement" className="underline text-[var(--color-accent-fr)]">
          la page dédiée
        </Link>
        .
      </p>
    </main>
  );
}

function AppCardFrenchThreshold() {
  return (
    <div className="rounded-[var(--radius-lg)] border-2 border-[var(--color-marker-prereq-text)]/30 bg-[var(--color-marker-prereq-bg)]/40 p-4 dark:bg-[var(--color-marker-prereq-bg)]/20">
      <div className="flex flex-wrap items-center gap-2">
        {ALPHA_TO_A0_THRESHOLD.markers.map((m) => (
          <PedagogicMarkerBadge key={`alpha-${m}`} marker={m} />
        ))}
        <h3 className="w-full text-base font-semibold text-[var(--color-text-primary)]">
          {ALPHA_TO_A0_THRESHOLD.title}
        </h3>
      </div>
      <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-[var(--color-text-secondary)]">
        {ALPHA_TO_A0_THRESHOLD.criteria.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

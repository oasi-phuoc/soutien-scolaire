"use client";

import { useEffect, useId, useRef, useState } from "react";
import { FrenchTrainingElementsBlock } from "@/components/placement/FrenchTrainingElementsBlock";
import type { PlacementLevel } from "@/lib/placement/types";

const ACCENT = "var(--color-accent-quiz)";
const SECTION_HEADING = "text-sm font-bold text-[var(--color-text-primary)]";

const LEVEL_SHORT: Record<PlacementLevel, string> = {
  base: "A1",
  moyen: "A2",
  avance: "B1",
};

const SKILL_PARTS: Array<{
  code: "CE" | "CO" | "PE" | "PO";
  title: string;
  description: string;
}> = [
  {
    code: "CE",
    title: "compréhension écrite",
    description: "Lire et comprendre des textes (messages, consignes, articles) et répondre à des questions.",
  },
  {
    code: "CO",
    title: "compréhension orale",
    description: "Écouter des documents audio et repérer les informations essentielles.",
  },
  {
    code: "PE",
    title: "production écrite",
    description: "Rédiger des textes (formulaires, messages, lettres) adaptés à la situation.",
  },
  {
    code: "PO",
    title: "production orale",
    description: "S’exprimer à l’oral : répondre, décrire, raconter et dialoguer.",
  },
];

const FOUR_PARTS = (
  <div className="space-y-3">
    <p>Il est organisé en quatre parties :</p>
    <ul className="space-y-3">
      {SKILL_PARTS.map((part) => (
        <li key={part.code} className="flex items-start gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/assets/expression/images/comp/${part.code}.png`}
            alt=""
            className="mt-0.5 h-10 w-10 shrink-0 rounded-full bg-white object-contain"
            draggable={false}
          />
          <div className="min-w-0">
            <p className="font-semibold text-[var(--color-text-primary)]">
              <span className="uppercase tracking-wide" style={{ color: ACCENT }}>{part.code}</span>
              {" — "}
              {part.title}
            </p>
            <p className="mt-0.5 text-sm leading-relaxed">{part.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export function PlacementFrenchHelpContent({
  mode = "placement",
  level = "base",
  includeTrainingNote = false,
  individualSkill = false,
}: {
  mode?: "placement" | "training";
  level?: PlacementLevel;
  /** Affiche la mention entraînement par niveau (panneau d&apos;aide hub). */
  includeTrainingNote?: boolean;
  /** Entraînement d&apos;une seule compétence : pas de reprise. */
  individualSkill?: boolean;
}) {
  const levelLabel = LEVEL_SHORT[level];

  return (
    <div className="space-y-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
      {FOUR_PARTS}
      {mode === "placement" ? (
        <p>
          Le test progressif mélange des exercices des niveaux A1, A2 et B1. Il peut être interrompu après
          chaque étape et repris plus tard. Les points obtenus comptent directement pour le total de placement.
        </p>
      ) : (
        <>
          <p>
            {individualSkill ? (
              <>
                L&apos;entraînement individuel porte sur une seule compétence au niveau {levelLabel}.
                Si vous quittez pendant l&apos;évaluation, cette partie ne peut pas être reprise.
                Les résultats ne comptent pas pour le total de placement.
              </>
            ) : (
              <>
                L&apos;entraînement propose des exercices de niveau {levelLabel}. Il peut être interrompu
                après chaque étape et repris plus tard. Les résultats ne comptent pas pour le total de placement.
              </>
            )}
          </p>
          <FrenchTrainingElementsBlock
            level={level}
            className="border-t border-[var(--color-border-default)] pt-3"
          />
        </>
      )}
      {includeTrainingNote && mode === "placement" && (
        <p>
          L&apos;entraînement par niveau (A1, A2 ou B1) permet de s&apos;exercer sans impacter le score de placement.
        </p>
      )}
    </div>
  );
}

export function PlacementHelpContent() {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
      <div className="space-y-2">
        <h2 className={SECTION_HEADING}>Test de mathématiques</h2>
        <p>
          Le parcours va de CSC à CAP. Chaque niveau prépare une partie du test :
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>CSC</strong> — additions et soustractions</li>
          <li><strong>CFR</strong> — multiplications, divisions, périmètre et aire du rectangle</li>
          <li><strong>CAF</strong> — nombres décimaux, fractions, périmètre et aire</li>
          <li><strong>CAP</strong> — puissances et racines, nombres relatifs, fractions et équations, périmètre et aire</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className={SECTION_HEADING}>Test de français</h2>
        <PlacementFrenchHelpContent includeTrainingNote />
      </div>
    </div>
  );
}

export function PlacementHelpButton({
  className = "",
  accentColor = ACCENT,
}: {
  className?: string;
  accentColor?: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
          open ? "bg-amber-50 dark:bg-amber-950/30" : "hover:bg-[var(--color-bg-secondary)]"
        }`}
        style={{ color: open ? accentColor : "var(--color-text-secondary)" }}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Masquer l'aide" : "Afficher l'aide"}
        title={open ? "Masquer l'aide" : "Aide"}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M8.5 14.5A7 7 0 1 1 15.5 14.5C14.5 15.2 14 16 14 18h-4c0-2-.5-2.8-1.5-3.5Z" />
        </svg>
      </button>
      {open && (
        <div
          id={panelId}
          role="region"
          aria-label="Aide test de placement"
          className="absolute right-0 top-full z-20 mt-2 w-[min(20rem,calc(100vw-2rem))] rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4 shadow-lg"
        >
          <PlacementHelpContent />
        </div>
      )}
    </div>
  );
}

"use client";

import type { ReactNode } from "react";
import {
  MATH_TRAINING_LEVEL_LABELS,
  MATH_TRAINING_LEVEL_TOPICS,
  MATH_TRAINING_LEVEL_TOGGLE,
  mathTrainingMinutes,
  type MathTrainingLevel,
} from "@/lib/placement/math-training-levels";
import { PLACEMENT_LEVEL_LABELS, type PlacementLevel, type PlacementSkill } from "@/lib/placement/types";
import { PLACEMENT_FRENCH_PRINT_PARTS } from "@/lib/print/catalog";

const ACCENT = "var(--color-accent-quiz)";

function AnnounceShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-4 text-black">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
          {eyebrow}
        </p>
        <h2 className="mt-1 text-xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-1.5 text-sm leading-relaxed text-zinc-700">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: ACCENT }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function MathPlacementCompleteAnnounce({
  exerciseCount,
  maxPoints,
}: {
  exerciseCount: number;
  maxPoints: number;
}) {
  return (
    <AnnounceShell eyebrow="Mathématiques" title="Test de placement — Complet">
      <p className="text-sm leading-relaxed text-zinc-700">
        Ce test évalue le niveau en mathématiques, de CSC à CAP. Les exercices progressent
        du calcul simple aux notions du secondaire.
      </p>
      <BulletList
        items={[
          <><strong>{exerciseCount} exercices</strong> · score maximum <strong>{maxPoints} points</strong></>,
          <><strong>90 minutes</strong> pour compléter le test</>,
          <>Validez chaque exercice individuellement ; vous pouvez naviguer librement</>,
        ]}
      />
      <div className="rounded-lg border border-zinc-200 p-3">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
          Niveaux couverts
        </p>
        <ul className="space-y-2 text-sm text-zinc-700">
          {MATH_TRAINING_LEVEL_TOGGLE.map((level) => (
            <li key={level.id}>
              <strong>{level.id}</strong>
              {" — "}
              {MATH_TRAINING_LEVEL_TOPICS[level.id].join(" · ")}
            </li>
          ))}
        </ul>
      </div>
    </AnnounceShell>
  );
}

export function MathPlacementLevelAnnounce({
  level,
  exerciseCount,
  maxPoints,
}: {
  level: MathTrainingLevel;
  exerciseCount: number;
  maxPoints: number;
}) {
  const minutes = mathTrainingMinutes(level);
  return (
    <AnnounceShell eyebrow="Mathématiques · Entraînement" title={MATH_TRAINING_LEVEL_LABELS[level]}>
      <p className="text-sm leading-relaxed text-zinc-700">
        Feuille d&apos;entraînement pour le niveau <strong>{level}</strong>. Les résultats
        ne comptent pas pour le score de placement.
      </p>
      <BulletList
        items={[
          <><strong>{exerciseCount} exercices</strong> · <strong>{maxPoints} points</strong></>,
          <><strong>{minutes} minutes</strong> conseillées</>,
          <>Contenu : {MATH_TRAINING_LEVEL_TOPICS[level].join(" · ")}</>,
        ]}
      />
    </AnnounceShell>
  );
}

const SKILL_TITLES: Record<PlacementSkill, string> = {
  ce: "Compréhension écrite",
  co: "Compréhension orale",
  pe: "Production écrite",
  po: "Production orale",
};

const SKILL_TIMES: Record<PlacementSkill, string> = {
  ce: "45 minutes",
  co: "25 minutes",
  pe: "45 minutes",
  po: "15 minutes",
};

export function FrenchPlacementCompleteAnnounce() {
  return (
    <AnnounceShell eyebrow="Français" title="Test de placement — Complet (TCF progressif)">
      <p className="text-sm leading-relaxed text-zinc-700">
        Batterie progressive sur les quatre compétences. Les exercices mélangent les niveaux
        A1, A2 et B1. Score maximum : <strong>100 points</strong> (25 par compétence).
      </p>
      <ul className="space-y-2 text-sm text-zinc-700">
        {PLACEMENT_FRENCH_PRINT_PARTS.map((part) => (
          <li key={part.id} className="flex items-start gap-2">
            <span className="font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
              {part.code}
            </span>
            <span>{part.title}</span>
          </li>
        ))}
      </ul>
      <BulletList
        items={[
          <>Commencez chaque compétence après avoir lu la consigne</>,
          <>Les points obtenus comptent pour le total de placement</>,
        ]}
      />
    </AnnounceShell>
  );
}

export function FrenchPlacementSkillAnnounce({
  skill,
  level,
  exerciseCount,
  maxPoints = 25,
}: {
  skill: PlacementSkill;
  level: PlacementLevel;
  exerciseCount: number;
  maxPoints?: number;
}) {
  return (
    <AnnounceShell
      eyebrow={`Français · ${SKILL_TITLES[skill]}`}
      title={`${SKILL_TITLES[skill]} — ${PLACEMENT_LEVEL_LABELS[level]}`}
    >
      <p className="text-sm leading-relaxed text-zinc-700">
        Feuille d&apos;exercices pour la compétence <strong>{SKILL_TITLES[skill]}</strong>{" "}
        au niveau <strong>{PLACEMENT_LEVEL_LABELS[level]}</strong>.
      </p>
      <BulletList
        items={[
          <><strong>{exerciseCount} exercice{exerciseCount > 1 ? "s" : ""}</strong> · score maximum <strong>{maxPoints} points</strong></>,
          <><strong>{SKILL_TIMES[skill]}</strong> conseillées</>,
          <>Lisez attentivement chaque consigne avant de répondre</>,
        ]}
      />
    </AnnounceShell>
  );
}

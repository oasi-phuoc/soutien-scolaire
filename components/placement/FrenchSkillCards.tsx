"use client";

import type { PlacementFrenchDraft } from "@/lib/placement/types";

export const FRENCH_SKILLS = ["ce", "co", "pe", "po"] as const;
export type FrenchSkill = (typeof FRENCH_SKILLS)[number];

const SKILL_LABELS: Record<FrenchSkill, string> = {
  ce: "CE",
  co: "CO",
  pe: "PE",
  po: "PO",
};

function skillImage(skill: FrenchSkill) {
  return `/assets/expression/images/comp/${SKILL_LABELS[skill]}.png`;
}

type ProgressState = "pending" | "active" | "done";

function stepIndex(step: PlacementFrenchDraft["step"]) {
  if (step === "recap") return FRENCH_SKILLS.length;
  return FRENCH_SKILLS.indexOf(step as FrenchSkill);
}

function skillProgressState(draft: PlacementFrenchDraft, skill: FrenchSkill): ProgressState {
  const current = stepIndex(draft.step);
  const idx = FRENCH_SKILLS.indexOf(skill);

  if (current > idx) return "done";
  if (skill === "pe" && draft.peSent) return "done";
  if (skill === "po" && draft.poSent) return "done";
  if (draft.step === skill) return "active";
  return "pending";
}

function FrenchSkillCard({
  skill,
  label,
  progressState,
  selected = false,
  interactive = false,
  disabled = false,
  onClick,
}: {
  skill: FrenchSkill;
  label: string;
  progressState?: ProgressState;
  selected?: boolean;
  interactive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}) {
  const Tag = interactive && onClick ? "button" : "div";
  const isActive = progressState === "active" || selected;
  const isDone = progressState === "done";
  const isPending = progressState === "pending";

  return (
    <Tag
      type={interactive && onClick ? "button" : undefined}
      disabled={interactive && onClick ? disabled : undefined}
      onClick={interactive && onClick && !disabled ? onClick : undefined}
      className={`relative aspect-square w-full overflow-hidden rounded-full border bg-[var(--color-bg-primary)] p-0.5 transition-opacity ${
        interactive && onClick && !disabled ? "cursor-pointer hover:border-[var(--color-accent-quiz)]" : ""
      } ${disabled && interactive ? "cursor-not-allowed opacity-50" : ""} ${
        isActive
          ? "border-[var(--color-skill-pill-active)] ring-2 ring-[var(--color-skill-pill-active)]"
          : isDone
            ? "border-[var(--color-skill-pill-done)]"
            : "border-[var(--color-border-default)]"
      } ${isPending ? "opacity-75" : ""}`}
      aria-label={label}
      aria-pressed={interactive ? selected : undefined}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={skillImage(skill)}
          alt=""
          className="h-full w-full object-cover object-center"
          draggable={false}
        />
        {isDone && (
          <div
            className="pointer-events-none absolute inset-0 bg-[var(--color-skill-pill-done)]/20"
            aria-hidden
          />
        )}
      </div>
    </Tag>
  );
}

export function FrenchSkillCardsProgress({ draft }: { draft: PlacementFrenchDraft }) {
  return (
    <div className="mx-auto grid w-1/2 grid-cols-4 gap-1 sm:gap-1.5">
      {FRENCH_SKILLS.map((skill) => (
        <FrenchSkillCard
          key={skill}
          skill={skill}
          label={SKILL_LABELS[skill]}
          progressState={skillProgressState(draft, skill)}
        />
      ))}
    </div>
  );
}

export function FrenchSkillCardsSelect({
  selected,
  onChange,
  disabled = false,
  interactive = true,
}: {
  selected: FrenchSkill;
  onChange: (skill: FrenchSkill) => void;
  disabled?: boolean;
  interactive?: boolean;
}) {
  return (
    <div className="mx-auto grid w-1/2 grid-cols-4 gap-1 sm:gap-1.5" role={interactive ? "group" : undefined} aria-label={interactive ? "Compétence à entraîner" : undefined}>
      {FRENCH_SKILLS.map((skill) => (
        <FrenchSkillCard
          key={skill}
          skill={skill}
          label={SKILL_LABELS[skill]}
          selected={interactive && selected === skill}
          interactive={interactive}
          disabled={disabled}
          onClick={() => onChange(skill)}
        />
      ))}
    </div>
  );
}

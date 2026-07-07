"use client";

import { useId, useState } from "react";
import { FRENCH_TRAINING_ELEMENTS } from "@/lib/placement/french-training-elements";
import type { PlacementLevel } from "@/lib/placement/types";

const ACCENT = "var(--color-accent-quiz)";
const ACCENT_SOFT = "color-mix(in oklch, var(--color-accent-quiz) 12%, white)";
const ACCENT_BORDER = "color-mix(in oklch, var(--color-accent-quiz) 28%, white)";

const LEVEL_SHORT: Record<PlacementLevel, string> = {
  base: "A1",
  moyen: "A2",
  avance: "B1",
};

function ElementsList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-1.5">
      <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{title}</h4>
      <ul className="list-disc space-y-1 pl-5">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function FrenchTrainingElementsBlock({
  level,
  intro,
  className = "",
}: {
  level: PlacementLevel;
  intro?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const elements = FRENCH_TRAINING_ELEMENTS[level];
  const levelLabel = LEVEL_SHORT[level];

  return (
    <div className={className}>
      <div
        className="overflow-hidden rounded-[var(--radius-md)] border"
        style={{ borderColor: ACCENT_BORDER, background: ACCENT_SOFT }}
      >
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:brightness-[0.98]"
        >
          <span className="font-bold" style={{ color: ACCENT }}>
            Éléments à connaître
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
            className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
            style={{ color: ACCENT }}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {open && (
          <div
            id={panelId}
            className="space-y-3 border-t px-4 py-3 text-sm leading-relaxed text-[var(--color-text-primary)]"
            style={{ borderColor: ACCENT_BORDER }}
          >
            <p>
              {intro ?? (
                <>
                  Pour réussir cet entraînement {levelLabel}, vous devez maîtriser les points suivants
                  (grammaire, conjugaison et vocabulaire du niveau).
                </>
              )}
            </p>
            <ElementsList title="Grammaire" items={elements.grammaire} />
            <ElementsList title="Conjugaison" items={elements.conjugaison} />
            <ElementsList title="Vocabulaire" items={elements.vocabulaire} />
          </div>
        )}
      </div>
    </div>
  );
}

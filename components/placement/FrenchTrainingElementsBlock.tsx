import { FRENCH_TRAINING_ELEMENTS } from "@/lib/placement/french-training-elements";
import type { PlacementLevel } from "@/lib/placement/types";

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
  const elements = FRENCH_TRAINING_ELEMENTS[level];
  const levelLabel = LEVEL_SHORT[level];

  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="font-bold text-[var(--color-text-primary)]">Éléments à connaître</h3>
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
  );
}

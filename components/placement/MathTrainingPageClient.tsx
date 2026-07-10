"use client";

import { useSearchParams } from "next/navigation";
import { PlacementTestClient } from "@/components/math/PlacementTestClient";
import { levelFromMathParam } from "@/lib/placement/math-training-levels";
import { PlacementPageHeader } from "@/components/placement/PlacementPageHeader";

export function MathTrainingPageClient() {
  const params = useSearchParams();
  const level = levelFromMathParam(params.get("level"));

  if (!level) {
    return (
      <main className="app-shell flex-1 py-8 pb-32 lg:pb-28">
        <PlacementPageHeader label="Mathématiques" title="Niveau invalide" backHref="/placement" />
        <p className="text-sm text-[var(--color-text-secondary)]">
          Choisissez un niveau I, II, III ou IV depuis la page de placement.
        </p>
      </main>
    );
  }

  return <PlacementTestClient mode="placement" trainingLevel={level} />;
}

"use client";

import { useLayoutEffect, type ReactNode } from "react";
import {
  beginPlacementPrintSeed,
  endPlacementPrintSeed,
} from "@/components/math/placement/placement-print-rng";
import type { PlacementExerciseProps } from "@/components/math/placement/PlacementExercises1to15";

/**
 * Installe le RNG déterministe pendant le rendu des enfants,
 * pour que feuille et corrigé partagent la même série.
 */
export function PlacementPrintSeedRoot({
  seed,
  children,
}: {
  seed: number;
  children: ReactNode;
}) {
  beginPlacementPrintSeed(seed);
  useLayoutEffect(() => {
    beginPlacementPrintSeed(seed);
    return () => endPlacementPrintSeed();
  }, [seed]);
  return <>{children}</>;
}

export function PlacementMathPrintPreview({
  Comp,
  exerciseId,
  correction = false,
}: {
  Comp: React.ComponentType<PlacementExerciseProps>;
  exerciseId: number;
  correction?: boolean;
}) {
  const seed = 1_000_000 + exerciseId;
  return (
    <PlacementPrintSeedRoot seed={seed}>
      <Comp
        exerciseKey={seed}
        validated={correction}
        validateTrigger={0}
        onValidated={() => {}}
      />
    </PlacementPrintSeedRoot>
  );
}

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
  sessionSeed = 0,
}: {
  Comp: React.ComponentType<PlacementExerciseProps>;
  exerciseId: number;
  correction?: boolean;
  /** Seed de session (change à chaque ouverture d'impression). */
  sessionSeed?: number;
}) {
  const seed = sessionSeed * 1_000_003 + exerciseId * 97 + 1_000_000;
  return (
    <PlacementPrintSeedRoot seed={seed}>
      <Comp
        exerciseKey={seed}
        validated={correction}
        validateTrigger={0}
        onValidated={() => {}}
        forPrint
      />
    </PlacementPrintSeedRoot>
  );
}

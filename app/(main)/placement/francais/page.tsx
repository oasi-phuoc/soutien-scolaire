import { Suspense } from "react";
import { FrenchPlacementRunner } from "@/components/placement/FrenchPlacementRunner";
import { ChargementEnCoursPage } from "@/components/ui/ChargementEnCours";

export default function PlacementFrenchPage() {
  return (
    <Suspense fallback={<ChargementEnCoursPage title="Placement" />}>
      <FrenchPlacementRunner batteryKind="placement" />
    </Suspense>
  );
}

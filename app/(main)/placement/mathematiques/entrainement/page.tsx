import { Suspense } from "react";
import { MathTrainingPageClient } from "@/components/placement/MathTrainingPageClient";
import { ChargementEnCoursPage } from "@/components/ui/ChargementEnCours";

export default function PlacementMathTrainingPage() {
  return (
    <Suspense fallback={<ChargementEnCoursPage title="Placement" />}>
      <MathTrainingPageClient />
    </Suspense>
  );
}

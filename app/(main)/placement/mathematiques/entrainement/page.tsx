import { Suspense } from "react";
import { MathTrainingPageClient } from "@/components/placement/MathTrainingPageClient";

export default function PlacementMathTrainingPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-[var(--color-text-secondary)]">Chargement…</div>}>
      <MathTrainingPageClient />
    </Suspense>
  );
}

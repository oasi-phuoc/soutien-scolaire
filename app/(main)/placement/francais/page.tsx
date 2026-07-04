import { Suspense } from "react";
import { FrenchPlacementRunner } from "@/components/placement/FrenchPlacementRunner";

export default function PlacementFrenchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-[var(--color-text-secondary)]">Chargement…</div>}>
      <FrenchPlacementRunner />
    </Suspense>
  );
}

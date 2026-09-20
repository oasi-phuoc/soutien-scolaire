import { Suspense } from "react";
import { BrtaResultsClient } from "@/components/orientation/BrtaResultsClient";

export default function BrtaResultsPage() {
  return <Suspense fallback={<main className="app-shell flex-1 py-8">Chargement des résultats…</main>}><BrtaResultsClient /></Suspense>;
}

import { Suspense } from "react";
import { EcouteClient } from "@/components/print/EcouteClient";
import { ChargementEnCoursCard } from "@/components/ui/ChargementEnCours";

export const metadata = {
  title: "Écoute",
  robots: { index: false, follow: false },
};

/** Page publique minimale : lecture d'un seul audio CO (cible des QR d'impression). */
export default function EcoutePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 py-10">
      <div className="w-full max-w-md">
        <Suspense fallback={<ChargementEnCoursCard title="Écoute" />}>
          <EcouteClient />
        </Suspense>
      </div>
    </main>
  );
}

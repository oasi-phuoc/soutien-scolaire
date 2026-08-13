import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getNavAccess } from "@/lib/auth/nav-access";
import { ChargementEnCoursPage } from "@/components/ui/ChargementEnCours";

const FrancaisClient = dynamic(
  () => import("@/components/FrancaisClient").then((m) => m.FrancaisClient),
  {
    loading: () => <ChargementEnCoursPage title="Français" />,
  },
);

export default async function FrancaisPage() {
  const access = await getNavAccess();
  const isAdmin = access.role === "admin" || access.role === "prof";
  return (
    <Suspense fallback={<ChargementEnCoursPage title="Français" />}>
      <FrancaisClient
        isAdmin={isAdmin}
        freeAccess={access.canFreeAccess}
        canPartialFrenchGrammar={access.canPartialFrenchGrammar}
        canPartialFrenchComm={access.canPartialFrenchComm}
      />
    </Suspense>
  );
}

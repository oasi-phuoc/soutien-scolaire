import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getNavAccess } from "@/lib/auth/nav-access";
import { ChargementEnCoursPage } from "@/components/ui/ChargementEnCours";

const MathematiquesClient = dynamic(
  () =>
    import("@/components/math/MathematiquesClient").then((m) => m.MathematiquesClient),
  {
    loading: () => <ChargementEnCoursPage title="Mathématiques" />,
  },
);

export default async function MathematiquesPage() {
  const access = await getNavAccess();
  const isLoggedIn = access.authenticated;
  const isAdmin = access.role === "admin" || access.role === "prof";

  return (
    <Suspense fallback={<ChargementEnCoursPage title="Mathématiques" />}>
      <MathematiquesClient
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        freeAccess={access.canFreeAccess}
        canPartialMathA3={access.canPartialMathA3}
        canPartialMathA8={access.canPartialMathA8}
        canPartialMathG3={access.canPartialMathG3}
      />
    </Suspense>
  );
}

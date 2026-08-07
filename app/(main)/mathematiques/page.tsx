import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getNavAccess } from "@/lib/auth/nav-access";

const MathematiquesClient = dynamic(
  () =>
    import("@/components/math/MathematiquesClient").then((m) => m.MathematiquesClient),
  {
    loading: () => (
      <p className="px-4 py-16 text-center text-sm text-[var(--color-text-secondary)]">
        Chargement des mathématiques…
      </p>
    ),
  },
);

export default async function MathematiquesPage() {
  const access = await getNavAccess();
  const isLoggedIn = access.authenticated;
  const isAdmin = access.role === "admin" || access.role === "prof";

  return (
    <Suspense fallback={null}>
      <MathematiquesClient
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        freeAccess={access.canFreeAccess}
        canPartialMath={access.canPartialMath}
      />
    </Suspense>
  );
}

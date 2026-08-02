import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getNavAccess } from "@/lib/auth/nav-access";

const FrancaisClient = dynamic(
  () => import("@/components/FrancaisClient").then((m) => m.FrancaisClient),
  {
    loading: () => (
      <p className="px-4 py-16 text-center text-sm text-[var(--color-text-secondary)]">
        Chargement du français…
      </p>
    ),
  },
);

export default async function FrancaisPage() {
  const access = await getNavAccess();
  const isAdmin = access.role === "admin" || access.role === "prof";
  return (
    <Suspense>
      <FrancaisClient isAdmin={isAdmin} freeAccess={access.canFreeAccess} />
    </Suspense>
  );
}

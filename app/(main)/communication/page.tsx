import dynamic from "next/dynamic";
import { getNavAccess } from "@/lib/auth/nav-access";

const CommunicationHome = dynamic(
  () =>
    import("@/components/communication/CommunicationHome").then(
      (m) => m.CommunicationHome,
    ),
  {
    loading: () => (
      <p className="px-4 py-16 text-center text-sm text-[var(--color-text-secondary)]">
        Chargement de la communication…
      </p>
    ),
  },
);

export default async function CommunicationPage() {
  const access = await getNavAccess();
  const isAdmin = access.role === "admin" || access.role === "prof";
  return (
    <CommunicationHome
      isAdmin={isAdmin}
      freeAccess={access.canFreeAccess}
      canPartialFrenchComm={access.canPartialFrenchComm}
    />
  );
}

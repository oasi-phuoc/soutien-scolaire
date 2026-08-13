import dynamic from "next/dynamic";
import { getNavAccess } from "@/lib/auth/nav-access";
import { ChargementEnCoursPage } from "@/components/ui/ChargementEnCours";

const CommunicationHome = dynamic(
  () =>
    import("@/components/communication/CommunicationHome").then(
      (m) => m.CommunicationHome,
    ),
  {
    loading: () => <ChargementEnCoursPage title="Communication" />,
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

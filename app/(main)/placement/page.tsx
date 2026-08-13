import dynamic from "next/dynamic";
import { ChargementEnCoursPage } from "@/components/ui/ChargementEnCours";

const PlacementHubClient = dynamic(
  () =>
    import("@/components/placement/PlacementHubClient").then(
      (m) => m.PlacementHubClient,
    ),
  {
    loading: () => <ChargementEnCoursPage title="Placement" />,
  },
);

export default function PlacementPage() {
  return <PlacementHubClient />;
}

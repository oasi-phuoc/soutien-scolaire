import { redirect } from "next/navigation";

export default function LegacyPlacementStatsRedirect() {
  redirect("/placement/statistiques");
}

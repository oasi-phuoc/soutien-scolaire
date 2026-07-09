import { redirect } from "next/navigation";
import { canAccessPlacementModule } from "@/lib/platform/placement-module-access";

export default async function PlacementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allowed = await canAccessPlacementModule();
  if (!allowed) {
    redirect("/?msg=Le module TCF / TCM n'est pas disponible pour le moment.");
  }
  return children;
}

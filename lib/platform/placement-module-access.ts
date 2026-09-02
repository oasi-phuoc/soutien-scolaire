import { getNavAccess } from "@/lib/auth/nav-access";

/** Students may open /placement only when this returns true. Staff always allowed. */
export async function canAccessPlacementModule(): Promise<boolean> {
  const access = await getNavAccess();
  return access.placementVisible;
}

import type { PlacementProfile } from "./types";
import {
  PLACEMENT_FRENCH_SESSIONS_KEY,
  PLACEMENT_MATH_HISTORY_KEY,
  PLACEMENT_PROFILE_KEY,
  writePlacementJson,
  recomputePlacementProfile,
} from "./storage";
import { loadPlacementFromCloudAction } from "@/app/actions/placement";

export async function syncPlacementFromCloud(): Promise<PlacementProfile> {
  const cloud = await loadPlacementFromCloudAction();
  if (cloud.ok && cloud.data) {
    if (cloud.data.mathHistory.length > 0) {
      writePlacementJson(PLACEMENT_MATH_HISTORY_KEY, cloud.data.mathHistory);
    }
    if (cloud.data.frenchSessions.length > 0) {
      writePlacementJson(PLACEMENT_FRENCH_SESSIONS_KEY, cloud.data.frenchSessions);
    }
    if (cloud.data.profile) {
      writePlacementJson(PLACEMENT_PROFILE_KEY, cloud.data.profile);
      return cloud.data.profile;
    }
  }
  return recomputePlacementProfile();
}

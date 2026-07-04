import type { PlacementSkillResult } from "./types";

export type PlacementRunnerProps = {
  mode?: "module" | "placement";
  placementSessionId?: string;
  placementSeed?: number;
  onPlacementComplete?: (result: PlacementSkillResult) => void;
};

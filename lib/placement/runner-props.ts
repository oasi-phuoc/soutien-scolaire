import type { PlacementSkillResult } from "./types";

export type PlacementRunnerProps = {
  mode?: "module" | "placement";
  placementBatteryKind?: "placement" | "training";
  placementProgressive?: boolean;
  placementPeHybrid?: boolean;
  placementSessionId?: string;
  placementSeed?: number;
  onPlacementComplete?: (result: PlacementSkillResult) => void;
};

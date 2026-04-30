/**
 * Barème suisse 1–6 et points — référence document structure v2.
 */

export function percentToSwissGrade(percent: number): number {
  if (percent < 40) return 2.0;
  if (percent < 50) return 3.0;
  if (percent < 60) return 3.5;
  if (percent < 70) return 4.0;
  if (percent < 80) return 4.5;
  if (percent < 90) return 5.0;
  if (percent < 96) return 5.5;
  return 6.0;
}

export function medalFromPercent(percent: number): "bronze" | "silver" | "gold" {
  if (percent >= 95) return "gold";
  if (percent >= 80) return "silver";
  if (percent >= 60) return "bronze";
  return "bronze";
}

/** Points de base par bonne réponse selon niveau (extrait doc). */
export function basePointsForDifficultyBand(
  band: "low" | "mid" | "high" | "expert",
): number {
  switch (band) {
    case "low":
      return 10;
    case "mid":
      return 15;
    case "high":
      return 20;
    case "expert":
      return 25;
  }
}

export const PASSING_GRADE = 4.0;
export const MAX_EVAL_ATTEMPTS = 3;

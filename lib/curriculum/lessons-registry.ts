import type { MathSubmoduleLesson } from "./content/math-a1-types";
import { MATH_A1_LESSONS } from "./content/math-a1";
import { MATH_A2_LESSONS } from "./content/math-a2";
import { MATH_A3_LESSONS } from "./content/math-a3";
import { MATH_A4_LESSONS } from "./content/math-a4";
import { MATH_A5_LESSONS } from "./content/math-a5";
import { MATH_A6_LESSONS } from "./content/math-a6";
import { MATH_A7_LESSONS } from "./content/math-a7";
import { MATH_A8_LESSONS } from "./content/math-a8";
import { MATH_A9_LESSONS } from "./content/math-a9";
import { MATH_A10_LESSONS } from "./content/math-a10";
import { MATH_A11_LESSONS } from "./content/math-a11";
import { MATH_A12_LESSONS } from "./content/math-a12";
import { MATH_A13_LESSONS } from "./content/math-a13";
import { MATH_G1_LESSONS } from "./content/math-g1";
import { MATH_G2_LESSONS } from "./content/math-g2";
import { MATH_G3_LESSONS } from "./content/math-g3";
import { MATH_G4_LESSONS } from "./content/math-g4";
import { MATH_G5_LESSONS } from "./content/math-g5";
import { MATH_G6_LESSONS } from "./content/math-g6";
import { MATH_G7_LESSONS } from "./content/math-g7";
import { MATH_G8_LESSONS } from "./content/math-g8";
import { MATH_G9_LESSONS } from "./content/math-g9";
import { MATH_G10_LESSONS } from "./content/math-g10";
import { MATH_S1_LESSONS } from "./content/math-s1";
import { MATH_S2_LESSONS } from "./content/math-s2";

const REGISTRY: Record<string, MathSubmoduleLesson[]> = {
  A1: MATH_A1_LESSONS,
  A2: MATH_A2_LESSONS,
  A3: MATH_A3_LESSONS,
  A4: MATH_A4_LESSONS,
  A5: MATH_A5_LESSONS,
  A6: MATH_A6_LESSONS,
  A7: MATH_A7_LESSONS,
  A8: MATH_A8_LESSONS,
  A9: MATH_A9_LESSONS,
  A10: MATH_A10_LESSONS,
  A11: MATH_A11_LESSONS,
  A12: MATH_A12_LESSONS,
  A13: MATH_A13_LESSONS,
  G1: MATH_G1_LESSONS,
  G2: MATH_G2_LESSONS,
  G3: MATH_G3_LESSONS,
  G4: MATH_G4_LESSONS,
  G5: MATH_G5_LESSONS,
  G6: MATH_G6_LESSONS,
  G7: MATH_G7_LESSONS,
  G8: MATH_G8_LESSONS,
  G9: MATH_G9_LESSONS,
  G10: MATH_G10_LESSONS,
  S1: MATH_S1_LESSONS,
  S2: MATH_S2_LESSONS,
};

export function getLessonsForModule(moduleId: string): MathSubmoduleLesson[] | undefined {
  return REGISTRY[moduleId];
}

export function getLessonBySubmoduleId(submoduleId: string): MathSubmoduleLesson | undefined {
  for (const lessons of Object.values(REGISTRY)) {
    const found = lessons.find((l) => l.submoduleId === submoduleId);
    if (found) return found;
  }
  return undefined;
}

export function getModuleIdForSubmodule(submoduleId: string): string | undefined {
  for (const [moduleId, lessons] of Object.entries(REGISTRY)) {
    if (lessons.some((l) => l.submoduleId === submoduleId)) return moduleId;
  }
  return undefined;
}

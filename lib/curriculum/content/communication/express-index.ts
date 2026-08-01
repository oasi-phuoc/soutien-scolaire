import type { CommunicationLesson } from "./express-types";
import { EXPRESS_E1_1 } from "./express-e1";
import { EXPRESS_E1_2 } from "./express-e1-family";
import { EXPRESS_E1_3 } from "./express-e1-3";
import { EXPRESS_E2_1 } from "./express-e2-1";
import { EXPRESS_E2_2 } from "./express-e2-2";
import { EXPRESS_E2_3 } from "./express-e2-3";
import { EXPRESS_E3_1 } from "./express-e3-1";
import { EXPRESS_E3_2 } from "./express-e3-2";
import { EXPRESS_E3_3 } from "./express-e3-3";
import { EXPRESS_E4_1 } from "./express-e4-1";
import { EXPRESS_E4_2 } from "./express-e4-2";
import { EXPRESS_E4_3 } from "./express-e4-3";
import { EXPRESS_E5_1 } from "./express-e5-1";
import { EXPRESS_E5_2 } from "./express-e5-2";
import { EXPRESS_E6_1 } from "./express-e6-1";
import { EXPRESS_E6_2 } from "./express-e6-2";
import { EXPRESS_E6_3 } from "./express-e6-3";
import { EXPRESS_E7_1 } from "./express-e7-1";
import { EXPRESS_E7_2 } from "./express-e7-2";
import { EXPRESS_E7_3 } from "./express-e7-3";
import { EXPRESS_E8_1 } from "./express-e8-1";
import { EXPRESS_E9_LESSONS } from "./express-e9";
import { EXPRESS_E10_LESSONS } from "./express-e10";
import { EXPRESS_E11_LESSONS } from "./express-e11";
import { EXPRESS_E12_LESSONS } from "./express-e12";
import { EXPRESS_E13_LESSONS } from "./express-e13";
import { EXPRESS_E14_LESSONS } from "./express-e14";

/** Toutes les leçons Expression orale A1 (E1–E8) + A2 (E9–E14). */
export const EXPRESS_ORAL_LESSONS: CommunicationLesson[] = [
  EXPRESS_E1_1,
  EXPRESS_E1_2,
  EXPRESS_E1_3,
  EXPRESS_E2_1,
  EXPRESS_E2_2,
  EXPRESS_E2_3,
  EXPRESS_E3_1,
  EXPRESS_E3_2,
  EXPRESS_E3_3,
  EXPRESS_E4_1,
  EXPRESS_E4_2,
  EXPRESS_E4_3,
  EXPRESS_E5_1,
  EXPRESS_E5_2,
  EXPRESS_E6_1,
  EXPRESS_E6_2,
  EXPRESS_E6_3,
  EXPRESS_E7_1,
  EXPRESS_E7_2,
  EXPRESS_E7_3,
  EXPRESS_E8_1,
  ...EXPRESS_E9_LESSONS,
  ...EXPRESS_E10_LESSONS,
  ...EXPRESS_E11_LESSONS,
  ...EXPRESS_E12_LESSONS,
  ...EXPRESS_E13_LESSONS,
  ...EXPRESS_E14_LESSONS,
];

export const EXPRESS_ORAL_BY_ID: Record<string, CommunicationLesson> = Object.fromEntries(
  EXPRESS_ORAL_LESSONS.map((lesson) => [lesson.id, lesson]),
);

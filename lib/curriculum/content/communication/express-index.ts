import type { CommunicationLesson } from "./express-types";
import { EXPRESS_E1_1, EXPRESS_E1_2, EXPRESS_E1_3, EXPRESS_E1_4, EXPRESS_E1_5 } from "./express-e1";
import { EXPRESS_E2_1, EXPRESS_E2_2, EXPRESS_E2_3, EXPRESS_E2_4, EXPRESS_E2_5 } from "./express-e2";
import { EXPRESS_E3_1, EXPRESS_E3_2, EXPRESS_E3_3, EXPRESS_E3_4 } from "./express-e3";

/** Toutes les leçons Expression orale E1–E3 (hors Conversation IA). */
export const EXPRESS_ORAL_LESSONS: CommunicationLesson[] = [
  EXPRESS_E1_1,
  EXPRESS_E1_2,
  EXPRESS_E1_3,
  EXPRESS_E1_4,
  EXPRESS_E1_5,
  EXPRESS_E2_1,
  EXPRESS_E2_2,
  EXPRESS_E2_3,
  EXPRESS_E2_4,
  EXPRESS_E2_5,
  EXPRESS_E3_1,
  EXPRESS_E3_2,
  EXPRESS_E3_3,
  EXPRESS_E3_4,
];

export const EXPRESS_ORAL_BY_ID: Record<string, CommunicationLesson> = Object.fromEntries(
  EXPRESS_ORAL_LESSONS.map((lesson) => [lesson.id, lesson]),
);

import type { StoredProgressV1 } from "@/lib/curriculum/types";
import { FRENCH_THEMES } from "@/lib/curriculum/french-data";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { PASSING_GRADE } from "@/lib/scoring";
import { lessonKey } from "@/lib/curriculum/lesson-routes";

export type LessonCompletionProof = {
  complete: boolean;
  score?: number;
  max?: number;
  grade?: number;
  source: "submodule" | "french_lesson" | "lecture" | "comm" | "unknown";
};

const FRENCH_BY_CODE = new Map(FRENCH_THEMES.map((t) => [t.code, t]));

function mathSubmoduleId(moduleId: string, lessonCode: string): string | null {
  const lessons = getLessonsForModule(moduleId.toUpperCase());
  if (!lessons) return null;
  return lessons.find((l) => l.submoduleCode === lessonCode)?.submoduleId ?? null;
}

/** Check whether a linked lesson is completed in stored progress. */
export function checkLessonCompletion(
  progress: StoredProgressV1,
  subject: string | null | undefined,
  moduleId: string | null | undefined,
  lessonId: string | null | undefined,
  minGrade = PASSING_GRADE,
): LessonCompletionProof {
  if (!subject || !lessonId) return { complete: false, source: "unknown" };

  const subj = subject.toLowerCase();
  const mod = (moduleId ?? "").trim();
  const lesson = lessonId.trim();

  if (subj === "maths" && mod) {
    const submoduleId = mathSubmoduleId(mod, lesson);
    if (!submoduleId) return { complete: false, source: "submodule" };
    const state = progress.submoduleStates?.[submoduleId];
    const sc = progress.submoduleScores?.[submoduleId];
    const grade = sc?.grade;
    const complete = state === "completed" || (grade != null && grade >= minGrade);
    return {
      complete,
      score: sc?.score,
      max: sc?.max,
      grade,
      source: "submodule",
    };
  }

  if (subj === "francais" || subj === "français") {
    const theme = FRENCH_BY_CODE.get(lesson);
    if (!theme) return { complete: false, source: "french_lesson" };
    const done = progress.frenchLessons?.[theme.slug] === "completed";
    return { complete: done, source: "french_lesson" };
  }

  if (subj === "lecture") {
    const letter = lesson.toLowerCase();
    const subKey = Object.keys(progress.lectureProgress?.submodules ?? {}).find((k) =>
      k.toLowerCase().includes(letter),
    );
    const done = subKey
      ? progress.lectureProgress?.submodules?.[subKey] === "completed"
      : false;
    const evalEntry = progress.lectureProgress?.evaluations?.[lesson];
    if (evalEntry?.passed) {
      return {
        complete: true,
        score: evalEntry.total,
        max: evalEntry.total,
        grade: evalEntry.grade,
        source: "lecture",
      };
    }
    return { complete: done, source: "lecture" };
  }

  if (subj === "communication") {
    const done = Object.values(progress.commProgress ?? {}).some(Boolean);
    return { complete: done, source: "comm" };
  }

  return { complete: false, source: "unknown" };
}

export function buildProofData(
  subject: string,
  moduleId: string,
  lessonId: string,
  proof: LessonCompletionProof,
): Record<string, unknown> {
  return {
    lessonKey: lessonKey(subject, moduleId, lessonId),
    ...proof,
    at: new Date().toISOString(),
  };
}

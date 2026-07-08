import { describe, expect, it } from "vitest";
import { checkLessonCompletion } from "@/lib/tasks/task-proof";
import type { StoredProgressV1 } from "@/lib/curriculum/types";

const baseProgress = (): StoredProgressV1 => ({
  version: 2,
  math: {},
  lastActivityAt: new Date().toISOString(),
  lastQuizGrades: {},
  frenchLevel: "A1",
});

describe("task-proof", () => {
  it("detects completed math submodule", () => {
    const p = {
      ...baseProgress(),
      submoduleStates: { "A1-1": "completed" as const },
      submoduleScores: { "A1-1": { score: 8, max: 10, grade: 5 } },
    };
    const proof = checkLessonCompletion(p, "maths", "A1", "A1.1");
    expect(proof.complete).toBe(true);
    expect(proof.grade).toBe(5);
  });

  it("detects incomplete math submodule", () => {
    const p = baseProgress();
    const proof = checkLessonCompletion(p, "maths", "A1", "A1.1");
    expect(proof.complete).toBe(false);
  });

  it("detects completed french lesson by slug", () => {
    const p = {
      ...baseProgress(),
      frenchLessons: { "v1-etat-civil": "completed" as const },
    };
    const proof = checkLessonCompletion(p, "francais", "V1", "V1.4");
    expect(proof.complete).toBe(true);
  });
});

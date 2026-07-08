import { describe, expect, it } from "vitest";
import { resolveLessonHref, subjectFromMatiere, lessonKey } from "@/lib/curriculum/lesson-routes";

describe("lesson-routes", () => {
  it("maps maths lesson to submodule route", () => {
    expect(resolveLessonHref("maths", "A1", "A1.1")).toBe("/mathematiques/A1-1");
  });

  it("maps french vocab lesson to slug route", () => {
    const href = resolveLessonHref("francais", "V1", "V1.4");
    expect(href).toBe("/francais/vocabulaire/v1-etat-civil");
  });

  it("maps lecture letter", () => {
    expect(resolveLessonHref("lecture", "l2", "C")).toBe("/lecture/l2/c");
  });

  it("subjectFromMatiere normalizes labels", () => {
    expect(subjectFromMatiere("Maths")).toBe("maths");
    expect(subjectFromMatiere("Français")).toBe("francais");
  });

  it("lessonKey is stable", () => {
    expect(lessonKey("maths", "A1", "A1.1")).toBe("maths:A1:A1.1");
  });
});

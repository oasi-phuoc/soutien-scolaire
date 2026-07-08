import { describe, expect, it } from "vitest";
import { linearSwissGrade } from "@/lib/scoring";
import { isEvalScoreComplete } from "@/components/ui/EvalResultsUI";

describe("scoring", () => {
  it("linearSwissGrade maps full score to 6", () => {
    expect(linearSwissGrade(10, 10)).toBe(6);
  });

  it("linearSwissGrade maps zero to 1", () => {
    expect(linearSwissGrade(0, 10)).toBe(1);
  });
});

describe("EvalResultsUI score complete", () => {
  it("marks full scores as complete", () => {
    expect(isEvalScoreComplete(5, 5)).toBe(true);
    expect(isEvalScoreComplete(4, 5)).toBe(false);
  });
});

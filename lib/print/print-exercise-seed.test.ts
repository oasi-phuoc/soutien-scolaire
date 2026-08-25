import { describe, expect, it } from "vitest";
import {
  currentPrintExerciseSeed,
  printExerciseNoncesKey,
  printExerciseSeed,
  runWithPrintBundleSeed,
} from "@/components/math/placement/placement-print-rng";

describe("printExerciseSeed", () => {
  it("est stable pour la même base, id et nonce", () => {
    expect(printExerciseSeed(42, "ex2", 0)).toBe(printExerciseSeed(42, "ex2", 0));
  });

  it("change quand le nonce change", () => {
    const a = printExerciseSeed(42, "ex2", 0);
    const b = printExerciseSeed(42, "ex2", 1);
    expect(a).not.toBe(b);
  });

  it("change selon l'id d'exercice", () => {
    const a = printExerciseSeed(42, "ex2", 0);
    const b = printExerciseSeed(42, "ex2", 0);
    expect(printExerciseSeed(42, "ex3", 0)).not.toBe(a);
    expect(b).toBe(a);
  });
});

describe("runWithPrintBundleSeed", () => {
  it("applique le nonce uniquement à l'exercice ciblé", () => {
    const base = 99_001;
    const without = runWithPrintBundleSeed(base, {}, () => ({
      a: currentPrintExerciseSeed("ex-a"),
      b: currentPrintExerciseSeed("ex-b"),
    }));
    const withNonce = runWithPrintBundleSeed(base, { "ex-a": 1 }, () => ({
      a: currentPrintExerciseSeed("ex-a"),
      b: currentPrintExerciseSeed("ex-b"),
    }));
    expect(withNonce.a).not.toBe(without.a);
    expect(withNonce.b).toBe(without.b);
  });
});

describe("printExerciseNoncesKey", () => {
  it("ignore les nonces à 0 et trie les ids", () => {
    expect(printExerciseNoncesKey({ z: 2, a: 0, m: 1 })).toBe("m:1,z:2");
  });
});

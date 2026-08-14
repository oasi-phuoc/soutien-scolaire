import { describe, expect, it } from "vitest";
import { matchComplexSyllablePool, matchSyllablePool } from "./lecture-print-icons";
import { SIMPLE_SYLLABLE_LESSONS, COMPLEX_SOUND_LESSONS } from "./lecture-data";
import { ALL_TOOL_WORDS, monosyllablePool, multisyllablePool, wordsForComplexGrapheme } from "./word-pool";

describe("matchSyllablePool L5", () => {
  it("fournit au moins 5 syllabes par voyelle L5", () => {
    for (const lesson of SIMPLE_SYLLABLE_LESSONS) {
      const fromGrids = [...new Set(lesson.grids.flatMap((g) => g.items.map((s) => s.toLowerCase())))];
      expect(fromGrids.length).toBeGreaterThanOrEqual(5);
      expect(matchSyllablePool(lesson.letterLower, "vowel").length).toBeGreaterThanOrEqual(5);
    }
  });
});

describe("matchComplexSyllablePool L7", () => {
  it("fournit au moins 5 syllabes pour chaque graphème", () => {
    for (const lesson of COMPLEX_SOUND_LESSONS) {
      const pool = matchComplexSyllablePool(lesson.letter);
      expect(pool.length, lesson.letter).toBeGreaterThanOrEqual(5);
    }
  });

  it("utilise cha/che pour CH et bou/dou pour OU", () => {
    expect(matchComplexSyllablePool("CH")).toEqual(expect.arrayContaining(["cha", "che", "chi"]));
    expect(matchComplexSyllablePool("OU")).toEqual(expect.arrayContaining(["bou", "dou"]));
  });
});

describe("match word pools L6 L7 L8", () => {
  it("a assez de mots-outils et mots courants", () => {
    expect(ALL_TOOL_WORDS.length).toBeGreaterThanOrEqual(5);
    expect(monosyllablePool().length).toBeGreaterThanOrEqual(5);
  });

  it("a assez de mots multi-syllabes", () => {
    expect(multisyllablePool(2, null).length).toBeGreaterThanOrEqual(5);
  });

  it("a assez de mots par graphème L7", () => {
    for (const lesson of COMPLEX_SOUND_LESSONS) {
      expect(wordsForComplexGrapheme(lesson.letter).length, lesson.letter).toBeGreaterThanOrEqual(5);
    }
  });
});

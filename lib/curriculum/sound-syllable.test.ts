import { describe, expect, it } from "vitest";
import { phonemesFromFrenchGraphemes, randomSoundSyllableItems, syllablesOf } from "./word-pool";
import { splitWordSyllables } from "./syllabify";

describe("splitWordSyllables", () => {
  it("keeps known bisyllables", () => {
    expect(splitWordSyllables("ami")).toEqual(["a", "mi"]);
  });

  it("splits common 3-syllable words", () => {
    expect(syllablesOf("banane")).toEqual(["ba", "na", "ne"]);
    expect(syllablesOf("tomate")).toEqual(["to", "ma", "te"]);
    expect(syllablesOf("chocolat")).toEqual(["cho", "co", "lat"]);
  });
});

describe("randomSoundSyllableItems", () => {
  it("marks /a/ on the syllables of banane", () => {
    expect(phonemesFromFrenchGraphemes("ba").has("/a/")).toBe(true);
    expect(phonemesFromFrenchGraphemes("na").has("/a/")).toBe(true);
    expect(phonemesFromFrenchGraphemes("ne").has("/a/")).toBe(false);
  });

  it("does not treat the nasal of maman as /a/", () => {
    expect(syllablesOf("maman")).toEqual(["ma", "man"]);
    expect(phonemesFromFrenchGraphemes("ma").has("/a/")).toBe(true);
    expect(phonemesFromFrenchGraphemes("man").has("/a/")).toBe(false);
  });

  it("returns enough 2–4 syllable items for /a/", () => {
    const audio = randomSoundSyllableItems(["/a/"], 12, false);
    const images = randomSoundSyllableItems(["/a/"], 12, true);
    expect(audio.length).toBe(12);
    expect(images.length).toBe(12);
    for (const item of [...audio, ...images]) {
      expect(item.targets.length).toBeGreaterThanOrEqual(2);
      expect(item.targets.length).toBeLessThanOrEqual(4);
      expect(item.targets.some(Boolean)).toBe(true);
    }
  });

  it("returns items for a revision pair /a/ + /o/", () => {
    const items = randomSoundSyllableItems(["/a/", "/o/"], 12, false);
    expect(items.length).toBe(12);
  });
});

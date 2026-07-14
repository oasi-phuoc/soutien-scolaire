import { speak } from "@/lib/utils/speech";

import { LECTURE_IMAGE_INDEX } from "@/lib/curriculum/content/communication/word-image-index";

export function getWordAssetSlug(word: string): string {
  return word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u0153/g, "oe")
    .replace(/\u0152/g, "oe")
    .replace(/\u00e6/g, "ae")
    .replace(/\u00c6/g, "ae")
    .toLowerCase();
}

export function getLectureWordImagePath(word: string): string {
  return `/assets/words/lecture/${getWordAssetSlug(word)}.webp`;
}

export function hasLectureWordImage(word: string): boolean {
  return !!LECTURE_IMAGE_INDEX[getWordAssetSlug(word)];
}

type Voice = "f" | "m";

function selectedVoice(): Voice {
  if (typeof window === "undefined") return "f";
  return localStorage.getItem("soutien-genre") === "m" ? "m" : "f";
}

/**
 * Ordered list of audio URLs to try for a recording.
 * Lecture words always prefer the feminine recording first.
 * Other sounds use the selected voice first, with a fallback.
 */
function audioCandidates(kind: "mots" | "syllable", text: string): string[] {
  const slug = getWordAssetSlug(text);
  const fem = `/assets/words/son_f/${kind}/${slug}.mp3`;
  const masc = `/assets/words/son_m/${kind}/${slug}.mp3`;
  if (kind === "mots" && hasLectureWordImage(text)) {
    return [fem, masc];
  }
  return selectedVoice() === "m" ? [masc, fem] : [fem, masc];
}

/**
 * Feminine word recording path. Kept for callers that only need a single URL
 * (e.g. building <audio> elements); prefer `playWord` for the full fallback.
 */
export function getWordAudioPath(word: string): string {
  return `/assets/words/son_f/mots/${getWordAssetSlug(word)}.mp3`;
}

async function playWithFallback(candidates: string[], fallbackText: string): Promise<void> {
  for (const url of candidates) {
    try {
      await new Audio(url).play();
      return;
    } catch {
      // File missing / not playable — try the next candidate.
    }
  }
  speak(fallbackText);
}

/** Play a word recording (masculine → feminine → TTS). */
export function playWord(word: string): void {
  void playWithFallback(audioCandidates("mots", word), word);
}

/** Play a syllable recording (masculine → feminine → TTS). */
export function playSyllable(syllable: string): void {
  void playWithFallback(audioCandidates("syllable", syllable), syllable);
}

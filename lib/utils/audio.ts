import { speak } from "@/lib/utils/speech";

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

type Voice = "f" | "m";

function selectedVoice(): Voice {
  if (typeof window === "undefined") return "f";
  return localStorage.getItem("soutien-genre") === "m" ? "m" : "f";
}

/**
 * Ordered list of audio URLs to try for a recording. The chosen voice comes
 * first; the masculine voice falls back to the feminine one, and the caller
 * falls back to TTS when none of the files exist.
 */
function audioCandidates(kind: "mots" | "syllable", text: string): string[] {
  const slug = getWordAssetSlug(text);
  const fem = `/assets/words/son_f/${kind}/${slug}.mp3`;
  const masc = `/assets/words/son_m/${kind}/${slug}.mp3`;
  return selectedVoice() === "m" ? [masc, fem] : [fem];
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

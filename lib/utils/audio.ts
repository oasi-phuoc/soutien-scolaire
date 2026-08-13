import { LECTURE_IMAGE_INDEX } from "@/lib/curriculum/content/communication/word-image-index";
import { labelToAssetSlug } from "@/lib/curriculum/word-image-resolver";
import { speak, primeSpeechVoices, type VoiceGender } from "@/lib/utils/speech";

export function getWordAssetSlug(word: string): string {
  return word.toLowerCase();
}

// Lecture : uniquement les images dédiées /assets/words/lecture/ —
// jamais les scènes d'expression (CE/CO), réservées à la communication.
export function getLectureWordImagePath(word: string): string {
  const slug = labelToAssetSlug(word);
  if (LECTURE_IMAGE_INDEX[slug]) return LECTURE_IMAGE_INDEX[slug]!;
  return `/assets/words/lecture/${getWordAssetSlug(word)}.webp`;
}

export function hasLectureWordImage(word: string): boolean {
  const slug = labelToAssetSlug(word);
  return !!(LECTURE_IMAGE_INDEX[getWordAssetSlug(word)] || LECTURE_IMAGE_INDEX[slug]);
}

export type { VoiceGender } from "@/lib/utils/speech";

export function selectedVoice(): VoiceGender {
  return "f";
}

function audioSlugCandidates(text: string): string[] {
  return [...new Set([getWordAssetSlug(text), labelToAssetSlug(text)])];
}

/**
 * Ordered list of audio URLs to try for a recording (son_f only).
 */
function audioCandidates(kind: "mots" | "syllable", text: string): string[] {
  const slugs = audioSlugCandidates(text);
  return slugs.map((slug) => `/assets/words/son_f/${kind}/${slug}.mp3`);
}

/**
 * Preferred word recording path (son_f).
 */
export function getWordAudioPath(word: string): string {
  const slug = audioSlugCandidates(word)[0] ?? getWordAssetSlug(word);
  return `/assets/words/son_f/mots/${slug}.mp3`;
}

/**
 * Preferred syllable recording path (son_f).
 */
export function getSyllableAudioPath(syllable: string): string {
  const slug = audioSlugCandidates(syllable)[0] ?? getWordAssetSlug(syllable);
  return `/assets/words/son_f/syllable/${slug}.mp3`;
}

const PLAY_TIMEOUT_MS = 8000;

/**
 * Try to play a recording URL. Calls play() immediately so iOS/WebView keeps
 * the user-gesture context; waiting for canplaythrough before play() often hangs
 * silently on mobile (media is not fetched until play() is invoked).
 */
async function tryPlayUrl(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const audio = new Audio(url);
    let settled = false;
    const finish = (ok: boolean) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      resolve(ok);
    };
    const timer = window.setTimeout(() => finish(false), PLAY_TIMEOUT_MS);
    audio.addEventListener("error", () => finish(false), { once: true });
    audio.addEventListener("playing", () => finish(true), { once: true });
    void audio.play().catch(() => finish(false));
  });
}

async function playWithFallback(candidates: string[], fallbackText: string): Promise<void> {
  for (const url of candidates) {
    if (await tryPlayUrl(url)) return;
  }
  speak(fallbackText, "fr-CH", 0.85, "f");
}

/** Play a word recording (preferred voice → other voice → TTS). */
export function playWord(word: string): void {
  primeSpeechVoices();
  void playWithFallback(audioCandidates("mots", word), word);
}

/** Play a syllable recording (preferred voice → other voice → TTS). */
export function playSyllable(syllable: string): void {
  primeSpeechVoices();
  void playWithFallback(audioCandidates("syllable", syllable), syllable);
}

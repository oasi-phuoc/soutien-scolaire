import { Capacitor } from "@capacitor/core";

const FRENCH_SWISS_LANG = "fr-CH";

export type VoiceGender = "f" | "m";

/**
 * Android WebView (APK) n'implémente pas window.speechSynthesis : le TTS web
 * fonctionne dans Chrome mais reste muet dans l'app. Sur plateforme native on
 * passe par le moteur TTS du système via le plugin Capacitor, qui fonctionne
 * aussi hors ligne.
 */
function isNativeApp(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return Capacitor.isNativePlatform();
  } catch {
    return false;
  }
}

type TtsPlugin = typeof import("@capacitor-community/text-to-speech").TextToSpeech;

// Import dynamique : le module du plugin accède à `window` au chargement,
// il ne doit donc jamais être évalué côté serveur (SSR).
let ttsPluginPromise: Promise<TtsPlugin | null> | null = null;

function nativeTts(): Promise<TtsPlugin | null> {
  if (!isNativeApp()) return Promise.resolve(null);
  ttsPluginPromise ??= import("@capacitor-community/text-to-speech")
    .then((m) => m.TextToSpeech)
    .catch(() => null);
  return ttsPluginPromise;
}

async function speakNative(text: string, lang: string, rate: number): Promise<boolean> {
  const tts = await nativeTts();
  if (!tts) return false;
  try {
    await tts.stop().catch(() => {});
    await tts.speak({
      text,
      // Les moteurs TTS Android proposent fr-FR, rarement fr-CH.
      lang: lang.toLowerCase().startsWith("fr") ? "fr-FR" : lang,
      rate,
      pitch: 1.0,
      volume: 1.0,
    });
    return true;
  } catch {
    return false;
  }
}

/** Interrompt toute lecture TTS en cours (moteur natif + Web Speech API). */
export function cancelSpeech(): void {
  if (typeof window === "undefined") return;
  void nativeTts().then((tts) => tts?.stop().catch(() => {}));
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

/** Durée estimée d'une lecture TTS (pour les barres de progression). */
export function estimateSpeechDurationMs(text: string, rate: number): number {
  return Math.max(1200, (text.length / (11 * rate)) * 1000);
}

/**
 * Lecture TTS d'une phrase avec progression : résout à la fin de la lecture.
 * Utilise le moteur natif dans l'app mobile, sinon le Web Speech API.
 */
export function speakPhraseAsync(
  text: string,
  rate: number,
  signal: { cancelled: boolean },
  onProgress: (percent: number) => void,
): Promise<void> {
  return new Promise<void>((resolve) => {
    if (signal.cancelled || typeof window === "undefined") {
      resolve();
      return;
    }
    const estMs = estimateSpeechDurationMs(text, rate);
    const start = Date.now();
    const timer = window.setInterval(() => {
      if (signal.cancelled) {
        window.clearInterval(timer);
        resolve();
        return;
      }
      onProgress(Math.min(99, ((Date.now() - start) / estMs) * 100));
    }, 80);
    const finish = (done: boolean) => {
      window.clearInterval(timer);
      if (done) onProgress(100);
      resolve();
    };

    if (isNativeApp()) {
      void nativeTts().then((tts) => {
        if (!tts) {
          finish(false);
          return;
        }
        void tts.stop().catch(() => {});
        tts.speak({ text, lang: "fr-FR", rate, pitch: 1.0, volume: 1.0 })
          .then(() => finish(!signal.cancelled))
          .catch(() => finish(false));
      });
      return;
    }

    if (!("speechSynthesis" in window)) {
      finish(false);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = FRENCH_SWISS_LANG;
    utterance.rate = rate;
    utterance.onend = () => finish(true);
    utterance.onerror = () => finish(false);
    window.speechSynthesis.speak(utterance);
  });
}

const FEMALE_VOICE_HINTS =
  /femme|female|woman|amélie|amelie|audrey|marie|claire|hélène|helene|virginie|alice|julie|victoire|sara|zénaide|zenaide|denise|florence/i;
const MALE_VOICE_HINTS =
  /homme|male|man|thomas|paul|michel|daniel|nicolas|jacques|henri|alain|guillaume|pierre|olivier|bruno|arthur|gilles|yannick|damien|aurelien|aurélien/i;

function voiceMatchesGender(voice: SpeechSynthesisVoice, gender: VoiceGender): boolean | null {
  const name = voice.name.toLowerCase();
  if (FEMALE_VOICE_HINTS.test(name)) return gender === "f";
  if (MALE_VOICE_HINTS.test(name)) return gender === "m";
  return null;
}

function pickFromPool(pool: SpeechSynthesisVoice[], gender: VoiceGender): SpeechSynthesisVoice | undefined {
  const gendered = pool.filter((voice) => voiceMatchesGender(voice, gender) === true);
  if (gendered.length) {
    return gendered.find((voice) => voice.localService) ?? gendered[0];
  }
  const neutral = pool.filter((voice) => voiceMatchesGender(voice, gender) === null);
  return neutral.find((voice) => voice.localService) ?? neutral[0] ?? pool[0];
}

function pickFrenchVoice(gender: VoiceGender): SpeechSynthesisVoice | null {
  if (typeof window === "undefined") return null;
  const voices = window.speechSynthesis.getVoices();
  const byLang = (code: string) => voices.filter((voice) => voice.lang.toLowerCase() === code);
  const swissFrenchVoices = byLang("fr-ch");
  const franceFrenchVoices = byLang("fr-fr");
  const belgiumFrenchVoices = byLang("fr-be");
  const canadaFrenchVoices = byLang("fr-ca");
  const anyFrenchVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith("fr"));

  const pools = [
    swissFrenchVoices,
    franceFrenchVoices,
    belgiumFrenchVoices,
    canadaFrenchVoices,
    anyFrenchVoices,
  ];

  for (const pool of pools) {
    const voice = pickFromPool(pool, gender);
    if (voice) return voice;
  }

  return null;
}

function resolveVoiceGender(_gender?: VoiceGender): VoiceGender {
  return "f";
}

/** Prime voice list on first user interaction (iOS/WKWebView returns [] until then). */
export function primeSpeechVoices(): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  if (window.speechSynthesis.getVoices().length > 0) return;
  const warm = new SpeechSynthesisUtterance(" ");
  warm.volume = 0;
  window.speechSynthesis.speak(warm);
  window.speechSynthesis.cancel();
}

function speakNow(
  text: string,
  lang: string,
  rate: number,
  gender: VoiceGender,
): void {
  window.speechSynthesis.cancel();

  const requestedLang = lang.toLowerCase().startsWith("fr") ? FRENCH_SWISS_LANG : lang;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = requestedLang;
  utterance.rate = rate;

  if (requestedLang.toLowerCase().startsWith("fr")) {
    const voice = pickFrenchVoice(gender);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang || requestedLang;
    }
  }

  window.speechSynthesis.speak(utterance);
}

function speakWeb(text: string, lang: string, rate: number, resolvedGender: VoiceGender): void {
  if (!("speechSynthesis" in window)) return;

  if (window.speechSynthesis.getVoices().length > 0) {
    speakNow(text, lang, rate, resolvedGender);
    return;
  }

  let spoke = false;
  const start = () => {
    if (spoke) return;
    spoke = true;
    speakNow(text, lang, rate, resolvedGender);
  };

  window.speechSynthesis.addEventListener("voiceschanged", start, { once: true });
  primeSpeechVoices();
  window.setTimeout(start, 300);
}

export function speak(text: string, lang = FRENCH_SWISS_LANG, rate = 0.85, gender?: VoiceGender) {
  if (typeof window === "undefined") return;
  const resolvedGender = resolveVoiceGender(gender);

  if (isNativeApp()) {
    void speakNative(text, lang, rate).then((ok) => {
      if (!ok) speakWeb(text, lang, rate, resolvedGender);
    });
    return;
  }

  speakWeb(text, lang, rate, resolvedGender);
}

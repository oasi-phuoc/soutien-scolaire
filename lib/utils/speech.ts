const FRENCH_SWISS_LANG = "fr-CH";

export type VoiceGender = "f" | "m";

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

function resolveVoiceGender(gender?: VoiceGender): VoiceGender {
  if (gender) return gender;
  if (typeof window === "undefined") return "f";
  return localStorage.getItem("soutien-genre") === "m" ? "m" : "f";
}

/** Prime voice list on first user interaction (iOS/WKWebView returns [] until then). */
export function primeSpeechVoices(): void {
  if (typeof window === "undefined") return;
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

export function speak(text: string, lang = FRENCH_SWISS_LANG, rate = 0.85, gender?: VoiceGender) {
  if (typeof window === "undefined") return;
  const resolvedGender = resolveVoiceGender(gender);

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

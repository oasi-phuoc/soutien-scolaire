const FRENCH_SWISS_LANG = "fr-CH";

function pickFrenchVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined") return null;
  const voices = window.speechSynthesis.getVoices();
  const byLang = (code: string) => voices.filter((voice) => voice.lang.toLowerCase() === code);
  const swissFrenchVoices = byLang("fr-ch");
  const franceFrenchVoices = byLang("fr-fr");
  const belgiumFrenchVoices = byLang("fr-be");
  const canadaFrenchVoices = byLang("fr-ca");
  const anyFrenchVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith("fr"));

  // Preference chain: Swiss → France → Belgium → Canada → any French.
  return (
    swissFrenchVoices.find((voice) => voice.localService) ??
    swissFrenchVoices.find((voice) => /suisse|swiss|francais|french/i.test(voice.name)) ??
    swissFrenchVoices[0] ??
    franceFrenchVoices.find((voice) => voice.localService) ??
    franceFrenchVoices.find((voice) => /france|francais|amelie|audrey|thomas/i.test(voice.name)) ??
    franceFrenchVoices[0] ??
    belgiumFrenchVoices.find((voice) => voice.localService) ??
    belgiumFrenchVoices[0] ??
    canadaFrenchVoices.find((voice) => voice.localService) ??
    canadaFrenchVoices[0] ??
    anyFrenchVoices.find((voice) => voice.localService) ??
    anyFrenchVoices[0] ??
    null
  );
}

export function speak(text: string, lang = FRENCH_SWISS_LANG, rate = 0.85) {
  if (typeof window === "undefined") return;
  window.speechSynthesis.cancel();

  const requestedLang = lang.toLowerCase().startsWith("fr") ? FRENCH_SWISS_LANG : lang;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = requestedLang;
  utterance.rate = rate;

  if (requestedLang.toLowerCase().startsWith("fr")) {
    const voice = pickFrenchVoice();
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang || requestedLang;
    }
  }

  window.speechSynthesis.speak(utterance);
}

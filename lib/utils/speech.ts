function pickFrenchVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined") return null;
  const voices = window.speechSynthesis.getVoices();
  const exactFrenchVoices = voices.filter((voice) => voice.lang.toLowerCase() === "fr-fr");
  return (
    exactFrenchVoices.find((voice) => voice.localService) ??
    exactFrenchVoices.find((voice) => /france|français|francais|amelie|amélie|audrey|thomas/i.test(voice.name)) ??
    exactFrenchVoices[0] ??
    null
  );
}

export function speak(text: string, lang = "fr-FR", rate = 0.85) {
  if (typeof window === "undefined") return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = rate;
  if (lang.toLowerCase() === "fr-fr") {
    const voice = pickFrenchVoice();
    if (voice) u.voice = voice;
  }
  window.speechSynthesis.speak(u);
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type SpeechRecognitionInstance = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: {
    results: { [key: number]: { [key: number]: { transcript: string } }; length: number };
    resultIndex: number;
  }) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

function getSpeechRecognition(): (new () => SpeechRecognitionInstance) | null {
  if (typeof window === "undefined") return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function normalizeFrenchTranscript(raw: string): string {
  const cleaned = raw
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;!?])/g, "$1")
    .replace(/([,;:!?])(?=\S)/g, "$1 ");

  if (!cleaned) return "";

  const capitalized = cleaned.replace(/\p{L}/u, (letter) => letter.toUpperCase());
  if (/[.!?…]$/.test(capitalized)) return capitalized;
  return `${capitalized}.`;
}

export function useFrenchSpeechRecognition(onTranscript: (text: string) => void) {
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (!getSpeechRecognition()) setSupported(false);
  }, []);

  const startListening = useCallback(() => {
    const SR = getSpeechRecognition();
    if (!SR) return;
    const rec = new SR();
    rec.lang = "fr-CH";
    rec.continuous = true;
    rec.interimResults = true;
    rec.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i]?.[0]?.transcript ?? "";
      }
      const normalized = normalizeFrenchTranscript(transcript);
      if (normalized) onTranscript(normalized);
    };
    rec.onerror = (event) => {
      if (event.error !== "no-speech") setIsListening(false);
    };
    rec.onend = () => setIsListening(false);
    recognitionRef.current = rec;
    rec.start();
    setIsListening(true);
  }, [onTranscript]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  return { isListening, supported, startListening, stopListening };
}

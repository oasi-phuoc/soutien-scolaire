"use client";

import { useCallback, useState } from "react";
import type { StorySegment } from "@/lib/curriculum/lecture-data";
import { parseAnnotated } from "@/lib/curriculum/lecture-data";
import { useFrenchSpeechRecognition } from "@/lib/hooks/useFrenchSpeechRecognition";
import { TtsPhrasePlayer } from "@/components/lecture/TtsPhrasePlayer";

const LECTURE_ACCENT = "var(--color-accent-lecture)";

function AnnotatedText({ text }: { text: string }) {
  const segments = parseAnnotated(text);
  return (
    <>
      {segments.map((seg: StorySegment, i: number) =>
        seg.kind === "complex" ? (
          <span key={i} className="font-semibold" style={{ color: LECTURE_ACCENT }}>{seg.text}</span>
        ) : seg.kind === "silent" ? (
          <span key={i} style={{ color: "var(--color-text-secondary)" }}>{seg.text}</span>
        ) : (
          <span key={i}>{seg.text}</span>
        ),
      )}
    </>
  );
}

function StoryMicButton({
  isListening,
  supported,
  onStart,
  onStop,
}: {
  isListening: boolean;
  supported: boolean;
  onStart: () => void;
  onStop: () => void;
}) {
  if (!supported) {
    return (
      <p className="text-[10px] leading-snug text-amber-600">
        Micro non supporté (Chrome ou Edge).
      </p>
    );
  }
  return (
    <button
      type="button"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        onStart();
      }}
      onPointerUp={onStop}
      onPointerLeave={onStop}
      className={`flex h-11 w-11 shrink-0 select-none touch-none items-center justify-center rounded-full text-white shadow-md transition-all active:scale-95 ${
        isListening ? "animate-pulse scale-95" : "hover:opacity-90"
      }`}
      style={{ background: isListening ? "#dc2626" : LECTURE_ACCENT }}
      aria-label={isListening ? "Relâchez pour arrêter" : "Maintenez pour lire à voix haute"}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white" aria-hidden>
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
      </svg>
    </button>
  );
}

type StorySentenceRowProps = {
  index: number;
  sentence: string;
  plainText: string;
};

export function StorySentenceRow({ index, sentence, plainText }: StorySentenceRowProps) {
  const [transcript, setTranscript] = useState("");

  const onTranscript = useCallback((text: string) => {
    setTranscript(text);
  }, []);

  const { isListening, supported, startListening, stopListening } = useFrenchSpeechRecognition(onTranscript);

  const handleStart = useCallback(() => {
    setTranscript("");
    startListening();
  }, [startListening]);

  return (
    <li className="space-y-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-lecture)]/10 text-xs font-bold text-[var(--color-accent-lecture)]">
          {index + 1}
        </span>
        <p className="flex-1 text-base leading-relaxed text-[var(--color-text-primary)]">
          <AnnotatedText text={sentence} />
        </p>
      </div>

      <div className="flex items-start gap-2 pl-9">
        <div className="min-w-0 flex-1">
          <TtsPhrasePlayer text={plainText} />
        </div>
        <StoryMicButton
          isListening={isListening}
          supported={supported}
          onStart={handleStart}
          onStop={stopListening}
        />
      </div>

      {transcript ? (
        <div className="ml-9 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            Vous avez dit
          </p>
          <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-primary)]">{transcript}</p>
        </div>
      ) : null}
    </li>
  );
}

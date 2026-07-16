"use client";

import { useEffect, useRef, useState } from "react";
import { MediaPlayerBar } from "@/components/communication/MediaPlayerBar";
import { cancelSpeech, speak, speakPhraseAsync } from "@/lib/utils/speech";

export type TtsSequenceItem = {
  id: string;
  text: string;
  label: string;
};

type TtsSequencePlayerProps = {
  items: TtsSequenceItem[];
  gapMs?: number;
  accentColor?: string;
};

function waitMs(ms: number, signal: { cancelled: boolean }) {
  return new Promise<void>((resolve) => {
    const timer = window.setTimeout(() => resolve(), ms);
    const check = window.setInterval(() => {
      if (signal.cancelled) {
        window.clearTimeout(timer);
        window.clearInterval(check);
        resolve();
      }
    }, 50);
    window.setTimeout(() => window.clearInterval(check), ms + 50);
  });
}

function estimateDurationMs(text: string, rate: number) {
  return Math.max(1500, (text.length / (11 * rate)) * 1000);
}

export function TtsSequencePlayer({ items, gapMs = 3000, accentColor = "var(--color-accent-comm)" }: TtsSequencePlayerProps) {
  const cancelRef = useRef({ cancelled: false });
  const playingRef = useRef(false);
  const sequenceProgressRef = useRef({ itemIndex: 0, itemProgress: 0 });

  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    cancelRef.current.cancelled = true;
    cancelSpeech();
    playingRef.current = false;
    setPlaying(false);
    setPaused(false);
    setWaiting(false);
    setCurrentIndex(null);
    setProgress(0);
    cancelRef.current = { cancelled: false };
    return () => {
      cancelRef.current.cancelled = true;
      cancelSpeech();
    };
  }, [items]);

  function computeOverallProgress(itemIndex: number, itemProgress: number) {
    if (items.length === 0) return 0;
    const slice = 100 / items.length;
    return Math.min(100, itemIndex * slice + (itemProgress / 100) * slice);
  }

  function stop() {
    cancelRef.current.cancelled = true;
    cancelSpeech();
    playingRef.current = false;
    setPlaying(false);
    setPaused(false);
    setWaiting(false);
    setCurrentIndex(null);
    setProgress(0);
    cancelRef.current = { cancelled: false };
  }

  async function playFrom(index: number) {
    if (playingRef.current) return;
    playingRef.current = true;
    setPaused(false);
    setPlaying(true);

    for (let i = index; i < items.length; i++) {
      if (cancelRef.current.cancelled) break;
      const item = items[i]!;
      setCurrentIndex(i);
      setWaiting(false);
      await speakPhraseAsync(item.text, playbackRate, cancelRef.current, (itemProgress) => {
        sequenceProgressRef.current = { itemIndex: i, itemProgress };
        setProgress(computeOverallProgress(i, itemProgress));
      });
      if (cancelRef.current.cancelled) break;
      setProgress(computeOverallProgress(i + 1, 0));
      if (i < items.length - 1) {
        setWaiting(true);
        setPlaying(false);
        await waitMs(gapMs, cancelRef.current);
        if (cancelRef.current.cancelled) break;
        setWaiting(false);
        setPlaying(true);
      }
    }

    playingRef.current = false;
    setPlaying(false);
    setWaiting(false);
    if (!cancelRef.current.cancelled) {
      setCurrentIndex(null);
      setProgress(0);
    }
  }

  function toggle() {
    if (playing || waiting) {
      cancelRef.current.cancelled = true;
      cancelSpeech();
      playingRef.current = false;
      setPlaying(false);
      setWaiting(false);
      setPaused(true);
      return;
    }
    if (paused) {
      setPaused(false);
      void playFrom(currentIndex ?? 0);
      return;
    }
    void playFrom(0);
  }

  function restart() {
    stop();
    void playFrom(0);
  }

  function seekTo(percent: number) {
    if (items.length === 0) return;
    const targetIndex = Math.min(items.length - 1, Math.floor((percent / 100) * items.length));
    cancelRef.current.cancelled = true;
    cancelSpeech();
    playingRef.current = false;
    setPaused(false);
    setWaiting(false);
    setProgress(percent);
    cancelRef.current = { cancelled: false };
    void playFrom(targetIndex);
  }

  const canSeek = items.length > 0;

  const estimatedTotalSec = items.reduce(
    (sum, item) => sum + estimateDurationMs(item.text, playbackRate) / 1000,
    0,
  ) + Math.max(0, items.length - 1) * (gapMs / 1000);
  const estimatedCurrentSec = (progress / 100) * estimatedTotalSec;

  return (
    <MediaPlayerBar
      playing={playing}
      paused={paused}
      waiting={waiting}
      progress={progress}
      currentTimeSec={estimatedCurrentSec}
      durationSec={estimatedTotalSec}
      canSeek={canSeek}
      onToggle={toggle}
      onSeek={seekTo}
      onRestart={restart}
      playbackRate={playbackRate}
      onSpeedChange={setPlaybackRate}
      accentColor={accentColor}
    />
  );
}

export function TtsPlayButton({ text, small }: { text: string; small?: boolean }) {
  const ACCENT = "var(--color-accent-comm)";
  return (
    <button
      type="button"
      aria-label="Écouter"
      onClick={() => speak(text, "fr-CH", 0.85)}
      className={`flex shrink-0 items-center justify-center rounded-full shadow-sm active:opacity-80 ${small ? "h-8 w-8" : "h-10 w-10"} text-white`}
      style={{ background: ACCENT }}
    >
      <svg width={small ? 14 : 16} height={small ? 14 : 16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M6 4l14 8-14 8V4z" />
      </svg>
    </button>
  );
}

export function HintLightbulbButton({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) {
  const ACCENT = "var(--color-accent-comm)";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
        active ? "bg-amber-50" : "hover:bg-[var(--color-bg-secondary)]"
      }`}
      style={{ color: active ? ACCENT : "var(--color-text-secondary)" }}
      aria-label={active ? "Masquer l'indice" : "Afficher l'indice"}
      title={active ? "Masquer l'indice" : "Afficher l'indice"}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 14.5A7 7 0 1 1 15.5 14.5C14.5 15.2 14 16 14 18h-4c0-2-.5-2.8-1.5-3.5Z" />
      </svg>
    </button>
  );
}

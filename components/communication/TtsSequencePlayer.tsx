"use client";

import { useEffect, useRef, useState } from "react";
import { speak } from "@/lib/utils/speech";

const ACCENT = "var(--color-accent-comm)";

const SPEED_OPTIONS = [
  { rate: 0.5, label: "0,5×" },
  { rate: 0.75, label: "0,75×" },
  { rate: 1, label: "Normale" },
] as const;

export type TtsSequenceItem = {
  id: string;
  text: string;
  label: string;
};

type TtsSequencePlayerProps = {
  items: TtsSequenceItem[];
  gapMs?: number;
  gapHint?: string;
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

function speakAsync(text: string, rate: number, signal: { cancelled: boolean }) {
  return new Promise<void>((resolve) => {
    if (signal.cancelled || typeof window === "undefined") {
      resolve();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-CH";
    utterance.rate = rate;
    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
}

export function TtsSequencePlayer({ items, gapMs = 3000, gapHint }: TtsSequencePlayerProps) {
  const cancelRef = useRef({ cancelled: false });
  const playingRef = useRef(false);
  const speedMenuRef = useRef<HTMLDivElement>(null);

  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [speedMenuOpen, setSpeedMenuOpen] = useState(false);

  useEffect(() => {
    cancelRef.current.cancelled = true;
    window.speechSynthesis?.cancel();
    playingRef.current = false;
    setPlaying(false);
    setPaused(false);
    setWaiting(false);
    setCurrentIndex(null);
    setProgress(0);
    cancelRef.current = { cancelled: false };
    return () => {
      cancelRef.current.cancelled = true;
      window.speechSynthesis?.cancel();
    };
  }, [items]);

  useEffect(() => {
    if (!speedMenuOpen) return;
    function onPointerDown(event: MouseEvent) {
      if (speedMenuRef.current && !speedMenuRef.current.contains(event.target as Node)) {
        setSpeedMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [speedMenuOpen]);

  function stop() {
    cancelRef.current.cancelled = true;
    window.speechSynthesis?.cancel();
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
      setProgress(Math.round((i / items.length) * 100));
      setWaiting(false);
      await speakAsync(item.text, playbackRate, cancelRef.current);
      if (cancelRef.current.cancelled) break;
      setProgress(Math.round(((i + 1) / items.length) * 100));
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
      window.speechSynthesis?.cancel();
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

  function selectSpeed(rate: number) {
    setPlaybackRate(rate);
    setSpeedMenuOpen(false);
  }

  const currentItem = currentIndex !== null ? items[currentIndex] : null;
  const label = items.length > 1 ? "Écouter le dialogue" : "Écouter";
  const activeLabel = waiting
    ? `Pause — réplique ${(currentIndex ?? 0) + 1}/${items.length}`
    : paused
      ? currentItem
        ? `En pause — ${currentItem.label}`
        : "En pause"
      : currentItem
        ? `Lecture ${currentItem.label}`
        : label;
  const showPauseIcon = playing || waiting;

  return (
    <div>
      <div className="grid h-12 grid-cols-[44px_1fr_44px] items-center gap-2 rounded-full border border-[var(--color-border-default)] bg-white px-2 shadow-sm">
        <button
          type="button"
          onClick={toggle}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-opacity hover:opacity-85 active:scale-95"
          style={{ background: ACCENT }}
          aria-label={showPauseIcon ? "Pause" : paused ? "Reprendre" : label}
        >
          {showPauseIcon ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <rect x="5" y="4" width="4" height="16" rx="1" />
              <rect x="15" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M6 4l14 8-14 8V4z" />
            </svg>
          )}
        </button>
        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-[var(--color-text-primary)]">{activeLabel}</p>
          <div className="mt-1 flex items-center gap-1.5">
            <input
              type="range"
              min={0}
              max={100}
              step={0.1}
              value={progress}
              disabled
              className="h-1.5 min-w-0 flex-1 appearance-none rounded-full disabled:opacity-60"
              style={{ accentColor: ACCENT }}
              aria-label="Progression audio"
            />
            <div className="relative shrink-0" ref={speedMenuRef}>
              <button
                type="button"
                onClick={() => setSpeedMenuOpen((open) => !open)}
                className="flex h-6 w-6 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]"
                aria-label="Vitesse de lecture"
                aria-expanded={speedMenuOpen}
                title="Vitesse de lecture"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <circle cx="12" cy="5" r="1.8" />
                  <circle cx="12" cy="12" r="1.8" />
                  <circle cx="12" cy="19" r="1.8" />
                </svg>
              </button>
              {speedMenuOpen && (
                <div className="absolute right-0 top-full z-20 mt-1 min-w-[7.5rem] overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white py-1 shadow-lg">
                  {SPEED_OPTIONS.map((option) => (
                    <button
                      key={option.rate}
                      type="button"
                      onClick={() => selectSpeed(option.rate)}
                      className={`block w-full px-3 py-1.5 text-left text-xs transition-colors hover:bg-[var(--color-bg-secondary)] ${
                        playbackRate === option.rate
                          ? "font-bold text-[var(--color-text-primary)]"
                          : "text-[var(--color-text-secondary)]"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={restart}
          className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] active:scale-95"
          aria-label="Recommencer"
          title="Recommencer"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
            <path d="M3 12a9 9 0 1 0 3-6.7" />
            <path d="M3 3v6h6" />
          </svg>
        </button>
      </div>
      {items.length > 1 && gapHint && (
        <p className="mt-1 text-xs font-semibold text-[var(--color-text-secondary)]">{gapHint}</p>
      )}
    </div>
  );
}

export function TtsPlayButton({ text, small }: { text: string; small?: boolean }) {
  return (
    <button
      type="button"
      aria-label="Écouter"
      onClick={() => speak(text, "fr-CH", 0.85)}
      className={`flex shrink-0 items-center justify-center rounded-full shadow-sm active:opacity-80 ${small ? "h-8 w-8" : "h-10 w-10"} text-white`}
      style={{ background: ACCENT }}
    >
      <svg width={small ? 14 : 16} height={small ? 14 : 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    </button>
  );
}

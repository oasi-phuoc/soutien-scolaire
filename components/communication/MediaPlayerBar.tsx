"use client";

import { useEffect, useRef, useState } from "react";

const ACCENT = "var(--color-accent-comm)";

export const MEDIA_PLAYER_SPEED_OPTIONS = [
  { rate: 0.5, label: "0,5×" },
  { rate: 0.75, label: "0,75×" },
  { rate: 1, label: "Normale" },
] as const;

type MediaPlayerBarProps = {
  playing: boolean;
  paused: boolean;
  waiting?: boolean;
  progress: number;
  canSeek: boolean;
  onToggle: () => void;
  onSeek: (percent: number) => void;
  onRestart: () => void;
  playbackRate: number;
  onSpeedChange: (rate: number) => void;
  playAriaLabel?: string;
  pauseAriaLabel?: string;
};

export function MediaPlayerBar({
  playing,
  paused,
  waiting = false,
  progress,
  canSeek,
  onToggle,
  onSeek,
  onRestart,
  playbackRate,
  onSpeedChange,
  playAriaLabel = "Lecture",
  pauseAriaLabel = "Pause",
}: MediaPlayerBarProps) {
  const speedMenuRef = useRef<HTMLDivElement>(null);
  const isSeekingRef = useRef(false);
  const [speedMenuOpen, setSpeedMenuOpen] = useState(false);

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

  const showPauseIcon = playing || waiting;
  const displayProgress = waiting ? 100 : progress;

  return (
    <div className="flex items-center gap-2 rounded-full border border-[var(--color-border-default)] bg-white px-2 py-2 shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-opacity hover:opacity-85 active:scale-95"
        style={{ background: ACCENT }}
        aria-label={showPauseIcon ? pauseAriaLabel : paused ? "Reprendre" : playAriaLabel}
      >
        {showPauseIcon ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <rect x="5" y="4" width="4" height="16" rx="1" />
            <rect x="15" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M6 4l14 8-14 8V4z" />
          </svg>
        )}
      </button>

      <input
        type="range"
        min={0}
        max={100}
        step={0.1}
        value={displayProgress}
        disabled={!canSeek}
        onChange={(event) => onSeek(Number(event.target.value))}
        onPointerDown={() => { isSeekingRef.current = true; }}
        onPointerUp={() => { isSeekingRef.current = false; }}
        onPointerCancel={() => { isSeekingRef.current = false; }}
        className="h-2 min-w-0 flex-1 cursor-pointer appearance-none rounded-full disabled:cursor-default disabled:opacity-50"
        style={{ accentColor: ACCENT }}
        aria-label="Progression audio"
      />

      <div className="relative shrink-0" ref={speedMenuRef}>
        <button
          type="button"
          onClick={() => setSpeedMenuOpen((open) => !open)}
          className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]"
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
            {MEDIA_PLAYER_SPEED_OPTIONS.map((option) => (
              <button
                key={option.rate}
                type="button"
                onClick={() => { onSpeedChange(option.rate); setSpeedMenuOpen(false); }}
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

      <button
        type="button"
        onClick={onRestart}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)] active:scale-95"
        aria-label="Recommencer"
        title="Recommencer"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
          <path d="M3 12a9 9 0 1 0 3-6.7" />
          <path d="M3 3v6h6" />
        </svg>
      </button>
    </div>
  );
}

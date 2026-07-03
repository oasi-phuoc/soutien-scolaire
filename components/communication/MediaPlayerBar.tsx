"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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
  const progressBarRef = useRef<HTMLDivElement>(null);
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

  const seekFromClientX = useCallback((clientX: number) => {
    const bar = progressBarRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    onSeek(pct);
  }, [onSeek]);

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (!isSeekingRef.current || !canSeek) return;
      seekFromClientX(event.clientX);
    }
    function onPointerUp() {
      isSeekingRef.current = false;
    }
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [canSeek, seekFromClientX]);

  const showPauseIcon = playing || waiting;
  const displayProgress = waiting ? 100 : progress;

  return (
    <div className="flex items-center gap-2 rounded-full border border-[var(--color-border-default)] bg-white px-2 py-2 shadow-sm">
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <button
          type="button"
          onClick={onToggle}
          className="flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-full text-white transition-opacity hover:opacity-85 active:scale-95"
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

        <div
          ref={progressBarRef}
          role="slider"
          aria-label="Progression audio"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(displayProgress)}
          aria-disabled={!canSeek}
          className={`relative h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-accent-comm)]/25 ${
            canSeek ? "cursor-pointer" : "cursor-default opacity-50"
          }`}
          onPointerDown={(event) => {
            if (!canSeek) return;
            isSeekingRef.current = true;
            seekFromClientX(event.clientX);
          }}
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-75 ease-linear"
            style={{ width: `${displayProgress}%`, background: ACCENT }}
          />
        </div>
      </div>

      <div className="relative shrink-0 self-center" ref={speedMenuRef}>
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
        className="flex h-8 w-8 shrink-0 self-center items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)] active:scale-95"
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

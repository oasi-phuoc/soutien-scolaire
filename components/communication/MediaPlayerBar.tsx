"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const DEFAULT_ACCENT = "var(--color-accent-comm)";

export const MEDIA_PLAYER_SPEED_OPTIONS = [
  { rate: 0.5, label: "0,5×" },
  { rate: 0.75, label: "0,75×" },
  { rate: 1, label: "Normale" },
] as const;

export function formatMediaTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

type MediaPlayerBarProps = {
  playing: boolean;
  paused: boolean;
  waiting?: boolean;
  progress: number;
  currentTimeSec?: number;
  durationSec?: number;
  canSeek: boolean;
  onToggle: () => void;
  onSeek: (percent: number) => void;
  onRestart: () => void;
  playbackRate?: number;
  onSpeedChange?: (rate: number) => void;
  accentColor?: string;
  playAriaLabel?: string;
  pauseAriaLabel?: string;
};

export function MediaPlayerBar({
  playing,
  paused,
  waiting = false,
  progress,
  currentTimeSec = 0,
  durationSec = 0,
  canSeek,
  onToggle,
  onSeek,
  onRestart,
  playbackRate = 1,
  onSpeedChange,
  accentColor = DEFAULT_ACCENT,
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
  const displayCurrent = durationSec > 0
    ? Math.min(durationSec, (displayProgress / 100) * durationSec)
    : currentTimeSec;

  const trackBg = `color-mix(in srgb, ${accentColor} 18%, #f3ede8)`;

  return (
    <div
      className="rounded-[var(--radius-lg)] px-4 py-4"
      style={{ background: "color-mix(in srgb, var(--color-bg-secondary) 65%, #faf7f4)" }}
    >
      <div className="mb-5">
        <div
          ref={progressBarRef}
          role="slider"
          aria-label="Progression audio"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(displayProgress)}
          aria-disabled={!canSeek}
          className={`relative h-1.5 w-full ${canSeek ? "cursor-pointer" : "cursor-default opacity-60"}`}
          onPointerDown={(event) => {
            if (!canSeek) return;
            isSeekingRef.current = true;
            seekFromClientX(event.clientX);
          }}
        >
          <div className="absolute inset-0 rounded-full" style={{ background: trackBg }} />
          <div
            className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-75 ease-linear"
            style={{ width: `${displayProgress}%`, background: accentColor }}
          />
          <div
            className="pointer-events-none absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-white shadow-md"
            style={{ left: `calc(${displayProgress}% - 7px)` }}
          />
        </div>
        <div className="mt-2.5 flex justify-between text-xs tabular-nums text-[var(--color-text-secondary)]">
          <span>{formatMediaTime(displayCurrent)}</span>
          <span>{durationSec > 0 ? formatMediaTime(durationSec) : "—"}</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-10">
        <button
          type="button"
          onClick={onRestart}
          className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors hover:bg-white/70 hover:text-[var(--color-text-primary)] active:scale-95"
          aria-label="Recommencer"
          title="Recommencer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M3 12a9 9 0 1 0 3-6.7" />
            <path d="M3 3v6h6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={onToggle}
          className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-md transition-transform hover:opacity-90 active:scale-95"
          style={{ background: accentColor }}
          aria-label={showPauseIcon ? pauseAriaLabel : paused ? "Reprendre" : playAriaLabel}
        >
          {showPauseIcon ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <rect x="5" y="4" width="4" height="16" rx="1" />
              <rect x="15" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M6 4l14 8-14 8V4z" />
            </svg>
          )}
        </button>

        {onSpeedChange ? (
          <div className="relative" ref={speedMenuRef}>
            <button
              type="button"
              onClick={() => setSpeedMenuOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors hover:bg-white/70 hover:text-[var(--color-text-primary)]"
              aria-label="Vitesse de lecture"
              aria-expanded={speedMenuOpen}
              title="Vitesse de lecture"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <circle cx="5" cy="12" r="1.8" />
                <circle cx="12" cy="12" r="1.8" />
                <circle cx="19" cy="12" r="1.8" />
              </svg>
            </button>
            {speedMenuOpen && (
              <div className="absolute bottom-full right-0 z-20 mb-2 min-w-[7.5rem] overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white py-1 shadow-lg">
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
        ) : (
          <div className="h-9 w-9 shrink-0" aria-hidden />
        )}
      </div>
    </div>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MediaPlayerBar } from "@/components/communication/MediaPlayerBar";

const ACCENT = "var(--color-accent-comm)";

/**
 * Lecteur mono-piste aligné sur CO (`AudioSequencePlayer` + `MediaPlayerBar`).
 * - `preload="metadata"` (comme CO) — pas de prefetch auto des gros MP3
 * - src assigné au play (network-first via SW pour `/assets/expression/…`)
 */
export function SingleAudioPlayer({
  src,
  label,
  accent = ACCENT,
}: {
  src: string;
  label?: string;
  accent?: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isSeekingRef = useRef(false);
  const srcRef = useRef(src);

  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [error, setError] = useState(false);

  srcRef.current = src;

  const stop = useCallback(() => {
    const player = audioRef.current;
    if (player) {
      player.pause();
      player.currentTime = 0;
    }
    setPlaying(false);
    setPaused(false);
    setProgress(0);
    setAudioCurrentTime(0);
    setAudioDuration(0);
  }, []);

  const ensurePlayer = useCallback(() => {
    let player = audioRef.current;
    if (player) return player;

    player = new Audio();
    player.preload = "metadata";
    audioRef.current = player;

    player.addEventListener("loadedmetadata", () => {
      const active = audioRef.current;
      setAudioDuration(active && Number.isFinite(active.duration) ? active.duration : 0);
    });
    player.addEventListener("timeupdate", () => {
      if (isSeekingRef.current) return;
      const active = audioRef.current;
      if (!active || !Number.isFinite(active.duration) || active.duration <= 0) {
        setProgress(0);
        setAudioCurrentTime(0);
        return;
      }
      setAudioCurrentTime(active.currentTime);
      setProgress(Math.min(100, (active.currentTime / active.duration) * 100));
    });
    player.addEventListener("ended", () => {
      setPlaying(false);
      setPaused(false);
      setProgress(100);
    });
    player.addEventListener("error", () => {
      setPlaying(false);
      setPaused(false);
      setError(true);
    });

    return player;
  }, []);

  useEffect(() => {
    stop();
    setError(false);
    return () => {
      audioRef.current?.pause();
    };
  }, [src, stop]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  function play() {
    setError(false);
    const player = ensurePlayer();
    const nextSrc = srcRef.current;
    if (player.getAttribute("data-src") !== nextSrc) {
      player.src = nextSrc;
      player.setAttribute("data-src", nextSrc);
      player.currentTime = 0;
      setProgress(0);
      setAudioCurrentTime(0);
    }
    player.playbackRate = playbackRate;
    void player
      .play()
      .then(() => {
        setPlaying(true);
        setPaused(false);
      })
      .catch(() => {
        setPlaying(false);
        setError(true);
      });
  }

  function pause() {
    const player = audioRef.current;
    if (player && !player.paused) {
      player.pause();
      setPlaying(false);
      setPaused(true);
    }
  }

  function toggle() {
    if (playing) {
      pause();
      return;
    }
    if (paused) {
      const player = audioRef.current;
      if (player) {
        setError(false);
        player.playbackRate = playbackRate;
        void player
          .play()
          .then(() => {
            setPlaying(true);
            setPaused(false);
          })
          .catch(() => {
            setPlaying(false);
            setError(true);
          });
        return;
      }
    }
    play();
  }

  function restart() {
    stop();
    play();
  }

  function seekTo(percent: number) {
    const player = audioRef.current;
    if (!player || !Number.isFinite(player.duration) || player.duration <= 0) return;
    isSeekingRef.current = true;
    const nextTime = (percent / 100) * player.duration;
    player.currentTime = nextTime;
    setProgress(percent);
    setAudioCurrentTime(nextTime);
    isSeekingRef.current = false;
  }

  return (
    <div className="mb-3">
      {label ? (
        <p className="mb-1 text-[10px] font-bold uppercase tracking-wide" style={{ color: accent }}>
          {label}
        </p>
      ) : null}
      <MediaPlayerBar
        playing={playing}
        paused={paused}
        progress={progress}
        currentTimeSec={audioCurrentTime}
        durationSec={audioDuration}
        canSeek={audioDuration > 0}
        onToggle={toggle}
        onSeek={seekTo}
        onRestart={restart}
        playbackRate={playbackRate}
        onSpeedChange={setPlaybackRate}
        accentColor={accent}
      />
      {error ? (
        <p className="mt-1 text-xs font-semibold text-red-600">Audio indisponible</p>
      ) : null}
    </div>
  );
}

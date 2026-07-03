"use client";

import { useEffect, useRef, useState } from "react";
import { MediaPlayerBar } from "@/components/communication/MediaPlayerBar";

const LECTURE_ACCENT = "var(--color-accent-lecture)";

function estimateDurationMs(text: string, rate: number) {
  return Math.max(1200, (text.length / (11 * rate)) * 1000);
}

function speakAsync(
  text: string,
  rate: number,
  signal: { cancelled: boolean },
  onProgress: (percent: number) => void,
) {
  return new Promise<void>((resolve) => {
    if (signal.cancelled || typeof window === "undefined") {
      resolve();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-CH";
    utterance.rate = rate;
    const estMs = estimateDurationMs(text, rate);
    const start = Date.now();
    const timer = window.setInterval(() => {
      onProgress(Math.min(99, ((Date.now() - start) / estMs) * 100));
    }, 80);
    utterance.onend = () => {
      window.clearInterval(timer);
      onProgress(100);
      resolve();
    };
    utterance.onerror = () => {
      window.clearInterval(timer);
      resolve();
    };
    window.speechSynthesis.speak(utterance);
  });
}

type TtsPhrasePlayerProps = {
  text: string;
  accentColor?: string;
};

export function TtsPhrasePlayer({ text, accentColor = LECTURE_ACCENT }: TtsPhrasePlayerProps) {
  const cancelRef = useRef({ cancelled: false });
  const playingRef = useRef(false);

  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

  const durationSec = estimateDurationMs(text, playbackRate) / 1000;
  const currentSec = (progress / 100) * durationSec;

  useEffect(() => {
    cancelRef.current.cancelled = true;
    window.speechSynthesis?.cancel();
    playingRef.current = false;
    setPlaying(false);
    setPaused(false);
    setProgress(0);
    cancelRef.current = { cancelled: false };
    return () => {
      cancelRef.current.cancelled = true;
      window.speechSynthesis?.cancel();
    };
  }, [text]);

  function stop() {
    cancelRef.current.cancelled = true;
    window.speechSynthesis?.cancel();
    playingRef.current = false;
    setPlaying(false);
    setPaused(false);
    setProgress(0);
    cancelRef.current = { cancelled: false };
  }

  async function play() {
    if (playingRef.current || !text.trim()) return;
    playingRef.current = true;
    setPaused(false);
    setPlaying(true);
    await speakAsync(text, playbackRate, cancelRef.current, setProgress);
    playingRef.current = false;
    setPlaying(false);
    if (!cancelRef.current.cancelled) setProgress(0);
  }

  function toggle() {
    if (playing) {
      cancelRef.current.cancelled = true;
      window.speechSynthesis?.cancel();
      playingRef.current = false;
      setPlaying(false);
      setPaused(true);
      return;
    }
    if (paused) {
      setPaused(false);
      void play();
      return;
    }
    void play();
  }

  function restart() {
    stop();
    void play();
  }

  function seekTo(percent: number) {
    if (percent < 50 && !playing && !paused) return;
    stop();
    setProgress(percent);
    if (percent < 100) void play();
  }

  return (
    <MediaPlayerBar
      playing={playing}
      paused={paused}
      progress={progress}
      currentTimeSec={currentSec}
      durationSec={durationSec}
      canSeek={Boolean(text.trim())}
      onToggle={toggle}
      onSeek={seekTo}
      onRestart={restart}
      playbackRate={playbackRate}
      onSpeedChange={setPlaybackRate}
      accentColor={accentColor}
      playAriaLabel="Écouter la phrase"
      pauseAriaLabel="Pause"
    />
  );
}

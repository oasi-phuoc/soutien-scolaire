"use client";

import { useEffect, useRef, useState } from "react";
import { MediaPlayerBar } from "@/components/communication/MediaPlayerBar";
import { cancelSpeech, estimateSpeechDurationMs, speakPhraseAsync } from "@/lib/utils/speech";

const LECTURE_ACCENT = "var(--color-accent-lecture)";

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

  const durationSec = estimateSpeechDurationMs(text, playbackRate) / 1000;
  const currentSec = (progress / 100) * durationSec;

  useEffect(() => {
    cancelRef.current.cancelled = true;
    cancelSpeech();
    playingRef.current = false;
    setPlaying(false);
    setPaused(false);
    setProgress(0);
    cancelRef.current = { cancelled: false };
    return () => {
      cancelRef.current.cancelled = true;
      cancelSpeech();
    };
  }, [text]);

  function stop() {
    cancelRef.current.cancelled = true;
    cancelSpeech();
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
    await speakPhraseAsync(text, playbackRate, cancelRef.current, setProgress);
    playingRef.current = false;
    setPlaying(false);
    if (!cancelRef.current.cancelled) setProgress(0);
  }

  function toggle() {
    if (playing) {
      cancelRef.current.cancelled = true;
      cancelSpeech();
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

"use client";

import { useEffect, useState } from "react";

import {
  LECTURE_WORD_MAX_LENGTH_DESKTOP,
  LECTURE_WORD_MAX_LENGTH_MOBILE,
} from "@/lib/curriculum/word-pool";

const DESKTOP_MQ = "(min-width: 768px)";

/** Longueur max des mots affichés dans WordSpotter / SoundPicker selon mobile ou bureau. */
export function useLectureWordMaxLength(
  mobileMax = LECTURE_WORD_MAX_LENGTH_MOBILE,
): number {
  const [maxLength, setMaxLength] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia(DESKTOP_MQ).matches) {
      return LECTURE_WORD_MAX_LENGTH_DESKTOP;
    }
    return mobileMax;
  });

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    const update = () => setMaxLength(mq.matches ? LECTURE_WORD_MAX_LENGTH_DESKTOP : mobileMax);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [mobileMax]);

  return maxLength;
}

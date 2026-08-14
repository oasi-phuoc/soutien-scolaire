"use client";

import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from "react";
import { randomLetterPronounceSteps } from "@/lib/curriculum/word-pool";
import { PronounceWordList, type PronounceWordListHandle } from "./PronounceWordList";

export interface LetterPronounceHandle {
  reset: () => void;
}

interface Props {
  letterLower: string;
  wordCount?: number;
}

export const LetterPronounce = forwardRef<LetterPronounceHandle, Props>(
  function LetterPronounce({ letterLower, wordCount = 5 }, ref) {
    const [refreshSeed, setRefreshSeed] = useState(0);
    const listRef = useRef<PronounceWordListHandle>(null);

    const steps = useMemo(() => {
      void refreshSeed;
      return randomLetterPronounceSteps(letterLower, wordCount);
    }, [letterLower, wordCount, refreshSeed]);

    const reset = useCallback(() => {
      setRefreshSeed((s) => s + 1);
    }, []);

    useImperativeHandle(ref, () => ({ reset }), [reset]);

    return (
      <PronounceWordList
        key={refreshSeed}
        ref={listRef}
        steps={steps}
        title="Prononcer les mots"
        consigne="Écoutez et répétez les mots."
      />
    );
  },
);

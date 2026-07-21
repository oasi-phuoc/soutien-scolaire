"use client";

import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from "react";
import { randomComplexGraphemePronounceSteps } from "@/lib/curriculum/word-pool";
import { PronounceWordList, type PronounceWordListHandle } from "./PronounceWordList";

export interface ComplexGraphemePronounceHandle {
  reset: () => void;
}

interface Props {
  graphemeLabel: string;
  wordCount?: number;
}

export const ComplexGraphemePronounce = forwardRef<ComplexGraphemePronounceHandle, Props>(
  function ComplexGraphemePronounce({ graphemeLabel, wordCount = 5 }, ref) {
    const [refreshSeed, setRefreshSeed] = useState(0);
    const listRef = useRef<PronounceWordListHandle>(null);

    const steps = useMemo(() => {
      void refreshSeed;
      return randomComplexGraphemePronounceSteps(graphemeLabel, wordCount);
    }, [graphemeLabel, wordCount, refreshSeed]);

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
        consigne="Prononcez chaque mot à voix haute."
      />
    );
  },
);

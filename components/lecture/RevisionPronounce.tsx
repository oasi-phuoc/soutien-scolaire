"use client";

import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import type { PronStep } from "@/lib/curriculum/lecture-data";
import { PronounceWordList, type PronounceWordListHandle } from "./PronounceWordList";

export interface RevisionPronounceHandle {
  reset: () => void;
  validate: () => void;
}

interface Props {
  steps: PronStep[];
  onValidated?: (score: number, max: number) => void;
  shouldValidate?: boolean;
}

export const RevisionPronounce = forwardRef<RevisionPronounceHandle, Props>(
  function RevisionPronounce({ steps, onValidated, shouldValidate }, ref) {
    const listRef = useRef<PronounceWordListHandle>(null);

    const reset = useCallback(() => {
      listRef.current?.reset();
    }, []);

    const validate = useCallback(() => {
      listRef.current?.validate();
    }, []);

    useImperativeHandle(ref, () => ({ reset, validate }), [reset, validate]);

    return (
      <PronounceWordList
        ref={listRef}
        steps={steps}
        onValidated={onValidated}
        shouldValidate={shouldValidate}
      />
    );
  },
);

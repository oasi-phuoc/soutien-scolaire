"use client";
import { useEffect } from "react";
import type { VocabTheme } from "@/lib/curriculum/vocabulary-data";
import { EvalAnnounceScreen } from "@/components/ui/EvalAnnounceScreen";

interface Props {
  theme: VocabTheme;
  onCanValidateChange: (can: boolean) => void;
  onStart: () => void;
}

export function EvalAnnounce({ theme, onCanValidateChange, onStart }: Props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(false); }, []);

  return (
    <EvalAnnounceScreen
      accent="var(--color-accent-fr)"
      lessonTitle={theme.title}
      exerciseCount={6}
      minutes={10}
      onStart={onStart}
    />
  );
}

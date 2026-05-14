"use client";

import { useRouter } from "next/navigation";
import {
  loadLectureProgress,
  saveLectureProgress,
  markCompleted,
  getItemState,
  SEQUENCE,
} from "@/lib/progress/lecture-progress";
import type { ItemState } from "@/lib/progress/lecture-progress";

type ItemType = "letter" | "revision" | "evaluation";

interface Props {
  type: ItemType;
  id: string;
}

function getNextHref(type: ItemType, id: string): string {
  const idx = SEQUENCE.findIndex((s) => s.type === type && s.id === id);
  if (idx >= 0 && idx < SEQUENCE.length - 1) {
    const nx = SEQUENCE[idx + 1]!;
    if (nx.type === "letter") return `/lecture/${nx.id}`;
    if (nx.type === "revision") return `/lecture/revision/${nx.id}`;
    if (nx.type === "evaluation") return `/lecture/evaluation`;
  }
  return "/lecture";
}

export function CompleteButton({ type, id }: Props) {
  const router = useRouter();

  function handle() {
    const progress = loadLectureProgress();
    const current: ItemState = getItemState(progress, type, id);

    if (current === "locked") return;

    const next = markCompleted(progress, type, id);
    saveLectureProgress(next);

    const href = getNextHref(type, id);
    router.push(href);
  }

  return (
    <button
      type="button"
      onClick={handle}
      className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-lg)] bg-[var(--color-accent-lecture)] px-6 py-4 text-base font-bold text-white shadow-sm active:opacity-80 transition-opacity"
    >
      Terminer et continuer
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
}

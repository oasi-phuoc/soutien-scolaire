"use client";

import { useRouter } from "next/navigation";
import {
  loadLectureProgress,
  saveLectureProgress,
  markSubmoduleCompleted,
  markRevisionCompleted,
  SUBMODULE_SEQUENCE,
} from "@/lib/progress/lecture-progress";
import { getLectureModuleForLetter } from "@/lib/curriculum/lecture-data";

interface Props {
  type: "letter" | "revision" | "evaluation";
  id: string;
}

export function CompleteButton({ type, id }: Props) {
  const router = useRouter();

  function handle() {
    if (type === "revision") {
      const progress = loadLectureProgress();
      saveLectureProgress(markRevisionCompleted(progress, id));
      router.push("/lecture");
      return;
    }

    if (type !== "letter") {
      router.push("/lecture");
      return;
    }

    const mod = getLectureModuleForLetter(id);
    if (!mod) {
      router.push("/lecture");
      return;
    }

    const progress = loadLectureProgress();
    const next = markSubmoduleCompleted(progress, mod.id, id);
    saveLectureProgress(next);

    const idx = SUBMODULE_SEQUENCE.findIndex(
      (s) => s.moduleId === mod.id && s.letterId === id,
    );
    if (idx >= 0 && idx < SUBMODULE_SEQUENCE.length - 1) {
      const nx = SUBMODULE_SEQUENCE[idx + 1]!;
      router.push(`/lecture/${nx.moduleId}/${nx.letterId}`);
    } else {
      router.push("/lecture");
    }
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

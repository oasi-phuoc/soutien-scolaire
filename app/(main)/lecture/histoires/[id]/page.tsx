"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { getStory } from "@/lib/curriculum/lecture-data";
import { speak } from "@/lib/utils/speech";

type Props = { params: Promise<{ id: string }> };

export default function StoryPage({ params }: Props) {
  const { id } = use(params);
  const story = getStory(id);
  if (!story) notFound();

  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-8 pb-32">
      <div className="flex items-center gap-3">
        <Link
          href="/lecture/histoires"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
          aria-label="Retour aux histoires"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-lecture)]">
            Histoire · {story.level}
          </p>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">{story.title}</h1>
        </div>
      </div>

      <button
        type="button"
        onClick={() => speak(story.sentences.join(". "))}
        className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-accent-lecture)]/40 bg-[var(--color-accent-lecture)]/8 px-4 py-3 text-sm font-semibold text-[var(--color-accent-lecture)] transition-colors hover:bg-[var(--color-accent-lecture)]/15"
      >
        <SpeakerIcon />
        Écouter toute l&apos;histoire
      </button>

      <ul className="space-y-3">
        {story.sentences.map((sentence, i) => (
          <li
            key={i}
            className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-4"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-lecture)]/10 text-xs font-bold text-[var(--color-accent-lecture)]">
              {i + 1}
            </span>
            <p className="flex-1 text-base leading-relaxed text-[var(--color-text-primary)]">
              {sentence}
            </p>
            <button
              type="button"
              onClick={() => speak(sentence)}
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-text-primary)] text-white active:opacity-75"
              aria-label={`Écouter la phrase ${i + 1}`}
            >
              <SpeakerIcon size={13} />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

function SpeakerIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}

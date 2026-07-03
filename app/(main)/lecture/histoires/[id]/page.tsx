"use client";

import { use, useMemo } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { STORIES, stripAnnotations } from "@/lib/curriculum/lecture-data";
import { TtsSequencePlayer } from "@/components/communication/TtsSequencePlayer";
import { StorySentenceRow } from "@/components/lecture/StorySentenceRow";

const LECTURE_ACCENT = "var(--color-accent-lecture)";

export default function StoryReaderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const story = STORIES.find((s) => s.id === id);
  if (!story) notFound();

  const sequenceItems = useMemo(
    () =>
      story.sentences.map((sentence, i) => ({
        id: String(i),
        text: stripAnnotations(sentence),
        label: `Phrase ${i + 1}`,
      })),
    [story.sentences],
  );

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <Link
        href="/lecture/histoires"
        className="mb-4 inline-flex items-center gap-1 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-lecture)]"
      >
        ← Retour aux histoires
      </Link>

      <h1 className="mb-1 text-xl font-bold text-[var(--color-text-primary)]">
        {story.title}
      </h1>
      <p className="mb-6 text-sm text-[var(--color-text-secondary)]">
        Lis chaque phrase à voix haute. Écoute le modèle avec le lecteur, puis enregistre-toi avec le micro.
      </p>

      <div className="mb-6 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-lecture)]">
          Écouter toute l&apos;histoire
        </p>
        <TtsSequencePlayer items={sequenceItems} accentColor={LECTURE_ACCENT} />
      </div>

      <ul className="space-y-4">
        {story.sentences.map((sentence, i) => (
          <StorySentenceRow
            key={i}
            index={i}
            sentence={sentence}
            plainText={stripAnnotations(sentence)}
          />
        ))}
      </ul>
    </div>
  );
}

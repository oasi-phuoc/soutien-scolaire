import Link from "next/link";
import { notFound } from "next/navigation";
import { getRevision } from "@/lib/curriculum/lecture-data";
import { RevisionMixedGrid } from "@/components/lecture/RevisionMixedGrid";
import { RevisionSoundDiscrim } from "@/components/lecture/RevisionSoundDiscrim";
import { RevisionWordRead } from "@/components/lecture/RevisionWordRead";

type Props = { params: Promise<{ pair: string }> };

export default async function RevisionPage({ params }: Props) {
  const { pair } = await params;
  const data = getRevision(pair);
  if (!data) notFound();

  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-8 px-4 py-8 pb-32">
      <div className="flex items-center gap-3">
        <Link
          href="/lecture"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
          aria-label="Retour"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-lecture)]">
            REVIEW
          </p>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">{data.title}</h1>
        </div>
      </div>

      <RevisionMixedGrid
        letterA={data.letterA}
        letterB={data.letterB}
        phonemeA={data.phonemeA}
        phonemeB={data.phonemeB}
        grid={data.mixedGrid}
      />

      <RevisionSoundDiscrim
        phonemeA={data.phonemeA}
        phonemeB={data.phonemeB}
        words={data.soundWords}
      />

      <RevisionWordRead words={data.readWords} />
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { getLetterData } from "@/lib/curriculum/lecture-data";
import { DiscoverSound } from "@/components/lecture/DiscoverSound";
import { VowelRecall } from "@/components/lecture/VowelRecall";
import { LetterGrid } from "@/components/lecture/LetterGrid";
import { WordSpotter } from "@/components/lecture/WordSpotter";
import { SoundPicker } from "@/components/lecture/SoundPicker";
import { SyllableGrid } from "@/components/lecture/SyllableGrid";
import { PronunciationChain } from "@/components/lecture/PronunciationChain";
import { CompleteButton } from "@/components/lecture/CompleteButton";

type Props = { params: Promise<{ letter: string }> };

export default async function LetterPage({ params }: Props) {
  const { letter } = await params;
  const data = getLetterData(letter);
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
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-lecture)]">
            Lecture · {data.type === "vowel" ? "Voyelle" : "Consonne"}
          </p>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            {data.letter} / {data.letterLower} — {data.phoneme}
          </h1>
        </div>
      </div>

      <DiscoverSound
        phoneme={data.phoneme}
        letter={data.letter}
        letterLower={data.letterLower}
        exampleWord={data.exampleWord}
      />

      {data.type === "consonant" && <VowelRecall />}

      <LetterGrid target={data.letter} grid={data.upperGrid} isUppercase />
      <LetterGrid target={data.letterLower} grid={data.lowerGrid} isUppercase={false} />

      {data.type === "vowel" ? (
        <>
          <WordSpotter target={data.letter} words={data.upperWords} isUppercase />
          <WordSpotter target={data.letterLower} words={data.lowerWords} isUppercase={false} />
          <SoundPicker phoneme={data.phoneme} items={data.soundItems} mode="image" />
          <SoundPicker phoneme={data.phoneme} items={data.soundItems} mode="audio" />
          <PronunciationChain phoneme={data.phoneme} chain={data.pronunciationChain} />
        </>
      ) : (
        <>
          <WordSpotter target={data.letter} words={data.upperWordsSet1} isUppercase />
          <WordSpotter target={data.letter} words={data.upperWordsSet2} isUppercase />
          <WordSpotter target={data.letterLower} words={data.lowerWords} isUppercase={false} />
          <SoundPicker phoneme={data.phoneme} items={data.soundItems} mode="image" />
          <SoundPicker phoneme={data.phoneme} items={data.soundItems} mode="audio" />
          <SyllableGrid syllables={data.syllableGrid} />
          <PronunciationChain phoneme={data.phoneme} chain={data.pronunciationChain} />
        </>
      )}

      <CompleteButton type="letter" id={letter} />
    </main>
  );
}

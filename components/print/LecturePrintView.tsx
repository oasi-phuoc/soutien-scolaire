"use client";

import type { ReactNode } from "react";
import type { PrintExercise } from "@/components/ui/PrintConfigSheet";
import type { PrintBundle } from "@/components/print/buildPrintBundle";
import { AudioQrImage } from "@/components/print/PrintAudioQrRow";
import {
  getLectureModule,
  lessonPhonemeLabel,
  type ConsonantData,
  type LetterData,
  type MonosyllableLessonData,
  type MultisyllableLessonData,
  type PronStep,
  type SoundItem,
  type SyllableLessonData,
  type VowelData,
  type ComplexSoundLessonData,
} from "@/lib/curriculum/lecture-data";
import {
  getLectureWordImagePath,
  getSyllableAudioPath,
  getWordAudioPath,
  hasLectureWordImage,
} from "@/lib/utils/audio";
import { complexTargets, normalizeGraph } from "@/lib/utils/complex-grapheme";
import {
  complexGraphemePronouncePool,
  letterPronouncePool,
  wordsForComplexGrapheme,
  wordsPoolForLessonGrid,
} from "@/lib/curriculum/word-pool";
import { pedagogicSyllable } from "@/lib/curriculum/syllabify";
import { lectureLessonTitle } from "@/lib/print/catalog";

// ── RNG déterministe (aperçu = corrigé = impression) ──────────────────────────

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function sample<T>(arr: T[], n: number, rng: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a.slice(0, Math.min(n, a.length));
}

// ── Briques QR ─────────────────────────────────────────────────────────────────

/** QR audio d'un mot (fallback voix de synthèse sur la page /ecoute). */
function WordQr({ word, label, size = 64 }: { word: string; label?: string; size?: number }) {
  return (
    <AudioQrImage
      audio={getWordAudioPath(word)}
      label={label ?? word}
      tts={word}
      size={size}
    />
  );
}

function SyllableQr({ syllable, size = 56 }: { syllable: string; size?: number }) {
  return (
    <AudioQrImage
      audio={getSyllableAudioPath(syllable)}
      label={syllable}
      tts={syllable}
      size={size}
    />
  );
}

// ── Découverte (théorie) ───────────────────────────────────────────────────────

function LectureDiscoverPrint({
  upper,
  lower,
  phoneme,
  exampleWord,
  exampleImagePath,
  exampleAudio,
}: {
  upper: string;
  lower?: string;
  phoneme: string;
  exampleWord?: string;
  exampleImagePath?: string;
  exampleAudio?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-6 text-black">
      <div className="flex items-center gap-3">
        <div className="flex h-24 min-w-24 items-center justify-center rounded-xl border-2 border-[var(--color-theme)] px-3">
          <span className="text-4xl font-bold text-[var(--color-theme)]">
            {upper}
            {lower ? ` ${lower}` : ""}
          </span>
        </div>
        {phoneme ? (
          <span className="rounded-full border border-zinc-300 px-3 py-1 text-lg font-bold">
            {phoneme}
          </span>
        ) : null}
      </div>
      {exampleWord ? (
        <div className="flex items-center gap-3">
          {exampleImagePath ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={exampleImagePath}
              alt={exampleWord}
              className="h-20 w-20 rounded-lg border border-zinc-200 object-contain"
            />
          ) : null}
          <span className="text-2xl font-bold">{exampleWord}</span>
          {exampleAudio ? (
            <AudioQrImage audio={exampleAudio} label={exampleWord} tts={exampleWord} size={72} />
          ) : (
            <WordQr word={exampleWord} size={72} />
          )}
        </div>
      ) : null}
      <p className="w-full text-xs text-zinc-600">
        Scanne le QR code avec un téléphone pour écouter le mot.
      </p>
    </div>
  );
}

// ── Grille de lettres / graphèmes à entourer ──────────────────────────────────

function LetterGridPrint({
  cells,
  isTarget,
  correction,
  cols = 5,
}: {
  cells: string[];
  isTarget: (cell: string) => boolean;
  correction?: boolean;
  cols?: number;
}) {
  return (
    <div
      className="grid w-full max-w-[480px] gap-1.5"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {cells.map((cell, i) => {
        const hit = correction && isTarget(cell);
        return (
          <div
            key={i}
            className={`flex h-10 items-center justify-center rounded-md border text-lg font-bold ${
              hit
                ? "border-2 border-amber-500 bg-amber-50 text-amber-700"
                : "border-zinc-300 text-black"
            }`}
          >
            {cell}
          </div>
        );
      })}
    </div>
  );
}

// ── Mots à entourer (lettre / graphème) + QR audio ────────────────────────────

type Segment = { text: string; hit: boolean };

function letterSegments(word: string, letterLower: string): Segment[] {
  return [...word].map((ch) => ({
    text: ch,
    hit: normalizeGraph(ch) === letterLower,
  }));
}

function graphemeSegments(word: string, targets: string[]): Segment[] {
  const norm = normalizeGraph(word);
  const sorted = [...targets].sort((a, b) => b.length - a.length);
  const hits = Array<boolean>(word.length).fill(false);
  for (let i = 0; i < norm.length; i++) {
    for (const t of sorted) {
      if (norm.startsWith(t, i)) {
        for (let j = i; j < i + t.length && j < word.length; j++) hits[j] = true;
        i += t.length - 1;
        break;
      }
    }
  }
  return [...word].map((ch, i) => ({ text: ch, hit: hits[i] ?? false }));
}

function WordCirclePrint({
  words,
  segmentsOf,
  correction,
}: {
  words: string[];
  segmentsOf: (word: string) => Segment[];
  correction?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-start gap-3">
      {words.map((word) => {
        const segments = segmentsOf(word);
        const contains = segments.some((s) => s.hit);
        return (
          <div
            key={word}
            className={`flex w-[126px] flex-col items-center gap-1.5 rounded-lg border p-2 ${
              correction && !contains ? "border-zinc-200 opacity-50" : "border-zinc-300"
            }`}
          >
            <span className="text-lg font-bold tracking-wide text-black">
              {correction
                ? segments.map((seg, i) =>
                    seg.hit ? (
                      <span key={i} className="rounded bg-amber-100 px-0.5 text-amber-700">
                        {seg.text}
                      </span>
                    ) : (
                      <span key={i}>{seg.text}</span>
                    ),
                  )
                : word}
            </span>
            <WordQr word={word} size={56} />
          </div>
        );
      })}
    </div>
  );
}

// ── J'entends le son (images + QR + OUI/NON) ──────────────────────────────────

function SoundCheckPrint({
  items,
  correction,
}: {
  items: SoundItem[];
  correction?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-start gap-3">
      {items.map((item, i) => {
        const hasImage = hasLectureWordImage(item.label);
        return (
          <div
            key={`${item.label}-${i}`}
            className="flex w-[104px] flex-col items-center gap-1.5 rounded-lg border border-zinc-300 p-2"
          >
            {hasImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={getLectureWordImagePath(item.label)}
                alt=""
                className="h-14 w-14 object-contain"
              />
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded bg-zinc-100">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-500" aria-hidden>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
                  <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                </svg>
              </div>
            )}
            <WordQr word={item.label.toLowerCase()} label={`Mot ${i + 1}`} size={56} />
            {correction ? (
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[11px] font-bold text-amber-700">
                  {item.hasSound ? "OUI" : "NON"}
                </span>
                <span className="text-[10px] text-zinc-600">{item.label.toLowerCase()}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-[11px] font-semibold text-black">
                <span className="flex items-center gap-1">
                  <span className="inline-block h-3.5 w-3.5 rounded-sm border border-zinc-400" /> OUI
                </span>
                <span className="flex items-center gap-1">
                  <span className="inline-block h-3.5 w-3.5 rounded-sm border border-zinc-400" /> NON
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Syllabes à lire + QR ───────────────────────────────────────────────────────

function SyllableReadPrint({ items, correction }: { items: string[]; correction?: boolean }) {
  if (correction) {
    return (
      <p className="text-sm leading-relaxed text-black">
        {items.join(" · ")}
      </p>
    );
  }
  return (
    <div className="flex flex-wrap items-start gap-2">
      {items.map((syll, i) => (
        <div
          key={`${syll}-${i}`}
          className="flex w-[100px] flex-col items-center gap-1 rounded-lg border border-zinc-300 p-2"
        >
          <span className="text-xl font-bold tracking-wide text-black">{syll}</span>
          <SyllableQr syllable={syll} size={56} />
        </div>
      ))}
    </div>
  );
}

// ── Cartes mots (image + mot + QR) ────────────────────────────────────────────

function WordReadCardsPrint({
  words,
  withImages,
  showSyllables,
  correction,
}: {
  words: string[];
  withImages?: boolean;
  /** Corrigé : montre le découpage syllabique (L8). */
  showSyllables?: boolean;
  correction?: boolean;
}) {
  if (correction) {
    return (
      <p className="text-sm leading-relaxed text-black">
        {words
          .map((w) => (showSyllables ? pedagogicSyllable(w) : w))
          .join(" · ")}
      </p>
    );
  }
  return (
    <div className="flex flex-wrap items-start gap-3">
      {words.map((word) => {
        const image = withImages && hasLectureWordImage(word);
        return (
          <div
            key={word}
            className="flex w-[126px] flex-col items-center gap-1.5 rounded-lg border border-zinc-300 p-2"
          >
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={getLectureWordImagePath(word)}
                alt=""
                className="h-14 w-14 object-contain"
              />
            ) : null}
            <span className="text-center text-lg font-bold leading-tight text-black">{word}</span>
            <WordQr word={word} size={56} />
          </div>
        );
      })}
    </div>
  );
}

// ── Prononcer (phonème → syllabe → mot + QR) ──────────────────────────────────

function PronouncePrint({ steps, correction }: { steps: PronStep[]; correction?: boolean }) {
  if (correction) {
    return (
      <p className="text-sm leading-relaxed text-black">
        {steps.map((s) => `${s.phoneme} → ${s.syllable} → ${s.word}`).join(" · ")}
      </p>
    );
  }
  return (
    <div className="space-y-2">
      {steps.map((step, i) => (
        <div key={`${step.word}-${i}`} className="flex items-center gap-3 rounded-lg border border-zinc-300 px-3 py-1.5">
          <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-theme)]">{i + 1}.</span>
          <span className="min-w-10 text-lg font-bold text-[var(--color-theme)]">{step.phoneme}</span>
          <span className="text-zinc-400">→</span>
          <span className="min-w-16 text-lg font-semibold text-black">{step.syllable}</span>
          <span className="text-zinc-400">→</span>
          <span className="flex-1 text-lg font-bold text-black">{step.word}</span>
          <WordQr word={step.word} size={52} />
        </div>
      ))}
    </div>
  );
}

// ── Assemblage des exercices ───────────────────────────────────────────────────

function consigne(text: string): ReactNode {
  return <p className="mb-2 text-sm font-semibold text-black">{text}</p>;
}

function makeExercise(
  id: string,
  label: string,
  instruction: string,
  body: (correction: boolean) => ReactNode,
): PrintExercise {
  return {
    id,
    label,
    preview: (
      <div className="text-black">
        {consigne(instruction)}
        {body(false)}
      </div>
    ),
    correctionPreview: (
      <div className="text-black">
        {consigne(instruction)}
        {body(true)}
      </div>
    ),
  };
}

function letterExercises(
  data: VowelData | ConsonantData,
  rng: () => number,
): PrintExercise[] {
  const phoneme = lessonPhonemeLabel(data.letterLower, data.phoneme);
  const upperWords =
    data.type === "consonant"
      ? [...data.upperWordsSet1, ...data.upperWordsSet2]
      : data.upperWords;
  const pool = letterPronouncePool(data.letterLower);
  const pronSteps = pool.length >= 4 ? sample(pool, 6, rng) : data.pronunciationChain;

  const exercises: PrintExercise[] = [
    makeExercise("grid-upper", "Majuscules", `Entoure toutes les lettres ${data.letter}.`, (c) => (
      <LetterGridPrint cells={data.upperGrid} isTarget={(cell) => cell === data.letter} correction={c} />
    )),
    makeExercise("grid-lower", "Minuscules", `Entoure toutes les lettres ${data.letterLower}.`, (c) => (
      <LetterGridPrint cells={data.lowerGrid} isTarget={(cell) => cell === data.letterLower} correction={c} />
    )),
    makeExercise(
      "word-upper",
      "Mots (majuscules)",
      `Entoure les mots qui contiennent la lettre ${data.letter}. Scanne le QR code pour écouter chaque mot.`,
      (c) => (
        <WordCirclePrint
          words={upperWords}
          segmentsOf={(w) => letterSegments(w, data.letterLower)}
          correction={c}
        />
      ),
    ),
    makeExercise(
      "word-lower",
      "Mots (minuscules)",
      `Entoure les mots qui contiennent la lettre ${data.letterLower}. Scanne le QR code pour écouter chaque mot.`,
      (c) => (
        <WordCirclePrint
          words={data.lowerWords}
          segmentsOf={(w) => letterSegments(w, data.letterLower)}
          correction={c}
        />
      ),
    ),
    makeExercise(
      "sound-check",
      "J'entends le son",
      `Scanne le QR code, écoute le mot et coche OUI si tu entends le son ${phoneme}.`,
      (c) => <SoundCheckPrint items={data.soundItems} correction={c} />,
    ),
  ];

  if (data.type === "consonant" && data.syllableGrid.length > 0) {
    exercises.push(
      makeExercise(
        "syllables",
        "Syllabes",
        "Lis chaque syllabe à voix haute. Scanne le QR code pour vérifier.",
        (c) => <SyllableReadPrint items={data.syllableGrid} correction={c} />,
      ),
    );
  }

  if (pronSteps.length > 0) {
    exercises.push(
      makeExercise(
        "pronounce",
        "Prononcer",
        "Lis le son, puis la syllabe, puis le mot. Scanne le QR code pour vérifier.",
        (c) => <PronouncePrint steps={pronSteps} correction={c} />,
      ),
    );
  }

  return exercises;
}

function syllableExercises(data: SyllableLessonData): PrintExercise[] {
  return data.grids.map((grid) =>
    makeExercise(
      grid.key,
      grid.label,
      "Lis chaque syllabe à voix haute. Scanne le QR code pour vérifier.",
      (c) => <SyllableReadPrint items={grid.items} correction={c} />,
    ),
  );
}

function monosyllableExercises(
  data: MonosyllableLessonData,
  rng: () => number,
): PrintExercise[] {
  const isToolWords = data.letterLower === "outils";
  return data.grids.map((grid) => {
    const pool = grid.items.length
      ? grid.items
      : wordsPoolForLessonGrid("monosyllable", data.letterLower, grid.key);
    const words = isToolWords ? pool : sample(pool, 10, rng);
    return makeExercise(
      grid.key,
      grid.label,
      "Lis chaque mot à voix haute. Scanne le QR code pour vérifier.",
      (c) => <WordReadCardsPrint words={words} withImages={!isToolWords} correction={c} />,
    );
  });
}

function multisyllableExercises(
  data: MultisyllableLessonData,
  rng: () => number,
): PrintExercise[] {
  return data.grids.map((grid) => {
    const pool = grid.items.length
      ? grid.items
      : wordsPoolForLessonGrid("multisyllable", data.letterLower, grid.key);
    const words = sample(pool, 10, rng);
    return makeExercise(
      grid.key,
      grid.label,
      "Lis chaque mot à voix haute. Scanne le QR code pour vérifier.",
      (c) => <WordReadCardsPrint words={words} withImages showSyllables correction={c} />,
    );
  });
}

function complexSoundExercises(
  data: ComplexSoundLessonData,
  rng: () => number,
): PrintExercise[] {
  const targets = complexTargets(data.letter);
  const isTarget = (cell: string) => targets.includes(normalizeGraph(cell));
  const words = sample(wordsForComplexGrapheme(data.letter, 12), 8, rng);
  const pool = complexGraphemePronouncePool(data.letter);
  const pronSteps = sample(pool, 6, rng);

  const exercises: PrintExercise[] = [
    makeExercise("grid-upper", "Majuscules", `Entoure le son ${data.title}.`, (c) => (
      <LetterGridPrint cells={data.upperGrid} isTarget={isTarget} correction={c} />
    )),
    makeExercise("grid-lower", "Minuscules", `Entoure le son ${data.title.toLowerCase()}.`, (c) => (
      <LetterGridPrint cells={data.lowerGrid} isTarget={isTarget} correction={c} />
    )),
  ];

  if (words.length > 0) {
    exercises.push(
      makeExercise(
        "words",
        "Mots",
        `Entoure le son ${data.title} dans chaque mot. Scanne le QR code pour écouter le mot.`,
        (c) => (
          <WordCirclePrint
            words={words}
            segmentsOf={(w) => graphemeSegments(w, targets)}
            correction={c}
          />
        ),
      ),
    );
  }

  if (pronSteps.length > 0) {
    exercises.push(
      makeExercise(
        "pronounce",
        "Prononcer",
        "Lis le son, puis la syllabe, puis le mot. Scanne le QR code pour vérifier.",
        (c) => <PronouncePrint steps={pronSteps} correction={c} />,
      ),
    );
  }

  return exercises;
}

function lectureTheoryPreview(data: LetterData): ReactNode | undefined {
  if (data.type === "vowel" || data.type === "consonant") {
    return (
      <LectureDiscoverPrint
        upper={data.letter}
        lower={data.letterLower}
        phoneme={lessonPhonemeLabel(data.letterLower, data.phoneme)}
        exampleWord={data.exampleWord}
        exampleImagePath={data.exampleImagePath}
        exampleAudio={data.exampleAudioPath}
      />
    );
  }
  if (data.type === "complex-sound") {
    return (
      <LectureDiscoverPrint
        upper={data.title}
        phoneme={data.phoneme}
        exampleWord={data.exampleWord}
        exampleImagePath={data.exampleImagePath}
      />
    );
  }
  return undefined;
}

/** Bundle d'impression lecture — `lessonId` au format `{moduleId}:{letterLower}` (ex. `l1:a`). */
export function buildLectureBundle(lessonId: string, seed: number): PrintBundle | null {
  const sep = lessonId.indexOf(":");
  if (sep === -1) return null;
  const moduleId = lessonId.slice(0, sep);
  const letterLower = lessonId.slice(sep + 1);
  const mod = getLectureModule(moduleId);
  const data = mod?.letters.find((l) => l.letterLower === letterLower);
  if (!mod || !data) return null;

  const rng = mulberry32(seed >>> 0 || 1);

  let exercises: PrintExercise[];
  switch (data.type) {
    case "vowel":
    case "consonant":
      exercises = letterExercises(data, rng);
      break;
    case "syllable":
      exercises = syllableExercises(data);
      break;
    case "monosyllable":
      exercises = monosyllableExercises(data, rng);
      break;
    case "multisyllable":
      exercises = multisyllableExercises(data, rng);
      break;
    case "complex-sound":
      exercises = complexSoundExercises(data, rng);
      break;
  }

  return {
    lessonTitle: lectureLessonTitle(data),
    course: "Lecture",
    accentColor: "var(--color-accent-lecture)",
    theoryPreview: lectureTheoryPreview(data),
    exercises,
  };
}

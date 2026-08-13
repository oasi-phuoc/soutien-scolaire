"use client";

import type { ReactNode } from "react";
import type { PrintExercise } from "@/components/ui/PrintConfigSheet";
import type { PrintBundle } from "@/components/print/buildPrintBundle";
import { AudioQrImage } from "@/components/print/PrintAudioQrRow";
import {
  usePrintColumns,
  usePrintQuestionCount,
  type PrintExerciseColumns,
} from "@/components/print/PrintExerciseLayoutContext";
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
  randomSoundItems,
  randomSoundSyllableItems,
  wordHasPhoneme,
  wordsForComplexGrapheme,
  wordsPoolForLessonGrid,
  type SoundSyllableItem,
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

/** QR audio d'un mot — le libellé du QR ne révèle pas le mot (page /ecoute). */
function WordQr({ word, label = "Audio", size = 64 }: { word: string; label?: string; size?: number }) {
  return (
    <AudioQrImage
      audio={getWordAudioPath(word)}
      label={label}
      tts={word}
      size={size}
    />
  );
}

function SyllableQr({ syllable, size = 56 }: { syllable: string; size?: number }) {
  return (
    <AudioQrImage
      audio={getSyllableAudioPath(syllable)}
      label="Audio"
      tts={syllable}
      size={size}
    />
  );
}

function takeN<T>(items: T[], n: number, rng: () => number): T[] {
  if (items.length === 0 || n <= 0) return [];
  if (n <= items.length) return sample(items, n, rng);
  const out = [...items];
  let i = 0;
  while (out.length < n) {
    out.push(items[i % items.length]!);
    i += 1;
  }
  return out;
}

function shownOf<T>(items: T[], n: number): T[] {
  if (items.length === 0 || n <= 0) return [];
  if (n <= items.length) return items.slice(0, n);
  const out: T[] = [];
  while (out.length < n) out.push(items[out.length % items.length]!);
  return out;
}

function PrintItemGrid({ children }: { children: ReactNode }) {
  const columns = usePrintColumns(5);
  return (
    <div
      className="grid w-full items-start gap-2"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {children}
    </div>
  );
}

/** Bouton cercle (Oui / Non / 1 2 3) — texte centré à l’intérieur. */
function PrintCircleBtn({
  label,
  marked,
}: {
  label: string;
  marked?: boolean;
}) {
  const wide = label.length > 1;
  return (
    <button
      type="button"
      className={`print-choice-btn print-choice-btn--circle inline-flex items-center justify-center rounded-full border-2 font-bold leading-none ${
        wide ? "print-choice-btn--circle-wide" : ""
      } ${
        marked
          ? "print-choice-btn--selected border-amber-500 bg-amber-50 text-amber-700"
          : "border-zinc-400 bg-white text-black"
      }`}
    >
      {label}
    </button>
  );
}

function PrintCard({ children }: { children: ReactNode }) {
  return (
    <div className="print-item-card flex flex-col items-center gap-1.5 rounded-lg border-2 border-zinc-400 bg-white p-2">
      {children}
    </div>
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
  defaultCount,
}: {
  cells: string[];
  isTarget: (cell: string) => boolean;
  correction?: boolean;
  defaultCount?: number;
}) {
  const questionCount = usePrintQuestionCount(defaultCount ?? cells.length);
  const columns = usePrintColumns(5);
  const shown = cells.slice(0, Math.min(questionCount, cells.length));
  const extras: string[] = [];
  if (questionCount > shown.length && cells.length > 0) {
    let i = 0;
    while (shown.length + extras.length < questionCount) {
      extras.push(cells[i % cells.length]!);
      i += 1;
    }
  }
  const all = [...shown, ...extras].slice(0, questionCount);
  return (
    <div
      className="grid w-full gap-1.5"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {all.map((cell, i) => {
        const hit = correction && isTarget(cell);
        return (
          <div
            key={`${cell}-${i}`}
            className={`print-item-card flex h-10 items-center justify-center rounded-md border-2 text-lg font-bold ${
              hit
                ? "border-amber-500 bg-amber-50 text-amber-700"
                : "border-zinc-400 text-black"
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
  const questionCount = usePrintQuestionCount(words.length);
  const shown = shownOf(words, questionCount);
  return (
    <PrintItemGrid>
      {shown.map((word, i) => {
        const segments = segmentsOf(word);
        const contains = segments.some((s) => s.hit);
        return (
          <PrintCard key={`${word}-${i}`}>
            <span className="text-center text-lg font-bold tracking-wide text-black">
              {correction
                ? segments.map((seg, j) =>
                    seg.hit ? (
                      <span key={j} className="rounded bg-amber-100 px-0.5 text-amber-700">
                        {seg.text}
                      </span>
                    ) : (
                      <span key={j}>{seg.text}</span>
                    ),
                  )
                : word}
            </span>
            <WordQr word={word} label={`Audio ${i + 1}`} size={56} />
            {correction && contains ? (
              <span className="text-[10px] font-bold text-amber-700">lettre présente</span>
            ) : null}
          </PrintCard>
        );
      })}
    </PrintItemGrid>
  );
}

// ── J'entends le son (images + QR + OUI/NON) ──────────────────────────────────

function SoundCheckPrint({
  items,
  withImages,
  correction,
}: {
  items: SoundItem[];
  withImages?: boolean;
  correction?: boolean;
}) {
  const questionCount = usePrintQuestionCount(items.length);
  const shown = shownOf(items, questionCount);
  return (
    <PrintItemGrid>
      {shown.map((item, i) => {
        const showImage = Boolean(withImages && hasLectureWordImage(item.label));
        return (
          <PrintCard key={`${item.label}-${i}`}>
            {showImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={getLectureWordImagePath(item.label)}
                alt=""
                className="h-14 w-14 object-contain"
              />
            ) : null}
            <WordQr word={item.label.toLowerCase()} label={`Audio ${i + 1}`} size={56} />
            <div className="flex items-center justify-center gap-1.5">
              <PrintCircleBtn label="Oui" marked={correction && item.hasSound} />
              <PrintCircleBtn label="Non" marked={correction && !item.hasSound} />
            </div>
          </PrintCard>
        );
      })}
    </PrintItemGrid>
  );
}

function SoundSyllablePrint({
  items,
  withImages,
  correction,
}: {
  items: SoundSyllableItem[];
  withImages?: boolean;
  correction?: boolean;
}) {
  const questionCount = usePrintQuestionCount(items.length);
  const shown = shownOf(items, questionCount);
  return (
    <PrintItemGrid>
      {shown.map((item, i) => {
        const showImage = Boolean(withImages && hasLectureWordImage(item.label));
        return (
          <PrintCard key={`${item.label}-${i}`}>
            {showImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={getLectureWordImagePath(item.label)}
                alt=""
                className="h-14 w-14 object-contain"
              />
            ) : null}
            <WordQr word={item.label} label={`Audio ${i + 1}`} size={56} />
            <div className="flex flex-wrap items-center justify-center gap-1">
              {item.targets.map((want, j) => (
                <PrintCircleBtn key={j} label={String(j + 1)} marked={Boolean(correction && want)} />
              ))}
            </div>
          </PrintCard>
        );
      })}
    </PrintItemGrid>
  );
}

// ── Syllabes à lire + QR ───────────────────────────────────────────────────────

function SyllableReadPrint({ items, correction }: { items: string[]; correction?: boolean }) {
  const questionCount = usePrintQuestionCount(items.length);
  const shown = shownOf(items, questionCount);
  return (
    <PrintItemGrid>
      {shown.map((syll, i) => (
        <PrintCard key={`${syll}-${i}`}>
          <span className={`text-center text-xl font-bold tracking-wide ${correction ? "text-amber-700" : "text-black"}`}>
            {syll}
          </span>
          <SyllableQr syllable={syll} size={56} />
        </PrintCard>
      ))}
    </PrintItemGrid>
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
  showSyllables?: boolean;
  correction?: boolean;
}) {
  const questionCount = usePrintQuestionCount(words.length);
  const shown = shownOf(words, questionCount);
  return (
    <PrintItemGrid>
      {shown.map((word, i) => {
        const image = withImages && hasLectureWordImage(word);
        const display = correction && showSyllables ? pedagogicSyllable(word) : word;
        return (
          <PrintCard key={`${word}-${i}`}>
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={getLectureWordImagePath(word)}
                alt=""
                className="h-14 w-14 object-contain"
              />
            ) : null}
            <span className={`text-center text-lg font-bold leading-tight ${correction ? "text-amber-700" : "text-black"}`}>
              {display}
            </span>
            <WordQr word={word} label={`Audio ${i + 1}`} size={56} />
          </PrintCard>
        );
      })}
    </PrintItemGrid>
  );
}

// ── Prononcer (phonème → syllabe → mot + QR) ──────────────────────────────────

function PronouncePrint({ steps, correction }: { steps: PronStep[]; correction?: boolean }) {
  const questionCount = usePrintQuestionCount(steps.length);
  const shown = shownOf(steps, questionCount);
  return (
    <div className="space-y-2">
      {shown.map((step, i) => (
        <div key={`${step.word}-${i}`} className="print-item-card flex items-center gap-3 rounded-lg border-2 border-zinc-400 px-3 py-1.5">
          <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-theme)]">{i + 1}.</span>
          <span className="min-w-10 text-lg font-bold text-[var(--color-theme)]">{step.phoneme}</span>
          <span className="text-zinc-400">→</span>
          <span className={`min-w-16 text-lg font-semibold ${correction ? "text-amber-700" : "text-black"}`}>{step.syllable}</span>
          <span className="text-zinc-400">→</span>
          <span className={`flex-1 text-lg font-bold ${correction ? "text-amber-700" : "text-black"}`}>{step.word}</span>
          <WordQr word={step.word} label={`Audio ${i + 1}`} size={52} />
        </div>
      ))}
    </div>
  );
}

// ── Assemblage des exercices ───────────────────────────────────────────────────

function consigne(text: string): ReactNode {
  return <p className="mb-2 text-sm font-semibold text-black">{text}</p>;
}

const LECTURE_PRINT_COLS: PrintExerciseColumns = 5;

function makeExercise(
  id: string,
  label: string,
  instruction: string,
  body: (correction: boolean) => ReactNode,
  layout?: { questionCount?: number; columns?: PrintExerciseColumns },
): PrintExercise {
  return {
    id,
    label,
    supportsPrintLayout: true,
    defaultQuestionCount: layout?.questionCount ?? 5,
    defaultColumns: layout?.columns ?? LECTURE_PRINT_COLS,
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

function expandSoundItems(
  phoneme: string,
  base: SoundItem[],
  n: number,
  rng: () => number,
  forImages: boolean,
): SoundItem[] {
  const extra = randomSoundItems(phoneme, n, forImages, rng).map((w) => ({
    label: w.label,
    hasSound: wordHasPhoneme(w, phoneme),
  }));
  const seen = new Set(base.map((item) => item.label.toLowerCase()));
  const out = [...base];
  for (const item of extra) {
    if (out.length >= n) break;
    const key = item.label.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      out.push(item);
    }
  }
  return takeN(out, n, rng);
}

function letterExercises(
  data: VowelData | ConsonantData,
  rng: () => number,
): PrintExercise[] {
  const phoneme = lessonPhonemeLabel(data.letterLower, data.phoneme);
  const cols = { columns: LECTURE_PRINT_COLS };
  const upperWords =
    data.type === "consonant"
      ? [...data.upperWordsSet1, ...data.upperWordsSet2]
      : data.upperWords;
  const pool = letterPronouncePool(data.letterLower);
  const pronSteps = pool.length >= 4 ? sample(pool, 6, rng) : data.pronunciationChain;
  const soundAudio = expandSoundItems(data.phoneme, data.soundItems, 30, rng, false);
  const soundImages = expandSoundItems(data.phoneme, data.soundItems, 30, rng, true);
  const syllAudio = randomSoundSyllableItems([data.phoneme], 30, false, rng);
  const syllImages = randomSoundSyllableItems([data.phoneme], 30, true, rng);

  const exercises: PrintExercise[] = [
    makeExercise("grid-upper", "Majuscules", `Entoure toutes les lettres ${data.letter}.`, (c) => (
      <LetterGridPrint cells={data.upperGrid} isTarget={(cell) => cell === data.letter} correction={c} />
    ), { questionCount: data.upperGrid.length, ...cols }),
    makeExercise("grid-lower", "Minuscules", `Entoure toutes les lettres ${data.letterLower}.`, (c) => (
      <LetterGridPrint cells={data.lowerGrid} isTarget={(cell) => cell === data.letterLower} correction={c} />
    ), { questionCount: data.lowerGrid.length, ...cols }),
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
      { questionCount: Math.max(5, upperWords.length), ...cols },
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
      { questionCount: Math.max(5, data.lowerWords.length), ...cols },
    ),
    makeExercise(
      "sound-check",
      "J'entends le son",
      `Scanne le QR code, écoute le mot et coche Oui ou Non si tu entends le son ${phoneme}.`,
      (c) => <SoundCheckPrint items={soundAudio} correction={c} />,
      { questionCount: 5, ...cols },
    ),
    makeExercise(
      "sound-check-images",
      "J'entends le son (images)",
      `Regarde l'image, scanne le QR code et coche Oui ou Non si tu entends le son ${phoneme}.`,
      (c) => <SoundCheckPrint items={soundImages} withImages correction={c} />,
      { questionCount: 5, ...cols },
    ),
    makeExercise(
      "sound-syllable",
      "Syllabe du son",
      `Scanne le QR code et coche la partie de la syllabe où tu entends le son ${phoneme}.`,
      (c) => <SoundSyllablePrint items={syllAudio} correction={c} />,
      { questionCount: 5, ...cols },
    ),
    makeExercise(
      "sound-syllable-images",
      "Syllabe du son (images)",
      `Regarde l'image et coche la partie de la syllabe où tu entends le son ${phoneme}.`,
      (c) => <SoundSyllablePrint items={syllImages} withImages correction={c} />,
      { questionCount: 5, ...cols },
    ),
  ];

  if (data.type === "consonant" && data.syllableGrid.length > 0) {
    exercises.push(
      makeExercise(
        "syllables",
        "Syllabes",
        "Lis chaque syllabe à voix haute. Scanne le QR code pour vérifier.",
        (c) => <SyllableReadPrint items={data.syllableGrid} correction={c} />,
        { questionCount: Math.max(5, data.syllableGrid.length), ...cols },
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
        { questionCount: pronSteps.length, columns: 1 },
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
      { questionCount: Math.max(5, grid.items.length), columns: LECTURE_PRINT_COLS },
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
    const words = isToolWords ? pool : sample(pool, 30, rng);
    return makeExercise(
      grid.key,
      grid.label,
      "Lis chaque mot à voix haute. Scanne le QR code pour vérifier.",
      (c) => <WordReadCardsPrint words={words} withImages={!isToolWords} correction={c} />,
      { questionCount: 5, columns: LECTURE_PRINT_COLS },
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
    const words = sample(pool, 30, rng);
    return makeExercise(
      grid.key,
      grid.label,
      "Lis chaque mot à voix haute. Scanne le QR code pour vérifier.",
      (c) => <WordReadCardsPrint words={words} withImages showSyllables correction={c} />,
      { questionCount: 5, columns: LECTURE_PRINT_COLS },
    );
  });
}

function complexSoundExercises(
  data: ComplexSoundLessonData,
  rng: () => number,
): PrintExercise[] {
  const targets = complexTargets(data.letter);
  const isTarget = (cell: string) => targets.includes(normalizeGraph(cell));
  const words = sample(wordsForComplexGrapheme(data.letter, 12), 30, rng);
  const pool = complexGraphemePronouncePool(data.letter);
  const pronSteps = sample(pool, 6, rng);
  const cols = { columns: LECTURE_PRINT_COLS };
  const soundAudio = expandSoundItems(data.phoneme, [], 30, rng, false);
  const soundImages = expandSoundItems(data.phoneme, [], 30, rng, true);
  const syllAudio = randomSoundSyllableItems([data.phoneme], 30, false, rng);
  const syllImages = randomSoundSyllableItems([data.phoneme], 30, true, rng);
  const phoneme = data.phoneme;

  const exercises: PrintExercise[] = [
    makeExercise("grid-upper", "Majuscules", `Entoure le son ${data.title}.`, (c) => (
      <LetterGridPrint cells={data.upperGrid} isTarget={isTarget} correction={c} />
    ), { questionCount: data.upperGrid.length, ...cols }),
    makeExercise("grid-lower", "Minuscules", `Entoure le son ${data.title.toLowerCase()}.`, (c) => (
      <LetterGridPrint cells={data.lowerGrid} isTarget={isTarget} correction={c} />
    ), { questionCount: data.lowerGrid.length, ...cols }),
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
        { questionCount: 5, ...cols },
      ),
    );
  }

  if (soundAudio.length > 0) {
    exercises.push(
      makeExercise(
        "sound-check",
        "J'entends le son",
        `Scanne le QR code, écoute le mot et coche Oui ou Non si tu entends le son ${phoneme}.`,
        (c) => <SoundCheckPrint items={soundAudio} correction={c} />,
        { questionCount: 5, ...cols },
      ),
      makeExercise(
        "sound-check-images",
        "J'entends le son (images)",
        `Regarde l'image, scanne le QR code et coche Oui ou Non si tu entends le son ${phoneme}.`,
        (c) => <SoundCheckPrint items={soundImages} withImages correction={c} />,
        { questionCount: 5, ...cols },
      ),
    );
  }

  if (syllAudio.length > 0) {
    exercises.push(
      makeExercise(
        "sound-syllable",
        "Syllabe du son",
        `Scanne le QR code et coche la partie de la syllabe où tu entends le son ${phoneme}.`,
        (c) => <SoundSyllablePrint items={syllAudio} correction={c} />,
        { questionCount: 5, ...cols },
      ),
    );
  }
  if (syllImages.length > 0) {
    exercises.push(
      makeExercise(
        "sound-syllable-images",
        "Syllabe du son (images)",
        `Regarde l'image et coche la partie de la syllabe où tu entends le son ${phoneme}.`,
        (c) => <SoundSyllablePrint items={syllImages} withImages correction={c} />,
        { questionCount: 5, ...cols },
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
        { questionCount: pronSteps.length, columns: 1 },
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

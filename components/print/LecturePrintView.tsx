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
  DUAL_SOUND_LETTERS,
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
  randomWordsWithLetter,
  wordHasPhoneme,
  wordsForComplexGrapheme,
  wordsPoolForLessonGrid,
  type SoundSyllableItem,
} from "@/lib/curriculum/word-pool";
import { pedagogicSyllable } from "@/lib/curriculum/syllabify";
import { lectureLessonTitle } from "@/lib/print/catalog";
import { LECTURE_PRINT_ICONS, matchSyllablePool } from "@/lib/curriculum/lecture-print-icons";

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

function PrintItemGrid({ children, fallbackColumns = 5 }: { children: ReactNode; fallbackColumns?: PrintExerciseColumns }) {
  const columns = usePrintColumns(fallbackColumns);
  return (
    <div
      className="grid w-full items-start gap-2"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {children}
    </div>
  );
}

const QR_SIZE_AT_4 = 70; // 56 × 1.25
const IMG_SIZE_AT_4 = 88;

function scaleForColumns(columns: number, baseAt4: number): number {
  const factor: Record<number, number> = { 1: 1.85, 2: 1.42, 3: 1.16, 4: 1, 5: 0.78 };
  return Math.round(baseAt4 * (factor[columns] ?? 1));
}

function useLectureQrSize(baseAt4 = QR_SIZE_AT_4): number {
  const columns = usePrintColumns(4);
  return scaleForColumns(columns, baseAt4);
}

function useLectureImageSize(baseAt4 = IMG_SIZE_AT_4): number {
  const columns = usePrintColumns(4);
  return scaleForColumns(columns, baseAt4);
}

/** Bouton cercle (1 2 3 4) ou carré arrondi (Oui / Non). */
function PrintCircleBtn({
  label,
  marked,
  shape = "circle",
}: {
  label: string;
  marked?: boolean;
  shape?: "circle" | "square";
}) {
  const wide = label.length > 1;
  const roundCls =
    shape === "square"
      ? `print-choice-btn--square ${wide ? "print-choice-btn--square-wide" : ""}`
      : `print-choice-btn--circle ${wide ? "print-choice-btn--circle-wide" : ""}`;
  return (
    <button
      type="button"
      className={`print-choice-btn inline-flex items-center justify-center border-2 font-bold leading-none ${roundCls} ${
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
  const qrSize = useLectureQrSize();
  const imgSize = useLectureImageSize();
  return (
    <PrintItemGrid fallbackColumns={4}>
      {shown.map((item, i) => {
        const showImage = Boolean(withImages && hasLectureWordImage(item.label));
        return (
          <PrintCard key={`${item.label}-${i}`}>
            {showImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={getLectureWordImagePath(item.label)}
                alt=""
                className="object-contain"
                style={{ width: imgSize, height: imgSize }}
              />
            ) : null}
            <WordQr word={item.label.toLowerCase()} label={`Audio ${i + 1}`} size={qrSize} />
            <div className="flex items-center justify-center gap-1.5">
              <PrintCircleBtn shape="square" label="Oui" marked={correction && item.hasSound} />
              <PrintCircleBtn shape="square" label="Non" marked={correction && !item.hasSound} />
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
  const qrSize = useLectureQrSize();
  const imgSize = useLectureImageSize();
  return (
    <PrintItemGrid fallbackColumns={4}>
      {shown.map((item, i) => {
        const showImage = Boolean(withImages && hasLectureWordImage(item.label));
        return (
          <PrintCard key={`${item.label}-${i}`}>
            {showImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={getLectureWordImagePath(item.label)}
                alt=""
                className="object-contain"
                style={{ width: imgSize, height: imgSize }}
              />
            ) : null}
            <WordQr word={item.label} label={`Audio ${i + 1}`} size={qrSize} />
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

function MatchLinkPrint({
  items,
  shuffled,
  kind,
  correction,
}: {
  items: string[];
  shuffled: string[];
  kind: "syllable" | "word";
  correction?: boolean;
}) {
  const questionCount = usePrintQuestionCount(items.length);
  const left = items.slice(0, questionCount);
  const right = shuffled.filter((s) => left.some((x) => x.toLowerCase() === s.toLowerCase()));
  return (
    <div className="grid grid-cols-2 items-start gap-x-8 gap-y-2">
      <div className="space-y-2">
        {left.map((label, i) => (
          <div key={`L-${label}-${i}`} className="flex items-center justify-start gap-2">
            {kind === "syllable" ? (
              <SyllableQr syllable={label} size={52} />
            ) : (
              <WordQr word={label} label={`Audio ${i + 1}`} size={52} />
            )}
            <span className="inline-block h-4 w-4 shrink-0 rounded-full border-2 border-zinc-500 bg-white" />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {right.map((label, i) => {
          const matchIdx = left.findIndex((x) => x.toLowerCase() === label.toLowerCase());
          return (
            <div key={`R-${label}-${i}`} className="flex items-center justify-end gap-2">
              <span className="inline-block h-4 w-4 shrink-0 rounded-full border-2 border-zinc-500 bg-white" />
              <span
                className={`inline-flex min-w-[4.5rem] items-center justify-center rounded-full border-2 px-2.5 py-0.5 text-center text-base font-bold tracking-wide ${
                  correction ? "border-amber-500 bg-amber-50 text-amber-700" : "border-zinc-500 text-black"
                }`}
              >
                {correction && matchIdx >= 0 ? `${matchIdx + 1}. ${label}` : label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
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
                className="h-20 w-20 object-contain"
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

const LECTURE_PRINT_COLS: PrintExerciseColumns = 5;
const SOUND_PRINT_COLS: PrintExerciseColumns = 4;

function makeExercise(
  id: string,
  label: string,
  instruction: string,
  body: (correction: boolean) => ReactNode,
  layout?: { questionCount?: number; columns?: PrintExerciseColumns },
  icon?: string,
): PrintExercise {
  return {
    id,
    label,
    instruction,
    printIcon: icon,
    supportsPrintLayout: true,
    defaultQuestionCount: layout?.questionCount ?? 5,
    defaultColumns: layout?.columns ?? LECTURE_PRINT_COLS,
    preview: <div className="text-black">{body(false)}</div>,
    correctionPreview: <div className="text-black">{body(true)}</div>,
  };
}

function numberLectureExercises(exercises: PrintExercise[]): PrintExercise[] {
  return exercises.map((ex, i) => ({ ...ex, label: `Exercice ${i + 1}` }));
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
  const phoneme = data.phoneme;
  const cols = { columns: LECTURE_PRINT_COLS };
  const soundCols = { columns: SOUND_PRINT_COLS };
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
  const dual = DUAL_SOUND_LETTERS[data.letterLower];
  const extraPhoneme = dual?.[1];
  const vowels = ["a", "e", "i", "o", "u", "y"];
  const cv = vowels.map((v) => `${data.letterLower}${v}`);
  const vc = vowels.map((v) => `${v}${data.letterLower}`);
  const syll2: string[] = [];
  for (const a of cv) for (const b of cv) if (a !== b) syll2.push(a + b);
  const matchSyllPool = matchSyllablePool(data.letterLower, data.type);
  const matchSylls = sample(matchSyllPool, Math.min(10, matchSyllPool.length), rng);
  const matchSyllsRight = sample(matchSylls, matchSylls.length, rng);
  const matchWordPool = randomWordsWithLetter(data.letterLower, 20).map((w) => w.toLowerCase());
  const matchWords = sample(matchWordPool, Math.min(10, matchWordPool.length), rng);
  const matchWordsRight = sample(matchWords, matchWords.length, rng);

  const exercises: PrintExercise[] = [
    makeExercise(
      "grid-upper",
      "Majuscules",
      `Coloriez les cases avec la lettre ${data.letter}.`,
      (c) => (
        <LetterGridPrint cells={data.upperGrid} isTarget={(cell) => cell === data.letter} correction={c} />
      ),
      { questionCount: data.upperGrid.length, ...cols },
      LECTURE_PRINT_ICONS.colorier,
    ),
    makeExercise(
      "grid-lower",
      "Minuscules",
      `Coloriez les cases avec la lettre ${data.letterLower}.`,
      (c) => (
        <LetterGridPrint cells={data.lowerGrid} isTarget={(cell) => cell === data.letterLower} correction={c} />
      ),
      { questionCount: data.lowerGrid.length, ...cols },
      LECTURE_PRINT_ICONS.colorier,
    ),
    makeExercise(
      "word-upper",
      "Mots (majuscules)",
      `Soulignez les lettres ${data.letter}.`,
      (c) => (
        <WordCirclePrint
          words={upperWords}
          segmentsOf={(w) => letterSegments(w, data.letterLower)}
          correction={c}
        />
      ),
      { questionCount: Math.max(5, upperWords.length), ...cols },
      LECTURE_PRINT_ICONS.souligner,
    ),
    makeExercise(
      "word-lower",
      "Mots (minuscules)",
      `Soulignez les lettres ${data.letterLower}.`,
      (c) => (
        <WordCirclePrint
          words={data.lowerWords}
          segmentsOf={(w) => letterSegments(w, data.letterLower)}
          correction={c}
        />
      ),
      { questionCount: Math.max(5, data.lowerWords.length), ...cols },
      LECTURE_PRINT_ICONS.souligner,
    ),
    makeExercise(
      "sound-check",
      "J'entends le son",
      `Cochez si vous entendez le son ${phoneme}.`,
      (c) => <SoundCheckPrint items={soundAudio} correction={c} />,
      { questionCount: 5, ...soundCols },
      LECTURE_PRINT_ICONS.cocher,
    ),
    makeExercise(
      "sound-check-images",
      "J'entends le son (images)",
      `Cochez si vous entendez le son ${phoneme}.`,
      (c) => <SoundCheckPrint items={soundImages} withImages correction={c} />,
      { questionCount: 5, ...soundCols },
      LECTURE_PRINT_ICONS.cocher,
    ),
  ];

  if (extraPhoneme) {
    const extraAudio = expandSoundItems(extraPhoneme, [], 30, rng, false);
    const extraImages = expandSoundItems(extraPhoneme, [], 30, rng, true);
    exercises.push(
      makeExercise(
        "sound-check-2",
        `J'entends ${extraPhoneme}`,
        `Cochez si vous entendez le son ${extraPhoneme}.`,
        (c) => <SoundCheckPrint items={extraAudio} correction={c} />,
        { questionCount: 5, ...soundCols },
        LECTURE_PRINT_ICONS.cocher,
      ),
      makeExercise(
        "sound-check-images-2",
        `J'entends ${extraPhoneme} (images)`,
        `Cochez si vous entendez le son ${extraPhoneme}.`,
        (c) => <SoundCheckPrint items={extraImages} withImages correction={c} />,
        { questionCount: 5, ...soundCols },
        LECTURE_PRINT_ICONS.cocher,
      ),
    );
  }

  exercises.push(
    makeExercise(
      "sound-syllable",
      "Syllabe du son",
      `Cochez la partie de la syllabe où vous entendez le son ${phoneme}.`,
      (c) => <SoundSyllablePrint items={syllAudio} correction={c} />,
      { questionCount: 5, ...soundCols },
      LECTURE_PRINT_ICONS.cocher,
    ),
    makeExercise(
      "sound-syllable-images",
      "Syllabe du son (images)",
      `Cochez la partie de la syllabe où vous entendez le son ${phoneme}.`,
      (c) => <SoundSyllablePrint items={syllImages} withImages correction={c} />,
      { questionCount: 5, ...soundCols },
      LECTURE_PRINT_ICONS.cocher,
    ),
  );

  if (data.type === "consonant") {
    exercises.push(
      makeExercise(
        "syllables-cv",
        "Syllabes",
        "Écoutez et répétez les syllabes.",
        (c) => <SyllableReadPrint items={cv} correction={c} />,
        { questionCount: Math.max(5, cv.length), ...cols },
        LECTURE_PRINT_ICONS.prononcer,
      ),
      makeExercise(
        "syllables-vc",
        "Syllabes inverses",
        "Écoutez et répétez les syllabes.",
        (c) => <SyllableReadPrint items={vc} correction={c} />,
        { questionCount: Math.max(5, vc.length), ...cols },
        LECTURE_PRINT_ICONS.prononcer,
      ),
      makeExercise(
        "syllables-2",
        "2 syllabes",
        "Écoutez et répétez les syllabes.",
        (c) => <SyllableReadPrint items={sample(syll2, 12, rng)} correction={c} />,
        { questionCount: 8, ...cols },
        LECTURE_PRINT_ICONS.prononcer,
      ),
    );
  }

  if (matchSylls.length > 0) {
    exercises.push(
      makeExercise(
        "match-syllables",
        "Repérer les syllabes",
        "Écoutez et reliez les syllabes au son que vous entendez.",
        (c) => (
          <MatchLinkPrint items={matchSylls} shuffled={matchSyllsRight} kind="syllable" correction={c} />
        ),
        { questionCount: 5, columns: 2 },
        LECTURE_PRINT_ICONS.relier,
      ),
    );
  }

  if (pronSteps.length > 0) {
    exercises.push(
      makeExercise(
        "pronounce",
        "Prononcer",
        "Écoutez et répétez les mots.",
        (c) => <PronouncePrint steps={pronSteps} correction={c} />,
        { questionCount: pronSteps.length, columns: 1 },
        LECTURE_PRINT_ICONS.prononcer,
      ),
    );
  }

  if (matchWords.length > 0) {
    exercises.push(
      makeExercise(
        "match-words",
        "Repérer les mots",
        "Écoutez et reliez les mots au son que vous entendez.",
        (c) => (
          <MatchLinkPrint items={matchWords} shuffled={matchWordsRight} kind="word" correction={c} />
        ),
        { questionCount: 5, columns: 2 },
        LECTURE_PRINT_ICONS.relier,
      ),
    );
  }

  return numberLectureExercises(exercises);
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
  const soundCols = { columns: SOUND_PRINT_COLS };
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
        `Cochez si vous entendez le son ${phoneme}.`,
        (c) => <SoundCheckPrint items={soundAudio} correction={c} />,
        { questionCount: 5, ...soundCols },
        LECTURE_PRINT_ICONS.cocher,
      ),
      makeExercise(
        "sound-check-images",
        "J'entends le son (images)",
        `Cochez si vous entendez le son ${phoneme}.`,
        (c) => <SoundCheckPrint items={soundImages} withImages correction={c} />,
        { questionCount: 5, ...soundCols },
        LECTURE_PRINT_ICONS.cocher,
      ),
    );
  }

  if (syllAudio.length > 0) {
    exercises.push(
      makeExercise(
        "sound-syllable",
        "Syllabe du son",
        `Cochez la partie de la syllabe où vous entendez le son ${phoneme}.`,
        (c) => <SoundSyllablePrint items={syllAudio} correction={c} />,
        { questionCount: 5, ...soundCols },
        LECTURE_PRINT_ICONS.cocher,
      ),
    );
  }
  if (syllImages.length > 0) {
    exercises.push(
      makeExercise(
        "sound-syllable-images",
        "Syllabe du son (images)",
        `Cochez la partie de la syllabe où vous entendez le son ${phoneme}.`,
        (c) => <SoundSyllablePrint items={syllImages} withImages correction={c} />,
        { questionCount: 5, ...soundCols },
        LECTURE_PRINT_ICONS.cocher,
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

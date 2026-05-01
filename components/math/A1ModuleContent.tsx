"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AppCard } from "@/components/ui/AppCard";
import { AppButton } from "@/components/ui/AppButton";
import { AppInput } from "@/components/ui/AppInput";
import { ActionIconButton } from "@/components/ui/ActionIconButton";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { MATH_A1_LESSONS } from "@/lib/curriculum/content/math-a1";
import type {
  ReadAloudCell,
  ReadAloudLegendItem,
  WordPhonemeKind,
} from "@/lib/curriculum/content/math-a1-types";
import {
  pickTheoryFrench,
  pickTheoryPivotTranslation,
} from "@/lib/curriculum/content/math-a1-types";
import type { PivotCode } from "@/lib/pivot-langs";

// ─── Vocabulaire ──────────────────────────────────────────────────────────────

const FR_WORDS: Record<number, string> = {
  1: "un", 2: "deux", 3: "trois", 4: "quatre", 5: "cinq",
  6: "six", 7: "sept", 8: "huit", 9: "neuf", 10: "dix",
};

const FR_TENS: Record<number, string> = {
  10: "dix", 20: "vingt", 30: "trente", 40: "quarante", 50: "cinquante",
  60: "soixante", 70: "septante", 80: "huitante", 90: "nonante", 100: "cent",
};

const PIVOT_WORDS: Partial<Record<PivotCode, Record<number, string>>> = {
  en: { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
        6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten" },
  ar: { 1: "واحد", 2: "اثنان", 3: "ثلاثة", 4: "أربعة", 5: "خمسة",
        6: "ستة", 7: "سبعة", 8: "ثمانية", 9: "تسعة", 10: "عشرة" },
  fa: { 1: "یک", 2: "دو", 3: "سه", 4: "چهار", 5: "پنج",
        6: "شش", 7: "هفت", 8: "هشت", 9: "نه", 10: "ده" },
  uk: { 1: "один", 2: "два", 3: "три", 4: "чотири", 5: "п'ять",
        6: "шість", 7: "сім", 8: "вісім", 9: "дев'ять", 10: "десять" },
  ti: { 1: "ሓደ", 2: "ክልተ", 3: "ሰለስተ", 4: "ኣርባዕተ", 5: "ሓሙሽተ",
        6: "ሽዱሽተ", 7: "ሸውዓተ", 8: "ሸሞንተ", 9: "ትሽዓተ", 10: "ዓሰርተ" },
};

const PIVOT_TENS: Partial<Record<PivotCode, Record<number, string>>> = {
  en: { 10: "ten", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty",
        60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety", 100: "one hundred" },
  ar: { 10: "عشرة", 20: "عشرون", 30: "ثلاثون", 40: "أربعون", 50: "خمسون",
        60: "ستون", 70: "سبعون", 80: "ثمانون", 90: "تسعون", 100: "مئة" },
  uk: { 10: "десять", 20: "двадцять", 30: "тридцять", 40: "сорок", 50: "п'ятдесят",
        60: "шістдесят", 70: "сімдесят", 80: "вісімдесят", 90: "дев'яносто", 100: "сто" },
};

// ─── Générateurs de nombres ───────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

function generateDigits(): number[] {
  return shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 2);
}

function generateNumbers(): number[] {
  return shuffle(Array.from({ length: 10 }, (_, i) => i + 1)).slice(0, 5);
}

function generateTensNumbers(): number[] {
  return shuffle([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]).slice(0, 5);
}

function generateDizaineNumbers(): number[] {
  return shuffle([10, 20, 30, 40, 50, 60, 70, 80, 90]).slice(0, 5);
}

// ─── Exercice 7 — grille 10–99 ───────────────────────────────────────────────

type CellState = "fill" | "revealed" | "empty";
type GridConfig = Record<string, CellState>; // clé : `${dizaine}-${unité}`

function generateEx7Grid(): GridConfig {
  const dizaines = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const unites = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const all: string[] = [];
  for (const d of dizaines) for (const u of unites) all.push(`${d}-${u}`);
  const sh = shuffle(all);
  const cfg: GridConfig = {};
  for (const k of all) cfg[k] = "empty";
  for (let i = 0; i < 10; i++) cfg[sh[i]!] = "fill";
  for (let i = 10; i < 19; i++) cfg[sh[i]!] = "revealed";
  return cfg;
}

// ─── Exercice 8 — séries de nombres ──────────────────────────────────────────

interface NumberSeries {
  start: number;
  count: number;
  blanks: number[];
}

function generateEx8(): NumberSeries[] {
  const series: NumberSeries[] = [];
  const used = new Set<number>();
  for (let s = 0; s < 3; s++) {
    const count = 8;
    let start = Math.floor(Math.random() * 82) + 10;
    for (let tries = 0; tries < 30; tries++) {
      if (!Array.from({ length: count }, (_, j) => start + j).some(n => used.has(n))) break;
      start = Math.floor(Math.random() * 82) + 10;
    }
    const blanks = shuffle([0, 1, 2, 3, 4, 5, 6, 7]).slice(0, 3);
    for (let j = 0; j < count; j++) used.add(start + j);
    series.push({ start, count, blanks });
  }
  return series;
}

function nombreAudioSrc(num: number): string {
  if (num >= 100) return `/audio/nombres/centaine/${num}.mp3`;
  if (num >= 10)  return `/audio/nombres/dizaine/${num}.mp3`;
  return `/audio/nombres/unité/${num}.mp3`;
}

// ─── Exercice 6 — composition de sons ────────────────────────────────────────

interface NumberComposition {
  value: number;
  clips: string[];
}

const _C = (n: number) => `/audio/nombres/centaine/${n}.mp3`;
const _D = (n: number) => `/audio/nombres/dizaine/${n}.mp3`;
const _U = (n: number) => `/audio/nombres/unité/${n}.mp3`;
const _S = (n: number) => `/audio/nombres/spécial/${n}.mp3`;
const _ET = () => `/audio/nombres/spécial/et.mp3`;

function generateEx6Composition(): NumberComposition {
  const c = shuffle([100, 200, 300, 400, 500, 600, 700, 800, 900])[0]!;
  const struct = Math.floor(Math.random() * 5);

  if (struct === 1) {
    const s = shuffle([11, 12, 13, 14, 15, 16])[0]!;
    return { value: c + s, clips: [_C(c), _S(s)] };
  }
  if (struct === 2) {
    const d = shuffle([10, 20, 30, 40, 50, 60, 70, 80, 90])[0]!;
    return { value: c + d, clips: [_C(c), _D(d)] };
  }
  if (struct === 3) {
    const u = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])[0]!;
    return { value: c + u, clips: [_C(c), _U(u)] };
  }
  if (struct === 4) {
    const d = shuffle([20, 30, 40, 50, 60, 70, 80, 90])[0]!;
    const u = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])[0]!;
    const clips = [_C(c), _D(d)];
    if (u === 1) clips.push(_ET());
    clips.push(_U(u));
    return { value: c + d + u, clips };
  }
  return { value: c, clips: [_C(c)] };
}

function generateEx6Numbers(): NumberComposition[] {
  return Array.from({ length: 5 }, generateEx6Composition);
}

// ─────────────────────────────────────────────────────────────────────────────

function checkWord(input: string, num: number): boolean {
  const n = input.trim().toLowerCase();
  const accepted = [FR_WORDS[num] ?? ""];
  if (num === 1) accepted.push("une");
  return accepted.includes(n);
}

function checkTensWord(input: string, num: number): boolean {
  const n = input.trim().toLowerCase();
  const accepted = [FR_TENS[num] ?? ""];
  if (num === 70) accepted.push("soixante-dix", "soixante dix");
  if (num === 80) accepted.push("quatre-vingts", "quatre vingts");
  if (num === 90) accepted.push("quatre-vingt-dix", "quatre vingt dix");
  return accepted.includes(n);
}

// ─── Guide de tracé des chiffres ─────────────────────────────────────────────

function DigitGuide({ digit }: { digit: number }) {
  return (
    <img
      src={`/images/digits/${digit}.png`}
      alt={`Guide de tracé pour le chiffre ${digit}`}
      className="h-full w-full object-contain"
      draggable={false}
    />
  );
}

// ─── Traductions UI fixes ─────────────────────────────────────────────────────

const LISTEN_REPEAT_PIVOT: Partial<Record<PivotCode, string>> = {
  en: "Listen to the recording, then repeat aloud.",
  ar: "استمع إلى التسجيل ثم كرر بصوت عالٍ.",
  fa: "به ضبط گوش دهید، سپس بلند تکرار کنید.",
  uk: "Послухай запис, потім повтори вголос.",
  ti: "ናይ ምዝጋብ ቅጅ ስምዔ፤ ድሕሪኡ ብድምጺ ደጋግም።",
};

const CONSIGNE_PIVOT: Record<"ex1" | "ex2" | "ex3" | "ex4" | "ex5" | "ex6" | "ex7" | "ex8", Partial<Record<PivotCode, string>>> = {
  ex1: {
    en: "Follow the stroke to write the digits.",
    ar: "اتبع الخط لكتابة الأرقام.",
    fa: "خط را دنبال کنید تا ارقام را بنویسید.",
    uk: "Слідуйте по лінії, щоб написати цифри.",
    ti: "ነቲ መስመር ሰዒብካ ቁጽርታት ጸሓፍ።",
  },
  ex2: {
    en: "Write the numbers in letters correctly.",
    ar: "اكتب الأرقام بالحروف بشكل صحيح.",
    fa: "اعداد را به درستی با حروف بنویسید.",
    uk: "Напишіть числа словами правильно.",
    ti: "ቁጽርታት ብፊደላት ቅኑዕ ጸሓፍ።",
  },
  ex3: {
    en: "Write the tens in letters correctly.",
    ar: "اكتب العشرات بالحروف بشكل صحيح.",
    fa: "ده‌تاها را به درستی با حروف بنویسید.",
    uk: "Напишіть десятки словами правильно.",
    ti: "ዓሰርታት ብፊደላት ቅኑዕ ጸሓፍ།",
  },
  ex4: {
    en: "Listen and write the numbers in digits.",
    ar: "استمع واكتب الأرقام بالأرقام.",
    fa: "گوش دهید و اعداد را با رقم بنویسید.",
    uk: "Послухай і запиши числа цифрами.",
    ti: "ስምዔ፤ ቁጽርታት ብቑጽሪ ጸሓፍ።",
  },
  ex5: {
    en: "Listen and write the tens in digits.",
    ar: "استمع واكتب العشرات بالأرقام.",
    fa: "گوش دهید و ده‌تاها را با رقم بنویسید.",
    uk: "Послухай і запиши десятки цифрами.",
    ti: "ስምዔ፤ ዓሰርታት ብቑጽሪ ጸሓፍ።",
  },
  ex6: {
    en: "Listen and write the number in digits.",
    ar: "استمع واكتب العدد بالأرقام.",
    fa: "گوش دهید و عدد را با رقم بنویسید.",
    uk: "Послухай і запиши число цифрами.",
    ti: "ስምዔ፤ ቁጽሩ ብቑጽሪ ጸሓፍ።",
  },
  ex7: {
    en: "Complete the number grid from 10 to 99.",
    ar: "أكمل شبكة الأرقام من 10 إلى 99.",
    fa: "جدول اعداد ۱۰ تا ۹۹ را کامل کنید.",
    uk: "Заповніть таблицю чисел від 10 до 99.",
    ti: "ናይ ቁጽርታት ሰሌዳ ካብ 10 ክሳዕ 99 ምልኡ።",
  },
  ex8: {
    en: "Complete the number series.",
    ar: "أكمل سلاسل الأرقام.",
    fa: "دنباله‌های عددی را کامل کنید.",
    uk: "Доповніть числові ряди.",
    ti: "ናይ ቁጽርታት ተኸታተልቲ ምልኡ።",
  },
};

// ─── Composants partagés ──────────────────────────────────────────────────────

type Step = "theory" | "audio" | "ex1" | "ex2" | "ex3" | "ex4" | "ex5" | "ex6" | "ex7" | "ex8";

function partClass(kind: WordPhonemeKind): string {
  if (kind === "vowel") return "text-red-600 dark:text-red-400";
  if (kind === "silent") return "text-zinc-500 dark:text-zinc-400";
  return "text-[var(--color-text-primary)]";
}

function ReadAloudNumberCell({ cell }: { cell: ReadAloudCell }) {
  const { num, parts, wordUnderline } = cell;
  return (
    <span className="inline-flex max-w-full flex-wrap items-baseline">
      <span className="font-medium tabular-nums text-[var(--color-accent-alg)]">{num}</span>
      <span className="select-none px-1" aria-hidden>{" "}</span>
      <span className={wordUnderline ? "border-b-[3px] border-double border-[var(--color-accent-alg)] pb-0.5" : undefined}>
        {parts.map((part, i) => (
          <span key={i} className={partClass(part.kind)}>{part.text}</span>
        ))}
      </span>
    </span>
  );
}

function SequentialAudioButton({ clips }: { clips: string[] }) {
  const [playing, setPlaying] = useState(false);
  const handlePlay = () => {
    if (playing || clips.length === 0) return;
    setPlaying(true);
    let i = 0;
    const playNext = () => {
      if (i >= clips.length) { setPlaying(false); return; }
      const audio = new Audio(clips[i]!);
      i++;
      audio.addEventListener("ended", playNext, { once: true });
      audio.addEventListener("error", playNext, { once: true });
      void audio.play().catch(playNext);
    };
    playNext();
  };
  return (
    <button type="button" onClick={handlePlay} disabled={playing}
      aria-label={playing ? "Lecture en cours…" : "Écouter"}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-alg)] text-white transition-opacity disabled:opacity-60 active:opacity-70">
      {playing ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <rect x="5" y="4" width="4" height="16" rx="1"/><rect x="15" y="4" width="4" height="16" rx="1"/>
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6 4l14 8-14 8V4z"/>
        </svg>
      )}
    </button>
  );
}

function AudioPlayButton({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); a.currentTime = 0; setPlaying(false); }
    else { void a.play(); setPlaying(true); }
  };
  return (
    <>
      <audio ref={audioRef} src={src} preload="none" onEnded={() => setPlaying(false)} />
      <button type="button" onClick={toggle} aria-label={playing ? "Pause" : "Écouter"}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-alg)] text-white transition-opacity active:opacity-70">
        {playing ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <rect x="5" y="4" width="4" height="16" rx="1"/><rect x="15" y="4" width="4" height="16" rx="1"/>
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M6 4l14 8-14 8V4z"/>
          </svg>
        )}
      </button>
    </>
  );
}

function legendSwatchClass(swatch: ReadAloudLegendItem["swatch"]): string {
  if (swatch === "accentAlg") return "bg-[var(--color-accent-alg)]";
  if (swatch === "red") return "bg-red-500";
  if (swatch === "gray") return "bg-zinc-400";
  return "bg-[var(--color-text-primary)]";
}

function fmt(s: number): string {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); } else { void a.play(); }
    setPlaying((v) => !v);
  };

  return (
    <div className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-3 py-2">
      <audio
        ref={audioRef} src={src} preload="metadata"
        onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
        onTimeUpdate={() => {
          const a = audioRef.current;
          if (!a) return;
          setCurrentTime(a.currentTime);
          setProgress(a.duration ? (a.currentTime / a.duration) * 100 : 0);
        }}
        onEnded={() => { setPlaying(false); setProgress(0); setCurrentTime(0); }}
      />
      <button type="button" onClick={toggle} aria-label={playing ? "Pause" : "Lire"}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-alg)] text-white"
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <rect x="5" y="4" width="4" height="16" rx="1" /><rect x="15" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M6 4l14 8-14 8V4z" />
          </svg>
        )}
      </button>
      <div className="flex flex-1 flex-col gap-1">
        <input type="range" min={0} max={100} step={0.1} value={progress}
          onChange={(e) => {
            const a = audioRef.current;
            if (!a) return;
            const val = Number(e.target.value);
            a.currentTime = (val / 100) * a.duration;
            setProgress(val);
          }}
          className="w-full accent-[var(--color-accent-alg)]" aria-label="Progression audio"
        />
        <div className="flex justify-between text-[10px] text-[var(--color-text-secondary)]">
          <span>{fmt(currentTime)}</span>
          {duration > 0 && <span>{fmt(duration)}</span>}
        </div>
      </div>
    </div>
  );
}

function BubbleProgressBar({ value }: { value: number }) {
  const pct = Math.min(100, Math.max(0, value));
  const bubbleLeft = Math.min(98, Math.max(2, pct));
  return (
    <div className="relative pb-1 pt-12" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className="absolute top-0 -translate-x-1/2 transition-all duration-500" style={{ left: `${bubbleLeft}%` }}>
        <div className="flex h-11 w-11 items-center justify-center rounded-full shadow-lg"
          style={{ background: "radial-gradient(circle at 35% 35%, #86efac, #22c55e 60%, #16a34a)" }}>
          <span className="text-[11px] font-bold text-white">{pct}%</span>
        </div>
        <div className="mx-auto h-0 w-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-green-500" />
      </div>
      <div className="h-4 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
        <div className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${pct}%`,
            background: "repeating-linear-gradient(-45deg, #4ade80 0px, #4ade80 10px, #22c55e 10px, #22c55e 20px)",
          }}
        />
      </div>
    </div>
  );
}

function ExerciseRow({
  num, inputId, answer, result, validated, correctWord,
  pivotWord, pivot, showPivot, onChange,
}: {
  num: number; inputId: string; answer: string; result: boolean | null;
  validated: boolean; correctWord: string; pivotWord?: string;
  pivot: PivotCode; showPivot: boolean; onChange: (val: string) => void;
}) {
  return (
    <div className={`flex items-center gap-3 rounded-[var(--radius-md)] border p-3 transition-colors ${
      result === null
        ? "border-[var(--color-border-default)]"
        : result
          ? "border-green-400 bg-green-50 dark:bg-green-950/20"
          : "border-red-400 bg-red-50 dark:bg-red-950/20"
    }`}>
      <span className="w-10 shrink-0 text-center text-2xl font-bold tabular-nums text-[var(--color-accent-alg)]">
        {num}
      </span>
      {showPivot && pivotWord ? (
        <span className="shrink-0 border-l-2 border-[var(--color-accent-fr)]/50 pl-2 text-sm italic text-[var(--color-text-secondary)]"
          lang={pivot} dir={pivot === "ar" || pivot === "fa" ? "rtl" : "ltr"}>
          {pivotWord}
        </span>
      ) : null}
      {validated && result !== null ? (
        <div className="flex h-10 flex-1 items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3">
          {result ? (
            <span className="text-sm font-medium text-green-600">{answer}</span>
          ) : (
            <>
              <span className="text-sm text-red-500 line-through">{answer}</span>
              <span className="text-sm font-medium text-[var(--color-text-primary)]">{correctWord}</span>
            </>
          )}
        </div>
      ) : (
        <AppInput label="" id={inputId} value={answer}
          onChange={(e) => onChange(e.target.value)}
          placeholder="en lettres…" autoComplete="off" />
      )}
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────

export function A1ModuleContent() {
  const router = useRouter();
  const pivot = usePivotLang();
  const { showPivot: showPivotTranslation } = useTranslation();
  const [activeIdx, setActiveIdx] = useState(0);
  const [step, setStep] = useState<Step>("theory");

  // Exercice 1 — tracer les chiffres (0–9)
  const [ex1Digits, setEx1Digits] = useState<number[]>(generateDigits);
  const resetExercise1 = () => setEx1Digits(generateDigits());

  // Exercice 2 — écrire les nombres (1–10)
  const [ex2Numbers, setEx2Numbers] = useState<number[]>(generateNumbers);
  const [ex2Answers, setEx2Answers] = useState<string[]>(["", "", "", "", ""]);
  const [ex2Results, setEx2Results] = useState<(boolean | null)[]>([null, null, null, null, null]);
  const [ex2Validated, setEx2Validated] = useState(false);

  const resetExercise2 = () => {
    setEx2Numbers(generateNumbers());
    setEx2Answers(["", "", "", "", ""]);
    setEx2Results([null, null, null, null, null]);
    setEx2Validated(false);
  };

  // Exercice 3 — écrire les dizaines (10–100)
  const [ex3Numbers, setEx3Numbers] = useState<number[]>(generateTensNumbers);
  const [ex3Answers, setEx3Answers] = useState<string[]>(["", "", "", "", ""]);
  const [ex3Results, setEx3Results] = useState<(boolean | null)[]>([null, null, null, null, null]);
  const [ex3Validated, setEx3Validated] = useState(false);

  const resetExercise3 = () => {
    setEx3Numbers(generateTensNumbers());
    setEx3Answers(["", "", "", "", ""]);
    setEx3Results([null, null, null, null, null]);
    setEx3Validated(false);
  };

  // Exercice 4 — dictée audio (1–10)
  const [ex4Numbers, setEx4Numbers] = useState<number[]>(generateNumbers);
  const [ex4Answers, setEx4Answers] = useState<string[]>(["", "", "", "", ""]);
  const [ex4Results, setEx4Results] = useState<(boolean | null)[]>([null, null, null, null, null]);
  const [ex4Validated, setEx4Validated] = useState(false);

  const resetExercise4 = () => {
    setEx4Numbers(generateNumbers());
    setEx4Answers(["", "", "", "", ""]);
    setEx4Results([null, null, null, null, null]);
    setEx4Validated(false);
  };

  // Exercice 5 — dictée audio dizaines (10–90)
  const [ex5Numbers, setEx5Numbers] = useState<number[]>(generateDizaineNumbers);
  const [ex5Answers, setEx5Answers] = useState<string[]>(["", "", "", "", ""]);
  const [ex5Results, setEx5Results] = useState<(boolean | null)[]>([null, null, null, null, null]);
  const [ex5Validated, setEx5Validated] = useState(false);

  const resetExercise5 = () => {
    setEx5Numbers(generateDizaineNumbers());
    setEx5Answers(["", "", "", "", ""]);
    setEx5Results([null, null, null, null, null]);
    setEx5Validated(false);
  };

  // Exercice 6 — dictée audio centaines composées
  const [ex6Compositions, setEx6Compositions] = useState<NumberComposition[]>(generateEx6Numbers);
  const [ex6Answers, setEx6Answers] = useState<string[]>(["", "", "", "", ""]);
  const [ex6Results, setEx6Results] = useState<(boolean | null)[]>([null, null, null, null, null]);
  const [ex6Validated, setEx6Validated] = useState(false);

  const resetExercise6 = () => {
    setEx6Compositions(generateEx6Numbers());
    setEx6Answers(["", "", "", "", ""]);
    setEx6Results([null, null, null, null, null]);
    setEx6Validated(false);
  };

  // Exercice 7 — grille 10–99
  const [ex7Grid, setEx7Grid] = useState<GridConfig>(generateEx7Grid);
  const [ex7Answers, setEx7Answers] = useState<Record<string, string>>({});
  const [ex7Results, setEx7Results] = useState<Record<string, boolean | null>>({});
  const [ex7Validated, setEx7Validated] = useState(false);

  const resetExercise7 = () => {
    setEx7Grid(generateEx7Grid());
    setEx7Answers({});
    setEx7Results({});
    setEx7Validated(false);
  };

  // Exercice 8 — séries de nombres
  const [ex8Series, setEx8Series] = useState<NumberSeries[]>(generateEx8);
  const [ex8Answers, setEx8Answers] = useState<Record<string, string>>({});
  const [ex8Results, setEx8Results] = useState<Record<string, boolean | null>>({});
  const [ex8Validated, setEx8Validated] = useState(false);

  const resetExercise8 = () => {
    setEx8Series(generateEx8());
    setEx8Answers({});
    setEx8Results({});
    setEx8Validated(false);
  };

  const lesson = MATH_A1_LESSONS[activeIdx];
  if (!lesson) return null;

  const theoryFr = pickTheoryFrench(lesson.theory);
  const pivotBody = pickTheoryPivotTranslation(pivot, lesson.theory);
  const introPivotBlock = lesson.theory.readAloud?.introPivot?.[pivot];
  const read = lesson.theory.readAloud;
  const isRtl = pivot === "ar" || pivot === "fa";

  const steps: Step[] = read
    ? ["theory", "audio", "ex1", "ex2", "ex3", "ex4", "ex5", "ex6", "ex7", "ex8"]
    : ["theory", "ex1", "ex2", "ex3", "ex4", "ex5", "ex6", "ex7", "ex8"];
  const stepIdx = steps.indexOf(step);

  const allStepCounts = MATH_A1_LESSONS.map((l) => (l.theory.readAloud ? 10 : 9));
  const totalSteps = allStepCounts.reduce((a, b) => a + b, 0);
  const completedSteps = allStepCounts.slice(0, activeIdx).reduce((a, b) => a + b, 0) + stepIdx;
  const overallPct = Math.round((completedSteps / totalSteps) * 100);

  const goTo = (s: Step) => { setStep(s); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const goNext = () => {
    const nextStep = steps[stepIdx + 1];
    if (nextStep) { goTo(nextStep); }
    else if (activeIdx < MATH_A1_LESSONS.length - 1) {
      setActiveIdx((i) => i + 1); setStep("theory");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else { router.push("/mathematiques"); }
  };

  const goBack = () => {
    const prevStep = steps[stepIdx - 1];
    if (prevStep) { goTo(prevStep); }
    else if (activeIdx > 0) {
      const prevIdx = activeIdx - 1;
      const prevLesson = MATH_A1_LESSONS[prevIdx];
      const prevSteps: Step[] = prevLesson?.theory.readAloud
        ? ["theory", "audio", "ex1", "ex2", "ex3", "ex4", "ex5", "ex6", "ex7", "ex8"]
        : ["theory", "ex1", "ex2", "ex3", "ex4", "ex5", "ex6", "ex7", "ex8"];
      setActiveIdx(prevIdx); setStep(prevSteps[prevSteps.length - 1]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isFirstStep = stepIdx === 0 && activeIdx === 0;
  const isLastStep = activeIdx === MATH_A1_LESSONS.length - 1 && stepIdx === steps.length - 1;

  return (
    <div className="space-y-4">
      <BubbleProgressBar value={overallPct} />

      {/* ── Théorie ─────────────────────────────────────────────────────────── */}
      {step === "theory" && (
        <AppCard
          variant="default"
          header={
            <div>
              <p className="text-sm font-medium uppercase text-[var(--color-accent-alg)]">Théorie</p>
              <h2 className="text-base font-semibold text-[var(--color-text-primary)]">{theoryFr.title}</h2>
            </div>
          }
        >
          <div className="space-y-3 text-sm leading-relaxed">
            {theoryFr.paragraphs.map((p, i) => (
              <div key={`${lesson.submoduleId}-fr-${i}`}>
                <p className="text-[var(--color-text-secondary)]">{p}</p>
                {showPivotTranslation && pivotBody?.[i] ? (
                  <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-primary)]"
                    lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                    {pivotBody[i]}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            {!isFirstStep ? (
              <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
            ) : <span />}
            <AppButton accent="alg" onClick={goNext}>Suivant →</AppButton>
          </div>
        </AppCard>
      )}

      {/* ── Écoute ──────────────────────────────────────────────────────────── */}
      {step === "audio" && read && (
        <AppCard
          variant="default"
          header={
            <div>
              <p className="text-sm font-medium uppercase text-[var(--color-accent-alg)]">Écoute</p>
              <h2 className="text-base font-semibold text-[var(--color-text-primary)]">{read.headingFr}</h2>
            </div>
          }
        >
          {read.introFr?.length ? (
            <div className="mb-4 space-y-2 text-sm leading-relaxed">
              {read.introFr.map((t, i) => (
                <div key={`ra-intro-${i}`}>
                  <p className="text-[var(--color-text-secondary)]">{t}</p>
                  {showPivotTranslation && introPivotBlock?.[i] ? (
                    <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-primary)]"
                      lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                      {introPivotBlock[i]}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}

          <div className="mb-3">
            <p className="text-[14px] text-[var(--color-text-secondary)]">
              Écoute l'enregistrement puis répète à voix haute.
            </p>
            {showPivotTranslation && LISTEN_REPEAT_PIVOT[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-primary)]"
                lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                {LISTEN_REPEAT_PIVOT[pivot]}
              </p>
            ) : null}
          </div>

          <div className="overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border-default)]">
            <table className="w-full min-w-[280px] border-collapse text-left text-sm">
              <tbody>
                {read.rows.map((row, ri) => (
                  <tr key={ri}>
                    <td className="border border-dashed border-zinc-300 px-3 py-2 dark:border-zinc-600">
                      <ReadAloudNumberCell cell={row.col1} />
                    </td>
                    <td className="border border-dashed border-zinc-300 px-3 py-2 dark:border-zinc-600">
                      <ReadAloudNumberCell cell={row.col2} />
                    </td>
                    <td className="border border-dashed border-zinc-300 px-3 py-2 dark:border-zinc-600">
                      <ReadAloudNumberCell cell={row.col3} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-2 flex flex-wrap gap-3 text-[length:var(--font-size-xs)]">
            {read.legendFr.map((leg) => (
              <li key={leg.labelFr} className="flex items-start gap-1.5">
                <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${legendSwatchClass(leg.swatch)}`} aria-hidden />
                <span>
                  <span className="text-[var(--color-text-secondary)]">{leg.labelFr}</span>
                  {showPivotTranslation && leg.labelPivot?.[pivot] ? (
                    <span className="block italic text-[var(--color-text-primary)]"
                      lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                      {leg.labelPivot[pivot]}
                    </span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>

          {read.audioSrc ? (
            <div className="mt-4"><AudioPlayer src={read.audioSrc} /></div>
          ) : null}

          <div className="mt-6 flex items-center justify-between">
            <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
            <AppButton accent="alg" onClick={goNext}>Suivant →</AppButton>
          </div>
        </AppCard>
      )}

      {/* ── Exercice 1 — Tracer les chiffres ────────────────────────────────── */}
      {step === "ex1" && (
        <AppCard
          variant="elevated"
          header={
            <div>
              <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 1</p>
              <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Tracer les chiffres</h2>
            </div>
          }
        >
          <div className="mb-6">
            <p className="text-sm text-[var(--color-text-secondary)]">Suivez le trait pour écrire les chiffres.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex1[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-primary)]"
                lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                {CONSIGNE_PIVOT.ex1[pivot]}
              </p>
            ) : null}
          </div>
          <div className="grid grid-cols-2 gap-6">
            {ex1Digits.map((digit) => (
              <div key={digit} className="flex justify-center">
                <div className="h-56 w-44 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white p-2 dark:bg-zinc-900">
                  <DigitGuide digit={digit} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
            <ActionIconButton action="recommencer" onClick={resetExercise1} />
            <AppButton accent="alg" onClick={goNext}>Suivant →</AppButton>
          </div>
        </AppCard>
      )}

      {/* ── Exercice 2 — Écrire les nombres ─────────────────────────────────── */}
      {step === "ex2" && (
        <AppCard
          variant="elevated"
          header={
            <div>
              <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 2</p>
              <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Écrire les nombres</h2>
            </div>
          }
        >
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Écrivez les nombres en lettres correctement.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex2[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-primary)]"
                lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                {CONSIGNE_PIVOT.ex2[pivot]}
              </p>
            ) : null}
          </div>
          <div className="space-y-3">
            {ex2Numbers.map((num, i) => (
              <ExerciseRow
                key={i}
                num={num} inputId={`ex2-${i}`}
                answer={ex2Answers[i] ?? ""} result={ex2Results[i] ?? null}
                validated={ex2Validated} correctWord={FR_WORDS[num] ?? ""}
                pivotWord={undefined}
                pivot={pivot} showPivot={false}
                onChange={(val) => { const n = [...ex2Answers]; n[i] = val; setEx2Answers(n); }}
              />
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
            <div className="flex gap-2">
              <ActionIconButton
                action="valider"
                onClick={() => {
                  setEx2Validated(true);
                  setEx2Results(ex2Numbers.map((n, i) => checkWord(ex2Answers[i] ?? "", n)));
                }}
                disabled={ex2Validated}
              />
              <ActionIconButton action="recommencer" onClick={resetExercise2} />
            </div>
            <AppButton accent="alg" onClick={goNext}>Suivant →</AppButton>
          </div>
        </AppCard>
      )}

      {/* ── Exercice 4 — Dictée audio ───────────────────────────────────────── */}
      {step === "ex4" && (
        <AppCard
          variant="elevated"
          header={
            <div>
              <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 4</p>
              <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Dictée</h2>
            </div>
          }
        >
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Écoutez et écrivez les nombres.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex4[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-primary)]"
                lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                {CONSIGNE_PIVOT.ex4[pivot]}
              </p>
            ) : null}
          </div>
          <div className="space-y-3">
            {ex4Numbers.map((num, i) => {
              const result = ex4Results[i] ?? null;
              return (
                <div key={i} className={`flex items-center gap-3 rounded-[var(--radius-md)] border p-3 transition-colors ${
                  result === null
                    ? "border-[var(--color-border-default)]"
                    : result
                      ? "border-green-400 bg-green-50 dark:bg-green-950/20"
                      : "border-red-400 bg-red-50 dark:bg-red-950/20"
                }`}>
                  <AudioPlayButton src={nombreAudioSrc(num)} />
                  {ex4Validated && result !== null ? (
                    <div className="flex h-10 flex-1 items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3">
                      <span className="tabular-nums font-bold text-[var(--color-accent-alg)]">{num}</span>
                      <span className="text-[var(--color-text-secondary)]">—</span>
                      {result ? (
                        <span className="text-sm font-medium text-green-600">{ex4Answers[i]}</span>
                      ) : (
                        <>
                          <span className="text-sm text-red-500 line-through">{ex4Answers[i]}</span>
                          <span className="text-sm font-medium text-[var(--color-text-primary)]">{num}</span>
                        </>
                      )}
                    </div>
                  ) : (
                    <AppInput label="" id={`ex4-${i}`} value={ex4Answers[i] ?? ""}
                      onChange={(e) => { const n = [...ex4Answers]; n[i] = e.target.value; setEx4Answers(n); }}
                      placeholder="chiffre…" autoComplete="off" inputMode="numeric" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
            <div className="flex gap-2">
              <ActionIconButton
                action="valider"
                onClick={() => {
                  setEx4Validated(true);
                  setEx4Results(ex4Numbers.map((n, i) => parseInt(ex4Answers[i] ?? "", 10) === n));
                }}
                disabled={ex4Validated}
              />
              <ActionIconButton action="recommencer" onClick={resetExercise4} />
            </div>
            <AppButton accent="alg" onClick={goNext}>
              {isLastStep ? "Terminer ✓" : "Suivant →"}
            </AppButton>
          </div>
        </AppCard>
      )}

      {/* ── Exercice 5 — Dictée audio dizaines ─────────────────────────────── */}
      {step === "ex5" && (
        <AppCard
          variant="elevated"
          header={
            <div>
              <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 5</p>
              <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Dictée — dizaines</h2>
            </div>
          }
        >
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Écoutez et écrivez les dizaines.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex5[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-primary)]"
                lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                {CONSIGNE_PIVOT.ex5[pivot]}
              </p>
            ) : null}
          </div>
          <div className="space-y-3">
            {ex5Numbers.map((num, i) => {
              const result = ex5Results[i] ?? null;
              return (
                <div key={i} className={`flex items-center gap-3 rounded-[var(--radius-md)] border p-3 transition-colors ${
                  result === null
                    ? "border-[var(--color-border-default)]"
                    : result
                      ? "border-green-400 bg-green-50 dark:bg-green-950/20"
                      : "border-red-400 bg-red-50 dark:bg-red-950/20"
                }`}>
                  <AudioPlayButton src={nombreAudioSrc(num)} />
                  {ex5Validated && result !== null ? (
                    <div className="flex h-10 flex-1 items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3">
                      {result ? (
                        <span className="text-sm font-medium text-green-600">{ex5Answers[i]}</span>
                      ) : (
                        <>
                          <span className="text-sm text-red-500 line-through">{ex5Answers[i]}</span>
                          <span className="text-sm font-medium text-[var(--color-text-primary)]">{num}</span>
                        </>
                      )}
                    </div>
                  ) : (
                    <AppInput label="" id={`ex5-${i}`} value={ex5Answers[i] ?? ""}
                      onChange={(e) => { const n = [...ex5Answers]; n[i] = e.target.value; setEx5Answers(n); }}
                      placeholder="chiffre…" autoComplete="off" inputMode="numeric" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
            <div className="flex gap-2">
              <ActionIconButton
                action="valider"
                onClick={() => {
                  setEx5Validated(true);
                  setEx5Results(ex5Numbers.map((n, i) => parseInt(ex5Answers[i] ?? "", 10) === n));
                }}
                disabled={ex5Validated}
              />
              <ActionIconButton action="recommencer" onClick={resetExercise5} />
            </div>
            <AppButton accent="alg" onClick={goNext}>
              {isLastStep ? "Terminer ✓" : "Suivant →"}
            </AppButton>
          </div>
        </AppCard>
      )}

      {/* ── Exercice 6 — Dictée audio centaines composées ──────────────────── */}
      {step === "ex6" && (
        <AppCard
          variant="elevated"
          header={
            <div>
              <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 6</p>
              <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Dictée — centaines</h2>
            </div>
          }
        >
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Écoutez et écrivez les nombres.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex6[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-primary)]"
                lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                {CONSIGNE_PIVOT.ex6[pivot]}
              </p>
            ) : null}
          </div>
          <div className="space-y-3">
            {ex6Compositions.map((comp, i) => {
              const result = ex6Results[i] ?? null;
              return (
                <div key={i} className={`flex items-center gap-3 rounded-[var(--radius-md)] border p-3 transition-colors ${
                  result === null
                    ? "border-[var(--color-border-default)]"
                    : result
                      ? "border-green-400 bg-green-50 dark:bg-green-950/20"
                      : "border-red-400 bg-red-50 dark:bg-red-950/20"
                }`}>
                  <SequentialAudioButton clips={comp.clips} />
                  {ex6Validated && result !== null ? (
                    <div className="flex h-10 flex-1 items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3">
                      {result ? (
                        <span className="text-sm font-medium text-green-600">{ex6Answers[i]}</span>
                      ) : (
                        <>
                          <span className="text-sm text-red-500 line-through">{ex6Answers[i]}</span>
                          <span className="text-sm font-medium text-[var(--color-text-primary)]">{comp.value}</span>
                        </>
                      )}
                    </div>
                  ) : (
                    <AppInput label="" id={`ex6-${i}`} value={ex6Answers[i] ?? ""}
                      onChange={(e) => { const n = [...ex6Answers]; n[i] = e.target.value; setEx6Answers(n); }}
                      placeholder="chiffre…" autoComplete="off" inputMode="numeric" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
            <div className="flex gap-2">
              <ActionIconButton
                action="valider"
                onClick={() => {
                  setEx6Validated(true);
                  setEx6Results(ex6Compositions.map((comp, i) =>
                    parseInt(ex6Answers[i] ?? "", 10) === comp.value
                  ));
                }}
                disabled={ex6Validated}
              />
              <ActionIconButton action="recommencer" onClick={resetExercise6} />
            </div>
            <AppButton accent="alg" onClick={goNext}>
              {isLastStep ? "Terminer ✓" : "Suivant →"}
            </AppButton>
          </div>
        </AppCard>
      )}

      {/* ── Exercice 7 — Grille 10–99 ───────────────────────────────────────── */}
      {step === "ex7" && (
        <AppCard
          variant="elevated"
          header={
            <div>
              <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 7</p>
              <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Grille des nombres</h2>
            </div>
          }
        >
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Complétez la grille des nombres de 10 à 99.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex7[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-primary)]"
                lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                {CONSIGNE_PIVOT.ex7[pivot]}
              </p>
            ) : null}
            <p className="mt-2 flex flex-wrap gap-4 text-xs text-[var(--color-text-secondary)]">
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded border border-dashed border-red-400 bg-white" />
                Nombre donné
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded bg-green-100" />
                À compléter
              </span>
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="border-collapse text-xs">
              <thead>
                <tr>
                  <th className="w-8 border border-zinc-300 bg-zinc-100 px-1 py-1.5 text-center text-[11px] font-semibold text-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-400" />
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((u) => (
                    <th key={u} className="w-8 border border-zinc-300 bg-zinc-100 px-1 py-1.5 text-center text-[11px] font-bold text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200">
                      {u}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((d) => (
                  <tr key={d}>
                    <th className="border border-zinc-300 bg-zinc-100 px-1 py-1 text-center text-[11px] font-bold text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200">
                      {d}
                    </th>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((u) => {
                      const key = `${d}-${u}`;
                      const value = d + u;
                      const state = ex7Grid[key] ?? "empty";
                      const result = ex7Results[key] ?? null;

                      if (state === "revealed") {
                        return (
                          <td key={u} className="border border-dashed border-red-400 px-0.5 py-1 text-center">
                            <span className="font-bold tabular-nums text-red-500">{value}</span>
                          </td>
                        );
                      }
                      if (state === "fill") {
                        if (ex7Validated && result !== null) {
                          return (
                            <td key={u} className={`border px-0.5 py-1 text-center ${result ? "border-green-400 bg-green-50 dark:bg-green-950/20" : "border-red-400 bg-red-50 dark:bg-red-950/20"}`}>
                              {result
                                ? <span className="font-medium tabular-nums text-green-600">{ex7Answers[key] ?? ""}</span>
                                : <span className="font-medium tabular-nums text-[var(--color-text-primary)]">{value}</span>
                              }
                            </td>
                          );
                        }
                        return (
                          <td key={u} className="border border-zinc-300 bg-green-50 px-0 py-0 dark:bg-green-950/20">
                            <input
                              type="text" inputMode="numeric"
                              value={ex7Answers[key] ?? ""}
                              onChange={(e) => setEx7Answers((prev) => ({ ...prev, [key]: e.target.value }))}
                              className="h-8 w-8 bg-transparent text-center text-[11px] font-medium tabular-nums outline-none"
                              aria-label={`Cellule ${value}`}
                            />
                          </td>
                        );
                      }
                      return <td key={u} className="border border-zinc-200 px-1 py-1 dark:border-zinc-700" />;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
            <div className="flex gap-2">
              <ActionIconButton
                action="valider"
                onClick={() => {
                  const results: Record<string, boolean | null> = {};
                  for (const [key, state] of Object.entries(ex7Grid)) {
                    if (state === "fill") {
                      const parts = key.split("-").map(Number);
                      results[key] = parseInt(ex7Answers[key] ?? "", 10) === (parts[0]! + parts[1]!);
                    }
                  }
                  setEx7Results(results);
                  setEx7Validated(true);
                }}
                disabled={ex7Validated}
              />
              <ActionIconButton action="recommencer" onClick={resetExercise7} />
            </div>
            <AppButton accent="alg" onClick={goNext}>
              {isLastStep ? "Terminer ✓" : "Suivant →"}
            </AppButton>
          </div>
        </AppCard>
      )}

      {/* ── Exercice 8 — Séries de nombres ──────────────────────────────────── */}
      {step === "ex8" && (
        <AppCard
          variant="elevated"
          header={
            <div>
              <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 8</p>
              <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Séries de nombres</h2>
            </div>
          }
        >
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Complétez les séries de nombres.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex8[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-primary)]"
                lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                {CONSIGNE_PIVOT.ex8[pivot]}
              </p>
            ) : null}
          </div>
          <div className="space-y-4">
            {ex8Series.map((series, si) => (
              <div key={si} className="flex flex-wrap gap-1">
                {Array.from({ length: series.count }, (_, i) => {
                  const num = series.start + i;
                  const isBlank = series.blanks.includes(i);
                  const ansKey = `${si}-${i}`;
                  const result = ex8Results[ansKey] ?? null;

                  if (isBlank) {
                    if (ex8Validated && result !== null) {
                      return (
                        <div key={i} className={`flex h-10 w-12 items-center justify-center rounded-[var(--radius-md)] border-2 text-sm font-medium tabular-nums ${result ? "border-green-400 bg-green-50 text-green-600 dark:bg-green-950/20" : "border-red-400 bg-red-50 text-[var(--color-text-primary)] dark:bg-red-950/20"}`}>
                          {result ? ex8Answers[ansKey] : num}
                        </div>
                      );
                    }
                    return (
                      <input
                        key={i} type="text" inputMode="numeric"
                        value={ex8Answers[ansKey] ?? ""}
                        onChange={(e) => setEx8Answers((prev) => ({ ...prev, [ansKey]: e.target.value }))}
                        className="h-10 w-12 rounded-[var(--radius-md)] border-2 border-[var(--color-accent-alg)] bg-blue-50 text-center text-sm font-medium tabular-nums outline-none dark:bg-blue-950/20"
                        aria-label={`Série ${si + 1}, position ${i + 1}`}
                      />
                    );
                  }
                  return (
                    <div key={i} className="flex h-10 w-12 items-center justify-center rounded-[var(--radius-md)] border border-zinc-300 bg-orange-50 text-sm font-medium tabular-nums text-zinc-700 dark:border-zinc-600 dark:bg-orange-950/20 dark:text-zinc-300">
                      {num}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
            <div className="flex gap-2">
              <ActionIconButton
                action="valider"
                onClick={() => {
                  const results: Record<string, boolean | null> = {};
                  for (const [si, series] of ex8Series.entries()) {
                    for (const i of series.blanks) {
                      const ansKey = `${si}-${i}`;
                      results[ansKey] = parseInt(ex8Answers[ansKey] ?? "", 10) === series.start + i;
                    }
                  }
                  setEx8Results(results);
                  setEx8Validated(true);
                }}
                disabled={ex8Validated}
              />
              <ActionIconButton action="recommencer" onClick={resetExercise8} />
            </div>
            <AppButton accent="alg" onClick={goNext}>
              {isLastStep ? "Terminer ✓" : "Suivant →"}
            </AppButton>
          </div>
        </AppCard>
      )}

      {/* ── Exercice 3 — Écrire les dizaines ────────────────────────────────── */}
      {step === "ex3" && (
        <AppCard
          variant="elevated"
          header={
            <div>
              <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 3</p>
              <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Écrire les dizaines</h2>
            </div>
          }
        >
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Écrivez les dizaines en lettres correctement.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex3[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-primary)]"
                lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                {CONSIGNE_PIVOT.ex3[pivot]}
              </p>
            ) : null}
          </div>
          <div className="space-y-3">
            {ex3Numbers.map((num, i) => (
              <ExerciseRow
                key={i}
                num={num} inputId={`ex3-${i}`}
                answer={ex3Answers[i] ?? ""} result={ex3Results[i] ?? null}
                validated={ex3Validated} correctWord={FR_TENS[num] ?? ""}
                pivotWord={undefined}
                pivot={pivot} showPivot={false}
                onChange={(val) => { const n = [...ex3Answers]; n[i] = val; setEx3Answers(n); }}
              />
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
            <div className="flex gap-2">
              <ActionIconButton
                action="valider"
                onClick={() => {
                  setEx3Validated(true);
                  setEx3Results(ex3Numbers.map((n, i) => checkTensWord(ex3Answers[i] ?? "", n)));
                }}
                disabled={ex3Validated}
              />
              <ActionIconButton action="recommencer" onClick={resetExercise3} />
            </div>
            <AppButton accent="alg" onClick={goNext}>
              {isLastStep ? "Terminer ✓" : "Suivant →"}
            </AppButton>
          </div>
        </AppCard>
      )}
    </div>
  );
}

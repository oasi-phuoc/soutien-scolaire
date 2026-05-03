"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AppCard } from "@/components/ui/AppCard";
import { AppButton } from "@/components/ui/AppButton";
import { AppInput } from "@/components/ui/AppInput";
import { ActionIconButton } from "@/components/ui/ActionIconButton";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { MATH_A1_LESSONS } from "@/lib/curriculum/content/math-a1";
import type {
  MathExerciseItem,
  MathSubmoduleLesson,
  ReadAloudCell,
  ReadAloudLegendItem,
  WordPhonemeKind,
} from "@/lib/curriculum/content/math-a1-types";
import {
  answerMatches,
  pickTheoryFrench,
  pickTheoryPivotTranslation,
} from "@/lib/curriculum/content/math-a1-types";
import type { PivotCode } from "@/lib/pivot-langs";
import {
  LEVEL_PASSING_GRADES,
  LEVEL_LABELS,
  linearSwissGrade,
  type LevelKey,
} from "@/lib/scoring";
import {
  loadProgress,
  saveProgress,
  completeSubmodule,
} from "@/lib/progress/math-progress";

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

function renderBold(text: string): React.ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part);
}

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

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
  const unites = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const all: string[] = [];
  for (const d of dizaines) for (const u of unites) all.push(`${d}-${u}`);
  const sh = shuffle(all);
  const cfg: GridConfig = {};
  for (const k of all) cfg[k] = "empty";

  const isAdjacent = (a: string, b: string) => {
    const [ad, au] = a.split("-").map(Number);
    const [bd, bu] = b.split("-").map(Number);
    return (ad === bd && Math.abs(au! - bu!) === 1) || (au === bu && Math.abs(ad! - bd!) === 10);
  };

  const fills: string[] = [];
  for (const key of sh) {
    if (fills.length >= 10) break;
    if (!fills.some(f => isAdjacent(f, key))) {
      fills.push(key);
      cfg[key] = "fill";
    }
  }

  let rev = 0;
  for (const key of sh) {
    if (rev >= 9) break;
    if (cfg[key] === "empty") { cfg[key] = "revealed"; rev++; }
  }

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
  for (let s = 0; s < 5; s++) {
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

const CONSIGNE_PIVOT: Record<"ex1"|"ex2"|"ex3"|"ex4"|"ex5"|"ex6"|"ex7"|"ex8"|"ex9"|"ex10"|"ex11"|"ex12"|"ex13", Partial<Record<PivotCode, string>>> = {
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
    en: "Fill in the blue cells in the table.",
    ar: "أكمل الخلايا الزرقاء في الجدول.",
    fa: "خانه‌های آبی جدول را پر کنید.",
    uk: "Заповніть сині клітинки таблиці.",
    ti: "ናይ ሰሌዳ ሰማያዊ ኩርናዕታት ምልኡ።",
  },
  ex8: {
    en: "Complete the number series.",
    ar: "أكمل سلاسل الأرقام.",
    fa: "دنباله‌های عددی را کامل کنید.",
    uk: "Доповніть числові ряди.",
    ti: "ናይ ቁጽርታት ተኸታተልቲ ምልኡ።",
  },
  ex9: {
    en: "Choose how many units there are.",
    ar: "اختر كم عدد الوحدات.",
    fa: "انتخاب کنید چند واحد وجود دارد.",
    uk: "Виберіть, скільки одиниць.",
    ti: "ክንደይ ውልቃት ከምዘሎ ምረጽ።",
  },
  ex10: {
    en: "Count how many units there are.",
    ar: "عدّ كم عدد الوحدات.",
    fa: "بشمارید چند واحد وجود دارد.",
    uk: "Порахуйте, скільки одиниць.",
    ti: "ክንደይ ውልቃት ከምዘሎ ቁጸር።",
  },
  ex11: {
    en: "Write how many thousands, hundreds, tens and units.",
    ar: "اكتب كم من الآلاف والمئات والعشرات والوحدات.",
    fa: "بنویسید چند هزار، صد، ده و یک وجود دارد.",
    uk: "Напишіть, скільки тисяч, сотень, десятків та одиниць.",
    ti: "ክንደይ ሽሕ፡ ሚእቲ፡ ዓሰርተ፡ ውልቂ ምጽሓፍ።",
  },
  ex12: {
    en: "Count how many cubes there are.",
    ar: "عدّ كم عدد المكعبات.",
    fa: "بشمارید چند مکعب وجود دارد.",
    uk: "Порахуйте, скільки кубиків.",
    ti: "ክንደይ ኪዩብታት ከምዘሎ ቁጸር።",
  },
  ex13: {
    en: "Count how many cubes there are.",
    ar: "عدّ كم عدد المكعبات.",
    fa: "بشمارید چند مکعب وجود دارد.",
    uk: "Порахуйте, скільки кубиків.",
    ti: "ክንደይ ኪዩብታት ከምዘሎ ቁጸር።",
  },
};

// ─── Évaluation ───────────────────────────────────────────────────────────────

interface EvalItem extends MathExerciseItem {
  audioSrc?: string;
  clips?: string[];
  numValue?: number;
  seriesNums?: number[];
  blankIdx?: number;
}

const EVAL_INTRO_PIVOT: Partial<Record<PivotCode, string>> = {
  en: "Answer the questions to validate this sub-module.",
  ar: "أجب على الأسئلة للتحقق من إتقانك لهذا الجزء.",
  fa: "برای تأیید این بخش به سؤالات پاسخ دهید.",
  uk: "Дайте відповіді на запитання, щоб підтвердити цей підмодуль.",
  ti: "ነቲ ሕቶታት መልሲ ሃቡ ነዚ ምዑዝ ምፍጣር ንምርግጋጽ።",
};

function generateA11EvalItems(): EvalItem[] {
  const all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sh = shuffle(all);

  // 4 questions Ex2 style : chiffre → lettres
  const numToLetters: EvalItem[] = sh.slice(0, 4).map((num) => ({
    id: `eval-nl-${num}`,
    promptFr: `Écris en lettres : ${num}`,
    type: "short_text" as const,
    acceptable: num === 1 ? ["un", "une"] : [FR_WORDS[num]!],
    numValue: num,
  }));

  // 4 questions Ex6 style : écouter → chiffres (centaines, SequentialAudioButton)
  const audioItems: EvalItem[] = Array.from({ length: 4 }, (_, idx) => {
    const comp = generateEx6Composition();
    return {
      id: `eval-audio-${idx}`,
      promptFr: "",
      type: "number" as const,
      acceptable: [String(comp.value)],
      clips: comp.clips,
    };
  });

  // 2 questions Ex8 style : 2 séries différentes, chacune avec un blanc distinct
  const s1Start = Math.floor(Math.random() * 83) + 10;
  let s2Start = Math.floor(Math.random() * 83) + 10;
  while (Math.abs(s2Start - s1Start) < 5) s2Start = Math.floor(Math.random() * 83) + 10;
  const nums1 = Array.from({ length: 8 }, (_, i) => s1Start + i);
  const nums2 = Array.from({ length: 8 }, (_, i) => s2Start + i);
  const bi1 = shuffle([0, 1, 2, 3, 4, 5, 6, 7])[0]!;
  const bi2 = shuffle([0, 1, 2, 3, 4, 5, 6, 7])[0]!;
  const seriesItems: EvalItem[] = [
    { id: "eval-series-0", promptFr: "", type: "number" as const, acceptable: [String(nums1[bi1]!)], seriesNums: nums1, blankIdx: bi1 },
    { id: "eval-series-1", promptFr: "", type: "number" as const, acceptable: [String(nums2[bi2]!)], seriesNums: nums2, blankIdx: bi2 },
  ];

  return [...numToLetters, ...audioItems, ...seriesItems];
}

// ─── Composants partagés ──────────────────────────────────────────────────────

type Step = "theory" | "audio" | "ex1" | "ex2" | "ex3" | "ex4" | "ex5" | "ex6" | "ex7" | "ex8" | "ex9" | "ex10" | "ex11" | "ex12" | "ex13" | "eval";

function getLessonSteps(lesson: MathSubmoduleLesson): Step[] {
  const hasAudio = !!lesson.theory.readAloud;
  if (lesson.submoduleId === "A1-1") {
    return hasAudio
      ? ["theory", "audio", "ex1", "ex2", "ex3", "ex4", "ex5", "ex6", "ex7", "ex8", "eval"]
      : ["theory", "ex1", "ex2", "ex3", "ex4", "ex5", "ex6", "ex7", "ex8", "eval"];
  }
  if (lesson.submoduleId === "A1-2") {
    return ["theory", "ex9", "ex10", "ex11", "ex12", "ex13", "eval"];
  }
  return hasAudio ? ["theory", "audio", "eval"] : ["theory", "eval"];
}

// ─── Ex9 — choix multiple blocs (dizaines + unités) ──────────────────────────

type Ex9Question = { tens: number; units: number; choices: [number, number, number] };

function generateEx9(): Ex9Question[] {
  const used = new Set<string>();
  const questions: Ex9Question[] = [];
  let guard = 0;
  while (questions.length < 3 && guard++ < 500) {
    // tens : 0–9 barres, units : tel que total éléments ∈ [2,30] et valeur ≤ 99
    const tens = Math.floor(Math.random() * 10);
    const maxUnits = Math.min(30 - tens, 99 - tens * 10);
    const minUnits = Math.max(0, 2 - tens);
    if (maxUnits < minUnits) continue;
    const units = Math.floor(Math.random() * (maxUnits - minUnits + 1)) + minUnits;
    if (tens === 0 && units === 0) continue;
    const key = `${tens}-${units}`;
    if (used.has(key)) continue;
    used.add(key);
    const value = tens * 10 + units;
    const candidateDeltas = [-10, 10, -1, 1, -11, 11, -9, 9, -2, 2, -12, 12];
    const candidates = shuffle(
      candidateDeltas.map(d => value + d).filter(v => v > 0 && v !== value)
    );
    const chosen = new Set<number>([value]);
    for (const c of candidates) {
      if (chosen.size >= 3) break;
      chosen.add(c);
    }
    let extra = 1;
    while (chosen.size < 3) { if (!chosen.has(extra)) chosen.add(extra); extra++; }
    questions.push({ tens, units, choices: shuffle([...chosen]) as [number, number, number] });
  }
  return questions;
}

// ─── SVG dizaine horizontale (pour Ex9) ──────────────────────────────────────

function SvgDizaineH({ s = 8 }: { s?: number }) {
  return (
    <svg width={s * 10 + 1} height={s + 1} aria-hidden>
      {Array.from({ length: 10 }, (_, i) => (
        <rect key={i} x={i * s + 0.5} y={0.5} width={s - 1} height={s - 1}
          fill="#FED7AA" stroke="#F97316" strokeWidth="0.5" rx="0.5" />
      ))}
    </svg>
  );
}

// ─── Ex12 & Ex13 — cubes (images réelles) ────────────────────────────────────

const DECOMPOSE_IMAGES = [
  "cubes-dec-20", "cubes-dec-27", "cubes-dec-30", "cubes-dec-35",
  "cubes-dec-42", "cubes-dec-46", "cubes-dec-60",
];

const ASSEMBLE_IMAGES = [
  "cubes-14", "cubes-19", "cubes-30", "cubes-35", "cubes-44",
  "cubes-61", "cubes-65", "cubes-68", "cubes-79", "cubes-81",
  "cubes-84", "cubes-90", "cubes-95", "cubes-98", "cubes-105", "cubes-108",
];

type Ex12Question = { src: string; answer: number };

function pickImage(pool: string[], folder: string): Ex12Question {
  const name = pool[Math.floor(Math.random() * pool.length)]!;
  const answer = parseInt(name.split("-").at(-1)!, 10);
  return { src: `/images/cubes/${folder}/${name}.png`, answer };
}

function generateEx12(): Ex12Question[] { return [pickImage(DECOMPOSE_IMAGES, "decompose")]; }
function generateEx13(): Ex12Question[] { return [pickImage(ASSEMBLE_IMAGES, "assemble")]; }

// ─── Ex10 — comptage blocs éparpillés (centaines + dizaines + unités) ────────

type BlockPos = { kind: "m" | "h" | "d" | "u"; x: number; y: number };

type Ex10Question = { h: number; d: number; u: number; positions: BlockPos[]; canvasH: number };

function generateEx10(): Ex10Question[] {
  const W = 420;
  const SIZES: Record<"m" | "h" | "d" | "u", [number, number]> = { m: [50, 50], h: [51, 51], d: [9, 81], u: [15, 15] };

  function placeBlock(kind: "m" | "h" | "d" | "u", placed: BlockPos[], H: number): BlockPos {
    const [bw, bh] = SIZES[kind]!;
    // 500 tentatives aléatoires sans chevauchement
    for (let attempt = 0; attempt < 500; attempt++) {
      const x = Math.random() * (W - bw);
      const y = Math.random() * (H - bh);
      const ok = placed.every(p => {
        const [pw, ph] = SIZES[p.kind]!;
        return x + bw < p.x - 2 || x > p.x + pw + 2 || y + bh < p.y - 2 || y > p.y + ph + 2;
      });
      if (ok) return { kind, x, y };
    }
    // Fallback : scan de grille → position avec minimum de recouvrement
    let bestX = 0, bestY = 0, bestOverlap = Infinity;
    const step = 16;
    outer: for (let gx = 0; gx + bw <= W; gx += step) {
      for (let gy = 0; gy + bh <= H; gy += step) {
        let overlap = 0;
        for (const p of placed) {
          const [pw, ph] = SIZES[p.kind]!;
          const ox = Math.max(0, Math.min(gx + bw, p.x + pw) - Math.max(gx, p.x));
          const oy = Math.max(0, Math.min(gy + bh, p.y + ph) - Math.max(gy, p.y));
          overlap += ox * oy;
          if (overlap >= bestOverlap) break;
        }
        if (overlap < bestOverlap) { bestOverlap = overlap; bestX = gx; bestY = gy; }
        if (bestOverlap === 0) break outer;
      }
    }
    return { kind, x: bestX, y: bestY };
  }

  return Array.from({ length: 2 }, () => {
    // 20–50 éléments — plaque ≤ 10, barre ≤ 15, unité ≤ 20, valeur ≤ 999
    let h = 0, d = 5, u = 15;
    for (let guard = 0; guard < 500; guard++) {
      const target = Math.floor(Math.random() * 31) + 20; // 20–50
      const _h = Math.floor(Math.random() * 10);          // 0–9 (10×100=1000>999)
      const _d = Math.floor(Math.random() * 16);          // 0–15
      const _u = target - _h - _d;
      if (_u < 0 || _u > 20) continue;
      if (_h * 100 + _d * 10 + _u > 999) continue;
      h = _h; d = _d; u = _u;
      break;
    }
    const total = h + d + u;
    const canvasH = Math.max(220, 180 + Math.max(0, total - 25) * 5);
    const kinds: ("m" | "h" | "d" | "u")[] = [
      ...Array(h).fill("h"), ...Array(d).fill("d"), ...Array(u).fill("u"),
    ];
    const positions: BlockPos[] = [];
    for (const kind of shuffle(kinds)) positions.push(placeBlock(kind, positions, canvasH));
    return { h, d, u, positions, canvasH };
  });
}

// ─── Ex11 — décomposition M+C+D+U ────────────────────────────────────────────

type Ex11Question = { m: number; c: number; d: number; u: number; positions: BlockPos[]; canvasH: number };

function generateEx11(): Ex11Question[] {
  const W = 420;
  const SIZES: Record<"m" | "h" | "d" | "u", [number, number]> = { m: [50, 50], h: [51, 51], d: [10, 91], u: [17, 17] };

  function placeBlock(kind: "m" | "h" | "d" | "u", placed: BlockPos[], H: number): BlockPos {
    const [bw, bh] = SIZES[kind]!;
    for (let attempt = 0; attempt < 500; attempt++) {
      const x = Math.random() * (W - bw);
      const y = Math.random() * (H - bh);
      const ok = placed.every(p => {
        const [pw, ph] = SIZES[p.kind]!;
        return x + bw < p.x - 2 || x > p.x + pw + 2 || y + bh < p.y - 2 || y > p.y + ph + 2;
      });
      if (ok) return { kind, x, y };
    }
    let bestX = 0, bestY = 0, bestOverlap = Infinity;
    const step = 16;
    outer: for (let gx = 0; gx + bw <= W; gx += step) {
      for (let gy = 0; gy + bh <= H; gy += step) {
        let overlap = 0;
        for (const p of placed) {
          const [pw, ph] = SIZES[p.kind]!;
          const ox = Math.max(0, Math.min(gx + bw, p.x + pw) - Math.max(gx, p.x));
          const oy = Math.max(0, Math.min(gy + bh, p.y + ph) - Math.max(gy, p.y));
          overlap += ox * oy;
          if (overlap >= bestOverlap) break;
        }
        if (overlap < bestOverlap) { bestOverlap = overlap; bestX = gx; bestY = gy; }
        if (bestOverlap === 0) break outer;
      }
    }
    return { kind, x: bestX, y: bestY };
  }

  return Array.from({ length: 1 }, () => {
    // 10–50 éléments — millier ≤ 9, plaque ≤ 10, barre ≤ 15, unité ≤ 20
    let m = 1, c = 3, d = 3, u = 3;
    for (let guard = 0; guard < 500; guard++) {
      const target = Math.floor(Math.random() * 41) + 10; // 10–50
      const _m = Math.floor(Math.random() * 9) + 1;  // 1–9
      const _c = Math.floor(Math.random() * 11);      // 0–10
      const _d = Math.floor(Math.random() * 16);      // 0–15
      const _u = target - _m - _c - _d;
      if (_u < 0 || _u > 20) continue;
      m = _m; c = _c; d = _d; u = _u;
      break;
    }
    const total = m + c + d + u;
    const canvasH = Math.max(240, 200 + Math.max(0, total - 10) * 10);
    const kinds: ("m" | "h" | "d" | "u")[] = [
      ...Array(m).fill("m"), ...Array(c).fill("h"), ...Array(d).fill("d"), ...Array(u).fill("u"),
    ];
    const positions: BlockPos[] = [];
    for (const kind of shuffle(kinds)) positions.push(placeBlock(kind, positions, canvasH));
    return { m, c, d, u, positions, canvasH };
  });
}

const A1_POS_KEY = "soutien:a1-pos";

function loadA1Position(): { lessonIdx: number; step: Step } {
  if (typeof window === "undefined") return { lessonIdx: 0, step: "theory" };
  try {
    const raw = localStorage.getItem(A1_POS_KEY);
    if (!raw) return { lessonIdx: 0, step: "theory" };
    const data = JSON.parse(raw) as { lessonIdx?: number; step?: string };
    const lessonIdx =
      typeof data.lessonIdx === "number" &&
      data.lessonIdx >= 0 &&
      data.lessonIdx < MATH_A1_LESSONS.length
        ? data.lessonIdx
        : 0;
    const lesson = MATH_A1_LESSONS[lessonIdx]!;
    const validSteps = getLessonSteps(lesson);
    const step =
      data.step && validSteps.includes(data.step as Step)
        ? (data.step as Step)
        : "theory";
    return { lessonIdx, step };
  } catch {
    return { lessonIdx: 0, step: "theory" };
  }
}

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

// ─── SVG blocs valeur positionnelle ──────────────────────────────────────────

function SvgMillier({ s = 4, d = 9 }: { s?: number; d?: number }) {
  const fw = s * 10, fh = s * 10;
  return (
    <svg width={fw + d + 1} height={fh + d + 1} aria-hidden>
      <polygon points={`0,${d} ${fw},${d} ${fw + d},0 ${d},0`} fill="#BBF7D0" stroke="#6EE7B7" strokeWidth="0.5" />
      <polygon points={`${fw},${d} ${fw + d},0 ${fw + d},${fh} ${fw},${fh + d}`} fill="#34D399" stroke="#10B981" strokeWidth="0.5" />
      {Array.from({ length: 10 }, (_, row) =>
        Array.from({ length: 10 }, (_, col) => (
          <rect key={`${row}-${col}`} x={col * s + 0.5} y={d + row * s + 0.5} width={s - 1} height={s - 1} fill="#6EE7B7" stroke="#34D399" strokeWidth="0.5" rx="0.5" />
        ))
      )}
    </svg>
  );
}
function SvgCentaine({ s = 7 }: { s?: number }) {
  return (
    <svg width={s * 10 + 1} height={s * 10 + 1} aria-hidden>
      {Array.from({ length: 10 }, (_, row) =>
        Array.from({ length: 10 }, (_, col) => (
          <rect key={`${row}-${col}`} x={col * s + 0.5} y={row * s + 0.5} width={s - 1} height={s - 1} fill="#C4B5FD" stroke="#8B5CF6" strokeWidth="0.5" rx="0.5" />
        ))
      )}
    </svg>
  );
}
function SvgDizaine({ s = 7 }: { s?: number }) {
  return (
    <svg width={s + 1} height={s * 10 + 1} aria-hidden>
      {Array.from({ length: 10 }, (_, i) => (
        <rect key={i} x={0.5} y={i * s + 0.5} width={s - 1} height={s - 1} fill="#FED7AA" stroke="#F97316" strokeWidth="0.5" rx="0.5" />
      ))}
    </svg>
  );
}
function SvgUnite({ s = 16 }: { s?: number }) {
  return (
    <svg width={s + 1} height={s + 1} aria-hidden>
      <rect x={0.5} y={0.5} width={s - 1} height={s - 1} fill="#BAE6FD" stroke="#38BDF8" strokeWidth="0.5" rx="1.5" />
    </svg>
  );
}

// ─── Illustration valeur positionnelle (A1-2) ────────────────────────────────

function PlaceValueIllustration() {
  const items = [
    { label: "1 Millier = 1000", color: "text-emerald-600 dark:text-emerald-400", svg: <SvgMillier s={4} d={9} /> },
    { label: "1 Centaine = 100", color: "text-violet-600 dark:text-violet-400",   svg: <SvgCentaine s={7} /> },
    { label: "1 Dizaine = 10",   color: "text-orange-500 dark:text-orange-400",   svg: <SvgDizaine s={9} /> },
    { label: "1 Unité",          color: "text-sky-500 dark:text-sky-400",          svg: <SvgUnite s={22} /> },
  ];
  return (
    <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white p-4 dark:bg-zinc-950">
      <table className="w-full table-fixed border-0 border-collapse">
        <tbody>
          <tr>
            {items.map(({ label, color }) => (
              <td key={label} className="border-0 pb-1 text-center">
                <span className={`text-xs font-bold ${color}`}>{label}</span>
              </td>
            ))}
          </tr>
          <tr>
            {items.map(({ label, svg }) => (
              <td key={label} className="border-0 text-center align-middle">
                <div className="flex h-20 items-center justify-center">
                  {svg}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
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
          placeholder="en lettres…" autoComplete="off"
          className="!bg-blue-50 dark:!bg-blue-950/30" />
      )}
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────

export function A1ModuleContent() {
  const router = useRouter();
  const pivot = usePivotLang();
  const { showPivot: showPivotTranslation } = useTranslation();
  const [activeIdx, setActiveIdx] = useState(() => loadA1Position().lessonIdx);
  const [step, setStep] = useState<Step>(() => loadA1Position().step);

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

  // Ex9 — choix multiple
  const [ex9Questions, setEx9Questions] = useState<Ex9Question[]>(generateEx9);
  const [ex9Selected, setEx9Selected] = useState<(number | null)[]>(Array(3).fill(null));
  const [ex9Validated, setEx9Validated] = useState(false);

  const resetEx9 = () => { setEx9Questions(generateEx9()); setEx9Selected(Array(3).fill(null)); setEx9Validated(false); };

  // Ex10 — comptage blocs éparpillés
  const [ex10Questions, setEx10Questions] = useState<Ex10Question[]>(generateEx10);
  const [ex10Answers, setEx10Answers] = useState<string[]>(Array(2).fill(""));
  const [ex10Results, setEx10Results] = useState<(boolean | null)[]>(Array(2).fill(null));
  const [ex10Validated, setEx10Validated] = useState(false);

  const resetEx10 = () => { setEx10Questions(generateEx10()); setEx10Answers(Array(2).fill("")); setEx10Results(Array(2).fill(null)); setEx10Validated(false); };

  // Ex11 — décomposition
  const [ex11Questions, setEx11Questions] = useState<Ex11Question[]>(generateEx11);
  const [ex11Answers, setEx11Answers] = useState<string[]>(Array(1).fill(""));
  const [ex11Results, setEx11Results] = useState<(boolean|null)[]>(Array(1).fill(null));
  const [ex11Validated, setEx11Validated] = useState(false);

  const resetEx11 = () => {
    setEx11Questions(generateEx11());
    setEx11Answers(Array(1).fill(""));
    setEx11Results(Array(1).fill(null));
    setEx11Validated(false);
  };

  // Ex12 & Ex13 — assemblages de cubes (images réelles)
  const [ex12Questions, setEx12Questions] = useState<Ex12Question[]>(generateEx12);
  const [ex12Answers, setEx12Answers] = useState<string[]>(Array(1).fill(""));
  const [ex12Results, setEx12Results] = useState<(boolean | null)[]>(Array(1).fill(null));
  const [ex12Validated, setEx12Validated] = useState(false);

  const resetEx12 = () => { setEx12Questions(generateEx12()); setEx12Answers(Array(1).fill("")); setEx12Results(Array(1).fill(null)); setEx12Validated(false); };

  const [ex13Questions, setEx13Questions] = useState<Ex12Question[]>(generateEx13);
  const [ex13Answers, setEx13Answers] = useState<string[]>(Array(1).fill(""));
  const [ex13Results, setEx13Results] = useState<(boolean | null)[]>(Array(1).fill(null));
  const [ex13Validated, setEx13Validated] = useState(false);

  const resetEx13 = () => { setEx13Questions(generateEx13()); setEx13Answers(Array(1).fill("")); setEx13Results(Array(1).fill(null)); setEx13Validated(false); };

  // Évaluation sous-module
  const [evalItems, setEvalItems] = useState<EvalItem[]>(() => {
    const initIdx = loadA1Position().lessonIdx;
    return MATH_A1_LESSONS[initIdx]?.submoduleId === "A1-1" ? generateA11EvalItems() : [];
  });
  const [evalAnswers, setEvalAnswers] = useState<Record<string, string>>({});
  const [evalResults, setEvalResults] = useState<Record<string, boolean>>({});
  const [evalGrade, setEvalGrade] = useState<number | null>(null);
  const [evalSubmitted, setEvalSubmitted] = useState(false);

  // Timer évaluation
  const [evalStarted, setEvalStarted] = useState(false);
  const [evalTimeLeft, setEvalTimeLeft] = useState<number | null>(null);
  const evalAutoSubmitRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!evalStarted || evalSubmitted || evalTimeLeft === null || evalTimeLeft <= 0) return;
    const id = setTimeout(() => setEvalTimeLeft(t => Math.max(0, (t ?? 1) - 1)), 1000);
    return () => clearTimeout(id);
  }, [evalStarted, evalSubmitted, evalTimeLeft]);

  useEffect(() => {
    if (evalTimeLeft !== 0 || evalSubmitted) return;
    evalAutoSubmitRef.current?.();
  }, [evalTimeLeft, evalSubmitted]);

  useEffect(() => {
    if (step !== "eval") { setEvalStarted(false); setEvalTimeLeft(null); }
  }, [step]);

  // Niveau de validation (chargé depuis localStorage)
  const [level, setCurrentLevel] = useState<LevelKey>("base");
  useEffect(() => {
    const prog = loadProgress();
    setCurrentLevel(prog.level ?? "base");
  }, []);
  const passingGrade = LEVEL_PASSING_GRADES[level];

  // Sous-module déjà validé → "Suivant" débloqué sans refaire l'éval
  const [submoduleAlreadyPassed, setSubmoduleAlreadyPassed] = useState(() => {
    try {
      const p = loadProgress();
      const sub = MATH_A1_LESSONS[loadA1Position().lessonIdx]?.submoduleId;
      return sub ? p.submoduleStates?.[sub] === "completed" : false;
    } catch { return false; }
  });
  useEffect(() => {
    const p = loadProgress();
    const sub = MATH_A1_LESSONS[activeIdx]?.submoduleId;
    setSubmoduleAlreadyPassed(sub ? p.submoduleStates?.[sub] === "completed" : false);
  }, [activeIdx]);

  // Sauvegarde de la position courante
  useEffect(() => {
    try {
      localStorage.setItem(A1_POS_KEY, JSON.stringify({ lessonIdx: activeIdx, step }));
    } catch { /* ignore */ }
  }, [activeIdx, step]);

  const lesson = MATH_A1_LESSONS[activeIdx];
  if (!lesson) return null;

  // Items et logique de soumission de l'évaluation (utilisés par le timer)
  const hasTimer = lesson.submoduleId === "A1-1";
  const evalItems_curr = lesson.submoduleId === "A1-1" ? evalItems : (lesson.exercises as EvalItem[]);
  const evalTotalPts = evalItems_curr.length;
  evalAutoSubmitRef.current = () => {
    if (evalSubmitted) return;
    const results: Record<string, boolean> = {};
    let correct = 0;
    for (const ex of evalItems_curr) {
      const ok = answerMatches(evalAnswers[ex.id] ?? "", ex.acceptable);
      results[ex.id] = ok;
      if (ok) correct++;
    }
    const grade = linearSwissGrade(correct, evalTotalPts);
    setEvalResults(results);
    setEvalGrade(grade);
    setEvalSubmitted(true);
    setEvalStarted(false);
    if (grade >= passingGrade) {
      const prog = loadProgress();
      saveProgress(completeSubmodule(prog, "A1", lesson.submoduleId, correct, evalTotalPts, grade));
      setSubmoduleAlreadyPassed(true);
    }
  };

  const theoryFr = pickTheoryFrench(lesson.theory);
  const pivotBody = pickTheoryPivotTranslation(pivot, lesson.theory);
  const introPivotBlock = lesson.theory.readAloud?.introPivot?.[pivot];
  const read = lesson.theory.readAloud;
  const isRtl = pivot === "ar" || pivot === "fa";

  const steps = getLessonSteps(lesson);
  const stepIdx = steps.indexOf(step);

  const allStepCounts = MATH_A1_LESSONS.map((l) => getLessonSteps(l).length);
  const totalSteps = allStepCounts.reduce((a, b) => a + b, 0);
  const completedSteps = allStepCounts.slice(0, activeIdx).reduce((a, b) => a + b, 0) + stepIdx;
  const overallPct = Math.round((completedSteps / totalSteps) * 100);

  const goTo = (s: Step) => { setStep(s); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const changeLesson = (idx: number, targetStep: Step = "theory") => {
    setActiveIdx(idx);
    setStep(targetStep);
    setEvalAnswers({});
    setEvalResults({});
    setEvalGrade(null);
    setEvalSubmitted(false);
    setEvalStarted(false);
    setEvalTimeLeft(null);
    if (MATH_A1_LESSONS[idx]?.submoduleId === "A1-1") setEvalItems(generateA11EvalItems());
    if (MATH_A1_LESSONS[idx]?.submoduleId === "A1-2") { resetEx9(); resetEx10(); resetEx11(); resetEx12(); resetEx13(); }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goNext = () => {
    const nextStep = steps[stepIdx + 1];
    if (nextStep) { goTo(nextStep); }
    else if (activeIdx < MATH_A1_LESSONS.length - 1) {
      changeLesson(activeIdx + 1);
    } else { router.push("/mathematiques"); }
  };

  const goBack = () => {
    const prevStep = steps[stepIdx - 1];
    if (prevStep) { goTo(prevStep); }
    else if (activeIdx > 0) {
      const prevIdx = activeIdx - 1;
      const prevSteps = getLessonSteps(MATH_A1_LESSONS[prevIdx]!);
      changeLesson(prevIdx, prevSteps[prevSteps.length - 1]);
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
            {theoryFr.paragraphs.map((p, i) => {
              const isA12 = lesson.submoduleId === "A1-2";
              const illustrationA12: Record<number, React.ReactNode> = isA12 ? {
                1: <div className="mt-2 flex justify-center gap-2"><SvgUnite s={20} /><SvgUnite s={20} /></div>,
                2: <div className="mt-2 flex justify-center gap-3"><SvgDizaine s={9} /><SvgDizaine s={9} /></div>,
                3: <div className="mt-2 flex justify-center gap-2"><SvgCentaine s={5} /><SvgCentaine s={5} /></div>,
                4: <div className="mt-2 flex justify-center gap-2"><SvgMillier s={4} d={9} /><SvgMillier s={4} d={9} /></div>,
              } : {};
              return (
                <div key={`${lesson.submoduleId}-fr-${i}`}>
                  <p className="text-[var(--color-text-secondary)]">{renderBold(p)}</p>
                  {showPivotTranslation && pivotBody?.[i] ? (
                    <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-primary)]"
                      lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                      {pivotBody[i]}
                    </p>
                  ) : null}
                  {illustrationA12[i] ?? null}
                </div>
              );
            })}
          </div>
          {lesson.submoduleId === "A1-2" && <PlaceValueIllustration />}
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
              Écoutez l&apos;enregistrement puis répètez à voix haute.
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
                      placeholder="chiffre…" autoComplete="off" inputMode="numeric" className="!bg-blue-50 dark:!bg-blue-950/30" />
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
                      placeholder="chiffre…" autoComplete="off" inputMode="numeric" className="!bg-blue-50 dark:!bg-blue-950/30" />
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
                      placeholder="chiffre…" autoComplete="off" inputMode="numeric" className="!bg-blue-50 dark:!bg-blue-950/30" />
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
            <p className="text-sm text-[var(--color-text-secondary)]">Complétez les cases bleues du tableau.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex7[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-primary)]"
                lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                {CONSIGNE_PIVOT.ex7[pivot]}
              </p>
            ) : null}
          </div>
          <div className="overflow-x-auto">
            <table className="mx-auto border-collapse">
              <thead>
                <tr>
                  <th className="h-[41px] w-[41px] border border-zinc-300 bg-zinc-100 text-center text-sm font-semibold text-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-400" />
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((u) => (
                    <th key={u} className="h-[41px] w-[41px] border border-zinc-300 bg-zinc-100 text-center text-sm font-bold text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200">
                      {u}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((d) => (
                  <tr key={d}>
                    <th className="h-[41px] w-[41px] border border-zinc-300 bg-zinc-100 text-center text-sm font-bold text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200">
                      {d}
                    </th>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((u) => {
                      const key = `${d}-${u}`;
                      const value = d + u;
                      const state = ex7Grid[key] ?? "empty";
                      const result = ex7Results[key] ?? null;

                      if (state === "revealed") {
                        return (
                          <td key={u} className="h-[41px] w-[41px] border border-zinc-300 text-center dark:border-zinc-600">
                            <span className="text-sm font-medium tabular-nums text-zinc-800 dark:text-zinc-200">{value}</span>
                          </td>
                        );
                      }
                      if (state === "fill") {
                        if (ex7Validated && result !== null) {
                          return (
                            <td key={u} className={`h-[41px] w-[41px] p-0 text-center ${result ? "ring-2 ring-inset ring-green-400 bg-green-50 dark:bg-green-950/20" : "ring-2 ring-inset ring-red-400 bg-red-50 dark:bg-red-950/20"}`}>
                              <div className="flex h-[41px] w-[41px] items-center justify-center">
                                {result
                                  ? <span className="text-sm font-medium tabular-nums text-green-600">{ex7Answers[key] ?? ""}</span>
                                  : <span className="text-sm font-medium tabular-nums text-zinc-800 dark:text-zinc-200">{value}</span>
                                }
                              </div>
                            </td>
                          );
                        }
                        return (
                          <td key={u} className="h-[41px] w-[41px] border border-zinc-300 bg-blue-100 p-0 dark:border-zinc-600 dark:bg-blue-900/30">
                            <input
                              type="text" inputMode="numeric"
                              value={ex7Answers[key] ?? ""}
                              onChange={(e) => setEx7Answers((prev) => ({ ...prev, [key]: e.target.value }))}
                              className="h-[41px] w-[41px] bg-transparent text-center text-sm font-medium tabular-nums outline-none"
                              aria-label={`Cellule ${value}`}
                            />
                          </td>
                        );
                      }
                      return <td key={u} className="h-[41px] w-[41px] border border-zinc-300 dark:border-zinc-600" />;
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
          <div className="space-y-3">
            {ex8Series.map((series, si) => (
              <div key={si} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="w-8 shrink-0 text-left text-2xl font-bold tabular-nums text-[var(--color-accent-alg)]">{si + 1}.</span>
                  <div className="flex min-w-0 flex-1 gap-1">
                    {Array.from({ length: series.count }, (_, i) => {
                      const num = series.start + i;
                      const isBlank = series.blanks.includes(i);
                      const ansKey = `${si}-${i}`;
                      const result = ex8Results[ansKey] ?? null;

                      if (isBlank) {
                        if (ex8Validated && result !== null) {
                          return (
                            <div key={i} className={`flex h-10 min-w-0 flex-1 items-center justify-center rounded-[var(--radius-md)] border text-sm font-medium tabular-nums ${result ? "border-green-400 bg-green-50 text-green-600 dark:bg-green-950/20" : "border-red-400 bg-red-50 text-[var(--color-text-primary)] dark:bg-red-950/20"}`}>
                              {result ? ex8Answers[ansKey] : num}
                            </div>
                          );
                        }
                        return (
                          <input
                            key={i} type="text" inputMode="numeric"
                            value={ex8Answers[ansKey] ?? ""}
                            onChange={(e) => setEx8Answers((prev) => ({ ...prev, [ansKey]: e.target.value }))}
                            className="h-10 min-w-0 flex-1 rounded-[var(--radius-md)] border border-zinc-400 bg-blue-50 text-center text-sm font-medium tabular-nums outline-none dark:border-zinc-500 dark:bg-blue-950/20"
                            aria-label={`Série ${si + 1}, position ${i + 1}`}
                          />
                        );
                      }
                      return (
                        <div key={i} className="flex h-10 min-w-0 flex-1 items-center justify-center rounded-[var(--radius-md)] border border-zinc-300 bg-white text-sm font-medium tabular-nums text-zinc-700 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
                          {num}
                        </div>
                      );
                    })}
                  </div>
                </div>
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

      {/* ── Exercice 9 — Choix multiple dizaines+unités ─────────────────────── */}
      {step === "ex9" && (
        <AppCard variant="elevated" header={
          <div>
            <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 9</p>
            <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Choisissez combien il y a d&apos;unités</h2>
          </div>
        }>
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Choisissez le nombre représenté par les blocs.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex9[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{CONSIGNE_PIVOT.ex9[pivot]}</p>
            ) : null}
          </div>
          <div className="space-y-3">
            {ex9Questions.map((q, i) => {
              const value = q.tens * 10 + q.units;
              const sel = ex9Selected[i] ?? null;
              const correct = ex9Validated ? sel === value : null;
              return (
                <div key={i} className={`rounded-[var(--radius-md)] border transition-colors ${correct === true ? "border-green-400 bg-green-50 dark:bg-green-950/20" : correct === false ? "border-red-400 bg-red-50 dark:bg-red-950/20" : "border-[var(--color-border-default)]"}`}>
                  {/* Zone d'affichage, blocs centrés, largeur complète */}
                  <div className="flex min-h-28 w-full flex-col items-center justify-center gap-1 rounded-t px-3 py-2">
                    {q.tens > 0 && (
                      <div className="flex w-full flex-wrap justify-center gap-0.5">
                        {Array.from({ length: q.tens }, (_, ti) => <SvgDizaineH key={ti} s={8} />)}
                      </div>
                    )}
                    {q.units > 0 && (
                      <div className="flex w-full flex-wrap justify-center gap-0.5">
                        {Array.from({ length: q.units }, (_, ui) => <SvgUnite key={ui} s={11} />)}
                      </div>
                    )}
                  </div>
                  {/* Réponses alignées en bas au centre */}
                  <div className="flex justify-center gap-2 px-3 py-2">
                    {q.choices.map(c => {
                      const isSelected = sel === c;
                      const isCorrect = ex9Validated && c === value;
                      const isWrong = ex9Validated && isSelected && c !== value;
                      return (
                        <button key={c} type="button"
                          onClick={() => { if (!ex9Validated) { const n = [...ex9Selected]; n[i] = c; setEx9Selected(n); } }}
                          className={`w-16 rounded py-1.5 text-sm font-bold transition-colors ${isCorrect ? "border-2 border-green-500 bg-green-100 text-green-700 ring-2 ring-green-200 dark:bg-green-950/40 dark:ring-green-900" : isWrong ? "border border-red-400 bg-red-100 text-red-600 line-through dark:bg-red-950/40" : isSelected ? "border border-teal-500 bg-teal-50 text-teal-700 dark:bg-teal-950/30" : "border border-zinc-300 hover:border-teal-400 dark:border-zinc-600"}`}>
                          {c}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
            <div className="flex gap-2">
              <ActionIconButton action="valider"
                disabled={ex9Validated}
                onClick={() => { if (!ex9Validated) setEx9Validated(true); }} />
              <ActionIconButton action="recommencer" onClick={resetEx9} />
            </div>
            <AppButton accent="alg" onClick={goNext}>{isLastStep ? "Terminer ✓" : "Suivant →"}</AppButton>
          </div>
        </AppCard>
      )}

      {/* ── Exercice 10 — Comptage blocs éparpillés ─────────────────────────── */}
      {step === "ex10" && (
        <AppCard variant="elevated" header={
          <div>
            <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 10</p>
            <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Comptez combien il y a d&apos;unités</h2>
          </div>
        }>
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Comptez tous les blocs et écrivez le nombre total.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex10[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{CONSIGNE_PIVOT.ex10[pivot]}</p>
            ) : null}
          </div>
          <div className="space-y-4">
            {ex10Questions.map((q, qi) => {
              const total = q.h * 100 + q.d * 10 + q.u;
              const result = ex10Results[qi] ?? null;
              return (
                <div key={qi} className={`rounded-[var(--radius-md)] border p-3 transition-colors ${result === true ? "border-green-400 bg-green-50 dark:bg-green-950/20" : result === false ? "border-red-400 bg-red-50 dark:bg-red-950/20" : "border-[var(--color-border-default)]"}`}>
                  <div className="relative overflow-hidden rounded" style={{width:"100%",height:q.canvasH}}>
                    {q.positions.map((pos, pi) => (
                      <div key={pi} style={{position:"absolute",left:pos.x,top:pos.y}}>
                        {pos.kind === "h" ? <SvgCentaine s={5} /> : pos.kind === "d" ? <SvgDizaine s={8} /> : <SvgUnite s={14} />}
                      </div>
                    ))}
                  </div>
                  <div className="mt-2">
                    <AppInput label="" id={`ex10-${qi}`}
                      value={ex10Validated && result === false ? String(total) : (ex10Answers[qi] ?? "")}
                      onChange={e => { if (!ex10Validated) { const n = [...ex10Answers]; n[qi] = e.target.value; setEx10Answers(n); } }}
                      placeholder="Total…" inputMode="numeric" autoComplete="off" readOnly={ex10Validated}
                      className={
                        ex10Validated && result === true ? "!bg-green-50 !border-green-400 dark:!bg-green-950/20" :
                        ex10Validated && result === false ? "" :
                        "!bg-blue-50 dark:!bg-blue-950/30"
                      } />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
            <div className="flex gap-2">
              <ActionIconButton action="valider" disabled={ex10Validated}
                onClick={() => {
                  const res = ex10Questions.map((q, qi) => parseInt(ex10Answers[qi] ?? "", 10) === q.h*100 + q.d*10 + q.u);
                  setEx10Results(res);
                  setEx10Validated(true);
                }} />
              <ActionIconButton action="recommencer" onClick={resetEx10} />
            </div>
            <AppButton accent="alg" onClick={goNext}>{isLastStep ? "Terminer ✓" : "Suivant →"}</AppButton>
          </div>
        </AppCard>
      )}

      {/* ── Exercice 11 — Décomposition M+C+D+U ────────────────────────────── */}
      {step === "ex11" && (
        <AppCard variant="elevated" header={
          <div>
            <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 11</p>
            <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Écrivez combien il y a de milliers, centaines, dizaines, unités</h2>
          </div>
        }>
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Comptez chaque type de blocs et complétez la décomposition.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex11[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{CONSIGNE_PIVOT.ex11[pivot]}</p>
            ) : null}
          </div>
          <div className="space-y-4">
            {ex11Questions.map((q, qi) => {
              const total = q.m * 1000 + q.c * 100 + q.d * 10 + q.u;
              const result = ex11Results[qi] ?? null;
              return (
                <div key={qi} className={`rounded-[var(--radius-md)] border p-3 transition-colors ${result === true ? "border-green-400 bg-green-50 dark:bg-green-950/20" : result === false ? "border-red-400 bg-red-50 dark:bg-red-950/20" : "border-[var(--color-border-default)]"}`}>
                  <div className="relative overflow-hidden rounded" style={{width:"100%", height:q.canvasH}}>
                    {q.positions.map((pos, pi) => (
                      <div key={pi} style={{position:"absolute",left:pos.x,top:pos.y}}>
                        {pos.kind === "m" ? <SvgMillier s={4} d={9} /> : pos.kind === "h" ? <SvgCentaine s={5} /> : pos.kind === "d" ? <SvgDizaine s={9} /> : <SvgUnite s={16} />}
                      </div>
                    ))}
                  </div>
                  <div className="mt-2">
                    <AppInput label="" id={`ex11-${qi}`}
                      value={ex11Validated && result === false ? String(total) : (ex11Answers[qi] ?? "")}
                      onChange={e => { if (!ex11Validated) { const n = [...ex11Answers]; n[qi] = e.target.value; setEx11Answers(n); } }}
                      placeholder="Total…" inputMode="numeric" autoComplete="off" readOnly={ex11Validated}
                      className={
                        ex11Validated && result === true ? "!bg-green-50 !border-green-400 dark:!bg-green-950/20" :
                        ex11Validated && result === false ? "" :
                        "!bg-blue-50 dark:!bg-blue-950/30"
                      } />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
            <div className="flex gap-2">
              <ActionIconButton action="valider" disabled={ex11Validated}
                onClick={() => {
                  const res = ex11Questions.map((q, qi) => parseInt(ex11Answers[qi] ?? "", 10) === q.m*1000 + q.c*100 + q.d*10 + q.u);
                  setEx11Results(res);
                  setEx11Validated(true);
                }} />
              <ActionIconButton action="recommencer" onClick={resetEx11} />
            </div>
            <AppButton accent="alg" onClick={goNext}>{isLastStep ? "Terminer ✓" : "Suivant →"}</AppButton>
          </div>
        </AppCard>
      )}

      {/* ── Exercice 12 — Tours de cubes isométriques ─────────────────────── */}
      {step === "ex12" && (
        <AppCard variant="elevated" header={
          <div>
            <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 12</p>
            <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Comptez combien il y a de cubes</h2>
          </div>
        }>
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Comptez le nombre total de cubes dans la figure.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex12[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{CONSIGNE_PIVOT.ex12[pivot]}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-4">
            {ex12Questions.map((q, qi) => {
              const result = ex12Results[qi] ?? null;
              return (
                <div key={qi} className={`rounded-[var(--radius-md)] border p-3 transition-colors ${result === true ? "border-green-400 bg-green-50 dark:bg-green-950/20" : result === false ? "border-red-400 bg-red-50 dark:bg-red-950/20" : "border-[var(--color-border-default)]"}`}>
                  <div className="flex items-center justify-center py-3">
                    <img src={q.src} alt="assemblage de cubes" className="max-h-72 w-auto object-contain" />
                  </div>
                  <div className="mt-2">
                    <AppInput label="" id={`ex12-${qi}`}
                      value={ex12Validated && result === false ? String(q.answer) : (ex12Answers[qi] ?? "")}
                      onChange={e => { if (!ex12Validated) { const n = [...ex12Answers]; n[qi] = e.target.value; setEx12Answers(n); } }}
                      placeholder="Cubes…" inputMode="numeric" autoComplete="off" readOnly={ex12Validated}
                      className={
                        ex12Validated && result === true ? "!bg-green-50 !border-green-400 dark:!bg-green-950/20" :
                        ex12Validated && result === false ? "" :
                        "!bg-blue-50 dark:!bg-blue-950/30"
                      } />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
            <div className="flex gap-2">
              <ActionIconButton action="valider" disabled={ex12Validated}
                onClick={() => {
                  const res = ex12Questions.map((q, qi) => parseInt(ex12Answers[qi] ?? "", 10) === q.answer);
                  setEx12Results(res);
                  setEx12Validated(true);
                }} />
              <ActionIconButton action="recommencer" onClick={resetEx12} />
            </div>
            <AppButton accent="alg" onClick={goNext}>{isLastStep ? "Terminer ✓" : "Suivant →"}</AppButton>
          </div>
        </AppCard>
      )}

      {step === "ex13" && (
        <AppCard variant="elevated" header={
          <div>
            <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 13</p>
            <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Comptez combien il y a de cubes</h2>
          </div>
        }>
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Comptez le nombre total de cubes dans la figure.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex13[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{CONSIGNE_PIVOT.ex13[pivot]}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-4">
            {ex13Questions.map((q, qi) => {
              const result = ex13Results[qi] ?? null;
              return (
                <div key={qi} className={`rounded-[var(--radius-md)] border p-3 transition-colors ${result === true ? "border-green-400 bg-green-50 dark:bg-green-950/20" : result === false ? "border-red-400 bg-red-50 dark:bg-red-950/20" : "border-[var(--color-border-default)]"}`}>
                  <div className="flex items-center justify-center py-3">
                    <img src={q.src} alt="assemblage de cubes" className="max-h-72 w-auto object-contain" />
                  </div>
                  <div className="mt-2">
                    <AppInput label="" id={`ex13-${qi}`}
                      value={ex13Validated && result === false ? String(q.answer) : (ex13Answers[qi] ?? "")}
                      onChange={e => { if (!ex13Validated) { const n = [...ex13Answers]; n[qi] = e.target.value; setEx13Answers(n); } }}
                      placeholder="Cubes…" inputMode="numeric" autoComplete="off" readOnly={ex13Validated}
                      className={
                        ex13Validated && result === true ? "!bg-green-50 !border-green-400 dark:!bg-green-950/20" :
                        ex13Validated && result === false ? "" :
                        "!bg-blue-50 dark:!bg-blue-950/30"
                      } />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
            <div className="flex gap-2">
              <ActionIconButton action="valider" disabled={ex13Validated}
                onClick={() => {
                  const res = ex13Questions.map((q, qi) => parseInt(ex13Answers[qi] ?? "", 10) === q.answer);
                  setEx13Results(res);
                  setEx13Validated(true);
                }} />
              <ActionIconButton action="recommencer" onClick={resetEx13} />
            </div>
            <AppButton accent="alg" onClick={goNext}>{isLastStep ? "Terminer ✓" : "Suivant →"}</AppButton>
          </div>
        </AppCard>
      )}

      {/* ── Évaluation sous-module ──────────────────────────────────────────── */}
      {step === "eval" && (
          <AppCard
            variant="elevated"
            header={
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Évaluation — {lesson.submoduleCode}</p>
                  <h2 className="text-base font-semibold text-[var(--color-text-primary)]">{theoryFr.title}</h2>
                </div>
                {hasTimer && evalStarted && !evalSubmitted && evalTimeLeft !== null && (
                  <div className={`flex items-center gap-1.5 rounded-[var(--radius-md)] border px-3 py-1.5 font-mono text-lg font-bold tabular-nums ${
                    evalTimeLeft < 60
                      ? "border-red-300 bg-red-50 text-red-600 dark:border-red-700 dark:bg-red-950/30"
                      : "border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  }`}>
                    <span aria-hidden>⏱</span>
                    <span>{formatTime(evalTimeLeft)}</span>
                  </div>
                )}
              </div>
            }
          >
            <div className="mb-4">
              <p className="text-sm text-[var(--color-text-secondary)]">
                Répondez aux questions pour valider ce sous-module.
              </p>
              {showPivotTranslation && EVAL_INTRO_PIVOT[pivot] ? (
                <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-secondary)]"
                  lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                  {EVAL_INTRO_PIVOT[pivot]}
                </p>
              ) : null}
            </div>

            {/* ── Écran de démarrage (avant Commencer) ── */}
            {hasTimer && !evalStarted && !evalSubmitted && !submoduleAlreadyPassed && (
              <div className="flex flex-col items-center justify-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] py-10">
                <p className="text-4xl font-bold tabular-nums text-[var(--color-accent-alg)]">5:00</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Temps disponible pour compléter l&apos;évaluation</p>
                <p className="text-xs text-[var(--color-text-secondary)]">Les exercices apparaîtront au démarrage du chronomètre.</p>
              </div>
            )}

            {/* ── Exercices (visibles après Commencer ou si déjà validé) ── */}
            {(!hasTimer || evalStarted || evalSubmitted || submoduleAlreadyPassed) && <div className="space-y-3">
              {evalItems_curr.map((ex, i) => {
                const result = evalSubmitted ? (evalResults[ex.id] ?? null) : null;

                const header = i === 0 ? (
                  <div key="hdr-ex2" className="pb-1 pt-2">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">1. Écrivez les nombres en lettres correctement.</p>
                    {showPivotTranslation && CONSIGNE_PIVOT.ex2[pivot] ? (
                      <p className="mt-0.5 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{CONSIGNE_PIVOT.ex2[pivot]}</p>
                    ) : null}
                  </div>
                ) : i === 4 ? (
                  <div key="hdr-ex6" className="pb-1 pt-4">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">2. Écoutez et écrivez les nombres.</p>
                    {showPivotTranslation && CONSIGNE_PIVOT.ex6[pivot] ? (
                      <p className="mt-0.5 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{CONSIGNE_PIVOT.ex6[pivot]}</p>
                    ) : null}
                  </div>
                ) : i === 8 ? (
                  <div key="hdr-ex8" className="pb-1 pt-4">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">3. Complétez les séries de nombres.</p>
                    {showPivotTranslation && CONSIGNE_PIVOT.ex8[pivot] ? (
                      <p className="mt-0.5 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{CONSIGNE_PIVOT.ex8[pivot]}</p>
                    ) : null}
                  </div>
                ) : null;

                /* ── Ex8 style : série de nombres (sans numéro) ── */
                if (ex.seriesNums) {
                  return (
                    <div key={ex.id}>
                      {header}
                      <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
                        <div className="flex min-w-0 gap-1">
                          {ex.seriesNums.map((num, ni) => {
                            if (ni === ex.blankIdx) {
                              if (evalSubmitted && result !== null) {
                                return (
                                  <div key={ni} className={`flex h-10 min-w-0 flex-1 items-center justify-center rounded-[var(--radius-md)] border text-sm font-medium tabular-nums ${result ? "border-green-400 bg-green-50 text-green-600 dark:bg-green-950/20" : "border-red-400 bg-red-50 text-[var(--color-text-primary)] dark:bg-red-950/20"}`}>
                                    {result ? evalAnswers[ex.id] : num}
                                  </div>
                                );
                              }
                              return (
                                <input
                                  key={ni} type="text" inputMode="numeric"
                                  value={evalAnswers[ex.id] ?? ""}
                                  onChange={(e) => setEvalAnswers((prev) => ({ ...prev, [ex.id]: e.target.value }))}
                                  className="h-10 min-w-0 flex-1 rounded-[var(--radius-md)] border border-zinc-400 bg-blue-50 text-center text-sm font-medium tabular-nums outline-none dark:border-zinc-500 dark:bg-blue-950/20"
                                  aria-label={`Question ${i + 1}`}
                                />
                              );
                            }
                            return (
                              <div key={ni} className="flex h-10 min-w-0 flex-1 items-center justify-center rounded-[var(--radius-md)] border border-zinc-300 bg-white text-sm font-medium tabular-nums text-zinc-700 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
                                {num}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                /* ── Ex6 style : audio centaines → chiffre ── */
                if (ex.clips) {
                  return (
                    <div key={ex.id}>
                      {header}
                      <div className={`flex items-center gap-3 rounded-[var(--radius-md)] border p-3 transition-colors ${
                        result === null
                          ? "border-[var(--color-border-default)]"
                          : result
                            ? "border-green-400 bg-green-50 dark:bg-green-950/20"
                            : "border-red-400 bg-red-50 dark:bg-red-950/20"
                      }`}>
                        <SequentialAudioButton clips={ex.clips} />
                        {evalSubmitted && result !== null ? (
                          <div className="flex h-10 flex-1 items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3">
                            {result ? (
                              <span className="text-sm font-medium text-green-600">{evalAnswers[ex.id]}</span>
                            ) : (
                              <span className="text-sm font-medium text-[var(--color-text-primary)]">{ex.acceptable[0]}</span>
                            )}
                          </div>
                        ) : (
                          <AppInput label="" id={`eval-${ex.id}`} value={evalAnswers[ex.id] ?? ""}
                            onChange={(e) => setEvalAnswers((prev) => ({ ...prev, [ex.id]: e.target.value }))}
                            placeholder="chiffre…" autoComplete="off" inputMode="numeric"
                            className="!bg-blue-50 dark:!bg-blue-950/30" />
                        )}
                      </div>
                    </div>
                  );
                }

                /* ── Ex2 style : chiffre → lettres ── */
                return (
                  <div key={ex.id}>
                    {header}
                    <ExerciseRow
                      num={ex.numValue ?? 0} inputId={`eval-${ex.id}`}
                      answer={evalAnswers[ex.id] ?? ""} result={evalResults[ex.id] ?? null}
                      validated={evalSubmitted} correctWord={ex.numValue === 1 ? "un" : (FR_WORDS[ex.numValue ?? 0] ?? "")}
                      pivotWord={undefined} pivot={pivot} showPivot={false}
                      onChange={(val) => setEvalAnswers((prev) => ({ ...prev, [ex.id]: val }))}
                    />
                  </div>
                );
              })}
            </div>}

            {evalSubmitted && evalGrade !== null ? (
              <div className={`mt-4 rounded-[var(--radius-md)] border p-4 text-center ${
                evalGrade >= passingGrade
                  ? "border-green-400 bg-green-50 dark:bg-green-950/20"
                  : "border-amber-400 bg-amber-50 dark:bg-amber-950/20"
              }`}>
                <p className="text-3xl font-bold text-[var(--color-text-primary)]">
                  {evalGrade.toFixed(1)}<span className="text-base font-normal text-[var(--color-text-secondary)]">/6</span>
                  <span className="ml-3 text-lg font-semibold text-[var(--color-text-secondary)]">
                    ({Object.values(evalResults).filter(Boolean).length}/{evalTotalPts} pts)
                  </span>
                </p>
                <p className="mt-1 text-sm font-medium">
                  {evalGrade >= passingGrade
                    ? "✓ Sous-module validé !"
                    : `Requis : ${passingGrade}/6 — Réessaie !`}
                </p>
              </div>
            ) : null}

            <div className="mt-6 flex items-center justify-between">
              <AppButton variant="secondary" onClick={goBack}>← Retour</AppButton>
              <div className="flex gap-2">
                {hasTimer && !evalStarted && !evalSubmitted && !submoduleAlreadyPassed ? (
                  <ActionIconButton action="commencer"
                    onClick={() => { setEvalStarted(true); setEvalTimeLeft(300); }} />
                ) : !evalSubmitted ? (
                  <ActionIconButton action="valider"
                    onClick={() => evalAutoSubmitRef.current?.()} />
                ) : evalGrade !== null && evalGrade < passingGrade ? (
                  <ActionIconButton action="recommencer"
                    onClick={() => {
                      setEvalAnswers({});
                      setEvalResults({});
                      setEvalGrade(null);
                      setEvalSubmitted(false);
                      setEvalStarted(false);
                      setEvalTimeLeft(null);
                      if (lesson.submoduleId === "A1-1") setEvalItems(generateA11EvalItems());
                    }}
                  />
                ) : null}
              </div>
              <AppButton
                accent="alg"
                onClick={goNext}
                disabled={!submoduleAlreadyPassed && (!evalSubmitted || (evalGrade !== null && evalGrade < passingGrade))}
              >
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

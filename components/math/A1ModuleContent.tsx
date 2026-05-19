"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AppCard } from "@/components/ui/AppCard";
import { AppInput } from "@/components/ui/AppInput";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { MATH_A1_LESSONS } from "@/lib/curriculum/content/math-a1";
import type {
  MathExerciseItem,
  MathRichBlock,
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

const _PIVOT_WORDS: Partial<Record<PivotCode, Record<number, string>>> = {
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

const _PIVOT_TENS: Partial<Record<PivotCode, Record<number, string>>> = {
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

function RichBlock({ block, pivot, showPivot, isRtl }: {
  block: MathRichBlock;
  pivot: PivotCode;
  showPivot: boolean;
  isRtl: boolean;
}) {
  switch (block.type) {
    case "heading":
      return <p className="mt-3 text-sm font-bold text-[var(--color-text-primary)]">{block.fr}</p>;
    case "rule": {
      const pv = block.pivot?.[pivot];
      return (
        <div className="rounded-[var(--radius-md)] border border-[var(--color-accent-alg)]/30 bg-[var(--color-accent-alg)]/5 px-4 py-3">
          <p className="mb-1 text-sm font-semibold text-[var(--color-accent-alg)]">{block.titleFr}</p>
          <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
            {block.itemsFr.map((item, i) => (
              <li key={i} className="flex gap-2"><span className="shrink-0 text-[var(--color-accent-alg)]">•</span>{renderBold(item)}</li>
            ))}
          </ul>
          {showPivot && pv ? (
            <div className="mt-2 border-t border-[var(--color-accent-alg)]/20 pt-2" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
              <p className="mb-1 text-xs italic text-[var(--color-text-secondary)]">{pv.title}</p>
              <ul className="space-y-0.5 text-xs italic text-[var(--color-text-secondary)]">
                {pv.items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          ) : null}
        </div>
      );
    }
    case "note": {
      const pv = block.pivot?.[pivot];
      return (
        <div className="rounded-[var(--radius-md)] border border-amber-300/50 bg-amber-50 px-4 py-2 dark:bg-amber-950/20">
          <p className="text-sm text-amber-900 dark:text-amber-200">{renderBold(block.fr)}</p>
          {showPivot && pv ? (
            <p className="mt-1 border-l-2 border-amber-400/40 pl-2 text-xs italic text-amber-700 dark:text-amber-300" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pv}</p>
          ) : null}
        </div>
      );
    }
    case "example": {
      const pv = block.pivot?.[pivot];
      return (
        <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] px-4 py-2.5">
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-secondary)]">Exemple</p>
          <p className="mt-1 font-mono text-sm text-[var(--color-text-primary)]">{block.fr}</p>
          {showPivot && pv ? (
            <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-2 text-xs italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pv}</p>
          ) : null}
        </div>
      );
    }
    case "table": {
      return (
        <div className="overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border-default)]">
          <table className="w-full min-w-[260px] border-collapse text-sm">
            <thead>
              <tr className="bg-[var(--color-bg-secondary)]">
                {block.headersFr.map((h, i) => (
                  <th key={i} className={`border border-[var(--color-border-default)] px-3 py-1.5 text-left text-xs font-semibold ${block.accentHeader ? "text-[var(--color-accent-alg)]" : "text-[var(--color-text-secondary)]"}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "" : "bg-[var(--color-bg-secondary)]/50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-[var(--color-border-default)] px-3 py-1.5 text-[var(--color-text-primary)]">{renderBold(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.captionFr ? <p className="px-3 py-1 text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p> : null}
        </div>
      );
    }
    case "highlight": {
      const pv = block.pivot?.[pivot];
      return (
        <div className="rounded-[var(--radius-md)] border-l-4 border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/5 px-4 py-2">
          <p className="text-sm font-medium text-[var(--color-text-primary)]">{renderBold(block.fr)}</p>
          {showPivot && pv ? (
            <p className="mt-1 text-xs italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pv}</p>
          ) : null}
        </div>
      );
    }
    case "svg":
      return block.noFrame ? (
        <div className="my-2">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {block.captionFr && (
            <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p>
          )}
        </div>
      ) : (
        <div className="my-1 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white p-3">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {block.captionFr && (
            <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p>
          )}
        </div>
      );
    case "section":
      return (
        <div className="space-y-1.5">
          <p className="text-sm font-bold text-[var(--color-accent-alg)]">{block.labelFr}</p>
          {block.itemsFr.length > 0 && (
            <ul className="space-y-1 border-l-2 border-[var(--color-accent-alg)]/30 pl-3">
              {block.itemsFr.map((item, ii) => (
                <li key={ii} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
                  <span className="mt-0.5 shrink-0 text-[var(--color-accent-alg)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    case "svg_row":
      return (
        <div className="flex gap-3">
          {block.items.map((item, ii) => (
            <div key={ii} className="flex-1 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white p-3">
              <div dangerouslySetInnerHTML={{ __html: item.markup }} />
              {item.captionFr && (
                <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{item.captionFr}</p>
              )}
            </div>
          ))}
        </div>
      );
    case "plain":
    default: {
      const pv = block.type === "plain" ? block.pivot?.[pivot] : undefined;
      return (
        <div>
          <p className="text-sm text-[var(--color-text-secondary)]">{renderBold(block.fr)}</p>
          {showPivot && pv ? (
            <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-xs italic text-[var(--color-text-primary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{pv}</p>
          ) : null}
        </div>
      );
    }
  }
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

const SPECIAL_NUMS = [
  12,13,14,15,16,17,18,19,
  21,22,23,24,25,26,27,28,29,
  31,32,33,34,35,36,37,38,39,
  41,42,43,44,45,46,47,48,49,
  51,52,53,54,55,56,57,58,59,
  61,62,63,64,65,66,67,68,69,
  71,72,73,74,75,76,77,78,79,
  81,82,83,84,85,86,87,88,89,
  91,92,93,94,95,96,97,98,99,
];

function generateEx6Composition(): NumberComposition {
  const n = shuffle(SPECIAL_NUMS)[0]!;
  return { value: n, clips: [_S(n)] };
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
    // eslint-disable-next-line @next/next/no-img-element
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

const CONSIGNE_PIVOT: Record<"ex1"|"ex2"|"ex3"|"ex4"|"ex5"|"ex6"|"ex7"|"ex8"|"ex9"|"ex10"|"ex11"|"ex12"|"ex13"|"ex14"|"ex15"|"ex16"|"ex17"|"ex18"|"ex19"|"ex20"|"ex21"|"ex22"|"ex23"|"ex24"|"ex25"|"ex26"|"ex27", Partial<Record<PivotCode, string>>> = {
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
  ex14: {
    en: "Decompose the number into thousands, hundreds, tens and units.",
    ar: "حلّل العدد إلى آلاف ومئات وعشرات ووحدات.",
    fa: "عدد را به هزار، صد، ده و یک تجزیه کنید.",
    uk: "Розкладіть число на тисячі, сотні, десятки та одиниці.",
    ti: "ቁጽሩ ናብ ሽሕ፡ ሚእቲ፡ ዓሰርተ፡ ውልቂ ምፍንጣሕ።",
  },
  ex15: {
    en: "Choose the tag(s) showing the same number.",
    ar: "اختر البطاقة (البطاقات) التي تُظهر نفس العدد.",
    fa: "برچسب‌هایی را انتخاب کنید که همان عدد را نشان می‌دهند.",
    uk: "Виберіть ярлик(и) з однаковим числом.",
    ti: "ናይ ሓደ ቁጽሪ ዝርዝር ምረጽ።",
  },
  ex16: {
    en: "Complete the boxes following the arrows.",
    ar: "أكمل الخانات باتباع الأسهم.",
    fa: "جعبه‌ها را با دنبال کردن فلش‌ها کامل کنید.",
    uk: "Заповніть клітинки, слідуючи стрілкам.",
    ti: "ካብ ሕርሲ ዝሰዓቡ ናይ ቁጽሪ ኩርናዕታት ምልኣ።",
  },
  ex17: {
    en: "Write the numbers indicated by the arrows on the number line.",
    ar: "اكتب الأرقام التي تشير إليها الأسهم على المستقيم العددي.",
    fa: "اعدادی که توسط فلش‌ها روی خط اعداد نشان داده شده‌اند را بنویسید.",
    uk: "Запишіть числа, на які вказують стрілки на числовій прямій.",
    ti: "ናይ ቁፅሪ መስመር ብኣኽናፍ ዝሕብሩ ቁጽርታት ጸሓፍ።",
  },
  ex18: {
    en: "Write the numbers indicated by the arrows on the number line.",
    ar: "اكتب الأعداد التي تشير إليها الأسهم على المحور العددي.",
  },
  ex19: {
    en: "Find the tens neighbours of each number.",
    ar: "أوجد الأعداد المجاورة لكل عدد.",
  },
  ex20: {
    en: "Find the hundreds neighbours of each number.",
    ar: "أوجد المئات المجاورة لكل عدد.",
  },
  ex21: { en: "Select the numbers that match the instruction." },
  ex22: { en: "Fill in the comparison sign: < > =" },
  ex23: { en: "Fill in the comparison sign for each pair." },
  ex24: { en: "Select all numbers matching the condition." },
  ex25: { en: "Click each number to color it in the right colour." },
  ex26: { en: "Check which numbers belong inside each bubble." },
  ex27: { en: "Write a number between the two given numbers." },
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

type Step = "theory" | "audio" | "ex1" | "ex2" | "ex3" | "ex4" | "ex5" | "ex6" | "ex7" | "ex8" | "ex9" | "ex10" | "ex11" | "ex12" | "ex13" | "ex14" | "ex15" | "ex16" | "ex17" | "ex18" | "ex19" | "ex20" | "ex21" | "ex22" | "ex23" | "ex24" | "ex25" | "ex26" | "ex27" | "eval";

function getLessonSteps(lesson: MathSubmoduleLesson): Step[] {
  const hasAudio = !!lesson.theory.readAloud;
  if (lesson.submoduleId === "A1-1") {
    return hasAudio
      ? ["theory", "audio", "ex1", "ex2", "ex3", "ex4", "ex5", "ex6", "ex7", "ex8" /*, "eval" — suspendu temporairement */]
      : ["theory", "ex1", "ex2", "ex3", "ex4", "ex5", "ex6", "ex7", "ex8" /*, "eval" */];
  }
  if (lesson.submoduleId === "A1-2") {
    return ["theory", "ex9", "ex10", "ex11", "ex12", "ex13", "ex14", "ex15", "ex16" /*, "eval" */];
  }
  if (lesson.submoduleId === "A1-3") {
    return ["theory", "ex17", "ex18", "ex19", "ex20" /*, "eval" */];
  }
  if (lesson.submoduleId === "A1-4") {
    return ["theory", "ex21", "ex22", "ex23", "ex24", "ex25", "ex26", "ex27" /*, "eval" */];
  }
  if (lesson.submoduleId === "A1-5") {
    return ["theory" /*, "eval" */];
  }
  return hasAudio ? ["theory", "audio" /*, "eval" */] : ["theory" /*, "eval" */];
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

function generateEx12Combined(): Ex12Question {
  const useDecompose = Math.random() < 0.5;
  return useDecompose
    ? pickImage(DECOMPOSE_IMAGES, "decompose")
    : pickImage(ASSEMBLE_IMAGES, "assemble");
}

// ─── Ex14 — appariement d'étiquettes ─────────────────────────────────────────

type Ex14TagDef = { label: string; correct: boolean };
type Ex14Question = { refNum: number; refDisplay: string; tags: Ex14TagDef[] };

type Ex14PoolItem = { refNum: number; refDisplay: string; correctOptions: string[]; wrongOptions: string[] };

const EX14_POOL: Ex14PoolItem[] = [
  { refNum: 346, refDisplay: "346",
    correctOptions: ["300 + 40 + 6", "3 centaines, 4 dizaines et 6 unités",
                     "100+100+100+40+6", "100+100+100+10+10+10+10+1+1+1+1+1+1"],
    wrongOptions:   ["3 dizaines, 4 centaines et 6 unités", "300 + 60 + 4",
                     "100+100+10+10+10+10+1+1+1+1+1+1", "100+100+100+10+10+10+10+10+10+1"],
  },
  { refNum: 207, refDisplay: "207",
    correctOptions: ["200 + 7", "2 centaines et 7 unités",
                     "100+100+7", "100+100+1+1+1+1+1+1+1"],
    wrongOptions:   ["2 centaines et 7 dizaines", "2 dizaines et 7 centaines",
                     "100+100+10+7", "100+100+100+7"],
  },
  { refNum: 560, refDisplay: "560",
    correctOptions: ["500 + 60", "5 centaines et 6 dizaines",
                     "100+100+100+100+100+60", "100+100+100+100+100+10+10+10+10+10+10"],
    wrongOptions:   ["5 dizaines et 6 centaines", "500 + 6",
                     "100+100+100+100+60", "100+100+100+100+100+10+10+10+10+10"],
  },
  { refNum: 1003, refDisplay: "1 003",
    correctOptions: ["1 000 + 3", "1 millier et 3 unités",
                     "1000+3", "1000+1+1+1"],
    wrongOptions:   ["1 millier et 3 dizaines", "1 millier et 3 centaines",
                     "1000+10+3", "1000+100+3"],
  },
  { refNum: 912, refDisplay: "912",
    correctOptions: ["900 + 10 + 2", "9 centaines, 1 dizaine et 2 unités",
                     "100+100+100+100+100+100+100+100+100+10+2", "900+12"],
    wrongOptions:   ["9 centaines, 2 dizaines et 1 unité", "9 dizaines, 1 centaine et 2 unités",
                     "900+10+1", "100+100+100+100+100+100+100+100+10+2"],
  },
  { refNum: 1010, refDisplay: "1 010",
    correctOptions: ["1 000 + 10", "1 millier et 1 dizaine",
                     "1000+10"],
    wrongOptions:   ["1 millier et 1 centaine", "1 millier et 1 unité",
                     "1000+100", "1000+1"],
  },
  { refNum: 415, refDisplay: "415",
    correctOptions: ["400 + 10 + 5", "4 centaines, 1 dizaine et 5 unités",
                     "100+100+100+100+10+5", "400+10+5"],
    wrongOptions:   ["4 centaines, 5 dizaines et 1 unité", "4 dizaines, 1 centaine et 5 unités",
                     "100+100+100+10+5", "100+100+100+100+50+5"],
  },
  { refNum: 2304, refDisplay: "2 304",
    correctOptions: ["2 000 + 300 + 4", "2 milliers, 3 centaines et 4 unités",
                     "2000+300+4", "1000+1000+100+100+100+4"],
    wrongOptions:   ["2 milliers, 4 centaines et 3 unités", "2 milliers, 3 dizaines et 4 unités",
                     "2000+300+40+4", "2000+30+4"],
  },
];

function generateEx14(): Ex14Question[] {
  return shuffle(EX14_POOL).slice(0, 2).map(q => {
    const numCorrect = Math.random() < 0.5 ? 1 : 2;
    const correct = shuffle(q.correctOptions).slice(0, numCorrect)
      .map(label => ({ label, correct: true as const }));
    const wrong = shuffle(q.wrongOptions).slice(0, 3 - numCorrect)
      .map(label => ({ label, correct: false as const }));
    return { refNum: q.refNum, refDisplay: q.refDisplay, tags: shuffle([...correct, ...wrong]) };
  });
}

// ─── Ex16 — grille de flèches 3×3 ────────────────────────────────────────────

interface Ex15Question {
  tl: number; tr: number; bl: number; br: number;
  givenIdx: number; // 0=TL, 1=TR, 2=BL, 3=BR
  cfgIdx: number;
  arrows: Ex16ArrowDef[]; // actual arrows to render (may have reversed symbols from base cfg)
}

interface Ex16ArrowDef { row: number; col: number; symbol: string; colorCls: string }
interface Ex16Cfg { offsets: [number, number, number, number]; arrows: Ex16ArrowDef[] }

// 8 configs: offsets = [tl, tr, bl, br] relative to base. Arrow grid pos (row/col in 3×3).
const EX16_CONFIGS: Ex16Cfg[] = [
  // 0: classic L-shape — →blue top, ↓red left, →green bottom
  { offsets: [0, 1000, 100, 110],
    arrows: [{ row:0,col:1,symbol:"→",colorCls:"text-blue-600 dark:text-blue-400" },
             { row:1,col:0,symbol:"↓",colorCls:"text-amber-600 dark:text-red-400" },
             { row:2,col:1,symbol:"→",colorCls:"text-emerald-600 dark:text-emerald-400" }]},
  // 1: →red top, ↓blue left, →green bottom
  { offsets: [0, 100, 1000, 1010],
    arrows: [{ row:0,col:1,symbol:"→",colorCls:"text-amber-600 dark:text-red-400" },
             { row:1,col:0,symbol:"↓",colorCls:"text-blue-600 dark:text-blue-400" },
             { row:2,col:1,symbol:"→",colorCls:"text-emerald-600 dark:text-emerald-400" }]},
  // 2: →green top, ↓red left, →blue bottom
  { offsets: [0, 10, 100, 1100],
    arrows: [{ row:0,col:1,symbol:"→",colorCls:"text-emerald-600 dark:text-emerald-400" },
             { row:1,col:0,symbol:"↓",colorCls:"text-amber-600 dark:text-red-400" },
             { row:2,col:1,symbol:"→",colorCls:"text-blue-600 dark:text-blue-400" }]},
  // 3: →blue top, ↓green left, →red bottom
  { offsets: [0, 1000, 10, 110],
    arrows: [{ row:0,col:1,symbol:"→",colorCls:"text-blue-600 dark:text-blue-400" },
             { row:1,col:0,symbol:"↓",colorCls:"text-emerald-600 dark:text-emerald-400" },
             { row:2,col:1,symbol:"→",colorCls:"text-amber-600 dark:text-red-400" }]},
  // 4: diagonal star from TL — →red top, ↓green left, ↘blue center
  { offsets: [0, 100, 10, 1000],
    arrows: [{ row:0,col:1,symbol:"→",colorCls:"text-amber-600 dark:text-red-400" },
             { row:1,col:0,symbol:"↓",colorCls:"text-emerald-600 dark:text-emerald-400" },
             { row:1,col:1,symbol:"↘",colorCls:"text-blue-600 dark:text-blue-400" }]},
  // 5: diagonal star from TL — →blue top, ↓green left, ↘red center
  { offsets: [0, 1000, 10, 100],
    arrows: [{ row:0,col:1,symbol:"→",colorCls:"text-blue-600 dark:text-blue-400" },
             { row:1,col:0,symbol:"↓",colorCls:"text-emerald-600 dark:text-emerald-400" },
             { row:1,col:1,symbol:"↘",colorCls:"text-amber-600 dark:text-red-400" }]},
  // 6: upside-down L — →blue top, ↓red left, ↓green right
  { offsets: [0, 1000, 100, 1010],
    arrows: [{ row:0,col:1,symbol:"→",colorCls:"text-blue-600 dark:text-blue-400" },
             { row:1,col:0,symbol:"↓",colorCls:"text-amber-600 dark:text-red-400" },
             { row:1,col:2,symbol:"↓",colorCls:"text-emerald-600 dark:text-emerald-400" }]},
  // 7: upside-down L — →red top, ↓blue left, ↓green right
  { offsets: [0, 100, 1000, 110],
    arrows: [{ row:0,col:1,symbol:"→",colorCls:"text-amber-600 dark:text-red-400" },
             { row:1,col:0,symbol:"↓",colorCls:"text-blue-600 dark:text-blue-400" },
             { row:1,col:2,symbol:"↓",colorCls:"text-emerald-600 dark:text-emerald-400" }]},
];

const ARROW_FLIP: Record<string, string> = {
  "→": "←", "←": "→", "↓": "↑", "↑": "↓", "↘": "↖", "↖": "↘",
};

function arrowColorValue(colorCls: string): number {
  if (colorCls.includes("blue")) return 1000;
  if (colorCls.includes("red")) return 100;
  return 10;
}

// Compute signed offsets [TL, TR, BL, BR] relative to TL (base=0),
// taking into account the ACTUAL (possibly flipped) arrow symbols.
// Rule: following an arrow in its direction always ADDS the colour value.
//   →/↓/↘ : destination = source + value  (positive offset)
//   ←/↑/↖ : destination = source + value, but destination is the LEFT/TOP cell
//            → source (right/bottom) = destination (left/top) - value
function computeSignedOffsets(arrows: Ex16ArrowDef[]): [number, number, number, number] {
  const o: [number, number, number, number] = [0, 0, 0, 0];
  for (const a of arrows) {
    const v = arrowColorValue(a.colorCls);
    if (a.row === 0 && a.col === 1) {
      // between TL(0) and TR(1)
      o[1] = a.symbol === "→" ? v : -v;
    } else if (a.row === 1 && a.col === 0) {
      // between TL(0) and BL(2)
      o[2] = a.symbol === "↓" ? v : -v;
    } else if (a.row === 2 && a.col === 1) {
      // between BL(2) and BR(3)
      o[3] = o[2] + (a.symbol === "→" ? v : -v);
    } else if (a.row === 1 && a.col === 2) {
      // between TR(1) and BR(3)
      o[3] = o[1] + (a.symbol === "↓" ? v : -v);
    } else if (a.row === 1 && a.col === 1) {
      // diagonal TL(0) → BR(3)
      o[3] = a.symbol === "↘" ? v : -v;
    }
  }
  return o;
}

function generateEx15(): Ex15Question[] {
  const results: Ex15Question[] = [];
  const usedCfgs = new Set<number>();
  for (let s = 0; s < 2; s++) {
    let cfgIdx: number;
    do { cfgIdx = Math.floor(Math.random() * EX16_CONFIGS.length); } while (usedCfgs.has(cfgIdx));
    usedCfgs.add(cfgIdx);
    const cfg = EX16_CONFIGS[cfgIdx]!;
    // Flip arrows randomly first
    const arrows = cfg.arrows.map(a => {
      const flip = Math.random() < 0.5;
      const sym = flip ? (ARROW_FLIP[a.symbol] ?? a.symbol) : a.symbol;
      return { ...a, symbol: sym };
    });
    // Compute signed offsets from the actual (flipped) symbols
    const o = computeSignedOffsets(arrows);
    const minOff = Math.min(...o);
    const maxOff = Math.max(...o);
    const minBase = 100 - minOff;
    const maxBase = 9999 - maxOff;
    let base = minBase;
    if (maxBase > minBase) {
      base = Math.floor(Math.random() * (maxBase - minBase + 1)) + minBase;
    }
    results.push({ tl: base + o[0]!, tr: base + o[1]!, bl: base + o[2]!, br: base + o[3]!,
                   givenIdx: Math.floor(Math.random() * 4), cfgIdx, arrows });
  }
  return results;
}

// ─── Ex16 — droite numérique (A1.3) ──────────────────────────────────────────

interface Ex16Line {
  min: number;
  max: number;
  arrows: [number, number]; // 2 values to guess
}

function generateEx16(): Ex16Line[] {
  const results: Ex16Line[] = [];
  const usedMins = new Set<number>();
  for (let s = 0; s < 2; s++) {
    const widths = [20, 30, 40, 50];
    const width = widths[Math.floor(Math.random() * widths.length)]!;
    let min = 0;
    for (let g = 0; g < 200; g++) {
      const b = Math.floor(Math.random() * ((990 - width) / 10)) * 10;
      if (!usedMins.has(b) && b + width <= 990) { min = b; usedMins.add(b); break; }
    }
    const max = min + width;
    const candidates: number[] = [];
    for (let v = min + 1; v < max; v++) {
      if (v % 10 !== 0) candidates.push(v);
    }
    const sh = shuffle(candidates);
    results.push({ min, max, arrows: [Math.min(sh[0]!, sh[1]!), Math.max(sh[0]!, sh[1]!)] });
  }
  return results;
}

// ─── Ex18 — droite numérique 0–9000 (A1.3) ───────────────────────────────────

interface Ex18Line {
  min: number; max: number; step: number;
  arrows: [number, number];
}

function generateEx18(): Ex18Line[] {
  const results: Ex18Line[] = [];
  const usedMins = new Set<number>();
  for (let s = 0; s < 2; s++) {
    const step = 100;
    const widths = [200, 300, 400];
    const width = widths[Math.floor(Math.random() * widths.length)]!;
    let min = 0;
    for (let g = 0; g < 200; g++) {
      const b = Math.floor(Math.random() * ((9000 - width) / 100)) * 100;
      if (!usedMins.has(b) && b + width <= 9000) { min = b; usedMins.add(b); break; }
    }
    const max = min + width;
    const candidates: number[] = [];
    for (let v = min + step; v < max; v += step) {
      for (let off = 10; off < step; off += 10) candidates.push(v - step + off);
    }
    for (let off = 10; off < step; off += 10) candidates.push(max - step + off);
    const valid = candidates.filter(v => v > min && v < max && v % step !== 0);
    const pool = valid.length >= 2 ? valid : Array.from({length: width/10-1}, (_,i) => min + (i+1)*10).filter(v=>v%step!==0);
    const sh = shuffle(pool);
    results.push({ min, max, step, arrows: [Math.min(sh[0]!, sh[1]!), Math.max(sh[0]!, sh[1]!)] });
  }
  return results;
}

// ─── Ex19 — voisins des dizaines (A1.3) ──────────────────────────────────────

function generateEx19(): number[][] {
  const series: number[][] = [];
  for (let s = 0; s < 3; s++) {
    const nums: number[] = [];
    const used = new Set<number>();
    while (nums.length < 5) {
      const n = Math.floor(Math.random() * 900) + 100;
      if (n % 10 !== 0 && !used.has(n)) { nums.push(n); used.add(n); }
    }
    series.push(nums);
  }
  return series;
}

// ─── Ex20 — voisins des centaines (A1.3) ─────────────────────────────────────

function generateEx20(): number[][] {
  const series: number[][] = [];
  for (let s = 0; s < 3; s++) {
    const nums: number[] = [];
    const used = new Set<number>();
    while (nums.length < 5) {
      const n = Math.floor(Math.random() * 8999) + 1001;
      if (n % 100 !== 0 && !used.has(n)) { nums.push(n); used.add(n); }
    }
    series.push(nums);
  }
  return series;
}

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

// ─── Ex21 — Sélection comparative (A1.4) ─────────────────────────────────────

type Ex21Mode = "plus_grand" | "plus_petit" | "entre";
interface Ex21Series { mode: Ex21Mode; numbers: number[]; limitLo: number; limitHi: number }

function generateEx21(): Ex21Series[] {
  const allModes = shuffle<Ex21Mode>(["plus_grand", "plus_petit", "entre"]);
  return allModes.map(mode => {
    const nums: number[] = [];
    const used = new Set<number>();
    while (nums.length < 5) {
      const n = Math.floor(Math.random() * 800) + 100;
      if (!used.has(n)) { nums.push(n); used.add(n); }
    }
    const sorted = [...nums].sort((a, b) => a - b);
    return { mode, numbers: shuffle(nums), limitLo: sorted[1]!, limitHi: sorted[3]! };
  });
}

// ─── Ex22 — Comparaison avec blocs (A1.4) ────────────────────────────────────

interface Ex22Pair { a: number; b: number }

function generateEx22(): Ex22Pair[] {
  const pairs: Ex22Pair[] = [];
  const used = new Set<string>();
  while (pairs.length < 3) {
    const a = Math.floor(Math.random() * 800) + 100;
    const b = Math.floor(Math.random() * 800) + 100;
    if (a !== b && !used.has(`${a}-${b}`)) { pairs.push({ a, b }); used.add(`${a}-${b}`); }
  }
  return pairs;
}

// ─── Ex23 — Grille de comparaison 20 paires (A1.4) ───────────────────────────

function generateEx23(): Ex22Pair[] {
  const pairs: Ex22Pair[] = [];
  const used = new Set<string>();
  for (let i = 0; i < 3; i++) {
    const a = Math.floor(Math.random() * 800) + 100;
    if (!used.has(`${a}-${a}`)) { pairs.push({ a, b: a }); used.add(`${a}-${a}`); }
  }
  while (pairs.length < 20) {
    const a = Math.floor(Math.random() * 800) + 100;
    const b = Math.floor(Math.random() * 800) + 100;
    const key = `${a}-${b}`;
    if (!used.has(key)) { pairs.push({ a, b }); used.add(key); }
  }
  return shuffle(pairs);
}

// ─── Ex24 — Mur de briques (A1.4) ────────────────────────────────────────────

type Ex24Mode = "moins_que" | "plus_que" | "entre";
interface Ex24Config { numbers: number[]; mode: Ex24Mode; threshold: number; limitLo: number; limitHi: number }

function generateEx24(): Ex24Config[] {
  const modes = shuffle<Ex24Mode>(["moins_que", "plus_que", "entre"]);
  return modes.map(mode => {
    const nums: number[] = [];
    const used = new Set<number>();
    while (nums.length < 12) {
      const n = Math.floor(Math.random() * 800) + 100;
      if (!used.has(n)) { nums.push(n); used.add(n); }
    }
    const sorted = [...nums].sort((a, b) => a - b);
    return { numbers: shuffle(nums), mode, threshold: sorted[5]!, limitLo: sorted[3]!, limitHi: sorted[8]! };
  });
}

// ─── Ex25 — Colorier par plage (A1.4) ────────────────────────────────────────

function generateEx25Numbers(): number[] {
  const pool: number[] = [];
  const used = new Set<number>();
  const ranges: [number, number, number][] = [
    [350, 600, 4], [711, 900, 3], [50, 299, 3], [301, 349, 1], [601, 710, 1],
  ];
  for (const [lo, hi, count] of ranges) {
    let added = 0, tries = 0;
    while (added < count && tries < 200) {
      tries++;
      const n = Math.floor(Math.random() * (hi - lo + 1)) + lo;
      if (!used.has(n)) { pool.push(n); used.add(n); added++; }
    }
  }
  return shuffle(pool);
}

function ex25CorrectColor(n: number): string | null {
  if (n >= 350 && n <= 600) return "vert";
  if (n > 710) return "bleu";
  if (n < 300) return "jaune";
  return null;
}

// ─── Ex26 — Nombres dans les bulles (A1.4) ───────────────────────────────────

const EX26_NUMBERS = [12, 710, 553, 34, 908, 199, 48, 587, 200, 330, 815, 242, 261, 498, 890, 699, 314];
const EX26_BUBBLES = [
  { lo: 10, hi: 250, bgCls: "bg-amber-50 dark:bg-amber-950/20", borderCls: "border-amber-400 dark:border-red-600", textCls: "text-red-600 dark:text-red-400", btnBase: "border-red-300 dark:border-red-700 hover:bg-red-100 dark:hover:bg-red-900/30", btnSel: "bg-red-200 dark:bg-red-800/40 border-red-500" },
  { lo: 250, hi: 700, bgCls: "bg-violet-50 dark:bg-violet-950/20", borderCls: "border-violet-400 dark:border-violet-600", textCls: "text-violet-600 dark:text-violet-400", btnBase: "border-violet-300 dark:border-violet-700 hover:bg-violet-100 dark:hover:bg-violet-900/30", btnSel: "bg-violet-200 dark:bg-violet-800/40 border-violet-500" },
  { lo: 700, hi: 920, bgCls: "bg-blue-50 dark:bg-blue-950/20", borderCls: "border-blue-400 dark:border-blue-600", textCls: "text-blue-600 dark:text-blue-400", btnBase: "border-blue-300 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/30", btnSel: "bg-blue-200 dark:bg-blue-800/40 border-blue-500" },
] as const;

// ─── Ex27 — Écrire entre deux bornes (A1.4) ──────────────────────────────────

interface Ex27Item { lo: number; hi: number; reversed: boolean }

function generateEx27(): Ex27Item[][] {
  const series: Ex27Item[][] = [];
  for (let s = 0; s < 2; s++) {
    const items: Ex27Item[] = [];
    const used = new Set<string>();
    while (items.length < 4) {
      const gap = Math.floor(Math.random() * 8) + 2;
      const lo = Math.floor(Math.random() * (999 - gap)) + 1;
      const hi = lo + gap;
      const key = `${lo}-${hi}`;
      if (!used.has(key) && hi <= 999) {
        used.add(key);
        items.push({ lo, hi, reversed: Math.random() < 0.5 });
      }
    }
    series.push(items);
  }
  return series;
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


function ExerciseRow({
  num, inputId, answer, result, validated, correctWord,
  pivotWord, pivot, showPivot, onChange,
}: {
  num: number; inputId: string; answer: string; result: boolean | null;
  validated: boolean; correctWord: string; pivotWord?: string;
  pivot: PivotCode; showPivot: boolean; onChange: (val: string) => void;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
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
        <div className={`flex h-10 flex-1 items-center gap-2 rounded-[var(--radius-md)] border bg-[var(--color-bg-primary)] px-3 ${result ? "border-blue-400" : "border-amber-400"}`}>
          {result ? (
            <span className="text-sm font-medium text-[var(--color-text-primary)]">{answer}</span>
          ) : (
            <>
              <span className="text-sm text-amber-600 line-through">{answer}</span>
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

  // Ex11 — décomposition M/C/D/U
  const [ex11Questions, setEx11Questions] = useState<Ex11Question[]>(generateEx11);
  const [ex11Answers, setEx11Answers] = useState<Array<{m:string;c:string;d:string;u:string}>>(
    Array(1).fill(null).map(() => ({m:"",c:"",d:"",u:""}))
  );
  const [ex11Results, setEx11Results] = useState<(boolean|null)[]>(Array(1).fill(null));
  const [ex11Validated, setEx11Validated] = useState(false);

  const resetEx11 = () => {
    setEx11Questions(generateEx11());
    setEx11Answers(Array(1).fill(null).map(() => ({m:"",c:"",d:"",u:""})));
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

  // Ex14 — décomposition nombre (2 séries)
  const genEx14Nums = () => Array.from({length: 2}, () => Math.floor(Math.random() * 9899) + 101);
  const [ex14Numbers, setEx14Numbers] = useState<number[]>(genEx14Nums);
  const [ex14Ans, setEx14Ans] = useState<{m:string;c:string;d:string;u:string}[]>(() =>
    Array(2).fill(null).map(() => ({m:"",c:"",d:"",u:""}))
  );
  const [ex14Validated, setEx14Validated] = useState(false);
  const resetEx14 = () => {
    setEx14Numbers(genEx14Nums());
    setEx14Ans(Array(2).fill(null).map(() => ({m:"",c:"",d:"",u:""})));
    setEx14Validated(false);
  };

  // Ex15 — appariement d'étiquettes (ex-14)
  const [ex15Questions, setEx15Questions] = useState<Ex14Question[]>(generateEx14);
  const [ex15Selected, setEx15Selected] = useState<boolean[][]>(() =>
    Array(2).fill(null).map(() => Array(3).fill(false))
  );
  const [ex15Validated, setEx15Validated] = useState(false);
  const resetEx15 = () => {
    setEx15Questions(generateEx14());
    setEx15Selected(Array(2).fill(null).map(() => Array(3).fill(false)));
    setEx15Validated(false);
  };

  // Ex16 — grille de flèches 3×3 (ex-15)
  const [ex16Questions, setEx16Questions] = useState<Ex15Question[]>(generateEx15);
  const [ex16Answers, setEx16Answers] = useState<string[][]>(() =>
    Array(2).fill(null).map(() => ["", "", "", ""])
  );
  const [_ex16Results, setEx16Results] = useState<(boolean | null)[]>(Array(2).fill(null));
  const [ex16Validated, setEx16Validated] = useState(false);
  const resetEx16 = () => {
    setEx16Questions(generateEx15());
    setEx16Answers(Array(2).fill(null).map(() => ["", "", "", ""]));
    setEx16Results(Array(2).fill(null));
    setEx16Validated(false);
  };

  // Ex17 — droite numérique (ex-16, A1.3)
  const [ex17Lines, setEx17Lines] = useState<Ex16Line[]>(generateEx16);
  const [ex17Answers, setEx17Answers] = useState<string[][]>(() =>
    Array(2).fill(null).map(() => ["", ""])
  );
  const [ex17Results, setEx17Results] = useState<(boolean | null)[][]>(() =>
    Array(2).fill(null).map(() => [null, null])
  );
  const [ex17Validated, setEx17Validated] = useState(false);
  const resetEx17 = () => {
    setEx17Lines(generateEx16());
    setEx17Answers(Array(2).fill(null).map(() => ["", ""]));
    setEx17Results(Array(2).fill(null).map(() => [null, null]));
    setEx17Validated(false);
  };

  // Ex18 — droite numérique 0–9000
  const [ex18Lines, setEx18Lines] = useState<Ex18Line[]>(generateEx18);
  const [ex18Answers, setEx18Answers] = useState<string[][]>(() =>
    Array(2).fill(null).map(() => ["", ""])
  );
  const [ex18Results, setEx18Results] = useState<(boolean | null)[][]>(() =>
    Array(2).fill(null).map(() => [null, null])
  );
  const [ex18Validated, setEx18Validated] = useState(false);
  const resetEx18 = () => {
    setEx18Lines(generateEx18());
    setEx18Answers(Array(2).fill(null).map(() => ["", ""]));
    setEx18Results(Array(2).fill(null).map(() => [null, null]));
    setEx18Validated(false);
  };

  // Ex19 — voisins des dizaines
  const [ex19Data, setEx19Data] = useState<number[][]>(generateEx19);
  const [ex19Ans, setEx19Ans] = useState<{lo:string;hi:string}[][]>(() =>
    Array(3).fill(null).map(() => Array(5).fill(null).map(() => ({lo:"",hi:""})))
  );
  const [ex19Validated, setEx19Validated] = useState(false);
  const resetEx19 = () => {
    setEx19Data(generateEx19());
    setEx19Ans(Array(3).fill(null).map(() => Array(5).fill(null).map(() => ({lo:"",hi:""}))));
    setEx19Validated(false);
  };

  // Ex20 — voisins des centaines
  const [ex20Data, setEx20Data] = useState<number[][]>(generateEx20);
  const [ex20Ans, setEx20Ans] = useState<{lo:string;hi:string}[][]>(() =>
    Array(3).fill(null).map(() => Array(5).fill(null).map(() => ({lo:"",hi:""})))
  );
  const [ex20Validated, setEx20Validated] = useState(false);
  const resetEx20 = () => {
    setEx20Data(generateEx20());
    setEx20Ans(Array(3).fill(null).map(() => Array(5).fill(null).map(() => ({lo:"",hi:""}))));
    setEx20Validated(false);
  };

  // Ex21 — Sélection comparative (A1.4)
  const [ex21Data, setEx21Data] = useState<Ex21Series[]>(generateEx21);
  const [ex21Selected, setEx21Selected] = useState<boolean[][]>(() => Array(3).fill(null).map(() => Array(5).fill(false)));
  const [ex21Validated, setEx21Validated] = useState(false);
  const resetEx21 = () => { setEx21Data(generateEx21()); setEx21Selected(Array(3).fill(null).map(() => Array(5).fill(false))); setEx21Validated(false); };

  // Ex22 — Comparaison avec blocs (A1.4)
  const [ex22Pairs, setEx22Pairs] = useState<Ex22Pair[]>(generateEx22);
  const [ex22Syms, setEx22Syms] = useState<string[]>(Array(3).fill(""));
  const [ex22Validated, setEx22Validated] = useState(false);
  const resetEx22 = () => { setEx22Pairs(generateEx22()); setEx22Syms(Array(3).fill("")); setEx22Validated(false); };

  // Ex23 — Grille de comparaison (A1.4)
  const [ex23Pairs, setEx23Pairs] = useState<Ex22Pair[]>(generateEx23);
  const [ex23Syms, setEx23Syms] = useState<string[]>(Array(20).fill(""));
  const [ex23Validated, setEx23Validated] = useState(false);
  const resetEx23 = () => { setEx23Pairs(generateEx23()); setEx23Syms(Array(20).fill("")); setEx23Validated(false); };

  // Ex24 — Mur de briques (A1.4)
  const [ex24Data, setEx24Data] = useState<Ex24Config[]>(generateEx24);
  const [ex24Selected, setEx24Selected] = useState<boolean[][]>(() => Array(3).fill(null).map(() => Array(12).fill(false)));
  const [ex24Validated, setEx24Validated] = useState(false);
  const resetEx24 = () => { setEx24Data(generateEx24()); setEx24Selected(Array(3).fill(null).map(() => Array(12).fill(false))); setEx24Validated(false); };

  // Ex25 — Colorier insectes (A1.4)
  const [ex25Numbers, setEx25Numbers] = useState<number[]>(generateEx25Numbers);
  const [ex25Colors, setEx25Colors] = useState<(string | null)[]>(() => Array(12).fill(null));
  const [ex25Validated, setEx25Validated] = useState(false);
  const resetEx25 = () => { setEx25Numbers(generateEx25Numbers()); setEx25Colors(Array(12).fill(null)); setEx25Validated(false); };

  // Ex26 — Nombres dans les bulles (A1.4)
  const [ex26Checked, setEx26Checked] = useState<boolean[][]>(() => Array(17).fill(null).map(() => Array(3).fill(false)));
  const [ex26Validated, setEx26Validated] = useState(false);
  const resetEx26 = () => { setEx26Checked(Array(17).fill(null).map(() => Array(3).fill(false))); setEx26Validated(false); };

  // Ex27 — Écrire entre deux bornes (A1.4)
  const [ex27Data, setEx27Data] = useState<Ex27Item[][]>(generateEx27);
  const [ex27Ans, setEx27Ans] = useState<string[][]>(() => Array(2).fill(null).map(() => Array(4).fill("")));
  const [ex27Validated, setEx27Validated] = useState(false);
  const resetEx27 = () => { setEx27Data(generateEx27()); setEx27Ans(Array(2).fill(null).map(() => Array(4).fill(""))); setEx27Validated(false); };

  // A1.2 Évaluation — une question par exercice
  const [a12EvalQ9, setA12EvalQ9] = useState<Ex9Question>(() => generateEx9()[0]!);
  const [a12EvalQ9Sel, setA12EvalQ9Sel] = useState<number | null>(null);
  const [a12EvalQ10, setA12EvalQ10] = useState<Ex10Question>(() => generateEx10()[0]!);
  const [a12EvalQ10Ans, setA12EvalQ10Ans] = useState("");
  const [a12EvalQ11, setA12EvalQ11] = useState<Ex11Question>(() => generateEx11()[0]!);
  const [a12EvalQ11Ans, setA12EvalQ11Ans] = useState<{m:string;c:string;d:string;u:string}>({m:"",c:"",d:"",u:""});
  const [a12EvalQ12, setA12EvalQ12] = useState<Ex12Question>(generateEx12Combined);
  const [a12EvalQ12Ans, setA12EvalQ12Ans] = useState("");
  // Ex14 decomposition questions (2 questions, each 1 pt)
  const [a12EvalEx14Nums] = useState<number[]>(() => Array.from({length:2}, () => Math.floor(Math.random()*9899)+101));
  const [a12EvalEx14Ans, setA12EvalEx14Ans] = useState<{m:string;c:string;d:string;u:string}[]>(() => Array(2).fill(null).map(()=>({m:"",c:"",d:"",u:""})));
  // Ex15 tag-matching questions (2 questions, each 1 pt)
  const [a12EvalEx15Qs] = useState<Ex14Question[]>(generateEx14);
  const [a12EvalEx15Sel, setA12EvalEx15Sel] = useState<boolean[][]>(() => Array(2).fill(null).map(()=>Array(3).fill(false)));
  // Ex16 arrow-grid questions (2 questions, each 1 pt)
  const [a12EvalEx16Qs] = useState<Ex15Question[]>(generateEx15);
  const [a12EvalEx16Ans, setA12EvalEx16Ans] = useState<string[][]>(() => Array(2).fill(null).map(()=>["","","",""]));

  const resetA12Eval = () => {
    setA12EvalQ9(generateEx9()[0]!); setA12EvalQ9Sel(null);
    setA12EvalQ10(generateEx10()[0]!); setA12EvalQ10Ans("");
    setA12EvalQ11(generateEx11()[0]!); setA12EvalQ11Ans({m:"",c:"",d:"",u:""});
    setA12EvalQ12(generateEx12Combined()); setA12EvalQ12Ans("");
    setA12EvalEx14Ans(Array(2).fill(null).map(()=>({m:"",c:"",d:"",u:""})));
    setA12EvalEx15Sel(Array(2).fill(null).map(()=>Array(3).fill(false)));
    setA12EvalEx16Ans(Array(2).fill(null).map(()=>["","","",""]));
  };

  // Évaluation sous-module
  const [evalItems, setEvalItems] = useState<EvalItem[]>(() => {
    const initIdx = loadA1Position().lessonIdx;
    return MATH_A1_LESSONS[initIdx]?.submoduleId === "A1-1" ? generateA11EvalItems() : [];
  });
  const [pooledExercises, setPooledExercises] = useState<MathExerciseItem[]>(() => {
    const initLesson = MATH_A1_LESSONS[loadA1Position().lessonIdx];
    if (!initLesson?.exercisePool) return [];
    return shuffle([...initLesson.exercisePool]).slice(0, initLesson.poolSize ?? 5);
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
  const [_submoduleAlreadyPassed, setSubmoduleAlreadyPassed] = useState(() => {
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
  const evalItems_curr = lesson.submoduleId === "A1-1"
    ? evalItems
    : lesson.exercisePool
      ? (pooledExercises as EvalItem[])
      : (lesson.exercises as EvalItem[]);
  const evalTotalPts = lesson.submoduleId === "A1-2" ? 10 : evalItems_curr.length;
  evalAutoSubmitRef.current = () => {
    if (evalSubmitted) return;
    if (lesson.submoduleId === "A1-2") {
      const q9val = a12EvalQ9.tens * 10 + a12EvalQ9.units;
      const q10val = a12EvalQ10.h * 100 + a12EvalQ10.d * 10 + a12EvalQ10.u;
      const r9  = a12EvalQ9Sel === q9val;
      const r10 = parseInt(a12EvalQ10Ans) === q10val;
      const r11 = parseInt(a12EvalQ11Ans.m) === a12EvalQ11.m * 1000 && parseInt(a12EvalQ11Ans.c) === a12EvalQ11.c * 100 && parseInt(a12EvalQ11Ans.d) === a12EvalQ11.d * 10 && parseInt(a12EvalQ11Ans.u) === a12EvalQ11.u;
      const r12 = parseInt(a12EvalQ12Ans) === a12EvalQ12.answer;
      // Ex14 decompose: each correct if all 4 fields match
      const r14 = a12EvalEx14Nums.map((n, qi) => {
        const m = Math.floor(n / 1000), c = Math.floor((n % 1000) / 100), d = Math.floor((n % 100) / 10), u = n % 10;
        const a = a12EvalEx14Ans[qi] ?? {m:"",c:"",d:"",u:""};
        return (a.m === "" ? 0 : parseInt(a.m)) === m * 1000 && (a.c === "" ? 0 : parseInt(a.c)) === c * 100 && (a.d === "" ? 0 : parseInt(a.d)) === d * 10 && (a.u === "" ? 0 : parseInt(a.u)) === u;
      });
      // Ex15 tag-matching: correct if selected tags exactly match correct tags
      const r15 = a12EvalEx15Qs.map((q, qi) => {
        const sel = a12EvalEx15Sel[qi] ?? [];
        return q.tags.every((tag, ti) => !!sel[ti] === tag.correct);
      });
      // Ex16 arrow-grid: correct if all 3 non-given answers match
      const r16 = a12EvalEx16Qs.map((q, qi) => {
        const vals = [q.tl, q.tr, q.bl, q.br];
        const ans = a12EvalEx16Ans[qi] ?? ["","","",""];
        let ok = true;
        for (let vi = 0; vi < 4; vi++) {
          if (vi === q.givenIdx) continue;
          if (parseInt(ans[vi] ?? "") !== vals[vi]) { ok = false; break; }
        }
        return ok;
      });
      const correct = [r9, r10, r11, r12, ...r14, ...r15, ...r16].filter(Boolean).length;
      const pts = correct; // 1 pt each
      const grade = linearSwissGrade(pts, 10);
      const resultsMap: Record<string, boolean> = { q9: r9, q10: r10, q11: r11, q12: r12 };
      r14.forEach((v, i) => { resultsMap[`q14_${i}`] = v; });
      r15.forEach((v, i) => { resultsMap[`q15_${i}`] = v; });
      r16.forEach((v, i) => { resultsMap[`q16_${i}`] = v; });
      setEvalResults(resultsMap);
      setEvalGrade(grade);
      setEvalSubmitted(true);
      setEvalStarted(false);
      if (grade >= passingGrade) {
        const prog = loadProgress();
        saveProgress(completeSubmodule(prog, "A1", lesson.submoduleId, pts, 10, grade));
        setSubmoduleAlreadyPassed(true);
      }
      return;
    }
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
    if (MATH_A1_LESSONS[idx]?.submoduleId === "A1-2") { resetEx9(); resetEx10(); resetEx11(); resetEx12(); resetEx13(); resetEx14(); resetEx15(); resetEx16(); resetA12Eval(); }
    if (MATH_A1_LESSONS[idx]?.submoduleId === "A1-3") { resetEx17(); resetEx18(); resetEx19(); resetEx20(); }
    if (MATH_A1_LESSONS[idx]?.submoduleId === "A1-4") { resetEx21(); resetEx22(); resetEx23(); resetEx24(); resetEx25(); resetEx26(); resetEx27(); }
    const nextLesson = MATH_A1_LESSONS[idx];
    if (nextLesson?.exercisePool) {
      setPooledExercises(shuffle([...nextLesson.exercisePool]).slice(0, nextLesson.poolSize ?? 5));
    } else {
      setPooledExercises([]);
    }
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

  // ── Nav fixe : actions de l'étape courante ─────────────────────────────────
  let stepReset: (() => void) | undefined;
  let stepValidate: (() => void) | undefined;
  let stepValidateDisabled = false;

  if (step === "ex1") {
    stepReset = resetExercise1;
  } else if (step === "ex2") {
    stepReset = resetExercise2;
    stepValidate = () => { setEx2Validated(true); setEx2Results(ex2Numbers.map((n, i) => checkWord(ex2Answers[i] ?? "", n))); };
    stepValidateDisabled = ex2Validated;
  } else if (step === "ex3") {
    stepReset = resetExercise3;
    stepValidate = () => { setEx3Validated(true); setEx3Results(ex3Numbers.map((n, i) => checkTensWord(ex3Answers[i] ?? "", n))); };
    stepValidateDisabled = ex3Validated;
  } else if (step === "ex4") {
    stepReset = resetExercise4;
    stepValidate = () => { setEx4Validated(true); setEx4Results(ex4Numbers.map((n, i) => parseInt(ex4Answers[i] ?? "", 10) === n)); };
    stepValidateDisabled = ex4Validated;
  } else if (step === "ex5") {
    stepReset = resetExercise5;
    stepValidate = () => { setEx5Validated(true); setEx5Results(ex5Numbers.map((n, i) => parseInt(ex5Answers[i] ?? "", 10) === n)); };
    stepValidateDisabled = ex5Validated;
  } else if (step === "ex6") {
    stepReset = resetExercise6;
    stepValidate = () => {
      setEx6Validated(true);
      setEx6Results(ex6Compositions.map((comp, i) => parseInt(ex6Answers[i] ?? "", 10) === comp.value));
    };
    stepValidateDisabled = ex6Validated;
  } else if (step === "ex7") {
    stepReset = resetExercise7;
    stepValidate = () => {
      const results: Record<string, boolean | null> = {};
      for (const [key, state] of Object.entries(ex7Grid)) {
        if (state === "fill") {
          const parts = key.split("-").map(Number);
          results[key] = parseInt(ex7Answers[key] ?? "", 10) === (parts[0]! + parts[1]!);
        }
      }
      setEx7Results(results);
      setEx7Validated(true);
    };
    stepValidateDisabled = ex7Validated;
  } else if (step === "ex8") {
    stepReset = resetExercise8;
    stepValidate = () => {
      const results: Record<string, boolean | null> = {};
      for (const [si, series] of ex8Series.entries()) {
        for (const i of series.blanks) {
          const ansKey = `${si}-${i}`;
          results[ansKey] = parseInt(ex8Answers[ansKey] ?? "", 10) === series.start + i;
        }
      }
      setEx8Results(results);
      setEx8Validated(true);
    };
    stepValidateDisabled = ex8Validated;
  } else if (step === "ex9") {
    stepReset = resetEx9;
    stepValidate = () => { if (!ex9Validated) setEx9Validated(true); };
    stepValidateDisabled = ex9Validated;
  } else if (step === "ex10") {
    stepReset = resetEx10;
    stepValidate = () => {
      const res = ex10Questions.map((q, qi) => parseInt(ex10Answers[qi] ?? "", 10) === q.h * 100 + q.d * 10 + q.u);
      setEx10Results(res);
      setEx10Validated(true);
    };
    stepValidateDisabled = ex10Validated;
  } else if (step === "ex11") {
    stepReset = resetEx11;
    stepValidate = () => {
      const res = ex11Questions.map((q, qi) => { const a = ex11Answers[qi] ?? {m:"",c:"",d:"",u:""}; return parseInt(a.m) === q.m*1000 && parseInt(a.c) === q.c*100 && parseInt(a.d) === q.d*10 && parseInt(a.u) === q.u; });
      setEx11Results(res);
      setEx11Validated(true);
    };
    stepValidateDisabled = ex11Validated;
  } else if (step === "ex12") {
    stepReset = resetEx12;
    stepValidate = () => {
      const res = ex12Questions.map((q, qi) => parseInt(ex12Answers[qi] ?? "", 10) === q.answer);
      setEx12Results(res);
      setEx12Validated(true);
    };
    stepValidateDisabled = ex12Validated;
  } else if (step === "ex13") {
    stepReset = resetEx13;
    stepValidate = () => {
      const res = ex13Questions.map((q, qi) => parseInt(ex13Answers[qi] ?? "", 10) === q.answer);
      setEx13Results(res);
      setEx13Validated(true);
    };
    stepValidateDisabled = ex13Validated;
  } else if (step === "ex14") {
    stepReset = resetEx14;
    stepValidate = () => { setEx14Validated(true); };
    stepValidateDisabled = ex14Validated;
  } else if (step === "ex15") {
    stepReset = resetEx15;
    stepValidate = () => { setEx15Validated(true); };
    stepValidateDisabled = ex15Validated;
  } else if (step === "ex16") {
    stepReset = resetEx16;
    stepValidate = () => {
      const res = ex16Questions.map((q, qi) => {
        const corners = [q.tl, q.tr, q.bl, q.br];
        return corners.every((val, idx) =>
          idx === q.givenIdx || parseInt(ex16Answers[qi]?.[idx] ?? "") === val
        );
      });
      setEx16Results(res);
      setEx16Validated(true);
    };
    stepValidateDisabled = ex16Validated;
  } else if (step === "ex17") {
    stepReset = resetEx17;
    stepValidate = () => {
      const res = ex17Lines.map((line, li) =>
        line.arrows.map((v, ai) => parseInt(ex17Answers[li]?.[ai] ?? "") === v)
      );
      setEx17Results(res);
      setEx17Validated(true);
    };
    stepValidateDisabled = ex17Validated;
  } else if (step === "ex18") {
    stepReset = resetEx18;
    stepValidate = () => {
      const res = ex18Lines.map((line, li) => line.arrows.map((v, ai) => parseInt(ex18Answers[li]?.[ai] ?? "") === v));
      setEx18Results(res);
      setEx18Validated(true);
    };
    stepValidateDisabled = ex18Validated;
  } else if (step === "ex19") {
    stepReset = resetEx19;
    stepValidate = () => { setEx19Validated(true); };
    stepValidateDisabled = ex19Validated;
  } else if (step === "ex20") {
    stepReset = resetEx20;
    stepValidate = () => { setEx20Validated(true); };
    stepValidateDisabled = ex20Validated;
  } else if (step === "ex21") {
    stepReset = resetEx21;
    stepValidate = () => { setEx21Validated(true); };
    stepValidateDisabled = ex21Validated;
  } else if (step === "ex22") {
    stepReset = resetEx22;
    stepValidate = () => { setEx22Validated(true); };
    stepValidateDisabled = ex22Validated;
  } else if (step === "ex23") {
    stepReset = resetEx23;
    stepValidate = () => { setEx23Validated(true); };
    stepValidateDisabled = ex23Validated;
  } else if (step === "ex24") {
    stepReset = resetEx24;
    stepValidate = () => { setEx24Validated(true); };
    stepValidateDisabled = ex24Validated;
  } else if (step === "ex25") {
    stepReset = resetEx25;
    stepValidate = () => { setEx25Validated(true); };
    stepValidateDisabled = ex25Validated;
  } else if (step === "ex26") {
    stepReset = resetEx26;
    stepValidate = () => { setEx26Validated(true); };
    stepValidateDisabled = ex26Validated;
  } else if (step === "ex27") {
    stepReset = resetEx27;
    stepValidate = () => { setEx27Validated(true); };
    stepValidateDisabled = ex27Validated;
  }

  return (
    <div className="pb-40">
      {/* Step progress bar — segments per step in current lesson */}
      <div className="flex gap-1 mb-2">
        {steps.map((s, i) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < stepIdx
                ? "bg-[var(--color-accent-alg)]"
                : i === stepIdx
                  ? "bg-[var(--color-accent-alg)] opacity-60"
                  : "bg-[var(--color-border-default)]"
            }`}
          />
        ))}
      </div>

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
            {lesson.theory.blocks ? (
              lesson.theory.blocks.map((block, i) => (
                <React.Fragment key={i}>
                  {RichBlock({ block, pivot, showPivot: !!showPivotTranslation, isRtl })}
                </React.Fragment>
              ))
            ) : theoryFr.paragraphs.map((p, i) => {
              const isA12 = lesson.submoduleId === "A1-2";
              const illustrationA12: Record<number, React.ReactNode> = isA12 ? {
                1: <div className="mt-2 flex justify-center gap-2"><SvgUnite s={20} /><SvgUnite s={20} /></div>,
                2: <div className="mt-2 flex justify-center gap-3"><SvgDizaine s={9} /><SvgDizaine s={9} /></div>,
                3: <div className="mt-2 flex justify-center gap-2"><SvgCentaine s={5} /><SvgCentaine s={5} /></div>,
                4: <div className="mt-2 flex justify-center gap-2"><SvgMillier s={4} d={9} /><SvgMillier s={4} d={9} /></div>,
              } : {};
              const isA15 = lesson.submoduleId === "A1-5";
              const illustrationA15: Record<number, React.ReactNode> = isA15 ? {
                3: (
                  <div className="mt-3 overflow-x-auto">
                    <svg viewBox="0 0 320 52" width="100%" style={{display:"block",maxWidth:380}}>
                      {/* line */}
                      <line x1="16" y1="34" x2="290" y2="34" stroke="#374151" strokeWidth="1.5"/>
                      <polygon points="290,34 282,29 282,39" fill="#374151"/>
                      {/* ticks + labels */}
                      {[2,5,8,11,14].map((v,idx)=>{
                        const x = 24 + idx * 62;
                        return <g key={v}><line x1={x} y1="28" x2={x} y2="40" stroke="#374151" strokeWidth="1.5"/><text x={x} y="50" textAnchor="middle" fontSize="10" fill="#374151" fontWeight={idx===4?"bold":"normal"}>{v}</text></g>;
                      })}
                      {/* +3 arcs */}
                      {[0,1,2,3].map(idx=>{
                        const x1 = 24 + idx * 62, x2 = 24 + (idx+1) * 62, mx = (x1+x2)/2;
                        return <g key={idx}>
                          <path d={`M${x1},28 Q${mx},10 ${x2},28`} fill="none" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr)"/>
                          <text x={mx} y="8" textAnchor="middle" fontSize="9" fill="#6366f1">+3</text>
                        </g>;
                      })}
                      <defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6366f1"/></marker></defs>
                    </svg>
                  </div>
                ),
                4: (
                  <div className="mt-3 overflow-x-auto">
                    <svg viewBox="0 0 320 52" width="100%" style={{display:"block",maxWidth:380}}>
                      <line x1="16" y1="34" x2="290" y2="34" stroke="#374151" strokeWidth="1.5"/>
                      <polygon points="16,34 24,29 24,39" fill="#374151"/>
                      {[100,90,80,70].map((v,idx)=>{
                        const x = 280 - idx * 72;
                        return <g key={v}><line x1={x} y1="28" x2={x} y2="40" stroke="#374151" strokeWidth="1.5"/><text x={x} y="50" textAnchor="middle" fontSize="10" fill="#374151" fontWeight={idx===3?"bold":"normal"}>{v}</text></g>;
                      })}
                      {[0,1,2].map(idx=>{
                        const x1 = 280 - idx * 72, x2 = 280 - (idx+1) * 72, mx = (x1+x2)/2;
                        return <g key={idx}>
                          <path d={`M${x1},28 Q${mx},10 ${x2},28`} fill="none" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arr2)"/>
                          <text x={mx} y="8" textAnchor="middle" fontSize="9" fill="#ef4444">−10</text>
                        </g>;
                      })}
                      <defs><marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef4444"/></marker></defs>
                    </svg>
                  </div>
                ),
              } : {};
              const isA13 = lesson.submoduleId === "A1-3";
              const illustrationA13: Record<number, React.ReactNode> = isA13 ? {
                0: (
                  <div className="mt-3 overflow-x-auto">
                    <svg viewBox="0 0 320 55" width="100%" style={{display:"block",maxWidth:360}}>
                      <line x1="20" y1="28" x2="295" y2="28" stroke="#374151" strokeWidth="2"/>
                      <polygon points="295,28 287,23 287,33" fill="#374151"/>
                      {[0,10,20].map((v,idx)=>{
                        const x = 20 + idx * 90;
                        return <g key={v}><line x1={x} y1="22" x2={x} y2="34" stroke="#374151" strokeWidth="1.5"/><text x={x} y="47" textAnchor="middle" fontSize="10" fill="#374151">{v}</text></g>;
                      })}
                      <text x="310" y="32" textAnchor="middle" fontSize="12" fill="#374151">…</text>
                    </svg>
                  </div>
                ),
                1: (
                  <div className="mt-3 rounded-[var(--radius-md)] bg-orange-50 px-4 py-2 text-sm dark:bg-orange-950/20">
                    <span className="italic text-[var(--color-text-secondary)]">Exemple : </span>
                    <span className="font-medium text-[var(--color-text-primary)]">350 &lt; 354 &lt; 360</span>
                  </div>
                ),
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
                  {illustrationA13[i] ?? null}
                  {illustrationA15[i] ?? null}
                </div>
              );
            })}
          </div>
          {lesson.submoduleId === "A1-2" && <PlaceValueIllustration />}
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
                <div key={i} className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
                  <AudioPlayButton src={nombreAudioSrc(num)} />
                  {ex4Validated && result !== null ? (
                    <div className={`flex h-10 flex-1 items-center gap-2 rounded-[var(--radius-md)] border bg-[var(--color-bg-primary)] px-3 ${result ? "border-blue-400" : "border-amber-400"}`}>
                      {result ? (
                        <span className="text-sm font-medium text-[var(--color-text-primary)]">{ex4Answers[i]}</span>
                      ) : (
                        <>
                          <span className="text-sm text-amber-600 line-through">{ex4Answers[i]}</span>
                          <span className="text-sm font-medium text-[var(--color-text-primary)]">{num}</span>
                        </>
                      )}
                    </div>
                  ) : (
                    <AppInput label="" id={`ex4-${i}`} value={ex4Answers[i] ?? ""}
                      onChange={(e) => { const n = [...ex4Answers]; n[i] = e.target.value.replace(/[^0-9]/g, ""); setEx4Answers(n); }}
                      placeholder="chiffre…" autoComplete="off" inputMode="numeric" className="!bg-blue-50 dark:!bg-blue-950/30" />
                  )}
                </div>
              );
            })}
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
                <div key={i} className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
                  <AudioPlayButton src={nombreAudioSrc(num)} />
                  {ex5Validated && result !== null ? (
                    <div className={`flex h-10 flex-1 items-center gap-2 rounded-[var(--radius-md)] border bg-[var(--color-bg-primary)] px-3 ${result ? "border-blue-400" : "border-amber-400"}`}>
                      {result ? (
                        <span className="text-sm font-medium text-[var(--color-text-primary)]">{ex5Answers[i]}</span>
                      ) : (
                        <>
                          <span className="text-sm text-amber-600 line-through">{ex5Answers[i]}</span>
                          <span className="text-sm font-medium text-[var(--color-text-primary)]">{num}</span>
                        </>
                      )}
                    </div>
                  ) : (
                    <AppInput label="" id={`ex5-${i}`} value={ex5Answers[i] ?? ""}
                      onChange={(e) => { const n = [...ex5Answers]; n[i] = e.target.value.replace(/[^0-9]/g, ""); setEx5Answers(n); }}
                      placeholder="chiffre…" autoComplete="off" inputMode="numeric" className="!bg-blue-50 dark:!bg-blue-950/30" />
                  )}
                </div>
              );
            })}
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
              <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Dictée — nombres spéciaux</h2>
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
                <div key={i} className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
                  <AudioPlayButton src={comp.clips[0]!} />
                  {ex6Validated && result !== null ? (
                    <div className={`flex h-10 flex-1 items-center gap-2 rounded-[var(--radius-md)] border bg-[var(--color-bg-primary)] px-3 ${result ? "border-blue-400" : "border-amber-400"}`}>
                      {result ? (
                        <span className="text-sm font-medium text-[var(--color-text-primary)]">{ex6Answers[i]}</span>
                      ) : (
                        <>
                          <span className="text-sm text-amber-600 line-through">{ex6Answers[i]}</span>
                          <span className="text-sm font-medium text-[var(--color-text-primary)]">{comp.value}</span>
                        </>
                      )}
                    </div>
                  ) : (
                    <AppInput label="" id={`ex6-${i}`} value={ex6Answers[i] ?? ""}
                      onChange={(e) => { const n = [...ex6Answers]; n[i] = e.target.value.replace(/[^0-9]/g, ""); setEx6Answers(n); }}
                      placeholder="chiffre…" autoComplete="off" inputMode="numeric" className="!bg-blue-50 dark:!bg-blue-950/30" />
                  )}
                </div>
              );
            })}
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
                            <td key={u} className={`h-[41px] w-[41px] p-0 text-center ${result ? "ring-1 ring-inset ring-green-400 bg-[var(--color-bg-primary)]" : "ring-1 ring-inset ring-red-400 bg-[var(--color-bg-primary)]"}`}>
                              <div className="flex h-[41px] w-[41px] items-center justify-center">
                                {result
                                  ? <span className="text-sm font-medium tabular-nums text-[var(--color-text-primary)]">{ex7Answers[key] ?? ""}</span>
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
                              onChange={(e) => setEx7Answers((prev) => ({ ...prev, [key]: e.target.value.replace(/[^0-9]/g, "") }))}
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
                            <div key={i} className={`flex h-10 min-w-0 flex-1 items-center justify-center rounded-[var(--radius-md)] border bg-[var(--color-bg-primary)] text-sm font-medium tabular-nums text-[var(--color-text-primary)] ${result ? "border-blue-400" : "border-amber-400"}`}>
                              {result ? ex8Answers[ansKey] : num}
                            </div>
                          );
                        }
                        return (
                          <input
                            key={i} type="text" inputMode="numeric"
                            value={ex8Answers[ansKey] ?? ""}
                            onChange={(e) => setEx8Answers((prev) => ({ ...prev, [ansKey]: e.target.value.replace(/[^0-9]/g, "") }))}
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
              const _correct = ex9Validated ? sel === value : null;
              return (
                <div key={i} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] transition-colors">
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
                          className={`w-16 rounded border py-1.5 text-sm font-normal text-[var(--color-text-primary)] transition-colors ${isCorrect ? "border-blue-400 bg-[var(--color-bg-primary)]" : isWrong ? "border-amber-400 bg-[var(--color-bg-primary)] line-through decoration-amber-500" : isSelected ? "border-teal-500 bg-teal-50 dark:bg-teal-950/30" : "border-zinc-300 hover:border-teal-400 dark:border-zinc-600"}`}>
                          {c}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
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
                <div key={qi} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
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
                      onChange={e => { if (!ex10Validated) { const n = [...ex10Answers]; n[qi] = e.target.value.replace(/[^0-9]/g, ""); setEx10Answers(n); } }}
                      placeholder="Total…" inputMode="numeric" autoComplete="off" readOnly={ex10Validated}
                      className={
                        ex10Validated && result === true ? "!border-blue-400" :
                        ex10Validated && result === false ? "!border-amber-400" :
                        "!bg-blue-50 dark:!bg-blue-950/30"
                      } />
                  </div>
                </div>
              );
            })}
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
              const result = ex11Results[qi] ?? null;
              return (
                <div key={qi} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
                  <div className="relative overflow-hidden rounded" style={{width:"100%", height:q.canvasH}}>
                    {q.positions.map((pos, pi) => (
                      <div key={pi} style={{position:"absolute",left:pos.x,top:pos.y}}>
                        {pos.kind === "m" ? <SvgMillier s={4} d={9} /> : pos.kind === "h" ? <SvgCentaine s={5} /> : pos.kind === "d" ? <SvgDizaine s={9} /> : <SvgUnite s={16} />}
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex w-full items-center gap-1 text-sm font-medium text-[var(--color-text-primary)]">
                    <span className="shrink-0">=</span>
                    {(() => {
                      const ans = ex11Answers[qi] ?? {m:"",c:"",d:"",u:""};
                      const inputCls = "w-0 flex-1 rounded border border-[var(--color-border-default)] bg-blue-50 px-1 py-1 text-center text-sm outline-none dark:bg-blue-950/30 focus-visible:border-[var(--color-accent-alg)] focus-visible:ring-[3px] focus-visible:ring-[color-mix(in_oklch,var(--color-accent-alg)_22%,transparent)]";
                      if (ex11Validated && result !== null) {
                        const mOk = parseInt(ans.m) === q.m * 1000;
                        const cOk = parseInt(ans.c) === q.c * 100;
                        const dOk = parseInt(ans.d) === q.d * 10;
                        const uOk = parseInt(ans.u) === q.u;
                        return (
                          <>
                            <span className={`flex-1 rounded border bg-[var(--color-bg-primary)] px-1 py-1 text-center text-sm text-[var(--color-text-primary)] ${mOk ? "border-blue-400" : "border-amber-400"}`}>{mOk ? ans.m : String(q.m * 1000)}</span>
                            <span className="shrink-0 text-[var(--color-text-secondary)]">+</span>
                            <span className={`flex-1 rounded border bg-[var(--color-bg-primary)] px-1 py-1 text-center text-sm text-[var(--color-text-primary)] ${cOk ? "border-blue-400" : "border-amber-400"}`}>{cOk ? ans.c : String(q.c * 100)}</span>
                            <span className="shrink-0 text-[var(--color-text-secondary)]">+</span>
                            <span className={`flex-1 rounded border bg-[var(--color-bg-primary)] px-1 py-1 text-center text-sm text-[var(--color-text-primary)] ${dOk ? "border-blue-400" : "border-amber-400"}`}>{dOk ? ans.d : String(q.d * 10)}</span>
                            <span className="shrink-0 text-[var(--color-text-secondary)]">+</span>
                            <span className={`flex-1 rounded border bg-[var(--color-bg-primary)] px-1 py-1 text-center text-sm text-[var(--color-text-primary)] ${uOk ? "border-blue-400" : "border-amber-400"}`}>{uOk ? ans.u : String(q.u)}</span>
                          </>
                        );
                      }
                      return (
                        <>
                          <input className={inputCls} placeholder="M×1000" inputMode="numeric" autoComplete="off" value={ans.m}
                            onChange={e => { const n = ex11Answers.map((a, i) => i === qi ? {...a, m: e.target.value.replace(/[^0-9]/g, "")} : a); setEx11Answers(n); }} />
                          <span className="shrink-0 text-[var(--color-text-secondary)]">+</span>
                          <input className={inputCls} placeholder="C×100" inputMode="numeric" autoComplete="off" value={ans.c}
                            onChange={e => { const n = ex11Answers.map((a, i) => i === qi ? {...a, c: e.target.value.replace(/[^0-9]/g, "")} : a); setEx11Answers(n); }} />
                          <span className="shrink-0 text-[var(--color-text-secondary)]">+</span>
                          <input className={inputCls} placeholder="D×10" inputMode="numeric" autoComplete="off" value={ans.d}
                            onChange={e => { const n = ex11Answers.map((a, i) => i === qi ? {...a, d: e.target.value.replace(/[^0-9]/g, "")} : a); setEx11Answers(n); }} />
                          <span className="shrink-0 text-[var(--color-text-secondary)]">+</span>
                          <input className={inputCls} placeholder="U×1" inputMode="numeric" autoComplete="off" value={ans.u}
                            onChange={e => { const n = ex11Answers.map((a, i) => i === qi ? {...a, u: e.target.value.replace(/[^0-9]/g, "")} : a); setEx11Answers(n); }} />
                        </>
                      );
                    })()}
                  </div>
                </div>
              );
            })}
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
                <div key={qi} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
                  <div className="flex items-center justify-center py-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={q.src} alt="assemblage de cubes" className="max-h-72 w-auto object-contain" />
                  </div>
                  <div className="mt-2">
                    <AppInput label="" id={`ex12-${qi}`}
                      value={ex12Validated && result === false ? String(q.answer) : (ex12Answers[qi] ?? "")}
                      onChange={e => { if (!ex12Validated) { const n = [...ex12Answers]; n[qi] = e.target.value.replace(/[^0-9]/g, ""); setEx12Answers(n); } }}
                      placeholder="Cubes…" inputMode="numeric" autoComplete="off" readOnly={ex12Validated}
                      className={
                        ex12Validated && result === true ? "!border-blue-400" :
                        ex12Validated && result === false ? "!border-amber-400" :
                        "!bg-blue-50 dark:!bg-blue-950/30"
                      } />
                  </div>
                </div>
              );
            })}
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
                <div key={qi} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
                  <div className="flex items-center justify-center py-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={q.src} alt="assemblage de cubes" className="max-h-72 w-auto object-contain" />
                  </div>
                  <div className="mt-2">
                    <AppInput label="" id={`ex13-${qi}`}
                      value={ex13Validated && result === false ? String(q.answer) : (ex13Answers[qi] ?? "")}
                      onChange={e => { if (!ex13Validated) { const n = [...ex13Answers]; n[qi] = e.target.value.replace(/[^0-9]/g, ""); setEx13Answers(n); } }}
                      placeholder="Cubes…" inputMode="numeric" autoComplete="off" readOnly={ex13Validated}
                      className={
                        ex13Validated && result === true ? "!border-blue-400" :
                        ex13Validated && result === false ? "!border-amber-400" :
                        "!bg-blue-50 dark:!bg-blue-950/30"
                      } />
                  </div>
                </div>
              );
            })}
          </div>
        </AppCard>
      )}

      {/* ── Exercice 14 — Décomposer un nombre ─────────────────────────────── */}
      {step === "ex14" && (
        <AppCard variant="elevated" header={
          <div>
            <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 14</p>
            <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Décomposez le nombre</h2>
          </div>
        }>
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Décomposez le nombre en milliers, centaines, dizaines et unités.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex14[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{CONSIGNE_PIVOT.ex14[pivot]}</p>
            ) : null}
          </div>
          <div className="space-y-4">
            {ex14Numbers.map((n, qi) => {
              const m = Math.floor(n / 1000);
              const c = Math.floor((n % 1000) / 100);
              const d = Math.floor((n % 100) / 10);
              const u = n % 10;
              const hasM = m > 0;
              const ans = ex14Ans[qi] ?? {m:"",c:"",d:"",u:""};
              const mOk = ex14Validated ? (ans.m === "" ? 0 : parseInt(ans.m)) === m * 1000 : null;
              const cOk = ex14Validated ? (ans.c === "" ? 0 : parseInt(ans.c)) === c * 100 : null;
              const dOk = ex14Validated ? (ans.d === "" ? 0 : parseInt(ans.d)) === d * 10 : null;
              const uOk = ex14Validated ? (ans.u === "" ? 0 : parseInt(ans.u)) === u : null;
              const _fieldCls = "w-0 flex-1 rounded border bg-blue-50 px-1 py-1.5 text-center text-sm outline-none dark:bg-blue-950/30 focus-visible:border-[var(--color-accent-alg)]";
              const valCls = (ok: boolean | null) => ok === null ? "" : ok ? "border-blue-400 bg-[var(--color-bg-primary)]" : "border-amber-400 bg-[var(--color-bg-primary)]";
              const setAns = (patch: Partial<{m:string;c:string;d:string;u:string}>) =>
                setEx14Ans(prev => prev.map((a, i) => i === qi ? {...a, ...patch} : a));
              return (
                <div key={qi} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
                  <div className="mb-3 flex justify-center">
                    <span className="text-2xl font-bold tabular-nums text-[var(--color-text-primary)]">
                      {n.toLocaleString("fr-CH")}
                    </span>
                  </div>
                  <div className="flex items-start gap-1 text-sm font-medium text-[var(--color-text-primary)]">
                    <span className="mt-[7px] shrink-0">=</span>
                    {hasM && (
                      <>
                        <div className="flex flex-1 flex-col items-center gap-0.5">
                          {ex14Validated ? (
                            <span className={`w-full rounded border px-1 py-1.5 text-center text-sm text-[var(--color-text-primary)] ${valCls(mOk)}`}>
                              {(mOk && ans.m) ? ans.m : String(m * 1000)}
                            </span>
                          ) : (
                            <input className={`w-full rounded border bg-blue-50 px-1 py-1.5 text-center text-sm outline-none dark:bg-blue-950/30 focus-visible:border-[var(--color-accent-alg)] border-[var(--color-border-default)]`} inputMode="numeric" autoComplete="off" value={ans.m}
                              onChange={e => setAns({m: e.target.value.replace(/[^0-9]/g, "")})} />
                          )}
                          <span className="text-xs text-[var(--color-text-secondary)]">millier</span>
                        </div>
                        <span className="mt-[7px] shrink-0 text-[var(--color-text-secondary)]">+</span>
                      </>
                    )}
                    <div className="flex flex-1 flex-col items-center gap-0.5">
                      {ex14Validated ? (
                        <span className={`w-full rounded border px-1 py-1.5 text-center text-sm text-[var(--color-text-primary)] ${valCls(cOk)}`}>
                          {(cOk && ans.c) ? ans.c : String(c * 100)}
                        </span>
                      ) : (
                        <input className={`w-full rounded border bg-blue-50 px-1 py-1.5 text-center text-sm outline-none dark:bg-blue-950/30 focus-visible:border-[var(--color-accent-alg)] border-[var(--color-border-default)]`} inputMode="numeric" autoComplete="off" value={ans.c}
                          onChange={e => setAns({c: e.target.value.replace(/[^0-9]/g, "")})} />
                      )}
                      <span className="text-xs text-[var(--color-text-secondary)]">centaine</span>
                    </div>
                    <span className="mt-[7px] shrink-0 text-[var(--color-text-secondary)]">+</span>
                    <div className="flex flex-1 flex-col items-center gap-0.5">
                      {ex14Validated ? (
                        <span className={`w-full rounded border px-1 py-1.5 text-center text-sm text-[var(--color-text-primary)] ${valCls(dOk)}`}>
                          {(dOk && ans.d) ? ans.d : String(d * 10)}
                        </span>
                      ) : (
                        <input className={`w-full rounded border bg-blue-50 px-1 py-1.5 text-center text-sm outline-none dark:bg-blue-950/30 focus-visible:border-[var(--color-accent-alg)] border-[var(--color-border-default)]`} inputMode="numeric" autoComplete="off" value={ans.d}
                          onChange={e => setAns({d: e.target.value.replace(/[^0-9]/g, "")})} />
                      )}
                      <span className="text-xs text-[var(--color-text-secondary)]">dizaine</span>
                    </div>
                    <span className="mt-[7px] shrink-0 text-[var(--color-text-secondary)]">+</span>
                    <div className="flex flex-1 flex-col items-center gap-0.5">
                      {ex14Validated ? (
                        <span className={`w-full rounded border px-1 py-1.5 text-center text-sm text-[var(--color-text-primary)] ${valCls(uOk)}`}>
                          {(uOk && ans.u) ? ans.u : String(u)}
                        </span>
                      ) : (
                        <input className={`w-full rounded border bg-blue-50 px-1 py-1.5 text-center text-sm outline-none dark:bg-blue-950/30 focus-visible:border-[var(--color-accent-alg)] border-[var(--color-border-default)]`} inputMode="numeric" autoComplete="off" value={ans.u}
                          onChange={e => setAns({u: e.target.value.replace(/[^0-9]/g, "")})} />
                      )}
                      <span className="text-xs text-[var(--color-text-secondary)]">unité</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AppCard>
      )}

      {/* ── Exercice 15 — Appariement d'étiquettes ──────────────────────────── */}
      {step === "ex15" && (
        <AppCard variant="elevated" header={
          <div>
            <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 15</p>
            <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Choisissez le(s) étiquette(s) avec le même nombre</h2>
          </div>
        }>
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Sélectionnez toutes les étiquettes qui représentent le même nombre que l&apos;étiquette rose.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex15[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{CONSIGNE_PIVOT.ex15[pivot]}</p>
            ) : null}
          </div>
          <div className="space-y-5">
            {ex15Questions.map((q, qi) => (
              <div key={qi} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
                <div className="mb-3 flex justify-center">
                  <span className="text-2xl font-bold tabular-nums text-[var(--color-text-primary)]">
                    {q.refDisplay}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {q.tags.map((tag, ti) => {
                    const isSelected = ex15Selected[qi]?.[ti] ?? false;
                    let cls = "border-zinc-300 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] dark:border-zinc-600";
                    if (ex15Validated) {
                      if (tag.correct) cls = "border-blue-400 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]";
                      else if (isSelected) cls = "border-amber-400 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]";
                    } else if (isSelected) {
                      cls = "border-zinc-500 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] dark:border-zinc-400";
                    }
                    return (
                      <button key={ti} type="button"
                        onClick={() => {
                          if (ex15Validated) return;
                          setEx15Selected(prev => prev.map((row, ri) =>
                            ri === qi ? row.map((v, vi) => vi === ti ? !v : v) : row
                          ));
                        }}
                        className={`flex items-center gap-2 rounded-[var(--radius-md)] border p-2.5 text-sm text-left transition-colors ${cls}`}>
                        <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${isSelected ? "border-current bg-current" : "border-current/40"}`}>
                          {isSelected && <span className="h-2 w-2 rounded-full bg-white" />}
                        </span>
                        <span className="font-normal">{tag.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </AppCard>
      )}

      {/* ── Exercice 16 — Chaîne de flèches ─────────────────────────────────── */}
      {step === "ex16" && (
        <AppCard variant="elevated" header={
          <div>
            <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 16</p>
            <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Complétez les cases</h2>
          </div>
        }>
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Suivez les flèches pour trouver les nombres manquants.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex16[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{CONSIGNE_PIVOT.ex16[pivot]}</p>
            ) : null}
          </div>
          <div className="mb-3 flex flex-wrap gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5"><span className="inline-block h-3 w-3 rounded-full bg-blue-500"/><span className="text-blue-700 dark:text-blue-300">+1 millier</span></span>
            <span className="flex items-center gap-1.5"><span className="inline-block h-3 w-3 rounded-full bg-red-500"/><span className="text-red-700 dark:text-red-300">+1 centaine</span></span>
            <span className="flex items-center gap-1.5"><span className="inline-block h-3 w-3 rounded-full bg-emerald-500"/><span className="text-emerald-700 dark:text-emerald-300">+1 dizaine</span></span>
          </div>
          <div className="space-y-6">
            {ex16Questions.map((q, qi) => {
              const corners = [q.tl, q.tr, q.bl, q.br];
              const CORNER_POS = [{r:0,c:0},{r:0,c:2},{r:2,c:0},{r:2,c:2}];
              const cornerCell = (idx: number) => {
                const val = corners[idx]!;
                const isGiven = idx === q.givenIdx;
                const ansKey = ["tl","tr","bl","br"][idx]!;
                if (isGiven) {
                  return (
                    <div className="flex h-10 w-full items-center justify-center rounded-[var(--radius-md)] border border-zinc-300 bg-white text-sm font-bold tabular-nums text-[var(--color-text-primary)] dark:border-zinc-600 dark:bg-zinc-900">
                      {val.toLocaleString("fr-CH")}
                    </div>
                  );
                }
                const ans = ex16Answers[qi]?.[idx] ?? "";
                const isCorrect = ex16Validated ? parseInt(ans) === val : null;
                return ex16Validated ? (
                  <div className={`flex h-10 w-full items-center justify-center rounded-[var(--radius-md)] border bg-[var(--color-bg-primary)] text-sm font-bold tabular-nums text-[var(--color-text-primary)] ${isCorrect ? "border-blue-400" : "border-amber-400"}`}>
                    {isCorrect ? ans : val.toLocaleString("fr-CH")}
                  </div>
                ) : (
                  <input type="text" inputMode="numeric" value={ans}
                    onChange={e => setEx16Answers(prev => prev.map((row, ri) =>
                      ri === qi ? row.map((v, vi) => vi === idx ? e.target.value.replace(/[^0-9]/g, "") : v) : row
                    ))}
                    className="h-10 w-full rounded-[var(--radius-md)] border border-zinc-300 bg-blue-50 text-center text-sm font-bold tabular-nums outline-none focus:border-[var(--color-accent-alg)] dark:border-zinc-600 dark:bg-blue-950/20"
                    aria-label={ansKey}
                  />
                );
              };
              const cells: React.ReactNode[] = [];
              for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                  const ci = CORNER_POS.findIndex(p => p.r === r && p.c === c);
                  if (ci !== -1) {
                    cells.push(<div key={`${r}${c}`}>{cornerCell(ci)}</div>);
                  } else {
                    const arrow = q.arrows.find(a => a.row === r && a.col === c);
                    cells.push(
                      <div key={`${r}${c}`} className={arrow ? `flex items-center justify-center text-2xl ${arrow.colorCls}` : undefined}>
                        {arrow && (
                          <span style={c === 1 ? { display: "inline-block", transform: "scaleX(2)" } : undefined}>
                            {arrow.symbol}
                          </span>
                        )}
                      </div>
                    );
                  }
                }
              }
              return (
                <div key={qi} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
                  <div className="grid grid-cols-3 items-center gap-2">
                    {cells}
                  </div>
                </div>
              );
            })}
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
                {evalStarted && !evalSubmitted && evalTimeLeft !== null && (
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
            {!evalStarted && !evalSubmitted && (
              <div className="flex flex-col items-center justify-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] py-10">
                <p className="text-4xl font-bold tabular-nums text-[var(--color-accent-alg)]">5:00</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Temps disponible pour compléter l&apos;évaluation</p>
                <p className="text-xs text-[var(--color-text-secondary)]">Les exercices apparaîtront au démarrage du chronomètre.</p>
              </div>
            )}

            {/* ── Exercices A1.2 (visibles après Commencer ou si déjà validé) ── */}
            {(evalStarted || evalSubmitted) && lesson.submoduleId === "A1-2" && (() => {
              const inputCls = "w-0 flex-1 rounded border border-[var(--color-border-default)] bg-blue-50 px-1 py-1 text-center text-sm outline-none dark:bg-blue-950/30 focus-visible:border-[var(--color-accent-alg)] focus-visible:ring-[3px] focus-visible:ring-[color-mix(in_oklch,var(--color-accent-alg)_22%,transparent)]";
              const q9val  = a12EvalQ9.tens * 10 + a12EvalQ9.units;
              const q10val = a12EvalQ10.h * 100 + a12EvalQ10.d * 10 + a12EvalQ10.u;
              const _r9  = evalSubmitted ? (evalResults["q9"] ?? null) : null;
              const r10 = evalSubmitted ? (evalResults["q10"] ?? null) : null;
              const r11 = evalSubmitted ? (evalResults["q11"] ?? null) : null;
              const r12 = evalSubmitted ? (evalResults["q12"] ?? null) : null;
              return (
                <div className="space-y-4">
                  {/* Q1 — Ex9 style MCQ */}
                  <div className="pb-1 pt-2"><p className="text-sm font-semibold text-[var(--color-text-primary)]">1. Choisissez le nombre représenté par les blocs. <span className="font-normal text-[var(--color-text-secondary)]">(1 pt)</span></p></div>
                  <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
                    <div className="flex min-h-24 w-full flex-col items-center justify-center gap-1 px-3 py-2">
                      {a12EvalQ9.tens > 0 && <div className="flex w-full flex-wrap justify-center gap-0.5">{Array.from({length:a12EvalQ9.tens},(_,ti)=><SvgDizaineH key={ti} s={8} />)}</div>}
                      {a12EvalQ9.units > 0 && <div className="flex w-full flex-wrap justify-center gap-0.5">{Array.from({length:a12EvalQ9.units},(_,ui)=><SvgUnite key={ui} s={11} />)}</div>}
                    </div>
                    <div className="flex justify-center gap-2 px-3 py-2">
                      {a12EvalQ9.choices.map(c => {
                        const isSelected = a12EvalQ9Sel === c;
                        const isCorrect  = evalSubmitted && c === q9val;
                        const isWrong    = evalSubmitted && isSelected && c !== q9val;
                        return (
                          <button key={c} type="button"
                            onClick={() => { if (!evalSubmitted) setA12EvalQ9Sel(c); }}
                            className={`w-16 rounded border py-1.5 text-sm font-normal text-[var(--color-text-primary)] transition-colors ${isCorrect ? "border-blue-400 bg-[var(--color-bg-primary)]" : isWrong ? "border-amber-400 bg-[var(--color-bg-primary)] line-through decoration-amber-500" : isSelected ? "border-teal-500 bg-teal-50 dark:bg-teal-950/30" : "border-zinc-300 hover:border-teal-400 dark:border-zinc-600"}`}>
                            {c}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Q2 — Ex10 style SVG + input */}
                  <div className="pb-1 pt-2"><p className="text-sm font-semibold text-[var(--color-text-primary)]">2. Comptez tous les blocs et écrivez le nombre total. <span className="font-normal text-[var(--color-text-secondary)]">(1 pt)</span></p></div>
                  <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
                    <div className="relative overflow-hidden rounded" style={{width:"100%",height:a12EvalQ10.canvasH}}>
                      {a12EvalQ10.positions.map((pos,pi)=>(
                        <div key={pi} style={{position:"absolute",left:pos.x,top:pos.y}}>
                          {pos.kind==="h"?<SvgCentaine s={5}/>:pos.kind==="d"?<SvgDizaine s={8}/>:<SvgUnite s={14}/>}
                        </div>
                      ))}
                    </div>
                    <div className="mt-2">
                      <AppInput label="" id="a12eval-q10"
                        value={evalSubmitted && r10 === false ? String(q10val) : a12EvalQ10Ans}
                        onChange={e => { if (!evalSubmitted) setA12EvalQ10Ans(e.target.value.replace(/[^0-9]/g, "")); }}
                        placeholder="Total…" inputMode="numeric" autoComplete="off" readOnly={evalSubmitted}
                        className={r10 === true ? "!border-blue-400" : r10 === false ? "!border-amber-400" : "!bg-blue-50 dark:!bg-blue-950/30"} />
                    </div>
                  </div>

                  {/* Q3 — Ex11 style SVG + 4 fields */}
                  <div className="pb-1 pt-2"><p className="text-sm font-semibold text-[var(--color-text-primary)]">3. Écrivez combien il y a de milliers, centaines, dizaines, unités. <span className="font-normal text-[var(--color-text-secondary)]">(1 pt)</span></p></div>
                  <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
                    <div className="relative overflow-hidden rounded" style={{width:"100%",height:a12EvalQ11.canvasH}}>
                      {a12EvalQ11.positions.map((pos,pi)=>(
                        <div key={pi} style={{position:"absolute",left:pos.x,top:pos.y}}>
                          {pos.kind==="m"?<SvgMillier s={4} d={9}/>:pos.kind==="h"?<SvgCentaine s={5}/>:pos.kind==="d"?<SvgDizaine s={9}/>:<SvgUnite s={16}/>}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex w-full items-center gap-1 text-sm font-medium">
                      <span className="shrink-0">=</span>
                      {evalSubmitted && r11 !== null ? (() => {
                        const mOk = parseInt(a12EvalQ11Ans.m) === a12EvalQ11.m * 1000;
                        const cOk = parseInt(a12EvalQ11Ans.c) === a12EvalQ11.c * 100;
                        const dOk = parseInt(a12EvalQ11Ans.d) === a12EvalQ11.d * 10;
                        const uOk = parseInt(a12EvalQ11Ans.u) === a12EvalQ11.u;
                        return (<>
                          <span className={`flex-1 rounded border bg-[var(--color-bg-primary)] px-1 py-1 text-center text-[var(--color-text-primary)] ${mOk?"border-blue-400":"border-amber-400"}`}>{mOk?a12EvalQ11Ans.m:String(a12EvalQ11.m*1000)}</span>
                          <span className="shrink-0 text-[var(--color-text-secondary)]">+</span>
                          <span className={`flex-1 rounded border bg-[var(--color-bg-primary)] px-1 py-1 text-center text-[var(--color-text-primary)] ${cOk?"border-blue-400":"border-amber-400"}`}>{cOk?a12EvalQ11Ans.c:String(a12EvalQ11.c*100)}</span>
                          <span className="shrink-0 text-[var(--color-text-secondary)]">+</span>
                          <span className={`flex-1 rounded border bg-[var(--color-bg-primary)] px-1 py-1 text-center text-[var(--color-text-primary)] ${dOk?"border-blue-400":"border-amber-400"}`}>{dOk?a12EvalQ11Ans.d:String(a12EvalQ11.d*10)}</span>
                          <span className="shrink-0 text-[var(--color-text-secondary)]">+</span>
                          <span className={`flex-1 rounded border bg-[var(--color-bg-primary)] px-1 py-1 text-center text-[var(--color-text-primary)] ${uOk?"border-blue-400":"border-amber-400"}`}>{uOk?a12EvalQ11Ans.u:String(a12EvalQ11.u)}</span>
                        </>);
                      })() : (<>
                        <input className={inputCls} placeholder="M×1000" inputMode="numeric" autoComplete="off" value={a12EvalQ11Ans.m} onChange={e=>setA12EvalQ11Ans(p=>({...p,m:e.target.value.replace(/[^0-9]/g,"")}))} />
                        <span className="shrink-0 text-[var(--color-text-secondary)]">+</span>
                        <input className={inputCls} placeholder="C×100"  inputMode="numeric" autoComplete="off" value={a12EvalQ11Ans.c} onChange={e=>setA12EvalQ11Ans(p=>({...p,c:e.target.value.replace(/[^0-9]/g,"")}))} />
                        <span className="shrink-0 text-[var(--color-text-secondary)]">+</span>
                        <input className={inputCls} placeholder="D×10"   inputMode="numeric" autoComplete="off" value={a12EvalQ11Ans.d} onChange={e=>setA12EvalQ11Ans(p=>({...p,d:e.target.value.replace(/[^0-9]/g,"")}))} />
                        <span className="shrink-0 text-[var(--color-text-secondary)]">+</span>
                        <input className={inputCls} placeholder="U×1"    inputMode="numeric" autoComplete="off" value={a12EvalQ11Ans.u} onChange={e=>setA12EvalQ11Ans(p=>({...p,u:e.target.value.replace(/[^0-9]/g,"")}))} />
                      </>)}
                    </div>
                  </div>

                  {/* Q4 — Cubes image (decompose or assemble, random) */}
                  <div className="pb-1 pt-2"><p className="text-sm font-semibold text-[var(--color-text-primary)]">4. Comptez combien il y a de cubes. <span className="font-normal text-[var(--color-text-secondary)]">(1 pt)</span></p></div>
                  <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
                    <div className="flex items-center justify-center py-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={a12EvalQ12.src} alt="cubes" className="max-h-72 w-auto object-contain" />
                    </div>
                    <div className="mt-2">
                      <AppInput label="" id="a12eval-q12"
                        value={evalSubmitted && r12 === false ? String(a12EvalQ12.answer) : a12EvalQ12Ans}
                        onChange={e => { if (!evalSubmitted) setA12EvalQ12Ans(e.target.value.replace(/[^0-9]/g, "")); }}
                        placeholder="Cubes…" inputMode="numeric" autoComplete="off" readOnly={evalSubmitted}
                        className={r12 === true ? "!border-blue-400" : r12 === false ? "!border-amber-400" : "!bg-blue-50 dark:!bg-blue-950/30"} />
                    </div>
                  </div>

                  {/* Q5a+Q5b — Ex14 decompose (2 numbers, 1 pt each) */}
                  {a12EvalEx14Nums.map((n, qi) => {
                    const m = Math.floor(n / 1000), c = Math.floor((n % 1000) / 100), d = Math.floor((n % 100) / 10), u = n % 10;
                    const hasM = m > 0;
                    const a = a12EvalEx14Ans[qi] ?? {m:"",c:"",d:"",u:""};
                    const r14q = evalSubmitted ? (evalResults[`q14_${qi}`] ?? null) : null;
                    const mOk = evalSubmitted ? (a.m === "" ? 0 : parseInt(a.m)) === m * 1000 : null;
                    const cOk = evalSubmitted ? (a.c === "" ? 0 : parseInt(a.c)) === c * 100 : null;
                    const dOk = evalSubmitted ? (a.d === "" ? 0 : parseInt(a.d)) === d * 10 : null;
                    const uOk = evalSubmitted ? (a.u === "" ? 0 : parseInt(a.u)) === u : null;
                    const valCls14 = (ok: boolean|null) => ok === null ? "" : ok ? "border-blue-400 bg-[var(--color-bg-primary)]" : "border-amber-400 bg-[var(--color-bg-primary)]";
                    const setAns14 = (patch: Partial<{m:string;c:string;d:string;u:string}>) =>
                      setA12EvalEx14Ans(prev => prev.map((row, i) => i === qi ? {...row, ...patch} : row));
                    return (
                      <div key={qi}>
                        <div className="pb-1 pt-2"><p className="text-sm font-semibold text-[var(--color-text-primary)]">{5 + qi}. Décomposez le nombre. <span className="font-normal text-[var(--color-text-secondary)]">(1 pt)</span></p></div>
                        <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4 transition-colors">
                          <div className="mb-3 flex justify-center">
                            <span className={`text-2xl font-bold tabular-nums ${r14q === true ? "text-green-600" : r14q === false ? "text-amber-600" : "text-[var(--color-text-primary)]"}`}>{n.toLocaleString("fr-CH")}</span>
                          </div>
                          <div className="flex items-start gap-1 text-sm font-medium text-[var(--color-text-primary)]">
                            <span className="mt-[7px] shrink-0">=</span>
                            {hasM && (<>
                              <div className="flex flex-1 flex-col items-center gap-0.5">
                                {evalSubmitted ? (
                                  <span className={`w-full rounded border px-1 py-1.5 text-center text-sm text-[var(--color-text-primary)] ${valCls14(mOk)}`}>{(mOk && a.m) ? a.m : String(m * 1000)}</span>
                                ) : (
                                  <input className="w-full rounded border border-[var(--color-border-default)] bg-blue-50 px-1 py-1.5 text-center text-sm outline-none dark:bg-blue-950/30 focus-visible:border-[var(--color-accent-alg)]" inputMode="numeric" autoComplete="off" value={a.m} onChange={e=>setAns14({m:e.target.value.replace(/[^0-9]/g,"")})} />
                                )}
                                <span className="text-xs text-[var(--color-text-secondary)]">millier</span>
                              </div>
                              <span className="mt-[7px] shrink-0 text-[var(--color-text-secondary)]">+</span>
                            </>)}
                            <div className="flex flex-1 flex-col items-center gap-0.5">
                              {evalSubmitted ? (
                                <span className={`w-full rounded border px-1 py-1.5 text-center text-sm text-[var(--color-text-primary)] ${valCls14(cOk)}`}>{(cOk && a.c) ? a.c : String(c * 100)}</span>
                              ) : (
                                <input className="w-full rounded border border-[var(--color-border-default)] bg-blue-50 px-1 py-1.5 text-center text-sm outline-none dark:bg-blue-950/30 focus-visible:border-[var(--color-accent-alg)]" inputMode="numeric" autoComplete="off" value={a.c} onChange={e=>setAns14({c:e.target.value.replace(/[^0-9]/g,"")})} />
                              )}
                              <span className="text-xs text-[var(--color-text-secondary)]">centaine</span>
                            </div>
                            <span className="mt-[7px] shrink-0 text-[var(--color-text-secondary)]">+</span>
                            <div className="flex flex-1 flex-col items-center gap-0.5">
                              {evalSubmitted ? (
                                <span className={`w-full rounded border px-1 py-1.5 text-center text-sm text-[var(--color-text-primary)] ${valCls14(dOk)}`}>{(dOk && a.d) ? a.d : String(d * 10)}</span>
                              ) : (
                                <input className="w-full rounded border border-[var(--color-border-default)] bg-blue-50 px-1 py-1.5 text-center text-sm outline-none dark:bg-blue-950/30 focus-visible:border-[var(--color-accent-alg)]" inputMode="numeric" autoComplete="off" value={a.d} onChange={e=>setAns14({d:e.target.value.replace(/[^0-9]/g,"")})} />
                              )}
                              <span className="text-xs text-[var(--color-text-secondary)]">dizaine</span>
                            </div>
                            <span className="mt-[7px] shrink-0 text-[var(--color-text-secondary)]">+</span>
                            <div className="flex flex-1 flex-col items-center gap-0.5">
                              {evalSubmitted ? (
                                <span className={`w-full rounded border px-1 py-1.5 text-center text-sm text-[var(--color-text-primary)] ${valCls14(uOk)}`}>{(uOk && a.u) ? a.u : String(u)}</span>
                              ) : (
                                <input className="w-full rounded border border-[var(--color-border-default)] bg-blue-50 px-1 py-1.5 text-center text-sm outline-none dark:bg-blue-950/30 focus-visible:border-[var(--color-accent-alg)]" inputMode="numeric" autoComplete="off" value={a.u} onChange={e=>setAns14({u:e.target.value.replace(/[^0-9]/g,"")})} />
                              )}
                              <span className="text-xs text-[var(--color-text-secondary)]">unité</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Q7+Q8 — Ex15 tag-matching (grouped, 1 pt each) */}
                  <div>
                    <div className="pb-1 pt-2"><p className="text-sm font-semibold text-[var(--color-text-primary)]">7-8. Sélectionnez toutes les étiquettes qui représentent le même nombre que l&apos;étiquette rose. <span className="font-normal text-[var(--color-text-secondary)]">(1 pt chacune)</span></p></div>
                    <div className="space-y-4">
                      {a12EvalEx15Qs.map((q, qi) => (
                        <div key={qi} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
                          <div className="mb-3 flex justify-center">
                            <span className="text-2xl font-bold tabular-nums text-[var(--color-text-primary)]">{q.refDisplay}</span>
                          </div>
                          <div className="flex flex-col gap-2">
                            {q.tags.map((tag, ti) => {
                              const sel = a12EvalEx15Sel[qi]?.[ti] ?? false;
                              let cls = "border-zinc-300 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] dark:border-zinc-600";
                              if (evalSubmitted) {
                                if (tag.correct) cls = "border-blue-400 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]";
                                else if (sel) cls = "border-amber-400 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]";
                              } else if (sel) {
                                cls = "border-zinc-500 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] dark:border-zinc-400";
                              }
                              return (
                                <button key={ti} type="button"
                                  onClick={() => { if (!evalSubmitted) setA12EvalEx15Sel(prev => prev.map((row, ri) => ri === qi ? row.map((v, vi) => vi === ti ? !v : v) : row)); }}
                                  className={`flex items-center gap-2 rounded-[var(--radius-md)] border p-2.5 text-sm text-left transition-colors ${cls}`}>
                                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${sel ? "border-current bg-current" : "border-current/40"}`}>
                                    {sel && <span className="h-2 w-2 rounded-full bg-white" />}
                                  </span>
                                  <span className="font-normal">{tag.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Q9+Q10 — Ex16 arrow-grid (grouped, 1 pt each) */}
                  <div>
                    <div className="pb-1 pt-2"><p className="text-sm font-semibold text-[var(--color-text-primary)]">9-10. Suivez les flèches pour trouver les nombres manquants. <span className="font-normal text-[var(--color-text-secondary)]">(1 pt chacune)</span></p></div>
                    <div className="mb-3 flex flex-wrap gap-4 text-xs font-medium">
                      <span className="flex items-center gap-1.5"><span className="inline-block h-3 w-3 rounded-full bg-blue-500"/><span className="text-blue-700 dark:text-blue-300">+1 millier</span></span>
                      <span className="flex items-center gap-1.5"><span className="inline-block h-3 w-3 rounded-full bg-red-500"/><span className="text-red-700 dark:text-red-300">+1 centaine</span></span>
                      <span className="flex items-center gap-1.5"><span className="inline-block h-3 w-3 rounded-full bg-emerald-500"/><span className="text-emerald-700 dark:text-emerald-300">+1 dizaine</span></span>
                    </div>
                    <div className="space-y-4">
                      {a12EvalEx16Qs.map((q, qi) => {
                        const vals = [q.tl, q.tr, q.bl, q.br];
                        const CORNER_POS16 = [{r:0,c:0},{r:0,c:2},{r:2,c:0},{r:2,c:2}];
                        const cells16: React.ReactNode[] = [];
                        for (let r = 0; r < 3; r++) {
                          for (let c = 0; c < 3; c++) {
                            const ci = CORNER_POS16.findIndex(p => p.r === r && p.c === c);
                            if (ci !== -1) {
                              const isGiven = ci === q.givenIdx;
                              const val = vals[ci]!;
                              const ans = a12EvalEx16Ans[qi]?.[ci] ?? "";
                              const isOk = evalSubmitted ? parseInt(ans) === val : null;
                              if (isGiven) {
                                cells16.push(<div key={`${r}${c}`} className="flex h-10 w-full items-center justify-center rounded-[var(--radius-md)] border border-zinc-300 bg-white text-sm font-bold tabular-nums text-[var(--color-text-primary)] dark:border-zinc-600 dark:bg-zinc-900">{val.toLocaleString("fr-CH")}</div>);
                              } else {
                                cells16.push(evalSubmitted ? (
                                  <div key={`${r}${c}`} className={`flex h-10 w-full items-center justify-center rounded-[var(--radius-md)] border bg-[var(--color-bg-primary)] text-sm font-bold tabular-nums text-[var(--color-text-primary)] ${isOk ? "border-blue-400" : "border-amber-400"}`}>{isOk ? ans : val.toLocaleString("fr-CH")}</div>
                                ) : (
                                  <input key={`${r}${c}`} type="text" inputMode="numeric" value={ans}
                                    onChange={e => { const v = e.target.value.replace(/[^0-9]/g,""); setA12EvalEx16Ans(prev => prev.map((row2, ri) => ri === qi ? row2.map((cv, ci2) => ci2 === ci ? v : cv) : row2)); }}
                                    className="h-10 w-full rounded-[var(--radius-md)] border border-zinc-300 bg-blue-50 text-center text-sm font-bold tabular-nums outline-none focus:border-[var(--color-accent-alg)] dark:border-zinc-600 dark:bg-blue-950/20"
                                  />
                                ));
                              }
                            } else {
                              const arrow = q.arrows.find(a => a.row === r && a.col === c);
                              cells16.push(
                                <div key={`${r}${c}`} className={arrow ? `flex items-center justify-center text-2xl ${arrow.colorCls}` : undefined}>
                                  {arrow && (
                                    <span style={c === 1 ? { display: "inline-block", transform: "scaleX(2)" } : undefined}>
                                      {arrow.symbol}
                                    </span>
                                  )}
                                </div>
                              );
                            }
                          }
                        }
                        return (
                          <div key={qi} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
                            <div className="grid grid-cols-3 items-center gap-2">
                              {cells16}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* ── Exercices A1.1 (visibles après Commencer ou si déjà validé) ── */}
            {(evalStarted || evalSubmitted) && lesson.submoduleId === "A1-1" && <div className="space-y-3">
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
                                  <div key={ni} className={`flex h-10 min-w-0 flex-1 items-center justify-center rounded-[var(--radius-md)] border bg-[var(--color-bg-primary)] text-sm font-medium tabular-nums text-[var(--color-text-primary)] ${result ? "border-blue-400" : "border-amber-400"}`}>
                                    {result ? evalAnswers[ex.id] : num}
                                  </div>
                                );
                              }
                              return (
                                <input
                                  key={ni} type="text" inputMode="numeric"
                                  value={evalAnswers[ex.id] ?? ""}
                                  onChange={(e) => setEvalAnswers((prev) => ({ ...prev, [ex.id]: e.target.value.replace(/[^0-9]/g, "") }))}
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
                      <div className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
                        <SequentialAudioButton clips={ex.clips} />
                        {evalSubmitted && result !== null ? (
                          <div className={`flex h-10 flex-1 items-center gap-2 rounded-[var(--radius-md)] border bg-[var(--color-bg-primary)] px-3 ${result ? "border-blue-400" : "border-amber-400"}`}>
                            {result ? (
                              <span className="text-sm font-medium text-[var(--color-text-primary)]">{evalAnswers[ex.id]}</span>
                            ) : (
                              <span className="text-sm font-medium text-[var(--color-text-primary)]">{ex.acceptable[0]}</span>
                            )}
                          </div>
                        ) : (
                          <AppInput label="" id={`eval-${ex.id}`} value={evalAnswers[ex.id] ?? ""}
                            onChange={(e) => setEvalAnswers((prev) => ({ ...prev, [ex.id]: e.target.value.replace(/[^0-9]/g, "") }))}
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

            {/* ── Exercices génériques A1.3, A1.4… ── */}
            {(evalStarted || evalSubmitted) && lesson.submoduleId !== "A1-1" && lesson.submoduleId !== "A1-2" && (
              <div className="space-y-3">
                {evalItems_curr.map((ex, i) => {
                  const result = evalSubmitted ? (evalResults[ex.id] ?? null) : null;
                  return (
                    <div key={ex.id} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3 transition-colors">
                      <p className="mb-2 text-sm font-medium text-[var(--color-text-primary)]">{i + 1}. {ex.promptFr}</p>
                      {evalSubmitted && result !== null ? (
                        <div className={`flex h-10 items-center gap-2 rounded-[var(--radius-md)] border bg-[var(--color-bg-primary)] px-3 ${result ? "border-blue-400" : "border-amber-400"}`}>
                          {result
                            ? <span className="text-sm font-medium text-[var(--color-text-primary)]">{evalAnswers[ex.id]}</span>
                            : <>
                                <span className="text-sm text-amber-600 line-through">{evalAnswers[ex.id]}</span>
                                <span className="text-sm font-medium text-[var(--color-text-primary)]">{ex.acceptable[0]}</span>
                              </>
                          }
                        </div>
                      ) : (
                        <AppInput label="" id={`eval-${ex.id}`} value={evalAnswers[ex.id] ?? ""}
                          onChange={e => setEvalAnswers(prev => ({ ...prev, [ex.id]: ex.type === "number" ? e.target.value.replace(/[^0-9]/g, "") : e.target.value }))}
                          placeholder={ex.type === "number" ? "Nombre…" : "Réponse…"}
                          inputMode={ex.type === "number" ? "numeric" : "text"}
                          autoComplete="off"
                          className="!bg-blue-50 dark:!bg-blue-950/30" />
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {evalSubmitted && evalGrade !== null ? (
              <div className={`mt-4 rounded-[var(--radius-md)] border p-4 text-center ${
                evalGrade >= passingGrade
                  ? "border-blue-400 bg-blue-50 dark:bg-blue-950/20"
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

          </AppCard>
      )}

      {/* ── Exercice 17 — Droite numérique (A1.3) ───────────────────────────── */}
      {step === "ex17" && (
        <AppCard variant="elevated" header={
          <div>
            <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 17</p>
            <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Écrivez les nombres indiqués par les flèches sur la droite graduée</h2>
          </div>
        }>
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Lisez l&apos;échelle et trouvez le nombre pointé par chaque flèche.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex17[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{CONSIGNE_PIVOT.ex17[pivot]}</p>
            ) : null}
          </div>
          <div className="space-y-6">
            {ex17Lines.map((line, li) => {
              const ML = 30, _MR = 20, lineW = 450;
              const totalUnits = line.max - line.min;
              const pos = (v: number) => ML + ((v - line.min) / totalUnits) * lineW;
              const svgH = 130, lineY = 112, arrowTipY = 108, boxW = 52, boxH = 24;
              const boxYArr = [4, 36];
              return (
                <div key={li} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
                  <div className="w-full overflow-x-auto">
                    <svg viewBox={`0 0 500 ${svgH}`} width="100%" style={{ display: "block" }}>
                      {/* Number line */}
                      <line x1={ML} y1={lineY} x2={ML + lineW} y2={lineY} stroke="#374151" strokeWidth="2" />
                      {/* Right arrowhead on line */}
                      <polygon points={`${ML + lineW},${lineY} ${ML + lineW - 6},${lineY - 3} ${ML + lineW - 6},${lineY + 3}`} fill="#374151" />
                      {/* Tick marks at every unit, major at every 10 */}
                      {Array.from({ length: totalUnits + 1 }, (_, i) => {
                        const v = line.min + i;
                        const x = pos(v);
                        const isMajor = v % 10 === 0;
                        return (
                          <g key={v}>
                            <line x1={x} y1={lineY} x2={x} y2={isMajor ? lineY + 12 : lineY + 5} stroke="#374151" strokeWidth={isMajor ? 1.5 : 1} />
                            {isMajor && (
                              <text x={x} y={svgH - 4} textAnchor="middle" fontSize="9" fill="#374151" fontWeight="600">{v}</text>
                            )}
                          </g>
                        );
                      })}
                      {/* Arrows + input boxes */}
                      {line.arrows.map((v, ai) => {
                        const x = pos(v);
                        const bY = boxYArr[ai]!;
                        const boxX = Math.min(Math.max(x - boxW / 2, ML), ML + lineW - boxW);
                        const result = ex17Results[li]?.[ai] ?? null;
                        const ans = ex17Answers[li]?.[ai] ?? "";
                        const stroke = result === true ? "#4ade80" : result === false ? "#f87171" : "#9CA3AF";
                        const fill = result !== null ? "white" : "#DBEAFE";
                        return (
                          <g key={ai}>
                            {/* Shaft */}
                            <line x1={x} y1={bY + boxH} x2={x} y2={arrowTipY - 4} stroke="#374151" strokeWidth="1.5" />
                            {/* Arrowhead */}
                            <polygon points={`${x},${arrowTipY} ${x - 4},${arrowTipY - 7} ${x + 4},${arrowTipY - 7}`} fill="#374151" />
                            {/* Box */}
                            <rect x={boxX} y={bY} width={boxW} height={boxH} rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
                            {/* Validated text or input */}
                            {ex17Validated ? (
                              <text x={boxX + boxW / 2} y={bY + boxH / 2 + 4} textAnchor="middle" fontSize="11" fontWeight="normal" fill="#374151">
                                {result ? ans : String(v)}
                              </text>
                            ) : (
                              <foreignObject x={boxX + 2} y={bY + 2} width={boxW - 4} height={boxH - 4}>
                                <input
                                  type="text" inputMode="numeric"
                                  value={ans}
                                  onChange={e => {
                                    const val = e.target.value.replace(/[^0-9]/g, "");
                                    setEx17Answers(prev => prev.map((row, ri) =>
                                      ri === li ? row.map((c, ci) => ci === ai ? val : c) : row
                                    ));
                                  }}
                                  style={{ width: "100%", height: "100%", textAlign: "center", padding: "0", fontSize: "11px", fontWeight: "normal", background: "transparent", border: "none", outline: "none" }}
                                />
                              </foreignObject>
                            )}
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </AppCard>
      )}

      {/* ── Exercice 18 — Droite numérique 0–9000 (A1.3) ──────────────────── */}
      {step === "ex18" && (
        <AppCard variant="elevated" header={<div>
          <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 18</p>
          <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Écrivez les nombres indiqués par les flèches</h2>
        </div>}>
          <div className="mb-4">
            <p className="text-sm text-[var(--color-text-secondary)]">Lisez l&apos;échelle et trouvez le nombre pointé par chaque flèche.</p>
            {showPivotTranslation && CONSIGNE_PIVOT.ex18[pivot] ? (
              <p className="mt-1 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>{CONSIGNE_PIVOT.ex18[pivot]}</p>
            ) : null}
          </div>
          <div className="space-y-6">
            {ex18Lines.map((line, li) => {
              const ML = 30, _MR = 20, lineW = 450;
              const totalUnits = line.max - line.min;
              const pos = (v: number) => ML + ((v - line.min) / totalUnits) * lineW;
              const svgH = 130, lineY = 112, arrowTipY = 108, boxW = 56, boxH = 24;
              const boxYArr = [4, 36];
              return (
                <div key={li} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
                  <div className="w-full overflow-x-auto">
                    <svg viewBox={`0 0 500 ${svgH}`} width="100%" style={{display:"block"}}>
                      <line x1={ML} y1={lineY} x2={ML+lineW} y2={lineY} stroke="#374151" strokeWidth="2"/>
                      <polygon points={`${ML+lineW},${lineY} ${ML+lineW-6},${lineY-3} ${ML+lineW-6},${lineY+3}`} fill="#374151"/>
                      {Array.from({length: Math.floor(totalUnits/line.step)+1}, (_,i) => {
                        const v = line.min + i * line.step;
                        const x = pos(v);
                        return (
                          <g key={v}>
                            <line x1={x} y1={lineY} x2={x} y2={lineY+10} stroke="#374151" strokeWidth="1.5"/>
                            <text x={x} y={svgH-4} textAnchor="middle" fontSize="9" fill="#374151" fontWeight="600">{v}</text>
                          </g>
                        );
                      })}
                      {line.arrows.map((v, ai) => {
                        const x = pos(v);
                        const bY = boxYArr[ai]!;
                        const boxX = Math.min(Math.max(x - boxW/2, ML), ML + lineW - boxW);
                        const ans = ex18Answers[li]?.[ai] ?? "";
                        const result = ex18Results[li]?.[ai] ?? null;
                        const stroke = result === true ? "#4ade80" : result === false ? "#f87171" : "#9CA3AF";
                        const fill = result !== null ? "white" : "#DBEAFE";
                        return (
                          <g key={ai}>
                            <line x1={x} y1={bY+boxH} x2={x} y2={arrowTipY-4} stroke="#374151" strokeWidth="1.5"/>
                            <polygon points={`${x},${arrowTipY} ${x-4},${arrowTipY-7} ${x+4},${arrowTipY-7}`} fill="#374151"/>
                            <rect x={boxX} y={bY} width={boxW} height={boxH} rx="4" fill={fill} stroke={stroke} strokeWidth="1.5"/>
                            {ex18Validated ? (
                              <text x={boxX+boxW/2} y={bY+boxH/2+4} textAnchor="middle" fontSize="11" fontWeight="normal" fill="#374151">
                                {result ? ans : String(v)}
                              </text>
                            ) : (
                              <foreignObject x={boxX+2} y={bY+2} width={boxW-4} height={boxH-4}>
                                <input type="text" inputMode="numeric" value={ans}
                                  onChange={e => {
                                    const val = e.target.value.replace(/[^0-9]/g, "");
                                    setEx18Answers(prev => prev.map((row,ri) => ri===li ? row.map((c,ci) => ci===ai ? val : c) : row));
                                  }}
                                  style={{width:"100%",height:"100%",textAlign:"center",padding:"0",fontSize:"11px",fontWeight:"normal",background:"transparent",border:"none",outline:"none"}}
                                />
                              </foreignObject>
                            )}
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </AppCard>
      )}

      {/* ── Exercice 19 — Voisins des dizaines (A1.3) ──────────────────────── */}
      {step === "ex19" && (
        <AppCard variant="elevated" header={<div>
          <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 19</p>
          <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Trouvez les voisins des dizaines</h2>
        </div>}>
          <div className="mb-3">
            <p className="text-sm text-[var(--color-text-secondary)]">Complétez les dizaines encadrantes.</p>
            <div className="mt-2 rounded-[var(--radius-md)] bg-orange-50 px-4 py-2 text-sm dark:bg-orange-950/20">
              <span className="italic text-[var(--color-text-secondary)]">Exemple : </span>
              <span className="font-medium text-[var(--color-text-primary)]">350 &lt; 354 &lt; 360</span>
            </div>
          </div>
          <div className="space-y-4">
            {ex19Data.map((nums, si) => (
              <div key={si} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
                <p className="mb-2 text-xs font-semibold uppercase text-[var(--color-text-secondary)]">Série {si+1}</p>
                <div className="space-y-2">
                  {nums.map((n, ni) => {
                    const lo = Math.floor(n/10)*10, hi = lo + 10;
                    const a = ex19Ans[si]?.[ni] ?? {lo:"",hi:""};
                    const loOk = ex19Validated ? (a.lo === "" ? 0 : parseInt(a.lo)) === lo : null;
                    const hiOk = ex19Validated ? (a.hi === "" ? 0 : parseInt(a.hi)) === hi : null;
                    const fieldCls = "w-16 rounded border bg-blue-50 px-1 py-1 text-center text-sm tabular-nums outline-none dark:bg-blue-950/30 border-[var(--color-border-default)] focus-visible:border-[var(--color-accent-alg)]";
                    const valCls = (ok: boolean|null) => ok === null ? "" : ok ? "border-blue-400 bg-[var(--color-bg-primary)]" : "border-amber-400 bg-[var(--color-bg-primary)]";
                    return (
                      <div key={ni} className="flex items-center gap-2">
                        {ex19Validated ? (
                          <span className={`w-16 rounded border px-1 py-1 text-center text-sm tabular-nums text-[var(--color-text-primary)] ${valCls(loOk)}`}>
                            {(loOk && a.lo) ? a.lo : String(lo)}
                          </span>
                        ) : (
                          <input type="text" inputMode="numeric" className={fieldCls} value={a.lo}
                            onChange={e => { const v=e.target.value.replace(/[^0-9]/g,""); setEx19Ans(prev=>prev.map((s2,si2)=>si2===si?s2.map((q,qi)=>qi===ni?{...q,lo:v}:q):s2)); }} />
                        )}
                        <span className="text-sm text-[var(--color-text-secondary)]">&lt;</span>
                        <span className="w-14 text-center text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{n.toLocaleString("fr-CH")}</span>
                        <span className="text-sm text-[var(--color-text-secondary)]">&lt;</span>
                        {ex19Validated ? (
                          <span className={`w-16 rounded border px-1 py-1 text-center text-sm tabular-nums text-[var(--color-text-primary)] ${valCls(hiOk)}`}>
                            {(hiOk && a.hi) ? a.hi : String(hi)}
                          </span>
                        ) : (
                          <input type="text" inputMode="numeric" className={fieldCls} value={a.hi}
                            onChange={e => { const v=e.target.value.replace(/[^0-9]/g,""); setEx19Ans(prev=>prev.map((s2,si2)=>si2===si?s2.map((q,qi)=>qi===ni?{...q,hi:v}:q):s2)); }} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </AppCard>
      )}

      {/* ── Exercice 20 — Voisins des centaines (A1.3) ─────────────────────── */}
      {step === "ex20" && (
        <AppCard variant="elevated" header={<div>
          <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 20</p>
          <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Trouvez les voisins des centaines</h2>
        </div>}>
          <div className="mb-3">
            <p className="text-sm text-[var(--color-text-secondary)]">Complétez les centaines encadrantes.</p>
            <div className="mt-2 rounded-[var(--radius-md)] bg-orange-50 px-4 py-2 text-sm dark:bg-orange-950/20">
              <span className="italic text-[var(--color-text-secondary)]">Exemple : </span>
              <span className="font-medium text-[var(--color-text-primary)]">2 300 &lt; 2 354 &lt; 2 400</span>
            </div>
          </div>
          <div className="space-y-4">
            {ex20Data.map((nums, si) => (
              <div key={si} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
                <p className="mb-2 text-xs font-semibold uppercase text-[var(--color-text-secondary)]">Série {si+1}</p>
                <div className="space-y-2">
                  {nums.map((n, ni) => {
                    const lo = Math.floor(n/100)*100, hi = lo + 100;
                    const a = ex20Ans[si]?.[ni] ?? {lo:"",hi:""};
                    const loOk = ex20Validated ? (a.lo === "" ? 0 : parseInt(a.lo)) === lo : null;
                    const hiOk = ex20Validated ? (a.hi === "" ? 0 : parseInt(a.hi)) === hi : null;
                    const fieldCls = "w-16 rounded border bg-blue-50 px-1 py-1 text-center text-sm tabular-nums outline-none dark:bg-blue-950/30 border-[var(--color-border-default)] focus-visible:border-[var(--color-accent-alg)]";
                    const valCls = (ok: boolean|null) => ok === null ? "" : ok ? "border-blue-400 bg-[var(--color-bg-primary)]" : "border-amber-400 bg-[var(--color-bg-primary)]";
                    return (
                      <div key={ni} className="flex items-center gap-2">
                        {ex20Validated ? (
                          <span className={`w-16 rounded border px-1 py-1 text-center text-sm tabular-nums text-[var(--color-text-primary)] ${valCls(loOk)}`}>
                            {(loOk && a.lo) ? a.lo : String(lo)}
                          </span>
                        ) : (
                          <input type="text" inputMode="numeric" className={fieldCls} value={a.lo}
                            onChange={e => { const v=e.target.value.replace(/[^0-9]/g,""); setEx20Ans(prev=>prev.map((s2,si2)=>si2===si?s2.map((q,qi)=>qi===ni?{...q,lo:v}:q):s2)); }} />
                        )}
                        <span className="text-sm text-[var(--color-text-secondary)]">&lt;</span>
                        <span className="w-20 text-center text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{n.toLocaleString("fr-CH")}</span>
                        <span className="text-sm text-[var(--color-text-secondary)]">&lt;</span>
                        {ex20Validated ? (
                          <span className={`w-16 rounded border px-1 py-1 text-center text-sm tabular-nums text-[var(--color-text-primary)] ${valCls(hiOk)}`}>
                            {(hiOk && a.hi) ? a.hi : String(hi)}
                          </span>
                        ) : (
                          <input type="text" inputMode="numeric" className={fieldCls} value={a.hi}
                            onChange={e => { const v=e.target.value.replace(/[^0-9]/g,""); setEx20Ans(prev=>prev.map((s2,si2)=>si2===si?s2.map((q,qi)=>qi===ni?{...q,hi:v}:q):s2)); }} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </AppCard>
      )}

      {/* ── Exercice 21 — Sélection comparative (A1.4) ──────────────────────── */}
      {step === "ex21" && (
        <AppCard variant="elevated" header={<div>
          <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 21</p>
          <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Sélectionnez les nombres</h2>
        </div>}>
          <div className="mb-3">
            <p className="text-sm text-[var(--color-text-secondary)]">Cliquez sur les nombres qui correspondent à la consigne.</p>
          </div>
          <div className="space-y-4">
            {ex21Data.map((series, si) => {
              const max = Math.max(...series.numbers);
              const min = Math.min(...series.numbers);
              const consigne = series.mode === "plus_grand"
                ? "Entourez le plus grand nombre."
                : series.mode === "plus_petit"
                ? "Entourez le plus petit nombre."
                : `Entourez tous les nombres entre ${series.limitLo.toLocaleString("fr-CH")} et ${series.limitHi.toLocaleString("fr-CH")}.`;
              const isCorrect = (n: number) =>
                series.mode === "plus_grand" ? n === max
                : series.mode === "plus_petit" ? n === min
                : n > series.limitLo && n < series.limitHi;
              return (
                <div key={si} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
                  <p className="mb-3 text-sm font-medium text-[var(--color-text-primary)]">{consigne}</p>
                  <div className="flex flex-wrap gap-2">
                    {series.numbers.map((n, ni) => {
                      const sel = ex21Selected[si]?.[ni] ?? false;
                      const correct = isCorrect(n);
                      let cls = "rounded-[var(--radius-md)] border px-4 py-2 text-sm font-bold tabular-nums transition-colors";
                      if (ex21Validated) {
                        if (correct && sel) cls += " border-blue-400 bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300";
                        else if (correct && !sel) cls += " border-blue-400 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]";
                        else if (!correct && sel) cls += " border-amber-400 bg-[var(--color-bg-primary)] text-amber-600 line-through";
                        else cls += " border-[var(--color-border-default)] text-[var(--color-text-secondary)]";
                      } else {
                        cls += sel
                          ? " border-teal-500 bg-teal-50 dark:bg-teal-950/30 text-[var(--color-text-primary)] cursor-pointer"
                          : " border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-teal-400 cursor-pointer";
                      }
                      return (
                        <button key={ni} type="button" className={cls}
                          onClick={() => { if (ex21Validated) return; setEx21Selected(prev => prev.map((s2, si2) => si2 === si ? s2.map((v, vi) => vi === ni ? !v : v) : s2)); }}>
                          {n.toLocaleString("fr-CH")}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </AppCard>
      )}

      {/* ── Exercice 22 — Comparaison avec blocs (A1.4) ─────────────────────── */}
      {step === "ex22" && (
        <AppCard variant="elevated" header={<div>
          <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 22</p>
          <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Comparez les nombres</h2>
        </div>}>
          <div className="mb-3">
            <p className="text-sm text-[var(--color-text-secondary)]">Complétez avec le symbole de comparaison.</p>
          </div>
          <div className="space-y-4">
            {ex22Pairs.map((pair, pi) => {
              const correct = pair.a < pair.b ? "<" : pair.a > pair.b ? ">" : "=";
              const sel = ex22Syms[pi] ?? "";
              const validated = ex22Validated;
              const renderBlocks = (n: number) => {
                const c = Math.floor(n / 100), d = Math.floor((n % 100) / 10), u = n % 10;
                return (
                  <div className="flex flex-col items-center gap-1 min-w-0 flex-1">
                    <span className="text-xl font-bold tabular-nums text-[var(--color-text-primary)]">{n}</span>
                    {c > 0 && <div className="flex flex-wrap justify-center gap-0.5">{Array.from({length:c},(_,i)=><SvgCentaine key={i} s={4} />)}</div>}
                    {d > 0 && <div className="flex flex-wrap justify-center gap-0.5">{Array.from({length:d},(_,i)=><SvgDizaine key={i} s={6} />)}</div>}
                    {u > 0 && <div className="flex flex-wrap justify-center gap-0.5">{Array.from({length:u},(_,i)=><SvgUnite key={i} s={10} />)}</div>}
                  </div>
                );
              };
              return (
                <div key={pi} className={`rounded-[var(--radius-md)] border p-3 transition-colors ${validated ? (sel === correct ? "border-blue-400" : "border-amber-400") : "border-[var(--color-border-default)]"}`}>
                  <div className="flex items-center gap-2">
                    {renderBlocks(pair.a)}
                    <div className="flex flex-col gap-1 shrink-0">
                      {(["<", ">", "="] as const).map(sym => {
                        let cls = "w-10 rounded border py-1 text-center text-sm font-bold transition-colors";
                        if (validated) {
                          cls += sym === correct ? " border-blue-400 bg-[var(--color-bg-primary)] text-blue-700 dark:text-blue-300"
                            : sym === sel && sym !== correct ? " border-amber-400 bg-[var(--color-bg-primary)] text-amber-600 line-through"
                            : " border-[var(--color-border-default)] text-[var(--color-text-secondary)]";
                        } else {
                          cls += sel === sym ? " border-teal-500 bg-teal-50 dark:bg-teal-950/30 text-[var(--color-text-primary)]"
                            : " border-zinc-300 dark:border-zinc-600 text-[var(--color-text-primary)] hover:border-teal-400 cursor-pointer";
                        }
                        return (
                          <button key={sym} type="button" className={cls}
                            onClick={() => { if (!validated) setEx22Syms(prev => prev.map((s, i) => i === pi ? sym : s)); }}>
                            {sym}
                          </button>
                        );
                      })}
                    </div>
                    {renderBlocks(pair.b)}
                  </div>
                </div>
              );
            })}
          </div>
        </AppCard>
      )}

      {/* ── Exercice 23 — Grille de comparaison (A1.4) ──────────────────────── */}
      {step === "ex23" && (
        <AppCard variant="elevated" header={<div>
          <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 23</p>
          <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Complétez avec les symboles de comparaison</h2>
        </div>}>
          <div className="mb-3">
            <p className="text-sm text-[var(--color-text-secondary)]">Cliquez sur □ pour faire défiler &lt; &gt; =</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {ex23Pairs.map((pair, pi) => {
              const correct = pair.a < pair.b ? "<" : pair.a > pair.b ? ">" : "=";
              const sym = ex23Syms[pi] ?? "";
              const CYCLE = ["", "<", ">", "="];
              const nextSym = CYCLE[(CYCLE.indexOf(sym) + 1) % CYCLE.length]!;
              let symCls = "w-8 h-8 rounded border text-center text-sm font-bold leading-8 transition-colors shrink-0";
              if (ex23Validated) {
                symCls += sym === correct ? " border-blue-400 bg-[var(--color-bg-primary)] text-blue-700 dark:text-blue-300"
                  : sym !== correct ? " border-amber-400 bg-[var(--color-bg-primary)] text-amber-600"
                  : " border-[var(--color-border-default)]";
              } else {
                symCls += sym ? " border-teal-500 bg-teal-50 dark:bg-teal-950/30 text-[var(--color-text-primary)] cursor-pointer"
                  : " border-zinc-300 dark:border-zinc-600 text-zinc-400 cursor-pointer hover:border-teal-400";
              }
              return (
                <div key={pi} className="flex items-center gap-1 rounded-[var(--radius-md)] border border-[var(--color-border-default)] px-2 py-1.5">
                  <span className="flex-1 text-right text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{pair.a}</span>
                  <button type="button" className={symCls}
                    onClick={() => { if (!ex23Validated) setEx23Syms(prev => prev.map((s, i) => i === pi ? nextSym : s)); }}>
                    {sym || "□"}
                  </button>
                  <span className="flex-1 text-left text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{pair.b}</span>
                  {ex23Validated && sym !== correct && (
                    <span className="text-xs text-blue-600 dark:text-blue-400 shrink-0">→{correct}</span>
                  )}
                </div>
              );
            })}
          </div>
        </AppCard>
      )}

      {/* ── Exercice 24 — Mur de briques (A1.4) ─────────────────────────────── */}
      {step === "ex24" && (
        <AppCard variant="elevated" header={<div>
          <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 24</p>
          <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Sélectionnez les nombres</h2>
        </div>}>
          <div className="space-y-5">
            {ex24Data.map((cfg, si) => {
              const consigne = cfg.mode === "moins_que"
                ? `Sélectionnez tous les nombres plus petits que ${cfg.threshold.toLocaleString("fr-CH")}.`
                : cfg.mode === "plus_que"
                ? `Sélectionnez tous les nombres plus grands que ${cfg.threshold.toLocaleString("fr-CH")}.`
                : `Sélectionnez tous les nombres entre ${cfg.limitLo.toLocaleString("fr-CH")} et ${cfg.limitHi.toLocaleString("fr-CH")}.`;
              const isCorrect = (n: number) =>
                cfg.mode === "moins_que" ? n < cfg.threshold
                : cfg.mode === "plus_que" ? n > cfg.threshold
                : n > cfg.limitLo && n < cfg.limitHi;
              const rows = [[0,1,2,3], [4,5,6], [7,8,9,10], [11]];
              return (
                <div key={si} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
                  <p className="mb-3 text-sm font-medium text-[var(--color-text-primary)]">{consigne}</p>
                  <div className="space-y-1">
                    {rows.map((rowIdxs, ri) => (
                      <div key={ri} className={`flex gap-1 ${ri % 2 === 1 ? "pl-4" : ""}`}>
                        {rowIdxs.map(idx => {
                          const n = cfg.numbers[idx]!;
                          const sel = ex24Selected[si]?.[idx] ?? false;
                          const correct = isCorrect(n);
                          let cls = "flex-1 rounded border px-1 py-2 text-center text-xs font-bold tabular-nums transition-colors";
                          if (ex24Validated) {
                            cls += correct && sel ? " border-blue-400 bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300"
                              : correct && !sel ? " border-blue-400 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
                              : !correct && sel ? " border-amber-400 bg-[var(--color-bg-primary)] text-amber-600 line-through"
                              : " border-[var(--color-border-default)] text-[var(--color-text-secondary)]";
                          } else {
                            cls += sel ? " border-teal-500 bg-teal-50 dark:bg-teal-950/30 text-[var(--color-text-primary)] cursor-pointer"
                              : " border-zinc-300 dark:border-zinc-600 text-[var(--color-text-primary)] hover:border-teal-400 cursor-pointer";
                          }
                          return (
                            <button key={idx} type="button" className={cls}
                              onClick={() => { if (ex24Validated) return; setEx24Selected(prev => prev.map((s2, si2) => si2 === si ? s2.map((v, vi) => vi === idx ? !v : v) : s2)); }}>
                              {n.toLocaleString("fr-CH")}
                            </button>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </AppCard>
      )}

      {/* ── Exercice 25 — Colorier par plage (A1.4) ──────────────────────────── */}
      {step === "ex25" && (
        <AppCard variant="elevated" header={<div>
          <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 25</p>
          <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Coloriez les insectes</h2>
        </div>}>
          <div className="mb-3 space-y-1 text-sm text-[var(--color-text-secondary)]">
            <p>Cliquez sur chaque nombre pour lui attribuer la bonne couleur.</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="flex items-center gap-1.5"><span className="inline-block h-3 w-3 rounded-full bg-green-400" />En vert : 350 – 600</span>
              <span className="flex items-center gap-1.5"><span className="inline-block h-3 w-3 rounded-full bg-blue-400" />En bleu : &gt; 710</span>
              <span className="flex items-center gap-1.5"><span className="inline-block h-3 w-3 rounded-full bg-yellow-400" />En jaune : &lt; 300</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {ex25Numbers.map((n, ni) => {
              const col = ex25Colors[ni];
              const correctCol = ex25CorrectColor(n);
              const COLOR_BG: Record<string, string> = {
                vert: "bg-green-100 dark:bg-green-900/40 border-blue-400",
                bleu: "bg-blue-100 dark:bg-blue-900/40 border-blue-400",
                jaune: "bg-yellow-100 dark:bg-yellow-900/40 border-yellow-400",
              };
              const COLOR_CYCLE = [null, "vert", "bleu", "jaune"];
              const nextCol = COLOR_CYCLE[(COLOR_CYCLE.indexOf(col) + 1) % COLOR_CYCLE.length] as string | null;
              let cls = "flex flex-col items-center justify-center rounded-[var(--radius-md)] border p-2 transition-colors";
              if (ex25Validated) {
                const ok = col === correctCol;
                cls += ok ? " border-blue-400 bg-blue-50 dark:bg-blue-950/20"
                  : " border-amber-400 bg-amber-50 dark:bg-amber-950/20";
              } else {
                cls += col ? ` ${COLOR_BG[col] ?? "border-[var(--color-border-default)]"} cursor-pointer`
                  : " border-[var(--color-border-default)] hover:border-teal-400 cursor-pointer";
              }
              return (
                <button key={ni} type="button" className={cls}
                  onClick={() => { if (!ex25Validated) setEx25Colors(prev => prev.map((c, ci) => ci === ni ? nextCol : c)); }}>
                  <span className="text-2xl" aria-hidden>🪰</span>
                  <span className="text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{n}</span>
                  {ex25Validated && (
                    <span className={`text-xs font-medium ${col === correctCol ? "text-blue-600 dark:text-blue-400" : "text-amber-600"}`}>
                      {col === correctCol ? "✓" : `→ ${correctCol ?? "sans"}`}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </AppCard>
      )}

      {/* ── Exercice 26 — Nombres dans les bulles (A1.4) ─────────────────────── */}
      {step === "ex26" && (
        <AppCard variant="elevated" header={<div>
          <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 26</p>
          <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Écrivez les nombres dans les bulles</h2>
        </div>}>
          <div className="mb-3">
            <p className="text-sm text-[var(--color-text-secondary)]">Cochez chaque nombre dans la bonne bulle (un nombre peut être dans plusieurs bulles).</p>
          </div>
          <div className="mb-3 flex flex-wrap gap-2">
            {EX26_NUMBERS.map(n => (
              <span key={n} className="rounded border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-2 py-0.5 text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{n}</span>
            ))}
          </div>
          <div className="space-y-3">
            {EX26_BUBBLES.map((bubble, bi) => {
              const correctSet = new Set(EX26_NUMBERS.filter(n => n > bubble.lo && n < bubble.hi));
              return (
                <div key={bi} className={`rounded-[var(--radius-md)] border p-3 ${bubble.bgCls} ${bubble.borderCls}`}>
                  <p className={`mb-2 text-sm font-semibold ${bubble.textCls}`}>
                    Entre {bubble.lo} et {bubble.hi}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {EX26_NUMBERS.map((n, ni) => {
                      const checked = ex26Checked[ni]?.[bi] ?? false;
                      const isCorrect = correctSet.has(n);
                      let cls = "rounded border px-2 py-0.5 text-xs font-bold tabular-nums transition-colors";
                      if (ex26Validated) {
                        cls += checked && isCorrect ? " border-blue-400 bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300"
                          : checked && !isCorrect ? " border-amber-400 bg-amber-50 dark:bg-amber-950/20 text-amber-600 line-through"
                          : !checked && isCorrect ? " border-blue-400 bg-[var(--color-bg-primary)] text-blue-600 dark:text-blue-400"
                          : " border-transparent text-[var(--color-text-secondary)]";
                      } else {
                        cls += checked ? ` ${bubble.btnSel} text-[var(--color-text-primary)] cursor-pointer`
                          : ` ${bubble.btnBase} bg-transparent text-[var(--color-text-primary)] cursor-pointer`;
                      }
                      return (
                        <button key={n} type="button" className={cls}
                          onClick={() => { if (!ex26Validated) setEx26Checked(prev => prev.map((row, ri) => ri === ni ? row.map((v, vi) => vi === bi ? !v : v) : row)); }}>
                          {n}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </AppCard>
      )}

      {/* ── Exercice 27 — Écrire entre deux bornes (A1.4) ────────────────────── */}
      {step === "ex27" && (
        <AppCard variant="elevated" header={<div>
          <p className="text-sm font-medium uppercase text-[var(--color-accent-quiz)]">Exercice 27</p>
          <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Écrivez un nombre entre les deux nombres</h2>
        </div>}>
          <div className="mb-3">
            <p className="text-sm text-[var(--color-text-secondary)]">Écrivez n&apos;importe quel nombre entier entre les deux bornes.</p>
          </div>
          <div className="space-y-4">
            {ex27Data.map((items, si) => (
              <div key={si} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
                <p className="mb-2 text-xs font-semibold uppercase text-[var(--color-text-secondary)]">Série {si + 1}</p>
                <div className="grid grid-cols-2 gap-2">
                  {items.map((item, ii) => {
                    const ans = ex27Ans[si]?.[ii] ?? "";
                    const parsed = parseInt(ans);
                    const ok = ex27Validated ? (!isNaN(parsed) && parsed > item.lo && parsed < item.hi) : null;
                    const fieldCls = "w-20 rounded border bg-blue-50 px-1 py-1 text-center text-sm tabular-nums outline-none dark:bg-blue-950/30 border-[var(--color-border-default)] focus-visible:border-[var(--color-accent-alg)]";
                    const valCls = ok === true ? "border-blue-400 bg-[var(--color-bg-primary)]" : ok === false ? "border-amber-400 bg-[var(--color-bg-primary)]" : "";
                    return (
                      <div key={ii} className={`flex items-center justify-center gap-1 rounded-[var(--radius-md)] border px-2 py-2 text-sm font-bold tabular-nums transition-colors ${ok === true ? "border-blue-400" : ok === false ? "border-amber-400" : "border-[var(--color-border-default)]"}`}>
                        {item.reversed ? (
                          <>
                            <span className="text-blue-600 dark:text-blue-400">{item.hi}</span>
                            <span className="text-[var(--color-text-secondary)]">&gt;</span>
                            {ex27Validated ? (
                              <span className={`w-16 rounded border px-1 py-0.5 text-center text-[var(--color-text-primary)] ${valCls}`}>
                                {ok ? ans : `${item.lo + 1}–${item.hi - 1}`}
                              </span>
                            ) : (
                              <input type="text" inputMode="numeric" className={fieldCls} value={ans}
                                onChange={e => { const v = e.target.value.replace(/[^0-9]/g, ""); setEx27Ans(prev => prev.map((s2, si2) => si2 === si ? s2.map((q, qi) => qi === ii ? v : q) : s2)); }} />
                            )}
                            <span className="text-[var(--color-text-secondary)]">&gt;</span>
                            <span className="text-blue-600 dark:text-blue-400">{item.lo}</span>
                          </>
                        ) : (
                          <>
                            <span className="text-blue-600 dark:text-blue-400">{item.lo}</span>
                            <span className="text-[var(--color-text-secondary)]">&lt;</span>
                            {ex27Validated ? (
                              <span className={`w-16 rounded border px-1 py-0.5 text-center text-[var(--color-text-primary)] ${valCls}`}>
                                {ok ? ans : `${item.lo + 1}–${item.hi - 1}`}
                              </span>
                            ) : (
                              <input type="text" inputMode="numeric" className={fieldCls} value={ans}
                                onChange={e => { const v = e.target.value.replace(/[^0-9]/g, ""); setEx27Ans(prev => prev.map((s2, si2) => si2 === si ? s2.map((q, qi) => qi === ii ? v : q) : s2)); }} />
                            )}
                            <span className="text-[var(--color-text-secondary)]">&lt;</span>
                            <span className="text-blue-600 dark:text-blue-400">{item.hi}</span>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
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
        </AppCard>
      )}

      {/* ── Fixed bottom nav ──────────────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            <button
              type="button"
              onClick={goBack}
              disabled={isFirstStep}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-40"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 18l-6-6 6-6" /></svg>
              Retour
            </button>

            {(stepReset || stepValidate) ? (
              <div className="flex items-center gap-2">
                {stepReset ? (
                  <button
                    type="button"
                    aria-label="Recommencer"
                    onClick={stepReset}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 .49-4" />
                    </svg>
                  </button>
                ) : null}
                {stepValidate ? (
                  <button
                    type="button"
                    aria-label="Valider"
                    onClick={stepValidate}
                    disabled={stepValidateDisabled}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-alg)] text-white shadow-sm transition-opacity hover:opacity-90 active:scale-90 disabled:opacity-40"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </button>
                ) : null}
              </div>
            ) : <span />}

            <button
              type="button"
              onClick={goNext}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80"
            >
              {isLastStep ? (
                <>Terminer <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg></>
              ) : (
                <>Suivant <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M9 18l6-6-6-6" /></svg></>
              )}
            </button>
          </div>
        </div>
        <div className="h-[68px]" />
      </div>
    </div>
  );
}

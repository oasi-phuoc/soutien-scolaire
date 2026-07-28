"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  printQuestionsListClass,
  usePrintColumns,
  usePrintQuestionCount,
} from "@/components/print/PrintExerciseLayoutContext";
import { useEvalReveal } from "@/lib/eval-reveal-context";

type G2ShapeKind = "square" | "rectangle" | "triangle" | "regular" | "circle" | "composite";
type ExerciseMode = "perimeter" | "missing";

type Props = {
  exNum: number;
  shapeKind: G2ShapeKind;
  mode: ExerciseMode;
  decimals?: boolean;
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
};

const UNITS = ["km", "hm", "dam", "m", "dm", "cm", "mm"] as const;
type Unit = typeof UNITS[number];

const UNIT_TO_M: Record<Unit, number> = {
  km: 1000,
  hm: 100,
  dam: 10,
  m: 1,
  dm: 0.1,
  cm: 0.01,
  mm: 0.001,
};

type FigureData = {
  shapeKind: G2ShapeKind;
  unit: Unit;
  convertUnit: Unit;
  targetLabel: string;
  primaryAnswer: number;
  convertedAnswer: number;
  perimeter: number;
  svg: string;
};

type AnswerState = {
  primary: string;
  converted: string;
  checked: boolean;
  primaryOk: boolean;
  convertedOk: boolean;
};

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randMeasure(min: number, max: number, decimals: boolean): number {
  if (!decimals) return randInt(min, max);
  const places = Math.random() > 0.5 ? 1 : 2;
  const factor = 10 ** places;
  return randInt(min * factor, max * factor) / factor;
}

function pick<T>(items: readonly T[]): T {
  return items[randInt(0, items.length - 1)]!;
}

function pickOtherUnit(unit: Unit): Unit {
  const options = UNITS.filter((u) => u !== unit);
  return pick(options);
}

function convertValue(value: number, from: Unit, to: Unit): number {
  return (value * UNIT_TO_M[from]) / UNIT_TO_M[to];
}

function fmt(value: number): string {
  const rounded = Math.round(value * 1000) / 1000;
  return Number.isInteger(rounded)
    ? String(rounded)
    : String(rounded).replace(".", ",");
}

function parseNumber(value: string): number | null {
  const normalized = value.trim().replace(/\s/g, "").replace(",", ".");
  if (!normalized) return null;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function isClose(user: string, expected: number): boolean {
  const parsed = parseNumber(user);
  if (parsed === null) return false;
  const tolerance = Math.max(0.01, Math.abs(expected) * 0.001);
  return Math.abs(parsed - expected) <= tolerance;
}

function inputClass(ok: boolean, checked: boolean): string {
  if (!checked) {
    return "h-9 w-24 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/70 bg-transparent px-1 py-1 text-center text-sm outline-none transition-colors focus:border-amber-500";
  }
  return ok
    ? "h-9 w-24 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)] bg-transparent px-1 py-1 text-center text-sm outline-none"
    : "h-9 w-24 rounded-none border-0 border-b-2 border-amber-500 bg-transparent px-1 py-1 text-center text-sm outline-none";
}

function withConversion(value: number, unit: Unit): Pick<FigureData, "unit" | "convertUnit" | "convertedAnswer"> {
  const convertUnit = pickOtherUnit(unit);
  return { unit, convertUnit, convertedAnswer: convertValue(value, unit, convertUnit) };
}

function makeCompositeFigure(mode: ExerciseMode, decimals: boolean, unit: Unit): FigureData {
  const label = (value: number) => `${fmt(value)} ${unit}`;
  const perimeterLabel = (value: number) => `Périmètre = ${fmt(value)} ${unit}`;

  if (mode === "perimeter") {
    const template = pick([
      "rect-semicircle",
      "capsule",
      "pacman",
      "double-arc",
      "concave-arcs",
      "top-semicircle",
      "side-semicircle",
      "double-bump",
      "cut-corner-arc",
      "slanted-cap",
      "quarter-arc-combo",
      "stepped",
    ] as const);

    if (template === "rect-semicircle") {
      const width = randMeasure(7, 16, decimals);
      const height = randMeasure(3, 8, decimals);
      const bottom = randMeasure(2, Math.max(3, Math.floor(width / 2)), decimals);
      const diameter = width - bottom;
      const perimeter = width + height * 2 + bottom + (Math.PI * diameter) / 2;
      const conv = withConversion(perimeter, unit);
      return {
        shapeKind: "composite",
        ...conv,
        targetLabel: "Périmètre",
        primaryAnswer: perimeter,
        perimeter,
        svg: `<svg viewBox='0 0 320 220' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:430px;display:block;margin:0 auto'>
  <path d='M70 45 H230 V125 H178 A54 54 0 0 1 70 125 Z' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <path d='M70 125 H178' stroke='var(--color-text-secondary)' stroke-width='1.4' stroke-dasharray='5 5'/>
  <path d='M70 45 v80 M230 45 v80' stroke='#f43f5e' stroke-width='2'/>
  <path d='M70 45 h160' stroke='#f43f5e' stroke-width='2'/>
  <text x='150' y='34' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(width)}</text>
  <text x='244' y='88' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(height)}</text>
  <text x='204' y='146' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(bottom)}</text>
</svg>`,
      };
    }

    if (template === "capsule") {
      const length = randMeasure(6, 16, decimals);
      const height = randMeasure(3, 8, decimals);
      const perimeter = 2 * length + Math.PI * height;
      const conv = withConversion(perimeter, unit);
      return {
        shapeKind: "composite",
        ...conv,
        targetLabel: "Périmètre",
        primaryAnswer: perimeter,
        perimeter,
        svg: `<svg viewBox='0 0 320 190' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:430px;display:block;margin:0 auto'>
  <path d='M82 55 H238 A42 42 0 0 1 238 139 H82 A42 42 0 0 1 82 55 Z' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <line x1='82' y1='55' x2='82' y2='139' stroke='var(--color-text-secondary)' stroke-width='1.4' stroke-dasharray='5 5'/>
  <line x1='238' y1='55' x2='238' y2='139' stroke='var(--color-text-secondary)' stroke-width='1.4' stroke-dasharray='5 5'/>
  <text x='160' y='43' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(length)}</text>
  <text x='100' y='101' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(height)}</text>
</svg>`,
      };
    }

    if (template === "pacman") {
      const radius = randMeasure(3, 11, decimals);
      const perimeter = 3 * Math.PI * radius + 2 * radius;
      const conv = withConversion(perimeter, unit);
      return {
        shapeKind: "composite",
        ...conv,
        targetLabel: "Périmètre",
        primaryAnswer: perimeter,
        perimeter,
        svg: `<svg viewBox='0 0 260 220' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:360px;display:block;margin:0 auto'>
  <path d='M130 30 A80 80 0 1 0 210 110 H130 Z' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <path d='M130 110 H210 M130 110 V30' stroke='#f43f5e' stroke-width='2'/>
  <text x='166' y='101' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(radius)}</text>
</svg>`,
      };
    }

    if (template === "double-arc") {
      const diameter = randMeasure(3, 10, decimals);
      const perimeter = 2 * Math.PI * diameter;
      const conv = withConversion(perimeter, unit);
      return {
        shapeKind: "composite",
        ...conv,
        targetLabel: "Périmètre",
        primaryAnswer: perimeter,
        perimeter,
        svg: `<svg viewBox='0 0 330 210' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:430px;display:block;margin:0 auto'>
  <path d='M45 155 A120 120 0 0 1 285 155 A60 60 0 0 0 165 155 A60 60 0 0 0 45 155 Z' fill='#fb923c' fill-opacity='0.55' stroke='var(--color-accent-alg)' stroke-width='2.2' stroke-linejoin='round'/>
  <line x1='45' y1='155' x2='285' y2='155' stroke='var(--color-text-secondary)' stroke-width='1.4' stroke-dasharray='5 5'/>
  <path d='M45 155 H165' stroke='#65a30d' stroke-width='2'/>
  <text x='105' y='181' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(diameter)}</text>
</svg>`,
      };
    }

    if (template === "concave-arcs") {
      const width = randMeasure(8, 18, decimals);
      const height = randMeasure(3, 8, decimals);
      const radius = height / 2;
      const straight = Math.max(1, width - 2 * radius);
      const perimeter = straight * 2 + 2 * Math.PI * radius;
      const conv = withConversion(perimeter, unit);
      return {
        shapeKind: "composite",
        ...conv,
        targetLabel: "Périmètre",
        primaryAnswer: perimeter,
        perimeter,
        svg: `<svg viewBox='0 0 360 230' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:460px;display:block;margin:0 auto'>
  <path d='M70 60 H140 A45 45 0 0 0 220 60 H290 A45 45 0 0 0 290 170 H220 A45 45 0 0 0 140 170 H70 A45 45 0 0 0 70 60 Z' fill='#fde68a' fill-opacity='0.70' stroke='var(--color-accent-alg)' stroke-width='2.2' stroke-linejoin='round'/>
  <rect x='45' y='60' width='270' height='110' fill='none' stroke='var(--color-text-secondary)' stroke-width='1.2' stroke-dasharray='5 5'/>
  <text x='180' y='45' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(width)}</text>
  <text x='323' y='119' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(height)}</text>
</svg>`,
      };
    }

    if (template === "top-semicircle") {
      const width = randMeasure(7, 18, decimals);
      const height = randMeasure(4, 10, decimals);
      const sideTop = randMeasure(2, 5, decimals);
      const diameter = Math.max(2, width - 2 * sideTop);
      const perimeter = width + 2 * height + 2 * sideTop + (Math.PI * diameter) / 2;
      const conv = withConversion(perimeter, unit);
      return {
        shapeKind: "composite",
        ...conv,
        targetLabel: "Périmètre",
        primaryAnswer: perimeter,
        perimeter,
        svg: `<svg viewBox='0 0 340 230' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:440px;display:block;margin:0 auto'>
  <path d='M55 88 H120 A55 55 0 0 1 230 88 H295 V190 H55 Z' fill='#7dd3fc' fill-opacity='0.75' stroke='var(--color-accent-alg)' stroke-width='2.2' stroke-linejoin='round'/>
  <line x1='55' y1='88' x2='295' y2='88' stroke='var(--color-text-secondary)' stroke-width='1.2' stroke-dasharray='5 5'/>
  <text x='78' y='78' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(sideTop)}</text>
  <text x='305' y='143' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(height)}</text>
</svg>`,
      };
    }

    if (template === "side-semicircle") {
      const width = randMeasure(6, 16, decimals);
      const height = randMeasure(3, 9, decimals);
      const perimeter = 2 * width + height + (Math.PI * height) / 2;
      const conv = withConversion(perimeter, unit);
      return {
        shapeKind: "composite",
        ...conv,
        targetLabel: "Périmètre",
        primaryAnswer: perimeter,
        perimeter,
        svg: `<svg viewBox='0 0 330 210' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:430px;display:block;margin:0 auto'>
  <path d='M75 45 H225 A62 62 0 0 1 225 165 H75 Z' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.3' stroke-linejoin='round'/>
  <text x='150' y='190' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(width)}</text>
  <text x='43' y='108' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(height)}</text>
</svg>`,
      };
    }

    if (template === "double-bump") {
      const width = randMeasure(5, 14, decimals);
      const height = randMeasure(4, 12, decimals);
      const topDiameter = randMeasure(3, Math.max(4, Math.floor(width)), decimals);
      const leftDiameter = randMeasure(3, Math.max(4, Math.floor(height)), decimals);
      const perimeter = width + height + (width - topDiameter) + (height - leftDiameter) + (Math.PI * topDiameter) / 2 + (Math.PI * leftDiameter) / 2;
      const conv = withConversion(perimeter, unit);
      return {
        shapeKind: "composite",
        ...conv,
        targetLabel: "Périmètre",
        primaryAnswer: perimeter,
        perimeter,
        svg: `<svg viewBox='0 0 310 230' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:410px;display:block;margin:0 auto'>
  <path d='M88 72 A52 52 0 0 1 192 72 H230 V174 H88 A51 51 0 0 1 88 72 Z' fill='#7dd3fc' fill-opacity='0.75' stroke='var(--color-accent-alg)' stroke-width='2.2'/>
  <line x1='88' y1='72' x2='230' y2='72' stroke='var(--color-text-secondary)' stroke-width='1.2' stroke-dasharray='5 5'/>
  <line x1='88' y1='72' x2='88' y2='174' stroke='var(--color-text-secondary)' stroke-width='1.2' stroke-dasharray='5 5'/>
  <text x='159' y='57' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(topDiameter)}</text>
  <text x='242' y='125' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(height)}</text>
  <text x='159' y='197' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(width)}</text>
</svg>`,
      };
    }

    if (template === "cut-corner-arc") {
      const length = randMeasure(8, 20, decimals);
      const height = randMeasure(4, 12, decimals);
      const cut = randMeasure(2, 7, decimals);
      const radius = randMeasure(2, 6, decimals);
      const perimeter = length + height + cut * 2 + (Math.PI * radius) / 2 + Math.max(1, length - cut);
      const conv = withConversion(perimeter, unit);
      return {
        shapeKind: "composite",
        ...conv,
        targetLabel: "Périmètre",
        primaryAnswer: perimeter,
        perimeter,
        svg: `<svg viewBox='0 0 340 225' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:440px;display:block;margin:0 auto'>
  <path d='M55 50 H235 A54 54 0 0 1 289 104 V128 H215 L135 182 H55 Z' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.4' stroke-linejoin='round'/>
  <path d='M55 128 H215 V50' stroke='var(--color-text-secondary)' stroke-width='1.2' stroke-dasharray='5 5'/>
  <text x='145' y='35' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(length)}</text>
  <text x='36' y='100' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif' transform='rotate(-90 36 100)'>${label(height)}</text>
  <text x='175' y='199' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(cut)}</text>
  <text x='282' y='77' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>r = ${label(radius)}</text>
</svg>`,
      };
    }

    if (template === "slanted-cap") {
      const length = randMeasure(8, 20, decimals);
      const height = randMeasure(4, 12, decimals);
      const side = randMeasure(3, 9, decimals);
      const perimeter = length * 2 + height + side * 2;
      const conv = withConversion(perimeter, unit);
      return {
        shapeKind: "composite",
        ...conv,
        targetLabel: "Périmètre",
        primaryAnswer: perimeter,
        perimeter,
        svg: `<svg viewBox='0 0 330 205' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:430px;display:block;margin:0 auto'>
  <path d='M55 42 H220 L276 100 L220 158 H55 Z' fill='#7dd3fc' fill-opacity='0.70' stroke='var(--color-accent-alg)' stroke-width='2.3' stroke-linejoin='round'/>
  <line x1='220' y1='42' x2='220' y2='158' stroke='var(--color-text-secondary)' stroke-width='1.2' stroke-dasharray='5 5'/>
  <text x='137' y='29' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(length)}</text>
  <text x='35' y='104' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif' transform='rotate(-90 35 104)'>${label(height)}</text>
  <text x='261' y='74' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif' transform='rotate(48 261 74)'>${label(side)}</text>
</svg>`,
      };
    }

    if (template === "quarter-arc-combo") {
      const base = randMeasure(8, 22, decimals);
      const height = randMeasure(5, 14, decimals);
      const rise = randMeasure(3, 10, decimals);
      const radius = randMeasure(3, 10, decimals);
      const perimeter = base + height + rise + Math.max(1, base - radius) + (Math.PI * radius) / 2 + Math.hypot(base / 2, rise);
      const conv = withConversion(perimeter, unit);
      return {
        shapeKind: "composite",
        ...conv,
        targetLabel: "Périmètre",
        primaryAnswer: perimeter,
        perimeter,
        svg: `<svg viewBox='0 0 360 240' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:460px;display:block;margin:0 auto'>
  <path d='M55 172 H210 A90 90 0 0 0 300 82 L230 40 V90 H55 Z' fill='var(--color-accent-alg)' fill-opacity='0.08' stroke='var(--color-accent-alg)' stroke-width='2.3' stroke-linejoin='round'/>
  <path d='M210 172 V90 H55' stroke='var(--color-text-secondary)' stroke-width='1.2' stroke-dasharray='5 5'/>
  <text x='130' y='196' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(base)}</text>
  <text x='35' y='132' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif' transform='rotate(-90 35 132)'>${label(height)}</text>
  <text x='226' y='69' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(rise)}</text>
  <text x='296' y='129' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>r = ${label(radius)}</text>
</svg>`,
      };
    }

    const top = randMeasure(6, 16, decimals);
    const right = randMeasure(4, 12, decimals);
    const bottom = randMeasure(top + 1, top + 8, decimals);
    const left = randMeasure(4, 12, decimals);
    const diagonal = randMeasure(2, 7, decimals);
    const perimeter = top + right + bottom + left + diagonal;
    const conv = withConversion(perimeter, unit);
    return {
      shapeKind: "composite",
      ...conv,
      targetLabel: "Périmètre",
      primaryAnswer: perimeter,
      perimeter,
      svg: `<svg viewBox='0 0 320 210' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:430px;display:block;margin:0 auto'>
  <path d='M55 65 L95 42 H245 V160 H55 Z' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <text x='170' y='32' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(top)}</text>
  <text x='257' y='108' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(right)}</text>
  <text x='150' y='181' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(bottom)}</text>
  <text x='35' y='119' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(left)}</text>
  <text x='70' y='48' text-anchor='end' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(diagonal)}</text>
</svg>`,
    };
  }

  const template = pick(["notched", "slant", "cut-corner", "trapezoid-x", "arrow-x", "step-x"] as const);

  if (template === "notched") {
    const side = randMeasure(2, 8, decimals);
    const x = randMeasure(4, 14, decimals);
    const perimeter = x * 4 + side * 6;
    const conv = withConversion(x, unit);
    return {
      shapeKind: "composite",
      ...conv,
      targetLabel: "Côté x",
      primaryAnswer: x,
      perimeter,
      svg: `<svg viewBox='0 0 300 270' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:390px;display:block;margin:0 auto'>
  <path d='M150 28 L178 56 L190 44 L242 96 L214 124 L226 136 L150 242 L74 136 L86 124 L58 96 L110 44 L122 56 Z' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <text x='82' y='72' font-size='15' fill='var(--color-accent-alg)' font-weight='bold' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>x</text>
  <text x='232' y='116' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif' transform='rotate(48 232 116)'>${label(side)}</text>
  <text x='150' y='260' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${perimeterLabel(perimeter)}</text>
</svg>`,
    };
  }

  if (template === "slant") {
    const x = randMeasure(5, 18, decimals);
    const base = randMeasure(7, 22, decimals);
    const vertical = randMeasure(5, 18, decimals);
    const perimeter = x * 2 + base + vertical * 2;
    const conv = withConversion(x, unit);
    return {
      shapeKind: "composite",
      ...conv,
      targetLabel: "Côté x",
      primaryAnswer: x,
      perimeter,
      svg: `<svg viewBox='0 0 330 230' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:430px;display:block;margin:0 auto'>
  <path d='M45 55 H210 L280 125 V195 H125 L45 115 Z' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <text x='238' y='88' font-size='15' fill='var(--color-accent-alg)' font-weight='bold' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>x</text>
  <text x='200' y='217' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(base)}</text>
  <text x='288' y='161' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(vertical)}</text>
  <text x='165' y='25' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${perimeterLabel(perimeter)}</text>
</svg>`,
    };
  }

  if (template === "trapezoid-x") {
    const left = randMeasure(5, 16, decimals);
    const right = randMeasure(left + 1, left + 8, decimals);
    const base = randMeasure(8, 20, decimals);
    const x = randMeasure(7, 22, decimals);
    const perimeter = left + right + base + x;
    const conv = withConversion(x, unit);
    return {
      shapeKind: "composite",
      ...conv,
      targetLabel: "Côté x",
      primaryAnswer: x,
      perimeter,
      svg: `<svg viewBox='0 0 320 220' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:420px;display:block;margin:0 auto'>
  <path d='M65 65 L245 42 V168 H65 Z' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <text x='155' y='34' text-anchor='middle' font-size='15' fill='var(--color-accent-alg)' font-weight='bold' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>x</text>
  <text x='36' y='116' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif' transform='rotate(-90 36 116)'>${label(left)}</text>
  <text x='257' y='108' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif' transform='rotate(90 257 108)'>${label(right)}</text>
  <text x='155' y='188' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(base)}</text>
  <text x='160' y='210' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${perimeterLabel(perimeter)}</text>
</svg>`,
    };
  }

  if (template === "arrow-x") {
    const top = randMeasure(7, 18, decimals);
    const side = randMeasure(3, 10, decimals);
    const x = randMeasure(4, 16, decimals);
    const perimeter = x + top * 2 + side * 2;
    const conv = withConversion(x, unit);
    return {
      shapeKind: "composite",
      ...conv,
      targetLabel: "Côté x",
      primaryAnswer: x,
      perimeter,
      svg: `<svg viewBox='0 0 330 220' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:430px;display:block;margin:0 auto'>
  <path d='M65 55 H215 L270 110 L215 165 H65 Z' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <text x='45' y='114' font-size='15' fill='var(--color-accent-alg)' font-weight='bold' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>x</text>
  <text x='140' y='42' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(top)}</text>
  <text x='244' y='86' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif' transform='rotate(45 244 86)'>${label(side)}</text>
  <text x='160' y='202' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${perimeterLabel(perimeter)}</text>
</svg>`,
    };
  }

  if (template === "step-x") {
    const top = randMeasure(5, 14, decimals);
    const notch = randMeasure(2, 7, decimals);
    const x = randMeasure(6, 18, decimals);
    const perimeter = x + top * 2 + notch * 3;
    const conv = withConversion(x, unit);
    return {
      shapeKind: "composite",
      ...conv,
      targetLabel: "Côté x",
      primaryAnswer: x,
      perimeter,
      svg: `<svg viewBox='0 0 330 230' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:430px;display:block;margin:0 auto'>
  <path d='M60 45 H230 V95 H285 V185 H60 Z' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <text x='42' y='116' font-size='15' fill='var(--color-accent-alg)' font-weight='bold' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>x</text>
  <text x='145' y='33' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(top)}</text>
  <text x='257' y='87' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(notch)}</text>
  <text x='160' y='210' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${perimeterLabel(perimeter)}</text>
</svg>`,
    };
  }

  const x = randMeasure(3, 12, decimals);
  const top = randMeasure(7, 18, decimals);
  const right = randMeasure(5, 14, decimals);
  const bottom = randMeasure(top + 1, top + 7, decimals);
  const left = randMeasure(5, 14, decimals);
  const perimeter = x + top + right + bottom + left;
  const conv = withConversion(x, unit);
  return {
    shapeKind: "composite",
    ...conv,
    targetLabel: "Côté x",
    primaryAnswer: x,
    perimeter,
    svg: `<svg viewBox='0 0 320 220' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:430px;display:block;margin:0 auto'>
  <path d='M55 70 L98 45 H250 V162 H55 Z' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <text x='72' y='45' font-size='15' fill='var(--color-accent-alg)' font-weight='bold' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>x</text>
  <text x='174' y='34' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(top)}</text>
  <text x='262' y='108' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(right)}</text>
  <text x='152' y='184' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(bottom)}</text>
  <text x='33' y='122' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label(left)}</text>
  <text x='160' y='205' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${perimeterLabel(perimeter)}</text>
</svg>`,
  };
}

function makeFigure(shapeKind: G2ShapeKind, mode: ExerciseMode, decimals: boolean): FigureData {
  const unit = pick(UNITS);

  if (shapeKind === "composite") {
    return makeCompositeFigure(mode, decimals, unit);
  }

  if (shapeKind === "square") {
    const side = randMeasure(3, 20, decimals);
    const perimeter = side * 4;
    if (mode === "missing") {
      const conv = withConversion(side, unit);
      return {
        shapeKind,
        ...conv,
        targetLabel: "Côté",
        primaryAnswer: side,
        perimeter,
        svg: `<svg viewBox='0 0 220 170' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:320px;display:block;margin:0 auto'>
  <rect x='55' y='35' width='110' height='110' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <text x='110' y='25' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>?</text>
  <text x='110' y='164' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>Périmètre = ${fmt(perimeter)} ${unit}</text>
</svg>`,
      };
    }
    const conv = withConversion(perimeter, unit);
    return {
      shapeKind,
      ...conv,
      targetLabel: "Périmètre",
      primaryAnswer: perimeter,
      perimeter,
      svg: `<svg viewBox='0 0 220 170' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:320px;display:block;margin:0 auto'>
  <rect x='55' y='35' width='110' height='110' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <text x='110' y='25' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${fmt(side)} ${unit}</text>
</svg>`,
    };
  }

  if (shapeKind === "rectangle") {
    const length = randMeasure(8, 25, decimals);
    const width = randMeasure(3, Math.max(4, Math.floor(length - 2)), decimals);
    const perimeter = 2 * (length + width);
    if (mode === "missing") {
      const findLength = Math.random() > 0.5;
      const known = findLength ? width : length;
      const answer = findLength ? length : width;
      const label = findLength ? "Longueur" : "Largeur";
      const conv = withConversion(answer, unit);
      return {
        shapeKind,
        ...conv,
        targetLabel: label,
        primaryAnswer: answer,
        perimeter,
        svg: `<svg viewBox='0 0 260 170' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:360px;display:block;margin:0 auto'>
  <rect x='35' y='45' width='170' height='80' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <text x='120' y='35' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${findLength ? "?" : `${fmt(length)} ${unit}`}</text>
  <text x='218' y='88' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${findLength ? `${fmt(known)} ${unit}` : "?"}</text>
  <text x='120' y='153' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>Périmètre = ${fmt(perimeter)} ${unit}</text>
</svg>`,
      };
    }
    const conv = withConversion(perimeter, unit);
    return {
      shapeKind,
      ...conv,
      targetLabel: "Périmètre",
      primaryAnswer: perimeter,
      perimeter,
      svg: `<svg viewBox='0 0 260 150' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:360px;display:block;margin:0 auto'>
  <rect x='35' y='35' width='170' height='80' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <text x='120' y='25' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${fmt(length)} ${unit}</text>
  <text x='218' y='78' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${fmt(width)} ${unit}</text>
</svg>`,
    };
  }

  if (shapeKind === "triangle") {
    const a = randMeasure(5, 18, decimals);
    const b = randMeasure(5, 18, decimals);
    const c = randMeasure(Math.ceil(Math.abs(a - b) + 2), Math.floor(a + b - 2), decimals);
    const perimeter = a + b + c;
    const missingIdx = randInt(0, 2);
    const values = [a, b, c];
    if (mode === "missing") {
      const answer = values[missingIdx]!;
      const conv = withConversion(answer, unit);
      return {
        shapeKind,
        ...conv,
        targetLabel: "Côté",
        primaryAnswer: answer,
        perimeter,
        svg: `<svg viewBox='0 0 300 190' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:380px;display:block;margin:0 auto'>
  <polygon points='135,28 246,138 42,138' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <text x='144' y='166' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${missingIdx === 2 ? "?" : `${fmt(c)} ${unit}`}</text>
  <text x='68' y='73' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${missingIdx === 0 ? "?" : `${fmt(a)} ${unit}`}</text>
  <text x='235' y='82' text-anchor='start' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${missingIdx === 1 ? "?" : `${fmt(b)} ${unit}`}</text>
  <text x='150' y='16' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>Périmètre = ${fmt(perimeter)} ${unit}</text>
</svg>`,
      };
    }
    const conv = withConversion(perimeter, unit);
    return {
      shapeKind,
      ...conv,
      targetLabel: "Périmètre",
      primaryAnswer: perimeter,
      perimeter,
      svg: `<svg viewBox='0 0 300 175' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:380px;display:block;margin:0 auto'>
  <polygon points='135,22 246,132 42,132' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <text x='144' y='162' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${fmt(c)} ${unit}</text>
  <text x='68' y='69' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${fmt(a)} ${unit}</text>
  <text x='235' y='78' text-anchor='start' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${fmt(b)} ${unit}</text>
</svg>`,
    };
  }

  if (shapeKind === "regular") {
    const sides = pick([5, 6, 8]);
    const side = randMeasure(3, 15, decimals);
    const perimeter = sides * side;
    if (mode === "missing") {
      const conv = withConversion(side, unit);
      return {
        shapeKind,
        ...conv,
        targetLabel: "Côté",
        primaryAnswer: side,
        perimeter,
        svg: regularPolygonSvg(sides, unit, "", `Périmètre = ${fmt(perimeter)} ${unit}`),
      };
    }
    const conv = withConversion(perimeter, unit);
    return {
      shapeKind,
      ...conv,
      targetLabel: "Périmètre",
      primaryAnswer: perimeter,
      perimeter,
      svg: regularPolygonSvg(sides, unit, `${fmt(side)} ${unit}`),
    };
  }

  const useDiameter = Math.random() > 0.5;
  const radius = randMeasure(2, 12, decimals);
  const diameter = radius * 2;
  const perimeter = Math.round((2 * Math.PI * radius) * 100) / 100;
  if (mode === "missing") {
    const targetDiameter = Math.random() > 0.5;
    const answer = targetDiameter ? diameter : radius;
    const conv = withConversion(answer, unit);
    return {
      shapeKind,
      ...conv,
      targetLabel: targetDiameter ? "Diamètre" : "Rayon",
      primaryAnswer: answer,
      perimeter,
      svg: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:340px;display:block;margin:0 auto'>
  <circle cx='120' cy='85' r='58' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <line x1='120' y1='85' x2='178' y2='85' stroke='#f97316' stroke-width='2.2'/>
  <line x1='120' y1='27' x2='120' y2='143' stroke='var(--color-accent-alg)' stroke-width='1.6' stroke-dasharray='4 3'/>
  <text x='120' y='165' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>Périmètre = ${fmt(perimeter)} ${unit}</text>
</svg>`,
    };
  }
  const givenLabel = useDiameter ? `d = ${fmt(diameter)} ${unit}` : `r = ${fmt(radius)} ${unit}`;
  const conv = withConversion(perimeter, unit);
  return {
    shapeKind,
    ...conv,
    targetLabel: "Périmètre",
    primaryAnswer: perimeter,
    perimeter,
    svg: `<svg viewBox='0 0 240 165' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:340px;display:block;margin:0 auto'>
  <circle cx='120' cy='80' r='58' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <line x1='120' y1='80' x2='178' y2='80' stroke='#f97316' stroke-width='2.2'/>
  <line x1='120' y1='22' x2='120' y2='138' stroke='var(--color-accent-alg)' stroke-width='1.6' stroke-dasharray='4 3'/>
  <text x='120' y='155' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${givenLabel}</text>
</svg>`,
  };
}

function regularPolygonSvg(sides: number, unit: Unit, label: string, perimeterLabel?: string): string {
  const points = Array.from({ length: sides }, (_, i) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / sides;
    const x = 120 + 58 * Math.cos(angle);
    const y = 82 + 58 * Math.sin(angle);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:340px;display:block;margin:0 auto'>
  <polygon points='${points}' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <text x='120' y='160' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${label}</text>
  ${perimeterLabel ? `<text x='120' y='175' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='Century Gothic, CenturyGothic, AppleGothic, Nunito, sans-serif'>${perimeterLabel}</text>` : ""}
</svg>`;
}

export function G2PerimeterExercise({ exNum, shapeKind, mode, decimals = false, validateCommand, onValidated }: Props) {
  const questionCount = usePrintQuestionCount(1);
  const columns = usePrintColumns();
  const figures = useMemo(
    () => Array.from({ length: questionCount }, () => makeFigure(shapeKind, mode, decimals)),
    [questionCount, shapeKind, mode, decimals]
  );
  const [answers, setAnswers] = useState<AnswerState[]>(() =>
    Array.from({ length: questionCount }, () => ({
      primary: "",
      converted: "",
      checked: false,
      primaryOk: false,
      convertedOk: false,
    }))
  );
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    let correct = 0;
    const total = figures.length * 2;
    const next = answers.map((ans, i) => {
      const figure = figures[i]!;
      const primaryOk = isClose(ans.primary, figure.primaryAnswer);
      const convertedOk = isClose(ans.converted, figure.convertedAnswer);
      if (primaryOk) correct++;
      if (convertedOk) correct++;
      return { ...ans, checked: true, primaryOk, convertedOk };
    });
    setAnswers(next);
    onValidated(correct === total, correct, total);
  }, [answers, figures, onValidated]);

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand;
      doValidate();
    }
  }, [validateCommand, doValidate]);

  const title = mode === "perimeter" ? "Calculez le périmètre." : "Trouvez la mesure du côté.";

  function setValue(idx: number, key: "primary" | "converted", value: string) {
    setAnswers((prev) => prev.map((a, i) => i === idx ? { ...a, [key]: value, checked: false } : a));
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{title}</p>
      </div>

      <div className={printQuestionsListClass(columns, "space-y-6")}>
        {figures.map((figure, fi) => {
          const ans = answers[fi]!;
          return (
            <div key={fi} className="space-y-3">
              {figures.length > 1 && (
                <span className="text-sm font-bold text-[var(--color-accent-alg)]">{fi + 1}.</span>
              )}
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4">
                <div dangerouslySetInnerHTML={{ __html: figure.svg }} />
              </div>
              <div className="space-y-3">
                <AnswerLine
                  label={figure.targetLabel}
                  value={ans.primary}
                  unit={figure.unit}
                  checked={ans.checked}
                  ok={ans.primaryOk}
                  correct={figure.primaryAnswer}
                  onChange={(value) => setValue(fi, "primary", value)}
                  revealCorrection={revealCorrection}
                />
                <AnswerLine
                  label=""
                  value={ans.converted}
                  unit={figure.convertUnit}
                  checked={ans.checked}
                  ok={ans.convertedOk}
                  correct={figure.convertedAnswer}
                  onChange={(value) => setValue(fi, "converted", value)}
                  revealCorrection={revealCorrection}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AnswerLine({
  label,
  value,
  unit,
  checked,
  ok,
  correct,
  onChange,
  revealCorrection,
}: {
  label: string;
  value: string;
  unit: Unit;
  checked: boolean;
  ok: boolean;
  correct: number;
  onChange: (value: string) => void;
  revealCorrection: boolean;
}) {
  return (
    <div className="inline-flex w-auto items-end gap-2 text-sm">
      <span className="w-24 shrink-0 font-medium text-[var(--color-text-primary)]">{label}</span>
      <span className="w-3 shrink-0 pb-1 text-center font-medium text-[var(--color-text-primary)]">:</span>
      {checked && !ok && revealCorrection ? (
        <div className="flex h-9 w-24 flex-col items-center justify-center rounded-none border-0 border-b-2 border-amber-500 bg-transparent px-1">
          <span className="text-[10px] leading-none text-[var(--color-text-primary)] line-through">{value || "—"}</span>
          <span className="text-xs font-bold leading-none text-amber-600">{fmt(correct)}</span>
        </div>
      ) : (
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass(revealCorrection ? ok : true, checked)}
          readOnly={checked}
        />
      )}
      <span className="shrink-0 pb-1 text-[var(--color-text-secondary)]">{unit}</span>
    </div>
  );
}

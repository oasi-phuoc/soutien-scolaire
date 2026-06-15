"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type G3ShapeKind = "square" | "rectangle" | "triangle" | "parallelogram" | "trapezoid" | "circle" | "rhombus" | "composite";
type ExerciseMode = "area" | "missing";

type Props = {
  exNum: number;
  shapeKind: G3ShapeKind;
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
  unit: Unit;
  convertUnit: Unit;
  targetLabel: string;
  primaryAnswer: number;
  convertedAnswer: number;
  area: number;
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
  return pick(UNITS.filter((u) => u !== unit));
}

function convertArea(value: number, from: Unit, to: Unit): number {
  return (value * UNIT_TO_M[from] ** 2) / UNIT_TO_M[to] ** 2;
}

function fmt(value: number): string {
  const rounded = Math.round(value * 1000) / 1000;
  return Number.isInteger(rounded) ? String(rounded) : String(rounded).replace(".", ",");
}

function parseNumber(value: string): number | null {
  const parsed = Number(value.trim().replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(parsed) ? parsed : null;
}

function isClose(user: string, expected: number): boolean {
  const parsed = parseNumber(user);
  if (parsed === null) return false;
  const tolerance = Math.max(0.01, Math.abs(expected) * 0.001);
  return Math.abs(parsed - expected) <= tolerance;
}

function inputClass(ok: boolean, checked: boolean): string {
  const base = "h-9 w-24 rounded-none border-0 border-b-2 bg-transparent px-1 py-1 text-center text-sm outline-none transition-colors";
  if (!checked) return `${base} border-[var(--color-accent-alg)]/70 focus:border-amber-500`;
  return ok ? `${base} border-[var(--color-accent-alg)]` : `${base} border-amber-500`;
}

function areaUnit(unit: Unit): string {
  return `${unit}²`;
}

function withAreaConversion(value: number, unit: Unit): Pick<FigureData, "unit" | "convertUnit" | "convertedAnswer"> {
  const convertUnit = pickOtherUnit(unit);
  return { unit, convertUnit, convertedAnswer: convertArea(value, unit, convertUnit) };
}

function makeFigure(shapeKind: G3ShapeKind, mode: ExerciseMode, decimals: boolean): FigureData {
  const unit = pick(UNITS);

  if (shapeKind === "square") {
    const side = randMeasure(3, 20, decimals);
    const area = side * side;
    if (mode === "missing") {
      const conv = withAreaConversion(side, unit);
      return {
        ...conv,
        targetLabel: "Côté",
        primaryAnswer: side,
        area,
        svg: `<svg viewBox='0 0 230 180' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:330px;display:block;margin:0 auto'>
  <rect x='60' y='38' width='110' height='110' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <text x='115' y='28' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>Aire = ${fmt(area)} ${areaUnit(unit)}</text>
</svg>`,
      };
    }
    const conv = withAreaConversion(area, unit);
    return {
      ...conv,
      targetLabel: "Aire",
      primaryAnswer: area,
      area,
      svg: `<svg viewBox='0 0 230 165' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:330px;display:block;margin:0 auto'>
  <rect x='60' y='35' width='110' height='110' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <text x='115' y='25' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(side)} ${unit}</text>
</svg>`,
    };
  }

  if (shapeKind === "rectangle") {
    const length = randMeasure(8, 25, decimals);
    const width = randMeasure(3, Math.max(4, Math.floor(length - 2)), decimals);
    const area = length * width;
    if (mode === "missing") {
      const findLength = Math.random() > 0.5;
      const answer = findLength ? length : width;
      const conv = withAreaConversion(answer, unit);
      return {
        ...conv,
        targetLabel: findLength ? "Longueur" : "Largeur",
        primaryAnswer: answer,
        area,
        svg: `<svg viewBox='0 0 280 180' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:380px;display:block;margin:0 auto'>
  <rect x='45' y='48' width='170' height='82' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <text x='130' y='37' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${findLength ? "x" : `${fmt(length)} ${unit}`}</text>
  <text x='228' y='93' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${findLength ? `${fmt(width)} ${unit}` : "x"}</text>
  <text x='130' y='158' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>Aire = ${fmt(area)} ${areaUnit(unit)}</text>
</svg>`,
      };
    }
    const conv = withAreaConversion(area, unit);
    return {
      ...conv,
      targetLabel: "Aire",
      primaryAnswer: area,
      area,
      svg: `<svg viewBox='0 0 280 160' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:380px;display:block;margin:0 auto'>
  <rect x='45' y='40' width='170' height='82' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <text x='130' y='29' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(length)} ${unit}</text>
  <text x='228' y='85' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(width)} ${unit}</text>
</svg>`,
    };
  }

  if (shapeKind === "triangle") {
    const base = randMeasure(6, 22, decimals);
    const height = randMeasure(4, 16, decimals);
    const side = randMeasure(5, 18, decimals);
    const area = (base * height) / 2;
    if (mode === "missing") {
      const findBase = Math.random() > 0.5;
      const answer = findBase ? base : height;
      const conv = withAreaConversion(answer, unit);
      return {
        ...conv,
        targetLabel: findBase ? "Base" : "Hauteur",
        primaryAnswer: answer,
        area,
        svg: `<svg viewBox='0 0 310 205' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:400px;display:block;margin:0 auto'>
  <polygon points='70,158 250,158 142,38' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <line x1='142' y1='38' x2='142' y2='158' stroke='var(--color-text-secondary)' stroke-width='1.4' stroke-dasharray='5 5'/>
  <text x='160' y='180' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${findBase ? "x" : `${fmt(base)} ${unit}`}</text>
  <text x='152' y='102' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${findBase ? `${fmt(height)} ${unit}` : "x"}</text>
  <text x='160' y='22' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>Aire = ${fmt(area)} ${areaUnit(unit)}</text>
</svg>`,
      };
    }
    const conv = withAreaConversion(area, unit);
    return {
      ...conv,
      targetLabel: "Aire",
      primaryAnswer: area,
      area,
      svg: `<svg viewBox='0 0 310 195' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:400px;display:block;margin:0 auto'>
  <polygon points='70,152 250,152 142,35' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <line x1='142' y1='35' x2='142' y2='152' stroke='var(--color-text-secondary)' stroke-width='1.4' stroke-dasharray='5 5'/>
  <text x='160' y='176' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(base)} ${unit}</text>
  <text x='153' y='100' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>h = ${fmt(height)} ${unit}</text>
  <text x='86' y='91' text-anchor='end' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(side)} ${unit}</text>
</svg>`,
    };
  }

  if (shapeKind === "parallelogram") {
    const base = randMeasure(7, 22, decimals);
    const height = randMeasure(4, 14, decimals);
    const side = randMeasure(4, 12, decimals);
    const area = base * height;
    if (mode === "missing") {
      const findBase = Math.random() > 0.5;
      const answer = findBase ? base : height;
      const conv = withAreaConversion(answer, unit);
      return {
        ...conv,
        targetLabel: findBase ? "Base" : "Hauteur",
        primaryAnswer: answer,
        area,
        svg: `<svg viewBox='0 0 320 200' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:410px;display:block;margin:0 auto'>
  <polygon points='85,45 250,45 210,150 45,150' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <line x1='250' y1='45' x2='250' y2='150' stroke='var(--color-text-secondary)' stroke-width='1.4' stroke-dasharray='5 5'/>
  <text x='128' y='174' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${findBase ? "x" : `${fmt(base)} ${unit}`}</text>
  <text x='260' y='101' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${findBase ? `${fmt(height)} ${unit}` : "x"}</text>
  <text x='160' y='24' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>Aire = ${fmt(area)} ${areaUnit(unit)}</text>
</svg>`,
      };
    }
    const conv = withAreaConversion(area, unit);
    return {
      ...conv,
      targetLabel: "Aire",
      primaryAnswer: area,
      area,
      svg: `<svg viewBox='0 0 320 190' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:410px;display:block;margin:0 auto'>
  <polygon points='85,40 250,40 210,145 45,145' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <line x1='250' y1='40' x2='250' y2='145' stroke='var(--color-text-secondary)' stroke-width='1.4' stroke-dasharray='5 5'/>
  <text x='128' y='169' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(base)} ${unit}</text>
  <text x='260' y='96' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>h = ${fmt(height)} ${unit}</text>
  <text x='72' y='86' text-anchor='end' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(side)} ${unit}</text>
</svg>`,
    };
  }

  if (shapeKind === "trapezoid") {
    const top = randMeasure(5, 16, decimals);
    const bottom = randMeasure(top + 3, top + 12, decimals);
    const height = randMeasure(4, 14, decimals);
    const area = ((top + bottom) * height) / 2;
    if (mode === "missing") {
      const answer = height;
      const conv = withAreaConversion(answer, unit);
      return {
        ...conv,
        targetLabel: "Hauteur",
        primaryAnswer: answer,
        area,
        svg: `<svg viewBox='0 0 330 205' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:420px;display:block;margin:0 auto'>
  <polygon points='105,45 225,45 270,155 55,155' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <line x1='225' y1='45' x2='225' y2='155' stroke='var(--color-text-secondary)' stroke-width='1.4' stroke-dasharray='5 5'/>
  <text x='165' y='32' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(top)} ${unit}</text>
  <text x='162' y='178' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(bottom)} ${unit}</text>
  <text x='235' y='105' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>x</text>
  <text x='165' y='196' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>Aire = ${fmt(area)} ${areaUnit(unit)}</text>
</svg>`,
      };
    }
    const conv = withAreaConversion(area, unit);
    return {
      ...conv,
      targetLabel: "Aire",
      primaryAnswer: area,
      area,
      svg: `<svg viewBox='0 0 330 195' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:420px;display:block;margin:0 auto'>
  <polygon points='105,42 225,42 270,150 55,150' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <line x1='225' y1='42' x2='225' y2='150' stroke='var(--color-text-secondary)' stroke-width='1.4' stroke-dasharray='5 5'/>
  <text x='165' y='30' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(top)} ${unit}</text>
  <text x='162' y='173' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(bottom)} ${unit}</text>
  <text x='235' y='100' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>h = ${fmt(height)} ${unit}</text>
</svg>`,
    };
  }

  if (shapeKind === "circle") {
    const radius = randMeasure(2, 12, decimals);
    const diameter = radius * 2;
    const area = Math.PI * radius * radius;
    if (mode === "missing") {
      const conv = withAreaConversion(radius, unit);
      return {
        ...conv,
        targetLabel: "Rayon",
        primaryAnswer: radius,
        area,
        svg: `<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:340px;display:block;margin:0 auto'>
  <circle cx='120' cy='82' r='58' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <line x1='120' y1='82' x2='178' y2='82' stroke='#f97316' stroke-width='2.2'/>
  <text x='120' y='162' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>Aire = ${fmt(area)} ${areaUnit(unit)}</text>
</svg>`,
      };
    }
    const conv = withAreaConversion(area, unit);
    return {
      ...conv,
      targetLabel: "Aire",
      primaryAnswer: area,
      area,
      svg: `<svg viewBox='0 0 240 170' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:340px;display:block;margin:0 auto'>
  <circle cx='120' cy='78' r='58' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <line x1='62' y1='78' x2='178' y2='78' stroke='var(--color-accent-alg)' stroke-width='1.5' stroke-dasharray='5 4'/>
  <text x='120' y='154' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>d = ${fmt(diameter)} ${unit}</text>
</svg>`,
    };
  }

  if (shapeKind === "rhombus") {
    const d1 = randMeasure(6, 22, decimals);
    const d2 = randMeasure(4, 18, decimals);
    const area = (d1 * d2) / 2;
    if (mode === "missing") {
      const findD1 = Math.random() > 0.5;
      const answer = findD1 ? d1 : d2;
      const conv = withAreaConversion(answer, unit);
      return {
        ...conv,
        targetLabel: findD1 ? "Diagonale 1" : "Diagonale 2",
        primaryAnswer: answer,
        area,
        svg: `<svg viewBox='0 0 310 205' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:400px;display:block;margin:0 auto'>
  <polygon points='155,35 250,100 155,165 60,100' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <line x1='60' y1='100' x2='250' y2='100' stroke='var(--color-text-secondary)' stroke-width='1.4' stroke-dasharray='5 5'/>
  <line x1='155' y1='35' x2='155' y2='165' stroke='var(--color-text-secondary)' stroke-width='1.4' stroke-dasharray='5 5'/>
  <text x='155' y='190' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${findD1 ? "x" : `d₁ = ${fmt(d1)} ${unit}`}</text>
  <text x='166' y='92' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${findD1 ? `d₂ = ${fmt(d2)} ${unit}` : "x"}</text>
  <text x='155' y='22' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>Aire = ${fmt(area)} ${areaUnit(unit)}</text>
</svg>`,
      };
    }
    const conv = withAreaConversion(area, unit);
    return {
      ...conv,
      targetLabel: "Aire",
      primaryAnswer: area,
      area,
      svg: `<svg viewBox='0 0 310 190' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:400px;display:block;margin:0 auto'>
  <polygon points='155,28 250,95 155,162 60,95' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <line x1='60' y1='95' x2='250' y2='95' stroke='var(--color-text-secondary)' stroke-width='1.4' stroke-dasharray='5 5'/>
  <line x1='155' y1='28' x2='155' y2='162' stroke='var(--color-text-secondary)' stroke-width='1.4' stroke-dasharray='5 5'/>
  <text x='155' y='181' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>d₁ = ${fmt(d1)} ${unit}</text>
  <text x='166' y='87' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>d₂ = ${fmt(d2)} ${unit}</text>
</svg>`,
    };
  }

  return makeCompositeFigure(mode, decimals, unit);
}

function makeCompositeFigure(mode: ExerciseMode, decimals: boolean, unit: Unit): FigureData {
  const label = (value: number) => `${fmt(value)} ${unit}`;
  if (mode === "missing") {
    const width = randMeasure(8, 20, decimals);
    const height = randMeasure(4, 12, decimals);
    const x = randMeasure(3, 10, decimals);
    const area = width * height + (x * x) / 2;
    const conv = withAreaConversion(x, unit);
    return {
      ...conv,
      targetLabel: "Côté x",
      primaryAnswer: x,
      area,
      svg: `<svg viewBox='0 0 340 230' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:440px;display:block;margin:0 auto'>
  <path d='M55 62 H230 V160 H55 Z' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.4'/>
  <polygon points='230,62 286,111 230,160' fill='#f97316' fill-opacity='0.16' stroke='#f97316' stroke-width='2.4'/>
  <text x='142' y='48' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${label(width)}</text>
  <text x='36' y='113' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif' transform='rotate(-90 36 113)'>${label(height)}</text>
  <text x='262' y='90' font-size='15' fill='var(--color-accent-alg)' font-weight='bold' font-family='sans-serif'>x</text>
  <text x='170' y='204' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>Aire = ${fmt(area)} ${areaUnit(unit)}</text>
</svg>`,
    };
  }

  const template = pick(["house", "semicircle", "lshape", "two-rect"] as const);
  if (template === "house") {
    const width = randMeasure(7, 18, decimals);
    const rectH = randMeasure(4, 12, decimals);
    const triH = randMeasure(3, 10, decimals);
    const area = width * rectH + (width * triH) / 2;
    const conv = withAreaConversion(area, unit);
    return {
      ...conv,
      targetLabel: "Aire",
      primaryAnswer: area,
      area,
      svg: `<svg viewBox='0 0 330 230' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:430px;display:block;margin:0 auto'>
  <rect x='65' y='105' width='190' height='82' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.4'/>
  <polygon points='65,105 255,105 160,42' fill='#f97316' fill-opacity='0.16' stroke='#f97316' stroke-width='2.4'/>
  <line x1='160' y1='42' x2='160' y2='105' stroke='var(--color-text-secondary)' stroke-width='1.2' stroke-dasharray='5 5'/>
  <text x='160' y='207' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${label(width)}</text>
  <text x='270' y='151' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${label(rectH)}</text>
  <text x='171' y='78' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>h = ${label(triH)}</text>
</svg>`,
    };
  }

  if (template === "semicircle") {
    const diameter = randMeasure(6, 18, decimals);
    const height = randMeasure(3, 10, decimals);
    const area = diameter * height + (Math.PI * (diameter / 2) ** 2) / 2;
    const conv = withAreaConversion(area, unit);
    return {
      ...conv,
      targetLabel: "Aire",
      primaryAnswer: area,
      area,
      svg: `<svg viewBox='0 0 330 220' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:430px;display:block;margin:0 auto'>
  <path d='M70 91 A90 90 0 0 1 250 91 V180 H70 Z' fill='#7dd3fc' fill-opacity='0.70' stroke='var(--color-accent-alg)' stroke-width='2.4'/>
  <line x1='70' y1='91' x2='250' y2='91' stroke='var(--color-text-secondary)' stroke-width='1.2' stroke-dasharray='5 5'/>
  <text x='160' y='84' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${label(diameter)}</text>
  <text x='263' y='138' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${label(height)}</text>
</svg>`,
    };
  }

  if (template === "lshape") {
    const bigW = randMeasure(10, 22, decimals);
    const bigH = randMeasure(8, 18, decimals);
    const cutW = randMeasure(3, 9, decimals);
    const cutH = randMeasure(3, 9, decimals);
    const area = bigW * bigH - cutW * cutH;
    const conv = withAreaConversion(area, unit);
    return {
      ...conv,
      targetLabel: "Aire",
      primaryAnswer: area,
      area,
      svg: `<svg viewBox='0 0 330 220' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:430px;display:block;margin:0 auto'>
  <path d='M55 45 H245 V100 H185 V175 H55 Z' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.4' stroke-linejoin='round'/>
  <text x='150' y='33' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${label(bigW)}</text>
  <text x='34' y='113' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif' transform='rotate(-90 34 113)'>${label(bigH)}</text>
  <text x='218' y='119' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${label(cutW)}</text>
  <text x='194' y='84' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${label(cutH)}</text>
</svg>`,
    };
  }

  const w1 = randMeasure(5, 14, decimals);
  const h1 = randMeasure(4, 12, decimals);
  const w2 = randMeasure(4, 12, decimals);
  const h2 = randMeasure(3, 10, decimals);
  const area = w1 * h1 + w2 * h2;
  const conv = withAreaConversion(area, unit);
  return {
    ...conv,
    targetLabel: "Aire",
    primaryAnswer: area,
    area,
    svg: `<svg viewBox='0 0 330 210' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:430px;display:block;margin:0 auto'>
  <rect x='60' y='88' width='120' height='75' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2.4'/>
  <rect x='180' y='52' width='82' height='111' fill='#f97316' fill-opacity='0.14' stroke='#f97316' stroke-width='2.4'/>
  <text x='120' y='184' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${label(w1)}</text>
  <text x='42' y='128' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif' transform='rotate(-90 42 128)'>${label(h1)}</text>
  <text x='221' y='42' text-anchor='middle' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${label(w2)}</text>
  <text x='276' y='112' font-size='13' fill='var(--color-text-primary)' font-family='sans-serif'>${label(h2)}</text>
</svg>`,
  };
}

export function G3AreaExercise({ exNum, shapeKind, mode, decimals = false, validateCommand, onValidated }: Props) {
  const figure = useMemo(() => makeFigure(shapeKind, mode, decimals), [shapeKind, mode, decimals]);
  const [answers, setAnswers] = useState<AnswerState>({
    primary: "",
    converted: "",
    checked: false,
    primaryOk: false,
    convertedOk: false,
  });
  const prevCmd = useRef(-1);

  const doValidate = useCallback(() => {
    const primaryOk = isClose(answers.primary, figure.primaryAnswer);
    const convertedOk = isClose(answers.converted, figure.convertedAnswer);
    const correct = (primaryOk ? 1 : 0) + (convertedOk ? 1 : 0);
    setAnswers((prev) => ({ ...prev, checked: true, primaryOk, convertedOk }));
    onValidated(correct === 2, correct, 2);
  }, [answers.primary, answers.converted, figure, onValidated]);

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand;
      doValidate();
    }
  }, [validateCommand, doValidate]);

  const title = mode === "area" ? "Calculez l'aire." : "Trouvez la mesure demandée.";

  function setValue(key: "primary" | "converted", value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value, checked: false }));
  }

  const primaryUnit = mode === "area" ? areaUnit(figure.unit) : figure.unit;
  const convertedUnit = mode === "area" ? areaUnit(figure.convertUnit) : figure.convertUnit;

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{title}</p>
      </div>

      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4">
        <div dangerouslySetInnerHTML={{ __html: figure.svg }} />
      </div>

      <div className="space-y-3">
        <AnswerLine
          label={figure.targetLabel}
          value={answers.primary}
          unit={primaryUnit}
          checked={answers.checked}
          ok={answers.primaryOk}
          correct={figure.primaryAnswer}
          onChange={(value) => setValue("primary", value)}
        />
        <AnswerLine
          label=""
          value={answers.converted}
          unit={convertedUnit}
          checked={answers.checked}
          ok={answers.convertedOk}
          correct={figure.convertedAnswer}
          onChange={(value) => setValue("converted", value)}
        />
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
}: {
  label: string;
  value: string;
  unit: string;
  checked: boolean;
  ok: boolean;
  correct: number;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid grid-cols-[6rem_0.75rem_auto_auto] items-end gap-2 text-sm">
      <span className="font-medium text-[var(--color-text-primary)]">{label}</span>
      <span className="pb-1 text-center font-medium text-[var(--color-text-primary)]">:</span>
      {checked && !ok ? (
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
          className={inputClass(ok, checked)}
          readOnly={checked && ok}
        />
      )}
      <span className="pb-1 text-[var(--color-text-secondary)]">{unit}</span>
    </div>
  );
}

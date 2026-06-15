"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type VolumeKind = "cube" | "cuboid" | "prism" | "cylinder" | "pyramid" | "cone_sphere";
type ExerciseMode = "volume" | "missing";

type Props = {
  exNum: number;
  solidKind: VolumeKind;
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

function convertVolume(value: number, from: Unit, to: Unit): number {
  return (value * UNIT_TO_M[from] ** 3) / UNIT_TO_M[to] ** 3;
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

function volumeUnit(unit: Unit): string {
  return `${unit}³`;
}

function areaUnit(unit: Unit): string {
  return `${unit}²`;
}

function withConversion(value: number, unit: Unit): Pick<FigureData, "unit" | "convertUnit" | "convertedAnswer"> {
  const convertUnit = pickOtherUnit(unit);
  return { unit, convertUnit, convertedAnswer: convertVolume(value, unit, convertUnit) };
}

function boxSvg(label: (v: number) => string, l: number, w: number, h: number, missing?: "l" | "w" | "h"): string {
  return `<svg viewBox='0 0 270 180' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:340px;display:block;margin:0 auto'>
  <path d='M55 72 h118 v62 H55 Z' fill='var(--color-accent-alg)' fill-opacity='.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <path d='M55 72 L92 42 h118 l-37 30 M173 72 l37-30 v62 l-37 30' fill='none' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <text x='114' y='153' text-anchor='middle' font-size='13' fill='var(--color-text-primary)'>${missing === "l" ? "x" : label(l)}</text>
  <text x='216' y='66' font-size='13' fill='var(--color-text-primary)'>${missing === "w" ? "x" : label(w)}</text>
  <text x='39' y='106' font-size='13' fill='var(--color-text-primary)'>${missing === "h" ? "x" : label(h)}</text>
</svg>`;
}

function cylinderSvg(label: (v: number) => string, r: number, h: number, missing?: "r" | "h"): string {
  return `<svg viewBox='0 0 230 180' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:300px;display:block;margin:0 auto'>
  <ellipse cx='112' cy='45' rx='55' ry='18' fill='var(--color-accent-alg)' fill-opacity='.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <path d='M57 45 v86 M167 45 v86' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <ellipse cx='112' cy='131' rx='55' ry='18' fill='var(--color-accent-alg)' fill-opacity='.08' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <line x1='112' y1='45' x2='167' y2='45' stroke='#f97316' stroke-width='2.2'/>
  <text x='138' y='38' font-size='13' fill='#f97316' font-weight='bold'>${missing === "r" ? "x" : label(r)}</text>
  <text x='179' y='93' font-size='13' fill='var(--color-text-primary)'>${missing === "h" ? "x" : label(h)}</text>
</svg>`;
}

function pyramidSvg(label: (v: number) => string, unit: Unit, baseArea: number, h: number, missing?: "base" | "h"): string {
  return `<svg viewBox='0 0 250 180' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:320px;display:block;margin:0 auto'>
  <polygon points='50,132 160,132 200,94 92,94' fill='var(--color-accent-alg)' fill-opacity='.10' stroke='var(--color-accent-alg)' stroke-width='2.4'/>
  <path d='M124 30 L50 132 M124 30 L160 132 M124 30 L200 94 M124 30 L92 94' fill='none' stroke='var(--color-accent-alg)' stroke-width='2.4'/>
  <line x1='124' y1='30' x2='124' y2='114' stroke='var(--color-text-secondary)' stroke-width='1.4' stroke-dasharray='5 5'/>
  <text x='134' y='78' font-size='13' fill='var(--color-text-primary)'>${missing === "h" ? "x" : label(h)}</text>
  <text x='124' y='154' text-anchor='middle' font-size='13' fill='var(--color-text-primary)'>B = ${missing === "base" ? "x" : `${fmt(baseArea)} ${areaUnit(unit)}`}</text>
</svg>`;
}

function makeFigure(solidKind: VolumeKind, mode: ExerciseMode, decimals: boolean): FigureData {
  const unit = pick(UNITS);
  const label = (v: number) => `${fmt(v)} ${unit}`;

  if (solidKind === "cube") {
    const c = randMeasure(3, 15, decimals);
    const volume = c ** 3;
    const conv = withConversion(mode === "missing" ? c : volume, unit);
    return { ...conv, targetLabel: mode === "missing" ? "Côté" : "Volume", primaryAnswer: mode === "missing" ? c : volume, svg: boxSvg(label, c, c, c, mode === "missing" ? "l" : undefined) };
  }

  if (solidKind === "cuboid") {
    const l = randMeasure(5, 18, decimals), w = randMeasure(3, 12, decimals), h = randMeasure(3, 12, decimals);
    const volume = l * w * h;
    if (mode === "missing") {
      const missing = pick(["l", "w", "h"] as const);
      const answer = missing === "l" ? l : missing === "w" ? w : h;
      const conv = withConversion(answer, unit);
      return { ...conv, targetLabel: missing === "l" ? "Longueur" : missing === "w" ? "Largeur" : "Hauteur", primaryAnswer: answer, svg: boxSvg(label, l, w, h, missing) };
    }
    const conv = withConversion(volume, unit);
    return { ...conv, targetLabel: "Volume", primaryAnswer: volume, svg: boxSvg(label, l, w, h) };
  }

  if (solidKind === "prism") {
    const baseArea = randMeasure(8, 45, decimals);
    const h = randMeasure(4, 14, decimals);
    const volume = baseArea * h;
    if (mode === "missing") {
      const findBase = Math.random() > 0.5;
      const answer = findBase ? baseArea : h;
      const conv = withConversion(answer, unit);
      return { ...conv, targetLabel: findBase ? "Aire de base" : "Hauteur", primaryAnswer: answer, svg: pyramidSvg(label, unit, baseArea, h, findBase ? "base" : "h") };
    }
    const conv = withConversion(volume, unit);
    return { ...conv, targetLabel: "Volume", primaryAnswer: volume, svg: pyramidSvg(label, unit, baseArea, h) };
  }

  if (solidKind === "cylinder") {
    const r = randMeasure(2, 9, decimals), h = randMeasure(4, 16, decimals);
    const volume = Math.PI * r * r * h;
    if (mode === "missing") {
      const findH = Math.random() > 0.5;
      const answer = findH ? h : r;
      const conv = withConversion(answer, unit);
      return { ...conv, targetLabel: findH ? "Hauteur" : "Rayon", primaryAnswer: answer, svg: cylinderSvg(label, r, h, findH ? "h" : "r") };
    }
    const conv = withConversion(volume, unit);
    return { ...conv, targetLabel: "Volume", primaryAnswer: volume, svg: cylinderSvg(label, r, h) };
  }

  if (solidKind === "pyramid") {
    const baseArea = randMeasure(12, 60, decimals);
    const h = randMeasure(4, 16, decimals);
    const volume = (baseArea * h) / 3;
    if (mode === "missing") {
      const answer = h;
      const conv = withConversion(answer, unit);
      return { ...conv, targetLabel: "Hauteur", primaryAnswer: answer, svg: pyramidSvg(label, unit, baseArea, h, "h") };
    }
    const conv = withConversion(volume, unit);
    return { ...conv, targetLabel: "Volume", primaryAnswer: volume, svg: pyramidSvg(label, unit, baseArea, h) };
  }

  const cone = Math.random() > 0.5;
  const r = randMeasure(2, 9, decimals), h = randMeasure(4, 16, decimals);
  const volume = cone ? (Math.PI * r * r * h) / 3 : (4 * Math.PI * r ** 3) / 3;
  const conv = withConversion(volume, unit);
  return { ...conv, targetLabel: "Volume", primaryAnswer: volume, svg: cone ? cylinderSvg(label, r, h) : cylinderSvg(label, r, r * 2) };
}

export function G5VolumeExercise({ exNum, solidKind, mode, decimals = false, validateCommand, onValidated }: Props) {
  const figure = useMemo(() => makeFigure(solidKind, mode, decimals), [solidKind, mode, decimals]);
  const [answers, setAnswers] = useState<AnswerState>({ primary: "", converted: "", checked: false, primaryOk: false, convertedOk: false });
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

  const title = mode === "volume" ? "Calculez le volume." : "Trouvez la mesure demandée.";
  const primaryUnit = mode === "volume" ? volumeUnit(figure.unit) : figure.unit;
  const convertedUnit = mode === "volume" ? volumeUnit(figure.convertUnit) : figure.convertUnit;

  function setValue(key: "primary" | "converted", value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value, checked: false }));
  }

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
        <AnswerLine label={figure.targetLabel} value={answers.primary} unit={primaryUnit} checked={answers.checked} ok={answers.primaryOk} correct={figure.primaryAnswer} onChange={(value) => setValue("primary", value)} />
        <AnswerLine label="" value={answers.converted} unit={convertedUnit} checked={answers.checked} ok={answers.convertedOk} correct={figure.convertedAnswer} onChange={(value) => setValue("converted", value)} />
      </div>
    </div>
  );
}

function AnswerLine({
  label, value, unit, checked, ok, correct, onChange,
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
    <div className="inline-flex w-auto items-end gap-2 text-sm">
      <span className="w-24 shrink-0 font-medium text-[var(--color-text-primary)]">{label}</span>
      <span className="w-3 shrink-0 pb-1 text-center font-medium text-[var(--color-text-primary)]">:</span>
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
          onChange={(e) => onChange(e.target.value.replace(/[^0-9,.\s-]/g, ""))}
          className={inputClass(ok, checked)}
          readOnly={checked && ok}
        />
      )}
      <span className="shrink-0 pb-1 text-[var(--color-text-secondary)]">{unit}</span>
    </div>
  );
}


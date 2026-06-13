"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type G2ShapeKind = "square" | "rectangle" | "triangle" | "regular" | "circle";
type ExerciseMode = "perimeter" | "missing";

type Props = {
  exNum: number;
  shapeKind: G2ShapeKind;
  mode: ExerciseMode;
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
    return "w-24 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/70 bg-transparent px-1 py-1 text-center text-sm outline-none transition-colors focus:border-amber-500";
  }
  return ok
    ? "w-24 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)] bg-transparent px-1 py-1 text-center text-sm outline-none"
    : "w-24 rounded-none border-0 border-b-2 border-amber-500 bg-transparent px-1 py-1 text-center text-sm outline-none";
}

function withConversion(value: number, unit: Unit): Pick<FigureData, "unit" | "convertUnit" | "convertedAnswer"> {
  const convertUnit = pickOtherUnit(unit);
  return { unit, convertUnit, convertedAnswer: convertValue(value, unit, convertUnit) };
}

function makeFigure(shapeKind: G2ShapeKind, mode: ExerciseMode): FigureData {
  const unit = pick(UNITS);

  if (shapeKind === "square") {
    const side = randInt(3, 20);
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
  <text x='110' y='25' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='sans-serif'>?</text>
  <text x='110' y='164' text-anchor='middle' font-size='12' fill='#f97316' font-family='sans-serif'>P = ${fmt(perimeter)} ${unit}</text>
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
  <text x='110' y='25' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(side)} ${unit}</text>
</svg>`,
    };
  }

  if (shapeKind === "rectangle") {
    const length = randInt(8, 25);
    const width = randInt(3, Math.max(4, length - 2));
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
  <text x='120' y='35' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='sans-serif'>${findLength ? "?" : `${fmt(length)} ${unit}`}</text>
  <text x='218' y='88' font-size='12' fill='var(--color-text-primary)' font-family='sans-serif'>${findLength ? `${fmt(known)} ${unit}` : "?"}</text>
  <text x='120' y='153' text-anchor='middle' font-size='12' fill='#f97316' font-family='sans-serif'>P = ${fmt(perimeter)} ${unit}</text>
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
  <text x='120' y='25' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(length)} ${unit}</text>
  <text x='218' y='78' font-size='12' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(width)} ${unit}</text>
</svg>`,
    };
  }

  if (shapeKind === "triangle") {
    const a = randInt(5, 18);
    const b = randInt(5, 18);
    const c = randInt(Math.abs(a - b) + 2, a + b - 2);
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
        svg: `<svg viewBox='0 0 260 180' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:360px;display:block;margin:0 auto'>
  <polygon points='130,25 215,135 45,135' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <text x='130' y='160' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='sans-serif'>${missingIdx === 2 ? "?" : `${fmt(c)} ${unit}`}</text>
  <text x='70' y='82' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='sans-serif'>${missingIdx === 0 ? "?" : `${fmt(a)} ${unit}`}</text>
  <text x='190' y='82' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='sans-serif'>${missingIdx === 1 ? "?" : `${fmt(b)} ${unit}`}</text>
  <text x='130' y='15' text-anchor='middle' font-size='12' fill='#f97316' font-family='sans-serif'>P = ${fmt(perimeter)} ${unit}</text>
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
      svg: `<svg viewBox='0 0 260 165' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:360px;display:block;margin:0 auto'>
  <polygon points='130,20 215,130 45,130' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <text x='130' y='155' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(c)} ${unit}</text>
  <text x='70' y='80' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(a)} ${unit}</text>
  <text x='190' y='80' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='sans-serif'>${fmt(b)} ${unit}</text>
</svg>`,
    };
  }

  if (shapeKind === "regular") {
    const sides = pick([5, 6, 8]);
    const side = randInt(3, 15);
    const perimeter = sides * side;
    const name = sides === 5 ? "pentagone" : sides === 6 ? "hexagone" : "octogone";
    if (mode === "missing") {
      const conv = withConversion(side, unit);
      return {
        shapeKind,
        ...conv,
        targetLabel: "Côté",
        primaryAnswer: side,
        perimeter,
        svg: regularPolygonSvg(sides, unit, "?", `P = ${fmt(perimeter)} ${unit}`),
      };
    }
    const conv = withConversion(perimeter, unit);
    return {
      shapeKind,
      ...conv,
      targetLabel: "Périmètre",
      primaryAnswer: perimeter,
      perimeter,
      svg: regularPolygonSvg(sides, unit, `${name} régulier · côté ${fmt(side)} ${unit}`),
    };
  }

  const useDiameter = Math.random() > 0.5;
  const radius = randInt(2, 12);
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
  <text x='120' y='165' text-anchor='middle' font-size='12' fill='#f97316' font-family='sans-serif'>P = ${fmt(perimeter)} ${unit}</text>
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
  <text x='120' y='155' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='sans-serif'>${givenLabel}</text>
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
  <text x='120' y='160' text-anchor='middle' font-size='12' fill='var(--color-text-primary)' font-family='sans-serif'>${label}</text>
  ${perimeterLabel ? `<text x='120' y='175' text-anchor='middle' font-size='12' fill='#f97316' font-family='sans-serif'>${perimeterLabel}</text>` : ""}
</svg>`;
}

export function G2PerimeterExercise({ exNum, shapeKind, mode, validateCommand, onValidated }: Props) {
  const figure = useMemo(() => makeFigure(shapeKind, mode), [shapeKind, mode]);
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

  const title = mode === "perimeter" ? "Calculez le périmètre." : "Trouvez la mesure du côté.";

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
        <AnswerLine
          label={figure.targetLabel}
          value={answers.primary}
          unit={figure.unit}
          checked={answers.checked}
          ok={answers.primaryOk}
          correct={figure.primaryAnswer}
          onChange={(value) => setValue("primary", value)}
        />
        <AnswerLine
          label=""
          value={answers.converted}
          unit={figure.convertUnit}
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
  unit: Unit;
  checked: boolean;
  ok: boolean;
  correct: number;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex items-end gap-2 text-sm">
      <span className="w-24 shrink-0 font-medium text-[var(--color-text-primary)]">{label ? `${label} :` : ":"}</span>
      <div className="flex flex-col">
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass(ok, checked)}
          readOnly={checked && ok}
        />
        {checked && !ok ? (
          <span className="mt-0.5 text-center text-xs font-bold text-amber-600">{fmt(correct)}</span>
        ) : null}
      </div>
      <span className="pb-1 text-[var(--color-text-secondary)]">{unit}</span>
    </div>
  );
}

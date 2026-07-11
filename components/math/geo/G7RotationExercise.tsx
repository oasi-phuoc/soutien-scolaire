"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  pointKey,
  segmentKey,
  type GridPoint,
  type GridSegment,
} from "@/lib/curriculum/content/math/g7-reproduce-data";
import {
  expectedFromRotation,
  pickRotationTask,
  rotationConsigne,
  type RotationSide,
  type RotationTask,
} from "@/lib/curriculum/content/math/g7-rotation-data";

const ACCENT = "var(--color-accent-alg)";
const BLUE = "#2563eb";
const CELL = 26;
const MARGIN = 28;

function snapPoint(px: number, py: number, size: number): GridPoint | null {
  const max = size;
  let best: GridPoint | null = null;
  let bestD = 14;
  for (let x = 0; x <= max; x++) {
    for (let y = 0; y <= max; y++) {
      const cx = MARGIN + x * CELL;
      const cy = MARGIN + y * CELL;
      const d = Math.hypot(px - cx, py - cy);
      if (d < bestD) {
        bestD = d;
        best = { x, y };
      }
    }
  }
  return best;
}

function EdgeMarker({ side, size }: { side: RotationSide; size: number }) {
  const x0 = MARGIN;
  const y0 = MARGIN;
  const x1 = MARGIN + size * CELL;
  const y1 = MARGIN + size * CELL;
  const pad = 8;
  const sw = 5;
  if (side === "left") {
    return <line x1={x0 - pad} y1={y0} x2={x0 - pad} y2={y1} stroke={BLUE} strokeWidth={sw} strokeLinecap="round" />;
  }
  if (side === "top") {
    return <line x1={x0} y1={y0 - pad} x2={x1} y2={y0 - pad} stroke={BLUE} strokeWidth={sw} strokeLinecap="round" />;
  }
  if (side === "right") {
    return <line x1={x1 + pad} y1={y0} x2={x1 + pad} y2={y1} stroke={BLUE} strokeWidth={sw} strokeLinecap="round" />;
  }
  return <line x1={x0} y1={y1 + pad} x2={x1} y2={y1 + pad} stroke={BLUE} strokeWidth={sw} strokeLinecap="round" />;
}

function GridCanvas({
  size,
  dots,
  segments,
  edge,
  interactive,
  pending,
  wrongDots,
  wrongSegments,
  expectedDots,
  expectedSegments,
  validated,
  onPointClick,
}: {
  size: number;
  dots: Set<string>;
  segments: Set<string>;
  edge: RotationSide;
  interactive?: boolean;
  pending?: GridPoint | null;
  wrongDots?: Set<string>;
  wrongSegments?: Set<string>;
  expectedDots?: Set<string>;
  expectedSegments?: Set<string>;
  validated?: boolean;
  onPointClick?: (p: GridPoint) => void;
}) {
  const w = MARGIN * 2 + size * CELL;
  const h = MARGIN * 2 + size * CELL;

  const parseSeg = (key: string): GridSegment => {
    const [a, b] = key.split("|");
    const [x1, y1] = a!.split(",").map(Number);
    const [x2, y2] = b!.split(",").map(Number);
    return { x1: x1!, y1: y1!, x2: x2!, y2: y2! };
  };

  const pt = (p: GridPoint) => ({ cx: MARGIN + p.x * CELL, cy: MARGIN + p.y * CELL });

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="mx-auto w-full max-w-[320px]"
      onClick={(e) => {
        if (!interactive || !onPointClick) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const scaleX = w / rect.width;
        const scaleY = h / rect.height;
        const p = snapPoint((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY, size);
        if (p) onPointClick(p);
      }}
    >
      {Array.from({ length: size + 1 }, (_, i) => (
        <g key={`g-${i}`}>
          <line x1={MARGIN + i * CELL} y1={MARGIN} x2={MARGIN + i * CELL} y2={MARGIN + size * CELL} stroke="#e2e8f0" strokeWidth={1} />
          <line x1={MARGIN} y1={MARGIN + i * CELL} x2={MARGIN + size * CELL} y2={MARGIN + i * CELL} stroke="#e2e8f0" strokeWidth={1} />
        </g>
      ))}
      <rect
        x={MARGIN}
        y={MARGIN}
        width={size * CELL}
        height={size * CELL}
        fill="none"
        stroke="#94a3b8"
        strokeWidth={1.5}
      />
      <EdgeMarker side={edge} size={size} />
      {[...segments].map((key) => {
        const s = parseSeg(key);
        const wrong = wrongSegments?.has(key);
        return (
          <line
            key={`s-${key}`}
            x1={MARGIN + s.x1 * CELL}
            y1={MARGIN + s.y1 * CELL}
            x2={MARGIN + s.x2 * CELL}
            y2={MARGIN + s.y2 * CELL}
            stroke={wrong ? "#d97706" : "#1e293b"}
            strokeWidth={2}
            strokeLinecap="round"
          />
        );
      })}
      {validated && expectedSegments && [...expectedSegments].filter((k) => !segments.has(k)).map((key) => {
        const s = parseSeg(key);
        return (
          <line
            key={`exp-s-${key}`}
            x1={MARGIN + s.x1 * CELL}
            y1={MARGIN + s.y1 * CELL}
            x2={MARGIN + s.x2 * CELL}
            y2={MARGIN + s.y2 * CELL}
            stroke="#d97706"
            strokeWidth={2}
            strokeDasharray="4 3"
            strokeLinecap="round"
          />
        );
      })}
      {[...dots].map((key) => {
        const [x, y] = key.split(",").map(Number);
        const wrong = wrongDots?.has(key);
        return (
          <circle
            key={`d-${key}`}
            cx={MARGIN + x! * CELL}
            cy={MARGIN + y! * CELL}
            r={4}
            fill={wrong ? "#d97706" : "#1e293b"}
          />
        );
      })}
      {validated && expectedDots && [...expectedDots].filter((k) => !dots.has(k)).map((key) => {
        const [x, y] = key.split(",").map(Number);
        return (
          <circle key={`exp-d-${key}`} cx={MARGIN + x! * CELL} cy={MARGIN + y! * CELL} r={4} fill="#d97706" />
        );
      })}
      {pending && (
        <circle {...pt(pending)} r={6} fill="none" stroke={ACCENT} strokeWidth={2} />
      )}
      {interactive && (
        <rect x={0} y={0} width={w} height={h} fill="transparent" className="cursor-crosshair" />
      )}
    </svg>
  );
}

export function G7RotationExercise({
  exNum,
  validateCommand,
  onValidated,
  seed = 0,
  consigne,
  consigneLang,
  consigneDir,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (score: number, maxPoints: number) => void;
  seed?: number;
  consigne?: string;
  consigneLang?: string;
  consigneDir?: "ltr" | "rtl";
}) {
  const [task] = useState<RotationTask>(() =>
    pickRotationTask(exNum * 997 + seed * 31 + 19, exNum),
  );
  const expected = useMemo(() => expectedFromRotation(task), [task]);

  const [userDots, setUserDots] = useState<Set<string>>(() => new Set());
  const [userSegments, setUserSegments] = useState<Set<string>>(() => new Set());
  const [pending, setPending] = useState<GridPoint | null>(null);
  const [validated, setValidated] = useState(false);
  const [wrongDots, setWrongDots] = useState<Set<string>>(new Set());
  const [wrongSegments, setWrongSegments] = useState<Set<string>>(new Set());

  const refDots = useMemo(
    () => new Set(task.reference.dots.map(pointKey)),
    [task],
  );
  const refSegments = useMemo(
    () => new Set(task.reference.segments.map(segmentKey)),
    [task],
  );

  const onPointClick = useCallback((p: GridPoint) => {
    if (validated) return;
    const key = pointKey(p);
    if (!pending) {
      setPending(p);
      return;
    }
    if (pending.x === p.x && pending.y === p.y) {
      setUserDots((prev) => {
        const next = new Set(prev);
        if (next.has(key)) next.delete(key);
        else next.add(key);
        return next;
      });
      setPending(null);
      return;
    }
    const seg = segmentKey({ x1: pending.x, y1: pending.y, x2: p.x, y2: p.y });
    setUserSegments((prev) => {
      const next = new Set(prev);
      if (next.has(seg)) next.delete(seg);
      else next.add(seg);
      return next;
    });
    setPending(null);
  }, [pending, validated]);

  const doValidate = useCallback(() => {
    if (validated) return;
    const expD = expected.dots;
    const expS = expected.segments;
    let ok = true;
    const wD = new Set<string>();
    const wS = new Set<string>();
    for (const k of userDots) {
      if (!expD.has(k)) { wD.add(k); ok = false; }
    }
    for (const k of userSegments) {
      if (!expS.has(k)) { wS.add(k); ok = false; }
    }
    for (const k of expD) {
      if (!userDots.has(k)) ok = false;
    }
    for (const k of expS) {
      if (!userSegments.has(k)) ok = false;
    }
    setWrongDots(wD);
    setWrongSegments(wS);
    setValidated(true);
    onValidated(ok ? 1 : 0, 1);
  }, [expected.dots, expected.segments, onValidated, userDots, userSegments, validated]);

  useEffect(() => {
    if (validateCommand > 0) doValidate();
  }, [validateCommand, doValidate]);

  const fallbackConsigne = rotationConsigne(task, consigneLang);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold" style={{ color: ACCENT }}>Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]" lang={consigneLang} dir={consigneDir ?? "ltr"}>
        {consigne ?? fallbackConsigne}
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-[var(--color-border-default)] bg-white p-3 dark:bg-[var(--color-bg-primary)]">
          <p className="mb-2 text-center text-xs font-medium text-[var(--color-text-secondary)]">Modèle</p>
          <GridCanvas size={task.size} dots={refDots} segments={refSegments} edge={task.modelSide} />
        </div>
        <div className="rounded-lg border border-[var(--color-border-default)] bg-white p-3 dark:bg-[var(--color-bg-primary)]">
          <p className="mb-2 text-center text-xs font-medium text-[var(--color-text-secondary)]">Reproduction</p>
          <GridCanvas
            size={task.size}
            dots={userDots}
            segments={userSegments}
            edge={task.targetSide}
            interactive={!validated}
            pending={pending}
            wrongDots={validated ? wrongDots : undefined}
            wrongSegments={validated ? wrongSegments : undefined}
            expectedDots={validated ? expected.dots : undefined}
            expectedSegments={validated ? expected.segments : undefined}
            validated={validated}
            onPointClick={onPointClick}
          />
        </div>
      </div>

      {!validated && (
        <p className="text-xs text-[var(--color-text-secondary)]">
          Astuce : 1 clic = choisir un point · 2 clics sur le même point = ajouter/retirer un point · 2 clics sur des points différents = tracer/effacer un segment.
        </p>
      )}
    </div>
  );
}

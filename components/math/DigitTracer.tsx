"use client";

import { useRef, useState, useCallback } from "react";

// SVG viewBox: 60 wide × 90 tall
type DigitDef = {
  path: string;
  start: [number, number]; // green dot position in viewBox coords
};

const DIGIT_DEFS: Record<number, DigitDef> = {
  0: {
    path: "M 30 8 C 52 8 57 26 57 45 C 57 64 52 82 30 82 C 8 82 3 64 3 45 C 3 26 8 8 30 8 Z",
    start: [30, 8],
  },
  1: {
    path: "M 18 22 L 30 10 L 30 80",
    start: [18, 22],
  },
  2: {
    path: "M 10 28 C 10 12 20 4 32 4 C 46 4 54 14 54 28 C 54 42 42 52 28 62 L 8 80 L 56 80",
    start: [10, 28],
  },
  3: {
    path: "M 10 18 C 10 6 20 2 32 2 C 46 2 56 10 56 22 C 56 34 46 42 32 44 C 46 46 56 54 56 66 C 56 80 46 88 32 88 C 18 88 10 80 10 68",
    start: [10, 18],
  },
  4: {
    path: "M 44 6 L 10 54 L 56 54 L 44 54 L 44 82",
    start: [44, 6],
  },
  5: {
    path: "M 54 6 L 10 6 L 8 46 C 18 36 28 32 40 32 C 54 32 62 42 62 57 C 62 72 52 80 38 80 C 26 80 14 74 10 64",
    start: [54, 6],
  },
  6: {
    path: "M 52 10 C 38 2 12 8 6 30 C 0 52 12 82 32 82 C 50 82 62 68 62 54 C 62 40 50 30 32 30 C 14 30 4 42 6 54",
    start: [52, 10],
  },
  7: {
    path: "M 8 8 L 58 8 L 26 82",
    start: [8, 8],
  },
  8: {
    path: "M 30 2 C 46 2 58 8 58 22 C 58 36 46 44 30 44 C 14 44 2 52 2 66 C 2 80 14 88 30 88 C 46 88 58 80 58 66 C 58 52 46 44 30 44",
    start: [30, 2],
  },
  9: {
    path: "M 58 32 C 58 14 46 4 30 4 C 14 4 2 16 2 34 C 2 52 16 62 30 62 C 46 62 58 50 58 32 L 56 60 C 52 76 42 86 30 86",
    start: [58, 32],
  },
};

const SVG_W = 60;
const SVG_H = 90;

export function DigitTracer({ digit }: { digit: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [done, setDone] = useState(false);
  const drawing = useRef(false);
  const lastPt = useRef<[number, number] | null>(null);
  const totalLen = useRef(0);

  const def = DIGIT_DEFS[digit]!;

  function canvasPos(e: PointerEvent, canvas: HTMLCanvasElement): [number, number] {
    const r = canvas.getBoundingClientRect();
    const sx = canvas.width / r.width;
    const sy = canvas.height / r.height;
    return [(e.clientX - r.left) * sx, (e.clientY - r.top) * sy];
  }

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    if (done) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture(e.pointerId);
    drawing.current = true;
    const pos = canvasPos(e.nativeEvent, canvas);
    lastPt.current = pos;
    const ctx = canvas.getContext("2d");
    if (ctx) { ctx.beginPath(); ctx.moveTo(pos[0], pos[1]); }
  }, [done]);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current || done) return;
    const canvas = canvasRef.current;
    if (!canvas || !lastPt.current) return;
    const pos = canvasPos(e.nativeEvent, canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.lineTo(pos[0], pos[1]);
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = canvas.width / 13;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
    const [lx, ly] = lastPt.current;
    totalLen.current += Math.sqrt((pos[0] - lx) ** 2 + (pos[1] - ly) ** 2);
    lastPt.current = pos;
    if (totalLen.current > canvas.width * 0.5) {
      drawing.current = false;
      setDone(true);
    }
  }, [done]);

  const onPointerUp = useCallback(() => { drawing.current = false; }, []);

  function reset() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    totalLen.current = 0;
    lastPt.current = null;
    drawing.current = false;
    setDone(false);
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative select-none overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-white dark:bg-zinc-900"
        style={{ width: 144, height: 216 }}
      >
        {/* SVG guide */}
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          width={144}
          height={216}
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
          {/* Faint ruled lines */}
          <line x1="0" y1="30" x2={SVG_W} y2="30" stroke="#e2e8f0" strokeWidth="0.6" />
          <line x1="0" y1="60" x2={SVG_W} y2="60" stroke="#e2e8f0" strokeWidth="0.6" />
          {/* Digit guide */}
          <path
            d={def.path}
            fill="none"
            stroke={done ? "#6366f1" : "#d1d5db"}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={done ? undefined : "5 4"}
            opacity={done ? 0.25 : 1}
          />
          {/* Start dot (green pulsing circle) */}
          {!done && (
            <>
              <circle cx={def.start[0]} cy={def.start[1]} r="6" fill="#10b981" opacity="0.25" />
              <circle cx={def.start[0]} cy={def.start[1]} r="4" fill="#10b981" />
            </>
          )}
          {/* Done tick */}
          {done && (
            <>
              <circle cx={SVG_W / 2} cy={SVG_H / 2} r="13" fill="#10b981" opacity="0.15" />
              <path
                d={`M ${SVG_W / 2 - 7} ${SVG_H / 2 + 1} L ${SVG_W / 2 - 1} ${SVG_H / 2 + 7} L ${SVG_W / 2 + 9} ${SVG_H / 2 - 6}`}
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          )}
          {/* Ghost digit number in bottom-right */}
          <text
            x={SVG_W - 4}
            y={SVG_H - 4}
            textAnchor="end"
            fontSize="22"
            fontWeight="bold"
            fill="currentColor"
            opacity="0.07"
            className="pointer-events-none"
          >
            {digit}
          </text>
        </svg>
        {/* Canvas drawing layer */}
        <canvas
          ref={canvasRef}
          width={144}
          height={216}
          className="absolute inset-0 touch-none"
          style={{ cursor: done ? "default" : "crosshair" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        />
      </div>
      <button
        type="button"
        onClick={reset}
        className="flex h-7 items-center gap-1 rounded-full border border-[var(--color-border-default)] px-3 text-[11px] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 .49-4" />
        </svg>
        Effacer
      </button>
    </div>
  );
}

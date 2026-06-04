"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const TP_HISTORY_KEY = "tp-math-history";
type TPAttempt = { date: string; points: number; maxPoints: number };

function Chart({ history }: { history: TPAttempt[] }) {
  const chartH = 140;
  const barW = 44;
  const gap = 20;
  const leftPad = 28;
  const rightPad = 12;
  const topPad = 18;
  const maxPts = history[0]?.maxPoints ?? 100;
  const n = history.length;
  const svgW = leftPad + n * (barW + gap) - gap + rightPad;
  const svgH = chartH + topPad + 28;

  const toY = (pts: number) => topPad + chartH - Math.round((pts / maxPts) * chartH);
  const baseY = topPad + chartH;

  const points = history.map((h, i) => ({
    x: leftPad + i * (barW + gap) + barW / 2,
    y: toY(h.points),
    ...h,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");

  const gridVals = [25, 50, 75, 100].filter(v => v <= maxPts);

  return (
    <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full overflow-visible">
      {/* Grid lines */}
      {gridVals.map(v => {
        const y = toY(v);
        return (
          <g key={v}>
            <line x1={leftPad} y1={y} x2={svgW - rightPad} y2={y}
              stroke="var(--color-border-default)" strokeWidth="1" strokeDasharray="3,3" />
            <text x={leftPad - 4} y={y} textAnchor="end" fontSize="8" dominantBaseline="middle"
              fill="var(--color-text-secondary)">{v}</text>
          </g>
        );
      })}
      {/* Baseline */}
      <line x1={leftPad} y1={baseY} x2={svgW - rightPad} y2={baseY}
        stroke="var(--color-border-default)" strokeWidth="1.5" />
      <text x={leftPad - 4} y={baseY} textAnchor="end" fontSize="8" dominantBaseline="middle"
        fill="var(--color-text-secondary)">0</text>
      {/* Bars (low opacity background) */}
      {points.map((p, i) => (
        <rect key={i} x={p.x - barW / 2} y={p.y} width={barW} height={baseY - p.y}
          rx={4} fill="#d97706" opacity={0.15} />
      ))}
      {/* Evolution line */}
      {points.length > 1 && (
        <path d={linePath} fill="none" stroke="#d97706" strokeWidth="2.5"
          strokeLinejoin="round" strokeLinecap="round" />
      )}
      {/* Dots + labels */}
      {points.map((p, i) => {
        const [, mm, dd] = p.date.split("-");
        const dateLabel = mm && dd ? `${dd}/${mm}` : p.date;
        return (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={5} fill="#d97706" />
            <circle cx={p.x} cy={p.y} r={2.5} fill="var(--color-bg-primary)" />
            <text x={p.x} y={p.y - 9} textAnchor="middle" fontSize="12" fontWeight="700"
              fill="var(--color-text-primary)">{p.points}</text>
            <text x={p.x} y={baseY + 14} textAnchor="middle" fontSize="9"
              fill="var(--color-text-secondary)">{dateLabel}</text>
          </g>
        );
      })}
    </svg>
  );
}

export function PlacementStatsClient() {
  const router = useRouter();
  const [history, setHistory] = useState<TPAttempt[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(TP_HISTORY_KEY);
      if (raw) setHistory(JSON.parse(raw) as TPAttempt[]);
    } catch {}
    setReady(true);
  }, []);

  const best = history.length > 0 ? Math.max(...history.map(h => h.points)) : null;
  const last = history.length > 0 ? history[history.length - 1] : null;
  const maxPts = last?.maxPoints ?? 100;

  const trend =
    history.length >= 2
      ? (history[history.length - 1]!.points > history[history.length - 2]!.points
          ? "up"
          : history[history.length - 1]!.points < history[history.length - 2]!.points
            ? "down"
            : "stable")
      : null;

  return (
    <div className="mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-32">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
          aria-label="Retour"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            Test de placement
          </p>
          <h1 className="text-lg font-bold text-[var(--color-text-primary)]">Statistiques</h1>
        </div>
      </div>

      {!ready ? null : history.length === 0 ? (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.8">
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-[var(--color-text-primary)]">Aucun essai enregistré</p>
          <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
            Complète le test de placement pour voir ton évolution ici.
          </p>
          <button
            type="button"
            onClick={() => router.push("/mathematiques/test-de-placement")}
            className="mt-6 rounded-full px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-80"
            style={{ background: "#d97706" }}
          >
            Commencer le test
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Summary cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3 text-center">
              <p className="text-[10px] text-[var(--color-text-secondary)]">Dernier</p>
              <p className="mt-0.5 text-xl font-bold text-[var(--color-text-primary)]">{last?.points}</p>
              <p className="text-[10px] text-[var(--color-text-secondary)]">/ {maxPts} pts</p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3 text-center">
              <p className="text-[10px] text-[var(--color-text-secondary)]">Meilleur</p>
              <p className="mt-0.5 text-xl font-bold text-[var(--color-text-primary)]">{best}</p>
              <p className="text-[10px] text-[var(--color-text-secondary)]">/ {maxPts} pts</p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3 text-center">
              <p className="text-[10px] text-[var(--color-text-secondary)]">Tendance</p>
              <p className="mt-0.5 text-xl font-bold text-[var(--color-text-primary)]">
                {trend === "up" ? "↑" : trend === "down" ? "↓" : trend === "stable" ? "→" : "—"}
              </p>
              <p className="text-[10px] text-[var(--color-text-secondary)]">
                {trend === "up" ? "Progrès" : trend === "down" ? "Recul" : trend === "stable" ? "Stable" : "1 essai"}
              </p>
            </div>
          </div>

          {/* Chart */}
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 pt-4 pb-3">
            <p className="mb-4 text-sm font-bold text-[var(--color-text-primary)]">Évolution des scores</p>
            <Chart history={history} />
          </div>

          {/* History list */}
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
            <p className="border-b border-[var(--color-border-default)] px-4 py-3 text-sm font-bold text-[var(--color-text-primary)]">
              Historique
            </p>
            <ul className="divide-y divide-[var(--color-border-default)]">
              {[...history].reverse().map((h, i) => {
                const pct = Math.round((h.points / h.maxPoints) * 100);
                const [yyyy, mm, dd] = h.date.split("-");
                const dateStr = yyyy && mm && dd ? `${dd}/${mm}/${yyyy}` : h.date;
                return (
                  <li key={i} className="flex items-center gap-3 px-4 py-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        {i === 0 ? "★" : `#${history.length - i}`}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {h.points} <span className="font-normal text-[var(--color-text-secondary)]">/ {h.maxPoints} pts</span>
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)]">{dateStr}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-sm font-bold" style={{ color: pct >= 60 ? "#16a34a" : "#d97706" }}>
                        {pct}%
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Retry button */}
          <button
            type="button"
            onClick={() => router.push("/mathematiques/test-de-placement")}
            className="w-full rounded-[var(--radius-lg)] py-3 text-sm font-bold text-white transition-opacity hover:opacity-80"
            style={{ background: "#d97706" }}
          >
            Refaire le test
          </button>
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadPlacementTestHistoryAction } from "@/app/actions/progress";

const TP_HISTORY_KEY = "tp-math-history";
type TPAttempt = { date: string; points: number; maxPoints: number };

const THRESHOLDS = [
  { pts: 10, label: "CSC", color: "#94a3b8" },
  { pts: 40, label: "CFR", color: "#60a5fa" },
  { pts: 70, label: "CAF", color: "#34d399" },
  { pts: 90, label: "CAP", color: "#f59e0b" },
] as const;

const TOTAL_SLOTS = 5;

function Chart({ history }: { history: TPAttempt[] }) {
  const chartH = 140;
  const barW = 36;
  const gap = 16;
  const leftPad = 20;
  const rightPad = 46;
  const topPad = 18;
  const barsAreaW = TOTAL_SLOTS * barW + (TOTAL_SLOTS - 1) * gap;
  const svgW = leftPad + barsAreaW + rightPad;
  const svgH = chartH + topPad + 28;
  const maxPts = 100;

  const toY = (pts: number) => topPad + chartH - Math.round((pts / maxPts) * chartH);
  const baseY = topPad + chartH;
  const barsEndX = leftPad + barsAreaW;

  // Always 5 slots; fill with history entries, null for empties
  const slots = Array.from({ length: TOTAL_SLOTS }, (_, i) => history[i] ?? null);

  // Points for the evolution line (only filled slots)
  const filledPoints = slots
    .map((h, i) => h ? { x: leftPad + i * (barW + gap) + barW / 2, y: toY(h.points), ...h } : null)
    .filter((p): p is NonNullable<typeof p> => p !== null);

  const linePath = filledPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");

  return (
    <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full overflow-visible">
      {/* Threshold lines + right-side legends */}
      {THRESHOLDS.map(({ pts, label, color }) => {
        const y = toY(pts);
        return (
          <g key={label}>
            <line x1={leftPad} y1={y} x2={barsEndX} y2={y}
              stroke={color} strokeWidth="1.2" strokeDasharray="4,3" />
            <text x={barsEndX + 5} y={y - 1} fontSize="9" fontWeight="700" fill={color}>{label}</text>
            <text x={barsEndX + 5} y={y + 9} fontSize="7.5" fill={color} opacity={0.85}>{pts} pts</text>
          </g>
        );
      })}
      {/* Baseline + Y labels */}
      <line x1={leftPad} y1={baseY} x2={barsEndX} y2={baseY}
        stroke="var(--color-border-default)" strokeWidth="1.5" />
      <text x={leftPad - 3} y={baseY} textAnchor="end" fontSize="8" dominantBaseline="middle"
        fill="var(--color-text-secondary)">0</text>
      <text x={leftPad - 3} y={topPad} textAnchor="end" fontSize="8" dominantBaseline="middle"
        fill="var(--color-text-secondary)">100</text>
      {/* Slots */}
      {slots.map((h, i) => {
        const x = leftPad + i * (barW + gap) + barW / 2;
        if (!h) {
          return (
            <g key={i}>
              <rect x={x - barW / 2} y={topPad} width={barW} height={chartH}
                rx={4} fill="none" stroke="var(--color-border-default)" strokeWidth="1"
                strokeDasharray="3,3" />
              <text x={x} y={baseY + 14} textAnchor="middle" fontSize="9"
                fill="var(--color-text-secondary)">—</text>
            </g>
          );
        }
        const y = toY(h.points);
        const [, mm, ddRaw] = h.date.split("-");
        const dd = ddRaw?.slice(0, 2);
        const dateLabel = mm && dd ? `${dd}/${mm}` : h.date;
        return (
          <g key={i}>
            <rect x={x - barW / 2} y={y} width={barW} height={baseY - y}
              rx={4} fill="#d97706" opacity={0.2} />
            <text x={x} y={baseY + 14} textAnchor="middle" fontSize="9"
              fill="var(--color-text-secondary)">{dateLabel}</text>
          </g>
        );
      })}
      {/* Evolution line */}
      {filledPoints.length > 1 && (
        <path d={linePath} fill="none" stroke="#d97706" strokeWidth="2.5"
          strokeLinejoin="round" strokeLinecap="round" />
      )}
      {/* Dots + score labels */}
      {filledPoints.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={5} fill="#d97706" />
          <circle cx={p.x} cy={p.y} r={2.5} fill="var(--color-bg-primary)" />
          <text x={p.x} y={p.y - 9} textAnchor="middle" fontSize="11" fontWeight="700"
            fill="var(--color-text-primary)">{p.points}</text>
        </g>
      ))}
    </svg>
  );
}

const HISTORY_VISIBLE = 5;

function gradeFromAttempt(attempt: TPAttempt): number {
  if (attempt.maxPoints <= 0) return 1;
  return Math.round(((attempt.points / attempt.maxPoints) * 5 + 1) * 10) / 10;
}

function formatGrade(grade: number): string {
  return grade.toFixed(1).replace(".", ",");
}

function gradeMood(grade: number) {
  if (grade < 2) return { color: "#ef233c", mouth: "sad" as const };
  if (grade < 3) return { color: "#fb8c00", mouth: "sad" as const };
  if (grade < 4) return { color: "#fbbf24", mouth: "flat" as const };
  if (grade < 5) return { color: "#35b84b", mouth: "smile" as const };
  return { color: "#00994c", mouth: "smile" as const };
}

function GradeIcon({ grade }: { grade: number }) {
  const mood = gradeMood(grade);
  return (
    <svg width="30" height="30" viewBox="0 0 40 40" aria-hidden>
      <rect x="3" y="3" width="34" height="34" rx="10" fill="none" stroke={mood.color} strokeWidth="6" />
      <circle cx="14" cy="17" r="2.2" fill={mood.color} />
      <circle cx="26" cy="17" r="2.2" fill={mood.color} />
      {mood.mouth === "smile" ? (
        <path d="M13 24c2 4 12 4 14 0" fill="none" stroke={mood.color} strokeWidth="2.6" strokeLinecap="round" />
      ) : mood.mouth === "sad" ? (
        <path d="M13 28c2-4 12-4 14 0" fill="none" stroke={mood.color} strokeWidth="2.6" strokeLinecap="round" />
      ) : (
        <path d="M14 26h12" fill="none" stroke={mood.color} strokeWidth="2.6" strokeLinecap="round" />
      )}
    </svg>
  );
}

export function PlacementStatsClient() {
  const router = useRouter();
  const [history, setHistory] = useState<TPAttempt[]>([]);
  const [ready, setReady] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let cancelled = false;
    try {
      const raw = localStorage.getItem(TP_HISTORY_KEY);
      if (raw) setHistory(JSON.parse(raw) as TPAttempt[]);
    } catch {}

    loadPlacementTestHistoryAction().then((result) => {
      if (cancelled) return;
      if (result.ok && result.history.length > 0) {
        const cloudHistory = result.history.map((h) => ({
          date: h.date,
          points: h.points,
          maxPoints: h.maxPoints,
        }));
        setHistory(cloudHistory);
        try {
          localStorage.setItem(TP_HISTORY_KEY, JSON.stringify(cloudHistory.slice(-10)));
        } catch {}
      }
      setReady(true);
    }).catch(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const last = history.length > 0 ? history[history.length - 1] : null;
  const best = history.length > 0 ? Math.max(...history.map(h => h.points)) : null;
  const last5 = history.slice(-5);
  const avg = last5.length > 0
    ? Math.round(last5.reduce((s, h) => s + h.points, 0) / last5.length)
    : null;

  // History displayed: most recent first, 5 by default
  const reversed = [...history].reverse();
  const visibleHistory = showAll ? reversed : reversed.slice(0, HISTORY_VISIBLE);
  const hasMore = history.length > HISTORY_VISIBLE;

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
          {/* Launch button — top */}
          <button
            type="button"
            onClick={() => router.push("/mathematiques/test-de-placement")}
            className="w-full rounded-[var(--radius-lg)] py-3 text-sm font-bold text-white transition-opacity hover:opacity-80"
            style={{ background: "#d97706" }}
          >
            {history.length === 0 ? "Faire le test" : "Refaire le test"}
          </button>

          {/* Summary cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3 text-center">
              <p className="text-[10px] text-[var(--color-text-secondary)]">Dernier</p>
              <p className="mt-0.5 text-xl font-bold text-[var(--color-text-primary)]">{last?.points ?? "—"}</p>
              <p className="text-[10px] text-[var(--color-text-secondary)]">pts</p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3 text-center">
              <p className="text-[10px] text-[var(--color-text-secondary)]">Meilleur</p>
              <p className="mt-0.5 text-xl font-bold text-[var(--color-text-primary)]">{best ?? "—"}</p>
              <p className="text-[10px] text-[var(--color-text-secondary)]">pts</p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3 text-center">
              <p className="text-[10px] text-[var(--color-text-secondary)]">Moyenne</p>
              <p className="mt-0.5 text-xl font-bold text-[var(--color-text-primary)]">{avg ?? "—"}</p>
              <p className="text-[10px] text-[var(--color-text-secondary)]">5 derniers</p>
            </div>
          </div>

          {/* Chart — always shows last 5 slots */}
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 pt-4 pb-3">
            <p className="mb-4 text-sm font-bold text-[var(--color-text-primary)]">Évolution des scores</p>
            <Chart history={last5} />
          </div>

          {/* History list */}
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
            <p className="border-b border-[var(--color-border-default)] px-4 py-3 text-sm font-bold text-[var(--color-text-primary)]">
              Résultat des essais précédents
            </p>
            <ul className="divide-y divide-[var(--color-border-default)]">
              {visibleHistory.map((h, i) => {
                const grade = gradeFromAttempt(h);
                const mood = gradeMood(grade);
                const [yyyy, mm, ddRaw] = h.date.split("-");
                const dd = ddRaw?.slice(0, 2);
                const timeStr = ddRaw?.slice(3, 8);
                const dateStr = yyyy && mm && dd
                  ? timeStr ? `${dd}/${mm}/${yyyy} ${timeStr}` : `${dd}/${mm}/${yyyy}`
                  : h.date;
                return (
                  <li key={i} className="flex items-center gap-3 px-4 py-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {h.points} pts
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)]">{dateStr}</p>
                    </div>
                    <div className="shrink-0 flex items-center gap-2">
                      <GradeIcon grade={grade} />
                      <p className="text-sm font-bold" style={{ color: mood.color }}>{formatGrade(grade)}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            {hasMore && (
              <button
                type="button"
                onClick={() => setShowAll(v => !v)}
                className="flex w-full items-center justify-center gap-1.5 border-t border-[var(--color-border-default)] py-3 text-xs font-semibold text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
              >
                {showAll ? "Voir moins" : "Voir plus"}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className={`transition-transform ${showAll ? "rotate-180" : ""}`} aria-hidden>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            )}
          </div>

        </div>
      )}
    </div>
  );
}

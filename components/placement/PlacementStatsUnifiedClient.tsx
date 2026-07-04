"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PlacementPageHeader } from "@/components/placement/PlacementPageHeader";
import { PlacementUnifiedChart } from "@/components/placement/PlacementUnifiedChart";
import { syncPlacementFromCloud } from "@/lib/placement/sync-from-cloud";
import { PLACEMENT_BAR_FILL, PLACEMENT_CHART_ACCENT, PLACEMENT_ZONE_FILL } from "@/lib/placement/chart-colors";
import { PLACEMENT_ZONES } from "@/lib/placement/scoring";
import { loadPlacementProfile, migrateLegacyMathHistory, loadTotalHistory } from "@/lib/placement/storage";
import { PLACEMENT_LEVEL_LABELS, type PlacementTotalSnapshot } from "@/lib/placement/types";

const ACCENT = PLACEMENT_CHART_ACCENT;

function EvolutionChart({ history }: { history: PlacementTotalSnapshot[] }) {
  const chartH = 120;
  const barW = 36;
  const gap = 12;
  const leftPad = 8;
  const slots = 5;
  const maxPts = 200;
  const barsAreaW = slots * barW + (slots - 1) * gap;
  const svgW = leftPad + barsAreaW + 8;
  const svgH = chartH + 28;
  const items = Array.from({ length: slots }, (_, i) => history[Math.max(0, history.length - slots) + i] ?? null);

  const toY = (pts: number) => 8 + chartH - Math.round((pts / maxPts) * chartH);
  const baseY = 8 + chartH;

  return (
    <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full overflow-visible">
      {PLACEMENT_ZONES.map((z) => {
        const y1 = toY(z.max);
        const y2 = toY(z.min);
        return (
          <rect
            key={z.zone}
            x={leftPad}
            y={y1}
            width={barsAreaW}
            height={Math.max(1, y2 - y1)}
            fill={PLACEMENT_ZONE_FILL[z.zone]}
            opacity={0.85}
          />
        );
      })}
      <line x1={leftPad} y1={baseY} x2={leftPad + barsAreaW} y2={baseY} stroke="var(--color-border-default)" />
      {items.map((h, i) => {
        const x = leftPad + i * (barW + gap);
        if (!h) {
          return (
            <rect key={i} x={x} y={8} width={barW} height={chartH} rx={4} fill="none" stroke="var(--color-border-default)" strokeDasharray="3,3" />
          );
        }
        const y = toY(h.total);
        const hBar = baseY - y;
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={hBar} rx={4} fill={PLACEMENT_BAR_FILL} />
            <text x={x + barW / 2} y={baseY + 14} textAnchor="middle" fontSize="8" fill="var(--color-text-secondary)">{h.total}</text>
          </g>
        );
      })}
    </svg>
  );
}

export function PlacementStatsUnifiedClient() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [profile, setProfile] = useState(() => loadPlacementProfile());
  const [history, setHistory] = useState<PlacementTotalSnapshot[]>(() => loadTotalHistory());

  useEffect(() => {
    let cancelled = false;
    (async () => {
      migrateLegacyMathHistory();
      const nextProfile = await syncPlacementFromCloud();
      if (!cancelled) {
        setProfile(nextProfile);
        setHistory(loadTotalHistory());
        setReady(true);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const math = profile.mathLatest;
  const french = profile.frenchBest;

  return (
    <div className="mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-32">
      <PlacementPageHeader
        label="Test de placement"
        title="Statistiques /200"
        backHref="/placement"
      />

      {!ready ? null : (
        <div className="mt-6 space-y-4">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-xs text-[var(--color-text-secondary)]">Total placement</p>
                <p className="text-3xl font-bold text-[var(--color-text-primary)]">
                  {profile.total}
                  <span className="text-base font-medium text-[var(--color-text-secondary)]"> / 200</span>
                </p>
                <p className="mt-1 text-sm font-bold" style={{ color: ACCENT }}>Zone {profile.zone}</p>
              </div>
              {profile.pendingFrench > 0 && (
                <p className="text-right text-xs" style={{ color: ACCENT }}>
                  {profile.pendingFrench} pts en attente professeur
                </p>
              )}
            </div>
            <div className="mt-4">
              <PlacementUnifiedChart total={profile.total} />
            </div>
          </div>

          {history.length > 0 && (
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 pt-4 pb-3">
              <p className="mb-3 text-sm font-bold text-[var(--color-text-primary)]">Évolution du total /200</p>
              <EvolutionChart history={history} />
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
              <p className="text-[10px] font-bold uppercase" style={{ color: ACCENT }}>Mathématiques</p>
              <p className="mt-1 text-2xl font-bold">{profile.mathCounted} <span className="text-sm font-medium text-[var(--color-text-secondary)]">/ 100</span></p>
              <p className="text-[10px] text-[var(--color-text-secondary)]">{math ? "Dernier essai" : "Non fait (0)"}</p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
              <p className="text-[10px] font-bold uppercase" style={{ color: ACCENT }}>Français</p>
              <p className="mt-1 text-2xl font-bold">{profile.frenchCounted} <span className="text-sm font-medium text-[var(--color-text-secondary)]">/ 100</span></p>
              <p className="text-[10px] text-[var(--color-text-secondary)]">
                {french ? `Meilleur · ${PLACEMENT_LEVEL_LABELS[french.level]}` : "Non fait (0)"}
              </p>
            </div>
          </div>

          {french && (
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4">
              <p className="text-sm font-bold text-[var(--color-text-primary)]">Détail français (meilleure tentative)</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex justify-between"><span>CE</span><span>{french.ce} / 25</span></li>
                <li className="flex justify-between"><span>CO</span><span>{french.co} / 25</span></li>
                <li className="flex justify-between">
                  <span>PE</span>
                  <span>{french.pe === null ? (french.peSent ? "⏳ en attente" : "—") : `${french.pe} / 25`}</span>
                </li>
                <li className="flex justify-between">
                  <span>PO</span>
                  <span>{french.po === null ? (french.poSent ? "⏳ en attente" : "—") : `${french.po} / 25`}</span>
                </li>
                <li className="flex justify-between border-t border-[var(--color-border-default)] pt-2 font-semibold">
                  <span>Brut</span><span>{french.rawTotal} / 100</span>
                </li>
                <li className="flex justify-between text-[var(--color-text-secondary)]">
                  <span>Prorata niveau</span><span>{french.countedTotal} / 100 comptés</span>
                </li>
              </ul>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => router.push("/placement/mathematiques")}
              className="rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
              style={{ background: ACCENT }}
            >
              {math ? "Refaire maths" : "Test maths"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/placement/francais")}
              className="rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
              style={{ background: ACCENT }}
            >
              {french ? "Refaire français" : "Test français"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

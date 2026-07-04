"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { syncPlacementFromCloud } from "@/lib/placement/sync-from-cloud";
import { PLACEMENT_ZONES } from "@/lib/placement/scoring";
import { loadPlacementProfile, migrateLegacyMathHistory } from "@/lib/placement/storage";
import { PLACEMENT_LEVEL_LABELS } from "@/lib/placement/types";

const ZONE_COLORS: Record<string, string> = {
  CSC: "#94a3b8",
  CFR: "#60a5fa",
  CAF: "#34d399",
  CAP: "#f59e0b",
};

function UnifiedChart({ total }: { total: number }) {
  const max = 200;
  const h = 120;
  const w = 280;
  const x = Math.min(w - 8, Math.round((total / max) * w));
  return (
    <svg viewBox={`0 0 ${w} ${h + 24}`} className="w-full">
      {PLACEMENT_ZONES.map((z) => {
        const x1 = (z.min / max) * w;
        const x2 = (z.max / max) * w;
        return (
          <g key={z.zone}>
            <rect x={x1} y={8} width={x2 - x1} height={h} fill={ZONE_COLORS[z.zone]} opacity={0.12} />
            <text x={x1 + 4} y={h + 20} fontSize="8" fontWeight="700" fill={ZONE_COLORS[z.zone]}>{z.zone}</text>
          </g>
        );
      })}
      <line x1={0} y1={h + 4} x2={w} y2={h + 4} stroke="var(--color-border-default)" />
      <circle cx={x} cy={h / 2 + 4} r={6} fill="var(--color-accent-quiz)" />
      <text x={4} y={16} fontSize="9" fill="var(--color-text-secondary)">0</text>
      <text x={w - 16} y={16} fontSize="9" fill="var(--color-text-secondary)">200</text>
    </svg>
  );
}

export function PlacementStatsUnifiedClient() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [profile, setProfile] = useState(() => loadPlacementProfile());

  useEffect(() => {
    let cancelled = false;
    (async () => {
      migrateLegacyMathHistory();
      const nextProfile = await syncPlacementFromCloud();
      if (!cancelled) {
        setProfile(nextProfile);
        setReady(true);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const math = profile.mathLatest;
  const french = profile.frenchBest;

  return (
    <div className="mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-32">
      <div className="mb-6 flex items-center gap-3">
        <button
          type="button"
          onClick={() => router.push("/placement")}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)]"
          aria-label="Retour"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">Test de placement</p>
          <h1 className="text-lg font-bold text-[var(--color-text-primary)]">Statistiques /200</h1>
        </div>
      </div>

      {!ready ? null : (
        <div className="space-y-4">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-xs text-[var(--color-text-secondary)]">Total placement</p>
                <p className="text-3xl font-bold text-[var(--color-text-primary)]">
                  {profile.total}
                  <span className="text-base font-medium text-[var(--color-text-secondary)]"> / 200</span>
                </p>
                <p className="mt-1 text-sm font-bold" style={{ color: ZONE_COLORS[profile.zone] }}>Zone {profile.zone}</p>
              </div>
              {profile.pendingFrench > 0 && (
                <p className="text-right text-xs text-amber-600">
                  {profile.pendingFrench} pts en attente professeur
                </p>
              )}
            </div>
            <div className="mt-4">
              <UnifiedChart total={profile.total} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
              <p className="text-[10px] font-bold uppercase text-[var(--color-accent-alg)]">Mathématiques</p>
              <p className="mt-1 text-2xl font-bold">{profile.mathCounted} <span className="text-sm font-medium text-[var(--color-text-secondary)]">/ 100</span></p>
              <p className="text-[10px] text-[var(--color-text-secondary)]">{math ? "Dernier essai" : "Non fait (0)"}</p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
              <p className="text-[10px] font-bold uppercase text-[var(--color-accent-fr)]">Français</p>
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
              style={{ background: "var(--color-accent-alg)" }}
            >
              {math ? "Refaire maths" : "Test maths"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/placement/francais")}
              className="rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
              style={{ background: "var(--color-accent-fr)" }}
            >
              {french ? "Refaire français" : "Test français"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

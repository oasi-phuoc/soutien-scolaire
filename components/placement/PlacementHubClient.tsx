"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PlacementPageHeader } from "@/components/placement/PlacementPageHeader";
import { PlacementUnifiedChart } from "@/components/placement/PlacementUnifiedChart";
import type { PlacementLevel } from "@/lib/placement/types";
import { loadFrenchDraft, loadMathHistory, loadFrenchSessions } from "@/lib/placement/storage";
import { syncPlacementFromCloud } from "@/lib/placement/sync-from-cloud";

const LEVEL_KEY = "placement-selected-level";
const ACCENT = "var(--color-accent-quiz)";

const LEVEL_TOGGLE: { id: PlacementLevel; label: string }[] = [
  { id: "base", label: "A1" },
  { id: "moyen", label: "A2" },
  { id: "avance", label: "B1" },
];

const STEP_LABELS: Record<string, string> = {
  ce: "Compréhension écrite",
  co: "Compréhension orale",
  pe: "Production écrite",
  po: "Production orale",
};

function FrenchLevelToggle({
  level,
  onChange,
}: {
  level: PlacementLevel;
  onChange: (next: PlacementLevel) => void;
}) {
  return (
    <div
      className="flex shrink-0 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/50 p-0.5"
      role="group"
      aria-label="Niveau du test français"
    >
      {LEVEL_TOGGLE.map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => onChange(opt.id)}
          className={`min-w-[2.25rem] rounded-md px-2 py-1.5 text-xs font-bold transition-colors ${
            level === opt.id ? "text-white" : "text-[var(--color-text-secondary)]"
          }`}
          style={level === opt.id ? { background: ACCENT } : undefined}
          aria-pressed={level === opt.id}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export function PlacementHubClient() {
  const router = useRouter();
  const [level, setLevel] = useState<PlacementLevel>("base");
  const [mathCounted, setMathCounted] = useState(0);
  const [frenchCounted, setFrenchCounted] = useState(0);
  const [mathDone, setMathDone] = useState(false);
  const [frenchDone, setFrenchDone] = useState(false);
  const [profileTotal, setProfileTotal] = useState(0);
  const [zone, setZone] = useState("CSC");
  const [pendingFrench, setPendingFrench] = useState(0);
  const [draftStep, setDraftStep] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const saved = localStorage.getItem(LEVEL_KEY) as PlacementLevel | null;
        if (saved === "base" || saved === "moyen" || saved === "avance") setLevel(saved);
      } catch { /* ignore */ }
      const profile = await syncPlacementFromCloud();
      if (cancelled) return;
      setMathDone(loadMathHistory().length > 0);
      setFrenchDone(loadFrenchSessions().length > 0);
      setMathCounted(profile.mathCounted);
      setFrenchCounted(profile.frenchCounted);
      setProfileTotal(profile.total);
      setZone(profile.zone);
      setPendingFrench(profile.pendingFrench);
      setDraftStep(loadFrenchDraft()?.step ?? null);
      setReady(true);
    })();
    return () => { cancelled = true; };
  }, []);

  function selectLevel(next: PlacementLevel) {
    setLevel(next);
    localStorage.setItem(LEVEL_KEY, next);
  }

  function launchFrench() {
    localStorage.setItem(LEVEL_KEY, level);
    router.push(`/placement/francais?level=${level}`);
  }

  function resumeFrench() {
    router.push(`/placement/francais?level=${level}`);
  }

  if (!ready) {
    return (
      <main className="mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-32">
        <p className="text-center text-sm text-[var(--color-text-secondary)]">Chargement…</p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-8 pb-32">
      <PlacementPageHeader
        label="Positionnement"
        title="Test de placement"
        subtitle="Mathématiques (100 pts) et français CE, CO, PE, PO (100 pts). Total sur 200 points."
        backHref="/"
      />

      {draftStep && draftStep !== "recap" && (
        <div
          className="rounded-[var(--radius-lg)] border p-4"
          style={{
            borderColor: "color-mix(in oklch, var(--color-accent-quiz) 35%, white)",
            background: "color-mix(in oklch, var(--color-accent-quiz) 8%, white)",
          }}
        >
          <p className="text-sm font-bold" style={{ color: ACCENT }}>Batterie française en cours</p>
          <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
            Reprendre à l&apos;étape : {STEP_LABELS[draftStep] ?? draftStep}
          </p>
          <button
            type="button"
            onClick={resumeFrench}
            className="mt-3 rounded-[var(--radius-md)] px-4 py-2 text-sm font-semibold text-white"
            style={{ background: ACCENT }}
          >
            Reprendre
          </button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-3">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
            <p className="text-[10px] font-bold uppercase" style={{ color: ACCENT }}>Mathématiques</p>
            <p className="mt-1 text-2xl font-bold text-[var(--color-text-primary)]">
              {mathCounted}
              <span className="text-sm font-medium text-[var(--color-text-secondary)]"> / 100</span>
            </p>
            <p className="mt-1 text-[10px] text-[var(--color-text-secondary)]">
              {mathDone ? "Dernier essai enregistré" : "Non fait (0)"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => router.push("/placement/mathematiques")}
            className="w-full rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
            style={{ background: ACCENT }}
          >
            {mathDone ? "Refaire maths" : "Test maths"}
          </button>
        </div>

        <div className="space-y-3">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
            <p className="text-[10px] font-bold uppercase" style={{ color: ACCENT }}>Français</p>
            <div className="mt-1 flex items-start justify-between gap-2">
              <p className="text-2xl font-bold text-[var(--color-text-primary)]">
                {frenchCounted}
                <span className="text-sm font-medium text-[var(--color-text-secondary)]"> / 100</span>
              </p>
              <FrenchLevelToggle level={level} onChange={selectLevel} />
            </div>
            <p className="mt-1 text-[10px] text-[var(--color-text-secondary)]">
              {frenchDone ? "Meilleur essai enregistré" : "Non fait (0)"}
            </p>
          </div>
          <button
            type="button"
            onClick={launchFrench}
            className="w-full rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
            style={{ background: ACCENT }}
          >
            {frenchDone ? "Refaire français" : "Test français"}
          </button>
        </div>
      </div>

      <p className="text-center text-sm text-[var(--color-text-secondary)]">
        Sélectionnez votre niveau.
      </p>

      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">Total placement</p>
        <p className="mt-1 text-3xl font-bold text-[var(--color-text-primary)]">
          {profileTotal}
          <span className="text-base font-medium text-[var(--color-text-secondary)]"> / 200</span>
        </p>
        <p className="mt-1 text-sm font-semibold" style={{ color: ACCENT }}>Zone {zone}</p>
        {pendingFrench > 0 && (
          <p className="mt-2 text-xs" style={{ color: ACCENT }}>{pendingFrench} pts en attente de correction professeur</p>
        )}
        {!mathDone && !frenchDone && (
          <p className="mt-2 text-xs text-[var(--color-text-secondary)]">Parties non faites comptées à 0.</p>
        )}
        <div className="mt-4">
          <PlacementUnifiedChart total={profileTotal} />
        </div>
      </div>

      <Link
        href="/placement/statistiques"
        className="flex min-h-12 w-full items-center justify-center rounded-[var(--radius-md)] border text-sm font-semibold text-white transition-opacity hover:opacity-90"
        style={{ background: ACCENT, borderColor: ACCENT }}
      >
        Voir les statistiques /200
      </Link>
    </main>
  );
}

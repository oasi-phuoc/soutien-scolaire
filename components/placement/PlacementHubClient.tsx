"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PLACEMENT_LEVEL_LABELS, type PlacementLevel } from "@/lib/placement/types";
import { loadMathHistory, loadFrenchSessions, loadPlacementProfile } from "@/lib/placement/storage";

const LEVEL_KEY = "placement-selected-level";

export function PlacementHubClient() {
  const router = useRouter();
  const [level, setLevel] = useState<PlacementLevel>("base");
  const [mathDone, setMathDone] = useState(false);
  const [frenchDone, setFrenchDone] = useState(false);
  const [profileTotal, setProfileTotal] = useState(0);
  const [zone, setZone] = useState("—");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LEVEL_KEY) as PlacementLevel | null;
      if (saved === "base" || saved === "moyen" || saved === "avance") setLevel(saved);
    } catch { /* ignore */ }
    const math = loadMathHistory();
    const french = loadFrenchSessions();
    const profile = loadPlacementProfile();
    setMathDone(math.length > 0);
    setFrenchDone(french.length > 0);
    setProfileTotal(profile.total);
    setZone(profile.zone);
  }, []);

  function selectLevel(next: PlacementLevel) {
    setLevel(next);
    localStorage.setItem(LEVEL_KEY, next);
  }

  function launchFrench() {
    localStorage.setItem(LEVEL_KEY, level);
    router.push(`/placement/francais?level=${level}`);
  }

  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-8 pb-32">
      <Link
        href="/"
        className="inline-flex min-h-11 items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
      >
        ← Accueil
      </Link>

      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-quiz)]">
          Positionnement
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Test de placement
        </h1>
        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
          Mathématiques (100 pts) et français CE, CO, PE, PO (100 pts). Total sur 200 points.
        </p>
      </header>

      {(mathDone || frenchDone) && (
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">Total actuel</p>
          <p className="mt-1 text-3xl font-bold text-[var(--color-text-primary)]">{profileTotal} <span className="text-base font-medium text-[var(--color-text-secondary)]">/ 200</span></p>
          <p className="mt-1 text-sm font-semibold text-[var(--color-accent-quiz)]">Zone {zone}</p>
        </div>
      )}

      <section className="space-y-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/40 p-4">
        <p className="text-sm font-bold text-[var(--color-text-primary)]">Niveau du test français</p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {(["base", "moyen", "avance"] as PlacementLevel[]).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => selectLevel(id)}
              className={`min-h-11 rounded-[var(--radius-md)] px-3 py-2 text-sm font-semibold transition-colors ${
                level === id
                  ? "bg-[var(--color-accent-fr)] text-white"
                  : "border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
              }`}
            >
              {PLACEMENT_LEVEL_LABELS[id]}
            </button>
          ))}
        </div>
      </section>

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => router.push("/placement/mathematiques")}
          className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4 text-left transition-colors hover:bg-[var(--color-bg-secondary)]"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent-alg)]">Mathématiques</p>
          <p className="mt-1 text-lg font-bold text-[var(--color-text-primary)]">TCM — 100 pts</p>
          <p className="mt-1 text-xs text-[var(--color-text-secondary)]">90 minutes · 38 exercices</p>
          <p className="mt-2 text-xs font-semibold" style={{ color: mathDone ? "#059669" : "var(--color-text-secondary)" }}>
            {mathDone ? "✓ Au moins un essai" : "À faire"}
          </p>
        </button>

        <button
          type="button"
          onClick={launchFrench}
          className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4 text-left transition-colors hover:bg-[var(--color-bg-secondary)]"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent-fr)]">Français</p>
          <p className="mt-1 text-lg font-bold text-[var(--color-text-primary)]">TCF — 100 pts</p>
          <p className="mt-1 text-xs text-[var(--color-text-secondary)]">CE → CO → PE → PO</p>
          <p className="mt-2 text-xs font-semibold" style={{ color: frenchDone ? "#059669" : "var(--color-text-secondary)" }}>
            {frenchDone ? "✓ Au moins un essai" : "À faire"}
          </p>
        </button>
      </div>

      <Link
        href="/placement/statistiques"
        className="flex min-h-12 w-full items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-emphasis)] text-sm font-semibold text-[var(--color-text-primary)]"
      >
        Voir les statistiques /200
      </Link>
    </main>
  );
}

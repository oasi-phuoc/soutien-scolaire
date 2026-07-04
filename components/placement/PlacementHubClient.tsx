"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { savePlacementToCloudAction } from "@/app/actions/placement";
import { PlacementPageHeader } from "@/components/placement/PlacementPageHeader";
import { PlacementUnifiedChart } from "@/components/placement/PlacementUnifiedChart";
import { PlacementEvolutionChart } from "@/components/placement/PlacementEvolutionChart";
import type { PlacementFrenchDraft, PlacementLevel } from "@/lib/placement/types";
import {
  loadFrenchDraft,
  loadFrenchSessions,
  loadMathHistory,
  loadTotalHistory,
  recomputePlacementProfile,
  saveFrenchDraft,
} from "@/lib/placement/storage";
import { syncPlacementFromCloud } from "@/lib/placement/sync-from-cloud";

const LEVEL_KEY = "placement-selected-level";
const ACCENT = "var(--color-accent-quiz)";
const CARD_TITLE = "text-[10px] font-bold uppercase tracking-wide";

const LEVEL_TOGGLE: { id: PlacementLevel; label: string }[] = [
  { id: "base", label: "A1" },
  { id: "moyen", label: "A2" },
  { id: "avance", label: "B1" },
];

const STEP_ORDER = ["ce", "co", "pe", "po"] as const;
type FrenchSkill = (typeof STEP_ORDER)[number];

const SKILL_HEADERS: Record<FrenchSkill, string> = {
  ce: "CE",
  co: "CO",
  pe: "PE",
  po: "PO",
};

function formatHalf(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function stepIndex(step: PlacementFrenchDraft["step"]) {
  if (step === "recap") return STEP_ORDER.length;
  return STEP_ORDER.indexOf(step as FrenchSkill);
}

function skillScoreLabel(draft: PlacementFrenchDraft, skill: FrenchSkill): string {
  const current = stepIndex(draft.step);
  const idx = STEP_ORDER.indexOf(skill);

  if (skill === "ce") {
    if (current > idx) return `${draft.ce ?? 0} / 25`;
    if (draft.step === "ce") return "En cours";
    return "—";
  }
  if (skill === "co") {
    if (current > idx) return `${draft.co ?? 0} / 25`;
    if (draft.step === "co") return "En cours";
    return "—";
  }
  if (skill === "pe") {
    if (draft.peSent) return "En cours de correction";
    if (draft.step === "pe") return "En cours";
    return "—";
  }
  if (draft.poSent) return "En cours de correction";
  if (draft.step === "po") return "En cours";
  return "—";
}

function FrenchTestInProgressCard({
  draft,
  onReset,
}: {
  draft: PlacementFrenchDraft;
  onReset: () => void;
}) {
  const activeSkill = draft.step === "recap" ? null : (draft.step as FrenchSkill);

  return (
    <div
      className="rounded-[var(--radius-lg)] border p-4"
      style={{
        borderColor: "color-mix(in oklch, var(--color-accent-quiz) 35%, white)",
        background: "color-mix(in oklch, var(--color-accent-quiz) 8%, white)",
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <p className={CARD_TITLE} style={{ color: ACCENT }}>Test de français en cours</p>
        <button
          type="button"
          onClick={onReset}
          className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
        >
          Reset
        </button>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 text-center">
        {STEP_ORDER.map((skill) => (
          <p key={skill} className={CARD_TITLE} style={{ color: ACCENT }}>
            {SKILL_HEADERS[skill]}
          </p>
        ))}
        {STEP_ORDER.map((skill) => (
          <p
            key={`${skill}-score`}
            className={`text-[10px] leading-snug ${
              activeSkill === skill ? "font-semibold text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)]"
            }`}
          >
            {skillScoreLabel(draft, skill)}
          </p>
        ))}
      </div>
    </div>
  );
}

function FrenchLevelToggle({
  level,
  onChange,
  disabled = false,
}: {
  level: PlacementLevel;
  onChange: (next: PlacementLevel) => void;
  disabled?: boolean;
}) {
  return (
    <div
      className={`flex shrink-0 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/50 p-0.5 ${disabled ? "opacity-50" : ""}`}
      role="group"
      aria-label="Niveau du test français"
    >
      {LEVEL_TOGGLE.map((opt) => (
        <button
          key={opt.id}
          type="button"
          disabled={disabled}
          onClick={() => !disabled && onChange(opt.id)}
          className={`min-w-[2.25rem] rounded-md px-2 py-1.5 text-xs font-bold transition-colors ${
            level === opt.id ? "text-white" : "text-[var(--color-text-secondary)]"
          } ${disabled ? "cursor-not-allowed" : ""}`}
          style={level === opt.id ? { background: ACCENT } : undefined}
          aria-pressed={level === opt.id}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function ScoreCard({
  title,
  points,
  footer,
}: {
  title: string;
  points: number;
  footer?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[8.5rem] flex-col items-center justify-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4 text-center">
      <p className={CARD_TITLE} style={{ color: ACCENT }}>{title}</p>
      <p className="text-2xl font-bold text-[var(--color-text-primary)]">
        {formatHalf(points)}
        <span className="text-sm font-medium text-[var(--color-text-secondary)]"> / 100</span>
      </p>
      {footer}
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
  const [draft, setDraft] = useState<PlacementFrenchDraft | null>(null);
  const [mathHistory, setMathHistory] = useState(() => loadMathHistory());
  const [frenchSessions, setFrenchSessions] = useState(() => loadFrenchSessions());
  const [ready, setReady] = useState(false);

  const frenchInProgress = !!(draft && draft.step !== "recap");
  const displayLevel = frenchInProgress && draft ? draft.level : level;

  function refreshProfile() {
    const profile = recomputePlacementProfile();
    setMathCounted(profile.mathCounted);
    setFrenchCounted(profile.frenchCounted);
    setProfileTotal(profile.total);
    setZone(profile.zone);
    setPendingFrench(profile.pendingFrench);
    setMathHistory(loadMathHistory());
    setFrenchSessions(loadFrenchSessions());
    return profile;
  }

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const localDraft = loadFrenchDraft();
      try {
        const saved = localStorage.getItem(LEVEL_KEY) as PlacementLevel | null;
        if (localDraft?.level) setLevel(localDraft.level);
        else if (saved === "base" || saved === "moyen" || saved === "avance") setLevel(saved);
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
      setDraft(localDraft);
      setMathHistory(loadMathHistory());
      setFrenchSessions(loadFrenchSessions());
      setReady(true);
    })();
    return () => { cancelled = true; };
  }, []);

  function selectLevel(next: PlacementLevel) {
    if (frenchInProgress) return;
    setLevel(next);
    localStorage.setItem(LEVEL_KEY, next);
  }

  function launchFrench() {
    localStorage.setItem(LEVEL_KEY, level);
    router.push(`/placement/francais?level=${level}`);
  }

  function resumeFrench() {
    const d = loadFrenchDraft();
    const resumeLevel = d?.level ?? level;
    localStorage.setItem(LEVEL_KEY, resumeLevel);
    router.push(`/placement/francais?level=${resumeLevel}`);
  }

  async function resetFrenchDraft() {
    saveFrenchDraft(null);
    setDraft(null);
    refreshProfile();
    void savePlacementToCloudAction({
      mathHistory: loadMathHistory(),
      frenchSessions: loadFrenchSessions(),
      frenchDraft: null,
      totalHistory: loadTotalHistory(),
    });
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
      <PlacementPageHeader label="Positionnement" title="Test de placement" backHref="/" showHelp />

      {frenchInProgress && draft && (
        <FrenchTestInProgressCard draft={draft} onReset={resetFrenchDraft} />
      )}

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <ScoreCard title="Mathématiques" points={mathCounted} />
          <button
            type="button"
            onClick={() => router.push("/placement/mathematiques")}
            className="w-full rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
            style={{ background: ACCENT }}
          >
            {mathDone ? "Refaire maths" : "Test maths"}
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <ScoreCard
            title="Français"
            points={frenchCounted}
            footer={
              <FrenchLevelToggle
                level={displayLevel}
                onChange={selectLevel}
                disabled={frenchInProgress}
              />
            }
          />
          <button
            type="button"
            onClick={frenchInProgress ? resumeFrench : launchFrench}
            className="w-full rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
            style={{ background: ACCENT }}
          >
            {frenchInProgress ? "Reprendre" : frenchDone ? "Refaire français" : "Test français"}
          </button>
        </div>
      </div>

      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">Total placement</p>
        <p className="mt-1 text-3xl font-bold text-[var(--color-text-primary)]">
          {formatHalf(profileTotal)}
          <span className="text-base font-medium text-[var(--color-text-secondary)]"> / 200</span>
        </p>
        <p className="mt-1 text-sm font-semibold" style={{ color: ACCENT }}>Zone {zone}</p>
        {pendingFrench > 0 && (
          <p className="mt-2 text-xs" style={{ color: ACCENT }}>{pendingFrench} pts en attente de correction professeur</p>
        )}
        <div className="mt-4">
          <PlacementUnifiedChart total={profileTotal} />
        </div>
      </div>

      {(mathHistory.length > 0 || frenchSessions.length > 0) && (
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">Évolution du total</p>
          <div className="mt-3">
            <PlacementEvolutionChart
              mathAttempts={mathHistory}
              frenchSessions={frenchSessions}
              mathCounted={mathCounted}
              frenchCounted={frenchCounted}
            />
          </div>
        </div>
      )}
    </main>
  );
}

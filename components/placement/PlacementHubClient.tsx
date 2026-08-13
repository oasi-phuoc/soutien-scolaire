"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { savePlacementToCloudAction } from "@/app/actions/placement";
import { FrenchSkillCardsProgress, FrenchSkillCardsSelect, type FrenchSkill } from "@/components/placement/FrenchSkillCards";
import { PlacementPageHeader } from "@/components/placement/PlacementPageHeader";
import { ChargementEnCoursCard } from "@/components/ui/ChargementEnCours";
import { PlacementUnifiedChart } from "@/components/placement/PlacementUnifiedChart";
import { PlacementEvolutionChart } from "@/components/placement/PlacementEvolutionChart";
import type { MathTrainingLevel, PlacementFrenchDraft, PlacementLevel } from "@/lib/placement/types";
import {
  loadFrenchDraft,
  loadFrenchSessions,
  loadFrenchTrainingDraft,
  loadMathHistory,
  loadTotalHistory,
  recomputePlacementProfile,
  saveFrenchDraft,
  saveFrenchTrainingDraft,
  saveMathTrainingDraft,
} from "@/lib/placement/storage";
import {
  levelFromMathParam,
  MATH_TRAINING_LEVEL_TOGGLE,
} from "@/lib/placement/math-training-levels";
import { syncPlacementFromCloud } from "@/lib/placement/sync-from-cloud";

const LEVEL_KEY = "placement-selected-level";
const MATH_LEVEL_KEY = "placement-selected-math-level";
const ACCENT = "var(--color-accent-quiz)";
const CARD_TITLE = "text-[10px] font-bold uppercase tracking-wide";

const LEVEL_TOGGLE: { id: PlacementLevel; label: string }[] = [
  { id: "base", label: "A1" },
  { id: "moyen", label: "A2" },
  { id: "avance", label: "B1" },
];

function formatHalf(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function FrenchProgressBlock({
  draft,
  title,
  onReset,
  embedded = false,
}: {
  draft: PlacementFrenchDraft;
  title: string;
  onReset: () => void;
  embedded?: boolean;
}) {
  const [confirmReset, setConfirmReset] = useState(false);

  return (
    <>
      <div
        className={
          embedded
            ? "border-t border-[var(--color-border-default)] pt-4"
            : "rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-white p-4 dark:bg-[var(--color-bg-primary)]"
        }
      >
        <div className="flex items-center justify-between gap-2">
          <p className={CARD_TITLE} style={{ color: ACCENT }}>{title}</p>
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            Reset
          </button>
        </div>
        <div className="mt-3">
          <FrenchSkillCardsProgress draft={draft} />
        </div>
      </div>

      {confirmReset && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm space-y-4 rounded-[var(--radius-lg)] bg-[var(--color-bg-primary)] p-6 shadow-xl">
            <p className="text-base font-bold text-[var(--color-text-primary)]">Annuler la progression ?</p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Votre progression en cours sera perdue. Vous pourrez recommencer depuis le début.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setConfirmReset(false);
                  onReset();
                }}
                className="flex-1 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
              >
                Annuler
              </button>
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="flex-1 rounded-[var(--radius-lg)] px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: ACCENT }}
              >
                Continuer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/** Hauteur commune : toggle A1/A2/B1, I–IV, et bouton individuel. */
const LEVEL_CTRL_H = "h-9";

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
      className={`flex ${LEVEL_CTRL_H} shrink-0 items-stretch rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/50 p-0.5 ${disabled ? "opacity-50" : ""}`}
      role="group"
      aria-label="Niveau d'entraînement français"
    >
      {LEVEL_TOGGLE.map((opt) => (
        <button
          key={opt.id}
          type="button"
          disabled={disabled}
          onClick={() => !disabled && onChange(opt.id)}
          className={`flex min-w-[2.25rem] items-center justify-center rounded-md px-2 text-xs font-bold transition-colors ${
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

function MathLevelToggle({
  level,
  onChange,
  disabled = false,
}: {
  level: MathTrainingLevel;
  onChange: (next: MathTrainingLevel) => void;
  disabled?: boolean;
}) {
  return (
    <div
      className={`flex ${LEVEL_CTRL_H} shrink-0 items-stretch rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/50 p-0.5 ${disabled ? "opacity-50" : ""}`}
      role="group"
      aria-label="Niveau d'entraînement mathématiques"
    >
      {MATH_TRAINING_LEVEL_TOGGLE.map((opt) => (
        <button
          key={opt.id}
          type="button"
          disabled={disabled}
          onClick={() => !disabled && onChange(opt.id)}
          className={`flex min-w-[2.5rem] items-center justify-center rounded-md px-2 text-xs font-bold transition-colors ${
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

function IndividualModeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1.5" opacity="0.35" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" opacity="0.35" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" stroke="none" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" opacity="0.35" />
    </svg>
  );
}

function ScoreColumn({ title, points }: { title: string; points: number }) {
  return (
    <div className="flex flex-1 flex-col py-1 text-center">
      <p className={CARD_TITLE} style={{ color: ACCENT }}>{title}</p>
      <p className="mt-2 text-2xl font-bold text-[var(--color-text-primary)]">
        {formatHalf(points)}
        <span className="text-sm font-medium text-[var(--color-text-secondary)]"> / 100</span>
      </p>
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
  const [placementDraft, setPlacementDraft] = useState<PlacementFrenchDraft | null>(null);
  const [trainingDraft, setTrainingDraft] = useState<PlacementFrenchDraft | null>(null);
  const [mathHistory, setMathHistory] = useState(() => loadMathHistory());
  const [frenchSessions, setFrenchSessions] = useState(() => loadFrenchSessions());
  const [ready, setReady] = useState(false);
  const [individualMode, setIndividualMode] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<FrenchSkill>("ce");
  const [mathLevel, setMathLevel] = useState<MathTrainingLevel>("CSC");

  const placementInProgress = !!(placementDraft && placementDraft.step !== "recap");
  const trainingInProgress = !!(trainingDraft && trainingDraft.step !== "recap");
  const displayLevel = trainingInProgress && trainingDraft ? trainingDraft.level : level;

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
      const localPlacementDraft = loadFrenchDraft();
      const localTrainingDraft = loadFrenchTrainingDraft();
      // Anciens brouillons maths : on les efface (plus de reprise).
      saveMathTrainingDraft(null);
      try {
        const saved = localStorage.getItem(LEVEL_KEY) as PlacementLevel | null;
        if (localTrainingDraft?.level) setLevel(localTrainingDraft.level);
        else if (saved === "base" || saved === "moyen" || saved === "avance") setLevel(saved);
        const savedMath = levelFromMathParam(localStorage.getItem(MATH_LEVEL_KEY));
        if (savedMath) setMathLevel(savedMath);
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
      setPlacementDraft(localPlacementDraft);
      setTrainingDraft(localTrainingDraft);
      setMathHistory(loadMathHistory());
      setFrenchSessions(loadFrenchSessions());
      setReady(true);
    })();
    return () => { cancelled = true; };
  }, []);

  function selectLevel(next: PlacementLevel) {
    if (trainingInProgress) return;
    setLevel(next);
    localStorage.setItem(LEVEL_KEY, next);
  }

  function selectMathLevel(next: MathTrainingLevel) {
    setMathLevel(next);
    localStorage.setItem(MATH_LEVEL_KEY, next);
  }

  function launchFrench() {
    router.push("/placement/francais");
  }

  function resumeFrench() {
    router.push("/placement/francais");
  }

  function launchTraining() {
    saveFrenchTrainingDraft(null);
    localStorage.setItem(LEVEL_KEY, level);
    const skillParam = individualMode ? `&skill=${selectedSkill}` : "";
    router.push(`/placement/francais/entrainement?level=${level}${skillParam}`);
  }

  function resumeTraining() {
    const d = loadFrenchTrainingDraft();
    const resumeLevel = d?.level ?? level;
    localStorage.setItem(LEVEL_KEY, resumeLevel);
    const skillParam = d?.singleSkill ? `&skill=${d.singleSkill}` : "";
    router.push(`/placement/francais/entrainement?level=${resumeLevel}${skillParam}`);
  }

  async function resetPlacementDraft() {
    saveFrenchDraft(null);
    setPlacementDraft(null);
    refreshProfile();
    void savePlacementToCloudAction({
      mathHistory: loadMathHistory(),
      frenchSessions: loadFrenchSessions(),
      frenchDraft: null,
      totalHistory: loadTotalHistory(),
    });
  }

  function resetTrainingDraft() {
    saveFrenchTrainingDraft(null);
    setTrainingDraft(null);
  }

  function launchMathTraining() {
    saveMathTrainingDraft(null);
    localStorage.setItem(MATH_LEVEL_KEY, mathLevel);
    router.push(`/placement/mathematiques/entrainement?level=${mathLevel}`);
  }

  if (!ready) {
    return (
      <main className="app-shell flex-1 py-8 pb-32 lg:pb-28">
        <ChargementEnCoursCard title="Placement" />
      </main>
    );
  }

  return (
    <main className="app-shell flex-1 space-y-6 py-8 pb-32 lg:pb-28">
      <PlacementPageHeader label="Positionnement" title="Test de placement" backHref="/" />

      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4 space-y-4">
        <div className="grid grid-cols-2 gap-3 divide-x divide-[var(--color-border-default)]">
          <ScoreColumn title="Mathématiques" points={mathCounted} />
          <ScoreColumn title="Français" points={frenchCounted} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => router.push("/placement/mathematiques")}
            className="w-full rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
            style={{ background: ACCENT }}
          >
            {mathDone ? "Refaire maths" : "Test maths"}
          </button>
          <button
            type="button"
            onClick={placementInProgress ? resumeFrench : launchFrench}
            className="w-full rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
            style={{ background: ACCENT }}
          >
            {placementInProgress ? "Reprendre" : frenchDone ? "Refaire français" : "Test français"}
          </button>
        </div>

        {placementInProgress && placementDraft && (
          <FrenchProgressBlock
            draft={placementDraft}
            title="Test en cours"
            onReset={() => void resetPlacementDraft()}
            embedded
          />
        )}
      </div>

      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4 space-y-4">
        <div>
          <p className={CARD_TITLE} style={{ color: ACCENT }}>Entraînement maths par niveau</p>
          <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
            Choisissez CSC, CFR, CAF ou CAP. L&apos;entraînement n&apos;est pas sauvegardé si vous quittez.
            Les résultats ne comptent pas pour le total de placement.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <MathLevelToggle
            level={mathLevel}
            onChange={selectMathLevel}
          />
          <button
            type="button"
            onClick={launchMathTraining}
            className="rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-bold text-white"
            style={{ background: ACCENT }}
          >
            S&apos;entraîner
          </button>
        </div>
      </div>

      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4 space-y-4">
        <div>
          <p className={CARD_TITLE} style={{ color: ACCENT }}>Entraînement français par niveau</p>
          <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
            Choisissez un niveau A1, A2 ou B1 pour vous entraîner. Les résultats ne comptent pas pour le total de placement.
          </p>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-[1fr_auto] items-center gap-3">
            <div className="flex min-w-0 items-center gap-2">
              <FrenchLevelToggle
                level={displayLevel}
                onChange={selectLevel}
                disabled={trainingInProgress}
              />
              <button
                type="button"
                onClick={() => setIndividualMode((v) => !v)}
                disabled={trainingInProgress}
                aria-label={individualMode ? "Désactiver le mode individuel" : "Activer le mode individuel (CE, CO, PE, PO)"}
                aria-pressed={individualMode}
                title={individualMode ? "Mode individuel actif" : "Entraîner une seule compétence"}
                className={`flex ${LEVEL_CTRL_H} w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                  trainingInProgress ? "cursor-not-allowed opacity-50" : "hover:border-[var(--color-accent-quiz)]"
                } ${
                  individualMode
                    ? "border-transparent text-white"
                    : "border-[var(--color-border-default)] text-[var(--color-text-secondary)]"
                }`}
                style={individualMode ? { background: ACCENT } : undefined}
              >
                <IndividualModeIcon />
              </button>
            </div>
            <button
              type="button"
              onClick={trainingInProgress ? resumeTraining : launchTraining}
              className="shrink-0 justify-self-end rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-bold text-white"
              style={{ background: ACCENT }}
            >
              {trainingInProgress ? "Reprendre" : "S'entraîner"}
            </button>
          </div>
          {individualMode && (
            <FrenchSkillCardsSelect
              selected={selectedSkill}
              onChange={setSelectedSkill}
              disabled={trainingInProgress}
              interactive
            />
          )}
        </div>

        {trainingInProgress && trainingDraft && (
          <FrenchProgressBlock
            draft={trainingDraft}
            title="Entraînement en cours"
            onReset={resetTrainingDraft}
            embedded
          />
        )}
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
        <div className={`w-full ${pendingFrench > 0 ? "mt-1" : "mt-4"}`}>
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

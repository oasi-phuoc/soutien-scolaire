"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { savePlacementToCloudAction } from "@/app/actions/placement";
import { PlacementPageHeader } from "@/components/placement/PlacementPageHeader";
import { PlacementUnifiedChart } from "@/components/placement/PlacementUnifiedChart";
import { PlacementEvolutionChart } from "@/components/placement/PlacementEvolutionChart";
import type { MathTrainingDraft, MathTrainingLevel, PlacementFrenchDraft, PlacementLevel } from "@/lib/placement/types";
import {
  loadFrenchDraft,
  loadFrenchSessions,
  loadFrenchTrainingDraft,
  loadMathHistory,
  loadMathTrainingDraft,
  loadTotalHistory,
  recomputePlacementProfile,
  saveFrenchDraft,
  saveFrenchTrainingDraft,
  saveMathTrainingDraft,
} from "@/lib/placement/storage";
import { MATH_TRAINING_LEVEL_LABELS, MATH_TRAINING_LEVEL_TOGGLE } from "@/lib/placement/math-training-levels";
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

function skillPillState(draft: PlacementFrenchDraft, skill: FrenchSkill): "pending" | "active" | "done" {
  const current = stepIndex(draft.step);
  const idx = STEP_ORDER.indexOf(skill);

  if (current > idx) return "done";
  if (skill === "pe" && draft.peSent) return "done";
  if (skill === "po" && draft.poSent) return "done";
  if (draft.step === skill) return "active";
  return "pending";
}

const PILL_RED_LIGHT = "color-mix(in oklch, #dc2626 22%, white)";
const PILL_RED_DONE = "color-mix(in oklch, #dc2626 68%, #7f1d1d)";
const PILL_RED_ACTIVE = "#7f1d1d";

function FrenchSkillPills({ draft }: { draft: PlacementFrenchDraft }) {
  return (
    <div className="flex items-center justify-center gap-3">
      {STEP_ORDER.map((skill) => {
        const state = skillPillState(draft, skill);
        const pillStyle =
          state === "pending"
            ? { background: PILL_RED_LIGHT, color: "#991b1b" }
            : state === "active"
              ? { background: PILL_RED_ACTIVE, color: "#fff" }
              : { background: PILL_RED_DONE, color: "#fff" };

        const pill = (
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full text-[11px] font-bold"
            style={pillStyle}
          >
            {SKILL_HEADERS[skill]}
          </span>
        );

        if (state === "active") {
          return (
            <div
              key={skill}
              className="rounded-full p-0.5"
              style={{ boxShadow: "0 0 0 2px #7f1d1d" }}
            >
              {pill}
            </div>
          );
        }

        return <div key={skill}>{pill}</div>;
      })}
    </div>
  );
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
          <FrenchSkillPills draft={draft} />
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
      aria-label="Niveau d'entraînement français"
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
      className={`flex shrink-0 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/50 p-0.5 ${disabled ? "opacity-50" : ""}`}
      role="group"
      aria-label="Niveau d'entraînement mathématiques"
    >
      {MATH_TRAINING_LEVEL_TOGGLE.map((opt) => (
        <button
          key={opt.id}
          type="button"
          disabled={disabled}
          onClick={() => !disabled && onChange(opt.id)}
          className={`min-w-[2rem] rounded-md px-2 py-1.5 text-xs font-bold transition-colors ${
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

function MathTrainingProgressBlock({
  draft,
  onReset,
  embedded = false,
}: {
  draft: MathTrainingDraft;
  onReset: () => void;
  embedded?: boolean;
}) {
  const [confirmReset, setConfirmReset] = useState(false);
  const done = draft.validated.filter(Boolean).length;
  const total = draft.validated.length;

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
          <p className={CARD_TITLE} style={{ color: ACCENT }}>Entraînement maths en cours</p>
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            Reset
          </button>
        </div>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Niveau {draft.level} · {done}/{total} exercices validés
        </p>
        <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
          {MATH_TRAINING_LEVEL_LABELS[draft.level]}
        </p>
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

function FrenchSkillToggle({
  selected,
  onChange,
  disabled = false,
}: {
  selected: FrenchSkill;
  onChange: (next: FrenchSkill) => void;
  disabled?: boolean;
}) {
  return (
    <div
      className={`flex w-full rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/50 p-0.5 ${disabled ? "opacity-50" : ""}`}
      role="group"
      aria-label="Compétence à entraîner"
    >
      {STEP_ORDER.map((skill) => (
        <button
          key={skill}
          type="button"
          disabled={disabled}
          onClick={() => !disabled && onChange(skill)}
          className={`min-w-0 flex-1 rounded-md px-2 py-1.5 text-xs font-bold transition-colors ${
            selected === skill ? "text-white" : "text-[var(--color-text-secondary)]"
          } ${disabled ? "cursor-not-allowed" : ""}`}
          style={selected === skill ? { background: ACCENT } : undefined}
          aria-pressed={selected === skill}
          aria-label={SKILL_HEADERS[skill]}
        >
          {SKILL_HEADERS[skill]}
        </button>
      ))}
    </div>
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
  const [mathLevel, setMathLevel] = useState<MathTrainingLevel>("I");
  const [mathTrainingDraft, setMathTrainingDraft] = useState<MathTrainingDraft | null>(null);

  const placementInProgress = !!(placementDraft && placementDraft.step !== "recap");
  const trainingInProgress = !!(trainingDraft && trainingDraft.step !== "recap");
  const mathTrainingInProgress = !!mathTrainingDraft;
  const displayLevel = trainingInProgress && trainingDraft ? trainingDraft.level : level;
  const displayMathLevel = mathTrainingInProgress && mathTrainingDraft ? mathTrainingDraft.level : mathLevel;

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
      const localMathTrainingDraft = loadMathTrainingDraft();
      try {
        const saved = localStorage.getItem(LEVEL_KEY) as PlacementLevel | null;
        if (localTrainingDraft?.level) setLevel(localTrainingDraft.level);
        else if (saved === "base" || saved === "moyen" || saved === "avance") setLevel(saved);
        const savedMath = localStorage.getItem(MATH_LEVEL_KEY) as MathTrainingLevel | null;
        if (localMathTrainingDraft?.level) setMathLevel(localMathTrainingDraft.level);
        else if (savedMath === "I" || savedMath === "II" || savedMath === "III" || savedMath === "IV") setMathLevel(savedMath);
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
      setMathTrainingDraft(localMathTrainingDraft);
      if (localTrainingDraft?.singleSkill) {
        setIndividualMode(true);
        setSelectedSkill(localTrainingDraft.singleSkill);
      }
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
    if (mathTrainingInProgress) return;
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

  function resumeMathTraining() {
    const d = loadMathTrainingDraft();
    const resumeLevel = d?.level ?? mathLevel;
    localStorage.setItem(MATH_LEVEL_KEY, resumeLevel);
    router.push(`/placement/mathematiques/entrainement?level=${resumeLevel}`);
  }

  function resetMathTrainingDraft() {
    saveMathTrainingDraft(null);
    setMathTrainingDraft(null);
  }

  if (!ready) {
    return (
      <main className="app-shell flex-1 py-8 pb-32 lg:pb-28">
        <p className="text-center text-sm text-[var(--color-text-secondary)]">Chargement…</p>
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
            Choisissez un niveau I à IV pour vous entraîner sur une partie du test. Les résultats ne comptent pas pour le total de placement.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <MathLevelToggle
            level={displayMathLevel}
            onChange={selectMathLevel}
            disabled={mathTrainingInProgress}
          />
          <button
            type="button"
            onClick={mathTrainingInProgress ? resumeMathTraining : launchMathTraining}
            className="rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-bold text-white"
            style={{ background: ACCENT }}
          >
            {mathTrainingInProgress ? "Reprendre" : "S'entraîner"}
          </button>
        </div>

        <p className="text-xs text-[var(--color-text-secondary)]">
          {MATH_TRAINING_LEVEL_LABELS[displayMathLevel]}
        </p>

        {mathTrainingInProgress && mathTrainingDraft && (
          <MathTrainingProgressBlock
            draft={mathTrainingDraft}
            onReset={resetMathTrainingDraft}
            embedded
          />
        )}
      </div>

      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4 space-y-4">
        <div>
          <p className={CARD_TITLE} style={{ color: ACCENT }}>Entraînement français par niveau</p>
          <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
            Choisissez un niveau A1, A2 ou B1 pour vous entraîner. Les résultats ne comptent pas pour le total de placement.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex flex-col gap-2">
            <div className="flex items-center gap-2">
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
                className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg border transition-colors ${
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
            {individualMode && (
              <FrenchSkillToggle
                selected={selectedSkill}
                onChange={setSelectedSkill}
                disabled={trainingInProgress}
              />
            )}
          </div>
          <button
            type="button"
            onClick={trainingInProgress ? resumeTraining : launchTraining}
            className="rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-bold text-white"
            style={{ background: ACCENT }}
          >
            {trainingInProgress ? "Reprendre" : "S'entraîner"}
          </button>
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

"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ComprehensionEcritRunner } from "@/components/communication/ComprehensionEcritRunner";
import { ComprehensionOraleRunner } from "@/components/communication/ComprehensionOraleRunner";
import { ProductionEcriteRunner } from "@/components/communication/ProductionEcriteRunner";
import { OralProductionRunner } from "@/components/communication/OralProductionRunner";
import { savePlacementToCloudAction } from "@/app/actions/placement";
import { buildFrenchSession } from "@/lib/placement/scoring";
import {
  createFrenchSessionId,
  loadFrenchDraft,
  loadFrenchSessions,
  loadFrenchTrainingDraft,
  loadMathHistory,
  loadTotalHistory,
  saveFrenchDraft,
  saveFrenchSession,
  saveFrenchTrainingDraft,
  recomputePlacementProfile,
} from "@/lib/placement/storage";
import {
  lessonIdForPlacement,
  PLACEMENT_LEVEL_LABELS,
  type FrenchBatteryKind,
  type PlacementFrenchDraft,
  type PlacementLevel,
  type PlacementSkill,
  type PlacementSkillResult,
} from "@/lib/placement/types";
import { PlacementPageHeader } from "@/components/placement/PlacementPageHeader";
import { PlacementFrenchHelpContent } from "@/components/placement/PlacementHelpPanel";

const PLACEMENT_ACCENT = "var(--color-accent-quiz)";

type FrenchStep = "intro" | "ce" | "co" | "pe" | "po" | "recap";

function levelFromParam(value: string | null): PlacementLevel {
  if (value === "moyen" || value === "avance") return value;
  return "base";
}

function skillFromParam(value: string | null): PlacementSkill | undefined {
  if (value === "ce" || value === "co" || value === "pe" || value === "po") return value;
  return undefined;
}

const SKILL_LABELS: Record<PlacementSkill, string> = {
  ce: "CE",
  co: "CO",
  pe: "PE",
  po: "PO",
};

function loadDraftForKind(kind: FrenchBatteryKind): PlacementFrenchDraft | null {
  return kind === "training" ? loadFrenchTrainingDraft() : loadFrenchDraft();
}

function saveDraftForKind(kind: FrenchBatteryKind, draft: PlacementFrenchDraft | null) {
  if (kind === "training") saveFrenchTrainingDraft(draft);
  else saveFrenchDraft(draft);
}

export function FrenchPlacementRunner({ batteryKind = "placement" }: { batteryKind?: FrenchBatteryKind }) {
  const router = useRouter();
  const params = useSearchParams();
  const paramLevel = levelFromParam(params.get("level"));
  const paramSkill = skillFromParam(params.get("skill"));
  const isPlacement = batteryKind === "placement";
  const isProgressive = isPlacement;

  // Reprise uniquement pour le test de placement et l'entraînement niveau complet (pas individuel).
  const rawDraft = typeof window !== "undefined" ? loadDraftForKind(batteryKind) : null;
  const initialDraft =
    !isPlacement && (rawDraft?.singleSkill || paramSkill) ? null : rawDraft;
  const [sessionId, setSessionId] = useState(() => initialDraft?.sessionId ?? createFrenchSessionId());
  const [seed, setSeed] = useState(() => initialDraft?.seed ?? Date.now());
  const [level] = useState<PlacementLevel>(() => {
    if (isPlacement) return initialDraft?.level ?? "base";
    return initialDraft?.level ?? paramLevel;
  });
  const [singleSkill] = useState<PlacementSkill | undefined>(() => {
    if (isPlacement) return undefined;
    return paramSkill ?? initialDraft?.singleSkill;
  });
  const [step, setStep] = useState<FrenchStep>(() => {
    if (paramSkill || !initialDraft?.step || initialDraft.step === "recap") return "intro";
    return initialDraft.step;
  });
  const [ceScore, setCeScore] = useState(initialDraft?.ce ?? 0);
  const [coScore, setCoScore] = useState(initialDraft?.co ?? 0);
  const [peSent, setPeSent] = useState(initialDraft?.peSent ?? false);
  const [poSent, setPoSent] = useState(initialDraft?.poSent ?? false);
  const [peSubmissionId, setPeSubmissionId] = useState<string | undefined>(initialDraft?.peSubmissionId);
  const [poSubmissionId, setPoSubmissionId] = useState<string | undefined>(initialDraft?.poSubmissionId);

  const persistDraft = useCallback((next: Partial<{
    step: PlacementFrenchDraft["step"];
    seed?: number;
    ce: number;
    co: number;
    peSent: boolean;
    poSent: boolean;
    peSubmissionId?: string;
    poSubmissionId?: string;
  }>) => {
    if (singleSkill) return;
    const draftStep = next.step ?? (step === "intro" ? "ce" : step);
    saveDraftForKind(batteryKind, {
      sessionId,
      kind: batteryKind,
      progressive: isProgressive,
      level,
      seed: next.seed ?? seed,
      step: draftStep,
      singleSkill,
      ce: next.ce ?? ceScore,
      co: next.co ?? coScore,
      peSent: next.peSent ?? peSent,
      poSent: next.poSent ?? poSent,
      peSubmissionId: next.peSubmissionId ?? peSubmissionId,
      poSubmissionId: next.poSubmissionId ?? poSubmissionId,
      updatedAt: new Date().toISOString(),
    });
  }, [batteryKind, ceScore, coScore, isProgressive, level, peSent, peSubmissionId, poSent, poSubmissionId, seed, sessionId, singleSkill, step]);

  const startBattery = useCallback(() => {
    const activeSeed = isPlacement ? seed : Date.now();
    const firstStep = singleSkill ?? "ce";
    if (!isPlacement) setSeed(activeSeed);
    if (!singleSkill) persistDraft({ step: firstStep, seed: activeSeed });
    setStep(firstStep);
  }, [isPlacement, persistDraft, seed, singleSkill]);

  const restartTraining = useCallback(() => {
    const activeSeed = Date.now();
    const nextSessionId = createFrenchSessionId();
    const firstStep = singleSkill ?? "ce";
    setSessionId(nextSessionId);
    setSeed(activeSeed);
    setCeScore(0);
    setCoScore(0);
    setPeSent(false);
    setPoSent(false);
    setPeSubmissionId(undefined);
    setPoSubmissionId(undefined);
    if (singleSkill) {
      saveFrenchTrainingDraft(null);
    } else {
      saveFrenchTrainingDraft({
        sessionId: nextSessionId,
        kind: "training",
        progressive: false,
        level,
        seed: activeSeed,
        step: firstStep,
        ce: 0,
        co: 0,
        peSent: false,
        poSent: false,
        updatedAt: new Date().toISOString(),
      });
    }
    setStep(firstStep);
  }, [level, singleSkill]);

  const finalizePlacementSession = useCallback((overrides?: {
    ce?: number;
    co?: number;
    peSent?: boolean;
    poSent?: boolean;
    peSubmissionId?: string;
    poSubmissionId?: string;
  }) => {
    const session = buildFrenchSession({
      id: sessionId,
      date: new Date().toISOString(),
      kind: "placement",
      progressive: true,
      level,
      ce: overrides?.ce ?? ceScore,
      co: overrides?.co ?? coScore,
      pe: null,
      po: null,
      peSent: overrides?.peSent ?? peSent,
      poSent: overrides?.poSent ?? poSent,
      peSubmissionId: overrides?.peSubmissionId ?? peSubmissionId ?? null,
      poSubmissionId: overrides?.poSubmissionId ?? poSubmissionId ?? null,
    });
    saveFrenchSession(session);
    saveFrenchDraft(null);
    void savePlacementToCloudAction({
      mathHistory: loadMathHistory(),
      frenchSessions: loadFrenchSessions(),
      totalHistory: loadTotalHistory(),
      frenchDraft: null,
    });
    recomputePlacementProfile();
    return session;
  }, [ceScore, coScore, level, peSent, peSubmissionId, poSent, poSubmissionId, sessionId]);

  const finalizeTraining = useCallback(() => {
    saveFrenchTrainingDraft(null);
  }, []);

  const finishSingleSkillTraining = useCallback((result: PlacementSkillResult) => {
    if (result.skill === "ce") setCeScore(result.points);
    if (result.skill === "co") setCoScore(result.points);
    if (result.skill === "pe") {
      setPeSent(Boolean(result.sent));
      if (result.submissionId) setPeSubmissionId(result.submissionId);
    }
    if (result.skill === "po") {
      setPoSent(Boolean(result.sent));
      if (result.submissionId) setPoSubmissionId(result.submissionId);
    }
    finalizeTraining();
    setStep("recap");
  }, [finalizeTraining]);

  const onSkillComplete = useCallback((result: PlacementSkillResult) => {
    if (!isPlacement && singleSkill) {
      finishSingleSkillTraining(result);
      return;
    }
    if (result.skill === "ce") {
      setCeScore(result.points);
      persistDraft({ step: "co", ce: result.points });
      setStep("co");
      return;
    }
    if (result.skill === "co") {
      setCoScore(result.points);
      if (isPlacement) {
        const partial = buildFrenchSession({
          id: sessionId,
          date: new Date().toISOString(),
          kind: "placement",
          progressive: true,
          level,
          ce: ceScore,
          co: result.points,
          pe: null,
          po: null,
          peSent: false,
          poSent: false,
        });
        saveFrenchSession(partial);
      }
      persistDraft({ step: "pe", co: result.points });
      setStep("pe");
      return;
    }
    if (result.skill === "pe") {
      setPeSent(Boolean(result.sent));
      if (result.submissionId) setPeSubmissionId(result.submissionId);
      persistDraft({ step: "po", peSent: true, peSubmissionId: result.submissionId });
      setStep("po");
      return;
    }
    if (result.skill === "po") {
      setPoSent(Boolean(result.sent));
      if (result.submissionId) setPoSubmissionId(result.submissionId);
      if (isPlacement) {
        finalizePlacementSession({
          peSent: true,
          poSent: true,
          peSubmissionId,
          poSubmissionId: result.submissionId,
        });
      } else {
        finalizeTraining();
      }
      setStep("recap");
    }
  }, [ceScore, finishSingleSkillTraining, finalizePlacementSession, finalizeTraining, isPlacement, level, peSubmissionId, persistDraft, sessionId, singleSkill]);

  const runnerProps = useMemo(() => ({
    mode: "placement" as const,
    placementBatteryKind: batteryKind,
    placementProgressive: isProgressive,
    placementPeHybrid: isPlacement,
    placementSessionId: sessionId,
    placementSeed: seed,
    onPlacementComplete: onSkillComplete,
  }), [batteryKind, isPlacement, isProgressive, onSkillComplete, seed, sessionId]);

  const introTitle = isPlacement
    ? "TCF progressif"
    : singleSkill
      ? `${PLACEMENT_LEVEL_LABELS[level]} · ${SKILL_LABELS[singleSkill]}`
      : PLACEMENT_LEVEL_LABELS[level];

  const introSubtitle = isPlacement
    ? <PlacementFrenchHelpContent mode="placement" />
    : <PlacementFrenchHelpContent mode="training" level={level} individualSkill={Boolean(singleSkill)} />;

  if (step === "intro") {
    return (
      <main className="app-shell space-y-6 py-8 pb-32 lg:pb-28">
        <PlacementPageHeader
          label={isPlacement ? "Test de placement français" : "Entraînement français"}
          title={introTitle}
          subtitle={introSubtitle}
          backHref="/placement"
        />
        <button
          type="button"
          onClick={startBattery}
          className="w-full rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
          style={{ background: PLACEMENT_ACCENT }}
        >
          Commencer
        </button>
      </main>
    );
  }

  if (step === "recap") {
    const session = buildFrenchSession({
      id: sessionId,
      date: new Date().toISOString(),
      kind: batteryKind,
      progressive: isProgressive,
      level,
      ce: ceScore,
      co: coScore,
      pe: null,
      po: null,
      peSent,
      poSent,
      peSubmissionId: peSubmissionId ?? null,
      poSubmissionId: poSubmissionId ?? null,
    });
    return (
      <main className="app-shell space-y-6 py-8 pb-32 lg:pb-28">
        <h1 className="text-xl font-bold">
          {isPlacement ? "Batterie française terminée" : "Entraînement terminé"}
        </h1>
        <ul className="space-y-2 text-sm">
          {(!singleSkill || singleSkill === "ce") && (
            <li className="flex justify-between"><span>CE</span><span>{ceScore} / 25</span></li>
          )}
          {(!singleSkill || singleSkill === "co") && (
            <li className="flex justify-between"><span>CO</span><span>{coScore} / 25</span></li>
          )}
          {(!singleSkill || singleSkill === "pe") && (
            <li className="flex justify-between"><span>PE</span><span>{peSent ? "Envoyé — en attente" : "—"}</span></li>
          )}
          {(!singleSkill || singleSkill === "po") && (
            <li className="flex justify-between"><span>PO</span><span>{poSent ? "Envoyé — en attente" : "—"}</span></li>
          )}
          {!singleSkill && (
            <li className="flex justify-between border-t pt-2 font-semibold"><span>Total</span><span>{session.rawTotal} / 100</span></li>
          )}
        </ul>
        {!isPlacement && (
          <p className="text-xs text-[var(--color-text-secondary)]">
            Cet entraînement ne compte pas pour votre score de placement.
          </p>
        )}
        <div className="grid gap-3">
          {!isPlacement && (
            <button
              type="button"
              onClick={restartTraining}
              className="w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] py-3 text-sm font-bold text-[var(--color-text-primary)]"
            >
              Refaire avec de nouveaux exercices
            </button>
          )}
          <button type="button" onClick={() => router.push("/placement")} className="w-full rounded-[var(--radius-md)] py-3 text-sm font-bold text-white" style={{ background: PLACEMENT_ACCENT }}>
            Retour au test de placement
          </button>
        </div>
      </main>
    );
  }

  const lessonId = (() => {
    if (step === "po" && isProgressive) return "PO-3";
    const skill = step === "ce" ? "ce" : step === "co" ? "co" : step === "pe" ? "pe" : "po";
    return lessonIdForPlacement(skill, isProgressive && step === "pe" ? "base" : level);
  })();

  return (
    <div
      className="placement-french-runner"
      style={{
        "--color-accent-comm": "var(--color-accent-quiz)",
        "--color-accent-comm-inverse": "var(--color-correction)",
      } as React.CSSProperties}
    >
      {step === "ce" && <ComprehensionEcritRunner key={`ce-${sessionId}-${seed}`} lessonId={lessonId} {...runnerProps} />}
      {step === "co" && <ComprehensionOraleRunner key={`co-${sessionId}-${seed}`} lessonId={lessonId} {...runnerProps} />}
      {step === "pe" && <ProductionEcriteRunner lessonId={lessonId} {...runnerProps} />}
      {step === "po" && <OralProductionRunner lessonId={isProgressive ? "PO-3" : lessonId} {...runnerProps} />}
    </div>
  );
}

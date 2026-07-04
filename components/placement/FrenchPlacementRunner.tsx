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
  loadMathHistory,
  loadTotalHistory,
  saveFrenchDraft,
  saveFrenchSession,
  recomputePlacementProfile,
} from "@/lib/placement/storage";
import {
  lessonIdForPlacement,
  PLACEMENT_LEVEL_LABELS,
  type PlacementFrenchDraft,
  type PlacementLevel,
  type PlacementSkillResult,
} from "@/lib/placement/types";
import { PlacementPageHeader } from "@/components/placement/PlacementPageHeader";

const PLACEMENT_ACCENT = "var(--color-accent-quiz)";

type FrenchStep = "intro" | "ce" | "co" | "pe" | "po" | "recap";

function levelFromParam(value: string | null): PlacementLevel {
  if (value === "moyen" || value === "avance") return value;
  return "base";
}

export function FrenchPlacementRunner() {
  const router = useRouter();
  const params = useSearchParams();
  const paramLevel = levelFromParam(params.get("level"));

  const draft = typeof window !== "undefined" ? loadFrenchDraft() : null;
  const [sessionId] = useState(() => draft?.sessionId ?? createFrenchSessionId());
  const [seed] = useState(() => draft?.seed ?? Date.now());
  const [level] = useState<PlacementLevel>(() => draft?.level ?? paramLevel);
  const [step, setStep] = useState<FrenchStep>(() => {
    const d = typeof window !== "undefined" ? loadFrenchDraft() : null;
    if (d?.step && d.step !== "recap") return d.step;
    return "intro";
  });
  const [ceScore, setCeScore] = useState(draft?.ce ?? 0);
  const [coScore, setCoScore] = useState(draft?.co ?? 0);
  const [peSent, setPeSent] = useState(draft?.peSent ?? false);
  const [poSent, setPoSent] = useState(draft?.poSent ?? false);
  const [peSubmissionId, setPeSubmissionId] = useState<string | undefined>(draft?.peSubmissionId);
  const [poSubmissionId, setPoSubmissionId] = useState<string | undefined>(draft?.poSubmissionId);

  const persistDraft = useCallback((next: Partial<{
    step: PlacementFrenchDraft["step"];
    ce: number;
    co: number;
    peSent: boolean;
    poSent: boolean;
    peSubmissionId?: string;
    poSubmissionId?: string;
  }>) => {
    const draftStep = next.step ?? (step === "intro" ? "ce" : step);
    saveFrenchDraft({
      sessionId,
      level,
      seed,
      step: draftStep,
      ce: next.ce ?? ceScore,
      co: next.co ?? coScore,
      peSent: next.peSent ?? peSent,
      poSent: next.poSent ?? poSent,
      peSubmissionId: next.peSubmissionId ?? peSubmissionId,
      poSubmissionId: next.poSubmissionId ?? poSubmissionId,
      updatedAt: new Date().toISOString(),
    });
  }, [ceScore, coScore, level, peSent, peSubmissionId, poSent, poSubmissionId, seed, sessionId, step]);

  const finalizeSession = useCallback((overrides?: {
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

  const onSkillComplete = useCallback((result: PlacementSkillResult) => {
    if (result.skill === "ce") {
      setCeScore(result.points);
      persistDraft({ step: "co", ce: result.points });
      setStep("co");
      return;
    }
    if (result.skill === "co") {
      setCoScore(result.points);
      const partial = buildFrenchSession({
        id: sessionId,
        date: new Date().toISOString(),
        level,
        ce: ceScore,
        co: result.points,
        pe: null,
        po: null,
        peSent: false,
        poSent: false,
      });
      saveFrenchSession(partial);
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
      finalizeSession({
        peSent: true,
        poSent: true,
        peSubmissionId,
        poSubmissionId: result.submissionId,
      });
      setStep("recap");
    }
  }, [finalizeSession, peSubmissionId, persistDraft]);

  const runnerProps = useMemo(() => ({
    mode: "placement" as const,
    placementSessionId: sessionId,
    placementSeed: seed,
    onPlacementComplete: onSkillComplete,
  }), [onSkillComplete, seed, sessionId]);

  if (step === "intro") {
    return (
      <main className="mx-auto w-full max-w-xl space-y-6 px-4 py-8 pb-32">
        <PlacementPageHeader
          label="Test de placement français"
          title={PLACEMENT_LEVEL_LABELS[level]}
          subtitle="Parcours CE → CO → PE → PO (100 points). Les productions seront envoyées au professeur."
          backHref="/placement"
        />
        <button
          type="button"
          onClick={() => { persistDraft({ step: "ce" }); setStep("ce"); }}
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
      <main className="mx-auto w-full max-w-xl space-y-6 px-4 py-8 pb-32">
        <h1 className="text-xl font-bold">Batterie française terminée</h1>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between"><span>CE</span><span>{ceScore} / 25</span></li>
          <li className="flex justify-between"><span>CO</span><span>{coScore} / 25</span></li>
          <li className="flex justify-between"><span>PE</span><span>{peSent ? "Envoyé — en attente" : "—"}</span></li>
          <li className="flex justify-between"><span>PO</span><span>{poSent ? "Envoyé — en attente" : "—"}</span></li>
          <li className="flex justify-between border-t pt-2 font-semibold"><span>Brut immédiat</span><span>{session.rawTotal} / 100</span></li>
          <li className="flex justify-between text-[var(--color-text-secondary)]"><span>Compté (prorata)</span><span>{session.countedTotal} / 100</span></li>
        </ul>
        <button type="button" onClick={() => router.push("/placement/statistiques")} className="w-full rounded-[var(--radius-md)] py-3 text-sm font-bold text-white" style={{ background: PLACEMENT_ACCENT }}>
          Voir les statistiques
        </button>
      </main>
    );
  }

  const lessonId = lessonIdForPlacement(step === "ce" ? "ce" : step === "co" ? "co" : step === "pe" ? "pe" : "po", level);

  return (
    <div
      className="placement-french-runner"
      style={{
        "--color-accent-comm": "var(--color-accent-quiz)",
        "--color-accent-comm-inverse": "var(--color-accent-quiz)",
      } as React.CSSProperties}
    >
      {step === "ce" && <ComprehensionEcritRunner lessonId={lessonId} {...runnerProps} />}
      {step === "co" && <ComprehensionOraleRunner lessonId={lessonId} {...runnerProps} />}
      {step === "pe" && <ProductionEcriteRunner lessonId={lessonId} {...runnerProps} />}
      {step === "po" && <OralProductionRunner lessonId={lessonId} {...runnerProps} />}
    </div>
  );
}

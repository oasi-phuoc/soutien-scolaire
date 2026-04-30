"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AppBadge } from "@/components/ui/AppBadge";
import { AppButton } from "@/components/ui/AppButton";
import { AppCard } from "@/components/ui/AppCard";
import { AppProgressBar } from "@/components/ui/AppProgressBar";
import {
  MATH_ALGEBRA_ORDER,
  MATH_GEOMETRY_TAB_ORDER,
  getMathModule,
  prerequisitesMet,
} from "@/lib/curriculum/math-data";
import {
  computeRecommendation,
  findPendingEvaluationModule,
  mathGlobalStats,
  type MathTabId,
} from "@/lib/curriculum/recommendation";
import {
  completedPassingIds,
  createInitialProgress,
  loadProgress,
  recordMathEvaluation,
  saveProgress,
  snoozeEvaluation,
} from "@/lib/progress/math-progress";
import type { StoredProgressV1 } from "@/lib/curriculum/types";
import { PASSING_GRADE, MAX_EVAL_ATTEMPTS } from "@/lib/scoring";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export function MathematiquesClient() {
  const router = useRouter();
  const [tab, setTab] = useState<MathTabId>("algebra");
  const [progress, setProgress] = useState<StoredProgressV1>(createInitialProgress);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setHydrated(true);
  }, []);

  const persist = useCallback((next: StoredProgressV1) => {
    setProgress(next);
    saveProgress(next);
  }, []);

  const order = tab === "algebra" ? MATH_ALGEBRA_ORDER : MATH_GEOMETRY_TAB_ORDER;
  const modules = useMemo(
    () => order.map((id) => getMathModule(id)).filter(Boolean),
    [order],
  );

  const reco = useMemo(() => computeRecommendation(tab, progress), [tab, progress]);
  const pendingEvalId = useMemo(
    () => findPendingEvaluationModule(tab, progress),
    [tab, progress],
  );
  const pendingModule = pendingEvalId ? getMathModule(pendingEvalId) : undefined;

  const stats = useMemo(() => mathGlobalStats(progress), [progress]);

  const branchProgress = useMemo(() => {
    const total = order.length;
    const done = completedPassingIds(progress);
    const n = order.filter((id) => done.has(id)).length;
    return total ? Math.round((n / total) * 100) : 0;
  }, [order, progress]);

  return (
    <div className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-8 pb-32">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-alg)]">
          Mathématiques
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Algèbre, géométrie et statistiques
        </h1>
        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
          Parcours PER : onglets indépendants, prérequis croisés et quiz notés sur le barème suisse.
        </p>
      </header>

      <section
        aria-label="Statistiques globales"
        className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/60 p-4"
      >
        <div className="grid grid-cols-3 gap-3 text-center text-sm">
          <div>
            <p className="text-2xl font-semibold text-[var(--color-text-primary)]">
              {stats.finished}/{stats.total}
            </p>
            <p className="text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
              Modules terminés
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-[var(--color-text-primary)]">
              {stats.avgGrade != null ? `${stats.avgGrade}` : "—"}
            </p>
            <p className="text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
              Note moyenne /6
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-[var(--color-text-primary)]">
              {stats.minutes > 0 ? `${stats.minutes} min` : "—"}
            </p>
            <p className="text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
              Temps (bientôt)
            </p>
          </div>
        </div>
      </section>

      <div
        role="tablist"
        aria-label="Branches mathématiques"
        className="flex gap-2 rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] p-1"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "algebra"}
          className={`min-h-11 flex-1 rounded-[var(--radius-md)] px-3 text-sm font-medium transition-colors ${
            tab === "algebra"
              ? "bg-white text-[var(--color-accent-alg)] shadow-sm dark:bg-zinc-900"
              : "text-[var(--color-text-secondary)]"
          }`}
          onClick={() => setTab("algebra")}
        >
          Algèbre et calcul
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "geometry"}
          className={`min-h-11 flex-1 rounded-[var(--radius-md)] px-3 text-sm font-medium transition-colors ${
            tab === "geometry"
              ? "bg-white text-[var(--color-accent-geo)] shadow-sm dark:bg-zinc-900"
              : "text-[var(--color-text-secondary)]"
          }`}
          onClick={() => setTab("geometry")}
        >
          Géométrie et données
        </button>
      </div>

      <AppCard variant="info" header="Prochaine étape recommandée">
        <p className="text-base font-semibold text-[var(--color-text-primary)]">{reco.title}</p>
        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[var(--color-text-secondary)]">
          {reco.reasonLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        {reco.prerequisiteTags.length ? (
          <div className="mt-3 flex flex-wrap gap-1">
            {reco.prerequisiteTags.map((t) => (
              <AppBadge key={t.label} tone={t.ok ? "alg" : "quiz"}>
                {t.label}
                {t.ok ? " ✓" : ""}
              </AppBadge>
            ))}
          </div>
        ) : null}
        {reco.moduleId && reco.ctaLabel ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {reco.kind === "prereq_algebra" ? (
              <AppButton
                accent="alg"
                iconRight={<ArrowIcon />}
                onClick={() => {
                  setTab("algebra");
                  router.push("/mathematiques");
                }}
              >
                {reco.ctaLabel}
              </AppButton>
            ) : (
              <AppButton
                accent={tab === "geometry" ? "geo" : "alg"}
                iconRight={<ArrowIcon />}
                onClick={() => router.push(`/mathematiques/${reco.moduleId}`)}
              >
                {reco.ctaLabel}
              </AppButton>
            )}
          </div>
        ) : null}
        {!hydrated ? (
          <p className="mt-2 text-xs text-[var(--color-text-secondary)]">Chargement du suivi…</p>
        ) : null}
      </AppCard>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
          <span>Progression de la branche</span>
          <span>{branchProgress}%</span>
        </div>
        <AppProgressBar
          value={branchProgress}
          color={tab === "geometry" ? "var(--color-accent-geo)" : "var(--color-accent-alg)"}
          height={6}
        />
      </div>

      <section aria-label="Liste des modules" className="space-y-3">
        <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">Modules</h2>
        <ul className="space-y-3">
          {modules.map((m) => {
            if (!m) return null;
            const prog = progress.math[m.id];
            const done = completedPassingIds(progress);
            const pre = prerequisitesMet(m, done);
            const recoHighlight = reco.moduleId === m.id && reco.kind !== "revision_grade";
            const locked = prog?.state === "locked";
            const pct =
              prog && prog.subTotal
                ? Math.round((prog.subProgress / prog.subTotal) * 100)
                : 0;

            return (
              <li key={m.id}>
                <AppCard
                  variant={recoHighlight ? "info" : "default"}
                  className={recoHighlight ? "ring-2 ring-[var(--color-accent-alg)]/30" : ""}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {m.code} — {m.title}
                      </p>
                      <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                        {prog?.state === "completed"
                          ? `Terminé — note ${prog.grade?.toFixed(1) ?? "—"}/6`
                          : prog?.state === "in_progress"
                            ? `${prog.subProgress}/${prog.subTotal} sous-modules`
                            : locked
                              ? pre.ok
                                ? "Disponible"
                                : `Verrouillé : terminer ${pre.missing.join(", ")}`
                              : "Disponible"}
                      </p>
                      {m.algebraRefs?.length ? (
                        <p className="mt-1 text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
                          Références algèbre : {m.algebraRefs.join(", ")}
                        </p>
                      ) : null}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {prog?.state === "completed" && prog.medal ? (
                        <AppBadge variant="medal">{prog.medal}</AppBadge>
                      ) : null}
                      <AppButton
                        size="sm"
                        variant="secondary"
                        disabled={locked}
                        accent="alg"
                        onClick={() => {
                          if (!locked) router.push(`/mathematiques/${m.id}`);
                        }}
                      >
                        Ouvrir
                      </AppButton>
                    </div>
                  </div>
                  {prog?.state === "in_progress" ? (
                    <div className="mt-3">
                      <AppProgressBar
                        value={pct}
                        color={tab === "geometry" ? "var(--color-accent-geo)" : "var(--color-accent-alg)"}
                      />
                    </div>
                  ) : null}
                </AppCard>
              </li>
            );
          })}
        </ul>
      </section>

      {pendingModule && pendingEvalId ? (
        <AppCard
          variant="warning"
          header={
            <div>
              <p className="text-sm font-semibold">
                Module {pendingModule.code} terminé — bravo !
              </p>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Évalue tes connaissances avant de continuer (seuil {PASSING_GRADE}/6, max{" "}
                {MAX_EVAL_ATTEMPTS} tentatives).
              </p>
            </div>
          }
          footer={
            <>
              <AppButton
                accent="quiz"
                onClick={() => persist(recordMathEvaluation(progress, pendingEvalId, 65))}
              >
                Simuler une évaluation réussie (65 % → {PASSING_GRADE}/6)
              </AppButton>
              <AppButton
                variant="secondary"
                onClick={() => persist(snoozeEvaluation(progress, pendingEvalId))}
              >
                Passer pour l&apos;instant
              </AppButton>
            </>
          }
        >
          <p className="text-sm text-[var(--color-text-secondary)]">
            Métadonnées type quiz : 20 questions, chronomètre, corrections détaillées — à brancher sur le
            moteur de questions.
          </p>
        </AppCard>
      ) : null}

      <p className="text-center text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
        Données de progression : stockage local (aperçu). Branche-les à Supabase pour synchro multi-appareils.
      </p>
    </div>
  );
}

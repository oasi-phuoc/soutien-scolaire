"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { BRTA_DOMAINS } from "@/lib/orientation/brta/types";
import { getLatestBrtaSession, loadBrtaSessions } from "@/lib/orientation/brta/storage";
import { generateResult, computeProgressionStats } from "@/lib/orientation/brta/scoring";

export function BrtaResultsClient() {
  const params = useSearchParams();
  const sessionId = params.get("session");
  const [mounted, setMounted] = useState(false);
  const [sessions, setSessions] = useState<ReturnType<typeof loadBrtaSessions>>([]);

  useEffect(() => {
    setSessions(loadBrtaSessions());
    setMounted(true);
  }, []);

  const session = sessions.find((item) => item.id === sessionId) ?? (mounted ? getLatestBrtaSession() : null);
  const result = session ? generateResult(session) : null;
  const progression = computeProgressionStats(sessions);

  const labels = useMemo(() => Object.fromEntries(Object.entries(BRTA_DOMAINS).map(([key, value]) => [key, value.label])), []);

  if (!mounted) return <main className="app-shell flex-1 py-8" aria-busy="true"><div className="rounded-lg border p-6 text-sm text-[var(--color-text-secondary)]">Chargement de vos résultats…</div></main>;

  if (!session || !result) return <main className="app-shell flex-1 py-8"><div className="rounded-lg border p-6">Aucun résultat disponible. <Link className="font-bold text-[var(--color-theme)]" href="/orientation">Retour à l&apos;orientation</Link></div></main>;

  return <main className="app-shell flex-1 space-y-6 py-8 pb-32"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-theme)]">Bilan indicatif</p><h1 className="mt-2 text-2xl font-bold text-[var(--color-text-primary)]">Vos résultats BRTA</h1><p className="mt-1 text-xs text-[var(--color-text-secondary)]">{new Date(session.date).toLocaleDateString("fr-CH")}</p></div><Link href="/orientation/brta" className="rounded-[var(--radius-md)] bg-[var(--color-theme)] px-4 py-2.5 text-sm font-bold text-white">Refaire le test</Link></div>
    <section className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-6"><p className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">Score global</p><div className="mt-2 flex items-end gap-2"><span className="text-5xl font-bold text-[var(--color-theme)]">{session.overallScore}</span><span className="pb-2 text-sm text-[var(--color-text-secondary)]">/ 100</span></div><p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">{result.profile.overallProfile}</p></section>
    <section className="grid gap-3 sm:grid-cols-2">{session.scores.map((score) => <div key={score.domain} className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4"><div className="flex items-center justify-between gap-3"><p className="text-sm font-bold text-[var(--color-text-primary)]">{labels[score.domain]}</p><span className="text-sm font-bold text-[var(--color-theme)]">{score.normalized}%</span></div><div className="mt-3 h-2 rounded-full bg-[var(--color-bg-secondary)]"><div className="h-full rounded-full bg-[var(--color-theme)]" style={{ width: `${score.normalized}%` }} /></div><p className="mt-2 text-xs text-[var(--color-text-secondary)]">{score.correct} bonne{score.correct > 1 ? "s" : ""} réponse{score.correct > 1 ? "s" : ""} sur {score.total}</p></div>)}</section>
    {sessions.length > 1 && <section className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-5"><p className="text-sm font-bold">Votre progression</p><p className="mt-2 text-sm text-[var(--color-text-secondary)]">Tendance : <strong>{progression.trend === "improving" ? "en progression" : progression.trend === "declining" ? "à surveiller" : "stable"}</strong> ({progression.improvement > 0 ? "+" : ""}{progression.improvement} points)</p></section>}
    <section className="rounded-[var(--radius-lg)] border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><p className="font-bold">À retenir</p><p className="mt-1">Ce résultat est indicatif et pédagogique. Il ne constitue pas un diagnostic psychologique et ne remplace pas une passation officielle accompagnée par un psychologue ou un conseiller d&apos;orientation.</p></section>
  </main>;
}

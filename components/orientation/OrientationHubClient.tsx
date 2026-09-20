"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BRTA_DOMAINS, BRTA_DOMAIN_ORDER } from "@/lib/orientation/brta/types";
import { getLatestBrtaSession, loadBrtaDraft } from "@/lib/orientation/brta/storage";

export function OrientationHubClient() {
  const [hasDraft, setHasDraft] = useState(false);
  const [latest, setLatest] = useState<ReturnType<typeof getLatestBrtaSession>>(null);
  useEffect(() => { setHasDraft(Boolean(loadBrtaDraft())); setLatest(getLatestBrtaSession()); }, []);
  return <main className="app-shell flex-1 space-y-6 py-8 pb-32"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-theme)]">Orientation professionnelle</p><h1 className="mt-2 text-2xl font-bold text-[var(--color-text-primary)]">Mieux comprendre vos aptitudes</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-text-secondary)]">Le BRTA vous propose une première exploration de vos aptitudes cognitives pour nourrir votre réflexion scolaire et professionnelle.</p></div>
    <section className="rounded-[var(--radius-lg)] bg-[var(--color-theme)] p-6 text-white"><p className="text-xs font-bold uppercase tracking-wide text-white/75">Batterie Romande de Tests d&apos;Aptitudes</p><h2 className="mt-3 text-xl font-bold">Un profil en 6 dimensions</h2><p className="mt-2 max-w-xl text-sm leading-6 text-white/80">Des exercices originaux, à réaliser à votre rythme, pour identifier vos points d&apos;appui et les domaines à développer.</p><Link href="/orientation/brta" className="mt-5 inline-flex rounded-[var(--radius-md)] bg-white px-5 py-3 text-sm font-bold text-[var(--color-theme)]">{hasDraft ? "Reprendre le test" : latest ? "Refaire le test" : "Commencer le test"}</Link></section>
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{BRTA_DOMAIN_ORDER.map((domain) => { const item = BRTA_DOMAINS[domain]; return <article key={domain} className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4"><div className="flex items-center gap-3"><span className="text-2xl" aria-hidden>{item.icon}</span><h2 className="text-sm font-bold text-[var(--color-text-primary)]">{item.label}</h2></div><p className="mt-3 text-xs leading-5 text-[var(--color-text-secondary)]">{item.description}</p><p className="mt-3 text-[10px] font-bold uppercase tracking-wide text-[var(--color-theme)]">{item.questionCount} exercices · {item.timeEstimate} min</p></article>; })}</div>
    <section className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-5"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-sm font-bold">Vos résultats</p><p className="mt-1 text-xs text-[var(--color-text-secondary)]">{latest ? `Dernière session : ${latest.overallScore}/100` : "Aucune session terminée"}</p></div>{latest && <Link href={`/orientation/brta/resultats?session=${latest.id}`} className="text-sm font-bold text-[var(--color-theme)]">Voir le bilan</Link>}</div></section>
    <p className="text-xs leading-5 text-[var(--color-text-secondary)]">Le BRTA proposé ici est une activité indicative et éducative. Il ne remplace pas une évaluation psychométrique officielle réalisée par un professionnel.</p>
  </main>;
}

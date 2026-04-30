"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getModuleBySlug } from "@/lib/modules";
import { getLastActivity } from "@/lib/progress-local";

export type RemoteContinue = {
  slug: string;
  progressPercent: number;
};

type Props = {
  remoteLast?: RemoteContinue | null;
  /** Connecté avec Supabase configuré — active la fusion progression compte */
  isLoggedIn?: boolean;
};

const DEFAULT_SLUG = "lit-sons-lettres";

export function HomeContinue({
  remoteLast = null,
  isLoggedIn = false,
}: Props) {
  const [localSlug, setLocalSlug] = useState<string | null>(null);
  const [localProgress, setLocalProgress] = useState(0);

  useEffect(() => {
    const l = getLastActivity();
    setLocalSlug(l.slug);
    setLocalProgress(l.progress);
  }, []);

  const merged = useMemo(() => {
    if (isLoggedIn && remoteLast) {
      const sameModule = remoteLast.slug === localSlug;
      const pct = sameModule
        ? Math.max(remoteLast.progressPercent, localProgress)
        : remoteLast.progressPercent;
      return {
        slug: remoteLast.slug,
        progressPercent: pct,
        sourceShort: sameModule ? "Compte et appareil" : "Ton compte (nuage)",
      };
    }
    const slugUse = localSlug ?? DEFAULT_SLUG;
    const hasLocal = !!localSlug;
    return {
      slug: slugUse,
      progressPercent: hasLocal ? localProgress : 0,
      sourceShort: "Cet appareil",
    };
  }, [isLoggedIn, remoteLast, localSlug, localProgress]);

  const mod = getModuleBySlug(merged.slug);
  const displayTitle = mod?.titleFr ?? `Module (${merged.slug})`;
  const listHrefFallback = "/francais";
  const href = mod ? `/modules/${merged.slug}` : listHrefFallback;

  return (
    <article className="rounded-2xl border border-teal-200 bg-teal-50/80 p-4 dark:border-teal-900 dark:bg-teal-950/40">
      <p className="text-sm font-medium text-teal-900 dark:text-teal-100">
        Dernière activité
      </p>
      <p className="mt-1 text-xs text-teal-800/90 dark:text-teal-300/90">
        {merged.sourceShort}
      </p>
      <p className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-50">
        {!mod ? (
          <span>
            Pas encore de titre pour ce module —{" "}
            <Link href="/francais" className="text-teal-800 underline dark:text-teal-400">
              modules français
            </Link>
          </span>
        ) : (
          displayTitle
        )}
      </p>
      <div
        className="mt-3 h-3 overflow-hidden rounded-full bg-white/70 dark:bg-zinc-900"
        role="progressbar"
        aria-valuenow={merged.progressPercent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-teal-600 transition-[width] dark:bg-teal-500"
          style={{ width: `${merged.progressPercent}%` }}
        />
      </div>
      <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
        {merged.progressPercent}%
      </p>
      <Link
        href={href}
        className="mt-4 flex min-h-12 items-center justify-center rounded-xl bg-teal-700 text-center text-base font-semibold text-white hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
      >
        Continuer
      </Link>
    </article>
  );
}

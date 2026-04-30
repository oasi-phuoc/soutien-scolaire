"use client";

import Link from "next/link";
import { useCallback } from "react";
import { upsertRemoteModuleProgress } from "@/app/actions/progress";
import { persistLastActivity } from "@/lib/progress-local";

type Props = { slug: string; hasFiche: boolean };

export function ModuleActions({ slug, hasFiche }: Props) {
  const markProgress = useCallback(
    (pct: number) => {
      persistLastActivity(slug, pct);
      void upsertRemoteModuleProgress(slug, pct);
    },
    [slug],
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/modules/${slug}/quiz`}
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl bg-teal-700 text-base font-semibold text-white hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
        >
          Mini-test (3 questions)
        </Link>
        {hasFiche ? (
          <Link
            href={`/modules/${slug}/fiche`}
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl border-2 border-teal-700 text-base font-semibold text-teal-800 hover:bg-teal-50 dark:border-teal-500 dark:text-teal-200 dark:hover:bg-teal-950/50"
          >
            Fiche à imprimer
          </Link>
        ) : null}
      </div>
      <p className="text-center text-xs text-zinc-500 dark:text-zinc-500">
        Progression rapide (mémo locale + compte si connecté) :
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl bg-zinc-200 text-base font-semibold text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700"
          onClick={() => markProgress(35)}
        >
          En cours (35 %)
        </button>
        <button
          type="button"
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl border border-zinc-300 bg-transparent text-base font-semibold text-zinc-800 hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-900"
          onClick={() => markProgress(100)}
        >
          Terminé (100 %)
        </button>
      </div>
    </div>
  );
}

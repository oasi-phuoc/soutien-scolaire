"use client";

import Link from "next/link";
import { useState } from "react";
import { CLASS_LEVELS, groupClassesByLevel, type ClassLevelCode } from "@/lib/suivi/class-levels";
import { SuiviIconLoupe } from "@/components/suivi/SuiviIconLoupe";

export type SuiviLevelClassItem = {
  label: string;
  student_count?: number;
};

function studentLabel(count: number) {
  return count === 1 ? "1 élève" : `${count} élèves`;
}

export function SuiviLevelBlocks({
  classes,
  classHref = (label) => `/suivi/classes/${encodeURIComponent(label)}`,
  levels = CLASS_LEVELS,
}: {
  classes: SuiviLevelClassItem[];
  classHref?: (label: string) => string;
  /** Niveaux affichés (défaut : tous). */
  levels?: ClassLevelCode[];
}) {
  const grouped = groupClassesByLevel(classes);
  const [openLevel, setOpenLevel] = useState<ClassLevelCode | null>(null);

  return (
    <div className="divide-y divide-[var(--color-border-default)]">
      {levels.map((level) => {
        const levelClasses = grouped[level];
        const isOpen = openLevel === level;
        return (
          <div key={level} className="py-3 first:pt-0 last:pb-0">
            <button
              type="button"
              onClick={() => setOpenLevel(isOpen ? null : level)}
              className="flex w-full items-center gap-3 py-1 text-left transition-opacity hover:opacity-80"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-bold tracking-wide text-zinc-900 dark:text-zinc-50">{level}</span>
              <span className="ml-auto text-xs tabular-nums text-zinc-500">
                {levelClasses.length} classe{levelClasses.length !== 1 ? "s" : ""}
              </span>
            </button>
            {isOpen && (
              <ul className="mt-2 overflow-hidden rounded-lg border border-[var(--color-border-default)]">
                {levelClasses.length === 0 ? (
                  <li className="px-3 py-2 text-sm text-zinc-400">Aucune classe {level}.</li>
                ) : (
                  levelClasses.map((c, index) => (
                    <li
                      key={c.label}
                      className={`flex items-center gap-2 border-t border-[var(--color-border-default)] px-2 py-2 first:border-t-0 ${
                        index % 2 === 0
                          ? "bg-white dark:bg-zinc-950"
                          : "bg-[var(--color-bg-secondary)]/60 dark:bg-zinc-900/50"
                      }`}
                    >
                      <Link
                        href={classHref(c.label)}
                        className="inline-flex rounded-lg p-1.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        aria-label={`Voir la classe ${c.label}`}
                        title={`Voir ${c.label}`}
                      >
                        <SuiviIconLoupe />
                      </Link>
                      <span className="min-w-0 flex-1 truncate text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        {c.label}
                      </span>
                      {c.student_count != null && (
                        <span className="shrink-0 text-xs tabular-nums text-zinc-500">
                          {studentLabel(c.student_count)}
                        </span>
                      )}
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

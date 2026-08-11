"use client";

import { useState, useTransition } from "react";
import {
  setStudentLessonAccessAction,
  type ClassStudentSuiviRow,
  type StudentLessonAccessPatch,
} from "@/app/actions/suivi";
import {
  PARTIAL_FRENCH_COMM_MAX,
  PARTIAL_FRENCH_GRAMMAR_MAX,
  PARTIAL_MATH_MAX_MODULE,
} from "@/lib/auth/lesson-access";
import { PIVOT_LANGS } from "@/lib/pivot-langs";

const LANGUE_LABELS: Record<string, string> = {
  fr: "Français",
  ...Object.fromEntries(PIVOT_LANGS.map((l) => [l.code, l.labelFr])),
  other: "Autre",
};

function lastSeen(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  const now = new Date();
  const diff = Math.floor((now.getTime() - d.getTime()) / 1000);
  if (diff < 60) return "À l'instant";
  if (diff < 3600) return `Il y a ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `Il y a ${Math.floor(diff / 3600)} h`;
  const days = Math.floor(diff / 86400);
  if (days < 30) return `Il y a ${days} j`;
  return d.toLocaleDateString("fr-CH", { day: "2-digit", month: "short", year: "numeric" });
}

function AccessSwitch({
  checked,
  disabled,
  label,
  description,
  ariaLabel,
  onToggle,
}: {
  checked: boolean;
  disabled?: boolean;
  label: string;
  description: string;
  ariaLabel: string;
  onToggle: () => void;
}) {
  return (
    <label className={`flex items-center justify-between gap-4 select-none ${disabled ? "opacity-50" : "cursor-pointer"}`}>
      <span className="text-sm text-zinc-700 dark:text-zinc-300">
        {label}
        <span className="mt-0.5 block text-xs text-zinc-500 dark:text-zinc-400">{description}</span>
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={onToggle}
        className={`flex h-7 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors disabled:cursor-not-allowed ${
          checked ? "bg-[var(--color-theme)]" : "bg-zinc-300 dark:bg-zinc-600"
        }`}
      >
        <span
          className={`block h-6 w-6 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </button>
    </label>
  );
}

export function StudentPersonalInfoCard({
  student,
  onAccessChange,
}: {
  student: ClassStudentSuiviRow;
  onAccessChange?: (studentId: string, patch: StudentLessonAccessPatch) => void;
}) {
  const location = [student.npa, student.localite].filter(Boolean).join(" ") || null;
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function toggle(patch: StudentLessonAccessPatch) {
    setError(null);
    const previous: StudentLessonAccessPatch = {
      can_free_access: student.can_free_access,
      can_partial_french: student.can_partial_french,
      can_partial_math: student.can_partial_math,
    };
    const next: StudentLessonAccessPatch = { ...previous, ...patch };
    if (next.can_free_access) {
      next.can_partial_french = false;
      next.can_partial_math = false;
    }
    onAccessChange?.(student.id, next);
    startTransition(async () => {
      const res = await setStudentLessonAccessAction(student.id, patch);
      if (!res.ok) {
        onAccessChange?.(student.id, previous);
        setError(res.reason ?? "Impossible de modifier l'accès.");
      }
    });
  }

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">Informations</p>
        <dl className="space-y-2 text-sm">
          {student.langue && (
            <div className="flex gap-2">
              <dt className="w-28 shrink-0 text-zinc-400">Langue</dt>
              <dd className="font-medium text-zinc-700 dark:text-zinc-300">
                {LANGUE_LABELS[student.langue] ?? student.langue}
              </dd>
            </div>
          )}
          {student.adresse && (
            <div className="flex gap-2">
              <dt className="w-28 shrink-0 text-zinc-400">Adresse</dt>
              <dd className="text-zinc-700 dark:text-zinc-300">{student.adresse}</dd>
            </div>
          )}
          {location && (
            <div className="flex gap-2">
              <dt className="w-28 shrink-0 text-zinc-400">NPA / Localité</dt>
              <dd className="text-zinc-700 dark:text-zinc-300">{location}</dd>
            </div>
          )}
          {student.telephone && (
            <div className="flex gap-2">
              <dt className="w-28 shrink-0 text-zinc-400">Téléphone</dt>
              <dd className="text-zinc-700 dark:text-zinc-300">{student.telephone}</dd>
            </div>
          )}
          <div className="flex gap-2">
            <dt className="w-28 shrink-0 text-zinc-400">Dernier accès</dt>
            <dd className={`font-medium ${student.progress_updated_at ? "text-amber-600 dark:text-amber-400" : "text-zinc-400"}`}>
              {lastSeen(student.progress_updated_at)}
            </dd>
          </div>
        </dl>
      </div>

      <div className={`rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950 ${pending ? "opacity-80" : ""}`}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">Accès aux leçons</p>
        <div className="space-y-4">
          <AccessSwitch
            checked={student.can_free_access}
            label="Accès complet"
            description="Toutes les leçons, sans réussite de l'évaluation précédente"
            ariaLabel="Accès complet"
            onToggle={() => toggle({ can_free_access: !student.can_free_access })}
          />
          <div className="rounded-xl border border-zinc-100 bg-zinc-50/80 p-3 dark:border-zinc-800 dark:bg-zinc-900/50">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
              Accès partiel
            </p>
            <div className="space-y-3">
              <AccessSwitch
                checked={student.can_partial_french}
                disabled={student.can_free_access}
                label="Français"
                description={`Grammaire jusqu'à ${PARTIAL_FRENCH_GRAMMAR_MAX} · Communication jusqu'à ${PARTIAL_FRENCH_COMM_MAX}`}
                ariaLabel="Accès partiel français"
                onToggle={() => toggle({ can_partial_french: !student.can_partial_french })}
              />
              <AccessSwitch
                checked={student.can_partial_math}
                disabled={student.can_free_access}
                label="Mathématiques"
                description={`Modules jusqu'à ${PARTIAL_MATH_MAX_MODULE}`}
                ariaLabel="Accès partiel mathématiques"
                onToggle={() => toggle({ can_partial_math: !student.can_partial_math })}
              />
            </div>
          </div>
        </div>
        {error && (
          <p className="mt-3 text-xs text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    </div>
  );
}

function IconUserInfo({ active }: { active?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={active ? "text-[var(--color-theme)]" : "text-zinc-400"}
      aria-hidden
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function StudentInfoButton({
  active,
  onClick,
}: {
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex rounded-lg p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800"
      aria-label={active ? "Masquer les informations" : "Voir les informations personnelles"}
      aria-expanded={active}
    >
      <IconUserInfo active={active} />
    </button>
  );
}

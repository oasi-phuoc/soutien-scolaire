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
  PARTIAL_MATH_A3_MAX,
  PARTIAL_MATH_A8_MAX,
  PARTIAL_MATH_G3_MAX,
} from "@/lib/auth/lesson-access";
import { StudentClasseEditor } from "@/components/suivi/StudentClasseEditor";
import { StudentPasswordEditor } from "@/components/suivi/StudentPasswordEditor";
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
  description?: string;
  ariaLabel: string;
  onToggle: () => void;
}) {
  return (
    <label className={`flex items-center justify-between gap-4 select-none ${disabled ? "opacity-50" : "cursor-pointer"}`}>
      <span className="text-sm text-zinc-700 dark:text-zinc-300">
        {label}
        {description ? (
          <span className="mt-0.5 block text-xs text-zinc-500 dark:text-zinc-400">{description}</span>
        ) : null}
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

function clearPartials(): StudentLessonAccessPatch {
  return {
    can_partial_french_grammar: false,
    can_partial_french_comm: false,
    can_partial_math_a3: false,
    can_partial_math_a8: false,
    can_partial_math_g3: false,
  };
}

export function StudentPersonalInfoCard({
  student,
  onAccessChange,
  onClasseChange,
}: {
  student: ClassStudentSuiviRow;
  onAccessChange?: (studentId: string, patch: StudentLessonAccessPatch) => void;
  onClasseChange?: (studentId: string, newClasse: string) => void;
}) {
  const location = [student.npa, student.localite].filter(Boolean).join(" ") || null;
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function toggle(patch: StudentLessonAccessPatch) {
    setError(null);
    const previous: StudentLessonAccessPatch = {
      can_free_access: student.can_free_access,
      can_partial_french_grammar: student.can_partial_french_grammar,
      can_partial_french_comm: student.can_partial_french_comm,
      can_partial_math_a3: student.can_partial_math_a3,
      can_partial_math_a8: student.can_partial_math_a8,
      can_partial_math_g3: student.can_partial_math_g3,
    };
    const next: StudentLessonAccessPatch = { ...previous, ...patch };
    if (next.can_free_access) {
      Object.assign(next, clearPartials());
    }
    onAccessChange?.(student.id, next);
    startTransition(async () => {
      const res = await setStudentLessonAccessAction(student.id, patch.can_free_access ? { ...patch, ...clearPartials() } : patch);
      if (!res.ok) {
        onAccessChange?.(student.id, previous);
        setError(res.reason ?? "Impossible de modifier l'accès.");
      }
    });
  }

  const partialDisabled = student.can_free_access;

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
          {student.telephone && (
            <div className="flex gap-2">
              <dt className="w-28 shrink-0 text-zinc-400">Téléphone</dt>
              <dd className="font-medium text-zinc-700 dark:text-zinc-300">{student.telephone}</dd>
            </div>
          )}
          {(student.adresse || location) && (
            <div className="flex gap-2">
              <dt className="w-28 shrink-0 text-zinc-400">Adresse</dt>
              <dd className="font-medium text-zinc-700 dark:text-zinc-300">
                {[student.adresse, location].filter(Boolean).join(", ")}
              </dd>
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

      <StudentClasseEditor
        studentId={student.id}
        classe={student.classe}
        compact
        onSaved={(newClasse) => onClasseChange?.(student.id, newClasse)}
      />

      <StudentPasswordEditor studentId={student.id} compact />

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
              Accès partiel — Français
            </p>
            <div className="space-y-3">
              <AccessSwitch
                checked={student.can_partial_french_grammar}
                disabled={partialDisabled}
                label={`Grammaire - ${PARTIAL_FRENCH_GRAMMAR_MAX}`}
                ariaLabel="Accès partiel grammaire G7.1"
                onToggle={() =>
                  toggle({ can_partial_french_grammar: !student.can_partial_french_grammar })
                }
              />
              <AccessSwitch
                checked={student.can_partial_french_comm}
                disabled={partialDisabled}
                label={`Communication - ${PARTIAL_FRENCH_COMM_MAX}`}
                ariaLabel="Accès partiel communication E9.1"
                onToggle={() =>
                  toggle({ can_partial_french_comm: !student.can_partial_french_comm })
                }
              />
            </div>
          </div>
          <div className="rounded-xl border border-zinc-100 bg-zinc-50/80 p-3 dark:border-zinc-800 dark:bg-zinc-900/50">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
              Accès partiel — Mathématiques
            </p>
            <div className="space-y-3">
              <AccessSwitch
                checked={student.can_partial_math_a3}
                disabled={partialDisabled}
                label={`Algèbre ${PARTIAL_MATH_A3_MAX}`}
                ariaLabel="Accès partiel maths A3.1"
                onToggle={() => toggle({ can_partial_math_a3: !student.can_partial_math_a3 })}
              />
              <AccessSwitch
                checked={student.can_partial_math_a8}
                disabled={partialDisabled}
                label={`Algèbre ${PARTIAL_MATH_A8_MAX}`}
                ariaLabel="Accès partiel maths A8.1"
                onToggle={() => toggle({ can_partial_math_a8: !student.can_partial_math_a8 })}
              />
              <AccessSwitch
                checked={student.can_partial_math_g3}
                disabled={partialDisabled}
                label={`Géométrie ${PARTIAL_MATH_G3_MAX}`}
                ariaLabel="Accès partiel maths G3.1"
                onToggle={() => toggle({ can_partial_math_g3: !student.can_partial_math_g3 })}
              />
            </div>
          </div>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
      )}
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

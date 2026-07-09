"use client";

import { PIVOT_LANGS } from "@/lib/pivot-langs";
import type { ClassStudentSuiviRow } from "@/app/actions/suivi";

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

export function StudentPersonalInfoCard({ student }: { student: ClassStudentSuiviRow }) {
  const location = [student.npa, student.localite].filter(Boolean).join(" ") || null;

  return (
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

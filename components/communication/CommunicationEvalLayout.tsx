"use client";

import { useState, type ReactNode } from "react";

const ACCENT = "var(--color-accent-comm)";

export type IntroBullet = { before?: string; strong?: string; text: string };
export type IntroRow = { num: string; title: string; points: string };

export function formatEvalPoints(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(".", ",");
}

export function gradeFromEvalScore(score: number) {
  return Math.min(6, Math.max(1, (score / 25) * 5 + 1));
}

export function mentionFromEvalGrade(grade: number) {
  if (grade >= 5) return "Très bien";
  if (grade >= 4) return "Bien";
  if (grade >= 3) return "À renforcer";
  return "À améliorer";
}

export function CommunicationIntroSection({
  bullets,
  rows,
  tips,
  onStart,
  footer,
}: {
  bullets: IntroBullet[];
  rows: IntroRow[];
  tips: ReactNode;
  onStart: () => void;
  footer?: ReactNode;
}) {
  const [tipsOpen, setTipsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="rounded-[var(--radius-lg)] border border-slate-200 bg-[var(--color-bg-card)] p-5 shadow-none">
        <p className="mb-4 text-sm font-bold text-[var(--color-text-primary)]">Informations</p>
        <ul className="space-y-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: ACCENT }} />
              <span>
                {bullet.before}
                {bullet.strong ? (
                  <strong className="text-[var(--color-text-primary)]">{bullet.strong}</strong>
                ) : null}
                {bullet.text}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-5 space-y-2 border-t border-[var(--color-border-default)] pt-4">
          {rows.map((row) => (
            <div
              key={row.num}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-3 text-sm text-[var(--color-text-primary)]"
            >
              <span className="font-bold" style={{ color: ACCENT }}>{row.num}.</span>
              <span>{row.title}</span>
              <span className="font-bold" style={{ color: ACCENT }}>{row.points}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[var(--radius-lg)] border border-slate-200 bg-white/80 shadow-none">
        <button
          type="button"
          onClick={() => setTipsOpen((value) => !value)}
          className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-bold text-[var(--color-text-primary)]"
        >
          <span>Conseils pour réussir</span>
          <span style={{ color: ACCENT }}>{tipsOpen ? "-" : "+"}</span>
        </button>
        {tipsOpen && (
          <div className="space-y-2 border-t border-[var(--color-border-default)] px-5 py-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {tips}
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onStart}
        className="min-h-12 w-full rounded-[var(--radius-lg)] px-5 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90"
        style={{ background: ACCENT }}
      >
        Commencer l&apos;évaluation
      </button>

      {footer}
    </div>
  );
}

export function CommunicationResultsSummary({
  totalPoints,
  maxPoints = 25,
  pendingTeacher = false,
}: {
  totalPoints: number;
  maxPoints?: number;
  pendingTeacher?: boolean;
}) {
  const note = pendingTeacher ? null : gradeFromEvalScore(totalPoints);
  const mention = pendingTeacher ? "En attente" : mentionFromEvalGrade(note!);

  return (
    <section className="text-center">
      <p className="text-xs font-bold uppercase tracking-[0.35em]" style={{ color: ACCENT }}>Résultats</p>
      <p className="mt-3 text-4xl font-bold text-[var(--color-text-primary)]">
        {pendingTeacher ? "—" : formatEvalPoints(totalPoints)} / {maxPoints}
      </p>
      {!pendingTeacher && note !== null && (
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Note {note.toFixed(1).replace(".", ",")} / 6
        </p>
      )}
      <p className={`${pendingTeacher || note !== null ? "mt-1" : "mt-2"} text-sm font-bold`} style={{ color: ACCENT }}>
        {mention}
      </p>
    </section>
  );
}

export function CommunicationResultsExercise({
  index,
  title,
  scoreLabel,
  open,
  onToggle,
  children,
}: {
  index: number;
  title: string;
  scoreLabel: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold"
      >
        <span>
          <span style={{ color: ACCENT }}>{index + 1}</span> {title}
        </span>
        <span style={{ color: ACCENT }}>{scoreLabel}</span>
      </button>
      {open && (
        <div className="border-t border-[var(--color-border-default)] p-4">
          {children}
        </div>
      )}
    </section>
  );
}

export const EXPRESSION_TAB_HREF = "/francais?tab=communication";

export function CommunicationFinishButton({ onClick, label = "Terminer" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 w-full rounded-[var(--radius-lg)] py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
      style={{ background: ACCENT }}
    >
      {label}
    </button>
  );
}

export function CommunicationTeacherSubmit({
  teachers,
  teacherId,
  onTeacherChange,
  onSend,
  sent,
  isSending,
  sendMessage,
}: {
  teachers: Array<{ id: string; prenom?: string | null; nom?: string | null }>;
  teacherId: string;
  onTeacherChange: (id: string) => void;
  onSend: () => void;
  sent: boolean;
  isSending: boolean;
  sendMessage: string;
}) {
  return (
    <section className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white p-4">
      <h2 className="font-bold text-[var(--color-text-primary)]">Envoyer à un professeur</h2>
      {teachers.length ? (
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <select
            value={teacherId}
            onChange={(event) => onTeacherChange(event.target.value)}
            disabled={sent}
            className="min-h-11 flex-1 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white px-3 text-sm outline-none focus:border-[var(--color-accent-comm)]"
          >
            <option value="">Choisissez un professeur</option>
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>
                {[teacher.prenom, teacher.nom].filter(Boolean).join(" ") || "Professeur"}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={onSend}
            disabled={!teacherId || isSending || sent}
            className="min-h-11 rounded-[var(--radius-md)] bg-[var(--color-accent-comm)] px-5 text-sm font-bold text-white disabled:opacity-35"
          >
            {sent ? "Envoyé" : isSending ? "Envoi…" : "Envoyer"}
          </button>
        </div>
      ) : (
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Aucun professeur n&apos;est encore disponible dans la liste.
        </p>
      )}
      {sendMessage && (
        <p className={`mt-2 text-xs font-semibold ${sent ? "text-emerald-600" : "text-amber-600"}`}>
          {sendMessage}
        </p>
      )}
    </section>
  );
}

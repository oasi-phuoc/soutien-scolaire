"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { markCommunicationLessonComplete } from "@/lib/progress/communication-progress";
import {
  randomFormTemplates,
  type FormField,
  type FormTemplate,
} from "@/lib/curriculum/content/communication/form-prompts";

const ACCENT = "var(--color-accent-comm)";
type Phase = "intro" | "form" | "result";

function FieldControl({
  field,
  value,
  disabled,
  onChange,
}: {
  field: FormField;
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
}) {
  const controlClass =
    "min-h-9 w-full border-0 border-b-2 border-[var(--color-accent-fr)]/45 bg-transparent px-1 text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-amber-500 disabled:opacity-80";
  return (
    <label className={field.wide ? "col-span-1 sm:col-span-2" : ""}>
      <span className="mb-1 block text-xs font-medium text-[var(--color-text-secondary)]">
        {field.label}
      </span>
      {field.options ? (
        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className={controlClass}
        >
          <option value="">Sélectionnez</option>
          {field.options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          type={field.type ?? "text"}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className={controlClass}
          autoComplete="off"
        />
      )}
    </label>
  );
}

function FormCard({
  template,
  answers,
  validated,
  onChange,
}: {
  template: FormTemplate;
  answers: Record<string, string>;
  validated: boolean;
  onChange: (fieldId: string, value: string) => void;
}) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold italic leading-relaxed text-[var(--color-text-primary)]">
        {template.situation}
      </p>
      <section className="border border-[var(--color-border-emphasis)] bg-white px-4 py-5 shadow-sm sm:px-6">
        <div className="mb-5 border-b-2 pb-2 text-center" style={{ borderColor: ACCENT }}>
          <p className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
            {template.organization}
          </p>
          <h2 className="mt-1 text-xl font-bold uppercase text-[var(--color-text-primary)]">
            {template.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
          {template.fields.map((field) => (
            <FieldControl
              key={field.id}
              field={field}
              value={answers[field.id] ?? ""}
              disabled={validated}
              onChange={(v) => onChange(field.id, v)}
            />
          ))}
        </div>
        {validated && (
          <p className="mt-5 border-t border-emerald-200 pt-3 text-center text-sm font-semibold text-emerald-600">
            Formulaire complété.
          </p>
        )}
      </section>
    </div>
  );
}

export function FormProductionRunner() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("intro");
  const [template] = useState<FormTemplate>(() => randomFormTemplates(1)[0]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [validated, setValidated] = useState(false);

  function updateAnswer(fieldId: string, value: string) {
    if (validated) return;
    setAnswers((prev) => ({ ...prev, [fieldId]: value }));
  }

  function saveProgress() {
    try {
      markCommunicationLessonComplete("E1-0");
    } catch { /* local progress remains optional */ }
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-4 pb-32 pt-4">
      <header className="mb-4 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide" style={{ color: ACCENT }}>
          Français · Expression écrite
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/francais?tab=communication"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white"
            style={{ background: ACCENT }}
            aria-label="Retour à l'expression"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">E1.0 — Les formulaires</h1>
        </div>
      </header>

      {phase === "intro" && (
        <div className="space-y-5">
          <section className="space-y-3">
            <h2 className="text-xl font-bold" style={{ color: ACCENT }}>Remplir un formulaire</h2>
            <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">
              Un formulaire demande des informations précises. Lisez d&apos;abord la situation et le titre du formulaire, puis complétez les rubriques que vous connaissez.
            </p>
          </section>
          <section className="rounded-[var(--radius-md)] border-l-4 bg-white/70 p-4" style={{ borderColor: ACCENT }}>
            <h3 className="font-bold text-[var(--color-text-primary)]">À retenir</h3>
            <ul className="mt-2 space-y-2 text-sm text-[var(--color-text-primary)]">
              <li>• Utilisez des informations fictives pour cet exercice.</li>
              <li>• Respectez le format demandé : date, téléphone, NPA ou courriel.</li>
              <li>• Vous pouvez laisser des champs vides si vous ne savez pas.</li>
              <li>• Vérifiez les majuscules dans les noms propres et les localités.</li>
            </ul>
          </section>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Un formulaire est choisi au hasard parmi plusieurs situations suisses.
          </p>
          <button
            type="button"
            onClick={() => setPhase("form")}
            className="mt-2 w-full rounded-full py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: ACCENT }}
          >
            Commencer
          </button>
        </div>
      )}

      {phase === "form" && template && (
        <div className="space-y-6">
          <FormCard
            template={template}
            answers={answers}
            validated={validated}
            onChange={updateAnswer}
          />
          {!validated ? (
            <button
              type="button"
              onClick={() => setValidated(true)}
              className="w-full rounded-full py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: ACCENT }}
            >
              Valider le formulaire
            </button>
          ) : (
            <button
              type="button"
              onClick={() => { saveProgress(); setPhase("result"); }}
              className="w-full rounded-full py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: ACCENT }}
            >
              Terminer la leçon
            </button>
          )}
        </div>
      )}

      {phase === "result" && (
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full text-3xl text-white"
            style={{ background: ACCENT }}
          >
            ✓
          </div>
          <h2 className="mt-5 text-2xl font-bold text-[var(--color-text-primary)]">Leçon terminée</h2>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Vous avez complété le formulaire.</p>
          <button
            type="button"
            onClick={() => router.push("/francais?tab=communication")}
            className="mt-8 rounded-full px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: ACCENT }}
          >
            Retour aux leçons
          </button>
        </div>
      )}
    </div>
  );
}

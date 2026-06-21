"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { normalizeCommunicationProgress } from "@/lib/curriculum/communication-data";
import {
  randomFormTemplates,
  type FormField,
  type FormTemplate,
} from "@/lib/curriculum/content/communication/form-prompts";

const ACCENT = "var(--color-accent-comm)";
const COMM_PROGRESS_KEY = "soutien-comm-progress-v1";
type Phase = "intro" | "forms" | "result";
type FormAnswers = Record<string, Record<string, string>>;

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
  const controlClass = "min-h-9 w-full border-0 border-b-2 border-[var(--color-accent-fr)]/45 bg-transparent px-1 text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-amber-500 disabled:opacity-80";
  return (
    <label className={field.wide ? "col-span-1 sm:col-span-2" : ""}>
      <span className="mb-1 block text-xs font-medium text-[var(--color-text-secondary)]">{field.label}</span>
      {field.options ? (
        <select value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)} className={controlClass}>
          <option value="">Sélectionnez</option>
          {field.options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      ) : (
        <input
          type={field.type ?? "text"}
          value={value}
          disabled={disabled}
          onChange={(event) => onChange(event.target.value)}
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
          <p className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>{template.organization}</p>
          <h2 className="mt-1 text-xl font-bold uppercase text-[var(--color-text-primary)]">{template.title}</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
          {template.fields.map((field) => (
            <FieldControl
              key={field.id}
              field={field}
              value={answers[field.id] ?? ""}
              disabled={validated}
              onChange={(value) => onChange(field.id, value)}
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
  const [templates] = useState<FormTemplate[]>(() => randomFormTemplates(5));
  const [formIndex, setFormIndex] = useState(0);
  const [answers, setAnswers] = useState<FormAnswers>({});
  const [validated, setValidated] = useState<Set<string>>(() => new Set());

  const current = templates[formIndex];
  const currentAnswers = current ? answers[current.id] ?? {} : {};
  const currentComplete = !!current && current.fields.every((field) => (currentAnswers[field.id] ?? "").trim());
  const currentValidated = !!current && validated.has(current.id);
  const allValidated = templates.length > 0 && templates.every((template) => validated.has(template.id));

  function updateAnswer(fieldId: string, value: string) {
    if (!current || currentValidated) return;
    setAnswers((previous) => ({
      ...previous,
      [current.id]: { ...previous[current.id], [fieldId]: value },
    }));
  }

  function validateCurrent() {
    if (!current || !currentComplete || currentValidated) return;
    setValidated((previous) => new Set([...previous, current.id]));
  }

  function resetCurrent() {
    if (!current) return;
    setAnswers((previous) => ({ ...previous, [current.id]: {} }));
    setValidated((previous) => {
      const next = new Set(previous);
      next.delete(current.id);
      return next;
    });
  }

  function saveProgress() {
    try {
      const raw = localStorage.getItem(COMM_PROGRESS_KEY);
      const progress = normalizeCommunicationProgress(raw ? JSON.parse(raw) : {});
      progress["E1-0"] = true;
      localStorage.setItem(COMM_PROGRESS_KEY, JSON.stringify(progress));
      const mainKey = "soutien-learning-progress-v1";
      const mainRaw = localStorage.getItem(mainKey);
      if (mainRaw) {
        const main = JSON.parse(mainRaw) as Record<string, unknown>;
        main.commProgress = progress;
        localStorage.setItem(mainKey, JSON.stringify(main));
        window.dispatchEvent(new CustomEvent("progress-saved", { detail: main }));
      }
    } catch { /* local progress remains optional */ }
  }

  function goBack() {
    if (phase === "intro") router.push("/francais?tab=communication");
    else if (phase === "result") setPhase("forms");
    else setFormIndex((index) => index === 0 ? templates.length - 1 : index - 1);
  }

  function goNext() {
    if (phase === "intro") {
      setPhase("forms");
      return;
    }
    if (phase === "result") {
      saveProgress();
      router.push("/francais?tab=communication");
      return;
    }
    if (formIndex + 1 < templates.length) setFormIndex((index) => index + 1);
    else if (allValidated) setPhase("result");
    else setFormIndex(0);
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-4 pb-32 pt-4">
      <header className="mb-4 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide" style={{ color: ACCENT }}>Français · Expression écrite</p>
        <div className="flex items-center gap-3">
          <Link href="/francais?tab=communication" className="flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ background: ACCENT }} aria-label="Retour à l'expression">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="m15 18-6-6 6-6" /></svg>
          </Link>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">E1.0 — Les formulaires</h1>
        </div>
      </header>

      {phase === "forms" && (
        <div className="mb-6 flex gap-1.5">
          {templates.map((template, index) => (
            <button
              key={template.id}
              type="button"
              onClick={() => setFormIndex(index)}
              aria-label={`Ouvrir le formulaire ${index + 1}`}
              aria-current={index === formIndex ? "step" : undefined}
              className="h-2 flex-1 rounded-full bg-[var(--color-border-default)]"
              style={validated.has(template.id) || index === formIndex ? { background: ACCENT, opacity: index === formIndex ? 0.65 : 1 } : undefined}
            />
          ))}
        </div>
      )}

      {phase === "intro" && (
        <div className="space-y-5">
          <section className="space-y-3">
            <h2 className="text-xl font-bold" style={{ color: ACCENT }}>Remplir un formulaire</h2>
            <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">
              Un formulaire demande des informations précises. Lisez d&apos;abord la situation et le titre, puis complétez chaque rubrique avec une réponse courte et claire.
            </p>
          </section>
          <section className="rounded-[var(--radius-md)] border-l-4 bg-white/70 p-4" style={{ borderColor: ACCENT }}>
            <h3 className="font-bold text-[var(--color-text-primary)]">À retenir</h3>
            <ul className="mt-2 space-y-2 text-sm text-[var(--color-text-primary)]">
              <li>• Utilisez des informations fictives pour cet exercice.</li>
              <li>• Respectez le format demandé : date, téléphone, NPA ou courriel.</li>
              <li>• Écrivez lisiblement et ne laissez aucun champ vide.</li>
              <li>• Vérifiez les majuscules dans les noms propres et les localités.</li>
            </ul>
          </section>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Cinq situations suisses différentes seront choisies au hasard.
          </p>
        </div>
      )}

      {phase === "forms" && current && (
        <FormCard template={current} answers={currentAnswers} validated={currentValidated} onChange={updateAnswer} />
      )}

      {phase === "result" && (
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full text-3xl text-white" style={{ background: ACCENT }}>✓</div>
          <h2 className="mt-5 text-2xl font-bold text-[var(--color-text-primary)]">Leçon terminée</h2>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Vous avez complété les cinq formulaires.</p>
        </div>
      )}

      <div className="hidden fixed bottom-0 left-0 right-0">
        <button type="button" onClick={goBack} aria-label="Retour">Retour</button>
        {phase === "forms" && <button type="button" onClick={resetCurrent} aria-label="Recommencer">Recommencer</button>}
        {phase === "forms" && !currentValidated && (
          <button type="button" onClick={validateCurrent} disabled={!currentComplete} aria-label="Valider">Valider</button>
        )}
        <button type="button" onClick={goNext} aria-label={phase === "result" ? "Terminer" : "Suivant"}>
          {phase === "result" ? "Terminer" : "Suivant"}
        </button>
      </div>
    </div>
  );
}

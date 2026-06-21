"use client";

import { useEffect, useState } from "react";

export interface PrintExercise {
  id: string;
  label: string;
}

export interface ExercisePrintSelection {
  id: string;
  included: boolean;
  occurrences: number;
}

export interface PrintHeaderConfig {
  classLevel: "CSC" | "CFR" | "EPL" | "CPR";
  classNumber: string;
  course: string;
}

export interface PrintConfig {
  theory: boolean;
  evalMode: boolean;
  pointsPerExercise: number;
  exerciseSelection: ExercisePrintSelection[];
  header: PrintHeaderConfig;
  printDate: string;
  version: string;
}

interface PrintConfigSheetProps {
  onClose: () => void;
  onPrint: (config: PrintConfig) => void;
  exercises?: PrintExercise[];
  accentColor?: string;
}

const CLASS_LEVELS: PrintHeaderConfig["classLevel"][] = ["CSC", "CFR", "EPL", "CPR"];
const CLASS_NUMBERS = Array.from({ length: 20 }, (_, index) => String(index + 1).padStart(2, "0"));
const COURSES = [
  "ACM",
  "Calligraphie",
  "Découverte de la société",
  "Découverte de la vie scolaire",
  "Français",
  "Informatique",
  "Mathématiques",
  "Sciences et santé",
  "Sport",
];

function formatPrintDate(date = new Date()): string {
  return new Intl.DateTimeFormat("fr-CH", { day: "2-digit", month: "2-digit", year: "numeric" }).format(date);
}

export function PrintDocumentHeader({ config }: { config: PrintHeaderConfig }) {
  return (
    <div className="print-document-header mb-6 text-black">
      <div className="grid grid-cols-[1fr_auto_1.35fr] items-center gap-4 border-b border-black pb-2">
        <p className="text-lg font-bold uppercase">Classe d&apos;accueil</p>
        <div className="flex items-center gap-2">
          <div className="flex h-12 w-7 -skew-y-6 flex-col items-center justify-center bg-red-600 text-[7px] font-bold leading-none text-white">
            <span>✦</span><span>✦</span><span>✦</span><span>✦</span>
          </div>
          <p className="text-center text-[7px] font-bold uppercase leading-tight">Canton du Valais<br />Kanton Wallis</p>
        </div>
        <div className="text-[7px] leading-tight">
          <p>Département de la santé, des affaires sociales et de la culture</p>
          <p>Service de l&apos;action sociale</p>
          <p>Office de l&apos;asile</p>
          <p>Centre de formation « Le Botza »</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 border-b border-black py-1 text-base font-bold uppercase">
        <p>{config.classLevel} {config.classNumber}</p>
        <p>Cours {config.course}</p>
      </div>
      <div className="mt-5 grid grid-cols-[1fr_0.75fr_74px] items-center gap-5 border border-dotted border-black px-2 py-3 text-sm">
        <p>Prénom <span className="tracking-[0.2em]">...............................</span></p>
        <p>Date <span className="tracking-[0.15em]">....................</span></p>
        <div className="border border-black/50 px-3 py-2">N°</div>
      </div>
    </div>
  );
}

export function PrintDocumentFooter({ date, version, preview = false }: { date: string; version: string; preview?: boolean }) {
  return (
    <div className={`${preview ? "mt-auto flex" : "print-document-footer fixed bottom-0 left-0 right-0 hidden print:flex"} items-end justify-between border-t border-black bg-white pt-1 text-[7px] leading-tight text-black`}>
      <div>
        <p>Référence : LearnUP - Van Thanh Phuoc</p>
        <p>Date de l&apos;impression : {date}</p>
      </div>
      <div className="text-right">
        <p>Version {version}</p>
        <p>{preview ? "Page 1 sur 1" : <><span className="print-page-current" /> sur <span className="print-page-total" /></>}</p>
      </div>
    </div>
  );
}

function CheckBox({
  checked,
  onChange,
  accent,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  accent: string;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors"
      style={{
        borderColor: checked ? accent : "var(--color-border-default)",
        background: checked ? accent : "transparent",
      }}
    >
      {checked && (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

function Counter({
  value,
  onChange,
  min = 1,
  max = 10,
  accent,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--color-border-default)] text-sm font-bold text-[var(--color-text-secondary)] transition-opacity disabled:opacity-30"
        aria-label="Moins"
      >−</button>
      <span
        className="min-w-[2rem] text-center text-sm font-semibold tabular-nums"
        style={{ color: accent }}
      >
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--color-border-default)] text-sm font-bold text-[var(--color-text-secondary)] transition-opacity disabled:opacity-30"
        aria-label="Plus"
      >+</button>
    </div>
  );
}

export function PrintConfigSheet({
  onClose,
  onPrint,
  exercises = [],
  accentColor = "var(--color-theme)",
}: PrintConfigSheetProps) {
  const [step, setStep] = useState(0);
  const [evalMode, setEvalMode] = useState(false);
  const [points, setPoints] = useState(5);
  const [theory, setTheory] = useState(true);
  const [classLevel, setClassLevel] = useState<PrintHeaderConfig["classLevel"]>("CSC");
  const [classNumber, setClassNumber] = useState("01");
  const [course, setCourse] = useState("Mathématiques");
  const [selection, setSelection] = useState<ExercisePrintSelection[]>(() =>
    exercises.map((ex) => ({ id: ex.id, included: true, occurrences: 1 }))
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);

  const setIncluded = (id: string, included: boolean) =>
    setSelection((prev) => prev.map((s) => s.id === id ? {
      ...s,
      included,
      occurrences: included ? Math.max(1, s.occurrences) : 0,
    } : s));

  const setOccurrences = (id: string, occurrences: number) =>
    setSelection((prev) => prev.map((s) => s.id === id ? {
      ...s,
      included: occurrences > 0,
      occurrences,
    } : s));

  const printDate = formatPrintDate();
  const version = "0.1.0";
  const header: PrintHeaderConfig = { classLevel, classNumber, course };

  const handlePrint = () =>
    onPrint({
      theory,
      evalMode,
      pointsPerExercise: points,
      exerciseSelection: selection,
      header,
      printDate,
      version,
    });

  const hasPrintableContent = theory || selection.some((item) => item.included && item.occurrences > 0);

  const handleBack = () => {
    if (step === 0) onClose();
    else setStep((current) => current - 1);
  };

  const handleNext = () => {
    if (step < 2) setStep((current) => current + 1);
    else if (hasPrintableContent) handlePrint();
  };

  const stepLabels = ["Contenu", "En-tête", "Aperçu"];

  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-[var(--color-bg-primary)]">
      {/* Header */}
      <header className="shrink-0 border-b border-[var(--color-border-default)] bg-[var(--color-bg-primary)]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 w-full max-w-xl items-center gap-4 px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            aria-label="Retour"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition-opacity hover:opacity-85"
            style={{ background: accentColor }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <div>
            <h1 className="text-lg font-bold text-[var(--color-text-primary)]">
              Imprimer / Enregistrer en PDF
            </h1>
            <p className="mt-0.5 text-sm text-[var(--color-text-secondary)]">
              {step === 0 && "Choisissez le contenu à inclure"}
              {step === 1 && "Configurez l'en-tête du document"}
              {step === 2 && "Vérifiez le PDF avant l'impression"}
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xl px-5 pb-4">
          <div className="flex gap-2" aria-label="Progression de l'impression">
            {stepLabels.map((label, index) => (
              <button
                key={label}
                type="button"
                onClick={() => setStep(index)}
                className="min-w-0 flex-1 text-left"
                aria-current={index === step ? "step" : undefined}
              >
                <span
                  className="block h-2 rounded-full bg-[var(--color-border-default)] transition-colors"
                  style={index <= step ? { background: accentColor, opacity: index === step ? 0.7 : 1 } : undefined}
                />
                <span className="mt-1 block truncate text-center text-[10px] font-semibold text-[var(--color-text-secondary)]">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <main className="mx-auto w-full max-w-xl px-5 pb-32 pt-6">

          {step === 0 && (
            <>
          {/* ── Mode évaluation ── */}
          <section className="mb-5">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: accentColor }}>
              Mode
            </h2>
            <div className="rounded-xl border border-[var(--color-border-default)] divide-y divide-[var(--color-border-default)]">
              <div className="flex min-h-14 cursor-pointer items-center gap-4 px-4">
                <CheckBox checked={evalMode} onChange={setEvalMode} accent={accentColor} />
                <button
                  type="button"
                  className="flex-1 text-left"
                  onClick={() => setEvalMode((v) => !v)}
                >
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">Mode évaluation</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">Affiche un barème sur le PDF</p>
                </button>
              </div>
              {evalMode && (
                <div className="flex items-center gap-3 px-4 py-3">
                  <span className="flex-1 text-sm text-[var(--color-text-secondary)]">Points par exercice</span>
                  <Counter value={points} onChange={setPoints} min={1} max={20} accent={accentColor} />
                </div>
              )}
            </div>
          </section>

          {/* ── Théorie ── */}
          <section className="mb-5">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: accentColor }}>
              Théorie
            </h2>
            <div className="rounded-xl border border-[var(--color-border-default)]">
              <div className="flex min-h-14 cursor-pointer items-center gap-4 px-4">
                <CheckBox checked={theory} onChange={setTheory} accent={accentColor} />
                <button
                  type="button"
                  className="flex-1 text-left"
                  onClick={() => setTheory((v) => !v)}
                >
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">Inclure la théorie</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    {theory ? "La leçon sera incluse dans le PDF" : "Seulement les exercices"}
                  </p>
                </button>
              </div>
            </div>
          </section>
            </>
          )}

          {/* ── Exercices ── */}
          {step === 0 && exercises.length > 0 && (
            <section>
              <h2 className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: accentColor }}>
                Exercices
              </h2>
              <div className="rounded-xl border border-[var(--color-border-default)] divide-y divide-[var(--color-border-default)]">
                {exercises.map((ex) => {
                  const sel = selection.find((s) => s.id === ex.id)!;
                  return (
                    <div key={ex.id} className="px-4 py-3">
                      <div className="flex items-center gap-4">
                        <CheckBox
                          checked={sel.included}
                          onChange={(v) => setIncluded(ex.id, v)}
                          accent={accentColor}
                        />
                        <button
                          type="button"
                          className="flex-1 text-left"
                          onClick={() => setIncluded(ex.id, !sel.included)}
                        >
                          <p className={`text-sm font-medium ${sel.included ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)] line-through"}`}>
                            {ex.label}
                          </p>
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between pl-10">
                        <span className="text-xs text-[var(--color-text-secondary)]">
                          {sel.occurrences === 0 ? "Exercice retiré" : "Récurrences"}
                        </span>
                        <Counter
                          value={sel.occurrences}
                          onChange={(v) => setOccurrences(ex.id, v)}
                          min={0}
                          max={10}
                          accent={accentColor}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {step === 0 && exercises.length === 0 && (
            <div className="rounded-xl border border-[var(--color-border-default)] px-4 py-8 text-center">
              <p className="text-sm text-[var(--color-text-secondary)]">Aucun exercice disponible pour cette leçon.</p>
            </div>
          )}

          {step === 1 && (
            <section className="space-y-5">
              <h2 className="text-xs font-bold uppercase tracking-wide" style={{ color: accentColor }}>
                En-tête du document
              </h2>
              <div className="space-y-4 rounded-xl border border-[var(--color-border-default)] p-4">
                <div>
                  <label htmlFor="print-class-level" className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                    Classe
                  </label>
                  <select
                    id="print-class-level"
                    value={classLevel}
                    onChange={(event) => setClassLevel(event.target.value as PrintHeaderConfig["classLevel"])}
                    className="min-h-12 w-full rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 text-sm outline-none"
                  >
                    {CLASS_LEVELS.map((level) => <option key={level} value={level}>{level}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="print-class-number" className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                    Numéro
                  </label>
                  <select
                    id="print-class-number"
                    value={classNumber}
                    onChange={(event) => setClassNumber(event.target.value)}
                    className="min-h-12 w-full rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 text-sm outline-none"
                  >
                    {CLASS_NUMBERS.map((number) => <option key={number} value={number}>{number}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="print-course" className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                    Cours
                  </label>
                  <select
                    id="print-course"
                    value={course}
                    onChange={(event) => setCourse(event.target.value)}
                    className="min-h-12 w-full rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 text-sm outline-none"
                  >
                    {COURSES.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </div>
              </div>
              <div className="rounded-xl border border-[var(--color-border-default)] bg-white p-4 shadow-sm">
                <PrintDocumentHeader config={header} />
              </div>
            </section>
          )}

          {step === 2 && (
            <section className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wide" style={{ color: accentColor }}>
                Aperçu avant impression
              </h2>
              <div className="mx-auto flex aspect-[210/297] w-full max-w-md flex-col overflow-hidden border border-zinc-300 bg-white p-5 text-black shadow-lg">
                <PrintDocumentHeader config={header} />
                <div className="min-h-0 flex-1 overflow-hidden text-[8px]">
                  {theory && (
                    <div className="mb-3">
                      <p className="mb-1 font-bold">Théorie</p>
                      <div className="space-y-1 text-zinc-500">
                        <div className="h-1.5 w-full rounded bg-zinc-200" />
                        <div className="h-1.5 w-4/5 rounded bg-zinc-200" />
                        <div className="h-1.5 w-11/12 rounded bg-zinc-200" />
                      </div>
                    </div>
                  )}
                  <p className="mb-2 font-bold">Exercices</p>
                  <ol className="space-y-2">
                    {selection
                      .filter((item) => item.included && item.occurrences > 0)
                      .slice(0, 7)
                      .map((item, index) => {
                        const exercise = exercises.find((candidate) => candidate.id === item.id);
                        return (
                          <li key={item.id} className="flex gap-2 border-b border-zinc-200 pb-1">
                            <span className="font-bold">{index + 1}.</span>
                            <span className="flex-1">{exercise?.label ?? item.id}</span>
                            <span>× {item.occurrences}</span>
                          </li>
                        );
                      })}
                  </ol>
                </div>
                <PrintDocumentFooter date={printDate} version={version} preview />
              </div>
              {!hasPrintableContent && (
                <p className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-700">
                  Sélectionnez la théorie ou au moins un exercice avant d&apos;imprimer.
                </p>
              )}
              <p className="text-center text-sm text-[var(--color-text-secondary)]">
                Appuyez sur <strong>Suivant</strong> pour ouvrir l&apos;impression.
              </p>
            </section>
          )}
        </main>
      </div>

      {/* Legacy action bridge consumed by MainNav. */}
      <div className="hidden fixed bottom-0 left-0 right-0">
        <button type="button" onClick={handleBack} aria-label="Retour">Retour</button>
        <button
          type="button"
          onClick={handleNext}
          disabled={step === 2 && !hasPrintableContent}
          aria-label={step === 2 ? "Terminer et imprimer" : "Suivant"}
        >
          {step === 2 ? "Terminer" : "Suivant"}
        </button>
      </div>
    </div>
  );
}

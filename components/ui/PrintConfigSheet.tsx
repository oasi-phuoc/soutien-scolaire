"use client";

import { useEffect, useState, type ReactNode } from "react";
import { capturePageCss, openPrintPopup } from "@/lib/utils/print";

export interface PrintExercise {
  id: string;
  label: string;
  preview?: ReactNode;
}

export interface ExercisePrintSelection {
  id: string;
  included: boolean;
  occurrences: number;
  points: number;
}

export interface PrintHeaderConfig {
  classLevel: "CSC" | "CFR" | "EPL" | "CPR";
  classNumber: string;
  course: string;
  title?: string;
}

export interface PrintConfig {
  theory: boolean;
  evalMode: boolean;
  exerciseSelection: ExercisePrintSelection[];
  header: PrintHeaderConfig;
  printDate: string;
  version: string;
}

interface PrintConfigSheetProps {
  onClose: () => void;
  onPrint: (config: PrintConfig) => void;
  exercises?: PrintExercise[];
  theoryPreview?: ReactNode;
  accentColor?: string;
  lessonTitle?: string;
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

export function PrintDocumentHeader({
  config,
  evalMode = false,
  totalPoints,
}: {
  config: PrintHeaderConfig;
  evalMode?: boolean;
  totalPoints?: number;
}) {
  return (
    <div className="print-document-header mb-[4%] w-full text-black">
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1.3fr)] items-start gap-[3%] border-b border-black pb-[1.5%]">
        {/* Left: school identity */}
        <div className="text-[clamp(4px,0.85vw,7px)] leading-snug">
          <p className="text-[clamp(8px,1.7vw,14px)] font-bold">SCAI</p>
          <p>2025-2026</p>
          <p className="font-bold uppercase">Classes d&apos;accueil</p>
        </div>
        {/* Centre: logo only */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-etat-du-valais.png" alt="" className="h-11 w-auto shrink-0" style={{ objectFit: "contain" }} />
        {/* Right: department */}
        <div className="text-[clamp(4px,0.85vw,7px)] leading-snug">
          <p>Département de la santé, des affaires sociales et de la culture</p>
          <p>Service de l&apos;action sociale</p>
          <p>Office de l&apos;asile</p>
          <p>Centre de formation « Le Botza »</p>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-3 border-b border-black py-[1%] text-[clamp(8px,2.3vw,16px)] font-bold uppercase leading-tight">
        <p className="text-left">{config.classLevel} {config.classNumber}</p>
        <p className="truncate text-left">Cours {config.course}</p>
      </div>
      {/* Student identity block — Nom / Prénom / Date + table (eval: 4 cols; exercise: N° only) */}
      <div className="mt-[4%] flex items-stretch gap-[4%] py-[2%] text-[clamp(7px,1.9vw,13px)]">
        {/* Left: labels with vertically aligned colons */}
        <div className="flex min-w-0 flex-1 flex-col justify-around gap-[10px]">
          {(["Nom", "Prénom", "Date"] as const).map((label) => (
            <p key={label} className="flex items-baseline">
              <span className="w-[4.5em] shrink-0">{label}</span>
              <span className="shrink-0 pr-[0.3em]">:</span>
              <span className="min-w-0 flex-1 border-b border-black" />
            </p>
          ))}
        </div>
        {/* Right: same 4-column table in both modes; first 3 cols hidden in exercise mode */}
        <table className="h-full shrink-0 table-fixed border-collapse text-center text-[clamp(7px,1.9vw,13px)]">
          <colgroup>
            {[0, 1, 2, 3].map((i) => <col key={i} style={{ width: "3em" }} />)}
          </colgroup>
          <thead>
            <tr>
              {(["Pts", "Total", "Note", "N°"] as const).map((h, i) => {
                const hide = !evalMode && i < 3;
                return (
                  <th key={h} className={`align-middle font-bold ${hide ? "border-0 p-0" : "border border-black px-[0.8em] py-[0.5em]"}`}>
                    {hide ? null : h}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody style={{ height: "100%" }}>
            <tr>
              {([null, evalMode ? (totalPoints ?? null) : null, null, null] as (number | null)[]).map((val, i) => {
                const hide = !evalMode && i < 3;
                const isTotal = i === 1 && evalMode;
                return (
                  <td key={i} className={`align-middle ${hide ? "border-0 p-0" : `border border-black px-[0.8em] py-[0.5em]${isTotal ? " font-bold text-[1.6em]" : ""}`}`}>
                    {val !== null ? val : ""}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
      {config.title && (
        <p className="py-[3%] text-center text-[1.5em] font-bold leading-tight">
          {config.title}
        </p>
      )}
    </div>
  );
}

export function PrintDocumentFooter({
  date,
  preview = false,
  page = 1,
  totalPages = 1,
}: {
  date: string;
  preview?: boolean;
  page?: number;
  totalPages?: number;
}) {
  // `preview` → inline footer at the bottom of the on-screen A4 preview box.
  // otherwise → real footer pinned to the bottom of every printed page via
  // `position: fixed` + CSS page counters (see globals.css @media print).
  return (
    <div className={`${preview ? "mt-auto flex" : "print-document-footer fixed bottom-0 left-0 right-0 hidden print:flex"} items-end justify-between border-t border-black bg-white pt-1 text-[7px] leading-tight text-black`}>
      <div className="flex items-center gap-1.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-pied-page.png"
          alt=""
          style={{ height: 19, objectFit: "contain" }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div>
          <p>Zone Industrielle 4, 1963 Vétroz</p>
          <p>Tél. 027 606 18 60</p>
          <p>Imprimé le {date}</p>
        </div>
      </div>
      <div className="text-right">
        <p>LearnUP - Van Thanh Phuoc</p>
        <p>{preview ? `Page ${page} sur ${totalPages}` : <><span className="print-page-current" /> sur <span className="print-page-total" /></>}</p>
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
  theoryPreview,
  accentColor = "var(--color-theme)",
  lessonTitle = "",
}: PrintConfigSheetProps) {
  const [step, setStep] = useState(0);
  const [evalMode, setEvalMode] = useState(false);
  const [theory, setTheory] = useState(false);
  const [classLevel, setClassLevel] = useState<PrintHeaderConfig["classLevel"]>("CSC");
  const [classNumber, setClassNumber] = useState("01");
  const [course, setCourse] = useState("Mathématiques");
  const [title, setTitle] = useState(() => lessonTitle.replace(/^v\d+(\.\d+)*\s+/i, ""));
  const [previewPage, setPreviewPage] = useState(0);
  const [hasPrinted, setHasPrinted] = useState(false);
  const [showExitWarning, setShowExitWarning] = useState(false);
  const [selection, setSelection] = useState<ExercisePrintSelection[]>(() =>
    exercises.map((ex) => ({ id: ex.id, included: true, occurrences: 1, points: 1 }))
  );

  useEffect(() => {
    setTitle(evalMode ? "Évaluation" : lessonTitle.replace(/^v\d+(\.\d+)*\s+/i, ""));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evalMode]);

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

  const setExercisePoints = (id: string, points: number) =>
    setSelection((prev) => prev.map((item) => item.id === id ? { ...item, points } : item));

  const printDate = formatPrintDate();
  const version = "0.1.0";
  const header: PrintHeaderConfig = { classLevel, classNumber, course, title };

  const handlePrint = () => {
    setHasPrinted(true);
    const node = document.getElementById("print-all-pages-container");
    if (node) {
      const css = capturePageCss();
      const base = window.location.origin;
      // Natural flow: header appears once (page 1), exercises stay whole
      // (break-inside: avoid), the footer is fixed to the bottom of every page
      // via globals.css @media print + CSS page counters. Symmetric top/bottom
      // @page margins give pages 2+ the same top spacing as the footer zone.
      const html = `<!DOCTYPE html><html lang="fr"><head><base href="${base}/"><meta charset="utf-8"><title>Feuille d'exercice</title><style>${css}@page{size:A4 portrait;margin-top:18mm;margin-right:12mm;margin-bottom:20mm;margin-left:12mm;}html,body{margin:0;padding:0;background:white;}body{font-size:10px;line-height:1.55;color:#000;}*{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}.print-exercise{break-inside:avoid;page-break-inside:avoid;}.print-exercise h2{display:none!important;}.print-break-after{break-after:page;page-break-after:always;}</style></head><body>${node.innerHTML}</body></html>`;
      openPrintPopup(html, { title: "Feuille d'exercice", width: 1000, height: 800 });
    }
    onPrint({ theory, evalMode, exerciseSelection: selection, header, printDate, version });
  };

  const hasPrintableContent = theory || selection.some((item) => item.included && item.occurrences > 0);
  const totalPoints = selection
    .filter((s) => s.included && s.occurrences > 0)
    .reduce((sum, s) => sum + s.points * s.occurrences, 0);
  const previewExercises = selection.flatMap((item) => {
    if (!item.included || item.occurrences < 1) return [];
    const exercise = exercises.find((candidate) => candidate.id === item.id);
    return Array.from({ length: item.occurrences }, (_, occurrence) => ({
      key: `${item.id}-${occurrence}`,
      exercise,
      selection: item,
      occurrence,
    }));
  });
  const exercisePages = Array.from(
    { length: Math.ceil(previewExercises.length / 4) },
    (_, index) => previewExercises.slice(index * 4, index * 4 + 4),
  );
  const previewPages: Array<{ showTheory: boolean; exercises: typeof previewExercises }> = [
    ...(theory ? [{ showTheory: true, exercises: [] as typeof previewExercises }] : []),
    ...exercisePages.map((items) => ({ showTheory: false, exercises: items })),
  ];
  if (previewPages.length === 0) previewPages.push({ showTheory: false, exercises: [] });

  useEffect(() => {
    setPreviewPage((current) => Math.min(current, previewPages.length - 1));
  }, [previewPages.length]);
  const currentPreview = previewPages[previewPage]!;

  const handleBack = () => {
    if (step === 0) {
      onClose();
    } else if (step === 2 && previewPage > 0) {
      setPreviewPage((current) => current - 1);
    } else {
      setStep((current) => current - 1);
    }
  };

  const handleNext = () => {
    if (step < 2) {
      setStep((current) => current + 1);
      if (step === 1) setPreviewPage(0);
    } else if (previewPage < previewPages.length - 1) {
      setPreviewPage((current) => current + 1);
    } else if (!hasPrinted) {
      setShowExitWarning(true);
    } else {
      onClose();
    }
  };

  const stepLabels = ["Contenu", "En-tête", "Aperçu"];

  return (
    <div
      className="fixed inset-0 z-40 flex flex-col bg-[var(--color-bg-primary)]"
      data-nav-action-priority="print"
    >
      {/* Header */}
      <header className="shrink-0 border-b border-[var(--color-border-default)] bg-[var(--color-bg-primary)]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 w-full max-w-xl items-center gap-4 px-5 py-4">
          <button
            type="button"
            onClick={handleBack}
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
          {/* ── Mode d'impression ── */}
          <section className="mb-5">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: accentColor }}>
              Mode
            </h2>
            <div className="grid grid-cols-2 rounded-xl bg-[var(--color-bg-secondary)] p-1">
              {[
                { label: "Exercice", value: false },
                { label: "Évaluation", value: true },
              ].map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setEvalMode(option.value)}
                  className="min-h-11 rounded-lg px-3 text-sm font-semibold transition-colors"
                  style={evalMode === option.value
                    ? { background: accentColor, color: "white" }
                    : { color: "var(--color-text-secondary)" }}
                  aria-pressed={evalMode === option.value}
                >
                  {option.label}
                </button>
              ))}
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
                      <div className="mt-3 space-y-2 pl-10">
                        <div className="flex items-center justify-between gap-3">
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
                        {evalMode && sel.occurrences > 0 && (
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-xs text-[var(--color-text-secondary)]">Points</span>
                            <Counter
                              value={sel.points}
                              onChange={(value) => setExercisePoints(ex.id, value)}
                              min={1}
                              max={20}
                              accent={accentColor}
                            />
                          </div>
                        )}
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
                <div className="grid grid-cols-2 gap-3">
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
                <div>
                  <label htmlFor="print-title" className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                    Titre
                  </label>
                  <input
                    id="print-title"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Titre de la leçon…"
                    className="min-h-12 w-full rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 text-sm outline-none"
                  />
                </div>
              </div>
              <div className="rounded-xl border border-[var(--color-border-default)] bg-white p-4 shadow-sm">
                <PrintDocumentHeader config={header} evalMode={evalMode} totalPoints={totalPoints} />
              </div>
            </section>
          )}

          {step === 2 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xs font-bold uppercase tracking-wide" style={{ color: accentColor }}>
                  Aperçu avant impression
                </h2>
                <span className="text-xs font-semibold tabular-nums text-[var(--color-text-secondary)]">
                  Page {previewPage + 1} sur {previewPages.length}
                </span>
              </div>
              <div className="mx-auto flex aspect-[210/297] w-full max-w-[44rem] flex-col overflow-hidden border border-zinc-300 bg-white p-[5%] text-black shadow-lg">
                {/* Header on the first page only — matches the printed PDF */}
                {previewPage === 0 && <PrintDocumentHeader config={header} evalMode={evalMode} totalPoints={totalPoints} />}
                <div className={`min-h-0 flex-1 overflow-hidden text-[clamp(6px,1.35vw,10px)] leading-relaxed ${previewPage > 0 ? "pt-[6%]" : ""}`}>
                  {currentPreview.showTheory && (
                    <div className="print-preview-content origin-top-left [&_button]:hidden [&_[data-no-print]]:hidden [&_h1]:text-[1.25em] [&_h2]:text-[1.2em] [&_h3]:text-[1.1em] [&_p]:text-[1em] [&_.text-2xl]:!text-[1.3em] [&_.text-xl]:!text-[1.15em] [&_.text-lg]:!text-[1.05em] [&_.text-base]:!text-[1em] [&_.text-sm]:!text-[0.85em] [&_.text-xs]:!text-[0.7em]">
                      {theoryPreview ?? (
                        <p className="text-zinc-500">La théorie de la leçon sera incluse dans le document.</p>
                      )}
                    </div>
                  )}
                  {currentPreview.exercises.length > 0 && (() => {
                    const exBefore = previewPages.slice(0, previewPage).reduce((sum, p) => sum + p.exercises.length, 0);
                    return (
                      <ol className="space-y-5">
                        {currentPreview.exercises.map((item, index) => {
                          const seqNum = exBefore + index + 1;
                          return (
                            <li key={item.key} className="break-inside-avoid border-b border-zinc-200 pb-3">
                              <div className="mb-1 flex items-start gap-2 border-b border-black pb-0.5 text-[2.1em] font-bold" style={{ color: accentColor }}>
                                <span className="flex-1">Exercice {seqNum}</span>
                                {evalMode && <span>{item.selection.points} pt{item.selection.points > 1 ? "s" : ""}</span>}
                              </div>
                              <div className="text-zinc-800 [&_button]:pointer-events-none [&_h2]:hidden">
                                {item.exercise?.preview ?? <div className="h-7 border-b border-black/40" />}
                              </div>
                            </li>
                          );
                        })}
                      </ol>
                    );
                  })()}
                </div>
                <PrintDocumentFooter
                  date={printDate}
                  preview
                  page={previewPage + 1}
                  totalPages={previewPages.length}
                />
              </div>
              {!hasPrintableContent && (
                <p className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-700">
                  Sélectionnez la théorie ou au moins un exercice avant d&apos;imprimer.
                </p>
              )}
              <p className="text-center text-sm text-[var(--color-text-secondary)]">
                Utilisez <strong>Suivant</strong> pour feuilleter et <strong>Imprimer</strong> pour ouvrir le PDF.
              </p>
            </section>
          )}
        </main>
      </div>

      {/* Legacy action bridge consumed by MainNav. */}
      <div className="hidden fixed bottom-0 left-0 right-0">
        <button type="button" onClick={handleBack} aria-label="Retour">Retour</button>
        {step === 2 && (
          <button
            type="button"
            onClick={handlePrint}
            disabled={!hasPrintableContent}
            aria-label="Imprimer"
            data-nav-label="Imprimer"
            data-nav-action="validate"
          >
            Imprimer
          </button>
        )}
        <button
          type="button"
          onClick={handleNext}
          disabled={step === 2 && !hasPrintableContent}
          aria-label="Suivant"
          data-nav-label="Suivant"
          data-nav-action="next"
        >
          Suivant
        </button>
      </div>

      {/* Hidden container for popup printing — natural content flow.
          Header is rendered once (first page only); the theory page-breaks
          before the exercises; each exercise stays whole; the footer is fixed
          to the bottom of every page via globals.css @media print. */}
      <div id="print-all-pages-container" className="hidden" aria-hidden="true">
        {/* Header — appears on the first page only */}
        <PrintDocumentHeader config={header} evalMode={evalMode} totalPoints={totalPoints} />

        {/* Theory */}
        {theory && (
          <div className={`${previewExercises.length > 0 ? "print-break-after" : ""} [&_button]:hidden [&_[data-no-print]]:hidden [&_h1]:text-[1.25em] [&_h2]:text-[1.2em] [&_h3]:text-[1.1em] [&_p]:text-[1em]`}>
            {theoryPreview ?? (
              <p className="text-zinc-500">La théorie de la leçon sera incluse dans le document.</p>
            )}
          </div>
        )}

        {/* Exercises — sequential numbering, each kept whole */}
        {previewExercises.length > 0 && (
          <ol className="space-y-5 text-[10px] leading-relaxed">
            {previewExercises.map((item, index) => (
              <li key={item.key} className="print-exercise border-b border-zinc-200 pb-4">
                <div className="mb-1 flex items-start gap-2 border-b border-black pb-0.5 text-[24px] font-bold" style={{ color: accentColor }}>
                  <span className="flex-1">Exercice {index + 1}</span>
                  {evalMode && (
                    <span>{item.selection.points} pt{item.selection.points > 1 ? "s" : ""}</span>
                  )}
                </div>
                <div className="[&_button]:pointer-events-none [&_h2]:hidden">
                  {item.exercise?.preview ?? <div className="h-7 border-b border-black/40" />}
                </div>
              </li>
            ))}
          </ol>
        )}

        {/* Footer — pinned to the bottom of every printed page */}
        <PrintDocumentFooter date={printDate} />
      </div>

      {showExitWarning && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/35 px-5" role="alertdialog" aria-modal="true" aria-labelledby="print-exit-title">
          <div className="w-full max-w-sm rounded-xl bg-[var(--color-bg-primary)] p-5 shadow-2xl">
            <h2 id="print-exit-title" className="text-lg font-bold text-[var(--color-text-primary)]">Quitter sans imprimer ?</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Le document n&apos;a pas encore été imprimé ou enregistré en PDF.
            </p>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="min-h-11 flex-1 rounded-xl border border-[var(--color-border-default)] px-4 text-sm font-semibold text-[var(--color-text-primary)]"
              >
                Quitter
              </button>
              <button
                type="button"
                onClick={() => setShowExitWarning(false)}
                className="min-h-11 flex-1 rounded-xl px-4 text-sm font-bold text-white"
                style={{ background: accentColor }}
              >
                Rester
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

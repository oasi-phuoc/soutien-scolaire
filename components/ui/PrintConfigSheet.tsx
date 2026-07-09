"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode, type RefObject } from "react";
import { capturePageCss, openPrintPopup } from "@/lib/utils/print";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

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
      <div className="grid grid-cols-2 items-start gap-3 border-b border-black pb-[1.5%]">
        {/* Left: school identity */}
        <div className="text-[0.7em] leading-snug">
          <p className="text-[2em] font-bold">SCAI</p>
          <p>2025-2026</p>
          <p className="font-bold uppercase">Classes d&apos;accueil</p>
        </div>
        {/* Right: logo + department, aligned with the course column below. */}
        <div className="flex min-w-0 items-start gap-[4%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-etat-du-valais.webp" alt="" className="w-auto shrink-0" style={{ height: "4.4em", objectFit: "contain" }} />
          <div className="min-w-0 text-[0.7em] leading-snug">
            <p>Département de la santé, des affaires sociales et de la culture</p>
            <p>Service de l&apos;action sociale</p>
            <p>Office de l&apos;asile</p>
            <p>Centre de formation « Le Botza »</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-3 border-b border-black py-[1%] text-[1.6em] font-bold uppercase leading-tight">
        <p className="text-left">{config.classLevel} {config.classNumber}</p>
        <p className="truncate text-left">Cours {config.course}</p>
      </div>
      {/* Student identity block — Nom / Prénom / Date + table (eval: 4 cols; exercise: N° only) */}
      <div className="print-student-identity mt-[4%] flex items-stretch gap-[4%] py-[2%] text-[1.6em] leading-tight">
        {/* Left: labels with vertically aligned colons */}
        <div className="grid min-w-0 flex-1 grid-rows-3 gap-[0.55em]">
          {(["Nom", "Prénom", "Date"] as const).map((label) => (
            <p key={label} className="flex min-h-0 items-end">
              <span className="w-[4.5em] shrink-0">{label}</span>
              <span className="shrink-0 pr-[0.3em]">:</span>
              <span className="min-w-0 flex-1 border-b border-black" />
            </p>
          ))}
        </div>
        {evalMode ? (
          /* Eval mode: 4 equal columns; two rows match the full identity-block height. */
          <div className="grid w-[14em] shrink-0 self-stretch grid-cols-4 grid-rows-2 border-l border-t border-black text-center">
            {(["Pts", "Total", "Note", "N°"] as const).map((heading) => (
              <div key={heading} className="flex min-h-0 items-center justify-center border-b border-r border-black px-[0.35em] font-bold">
                {heading}
              </div>
            ))}
            {[null, totalPoints ?? null, null, null].map((value, index) => (
              <div key={index}
                className={`flex min-h-0 items-center justify-center border-b border-r border-black px-[0.35em]${index === 1 ? " font-bold" : ""}`}
              >
                {value !== null ? value : ""}
              </div>
            ))}
          </div>
        ) : (
          /* Exercise mode: N° keeps the same 3.5em width as one evaluation column. */
          <div className="flex w-[14em] shrink-0 self-stretch items-stretch text-center">
            <div className="min-w-0 flex-1" />
            <div className="grid w-[3.5em] shrink-0 grid-rows-2">
              <div className="flex min-h-0 items-center justify-center border border-black px-[0.35em] font-bold">N°</div>
              <div className="min-h-0 border border-t-0 border-black" />
            </div>
          </div>
        )}
      </div>
      {config.title && (
        <p className="print-document-title py-[3%] text-center text-[2.667em] font-bold leading-tight">
          {config.title}
        </p>
      )}
    </div>
  );
}

export function PrintDocumentFooter({
  date,
  printedBy,
  preview = false,
  page = 1,
  totalPages = 1,
}: {
  date: string;
  printedBy?: string;
  preview?: boolean;
  page?: number;
  totalPages?: number;
}) {
  // `preview` → inline footer at the bottom of the on-screen A4 preview box.
  // otherwise → real footer pinned to the bottom of every printed page via
  // `position: fixed` + CSS page counters (see globals.css @media print).
  return (
    <div className={`${preview ? "mt-auto flex" : "print-document-footer fixed bottom-0 left-0 right-0 hidden print:flex"} items-end justify-between border-t border-black bg-white pt-1 text-[0.7em] leading-tight text-black`}>
      <div className="flex items-center gap-1.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-pied-page.webp"
          alt=""
          style={{ height: "2.714em", objectFit: "contain" }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div>
          <p>LearnUP - Van Thanh Phuoc</p>
          <p>Imprimé le {date}{printedBy ? ` par ${printedBy}` : ""}</p>
        </div>
      </div>
      <div className="text-right">
        <p>Zone Industrielle 4, 1963 Vétroz — Tél. 027 606 18 60</p>
        <p>{preview ? `Page ${page} sur ${totalPages}` : <><span className="print-page-current" /> sur <span className="print-page-total" /></>}</p>
      </div>
    </div>
  );
}

// ── Book-like A4 page preview ─────────────────────────────────────────────
// Splits the content (theory + each exercise) across distinct A4 sheets,
// measuring real heights so each exercise stays whole — same rule as the
// printed output. The header appears on page 1 only; every page has a footer
// with its "Page N sur Total" number.
const A4_RATIO = 297 / 210;

function PaginatedPreview({
  header,
  theoryNode,
  exerciseNodes,
  printDate,
  printedBy,
  pagesContainerRef,
}: {
  header: ReactNode;
  theoryNode: ReactNode | null;
  exerciseNodes: { key: string; node: ReactNode }[];
  printDate: string;
  printedBy?: string;
  pagesContainerRef?: RefObject<HTMLDivElement | null>;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const headerMeasureRef = useRef<HTMLDivElement>(null);
  const footerMeasureRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [pageWidth, setPageWidth] = useState(0);
  const [tick, setTick] = useState(0);
  const [pages, setPages] = useState<number[][]>([]);

  const blocks = useMemo(() => {
    const arr: { key: string; node: ReactNode }[] = [];
    if (theoryNode) arr.push({ key: "__theory__", node: theoryNode });
    exerciseNodes.forEach((e) => arr.push(e));
    return arr;
  }, [theoryNode, exerciseNodes]);
  blockRefs.current = [];

  // Page geometry (px), derived from the available width.
  const padX = (pageWidth * 12) / 210;
  const padTop = (pageWidth * 18) / 210;
  const padBottom = (pageWidth * 12) / 210;
  const pageHeight = pageWidth * A4_RATIO;
  const contentWidth = pageWidth - 2 * padX;
  const contentHeight = pageHeight - padTop - padBottom;
  // Match print scale: 10px at 794px (210mm@96dpi) so measurement matches PDF reflow.
  const baseFont = (pageWidth / 794) * 10;
  const gap = baseFont * 3;

  // Track available width responsively.
  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setPageWidth(Math.min(el.clientWidth, 704));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Recompute after images (logos) load and settle.
  useEffect(() => {
    const t1 = setTimeout(() => setTick((v) => v + 1), 200);
    const t2 = setTimeout(() => setTick((v) => v + 1), 700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [pageWidth, blocks.length]);

  useEffect(() => {
    if (pageWidth === 0 || typeof ResizeObserver === "undefined") return;
    let frame = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setTick((value) => value + 1));
    });
    if (headerMeasureRef.current) observer.observe(headerMeasureRef.current);
    if (footerMeasureRef.current) observer.observe(footerMeasureRef.current);
    blockRefs.current.forEach((node) => { if (node) observer.observe(node); });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pageWidth, blocks]);

  // Pack blocks into pages based on measured heights.
  useLayoutEffect(() => {
    if (pageWidth === 0) return;
    const headerH = headerMeasureRef.current?.offsetHeight ?? 0;
    const footerH = footerMeasureRef.current?.offsetHeight ?? 0;
    const blockH = blocks.map((_, i) => blockRefs.current[i]?.offsetHeight ?? 0);
    const page1Avail = contentHeight - headerH - footerH - gap;
    const pageNAvail = contentHeight - footerH - gap;
    const result: number[][] = [];
    let cur: number[] = [];
    let curH = 0;
    let avail = page1Avail;
    blocks.forEach((_, i) => {
      const h = blockH[i] + gap;
      if (cur.length > 0 && curH + h > avail) {
        result.push(cur);
        cur = [];
        curH = 0;
        avail = pageNAvail;
      }
      cur.push(i);
      curH += h;
    });
    if (cur.length > 0) result.push(cur);
    if (result.length === 0) result.push([]);
    setPages(result);
  }, [pageWidth, blocks, contentHeight, gap, tick]);

  return (
    <div ref={wrapRef} className="w-full">
      {/* Hidden measuring layer — same width & font context as a page. */}
      {pageWidth > 0 && (
        <div
          aria-hidden="true"
          className="print-layout-context pointer-events-none invisible absolute -left-[9999px] top-0"
          style={{ width: contentWidth, fontSize: baseFont }}
        >
          <div ref={headerMeasureRef}>{header}</div>
          {blocks.map((b, i) => (
            <div key={b.key} ref={(el) => { blockRefs.current[i] = el; }}>
              {b.node}
            </div>
          ))}
          <div ref={footerMeasureRef}>
            <PrintDocumentFooter date={printDate} printedBy={printedBy} preview page={1} totalPages={1} />
          </div>
        </div>
      )}

      {/* Visible page sheets, stacked like a book. */}
      <div ref={pagesContainerRef} className="preview-pages-container mx-auto flex flex-col items-center gap-6 overflow-y-auto pb-32 pt-1" style={{ maxHeight: "calc(100vh - 14rem)" }}>
        {pageWidth > 0 && pages.map((blockIdxs, pageIdx) => (
          <div
            key={pageIdx}
            className="preview-page-sheet print-layout-context flex shrink-0 flex-col overflow-hidden rounded-sm border border-zinc-300 bg-white text-black shadow-lg"
            style={{
              width: pageWidth,
              minHeight: pageHeight,
              paddingTop: padTop,
              paddingBottom: padBottom,
              paddingLeft: padX,
              paddingRight: padX,
              fontSize: baseFont,
            }}
          >
            {pageIdx === 0 && header}
            <div className="flex-1">
              {blockIdxs.map((bi, j) => (
                <div key={blocks[bi]!.key} style={{ marginBottom: j < blockIdxs.length - 1 ? gap : 0 }}>
                  {blocks[bi]!.node}
                </div>
              ))}
            </div>
            <PrintDocumentFooter date={printDate} printedBy={printedBy} preview page={pageIdx + 1} totalPages={pages.length} />
          </div>
        ))}
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
  const [hasPrinted, setHasPrinted] = useState(false);
  const [showExitWarning, setShowExitWarning] = useState(false);
  const [printedBy, setPrintedBy] = useState("");
  const [selection, setSelection] = useState<ExercisePrintSelection[]>(() =>
    exercises.map((ex) => ({ id: ex.id, included: true, occurrences: 1, points: 1 }))
  );
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [dragOverIdx, setDragOverIdx] = useState<number | null>(null);
  const previewPagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTitle(evalMode ? "Évaluation" : lessonTitle.replace(/^v\d+(\.\d+)*\s+/i, ""));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evalMode]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const loadPrintedBy = async () => {
      const supabase = createSupabaseBrowserClient();
      if (!supabase) return;
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || cancelled) return;
      const metadata = user.user_metadata as { prenom?: string; nom?: string };
      const fallback = [metadata.prenom, metadata.nom].filter(Boolean).join(" ");
      const { data: profile } = await supabase
        .from("profiles")
        .select("prenom, nom")
        .eq("id", user.id)
        .maybeSingle();
      if (!cancelled) {
        setPrintedBy([profile?.prenom, profile?.nom].filter(Boolean).join(" ") || fallback);
      }
    };
    void loadPrintedBy();
    return () => { cancelled = true; };
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
    const node = previewPagesRef.current;
    if (node) {
      const css = capturePageCss();
      const base = window.location.origin;
      const printNode = node.cloneNode(true) as HTMLDivElement;
      const sourceImages = Array.from(node.querySelectorAll("img"));
      const clonedImages = Array.from(printNode.querySelectorAll("img"));
      clonedImages.forEach((image, index) => {
        const source = sourceImages[index];
        const sourceUrl = source?.currentSrc || source?.src || image.getAttribute("src") || "";
        if (sourceUrl) image.src = new URL(sourceUrl, window.location.href).href;
        image.removeAttribute("srcset");
        image.removeAttribute("sizes");
        image.loading = "eager";
        image.decoding = "sync";
      });
      // Print only the preview sheets and keep the same page box as the on-screen preview.
      const printCss = `@page{size:A4 portrait;margin:0!important;}html,body{width:210mm!important;margin:0!important;padding:0!important;background:white!important;}body *{visibility:hidden!important;}*{box-sizing:border-box!important;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}.preview-pages-container,.preview-pages-container *{visibility:visible!important;}.preview-pages-container{position:absolute!important;left:0!important;top:0!important;width:210mm!important;max-height:none!important;overflow:visible!important;gap:0!important;padding:0!important;margin:0!important;display:block!important;background:white!important;}.preview-page-sheet{box-sizing:border-box!important;width:210mm!important;height:297mm!important;min-height:297mm!important;max-height:297mm!important;overflow:hidden!important;padding:18mm 12mm 12mm!important;font-size:9px!important;line-height:1.55!important;color:#000!important;background:white!important;transform:none!important;box-shadow:none!important;border:none!important;border-radius:0!important;page-break-after:always!important;break-after:page!important;display:flex!important;flex-direction:column!important;margin:0!important;}.preview-page-sheet:last-child{page-break-after:auto!important;break-after:auto!important;}.print-exercise{break-inside:avoid;page-break-inside:avoid;}.print-ex-content h2,.print-ex-content p.font-bold{display:none!important;}img{visibility:visible!important;opacity:1!important;}`;
      const html = `<!DOCTYPE html><html lang="fr"><head><base href="${base}/"><meta charset="utf-8"><title>Feuille d'exercice</title><style>${css}${printCss}</style></head><body>${printNode.outerHTML}</body></html>`;
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

  const handleBack = () => {
    if (step === 0) {
      onClose();
    } else {
      setStep((current) => current - 1);
    }
  };

  const handleNext = () => {
    if (step < 2) {
      setStep((current) => current + 1);
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
        <div className="app-shell flex min-h-20 w-full items-center gap-4 py-4">
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
        <div className="app-shell w-full pb-4">
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
        <main className="app-shell pb-32 pt-6">

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
                {selection.map((sel, selIdx) => {
                  const ex = exercises.find((e) => e.id === sel.id);
                  if (!ex) return null;
                  const isDragOver = dragOverIdx === selIdx && dragIdx !== selIdx;
                  return (
                    <div
                      key={ex.id}
                      draggable
                      onDragStart={() => setDragIdx(selIdx)}
                      onDragOver={(e) => { e.preventDefault(); setDragOverIdx(selIdx); }}
                      onDragEnd={() => {
                        const from = dragIdx;
                        const to = dragOverIdx;
                        if (from !== null && to !== null && from !== to) {
                          setSelection((prev) => {
                            const next = [...prev];
                            const [removed] = next.splice(from, 1);
                            next.splice(to, 0, removed!);
                            return next;
                          });
                        }
                        setDragIdx(null);
                        setDragOverIdx(null);
                      }}
                      className={`px-4 py-3 transition-colors ${isDragOver ? "bg-[var(--color-bg-secondary)]" : ""}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="shrink-0 cursor-grab text-[var(--color-text-tertiary)]" aria-hidden>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="9" cy="7" r="1.5" /><circle cx="9" cy="12" r="1.5" /><circle cx="9" cy="17" r="1.5" />
                            <circle cx="15" cy="7" r="1.5" /><circle cx="15" cy="12" r="1.5" /><circle cx="15" cy="17" r="1.5" />
                          </svg>
                        </div>
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
                      <div className="mt-3 space-y-2 pl-[52px]">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xs text-[var(--color-text-secondary)]">
                            {sel.occurrences === 0 ? "Exercice retiré" : "Questions"}
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
              <h2 className="text-xs font-bold uppercase tracking-wide" style={{ color: accentColor }}>
                Aperçu avant impression
              </h2>
              <PaginatedPreview
                pagesContainerRef={previewPagesRef}
                printDate={printDate}
                printedBy={printedBy}
                header={<PrintDocumentHeader config={header} evalMode={evalMode} totalPoints={totalPoints} />}
                theoryNode={theory ? (
                  <div className="[&_button]:hidden [&_[data-no-print]]:hidden [&_h1]:text-[1.25em] [&_h2]:text-[1.2em] [&_h3]:text-[1.1em] [&_p]:text-[1em] [&_.text-2xl]:!text-[1.3em] [&_.text-xl]:!text-[1.15em] [&_.text-lg]:!text-[1.05em] [&_.text-base]:!text-[1em] [&_.text-sm]:!text-[0.85em] [&_.text-xs]:!text-[0.7em]">
                    {theoryPreview ?? (
                      <p className="text-zinc-500">La théorie de la leçon sera incluse dans le document.</p>
                    )}
                  </div>
                ) : null}
                exerciseNodes={previewExercises.map((item, index) => ({
                  key: item.key,
                  node: (
                    <div className="print-exercise">
                      <div className="mb-1 flex items-start gap-2 border-b border-black pb-0.5 text-[1.6em] font-bold" style={{ color: accentColor }}>
                        <span className="flex-1">Exercice {index + 1}</span>
                        {evalMode && <span style={{ color: "black" }}>{item.selection.points} pt{item.selection.points > 1 ? "s" : ""}</span>}
                      </div>
                      <div className="print-ex-content text-[1.6em] leading-normal text-zinc-800 [&_button]:pointer-events-none">
                        {item.exercise?.preview ?? <div className="h-7 border-b border-black/40" />}
                      </div>
                    </div>
                  ),
                }))}
              />
              {!hasPrintableContent && (
                <p className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-700">
                  Sélectionnez la théorie ou au moins un exercice avant d&apos;imprimer.
                </p>
              )}
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

"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode, type RefObject } from "react";
import { capturePageCss, injectForcedPrintCss, openPrintPopup } from "@/lib/utils/print";
import { AppSelect } from "@/components/ui/AppSelect";
import { ELEVE_CLASSE_TYPES, type EleveClasseType } from "@/lib/eleve-classe-types";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import {
  PrintExerciseLayoutProvider,
  type PrintExerciseColumns,
} from "@/components/print/PrintExerciseLayoutContext";
import { LearnUpMark } from "@/components/brand/LearnUpLogo";

const PRINT_EX_TITLE_CLASS =
  "print-ex-title mb-4 flex items-start gap-2 border-b border-black pb-1.5 text-[1.6em] font-bold";

const PRINT_EX_CONTENT_CLASS =
  "print-ex-content text-[1.6em] leading-normal text-zinc-800 [&_button]:pointer-events-none";

function printExContentClass(answerKey: boolean): string {
  return answerKey ? `${PRINT_EX_CONTENT_CLASS} print-answer-key` : PRINT_EX_CONTENT_CLASS;
}

/** Préfixe compétence (CE/CO/PE/PO) depuis le label catalogue, pour le test complet. */
function printExerciseHeading(
  exercise: PrintExercise | undefined,
  index: number,
  suffix?: string,
): string {
  const fromLabel = exercise?.label?.match(/^(CE|CO|PE|PO)\b/i)?.[1]?.toUpperCase();
  const base = fromLabel
    ? `${fromLabel} - Exercice ${index + 1}`
    : `Exercice ${index + 1}`;
  return suffix ? `${base} — ${suffix}` : base;
}

export interface PrintExercise {
  id: string;
  label: string;
  preview?: ReactNode;
  /** Même série que `preview`, avec réponses affichées (bloc corrigé). */
  correctionPreview?: ReactNode;
  /**
   * Bloc affiché avant le corps de l’exercice (feuille élève), ex. annonces CE.
   * Un saut de page est forcé avant `preview`.
   */
  leadPreview?: ReactNode;
  /**
   * Libellé du corps après `leadPreview` (défaut : « Grille »).
   * Ex. « Questions » pour un message e-mail CE.
   */
  leadFollowTitle?: string;
  /**
   * Bloc corrigé affiché avant les réponses (ex. QR + transcriptions CO, annonces CE).
   * Un saut de page est forcé avant `correctionPreview`.
   */
  correctionLeadPreview?: ReactNode;
  /** Libellé du bloc lead corrigé (défaut : « Audios & transcriptions »). */
  correctionLeadTitle?: string;
  /**
   * Pages supplémentaires après `preview` (feuille élève).
   * Chacune force un saut de page (ex. dialogue PO).
   */
  followPreviews?: { title?: string; preview: ReactNode }[];
  /**
   * Pages supplémentaires après `correctionPreview`.
   * Chacune force un saut de page.
   */
  correctionFollowPreviews?: { title?: string; preview: ReactNode }[];
  /** Points par défaut en mode évaluation (barème du test). */
  defaultPoints?: number;
  /**
   * Si `false`, l’exercice peut partager une page avec le précédent
   * tant qu’il tient entièrement (placement maths). Défaut : saut forcé.
   */
  forceNewPage?: boolean;
  /**
   * Impression maths : nombre de questions par défaut (pool size).
   * Affiche les options « Nombre de questions » / « Nombre de colonnes ».
   */
  defaultQuestionCount?: number;
  /** Active les options de mise en page (questions / colonnes) pour cet exercice. */
  supportsPrintLayout?: boolean;
}

export interface ExercisePrintSelection {
  id: string;
  included: boolean;
  /** Combien de fois l'exercice est répété (blocs Exercice N distincts). */
  occurrences: number;
  /** Nombre de questions dans un bloc (pool size). */
  questionCount: number;
  /** Colonnes pour répartir les questions (1–3). */
  columns: PrintExerciseColumns;
  points: number;
}

export interface PrintHeaderConfig {
  classLevel: EleveClasseType;
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
  /** Page d'annonce (placement) : toujours imprimée en page 1. */
  announcementPreview?: ReactNode;
  accentColor?: string;
  lessonTitle?: string;
  /** Cours par défaut dans l'en-tête (ex. Mathématiques, Français). */
  defaultCourse?: string;
  /** Active le mode Évaluation dès l'ouverture (tests de placement). */
  defaultEvalMode?: boolean;
  /** Sélecteur de niveau FR (compétences séparées). */
  frenchLevelSelectable?: boolean;
  frenchLevel?: "base" | "moyen" | "avance";
  onFrenchLevelChange?: (level: "base" | "moyen" | "avance") => void;
}

const CLASS_LEVELS: PrintHeaderConfig["classLevel"][] = [...ELEVE_CLASSE_TYPES];
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

function PrintExerciseBody({
  selection,
  answerKey = false,
  children,
}: {
  selection: ExercisePrintSelection;
  answerKey?: boolean;
  children: ReactNode;
}) {
  return (
    <PrintExerciseLayoutProvider
      value={{ questionCount: selection.questionCount, columns: selection.columns }}
    >
      <div className={printExContentClass(answerKey)}>
        {children}
      </div>
    </PrintExerciseLayoutProvider>
  );
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
        <LearnUpMark size={22} className="print-footer-mark" />
        <div>
          <p>LearnUp - Thanh Phuoc VAN</p>
          <p>Centre de formation « Le Botza »</p>
          <p>Imprimé le {date}{printedBy ? ` par ${printedBy}` : ""}</p>
        </div>
      </div>
      <div className="text-right">
        <p>Zone Industrielle 4, 1963 Vétroz</p>
        <p>{preview ? `Page ${page} sur ${totalPages}` : <><span className="print-page-current" /> sur <span className="print-page-total" /></>}</p>
      </div>
    </div>
  );
}

// ── A4 preview = PDF (même layout, comme école-manager) ───────────────────
// Les feuilles sont toujours composées en vrai format A4 (210×297 mm).
// L’écran ne fait que les redimensionner via `transform: scale(...)`.
// L’impression clone ce DOM sans changer largeur / padding / police.

const A4_SHEET_STYLE: CSSProperties = {
  width: "210mm",
  height: "297mm",
  minHeight: "297mm",
  maxHeight: "297mm",
  padding: "18mm 12mm 12mm",
  fontSize: "10px",
  lineHeight: 1.55,
  boxSizing: "border-box",
  color: "#000",
  background: "#fff",
};

export function PaginatedPreview({
  header,
  theoryNode,
  exerciseNodes,
  printDate,
  printedBy,
  pagesContainerRef,
}: {
  header: ReactNode;
  theoryNode: ReactNode | null;
  exerciseNodes: { key: string; node: ReactNode; forceNewPage?: boolean }[];
  printDate: string;
  printedBy?: string;
  pagesContainerRef?: RefObject<HTMLDivElement | null>;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const probeRef = useRef<HTMLDivElement>(null);
  const headerMeasureRef = useRef<HTMLDivElement>(null);
  const footerMeasureRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [availWidth, setAvailWidth] = useState(0);
  const [metrics, setMetrics] = useState<{ pageW: number; pageH: number; contentW: number; contentH: number } | null>(null);
  const [tick, setTick] = useState(0);
  const [pages, setPages] = useState<number[][]>([]);

  const blocks = useMemo(() => {
    const arr: { key: string; node: ReactNode; forceNewPage?: boolean }[] = [];
    if (theoryNode) arr.push({ key: "__theory__", node: theoryNode });
    exerciseNodes.forEach((e) => arr.push(e));
    return arr;
  }, [theoryNode, exerciseNodes]);
  blockRefs.current = [];

  const gap = 30; // px between blocks inside a page (at A4 scale, ~3em @ 10px)

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setAvailWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useLayoutEffect(() => {
    const probe = probeRef.current;
    if (!probe) return;
    const cs = getComputedStyle(probe);
    const padL = parseFloat(cs.paddingLeft) || 0;
    const padR = parseFloat(cs.paddingRight) || 0;
    const padT = parseFloat(cs.paddingTop) || 0;
    const padB = parseFloat(cs.paddingBottom) || 0;
    setMetrics({
      pageW: probe.offsetWidth,
      pageH: probe.offsetHeight,
      contentW: probe.clientWidth - padL - padR,
      contentH: probe.clientHeight - padT - padB,
    });
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setTick((v) => v + 1), 200);
    const t2 = setTimeout(() => setTick((v) => v + 1), 700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [metrics, blocks.length]);

  useEffect(() => {
    if (!metrics || typeof ResizeObserver === "undefined") return;
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
  }, [metrics, blocks]);

  useLayoutEffect(() => {
    if (!metrics) return;
    const headerH = headerMeasureRef.current?.offsetHeight ?? 0;
    const footerH = footerMeasureRef.current?.offsetHeight ?? 0;
    const blockH = blocks.map((_, i) => blockRefs.current[i]?.offsetHeight ?? 0);
    const page1Avail = metrics.contentH - headerH - footerH - gap;
    const pageNAvail = metrics.contentH - footerH - gap;
    const result: number[][] = [];
    let cur: number[] = [];
    let curH = 0;
    let avail = page1Avail;
    blocks.forEach((_, i) => {
      const h = blockH[i] + gap;
      const forceNew = blocks[i]?.forceNewPage && cur.length > 0;
      if (forceNew || (cur.length > 0 && curH + h > avail)) {
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
  }, [metrics, blocks, gap, tick]);

  const scale = metrics && availWidth > 0 ? Math.min(1, availWidth / metrics.pageW) : 1;
  const sheetGap = 24;

  return (
    <div ref={wrapRef} className="w-full min-w-0 overflow-x-hidden">
      {/* Sonde A4 — lit les dimensions réelles du navigateur (mm → px). */}
      <div
        ref={probeRef}
        aria-hidden
        className="pointer-events-none invisible absolute -left-[9999px] top-0"
        style={A4_SHEET_STYLE}
      />

      {/* Mesure des blocs au format A4 (identique à l’impression). */}
      {metrics && (
        <div
          aria-hidden
          className="print-layout-context pointer-events-none invisible absolute -left-[9999px] top-0"
          style={{ width: metrics.contentW, fontSize: A4_SHEET_STYLE.fontSize, lineHeight: A4_SHEET_STYLE.lineHeight }}
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

      {/* Aperçu écran : scale visuelle uniquement — le DOM A4 reste intact pour le clone PDF. */}
      <div
        className="mx-auto w-full min-w-0 overflow-x-hidden overflow-y-auto pb-8 pt-1"
        style={{ maxHeight: "calc(100vh - 12rem)" }}
      >
        {metrics && (
          <div
            style={{
              width: metrics.pageW * scale,
              height: pages.length * metrics.pageH * scale + Math.max(0, pages.length - 1) * sheetGap,
              marginInline: "auto",
              position: "relative",
            }}
          >
            <div
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                width: metrics.pageW,
              }}
            >
              <div
                ref={pagesContainerRef}
                className="preview-pages-container flex flex-col"
                style={{ gap: sheetGap / scale }}
              >
                {pages.map((blockIdxs, pageIdx) => (
                  <div
                    key={pageIdx}
                    className="preview-page-sheet print-layout-context flex shrink-0 flex-col overflow-hidden rounded-sm border border-zinc-300 shadow-lg"
                    style={A4_SHEET_STYLE}
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
          </div>
        )}
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
  announcementPreview,
  accentColor = "var(--color-theme)",
  lessonTitle = "",
  defaultCourse = "Mathématiques",
  defaultEvalMode = false,
  frenchLevelSelectable = false,
  frenchLevel = "base",
  onFrenchLevelChange,
}: PrintConfigSheetProps) {
  const [step, setStep] = useState(0);
  const [evalMode, setEvalMode] = useState(defaultEvalMode);
  const [theory, setTheory] = useState(false);
  const [includeCorrections, setIncludeCorrections] = useState(true);
  const [classLevel, setClassLevel] = useState<PrintHeaderConfig["classLevel"]>("CSC");
  const [classNumber, setClassNumber] = useState("01");
  const [course, setCourse] = useState(defaultCourse);
  const [title, setTitle] = useState(() =>
    defaultEvalMode ? "Évaluation" : lessonTitle.replace(/^v\d+(\.\d+)*\s+/i, ""),
  );
  const [hasPrinted, setHasPrinted] = useState(false);
  const [showExitWarning, setShowExitWarning] = useState(false);
  const [printedBy, setPrintedBy] = useState("");
  const [selection, setSelection] = useState<ExercisePrintSelection[]>(() =>
    exercises.map((ex) => ({
      id: ex.id,
      included: true,
      occurrences: 1,
      questionCount: Math.max(1, ex.defaultQuestionCount ?? 5),
      columns: 1 as PrintExerciseColumns,
      points: Math.max(1, ex.defaultPoints ?? 1),
    }))
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

  const setQuestionCount = (id: string, questionCount: number) =>
    setSelection((prev) => prev.map((s) => s.id === id ? { ...s, questionCount } : s));

  const setColumns = (id: string, columns: PrintExerciseColumns) =>
    setSelection((prev) => prev.map((s) => s.id === id ? { ...s, columns } : s));

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
      // Même procédé école-manager : cloner le DOM aperçu tel quel,
      // sans reflow (pas de changement de largeur / padding / police).
      printNode.style.gap = "0";
      printNode.style.maxHeight = "none";
      printNode.style.overflow = "visible";
      printNode.querySelectorAll<HTMLElement>(".preview-page-sheet").forEach((sheet, index, all) => {
        sheet.style.boxShadow = "none";
        sheet.style.border = "none";
        sheet.style.borderRadius = "0";
        sheet.style.pageBreakAfter = index < all.length - 1 ? "always" : "auto";
        sheet.style.breakAfter = index < all.length - 1 ? "page" : "auto";
      });
      const wysiwygCss = `
        html, body { margin: 0 !important; padding: 0 !important; background: white !important; }
        .preview-pages-container {
          display: block !important;
          gap: 0 !important;
          max-height: none !important;
          overflow: visible !important;
          transform: none !important;
        }
        .preview-page-sheet {
          box-shadow: none !important;
          border: none !important;
          border-radius: 0 !important;
          page-break-after: always !important;
          break-after: page !important;
        }
        .preview-page-sheet:last-child {
          page-break-after: auto !important;
          break-after: auto !important;
        }
        .print-exercise { break-inside: avoid; page-break-inside: avoid; }
        img { visibility: visible !important; opacity: 1 !important; }
      `;
      const html = `<!DOCTYPE html><html lang="fr"><head><base href="${base}/"><meta charset="utf-8"><title>Feuille d'exercice</title><style>${css}${wysiwygCss}</style></head><body>${printNode.outerHTML}</body></html>`;
      openPrintPopup(injectForcedPrintCss(html, "A4 portrait", "0"), {
        title: "Feuille d'exercice",
        width: 1000,
        height: 800,
      });
    }
    onPrint({ theory, evalMode, exerciseSelection: selection, header, printDate, version });
  };

  const hasPrintableContent =
    Boolean(announcementPreview) ||
    theory ||
    selection.some((item) => item.included && item.occurrences > 0);
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
      correction: false as boolean,
    }));
  });
  const previewBlocks = includeCorrections
    ? [
        { key: "eleve", title: null as string | null, items: previewExercises },
        {
          key: "corrige",
          title: "Corrigé",
          items: previewExercises.map((item) => ({
            ...item,
            key: `${item.key}-corrige`,
            correction: true,
          })),
        },
      ]
    : [{ key: "eleve", title: null as string | null, items: previewExercises }];

  const handleNext = () => {
    if (step < 2) {
      setStep((current) => current + 1);
    } else if (!hasPrinted) {
      setShowExitWarning(true);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (step > 0) setStep((current) => current - 1);
  };

  const stepLabels = ["Contenu", "En-tête", "Aperçu"];

  return (
    <div
      className="fixed inset-0 z-40 flex flex-col bg-[var(--color-bg-primary)] lg:left-[var(--sidebar-w)]"
      data-nav-action-priority="print"
    >
      {/* Header */}
      <header className="shrink-0 border-b border-[var(--color-border-default)] bg-[var(--color-bg-primary)]/95 backdrop-blur-xl">
        <div className="app-shell flex min-h-20 w-full items-center gap-4 py-4">
          <button
            type="button"
            onClick={onClose}
            aria-label="Quitter l'impression"
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
              {step === 2 && "Vérifiez puis imprimez / enregistrez en PDF"}
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
      <div className="min-w-0 flex-1 overflow-x-hidden overflow-y-auto">
        <main className="app-shell min-w-0 pb-28 pt-6">

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

          {frenchLevelSelectable && onFrenchLevelChange && (
            <section className="mb-5">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: accentColor }}>
                Niveau
              </h2>
              <div className="grid grid-cols-3 gap-1 rounded-xl border border-[var(--color-border-default)] p-1">
                {(
                  [
                    { value: "base" as const, label: "A1" },
                    { value: "moyen" as const, label: "A2" },
                    { value: "avance" as const, label: "B1" },
                  ] as const
                ).map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => onFrenchLevelChange(option.value)}
                    className="min-h-11 rounded-lg px-3 text-sm font-semibold transition-colors"
                    style={frenchLevel === option.value
                      ? { background: accentColor, color: "white" }
                      : { color: "var(--color-text-secondary)" }}
                    aria-pressed={frenchLevel === option.value}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
                Choisissez le niveau des exercices pour cette compétence.
              </p>
            </section>
          )}

          {/* ── Théorie ── */}
          {!announcementPreview && (
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
          )}

          {/* ── Corrigé ── */}
          <section className="mb-5">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: accentColor }}>
              Corrigé
            </h2>
            <div className="rounded-xl border border-[var(--color-border-default)]">
              <div className="flex min-h-14 cursor-pointer items-center gap-4 px-4">
                <CheckBox checked={includeCorrections} onChange={setIncludeCorrections} accent={accentColor} />
                <button
                  type="button"
                  className="flex-1 text-left"
                  onClick={() => setIncludeCorrections((v) => !v)}
                >
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">Inclure le corrigé</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    {includeCorrections
                      ? "Feuille élève puis même série avec les réponses"
                      : "Uniquement la feuille sans réponses"}
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
                            {sel.occurrences === 0 ? "Exercice retiré" : "Occurrences"}
                          </span>
                          <Counter
                            value={sel.occurrences}
                            onChange={(v) => setOccurrences(ex.id, v)}
                            min={0}
                            max={10}
                            accent={accentColor}
                          />
                        </div>
                        {ex.supportsPrintLayout && sel.occurrences > 0 && (
                          <>
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-xs text-[var(--color-text-secondary)]">
                                Nombre de questions
                              </span>
                              <Counter
                                value={sel.questionCount}
                                onChange={(v) => setQuestionCount(ex.id, v)}
                                min={1}
                                max={30}
                                accent={accentColor}
                              />
                            </div>
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-xs text-[var(--color-text-secondary)]">
                                Nombre de colonnes
                              </span>
                              <Counter
                                value={sel.columns}
                                onChange={(v) => setColumns(ex.id, (v === 2 || v === 3 ? v : 1) as PrintExerciseColumns)}
                                min={1}
                                max={3}
                                accent={accentColor}
                              />
                            </div>
                          </>
                        )}
                        {evalMode && sel.occurrences > 0 && (
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-xs text-[var(--color-text-secondary)]">Points</span>
                            <Counter
                              value={sel.points}
                              onChange={(value) => setExercisePoints(ex.id, value)}
                              min={1}
                              max={100}
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
                    <AppSelect
                      value={classLevel}
                      onChange={(v) => setClassLevel(v as PrintHeaderConfig["classLevel"])}
                      options={CLASS_LEVELS.map((level) => ({ value: level, label: level }))}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="print-class-number" className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                      Numéro
                    </label>
                    <AppSelect
                      value={classNumber}
                      onChange={setClassNumber}
                      options={CLASS_NUMBERS.map((number) => ({ value: number, label: number }))}
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="print-course" className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                    Cours
                  </label>
                  <AppSelect
                    value={course}
                    onChange={setCourse}
                    options={COURSES.map((item) => ({ value: item, label: item }))}
                    className="w-full"
                  />
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
            </section>
          )}

          {step === 2 && (
            <section className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xs font-bold uppercase tracking-wide" style={{ color: accentColor }}>
                  Aperçu avant impression
                </h2>
                <button
                  type="button"
                  onClick={handlePrint}
                  disabled={!hasPrintableContent}
                  className="inline-flex min-h-10 items-center gap-2 rounded-xl px-4 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                  style={{ background: accentColor }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M6 9V2h12v7" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <path d="M6 14h12v8H6z" />
                  </svg>
                  Imprimer / PDF
                </button>
              </div>
              <PaginatedPreview
                pagesContainerRef={previewPagesRef}
                printDate={printDate}
                printedBy={printedBy}
                header={<PrintDocumentHeader config={header} evalMode={evalMode} totalPoints={totalPoints} />}
                theoryNode={
                  announcementPreview ? (
                    <div className="print-exercise [&_button]:hidden">
                      {announcementPreview}
                    </div>
                  ) : theory ? (
                  <div className="[&_button]:hidden [&_[data-no-print]]:hidden [&_h1]:text-[1.25em] [&_h2]:text-[1.2em] [&_h3]:text-[1.1em] [&_p]:text-[1em] [&_.text-2xl]:!text-[1.3em] [&_.text-xl]:!text-[1.15em] [&_.text-lg]:!text-[1.05em] [&_.text-base]:!text-[1em] [&_.text-sm]:!text-[0.85em] [&_.text-xs]:!text-[0.7em]">
                    {theoryPreview ?? (
                      <p className="text-zinc-500">La théorie de la leçon sera incluse dans le document.</p>
                    )}
                  </div>
                  ) : null
                }
                exerciseNodes={previewBlocks.flatMap((block) => {
                  const sectionNodes: { key: string; node: ReactNode; forceNewPage?: boolean }[] = [];
                  const isCorrectionSection = Boolean(block.title);
                  /** Placement maths : packer sauf 1er exo après l’annonce (page 1 réservée). */
                  const exerciseBreak = (exercise: PrintExercise | undefined, index: number) => {
                    if (exercise?.forceNewPage === false) {
                      if (index === 0 && Boolean(announcementPreview) && !isCorrectionSection) return true;
                      return false;
                    }
                    return true;
                  };
                  // Pas de page « CORRIGÉ » isolée : le titre est déjà sur chaque exercice (… — Corrigé).
                  block.items.forEach((item, index) => {
                    const exercise = item.exercise;

                    if (item.correction && exercise?.correctionLeadPreview) {
                      sectionNodes.push({
                        key: `${item.key}-lead`,
                        forceNewPage: true,
                        node: (
                          <div className="print-exercise">
                            <div className={PRINT_EX_TITLE_CLASS} style={{ color: accentColor }}>
                              <span className="flex-1">
                                {printExerciseHeading(
                                  exercise,
                                  index,
                                  exercise.correctionLeadTitle ?? "Audios & transcriptions",
                                )}
                              </span>
                              {evalMode && (
                                <span style={{ color: "black" }}>
                                  {item.selection.points} pt{item.selection.points > 1 ? "s" : ""}
                                </span>
                              )}
                            </div>
                            <div className="print-ex-content text-[1.6em] leading-normal text-zinc-800 [&_button]:pointer-events-none">
                              {exercise.correctionLeadPreview}
                            </div>
                          </div>
                        ),
                      });
                      sectionNodes.push({
                        key: item.key,
                        forceNewPage: true,
                        node: (
                          <div className="print-exercise">
                            <div className={PRINT_EX_TITLE_CLASS} style={{ color: accentColor }}>
                              <span className="flex-1">
                                {printExerciseHeading(exercise, index, "Corrigé")}
                              </span>
                              {evalMode && (
                                <span style={{ color: "black" }}>
                                  {item.selection.points} pt{item.selection.points > 1 ? "s" : ""}
                                </span>
                              )}
                            </div>
                            <PrintExerciseBody
                              key={`${item.key}-q${item.selection.questionCount}-c${item.selection.columns}`}
                              selection={item.selection}
                              answerKey
                            >
                              {exercise.correctionPreview ?? exercise.preview ?? (
                                <div className="h-7 border-b border-black/40" />
                              )}
                            </PrintExerciseBody>
                          </div>
                        ),
                      });
                      (exercise.correctionFollowPreviews ?? []).forEach((follow, fi) => {
                        sectionNodes.push({
                          key: `${item.key}-corr-follow-${fi}`,
                          forceNewPage: true,
                          node: (
                            <div className="print-exercise">
                              <div className={PRINT_EX_TITLE_CLASS} style={{ color: accentColor }}>
                                <span className="flex-1">
                                  {printExerciseHeading(exercise, index, follow.title ?? "Suite")}
                                </span>
                                {evalMode && (
                                  <span style={{ color: "black" }}>
                                    {item.selection.points} pt{item.selection.points > 1 ? "s" : ""}
                                  </span>
                                )}
                              </div>
                              <div className={printExContentClass(true)}>
                                {follow.preview}
                              </div>
                            </div>
                          ),
                        });
                      });
                      return;
                    }

                    const body = item.correction
                      ? (exercise?.correctionPreview ?? exercise?.preview)
                      : exercise?.preview;
                    const lead = !item.correction ? exercise?.leadPreview : undefined;
                    const follows = item.correction
                      ? (exercise?.correctionFollowPreviews ?? [])
                      : (exercise?.followPreviews ?? []);

                    if (lead) {
                      sectionNodes.push({
                        key: `${item.key}-lead`,
                        forceNewPage: true,
                        node: (
                          <div className="print-exercise">
                            <div className={PRINT_EX_TITLE_CLASS} style={{ color: accentColor }}>
                              <span className="flex-1">{printExerciseHeading(exercise, index)}</span>
                              {evalMode && (
                                <span style={{ color: "black" }}>
                                  {item.selection.points} pt{item.selection.points > 1 ? "s" : ""}
                                </span>
                              )}
                            </div>
                            <div className="print-ex-content text-[1.6em] leading-normal text-zinc-800 [&_button]:pointer-events-none">
                              {lead}
                            </div>
                          </div>
                        ),
                      });
                      sectionNodes.push({
                        key: item.key,
                        forceNewPage: true,
                        node: (
                          <div className="print-exercise">
                            <div className={PRINT_EX_TITLE_CLASS} style={{ color: accentColor }}>
                              <span className="flex-1">
                                {printExerciseHeading(
                                  exercise,
                                  index,
                                  exercise?.leadFollowTitle ?? "Grille",
                                )}
                              </span>
                              {evalMode && (
                                <span style={{ color: "black" }}>
                                  {item.selection.points} pt{item.selection.points > 1 ? "s" : ""}
                                </span>
                              )}
                            </div>
                            <PrintExerciseBody
                              key={`${item.key}-q${item.selection.questionCount}-c${item.selection.columns}`}
                              selection={item.selection}
                              answerKey={Boolean(item.correction)}
                            >
                              {body ?? <div className="h-7 border-b border-black/40" />}
                            </PrintExerciseBody>
                          </div>
                        ),
                      });
                      follows.forEach((follow, fi) => {
                        sectionNodes.push({
                          key: `${item.key}-follow-${fi}`,
                          forceNewPage: true,
                          node: (
                            <div className="print-exercise">
                              <div className={PRINT_EX_TITLE_CLASS} style={{ color: accentColor }}>
                                <span className="flex-1">
                                  {printExerciseHeading(exercise, index, follow.title ?? "Suite")}
                                </span>
                                {evalMode && (
                                  <span style={{ color: "black" }}>
                                    {item.selection.points} pt{item.selection.points > 1 ? "s" : ""}
                                  </span>
                                )}
                              </div>
                              <div className="print-ex-content text-[1.6em] leading-normal text-zinc-800 [&_button]:pointer-events-none">
                                {follow.preview}
                              </div>
                            </div>
                          ),
                        });
                      });
                      return;
                    }

                    sectionNodes.push({
                      key: item.key,
                      forceNewPage: exerciseBreak(exercise, index),
                      node: (
                        <div className="print-exercise">
                          <div className={PRINT_EX_TITLE_CLASS} style={{ color: accentColor }}>
                            <span className="flex-1">
                              {printExerciseHeading(
                                exercise,
                                index,
                                item.correction ? "Corrigé" : undefined,
                              )}
                            </span>
                            {evalMode && <span style={{ color: "black" }}>{item.selection.points} pt{item.selection.points > 1 ? "s" : ""}</span>}
                          </div>
                          <PrintExerciseBody
                            key={`${item.key}-q${item.selection.questionCount}-c${item.selection.columns}`}
                            selection={item.selection}
                            answerKey={Boolean(item.correction)}
                          >
                            {body ?? <div className="h-7 border-b border-black/40" />}
                          </PrintExerciseBody>
                        </div>
                      ),
                    });
                    follows.forEach((follow, fi) => {
                      sectionNodes.push({
                        key: `${item.key}-follow-${fi}`,
                        forceNewPage: true,
                        node: (
                          <div className="print-exercise">
                            <div className={PRINT_EX_TITLE_CLASS} style={{ color: accentColor }}>
                              <span className="flex-1">
                                {printExerciseHeading(exercise, index, follow.title ?? "Suite")}
                              </span>
                              {evalMode && (
                                <span style={{ color: "black" }}>
                                  {item.selection.points} pt{item.selection.points > 1 ? "s" : ""}
                                </span>
                              )}
                            </div>
                            <div className={printExContentClass(Boolean(item.correction))}>
                              {follow.preview}
                            </div>
                          </div>
                        ),
                      });
                    });
                  });
                  return sectionNodes;
                })}
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

      {/* Barre d’étapes — comme les exercices : Précédent | vide | Suivant */}
      <div className="shrink-0 border-t border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
        <div className="app-shell-bar flex items-center justify-between py-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={step === 0}
            data-nav-action="back"
            aria-label="Précédent"
            className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-opacity disabled:opacity-30"
          >
            ← Précédent
          </button>

          <span aria-hidden />

          <button
            type="button"
            onClick={() => {
              if (step < 2) setStep((current) => current + 1);
            }}
            disabled={step >= 2}
            data-nav-action="next"
            data-nav-label="Suivant"
            aria-label="Suivant"
            className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl px-4 text-sm font-medium text-white transition-opacity disabled:opacity-30"
            style={{ background: accentColor }}
          >
            Suivant →
          </button>
        </div>
        <div className="h-[env(safe-area-inset-bottom,0px)]" />
      </div>

      {/* Legacy action bridge consumed by MainNav. */}
      <div className="hidden fixed bottom-0 left-0 right-0">
        <button type="button" onClick={handlePrev} disabled={step === 0} aria-label="Précédent" data-nav-action="back">
          Précédent
        </button>
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

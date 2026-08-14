"use client";

import {
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { PageBackButton } from "@/components/ui/PageBackButton";
import {
  listPrintableLessons,
  type PrintCatalogEntry,
  type PrintDomain,
} from "@/lib/print/catalog";
import { buildPrintBundle } from "@/components/print/buildPrintBundle";
import {
  PaginatedPreview,
  PrintDocumentFooter,
  PrintDocumentHeader,
  PrintExerciseBody,
  PrintExerciseHeader,
  type ExercisePrintSelection,
  type PrintHeaderConfig,
} from "@/components/ui/PrintConfigSheet";
import { clampPrintColumns } from "@/components/print/PrintExerciseLayoutContext";
import { printExerciseNoncesKey } from "@/components/math/placement/placement-print-rng";
import { AppSelect } from "@/components/ui/AppSelect";
import { capturePageCss, openPrintPopup } from "@/lib/utils/print";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import type { PlacementLevel } from "@/lib/placement/types";
import {
  GrammarTheoryPrintSegment,
} from "@/components/print/GrammarTheoryPrintView";
import { MathTheoryPrintSegment } from "@/components/print/MathTheoryPrintView";
import { indexGrammarTheoryBlocks } from "@/lib/print/grammar-theory-print";
import { flattenMathTheoryBlocks } from "@/lib/print/math-theory-print";
import {
  equalColWidths,
  emptyTheoryPrintOptions,
  initTheoryPrintOptions,
  splitBlocksAtBreaks,
  type TheoryPrintOptions,
  type TheoryTablePrintConfig,
} from "@/lib/print/theory-print-options";

const CLASS_LEVELS: PrintHeaderConfig["classLevel"][] = ["CSC", "CFR", "EPL", "CPR"];
const CLASS_NUMBERS = Array.from({ length: 20 }, (_, index) => String(index + 1).padStart(2, "0"));

/** Couleurs pastel pour le thème d’impression (correction ambre inchangée). */
const PRINT_THEME_COLORS = [
  { id: "vert", label: "Vert", value: "#6fafa0" },
  { id: "bleu", label: "Bleu", value: "#7ba3c9" },
  { id: "violet", label: "Violet", value: "#a89bc8" },
  { id: "rouge", label: "Rouge", value: "#c98b8b" },
] as const;

type PrintThemeColorId = (typeof PRINT_THEME_COLORS)[number]["id"];

const DOMAINS: { id: PrintDomain; label: string }[] = [
  { id: "math", label: "Mathématiques" },
  { id: "francais", label: "Français" },
  { id: "lecture", label: "Lecture" },
  { id: "placement", label: "Placement" },
];

function preferredGroups(domain: PrintDomain, groups: string[]): string[] {
  const preferred =
    domain === "francais"
      ? ["Vocabulaire", "Grammaire", "Communication"]
      : domain === "placement"
        ? ["Mathématiques", "Français"]
        : domain === "math"
          ? ["Algèbre", "Géométrie"]
          : groups;
  const ordered = preferred.filter((g) => groups.includes(g));
  return ordered.length > 0 ? ordered : groups;
}

function formatPrintDate(date = new Date()): string {
  return new Intl.DateTimeFormat("fr-CH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function freshSeed() {
  return Date.now() ^ Math.floor(Math.random() * 1_000_000_000);
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
  min = 0,
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
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-sm font-bold text-[var(--color-text-secondary)] transition-opacity disabled:opacity-30"
        aria-label="Moins"
      >
        −
      </button>
      <span className="min-w-[2rem] text-center text-sm font-semibold tabular-nums" style={{ color: accent }}>
        {value > 0 ? `+${value}` : value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-sm font-bold text-[var(--color-text-secondary)] transition-opacity disabled:opacity-30"
        aria-label="Plus"
      >
        +
      </button>
    </div>
  );
}

function SectionCard({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
      <h2 className="mb-3 text-[10px] font-bold uppercase tracking-wide" style={{ color: accent }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function FieldLabel({ children }: { children: ReactNode }) {
  return <p className="mb-1.5 text-[11px] font-semibold text-[var(--color-text-secondary)]">{children}</p>;
}

function clonePreview(node: ReactNode, key: string): ReactNode {
  if (node == null || typeof node === "boolean") return node;
  if (typeof node === "string" || typeof node === "number") return node;
  if (Array.isArray(node)) {
    return node.map((child, index) => clonePreview(child, `${key}.${index}`));
  }
  if (!isValidElement(node)) return node;
  const element = node as ReactElement<{ children?: ReactNode }>;
  if (element.props?.children !== undefined) {
    return cloneElement(
      element,
      { key },
      clonePreview(element.props.children, `${key}.c`),
    );
  }
  return cloneElement(element, { key });
}

/**
 * Hub d'impression : catalogue admin (buildPrintBundle) + mise en page split
 * identique à `/impressions` (filtres à gauche, aperçu A4 à droite).
 */
export function ImpressionHubClient() {
  const catalog = useMemo(() => listPrintableLessons(), []);
  const [domain, setDomain] = useState<PrintDomain>("math");
  const [group, setGroup] = useState("");
  const [moduleId, setModuleId] = useState("");
  const [docId, setDocId] = useState("");
  const [evalMode, setEvalMode] = useState(false);
  const [theory, setTheory] = useState(false);
  const [theoryOpts, setTheoryOpts] = useState<TheoryPrintOptions>(emptyTheoryPrintOptions);
  const [includeCorrections, setIncludeCorrections] = useState(true);
  const [classLevel, setClassLevel] = useState<PrintHeaderConfig["classLevel"]>("CSC");
  const [classNumber, setClassNumber] = useState("01");
  const [title, setTitle] = useState("");
  const [themeColorId, setThemeColorId] = useState<PrintThemeColorId>("vert");
  const [selection, setSelection] = useState<ExercisePrintSelection[]>([]);
  const [printedBy, setPrintedBy] = useState("");
  const [frenchLevel, setFrenchLevel] = useState<PlacementLevel>("base");
  /** Seed uniquement après mount — évite mismatch SSR/hydratation (random). */
  const [printSeed, setPrintSeed] = useState<number | null>(null);
  const [exerciseNonces, setExerciseNonces] = useState<Record<string, number>>({});
  const [bundleError, setBundleError] = useState<string | null>(null);
  const previewPagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPrintSeed((prev) => (prev == null ? freshSeed() : prev));
  }, []);

  const domainEntries = useMemo(
    () => catalog.filter((e) => e.domain === domain),
    [catalog, domain],
  );

  const groups = useMemo(() => {
    const set = new Set(domainEntries.map((e) => e.group));
    return preferredGroups(domain, Array.from(set));
  }, [domain, domainEntries]);

  const activeGroup = group && groups.includes(group) ? group : groups[0] ?? "";

  const groupEntries = useMemo(
    () => domainEntries.filter((e) => e.group === activeGroup),
    [domainEntries, activeGroup],
  );

  const modules = useMemo(() => {
    const map = new Map<string, { id: string; label: string; lessons: PrintCatalogEntry[] }>();
    for (const entry of groupEntries) {
      const existing = map.get(entry.moduleId);
      if (existing) existing.lessons.push(entry);
      else {
        map.set(entry.moduleId, {
          id: entry.moduleId,
          label: `${entry.moduleCode} — ${entry.moduleTitle}`,
          lessons: [entry],
        });
      }
    }
    return Array.from(map.values()).sort((a, b) =>
      a.label.localeCompare(b.label, "fr", { numeric: true }),
    );
  }, [groupEntries]);

  const flatPlacement = domain === "placement";
  const activeModule = flatPlacement
    ? null
    : modules.find((m) => m.id === moduleId) ?? modules[0] ?? null;

  const documentOptions = useMemo(() => {
    if (flatPlacement) return groupEntries;
    return activeModule?.lessons ?? [];
  }, [flatPlacement, groupEntries, activeModule]);

  const selectedEntry =
    documentOptions.find((d) => d.id === docId) ?? documentOptions[0] ?? null;

  const bundle = useMemo(() => {
    if (!selectedEntry || printSeed == null) return null;
    try {
      return buildPrintBundle(selectedEntry.id, {
        frenchLevel,
        seed: printSeed,
        exerciseNonces,
      });
    } catch (err) {
      console.error("[impression] buildPrintBundle failed", selectedEntry.id, err);
      return null;
    }
  }, [selectedEntry, frenchLevel, printSeed, exerciseNonces]);

  useEffect(() => {
    if (!selectedEntry) {
      setBundleError(null);
      return;
    }
    setBundleError(bundle ? null : "Impossible de charger ce document.");
  }, [selectedEntry, bundle]);

  useEffect(() => {
    if (!groups.includes(group)) setGroup(groups[0] ?? "");
  }, [groups, group]);

  useEffect(() => {
    if (flatPlacement) {
      if (!groupEntries.some((e) => e.id === docId)) setDocId(groupEntries[0]?.id ?? "");
      return;
    }
    if (!modules.some((m) => m.id === moduleId)) {
      setModuleId(modules[0]?.id ?? "");
      return;
    }
    const lessons = modules.find((m) => m.id === moduleId)?.lessons ?? [];
    if (!lessons.some((e) => e.id === docId)) setDocId(lessons[0]?.id ?? "");
  }, [flatPlacement, groupEntries, modules, moduleId, docId]);

  const exerciseIdsKey = (bundle?.exercises ?? []).map((ex) => ex.id).join("|");

  useEffect(() => {
    if (!bundle) {
      setSelection([]);
      setTitle("");
      setTheory(false);
      return;
    }
    const nextEval = Boolean(bundle.defaultEvalMode);
    setEvalMode(nextEval);
    setTitle(nextEval ? "Évaluation" : bundle.lessonTitle.replace(/^v\d+(\.\d+)*\s+/i, ""));
    setTheory(false);
    setTheoryOpts(initTheoryPrintOptions(bundle.theoryMeta));
    setSelection(
      bundle.exercises.map((ex) => ({
        id: ex.id,
        included: true,
        occurrences: 1,
        questionCount: Math.max(1, ex.defaultQuestionCount ?? 5),
        columns: clampPrintColumns(ex.defaultColumns ?? 1),
        spacing: Math.max(1, Math.min(5, ex.defaultSpacing ?? 3)),
        length: ex.defaultLength ?? 0,
        printLengthMode: ex.printLengthMode ?? "width",
        pageBreak: Boolean(ex.forceNewPage),
        points: Math.max(1, ex.defaultPoints ?? 1),
      })),
    );
    // Réinitialiser la sélection seulement quand le document / les ids d'exercices changent,
    // pas au refresh d'un exercice (nonce).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEntry?.id, frenchLevel, exerciseIdsKey]);

  useEffect(() => {
    if (!bundle) return;
    setTitle(evalMode ? "Évaluation" : bundle.lessonTitle.replace(/^v\d+(\.\d+)*\s+/i, ""));
  }, [evalMode, bundle]);

  useEffect(() => {
    let cancelled = false;
    const loadPrintedBy = async () => {
      const supabase = createSupabaseBrowserClient();
      if (!supabase) return;
      const {
        data: { user },
      } = await supabase.auth.getUser();
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
    return () => {
      cancelled = true;
    };
  }, []);

  function changeDomain(next: PrintDomain) {
    setDomain(next);
    setGroup("");
    setModuleId("");
    setDocId("");
    setSelection([]);
    setTheory(false);
    setFrenchLevel("base");
    setPrintSeed(freshSeed());
    setExerciseNonces({});
  }

  function changeGroup(next: string) {
    setGroup(next);
    setModuleId("");
    setDocId("");
    setSelection([]);
    setTheory(false);
    setPrintSeed(freshSeed());
    setExerciseNonces({});
  }

  function changeModule(next: string) {
    setModuleId(next);
    setDocId("");
    setSelection([]);
    setTheory(false);
    setPrintSeed(freshSeed());
    setExerciseNonces({});
  }

  function changeDocument(next: string) {
    setDocId(next);
    setSelection([]);
    setTheory(false);
    setFrenchLevel("base");
    setPrintSeed(freshSeed());
    setExerciseNonces({});
  }

  const bumpExerciseNonce = (id: string) =>
    setExerciseNonces((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

  const patchSelection = (id: string, patch: Partial<ExercisePrintSelection>) =>
    setSelection((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));

  const patchTheoryTable = (id: string, patch: Partial<TheoryTablePrintConfig>) =>
    setTheoryOpts((prev) => {
      const cur = prev.tables[id];
      if (!cur) return prev;
      const next: TheoryTablePrintConfig = { ...cur, ...patch };
      if (patch.verbsPerTables) {
        next.verbsPerTables = patch.verbsPerTables.slice(0, 3).map((n) => Math.max(1, n));
        const cols = (next.verbsPerTables[0] ?? 1) + 1;
        next.columnCount = cols;
        if (patch.colWidths == null) next.colWidths = equalColWidths(cols);
      }
      if (patch.columnCount != null && patch.colWidths == null && !patch.verbsPerTables) {
        next.colWidths = equalColWidths(patch.columnCount);
      }
      if (patch.colWidths) next.colWidths = patch.colWidths;
      return { ...prev, tables: { ...prev.tables, [id]: next } };
    });

  const themeColor =
    PRINT_THEME_COLORS.find((c) => c.id === themeColorId)?.value ?? PRINT_THEME_COLORS[0].value;
  const accent = themeColor;
  const themeStyle = {
    ["--color-theme" as string]: themeColor,
    ["--color-accent-fr" as string]: themeColor,
    ["--color-accent-alg" as string]: themeColor,
    ["--color-accent-geo" as string]: themeColor,
    ["--color-accent-quiz" as string]: themeColor,
    ["--color-accent-comm" as string]: themeColor,
    ["--color-accent-lecture" as string]: themeColor,
  };
  const course = bundle?.course ?? "Mathématiques";
  const printDate = formatPrintDate();
  const header: PrintHeaderConfig = { classLevel, classNumber, course, title };
  const hasAnnouncement = Boolean(bundle?.announcementPreview);

  const theorySegments = useMemo(() => {
    if (!theory || !bundle) return [];
    const wrap = (node: ReactNode, key: string, forceNewPage?: boolean) => ({
      key,
      forceNewPage,
      render: () => (
        <div
          className="print-theory-content text-[1.6em] leading-normal text-zinc-900 [&_button]:hidden [&_[data-no-print]]:hidden"
          style={themeStyle}
        >
          {node}
        </div>
      ),
    });

    if (bundle.grammarTheoryBlocks?.length) {
      const indexed = indexGrammarTheoryBlocks(bundle.grammarTheoryBlocks);
      const segments = splitBlocksAtBreaks(indexed, theoryOpts.pageBreakBefore);
      return segments.map((seg, i) =>
        wrap(
          <GrammarTheoryPrintSegment blocks={seg} options={theoryOpts} />,
          `__theory-${i}`,
          i > 0,
        ),
      );
    }

    if (bundle.mathTheoryLesson) {
      const indexed = flattenMathTheoryBlocks(bundle.mathTheoryLesson);
      const segments = splitBlocksAtBreaks(indexed, theoryOpts.pageBreakBefore);
      return segments.map((seg, i) =>
        wrap(
          <MathTheoryPrintSegment blocks={seg} options={theoryOpts} />,
          `__theory-${i}`,
          i > 0,
        ),
      );
    }

    if (bundle.announcementPreview || bundle.theoryPreview) {
      return [
        wrap(bundle.announcementPreview ?? bundle.theoryPreview, "__theory__", false),
      ];
    }
    return [];
  }, [theory, bundle, theoryOpts, themeColor]);

  const hasPrintableContent =
    theorySegments.length > 0 || selection.some((item) => item.included && item.occurrences > 0);
  const totalPoints = selection
    .filter((s) => s.included && s.occurrences > 0)
    .reduce((sum, s) => sum + s.points * s.occurrences, 0);

  const previewExercises = selection.flatMap((item) => {
    if (!item.included || item.occurrences < 1) return [];
    const exercise = bundle?.exercises.find((candidate) => candidate.id === item.id);
    if (!exercise) return [];
    return Array.from({ length: item.occurrences }, (_, occurrence) => ({
      key: `${item.id}-${occurrence}`,
      exercise,
      selection: item,
      occurrence,
    }));
  });
  const previewBlocks = [
    ...previewExercises.map((item, index) => ({ ...item, displayIndex: index, correction: false as boolean })),
    ...(includeCorrections
      ? previewExercises.map((item, index) => ({
          ...item,
          key: `${item.key}-corrige`,
          displayIndex: index,
          correction: true as boolean,
        }))
      : []),
  ];

  const handlePrint = () => {
    const node = previewPagesRef.current;
    if (!node) return;
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
    const themeVars = `:root{--color-theme:${themeColor};--color-accent-fr:${themeColor};--color-accent-alg:${themeColor};--color-accent-geo:${themeColor};--color-accent-quiz:${themeColor};--color-accent-comm:${themeColor};--color-accent-lecture:${themeColor};}`;
    const printCss = `@page{size:A4 portrait;margin:0!important;}html,body{width:210mm!important;margin:0!important;padding:0!important;background:white!important;}body *{visibility:hidden!important;}*{box-sizing:border-box!important;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}.preview-pages-container,.preview-pages-container *{visibility:visible!important;}.preview-pages-container{position:absolute!important;left:0!important;top:0!important;width:210mm!important;max-height:none!important;overflow:visible!important;gap:0!important;padding:0!important;margin:0!important;display:block!important;background:white!important;}.preview-page-sheet{box-sizing:border-box!important;width:210mm!important;height:297mm!important;min-height:297mm!important;max-height:297mm!important;overflow:hidden!important;padding:18mm 12mm 12mm!important;font-size:9px!important;line-height:1.55!important;color:#000!important;background:white!important;transform:none!important;box-shadow:none!important;border:none!important;border-radius:0!important;page-break-after:always!important;break-after:page!important;display:flex!important;flex-direction:column!important;margin:0!important;}.preview-page-sheet:last-child{page-break-after:auto!important;break-after:auto!important;}.print-exercise{break-inside:avoid;page-break-inside:avoid;}.print-ex-content h2,.print-ex-content p.font-bold,.print-ex-content .eval-exercise-title{display:none!important;}img{visibility:visible!important;opacity:1!important;}`;
    const html = `<!DOCTYPE html><html lang="fr"><head><base href="${base}/"><meta charset="utf-8"><title>Feuille d'exercice</title><style>${themeVars}${css}${printCss}</style></head><body>${printNode.outerHTML}</body></html>`;
    openPrintPopup(html, { title: title || "Feuille d'exercice", width: 1000, height: 800 });
  };

  return (
    <div className="flex h-[calc(100dvh-1rem)] min-h-[36rem] flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] lg:h-[calc(100dvh-3rem)]">
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-[var(--color-border-default)] px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <PageBackButton href="/" ariaLabel="Retour à l'accueil" />
          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold text-[var(--color-text-primary)]">
              Impression documents
            </h1>
            <p className="truncate text-xs text-[var(--color-text-secondary)]">
              Aperçu A4 identique au PDF — en-tête page 1, pied de page sur toutes les pages
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handlePrint}
          disabled={!hasPrintableContent || !bundle}
          className="shrink-0 rounded-xl px-4 py-2.5 text-sm font-bold text-white transition-opacity disabled:opacity-40"
          style={{ background: accent }}
        >
          Imprimer
        </button>
      </header>

      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <aside className="impression-scroll max-h-[42%] shrink-0 overflow-y-auto border-b border-[var(--color-border-default)] p-4 lg:max-h-none lg:w-[44rem] lg:overflow-hidden lg:border-b-0 lg:border-r">
          <div className="grid gap-4 lg:h-full lg:min-h-0 lg:grid-cols-2 lg:items-start">
          <SectionCard title="Document" accent={accent}>
            <div className="space-y-3">
              <div>
                <FieldLabel>Matière</FieldLabel>
                <AppSelect
                  value={domain}
                  onChange={(v) => changeDomain(v as PrintDomain)}
                  options={DOMAINS.map((d) => ({ value: d.id, label: d.label }))}
                  className="w-full"
                />
              </div>
              <div>
                <FieldLabel>Catégorie</FieldLabel>
                <AppSelect
                  value={activeGroup}
                  onChange={changeGroup}
                  options={groups.map((g) => ({ value: g, label: g }))}
                  className="w-full"
                />
              </div>
              {!flatPlacement && (
                <div>
                  <FieldLabel>Module</FieldLabel>
                  <AppSelect
                    value={activeModule?.id ?? ""}
                    onChange={changeModule}
                    options={modules.map((m) => ({ value: m.id, label: m.label }))}
                    className="w-full"
                  />
                </div>
              )}
              <div>
                <FieldLabel>Leçon</FieldLabel>
                <AppSelect
                  value={selectedEntry?.id ?? ""}
                  onChange={changeDocument}
                  options={documentOptions.map((d) => ({
                    value: d.id,
                    label: `${d.code} — ${d.title}`,
                  }))}
                  className="w-full"
                />
              </div>
              <div>
                <FieldLabel>En-tête</FieldLabel>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <AppSelect
                      value={classLevel}
                      onChange={(v) => setClassLevel(v as PrintHeaderConfig["classLevel"])}
                      options={CLASS_LEVELS.map((level) => ({ value: level, label: level }))}
                      className="w-full"
                    />
                    <AppSelect
                      value={classNumber}
                      onChange={setClassNumber}
                      options={CLASS_NUMBERS.map((number) => ({ value: number, label: number }))}
                      className="w-full"
                    />
                  </div>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Titre…"
                    className="min-h-10 w-full rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 text-sm outline-none"
                  />
                </div>
              </div>
              <div>
                <FieldLabel>Couleur</FieldLabel>
                <div className="flex flex-wrap gap-2">
                  {PRINT_THEME_COLORS.map((c) => {
                    const active = themeColorId === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        title={c.label}
                        aria-label={c.label}
                        aria-pressed={active}
                        onClick={() => setThemeColorId(c.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border-2 transition-transform hover:scale-105"
                        style={{
                          background: c.value,
                          borderColor: active ? "var(--color-text-primary)" : "transparent",
                          boxShadow: active ? `0 0 0 2px ${c.value}` : undefined,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </SectionCard>

          <div className="impression-scroll lg:h-full lg:min-h-0 lg:overflow-y-auto lg:pr-1">
          <SectionCard title="Paramètres" accent={accent}>
            <div className="space-y-4">
              <div>
                <FieldLabel>Mode</FieldLabel>
                <div className="grid grid-cols-2 rounded-xl bg-[var(--color-bg-secondary)] p-1">
                  {[
                    { label: "Exercice", value: false },
                    { label: "Évaluation", value: true },
                  ].map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setEvalMode(option.value)}
                      className="min-h-10 rounded-lg px-3 text-sm font-semibold transition-colors"
                      style={
                        evalMode === option.value
                          ? { background: accent, color: "white" }
                          : { color: "var(--color-text-secondary)" }
                      }
                      aria-pressed={evalMode === option.value}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {bundle?.frenchLevelSelectable && (
                <div>
                  <FieldLabel>Niveau</FieldLabel>
                  <AppSelect
                    value={frenchLevel}
                    onChange={(v) => {
                      setFrenchLevel(v as PlacementLevel);
                      setPrintSeed(freshSeed());
                      setExerciseNonces({});
                    }}
                    options={[
                      { value: "base", label: "A1" },
                      { value: "moyen", label: "A2" },
                      { value: "avance", label: "B1" },
                    ]}
                    className="w-full"
                  />
                </div>
              )}

              {(bundle?.theoryPreview || bundle?.announcementPreview) && (
                <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border-default)] px-3 py-2.5">
                  <CheckBox checked={theory} onChange={setTheory} accent={accent} />
                  <span className="text-sm text-[var(--color-text-primary)]">
                    {hasAnnouncement ? "Inclure l'annonce / théorie" : "Inclure la théorie"}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border-default)] px-3 py-2.5">
                <CheckBox checked={includeCorrections} onChange={setIncludeCorrections} accent={accent} />
                <div className="min-w-0">
                  <p className="text-sm text-[var(--color-text-primary)]">Inclure le corrigé</p>
                  <p className="text-[11px] text-[var(--color-text-secondary)]">
                    {includeCorrections
                      ? "Feuille élève puis même série avec les réponses"
                      : "Uniquement la feuille sans réponses"}
                  </p>
                </div>
              </div>

              {theory && (bundle?.theoryMeta || bundle?.grammarTheoryBlocks || bundle?.mathTheoryLesson) && (
                <div>
                  <FieldLabel>Théorie</FieldLabel>
                  <div className="space-y-3 rounded-xl border border-[var(--color-border-default)] px-3 py-2.5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs text-[var(--color-text-secondary)]">
                        Espacement avant titres
                      </span>
                      <Counter
                        value={Math.round(theoryOpts.headingPaddingEm * 10)}
                        accent={accent}
                        min={4}
                        max={40}
                        onChange={(v) =>
                          setTheoryOpts((prev) => ({ ...prev, headingPaddingEm: v / 10 }))
                        }
                      />
                    </div>
                    <p className="-mt-1 text-[10px] text-[var(--color-text-secondary)]">
                      Valeur ×0,1 em (ex. 14 → 1,4 em)
                    </p>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs text-[var(--color-text-secondary)]">
                        Texte justifié
                      </span>
                      <CheckBox
                        checked={theoryOpts.textJustify}
                        onChange={(textJustify) =>
                          setTheoryOpts((prev) => ({ ...prev, textJustify }))
                        }
                        accent={accent}
                      />
                    </div>

                    <div className="space-y-2 border-t border-[var(--color-border-default)] pt-3">
                      <p className="text-xs font-semibold text-[var(--color-text-secondary)]">
                        Sauts de page (avant titre / texte / tableau)
                      </p>
                      {[0, 1, 2].map((slot) => (
                        <div key={slot} className="flex items-center gap-2">
                          <span className="w-14 shrink-0 text-[11px] text-[var(--color-text-secondary)]">
                            Saut {slot + 1}
                          </span>
                          <AppSelect
                            value={theoryOpts.pageBreakBefore[slot] ?? ""}
                            onChange={(v) =>
                              setTheoryOpts((prev) => {
                                const pageBreakBefore = [...prev.pageBreakBefore] as TheoryPrintOptions["pageBreakBefore"];
                                pageBreakBefore[slot] = v || null;
                                return { ...prev, pageBreakBefore };
                              })
                            }
                            options={[
                              { value: "", label: "Aucun" },
                              ...(bundle?.theoryMeta?.breakTargets ?? []).map((t) => ({
                                value: t.id,
                                label: t.label,
                              })),
                            ]}
                            className="min-w-0 flex-1"
                          />
                        </div>
                      ))}
                    </div>

                    {(bundle?.theoryMeta?.tables.length ?? 0) > 0 && (
                      <div className="space-y-3 border-t border-[var(--color-border-default)] pt-3">
                        <p className="text-xs font-semibold text-[var(--color-text-secondary)]">
                          Tableaux
                        </p>
                        {(bundle?.theoryMeta?.tables ?? []).map((meta) => {
                          const cfg = theoryOpts.tables[meta.id];
                          if (!cfg) return null;
                          const isVerbish = meta.kind === "verb_toggle" || meta.kind === "conjug";
                          const totalVerbs = Math.max(1, meta.verbCount ?? meta.columnCount);
                          const counts = cfg.verbsPerTables.length > 0 ? cfg.verbsPerTables : [4];
                          const used = counts.reduce((a, b) => a + b, 0);
                          const remaining = Math.max(0, totalVerbs - used);
                          return (
                            <div
                              key={meta.id}
                              className="space-y-2 rounded-xl border border-[var(--color-border-default)] px-3 py-2.5"
                            >
                              <p className="line-clamp-2 text-xs font-medium text-[var(--color-text-primary)]">
                                {meta.label}
                              </p>

                              <div className="flex items-center justify-between gap-3">
                                <span className="text-[11px] text-[var(--color-text-secondary)]">
                                  Padding avant tableau
                                </span>
                                <Counter
                                  value={Math.round(cfg.paddingTopEm * 10)}
                                  accent={accent}
                                  min={0}
                                  max={40}
                                  onChange={(v) =>
                                    patchTheoryTable(meta.id, { paddingTopEm: v / 10 })
                                  }
                                />
                              </div>

                              <div className="flex items-center justify-between gap-3">
                                <span className="text-[11px] text-[var(--color-text-secondary)]">
                                  Sans bordures
                                </span>
                                <CheckBox
                                  checked={!cfg.showBorders}
                                  onChange={(off) =>
                                    patchTheoryTable(meta.id, { showBorders: !off })
                                  }
                                  accent={accent}
                                />
                              </div>

                              <div className="flex items-center justify-between gap-3">
                                <span className="text-[11px] text-[var(--color-text-secondary)]">
                                  Sans remplissage
                                </span>
                                <CheckBox
                                  checked={!cfg.showFill}
                                  onChange={(off) =>
                                    patchTheoryTable(meta.id, { showFill: !off })
                                  }
                                  accent={accent}
                                />
                              </div>

                              {isVerbish ? (
                                <>
                                  {counts.map((count, ti) => (
                                    <div key={ti} className="space-y-2">
                                      {ti > 0 ? (
                                        <p className="text-[11px] font-semibold text-[var(--color-text-secondary)]">
                                          Tableau {ti + 1}
                                        </p>
                                      ) : null}
                                      <div className="flex items-center justify-between gap-3">
                                        <span className="text-[11px] text-[var(--color-text-secondary)]">
                                          Nombre de verbes
                                        </span>
                                        <Counter
                                          value={count}
                                          accent={accent}
                                          min={1}
                                          max={Math.max(
                                            1,
                                            totalVerbs -
                                              counts.reduce((a, b, i) => (i === ti ? a : a + b), 0),
                                          )}
                                          onChange={(n) => {
                                            const next = [...counts];
                                            next[ti] = n;
                                            patchTheoryTable(meta.id, { verbsPerTables: next });
                                          }}
                                        />
                                      </div>
                                    </div>
                                  ))}

                                  {counts.length < 3 && remaining > 0 ? (
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const nextCount = Math.min(4, remaining);
                                        patchTheoryTable(meta.id, {
                                          verbsPerTables: [...counts, nextCount],
                                        });
                                      }}
                                      className="w-full rounded-lg border border-dashed border-[var(--color-border-default)] px-3 py-2 text-xs font-semibold text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-theme)] hover:text-[var(--color-theme)]"
                                    >
                                      Rajouter un tableau
                                    </button>
                                  ) : null}

                                  {counts.length > 1 ? (
                                    <button
                                      type="button"
                                      onClick={() =>
                                        patchTheoryTable(meta.id, {
                                          verbsPerTables: counts.slice(0, -1),
                                        })
                                      }
                                      className="w-full text-xs text-[var(--color-text-secondary)] underline-offset-2 hover:underline"
                                    >
                                      Retirer le dernier tableau
                                    </button>
                                  ) : null}
                                </>
                              ) : (
                                <div className="flex items-center justify-between gap-3">
                                  <span className="text-[11px] text-[var(--color-text-secondary)]">
                                    Colonnes
                                  </span>
                                  <Counter
                                    value={cfg.columnCount}
                                    accent={accent}
                                    min={1}
                                    max={Math.max(1, meta.columnCount)}
                                    onChange={(columnCount) =>
                                      patchTheoryTable(meta.id, { columnCount })
                                    }
                                  />
                                </div>
                              )}

                              <div className="space-y-1">
                                <span className="text-[11px] text-[var(--color-text-secondary)]">
                                  Largeurs (%)
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {(() => {
                                    const widthCount = isVerbish
                                      ? (counts[0] ?? 1) + 1
                                      : cfg.columnCount;
                                    const widths =
                                      cfg.colWidths.length === widthCount
                                        ? cfg.colWidths
                                        : equalColWidths(widthCount);
                                    return widths.map((w, ci) => (
                                      <label
                                        key={ci}
                                        className="flex items-center gap-1 rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-1.5 py-1"
                                      >
                                        <span className="text-[10px] text-[var(--color-text-secondary)]">
                                          C{ci + 1}
                                        </span>
                                        <input
                                          type="number"
                                          min={5}
                                          max={90}
                                          value={parseInt(w, 10) || 0}
                                          onChange={(e) => {
                                            const n = Math.max(
                                              5,
                                              Math.min(90, Number(e.target.value) || 0),
                                            );
                                            const next = [...widths];
                                            next[ci] = `${n}%`;
                                            patchTheoryTable(meta.id, {
                                              colWidths: next,
                                              columnCount: next.length,
                                            });
                                          }}
                                          className="w-10 bg-transparent text-center text-xs outline-none"
                                        />
                                      </label>
                                    ));
                                  })()}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div>
                <FieldLabel>Exercices</FieldLabel>
                <div className="space-y-2">
                  {(bundle?.exercises ?? []).map((ex) => {
                    const sel = selection.find((s) => s.id === ex.id);
                    if (!sel) return null;
                    return (
                      <div
                        key={ex.id}
                        className="rounded-xl border border-[var(--color-border-default)] px-3 py-2.5"
                      >
                        <div className="flex items-center gap-3">
                          <CheckBox
                            checked={sel.included}
                            onChange={(included) =>
                              patchSelection(ex.id, {
                                included,
                                occurrences: included ? Math.max(1, sel.occurrences) : 0,
                              })
                            }
                            accent={accent}
                          />
                          <span className="min-w-0 flex-1 truncate text-sm font-medium text-[var(--color-text-primary)]">
                            {ex.label}
                          </span>
                          <button
                            type="button"
                            data-print-refresh={ex.id}
                            aria-label="Retirer au hasard"
                            title="Retirer au hasard"
                            onClick={() => bumpExerciseNonce(ex.id)}
                            className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90"
                            style={{ color: accent }}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                              <path d="M20 11a8 8 0 10-2.34 5.66" />
                              <path d="M20 4v7h-7" />
                            </svg>
                          </button>
                        </div>
                        {sel.included && (
                          <div className="mt-3 space-y-2 pl-9">
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-xs text-[var(--color-text-secondary)]">Occurrences</span>
                              <Counter
                                value={sel.occurrences}
                                accent={accent}
                                min={1}
                                max={10}
                                onChange={(occurrences) =>
                                  patchSelection(ex.id, {
                                    occurrences,
                                    included: occurrences > 0,
                                  })
                                }
                              />
                            </div>
                            {ex.supportsPrintLayout && (
                              <>
                                <div className="flex items-center justify-between gap-3">
                                  <span className="text-xs text-[var(--color-text-secondary)]">
                                    Questions
                                  </span>
                                  <Counter
                                    value={sel.questionCount}
                                    accent={accent}
                                    min={1}
                                    max={30}
                                    onChange={(questionCount) =>
                                      patchSelection(ex.id, { questionCount })
                                    }
                                  />
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                  <span className="text-xs text-[var(--color-text-secondary)]">
                                    Colonnes
                                  </span>
                                  <Counter
                                    value={sel.columns}
                                    accent={accent}
                                    min={1}
                                    max={5}
                                    onChange={(v) =>
                                      patchSelection(ex.id, {
                                        columns: clampPrintColumns(v),
                                      })
                                    }
                                  />
                                </div>
                              </>
                            )}
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-xs text-[var(--color-text-secondary)]">
                                Espacement
                              </span>
                              <Counter
                                value={sel.spacing}
                                accent={accent}
                                min={1}
                                max={5}
                                onChange={(spacing) => patchSelection(ex.id, { spacing })}
                              />
                            </div>
                            {sel.printLengthMode !== "none" && (
                              <div className="flex items-center justify-between gap-3">
                                <span className="text-xs text-[var(--color-text-secondary)]">
                                  Longueurs
                                </span>
                                <Counter
                                  value={sel.length}
                                  accent={accent}
                                  min={sel.printLengthMode === "lines" ? -1 : -10}
                                  max={10}
                                  onChange={(length) => patchSelection(ex.id, { length })}
                                />
                              </div>
                            )}
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-xs text-[var(--color-text-secondary)]">
                                Saut de page
                              </span>
                              <CheckBox
                                checked={sel.pageBreak}
                                onChange={(pageBreak) => patchSelection(ex.id, { pageBreak })}
                                accent={accent}
                              />
                            </div>
                            {evalMode && (
                              <div className="flex items-center justify-between gap-3">
                                <span className="text-xs text-[var(--color-text-secondary)]">Points</span>
                                <Counter
                                  value={sel.points}
                                  accent={accent}
                                  min={1}
                                  max={100}
                                  onChange={(points) => patchSelection(ex.id, { points })}
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  {(bundle?.exercises.length ?? 0) === 0 && (
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {bundleError ?? "Aucun exercice pour ce document."}
                    </p>
                  )}
                </div>
              </div>

            </div>
          </SectionCard>
          </div>
          </div>
        </aside>

        <section
          className="impression-scroll min-h-0 flex-1 overflow-y-auto bg-[color-mix(in_oklch,var(--color-bg-secondary)_70%,white)] px-3 py-4 sm:px-6"
          style={themeStyle}
        >
          {bundleError && (
            <p className="mx-auto mb-4 max-w-md rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-center text-sm text-amber-700">
              {bundleError}
            </p>
          )}
          {!bundle ? (
            <p className="text-center text-sm text-[var(--color-text-secondary)]">
              {printSeed == null
                ? "Préparation de l’aperçu…"
                : bundleError ?? "Sélectionnez un document à imprimer."}
            </p>
          ) : (
            <PaginatedPreview
              key={`${selectedEntry?.id ?? "none"}-${printSeed}-${printExerciseNoncesKey(exerciseNonces)}-${theory ? 1 : 0}-${includeCorrections ? 1 : 0}-${themeColorId}-${JSON.stringify(theoryOpts)}`}
              pagesContainerRef={previewPagesRef}
              printDate={printDate}
              printedBy={printedBy}
              header={
                <PrintDocumentHeader
                  config={header}
                  evalMode={evalMode}
                  totalPoints={totalPoints}
                />
              }
              theorySegments={theorySegments}
              exerciseNodes={previewBlocks.flatMap((item) => {
                const ex = item.exercise;
                const layoutKey = `q${item.selection.questionCount}-c${item.selection.columns}-s${item.selection.spacing}-l${item.selection.length}-pb${item.selection.pageBreak ? 1 : 0}-corr${item.correction ? 1 : 0}`;
                const softBreak =
                  item.correction
                    ? item.displayIndex === 0 || Boolean(item.selection.pageBreak)
                    : (theory && hasAnnouncement && item.displayIndex === 0)
                      || Boolean(item.selection.pageBreak);

                const titleRow = (suffix?: string, showInstruction = true) => (
                  <PrintExerciseHeader
                    exercise={ex}
                    index={item.displayIndex}
                    suffix={suffix ?? (item.correction ? "Corrigé" : undefined)}
                    accentColor={accent}
                    points={item.selection.points}
                    showPoints={evalMode}
                    showInstruction={showInstruction}
                  />
                );

                const bodyPreview = item.correction
                  ? (ex?.correctionPreview ?? ex?.preview)
                  : ex?.preview;

                const bodyNode = (key: string, forceNewPage: boolean, titleSuffix?: string) => ({
                  key: `${key}-${layoutKey}`,
                  forceNewPage,
                  render: () => (
                    <div className="print-exercise">
                      {titleRow(titleSuffix)}
                      <PrintExerciseBody
                        key={`${key}-body-${layoutKey}-o${item.occurrence}`}
                        selection={item.selection}
                        answerKey={item.correction}
                      >
                        {clonePreview(
                          bodyPreview ?? <div className="h-7 border-b border-black/40" />,
                          `${key}-preview-${item.occurrence}`,
                        )}
                      </PrintExerciseBody>
                    </div>
                  ),
                });

                const plainNode = (
                  key: string,
                  preview: ReactNode,
                  forceNewPage: boolean,
                  titleSuffix: string,
                ) => ({
                  key: `${key}-${layoutKey}`,
                  forceNewPage,
                  render: () => (
                    <div className="print-exercise">
                      {titleRow(titleSuffix, false)}
                      <div className="print-ex-content text-[1.6em] leading-normal text-zinc-800 [&_button]:pointer-events-none">
                        {clonePreview(preview, `${key}-plain-${item.occurrence}`)}
                      </div>
                    </div>
                  ),
                });

                // Placement FR (CE/CO/PE/PO) : leads / follows déjà structurés en pages.
                if (item.correction && ex?.correctionLeadPreview) {
                  const nodes = [
                    plainNode(
                      `${item.key}-corr-lead`,
                      ex.correctionLeadPreview,
                      true,
                      ex.correctionLeadTitle ?? "Audios & transcriptions",
                    ),
                    bodyNode(item.key, true, "Corrigé"),
                  ];
                  (ex.correctionFollowPreviews ?? []).forEach((follow, fi) => {
                    nodes.push(
                      plainNode(
                        `${item.key}-corr-follow-${fi}`,
                        follow.preview,
                        true,
                        follow.title ?? "Suite",
                      ),
                    );
                  });
                  return nodes;
                }

                if (!item.correction && ex?.leadPreview) {
                  const nodes = [
                    plainNode(`${item.key}-lead`, ex.leadPreview, true, ""),
                    bodyNode(item.key, true, ex.leadFollowTitle ?? "Grille"),
                  ];
                  (ex.followPreviews ?? []).forEach((follow, fi) => {
                    nodes.push(
                      plainNode(
                        `${item.key}-follow-${fi}`,
                        follow.preview,
                        true,
                        follow.title ?? "Suite",
                      ),
                    );
                  });
                  return nodes;
                }

                if (item.correction && (ex?.correctionFollowPreviews?.length ?? 0) > 0) {
                  const nodes = [bodyNode(item.key, softBreak, "Corrigé")];
                  (ex!.correctionFollowPreviews ?? []).forEach((follow, fi) => {
                    nodes.push(
                      plainNode(
                        `${item.key}-corr-follow-${fi}`,
                        follow.preview,
                        true,
                        follow.title ?? "Suite",
                      ),
                    );
                  });
                  return nodes;
                }

                if (!item.correction && (ex?.followPreviews?.length ?? 0) > 0) {
                  const nodes = [bodyNode(item.key, softBreak)];
                  (ex!.followPreviews ?? []).forEach((follow, fi) => {
                    nodes.push(
                      plainNode(
                        `${item.key}-follow-${fi}`,
                        follow.preview,
                        true,
                        follow.title ?? "Suite",
                      ),
                    );
                  });
                  return nodes;
                }

                return [bodyNode(item.key, softBreak)];
              })}
            />
          )}
          <span className="hidden">
            <PrintDocumentFooter date={printDate} printedBy={printedBy} preview page={1} totalPages={1} />
          </span>
          {!hasPrintableContent && bundle && (
            <p className="mx-auto mt-4 max-w-md rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-center text-sm text-amber-700">
              Sélectionnez la théorie ou au moins un exercice avant d&apos;imprimer.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

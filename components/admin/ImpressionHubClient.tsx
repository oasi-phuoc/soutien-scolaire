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
  type ExercisePrintSelection,
  type PrintHeaderConfig,
} from "@/components/ui/PrintConfigSheet";
import type { PrintExerciseColumns } from "@/components/print/PrintExerciseLayoutContext";
import { AppSelect } from "@/components/ui/AppSelect";
import { capturePageCss, openPrintPopup } from "@/lib/utils/print";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import type { PlacementLevel } from "@/lib/placement/types";

const CLASS_LEVELS: PrintHeaderConfig["classLevel"][] = ["CSC", "CFR", "EPL", "CPR"];
const CLASS_NUMBERS = Array.from({ length: 20 }, (_, index) => String(index + 1).padStart(2, "0"));

const DOMAINS: { id: PrintDomain; label: string }[] = [
  { id: "math", label: "Mathématiques" },
  { id: "francais", label: "Français" },
  { id: "placement", label: "Placement" },
];

function preferredGroups(domain: PrintDomain, groups: string[]): string[] {
  const preferred =
    domain === "francais"
      ? ["Vocabulaire", "Conjugaison", "Grammaire", "Communication"]
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
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--color-border-default)] text-sm font-bold text-[var(--color-text-secondary)] transition-opacity disabled:opacity-30"
        aria-label="Moins"
      >
        −
      </button>
      <span className="min-w-[2rem] text-center text-sm font-semibold tabular-nums" style={{ color: accent }}>
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--color-border-default)] text-sm font-bold text-[var(--color-text-secondary)] transition-opacity disabled:opacity-30"
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
  const [includeCorrections, setIncludeCorrections] = useState(true);
  const [classLevel, setClassLevel] = useState<PrintHeaderConfig["classLevel"]>("CSC");
  const [classNumber, setClassNumber] = useState("01");
  const [title, setTitle] = useState("");
  const [selection, setSelection] = useState<ExercisePrintSelection[]>([]);
  const [printedBy, setPrintedBy] = useState("");
  const [frenchLevel, setFrenchLevel] = useState<PlacementLevel>("base");
  /** Seed uniquement après mount — évite mismatch SSR/hydratation (random). */
  const [printSeed, setPrintSeed] = useState<number | null>(null);
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
      return buildPrintBundle(selectedEntry.id, { frenchLevel, seed: printSeed });
    } catch (err) {
      console.error("[impression] buildPrintBundle failed", selectedEntry.id, err);
      return null;
    }
  }, [selectedEntry, frenchLevel, printSeed]);

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
    setSelection(
      bundle.exercises.map((ex) => ({
        id: ex.id,
        included: true,
        occurrences: 1,
        questionCount: Math.max(1, ex.defaultQuestionCount ?? 5),
        columns: 1 as PrintExerciseColumns,
        points: Math.max(1, ex.defaultPoints ?? 1),
      })),
    );
  }, [bundle]);

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
  }

  function changeGroup(next: string) {
    setGroup(next);
    setModuleId("");
    setDocId("");
    setSelection([]);
    setTheory(false);
    setPrintSeed(freshSeed());
  }

  function changeModule(next: string) {
    setModuleId(next);
    setDocId("");
    setSelection([]);
    setTheory(false);
    setPrintSeed(freshSeed());
  }

  function changeDocument(next: string) {
    setDocId(next);
    setSelection([]);
    setTheory(false);
    setFrenchLevel("base");
    setPrintSeed(freshSeed());
  }

  const patchSelection = (id: string, patch: Partial<ExercisePrintSelection>) =>
    setSelection((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));

  const accent = bundle?.accentColor ?? "var(--color-theme)";
  const course = bundle?.course ?? "Mathématiques";
  const printDate = formatPrintDate();
  const header: PrintHeaderConfig = { classLevel, classNumber, course, title };
  const hasAnnouncement = Boolean(bundle?.announcementPreview);

  const theoryNode: ReactNode | null =
    theory && (bundle?.announcementPreview || bundle?.theoryPreview) ? (
      <div className="[&_button]:hidden [&_[data-no-print]]:hidden [&_h1]:text-[1.25em] [&_h2]:text-[1.2em] [&_h3]:text-[1.1em] [&_p]:text-[1em]">
        {bundle?.announcementPreview ?? bundle?.theoryPreview}
      </div>
    ) : null;

  const hasPrintableContent =
    Boolean(theoryNode) || selection.some((item) => item.included && item.occurrences > 0);
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
    const printCss = `@page{size:A4 portrait;margin:0!important;}html,body{width:210mm!important;margin:0!important;padding:0!important;background:white!important;}body *{visibility:hidden!important;}*{box-sizing:border-box!important;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}.preview-pages-container,.preview-pages-container *{visibility:visible!important;}.preview-pages-container{position:absolute!important;left:0!important;top:0!important;width:210mm!important;max-height:none!important;overflow:visible!important;gap:0!important;padding:0!important;margin:0!important;display:block!important;background:white!important;}.preview-page-sheet{box-sizing:border-box!important;width:210mm!important;height:297mm!important;min-height:297mm!important;max-height:297mm!important;overflow:hidden!important;padding:18mm 12mm 12mm!important;font-size:9px!important;line-height:1.55!important;color:#000!important;background:white!important;transform:none!important;box-shadow:none!important;border:none!important;border-radius:0!important;page-break-after:always!important;break-after:page!important;display:flex!important;flex-direction:column!important;margin:0!important;}.preview-page-sheet:last-child{page-break-after:auto!important;break-after:auto!important;}.print-exercise{break-inside:avoid;page-break-inside:avoid;}.print-ex-content h2,.print-ex-content p.font-bold{display:none!important;}img{visibility:visible!important;opacity:1!important;}`;
    const html = `<!DOCTYPE html><html lang="fr"><head><base href="${base}/"><meta charset="utf-8"><title>Feuille d'exercice</title><style>${css}${printCss}</style></head><body>${printNode.outerHTML}</body></html>`;
    openPrintPopup(html, { title: title || "Feuille d'exercice", width: 1000, height: 800 });
  };

  return (
    <div className="flex h-[calc(100dvh-1rem)] min-h-[36rem] flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] lg:h-[calc(100dvh-3rem)]">
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-[var(--color-border-default)] px-4 py-3">
        <div className="min-w-0">
          <h1 className="truncate text-lg font-bold text-[var(--color-text-primary)]">
            Impression documents
          </h1>
          <p className="truncate text-xs text-[var(--color-text-secondary)]">
            Aperçu A4 identique au PDF — en-tête page 1, pied de page sur toutes les pages
          </p>
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
                                    Nombre de questions
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
                                    Nombre de colonnes
                                  </span>
                                  <Counter
                                    value={sel.columns}
                                    accent={accent}
                                    min={1}
                                    max={3}
                                    onChange={(v) =>
                                      patchSelection(ex.id, {
                                        columns: (v === 2 || v === 3 ? v : 1) as PrintExerciseColumns,
                                      })
                                    }
                                  />
                                </div>
                              </>
                            )}
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

        <section className="impression-scroll min-h-0 flex-1 overflow-y-auto bg-[color-mix(in_oklch,var(--color-bg-secondary)_70%,white)] px-3 py-4 sm:px-6">
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
              key={`${selectedEntry?.id ?? "none"}-${printSeed}-${theory ? 1 : 0}-${includeCorrections ? 1 : 0}`}
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
              theoryNode={theoryNode}
              exerciseNodes={previewBlocks.map((item) => ({
                key: `${item.key}-q${item.selection.questionCount}-c${item.selection.columns}-corr${item.correction ? 1 : 0}`,
                /**
                 * Packing style placement maths : enchaîner les exercices s’ils
                 * tiennent entièrement sur la page, sinon page suivante.
                 * Saut forcé uniquement pour (1) le 1er exo après l’annonce,
                 * (2) le début du corrigé, (3) un exercice qui l’exige.
                 */
                forceNewPage: item.correction
                  ? item.displayIndex === 0
                  : (theory && hasAnnouncement && item.displayIndex === 0)
                    || item.exercise?.forceNewPage === true,
                render: () => (
                  <div className="print-exercise">
                    <div
                      className="mb-1 flex items-start gap-2 border-b border-black pb-0.5 text-[1.6em] font-bold"
                      style={{ color: accent }}
                    >
                      <span className="flex-1">
                        Exercice {item.displayIndex + 1}{item.correction ? " — Corrigé" : ""}
                      </span>
                      {evalMode && (
                        <span style={{ color: "black" }}>
                          {item.selection.points} pt{item.selection.points > 1 ? "s" : ""}
                        </span>
                      )}
                    </div>
                    <PrintExerciseBody
                      key={`${item.key}-body-q${item.selection.questionCount}-c${item.selection.columns}-o${item.occurrence}-corr${item.correction ? 1 : 0}`}
                      selection={item.selection}
                      answerKey={item.correction}
                    >
                      {clonePreview(
                        (item.correction
                          ? (item.exercise?.correctionPreview ?? item.exercise?.preview)
                          : item.exercise?.preview) ?? <div className="h-7 border-b border-black/40" />,
                        `${item.key}-preview-${item.occurrence}`,
                      )}
                    </PrintExerciseBody>
                  </div>
                ),
              }))}
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

"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  getImpressionCatalog,
  IMPRESSION_SUBJECTS,
  type ImpressionDocument,
  type ImpressionSubject,
} from "@/lib/print/document-catalog";
import {
  PaginatedPreview,
  PrintDocumentFooter,
  PrintDocumentHeader,
  type ExercisePrintSelection,
  type PrintHeaderConfig,
} from "@/components/ui/PrintConfigSheet";
import { AppSelect } from "@/components/ui/AppSelect";
import { capturePageCss, openPrintPopup } from "@/lib/utils/print";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { buildDocumentPrintPayload } from "@/components/impressions/buildDocumentPrintPayload";

const CLASS_LEVELS: PrintHeaderConfig["classLevel"][] = ["CSC", "CFR", "EPL", "CPR"];
const CLASS_NUMBERS = Array.from({ length: 20 }, (_, index) => String(index + 1).padStart(2, "0"));

function formatPrintDate(date = new Date()): string {
  return new Intl.DateTimeFormat("fr-CH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
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

function Pill({
  active,
  label,
  onClick,
  accent,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
  accent: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full px-3 py-1.5 text-xs font-semibold transition-colors"
      style={
        active
          ? { background: accent, color: "white" }
          : { background: "var(--color-bg-secondary)", color: "var(--color-text-secondary)" }
      }
      aria-pressed={active}
    >
      {label}
    </button>
  );
}

export function ImpressionsClient() {
  const catalog = useMemo(() => getImpressionCatalog(), []);
  const [subject, setSubject] = useState<ImpressionSubject>("maths");
  const [group, setGroup] = useState<string>("");
  const [docId, setDocId] = useState<string>("");
  const [evalMode, setEvalMode] = useState(false);
  const [theory, setTheory] = useState(false);
  const [classLevel, setClassLevel] = useState<PrintHeaderConfig["classLevel"]>("CSC");
  const [classNumber, setClassNumber] = useState("01");
  const [title, setTitle] = useState("");
  const [selection, setSelection] = useState<ExercisePrintSelection[]>([]);
  const [printedBy, setPrintedBy] = useState("");
  const previewPagesRef = useRef<HTMLDivElement>(null);

  const subjectDocs = useMemo(
    () => catalog.filter((d) => d.subject === subject),
    [catalog, subject],
  );

  const groups = useMemo(() => {
    const map = new Map<string, string>();
    for (const d of subjectDocs) map.set(d.group, d.groupLabel);
    return [...map.entries()].map(([id, label]) => ({ id, label }));
  }, [subjectDocs]);

  const groupDocs = useMemo(() => {
    const g = group || groups[0]?.id;
    return subjectDocs.filter((d) => d.group === g);
  }, [subjectDocs, group, groups]);

  const selectedDoc: ImpressionDocument | undefined = useMemo(() => {
    return groupDocs.find((d) => d.id === docId) ?? groupDocs[0];
  }, [groupDocs, docId]);

  const payload = useMemo(
    () => (selectedDoc ? buildDocumentPrintPayload(selectedDoc) : null),
    [selectedDoc],
  );

  // Reset group/doc when subject changes
  useEffect(() => {
    const nextGroups = new Map<string, string>();
    for (const d of catalog.filter((x) => x.subject === subject)) {
      nextGroups.set(d.group, d.groupLabel);
    }
    const firstGroup = [...nextGroups.keys()][0] ?? "";
    setGroup(firstGroup);
    const firstDoc = catalog.find((d) => d.subject === subject && d.group === firstGroup);
    setDocId(firstDoc?.id ?? "");
  }, [subject, catalog]);

  // Keep doc in sync when group changes
  useEffect(() => {
    if (!group) return;
    const docs = catalog.filter((d) => d.subject === subject && d.group === group);
    if (!docs.some((d) => d.id === docId)) {
      setDocId(docs[0]?.id ?? "");
    }
  }, [group, subject, catalog, docId]);

  // Reset selection when document payload changes
  useEffect(() => {
    if (!payload) {
      setSelection([]);
      setTitle("");
      return;
    }
    setTitle(payload.title.replace(/^v\d+(\.\d+)*\s+/i, ""));
    setTheory(Boolean(payload.theoryPreview));
    setSelection(
      payload.exercises.map((ex) => ({
        id: ex.id,
        included: true,
        occurrences: 1,
        points: 1,
      })),
    );
  }, [payload]);

  useEffect(() => {
    setTitle(evalMode ? "Évaluation" : (payload?.title ?? "").replace(/^v\d+(\.\d+)*\s+/i, ""));
  }, [evalMode, payload?.title]);

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
        setPrintedBy(
          [profile?.prenom, profile?.nom].filter(Boolean).join(" ") || fallback,
        );
      }
    };
    void loadPrintedBy();
    return () => {
      cancelled = true;
    };
  }, []);

  const accent = selectedDoc?.accentColor ?? "var(--color-theme)";
  const course = selectedDoc?.course ?? payload?.course ?? "Mathématiques";
  const printDate = formatPrintDate();
  const header: PrintHeaderConfig = { classLevel, classNumber, course, title };

  const hasPrintableContent =
    theory || selection.some((item) => item.included && item.occurrences > 0);
  const totalPoints = selection
    .filter((s) => s.included && s.occurrences > 0)
    .reduce((sum, s) => sum + s.points * s.occurrences, 0);

  const previewExercises = selection.flatMap((item) => {
    if (!item.included || item.occurrences < 1) return [];
    const exercise = payload?.exercises.find((candidate) => candidate.id === item.id);
    return Array.from({ length: item.occurrences }, (_, occurrence) => ({
      key: `${item.id}-${occurrence}`,
      exercise,
      selection: item,
      occurrence,
    }));
  });

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

  const theoryNode: ReactNode | null = theory ? (
    <div className="[&_button]:hidden [&_[data-no-print]]:hidden [&_h1]:text-[1.25em] [&_h2]:text-[1.2em] [&_h3]:text-[1.1em] [&_p]:text-[1em] [&_.text-2xl]:!text-[1.3em] [&_.text-xl]:!text-[1.15em] [&_.text-lg]:!text-[1.05em] [&_.text-base]:!text-[1em] [&_.text-sm]:!text-[0.85em] [&_.text-xs]:!text-[0.7em]">
      {payload?.theoryPreview ?? (
        <p className="text-zinc-500">La théorie de la leçon sera incluse dans le document.</p>
      )}
    </div>
  ) : null;

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
          disabled={!hasPrintableContent || !payload}
          className="shrink-0 rounded-xl px-4 py-2.5 text-sm font-bold text-white transition-opacity disabled:opacity-40"
          style={{ background: accent }}
        >
          Imprimer
        </button>
      </header>

      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        {/* Filtres — panneau gauche */}
        <aside className="max-h-[42%] shrink-0 overflow-y-auto border-b border-[var(--color-border-default)] p-4 lg:max-h-none lg:w-[22rem] lg:border-b-0 lg:border-r">
          <section className="mb-5">
            <h2 className="mb-2 text-[10px] font-bold uppercase tracking-wide" style={{ color: accent }}>
              Matière
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {IMPRESSION_SUBJECTS.map((s) => (
                <Pill
                  key={s.id}
                  label={s.label}
                  active={subject === s.id}
                  onClick={() => setSubject(s.id)}
                  accent={accent}
                />
              ))}
            </div>
          </section>

          <section className="mb-5">
            <h2 className="mb-2 text-[10px] font-bold uppercase tracking-wide" style={{ color: accent }}>
              Module
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {groups.map((g) => (
                <Pill
                  key={g.id}
                  label={g.label}
                  active={(group || groups[0]?.id) === g.id}
                  onClick={() => setGroup(g.id)}
                  accent={accent}
                />
              ))}
            </div>
          </section>

          <section className="mb-5">
            <h2 className="mb-2 text-[10px] font-bold uppercase tracking-wide" style={{ color: accent }}>
              Document
            </h2>
            <AppSelect
              value={selectedDoc?.id ?? ""}
              onChange={setDocId}
              options={groupDocs.map((d) => ({
                value: d.id,
                label: `${d.code} — ${d.title}`,
              }))}
              className="w-full"
            />
          </section>

          <section className="mb-5">
            <h2 className="mb-2 text-[10px] font-bold uppercase tracking-wide" style={{ color: accent }}>
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
          </section>

          {payload?.theoryPreview ? (
            <section className="mb-5">
              <h2 className="mb-2 text-[10px] font-bold uppercase tracking-wide" style={{ color: accent }}>
                Théorie
              </h2>
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border-default)] px-3 py-2.5">
                <CheckBox checked={theory} onChange={setTheory} accent={accent} />
                <span className="text-sm text-[var(--color-text-primary)]">Inclure la théorie</span>
              </div>
            </section>
          ) : null}

          <section className="mb-5">
            <h2 className="mb-2 text-[10px] font-bold uppercase tracking-wide" style={{ color: accent }}>
              Exercices
            </h2>
            <div className="space-y-2">
              {(payload?.exercises ?? []).map((ex) => {
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
                          setSelection((prev) =>
                            prev.map((s) =>
                              s.id === ex.id
                                ? {
                                    ...s,
                                    included,
                                    occurrences: included ? Math.max(1, s.occurrences) : 0,
                                  }
                                : s,
                            ),
                          )
                        }
                        accent={accent}
                      />
                      <span className="min-w-0 flex-1 truncate text-sm font-medium text-[var(--color-text-primary)]">
                        {ex.label}
                      </span>
                    </div>
                    {sel.included && (
                      <div className="mt-2 flex items-center justify-between gap-2 pl-9">
                        <span className="text-[11px] text-[var(--color-text-secondary)]">Occurrences</span>
                        <Counter
                          value={sel.occurrences}
                          accent={accent}
                          min={1}
                          onChange={(occurrences) =>
                            setSelection((prev) =>
                              prev.map((s) =>
                                s.id === ex.id ? { ...s, occurrences, included: occurrences > 0 } : s,
                              ),
                            )
                          }
                        />
                        {evalMode && (
                          <>
                            <span className="text-[11px] text-[var(--color-text-secondary)]">Pts</span>
                            <Counter
                              value={sel.points}
                              accent={accent}
                              min={1}
                              max={20}
                              onChange={(points) =>
                                setSelection((prev) =>
                                  prev.map((s) => (s.id === ex.id ? { ...s, points } : s)),
                                )
                              }
                            />
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              {(payload?.exercises.length ?? 0) === 0 && (
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Aucun exercice pour ce document.
                </p>
              )}
            </div>
          </section>

          <section className="mb-2">
            <h2 className="mb-2 text-[10px] font-bold uppercase tracking-wide" style={{ color: accent }}>
              En-tête
            </h2>
            <div className="space-y-3 rounded-xl border border-[var(--color-border-default)] p-3">
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
          </section>
        </aside>

        {/* Aperçu A4 */}
        <section className="min-h-0 flex-1 overflow-y-auto bg-[color-mix(in_oklch,var(--color-bg-secondary)_70%,white)] px-3 py-4 sm:px-6">
          {!payload ? (
            <p className="text-center text-sm text-[var(--color-text-secondary)]">
              Sélectionnez un document à imprimer.
            </p>
          ) : (
            <PaginatedPreview
              pagesContainerRef={previewPagesRef}
              printDate={printDate}
              printedBy={printedBy}
              maxHeightClassName="max-h-none"
              header={
                <PrintDocumentHeader
                  config={header}
                  evalMode={evalMode}
                  totalPoints={totalPoints}
                />
              }
              theoryNode={theoryNode}
              exerciseNodes={previewExercises.map((item, index) => ({
                key: item.key,
                node: (
                  <div className="print-exercise">
                    <div
                      className="mb-1 flex items-start gap-2 border-b border-black pb-0.5 text-[1.6em] font-bold"
                      style={{ color: accent }}
                    >
                      <span className="flex-1">Exercice {index + 1}</span>
                      {evalMode && (
                        <span style={{ color: "black" }}>
                          {item.selection.points} pt{item.selection.points > 1 ? "s" : ""}
                        </span>
                      )}
                    </div>
                    <div className="print-ex-content text-[1.6em] leading-normal text-zinc-800 [&_button]:pointer-events-none">
                      {item.exercise?.preview ?? <div className="h-7 border-b border-black/40" />}
                    </div>
                  </div>
                ),
              }))}
            />
          )}
          {/* Footer export kept for type completeness in print clone path */}
          <span className="hidden">
            <PrintDocumentFooter date={printDate} printedBy={printedBy} preview page={1} totalPages={1} />
          </span>
          {!hasPrintableContent && payload && (
            <p className="mx-auto mt-4 max-w-md rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-center text-sm text-amber-700">
              Sélectionnez la théorie ou au moins un exercice avant d&apos;imprimer.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

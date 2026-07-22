"use client";

import { useMemo, useState } from "react";
import {
  listPrintableLessons,
  type PrintCatalogEntry,
  type PrintDomain,
} from "@/lib/print/catalog";
import { buildPrintBundle } from "@/components/print/buildPrintBundle";
import { PrintConfigSheet } from "@/components/ui/PrintConfigSheet";

const DOMAINS: { id: PrintDomain; label: string }[] = [
  { id: "math", label: "Maths" },
  { id: "francais", label: "Français" },
  { id: "placement", label: "Placement" },
];

export function ImpressionHubClient() {
  const catalog = useMemo(() => listPrintableLessons(), []);
  const [domain, setDomain] = useState<PrintDomain>("math");
  const [group, setGroup] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const domainEntries = useMemo(
    () => catalog.filter((e) => e.domain === domain),
    [catalog, domain],
  );

  const groups = useMemo(() => {
    const set = new Set(domainEntries.map((e) => e.group));
    return Array.from(set);
  }, [domainEntries]);

  const activeGroup = group && groups.includes(group) ? group : groups[0] ?? null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return domainEntries.filter((e) => {
      if (activeGroup && e.group !== activeGroup) return false;
      if (!q) return true;
      return (
        e.title.toLowerCase().includes(q) ||
        e.code.toLowerCase().includes(q)
      );
    });
  }, [domainEntries, activeGroup, query]);

  const selectedBundle = useMemo(
    () => (selectedId ? buildPrintBundle(selectedId) : null),
    [selectedId],
  );

  function selectDomain(next: PrintDomain) {
    setDomain(next);
    setGroup(null);
    setQuery("");
    setSelectedId(null);
  }

  function selectLesson(entry: PrintCatalogEntry) {
    setSelectedId(entry.id);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {DOMAINS.map((d) => {
            const active = domain === d.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => selectDomain(d.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-[var(--color-theme)] text-white"
                    : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>
        <p className="text-xs text-[var(--color-text-secondary)]">
          Une leçon ou une partie à la fois · Aperçu A4 puis Imprimer / PDF
        </p>
      </div>

      {groups.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {groups.map((g) => {
            const active = activeGroup === g;
            return (
              <button
                key={g}
                type="button"
                onClick={() => setGroup(g)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  active
                    ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
                }`}
              >
                {g}
              </button>
            );
          })}
        </div>
      )}

      <div className="relative">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher une leçon…"
          className="w-full rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm outline-none transition focus:border-[var(--color-theme)]"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
        <div className="border-b border-[var(--color-border-default)] px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            {filtered.length} leçon{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
        <ul className="max-h-[min(60vh,520px)] divide-y divide-[var(--color-border-default)] overflow-y-auto">
          {filtered.map((entry) => (
            <li key={entry.id}>
              <button
                type="button"
                onClick={() => selectLesson(entry)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-[var(--color-bg-secondary)]"
              >
                <span className="w-16 shrink-0 text-xs font-bold text-[var(--color-theme)]">
                  {entry.code}
                </span>
                <span className="min-w-0 flex-1 text-sm font-medium text-[var(--color-text-primary)]">
                  {entry.title}
                </span>
                <span className="shrink-0 text-[var(--color-text-secondary)]" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9V2h12v7" />
                    <rect x="6" y="14" width="12" height="8" rx="1" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  </svg>
                </span>
              </button>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="px-4 py-8 text-center text-sm text-[var(--color-text-secondary)]">
              Aucune leçon ne correspond à la recherche.
            </li>
          )}
        </ul>
      </div>

      {selectedId && selectedBundle && (
        <PrintConfigSheet
          key={selectedId}
          onClose={() => setSelectedId(null)}
          onPrint={() => setSelectedId(null)}
          lessonTitle={selectedBundle.lessonTitle}
          theoryPreview={selectedBundle.theoryPreview}
          exercises={selectedBundle.exercises}
          accentColor={selectedBundle.accentColor}
          defaultCourse={selectedBundle.course}
          defaultEvalMode={selectedBundle.defaultEvalMode}
        />
      )}
    </div>
  );
}

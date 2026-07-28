"use client";

import { useMemo, useState } from "react";
import {
  listPrintableLessons,
  type PrintCatalogEntry,
  type PrintDomain,
} from "@/lib/print/catalog";
import { buildPrintBundle } from "@/components/print/buildPrintBundle";
import { PrintConfigSheet } from "@/components/ui/PrintConfigSheet";
import type { PlacementLevel } from "@/lib/placement/types";

const DOMAINS: { id: PrintDomain; label: string }[] = [
  { id: "math", label: "Maths" },
  { id: "francais", label: "Français" },
  { id: "placement", label: "Placement" },
];

const MODULE_ROW_BG = [
  "bg-zinc-50 dark:bg-zinc-900/40",
  "bg-white dark:bg-zinc-950",
] as const;

type ModuleBlock = {
  moduleId: string;
  moduleCode: string;
  moduleTitle: string;
  lessons: PrintCatalogEntry[];
};

function BranchToggle<T extends string>({
  options,
  selected,
  onToggle,
}: {
  options: { id: T; label: string }[];
  selected: T;
  onToggle: (id: T) => void;
}) {
  return (
    <div className="flex min-w-0 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700">
      {options.map((opt, i) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => onToggle(opt.id)}
          className={`min-w-0 flex-1 truncate px-3 py-1.5 text-xs font-semibold transition-colors ${
            i > 0 ? "border-l border-zinc-200 dark:border-zinc-700" : ""
          } ${
            selected === opt.id
              ? "bg-[var(--color-theme)] text-white"
              : "bg-white text-zinc-500 hover:text-zinc-700 dark:bg-zinc-900"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

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

export function ImpressionHubClient() {
  const catalog = useMemo(() => listPrintableLessons(), []);
  const [domain, setDomain] = useState<PrintDomain>("math");
  const [group, setGroup] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [frenchLevel, setFrenchLevel] = useState<PlacementLevel>("base");
  const [printSeed, setPrintSeed] = useState(() => Date.now());

  const domainEntries = useMemo(
    () => catalog.filter((e) => e.domain === domain),
    [catalog, domain],
  );

  const groups = useMemo(() => {
    const set = new Set(domainEntries.map((e) => e.group));
    return preferredGroups(domain, Array.from(set));
  }, [domain, domainEntries]);

  const activeGroup = group && groups.includes(group) ? group : groups[0] ?? null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return domainEntries.filter((e) => {
      if (activeGroup && e.group !== activeGroup) return false;
      if (!q) return true;
      return (
        e.title.toLowerCase().includes(q) ||
        e.code.toLowerCase().includes(q) ||
        e.moduleCode.toLowerCase().includes(q) ||
        e.moduleTitle.toLowerCase().includes(q)
      );
    });
  }, [domainEntries, activeGroup, query]);

  const modules = useMemo(() => {
    const map = new Map<string, ModuleBlock>();
    for (const entry of filtered) {
      const existing = map.get(entry.moduleId);
      if (existing) {
        existing.lessons.push(entry);
      } else {
        map.set(entry.moduleId, {
          moduleId: entry.moduleId,
          moduleCode: entry.moduleCode,
          moduleTitle: entry.moduleTitle,
          lessons: [entry],
        });
      }
    }
    return Array.from(map.values()).sort((a, b) =>
      a.moduleCode.localeCompare(b.moduleCode, "fr", { numeric: true }),
    );
  }, [filtered]);

  const selectedBundle = useMemo(
    () => (selectedId ? buildPrintBundle(selectedId, { frenchLevel, seed: printSeed }) : null),
    [selectedId, frenchLevel, printSeed],
  );

  function selectDomain(next: PrintDomain) {
    setDomain(next);
    setGroup(null);
    setQuery("");
    setExpanded(new Set());
    setSelectedId(null);
  }

  function selectGroup(next: string) {
    setGroup(next);
    setExpanded(new Set());
  }

  function toggleModule(moduleId: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(moduleId)) next.delete(moduleId);
      else next.add(moduleId);
      return next;
    });
  }

  function freshPrintSeed() {
    return Date.now() ^ Math.floor(Math.random() * 1_000_000_000);
  }

  function selectLesson(entry: PrintCatalogEntry) {
    setFrenchLevel("base");
    setPrintSeed(freshPrintSeed());
    setSelectedId(entry.id);
  }

  const lessonCount = filtered.length;
  const useFlatList = domain === "placement";

  return (
    <div className="min-w-0 space-y-5 overflow-x-hidden">
      <BranchToggle
        options={DOMAINS}
        selected={domain}
        onToggle={selectDomain}
      />

      {groups.length > 1 && (
        <BranchToggle
          options={groups.map((g) => ({ id: g, label: g }))}
          selected={activeGroup ?? groups[0]!}
          onToggle={selectGroup}
        />
      )}

      <div className="relative min-w-0">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher une leçon…"
          className="w-full min-w-0 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm outline-none transition focus:border-[var(--color-theme)]"
        />
      </div>

      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
        {lessonCount} leçon{lessonCount !== 1 ? "s" : ""}
        {!useFlatList && modules.length > 0
          ? ` · ${modules.length} module${modules.length !== 1 ? "s" : ""}`
          : ""}
      </p>

      <div className="min-w-0 space-y-1 overflow-hidden">
        {useFlatList ? (
          <>
            {filtered.map((entry, idx) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => selectLesson(entry)}
                className={`flex w-full min-w-0 items-center gap-2 rounded-lg px-3 py-2.5 text-left transition hover:bg-zinc-100/80 dark:hover:bg-zinc-800/50 ${MODULE_ROW_BG[idx % 2]}`}
              >
                <span className="w-20 shrink-0 text-xs font-bold text-[var(--color-theme)]">
                  {entry.code}
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-medium text-zinc-700 dark:text-zinc-200">
                  {entry.title}
                </span>
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="px-2 py-8 text-center text-sm text-[var(--color-text-secondary)]">
                Aucune leçon ne correspond à la recherche.
              </p>
            )}
          </>
        ) : (
          <>
            {modules.map((mod, idx) => {
              const isOpen = expanded.has(mod.moduleId) || Boolean(query.trim());
              return (
                <div
                  key={mod.moduleId}
                  className={`min-w-0 overflow-hidden rounded-lg ${MODULE_ROW_BG[idx % 2]}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleModule(mod.moduleId)}
                    className="flex w-full min-w-0 items-center justify-between gap-2 px-3 py-2.5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="min-w-0 truncate text-sm font-bold text-[var(--color-theme)]">
                      Module {mod.moduleCode}
                      <span className="ml-2 font-medium text-zinc-500 dark:text-zinc-400">
                        {mod.moduleTitle}
                      </span>
                    </span>
                    <span className="shrink-0 text-base font-light leading-none text-zinc-400" aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <ul className="divide-y divide-zinc-100 border-t border-zinc-100/80 px-2 dark:divide-zinc-800 dark:border-zinc-800">
                      {mod.lessons.map((entry) => (
                        <li key={entry.id}>
                          <button
                            type="button"
                            onClick={() => selectLesson(entry)}
                            className="flex w-full min-w-0 items-center gap-2 py-2 text-left text-sm transition hover:bg-zinc-100/80 dark:hover:bg-zinc-800/50"
                          >
                            <span className="w-14 shrink-0 text-xs font-semibold text-zinc-500">
                              {entry.code}
                            </span>
                            <span className="min-w-0 flex-1 truncate text-zinc-700 dark:text-zinc-200">
                              {entry.title}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}

            {modules.length === 0 && (
              <p className="px-2 py-8 text-center text-sm text-[var(--color-text-secondary)]">
                Aucune leçon ne correspond à la recherche.
              </p>
            )}
          </>
        )}
      </div>

      {selectedId && selectedBundle && (
        <PrintConfigSheet
          key={`${selectedId}-${frenchLevel}-${printSeed}`}
          onClose={() => setSelectedId(null)}
          onPrint={() => setSelectedId(null)}
          lessonTitle={selectedBundle.lessonTitle}
          theoryPreview={selectedBundle.theoryPreview}
          announcementPreview={selectedBundle.announcementPreview}
          exercises={selectedBundle.exercises}
          accentColor={selectedBundle.accentColor}
          defaultCourse={selectedBundle.course}
          defaultEvalMode={selectedBundle.defaultEvalMode}
          frenchLevelSelectable={selectedBundle.frenchLevelSelectable}
          frenchLevel={frenchLevel}
          onFrenchLevelChange={
            selectedBundle.frenchLevelSelectable
              ? (level) => {
                  setFrenchLevel(level);
                  setPrintSeed(freshPrintSeed());
                }
              : undefined
          }
        />
      )}
    </div>
  );
}

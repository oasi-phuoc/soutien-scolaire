"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { MathAxis, ModuleItem, Track } from "@/lib/modules";
import {
  MODULES,
  getModuleListSubtitle,
  MATH_AXIS_LABELS,
} from "@/lib/modules";

/** Filtres grand public : Français regroupe littératie + thèmes FLE */
export type LibraryFilterMode = "all" | "francais" | "math_elem";

export type MathAxisFilter = "all" | MathAxis;

const FILTERS: { id: LibraryFilterMode; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "francais", label: "Français" },
  { id: "math_elem", label: "Mathématiques" },
];

const MATH_AXES: { id: MathAxisFilter; label: string }[] = [
  { id: "all", label: "Toutes" },
  { id: "calculs", label: "Calculs" },
  { id: "geometrie", label: "Géométrie" },
];

function matchesTrackFilter(m: { track: Track }, filter: LibraryFilterMode): boolean {
  if (filter === "all") return true;
  if (filter === "francais") return m.track === "literacy" || m.track === "fle";
  return m.track === "math_elem";
}

function matchesMathAxis(m: ModuleItem, axis: MathAxisFilter): boolean {
  if (axis === "all") return true;
  if (m.track !== "math_elem") return false;
  return m.mathAxis === axis;
}

function parseFilterFromUrl(s: string | null): LibraryFilterMode | null {
  if (s === "math_elem") return "math_elem";
  if (s === "francais") return "francais";
  if (s === "literacy" || s === "fle") return "francais";
  return null;
}

function parseAxisFromUrl(s: string | null): MathAxisFilter | null {
  if (s === "calculs" || s === "geometrie") return s;
  return null;
}

function iconForModule(m: ModuleItem): string {
  if (m.track === "literacy") return "🔤";
  if (m.track === "fle") return "💬";
  if (m.mathAxis === "geometrie") return "📐";
  return "🔢";
}

export function LibraryView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = "/bibliotheque";

  const [filter, setFilter] = useState<LibraryFilterMode>("all");
  const [mathAxis, setMathAxis] = useState<MathAxisFilter>("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const f = parseFilterFromUrl(searchParams.get("fil"));
    const nextFilter = f ?? "all";
    setFilter(nextFilter);
    const ax = parseAxisFromUrl(searchParams.get("axe"));
    setMathAxis(nextFilter === "math_elem" ? ax ?? "all" : "all");
  }, [searchParams]);

  function pushLibraryUrl(nextFilter: LibraryFilterMode, nextAxis: MathAxisFilter) {
    const p = new URLSearchParams();
    if (nextFilter !== "all") {
      if (nextFilter === "francais") {
        p.set("fil", "francais");
      } else {
        p.set("fil", "math_elem");
        if (
          nextFilter === "math_elem" &&
          nextAxis !== "all"
        ) {
          p.set("axe", nextAxis);
        }
      }
    }
    const qs = p.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname);
  }

  function setPrimaryFilter(next: LibraryFilterMode) {
    const axis = next === "math_elem" ? mathAxis : "all";
    const nextAxis = next === "math_elem" ? axis : "all";
    setFilter(next);
    if (next !== "math_elem") setMathAxis("all");
    pushLibraryUrl(next, next === "math_elem" ? nextAxis : "all");
  }

  function setSecondaryMathAxis(next: MathAxisFilter) {
    setMathAxis(next);
    pushLibraryUrl("math_elem", next);
  }

  const list = useMemo(() => {
    return MODULES.filter((m) => {
      if (!matchesTrackFilter(m, filter)) return false;
      if (filter === "math_elem" && !matchesMathAxis(m, mathAxis)) return false;
      const okQ =
        query.trim() === "" ||
        m.titleFr.toLowerCase().includes(query.toLowerCase()) ||
        m.summaryFr.toLowerCase().includes(query.toLowerCase());
      return okQ;
    });
  }, [filter, mathAxis, query]);

  const showMathAxes = filter === "math_elem";

  return (
    <div className="space-y-4">
      <div className="relative">
        <label htmlFor="lib-search" className="sr-only">
          Rechercher un module
        </label>
        <input
          id="lib-search"
          type="search"
          placeholder="Rechercher…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="min-h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-900 outline-none ring-teal-600/30 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
        />
      </div>

      <div className="-mx-1 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filtrer par matière">
        {FILTERS.map(({ id, label }) => {
          const active = filter === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setPrimaryFilter(id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-teal-700 text-white dark:bg-teal-600"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {showMathAxes ? (
        <div
          className="-mx-1 flex gap-2 overflow-x-auto pb-1 border-l-4 border-amber-200 pl-3 dark:border-amber-900/70"
          role="tablist"
          aria-label="Mathématiques : calculs ou géométrie"
        >
          {MATH_AXES.map(({ id, label }) => {
            const active = mathAxis === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSecondaryMathAxis(id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-amber-600 text-white dark:bg-amber-500"
                    : "bg-amber-50 text-amber-950 hover:bg-amber-100 dark:bg-amber-950/40 dark:text-amber-100 dark:hover:bg-amber-900/50"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      ) : null}

      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {list.length} module{list.length > 1 ? "s" : ""}
        {showMathAxes && mathAxis !== "all" ? (
          <>
            {" "}
            ({MATH_AXIS_LABELS[mathAxis]})
          </>
        ) : null}
      </p>

      <ul className="space-y-3">
        {list.map((m) => (
          <li key={m.slug}>
            <Link
              href={`/modules/${m.slug}`}
              className="flex min-h-[4.5rem] items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 transition-colors hover:border-teal-400 hover:bg-teal-50/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-teal-700 dark:hover:bg-teal-950/30"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-xl dark:bg-zinc-800" aria-hidden>
                {iconForModule(m)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">{m.titleFr}</p>
                <p className="mt-0.5 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {getModuleListSubtitle(m)}
                </p>
              </div>
              <span className="text-zinc-400" aria-hidden>
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { Track } from "@/lib/modules";
import { MODULES, TRACK_LABELS } from "@/lib/modules";

const FILTERS: { id: "all" | Track; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "literacy", label: "Littératie" },
  { id: "fle", label: "Français" },
  { id: "math_elem", label: "Maths" },
];

function parseTrack(s: string | null): Track | "all" | null {
  if (s === "literacy" || s === "fle" || s === "math_elem") return s;
  return null;
}

export function LibraryView() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState<"all" | Track>("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const t = parseTrack(searchParams.get("fil"));
    if (t) setFilter(t);
  }, [searchParams]);

  const list = useMemo(() => {
    return MODULES.filter((m) => {
      const okTrack = filter === "all" || m.track === filter;
      const okQ =
        query.trim() === "" ||
        m.titleFr.toLowerCase().includes(query.toLowerCase()) ||
        m.summaryFr.toLowerCase().includes(query.toLowerCase());
      return okTrack && okQ;
    });
  }, [filter, query]);

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
              onClick={() => setFilter(id)}
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

      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {list.length} module{list.length > 1 ? "s" : ""}
      </p>

      <ul className="space-y-3">
        {list.map((m) => (
          <li key={m.slug}>
            <Link
              href={`/modules/${m.slug}`}
              className="flex min-h-[4.5rem] items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 transition-colors hover:border-teal-400 hover:bg-teal-50/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-teal-700 dark:hover:bg-teal-950/30"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-xl dark:bg-zinc-800" aria-hidden>
                {m.track === "literacy" ? "🔤" : m.track === "fle" ? "💬" : "🔢"}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">{m.titleFr}</p>
                <p className="mt-0.5 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {TRACK_LABELS[m.track]} · {m.estimatedMinutes} min
                  {m.hasPdf ? " · PDF" : ""}
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

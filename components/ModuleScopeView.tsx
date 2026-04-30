"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { MathAxis, ModuleItem } from "@/lib/modules";
import {
  MODULES,
  getModuleListSubtitle,
  MATH_AXIS_LABELS,
} from "@/lib/modules";

export type MathAxisFilter = "all" | MathAxis;

const MATH_AXES: { id: MathAxisFilter; label: string }[] = [
  { id: "all", label: "Toutes" },
  { id: "calculs", label: "Calculs" },
];

function matchesScope(m: ModuleItem, scope: "francais" | "math"): boolean {
  if (scope === "francais") return m.track === "literacy" || m.track === "fle";
  return m.track === "math_elem";
}

function matchesMathAxis(m: ModuleItem, axis: MathAxisFilter): boolean {
  if (axis === "all") return true;
  if (m.track !== "math_elem") return false;
  return m.mathAxis === axis;
}

function parseAxisFromUrl(s: string | null): MathAxisFilter | null {
  if (s === "calculs") return s;
  return null;
}

type Props = { scope: "francais" | "math" };

export function ModuleScopeView({ scope }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = scope === "francais" ? "/francais" : "/mathematiques";

  const [mathAxis, setMathAxis] = useState<MathAxisFilter>("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (scope !== "math") return;
    const ax = parseAxisFromUrl(searchParams.get("axe"));
    setMathAxis(ax ?? "all");
  }, [searchParams, scope]);

  function pushMathUrl(next: MathAxisFilter) {
    setMathAxis(next);
    const p = new URLSearchParams();
    if (next !== "all") p.set("axe", next);
    const qs = p.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname);
  }

  const list = useMemo(() => {
    return MODULES.filter((m) => {
      if (!matchesScope(m, scope)) return false;
      if (scope === "math" && !matchesMathAxis(m, mathAxis)) return false;
      const okQ =
        query.trim() === "" ||
        m.titleFr.toLowerCase().includes(query.toLowerCase()) ||
        m.summaryFr.toLowerCase().includes(query.toLowerCase());
      return okQ;
    });
  }, [scope, mathAxis, query]);

  const showMathAxes = scope === "math";

  return (
    <div className="space-y-4">
      <div className="relative">
        <label htmlFor="module-scope-search" className="sr-only">
          Rechercher un module
        </label>
        <input
          id="module-scope-search"
          type="search"
          placeholder="Rechercher…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="min-h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-900 outline-none ring-teal-600/30 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
        />
      </div>

      {showMathAxes ? (
        <div
          className="-mx-1 flex gap-2 overflow-x-auto border-l-4 border-amber-200 pb-1 pl-3 dark:border-amber-900/70"
          role="tablist"
          aria-label="Mathématiques : filtres"
        >
          {MATH_AXES.map(({ id, label }) => {
            const active = mathAxis === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => pushMathUrl(id)}
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
              className="block min-h-[4.5rem] rounded-2xl border border-zinc-200 bg-white p-4 transition-colors hover:border-teal-400 hover:bg-teal-50/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-teal-700 dark:hover:bg-teal-950/30"
            >
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">{m.titleFr}</p>
              <p className="mt-0.5 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                {getModuleListSubtitle(m)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

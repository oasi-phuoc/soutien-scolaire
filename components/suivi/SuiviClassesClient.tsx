"use client";

import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import {
  getSuiviContextAction,
  setPrimaryClassAction,
  type TeacherClassRow,
} from "@/app/actions/suivi";

export function SuiviClassesClient() {
  const [classes, setClasses] = useState<TeacherClassRow[]>([]);
  const [role, setRole] = useState<"admin" | "prof">("prof");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    void getSuiviContextAction().then((ctx) => {
      if (!ctx) { setError("Non autorisé"); return; }
      if (!ctx.hasAccess) { setError("Aucune classe affectée."); return; }
      setRole(ctx.role);
      setClasses(ctx.classes);
    });
  }, []);

  function setPrimary(classId: string) {
    startTransition(async () => {
      await setPrimaryClassAction(classId);
      const ctx = await getSuiviContextAction();
      if (ctx) setClasses(ctx.classes);
    });
  }

  if (error) {
    return <p className="rounded-xl border border-dashed border-zinc-300 p-6 text-center text-sm text-zinc-500">{error}</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Link href="/suivi/devoirs" className="rounded-xl bg-[var(--color-theme)] px-4 py-2 text-sm font-semibold text-white">
          Devoirs
        </Link>
        <Link href="/suivi/devoirs/apercu" className="rounded-xl border border-[var(--color-theme)] px-4 py-2 text-sm font-semibold text-[var(--color-theme)]">
          Suivi des devoirs
        </Link>
        <Link href="/suivi/banque-controle" className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-600 dark:border-zinc-700">
          Banque de contrôle
        </Link>
        {role === "admin" && (
          <Link href="/admin" className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-600 dark:border-zinc-700">
            Comptes
          </Link>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls) => (
          <div
            key={cls.class_id}
            className={`rounded-2xl border p-4 ${cls.is_primary ? "border-[var(--color-theme)] bg-[var(--color-theme-light)]" : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"}`}
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <Link href={`/suivi/classes/${encodeURIComponent(cls.label)}`} className="text-base font-bold text-zinc-900 hover:text-[var(--color-theme)] dark:text-zinc-50">
                {cls.label}
              </Link>
              {cls.is_primary && (
                <span className="shrink-0 rounded-full bg-[var(--color-theme)] px-2 py-0.5 text-[10px] font-bold text-white">
                  Principale
                </span>
              )}
            </div>
            <p className="text-sm text-zinc-500">{cls.student_count} élève{cls.student_count !== 1 ? "s" : ""}</p>
            {!cls.is_primary && (
              <button
                type="button"
                disabled={isPending}
                onClick={() => setPrimary(cls.class_id)}
                className="mt-3 text-xs font-semibold text-[var(--color-theme)] hover:underline disabled:opacity-50"
              >
                Définir comme classe principale
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

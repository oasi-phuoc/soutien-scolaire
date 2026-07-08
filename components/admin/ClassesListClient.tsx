"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getSchoolClassesAction, type SchoolClassRow } from "@/app/actions/classes";

export function ClassesListClient() {
  const [classes, setClasses] = useState<SchoolClassRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void getSchoolClassesAction().then((res) => {
      if (!res.ok) setError(res.error ?? "Erreur");
      else setClasses(res.classes);
    });
  }, []);

  if (error) {
    return <p className="text-sm text-red-500">{error}</p>;
  }

  if (classes.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-zinc-300 p-6 text-center text-sm text-zinc-500">
        Aucune classe enregistrée. Les classes sont créées automatiquement à partir des profils élèves.
      </p>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {classes.map((cls) => (
        <Link
          key={cls.class_id}
          href={`/admin/classes/${encodeURIComponent(cls.label)}`}
          className="rounded-2xl border border-zinc-200 bg-white p-4 transition-colors hover:border-[var(--color-theme)] dark:border-zinc-800 dark:bg-zinc-950"
        >
          <p className="text-base font-bold text-zinc-900 dark:text-zinc-50">{cls.label}</p>
          <p className="mt-1 text-sm text-zinc-500">
            {cls.student_count} élève{cls.student_count !== 1 ? "s" : ""}
          </p>
        </Link>
      ))}
    </div>
  );
}

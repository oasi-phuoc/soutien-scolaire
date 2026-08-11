"use client";

import { useEffect, useState, useTransition } from "react";
import { setStudentClasseAction } from "@/app/actions/suivi";
import {
  ELEVE_CLASSE_TYPE_OPTIONS,
  HSS_CLASSE_HINT,
  buildEleveClasse,
  parseEleveClasse,
  usesClasseReferenceField,
} from "@/lib/eleve-classe-types";
import { AppSelect } from "@/components/ui/AppSelect";

const CLASSE_NUM_OPTIONS = Array.from({ length: 20 }, (_, i) => ({
  value: String(i + 1),
  label: String(i + 1).padStart(2, "0"),
}));

const inputCls =
  "h-10 min-h-10 w-full rounded-[22px] border border-zinc-300 bg-white px-4 text-sm outline-none focus:border-[var(--color-theme)] dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50";

/**
 * Déplacer un élève de classe (filière + n° / référence).
 * Utilisé dans le suivi (infos) et la fiche admin / suivi élève.
 */
export function StudentClasseEditor({
  studentId,
  classe,
  onSaved,
  compact = false,
}: {
  studentId: string;
  classe: string | null;
  onSaved?: (newClasse: string) => void;
  /** Style plus dense (panneau suivi). */
  compact?: boolean;
}) {
  const parsed = parseEleveClasse(classe);
  const [classeType, setClasseType] = useState(parsed.classeType);
  const [classeNum, setClasseNum] = useState(parsed.classeSuffix);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [okMsg, setOkMsg] = useState<string | null>(null);

  useEffect(() => {
    const next = parseEleveClasse(classe);
    setClasseType(next.classeType);
    setClasseNum(next.classeSuffix);
  }, [classe]);

  function save() {
    setError(null);
    setOkMsg(null);
    const next = buildEleveClasse(classeType, classeNum);
    if (!next) {
      setError("Indiquez la filière et le numéro / la référence.");
      return;
    }
    if (next === (classe ?? "").trim()) {
      setOkMsg("Aucune modification.");
      return;
    }
    startTransition(async () => {
      const res = await setStudentClasseAction(studentId, next);
      if (!res.ok) {
        setError(res.reason ?? "Impossible de changer la classe.");
        return;
      }
      const saved = res.classe ?? next;
      setOkMsg(`Classe mise à jour : ${saved}`);
      onSaved?.(saved);
    });
  }

  const shell = compact
    ? "rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950"
    : "rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950";

  return (
    <div className={`${shell} ${pending ? "opacity-80" : ""}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
        Classe
      </p>
      <div className="grid grid-cols-2 gap-2">
        <AppSelect
          value={classeType}
          onChange={(v) => {
            setClasseType(v);
            setClasseNum("");
            setOkMsg(null);
          }}
          options={ELEVE_CLASSE_TYPE_OPTIONS}
          placeholder="Filière"
          emptyOption={{ value: "", label: "Filière" }}
          className="w-full"
          aria-label="Filière"
        />
        {usesClasseReferenceField(classeType) ? (
          <input
            type="text"
            placeholder="Référence"
            value={classeNum}
            onChange={(e) => {
              setClasseNum(e.target.value);
              setOkMsg(null);
            }}
            className={inputCls}
            aria-label="Référence de classe"
          />
        ) : (
          <AppSelect
            value={classeNum}
            onChange={(v) => {
              setClasseNum(v);
              setOkMsg(null);
            }}
            options={CLASSE_NUM_OPTIONS}
            placeholder="N°"
            emptyOption={{ value: "", label: "N°" }}
            className="w-full"
            aria-label="Numéro de classe"
          />
        )}
      </div>
      {usesClasseReferenceField(classeType) && (
        <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400">{HSS_CLASSE_HINT}</p>
      )}
      <button
        type="button"
        disabled={pending}
        onClick={save}
        className="mt-3 rounded-xl bg-[var(--color-theme-light)] px-3 py-2 text-sm font-semibold text-[var(--color-theme)] hover:opacity-90 disabled:opacity-60 dark:bg-[var(--color-theme)]/20 dark:text-[var(--color-theme-muted)]"
      >
        {pending ? "Enregistrement…" : "Enregistrer la classe"}
      </button>
      {error && (
        <p className="mt-2 text-xs text-red-600 dark:text-red-400">{error}</p>
      )}
      {okMsg && !error && (
        <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">{okMsg}</p>
      )}
    </div>
  );
}

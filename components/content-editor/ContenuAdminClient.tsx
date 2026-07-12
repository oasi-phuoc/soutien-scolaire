"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import {
  deleteContentOverrideAction,
  listContentOverridesAction,
  getContentEditorCapabilitiesAction,
} from "@/app/actions/content-editor";
import { removeLocalOverride, readLocalOverrides } from "@/lib/content-editor/local-store";
import type {
  ContentEditorCapabilities,
  ContentOverrideRecord,
} from "@/lib/content-editor/types";
import { useContentEditor } from "@/components/content-editor/ContentEditorProvider";

export function ContenuAdminClient() {
  const { setEditMode, refresh } = useContentEditor();
  const [records, setRecords] = useState<ContentOverrideRecord[]>([]);
  const [caps, setCaps] = useState<ContentEditorCapabilities | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function reload() {
    startTransition(async () => {
      const [list, capabilities] = await Promise.all([
        listContentOverridesAction(),
        getContentEditorCapabilitiesAction(),
      ]);
      setCaps(capabilities);
      if (!list.ok) {
        setError(list.reason ?? "Erreur");
        // fallback local
        setRecords(Object.values(readLocalOverrides()));
        return;
      }
      const local = readLocalOverrides();
      const map = new Map<string, ContentOverrideRecord>();
      for (const r of list.records) map.set(r.key, r);
      for (const r of Object.values(local)) {
        const prev = map.get(r.key);
        if (!prev || r.updatedAt >= prev.updatedAt) map.set(r.key, r);
      }
      setRecords(
        [...map.values()].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)),
      );
      setError(null);
      await refresh();
    });
  }

  useEffect(() => {
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDelete(key: string) {
    if (!confirm(`Supprimer l'override « ${key} » ?`)) return;
    startTransition(async () => {
      removeLocalOverride(key);
      const res = await deleteContentOverrideAction(key);
      if (!res.ok) setError(res.reason ?? "Suppression impossible");
      reload();
    });
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
        <h2 className="text-base font-bold text-zinc-900">Mode édition en ligne</h2>
        <p className="mt-1 text-sm text-zinc-600">
          Réservé au compte <strong>admin</strong>. Activez le mode édition, ouvrez une
          leçon (lecture, vocabulaire, grammaire, maths), modifiez le contenu, puis
          enregistrez. Les changements partent vers le navigateur
          {caps?.supabaseConfigured ? ", Supabase" : ""}
          {caps?.gitConfigured ? " et GitHub" : ""}.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setEditMode(true)}
            className="rounded-xl bg-amber-600 px-4 py-2 text-sm font-bold text-white hover:bg-amber-700"
          >
            Activer le mode édition
          </button>
          <button
            type="button"
            onClick={() => setEditMode(false)}
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700"
          >
            Quitter
          </button>
          <button
            type="button"
            disabled={pending}
            onClick={reload}
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 disabled:opacity-50"
          >
            Actualiser
          </button>
        </div>
        {caps && (
          <ul className="mt-3 space-y-1 text-xs text-zinc-500">
            <li>Édition autorisée : {caps.canEdit ? "oui" : "non"}</li>
            <li>Supabase : {caps.supabaseConfigured ? "configuré" : "absent"}</li>
            <li>
              GitHub :{" "}
              {caps.gitConfigured
                ? "configuré (CONTENT_GITHUB_TOKEN)"
                : "non configuré — ajoutez CONTENT_GITHUB_TOKEN"}
            </li>
          </ul>
        )}
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
        <h2 className="text-base font-bold text-zinc-900">
          Overrides enregistrés ({records.length})
        </h2>
        {error && <p className="mt-2 text-sm text-amber-800">{error}</p>}
        {records.length === 0 ? (
          <p className="mt-3 text-sm text-zinc-500">
            Aucune modification pour l&apos;instant. Parcourez le site en mode édition
            pour en créer.
          </p>
        ) : (
          <ul className="mt-3 divide-y divide-zinc-100">
            {records.map((r) => (
              <li
                key={r.key}
                className="flex flex-wrap items-center gap-2 py-3 text-sm"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-zinc-900">{r.label}</p>
                  <p className="truncate font-mono text-[11px] text-zinc-500">
                    {r.key}
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    {new Date(r.updatedAt).toLocaleString("fr-CH")}
                    {r.gitSha ? ` · git ${r.gitSha.slice(0, 7)}` : ""}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(r.key)}
                  className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-50"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-4 text-sm text-zinc-600">
        <p className="font-semibold text-zinc-800">Raccourcis utiles</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>
            <Link href="/lecture" className="text-[var(--color-theme)] underline">
              Lecture
            </Link>{" "}
            — phonèmes, grilles, listes de mots
          </li>
          <li>
            <Link href="/francais?tab=vocabulaire" className="text-[var(--color-theme)] underline">
              Vocabulaire
            </Link>{" "}
            — mots, articles, phrases
          </li>
          <li>
            <Link href="/francais?tab=grammaire" className="text-[var(--color-theme)] underline">
              Grammaire / conjugaison
            </Link>{" "}
            — théorie et exercices
          </li>
          <li>
            <Link href="/mathematiques" className="text-[var(--color-theme)] underline">
              Mathématiques
            </Link>{" "}
            — blocs de mise en forme et exercices
          </li>
        </ul>
      </div>
    </div>
  );
}

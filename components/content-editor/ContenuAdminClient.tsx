"use client";

import { useEffect, useState, useTransition } from "react";
import {
  deleteContentOverrideAction,
  listContentOverridesAction,
  getContentEditorCapabilitiesAction,
  probeContentSyncAction,
} from "@/app/actions/content-editor";
import { removeLocalOverride, readLocalOverrides } from "@/lib/content-editor/local-store";
import type {
  ContentEditorCapabilities,
  ContentOverrideRecord,
} from "@/lib/content-editor/types";
import { useContentEditor } from "@/components/content-editor/ContentEditorProvider";
import { CatalogManager } from "@/components/content-editor/CatalogManager";
import { ContentHubEditor } from "@/components/content-editor/ContentHubEditor";

export function ContenuAdminClient() {
  const { refresh } = useContentEditor();
  const [records, setRecords] = useState<ContentOverrideRecord[]>([]);
  const [caps, setCaps] = useState<ContentEditorCapabilities | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [syncMsg, setSyncMsg] = useState<string | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [deleteMsg, setDeleteMsg] = useState<string | null>(null);

  function reload() {
    startTransition(async () => {
      const [list, capabilities] = await Promise.all([
        listContentOverridesAction(),
        getContentEditorCapabilitiesAction(),
      ]);
      setCaps(capabilities);
      if (!list.ok) {
        setError(list.reason ?? "Erreur");
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
    if (!confirm(`Supprimer l'override « ${key} » ?\n\nCela retire aussi le fichier sur GitHub si possible.`))
      return;
    startTransition(async () => {
      setDeleteMsg(null);
      removeLocalOverride(key);
      const res = await deleteContentOverrideAction(key);
      if (!res.ok) {
        setError(res.reason ?? "Suppression impossible");
        return;
      }
      setDeleteMsg(res.message ?? "Override supprimé");
      reload();
    });
  }

  function handleProbe() {
    startTransition(async () => {
      setSyncMsg(null);
      const res = await probeContentSyncAction();
      const parts = [
        res.supabase.ok
          ? "Supabase OK"
          : `Supabase: ${res.supabase.reason ?? "échec"}`,
        res.git.ok
          ? `GitHub OK (${res.git.source} → ${res.git.repo}@${res.git.branch})`
          : `GitHub: ${res.git.reason ?? "échec"}`,
      ];
      setSyncMsg(parts.join(" · "));
      await refresh();
      reload();
    });
  }

  return (
    <>
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950 lg:hidden">
        <p className="font-semibold">Édition disponible sur ordinateur uniquement</p>
        <p className="mt-1">
          Ouvrez cette page sur un écran large (bureau) pour éditer le contenu
          sans quitter le hub, comme dans EPCAS.
        </p>
      </div>

      <div className="hidden space-y-6 lg:block">
        <ContentHubEditor />

        <button
          type="button"
          onClick={() => setShowAdvanced((v) => !v)}
          className="text-sm font-semibold text-[var(--color-theme)] underline"
        >
          {showAdvanced
            ? "Masquer catalogue et overrides"
            : "Catalogue et overrides…"}
        </button>

        {showAdvanced && (
          <>
            <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
              <h2 className="text-base font-bold text-zinc-900">
                Sync &amp; capacités
              </h2>
              <p className="mt-1 text-sm text-zinc-600">
                L&apos;édition se fait dans le hub ci-dessus (brouillon jusqu&apos;à
                Enregistrer). À l&apos;enregistrement : Supabase
                {caps?.gitConfigured ? " + GitHub" : ""}.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled={pending}
                  onClick={reload}
                  className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 disabled:opacity-50"
                >
                  Actualiser
                </button>
                <button
                  type="button"
                  disabled={pending}
                  onClick={handleProbe}
                  className="rounded-xl border border-[var(--color-theme)] px-4 py-2 text-sm font-semibold text-[var(--color-theme)] disabled:opacity-50"
                >
                  Tester la sync
                </button>
              </div>
              {caps && (
                <ul className="mt-3 space-y-1 text-xs text-zinc-500">
                  <li>Édition autorisée : {caps.canEdit ? "oui" : "non"}</li>
                  <li>
                    Supabase :{" "}
                    {caps.supabaseConfigured
                      ? caps.supabaseServiceRole
                        ? "configuré (+ service role)"
                        : "configuré (sans service role — écritures limitées)"
                      : "absent"}
                  </li>
                  <li>
                    GitHub :{" "}
                    {caps.gitConfigured
                      ? `configuré via ${caps.git?.source === "env" ? "variables d'environnement" : "réglages Supabase"} (${caps.git?.repo}@${caps.git?.branch})`
                      : "non configuré"}
                  </li>
                </ul>
              )}
              {syncMsg && (
                <p className="mt-3 text-xs font-medium text-amber-900" role="status">
                  {syncMsg}
                </p>
              )}
            </div>

            <CatalogManager />

            <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
              <h2 className="text-base font-bold text-zinc-900">
                Overrides enregistrés ({Math.min(records.length, 5)}
                {records.length > 5 ? ` / ${records.length}` : ""})
              </h2>
              <p className="mt-1 text-xs text-zinc-500">
                Les 5 plus récents. Supprimer retire aussi le fichier sur GitHub.
              </p>
              {error && <p className="mt-2 text-sm text-amber-800">{error}</p>}
              {deleteMsg && (
                <p className="mt-2 text-sm text-emerald-800" role="status">
                  {deleteMsg}
                </p>
              )}
              {records.length === 0 ? (
                <p className="mt-3 text-sm text-zinc-500">
                  Aucune modification enregistrée. Éditez une page dans le hub
                  ci-dessus, puis cliquez Enregistrer.
                </p>
              ) : (
                <ul className="mt-3 divide-y divide-zinc-100">
                  {records.slice(0, 5).map((r) => (
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
          </>
        )}
      </div>
    </>
  );
}

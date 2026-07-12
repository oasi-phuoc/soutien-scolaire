"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import {
  deleteContentOverrideAction,
  listContentOverridesAction,
  getContentEditorCapabilitiesAction,
  getContentSyncSettingsAction,
  saveContentSyncSettingsAction,
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
  const [tokenInput, setTokenInput] = useState("");
  const [repoInput, setRepoInput] = useState("oasi-phuoc/soutien-scolaire");
  const [branchInput, setBranchInput] = useState("main");
  const [envConfigured, setEnvConfigured] = useState(false);
  const [hasStoredToken, setHasStoredToken] = useState(false);
  const [tokenHint, setTokenHint] = useState<string | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  function reload() {
    startTransition(async () => {
      const [list, capabilities, syncSettings] = await Promise.all([
        listContentOverridesAction(),
        getContentEditorCapabilitiesAction(),
        getContentSyncSettingsAction(),
      ]);
      setCaps(capabilities);
      if (syncSettings.ok) {
        setEnvConfigured(syncSettings.envConfigured);
        setRepoInput(syncSettings.settings.repo);
        setBranchInput(syncSettings.settings.branch);
        setHasStoredToken(syncSettings.settings.hasToken);
        setTokenHint(syncSettings.settings.tokenHint);
      }
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
    if (!confirm(`Supprimer l'override « ${key} » ?`)) return;
    startTransition(async () => {
      removeLocalOverride(key);
      const res = await deleteContentOverrideAction(key);
      if (!res.ok) setError(res.reason ?? "Suppression impossible");
      reload();
    });
  }

  function handleSaveSync() {
    startTransition(async () => {
      setSyncMsg(null);
      const res = await saveContentSyncSettingsAction({
        githubToken: tokenInput || undefined,
        githubRepo: repoInput,
        githubBranch: branchInput,
      });
      if (!res.ok) {
        setSyncMsg(res.reason ?? "Échec");
        return;
      }
      setTokenInput("");
      setSyncMsg(res.message ?? "Enregistré");
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
          ? "Masquer catalogue, sync Git et overrides"
          : "Catalogue, sync Git et overrides…"}
      </button>

      {showAdvanced && (
        <>
      <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
        <h2 className="text-base font-bold text-zinc-900">Sync &amp; capacités</h2>
        <p className="mt-1 text-sm text-zinc-600">
          L&apos;édition se fait uniquement dans le hub ci-dessus (brouillon
          jusqu&apos;à Enregistrer). Sync
          {caps?.supabaseConfigured ? " Supabase" : ""}
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

      <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
        <h2 className="text-base font-bold text-zinc-900">Sync GitHub</h2>
        <p className="mt-1 text-sm text-zinc-600">
          À chaque <strong>Enregistrer</strong> du hub (pas avant), le contenu
          brouillon est poussé vers Supabase puis commité sur GitHub (fichier JSON
          sous{" "}
          <code className="rounded bg-zinc-100 px-1 text-xs">
            lib/curriculum/content/overrides/data/
          </code>
          ).
        </p>

        {envConfigured ? (
          <p className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
            Token détecté via <code>CONTENT_GITHUB_TOKEN</code> (Vercel / .env)
            {tokenHint ? ` ${tokenHint}` : ""}. Redeployez après ajout des variables
            sur Vercel si le statut restait « non configuré ».
          </p>
        ) : (
          <div className="mt-4 space-y-3">
            <p className="text-sm text-zinc-600">
              Collez ici le PAT GitHub (scope <strong>repo</strong>). Il est stocké dans
              Supabase (pas dans Git). Appliquez d&apos;abord la migration{" "}
              <code className="rounded bg-zinc-100 px-1 text-xs">
                20260712210000_curriculum_content_sync_settings.sql
              </code>
              .
              {hasStoredToken && tokenHint
                ? ` Token actuel enregistré ${tokenHint}.`
                : ""}
            </p>
            <label className="block text-xs font-semibold text-zinc-700">
              Token GitHub
              <input
                type="password"
                autoComplete="off"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                placeholder={hasStoredToken ? "Laisser vide pour conserver" : "ghp_…"}
                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 font-mono text-sm"
              />
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block text-xs font-semibold text-zinc-700">
                Dépôt
                <input
                  type="text"
                  value={repoInput}
                  onChange={(e) => setRepoInput(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 font-mono text-sm"
                />
              </label>
              <label className="block text-xs font-semibold text-zinc-700">
                Branche
                <input
                  type="text"
                  value={branchInput}
                  onChange={(e) => setBranchInput(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 font-mono text-sm"
                />
              </label>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                disabled={pending}
                onClick={handleSaveSync}
                className="rounded-xl bg-[var(--color-theme)] px-4 py-2 text-sm font-bold text-white disabled:opacity-50"
              >
                Enregistrer la config Git
              </button>
              {hasStoredToken && (
                <button
                  type="button"
                  disabled={pending}
                  onClick={() => {
                    startTransition(async () => {
                      const res = await saveContentSyncSettingsAction({
                        clearToken: true,
                      });
                      setSyncMsg(res.ok ? "Token Supabase effacé" : res.reason ?? "Erreur");
                      reload();
                    });
                  }}
                  className="rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 disabled:opacity-50"
                >
                  Effacer le token
                </button>
              )}
            </div>
          </div>
        )}

        <details className="mt-4 rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-600">
          <summary className="cursor-pointer font-semibold text-zinc-800">
            Variables Vercel (recommandé en production)
          </summary>
          <ol className="mt-2 list-decimal space-y-1 pl-4">
            <li>
              <code className="rounded bg-white px-1">CONTENT_GITHUB_TOKEN</code> = PAT
              avec scope <strong>repo</strong>
            </li>
            <li>
              <code className="rounded bg-white px-1">CONTENT_GITHUB_REPO</code> ={" "}
              oasi-phuoc/soutien-scolaire
            </li>
            <li>
              <code className="rounded bg-white px-1">CONTENT_GITHUB_BRANCH</code> = main
            </li>
            <li>
              Cochez <strong>Production</strong> (et Preview si besoin), puis{" "}
              <strong>Redeploy</strong>
            </li>
          </ol>
        </details>
      </div>

      <CatalogManager />

      <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
        <h2 className="text-base font-bold text-zinc-900">
          Overrides enregistrés ({records.length})
        </h2>
        {error && <p className="mt-2 text-sm text-amber-800">{error}</p>}
        {records.length === 0 ? (
          <p className="mt-3 text-sm text-zinc-500">
            Aucune modification enregistrée. Éditez une page dans le hub
            ci-dessus, puis cliquez Enregistrer.
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
        </>
      )}
      </div>
    </>
  );
}

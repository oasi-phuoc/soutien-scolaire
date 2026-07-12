"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useEditorHistory } from "@/lib/content-editor/use-editor-history";
import { useContentEditor } from "./ContentEditorProvider";

type Props = {
  contentKey: string;
  label: string;
  /** Document de base (avant override). */
  baseValue: unknown;
  /** Rendu optionnel d'un éditeur structuré ; sinon JSON. */
  children?: (args: {
    value: unknown;
    setValue: (next: unknown, history?: "debounce" | "immediate") => void;
  }) => ReactNode;
};

/**
 * Panneau d'édition générique (ép cas : edit / preview / undo / save).
 */
export function ContentEditorPanel({
  contentKey,
  label,
  baseValue,
  children,
}: Props) {
  const { editMode, getOverride, saveOverride, capabilities } =
    useContentEditor();
  const initial = getOverride(contentKey)?.payload ?? baseValue;
  const { present, setPresent, undo, redo, reset, canUndo, canRedo, historyDepth, historyLimit } =
    useEditorHistory<unknown>(initial);
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [jsonText, setJsonText] = useState(() =>
    JSON.stringify(initial, null, 2),
  );
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!editMode) return;
    const next = getOverride(contentKey)?.payload ?? baseValue;
    reset(next);
    setJsonText(JSON.stringify(next, null, 2));
    setJsonError(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reset when entering edit / key changes
  }, [editMode, contentKey]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!editMode || !open) return;
      const mod = e.metaKey || e.ctrlKey;
      if (!mod) return;
      const key = e.key.toLowerCase();
      if (key === "z" && !e.shiftKey) {
        e.preventDefault();
        undo();
      } else if (key === "y" || (key === "z" && e.shiftKey)) {
        e.preventDefault();
        redo();
      } else if (key === "s") {
        e.preventDefault();
        void handleSave();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editMode, open, undo, redo, present]);

  if (!editMode) return null;

  function applyJson() {
    try {
      const parsed = JSON.parse(jsonText) as unknown;
      setPresent(parsed, { history: "immediate" });
      setJsonError(null);
    } catch (err) {
      setJsonError(err instanceof Error ? err.message : "JSON invalide");
    }
  }

  async function handleSave() {
    setSaving(true);
    setStatus(null);
    let payload = present;
    if (!children) {
      try {
        payload = JSON.parse(jsonText) as unknown;
        setJsonError(null);
      } catch (err) {
        setJsonError(err instanceof Error ? err.message : "JSON invalide");
        setSaving(false);
        return;
      }
    }
    const result = await saveOverride({
      key: contentKey,
      payload,
      label,
      syncGit: true,
    });
    setSaving(false);
    if (!result.ok) {
      setStatus(result.reason);
      return;
    }
    const parts = [
      result.persisted.supabase ? "Supabase" : null,
      result.persisted.git ? "Git" : null,
      "local",
    ].filter(Boolean);
    setStatus(
      `Enregistré (${parts.join(" + ")})${result.message ? ` — ${result.message}` : ""}`,
    );
  }

  function handleResetBase() {
    reset(baseValue);
    setJsonText(JSON.stringify(baseValue, null, 2));
    setJsonError(null);
    setStatus("Contenu réinitialisé à la version du dépôt (non sauvegardé).");
  }

  return (
    <div className="mb-4 overflow-hidden rounded-xl border border-amber-300 bg-amber-50/80 shadow-sm">
      <div className="flex flex-wrap items-center gap-2 border-b border-amber-200 px-3 py-2">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="text-sm font-bold text-amber-950"
        >
          {open ? "▾" : "▸"} Édition — {label}
        </button>
        <div className="ml-auto flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            className={`rounded-md px-2 py-1 text-xs font-semibold ${mode === "edit" ? "bg-amber-600 text-white" : "bg-white text-zinc-700"}`}
            onClick={() => setMode("edit")}
          >
            Édition
          </button>
          <button
            type="button"
            className={`rounded-md px-2 py-1 text-xs font-semibold ${mode === "preview" ? "bg-amber-600 text-white" : "bg-white text-zinc-700"}`}
            onClick={() => {
              if (!children) applyJson();
              setMode("preview");
            }}
          >
            Aperçu JSON
          </button>
          <button
            type="button"
            disabled={!canUndo}
            onClick={undo}
            className="rounded-md bg-white px-2 py-1 text-xs font-semibold text-zinc-700 disabled:opacity-40"
            title="Ctrl+Z"
          >
            Annuler
          </button>
          <button
            type="button"
            disabled={!canRedo}
            onClick={redo}
            className="rounded-md bg-white px-2 py-1 text-xs font-semibold text-zinc-700 disabled:opacity-40"
            title="Ctrl+Y"
          >
            Rétablir
          </button>
          <span className="text-[10px] text-amber-800/80">
            {historyDepth}/{historyLimit}
          </span>
        </div>
      </div>

      {open && (
        <div className="space-y-3 p-3">
          {mode === "edit" ? (
            children ? (
              children({
                value: present,
                setValue: (next, history = "debounce") => {
                  setPresent(next, { history });
                  setJsonText(JSON.stringify(next, null, 2));
                },
              })
            ) : (
              <textarea
                value={jsonText}
                onChange={(e) => {
                  setJsonText(e.target.value);
                  try {
                    const parsed = JSON.parse(e.target.value) as unknown;
                    setPresent(parsed, { history: "debounce" });
                    setJsonError(null);
                  } catch {
                    /* keep typing */
                  }
                }}
                spellCheck={false}
                className="min-h-[220px] w-full rounded-lg border border-amber-200 bg-white p-3 font-mono text-xs text-zinc-800 outline-none focus:border-amber-500"
              />
            )
          ) : (
            <pre className="max-h-[320px] overflow-auto rounded-lg border border-amber-200 bg-white p-3 font-mono text-[11px] text-zinc-700">
              {JSON.stringify(present, null, 2)}
            </pre>
          )}

          {jsonError && (
            <p className="text-xs font-semibold text-red-700">{jsonError}</p>
          )}
          {status && (
            <p className="text-xs text-amber-900" role="status">
              {status}
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={saving}
              onClick={() => void handleSave()}
              className="rounded-lg bg-amber-700 px-4 py-2 text-sm font-bold text-white hover:bg-amber-800 disabled:opacity-60"
            >
              {saving ? "Enregistrement…" : "Enregistrer"}
            </button>
            <button
              type="button"
              onClick={handleResetBase}
              className="rounded-lg border border-amber-300 bg-white px-3 py-2 text-sm font-semibold text-amber-950"
            >
              Reprendre l&apos;original
            </button>
            <span className="self-center text-[11px] text-amber-900/70">
              Cibles : local
              {capabilities.supabaseConfigured ? " · Supabase" : ""}
              {capabilities.gitConfigured
                ? ` · GitHub (${capabilities.git?.source === "env" ? "env" : "réglages"})`
                : " · Git (non configuré)"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

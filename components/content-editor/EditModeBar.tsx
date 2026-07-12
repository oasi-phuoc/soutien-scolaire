"use client";

import Link from "next/link";
import { useContentEditor } from "./ContentEditorProvider";

/**
 * Barre flottante mode édition — visible uniquement pour l'admin
 * lorsqu'il peut éditer le contenu.
 */
export function EditModeBar() {
  const { ready, capabilities, editMode, setEditMode } = useContentEditor();

  if (!ready || !capabilities.canEdit) return null;

  return (
    <>
      <div className="h-12 shrink-0" aria-hidden />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[80] flex justify-center p-2">
        <div
          className={`pointer-events-auto flex max-w-[min(100%,42rem)] flex-wrap items-center gap-2 rounded-xl border px-3 py-2 text-sm shadow-md backdrop-blur ${
            editMode
              ? "border-amber-400/80 bg-amber-50/95 text-amber-950"
              : "border-zinc-200 bg-white/95 text-zinc-700"
          }`}
        >
          <span className="font-semibold">
            {editMode ? "Mode édition" : "Admin contenu"}
          </span>
          <button
            type="button"
            onClick={() => setEditMode(!editMode)}
            className={`rounded-lg px-3 py-1 text-xs font-bold ${
              editMode
                ? "bg-amber-600 text-white hover:bg-amber-700"
                : "bg-[var(--color-theme)] text-white hover:opacity-90"
            }`}
          >
            {editMode ? "Quitter" : "Activer"}
          </button>
          <Link
            href="/admin/contenu"
            className="rounded-lg border border-zinc-300 bg-white px-2.5 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
          >
            Gestion
          </Link>
          {editMode && (
            <span className="text-[11px] text-amber-800/90">
              Modifiez lecture, vocabulaire, grammaire ou maths sur la page, puis
              Enregistrer
              {capabilities.gitConfigured
                ? " (Git + Supabase)"
                : capabilities.supabaseConfigured
                  ? " (Supabase)"
                  : " (local)"}
              .
            </span>
          )}
        </div>
      </div>
    </>
  );
}

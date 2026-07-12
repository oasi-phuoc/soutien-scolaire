"use client";

import Link from "next/link";
import { useContentEditor } from "./ContentEditorProvider";

/**
 * Barre mode édition — sticky sous le shell bureau / en haut sur mobile.
 * Visible uniquement pour l'admin lorsqu'il peut éditer le contenu.
 */
export function EditModeBar() {
  const { ready, capabilities, editMode, setEditMode } = useContentEditor();

  if (!ready || !capabilities.canEdit) return null;

  return (
    <div
      className={[
        "z-40 border-b px-3 py-2 text-sm",
        editMode
          ? "border-[var(--color-correction)]/40 bg-[var(--color-correction-soft)] text-[var(--color-wrong-text)]"
          : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)]/95 text-[var(--color-text-primary)]",
        "sticky top-0 lg:static",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
        <span className="text-xs font-semibold">
          {editMode ? "Mode édition" : "Admin contenu"}
        </span>
        <button
          type="button"
          onClick={() => setEditMode(!editMode)}
          className={[
            "rounded-full px-3 py-1.5 text-xs font-bold",
            editMode
              ? "bg-[var(--color-wrong-text)] text-white"
              : "bg-[var(--color-theme)] text-white",
          ].join(" ")}
        >
          {editMode ? "Quitter" : "Activer"}
        </button>
        <Link
          href="/admin/contenu"
          className="rounded-full border border-[var(--color-border-default)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-text-primary)]"
        >
          Gestion
        </Link>
        {editMode && (
          <span className="text-[11px] text-[var(--color-wrong-text)]/90">
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
  );
}

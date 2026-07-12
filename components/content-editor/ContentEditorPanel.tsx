"use client";

import type { ReactNode } from "react";

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
 * Ancien panneau d'édition inline sur les pages élève.
 * Désactivé : l'édition se fait uniquement via `/admin/contenu` (hub bureau).
 */
export function ContentEditorPanel(_props: Props) {
  return null;
}

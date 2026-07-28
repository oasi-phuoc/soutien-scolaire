"use client";

import { buildA1PrintExercises } from "@/components/math/A1ModuleContent";
import type { DocumentPrintPayload } from "@/components/impressions/buildDocumentPrintPayload";

/** Construit le payload d'impression A1 pour le catalogue /impressions. */
export function A1PrintDocumentParts(submoduleId: string): DocumentPrintPayload {
  return {
    title: submoduleId,
    course: "Mathématiques",
    accentColor: "var(--color-accent-alg)",
    exercises: buildA1PrintExercises(submoduleId),
  };
}

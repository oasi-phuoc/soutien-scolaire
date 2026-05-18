"use client";

import { A1ModuleContent } from "@/components/math/A1ModuleContent";
import { GenericModuleContent } from "@/components/math/GenericModuleContent";
import { getMathModule } from "@/lib/curriculum/math-data";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";

export function MathModuleWorkspace({ moduleId }: { moduleId: string }) {
  const mod = getMathModule(moduleId);

  if (!mod) return null;

  const hasLessons = !!getLessonsForModule(moduleId);

  return (
    <div className="space-y-6">
      {mod.description ? (
        <p className="text-sm text-[var(--color-text-secondary)]">{mod.description}</p>
      ) : null}

      {moduleId === "A1" ? (
        <A1ModuleContent />
      ) : hasLessons ? (
        <GenericModuleContent moduleId={moduleId} />
      ) : (
        <p className="text-sm text-[var(--color-text-secondary)]">
          Contenu non disponible pour ce module.
        </p>
      )}
    </div>
  );
}

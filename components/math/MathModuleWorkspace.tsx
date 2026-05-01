"use client";

import { A1ModuleContent } from "@/components/math/A1ModuleContent";
import { AppCard } from "@/components/ui/AppCard";
import { getMathModule } from "@/lib/curriculum/math-data";

export function MathModuleWorkspace({ moduleId }: { moduleId: string }) {
  const mod = getMathModule(moduleId);

  if (!mod) return null;

  return (
    <div className="space-y-6">
      {mod.description ? (
        <p className="text-sm text-[var(--color-text-secondary)]">{mod.description}</p>
      ) : null}

      {moduleId === "A1" ? (
        <A1ModuleContent />
      ) : (
        <AppCard header="Sous-modules (référence)">
          <ol className="list-decimal space-y-2 pl-4 text-sm text-[var(--color-text-secondary)]">
            {mod.submodules.map((s) => (
              <li key={s.id}>
                <span className="font-medium text-[var(--color-text-primary)]">{s.code}</span> —{" "}
                {s.title}
              </li>
            ))}
          </ol>
        </AppCard>
      )}
    </div>
  );
}

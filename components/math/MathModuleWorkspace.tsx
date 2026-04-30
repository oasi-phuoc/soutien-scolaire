"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { A1ModuleContent } from "@/components/math/A1ModuleContent";
import { AppButton } from "@/components/ui/AppButton";
import { AppCard } from "@/components/ui/AppCard";
import { AppProgressBar } from "@/components/ui/AppProgressBar";
import { getMathModule, prerequisitesMet } from "@/lib/curriculum/math-data";
import {
  advanceSubmodule,
  completedPassingIds,
  createInitialProgress,
  loadProgress,
  openModuleFromList,
  saveProgress,
} from "@/lib/progress/math-progress";
import type { StoredProgressV1 } from "@/lib/curriculum/types";

export function MathModuleWorkspace({ moduleId }: { moduleId: string }) {
  const router = useRouter();
  const mod = getMathModule(moduleId);
  const [p, setP] = useState<StoredProgressV1>(createInitialProgress);

  useEffect(() => {
    setP(loadProgress());
  }, []);

  const persist = useCallback((next: StoredProgressV1) => {
    setP(next);
    saveProgress(next);
  }, []);

  if (!mod) return null;

  const prog = p.math[moduleId];
  const done = completedPassingIds(p);
  const pre = prerequisitesMet(mod, done);
  const locked = prog?.state === "locked";

  const pct = prog?.subTotal ? Math.round(((prog.subProgress ?? 0) / prog.subTotal) * 100) : 0;

  return (
    <div className="space-y-6">
      {mod.description ? (
        <p className="text-sm text-[var(--color-text-secondary)]">{mod.description}</p>
      ) : null}

      {locked ? (
        <AppCard variant="warning">
          <p className="text-sm font-medium text-[var(--color-text-primary)]">Module verrouillé</p>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            Termine d&apos;abord : {pre.ok ? "—" : pre.missing.join(", ")}.
          </p>
        </AppCard>
      ) : (
        <>
          <AppCard header="Progression des sous-modules">
            <AppProgressBar
              value={pct}
              color={
                mod.branch === "geometry" || mod.branch === "stats"
                  ? "var(--color-accent-geo)"
                  : "var(--color-accent-alg)"
              }
            />
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              {prog?.subProgress ?? 0} / {prog?.subTotal ?? mod.submodules.length} étapes parcourues (aperçu
              pédagogique).
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <AppButton
                accent="alg"
                onClick={() => persist(openModuleFromList(p, moduleId))}
                disabled={prog?.state !== "available"}
                variant="secondary"
              >
                Démarrer le module
              </AppButton>
              <AppButton
                accent="alg"
                onClick={() => persist(advanceSubmodule(p, moduleId))}
                disabled={prog?.state === "locked" || prog?.state === "completed"}
              >
                Marquer une étape suivante
              </AppButton>
              <AppButton
                variant="ghost"
                onClick={() => {
                  let next = p;
                  const total = mod.submodules.length;
                  for (let i = (prog?.subProgress ?? 0); i < total; i++) {
                    next = advanceSubmodule(next, moduleId);
                  }
                  persist(next);
                  router.push("/mathematiques");
                }}
                disabled={prog?.state === "locked" || prog?.state === "completed"}
              >
                Compléter tout (aperçu) puis retour
              </AppButton>
            </div>
          </AppCard>

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
        </>
      )}
    </div>
  );
}

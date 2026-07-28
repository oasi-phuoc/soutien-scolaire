"use client";

import dynamic from "next/dynamic";

const MathSubmoduleWorkspace = dynamic(
  () =>
    import("@/components/math/MathSubmoduleWorkspace").then(
      (m) => m.MathSubmoduleWorkspace,
    ),
  {
    loading: () => (
      <p className="py-12 text-center text-sm text-[var(--color-text-secondary)]">
        Chargement de la leçon…
      </p>
    ),
  },
);

export function MathSubmoduleWorkspaceLazy({
  submoduleId,
  moduleId,
  startAtEval,
}: {
  submoduleId: string;
  moduleId: string;
  startAtEval?: boolean;
}) {
  return (
    <MathSubmoduleWorkspace
      submoduleId={submoduleId}
      moduleId={moduleId}
      startAtEval={startAtEval}
    />
  );
}

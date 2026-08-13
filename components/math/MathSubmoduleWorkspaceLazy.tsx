"use client";

import dynamic from "next/dynamic";
import { ChargementEnCoursCard } from "@/components/ui/ChargementEnCours";

const MathSubmoduleWorkspace = dynamic(
  () =>
    import("@/components/math/MathSubmoduleWorkspace").then(
      (m) => m.MathSubmoduleWorkspace,
    ),
  {
    loading: () => <ChargementEnCoursCard title="Mathématiques" />,
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

"use client";

import { RevisionTestClient } from "./revision/RevisionTestClient";
import { A1_EXERCISES } from "./revision/RevisionExercisesA1";
import { A2_EXERCISES } from "./revision/RevisionExercisesA2";
import { A3_EXERCISES } from "./revision/RevisionExercisesA3";
import { A4_EXERCISES } from "./revision/RevisionExercisesA4";
import { A5_EXERCISES } from "./revision/RevisionExercisesA5";
import { GenericModuleContent } from "./GenericModuleContent";
import { MathSubmoduleWorkspace } from "./MathSubmoduleWorkspace";
import type { RevisionExerciseMeta } from "./revision/RevisionCommon";

const REVISION_CONFIGS: Record<string, { exercises: RevisionExerciseMeta[]; title: string }> = {
  A1: { exercises: A1_EXERCISES, title: "Nombres naturels" },
  A2: { exercises: A2_EXERCISES, title: "Addition et soustraction" },
  A3: { exercises: A3_EXERCISES, title: "Multiplication et division" },
  A4: { exercises: A4_EXERCISES, title: "Fractions" },
  A5: { exercises: A5_EXERCISES, title: "Décimaux" },
};

const WORKSPACE_REVISION_MODULES = new Set(["A7"]);

export function ModuleRevisionEval({ moduleId }: { moduleId: string }) {
  const config = REVISION_CONFIGS[moduleId];
  if (config) {
    return (
      <RevisionTestClient
        exercises={config.exercises}
        moduleId={moduleId}
        moduleCode={moduleId}
        moduleTitle={config.title}
      />
    );
  }
  if (WORKSPACE_REVISION_MODULES.has(moduleId)) {
    return <MathSubmoduleWorkspace moduleId={moduleId} directRevisionMode={true} />;
  }
  return <GenericModuleContent moduleId={moduleId} revisionMode={true} />;
}

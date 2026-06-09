"use client";
import { GenericModuleContent } from "./GenericModuleContent";
import { MathSubmoduleWorkspace } from "./MathSubmoduleWorkspace";

// A4, A5, A7 use workspace-based step types for their eval exercises
const WORKSPACE_REVISION_MODULES = new Set(["A4", "A5", "A7"]);

export function ModuleRevisionEval({ moduleId }: { moduleId: string }) {
  if (WORKSPACE_REVISION_MODULES.has(moduleId)) {
    return <MathSubmoduleWorkspace moduleId={moduleId} directRevisionMode={true} />;
  }
  return <GenericModuleContent moduleId={moduleId} revisionMode={true} />;
}

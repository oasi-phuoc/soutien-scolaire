"use client";

import { getLessonBySubmoduleId } from "@/lib/curriculum/lessons-registry";
import { mathLessonKey } from "@/lib/content-editor/keys";
import { ContentEditorPanel } from "./ContentEditorPanel";
import { MathLessonFields } from "./MathLessonFields";

/** Panneau d'édition maths réutilisable (GenericModuleContent / A1 / workspace). */
export function MathLessonEditorHost({ submoduleId }: { submoduleId?: string | null }) {
  if (!submoduleId) return null;
  const baseLesson = getLessonBySubmoduleId(submoduleId);
  if (!baseLesson) return null;
  return (
    <ContentEditorPanel
      contentKey={mathLessonKey(submoduleId)}
      label={`Maths — ${baseLesson.submoduleId}`}
      baseValue={baseLesson}
    >
      {({ value, setValue }) => (
        <MathLessonFields value={value} setValue={setValue} />
      )}
    </ContentEditorPanel>
  );
}

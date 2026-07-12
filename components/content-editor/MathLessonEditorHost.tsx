"use client";

import { getLessonBySubmoduleId } from "@/lib/curriculum/lessons-registry";
import { mathLessonKey } from "@/lib/content-editor/keys";
import { useContentEditor } from "./ContentEditorProvider";
import { ContentEditorPanel } from "./ContentEditorPanel";
import { MathLessonFields } from "./MathLessonFields";
import type { MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";

const EMPTY_LESSON = (submoduleId: string): MathSubmoduleLesson => ({
  submoduleId,
  submoduleCode: submoduleId.replace(/-/g, "."),
  theory: {
    title: { fr: submoduleId },
    paragraphs: { fr: [""] },
    blocks: [{ type: "plain", fr: "" }],
  },
  exercises: [],
});

/** Panneau d'édition maths réutilisable (GenericModuleContent / A1 / workspace). */
export function MathLessonEditorHost({ submoduleId }: { submoduleId?: string | null }) {
  const { getOverride } = useContentEditor();
  if (!submoduleId) return null;
  const baseLesson =
    getLessonBySubmoduleId(submoduleId) ??
    (getOverride(mathLessonKey(submoduleId))?.payload as MathSubmoduleLesson | undefined) ??
    EMPTY_LESSON(submoduleId);
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

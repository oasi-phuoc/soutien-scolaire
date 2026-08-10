import type { MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";
import type { TheoryPrintMeta, TheoryTableMeta } from "@/lib/print/theory-print-options";
import { equalColWidths, truncateDropdownLabel } from "@/lib/print/theory-print-options";

export type IndexedMathBlock = MathRichBlock & { id: string };

export function flattenMathTheoryBlocks(lesson: MathSubmoduleLesson): IndexedMathBlock[] {
  const out: IndexedMathBlock[] = [];
  let i = 0;
  const push = (block: MathRichBlock) => {
    out.push({ ...block, id: `m${i++}` });
  };
  push({ type: "heading", fr: lesson.theory.title.fr, black: true });
  for (const block of lesson.theory.blocks ?? []) push(block);
  return out;
}

function mathLabel(block: MathRichBlock, index: number): string {
  const raw =
    "fr" in block && typeof block.fr === "string"
      ? block.fr
      : "titleFr" in block && typeof block.titleFr === "string"
        ? block.titleFr
        : `Bloc ${index + 1}`;
  return raw.replace(/\*\*/g, "").trim() || `Bloc ${index + 1}`;
}

export function extractMathTheoryMeta(lesson: MathSubmoduleLesson): TheoryPrintMeta {
  const blocks = flattenMathTheoryBlocks(lesson);
  const tables: TheoryTableMeta[] = [];
  for (const block of blocks) {
    if (block.type === "table") {
      const columnCount = Math.max(1, block.headersFr.length);
      tables.push({
        id: block.id,
        kind: "math_table",
        label: truncateDropdownLabel(block.headersFr.filter(Boolean).join(" · ") || "Tableau"),
        columnCount,
        defaultColWidths: equalColWidths(columnCount),
      });
    }
  }
  const breakTargets = [
    ...blocks
      .filter((b) => b.type === "heading" || b.type === "plain")
      .map((b, i) => ({
        id: b.id,
        label: truncateDropdownLabel(mathLabel(b, i)),
      })),
    ...tables.map((t) => ({
      id: t.id,
      label: truncateDropdownLabel(`Tableau : ${t.label}`),
    })),
  ];
  return { breakTargets, tables };
}

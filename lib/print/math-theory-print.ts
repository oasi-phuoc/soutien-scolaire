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
  const breakTargets: TheoryPrintMeta["breakTargets"] = [];
  blocks.forEach((block, i) => {
    if (block.type === "table") {
      const columnCount = Math.max(1, block.headersFr.length);
      const tableLabel = truncateDropdownLabel(block.headersFr.filter(Boolean).join(" · ") || "Tableau");
      tables.push({
        id: block.id,
        kind: "math_table",
        label: tableLabel,
        columnCount,
        defaultColWidths: equalColWidths(columnCount),
      });
      breakTargets.push({
        id: block.id,
        label: truncateDropdownLabel(`Tableau : ${tableLabel}`),
      });
      return;
    }
    if (block.type === "heading") {
      breakTargets.push({
        id: block.id,
        label: truncateDropdownLabel(mathLabel(block, i)),
      });
      return;
    }
    if (block.type === "plain" && block.fr.trim()) {
      breakTargets.push({
        id: block.id,
        label: truncateDropdownLabel(mathLabel(block, i)),
      });
    }
  });
  return { breakTargets, tables };
}

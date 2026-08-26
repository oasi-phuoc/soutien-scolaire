import type { TheoryBlock, ConjugTable } from "@/lib/curriculum/grammar-data";
import type { TheoryPrintMeta, TheoryTableMeta } from "@/lib/print/theory-print-options";
import { equalColWidths, truncateDropdownLabel } from "@/lib/print/theory-print-options";

export type IndexedTheoryBlock = TheoryBlock & { id: string };

const GRAMMAR_BREAKABLE = new Set(["heading", "text", "grid", "table", "selector"]);

function flattenTheoryBlocks(blocks: TheoryBlock[]): TheoryBlock[] {
  const out: TheoryBlock[] = [];
  for (const block of blocks) {
    if (block.type === "selector") {
      out.push(block);
      for (const tab of block.tabs) {
        out.push(...flattenTheoryBlocks(tab.content));
      }
    } else {
      out.push(block);
    }
  }
  return out;
}

export function indexGrammarTheoryBlocks(blocks: TheoryBlock[]): IndexedTheoryBlock[] {
  return flattenTheoryBlocks(blocks).map((block, i) => ({ ...block, id: `b${i}` }));
}

function blockLabel(block: TheoryBlock, index: number): string {
  if (block.type === "heading") {
    const t = block.text.trim();
    return t || `Titre ${index + 1}`;
  }
  if (block.type === "text") {
    const raw = (block.label ?? block.text ?? block.items?.[0] ?? `Texte ${index + 1}`).trim();
    const plain = raw.replace(/\{\/?[a-z]\}/gi, "").replace(/\s+/g, " ").trim();
    return plain || `Texte ${index + 1}`;
  }
  if (block.type === "grid") {
    const headers = block.headers.filter((h) => h.trim()).join(" · ");
    return headers ? `Tableau : ${headers}` : `Tableau ${index + 1}`;
  }
  if (block.type === "table") {
    const verbs = block.tables.map((t) => t.verb).filter(Boolean).slice(0, 4);
    const extra = block.tables.length > 4 ? "…" : "";
    return verbs.length > 0 ? `Tableau : ${verbs.join(", ")}${extra}` : `Tableau ${index + 1}`;
  }
  if (block.type === "selector") {
    const tabs = block.tabs.map((t) => t.label.trim()).filter(Boolean).slice(0, 6);
    const extra = block.tabs.length > 6 ? "…" : "";
    const prefix = block.labelPrefix?.trim();
    const body = [prefix, tabs.join(" · ")].filter(Boolean).join(" : ");
    return body ? `Sélecteur : ${body}${extra}` : `Sélecteur ${index + 1}`;
  }
  return `Bloc ${index + 1}`;
}

export function extractGrammarTheoryMeta(blocks: TheoryBlock[]): TheoryPrintMeta {
  const indexed = indexGrammarTheoryBlocks(blocks);
  const tables: TheoryTableMeta[] = [];
  for (const block of indexed) {
    if (block.type === "grid") {
      const columnCount = Math.max(1, block.headers.length);
      tables.push({
        id: block.id,
        kind: "grid",
        label: truncateDropdownLabel(
          (block.headers.filter((h) => h.trim()).join(" · ") || "Tableau").toString(),
        ),
        columnCount,
        defaultColWidths:
          block.colWidths?.length === columnCount
            ? [...block.colWidths]
            : equalColWidths(columnCount),
      });
    } else if (block.type === "table" && block.tables.length > 0) {
      const verbCount = block.tables.length;
      const verbsPerTable = Math.min(4, Math.max(1, verbCount));
      const columnCount = verbsPerTable + 1;
      tables.push({
        id: block.id,
        kind: "conjug",
        label: truncateDropdownLabel(
          block.tables.map((t) => t.verb).slice(0, 4).join(", ") + (verbCount > 4 ? "…" : ""),
        ),
        columnCount,
        defaultColWidths: equalColWidths(columnCount),
        verbCount,
      });
    }
  }

  const breakTargets = indexed
    .filter((b) => GRAMMAR_BREAKABLE.has(b.type))
    .map((b, i) => ({
      id: b.id,
      label: truncateDropdownLabel(blockLabel(b, i)),
    }));

  return { breakTargets, tables };
}

export function conjugFormCell(tbl: ConjugTable, rowIndex: number): string {
  return tbl.rows[rowIndex]?.form ?? "";
}

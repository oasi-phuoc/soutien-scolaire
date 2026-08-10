import type { TheoryBlock, VerbToggleVerb, ConjugTable } from "@/lib/curriculum/grammar-data";
import type { TheoryPrintMeta, TheoryTableMeta } from "@/lib/print/theory-print-options";
import { equalColWidths, truncateDropdownLabel } from "@/lib/print/theory-print-options";

export type IndexedTheoryBlock = TheoryBlock & { id: string };

export function indexGrammarTheoryBlocks(blocks: TheoryBlock[]): IndexedTheoryBlock[] {
  return blocks.map((block, i) => ({ ...block, id: `b${i}` }));
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
  return `Bloc ${index + 1}`;
}

export function extractGrammarTheoryMeta(blocks: TheoryBlock[]): TheoryPrintMeta {
  const indexed = indexGrammarTheoryBlocks(blocks);
  const breakTargets = indexed
    .filter((b) => b.type === "heading" || b.type === "text")
    .map((b, i) => ({
      id: b.id,
      label: truncateDropdownLabel(blockLabel(b, i)),
    }));

  const tables: TheoryTableMeta[] = [];
  for (const block of indexed) {
    if (block.type === "grid") {
      const columnCount = Math.max(1, block.headers.length);
      tables.push({
        id: block.id,
        kind: "grid",
        label: `Tableau — ${(block.headers[0] ?? "grille").toString().slice(0, 40)}`,
        columnCount,
        defaultColWidths:
          block.colWidths?.length === columnCount
            ? [...block.colWidths]
            : block.equalCols
              ? equalColWidths(columnCount)
              : equalColWidths(columnCount),
      });
    } else if (block.type === "verb_toggle") {
      const verbCount = block.verbs.length;
      const verbsPerTable = Math.min(4, Math.max(1, verbCount));
      const columnCount = verbsPerTable + 1;
      tables.push({
        id: block.id,
        kind: "verb_toggle",
        label: `Conjugaison — ${block.verbs.map((v) => v.infinitive).slice(0, 3).join(", ")}${verbCount > 3 ? "…" : ""}`,
        columnCount,
        defaultColWidths: equalColWidths(columnCount),
        verbCount,
      });
    } else if (block.type === "table" && block.tables.length > 0) {
      const verbCount = block.tables.length;
      const verbsPerTable = Math.min(4, Math.max(1, verbCount));
      const columnCount = verbsPerTable + 1;
      tables.push({
        id: block.id,
        kind: "conjug",
        label: `Conjugaison — ${block.tables.map((t) => t.verb).slice(0, 3).join(", ")}${verbCount > 3 ? "…" : ""}`,
        columnCount,
        defaultColWidths: equalColWidths(columnCount),
        verbCount,
      });
    }
  }

  return { breakTargets, tables };
}

export function conjugFormCell(tbl: ConjugTable, rowIndex: number): string {
  return tbl.rows[rowIndex]?.form ?? "";
}

export function verbToggleForm(verb: VerbToggleVerb, rowIndex: number, negation?: boolean): string {
  const row = verb.rows[rowIndex];
  if (!row) return "";
  const vowelRe = /[aeiouàâæéèêëîïôœùûüÿh]/i;
  const nePrefix = vowelRe.test((row.radical ?? verb.radical)[0] ?? verb.radical[0] ?? "")
    ? "n'"
    : "ne ";
  const refl = verb.reflexivePronouns?.[rowIndex];
  const reflPart = refl ? (refl.endsWith("'") ? refl : `${refl} `) : "";
  const radical = row.radical !== undefined ? row.radical : verb.radical;
  const body = `${reflPart}${radical ?? ""}${row.ending}`;
  if (!negation) return body.trim();
  return `${nePrefix}${body} pas`.replace(/\s+/g, " ").trim();
}

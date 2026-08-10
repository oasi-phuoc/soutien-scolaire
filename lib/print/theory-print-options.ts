/** Options d’impression pour la théorie (FR / maths). */

export type TheoryBreakTarget = {
  id: string;
  label: string;
};

export type TheoryTableMeta = {
  id: string;
  kind: "grid" | "verb_toggle" | "conjug" | "math_table";
  label: string;
  /** Nombre de colonnes de données (hors ajustement print). */
  columnCount: number;
  /** Largeurs par défaut (ex. ["20%","20%",…]). */
  defaultColWidths: string[];
  /** Nombre de verbes (verb_toggle / conjug multi). */
  verbCount?: number;
};

export type TheoryPrintMeta = {
  breakTargets: TheoryBreakTarget[];
  tables: TheoryTableMeta[];
};

export type TheoryTablePrintConfig = {
  id: string;
  columnCount: number;
  colWidths: string[];
  /** Verbes par tableau (défaut 4) — verb_toggle / conjug. */
  verbsPerTable: number;
  /** Afficher un 2e tableau pour le surplus de verbes. */
  secondTable: boolean;
};

export type TheoryPrintOptions = {
  /** Jusqu’à 3 ids de blocs heading/text : saut de page APRÈS ce bloc. */
  pageBreakAfter: [string | null, string | null, string | null];
  tables: Record<string, TheoryTablePrintConfig>;
};

export function emptyTheoryPrintOptions(): TheoryPrintOptions {
  return {
    pageBreakAfter: [null, null, null],
    tables: {},
  };
}

export function equalColWidths(n: number): string[] {
  if (n <= 0) return [];
  const pct = Math.floor(100 / n);
  const widths = Array.from({ length: n }, () => `${pct}%`);
  const used = pct * n;
  if (used < 100 && widths.length > 0) {
    widths[0] = `${pct + (100 - used)}%`;
  }
  return widths;
}

export function defaultTableConfig(meta: TheoryTableMeta): TheoryTablePrintConfig {
  const isVerbish = meta.kind === "verb_toggle" || meta.kind === "conjug";
  const verbsPerTable = isVerbish
    ? Math.min(4, Math.max(1, meta.verbCount ?? meta.columnCount - 1))
    : meta.columnCount;
  const columnCount = isVerbish ? verbsPerTable + 1 : meta.columnCount;
  const colWidths =
    meta.defaultColWidths.length === columnCount
      ? [...meta.defaultColWidths]
      : equalColWidths(columnCount);
  return {
    id: meta.id,
    columnCount,
    colWidths,
    verbsPerTable: isVerbish ? verbsPerTable : columnCount,
    secondTable: isVerbish && (meta.verbCount ?? 0) > verbsPerTable,
  };
}

export function initTheoryPrintOptions(meta: TheoryPrintMeta | undefined): TheoryPrintOptions {
  const tables: Record<string, TheoryTablePrintConfig> = {};
  for (const t of meta?.tables ?? []) {
    tables[t.id] = defaultTableConfig(t);
  }
  return {
    pageBreakAfter: [null, null, null],
    tables,
  };
}

/** Découpe les blocs en segments ; saut de page avant chaque segment sauf le 1er. */
export function splitBlocksAtBreaks<T extends { id: string }>(
  blocks: T[],
  pageBreakAfter: Array<string | null | undefined>,
): T[][] {
  const breakSet = new Set(
    pageBreakAfter.filter((id): id is string => typeof id === "string" && id.length > 0),
  );
  if (breakSet.size === 0) return [blocks];

  const segments: T[][] = [[]];
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]!;
    segments[segments.length - 1]!.push(block);
    if (breakSet.has(block.id) && i < blocks.length - 1) {
      segments.push([]);
    }
  }
  return segments.filter((s) => s.length > 0);
}

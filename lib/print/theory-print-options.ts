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
  /**
   * Verbes par sous-tableau (1 à 3 entrées).
   * Index 0 = 1er tableau, etc.
   */
  verbsPerTables: number[];
  /** Padding haut avant le(s) tableau(x), en em. */
  paddingTopEm: number;
};

export type TheoryPrintOptions = {
  /** Jusqu’à 3 ids : saut de page AVANT ce bloc titre/texte. */
  pageBreakBefore: [string | null, string | null, string | null];
  /** Espacement avant chaque titre (em). */
  headingPaddingEm: number;
  tables: Record<string, TheoryTablePrintConfig>;
};

export function emptyTheoryPrintOptions(): TheoryPrintOptions {
  return {
    pageBreakBefore: [null, null, null],
    headingPaddingEm: 1.4,
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

/** Tronque pour ~2 lignes max dans une liste déroulante. */
export function truncateDropdownLabel(text: string, maxChars = 72): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= maxChars) return t;
  return `${t.slice(0, Math.max(1, maxChars - 1))}…`;
}

export function defaultTableConfig(meta: TheoryTableMeta): TheoryTablePrintConfig {
  const isVerbish = meta.kind === "verb_toggle" || meta.kind === "conjug";
  const totalVerbs = Math.max(1, meta.verbCount ?? meta.columnCount - 1);
  const first = isVerbish ? Math.min(4, totalVerbs) : meta.columnCount;
  const columnCount = isVerbish ? first + 1 : meta.columnCount;
  const colWidths =
    meta.defaultColWidths.length === columnCount
      ? [...meta.defaultColWidths]
      : equalColWidths(columnCount);
  return {
    id: meta.id,
    columnCount,
    colWidths,
    verbsPerTables: isVerbish ? [first] : [columnCount],
    paddingTopEm: 0.8,
  };
}

export function initTheoryPrintOptions(meta: TheoryPrintMeta | undefined): TheoryPrintOptions {
  const tables: Record<string, TheoryTablePrintConfig> = {};
  for (const t of meta?.tables ?? []) {
    tables[t.id] = defaultTableConfig(t);
  }
  return {
    pageBreakBefore: [null, null, null],
    headingPaddingEm: 1.4,
    tables,
  };
}

/**
 * Découpe les blocs en segments ; saut de page AVANT chaque id sélectionné
 * (le bloc choisi démarre un nouveau segment / une nouvelle page).
 */
export function splitBlocksAtBreaks<T extends { id: string }>(
  blocks: T[],
  pageBreakBefore: Array<string | null | undefined>,
): T[][] {
  const breakSet = new Set(
    pageBreakBefore.filter((id): id is string => typeof id === "string" && id.length > 0),
  );
  if (breakSet.size === 0) return [blocks];

  const segments: T[][] = [[]];
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]!;
    if (breakSet.has(block.id) && (segments[segments.length - 1]?.length ?? 0) > 0) {
      segments.push([]);
    }
    segments[segments.length - 1]!.push(block);
  }
  return segments.filter((s) => s.length > 0);
}

/** Répartit une liste d’items selon `verbsPerTables` (max 3 sous-tableaux). */
export function chunkByCounts<T>(items: T[], counts: number[]): T[][] {
  const out: T[][] = [];
  let offset = 0;
  for (const raw of counts.slice(0, 3)) {
    const n = Math.max(0, Math.floor(raw));
    if (n <= 0 || offset >= items.length) break;
    out.push(items.slice(offset, offset + n));
    offset += n;
  }
  if (out.length === 0 && items.length > 0) {
    out.push(items.slice(0, Math.min(4, items.length)));
  }
  return out.filter((c) => c.length > 0);
}

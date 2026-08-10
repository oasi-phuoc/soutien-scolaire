"use client";

import type { CSSProperties, ReactNode } from "react";
import type { TheoryBlock } from "@/lib/curriculum/grammar-data";
import {
  conjugFormCell,
  indexGrammarTheoryBlocks,
  verbToggleForm,
  type IndexedTheoryBlock,
} from "@/lib/print/grammar-theory-print";
import type { TheoryPrintOptions, TheoryTablePrintConfig } from "@/lib/print/theory-print-options";
import { chunkByCounts, equalColWidths } from "@/lib/print/theory-print-options";

/** Markup léger {a}…{/a} pour l’impression. */
function printMarkup(text: string): ReactNode {
  const parts = text.split(/(\{[a-z]\}.*?\{\/[a-z]\})/g);
  return parts.map((part, i) => {
    const m = part.match(/^\{([a-z])\}(.*)\{\/\1\}$/);
    if (m) {
      return (
        <span key={i} className="font-semibold text-teal-700">
          {m[2]}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function tableConfig(
  options: TheoryPrintOptions | undefined,
  id: string,
  fallbackCols: number,
): TheoryTablePrintConfig {
  const existing = options?.tables[id];
  if (existing) return existing;
  const verbs = Math.max(1, fallbackCols - 1);
  return {
    id,
    columnCount: fallbackCols,
    colWidths: equalColWidths(fallbackCols),
    verbsPerTables: [verbs],
    paddingTopEm: 0.8,
    showBorders: true,
    showFill: true,
  };
}

const FILL_HEADER = "var(--color-theme)";
const FILL_ROW_ALT = "color-mix(in oklch, var(--color-theme) 14%, white)";
const BORDER_COLOR = "#111";

function cellBorderStyle(showBorders: boolean): CSSProperties | undefined {
  if (!showBorders) return undefined;
  return { border: `1px solid ${BORDER_COLOR}` };
}

/** Tableau d’impression sans titre au-dessus — options bordure / remplissage. */
function PrintDataTable({
  headers,
  rows,
  colWidths,
  paddingTopEm,
  showBorders,
  showFill,
  boldFirstCol,
  renderCell,
}: {
  headers: string[];
  rows: string[][];
  colWidths: string[];
  paddingTopEm: number;
  showBorders: boolean;
  showFill: boolean;
  boldFirstCol?: boolean;
  renderCell?: (text: string, row: number, col: number) => ReactNode;
}) {
  const cols = Math.max(headers.length, rows[0]?.length ?? 0, 1);
  const widths = colWidths.length === cols ? colWidths : equalColWidths(cols);
  const showHeader = headers.some((h) => h.trim().length > 0);

  return (
    <div style={{ paddingTop: `${paddingTopEm}em` }}>
      <table
        className="w-full"
        style={{
          tableLayout: "fixed",
          borderCollapse: showBorders ? "collapse" : undefined,
        }}
      >
        <colgroup>
          {Array.from({ length: cols }, (_, i) => (
            <col key={i} style={{ width: widths[i] }} />
          ))}
        </colgroup>
        {showHeader ? (
          <thead>
            <tr style={showFill ? { background: FILL_HEADER } : undefined}>
              {Array.from({ length: cols }, (_, hi) => (
                <th
                  key={hi}
                  className={`px-1.5 py-1 text-left text-[1em] font-bold uppercase tracking-wide ${
                    showFill ? "text-white" : "text-zinc-800"
                  }`}
                  style={cellBorderStyle(showBorders)}
                >
                  {headers[hi] ?? ""}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              style={
                showFill && ri % 2 === 1 ? { background: FILL_ROW_ALT } : undefined
              }
            >
              {Array.from({ length: cols }, (_, ci) => (
                <td
                  key={ci}
                  className={`px-1.5 py-1 text-[1em] text-zinc-900 ${
                    boldFirstCol && ci === 0 ? "font-semibold" : ""
                  }`}
                  style={cellBorderStyle(showBorders)}
                >
                  {renderCell
                    ? renderCell(row[ci] ?? "", ri, ci)
                    : (row[ci] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderVerbTogglePrint(
  block: Extract<IndexedTheoryBlock, { type: "verb_toggle" }>,
  cfg: TheoryTablePrintConfig,
) {
  const chunks = chunkByCounts(block.verbs, cfg.verbsPerTables);
  return (
    <div className="space-y-3">
      {chunks.map((chunk, ti) => {
        const pronouns = chunk[0]?.rows.map((r) => r.pronoun) ?? [];
        const headers = ["", ...chunk.map((v) => v.infinitive)];
        const rows = pronouns.map((pronoun, ri) => [
          pronoun,
          ...chunk.map((v) => verbToggleForm(v, ri, block.negation)),
        ]);
        const widths =
          ti === 0 && cfg.colWidths.length === headers.length
            ? cfg.colWidths
            : equalColWidths(headers.length);
        return (
          <PrintDataTable
            key={ti}
            headers={headers}
            rows={rows}
            colWidths={widths}
            paddingTopEm={cfg.paddingTopEm}
            showBorders={cfg.showBorders}
            showFill={cfg.showFill}
          />
        );
      })}
    </div>
  );
}

function renderConjugPrint(
  block: Extract<IndexedTheoryBlock, { type: "table" }>,
  cfg: TheoryTablePrintConfig,
) {
  const tables = block.tables;
  if (tables.length <= 1) {
    const tbl = tables[0];
    if (!tbl) return null;
    return (
      <PrintDataTable
        headers={["", tbl.verb]}
        rows={tbl.rows.map((r) => [r.pronoun, r.form])}
        colWidths={cfg.colWidths.length === 2 ? cfg.colWidths : ["30%", "70%"]}
        paddingTopEm={cfg.paddingTopEm}
        showBorders={cfg.showBorders}
        showFill={cfg.showFill}
      />
    );
  }

  const chunks = chunkByCounts(tables, cfg.verbsPerTables);
  return (
    <div className="space-y-3">
      {chunks.map((chunk, ti) => {
        const pronouns = chunk[0]?.rows.map((r) => r.pronoun) ?? [];
        const headers = ["", ...chunk.map((t) => t.verb)];
        const rows = pronouns.map((pronoun, ri) => [
          pronoun,
          ...chunk.map((t) => conjugFormCell(t, ri)),
        ]);
        const widths =
          ti === 0 && cfg.colWidths.length === headers.length
            ? cfg.colWidths
            : equalColWidths(headers.length);
        return (
          <PrintDataTable
            key={ti}
            headers={headers}
            rows={rows}
            colWidths={widths}
            paddingTopEm={cfg.paddingTopEm}
            showBorders={cfg.showBorders}
            showFill={cfg.showFill}
          />
        );
      })}
    </div>
  );
}

function renderGridPrint(
  block: Extract<IndexedTheoryBlock, { type: "grid" }>,
  cfg: TheoryTablePrintConfig,
) {
  const colCount = Math.max(1, Math.min(cfg.columnCount, block.headers.length || cfg.columnCount));
  const headers = block.headers.slice(0, colCount);
  while (headers.length < colCount) headers.push("");
  const widths =
    cfg.colWidths.length === colCount ? cfg.colWidths : equalColWidths(colCount);
  const rows = block.rows.map((row) =>
    Array.from({ length: colCount }, (_, ci) => row[ci] ?? ""),
  );

  return (
    <PrintDataTable
      headers={headers}
      rows={rows}
      colWidths={widths}
      paddingTopEm={cfg.paddingTopEm}
      showBorders={cfg.showBorders}
      showFill={cfg.showFill}
      boldFirstCol={block.boldFirstCol}
      renderCell={(text) => printMarkup(text)}
    />
  );
}

function BlockView({
  block,
  options,
  isFirst,
}: {
  block: IndexedTheoryBlock;
  options?: TheoryPrintOptions;
  isFirst?: boolean;
}) {
  const headingPad = options?.headingPaddingEm ?? 1.4;
  const justify = options?.textJustify ? ("justify" as const) : undefined;
  switch (block.type) {
    case "heading":
      return (
        <h2
          className={`font-bold text-zinc-900 ${
            block.sub ? "text-[1.15em]" : "text-[1.35em]"
          } ${block.accent ? "text-teal-700" : ""}`}
          style={{ marginTop: isFirst ? 0 : `${headingPad}em` }}
        >
          {block.text}
        </h2>
      );
    case "text":
      return (
        <div className="space-y-1.5">
          {block.label ? (
            <p className="text-[1em] font-bold text-teal-700">{block.label}</p>
          ) : null}
          {block.text ? (
            <p
              className="text-[1em] leading-relaxed text-zinc-900"
              style={{ textAlign: justify }}
            >
              {printMarkup(block.text)}
            </p>
          ) : null}
          {block.items && block.items.length > 0 ? (
            <div className="space-y-1 border-l-2 border-teal-600/40 pl-3">
              {block.items.map((item, ii) => (
                <p
                  key={ii}
                  className="text-[1em] text-zinc-900"
                  style={{ textAlign: justify }}
                >
                  {printMarkup(item)}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      );
    case "grid":
      return renderGridPrint(block, tableConfig(options, block.id, block.headers.length));
    case "verb_toggle":
      return renderVerbTogglePrint(
        block,
        tableConfig(options, block.id, Math.min(4, block.verbs.length) + 1),
      );
    case "table":
      return renderConjugPrint(
        block,
        tableConfig(options, block.id, Math.min(4, block.tables.length) + 1),
      );
    case "rule":
      return (
        <div className="space-y-1">
          <p className="text-[1em] text-zinc-900">• {printMarkup(block.text)}</p>
          {block.examples?.map((ex, ei) => (
            <p key={ei} className="pl-4 text-[1em] text-emerald-700">
              ✓ {ex.correct}
            </p>
          ))}
        </div>
      );
    case "note":
      return <p className="text-[1em] text-zinc-700">{printMarkup(block.text)}</p>;
    case "vocab":
      return (
        <div className="space-y-1">
          <p className="text-[1em] font-bold text-zinc-900">{block.title}</p>
          <ul className="list-disc pl-5">
            {block.items.map((it, ii) => (
              <li key={ii} className="text-[1em] text-zinc-900">
                {it}
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

export function GrammarTheoryPrintView({
  blocks,
  options,
}: {
  blocks: TheoryBlock[];
  options?: TheoryPrintOptions;
}) {
  const indexed = indexGrammarTheoryBlocks(blocks);
  return (
    <div className="space-y-3 text-[1em] leading-normal text-zinc-900">
      {indexed.map((block, i) => (
        <div key={block.id}>
          <BlockView block={block} options={options} isFirst={i === 0} />
        </div>
      ))}
    </div>
  );
}

export function GrammarTheoryPrintSegment({
  blocks,
  options,
}: {
  blocks: IndexedTheoryBlock[];
  options?: TheoryPrintOptions;
}) {
  return (
    <div className="space-y-3 text-[1em] leading-normal text-zinc-900">
      {blocks.map((block, i) => (
        <div key={block.id}>
          <BlockView block={block} options={options} isFirst={i === 0} />
        </div>
      ))}
    </div>
  );
}

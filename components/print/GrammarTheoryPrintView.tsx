"use client";

import type { ReactNode } from "react";
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
  };
}

/** Mise en forme type exercice : titre souligné, pas de fond coloré. */
function ExerciseLikeTable({
  title,
  pronouns,
  verbHeaders,
  cells,
  colWidths,
  paddingTopEm,
}: {
  title?: string;
  pronouns: string[];
  verbHeaders: string[];
  cells: string[][];
  colWidths: string[];
  paddingTopEm: number;
}) {
  const cols = 1 + verbHeaders.length;
  const widths = colWidths.length === cols ? colWidths : equalColWidths(cols);
  const headerLabel = title ?? (verbHeaders.join(" · ") || "—");
  return (
    <div className="print-exercise" style={{ paddingTop: `${paddingTopEm}em` }}>
      <div className="mb-1 border-b border-black pb-0.5 text-[1em] font-bold text-teal-700">
        {headerLabel}
      </div>
      <table className="w-full" style={{ tableLayout: "fixed" }}>
        <colgroup>
          {widths.map((w, i) => (
            <col key={i} style={{ width: w }} />
          ))}
        </colgroup>
        {verbHeaders.length > 1 ? (
          <thead>
            <tr>
              <th className="px-1 py-1 text-left text-[1em] font-bold text-zinc-700"> </th>
              {verbHeaders.map((h) => (
                <th key={h} className="px-1 py-1 text-left text-[1em] font-bold text-zinc-900">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {pronouns.map((pronoun, ri) => (
            <tr key={ri}>
              <td className="px-1 py-1 text-[1em] font-medium text-zinc-600">{pronoun}</td>
              {verbHeaders.map((_, vi) => (
                <td key={vi} className="px-1 py-1 text-[1em] font-semibold text-zinc-900">
                  {cells[ri]?.[vi] ?? ""}
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
        const headers = chunk.map((v) => v.infinitive);
        const cells = pronouns.map((_, ri) =>
          chunk.map((v) => verbToggleForm(v, ri, block.negation)),
        );
        const widths =
          ti === 0 && cfg.colWidths.length === headers.length + 1
            ? cfg.colWidths
            : equalColWidths(headers.length + 1);
        return (
          <ExerciseLikeTable
            key={ti}
            pronouns={pronouns}
            verbHeaders={headers}
            cells={cells}
            colWidths={widths}
            paddingTopEm={cfg.paddingTopEm}
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
      <ExerciseLikeTable
        title={tbl.verb}
        pronouns={tbl.rows.map((r) => r.pronoun)}
        verbHeaders={[tbl.verb]}
        cells={tbl.rows.map((r) => [r.form])}
        colWidths={cfg.colWidths.length === 2 ? cfg.colWidths : ["30%", "70%"]}
        paddingTopEm={cfg.paddingTopEm}
      />
    );
  }

  const chunks = chunkByCounts(tables, cfg.verbsPerTables);
  return (
    <div className="space-y-3">
      {chunks.map((chunk, ti) => {
        const pronouns = chunk[0]?.rows.map((r) => r.pronoun) ?? [];
        const headers = chunk.map((t) => t.verb);
        const cells = pronouns.map((_, ri) => chunk.map((t) => conjugFormCell(t, ri)));
        const widths =
          ti === 0 && cfg.colWidths.length === headers.length + 1
            ? cfg.colWidths
            : equalColWidths(headers.length + 1);
        return (
          <ExerciseLikeTable
            key={ti}
            pronouns={pronouns}
            verbHeaders={headers}
            cells={cells}
            colWidths={widths}
            paddingTopEm={cfg.paddingTopEm}
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
  const showHeader = headers.some((h) => h.trim().length > 0);
  const title = showHeader ? headers.filter(Boolean).join(" · ") : "Tableau";

  return (
    <div className="print-exercise" style={{ paddingTop: `${cfg.paddingTopEm}em` }}>
      <div className="mb-1 border-b border-black pb-0.5 text-[1em] font-bold text-teal-700">
        {title}
      </div>
      <table className="w-full" style={{ tableLayout: "fixed" }}>
        <colgroup>
          {widths.map((w, i) => (
            <col key={i} style={{ width: w }} />
          ))}
        </colgroup>
        {showHeader ? (
          <thead>
            <tr>
              {headers.map((h, hi) => (
                <th
                  key={hi}
                  className="px-1 py-1 text-left text-[1em] font-bold uppercase tracking-wide text-zinc-800"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {block.rows.map((row, ri) => (
            <tr key={ri}>
              {Array.from({ length: colCount }, (_, ci) => (
                <td
                  key={ci}
                  className={`px-1 py-1 text-[1em] text-zinc-900 ${
                    block.boldFirstCol && ci === 0 ? "font-semibold" : ""
                  }`}
                >
                  {printMarkup(row[ci] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
            <p className="text-[1em] leading-relaxed text-zinc-900">{printMarkup(block.text)}</p>
          ) : null}
          {block.items && block.items.length > 0 ? (
            <div className="space-y-1 border-l-2 border-teal-600/40 pl-3">
              {block.items.map((item, ii) => (
                <p key={ii} className="text-[1em] text-zinc-900">
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

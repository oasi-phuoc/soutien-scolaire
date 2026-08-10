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
import { equalColWidths } from "@/lib/print/theory-print-options";

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
  return {
    id,
    columnCount: fallbackCols,
    colWidths: equalColWidths(fallbackCols),
    verbsPerTable: Math.max(1, fallbackCols - 1),
    secondTable: false,
  };
}

function MultiVerbTable({
  pronouns,
  verbHeaders,
  cells,
  colWidths,
}: {
  pronouns: string[];
  verbHeaders: string[];
  cells: string[][]; // [row][verb]
  colWidths: string[];
}) {
  const cols = 1 + verbHeaders.length;
  const widths =
    colWidths.length === cols ? colWidths : equalColWidths(cols);
  return (
    <div className="overflow-hidden rounded border border-zinc-300">
      <table className="w-full" style={{ tableLayout: "fixed" }}>
        <colgroup>
          {widths.map((w, i) => (
            <col key={i} style={{ width: w }} />
          ))}
        </colgroup>
        <thead>
          <tr className="bg-teal-50">
            <th className="px-2 py-1.5 text-left text-[1em] font-bold uppercase tracking-wide text-teal-700">
              —
            </th>
            {verbHeaders.map((h) => (
              <th
                key={h}
                className="px-2 py-1.5 text-left text-[1em] font-bold text-teal-700"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pronouns.map((pronoun, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
              <td className="px-2 py-1.5 text-[1em] font-medium text-zinc-600">{pronoun}</td>
              {verbHeaders.map((_, vi) => (
                <td key={vi} className="px-2 py-1.5 text-[1em] font-semibold text-zinc-900">
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
  const verbs = block.verbs;
  const per = Math.max(1, cfg.verbsPerTable || 4);
  const chunks =
    cfg.secondTable && verbs.length > per
      ? [verbs.slice(0, per), verbs.slice(per)]
      : [verbs.slice(0, cfg.secondTable ? per : verbs.length)];

  // Si un seul tableau demandé : limiter à `per` verbes (ou tous si secondTable off et on élargit)
  const tablesToRender =
    cfg.secondTable
      ? chunks.filter((c) => c.length > 0)
      : [verbs.slice(0, Math.min(verbs.length, Math.max(per, cfg.columnCount - 1)))];

  return (
    <div className="space-y-3">
      {tablesToRender.map((chunk, ti) => {
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
          <MultiVerbTable
            key={ti}
            pronouns={pronouns}
            verbHeaders={headers}
            cells={cells}
            colWidths={widths}
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
      <div className="overflow-hidden rounded border border-zinc-300">
        <div className="border-b border-zinc-200 bg-teal-50 px-2 py-1.5 text-[1em] font-bold uppercase tracking-wide text-teal-700">
          {tbl.verb}
        </div>
        <table className="w-full">
          <tbody>
            {tbl.rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                <td className="w-[30%] px-2 py-1.5 text-[1em] font-medium text-zinc-600">
                  {row.pronoun}
                </td>
                <td className="px-2 py-1.5 text-[1em] font-semibold text-zinc-900">{row.form}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const per = Math.max(1, cfg.verbsPerTable || 4);
  const chunks =
    cfg.secondTable && tables.length > per
      ? [tables.slice(0, per), tables.slice(per)]
      : [tables.slice(0, cfg.secondTable ? per : tables.length)];

  const tablesToRender =
    cfg.secondTable
      ? chunks.filter((c) => c.length > 0)
      : [tables.slice(0, Math.min(tables.length, Math.max(per, cfg.columnCount - 1)))];

  return (
    <div className="space-y-3">
      {tablesToRender.map((chunk, ti) => {
        const pronouns = chunk[0]?.rows.map((r) => r.pronoun) ?? [];
        const headers = chunk.map((t) => t.verb);
        const cells = pronouns.map((_, ri) => chunk.map((t) => conjugFormCell(t, ri)));
        const widths =
          ti === 0 && cfg.colWidths.length === headers.length + 1
            ? cfg.colWidths
            : equalColWidths(headers.length + 1);
        return (
          <MultiVerbTable
            key={ti}
            pronouns={pronouns}
            verbHeaders={headers}
            cells={cells}
            colWidths={widths}
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

  return (
    <div className="overflow-hidden rounded border border-zinc-300">
      <table className="w-full" style={{ tableLayout: "fixed" }}>
        <colgroup>
          {widths.map((w, i) => (
            <col key={i} style={{ width: w }} />
          ))}
        </colgroup>
        {showHeader ? (
          <thead>
            <tr className="bg-teal-50">
              {headers.map((h, hi) => (
                <th
                  key={hi}
                  className="px-2 py-1.5 text-left text-[1em] font-bold uppercase tracking-wide text-teal-700"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {block.rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
              {Array.from({ length: colCount }, (_, ci) => (
                <td
                  key={ci}
                  className={`px-2 py-1.5 text-[1em] text-zinc-900 ${
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
}: {
  block: IndexedTheoryBlock;
  options?: TheoryPrintOptions;
}) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          className={`font-bold text-zinc-900 ${
            block.sub ? "text-[1.15em]" : "text-[1.35em]"
          } ${block.accent ? "text-teal-700" : ""}`}
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
      // Autres blocs : rendu minimal / masqué (boutons interactifs inutiles à l’impression)
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
      {indexed.map((block) => (
        <div key={block.id}>
          <BlockView block={block} options={options} />
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
      {blocks.map((block) => (
        <div key={block.id}>
          <BlockView block={block} options={options} />
        </div>
      ))}
    </div>
  );
}

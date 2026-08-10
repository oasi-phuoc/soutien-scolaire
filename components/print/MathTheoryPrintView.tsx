"use client";

import type { ReactNode } from "react";
import type { MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";
import {
  flattenMathTheoryBlocks,
  type IndexedMathBlock,
} from "@/lib/print/math-theory-print";
import type { TheoryPrintOptions, TheoryTablePrintConfig } from "@/lib/print/theory-print-options";
import { equalColWidths } from "@/lib/print/theory-print-options";

function renderBold(text: string): ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-bold text-[var(--color-accent-alg)]">
            {p}
          </strong>
        ) : (
          p
        ),
      )}
    </>
  );
}

function renderText(text: string): ReactNode {
  const parts = text.split(/(\[\[frac:[^/\]]+\/[^\]]+\]\])/);
  if (parts.length === 1) return renderBold(text);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[\[frac:([^/\]]+)\/([^\]]+)\]\]$/);
        if (m) {
          return (
            <span
              key={i}
              className="mx-0.5 inline-flex flex-col items-center gap-0.5 align-middle leading-none"
            >
              <span className="text-[1em] font-bold text-[var(--color-accent-alg)]">{m[1]}</span>
              <span className="h-px w-full bg-[var(--color-accent-alg)]" />
              <span className="text-[1em] font-bold text-[var(--color-accent-alg)]">{m[2]}</span>
            </span>
          );
        }
        return <span key={i}>{renderBold(part)}</span>;
      })}
    </>
  );
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
    verbsPerTables: [fallbackCols],
    paddingTopEm: 0.8,
    showBorders: false,
    showFill: false,
  };
}

function BlockPrintView({
  block,
  options,
  isFirst = false,
}: {
  block: MathRichBlock & { id?: string };
  options?: TheoryPrintOptions;
  isFirst?: boolean;
}) {
  const headingPad = options?.headingPaddingEm ?? 1.4;
  switch (block.type) {
    case "heading":
      return block.black ? (
        <h3
          className="text-[1.35em] font-bold text-black"
          style={{ marginTop: isFirst ? 0 : `${headingPad}em` }}
        >
          {block.fr}
        </h3>
      ) : (
        <h3
          className="text-[1.25em] font-bold text-[var(--color-accent-alg)]"
          style={{ marginTop: isFirst ? 0 : `${headingPad}em` }}
        >
          {block.fr}
        </h3>
      );
    case "plain":
      if (!block.fr) return <div className="h-2" />;
      return (
        <p
          className="text-[1em] leading-relaxed text-black"
          style={{ textAlign: options?.textJustify ? "justify" : undefined }}
        >
          {renderText(block.fr)}
        </p>
      );
    case "note":
      return (
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-[1em] text-blue-800">
          {renderText(block.fr)}
        </div>
      );
    case "example":
      return (
        <div className="rounded-xl bg-zinc-100 px-3 py-2 font-mono text-[1em] text-black">
          {renderBold(block.fr)}
        </div>
      );
    case "highlight":
      return (
        <p className="text-[1em] font-bold text-[var(--color-accent-alg)]">{renderBold(block.fr)}</p>
      );
    case "rule":
      return (
        <div className="space-y-1 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2">
          {block.titleFr ? (
            <p className="text-[1em] font-bold text-black">{block.titleFr}</p>
          ) : null}
          <ul className="list-disc space-y-1 pl-4">
            {block.itemsFr.map((it, i) => (
              <li key={i} className="whitespace-pre-wrap text-[1em] text-zinc-700">
                {renderText(it)}
              </li>
            ))}
          </ul>
        </div>
      );
    case "table": {
      const id = block.id ?? "math-table";
      const cfg = tableConfig(options, id, block.headersFr.length);
      const colCount = Math.max(1, Math.min(cfg.columnCount, block.headersFr.length || cfg.columnCount));
      const headers = block.headersFr.slice(0, colCount);
      const widths =
        cfg.colWidths.length === colCount ? cfg.colWidths : equalColWidths(colCount);
      const borderStyle = cfg.showBorders ? { border: "1px solid #111" } : undefined;
      const fillHeader = "var(--color-theme)";
      const fillAlt = "color-mix(in oklch, var(--color-theme) 14%, white)";
      return (
        <div style={{ paddingTop: `${cfg.paddingTopEm}em` }}>
          <table
            className="w-full"
            style={{
              tableLayout: "fixed",
              borderCollapse: cfg.showBorders ? "collapse" : undefined,
            }}
          >
            <colgroup>
              {widths.map((w, i) => (
                <col key={i} style={{ width: w }} />
              ))}
            </colgroup>
            <thead>
              <tr style={cfg.showFill ? { background: fillHeader } : undefined}>
                {headers.map((h, i) => (
                  <th
                    key={i}
                    className={`px-1.5 py-1 text-center text-[1em] font-bold ${
                      cfg.showFill ? "text-white" : "text-black"
                    }`}
                    style={borderStyle}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  style={
                    cfg.showFill && ri % 2 === 1 ? { background: fillAlt } : undefined
                  }
                >
                  {Array.from({ length: colCount }, (_, ci) => (
                    <td
                      key={ci}
                      className="px-1.5 py-1 text-center text-[1em] text-black"
                      style={borderStyle}
                    >
                      {(row[ci] ?? "").split(/\n/).map((line, li) => (
                        <span key={li}>
                          {li > 0 && <br />}
                          {renderBold(line.trim())}
                        </span>
                      ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.captionFr ? (
            <p className="px-1 py-1 text-[1em] text-zinc-500">{block.captionFr}</p>
          ) : null}
        </div>
      );
    }
    case "svg":
      return block.noFrame ? (
        <div className="my-2">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {block.captionFr ? (
            <p className="mt-1 text-center text-[1em] text-zinc-500">{block.captionFr}</p>
          ) : null}
        </div>
      ) : (
        <div className="my-1 overflow-hidden rounded-xl border border-zinc-200 bg-white p-3">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {block.captionFr ? (
            <p className="mt-1 text-center text-[1em] text-zinc-500">{block.captionFr}</p>
          ) : null}
        </div>
      );
    case "section":
      return (
        <div className="space-y-1.5">
          {block.labelFr ? (
            <p className="text-[1em] font-bold text-[var(--color-accent-alg)]">
              {renderText(block.labelFr)}
            </p>
          ) : null}
          {block.itemsFr.length > 0 ? (
            <ul className="space-y-1 border-l-2 border-[var(--color-accent-alg)]/30 pl-3">
              {block.itemsFr.map((item, i) => (
                <li key={i} className="whitespace-pre-wrap text-[1em] leading-relaxed text-black">
                  {renderText(item)}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      );
    case "bullets":
      return (
        <div className="space-y-1.5">
          {block.labelFr ? (
            <p className="text-[1em] font-bold text-[var(--color-accent-alg)]">
              {renderText(block.labelFr)}
            </p>
          ) : null}
          <ul className="space-y-1 pl-1">
            {block.itemsFr.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[1em] leading-relaxed text-black">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-alg)]" />
                <span>{renderText(item ?? "")}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "svg_row":
      return (
        <div className="flex gap-3">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="flex-1 overflow-hidden rounded-xl border border-zinc-200 bg-white p-3"
            >
              <div dangerouslySetInnerHTML={{ __html: item.markup }} />
              {item.captionFr ? (
                <p className="mt-1 text-center text-[1em] text-zinc-500">{item.captionFr}</p>
              ) : null}
            </div>
          ))}
        </div>
      );
    case "theory_tabs":
      return (
        <div className="space-y-4">
          {block.tabs.map((tab, i) => (
            <div key={i} className="space-y-2">
              <p className="text-[1em] font-bold text-[var(--color-accent-alg)]">{tab.label}</p>
              {tab.blocks.map((b, j) => (
                <BlockPrintView key={j} block={b} options={options} />
              ))}
            </div>
          ))}
        </div>
      );
    case "theory_toggle":
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-[1em] font-bold text-[var(--color-accent-alg)]">{block.labelA}</p>
            {block.blocksA.map((b, j) => (
              <BlockPrintView key={`a-${j}`} block={b} options={options} />
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-[1em] font-bold text-[var(--color-accent-alg)]">{block.labelB}</p>
            {block.blocksB.map((b, j) => (
              <BlockPrintView key={`b-${j}`} block={b} options={options} />
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

/** Théorie maths pour aperçu impression (sans pivot / interactif). */
export function MathTheoryPrintView({
  lesson,
  options,
}: {
  lesson: MathSubmoduleLesson;
  options?: TheoryPrintOptions;
}) {
  const blocks = flattenMathTheoryBlocks(lesson);
  return (
    <div className="space-y-3 text-[1em] leading-normal text-black">
      {blocks.map((block, i) => (
        <div key={block.id}>
          <BlockPrintView block={block} options={options} isFirst={i === 0} />
        </div>
      ))}
    </div>
  );
}

export function MathTheoryPrintSegment({
  blocks,
  options,
}: {
  blocks: IndexedMathBlock[];
  options?: TheoryPrintOptions;
}) {
  return (
    <div className="space-y-3 text-[1em] leading-normal text-black">
      {blocks.map((block, i) => (
        <div key={block.id}>
          <BlockPrintView block={block} options={options} isFirst={i === 0} />
        </div>
      ))}
    </div>
  );
}

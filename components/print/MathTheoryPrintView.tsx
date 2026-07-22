"use client";

import type { ReactNode } from "react";
import type { MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";

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
              <span className="text-xs font-bold text-[var(--color-accent-alg)]">{m[1]}</span>
              <span className="h-px w-full bg-[var(--color-accent-alg)]" />
              <span className="text-xs font-bold text-[var(--color-accent-alg)]">{m[2]}</span>
            </span>
          );
        }
        return <span key={i}>{renderBold(part)}</span>;
      })}
    </>
  );
}

function BlockPrintView({ block }: { block: MathRichBlock }) {
  switch (block.type) {
    case "heading":
      return block.black ? (
        <h3 className="mb-1 mt-3 text-base font-bold text-black">{block.fr}</h3>
      ) : (
        <h3 className="mb-1 mt-4 text-sm font-bold text-[var(--color-accent-alg)]">{block.fr}</h3>
      );
    case "plain":
      if (!block.fr) return <div className="h-3" />;
      return <p className="text-sm leading-relaxed text-black">{renderText(block.fr)}</p>;
    case "note":
      return (
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-xs text-blue-800">
          {renderText(block.fr)}
        </div>
      );
    case "example":
      return (
        <div className="rounded-xl bg-zinc-100 px-4 py-3 font-mono text-xs text-black">
          {renderBold(block.fr)}
        </div>
      );
    case "highlight":
      return (
        <p className="text-sm font-bold text-[var(--color-accent-alg)]">{renderBold(block.fr)}</p>
      );
    case "rule":
      return (
        <div className="space-y-2 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
          {block.titleFr ? (
            <p className="text-xs font-bold text-black">{block.titleFr}</p>
          ) : null}
          <ul className="list-disc space-y-1 pl-4">
            {block.itemsFr.map((it, i) => (
              <li key={i} className="whitespace-pre-wrap text-xs text-zinc-700">
                {renderText(it)}
              </li>
            ))}
          </ul>
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-lg border border-zinc-200">
          <table className="w-full text-sm">
            <thead>
              <tr className={block.accentHeader ? "bg-[var(--color-accent-alg)]/15" : "bg-zinc-100"}>
                {block.headersFr.map((h, i) => (
                  <th
                    key={i}
                    className={`px-3 py-2 text-center text-xs font-bold ${
                      block.accentHeader
                        ? "uppercase tracking-wide text-[var(--color-accent-alg)]"
                        : "text-black"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-center text-sm text-black">
                      {cell.split(/\n/).map((line, li) => (
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
            <p className="px-3 py-1 text-[10px] text-zinc-500">{block.captionFr}</p>
          ) : null}
        </div>
      );
    case "svg":
      return block.noFrame ? (
        <div className="my-2">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {block.captionFr ? (
            <p className="mt-1 text-center text-[10px] text-zinc-500">{block.captionFr}</p>
          ) : null}
        </div>
      ) : (
        <div className="my-1 overflow-hidden rounded-xl border border-zinc-200 bg-white p-3">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {block.captionFr ? (
            <p className="mt-1 text-center text-[10px] text-zinc-500">{block.captionFr}</p>
          ) : null}
        </div>
      );
    case "section":
      return (
        <div className="space-y-1.5">
          {block.labelFr ? (
            <p className="text-sm font-bold text-[var(--color-accent-alg)]">
              {renderText(block.labelFr)}
            </p>
          ) : null}
          {block.itemsFr.length > 0 ? (
            <ul className="space-y-1 border-l-2 border-[var(--color-accent-alg)]/30 pl-3">
              {block.itemsFr.map((item, i) => (
                <li key={i} className="whitespace-pre-wrap text-sm leading-relaxed text-black">
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
            <p className="text-sm font-bold text-[var(--color-accent-alg)]">
              {renderText(block.labelFr)}
            </p>
          ) : null}
          <ul className="space-y-1 pl-1">
            {block.itemsFr.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-black">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-alg)]" />
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
                <p className="mt-1 text-center text-[10px] text-zinc-500">{item.captionFr}</p>
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
              <p className="text-sm font-bold text-[var(--color-accent-alg)]">{tab.label}</p>
              {tab.blocks.map((b, j) => (
                <BlockPrintView key={j} block={b} />
              ))}
            </div>
          ))}
        </div>
      );
    case "theory_toggle":
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-bold text-[var(--color-accent-alg)]">{block.labelA}</p>
            {block.blocksA.map((b, j) => (
              <BlockPrintView key={`a-${j}`} block={b} />
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-sm font-bold text-[var(--color-accent-alg)]">{block.labelB}</p>
            {block.blocksB.map((b, j) => (
              <BlockPrintView key={`b-${j}`} block={b} />
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

/** Théorie maths pour aperçu impression (sans pivot / interactif). */
export function MathTheoryPrintView({ lesson }: { lesson: MathSubmoduleLesson }) {
  const { theory } = lesson;
  return (
    <div className="space-y-3 leading-relaxed text-black">
      <h2 className="text-base font-bold">{theory.title.fr}</h2>
      {theory.blocks && theory.blocks.length > 0 ? (
        theory.blocks.map((block, i) => <BlockPrintView key={i} block={block} />)
      ) : (
        theory.paragraphs.fr.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed">
            {renderBold(p)}
          </p>
        ))
      )}
    </div>
  );
}

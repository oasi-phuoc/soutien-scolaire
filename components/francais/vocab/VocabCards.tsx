"use client";
import { useEffect, Fragment } from "react";
import type { VocabTheme, VocabTheoryBlock } from "@/lib/curriculum/vocabulary-data";
import { playWord, SoundIcon } from "./vocabUtils";

function TheoryBlock({ block }: { block: VocabTheoryBlock }) {
  if (block.type === "table") {
    return (
      <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[var(--color-accent-fr)]/10">
              {block.headers.map((h) => (
                <th key={h} className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-[var(--color-accent-fr)]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-[var(--color-bg-secondary)]" : ""}>
                {row.map((cell, j) => (
                  <td key={j} className={`px-3 py-2 text-[var(--color-text-primary)] ${j === 0 ? "font-semibold" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (block.type === "section") {
    return (
      <div>
        {block.title && (
          <p className="mb-2 text-xs font-bold text-[var(--color-accent-fr)]">{block.title}</p>
        )}
        <ul className="space-y-1 border-l-2 border-[var(--color-accent-fr)]/40 pl-3">
          {block.items.map((item, i) => (
            <li key={i} className="text-sm text-[var(--color-text-primary)]">{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  if (block.type === "note") {
    return (
      <div className="rounded-[var(--radius-lg)] border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-800/40 dark:bg-amber-900/10">
        <p className="text-xs text-amber-700 dark:text-amber-400">{block.text}</p>
      </div>
    );
  }
  return null;
}

interface Props {
  theme: VocabTheme;
  onCanValidateChange: (can: boolean) => void;
}

export function VocabCards({ theme, onCanValidateChange }: Props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(false); }, []);

  return (
    <div>
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[var(--color-accent-fr)]">
        {theme.code} — {theme.title}
      </p>
      <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
        {theme.words.length} mots à apprendre
      </p>
      <div className="grid grid-cols-3 gap-3">
        {theme.words.map((w) => (
          <div
            key={w.word}
            className="flex flex-col items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3"
          >
            {w.image ? (
              <img src={w.image} alt={w.word} className="h-14 w-full rounded object-cover" />
            ) : (
              <div className="h-14 w-full rounded bg-[var(--color-bg-secondary)]" aria-hidden />
            )}
            <p className="text-center text-sm font-bold leading-tight text-[var(--color-text-primary)]">
              {w.article && (
                <span className="mr-0.5 font-normal text-[var(--color-text-secondary)]">
                  {w.article}
                </span>
              )}
              {w.word}
            </p>
            <button
              type="button"
              onClick={() => playWord(w)}
              className="flex h-6 w-6 items-center justify-center rounded-full text-[var(--color-accent-fr)] transition-colors hover:bg-[var(--color-accent-fr)]/10 active:scale-90"
              aria-label={`Écouter ${w.word}`}
            >
              <SoundIcon />
            </button>
          </div>
        ))}
      </div>

      {theme.theory && theme.theory.length > 0 && (
        <div className="mt-6 space-y-4">
          <p className="text-sm font-bold text-[var(--color-accent-fr)]">Théorie</p>
          {theme.theory.map((block, i) => (
            <Fragment key={i}>
              <TheoryBlock block={block} />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

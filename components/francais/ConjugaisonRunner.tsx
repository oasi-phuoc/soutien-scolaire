"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type {
  TheoryBlock,
  VerbToggleVerb,
  Exercise,
  QcmItem,
  FillItem,
  MatchPair,
} from "@/lib/curriculum/conjugation-data";
import { usePivotLang } from "@/components/math/usePivotLang";
import { markFrenchLessonComplete } from "@/lib/progress/french-progress";
import { useTranslation } from "@/components/TranslationProvider";

// ── Props ─────────────────────────────────────────────────────────────────────

export interface LessonLike {
  slug: string;
  code: string;
  level: string;
  title: string;
  theory: TheoryBlock[];
  theory2?: TheoryBlock[];
  midExercises?: Exercise[];
  exercises: Exercise[];
}

interface Props {
  lesson: LessonLike;
  subject?: string;
}

// ── Theory view ───────────────────────────────────────────────────────────────

function renderArrow(text: string) {
  const parts = text.split(" → ");
  if (parts.length <= 1) return <>{text}</>;
  return (
    <>
      {parts.map((part, i) =>
        i === 0 ? (
          <span key={i}>{part}</span>
        ) : (
          <span key={i}>
            <br />
            → {part}
          </span>
        ),
      )}
    </>
  );
}

function renderInlineMarkup(text: string, useArrow = true): React.ReactNode {
  const parts = text.split(/(\{(?:su|ve|co|a|b|s)\}[\s\S]*?\{\/(?:su|ve|co|a|b|s)\})/);
  if (parts.length === 1) return useArrow ? renderArrow(text) : <>{text}</>;
  return (
    <>
      {parts.map((part, i) => {
        const accentMatch = part.match(/^\{a\}([\s\S]*?)\{\/a\}$/);
        const strikeMatch = part.match(/^\{s\}([\s\S]*?)\{\/s\}$/);
        const boldMatch   = part.match(/^\{b\}([\s\S]*?)\{\/b\}$/);
        const sujetMatch  = part.match(/^\{su\}([\s\S]*?)\{\/su\}$/);
        const verbeMatch  = part.match(/^\{ve\}([\s\S]*?)\{\/ve\}$/);
        const compMatch   = part.match(/^\{co\}([\s\S]*?)\{\/co\}$/);
        if (accentMatch) return <span key={i} className="font-semibold text-[var(--color-accent-fr)]">{accentMatch[1]}</span>;
        if (strikeMatch) return <span key={i} className="font-semibold line-through text-[var(--color-accent-fr)]">{strikeMatch[1]}</span>;
        if (boldMatch)   return <span key={i} className="font-semibold">{boldMatch[1]}</span>;
        if (sujetMatch)  return <span key={i} className="font-bold underline decoration-yellow-400 decoration-[3px] underline-offset-2">{sujetMatch[1]}</span>;
        if (verbeMatch)  return <span key={i} className="font-bold underline decoration-red-500 decoration-[3px] underline-offset-2">{verbeMatch[1]}</span>;
        if (compMatch)   return <span key={i} className="font-bold underline decoration-green-500 decoration-[3px] underline-offset-2">{compMatch[1]}</span>;
        return <React.Fragment key={i}>{useArrow ? renderArrow(part) : part}</React.Fragment>;
      })}
    </>
  );
}

function renderPronounCell(text: string) {
  const idx = text.indexOf(" → ");
  if (idx === -1) return <span className="font-bold text-[var(--color-accent-fr)]">{text}</span>;
  const pronoun = text.slice(0, idx);
  const rest = text.slice(idx + 3);
  return (
    <>
      <span className="font-bold text-[var(--color-accent-fr)]">{pronoun}</span>
      <br />
      <span className="text-[var(--color-text-secondary)]">{rest}</span>
    </>
  );
}

// ── Analog clock SVG ─────────────────────────────────────────────────────────

function AnalogClock({ h, m, size = 90 }: { h: number; m: number; size?: number }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.44;
  const hourDeg = ((h % 12) + m / 60) * 30;
  const minuteDeg = m * 6;
  function toXY(deg: number, len: number) {
    const rad = (deg - 90) * (Math.PI / 180);
    return { x: cx + len * Math.cos(rad), y: cy + len * Math.sin(rad) };
  }
  const hourEnd = toXY(hourDeg, r * 0.55);
  const minuteEnd = toXY(minuteDeg, r * 0.82);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="var(--color-bg-primary)" stroke="var(--color-border-emphasis)" strokeWidth="1.5" />
      {Array.from({ length: 12 }, (_, i) => {
        const outer = toXY(i * 30, r);
        const inner = toXY(i * 30, r * (i % 3 === 0 ? 0.8 : 0.88));
        return <line key={i} x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y} stroke="var(--color-text-secondary)" strokeWidth={i % 3 === 0 ? 2 : 1} />;
      })}
      <line x1={cx} y1={cy} x2={hourEnd.x} y2={hourEnd.y} stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={minuteEnd.x} y2={minuteEnd.y} stroke="var(--color-accent-fr)" strokeWidth="2" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="2.5" fill="var(--color-text-primary)" />
    </svg>
  );
}

// ── Verb toggle (G.5 interactive conjugation table) ───────────────────────────

function VerbToggleView({ verbs, negation, buttonCols }: { verbs: VerbToggleVerb[]; negation?: boolean; buttonCols?: number }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const verb = verbs[selectedIdx]!;
  const vowelRe = /[aeiouàâæéèêëîïôœùûüÿh]/i;

  const nePrefix = vowelRe.test(verb.radical[0] ?? "") ? "n'" : "ne ";

  return (
    <div className="space-y-3">
      <div
        className={buttonCols ? "grid gap-2" : "flex flex-wrap gap-2"}
        style={buttonCols ? { gridTemplateColumns: `repeat(${buttonCols}, 1fr)` } : undefined}
      >
        {verbs.map((v, i) => (
          <button
            key={i}
            onClick={() => setSelectedIdx(i)}
            className={`rounded-full px-3 py-1.5 font-medium transition-colors ${buttonCols ? "text-xs" : "text-sm"} ${
              i === selectedIdx
                ? "bg-[var(--color-accent-fr)] text-white"
                : "border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-fr)]"
            }`}
          >
            {v.infinitive}
          </button>
        ))}
      </div>
      {(verb.meaning || verb.example) && (
        <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] px-3 py-2 text-xs space-y-1">
          {verb.meaning && (
            <p>
              <span className="font-bold text-[var(--color-accent-fr)]">Signification </span>
              <span className="text-[var(--color-text-primary)]">{verb.meaning}</span>
            </p>
          )}
          {verb.example && (
            <p className="text-[var(--color-text-secondary)]">• {verb.example}</p>
          )}
        </div>
      )}
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[var(--color-accent-fr)]/15">
              <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-[var(--color-accent-fr)]">
                {verb.infinitive}
              </th>
              <th className="px-3 py-2 text-left text-xs font-bold text-[var(--color-accent-fr)]">
                {negation ? <><span className="font-bold">{nePrefix}</span>… <span className="font-bold">pas</span></> : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            {verb.rows.map((row, ri) => (
              <tr
                key={ri}
                className={ri % 2 === 0 ? "bg-[var(--color-bg-primary)]" : "bg-[var(--color-bg-secondary)]"}
              >
                <td className="w-36 px-3 py-2">
                  <span className="text-[var(--color-text-secondary)]">{row.pronoun}</span>
                </td>
                <td className="px-3 py-2">
                  {negation && (
                    <span className="font-bold text-[var(--color-accent-fr)]">{nePrefix}</span>
                  )}
                  {verb.reflexivePronouns?.[ri] !== undefined && (
                    negation
                      ? <span className="text-[var(--color-text-primary)]">{verb.reflexivePronouns[ri]}{verb.reflexivePronouns[ri]!.endsWith("'") ? "" : " "}</span>
                      : <span className="font-bold text-[var(--color-accent-fr)]">{verb.reflexivePronouns[ri]}{verb.reflexivePronouns[ri]!.endsWith("'") ? "" : " "}</span>
                  )}
                  {verb.radical && <span className="text-[var(--color-text-primary)]">{verb.radical}</span>}
                  {negation
                    ? <span className="text-[var(--color-text-primary)]">{row.ending}</span>
                    : <span className="font-bold text-[var(--color-accent-fr)]">{row.ending}</span>
                  }
                  {negation && (
                    <span className="font-bold text-[var(--color-accent-fr)]"> pas</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TheoryView({ blocks, pivot, showTrans }: { blocks: TheoryBlock[]; pivot: string; showTrans: boolean }) {
  const isRtl = pivot === "ar" || pivot === "fa";

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <div key={i} className={block.trans?.[pivot as keyof typeof block.trans] ? "space-y-0.5" : ""}>
                <h2 className={`font-bold ${block.sub ? "text-base" : "text-lg"} ${block.accent ? "text-[var(--color-accent-fr)]" : "text-[var(--color-text-primary)]"}`}>
                  {block.text}
                </h2>
                {showTrans && block.trans?.[pivot as keyof typeof block.trans] && (
                  <p className="text-sm text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                    {block.trans[pivot as keyof typeof block.trans]}
                  </p>
                )}
              </div>
            );

          case "table":
            return (
              <div key={i} className="space-y-3">
                {block.tables.map((tbl, ti) => (
                  <div
                    key={ti}
                    className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]"
                  >
                    <div className="border-b border-[var(--color-border-default)] bg-[var(--color-accent-fr)]/10 px-3 py-2">
                      <span className={`text-xs uppercase tracking-wide text-[var(--color-accent-fr)] ${tbl.verbBold === false ? "font-normal" : "font-bold"}`}>
                        {tbl.verb}
                      </span>
                    </div>
                    <table className="w-full text-sm">
                      <tbody>
                        {tbl.rows.map((row, ri) => (
                          <tr
                            key={ri}
                            className={
                              ri % 2 === 0
                                ? "bg-[var(--color-bg-primary)]"
                                : "bg-[var(--color-bg-secondary)]"
                            }
                          >
                            <td className="w-32 px-3 py-2 font-medium text-[var(--color-text-secondary)]">
                              {row.pronoun}
                            </td>
                            <td className={`px-3 py-2 font-semibold ${tbl.accentForms ? "text-[var(--color-accent-fr)]" : "text-[var(--color-text-primary)]"}`}>
                              {row.form}
                            </td>
                            {row.phonetic && (
                              <td className="px-3 py-2 text-xs text-[var(--color-text-secondary)]">
                                [{row.phonetic}]
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            );

          case "rule":
            return (
              <div key={i} className="space-y-2">
                <p className="flex gap-2 text-sm text-[var(--color-text-primary)]">
                  <span className="mt-0.5 shrink-0 text-[var(--color-accent-fr)]">•</span>
                  <span>{renderInlineMarkup(block.text)}</span>
                </p>
                {block.examples && block.examples.length > 0 && (
                  <div className="ml-5 space-y-1">
                    {block.examples.map((ex, ei) => (
                      <div key={ei} className="space-y-0.5">
                        <code className="block rounded bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400">
                          ✓ {ex.correct}
                        </code>
                        {ex.wrong && (
                          <code className="block rounded bg-red-50 px-2 py-1 text-xs font-medium text-red-600 line-through dark:bg-red-900/20 dark:text-red-400">
                            ✗ {ex.wrong}
                          </code>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );

          case "note":
            return (
              <div
                key={i}
                className="rounded-[var(--radius-lg)] border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-300"
              >
                <span className="mr-1.5">ℹ</span>
                {block.text}
              </div>
            );

          case "vocab":
            return (
              <div key={i} className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                  {block.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {block.items.map((item, ii) => (
                    <span
                      key={ii}
                      className="rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-3 py-1 text-xs font-medium text-[var(--color-text-primary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );

          case "grid": {
            const transH = block.transHeaders?.[pivot as keyof typeof block.transHeaders];
            const transR = block.transRows?.[pivot as keyof typeof block.transRows];
            return (
              <div key={i} className="space-y-2">
                <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
                  <table className="w-full text-sm" style={block.equalCols ? { tableLayout: "fixed" } : undefined}>
                    {block.equalCols && (
                      <colgroup>
                        {block.headers.map((_, ci) => (
                          <col key={ci} style={{ width: `${100 / block.headers.length}%` }} />
                        ))}
                      </colgroup>
                    )}
                    <thead>
                      <tr className="bg-[var(--color-accent-fr)]/15">
                        {block.headers.map((h, hi) => (
                          <th key={hi} className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-[var(--color-accent-fr)]">
                            {h}
                            {showTrans && transH?.[hi] && (
                              <span className="block text-[10px] font-normal normal-case tracking-normal text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                                {transH[hi]}
                              </span>
                            )}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, ri) => (
                        <tr key={ri} className={ri % 2 === 0 ? "bg-[var(--color-bg-primary)]" : "bg-[var(--color-bg-secondary)]/40"}>
                          {row.map((cell, ci) => {
                            const transCell = showTrans && transR ? transR[ri]?.[ci] : undefined;
                            const transText = transCell
                              ? (block.pronounGrid && transCell.includes(" → ") ? transCell.split(" → ").slice(1).join(" → ") : transCell)
                              : undefined;
                            return (
                              <td key={ci} className={`px-3 py-2 text-sm text-[var(--color-text-primary)]${block.boldFirstCol && ci === 0 ? " font-semibold" : ""}`}>
                                {block.pronounGrid ? renderPronounCell(cell) : renderInlineMarkup(cell)}
                                {transText && (
                                  <span className="block text-xs text-[var(--color-text-secondary)] mt-0.5" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                                    {transText}
                                  </span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }

          case "plain_list":
            return (
              <div key={i} className="space-y-1">
                {block.label && (
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                    {block.label}
                  </p>
                )}
                <ul className="space-y-1.5">
                  {block.items.map((item, ii) => (
                    <li key={ii} className="space-y-0.5">
                      <div className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
                        {(block.allBullets || ii > 0) && !(block.noBulletItems?.includes(ii)) && <span className="mt-0.5 shrink-0 text-[var(--color-accent-fr)]">•</span>}
                        <span>{renderInlineMarkup(item)}</span>
                      </div>
                      {showTrans && block.transItems?.[pivot as keyof typeof block.transItems]?.[ii] && (
                        <div className={`flex gap-2 text-xs leading-relaxed text-[var(--color-text-secondary)]${(block.allBullets || ii > 0) ? " ml-4" : ""}`} lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                          {(block.allBullets || ii > 0) && !(block.noBulletItems?.includes(ii)) && <span className="mt-0.5 shrink-0">•</span>}
                          <span>{renderInlineMarkup(block.transItems[pivot as keyof typeof block.transItems]![ii]!)}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );

          case "highlight": {
            const transLabel = block.transLabel?.[pivot as keyof typeof block.transLabel];
            const transItems = block.transItems?.[pivot as keyof typeof block.transItems];
            return (
              <div key={i} className="space-y-1.5">
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-[var(--color-accent-fr)]">{block.label}</p>
                  {showTrans && transLabel && (
                    <p className="text-xs font-bold text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                      {transLabel}
                    </p>
                  )}
                </div>
                <ul className="space-y-1 pl-3 border-l-2 border-[var(--color-accent-fr)]/30">
                  {block.items.map((item, ii) => {
                    const skipBullet = (block.noFirstBullet && !item.includes(" → ")) || (block.noBulletItems?.includes(ii) ?? false);
                    return (
                      <li key={ii} className="space-y-0.5">
                        <div className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
                          {!skipBullet && <span className="mt-0.5 shrink-0 text-[var(--color-accent-fr)]">•</span>}
                          <span>{renderInlineMarkup(item, !block.inlineArrows)}</span>
                        </div>
                        {showTrans && transItems?.[ii] && (
                          <div className={`flex gap-2 text-xs leading-relaxed text-[var(--color-text-secondary)]${!skipBullet ? " ml-4" : ""}`} lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                            {!skipBullet && <span className="mt-0.5 shrink-0">•</span>}
                            <span>{renderInlineMarkup(transItems[ii]!, !block.inlineArrows)}</span>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }

          case "verb_toggle":
            return (
              <div key={i}>
                <VerbToggleView verbs={block.verbs} negation={block.negation} buttonCols={block.buttonCols} />
              </div>
            );

          case "clock_display": {
            const cols = block.cols ?? 4;
            return (
              <div key={i} className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
                {block.clocks.map((clk, ci) => (
                  <div key={ci} className="flex flex-col items-center gap-1">
                    <AnalogClock h={clk.h} m={clk.m} size={80} />
                    {clk.label && (
                      <p className="text-center text-xs text-[var(--color-text-secondary)]">{clk.label}</p>
                    )}
                  </div>
                ))}
              </div>
            );
          }

          case "word_cards": {
            const cols = block.cols ?? 3;
            return (
              <div key={i} className="grid gap-3" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
                {block.items.map((word, wi) => (
                  <div key={wi} className="flex flex-col items-center gap-2">
                    <div className="flex w-full items-center justify-center rounded-lg bg-[var(--color-bg-secondary)] aspect-square">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-text-secondary)] opacity-40" aria-hidden>
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                    </div>
                    <p className="text-center text-xs font-medium text-[var(--color-text-primary)]">{word}</p>
                  </div>
                ))}
              </div>
            );
          }

          case "grammar_link":
            return (
              <a
                key={i}
                href={block.href}
                className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-accent-fr)]/30 bg-[var(--color-accent-fr)]/8 px-4 py-3 transition-colors hover:bg-[var(--color-accent-fr)]/12"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[var(--color-accent-fr)]" aria-hidden>
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                <span className="text-sm font-medium text-[var(--color-accent-fr)]">{block.text}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto shrink-0 text-[var(--color-accent-fr)]" aria-hidden>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

// ── QCM exercise ──────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

function QcmExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "qcm" }>;
  onValidated: (allCorrect: boolean) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const [items] = useState<typeof exercise.items>(() => {
    const raw = exercise.pool && exercise.pool.length > 0
      ? shuffle(exercise.pool).slice(0, exercise.poolSize ?? 5)
      : exercise.items;
    if (exercise.toggleChoices) return raw;
    return raw.map(item => {
      const indexed = item.choices.map((c, i) => ({ c, isCorrect: i === item.correctIdx }));
      const sh = shuffle(indexed);
      return { ...item, choices: sh.map(x => x.c), correctIdx: sh.findIndex(x => x.isCorrect) };
    });
  });
  const [selected, setSelected] = useState<(number | null)[]>(
    () => new Array(items.length).fill(null),
  );
  const [validated, setValidated] = useState(false);

  function select(itemIdx: number, choiceIdx: number) {
    if (validated) return;
    setSelected((prev: (number | null)[]) => {
      const next = [...prev];
      next[itemIdx] = choiceIdx;
      return next;
    });
  }

  function validate() {
    if (validated) return;
    setValidated(true);
    const allCorrect = items.every(
      (item, i) => selected[i] === item.correctIdx,
    );
    onValidated(allCorrect);
  }

  useEffect(() => {
    if (validateCommand > 0) validate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  useEffect(() => {
    onCanValidateChange(!validated);
  }, [validated, onCanValidateChange]);

  const pivot = usePivotLang();
  const { showPivot: showTrans } = useTranslation();
  const isRtl = pivot === "ar" || pivot === "fa";

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>
        {showTrans && exercise.transInstruction?.[pivot as keyof typeof exercise.transInstruction] && (
          <p className="mt-0.5 text-xs text-[var(--color-text-secondary)] opacity-70" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
            {exercise.transInstruction[pivot as keyof typeof exercise.transInstruction]}
          </p>
        )}
      </div>
      {items.map((item: QcmItem, i) => {
        const hasInlineToggle = exercise.toggleChoices && item.sentence.includes(" → ");
        const arrowPos = hasInlineToggle ? item.sentence.indexOf(" → ") : -1;
        const sentLine1 = hasInlineToggle ? item.sentence.slice(0, arrowPos) : item.sentence;
        const sentLine2 = hasInlineToggle ? item.sentence.slice(arrowPos + 3) : "";

        const mkToggleBtn = (choice: string, ci: number, fixed: boolean) => {
          const isSelected = selected[i] === ci;
          const isCorrect = ci === item.correctIdx;
          let cls = `${fixed ? "w-14 py-1.5" : exercise.inlineChoices ? "px-4 py-2" : "flex-1 py-2.5"} text-sm font-medium text-center transition-colors whitespace-nowrap `;
          if (ci > 0) cls += "border-l border-[var(--color-border-default)] ";
          if (!validated) {
            cls += isSelected
              ? "bg-[var(--color-accent-fr)]/15 text-[var(--color-accent-fr)]"
              : "bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]";
          } else {
            const userWrong = selected[i] !== item.correctIdx;
            if (isSelected && !isCorrect) {
              cls += "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400";
            } else if (!isSelected && isCorrect && userWrong) {
              cls += "bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] font-semibold";
            } else {
              cls += isSelected
                ? "bg-[var(--color-accent-fr)]/15 text-[var(--color-accent-fr)]"
                : "bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] opacity-50";
            }
          }
          return (
            <button key={ci} type="button" className={cls} onClick={() => select(i, ci)} disabled={validated}>
              {choice}
            </button>
          );
        };

        if (hasInlineToggle) {
          const inlineGroup = (
            <span className="inline-flex overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)] align-middle">
              {item.choices.map((c, ci) => mkToggleBtn(c, ci, true))}
            </span>
          );
          const line2Parts = sentLine2.split("___");
          const renderLine2 =
            line2Parts.length > 1 ? (
              <>
                {line2Parts.map((part, pi, arr) => (
                  <React.Fragment key={pi}>
                    {part}
                    {pi < arr.length - 1 && inlineGroup}
                  </React.Fragment>
                ))}
              </>
            ) : (
              <>{sentLine2} {inlineGroup}</>
            );
          return (
            <div key={i} className="space-y-1">
              <p className="text-sm font-medium text-[var(--color-text-primary)]">
                <span className="text-[var(--color-accent-fr)]">{i + 1}.</span> {sentLine1}
              </p>
              <p className="ml-4 text-sm font-medium leading-loose text-[var(--color-text-primary)]">
                → {renderLine2}
              </p>
            </div>
          );
        }

        return (
          <div key={i} className={exercise.inlineChoices ? "flex items-center gap-3" : "space-y-2"}>
            <p className={`text-sm font-medium text-[var(--color-text-primary)]${exercise.inlineChoices ? " flex-1" : ""}`}>
              <span className="text-[var(--color-accent-fr)]">{i + 1}.</span> {renderFillSentence(item.sentence)}
            </p>
            {exercise.toggleChoices ? (
              <div className="flex overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)]">
                {item.choices.map((choice, ci) => mkToggleBtn(choice, ci, false))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {item.choices.map((choice, ci) => {
                  const isSelected = selected[i] === ci;
                  const isCorrect = ci === item.correctIdx;
                  let cls =
                    "rounded-[var(--radius-md)] border px-3 py-2.5 text-center text-sm font-medium transition-colors ";
                  if (!validated) {
                    cls += isSelected
                      ? "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]"
                      : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]";
                  } else {
                    const userWrong = selected[i] !== item.correctIdx;
                    if (isSelected && !isCorrect) {
                      cls +=
                        "border-red-400 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 dark:border-red-700";
                    } else if (!isSelected && isCorrect && userWrong) {
                      cls +=
                        "border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] font-semibold";
                    } else {
                      cls += isSelected
                        ? "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]"
                        : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] opacity-60";
                    }
                  }
                  return (
                    <button
                      key={ci}
                      type="button"
                      className={cls}
                      onClick={() => select(i, ci)}
                      disabled={validated}
                    >
                      {choice}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Fill exercise ─────────────────────────────────────────────────────────────

function renderFillSentence(sentence: string) {
  const parts = sentence.split("___");
  if (parts.length <= 1) return <>{sentence}</>;
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className="inline-block w-10 border-b-2 border-current mx-0.5 align-bottom" />
          )}
        </React.Fragment>
      ))}
    </>
  );
}

function normalizeAnswer(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/['']/g, "'")
    .replace(/\s+/g, " ");
}

function FillExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "fill" }>;
  onValidated: (allCorrect: boolean) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const [items] = useState<typeof exercise.items>(() => {
    if (exercise.pool && exercise.pool.length > 0) {
      const size = exercise.poolSize ?? 5;
      return shuffle(exercise.pool).slice(0, size);
    }
    return exercise.items;
  });
  const [inputs, setInputs] = useState<string[]>(
    () => new Array(items.length).fill(""),
  );
  const [validated, setValidated] = useState(false);

  function setInput(i: number, val: string) {
    if (validated) return;
    setInputs((prev: string[]) => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  }

  function validate() {
    if (validated) return;
    setValidated(true);
    const allCorrect = items.every(
      (item: FillItem, i) =>
        normalizeAnswer(inputs[i] ?? "") === normalizeAnswer(item.answer),
    );
    onValidated(allCorrect);
  }

  useEffect(() => {
    if (validateCommand > 0) validate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  useEffect(() => {
    onCanValidateChange(!validated);
  }, [validated, onCanValidateChange]);

  const pivot = usePivotLang();
  const { showPivot: showTrans } = useTranslation();
  const isRtl = pivot === "ar" || pivot === "fa";

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>
        {showTrans && exercise.transInstruction?.[pivot as keyof typeof exercise.transInstruction] && (
          <p className="mt-0.5 text-xs text-[var(--color-text-secondary)] opacity-70" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
            {exercise.transInstruction[pivot as keyof typeof exercise.transInstruction]}
          </p>
        )}
      </div>
      {items.map((item: FillItem, i) => {
        const userAnswer = inputs[i] ?? "";
        const correct = normalizeAnswer(userAnswer) === normalizeAnswer(item.answer);

        // Detect trailing parenthetical hint: "sentence text (hint)"
        const parenMatch = item.sentence.match(/^(.*?)\s+(\([^)]+\))\s*$/);
        const rawSentence = parenMatch ? parenMatch[1]! : item.sentence;
        const parenHint = parenMatch ? parenMatch[2]! : null;

        // Detect arrow split (only when no parenthetical): "before → after"
        const arrowIdx = rawSentence.indexOf(" → ");
        const sentLine1 = arrowIdx >= 0 ? rawSentence.slice(0, arrowIdx) : rawSentence;
        const sentLine2 = arrowIdx >= 0 ? "→ " + rawSentence.slice(arrowIdx + 3) : null;

        const inputEl = validated && !correct ? (
          <span className="inline-flex items-center justify-center gap-1 border-b-2 border-red-400 mx-1 w-28 align-bottom">
            <span className="text-xs line-through text-red-300 dark:text-red-500">{userAnswer || "—"}</span>
            <span className="text-sm font-bold text-red-600 dark:text-red-400">{item.answer}</span>
          </span>
        ) : (
          <input
            type="text"
            value={userAnswer}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(i, e.target.value)}
            disabled={validated}
            className={`inline-block w-28 border-b-2 bg-transparent text-center text-sm font-semibold outline-none mx-1 transition-colors focus:border-[var(--color-accent-fr)] ${
              validated
                ? "border-[var(--color-border-default)] text-[var(--color-text-primary)]"
                : "border-[var(--color-text-secondary)] text-[var(--color-text-primary)]"
            }`}
          />
        );

        const renderParts = (s: string) =>
          s.split("___").map((part, pi, arr) => (
            <React.Fragment key={pi}>
              {part}
              {pi < arr.length - 1 && inputEl}
            </React.Fragment>
          ));

        return (
          <div key={i} className="space-y-0.5">
            <p className="text-sm font-medium leading-loose text-[var(--color-text-primary)]">
              <span className="text-[var(--color-accent-fr)]">{i + 1}.</span>{" "}
              {renderParts(sentLine1)}
              {parenHint && (
                <>
                  <br />
                  <span className="ml-4 text-xs text-[var(--color-text-secondary)]">{parenHint}</span>
                </>
              )}
              {sentLine2 !== null && (
                <>
                  <br />
                  <span className="ml-4">{renderParts(sentLine2)}</span>
                </>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
}

// ── Clock read exercise ───────────────────────────────────────────────────────

function ClockReadExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "clock_read" }>;
  onValidated: (allCorrect: boolean) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const [inputs, setInputs] = useState<string[]>(
    () => new Array(exercise.clocks.length).fill(""),
  );
  const [validated, setValidated] = useState(false);

  function setInput(i: number, val: string) {
    if (validated) return;
    setInputs((prev) => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  }

  function validate() {
    if (validated) return;
    setValidated(true);
    const allCorrect = exercise.clocks.every(
      (clk, i) => normalizeAnswer(inputs[i] ?? "") === normalizeAnswer(clk.answer),
    );
    onValidated(allCorrect);
  }

  useEffect(() => {
    if (validateCommand > 0) validate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  useEffect(() => {
    onCanValidateChange(!validated);
  }, [validated, onCanValidateChange]);

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {exercise.clocks.map((clk, i) => {
          const userAnswer = inputs[i] ?? "";
          const correct = normalizeAnswer(userAnswer) === normalizeAnswer(clk.answer);
          return (
            <div key={i} className="flex flex-col items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] p-2">
              <AnalogClock h={clk.h} m={clk.m} size={76} />
              <p className="text-xs font-bold text-[var(--color-text-secondary)]">{clk.label}</p>
              {validated ? (
                correct ? (
                  <p className="text-center text-xs font-semibold text-[var(--color-accent-fr)]">{clk.answer}</p>
                ) : (
                  <div className="w-full text-center">
                    <p className="text-xs line-through text-red-400">{userAnswer || "—"}</p>
                    <p className="text-xs font-semibold text-red-600 dark:text-red-400">{clk.answer}</p>
                  </div>
                )
              ) : (
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(i, e.target.value)}
                  placeholder="..."
                  className="w-full rounded border border-[var(--color-border-default)] bg-transparent px-2 py-1 text-center text-xs outline-none focus:border-[var(--color-accent-fr)]"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Match exercise ────────────────────────────────────────────────────────────

// Palette of accent colours for match connections (6 distinct hues)
const MATCH_COLORS = [
  "text-violet-600 dark:text-violet-400",
  "text-sky-600 dark:text-sky-400",
  "text-rose-600 dark:text-rose-400",
  "text-amber-600 dark:text-amber-400",
  "text-emerald-600 dark:text-emerald-400",
  "text-fuchsia-600 dark:text-fuchsia-400",
];
const MATCH_BG = [
  "bg-violet-100 dark:bg-violet-900/30",
  "bg-sky-100 dark:bg-sky-900/30",
  "bg-rose-100 dark:bg-rose-900/30",
  "bg-amber-100 dark:bg-amber-900/30",
  "bg-emerald-100 dark:bg-emerald-900/30",
  "bg-fuchsia-100 dark:bg-fuchsia-900/30",
];
const LETTERS = "abcdefghijklmnopqrstuvwxyz";

function MatchExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "match" }>;
  onValidated: (allCorrect: boolean) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const [pairs] = useState<MatchPair[]>(() => {
    const raw = exercise.pool && exercise.pool.length > 0
      ? shuffle(exercise.pool).slice(0, exercise.poolSize ?? 8)
      : exercise.pairs;
    return raw;
  });
  const [rightItems] = useState<{ pair: MatchPair; origIdx: number }[]>(() =>
    shuffle(pairs.map((p, i) => ({ pair: p, origIdx: i }))),
  );
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  // connections: Map<leftIdx → rightSlotIdx>
  const [connections, setConnections] = useState<Map<number, number>>(new Map());
  const [validated, setValidated] = useState(false);

  const allConnected = connections.size === pairs.length;

  useEffect(() => {
    onCanValidateChange(allConnected && !validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allConnected, validated]);

  useEffect(() => {
    if (validateCommand > 0 && !validated && allConnected) {
      setValidated(true);
      const allCorrect = pairs.every((pair, li) => {
        const ri = connections.get(li);
        return ri !== undefined && rightItems[ri]?.pair.right === pair.right;
      });
      onValidated(allCorrect);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  function clickLeft(li: number) {
    if (validated) return;
    setSelectedLeft((prev) => (prev === li ? null : li));
  }

  function clickRight(ri: number) {
    if (validated) return;
    if (selectedLeft === null) return;
    setConnections((prev) => {
      const next = new Map(prev);
      for (const [k, v] of next.entries()) if (v === ri) next.delete(k);
      next.set(selectedLeft, ri);
      return next;
    });
    setSelectedLeft(null);
  }

  // Assign a stable color index to each left-item once connected
  const colorMap = new Map<number, number>();
  let colorCounter = 0;
  for (const [li] of connections.entries()) {
    colorMap.set(li, colorCounter % MATCH_COLORS.length);
    colorCounter++;
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>

      {(exercise.leftLabel || exercise.rightLabel) && (
        <div className="grid grid-cols-[1fr_auto_1fr] gap-x-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">{exercise.leftLabel ?? ""}</p>
          <span />
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">{exercise.rightLabel ?? ""}</p>
        </div>
      )}

      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-3 gap-y-2 items-center">
        {pairs.map((pair, li) => {
          const ri = connections.get(li);
          const isConnected = ri !== undefined;
          const colorIdx = colorMap.get(li) ?? 0;
          const isSelected = selectedLeft === li;

          let isCorrect = false;
          if (validated && isConnected) {
            isCorrect = rightItems[ri!]?.pair.right === pair.right;
          }

          // Left cell
          let leftCls = "flex items-center gap-2 rounded-[var(--radius-md)] border px-3 py-2 text-sm font-medium transition-colors cursor-pointer ";
          if (validated) {
            leftCls += isCorrect
              ? `border-current ${MATCH_COLORS[colorIdx]} ${MATCH_BG[colorIdx]}`
              : isConnected
                ? "border-red-400 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400"
                : "border-[var(--color-border-default)] opacity-50 text-[var(--color-text-secondary)]";
          } else if (isSelected) {
            leftCls += "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]";
          } else if (isConnected) {
            leftCls += `border-current ${MATCH_COLORS[colorIdx]} ${MATCH_BG[colorIdx]}`;
          } else {
            leftCls += "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-fr)]/50";
          }

          // Connector dot
          const dotCls = `w-2 h-2 rounded-full mx-auto transition-colors ${
            isConnected
              ? validated
                ? isCorrect ? `bg-current ${MATCH_COLORS[colorIdx]}` : "bg-red-500"
                : `bg-current ${MATCH_COLORS[colorIdx]}`
              : isSelected
                ? "bg-[var(--color-accent-fr)]"
                : "bg-[var(--color-border-default)]"
          }`;

          return (
            <React.Fragment key={li}>
              {/* Left item */}
              <button type="button" className={leftCls} onClick={() => clickLeft(li)} disabled={validated}>
                <span className="shrink-0 text-xs font-bold text-[var(--color-accent-fr)]">{li + 1}.</span>
                <span className="flex-1">{pair.left}</span>
              </button>

              {/* Connector dot */}
              <div className="flex flex-col items-center gap-0.5">
                <div className={dotCls} />
              </div>

              {/* Spacer — right items rendered separately below */}
              <div />
            </React.Fragment>
          );
        })}
      </div>

      {/* Right column — independently positioned */}
      <div className="space-y-2">
        {rightItems.map(({ pair, origIdx }, ri) => {
          const connectingLeft = [...connections.entries()].find(([, v]) => v === ri)?.[0];
          const isConnected = connectingLeft !== undefined;
          const colorIdx = isConnected ? (colorMap.get(connectingLeft!) ?? 0) : 0;
          const isActive = selectedLeft !== null;

          let isCorrect = false;
          if (validated && isConnected) {
            isCorrect = pair.right === pairs[connectingLeft!]?.right;
          }

          let cls = "flex items-center gap-2 rounded-[var(--radius-md)] border px-3 py-2 text-sm font-medium transition-colors ";
          if (validated) {
            cls += isCorrect
              ? `border-current cursor-pointer ${MATCH_COLORS[colorIdx]} ${MATCH_BG[colorIdx]}`
              : isConnected
                ? "border-red-400 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400"
                : "border-[var(--color-border-default)] opacity-50 text-[var(--color-text-secondary)]";
          } else if (isConnected) {
            cls += `border-current cursor-pointer ${MATCH_COLORS[colorIdx]} ${MATCH_BG[colorIdx]}`;
          } else {
            cls += isActive
              ? "border-[var(--color-accent-fr)]/40 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] cursor-pointer hover:border-[var(--color-accent-fr)] hover:bg-[var(--color-accent-fr)]/8"
              : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]";
          }

          return (
            <button key={ri} type="button" className={cls} onClick={() => clickRight(ri)} disabled={validated}>
              <span className="shrink-0 text-xs font-bold text-[var(--color-accent-fr)]">{LETTERS[origIdx]}.</span>
              <span className="flex-1 text-left">{pair.right}</span>
              {validated && isConnected && !isCorrect && (
                <span className="shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-red-500" aria-hidden><path d="M18 6L6 18M6 6l12 12"/></svg>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {validated && (
        <div className="space-y-1 pt-1">
          {pairs.map((pair, li) => {
            const ri = connections.get(li);
            const isCorrect = ri !== undefined && rightItems[ri]?.pair.right === pair.right;
            if (isCorrect) return null;
            return (
              <p key={li} className="text-xs text-emerald-600 dark:text-emerald-400">
                {pair.left} → <strong>{pair.right}</strong>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Write exercise ────────────────────────────────────────────────────────────

type LTMatch = {
  message: string;
  shortMessage: string;
  replacements: { value: string }[];
  rule: { id: string };
  offset: number;
  length: number;
};


const LT_IGNORE = new Set([
  "WHITESPACE_RULE", "FRENCH_WHITESPACE", "COMMA_PARENTHESIS_WHITESPACE",
  "UNPAIRED_BRACKETS",
]);

const ETRE_FORMS  = /\b(suis|es|est|sommes|[eê]tes|sont)\b/i;
const AVOIR_FORMS = /\b(ai|as|a|avons|avez|ont)\b/i;

function hasVerb(text: string, verb: "être" | "avoir"): boolean {
  return (verb === "être" ? ETRE_FORMS : AVOIR_FORMS).test(text);
}

function WriteExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "write" }>;
  onValidated: (allCorrect: boolean) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const [inputs, setInputs] = useState<string[]>(() => new Array(exercise.prompts.length).fill(""));
  const [validated, setValidated] = useState(false);
  const [checking, setChecking] = useState(false);
  const [grammarErrors, setGrammarErrors] = useState<Record<number, LTMatch[]>>({});
  const [apiError, setApiError] = useState(false);
  const inputsRef = React.useRef(inputs);
  inputsRef.current = inputs;

  // On validate: send all phrases in one combined request for better LT context
  useEffect(() => {
    if (validateCommand > 0 && !validated) {
      setValidated(true);
      setChecking(true);
      const snapshot = inputsRef.current;

      const SEP = "\n\n";
      const parts: Array<{ idx: number; text: string; startOffset: number }> = [];
      let currentOffset = 0;
      snapshot.forEach((rawText, i) => {
        const text = rawText.trim();
        if (text.length < 3) return;
        parts.push({ idx: i, text, startOffset: currentOffset });
        currentOffset += text.length + SEP.length;
      });

      if (parts.length === 0) {
        setChecking(false);
        onValidated(true);
        return;
      }

      const combinedText = parts.map((p) => p.text).join(SEP);

      fetch("/api/check-grammar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: combinedText }),
      })
        .then(async (res) => {
          if (!res.ok) throw new Error("api");
          const data = await res.json();
          const allMatches: LTMatch[] = (data.matches ?? []).filter(
            (m: LTMatch) => !LT_IGNORE.has(m.rule.id),
          );
          // Map each match back to its sentence by offset
          const errs: Record<number, LTMatch[]> = {};
          for (const match of allMatches) {
            const part = parts.find(
              (p) => match.offset >= p.startOffset && match.offset < p.startOffset + p.text.length,
            );
            if (!part) continue;
            if (!errs[part.idx]) errs[part.idx] = [];
            errs[part.idx].push({ ...match, offset: match.offset - part.startOffset });
          }
          setGrammarErrors(errs);
        })
        .catch(() => setApiError(true))
        .finally(() => {
          setChecking(false);
          onValidated(true);
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  useEffect(() => {
    onCanValidateChange(!validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated]);

  // Auto-dismiss toast after 4 s
  useEffect(() => {
    if (!apiError) return;
    const t = setTimeout(() => setApiError(false), 4000);
    return () => clearTimeout(t);
  }, [apiError]);

  function setInput(i: number, val: string) {
    if (validated) return;
    setInputs((prev) => prev.map((v, idx) => (idx === i ? val : v)));
  }

  return (
    <div className="space-y-4">
      {/* API error toast */}
      {apiError && (
        <div className="fixed bottom-24 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-xl bg-zinc-800 px-4 py-3 text-sm text-white shadow-xl dark:bg-zinc-700">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-amber-400" aria-hidden>
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Correction indisponible pour le moment
          <button onClick={() => setApiError(false)} className="ml-1 opacity-60 hover:opacity-100" aria-label="Fermer">✕</button>
        </div>
      )}

      <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>

      {checking && (
        <p className="animate-pulse text-xs text-[var(--color-text-secondary)]">Correction en cours…</p>
      )}

      {exercise.prompts.map((_, i) => {
        const ltErrors = grammarErrors[i] ?? [];
        const inputText = (inputs[i] ?? "").trim();
        const verbOk = !exercise.verb || inputText.length <= 2 || hasVerb(inputs[i] ?? "", exercise.verb);
        const isClean = validated && !checking && ltErrors.length === 0 && inputText.length > 2 && verbOk;

        return (
          <div key={i} className="space-y-1.5">
            <div className="flex items-end gap-2">
              <span className={`shrink-0 pb-1 text-sm font-medium ${isClean ? "text-emerald-500 dark:text-emerald-400" : "text-[var(--color-accent-fr)]"}`}>
                {i + 1}.
              </span>
              <input
                type="text"
                value={inputs[i] ?? ""}
                onChange={(e) => setInput(i, e.target.value)}
                disabled={validated}
                className={`flex-1 border-b-2 bg-transparent py-1 text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent-fr)] disabled:opacity-70 ${
                  isClean
                    ? "border-emerald-400 dark:border-emerald-500"
                    : "border-[var(--color-text-secondary)]"
                }`}
              />
            </div>
            {/* Internal verb check — shown only after validation */}
            {validated && !checking && exercise.verb && (inputs[i] ?? "").trim().length > 2 && !hasVerb(inputs[i] ?? "", exercise.verb) && (
              <p className="ml-5 text-xs text-amber-600 dark:text-amber-400">
                Le verbe <strong>{exercise.verb}</strong> est attendu dans cette phrase
              </p>
            )}
            {/* LanguageTool results — shown only after validation */}
            {validated && !checking && ltErrors.length > 0 && (
              <ul className="ml-5 space-y-1">
                {ltErrors.map((err, ei) => {
                  const suggestions = err.replacements.slice(0, 3).map((r) => r.value).filter(Boolean);
                  return (
                    <li key={ei} className="flex flex-wrap items-baseline gap-1 text-xs">
                      <span className="text-amber-600 dark:text-amber-400">
                        {err.shortMessage || err.message}
                      </span>
                      {suggestions.length > 0 && (
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                          → {suggestions.join(" / ")}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
            {isClean && (
              <p className="ml-5 text-xs text-emerald-600 dark:text-emerald-400">✓ Aucune erreur détectée</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── TrueFalse exercise ────────────────────────────────────────────────────────

function TrueFalseExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "trueFalse" }>;
  onValidated: (allCorrect: boolean) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const [answers, setAnswers] = useState<(boolean | null)[]>(() => new Array(exercise.items.length).fill(null));
  const [validated, setValidated] = useState(false);

  const allAnswered = answers.every((a) => a !== null);

  useEffect(() => {
    onCanValidateChange(allAnswered && !validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allAnswered, validated]);

  useEffect(() => {
    if (validateCommand > 0 && !validated && allAnswered) {
      setValidated(true);
      onValidated(answers.every((a, i) => a === exercise.items[i]!.answer));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  function pick(i: number, val: boolean) {
    if (validated) return;
    setAnswers((prev) => prev.map((v, idx) => (idx === i ? val : v)));
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>
      <div className="space-y-3">
        {exercise.items.map((item, i) => {
          const chosen = answers[i];
          const correct = item.answer;
          const isRight = chosen === correct;
          const btnBase = "px-3 py-1 rounded text-xs font-medium border transition-colors";
          const mkCls = (val: boolean) => {
            if (chosen !== val) return `${btnBase} border-[var(--color-border)] text-[var(--color-text-secondary)]`;
            if (!validated) return `${btnBase} border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]`;
            return isRight
              ? `${btnBase} border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400`
              : `${btnBase} border-red-400 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400`;
          };
          return (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-sm font-medium text-[var(--color-accent-fr)]">{i + 1}.</span>
              <div className="flex-1 space-y-2">
                <p className="text-sm text-[var(--color-text-primary)]">{item.statement}</p>
                <div className="flex items-center gap-2">
                  <button onClick={() => pick(i, true)} className={mkCls(true)}>Vrai ✓</button>
                  <button onClick={() => pick(i, false)} className={mkCls(false)}>Faux ✗</button>
                  {validated && !isRight && (
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      → {correct ? "Vrai" : "Faux"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Order exercise ────────────────────────────────────────────────────────────

function OrderExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "order" }>;
  onValidated: (allCorrect: boolean) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const [pools, setPools] = useState<string[][]>(() =>
    exercise.items.map((item) => shuffle(item.sentence.split(" "))),
  );
  const [builts, setBuilts] = useState<string[][]>(() => exercise.items.map(() => []));
  const [validated, setValidated] = useState(false);

  const allDone = builts.every((b, i) => b.length === exercise.items[i]!.sentence.split(" ").length);

  useEffect(() => {
    onCanValidateChange(allDone && !validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDone, validated]);

  useEffect(() => {
    if (validateCommand > 0 && !validated && allDone) {
      setValidated(true);
      onValidated(builts.every((b, i) => b.join(" ") === exercise.items[i]!.sentence));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  function addWord(itemIdx: number, poolIdx: number) {
    if (validated) return;
    const word = pools[itemIdx]![poolIdx]!;
    setPools((prev) => prev.map((p, i) => i === itemIdx ? p.filter((_, j) => j !== poolIdx) : p));
    setBuilts((prev) => prev.map((b, i) => i === itemIdx ? [...b, word] : b));
  }

  function removeWord(itemIdx: number, builtIdx: number) {
    if (validated) return;
    const word = builts[itemIdx]![builtIdx]!;
    setBuilts((prev) => prev.map((b, i) => i === itemIdx ? b.filter((_, j) => j !== builtIdx) : b));
    setPools((prev) => prev.map((p, i) => i === itemIdx ? [...p, word] : p));
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>
      {exercise.items.map((item, i) => {
        const built = builts[i]!;
        const pool = pools[i]!;
        const correct = built.join(" ") === item.sentence;
        return (
          <div key={i} className="space-y-2 rounded-lg border border-[var(--color-border)] p-3">
            {item.hint && (
              <p className="text-xs text-[var(--color-text-secondary)] italic">{item.hint}</p>
            )}
            {/* answer area */}
            <div className={`min-h-9 flex flex-wrap gap-1.5 rounded border-2 p-2 transition-colors ${
              validated
                ? correct
                  ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                  : "border-red-400 bg-red-50 dark:bg-red-950/30"
                : "border-[var(--color-accent-fr)]/40 bg-[var(--color-surface)]"
            }`}>
              {built.length === 0 && (
                <span className="text-xs text-[var(--color-text-secondary)] italic">Clique les mots ci-dessous…</span>
              )}
              {built.map((w, j) => (
                <button
                  key={j}
                  onClick={() => removeWord(i, j)}
                  disabled={validated}
                  className="rounded bg-[var(--color-accent-fr)] px-2 py-0.5 text-xs font-medium text-white disabled:opacity-70"
                >
                  {w}
                </button>
              ))}
            </div>
            {validated && !correct && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400">✓ {item.sentence}</p>
            )}
            {/* word pool */}
            <div className="flex flex-wrap gap-1.5">
              {pool.map((w, j) => (
                <button
                  key={j}
                  onClick={() => addWord(i, j)}
                  disabled={validated}
                  className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-0.5 text-xs text-[var(--color-text-primary)] hover:border-[var(--color-accent-fr)] disabled:opacity-70"
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Classify exercise ─────────────────────────────────────────────────────────

function ClassifyExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "classify" }>;
  onValidated: (allCorrect: boolean) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const [items] = useState<typeof exercise.items>(() => {
    const raw = exercise.pool && exercise.pool.length > 0
      ? shuffle(exercise.pool).slice(0, exercise.poolSize ?? 8)
      : exercise.items;
    return shuffle(raw);
  });
  const [chosen, setChosen] = useState<(number | null)[]>(() => new Array(items.length).fill(null));
  const [validated, setValidated] = useState(false);

  const allChosen = chosen.every((c) => c !== null);

  useEffect(() => {
    onCanValidateChange(allChosen && !validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allChosen, validated]);

  useEffect(() => {
    if (validateCommand > 0 && !validated && allChosen) {
      setValidated(true);
      onValidated(chosen.every((c, i) => c === items[i]!.categoryIdx));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>
      <div className="space-y-4">
        {items.map((item, i) => {
          const sel = chosen[i];
          const isRight = sel === item.categoryIdx;
          return (
            <div key={i} className="space-y-2">
              <p className="text-sm font-medium text-[var(--color-text-primary)]">
                <span className="font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>{" "}
                {renderInlineMarkup(item.word, false)}
              </p>
              <div className="flex overflow-hidden rounded-full border border-[var(--color-border-default)]">
                {exercise.categories.map((cat, ci) => {
                  const active = sel === ci;
                  let cls = "flex-1 py-1.5 text-center text-xs font-semibold transition-colors ";
                  if (ci > 0) cls += "border-l border-[var(--color-border-default)] ";
                  if (!active) {
                    cls += "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]";
                  } else if (!validated) {
                    cls += "bg-[var(--color-accent-fr)] text-white";
                  } else if (isRight) {
                    cls += "bg-emerald-500 text-white";
                  } else {
                    cls += "bg-red-500 text-white";
                  }
                  return (
                    <button
                      key={ci}
                      type="button"
                      onClick={() => !validated && setChosen((prev) => prev.map((v, idx) => idx === i ? ci : v))}
                      className={cls}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
              {validated && !isRight && (
                <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  → {exercise.categories[item.categoryIdx]}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Word-order exercise (drag-to-arrange) ────────────────────────────────────

function WordOrderExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "word_order" }>;
  onValidated: (allCorrect: boolean) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const [states] = useState(() =>
    exercise.items.map((item) => ({ ...item, shuffled: shuffle([...item.words]) })),
  );
  const [arranged, setArranged] = useState<string[][]>(() => states.map(() => []));
  const [pools, setPools] = useState<string[][]>(() => states.map((s) => [...s.shuffled]));
  const [validated, setValidated] = useState(false);

  const allFilled = arranged.every((arr, i) => arr.length === states[i]!.words.length);

  useEffect(() => {
    onCanValidateChange(allFilled && !validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allFilled, validated]);

  useEffect(() => {
    if (validateCommand > 0 && !validated && allFilled) {
      setValidated(true);
      const allCorrect = arranged.every((arr, i) =>
        arr.join(" ") === states[i]!.sentence,
      );
      onValidated(allCorrect);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  function addWord(qi: number, word: string, wordIdx: number) {
    if (validated) return;
    setArranged((prev) => prev.map((arr, i) => i === qi ? [...arr, word] : arr));
    setPools((prev) => prev.map((pool, i) => i === qi ? pool.filter((_, j) => j !== wordIdx) : pool));
  }

  function removeWord(qi: number, arrIdx: number) {
    if (validated) return;
    const word = arranged[qi]![arrIdx]!;
    setArranged((prev) => prev.map((arr, i) => i === qi ? arr.filter((_, j) => j !== arrIdx) : arr));
    setPools((prev) => prev.map((pool, i) => i === qi ? [...pool, word] : pool));
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>
      {states.map((item, qi) => {
        const arr = arranged[qi]!;
        const pool = pools[qi]!;
        const correct = arr.join(" ") === item.sentence;
        return (
          <div key={qi} className="space-y-3">
            <p className="text-sm font-bold text-[var(--color-accent-fr)]">{qi + 1}.</p>

            {/* Arranged sentence */}
            <div className="min-h-10 flex flex-wrap gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-3 py-2">
              {arr.length === 0 ? (
                <span className="text-xs text-[var(--color-text-secondary)] self-center">
                  Touchez un mot ci-dessous pour l&apos;ajouter…
                </span>
              ) : arr.map((word, wi) => {
                let cls = "rounded-full px-3 py-1 text-sm font-medium transition-colors cursor-pointer ";
                if (!validated) {
                  cls += "bg-[var(--color-accent-fr)] text-white hover:opacity-80";
                } else if (correct) {
                  cls += "bg-emerald-500 text-white";
                } else {
                  const expected = item.sentence.split(" ")[wi];
                  cls += word === expected
                    ? "bg-emerald-500 text-white"
                    : "bg-red-500 text-white";
                }
                return (
                  <button key={wi} type="button" onClick={() => removeWord(qi, wi)} className={cls}>
                    {word}
                  </button>
                );
              })}
            </div>

            {/* Word pool */}
            <div className="flex flex-wrap gap-2">
              {pool.map((word, wi) => (
                <button
                  key={wi}
                  type="button"
                  onClick={() => addWord(qi, word, wi)}
                  disabled={validated}
                  className="rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 py-1 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-accent-fr)] hover:text-[var(--color-accent-fr)] disabled:opacity-50"
                >
                  {word}
                </button>
              ))}
            </div>

            {validated && (
              <p className={`text-xs font-medium ${correct ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
                {correct ? "✓ Correct !" : `→ ${item.sentence}`}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Color-highlight exercise ──────────────────────────────────────────────────

const HIGHLIGHT_STYLES = [
  { bg: "bg-yellow-300 dark:bg-yellow-400", text: "text-yellow-900 dark:text-yellow-900", btn: "bg-yellow-300 dark:bg-yellow-400 text-yellow-900" },
  { bg: "bg-red-400 dark:bg-red-500", text: "text-white", btn: "bg-red-400 dark:bg-red-500 text-white" },
  { bg: "bg-emerald-400 dark:bg-emerald-500", text: "text-white", btn: "bg-emerald-400 dark:bg-emerald-500 text-white" },
];

function ColorHighlightExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "color_highlight" }>;
  onValidated: (allCorrect: boolean) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const [activeColor, setActiveColor] = useState<number>(0);
  const [colored, setColored] = useState<(number | null)[][]>(() =>
    exercise.items.map((item) => new Array(item.words.length).fill(null)),
  );
  const [validated, setValidated] = useState(false);

  const allFilled = colored.every((row, qi) =>
    exercise.items[qi]!.answers.every((ans, wi) => ans === null || row[wi] !== null),
  );

  useEffect(() => {
    onCanValidateChange(allFilled && !validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allFilled, validated]);

  useEffect(() => {
    if (validateCommand > 0 && !validated && allFilled) {
      setValidated(true);
      const allCorrect = colored.every((row, qi) =>
        exercise.items[qi]!.answers.every((ans, wi) => ans === null || row[wi] === ans),
      );
      onValidated(allCorrect);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  function toggleWord(qi: number, wi: number) {
    if (validated) return;
    setColored((prev) =>
      prev.map((row, ri) =>
        ri !== qi
          ? row
          : row.map((c, ci) => {
              if (ci !== wi) return c;
              return c === activeColor ? null : activeColor;
            }),
      ),
    );
  }

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>

      {/* Color selector */}
      <div className="flex overflow-hidden rounded-full border border-[var(--color-border-default)]">
        {exercise.colors.map((label, ci) => {
          const style = HIGHLIGHT_STYLES[ci]!;
          const active = activeColor === ci;
          return (
            <button
              key={ci}
              type="button"
              onClick={() => setActiveColor(ci)}
              className={`flex-1 py-1.5 text-center text-xs font-semibold transition-all ${ci > 0 ? "border-l border-[var(--color-border-default)]" : ""} ${active ? `${style.btn} ring-2 ring-inset ring-white/40` : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"}`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Sentences */}
      <div className="space-y-4">
        {exercise.items.map((item, qi) => (
          <div key={qi} className="space-y-2">
            <p className="text-sm font-bold text-[var(--color-accent-fr)]">{qi + 1}.</p>
            <div className="flex flex-wrap gap-1.5">
              {item.words.map((word, wi) => {
                const colorIdx = colored[qi]![wi];
                const expectedIdx = item.answers[wi];
                const style = colorIdx !== null ? HIGHLIGHT_STYLES[colorIdx] : null;
                let cls = "cursor-pointer rounded px-2 py-0.5 text-sm font-medium transition-all select-none ";
                if (validated && colorIdx !== null && expectedIdx !== null) {
                  cls += colorIdx === expectedIdx
                    ? `${style!.bg} ${style!.text}`
                    : "bg-red-200 text-red-800 dark:bg-red-900/40 dark:text-red-300 ring-2 ring-red-400";
                } else if (validated && colorIdx !== null && expectedIdx === null) {
                  cls += "bg-red-200 text-red-800 dark:bg-red-900/40 dark:text-red-300 ring-2 ring-red-400";
                } else if (colorIdx !== null) {
                  cls += `${style!.bg} ${style!.text}`;
                } else {
                  cls += "bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-border-default)]";
                }
                return (
                  <button key={wi} type="button" onClick={() => toggleWord(qi, wi)} className={cls}>
                    {word}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Tag2 exercise (genre + nombre) ────────────────────────────────────────────

function PillGroup<T extends string>({
  options,
  value,
  correct,
  validated,
  onChange,
}: {
  options: readonly T[];
  value: T | null;
  correct: T;
  validated: boolean;
  onChange: (v: T) => void;
}) {
  return (
    <div className="inline-flex overflow-hidden rounded-full border border-[var(--color-border)] text-xs font-semibold">
      {options.map((opt, oi) => {
        const active = value === opt;
        let cls = "px-3 py-1 transition-colors ";
        if (oi > 0) cls += "border-l border-[var(--color-border)] ";
        if (active) {
          if (!validated) {
            cls += "bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]";
          } else if (opt === correct) {
            cls += "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400";
          } else {
            cls += "bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400";
          }
        } else {
          cls += "text-[var(--color-text-secondary)] hover:bg-[var(--color-accent-fr)]/10";
        }
        return (
          <button key={opt} onClick={() => !validated && onChange(opt)} className={cls}>
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function Tag2Exercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "tag2" }>;
  onValidated: (allCorrect: boolean) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const [items] = useState(() =>
    shuffle([...exercise.pool]).slice(0, exercise.poolSize ?? 10),
  );
  const [answers, setAnswers] = useState<{ n: "S" | "P" | null; g: "M" | "F" | null }[]>(() =>
    items.map(() => ({ n: null, g: null })),
  );
  const [validated, setValidated] = useState(false);

  const allFilled = answers.every((a, i) =>
    a.n !== null && (items[i]!.gender === null || a.g !== null),
  );

  useEffect(() => {
    onCanValidateChange(allFilled && !validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allFilled, validated]);

  useEffect(() => {
    if (validateCommand > 0 && !validated && allFilled) {
      setValidated(true);
      onValidated(
        items.every((item, i) => {
          const ans = answers[i]!;
          return ans.n === item.number && (item.gender === null || ans.g === item.gender);
        }),
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>
      <div className="space-y-1">
        {items.map((item, i) => {
          const ans = answers[i]!;
          const nWrong = validated && ans.n !== item.number;
          const gWrong = validated && item.gender !== null && ans.g !== item.gender;
          return (
            <div key={i} className="flex items-center gap-3 py-1.5">
              {/* Number */}
              <span className="w-5 shrink-0 text-right text-xs font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>

              {/* Toggles — always same total width */}
              <div className="flex shrink-0 items-center gap-2">
                <PillGroup
                  options={["S", "P"] as const}
                  value={ans.n}
                  correct={item.number}
                  validated={validated}
                  onChange={(v) => setAnswers((prev) => prev.map((a, idx) => idx === i ? { ...a, n: v } : a))}
                />
                {item.gender !== null ? (
                  <PillGroup
                    options={["M", "F"] as const}
                    value={ans.g}
                    correct={item.gender}
                    validated={validated}
                    onChange={(v) => setAnswers((prev) => prev.map((a, idx) => idx === i ? { ...a, g: v } : a))}
                  />
                ) : (
                  /* Invisible spacer — same size as M/F PillGroup so words align */
                  <div className="inline-flex overflow-hidden rounded-full border border-transparent text-xs font-semibold opacity-0 pointer-events-none select-none" aria-hidden>
                    <span className="px-3 py-1">M</span>
                    <span className="px-3 py-1 border-l border-transparent">F</span>
                  </div>
                )}
              </div>

              {/* Word (+ optional companion noun) */}
              <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                {item.word}
                {item.companion && (
                  <span className="ml-1.5 font-normal text-[var(--color-text-secondary)]">{item.companion}</span>
                )}
              </span>

              {/* Correction */}
              {(nWrong || gWrong) && (
                <span className="ml-auto text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  → {item.number}{item.gender ? ` ${item.gender}` : ""}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Exercise wrapper ──────────────────────────────────────────────────────────

function ExerciseView({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Exercise;
  onValidated: (allCorrect: boolean) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-text-primary)]">
        {exercise.title}
      </h2>
      {exercise.type === "qcm" && (
        <QcmExercise exercise={exercise} onValidated={onValidated} validateCommand={validateCommand} onCanValidateChange={onCanValidateChange} />
      )}
      {exercise.type === "fill" && (
        <FillExercise exercise={exercise} onValidated={onValidated} validateCommand={validateCommand} onCanValidateChange={onCanValidateChange} />
      )}
      {exercise.type === "match" && (
        <MatchExercise exercise={exercise} onValidated={onValidated} validateCommand={validateCommand} onCanValidateChange={onCanValidateChange} />
      )}
      {exercise.type === "write" && (
        <WriteExercise exercise={exercise} onValidated={onValidated} validateCommand={validateCommand} onCanValidateChange={onCanValidateChange} />
      )}
      {exercise.type === "trueFalse" && (
        <TrueFalseExercise exercise={exercise} onValidated={onValidated} validateCommand={validateCommand} onCanValidateChange={onCanValidateChange} />
      )}
      {exercise.type === "order" && (
        <OrderExercise exercise={exercise} onValidated={onValidated} validateCommand={validateCommand} onCanValidateChange={onCanValidateChange} />
      )}
      {exercise.type === "classify" && (
        <ClassifyExercise exercise={exercise} onValidated={onValidated} validateCommand={validateCommand} onCanValidateChange={onCanValidateChange} />
      )}
      {exercise.type === "word_order" && (
        <WordOrderExercise exercise={exercise} onValidated={onValidated} validateCommand={validateCommand} onCanValidateChange={onCanValidateChange} />
      )}
      {exercise.type === "color_highlight" && (
        <ColorHighlightExercise exercise={exercise} onValidated={onValidated} validateCommand={validateCommand} onCanValidateChange={onCanValidateChange} />
      )}
      {exercise.type === "clock_read" && (
        <ClockReadExercise exercise={exercise} onValidated={onValidated} validateCommand={validateCommand} onCanValidateChange={onCanValidateChange} />
      )}
      {exercise.type === "tag2" && (
        <Tag2Exercise exercise={exercise} onValidated={onValidated} validateCommand={validateCommand} onCanValidateChange={onCanValidateChange} />
      )}
    </div>
  );
}

// ── Main runner ───────────────────────────────────────────────────────────────

function subjectToTab(subject: string): string {
  const s = subject.toLowerCase();
  if (s === "grammaire") return "grammaire";
  if (s === "vocabulaire") return "vocabulaire";
  return "conjugaison";
}

export function ConjugaisonRunner({ lesson, subject = "Conjugaison" }: Props) {
  const router = useRouter();
  const returnUrl = `/francais?tab=${subjectToTab(subject)}`;
  const pivot = usePivotLang();
  const { showPivot: showTrans } = useTranslation();
  const midExercises = lesson.midExercises ?? [];
  const theory2Idx = 1 + midExercises.length;
  const exStart = theory2Idx + (lesson.theory2 ? 1 : 0);
  const totalSteps = 1 + midExercises.length + (lesson.theory2 ? 1 : 0) + lesson.exercises.length;

  const [stepIdx, setStepIdx] = useState(0);
  const [exerciseKey, setExerciseKey] = useState(0);
  const [canValidate, setCanValidate] = useState(true);
  const [validateCommand, setValidateCommand] = useState(0);
  const [exercisesStarted, setExercisesStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  const isFirst = stepIdx === 0;
  const isLast = stepIdx === totalSteps - 1;
  const isTheory1 = stepIdx === 0;
  const isMidEx = stepIdx >= 1 && stepIdx <= midExercises.length;
  const isTheory2 = lesson.theory2 ? stepIdx === theory2Idx : false;
  const isTheory = isTheory1 || isTheory2;
  const isExercise = stepIdx >= exStart;
  const currentMidEx = isMidEx ? midExercises[stepIdx - 1] ?? null : null;
  const currentExercise = isExercise ? lesson.exercises[stepIdx - exStart] ?? null : null;
  const currentBlocks = isTheory1 ? lesson.theory : isTheory2 ? lesson.theory2! : null;

  // Reset validate command when moving to a new step
  useEffect(() => {
    setValidateCommand(0);
  }, [stepIdx, exerciseKey]);

  // Timer countdown for exercises
  useEffect(() => {
    if (!exercisesStarted || timeLeft === null || timeLeft <= 0) return;
    const id = setTimeout(() => setTimeLeft((t) => Math.max(0, (t ?? 1) - 1)), 1000);
    return () => clearTimeout(id);
  }, [exercisesStarted, timeLeft]);

  // Auto-complete when timer reaches 0
  useEffect(() => {
    if (timeLeft !== 0 || !exercisesStarted) return;
    markFrenchLessonComplete(lesson.slug);
    router.push(returnUrl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  function formatTime(s: number): string {
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  }

  const handleValidated = useCallback<(allCorrect: boolean) => void>((_allCorrect: boolean) => {
    setCanValidate(false);
  }, []);

  function goBack() {
    if (isExercise && exercisesStarted) {
      setShowCancelConfirm(true);
      return;
    }
    if (isFirst) {
      router.push(returnUrl);
    } else {
      setStepIdx((s: number) => s - 1);
      setExerciseKey((k: number) => k + 1);
      setValidateCommand(0);
    }
  }

  function goNext() {
    if (isLast) {
      markFrenchLessonComplete(lesson.slug);
      router.push(returnUrl);
    } else {
      setStepIdx((s: number) => s + 1);
      setExerciseKey((k: number) => k + 1);
      setValidateCommand(0);
    }
  }

  function resetExercise() {
    setExerciseKey((k: number) => k + 1);
    setValidateCommand(0);
  }

  return (
    <div className="mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-56">
      {/* Cancel confirmation dialog */}
      {showCancelConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-[var(--color-bg-primary)] rounded-[var(--radius-lg)] p-6 mx-4 max-w-sm w-full space-y-4 shadow-xl">
            <p className="text-base font-bold text-[var(--color-text-primary)]">Annuler l&apos;évaluation ?</p>
            <p className="text-sm text-[var(--color-text-secondary)]">Votre progression sera perdue. Vous pourrez recommencer depuis le début.</p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowCancelConfirm(false)}
                className="flex-1 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
              >
                Continuer l&apos;évaluation
              </button>
              <button
                type="button"
                onClick={() => {
                  setExercisesStarted(false);
                  setTimeLeft(null);
                  setStepIdx(exStart);
                  setExerciseKey((k) => k + 1);
                  setShowCancelConfirm(false);
                }}
                className="flex-1 rounded-[var(--radius-lg)] bg-red-500 px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="mb-5 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-fr)]">
          Français · {subject} · {lesson.level}
        </p>
        <div className="flex items-center gap-2">
          <Link
            href={returnUrl}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[var(--color-accent-fr)] transition-colors hover:bg-[var(--color-bg-secondary)]"
            aria-label="Retour au français"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            {lesson.code} — {lesson.title}
          </h1>
        </div>
      </header>

      {/* Progress bar */}
      <div className="mb-6 flex gap-1">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < stepIdx
                ? "bg-[var(--color-accent-fr)]"
                : i === stepIdx
                  ? "bg-[var(--color-accent-fr)] opacity-60"
                  : "bg-[var(--color-border-default)]"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="min-h-[280px]">
        {/* Timer chip — shown when exercises are started */}
        {isExercise && exercisesStarted && timeLeft !== null && (
          <div className="mb-4 flex justify-end">
            <div className={`flex items-center gap-1.5 rounded-[var(--radius-md)] border px-3 py-1.5 font-mono text-lg font-bold tabular-nums ${
              timeLeft < 60
                ? "border-red-300 bg-red-50 text-red-600 dark:border-red-700 dark:bg-red-950/30"
                : "border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
            }`}>
              <span aria-hidden>⏱</span>
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
        )}

        {isTheory ? (
          <TheoryView blocks={currentBlocks!} pivot={pivot} showTrans={showTrans} />
        ) : isMidEx && currentMidEx ? (
          <ExerciseView
            key={exerciseKey}
            exercise={currentMidEx}
            onValidated={handleValidated}
            validateCommand={validateCommand}
            onCanValidateChange={setCanValidate}
          />
        ) : isExercise ? (
          !exercisesStarted ? (
            <div className="flex flex-col items-center justify-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] py-10">
              <p className="text-4xl font-bold tabular-nums text-[var(--color-accent-fr)]">5:00</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Temps disponible pour compléter les exercices</p>
              <p className="text-xs text-[var(--color-text-secondary)]">Les exercices apparaîtront au démarrage du chronomètre.</p>
              <button
                type="button"
                onClick={() => { setExercisesStarted(true); setTimeLeft(5 * 60); }}
                className="mt-2 rounded-[var(--radius-lg)] bg-[var(--color-accent-fr)] px-6 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80"
              >
                Commencer
              </button>
            </div>
          ) : currentExercise ? (
            <ExerciseView
              key={exerciseKey}
              exercise={currentExercise}
              onValidated={handleValidated}
              validateCommand={validateCommand}
              onCanValidateChange={setCanValidate}
            />
          ) : null
        ) : null}
      </div>

      {/* Fixed bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            {/* Back */}
            <button
              type="button"
              onClick={goBack}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Retour
            </button>

            {/* Reset + Validate (exercises only, or mid-exercises) */}
            {(isMidEx || (isExercise && exercisesStarted)) && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Recommencer l'exercice"
                  onClick={resetExercise}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M1 4v6h6" />
                    <path d="M3.51 15a9 9 0 1 0 .49-4" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Valider l'exercice"
                  onClick={() => setValidateCommand((c: number) => c + 1)}
                  disabled={!canValidate}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-fr)] text-white transition-opacity hover:opacity-90 active:scale-90 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </button>
              </div>
            )}

            {/* Next — hidden during exercise start screen */}
            <button
              type="button"
              onClick={goNext}
              className={`flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-fr)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80 ${isExercise && !exercisesStarted ? "invisible" : ""}`}
            >
              {isLast ? (
                <>
                  Terminer
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </>
              ) : (
                <>
                  Suivant
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
        {/* Spacer for bottom nav */}
        <div className="h-[68px]" />
      </div>
    </div>
  );
}

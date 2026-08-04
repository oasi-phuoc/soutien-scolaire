"use client";

import React, { useState, useCallback, useEffect, useMemo, useTransition } from "react";
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
import { AppSelect } from "@/components/ui/AppSelect";
import { markFrenchLessonComplete, setFrenchEvalPending, clearFrenchEvalPending } from "@/lib/progress/french-progress";
import { useTranslation } from "@/components/TranslationProvider";
import { linearSwissGrade, medalFromPercent, PASSING_GRADE } from "@/lib/scoring";
import {
  getExpressionTeachersAction,
  submitExpressionAction,
  type TeacherOption,
} from "@/app/actions/expression";
import {
  buildGrammarWritePromptPayload,
  grammarWriteOriginalText,
} from "@/lib/curriculum/content/francais/grammar-write-submission";
import { EvalRevealContext, useEvalReveal } from "@/lib/eval-reveal-context";
import { EvalGuardSentinel, useEvalNavGuard } from "@/components/EvalNavGuard";
import { EvalAnnounceScreen } from "@/components/ui/EvalAnnounceScreen";
import { EvalFinishButton } from "@/components/ui/EvalFinishButton";
import {
  EvalExerciseResultList,
  EvalExerciseResultRow,
  EvalResultsHint,
  EvalResultsSummary,
} from "@/components/ui/EvalResultsUI";
import { useContentEditor } from "@/components/content-editor/ContentEditorProvider";
import { ContentEditorPanel } from "@/components/content-editor/ContentEditorPanel";
import { GrammarLessonFields } from "@/components/content-editor/GrammarLessonFields";
import { conjugationLessonKey, grammarLessonKey } from "@/lib/content-editor/keys";
import {
  CORRECTION_INLINE_STRIKE,
  CORRECTION_MATCH_WRONG,
} from "@/components/correction-styles";
import { usePrintQuestionLayout } from "@/components/print/PrintExerciseLayoutContext";
import { PrintAnswerLines } from "@/components/print/PrintAnswerLines";
import { scaleCssLength } from "@/components/print/printLength";


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
  evalExercises?: Exercise[];
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

function LiaisonPair({ left, right }: { left: string; right: string }) {
  return (
    <span className="relative inline-flex items-end gap-[0.15em] px-[0.05em] pt-2">
      <svg
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-0 h-2.5 w-full"
        viewBox="0 0 60 12"
        preserveAspectRatio="none"
      >
        <path
          d="M 4 10 Q 30 -2 56 10"
          fill="none"
          stroke="var(--color-accent-fr)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-bold text-[var(--color-accent-fr)]">{left}</span>
      <span className="font-bold text-[var(--color-accent-fr)]">{right}</span>
    </span>
  );
}

function renderInlineMarkup(text: string, useArrow = true): React.ReactNode {
  const parts = text.split(/(\{(?:su|ve|co|a|b|s|li)\}[\s\S]*?\{\/(?:su|ve|co|a|b|s|li)\})/);
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
        const liaisonMatch = part.match(/^\{li\}([\s\S]*?)\|([\s\S]*?)\{\/li\}$/);
        if (accentMatch) return <span key={i} className="font-semibold text-[var(--color-accent-fr)]">{accentMatch[1]}</span>;
        if (strikeMatch) return <span key={i} className="font-semibold line-through text-[var(--color-accent-fr)]">{strikeMatch[1]}</span>;
        if (boldMatch)   return <span key={i} className="font-semibold">{boldMatch[1]}</span>;
        if (sujetMatch)  return <span key={i} className="font-bold underline decoration-yellow-400 decoration-[3px] underline-offset-2">{sujetMatch[1]}</span>;
        if (verbeMatch)  return <span key={i} className="font-bold underline decoration-red-500 decoration-[3px] underline-offset-2">{verbeMatch[1]}</span>;
        if (compMatch)   return <span key={i} className="font-bold underline decoration-green-500 decoration-[3px] underline-offset-2">{compMatch[1]}</span>;
        if (liaisonMatch) return <LiaisonPair key={i} left={liaisonMatch[1]!} right={liaisonMatch[2]!} />;
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

function VerbToggleView({ verbs, negation, buttonCols, pivot, showTrans }: { verbs: VerbToggleVerb[]; negation?: boolean; buttonCols?: number; pivot?: string; showTrans?: boolean }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const verb = verbs[selectedIdx]!;
  const vowelRe = /[aeiouàâæéèêëîïôœùûüÿh]/i;

  const nePrefix = vowelRe.test(verb.radical[0] ?? "") ? "n'" : "ne ";

  return (
    <div className="space-y-3">
      <div
        className={buttonCols ? "grid gap-2" : "grid grid-cols-2 gap-2 sm:grid-cols-4"}
        style={buttonCols ? { gridTemplateColumns: `repeat(${buttonCols}, 1fr)` } : undefined}
      >
        {verbs.map((v, i) => (
          <button
            key={i}
            onClick={() => setSelectedIdx(i)}
            className={`min-h-10 w-full rounded-full px-3 py-1.5 text-center font-medium transition-colors ${buttonCols ? "text-xs" : "text-sm"} ${
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
                  {(() => {
                    const rowRadical = row.radical !== undefined ? row.radical : verb.radical;
                    return rowRadical ? <span className="text-[var(--color-text-primary)]">{rowRadical}</span> : null;
                  })()}
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
      {verb.note && (() => {
        const isRtl = pivot === "ar" || pivot === "fa";
        const useTrans = showTrans && pivot && pivot !== "fr";
        const noteText = useTrans && pivot && verb.noteTrans?.[pivot as "en" | "ar" | "fa" | "ti" | "uk"]
          ? verb.noteTrans[pivot as "en" | "ar" | "fa" | "ti" | "uk"]!
          : verb.note;
        return (
          <div className="rounded-[var(--radius-md)] bg-[var(--color-accent-fr)]/8 px-3 py-2 text-sm text-[var(--color-text-primary)]" lang={useTrans ? pivot : undefined} dir={useTrans && isRtl ? "rtl" : "ltr"}>
            {renderInlineMarkup(noteText)}
          </div>
        );
      })()}
    </div>
  );
}

export function GrammarTheoryView({ blocks, pivot, showTrans }: { blocks: TheoryBlock[]; pivot: string; showTrans: boolean }) {
  const isRtl = pivot === "ar" || pivot === "fa";
  const useTrans = showTrans && pivot !== "fr";

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            const headingText = useTrans && block.trans?.[pivot as keyof typeof block.trans]
              ? block.trans[pivot as keyof typeof block.trans]!
              : block.text;
            return (
              <div key={i}>
                <h2 className={`font-bold ${block.sub ? "text-base" : "text-lg"} ${block.accent ? "text-[var(--color-accent-fr)]" : "text-[var(--color-text-primary)]"}`} lang={useTrans ? pivot : undefined} dir={useTrans && isRtl ? "rtl" : "ltr"}>
                  {headingText}
                </h2>
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
                        <code className="block rounded bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                          ✓ {ex.correct}
                        </code>
                        {ex.wrong && (
                          <code className={`block rounded px-2 py-1 text-xs font-medium ${CORRECTION_INLINE_STRIKE}`}>
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
                className="rounded-[var(--radius-lg)] border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800"
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
            const transH = useTrans ? block.transHeaders?.[pivot as keyof typeof block.transHeaders] : undefined;
            const transR = useTrans ? block.transRows?.[pivot as keyof typeof block.transRows] : undefined;
            const useFixed = Boolean(block.equalCols || block.colWidths?.length);
            return (
              <div key={i} className="space-y-2">
                <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
                  <table className="w-full text-sm" style={useFixed ? { tableLayout: "fixed" } : undefined}>
                    {(block.equalCols || block.colWidths?.length) && (
                      <colgroup>
                        {block.headers.map((_, ci) => (
                          <col
                            key={ci}
                            style={{
                              width: block.colWidths?.[ci]
                                ?? (block.equalCols ? `${100 / block.headers.length}%` : undefined),
                            }}
                          />
                        ))}
                      </colgroup>
                    )}
                    <thead>
                      <tr className="bg-[var(--color-accent-fr)]/15">
                        {block.headers.map((h, hi) => (
                          <th key={hi} className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-[var(--color-accent-fr)]" lang={transH?.[hi] ? pivot : undefined} dir={transH?.[hi] && isRtl ? "rtl" : "ltr"}>
                            {transH?.[hi] ?? h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, ri) => (
                        <tr key={ri} className={ri % 2 === 0 ? "bg-[var(--color-bg-primary)]" : "bg-[var(--color-bg-secondary)]/40"}>
                          {row.map((cell, ci) => {
                            const transCell = transR ? transR[ri]?.[ci] : undefined;
                            const transText = transCell
                              ? (block.pronounGrid && transCell.includes(" → ") ? transCell.split(" → ").slice(1).join(" → ") : transCell)
                              : undefined;
                            return (
                              <td key={ci} className={`px-3 py-2 text-sm text-[var(--color-text-primary)] whitespace-pre-line${block.boldFirstCol && ci === 0 ? " font-semibold" : ""}`} lang={transText ? pivot : undefined} dir={transText && isRtl ? "rtl" : "ltr"}>
                                {block.pronounGrid && !transText ? renderPronounCell(cell) : renderInlineMarkup(transText ?? cell)}
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
            const plainItems = useTrans && block.transItems?.[pivot as keyof typeof block.transItems]
              ? block.transItems[pivot as keyof typeof block.transItems]!
              : block.items;
            return (
              <div key={i} className="space-y-1">
                {block.label && (
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                    {block.label}
                  </p>
                )}
                <ul className="space-y-1.5">
                  {plainItems.map((item, ii) => (
                    <li key={ii} className="space-y-0.5">
                      <div className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]" lang={useTrans ? pivot : undefined} dir={useTrans && isRtl ? "rtl" : "ltr"}>
                        {(block.allBullets || ii > 0) && !(block.noBulletItems?.includes(ii)) && <span className="mt-0.5 shrink-0 text-[var(--color-accent-fr)]">•</span>}
                        <span>{renderInlineMarkup(item)}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );

          case "highlight": {
            const transLabel = useTrans ? block.transLabel?.[pivot as keyof typeof block.transLabel] : undefined;
            const transItems = useTrans ? block.transItems?.[pivot as keyof typeof block.transItems] : undefined;
            const label = transLabel ?? block.label;
            const items = transItems ?? block.items;
            const alignArrows = items.length > 0 && items.every((item) => item.includes(" → "));
            return (
              <div key={i} className="space-y-1.5">
                {label ? (
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-[var(--color-accent-fr)]" lang={transLabel ? pivot : undefined} dir={transLabel && isRtl ? "rtl" : "ltr"}>{label}</p>
                    {false && showTrans && transLabel && (
                      <p className="text-xs font-bold text-[var(--color-text-secondary)]" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                        {transLabel}
                      </p>
                    )}
                  </div>
                ) : null}
                <ul className="space-y-1 pl-3 border-l-2 border-[var(--color-accent-fr)]/30">
                  {items.map((item, ii) => {
                    const skipBullet = (block.noFirstBullet && !item.includes(" → ")) || (block.noBulletItems?.includes(ii) ?? false);
                    if (alignArrows) {
                      const arrowIdx = item.indexOf(" → ");
                      const left = item.slice(0, arrowIdx);
                      const right = item.slice(arrowIdx + 3);
                      return (
                        <li key={ii} className="space-y-0.5">
                          <div
                            className="grid grid-cols-[minmax(7.5rem,max-content)_1.25rem_minmax(0,1fr)] items-baseline gap-x-2 text-sm leading-relaxed text-[var(--color-text-primary)]"
                            lang={transItems?.[ii] ? pivot : undefined}
                            dir={transItems?.[ii] && isRtl ? "rtl" : "ltr"}
                          >
                            <span>{renderInlineMarkup(left, false)}</span>
                            <span className="text-center text-[var(--color-text-secondary)]">→</span>
                            <span>{renderInlineMarkup(right, false)}</span>
                          </div>
                        </li>
                      );
                    }
                    return (
                      <li key={ii} className="space-y-0.5">
                        <div className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]" lang={transItems?.[ii] ? pivot : undefined} dir={transItems?.[ii] && isRtl ? "rtl" : "ltr"}>
                          {!skipBullet && <span className="mt-0.5 shrink-0 text-[var(--color-accent-fr)]">•</span>}
                          <span>{renderInlineMarkup(item, !block.inlineArrows)}</span>
                        </div>
                        {false && showTrans && transItems?.[ii] && (
                          <div className={`flex gap-2 text-xs leading-relaxed text-[var(--color-text-secondary)]${!skipBullet ? " ml-4" : ""}`} lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                            {!skipBullet && <span className="mt-0.5 shrink-0">•</span>}
                            <span>{renderInlineMarkup(transItems?.[ii] ?? "")}</span>
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
                <VerbToggleView verbs={block.verbs} negation={block.negation} buttonCols={block.buttonCols} pivot={pivot} showTrans={showTrans} />
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

          case "illus_cards": {
            const cols = block.cols ?? 4;
            return (
              <div key={i} className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
                {block.items.map((item, wi) => (
                  <div key={wi} className="flex flex-col items-center gap-1">
                    <div
                      className="w-full overflow-hidden rounded-lg bg-[var(--color-bg-secondary)] p-1"
                      dangerouslySetInnerHTML={{ __html: item.svg }}
                    />
                    <p className="text-center text-[10px] font-semibold leading-tight text-[var(--color-accent-fr)]">{item.label}</p>
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

          case "selector":
            return <SelectorBlock key={i} block={block} pivot={pivot} showTrans={showTrans} />;

          default:
            return null;
        }
      })}
    </div>
  );
}

// ── Selector block (interactive verb/rule tabs) ───────────────────────────────

function SelectorBlock({ block, pivot, showTrans }: {
  block: Extract<import("@/lib/curriculum/conjugation-data").TheoryBlock, { type: "selector" }>;
  pivot: string;
  showTrans: boolean;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const cols = block.buttonCols;
  return (
    <div className="space-y-4">
      <div
        className={cols ? "grid gap-2" : "flex flex-wrap gap-2"}
        style={cols ? { gridTemplateColumns: `repeat(${cols}, 1fr)` } : undefined}
      >
        {block.tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-all duration-200 ${cols ? "w-full" : ""} ${
              activeTab === i
                ? "bg-[var(--color-accent-fr)] text-white shadow-sm"
                : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[color-mix(in_oklch,var(--color-accent-fr)_15%,white)] hover:text-[var(--color-accent-fr)]"
            }`}
          >
            {block.labelPrefix ? `${block.labelPrefix} ${tab.label}` : tab.label}
          </button>
        ))}
      </div>
      <div>
        <GrammarTheoryView blocks={block.tabs[activeTab]!.content} pivot={pivot} showTrans={showTrans} />
      </div>
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
  const levelled = a as Array<T & { difficulty?: "A1" | "A2" | "B1" }>;
  if (levelled.some((item) => item?.difficulty)) {
    const groups = {
      A1: levelled.filter((item) => item.difficulty === "A1"),
      A2: levelled.filter((item) => item.difficulty === "A2"),
      B1: levelled.filter((item) => item.difficulty === "B1"),
    };
    const order: Array<keyof typeof groups> = ["A1", "A2", "A1", "A2", "B1"];
    const balanced: T[] = [];
    while (groups.A1.length || groups.A2.length || groups.B1.length) {
      for (const level of order) {
        const item = groups[level].shift();
        if (item) balanced.push(item);
      }
    }
    const untagged = levelled.filter((item) => !item.difficulty);
    return [...balanced, ...untagged];
  }
  return a;
}

/**
 * Tire `size` items du pool.
 * Si les items ont un `gabaritId`, un même gabarit n'apparaît qu'une fois
 * (pronom / variante tirés au hasard parmi les variantes du gabarit).
 * Si `ensureKeys` est fourni, garantit au moins un item par clé (via keyFn),
 * puis complète au hasard et mélange le résultat.
 */
function sampleFromPool<T extends { gabaritId?: string; difficulty?: "A1" | "A2" | "B1" }>(
  pool: T[],
  size: number,
  ensureKeys?: string[],
  keyFn?: (item: T) => string,
): T[] {
  const norm = (s: string) => s.trim().toLowerCase();

  const baseSample = (): T[] => {
    const hasGabarits = pool.some((item) => item.gabaritId);
    if (!hasGabarits) return shuffle(pool).slice(0, size);

    const byId = new Map<string, T[]>();
    for (const item of pool) {
      const id = item.gabaritId ?? `__solo_${byId.size}`;
      const list = byId.get(id);
      if (list) list.push(item);
      else byId.set(id, [item]);
    }
    const pickedIds = shuffle([...byId.keys()]).slice(0, size);
    return pickedIds.map((id) => {
      const variants = byId.get(id)!;
      return variants[Math.floor(Math.random() * variants.length)]!;
    });
  };

  if (!ensureKeys?.length || !keyFn) return baseSample();

  const remaining = shuffle([...pool]);
  const picked: T[] = [];
  for (const key of ensureKeys.map(norm)) {
    const idx = remaining.findIndex((item) => norm(keyFn(item)) === key);
    if (idx >= 0) picked.push(remaining.splice(idx, 1)[0]!);
  }
  while (picked.length < size && remaining.length > 0) {
    picked.push(remaining.shift()!);
  }
  return shuffle(picked);
}

function QcmExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "qcm" }>;
  onValidated: (correct: number, total: number) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const fallback = exercise.poolSize ?? (exercise.pool?.length ? 5 : exercise.items.length || 5);
  const { questionCount, listClass, lengthScale } = usePrintQuestionLayout(fallback);
  const [items] = useState<typeof exercise.items>(() => {
    const raw = exercise.pool && exercise.pool.length > 0
      ? sampleFromPool(
          exercise.pool,
          questionCount,
          exercise.poolEnsure,
          (item) => item.choices[item.correctIdx] ?? "",
        )
      : exercise.items.slice(0, questionCount);
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
  const revealCorrection = useEvalReveal();

  /** Largeur uniforme des boutons (contenu le plus long + marge, × Longueurs). */
  const choiceWidthCh = useMemo(() => {
    const longest = items.reduce(
      (max, it) => Math.max(max, ...it.choices.map((c) => c.length)),
      0,
    );
    // +5 ch : padding horizontal + border-2 + lettres larges (m, w…) — évite le rognage
    return Math.max(6, Math.ceil((Math.max(longest, 3) + 5) * lengthScale));
  }, [items, lengthScale]);

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
    const correctCount = items.filter(
      (item, i) => selected[i] === item.correctIdx,
    ).length;
    onValidated(correctCount, items.length);
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
  const translatedInstruction = showTrans
    ? exercise.transInstruction?.[pivot as keyof typeof exercise.transInstruction]
    : undefined;

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm text-[var(--color-text-secondary)]" lang={translatedInstruction ? pivot : undefined} dir={translatedInstruction && isRtl ? "rtl" : "ltr"}>{translatedInstruction ?? exercise.instruction}</p>
      </div>
      <div className={listClass}>
      {items.map((item: QcmItem, i) => {
        const hasInlineToggle = exercise.toggleChoices && item.sentence.includes(" → ");
        const arrowPos = hasInlineToggle ? item.sentence.indexOf(" → ") : -1;
        const sentLine1 = hasInlineToggle ? item.sentence.slice(0, arrowPos) : item.sentence;
        const sentLine2 = hasInlineToggle ? item.sentence.slice(arrowPos + 3) : "";

        const choiceBtnClass = (ci: number, opts?: { fixed?: boolean; compact?: boolean }) => {
          const isSelected = selected[i] === ci;
          const isCorrect = ci === item.correctIdx;
          // Contour fin au repos, épais à la sélection ; print-choice-btn pour l'impression
          let cls =
            "print-choice-btn box-border rounded-md px-3 text-center font-medium transition-[background-color,color] whitespace-nowrap overflow-visible " +
            (opts?.compact ? "py-1.5 text-xs " : "py-2 text-sm ") +
            // border-2 constant : évite le rétrécissement du texte à la sélection
            (isSelected ? "print-choice-btn--selected border-2 " : "border-2 ");
          if (!validated || !revealCorrection) {
            cls += isSelected
              ? "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]"
              : "border-[var(--color-accent-fr)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent-fr)]/5";
          } else {
            const userWrong = selected[i] !== item.correctIdx;
            if (isSelected && !isCorrect) {
              cls += "border-amber-500 bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]";
            } else if (!isSelected && isCorrect && userWrong) {
              cls += "border-amber-500 bg-transparent text-amber-500 font-semibold";
            } else {
              cls += isSelected
                ? "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]"
                : "border-[var(--color-accent-fr)]/50 bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] opacity-60";
            }
          }
          return cls;
        };

        const choiceStyle = { width: `${choiceWidthCh}ch`, minWidth: `${choiceWidthCh}ch` } as const;

        if (hasInlineToggle) {
          const inlineGroup = (
            <span className="inline-flex flex-wrap items-center gap-1.5 align-middle">
              {item.choices.map((c, ci) => (
                <button key={ci} type="button" style={choiceStyle} className={choiceBtnClass(ci, { fixed: true })} onClick={() => select(i, ci)} disabled={validated}>
                  {c}
                </button>
              ))}
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

        // ── Stacked SVG layout: num | image | separate choice buttons ─────────
        if (exercise.svgChoiceLayout === "stacked" && item.svg) {
          return (
            <div key={i} className="flex items-center gap-2">
              <span className="w-5 shrink-0 text-xs font-semibold text-[var(--color-accent-fr)]">{i + 1}.</span>
              <div
                className="w-16 h-16 shrink-0 overflow-hidden rounded-lg bg-[var(--color-bg-secondary)] p-1"
                dangerouslySetInnerHTML={{ __html: item.svg }}
              />
              <div className="flex flex-1 flex-col gap-1">
                {item.choices.map((choice, ci) => (
                  <button key={ci} type="button" style={choiceStyle} className={choiceBtnClass(ci, { compact: true })} onClick={() => select(i, ci)} disabled={validated}>
                    {choice}
                  </button>
                ))}
              </div>
            </div>
          );
        }

        return (
          <div key={i} className={exercise.inlineChoices ? "flex items-center gap-3" : "space-y-2"}>
            {item.svg ? (
              <div className="flex items-start gap-3">
                <span className="shrink-0 text-sm font-medium text-[var(--color-accent-fr)]">{i + 1}.</span>
                <div
                  className="w-20 h-20 shrink-0 overflow-hidden rounded-lg bg-[var(--color-bg-secondary)] p-1.5"
                  dangerouslySetInnerHTML={{ __html: item.svg }}
                />
                {item.sentence && (
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">{renderFillSentence(item.sentence)}</p>
                )}
              </div>
            ) : (
              <p className={`text-sm font-medium text-[var(--color-text-primary)]${exercise.inlineChoices ? " flex-1" : ""}`}>
                <span className="text-[var(--color-accent-fr)]">{i + 1}.</span> {renderFillSentence(item.sentence)}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {item.choices.map((choice, ci) => (
                <button
                  key={ci}
                  type="button"
                  style={choiceStyle}
                  className={choiceBtnClass(ci)}
                  onClick={() => select(i, ci)}
                  disabled={validated}
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}

// ── Fill exercise ─────────────────────────────────────────────────────────────

function renderAccentParentheses(text: string) {
  return text.split(/(\([^)]+\))/g).map((chunk, ci) =>
    chunk.startsWith("(") && chunk.endsWith(")") ? (
      <strong key={ci} className="font-bold text-[var(--color-accent-fr)]">
        {chunk}
      </strong>
    ) : (
      <React.Fragment key={ci}>{chunk}</React.Fragment>
    ),
  );
}

function renderFillSentence(sentence: string) {
  const parts = sentence.split("___");
  if (parts.length <= 1) return <>{renderAccentParentheses(sentence)}</>;
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {renderAccentParentheses(part)}
          {i < parts.length - 1 && (
            <span className="mx-0.5 inline-block w-10 border-b-2 border-[var(--color-accent-fr)] align-bottom" />
          )}
        </React.Fragment>
      ))}
    </>
  );
}

function normalizeAnswer(s: string): string {
  // Casse ignorée ; accents obligatoires (achète ≠ achete).
  let t = s
    .trim()
    .toLowerCase()
    .replace(/['\u2019\u2018]/g, "'")
    .replace(/[.!?…,;:]+$/g, "") // point final souvent saisi par l'élève
    .replace(/\s+/g, " ")
    .trim();
  // Présent progressif : « de écouter » ≡ « d'écouter »
  t = t
    .replace(/\ben train de ([aeiouyhàâäáéèêëíìîïóòôöúùûüæœ])/gi, "en train d'$1")
    .replace(/\ben train d'\s+/g, "en train d'");
  return t;
}

const FILL_SUBJECT_PRONOUNS = new Set([
  "je",
  "j'",
  "tu",
  "il",
  "elle",
  "on",
  "nous",
  "vous",
  "ils",
  "elles",
  "c'",
]);
const FILL_REFLEXIVES = new Set(["me", "te", "se", "nous", "vous", "m'", "t'", "s'"]);

/**
 * Radical visible avant le blanc (après pronom sujet / réfléchi).
 * Ex. « Il commenc » → « commenc » ; « Il » → null ; « Je me l » → « l ».
 */
function visibleFillStem(rawBefore: string): string | null {
  // Segment après « → » (ex. pluriel) : seul le pronom cible compte.
  const segment = rawBefore.includes("→")
    ? (rawBefore.split("→").pop() ?? "")
    : rawBefore;
  const t = normalizeAnswer(segment.replace(/→/g, " "));
  if (!t) return null;

  // Élision collée en tête : j'envo, m'appel…
  const gluedHead = t.match(/^(j'|c'|m'|t'|s')(.+)$/);
  if (gluedHead && t.indexOf(" ") === -1) {
    const head = gluedHead[1]!;
    const rest = gluedHead[2]!;
    if (FILL_SUBJECT_PRONOUNS.has(head) || FILL_REFLEXIVES.has(head)) {
      return rest || null;
    }
  }

  const words = t.split(" ").filter(Boolean);
  let i = 0;
  if (words[i] && FILL_SUBJECT_PRONOUNS.has(words[i]!)) i++;
  if (words[i] && FILL_REFLEXIVES.has(words[i]!)) {
    i++;
  } else if (words[i]) {
    // « je m'appel » → mot « m'appel »
    const glued = words[i]!.match(/^(m'|t'|s')(.+)$/);
    if (glued) {
      const rest = [glued[2], ...words.slice(i + 1)].join("");
      return rest || null;
    }
  }
  const stem = words.slice(i).join("");
  return stem || null;
}

/**
 * Compare une réponse fill (insensible à la casse ; accents obligatoires).
 * Accepte :
 * - la réponse exacte demandée dans le blanc (« est », « e », « achète ») ;
 * - la forme verbale complète si un radical est déjà affiché
 *   (« commence » pour « Il commenc___ », pas « il commence ») ;
 * - la même phrase une fois le blanc rempli.
 * N'accepte pas de resaisir le pronom sujet déjà affiché (« il est » pour « Il ___ »).
 */
function fillAnswerMatches(user: string, expected: string, sentence: string): boolean {
  const u = normalizeAnswer(user);
  const e = normalizeAnswer(expected);
  if (!e) return !u;
  if (u === e) return true;

  const [beforePart = "", afterPart = ""] = sentence.split("___");
  const rawBefore = beforePart.replace(/\([^)]*\)/g, "");
  const rawAfter = afterPart.replace(/\([^)]*\)/g, "");

  // Même phrase complète (casse / ponctuation ; accents conservés)
  if (
    normalizeAnswer(`${rawBefore}${user}${rawAfter}`) ===
    normalizeAnswer(`${rawBefore}${expected}${rawAfter}`)
  ) {
    return true;
  }

  // Radical visible : accepter radical + terminaison (= forme complète), sans le pronom.
  const stem = visibleFillStem(rawBefore);
  if (!stem) return false;
  return u === normalizeAnswer(`${stem}${e}`);
}

/**
 * Correction fill — même pattern que le vocabulaire (`ExFillSentences`) :
 * trait ambre seul, sans fond ; réponse élève + bonne réponse empilées.
 * Si la réponse est juste, on laisse l'input tel quel (disabled).
 */
function WrongFillCorrection({
  user,
  expected,
  style,
  className = "",
  longAnswer = false,
}: {
  user: string;
  expected: string;
  style?: React.CSSProperties;
  className?: string;
  longAnswer?: boolean;
}) {
  return (
    <span
      style={style}
      className={
        `inline-flex h-8 flex-col items-center justify-center rounded-none border-0 border-b-2 border-amber-500 align-middle mx-1 ` +
        (longAnswer ? "min-h-8 w-full items-start justify-center px-2 py-1 " : "") +
        className
      }
    >
      <span
        className={
          "text-[10px] leading-none text-[var(--color-text-secondary)]" +
          (longAnswer ? " w-full break-words" : "")
        }
      >
        {user.trim() || "—"}
      </span>
      <span
        className={
          "text-xs font-bold leading-none text-amber-600" +
          (longAnswer ? " w-full break-words" : "")
        }
      >
        {expected}
      </span>
    </span>
  );
}

function FillExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "fill" }>;
  onValidated: (correct: number, total: number) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const fallback = exercise.poolSize ?? (exercise.pool?.length ? 5 : exercise.items.length || 5);
  const { questionCount, columns, listClass, lengthScale } = usePrintQuestionLayout(fallback);
  const [items] = useState<typeof exercise.items>(() => {
    if (exercise.pool && exercise.pool.length > 0) {
      return sampleFromPool(
        exercise.pool,
        questionCount,
        exercise.poolEnsure,
        (item) => item.answer,
      );
    }
    return exercise.items.slice(0, questionCount);
  });
  const [inputs, setInputs] = useState<string[]>(
    () => new Array(items.length).fill(""),
  );
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

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
    const correctCount = items.filter(
      (item: FillItem, i) =>
        fillAnswerMatches(inputs[i] ?? "", item.answer, item.sentence),
    ).length;
    onValidated(correctCount, items.length);
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
  const translatedInstruction = showTrans
    ? exercise.transInstruction?.[pivot as keyof typeof exercise.transInstruction]
    : undefined;

  const twoCols = columns >= 2 || /^Exercice\s*[12]\b/i.test(exercise.title);

  const renderTextWithVerbHint = (s: string) =>
    s.split(/(\([^)]+\))/g).map((chunk, ci) =>
      chunk.startsWith("(") && chunk.endsWith(")") ? (
        <strong key={ci} className="font-bold text-[var(--color-accent-fr)]">
          {chunk}
        </strong>
      ) : (
        <React.Fragment key={ci}>{chunk}</React.Fragment>
      ),
    );

  const widthClassToRem = (cls: string): string => {
    if (cls === "w-16") return "4rem";
    if (cls === "w-28") return "7rem";
    if (cls === "w-[10.5rem]") return "10.5rem";
    if (cls === "w-[22rem]") return "22rem";
    if (cls === "w-[32rem]") return "32rem";
    const m = cls.match(/^w-\[([\d.]+rem)\]$/);
    return m?.[1] ?? "7rem";
  };

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm text-[var(--color-text-secondary)]" lang={translatedInstruction ? pivot : undefined} dir={translatedInstruction && isRtl ? "rtl" : "ltr"}>{translatedInstruction ?? exercise.instruction}</p>
      </div>
      <div className={columns >= 2 ? listClass : twoCols ? "grid gap-x-8 gap-y-4 lg:grid-cols-2" : listClass}>
      {items.map((item: FillItem, i) => {
        const userAnswer = inputs[i] ?? "";
        const correct = fillAnswerMatches(userAnswer, item.answer, item.sentence);

        // Detect trailing parenthetical hint: "sentence text (hint)"
        const parenMatch = item.sentence.match(/^(.*?)\s+(\([^)]+\))\s*$/);
        const rawSentence = parenMatch ? parenMatch[1]! : item.sentence;
        const parenHint = parenMatch ? parenMatch[2]! : null;

        // Detect newline split first, then arrow split (only when no newline/parenthetical)
        const nlIdx = rawSentence.indexOf("\n");
        const arrowIdx = nlIdx < 0 ? rawSentence.indexOf(" → ") : -1;
        const sentLine1 = nlIdx >= 0 ? rawSentence.slice(0, nlIdx) : arrowIdx >= 0 ? rawSentence.slice(0, arrowIdx) : rawSentence;
        const sentLine2 = nlIdx >= 0 ? rawSentence.slice(nlIdx + 1) : arrowIdx >= 0 ? "→ " + rawSentence.slice(arrowIdx + 3) : null;

        const inputWidthCls = exercise.inputWidth ?? "w-28";
        const baseRem = widthClassToRem(inputWidthCls);
        // Style inline : fiable même si la classe Tailwind arbitraire n'est pas générée.
        const inputWidthStyle = {
          width: scaleCssLength(baseRem, lengthScale),
          maxWidth: "100%",
        };
        const longAnswer = (item.answer?.length ?? 0) >= 14 || parseFloat(baseRem) >= 20;

        const inputEl =
          validated && revealCorrection && !correct ? (
            <WrongFillCorrection
              user={userAnswer}
              expected={item.answer}
              style={inputWidthStyle}
              longAnswer={longAnswer}
            />
          ) : (
          <input
            type="text"
            value={userAnswer}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(i, e.target.value)}
            disabled={validated}
            data-print-answer=""
            style={inputWidthStyle}
            className={`inline-block h-8 rounded-none border-0 border-b-2 border-[var(--color-accent-fr)]/60 bg-transparent px-2 text-sm font-semibold text-[var(--color-text-primary)] outline-none mx-1 transition-colors focus:border-[var(--color-accent-fr)] disabled:opacity-100 ${
              longAnswer ? "text-left" : "text-center"
            }`}
          />
        );

        const renderParts = (s: string) =>
          s.split("___").map((part, pi, arr) => (
            <React.Fragment key={pi}>
              {renderTextWithVerbHint(part)}
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
                  {" "}
                  <strong className="font-bold text-[var(--color-accent-fr)]">{parenHint}</strong>
                </>
              )}
              {sentLine2 !== null && (
                <>
                  <br />
                  <span className={`ml-4 ${longAnswer ? "mt-1 flex w-[calc(100%-1rem)] flex-wrap items-center gap-1" : ""}`}>
                    {renderParts(sentLine2)}
                  </span>
                </>
              )}
            </p>
          </div>
        );
      })}
      </div>
    </div>
  );
}

// ── Fill-select exercise ──────────────────────────────────────────────────────

const FILL_SELECT_LETTERS = "abcdefghijklmnopqrstuvwxyz";

function FillSelectExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "fill_select" }>;
  onValidated: (correct: number, total: number) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const fallback = exercise.poolSize ?? (exercise.pool?.length ? 5 : exercise.items.length || 5);
  const { questionCount, listClass } = usePrintQuestionLayout(fallback);
  const [items] = useState<FillItem[]>(() => {
    if (exercise.pool && exercise.pool.length > 0) {
      return sampleFromPool(
        exercise.pool,
        questionCount,
        exercise.poolEnsure,
        (item) => item.answer,
      );
    }
    return exercise.items.slice(0, questionCount);
  });
  const [selected, setSelected] = useState<string[]>(() => new Array(items.length).fill(""));
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();
  const letterSelect = exercise.letterSelect ?? false;

  // In letterSelect mode, selected[i] is a letter ("a","b"…); otherwise it's the word itself.
  function correctLetterForItem(item: FillItem): string {
    const idx = exercise.wordBank.findIndex(w => normalizeAnswer(w) === normalizeAnswer(item.answer));
    return FILL_SELECT_LETTERS[idx] ?? "";
  }

  function doValidate() {
    if (validated) return;
    setValidated(true);
    const correctCount = items.filter((item, i) => {
      if (letterSelect) return (selected[i] ?? "") === correctLetterForItem(item);
      return normalizeAnswer(selected[i] ?? "") === normalizeAnswer(item.answer);
    }).length;
    onValidated(correctCount, items.length);
  }

  useEffect(() => {
    if (validateCommand > 0) doValidate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  useEffect(() => {
    onCanValidateChange(!validated);
  }, [validated, onCanValidateChange]);

  const pivot = usePivotLang();
  const { showPivot: showTrans } = useTranslation();
  const isRtl = pivot === "ar" || pivot === "fa";
  const translatedInstruction = showTrans
    ? exercise.transInstruction?.[pivot as keyof typeof exercise.transInstruction]
    : undefined;

  return (
    <div>
      <p className="mb-3 text-xs text-[var(--color-text-secondary)]" lang={translatedInstruction ? pivot : undefined} dir={translatedInstruction && isRtl ? "rtl" : "ltr"}>
        {translatedInstruction ?? exercise.instruction}
      </p>

      {!exercise.hideWordBank && (
        <>
          {/* Word bank — plain lettered list, no border */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            {exercise.wordBank.map((word, wi) => (
              <div key={wi} className="flex items-baseline">
                <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-fr)]">{FILL_SELECT_LETTERS[wi]}.</span>
                <span className="text-sm text-[var(--color-text-primary)]">{word}</span>
              </div>
            ))}
          </div>
          <hr className="mt-3 border-[var(--color-border-default)]" />
          <div className="mb-4" />
        </>
      )}

      {letterSelect ? (
        // ── Letter-select mode (like vocab Ex5): sentence on left, letter select on right ──
        <div className={listClass}>
          {items.map((item, i) => {
            const userLetter = selected[i] ?? "";
            const correctLetter = correctLetterForItem(item);
            const wrongField = validated && revealCorrection && userLetter !== correctLetter;
            const sentDisplay = item.sentence.replace("___", "___");

            return (
              <div key={i} className="flex items-center gap-2">
                <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
                <p className="flex-1 text-sm text-[var(--color-text-primary)]">{sentDisplay}</p>
                <div className="shrink-0">
                  {wrongField ? (
                    <WrongFillCorrection
                      user={userLetter}
                      expected={correctLetter}
                      className="!mx-0 w-20"
                    />
                  ) : (
                    <AppSelect
                      value={userLetter}
                      onChange={(v) => {
                        if (validated) return;
                        setSelected((prev) => prev.map((s, j) => (j === i ? v : s)));
                      }}
                      options={exercise.wordBank.map((_, wi) => ({
                        value: FILL_SELECT_LETTERS[wi]!,
                        label: FILL_SELECT_LETTERS[wi]!,
                      }))}
                      placeholder=""
                      emptyOption={{ value: "", label: "" }}
                      disabled={validated}
                      size="sm"
                      className="w-20"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // ── Word-select mode (like vocab Ex6): select inline in sentence ──
        <div className={listClass}>
          {items.map((item, i) => {
            const userAnswer = selected[i] ?? "";
            const correct = normalizeAnswer(userAnswer) === normalizeAnswer(item.answer);
            const wrongField = validated && revealCorrection && !correct;
            const [before, after] = item.sentence.split("___");

            const selectEl = wrongField ? (
              <WrongFillCorrection
                user={userAnswer}
                expected={item.answer}
                className="w-28"
              />
            ) : (
              <AppSelect
                value={userAnswer}
                onChange={(v) => {
                  if (validated) return;
                  setSelected((prev) => prev.map((s, j) => (j === i ? v : s)));
                }}
                options={exercise.wordBank.map((w) => ({ value: w, label: w }))}
                placeholder=""
                emptyOption={{ value: "", label: "" }}
                disabled={validated}
                size="sm"
                className="mx-1 inline-block w-28"
              />
            );

            return (
              <div key={i} className="text-sm">
                <span className="mr-2 font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
                <span className="text-[var(--color-text-primary)]">{before}</span>
                {selectEl}
                <span className="text-[var(--color-text-primary)]">{after}</span>
              </div>
            );
          })}
        </div>
      )}
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
  onValidated: (correct: number, total: number) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const { questionCount, listClass } = usePrintQuestionLayout(exercise.clocks.length);
  const [clocks] = useState(() => exercise.clocks.slice(0, questionCount));
  const [inputs, setInputs] = useState<string[]>(
    () => new Array(clocks.length).fill(""),
  );
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

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
    const correctCount = clocks.filter(
      (clk, i) => normalizeAnswer(inputs[i] ?? "") === normalizeAnswer(clk.answer),
    ).length;
    onValidated(correctCount, clocks.length);
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
      <div className={listClass === "space-y-4" ? "grid grid-cols-2 gap-3 sm:grid-cols-4" : listClass}>
        {clocks.map((clk, i) => {
          const userAnswer = inputs[i] ?? "";
          const correct = normalizeAnswer(userAnswer) === normalizeAnswer(clk.answer);
          return (
            <div key={i} className="flex flex-col items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] p-2">
              <AnalogClock h={clk.h} m={clk.m} size={76} />
              <p className="text-xs font-bold text-[var(--color-text-secondary)]">{clk.label}</p>
              {validated && revealCorrection && !correct ? (
                <WrongFillCorrection
                  user={userAnswer}
                  expected={clk.answer}
                  className="!mx-0 w-full"
                />
              ) : (
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(i, e.target.value)}
                  disabled={validated}
                  placeholder="..."
                  className="w-full rounded-none border-0 border-b-2 border-[var(--color-accent-fr)]/60 bg-transparent px-2 py-1 text-center text-xs font-semibold text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent-fr)] disabled:opacity-100"
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
  "text-violet-600",
  "text-sky-600",
  "text-rose-600",
  "text-amber-600",
  "text-emerald-600",
  "text-fuchsia-600",
];
const MATCH_BG = [
  "bg-violet-100",
  "bg-sky-100",
  "bg-rose-100",
  "bg-amber-100",
  "bg-emerald-100",
  "bg-fuchsia-100",
];
const LETTERS = "abcdefghijklmnopqrstuvwxyz";

function MatchExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "match" }>;
  onValidated: (correct: number, total: number) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const fallback = exercise.poolSize ?? (exercise.pool?.length ? 8 : exercise.pairs.length);
  const { questionCount } = usePrintQuestionLayout(fallback);
  const [pairs] = useState<MatchPair[]>(() => {
    const raw = exercise.pool && exercise.pool.length > 0
      ? shuffle(exercise.pool).slice(0, questionCount)
      : exercise.pairs.slice(0, questionCount);
    return raw;
  });
  const [rightItems] = useState<{ pair: MatchPair; origIdx: number }[]>(() =>
    shuffle(pairs.map((p, i) => ({ pair: p, origIdx: i }))),
  );
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  // connections: Map<leftIdx → rightSlotIdx>
  const [connections, setConnections] = useState<Map<number, number>>(new Map());
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  useEffect(() => {
    onCanValidateChange(!validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated]);

  useEffect(() => {
    if (validateCommand > 0 && !validated) {
      setValidated(true);
      const correctCount = pairs.filter((pair, li) => {
        const ri = connections.get(li);
        return ri !== undefined && rightItems[ri]?.pair.right === pair.right;
      }).length;
      onValidated(correctCount, pairs.length);
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
          if (validated && revealCorrection && isConnected) {
            isCorrect = rightItems[ri!]?.pair.right === pair.right;
          }

          // Left cell
          let leftCls = "flex items-center gap-2 rounded-[var(--radius-md)] border px-3 py-2 text-sm font-medium transition-colors cursor-pointer ";
          if (validated && revealCorrection) {
            leftCls += isCorrect
              ? `border-current ${MATCH_COLORS[colorIdx]} ${MATCH_BG[colorIdx]}`
              : isConnected
                ? CORRECTION_MATCH_WRONG
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
              ? validated && revealCorrection
                ? isCorrect ? `bg-current ${MATCH_COLORS[colorIdx]}` : "bg-amber-500"
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
          if (validated && revealCorrection && isConnected) {
            isCorrect = pair.right === pairs[connectingLeft!]?.right;
          }

          let cls = "flex items-center gap-2 rounded-[var(--radius-md)] border px-3 py-2 text-sm font-medium transition-colors ";
          if (validated && revealCorrection) {
            cls += isCorrect
              ? `border-current cursor-pointer ${MATCH_COLORS[colorIdx]} ${MATCH_BG[colorIdx]}`
              : isConnected
                ? CORRECTION_MATCH_WRONG
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
              {validated && revealCorrection && isConnected && !isCorrect && (
                <span className="shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-amber-600" aria-hidden><path d="M18 6L6 18M6 6l12 12"/></svg>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {validated && revealCorrection && (
        <div className="space-y-1 pt-1">
          {pairs.map((pair, li) => {
            const ri = connections.get(li);
            const isCorrect = ri !== undefined && rightItems[ri]?.pair.right === pair.right;
            if (isCorrect) return null;
            return (
              <p key={li} className="text-xs text-emerald-600">
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

function hasErVerbForm(text: string, verb: string): boolean {
  const stem = verb.endsWith("er") ? verb.slice(0, -2) : verb;
  const esc = stem.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`\\b${esc}(ent|e?ons|ez|es|é|e|er)\\b`, "i");
  const escVerb = verb.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return re.test(text) || new RegExp(`\\b${escVerb}\\b`, "i").test(text);
}

function WriteExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
  isEval = false,
  onWriteAnswers,
}: {
  exercise: Extract<Exercise, { type: "write" }>;
  onValidated: (correct: number, total: number) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
  /** En évaluation : pas de points auto, réponses transmises au parent pour envoi professeur. */
  isEval?: boolean;
  onWriteAnswers?: (payload: { prompts: string[]; texts: string[]; instruction: string }) => void;
}) {
  const fallback = exercise.verbPoolSize ?? exercise.promptPoolSize ?? exercise.prompts?.length ?? 5;
  const { questionCount, listClass, isPrint, fullLineCount } = usePrintQuestionLayout(fallback);
  const [activeVerbs] = useState<string[]>(() => {
    if (!exercise.verbPool?.length) return [];
    return shuffle([...exercise.verbPool]).slice(0, questionCount);
  });
  const [[resolvedWriteImage, displayedPrompts]] = useState<[string | null, string[]]>(() => {
    if (exercise.imagePool?.length) {
      const group = exercise.imagePool[Math.floor(Math.random() * exercise.imagePool.length)]!;
      return [group.image, shuffle([...group.promptPool]).slice(0, questionCount)];
    }
    if (exercise.promptPool?.length) {
      return [null, shuffle([...exercise.promptPool]).slice(0, questionCount)];
    }
    if (exercise.levelPromptPools) {
      const levelled = (Object.entries(exercise.levelPromptPools) as Array<["A1" | "A2" | "B1", string[]]>)
        .flatMap(([difficulty, prompts]) => prompts.map((prompt) => ({ prompt, difficulty })));
      return [null, shuffle(levelled).slice(0, questionCount).map((item) => item.prompt)];
    }
    return [null, (exercise.prompts ?? []).slice(0, questionCount)];
  });
  const promptCount = activeVerbs.length > 0 ? activeVerbs.length : displayedPrompts.length;
  const [inputs, setInputs] = useState<string[]>(() => new Array(promptCount).fill(""));
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();
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
        if (isEval) {
          const prompts = Array.from({ length: promptCount }, (_, i) =>
            activeVerbs[i] ? `(${activeVerbs[i]})` : (displayedPrompts[i] ?? `Phrase ${i + 1}`),
          );
          onWriteAnswers?.({ prompts, texts: [...snapshot], instruction: exercise.instruction });
        }
        onValidated(0, promptCount);
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
          if (isEval) {
            const prompts = Array.from({ length: promptCount }, (_, i) =>
              activeVerbs[i] ? `(${activeVerbs[i]})` : (displayedPrompts[i] ?? `Phrase ${i + 1}`),
            );
            onWriteAnswers?.({ prompts, texts: [...snapshot], instruction: exercise.instruction });
          }
          onValidated(0, promptCount);
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
        <div className="fixed bottom-24 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-xl bg-zinc-800 px-4 py-3 text-sm text-white shadow-xl">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-amber-400" aria-hidden>
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Correction indisponible pour le moment
          <button onClick={() => setApiError(false)} className="ml-1 opacity-60 hover:opacity-100" aria-label="Fermer">✕</button>
        </div>
      )}

      <p className="whitespace-pre-line text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>

      {resolvedWriteImage && (
        <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={resolvedWriteImage} alt="Description" className="w-full object-contain max-h-64" />
        </div>
      )}

      {checking && (
        <p className="animate-pulse text-xs text-[var(--color-text-secondary)]">Correction en cours…</p>
      )}

      <div className={listClass}>
      {Array.from({ length: promptCount }, (_, i) => {
        const perVerb = activeVerbs[i];
        const ltErrors = grammarErrors[i] ?? [];
        const inputText = (inputs[i] ?? "").trim();
        const verbOk = inputText.length <= 2
          ? true
          : perVerb
            ? hasErVerbForm(inputText, perVerb)
            : exercise.verb
              ? hasVerb(inputText, exercise.verb)
              : true;
        const isClean = validated && revealCorrection && !checking && ltErrors.length === 0 && inputText.length > 2 && verbOk;

        return (
          <div key={i} className={isPrint && exercise.promptLayout === "stacked" ? undefined : "space-y-1"}>
            {exercise.promptLayout === "stacked" ? (
              <>
                {(() => {
                  const raw = perVerb ? `(${perVerb})` : (displayedPrompts[i] ?? "");
                  const arrowSplit = raw.match(/^(.*?)\s*→\s*(.*)$/);
                  const line1 = arrowSplit ? arrowSplit[1]!.trim() : raw;
                  const line2Rest = arrowSplit ? arrowSplit[2]!.trim() : null;
                  const showArrow = Boolean(arrowSplit);
                  const answerEl = isPrint ? (
                    <PrintAnswerLines count={fullLineCount} />
                  ) : (
                    <input
                      type="text"
                      value={inputs[i] ?? ""}
                      onChange={(e) => setInput(i, e.target.value)}
                      disabled={validated}
                      className={`w-full rounded-none border-0 border-b-2 bg-transparent px-0 py-1.5 text-sm text-[var(--color-text-primary)] outline-none transition-colors disabled:opacity-70 ${
                        isClean
                          ? "border-emerald-400"
                          : "border-[var(--color-accent-fr)]/60 focus:border-[var(--color-accent-fr)]"
                      }`}
                    />
                  );
                  return (
                    <>
                      <p className="text-sm font-medium text-[var(--color-text-primary)]">
                        <span className={`font-medium ${isClean ? "text-emerald-500" : "text-[var(--color-accent-fr)]"}`}>{i + 1}.</span>{" "}
                        {line1}
                      </p>
                      {showArrow ? (
                        <div className="ml-4 flex items-center gap-2">
                          <span className="shrink-0 text-sm font-medium text-[var(--color-text-primary)]">
                            →{line2Rest ? ` ${line2Rest}` : ""}
                          </span>
                          <div className="min-w-0 flex-1">{answerEl}</div>
                        </div>
                      ) : (
                        answerEl
                      )}
                    </>
                  );
                })()}
              </>
            ) : (
              <div className="flex items-center gap-2">
                <span className={`shrink-0 text-sm font-medium ${isClean ? "text-emerald-500" : "text-[var(--color-accent-fr)]"}`}>
                  {i + 1}.
                </span>
                {perVerb && (
                  <span className="w-28 shrink-0 text-sm font-bold text-[var(--color-text-primary)]">
                    ({perVerb})
                  </span>
                )}
                <input
                  type="text"
                  value={inputs[i] ?? ""}
                  onChange={(e) => setInput(i, e.target.value)}
                  disabled={validated}
                  className={`flex-1 rounded-xl border bg-transparent px-3 py-1.5 text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-amber-500 disabled:opacity-70 ${
                    isClean
                      ? "border-emerald-400"
                      : "border-[var(--color-accent-fr)]"
                  }`}
                />
              </div>
            )}
            {/* Internal verb check — shown only after validation */}
            {validated && revealCorrection && !checking && (perVerb || exercise.verb) && inputText.length > 2 && !verbOk && (
              <p className="ml-5 text-xs text-amber-600">
                Le verbe <strong>{perVerb ?? exercise.verb}</strong> est attendu dans cette phrase
              </p>
            )}
            {/* LanguageTool results — shown only after validation */}
            {validated && revealCorrection && !checking && ltErrors.length > 0 && (
              <ul className="ml-5 space-y-1">
                {ltErrors.map((err, ei) => {
                  const suggestions = err.replacements.slice(0, 3).map((r) => r.value).filter(Boolean);
                  return (
                    <li key={ei} className="flex flex-wrap items-baseline gap-1 text-xs">
                      <span className="text-amber-600">
                        {err.shortMessage || err.message}
                      </span>
                      {suggestions.length > 0 && (
                        <span className="font-semibold text-emerald-600">
                          → {suggestions.join(" / ")}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
            {isClean && (
              <p className="ml-5 text-xs text-emerald-600">✓ Aucune erreur détectée</p>
            )}
          </div>
        );
      })}
      </div>

      {isEval && validated && !checking && (
        <section className="rounded-[var(--radius-md)] border border-[var(--color-accent-fr)]/25 bg-[var(--color-accent-fr)]/5 p-4">
          <h3 className="font-bold text-[var(--color-text-primary)]">Notation professeur</h3>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            Cet exercice n&apos;est pas noté automatiquement. À la fin de l&apos;évaluation, vous pourrez
            envoyer vos phrases au professeur pour correction (<strong>1 point par phrase</strong>).
          </p>
        </section>
      )}
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
  onValidated: (correct: number, total: number) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const fallback = exercise.poolSize ?? (exercise.items.length || 5);
  const { questionCount } = usePrintQuestionLayout(fallback);
  const [resolved] = useState<{ image: string | null; items: { statement: string; answer: boolean }[] }>(() => {
    const total = questionCount;
    const trueCount = Math.min(Math.max(1, Math.floor(total / 2) + (Math.random() < 0.5 ? 0 : 1)), total - 1);
    const falseCount = total - trueCount;

    if (exercise.imagePool && exercise.imagePool.length > 0) {
      const group = exercise.imagePool[Math.floor(Math.random() * exercise.imagePool.length)]!;
      const trueItems  = shuffle(group.items.filter(it => it.answer)).slice(0, trueCount);
      const falseItems = shuffle(group.items.filter(it => !it.answer)).slice(0, falseCount);
      const picked = shuffle([...trueItems, ...falseItems]);
      return { image: group.image, items: picked };
    }
    return { image: null, items: exercise.items.slice(0, total) };
  });

  const items = resolved.items;
  const [answers, setAnswers] = useState<(boolean | null)[]>(() => new Array(items.length).fill(null));
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  useEffect(() => {
    onCanValidateChange(!validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated]);

  useEffect(() => {
    if (validateCommand > 0 && !validated) {
      setValidated(true);
      onValidated(answers.filter((a, i) => a === items[i]!.answer).length, answers.length);
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
      {resolved.image && (
        <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={resolved.image} alt="Description" className="w-full object-contain max-h-64" />
        </div>
      )}
      <div className="grid items-center gap-x-4 gap-y-3" style={{ gridTemplateColumns: "1fr auto" }}>
        {items.map((item, i) => {
          const chosen = answers[i];
          const correct = item.answer;
          const isRight = chosen === correct;

          const segCls = (val: boolean) => {
            const isSelected = chosen === val;
            const showCorrection = validated && revealCorrection;
            const base =
              "print-choice-btn rounded-md px-4 py-1.5 text-xs transition-[border-width,background-color] disabled:cursor-default " +
              (isSelected ? "print-choice-btn--selected border-2 font-semibold " : "border font-medium ");
            if (isSelected) {
              if (showCorrection && !isRight) {
                return `${base}border-amber-500 bg-amber-50 text-amber-600`;
              }
              return `${base}border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/15 text-[var(--color-accent-fr)]`;
            }
            if (showCorrection && !isRight && val === correct) {
              return `${base}border-amber-500 bg-amber-50 text-amber-600`;
            }
            return `${base}border-[var(--color-accent-fr)] text-[var(--color-text-secondary)]`;
          };

          return (
            <React.Fragment key={i}>
              <div className="flex min-w-0 items-center gap-2">
                <span className="w-5 shrink-0 text-sm font-medium text-[var(--color-accent-fr)]">{i + 1}.</span>
                <p className="text-sm text-[var(--color-text-primary)]">{item.statement}</p>
              </div>
              <div className="flex shrink-0 gap-1.5">
                <button type="button" onClick={() => pick(i, true)} disabled={validated} className={segCls(true)}>
                  Vrai
                </button>
                <button type="button" onClick={() => pick(i, false)} disabled={validated} className={segCls(false)}>
                  Faux
                </button>
              </div>
            </React.Fragment>
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
  onValidated: (correct: number, total: number) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const { questionCount, listClass } = usePrintQuestionLayout(exercise.items.length);
  const [items] = useState(() => exercise.items.slice(0, questionCount));
  const [pools, setPools] = useState<string[][]>(() =>
    items.map((item) => shuffle(item.sentence.split(" "))),
  );
  const [builts, setBuilts] = useState<string[][]>(() => items.map(() => []));
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  useEffect(() => {
    onCanValidateChange(!validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated]);

  useEffect(() => {
    if (validateCommand > 0 && !validated) {
      setValidated(true);
      onValidated(builts.filter((b, i) => b.join(" ") === items[i]!.sentence).length, builts.length);
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
      <div className={listClass}>
      {items.map((item, i) => {
        const built = builts[i]!;
        const pool = pools[i]!;
        const correct = built.join(" ") === item.sentence;
        return (
          <div key={i} className="space-y-2 rounded-lg border border-[var(--color-border)] p-3">
            {item.hint && (
              <p className="text-xs text-[var(--color-text-secondary)] italic">{item.hint}</p>
            )}
            {/* answer area — correction style vocab ExWordOrder */}
            {validated && revealCorrection && !correct ? (
              <div className="flex min-h-9 flex-col justify-center border-b-2 border-amber-500 pb-0.5">
                <span className="text-sm text-[var(--color-text-secondary)] line-through">
                  {built.join(" ") || "—"}
                </span>
                <span className="text-sm font-bold text-amber-600">{item.sentence}</span>
              </div>
            ) : (
            <div className="min-h-9 flex flex-wrap gap-1.5 border-b-2 border-[var(--color-accent-fr)]/60 bg-transparent p-2 transition-colors">
              {built.length === 0 && (
                <span className="text-xs text-[var(--color-text-secondary)] italic">Clique les mots ci-dessous…</span>
              )}
              {built.map((w, j) => (
                <button
                  key={j}
                  onClick={() => removeWord(i, j)}
                  disabled={validated}
                  className="rounded bg-[var(--color-accent-fr)]/10 px-2 py-0.5 text-xs font-medium text-[var(--color-accent-fr)] disabled:opacity-100"
                >
                  {w}
                </button>
              ))}
            </div>
            )}
            {/* word pool */}
            {!validated && (
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
            )}
          </div>
        );
      })}
      </div>
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
  onValidated: (correct: number, total: number) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const fallback = exercise.poolSize ?? (exercise.pool?.length ? 8 : exercise.items.length);
  const { questionCount, listClass } = usePrintQuestionLayout(fallback);
  const [items] = useState<typeof exercise.items>(() => {
    const raw = exercise.pool && exercise.pool.length > 0
      ? shuffle(exercise.pool).slice(0, questionCount)
      : exercise.items.slice(0, questionCount);
    return shuffle(raw);
  });
  const [chosen, setChosen] = useState<(number | null)[]>(() => new Array(items.length).fill(null));
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  useEffect(() => {
    onCanValidateChange(!validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated]);

  useEffect(() => {
    if (validateCommand > 0 && !validated) {
      setValidated(true);
      onValidated(chosen.filter((c, i) => c === items[i]!.categoryIdx).length, chosen.length);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>
      <div className={listClass}>
        {items.map((item, i) => {
          const sel = chosen[i];
          const isRight = sel === item.categoryIdx;
          return (
            <div key={i} className="space-y-2">
              <p className="text-sm font-medium text-[var(--color-text-primary)]">
                <span className="font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>{" "}
                {renderInlineMarkup(item.word, false)}
              </p>
              <div className={`grid gap-1.5 ${exercise.categories.length >= 4 ? "grid-cols-2 sm:grid-cols-4" : exercise.categories.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                {exercise.categories.map((cat, ci) => {
                  const active = sel === ci;
                  const userWrong = validated && revealCorrection && !isRight;
                  let cls =
                    "print-choice-btn rounded-md px-2 py-1.5 text-center text-xs font-medium transition-[border-width,background-color] " +
                    (active ? "print-choice-btn--selected border-2 " : "border ");
                  if (!validated || !revealCorrection) {
                    cls += active
                      ? "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]"
                      : "border-[var(--color-accent-fr)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-accent-fr)]/5";
                  } else if (active && !isRight) {
                    cls += "border-amber-500 bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]";
                  } else if (userWrong && ci === item.categoryIdx) {
                    cls += "border-amber-500 bg-transparent font-semibold text-amber-500";
                  } else if (active) {
                    cls += "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]";
                  } else {
                    cls += "border-[var(--color-accent-fr)]/50 text-[var(--color-text-secondary)] opacity-60";
                  }
                  return (
                    <button
                      key={ci}
                      type="button"
                      onClick={() => !validated && setChosen((prev) => prev.map((v, idx) => idx === i ? ci : v))}
                      className={cls}
                      disabled={validated}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
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
  onValidated: (correct: number, total: number) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const fallback = exercise.poolSize ?? (exercise.pool?.length ?? exercise.items.length);
  const { questionCount, listClass } = usePrintQuestionLayout(fallback);
  const [activeItems] = useState(() => {
    if (exercise.pool?.length) {
      return shuffle([...exercise.pool]).slice(0, questionCount);
    }
    return exercise.items.slice(0, questionCount);
  });
  const [states] = useState(() =>
    activeItems.map((item) => {
      const trailingPunct = item.sentence.match(/([.?!])$/)?.[1] ?? null;
      const allWords = trailingPunct ? [...item.words, trailingPunct] : [...item.words];
      return { ...item, allWords, shuffled: shuffle([...allWords]) };
    }),
  );
  const [arranged, setArranged] = useState<string[][]>(() => states.map(() => []));
  const [pools, setPools] = useState<string[][]>(() => states.map((s) => [...s.shuffled]));
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  useEffect(() => {
    onCanValidateChange(!validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated]);

  useEffect(() => {
    if (validateCommand > 0 && !validated) {
      setValidated(true);
      const correctCount = arranged.filter((arr, i) =>
        arr.join(" ").replace(/ ([.?!])$/, "$1") === states[i]!.sentence,
      ).length;
      onValidated(correctCount, arranged.length);
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
      <div className={listClass}>
      {states.map((item, qi) => {
        const arr = arranged[qi]!;
        const pool = pools[qi]!;
        const correct = arr.join(" ").replace(/ ([.?!])$/, "$1") === item.sentence;
        return (
          <div key={qi} className="space-y-3">
            {/* Number + answer line — correction style vocab ExWordOrder */}
            <div className="flex items-end gap-2">
              <span className="shrink-0 pb-1 text-sm font-bold text-[var(--color-accent-fr)]">{qi + 1}.</span>
              {validated && revealCorrection && !correct ? (
                <div className="flex min-h-9 flex-1 flex-col justify-center border-b-2 border-amber-500 pb-0.5">
                  <span className="text-sm text-[var(--color-text-secondary)] line-through">
                    {arr.join(" ") || "—"}
                  </span>
                  <span className="text-sm font-bold text-amber-600">{item.sentence}</span>
                </div>
              ) : (
              <div className="flex min-h-9 flex-1 flex-wrap items-end gap-1.5 border-b-2 border-[var(--color-accent-fr)]/60 pb-1">
                {arr.map((word, wi) => (
                    <button
                      key={wi}
                      type="button"
                      onClick={() => removeWord(qi, wi)}
                      disabled={validated}
                      className="rounded bg-[var(--color-accent-fr)]/10 px-2.5 py-0.5 text-sm font-medium text-[var(--color-accent-fr)] transition-colors disabled:opacity-100"
                    >
                      {word}
                    </button>
                ))}
              </div>
              )}
            </div>

            {/* Word pool */}
            {!validated && (
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
            )}          </div>
        );
      })}
      </div>
    </div>
  );
}

// ── Color-highlight exercise ──────────────────────────────────────────────────

const HIGHLIGHT_STYLES = [
  { bg: "bg-yellow-300", text: "text-yellow-900", btn: "bg-yellow-300 text-yellow-900" },
  { bg: "bg-red-400", text: "text-white", btn: "bg-red-400 text-white" },
  { bg: "bg-emerald-400", text: "text-white", btn: "bg-emerald-400 text-white" },
];

function ColorHighlightExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: {
  exercise: Extract<Exercise, { type: "color_highlight" }>;
  onValidated: (correct: number, total: number) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const { questionCount, listClass } = usePrintQuestionLayout(exercise.items.length);
  const [items] = useState(() => exercise.items.slice(0, questionCount));
  const [activeColor, setActiveColor] = useState<number>(0);
  const [colored, setColored] = useState<(number | null)[][]>(() =>
    items.map((item) => new Array(item.words.length).fill(null)),
  );
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  useEffect(() => {
    onCanValidateChange(!validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated]);

  useEffect(() => {
    if (validateCommand > 0 && !validated) {
      setValidated(true);
      const correctCount = colored.filter((row, qi) =>
        items[qi]!.answers.every((ans, wi) => ans === null || row[wi] === ans),
      ).length;
      onValidated(correctCount, colored.length);
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

      {/* Color selector — boutons séparés */}
      <div className="flex flex-wrap gap-1.5">
        {exercise.colors.map((label, ci) => {
          const style = HIGHLIGHT_STYLES[ci]!;
          const active = activeColor === ci;
          return (
            <button
              key={ci}
              type="button"
              onClick={() => setActiveColor(ci)}
              className={`rounded-full border px-3 py-1.5 text-center text-xs font-semibold transition-all ${active ? `${style.btn} border-transparent ring-2 ring-inset ring-white/40` : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"}`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Sentences */}
      <div className={listClass}>
        {items.map((item, qi) => {
          const row = colored[qi]!;
          const itemCorrect = !validated || !revealCorrection || item.answers.every((ans, wi) => ans === null || row[wi] === ans);
          return (
            <div key={qi} className="space-y-1.5">
              <p className="text-sm font-bold text-[var(--color-accent-fr)]">{qi + 1}.</p>

              {/* User's row — colors stay as-is after validation */}
              <div className="flex flex-wrap gap-1.5">
                {item.words.map((word, wi) => {
                  const colorIdx = row[wi];
                  const style = colorIdx !== null ? HIGHLIGHT_STYLES[colorIdx] : null;
                  let cls = `rounded px-2 py-0.5 text-sm font-medium transition-all select-none ${validated ? "cursor-default" : "cursor-pointer"} `;
                  cls += colorIdx !== null
                    ? `${style!.bg} ${style!.text}`
                    : validated
                      ? "bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] opacity-50"
                      : "bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-border-default)]";
                  return (
                    <button key={wi} type="button" onClick={() => toggleWord(qi, wi)} className={cls}>
                      {word}
                    </button>
                  );
                })}
              </div>

              {/* Correct row — shown below only when the item has errors */}
              {validated && !itemCorrect && (
                <div className="flex flex-wrap gap-1.5">
                  {item.words.map((word, wi) => {
                    const expectedIdx = item.answers[wi];
                    const style = expectedIdx !== null ? HIGHLIGHT_STYLES[expectedIdx] : null;
                    const cls = `rounded px-2 py-0.5 text-sm font-medium select-none cursor-default ${
                      expectedIdx !== null && style
                        ? `${style.bg} ${style.text}`
                        : "bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]"
                    }`;
                    return <span key={wi} className={cls}>{word}</span>;
                  })}
                </div>
              )}
            </div>
          );
        })}
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
  const revealCorrection = useEvalReveal();
  const userWrong = validated && revealCorrection && value !== correct;
  return (
    <div className="inline-flex gap-1.5 text-xs font-semibold">
      {options.map((opt) => {
        const active = value === opt;
        let cls =
          "rounded-[var(--radius-md)] border px-3 py-1 transition-colors ";
        if (userWrong) {
          cls += "border-amber-500 ";
        } else {
          cls += "border-[var(--color-border)] ";
        }
        if (active) {
          cls += "bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]";
        } else if (userWrong && opt === correct) {
          cls += "text-amber-500";
        } else {
          cls += "text-[var(--color-text-secondary)] hover:bg-[var(--color-accent-fr)]/10";
        }
        return (
          <button key={opt} type="button" onClick={() => !validated && onChange(opt)} className={cls}>
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
  onValidated: (correct: number, total: number) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
}) {
  const genderOnly = Boolean(exercise.genderOnly);
  const { questionCount, listClass, isPrint, lengthScale } = usePrintQuestionLayout(exercise.poolSize ?? 10);
  const [items] = useState(() =>
    shuffle([...exercise.pool]).slice(0, questionCount),
  );
  const [answers, setAnswers] = useState<{ n: "S" | "P" | null; g: "M" | "F" | null }[]>(() =>
    items.map((item) => ({ n: genderOnly ? item.number : null, g: null })),
  );
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  useEffect(() => {
    onCanValidateChange(!validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated]);

  useEffect(() => {
    if (validateCommand > 0 && !validated) {
      setValidated(true);
      onValidated(items.filter((item, i) => {
          const ans = answers[i]!;
          if (genderOnly) return item.gender !== null && ans.g === item.gender;
          return ans.n === item.number && (item.gender === null || ans.g === item.gender);
        }).length, items.length);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>
      <div className={listClass === "space-y-4" ? "space-y-1" : listClass}>
        {items.map((item, i) => {
          const ans = answers[i]!;
          const nWrong = !genderOnly && validated && revealCorrection && ans.n !== item.number;
          const gWrong = validated && revealCorrection && item.gender !== null && ans.g !== item.gender;
          return (
            <div key={i} className="flex items-center gap-3 py-1.5">
              {/* Number */}
              <span className="w-5 shrink-0 text-right text-xs font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>

              {/* Word (+ optional companion noun) */}
              <span className="min-w-[6rem] text-sm font-semibold text-[var(--color-text-primary)]">
                {item.word}
                {item.companion && (
                  <span className="ml-1.5 font-normal text-[var(--color-text-secondary)]">{item.companion}</span>
                )}
              </span>

              {/* Toggles — or print blank for genderOnly */}
              {genderOnly && isPrint ? (
                <span
                  className="inline-block h-7 border-b-2 border-[var(--color-accent-fr)]/60"
                  style={{ width: scaleCssLength("3.5rem", lengthScale) }}
                  aria-hidden
                />
              ) : (
                <div className="flex shrink-0 items-center gap-2">
                  {!genderOnly && (
                    <PillGroup
                      options={["S", "P"] as const}
                      value={ans.n}
                      correct={item.number}
                      validated={validated}
                      onChange={(v) => setAnswers((prev) => prev.map((a, idx) => idx === i ? { ...a, n: v } : a))}
                    />
                  )}
                  {item.gender !== null ? (
                    <PillGroup
                      options={["M", "F"] as const}
                      value={ans.g}
                      correct={item.gender}
                      validated={validated}
                      onChange={(v) => setAnswers((prev) => prev.map((a, idx) => idx === i ? { ...a, g: v } : a))}
                    />
                  ) : !genderOnly ? (
                    /* Invisible spacer — same footprint as M/F PillGroup so words align */
                    <div className="inline-flex gap-1.5 text-xs font-semibold opacity-0 pointer-events-none select-none" aria-hidden>
                      <span className="rounded-[var(--radius-md)] border border-transparent px-3 py-1">M</span>
                      <span className="rounded-[var(--radius-md)] border border-transparent px-3 py-1">F</span>
                    </div>
                  ) : null}
                </div>
              )}

              {/* Correction — genderOnly : déjà visible via PillGroup, pas de → en plus */}
              {!genderOnly && (nWrong || gWrong) && (
                <span className="ml-auto text-xs font-medium text-emerald-600">
                  → {`${item.number}${item.gender ? ` ${item.gender}` : ""}`}
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

export function GrammarExerciseView({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
  isEval = false,
  onWriteAnswers,
}: {
  exercise: Exercise;
  onValidated: (correct: number, total: number) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
  isEval?: boolean;
  onWriteAnswers?: (payload: { prompts: string[]; texts: string[]; instruction: string }) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="mb-2 text-base font-bold text-[var(--color-text-primary)]">
        {exercise.title}
      </h2>
      {exercise.type === "qcm" && (
        <QcmExercise exercise={exercise} onValidated={onValidated} validateCommand={validateCommand} onCanValidateChange={onCanValidateChange} />
      )}
      {exercise.type === "fill" && (
        <FillExercise exercise={exercise} onValidated={onValidated} validateCommand={validateCommand} onCanValidateChange={onCanValidateChange} />
      )}
      {exercise.type === "fill_select" && (
        <FillSelectExercise exercise={exercise} onValidated={onValidated} validateCommand={validateCommand} onCanValidateChange={onCanValidateChange} />
      )}
      {exercise.type === "match" && (
        <MatchExercise exercise={exercise} onValidated={onValidated} validateCommand={validateCommand} onCanValidateChange={onCanValidateChange} />
      )}
      {exercise.type === "write" && (
        <WriteExercise
          exercise={exercise}
          onValidated={onValidated}
          validateCommand={validateCommand}
          onCanValidateChange={onCanValidateChange}
          isEval={isEval}
          onWriteAnswers={onWriteAnswers}
        />
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

function getGrammaireStepHint(exType: string | undefined): string | undefined {
  if (!exType) return undefined;
  switch (exType) {
    case "qcm":          return "Lis toutes les propositions avant de choisir. Une seule réponse est correcte.";
    case "fill":         return "Conjugue ou accorde le mot selon le sujet et le temps indiqués dans la consigne.";
    case "fill_select":  return "Choisis le bon mot dans la liste pour compléter la phrase. Lis la phrase entière.";
    case "match":        return "Associe chaque élément de gauche à son correspondant à droite.";
    case "write":        return "Écris une réponse complète. Vérifie l'accord en genre et en nombre.";
    case "trueFalse":    return "Lis chaque affirmation attentivement avant de répondre Vrai ou Faux.";
    case "order":        return "Replace les éléments dans le bon ordre : du plus grand au plus petit (ou inversement).";
    case "classify":     return "Regroupe les éléments selon la catégorie à laquelle ils appartiennent.";
    case "word_order":   return "Réorganise les mots pour former une phrase correcte. Commence par le sujet.";
    case "color_highlight": return "Surligne ou identifie l'élément demandé dans le texte.";
    case "clock_read":   return "Lis l'horloge : les petites aiguilles pour les heures, les grandes pour les minutes.";
    case "tag2":         return "Identifie et classe chaque élément dans la bonne catégorie grammaticale.";
    default:             return "Lis attentivement la consigne avant de répondre.";
  }
}

function GramHintPopup({ hint, onClose }: { hint: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pb-36 px-4" onClick={onClose}>
      <div className="w-full max-w-xl rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-5 shadow-xl" onClick={e => e.stopPropagation()}>
        <p className="mb-2 text-sm font-bold text-[var(--color-accent-fr)]">💡 Astuce</p>
        <p className="pr-4 text-sm leading-relaxed text-[var(--color-text-primary)]">{hint}</p>
        <button type="button" onClick={onClose}
          className="mt-4 w-full rounded-xl bg-[var(--color-accent-fr)]/10 py-2 text-sm font-semibold text-[var(--color-accent-fr)] transition-colors hover:bg-[var(--color-accent-fr)]/20">
          OK
        </button>
      </div>
    </div>
  );
}

export function GrammaireRunner({ lesson: baseLesson, subject = "Conjugaison" }: Props) {
  const router = useRouter();
  const evalGuard = useEvalNavGuard();
  const returnUrl = `/francais?tab=${subjectToTab(subject)}`;
  const pivot = usePivotLang();
  const { showPivot: showTrans } = useTranslation();
  const { resolve } = useContentEditor();
  const contentKey =
    subject === "Conjugaison"
      ? conjugationLessonKey(baseLesson.slug)
      : grammarLessonKey(baseLesson.slug);
  const lesson = resolve(contentKey, baseLesson);
  const midExercises = lesson.midExercises ?? [];
  const evalExercises = lesson.evalExercises ?? [];
  const hasEval = evalExercises.length > 0;
  const theory2Idx = 1 + midExercises.length;
  const exStart = theory2Idx + (lesson.theory2 ? 1 : 0);
  const evalAnnounceIdx = exStart + lesson.exercises.length;
  const evalPhaseIdx = hasEval ? evalAnnounceIdx + 1 : -1;
  const resultsIdx = hasEval ? evalPhaseIdx + 1 : -1;
  const trainingTotalSteps = evalAnnounceIdx;
  const totalSteps = hasEval ? resultsIdx + 1 : evalAnnounceIdx;

  // Grammar and vocabulary lessons skip the timed start screen
  const hasTimer = subject === "Conjugaison";

  const [stepIdx, setStepIdx] = useState(0);
  const [exerciseKey, setExerciseKey] = useState(0);
  const [_canValidate, setCanValidate] = useState(true);
  const [validateCommand, setValidateCommand] = useState(0);
  const [exercisesStarted, setExercisesStarted] = useState(!hasTimer);
  const [showHint, setShowHint] = useState(false);

  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [evalIdx, setEvalIdx] = useState(0);
  const [evalSessionKey, setEvalSessionKey] = useState(0);
  const [evalValidateCommands, setEvalValidateCommands] = useState<number[]>(() => Array(evalExercises.length).fill(0));
  const [evalValidated, setEvalValidated] = useState<boolean[]>(() => Array(evalExercises.length).fill(false));
  const [evalScores, setEvalScores] = useState<Array<{ correct: number; total: number } | null>>(
    () => Array(evalExercises.length).fill(null),
  );
  const [evalTimeLeft, setEvalTimeLeft] = useState<number | null>(null);
  const [selectedResultIdx, setSelectedResultIdx] = useState<number | null>(null);
  const [writePayload, setWritePayload] = useState<{
    prompts: string[];
    texts: string[];
    instruction: string;
  } | null>(null);
  const [teachers, setTeachers] = useState<TeacherOption[]>([]);
  const [teacherId, setTeacherId] = useState("");
  const [writeSent, setWriteSent] = useState(false);
  const [writeSendMessage, setWriteSendMessage] = useState("");
  const [isSendingWrite, startSendingWrite] = useTransition();

  useEffect(() => {
    if (!hasEval) return;
    void getExpressionTeachersAction().then(setTeachers);
  }, [hasEval]);

  const isFirst = stepIdx === 0;
  const isLast = stepIdx === totalSteps - 1;
  const isTheory1 = stepIdx === 0;
  const isMidEx = stepIdx >= 1 && stepIdx <= midExercises.length;
  const isTheory2 = lesson.theory2 ? stepIdx === theory2Idx : false;
  const isTheory = isTheory1 || isTheory2;
  const isExercise = stepIdx >= exStart && stepIdx < evalAnnounceIdx;
  const isEvalAnnounce = hasEval && stepIdx === evalAnnounceIdx;
  const isEvalPhase = hasEval && stepIdx === evalPhaseIdx;
  const isResults = hasEval && stepIdx === resultsIdx;
  const isInEvalPhase = isEvalPhase || isResults;
  const currentMidEx = isMidEx ? midExercises[stepIdx - 1] ?? null : null;
  const currentExercise = isExercise ? lesson.exercises[stepIdx - exStart] ?? null : null;
  const currentBlocks = isTheory1 ? lesson.theory : isTheory2 ? lesson.theory2! : null;

  // Grade : 1 point par question ; Ex7 (write) exclu du score auto (noté par le prof).
  const autoCorrect = evalScores.reduce((sum, score, i) => {
    if (!score || evalExercises[i]?.type === "write") return sum;
    return sum + score.correct;
  }, 0);
  const autoTotal = evalScores.reduce((sum, score, i) => {
    if (!score || evalExercises[i]?.type === "write") return sum;
    return sum + score.total;
  }, 0);
  const writeMax = evalScores.reduce((sum, score, i) => {
    if (!score || evalExercises[i]?.type !== "write") return sum;
    return sum + score.total;
  }, 0);
  const hasWriteEval = evalExercises.some((ex) => ex.type === "write");
  const maxTotal = autoTotal + writeMax;
  const evalGradeNow = hasEval && maxTotal > 0 ? linearSwissGrade(autoCorrect, maxTotal) : 0;
  const evalGradeBest = hasEval && maxTotal > 0 ? linearSwissGrade(autoCorrect + writeMax, maxTotal) : 0;
  const evalOutcome: "pass" | "pending" | "fail" | "none" = !hasEval
    ? "none"
    : evalGradeNow >= PASSING_GRADE
      ? "pass"
      : evalGradeBest >= PASSING_GRADE
        ? "pending"
        : "fail";
  const evalGrade = evalOutcome === "pending" ? evalGradeNow : evalGradeNow;
  const evalPercent = hasEval && maxTotal > 0 ? (autoCorrect / maxTotal) * 100 : 0;
  const allEvalValidated = evalValidated.length > 0 && evalValidated.every(Boolean);
  const _evalMedal = hasEval ? medalFromPercent(evalPercent) : null;

  // Reset validate command when moving to a new step
  useEffect(() => {
    setValidateCommand(0);
  }, [stepIdx, exerciseKey]);

  // Timer countdown for training exercises (conjugation only)
  useEffect(() => {
    if (!exercisesStarted || timeLeft === null || timeLeft <= 0) return;
    const id = setTimeout(() => setTimeLeft((t) => Math.max(0, (t ?? 1) - 1)), 1000);
    return () => clearTimeout(id);
  }, [exercisesStarted, timeLeft]);

  // Auto-complete training when timer reaches 0 (uniquement sans évaluation)
  useEffect(() => {
    if (timeLeft !== 0 || !exercisesStarted) return;
    if (!hasEval) markFrenchLessonComplete(lesson.slug);
    router.push(returnUrl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  // Eval 10-minute countdown
  useEffect(() => {
    if (!isEvalPhase || evalTimeLeft === null || evalTimeLeft <= 0) return;
    const id = setTimeout(() => setEvalTimeLeft((t) => Math.max(0, (t ?? 1) - 1)), 1000);
    return () => clearTimeout(id);
  }, [isEvalPhase, evalTimeLeft]);

  // Auto-jump to results when eval timer hits 0
  useEffect(() => {
    if (evalTimeLeft !== 0 || !isEvalPhase) return;
    if (hasEval && resultsIdx >= 0) setStepIdx(resultsIdx);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evalTimeLeft]);

  function formatTime(s: number): string {
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  }

  const evalIdxRef = React.useRef(0);
  evalIdxRef.current = evalIdx;

  const evalValidatedRef = React.useRef(evalValidated);
  evalValidatedRef.current = evalValidated;


  const handleValidated = useCallback<(correct: number, total: number) => void>((_correct, _total) => {
    void _correct; void _total;
    setCanValidate(false);
  }, []);

  const handleEvalValidated = useCallback<(correct: number, total: number) => void>((correct, total) => {
    const i = evalIdxRef.current;
    const newValidated = evalValidatedRef.current.map((v, j) => (j === i ? true : v));
    setEvalScores((prev) => prev.map((s, j) => (j === i ? { correct, total } : s)));
    setEvalValidated(newValidated);
    setCanValidate(false);
    const allDone = newValidated.every(Boolean);
    if (allDone) {
      if (hasEval && resultsIdx >= 0) setStepIdx(resultsIdx);
    } else {
      for (let k = 1; k <= newValidated.length; k++) {
        const idx = (i + k) % newValidated.length;
        if (!newValidated[idx]) {
          setEvalIdx(idx);
          setCanValidate(true);
          break;
        }
      }
    }
  }, [hasEval, resultsIdx]);

  function startEval() {
    setEvalTimeLeft(10 * 60);
    setEvalIdx(0);
    setEvalSessionKey((k) => k + 1);
    setEvalValidateCommands(Array(evalExercises.length).fill(0));
    setEvalValidated(Array(evalExercises.length).fill(false));
    setEvalScores(Array(evalExercises.length).fill(null));
    setWritePayload(null);
    setWriteSent(false);
    setWriteSendMessage("");
    setTeacherId("");
    setSelectedResultIdx(null);
    setCanValidate(true);
    setStepIdx(evalPhaseIdx);
  }

  function sendWriteToTeacher() {
    if (!teacherId || !writePayload || writeSent) return;
    const prompt = buildGrammarWritePromptPayload({
      lessonCode: lesson.code,
      lessonTitle: lesson.title,
      instruction: writePayload.instruction,
      prompts: writePayload.prompts,
      texts: writePayload.texts,
      meta: {
        kind: "grammar_eval_write",
        slug: lesson.slug,
        autoCorrect,
        autoTotal,
        writeMax,
      },
    });
    const text = grammarWriteOriginalText(prompt.exercises);
    startSendingWrite(async () => {
      const result = await submitExpressionAction({
        teacherId,
        lessonCode: lesson.code,
        level: "base",
        prompt,
        text,
        aiFeedback: [],
        teacherMaxPoints: writeMax || writePayload.prompts.length,
      });
      if (result.ok) {
        setWriteSent(true);
        setWriteSendMessage("Phrases envoyées au professeur.");
        setFrenchEvalPending(lesson.slug, {
          autoCorrect,
          autoTotal,
          writeMax,
          lessonCode: lesson.code,
          submissionId: result.submissionId,
          at: new Date().toISOString(),
        });
      } else {
        setWriteSendMessage(result.reason ?? "Envoi impossible.");
      }
    });
  }

  function goBack() {
    if (isResults) {
      return;
    }
    if (isEvalPhase) {
      const total = evalExercises.length;
      for (let i = 1; i <= total; i++) {
        const idx = (evalIdx - i + total) % total;
        if (!evalValidated[idx]) {
          setEvalIdx(idx);
          setCanValidate(true);
          return;
        }
      }
      return;
    }
    if (hasTimer && isExercise && exercisesStarted) {
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

  function finishLesson() {
    if (!hasEval) {
      markFrenchLessonComplete(lesson.slug);
      router.push(returnUrl);
      return;
    }
    if (evalOutcome === "pass") {
      clearFrenchEvalPending(lesson.slug);
      markFrenchLessonComplete(lesson.slug);
    } else if (evalOutcome === "pending") {
      setFrenchEvalPending(lesson.slug, {
        autoCorrect,
        autoTotal,
        writeMax,
        lessonCode: lesson.code,
        at: new Date().toISOString(),
      });
    } else {
      clearFrenchEvalPending(lesson.slug);
    }
    router.push(returnUrl);
  }

  function goNext() {
    if (isResults) {
      finishLesson();
      return;
    }
    if (isEvalPhase) {
      if (allEvalValidated) {
        setStepIdx(resultsIdx);
        return;
      }
      const total = evalExercises.length;
      for (let i = 1; i <= total; i++) {
        const idx = (evalIdx + i) % total;
        if (!evalValidated[idx]) {
          setEvalIdx(idx);
          setCanValidate(true);
          return;
        }
      }
      return;
    }
    if (isLast) {
      finishLesson();
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
    <div className="app-shell flex-1 py-8 pb-56">
      <ContentEditorPanel
        contentKey={contentKey}
        label={`${subject} — ${baseLesson.slug}`}
        baseValue={baseLesson}
      >
        {({ value, setValue }) => (
          <GrammarLessonFields value={value} setValue={setValue} />
        )}
      </ContentEditorPanel>
      {isEvalPhase && <EvalGuardSentinel />}
      {/* Cancel confirmation dialog */}
      {showCancelConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-[var(--color-bg-primary)] rounded-[var(--radius-lg)] p-6 mx-4 max-w-sm w-full space-y-4 shadow-xl">
            <p className="text-base font-bold text-[var(--color-text-primary)]">Annuler l&apos;évaluation ?</p>
            <p className="text-sm text-[var(--color-text-secondary)]">Votre progression sera perdue. Vous pourrez recommencer depuis le début.</p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  if (isEvalPhase) {
                    setStepIdx(evalAnnounceIdx);
                    setEvalIdx(0);
                    setEvalTimeLeft(null);
                  } else {
                    setExercisesStarted(false);
                    setTimeLeft(null);
                    setStepIdx(exStart);
                  }
                  setExerciseKey((k) => k + 1);
                  setShowCancelConfirm(false);
                }}
                className="flex-1 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
              >
                Annuler
              </button>
              <button
                type="button"
                onClick={() => setShowCancelConfirm(false)}
                className="flex h-11 flex-1 items-center justify-center rounded-xl px-4 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90"
                style={{ background: "var(--color-accent-fr)" }}
              >
                Continuer
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
            onClick={(e) => {
              if (evalGuard?.active) {
                e.preventDefault();
                evalGuard.requestNavigate(() => router.push(returnUrl));
              }
            }}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-fr)] text-white transition-opacity hover:opacity-80"
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

      {/* Training progress bar — hidden on eval announce / eval (comme en math) */}
      {!isInEvalPhase && !isEvalAnnounce && (
        <div className="mb-6 flex gap-1" data-no-print>
          {Array.from({ length: trainingTotalSteps }).map((_, i) => (
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
      )}

      {/* Hint button — only on exercise steps */}
      {(isExercise || isMidEx) && getGrammaireStepHint(currentExercise?.type) && (
        <div className="float-right ml-2 flex gap-1.5" data-no-print>
          <button type="button" onClick={() => setShowHint(true)}
            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--color-accent-fr)] text-xs font-bold text-[var(--color-accent-fr)] transition-colors hover:bg-[var(--color-accent-fr)]/10"
            aria-label="Aide">?</button>
        </div>
      )}
      {showHint && getGrammaireStepHint(currentExercise?.type) && (
        <div data-no-print>
          <GramHintPopup hint={getGrammaireStepHint(currentExercise?.type)!} onClose={() => setShowHint(false)} />
        </div>
      )}



      {/* Content */}
      <div className="min-h-[280px]">
        {/* Timer chip — shown when exercises are started (conjugation only) */}
        {isExercise && hasTimer && exercisesStarted && timeLeft !== null && (
          <div className="mb-4 flex justify-end">
            <div className="flex items-center gap-1.5 rounded-[var(--radius-md)] border border-[var(--color-correction)]/40 bg-[var(--color-correction-soft)] px-3 py-1.5 font-mono text-lg font-bold tabular-nums text-[var(--color-correction)]">
              <span aria-hidden>⏱</span>
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
        )}

        {isTheory && <GrammarTheoryView blocks={currentBlocks!} pivot={pivot} showTrans={showTrans} />}

        {isMidEx && currentMidEx && (
          <GrammarExerciseView
            key={exerciseKey}
            exercise={currentMidEx}
            onValidated={handleValidated}
            validateCommand={validateCommand}
            onCanValidateChange={setCanValidate}
          />
        )}

        {isExercise && (
          hasTimer && !exercisesStarted ? (
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
            <GrammarExerciseView
              key={exerciseKey}
              exercise={currentExercise}
              onValidated={handleValidated}
              validateCommand={validateCommand}
              onCanValidateChange={setCanValidate}
            />
          ) : null
        )}

        {/* Eval announce — math-style */}
        {isEvalAnnounce && (
          <EvalAnnounceScreen
            accent="var(--color-accent-fr)"
            lessonTitle={`${lesson.code} — ${lesson.title}`}
            exerciseCount={evalExercises.length}
            minutes={10}
            onStart={startEval}
          />
        )}

        {/* Eval phase + results: all eval exercises mounted simultaneously */}
        {(isEvalPhase || isResults) && (
          <div>
            {/* Score header — results only */}
            {isResults && (
              <div className="mb-6 space-y-4">
                <EvalResultsSummary
                  accent="var(--color-accent-fr)"
                  points={autoCorrect}
                  maxPoints={maxTotal || 1}
                  grade={evalGrade}
                  passed={evalOutcome === "pass"}
                  mentionOverride={evalOutcome === "pending" ? "En attente" : undefined}
                />
                {evalOutcome === "pending" && (
                  <p className="text-center text-sm text-[var(--color-text-secondary)]">
                    Score actuel {autoCorrect}/{maxTotal} (note {evalGradeNow.toFixed(1)}/6).
                    Les points de rédaction peuvent encore faire passer l&apos;évaluation.
                  </p>
                )}
                {evalOutcome === "fail" && hasWriteEval && (
                  <p className="text-center text-sm text-amber-700">
                    Même avec la totalité des points de rédaction ({writeMax}), la note resterait
                    insuffisante ({evalGradeBest.toFixed(1)}/6).
                  </p>
                )}
                {hasWriteEval && writePayload && (
                  <section className="rounded-[var(--radius-md)] border border-[var(--color-accent-fr)]/25 bg-[var(--color-accent-fr)]/5 p-4">
                    <h3 className="font-bold text-[var(--color-text-primary)]">
                      Envoyer la rédaction au professeur
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                      {writeMax} phrase{writeMax > 1 ? "s" : ""} · 1 point par phrase · notation manuelle
                    </p>
                    {teachers.length ? (
                      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                        <AppSelect
                          value={teacherId}
                          onChange={setTeacherId}
                          options={teachers.map((teacher) => ({
                            value: teacher.id,
                            label: [teacher.prenom, teacher.nom].filter(Boolean).join(" ") || "Professeur",
                          }))}
                          placeholder="Choisissez un professeur"
                          emptyOption={{ value: "", label: "Choisissez un professeur" }}
                          disabled={writeSent}
                          placement="top"
                          className="min-h-11 flex-1"
                        />
                        <button
                          type="button"
                          onClick={sendWriteToTeacher}
                          disabled={!teacherId || isSendingWrite || writeSent}
                          className="min-h-11 rounded-[var(--radius-md)] bg-[var(--color-accent-fr)] px-5 text-sm font-bold text-white disabled:opacity-35"
                        >
                          {writeSent ? "Envoyé" : isSendingWrite ? "Envoi…" : "Envoyer"}
                        </button>
                      </div>
                    ) : (
                      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                        Aucun professeur disponible (connexion requise).
                      </p>
                    )}
                    {writeSendMessage && (
                      <p className={`mt-2 text-xs font-semibold ${writeSent ? "text-emerald-600" : "text-amber-600"}`}>
                        {writeSendMessage}
                      </p>
                    )}
                  </section>
                )}
                <EvalResultsHint />
              </div>
            )}

            {/* Eval progress bar (only during eval phase) */}
            {isEvalPhase && (
              <div className="mb-4">
                <div className="mb-1 flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-correction)]">Évaluation</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">{evalExercises.length - evalValidated.filter(Boolean).length} restant(s)</p>
                </div>
                <div className="flex gap-1">
                  {evalExercises.map((_, i) => {
                    if (evalValidated[i]) return null;
                    return (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-colors ${
                          i === evalIdx ? "bg-[var(--color-correction)]" : "bg-[var(--color-border-default)]"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            <EvalExerciseResultList>
              {evalExercises.map((ex, i) => {
                const isActive = isEvalPhase && i === evalIdx;
                const isSelectedResult = isResults && selectedResultIdx === i;
                const score = evalScores[i];
                const isWrite = ex.type === "write";
                const correct = isWrite ? 0 : (score?.correct ?? 0);
                const total = score?.total ?? (isWrite ? writeMax || 1 : 1);
                return (
                  <div
                    key={`eval-${evalSessionKey}-${i}`}
                    className={isEvalPhase && !isActive ? "hidden" : ""}
                  >
                    {isResults && (
                      <EvalExerciseResultRow
                        index={i}
                        correct={correct}
                        total={total}
                        accent="var(--color-accent-fr)"
                        isSelected={isSelectedResult}
                        onToggle={() => setSelectedResultIdx(isSelectedResult ? null : i)}
                        scoreLabel={isWrite ? (writeSent ? "Envoyé" : "En attente") : undefined}
                      >
                        <EvalRevealContext.Provider value={isResults}>
                          <GrammarExerciseView
                            exercise={ex}
                            onValidated={handleEvalValidated}
                            validateCommand={evalValidateCommands[i] ?? 0}
                            onCanValidateChange={() => {}}
                            isEval
                            onWriteAnswers={setWritePayload}
                          />
                        </EvalRevealContext.Provider>
                      </EvalExerciseResultRow>
                    )}
                    {isEvalPhase && (
                      <div className={isActive ? "" : "hidden"}>
                        <EvalRevealContext.Provider value={false}>
                          <GrammarExerciseView
                            exercise={ex}
                            onValidated={handleEvalValidated}
                            validateCommand={evalValidateCommands[i] ?? 0}
                            onCanValidateChange={isActive ? setCanValidate : () => {}}
                            isEval
                            onWriteAnswers={setWritePayload}
                          />
                        </EvalRevealContext.Provider>
                      </div>
                    )}
                  </div>
                );
              })}
            </EvalExerciseResultList>
            {isResults && (
              <EvalFinishButton
                onClick={finishLesson}
                accent="var(--color-accent-fr)"
              />
            )}
          </div>
        )}
      </div>

      {/* Fixed bottom nav */}
      <div className="hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="app-shell-bar flex items-center justify-between py-3">
            {/* Back */}
            <button
              type="button"
              onClick={goBack}
              disabled={isResults}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Retour
            </button>

            {/* Reset + Validate */}
            {(isMidEx || (isExercise && (!hasTimer || exercisesStarted)) || (isEvalPhase && !evalValidated[evalIdx])) ? (
              <div className="flex items-center gap-2">
                {!isEvalPhase && (
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
                )}
                <button
                  type="button"
                  aria-label="Valider l'exercice"
                  onClick={() => {
                    if (isEvalPhase) {
                      setEvalValidateCommands((prev) => prev.map((v, j) => (j === evalIdx ? v + 1 : v)));
                    } else {
                      setValidateCommand((c: number) => c + 1);
                    }
                  }}
                  disabled={false}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-fr)] text-white transition-opacity hover:opacity-90 active:scale-90 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </button>
              </div>
            ) : <span />}

            {/* Next */}
            <button
              type="button"
              onClick={isResults ? finishLesson : goNext}
              disabled={false}
              className={`flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-fr)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80 disabled:cursor-not-allowed disabled:opacity-30 ${(isExercise && hasTimer && !exercisesStarted) || isEvalAnnounce ? "invisible" : ""}`}
            >
              {isResults || isLast || (isEvalPhase && allEvalValidated) ? (
                <>
                  Terminer
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </>
              ) : (
                <>
                  Suivant
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
        {/* Spacer for bottom nav */}
        <div className="h-[72px]" />
      </div>
    </div>
  );
}

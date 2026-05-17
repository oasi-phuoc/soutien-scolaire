"use client";

import React, { useState, useCallback, useEffect } from "react";
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
  const parts = text.split(/(\{[as]\}.*?\{\/[as]\})/);
  if (parts.length === 1) return useArrow ? renderArrow(text) : <>{text}</>;
  return (
    <>
      {parts.map((part, i) => {
        const accentMatch = part.match(/^\{a\}([\s\S]*?)\{\/a\}$/);
        const strikeMatch = part.match(/^\{s\}([\s\S]*?)\{\/s\}$/);
        if (accentMatch) {
          return <span key={i} className="font-semibold text-[var(--color-accent-fr)]">{accentMatch[1]}</span>;
        }
        if (strikeMatch) {
          return <span key={i} className="font-semibold line-through text-[var(--color-accent-fr)]">{strikeMatch[1]}</span>;
        }
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
        <div className="flex items-baseline gap-2 rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] px-3 py-2 text-xs">
          {verb.meaning && <span className="text-[var(--color-text-secondary)]">{verb.meaning}</span>}
          {verb.meaning && verb.example && <span className="text-[var(--color-border-emphasis)]">·</span>}
          {verb.example && <span className="italic text-[var(--color-text-primary)]">{verb.example}</span>}
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
                {negation ? <>→ <span className="font-bold">{nePrefix}</span>… <span className="font-bold">pas</span></> : "→"}
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
                    <span className="font-bold text-[var(--color-accent-fr)]">
                      {verb.reflexivePronouns[ri]}{verb.reflexivePronouns[ri]!.endsWith("'") ? "" : " "}
                    </span>
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
                          <span>{renderArrow(block.transItems[pivot as keyof typeof block.transItems]![ii]!)}</span>
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
                            <span>{renderArrow(transItems[ii]!)}</span>
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
            if (isSelected) {
              cls += "bg-[var(--color-accent-fr)]/15 text-[var(--color-accent-fr)]";
            } else if (isCorrect) {
              cls += "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400";
            } else {
              cls += "bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] opacity-50";
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
                    if (isSelected) {
                      cls +=
                        "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]";
                    } else if (isCorrect) {
                      cls +=
                        "border-red-400 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 dark:border-red-700";
                    } else {
                      cls +=
                        "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] opacity-60";
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
                ? "border-[var(--color-accent-fr)] text-[var(--color-accent-fr)]"
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

// ── Match exercise ────────────────────────────────────────────────────────────

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
  const [rightItems] = useState<MatchPair[]>(() => shuffle(exercise.pairs));
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [connections, setConnections] = useState<Map<number, number>>(
    new Map(),
  );
  const [validated, setValidated] = useState(false);

  // connections: Map<leftIdx, rightIdx>

  function clickLeft(idx: number) {
    if (validated) return;
    setSelectedLeft((prev: number | null) => (prev === idx ? null : idx));
  }

  function clickRight(rightIdx: number) {
    if (validated || selectedLeft === null) return;
    setConnections((prev: Map<number, number>) => {
      const next = new Map(prev);
      // Remove any existing connection to this right item
      for (const [k, v] of next.entries()) {
        if (v === rightIdx) next.delete(k);
      }
      next.set(selectedLeft, rightIdx);
      return next;
    });
    setSelectedLeft(null);
  }

  function validate() {
    if (validated) return;
    setValidated(true);
    const allCorrect = exercise.pairs.every((pair, li) => {
      const connectedRightIdx = connections.get(li);
      if (connectedRightIdx === undefined) return false;
      return rightItems[connectedRightIdx]?.right === pair.right;
    });
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
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">
        {exercise.instruction}
      </p>

      <div className="grid grid-cols-2 gap-3">
        {/* Left column */}
        <div className="space-y-2">
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            Pronoms
          </p>
          {exercise.pairs.map((pair, li) => {
            const isSelected = selectedLeft === li;
            const connectedRightIdx = connections.get(li);
            const isConnected = connectedRightIdx !== undefined;
            let isCorrect = false;
            if (validated && isConnected) {
              isCorrect =
                rightItems[connectedRightIdx]?.right === pair.right;
            }
            let cls =
              "rounded-[var(--radius-md)] border px-3 py-2.5 text-sm font-medium text-center transition-colors cursor-pointer ";
            if (validated) {
              cls += isConnected
                ? "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]"
                : isCorrect
                  ? "border-red-400 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                  : "border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] opacity-60";
            } else {
              cls += isSelected
                ? "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]"
                : isConnected
                  ? "border-[var(--color-accent-fr)]/50 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]"
                  : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]";
            }
            return (
              <button
                key={li}
                type="button"
                className={cls}
                onClick={() => clickLeft(li)}
                disabled={validated}
              >
                {pair.left}
              </button>
            );
          })}
        </div>

        {/* Right column */}
        <div className="space-y-2">
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            Formes
          </p>
          {rightItems.map((pair: MatchPair, ri: number) => {
            const isTargetted = [...connections.values()].includes(ri);
            const connectingLeft = [...connections.entries()].find(
              ([, v]) => v === ri,
            )?.[0];
            let isCorrect = false;
            if (validated && isTargetted && connectingLeft !== undefined) {
              isCorrect =
                pair.right === exercise.pairs[connectingLeft]?.right;
            }
            let cls =
              "rounded-[var(--radius-md)] border px-3 py-2.5 text-sm font-medium text-center transition-colors ";
            if (validated) {
              cls += isTargetted
                ? "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]"
                : isCorrect
                  ? "border-red-400 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                  : "border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] opacity-60";
            } else {
              cls +=
                selectedLeft !== null
                  ? isTargetted
                    ? "border-[var(--color-accent-fr)]/50 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] cursor-pointer"
                    : "border-[var(--color-accent-fr)]/30 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] cursor-pointer"
                  : isTargetted
                    ? "border-[var(--color-accent-fr)]/50 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]"
                    : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]";
            }
            return (
              <button
                key={ri}
                type="button"
                className={cls}
                onClick={() => clickRight(ri)}
                disabled={validated}
              >
                {pair.right}
              </button>
            );
          })}
        </div>
      </div>

      {validated && (
        <div className="space-y-1">
          {exercise.pairs.map((pair, li) => {
            const connectedRightIdx = connections.get(li);
            const isCorrect =
              connectedRightIdx !== undefined &&
              rightItems[connectedRightIdx]?.right === pair.right;
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

// ── Sentence validation (free, client-side) ───────────────────────────────────

type SentenceCheck = { label: string; ok: boolean };

function checkSentence(text: string, verb?: "être" | "avoir"): SentenceCheck[] {
  const s = text.trim();
  if (!s) return [];

  const checks: SentenceCheck[] = [];
  checks.push({ label: "Majuscule", ok: /^[A-ZÀÂÄÉÈÊËÎÏÔÙÛÜÇ«"']/.test(s) });
  checks.push({ label: "Point final", ok: /[.!?]$/.test(s) });

  if (verb === "être") {
    const forms = [
      /\bje\b.{0,10}\bsuis\b/i,
      /\btu\b.{0,10}\bes\b/i,
      /\b(?:il|elle|on)\b.{0,10}\best\b/i,
      /\bnous\b.{0,10}\bsommes\b/i,
      /\bvous\b.{0,10}\bêtes\b/i,
      /\b(?:ils|elles)\b.{0,10}\bsont\b/i,
    ];
    checks.push({ label: "Verbe être", ok: forms.some(r => r.test(s)) });
  } else if (verb === "avoir") {
    const forms = [
      /j'ai\b/i,
      /\bje\b.{0,10}\bai\b/i,
      /\btu\b.{0,10}\bas\b/i,
      /\b(?:il|elle|on)\b.{0,10}\ba\b/i,
      /\bnous\b.{0,10}\bavons\b/i,
      /\bvous\b.{0,10}\bavez\b/i,
      /\b(?:ils|elles)\b.{0,10}\bont\b/i,
    ];
    checks.push({ label: "Verbe avoir", ok: forms.some(r => r.test(s)) });
  }

  return checks;
}

// ── Write exercise ────────────────────────────────────────────────────────────

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

  useEffect(() => {
    if (validateCommand > 0 && !validated) {
      setValidated(true);
      onValidated(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  useEffect(() => {
    onCanValidateChange(!validated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated]);

  function setInput(i: number, val: string) {
    setInputs((prev) => prev.map((v, idx) => (idx === i ? val : v)));
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>
      {exercise.prompts.map((_, i) => {
        const checks = checkSentence(inputs[i], exercise.verb);
        const allOk = checks.length > 0 && checks.every(c => c.ok);
        return (
          <div key={i} className="space-y-1.5">
            <div className="flex items-end gap-2">
              <span className={`shrink-0 pb-1 text-sm font-medium ${allOk ? "text-emerald-500 dark:text-emerald-400" : "text-[var(--color-accent-fr)]"}`}>
                {i + 1}.
              </span>
              <input
                type="text"
                value={inputs[i]}
                onChange={(e) => setInput(i, e.target.value)}
                disabled={validated}
                className={`flex-1 border-b-2 bg-transparent py-1 text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent-fr)] disabled:opacity-70 ${
                  allOk
                    ? "border-emerald-400 dark:border-emerald-500"
                    : "border-[var(--color-text-secondary)]"
                }`}
              />
            </div>
            {checks.length > 0 && (
              <div className="flex flex-wrap gap-x-3 gap-y-1 pl-5">
                {checks.map((c, ci) => (
                  <span key={ci} className={`flex items-center gap-1 text-xs ${c.ok ? "text-emerald-600 dark:text-emerald-400" : "text-red-500 dark:text-red-400"}`}>
                    {c.ok ? "✓" : "✗"} {c.label}
                  </span>
                ))}
              </div>
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
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>
      <div className="space-y-2">
        {items.map((item, i) => {
          const sel = chosen[i];
          const isRight = sel === item.categoryIdx;
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="min-w-[8rem] text-sm font-medium text-[var(--color-text-primary)]">{item.word}</span>
              <div className="flex flex-wrap gap-2">
                {exercise.categories.map((cat, ci) => {
                  const active = sel === ci;
                  let cls = "rounded border px-2.5 py-1 text-xs font-medium transition-colors ";
                  if (!active) {
                    cls += "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-fr)]";
                  } else if (!validated) {
                    cls += "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]";
                  } else if (isRight) {
                    cls += "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400";
                  } else {
                    cls += "border-red-400 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400";
                  }
                  return (
                    <button
                      key={ci}
                      onClick={() => !validated && setChosen((prev) => prev.map((v, idx) => idx === i ? ci : v))}
                      className={cls}
                    >
                      {cat}
                    </button>
                  );
                })}
                {validated && !isRight && (
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    → {exercise.categories[item.categoryIdx]}
                  </span>
                )}
              </div>
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

  const handleValidated = useCallback<(allCorrect: boolean) => void>((_allCorrect: boolean) => {
    setCanValidate(false);
  }, []);

  function goBack() {
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
      {/* Header */}
      <header className="mb-5 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-fr)]">
          Français · {subject} · {lesson.level}
        </p>
        <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
          {lesson.code} — {lesson.title}
        </h1>
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
        {isTheory ? (
          <TheoryView blocks={currentBlocks!} pivot={pivot} showTrans={showTrans} />
        ) : (currentMidEx ?? currentExercise) ? (
          <ExerciseView
            key={exerciseKey}
            exercise={(currentMidEx ?? currentExercise)!}
            onValidated={handleValidated}
            validateCommand={validateCommand}
            onCanValidateChange={setCanValidate}
          />
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

            {/* Reset + Validate (exercises only) */}
            {(isMidEx || isExercise) && (
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

            {/* Next */}
            <button
              type="button"
              onClick={goNext}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-fr)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80"
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

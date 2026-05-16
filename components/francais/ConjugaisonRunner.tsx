"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import type {
  TheoryBlock,
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

function TheoryView({ blocks, pivot, showTrans }: { blocks: TheoryBlock[]; pivot: string; showTrans: boolean }) {
  const isRtl = pivot === "ar" || pivot === "fa";

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <div key={i} className={block.trans?.[pivot as keyof typeof block.trans] ? "space-y-0.5" : ""}>
                <h2 className={`font-bold text-[var(--color-text-primary)] ${block.sub ? "text-base" : "text-lg"}`}>
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
                      <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent-fr)]">
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
                            <td className="px-3 py-2 font-semibold text-[var(--color-text-primary)]">
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
                  <span>{block.text}</span>
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
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[var(--color-accent-fr)]/15">
                        {block.headers.map((h, hi) => (
                          <th key={hi} className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-[var(--color-accent-fr)]">
                            {h}
                            {block.pronounGrid && showTrans && transH?.[hi] && (
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
                            const transCell = block.pronounGrid && showTrans && transR ? transR[ri]?.[ci] : undefined;
                            const transText = transCell
                              ? (transCell.includes(" → ") ? transCell.split(" → ").slice(1).join(" → ") : transCell)
                              : undefined;
                            return (
                              <td key={ci} className="px-3 py-2 text-sm text-[var(--color-text-primary)]">
                                {block.pronounGrid ? renderPronounCell(cell) : renderArrow(cell)}
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
                {showTrans && (transH || transR) && !block.pronounGrid && (
                  <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)]/60" lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                    <table className="w-full text-sm">
                      {transH && (
                        <thead>
                          <tr className="bg-[var(--color-accent-fr)]/8">
                            {transH.map((h, hi) => (
                              <th key={hi} className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                      )}
                      {transR && (
                        <tbody>
                          {transR.map((row, ri) => (
                            <tr key={ri} className={ri % 2 === 0 ? "bg-[var(--color-bg-primary)]" : "bg-[var(--color-bg-secondary)]/40"}>
                              {row.map((cell, ci) => (
                                <td key={ci} className="px-3 py-2 text-xs text-[var(--color-text-secondary)]">
                                  {renderArrow(cell)}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      )}
                    </table>
                  </div>
                )}
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
                        {ii > 0 && <span className="mt-0.5 shrink-0 text-[var(--color-accent-fr)]">•</span>}
                        <span>{renderArrow(item)}</span>
                      </div>
                      {showTrans && block.transItems?.[pivot as keyof typeof block.transItems]?.[ii] && (
                        <div className={`flex gap-2 text-xs leading-relaxed text-[var(--color-text-secondary)]${ii > 0 ? " ml-4" : ""}`} lang={pivot} dir={isRtl ? "rtl" : "ltr"}>
                          {ii > 0 && <span className="mt-0.5 shrink-0">•</span>}
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
                    const skipBullet = block.noFirstBullet && !item.includes(" → ");
                    return (
                      <li key={ii} className="space-y-0.5">
                        <div className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
                          {!skipBullet && <span className="mt-0.5 shrink-0 text-[var(--color-text-secondary)]">•</span>}
                          <span>{renderArrow(item)}</span>
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
    if (exercise.pool && exercise.pool.length > 0) {
      const size = exercise.poolSize ?? 5;
      return shuffle(exercise.pool).slice(0, size);
    }
    return exercise.items;
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

  const allAnswered = selected.every((s: number | null) => s !== null);

  useEffect(() => {
    if (validateCommand > 0) validate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  useEffect(() => {
    onCanValidateChange(allAnswered && !validated);
  }, [allAnswered, validated, onCanValidateChange]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">
        {exercise.instruction}
      </p>
      {items.map((item: QcmItem, i) => (
        <div key={i} className={exercise.inlineChoices ? "flex items-center gap-3" : "space-y-2"}>
          <p className={`text-sm font-medium text-[var(--color-text-primary)]${exercise.inlineChoices ? " flex-1" : ""}`}>
            {i + 1}. {item.sentence}
          </p>
          {exercise.toggleChoices ? (
            <div className="flex overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)]">
              {item.choices.map((choice, ci) => {
                const isSelected = selected[i] === ci;
                const isCorrect = ci === item.correctIdx;
                let cls = `${exercise.inlineChoices ? "px-4 py-2" : "flex-1 py-2.5"} text-sm font-medium text-center transition-colors whitespace-nowrap `;
                if (ci > 0) cls += "border-l border-[var(--color-border-default)] ";
                if (!validated) {
                  cls += isSelected
                    ? "bg-[var(--color-accent-fr)]/15 text-[var(--color-accent-fr)]"
                    : "bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]";
                } else {
                  if (isCorrect) {
                    cls += "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400";
                  } else if (isSelected && !isCorrect) {
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
              })}
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
                  if (isCorrect) {
                    cls +=
                      "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-700";
                  } else if (isSelected && !isCorrect) {
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
      ))}
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

  const allFilled = inputs.every((s: string) => s.trim() !== "");

  useEffect(() => {
    if (validateCommand > 0) validate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  useEffect(() => {
    onCanValidateChange(allFilled && !validated);
  }, [allFilled, validated, onCanValidateChange]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">
        {exercise.instruction}
      </p>
      {items.map((item: FillItem, i) => {
        const userAnswer = inputs[i] ?? "";
        const correct =
          normalizeAnswer(userAnswer) === normalizeAnswer(item.answer);
        return (
          <div key={i} className="space-y-2">
            <p className="text-sm font-medium text-[var(--color-text-primary)]">
              {i + 1}. {renderFillSentence(item.sentence)}
            </p>
            <input
              type="text"
              value={userAnswer}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(i, e.target.value)}
              disabled={validated}
              placeholder="Votre réponse…"
              className={`w-full rounded-[var(--radius-md)] border px-3 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-[var(--color-accent-fr)]/30 ${
                validated
                  ? correct
                    ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
                    : "border-red-400 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                  : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
              }`}
            />
            {validated && !correct && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400">
                Réponse correcte : <strong>{item.answer}</strong>
              </p>
            )}
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

  const allConnected = exercise.pairs.every((_, li) => connections.has(li));

  useEffect(() => {
    if (validateCommand > 0) validate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  useEffect(() => {
    onCanValidateChange(allConnected && !validated);
  }, [allConnected, validated, onCanValidateChange]);

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
                ? isCorrect
                  ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
                  : "border-red-400 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
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
                ? isCorrect
                  ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
                  : "border-red-400 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
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

  const allFilled = inputs.every((s) => s.trim() !== "");

  useEffect(() => {
    if (validateCommand > 0 && !validated && allFilled) {
      setValidated(true);
      onValidated(true);
    }
  }, [validateCommand]);

  useEffect(() => {
    onCanValidateChange(allFilled && !validated);
  }, [allFilled, validated]);

  function setInput(i: number, val: string) {
    setInputs((prev) => prev.map((v, idx) => (idx === i ? val : v)));
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">{exercise.instruction}</p>
      {exercise.prompts.map((prompt, i) => (
        <div key={i} className="space-y-1.5">
          <p className="text-sm font-medium text-[var(--color-text-primary)]">{prompt}</p>
          <input
            type="text"
            value={inputs[i]}
            onChange={(e) => setInput(i, e.target.value)}
            disabled={validated}
            placeholder="Écrivez votre phrase…"
            className="w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 py-2 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-accent-fr)] focus:outline-none disabled:opacity-60"
          />
          {validated && inputs[i].trim() !== "" && (
            <p className="text-xs text-emerald-600 dark:text-emerald-400">✓ Réponse enregistrée</p>
          )}
        </div>
      ))}
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
    </div>
  );
}

// ── Main runner ───────────────────────────────────────────────────────────────

export function ConjugaisonRunner({ lesson, subject = "Conjugaison" }: Props) {
  const router = useRouter();
  const pivot = usePivotLang();
  const { showPivot: showTrans } = useTranslation();
  const midExercises = lesson.midExercises ?? [];
  const theory2Idx = 1 + midExercises.length;
  const exStart = theory2Idx + (lesson.theory2 ? 1 : 0);
  const totalSteps = 1 + midExercises.length + (lesson.theory2 ? 1 : 0) + lesson.exercises.length;

  const [stepIdx, setStepIdx] = useState(0);
  const [exerciseKey, setExerciseKey] = useState(0);
  const [canValidate, setCanValidate] = useState(false);
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

  // Reset exercise state when moving to a new step
  useEffect(() => {
    setCanValidate(false);
    setValidateCommand(0);
  }, [stepIdx, exerciseKey]);

  const handleValidated = useCallback<(allCorrect: boolean) => void>((_allCorrect: boolean) => {
    setCanValidate(false);
  }, []);

  function goBack() {
    if (isFirst) {
      router.push("/francais");
    } else {
      setStepIdx((s: number) => s - 1);
      setExerciseKey((k: number) => k + 1);
    }
  }

  function goNext() {
    if (isLast) {
      markFrenchLessonComplete(lesson.slug);
      router.push("/francais");
    } else {
      setStepIdx((s: number) => s + 1);
      setExerciseKey((k: number) => k + 1);
    }
  }

  function resetExercise() {
    setExerciseKey((k: number) => k + 1);
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

      {/* Step label */}
      <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
        {isTheory
          ? (lesson.theory2 || midExercises.length > 0
              ? isTheory2 ? "Théorie 2" : "Théorie 1"
              : "")
          : (() => {
              const exNum = isMidEx ? stepIdx : stepIdx - exStart + 1 + midExercises.length;
              const exTotal = midExercises.length + lesson.exercises.length;
              return `Exercice ${exNum} / ${exTotal}`;
            })()}
      </p>

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

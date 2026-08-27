"use client";

import React, { useCallback, useEffect, useState } from "react";
import type { Exercise } from "@/lib/curriculum/grammar-data";
import { useEvalReveal } from "@/lib/eval-reveal-context";
import { usePrintQuestionLayout } from "@/components/print/PrintExerciseLayoutContext";
import { GrammarAudioButton, GrammarWordImage, shuffle } from "./grammar-media";

type ExProps<T extends Exercise["type"]> = {
  exercise: Extract<Exercise, { type: T }>;
  onValidated: (correct: number, total: number) => void;
  validateCommand: number;
  onCanValidateChange: (can: boolean) => void;
};

function useValidateGate(
  validateCommand: number,
  validated: boolean,
  doValidate: () => void,
  onCanValidateChange: (can: boolean) => void,
) {
  useEffect(() => {
    if (validateCommand > 0) doValidate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  useEffect(() => {
    onCanValidateChange(!validated);
  }, [validated, onCanValidateChange]);
}

const TILE =
  "rounded-md border px-2.5 py-1.5 text-sm font-medium transition-colors disabled:opacity-100";
const TILE_IDLE =
  `${TILE} border-[var(--color-accent-fr)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent-fr)]/5`;
const TILE_ON =
  `${TILE} border-2 border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]`;
const TILE_WRONG =
  `${TILE} border-2 border-amber-500 bg-transparent font-semibold text-amber-600`;

function norm(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/['\u2019\u2018]/g, "'")
    .replace(/\s+/g, " ");
}

function Instruction({ text }: { text: string }) {
  return <p className="text-sm text-[var(--color-text-secondary)]">{text}</p>;
}

// ── QCM à réponses multiples ──────────────────────────────────────────────────

export function QcmMultiExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: ExProps<"qcm">) {
  const fallback = exercise.poolSize ?? (exercise.pool?.length ? 5 : exercise.items.length || 5);
  const { questionCount, listClass } = usePrintQuestionLayout(fallback);
  const [items] = useState(() =>
    (exercise.pool && exercise.pool.length > 0 ? shuffle(exercise.pool) : exercise.items).slice(0, questionCount),
  );
  const [selected, setSelected] = useState<number[][]>(() => items.map(() => []));
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  const expected = (item: (typeof items)[number]) =>
    item.correctIdxs && item.correctIdxs.length > 0 ? [...item.correctIdxs].sort() : [item.correctIdx];

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const ok = items.filter((item, i) => {
      const got = [...(selected[i] ?? [])].sort();
      const exp = expected(item);
      return got.length === exp.length && got.every((v, j) => v === exp[j]);
    }).length;
    onValidated(ok, items.length);
  }, [validated, items, selected, onValidated]);

  useValidateGate(validateCommand, validated, doValidate, onCanValidateChange);

  function toggle(i: number, ci: number) {
    if (validated) return;
    setSelected((prev) =>
      prev.map((row, ri) => {
        if (ri !== i) return row;
        return row.includes(ci) ? row.filter((x) => x !== ci) : [...row, ci];
      }),
    );
  }

  return (
    <div className="space-y-5">
      <Instruction text={exercise.instruction} />
      <div className={listClass}>
        {items.map((item, i) => {
          const exp = new Set(expected(item));
          return (
            <div key={i} className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  <span className="text-[var(--color-accent-fr)]">{i + 1}.</span> {item.sentence}
                </p>
                <GrammarAudioButton text={item.audioText} />
              </div>
              <div className="flex flex-wrap gap-2">
                {item.choices.map((choice, ci) => {
                  const on = selected[i]?.includes(ci);
                  const show = validated && revealCorrection;
                  const isCorrect = exp.has(ci);
                  let cls = on ? TILE_ON : TILE_IDLE;
                  if (show && on && !isCorrect) cls = TILE_WRONG;
                  else if (show && !on && isCorrect) cls = TILE_WRONG;
                  return (
                    <button
                      key={ci}
                      type="button"
                      disabled={validated}
                      onClick={() => toggle(i, ci)}
                      className={cls}
                    >
                      <span className="mr-1.5 inline-block h-3.5 w-3.5 rounded-sm border border-current align-middle">
                        {on ? "✓" : ""}
                      </span>
                      {choice}
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

// ── Intrus ────────────────────────────────────────────────────────────────────

export function OddOneOutExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: ExProps<"odd_one_out">) {
  const fallback = exercise.poolSize ?? (exercise.pool?.length ? 5 : exercise.items.length || 5);
  const { questionCount, listClass } = usePrintQuestionLayout(fallback);
  const [items] = useState(() =>
    (exercise.pool && exercise.pool.length > 0 ? shuffle(exercise.pool) : exercise.items).slice(0, questionCount),
  );
  const [picked, setPicked] = useState<(number | null)[]>(() => items.map(() => null));
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    onValidated(items.filter((it, i) => picked[i] === it.oddIdx).length, items.length);
  }, [validated, items, picked, onValidated]);

  useValidateGate(validateCommand, validated, doValidate, onCanValidateChange);

  return (
    <div className="space-y-5">
      <Instruction text={exercise.instruction} />
      <div className={listClass}>
        {items.map((item, i) => (
          <div key={i} className="space-y-2">
            <p className="text-sm font-medium text-[var(--color-accent-fr)]">{i + 1}.</p>
            <div className="flex flex-wrap gap-2">
              {item.words.map((w, wi) => {
                const on = picked[i] === wi;
                const show = validated && revealCorrection;
                const isOdd = wi === item.oddIdx;
                let cls = on ? TILE_ON : TILE_IDLE;
                if (show && on && !isOdd) cls = TILE_WRONG;
                else if (show && !on && isOdd) cls = TILE_WRONG;
                return (
                  <button
                    key={wi}
                    type="button"
                    disabled={validated}
                    onClick={() => setPicked((p) => p.map((v, idx) => (idx === i ? wi : v)))}
                    className={cls}
                  >
                    {item.svgs?.[wi] || item.imageWords?.[wi] ? (
                      <span className="flex flex-col items-center gap-1">
                        <GrammarWordImage
                          svg={item.svgs?.[wi]}
                          word={item.imageWords?.[wi]}
                          alt={w}
                          size="sm"
                        />
                        <span>{w}</span>
                      </span>
                    ) : (
                      w
                    )}
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

// ── Reconnaissance de lettres ─────────────────────────────────────────────────

export function LetterSpotExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: ExProps<"letter_spot">) {
  const fallback = exercise.poolSize ?? (exercise.pool?.length ? 5 : exercise.items.length || 5);
  const { questionCount, listClass } = usePrintQuestionLayout(fallback);
  const [items] = useState(() =>
    (exercise.pool && exercise.pool.length > 0 ? shuffle(exercise.pool) : exercise.items).slice(0, questionCount),
  );
  const [marked, setMarked] = useState<boolean[][]>(() =>
    items.map((it) => Array.from(it.text).map(() => false)),
  );
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const ok = items.filter((it, i) => {
      const target = it.target.toLowerCase();
      return Array.from(it.text).every((ch, ci) => {
        const should = ch.toLowerCase() === target;
        return Boolean(marked[i]?.[ci]) === should;
      });
    }).length;
    onValidated(ok, items.length);
  }, [validated, items, marked, onValidated]);

  useValidateGate(validateCommand, validated, doValidate, onCanValidateChange);

  return (
    <div className="space-y-5">
      <Instruction text={exercise.instruction} />
      <div className={listClass}>
        {items.map((item, i) => (
          <div key={i} className="space-y-1">
            <p className="text-sm font-medium text-[var(--color-accent-fr)]">
              {i + 1}. Entoure tous les « {item.target} »
            </p>
            <div className="flex flex-wrap gap-1">
              {Array.from(item.text).map((ch, ci) => {
                if (ch === " ") {
                  return <span key={ci} className="w-2" />;
                }
                const on = marked[i]?.[ci];
                const should = ch.toLowerCase() === item.target.toLowerCase();
                const show = validated && revealCorrection;
                let cls =
                  "h-9 w-9 rounded-full border text-center text-base font-semibold ";
                if (show && should && on) {
                  cls += "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/15 text-[var(--color-accent-fr)]";
                } else if (show && should && !on) {
                  cls += "border-amber-500 text-amber-600";
                } else if (show && !should && on) {
                  cls += "border-amber-500 text-amber-600";
                } else if (on) {
                  cls += "border-2 border-[var(--color-accent-fr)] text-[var(--color-accent-fr)]";
                } else {
                  cls += "border-[var(--color-border-default)] text-[var(--color-text-primary)]";
                }
                return (
                  <button
                    key={ci}
                    type="button"
                    disabled={validated}
                    onClick={() =>
                      setMarked((prev) =>
                        prev.map((row, ri) =>
                          ri !== i ? row : row.map((v, j) => (j === ci ? !v : v)),
                        ),
                      )
                    }
                    className={cls}
                  >
                    {ch}
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

// ── Assemblage de syllabes ────────────────────────────────────────────────────

export function SyllableJoinExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: ExProps<"syllable_join">) {
  const fallback = exercise.poolSize ?? (exercise.pool?.length ? 5 : exercise.items.length || 5);
  const { questionCount, listClass } = usePrintQuestionLayout(fallback);
  const [items] = useState(() =>
    (exercise.pool && exercise.pool.length > 0 ? shuffle(exercise.pool) : exercise.items).slice(0, questionCount),
  );
  const [pools, setPools] = useState<string[][]>(() => items.map((it) => shuffle([...it.parts])));
  const [built, setBuilt] = useState<string[][]>(() => items.map(() => []));
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    onValidated(
      items.filter((it, i) => norm(built[i]?.join("") ?? "") === norm(it.answer)).length,
      items.length,
    );
  }, [validated, items, built, onValidated]);

  useValidateGate(validateCommand, validated, doValidate, onCanValidateChange);

  function add(i: number, pi: number) {
    if (validated) return;
    const part = pools[i]![pi]!;
    setPools((p) => p.map((row, ri) => (ri === i ? row.filter((_, j) => j !== pi) : row)));
    setBuilt((p) => p.map((row, ri) => (ri === i ? [...row, part] : row)));
  }
  function remove(i: number, bi: number) {
    if (validated) return;
    const part = built[i]![bi]!;
    setBuilt((p) => p.map((row, ri) => (ri === i ? row.filter((_, j) => j !== bi) : row)));
    setPools((p) => p.map((row, ri) => (ri === i ? [...row, part] : row)));
  }

  return (
    <div className="space-y-5">
      <Instruction text={exercise.instruction} />
      <div className={listClass}>
        {items.map((item, i) => {
          const ok = norm(built[i]?.join("") ?? "") === norm(item.answer);
          return (
            <div key={i} className="space-y-2">
              <p className="text-sm font-medium text-[var(--color-accent-fr)]">{i + 1}.</p>
              {validated && revealCorrection && !ok ? (
                <div className="flex min-h-9 flex-col justify-center border-b-2 border-amber-500 pb-0.5">
                  <span className="text-sm text-[var(--color-text-secondary)] line-through">
                    {built[i]?.join("") || "—"}
                  </span>
                  <span className="text-sm font-bold text-amber-600">{item.answer}</span>
                </div>
              ) : (
                <div className="flex min-h-9 flex-wrap gap-1.5 border-b-2 border-[var(--color-accent-fr)]/60 p-2">
                  {(built[i] ?? []).map((p, j) => (
                    <button
                      key={j}
                      type="button"
                      disabled={validated}
                      onClick={() => remove(i, j)}
                      className="rounded bg-[var(--color-accent-fr)]/10 px-2 py-0.5 text-sm font-semibold text-[var(--color-accent-fr)]"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
              {!validated && (
                <div className="flex flex-wrap gap-1.5">
                  {(pools[i] ?? []).map((p, j) => (
                    <button key={j} type="button" onClick={() => add(i, j)} className={TILE_IDLE}>
                      {p}
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

// ── Discrimination auditive ───────────────────────────────────────────────────

export function AudioDiscrimExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: ExProps<"audio_discrim">) {
  const fallback = exercise.poolSize ?? (exercise.pool?.length ? 5 : exercise.items.length || 5);
  const { questionCount, listClass } = usePrintQuestionLayout(fallback);
  const [items] = useState(() =>
    (exercise.pool && exercise.pool.length > 0 ? shuffle(exercise.pool) : exercise.items).slice(0, questionCount),
  );
  const [answers, setAnswers] = useState<(boolean | null)[]>(() => items.map(() => null));
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    onValidated(items.filter((it, i) => answers[i] === it.same).length, items.length);
  }, [validated, items, answers, onValidated]);

  useValidateGate(validateCommand, validated, doValidate, onCanValidateChange);

  return (
    <div className="space-y-5">
      <Instruction text={exercise.instruction} />
      <div className={listClass}>
        {items.map((item, i) => {
          const chosen = answers[i];
          const show = validated && revealCorrection;
          const ok = chosen === item.same;
          const btn = (val: boolean, label: string) => {
            const on = chosen === val;
            let cls = on ? TILE_ON : TILE_IDLE;
            if (show && on && !ok) cls = TILE_WRONG;
            else if (show && !on && val === item.same && !ok) cls = TILE_WRONG;
            return (
              <button
                type="button"
                disabled={validated}
                onClick={() => setAnswers((p) => p.map((v, idx) => (idx === i ? val : v)))}
                className={cls}
              >
                {label}
              </button>
            );
          };
          return (
            <div key={i} className="flex flex-wrap items-center gap-2">
              <span className="w-5 text-sm font-bold text-[var(--color-accent-fr)]">{i + 1}.</span>
              <GrammarAudioButton text={item.audioA} label="A" />
              <GrammarAudioButton text={item.audioB} label="B" />
              {btn(true, "Pareil")}
              {btn(false, "Différent")}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Anagramme (lettres → mot) ─────────────────────────────────────────────────

type Tile = { id: string; char: string };

export function AnagramExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: ExProps<"anagram">) {
  const fallback = exercise.poolSize ?? (exercise.pool?.length ? 5 : exercise.items.length || 5);
  const { questionCount, listClass } = usePrintQuestionLayout(fallback);
  const [items] = useState(() =>
    (exercise.pool && exercise.pool.length > 0 ? shuffle(exercise.pool) : exercise.items).slice(0, questionCount),
  );
  const [pools, setPools] = useState<Tile[][]>(() =>
    items.map((it, i) =>
      shuffle((it.letters ?? it.answer.split("")).map((char, j) => ({ id: `${i}-${j}-${char}`, char }))),
    ),
  );
  const [built, setBuilt] = useState<Tile[][]>(() => items.map(() => []));
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    onValidated(
      items.filter((it, i) => norm(built[i]?.map((t) => t.char).join("") ?? "") === norm(it.answer)).length,
      items.length,
    );
  }, [validated, items, built, onValidated]);

  useValidateGate(validateCommand, validated, doValidate, onCanValidateChange);

  return (
    <div className="space-y-5">
      <Instruction text={exercise.instruction} />
      <div className={listClass}>
        {items.map((item, i) => {
          const got = built[i]?.map((t) => t.char).join("") ?? "";
          const ok = norm(got) === norm(item.answer);
          return (
            <div key={i} className="space-y-2">
              <p className="text-sm font-medium text-[var(--color-accent-fr)]">{i + 1}.</p>
              {validated && revealCorrection && !ok ? (
                <div className="flex min-h-9 flex-col justify-center border-b-2 border-amber-500 pb-0.5">
                  <span className="text-sm text-[var(--color-text-secondary)] line-through">{got || "—"}</span>
                  <span className="text-sm font-bold text-amber-600">{item.answer}</span>
                </div>
              ) : (
                <div className="flex min-h-9 flex-wrap gap-1 border-b-2 border-[var(--color-accent-fr)]/60 p-2">
                  {(built[i] ?? []).map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      disabled={validated}
                      onClick={() => {
                        setBuilt((p) => p.map((row, ri) => (ri === i ? row.filter((x) => x.id !== t.id) : row)));
                        setPools((p) => p.map((row, ri) => (ri === i ? [...row, t] : row)));
                      }}
                      className="h-8 w-8 rounded border border-[var(--color-accent-fr)] text-sm font-bold text-[var(--color-accent-fr)]"
                    >
                      {t.char}
                    </button>
                  ))}
                </div>
              )}
              {!validated && (
                <div className="flex flex-wrap gap-1">
                  {(pools[i] ?? []).map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        setPools((p) => p.map((row, ri) => (ri === i ? row.filter((x) => x.id !== t.id) : row)));
                        setBuilt((p) => p.map((row, ri) => (ri === i ? [...row, t] : row)));
                      }}
                      className="h-8 w-8 rounded border border-[var(--color-border-default)] text-sm font-bold"
                    >
                      {t.char}
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

// ── Glisser étiquette → image (clic : même modèle que match) ──────────────────

export function DragLabelExercise({
  exercise,
  onValidated,
  validateCommand,
  onCanValidateChange,
}: ExProps<"drag_label">) {
  const fallback = exercise.poolSize ?? (exercise.pool?.length ? 1 : exercise.items.length || 1);
  const { questionCount } = usePrintQuestionLayout(fallback);
  const [items] = useState(() =>
    (exercise.pool && exercise.pool.length > 0 ? shuffle(exercise.pool) : exercise.items).slice(0, questionCount),
  );
  const [selectedLabel, setSelectedLabel] = useState<{ item: number; label: string } | null>(null);
  const [placed, setPlaced] = useState<Record<string, string>>({});
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    let correct = 0;
    let total = 0;
    items.forEach((it, ii) => {
      it.targets.forEach((t, ti) => {
        total += 1;
        if (placed[`${ii}-${ti}`] === t.label) correct += 1;
      });
    });
    onValidated(correct, total || 1);
  }, [validated, items, placed, onValidated]);

  useValidateGate(validateCommand, validated, doValidate, onCanValidateChange);

  return (
    <div className="space-y-6">
      <Instruction text={exercise.instruction} />
      {items.map((item, ii) => {
        const used = new Set(
          item.targets.map((_, ti) => placed[`${ii}-${ti}`]).filter(Boolean) as string[],
        );
        return (
          <div key={ii} className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {item.labels.map((lab) => {
                const taken = used.has(lab);
                const on = selectedLabel?.item === ii && selectedLabel.label === lab;
                return (
                  <button
                    key={lab}
                    type="button"
                    disabled={validated || taken}
                    onClick={() => setSelectedLabel(taken ? null : { item: ii, label: lab })}
                    className={on ? TILE_ON : taken ? `${TILE} border-[var(--color-border-default)] opacity-40` : TILE_IDLE}
                  >
                    {lab}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3">
              {item.targets.map((t, ti) => {
                const key = `${ii}-${ti}`;
                const lab = placed[key];
                const show = validated && revealCorrection;
                const ok = lab === t.label;
                return (
                  <button
                    key={ti}
                    type="button"
                    disabled={validated}
                    onClick={() => {
                      if (!selectedLabel || selectedLabel.item !== ii) {
                        if (lab) {
                          setPlaced((p) => {
                            const next = { ...p };
                            delete next[key];
                            return next;
                          });
                        }
                        return;
                      }
                      setPlaced((p) => ({ ...p, [key]: selectedLabel.label }));
                      setSelectedLabel(null);
                    }}
                    className={`flex flex-col items-center gap-1 rounded-lg border p-2 ${
                      show && lab && !ok
                        ? "border-amber-500"
                        : lab
                          ? "border-[var(--color-accent-fr)]"
                          : "border-dashed border-[var(--color-border-default)]"
                    }`}
                  >
                    <GrammarWordImage word={t.imageWord} svg={t.svg} src={t.image} alt={t.label} />
                    <span className={`text-xs font-semibold ${show && !ok ? "text-amber-600" : "text-[var(--color-accent-fr)]"}`}>
                      {show && !ok ? t.label : lab || "…"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

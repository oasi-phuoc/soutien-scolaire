"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { AppSelect } from "@/components/ui/AppSelect";
import { useEvalReveal } from "@/lib/eval-reveal-context";

// ── Shape data ─────────────────────────────────────────────────────────────────

type ShapeData = { id: string; name: string; definition: string; svg: string };

const SHAPES: ShapeData[] = [
  {
    id: "triangle",
    name: "triangle",
    definition: "polygone à 3 côtés",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'><polygon points='40,8 74,72 6,72' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/></svg>`,
  },
  {
    id: "carre",
    name: "carré",
    definition: "quadrilatère à 4 côtés égaux et 4 angles droits",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'><rect x='12' y='12' width='56' height='56' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/></svg>`,
  },
  {
    id: "rectangle",
    name: "rectangle",
    definition: "quadrilatère à 4 angles droits avec côtés opposés égaux",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'><rect x='4' y='24' width='72' height='32' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/></svg>`,
  },
  {
    id: "losange",
    name: "losange",
    definition: "quadrilatère à 4 côtés égaux sans forcément 4 angles droits",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'><polygon points='40,8 72,40 40,72 8,40' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/></svg>`,
  },
  {
    id: "trapeze",
    name: "trapèze",
    definition: "quadrilatère avec une seule paire de côtés parallèles",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'><polygon points='10,65 70,65 55,15 25,15' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/></svg>`,
  },
  {
    id: "parallelogramme",
    name: "parallélogramme",
    definition: "quadrilatère dont les côtés opposés sont parallèles",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'><polygon points='12,65 58,65 68,15 22,15' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/></svg>`,
  },
  {
    id: "pentagone",
    name: "pentagone",
    definition: "polygone à 5 côtés",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'><polygon points='40,8 72,32 60,70 20,70 8,32' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/></svg>`,
  },
  {
    id: "hexagone",
    name: "hexagone",
    definition: "polygone à 6 côtés",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'><polygon points='40,6 68,22 68,58 40,74 12,58 12,22' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/></svg>`,
  },
  {
    id: "cercle",
    name: "cercle",
    definition: "figure ronde dont tous les points sont à la même distance du centre",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'><circle cx='40' cy='40' r='32' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/></svg>`,
  },
  {
    id: "demi-cercle",
    name: "demi-cercle",
    definition: "moitié d'un cercle",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'><path d='M 8,50 A 32,32 0 0,1 72,50 Z' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/></svg>`,
  },
];

// ── Shared utils ───────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

function pickN<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, Math.min(n, arr.length));
}

function normShape(s: string): string {
  return s.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "").replace(/-/g, "");
}

type ExProps = {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
};

// ── Ex1: Show SVG → pick name (MCQ) ───────────────────────────────────────────

type MCQState = { shape: ShapeData; options: string[]; selected: string; checked: boolean; correct: boolean };

export function G1ShapeMCQExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [items] = useState<MCQState[]>(() =>
    pickN(SHAPES, 5).map(shape => {
      const distractors = pickN(SHAPES.filter(s => s.id !== shape.id), 3).map(s => s.name);
      return { shape, options: shuffle([shape.name, ...distractors]), selected: "", checked: false, correct: false };
    })
  );
  const [states, setStates] = useState<MCQState[]>(() => items);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    let correct = 0;
    const next = states.map(item => {
      const ok = normShape(item.selected) === normShape(item.shape.name);
      if (ok) correct++;
      return { ...item, checked: true, correct: ok };
    });
    setStates(next);
    onValidated(correct === states.length, correct, states.length);
  }, [states, onValidated]);

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Quel est le nom de cette forme ?</p>
      </div>
      <div className="space-y-4">
        {states.map((item, i) => (
          <div key={item.shape.id} className="flex items-center gap-3">
            <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <div
              className="h-12 w-12 shrink-0 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] p-1"
              dangerouslySetInnerHTML={{ __html: item.shape.svg }}
            />
            <div className="flex flex-wrap gap-2">
              {item.options.map(opt => {
                const isSelected = item.selected === opt;
                const isCorrectAnswer = opt === item.shape.name;
                const showCorrect = item.checked && revealCorrection && isCorrectAnswer;
                const showWrong = item.checked && revealCorrection && isSelected && !item.correct;
                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={item.checked}
                    onClick={() => !item.checked && setStates(prev => prev.map((s, j) => j === i ? { ...s, selected: opt } : s))}
                    className={`rounded-lg border px-3 py-1 text-xs font-medium transition-colors ${
                      showCorrect
                        ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                        : showWrong
                        ? "border-amber-500 text-amber-600"
                        : isSelected
                        ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]"
                        : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]/50"
                    }`}
                  >
                    {opt}
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

// ── Ex2: Show name → pick SVG (like ExImageMatch with SVGs) ───────────────────

const LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h"];

type MatchState = { answer: string; checked: boolean; correct: boolean };

export function G1NameToSVGExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [{ allShapes, cards }] = useState(() => {
    const allShapes = pickN(SHAPES, 6);
    const cards = shuffle([...allShapes]).slice(0, 4);
    return { allShapes, cards };
  });

  const [states, setStates] = useState<Record<string, MatchState>>(() =>
    Object.fromEntries(cards.map(s => [s.id, { answer: "", checked: false, correct: false }]))
  );
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    let correct = 0;
    const updated: Record<string, MatchState> = {};
    cards.forEach(shape => {
      const expectedIdx = allShapes.findIndex(s => s.id === shape.id);
      const expected = LETTERS[expectedIdx] ?? "";
      const userAns = states[shape.id]?.answer.trim() ?? "";
      const ok = userAns === expected;
      if (ok) correct++;
      updated[shape.id] = { answer: userAns, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct === cards.length, correct, cards.length);
  }, [states, cards, allShapes, onValidated]);

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);

  function handleSelect(shapeId: string, newVal: string) {
    setStates(prev => {
      const oldVal = prev[shapeId]?.answer ?? "";
      const next = { ...prev };
      const clash = Object.entries(prev).find(([id, s]) => id !== shapeId && s.answer === newVal && newVal !== "");
      if (clash) next[clash[0]] = { ...prev[clash[0]]!, answer: oldVal, checked: false, correct: false };
      next[shapeId] = { ...prev[shapeId]!, answer: newVal, checked: false, correct: false };
      return next;
    });
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Associez chaque image au mot en choisissant la lettre correspondante.</p>
      </div>
      {/* Name list */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-1">
        {allShapes.map((s, i) => (
          <div key={s.id} className="flex items-baseline gap-1.5">
            <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{LETTERS[i]}.</span>
            <span className="text-sm text-[var(--color-text-primary)]">{s.name}</span>
          </div>
        ))}
      </div>
      {/* SVG cards */}
      <div className="grid grid-cols-2 gap-3">
        {cards.map((shape, cardIdx) => {
          const s = states[shape.id]!;
          const correctIdx = allShapes.findIndex(x => x.id === shape.id);
          return (
            <div key={shape.id} className="flex flex-col items-center gap-2 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
              <div className="h-16 w-16" dangerouslySetInnerHTML={{ __html: shape.svg }} />
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[var(--color-accent-alg)]">{cardIdx + 1}.</span>
                {s.checked && !s.correct && revealCorrection ? (
                  <div className="flex h-8 w-16 flex-col items-center justify-center rounded border-b-2 border-amber-500">
                    <span className="text-[9px] leading-none text-amber-600 line-through">{s.answer || "—"}</span>
                    <span className="text-[10px] leading-none font-medium text-[var(--color-text-primary)]">{LETTERS[correctIdx]}</span>
                  </div>
                ) : (
                  <AppSelect
                    value={s.answer}
                    onChange={(v) => handleSelect(shape.id, v)}
                    options={LETTERS.slice(0, allShapes.length).map((l) => ({ value: l, label: l }))}
                    placeholder=""
                    emptyOption={{ value: "", label: "" }}
                    disabled={s.checked}
                    size="sm"
                    className="w-16"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Ex3: Definition → shape name ─────────────────────────────────────────────

type DefinitionMatchState = { answer: string; checked: boolean; correct: boolean };

export function G1DefinitionMatchExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [{ allShapes, definitions }] = useState(() => {
    const allShapes = pickN(SHAPES, 8);
    const definitions = shuffle([...allShapes]).slice(0, 5);
    return { allShapes, definitions };
  });

  const [states, setStates] = useState<Record<string, DefinitionMatchState>>(() =>
    Object.fromEntries(definitions.map(s => [s.id, { answer: "", checked: false, correct: false }]))
  );
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    let correct = 0;
    const updated: Record<string, DefinitionMatchState> = {};
    definitions.forEach(shape => {
      const expectedIdx = allShapes.findIndex(s => s.id === shape.id);
      const expected = LETTERS[expectedIdx] ?? "";
      const userAns = states[shape.id]?.answer.trim() ?? "";
      const ok = userAns === expected;
      if (ok) correct++;
      updated[shape.id] = { answer: userAns, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct === definitions.length, correct, definitions.length);
  }, [states, definitions, allShapes, onValidated]);

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);

  function handleSelect(shapeId: string, newVal: string) {
    setStates(prev => {
      const oldVal = prev[shapeId]?.answer ?? "";
      const next = { ...prev };
      const clash = Object.entries(prev).find(([id, s]) => id !== shapeId && s.answer === newVal && newVal !== "");
      if (clash) next[clash[0]] = { ...prev[clash[0]]!, answer: oldVal, checked: false, correct: false };
      next[shapeId] = { ...prev[shapeId]!, answer: newVal, checked: false, correct: false };
      return next;
    });
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Associez chaque définition au mot correspondant en choisissant la lettre.</p>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-1 border-b border-[var(--color-border-default)] pb-3">
        {allShapes.map((s, i) => (
          <div key={s.id} className="flex items-baseline gap-1.5">
            <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{LETTERS[i]}.</span>
            <span className="text-sm text-[var(--color-text-primary)]">{s.name}</span>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {definitions.map((shape, i) => {
          const state = states[shape.id]!;
          const correctIdx = allShapes.findIndex(s => s.id === shape.id);
          return (
            <div key={shape.id} className="grid grid-cols-[1.75rem_1fr_5.5rem] items-center gap-2">
              <span className="text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="text-sm text-[var(--color-text-primary)]">{shape.definition}</span>
              {state.checked && !state.correct && revealCorrection ? (
                <div className="flex h-9 flex-col items-center justify-center rounded border-b-2 border-amber-500">
                  <span className="text-[9px] leading-none text-amber-600 line-through">{state.answer || "—"}</span>
                  <span className="text-[10px] leading-none font-medium text-[var(--color-text-primary)]">{LETTERS[correctIdx]}</span>
                </div>
              ) : (
                <AppSelect
                  value={state.answer}
                  onChange={(v) => handleSelect(shape.id, v)}
                  options={LETTERS.slice(0, allShapes.length).map((l) => ({ value: l, label: l }))}
                  placeholder=""
                  emptyOption={{ value: "", label: "" }}
                  disabled={state.checked}
                  size="sm"
                  className="w-full"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Ex3: Missing letters ───────────────────────────────────────────────────────

const VOWELS = "aeiouyàâäéèêëîïôùûüœæ";
const ALPHABET_FR = "abcdefghijklmnopqrstuvwxyzàâäéèêëîïôùûüç".split("");

function makePattern(name: string): string[] {
  let blanked = 0;
  return name.split("").map(c => {
    if (blanked < 3 && VOWELS.includes(c.toLowerCase())) { blanked++; return "_"; }
    return c;
  });
}

type MLState = { blanks: Record<number, string>; blankOk: Record<number, boolean>; checked: boolean; correct: boolean };

export function G1MissingLettersExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [shapes] = useState<ShapeData[]>(() => pickN(SHAPES, 7));
  const [patterns] = useState<Record<string, string[]>>(() =>
    Object.fromEntries(shapes.map(s => [s.id, makePattern(s.name)]))
  );
  const [states, setStates] = useState<Record<string, MLState>>(() =>
    Object.fromEntries(shapes.map(s => {
      const blanks: Record<number, string> = {};
      makePattern(s.name).forEach((c, i) => { if (c === "_") blanks[i] = ""; });
      return [s.id, { blanks, blankOk: {}, checked: false, correct: false }];
    }))
  );
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    let correct = 0;
    const updated: Record<string, MLState> = {};
    shapes.forEach(s => {
      const state = states[s.id]!;
      const pattern = patterns[s.id]!;
      const blankOk: Record<number, boolean> = {};
      pattern.forEach((c, pos) => {
        if (c === "_") blankOk[pos] = normShape(state.blanks[pos] ?? "") === normShape(s.name[pos] ?? "");
      });
      const built = pattern.map((c, i) => c === "_" ? (state.blanks[i] ?? "") : c).join("");
      const ok = normShape(built) === normShape(s.name);
      if (ok) correct++;
      updated[s.id] = { ...state, blankOk, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct === shapes.length, correct, shapes.length);
  }, [states, shapes, patterns, onValidated]);

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);

  function setBlank(shapeId: string, pos: number, value: string) {
    setStates(prev => ({ ...prev, [shapeId]: { ...prev[shapeId]!, blanks: { ...prev[shapeId]!.blanks, [pos]: value }, checked: false, correct: false } }));
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Complétez le nom de la forme.</p>
      </div>
      <div className="space-y-3">
        {shapes.map((s, i) => {
          const state = states[s.id]!;
          const pattern = patterns[s.id]!;
          return (
            <div key={s.id} className="flex items-center gap-2">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <div className="h-9 w-9 shrink-0 rounded border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] p-0.5"
                dangerouslySetInnerHTML={{ __html: s.svg }} />
              <div className="flex flex-wrap items-center gap-1">
                {pattern.map((char, pos) =>
                  char === "_" ? (
                    state.checked && revealCorrection && state.blankOk[pos] === false ? (
                      <div key={pos} className="flex h-8 w-7 flex-col items-center justify-center rounded-none border-b-2 border-amber-500">
                        <span className="text-[9px] leading-none text-amber-600 line-through">{state.blanks[pos] || "—"}</span>
                        <span className="text-[9px] leading-none font-bold text-[var(--color-text-primary)]">{s.name[pos]}</span>
                      </div>
                    ) : (
                      <AppSelect
                        key={pos}
                        value={state.blanks[pos] ?? ""}
                        onChange={(v) => setBlank(s.id, pos, v)}
                        options={ALPHABET_FR.map((l) => ({ value: l, label: l }))}
                        placeholder=""
                        emptyOption={{ value: "", label: "" }}
                        disabled={state.checked}
                        size="sm"
                        className="w-7"
                      />
                    )
                  ) : (
                    <span key={pos} className="flex h-8 w-6 items-center justify-center rounded border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-sm font-medium text-[var(--color-text-primary)]">
                      {char}
                    </span>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Ex4: Anagram ──────────────────────────────────────────────────────────────

type LetterTile = { id: string; char: string };
type AnaItem = { shape: ShapeData; remaining: LetterTile[]; answer: LetterTile[]; checked: boolean; correct: boolean };

function makeTiles(name: string): LetterTile[] {
  return shuffle(name.split("").map((char, i) => ({ id: `${char}-${i}`, char })));
}

export function G1AnagramExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [items, setItems] = useState<AnaItem[]>(() =>
    pickN(SHAPES, 5).map(shape => ({
      shape,
      remaining: makeTiles(shape.name),
      answer: [],
      checked: false,
      correct: false,
    }))
  );
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    let correct = 0;
    const next = items.map(item => {
      const built = item.answer.map(t => t.char).join("");
      const ok = normShape(built) === normShape(item.shape.name);
      if (ok) correct++;
      return { ...item, checked: true, correct: ok };
    });
    setItems(next);
    onValidated(correct === items.length, correct, items.length);
  }, [items, onValidated]);

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);

  function addTile(idx: number, tile: LetterTile) {
    setItems(prev => prev.map((item, i) => i !== idx ? item : {
      ...item, remaining: item.remaining.filter(t => t.id !== tile.id), answer: [...item.answer, tile],
    }));
  }

  function removeTile(idx: number, tile: LetterTile) {
    setItems(prev => prev.map((item, i) => i !== idx ? item : {
      ...item, answer: item.answer.filter(t => t.id !== tile.id), remaining: [...item.remaining, tile],
    }));
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Cliquez sur les lettres pour former le mot.</p>
      </div>
      <div className="space-y-5">
        {items.map((item, idx) => {
          const builtWord = item.answer.map(t => t.char).join("");
          return (
            <div key={item.shape.id}>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{idx + 1}.</span>
                <div className="h-10 w-10 shrink-0 rounded border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] p-0.5"
                  dangerouslySetInnerHTML={{ __html: item.shape.svg }} />
                {item.checked ? (
                  <div className="flex min-h-[2rem] flex-1 items-center gap-2 border-b-2 border-amber-400/40 pb-0.5">
                    <span className="text-sm text-amber-500 line-through">{builtWord || "—"}</span>
                    {!item.correct && revealCorrection && <span className="text-sm font-bold text-[var(--color-text-primary)]">{item.shape.name}</span>}
                  </div>
                ) : (
                  <div className="flex min-h-[2rem] flex-1 flex-wrap items-center gap-px border-b-2 border-[var(--color-accent-alg)]/50 pb-0.5">
                    {item.answer.length === 0 ? (
                      <span className="text-xs text-[var(--color-text-tertiary)]">…</span>
                    ) : (
                      item.answer.map(tile => (
                        <button key={tile.id} type="button" onClick={() => removeTile(idx, tile)}
                          className="flex h-7 min-w-[1.5rem] items-center justify-center rounded border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 px-1 text-sm font-bold text-[var(--color-accent-alg)] hover:opacity-50">
                          {tile.char}
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
              {!item.checked && (
                <div className="ml-[3.75rem] mt-1.5 flex flex-wrap gap-1">
                  {item.remaining.map(tile => (
                    <button key={tile.id} type="button" onClick={() => addTile(idx, tile)}
                      className="flex h-7 min-w-[1.75rem] items-center justify-center rounded border border-[var(--color-border-default)] px-1.5 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] active:scale-95">
                      {tile.char}
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

// ── Ex5: Show SVG → type name ─────────────────────────────────────────────────

type WriteState = { answer: string; checked: boolean; correct: boolean };

export function G1ShapeWriteExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [shapes] = useState<ShapeData[]>(() => pickN(SHAPES, 5));
  const [states, setStates] = useState<Record<string, WriteState>>(() =>
    Object.fromEntries(shapes.map(s => [s.id, { answer: "", checked: false, correct: false }]))
  );
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    let correct = 0;
    const updated: Record<string, WriteState> = {};
    shapes.forEach(s => {
      const ans = (states[s.id]?.answer ?? "").trim();
      const ok = normShape(ans) === normShape(s.name);
      if (ok) correct++;
      updated[s.id] = { answer: ans, checked: true, correct: ok };
    });
    setStates(updated);
    onValidated(correct === shapes.length, correct, shapes.length);
  }, [states, shapes, onValidated]);

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Regardez et écrivez le mot correspondant.</p>
      </div>
      <div className="space-y-3">
        {shapes.map((s, i) => {
          const state = states[s.id]!;
          return (
            <div key={s.id} className="flex items-center gap-3">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <div className="h-12 w-12 shrink-0 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] p-1"
                dangerouslySetInnerHTML={{ __html: s.svg }} />
              {state.checked && !state.correct && revealCorrection ? (
                <div className="flex flex-1 flex-col justify-center rounded-none border-b-2 border-amber-500 px-1 py-0.5">
                  <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{state.answer || "—"}</span>
                  <span className="text-xs font-bold leading-none text-amber-600">{s.name}</span>
                </div>
              ) : (
                <input
                  type="text"
                  inputMode="text"
                  value={state.answer}
                  disabled={state.checked}
                  onChange={e => setStates(prev => ({ ...prev, [s.id]: { ...prev[s.id]!, answer: e.target.value, checked: false, correct: false } }))}
                  placeholder="Nom de la forme…"
                  className="flex-1 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 bg-transparent px-1 pb-1.5 text-sm outline-none transition-colors focus:border-[var(--color-accent-alg)] disabled:opacity-70"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Ex6: Shape properties checkbox (G1.2) ─────────────────────────────────────

// Only trueProps per shape — falseProps are auto-derived from other shapes' trueProps
const SHAPE_TRUE_PROPS: Record<string, string[]> = {
  triangle: [
    "Il a 3 côtés",
    "Il a 3 sommets",
    "Il a 3 angles intérieurs",
    "La somme de ses angles vaut 180°",
    "C'est un polygone",
  ],
  carre: [
    "Il a 4 côtés",
    "Il a 4 côtés égaux",
    "Il a 4 angles droits",
    "Il a 4 axes de symétrie",
    "Ses diagonales sont perpendiculaires",
    "Ses diagonales se coupent en leur milieu",
    "Ses côtés opposés sont parallèles",
    "C'est un polygone",
    "La somme de ses angles vaut 360°",
  ],
  rectangle: [
    "Il a 4 côtés",
    "Il a 4 angles droits",
    "Ses côtés opposés sont égaux",
    "Ses côtés opposés sont parallèles",
    "Il a 2 axes de symétrie",
    "Ses diagonales se coupent en leur milieu",
    "C'est un polygone",
    "La somme de ses angles vaut 360°",
  ],
  losange: [
    "Il a 4 côtés",
    "Il a 4 côtés égaux",
    "Ses diagonales sont perpendiculaires",
    "Ses diagonales se coupent en leur milieu",
    "Il a 2 axes de symétrie",
    "Ses côtés opposés sont parallèles",
    "C'est un polygone",
    "La somme de ses angles vaut 360°",
  ],
  trapeze: [
    "Il a 4 côtés",
    "Il a une paire de côtés parallèles",
    "C'est un polygone",
    "La somme de ses angles vaut 360°",
  ],
  parallelogramme: [
    "Il a 4 côtés",
    "Ses côtés opposés sont parallèles",
    "Ses côtés opposés sont égaux",
    "Ses diagonales se coupent en leur milieu",
    "C'est un polygone",
    "La somme de ses angles vaut 360°",
  ],
  pentagone: [
    "Il a 5 côtés",
    "Il a 5 sommets",
    "Il a 5 axes de symétrie (s'il est régulier)",
    "La somme de ses angles vaut 540°",
    "C'est un polygone",
  ],
  hexagone: [
    "Il a 6 côtés",
    "Il a 6 sommets",
    "Il a 6 axes de symétrie (s'il est régulier)",
    "La somme de ses angles vaut 720°",
    "C'est un polygone",
  ],
  cercle: [
    "Il a une infinité d'axes de symétrie",
    "Tout diamètre est un axe de symétrie",
    "Il n'a pas de côté droit",
    "Il n'a pas d'angle",
    "Le rayon est la moitié du diamètre",
  ],
  "demi-cercle": [
    "Il a 1 axe de symétrie",
    "Il est la moitié d'un cercle",
    "Il a un côté droit (le diamètre)",
  ],
};

function buildPropItems(shapeId: string): Array<{ text: string; correct: boolean }> {
  const trueProps = SHAPE_TRUE_PROPS[shapeId];
  if (!trueProps) return [];

  // Collect false candidates: trueProps from OTHER shapes that are NOT true for this shape
  const allOtherProps = Object.entries(SHAPE_TRUE_PROPS)
    .filter(([id]) => id !== shapeId)
    .flatMap(([, props]) => props)
    .filter(p => !trueProps.includes(p));
  const uniqueFalseProps = [...new Set(allOtherProps)];

  const maxTrue = Math.min(3, trueProps.length);
  const trueCount = Math.floor(Math.random() * maxTrue) + 1;
  const falseCount = 5 - trueCount;

  const trueItems = shuffle([...trueProps]).slice(0, trueCount).map(t => ({ text: t, correct: true as const }));
  const falseItems = shuffle(uniqueFalseProps).slice(0, falseCount).map(t => ({ text: t, correct: false as const }));

  return shuffle([...trueItems, ...falseItems]).slice(0, 5);
}

export function G1PropCheckExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [{ shape, items }] = useState(() => {
    const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)]!;
    return { shape, items: buildPropItems(shape.id) };
  });
  const [checked, setChecked] = useState<boolean[]>(() => Array(5).fill(false));
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    if (validated) return;
    const res = items.map((item, i) => (checked[i] ?? false) === item.correct);
    setResults(res);
    setValidated(true);
    onValidated(res.every(Boolean), res.filter(Boolean).length, res.length);
  }, [validated, items, checked, onValidated]);

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand;
      doValidate();
    }
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Cochez les propriétés qui s&apos;appliquent à cette forme.</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-16 w-16 shrink-0 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] p-1"
          dangerouslySetInnerHTML={{ __html: shape.svg }} />
        <p className="text-sm font-bold text-[var(--color-text-primary)]">{shape.name.charAt(0).toUpperCase() + shape.name.slice(1)}</p>
      </div>
      <div className="space-y-2">
        {items.map((item, i) => {
          const isChecked = checked[i] ?? false;
          const res = validated && revealCorrection ? results[i] : null;
          return (
            <label key={i} className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2 transition-colors ${
              validated
                ? res === false ? "border-amber-400 bg-amber-50/50 dark:bg-amber-950/20" : "border-[var(--color-border-default)]"
                : "border-[var(--color-border-default)] hover:border-[var(--color-accent-alg)]/50"
            }`}>
              <input
                type="checkbox"
                checked={isChecked}
                disabled={validated}
                onChange={() => !validated && setChecked(prev => prev.map((v, j) => j === i ? !v : v))}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-accent-alg)]"
              />
              <span className="flex-1 text-sm text-[var(--color-text-primary)]">{item.text}</span>
              {validated && res === false && (
                <span className="ml-auto shrink-0 text-xs font-bold text-amber-600">
                  {item.correct ? "✓ vrai" : "✗ faux"}
                </span>
              )}
            </label>
          );
        })}
      </div>
    </div>
  );
}

// ── Ex7: Shape Q&A (G1.2) ─────────────────────────────────────────────────────

const G1_QA_POOL: Array<{ q: string; a: string }> = [
  { q: "Combien d'axes de symétrie a un carré ?", a: "4" },
  { q: "Quelle est la somme des angles intérieurs d'un triangle (en °) ?", a: "180" },
  { q: "Combien d'axes de symétrie a un triangle équilatéral ?", a: "3" },
  { q: "Un losange a combien d'axes de symétrie ?", a: "2" },
  { q: "Quelle est la somme des angles d'un pentagone (en °) ?", a: "540" },
  { q: "Un rectangle a combien d'axes de symétrie ?", a: "2" },
  { q: "Un carré a combien de côtés ?", a: "4" },
  { q: "Un triangle a combien de côtés ?", a: "3" },
  { q: "Un hexagone a combien de côtés ?", a: "6" },
  { q: "La somme des angles d'un quadrilatère quelconque est de combien (en °) ?", a: "360" },
  { q: "Un hexagone régulier a combien d'axes de symétrie ?", a: "6" },
  { q: "Quelle est la somme des angles d'un hexagone (en °) ?", a: "720" },
  { q: "Un pentagone a combien de côtés ?", a: "5" },
  { q: "Si un cercle a un rayon de 5 cm, quel est son diamètre (en cm) ?", a: "10" },
  { q: "Si un cercle a un diamètre de 8 cm, quel est son rayon (en cm) ?", a: "4" },
  { q: "Un parallélogramme quelconque a combien d'axes de symétrie axiale ?", a: "0" },
  { q: "Un trapèze quelconque a combien d'axes de symétrie ?", a: "0" },
  { q: "Un pentagone régulier a combien d'axes de symétrie ?", a: "5" },
  { q: "Un triangle isocèle a combien d'axes de symétrie ?", a: "1" },
  { q: "Si un cercle a un rayon de 3 cm, quel est son diamètre (en cm) ?", a: "6" },
];

const MATH_TEXT_INPUT_G1 =
  "rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 " +
  "text-center font-mono outline-none transition-colors " +
  "focus:border-[var(--color-accent-alg)] disabled:opacity-70";

export function G1ShapeQAExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [questions] = useState(() => pickN(G1_QA_POOL, 5));
  const [answers, setAnswers] = useState<string[]>(() => Array(5).fill(""));
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    if (validated) return;
    const res = questions.map((q, i) => {
      const ans = (answers[i] ?? "").trim().replace(",", ".").replace("°", "");
      const exp = q.a.trim().replace(",", ".").replace("°", "");
      return ans === exp;
    });
    setResults(res);
    setValidated(true);
    onValidated(res.every(Boolean), res.filter(Boolean).length, res.length);
  }, [validated, questions, answers, onValidated]);

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand;
      doValidate();
    }
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Répondez aux questions sur les formes.</p>
      </div>
      <div className="space-y-4">
        {questions.map((q, i) => {
          const ans = answers[i] ?? "";
          const ok = validated && revealCorrection ? results[i] : null;
          return (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-0.5 w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <div className="flex flex-1 flex-col gap-1.5">
                <p className="text-sm text-[var(--color-text-primary)]">{q.q}</p>
                {ok === false ? (
                  <div className="w-20 flex flex-col items-center justify-center rounded-none border-0 border-b-2 border-amber-500 py-0.5">
                    <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{ans || "—"}</span>
                    <span className="text-xs font-bold leading-none text-amber-600">{q.a}</span>
                  </div>
                ) : (
                  <input
                    type="text"
                    inputMode="numeric"
                    value={ans}
                    disabled={validated}
                    onChange={e => setAnswers(prev => prev.map((a, j) => j === i ? e.target.value.replace(/[^0-9]/g, "") : a))}
                    className={`w-20 h-8 px-0 pb-1 text-sm ${MATH_TEXT_INPUT_G1}`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";
import { useCallback, useEffect, useRef, useState } from "react";

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
                const showCorrect = item.checked && isCorrectAnswer;
                const showWrong = item.checked && isSelected && !item.correct;
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
                {s.checked && !s.correct ? (
                  <div className="flex h-8 w-16 flex-col items-center justify-center rounded border-b-2 border-amber-500">
                    <span className="text-[9px] leading-none text-amber-600 line-through">{s.answer || "—"}</span>
                    <span className="text-[10px] leading-none font-medium text-[var(--color-text-primary)]">{LETTERS[correctIdx]}</span>
                  </div>
                ) : (
                  <select
                    value={s.answer}
                    disabled={s.checked && s.correct}
                    onChange={e => handleSelect(shape.id, e.target.value)}
                    className="h-8 w-16 appearance-none rounded border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 text-center [text-align-last:center] text-sm text-[var(--color-accent-alg)] outline-none"
                  >
                    <option value="" />
                    {LETTERS.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
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
              {state.checked && !state.correct ? (
                <div className="flex h-9 flex-col items-center justify-center rounded border-b-2 border-amber-500">
                  <span className="text-[9px] leading-none text-amber-600 line-through">{state.answer || "—"}</span>
                  <span className="text-[10px] leading-none font-medium text-[var(--color-text-primary)]">{LETTERS[correctIdx]}</span>
                </div>
              ) : (
                <select
                  value={state.answer}
                  disabled={state.checked && state.correct}
                  onChange={e => handleSelect(shape.id, e.target.value)}
                  className="h-9 w-full appearance-none rounded border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 text-center [text-align-last:center] text-sm text-[var(--color-accent-alg)] outline-none"
                >
                  <option value="" />
                  {LETTERS.slice(0, allShapes.length).map(l => <option key={l} value={l}>{l}</option>)}
                </select>
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
                    state.checked && state.blankOk[pos] === false ? (
                      <div key={pos} className="flex h-8 w-7 flex-col items-center justify-center rounded-none border-b-2 border-amber-500">
                        <span className="text-[9px] leading-none text-amber-600 line-through">{state.blanks[pos] || "—"}</span>
                        <span className="text-[9px] leading-none font-bold text-[var(--color-text-primary)]">{s.name[pos]}</span>
                      </div>
                    ) : (
                      <select
                        key={pos}
                        value={state.blanks[pos] ?? ""}
                        disabled={state.checked}
                        onChange={e => setBlank(s.id, pos, e.target.value)}
                        className="h-8 w-7 appearance-none rounded border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 text-center [text-align-last:center] text-xs font-bold text-[var(--color-accent-alg)] outline-none"
                      >
                        <option value="" />
                        {ALPHABET_FR.map(l => <option key={l} value={l}>{l}</option>)}
                      </select>
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
                    {!item.correct && <span className="text-sm font-bold text-[var(--color-text-primary)]">{item.shape.name}</span>}
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
              {state.checked && !state.correct ? (
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

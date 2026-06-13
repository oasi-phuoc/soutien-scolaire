"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

const MATH_TEXT_INPUT_BASE =
  "rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 " +
  "text-center font-mono outline-none " +
  "transition-colors focus:border-[var(--color-accent-alg)] disabled:opacity-70";

const CLS_WRONG = "rounded-none border-0 border-b-2 border-amber-500";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

function normShape(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[\s\-]/g, "");
}

// ── Shape data ──────────────────────────────────────────────────────────────

type Shape = { id: string; name: string; svg: string };

const SHAPES: Shape[] = [
  {
    id: "triangle",
    name: "Triangle",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'>
  <polygon points='40,8 74,72 6,72' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
</svg>`,
  },
  {
    id: "carre",
    name: "Carré",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'>
  <rect x='12' y='12' width='56' height='56' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
</svg>`,
  },
  {
    id: "rectangle",
    name: "Rectangle",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'>
  <rect x='4' y='24' width='72' height='32' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
</svg>`,
  },
  {
    id: "losange",
    name: "Losange",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'>
  <polygon points='40,8 72,40 40,72 8,40' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
</svg>`,
  },
  {
    id: "trapeze",
    name: "Trapèze",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'>
  <polygon points='10,65 70,65 55,15 25,15' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
</svg>`,
  },
  {
    id: "parallelogramme",
    name: "Parallélogramme",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'>
  <polygon points='12,65 58,65 68,15 22,15' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
</svg>`,
  },
  {
    id: "pentagone",
    name: "Pentagone",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'>
  <polygon points='40,8 72,32 60,70 20,70 8,32' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
</svg>`,
  },
  {
    id: "hexagone",
    name: "Hexagone",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'>
  <polygon points='40,6 68,22 68,58 40,74 12,58 12,22' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
</svg>`,
  },
  {
    id: "cercle",
    name: "Cercle",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'>
  <circle cx='40' cy='40' r='32' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
</svg>`,
  },
  {
    id: "demi-cercle",
    name: "Demi-cercle",
    svg: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block'>
  <path d='M 8,50 A 32,32 0 0,1 72,50 Z' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
</svg>`,
  },
];

type ExProps = {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
};

// ── Exercise 1: MCQ — see shape SVG, pick the correct name ──────────────────

type MCQQuestion = { shape: Shape; choices: string[] };

function genMCQ(): MCQQuestion[] {
  const picked = shuffle(SHAPES).slice(0, 5);
  return picked.map(shape => {
    const distractors = shuffle(SHAPES.filter(s => s.id !== shape.id))
      .slice(0, 3)
      .map(s => s.name);
    return { shape, choices: shuffle([shape.name, ...distractors]) };
  });
}

export function G1ShapeMCQExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [questions] = useState<MCQQuestion[]>(() => genMCQ());
  const [answers, setAnswers] = useState<(string | null)[]>(() => Array(5).fill(null));
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(0);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const correct = questions.filter((q, i) => answers[i] === q.shape.name).length;
    onValidated(correct === questions.length, correct, questions.length);
  }, [validated, questions, answers, onValidated]);

  useEffect(() => {
    if (validateCommand > prevCmd.current) {
      prevCmd.current = validateCommand;
      doValidate();
    }
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Identifie la forme géométrique.</p>
      {questions.map((q, i) => {
        const chosen = answers[i];
        const correct = validated ? (chosen === q.shape.name) : null;
        return (
          <div key={i} className="space-y-2">
            <p className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</p>
            <div className="mx-auto w-24 rounded-xl border border-[var(--color-border-default)] bg-white p-2">
              <div dangerouslySetInnerHTML={{ __html: q.shape.svg }} />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {q.choices.map(choice => {
                const isChosen = chosen === choice;
                const isCorrectChoice = choice === q.shape.name;
                let cls = "rounded-xl border px-3 py-2 text-sm font-medium transition-colors ";
                if (!validated) {
                  cls += isChosen
                    ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]"
                    : "border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]";
                } else if (isCorrectChoice) {
                  cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)] font-bold";
                } else if (isChosen && !isCorrectChoice) {
                  cls += "border-amber-500 bg-amber-50 text-amber-700";
                } else {
                  cls += "border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] opacity-60";
                }
                return (
                  <button key={choice} type="button" disabled={validated}
                    className={cls}
                    onClick={() => setAnswers(prev => prev.map((a, j) => j === i ? choice : a))}>
                    {choice}
                  </button>
                );
              })}
            </div>
            {validated && correct === false && (
              <p className="text-xs text-amber-600">Réponse : <strong>{q.shape.name}</strong></p>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Exercise 2: Name-to-SVG matching — see name, pick the correct shape ─────

type N2SQuestion = { name: string; svgChoices: Shape[] };

function genNameToSVG(): N2SQuestion[] {
  const picked = shuffle(SHAPES).slice(0, 5);
  return picked.map(shape => {
    const distractors = shuffle(SHAPES.filter(s => s.id !== shape.id)).slice(0, 3);
    return { name: shape.name, svgChoices: shuffle([shape, ...distractors]) };
  });
}

export function G1NameToSVGExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [questions] = useState<N2SQuestion[]>(() => genNameToSVG());
  const [answers, setAnswers] = useState<(string | null)[]>(() => Array(5).fill(null));
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(0);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const correct = questions.filter((q, i) => answers[i] === normShape(q.name)).length;
    onValidated(correct === questions.length, correct, questions.length);
  }, [validated, questions, answers, onValidated]);

  useEffect(() => {
    if (validateCommand > prevCmd.current) {
      prevCmd.current = validateCommand;
      doValidate();
    }
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Trouve la forme qui correspond au nom.</p>
      {questions.map((q, i) => {
        const chosen = answers[i];
        const correctId = normShape(q.name);
        return (
          <div key={i} className="space-y-2">
            <p className="text-sm font-bold text-[var(--color-text-primary)]">{i + 1}. <span className="text-[var(--color-accent-alg)]">{q.name}</span></p>
            <div className="grid grid-cols-4 gap-2">
              {q.svgChoices.map(s => {
                const isChosen = chosen === s.id;
                const isCorrect = s.id === correctId;
                let cls = "rounded-xl border p-1.5 transition-colors cursor-pointer ";
                if (!validated) {
                  cls += isChosen
                    ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10"
                    : "border-[var(--color-border-default)] bg-white";
                } else if (isCorrect) {
                  cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10";
                } else if (isChosen && !isCorrect) {
                  cls += "border-amber-500 bg-amber-50";
                } else {
                  cls += "border-[var(--color-border-default)] bg-white opacity-50";
                }
                return (
                  <button key={s.id} type="button" disabled={validated} className={cls}
                    onClick={() => setAnswers(prev => prev.map((a, j) => j === i ? s.id : a))}>
                    <div dangerouslySetInnerHTML={{ __html: s.svg }} />
                  </button>
                );
              })}
            </div>
            {validated && chosen !== correctId && (
              <p className="text-xs text-amber-600">Réponse : <strong>{q.name}</strong></p>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Exercise 3: Missing vowels — fill in the vowels ─────────────────────────

const VOWELS = new Set(["a", "e", "i", "o", "u"]);

function splitWithVowelBlanks(name: string): Array<{ char: string; isVowel: boolean }> {
  return name.split("").map(c => ({
    char: c,
    isVowel: VOWELS.has(c.normalize("NFD")[0]?.toLowerCase() ?? ""),
  }));
}

type MLQuestion = { shape: Shape; parts: Array<{ char: string; isVowel: boolean }> };

function genMissingLetters(): MLQuestion[] {
  return shuffle(SHAPES).slice(0, 5).map(shape => ({
    shape,
    parts: splitWithVowelBlanks(shape.name),
  }));
}

export function G1MissingLettersExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [questions] = useState<MLQuestion[]>(() => genMissingLetters());
  const [answers, setAnswers] = useState<string[][]>(() =>
    questions.map(q => Array(q.parts.filter(p => p.isVowel).length).fill(""))
  );
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(0);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const correct = questions.filter((q, i) => {
      const vowels = q.parts.filter(p => p.isVowel).map(p =>
        p.char.normalize("NFD")[0]?.toLowerCase() ?? ""
      );
      return answers[i]?.every((v, j) => v.trim().toLowerCase() === vowels[j]) ?? false;
    }).length;
    onValidated(correct === questions.length, correct, questions.length);
  }, [validated, questions, answers, onValidated]);

  useEffect(() => {
    if (validateCommand > prevCmd.current) {
      prevCmd.current = validateCommand;
      doValidate();
    }
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Complète les voyelles manquantes.</p>
      {questions.map((q, i) => {
        let vowelIdx = 0;
        const vowels = q.parts.filter(p => p.isVowel).map(p =>
          p.char.normalize("NFD")[0]?.toLowerCase() ?? ""
        );
        return (
          <div key={i} className="space-y-2">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="text-xs font-bold text-[var(--color-accent-alg)] mr-1">{i + 1}.</span>
              {q.parts.map((part, pi) => {
                if (!part.isVowel) {
                  return (
                    <span key={pi} className="text-base font-mono text-[var(--color-text-primary)]">{part.char}</span>
                  );
                }
                const vi = vowelIdx++;
                const val = answers[i]?.[vi] ?? "";
                const isWrong = validated && val.trim().toLowerCase() !== vowels[vi];
                return isWrong ? (
                  <div key={pi} className={`w-6 h-7 flex flex-col items-center justify-center ${CLS_WRONG}`}>
                    <span className="text-[9px] leading-none text-[var(--color-text-secondary)]">{val || "—"}</span>
                    <span className="text-[9px] font-bold leading-none text-amber-600">{vowels[vi]}</span>
                  </div>
                ) : (
                  <input key={pi} type="text" inputMode="text" maxLength={1} value={val} disabled={validated}
                    className={`w-6 h-7 px-0 text-sm ${MATH_TEXT_INPUT_BASE}`}
                    onChange={e => {
                      const v = e.target.value.replace(/[^a-zA-Zàâäéèêëïîôùûüÿæœ]/g, "").slice(-1);
                      setAnswers(prev => prev.map((row, ri) =>
                        ri === i ? row.map((c, ci) => ci === vi ? v : c) : row
                      ));
                    }}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Exercise 4: Anagram — unscramble tiles to spell the shape name ───────────

type AnagramQuestion = { shape: Shape; tiles: string[] };

function scramble(name: string): string[] {
  const letters = name.split("").filter(c => c !== "-" && c !== " ");
  return shuffle(letters);
}

function genAnagram(): AnagramQuestion[] {
  return shuffle(SHAPES).slice(0, 5).map(shape => ({
    shape,
    tiles: scramble(shape.name),
  }));
}

export function G1AnagramExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [questions] = useState<AnagramQuestion[]>(() => genAnagram());
  const [answers, setAnswers] = useState<string[][]>(() => questions.map(() => []));
  const [remaining, setRemaining] = useState<boolean[][]>(() =>
    questions.map(q => Array(q.tiles.length).fill(true))
  );
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(0);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const correct = questions.filter((q, i) => {
      const spelled = answers[i]?.join("") ?? "";
      return normShape(spelled) === normShape(q.shape.name);
    }).length;
    onValidated(correct === questions.length, correct, questions.length);
  }, [validated, questions, answers, onValidated]);

  useEffect(() => {
    if (validateCommand > prevCmd.current) {
      prevCmd.current = validateCommand;
      doValidate();
    }
  }, [validateCommand, doValidate]);

  function clickTile(qi: number, ti: number) {
    if (validated) return;
    const tile = questions[qi]!.tiles[ti]!;
    setRemaining(prev => prev.map((row, ri) => ri === qi ? row.map((v, vi) => vi === ti ? false : v) : row));
    setAnswers(prev => prev.map((row, ri) => ri === qi ? [...row, tile] : row));
  }

  function clickAnswer(qi: number, ai: number) {
    if (validated) return;
    const removed = answers[qi]![ai]!;
    const tiBack = questions[qi]!.tiles.findIndex((t, ti) => t === removed && !remaining[qi]![ti]!);
    if (tiBack >= 0) {
      setRemaining(prev => prev.map((row, ri) => ri === qi ? row.map((v, vi) => vi === tiBack ? true : v) : row));
    }
    setAnswers(prev => prev.map((row, ri) => ri === qi ? row.filter((_, ai2) => ai2 !== ai) : row));
  }

  return (
    <div className="space-y-5">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Remets les lettres dans l&apos;ordre pour former le nom de la forme.</p>
      {questions.map((q, i) => {
        const spelled = answers[i]?.join("") ?? "";
        const isCorrect = validated && normShape(spelled) === normShape(q.shape.name);
        const isWrong = validated && !isCorrect;
        return (
          <div key={i} className="space-y-2">
            <p className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</p>
            <div className="mx-auto w-20 rounded-xl border border-[var(--color-border-default)] bg-white p-1.5">
              <div dangerouslySetInnerHTML={{ __html: q.shape.svg }} />
            </div>
            {/* Answer area */}
            <div className="flex min-h-[36px] flex-wrap gap-1 rounded-xl border border-dashed border-[var(--color-accent-alg)]/40 p-2">
              {answers[i]?.map((tile, ai) => (
                <button key={ai} type="button" disabled={validated}
                  onClick={() => clickAnswer(i, ai)}
                  className={`h-8 min-w-[28px] rounded-lg border px-1.5 text-sm font-bold transition-colors ${
                    isCorrect ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]"
                    : isWrong ? "border-amber-500 bg-amber-50 text-amber-700"
                    : "border-[var(--color-accent-alg)]/60 bg-[var(--color-accent-alg)]/5 text-[var(--color-text-primary)]"
                  }`}>
                  {tile}
                </button>
              ))}
            </div>
            {isWrong && <p className="text-xs text-amber-600">Réponse : <strong>{q.shape.name}</strong></p>}
            {/* Remaining tiles */}
            <div className="flex flex-wrap gap-1">
              {q.tiles.map((tile, ti) => remaining[i]?.[ti] ? (
                <button key={ti} type="button" disabled={validated}
                  onClick={() => clickTile(i, ti)}
                  className="h-8 min-w-[28px] rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-1.5 text-sm font-mono font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-accent-alg)]/60">
                  {tile}
                </button>
              ) : <div key={ti} className="h-8 min-w-[28px]" />)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Exercise 5: Write — see SVG, type the name ───────────────────────────────

type WriteQuestion = { shape: Shape };

function genWrite(): WriteQuestion[] {
  return shuffle(SHAPES).slice(0, 5).map(shape => ({ shape }));
}

export function G1ShapeWriteExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [questions] = useState<WriteQuestion[]>(() => genWrite());
  const [answers, setAnswers] = useState<string[]>(() => Array(5).fill(""));
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(0);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const correct = questions.filter((q, i) =>
      normShape(answers[i] ?? "") === normShape(q.shape.name)
    ).length;
    onValidated(correct === questions.length, correct, questions.length);
  }, [validated, questions, answers, onValidated]);

  useEffect(() => {
    if (validateCommand > prevCmd.current) {
      prevCmd.current = validateCommand;
      doValidate();
    }
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Écris le nom de la forme géométrique.</p>
      {questions.map((q, i) => {
        const val = answers[i] ?? "";
        const isWrong = validated && normShape(val) !== normShape(q.shape.name);
        return (
          <div key={i} className="flex items-center gap-3">
            <span className="shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <div className="w-16 shrink-0 rounded-lg border border-[var(--color-border-default)] bg-white p-1">
              <div dangerouslySetInnerHTML={{ __html: q.shape.svg }} />
            </div>
            {isWrong ? (
              <div className={`w-32 h-8 flex flex-col items-center justify-center ${CLS_WRONG}`}>
                <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{val || "—"}</span>
                <span className="text-xs font-bold leading-none text-amber-600">{q.shape.name}</span>
              </div>
            ) : (
              <input type="text" inputMode="text" value={val} disabled={validated}
                placeholder="nom…"
                className={`w-32 h-8 px-2 text-sm ${MATH_TEXT_INPUT_BASE} ${validated && !isWrong ? "opacity-70" : ""}`}
                onChange={e => setAnswers(prev => prev.map((a, j) => j === i ? e.target.value : a))}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

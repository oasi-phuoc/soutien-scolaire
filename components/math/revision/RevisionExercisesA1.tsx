import React, { useCallback, useEffect, useMemo, useState } from "react";
import { OrderingChips, makeRng, seededShuffle } from "./RevisionCommon";
import type { RevisionExerciseMeta, RevisionExerciseProps } from "./RevisionCommon";

const CLS_WRONG = "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";

// ─── Exercise 1 — Audio → chiffres (3 pts) — A1.1 Exercise 5 ─────────────────

const CENTAINES = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const DIZAINES  = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const SPECIAUX  = Array.from({ length: 88 }, (_, i) => i + 12).filter(n => n % 10 !== 0);
const UNITES    = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function makeAudioQ(rng: ReturnType<typeof makeRng>): { clips: string[]; answer: number } {
  const hasCentaine = rng.int(0, 2) === 0;
  if (!hasCentaine) {
    if (rng.int(0, 1) === 0) {
      const d = DIZAINES[rng.int(0, DIZAINES.length - 1)]!;
      return { clips: [`/audio/nombres/dizaine/${d}.mp3`], answer: d };
    } else {
      const s = SPECIAUX[rng.int(0, SPECIAUX.length - 1)]!;
      return { clips: [`/audio/nombres/spécial/${s}.mp3`], answer: s };
    }
  }
  const c = CENTAINES[rng.int(0, CENTAINES.length - 1)]!;
  const sub = rng.int(0, 3);
  if (sub === 0) return { clips: [`/audio/nombres/centaine/${c}.mp3`], answer: c };
  if (sub === 1) {
    const d = DIZAINES[rng.int(0, DIZAINES.length - 1)]!;
    return { clips: [`/audio/nombres/centaine/${c}.mp3`, `/audio/nombres/dizaine/${d}.mp3`], answer: c + d };
  }
  if (sub === 2) {
    const s = SPECIAUX[rng.int(0, SPECIAUX.length - 1)]!;
    return { clips: [`/audio/nombres/centaine/${c}.mp3`, `/audio/nombres/spécial/${s}.mp3`], answer: c + s };
  }
  const u = UNITES[rng.int(0, UNITES.length - 1)]!;
  return { clips: [`/audio/nombres/centaine/${c}.mp3`, `/audio/nombres/unité/${u}.mp3`], answer: c + u };
}

function RevAudioButton({ clips }: { clips: string[] }) {
  const [playing, setPlaying] = useState(false);
  const handlePlay = () => {
    if (playing || clips.length === 0) return;
    setPlaying(true);
    let i = 0;
    const playNext = () => {
      if (i >= clips.length) { setPlaying(false); return; }
      const audio = new Audio(clips[i]!); i++;
      audio.addEventListener("ended", playNext, { once: true });
      audio.addEventListener("error", playNext, { once: true });
      void audio.play().catch(playNext);
    };
    playNext();
  };
  return (
    <button type="button" onClick={handlePlay} disabled={playing}
      aria-label={playing ? "Lecture en cours…" : "Écouter"}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-alg)] text-white transition-opacity disabled:opacity-60 active:opacity-70">
      {playing ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <rect x="5" y="4" width="4" height="16" rx="1"/><rect x="15" y="4" width="4" height="16" rx="1"/>
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6 4l14 8-14 8V4z"/>
        </svg>
      )}
    </button>
  );
}

function A1Ex1({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const questions = useMemo(() => {
    const rng = makeRng(exerciseKey);
    return Array.from({ length: 3 }, () => makeAudioQ(rng));
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(() => Array(3).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => { if (parseInt(answers[i] ?? "") === q.answer) pts++; });
    onValidated(pts, 3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Écoutez et écrivez les nombres.</p>
      {questions.map((q, i) => {
        const ans = answers[i] ?? "";
        const ok = validated ? parseInt(ans) === q.answer : null;
        return (
          <div key={i} className="flex items-center gap-3">
            <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <RevAudioButton clips={q.clips} />
            {validated ? (
              <div className={`flex flex-1 h-10 items-center gap-2 rounded-[var(--radius-md)] border px-3 ${ok ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30" : CLS_WRONG}`}>
                {ok
                  ? <span className="text-sm font-bold text-[var(--color-text-primary)]">{ans}</span>
                  : <><span className="line-through text-amber-500 text-xs">{ans || "—"}</span><span className="text-sm font-bold text-[var(--color-text-primary)]">{q.answer}</span></>}
              </div>
            ) : (
              <input type="text" inputMode="numeric" value={ans} placeholder="Votre réponse…"
                onChange={e => setAnswers(prev => prev.map((a, j) => j === i ? e.target.value.replace(/[^0-9]/g, "") : a))}
                className="flex-1 h-10 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-accent-alg)]/10 px-3 text-sm font-bold tabular-nums outline-none focus-visible:border-[var(--color-accent-alg)]"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── SVG block sub-components (inline <g> elements) ──────────────────────────

function MillierGroup({ s = 4, d = 9 }: { s?: number; d?: number }) {
  const fw = s * 10, fh = s * 10;
  return (
    <g>
      <polygon points={`0,${d} ${fw},${d} ${fw + d},0 ${d},0`} fill="#BBF7D0" stroke="#6EE7B7" strokeWidth="0.5" />
      <polygon points={`${fw},${d} ${fw + d},0 ${fw + d},${fh} ${fw},${fh + d}`} fill="#34D399" stroke="#10B981" strokeWidth="0.5" />
      {Array.from({ length: 10 }, (_, row) =>
        Array.from({ length: 10 }, (_, col) => (
          <rect key={`${row}-${col}`} x={col * s + 0.5} y={d + row * s + 0.5} width={s - 1} height={s - 1}
            fill="#6EE7B7" stroke="#34D399" strokeWidth="0.5" rx="0.5" />
        ))
      )}
    </g>
  );
}

function CentaineGroup({ s = 5 }: { s?: number }) {
  return (
    <g>
      {Array.from({ length: 10 }, (_, row) =>
        Array.from({ length: 10 }, (_, col) => (
          <rect key={`${row}-${col}`} x={col * s + 0.5} y={row * s + 0.5} width={s - 1} height={s - 1}
            fill="#C4B5FD" stroke="#8B5CF6" strokeWidth="0.5" rx="0.5" />
        ))
      )}
    </g>
  );
}

function DizaineGroup({ s = 9 }: { s?: number }) {
  return (
    <g>
      {Array.from({ length: 10 }, (_, i) => (
        <rect key={i} x={0.5} y={i * s + 0.5} width={s - 1} height={s - 1}
          fill="#FED7AA" stroke="#F97316" strokeWidth="0.5" rx="0.5" />
      ))}
    </g>
  );
}

function UniteGroup({ s = 16 }: { s?: number }) {
  return (
    <g>
      <rect x={0.5} y={0.5} width={s - 1} height={s - 1} fill="#BAE6FD" stroke="#38BDF8" strokeWidth="0.5" rx="1.5" />
    </g>
  );
}

// ─── Seeded block placement ───────────────────────────────────────────────────

type BlockPos = { kind: "m" | "h" | "d" | "u"; x: number; y: number };
const BLOCK_SIZES: Record<"m" | "h" | "d" | "u", [number, number]> = {
  m: [49, 49], h: [50, 50], d: [9, 90], u: [16, 16],
};

function placeBlocksSeeded(kinds: Array<"m" | "h" | "d" | "u">, W: number, H: number, rng: ReturnType<typeof makeRng>): BlockPos[] {
  const placed: BlockPos[] = [];
  for (const kind of kinds) {
    const [bw, bh] = BLOCK_SIZES[kind]!;
    let best: { x: number; y: number } = { x: 0, y: 0 };
    let bestOverlap = Infinity;
    const maxX = Math.max(0, W - bw - 1);
    const maxY = Math.max(0, H - bh - 1);
    for (let attempt = 0; attempt < 300; attempt++) {
      const x = Math.floor(rng.next() * maxX);
      const y = Math.floor(rng.next() * maxY);
      let overlap = 0;
      for (const p of placed) {
        const [pw, ph] = BLOCK_SIZES[p.kind]!;
        const ox = Math.max(0, Math.min(x + bw, p.x + pw + 2) - Math.max(x, p.x - 2));
        const oy = Math.max(0, Math.min(y + bh, p.y + ph + 2) - Math.max(y, p.y - 2));
        overlap += ox * oy;
      }
      if (overlap < bestOverlap) { bestOverlap = overlap; best = { x, y }; }
      if (overlap === 0) break;
    }
    placed.push({ kind, ...best });
  }
  return placed;
}

// ─── Exercise 2 — Compter les blocs (3 pts) — A1.2 Exercise 3 ─────────────────

function A1Ex2({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const { q } = useMemo(() => {
    const rng = makeRng(exerciseKey);
    let m = 1, c = 1, d = 1, u = 1;
    for (let g = 0; g < 200; g++) {
      const _m = rng.int(1, 2);
      const _c = rng.int(0, 5);
      const _d = rng.int(0, 7);
      const _u = rng.int(0, 9);
      const total = _m + _c + _d + _u;
      if (total >= 5 && total <= 20) { m = _m; c = _c; d = _d; u = _u; break; }
    }
    const W = 320, H = 200;
    const posRng = makeRng(exerciseKey * 100 + 13);
    const kinds: Array<"m" | "h" | "d" | "u"> = seededShuffle([
      ...Array(m).fill("m"), ...Array(c).fill("h"),
      ...Array(d).fill("d"), ...Array(u).fill("u"),
    ], exerciseKey + 37);
    const positions = placeBlocksSeeded(kinds, W, H, posRng);
    return { q: { m, c, d, u, positions, W, H } };
  }, [exerciseKey]);

  const mkEmpty = () => ({ m: "", c: "", d: "", u: "" });
  const [answer, setAnswer] = useState(mkEmpty);

  useEffect(() => {
    if (validateTrigger === 0) return;
    const mOk = parseInt(answer.m) === q.m * 1000;
    const cOk = parseInt(answer.c) === q.c * 100;
    const dOk = parseInt(answer.d) === q.d * 10;
    const uOk = parseInt(answer.u) === q.u;
    const pts = Math.round(3 * [mOk, cOk, dOk, uOk].filter(Boolean).length / 4);
    onValidated(pts, 3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const setAns = (patch: Partial<ReturnType<typeof mkEmpty>>) =>
    setAnswer(prev => ({ ...prev, ...patch }));

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Comptez chaque type de blocs et complétez la décomposition.</p>
      <div className="relative rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
        <div className="w-full overflow-hidden" style={{ maxWidth: q.W }}>
          <svg viewBox={`0 0 ${q.W} ${q.H}`} width="100%" style={{ display: "block" }}>
            {q.positions.map((pos, pi) => (
              <g key={pi} transform={`translate(${Math.round(pos.x)}, ${Math.round(pos.y)})`}>
                {pos.kind === "m" ? <MillierGroup s={4} d={9} /> :
                 pos.kind === "h" ? <CentaineGroup s={5} /> :
                 pos.kind === "d" ? <DizaineGroup s={9} /> :
                 <UniteGroup s={16} />}
              </g>
            ))}
          </svg>
        </div>
        {(() => {
          const mOk = validated ? parseInt(answer.m) === q.m * 1000 : null;
          const cOk = validated ? parseInt(answer.c) === q.c * 100 : null;
          const dOk = validated ? parseInt(answer.d) === q.d * 10 : null;
          const uOk = validated ? parseInt(answer.u) === q.u : null;
          const inputCls = "w-0 flex-1 rounded border border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 px-1 py-1 text-center text-sm outline-none focus-visible:border-[var(--color-accent-alg)]";
          const vCls = (ok: boolean | null) =>
            `flex-1 rounded border px-1 py-1 text-center text-sm ${ok === null ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30" : ok ? "border-blue-400 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]" : CLS_WRONG}`;
          return (
            <div className="mt-2 flex w-full items-center gap-1 text-sm font-medium text-[var(--color-text-primary)]">
              <span className="shrink-0">=</span>
              {([
                { key: "m" as const, ok: mOk, ph: "M×1000", val: q.m * 1000 },
                { key: "c" as const, ok: cOk, ph: "C×100",  val: q.c * 100 },
                { key: "d" as const, ok: dOk, ph: "D×10",   val: q.d * 10 },
                { key: "u" as const, ok: uOk, ph: "U×1",    val: q.u },
              ]).map((field, fi) => (
                <React.Fragment key={field.key}>
                  {fi > 0 && <span className="shrink-0 text-[var(--color-text-secondary)]">+</span>}
                  {validated ? (
                    <span className={vCls(field.ok)}>
                      {field.ok ? (answer[field.key] || String(field.val)) : String(field.val)}
                    </span>
                  ) : (
                    <input className={inputCls} placeholder={field.ph} inputMode="numeric" autoComplete="off"
                      value={answer[field.key]}
                      onChange={e => setAns({ [field.key]: e.target.value.replace(/[^0-9]/g, "") })} />
                  )}
                </React.Fragment>
              ))}
            </div>
          );
        })()}
      </div>
    </div>
  );
}

// ─── Exercise 3 — Décomposer en M+C+D+U (4 pts) — A1.2 Exercise 6 ─────────────

function A1Ex3({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    return Array.from({ length: 2 }, () => {
      const n = rng.int(1101, 9999);
      const m = Math.floor(n / 1000);
      const c = Math.floor((n % 1000) / 100);
      const d = Math.floor((n % 100) / 10);
      const u = n % 10;
      return { n, m, c, d, u };
    });
  }, [exerciseKey]);

  const mkEmpty = () => ({ m: "", c: "", d: "", u: "" });
  const [answers, setAnswers] = useState(() => Array(2).fill(null).map(mkEmpty));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => {
      const a = answers[i] ?? mkEmpty();
      if (parseInt(a.m) === q.m * 1000 && parseInt(a.c) === q.c * 100) pts++;
      if (parseInt(a.d) === q.d * 10 && parseInt(a.u) === q.u) pts++;
    });
    onValidated(pts, 4);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const setAns = (i: number, patch: Partial<ReturnType<typeof mkEmpty>>) =>
    setAnswers(prev => prev.map((a, j) => j === i ? { ...a, ...patch } : a));

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Décomposez le nombre en milliers, centaines, dizaines et unités.</p>
      {data.map((q, i) => {
        const a = answers[i] ?? mkEmpty();
        const mOk = validated ? parseInt(a.m) === q.m * 1000 : null;
        const cOk = validated ? parseInt(a.c) === q.c * 100 : null;
        const dOk = validated ? parseInt(a.d) === q.d * 10 : null;
        const uOk = validated ? parseInt(a.u) === q.u : null;
        const fieldBase = "w-full rounded border bg-[var(--color-accent-alg)]/10 px-1 py-1.5 text-center text-sm outline-none focus-visible:border-[var(--color-accent-alg)] border-[var(--color-border-default)]";
        const vCls = (ok: boolean | null) => ok === null ? "" : ok ? "border-[var(--color-border-default)]" : "border-amber-500 bg-amber-50 text-amber-600";
        return (
          <div key={i} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
            <div className="mb-3 flex justify-center">
              <span className="text-2xl font-bold tabular-nums text-[var(--color-text-primary)]">
                {q.n.toLocaleString("fr-CH")}
              </span>
            </div>
            <div className="flex items-start gap-1 text-sm font-medium text-[var(--color-text-primary)]">
              <span className="mt-[7px] shrink-0">=</span>
              {[
                { key: "m" as const, val: q.m * 1000, ok: mOk, label: "millier" },
                { key: "c" as const, val: q.c * 100, ok: cOk, label: "centaine" },
                { key: "d" as const, val: q.d * 10, ok: dOk, label: "dizaine" },
                { key: "u" as const, val: q.u, ok: uOk, label: "unité" },
              ].map((field, fi) => (
                <React.Fragment key={field.key}>
                  {fi > 0 && <span className="mt-[7px] shrink-0 text-[var(--color-text-secondary)]">+</span>}
                  <div className="flex flex-1 flex-col items-center gap-0.5">
                    {validated ? (
                      <span className={`w-full rounded border px-1 py-1.5 text-sm inline-flex items-center justify-center gap-1 ${vCls(field.ok)}`}>
                        {field.ok ? <span>{a[field.key] || String(field.val)}</span> : <><span className="line-through text-xs">{a[field.key] || "—"}</span><span>{String(field.val)}</span></>}
                      </span>
                    ) : (
                      <input className={fieldBase} inputMode="numeric" autoComplete="off"
                        value={a[field.key]}
                        onChange={e => setAns(i, { [field.key]: e.target.value.replace(/[^0-9]/g, "") })} />
                    )}
                    <span className="text-xs text-[var(--color-text-secondary)]">{field.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Exercise 4 — Comparaison à 6 chiffres (5 pts) — A1.3 Exercise 2 ─────────

type CompSym = "<" | ">" | "=";

function A1Ex4({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    return Array.from({ length: 5 }, (_, i) => {
      if (i === 2) {
        const a = rng.int(100000, 899999);
        return { a, b: a, correct: "=" as CompSym };
      }
      const a = rng.int(100000, 899999);
      const b = rng.int(100000, 899999);
      const correct: CompSym = a < b ? "<" : a > b ? ">" : "=";
      return { a, b, correct };
    });
  }, [exerciseKey]);

  const [selected, setSelected] = useState<(CompSym | "")[]>(Array(5).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((pair, i) => {
      if (selected[i] === pair.correct) pts++;
    });
    onValidated(pts, 5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Comparez les deux nombres.</p>
      {data.map((pair, i) => {
        const sel = selected[i] ?? "";
        const correct = pair.correct;
        return (
          <div key={i} className="flex items-center gap-2">
            <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <span className="font-mono text-sm font-bold tabular-nums text-[var(--color-text-primary)]">
              {pair.a.toLocaleString("fr-CH")}
            </span>
            <div className="flex gap-1">
              {(["<", "=", ">"] as CompSym[]).map(sym => {
                let cls = "w-9 h-8 rounded border text-center text-sm font-bold transition-colors";
                if (validated) {
                  if (sym === correct && sym !== sel) cls += ` ${CLS_WRONG}`;
                  else if (sym === sel && sym === correct) cls += " border-teal-500 bg-teal-50 dark:bg-teal-950/30 text-[var(--color-text-primary)]";
                  else if (sym === sel && sym !== correct) cls += ` ${CLS_WRONG}`;
                  else cls += " border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-50";
                } else {
                  cls += sel === sym
                    ? " border-teal-500 bg-teal-50 dark:bg-teal-950/30 text-[var(--color-text-primary)]"
                    : " border-zinc-300 dark:border-zinc-600 text-[var(--color-text-primary)] hover:border-teal-400 cursor-pointer";
                }
                return (
                  <button key={sym} type="button" className={cls}
                    onClick={() => { if (!validated) setSelected(prev => prev.map((s, j) => j === i ? sym : s)); }}>
                    {sym}
                  </button>
                );
              })}
            </div>
            <span className="font-mono text-sm font-bold tabular-nums text-[var(--color-text-primary)]">
              {pair.b.toLocaleString("fr-CH")}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ─── Exercise 5 — Sélection par critère (3 pts) — A1.3 Ex3/4/5 style ────────

type SelectMode = "plus_grand" | "plus_petit" | "entre";

function A1Ex5({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const { numbers, mode, threshold, limitLo, limitHi, consigne } = useMemo(() => {
    const rng = makeRng(exerciseKey);
    const modes: SelectMode[] = ["plus_grand", "plus_petit", "entre"];
    const mode: SelectMode = modes[exerciseKey % 3]!;

    const nums: number[] = [];
    const used = new Set<number>();
    while (nums.length < 15) {
      const n = rng.int(10, 990);
      if (!used.has(n)) { nums.push(n); used.add(n); }
    }
    const sorted = [...nums].sort((a, b) => a - b);

    let threshold = sorted[7]!;
    let limitLo = sorted[3]!;
    let limitHi = sorted[11]!;
    let consigne = "";
    if (mode === "plus_grand") {
      threshold = sorted[rng.int(3, 10)]!;
      consigne = `Sélectionnez les nombres plus grands que ${threshold}.`;
    } else if (mode === "plus_petit") {
      threshold = sorted[rng.int(4, 11)]!;
      consigne = `Sélectionnez les nombres plus petits que ${threshold}.`;
    } else {
      limitLo = sorted[rng.int(2, 5)]!;
      limitHi = sorted[rng.int(9, 12)]!;
      consigne = `Sélectionnez les nombres entre ${limitLo} et ${limitHi}.`;
    }

    return { numbers: seededShuffle(nums, exerciseKey + 1), mode, threshold, limitLo, limitHi, consigne };
  }, [exerciseKey]);

  const [selected, setSelected] = useState<boolean[]>(() => Array(15).fill(false));

  const shouldSelect = useCallback((n: number) => {
    if (mode === "plus_grand") return n > threshold;
    if (mode === "plus_petit") return n < threshold;
    return n > limitLo && n < limitHi;
  }, [mode, threshold, limitLo, limitHi]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let correct = 0;
    numbers.forEach((n, i) => {
      if ((selected[i] ?? false) === shouldSelect(n)) correct++;
    });
    const pts = Math.round(3 * correct / 15);
    onValidated(pts, 3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">{consigne}</p>
      <div className="grid grid-cols-5 gap-2">
        {numbers.map((n, i) => {
          const sel = selected[i] ?? false;
          const should = shouldSelect(n);
          let cls = "rounded-lg border px-2 py-2.5 text-center text-sm font-mono font-bold transition-colors ";
          if (!validated) {
            cls += sel
              ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
              : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]";
          } else {
            if (sel && should) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
            else if (sel && !should) cls += CLS_WRONG;
            else if (!sel && should) cls += CLS_WRONG;
            else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-50";
          }
          return (
            <button key={i} type="button" disabled={validated}
              onClick={() => setSelected(prev => prev.map((v, j) => j === i ? !v : v))}
              className={cls}>
              {n}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Exercise 6 — Encadrer à la dizaine près (5 pts) — A1.3 Exercise 6 ───────

function A1Ex6({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    return Array.from({ length: 5 }, () => {
      let n = rng.int(100, 899);
      while (n % 10 === 0) n = rng.int(100, 899);
      const lo = Math.floor(n / 10) * 10;
      const hi = lo + 10;
      const dir: "<" | ">" = rng.int(0, 1) === 0 ? "<" : ">";
      return { n, lo, hi, dir };
    });
  }, [exerciseKey]);

  const [answers, setAnswers] = useState(() =>
    Array(5).fill(null).map(() => ({ left: "", right: "" }))
  );

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => {
      const a = answers[i] ?? { left: "", right: "" };
      const leftExpected  = q.dir === "<" ? q.lo : q.hi;
      const rightExpected = q.dir === "<" ? q.hi : q.lo;
      if (parseInt(a.left) === leftExpected && parseInt(a.right) === rightExpected) pts++;
    });
    onValidated(pts, 5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const inputCls = "w-16 rounded border px-1 py-1.5 text-sm tabular-nums text-center border-[var(--color-border-default)] bg-[var(--color-accent-alg)]/10 outline-none focus-visible:border-[var(--color-accent-alg)]";

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Encadrez chaque nombre à la dizaine près.</p>
      {data.map((q, i) => {
        const a = answers[i] ?? { left: "", right: "" };
        const leftExpected  = q.dir === "<" ? q.lo : q.hi;
        const rightExpected = q.dir === "<" ? q.hi : q.lo;
        const leftOk  = validated ? parseInt(a.left)  === leftExpected  : null;
        const rightOk = validated ? parseInt(a.right) === rightExpected : null;
        const vCls = (ok: boolean | null) =>
          `w-16 rounded border px-1 py-1.5 text-sm tabular-nums text-center ${ok === null ? "" : ok ? "border-[var(--color-border-default)] text-[var(--color-text-primary)]" : CLS_WRONG}`;
        return (
          <div key={i} className="flex items-center gap-2">
            <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            {validated ? (
              <span className={vCls(leftOk)}>{leftOk ? (a.left || String(leftExpected)) : String(leftExpected)}</span>
            ) : (
              <input type="text" inputMode="numeric" className={inputCls} value={a.left}
                onChange={e => setAnswers(prev => prev.map((v, j) => j === i ? { ...v, left: e.target.value.replace(/[^0-9]/g, "") } : v))} />
            )}
            <span className="text-sm font-semibold text-[var(--color-text-secondary)]">{q.dir}</span>
            <span className="w-12 text-center text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{q.n}</span>
            <span className="text-sm font-semibold text-[var(--color-text-secondary)]">{q.dir}</span>
            {validated ? (
              <span className={vCls(rightOk)}>{rightOk ? (a.right || String(rightExpected)) : String(rightExpected)}</span>
            ) : (
              <input type="text" inputMode="numeric" className={inputCls} value={a.right}
                onChange={e => setAnswers(prev => prev.map((v, j) => j === i ? { ...v, right: e.target.value.replace(/[^0-9]/g, "") } : v))} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Exercise 7 — Droite numérique (5 pts) — A1.4 style ──────────────────────

type NLData = { start: number; end: number; step: number; divCount: number; labelEvery: number; target: number };

function A1Ex7({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const makeNL = (presets: Array<{ start: number; end: number; step: number }>, rng2: ReturnType<typeof makeRng>): NLData => {
      const p = presets[rng2.int(0, presets.length - 1)]!;
      const divCount = (p.end - p.start) / p.step;
      const labelEvery = divCount <= 5 ? 1 : divCount <= 10 ? 2 : 5;
      const ticks = Array.from({ length: divCount + 1 }, (_, k) => p.start + k * p.step);
      const cands = ticks.filter((_, k) => k % labelEvery !== 0 && k > 0 && k < divCount);
      const target = cands.length > 0 ? cands[rng2.int(0, cands.length - 1)]! : ticks[Math.ceil(divCount / 2)]!;
      return { start: p.start, end: p.end, step: p.step, divCount, labelEvery, target };
    };

    const FINE = [
      { start: 0, end: 100, step: 10 },
      { start: 100, end: 200, step: 10 },
      { start: 50, end: 150, step: 10 },
      { start: 200, end: 400, step: 20 },
    ];
    const COARSE = [
      { start: 0, end: 500, step: 100 },
      { start: 0, end: 1000, step: 100 },
      { start: 500, end: 1500, step: 100 },
      { start: 1000, end: 3000, step: 200 },
    ];

    const nl1 = makeNL(FINE, makeRng(exerciseKey + 1));
    const nl2 = makeNL(COARSE, makeRng(exerciseKey + 2));

    return { nl1, nl2 };
  }, [exerciseKey]);

  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [lineResults, setLineResults] = useState<[boolean | null, boolean | null]>([null, null]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    const r1 = parseInt(ans1) === data.nl1.target;
    const r2 = parseInt(ans2) === data.nl2.target;
    setLineResults([r1, r2]);
    onValidated((r1 ? 1 : 0) + (r2 ? 1 : 0), 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const NLPanel = ({ nl, answer, setAnswer, result }: {
    nl: NLData; answer: string; setAnswer: (v: string) => void; result: boolean | null;
  }) => {
    const W = 360, H = 90, ML = 28, lineW = 300, lineY = 68;
    const pos = (v: number) => ML + ((v - nl.start) / (nl.end - nl.start)) * lineW;
    const tx = pos(nl.target);
    const accent = "var(--color-accent-alg)";
    const arrowColor = result === false ? "#F59E0B" : accent;
    const fs = nl.end >= 1000 ? 7 : nl.end >= 100 ? 8 : 10;
    const ulY = 28;
    return (
      <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
          <line x1={ML} y1={lineY} x2={ML + lineW + 8} y2={lineY} stroke="currentColor" strokeWidth="2" />
          <polygon points={`${ML + lineW + 16},${lineY} ${ML + lineW + 8},${lineY - 4} ${ML + lineW + 8},${lineY + 4}`} fill="currentColor" />
          {Array.from({ length: nl.divCount + 1 }, (_, k) => {
            const v = nl.start + k * nl.step;
            const x = ML + (k / nl.divCount) * lineW;
            const labeled = k % nl.labelEvery === 0;
            return (
              <g key={k}>
                <line x1={x} y1={labeled ? lineY - 6 : lineY - 2} x2={x} y2={labeled ? lineY + 6 : lineY + 2}
                  stroke="currentColor" strokeWidth={labeled ? 1.5 : 0.5} />
                {labeled && (
                  <text x={x} y={lineY + 18} textAnchor="middle" fontSize={fs} fill="currentColor">{v}</text>
                )}
              </g>
            );
          })}
          <line x1={tx} y1={ulY} x2={tx} y2={lineY - 10} stroke={arrowColor} strokeWidth="1.5" strokeDasharray="4,2" />
          <polygon points={`${tx},${lineY - 4} ${tx - 4},${lineY - 11} ${tx + 4},${lineY - 11}`} fill={arrowColor} />
          {validated ? (
            result === false ? (
              <text x={tx} textAnchor="middle">
                <tspan y="15" fontSize="9" fill="#D97706" textDecoration="line-through">{answer || "—"}</tspan>
                <tspan x={tx} y="26" fontSize="11" fontWeight="bold" fill="currentColor">{nl.target}</tspan>
              </text>
            ) : (
              <text x={tx} y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill={accent}>{answer}</text>
            )
          ) : (
            <foreignObject x={tx - 22} y="4" width="44" height="22">
              <input type="text" inputMode="numeric" value={answer}
                onChange={e => setAnswer(e.target.value.replace(/[^0-9]/g, ""))}
                style={{ width: "100%", height: "100%", textAlign: "center", fontSize: "11px", background: "transparent", border: "none", outline: "none" }}
              />
            </foreignObject>
          )}
        </svg>
      </div>
    );
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Écrivez les nombres indiqués par les flèches.</p>
      <div className="space-y-4">
        <NLPanel nl={data.nl1} answer={ans1} setAnswer={setAns1} result={lineResults[0]} />
        <NLPanel nl={data.nl2} answer={ans2} setAnswer={setAns2} result={lineResults[1]} />
      </div>
    </div>
  );
}

// ─── Exercise 8 — Classer les nombres (2 pts) — placement test Ex17 style ────

function A1Ex8({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);

    const genSeries = (seed: number) => {
      const r = makeRng(seed);
      const f2a = r.int(10, 97);
      const n1 = f2a * 100 + r.int(1, 98);
      let n2 = f2a * 100 + r.int(1, 98);
      while (n2 === n1) n2 = f2a * 100 + r.int(1, 98);
      const l2 = r.int(1, 98);
      let f2b = r.int(10, 97);
      while (f2b === f2a) f2b = r.int(10, 97);
      const n3 = f2b * 100 + l2;
      let f2c = r.int(10, 97);
      while (f2c === f2a || f2c === f2b) f2c = r.int(10, 97);
      const n4 = f2c * 100 + l2;
      return [n1, n2, n3, n4];
    };

    const nums1 = genSeries(exerciseKey);
    const nums2 = genSeries(exerciseKey + 100);
    const ints1 = seededShuffle(nums1, rng.int(1, 9999));
    const ints2 = seededShuffle(nums2, rng.int(1, 9999));
    return {
      ints1,
      sorted1: [...nums1].sort((a, b) => a - b),
      ints2,
      sorted2: [...nums2].sort((a, b) => b - a),
    };
  }, [exerciseKey]);

  const [sel1, setSel1] = useState<number[]>([]);
  const [sel2, setSel2] = useState<number[]>([]);

  const toggle = (setter: React.Dispatch<React.SetStateAction<number[]>>) => (n: number) => {
    setter(prev => prev.includes(n) ? prev.filter(x => x !== n) : [...prev, n]);
  };

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (sel1.length === data.sorted1.length && data.sorted1.every((v, i) => sel1[i] === v)) pts++;
    if (sel2.length === data.sorted2.length && data.sorted2.every((v, i) => sel2[i] === v)) pts++;
    onValidated(pts, 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">Classez les nombres dans l&apos;ordre demandé.</p>
      <div className="space-y-2">
        <p className="text-sm text-[var(--color-text-secondary)]">Dans l&apos;ordre croissant (plus petit au plus grand)</p>
        <OrderingChips numbers={data.ints1} selected={sel1} onToggle={toggle(setSel1)}
          validated={validated} numberLabel="1." />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-[var(--color-text-secondary)]">Dans l&apos;ordre décroissant (plus grand au plus petit)</p>
        <OrderingChips numbers={data.ints2} selected={sel2} onToggle={toggle(setSel2)}
          validated={validated} desc numberLabel="2." />
      </div>
    </div>
  );
}

export const A1_EXERCISES: RevisionExerciseMeta[] = [
  { id: 1, label: "Écrire les nombres",       maxPoints: 3, component: A1Ex1 },
  { id: 2, label: "Compter les blocs",         maxPoints: 3, component: A1Ex2 },
  { id: 3, label: "Décomposer en M+C+D+U",    maxPoints: 4, component: A1Ex3 },
  { id: 4, label: "Comparaison à 6 chiffres", maxPoints: 5, component: A1Ex4 },
  { id: 5, label: "Sélectionner par critère", maxPoints: 3, component: A1Ex5 },
  { id: 6, label: "Encadrer à la dizaine",    maxPoints: 5, component: A1Ex6 },
  { id: 7, label: "Droite numérique",         maxPoints: 2, component: A1Ex7 },
  { id: 8, label: "Classer les nombres",      maxPoints: 2, component: A1Ex8 },
];

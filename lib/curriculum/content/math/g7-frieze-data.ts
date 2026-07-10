/** Case de frise — coordonnées de cellule (pas d'intersection). */
export type FriezeCell = { c: number; r: number };

export type FriezeColorTask = {
  id: string;
  label: string;
  /** Nombre de colonnes de cases. */
  cols: number;
  /** Nombre de lignes de cases. */
  rows: number;
  /** Cases déjà colorées (motif de départ, non modifiables). */
  starter: FriezeCell[];
  /** Ensemble complet attendu (starter + complétion). */
  expected: FriezeCell[];
};

export function cellKey(cell: FriezeCell): string {
  return `${cell.c},${cell.r}`;
}

function cells(...pairs: Array<[number, number]>): FriezeCell[] {
  return pairs.map(([c, r]) => ({ c, r }));
}

function dedupe(list: FriezeCell[]): FriezeCell[] {
  const seen = new Set<string>();
  const out: FriezeCell[] = [];
  for (const cell of list) {
    const k = cellKey(cell);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(cell);
  }
  return out;
}

/** Motif A : colonne centrale pleine + voisines partielles (3 cols). */
function motifPillar(originC: number, rows: number): FriezeCell[] {
  const out: FriezeCell[] = [];
  for (let r = 1; r < rows - 1; r++) out.push({ c: originC + 1, r });
  for (let r = 2; r < rows - 2; r++) {
    out.push({ c: originC, r });
    out.push({ c: originC + 2, r });
  }
  return out;
}

/** Motif B : barre verticale pleine (1 col). */
function motifBar(originC: number, rows: number): FriezeCell[] {
  const out: FriezeCell[] = [];
  for (let r = 0; r < rows; r++) out.push({ c: originC, r });
  return out;
}

/** Carré 2×2. */
function motifSquare(c: number, r: number): FriezeCell[] {
  return cells([c, r], [c + 1, r], [c, r + 1], [c + 1, r + 1]);
}

/** L de 3 cases. */
function motifL(c: number, r: number): FriezeCell[] {
  return cells([c, r], [c, r + 1], [c, r + 2], [c + 1, r + 2]);
}

/** Diagonale montante sur 3 cases. */
function motifDiag(c: number, r: number): FriezeCell[] {
  return cells([c, r + 2], [c + 1, r + 1], [c + 2, r]);
}

/** Triangle / pyramide 3 de haut. */
function motifPyramid(c: number, baseR: number): FriezeCell[] {
  return cells(
    [c + 1, baseR],
    [c, baseR + 1], [c + 1, baseR + 1], [c + 2, baseR + 1],
    [c, baseR + 2], [c + 1, baseR + 2], [c + 2, baseR + 2],
  );
}

/** Damier 2×2 (2 cases). */
function motifChecker(c: number, r: number): FriezeCell[] {
  return cells([c, r], [c + 1, r + 1]);
}

/** Croix 5 cases. */
function motifCross(c: number, r: number): FriezeCell[] {
  return cells([c + 1, r], [c, r + 1], [c + 1, r + 1], [c + 2, r + 1], [c + 1, r + 2]);
}

/** Escalier 4 marches. */
function motifStairs(c: number, r: number): FriezeCell[] {
  return cells([c, r + 3], [c + 1, r + 2], [c + 1, r + 3], [c + 2, r + 1], [c + 2, r + 2], [c + 3, r], [c + 3, r + 1]);
}

function repeatMotif(
  motifFn: (originC: number) => FriezeCell[],
  period: number,
  count: number,
  starterCount: number,
): { starter: FriezeCell[]; expected: FriezeCell[] } {
  const expected: FriezeCell[] = [];
  for (let i = 0; i < count; i++) expected.push(...motifFn(i * period));
  const starter: FriezeCell[] = [];
  for (let i = 0; i < starterCount; i++) starter.push(...motifFn(i * period));
  return { starter: dedupe(starter), expected: dedupe(expected) };
}

const FRIEZE_COLOR_TASKS: FriezeColorTask[] = [
  (() => {
    const rows = 6;
    const { starter, expected } = repeatMotif((c) => motifPillar(c, rows), 3, 5, 2);
    return { id: "frieze-pillars", label: "Frise de piliers", cols: 15, rows, starter, expected };
  })(),
  (() => {
    const rows = 6;
    const { starter, expected } = repeatMotif((c) => motifBar(c, rows), 2, 8, 3);
    return { id: "frieze-bars", label: "Frise de barres", cols: 16, rows, starter, expected };
  })(),
  (() => {
    const { starter, expected } = repeatMotif((c) => motifSquare(c, 2), 3, 5, 2);
    return { id: "frieze-squares", label: "Frise de carrés", cols: 15, rows: 6, starter, expected };
  })(),
  (() => {
    const { starter, expected } = repeatMotif((c) => motifL(c, 1), 3, 5, 2);
    return { id: "frieze-ells", label: "Frise de L", cols: 15, rows: 6, starter, expected };
  })(),
  (() => {
    const { starter, expected } = repeatMotif((c) => motifDiag(c, 1), 3, 5, 2);
    return { id: "frieze-diags", label: "Frise en diagonale", cols: 15, rows: 5, starter, expected };
  })(),
  (() => {
    const { starter, expected } = repeatMotif((c) => motifPyramid(c, 0), 4, 4, 2);
    return { id: "frieze-pyramids", label: "Frise de pyramides", cols: 16, rows: 4, starter, expected };
  })(),
  (() => {
    const { starter, expected } = repeatMotif((c) => motifChecker(c, 1), 2, 7, 3);
    return { id: "frieze-checker", label: "Frise en damier", cols: 14, rows: 4, starter, expected };
  })(),
  (() => {
    const { starter, expected } = repeatMotif((c) => motifCross(c, 1), 4, 4, 2);
    return { id: "frieze-crosses", label: "Frise de croix", cols: 16, rows: 5, starter, expected };
  })(),
  (() => {
    const { starter, expected } = repeatMotif((c) => motifStairs(c, 0), 4, 4, 2);
    return { id: "frieze-stairs", label: "Frise d'escaliers", cols: 16, rows: 5, starter, expected };
  })(),
  (() => {
    // Alternance A/B comme le manuel (piliers haut / bas)
    const rows = 6;
    const motifA = (c: number) => motifPillar(c, rows);
    const motifB = (c: number) => {
      const b: FriezeCell[] = [];
      for (let r = 1; r < rows; r++) b.push({ c: c + 1, r });
      for (let r = 2; r < rows; r++) {
        b.push({ c, r });
        b.push({ c: c + 2, r });
      }
      return b;
    };
    const expected = dedupe([
      ...motifA(0), ...motifB(3), ...motifA(6), ...motifB(9), ...motifA(12),
    ]);
    const starter = dedupe([...motifA(0), ...motifB(3), ...motifA(6)]);
    return { id: "frieze-ab", label: "Frise alternée A/B", cols: 15, rows, starter, expected };
  })(),
];

export function pickFriezeTask(seed: number): FriezeColorTask {
  return FRIEZE_COLOR_TASKS[Math.abs(seed) % FRIEZE_COLOR_TASKS.length]!;
}

export function expectedFriezeCompletion(task: FriezeColorTask): {
  locked: Set<string>;
  expected: Set<string>;
  toComplete: Set<string>;
} {
  const locked = new Set(task.starter.map(cellKey));
  const expected = new Set(task.expected.map(cellKey));
  const toComplete = new Set([...expected].filter((k) => !locked.has(k)));
  return { locked, expected, toComplete };
}

export function friezeConsigne(): string {
  return "Complétez la frise en coloriant les cases manquantes pour prolonger le motif. Cliquez une case pour la colorier ou l'effacer. Les cases grises sont déjà données.";
}

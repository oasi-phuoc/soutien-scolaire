/** Données pour le module G6 — Se repérer dans le plan */

export type GridCell = { col: string; row: number };

export type MapLandmark = {
  name: string;
  aliases?: string[];
  cell: GridCell;
};

// ── Genève (grille 6×6, colonnes A–F, lignes 1–6) ───────────────────────────

export const GENEVA_LANDMARKS: MapLandmark[] = [
  { name: "Palexpo", aliases: ["Aéroport"], cell: { col: "A", row: 1 } },
  { name: "Balexert", cell: { col: "A", row: 2 } },
  { name: "Bouchet", cell: { col: "A", row: 3 } },
  { name: "Varembé", cell: { col: "B", row: 2 } },
  { name: "Servette", aliases: ["Charmilles"], cell: { col: "B", row: 3 } },
  { name: "Saint-Jean", aliases: ["Jonction", "Bois de la Bâtie"], cell: { col: "B", row: 4 } },
  { name: "Vernets", cell: { col: "B", row: 5 } },
  { name: "Stade de Genève", cell: { col: "B", row: 6 } },
  { name: "Château de Penthes", cell: { col: "C", row: 1 } },
  { name: "Jardin botanique", aliases: ["ONU"], cell: { col: "C", row: 2 } },
  { name: "Gare Cornavin", cell: { col: "C", row: 3 } },
  { name: "Mont-Blanc", aliases: ["Bel-Air", "Cathédrale", "Bastions"], cell: { col: "C", row: 4 } },
  { name: "Uni Mail", aliases: ["Hôpital"], cell: { col: "C", row: 5 } },
  { name: "Perle du Lac", cell: { col: "D", row: 2 } },
  { name: "Bains des Pâquis", cell: { col: "D", row: 3 } },
  { name: "Jet d'eau", aliases: ["Rive", "Museum"], cell: { col: "D", row: 4 } },
  { name: "Cité universitaire", aliases: ["Bout-du-Monde"], cell: { col: "D", row: 6 } },
  { name: "Genève-Plage", aliases: ["Baby Plage"], cell: { col: "E", row: 3 } },
  { name: "Frontenex", aliases: ["Gare des Eaux-Vives"], cell: { col: "E", row: 4 } },
];

// ── Biel/Bienne (grille 9×6, colonnes A–I, lignes 1–6) ──────────────────────

export const BIEL_LANDMARKS: MapLandmark[] = [
  { name: "Filmpodium", cell: { col: "A", row: 4 } },
  { name: "Centre Pasquart", aliases: ["Centre Pascart"], cell: { col: "A", row: 5 } },
  { name: "Reformierte Kirche", cell: { col: "C", row: 2 } },
  { name: "Musée Schwab", cell: { col: "C", row: 5 } },
  { name: "Musée Neuhaus", cell: { col: "D", row: 4 } },
  { name: "Mühlebrücke", cell: { col: "F", row: 2 } },
  { name: "Théâtre Municipal", cell: { col: "G", row: 1 } },
  { name: "Cinéma Beluga", cell: { col: "G", row: 5 } },
  { name: "Cinéma Lido", cell: { col: "G", row: 6 } },
  { name: "Coop City", cell: { col: "I", row: 4 } },
];

export function cellKey(cell: GridCell): string {
  return `${cell.col.toUpperCase()}${cell.row}`;
}

export function formatCell(cell: GridCell): string {
  return `${cell.col.toUpperCase()}${cell.row}`;
}

export function parseCellInput(raw: string): string | null {
  const s = raw.trim().toUpperCase().replace(/\s+/g, "").replace(/[;(),]/g, "");
  const m = s.match(/^([A-Z])(\d+)$/);
  if (!m) return null;
  return `${m[1]}${m[2]}`;
}

export function colIndex(col: string): number {
  return col.toUpperCase().charCodeAt(0) - 65;
}

export function manhattanDistance(a: GridCell, b: GridCell): number {
  return Math.abs(colIndex(a.col) - colIndex(b.col)) + Math.abs(a.row - b.row);
}

export function horizontalDistance(a: GridCell, b: GridCell): number {
  return Math.abs(colIndex(a.col) - colIndex(b.col));
}

export function findLandmark(name: string, landmarks: MapLandmark[]): MapLandmark | undefined {
  const n = name.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return landmarks.find((l) => {
    const names = [l.name, ...(l.aliases ?? [])];
    return names.some((x) =>
      x.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === n ||
      x.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(n) ||
      n.includes(x.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")),
    );
  });
}

export type MapQuestion =
  | { type: "locate"; prompt: string; answer: string; landmark: string }
  | { type: "what_at"; prompt: string; answers: string[]; cell: GridCell }
  | { type: "mcq_at"; prompt: string; cell: GridCell; options: string[]; correct: string }
  | { type: "distance"; prompt: string; answer: number; from: string; to: string }
  | { type: "distance_h"; prompt: string; answer: number; from: string; to: string; direction?: "gauche" | "droite" }
  | { type: "yes_no"; prompt: string; answer: boolean; landmark: string; cell: GridCell };

function buildGenevaPool(): MapQuestion[] {
  const q: MapQuestion[] = [];
  for (const lm of GENEVA_LANDMARKS) {
    q.push({
      type: "locate",
      prompt: `Où est ${lm.name} ?`,
      answer: formatCell(lm.cell),
      landmark: lm.name,
    });
  }
  for (const lm of GENEVA_LANDMARKS) {
    q.push({
      type: "what_at",
      prompt: `Qu'est-ce qu'il y a en (${lm.cell.col} ; ${lm.cell.row}) ?`,
      answers: [lm.name, ...(lm.aliases ?? [])],
      cell: lm.cell,
    });
  }
  const mcqCells: GridCell[] = [
    { col: "B", row: 3 },
    { col: "B", row: 4 },
    { col: "C", row: 3 },
    { col: "E", row: 3 },
    { col: "D", row: 4 },
    { col: "C", row: 5 },
  ];
  for (const cell of mcqCells) {
    const atCell = GENEVA_LANDMARKS.filter((l) => cellKey(l.cell) === cellKey(cell));
    if (atCell.length === 0) continue;
    const correct = atCell[0]!.name;
    const distractors = GENEVA_LANDMARKS.filter((l) => cellKey(l.cell) !== cellKey(cell))
      .map((l) => l.name)
      .slice(0, 3);
    q.push({
      type: "mcq_at",
      prompt: `Dans la case ${formatCell(cell)}, il y a :`,
      cell,
      options: [correct, ...distractors],
      correct,
    });
  }
  q.push({
    type: "distance",
    prompt: "Je suis à Genève-Plage. Je veux aller à la Perle du Lac. Je dois marcher combien de cases ?",
    answer: manhattanDistance(
      findLandmark("Genève-Plage", GENEVA_LANDMARKS)!.cell,
      findLandmark("Perle du Lac", GENEVA_LANDMARKS)!.cell,
    ),
    from: "Genève-Plage",
    to: "Perle du Lac",
  });
  q.push({
    type: "distance",
    prompt: "Je suis au Stade de Genève. Je veux aller aux Vernets. Je dois marcher combien de cases ?",
    answer: manhattanDistance(
      findLandmark("Stade de Genève", GENEVA_LANDMARKS)!.cell,
      findLandmark("Vernets", GENEVA_LANDMARKS)!.cell,
    ),
    from: "Stade de Genève",
    to: "Vernets",
  });
  q.push({
    type: "yes_no",
    prompt: "Est-ce que le Jet d'eau se trouve en D5 ?",
    answer: false,
    landmark: "Jet d'eau",
    cell: { col: "D", row: 5 },
  });
  q.push({
    type: "yes_no",
    prompt: "Est-ce que la Gare Cornavin se trouve en C3 ?",
    answer: true,
    landmark: "Gare Cornavin",
    cell: { col: "C", row: 3 },
  });
  return q;
}

function buildBielPool(): MapQuestion[] {
  const q: MapQuestion[] = [];
  for (const lm of BIEL_LANDMARKS) {
    q.push({
      type: "locate",
      prompt: `Où est ${lm.name} ?`,
      answer: formatCell(lm.cell),
      landmark: lm.name,
    });
  }
  for (const lm of BIEL_LANDMARKS) {
    q.push({
      type: "what_at",
      prompt: `Qu'est-ce qu'il y a en (${lm.cell.col} ; ${lm.cell.row}) ?`,
      answers: [lm.name, ...(lm.aliases ?? [])],
      cell: lm.cell,
    });
  }
  const pairs: [string, string][] = [
    ["Filmpodium", "Cinéma Beluga"],
    ["Musée Schwab", "Théâtre Municipal"],
    ["Cinéma Lido", "Centre Pasquart"],
    ["Musée Neuhaus", "Cinéma Beluga"],
  ];
  for (const [from, to] of pairs) {
    const a = findLandmark(from, BIEL_LANDMARKS)!;
    const b = findLandmark(to, BIEL_LANDMARKS)!;
    q.push({
      type: "distance",
      prompt: `Je suis au ${from}. Je veux aller au ${to}. Je dois marcher combien de cases ?`,
      answer: manhattanDistance(a.cell, b.cell),
      from,
      to,
    });
  }
  q.push({
    type: "distance_h",
    prompt: "Je suis au Cinéma Lido. Je veux aller au Centre Pasquart. Je dois marcher combien de cases vers la gauche ?",
    answer: horizontalDistance(
      findLandmark("Cinéma Lido", BIEL_LANDMARKS)!.cell,
      findLandmark("Centre Pasquart", BIEL_LANDMARKS)!.cell,
    ),
    from: "Cinéma Lido",
    to: "Centre Pasquart",
    direction: "gauche",
  });
  q.push({
    type: "yes_no",
    prompt: "Est-ce que le Musée Neuhaus se trouve en D5 ?",
    answer: false,
    landmark: "Musée Neuhaus",
    cell: { col: "D", row: 5 },
  });
  q.push({
    type: "yes_no",
    prompt: "Est-ce que le Cinéma Lido se trouve en G6 ?",
    answer: true,
    landmark: "Cinéma Lido",
    cell: { col: "G", row: 6 },
  });
  const mcqCells: GridCell[] = [
    { col: "C", row: 5 },
    { col: "G", row: 1 },
    { col: "D", row: 4 },
    { col: "A", row: 4 },
  ];
  for (const cell of mcqCells) {
    const atCell = BIEL_LANDMARKS.filter((l) => cellKey(l.cell) === cellKey(cell));
    if (atCell.length === 0) continue;
    const correct = atCell[0]!.name;
    const distractors = BIEL_LANDMARKS.filter((l) => cellKey(l.cell) !== cellKey(cell))
      .map((l) => l.name)
      .slice(0, 3);
    q.push({
      type: "mcq_at",
      prompt: `Dans la case ${formatCell(cell)}, il y a :`,
      cell,
      options: [correct, ...distractors],
      correct,
    });
  }
  return q;
}

export const GENEVA_QUESTION_POOL = buildGenevaPool();
export const BIEL_QUESTION_POOL = buildBielPool();

// ── Formes pour exercices 1–2 ────────────────────────────────────────────────

export type ShapeIcon = { id: string; label: string; svg: string };

export const GRID_SHAPES: ShapeIcon[] = [
  {
    id: "heart",
    label: "cœur",
    svg: `<path d="M20 32 C20 22 28 16 36 22 C44 16 52 22 52 32 C52 44 36 54 36 54 C36 54 20 44 20 32Z" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>`,
  },
  {
    id: "star",
    label: "étoile",
    svg: `<polygon points="36,14 42,28 58,28 46,38 50,54 36,44 22,54 26,38 14,28 30,28" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>`,
  },
  {
    id: "circle",
    label: "cercle",
    svg: `<circle cx="36" cy="36" r="16" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>`,
  },
  {
    id: "triangle",
    label: "triangle",
    svg: `<polygon points="36,14 54,54 18,54" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>`,
  },
  {
    id: "square",
    label: "carré",
    svg: `<rect x="18" y="18" width="36" height="36" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>`,
  },
  {
    id: "diamond",
    label: "losange",
    svg: `<polygon points="36,12 56,36 36,60 16,36" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>`,
  },
  {
    id: "arrow",
    label: "flèche",
    svg: `<polygon points="36,12 52,40 44,40 44,56 28,56 28,40 20,40" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>`,
  },
  {
    id: "cross",
    label: "croix",
    svg: `<path d="M30 18 H42 V30 H54 V42 H42 V54 H30 V42 H18 V30 H30 Z" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>`,
  },
];

// ── Objets médiévaux (exercice 3) ────────────────────────────────────────────

export const MEDIEVAL_ITEMS: ShapeIcon[] = [
  {
    id: "knight",
    label: "Le chevalier",
    svg: `<text x="36" y="42" text-anchor="middle" font-size="28">🛡️</text>`,
  },
  {
    id: "sword",
    label: "L'épée et le bouclier",
    svg: `<text x="36" y="42" text-anchor="middle" font-size="28">⚔️</text>`,
  },
  {
    id: "horse",
    label: "Le cheval",
    svg: `<text x="36" y="42" text-anchor="middle" font-size="28">🐴</text>`,
  },
];

// ── Figures dynamiques pour exercice 4 (repère cartésien) ────────────────────

export type CartesianFigure = {
  id: string;
  name: string;
  /** Polygones : liste de points [x,y] en unités de grille (pas de pixels) */
  polygons: Array<{ points: [number, number][]; fill: string }>;
  labeledPoints: Array<{ label: string; x: number; y: number }>;
};

export const CARTESIAN_FIGURES: CartesianFigure[] = [
  {
    id: "boat",
    name: "bateau",
    polygons: [
      { points: [[0, 6], [2, 0], [28, 0], [34, 6], [26, 8], [26, 14], [18, 14], [16, 18], [16, 10], [8, 10], [6, 6]], fill: "#1e40af" },
      { points: [[8, 10], [16, 10], [16, 14], [26, 14], [26, 8], [18, 8]], fill: "#60a5fa" },
      { points: [[16, 10], [16, 18], [20, 18], [20, 14], [18, 14]], fill: "#94a3b8" },
    ],
    labeledPoints: [
      { label: "A", x: 16, y: 18 },
      { label: "B", x: 16, y: 10 },
      { label: "C", x: 8, y: 10 },
      { label: "D", x: 6, y: 6 },
      { label: "E", x: 0, y: 6 },
      { label: "F", x: 2, y: 0 },
      { label: "G", x: 28, y: 0 },
      { label: "H", x: 34, y: 6 },
      { label: "I", x: 26, y: 8 },
      { label: "J", x: 26, y: 14 },
      { label: "K", x: 18, y: 14 },
      { label: "L", x: 20, y: 18 },
    ],
  },
  {
    id: "house",
    name: "maison",
    polygons: [
      { points: [[4, 12], [16, 4], [28, 12], [28, 24], [4, 24]], fill: "#f97316" },
      { points: [[12, 24], [12, 16], [20, 16], [20, 24]], fill: "#1e3a5f" },
    ],
    labeledPoints: [
      { label: "A", x: 4, y: 24 },
      { label: "B", x: 4, y: 12 },
      { label: "C", x: 16, y: 4 },
      { label: "D", x: 28, y: 12 },
      { label: "E", x: 28, y: 24 },
      { label: "F", x: 12, y: 16 },
      { label: "G", x: 20, y: 16 },
      { label: "H", x: 20, y: 24 },
    ],
  },
  {
    id: "tree",
    name: "arbre",
    polygons: [
      { points: [[14, 20], [18, 20], [18, 8], [14, 8]], fill: "#92400e" },
      { points: [[16, 2], [26, 14], [6, 14]], fill: "#16a34a" },
    ],
    labeledPoints: [
      { label: "A", x: 6, y: 14 },
      { label: "B", x: 16, y: 2 },
      { label: "C", x: 26, y: 14 },
      { label: "D", x: 14, y: 8 },
      { label: "E", x: 18, y: 8 },
      { label: "F", x: 14, y: 20 },
      { label: "G", x: 18, y: 20 },
    ],
  },
];

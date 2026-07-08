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

// ── Carte topographique Rebeuvelier (exercice 7) ─────────────────────────────

export type XYPoint = { label: string; x: number; y: number };

export const REBEUVELIER_MAP = {
  maxX: 15,
  maxY: 10,
  title: "Carte de Rebeuvelier",
};

/** Points à placer à partir des coordonnées données */
export const REBEUVELIER_PLACE_POINTS: XYPoint[] = [
  { label: "D", x: 5, y: 1 },
  { label: "A", x: 4, y: 3 },
  { label: "P1", x: 11, y: 2 },
  { label: "P3", x: 12, y: 6 },
  { label: "P4", x: 15, y: 8 },
  { label: "P6", x: 6, y: 9 },
];

/** Points affichés sur la carte — l'élève complète les coordonnées */
export const REBEUVELIER_READ_POINTS: XYPoint[] = [
  { label: "P2", x: 13, y: 5 },
  { label: "P5", x: 10, y: 9 },
  { label: "P7", x: 3, y: 7 },
  { label: "P8", x: 4, y: 5 },
];

export type TopoQuestion =
  | { type: "text_at"; prompt: string; x: number; y: number; answers: string[] }
  | { type: "yes_no_at"; prompt: string; x: number; y: number; answer: boolean };

export const REBEUVELIER_QUESTION_POOL: TopoQuestion[] = [
  { type: "text_at", prompt: "Comment s'appelle le champ en (13 ; 1) ?", x: 13, y: 1, answers: ["Les Neufs Champs", "Neufs Champs"] },
  { type: "text_at", prompt: "Vous voyez quel chiffre en (15 ; 2) ?", x: 15, y: 2, answers: ["704"] },
  { type: "yes_no_at", prompt: "En (8 ; 3), vous êtes dans la forêt ?", x: 8, y: 3, answer: false },
  { type: "yes_no_at", prompt: "Il y a un chemin pour aller en (3 ; 3) ?", x: 3, y: 3, answer: true },
  { type: "text_at", prompt: "Vous voyez quel chiffre en (12 ; 6) ?", x: 12, y: 6, answers: ["689"] },
  { type: "text_at", prompt: "Vous voyez quels mots en (3 ; 3) ?", x: 3, y: 3, answers: ["Aux Esserts", "Esserts"] },
  { type: "text_at", prompt: "Quel village se trouve vers (7 ; 3) ?", x: 7, y: 3, answers: ["Rebeuvelier"] },
  { type: "text_at", prompt: "Quel lieu est indiqué en (12 ; 6) ?", x: 12, y: 6, answers: ["Moton"] },
  { type: "text_at", prompt: "Quel chiffre voyez-vous près de (13 ; 5) ?", x: 13, y: 5, answers: ["754"] },
  { type: "yes_no_at", prompt: "La forêt de Rosé se trouve-t-elle en (10 ; 9) ?", x: 10, y: 9, answer: true },
  { type: "text_at", prompt: "Quel nom est écrit en (4 ; 5) ?", x: 4, y: 5, answers: ["Côte du Tairetsche", "Tairetsche"] },
  { type: "text_at", prompt: "Quel nom est écrit en (3 ; 7) ?", x: 3, y: 7, answers: ["Côte sous Rosé", "Rosé"] },
];

/** Labels affichés sur la carte SVG (position approximative) */
export const REBEUVELIER_MAP_LABELS: Array<{ text: string; x: number; y: number; size?: number; forest?: boolean }> = [
  { text: "Les Neufs Champs", x: 13, y: 1, size: 7 },
  { text: "704", x: 15, y: 2.5, size: 8 },
  { text: "La Grange", x: 14.5, y: 2, size: 6 },
  { text: "Aux Esserts", x: 3, y: 3, size: 7 },
  { text: "Rebeuvelier", x: 7, y: 3, size: 8 },
  { text: "Do la Baume", x: 6, y: 4, size: 6 },
  { text: "Les Maichières", x: 9, y: 4, size: 6 },
  { text: "Sur Moton", x: 13, y: 5, size: 7 },
  { text: "754", x: 13.5, y: 5.5, size: 8 },
  { text: "Moton", x: 12, y: 6, size: 7 },
  { text: "689", x: 12.5, y: 6.5, size: 8 },
  { text: "La Sarasine", x: 11, y: 3, size: 6 },
  { text: "Les Rises", x: 14, y: 4, size: 6 },
  { text: "Côte du Tairetsche", x: 4, y: 5, size: 6 },
  { text: "Côte sous Rosé", x: 3, y: 7, size: 6 },
  { text: "Forêt de Rosé", x: 10, y: 8.5, size: 7, forest: true },
];

export const REBEUVELIER_FOREST_ZONES: Array<{ x: number; y: number; w: number; h: number }> = [
  { x: 8, y: 7, w: 5, h: 3 },
  { x: 10, y: 5, w: 4, h: 3 },
  { x: 0, y: 6, w: 3, h: 4 },
];

export const REBEUVELIER_PATHS: Array<[number, number][]> = [
  [[3, 3], [4, 3], [5, 4], [6, 3], [7, 3]],
  [[3, 3], [3, 4], [2, 5]],
  [[11, 2], [12, 4], [12, 6]],
];

// ── Formes pour exercices 1–2 ────────────────────────────────────────────────

export type ShapeIcon = { id: string; label: string; svg: string };

const SHAPE_FILL = "var(--color-accent-alg)";

export const GRID_SHAPES: ShapeIcon[] = [
  {
    id: "heart",
    label: "cœur",
    svg: `<path d="M20 32 C20 22 28 16 36 22 C44 16 52 22 52 32 C52 44 36 54 36 54 C36 54 20 44 20 32Z" fill="${SHAPE_FILL}"/>`,
  },
  {
    id: "star",
    label: "étoile",
    svg: `<polygon points="36,14 42,28 58,28 46,38 50,54 36,44 22,54 26,38 14,28 30,28" fill="${SHAPE_FILL}"/>`,
  },
  {
    id: "circle",
    label: "cercle",
    svg: `<circle cx="36" cy="36" r="16" fill="${SHAPE_FILL}"/>`,
  },
  {
    id: "triangle",
    label: "triangle",
    svg: `<polygon points="36,14 54,54 18,54" fill="${SHAPE_FILL}"/>`,
  },
  {
    id: "square",
    label: "carré",
    svg: `<rect x="18" y="18" width="36" height="36" fill="${SHAPE_FILL}"/>`,
  },
  {
    id: "diamond",
    label: "losange",
    svg: `<polygon points="36,12 56,36 36,60 16,36" fill="${SHAPE_FILL}"/>`,
  },
  {
    id: "arrow",
    label: "flèche",
    svg: `<polygon points="36,12 52,40 44,40 44,56 28,56 28,40 20,40" fill="${SHAPE_FILL}"/>`,
  },
  {
    id: "cross",
    label: "croix",
    svg: `<path d="M30 18 H42 V30 H54 V42 H42 V54 H30 V42 H18 V30 H30 Z" fill="${SHAPE_FILL}"/>`,
  },
  {
    id: "pentagon",
    label: "pentagone",
    svg: `<polygon points="36,12 54,30 46,56 26,56 18,30" fill="${SHAPE_FILL}"/>`,
  },
  {
    id: "hexagon",
    label: "hexagone",
    svg: `<polygon points="36,10 54,22 54,46 36,58 18,46 18,22" fill="${SHAPE_FILL}"/>`,
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

// ── Exercices 8–13 : repère cartésien (4 quadrants) ─────────────────────────

export type LabeledPoint = { label: string; x: number; y: number };

/** Pentagones — coordonnées entières */
export const POLYGON_INT_TEMPLATES: LabeledPoint[][] = [
  [
    { label: "A", x: -7, y: 2 },
    { label: "B", x: -3, y: 6 },
    { label: "C", x: 4, y: 2 },
    { label: "D", x: 0, y: -5 },
    { label: "E", x: -3, y: 2 },
  ],
  [
    { label: "A", x: -5, y: 8 },
    { label: "B", x: 4, y: 8 },
    { label: "C", x: 2, y: 2 },
    { label: "D", x: -3, y: 0 },
    { label: "E", x: -3, y: 5 },
  ],
  [
    { label: "A", x: -5, y: -1 },
    { label: "B", x: 4, y: 6 },
    { label: "C", x: 2, y: -6 },
    { label: "D", x: 7, y: 3 },
    { label: "E", x: 0, y: 5 },
  ],
];

/** Pentagones — coordonnées avec demi-unités */
export const POLYGON_HALF_TEMPLATES: LabeledPoint[][] = [
  [
    { label: "A", x: 2.5, y: -1 },
    { label: "B", x: 0.5, y: 4 },
    { label: "C", x: 0.5, y: 6 },
    { label: "D", x: -3, y: 6 },
    { label: "E", x: -3, y: 4 },
  ],
  [
    { label: "A", x: -1, y: 4 },
    { label: "B", x: -7, y: 0 },
    { label: "C", x: -2, y: -4.5 },
    { label: "D", x: 0.5, y: -4.5 },
    { label: "E", x: 0.5, y: 0 },
  ],
];

/** Pools de points à placer sur le repère */
export const CARTESIAN_PLACE_POOLS: LabeledPoint[][] = [
  [
    { label: "A", x: 5, y: -7 },
    { label: "B", x: -3, y: 3 },
    { label: "C", x: -6, y: -3 },
    { label: "D", x: -5, y: 1 },
    { label: "E", x: -1, y: 2 },
    { label: "F", x: -2, y: -2 },
  ],
  [
    { label: "K", x: -1, y: 1.5 },
    { label: "L", x: 1.5, y: -3 },
    { label: "M", x: 0, y: 4 },
    { label: "N", x: -4, y: 2.5 },
    { label: "O", x: 3, y: -4 },
    { label: "P", x: 3, y: -2 },
  ],
  [
    { label: "A", x: -5, y: -1 },
    { label: "B", x: 4, y: 6 },
    { label: "C", x: 2, y: -6 },
    { label: "D", x: 7, y: 3 },
    { label: "E", x: 0, y: 5 },
    { label: "H", x: 5, y: 0 },
  ],
];

export type VertexPuzzle = {
  type: "square" | "parallelogram";
  prompt: string;
  points: LabeledPoint[];
  missing: string;
  answer: { x: number; y: number };
  shapeName?: string;
};

export const VERTEX_PUZZLES: VertexPuzzle[] = [
  {
    type: "square",
    prompt: "Le carré [ABCD] passe par A, B et C. Où se trouve D ?",
    points: [
      { label: "A", x: -14, y: 9 },
      { label: "B", x: -9, y: 4 },
      { label: "C", x: -14, y: 4 },
    ],
    missing: "D",
    answer: { x: -9, y: 9 },
    shapeName: "carré",
  },
  {
    type: "parallelogram",
    prompt: "Parallèle à [AB] par C et parallèle à [AC] par B se croisent en D. Coordonnées de D ?",
    points: [
      { label: "A", x: -2, y: 6 },
      { label: "B", x: 5, y: 8 },
      { label: "C", x: -6, y: -5 },
    ],
    missing: "D",
    answer: { x: 1, y: -3 },
    shapeName: "parallélogramme",
  },
  {
    type: "parallelogram",
    prompt: "Le parallélogramme [ABCD] a pour sommets connus A, B et C. Trouvez D.",
    points: [
      { label: "A", x: -3, y: 2 },
      { label: "B", x: 2, y: 5 },
      { label: "C", x: 6, y: 1 },
    ],
    missing: "D",
    answer: { x: 1, y: -2 },
    shapeName: "parallélogramme",
  },
];

/** Points à lire sur repère 4 quadrants (style A–J) */
export const QUADRANT_READ_POOLS: LabeledPoint[][] = [
  [
    { label: "A", x: -5, y: -1 },
    { label: "B", x: 4, y: 6 },
    { label: "C", x: 2, y: -6 },
    { label: "D", x: 7, y: 3 },
    { label: "E", x: 0, y: 5 },
    { label: "F", x: -7, y: -8 },
  ],
  [
    { label: "G", x: -6, y: 5 },
    { label: "H", x: 5, y: 0 },
    { label: "I", x: -3, y: -4 },
    { label: "J", x: -9, y: 7 },
    { label: "K", x: 1.5, y: 4.5 },
    { label: "L", x: -1.5, y: 1 },
  ],
];


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

/** Figures du 1er quadrant pour G6.1 ex. 3 — dessins reconnaissables, sommets aux coins */
export type Q1CartesianFigure = {
  id: string;
  name: string;
  polygons: Array<{ points: [number, number][] }>;
  /** Sommets (coins des polygones) pour tirer les points a–d */
  vertices: [number, number][];
};

function q1Hex6(id: string, name: string, pts: [number, number][]): Q1CartesianFigure {
  return { id, name, polygons: [{ points: pts }], vertices: pts };
}

export const Q1_CARTESIAN_FIGURES: Q1CartesianFigure[] = [
  q1Hex6("q1-boat", "bateau", [[2, 7], [6, 11], [14, 11], [18, 7], [13, 4], [7, 4]]),
  q1Hex6("q1-house", "maison", [[5, 9], [10, 18], [15, 9], [15, 15], [5, 15], [5, 12]]),
  q1Hex6("q1-tree", "arbre", [[7, 16], [10, 4], [13, 16], [12, 10], [8, 10], [9, 13]]),
  q1Hex6("q1-flower", "fleur", [[6, 10], [10, 16], [14, 10], [12, 6], [8, 6], [10, 12]]),
  q1Hex6("q1-plane", "avion", [[2, 10], [8, 13], [16, 13], [18, 10], [14, 7], [6, 7]]),
  q1Hex6("q1-car", "voiture", [[3, 8], [7, 12], [14, 12], [17, 8], [13, 5], [6, 5]]),
  q1Hex6("q1-fish", "poisson", [[3, 10], [9, 13], [15, 10], [17, 7], [11, 5], [6, 7]]),
  q1Hex6("q1-kite", "cerf-volant", [[6, 14], [10, 18], [14, 14], [12, 8], [8, 8], [10, 12]]),
  q1Hex6("q1-rocket", "fusée", [[8, 4], [12, 4], [13, 12], [10, 18], [7, 12], [8, 8]]),
  q1Hex6("q1-castle", "château", [[4, 8], [4, 16], [10, 16], [10, 12], [16, 16], [16, 8]]),
  q1Hex6("q1-mountain", "montagne", [[3, 6], [8, 16], [11, 10], [14, 16], [17, 6], [10, 8]]),
  q1Hex6("q1-butterfly", "papillon", [[4, 10], [8, 16], [10, 10], [12, 16], [16, 10], [10, 6]]),
  q1Hex6("q1-cup", "gobelet", [[7, 6], [13, 6], [14, 14], [10, 17], [6, 14], [7, 10]]),
  q1Hex6("q1-candle", "bougie", [[8, 4], [12, 4], [13, 12], [10, 16], [7, 12], [8, 8]]),
  q1Hex6("q1-chair", "chaise", [[6, 6], [14, 6], [14, 10], [12, 16], [8, 16], [6, 10]]),
  q1Hex6("q1-icecream", "glace", [[8, 6], [12, 6], [13, 12], [10, 17], [7, 12], [8, 10]]),
  q1Hex6("q1-cloud", "nuage", [[4, 10], [7, 14], [11, 15], [15, 12], [16, 9], [8, 8]]),
  q1Hex6("q1-snail", "escargot", [[4, 6], [8, 4], [13, 6], [14, 11], [9, 15], [5, 11]]),
  q1Hex6("q1-umbrella", "parapluie", [[4, 12], [8, 15], [12, 15], [16, 12], [12, 6], [8, 6]]),
  q1Hex6("q1-star", "étoile", [[10, 16], [14, 10], [18, 6], [12, 4], [6, 4], [4, 10]]),
];

/** Figures 6 sommets pour G6.2 — cadrants 1 et 2 (y > 0, x ∈ [−10 ; 10]) */
export type SignedCartesianFigure = {
  id: string;
  name: string;
  polygons: Array<{ points: [number, number][] }>;
  vertices: [number, number][];
};

function hex6Figure(id: string, name: string, pts: [number, number][]): SignedCartesianFigure {
  return { id, name, polygons: [{ points: pts }], vertices: pts };
}

export const Q12_CARTESIAN_FIGURES: SignedCartesianFigure[] = [
  hex6Figure("q12-a", "figure A", [[-8, 2], [-4, 7], [0, 8], [5, 6], [7, 3], [-3, 2]]),
  hex6Figure("q12-b", "figure B", [[-9, 4], [-5, 3], [-1, 6], [3, 8], [7, 5], [2, 2]]),
  hex6Figure("q12-c", "figure C", [[-7, 5], [-3, 8], [2, 9], [8, 6], [6, 2], [-2, 3]]),
  hex6Figure("q12-d", "figure D", [[-6, 3], [-2, 7], [4, 7], [8, 4], [5, 2], [-4, 2]]),
  hex6Figure("q12-e", "figure E", [[-8, 6], [-4, 4], [0, 7], [5, 9], [9, 5], [3, 2]]),
  hex6Figure("q12-f", "figure F", [[-9, 3], [-6, 6], [-2, 5], [3, 7], [8, 4], [4, 2]]),
  hex6Figure("q12-g", "figure G", [[-7, 2], [-3, 5], [1, 8], [6, 7], [9, 4], [2, 2]]),
  hex6Figure("q12-h", "figure H", [[-5, 4], [-8, 7], [-2, 9], [4, 8], [7, 5], [1, 3]]),
  hex6Figure("q12-i", "figure I", [[-6, 5], [-1, 3], [3, 6], [7, 8], [9, 4], [2, 2]]),
  hex6Figure("q12-j", "figure J", [[-9, 5], [-5, 8], [0, 6], [4, 9], [8, 3], [-2, 2]]),
  hex6Figure("q12-k", "figure K", [[-8, 4], [-4, 2], [0, 5], [5, 8], [8, 6], [3, 3]]),
  hex6Figure("q12-l", "figure L", [[-7, 3], [-2, 6], [2, 8], [6, 6], [9, 3], [1, 2]]),
  hex6Figure("q12-m", "figure M", [[-6, 6], [-3, 3], [1, 5], [5, 8], [8, 5], [0, 2]]),
  hex6Figure("q12-n", "figure N", [[-9, 2], [-5, 5], [-1, 7], [4, 6], [7, 3], [2, 2]]),
  hex6Figure("q12-o", "figure O", [[-8, 7], [-4, 4], [1, 7], [5, 9], [9, 6], [3, 2]]),
  hex6Figure("q12-p", "figure P", [[-7, 4], [-3, 7], [2, 6], [6, 8], [8, 3], [0, 2]]),
  hex6Figure("q12-q", "figure Q", [[-6, 2], [-2, 4], [2, 7], [7, 6], [9, 4], [1, 3]]),
  hex6Figure("q12-r", "figure R", [[-9, 6], [-5, 3], [0, 4], [4, 8], [8, 5], [2, 2]]),
  hex6Figure("q12-s", "figure S", [[-8, 3], [-4, 6], [0, 8], [5, 5], [7, 2], [-2, 2]]),
  hex6Figure("q12-t", "figure T", [[-7, 5], [-1, 3], [3, 6], [7, 8], [9, 4], [-3, 2]]),
];

export const Q34_CARTESIAN_FIGURES: SignedCartesianFigure[] = Q12_CARTESIAN_FIGURES.map((f) => ({
  id: f.id.replace("q12-", "q34-"),
  name: f.name,
  polygons: [{ points: f.polygons[0]!.points.map(([x, y]) => [x, -y] as [number, number]) }],
  vertices: f.vertices.map(([x, y]) => [x, -y] as [number, number]),
}));

function polyFigure(id: string, name: string, pts: [number, number][]): SignedCartesianFigure {
  return { id, name, polygons: [{ points: pts }], vertices: pts };
}

/** Figures 5–8 sommets pour G6.2 ex. 3 — 4 quadrants */
export const Q_ALL_CARTESIAN_FIGURES: SignedCartesianFigure[] = [
  polyFigure("qall-01", "figure 1", [[-8, 7], [-3, 9], [4, 6], [7, -2], [-2, -6], [-7, 0]]),
  polyFigure("qall-02", "figure 2", [[-9, 2], [-5, 8], [0, 6], [6, 9], [8, 2]]),
  polyFigure("qall-03", "figure 3", [[-7, -4], [-2, 6], [3, 8], [8, 3], [5, -6], [-4, -8]]),
  polyFigure("qall-04", "figure 4", [[-6, 5], [0, 9], [5, 4], [9, -3], [2, -7], [-5, -2]]),
  polyFigure("qall-05", "figure 5", [[-8, -2], [-4, 7], [2, 9], [7, 5], [6, -4], [0, -8], [-6, -6]]),
  polyFigure("qall-06", "figure 6", [[-9, 6], [-3, 3], [2, 8], [8, 6], [6, 0], [0, -5]]),
  polyFigure("qall-07", "figure 7", [[-7, 8], [-1, 4], [4, 7], [9, 2], [3, -6], [-6, -3]]),
  polyFigure("qall-08", "figure 8", [[-8, 4], [-5, -6], [0, -8], [5, -2], [8, 4], [2, 8]]),
  polyFigure("qall-09", "figure 9", [[-6, 6], [-2, 9], [3, 7], [7, 2], [4, -5], [-4, -4]]),
  polyFigure("qall-10", "figure 10", [[-9, -3], [-4, 5], [1, 8], [6, 4], [8, -2], [2, -7], [-6, -6]]),
  polyFigure("qall-11", "figure 11", [[-7, 2], [-2, 7], [3, 9], [8, 4], [5, -3], [-3, -5]]),
  polyFigure("qall-12", "figure 12", [[-8, 6], [-3, 2], [2, 6], [7, 8], [9, 0], [4, -6], [-5, -4]]),
  polyFigure("qall-13", "figure 13", [[-6, -8], [-2, 4], [4, 7], [8, 2], [6, -4]]),
  polyFigure("qall-14", "figure 14", [[-9, 4], [-4, 8], [0, 5], [5, 8], [8, 2], [3, -4], [-5, -2]]),
  polyFigure("qall-15", "figure 15", [[-7, -6], [-2, 3], [3, 6], [7, 0], [4, -7], [-4, -4]]),
  polyFigure("qall-16", "figure 16", [[-8, 3], [-4, 9], [2, 7], [6, 3], [8, -4], [0, -8], [-6, -5]]),
  polyFigure("qall-17", "figure 17", [[-6, 7], [0, 9], [5, 5], [8, -2], [2, -6]]),
  polyFigure("qall-18", "figure 18", [[-9, -2], [-5, 6], [0, 8], [6, 4], [8, -3], [2, -7], [-4, -6]]),
  polyFigure("qall-19", "figure 19", [[-7, 5], [-1, 8], [4, 6], [7, 0], [3, -6], [-5, -3]]),
  polyFigure("qall-20", "figure 20", [[-8, 8], [-3, 4], [2, 7], [7, 5], [9, -2], [4, -7], [-2, -5], [-6, 0]]),
];

export type { SegmentLine, LineScenarioQuestion, LineScenario } from "./g6-line-scenarios";
export { LINE_SCENARIOS, parallelToLabel } from "./g6-line-scenarios";

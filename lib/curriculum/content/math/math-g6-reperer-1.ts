import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G6_REPERER_1_LESSON: MathSubmoduleLesson = {
  submoduleId: "G6-1",
  submoduleCode: "G6.1",
  theory: {
    title: { fr: "Se repérer dans le plan" },
    paragraphs: { fr: [] },
    blocks: [
      { type: "heading", fr: "Repérer une position", black: true },
      { type: "plain", fr: "Pour localiser une case sur une grille, on utilise une **colonne** (lettre) et une **ligne** (chiffre)." },

      { type: "highlight", fr: "Observer les tableaux" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "La case **jaune** est sur l'emplacement **(B ; 3)**.",
          "On lit d'abord la **colonne**, puis la **ligne**.",
        ],
      },

      {
        type: "svg",
        captionFr: "Colonne b, ligne 3",
        markup: `<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px;display:block;margin:0 auto">
  <text x="52" y="18" font-size="11" fill="var(--color-accent-alg)" font-weight="bold">a</text>
  <text x="92" y="18" font-size="11" fill="var(--color-accent-alg)" font-weight="bold">b</text>
  <text x="132" y="18" font-size="11" fill="var(--color-accent-alg)" font-weight="bold">c</text>
  <text x="172" y="18" font-size="11" fill="var(--color-accent-alg)" font-weight="bold">d</text>
  <text x="212" y="18" font-size="11" fill="var(--color-accent-alg)" font-weight="bold">e</text>
  <text x="252" y="18" font-size="11" fill="var(--color-accent-alg)" font-weight="bold">f</text>
  ${[1,2,3,4,5,6].map((r,i)=>`<text x="18" y="${52+i*36}" font-size="11" fill="var(--color-accent-alg)" font-weight="bold">${r}</text>`).join("")}
  ${[0,1,2,3,4,5].map(c=>[0,1,2,3,4,5].map(r=>{
    const x=40+c*40, y=30+r*36, fill=(c===1?"#e2e8f0":"")||(r===2?"#e2e8f0":"");
    return `<rect x="${x}" y="${y}" width="36" height="32" fill="${fill||"#fff"}" stroke="#cbd5e1" stroke-width="1"/>`;
  }).join("")).join("")}
  <rect x="80" y="102" width="36" height="32" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
  <text x="98" y="268" text-anchor="middle" font-size="10" fill="#64748b">Colonne b</text>
  <text x="290" y="120" font-size="10" fill="#64748b">Ligne 3</text>
</svg>`,
      },

      { type: "plain", fr: "" },

      { type: "heading", fr: "Écrire le code de chaque forme", black: true },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Chaque forme occupe **une case** de la grille.",
          "On écrit sa position sous la forme **(colonne ; ligne)**, par exemple **(d ; 1)**.",
        ],
      },

      { type: "plain", fr: "" },

      { type: "heading", fr: "Placer des formes dans la grille", black: true },
      {
        type: "bullets",
        labelFr: "",
        itemsFr: [
          "On lit les **coordonnées** données.",
          "On place la forme dans la **bonne case**.",
          "On vérifie : colonne puis ligne.",
        ],
      },

      { type: "plain", fr: "" },

      { type: "heading", fr: "Repère cartésien", black: true },
      {
        type: "plain",
        fr: "Pour trouver un point sur la grille, on regarde d'abord sur la **ligne horizontale (x)**, puis sur la **ligne verticale (y)**.",
      },

      { type: "highlight", fr: "Exemple : trouver les coordonnées du point A" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "1. Je regarde, sur la ligne des **X**, la graduation.",
          "2. Le point est placé à **2**.",
          "3. Je regarde, sur la ligne des **Y**, la graduation.",
          "4. Le point est placé à **4**.",
          "5. Les coordonnées du point A sont donc **(2 ; 4)**.",
        ],
      },

      {
        type: "svg",
        captionFr: "Point A (2 ; 4)",
        markup: `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:260px;display:block;margin:0 auto">
  ${[0,1,2,3,4,5].map(i=>`<line x1="${30+i*32}" y1="20" x2="${30+i*32}" y2="170" stroke="#bfdbfe" stroke-width="1"/>`).join("")}
  ${[0,1,2,3,4,5].map(i=>`<line x1="30" y1="${170-i*30}" x2="190" y2="${170-i*30}" stroke="#bfdbfe" stroke-width="1"/>`).join("")}
  <line x1="30" y1="170" x2="190" y2="170" stroke="#334155" stroke-width="2" marker-end="url(#ax)"/>
  <line x1="30" y1="170" x2="30" y2="20" stroke="#334155" stroke-width="2" marker-end="url(#ay)"/>
  <defs><marker id="ax" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker>
  <marker id="ay" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs>
  ${[1,2,3,4,5].map(n=>`<text x="${30+n*32}" y="186" text-anchor="middle" font-size="10" fill="#64748b">${n}</text>`).join("")}
  ${[1,2,3,4,5].map(n=>`<text x="18" y="${175-n*30}" text-anchor="middle" font-size="10" fill="#64748b">${n}</text>`).join("")}
  <text x="188" y="186" font-size="11" font-weight="bold" fill="#334155">x</text>
  <text x="18" y="24" font-size="11" font-weight="bold" fill="#334155">y</text>
  <circle cx="94" cy="50" r="5" fill="#1e293b"/>
  <text x="102" y="46" font-size="12" font-weight="bold" fill="#1e293b">A</text>
  <line x1="94" y1="50" x2="94" y2="170" stroke="#1e293b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="94" y1="50" x2="30" y2="50" stroke="#1e293b" stroke-width="1" stroke-dasharray="4 3"/>
</svg>`,
      },

      { type: "plain", fr: "" },

      { type: "heading", fr: "Le plan et les quadrants", black: true },
      {
        type: "plain",
        fr: "Un **plan** est la représentation graphique vue d'en haut. C'est une grande grille quadrillée avec deux droites perpendiculaires qui forment **quatre quadrants**.",
      },
      {
        type: "table",
        headersFr: ["Quadrant", "Signes (x ; y)"],
        accentHeader: true,
        rows: [
          ["1er quadrant (en haut à droite)", "( + ; + )"],
          ["2e quadrant (en haut à gauche)", "( − ; + )"],
          ["3e quadrant (en bas à gauche)", "( − ; − )"],
          ["4e quadrant (en bas à droite)", "( + ; − )"],
        ],
      },
      {
        type: "bullets",
        labelFr: "Vocabulaire",
        itemsFr: [
          "L'axe horizontal (abscisses) s'appelle l'**axe des x**.",
          "L'axe vertical (ordonnées) s'appelle l'**axe des y**.",
          "Le point central se nomme l'**origine** (0 ; 0).",
        ],
      },

      {
        type: "svg",
        captionFr: "Les quatre quadrants",
        markup: `<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px;display:block;margin:0 auto">
  <line x1="120" y1="20" x2="120" y2="180" stroke="#334155" stroke-width="2"/>
  <line x1="20" y1="100" x2="220" y2="100" stroke="#334155" stroke-width="2"/>
  <text x="175" y="55" font-size="9" fill="var(--color-accent-alg)" font-weight="bold">1er (+;+)</text>
  <text x="45" y="55" font-size="9" fill="var(--color-accent-alg)" font-weight="bold">2e (−;+)</text>
  <text x="45" y="150" font-size="9" fill="var(--color-accent-alg)" font-weight="bold">3e (−;−)</text>
  <text x="165" y="150" font-size="9" fill="var(--color-accent-alg)" font-weight="bold">4e (+;−)</text>
  <text x="210" y="108" font-size="11" font-weight="bold">x</text>
  <text x="126" y="28" font-size="11" font-weight="bold">y</text>
  <circle cx="120" cy="100" r="3" fill="#f97316"/>
  <text x="126" y="104" font-size="9" fill="#f97316">O</text>
</svg>`,
      },

      { type: "plain", fr: "" },

      {
        type: "rule",
        titleFr: "À retenir",
        itemsFr: [
          "Grille lettres/chiffres : **(colonne ; ligne)**",
          "Repère cartésien : **(x ; y)** — d'abord x, puis y",
          "Sur une carte : même principe avec les coordonnées de la grille",
        ],
      },

      { type: "plain", fr: "" },

      { type: "heading", fr: "Se repérer sur une carte", black: true },
      {
        type: "note",
        fr: "Sur une carte quadrillée, chaque lieu se trouve dans une case. On peut demander où il est, ce qu'il y a dans une case, ou calculer une distance en nombre de cases.",
      },
    ],
  },
  exercises: [],
};

import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G1_2_LESSON: MathSubmoduleLesson = {
  submoduleId: "G1-2",
  submoduleCode: "G1.2",
  theory: {
    title: { fr: "Propriétés" },
    blocks: [
      {
        type: "theory_tabs",
        tabs: [
          {
            label: "Angles",
            blocks: [
              { type: "heading", fr: "Qu'est-ce qu'un angle ?", black: true },
              {
                type: "plain",
                fr: "Un **angle** est formé par deux **demi-droites** issues d'un même point appelé **sommet**. On le mesure en **degrés (°)**.",
              },
              {
                type: "rule",
                titleFr: "Repères",
                itemsFr: [
                  "Tour complet = 360°",
                  "Demi-tour = 180°",
                  "Quart de tour = 90°",
                ],
              },
              { type: "heading", fr: "Types d'angles", black: true },
              {
                type: "table",
                headersFr: ["Type", "Mesure"],
                accentHeader: true,
                colAligns: ["left", "left"],
                rows: [
                  ["Nul", "0°"],
                  ["Aigu", "0° < α < 90°"],
                  ["Droit", "α = 90°"],
                  ["Obtus", "90° < α < 180°"],
                  ["Plat", "α = 180°"],
                  ["Rentrant", "180° < α < 360°"],
                ],
              },
              {
                type: "svg_row",
                items: [
                  {
                    markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <line x1='8' y1='68' x2='70' y2='68' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linecap='round'/>
  <line x1='8' y1='68' x2='47' y2='22' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linecap='round'/>
  <path d='M 28,68 A 20,20 0 0,0 21,51' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5'/>
</svg>`,
                    captionFr: "Aigu (< 90°)",
                  },
                  {
                    markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <line x1='8' y1='68' x2='70' y2='68' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linecap='round'/>
  <line x1='8' y1='68' x2='8' y2='12' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linecap='round'/>
  <rect x='8' y='58' width='10' height='10' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5'/>
</svg>`,
                    captionFr: "Droit (= 90°)",
                  },
                  {
                    markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <line x1='40' y1='68' x2='75' y2='68' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linecap='round'/>
  <line x1='40' y1='68' x2='23' y2='38' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linecap='round'/>
  <path d='M 55,68 A 15,15 0 0,0 33,55' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5'/>
</svg>`,
                    captionFr: "Obtus (> 90°)",
                  },
                  {
                    markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <line x1='5' y1='50' x2='75' y2='50' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linecap='round'/>
  <circle cx='40' cy='50' r='3' fill='var(--color-accent-alg)'/>
  <path d='M 22,50 A 18,18 0 0,1 58,50' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' stroke-dasharray='4,3' opacity='0.6'/>
</svg>`,
                    captionFr: "Plat (= 180°)",
                  },
                ],
              },
              { type: "highlight", fr: "Angles complémentaires" },
              {
                type: "section",
                labelFr: "",
                itemsFr: [
                  "Deux angles sont **complémentaires** si leur somme vaut **90°**.",
                  "Exemple : 35° et 55° sont complémentaires (35 + 55 = 90).",
                ],
              },
              { type: "highlight", fr: "Angles supplémentaires" },
              {
                type: "section",
                labelFr: "",
                itemsFr: [
                  "Deux angles sont **supplémentaires** si leur somme vaut **180°**.",
                  "Exemple : 110° et 70° sont supplémentaires (110 + 70 = 180).",
                ],
              },
              { type: "highlight", fr: "Angles opposés par le sommet" },
              {
                type: "section",
                labelFr: "",
                itemsFr: [
                  "Quand deux droites se croisent, les angles **opposés par le sommet** sont **égaux**.",
                ],
              },
            ],
          },
          {
            label: "Droits",
            blocks: [
              { type: "heading", fr: "Les quadrilatères", black: true },
              {
                type: "plain",
                fr: "Un **quadrilatère** est un polygone à **4 côtés**. La somme de ses angles intérieurs est toujours **360°**.",
              },
              {
                type: "table",
                headersFr: ["Nom", "Propriétés principales"],
                accentHeader: true,
                colAligns: ["left", "left"],
                rows: [
                  ["Carré", "4 côtés égaux · 4 angles droits"],
                  ["Rectangle", "4 angles droits · côtés opposés égaux"],
                  ["Losange", "4 côtés égaux · angles opposés égaux"],
                  ["Parallélogramme", "Côtés opposés parallèles et égaux"],
                  ["Trapèze", "Une seule paire de côtés parallèles"],
                ],
              },
              { type: "highlight", fr: "Hiérarchie des quadrilatères" },
              {
                type: "section",
                labelFr: "",
                itemsFr: [
                  "Le **carré** est un cas particulier du **rectangle** (rectangle à côtés égaux).",
                  "Le **rectangle** et le **losange** sont des cas particuliers du **parallélogramme**.",
                  "Le **parallélogramme** est un cas particulier du **trapèze**.",
                ],
              },
              {
                type: "svg_row",
                items: [
                  {
                    markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'><rect x='15' y='15' width='50' height='50' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/></svg>`,
                    captionFr: "Carré",
                  },
                  {
                    markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'><rect x='4' y='22' width='72' height='36' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5'/></svg>`,
                    captionFr: "Rectangle",
                  },
                  {
                    markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'><polygon points='40,8 72,40 40,72 8,40' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/></svg>`,
                    captionFr: "Losange",
                  },
                  {
                    markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'><polygon points='12,64 56,64 68,16 24,16' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/></svg>`,
                    captionFr: "Parallélogramme",
                  },
                  {
                    markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'><polygon points='16,62 64,62 52,18 28,18' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/></svg>`,
                    captionFr: "Trapèze",
                  },
                ],
              },
              { type: "heading", fr: "Diagonales", black: true },
              {
                type: "plain",
                fr: "La **diagonale** d'un quadrilatère est un segment reliant deux sommets non consécutifs.",
              },
              { type: "highlight", fr: "Propriétés des diagonales" },
              {
                type: "section",
                labelFr: "",
                itemsFr: [
                  "**Carré** : diagonales égales et **perpendiculaires**.",
                  "**Rectangle** : diagonales **égales** mais pas perpendiculaires.",
                  "**Losange** : diagonales **perpendiculaires** mais pas égales.",
                  "**Parallélogramme** : diagonales se **coupent en leur milieu**.",
                ],
              },
            ],
          },
          {
            label: "Symétrie",
            blocks: [
              { type: "heading", fr: "Symétrie axiale", black: true },
              {
                type: "plain",
                fr: "Une figure possède un **axe de symétrie** si on peut la plier le long d'une droite et que les deux moitiés se superposent exactement.",
              },
              {
                type: "table",
                headersFr: ["Forme", "Axes de symétrie"],
                accentHeader: true,
                colAligns: ["left", "center"],
                rows: [
                  ["Triangle équilatéral", "3"],
                  ["Triangle isocèle", "1"],
                  ["Triangle scalène", "0"],
                  ["Rectangle", "2"],
                  ["Carré", "4"],
                  ["Losange", "2"],
                  ["Cercle", "∞ (infinité)"],
                ],
              },
              {
                type: "svg",
                markup: `<svg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:180px;display:block;margin:0 auto'>
  <rect x='20' y='20' width='80' height='80' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='5' y1='60' x2='115' y2='60' stroke='#f97316' stroke-width='1.5' stroke-dasharray='5,3'/>
  <line x1='60' y1='5' x2='60' y2='115' stroke='#f97316' stroke-width='1.5' stroke-dasharray='5,3'/>
  <line x1='12' y1='12' x2='108' y2='108' stroke='#16a34a' stroke-width='1.5' stroke-dasharray='5,3'/>
  <line x1='108' y1='12' x2='12' y2='108' stroke='#16a34a' stroke-width='1.5' stroke-dasharray='5,3'/>
</svg>`,
                captionFr: "Le carré possède 4 axes de symétrie",
              },
              { type: "heading", fr: "Angles intérieurs d'un polygone", black: true },
              {
                type: "plain",
                fr: "La **somme des angles intérieurs** d'un polygone à n côtés est donnée par la formule :",
              },
              {
                type: "rule",
                titleFr: "Formule",
                itemsFr: ["Somme = (n − 2) × 180°"],
              },
              {
                type: "table",
                headersFr: ["Polygone", "n", "Calcul", "Somme"],
                accentHeader: true,
                colAligns: ["left", "center", "left", "center"],
                rows: [
                  ["Triangle", "3", "(3 − 2) × 180°", "180°"],
                  ["Quadrilatère", "4", "(4 − 2) × 180°", "360°"],
                  ["Pentagone", "5", "(5 − 2) × 180°", "540°"],
                  ["Hexagone", "6", "(6 − 2) × 180°", "720°"],
                ],
              },
              { type: "highlight", fr: "À retenir" },
              {
                type: "section",
                labelFr: "",
                itemsFr: [
                  "Un carré est un **quadrilatère régulier** : 4 côtés égaux et 4 angles droits.",
                  "Un triangle équilatéral a 3 **côtés égaux** et 3 **angles de 60°** chacun.",
                ],
              },
            ],
          },
        ],
      },
    ],
    paragraphs: { fr: [] },
  },

  exercises: [
    { id: "g1-4-e1", promptFr: "Un angle de 75° est-il aigu ou obtus ?", type: "short_text", acceptable: ["aigu"] },
    { id: "g1-4-e2", promptFr: "Deux angles complémentaires : l'un est 35°. Quel est l'autre (en °) ?", type: "number", acceptable: ["55"] },
    { id: "g1-4-e4", promptFr: "Un angle droit mesure combien de degrés ?", type: "number", acceptable: ["90"] },
    { id: "g1-3-e1", promptFr: "Quel quadrilatère a 4 côtés égaux ET 4 angles droits ?", type: "short_text", acceptable: ["carré"] },
    { id: "g1-3-e3", promptFr: "Quel quadrilatère a exactement une paire de côtés parallèles ?", type: "short_text", acceptable: ["trapèze", "trapeze"] },
    { id: "g1-3-e5", promptFr: "Tous les carrés sont-ils des rectangles ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    { id: "g1-2-e1", promptFr: "Combien d'axes de symétrie a un carré ?", type: "number", acceptable: ["4"] },
    { id: "g1-2-e3", promptFr: "Combien d'axes de symétrie a un triangle équilatéral ?", type: "number", acceptable: ["3"] },
    { id: "g1-2-e5", promptFr: "Combien d'axes de symétrie a un cercle ? (beaucoup/infini/zéro)", type: "short_text", acceptable: ["infini", "infinité"] },
  ],
};

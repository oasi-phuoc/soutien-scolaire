import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G1_2_LESSON: MathSubmoduleLesson = {
  submoduleId: "G1-2",
  submoduleCode: "G1.2",
  theory: {
    title: { fr: "" },
    paragraphs: { fr: [] },
    blocks: [
      {
        type: "shape_explorer",
        shapes: [
          // ─────────────────────────────────────────────
          // 1. CARRÉ
          // ─────────────────────────────────────────────
          {
            id: "carre",
            svg: `<svg viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='44' height='44' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/></svg>`,
            tabs: [
              {
                label: "Angles",
                blocks: [
                  { type: "heading", fr: "4 angles droits de 90°", black: true },
                  { type: "plain", fr: "Le carré possède 4 angles droits. Chaque angle mesure exactement 90°. La somme des 4 angles vaut 360°." },
                  { type: "rule", titleFr: "Somme des angles", itemsFr: ["4 × 90° = 360°"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <rect x='15' y='15' width='70' height='70' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M15,27 L27,27 L27,15' fill='none' stroke='#f97316' stroke-width='2'/>
  <path d='M73,15 L73,27 L85,27' fill='none' stroke='#f97316' stroke-width='2'/>
  <path d='M15,73 L27,73 L27,85' fill='none' stroke='#f97316' stroke-width='2'/>
  <path d='M85,73 L73,73 L73,85' fill='none' stroke='#f97316' stroke-width='2'/>
</svg>`,
                        captionFr: "4 angles droits",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <rect x='15' y='15' width='70' height='70' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M15,27 L27,27 L27,15' fill='none' stroke='#f97316' stroke-width='2'/>
  <path d='M25,15 A10,10 0 0 1 15,25' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
</svg>`,
                        captionFr: "Chaque angle = 90°",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Droites",
                blocks: [
                  { type: "heading", fr: "4 côtés égaux et parallèles", black: true },
                  { type: "plain", fr: "Le carré a 4 côtés de même longueur. Les côtés opposés sont parallèles. Les côtés adjacents sont perpendiculaires entre eux." },
                  { type: "rule", titleFr: "Égalité des côtés", itemsFr: ["4 côtés égaux\nAB = BC = CD = DA"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <rect x='15' y='15' width='70' height='70' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='47' y1='11' x2='53' y2='19' stroke='#f97316' stroke-width='2'/>
  <line x1='47' y1='81' x2='53' y2='89' stroke='#f97316' stroke-width='2'/>
  <line x1='11' y1='47' x2='19' y2='53' stroke='#f97316' stroke-width='2'/>
  <line x1='81' y1='47' x2='89' y2='53' stroke='#f97316' stroke-width='2'/>
</svg>`,
                        captionFr: "4 côtés égaux",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <rect x='15' y='15' width='70' height='70' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M47,12 L50,8 L53,12' fill='none' stroke='#0891b2' stroke-width='2'/>
  <path d='M47,88 L50,92 L53,88' fill='none' stroke='#0891b2' stroke-width='2'/>
  <path d='M12,47 L8,50 L12,53' fill='none' stroke='#0891b2' stroke-width='2'/>
  <path d='M88,47 L92,50 L88,53' fill='none' stroke='#0891b2' stroke-width='2'/>
</svg>`,
                        captionFr: "2 paires parallèles",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Symétrie",
                blocks: [
                  { type: "heading", fr: "4 axes de symétrie", black: true },
                  { type: "plain", fr: "Le carré possède 4 axes de symétrie : 2 axes passant par les milieux des côtés opposés, et 2 axes diagonaux reliant les sommets opposés." },
                  { type: "rule", titleFr: "Axes de symétrie", itemsFr: ["4 axes de symétrie"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <rect x='15' y='15' width='70' height='70' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='5' y1='50' x2='95' y2='50' stroke='#16a34a' stroke-width='1.8' stroke-dasharray='4,3'/>
  <line x1='50' y1='5' x2='50' y2='95' stroke='#16a34a' stroke-width='1.8' stroke-dasharray='4,3'/>
</svg>`,
                        captionFr: "Axes milieux",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <rect x='15' y='15' width='70' height='70' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='10' y1='10' x2='90' y2='90' stroke='#f97316' stroke-width='1.8' stroke-dasharray='4,3'/>
  <line x1='90' y1='10' x2='10' y2='90' stroke='#f97316' stroke-width='1.8' stroke-dasharray='4,3'/>
</svg>`,
                        captionFr: "Axes diagonaux",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ─────────────────────────────────────────────
          // 2. RECTANGLE
          // ─────────────────────────────────────────────
          {
            id: "rectangle",
            svg: `<svg viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='15' width='52' height='30' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/></svg>`,
            tabs: [
              {
                label: "Angles",
                blocks: [
                  { type: "heading", fr: "4 angles droits de 90°", black: true },
                  { type: "plain", fr: "Le rectangle possède 4 angles droits. Chaque angle mesure exactement 90°. La somme des 4 angles vaut 360°." },
                  { type: "rule", titleFr: "Somme des angles", itemsFr: ["4 × 90° = 360°"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <rect x='10' y='25' width='80' height='50' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M10,36 L21,36 L21,25' fill='none' stroke='#f97316' stroke-width='2'/>
  <path d='M79,25 L79,36 L90,36' fill='none' stroke='#f97316' stroke-width='2'/>
  <path d='M10,64 L21,64 L21,75' fill='none' stroke='#f97316' stroke-width='2'/>
  <path d='M90,64 L79,64 L79,75' fill='none' stroke='#f97316' stroke-width='2'/>
</svg>`,
                        captionFr: "4 angles droits",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <rect x='10' y='25' width='80' height='50' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M10,36 L21,36 L21,25' fill='none' stroke='#f97316' stroke-width='2'/>
  <path d='M24,25 A14,14 0 0 1 10,39' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
</svg>`,
                        captionFr: "Chaque angle = 90°",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Droites",
                blocks: [
                  { type: "heading", fr: "Côtés opposés égaux et parallèles", black: true },
                  { type: "plain", fr: "Le rectangle a 2 paires de côtés opposés égaux et parallèles. Les côtés adjacents sont perpendiculaires. AB = CD (longueur) et BC = DA (largeur)." },
                  { type: "rule", titleFr: "Égalité des côtés", itemsFr: ["AB = CD (longueur)\nBC = DA (largeur)"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <rect x='10' y='25' width='80' height='50' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='47' y1='21' x2='53' y2='29' stroke='#f97316' stroke-width='2'/>
  <line x1='47' y1='71' x2='53' y2='79' stroke='#f97316' stroke-width='2'/>
  <line x1='6' y1='46' x2='14' y2='54' stroke='#f97316' stroke-width='2'/>
  <line x1='9' y1='43' x2='17' y2='51' stroke='#f97316' stroke-width='2'/>
  <line x1='86' y1='46' x2='94' y2='54' stroke='#f97316' stroke-width='2'/>
  <line x1='83' y1='43' x2='91' y2='51' stroke='#f97316' stroke-width='2'/>
</svg>`,
                        captionFr: "Côtés opposés égaux",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <rect x='10' y='25' width='80' height='50' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M47,22 L50,18 L53,22' fill='none' stroke='#0891b2' stroke-width='2'/>
  <path d='M47,78 L50,82 L53,78' fill='none' stroke='#0891b2' stroke-width='2'/>
  <path d='M7,47 L3,50 L7,53' fill='none' stroke='#0891b2' stroke-width='2'/>
  <path d='M93,47 L97,50 L93,53' fill='none' stroke='#0891b2' stroke-width='2'/>
</svg>`,
                        captionFr: "2 paires parallèles",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Symétrie",
                blocks: [
                  { type: "heading", fr: "2 axes de symétrie", black: true },
                  { type: "plain", fr: "Le rectangle possède 2 axes de symétrie : un axe horizontal et un axe vertical, passant chacun par les milieux des côtés opposés. Les diagonales ne sont pas des axes de symétrie." },
                  { type: "rule", titleFr: "Axes de symétrie", itemsFr: ["2 axes de symétrie\n(milieux des côtés opposés)"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <rect x='10' y='25' width='80' height='50' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='2' y1='50' x2='98' y2='50' stroke='#16a34a' stroke-width='1.8' stroke-dasharray='4,3'/>
</svg>`,
                        captionFr: "Axe horizontal",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <rect x='10' y='25' width='80' height='50' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='50' y1='2' x2='50' y2='98' stroke='#16a34a' stroke-width='1.8' stroke-dasharray='4,3'/>
</svg>`,
                        captionFr: "Axe vertical",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ─────────────────────────────────────────────
          // 3. TRIANGLE
          // ─────────────────────────────────────────────
          {
            id: "triangle",
            svg: `<svg viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><polygon points='30,6 54,54 6,54' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/></svg>`,
            tabs: [
              {
                label: "Angles",
                blocks: [
                  { type: "heading", fr: "Somme des angles = 180°", black: true },
                  { type: "plain", fr: "Tout triangle a 3 angles dont la somme vaut toujours 180°. On distingue 4 types de triangles selon leurs angles." },
                  {
                    type: "table",
                    headersFr: ["Type", "Angles"],
                    accentHeader: true,
                    rows: [
                      ["Quelconque", "3 angles différents"],
                      ["Équilatéral", "3 × 60°"],
                      ["Isocèle", "2 angles égaux"],
                      ["Rectangle", "1 angle de 90°"],
                    ],
                  },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,10 88,76 12,76' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M41,26 A14,14 0 0 1 59,26' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M20,66 A14,14 0 0 1 26,77' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M74,77 A14,14 0 0 1 80,66' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
</svg>`,
                        captionFr: "Équilatéral : 3×60°",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='15,15 85,85 15,85' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M15,72 L28,72 L28,85' fill='none' stroke='#f97316' stroke-width='2'/>
</svg>`,
                        captionFr: "Rectangle : 1 angle droit",
                      },
                    ],
                  },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,10 80,85 20,85' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M27,73 A12,12 0 0 1 33,84' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M67,84 A12,12 0 0 1 73,73' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
</svg>`,
                        captionFr: "Isocèle : 2 angles égaux",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='20,15 85,70 10,85' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M25,24 A12,12 0 0 1 31,15' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M74,72 A10,10 0 0 1 83,78' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M12,75 A10,10 0 0 1 19,85' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
</svg>`,
                        captionFr: "Quelconque : angles différents",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Droites",
                blocks: [
                  { type: "heading", fr: "3 côtés — types selon les côtés", black: true },
                  { type: "plain", fr: "Un triangle a 3 côtés. On le classe aussi selon l'égalité de ses côtés." },
                  {
                    type: "table",
                    headersFr: ["Type", "Côtés"],
                    accentHeader: true,
                    rows: [
                      ["Quelconque", "0 côtés égaux"],
                      ["Isocèle", "2 côtés égaux"],
                      ["Équilatéral", "3 côtés égaux"],
                      ["Rectangle", "Hypoténuse = côté le plus long"],
                    ],
                  },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,10 88,76 12,76' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='27' y1='40' x2='35' y2='46' stroke='#f97316' stroke-width='2'/>
  <line x1='65' y1='40' x2='73' y2='46' stroke='#f97316' stroke-width='2'/>
  <line x1='47' y1='73' x2='53' y2='79' stroke='#f97316' stroke-width='2'/>
</svg>`,
                        captionFr: "Équilatéral : 3 côtés égaux",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,10 80,85 20,85' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='29' y1='43' x2='37' y2='50' stroke='#f97316' stroke-width='2'/>
  <line x1='63' y1='43' x2='71' y2='50' stroke='#f97316' stroke-width='2'/>
</svg>`,
                        captionFr: "Isocèle : 2 côtés égaux",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Symétrie",
                blocks: [
                  { type: "heading", fr: "Axes de symétrie selon le type", black: true },
                  { type: "plain", fr: "Le nombre d'axes de symétrie dépend du type de triangle." },
                  {
                    type: "table",
                    headersFr: ["Type", "Axes de symétrie"],
                    accentHeader: true,
                    rows: [
                      ["Équilatéral", "3 axes"],
                      ["Isocèle", "1 axe"],
                      ["Quelconque", "0 axe"],
                      ["Rectangle (sauf isocèle-rect.)", "0 axe"],
                    ],
                  },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,10 88,76 12,76' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='50' y1='5' x2='50' y2='82' stroke='#16a34a' stroke-width='1.8' stroke-dasharray='4,3'/>
  <line x1='12' y1='76' x2='69' y2='43' stroke='#16a34a' stroke-width='1.8' stroke-dasharray='4,3'/>
  <line x1='88' y1='76' x2='31' y2='43' stroke='#16a34a' stroke-width='1.8' stroke-dasharray='4,3'/>
</svg>`,
                        captionFr: "Équilatéral : 3 axes",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,10 80,85 20,85' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='50' y1='5' x2='50' y2='92' stroke='#16a34a' stroke-width='1.8' stroke-dasharray='4,3'/>
</svg>`,
                        captionFr: "Isocèle : 1 axe",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ─────────────────────────────────────────────
          // 4. LOSANGE
          // ─────────────────────────────────────────────
          {
            id: "losange",
            svg: `<svg viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><polygon points='30,6 54,30 30,54 6,30' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/></svg>`,
            tabs: [
              {
                label: "Angles",
                blocks: [
                  { type: "heading", fr: "Angles opposés égaux, somme = 360°", black: true },
                  { type: "plain", fr: "Le losange a 4 angles. Les angles opposés sont égaux entre eux. Les angles adjacents sont supplémentaires (leur somme vaut 180°). La somme de tous les angles est 360°." },
                  { type: "rule", titleFr: "Propriétés des angles", itemsFr: ["Angles opposés égaux : α = α, β = β", "Angles adjacents : α + β = 180°", "Somme totale : 360°"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,8 90,50 50,92 10,50' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M42,22 A12,12 0 0 1 58,22' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M42,78 A12,12 0 0 0 58,78' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M20,43 A12,12 0 0 0 20,57' fill='none' stroke='#f97316' stroke-width='1.5'/>
  <path d='M80,43 A12,12 0 0 1 80,57' fill='none' stroke='#f97316' stroke-width='1.5'/>
</svg>`,
                        captionFr: "Angles opposés égaux",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,8 90,50 50,92 10,50' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M42,22 A12,12 0 0 1 58,22' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M80,43 A12,12 0 0 1 80,57' fill='none' stroke='#f97316' stroke-width='1.5'/>
</svg>`,
                        captionFr: "Angles adjacents : somme 180°",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Droites",
                blocks: [
                  { type: "heading", fr: "4 côtés égaux — diagonales perpendiculaires", black: true },
                  { type: "plain", fr: "Le losange a 4 côtés de même longueur. Il a 2 paires de côtés parallèles. Ses diagonales sont perpendiculaires entre elles et se coupent en leur milieu." },
                  { type: "rule", titleFr: "Propriétés des côtés", itemsFr: ["4 côtés égaux : AB = BC = CD = DA", "Diagonales perpendiculaires"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,8 90,50 50,92 10,50' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='25' y1='25' x2='33' y2='33' stroke='#f97316' stroke-width='2'/>
  <line x1='67' y1='25' x2='75' y2='33' stroke='#f97316' stroke-width='2'/>
  <line x1='25' y1='67' x2='33' y2='75' stroke='#f97316' stroke-width='2'/>
  <line x1='67' y1='67' x2='75' y2='75' stroke='#f97316' stroke-width='2'/>
</svg>`,
                        captionFr: "4 côtés égaux",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,8 90,50 50,92 10,50' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='50' y1='8' x2='50' y2='92' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.6'/>
  <line x1='10' y1='50' x2='90' y2='50' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.6'/>
  <path d='M50,44 L56,44 L56,50' fill='none' stroke='#f97316' stroke-width='2'/>
</svg>`,
                        captionFr: "Diagonales ⊥",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Symétrie",
                blocks: [
                  { type: "heading", fr: "2 axes de symétrie = les diagonales", black: true },
                  { type: "plain", fr: "Le losange possède 2 axes de symétrie. Ces axes sont exactement ses 2 diagonales : l'une verticale et l'autre horizontale." },
                  { type: "rule", titleFr: "Axes de symétrie", itemsFr: ["2 axes de symétrie\n= les 2 diagonales"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,8 90,50 50,92 10,50' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='50' y1='2' x2='50' y2='98' stroke='#16a34a' stroke-width='1.8' stroke-dasharray='4,3'/>
</svg>`,
                        captionFr: "Axe vertical",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,8 90,50 50,92 10,50' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='2' y1='50' x2='98' y2='50' stroke='#16a34a' stroke-width='1.8' stroke-dasharray='4,3'/>
</svg>`,
                        captionFr: "Axe horizontal",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ─────────────────────────────────────────────
          // 5. PARALLÉLOGRAMME
          // ─────────────────────────────────────────────
          {
            id: "parallelogramme",
            svg: `<svg viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><polygon points='8,48 44,48 52,12 16,12' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/></svg>`,
            tabs: [
              {
                label: "Angles",
                blocks: [
                  { type: "heading", fr: "Angles opposés égaux, somme = 360°", black: true },
                  { type: "plain", fr: "Le parallélogramme a 4 angles. Les angles opposés sont égaux. Deux angles adjacents sont supplémentaires (somme = 180°). La somme totale des angles est 360°." },
                  { type: "rule", titleFr: "Propriétés des angles", itemsFr: ["Angles opposés : α = α, β = β", "Angles adjacents : α + β = 180°", "Total : 360°"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='15,80 75,80 85,20 25,20' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M23,68 A14,14 0 0 1 29,80' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M61,80 A14,14 0 0 1 67,68' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M33,20 A12,12 0 0 0 26,31' fill='none' stroke='#f97316' stroke-width='1.5'/>
  <path d='M74,31 A12,12 0 0 0 77,20' fill='none' stroke='#f97316' stroke-width='1.5'/>
</svg>`,
                        captionFr: "Angles opposés égaux",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='15,80 75,80 85,20 25,20' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M23,68 A14,14 0 0 1 29,80' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M33,20 A12,12 0 0 0 26,31' fill='none' stroke='#f97316' stroke-width='1.5'/>
</svg>`,
                        captionFr: "Angles adjacents : α+β=180°",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Droites",
                blocks: [
                  { type: "heading", fr: "Côtés opposés égaux et parallèles", black: true },
                  { type: "plain", fr: "Le parallélogramme a 2 paires de côtés opposés égaux et parallèles. En général, les côtés ne sont pas perpendiculaires. Les diagonales se coupent en leur milieu." },
                  { type: "rule", titleFr: "Propriétés des côtés", itemsFr: ["Côtés opposés égaux et parallèles", "Diagonales se coupent en leur milieu"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='15,80 75,80 85,20 25,20' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='42' y1='76' x2='48' y2='84' stroke='#f97316' stroke-width='2'/>
  <line x1='52' y1='16' x2='58' y2='24' stroke='#f97316' stroke-width='2'/>
  <line x1='16' y1='46' x2='24' y2='54' stroke='#f97316' stroke-width='2'/>
  <line x1='13' y1='43' x2='21' y2='51' stroke='#f97316' stroke-width='2'/>
  <line x1='76' y1='46' x2='84' y2='54' stroke='#f97316' stroke-width='2'/>
  <line x1='73' y1='43' x2='81' y2='51' stroke='#f97316' stroke-width='2'/>
  <path d='M42,77 L45,73 L48,77' fill='none' stroke='#0891b2' stroke-width='2'/>
  <path d='M52,23 L55,19 L58,23' fill='none' stroke='#0891b2' stroke-width='2'/>
</svg>`,
                        captionFr: "Côtés opposés égaux et ∥",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='15,80 75,80 85,20 25,20' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='15' y1='80' x2='85' y2='20' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.6'/>
  <line x1='75' y1='80' x2='25' y2='20' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.6'/>
  <circle cx='50' cy='50' r='3' fill='#f97316'/>
</svg>`,
                        captionFr: "Diagonales : milieu commun",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Symétrie",
                blocks: [
                  { type: "heading", fr: "Aucun axe — symétrie centrale en O", black: true },
                  { type: "plain", fr: "Le parallélogramme n'a aucun axe de symétrie axiale. Cependant, il admet une symétrie centrale : le centre O (intersection des diagonales) est un centre de symétrie." },
                  { type: "rule", titleFr: "Symétrie", itemsFr: ["0 axe de symétrie axiale", "1 centre de symétrie : O"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='15,80 75,80 85,20 25,20' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
</svg>`,
                        captionFr: "Pas d'axe de symétrie",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='15,80 75,80 85,20 25,20' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='15' y1='80' x2='85' y2='20' stroke='var(--color-accent-alg)' stroke-width='1' opacity='0.4' stroke-dasharray='3,3'/>
  <line x1='75' y1='80' x2='25' y2='20' stroke='var(--color-accent-alg)' stroke-width='1' opacity='0.4' stroke-dasharray='3,3'/>
  <circle cx='50' cy='50' r='4' fill='#f97316'/>
</svg>`,
                        captionFr: "Symétrie centrale en O",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ─────────────────────────────────────────────
          // 6. TRAPÈZE
          // ─────────────────────────────────────────────
          {
            id: "trapeze",
            svg: `<svg viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><polygon points='6,48 54,48 44,12 16,12' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/></svg>`,
            tabs: [
              {
                label: "Angles",
                blocks: [
                  { type: "heading", fr: "Somme = 360°, angles de la même base supplémentaires", black: true },
                  { type: "plain", fr: "Un trapèze a 4 angles dont la somme est 360°. Les 2 angles situés sur la même base sont supplémentaires (leur somme vaut 180°)." },
                  {
                    type: "table",
                    headersFr: ["Type", "Particularité des angles"],
                    accentHeader: true,
                    rows: [
                      ["Quelconque", "Angles quelconques"],
                      ["Rectangle", "2 angles droits (90°)"],
                      ["Isocèle", "2 angles de base égaux de chaque côté"],
                    ],
                  },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='10,80 90,80 75,20 25,20' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M18,68 A14,14 0 0 1 24,80' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M76,80 A14,14 0 0 1 82,68' fill='none' stroke='#f97316' stroke-width='1.5'/>
</svg>`,
                        captionFr: "Angles de la même base : 180°",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='10,80 90,80 70,20 30,20' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M18,68 A14,14 0 0 1 24,80' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M76,80 A14,14 0 0 1 82,68' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
</svg>`,
                        captionFr: "Isocèle : angles de base égaux",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Droites",
                blocks: [
                  { type: "heading", fr: "1 paire de côtés parallèles", black: true },
                  { type: "plain", fr: "Le trapèze a exactement 1 paire de côtés parallèles : les deux bases (grande base et petite base). Les deux autres côtés (les jambes) ne sont pas parallèles." },
                  {
                    type: "table",
                    headersFr: ["Type", "Particularité des côtés"],
                    accentHeader: true,
                    rows: [
                      ["Quelconque", "1 paire parallèle, aucune perpendiculaire"],
                      ["Rectangle", "1 côté latéral ⊥ aux bases"],
                      ["Isocèle", "2 côtés latéraux égaux"],
                    ],
                  },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='10,80 90,80 75,20 25,20' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M46,77 L50,73 L54,77' fill='none' stroke='#0891b2' stroke-width='2'/>
  <path d='M46,23 L50,19 L54,23' fill='none' stroke='#0891b2' stroke-width='2'/>
</svg>`,
                        captionFr: "1 paire de côtés parallèles",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='20,80 85,80 85,20 40,20' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M72,80 L72,68 L85,68' fill='none' stroke='#f97316' stroke-width='2'/>
  <path d='M72,20 L72,32 L85,32' fill='none' stroke='#f97316' stroke-width='2'/>
</svg>`,
                        captionFr: "Trapèze rectangle",
                      },
                    ],
                  },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='10,80 90,80 70,20 30,20' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='15' y1='46' x2='23' y2='54' stroke='#f97316' stroke-width='2'/>
  <line x1='77' y1='46' x2='85' y2='54' stroke='#f97316' stroke-width='2'/>
</svg>`,
                        captionFr: "Trapèze isocèle",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='10,80 90,80 75,20 25,20' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
</svg>`,
                        captionFr: "Trapèze quelconque",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Symétrie",
                blocks: [
                  { type: "heading", fr: "Symétrie selon le type", black: true },
                  { type: "plain", fr: "Seul le trapèze isocèle possède un axe de symétrie : l'axe vertical médian. Les trapèzes quelconque et rectangle n'en ont aucun." },
                  { type: "rule", titleFr: "Axes de symétrie", itemsFr: ["Isocèle : 1 axe de symétrie", "Quelconque / Rectangle : 0 axe"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='10,80 90,80 70,20 30,20' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='50' y1='5' x2='50' y2='95' stroke='#16a34a' stroke-width='1.8' stroke-dasharray='4,3'/>
</svg>`,
                        captionFr: "Isocèle : 1 axe",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='10,80 90,80 75,20 25,20' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
</svg>`,
                        captionFr: "Quelconque : 0 axe",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ─────────────────────────────────────────────
          // 7. CERCLE
          // ─────────────────────────────────────────────
          {
            id: "cercle",
            svg: `<svg viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><circle cx='30' cy='30' r='24' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/></svg>`,
            tabs: [
              {
                label: "Angles",
                blocks: [
                  { type: "heading", fr: "Angle au centre — tour complet = 360°", black: true },
                  { type: "plain", fr: "Le cercle n'a pas de coins. Cependant, l'angle au centre mesure un secteur circulaire. Un tour complet autour du centre représente 360°." },
                  { type: "rule", titleFr: "Angles et secteurs", itemsFr: ["Tour complet = 360°", "Demi-cercle = 180°", "Quart de cercle = 90°"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <circle cx='50' cy='50' r='38' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M50,50 L50,12 A38,38 0 0 1 84,69 Z' fill='var(--color-accent-alg)' fill-opacity='0.25' stroke='none'/>
  <line x1='50' y1='50' x2='50' y2='12' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <line x1='50' y1='50' x2='84' y2='69' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M50,26 A24,24 0 0 1 70,63' fill='none' stroke='#f97316' stroke-width='2'/>
</svg>`,
                        captionFr: "Angle au centre",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <circle cx='50' cy='50' r='38' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <circle cx='50' cy='50' r='28' fill='none' stroke='#f97316' stroke-width='1.5' stroke-dasharray='5,3'/>
</svg>`,
                        captionFr: "Tour complet = 360°",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Droites",
                blocks: [
                  { type: "heading", fr: "Rayon, diamètre et corde", black: true },
                  { type: "plain", fr: "Le rayon r va du centre à n'importe quel point du cercle. Le diamètre d est le double du rayon : d = 2r. Une corde est un segment reliant deux points du cercle sans passer par le centre." },
                  { type: "rule", titleFr: "Éléments du cercle", itemsFr: ["Rayon r : du centre à la circonférence", "Diamètre d = 2r : corde passant par le centre", "Corde : segment entre 2 points du cercle"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <circle cx='50' cy='50' r='38' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='50' y1='50' x2='82' y2='29' stroke='#f97316' stroke-width='2.5'/>
  <circle cx='50' cy='50' r='3' fill='var(--color-accent-alg)'/>
</svg>`,
                        captionFr: "Rayon r",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <circle cx='50' cy='50' r='38' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='50' y1='12' x2='50' y2='88' stroke='#0891b2' stroke-width='2.5'/>
  <circle cx='50' cy='50' r='3' fill='var(--color-accent-alg)'/>
</svg>`,
                        captionFr: "Diamètre d = 2r",
                      },
                    ],
                  },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <circle cx='50' cy='50' r='38' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='18' y1='30' x2='82' y2='72' stroke='#16a34a' stroke-width='2.5'/>
</svg>`,
                        captionFr: "Corde",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <circle cx='50' cy='50' r='38' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='50' y1='12' x2='50' y2='88' stroke='#0891b2' stroke-width='1.5' opacity='0.7'/>
  <line x1='12' y1='50' x2='88' y2='50' stroke='#0891b2' stroke-width='1.5' opacity='0.7'/>
  <line x1='23' y1='23' x2='77' y2='77' stroke='#0891b2' stroke-width='1.5' opacity='0.7'/>
  <line x1='77' y1='23' x2='23' y2='77' stroke='#0891b2' stroke-width='1.5' opacity='0.7'/>
  <circle cx='50' cy='50' r='3' fill='var(--color-accent-alg)'/>
</svg>`,
                        captionFr: "Infinité de diamètres",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Symétrie",
                blocks: [
                  { type: "heading", fr: "Infinité d'axes de symétrie", black: true },
                  { type: "plain", fr: "Le cercle possède une infinité d'axes de symétrie. Chaque diamètre est un axe de symétrie. C'est la figure qui a le plus de symétries." },
                  { type: "rule", titleFr: "Axes de symétrie", itemsFr: ["Infinité d'axes\n(tout diamètre est un axe)"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <circle cx='50' cy='50' r='38' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='5' y1='50' x2='95' y2='50' stroke='#16a34a' stroke-width='1.8' stroke-dasharray='4,3'/>
  <line x1='50' y1='5' x2='50' y2='95' stroke='#16a34a' stroke-width='1.8' stroke-dasharray='4,3'/>
</svg>`,
                        captionFr: "2 axes principaux",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <circle cx='50' cy='50' r='38' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='5' y1='50' x2='95' y2='50' stroke='#16a34a' stroke-width='1.5' stroke-dasharray='4,3'/>
  <line x1='50' y1='5' x2='50' y2='95' stroke='#16a34a' stroke-width='1.5' stroke-dasharray='4,3'/>
  <line x1='15' y1='15' x2='85' y2='85' stroke='#16a34a' stroke-width='1.5' stroke-dasharray='4,3'/>
  <line x1='85' y1='15' x2='15' y2='85' stroke='#16a34a' stroke-width='1.5' stroke-dasharray='4,3'/>
</svg>`,
                        captionFr: "4 axes parmi l'infini",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ─────────────────────────────────────────────
          // 8. PENTAGONE
          // ─────────────────────────────────────────────
          {
            id: "pentagone",
            svg: `<svg viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><polygon points='30,6 54,24 46,52 14,52 6,24' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/></svg>`,
            tabs: [
              {
                label: "Angles",
                blocks: [
                  { type: "heading", fr: "5 angles — somme = 540°", black: true },
                  { type: "plain", fr: "Un pentagone a 5 angles. La somme de ses angles est (5−2)×180° = 540°. Dans un pentagone régulier, chaque angle mesure 108°." },
                  { type: "rule", titleFr: "Somme des angles", itemsFr: ["(5−2) × 180° = 540°", "Régulier : 5 × 108° = 540°"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,8 90,37 74,82 26,82 10,37' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M41,22 A13,13 0 0 1 59,22' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M14,41 A12,12 0 0 1 22,50' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M78,41 A12,12 0 0 0 86,50' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M20,76 A12,12 0 0 1 28,84' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
  <path d='M72,84 A12,12 0 0 1 80,76' fill='none' stroke='var(--color-accent-alg)' stroke-width='1.5' opacity='0.7'/>
</svg>`,
                        captionFr: "5 angles, somme 540°",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,8 90,37 74,82 26,82 10,37' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <path d='M40,24 A14,14 0 0 1 60,24' fill='none' stroke='#f97316' stroke-width='2'/>
</svg>`,
                        captionFr: "Régulier : 108° chacun",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Droites",
                blocks: [
                  { type: "heading", fr: "5 côtés", black: true },
                  { type: "plain", fr: "Un pentagone a 5 côtés. Dans un pentagone régulier, les 5 côtés sont égaux. Un pentagone quelconque peut avoir des côtés de longueurs différentes." },
                  { type: "rule", titleFr: "Côtés", itemsFr: ["Régulier : 5 côtés égaux", "Quelconque : côtés libres"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,8 90,37 74,82 26,82 10,37' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='66' y1='19' x2='74' y2='27' stroke='#f97316' stroke-width='2'/>
  <line x1='79' y1='58' x2='85' y2='65' stroke='#f97316' stroke-width='2'/>
  <line x1='47' y1='79' x2='53' y2='85' stroke='#f97316' stroke-width='2'/>
  <line x1='15' y1='58' x2='21' y2='65' stroke='#f97316' stroke-width='2'/>
  <line x1='26' y1='19' x2='34' y2='27' stroke='#f97316' stroke-width='2'/>
</svg>`,
                        captionFr: "Régulier : 5 côtés égaux",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,10 85,30 80,80 20,85 12,35' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
</svg>`,
                        captionFr: "Quelconque : côtés libres",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Symétrie",
                blocks: [
                  { type: "heading", fr: "Pentagone régulier : 5 axes de symétrie", black: true },
                  { type: "plain", fr: "Le pentagone régulier possède 5 axes de symétrie. Chaque axe passe par un sommet et le milieu du côté opposé. Un pentagone quelconque n'a aucun axe de symétrie." },
                  { type: "rule", titleFr: "Axes de symétrie", itemsFr: ["Régulier : 5 axes de symétrie"] },
                  {
                    type: "svg_row",
                    items: [
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,8 90,37 74,82 26,82 10,37' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='50' y1='3' x2='50' y2='97' stroke='#16a34a' stroke-width='1.8' stroke-dasharray='4,3'/>
</svg>`,
                        captionFr: "1 axe (sommet → milieu opposé)",
                      },
                      {
                        markup: `<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <polygon points='50,8 90,37 74,82 26,82 10,37' fill='var(--color-accent-alg)' fill-opacity='0.12' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='50' y1='3' x2='50' y2='97' stroke='#16a34a' stroke-width='1.5' stroke-dasharray='4,3'/>
  <line x1='90' y1='37' x2='23' y2='59' stroke='#16a34a' stroke-width='1.5' stroke-dasharray='4,3'/>
  <line x1='74' y1='82' x2='30' y2='22' stroke='#16a34a' stroke-width='1.5' stroke-dasharray='4,3'/>
  <line x1='26' y1='82' x2='70' y2='22' stroke='#16a34a' stroke-width='1.5' stroke-dasharray='4,3'/>
  <line x1='10' y1='37' x2='77' y2='59' stroke='#16a34a' stroke-width='1.5' stroke-dasharray='4,3'/>
</svg>`,
                        captionFr: "5 axes de symétrie",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
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

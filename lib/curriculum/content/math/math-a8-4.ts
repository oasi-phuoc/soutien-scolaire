import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A8_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A8-4",
    submoduleCode: "A8.4",
    theory: {
      title: {
        fr: "Racine carrée (carrés parfaits)",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Qu'est-ce que la racine carrée ?",
          black: true,
        },
        {
          type: "plain",
          fr: "La racine carrée d'un nombre est le nombre qui, multiplié par lui-même, donne ce nombre.",
        },
        {
          type: "plain",
          fr: "La racine carrée est l'opération inverse de la puissance 2.",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "(√a)² = a",
            "Notation : √a",
          ],
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "√9 = 3 car 3 × 3 = 9",
            "√25 = 5 car 5 × 5 = 25",
          ],
        },
        {
          type: "heading",
          fr: "Qu'est-ce qu'un carré parfait ?",
          black: true,
        },
        {
          type: "plain",
          fr: "Un carré parfait est un nombre obtenu en multipliant un nombre entier par lui-même.",
        },
        {
          type: "table",
          headersFr: ["N", "N²", "√(N²)"],
          accentHeader: true,
          rows: [
            ["1", "1", "1"],
            ["2", "4", "2"],
            ["3", "9", "3"],
            ["4", "16", "4"],
            ["5", "25", "5"],
            ["6", "36", "6"],
            ["7", "49", "7"],
            ["8", "64", "8"],
            ["9", "81", "9"],
            ["10", "100", "10"],
          ],
        },
        { type: "plain", fr: "" },
        {
          type: "heading",
          fr: "Propriété de la racine carrée",
          black: true,
        },
        {
          type: "plain",
          fr: "√(a × b) = √a × √b",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "√(4 × 9) = √4 × √9 = 2 × 3 = 6",
          ],
        },
        { type: "highlight", fr: "Astuce" },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Si le nombre sous la racine est un carré parfait, le résultat est un entier.",
            "Les racines carrées de nombres négatifs n'existent pas dans les nombres réels.",
          ],
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a8-4-ep01", promptFr: "√4 = ?", type: "number", acceptable: ["2"], hintFr: "√n est le nombre positif qui, multiplié par lui-même, donne n. Mémorise les carrés parfaits."},
      { id: "a8-4-ep02", promptFr: "√9 = ?", type: "number", acceptable: ["3"], hintFr: "√n est le nombre positif qui, multiplié par lui-même, donne n. Mémorise les carrés parfaits."},
      { id: "a8-4-ep03", promptFr: "√16 = ?", type: "number", acceptable: ["4"], hintFr: "√n est le nombre positif qui, multiplié par lui-même, donne n. Mémorise les carrés parfaits."},
      { id: "a8-4-ep04", promptFr: "√25 = ?", type: "number", acceptable: ["5"], hintFr: "√n est le nombre positif qui, multiplié par lui-même, donne n. Mémorise les carrés parfaits."},
      { id: "a8-4-ep05", promptFr: "√36 = ?", type: "number", acceptable: ["6"], hintFr: "√n est le nombre positif qui, multiplié par lui-même, donne n. Mémorise les carrés parfaits."},
      { id: "a8-4-ep06", promptFr: "√49 = ?", type: "number", acceptable: ["7"], hintFr: "√n est le nombre positif qui, multiplié par lui-même, donne n. Mémorise les carrés parfaits."},
      { id: "a8-4-ep07", promptFr: "√64 = ?", type: "number", acceptable: ["8"], hintFr: "√n est le nombre positif qui, multiplié par lui-même, donne n. Mémorise les carrés parfaits."},
      { id: "a8-4-ep08", promptFr: "√81 = ?", type: "number", acceptable: ["9"], hintFr: "√n est le nombre positif qui, multiplié par lui-même, donne n. Mémorise les carrés parfaits."},
      { id: "a8-4-ep09", promptFr: "√100 = ?", type: "number", acceptable: ["10"], hintFr: "√n est le nombre positif qui, multiplié par lui-même, donne n. Mémorise les carrés parfaits."},
      { id: "a8-4-ep10", promptFr: "√144 = ?", type: "number", acceptable: ["12"], hintFr: "√n est le nombre positif qui, multiplié par lui-même, donne n. Mémorise les carrés parfaits."},
    ],
    poolSize: 5,
  };

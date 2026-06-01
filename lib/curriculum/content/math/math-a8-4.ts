import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A8_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A8-4",
    submoduleCode: "A8.4",
    theory: {
      title: {
        fr: "Racine carrée (carrés parfaits)",
        en: "Square root (perfect squares)",
        ar: "الجذر التربيعي (مربعات تامة)",
        fa: "جذر مربع (مربعات کامل)",
        ti: "ስርወ-ካሬ (ፍጹም ካሬታት)",
        uk: "Квадратний корінь (точні квадрати)",
      },
      blocks: [
        {
          type: "heading",
          fr: "Qu'est-ce que la racine carrée ?",
          black: true,
        },
        {
          type: "plain",
          fr: "La racine carrée est l'opération inverse de la puissance 2. √a est le nombre positif tel que (√a)² = a.",
        },
        {
          type: "rule",
          titleFr: "Question clé",
          itemsFr: [
            "Quel nombre, multiplié par lui-même, donne ce résultat ?",
            "√9 = 3  car  3 × 3 = 9",
            "√25 = 5  car  5 × 5 = 25",
          ],
        },
        {
          type: "heading",
          fr: "Carrés parfaits à connaître",
          black: true,
        },
        {
          type: "table",
          headersFr: ["n", "n²", "√(n²)"],
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
        {
          type: "heading",
          fr: "Propriété de la racine carrée",
          black: true,
        },
        {
          type: "rule",
          titleFr: "Propriété",
          itemsFr: [
            "√(a × b) = √a × √b",
          ],
        },
        {
          type: "example",
          fr: "√36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6",
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a8-4-ep01", promptFr: "√4 = ?", type: "number", acceptable: ["2"] },
      { id: "a8-4-ep02", promptFr: "√9 = ?", type: "number", acceptable: ["3"] },
      { id: "a8-4-ep03", promptFr: "√16 = ?", type: "number", acceptable: ["4"] },
      { id: "a8-4-ep04", promptFr: "√25 = ?", type: "number", acceptable: ["5"] },
      { id: "a8-4-ep05", promptFr: "√36 = ?", type: "number", acceptable: ["6"] },
      { id: "a8-4-ep06", promptFr: "√49 = ?", type: "number", acceptable: ["7"] },
      { id: "a8-4-ep07", promptFr: "√64 = ?", type: "number", acceptable: ["8"] },
      { id: "a8-4-ep08", promptFr: "√81 = ?", type: "number", acceptable: ["9"] },
      { id: "a8-4-ep09", promptFr: "√100 = ?", type: "number", acceptable: ["10"] },
      { id: "a8-4-ep10", promptFr: "√144 = ?", type: "number", acceptable: ["12"] },
    ],
    poolSize: 5,
  };

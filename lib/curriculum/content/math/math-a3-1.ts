import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A3_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A3-1",
    submoduleCode: "A3.1",
    theory: {
      title: {
        fr: "Tables de multiplications",
      },
      paragraphs: {
        fr: [ "Voici les tables de multiplications de 0 à 12." ],
      },
      blocks: [
        { type: "mult_table" },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a3-1-ep01", promptFr: "7 × 8 = ?", type: "number", acceptable: ["56"] },
      { id: "a3-1-ep02", promptFr: "9 × 6 = ?", type: "number", acceptable: ["54"] },
      { id: "a3-1-ep03", promptFr: "12 × 11 = ?", type: "number", acceptable: ["132"] },
      { id: "a3-1-ep04", promptFr: "6 × 9 = ?", type: "number", acceptable: ["54"] },
      { id: "a3-1-ep05", promptFr: "8 × 8 = ?", type: "number", acceptable: ["64"] },
      { id: "a3-1-ep06", promptFr: "7 × 7 = ?", type: "number", acceptable: ["49"] },
      { id: "a3-1-ep07", promptFr: "12 × 12 = ?", type: "number", acceptable: ["144"] },
      { id: "a3-1-ep08", promptFr: "9 × 9 = ?", type: "number", acceptable: ["81"] },
      { id: "a3-1-ep09", promptFr: "11 × 8 = ?", type: "number", acceptable: ["88"] },
      { id: "a3-1-ep10", promptFr: "6 × 12 = ?", type: "number", acceptable: ["72"] },
      { id: "a3-1-ep11", promptFr: "7 × 9 = ?", type: "number", acceptable: ["63"] },
      { id: "a3-1-ep12", promptFr: "4 × 11 = ?", type: "number", acceptable: ["44"] },
      { id: "a3-1-ep13", promptFr: "8 × 12 = ?", type: "number", acceptable: ["96"] },
      { id: "a3-1-ep14", promptFr: "5 × 7 = ?", type: "number", acceptable: ["35"] },
      { id: "a3-1-ep15", promptFr: "3 × 9 = ?", type: "number", acceptable: ["27"] },
    ],
    poolSize: 5,
  };

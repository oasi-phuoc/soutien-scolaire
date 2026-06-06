import type { MathSubmoduleLesson } from "./math-a1-types";

const emptyTitle = (fr: string) => ({ fr });

function revStub(submoduleId: string, submoduleCode: string, titleFr: string, exerciseFr: string, answer: string): MathSubmoduleLesson {
  return {
    submoduleId,
    submoduleCode,
    theory: {
      title: emptyTitle(titleFr),
      blocks: [
        { type: "plain", fr: "Ce module de révision sera bientôt disponible." },
      ],
      paragraphs: { fr: [] },
    },
    exercises: [
      { id: `${submoduleId}-e1`, promptFr: exerciseFr, type: "number", acceptable: [answer] },
    ],
    exercisePool: [],
    poolSize: 1,
  };
}

// ── Révisions algèbre (RA.1 – RA.13) ─────────────────────────────────────────
export const MATH_RA_1_LESSON  = revStub("RA-1",  "RA.1",  "Révision A1",  "Combien font 3 + 5 ?",          "8");
export const MATH_RA_2_LESSON  = revStub("RA-2",  "RA.2",  "Révision A2",  "Combien font 47 + 38 ?",        "85");
export const MATH_RA_3_LESSON  = revStub("RA-3",  "RA.3",  "Révision A3",  "Combien font 6 × 7 ?",          "42");
export const MATH_RA_4_LESSON  = revStub("RA-4",  "RA.4",  "Révision A4",  "Combien font 1/2 + 1/4 ? (écris 3/4)", "3/4");
export const MATH_RA_5_LESSON  = revStub("RA-5",  "RA.5",  "Révision A5",  "Écris 0,5 + 0,25 =",            "0.75");
export const MATH_RA_6_LESSON  = revStub("RA-6",  "RA.6",  "Révision A6",  "Combien font 12 % de 200 ?",    "24");
export const MATH_RA_7_LESSON  = revStub("RA-7",  "RA.7",  "Révision A7",  "Combien font 3² ?",              "9");
export const MATH_RA_8_LESSON  = revStub("RA-8",  "RA.8",  "Révision A8",  "Résous : 2x = 10 → x =",        "5");
export const MATH_RA_9_LESSON  = revStub("RA-9",  "RA.9",  "Révision A9",  "Combien font 15 % de 80 ?",     "12");
export const MATH_RA_10_LESSON = revStub("RA-10", "RA.10", "Révision A10", "Combien font √25 ?",             "5");
export const MATH_RA_11_LESSON = revStub("RA-11", "RA.11", "Révision A11", "Calcule 2³ × 2² =",             "32");
export const MATH_RA_12_LESSON = revStub("RA-12", "RA.12", "Révision A12", "Combien font log₁₀(1000) ?",    "3");
export const MATH_RA_13_LESSON = revStub("RA-13", "RA.13", "Révision A13", "Résous : x + 3 = 7 → x =",     "4");

// ── Révisions géométrie (RG.1 – RG.10) ───────────────────────────────────────
export const MATH_RG_1_LESSON  = revStub("RG-1",  "RG.1",  "Révision G1",  "Un carré a combien de côtés ?",         "4");
export const MATH_RG_2_LESSON  = revStub("RG-2",  "RG.2",  "Révision G2",  "Combien de degrés dans un angle droit ?", "90");
export const MATH_RG_3_LESSON  = revStub("RG-3",  "RG.3",  "Révision G3",  "Périmètre d'un carré de côté 5 ?",      "20");
export const MATH_RG_4_LESSON  = revStub("RG-4",  "RG.4",  "Révision G4",  "Aire d'un carré de côté 4 ?",           "16");
export const MATH_RG_5_LESSON  = revStub("RG-5",  "RG.5",  "Révision G5",  "Dans un triangle rectangle, a²+b²= ?", "c2");
export const MATH_RG_6_LESSON  = revStub("RG-6",  "RG.6",  "Révision G6",  "Combien de degrés dans un triangle ?",  "180");
export const MATH_RG_7_LESSON  = revStub("RG-7",  "RG.7",  "Révision G7",  "Combien de faces a un cube ?",          "6");
export const MATH_RG_8_LESSON  = revStub("RG-8",  "RG.8",  "Révision G8",  "Volume d'un cube de côté 3 ?",          "27");
export const MATH_RG_9_LESSON  = revStub("RG-9",  "RG.9",  "Révision G9",  "Un graphique en bâtons montre quoi ?",  "données");
export const MATH_RG_10_LESSON = revStub("RG-10", "RG.10", "Révision G10", "sin(90°) = ?",                          "1");

export const MATH_RA_LESSONS: MathSubmoduleLesson[] = [
  MATH_RA_1_LESSON,  MATH_RA_2_LESSON,  MATH_RA_3_LESSON,  MATH_RA_4_LESSON,
  MATH_RA_5_LESSON,  MATH_RA_6_LESSON,  MATH_RA_7_LESSON,  MATH_RA_8_LESSON,
  MATH_RA_9_LESSON,  MATH_RA_10_LESSON, MATH_RA_11_LESSON, MATH_RA_12_LESSON,
  MATH_RA_13_LESSON,
];

export const MATH_RG_LESSONS: MathSubmoduleLesson[] = [
  MATH_RG_1_LESSON,  MATH_RG_2_LESSON,  MATH_RG_3_LESSON,  MATH_RG_4_LESSON,
  MATH_RG_5_LESSON,  MATH_RG_6_LESSON,  MATH_RG_7_LESSON,  MATH_RG_8_LESSON,
  MATH_RG_9_LESSON,  MATH_RG_10_LESSON,
];

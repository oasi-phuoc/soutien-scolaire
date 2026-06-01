import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A11_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A11-1",
    submoduleCode: "A11.1",
    theory: {
      title: {
        fr: "Symboles et droite numérique",
        en: "Symbols and number line",
        ar: "الرموز والمحور العددي",
        fa: "نمادها و محور اعداد",
        ti: "ምልክታትን ቁጽሪ ሕርምን",
        uk: "Символи та числова пряма",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Qu'est-ce qu'une inéquation ?",
          black: true,
        },
        {
          type: "plain",
          fr: "Une inéquation est une inégalité contenant une inconnue. Sa solution est un ensemble de nombres (un intervalle), et non une valeur unique.",
        },
        {
          type: "heading",
          fr: "Les quatre symboles d'inégalité",
          black: true,
        },
        {
          type: "table",
          headersFr: ["Symbole", "Se lit", "Exemple", "Signification"],
          accentHeader: true,
          rows: [
            ["<", "strictement inférieur à", "x < 3", "x est plus petit que 3"],
            [">", "strictement supérieur à", "x > 5", "x est plus grand que 5"],
            ["≤", "inférieur ou égal à", "x ≤ 4", "x est au plus 4"],
            ["≥", "supérieur ou égal à", "x ≥ 2", "x est au moins 2"],
          ],
        },
        {
          type: "heading",
          fr: "Représentation sur la droite numérique",
          black: true,
        },
        {
          type: "rule",
          titleFr: "Conventions graphiques",
          itemsFr: [
            "Cercle **plein** ● pour ≤ ou ≥ → la valeur est **incluse** dans la solution",
            "Cercle **vide** ○ pour < ou > → la valeur est **exclue** de la solution",
            "Flèche vers la droite → solutions plus grandes",
            "Flèche vers la gauche → solutions plus petites",
          ],
        },
        {
          type: "table",
          headersFr: ["Inéquation", "Cercle en x₀", "Direction de la flèche"],
          accentHeader: true,
          rows: [
            ["x > 3", "○ vide en 3", "→ vers la droite"],
            ["x ≥ 3", "● plein en 3", "→ vers la droite"],
            ["x < 5", "○ vide en 5", "← vers la gauche"],
            ["x ≤ 5", "● plein en 5", "← vers la gauche"],
          ],
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a11-1-ep01", promptFr: "3 □ 7 : quel symbole ? (< ou >)", type: "short_text", acceptable: ["<"] },
      { id: "a11-1-ep02", promptFr: "−5 □ 2 : quel symbole ? (< ou >)", type: "short_text", acceptable: ["<"] },
      { id: "a11-1-ep03", promptFr: "8 □ 3 : quel symbole ? (< ou >)", type: "short_text", acceptable: [">"] },
      { id: "a11-1-ep04", promptFr: "−4 □ −7 : quel symbole ? (< ou >)", type: "short_text", acceptable: [">"] },
      { id: "a11-1-ep05", promptFr: "0 □ −1 : quel symbole ? (< ou >)", type: "short_text", acceptable: [">"] },
      { id: "a11-1-ep06", promptFr: "−3 □ 0 : quel symbole ? (< ou >)", type: "short_text", acceptable: ["<"] },
      { id: "a11-1-ep07", promptFr: "5 □ 5 : quel symbole ? (< = ou >)", type: "short_text", acceptable: ["="] },
      { id: "a11-1-ep08", promptFr: "10 □ 7 : quel symbole ? (< ou >)", type: "short_text", acceptable: [">"] },
      { id: "a11-1-ep09", promptFr: "−8 □ −5 : quel symbole ? (< ou >)", type: "short_text", acceptable: ["<"] },
      { id: "a11-1-ep10", promptFr: "−2 □ −2 : quel symbole ? (< = ou >)", type: "short_text", acceptable: ["="] },
    ],
    poolSize: 5,
  };

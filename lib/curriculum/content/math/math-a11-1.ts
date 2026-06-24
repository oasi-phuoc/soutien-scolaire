import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A11_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A11-1",
    submoduleCode: "A11.1",
    theory: {
      title: {
        fr: "",
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
    { id: "a11-1-ep01", promptFr: "5 □ 9 : quel symbole (< ou >) ?", type: "short_text", acceptable: ["<"], hintFr: "5 est plus petit que 9." },
    { id: "a11-1-ep02", promptFr: "−3 □ 4 : quel symbole (< ou >) ?", type: "short_text", acceptable: ["<"], hintFr: "Tout négatif est plus petit que tout positif." },
    { id: "a11-1-ep03", promptFr: "12 □ 7 : quel symbole (< ou >) ?", type: "short_text", acceptable: [">"], hintFr: "12 est plus grand que 7." },
    { id: "a11-1-ep04", promptFr: "−6 □ −2 : quel symbole (< ou >) ?", type: "short_text", acceptable: ["<"], hintFr: "−6 est plus à gauche sur la droite numérique que −2." },
    { id: "a11-1-ep05", promptFr: "0 □ −4 : quel symbole (< ou >) ?", type: "short_text", acceptable: [">"], hintFr: "0 est plus grand que tout nombre négatif." },
    { id: "a11-1-ep06", promptFr: "−7 □ −7 : quel symbole (< = ou >) ?", type: "short_text", acceptable: ["="], hintFr: "Les deux nombres sont identiques." },
    { id: "a11-1-ep07", promptFr: "−1 □ 0 : quel symbole (< ou >) ?", type: "short_text", acceptable: ["<"], hintFr: "−1 est à gauche de 0 sur la droite numérique." },
    { id: "a11-1-ep08", promptFr: "15 □ 20 : quel symbole (< ou >) ?", type: "short_text", acceptable: ["<"], hintFr: "15 est plus petit que 20." },
    { id: "a11-1-ep09", promptFr: "−10 □ −3 : quel symbole (< ou >) ?", type: "short_text", acceptable: ["<"], hintFr: "−10 est plus à gauche que −3 : −10 < −3." },
    { id: "a11-1-ep10", promptFr: "8 □ 8 : quel symbole (< = ou >) ?", type: "short_text", acceptable: ["="], hintFr: "Les deux valeurs sont égales." },
    { id: "a11-1-ep11", promptFr: "100 □ 99 : quel symbole (< ou >) ?", type: "short_text", acceptable: [">"], hintFr: "100 est plus grand que 99." },
    { id: "a11-1-ep12", promptFr: "−5 □ 5 : quel symbole (< ou >) ?", type: "short_text", acceptable: ["<"], hintFr: "Tout négatif est plus petit que tout positif." },
  ],
  poolSize: 5,
};

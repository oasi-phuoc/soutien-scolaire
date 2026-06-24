import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_1_LESSON: MathSubmoduleLesson = {
  submoduleId: "A10-1",
  submoduleCode: "A10.1",
  theory: {
    title: { fr: "Résolution d'équations" },
    paragraphs: { fr: [] },
    blocks: [
      { type: "heading", fr: "Qu'est-ce qu'une équation ?", black: true },
      {
        type: "plain",
        fr: "Une **équation** est une égalité qui contient une valeur inconnue, souvent représentée par la lettre **x**. Résoudre l'équation signifie trouver la valeur de x qui rend l'égalité vraie.",
      },
      { type: "example", fr: "2x + 3 = 11\nLa solution est x = 4, car 2 × 4 + 3 = 11." },
      { type: "highlight", fr: "Le principe de la balance" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Les deux membres d'une équation doivent toujours rester égaux.",
          "On effectue donc **la même opération des deux côtés**.",
          "On peut additionner, soustraire, multiplier ou diviser par un même nombre, sauf diviser par 0.",
        ],
      },
      { type: "heading", fr: "Méthode générale", black: true },
      {
        type: "rule",
        titleFr: "Résoudre dans le bon ordre",
        itemsFr: [
          "**1.** Développer les parenthèses s'il y en a.",
          "**2.** Réduire les termes semblables.",
          "**3.** Regrouper les termes en x d'un côté et les nombres de l'autre.",
          "**4.** Diviser par le coefficient de x pour isoler x.",
          "**5.** Vérifier la solution dans l'équation de départ.",
        ],
      },
      { type: "heading", fr: "1. Équation simple : x + b = c", black: true },
      {
        type: "section",
        labelFr: "Exemple : x + 7 = 12",
        itemsFr: [
          "On enlève 7 des deux côtés.",
          "x + 7 **− 7** = 12 **− 7**",
          "x = 5",
          "Vérification : 5 + 7 = 12 ✓",
        ],
      },
      { type: "heading", fr: "2. Équation de la forme ax = b", black: true },
      {
        type: "section",
        labelFr: "Exemple : 3x = 15",
        itemsFr: [
          "3x signifie 3 × x.",
          "On divise les deux côtés par 3.",
          "x = 15 ÷ 3 = 5",
          "Vérification : 3 × 5 = 15 ✓",
        ],
      },
      { type: "heading", fr: "3. Équation de la forme ax + b = c", black: true },
      {
        type: "section",
        labelFr: "Exemple : 2x + 5 = 13",
        itemsFr: [
          "On enlève d'abord 5 : 2x = 13 − 5 = 8.",
          "On divise ensuite par 2 : x = 8 ÷ 2 = 4.",
          "Vérification : 2 × 4 + 5 = 13 ✓",
        ],
      },
      { type: "heading", fr: "4. x apparaît des deux côtés", black: true },
      {
        type: "section",
        labelFr: "Exemple : 3x + 2 = x + 10",
        itemsFr: [
          "On regroupe les x : 3x − x = 10 − 2.",
          "2x = 8",
          "x = 4",
          "Vérification : 3 × 4 + 2 = 4 + 10 = 14 ✓",
        ],
      },
      { type: "heading", fr: "5. Équations avec parenthèses", black: true },
      {
        type: "plain",
        fr: "On commence par développer les parenthèses, puis on résout l'équation obtenue avec la méthode habituelle.",
      },
      {
        type: "section",
        labelFr: "Exemple : 3(2x + 1) = 21",
        itemsFr: [
          "On développe : 6x + 3 = 21.",
          "On enlève 3 : 6x = 18.",
          "On divise par 6 : x = 3.",
        ],
      },
      {
        type: "note",
        fr: "Attention : un signe − placé devant une parenthèse change tous les signes à l'intérieur. Par exemple, −(x − 5) = −x + 5.",
      },
      {
        type: "note",
        fr: "La vérification se fait toujours dans l'équation de départ. Elle permet de repérer rapidement une erreur de signe ou de calcul.",
      },
    ],
  },
  exercises: [],
  exercisePool: [],
  poolSize: 5,
};

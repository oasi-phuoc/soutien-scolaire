import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-3",
    submoduleCode: "A10.3",
    theory: {
      title: {
        fr: "Résolution : ax + b = c",
        en: "Solving: ax + b = c",
        ar: "الحل: ax + b = c",
        fa: "حل: ax + b = c",
        ti: "ምፍታሕ: ax + b = c",
        uk: "Розв'язання: ax + b = c",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Méthode en deux étapes",
          black: true,
        },
        {
          type: "rule",
          titleFr: "Étapes de résolution",
          itemsFr: [
            "1. Isoler le terme en x : soustraire ou additionner b des deux membres",
            "2. Diviser les deux membres par le coefficient a",
            "3. Vérifier la solution dans l'équation originale",
          ],
        },
        {
          type: "highlight",
          fr: "Exemple standard",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "2x **+** 5 = 13",
            "→ 2x = 13 **−** 5 = 8",
            "→ x = 8 ÷ 2 = 4",
            "Vérification : 2(4) **+** 5 = 13 ✓",
          ],
        },
        {
          type: "heading",
          fr: "Termes en x des deux côtés",
          black: true,
        },
        {
          type: "plain",
          fr: "Quand des termes en x apparaissent des deux côtés de l'équation, on les regroupe d'un côté avant de résoudre.",
        },
        {
          type: "highlight",
          fr: "Exemple avec x des deux côtés",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "3x **+** 2 = x **+** 10",
            "→ 3x **−** x = 10 **−** 2",
            "→ 2x = 8",
            "→ x = 4",
            "Vérification : 3(4) **+** 2 = 14 et (4) **+** 10 = 14 ✓",
          ],
        },
        {
          type: "note",
          fr: "Toujours vérifier en substituant la valeur trouvée dans l'équation originale (pas dans une étape intermédiaire).",
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a10-3-ep01", promptFr: "Résous 2x + 5 = 13. x = ?", type: "number", acceptable: ["4"], hintFr: "Étapes : soustrais le terme constant des deux côtés, puis divise par le coefficient de x."},
      { id: "a10-3-ep02", promptFr: "Résous 3x − 4 = 11. x = ?", type: "number", acceptable: ["5"], hintFr: "Étapes : soustrais le terme constant des deux côtés, puis divise par le coefficient de x."},
      { id: "a10-3-ep03", promptFr: "Résous 5x + 3 = 23. x = ?", type: "number", acceptable: ["4"], hintFr: "Étapes : soustrais le terme constant des deux côtés, puis divise par le coefficient de x."},
      { id: "a10-3-ep04", promptFr: "Résous 4x − 7 = 13. x = ?", type: "number", acceptable: ["5"], hintFr: "Étapes : soustrais le terme constant des deux côtés, puis divise par le coefficient de x."},
      { id: "a10-3-ep05", promptFr: "Résous 2x + 9 = 1. x = ?", type: "number", acceptable: ["-4"], hintFr: "Étapes : soustrais le terme constant des deux côtés, puis divise par le coefficient de x."},
      { id: "a10-3-ep06", promptFr: "Résous 3x + 2 = x + 10. x = ?", type: "number", acceptable: ["4"], hintFr: "Étapes : soustrais le terme constant des deux côtés, puis divise par le coefficient de x."},
      { id: "a10-3-ep07", promptFr: "Résous 6x − 3 = 3x + 9. x = ?", type: "number", acceptable: ["4"], hintFr: "Étapes : soustrais le terme constant des deux côtés, puis divise par le coefficient de x."},
      { id: "a10-3-ep08", promptFr: "Résous 5x + 1 = 2x + 10. x = ?", type: "number", acceptable: ["3"], hintFr: "Étapes : soustrais le terme constant des deux côtés, puis divise par le coefficient de x."},
      { id: "a10-3-ep09", promptFr: "Résous 7x − 5 = 2x + 20. x = ?", type: "number", acceptable: ["5"], hintFr: "Étapes : soustrais le terme constant des deux côtés, puis divise par le coefficient de x."},
      { id: "a10-3-ep10", promptFr: "Résous 4x + 3 = 2x + 11. x = ?", type: "number", acceptable: ["4"], hintFr: "Étapes : soustrais le terme constant des deux côtés, puis divise par le coefficient de x."},
    ],
    poolSize: 5,
  };

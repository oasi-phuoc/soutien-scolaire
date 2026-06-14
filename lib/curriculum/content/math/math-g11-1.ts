import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G11_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "G11-1",
    submoduleCode: "G11.1",
    theory: {
      title: {
        fr: "Rappel Pythagore",
      },
      paragraphs: {
        fr: [
          "Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux cathètes : c² = a² + b².",
          "L'hypoténuse est le côté opposé à l'angle droit — c'est toujours le plus long des trois côtés.",
          "Triplets pythagoriciens courants : (3, 4, 5), (5, 12, 13), (8, 15, 17). Si tu reconnais un tel triplet, tu n'as pas besoin de calculer.",
          "La trigonométrie part de ce même triangle rectangle. Avant de l'utiliser, identifie toujours l'angle droit et nomme les trois côtés.",
        ],
      },
    },
    exercises: [
      {
        id: "g10-1-e1",
        promptFr: "Dans un triangle rectangle, les deux cathètes mesurent 6 et 8. Quelle est la longueur de l'hypoténuse ?",
        type: "number",
        acceptable: ["10"],
      },
      {
        id: "g10-1-e2",
        promptFr: "L'hypoténuse d'un triangle rectangle mesure 13 et une cathète mesure 5. Quelle est l'autre cathète ?",
        type: "number",
        acceptable: ["12"],
      },
      {
        id: "g10-1-e3",
        promptFr: "Un triangle a des côtés 7, 24 et 25. Est-il rectangle ? Réponds par oui ou non.",
        type: "short_text",
        acceptable: ["oui", "Oui", "OUI"],
      },
      {
        id: "g10-1-e4",
        promptFr: "Quel est le nom du côté opposé à l'angle droit dans un triangle rectangle ?",
        type: "short_text",
        acceptable: ["hypoténuse", "hypotenuse", "l'hypoténuse"],
      },
      {
        id: "g10-1-e5",
        promptFr: "Calcule c si a = 9 et b = 12 (triangle rectangle). Donne la valeur exacte de c.",
        type: "number",
        acceptable: ["15"],
      },
    ],
  };

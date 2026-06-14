import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G11_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "G11-6",
    submoduleCode: "G11.6",
    theory: {
      title: {
        fr: "Applications de la trigonométrie",
      },
      paragraphs: {
        fr: [
          "La trigonométrie permet de résoudre des problèmes réels : mesurer la hauteur d'un bâtiment sans y monter, calculer une distance inaccessible, déterminer un angle d'inclinaison.",
          "Angle d'élévation : angle mesuré depuis l'horizontale vers le haut en direction d'un objet. Angle de dépression : angle mesuré depuis l'horizontale vers le bas.",
          "Exemple — hauteur d'un arbre : si tu te trouves à 20 m de la base et que l'angle d'élévation vers le sommet est 35°, alors hauteur = 20 × tan(35°) ≈ 14 m.",
          "Stratégie générale : 1) Dessine un croquis. 2) Identifie le triangle rectangle. 3) Nomme les côtés et l'angle connu. 4) Choisis sin, cos ou tan. 5) Résous.",
          "Les applications classiques incluent : hauteur de bâtiment / tour, largeur d'une rivière, longueur d'une rampe ou d'un câble, navigation.",
        ],
      },
    },
    exercises: [
      {
        id: "g10-6-e1",
        promptFr: "Tu te trouves à 30 m de la base d'un arbre. L'angle d'élévation vers son sommet est 45°. Quelle est la hauteur de l'arbre ? (tan 45° = 1)",
        type: "number",
        acceptable: ["30"],
      },
      {
        id: "g10-6-e2",
        promptFr: "Une rampe monte d'une hauteur de 5 m sur une longueur horizontale de 12 m. Quel rapport trigonométrique te donne directement tan(α) ?",
        type: "short_text",
        acceptable: ["5/12", "opposé/adjacent", "hauteur/base"],
      },
      {
        id: "g10-6-e3",
        promptFr: "Un câble de 20 m fait un angle de 60° avec le sol horizontal. À quelle hauteur est fixé le câble au poteau ? (sin 60° ≈ 0,866)",
        type: "short_text",
        acceptable: ["17,32", "17.32", "17,3", "17.3"],
      },
      {
        id: "g10-6-e4",
        promptFr: "Depuis le sommet d'une falaise de 50 m, l'angle de dépression vers un bateau est 30°. Quelle est la distance horizontale du bateau à la base de la falaise ? (tan 30° ≈ 0,577)",
        type: "short_text",
        acceptable: ["86,6", "86.6", "87", "86,7", "86.7"],
      },
      {
        id: "g10-6-e5",
        promptFr: "Une pente de ski est longue de 500 m et fait un angle de 20° avec l'horizontale. Quelle est la hauteur verticale de la pente ? (sin 20° ≈ 0,342)",
        type: "short_text",
        acceptable: ["171", "171,0", "171.0"],
      },
    ],
  };

import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A3_5: SubmoduleTrad = {
  submoduleId: "A3-5",
  title: {
    fr: "Les multiples",
  },
  blocks: [
    {
      text: {
        fr: "Un nombre est un multiple d'un autre nombre lorsqu'on peut l'obtenir en le multipliant par un nombre entier.",
      }
    },
    {
      text: {
        fr: "12 est un multiple de 4 car : ",
      }
    },
    {
      items: {
        fr: [
          "**4** × 3 = 12",
        ],
      }
    },
    {
      text: {
        fr: "Les diviseurs",
      }
    },
    {
      text: {
        fr: "Un nombre est un diviseur d'un autre nombre si la division donne un résultat entier, sans reste.",
      }
    },
    {
      text: {
        fr: "4 est un diviseur de 12 car : ",
      }
    },
    {
      items: {
        fr: [
          "12 ÷ **4** = 3",
        ],
      }
    },
    {
      text: {
        fr: "Relations",
      }
    },
    {
      text: {
        fr: "Si 12 = 3 × 4 alors : ",
      }
    },
    {
      items: {
        fr: [
          "12 est un multiple de 3 et de 4.",
          "3 et 4 sont des diviseurs de 12."
        ],
      }
    },
    {
      text: {
        fr: "Critères de divisibilité",
      }
    },
    {
      text: {
        fr: "Les critères de divisibilité permettent de savoir rapidement si un nombre est divisible par un autre, sans poser la division.",
      }
    },
    {
      headers: {
        fr: ["", "Critère"],
      }
    },
  ],
};

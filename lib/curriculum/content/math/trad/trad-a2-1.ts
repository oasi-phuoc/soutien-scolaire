import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A2_1: SubmoduleTrad = {
  submoduleId: "A2-1",
  title: {
    fr: "Addition",
    en: "Addition",
    ar: "الجمع",
    fa: "جمع",
    pt: "Adição",
    ti: "ድምር",
    uk: "Додавання",
  },
  blocks: [
    {
      text: {
        fr: "L'addition permet de **réunir** plusieurs quantités **ensemble**.",
      }
    },
    {
      items: {
        fr: [
          "Le signe de l'addition est le signe « + » **plus**",
          "Les nombres à additionner sont les **termes**.",
          "Le résultat de l'addition est la **somme**.",
        ],
      }
    },
    {
      headers: {
        fr: ["5", "+", "8", "=", "13"],
      }
    },
    {
      text: {
        fr: "Propriétés de l'addition",
      }
    },
    {
      text: {
        fr: "Commutativité",
      }
    },
    {
      items: {
        fr: ["L'ordre des termes ne change pas la somme."],
      }
    },
    {},
    {
      text: {
        fr: "Associativité",
      }
    },
    {
      items: {
        fr: ["On peut additionner plus de deux termes dans l'ordre voulu."],
      }
    },
    {},
    {
      text: {
        fr: "Addition en colonnes",
      }
    },
    {},
  ],
};

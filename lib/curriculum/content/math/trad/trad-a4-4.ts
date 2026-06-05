import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A4_4: SubmoduleTrad = {
  submoduleId: "A4-4",
  title: {
    fr: "Addition et soustraction de fractions",
    en: "Addition and subtraction",
    ar: "الجمع والطرح",
    fa: "جمع و تفریق",
    ti: "መደመር እና መቀነስ",
    uk: "Додавання та віднімання",
  },
  blocks: [
    {
      text: {
        fr: "Additionner ou soustraire des fractions consiste à calculer leur somme ou leur différence.",
      }
    },
    {
      text: {
        fr: "Même dénominateur",
      }
    },
    {
      text: {
        fr: "Pour additionner ou soustraire des fractions qui ont le même dénominateur",
      }
    },
    {
      items: {
        fr: [
          "On additionne ou soustrait les numérateurs.",
          "Et on garde le même dénominateur.",
        ],
      }
    },
    {
      text: {
        fr: "Exemple",
      }
    },
    {
      text: {
        fr: "[[frac:2/7]] + [[frac:3/7]] = [[frac:5/7]].",
      }
    },
    {
      text: {
        fr: "[[frac:6/11]] - [[frac:4/11]] = [[frac:2/11]].",
      }
    },
    {
      text: {
        fr: "Dénominateur différent",
      }
    },
    {
      text: {
        fr: "Pour additionner ou soustraire des fractions qui ont des dénominateurs différents",
      }
    },
    {
      items: {
        fr: [
          "On met les fractions au même dénominateur (PPMC).",
          "On multiplie le numérateur et le dénominateur de chaque fraction par le dénominateur de l’autre fraction.",
          "On additionne ou soustrait les numérateurs.",
          "On simplifie la fraction si possible.",
        ],
      }
    },
    {
      text: {
        fr: "Exemple d'addition",
      }
    },
    {
      text: {
        fr: "[[frac:9/3]] + [[frac:6/4]]",
      }
    },
    {
      items: {
        fr: [
          "On met au même dénominateur : [[frac:9/3]] = [[frac:36/12]] et [[frac:6/4]] = [[frac:18/12]]",
          "On additionne les numérateurs : [[frac:36/12]] + [[frac:18/12]] = [[frac:54/12]]",
          "On simplifie la fraction : [[frac:54/12]] = [[frac:9/2]].",
        ],
      }
    },
    {
      text: {
        fr: "Exemple de soustraction",
      }
    },
    {
      text: {
        fr: "[[frac:7/3]] - [[frac:5/6]]",
      }
    },
    {
      items: {
        fr: [
            "On met au même dénominateur : [[frac:7/3]] = [[frac:14/6]] et [[frac:5/6]] = [[frac:5/6]]",
            "On soustrait les numérateurs : [[frac:14/6]] - [[frac:5/6]] = [[frac:9/6]]",
            "On simplifie la fraction : [[frac:9/6]] = [[frac:3/2]].",
          ],
      }
    },
  ],
};

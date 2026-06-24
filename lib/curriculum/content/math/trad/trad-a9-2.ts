import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A9_2: SubmoduleTrad = {
  submoduleId: "A9-2",
  title: {
    fr: "Variable et inconnue",
    en: "Variable and unknown",
    ar: "المتغير والمجهول",
    fa: "متغیر و مجهول",
    ti: "ተለዋዋጢ ቁጽርን ዘይፍለጥ ቁጽርን",
    uk: "Змінна і невідома",
  },
  blocks: [
    {
      text: {
        fr: "Les lettres en algèbre",
      }
    },
    {
      text: {
        fr: "En algèbre, une lettre peut représenter un nombre. On l'appelle une **variable** ou une **inconnue** selon le contexte.",
      }
    },
    {
      headers: {
        fr: ["Terme", "Définition", "Exemple"],
      }
    },
    {
      text: {
        fr: "Différence entre variable et inconnue",
      }
    },
    {
      text: {
        fr: "Variable",
      }
    },
    {
      items: {
        fr: [
            "Dans l'expression 3x **+** 5, x est une **variable** : elle peut prendre n'importe quelle valeur.",
            "On peut calculer la valeur de l'expression pour différentes valeurs de x.",
          ],
      }
    },
    {
      text: {
        fr: "Inconnue",
      }
    },
    {
      items: {
        fr: [
            "Dans l'équation 3x **+** 5 = 20, x est une **inconnue** : il y a une valeur précise à trouver.",
            "Ici, x = 5 est la seule valeur qui vérifie l'équation.",
          ],
      }
    },
    {
      text: {
        fr: "Convention d'écriture",
      },
      items: {
        fr: [
            "x, y, z → utilisés pour les variables et inconnues",
            "a, b, c → utilisés pour les constantes (valeurs fixes connues)",
          ],
      }
    },
  ],
};

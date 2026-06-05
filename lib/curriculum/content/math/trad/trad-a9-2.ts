import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A9_2: SubmoduleTrad = {
  submoduleId: "A9-2",
  title: {
    fr: "Lire et écrire une expression algébrique",
    en: "Reading and writing an algebraic expression",
    ar: "قراءة وكتابة تعبير جبري",
    fa: "خواندن و نوشتن عبارت جبری",
    ti: "ናይ ኣልጀብራ ኣዝማሪ ምንባብን ምጽሓፍን",
    uk: "Читання та запис алгебраїчного виразу",
  },
  blocks: [
    {
      text: {
        fr: "Qu'est-ce qu'une expression algébrique ?",
      }
    },
    {
      text: {
        fr: "Une expression algébrique est une combinaison de nombres, de variables et d'opérations (**+**, **−**, ×, ÷).",
      }
    },
    {
      label: {
        fr: "Exemples d'expressions",
      },
      items: {
        fr: [
            "3x **+** 2",
            "5a **−** b",
            "x² **+** 4x **−** 7",
          ],
      }
    },
    {
      text: {
        fr: "Vocabulaire essentiel",
      }
    },
    {
      headers: {
        fr: ["Terme", "Définition", "Exemple dans 4x² − 3x + 7"],
      }
    },
    {
      text: {
        fr: "Conventions d'écriture",
      }
    },
    {
      items: {
        fr: [
            "On omet le signe × entre un nombre et une variable : 3x signifie 3 × x",
            "Le coefficient s'écrit toujours **avant** la variable : 5x (pas x5)",
            "Le coefficient 1 est omis : 1x s'écrit simplement x",
            "Le coefficient **−**1 s'écrit **−**x (sans le 1)",
          ],
      }
    },
    {
      text: {
        fr: "Dans 4x² − 3x + 7 :\n• Termes : 4x²,  −3x,  7\n• Coefficients : 4 et −3\n• Terme constant : 7",
      }
    },
  ],
};

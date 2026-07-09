import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A9_5: SubmoduleTrad = {
  submoduleId: "A9-5",
  title: {
    fr: "Développement",
    en: "Simple expansion",
    ar: "التوسيع البسيط",
    fa: "توسعه ساده",
    ti: "ቀሊል ምስፋሕ",
    uk: "Просте розкриття дужок",
  },
  blocks: [
    { text: { fr: "Développer une expression" } },
    { text: { fr: "Développer signifie supprimer les parenthèses en distribuant la multiplication sur chaque terme à l'intérieur." } },
    { text: { fr: "Propriété distributive" } },
    {
      items: {
        fr: [
          "a(b **+** c) = ab **+** ac",
          "a(b **−** c) = ab **−** ac",
        ],
      },
    },
    { text: { fr: "Facteur négatif devant une parenthèse" } },
    { text: { fr: "Quand le facteur est négatif, tous les signes à l'intérieur de la parenthèse s'inversent." } },
    {
      label: { fr: "Exemples avec facteur négatif" },
      items: {
        fr: [
          "**−**2(x **−** 3) = **−**2x **+** 6  (le **−** × **−** donne **+**)",
          "**−**(x **−** 5) = **−**x **+** 5",
          "**−**(2x **+** 7) = **−**2x **−** 7",
        ],
      },
    },
    { text: { fr: "Double distribution" } },
    { text: { fr: "La double distributivité consiste à multiplier chaque terme du premier membre par chaque terme du second membre." } },
    { text: { fr: "(a **+** b)(c **+** d)" } },
    {
      items: {
        fr: ["(a **+** b)(c **+** d) = ac **+** ad **+** bc **+** bd"],
      },
    },
    {
      items: {
        fr: ["(x **+** 2)(x **+** 3) = x² **+** 3x **+** 2x **+** 6 = x² **+** 5x **+** 6"],
      },
    },
    { text: { fr: "Exemples fondamentaux" } },
    { headers: { fr: ["Expression", "Développement", "Résultat"] } },
    { text: { fr: "Les identités remarquables" } },
    { text: { fr: "Certains développements reviennent souvent : on les apprend par cœur pour aller plus vite." } },
    { text: { fr: "Carré d'une somme" } },
    { items: { fr: ["(a **+** b)² = a² **+** 2ab **+** b²"] } },
    { text: { fr: "Carré d'une différence" } },
    { items: { fr: ["(a **−** b)² = a² **−** 2ab **+** b²"] } },
    { text: { fr: "Différence de deux carrés" } },
    { items: { fr: ["a² **−** b² = (a **−** b)(a **+** b)"] } },
    { text: { fr: "Cube d'une somme" } },
    { items: { fr: ["(a **+** b)³ = a³ **+** 3a²b **+** 3ab² **+** b³"] } },
    { text: { fr: "Cube d'une différence" } },
    { items: { fr: ["(a **−** b)³ = a³ **−** 3a²b **+** 3ab² **−** b³"] } },
    { text: { fr: "Somme de deux cubes" } },
    { items: { fr: ["a³ **+** b³ = (a **+** b)(a² **−** ab **+** b²)"] } },
    { text: { fr: "Différence de deux cubes" } },
    { items: { fr: ["a³ **−** b³ = (a **−** b)(a² **+** ab **+** b²)"] } },
    { text: { fr: "Carré de trois termes" } },
    { items: { fr: ["(a **+** b **+** c)² = a² **+** b² **+** c² **+** 2ab **+** 2ac **+** 2bc"] } },
  ],
};

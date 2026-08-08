import type { GrammarLesson } from "../../grammar-data";
import { GR_MARQUEURS_TEMPS_COMPLET } from "./grammaire-g17.2-les-marqueurs-de-temps";

/** G17.2 — L'expression de la conséquence, enrichie avec G19.20 */
export const A1_GR_EXPRESSION_CONSEQUENCE: GrammarLesson = {
  slug: "a1-gr-expression-consequence",
  code: "G17.2",
  level: "A1",
  title: "L'expression de la conséquence",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Indiquer le résultat d'un fait ou d'une action, présenté comme certain.",
        "Exemple : Vous ne supportez pas la forte chaleur ? {a}Alors{/a}, restez chez vous !",
        "Il a fait {a}si{/a} chaud {a}que{/a} les piscines sont restées ouvertes jusqu'à minuit !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes et structure",
    },
    {
      type: "text",
      label: "donc / alors / par conséquent",
      items: [
        "Annoncent une conséquence ; {a}par conséquent{/a} est plus formel.",
        "Il a plu toute la journée {a}alors{/a} je suis restée chez moi.",
      ],
    },
    {
      type: "text",
      label: "si bien que + indicatif",
      items: [
        "Annonce une conséquence.",
        "Il a plu toute la journée {a}si bien que{/a} je suis restée chez moi.",
      ],
    },
    {
      type: "text",
      label: "c'est pourquoi / c'est la raison pour laquelle / c'est pour ça que",
      items: [
        "Donnent une explication ; {a}c'est pour ça que{/a} est plus familier.",
        "Il fait très chaud, {a}c'est la raison pour laquelle{/a} la ville distribue de l'eau gratuitement.",
      ],
    },
    {
      type: "text",
      label: "Intensité / quantité",
      items: [
        "{a}tellement / si{/a} + adjectif ou adverbe + {a}que{/a}.",
        "verbe + {a}tellement{/a} + {a}que{/a} ; {a}tellement de{/a} + nom + {a}que{/a}.",
        "Il a fait {a}si{/a} chaud {a}que{/a} les piscines sont restées ouvertes jusqu'à minuit !",
        "Il pleut {a}tellement que{/a} la rue est inondée.",
        "Il y a {a}tellement de{/a} vent {a}que{/a} je ne peux pas tenir debout.",
      ],
    },
    {
      type: "note",
      text: "Au passé composé, {a}tellement{/a} se place entre l'auxiliaire et le participe. → Il a {a}tellement{/a} plu {a}que{/a} la rue est inondée.",
    },
    {
      type: "note",
      text: "Avec {a}avoir besoin/chaud/envie/faim/froid/mal/peur/sommeil{/a} et {a}faire attention/beau/chaud/froid/mal/plaisir{/a}, on utilise {a}si{/a} ou {a}tellement{/a}.",
    },
    ...GR_MARQUEURS_TEMPS_COMPLET.theory,
  ],
  exercises: GR_MARQUEURS_TEMPS_COMPLET.exercises,
};

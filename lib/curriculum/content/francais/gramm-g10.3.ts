import type { GrammarLesson } from "../../grammar-data";
import { A2_GR_BON_BIEN } from "./gramm-r8.2-bon-ou-bien-meilleur-ou-mieux";
import { A2_GR_SUPERLATIF } from "./gramm-r8.3-le-superlatif";

/** Unité 49 — Le superlatif (G10.3) */
export const A1_GR_SUPERLATIF: GrammarLesson = {
  slug: "a1-gr-superlatif",
  code: "G10.3",
  level: "A1",
  title: "Le superlatif",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Le superlatif exprime le degré maximum ou minimum d'une intensité, d'une quantité ou d'une qualité.",
        "C'est le meilleur pâtissier de France. (= il n'y a pas de pâtissier meilleur que lui.)",
        "C'est l'émission qui a le plus de spectateurs.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "plain_list",
      items: [
        "Avec un adjectif : C'est la région la moins visitée.",
        "Avec un adverbe : C'est l'émission qui dure le plus longtemps.",
        "Avec un nom : C'est la région où il y a le plus de soleil.",
        "Avec un verbe : C'est la région où il pleut le moins.",
        "Complément introduit par {a}de / de la / de l' / du / des{/a}. → La plus belle région de France. ; Le plus grand cabaret du monde.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Remarques",
    },
    {
      type: "plain_list",
      items: [
        "Adjectif après le nom : on répète l'article. → C'est le programme le moins intéressant de la soirée.",
        "Adjectif avant le nom : deux possibilités. → C'est la région la plus belle de France. / C'est la plus belle région de France.",
        "✗ le plus bon → ✓ {a}le / la / les meilleur(e)(s){/a}. → Ce cuisinier est le meilleur.",
        "✗ le plus bien → ✓ {a}le mieux{/a}. → C'est lui qui cuisine le mieux.",
        "Pour un aspect négatif : {a}le / la / les pire(s){/a}. → C'est la pire émission de la semaine.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "Quand {a}plus{/a} est le dernier mot de la phrase, on prononce généralement le {a}s{/a}. → C'est le programme qui intéresse le plus !",
      ],
      noBulletItems: [0],
    },
    ...A2_GR_BON_BIEN.theory,
    ...A2_GR_SUPERLATIF.theory,
  ],
  exercises: [],
};

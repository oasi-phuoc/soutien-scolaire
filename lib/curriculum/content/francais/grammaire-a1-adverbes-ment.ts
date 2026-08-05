import type { GrammarLesson } from "../../grammar-data";
import { A2_GR_ADVERBES } from "./grammaire-r10.5-adverbes";

/** G14.2 — Les adverbes en -ment, enrichis avec G19.22 (types d'adverbes) */
export const A1_GR_ADVERBES_MENT: GrammarLesson = {
  slug: "a1-gr-adverbes-ment",
  code: "G14.2",
  level: "A1",
  title: "Les adverbes en -ment",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Souvent la manière d'une action. → Roulez prudemment. (= avec prudence)",
        "Peut modifier un adjectif ou une expression. → Ils sont généralement prudents. ; Elle est fréquemment en retard.",
        "Peut être précédé d'un adverbe d'intensité. → Il roule très prudemment.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formation",
    },
    {
      type: "plain_list",
      items: [
        "Cas général : féminin de l'adjectif + {a}-ment{/a}. → douce → doucement ; longue → longuement.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "Cas particuliers",
      items: [
        "Adjectif masculin en voyelle : + {a}-ment{/a} sur le masculin. → poli → poliment ; vrai → vraiment ; absolu → absolument.",
        "Exception : gai → gaiement.",
        "Adjectifs en {a}-ant / -ent{/a} → {a}-amment / -emment{/a}. → courant → couramment ; patient → patiemment.",
        "Exception : lent → lentement.",
        "Irréguliers : précis → précisément ; bref → brièvement ; gentil → gentiment.",
      ],
    },
    {
      type: "heading",
      text: "Place",
    },
    {
      type: "plain_list",
      items: [
        "Devant l'adjectif ou l'expression. → généralement prudents ; complètement d'accord.",
        "Après le verbe en général. → Il parle rapidement. ; Il a parlé rapidement.",
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
        "{a}-amment{/a} et {a}-emment{/a} se prononcent pareil. → couramment ; fréquemment.",
      ],
      noBulletItems: [0],
    },
    ...A2_GR_ADVERBES.theory,
  ],
  exercises: A2_GR_ADVERBES.exercises,
};

import type { GrammarLesson } from "../../grammar-data";
import { A1_GR_TIME_EXPRESSIONS } from "./grammaire-r4.2-temps";

/** Unité 50 — L'expression du temps : moment précis ou habitude (G11.1) */
export const A1_GR_EXPRESSION_TEMPS_MOMENT: GrammarLesson = {
  slug: "a1-gr-expression-temps-moment",
  code: "G11.1",
  level: "A1",
  title: "L'expression du temps : moment précis ou habitude",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "On utilise des expressions de temps pour indiquer le moment précis d'une action ou pour parler d'une habitude.",
        "Exemple : Rendez-vous à la gare du Nord, le 22 mars à 17 heures 15.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Moment précis",
    },
    {
      type: "grid",
      headers: ["", "Préposition / forme", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["une heure", "à", "Il arrive à 9 heures."],
        ["un jour", "nom sans article", "Nous avons une réunion lundi."],
        ["une date", "le", "On est le 25 mai."],
        ["un mois, une année", "en", "On est en mars, en 2015."],
        ["une saison", "au / en", "au printemps ; en été ; en automne ; en hiver"],
        ["un siècle", "au", "Nous sommes au XXIe siècle."],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Période liée au moment présent : adjectif démonstratif {a}ce, cet, cette, ces{/a}. → ce matin ; cet après-midi ; cette semaine ; ces jours-ci.",
      ],
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "Habitude",
    },
    {
      type: "plain_list",
      items: [
        "Articles {a}le, la, l', les{/a} avec les jours et les moments de la journée.",
        "Le samedi, je vais à la piscine. (= tous les samedis)",
        "Je ne travaille pas la nuit. ; J'ai beaucoup de réunions l'après-midi. ; Je travaille souvent les jours fériés.",
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
        "Liaison avec {a}en{/a} devant mois ou saisons en voyelle ou {a}h{/a} muet. → en avril ; en août ; en octobre ; en été ; en automne ; en hiver.",
      ],
      noBulletItems: [0],
    },
    ...A1_GR_TIME_EXPRESSIONS.theory,
  ],
  exercises: [],
};

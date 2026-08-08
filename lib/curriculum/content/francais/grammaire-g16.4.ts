import type { GrammarLesson } from "../../grammar-data";
import { A2_GR_SUBJONCTIF } from "./grammaire-g16.4-le-subjonctif";

/** G16.4 — Le subjonctif présent, enrichi avec G19.32 */
export const A1_GR_SUBJONCTIF_PRESENT: GrammarLesson = {
  slug: "a1-gr-subjonctif-present",
  code: "G16.4",
  level: "A1",
  title: "Le subjonctif présent",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Mode verbal souvent après un verbe ou une expression + {a}que{/a}, pour exprimer une subjectivité.",
        "Indicatif (fait) : Aucun vaccin n'est nécessaire.",
        "Subjonctif (réaction) : Je suis surpris qu'aucun vaccin ne soit nécessaire.",
        "Exemple : Il faut que nous prenions un permis international ; j'étais surpris qu'aucun vaccin ne soit nécessaire.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formation régulière",
    },
    {
      type: "text",
      items: [
        "Radical du {a}ils{/a} du présent + {a}-e, -es, -e, -ions, -iez, -ent{/a}.",
        "Si {a}nous/vous{/a} ont un autre radical à l'indicatif, on le garde au subjonctif pour {a}nous/vous{/a} (deux radicaux).",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["", "parler", "prendre"],
      boldFirstCol: true,
      rows: [
        ["que je / j'", "parle", "prenne"],
        ["que tu", "parles", "prennes"],
        ["qu'il / elle / on", "parle", "prenne"],
        ["que nous", "parlions", "prenions"],
        ["que vous", "parliez", "preniez"],
        ["qu'ils / elles", "parlent", "prennent"],
      ],
    },
    {
      type: "heading",
      text: "Conjugaisons irrégulières",
    },
    {
      type: "grid",
      headers: ["", "être", "avoir", "aller", "faire", "pouvoir", "vouloir", "savoir"],
      boldFirstCol: true,
      rows: [
        ["je / j'", "sois", "aie", "aille", "fasse", "puisse", "veuille", "sache"],
        ["tu", "sois", "aies", "ailles", "fasses", "puisses", "veuilles", "saches"],
        ["il / elle / on", "soit", "ait", "aille", "fasse", "puisse", "veuille", "sache"],
        ["nous", "soyons", "ayons", "allions", "fassions", "puissions", "voulions", "sachions"],
        ["vous", "soyez", "ayez", "alliez", "fassiez", "puissiez", "vouliez", "sachiez"],
        ["ils / elles", "soient", "aient", "aillent", "fassent", "puissent", "veuillent", "sachent"],
      ],
    },
    {
      type: "heading",
      text: "Des utilisations du subjonctif",
    },
    {
      type: "text",
      label: "Nécessité / obligation",
      items: [
        "Il faut que nous prenions contact… ; Il est nécessaire que les objets soient bien protégés.",
      ],
    },
    {
      type: "text",
      label: "Sentiment",
      items: [
        "Je suis heureux que nous déménagions. ; C'est dommage que vous ne puissiez pas venir. ; Nous avons peur qu'elle se sente seule.",
      ],
    },
    {
      type: "text",
      label: "Jugement / appréciation",
      items: [
        "C'est bien qu'il ait une promotion. ; Je trouve incroyable qu'il prenne sa décision si rapidement.",
      ],
    },
    {
      type: "text",
      label: "Volonté / souhait",
      items: [
        "Je veux que tout soit prêt. ; J'aimerais que vous soyez présents.",
      ],
    },
    {
      type: "text",
      label: "Possibilité",
      items: [
        "Il est possible que nous ayons une augmentation. ; Il se peut qu'elle ne veuille pas.",
      ],
    },
    {
      type: "note",
      text: "Pas de subjonctif après {a}espérer{/a}. → J'espère que vous aimez votre nouvel appartement.",
    },
    {
      type: "note",
      text: "Subjonctif seulement si les sujets sont différents ; sinon infinitif. → Je souhaite partir. (pas : Je souhaite que je parte.)",
    },
    {
      type: "note",
      text: "Aussi après certaines conjonctions. → Je l'appelle avant qu'il parte.",
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "text",
      items: [
        "Ne pas confondre {a}avoir{/a} et {a}aller{/a} : que tu aies un visa ≠ que tu ailles au consulat.",
      ],
      noBulletItems: [0],
    },
    ...A2_GR_SUBJONCTIF.theory,
  ],
  exercises: [],
};

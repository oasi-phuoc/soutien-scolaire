import type { GrammarLesson } from "../../grammar-data";
import { A2_GR_IMPARFAIT_IRREGULIERS } from "./grammaire-g8.5-les-verbes-irreguliers-a-l-imparfait";

/** G8.5 — L'imparfait, enrichi avec G19.26 (imparfait irrégulier) */
export const A1_GR_IMPARFAIT: GrammarLesson = {
  slug: "a1-gr-imparfait",
  code: "G8.5",
  level: "A1",
  title: "L'imparfait",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Décrire une situation passée, souvent en contraste avec le présent. → Avant, les trains étaient à vapeur. Maintenant, les trains sont électriques.",
        "Décrire une habitude passée. → Quand j'étais enfant, tous les dimanches, nous allions chez mes grands-parents.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjugaison",
    },
    {
      type: "plain_list",
      items: [
        "L'imparfait est très régulier : radical du {a}nous{/a} au présent + terminaisons.",
        "Terminaisons : {a}-ais, -ais, -ait, -ions, -iez, -aient{/a}.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["Infinitif", "nous (présent)", "Imparfait"],
      boldFirstCol: true,
      rows: [
        ["détester", "nous détestons", "je détestais la lecture"],
        ["aller", "nous allons", "tu allais chez tes grands-parents"],
        ["vivre", "nous vivons", "il / elle / on vivait à la campagne"],
        ["avoir", "nous avons", "nous avions une petite voiture"],
        ["habiter", "nous habitons", "vous habitiez dans un studio"],
        ["dormir", "nous dormons", "ils / elles dormaient dans la même chambre"],
      ],
    },
    {
      type: "note",
      text: "{a}Être{/a} a un radical irrégulier : {a}ét-{/a}. → étaient.",
    },
    {
      type: "note",
      text: "Verbes impersonnels : il faut → il fallait ; il pleut → il pleuvait.",
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "plain_list",
      items: [
        "Les terminaisons {a}-ais{/a}, {a}-ait{/a} et {a}-aient{/a} se prononcent pareil.",
        "Ne pas confondre présent / imparfait : j'habite ≠ j'habitais ; nous buvons ≠ nous buvions.",
        "Ne pas confondre passé composé / imparfait : il a habité ≠ il habitait.",
      ],
      allBullets: true,
    },
    {
      type: "highlight",
      label: "Orthographe — cas particuliers",
      items: [
        "Verbes en {a}-ger{/a} : un {a}e{/a} devant {a}a{/a}. → je voyageais ; il mangeait.",
        "Verbes en {a}-cer{/a} : {a}c → ç{/a} devant {a}a{/a}. → je commençais ; il commençait.",
        "Verbes en {a}-yer{/a} : on garde {a}y{/a} devant {a}i{/a}. → nous payions ; vous essuyiez.",
        "Radical en {a}-i{/a} : double {a}i{/a}. → nous riions ; vous étudiiez.",
      ],
    },
    ...A2_GR_IMPARFAIT_IRREGULIERS.theory,
  ],
  exercises: [],
};

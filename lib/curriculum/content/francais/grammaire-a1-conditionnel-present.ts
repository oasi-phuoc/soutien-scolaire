import type { GrammarLesson } from "../../grammar-data";
import { A2_GR_CONDITIONNEL } from "./grammaire-r6.2";

/** G16.8 — Le conditionnel présent, enrichi avec G19.30 */
export const A1_GR_CONDITIONNEL_PRESENT: GrammarLesson = {
  slug: "a1-gr-conditionnel-present",
  code: "G16.8",
  level: "A1",
  title: "Le conditionnel présent",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "highlight",
      label: "Demander un service poliment",
      items: [
        "Je {a}voudrais{/a} deux baguettes… ; Vous {a}pourriez{/a} m'apporter de l'eau…",
        "{a}Auriez{/a}-vous l'heure ? ; {a}Sauriez{/a}-vous comment on va à Giverny ?",
      ],
    },
    {
      type: "highlight",
      label: "Exprimer un souhait, un désir",
      items: [
        "On {a}voudrait{/a} déménager. ; Tu {a}aimerais{/a} aller où ?",
        "Je {a}préférerais{/a} une bouteille… ; Vous {a}souhaiteriez{/a} vivre au bord de la mer ?",
      ],
    },
    {
      type: "highlight",
      label: "Suggestion / conseil",
      items: [
        "Ce soir, si tu veux, on {a}pourrait{/a} aller au cinéma.",
        "Tu {a}devrais{/a} te renseigner… ; Si j'étais toi / À ta place, je me {a}renseignerais{/a}.",
      ],
    },
    {
      type: "heading",
      text: "Conjugaison",
    },
    {
      type: "plain_list",
      items: [
        "Radical du futur simple + terminaisons de l'imparfait ({a}-ais, -ais, -ait, -ions, -iez, -aient{/a}).",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["", "aimer", "préférer", "souhaiter"],
      boldFirstCol: true,
      rows: [
        ["je / j'", "aimerais", "préférerais", "souhaiterais"],
        ["tu", "aimerais", "préférerais", "souhaiterais"],
        ["il / elle / on", "aimerait", "préférerait", "souhaiterait"],
        ["nous", "aimerions", "préférerions", "souhaiterions"],
        ["vous", "aimeriez", "préféreriez", "souhaiteriez"],
        ["ils / elles", "aimeraient", "préféreraient", "souhaiteraient"],
      ],
    },
    {
      type: "note",
      text: "Les verbes irréguliers au futur le sont aussi au conditionnel. → À ta place, j'{a}irais{/a} chez le médecin. ; À ma place, vous {a}feriez{/a} quoi ?",
    },
    ...A2_GR_CONDITIONNEL.theory,
  ],
  exercises: [],
};

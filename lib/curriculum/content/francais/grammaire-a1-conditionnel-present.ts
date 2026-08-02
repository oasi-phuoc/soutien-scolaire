import type { GrammarLesson } from "../../grammar-data";

/** Unité 74 — Le conditionnel présent (G4.44) */
export const A1_GR_CONDITIONNEL_PRESENT: GrammarLesson = {
  slug: "a1-gr-conditionnel-present",
  code: "G4.44",
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
  ],
  exercises: [
    {
      type: "qcm",
      title: "Conditionnel présent",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Vous ___ m'apporter de l'eau ? (pouvoir)", choices: ["pourriez", "pouvez", "pourrez", "pouviez"], correctIdx: 0 },
        { sentence: "Je ___ une bouteille d'eau. (préférer)", choices: ["préférerais", "préfère", "préférerai", "préférais"], correctIdx: 0 },
        { sentence: "Je ___ deux baguettes. (vouloir)", choices: ["voudrais", "veux", "voudrai", "voulais"], correctIdx: 0 },
        { sentence: "On ___ aller au cinéma. (pouvoir, suggestion)", choices: ["pourrait", "peut", "pourra", "pouvait"], correctIdx: 0 },
        { sentence: "Tu ___ te renseigner. (devoir, conseil)", choices: ["devrais", "dois", "devras", "devais"], correctIdx: 0 },
        { sentence: "À ta place, j'___ chez le médecin. (aller)", choices: ["irais", "vais", "irai", "allais"], correctIdx: 0 },
        { sentence: "À ma place, vous ___ quoi ? (faire)", choices: ["feriez", "faites", "ferez", "faisiez"], correctIdx: 0 },
        { sentence: "Formation : radical du ___ + terminaisons de l'imparfait.", choices: ["futur simple", "présent", "passé composé", "subjonctif"], correctIdx: 0 },
        { sentence: "___ -vous l'heure ? (avoir, poli)", choices: ["Auriez", "Avez", "Aurez", "Aviez"], correctIdx: 0 },
        { sentence: "On ___ déménager. (vouloir, souhait)", choices: ["voudrait", "veut", "voudra", "voulait"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez le verbe au conditionnel présent.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Vous ___ m'apporter de l'eau ? (pouvoir)", hint: "poli", answer: "pourriez" },
        { sentence: "Je ___ une bouteille. (préférer)", hint: "souhait", answer: "préférerais" },
        { sentence: "Je ___ deux baguettes. (vouloir)", hint: "poli", answer: "voudrais" },
        { sentence: "On ___ aller au cinéma. (pouvoir)", hint: "suggestion", answer: "pourrait" },
        { sentence: "Tu ___ te renseigner. (devoir)", hint: "conseil", answer: "devrais" },
        { sentence: "À ta place, j'___ chez le médecin. (aller)", hint: "irrégulier", answer: "irais" },
        { sentence: "À ma place, vous ___ quoi ? (faire)", hint: "irrégulier", answer: "feriez" },
        { sentence: "Nous ___ faire la fête. (aimer)", hint: "nous", answer: "aimerions" },
        { sentence: "Ils ___ rentrer tôt. (souhaiter)", hint: "ils", answer: "souhaiteraient" },
        { sentence: "___ -vous comment on y va ? (savoir)", hint: "poli", answer: "Sauriez" },
      ],
    },
  ],
};

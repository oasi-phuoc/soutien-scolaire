import type { GrammarLesson } from "../../grammar-data";

/** Unité 40 — Le passé récent (G4.10) */
export const A1_GR_PASSE_RECENT: GrammarLesson = {
  slug: "a1-gr-passe-recent",
  code: "G4.10",
  level: "A1",
  title: "Le passé récent",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Le passé récent exprime une action qui s'est produite très peu de temps avant le moment où l'on parle.",
        "Exemple : Je viens de rentrer à la maison. (= je suis rentré(e) il y a quelques minutes)",
        "On peut ajouter {a}juste{/a} pour renforcer la proximité : {a}venir juste de{/a}. → Il vient juste de partir.",
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
        "Formation : {a}venir{/a} (présent) + {a}de{/a} / {a}d'{/a} + infinitif.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["", "venir", "de / d'", "infinitif"],
      boldFirstCol: true,
      rows: [
        ["je", "viens", "d'", "allumer la radio."],
        ["tu", "viens", "de", "brancher l'appareil."],
        ["il / elle / on", "vient", "d'", "éteindre la tablette."],
        ["nous", "venons", "de", "regarder le journal télévisé."],
        ["vous", "venez", "de", "débrancher le téléphone."],
        ["ils / elles", "viennent", "de", "mettre un DVD."],
      ],
    },
    {
      type: "heading",
      text: "Remarques",
    },
    {
      type: "plain_list",
      items: [
        "On n'emploie pas le passé récent avec une indication de temps précise → passé composé. ✗ Le film vient de commencer il y a 3 minutes. → ✓ Le film a commencé il y a 3 minutes.",
        "Ne pas confondre {a}venir de{/a} (passé récent) et {a}venir{/a} seul. → Je viens de la gare. (= provenance) ≠ Je viens de rentrer de la gare. (= passé récent)",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "plain_list",
      items: [
        "Devant une voyelle : {a}de → d'{/a}. → Nous venons d'arriver.",
        "Devant une consonne, le {a}e{/a} de {a}de{/a} est souvent muet à l'oral. → On vient de manger. ; Il vient de partir.",
        "Ne pas confondre : Il vient de dîner. (= passé récent) ≠ Il vient dîner. (= il arrive pour dîner)",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Passé récent",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Le train ___ partir !", choices: ["vient de", "vient", "a"], correctIdx: 0 },
        { sentence: "Je ___ rentrer à la maison.", choices: ["viens de", "viens", "suis"], correctIdx: 0 },
        { sentence: "Nous ___ regarder le journal.", choices: ["venons de", "venons", "avons"], correctIdx: 0 },
        { sentence: "Ils ___ mettre un DVD.", choices: ["viennent de", "viennent", "ont"], correctIdx: 0 },
        { sentence: "Nous venons ___ arriver.", choices: ["d'", "de", "à"], correctIdx: 0 },
        { sentence: "Il vient ___ partir. (consonne)", choices: ["de", "d'", "à"], correctIdx: 0 },
        { sentence: "Le film ___ il y a 3 minutes. (temps précis)", choices: ["a commencé", "vient de commencer", "commençait"], correctIdx: 0 },
        { sentence: "Je viens de la gare. = ___", choices: ["provenance", "passé récent", "futur"], correctIdx: 0 },
        { sentence: "Je viens de rentrer. = ___", choices: ["passé récent", "provenance", "futur proche"], correctIdx: 0 },
        { sentence: "Il vient juste de partir. → « juste » renforce ___ .", choices: ["la proximité", "le futur", "l'habitude"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez venir (présent), de ou d'.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ d'allumer la radio.", hint: "venir", answer: "viens" },
        { sentence: "Tu viens ___ brancher l'appareil.", hint: "de/d'", answer: "de" },
        { sentence: "Elle vient ___ éteindre la tablette.", hint: "voyelle", answer: "d'" },
        { sentence: "Nous ___ de regarder le journal.", hint: "venir", answer: "venons" },
        { sentence: "Vous ___ de débrancher le téléphone.", hint: "venir", answer: "venez" },
        { sentence: "Ils ___ de mettre un DVD.", hint: "venir", answer: "viennent" },
        { sentence: "Nous venons ___ arriver.", hint: "voyelle", answer: "d'" },
        { sentence: "Il ___ juste de partir.", hint: "venir", answer: "vient" },
        { sentence: "Je viens ___ rentrer.", hint: "consonne", answer: "de" },
        { sentence: "On vient ___ manger.", hint: "consonne", answer: "de" },
      ],
    },
  ],
};

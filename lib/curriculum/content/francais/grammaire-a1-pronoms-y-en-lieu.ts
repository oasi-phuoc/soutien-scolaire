import type { GrammarLesson } from "../../grammar-data";

/** Unité 55 — Les pronoms compléments de lieu y et en (G4.25) */
export const A1_GR_PRONOMS_Y_EN_LIEU: GrammarLesson = {
  slug: "a1-gr-pronoms-y-en-lieu",
  code: "G4.25",
  level: "A1",
  title: "Les pronoms compléments de lieu y et en",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "highlight",
      label: "Le pronom y",
      items: [
        "Remplace le nom du lieu où l'on va ou où l'on est. → Tu vas souvent au cinéma ? — J'y vais une fois par semaine. ; Vous habitez en Suisse ? — Non, je n'y habite plus.",
        "Dans {a}aller + infinitif{/a}, {a}y{/a} peut remplacer l'infinitif et son complément. → Tu vas acheter le pain ? — D'accord, j'y vais.",
        "Verbes fréquents : aller, s'arrêter, être, habiter, partir, se promener, rester, retourner, travailler, vivre.",
      ],
    },
    {
      type: "highlight",
      label: "Le pronom en",
      items: [
        "Remplace le nom du lieu d'où l'on vient. → Vous sortez de la cafétéria ? — Oui, nous en sortons à l'instant. ; Non, j'en viens.",
      ],
    },
    {
      type: "heading",
      text: "Place et structure",
    },
    {
      type: "plain_list",
      items: [
        "Devant le verbe ou l'auxiliaire. → On y va. ; Nous en sortons.",
        "Avec deux verbes : devant l'infinitif. → Je vais y aller avec Jérôme. ; Il va bientôt en sortir.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Négation : Je n'y vais pas. ; Elle n'y est pas allée. ; Il ne va pas y aller. ; Elle n'en est pas sortie.",
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "Liaison entre pronom en {a}-s{/a} et {a}y{/a} / {a}en{/a}. → Ils y habitent. ; Vous y travaillez. ; Nous en arrivons.",
        "À l'oral, le {a}ne{/a} tombe souvent. → J'y vais pas.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Expression : {a}Ça y est !{/a} (= prêt / réussi). → Ça y est, j'ai compris !",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Y et en (lieu)",
      instruction: "Choisissez le pronom correct.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Tu vas au stade ? — Oui, j'___ vais.", choices: ["y", "en", "le", "là"], correctIdx: 0 },
        { sentence: "Non, j'___ viens. (du stade)", choices: ["en", "y", "du", "de"], correctIdx: 0 },
        { sentence: "Vous habitez en Suisse ? — Je n'___ habite plus.", choices: ["y", "en", "la", "à"], correctIdx: 0 },
        { sentence: "Tu vas acheter le pain ? — J'___ vais.", choices: ["y", "en", "le", "à"], correctIdx: 0 },
        { sentence: "Vous sortez de la cafétéria ? — Nous ___ sortons.", choices: ["en", "y", "de", "la"], correctIdx: 0 },
        { sentence: "Je vais ___ aller avec Jérôme.", choices: ["y", "en", "là", "au"], correctIdx: 0 },
        { sentence: "Il va bientôt ___ sortir.", choices: ["en", "y", "de", "du"], correctIdx: 0 },
        { sentence: "Je n'___ vais pas.", choices: ["y", "en", "le", "à"], correctIdx: 0 },
        { sentence: "Elle n'___ est pas sortie.", choices: ["en", "y", "de", "du"], correctIdx: 0 },
        { sentence: "___ , j'ai compris !", choices: ["Ça y est", "Ça en est", "Y est ça", "En y ça"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez y ou en.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Tu y vas ? — Oui, j'___ vais.", hint: "destination", answer: "y" },
        { sentence: "Tu en viens ? — Oui, j'___ viens.", hint: "provenance", answer: "en" },
        { sentence: "On ___ va travailler.", hint: "destination", answer: "y" },
        { sentence: "Nous ___ sortons.", hint: "provenance", answer: "en" },
        { sentence: "Je vais ___ aller demain.", hint: "infinitif", answer: "y" },
        { sentence: "Il va ___ sortir bientôt.", hint: "provenance", answer: "en" },
        { sentence: "Je n'___ vais pas.", hint: "destination", answer: "y" },
        { sentence: "Elle n'___ est pas allée.", hint: "destination", answer: "y" },
        { sentence: "Ils ___ habitent.", hint: "lieu", answer: "y" },
        { sentence: "Nous ___ arrivons à l'instant.", hint: "provenance", answer: "en" },
      ],
    },
  ],
};

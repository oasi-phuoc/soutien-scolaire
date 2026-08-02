import type { GrammarLesson } from "../../grammar-data";

/** Unité 80 — L'expression de l'opposition et de la concession (G4.50) */
export const A1_GR_OPPOSITION_CONCESSION: GrammarLesson = {
  slug: "a1-gr-opposition-concession",
  code: "G4.50",
  level: "A1",
  title: "L'expression de l'opposition et de la concession",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Opposition : souligner la différence entre deux faits. → On travaille le samedi {a}mais{/a} pas le dimanche.",
        "Concession : une cause n'a pas eu le résultat attendu. → Les salaires n'ont pas augmenté, {a}pourtant{/a}, l'entreprise a fait des bénéfices !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Expression de l'opposition",
    },
    {
      type: "highlight",
      label: "mais",
      items: [
        "Oppose deux mots ou deux propositions.",
        "J'aime mon travail {a}mais{/a} je n'aime pas mes collègues.",
      ],
    },
    {
      type: "highlight",
      label: "par contre (courant) / en revanche (formel)",
      items: [
        "Opposition plus forte.",
        "Cette entreprise fait des bénéfices, {a}en revanche{/a}, l'autre perd de l'argent.",
      ],
    },
    {
      type: "highlight",
      label: "alors que + indicatif",
      items: [
        "Ajoute une idée de comparaison.",
        "Je travaille 8 heures par jour {a}alors que{/a} tu ne travailles que 6 heures.",
      ],
    },
    {
      type: "highlight",
      label: "au lieu de + infinitif",
      items: [
        "Faire une chose à la place d'une autre.",
        "Travaille {a}au lieu de{/a} discuter !",
      ],
    },
    {
      type: "highlight",
      label: "en fait",
      items: [
        "Oppose une idée à la réalité.",
        "On pense que ce patron est égoïste, {a}en fait{/a}, il est très généreux.",
      ],
    },
    {
      type: "heading",
      text: "Expression de la concession",
    },
    {
      type: "plain_list",
      items: [
        "{a}mais{/a} = {a}pourtant{/a} = {a}cependant{/a} (formel).",
        "Je travaille beaucoup {a}mais{/a} je ne gagne pas beaucoup d'argent.",
        "Mon entreprise fait des bénéfices, {a}pourtant{/a}, les salaires baissent.",
        "Renforcer avec {a}quand même{/a} après le verbe. → … fait {a}quand même{/a} des bénéfices.",
        "{a}Malgré{/a} + nom. → {a}Malgré{/a} la crise, mon entreprise fait des bénéfices.",
      ],
      allBullets: true,
    },
    {
      type: "highlight",
      label: "bien que / même si / avoir beau",
      items: [
        "{a}Bien que{/a} + subjonctif. → Bien que la situation {a}soit{/a} difficile…",
        "{a}Même si{/a} + indicatif. → Même si la situation {a}est{/a} difficile…",
        "{a}Avoir beau{/a} + infinitif (oral). → La situation {a}a beau être{/a} difficile…",
      ],
    },
    {
      type: "note",
      text: "Deux propositions après {a}bien que{/a} / {a}même si{/a} : on ne répète pas la conjonction → {a}que{/a}. → Bien qu'on ait des problèmes et {a}que{/a} la situation soit difficile…",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Opposition et concession",
      instruction: "Choisissez la forme qui convient.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "On travaille le samedi ___ pas le dimanche.", choices: ["mais", "afin que", "pour que", "dès que"], correctIdx: 0 },
        { sentence: "Les salaires n'ont pas augmenté, ___ l'entreprise a fait des bénéfices.", choices: ["pourtant", "afin que", "pour que", "dès que"], correctIdx: 0 },
        { sentence: "Cette entreprise gagne, ___ l'autre perd. (formel)", choices: ["en revanche", "afin de", "pour que", "dès que"], correctIdx: 0 },
        { sentence: "Je travaille 8 h ___ tu ne travailles que 6 h.", choices: ["alors que", "afin que", "pour que", "dès que"], correctIdx: 0 },
        { sentence: "Travaille ___ discuter !", choices: ["au lieu de", "afin que", "bien que", "malgré"], correctIdx: 0 },
        { sentence: "On le croit égoïste, ___ il est généreux.", choices: ["en fait", "afin que", "pour que", "dès que"], correctIdx: 0 },
        { sentence: "___ la crise, mon entreprise fait des bénéfices.", choices: ["Malgré", "Bien que", "Afin que", "Pour que"], correctIdx: 0 },
        { sentence: "Bien que la situation ___ difficile…", choices: ["soit", "est", "sera", "être"], correctIdx: 0 },
        { sentence: "Même si la situation ___ difficile…", choices: ["est", "soit", "sera", "être"], correctIdx: 0 },
        { sentence: "La situation ___ difficile, il faut rester optimistes. (oral)", choices: ["a beau être", "est beau", "a beau est", "soit beau"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Complétez avec le mot ou la forme attendue.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "J'aime mon travail ___ je n'aime pas mes collègues.", hint: "opposition", answer: "mais" },
        { sentence: "Les salaires baissent, ___ l'entreprise gagne.", hint: "concession", answer: "pourtant" },
        { sentence: "Travaille ___ discuter !", hint: "au lieu de", answer: "au lieu de" },
        { sentence: "___ la crise, on fait des bénéfices.", hint: "nom", answer: "Malgré" },
        { sentence: "Bien que la situation ___ difficile…", hint: "subjonctif", answer: "soit" },
        { sentence: "Même si la situation ___ difficile…", hint: "indicatif", answer: "est" },
        { sentence: "C'est la crise, pourtant mon entreprise fait ___ des bénéfices.", hint: "renfort", answer: "quand même" },
        { sentence: "Bien qu'on ait des problèmes et ___ la situation soit difficile…", hint: "2e prop.", answer: "que" },
        { sentence: "Je travaille 8 h ___ tu en travailles 6.", hint: "comparaison", answer: "alors que" },
        { sentence: "On le croit avare, ___ il est généreux.", hint: "réalité", answer: "en fait" },
      ],
    },
  ],
};

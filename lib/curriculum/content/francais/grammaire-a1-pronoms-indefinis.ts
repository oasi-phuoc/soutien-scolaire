import type { GrammarLesson } from "../../grammar-data";

/** Unité 60 — Les pronoms indéfinis (G4.30) */
export const A1_GR_PRONOMS_INDEFINIS: GrammarLesson = {
  slug: "a1-gr-pronoms-indefinis",
  code: "G4.30",
  level: "A1",
  title: "Les pronoms indéfinis",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Les pronoms indéfinis représentent des personnes ou des choses ; sujets ou compléments.",
        "Comme les adjectifs indéfinis, ils expriment une quantité (totalité, individualité, pluralité, zéro), une ressemblance, une différence ou une imprécision.",
        "Exemple : J'ai tout ? Je n'oublie rien ? — … quelque chose d'important. Tes rollers !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "highlight",
      label: "Totalité : tout / toute / tous / toutes",
      items: [
        "{a}Tout{/a} = toutes les choses (jamais des personnes). → Tout va bien ! ; J'ai tout ?",
        "{a}Tous, toutes{/a} : personnes ou choses. Sujets rarement seuls : Les voisins viennent tous.",
        "Souvent avec {a}les{/a} ou {a}leur{/a}, accord. → Les guides, il les a tous lus.",
      ],
    },
    {
      type: "highlight",
      label: "Individualité : chacun(e)",
      items: [
        "Toujours singulier. → Chacune de ces voitures est à vendre. ; J'ai demandé des conseils à chacun de mes amis.",
      ],
    },
    {
      type: "highlight",
      label: "Pluralité : quelques-un(e)s, plusieurs, certain(e)s",
      items: [
        "{a}Quelques-uns/unes{/a} : petit nombre. ; {a}Plusieurs{/a} : plus de deux, sans précision. ; {a}Certains/certaines{/a} : une partie.",
        "En complément : avec {a}en{/a}, accord. → Des reportages, j'en ai fait quelques-uns.",
      ],
    },
    {
      type: "highlight",
      label: "Quantité nulle : aucun(e)",
      items: [
        "Toujours singulier, avec {a}ne{/a}. → Aucune de ces voitures n'est à vendre.",
        "Avec {a}en{/a} : accord en genre. → Ces voitures, je n'en veux aucune !",
      ],
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "plain_list",
      items: [
        "Trait d'union et liaison : {a}quelques-uns{/a}, {a}quelques-unes{/a}.",
        "Le {a}s{/a} final de {a}tous{/a} (pronom) se prononce. → Je les ai tous lus. ; On n'est pas tous les mêmes.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Pronoms indéfinis",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ va bien !", choices: ["Tout", "Tous", "Chacun", "Aucun"], correctIdx: 0 },
        { sentence: "Les voisins viennent ___ .", choices: ["tous", "tout", "chacun", "plusieurs"], correctIdx: 0 },
        { sentence: "Il les a ___ lus.", choices: ["tous", "tout", "chacun", "aucun"], correctIdx: 0 },
        { sentence: "___ de ces voitures est à vendre.", choices: ["Chacune", "Tous", "Plusieurs", "Tout"], correctIdx: 0 },
        { sentence: "J'en ai fait ___ .", choices: ["quelques-uns", "quelques uns", "quelque-uns", "tout"], correctIdx: 0 },
        { sentence: "___ voudraient partir en voyage.", choices: ["Plusieurs", "Tout", "Chacun", "Aucun"], correctIdx: 0 },
        { sentence: "___ de ces voitures n'est à vendre.", choices: ["Aucune", "Aucun", "Tous", "Plusieurs"], correctIdx: 0 },
        { sentence: "Je n'en veux ___ !", choices: ["aucune", "aucun", "toutes", "plusieurs"], correctIdx: 0 },
        { sentence: "Je n'oublie ___ ?", choices: ["rien", "tout", "chacun", "plusieurs"], correctIdx: 0 },
        { sentence: "… ___ d'important.", choices: ["quelque chose", "quelques-uns", "tout", "aucun"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez tout, tous, chacune, quelques-uns, plusieurs, aucune ou rien.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "J'ai ___ ?", hint: "totalité choses", answer: "tout" },
        { sentence: "Les guides, je les ai ___ lus.", hint: "pronom", answer: "tous" },
        { sentence: "___ de ces voitures est à vendre.", hint: "individualité", answer: "Chacune" },
        { sentence: "Des reportages, j'en ai fait ___ .", hint: "petit nombre", answer: "quelques-uns" },
        { sentence: "___ voudraient venir.", hint: "pluralité", answer: "Plusieurs" },
        { sentence: "___ de ces voitures n'est à vendre.", hint: "zéro", answer: "Aucune" },
        { sentence: "Ces voitures, je n'en veux ___ !", hint: "zéro + en", answer: "aucune" },
        { sentence: "Je n'oublie ___ ?", hint: "négation", answer: "rien" },
        { sentence: "On n'est pas ___ les mêmes.", hint: "pronom", answer: "tous" },
        { sentence: "___ va bien !", hint: "choses", answer: "Tout" },
      ],
    },
  ],
};

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
      type: "text",
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
      type: "text",
      allBullets: true,
      label: "Totalité : tout / toute / tous / toutes",
      items: [
        "{a}Tout{/a} = toutes les choses (jamais des personnes). → Tout va bien ! ; J'ai tout ?",
        "{a}Tous, toutes{/a} : personnes ou choses. Sujets rarement seuls : Les voisins viennent tous.",
        "Souvent avec {a}les{/a} ou {a}leur{/a}, accord. → Les guides, il les a tous lus.",
      ],
    },
    {
      type: "text",
      label: "Individualité : chacun(e)",
      items: [
        "Toujours singulier. → Chacune de ces voitures est à vendre. ; J'ai demandé des conseils à chacun de mes amis.",
      ],
    },
    {
      type: "text",
      allBullets: true,
      label: "Pluralité : quelques-un(e)s, plusieurs, certain(e)s",
      items: [
        "{a}Quelques-uns/unes{/a} : petit nombre. ; {a}Plusieurs{/a} : plus de deux, sans précision. ; {a}Certains/certaines{/a} : une partie.",
        "En complément : avec {a}en{/a}, accord. → Des reportages, j'en ai fait quelques-uns.",
      ],
    },
    {
      type: "text",
      label: "Quantité nulle : aucun(e)",
      items: [
        "Toujours singulier, avec {a}ne{/a}. → Aucune de ces voitures n'est à vendre.",
        "Avec {a}en{/a} : accord en genre. → Ces voitures, je n'en veux aucune !",
      ],
    },
    {
      type: "heading",
      text: "Formes (2)",
    },
    {
      type: "text",
      label: "Identité / ressemblance : le même, la même, les mêmes",
      items: [
        "Singulier ou pluriel ; en général compléments. → Ces rollers sont à toi ? — J'ai les mêmes !",
      ],
    },
    {
      type: "text",
      label: "Différence : l'autre, les autres, un(e) autre, d'autres",
      items: [
        "Singulier ou pluriel. → J'ai retrouvé une de mes chaussettes mais pas l'autre.",
        "{a}Un(e) autre, d'autres{/a} en complément : avec {a}en{/a}. → J'en ai une autre dans mon sac.",
        "{a}L'un… l'autre{/a} / {a}les uns… les autres{/a} pour opposer. → L'un est belge et l'autre est suisse.",
      ],
    },
    {
      type: "text",
      label: "Imprécision : quelque chose, quelqu'un, quelque part",
      items: [
        "Chose, personne ou lieu sans précision ; invariables. → Quelqu'un est venu. ; Tu entends quelque chose ? ; J'ai rangé mon portable quelque part.",
        "Suivis de {a}de/d' + adjectif{/a} (ms). → Quelqu'un de courageux. ; Quelque chose d'important.",
      ],
    },
    {
      type: "text",
      allBullets: true,
      label: "Indifférence : n'importe quoi / qui / où / quand / comment / lequel…",
      items: [
        "Le choix n'importe pas. → Donne-moi n'importe quoi. ; N'importe qui peut m'aider. ; Va n'importe où !",
        "Parfois sens négatif : Tu dis n'importe quoi ! ; Je ne parle pas à n'importe qui ! ; Tu chantes n'importe comment !",
      ],
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "text",
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
        { sentence: "___ va bien !", choices: ["Tout", "Tous", "Chacun"], correctIdx: 0 },
        { sentence: "Les voisins viennent ___ .", choices: ["tous", "tout", "chacun"], correctIdx: 0 },
        { sentence: "J'en ai fait ___ .", choices: ["quelques-uns", "quelques uns", "quelque-uns"], correctIdx: 0 },
        { sentence: "___ de ces voitures n'est à vendre.", choices: ["Aucune", "Aucun", "Tous"], correctIdx: 0 },
        { sentence: "J'ai ___ ! (rollers identiques)", choices: ["les mêmes", "le même", "l'autre"], correctIdx: 0 },
        { sentence: "Pas ___ chaussette.", choices: ["l'autre", "les mêmes", "quelqu'un"], correctIdx: 0 },
        { sentence: "J'en ai ___ dans mon sac.", choices: ["une autre", "l'autre", "les mêmes"], correctIdx: 0 },
        { sentence: "___ est belge et l'autre est suisse.", choices: ["L'un", "L'autre", "Quelqu'un"], correctIdx: 0 },
        { sentence: "___ est venu te voir hier.", choices: ["Quelqu'un", "Quelque chose", "N'importe quoi"], correctIdx: 0 },
        { sentence: "Quelque chose ___ important.", choices: ["d'", "de la", "du"], correctIdx: 0 },
        { sentence: "Donne-moi ___ à boire.", choices: ["n'importe quoi", "quelqu'un", "l'autre"], correctIdx: 0 },
        { sentence: "Tu dis ___ ! (= des bêtises)", choices: ["n'importe quoi", "quelque chose", "n'importe qui"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez le pronom indéfini qui convient.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "J'ai ___ ?", hint: "totalité", answer: "tout" },
        { sentence: "Je les ai ___ lus.", hint: "pronom", answer: "tous" },
        { sentence: "J'en ai fait ___ .", hint: "petit nombre", answer: "quelques-uns" },
        { sentence: "Je n'en veux ___ !", hint: "zéro", answer: "aucune" },
        { sentence: "J'ai ___ ! (identique)", hint: "ressemblance", answer: "les mêmes" },
        { sentence: "Pas ___ . (chaussette)", hint: "différence", answer: "l'autre" },
        { sentence: "J'en ai ___ .", hint: "une autre", answer: "une autre" },
        { sentence: "___ est venu.", hint: "personne", answer: "Quelqu'un" },
        { sentence: "J'ai rangé ça ___ .", hint: "lieu", answer: "quelque part" },
        { sentence: "Va ___ !", hint: "indifférence", answer: "n'importe où" },
      ],
    },
  ],
};

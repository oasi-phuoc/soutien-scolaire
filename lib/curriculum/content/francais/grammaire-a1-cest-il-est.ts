import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_CEST: GrammarLesson = {
  slug: "a1-gr-cest-il-est",
  code: "R1.9",
  level: "A1",
  title: "C'est ou il est ?",
  theory: [
    // ── Titre ──────────────────────────────────────────────────────────────────
    { type: "heading", text: "C'est ou Il est / Elle est ?" },

    {
      type: "plain_list",
      items: [
        "Les expressions {a}c'est{/a} et {a}il est{/a} servent toutes les deux à présenter ou décrire quelqu'un ou quelque chose, mais elles ne s'utilisent pas de la même manière.",
      ],
    },

    // ── 1. C'EST ───────────────────────────────────────────────────────────────
    { type: "heading", text: "1. C'est", sub: true },

    {
      type: "rule",
      text: "{a}C'est{/a} = cela est. On utilise c'est pour identifier, présenter ou donner une information générale.",
      examples: [
        { correct: "C'est un professeur." },
        { correct: "C'est Sophie." },
        { correct: "C'est moi." },
      ],
    },

    {
      type: "highlight",
      label: "A. Devant un nom avec article — C'est + article + nom",
      items: [
        "C'est {a}un{/a} professeur.",
        "C'est {a}une{/a} maison.",
        "C'est {a}le{/a} directeur.",
        "C'est {a}la{/a} pharmacie.",
        "❌ Il est un professeur.",
      ],
      noBulletItems: [4],
    },

    {
      type: "highlight",
      label: "B. Devant un prénom ou un nom propre",
      items: [
        "C'est {a}Sophie{/a}.",
        "C'est {a}Ali{/a}.",
        "C'est {a}Paris{/a}.",
        "C'est {a}Marie Dupont{/a}.",
      ],
    },

    {
      type: "highlight",
      label: "C. Devant un pronom",
      items: [
        "C'est {a}moi{/a}.",
        "C'est {a}lui{/a}.",
        "C'est {a}elle{/a}.",
        "C'est {a}nous{/a}.",
      ],
    },

    {
      type: "highlight",
      label: "D. Pour identifier quelque chose",
      items: [
        "Qu'est-ce que c'est ?",
        "C'est un ordinateur.",
        "C'est mon téléphone.",
        "C'est une voiture.",
      ],
      noBulletItems: [0],
    },

    {
      type: "highlight",
      label: "E. Pour donner une date ou une heure",
      items: [
        "C'est {a}lundi{/a}.",
        "C'est {a}le 15 mars{/a}.",
        "C'est {a}midi{/a}.",
        "C'est {a}trois heures{/a}.",
      ],
    },

    // ── 2. IL EST ──────────────────────────────────────────────────────────────
    { type: "heading", text: "2. Il est / Elle est", sub: true },

    {
      type: "rule",
      text: "{a}Il est{/a} / {a}Elle est{/a} sert à décrire une personne ou une chose.",
      examples: [
        { correct: "Il est grand. (adjectif)" },
        { correct: "Elle est médecin. (profession sans article)" },
        { correct: "Il est suisse. (nationalité)" },
      ],
    },

    {
      type: "highlight",
      label: "A. Devant un adjectif — Il est + adjectif",
      items: [
        "Il est {a}grand{/a}.",
        "Il est {a}gentil{/a}.",
        "Il est {a}malade{/a}.",
        "Il est {a}fatigué{/a}.",
        "❌ C'est grand. (pour parler d'une personne)",
      ],
      noBulletItems: [4],
    },

    {
      type: "highlight",
      label: "B. Devant une profession (sans article)",
      items: [
        "Il est {a}professeur{/a}.",
        "Elle est {a}médecin{/a}.",
        "Il est {a}chauffeur{/a}.",
        "Elle est {a}infirmière{/a}.",
        "❌ Il est un professeur.",
        "❌ Elle est une médecin.",
      ],
      noBulletItems: [4, 5],
    },

    {
      type: "highlight",
      label: "C. Devant une nationalité",
      items: [
        "Il est {a}suisse{/a}.",
        "Elle est {a}française{/a}.",
        "Il est {a}portugais{/a}.",
        "Elle est {a}ukrainienne{/a}.",
      ],
    },

    {
      type: "highlight",
      label: "D. Devant une religion",
      items: [
        "Il est {a}musulman{/a}.",
        "Elle est {a}chrétienne{/a}.",
        "Il est {a}bouddhiste{/a}.",
      ],
    },

    // ── 3. COMPARAISON ─────────────────────────────────────────────────────────
    { type: "heading", text: "3. Comparaison", sub: true },

    {
      type: "grid",
      headers: ["C'est …", "Il est / Elle est …"],
      equalCols: true,
      rows: [
        ["C'est {a}un{/a} professeur.", "Il est {a}professeur{/a}."],
        ["C'est {a}une{/a} infirmière.", "Elle est {a}infirmière{/a}."],
        ["C'est {a}Sophie{/a}.", "Elle est {a}gentille{/a}."],
        ["C'est {a}mon{/a} frère.", "Il est {a}grand{/a}."],
        ["C'est {a}une{/a} voiture.", "Elle est {a}rapide{/a}."],
      ],
    },

    // ── 4. AVEC UN ADJECTIF ────────────────────────────────────────────────────
    { type: "heading", text: "4. Avec un adjectif", sub: true },

    {
      type: "rule",
      text: "Quand on désigne une personne avec un nom + adjectif, utilise {a}c'est{/a} (article + nom + adjectif).",
      examples: [
        { correct: "C'est un homme {a}gentil{/a}. (article + nom + adjectif)" },
        { correct: "Il est {a}gentil{/a}. (adjectif seul)" },
      ],
    },
    {
      type: "note",
      text: "❌ C'est gentil. → incorrect pour décrire une personne. Valide uniquement pour commenter une situation générale : C'est gentil de ta part !",
    },

    // ── MÉTHODE RAPIDE ─────────────────────────────────────────────────────────
    { type: "heading", text: "Méthode rapide", sub: true },

    {
      type: "highlight",
      label: "Qui est-ce ? → C'est",
      items: [
        "Qui est-ce ? → C'est le médecin.",
        "Qui est-ce ? → C'est Ali.",
        "Qui est-ce ? → C'est un professeur.",
      ],
      noBulletItems: [0, 1, 2],
      inlineArrows: true,
    },

    {
      type: "highlight",
      label: "Comment est-il / elle ? → Il est / Elle est",
      items: [
        "Comment est-il ? → Il est gentil.",
        "Comment est-elle ? → Elle est médecin.",
        "Comment est-il ? → Il est suisse.",
      ],
      noBulletItems: [0, 1, 2],
      inlineArrows: true,
    },

    // ── RÉSUMÉ ─────────────────────────────────────────────────────────────────
    { type: "heading", text: "Résumé", sub: true },

    {
      type: "highlight",
      label: "C'est …",
      items: [
        "nom avec article → C'est {a}un{/a} professeur.",
        "prénom → C'est {a}Ali{/a}.",
        "pronom → C'est {a}moi{/a}.",
        "chose → C'est {a}une{/a} voiture.",
        "date ou heure → C'est {a}lundi{/a}.",
      ],
    },

    {
      type: "highlight",
      label: "Il est / Elle est …",
      items: [
        "adjectif → Il est {a}gentil{/a}.",
        "profession sans article → Elle est {a}médecin{/a}.",
        "nationalité → Il est {a}suisse{/a}.",
        "religion → Elle est {a}chrétienne{/a}.",
      ],
    },

    // ── ATTENTION ──────────────────────────────────────────────────────────────
    {
      type: "note",
      text: "Profession : Il est professeur ✅ — Il est un professeur ❌\nIdentification : C'est un professeur ✅ — C'est professeur ❌",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Exercice 1",
      instruction: "Choisissez C'est ou Il/Elle est.",
      items: [
        { sentence: "___ professeur de français.", choices: ["Il est", "C'est", "Elle est", "C'est un"], correctIdx: 0 },
        { sentence: "___ un ami de Thomas.", choices: ["C'est", "Il est", "Elle est", "C'est un"], correctIdx: 0 },
        { sentence: "___ intelligente et curieuse.", choices: ["Elle est", "C'est", "Il est", "C'est une"], correctIdx: 0 },
        { sentence: "___ la maison de mes parents.", choices: ["C'est", "Il est", "Elle est", "C'est une"], correctIdx: 0 },
        { sentence: "___ une bonne idée !", choices: ["C'est", "Il est", "Elle est", "C'est un"], correctIdx: 0 },
        { sentence: "___ français et il parle bien anglais.", choices: ["Il est", "C'est", "C'est un", "Elle est"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Complétez avec C'est, Il est ou Elle est.",
      items: [
        { sentence: "___ (C'est / Il est) mon frère. ___ (C'est / Il est) étudiant.", hint: "identifier puis décrire", answer: "c'est" },
        { sentence: "Regarde cette voiture ! ___ (C'est / Elle est) belle.", hint: "décrire avec adjectif", answer: "elle est" },
        { sentence: "___ (C'est / Il est) un très bon restaurant.", hint: "identifier avec article", answer: "c'est" },
        { sentence: "Ma mère ? ___ (C'est / Elle est) médecin.", hint: "profession sans article", answer: "elle est" },
        { sentence: "___ (C'est / Il est) le directeur de l'école.", hint: "identifier avec article défini", answer: "c'est" },
      ],
    },
    {
      type: "classify",
      title: "Exercice 3",
      instruction: "Classez chaque phrase : identification ou description.",
      categories: ["Identification (C'est)", "Description (Il/Elle est)"],
      items: [
        { word: "C'est une étudiante en médecine.",   categoryIdx: 0 },
        { word: "Il est très patient.",               categoryIdx: 1 },
        { word: "C'est mon livre de grammaire.",      categoryIdx: 0 },
        { word: "Elle est italienne.",                categoryIdx: 1 },
        { word: "C'est le train pour Paris.",         categoryIdx: 0 },
        { word: "Il est architecte.",                 categoryIdx: 1 },
      ],
    },
    {
      type: "word_order",
      title: "Exercice 4",
      instruction: "Remettez les mots dans le bon ordre.",
      items: [
        {
          sentence: "C'est une bonne professeure.",
          words: ["C'est", "une", "bonne", "professeure"],
        },
        {
          sentence: "Il est grand et sportif.",
          words: ["Il", "est", "grand", "et", "sportif"],
        },
        {
          sentence: "C'est la voiture de mon père.",
          words: ["C'est", "la", "voiture", "de", "mon", "père"],
        },
      ],
    },
  ],
};

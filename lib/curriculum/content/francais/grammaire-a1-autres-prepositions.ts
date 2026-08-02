import type { GrammarLesson } from "../../grammar-data";

/** Unité 36 — Autres prépositions et adverbes (G4.6) */
export const A1_GR_AUTRES_PREPOSITIONS: GrammarLesson = {
  slug: "a1-gr-autres-prepositions",
  code: "G4.6",
  level: "A1",
  title: "Autres prépositions et adverbes",
  theory: [
    {
      type: "heading",
      text: "À, chez, de",
    },
    {
      type: "plain_list",
      items: [
        "{a}À{/a} et {a}chez{/a} : le lieu où l'on est ou où l'on va. {a}Chez{/a} s'emploie avec des personnes. → Chez moi.",
        "{a}De{/a} : le lieu d'où l'on vient.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["", "Nom d'un lieu", "Nom d'une personne"],
      boldFirstCol: true,
      rows: [
        ["Je suis / Je vais", "à la piscine ; à l'opéra ; au centre-ville ; aux toilettes", "chez moi ; chez mes amis ; chez le médecin"],
        ["Je sors / Je reviens", "de la piscine ; de l'opéra ; du théâtre ; des toilettes", "de chez moi ; de chez mes amis ; de chez le médecin"],
      ],
    },
    {
      type: "note",
      text: "Expressions figées avec {a}à{/a} : à la télé ; à la radio.",
    },
    {
      type: "heading",
      text: "Sur, dans, sous",
    },
    {
      type: "plain_list",
      items: [
        "{a}Sur{/a} ≠ {a}sous{/a}. → Le vélo est sur le toit. ; Il y a un chat sous la voiture.",
        "{a}Dans{/a} = à l'intérieur. → Les bagages sont dans le coffre.",
        "Expressions : sur Internet, sur son blog, sur le répondeur ; dans le journal, dans la rue ; sous la pluie.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Ici, là, là-bas",
    },
    {
      type: "plain_list",
      items: [
        "Employés seuls, {a}ici{/a} ≈ {a}là{/a}, mais {a}là{/a} est plus courant. → Tu es là ? ; Je suis là.",
        "Pour opposer deux endroits : Michel, assieds-toi ici et Marie, assieds-toi là.",
        "{a}Là-bas{/a} : un endroit plus éloigné. → Regarde là-bas !",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Prépositions et adverbes",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Ils vont ___ l'opéra.", choices: ["à", "de", "chez", "sur"], correctIdx: 0 },
        { sentence: "Ils sortent ___ l'opéra.", choices: ["de", "à", "chez", "dans"], correctIdx: 0 },
        { sentence: "Je vais ___ mes amis.", choices: ["chez", "à", "de", "sur"], correctIdx: 0 },
        { sentence: "Je reviens ___ chez le médecin.", choices: ["de", "à", "du", "des"], correctIdx: 0 },
        { sentence: "Je suis ___ centre-ville.", choices: ["au", "à le", "en", "chez"], correctIdx: 0 },
        { sentence: "Le vélo est ___ le toit.", choices: ["sur", "sous", "dans", "à"], correctIdx: 0 },
        { sentence: "Les bagages sont ___ le coffre.", choices: ["dans", "sur", "sous", "chez"], correctIdx: 0 },
        { sentence: "Il y a un chat ___ la voiture.", choices: ["sous", "sur", "dans", "à"], correctIdx: 0 },
        { sentence: "J'ai vu un reportage ___ la télé.", choices: ["à", "dans", "sur", "de"], correctIdx: 0 },
        { sentence: "Regarde ___ ! (loin)", choices: ["là-bas", "ici", "chez", "sous"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez à, au, aux, de, du, des, chez, sur, dans, sous, ici, là ou là-bas.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je vais ___ la piscine.", hint: "lieu", answer: "à" },
        { sentence: "Je sors ___ théâtre.", hint: "de + le", answer: "du" },
        { sentence: "Je vais ___ moi.", hint: "personne", answer: "chez" },
        { sentence: "Je reviens ___ chez mes amis.", hint: "origine personne", answer: "de" },
        { sentence: "Je vais ___ toilettes.", hint: "à + les", answer: "aux" },
        { sentence: "Le vélo est ___ le toit.", hint: "dessus", answer: "sur" },
        { sentence: "Les bagages sont ___ le coffre.", hint: "intérieur", answer: "dans" },
        { sentence: "Le chat est ___ la voiture.", hint: "dessous", answer: "sous" },
        { sentence: "Assieds-toi ___ . (proche, contraste)", hint: "ici/là", answer: "ici" },
        { sentence: "Regarde ___ !", hint: "loin", answer: "là-bas" },
      ],
    },
  ],
};

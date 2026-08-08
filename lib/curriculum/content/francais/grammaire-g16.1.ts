import type { GrammarLesson } from "../../grammar-data";

/** Unité 67 — L'impératif (G4.37) */
export const A1_GR_IMPERATIF: GrammarLesson = {
  slug: "a1-gr-imperatif",
  code: "G4.37",
  level: "A1",
  title: "L'impératif",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Ordre ou consigne : Ne faites pas de bruit ! Éteignez vos portables !",
        "Conseil : Restons ici, c'est mieux !",
        "Souhait : Passe une bonne soirée !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjugaison",
    },
    {
      type: "text",
      items: [
        "Trois personnes seulement : {a}tu, nous, vous{/a} ; pas de pronom sujet. → Entre ! Entrons ! Entrez !",
        "Verbes en {a}-er{/a} : pas de {a}-s{/a} à la 2e personne du singulier, sauf devant {a}en{/a} ou {a}y{/a}. → Réserve des places ! ; Réserves-en trois ! ; Va à l'opéra ! ; Vas-y !",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["Verbe", "tu", "nous", "vous"],
      boldFirstCol: true,
      rows: [
        ["être", "sois", "soyons", "soyez"],
        ["avoir", "aie", "ayons", "ayez"],
        ["savoir", "sache", "sachons", "sachez"],
      ],
    },
    {
      type: "note",
      text: "{a}Vouloir{/a} : forme de politesse {a}Veuillez{/a}. → Veuillez vous asseoir. ; Veuillez agréer…",
    },
    {
      type: "note",
      text: "À l'écrit, souvent un point d'exclamation.",
    },
    {
      type: "heading",
      text: "Impératif et pronoms",
    },
    {
      type: "text",
      items: [
        "Affirmatif : pronoms après le verbe, avec trait d'union ; {a}moi / toi{/a} (pas me / te). → Regarde-moi ! ; Assieds-toi ! ; Appelez-les !",
        "Négatif : pronoms devant le verbe. → Ne me regarde pas ! ; Ne t'assieds pas ! ; Ne les appelez pas !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Intonation",
    },
    {
      type: "text",
      items: [
        "L'intonation varie selon l'ordre, la consigne, le conseil ou le souhait.",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Impératif",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ vos portables !", choices: ["Éteignez", "Éteignez-vous", "Éteindre"], correctIdx: 0 },
        { sentence: "___ ici, c'est mieux !", choices: ["Restons", "Restons-nous", "Nous restons"], correctIdx: 0 },
        { sentence: "___ des places ! (tu, réserver)", choices: ["Réserve", "Réserves", "Réservez-tu"], correctIdx: 0 },
        { sentence: "___ -en trois !", choices: ["Réserves", "Réserve", "Réservez"], correctIdx: 0 },
        { sentence: "___ -y !", choices: ["Vas", "Va", "Allez"], correctIdx: 0 },
        { sentence: "___ les bienvenus. (être, vous)", choices: ["Soyez", "Êtes", "Sois"], correctIdx: 0 },
        { sentence: "___ vous asseoir.", choices: ["Veuillez", "Voulez", "Veux"], correctIdx: 0 },
        { sentence: "___ -moi !", choices: ["Regarde", "Regarde me", "Me regarde"], correctIdx: 0 },
        { sentence: "Ne ___ regarde pas !", choices: ["me", "moi", "mon"], correctIdx: 0 },
        { sentence: "___ -toi !", choices: ["Assieds", "Assieds-te", "T'assieds"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez la forme à l'impératif ou le pronom.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ ! (entrer, tu)", hint: "impératif", answer: "Entre" },
        { sentence: "___ ! (entrer, nous)", hint: "impératif", answer: "Entrons" },
        { sentence: "___ ! (entrer, vous)", hint: "impératif", answer: "Entrez" },
        { sentence: "___ à l'opéra ! (aller, tu)", hint: "sans s", answer: "Va" },
        { sentence: "___ -y !", hint: "avec y", answer: "Vas" },
        { sentence: "___ patient ! (être, tu)", hint: "irrégulier", answer: "Sois" },
        { sentence: "___ confiance ! (avoir, tu)", hint: "irrégulier", answer: "Aie" },
        { sentence: "Téléphone-___ !", hint: "à moi", answer: "moi" },
        { sentence: "Ne ___ téléphone pas !", hint: "négation", answer: "me" },
        { sentence: "Appelez-___ !", hint: "eux", answer: "les" },
      ],
    },
  ],
};

import type { GrammarLesson } from "../../grammar-data";

/** Unité 25 — Les adjectifs démonstratifs (G3.5) */
export const A1_GR_L18: GrammarLesson = {
  slug: "a1-gr-l18",
  code: "G3.5",
  level: "A1",
  title: "Les adjectifs démonstratifs",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Pour désigner une personne ou une chose que l'on montre. → Regarde, ces tableaux sont vraiment intéressants.",
        "Pour désigner une personne ou une chose déjà mentionnée. → Le tableau est de Manet. Cet artiste a vécu au XIXe siècle.",
        "Pour désigner une période en cours ou très proche. → Cette semaine, je vais au musée du Louvre ; ils arrivent ce soir.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "text",
      text: "L'adjectif démonstratif se place devant le nom et s'accorde avec lui.",
    },
    {
      type: "grid",
      headers: ["Genre / Nombre", "Forme", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Masculin singulier", "ce", "Ce tableau est de Manet."],
        ["Féminin singulier", "cette", "Cette femme est appelée « l'Arlésienne »."],
        ["Pluriel (m. et f.)", "ces", "Ces tableaux sont au musée d'Orsay. / Ces statues sont au musée Rodin."],
      ],
    },
    {
      type: "note",
      text: "Quand le nom masculin commence par une voyelle ou un h muet : {a}ce{/a} → {a}cet{/a}. → Cet artiste est très connu.",
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "text",
      items: [
        "Enchaînement avec {a}cet{/a} et {a}cette{/a} devant une voyelle ou un h muet. → cet artiste ; cette artiste ; cette histoire.",
        "Liaison avec {a}ces{/a}. → ces objets ; ces horaires.",
        "{a}Cet{/a} et {a}cette{/a} ont la même prononciation. → cet ami = cette amie.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Démonstratifs",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ tableau est de Van Gogh.", choices: ["Ce", "Cet", "Cette"], correctIdx: 0 },
        { sentence: "___ femme est appelée « l'Arlésienne ».", choices: ["Cette", "Ce", "Cet"], correctIdx: 0 },
        { sentence: "___ tableaux sont vraiment intéressants.", choices: ["Ces", "Ce", "Cet"], correctIdx: 0 },
        { sentence: "___ artiste a vécu au XIXe siècle.", choices: ["Cet", "Ce", "Cette"], correctIdx: 0 },
        { sentence: "___ semaine, je vais au musée.", choices: ["Cette", "Ce", "Cet"], correctIdx: 0 },
        { sentence: "___ statues sont au musée Rodin.", choices: ["Ces", "Cette", "Ce"], correctIdx: 0 },
        { sentence: "J'aime ___ appartement.", choices: ["cet", "ce", "cette"], correctIdx: 0 },
        { sentence: "Regarde ___ voiture.", choices: ["cette", "ce", "cet"], correctIdx: 0 },
        { sentence: "Prends ___ bus !", choices: ["ce", "cet", "cette"], correctIdx: 0 },
        { sentence: "___ hôtel est très connu.", choices: ["Cet", "Ce", "Cette"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez ce, cet, cette ou ces.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ tableau est célèbre.", hint: "ms + consonne", answer: "Ce" },
        { sentence: "___ artiste est très connu.", hint: "ms + voyelle", answer: "Cet" },
        { sentence: "___ femme s'appelle l'Arlésienne.", hint: "fs", answer: "Cette" },
        { sentence: "___ tableaux sont au musée.", hint: "pluriel", answer: "Ces" },
        { sentence: "___ semaine, je vais au Louvre.", hint: "fs période", answer: "Cette" },
        { sentence: "___ hôtel est grand.", hint: "ms + h muet", answer: "Cet" },
        { sentence: "___ objets sont anciens.", hint: "pluriel + voyelle", answer: "Ces" },
        { sentence: "___ histoire est intéressante.", hint: "fs + voyelle", answer: "Cette" },
        { sentence: "___ bus arrive.", hint: "ms + consonne", answer: "Ce" },
        { sentence: "___ statues sont belles.", hint: "pluriel f", answer: "Ces" },
      ],
    },
  ],
};

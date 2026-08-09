import type { GrammarLesson } from "../../grammar-data";

/** Unité 59 — Les pronoms possessifs (G4.29) */
export const A1_GR_PRONOMS_POSSESSIFS: GrammarLesson = {
  slug: "a1-gr-pronoms-possessifs",
  code: "G4.29",
  level: "A1",
  title: "Les pronoms possessifs",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Le pronom possessif remplace le groupe adjectif possessif + nom. → le tien = ton portable.",
        "Exemple : Quelqu'un a oublié son portable. Alex, c'est le tien ?",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "text",
      text: "La forme dépend du possesseur et du nom remplacé (genre et nombre).",
    },
    {
      type: "grid",
      headers: ["Adjectif + nom", "Pronom", "Adjectif + nom", "Pronom"],
      rows: [
        ["mon collègue", "le mien", "notre studio", "le nôtre"],
        ["ma sœur", "la mienne", "notre maison", "la nôtre"],
        ["mes copains", "les miens", "nos meubles", "les nôtres"],
        ["mes cousines", "les miennes", "nos affaires", "les nôtres"],
        ["ton manteau", "le tien", "votre père", "le vôtre"],
        ["ta veste", "la tienne", "votre mère", "la vôtre"],
        ["tes vêtements", "les tiens", "vos parents", "les vôtres"],
        ["tes chaussures", "les tiennes", "vos sœurs", "les vôtres"],
        ["son sac", "le sien", "leur chien", "le leur"],
        ["sa valise", "la sienne", "leur tortue", "la leur"],
        ["ses mouchoirs", "les siens", "leurs animaux", "les leurs"],
        ["ses clés", "les siennes", "leurs plantes", "les leurs"],
      ],
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "text",
      text: "Différence entre adjectifs {a}notre / votre{/a} et pronoms {a}nôtre / vôtre{/a}. → C'est bien votre voiture ? — Oui, c'est la nôtre.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Pronoms possessifs",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Alex, c'est ___ ? (ton portable)", choices: ["le tien", "la tienne", "le sien"], correctIdx: 0 },
        { sentence: "mon collègue → ___", choices: ["le mien", "la mienne", "les miens"], correctIdx: 0 },
        { sentence: "ma sœur → ___", choices: ["la mienne", "le mien", "les miennes"], correctIdx: 0 },
        { sentence: "mes copains → ___", choices: ["les miens", "les miennes", "le mien"], correctIdx: 0 },
        { sentence: "notre maison → ___", choices: ["la nôtre", "le nôtre", "la vôtre"], correctIdx: 0 },
        { sentence: "vos parents → ___", choices: ["les vôtres", "les nôtres", "les leurs"], correctIdx: 0 },
        { sentence: "son sac → ___", choices: ["le sien", "la sienne", "le tien"], correctIdx: 0 },
        { sentence: "ses clés → ___", choices: ["les siennes", "les siens", "les tiennes"], correctIdx: 0 },
        { sentence: "leur chien → ___", choices: ["le leur", "la leur", "le sien"], correctIdx: 0 },
        { sentence: "C'est ___ voiture ? — Oui, c'est la nôtre.", choices: ["votre", "vôtre", "notre"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez le pronom possessif.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "ton manteau → ___", hint: "ms", answer: "le tien" },
        { sentence: "ta veste → ___", hint: "fs", answer: "la tienne" },
        { sentence: "tes vêtements → ___", hint: "mp", answer: "les tiens" },
        { sentence: "notre studio → ___", hint: "ms", answer: "le nôtre" },
        { sentence: "nos affaires → ___", hint: "fp", answer: "les nôtres" },
        { sentence: "votre mère → ___", hint: "fs", answer: "la vôtre" },
        { sentence: "sa valise → ___", hint: "fs", answer: "la sienne" },
        { sentence: "ses mouchoirs → ___", hint: "mp", answer: "les siens" },
        { sentence: "leur tortue → ___", hint: "fs", answer: "la leur" },
        { sentence: "leurs plantes → ___", hint: "fp", answer: "les leurs" },
      ],
    },
  ],
};

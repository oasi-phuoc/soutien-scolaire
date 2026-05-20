import type { VocabLesson } from "../../vocabulary-data";

export const A1_VOC_DESCRIPTION: VocabLesson = {
  slug: "a1-voc-description",
  code: "V.3",
  level: "A1",
  title: "La description",
  theory: [
    { type: "heading", text: "La description physique" },
    {
      type: "grid",
      headers: ["Vocabulaire", "Vocabulaire", "Vocabulaire"],
      rows: [
        ["Grand(e)", "Petit(e)", ""],
        ["Blond(e)", "Brun(e)", "Roux / Rousse"],
        ["Jeune", "Âgé(e)", ""],
      ],
    },
    { type: "heading", text: "Les cheveux", sub: true },
    {
      type: "grid",
      headers: ["Longueur", "Longueur", "Longueur"],
      rows: [
        ["Court(e)", "Mi-long(ue)", "Long(ue)"],
      ],
    },
    {
      type: "grid",
      headers: ["Forme", "Forme", "Forme"],
      rows: [
        ["Ondulé(e)", "Frisé(e)", "Raide"],
      ],
    },
    {
      type: "highlight",
      label: "Grammaire",
      items: [
        "Pour décrire une personne, il faut utiliser :",
        "le verbe « être » + adjectif au masculin ou au féminin",
        "Il est grand. → Elle est grande.",
        "Il est blond. → Elle est blonde.",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Exercice 1",
      instruction: "Indiquez si le mot est Singulier masculin (SM), Singulier féminin (SF), Pluriel masculin (PM) ou Pluriel féminin (PF).",
      items: [
        { sentence: "Rousses", choices: ["SM", "SF", "PM", "PF"], correctIdx: 3 },
        { sentence: "Âgé", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "jeunes", choices: ["SM", "SF", "PM", "PF"], correctIdx: 2 },
        { sentence: "Petite", choices: ["SM", "SF", "PM", "PF"], correctIdx: 1 },
        { sentence: "Brunes", choices: ["SM", "SF", "PM", "PF"], correctIdx: 3 },
        { sentence: "mari", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "marié", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "veufs", choices: ["SM", "SF", "PM", "PF"], correctIdx: 2 },
        { sentence: "célibataire", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "Grands", choices: ["SM", "SF", "PM", "PF"], correctIdx: 2 },
      ],
    },
    {
      type: "write",
      title: "Exercice 2",
      instruction: "Complétez les phrases avec les adjectifs qui conviennent.",
      prompts: [
        "Il …",
        "Elles …",
        "Ils …",
        "Elle …",
        "Il …",
        "Elle …",
        "Ils …",
        "Il … / Elle …",
        "Il … / Elle …",
      ],
    },
    {
      type: "write",
      title: "Exercice 3",
      instruction:
        "Écrivez les phrases selon l'exemple. Utilisez les adjectifs possessifs.\n\n" +
        "Exemple : J'ai des cheveux longs. → Mes cheveux sont longs.",
      prompts: [
        "Elle a des cheveux bruns. →",
        "Tu as une longue robe. →",
        "Elles ont des yeux verts. →",
        "Vous avez une paire de chaussures neuves. →",
        "Nous avons un sac d'école très lourd. →",
        "J'ai des mains douces et fines. →",
        "Ils ont des vêtements élégants. →",
      ],
    },
    {
      type: "write",
      title: "Exercice 4",
      instruction:
        "Vous êtes en vacances avec la famille de Léa. Vous écrivez une carte postale à votre mère pour présenter sa famille. " +
        "Écrivez entre 30 et 40 mots.",
      prompts: ["Votre carte postale :"],
    },
    {
      type: "fill",
      title: "Exercice 5",
      instruction: "Complétez avec l'adjectif masculin ou féminin.",
      items: [
        { sentence: "Il est ___ / Elle est grosse.", hint: "gros", answer: "gros" },
        { sentence: "Il est beau / Elles sont ___.", hint: "belles", answer: "belles" },
        { sentence: "Il est grand / Elle est ___.", hint: "grande", answer: "grande" },
        { sentence: "Ils sont ___ / Elle est mince.", hint: "minces", answer: "minces" },
        { sentence: "Il est petit / Elles sont ___.", hint: "petites", answer: "petites" },
        { sentence: "Ils sont ___ / Elle est âgée.", hint: "âgés", answer: "âgés" },
        { sentence: "Il est ___ / Elle est jeune.", hint: "jeune", answer: "jeune" },
        { sentence: "Il est laid / Elles sont ___.", hint: "laides", answer: "laides" },
      ],
    },
    {
      type: "write",
      title: "Exercice 6",
      instruction:
        "Observez les personnages (Julie, Joan, Sophie, Jérémy, Nathan, Jodie, Marion, Alfred) et répondez aux questions.",
      prompts: [
        "Combien y a-t-il d'hommes et de femmes ?",
        "Qui a les cheveux longs ?",
        "Qui porte un chapeau ou une casquette ?",
        "Qui porte une barbe ?",
        "Qui est chauve ?",
      ],
    },
    {
      type: "match",
      title: "Exercice 7",
      instruction:
        "Associez les membres de la famille à leur numéro dans l'image.\n" +
        "(Image : 1 = Ma sœur, 2 = Ma mère, 4 = Mon père, 5 = Ma grand-mère, 6 = Mon grand-père, Moi = le garçon au centre)",
      pairs: [
        { left: "Mon frère", right: "bébé dans le landau" },
        { left: "Ma sœur", right: "1 — petite fille" },
        { left: "Ma mère", right: "2 — femme avec bébé" },
        { left: "Mon père", right: "4 — homme avec lunettes" },
        { left: "Ma grand-mère", right: "5 — dame âgée" },
        { left: "Mon grand-père", right: "6 — monsieur âgé" },
      ],
    },
    {
      type: "write",
      title: "Exercice 8",
      instruction: "Répondez aux questions avec une phrase complète.",
      prompts: [
        "Combien il y a de personnes dans ma famille ?",
        "Qui portent des lunettes ?",
        "Qui est le plus grand ?",
        "Qui est le plus petit ?",
      ],
    },
  ],
};

import type { VocabLesson } from "../../vocabulary-data";

export const A1_VOC_FAMILLE: VocabLesson = {
  slug: "a1-voc-famille",
  code: "V.2",
  level: "A1",
  title: "La famille",
  theory: [
    { type: "heading", text: "La famille" },
    {
      type: "grid",
      headers: ["Féminin", "Masculin"],
      equalCols: true,
      rows: [
        ["Une femme", "Un mari"],
        ["Une sœur", "Un frère"],
        ["Des parents", "Des enfants"],
        ["Une mère", "Une fille"],
        ["Un père", "Un fils"],
        ["Des grands-parents", "Des petits-enfants"],
      ],
    },
    { type: "heading", text: "La famille élargie", sub: true },
    {
      type: "grid",
      headers: ["Féminin", "Masculin"],
      equalCols: true,
      rows: [
        ["Ma tante", "Mon oncle"],
        ["Ma cousine", "Mon cousin"],
        ["Ma nièce", "Mon neveu"],
      ],
    },
    {
      type: "plain_list",
      noBulletItems: [0, 1, 2],
      items: [
        "Mon père et ma mère sont mes parents.",
        "Mon cousin, c'est le fils de mon oncle et de ma tante.",
        "Ma cousine, c'est la fille de mon oncle et de ma tante.",
      ],
    },
    { type: "heading", text: "La situation familiale", sub: true },
    {
      type: "grid",
      headers: ["Situation", "Situation"],
      equalCols: true,
      rows: [
        ["Célibataire", "En couple"],
        ["Marié(e)", "Pacsé(e)"],
        ["Divorcé(e)", "Séparé(e)"],
        ["Veuf", "Veuve"],
      ],
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Exercice 1",
      instruction: "Associez les termes.",
      pairs: [
        { left: "Des parents", right: "Des enfants" },
        { left: "Une mère", right: "Un père" },
        { left: "Un frère", right: "Une sœur" },
        { left: "Des grands-parents", right: "Des petits-enfants" },
        { left: "Une fille", right: "Un fils" },
        { left: "Une femme", right: "Un mari" },
      ],
    },
    {
      type: "qcm",
      title: "Exercice 2",
      instruction: "Entourez la forme correcte.",
      inlineChoices: true,
      items: [
        { sentence: "[ Ma / Mon ] sœur est mariée.", choices: ["Ma", "Mon"], correctIdx: 0 },
        { sentence: "[ Ton / Tes ] parents sont divorcés.", choices: ["Ton", "Tes"], correctIdx: 1 },
        { sentence: "[ Ses / Sa ] grands-parents sont âgés.", choices: ["Ses", "Sa"], correctIdx: 0 },
        { sentence: "[ Mon / Mes ] père est veuf.", choices: ["Mon", "Mes"], correctIdx: 0 },
        { sentence: "[ Son / Sa ] fille est brune.", choices: ["Son", "Sa"], correctIdx: 1 },
        { sentence: "[ Notre / Leurs ] enfants sont mariés.", choices: ["Notre", "Leurs"], correctIdx: 1 },
        { sentence: "[ Ma / Mon ] cousine habite à Genève.", choices: ["Ma", "Mon"], correctIdx: 0 },
        { sentence: "[ Ton / Ta ] sœur est très gentille.", choices: ["Ton", "Ta"], correctIdx: 1 },
      ],
    },
    {
      type: "fill",
      title: "Exercice 3",
      instruction: "Remplacez les mots entre crochets par l'adjectif possessif.",
      items: [
        { sentence: "C'est [à vous] ___ mari ?", hint: "votre", answer: "votre" },
        { sentence: "C'est [à elle] ___ fils ?", hint: "son", answer: "son" },
        { sentence: "C'est [à eux] ___ père ?", hint: "leur", answer: "leur" },
        { sentence: "C'est [à toi] ___ amie ?", hint: "ton", answer: "ton" },
        { sentence: "Ce sont [à nous] ___ enfants ?", hint: "nos", answer: "nos" },
        { sentence: "C'est [à lui] ___ fille ?", hint: "sa", answer: "sa" },
        { sentence: "C'est [à elles] ___ mère ?", hint: "leur", answer: "leur" },
      ],
    },
    {
      type: "qcm",
      title: "Exercice 4",
      instruction:
        "Lisez et soulignez la bonne réponse.\n\n" +
        "NOTRE PETITE FILLE JACKIE est née le 9 juillet à 8h20\n" +
        "Son grand frère Sébastien, sa grande sœur Marion,\n" +
        "ses parents Olivier et Natasha,\n" +
        "ses grands-parents Marc et Catherine",
      inlineChoices: true,
      items: [
        { sentence: "Jackie est [ la fille / le fils ] d'Olivier et Natasha.", choices: ["la fille", "le fils"], correctIdx: 0 },
        { sentence: "Jackie est [ le frère / la sœur ] de Sébastien et Marion.", choices: ["le frère", "la sœur"], correctIdx: 1 },
        { sentence: "Jackie a [ une sœur / deux sœurs ].", choices: ["une sœur", "deux sœurs"], correctIdx: 0 },
        { sentence: "Marc et Catherine sont les [ parents / grands-parents ].", choices: ["parents", "grands-parents"], correctIdx: 1 },
        { sentence: "Marion a [ un frère / un frère et une sœur ].", choices: ["un frère", "un frère et une sœur"], correctIdx: 1 },
        { sentence: "Olivier et Natasha ont [ deux enfants / trois enfants ].", choices: ["deux enfants", "trois enfants"], correctIdx: 1 },
      ],
    },
    {
      type: "write",
      title: "Exercice 5",
      instruction: "Écrivez cinq phrases sur votre famille.",
      prompts: ["1.", "2.", "3.", "4.", "5."],
    },
    {
      type: "fill",
      title: "Exercice 6",
      instruction:
        "Complétez les phrases.\n(Arbre généalogique : Paul + Françoise → Léa ; Léa + Daniel → Jules + Elise)",
      items: [
        { sentence: "Paul est le ___ de Léa.", hint: "père", answer: "père" },
        { sentence: "Daniel est le ___ de Jules.", hint: "père", answer: "père" },
        { sentence: "Jules est le ___ de Léa.", hint: "fils", answer: "fils" },
        { sentence: "Elise est la ___ de Jules.", hint: "sœur", answer: "sœur" },
        { sentence: "Paul et Françoise sont les ___ de Léa.", hint: "parents", answer: "parents" },
      ],
    },
    {
      type: "qcm",
      title: "Exercice 7",
      instruction: "Indiquez si le mot est Singulier masculin (SM), Singulier féminin (SF), Pluriel masculin (PM) ou Pluriel féminin (PF).",
      items: [
        { sentence: "nationalité", choices: ["SM", "SF", "PM", "PF"], correctIdx: 1 },
        { sentence: "parents", choices: ["SM", "SF", "PM", "PF"], correctIdx: 2 },
        { sentence: "fils", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "oncle", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "langues", choices: ["SM", "SF", "PM", "PF"], correctIdx: 3 },
        { sentence: "enfant", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "pays", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "filles", choices: ["SM", "SF", "PM", "PF"], correctIdx: 3 },
        { sentence: "cousine", choices: ["SM", "SF", "PM", "PF"], correctIdx: 1 },
        { sentence: "tante", choices: ["SM", "SF", "PM", "PF"], correctIdx: 1 },
      ],
    },
    {
      type: "write",
      title: "Exercice 8 — Lisez le texte",
      instruction:
        "Lisez le texte, puis répondez aux questions.\n\n" +
        "« Je vais vous parler de ma famille. Mes parents s'appellent Muzghan et Noorullah. " +
        "J'ai un grand frère et une petite sœur. Mon frère s'appelle Ali, et ma sœur s'appelle Amina. " +
        "J'ai deux cousins. Ils s'appellent Karim et Sara. Nous jouons souvent ensemble le week-end. " +
        "La fille de Sara s'appelle Mary. " +
        "Mon frère Ali a un fils et une fille. Mon neveu s'appelle Omar et ma nièce s'appelle Leila. " +
        "La fille d'Amina s'appelle Jamila. »",
      prompts: [
        "Comment s'appellent les parents ?",
        "Combien de frères et sœurs y a-t-il ?",
        "Comment s'appellent les cousins ?",
        "Qui est Omar ?",
        "Qui est Jamila ?",
      ],
    },
    {
      type: "fill",
      title: "Exercice 9",
      instruction: "Remplacez les mots entre crochets par l'adjectif possessif.",
      items: [
        { sentence: "Ce n'est pas [à moi] ___ mère ?", hint: "ma", answer: "ma" },
        { sentence: "C'est [à toi] ___ mari ?", hint: "ton", answer: "ton" },
        { sentence: "C'est [à elle] ___ sœur ?", hint: "sa", answer: "sa" },
        { sentence: "C'est [à lui] ___ cousin ?", hint: "son", answer: "son" },
        { sentence: "Ce ne sont pas [à nous] ___ parents ?", hint: "nos", answer: "nos" },
        { sentence: "Ce sont [à eux] ___ enfants ?", hint: "leurs", answer: "leurs" },
        { sentence: "C'est [à vous] ___ fille ?", hint: "votre", answer: "votre" },
        { sentence: "C'est [à elles] ___ grand-mère ?", hint: "leur", answer: "leur" },
      ],
    },
    {
      type: "match",
      title: "Exercice 10",
      instruction: "Reliez les termes ensemble.",
      pairs: [
        { left: "C'est", right: "Ernest" },
        { left: "C'est", right: "mon père" },
        { left: "Ce sont", right: "ses parents" },
        { left: "Ce sont", right: "des écrivains français" },
        { left: "Il est", right: "professeur" },
        { left: "Il est", right: "un artiste" },
        { left: "Elle est", right: "chanteur" },
        { left: "Ils sont", right: "poètes" },
        { left: "Ils sont", right: "Monsieur André" },
        { left: "Elles sont", right: "françaises" },
      ],
    },
    {
      type: "classify",
      title: "Exercice 11",
      instruction: "Classez les mots dans le tableau. [ Femme – divorcé – mari – veuf – célibataire – enfant ]",
      categories: ["Membre de la famille", "Situation familiale"],
      items: [
        { word: "femme", categoryIdx: 0 },
        { word: "mari", categoryIdx: 0 },
        { word: "enfant", categoryIdx: 0 },
        { word: "divorcé", categoryIdx: 1 },
        { word: "veuf", categoryIdx: 1 },
        { word: "célibataire", categoryIdx: 1 },
      ],
    },
    {
      type: "write",
      title: "Exercice 12",
      instruction: "Écrivez 4 phrases sur la situation de votre famille.",
      prompts: ["1.", "2.", "3.", "4."],
    },
  ],
};

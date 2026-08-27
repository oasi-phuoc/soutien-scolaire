import type { Exercise, GrammarLesson } from "../../grammar-data";

/** SVG de démo (fruits / objets) — à remplacer par `imageWord` quand l'asset lecture existe. */
const SVG = {
  pomme:
    '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="46" r="22" fill="#E8604A"/><rect x="38" y="16" width="4" height="14" rx="1" fill="#6B3F1A"/><ellipse cx="48" cy="22" rx="8" ry="5" fill="#3A8A4A"/></svg>',
  poire:
    '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><ellipse cx="40" cy="50" rx="16" ry="20" fill="#8BC34A"/><ellipse cx="40" cy="32" rx="10" ry="12" fill="#9CCC65"/><rect x="38" y="14" width="4" height="12" rx="1" fill="#6B3F1A"/></svg>',
  banane:
    '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M18 28c18 4 32 18 44 36-14-4-30-6-46-22z" fill="#F4C430"/><path d="M18 28c2-6 8-8 12-6" fill="none" stroke="#6B3F1A" stroke-width="3"/></svg>',
  voiture:
    '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="36" width="56" height="18" rx="4" fill="#4A90D9"/><rect x="24" y="24" width="28" height="12" rx="2" fill="#7EB6E0"/><circle cx="24" cy="56" r="6" fill="#333"/><circle cx="56" cy="56" r="6" fill="#333"/></svg>',
  velo:
    '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="52" r="12" fill="none" stroke="#333" stroke-width="3"/><circle cx="56" cy="52" r="12" fill="none" stroke="#333" stroke-width="3"/><path d="M24 52 L40 28 L56 52 M40 28 L40 20" fill="none" stroke="#E8604A" stroke-width="3"/></svg>',
  chaise:
    '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="18" width="32" height="22" rx="2" fill="#C4A574"/><rect x="24" y="40" width="32" height="6" fill="#A9844F"/><rect x="26" y="46" width="6" height="20" fill="#8B6914"/><rect x="48" y="46" width="6" height="20" fill="#8B6914"/></svg>',
  laver:
    '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="18" fill="#7EC8E3"/><path d="M28 36c4 8 20 8 24 0" fill="none" stroke="#1A6A8A" stroke-width="3"/></svg>',
  couper:
    '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M18 58 L62 22" stroke="#888" stroke-width="4"/><circle cx="22" cy="54" r="8" fill="none" stroke="#E8604A" stroke-width="3"/><circle cx="30" cy="62" r="8" fill="none" stroke="#E8604A" stroke-width="3"/></svg>',
  manger:
    '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="42" r="18" fill="#F4C430"/><circle cx="34" cy="38" r="2" fill="#333"/><circle cx="46" cy="38" r="2" fill="#333"/><path d="M32 48c4 6 12 6 16 0" fill="none" stroke="#333" stroke-width="2"/></svg>',
};

const examples: Exercise[] = [
  {
    type: "fill",
    title: "Texte à trous — libre",
    instruction: "Complète avec le mot qui convient.",
    items: [{ sentence: "Je ___ une pomme.", hint: "", answer: "mange" }],
  },
  {
    type: "fill_select",
    title: "Texte à trous — QCM intégré",
    instruction: "Choisis le mot manquant.",
    hideWordBank: true,
    wordBank: [],
    items: [{
      sentence: "Je ___ une pomme.",
      hint: "",
      answer: "mange",
      choices: ["mange", "bois", "téléphone"],
    }],
  },
  {
    type: "fill_select",
    title: "Texte à trous — banque de mots",
    instruction: "Replace chaque mot de la banque dans la bonne phrase.",
    wordBank: ["mange", "bois", "dors"],
    items: [
      { sentence: "Je ___ une pomme.", hint: "", answer: "mange" },
      { sentence: "Je ___ de l'eau.", hint: "", answer: "bois" },
    ],
  },
  {
    type: "fill",
    title: "Terminaison à compléter",
    instruction: "Complète la terminaison du verbe.",
    inputWidth: "w-16",
    items: [{ sentence: "Je mang___ une pomme.", hint: "", answer: "e" }],
  },
  {
    type: "fill",
    title: "Texte à trous — avec image",
    instruction: "Écris le mot illustré.",
    items: [{
      sentence: "Je mange une ___.",
      hint: "",
      answer: "pomme",
      imageWord: "pomme",
      svg: SVG.pomme,
    }],
  },
  {
    type: "fill",
    title: "Dictée à trous (audio)",
    instruction: "Écoute la phrase et complète le trou.",
    items: [{
      sentence: "Je ___ une pomme.",
      hint: "",
      answer: "mange",
      audioText: "Je mange une pomme.",
    }],
  },
  {
    type: "qcm",
    title: "QCM simple",
    instruction: "Choisis la bonne réponse.",
    items: [{
      sentence: "Que fait-on avec une pomme ?",
      choices: ["On la mange", "On la porte", "On la conduit"],
      correctIdx: 0,
    }],
  },
  {
    type: "qcm",
    title: "QCM — réponses images",
    instruction: "Montre le fruit qu'on mange.",
    items: [{
      sentence: "Montre le fruit qu'on mange.",
      choices: ["pomme", "voiture", "chaise"],
      correctIdx: 0,
      choiceImageWords: ["pomme", "voiture", "chaise"],
      choiceSvgs: [SVG.pomme, SVG.voiture, SVG.chaise],
    }],
  },
  {
    type: "qcm",
    title: "QCM — audio",
    instruction: "Écoute puis choisis la bonne image.",
    items: [{
      sentence: "",
      audioText: "pomme",
      choices: ["pomme", "poire"],
      correctIdx: 0,
      choiceImageWords: ["pomme", "poire"],
      choiceSvgs: [SVG.pomme, SVG.poire],
    }],
  },
  {
    type: "qcm",
    title: "QCM — réponses multiples",
    instruction: "Coche tous les fruits.",
    multiple: true,
    items: [{
      sentence: "Coche les fruits.",
      choices: ["pomme", "voiture", "banane", "chaise"],
      correctIdx: 0,
      correctIdxs: [0, 2],
    }],
  },
  {
    type: "trueFalse",
    title: "Vrai / Faux — simple",
    instruction: "Réponds par vrai ou faux.",
    items: [{ statement: "La pomme est un légume.", answer: false }],
  },
  {
    type: "trueFalse",
    title: "Vrai / Faux — avec correction",
    instruction: "Si c'est faux, écris la correction.",
    items: [{
      statement: "La pomme est un légume.",
      answer: false,
      correction: "c'est un fruit",
    }],
  },
  {
    type: "trueFalse",
    title: "Vrai / Faux — avec image",
    instruction: "Regarde l'image et réponds.",
    items: [{
      statement: "C'est une orange.",
      answer: false,
      imageWord: "pomme",
      svg: SVG.pomme,
      correction: "c'est une pomme",
    }],
  },
  {
    type: "match",
    title: "Association mot ↔ image",
    instruction: "Relie chaque mot à son image.",
    leftLabel: "Mot",
    rightLabel: "Image",
    pairs: [
      { left: "pomme", right: "", rightImageWord: "pomme", rightSvg: SVG.pomme },
      { left: "voiture", right: "", rightImageWord: "voiture", rightSvg: SVG.voiture },
    ],
  },
  {
    type: "match",
    title: "Association mot ↔ définition",
    instruction: "Relie chaque mot à sa définition.",
    pairs: [
      { left: "pomme", right: "fruit rond qui pousse sur un arbre" },
      { left: "voiture", right: "véhicule à quatre roues" },
    ],
  },
  {
    type: "match",
    title: "Association mot ↔ traduction",
    instruction: "Relie le français à l'anglais.",
    leftLabel: "fr",
    rightLabel: "en",
    pairs: [
      { left: "pomme", right: "apple" },
      { left: "voiture", right: "car" },
    ],
  },
  {
    type: "match",
    title: "Association début ↔ fin de phrase",
    instruction: "Relie le début et la fin de la phrase.",
    pairs: [
      { left: "Je mange", right: "une pomme." },
      { left: "Je bois", right: "de l'eau." },
    ],
  },
  {
    type: "match",
    title: "Colonnes grammaticales",
    instruction: "Relie chaque pronom à la bonne forme du verbe.",
    pairs: [
      { left: "Je", right: "mange" },
      { left: "Tu", right: "manges" },
      { left: "Il", right: "mange" },
    ],
  },
  {
    type: "classify",
    title: "Tri par catégorie",
    instruction: "Classe chaque mot.",
    categories: ["Fruits", "Véhicules"],
    items: [
      { word: "pomme", categoryIdx: 0 },
      { word: "voiture", categoryIdx: 1 },
      { word: "banane", categoryIdx: 0 },
      { word: "vélo", categoryIdx: 1 },
    ],
  },
  {
    type: "word_order",
    title: "Remise en ordre de mots",
    instruction: "Remets les mots dans l'ordre pour former une phrase.",
    items: [{ sentence: "Je mange une pomme.", words: ["Je", "mange", "une", "pomme"] }],
  },
  {
    type: "order",
    title: "Remise en ordre de phrases",
    instruction: "Numérote le dialogue dans l'ordre logique.",
    items: [{
      sentence: "",
      hint: "Dialogue au marché",
      parts: [
        "Bonjour, je voudrais une pomme.",
        "Oui, la voilà. Ça fait un euro.",
        "Merci, au revoir.",
      ],
    }],
  },
  {
    type: "order",
    title: "Remise en ordre d'images",
    instruction: "Remets les images dans l'ordre chronologique.",
    items: [{
      sentence: "",
      hint: "Préparer et manger une pomme",
      imageWords: ["laver", "couper", "manger"],
      imageSvgs: [SVG.laver, SVG.couper, SVG.manger],
    }],
  },
  {
    type: "odd_one_out",
    title: "Intrus",
    instruction: "Clique sur l'intrus.",
    items: [{ words: ["pomme", "banane", "voiture", "poire"], oddIdx: 2 }],
  },
  {
    type: "qcm",
    title: "Repérage — souligner le bon mot",
    instruction: "Choisis le verbe qui convient dans la phrase.",
    inlineChoices: true,
    items: [{
      sentence: "Je ___ une pomme.",
      choices: ["mange", "bois"],
      correctIdx: 0,
    }],
  },
  {
    type: "color_highlight",
    title: "Repérage — cocher une catégorie",
    instruction: "Surligne tous les fruits dans la phrase.",
    colors: ["fruit"],
    items: [{
      words: ["J'ai", "acheté", "une", "pomme", ",", "du", "pain", "et", "une", "banane", "."],
      answers: [null, null, null, 0, null, null, null, null, null, 0, null],
    }],
  },
  {
    type: "write",
    title: "Production — réponse courte",
    instruction: "Réponds par une phrase complète.",
    prompts: ["Qu'est-ce que tu manges ?"],
  },
  {
    type: "write",
    title: "Production — amorce à compléter",
    instruction: "Continue la phrase.",
    promptLayout: "stacked",
    prompts: ["Le matin, je..."],
  },
  {
    type: "write",
    title: "Production — description d'image",
    instruction: "Décris ce que tu vois.",
    imagePool: [{
      image: "/assets/words/lecture/pomme.webp",
      promptPool: ["Décris ce que tu vois."],
    }],
  },
  {
    type: "write",
    title: "Production — mots imposés",
    instruction: "Écris une phrase avec les mots imposés.",
    requiredWords: ["pomme", "manger", "matin"],
    prompts: ["Écris une phrase."],
  },
  {
    type: "qcm",
    title: "Oral — écouter et cocher l'image",
    instruction: "Écoute et coche la bonne image.",
    items: [{
      sentence: "",
      audioText: "une pomme",
      choices: ["pomme", "poire", "voiture"],
      correctIdx: 0,
      choiceImageWords: ["pomme", "poire", "voiture"],
      choiceSvgs: [SVG.pomme, SVG.poire, SVG.voiture],
    }],
  },
  {
    type: "fill",
    title: "Dictée de mots",
    instruction: "Écoute et écris le mot.",
    items: [{ sentence: "___", hint: "", answer: "pomme", audioText: "pomme" }],
  },
  {
    type: "audio_discrim",
    title: "Discrimination auditive",
    instruction: "Écoute A et B. Pareil ou différent ?",
    items: [
      { audioA: "pomme", audioB: "paume", same: false },
      { audioA: "pomme", audioB: "pomme", same: true },
    ],
  },
  {
    type: "letter_spot",
    title: "Reconnaissance de lettres",
    instruction: "Entoure toutes les lettres demandées.",
    items: [{ text: "papier", target: "p" }],
  },
  {
    type: "syllable_join",
    title: "Assemblage de syllabes",
    instruction: "Assemble les syllabes pour former le mot.",
    items: [{ parts: ["POM", "ME"], answer: "pomme" }],
  },
  {
    type: "qcm",
    title: "Repérer un son",
    instruction: "« pomme » commence par quel son ?",
    items: [{
      sentence: "« pomme » commence par quel son ?",
      audioText: "pomme",
      choices: ["p", "b", "t"],
      correctIdx: 0,
    }],
  },
  {
    type: "drag_label",
    title: "Glisser étiquette → image",
    instruction: "Place chaque mot sur la bonne image.",
    items: [{
      labels: ["pomme", "voiture"],
      targets: [
        { label: "pomme", imageWord: "pomme", svg: SVG.pomme },
        { label: "voiture", imageWord: "voiture", svg: SVG.voiture },
      ],
    }],
  },
  {
    type: "anagram",
    title: "Glisser lettres → mot",
    instruction: "Remets les lettres dans l'ordre.",
    items: [{ answer: "pomme", letters: ["M", "O", "P", "M", "E"] }],
  },
  {
    type: "word_order",
    title: "Glisser mots → phrase",
    instruction: "Remets les mots dans l'ordre.",
    items: [{ sentence: "Je mange une pomme.", words: ["Je", "mange", "une", "pomme"] }],
  },
];

/** Leçon de référence — accessible via `/francais/grammaire/a1-gr-templates` (hors catalogue élève). */
export const GRAMMAR_TEMPLATE_LESSON: GrammarLesson = {
  slug: "a1-gr-templates",
  code: "REF",
  level: "A1",
  title: "Catalogue des templates d'exercices",
  theory: [
    { type: "heading", text: "Templates d'exercices", accent: true },
    {
      type: "text",
      text: "Cette leçon montre un exemple de chaque template. Saisis tes phrases dans {a}templates-exercices-grammaire.txt{/a} à la racine du dépôt, puis recopie-les dans les fichiers de leçon.",
    },
  ],
  exercises: examples,
};

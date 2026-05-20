import type { VocabLesson } from "../../vocabulary-data";

export const A0_VOC_NATIONALITES: VocabLesson = {
  slug: "a0-voc-nationalites",
  code: "V.0",
  level: "A1",
  title: "Les nationalités",
  theory: [
    {
      type: "heading",
      text: "Les pays et les nationalités",
    },
    {
      type: "grid",
      headers: ["Pays", "Masculin", "Féminin"],
      rows: [
        ["🇫🇷 la France", "français", "française"],
        ["🇩🇪 l'Allemagne", "allemand", "allemande"],
        ["🇮🇹 l'Italie", "italien", "italienne"],
        ["🇪🇸 l'Espagne", "espagnol", "espagnole"],
        ["🇵🇹 le Portugal", "portugais", "portugaise"],
        ["🇨🇳 la Chine", "chinois", "chinoise"],
        ["🇯🇵 le Japon", "japonais", "japonaise"],
        ["🇧🇷 le Brésil", "brésilien", "brésilienne"],
        ["🇲🇦 le Maroc", "marocain", "marocaine"],
        ["🇻🇳 le Vietnam", "vietnamien", "vietnamienne"],
        ["🇨🇭 la Suisse", "suisse", "suisse"],
        ["🇧🇪 la Belgique", "belge", "belge"],
      ],
    },
    {
      type: "note",
      text: "Suisse, belge et russe sont identiques au masculin et au féminin.",
    },
    {
      type: "heading",
      text: "Le verbe VENIR au présent",
      sub: true,
    },
    {
      type: "grid",
      headers: ["Pronom", "Venir"],
      pronounGrid: true,
      rows: [
        ["je", "viens"],
        ["tu", "viens"],
        ["il / elle", "vient"],
        ["nous", "venons"],
        ["vous", "venez"],
        ["ils / elles", "viennent"],
      ],
    },
    {
      type: "rule",
      text: "Je viens DE + pays féminin → Je viens de France\nJe viens DU + pays masculin → Je viens du Maroc\nJe viens DES + pays pluriel → Je viens des États-Unis\nJe viens D' + voyelle → Je viens d'Iran",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Exercice 1",
      instruction: "Associez chaque pays à la nationalité masculine.",
      pairs: [
        { left: "la France", right: "français" },
        { left: "l'Allemagne", right: "allemand" },
        { left: "l'Italie", right: "italien" },
        { left: "le Japon", right: "japonais" },
        { left: "le Maroc", right: "marocain" },
        { left: "le Brésil", right: "brésilien" },
      ],
    },
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Complétez les phrases avec la forme correcte du verbe venir et la nationalité.",
      items: [
        { sentence: "Je ___ d'Espagne. Je suis ___.", hint: "viens / espagnol(e)", answer: "viens / espagnol(e)" },
        { sentence: "Elle ___ de Chine. Elle est ___.", hint: "vient / chinoise", answer: "vient / chinoise" },
        { sentence: "Nous ___ du Portugal. Nous sommes ___.", hint: "venons / portugais", answer: "venons / portugais" },
        { sentence: "Ils ___ du Vietnam. Ils sont ___.", hint: "viennent / vietnamiens", answer: "viennent / vietnamiens" },
        { sentence: "Tu ___ d'Italie. Tu es ___.", hint: "viens / italien(ne)", answer: "viens / italien(ne)" },
        { sentence: "Vous ___ du Maroc. Vous êtes ___.", hint: "venez / marocain(s)", answer: "venez / marocain(s)" },
      ],
    },
    {
      type: "qcm",
      title: "Exercice 3 — Vrai ou Faux ?",
      instruction:
        "Lisez l'affiche et cochez la bonne réponse.\n\n" +
        "┌─────────────────────────────────────────────┐\n" +
        "│  Bienvenue au CERCLE des CULTURES           │\n" +
        "│                                             │\n" +
        "│  Vous êtes lycéen, étudiant, chef... ?      │\n" +
        "│  Vous avez 18, 25, 40, 65 ans ?             │\n" +
        "│  Vous êtes russe, marocain, japonais... ?   │\n" +
        "│                                             │\n" +
        "│  Venez parler russe, arabe, japonais        │\n" +
        "│  ou français autour d'un thé !              │\n" +
        "│                                             │\n" +
        "│  Informations : 06 77 88 99 00              │\n" +
        "└─────────────────────────────────────────────┘",
      items: [
        { sentence: "Tout le monde est le bienvenu.", choices: ["Vrai", "Faux"], correctIdx: 0 },
        { sentence: "Une personne de 25 ans est la bienvenue.", choices: ["Vrai", "Faux"], correctIdx: 0 },
        { sentence: "C'est une invitation pour un cours de russe.", choices: ["Vrai", "Faux"], correctIdx: 1 },
        { sentence: "Vous ne pouvez pas parler français.", choices: ["Vrai", "Faux"], correctIdx: 1 },
        { sentence: "Pour les informations, il faut téléphoner.", choices: ["Vrai", "Faux"], correctIdx: 0 },
      ],
    },
  ],
};

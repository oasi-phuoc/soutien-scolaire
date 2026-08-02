import type { GrammarLesson } from "../../grammar-data";

/** Unité 28 — La question totale (= question fermée) (G3.8) */
export const A1_GR_QUESTION_TOTALE: GrammarLesson = {
  slug: "a1-gr-question-totale",
  code: "G3.8",
  level: "A1",
  title: "La question totale (question fermée)",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "La question totale est une {a}question fermée{/a} : on attend une réponse oui/non (sans autre information).",
        "Réponses possibles : Oui. ; Non. ; Je ne sais pas. ; Si. (pour contredire une question négative) ; Peut-être.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Structure et intonation",
    },
    {
      type: "highlight",
      label: "Intonation montante",
      items: [
        "On utilise une phrase affirmative avec une intonation montante.",
        "Il regarde les papiers. → Il regarde les papiers ?",
        "Je conduis bien. → Je conduis bien ?",
      ],
      noBulletItems: [1, 2],
    },
    {
      type: "highlight",
      label: "Est-ce que",
      items: [
        "On ajoute {a}est-ce que{/a} au début d'une phrase affirmative. L'intonation peut être montante ou descendante.",
        "Est-ce que le policier regarde les papiers ?",
        "Est-ce que je conduis bien ?",
      ],
      noBulletItems: [1, 2],
    },
    {
      type: "heading",
      text: "Orthographe",
    },
    {
      type: "plain_list",
      items: [
        "Élision : {a}que{/a} → {a}qu'{/a} devant une voyelle ou un h muet. → Est-ce qu'il arrête la voiture ?",
        "À l'écrit, on ajoute un point d'interrogation {a}?{/a} à la fin.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Question totale",
      instruction: "Choisissez la formulation correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ le policier regarde les papiers ?", choices: ["Est-ce que", "Est-ce qu'", "Qu'est-ce que", "Est que"], correctIdx: 0 },
        { sentence: "___ il arrête la voiture ?", choices: ["Est-ce qu'", "Est-ce que", "Est que", "Qu'est-ce que"], correctIdx: 0 },
        { sentence: "Forme interrogative (intonation) :", choices: ["Il regarde les papiers ?", "Il regarde les papiers.", "Regarde-t-il les papiers ? Il.", "Est-ce les papiers ?"], correctIdx: 0 },
        { sentence: "Réponse pour contredire une question négative :", choices: ["Si.", "Oui.", "Non.", "Peut-être."], correctIdx: 0 },
        { sentence: "La question totale est une question ___ .", choices: ["fermée", "ouverte", "partielle", "négative"], correctIdx: 0 },
        { sentence: "___ je conduis bien ?", choices: ["Est-ce que", "Est-ce qu'", "Qu'est-ce que", "Est que"], correctIdx: 0 },
        { sentence: "Vous avez les papiers de la voiture ?", choices: ["Oui, monsieur, voilà.", "Où sont-ils ?", "Pourquoi ?", "Combien ?"], correctIdx: 0 },
        { sentence: "À l'écrit, on ajoute ___ .", choices: ["?", ".", "!", "…"], correctIdx: 0 },
        { sentence: "Devant une voyelle : est-ce ___ il vient ?", choices: ["qu'", "que", "qui", "quoi"], correctIdx: 0 },
        { sentence: "Réponse possible à une question totale :", choices: ["Je ne sais pas.", "À Paris.", "Parce que…", "Trois."], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez est-ce que ou est-ce qu'.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ tu as les papiers ?", hint: "consonne", answer: "Est-ce que" },
        { sentence: "___ il regarde les papiers ?", hint: "voyelle", answer: "Est-ce qu'" },
        { sentence: "___ elle conduit bien ?", hint: "voyelle", answer: "Est-ce qu'" },
        { sentence: "___ vous êtes prêts ?", hint: "consonne", answer: "Est-ce que" },
        { sentence: "___ on peut partir ?", hint: "voyelle", answer: "Est-ce qu'" },
        { sentence: "___ je conduis bien ?", hint: "consonne", answer: "Est-ce que" },
        { sentence: "___ il arrête la voiture ?", hint: "voyelle", answer: "Est-ce qu'" },
        { sentence: "___ le policier regarde ?", hint: "consonne", answer: "Est-ce que" },
        { sentence: "___ elle a un permis ?", hint: "voyelle", answer: "Est-ce qu'" },
        { sentence: "___ nous partons ?", hint: "consonne", answer: "Est-ce que" },
      ],
    },
  ],
};

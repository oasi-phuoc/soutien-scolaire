export type CommunicationTheoryBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "plain"; text: string }
  | { type: "numbered"; items: string[] }
  | { type: "section"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "note"; text: string }
  | { type: "highlight"; title: string; items: string[] }
  | { type: "dialogue"; lines: Array<{ role: string; text: string; translation?: string }> }
  | { type: "vocab"; items: Array<{ fr: string; example: string }> };

export type CommunicationExercise = {
  id: string;
  instruction: string;
  type: "mcq";
  question: string;
  choices: string[];
  answer: string; // must match one of choices exactly
};

export type CommunicationLesson = {
  id: string;
  code: string;
  title: string;
  theory: CommunicationTheoryBlock[];
  exercises: CommunicationExercise[];
  writingLevel?: "base" | "moyen" | "avance";
};

export const COMMUNICATION_E2_1: CommunicationLesson = {
  id: "E2-1",
  code: "E2.1",
  title: "Se présenter",
  theory: [
    { type: "heading", text: "Se présenter" },
    { type: "subheading", text: "Mon identité" },
    {
      type: "table",
      headers: ["Question", "Réponse"],
      rows: [
        ["Comment vous appelez-vous ?", "Je m'appelle Marie Dupont."],
        ["Quel est votre prénom ?", "Mon prénom est Marie."],
        ["Quel est votre nom de famille ?", "Mon nom de famille est Dupont."],
      ],
    },
    { type: "note", text: "En français, le nom de famille s'écrit souvent en MAJUSCULES." },
    { type: "subheading", text: "Mon âge" },
    {
      type: "table",
      headers: ["Question", "Réponse"],
      rows: [
        ["Quel âge avez-vous ?", "J'ai 30 ans."],
        ["Quelle est votre date de naissance ?", "Je suis né(e) le 15 mars 1994."],
      ],
    },
    { type: "note", text: "On dit J'AI … ANS avec le verbe AVOIR, pas ÊTRE." },
    { type: "subheading", text: "Ma nationalité et mon domicile" },
    {
      type: "table",
      headers: ["Question", "Réponse"],
      rows: [
        ["Quelle est votre nationalité ?", "Je suis française / français."],
        ["D'où venez-vous ?", "Je viens de France. / Je viens du Maroc."],
        ["Où habitez-vous ?", "J'habite à Genève, en Suisse."],
        ["Quelle est votre adresse ?", "J'habite au 3, rue des Fleurs."],
      ],
    },
    { type: "subheading", text: "Ma profession" },
    {
      type: "table",
      headers: ["Question", "Réponse"],
      rows: [
        ["Quelle est votre profession ?", "Je suis infirmière / infirmier."],
        ["Qu'est-ce que vous faites dans la vie ?", "Je travaille dans un hôpital."],
        ["Vous travaillez ?", "Oui, je travaille. / Non, je cherche un emploi."],
      ],
    },
    { type: "subheading", text: "Exemple de dialogue" },
    {
      type: "dialogue",
      lines: [
        { role: "A", text: "Bonjour ! Comment vous appelez-vous ?" },
        { role: "B", text: "Bonjour ! Je m'appelle Leila Ahmadi. Et vous ?" },
        { role: "A", text: "Je m'appelle Marc Fabre. D'où venez-vous ?" },
        { role: "B", text: "Je viens d'Iran. J'habite à Lausanne depuis deux ans." },
        { role: "A", text: "Quelle est votre profession ?" },
        { role: "B", text: "Je suis étudiante. Et vous, qu'est-ce que vous faites ?" },
        { role: "A", text: "Je suis professeur de français." },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "s'appeler", example: "Je m'appelle Leila." },
        { fr: "être (nationalité)", example: "Je suis suisse. / Il est marocain." },
        { fr: "avoir (âge)", example: "J'ai 25 ans." },
        { fr: "habiter", example: "J'habite à Genève." },
        { fr: "venir de", example: "Je viens de Syrie." },
        { fr: "travailler", example: "Je travaille à l'hôpital." },
      ],
    },
  ],
  exercises: [
    {
      id: "q1",
      instruction: "Choisissez la bonne réponse.",
      type: "mcq",
      question: "Pour dire votre âge, vous dites :",
      choices: ["Je suis 30 ans.", "J'ai 30 ans.", "J'habite 30 ans.", "Je viens 30 ans."],
      answer: "J'ai 30 ans.",
    },
    {
      id: "q2",
      instruction: "Choisissez la bonne réponse.",
      type: "mcq",
      question: "La question pour demander le nom est :",
      choices: ["Quel âge avez-vous ?", "D'où venez-vous ?", "Comment vous appelez-vous ?", "Où habitez-vous ?"],
      answer: "Comment vous appelez-vous ?",
    },
    {
      id: "q3",
      instruction: "Choisissez la bonne réponse.",
      type: "mcq",
      question: "Pour dire votre nationalité, vous dites :",
      choices: ["J'ai française.", "Je viens française.", "Je suis française.", "J'habite française."],
      answer: "Je suis française.",
    },
    {
      id: "q4",
      instruction: "Choisissez la bonne réponse.",
      type: "mcq",
      question: "La réponse correcte à « D'où venez-vous ? » est :",
      choices: ["Je suis à Paris.", "Je viens de Tunisie.", "J'ai de Tunisie.", "J'habite Tunisie."],
      answer: "Je viens de Tunisie.",
    },
    {
      id: "q5",
      instruction: "Choisissez la bonne réponse.",
      type: "mcq",
      question: "Pour dire votre adresse, vous dites :",
      choices: [
        "Je viens au 5, rue de la Paix.",
        "Je suis au 5, rue de la Paix.",
        "J'habite au 5, rue de la Paix.",
        "J'ai au 5, rue de la Paix.",
      ],
      answer: "J'habite au 5, rue de la Paix.",
    },
    {
      id: "q6",
      instruction: "Choisissez la bonne réponse.",
      type: "mcq",
      question: "Pour parler de votre travail, vous dites :",
      choices: ["Je suis médecin.", "J'ai médecin.", "Je viens médecin.", "J'habite médecin."],
      answer: "Je suis médecin.",
    },
    {
      id: "q7",
      instruction: "Choisissez la bonne réponse.",
      type: "mcq",
      question: "Comment dit-on « Quelle est votre profession ? » dans un dialogue formel ?",
      choices: [
        "T'as quel boulot ?",
        "Qu'est-ce que vous faites dans la vie ?",
        "Tu travailles où ?",
        "C'est quoi ton job ?",
      ],
      answer: "Qu'est-ce que vous faites dans la vie ?",
    },
    {
      id: "q8",
      instruction: "Choisissez la bonne réponse.",
      type: "mcq",
      question: "Leila vient d'Iran. Comment dit-elle sa nationalité ?",
      choices: ["Je suis iranienne.", "J'ai iranienne.", "Je viens iranienne.", "J'habite iranienne."],
      answer: "Je suis iranienne.",
    },
  ],
};

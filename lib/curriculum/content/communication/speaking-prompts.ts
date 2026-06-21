export type OralLevel = "base" | "moyen" | "avance";

export type SpeakingTheme = {
  word: string;
  example: string; // example question the student could ask
};

export type OralPrompt = {
  id: string;
  level: OralLevel;
  themes: [SpeakingTheme, SpeakingTheme, SpeakingTheme];
  imageDescription: string; // placeholder description until real images are added
  dialogueContext: string;
  dialoguePrompts: string[]; // app says these, student responds
};

const BASE_PROMPTS: OralPrompt[] = [
  {
    id: "base-1",
    level: "base",
    themes: [
      { word: "famille", example: "Combien de personnes sont dans votre famille ?" },
      { word: "travail", example: "Qu'est-ce que vous faites comme travail ?" },
      { word: "logement", example: "Où est-ce que vous habitez ?" },
    ],
    imageDescription: "Une famille dans un parc par une belle journée ensoleillée.",
    dialogueContext: "Vous rencontrez un voisin dans votre immeuble.",
    dialoguePrompts: [
      "Bonjour ! Vous habitez ici depuis longtemps ?",
      "Et vous travaillez dans le quartier ?",
      "Qu'est-ce que vous aimez faire le week-end ?",
    ],
  },
  {
    id: "base-2",
    level: "base",
    themes: [
      { word: "courses", example: "Où est-ce que vous faites vos courses ?" },
      { word: "transport", example: "Comment vous venez en ville ?" },
      { word: "santé", example: "Vous avez un médecin ici ?" },
    ],
    imageDescription: "Un marché local avec des fruits, légumes et des personnes qui font leurs achats.",
    dialogueContext: "Vous parlez avec une commerçante au marché.",
    dialoguePrompts: [
      "Bonjour, je peux vous aider ?",
      "Vous cherchez quelque chose en particulier ?",
      "Vous venez souvent ici au marché ?",
    ],
  },
  {
    id: "base-3",
    level: "base",
    themes: [
      { word: "école", example: "Est-ce que vos enfants vont à l'école ici ?" },
      { word: "langue", example: "Depuis combien de temps vous apprenez le français ?" },
      { word: "ville", example: "Qu'est-ce que vous aimez dans cette ville ?" },
    ],
    imageDescription: "Une salle de classe avec des adultes qui apprennent le français.",
    dialogueContext: "Vous parlez avec un autre élève de votre cours de français.",
    dialoguePrompts: [
      "Vous êtes dans ce cours depuis longtemps ?",
      "Vous trouvez le français difficile ?",
      "Qu'est-ce que vous faites après le cours ?",
    ],
  },
];

const MOYEN_PROMPTS: OralPrompt[] = [
  {
    id: "moyen-1",
    level: "moyen",
    themes: [
      { word: "loisirs", example: "Quelles activités de loisirs pratiquez-vous régulièrement ?" },
      { word: "vacances", example: "Comment organisez-vous habituellement vos vacances ?" },
      { word: "culture", example: "Est-ce que vous aimez aller au cinéma ou au musée ?" },
    ],
    imageDescription: "Une scène d'un festival de musique en plein air avec des spectateurs.",
    dialogueContext: "Vous parlez avec un collègue de vos projets pour le week-end.",
    dialoguePrompts: [
      "Qu'est-ce que vous avez prévu ce week-end ?",
      "Vous aimez sortir le soir ou vous préférez rester à la maison ?",
      "Il y a des activités que vous aimeriez essayer mais que vous n'avez pas encore faites ?",
    ],
  },
  {
    id: "moyen-2",
    level: "moyen",
    themes: [
      { word: "alimentation", example: "Est-ce que votre alimentation a changé depuis votre arrivée en Suisse ?" },
      { word: "habitudes", example: "Quelles habitudes quotidiennes trouvez-vous différentes ici ?" },
      { word: "intégration", example: "Qu'est-ce qui vous a aidé à vous intégrer ?" },
    ],
    imageDescription: "Un repas convivial entre personnes de cultures différentes autour d'une table.",
    dialogueContext: "Vous participez à un repas interculturel organisé par votre commune.",
    dialoguePrompts: [
      "Qu'est-ce que vous avez apporté comme plat pour ce repas ?",
      "Comment vous vivez le fait de partager des habitudes différentes ici ?",
      "Qu'est-ce qui vous manque le plus de votre pays d'origine ?",
    ],
  },
  {
    id: "moyen-3",
    level: "moyen",
    themes: [
      { word: "médecin", example: "Comment se passe une consultation médicale ici par rapport à chez vous ?" },
      { word: "assurance", example: "Est-ce que vous avez eu des difficultés avec votre assurance maladie ?" },
      { word: "administration", example: "Quelles démarches administratives avez-vous trouvées compliquées ?" },
    ],
    imageDescription: "Une salle d'attente d'un cabinet médical avec des patients.",
    dialogueContext: "Vous expliquez à un proche comment fonctionne le système de santé en Suisse.",
    dialoguePrompts: [
      "Est-ce que vous avez un médecin de famille ici ?",
      "Comment vous faites quand vous êtes malade et que vous ne parlez pas encore bien la langue ?",
      "Qu'est-ce que vous avez appris sur le système de santé suisse ?",
    ],
  },
];

const AVANCE_PROMPTS: OralPrompt[] = [
  {
    id: "avance-1",
    level: "avance",
    themes: [
      { word: "environnement", example: "Quelles actions concrètes prenez-vous pour protéger l'environnement ?" },
      { word: "mobilité", example: "Comment pensez-vous que nos habitudes de transport devraient évoluer ?" },
      { word: "consommation", example: "En quoi la société de consommation influence-t-elle notre mode de vie ?" },
    ],
    imageDescription: "Une ville avec des transports en commun, des pistes cyclables et des espaces verts.",
    dialogueContext: "Vous participez à un débat sur la mobilité durable dans votre commune.",
    dialoguePrompts: [
      "Selon vous, quelles mesures devraient être prioritaires pour réduire les émissions en ville ?",
      "Certains estiment que les restrictions de voiture en ville nuisent aux commerces. Qu'en pensez-vous ?",
      "Comment imaginez-vous la ville de demain en matière de transports ?",
    ],
  },
  {
    id: "avance-2",
    level: "avance",
    themes: [
      { word: "éducation", example: "Comment évalueriez-vous les différences entre le système éducatif suisse et celui de votre pays d'origine ?" },
      { word: "numérique", example: "Pensez-vous que la technologie améliore ou complique l'apprentissage ?" },
      { word: "avenir", example: "Quelles compétences seront selon vous essentielles dans le monde du travail de demain ?" },
    ],
    imageDescription: "Une salle de classe moderne avec des tablettes et un tableau interactif.",
    dialogueContext: "Vous débattez avec un parent d'élève lors d'une réunion scolaire.",
    dialoguePrompts: [
      "Vous pensez que les écoles donnent suffisamment de place aux arts et à la créativité ?",
      "Comment trouvez-vous l'équilibre entre cours traditionnels et outils numériques dans l'enseignement actuel ?",
      "Que proposeriez-vous pour mieux préparer les élèves au monde professionnel ?",
    ],
  },
  {
    id: "avance-3",
    level: "avance",
    themes: [
      { word: "identité", example: "Comment définissez-vous votre identité culturelle aujourd'hui ?" },
      { word: "appartenance", example: "Qu'est-ce qui vous donne un sentiment d'appartenance à une communauté ?" },
      { word: "transmission", example: "Qu'est-ce que vous souhaitez transmettre à la génération suivante ?" },
    ],
    imageDescription: "Une cérémonie de naturalisation avec des personnes de diverses origines.",
    dialogueContext: "Vous échangez avec un journaliste pour un article sur les parcours de vie.",
    dialoguePrompts: [
      "En quelques mots, comment décririez-vous votre parcours depuis votre arrivée ici ?",
      "Qu'est-ce que cette expérience vous a appris sur vous-même ?",
      "Si vous deviez donner un conseil à quelqu'un qui arrive dans un nouveau pays, que lui diriez-vous ?",
    ],
  },
];

const ALL_PROMPTS: Record<OralLevel, OralPrompt[]> = {
  base: BASE_PROMPTS,
  moyen: MOYEN_PROMPTS,
  avance: AVANCE_PROMPTS,
};

export function randomOralPrompt(level: OralLevel): OralPrompt {
  const list = ALL_PROMPTS[level];
  return list[Math.floor(Math.random() * list.length)]!;
}

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
      "Comment vous appelez-vous ?",
      "D'où venez-vous ?",
      "Et vous travaillez dans le quartier ?",
      "Vous avez des enfants ?",
      "Vous aimez ce quartier ?",
      "Qu'est-ce que vous aimez faire le week-end ?",
      "Vous connaissez déjà des voisins dans l'immeuble ?",
      "Il y a des choses qui vous manquent dans votre pays ?",
      "Est-ce que vous allez souvent dans les commerces près d'ici ?",
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
      "Vous êtes d'où ?",
      "Qu'est-ce que vous aimez cuisiner ?",
      "Ces légumes, vous savez comment les préparer ?",
      "Vous avez une recette favorite ?",
      "Vous préférez acheter ici ou au supermarché ?",
      "Est-ce que vous connaissez d'autres marchés dans la ville ?",
      "Il y a autre chose que je peux vous montrer ?",
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
      "Pourquoi vous apprenez le français ?",
      "Vous habitez loin de l'école ?",
      "Vous pratiquez le français en dehors des cours ?",
      "Vous regardez des films ou des séries en français ?",
      "Vous avez des amis qui parlent français ?",
      "Qu'est-ce que vous trouvez le plus difficile en français ?",
      "Qu'est-ce que vous faites après le cours ?",
      "Vous avez d'autres cours en ce moment ?",
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
      "Est-ce que vous pratiquez un sport régulièrement ?",
      "Vous regardez plutôt des films, des séries ou des documentaires ?",
      "Vous aimez sortir le soir ou vous préférez rester à la maison ?",
      "Est-ce que vous aimez voyager pendant les vacances ?",
      "Qu'est-ce qui vous détend après une longue semaine de travail ?",
      "Vous participez à des activités culturelles dans la région ?",
      "Vous passez du temps en famille le week-end ?",
      "Il y a des activités que vous aimeriez essayer mais que vous n'avez pas encore faites ?",
      "Qu'est-ce que vous aimeriez découvrir dans la région que vous ne connaissez pas encore ?",
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
      "Vous cuisinez souvent des plats de votre pays ?",
      "Est-ce que vous avez adapté vos recettes avec des ingrédients locaux ?",
      "Comment votre alimentation a-t-elle changé depuis votre arrivée ici ?",
      "Est-ce qu'il y a des plats suisses que vous appréciez particulièrement ?",
      "Comment les fêtes et traditions culinaires se passent-elles dans votre famille ici ?",
      "Comment vous vivez le fait de partager des habitudes différentes ici ?",
      "Qu'est-ce que vous pensez des marchés et épiceries ici par rapport à chez vous ?",
      "Qu'est-ce qui vous manque le plus de votre pays d'origine ?",
      "Qu'est-ce que vous appréciez le plus dans la vie quotidienne ici ?",
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
      "Comment fonctionne votre assurance maladie, est-ce que vous comprenez bien le système ?",
      "Comment vous expliquez vos symptômes en français quand vous voyez un médecin ?",
      "Avez-vous déjà eu une urgence médicale ici ? Comment ça s'est passé ?",
      "Est-ce qu'il y a des différences importantes avec le système de santé de votre pays ?",
      "Est-ce que vous avez eu des difficultés avec les formulaires ou les démarches médicales ?",
      "Comment vous faites quand vous êtes malade et que vous ne parlez pas encore bien la langue ?",
      "Pensez-vous que l'accès aux soins est facile pour les personnes qui ne parlent pas français ?",
      "Qu'est-ce que vous avez appris sur le système de santé suisse ?",
      "Qu'est-ce que vous conseillez à quelqu'un qui arrive et doit s'inscrire chez un médecin ?",
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
      "Pensez-vous que les transports en commun actuels sont suffisants pour convaincre les automobilistes ?",
      "Certains estiment que les restrictions de voiture en ville nuisent aux commerces. Qu'en pensez-vous ?",
      "La voiture électrique est-elle selon vous une vraie solution ou simplement un report du problème ?",
      "Quel rôle devrait jouer l'État pour encourager les comportements écologiques ?",
      "Que pensez-vous des zones piétonnes dans les centres-villes ?",
      "Les entreprises ont-elles une responsabilité dans la mobilité de leurs employés ?",
      "Comment concilier développement économique et réduction des émissions de CO2 ?",
      "Quels changements de comportement pensez-vous être les plus difficiles à adopter pour les citoyens ?",
      "Comment imaginez-vous la ville de demain en matière de transports et d'environnement ?",
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
      "Quel rôle les parents devraient-ils jouer dans l'éducation scolaire de leurs enfants ?",
      "Pensez-vous que le système de notation actuel est un bon outil d'évaluation ?",
      "Comment trouvez-vous l'équilibre entre cours traditionnels et outils numériques dans l'enseignement actuel ?",
      "Comment l'école peut-elle mieux intégrer les élèves issus de l'immigration ?",
      "Pensez-vous que l'apprentissage des langues étrangères devrait commencer plus tôt ?",
      "Quelles valeurs pensez-vous que l'école devrait transmettre en priorité ?",
      "Est-ce que les devoirs à la maison vous semblent utiles ou contre-productifs ?",
      "Que proposeriez-vous pour mieux préparer les élèves au monde professionnel ?",
      "Comment voyez-vous l'évolution de l'enseignement dans les vingt prochaines années ?",
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
      "Comment avez-vous géré la barrière de la langue au début ?",
      "Qu'est-ce qui a changé dans votre vision de vous-même depuis votre arrivée ?",
      "Comment votre relation à votre culture d'origine a-t-elle évolué avec le temps ?",
      "Y a-t-il des aspects de la culture suisse que vous avez adoptés et que vous appréciez particulièrement ?",
      "Qu'est-ce que cette expérience vous a appris sur vous-même ?",
      "Comment parler de votre identité à vos enfants ou aux générations suivantes ?",
      "Pensez-vous que la société suisse est ouverte à la diversité ? Comment le ressentez-vous ?",
      "Si vous deviez donner un conseil à quelqu'un qui arrive dans un nouveau pays, que lui diriez-vous ?",
      "Quel regard portez-vous sur votre avenir ici ?",
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

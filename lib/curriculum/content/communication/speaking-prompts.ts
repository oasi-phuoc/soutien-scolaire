import { pickFromPool } from "@/lib/placement/progressive-pick";

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

export function seededOralPrompt(level: OralLevel, seed: string): OralPrompt {
  return pickFromPool(ALL_PROMPTS[level], seed);
}

// 3 suggested responses per dialogue prompt, indexed by prompt id then prompt index
export const DIALOGUE_HINTS: Record<string, string[][]> = {
  "base-1": [
    ["Oui, depuis deux ans.", "Non, je viens d'arriver.", "Ça fait environ six mois."],
    ["Je m'appelle [prénom].", "Mon prénom, c'est... et le vôtre ?", "Je m'appelle... enchanté(e) !"],
    ["Je viens de [pays].", "Je suis originaire du Maroc.", "De [ville], en Italie."],
    ["Oui, j'ai un travail ici près.", "Non, je travaille en ville.", "Je cherche du travail actuellement."],
    ["Oui, j'ai deux enfants.", "Non, je n'ai pas d'enfants.", "Oui, un garçon de 5 ans."],
    ["Oui, c'est calme et agréable.", "C'est bien, mais un peu loin du centre.", "Oui, les commerces sont pratiques."],
    ["Je me promène avec mes enfants.", "Je regarde des films en famille.", "Je fais du sport, et vous ?"],
    ["Non, pas encore.", "Oui, j'ai rencontré la famille du 3e.", "Un peu, je dis bonjour dans l'escalier."],
    ["Oui, la famille me manque beaucoup.", "La cuisine de ma mère !", "Mes amis me manquent."],
    ["Oui, il y a une boulangerie que j'adore.", "Non, je préfère le supermarché.", "Oui, presque tous les matins."],
  ],
  "base-2": [
    ["Oui, je cherche des tomates.", "Bonjour, je voudrais des légumes.", "Qu'est-ce que vous avez de bon aujourd'hui ?"],
    ["Je voudrais des pommes, s'il vous plaît.", "Avez-vous des carottes fraîches ?", "Je cherche des herbes aromatiques."],
    ["Oui, tous les samedis.", "Non, c'est la première fois.", "Oui, j'aime acheter frais."],
    ["Je suis du [pays].", "Je suis originaire d'Espagne.", "Je suis Suisse maintenant !"],
    ["J'aime faire des tajines.", "Je cuisine souvent des plats italiens.", "J'adore faire des soupes et des salades."],
    ["Oui, je les fais souvent.", "Non, pouvez-vous m'expliquer ?", "Je les fais simplement revenir à la poêle."],
    ["Oui, le couscous de ma mère !", "J'adore faire la ratatouille.", "Une salade de lentilles, c'est simple et bon."],
    ["Ici, c'est plus frais et local.", "Je préfère ici pour les légumes.", "Les deux, ça dépend du temps."],
    ["Oui, il y en a un près de la gare.", "Non, je ne connais pas encore.", "J'en cherche d'autres, vous avez un conseil ?"],
    ["Non merci, c'est tout pour aujourd'hui.", "Oui, avez-vous des fruits de saison ?", "Combien ça coûte, tout ça ?"],
  ],
  "base-3": [
    ["Oui, depuis trois mois.", "Non, je viens de commencer.", "J'ai commencé en janvier."],
    ["Oui, surtout la grammaire.", "Non, mais la prononciation est difficile.", "Un peu, mais j'aime apprendre."],
    ["Pour travailler.", "Pour comprendre mes voisins.", "C'est obligatoire, mais j'aime ça."],
    ["Non, je suis à dix minutes.", "Oui, je prends le bus.", "J'habite à vingt minutes à pied."],
    ["Oui, je parle avec mes voisins.", "Un peu, avec mes collègues.", "Je regarde des émissions à la télé."],
    ["Oui, des films français.", "Je regarde des séries avec sous-titres.", "Parfois, mais c'est difficile à comprendre."],
    ["Oui, mon voisin parle français.", "Non, pas encore.", "Oui, des collègues au travail."],
    ["Les articles, le/la/les.", "Les conjugaisons des verbes.", "La prononciation, surtout le « r »."],
    ["Je rentre à la maison.", "Je vais faire les courses.", "Je travaille l'après-midi."],
    ["Non, juste le français.", "Oui, un cours d'informatique.", "Oui, je prends aussi des cours du soir."],
  ],
  "moyen-1": [
    ["Je pense aller à la montagne.", "J'ai prévu un barbecue avec des amis.", "Pas grand-chose, je vais me reposer."],
    ["Oui, je cours trois fois par semaine.", "Je fais du vélo le week-end.", "Non, je n'ai pas assez de temps malheureusement."],
    ["Plutôt des séries, j'en suis accro !", "Les documentaires m'intéressent beaucoup.", "J'aime les films, surtout les comédies."],
    ["Je préfère rester à la maison en semaine.", "J'aime sortir le vendredi soir.", "Ça dépend, parfois les deux."],
    ["Oui, j'adore découvrir de nouveaux endroits.", "Je préfère rester en Suisse et me reposer.", "Oui, surtout en Europe."],
    ["Une bonne séance de sport.", "Cuisiner, ça me vide la tête.", "Lire un livre ou regarder une série."],
    ["J'essaie d'aller au musée de temps en temps.", "Pas encore, mais j'aimerais bien.", "Oui, il y a souvent des concerts intéressants."],
    ["Oui, c'est important pour moi.", "Surtout le dimanche, on déjeune ensemble.", "Je vis seul, mais j'appelle ma famille."],
    ["J'aimerais apprendre à jouer de la guitare.", "J'ai toujours voulu faire de l'escalade.", "Oui, les cours de cuisine, pourquoi pas ?"],
    ["Les randonnées dans les Alpes.", "Les petits villages autour de la ville.", "Il paraît qu'il y a de beaux lacs à voir."],
  ],
  "moyen-2": [
    ["J'ai fait un plat traditionnel de chez moi.", "J'ai apporté des biscuits aux épices.", "Un tajine aux légumes, c'est ma spécialité !"],
    ["Oui, presque tous les jours.", "Ça dépend, le week-end surtout.", "Oui, ça me rappelle ma famille."],
    ["Oui, j'utilise ce que je trouve ici.", "Parfois, quand je ne trouve pas certaines épices.", "Oui, et le résultat est souvent meilleur !"],
    ["Je mange plus de fromage et de pain.", "J'ai découvert la fondue !", "Je mange plus varié, c'est intéressant."],
    ["Oui, la raclette, j'adore !", "Le rösti, c'est délicieux.", "La fondue bien sûr, mais aussi le birchermüesli."],
    ["On essaie de garder nos traditions.", "On mélange, un peu de chez nous et un peu d'ici.", "C'est différent, mais on s'adapte."],
    ["C'est enrichissant, j'apprends beaucoup.", "Parfois c'est difficile, mais on s'habitue.", "C'est une belle expérience d'ouverture."],
    ["C'est très bien organisé ici.", "Les prix sont plus élevés, mais la qualité est bonne.", "Je trouve presque tout ce qu'il me faut."],
    ["La cuisine de ma mère, sans hésitation.", "L'ambiance et la chaleur humaine.", "Certains légumes et épices introuvables ici."],
    ["L'organisation et la ponctualité.", "La sécurité et la propreté.", "Les services publics qui fonctionnent bien."],
  ],
  "moyen-3": [
    ["Oui, je me suis inscrit dès mon arrivée.", "Non, je vais aux urgences quand j'ai besoin.", "Oui, mais j'ai mis du temps à en trouver un."],
    ["Je comprends mieux maintenant, au début c'était compliqué.", "Le système de franchise m'est difficile à saisir.", "Oui, j'ai demandé à un conseiller de m'expliquer."],
    ["J'ai appris le vocabulaire médical de base.", "J'utilise parfois le traducteur sur mon téléphone.", "Je montre où ça fait mal et j'essaie d'expliquer."],
    ["Oui, j'ai appelé le 144 et c'était très rapide.", "Non, heureusement pas encore.", "Oui, et le service était excellent mais très cher."],
    ["Ici, on paye l'assurance soi-même, c'est différent.", "Le système est plus organisé ici, à mon avis.", "Là-bas, les soins étaient moins chers mais moins accessibles."],
    ["Oui, les formulaires en français sont compliqués.", "Un peu au début, mais j'ai eu de l'aide.", "Oui, surtout pour comprendre les remboursements."],
    ["Je demande à un ami de m'accompagner.", "J'utilise une application de traduction.", "J'ai trouvé un médecin qui parle ma langue."],
    ["Non, c'est difficile sans interprète.", "Ça dépend des cas, pour les urgences c'est rapide.", "Il y a des services d'interprétariat, c'est utile."],
    ["Que l'assurance de base est obligatoire.", "Que le médecin de famille est très important ici.", "Que les soins sont de haute qualité mais coûteux."],
    ["De chercher rapidement un médecin de famille.", "De bien lire son contrat d'assurance.", "De demander de l'aide à l'office d'intégration."],
  ],
  "avance-1": [
    ["Je pense que les transports en commun gratuits auraient un impact immédiat.", "Il faudrait d'abord investir dans les infrastructures cyclables.", "La zone 30 km/h en ville me semble essentielle."],
    ["Non, la fréquence et la couverture sont insuffisantes.", "En partie, mais il manque une alternative fiable le soir et le week-end.", "Ils s'améliorent, mais le dernier kilomètre reste problématique."],
    ["Je pense que c'est un faux débat, les études montrent le contraire.", "Il faut accompagner les commerces dans cette transition.", "Les piétons dépensent davantage par visite que les automobilistes."],
    ["C'est une solution partielle qui ne règle pas l'encombrement.", "Elle réduit les émissions locales, mais le bilan global reste à améliorer.", "Sans décarbonation de l'électricité, c'est effectivement limité."],
    ["Il doit créer des incitations financières claires.", "L'État devrait subventionner les transports en commun.", "Une politique de bonus-malus sur les modes de transport serait efficace."],
    ["C'est une excellente chose pour la qualité de vie.", "Oui, à condition de prévoir des alternatives de stationnement.", "Je suis pour, cela redynamise le commerce local."],
    ["Absolument, elles devraient promouvoir le télétravail et les abonnements transports.", "Oui, elles doivent proposer des alternatives à la voiture.", "Elles peuvent jouer un rôle clé avec des plans de mobilité."],
    ["En investissant dans l'économie circulaire et verte.", "Le développement durable n'est pas incompatible avec la croissance.", "Il faut réinventer notre modèle de croissance, pas le rejeter."],
    ["Renoncer à la voiture individuelle, c'est le plus difficile.", "Changer ses habitudes alimentaires est aussi très compliqué.", "Réduire les voyages en avion, car c'est devenu la norme."],
    ["Une ville avec beaucoup moins de voitures, plus de verdure.", "Des quartiers à 15 minutes où tout est accessible à pied.", "Des transports autonomes et propres, accessibles à tous."],
  ],
  "avance-2": [
    ["Non, les arts sont souvent les premiers sacrifiés.", "Il y a un déséquilibre en faveur des matières académiques.", "Ça dépend beaucoup des établissements et des enseignants."],
    ["Ils doivent soutenir mais pas faire les devoirs à la place.", "Un rôle actif mais respectueux de l'autonomie de l'enfant.", "S'impliquer dans le suivi sans surpasser le rôle des enseignants."],
    ["Non, les notes mesurent trop souvent la mémoire, pas la compréhension.", "Il faudrait compléter avec des évaluations formatives.", "C'est imparfait mais il n'y a pas de meilleure alternative universelle."],
    ["L'équilibre est difficile à trouver et varie selon les enseignants.", "Le numérique est utile mais ne remplace pas le lien humain.", "On a tendance à survaloriser la technologie en éducation."],
    ["En proposant des cours d'intégration adaptés et du soutien linguistique.", "En formant les enseignants à la diversité culturelle.", "En valorisant le multilinguisme plutôt qu'en le marginalisant."],
    ["Absolument, les enfants absorbent les langues très facilement.", "Oui, dès la maternelle si possible.", "C'est idéal, mais cela demande des enseignants qualifiés."],
    ["La pensée critique et l'esprit civique.", "Le respect de l'autre et la solidarité.", "L'autonomie et la curiosité intellectuelle."],
    ["Utiles s'ils sont bien calibrés et pas trop nombreux.", "Contre-productifs quand les parents ne peuvent pas aider.", "Un peu des deux selon le type d'exercice."],
    ["Plus de stages pratiques et de contact avec le monde du travail.", "Développer les compétences transversales : communication, gestion du temps.", "Des cours sur les finances personnelles et l'entrepreneuriat."],
    ["Vers plus de personnalisation grâce à l'intelligence artificielle.", "Des classes plus hétérogènes avec des méthodes individualisées.", "L'école restera essentielle comme lieu de socialisation."],
  ],
  "avance-3": [
    ["Un parcours difficile mais enrichissant, avec beaucoup d'apprentissages.", "Une reconstruction complète de ma vie, avec ses hauts et ses bas.", "Un chemin semé d'embûches, mais qui m'a rendu plus fort."],
    ["J'ai fait des cours intensifs et j'ai beaucoup pratiqué.", "C'était frustrant, mais j'ai persisté et ça a payé.", "J'ai appris sur le tas, par nécessité."],
    ["Je me suis découvert plus résilient que je ne le pensais.", "Je suis devenu quelqu'un entre deux cultures, et c'est une richesse.", "J'ai révisé mes priorités et mes valeurs."],
    ["Je l'ai redécouverte avec un regard extérieur, plus critique et plus affectueux.", "Elle m'est devenue encore plus précieuse.", "J'en garde l'essentiel tout en m'ouvrant à d'autres cultures."],
    ["La ponctualité et le respect des règles, ça m'a changé !", "La culture du dialogue et du consensus.", "L'attachement à la nature et aux activités de plein air."],
    ["Que je suis capable de m'adapter bien plus que je ne le croyais.", "Que mes racines ne disparaissent pas, elles s'enrichissent.", "Que la vulnérabilité peut être une force."],
    ["Je leur transmets les deux cultures, sans les opposer.", "Je veux qu'ils soient fiers de leurs deux appartenances.", "Je leur montre que la différence est une chance."],
    ["Elle l'est davantage dans les grandes villes que dans les petits villages.", "Il y a une ouverture institutionnelle, mais les mentalités évoluent lentement.", "J'ai rencontré à la fois une grande ouverture et des résistances."],
    ["D'apprendre la langue le plus vite possible, c'est la clé.", "De ne pas s'isoler dans sa communauté d'origine.", "D'être patient et de ne pas comparer constamment avec son pays."],
    ["Avec optimisme, j'ai construit quelque chose de solide.", "Sereinement, j'ai trouvé ma place.", "Avec des projets plein la tête et l'envie d'aller de l'avant."],
  ],
};

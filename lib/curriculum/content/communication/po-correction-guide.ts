// Correction suggestions for French oral production (PO) exercises.

export const IMAGE_DESCRIPTION_MEMO: string[] = [
  "Je vois…",
  "La scène se passe…",
  "Il y a…",
  "La personne fait…",
  "À gauche / à droite / au centre…",
  "La personne est / semble…",
  "Je pense que…",
];

export type ImageDescriptionModel = {
  sections: {
    lieu: string;
    personnes: string;
    actions: string;
    objets: string;
    emotions: string;
    hypothese: string;
  };
  formatted: string;
};

function buildImageFormatted(sections: ImageDescriptionModel["sections"]): string {
  const [spatial, state] = sections.emotions.includes(" — ")
    ? (sections.emotions.split(" — ") as [string, string])
    : [sections.objets, sections.emotions];

  return [
    `Je vois ${sections.lieu}.`,
    `La scène se passe ${sections.personnes}.`,
    `Il y a ${sections.objets}.`,
    `La personne fait ${sections.actions}.`,
    `À gauche / à droite / au centre, ${spatial.trim()}.`,
    `La personne est / semble ${state.trim()}.`,
    `Je pense que ${sections.hypothese}.`,
  ].join(" ");
}

// ——— Theme question suggestions (task 1) ———

export const THEME_QUESTION_SUGGESTIONS: Record<string, string[]> = {
  famille: [
    "Combien de personnes composent votre famille ?",
    "Où habite votre famille en Suisse ?",
    "Qu'est-ce que vous aimez faire ensemble le week-end ?",
  ],
  travail: [
    "Quel est votre métier actuel ?",
    "Depuis combien de temps travaillez-vous ici ?",
    "Qu'est-ce que vous aimez dans votre travail ?",
  ],
  logement: [
    "Dans quel type de logement habitez-vous ?",
    "Depuis combien de temps habitez-vous à cet endroit ?",
    "Qu'est-ce que vous aimez dans votre quartier ?",
  ],
  courses: [
    "Où faites-vous habituellement vos courses ?",
    "À quelle fréquence allez-vous faire les courses ?",
    "Qu'est-ce que vous achetez le plus souvent ?",
  ],
  transport: [
    "Comment vous déplacez-vous au quotidien ?",
    "Combien de temps dure votre trajet ?",
    "Préférez-vous les transports publics ou la voiture ?",
  ],
  santé: [
    "Avez-vous un médecin de famille ici ?",
    "Que faites-vous quand vous êtes malade ?",
    "Faites-vous du sport pour rester en forme ?",
  ],
  école: [
    "Vos enfants vont-ils à l'école en Suisse ?",
    "Dans quelle classe sont-ils ?",
    "Comment se passe leur scolarité ?",
  ],
  langue: [
    "Depuis combien de temps apprenez-vous le français ?",
    "Où pratiquez-vous le français en dehors des cours ?",
    "Qu'est-ce qui est le plus difficile pour vous en français ?",
  ],
  ville: [
    "Dans quelle ville habitez-vous ?",
    "Qu'est-ce que vous aimez dans cette ville ?",
    "Y a-t-il des endroits que vous visitez souvent ?",
  ],
  loisirs: [
    "Quelles activités de loisirs pratiquez-vous ?",
    "À quelle fréquence faites-vous du sport ?",
    "Qu'est-ce que vous faites le week-end ?",
  ],
  vacances: [
    "Où partez-vous en vacances habituellement ?",
    "Préférez-vous rester en Suisse ou voyager à l'étranger ?",
    "Qu'est-ce que vous aimez faire pendant vos vacances ?",
  ],
  culture: [
    "Allez-vous parfois au cinéma ou au musée ?",
    "Quel type de spectacles aimez-vous ?",
    "Y a-t-il des événements culturels que vous suivez ?",
  ],
  alimentation: [
    "Qu'est-ce que vous mangez habituellement le midi ?",
    "Cuisinez-vous des plats de votre pays ?",
    "Avez-vous changé vos habitudes alimentaires ici ?",
  ],
  habitudes: [
    "À quelle heure vous levez-vous le matin ?",
    "Quelles sont vos habitudes le week-end ?",
    "Qu'est-ce qui est différent ici par rapport à votre pays ?",
  ],
  intégration: [
    "Depuis combien de temps habitez-vous en Suisse ?",
    "Qu'est-ce qui vous a aidé à vous intégrer ?",
    "Avez-vous des amis suisses ou des voisins proches ?",
  ],
  médecin: [
    "Avez-vous déjà consulté un médecin ici ?",
    "Comment prenez-vous rendez-vous chez le médecin ?",
    "Est-ce facile de s'expliquer en français au cabinet ?",
  ],
  assurance: [
    "Avez-vous une assurance maladie de base ?",
    "Comprenez-vous bien votre contrat d'assurance ?",
    "Avez-vous eu des difficultés avec les remboursements ?",
  ],
  administration: [
    "Quelles démarches administratives avez-vous déjà faites ?",
    "Avez-vous renouvelé votre permis de séjour ?",
    "Trouvez-vous les formulaires faciles à comprendre ?",
  ],
  environnement: [
    "Triez-vous vos déchets à la maison ?",
    "Utilisez-vous les transports en commun pour protéger l'environnement ?",
    "Quels gestes écologiques faites-vous au quotidien ?",
  ],
  mobilité: [
    "Quel moyen de transport utilisez-vous le plus ?",
    "Avez-vous un abonnement de transport ?",
    "Pensez-vous que la mobilité est facile dans votre région ?",
  ],
  consommation: [
    "Où préférez-vous faire vos achats ?",
    "Faites-vous attention aux prix quand vous achetez ?",
    "Achetez-vous des produits locaux ?",
  ],
  éducation: [
    "Vos enfants vont-ils à l'école publique ou privée ?",
    "Que pensez-vous du système scolaire suisse ?",
    "Participez-vous aux réunions de parents ?",
  ],
  numérique: [
    "Utilisez-vous Internet tous les jours ?",
    "À quoi sert votre téléphone portable au quotidien ?",
    "Apprenez-vous le français avec des applications ?",
  ],
  avenir: [
    "Quels sont vos projets pour les prochaines années ?",
    "Souhaitez-vous améliorer votre niveau de français ?",
    "Où vous voyez-vous vivre dans cinq ans ?",
  ],
  identité: [
    "Comment décririez-vous votre identité culturelle ?",
    "Vous sentez-vous plus proche de votre culture d'origine ou de la culture suisse ?",
    "Qu'est-ce qui est important pour vous dans votre identité ?",
  ],
  appartenance: [
    "À quelles communautés vous sentez-vous appartenir ?",
    "Vous sentez-vous bien intégré dans votre quartier ?",
    "Qu'est-ce qui vous donne un sentiment d'appartenance ici ?",
  ],
  transmission: [
    "Quelles traditions transmettez-vous à vos enfants ?",
    "Parlez-vous votre langue maternelle à la maison ?",
    "Qu'est-ce que vous voulez transmettre à la prochaine génération ?",
  ],
};

// ——— Directed interview model answers (task 3) ———

export const DIRECTED_INTERVIEW_SUGGESTIONS: Record<string, string> = {
  "Quel est votre nom ?": "Van.",
  "Quel est votre prénom ?": "Phuoc.",
  "Où habitez-vous ?": "J'habite à Aproz, un petit village près de Neuchâtel.",
  "Quelles langues parlez-vous ?": "Je parle vietnamien et un peu de français.",
  "Qu'avez-vous fait ce week-end ?":
    "Ce week-end, j'ai fait une promenade au bord du lac de Neuchâtel avec ma famille.",
  "Est-ce que vous faites du sport ?":
    "Oui, je fais du vélo et parfois de la marche rapide.",
  "Depuis combien de temps pratiquez-vous ce sport ?":
    "Je fais du vélo depuis environ deux ans, depuis que j'habite en Suisse.",
  "Combien de fois par semaine faites-vous ce sport ?":
    "Je fais du vélo deux ou trois fois par semaine, surtout le week-end.",
  "Quel est votre plat préféré ?": "Mon plat préféré, c'est le phở, une soupe vietnamienne.",
  "De quoi est-il fait ?":
    "Il est fait avec du bouillon, des nouilles de riz, du bœuf, des herbes fraîches et du citron vert.",
  "Savez-vous le préparer ?":
    "Oui, je sais le préparer, mais ce n'est pas toujours facile de trouver tous les ingrédients ici.",
  "Quel genre de films ou de séries aimez-vous regarder ?":
    "J'aime regarder des comédies et parfois des films d'action.",
  "Pourquoi aimez-vous ce genre ?":
    "Parce que les comédies me détendent et me font rire après une longue journée de travail.",
  "Quel est votre film ou votre série préféré ?":
    "Ma série préférée, c'est une comédie française que je regarde avec des sous-titres.",
  "Qui fait les courses chez vous ?":
    "C'est surtout moi qui fais les courses, parfois avec ma femme le samedi.",
  "Aimez-vous faire les courses et pourquoi ?":
    "Oui, j'aime faire les courses parce que je découvre de nouveaux produits suisses.",
  "Où allez-vous faire les courses et pourquoi ?":
    "Je vais au supermarché à Neuchâtel et parfois au marché, parce que les légumes sont plus frais.",
  "Quel moyen de transport utilisez-vous le plus ?":
    "J'utilise surtout le bus et parfois le train pour aller au travail.",
  "Aimez-vous vous déplacer avec ce moyen de transport et pourquoi ?":
    "Oui, parce que c'est pratique, économique et je n'ai pas besoin de chercher une place de parking.",
  "Quel moyen de transport n'aimez-vous pas et pourquoi ?":
    "Je n'aime pas beaucoup la voiture en ville, parce qu'il y a souvent des embouteillages et c'est stressant.",
};

// ——— Image description models for A1 situations (task 2) ———

const A1_IMAGE_SECTIONS: Record<string, ImageDescriptionModel["sections"]> = {
  "a1-ecole": {
    lieu: "un couloir d'école avec des casiers colorés et une porte de classe",
    personnes: "à l'école, dans le bureau du professeur",
    actions: "une conversation avec le professeur pour parler d'un problème scolaire",
    objets: "un parent, un professeur, des cartables et des affiches au mur",
    emotions: "à gauche, le parent inquiet — calme et attentif",
    hypothese: "le parent veut de l'aide pour son enfant",
  },
  "a1-hotel": {
    lieu: "la réception d'un hôtel avec un grand comptoir en bois",
    personnes: "à l'hôtel, devant la réception",
    actions: "une réservation et demande le prix d'une chambre",
    objets: "un client avec une valise, une réceptionniste, des clés et un ordinateur",
    emotions: "au centre, le client patient — poli et souriant",
    hypothese: "le client veut réserver une chambre pour une nuit",
  },
  "a1-bibliotheque": {
    lieu: "une bibliothèque avec de hautes étagères pleines de livres",
    personnes: "dans une bibliothèque, entre les rayons",
    actions: "une recherche et demande où trouver un livre",
    objets: "un lecteur, une bibliothécaire, des livres et un chariot",
    emotions: "à droite, la bibliothécaire qui montre une étagère — serviable",
    hypothese: "le lecteur veut emprunter un livre de cuisine",
  },
  "a1-boucherie": {
    lieu: "une boucherie avec une grande vitrine de viande fraîche",
    personnes: "dans une boucherie, devant le comptoir",
    actions: "un achat et demande la quantité et le prix de la viande",
    objets: "un client, un boucher, de la viande, une balance et un couteau",
    emotions: "au centre, le boucher qui coupe la viande — professionnel",
    hypothese: "le client prépare un repas pour sa famille",
  },
  "a1-boulangerie": {
    lieu: "une boulangerie avec des pains et des croissants dorés",
    personnes: "dans une boulangerie, à la caisse",
    actions: "un achat et choisit une baguette et des croissants",
    objets: "une cliente, une vendeuse, des baguettes et une caisse enregistreuse",
    emotions: "à gauche, les viennoiseries — contente",
    hypothese: "la cliente veut acheter du pain frais pour le petit-déjeuner",
  },
  "a1-gare": {
    lieu: "un guichet de gare avec un panneau d'horaires au mur",
    personnes: "à la gare, au guichet des billets",
    actions: "l'achat d'un billet et demande le quai de départ",
    objets: "un voyageur, un employé, un billet et un sac à dos",
    emotions: "au centre, le voyageur qui regarde l'horaire — un peu pressé",
    hypothese: "il veut prendre le prochain train pour Neuchâtel",
  },
  "a1-poste": {
    lieu: "un bureau de poste avec un comptoir et une balance",
    personnes: "à la poste, devant le guichet",
    actions: "l'envoi d'un colis et remplit un formulaire",
    objets: "un client, un employé, un colis, des timbres et un stylo",
    emotions: "à droite, l'employé qui explique le tarif — patient",
    hypothese: "le client envoie un colis à sa famille au Vietnam",
  },
  "a1-accident-velo": {
    lieu: "une rue avec un vélo renversé sur le trottoir",
    personnes: "dans la rue, près d'un carrefour",
    actions: "une explication de son accident de vélo à un passant",
    objets: "un cycliste, un passant, un vélo, un casque et un trottoir",
    emotions: "au centre, le cycliste assis par terre — inquiet et douloureux",
    hypothese: "il a besoin d'aide parce qu'il a mal au genou",
  },
  "a1-arret-bus": {
    lieu: "un arrêt de bus avec un abri et un panneau d'horaires",
    personnes: "à l'arrêt de bus, sur le trottoir",
    actions: "une question et demande quel bus va au centre-ville",
    objets: "un voyageur, une passante, un horaire et des sacs",
    emotions: "à gauche, le panneau du bus — un peu perdu",
    hypothese: "il cherche le bon bus pour aller en ville",
  },
  "a1-cafe": {
    lieu: "un café avec des tables en terrasse et un comptoir",
    personnes: "dans un café, près de la caisse",
    actions: "une commande et demande un café avec du lait",
    objets: "un client, un serveur, une tasse, un menu et une machine à café",
    emotions: "au centre, le serveur qui écoute — détendu",
    hypothese: "le client veut boire un café sur place",
  },
  "a1-cinema": {
    lieu: "la caisse d'un cinéma avec des affiches de films",
    personnes: "au cinéma, devant le guichet",
    actions: "l'achat d'une place et choisit une séance du soir",
    objets: "un spectateur, une caissière, des tickets et un écran d'horaires",
    emotions: "à droite, les affiches colorées — content",
    hypothese: "il veut voir une comédie ce soir avec sa femme",
  },
  "a1-commissariat": {
    lieu: "un commissariat de police avec un bureau et un drapeau",
    personnes: "au commissariat, dans le bureau de l'accueil",
    actions: "une déclaration et explique qu'il a perdu son portefeuille",
    objets: "un citoyen, un agent, un formulaire, un stylo et un dossier",
    emotions: "au centre, l'agent qui prend des notes — stressé",
    hypothese: "le citoyen veut signaler la perte de son portefeuille",
  },
  "a1-marche": {
    lieu: "un marché en plein air avec des étals de légumes colorés",
    personnes: "au marché, devant un étal de légumes",
    actions: "un achat et choisit des tomates et des carottes",
    objets: "un client, un vendeur, des caisses de légumes, une balance et un sac",
    emotions: "à gauche, les tomates rouges — satisfait",
    hypothese: "le client veut préparer une soupe pour le dîner",
  },
  "a1-restaurant": {
    lieu: "un restaurant avec des tables dressées et un menu sur la table",
    personnes: "au restaurant, à table près de la fenêtre",
    actions: "une commande et choisit un plat principal et une boisson",
    objets: "un client, un serveur, un menu, des assiettes et des verres",
    emotions: "au centre, le serveur avec son carnet — attentif",
    hypothese: "le client a faim et veut goûter un plat suisse",
  },
  "a1-urgence": {
    lieu: "l'accueil des urgences avec des fauteuils et un panneau lumineux",
    personnes: "aux urgences de l'hôpital, à l'accueil",
    actions: "une consultation et explique qu'il a très mal au ventre",
    objets: "un patient, une infirmière, un fauteuil et une carte d'assurance",
    emotions: "au centre, le patient qui se tient le ventre — souffrant",
    hypothese: "il a besoin de voir un médecin rapidement",
  },
  "a1-coiffeur": {
    lieu: "un salon de coiffure avec un grand miroir et une chaise",
    personnes: "chez le coiffeur, dans le fauteuil",
    actions: "une coupe et explique qu'il veut couper un peu les cheveux",
    objets: "un client, une coiffeuse, des ciseaux, un peignoir et un miroir",
    emotions: "à droite, la coiffeuse avec un peigne — détendu",
    hypothese: "le client veut une coupe simple et rapide",
  },
  "a1-docteur": {
    lieu: "un cabinet médical avec un bureau et un lit d'examen",
    personnes: "chez le médecin, dans la salle de consultation",
    actions: "une consultation et décrit sa toux et sa fièvre",
    objets: "un patient, un docteur, un stéthoscope et un ordinateur",
    emotions: "au centre, le patient sur la chaise — fatigué",
    hypothese: "il est malade depuis deux jours et veut une ordonnance",
  },
  "a1-pediatre": {
    lieu: "un cabinet de pédiatrie avec des jouets et des dessins au mur",
    personnes: "chez le pédiatre, dans la salle d'attente puis au cabinet",
    actions: "une consultation et décrit la fièvre de son enfant",
    objets: "un parent, un enfant, un médecin, un thermomètre et un carnet de santé",
    emotions: "à gauche, l'enfant sur les genoux du parent — inquiet",
    hypothese: "l'enfant a de la fièvre depuis hier soir",
  },
  "a1-controle-train": {
    lieu: "l'intérieur d'un train avec des rangées de sièges",
    personnes: "dans le train, entre deux wagons",
    actions: "un contrôle et cherche son billet dans son sac",
    objets: "un voyageur, un contrôleur en uniforme, un billet et un sac",
    emotions: "au centre, le contrôleur qui attend — un peu nerveux",
    hypothese: "le voyageur veut montrer son billet pour continuer son trajet",
  },
  "a1-coupure-courant": {
    lieu: "un appartement sombre, éclairé seulement par une lampe de poche",
    personnes: "chez elle, dans le salon",
    actions: "un appel téléphonique pour signaler une panne d'électricité",
    objets: "une habitante, un téléphone, des bougies et un réfrigérateur éteint",
    emotions: "au centre, la femme au téléphone — inquiète",
    hypothese: "il n'y a plus de courant depuis plus d'une heure",
  },
  "a1-fuite-eau": {
    lieu: "une salle de bain avec de l'eau qui coule sur le sol",
    personnes: "dans l'appartement, dans la salle de bain",
    actions: "un appel d'urgence pour signaler une fuite d'eau",
    objets: "un locataire, un téléphone, un tuyau qui fuit, un seau et une serviette",
    emotions: "au centre, l'eau qui coule du plafond — paniqué",
    hypothese: "il a besoin d'un plombier tout de suite",
  },
  "a1-inscription-club": {
    lieu: "l'accueil d'un club de sport avec des affiches et des trophées",
    personnes: "dans un club de fitness, à l'accueil",
    actions: "une inscription et demande les horaires des cours",
    objets: "un nouveau membre, un accueillant, un formulaire et des chaussures de sport",
    emotions: "à droite, le flyer des cours — motivé",
    hypothese: "il veut faire du sport deux fois par semaine",
  },
  "a1-magasin-chaussure": {
    lieu: "un magasin de chaussures avec des étagères et un miroir",
    personnes: "dans un magasin, près des rayons",
    actions: "un essayage et marche pour tester une paire de baskets",
    objets: "un client, un vendeur, des chaussures, un miroir et une boîte",
    emotions: "au centre, le client dans les chaussures — hésitant",
    hypothese: "il cherche des chaussures confortables pour marcher",
  },
  "a1-magasin-vetement": {
    lieu: "un magasin de vêtements avec des portants et des miroirs",
    personnes: "dans un magasin, devant un portant de manteaux",
    actions: "un essayage et demande sa taille pour un manteau d'hiver",
    objets: "une cliente, une vendeuse, des manteaux, un cintre et un miroir",
    emotions: "à gauche, les manteaux bleus — intéressée",
    hypothese: "elle cherche un manteau chaud pour l'hiver",
  },
  "a1-mot-de-passe": {
    lieu: "un bureau avec un ordinateur dont l'écran affiche un message d'erreur",
    personnes: "chez elle, devant son ordinateur",
    actions: "un appel téléphonique parce qu'elle a oublié son mot de passe",
    objets: "une utilisatrice, un téléphone, un ordinateur et un clavier",
    emotions: "au centre, l'écran avec « mot de passe incorrect » — frustrée",
    hypothese: "elle ne peut plus accéder à son compte en ligne",
  },
  "a1-rendez-vous": {
    lieu: "un salon calme, la personne est assise avec un agenda",
    personnes: "chez elle, au téléphone avec un cabinet",
    actions: "une prise de rendez-vous et donne son nom et choisit un mardi",
    objets: "un client, un téléphone, un agenda et un stylo",
    emotions: "à droite, le calendrier ouvert — organisé",
    hypothese: "il veut un rendez-vous la semaine prochaine à 14 heures",
  },
  "a1-logement": {
    lieu: "une agence immobilière avec des photos d'appartements au mur",
    personnes: "dans une agence, au bureau de l'agent",
    actions: "une recherche et demande le loyer et le nombre de pièces",
    objets: "un locataire, un agent, des annonces, un plan et des clés",
    emotions: "au centre, les photos d'appartements — motivé",
    hypothese: "il cherche un appartement de trois pièces pour sa famille",
  },
  "a1-permis": {
    lieu: "un bureau administratif avec un guichet et des formulaires",
    personnes: "dans un office des migrations, devant le guichet",
    actions: "un renouvellement et demande la liste des documents nécessaires",
    objets: "un résident, un employé, un permis, une pièce d'identité et un formulaire",
    emotions: "au centre, l'employé qui explique la procédure — sérieux",
    hypothese: "il doit renouveler son permis de séjour avant la fin du mois",
  },
  "a1-telephone-docteur": {
    lieu: "un salon avec un thermomètre et des mouchoirs sur la table",
    personnes: "chez lui, allongé sur le canapé",
    actions: "un appel au cabinet médical pour expliquer qu'il est malade",
    objets: "un patient, un téléphone, un thermomètre et des médicaments",
    emotions: "au centre, le patient avec une couverture — faible et malade",
    hypothese: "il veut un rendez-vous chez le médecin aujourd'hui",
  },
  "a1-hopital": {
    lieu: "l'entrée d'un hôpital avec un panneau d'accueil et des couloirs",
    personnes: "à l'hôpital, à l'accueil principal",
    actions: "une visite et demande où se trouve la chambre 312",
    objets: "un visiteur, une réceptionniste, un bouquet de fleurs et un plan",
    emotions: "à droite, l'ascenseur — inquiet mais calme",
    hypothese: "il vient voir son ami qui est hospitalisé",
  },
};

const MOYEN_IMAGE_SECTIONS: Record<string, ImageDescriptionModel["sections"]> = {
  medecin: {
    lieu: "un cabinet médical avec un bureau, un lit d'examen et des instruments",
    personnes: "chez le médecin, dans le cabinet de consultation",
    actions: "une consultation et décrit ses symptômes depuis trois jours",
    objets: "un patient, un médecin, un stéthoscope, un ordinateur et un dossier médical",
    emotions: "au centre, le patient sur la chaise — fatigué et inquiet",
    hypothese: "le patient veut un diagnostic et une ordonnance",
  },
  accident: {
    lieu: "une rue en ville avec une voiture accidentée et des passants",
    personnes: "dans la rue, au carrefour de l'accident",
    actions: "un appel aux secours et explique ce qui s'est passé",
    objets: "un témoin, un téléphone, une voiture endommagée et un feu rouge",
    emotions: "à gauche, la voiture sur le côté — choqué et stressé",
    hypothese: "il appelle le 144 pour signaler un accident de la route",
  },
  bibliotheque: {
    lieu: "une grande bibliothèque moderne avec des rayons et des tables de lecture",
    personnes: "à la bibliothèque, au bureau d'inscription",
    actions: "une demande d'inscription et pose des questions sur les prêts",
    objets: "un usager, une bibliothécaire, des livres, une carte et un formulaire",
    emotions: "au centre, le comptoir d'accueil — curieux et motivé",
    hypothese: "la personne veut emprunter des livres en français",
  },
  boucherie: {
    lieu: "une boucherie avec une vitrine remplie de viandes et saucissons",
    personnes: "dans une boucherie, devant le comptoir",
    actions: "un achat et demande conseil pour un rôti de quatre personnes",
    objets: "un client, un boucher, de la viande, une balance et du papier alimentaire",
    emotions: "à droite, le boucher en tablier — attentif et professionnel",
    hypothese: "le client prépare un repas de famille le dimanche",
  },
  boulangerie: {
    lieu: "une boulangerie avec des vitrines de pains, croissants et pâtisseries",
    personnes: "dans une boulangerie, le matin",
    actions: "une commande pour un petit-déjeuner de huit personnes",
    objets: "une cliente, une vendeuse, des baguettes, des croissants et une caisse",
    emotions: "au centre, les viennoiseries dorées — satisfaite",
    hypothese: "elle organise un brunch pour des amis",
  },
  bus: {
    lieu: "un arrêt de bus urbain avec un abri et un panneau d'horaires",
    personnes: "dans le bus, près du conducteur",
    actions: "une question sur le trajet et demande à quel arrêt descendre",
    objets: "un voyageur, un conducteur, un billet, un plan et un arrêt de bus",
    emotions: "à gauche, le pare-brise du bus — un peu perdu",
    hypothese: "il ne connaît pas bien la ville et cherche son chemin",
  },
  cafe: {
    lieu: "un café avec des tables, un comptoir et une machine à espresso",
    personnes: "dans un café, à une table près de la fenêtre",
    actions: "une commande de boisson et de sandwich, puis le paiement",
    objets: "un client, un serveur, une tasse, un menu et un terminal de paiement",
    emotions: "au centre, le serveur souriant — détendu",
    hypothese: "le client prend une pause pendant sa journée de travail",
  },
  chaussure: {
    lieu: "un magasin de chaussures avec des étagères et un banc d'essayage",
    personnes: "dans un magasin de chaussures, en zone d'essayage",
    actions: "un essayage et précise sa pointure et son budget",
    objets: "un client, une vendeuse, des chaussures, un miroir et des boîtes",
    emotions: "à droite, le banc d'essayage — hésitant mais intéressé",
    hypothese: "il cherche des chaussures confortables pour marcher",
  },
  cinema: {
    lieu: "le hall d'un cinéma avec des affiches de films et un guichet",
    personnes: "au cinéma, devant le guichet des billets",
    actions: "le choix d'un film et demande les horaires et le prix",
    objets: "un spectateur, une caissière, des affiches, des tickets et un écran d'horaires",
    emotions: "à gauche, les affiches colorées — enthousiaste",
    hypothese: "il veut voir un film en version française ce soir",
  },
  club: {
    lieu: "un club sportif ou de loisirs avec un gymnase et du matériel",
    personnes: "dans un club, à l'accueil des activités",
    actions: "une inscription et pose des questions sur les horaires et le matériel",
    objets: "un adhérent, un moniteur, un ballon, un planning et un formulaire",
    emotions: "au centre, le gymnase en arrière-plan — motivé",
    hypothese: "il veut rejoindre un cours de sport le mercredi soir",
  },
  coiffeur: {
    lieu: "un salon de coiffure avec des miroirs, des fauteuils et des produits",
    personnes: "chez le coiffeur, assis dans le fauteuil",
    actions: "une explication de la coupe souhaitée et demande le prix",
    objets: "une cliente, une coiffeuse, des ciseaux, un peigne et un sèche-cheveux",
    emotions: "à droite, le miroir — confiante",
    hypothese: "elle veut une nouvelle coupe avant une fête",
  },
  ecole: {
    lieu: "l'accueil d'une école avec un bureau et des panneaux d'information",
    personnes: "à l'école, au secrétariat",
    actions: "une inscription et demande les documents et les horaires",
    objets: "un parent, une secrétaire, un dossier, des formulaires et un planning",
    emotions: "au centre, le comptoir d'accueil — sérieux et organisé",
    hypothese: "le parent veut inscrire son enfant en primaire",
  },
  fuite: {
    lieu: "un appartement avec de l'eau qui coule du plafond ou d'un tuyau",
    personnes: "chez lui, dans la salle de bain ou la cuisine",
    actions: "un appel à la régie et décrit l'urgence de la fuite",
    objets: "un locataire, un téléphone, une flaque d'eau, un seau et un robinet",
    emotions: "au sol, l'eau qui s'accumule — paniqué et inquiet",
    hypothese: "il a besoin d'un plombier en urgence",
  },
  gare: {
    lieu: "le hall d'une gare suisse avec des panneaux d'horaires et des quais",
    personnes: "à la gare, au guichet CFF",
    actions: "l'achat d'un billet et demande les correspondances",
    objets: "un voyageur, un employé, un billet, un abonnement et un grand écran",
    emotions: "au centre, le tableau des départs — pressé mais calme",
    hypothese: "il prépare un voyage avec changement de train",
  },
  hopital: {
    lieu: "l'accueil d'un hôpital avec une salle d'attente et des panneaux",
    personnes: "à l'hôpital, à l'accueil des urgences",
    actions: "une explication de la situation et demande où aller",
    objets: "un accompagnant, une infirmière, une carte d'assurance et un fauteuil roulant",
    emotions: "à droite, la salle d'attente — inquiet et préoccupé",
    hypothese: "il accompagne un proche qui ne se sent pas bien",
  },
  immobilier: {
    lieu: "une agence immobilière avec des photos d'appartements au mur",
    personnes: "dans une agence immobilière, face à un conseiller",
    actions: "une recherche de logement et précise son budget et ses critères",
    objets: "un client, un agent, des annonces, un plan et des clés",
    emotions: "au centre, les photos d'appartements — espérant",
    hypothese: "il cherche un appartement de trois pièces pour sa famille",
  },
  pediatre: {
    lieu: "un cabinet de pédiatrie décoré pour les enfants",
    personnes: "chez le pédiatre, dans la salle d'attente ou le bureau",
    actions: "un appel téléphonique et décrit les symptômes de son enfant",
    objets: "un parent, un médecin, un enfant, un téléphone et un thermomètre",
    emotions: "à gauche, l'enfant sur les genoux — inquiet pour son fils",
    hypothese: "l'enfant a de la fièvre depuis hier soir",
  },
  pharmacie: {
    lieu: "une pharmacie avec des étagères de médicaments et un comptoir",
    personnes: "dans une pharmacie, au comptoir de conseil",
    actions: "une demande de conseil et décrit ses symptômes légers",
    objets: "un client, une pharmacienne, des médicaments, une ordonnance et un flacon",
    emotions: "au centre, la pharmacienne en blouse blanche — attentif",
    hypothese: "il veut un sirop pour la toux sans ordonnance",
  },
  police: {
    lieu: "un poste de police avec un bureau d'accueil et des affiches",
    personnes: "au commissariat, devant le guichet",
    actions: "une déclaration de perte ou de vol avec des détails précis",
    objets: "un citoyen, un policier, un formulaire, un stylo et une pièce d'identité",
    emotions: "au centre, le bureau du policier — contrarié mais calme",
    hypothese: "il a perdu son portefeuille dans le bus",
  },
  "rendez-vous": {
    lieu: "un bureau ou un accueil avec un téléphone et un calendrier",
    personnes: "au téléphone, depuis chez lui ou au travail",
    actions: "une prise de rendez-vous et propose ses disponibilités",
    objets: "un appelant, une secrétaire, un agenda, un téléphone et un stylo",
    emotions: "au centre, le calendrier ouvert — organisé",
    hypothese: "il veut déplacer un rendez-vous médical à la semaine prochaine",
  },
  restaurant: {
    lieu: "un restaurant avec des tables dressées et un menu affiché",
    personnes: "au restaurant, à table avec un serveur",
    actions: "un choix de plat et signale une allergie aux noix",
    objets: "des clients, un serveur, un menu, des verres et des assiettes",
    emotions: "au centre, la table bien dressée — détendu et affamé",
    hypothese: "le couple fête un anniversaire au restaurant",
  },
  telephone: {
    lieu: "un salon ou une cuisine, la personne tient un téléphone",
    personnes: "chez lui, en train d'appeler le cabinet médical",
    actions: "un appel et décrit ses symptômes pour obtenir un rendez-vous",
    objets: "un patient, un téléphone, un thermomètre, des médicaments et un canapé",
    emotions: "au centre, le patient assis — faible et malade",
    hypothese: "il ne peut pas se déplacer et a besoin d'un rendez-vous rapide",
  },
  train: {
    lieu: "une gare suisse avec un train CFF sur le quai",
    personnes: "à la gare de Lausanne, au guichet ou sur le quai",
    actions: "l'achat d'un billet pour Sion et demande les réductions",
    objets: "un voyageur, un contrôleur, un train, un billet et un abonnement demi-tarif",
    emotions: "à droite, le train sur le quai — pressé mais satisfait",
    hypothese: "il voyage pour le week-end en Valais",
  },
  travail: {
    lieu: "un bureau ou une salle de réunion pour un entretien d'embauche",
    personnes: "dans une entreprise, face à un recruteur",
    actions: "un entretien et présente son expérience et ses motivations",
    objets: "un candidat, un recruteur, un CV, un bureau et des chaises",
    emotions: "au centre, la table de réunion — nerveux mais confiant",
    hypothese: "il postule pour un poste dans une usine locale",
  },
  vetement: {
    lieu: "un magasin de vêtements avec des portants et des cabines",
    personnes: "dans un magasin de vêtements, devant les rayons",
    actions: "un choix de robe et demande à l'essayer en cabine",
    objets: "une cliente, une vendeuse, des vêtements, un miroir et un cintre",
    emotions: "à droite, la cabine d'essayage — contente et curieuse",
    hypothese: "elle cherche une tenue pour un mariage",
  },
};

const ALL_IMAGE_SECTIONS = { ...A1_IMAGE_SECTIONS, ...MOYEN_IMAGE_SECTIONS };

export const IMAGE_DESCRIPTION_MODELS: Record<string, ImageDescriptionModel> = Object.fromEntries(
  Object.entries(ALL_IMAGE_SECTIONS).map(([id, sections]) => [
    id,
    { sections, formatted: buildImageFormatted(sections) },
  ]),
);

// ——— Argumentation model responses (task 5) ———

export const ARGUMENTATION_RESPONSES: Record<string, { positive: string; negative: string }> = {
  "transports publics": {
    positive:
      "J'aime les transports publics parce qu'ils sont pratiques et moins chers que la voiture. Je peux lire ou me reposer pendant le trajet. C'est aussi mieux pour l'environnement.",
    negative:
      "Je n'aime pas toujours les transports publics parce qu'ils sont parfois en retard ou bondés. Le soir, il y a moins de bus et c'est difficile de rentrer tard.",
  },
  "téléphone portable": {
    positive:
      "J'utilise beaucoup mon téléphone parce qu'il me permet de parler avec ma famille à l'étranger, de chercher des informations et d'apprendre le français avec des applications.",
    negative:
      "J'utilise mon téléphone, mais pas trop, parce que je perds du temps sur les réseaux sociaux. Parfois, je préfère parler en personne.",
  },
  école: {
    positive:
      "J'aime l'école parce que j'apprends beaucoup de choses utiles. Les cours de français m'aident à mieux vivre en Suisse et à trouver du travail.",
    negative:
      "L'école est parfois difficile pour moi parce que la langue n'est pas facile. J'ai besoin de plus de temps pour comprendre les exercices.",
  },
  sport: {
    positive:
      "J'aime faire du sport parce que ça me fait du bien et ça me donne de l'énergie. Le week-end, je fais du vélo avec ma famille près du lac.",
    negative:
      "Je ne fais pas beaucoup de sport parce que je travaille beaucoup et je suis fatigué le soir. Mais je sais que c'est important pour la santé.",
  },
  alimentation: {
    positive:
      "Je préfère manger à la maison parce que c'est plus sain et moins cher. Ma femme cuisine des plats vietnamiens et parfois des plats suisses.",
    negative:
      "Parfois, je mange dehors parce que je n'ai pas le temps de cuisiner. C'est pratique, mais ce n'est pas toujours bon pour la santé.",
  },
  travail: {
    positive:
      "J'aime mon travail dans l'usine parce que mes collègues sont sympathiques et l'horaire est régulier. C'est un métier stable qui me permet de subvenir aux besoins de ma famille.",
    negative:
      "Mon travail est parfois fatigant parce que je fais des heures debout. Mais c'est nécessaire pour gagner ma vie en Suisse.",
  },
  logement: {
    positive:
      "J'aime mon appartement parce qu'il est calme et proche des transports. Il y a un petit jardin pour les enfants et les voisins sont gentils.",
    negative:
      "Mon logement est un peu petit pour une famille de quatre personnes. Le loyer est aussi assez cher dans la région.",
  },
  famille: {
    positive:
      "La famille est très importante pour moi parce qu'elle me donne du soutien et de la joie. Le week-end, nous mangeons ensemble et nous parlons de nos projets.",
    negative:
      "Ma famille est importante, mais parfois c'est difficile parce que mes parents vivent loin, au Vietnam. Je les appelle souvent par téléphone.",
  },
  "apprentissage du français": {
    positive:
      "Apprendre le français n'est pas toujours facile, mais c'est très utile. Les cours, les applications et parler avec mes voisins m'aident beaucoup.",
    negative:
      "Le français est difficile pour moi, surtout la grammaire et la prononciation. Parfois, j'ai peur de faire des erreurs quand je parle.",
  },
  courses: {
    positive:
      "Je fais les courses au supermarché et au marché le samedi. J'aime le marché parce que les légumes sont frais et le vendeur est sympathique.",
    negative:
      "Je n'aime pas toujours faire les courses parce que c'est long et les prix augmentent. Le week-end, les magasins sont souvent pleins.",
  },
  santé: {
    positive:
      "Pour rester en bonne santé, je mange des légumes, je dors suffisamment et je fais de la marche. Quand je suis malade, je vais chez le médecin rapidement.",
    negative:
      "Je fais attention à ma santé, mais ce n'est pas toujours facile ici parce que les soins sont chers et les rendez-vous prennent du temps.",
  },
  argent: {
    positive:
      "J'économise un peu d'argent chaque mois pour les vacances et les imprévus. J'achète surtout ce qui est nécessaire : nourriture, loyer et transport.",
    negative:
      "La vie est chère en Suisse, donc je dois faire attention à mes dépenses. Je n'achète pas souvent des choses qui ne sont pas essentielles.",
  },
  Internet: {
    positive:
      "Internet est très utile pour moi parce que je peux apprendre le français, regarder des vidéos et communiquer avec ma famille au Vietnam.",
    negative:
      "Internet est utile, mais parfois je passe trop de temps en ligne. Il faut faire attention à ne pas oublier les activités en famille.",
  },
  "reseaux sociaux": {
    positive:
      "J'utilise les réseaux sociaux pour rester en contact avec ma famille et mes amis. C'est pratique pour voir des photos et des nouvelles.",
    negative:
      "Je n'utilise pas beaucoup les réseaux sociaux parce que je préfère les appels téléphoniques. Parfois, il y a trop d'informations et ce n'est pas toujours positif.",
  },
  environnement: {
    positive:
      "Je trie mes déchets et j'utilise les transports en commun. Je pense qu'il faut protéger la nature pour nos enfants et pour l'avenir.",
    negative:
      "Je fais quelques gestes pour l'environnement, mais ce n'est pas toujours facile. Par exemple, recycler demande du temps et de l'organisation.",
  },
  ville: {
    positive:
      "Je préfère vivre près d'une ville comme Neuchâtel parce qu'il y a des écoles, des magasins et des transports. C'est pratique pour le travail.",
    negative:
      "La ville est pratique, mais parfois il y a trop de bruit et de circulation. Le week-end, j'aime aller à la campagne pour me reposer.",
  },
  "temps libre": {
    positive:
      "Quand j'ai du temps libre, j'aime me promener au bord du lac avec ma famille. Parfois, nous regardons un film ou nous cuisinons ensemble.",
    negative:
      "Je n'ai pas beaucoup de temps libre parce que je travaille et j'ai des cours de français le soir. Le dimanche, je me repose surtout.",
  },
  voyage: {
    positive:
      "J'aimerais voyager en Italie ou en France pour découvrir de nouveaux endroits. Voyager permet de se reposer et d'apprendre d'autres cultures.",
    negative:
      "Je voyage peu pour le moment parce que c'est cher et je dois travailler. Mais un jour, j'aimerais retourner au Vietnam avec mes enfants.",
  },
  animaux: {
    positive:
      "J'aime les chats parce qu'ils sont calmes et affectueux. Un animal de compagnie peut faire du bien à toute la famille.",
    negative:
      "Je n'ai pas d'animal parce que notre appartement est petit et un animal coûte de l'argent. C'est une grande responsabilité.",
  },
  lecture: {
    positive:
      "J'aime lire des livres simples en français pour apprendre de nouveaux mots. La lecture m'aide à mieux comprendre la langue.",
    negative:
      "Je ne lis pas beaucoup parce que je préfère regarder des vidéos ou écouter des podcasts. Après le travail, j'ai du mal à me concentrer.",
  },
  cinema: {
    positive:
      "J'aime aller au cinéma pour voir des comédies. C'est un bon moment en famille et on peut se détendre.",
    negative:
      "Je préfère regarder des films à la maison parce que c'est moins cher et plus confortable. Au cinéma, les places coûtent cher en Suisse.",
  },
  voisinage: {
    positive:
      "Il faut être poli avec ses voisins, dire bonjour et respecter le calme le soir. Une bonne relation rend la vie plus agréable.",
    negative:
      "Parfois, c'est difficile avec les voisins parce que nous n'avons pas les mêmes habitudes. Il faut parler calmement pour trouver des solutions.",
  },
  technologie: {
    positive:
      "La technologie m'aide beaucoup au quotidien : GPS, traduction, cours en ligne. Mon téléphone est l'outil le plus utile pour moi.",
    negative:
      "La technologie est utile, mais elle change vite et c'est difficile de tout suivre. Parfois, je préfère les choses simples.",
  },
  egalite: {
    positive:
      "Je pense que tout le monde doit être respecté, les hommes et les femmes, les jeunes et les personnes âgées. L'égalité est importante dans une société.",
    negative:
      "L'égalité est importante, mais je sais qu'il y a encore des différences au travail et dans la société. Il faut continuer à progresser.",
  },
  "regles de vie": {
    positive:
      "Les règles sont importantes à l'école et dans la rue parce qu'elles protègent tout le monde. Par exemple, respecter les feux rouges évite les accidents.",
    negative:
      "Les règles sont nécessaires, mais parfois elles sont difficiles à comprendre quand on arrive dans un nouveau pays. Il faut du temps pour s'adapter.",
  },
};

// ——— Helper functions ———

export function getThemeSuggestions(word: string): string[] {
  return THEME_QUESTION_SUGGESTIONS[word] ?? [];
}

export function getInterviewSuggestion(question: string): string | undefined {
  return DIRECTED_INTERVIEW_SUGGESTIONS[question];
}

export function getImageDescriptionModel(situationId: string): ImageDescriptionModel | undefined {
  return IMAGE_DESCRIPTION_MODELS[situationId];
}

export function getArgumentationResponses(
  theme: string,
): { positive: string; negative: string } | undefined {
  return ARGUMENTATION_RESPONSES[theme];
}

export { getSituationDialogueSuggestions, type SituationDialogueSuggestions } from "./po-dialogues";

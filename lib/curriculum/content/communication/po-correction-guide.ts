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

// ——— Argumentation model response (task 5) ———

type ArgumentationThemeModel = {
  thesis: string;
  arguments: Array<{ title: string; explanation: string; example: string }>;
  counter?: { idea: string; refutation: string };
  conclusion: string;
};

const ARGUMENTATION_THEME_MODELS: Record<string, ArgumentationThemeModel> = {
  "transports publics": {
    thesis: "les transports publics doivent être encouragés, car ils rendent les déplacements plus simples, plus économiques et plus responsables",
    arguments: [
      { title: "ils sont pratiques au quotidien", explanation: "ils permettent de se déplacer sans chercher une place de parc et sans conduire dans les embouteillages", example: "par exemple, une personne peut prendre le bus pour aller au travail et utiliser le temps du trajet pour lire ou réviser le français" },
      { title: "ils coûtent souvent moins cher que la voiture", explanation: "une voiture demande une assurance, de l'essence, des réparations et un parking", example: "avec un abonnement mensuel, une famille peut mieux prévoir son budget de transport" },
      { title: "ils protègent davantage l'environnement", explanation: "un bus ou un train transporte beaucoup de personnes en même temps et réduit le nombre de voitures sur la route", example: "dans une ville, moins de voitures signifie aussi moins de bruit et un air plus agréable" },
    ],
    counter: { idea: "on peut dire que les transports publics sont parfois en retard ou bondés", refutation: "mais ces problèmes peuvent être améliorés avec plus de lignes, de meilleurs horaires et une organisation plus régulière" },
    conclusion: "il faut donc les développer et les rendre accessibles à tous",
  },
  "téléphone portable": {
    thesis: "le téléphone portable est utile s'il est utilisé avec modération et dans un but clair",
    arguments: [
      { title: "il facilite la communication", explanation: "il permet de rester en contact avec la famille, les amis et les services importants", example: "une personne étrangère peut appeler sa famille à l'étranger ou recevoir un message de l'école de son enfant" },
      { title: "il aide dans la vie pratique", explanation: "il donne accès aux plans, aux horaires, aux traductions et aux démarches en ligne", example: "avec une application, on peut trouver un bus, traduire un mot ou prendre rendez-vous chez le médecin" },
      { title: "il peut soutenir l'apprentissage", explanation: "les applications, les podcasts et les vidéos permettent de pratiquer régulièrement", example: "un apprenant peut écouter dix minutes de français chaque jour pendant son trajet" },
    ],
    counter: { idea: "certains pensent que le téléphone fait perdre du temps", refutation: "c'est vrai si l'on reste trop longtemps sur les réseaux sociaux, mais on peut fixer des limites et choisir des usages utiles" },
    conclusion: "le téléphone doit rester un outil, pas une dépendance",
  },
  école: {
    thesis: "l'école est essentielle parce qu'elle prépare à la vie professionnelle, sociale et personnelle",
    arguments: [
      { title: "elle transmet des connaissances", explanation: "les cours donnent des bases en langue, calcul, culture générale et organisation", example: "un cours de français aide un adulte à comprendre une lettre administrative ou à parler avec un enseignant" },
      { title: "elle apprend à vivre avec les autres", explanation: "les élèves doivent écouter, respecter les règles et travailler en groupe", example: "dans un projet de classe, chacun doit participer et accepter les idées des autres" },
      { title: "elle ouvre des possibilités pour l'avenir", explanation: "une bonne formation donne plus de chances de trouver un emploi ou de continuer des études", example: "un jeune qui maîtrise mieux la langue peut accéder plus facilement à un apprentissage" },
    ],
    counter: { idea: "l'école peut être difficile et fatigante", refutation: "mais cette difficulté fait partie de l'apprentissage et peut être accompagnée par les enseignants et la famille" },
    conclusion: "il faut donc soutenir l'école et aider les élèves à y réussir",
  },
  sport: {
    thesis: "le sport est important parce qu'il améliore la santé, l'équilibre mental et les relations sociales",
    arguments: [
      { title: "il protège la santé", explanation: "bouger régulièrement renforce le corps et diminue certains risques de maladie", example: "marcher trente minutes par jour peut déjà aider le cœur et la respiration" },
      { title: "il réduit le stress", explanation: "après le travail ou les cours, l'activité physique aide à se détendre", example: "faire du vélo au bord du lac permet de penser à autre chose et de mieux dormir" },
      { title: "il crée du lien social", explanation: "beaucoup de sports se pratiquent en équipe ou dans un club", example: "un club de football ou de natation permet de rencontrer des personnes du quartier" },
    ],
    counter: { idea: "certaines personnes disent qu'elles n'ont pas le temps", refutation: "mais il n'est pas nécessaire de faire beaucoup : de petites habitudes régulières suffisent pour commencer" },
    conclusion: "chacun devrait choisir une activité adaptée à son âge et à son rythme",
  },
  alimentation: {
    thesis: "une alimentation équilibrée est nécessaire pour rester en bonne santé et mieux vivre au quotidien",
    arguments: [
      { title: "elle donne de l'énergie", explanation: "un repas varié aide le corps à travailler, étudier et se concentrer", example: "manger des légumes, des féculents et une protéine évite d'avoir faim trop vite" },
      { title: "elle prévient des problèmes de santé", explanation: "trop de sucre, de graisse ou de produits industriels peut avoir des conséquences à long terme", example: "cuisiner à la maison permet de contrôler le sel et la quantité d'huile" },
      { title: "elle peut renforcer la vie familiale", explanation: "préparer et partager un repas crée un moment de discussion", example: "le dimanche, une famille peut cuisiner un plat traditionnel et le faire découvrir aux enfants" },
    ],
    counter: { idea: "on pense parfois que manger sainement coûte trop cher", refutation: "mais les produits simples, de saison et cuisinés soi-même peuvent rester abordables" },
    conclusion: "il faut donc privilégier des habitudes simples, régulières et réalistes",
  },
  travail: {
    thesis: "un bon travail ne se résume pas au salaire : il doit aussi offrir du respect, de la stabilité et des perspectives",
    arguments: [
      { title: "le salaire reste important", explanation: "il permet de payer le logement, la nourriture, les assurances et les besoins de la famille", example: "un emploi stable aide une personne à organiser son budget chaque mois" },
      { title: "l'ambiance compte beaucoup", explanation: "des collègues respectueux et un responsable clair rendent le travail moins stressant", example: "dans une équipe solidaire, on ose poser des questions quand on ne comprend pas une tâche" },
      { title: "la possibilité d'apprendre est essentielle", explanation: "un emploi peut aussi permettre de progresser et d'obtenir plus de responsabilités", example: "une formation interne peut aider un employé à changer de poste ou à mieux parler avec les clients" },
    ],
    counter: { idea: "certains choisissent seulement le travail le mieux payé", refutation: "mais un salaire élevé ne compense pas toujours une mauvaise ambiance ou une fatigue excessive" },
    conclusion: "le meilleur emploi est donc celui qui équilibre revenu, respect et évolution",
  },
  logement: {
    thesis: "un logement correct doit être abordable, bien situé et adapté aux besoins de la famille",
    arguments: [
      { title: "le prix est déterminant", explanation: "si le loyer est trop élevé, il reste peu d'argent pour les autres dépenses", example: "une famille doit aussi payer l'assurance maladie, les transports et l'alimentation" },
      { title: "la localisation facilite la vie", explanation: "vivre près des écoles, des transports et des commerces fait gagner du temps", example: "un appartement proche d'un arrêt de bus aide les parents qui n'ont pas de voiture" },
      { title: "l'espace influence le bien-être", explanation: "chaque personne a besoin d'un minimum de calme et d'intimité", example: "des enfants qui partagent une chambre ont aussi besoin d'un endroit pour faire leurs devoirs" },
    ],
    counter: { idea: "on peut accepter un logement plus petit pour payer moins cher", refutation: "c'est possible temporairement, mais à long terme le manque d'espace peut créer des tensions" },
    conclusion: "la politique du logement doit donc aider les familles à trouver des solutions dignes",
  },
  famille: {
    thesis: "la famille joue un rôle central parce qu'elle apporte du soutien, transmet des valeurs et construit l'identité",
    arguments: [
      { title: "elle soutient dans les difficultés", explanation: "quand une personne est malade, triste ou perd son emploi, la famille peut aider concrètement", example: "un parent peut garder les enfants pendant un rendez-vous ou accompagner à l'hôpital" },
      { title: "elle transmet des repères", explanation: "les enfants apprennent la langue, les traditions et le respect à travers la vie familiale", example: "préparer un plat du pays d'origine permet de garder un lien avec son histoire" },
      { title: "elle donne un sentiment d'appartenance", explanation: "savoir que l'on compte pour quelqu'un aide à se sentir moins seul", example: "un appel régulier aux grands-parents peut garder la relation vivante malgré la distance" },
    ],
    counter: { idea: "certaines familles connaissent aussi des conflits", refutation: "mais ces conflits n'effacent pas l'importance du dialogue, de l'entraide et du respect" },
    conclusion: "la famille reste donc une base importante, même lorsque ses formes changent",
  },
  "apprentissage du français": {
    thesis: "apprendre le français est indispensable pour s'intégrer, travailler et participer à la vie sociale",
    arguments: [
      { title: "la langue facilite les démarches", explanation: "comprendre le français aide à lire les courriers, remplir des formulaires et parler avec l'administration", example: "à la commune ou chez le médecin, quelques phrases claires évitent beaucoup de malentendus" },
      { title: "elle ouvre l'accès au travail", explanation: "beaucoup d'emplois demandent de comprendre des consignes et de communiquer avec les collègues", example: "dans un magasin ou une entreprise, parler français permet de répondre aux clients" },
      { title: "elle crée du lien social", explanation: "oser parler avec les voisins ou les parents d'élèves rend la vie quotidienne plus agréable", example: "une conversation simple dans l'immeuble peut devenir le début d'une relation de confiance" },
    ],
    counter: { idea: "la grammaire et la prononciation peuvent décourager", refutation: "mais l'important est de pratiquer régulièrement, même avec des erreurs" },
    conclusion: "il faut donc multiplier les occasions de parler dans des situations réelles",
  },
  courses: {
    thesis: "faire les courses demande de trouver un équilibre entre prix, qualité et habitudes personnelles",
    arguments: [
      { title: "le prix compte pour le budget", explanation: "les dépenses alimentaires reviennent chaque semaine et peuvent peser sur une famille", example: "comparer les prix entre le marché et le supermarché aide à mieux gérer son argent" },
      { title: "la qualité des produits est importante", explanation: "des aliments frais donnent souvent de meilleurs repas et une meilleure santé", example: "acheter des légumes de saison permet de cuisiner simplement et sainement" },
      { title: "les courses sont aussi un moment social", explanation: "au marché ou dans les petits commerces, on peut parler avec les vendeurs", example: "demander conseil à un boulanger ou à un maraîcher aide à pratiquer le français" },
    ],
    counter: { idea: "le supermarché est parfois plus rapide", refutation: "c'est vrai, mais on peut varier selon le temps disponible et les produits recherchés" },
    conclusion: "le meilleur choix dépend donc du budget, du temps et de la qualité souhaitée",
  },
  santé: {
    thesis: "préserver sa santé demande de la prévention, de bonnes habitudes et un accès clair aux soins",
    arguments: [
      { title: "les habitudes quotidiennes sont essentielles", explanation: "manger équilibré, dormir suffisamment et bouger diminuent les risques", example: "marcher après le repas ou prendre les escaliers sont de petits gestes utiles" },
      { title: "la prévention évite des problèmes graves", explanation: "consulter assez tôt permet souvent de soigner plus facilement", example: "un contrôle chez le médecin peut détecter une tension trop élevée" },
      { title: "comprendre le système de santé rassure", explanation: "assurance, rendez-vous et médicaments peuvent être difficiles pour les nouveaux arrivants", example: "une explication simple aide une personne à savoir quand appeler son médecin ou les urgences" },
    ],
    counter: { idea: "les soins coûtent cher et les rendez-vous prennent du temps", refutation: "mais retarder les soins peut coûter encore plus cher et aggraver la situation" },
    conclusion: "la santé doit donc être protégée avant l'apparition des grands problèmes",
  },
  argent: {
    thesis: "bien gérer son argent est nécessaire pour vivre plus sereinement et éviter les difficultés",
    arguments: [
      { title: "un budget donne de la visibilité", explanation: "noter les revenus et les dépenses permet de savoir ce qui est possible", example: "on peut réserver une somme pour le loyer, les assurances, la nourriture et les transports" },
      { title: "l'épargne protège contre les imprévus", explanation: "une petite réserve aide en cas de facture médicale, réparation ou perte d'emploi", example: "mettre même cinquante francs de côté chaque mois peut devenir utile" },
      { title: "l'éducation financière évite les pièges", explanation: "comprendre les crédits, les abonnements et les intérêts empêche de s'endetter trop vite", example: "avant de signer un contrat, il faut lire les frais et la durée" },
    ],
    counter: { idea: "certaines personnes pensent qu'il faut profiter immédiatement", refutation: "profiter est important, mais sans organisation les problèmes arrivent vite" },
    conclusion: "il faut donc apprendre tôt à équilibrer plaisir, besoins et sécurité",
  },
  Internet: {
    thesis: "Internet est un outil très utile, mais il doit être utilisé avec esprit critique",
    arguments: [
      { title: "il facilite l'accès à l'information", explanation: "on peut trouver rapidement des horaires, des démarches et des explications", example: "une personne peut chercher comment renouveler un permis ou comprendre une facture" },
      { title: "il aide à communiquer", explanation: "les messages et les appels vidéo rapprochent les familles éloignées", example: "des parents peuvent parler avec leurs proches restés dans un autre pays" },
      { title: "il soutient la formation", explanation: "cours en ligne, vidéos et exercices permettent d'apprendre à son rythme", example: "un apprenant peut réviser la conjugaison ou écouter du français chaque jour" },
    ],
    counter: { idea: "Internet contient aussi de fausses informations et fait perdre du temps", refutation: "c'est vrai, donc il faut vérifier les sources et limiter certains usages" },
    conclusion: "Internet est positif si l'on garde le contrôle de son temps et de ses choix",
  },
  "reseaux sociaux": {
    thesis: "les réseaux sociaux peuvent être utiles, mais ils doivent être encadrés par des règles personnelles et collectives",
    arguments: [
      { title: "ils gardent le lien", explanation: "ils permettent de suivre les nouvelles de la famille, des amis et des associations", example: "une personne peut voir les photos de ses proches à l'étranger" },
      { title: "ils diffusent rapidement des informations", explanation: "une annonce d'école, de commune ou de quartier peut toucher beaucoup de monde", example: "un groupe local peut prévenir les habitants d'un événement ou d'un changement d'horaire" },
      { title: "ils peuvent donner une voix aux personnes", explanation: "chacun peut partager une expérience ou défendre une cause", example: "une association peut sensibiliser au tri des déchets ou à la solidarité" },
    ],
    counter: { idea: "ils peuvent aussi créer de la comparaison, de la dépendance et des fausses nouvelles", refutation: "c'est pourquoi il faut vérifier les informations et protéger les jeunes utilisateurs" },
    conclusion: "les réseaux sociaux sont utiles seulement si l'on apprend à les utiliser avec recul",
  },
  environnement: {
    thesis: "protéger l'environnement est une responsabilité collective qui commence par des gestes quotidiens",
    arguments: [
      { title: "les ressources ne sont pas illimitées", explanation: "l'eau, l'énergie et les matières premières doivent être utilisées avec prudence", example: "éteindre les lumières et réparer plutôt que jeter réduit le gaspillage" },
      { title: "la qualité de vie dépend de la nature", explanation: "un air propre, des parcs et moins de déchets rendent la ville plus agréable", example: "un quartier sans déchets est meilleur pour les enfants et les personnes âgées" },
      { title: "les petits gestes se cumulent", explanation: "une seule action paraît faible, mais beaucoup de personnes changent réellement les choses", example: "trier les déchets et prendre le bus peuvent réduire la pollution" },
    ],
    counter: { idea: "certains trouvent ces efforts contraignants", refutation: "mais les contraintes sont acceptables si elles protègent la santé et l'avenir" },
    conclusion: "il faut donc agir à la fois individuellement et collectivement",
  },
  ville: {
    thesis: "vivre en ville est intéressant si l'on améliore les transports, le logement et les espaces de calme",
    arguments: [
      { title: "la ville offre beaucoup de services", explanation: "écoles, hôpitaux, commerces et administrations sont souvent proches", example: "une famille peut aller plus facilement chez le médecin ou inscrire un enfant à une activité" },
      { title: "elle donne plus d'opportunités", explanation: "il y a souvent plus d'emplois, de formations et de rencontres", example: "une personne qui cherche un travail peut accéder à plusieurs entreprises sans longs trajets" },
      { title: "elle favorise la diversité", explanation: "des personnes d'origines différentes peuvent se rencontrer et apprendre les unes des autres", example: "dans un quartier, les voisins peuvent partager des fêtes ou des repas de cultures différentes" },
    ],
    counter: { idea: "la ville peut être bruyante et chère", refutation: "mais des parcs, des logements accessibles et de bons transports peuvent réduire ces problèmes" },
    conclusion: "la priorité est donc de construire une ville pratique, humaine et abordable",
  },
  "temps libre": {
    thesis: "le temps libre est indispensable pour l'équilibre personnel, familial et social",
    arguments: [
      { title: "il permet de se reposer", explanation: "après le travail, les cours ou les démarches, le corps et l'esprit ont besoin de récupérer", example: "une promenade ou un moment calme aide à diminuer la fatigue" },
      { title: "il renforce les relations", explanation: "passer du temps avec sa famille ou ses amis crée des souvenirs et du soutien", example: "cuisiner ensemble le dimanche peut devenir un rituel familial" },
      { title: "il développe les intérêts personnels", explanation: "loisirs, sport, lecture ou bénévolat permettent d'apprendre autrement", example: "un club de sport aide à pratiquer le français et à rencontrer des voisins" },
    ],
    counter: { idea: "certains pensent que le temps libre est moins important que le travail", refutation: "mais sans repos, on devient moins efficace et plus stressé" },
    conclusion: "il faut donc protéger du temps pour soi et pour les autres",
  },
  voyage: {
    thesis: "voyager est enrichissant si l'on respecte les lieux visités et les populations locales",
    arguments: [
      { title: "le voyage ouvre l'esprit", explanation: "il permet de découvrir d'autres façons de vivre, de manger et de penser", example: "visiter une autre région de Suisse peut déjà faire découvrir une autre langue et d'autres traditions" },
      { title: "il apporte du repos et de la motivation", explanation: "changer de cadre aide à sortir de la routine", example: "quelques jours au bord d'un lac ou à la montagne peuvent redonner de l'énergie" },
      { title: "il soutient parfois l'économie locale", explanation: "les hôtels, restaurants et commerces vivent aussi du tourisme", example: "acheter dans une petite boutique locale aide les habitants de la région" },
    ],
    counter: { idea: "le tourisme peut abîmer certains lieux", refutation: "c'est vrai, donc il faut voyager moins souvent mais mieux, utiliser les transports publics et respecter les règles" },
    conclusion: "le bon voyage est celui qui apporte une découverte sans détruire ce qu'il admire",
  },
  animaux: {
    thesis: "avoir un animal peut être très positif, mais seulement si l'on accepte toutes les responsabilités",
    arguments: [
      { title: "un animal apporte de la compagnie", explanation: "il peut réduire la solitude et créer une présence affective", example: "un chien oblige aussi à sortir et à marcher chaque jour" },
      { title: "il apprend le respect", explanation: "s'occuper d'un animal demande de comprendre ses besoins", example: "un enfant apprend à nourrir l'animal, à nettoyer et à être patient" },
      { title: "il structure la journée", explanation: "les repas, les promenades et les soins imposent une routine", example: "un chat ou un chien doit être nourri même quand on est fatigué" },
    ],
    counter: { idea: "un animal coûte de l'argent et demande du temps", refutation: "justement, il ne faut pas adopter sur un coup de tête, mais réfléchir avant" },
    conclusion: "l'adoption doit donc être un choix responsable et durable",
  },
  lecture: {
    thesis: "la lecture reste importante même à l'époque des écrans, car elle développe la langue, la réflexion et l'imagination",
    arguments: [
      { title: "elle enrichit le vocabulaire", explanation: "lire expose à des mots et des structures que l'on n'entend pas toujours à l'oral", example: "un apprenant de français peut noter cinq mots nouveaux après chaque chapitre" },
      { title: "elle développe la concentration", explanation: "contrairement aux vidéos rapides, un texte demande de suivre une idée dans la durée", example: "lire quinze minutes par jour entraîne l'attention" },
      { title: "elle aide à comprendre le monde", explanation: "romans, articles et témoignages présentent des expériences différentes", example: "un livre sur la migration peut aider à mieux comprendre le parcours d'autres personnes" },
    ],
    counter: { idea: "certains préfèrent les vidéos car elles sont plus faciles", refutation: "les vidéos peuvent aider, mais elles ne remplacent pas l'effort et la profondeur de la lecture" },
    conclusion: "il faut donc garder une place régulière pour les livres et les textes",
  },
  cinema: {
    thesis: "le cinéma est important parce qu'il divertit, transmet des idées et crée une expérience collective",
    arguments: [
      { title: "il permet de se détendre", explanation: "un film peut faire rire, émouvoir ou aider à oublier les soucis pendant un moment", example: "une comédie vue en famille peut créer un souvenir agréable" },
      { title: "il fait réfléchir", explanation: "certains films abordent des questions sociales, historiques ou morales", example: "un film sur l'école ou le travail peut ouvrir une discussion après la séance" },
      { title: "il aide à apprendre une langue", explanation: "regarder des films en français habitue l'oreille aux accents et aux expressions", example: "avec les sous-titres, un apprenant peut associer les mots écrits et prononcés" },
    ],
    counter: { idea: "le cinéma coûte parfois cher", refutation: "mais on peut aussi choisir des séances moins chères, des bibliothèques ou des films à la maison" },
    conclusion: "le cinéma reste donc un outil de plaisir, de culture et d'apprentissage",
  },
  voisinage: {
    thesis: "de bonnes relations de voisinage améliorent la sécurité, la solidarité et la qualité de vie",
    arguments: [
      { title: "le respect évite les conflits", explanation: "dire bonjour, limiter le bruit et respecter les espaces communs créent une ambiance calme", example: "prévenir ses voisins avant une fête montre que l'on pense aux autres" },
      { title: "la solidarité aide dans les difficultés", explanation: "les voisins peuvent rendre de petits services", example: "garder un colis, aider une personne âgée ou traduire une information peut beaucoup compter" },
      { title: "le voisinage favorise l'intégration", explanation: "parler avec les personnes de l'immeuble permet de pratiquer la langue et de comprendre les habitudes locales", example: "une discussion dans la buanderie peut expliquer les règles de l'immeuble" },
    ],
    counter: { idea: "certains préfèrent rester seuls", refutation: "il faut respecter la vie privée, mais un minimum de contact rend la cohabitation plus simple" },
    conclusion: "bien vivre ensemble demande donc politesse, patience et dialogue",
  },
  technologie: {
    thesis: "la technologie est positive si elle sert l'humain au lieu de le remplacer ou de l'isoler",
    arguments: [
      { title: "elle simplifie les tâches", explanation: "les outils numériques rendent certaines démarches plus rapides", example: "payer une facture, chercher un itinéraire ou traduire un mot prend quelques secondes" },
      { title: "elle améliore l'accès au savoir", explanation: "cours, tutoriels et documents sont disponibles pour beaucoup de personnes", example: "un adulte peut suivre une formation en ligne après son travail" },
      { title: "elle soutient certains métiers", explanation: "machines, logiciels et applications peuvent rendre le travail plus efficace", example: "dans la santé, un dossier numérique aide à mieux suivre un patient" },
    ],
    counter: { idea: "la technologie peut isoler et supprimer certains emplois", refutation: "c'est pourquoi il faut accompagner les personnes avec de la formation et garder des contacts humains" },
    conclusion: "il faut donc choisir une technologie utile, compréhensible et responsable",
  },
  egalite: {
    thesis: "l'égalité est nécessaire pour construire une société juste et permettre à chacun de développer ses capacités",
    arguments: [
      { title: "elle respecte la dignité", explanation: "personne ne devrait être limité à cause de son sexe, son origine, son âge ou sa situation sociale", example: "une femme et un homme doivent pouvoir postuler au même emploi avec les mêmes chances" },
      { title: "elle améliore la société", explanation: "quand plus de personnes participent, les idées et les compétences sont plus nombreuses", example: "une entreprise mixte et diverse comprend mieux ses clients" },
      { title: "elle protège les plus vulnérables", explanation: "des règles contre la discrimination donnent un cadre clair", example: "à l'école, chaque enfant doit être respecté, même s'il parle une autre langue" },
    ],
    counter: { idea: "certains pensent que l'égalité existe déjà", refutation: "mais les écarts de salaire, les préjugés et certaines discriminations montrent qu'il reste du travail" },
    conclusion: "l'égalité demande donc des lois, de l'éducation et des comportements quotidiens respectueux",
  },
  "regles de vie": {
    thesis: "les règles de vie sont nécessaires pour protéger la liberté de chacun et organiser la vie collective",
    arguments: [
      { title: "elles assurent la sécurité", explanation: "sans règles, les comportements dangereux auraient plus de conséquences", example: "respecter les feux rouges protège les piétons et les conducteurs" },
      { title: "elles permettent de vivre ensemble", explanation: "dans une école, un immeuble ou une ville, chacun doit connaître ses limites", example: "ne pas faire de bruit la nuit permet aux voisins de dormir" },
      { title: "elles donnent un cadre juste", explanation: "une règle claire évite les décisions arbitraires", example: "dans une classe, les mêmes règles valent pour tous les élèves" },
    ],
    counter: { idea: "trop de règles peuvent sembler contraignantes", refutation: "c'est vrai, mais une bonne règle doit être expliquée, utile et proportionnée" },
    conclusion: "la liberté fonctionne mieux quand les règles protègent tout le monde sans devenir excessives",
  },
};

const DEFAULT_ARGUMENTATION_MODEL: ArgumentationThemeModel = {
  thesis: "ce sujet est important dans la vie quotidienne et mérite une opinion nuancée",
  arguments: [
    { title: "il touche des besoins concrets", explanation: "il influence l'organisation de la famille, du travail ou des démarches", example: "dans la vie en Suisse, une décision simple peut avoir des conséquences sur le budget ou le temps" },
    { title: "il concerne les relations avec les autres", explanation: "nos choix personnels ont souvent un effet sur les proches, les voisins ou les collègues", example: "une règle respectée par chacun rend la vie collective plus agréable" },
    { title: "il demande de penser à l'avenir", explanation: "une bonne décision doit aussi tenir compte des enfants, de la santé ou de l'environnement", example: "changer une habitude aujourd'hui peut éviter un problème demain" },
  ],
  counter: { idea: "on peut avoir une opinion différente selon son expérience", refutation: "mais il reste possible de défendre une position claire avec des exemples précis" },
  conclusion: "il faut donc réfléchir, expliquer son avis et proposer des solutions réalistes",
};

function firstSentence(text: string) {
  return text.replace(/\s+/g, " ").split(/[.!?]\s/u)[0]?.trim() || text.replace(/\s+/g, " ").trim();
}

function buildArgumentationResponse(theme: string, prompt: string, model: ArgumentationThemeModel) {
  const subject = firstSentence(prompt).replace(/^tu\s+/i, "on ");
  const counter = model.counter
    ? `Contre-argument et réfutation : on peut objecter que ${model.counter.idea}. Cependant, ${model.counter.refutation}.`
    : "";

  return [
    `Introduction : ${subject}. Cette question pose la problématique suivante : quelle position adopter face à ce thème dans la vie quotidienne ? À mon avis, ${model.thesis}.`,
    `Argument 1 : d'abord, ${model.arguments[0].title}. Cela signifie que ${model.arguments[0].explanation}. Par exemple, ${model.arguments[0].example}.`,
    `Argument 2 : ensuite, ${model.arguments[1].title}. En effet, ${model.arguments[1].explanation}. Par exemple, ${model.arguments[1].example}.`,
    `Argument 3 : enfin, ${model.arguments[2].title}. Cet aspect est important parce que ${model.arguments[2].explanation}. Par exemple, ${model.arguments[2].example}.`,
    counter,
    `Conclusion : pour conclure, le thème « ${theme} » ne doit pas être traité seulement de manière personnelle. Il concerne aussi la vie sociale. C'est pourquoi ${model.conclusion}.`,
  ].filter(Boolean).join("\n\n");
}

export function getArgumentationResponse(theme: string, prompt: string): string {
  return buildArgumentationResponse(theme, prompt, ARGUMENTATION_THEME_MODELS[theme] ?? DEFAULT_ARGUMENTATION_MODEL);
}

export function getThemeSuggestions(theme: string): string[] {
  return THEME_QUESTION_SUGGESTIONS[theme] ?? [];
}

export function getInterviewSuggestion(question: string): string | undefined {
  return DIRECTED_INTERVIEW_SUGGESTIONS[question];
}

export function getImageDescriptionModel(situationId: string): ImageDescriptionModel | undefined {
  return IMAGE_DESCRIPTION_MODELS[situationId];
}


export { getSituationDialogueSuggestions, type SituationDialogueSuggestions } from "./po-dialogues";

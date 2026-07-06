/** Pool « Lire pour s'orienter » — CE moyen (6 documents × 8 personnes, 2 leurres). */

export type OrientationSeriesItem = {
  context: string;
  docs: [string, string, string][];
  /** Index du document (0–5), ou -1 si aucun document ne convient. */
  people: [string, number][];
};

export const ORIENTATION_MOYEN: OrientationSeriesItem[] = [
  {
    context:
      "Avec des amis, vous voulez vous abonner à un magazine en Suisse romande. Vous lisez cette publicité sur Internet.",
    docs: [
      [
        "Cuisine+",
        "Gastronomie",
        "Recettes des grands chefs français et suisses, produits de saison et idées pour cuisiner à la maison.",
      ],
      [
        "CinéAddict",
        "Cinéma",
        "Critiques de films, sorties en salle en Suisse romande et nouveautés en streaming.",
      ],
      [
        "CélébritésMag",
        "People",
        "Vie et passions des stars : photos, interviews et actualités des célébrités.",
      ],
      [
        "Jeux intellectuels",
        "Réflexion",
        "Plus de 100 jeux par mois : mots croisés, sudokus et énigmes pour entraîner le cerveau.",
      ],
      [
        "Juniorstyle",
        "100 % ados",
        "Magazine pour les jeunes : sport, musique, jeux vidéo et loisirs après l'école.",
      ],
      [
        "AutoPlus",
        "Automobile",
        "Véhicules de tous types, des camions de pompier aux voitures modernes, et actualités des courses.",
      ],
    ],
    people: [
      ["Oksana est lycéenne.", 4],
      ["Mariam attend un enfant.", -1],
      ["Samir s'intéresse aux célébrités.", 2],
      ["Rashid fait des mots croisés.", 3],
      ["Giulia va régulièrement au cinéma.", 1],
      ["Ibrahim a un animal de compagnie.", -1],
      ["Carmen teste de nouvelles recettes.", 0],
      ["Miguel regarde les courses automobiles.", 5],
    ],
  },
  {
    context:
      "Vous choisissez une activité de loisirs avec des amis à Lausanne. Vous lisez ces annonces.",
    docs: [
      [
        "Films à moitié prix",
        "Cinéma",
        "C'est la semaine du festival du cinéma. Achetez vos billets et profitez de 50 % de réduction au cinéma Pathé Flon ce week-end.",
      ],
      [
        "Balade sur le Léman",
        "Bateau",
        "L'été arrive ! Profitez de ces beaux jours pour redécouvrir Lausanne sur un bateau du Léman, suivi d'une promenade sur les quais d'Ouchy.",
      ],
      [
        "Festival de la lecture",
        "Livres",
        "Vous aimez la lecture ? Venez découvrir les dernières nouveautés à la librairie de la place de la Palud.",
      ],
      [
        "Shopping en folie",
        "Mode",
        "Pour la nouvelle saison, votre magasin préféré du centre Manor propose des promotions exceptionnelles aujourd'hui sur tous les produits !",
      ],
      [
        "Soirée karaoké",
        "Musique",
        "Envie de vous changer les idées ? Chaque week-end, soirée karaoké au café du quartier. Seul ou entre amis, venez vous lâcher !",
      ],
      [
        "Expo locale",
        "Art",
        "Le centre culturel de la Riponne accueille cette semaine les artistes de la région pour vous faire découvrir leurs plus belles œuvres.",
      ],
    ],
    people: [
      ["Amina s'intéresse à l'art.", 5],
      ["Mateo veut aller danser en boîte.", -1],
      ["Kateryna a besoin de vêtements.", 3],
      ["Kwame va souvent courir en forêt.", -1],
      ["Lorenzo suit des cours de chant.", 4],
      ["Elena se promène le week-end au bord du lac.", 1],
      ["Nadia veut aller au cinéma ce week-end.", 0],
      ["Inês est passionnée de littérature.", 2],
    ],
  },
  {
    context:
      "Vous voulez regarder un programme télé avec des amis en Suisse. Vous lisez ce programme TV.",
    docs: [
      [
        "En pleine nature",
        "Aventure",
        "Suivez le quotidien de l'aventurier Mike Horn au cœur du Pôle Nord. Sa traversée dure quinze jours avec peu de moyens.",
      ],
      [
        "Nous deux",
        "Romance",
        "Un beau film qui raconte une histoire d'amour impossible entre un homme célèbre et une inconnue.",
      ],
      [
        "Au cœur de l'histoire",
        "Documentaire",
        "Témoignages sur le débarquement en Normandie en 1944, pendant la Seconde Guerre mondiale.",
      ],
      [
        "À toi !",
        "Comédie musicale",
        "Vous aimez la musique et le théâtre ? Regardez cette excellente comédie de danse et de chant.",
      ],
      [
        "Les flics",
        "Policier",
        "L'histoire de deux policiers très proches : l'un est calme, l'autre très nerveux.",
      ],
      [
        "En route !",
        "Série",
        "Vous avez aimé les deux premières saisons ? Vous allez adorer cette nouvelle saison du réalisateur Tony Roi.",
      ],
    ],
    people: [
      ["Layla est très romantique.", 1],
      ["Hawa adore les autobiographies.", -1],
      ["Kwame est professeur d'Histoire.", 2],
      ["Nasir veut voir une nouvelle série.", 5],
      ["Olena est une grande aventurière.", 0],
      ["Sofia aime les comédies musicales.", 3],
      ["Pablo regarde les films policiers.", 4],
      ["Youssef fait des vidéos sur les animaux.", -1],
    ],
  },
  {
    context:
      "Vous cherchez une activité sportive dans votre ville suisse. Vous lisez les annonces du centre sportif.",
    docs: [
      [
        "Grand bassin",
        "Natation",
        "Tu aimes la natation ? Viens t'inscrire pour découvrir de nouveaux sports nautiques ! Un entraîneur est là pour t'aider.",
      ],
      [
        "Duels",
        "Sports de combat",
        "Portes ouvertes aux cours de karaté, boxe et lutte la semaine prochaine de 18 h à 20 h. Venez nombreux !",
      ],
      [
        "À cheval",
        "Équitation",
        "Bénéficiez d'une remise de 25 % pour une inscription annuelle au club d'équitation. Nos chevaux vous attendent !",
      ],
      [
        "L'ovalie",
        "Rugby",
        "Le club de rugby de la ville cherche de nouveaux talents ! Pour vous inscrire, appelez le +41 21 693 45 12.",
      ],
      [
        "Au plus haut !",
        "Escalade",
        "Le club d'escalade vient d'ouvrir ses portes. Soyez les premiers à vous inscrire ! Ouvert aux débutants.",
      ],
      [
        "L'art de la danse",
        "Danse",
        "Le centre sportif municipal propose des cours de danse classique et moderne. Inscriptions à partir de septembre.",
      ],
    ],
    people: [
      ["Daryna aime nager.", 0],
      ["Mariam adore les animaux.", 2],
      ["Tomislav fait de la course à pied.", -1],
      ["Hassan veut faire du sport chez lui.", -1],
      ["Ibrahim veut jouer dans une équipe.", 3],
      ["Lucía aime les sports extrêmes.", 4],
      ["Beatriz veut essayer un sport de combat.", 1],
      ["Marco préfère les sports artistiques.", 5],
    ],
  },
  {
    context:
      "Vous recherchez un hébergement pour des vacances en Suisse avec des amis. Vous lisez ces annonces sur Internet.",
    docs: [
      [
        "Le Bleu Hôtel",
        "Lac",
        "Vous souhaitez vous reposer au soleil ? Vivez une expérience unique et profitez de notre plage privée au bord du Léman.",
      ],
      [
        "Comme à la maison",
        "Chez l'habitant",
        "Passez des vacances comme à la maison. Notre famille sera ravie de vous accueillir. Chambre à prix réduit !",
      ],
      [
        "En pleine nature",
        "Camping",
        "Découvrez un hébergement unique dans les Alpes vaudoises ! Dormez à la belle étoile sous une tente transparente.",
      ],
      [
        "L'auberge",
        "Jeunes",
        "Vous avez moins de 21 ans ? Notre auberge de jeunesse de Lausanne est prête à vous accueillir !",
      ],
      [
        "Le Gliss'Hôtel",
        "Montagne",
        "Situé près des pistes de ski de Villars, cet hébergement est parfait pour les passionnés de sports de glisse.",
      ],
      [
        "Formule Hôtel",
        "Bon plan",
        "Offre exceptionnelle chambre + petit-déjeuner pour seulement 85 CHF la nuit ! Réservez vite : il reste 5 chambres.",
      ],
    ],
    people: [
      ["Hassan adore nager.", 0],
      ["Anastasia est une adolescente.", 3],
      ["Carmen fait du camping.", 2],
      ["Farid veut dormir chez l'habitant.", 1],
      ["Giada veut aller à la montagne.", 4],
      ["Amadou s'aventure dans le désert.", -1],
      ["Rita veut un petit-déjeuner inclus.", 5],
      ["Awa se déplace avec son chat.", -1],
    ],
  },
  {
    context:
      "Vous êtes étudiant en Suisse et vous cherchez un logement pour vous et vos amis. Vous lisez ces annonces.",
    docs: [
      [
        "Charmant studio",
        "Centre-ville",
        "Studio meublé de 15 m² en plein cœur de Lausanne, tout près de la gare. Musées et théâtres à proximité.",
      ],
      [
        "Bel appartement",
        "Calme",
        "Charmant appartement donnant sur une cour paisible. Quartier agréable. Fêtes et nuisances sonores strictement interdites.",
      ],
      [
        "Le Simplon",
        "Personnaliser",
        "Appartement de 2 pièces non meublé : à vous de le personnaliser ! Vue sur un parc depuis la chambre.",
      ],
      [
        "Le Résident",
        "Étudiants",
        "Appartement de 20 m² dans une résidence étudiante sécurisée. Laverie, salle de sport et piscine sur place.",
      ],
      [
        "Résidence universitaire",
        "Colocation",
        "Logement équipé en cité universitaire avec possibilité de colocation. À 3 minutes du métro M2.",
      ],
      [
        "Joli studio",
        "Commerces",
        "Petit studio étudiant près de la rue commerçante. Supermarché au rez-de-chaussée de l'immeuble.",
      ],
    ],
    people: [
      ["Nour veut un endroit calme.", 1],
      ["Lucía aime faire les magasins.", 5],
      ["Antonio fait souvent la fête.", -1],
      ["Yuliia aime décorer à sa manière.", 2],
      ["Zahra est une personne sportive.", 3],
      ["Aissatou préfère vivre à la campagne.", -1],
      ["Matteo est amoureux de la culture.", 0],
      ["Carla veut vivre avec quelqu'un.", 4],
    ],
  },
  {
    context:
      "Vous êtes en Suisse. Vos amis doivent choisir une activité proposée par le centre culturel de votre quartier. Vous lisez le programme.",
    docs: [
      [
        "Cours de guitare",
        "Musique",
        "Vous voulez apprendre à jouer de la guitare ? Le centre culturel propose un cours d'initiation le mardi soir. Infos : +41 21 315 68 20.",
      ],
      [
        "Nuit d'impro",
        "Théâtre",
        "Développez votre créativité sur scène : soirée d'improvisation théâtrale chaque mercredi à 21 h au centre de la Riponne.",
      ],
      [
        "Danse classique et moderne",
        "Danse",
        "Exprimez vos émotions avec la danse classique ou la danse moderne. Cours pour tous les niveaux, dès 14 ans.",
      ],
      [
        "Atelier cuisine",
        "Gastronomie",
        "Apprenez à faire des plats délicieux et variés : quiches, tartes et terrines avec des produits locaux vaudois.",
      ],
      [
        "Club Papyrus",
        "Lecture",
        "Pour découvrir de nouveaux livres, inscrivez-vous au club de lecture Papyrus ! Rencontre mensuelle à la bibliothèque municipale.",
      ],
      [
        "Atelier peinture",
        "Arts plastiques",
        "Initiez-vous à la peinture à l'huile et à l'aquarelle. Matériel fourni pour la première séance. Inscriptions : +41 21 315 68 21.",
      ],
    ],
    people: [
      ["Samira adore le théâtre.", 1],
      ["Carmen aime la cuisine.", 3],
      ["Ahmad veut faire de la musique.", 0],
      ["Inês adore la lecture.", 4],
      ["Oksana aime toutes les danses.", 2],
      ["Matteo veut apprendre à peindre.", 5],
      ["Fatou veut faire du jogging en groupe.", -1],
      ["Tomislav cherche un cours de natation.", -1],
    ],
  },
  {
    context:
      "Vous êtes à Lausanne. Vous consultez un site Internet pour proposer une sortie musée à vos amis.",
    docs: [
      [
        "Musée d'ethnographie",
        "Arts du monde",
        "Pour découvrir les arts d'Afrique, d'Amérique, d'Asie et d'Océanie. Ouvert du mardi au dimanche.",
      ],
      [
        "Technorama",
        "Sciences",
        "Expériences interactives pour comprendre les sciences et les technologies. À Winterthur, accessible en train depuis Lausanne.",
      ],
      [
        "Château de Chillon",
        "Histoire",
        "Venez admirer les collections médiévales dans une forteresse du XIIIe siècle, au bord du lac Léman.",
      ],
      [
        "Musée de la musique",
        "Instruments",
        "Plus de 900 instruments de musique. Ateliers de découverte et d'apprentissage pour tous les âges.",
      ],
      [
        "Musée Olympique",
        "Sport",
        "Athlètes, footballeurs, sportifs de légende… Venez voir les objets et histoires de vos champions préférés !",
      ],
      [
        "Muséum d'histoire naturelle",
        "Nature",
        "Découvrez la faune, la flore et les minéraux de Suisse. Exposition permanente sur les animaux des Alpes.",
      ],
    ],
    people: [
      ["Youssef joue de la guitare.", 3],
      ["Layla est passionnée d'histoire.", 2],
      ["Nasir fait des études scientifiques.", 1],
      ["Aissatou aime les œuvres d'art du monde entier.", 0],
      ["Miguel est fan d'un footballeur célèbre.", 4],
      ["Mariam adore les animaux.", 5],
      ["Kateryna veut aller au cinéma.", -1],
      ["Lorenzo cherche des magasins de mode.", -1],
    ],
  },
  {
    context:
      "Vous étudiez en Suisse. Vous conseillez un menu à vos amis en lisant les cartes des restaurants du quartier.",
    docs: [
      [
        "Chez Luigi",
        "Italien",
        "La meilleure pizza italienne de Lausanne ! Pour une pizza à 18 CHF, bénéficiez de 40 % de réduction sur la deuxième.",
      ],
      [
        "Café du matin",
        "Petit-déjeuner",
        "Formule café et croissant : 3,50 CHF tous les matins de 6 h à 11 h. Idéal avant les cours !",
      ],
      [
        "Sakura",
        "Fruits de mer",
        "Menu « produits de la mer » pour 2 personnes : soupe miso, plateau de sushis et makis, dessert. 52 CHF.",
      ],
      [
        "Le Jardin",
        "Végétarien",
        "Menu du jour : soupe de poivrons, crumble de courgettes, fondant au chocolat. Sans viande. 15 CHF.",
      ],
      [
        "Snack du parc",
        "À emporter",
        "Menu pas cher à emporter : formule sandwich jambon-beurre + boisson. 6,50 CHF. Parfait pour un pique-nique !",
      ],
      [
        "Chalet suisse",
        "Spécialité locale",
        "Fondue moitié-moitié pour 2 personnes avec salade et dessert. Réservation conseillée : +41 21 311 47 90.",
      ],
    ],
    people: [
      ["Nour ne veut pas manger de viande.", 3],
      ["Marco adore le petit-déjeuner.", 1],
      ["Rashid adore le poisson.", 2],
      ["Farid veut manger au parc.", 4],
      ["Giulia et Lorenzo aiment la cuisine italienne.", 0],
      ["Olena veut goûter un plat typiquement suisse.", 5],
      ["Samir veut se faire livrer une pizza à domicile.", -1],
      ["Awa préfère cuisiner chez elle.", -1],
    ],
  },
  {
    context:
      "Vous êtes dans un restaurant en Suisse avec des amis. Vous lisez la carte pour leur proposer un plat.",
    docs: [
      [
        "Bœuf braisé",
        "Viande",
        "Viande de bœuf mijotée avec des pommes de terre et des carottes, spécialité de la maison.",
      ],
      [
        "Fondant au chocolat",
        "Dessert",
        "Gâteau au chocolat presque liquide à l'intérieur, servi tiède avec une boule de glace vanille.",
      ],
      [
        "Spaghetti au pesto",
        "Italien",
        "Pâtes fraîches avec une sauce au basilic, tomates cerises et parmesan. Recette italienne authentique.",
      ],
      [
        "Sorbet au cassis",
        "Dessert frais",
        "Glace aux fruits rouges du Valais, légère et rafraîchissante. Parfait après un repas copieux.",
      ],
      [
        "Paella aux fruits de mer",
        "Poisson",
        "Riz épicé avec des crevettes, des moules et du poisson frais. Pour les amateurs de cuisine méditerranéenne.",
      ],
      [
        "Rösti du paysan",
        "Suisse",
        "Galette de pommes de terre croustillante servie avec des œufs au plat et du fromage grison.",
      ],
    ],
    people: [
      ["Sofia adore les gâteaux.", 1],
      ["Matteo aime les plats italiens.", 2],
      ["Zahra aime la viande.", 0],
      ["Pablo adore les fruits de mer.", 4],
      ["Hassan préfère les desserts frais.", 3],
      ["Ana veut goûter un plat typiquement suisse.", 5],
      ["Daryna ne mange pas de produits laitiers.", -1],
      ["Ibrahim veut commander un hamburger.", -1],
    ],
  },
  {
    context:
      "Vous lisez les offres d'un catalogue du grand magasin Manor en Suisse. Quelles offres allez-vous proposer à vos amis ?",
    docs: [
      [
        "Électroménager −50 %",
        "Promo week-end",
        "50 % sur l'électroménager tout le week-end ! Lave-linge, télévision, réfrigérateur : profitez-en vite.",
      ],
      [
        "DVD Amour",
        "Cinéma",
        "Retrouvez le film Amour en DVD ! Prix spécial : 12 CHF au lieu de 19 CHF.",
      ],
      [
        "Téléphone + housse",
        "High-tech",
        "Pour tout téléphone acheté, la housse de protection est offerte ! Renseignements : +41 58 565 70 00.",
      ],
      [
        "Pantalons −30 %",
        "Mode",
        "30 % de réduction sur les pantalons jusqu'au 7 juin ! Hommes, femmes et enfants.",
      ],
      [
        "Bon d'achat Migros",
        "Courses",
        "10 CHF de réduction en bons d'achat pour 150 CHF d'achats dans votre supermarché Migros partenaire.",
      ],
      [
        "Romans −20 %",
        "Livres",
        "20 % sur tous les romans et bandes dessinées jusqu'à la fin du mois. Rayon librairie, 2e étage.",
      ],
    ],
    people: [
      ["Fatou veut faire les courses.", 4],
      ["Layla aime les films romantiques.", 1],
      ["Tomislav veut s'acheter une télévision.", 0],
      ["Nasir a envie de changer de mobile.", 2],
      ["Kateryna aimerait s'acheter de nouveaux vêtements.", 3],
      ["Inês adore lire des romans.", 5],
      ["Miguel cherche un vélo électrique en promotion.", -1],
      ["Mariam veut acheter des jouets pour enfants.", -1],
    ],
  },
  {
    context:
      "Vous êtes en Suisse. Vous consultez un catalogue de cadeaux sur Internet pour plusieurs amis.",
    docs: [
      [
        "Chaussures Ribic",
        "Mode",
        "Chaussures de loisir Ribic pour un style chic et décontracté ! Disponibles du 36 au 46. 79 CHF.",
      ],
      [
        "Robe Zarah",
        "Vêtements",
        "Robe Zarah, bleue ou noire. Tailles du 34 au 44. Livraison gratuite en Suisse. 45 CHF.",
      ],
      [
        "Jeu Devin'up",
        "Jeux",
        "Faites deviner des objets, des animaux et des métiers à vos amis ! À partir de 8 ans. 22 CHF.",
      ],
      [
        "Pyjamas bébé",
        "Naissance",
        "Lot de 3 pyjamas avec des éléphants. Tailles : naissance à 6 mois. Coton bio. 28 CHF.",
      ],
      [
        "Du côté de chez Swann",
        "Littérature",
        "Grand classique de Marcel Proust. Belle édition reliée, traduction française. 32 CHF.",
      ],
      [
        "Coffret chocolat",
        "Gourmandise",
        "Assortiment de chocolats suisses Lindt : 24 pralines dans une boîte cadeau. Idéal pour les fêtes. 35 CHF.",
      ],
    ],
    people: [
      ["Carla est passionnée de littérature.", 4],
      ["Amadou a eu un bébé la semaine dernière.", 3],
      ["Lucía adore les vêtements.", 1],
      ["Beatriz aime faire des jeux de société.", 2],
      ["Ahmad a besoin de nouvelles chaussures.", 0],
      ["Giada adore le chocolat suisse.", 5],
      ["Olena cherche un ordinateur portable.", -1],
      ["Youssef collectionne les timbres.", -1],
    ],
  },
];

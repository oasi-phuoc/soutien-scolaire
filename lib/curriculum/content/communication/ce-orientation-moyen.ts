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
];

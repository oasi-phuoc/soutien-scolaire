/** Pool « Lire des annonces » — CE moyen (6 documents × 8 personnes, 2 leurres). */

export type OrientationSeriesItem = {
  context: string;
  docs: [string, string, string][];
  /** Index du document (0–5), ou -1 si aucun document ne convient. */
  people: [string, number][];
};

export const ORIENTATION_MOYEN: OrientationSeriesItem[] = [
  {
    context:
      "Vous êtes au Salon des métiers à Genève avec des amis. Vous lisez le programme des ateliers proposés sur place.",
    docs: [
      [
        "Atelier image",
        "Cinéma",
        "Vous rêvez de réaliser des courts-métrages ? Découvrez les bases du tournage, du montage et du son avec des professionnels du cinéma suisse.",
      ],
      [
        "Atelier scène",
        "Théâtre",
        "Envie de monter sur scène ? Cet atelier d'improvisation et de jeu théâtral vous aide à gagner en confiance devant un public.",
      ],
      [
        "Atelier numérique",
        "Informatique",
        "Apprenez à créer un site Internet et à programmer en Python. Initiation pour débutants, matériel fourni sur place.",
      ],
      [
        "Atelier cuisine",
        "Restauration",
        "Cet atelier propose une initiation aux métiers de la restauration avec le chef Gustave Lemoine. Plats salés, service en salle et travail d'équipe.",
      ],
      [
        "Atelier gourmand",
        "Pâtisserie",
        "Comment faire de délicieux pains au chocolat ? Venez découvrir les secrets de la boulangerie-pâtisserie avec un maître artisan genevois.",
      ],
      [
        "Atelier couleur",
        "Arts plastiques",
        "Initiez-vous à la peinture à l'huile et à l'aquarelle. Matériel fourni pour la première séance au centre culturel.",
      ],
    ],
    people: [
      ["Oksana aimerait faire des films.", 0],
      ["Carmen est passionnée de théâtre.", 1],
      ["Emre aime beaucoup l'informatique.", 2],
      ["Hassan adore cuisiner, mais n'aime pas beaucoup les pâtisseries.", 3],
      ["Inês aimerait devenir boulangère.", 4],
      ["Matteo aime faire de la peinture.", 5],
      ["Kwame est passionné de voitures.", -1],
      ["Mariam adore regarder des films de science-fiction.", -1],
    ],
  },
  {
    context:
      "Vous êtes en Suisse. Vos amis doivent choisir un des six stages d'une semaine proposés par l'école.",
    docs: [
      [
        "Stage créativité",
        "Arts et spectacles",
        "Développez votre imagination avec le théâtre, le cirque, la musique et le cinéma. Une semaine pour créer et jouer sur scène.",
      ],
      [
        "Stage sport",
        "Plein air",
        "À la découverte de nouvelles disciplines : VTT, escalade, équitation et voile sur le lac Léman. À la montagne ou au bord du lac.",
      ],
      [
        "Stage nature",
        "Écologie",
        "Pour comprendre et respecter l'environnement. Séjour en plein air : observer un paysage, connaître les fleurs, les plantes et les animaux des Alpes.",
      ],
      [
        "Stage sciences",
        "Astronomie",
        "Découvrez l'astronomie et la météorologie. Observez les étoiles au télescope et apprenez à mesurer le vent et la température.",
      ],
      [
        "Stage histoire",
        "Patrimoine suisse",
        "Visites de châteaux et de musées pour mieux connaître la préhistoire, le Moyen Âge et les grandes périodes de l'histoire de la Suisse.",
      ],
      [
        "Stage musique",
        "Chorale",
        "Apprenez à chanter en groupe et découvrez différents instruments. Concert de fin de semaine devant les parents.",
      ],
    ],
    people: [
      ["Lorenzo adore l'histoire.", 4],
      ["Matteo aime l'art et les spectacles.", 0],
      ["Rashid veut faire un stage sportif.", 1],
      ["Nasir aime toutes les sciences.", 3],
      ["Fatou adore la nature.", 2],
      ["Yuliia aime la musique.", 5],
      ["Emre veut apprendre l'informatique.", -1],
      ["Awa adore les jeux vidéo.", -1],
    ],
  },
  {
    context:
      "Vous êtes à l'école en Suisse romande. Vous lisez le programme des clubs proposés par votre établissement.",
    docs: [
      [
        "Club théâtre",
        "Scène",
        "Venez jouer des pièces classiques et modernes avec Mme Janin, professeure de français. Mercredi 14 h–16 h, salle 325.",
      ],
      [
        "Club animaux",
        "Nature",
        "Vous voulez tout savoir sur les chats, les chiens, les oiseaux ou les lapins ? Posez vos questions à M. Raymond, vétérinaire. Jeudi 12 h 30–13 h, salle 147.",
      ],
      [
        "Club cuisine",
        "Gastronomie",
        "Apprenez à cuisiner des plats sucrés ou salés et composez des menus de fête avec notre chef. Samedi 10 h–12 h dans la cantine.",
      ],
      [
        "Club dessin",
        "Arts plastiques",
        "Techniques au feutre, au crayon et à la peinture pour réaliser de beaux tableaux ! Vendredi 12 h–13 h avec Mme Collet, salle 228.",
      ],
      [
        "Club chinois",
        "Langues",
        "Apprenez le chinois tous les jeudis midi avec M. Wang. Attention : 10 élèves maximum. Jeudi 12 h 30–13 h 30, salle 114.",
      ],
      [
        "Club football",
        "Sport",
        "Entraînement et matchs amicaux chaque mardi après les cours. Ouvert à tous les niveaux, au terrain derrière l'école.",
      ],
    ],
    people: [
      ["Hassan voudrait devenir acteur.", 0],
      ["Inês aime beaucoup préparer des desserts.", 2],
      ["Marco adore dessiner.", 3],
      ["Amadou s'intéresse aux animaux.", 1],
      ["Kateryna voudrait apprendre une nouvelle langue.", 4],
      ["Miguel aime jouer au football.", 5],
      ["Olena veut faire de la natation.", -1],
      ["Farid adore le ski de compétition.", -1],
    ],
  },
  {
    context:
      "Le professeur de français demande aux élèves de faire un exposé. Il propose plusieurs thèmes, en classe, en Suisse.",
    docs: [
      [
        "Exposé n° 1",
        "Géographie",
        "La Suisse et ses cantons : la montagne, les lacs et les collines. Découvrez les paysages de chaque région.",
      ],
      [
        "Exposé n° 2",
        "Personnages célèbres",
        "Les grandes figures de l'histoire et des arts en Suisse : hommes politiques, musiciens, écrivains et acteurs.",
      ],
      [
        "Exposé n° 3",
        "Gastronomie",
        "Les spécialités suisses selon les cantons : plats, fromages et desserts. Que mange-t-on à Genève ou en Valais ?",
      ],
      [
        "Exposé n° 4",
        "Francophonie",
        "On parle français dans beaucoup de pays. Quelle est la carte d'identité de la francophonie dans le monde ?",
      ],
      [
        "Exposé n° 5",
        "Cinéma",
        "Les films francophones depuis 1980 : comédies, films fantastiques et films d'action.",
      ],
      [
        "Exposé n° 6",
        "Écologie",
        "Que fait-on en Suisse pour sauver la planète ? Comment moins polluer les lacs, la terre et l'air.",
      ],
    ],
    people: [
      ["Layla s'intéresse au français dans le monde.", 3],
      ["Giulia adore la cuisine suisse.", 2],
      ["Samira est passionnée de cinéma.", 4],
      ["Pablo est fasciné par les personnages célèbres.", 1],
      ["Oksana aime la géographie.", 0],
      ["Nour veut protéger la Terre.", 5],
      ["Matteo aime la musique classique.", -1],
      ["Mariam adore la lecture de romans.", -1],
    ],
  },
  {
    context:
      "Vous êtes en Suisse. Vous choisissez une activité à faire avec vos amis ce week-end.",
    docs: [
      [
        "Activité n° 1",
        "Cinéma",
        "Ce soir à 20 h au cinéma ABC, venez voir le film Tout ce qui brille. La place est à 8 CHF pour les moins de 18 ans.",
      ],
      [
        "Activité n° 2",
        "Bowling",
        "Au centre sportif des Minimes, parties de bowling à 6 joueurs. Salle de jeux et billard disponibles.",
      ],
      [
        "Activité n° 3",
        "Shopping",
        "Grandes soldes dans les boutiques de la rue du Centre. Tous les vêtements et les chaussures à moins de 50 % !",
      ],
      [
        "Activité n° 4",
        "Piscine",
        "À la piscine municipale, de 14 h à 19 h : nage libre et cours de natation. L'entrée est à 5 CHF.",
      ],
      [
        "Activité n° 5",
        "Discothèque",
        "À la discothèque Modji, tous les samedis et dimanches après-midi : venez danser et écouter vos musiques préférées !",
      ],
      [
        "Activité n° 6",
        "Randonnée",
        "Sortie en groupe dans les Alpes vaudoises. Départ à 8 h depuis la gare. Prévoir de bonnes chaussures et un pique-nique.",
      ],
    ],
    people: [
      ["Lucía veut faire du shopping.", 2],
      ["Carmen adore le cinéma.", 0],
      ["Beatriz aime écouter de la musique et danser.", 4],
      ["Daryna aime les jeux de groupe.", 1],
      ["Ibrahim veut faire du sport.", 3],
      ["Kwame adore la randonnée en montagne.", 5],
      ["Emre veut aller au musée.", -1],
      ["Aissatou adore cuisiner à la maison.", -1],
    ],
  },
  {
    context:
      "Vous êtes en voyage à Zurich avec des amis. Vous consultez le programme des comédies musicales au théâtre.",
    docs: [
      [
        "Le Roi Lion",
        "Afrique",
        "Tous les animaux d'Afrique sont réunis pour la naissance du lion Simba. Un jour, il deviendra le roi des animaux, mais Scar veut prendre le pouvoir.",
      ],
      [
        "Le Fantôme de l'Opéra",
        "Romance",
        "Une célèbre histoire d'amour à Paris. Un homme aime passionnément l'actrice Christine Daaé. Il porte un masque : on l'appelle le fantôme de l'opéra.",
      ],
      [
        "Cats",
        "Danse et chant",
        "L'histoire des chats Jellicle qui se réunissent une fois par an pour un grand bal. Ils dansent et chantent pour gagner la vie éternelle.",
      ],
      [
        "Les Misérables",
        "Histoire",
        "Les personnages du roman de Victor Hugo : Jean Valjean, Cosette, Gavroche… Une comédie musicale pleine d'émotions dans le Paris du XIXe siècle.",
      ],
      [
        "Billy Elliot",
        "Danse",
        "Dans une petite ville d'Angleterre, un garçon de 11 ans rêve de devenir danseur de ballet, mais son père n'est pas d'accord. Il se bat pour vivre sa passion.",
      ],
      [
        "Mamma Mia",
        "Musique",
        "Une comédie musicale pleine de chansons célèbres. Une jeune femme cherche son père avant son mariage sur une île grecque ensoleillée.",
      ],
    ],
    people: [
      ["Giada adore la littérature et l'histoire.", 3],
      ["Amadou adore l'Afrique.", 0],
      ["Matteo adore la danse.", 4],
      ["Rita aime les chats.", 2],
      ["Hassan adore les histoires romantiques.", 1],
      ["Lucía aime chanter et danser.", 5],
      ["Nasir adore le rap américain.", -1],
      ["Olena préfère regarder le sport à la télé.", -1],
    ],
  },
  {
    context:
      "Vous habitez en Suisse. Vous lisez le programme d'activités de la commune pendant les vacances d'été.",
    docs: [
      [
        "Activité n° 1",
        "Sports d'équipe",
        "Venez jouer au football, au handball et au volley-ball avec vos amis au stade municipal tous les jours de 10 h à 19 h.",
      ],
      [
        "Activité n° 2",
        "Sortie au lac",
        "Sortie au lac le jeudi 25 juillet de 9 h à 19 h. N'oubliez pas vos maillots pour aller vous baigner !",
      ],
      [
        "Activité n° 3",
        "Bibliothèque",
        "Écoutez des histoires racontées par nos bibliothécaires tous les samedis matin de juillet. Vous pouvez aussi emprunter des romans !",
      ],
      [
        "Activité n° 4",
        "Cinéma",
        "Le cinéma Ciné-Culture propose des séances à tarif réduit pour les jeunes tous les matins à 11 h en juillet et en août.",
      ],
      [
        "Activité n° 5",
        "Jeux de société",
        "Scrabble, Monopoly, cartes… il y en a pour tout le monde à l'atelier jeux du vendredi après-midi !",
      ],
      [
        "Activité n° 6",
        "Atelier cuisine",
        "Apprenez à préparer des plats simples et des desserts suisses avec un chef. Mardi de 14 h à 16 h, salle polyvalente.",
      ],
    ],
    people: [
      ["Elena adore nager.", 1],
      ["Youssef aime les sports d'équipe.", 0],
      ["Inês est passionnée de lecture.", 2],
      ["Carla adore jouer aux jeux de société.", 4],
      ["Mateo aime regarder des films.", 3],
      ["Carmen aime cuisiner.", 5],
      ["Rashid veut faire du vélo de montagne seul.", -1],
      ["Mariam adore observer les animaux sauvages.", -1],
    ],
  },
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
      ["Emre fait de la course à pied.", -1],
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
      ["Emre cherche un cours de natation.", -1],
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
      ["Leyla adore les gâteaux.", 1],
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
      ["Emre veut s'acheter une télévision.", 0],
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

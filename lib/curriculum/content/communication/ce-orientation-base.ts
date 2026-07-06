import type { CEMessageItem } from "./ce-questions-helpers";
import { ceMapQ, ceQ } from "./ce-questions-helpers";

const MAP = (id: string): [string, string, string] => [
  `/expression/ce/base/orientation/${id}-a.webp`,
  `/expression/ce/base/orientation/${id}-b.webp`,
  `/expression/ce/base/orientation/${id}-c.webp`,
];

/** Textes CE base — « Lire pour s'orienter » (messages + itinéraires). */
export const CE_ORIENTATION_BASE: CEMessageItem[] = [
  {
    id: "sortie-musee",
    from: "olena.prof@vd.ch",
    subject: "Sortie musée",
    body:
      "Bonjour,\n\nNous allons au musée du Palais Rumine samedi. Rendez-vous à 9 h 45. " +
      "Si vous utilisez les transports publics, descendez à la station Riponne (ligne M2). " +
      "Une fois dehors, montez la rue Cité-Devant. Tournez à droite, place de la Riponne. " +
      "Continuez sur la rue Charles-Monnard. Le musée est à gauche au n° 15.\n\n" +
      "Le tarif normal est de 8 CHF, mais comme nous sommes 17, cela va coûter 4 CHF par personne.\n\n" +
      "À demain,\n\nOlena\nProfesseure de français",
    image: "/expression/ce/base/orientation/text-01.webp",
    pool: [
      ceQ(
        "mus-q1",
        "Où va la classe samedi ?",
        ["Au musée du Palais Rumine", "Au cinéma Pathé", "À la bibliothèque municipale"],
        0,
        "Samedi, nous allons au musée du Palais _________.",
        "Rumine",
      ),
      ceQ(
        "mus-q2",
        "À quelle heure est le rendez-vous ?",
        ["9 h 45", "10 h 30", "11 h 00"],
        0,
        "Le rendez-vous est à ___ h 45.",
        "9",
        ["9h", "neuf"],
      ),
      ceQ(
        "mus-q3",
        "Quelle station de métro faut-il utiliser ?",
        ["Riponne (M2)", "Lausanne-Flon (M2)", "Bessières (M2)"],
        0,
        "Il faut descendre à la station _________.",
        "Riponne",
        ["riponne"],
      ),
      ceQ(
        "mus-q4",
        "Combien coûte l'entrée pour chaque élève du groupe ?",
        ["4 CHF", "8 CHF", "17 CHF"],
        0,
        "L'entrée coûte ___ CHF par personne.",
        "4",
        ["quatre"],
      ),
      ceMapQ(
        "mus-q5",
        "Quel trajet mène au musée depuis le métro ?",
        ["Tout droit, puis à droite place Riponne", "Tout droit, puis à gauche", "Première à droite puis à gauche"],
        0,
        MAP("musee-01"),
        "Depuis Riponne, montez la rue Cité-Devant puis tournez à ___ place de la Riponne.",
        "droite",
      ),
      ceQ(
        "mus-q6",
        "De quel côté se trouve le musée sur la rue Charles-Monnard ?",
        ["À gauche", "À droite", "En face du métro"],
        0,
        "Le musée est à ___ au n° 15.",
        "gauche",
      ),
      ceQ(
        "mus-q7",
        "Quelle ligne de métro dessert la station Riponne ?",
        ["M2", "M1", "Bus 1"],
        0,
        "La station Riponne est sur la ligne ___.",
        "M2",
      ),
    ],
  },
  {
    id: "convocation-examen",
    subject: "Convocation examen",
    body:
      "CONVOCATION EXAMEN\n\n" +
      "Vous devez vous présenter aux épreuves de français du 15 juin au centre d'examen de Beaulieu.\n\n" +
      "Les épreuves commencent à 8 h 30. Vous devez arriver 30 minutes avant.\n" +
      "N'oubliez pas votre pièce d'identité et votre convocation.\n" +
      "Fin des épreuves vers 11 h 30.\n\n" +
      "Le centre se trouve à quelques mètres de la station Bessières (ligne M2).\n" +
      "En sortant du métro, prenez la première à droite puis tournez à gauche rue Saint-Laurent. " +
      "Le centre est au numéro 17.\n\n" +
      "Le directeur",
    image: "/expression/ce/base/orientation/text-02.webp",
    pool: [
      ceQ(
        "exa-q1",
        "Quelle est la date de l'examen ?",
        ["Le 15 juin", "Le 8 juin", "Le 30 juin"],
        0,
        "L'examen a lieu le ___ juin.",
        "15",
        ["quinze"],
      ),
      ceQ(
        "exa-q2",
        "À quelle heure commencent les épreuves ?",
        ["8 h 30", "9 h 00", "9 h 30"],
        0,
        "Les épreuves commencent à ___ h 30.",
        "8",
        ["8h", "huit"],
      ),
      ceQ(
        "exa-q3",
        "À quelle heure faut-il arriver ?",
        ["8 h 00", "8 h 30", "9 h 00"],
        0,
        "Il faut arriver 30 minutes avant, donc à ___ h 00.",
        "8",
        ["8h", "huit"],
      ),
      ceQ(
        "exa-q4",
        "Qu'est-ce qu'il faut apporter ?",
        ["Une pièce d'identité et la convocation", "Un dictionnaire", "Un ordinateur"],
        0,
        "N'oubliez pas votre pièce d'_________ et votre convocation.",
        "identité",
        ["identite"],
      ),
      ceMapQ(
        "exa-q5",
        "Quel trajet mène au centre d'examen depuis Bessières ?",
        ["Première à droite, puis à gauche rue Saint-Laurent", "Tout droit puis deuxième à droite", "À gauche puis tout droit"],
        1,
        MAP("examen-01"),
        "En sortant du métro, prenez la première à ___ puis tournez à gauche.",
        "droite",
      ),
      ceQ(
        "exa-q6",
        "Quelle station est la plus proche du centre ?",
        ["Bessières", "Riponne", "Ouchy"],
        0,
        "Le centre est près de la station _________.",
        "Bessières",
        ["bessieres"],
      ),
      ceQ(
        "exa-q7",
        "Vers quelle heure finissent les épreuves ?",
        ["11 h 30", "10 h 30", "12 h 30"],
        0,
        "Fin des épreuves vers ___ h 30.",
        "11",
        ["11h", "onze"],
      ),
    ],
  },
  {
    id: "rdv-maladiere",
    from: "ahmed.laquille@manor.ch",
    subject: "RDV client 12/03",
    body:
      "Bonjour,\n\n" +
      "Nous rencontrons notre cliente au centre commercial de la Maladière demain à 11 heures. " +
      "Rendez-vous à « Fringue chic », sa boutique de vêtements. " +
      "Pour aller au magasin : prenez l'entrée nord et allez à gauche. " +
      "Passez devant cinq boutiques. Puis, tournez à droite. " +
      "« Fringue chic » est en face du point d'information. " +
      "On pourra ensuite déjeuner au restaurant à 12 h 30.\n\n" +
      "Cordialement,\nAhmed",
    image: "/expression/ce/base/orientation/text-03.webp",
    pool: [
      ceQ(
        "mal-q1",
        "Où a lieu le rendez-vous ?",
        ["Au centre commercial de la Maladière", "À la gare CFF", "Au musée olympique"],
        0,
        "Le rendez-vous est au centre commercial de la _________.",
        "Maladière",
        ["maladiere"],
      ),
      ceQ(
        "mal-q2",
        "À quelle heure est le rendez-vous avec la cliente ?",
        ["11 h", "12 h 30", "14 h"],
        0,
        "Le rendez-vous est à ___ heures.",
        "11",
        ["11h", "onze"],
      ),
      ceQ(
        "mal-q3",
        "Quel est le nom de la boutique ?",
        ["Fringue chic", "Manor", "Migros"],
        0,
        "La boutique s'appelle _________ chic.",
        "Fringue",
        ["fringue"],
      ),
      ceMapQ(
        "mal-q4",
        "Quel trajet mène à « Fringue chic » ?",
        ["Entrée nord, à gauche, cinq boutiques, à droite", "Entrée sud, à droite, trois boutiques", "Tout droit jusqu'au restaurant"],
        0,
        MAP("maladiere-01"),
        "Après cinq boutiques, tournez à ___.",
        "droite",
      ),
      ceQ(
        "mal-q5",
        "Où se trouve la boutique par rapport au point d'information ?",
        ["En face", "À côté", "Au sous-sol"],
        0,
        "La boutique est en ___ du point d'information.",
        "face",
      ),
      ceQ(
        "mal-q6",
        "À quelle heure est prévu le déjeuner ?",
        ["12 h 30", "11 h", "13 h 30"],
        0,
        "Le déjeuner est à ___ h 30.",
        "12",
        ["12h", "douze"],
      ),
      ceQ(
        "mal-q7",
        "Par quelle entrée faut-il commencer ?",
        ["L'entrée nord", "L'entrée sud", "L'entrée est"],
        0,
        "Prenez l'entrée ___.",
        "nord",
      ),
    ],
  },
  {
    id: "visite-olympique",
    from: "matteo@fmail.ch",
    subject: "Visite",
    body:
      "Salut,\n\n" +
      "Je suis arrivé à 10 h. Je suis à l'hôtel « République ». Il est parfait. Il est au bord du lac.\n\n" +
      "Je te propose de visiter, demain, le musée olympique. Tu passes à mon hôtel à 11 h ? " +
      "De l'hôtel, il faut marcher jusqu'à l'avenue Mon-Repos et tourner à gauche. " +
      "Ensuite, on prend la rue de Montriond, à droite. On continue et on tourne à gauche sur l'avenue de l'Elysée.\n\n" +
      "On peut manger au restaurant ensuite.\n\n" +
      "Appelle-moi !\n\nMatteo",
    image: "/expression/ce/base/orientation/text-04.webp",
    pool: [
      ceQ(
        "oly-q1",
        "Où Matteo est-il arrivé à 10 h ?",
        ["À l'hôtel République", "À la gare", "Au musée olympique"],
        0,
        "Matteo est à l'hôtel _________.",
        "République",
        ["republique"],
      ),
      ceQ(
        "oly-q2",
        "Quel musée veut-il visiter ?",
        ["Le musée olympique", "Le Palais Rumine", "Le musée de l'art brut"],
        0,
        "Il propose le musée _________.",
        "olympique",
      ),
      ceQ(
        "oly-q3",
        "À quelle heure faut-il passer à l'hôtel ?",
        ["11 h", "10 h", "12 h"],
        0,
        "Il faut passer à l'hôtel à ___ h.",
        "11",
        ["11h", "onze"],
      ),
      ceMapQ(
        "oly-q4",
        "Quel trajet mène au musée olympique depuis l'hôtel ?",
        ["Avenue Mon-Repos à gauche, rue de Montriond à droite, avenue de l'Elysée à gauche", "Tout droit puis première à droite", "Avenue Mon-Repos à droite, puis tout droit"],
        2,
        MAP("olympique-01"),
        "De l'hôtel, tournez à ___ sur l'avenue Mon-Repos.",
        "gauche",
      ),
      ceQ(
        "oly-q5",
        "Où se trouve l'hôtel ?",
        ["Au bord du lac", "En montagne", "À la gare"],
        0,
        "L'hôtel est au bord du ___.",
        "lac",
      ),
      ceQ(
        "oly-q6",
        "Quelle rue prend-on après l'avenue Mon-Repos ?",
        ["La rue de Montriond", "La rue du Simplon", "La rue de Bourg"],
        0,
        "On prend la rue de _________.",
        "Montriond",
        ["montriond"],
      ),
      ceQ(
        "oly-q7",
        "Comment Matteo demande-t-il d'être contacté ?",
        ["Par téléphone", "Par courriel", "Par texto"],
        0,
        "Matteo dit : _________-moi !",
        "Appelle",
        ["appelle"],
      ),
    ],
  },
  {
    id: "ski-bibliotheque",
    from: "pauline@fmail.ch",
    subject: "Ski",
    body:
      "Salut,\n\n" +
      "Samedi, je pars en vacances au ski à Villars avec mes parents. Tu veux venir ? " +
      "Je peux venir te chercher en voiture à la bibliothèque à 8 h 30. C'est facile : " +
      "quand tu sors de chez toi, prends la rue du Grand-Chêne. " +
      "Marche jusqu'à la place Saint-François, puis tu tournes à droite, rue du Portail-Neuf. " +
      "La bibliothèque est en face d'une pharmacie, à côté du métro M2.\n\n" +
      "Appelle-moi !\n\nPauline",
    image: "/expression/ce/base/orientation/text-05.webp",
    pool: [
      ceQ(
        "ski-q1",
        "Où Pauline part-elle en vacances ?",
        ["À Villars", "À Genève", "À Paris"],
        0,
        "Elle part au ski à _________.",
        "Villars",
        ["villars"],
      ),
      ceQ(
        "ski-q2",
        "Où Pauline propose-t-elle de passer prendre son ami ?",
        ["À la bibliothèque", "À la gare", "Au ski"],
        0,
        "Elle passe te chercher à la _________.",
        "bibliothèque",
      ),
      ceQ(
        "ski-q3",
        "À quelle heure est le rendez-vous ?",
        ["8 h 30", "9 h 30", "10 h 30"],
        0,
        "Le rendez-vous est à ___ h 30.",
        "8",
        ["8h", "huit"],
      ),
      ceMapQ(
        "ski-q4",
        "Quel trajet mène à la bibliothèque ?",
        ["Rue du Grand-Chêne, place Saint-François, à droite rue du Portail-Neuf", "Rue du Portail-Neuf, à gauche, place Saint-François", "Tout droit jusqu'à la gare"],
        0,
        MAP("bibliotheque-01"),
        "À la place Saint-François, tournez à ___ rue du Portail-Neuf.",
        "droite",
      ),
      ceQ(
        "ski-q5",
        "Qu'est-ce qui se trouve en face de la bibliothèque ?",
        ["Une pharmacie", "Un restaurant", "Une église"],
        0,
        "La bibliothèque est en face d'une _________.",
        "pharmacie",
      ),
      ceQ(
        "ski-q6",
        "Quel transport est à côté de la bibliothèque ?",
        ["Le métro M2", "Le bus 16", "Le train CFF"],
        0,
        "La bibliothèque est à côté du métro ___.",
        "M2",
      ),
      ceQ(
        "ski-q7",
        "Quel jour part Pauline au ski ?",
        ["Samedi", "Dimanche", "Vendredi"],
        0,
        "Elle part _________.",
        "samedi",
      ),
    ],
  },
  {
    id: "spectacle-theatre",
    subject: "Spectacle",
    body:
      "Salut,\n\n" +
      "Je viens le 18 mai au spectacle, mais je vais avoir un peu de retard. " +
      "Je quitte le travail à 19 h 30 et ça commence à 20 h.\n" +
      "On se retrouve directement au théâtre « Lausanne ». " +
      "Depuis le métro, tu vas tout droit, puis tu prends la première à droite et la deuxième à gauche. " +
      "C'est en face du cinéma Pathé sur le boulevard de Grancy. " +
      "Ensuite, on pourra aller dîner, je connais un endroit rue du Port, juste à côté. " +
      "Appelle-moi !",
    image: "/expression/ce/base/orientation/text-06.webp",
    pool: [
      ceQ(
        "spe-q1",
        "Quelle est la date du spectacle ?",
        ["Le 18 mai", "Le 8 mai", "Le 28 mai"],
        0,
        "Le spectacle est le ___ mai.",
        "18",
        ["dix-huit"],
      ),
      ceQ(
        "spe-q2",
        "À quelle heure commence le spectacle ?",
        ["20 h", "19 h 30", "21 h"],
        0,
        "Le spectacle commence à ___ h.",
        "20",
        ["20h", "vingt"],
      ),
      ceQ(
        "spe-q3",
        "Où se retrouvent les amis ?",
        ["Au théâtre Lausanne", "Au cinéma Pathé", "Au restaurant rue du Port"],
        0,
        "On se retrouve au théâtre _________.",
        "Lausanne",
        ["lausanne"],
      ),
      ceMapQ(
        "spe-q4",
        "Quel trajet mène au théâtre depuis le métro ?",
        ["Tout droit, première à droite, deuxième à gauche", "Tout droit puis à gauche", "Première à gauche puis tout droit"],
        1,
        MAP("theatre-01"),
        "Depuis le métro, prenez la première à ___ puis la deuxième à gauche.",
        "droite",
      ),
      ceQ(
        "spe-q5",
        "Qu'est-ce qui se trouve en face du théâtre ?",
        ["Le cinéma Pathé", "La gare", "Le lac"],
        0,
        "Le théâtre est en face du cinéma _________.",
        "Pathé",
        ["pathe"],
      ),
      ceQ(
        "spe-q6",
        "À quelle heure Samira quitte-t-elle le travail ?",
        ["19 h 30", "20 h", "18 h 30"],
        0,
        "Elle quitte le travail à ___ h 30.",
        "19",
        ["19h", "dix-neuf"],
      ),
      ceQ(
        "spe-q7",
        "Sur quelle rue se trouve le théâtre ?",
        ["Boulevard de Grancy", "Rue du Port", "Avenue Mon-Repos"],
        0,
        "Le théâtre est sur le boulevard de _________.",
        "Grancy",
        ["grancy"],
      ),
    ],
  },
  {
    id: "train-gare",
    from: "daryna@fmail.ch",
    subject: "train",
    body:
      "Bonjour,\n\n" +
      "Mon train part de Lausanne à 13 h 30. J'arrive à Genève vers 17 h. " +
      "Peux-tu m'apporter l'ordinateur qui est dans ma chambre ? " +
      "De la maison, tu prends la rue du Simplon, puis la deuxième à droite et tu continues tout au bout : " +
      "la gare est sur la place de la Gare, à côté du restaurant « Le Délicieux ». " +
      "Mon téléphone est cassé, envoie-moi un courriel pour confirmer. Merci !\n\n" +
      "Daryna",
    image: "/expression/ce/base/orientation/text-07.webp",
    pool: [
      ceQ(
        "gar-q1",
        "De quelle ville part le train ?",
        ["Lausanne", "Genève", "Zurich"],
        0,
        "Le train part de _________.",
        "Lausanne",
        ["lausanne"],
      ),
      ceQ(
        "gar-q2",
        "À quelle heure part le train ?",
        ["13 h 30", "17 h", "15 h 30"],
        0,
        "Le train part à ___ h 30.",
        "13",
        ["13h", "treize"],
      ),
      ceQ(
        "gar-q3",
        "Qu'est-ce que Daryna demande d'apporter ?",
        ["Un ordinateur", "Un téléphone", "Une valise"],
        0,
        "Il faut apporter l'_________.",
        "ordinateur",
      ),
      ceMapQ(
        "gar-q4",
        "Quel trajet mène à la gare depuis la maison ?",
        ["Rue du Simplon, deuxième à droite, tout au bout", "Rue du Simplon, première à gauche", "Tout droit jusqu'à la place de la Riponne"],
        1,
        MAP("gare-01"),
        "Prenez la rue du Simplon, puis la deuxième à ___.",
        "droite",
      ),
      ceQ(
        "gar-q5",
        "Où se trouve la gare ?",
        ["Sur la place de la Gare", "Place de la Riponne", "Place Saint-François"],
        0,
        "La gare est sur la place de la _________.",
        "Gare",
        ["gare"],
      ),
      ceQ(
        "gar-q6",
        "Comment faut-il confirmer à Daryna ?",
        ["Par courriel", "Par téléphone", "Par texto"],
        0,
        "Il faut envoyer un _________ pour confirmer.",
        "courriel",
        ["email", "mail"],
      ),
      ceQ(
        "gar-q7",
        "Vers quelle heure arrive-t-elle à Genève ?",
        ["Vers 17 h", "Vers 13 h 30", "Vers 20 h"],
        0,
        "Elle arrive à Genève vers ___ h.",
        "17",
        ["17h", "dix-sept"],
      ),
    ],
  },
  {
    id: "foire-foraine",
    subject: "Fête foraine",
    body:
      "Coucou,\n\n" +
      "Je t'invite à la fête foraine samedi. Ça ouvre à 10 heures. " +
      "Je t'attends devant le stand de bonbons. " +
      "Quand tu es à l'entrée, tu continues tout droit. " +
      "Tu tournes à gauche après le stand de jeux d'eau, puis tu prends à droite. " +
      "C'est à côté du stand photo avec le clown.\n\n" +
      "L'entrée coûte 14 CHF, mais si tu réserves sur Internet, c'est 7 CHF. " +
      "Appelle-moi pour confirmer !\n\n" +
      "P.-S. : Tu prends un parapluie ? On annonce de la pluie.",
    image: "/expression/ce/base/orientation/text-08.webp",
    pool: [
      ceQ(
        "foi-q1",
        "Où Fatou invite-t-elle son ami ?",
        ["À la fête foraine", "Au cinéma", "Au musée"],
        0,
        "Elle invite à la fête _________.",
        "foraine",
      ),
      ceQ(
        "foi-q2",
        "À quelle heure ouvre la fête foraine ?",
        ["10 h", "14 h", "18 h"],
        0,
        "La fête foraine ouvre à ___ heures.",
        "10",
        ["10h", "dix"],
      ),
      ceQ(
        "foi-q3",
        "Où Fatou attend-elle son ami ?",
        ["Devant le stand de bonbons", "À l'entrée", "Au stand de jeux d'eau"],
        0,
        "Elle attend devant le stand de _________.",
        "bonbons",
      ),
      ceMapQ(
        "foi-q4",
        "Quel trajet mène au stand de bonbons ?",
        ["Tout droit, à gauche après les jeux d'eau, à droite", "À gauche puis tout droit", "Tout droit puis à droite avant les jeux d'eau"],
        1,
        MAP("foire-01"),
        "Après le stand de jeux d'eau, tournez à ___.",
        "gauche",
      ),
      ceQ(
        "foi-q5",
        "Combien coûte l'entrée sur Internet ?",
        ["7 CHF", "14 CHF", "10 CHF"],
        0,
        "Sur Internet, l'entrée coûte ___ CHF.",
        "7",
        ["sept"],
      ),
      ceQ(
        "foi-q6",
        "Quel objet Fatou conseille-t-elle d'apporter ?",
        ["Un parapluie", "Un maillot de bain", "Un livre"],
        0,
        "Fatou demande : Tu prends un _________ ?",
        "parapluie",
      ),
      ceQ(
        "foi-q7",
        "Quel repère se trouve près du stand de bonbons ?",
        ["Le stand photo avec le clown", "Le restaurant", "La pharmacie"],
        0,
        "C'est à côté du stand photo avec le _________.",
        "clown",
      ),
    ],
  },
];

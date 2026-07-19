import type { CEMessageItem } from "./ce-questions-helpers";
import { ceMapQ, ceQ } from "./ce-questions-helpers";

const MAP = (lieu: string): [string, string, string] => [
  `/assets/expression/ce/base/orientation/${lieu}-01-a.webp`,
  `/assets/expression/ce/base/orientation/${lieu}-01-b.webp`,
  `/assets/expression/ce/base/orientation/${lieu}-01-c.webp`,
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
    image: "/assets/expression/images/ce/ce-orientation-01.webp",
    pool: [
      ceQ(
        "mus-q1",
        "Où va la classe samedi ?",
        ["Au musée", "Au cinéma", "À la bibliothèque"],
        0,
        "Samedi, nous allons au _________.",
        "musée",
        ["musee"],
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
        "Quel transport public est conseillé ?",
        ["Le métro M2", "Le bus 1", "Le train CFF"],
        0,
        "Descendez à la station sur la ligne ___.",
        "M2",
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
        MAP("musee"),
        "Depuis Riponne, montez la rue Cité-Devant puis tournez à ___ place de la Riponne.",
        "droite",
      ),
      ceQ(
        "mus-q6",
        "De quel côté se trouve le musée ?",
        ["À gauche", "À droite", "En face du métro"],
        0,
        "Le musée est à ___ au n° 15.",
        "gauche",
      ),
      ceQ(
        "mus-q7",
        "Quel est le tarif normal d'entrée ?",
        ["8 CHF", "4 CHF", "17 CHF"],
        0,
        "Le tarif normal est de ___ CHF.",
        "8",
        ["huit"],
      ),
      ceQ(
        "mus-q8",
        "Combien d'élèves sont dans le groupe ?",
        ["17 élèves", "15 élèves", "20 élèves"],
        0,
        "Nous sommes ___ dans le groupe.",
        "17",
        ["dix-sept"],
      ),
      ceQ(
        "mus-q9",
        "Quel numéro a le musée ?",
        ["Le n° 15", "Le n° 17", "Le n° 31"],
        0,
        "Le musée est au n° ___.",
        "15",
        ["quinze"],
      ),
      ceQ(
        "mus-q10",
        "Pourquoi le tarif est-il réduit ?",
        ["Parce qu'ils sont un groupe", "Parce que c'est gratuit", "Parce que c'est dimanche"],
        0,
        "Le tarif est réduit car nous sommes un _________.",
        "groupe",
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
    image: "/assets/expression/images/ce/ce-orientation-02.webp",
    pool: [
      ceQ(
        "exa-q1",
        "Quel jour du mois a lieu l'examen ?",
        ["Le 15", "Le 8", "Le 30"],
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
        "Combien de minutes avant faut-il arriver ?",
        ["30 minutes", "15 minutes", "60 minutes"],
        0,
        "Il faut arriver ___ minutes avant.",
        "30",
        ["trente"],
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
        0,
        MAP("examen"),
        "En sortant du métro, prenez la première à ___ puis tournez à gauche.",
        "droite",
      ),
      ceQ(
        "exa-q6",
        "Quel transport est près du centre ?",
        ["Le métro M2", "Le bus 1", "Le train CFF"],
        0,
        "Le centre est près de la station sur la ligne ___.",
        "M2",
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
      ceQ(
        "exa-q8",
        "Quel numéro a le centre d'examen ?",
        ["Le n° 17", "Le n° 15", "Le n° 31"],
        0,
        "Le centre est au numéro ___.",
        "17",
        ["dix-sept"],
      ),
      ceQ(
        "exa-q9",
        "À quelle heure faut-il arriver ?",
        ["8 h 00", "8 h 30", "9 h 00"],
        0,
        "Il faut arriver à ___ h 00.",
        "8",
        ["8h", "huit"],
      ),
      ceQ(
        "exa-q10",
        "Quelle matière est examinée ?",
        ["Le français", "Les mathématiques", "L'anglais"],
        0,
        "Les épreuves sont de _________.",
        "français",
        ["francais"],
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
    image: "/assets/expression/images/ce/ce-orientation-03.webp",
    pool: [
      ceQ(
        "mal-q1",
        "Où a lieu le rendez-vous ?",
        ["Dans un centre commercial", "À la gare", "Au musée"],
        0,
        "Le rendez-vous est dans un centre _________.",
        "commercial",
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
        "Quel type de magasin est le rendez-vous ?",
        ["Une boutique de vêtements", "Un restaurant", "Une pharmacie"],
        0,
        "C'est une boutique de _________.",
        "vêtements",
        ["vetements"],
      ),
      ceMapQ(
        "mal-q4",
        "Quel trajet mène à la boutique ?",
        ["Entrée nord, à gauche, cinq boutiques, à droite", "Entrée sud, à droite, trois boutiques", "Tout droit jusqu'au restaurant"],
        0,
        MAP("maladiere"),
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
      ceQ(
        "mal-q8",
        "Combien de boutiques faut-il passer ?",
        ["5 boutiques", "3 boutiques", "10 boutiques"],
        0,
        "Passez devant ___ boutiques.",
        "5",
        ["cinq"],
      ),
      ceQ(
        "mal-q9",
        "Dans quelle direction aller après l'entrée nord ?",
        ["À gauche", "À droite", "Tout droit"],
        0,
        "Prenez l'entrée nord et allez à ___.",
        "gauche",
      ),
      ceQ(
        "mal-q10",
        "Que fait-on après le rendez-vous client ?",
        ["On déjeune", "On rentre", "On fait les courses"],
        0,
        "Ensuite, on pourra _________ au restaurant.",
        "déjeuner",
        ["dejeuner"],
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
    image: "/assets/expression/images/ce/ce-orientation-04.webp",
    pool: [
      ceQ(
        "oly-q1",
        "Où Matteo est-il arrivé à 10 h ?",
        ["Dans un hôtel", "À la gare", "Au musée"],
        0,
        "Matteo est dans un _________.",
        "hôtel",
        ["hotel"],
      ),
      ceQ(
        "oly-q2",
        "Quel musée veut-il visiter ?",
        ["Le musée olympique", "Un musée d'art", "Un musée d'histoire"],
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
        0,
        MAP("olympique"),
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
        "Dans quelle direction tourne-t-on sur l'avenue Mon-Repos ?",
        ["À gauche", "À droite", "Tout droit"],
        0,
        "Il faut tourner à ___ sur l'avenue Mon-Repos.",
        "gauche",
      ),
      ceQ(
        "oly-q7",
        "Que propose-t-on de faire après la visite ?",
        ["Manger au restaurant", "Rentrer à l'hôtel", "Aller au cinéma"],
        0,
        "On peut manger au _________ ensuite.",
        "restaurant",
      ),
      ceQ(
        "oly-q8",
        "À quelle heure Matteo est-il arrivé ?",
        ["10 h", "11 h", "12 h"],
        0,
        "Matteo est arrivé à ___ h.",
        "10",
        ["10h", "dix"],
      ),
      ceQ(
        "oly-q9",
        "Quand a lieu la visite du musée ?",
        ["Demain", "Aujourd'hui", "La semaine prochaine"],
        0,
        "La visite est _________.",
        "demain",
      ),
      ceQ(
        "oly-q10",
        "Comment Matteo demande-t-il d'être contacté ?",
        ["Par téléphone", "Par courriel", "Par texto"],
        0,
        "Il faut l'_________ par téléphone.",
        "appeler",
      ),
    ],
  },
  {
    id: "ski-bibliotheque",
    from: "rita@fmail.ch",
    subject: "Ski",
    body:
      "Salut,\n\n" +
      "Samedi, je pars en vacances au ski à Villars avec mes parents. Tu veux venir ? " +
      "Je peux venir te chercher en voiture à la bibliothèque à 8 h 30. C'est facile : " +
      "quand tu sors de chez toi, prends la rue du Grand-Chêne. " +
      "Marche jusqu'à la place Saint-François, puis tu tournes à droite, rue du Portail-Neuf. " +
      "La bibliothèque est en face d'une pharmacie, à côté du métro M2.\n\n" +
      "Appelle-moi !\n\nRita",
    image: "/assets/expression/images/ce/ce-orientation-05.webp",
    pool: [
      ceQ(
        "ski-q1",
        "Quelle activité Rita prépare-t-elle ?",
        ["Des vacances au ski", "Un voyage à la plage", "Une sortie au cinéma"],
        0,
        "Elle part en vacances au _________.",
        "ski",
      ),
      ceQ(
        "ski-q2",
        "Où Rita propose-t-elle de passer prendre son ami ?",
        ["À la bibliothèque", "À la gare", "Au restaurant"],
        0,
        "Elle passe te chercher à la _________.",
        "bibliothèque",
        ["bibliotheque"],
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
        MAP("bibliotheque"),
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
        "Avec qui Rita part-elle au ski ?",
        ["Avec ses parents", "Avec ses amis", "Seule"],
        0,
        "Elle part avec ses _________.",
        "parents",
      ),
      ceQ(
        "ski-q8",
        "Quel moyen de transport Rita utilise-t-elle ?",
        ["La voiture", "Le bus", "Le métro"],
        0,
        "Elle peut venir te chercher en _________.",
        "voiture",
      ),
      ceQ(
        "ski-q9",
        "Dans quelle direction tourner à la place Saint-François ?",
        ["À droite", "À gauche", "Tout droit"],
        0,
        "À la place Saint-François, tournez à ___.",
        "droite",
      ),
      ceQ(
        "ski-q10",
        "Comment Rita demande-t-elle d'être contactée ?",
        ["Par téléphone", "Par courriel", "Par texto"],
        0,
        "Il faut l'_________ par téléphone.",
        "appeler",
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
      "Appelle-moi !\n\nSamira",
    image: "/assets/expression/images/ce/ce-orientation-06.webp",
    pool: [
      ceQ(
        "spe-q1",
        "Quel jour du mois est le spectacle ?",
        ["Le 18", "Le 8", "Le 28"],
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
        ["Au théâtre", "Au cinéma", "Au restaurant"],
        0,
        "On se retrouve au _________.",
        "théâtre",
        ["theatre"],
      ),
      ceMapQ(
        "spe-q4",
        "Quel trajet mène au théâtre depuis le métro ?",
        ["Tout droit, première à droite, deuxième à gauche", "Tout droit puis à gauche", "Première à gauche puis tout droit"],
        0,
        MAP("theatre"),
        "Depuis le métro, prenez la première à ___ puis la deuxième à gauche.",
        "droite",
      ),
      ceQ(
        "spe-q5",
        "Qu'est-ce qui se trouve en face du théâtre ?",
        ["Un cinéma", "La gare", "Le lac"],
        0,
        "Le théâtre est en face d'un _________.",
        "cinéma",
        ["cinema"],
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
        "Que fait-on après le spectacle ?",
        ["On dîne", "On rentre", "On va au cinéma"],
        0,
        "Ensuite, on pourra aller _________.",
        "dîner",
        ["diner"],
      ),
      ceQ(
        "spe-q8",
        "Samira aura-t-elle un peu de retard ?",
        ["Oui", "Non", "On ne sait pas"],
        0,
        "Elle va avoir un peu de _________.",
        "retard",
      ),
      ceQ(
        "spe-q9",
        "Combien de changements de direction depuis le métro ?",
        ["Deux virages", "Un virage", "Aucun virage"],
        0,
        "Il faut une première à droite et une deuxième à ___.",
        "gauche",
      ),
      ceQ(
        "spe-q10",
        "Par quel moyen Samira demande-t-elle d'être jointe ?",
        ["Par téléphone", "Par courriel", "Par texto"],
        0,
        "Il faut l'_________ par téléphone.",
        "appeler",
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
    image: "/assets/expression/images/ce/ce-orientation-07.webp",
    pool: [
      ceQ(
        "gar-q1",
        "À quelle heure part le train ?",
        ["13 h 30", "17 h", "15 h 30"],
        0,
        "Le train part à ___ h 30.",
        "13",
        ["13h", "treize"],
      ),
      ceQ(
        "gar-q2",
        "Qu'est-ce que Daryna demande d'apporter ?",
        ["Un ordinateur", "Un téléphone", "Une valise"],
        0,
        "Il faut apporter l'_________.",
        "ordinateur",
      ),
      ceMapQ(
        "gar-q3",
        "Quel trajet mène à la gare depuis la maison ?",
        ["Rue du Simplon, deuxième à droite, tout au bout", "Rue du Simplon, première à gauche", "Tout droit jusqu'à la place de la Riponne"],
        0,
        MAP("gare"),
        "Prenez la rue du Simplon, puis la deuxième à ___.",
        "droite",
      ),
      ceQ(
        "gar-q4",
        "Qu'est-ce qui est à côté de la gare ?",
        ["Un restaurant", "Un musée", "Une pharmacie"],
        0,
        "La gare est à côté d'un _________.",
        "restaurant",
      ),
      ceQ(
        "gar-q5",
        "Comment faut-il confirmer à Daryna ?",
        ["Par courriel", "Par téléphone", "Par texto"],
        0,
        "Il faut envoyer un _________ pour confirmer.",
        "courriel",
        ["email", "mail"],
      ),
      ceQ(
        "gar-q6",
        "Vers quelle heure arrive-t-elle à destination ?",
        ["Vers 17 h", "Vers 13 h 30", "Vers 20 h"],
        0,
        "Elle arrive vers ___ h.",
        "17",
        ["17h", "dix-sept"],
      ),
      ceQ(
        "gar-q7",
        "Où se trouve l'ordinateur ?",
        ["Dans sa chambre", "À la gare", "Au bureau"],
        0,
        "L'ordinateur est dans sa _________.",
        "chambre",
      ),
      ceQ(
        "gar-q8",
        "Pourquoi ne faut-il pas téléphoner ?",
        ["Son téléphone est cassé", "Elle est en voyage", "Elle n'a pas de numéro"],
        0,
        "Son téléphone est _________.",
        "cassé",
        ["casse"],
      ),
      ceQ(
        "gar-q9",
        "Combien de virages faut-il après la rue du Simplon ?",
        ["Un à droite", "Deux à gauche", "Aucun"],
        0,
        "Il faut prendre la deuxième à ___.",
        "droite",
      ),
      ceQ(
        "gar-q10",
        "Quel moyen de transport Daryna prend-elle ?",
        ["Le train", "Le bus", "L'avion"],
        0,
        "Daryna prend le _________.",
        "train",
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
      "P.-S. : Tu prends un parapluie ? On annonce de la pluie.\n\nFatou",
    image: "/assets/expression/images/ce/ce-orientation-08.webp",
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
        0,
        MAP("foire"),
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
      ceQ(
        "foi-q8",
        "Combien coûte l'entrée sans réservation ?",
        ["14 CHF", "7 CHF", "10 CHF"],
        0,
        "L'entrée coûte ___ CHF sans réservation.",
        "14",
        ["quatorze"],
      ),
      ceQ(
        "foi-q9",
        "Quel temps est annoncé ?",
        ["De la pluie", "Du soleil", "De la neige"],
        0,
        "On annonce de la _________.",
        "pluie",
      ),
      ceQ(
        "foi-q10",
        "Que faut-il faire après le stand de jeux d'eau ?",
        ["Tourner à gauche puis à droite", "Continuer tout droit", "Revenir en arrière"],
        0,
        "Après les jeux d'eau, tournez à gauche puis à ___.",
        "droite",
      ),
    ],
  },
  {
    id: "inscriptions-unil",
    subject: "Inscriptions universitaires — Infos pratiques",
    body:
      "INSCRIPTIONS UNIVERSITAIRES\n\n" +
      "Les inscriptions se font au bureau uniquement.\n" +
      "Pensez à apporter une pièce d'identité.\n\n" +
      "Le bureau des inscriptions ouvre le 30 août à une nouvelle adresse :\n" +
      "2, rue du Simplon (métro M2, station Lausanne-Flon).\n\n" +
      "À la sortie du métro, prenez à gauche, puis prenez la deuxième rue à droite.\n\n" +
      "Horaires (nouveaux) :\n" +
      "du lundi au vendredi : 9 h-12 h et 13 h-15 h (sauf le mercredi après-midi).\n\n" +
      "Téléphone : +41 21 692 11 11\n" +
      "inscriptions@unil.ch",
    image: "/assets/expression/images/ce/ce-orientation-09.webp",
    pool: [
      ceQ(
        "ins-q1",
        "Où faut-il s'inscrire ?",
        ["Au bureau uniquement", "Sur Internet seulement", "Par téléphone"],
        0,
        "Les inscriptions se font au _________ uniquement.",
        "bureau",
      ),
      ceQ(
        "ins-q2",
        "Quel document faut-il apporter ?",
        ["Une pièce d'identité", "Un livre de cours", "Un certificat médical"],
        0,
        "Pensez à apporter une pièce d'_________.",
        "identité",
        ["identite"],
      ),
      ceQ(
        "ins-q3",
        "À quelle date ouvre le bureau au nouveau local ?",
        ["Le 30 août", "Le 15 août", "Le 1er septembre"],
        0,
        "Le bureau ouvre le ___ août.",
        "30",
        ["trente"],
      ),
      ceMapQ(
        "ins-q4",
        "Quel chemin mène au bureau des inscriptions depuis le métro ?",
        ["À gauche, puis deuxième rue à droite", "À droite, puis première à gauche", "Tout droit jusqu'au bout"],
        0,
        MAP("inscription"),
        "À la sortie du métro, prenez à ___, puis la deuxième rue à droite.",
        "gauche",
      ),
      ceQ(
        "ins-q5",
        "Quels sont les horaires le matin en semaine ?",
        ["9 h-12 h", "8 h-11 h", "10 h-13 h"],
        0,
        "Le matin, le bureau est ouvert de 9 h à ___ h.",
        "12",
        ["12h", "midi"],
      ),
      ceQ(
        "ins-q6",
        "Quels sont les horaires l'après-midi en semaine ?",
        ["13 h-15 h", "12 h-14 h", "14 h-18 h"],
        0,
        "L'après-midi, le bureau est ouvert de 13 h à ___ h.",
        "15",
        ["15h", "quinze"],
      ),
      ceQ(
        "ins-q7",
        "Quelle ligne de métro dessert le bureau ?",
        ["M2", "M1", "Bus 1"],
        0,
        "Le bureau est accessible par le métro ___.",
        "M2",
      ),
      ceQ(
        "ins-q8",
        "Le bureau est-il ouvert l'après-midi tous les jours ?",
        ["Non, fermé un jour", "Oui, tous les jours", "Non, jamais l'après-midi"],
        0,
        "Le bureau est fermé un ___ après-midi.",
        "jour",
      ),
      ceQ(
        "ins-q9",
        "Combien de créneaux horaires par jour en semaine ?",
        ["2 créneaux", "1 créneau", "3 créneaux"],
        0,
        "Il y a ___ créneaux par jour.",
        "2",
        ["deux"],
      ),
      ceQ(
        "ins-q10",
        "Comment contacter le bureau par écrit ?",
        ["Par courriel", "Par texto", "Par courrier postal uniquement"],
        0,
        "L'adresse électronique est inscriptions@unil.___",
        "ch",
      ),
    ],
  },
  {
    id: "librairie-beauvoir",
    subject: "Nouvelle librairie",
    body:
      "NOUVELLE LIBRAIRIE\n\n" +
      "La mairie vous informe de l'ouverture de la librairie Beauvoir au 31 place de la Riponne, " +
      "à côté de l'université de Lausanne.\n\n" +
      "Depuis l'université, allez tout droit jusqu'à la place de la Palud, puis tournez à gauche.\n\n" +
      "Horaires : du lundi au vendredi de 9 h à 18 h, le samedi de 10 h à 17 h.\n\n" +
      "Ouverture exceptionnelle ce dimanche de 13 h à 18 h !\n\n" +
      "Un concours est organisé pour gagner des tablettes numériques.",
    image: "/assets/expression/images/ce/ce-orientation-10.webp",
    pool: [
      ceQ(
        "lib-q1",
        "Quel établissement ouvre ?",
        ["Une librairie", "Un restaurant", "Une piscine"],
        0,
        "C'est l'ouverture d'une _________.",
        "librairie",
      ),
      ceQ(
        "lib-q2",
        "À côté de quel lieu se trouve la librairie ?",
        ["D'une université", "D'une gare", "D'un lac"],
        0,
        "La librairie est à côté d'une _________.",
        "université",
        ["universite"],
      ),
      ceMapQ(
        "lib-q3",
        "Quel chemin mène à la librairie depuis l'université ?",
        ["Tout droit jusqu'à la place de la Palud, puis à gauche", "À droite puis tout droit", "Première à gauche puis à droite"],
        0,
        MAP("librairie"),
        "Depuis l'université, allez tout droit jusqu'à la place de la Palud, puis tournez à ___.",
        "gauche",
      ),
      ceQ(
        "lib-q4",
        "Quels sont les horaires le samedi ?",
        ["10 h-17 h", "9 h-18 h", "13 h-18 h"],
        0,
        "Le samedi, la librairie est ouverte de 10 h à ___ h.",
        "17",
        ["17h", "dix-sept"],
      ),
      ceQ(
        "lib-q5",
        "À quelle heure commence l'ouverture exceptionnelle ?",
        ["13 h", "10 h", "9 h"],
        0,
        "L'ouverture exceptionnelle commence à ___ h.",
        "13",
        ["13h", "treize"],
      ),
      ceQ(
        "lib-q6",
        "Quel prix peut-on gagner au concours ?",
        ["Des tablettes numériques", "Des livres gratuits", "Des billets de cinéma"],
        0,
        "Le concours permet de gagner des _________ numériques.",
        "tablettes",
      ),
      ceQ(
        "lib-q7",
        "Quels sont les horaires en semaine ?",
        ["9 h-18 h", "10 h-17 h", "8 h-12 h"],
        0,
        "En semaine, la librairie est ouverte de 9 h à ___ h.",
        "18",
        ["18h", "dix-huit"],
      ),
      ceQ(
        "lib-q8",
        "Qui informe de l'ouverture ?",
        ["La mairie", "La police", "L'école"],
        0,
        "La _________ informe de l'ouverture.",
        "mairie",
      ),
      ceQ(
        "lib-q9",
        "Dans quelle direction tourner après la place de la Palud ?",
        ["À gauche", "À droite", "Tout droit"],
        0,
        "Après la place de la Palud, tournez à ___.",
        "gauche",
      ),
      ceQ(
        "lib-q10",
        "Jusqu'à quelle heure dure l'ouverture exceptionnelle ?",
        ["18 h", "17 h", "13 h"],
        0,
        "L'ouverture exceptionnelle va jusqu'à ___ h.",
        "18",
        ["18h", "dix-huit"],
      ),
    ],
  },
  {
    id: "poste-nouvelle-adresse",
    subject: "Bureau de poste : nouvelle adresse",
    body:
      "Bureau de poste : nouvelle adresse\n\n" +
      "La Poste déménage et s'installe au 31 rue du Pont, en face du commissariat.\n\n" +
      "De la mairie (rue de Bourg), vous prenez à droite, puis vous allez tout droit " +
      "et vous tournez ensuite sur la deuxième rue à gauche.\n\n" +
      "L'ancien bureau de la place de la Palud est définitivement fermé.\n\n" +
      "Horaires : lundi-vendredi de 9 h à 18 h 30 et samedi de 10 h à 12 h 30.\n" +
      "Derniers envois de courrier à 17 h.\n" +
      "Contact : poste@lausanne.ch",
    image: "/assets/expression/images/ce/ce-orientation-11.webp",
    pool: [
      ceQ(
        "pos-q1",
        "Qu'est-ce qui change pour la Poste ?",
        ["Elle déménage", "Elle ferme", "Elle agrandit seulement"],
        0,
        "La Poste _________ et s'installe ailleurs.",
        "déménage",
        ["demenage"],
      ),
      ceQ(
        "pos-q2",
        "Qu'est-ce qui se trouve en face du nouveau bureau ?",
        ["Le commissariat", "La mairie", "L'université"],
        0,
        "Le bureau est en face du _________.",
        "commissariat",
      ),
      ceMapQ(
        "pos-q3",
        "Quel trajet mène à la poste depuis la mairie ?",
        ["À droite, tout droit, deuxième rue à gauche", "À gauche, première à droite", "Tout droit jusqu'à la gare"],
        0,
        MAP("poste"),
        "De la mairie, prenez à droite, tout droit, puis la deuxième rue à ___.",
        "gauche",
      ),
      ceQ(
        "pos-q4",
        "L'ancien bureau est-il encore ouvert ?",
        ["Non, il est fermé", "Oui", "On ne sait pas"],
        0,
        "L'ancien bureau est définitivement _________.",
        "fermé",
        ["ferme"],
      ),
      ceQ(
        "pos-q5",
        "Jusqu'à quelle heure peut-on envoyer du courrier ?",
        ["17 h", "18 h 30", "12 h 30"],
        0,
        "Derniers envois de courrier à ___ h.",
        "17",
        ["17h", "dix-sept"],
      ),
      ceQ(
        "pos-q6",
        "Quels sont les horaires le samedi ?",
        ["10 h-12 h 30", "9 h-18 h 30", "Fermé"],
        0,
        "Le samedi, la Poste est ouverte de 10 h à 12 h ___.",
        "30",
        ["trente"],
      ),
      ceQ(
        "pos-q7",
        "D'où part-on pour aller à la poste ?",
        ["De la mairie", "De la gare", "Du commissariat"],
        0,
        "On part de la _________.",
        "mairie",
      ),
      ceQ(
        "pos-q8",
        "Quels sont les horaires en semaine ?",
        ["9 h-18 h 30", "10 h-12 h 30", "8 h-17 h"],
        0,
        "En semaine, la Poste est ouverte de 9 h à 18 h ___.",
        "30",
        ["trente"],
      ),
      ceQ(
        "pos-q9",
        "Dans quelle direction tourner après avoir marché tout droit ?",
        ["À gauche", "À droite", "En arrière"],
        0,
        "Après tout droit, tournez sur la deuxième rue à ___.",
        "gauche",
      ),
      ceQ(
        "pos-q10",
        "Comment contacter la Poste par écrit ?",
        ["Par courriel", "Par texto", "Par téléphone uniquement"],
        0,
        "Le contact est poste@lausanne.___",
        "ch",
      ),
    ],
  },
];

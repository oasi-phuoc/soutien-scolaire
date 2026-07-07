import type { CEMultiQuestion } from "./ce-questions-helpers";
import { ceQ } from "./ce-questions-helpers";

export type CEArticleItem = {
  id: string;
  title: string;
  sections: { heading: string; body: string; imageLabel?: string }[];
  pool: CEMultiQuestion[];
};

/** Articles « Lire des informations » — CE moyen (pool 12 questions multi-format). */
export const CE_ARTICLES_MOYEN: CEArticleItem[] = [
  {
    id: "zoo-zurich",
    title: "Réouverture du zoo de Zurich",
    sections: [
      {
        heading: "Nouveautés",
        imageLabel: "Animaux",
        body:
          "Le zoo de Zurich rouvre le 5 avril pour une nouvelle saison. Venez admirer les bébés singes ! " +
          "Un nouvel enclos accueille les lions et les tigres. Les bassins ont été agrandis : trois tortues géantes y vivent maintenant.",
      },
      {
        heading: "Animations",
        imageLabel: "Spectacles",
        body:
          "Chaque jour à 11 h, venez voir le nourrissage des éléphants et des girafes. " +
          "Le spectacle des oiseaux a lieu deux fois par jour, à 15 h et à 17 h.",
      },
      {
        heading: "Infos pratiques",
        imageLabel: "Tarifs",
        body:
          "Il y a deux cafétérias dans le zoo. Les pique-niques sont interdits à l'intérieur. " +
          "Une aire de pique-nique avec une aire de jeux pour enfants se trouve dans le parking. " +
          "Tarifs : adultes 18 CHF, enfants de 3 à 16 ans 12 CHF. " +
          "Jusqu'au 30 avril : une place achetée = une place offerte. " +
          "Ouvert tous les jours de 10 h à 19 h. En été (juillet et août) : de 10 h à 21 h. " +
          "Fermeture hivernale le 30 septembre.",
      },
    ],
    pool: [
      ceQ(
        "zoo-q1",
        "Au zoo de Zurich, on peut voir des bébés…",
        ["Singes", "Lions", "Tortues"],
        0,
        "On peut voir des bébés _________.",
        "singes",
      ),
      ceQ(
        "zoo-q2",
        "Quels animaux sont dans le nouvel enclos ?",
        ["Lions et tigres", "Éléphants et girafes", "Oiseaux et tortues"],
        0,
        "Le nouvel enclos accueille les lions et les _________.",
        "tigres",
      ),
      ceQ(
        "zoo-q3",
        "Combien de tortues géantes vivent dans les bassins ?",
        ["Une", "Trois", "Cinq"],
        1,
        "Il y a ___ tortues géantes.",
        "trois",
        ["3"],
      ),
      ceQ(
        "zoo-q4",
        "À quelle heure a lieu le nourrissage des éléphants ?",
        ["11 h", "15 h", "17 h"],
        0,
        "Le nourrissage a lieu à ___ h.",
        "11",
        ["onze"],
      ),
      ceQ(
        "zoo-q5",
        "Que peut-on voir à 15 h ?",
        ["Un spectacle d'oiseaux", "Le nourrissage des lions", "La fermeture du zoo"],
        0,
        "À 15 h, il y a un spectacle d'_________.",
        "oiseaux",
      ),
      ceQ(
        "zoo-q6",
        "Combien de spectacles d'oiseaux par jour ?",
        ["Un", "Deux", "Trois"],
        1,
        "Le spectacle a lieu ___ fois par jour.",
        "deux",
        ["2"],
      ),
      ceQ(
        "zoo-q7",
        "Peut-on pique-niquer dans le zoo ?",
        ["Oui, partout", "Non, c'est interdit", "Oui, seulement le matin"],
        1,
        "Les pique-niques sont _________ à l'intérieur.",
        "interdits",
        ["interdit"],
      ),
      ceQ(
        "zoo-q8",
        "Où peut-on pique-niquer ?",
        ["Dans le parking", "Dans l'enclos des lions", "Dans la cafétéria"],
        0,
        "L'aire de pique-nique est dans le _________.",
        "parking",
      ),
      ceQ(
        "zoo-q9",
        "Combien coûte l'entrée pour un adulte ?",
        ["12 CHF", "18 CHF", "25 CHF"],
        1,
        "L'entrée adulte coûte ___ CHF.",
        "18",
        ["dix-huit"],
      ),
      ceQ(
        "zoo-q10",
        "Quelle promotion existe jusqu'à fin avril ?",
        ["Une place offerte", "Entrée gratuite", "Réduction de 50 %"],
        0,
        "Une place achetée = une place _________.",
        "offerte",
      ),
      ceQ(
        "zoo-q11",
        "À quelle heure ferme le zoo en été ?",
        ["19 h", "21 h", "23 h"],
        1,
        "En été, le zoo ferme à ___ h.",
        "21",
        ["vingt-et-un"],
      ),
      ceQ(
        "zoo-q12",
        "Quels animaux sont nourris à 11 h ?",
        ["Éléphants et girafes", "Lions et tigres", "Singes et tortues"],
        0,
        "À 11 h, on nourrit les éléphants et les _________.",
        "girafes",
      ),
    ],
  },
  {
    id: "foot-salle-lausanne",
    title: "Foot en salle à Lausanne",
    sections: [
      {
        heading: "Le foot en salle",
        imageLabel: "Sport",
        body:
          "Le foot en salle, c'est le plaisir du football sans la boue ! Les joueurs touchent souvent le ballon et marquent beaucoup de buts, parfois des dizaines par match. " +
          "C'est un sport très physique : 60 minutes de jeu, ou plus, sans s'arrêter.",
      },
      {
        heading: "Le club Footsal Lausanne",
        imageLabel: "Club",
        body:
          "Le club Footsal de Lausanne propose des matchs pour deux équipes de cinq joueurs. " +
          "Les terrains sont couverts : seulement en salle à Lausanne. Des terrains extérieurs existent au club de Nyon. " +
          "Le club est ouvert tous les jours de 10 h à 23 h. Il y a une salle de jeux et un bar.",
      },
      {
        heading: "École de foot",
        imageLabel: "Jeunes",
        body:
          "Le club propose une école de foot pour les jeunes de 7 à 16 ans, toute l'année scolaire et pendant les vacances. " +
          "Les tarifs commencent à 280 CHF par an. Le prix comprend 34 séances par an, " +
          "des cours le mercredi, le samedi ou le dimanche selon la catégorie, et l'encadrement par des moniteurs diplômés.",
      },
    ],
    pool: [
      ceQ(
        "foot-q1",
        "Quel est l'avantage du foot en salle ?",
        ["On peut marquer plus de buts", "On se fatigue moins", "On joue toujours dehors"],
        0,
        "On peut marquer plus de _________.",
        "buts",
      ),
      ceQ(
        "foot-q2",
        "Combien de joueurs par équipe ?",
        ["Cinq", "Sept", "Onze"],
        0,
        "Chaque équipe a ___ joueurs.",
        "cinq",
        ["5"],
      ),
      ceQ(
        "foot-q3",
        "Où sont les terrains à Lausanne ?",
        ["En salle", "À l'extérieur", "À la montagne"],
        0,
        "À Lausanne, les terrains sont en _________.",
        "salle",
      ),
      ceQ(
        "foot-q4",
        "Que trouve-t-on aussi au club ?",
        ["Un bar et une salle de jeux", "Une piscine", "Un cinéma"],
        0,
        "Il y a un bar et une salle de _________.",
        "jeux",
      ),
      ceQ(
        "foot-q5",
        "Pour quel âge est l'école de foot ?",
        ["De 7 à 16 ans", "De 3 à 6 ans", "Pour les adultes seulement"],
        0,
        "L'école de foot est pour les jeunes de 7 à ___ ans.",
        "16",
        ["seize"],
      ),
      ceQ(
        "foot-q6",
        "À partir de combien coûte l'inscription annuelle ?",
        ["180 CHF", "280 CHF", "380 CHF"],
        1,
        "L'inscription commence à ___ CHF par an.",
        "280",
        ["deux cent quatre-vingts"],
      ),
      ceQ(
        "foot-q7",
        "Combien de séances par an ?",
        ["16", "34", "50"],
        1,
        "Le prix comprend ___ séances par an.",
        "34",
        ["trente-quatre"],
      ),
      ceQ(
        "foot-q8",
        "Quels jours ont lieu les cours ?",
        ["Mercredi, samedi ou dimanche", "Lundi et mardi", "Tous les jours"],
        0,
        "Les cours ont lieu certains jours de la _________.",
        "semaine",
      ),
      ceQ(
        "foot-q9",
        "Quelle activité le texte décrit-il ?",
        ["Le football en salle", "La natation", "Le tennis"],
        0,
        "C'est du football en _________.",
        "salle",
      ),
      ceQ(
        "foot-q10",
        "Combien de minutes dure un match typique ?",
        ["30 minutes", "60 minutes", "90 minutes"],
        1,
        "Un match dure ___ minutes, ou plus.",
        "60",
        ["soixante"],
      ),
      ceQ(
        "foot-q11",
        "Qui encadre les jeunes ?",
        ["Des moniteurs diplômés", "Des parents bénévoles", "Des médecins"],
        0,
        "Les cours sont encadrés par des moniteurs _________.",
        "diplômés",
        ["diplomes"],
      ),
      ceQ(
        "foot-q12",
        "Où peut-on jouer en extérieur ?",
        ["À Nyon", "À Lausanne", "Au zoo"],
        0,
        "Les terrains extérieurs sont dans un autre _________.",
        "club",
        ["autre club"],
      ),
    ],
  },
  {
    id: "base-loisirs-morat",
    title: "Base de loisirs du lac de Morat",
    sections: [
      {
        heading: "Activités",
        imageLabel: "Loisirs",
        body:
          "La base de loisirs du lac de Morat est un espace unique pour se détendre. " +
          "Vous y trouvez une plage avec baignade surveillée, un minigolf, du ping-pong, du beach-volley et des aires de pique-nique. " +
          "Vous pouvez aussi louer des canoës.",
      },
      {
        heading: "Cadre naturel",
        imageLabel: "Nature",
        body:
          "Le site se trouve au bord du lac, dans un cadre verdoyant. " +
          "C'est un endroit idéal pour une sortie en famille : promenades à pied ou à vélo sur les sentiers autour du lac.",
      },
      {
        heading: "Horaires et règles",
        imageLabel: "Infos",
        body:
          "En mai : ouvert de 11 h à 19 h les week-ends, mercredis et jours fériés. " +
          "De juin à août : de 10 h à 19 h tous les jours. En septembre : 11 h à 19 h certains jours seulement. " +
          "Les horaires peuvent changer selon la météo. Les animaux sont interdits, même en laisse. " +
          "Le centre accueille les groupes de centres de loisirs. Infos : info@base-morat.ch",
      },
    ],
    pool: [
      ceQ(
        "morat-q1",
        "Que peut-on faire à la base de loisirs ?",
        ["Faire du sport et se baigner", "Louer des vélos uniquement", "Manger au restaurant"],
        0,
        "On peut faire du sport et se _________.",
        "baigner",
      ),
      ceQ(
        "morat-q2",
        "Peut-on louer des canoës ?",
        ["Oui", "Non", "Seulement en hiver"],
        0,
        "On peut louer des _________.",
        "canoës",
        ["canoes"],
      ),
      ceQ(
        "morat-q3",
        "Où se trouve le site ?",
        ["Au bord du lac", "À la montagne", "En ville"],
        0,
        "Le site est au bord du _________.",
        "lac",
      ),
      ceQ(
        "morat-q4",
        "Les animaux sont-ils acceptés ?",
        ["Non, même en laisse", "Oui, partout", "Oui, seulement les chats"],
        0,
        "Les animaux sont _________.",
        "interdits",
        ["interdit"],
      ),
      ceQ(
        "morat-q5",
        "Quand est-il ouvert tous les jours ?",
        ["De juin à août", "En mai", "En décembre"],
        0,
        "En été, c'est ouvert tous les jours pendant ___ mois.",
        "trois",
        ["3"],
      ),
      ceQ(
        "morat-q6",
        "Quelle activité n'est PAS mentionnée ?",
        ["Le ski", "Le minigolf", "Le ping-pong"],
        0,
        "Le texte ne parle pas de _________.",
        "ski",
      ),
      ceQ(
        "morat-q7",
        "Qui peut venir en groupe ?",
        ["Les centres de loisirs", "Les entreprises seulement", "Personne"],
        0,
        "Le centre accueille les groupes de centres de _________.",
        "loisirs",
      ),
      ceQ(
        "morat-q8",
        "Que peut-on faire autour du lac ?",
        ["Marcher ou faire du vélo", "Faire du ski", "Surfer"],
        0,
        "On peut se promener à pied ou à _________.",
        "vélo",
        ["velo"],
      ),
      ceQ(
        "morat-q9",
        "La baignade est-elle surveillée ?",
        ["Oui", "Non", "Seulement le dimanche"],
        0,
        "La baignade est _________.",
        "surveillée",
        ["surveillee"],
      ),
      ceQ(
        "morat-q10",
        "À quelle heure ouvre-t-on en été ?",
        ["10 h", "11 h", "14 h"],
        0,
        "En été, ouverture à ___ h.",
        "10",
        ["dix"],
      ),
      ceQ(
        "morat-q11",
        "Les horaires peuvent changer à cause de…",
        ["La météo", "Les vacances scolaires", "Le bruit"],
        0,
        "Les horaires changent selon la _________.",
        "météo",
        ["meteo"],
      ),
      ceQ(
        "morat-q12",
        "Quel sport de plage est proposé ?",
        ["Beach-volley", "Football", "Rugby"],
        0,
        "On peut faire du beach-_________.",
        "volley",
      ),
    ],
  },
  {
    id: "reveil-parlant",
    title: "Le réveil parlant",
    sections: [
      {
        heading: "Fonctions",
        imageLabel: "Réveil",
        body:
          "Découvrez le réveil parlant ! Design moderne et simple à utiliser. " +
          "Fonctions : alarme, musique, radio et météo. Disponible en bleu, gris ou rouge. " +
          "Touchez l'appareil du doigt : il annonce l'heure et la météo du jour. Pratique pour savoir comment s'habiller !",
      },
      {
        heading: "Personnalisation",
        imageLabel: "Musique",
        body:
          "Chaque matin, le réveil vous salue par votre prénom. " +
          "Un port USB permet de programmer vos chansons ou messages préférés. " +
          "Vous pouvez vous réveiller avec votre radio favorite ou l'une des cinq sonneries proposées. " +
          "Le volume de l'alarme augmente progressivement, du plus doux au plus fort.",
      },
      {
        heading: "Promotion",
        imageLabel: "Offre",
        body:
          "Prix : 89 CHF en magasin. Présentez cette publicité en boutique et bénéficiez de 10 % de réduction. " +
          "Offre valable jusqu'au 15 novembre inclus.",
      },
    ],
    pool: [
      ceQ(
        "rev-q1",
        "Que fait ce réveil ?",
        ["Il annonce l'heure et la météo", "Il prépare le petit-déjeuner", "Il commande des vêtements"],
        0,
        "Il annonce l'heure et la _________.",
        "météo",
        ["meteo"],
      ),
      ceQ(
        "rev-q2",
        "Comment l'allumer ?",
        ["En le touchant du doigt", "En criant fort", "En le secouant"],
        0,
        "Il faut le toucher du _________.",
        "doigt",
      ),
      ceQ(
        "rev-q3",
        "Combien de sonneries sont proposées ?",
        ["Cinq", "Deux", "Dix"],
        0,
        "Il y a ___ sonneries.",
        "cinq",
        ["5"],
      ),
      ceQ(
        "rev-q4",
        "Comment évolue le volume de l'alarme ?",
        ["Il augmente progressivement", "Il reste toujours bas", "Il reste toujours fort"],
        0,
        "Le volume augmente _________.",
        "progressivement",
      ),
      ceQ(
        "rev-q5",
        "À quoi sert le port USB ?",
        ["Programmer des chansons ou messages", "Recharger le téléphone", "Imprimer des photos"],
        0,
        "Le port USB sert à programmer des chansons ou des _________.",
        "messages",
      ),
      ceQ(
        "rev-q6",
        "Quel est le prix en magasin ?",
        ["69 CHF", "89 CHF", "120 CHF"],
        1,
        "Le prix est de ___ CHF.",
        "89",
        ["quatre-vingt-neuf"],
      ),
      ceQ(
        "rev-q7",
        "Quelle réduction avec la publicité ?",
        ["10 %", "20 %", "50 %"],
        0,
        "La réduction est de ___ %.",
        "10",
        ["dix"],
      ),
      ceQ(
        "rev-q8",
        "Quelles couleurs sont disponibles ?",
        ["Bleu, gris ou rouge", "Noir et blanc", "Vert et jaune"],
        0,
        "Les couleurs sont bleu, gris ou _________.",
        "rouge",
      ),
      ceQ(
        "rev-q9",
        "Le réveil peut-il jouer de la radio ?",
        ["Oui", "Non", "Seulement la nuit"],
        0,
        "On peut écouter la _________.",
        "radio",
      ),
      ceQ(
        "rev-q10",
        "Pourquoi la météo est-elle utile le matin ?",
        ["Pour savoir comment s'habiller", "Pour appeler un ami", "Pour faire les courses"],
        0,
        "La météo aide à savoir comment s'_________.",
        "habiller",
      ),
      ceQ(
        "rev-q11",
        "Que faut-il présenter en boutique pour la promotion ?",
        ["Cette publicité", "Un passeport", "Une facture d'électricité"],
        0,
        "Il faut présenter cette _________.",
        "publicité",
        ["publicite"],
      ),
      ceQ(
        "rev-q12",
        "Quelles fonctions principales sont listées ?",
        ["Alarme, musique, radio et météo", "Cuisine et sport", "Télévision et jeux"],
        0,
        "Les fonctions sont alarme, musique, radio et _________.",
        "météo",
        ["meteo"],
      ),
    ],
  },
  {
    id: "cdi-ecole",
    title: "Le nouveau CDI est ouvert",
    sections: [
      {
        heading: "Horaires",
        imageLabel: "Horaires",
        body:
          "Le CDI (Centre de documentation et d'information) de l'école est ouvert du lundi au vendredi de 9 h 30 à 17 h. " +
          "Attention : fermé le mercredi matin. Les élèves peuvent venir pendant les heures libres, à la récréation ou après la cantine, entre 12 h 30 et 14 h.",
      },
      {
        heading: "Emprunts",
        imageLabel: "Livres",
        body:
          "Chaque élève peut emprunter jusqu'à trois livres à la fois : romans, poésie, théâtre, contes et magazines. " +
          "Pensez à rendre les ouvrages à la date indiquée sur la fiche.",
      },
      {
        heading: "Les trois salles",
        imageLabel: "Salles",
        body:
          "Grande salle : quatre tables de travail, un coin bandes dessinées, un coin lecture et des journaux de la semaine. " +
          "Salle informatique : dix ordinateurs et vingt places assises. " +
          "Petite salle de travail : seize places. Les élèves peuvent aussi utiliser les ordinateurs pour leurs recherches.",
      },
    ],
    pool: [
      ceQ(
        "cdi-q1",
        "Le CDI est-il ouvert le mercredi matin ?",
        ["Non", "Oui", "Seulement l'après-midi"],
        0,
        "Le CDI est fermé le mercredi _________.",
        "matin",
      ),
      ceQ(
        "cdi-q2",
        "Combien de livres peut-on emprunter ?",
        ["Trois", "Cinq", "Dix"],
        0,
        "On peut emprunter ___ livres.",
        "trois",
        ["3"],
      ),
      ceQ(
        "cdi-q3",
        "Quand peuvent venir les élèves après la cantine ?",
        ["Entre 12 h 30 et 14 h", "Avant 8 h", "Après 18 h"],
        0,
        "Après la cantine, de 12 h 30 à ___ h.",
        "14",
        ["quatorze"],
      ),
      ceQ(
        "cdi-q4",
        "Combien d'ordinateurs dans la salle informatique ?",
        ["Dix", "Six", "Vingt"],
        0,
        "Il y a ___ ordinateurs.",
        "dix",
        ["10"],
      ),
      ceQ(
        "cdi-q5",
        "Combien de places dans la petite salle ?",
        ["16", "10", "20"],
        0,
        "La petite salle a ___ places.",
        "16",
        ["seize"],
      ),
      ceQ(
        "cdi-q6",
        "Que trouve-t-on dans la grande salle ?",
        ["Des BD et des journaux", "Une cuisine", "Une piscine"],
        0,
        "La grande salle a un coin _________.",
        "BD",
        ["bandes dessinées", "bandes dessinees"],
      ),
      ceQ(
        "cdi-q7",
        "Que signifie CDI ?",
        ["Centre de documentation et d'information", "Club de danse internationale", "Cours de dessin individuel"],
        0,
        "CDI = Centre de documentation et d'_________.",
        "information",
      ),
      ceQ(
        "cdi-q8",
        "Peut-on emprunter des magazines ?",
        ["Oui", "Non", "Seulement les professeurs"],
        0,
        "On peut emprunter des _________.",
        "magazines",
      ),
      ceQ(
        "cdi-q9",
        "Combien de tables de travail dans la grande salle ?",
        ["Quatre", "Deux", "Huit"],
        0,
        "Il y a ___ tables de travail.",
        "quatre",
        ["4"],
      ),
      ceQ(
        "cdi-q10",
        "Combien de places assises en salle informatique ?",
        ["Vingt", "Dix", "Seize"],
        0,
        "La salle informatique a ___ places assises.",
        "vingt",
        ["20"],
      ),
      ceQ(
        "cdi-q11",
        "À quelle heure ferme le CDI en semaine ?",
        ["17 h", "12 h", "20 h"],
        0,
        "Fermeture à ___ h.",
        "17",
        ["dix-sept"],
      ),
      ceQ(
        "cdi-q12",
        "À quoi servent les ordinateurs ?",
        ["Pour faire des recherches", "Pour jouer en ligne", "Pour imprimer de l'argent"],
        0,
        "Les ordinateurs servent pour les _________.",
        "recherches",
      ),
    ],
  },
];

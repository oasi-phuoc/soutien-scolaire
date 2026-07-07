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
        "Les terrains extérieurs sont au club de _________.",
        "Nyon",
        ["nyon"],
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
  {
    id: "velo-suisse",
    title: "Près de deux Suisses sur cinq font du vélo",
    sections: [
      {
        heading: "Pourquoi le vélo ?",
        imageLabel: "Vélo",
        body:
          "Les Suisses pédalent de plus en plus. Six personnes sur dix font du vélo surtout pour faire du sport régulièrement. " +
          "La deuxième raison, c'est le plaisir. Laisser la voiture au garage permet aussi d'économiser du carburant.",
      },
      {
        heading: "En ville",
        imageLabel: "Ville",
        body:
          "Dans les villes avec beaucoup de circulation, le vélo est souvent plus rapide que la voiture ou le bus. " +
          "Faire du vélo, ce n'est pas seulement pour protéger l'environnement.",
      },
      {
        heading: "Les vélotafeurs",
        imageLabel: "Trajet",
        body:
          "La proportion de cyclistes est plus élevée dans les grandes villes. " +
          "Une personne sur cinq dans les villes de plus de 100 000 habitants va au travail à vélo. " +
          "Ces personnes s'appellent des « vélotafeurs ».",
      },
    ],
    pool: [
      ceQ("velo-q1", "Combien de Suisses sur cinq font du vélo tous les jours ?", ["Deux", "Quatre", "Cinq"], 0, "Près de ___ Suisses sur cinq font du vélo.", "deux", ["2"]),
      ceQ("velo-q2", "Pourquoi six personnes sur dix font-elles du vélo ?", ["Pour faire du sport", "Pour dormir", "Pour cuisiner"], 0, "La première raison, c'est le _________.", "sport", ["faire du sport"]),
      ceQ("velo-q3", "Que peut-on économiser avec le vélo ?", ["Du carburant", "De l'eau", "Du papier"], 0, "On économise du _________.", "carburant"),
      ceQ("velo-q4", "En ville, le vélo est souvent plus rapide que…", ["La voiture ou le bus", "L'avion", "Le train"], 0, "Le vélo est plus rapide que la voiture ou le _________.", "bus"),
      ceQ("velo-q5", "Faire du vélo sert-il seulement à protéger la planète ?", ["Non", "Oui", "On ne sait pas"], 0, "Ce n'est pas seulement pour protéger l'_________.", "environnement"),
      ceQ("velo-q6", "Où y a-t-il plus de cyclistes ?", ["Dans les grandes villes", "À la campagne", "À la mer"], 0, "Il y a plus de cyclistes dans les grandes _________.", "villes"),
      ceQ("velo-q7", "Combien de personnes sur cinq vont au travail à vélo en grande ville ?", ["Une", "Trois", "Cinq"], 0, "Une personne sur ___ va au travail à vélo.", "cinq", ["5"]),
      ceQ("velo-q8", "Comment s'appellent les personnes qui vont au travail à vélo ?", ["Des vélotafeurs", "Des conducteurs", "Des passagers"], 0, "On les appelle des _________.", "vélotafeurs", ["velotafeurs"]),
      ceQ("velo-q9", "Quelle est la deuxième raison de faire du vélo ?", ["Le plaisir", "Le bruit", "La fatigue"], 0, "La deuxième raison, c'est le _________.", "plaisir"),
      ceQ("velo-q10", "Que laissent les cyclistes au garage ?", ["La voiture", "Le vélo", "Le bus"], 0, "Ils laissent la _________ au garage.", "voiture"),
      ceQ("velo-q11", "Combien de personnes sur dix font du vélo pour le sport ?", ["Six", "Deux", "Dix"], 0, "___ personnes sur dix font du vélo pour le sport.", "six", ["6"]),
      ceQ("velo-q12", "Dans quelles villes y a-t-il plus de cyclistes ?", ["Les villes de plus de 100 000 habitants", "Les petits villages", "Les stations de ski"], 0, "C'est dans les grandes _________.", "villes"),
    ],
  },
  {
    id: "geneve-jeunes-talents",
    title: "Genève Jeunes Talents",
    sections: [
      {
        heading: "Le concours",
        imageLabel: "Art",
        body:
          "Vous êtes artiste amateur et vous rêvez de devenir professionnel ? Le prix Genève Jeunes Talents vous aide à commencer. " +
          "L'aide financière est entre 500 et 1 500 CHF. Vous pouvez louer une salle de musique ou acheter des costumes de théâtre. " +
          "Il faut avoir moins de 30 ans.",
      },
      {
        heading: "Comment participer",
        imageLabel: "Inscription",
        body:
          "Choisissez une catégorie : audiovisuel, musique ou spectacle vivant. " +
          "Remplissez le formulaire en ligne et présentez votre projet par écrit.",
      },
      {
        heading: "Calendrier",
        imageLabel: "Dates",
        body:
          "15 novembre : ouverture des inscriptions sur www.jeunes-geneve.ch. " +
          "1er février à minuit : fin des inscriptions. " +
          "Printemps : première sélection. Mai-juin : auditions des finalistes devant un jury. " +
          "Fin juin : soirée Genève Jeunes Talents à l'Hôtel de ville.",
      },
    ],
    pool: [
      ceQ("gjt-q1", "À qui s'adresse le concours ?", ["Aux artistes amateurs", "Aux professionnels", "Aux enfants de moins de 10 ans"], 0, "Le concours s'adresse aux artistes _________.", "amateurs"),
      ceQ("gjt-q2", "Quel âge maximum pour participer ?", ["Moins de 30 ans", "Plus de 30 ans", "Exactement 30 ans"], 0, "Il faut avoir moins de ___ ans.", "30", ["trente"]),
      ceQ("gjt-q3", "Combien d'aide financière maximum ?", ["1 500 CHF", "500 CHF", "3 000 CHF"], 0, "L'aide va jusqu'à 1 500 _________.", "CHF"),
      ceQ("gjt-q4", "Quelle catégorie est proposée ?", ["Musique", "Sport", "Pâtisserie"], 0, "On peut choisir la _________.", "musique"),
      ceQ("gjt-q5", "Comment s'inscrire ?", ["Sur Internet", "Par téléphone seulement", "Par courrier postal"], 0, "Il faut remplir le formulaire en _________.", "ligne", ["sur internet", "internet"]),
      ceQ("gjt-q6", "Que faut-il présenter avec le formulaire ?", ["Un projet par écrit", "Un plat cuisiné", "Un billet de train"], 0, "Il faut présenter un projet par _________.", "écrit", ["ecrit"]),
      ceQ("gjt-q7", "Quand commencent les inscriptions ?", ["Le 15 novembre", "Le 1er février", "En juin"], 0, "Les inscriptions commencent le ___ novembre.", "15", ["quinze"]),
      ceQ("gjt-q8", "Peut-on s'inscrire le 13 février ?", ["Non", "Oui", "Seulement le matin"], 0, "Après le 1er février, les inscriptions sont _________.", "fermées", ["fermees", "closes"]),
      ceQ("gjt-q9", "Où a lieu la soirée des lauréats ?", ["À l'Hôtel de ville", "Au zoo", "À la piscine"], 0, "La soirée a lieu à l'_________ de ville.", "Hôtel", ["hotel", "Hôtel de ville"]),
      ceQ("gjt-q10", "Quand ont lieu les auditions des finalistes ?", ["Mai-juin", "Novembre", "Septembre"], 0, "Les auditions ont lieu en _________.", "mai-juin", ["mai juin"]),
      ceQ("gjt-q11", "Avec l'aide, on peut acheter…", ["Des costumes de théâtre", "Une voiture", "Un appartement"], 0, "On peut acheter des costumes de _________.", "théâtre", ["theatre"]),
      ceQ("gjt-q12", "Quelle est l'aide minimum ?", ["500 CHF", "1 500 CHF", "100 CHF"], 0, "L'aide commence à ___ CHF.", "500", ["cinq cents"]),
    ],
  },
  {
    id: "loisirs-jeunes",
    title: "Les loisirs préférés des jeunes en Suisse",
    sections: [
      {
        heading: "Sorties et écrans",
        imageLabel: "Cinéma",
        body:
          "Les jeunes aiment sortir ensemble, surtout au cinéma. De 11 à 14 ans, ils préfèrent les films de science-fiction, policiers ou d'aventure. " +
          "De 15 à 19 ans, ils préfèrent les films d'amour ou à suspense. Ils aiment aussi les fêtes pour danser, jouer de la musique ou jouer aux jeux vidéo.",
      },
      {
        heading: "Internet et lecture",
        imageLabel: "Internet",
        body:
          "Ils s'intéressent à la technologie : beaucoup ont un blog et utilisent les réseaux sociaux. " +
          "Pour s'informer, ils préfèrent Internet à la bibliothèque. " +
          "Ils lisent surtout des magazines spécialisés, parfois des bandes dessinées, mais rarement des romans.",
      },
      {
        heading: "Musique et voyages",
        imageLabel: "Musique",
        body:
          "La musique est très importante : écouter de la musique ou regarder des vidéos les aide à penser à autre chose que l'école. " +
          "Ils adorent aussi voyager avec des amis ou la famille et rencontrer de nouvelles personnes.",
      },
    ],
    pool: [
      ceQ("lois-q1", "Quels films préfèrent les 15-19 ans ?", ["Films d'amour ou à suspense", "Films de science-fiction", "Films historiques"], 0, "Les 15-19 ans préfèrent les films d'_________.", "amour"),
      ceQ("lois-q2", "Où vont les jeunes pour danser ?", ["Aux fêtes", "À la bibliothèque", "Au musée"], 0, "Ils dansent aux _________.", "fêtes", ["fetes"]),
      ceQ("lois-q3", "Les jeunes utilisent-ils Internet pour s'informer ?", ["Oui", "Non", "Jamais"], 0, "Ils préfèrent Internet à la _________.", "bibliothèque"),
      ceQ("lois-q4", "Que lisent-ils le plus ?", ["Des magazines", "Des romans", "Des journaux anciens"], 0, "Ils lisent surtout des _________.", "magazines"),
      ceQ("lois-q5", "Pourquoi écoutent-ils de la musique ?", ["Pour penser à autre chose que l'école", "Pour faire les devoirs", "Pour dormir"], 0, "La musique aide à penser à autre chose que l'_________.", "école", ["ecole"]),
      ceQ("lois-q6", "Pourquoi aiment-ils voyager ?", ["Pour rencontrer des gens", "Pour éviter l'école", "Pour travailler"], 0, "Les voyages permettent de rencontrer des _________.", "gens"),
      ceQ("lois-q7", "Quels films préfèrent les 11-14 ans ?", ["Science-fiction et aventure", "Romans filmés", "Documentaires"], 0, "Les plus jeunes aiment la science-_________.", "fiction"),
      ceQ("lois-q8", "Que font-ils aux fêtes ?", ["Danser et jouer", "Dormir", "Étudier"], 0, "Aux fêtes, ils dansent et _________.", "jouent", ["jouer"]),
      ceQ("lois-q9", "Lisent-ils souvent des romans ?", ["Non, rarement", "Oui, toujours", "Oui, chaque jour"], 0, "Ils lisent rarement des _________.", "romans"),
      ceQ("lois-q10", "Que regardent-ils en plus de la musique ?", ["Des vidéos", "La télévision d'information", "Des documentaires scientifiques"], 0, "Ils regardent aussi des _________.", "vidéos", ["videos"]),
      ceQ("lois-q11", "Ont-ils des blogs ?", ["Oui, beaucoup", "Non, jamais", "Seulement les adultes"], 0, "Beaucoup ont un _________.", "blog"),
      ceQ("lois-q12", "Avec qui voyagent-ils ?", ["Amis ou famille", "Seuls toujours", "Seulement des collègues"], 0, "Ils voyagent avec des amis ou la _________.", "famille"),
    ],
  },
  {
    id: "campagne-ville",
    title: "Campagne ou ville ?",
    sections: [
      {
        heading: "Pour la campagne",
        imageLabel: "Nature",
        body:
          "Oksana aime la campagne : c'est tranquille, il y a des arbres et des fleurs, moins de pollution et l'air est pur. " +
          "Fatou ne supporte pas la foule en ville : il y a trop de monde.",
      },
      {
        heading: "Pour la ville",
        imageLabel: "Ville",
        body:
          "Carmen préfère la ville : plus de choses à faire, moins de temps pour aller à l'école ou aux magasins. " +
          "Hassan aime tout près de la maison : boulangerie, supermarché, école, sport. " +
          "Matteo choisit la ville pour le cinéma, le théâtre et les concerts.",
      },
      {
        heading: "Les deux",
        imageLabel: "Avis",
        body:
          "Hassan trouve aussi la campagne belle et tranquille. Matteo habite à la campagne et trouve qu'il n'y a rien à faire, " +
          "mais il reconnaît qu'il y a moins de pollution et moins de stress.",
      },
    ],
    pool: [
      ceQ("cv-q1", "Pourquoi Oksana préfère-t-elle la campagne ?", ["Moins de pollution", "Plus de stress", "Plus de monde"], 0, "Elle aime l'air pur et moins de _________.", "pollution"),
      ceQ("cv-q2", "Carmen et Hassan préfèrent-ils la ville ?", ["Oui", "Non", "On ne sait pas"], 0, "Ils préfèrent la _________.", "ville"),
      ceQ("cv-q3", "Qui dit que la campagne est tranquille ?", ["Oksana et Fatou", "Matteo seulement", "Personne"], 0, "La campagne est _________.", "tranquille"),
      ceQ("cv-q4", "Que déteste Fatou en ville ?", ["La foule", "La pollution", "La circulation"], 0, "Elle ne supporte pas la _________.", "foule"),
      ceQ("cv-q5", "Où Matteo aimerait-il habiter ?", ["Dans une grande ville", "À la campagne", "Dans un village"], 0, "Il aime le cinéma et les concerts en _________.", "ville"),
      ceQ("cv-q6", "Qu'est-ce qu'il y a près de chez Hassan en ville ?", ["Boulangerie et supermarché", "Une forêt", "Une plage"], 0, "Tout est près : boulangerie, supermarché, _________.", "école", ["ecole"]),
      ceQ("cv-q7", "Pourquoi Carmen préfère la ville ?", ["Moins de temps pour l'école", "Plus de pollution", "Moins d'activités"], 0, "On met moins de temps pour aller à l'_________.", "école", ["ecole"]),
      ceQ("cv-q8", "Matteo habite où actuellement ?", ["À la campagne", "En ville", "À l'étranger"], 0, "Il habite à la _________.", "campagne"),
      ceQ("cv-q9", "Qu'avantage reconnaît Matteo à la campagne ?", ["Moins de stress", "Plus de concerts", "Plus de magasins"], 0, "Il y a moins de _________ à la campagne.", "stress"),
      ceQ("cv-q10", "Quelles activités Matteo cherche-t-il en ville ?", ["Cinéma et théâtre", "Ski et randonnée", "Pêche"], 0, "Il aime le cinéma, le théâtre et les _________.", "concerts"),
      ceQ("cv-q11", "Qu'est-ce qu'Oksana trouve en campagne ?", ["Des arbres et des fleurs", "Beaucoup de magasins", "Des embouteillages"], 0, "Il y a des arbres et des _________.", "fleurs"),
      ceQ("cv-q12", "Hassan trouve-t-il aussi la campagne agréable ?", ["Oui, belle et tranquille", "Non, jamais", "Il n'en parle pas"], 0, "Hassan trouve la campagne belle et _________.", "tranquille"),
    ],
  },
  {
    id: "carnaval-suisse",
    title: "Le temps du carnaval",
    sections: [
      {
        heading: "Les carnavals",
        imageLabel: "Fête",
        body:
          "Beaucoup de villes organisent un carnaval en février. En Suisse, on connaît bien le carnaval de Bâle, celui de Lucerne ou celui de Montreux. " +
          "Pendant le carnaval, les gens se déguisent, chantent et dansent. C'est une période de fête.",
      },
      {
        heading: "Traditions",
        imageLabel: "Déguisements",
        body:
          "Les carnavals existent depuis très longtemps. Avant, on inversait tout : les jeunes se déguisaient en vieux, les riches en pauvres. " +
          "Aujourd'hui, les déguisements sont variés : clowns, animaux, super-héros. À Bâle, beaucoup de gens portent des masques.",
      },
      {
        heading: "Mardi gras",
        imageLabel: "Crêpes",
        body:
          "Le mardi gras est le jour le plus important : on mange des crêpes avant le carême, une période où on mangeait moins. " +
          "Le carnaval permet à tout le monde de faire la fête et d'oublier les problèmes.",
      },
    ],
    pool: [
      ceQ("car-q1", "Y a-t-il des carnavals dans le monde ?", ["Oui, dans beaucoup de villes", "Non, seulement en Suisse", "Non, nulle part"], 0, "Beaucoup de villes organisent un _________.", "carnaval"),
      ceQ("car-q2", "Que font les gens pendant le carnaval ?", ["Se déguiser et danser", "Dormir", "Travailler"], 0, "Ils se déguisent, chantent et _________.", "dansent"),
      ceQ("car-q3", "Les carnavals sont-ils récents ?", ["Non, ils existent depuis longtemps", "Oui, depuis un an", "Oui, depuis hier"], 0, "Les carnavals existent depuis très _________.", "longtemps"),
      ceQ("car-q4", "Comment s'habillaient les enfants avant ?", ["En adultes", "En clowns seulement", "En animaux seulement"], 0, "Les jeunes se déguisaient en _________.", "vieux", ["en adultes"]),
      ceQ("car-q5", "Que portent beaucoup de gens à Bâle ?", ["Des masques", "Des uniformes", "Des maillots de bain"], 0, "À Bâle, on porte des _________.", "masques"),
      ceQ("car-q6", "Que mange-t-on le mardi gras ?", ["Des crêpes", "De la fondue", "Du chocolat"], 0, "Le mardi gras, on mange des _________.", "crêpes", ["crepes"]),
      ceQ("car-q7", "Quel jour est le plus important ?", ["Le mardi gras", "Le lundi", "Le vendredi"], 0, "Le jour le plus important est le mardi _________.", "gras"),
      ceQ("car-q8", "Le carnaval aide à…", ["Oublier les problèmes", "Étudier plus", "Travailler plus"], 0, "On oublie les _________.", "problèmes", ["problemes"]),
      ceQ("car-q9", "Quel type de carnaval suisse est cité ?", ["Un carnaval avec masques", "Un carnaval de plage", "Un carnaval de neige"], 0, "À Bâle, beaucoup de gens portent des _________.", "masques"),
      ceQ("car-q10", "Quels déguisements trouve-t-on aujourd'hui ?", ["Clowns et animaux", "Seulement des robes", "Seulement des uniformes"], 0, "On trouve des clowns, des animaux, des super-_________.", "héros", ["heros"]),
      ceQ("car-q11", "Le carnaval est une période de…", ["Fête", "Travail", "Silence"], 0, "C'est une période de _________.", "fête", ["fete"]),
      ceQ("car-q12", "Que suit le mardi gras ?", ["Le carême", "Les vacances d'été", "Noël"], 0, "Après le mardi gras vient le _________.", "carême", ["careme"]),
    ],
  },
];

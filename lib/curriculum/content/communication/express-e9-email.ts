import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E9 — Vie quotidienne A2 (achats, déplacements, logement,
 * démarches administratives, actualité).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10) par leçon.
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10) par leçon.
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E9.1 — Faire des achats
   ════════════════════════════════════════════════════════════════════════════ */

const E9_1_CE_EMAIL_TEXT = `De : Magasin ÉlectroHome
Objet : Votre commande n° 4582

Bonjour,

Nous vous remercions pour votre commande n° 4582 du 3 février.
Vous avez acheté un aspirateur pendant les soldes, au prix de 149 francs au lieu de 220 francs.
La livraison à domicile est gratuite à partir de 100 francs d'achat.
Le livreur passera chez vous le jeudi 8 février, entre 14 h et 17 h.
Si l'appareil ne vous convient pas, vous pouvez le rapporter dans un délai de trente jours, avec le ticket de caisse.
L'aspirateur est garanti deux ans.
Pour toute question, notre service après-vente répond au 021 555 88 22, du lundi au vendredi.

Avec nos meilleures salutations,
Le service clients ÉlectroHome`;

const E9_1_CE_EMAIL_POOL = buildExpressPool("e9-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel numéro figure sur la commande ?",
    text: ["Le numéro 4582", "Le numéro 4285", "Le numéro 5482"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous vous remercions pour votre commande n° _________ du 3 février.",
    fill: "4582",
    vfQ: "La commande porte le numéro 4582.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qu'est-ce que le client a acheté ?",
    text: ["Un aspirateur", "Un lave-linge", "Un téléphone"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez acheté un _________ pendant les soldes.",
    fill: "aspirateur",
    vfQ: "Le client a acheté un lave-linge.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien le client a-t-il payé l'aspirateur ?",
    text: ["149 francs", "220 francs", "100 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au prix de _________ francs au lieu de 220 francs.",
    fill: "149",
    fillA: ["cent quarante-neuf"],
    vfQ: "Pendant les soldes, l'aspirateur coûte 149 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À partir de quel montant la livraison est-elle gratuite ?",
    text: ["100 francs d'achat", "50 francs d'achat", "200 francs d'achat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La livraison à domicile est gratuite à partir de _________ francs d'achat.",
    fill: "100",
    fillA: ["cent"],
    vfQ: "La livraison est gratuite à partir de 200 francs d'achat.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel jour le livreur passe-t-il ?",
    text: ["Le jeudi 8 février", "Le mardi 6 février", "Le samedi 10 février"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le livreur passera chez vous le jeudi 8 _________.",
    fill: "février",
    fillA: ["fevrier"],
    vfQ: "Le livreur passe le jeudi 8 février.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quelle heure le livreur passe-t-il ?",
    text: ["Entre 14 h et 17 h", "Entre 8 h et 11 h", "Entre 18 h et 20 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entre 14 h et _________ h.",
    fill: "17",
    fillA: ["dix-sept"],
    vfQ: "Le livreur passe le matin.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Dans quel délai peut-on rapporter l'appareil ?",
    text: ["Trente jours", "Dix jours", "Une semaine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez le rapporter dans un délai de _________ jours.",
    fill: "trente",
    fillA: ["30"],
    vfQ: "On peut rapporter l'appareil pendant trente jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Que faut-il présenter pour rapporter l'appareil ?",
    text: ["Le ticket de caisse", "Le passeport", "La carte bancaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez le rapporter avec le _________ de caisse.",
    fill: "ticket",
    vfQ: "Pour rapporter l'appareil, il faut le ticket de caisse.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Combien de temps dure la garantie ?",
    text: ["Deux ans", "Un an", "Cinq ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'aspirateur est garanti _________ ans.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "La garantie dure cinq ans.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quand le service après-vente répond-il ?",
    text: ["Du lundi au vendredi", "Tous les jours", "Seulement le samedi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Notre service après-vente répond au 021 555 88 22, du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service après-vente répond le dimanche.",
    vfC: 1,
  }),
]);

export const E9_1_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e9-1-ce-email",
  readingText: E9_1_CE_EMAIL_TEXT,
  questionPool: E9_1_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E9_1_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e9-1-pee-1",
    title: "Commande en retard",
    situation: "Vous avez commandé un manteau il y a deux semaines, mais il n'est pas arrivé.",
    sourceMessage: {
      from: "Boutique ModaStyle",
      subject: "Votre commande n° 7841",
      body: "Bonjour,\nVotre commande n° 7841 a pris du retard à cause d'un problème de stock.\nNous sommes désolés pour ce contretemps.\nLe service clients",
    },
    instruction: "Répondez à la boutique : dites que vous attendez depuis deux semaines, demandez une date de livraison précise et demandez un geste commercial.",
    points: ["Votre attente depuis deux semaines", "Une date de livraison précise", "Un geste commercial"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-2",
    title: "Échanger un article",
    situation: "Vous avez acheté des chaussures en ligne, mais elles sont trop petites.",
    sourceMessage: {
      from: "Chaussures & Co",
      subject: "Merci pour votre achat",
      body: "Bonjour,\nMerci pour votre achat sur notre site.\nVotre avis compte : les chaussures vous plaisent-elles ?\nL'équipe Chaussures & Co",
    },
    instruction: "Répondez au magasin : expliquez que les chaussures sont trop petites, demandez un échange dans une autre taille et demandez comment renvoyer le colis.",
    points: ["Le problème de taille", "La demande d'échange", "Une question sur le renvoi du colis"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-3",
    title: "Signaler une panne",
    situation: "Votre aspirateur, encore sous garantie, est tombé en panne.",
    sourceMessage: {
      from: "Service après-vente ÉlectroHome",
      subject: "Votre demande de réparation",
      body: "Bonjour,\nNous avons bien reçu votre demande.\nPouvez-vous décrire le problème et nous donner la date d'achat de l'appareil ?\nLe service après-vente",
    },
    instruction: "Répondez au service après-vente : décrivez la panne, donnez la date d'achat et rappelez que l'appareil est sous garantie.",
    points: ["La description de la panne", "La date d'achat", "La garantie"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-4",
    title: "Demander un remboursement",
    situation: "Vous avez reçu une lampe différente de la photo du site.",
    sourceMessage: {
      from: "Déco en Ligne",
      subject: "Votre colis est arrivé",
      body: "Bonjour,\nVotre colis a été livré hier.\nNous espérons que la lampe vous plaît !\nDéco en Ligne",
    },
    instruction: "Répondez au site : expliquez que la lampe ne correspond pas à la photo, demandez un remboursement et demandez comment renvoyer l'article.",
    points: ["Le problème (article différent)", "La demande de remboursement", "Une question sur le renvoi"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-5",
    title: "Conseiller une amie",
    situation: "Une amie veut acheter un canapé et vous demande conseil.",
    sourceMessage: {
      from: "Nadia",
      subject: "Ton canapé",
      body: "Salut !\nJ'ai vu ton nouveau canapé, il est super !\nTu l'as acheté où ? Il a coûté combien ? C'était les soldes ?\nNadia",
    },
    instruction: "Répondez à Nadia : dites où vous avez acheté le canapé, donnez le prix payé pendant les soldes et donnez-lui un conseil pour son achat.",
    points: ["Le magasin", "Le prix pendant les soldes", "Un conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-6",
    title: "Livraison manquée",
    situation: "Le livreur est passé pendant votre absence.",
    sourceMessage: {
      from: "TransExpress",
      subject: "Livraison impossible",
      body: "Bonjour,\nNotre livreur est passé aujourd'hui à 10 h, mais personne n'a ouvert.\nMerci de nous proposer une nouvelle date de livraison.\nTransExpress",
    },
    instruction: "Répondez au transporteur : expliquez pourquoi vous étiez absent(e), proposez deux nouvelles dates et donnez votre numéro de téléphone.",
    points: ["La raison de votre absence", "Deux nouvelles dates", "Votre numéro de téléphone"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-7",
    title: "Question sur les soldes",
    situation: "Votre magasin préféré annonce les soldes d'hiver.",
    sourceMessage: {
      from: "Magasin Le Bazar",
      subject: "Les soldes commencent !",
      body: "Bonjour,\nLes soldes d'hiver commencent lundi : jusqu'à 50 % de réduction !\nLe magasin est ouvert du lundi au samedi, de 9 h à 19 h.\nÀ bientôt,\nLe Bazar",
    },
    instruction: "Répondez au magasin : demandez si la machine à café que vous voulez est en soldes, demandez le nouveau prix et demandez si on peut la réserver.",
    points: ["Une question sur la machine à café", "Le nouveau prix", "Une question sur la réservation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-8",
    title: "Vendre son vélo",
    situation: "Vous vendez votre vélo sur un site de petites annonces. Un acheteur vous écrit.",
    sourceMessage: {
      from: "Julien",
      subject: "Votre annonce : vélo",
      body: "Bonjour,\nVotre vélo m'intéresse. Il est en bon état ?\nLe prix est-il négociable ? Quand est-ce que je peux le voir ?\nJulien",
    },
    instruction: "Répondez à Julien : décrivez l'état du vélo, dites si le prix est négociable et proposez un rendez-vous pour le voir.",
    points: ["L'état du vélo", "Le prix", "Un rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-9",
    title: "Refuser une offre",
    situation: "Le magasin vous propose une extension de garantie payante.",
    sourceMessage: {
      from: "Magasin ÉlectroHome",
      subject: "Extension de garantie",
      body: "Bonjour,\nPour 89 francs, vous pouvez prolonger la garantie de votre aspirateur de deux ans.\nÊtes-vous intéressé(e) ?\nLe service clients",
    },
    instruction: "Répondez au magasin : refusez poliment l'offre, expliquez pourquoi et posez une question sur la garantie actuelle.",
    points: ["Le refus poli", "La raison", "Une question sur la garantie actuelle"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-10",
    title: "Raconter un achat",
    situation: "Une amie veut savoir si vous êtes content(e) de votre nouveau lave-linge.",
    sourceMessage: {
      from: "Sara",
      subject: "Ton lave-linge",
      body: "Coucou,\nAlors, ce nouveau lave-linge ? Il marche bien ?\nTu l'as payé cher ? Moi aussi, je dois changer le mien.\nSara",
    },
    instruction: "Répondez à Sara : racontez votre achat, donnez le prix et dites si vous êtes content(e) de la machine.",
    points: ["L'histoire de l'achat", "Le prix", "Votre avis sur la machine"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   E9.2 — Se déplacer
   ════════════════════════════════════════════════════════════════════════════ */

const E9_2_CE_EMAIL_TEXT = `De : Transports de la Ville (TVL)
Objet : Travaux sur la ligne 12

Bonjour,

À partir du lundi 4 mai, des travaux commencent sur la ligne 12 du tram.
Les travaux dureront trois semaines, jusqu'au vendredi 22 mai.
Pendant cette période, les trams ne circuleront pas entre la gare et la place du Marché.
Une navette gratuite remplacera le tram toutes les dix minutes, de 6 h à 22 h.
L'arrêt de la navette se trouve devant la poste, à la sortie nord de la gare.
Attention : le matin, comptez quinze minutes de trajet en plus.
Les abonnements restent valables dans la navette et sur toutes les autres lignes.
Pour plus d'informations, consultez notre application ou appelez le 021 555 66 77.

Avec nos meilleures salutations,
Les Transports de la Ville`;

const E9_2_CE_EMAIL_POOL = buildExpressPool("e9-2-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Sur quelle ligne y a-t-il des travaux ?",
    text: ["Sur la ligne 12", "Sur la ligne 2", "Sur la ligne 21"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Des travaux commencent sur la ligne _________ du tram.",
    fill: "12",
    fillA: ["douze"],
    vfQ: "Les travaux concernent la ligne 12 du tram.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quand commencent les travaux ?",
    text: ["Le lundi 4 mai", "Le vendredi 22 mai", "Le lundi 4 mars"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À partir du lundi 4 _________, des travaux commencent.",
    fill: "mai",
    vfQ: "Les travaux commencent le lundi 4 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien de temps durent les travaux ?",
    text: ["Trois semaines", "Trois jours", "Trois mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les travaux dureront trois _________, jusqu'au vendredi 22 mai.",
    fill: "semaines",
    vfQ: "Les travaux durent trois mois.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Qu'est-ce qui remplace le tram ?",
    text: ["Une navette gratuite", "Un train spécial", "Des taxis"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Une _________ gratuite remplacera le tram.",
    fill: "navette",
    vfQ: "La navette est payante.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "La navette passe tous les combien ?",
    text: ["Toutes les dix minutes", "Toutes les trente minutes", "Une fois par heure"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La navette remplacera le tram toutes les _________ minutes.",
    fill: "dix",
    fillA: ["10"],
    vfQ: "La navette passe toutes les dix minutes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où se trouve l'arrêt de la navette ?",
    text: ["Devant la poste", "Devant la mairie", "Sur la place du Marché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'arrêt de la navette se trouve devant la _________.",
    fill: "poste",
    vfQ: "L'arrêt de la navette est devant la poste.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Combien de temps de trajet faut-il compter en plus le matin ?",
    text: ["Quinze minutes", "Cinq minutes", "Une heure"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le matin, comptez _________ minutes de trajet en plus.",
    fill: "quinze",
    fillA: ["15"],
    vfQ: "Le matin, le trajet est plus court que d'habitude.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Les abonnements sont-ils valables dans la navette ?",
    text: [
      "Oui, ils restent valables",
      "Non, il faut un nouveau billet",
      "Seulement le week-end",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les abonnements restent _________ dans la navette.",
    fill: "valables",
    vfQ: "Il faut acheter un nouveau billet pour la navette.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Jusqu'à quelle heure circule la navette ?",
    text: ["Jusqu'à 22 h", "Jusqu'à 20 h", "Jusqu'à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La navette circule de 6 h à _________ h.",
    fill: "22",
    fillA: ["vingt-deux"],
    vfQ: "La navette circule de 6 h à 22 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Entre quels arrêts le tram ne circule-t-il pas ?",
    text: [
      "Entre la gare et la place du Marché",
      "Entre la gare et l'hôpital",
      "Entre la poste et le stade",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les trams ne _________ pas entre la gare et la place du Marché.",
    fill: "circuleront",
    vfQ: "Le tram circule normalement entre la gare et la place du Marché.",
    vfC: 1,
  }),
]);

export const E9_2_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e9-2-ce-email",
  readingText: E9_2_CE_EMAIL_TEXT,
  questionPool: E9_2_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E9_2_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e9-2-pee-1",
    title: "S'excuser pour un retard",
    situation: "Vous êtes arrivé(e) en retard au travail à cause d'un train supprimé.",
    sourceMessage: {
      from: "M. Blanc",
      subject: "Votre retard de ce matin",
      body: "Bonjour,\nVous êtes arrivé(e) à 10 h ce matin, avec une heure de retard.\nPouvez-vous m'expliquer ce qui s'est passé ?\nM. Blanc",
    },
    instruction: "Répondez à M. Blanc : excusez-vous, expliquez le problème de train et dites comment vous allez éviter ce retard à l'avenir.",
    points: ["L'excuse", "Le problème de train", "Votre solution pour l'avenir"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-2",
    title: "Question sur un abonnement",
    situation: "La compagnie de transports vous propose un abonnement annuel.",
    sourceMessage: {
      from: "Transports de la Ville",
      subject: "Offre d'abonnement annuel",
      body: "Bonjour,\nL'abonnement annuel coûte 750 francs au lieu de 900 francs jusqu'à la fin du mois.\nÊtes-vous intéressé(e) ?\nLe service clients",
    },
    instruction: "Répondez à la compagnie : demandez quelles zones sont comprises, s'il existe une réduction pour les étudiants et si on peut payer en plusieurs fois.",
    points: ["Une question sur les zones", "La réduction pour les étudiants", "Le paiement en plusieurs fois"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-3",
    title: "Confirmer un covoiturage",
    situation: "Vous avez réservé un covoiturage pour aller à Berne samedi.",
    sourceMessage: {
      from: "Karim",
      subject: "Covoiturage de samedi",
      body: "Bonjour,\nJe confirme le trajet de samedi pour Berne. Départ à 8 h, place de la Gare.\nVous avez beaucoup de bagages ?\nKarim",
    },
    instruction: "Répondez à Karim : confirmez votre présence, décrivez vos bagages et posez une question sur le lieu de rendez-vous exact.",
    points: ["La confirmation", "Vos bagages", "Une question sur le lieu de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-4",
    title: "Objet perdu dans le bus",
    situation: "Vous avez oublié votre sac dans le bus. Le service des objets trouvés vous répond.",
    sourceMessage: {
      from: "Objets trouvés TVL",
      subject: "Votre demande",
      body: "Bonjour,\nNous avons bien reçu votre message.\nPouvez-vous décrire l'objet perdu et préciser la ligne, le jour et l'heure du trajet ?\nLe service des objets trouvés",
    },
    instruction: "Répondez au service : décrivez votre sac et son contenu, précisez la ligne de bus et donnez le jour et l'heure du trajet.",
    points: ["La description du sac", "La ligne de bus", "Le jour et l'heure du trajet"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-5",
    title: "Expliquer un itinéraire",
    situation: "Un ami doit aller à l'aéroport et vous demande le meilleur trajet.",
    sourceMessage: {
      from: "Diego",
      subject: "Aéroport",
      body: "Salut,\nJe prends l'avion vendredi à 14 h. C'est quoi le plus simple pour aller à l'aéroport ?\nLe train ? Le bus ? Merci !\nDiego",
    },
    instruction: "Répondez à Diego : conseillez le meilleur moyen de transport, expliquez le trajet et donnez la durée et le prix.",
    points: ["Le moyen de transport conseillé", "Le trajet", "La durée et le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-6",
    title: "Demander un remboursement",
    situation: "Votre train a été supprimé et vous avez raté un rendez-vous important.",
    sourceMessage: {
      from: "Compagnie ferroviaire",
      subject: "Votre réclamation",
      body: "Bonjour,\nNous avons bien reçu votre réclamation.\nMerci de nous préciser la date, le numéro du train et de joindre votre billet.\nLe service clients",
    },
    instruction: "Répondez à la compagnie : donnez la date et le numéro du train, expliquez les conséquences pour vous et demandez le remboursement du billet.",
    points: ["La date et le numéro du train", "Les conséquences", "La demande de remboursement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-7",
    title: "Proposer un covoiturage",
    situation: "Une collègue se plaint des embouteillages pour venir au travail.",
    sourceMessage: {
      from: "Élodie",
      subject: "Encore les bouchons !",
      body: "Bonjour,\nCe matin, j'ai passé une heure dans les embouteillages !\nToi aussi, tu viens en voiture ? Tu pars à quelle heure ?\nÉlodie",
    },
    instruction: "Répondez à Élodie : proposez-lui un covoiturage, expliquez vos horaires et proposez de partager les frais d'essence.",
    points: ["La proposition de covoiturage", "Vos horaires", "Le partage des frais"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-8",
    title: "Contester une amende",
    situation: "Vous avez oublié votre abonnement à la maison et vous avez reçu une amende.",
    sourceMessage: {
      from: "Transports de la Ville",
      subject: "Amende n° 5520",
      body: "Bonjour,\nLors du contrôle du 3 avril, vous n'aviez pas de titre de transport valable.\nVous devez payer une amende de 90 francs dans les trente jours.\nLe service clients",
    },
    instruction: "Répondez à la compagnie : expliquez que vous avez un abonnement annuel, dites que vous l'avez oublié ce jour-là et demandez une réduction de l'amende.",
    points: ["Votre abonnement annuel", "L'oubli du 3 avril", "La demande de réduction"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-9",
    title: "Vélos en libre-service",
    situation: "La ville lance un nouveau service de vélos en libre-service.",
    sourceMessage: {
      from: "Ville de Renens",
      subject: "Nouveaux vélos en libre-service",
      body: "Bonjour,\nDès le 1er juin, 200 vélos en libre-service seront disponibles dans la ville.\nLes cent premiers inscrits recevront un mois gratuit.\nLa Ville",
    },
    instruction: "Répondez à la ville : demandez comment s'inscrire, demandez le prix de l'abonnement et demandez où se trouve la station la plus proche de chez vous.",
    points: ["Une question sur l'inscription", "Le prix de l'abonnement", "La station la plus proche"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-10",
    title: "Organiser une visite",
    situation: "Une amie vient vous voir en train samedi.",
    sourceMessage: {
      from: "Paula",
      subject: "À samedi !",
      body: "Coucou,\nJ'arrive samedi ! Je peux prendre le train de 10 h ou celui de 14 h.\nLequel est le mieux ? Tu viens me chercher à la gare ?\nPaula",
    },
    instruction: "Répondez à Paula : choisissez un train, expliquez pourquoi et dites où et quand vous l'attendez à la gare.",
    points: ["Le train choisi", "La raison", "Le lieu de rendez-vous à la gare"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   E9.3 — Chercher un logement
   ════════════════════════════════════════════════════════════════════════════ */

const E9_3_CE_EMAIL_TEXT = `De : Régie Bellevue
Objet : Visite de l'appartement — rue des Lilas 15

Bonjour,

Nous avons bien reçu votre demande pour l'appartement de trois pièces à la rue des Lilas 15.
Le loyer est de 1 650 francs par mois, charges comprises.
L'appartement se trouve au cinquième étage et l'immeuble a un ascenseur.
Il est lumineux, avec un balcon exposé sud, et il est libre à partir du 1er juillet.
Une visite est organisée le mercredi 12 juin à 17 h 30, devant l'entrée de l'immeuble.
Si l'appartement vous intéresse, vous devez remplir un dossier de location avec une copie de votre pièce d'identité et vos trois dernières fiches de salaire.
La caution est de deux mois de loyer.
Merci de confirmer votre présence avant lundi.

Avec nos meilleures salutations,
Régie Bellevue`;

const E9_3_CE_EMAIL_POOL = buildExpressPool("e9-3-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces a l'appartement ?",
    text: ["Trois pièces", "Deux pièces", "Quatre pièces"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre demande pour l'appartement de trois _________ à la rue des Lilas 15.",
    fill: "pièces",
    fillA: ["pieces"],
    vfQ: "L'appartement a trois pièces.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le loyer de l'appartement ?",
    text: [
      "1 650 francs, charges comprises",
      "1 650 francs, sans les charges",
      "1 850 francs, charges comprises",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de 1 650 francs par mois, charges _________.",
    fill: "comprises",
    vfQ: "Les charges sont comprises dans le loyer.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quel étage se trouve l'appartement ?",
    text: ["Au cinquième étage", "Au premier étage", "Au troisième étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'appartement se trouve au _________ étage.",
    fill: "cinquième",
    fillA: ["cinquieme", "5e", "5ème", "5"],
    vfQ: "L'appartement est au rez-de-chaussée.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Y a-t-il un ascenseur dans l'immeuble ?",
    text: [
      "Oui, l'immeuble a un ascenseur",
      "Non, il n'y a pas d'ascenseur",
      "Oui, mais il est en panne",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'immeuble a un _________.",
    fill: "ascenseur",
    vfQ: "Il n'y a pas d'ascenseur dans l'immeuble.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Quand l'appartement est-il libre ?",
    text: [
      "À partir du 1er juillet",
      "À partir du 12 juin",
      "À partir du 1er juin",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est libre à partir du 1er _________.",
    fill: "juillet",
    vfQ: "L'appartement est libre à partir du 1er juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quand a lieu la visite ?",
    text: [
      "Le mercredi 12 juin à 17 h 30",
      "Le mercredi 12 juin à 7 h 30",
      "Le lundi 10 juin à 17 h 30",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Une visite est organisée le mercredi 12 juin à 17 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "La visite a lieu le matin.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Où a lieu le rendez-vous pour la visite ?",
    text: [
      "Devant l'entrée de l'immeuble",
      "Au bureau de la régie",
      "Sur le balcon de l'appartement",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le rendez-vous est devant l'_________ de l'immeuble.",
    fill: "entrée",
    fillA: ["entree"],
    vfQ: "Le rendez-vous est devant l'entrée de l'immeuble.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Quels documents faut-il pour le dossier de location ?",
    text: [
      "Une pièce d'identité et trois fiches de salaire",
      "Un passeport et une photo",
      "Seulement une lettre de motivation",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vos trois dernières fiches de _________.",
    fill: "salaire",
    vfQ: "Il faut trois fiches de salaire pour le dossier.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Quel est le montant de la caution ?",
    text: ["Deux mois de loyer", "Un mois de loyer", "Trois mois de loyer"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La caution est de _________ mois de loyer.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "La caution est d'un mois de loyer.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quand faut-il confirmer sa présence ?",
    text: ["Avant lundi", "Avant vendredi", "Après la visite"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de confirmer votre présence avant _________.",
    fill: "lundi",
    vfQ: "Il faut confirmer sa présence avant lundi.",
    vfC: 0,
  }),
]);

export const E9_3_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e9-3-ce-email",
  readingText: E9_3_CE_EMAIL_TEXT,
  questionPool: E9_3_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E9_3_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e9-3-pee-1",
    title: "Répondre à une annonce",
    situation: "Vous avez vu une annonce pour un appartement de trois pièces.",
    sourceMessage: {
      from: "Régie Bellevue",
      subject: "Appartement rue des Lilas 15",
      body: "Bonjour,\nMerci de votre intérêt pour l'appartement de trois pièces.\nPouvez-vous vous présenter et nous dire quand vous souhaitez visiter ?\nRégie Bellevue",
    },
    instruction: "Répondez à la régie : présentez votre situation (travail, famille), dites pourquoi l'appartement vous intéresse et proposez des disponibilités pour une visite.",
    points: ["Votre situation", "Votre intérêt pour l'appartement", "Vos disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-2",
    title: "Après la visite",
    situation: "Vous avez visité un appartement qui vous plaît beaucoup.",
    sourceMessage: {
      from: "Régie Bellevue",
      subject: "Suite de votre visite",
      body: "Bonjour,\nMerci pour votre visite d'hier.\nÊtes-vous toujours intéressé(e) par l'appartement ?\nRégie Bellevue",
    },
    instruction: "Répondez à la régie : confirmez votre intérêt, dites que vous envoyez le dossier de location et posez une question sur la caution.",
    points: ["Votre intérêt", "L'envoi du dossier", "Une question sur la caution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-3",
    title: "Refuser un appartement",
    situation: "La régie vous propose un appartement, mais le loyer est trop élevé.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Proposition de logement",
      body: "Bonjour,\nNous pouvons vous proposer un quatre pièces au centre-ville, pour 2 400 francs par mois.\nSouhaitez-vous le visiter ?\nRégie du Parc",
    },
    instruction: "Répondez à la régie : refusez poliment, expliquez que le loyer est trop élevé et donnez votre budget maximum pour une autre proposition.",
    points: ["Le refus poli", "La raison (loyer trop élevé)", "Votre budget maximum"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-4",
    title: "Demander des précisions",
    situation: "Une annonce vous intéresse, mais il manque des informations.",
    sourceMessage: {
      from: "Régie Horizon",
      subject: "Studio à louer — quartier de la gare",
      body: "Bonjour,\nNotre studio proche de la gare est encore disponible : 980 francs par mois.\nContactez-nous pour plus d'informations.\nRégie Horizon",
    },
    instruction: "Répondez à la régie : demandez si les charges sont comprises, à quel étage se trouve le studio et s'il y a une cave ou un parking.",
    points: ["Les charges", "L'étage", "La cave ou le parking"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-5",
    title: "Compléter son dossier",
    situation: "La régie a reçu votre dossier de location, mais il manque un document.",
    sourceMessage: {
      from: "Régie Bellevue",
      subject: "Dossier incomplet",
      body: "Bonjour,\nVotre dossier de location est presque complet.\nIl manque votre dernière fiche de salaire. Pouvez-vous nous l'envoyer rapidement ?\nRégie Bellevue",
    },
    instruction: "Répondez à la régie : excusez-vous, dites quand vous envoyez le document manquant et demandez quand vous aurez une réponse.",
    points: ["L'excuse", "L'envoi du document", "Une question sur la réponse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-6",
    title: "Conseiller un ami",
    situation: "Un ami cherche un logement et vous demande comment vous avez trouvé le vôtre.",
    sourceMessage: {
      from: "Omar",
      subject: "Recherche d'appartement",
      body: "Salut,\nJe cherche un deux pièces depuis deux mois, mais je ne trouve rien.\nComment tu as trouvé ton appartement ? Tu as des conseils ?\nOmar",
    },
    instruction: "Répondez à Omar : racontez comment vous avez trouvé votre appartement, conseillez-lui des sites d'annonces et expliquez ce qu'il faut préparer pour le dossier.",
    points: ["Votre recherche", "Les sites d'annonces", "Les documents du dossier"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-7",
    title: "Signaler un problème",
    situation: "Vous venez d'emménager et le chauffage ne fonctionne pas bien.",
    sourceMessage: {
      from: "Régie Bellevue",
      subject: "Votre emménagement",
      body: "Bonjour,\nVous êtes installé(e) depuis une semaine dans votre nouvel appartement.\nTout se passe bien ?\nRégie Bellevue",
    },
    instruction: "Répondez à la régie : signalez le problème de chauffage, demandez le passage d'un technicien et dites quand vous êtes à la maison.",
    points: ["Le problème de chauffage", "La demande de réparation", "Vos disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-8",
    title: "État des lieux",
    situation: "La régie vous propose une date pour l'état des lieux d'entrée.",
    sourceMessage: {
      from: "Régie Bellevue",
      subject: "État des lieux d'entrée",
      body: "Bonjour,\nNous vous proposons l'état des lieux le mardi 28 juin à 9 h, dans l'appartement.\nCette date vous convient-elle ?\nRégie Bellevue",
    },
    instruction: "Répondez à la régie : expliquez que vous travaillez mardi matin, proposez une autre date et demandez quand vous recevrez les clés.",
    points: ["Le problème avec la date", "Une autre proposition", "Une question sur les clés"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-9",
    title: "Trouver un colocataire",
    situation: "Vous cherchez un colocataire. Une personne répond à votre annonce.",
    sourceMessage: {
      from: "Léa",
      subject: "Votre annonce de colocation",
      body: "Bonjour,\nVotre annonce de colocation m'intéresse beaucoup.\nLa chambre est encore libre ? Le loyer est de combien ?\nLéa",
    },
    instruction: "Répondez à Léa : décrivez la chambre et l'appartement, donnez le montant du loyer et des charges, et proposez une visite.",
    points: ["La description de la chambre", "Le loyer et les charges", "Une proposition de visite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-10",
    title: "Annoncer son départ",
    situation: "Vous avez trouvé un logement plus grand. Votre régie actuelle vous écrit.",
    sourceMessage: {
      from: "Régie du Lac",
      subject: "Renouvellement de votre bail",
      body: "Bonjour,\nVotre bail se termine le 30 septembre.\nSouhaitez-vous le renouveler pour une année ?\nRégie du Lac",
    },
    instruction: "Répondez à la régie : annoncez votre départ, expliquez pourquoi vous partez et posez une question sur l'état des lieux de sortie.",
    points: ["L'annonce du départ", "La raison", "Une question sur l'état des lieux"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   E9.4 — Faire des démarches administratives
   ════════════════════════════════════════════════════════════════════════════ */

const E9_4_CE_EMAIL_TEXT = `De : Administration communale de Renens
Objet : Renouvellement de votre permis de séjour

Bonjour,

Votre permis de séjour arrive à expiration le 30 septembre.
Pour le renouveler, vous devez prendre rendez-vous au bureau des habitants.
Le bureau est ouvert du lundi au vendredi, de 8 h à 11 h 30, et le jeudi aussi l'après-midi, de 14 h à 18 h.
Apportez votre passeport, une photo récente, votre contrat de travail et une attestation de votre assurance maladie.
Le renouvellement coûte 65 francs. Vous pouvez payer par carte ou en espèces.
Attention : faites votre demande au moins deux semaines avant l'expiration.
Le bureau se trouve au premier étage de la mairie, guichet 3.

Avec nos meilleures salutations,
Le bureau des habitants`;

const E9_4_CE_EMAIL_POOL = buildExpressPool("e9-4-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quand le permis de séjour expire-t-il ?",
    text: ["Le 30 septembre", "Le 13 septembre", "Le 30 novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre permis de séjour arrive à expiration le 30 _________.",
    fill: "septembre",
    vfQ: "Le permis de séjour expire le 30 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Que faut-il faire pour renouveler le permis ?",
    text: [
      "Prendre rendez-vous au bureau des habitants",
      "Envoyer une lettre à la police",
      "Aller à la banque",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous devez prendre rendez-vous au bureau des _________.",
    fill: "habitants",
    vfQ: "Il faut prendre rendez-vous à la banque.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Quels jours le bureau est-il ouvert le matin ?",
    text: ["Du lundi au vendredi", "Seulement le jeudi", "Le samedi et le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le bureau est ouvert du lundi au _________, de 8 h à 11 h 30.",
    fill: "vendredi",
    vfQ: "Le bureau est ouvert le samedi matin.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour le bureau est-il aussi ouvert l'après-midi ?",
    text: ["Le jeudi", "Le lundi", "Le mardi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le bureau est aussi ouvert le _________ après-midi, de 14 h à 18 h.",
    fill: "jeudi",
    vfQ: "Le jeudi, le bureau est ouvert l'après-midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quels documents faut-il apporter ?",
    text: [
      "Le passeport, une photo, le contrat de travail et une attestation d'assurance",
      "Seulement le passeport",
      "Le permis de conduire et une lettre",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Apportez votre passeport, une _________ récente et votre contrat de travail.",
    fill: "photo",
    vfQ: "Il faut apporter une photo récente.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Combien coûte le renouvellement ?",
    text: ["65 francs", "45 francs", "95 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le renouvellement coûte _________ francs.",
    fill: "65",
    fillA: ["soixante-cinq"],
    vfQ: "Le renouvellement est gratuit.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Comment peut-on payer ?",
    text: [
      "Par carte ou en espèces",
      "Par virement seulement",
      "En espèces seulement",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez payer par carte ou en _________.",
    fill: "espèces",
    fillA: ["especes"],
    vfQ: "On peut payer par carte.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Quand faut-il faire la demande ?",
    text: [
      "Au moins deux semaines avant l'expiration",
      "La veille de l'expiration",
      "Après l'expiration",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Faites votre demande au moins deux _________ avant l'expiration.",
    fill: "semaines",
    vfQ: "On peut faire la demande après l'expiration du permis.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Où se trouve le bureau des habitants ?",
    text: [
      "Au premier étage de la mairie",
      "Au troisième étage de la gare",
      "À la poste",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le bureau se trouve au _________ étage de la mairie.",
    fill: "premier",
    fillA: ["1er", "1"],
    vfQ: "Le bureau est au premier étage de la mairie.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "À quel guichet faut-il aller ?",
    text: ["Au guichet 3", "Au guichet 8", "Au guichet 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au premier étage de la mairie, guichet _________.",
    fill: "3",
    fillA: ["trois"],
    vfQ: "Il faut aller au guichet 5.",
    vfC: 1,
  }),
]);

export const E9_4_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e9-4-ce-email",
  readingText: E9_4_CE_EMAIL_TEXT,
  questionPool: E9_4_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E9_4_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e9-4-pee-1",
    title: "Confirmer un rendez-vous",
    situation: "La commune vous propose un rendez-vous pour renouveler votre permis de séjour.",
    sourceMessage: {
      from: "Bureau des habitants",
      subject: "Votre rendez-vous",
      body: "Bonjour,\nNous vous proposons un rendez-vous le jeudi 12 septembre à 14 h 30, guichet 3.\nMerci de confirmer votre présence.\nLe bureau des habitants",
    },
    instruction: "Répondez au bureau : confirmez votre présence, demandez la liste des documents à apporter et demandez combien de temps dure le rendez-vous.",
    points: ["La confirmation", "La liste des documents", "La durée du rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-2",
    title: "Déplacer un rendez-vous",
    situation: "Vous avez un rendez-vous à la commune, mais vous devez travailler ce jour-là.",
    sourceMessage: {
      from: "Bureau des habitants",
      subject: "Rappel de rendez-vous",
      body: "Bonjour,\nNous vous rappelons votre rendez-vous du mardi 17 juin à 10 h.\nEn cas d'empêchement, merci de nous prévenir.\nLe bureau des habitants",
    },
    instruction: "Répondez au bureau : excusez-vous, expliquez que vous travaillez mardi matin et proposez deux autres dates possibles.",
    points: ["L'excuse", "La raison (travail)", "Deux autres dates"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-3",
    title: "Envoyer un document manquant",
    situation: "Votre demande de permis est bloquée : il manque un document.",
    sourceMessage: {
      from: "Service de la population",
      subject: "Dossier incomplet",
      body: "Bonjour,\nVotre demande de renouvellement est incomplète.\nIl manque l'attestation de votre assurance maladie. Merci de nous l'envoyer avant le 15 du mois.\nLe service de la population",
    },
    instruction: "Répondez au service : excusez-vous, expliquez que vous avez demandé l'attestation à votre assurance et dites quand vous l'enverrez.",
    points: ["L'excuse", "La démarche auprès de l'assurance", "La date d'envoi"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-4",
    title: "Question à l'assurance",
    situation: "Votre assurance maladie vous propose de changer de franchise pour payer moins cher.",
    sourceMessage: {
      from: "Assurance SantéPlus",
      subject: "Votre prime 2027",
      body: "Bonjour,\nVotre prime va augmenter de 20 francs par mois en janvier.\nAvec une franchise plus haute, vous pouvez payer moins cher chaque mois.\nVotre conseiller",
    },
    instruction: "Répondez à l'assurance : demandez une explication simple sur la franchise, demandez les prix des différentes options et demandez la date limite pour changer.",
    points: ["Une question sur la franchise", "Les prix des options", "La date limite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-5",
    title: "Annoncer un déménagement",
    situation: "Vous avez déménagé dans une nouvelle commune le mois dernier.",
    sourceMessage: {
      from: "Contrôle des habitants",
      subject: "Votre arrivée dans la commune",
      body: "Bonjour,\nBienvenue dans notre commune !\nPour votre inscription, merci de nous confirmer votre nouvelle adresse et la date de votre arrivée.\nLe contrôle des habitants",
    },
    instruction: "Répondez à la commune : donnez votre nouvelle adresse complète, précisez la date de votre déménagement et demandez quels documents il faut apporter pour l'inscription.",
    points: ["La nouvelle adresse", "La date du déménagement", "Les documents pour l'inscription"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-6",
    title: "Aider un ami",
    situation: "Un ami doit renouveler son permis de séjour pour la première fois.",
    sourceMessage: {
      from: "Ahmed",
      subject: "Permis de séjour",
      body: "Salut,\nMon permis de séjour se termine dans deux mois. Toi, tu as déjà fait le renouvellement, non ?\nComment ça marche ? C'est cher ?\nAhmed",
    },
    instruction: "Répondez à Ahmed : expliquez les étapes du renouvellement, donnez la liste des documents et indiquez le prix et les délais.",
    points: ["Les étapes", "Les documents", "Le prix et les délais"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-7",
    title: "Demander une attestation",
    situation: "Votre employeur a besoin d'une attestation de domicile.",
    sourceMessage: {
      from: "Service RH — Entreprise Nova",
      subject: "Document demandé",
      body: "Bonjour,\nPour compléter votre dossier, nous avons besoin d'une attestation de domicile de votre commune.\nMerci de nous l'envoyer avant la fin du mois.\nLe service RH",
    },
    instruction: "Répondez au service RH : dites que vous allez demander l'attestation à la commune, précisez quand vous pourrez l'envoyer et demandez si un document PDF suffit.",
    points: ["La démarche à la commune", "La date d'envoi", "Une question sur le format"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-8",
    title: "Refuser une offre d'assurance",
    situation: "Une assurance vous propose un contrat supplémentaire par e-mail.",
    sourceMessage: {
      from: "Assurance Protecta",
      subject: "Offre spéciale : assurance ménage",
      body: "Bonjour,\nNous vous proposons notre assurance ménage à 19 francs par mois, avec un mois gratuit.\nÊtes-vous intéressé(e) ?\nAssurance Protecta",
    },
    instruction: "Répondez à l'assurance : refusez poliment l'offre, expliquez que vous avez déjà une assurance ménage et demandez de ne plus recevoir de publicité.",
    points: ["Le refus poli", "Votre assurance actuelle", "La demande d'arrêt de la publicité"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-9",
    title: "Problème avec le site de la commune",
    situation: "La commune annonce un nouveau système de rendez-vous en ligne, mais le site ne fonctionne pas chez vous.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Nouveau : rendez-vous en ligne",
      body: "Bonjour,\nVous pouvez maintenant prendre rendez-vous en ligne pour toutes vos démarches.\nEn cas de problème avec le site, écrivez-nous.\nL'administration communale",
    },
    instruction: "Répondez à la commune : expliquez que le site ne fonctionne pas, décrivez le problème et demandez un rendez-vous pour refaire votre carte d'identité.",
    points: ["Le problème avec le site", "La description du problème", "La demande de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-10",
    title: "S'excuser pour un rendez-vous manqué",
    situation: "Vous avez oublié votre rendez-vous à la commune la semaine dernière.",
    sourceMessage: {
      from: "Bureau des habitants",
      subject: "Rendez-vous manqué",
      body: "Bonjour,\nVous ne vous êtes pas présenté(e) à votre rendez-vous du lundi 3 juin.\nMerci de nous contacter pour fixer une nouvelle date.\nLe bureau des habitants",
    },
    instruction: "Répondez au bureau : excusez-vous pour votre absence, expliquez ce qui s'est passé et demandez un nouveau rendez-vous en donnant vos disponibilités.",
    points: ["L'excuse", "L'explication", "Vos disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   E9.5 — S'informer sur l'actualité
   ════════════════════════════════════════════════════════════════════════════ */

const E9_5_CE_EMAIL_TEXT = `De : Journal de la Ville — Newsletter
Objet : Ce week-end dans votre ville

Bonjour,

Voici les informations de la semaine.
Samedi 15 juin, la fête de la musique commence à 16 h sur la place centrale.
Vingt concerts gratuits sont prévus jusqu'à minuit.
Dimanche, le marché aux puces ouvre de 9 h à 17 h au bord du lac.
Météo : samedi, il fera beau et chaud, 28 degrés. Dimanche, attention, des orages arriveront dans l'après-midi.
Circulation : le centre-ville sera fermé aux voitures samedi, de 14 h à minuit.
Prenez les transports publics : les bus seront gratuits toute la journée.
La semaine prochaine, notre journal fête ses cinquante ans : une édition spéciale paraîtra jeudi.

Bonne lecture,
La rédaction`;

const E9_5_CE_EMAIL_POOL = buildExpressPool("e9-5-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quand commence la fête de la musique ?",
    text: ["Samedi à 16 h", "Samedi à 18 h", "Dimanche à 16 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La fête de la musique commence à _________ h sur la place centrale.",
    fill: "16",
    fillA: ["seize"],
    vfQ: "La fête de la musique commence samedi à 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Où a lieu la fête de la musique ?",
    text: ["Sur la place centrale", "Au bord du lac", "Dans la gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La fête de la musique commence à 16 h sur la place _________.",
    fill: "centrale",
    vfQ: "La fête de la musique a lieu au bord du lac.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien de concerts sont prévus ?",
    text: ["Vingt concerts", "Douze concerts", "Cinquante concerts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ concerts gratuits sont prévus jusqu'à minuit.",
    fill: "vingt",
    fillA: ["20"],
    vfQ: "Les concerts sont payants.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand le marché aux puces est-il ouvert ?",
    text: [
      "Dimanche, de 9 h à 17 h",
      "Samedi, de 9 h à 17 h",
      "Dimanche, de 14 h à minuit",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le marché aux puces ouvre de 9 h à _________ h.",
    fill: "17",
    fillA: ["dix-sept"],
    vfQ: "Le marché aux puces a lieu dimanche.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où se trouve le marché aux puces ?",
    text: ["Au bord du lac", "Sur la place centrale", "Devant la mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le marché aux puces ouvre au bord du _________.",
    fill: "lac",
    vfQ: "Le marché aux puces est au bord du lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel temps fera-t-il samedi ?",
    text: [
      "Beau et chaud, 28 degrés",
      "Froid et pluvieux",
      "Des orages toute la journée",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Samedi, il fera beau et chaud, _________ degrés.",
    fill: "28",
    fillA: ["vingt-huit"],
    vfQ: "Samedi, il fera 28 degrés.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que se passera-t-il dimanche après-midi ?",
    text: ["Des orages arriveront", "Il fera très chaud", "Il neigera"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Dimanche, des _________ arriveront dans l'après-midi.",
    fill: "orages",
    vfQ: "Dimanche après-midi, le temps restera beau.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Quand le centre-ville est-il fermé aux voitures ?",
    text: [
      "Samedi, de 14 h à minuit",
      "Dimanche matin",
      "Toute la semaine",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le centre-ville sera fermé aux voitures samedi, de 14 h à _________.",
    fill: "minuit",
    vfQ: "Samedi après-midi, le centre-ville est fermé aux voitures.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Combien coûtent les bus samedi ?",
    text: ["Ils sont gratuits", "Deux francs le trajet", "Cinq francs la journée"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les bus seront _________ toute la journée.",
    fill: "gratuits",
    vfQ: "Samedi, il faut payer le bus.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quel anniversaire le journal fête-t-il ?",
    text: ["Ses cinquante ans", "Ses quinze ans", "Ses cent ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Notre journal fête ses _________ ans.",
    fill: "cinquante",
    fillA: ["50"],
    vfQ: "Une édition spéciale paraîtra jeudi.",
    vfC: 0,
  }),
]);

export const E9_5_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e9-5-ce-email",
  readingText: E9_5_CE_EMAIL_TEXT,
  questionPool: E9_5_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E9_5_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e9-5-pee-1",
    title: "S'abonner au journal",
    situation: "Le journal local vous propose un abonnement.",
    sourceMessage: {
      from: "Journal de la Ville",
      subject: "Offre d'abonnement",
      body: "Bonjour,\nAbonnez-vous à notre journal : 25 francs par mois, papier et numérique.\nLe premier mois est gratuit.\nLe service abonnements",
    },
    instruction: "Répondez au journal : dites que l'offre vous intéresse, demandez si un abonnement 100 % numérique existe et demandez comment profiter du mois gratuit.",
    points: ["Votre intérêt", "Une question sur l'offre numérique", "Le mois gratuit"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-2",
    title: "Donner son avis",
    situation: "La rédaction de la newsletter demande l'avis de ses lecteurs.",
    sourceMessage: {
      from: "Journal de la Ville — Newsletter",
      subject: "Votre avis nous intéresse",
      body: "Bonjour,\nNous voulons améliorer notre newsletter.\nQuelles rubriques lisez-vous ? Qu'est-ce qui manque ?\nLa rédaction",
    },
    instruction: "Répondez à la rédaction : dites quelles rubriques vous lisez, expliquez pourquoi et proposez une nouvelle rubrique.",
    points: ["Vos rubriques préférées", "La raison", "Une proposition de rubrique"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-3",
    title: "Aller à la fête de la musique",
    situation: "Un ami vous demande si vous allez à la fête de la musique samedi.",
    sourceMessage: {
      from: "Marco",
      subject: "Fête de la musique",
      body: "Salut !\nTu as lu la newsletter ? Il y a la fête de la musique samedi !\nTu veux y aller ? On se retrouve où ?\nMarco",
    },
    instruction: "Répondez à Marco : acceptez, proposez une heure et un lieu de rendez-vous et rappelez-lui que le centre-ville est fermé aux voitures.",
    points: ["Votre réponse (oui)", "L'heure et le lieu de rendez-vous", "L'information sur la circulation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-4",
    title: "Reporter un pique-nique",
    situation: "Une amie a organisé un pique-nique dimanche, mais la météo annonce des orages.",
    sourceMessage: {
      from: "Julie",
      subject: "Pique-nique de dimanche",
      body: "Coucou,\nTout est prêt pour le pique-nique de dimanche au bord du lac !\nTu apportes le dessert ?\nJulie",
    },
    instruction: "Répondez à Julie : prévenez-la que la météo annonce des orages dimanche après-midi, proposez de reporter le pique-nique et proposez une activité de remplacement.",
    points: ["La météo de dimanche", "La proposition de report", "Une activité de remplacement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-5",
    title: "Demander le programme",
    situation: "L'office du tourisme annonce un festival, mais sans les détails.",
    sourceMessage: {
      from: "Office du tourisme",
      subject: "Festival du lac : trois jours de fête",
      body: "Bonjour,\nLe Festival du lac revient du 21 au 23 août !\nConcerts, cinéma en plein air et marché artisanal au programme.\nL'office du tourisme",
    },
    instruction: "Répondez à l'office du tourisme : demandez le programme détaillé des concerts, les prix des billets et les possibilités de parking.",
    points: ["Le programme des concerts", "Les prix des billets", "Le parking"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-6",
    title: "Raconter un événement",
    situation: "Une amie n'a pas pu venir à la fête de la musique et veut tout savoir.",
    sourceMessage: {
      from: "Chiara",
      subject: "Alors, cette fête ?",
      body: "Salut,\nJe n'ai pas pu venir samedi, j'étais malade…\nC'était comment, la fête de la musique ? Raconte-moi tout !\nChiara",
    },
    instruction: "Répondez à Chiara : racontez la soirée, dites quel concert vous avez préféré et proposez d'y retourner ensemble l'année prochaine.",
    points: ["Le récit de la soirée", "Votre concert préféré", "Une proposition pour l'année prochaine"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-7",
    title: "Problème de newsletter",
    situation: "Vous ne recevez plus la newsletter du journal depuis trois semaines.",
    sourceMessage: {
      from: "Journal de la Ville",
      subject: "Votre abonnement à la newsletter",
      body: "Bonjour,\nVous êtes inscrit(e) à notre newsletter hebdomadaire.\nPour toute question, répondez à cet e-mail.\nLe service lecteurs",
    },
    instruction: "Répondez au journal : expliquez que vous ne recevez plus la newsletter depuis trois semaines, donnez votre adresse e-mail et demandez de vérifier votre inscription.",
    points: ["Le problème", "Votre adresse e-mail", "La demande de vérification"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-8",
    title: "Participer à un concours",
    situation: "Le journal organise un concours pour ses cinquante ans.",
    sourceMessage: {
      from: "Journal de la Ville",
      subject: "Grand concours : 50 ans !",
      body: "Bonjour,\nPour nos cinquante ans, gagnez un abonnement d'une année !\nPour participer, répondez à cette question : depuis quand lisez-vous notre journal ?\nLa rédaction",
    },
    instruction: "Répondez au journal : participez au concours, racontez depuis quand et pourquoi vous lisez le journal et posez une question sur le tirage au sort.",
    points: ["Depuis quand vous lisez le journal", "Pourquoi", "Une question sur le tirage au sort"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-9",
    title: "Conseiller un média",
    situation: "Un ami veut suivre les informations en français pour progresser.",
    sourceMessage: {
      from: "Pavel",
      subject: "Les infos en français",
      body: "Salut,\nJe veux m'informer en français, mais le journal télévisé est trop rapide pour moi.\nTu utilises quoi, toi ? Tu as des conseils ?\nPavel",
    },
    instruction: "Répondez à Pavel : expliquez comment vous vous informez en français, conseillez-lui un média facile et donnez-lui une astuce pour mieux comprendre.",
    points: ["Vos habitudes d'information", "Un média conseillé", "Une astuce"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-10",
    title: "Proposer une sortie",
    situation: "Un ami vous demande une idée de sortie pour le week-end.",
    sourceMessage: {
      from: "Louis",
      subject: "Ce week-end ?",
      body: "Salut,\nQu'est-ce qu'on fait ce week-end ? Tu as une idée ?\nJ'ai envie de sortir un peu !\nLouis",
    },
    instruction: "Répondez à Louis : proposez le cinéma en plein air annoncé dans la newsletter, donnez le jour, l'heure et le lieu, et dites ce qu'il faut apporter.",
    points: ["La proposition de sortie", "Le jour, l'heure et le lieu", "Ce qu'il faut apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

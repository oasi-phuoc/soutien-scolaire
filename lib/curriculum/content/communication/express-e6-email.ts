import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E6 — Se déplacer (chemin, transports publics, aéroport).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 50;
const PE_MAX = 120;

/* ════════════════════════════════════════════════════════════════════════════
   E6.1 — Demander son chemin
   ════════════════════════════════════════════════════════════════════════════ */

const E6_1_CE_EMAIL_TEXT = `De : Julie
Objet : Le chemin pour venir chez moi

Bonjour,

Samedi, je fais une petite fête chez moi. La fête commence à 18 h.
Voici le chemin : à la gare, prenez le tram numéro 12.
Descendez au cinquième arrêt, devant le supermarché.
Le trajet dure environ dix minutes.
Ensuite, allez tout droit, puis tournez à gauche après la banque.
Mon immeuble est au numéro 24, juste à côté de la boulangerie.
J'habite au troisième étage.
Si vous êtes perdu, appelez-moi : je viens vous chercher.

À samedi,
Julie`;

const E6_1_CE_EMAIL_POOL = buildExpressPool("e6-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quand est la fête ?",
    text: ["Samedi à 18 h", "Dimanche à 18 h", "Samedi à 20 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La fête commence à _________ h.",
    fill: "18",
    fillA: ["dix-huit"],
    vfQ: "La fête commence à 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel tram faut-il prendre ?",
    text: ["Le tram numéro 12", "Le tram numéro 2", "Le bus numéro 12"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À la gare, prenez le tram numéro _________.",
    fill: "12",
    fillA: ["douze"],
    vfQ: "Il faut prendre le bus numéro 12.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Où faut-il descendre ?",
    text: [
      "Au cinquième arrêt, devant le supermarché",
      "Au deuxième arrêt, devant l'école",
      "Au dernier arrêt",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Descendez au cinquième arrêt, devant le _________.",
    fill: "supermarché",
    fillA: ["supermarche"],
    vfQ: "Il faut descendre devant le supermarché.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "C'est quel arrêt ?",
    text: ["Le cinquième", "Le deuxième", "Le neuvième"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Descendez au _________ arrêt.",
    fill: "cinquième",
    fillA: ["cinquieme", "5e", "5ème", "5"],
    vfQ: "Il faut descendre au deuxième arrêt.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Combien de temps dure le trajet ?",
    text: ["Environ dix minutes", "Environ trente minutes", "Une heure"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le trajet dure environ dix _________.",
    fill: "minutes",
    vfQ: "Le trajet dure environ une heure.",
    vfC: 1,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il tourner à gauche ?",
    text: ["Après la banque", "Avant la gare", "Après la pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Allez tout droit, puis tournez à _________ après la banque.",
    fill: "gauche",
    vfQ: "Il faut tourner à droite après la banque.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "À quel numéro est l'immeuble de Julie ?",
    text: ["Au numéro 24", "Au numéro 42", "Au numéro 4"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon immeuble est au numéro _________.",
    fill: "24",
    fillA: ["vingt-quatre"],
    vfQ: "L'immeuble de Julie est au numéro 24.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "À côté de quoi est l'immeuble ?",
    text: ["De la boulangerie", "De la pharmacie", "De la poste"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon immeuble est juste à côté de la _________.",
    fill: "boulangerie",
    vfQ: "L'immeuble est à côté de la pharmacie.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "À quel étage habite Julie ?",
    text: ["Au troisième étage", "Au premier étage", "Au cinquième étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "troisième",
    fillA: ["troisieme", "3e", "3ème", "3"],
    vfQ: "Julie habite au troisième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Que faire si on est perdu ?",
    text: ["Appeler Julie", "Rentrer à la maison", "Attendre à la gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Si vous êtes perdu, _________-moi : je viens vous chercher.",
    fill: "appelez",
    fillA: ["téléphonez", "telephonez"],
    vfQ: "Julie vient chercher les invités perdus.",
    vfC: 0,
  }),
]);

export const E6_1_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e6-1-ce-email",
  readingText: E6_1_CE_EMAIL_TEXT,
  questionPool: E6_1_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E6_1_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e6-1-pee-1",
    title: "Expliquer le chemin à un ami",
    situation: "Votre ami vient chez vous samedi, mais il ne connaît pas votre quartier.",
    sourceMessage: {
      from: "Marco",
      subject: "Comment venir chez toi ?",
      body: "Salut !\nJe viens chez toi samedi après-midi, mais je ne connais pas ton quartier.\nComment est-ce que je viens de la gare ?\nMarco",
    },
    instruction: "Répondez à Marco : expliquez le chemin depuis la gare, donnez le numéro du bus ou du tram et dites où il faut descendre.",
    points: ["Le chemin depuis la gare", "Le bus ou le tram à prendre", "L'arrêt où descendre"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pee-2",
    title: "Accepter une invitation",
    situation: "Un collègue vous invite à dîner, mais vous ne connaissez pas son quartier.",
    sourceMessage: {
      from: "M. Girard",
      subject: "Invitation à dîner",
      body: "Bonjour,\nJe vous invite à dîner chez moi vendredi soir à 19 h.\nJ'habite dans le quartier des Fleurs.\nÀ vendredi !\nM. Girard",
    },
    instruction: "Répondez à M. Girard : remerciez-le, acceptez l'invitation et posez des questions sur le chemin (bus, arrêt, étage).",
    points: ["Un remerciement", "Votre réponse à l'invitation", "Des questions sur le chemin"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pee-3",
    title: "Remercier l'office du tourisme",
    situation: "L'office du tourisme vous envoie le plan de la ville.",
    sourceMessage: {
      from: "Office du tourisme",
      subject: "Votre demande de plan",
      body: "Bonjour,\nVoici le plan de la ville en pièce jointe.\nLe centre historique est à dix minutes à pied de la gare.\nBonne visite !\nL'office du tourisme",
    },
    instruction: "Répondez à l'office du tourisme : remerciez pour le plan, demandez le chemin pour aller au musée et posez une question sur les bus.",
    points: ["Un remerciement", "Une question sur le chemin du musée", "Une question sur les bus"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pee-4",
    title: "Aider une amie perdue",
    situation: "Votre amie est en ville et ne trouve pas le restaurant du rendez-vous.",
    sourceMessage: {
      from: "Elena",
      subject: "Je suis perdue !",
      body: "Coucou,\nJe suis en ville, mais je ne trouve pas le restaurant pour ce soir.\nJe suis devant la poste. C'est loin ?\nElena",
    },
    instruction: "Répondez à Elena : dites où est le restaurant, expliquez le chemin depuis la poste et rappelez l'heure du rendez-vous.",
    points: ["Où est le restaurant", "Le chemin depuis la poste", "L'heure du rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pee-5",
    title: "Le chemin de l'école",
    situation: "Une nouvelle voisine cherche l'école du quartier.",
    sourceMessage: {
      from: "Mme Diallo",
      subject: "L'école du quartier",
      body: "Bonjour,\nNous sommes nouveaux dans le quartier. Ma fille commence l'école lundi.\nOù est l'école, s'il vous plaît ? C'est loin à pied ?\nMme Diallo",
    },
    instruction: "Répondez à Mme Diallo : expliquez le chemin de l'école, dites combien de temps il faut à pied et donnez un conseil.",
    points: ["Le chemin de l'école", "La durée à pied", "Un conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pee-6",
    title: "Un rendez-vous au café",
    situation: "Une amie vous propose un rendez-vous dans un café que vous ne connaissez pas.",
    sourceMessage: {
      from: "Awa",
      subject: "Café samedi ?",
      body: "Salut,\nOn se retrouve samedi au café du Lac à 15 h ?\nTu connais ce café ?\nAwa",
    },
    instruction: "Répondez à Awa : acceptez le rendez-vous, dites que vous ne connaissez pas le café et demandez le chemin.",
    points: ["Votre réponse", "Vous ne connaissez pas le café", "Une question sur le chemin"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pee-7",
    title: "Le cousin arrive en train",
    situation: "Votre cousin arrive dimanche à la gare avec sa valise.",
    sourceMessage: {
      from: "Samir",
      subject: "J'arrive en train",
      body: "Salut,\nJ'arrive dimanche à la gare à 14 h 20 avec ma valise.\nComment est-ce que je viens chez toi ?\nÀ dimanche,\nSamir",
    },
    instruction: "Répondez à Samir : expliquez le chemin depuis la gare, dites combien de temps dure le trajet et proposez de venir le chercher.",
    points: ["Le chemin depuis la gare", "La durée du trajet", "Votre proposition d'aide"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pee-8",
    title: "Accueillir une nouvelle collègue",
    situation: "Une nouvelle collègue commence lundi et ne connaît pas le bâtiment.",
    sourceMessage: {
      from: "Lucia",
      subject: "Mon premier jour",
      body: "Bonjour,\nJe commence lundi dans votre équipe. Je ne connais pas encore le bâtiment.\nOù est le bureau ? Il y a un arrêt de bus à côté ?\nMerci,\nLucia",
    },
    instruction: "Répondez à Lucia : expliquez où est le bureau (étage, entrée), donnez l'arrêt de bus le plus proche et souhaitez-lui la bienvenue.",
    points: ["Où est le bureau", "L'arrêt de bus", "Une phrase de bienvenue"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pee-9",
    title: "Le chemin de la piscine",
    situation: "Votre voisin cherche la piscine du quartier pour ses petits-enfants.",
    sourceMessage: {
      from: "M. Keller",
      subject: "La piscine",
      body: "Bonjour,\nMes petits-enfants arrivent demain. Où est la piscine du quartier ?\nOn peut y aller à pied ?\nMerci d'avance,\nM. Keller",
    },
    instruction: "Répondez à M. Keller : expliquez le chemin de la piscine, dites comment y aller (à pied ou en bus) et donnez les horaires.",
    points: ["Le chemin de la piscine", "À pied ou en bus", "Les horaires de la piscine"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pee-10",
    title: "Raconter : perdu en ville",
    situation: "Un ami raconte qu'il s'est perdu en ville et vous pose une question.",
    sourceMessage: {
      from: "Tom",
      subject: "Perdu en ville !",
      body: "Salut,\nHier, je me suis perdu dans le centre-ville pendant une heure !\nEt toi, ça t'arrive aussi ?\nTom",
    },
    instruction: "Répondez à Tom : racontez une fois où vous étiez perdu(e), dites comment vous avez trouvé le chemin et donnez un conseil (plan, application, demander).",
    points: ["Votre histoire", "Comment vous avez trouvé le chemin", "Un conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   E6.2 — Voyager en transport public
   ════════════════════════════════════════════════════════════════════════════ */

const E6_2_CE_EMAIL_TEXT = `De : Transports de la Ville
Objet : Votre abonnement mensuel

Bonjour,

Merci pour votre achat. Votre abonnement mensuel commence le lundi 1er avril.
Il coûte soixante francs par mois et il est valable dans le bus, le tram et le train.
Votre carte arrive à la maison dans cinq jours.
Attention : la ligne 3 du tram est en travaux cette semaine. Un bus remplace le tram.
Le bus numéro 8 passe toutes les dix minutes devant la gare.
Pour vos questions, le guichet de la gare est ouvert tous les jours de 7 h à 19 h.

Bon voyage,
Les Transports de la Ville`;

const E6_2_CE_EMAIL_POOL = buildExpressPool("e6-2-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quand commence l'abonnement ?",
    text: ["Le lundi 1er avril", "Le mardi 2 avril", "Le lundi 1er mai"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre abonnement mensuel commence le lundi 1er _________.",
    fill: "avril",
    vfQ: "L'abonnement commence le 1er avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Combien coûte l'abonnement par mois ?",
    text: ["Soixante francs", "Quarante francs", "Quatre-vingts francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il coûte _________ francs par mois.",
    fill: "soixante",
    fillA: ["60"],
    vfQ: "L'abonnement coûte quatre-vingts francs par mois.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Où l'abonnement est-il valable ?",
    text: [
      "Dans le bus, le tram et le train",
      "Dans le bus seulement",
      "Dans le train seulement",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est valable dans le bus, le tram et le _________.",
    fill: "train",
    vfQ: "L'abonnement est valable dans le train.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand arrive la carte ?",
    text: ["Dans cinq jours", "Dans deux semaines", "Demain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre carte arrive à la maison dans _________ jours.",
    fill: "cinq",
    fillA: ["5"],
    vfQ: "La carte arrive dans deux semaines.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle ligne est en travaux ?",
    text: ["La ligne 3 du tram", "La ligne 8 du bus", "La ligne 12 du tram"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La ligne _________ du tram est en travaux cette semaine.",
    fill: "3",
    fillA: ["trois"],
    vfQ: "La ligne 3 du tram est en travaux.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qu'est-ce qui remplace le tram ?",
    text: ["Un bus", "Un taxi", "Un train"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un bus _________ le tram.",
    fill: "remplace",
    vfQ: "Un taxi remplace le tram.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Tous les combien passe le bus numéro 8 ?",
    text: [
      "Toutes les dix minutes",
      "Toutes les trente minutes",
      "Une fois par heure",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le bus numéro 8 passe toutes les dix _________.",
    fill: "minutes",
    vfQ: "Le bus numéro 8 passe toutes les dix minutes.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Où passe le bus numéro 8 ?",
    text: ["Devant la gare", "Devant l'école", "Devant la poste"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le bus numéro _________ passe devant la gare.",
    fill: "8",
    fillA: ["huit"],
    vfQ: "Le bus numéro 8 passe devant l'école.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Quand le guichet est-il ouvert ?",
    text: [
      "Tous les jours, de 7 h à 19 h",
      "Du lundi au vendredi seulement",
      "Le matin seulement",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le guichet de la gare est ouvert tous les jours de 7 h à _________ h.",
    fill: "19",
    fillA: ["dix-neuf", "19 h"],
    vfQ: "Le guichet est fermé le dimanche.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Les Transports de la Ville", "Une agence de voyage", "Un hôtel"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour vos questions, le _________ de la gare est ouvert tous les jours.",
    fill: "guichet",
    vfQ: "Cet e-mail vient d'une compagnie de transport.",
    vfC: 0,
  }),
]);

export const E6_2_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e6-2-ce-email",
  readingText: E6_2_CE_EMAIL_TEXT,
  questionPool: E6_2_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E6_2_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e6-2-pee-1",
    title: "Voyager ensemble en train",
    situation: "Une amie vous propose un voyage en train samedi.",
    sourceMessage: {
      from: "Nadia",
      subject: "Voyage à Berne samedi ?",
      body: "Salut,\nJe vais à Berne samedi. Tu viens avec moi ?\nOn prend le train du matin ?\nNadia",
    },
    instruction: "Répondez à Nadia : acceptez, proposez une heure de départ et posez une question sur les billets.",
    points: ["Votre réponse", "L'heure de départ", "Une question sur les billets"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pee-2",
    title: "Renouveler son abonnement",
    situation: "La compagnie de transport vous écrit : votre abonnement se termine.",
    sourceMessage: {
      from: "Transports de la Ville",
      subject: "Votre abonnement se termine",
      body: "Bonjour,\nVotre abonnement mensuel se termine le 31 mars.\nVoulez-vous le renouveler ?\nLes Transports de la Ville",
    },
    instruction: "Répondez à la compagnie : dites que vous voulez renouveler, demandez le prix et posez une question sur le paiement.",
    points: ["Votre décision", "Une question sur le prix", "Une question sur le paiement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pee-3",
    title: "Objet perdu dans le bus",
    situation: "Vous avez perdu un objet dans le bus. Le service des objets trouvés vous répond.",
    sourceMessage: {
      from: "Service des objets trouvés",
      subject: "Votre message",
      body: "Bonjour,\nVous avez perdu un objet dans nos transports ?\nDécrivez l'objet, la ligne et l'heure du trajet, s'il vous plaît.\nLe service des objets trouvés",
    },
    instruction: "Répondez au service : décrivez l'objet perdu, donnez la ligne de bus et l'heure du trajet.",
    points: ["L'objet perdu", "La ligne de bus", "L'heure du trajet"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pee-4",
    title: "Expliquer son trajet",
    situation: "Un collègue doit venir au travail sans voiture cette semaine.",
    sourceMessage: {
      from: "Pablo",
      subject: "Venir au travail sans voiture",
      body: "Salut,\nMa voiture est au garage cette semaine.\nComment est-ce que tu viens au travail en transport public ?\nPablo",
    },
    instruction: "Répondez à Pablo : expliquez votre trajet (bus, tram ou train), donnez les horaires et le prix du billet.",
    points: ["Votre trajet", "Les horaires", "Le prix du billet"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pee-5",
    title: "Travaux sur la ligne",
    situation: "La compagnie annonce des travaux sur votre ligne de tram.",
    sourceMessage: {
      from: "Transports de la Ville",
      subject: "Travaux sur la ligne 3",
      body: "Bonjour,\nLa ligne 3 du tram est en travaux du 5 au 12 mai.\nUn bus remplace le tram pendant cette période.\nLes Transports de la Ville",
    },
    instruction: "Répondez à la compagnie : demandez où part le bus de remplacement, les horaires du matin et la durée du trajet.",
    points: ["Où part le bus", "Les horaires du matin", "La durée du trajet"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pee-6",
    title: "Prévenir d'un retard",
    situation: "Votre train a du retard et votre cheffe vous attend pour la réunion.",
    sourceMessage: {
      from: "Mme Roth",
      subject: "Réunion de 9 h",
      body: "Bonjour,\nLa réunion commence à 9 h précises.\nMerci d'être à l'heure.\nMme Roth",
    },
    instruction: "Répondez à votre cheffe : excusez-vous, expliquez que votre train a du retard et dites à quelle heure vous arrivez.",
    points: ["Une excuse", "Le retard du train", "Votre heure d'arrivée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pee-7",
    title: "Quel billet acheter ?",
    situation: "Votre cousine visite votre ville ce week-end.",
    sourceMessage: {
      from: "Inès",
      subject: "Quel billet ?",
      body: "Coucou,\nJe visite ta ville samedi et dimanche.\nQuel billet est-ce que j'achète pour le bus et le tram ?\nInès",
    },
    instruction: "Répondez à Inès : conseillez un billet (billet à la journée, carte), donnez le prix et expliquez où l'acheter.",
    points: ["Le billet conseillé", "Le prix", "Où l'acheter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pee-8",
    title: "Donner son avis",
    situation: "Le service clients demande votre avis sur les transports.",
    sourceMessage: {
      from: "Service clients",
      subject: "Votre avis nous intéresse",
      body: "Bonjour,\nComment trouvez-vous nos bus et nos trams ?\nÉcrivez-nous votre avis.\nLe service clients",
    },
    instruction: "Répondez au service clients : dites que le bus numéro 8 est souvent en retard le matin, donnez un exemple précis et demandez une solution.",
    points: ["Le problème", "Un exemple précis", "Une question ou une demande"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pee-9",
    title: "La grève de demain",
    situation: "Il y a une grève des transports demain et votre chef vous écrit.",
    sourceMessage: {
      from: "M. Weber",
      subject: "Présence demain",
      body: "Bonjour,\nDemain, il y a une grève des transports publics.\nVous pouvez venir au travail ? Merci de me répondre.\nM. Weber",
    },
    instruction: "Répondez à M. Weber : dites comment vous venez au travail (à pied, à vélo, en voiture), donnez votre heure d'arrivée et remerciez-le pour son message.",
    points: ["Comment vous venez", "Votre heure d'arrivée", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pee-10",
    title: "Raconter un voyage en train",
    situation: "Votre grand-mère veut des nouvelles de votre voyage en train.",
    sourceMessage: {
      from: "Mamie Rose",
      subject: "Ton voyage",
      body: "Bonjour,\nTu as pris le train dimanche pour aller à Lausanne, non ?\nRaconte-moi ton voyage ! C'était bien ?\nMamie Rose",
    },
    instruction: "Répondez à Mamie Rose : racontez votre voyage en train, dites la durée du trajet et ce que vous avez vu par la fenêtre.",
    points: ["Votre voyage", "La durée du trajet", "Ce que vous avez vu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   E6.3 — Aller à l'aéroport
   ════════════════════════════════════════════════════════════════════════════ */

const E6_3_CE_EMAIL_TEXT = `De : Compagnie Air Bleu
Objet : Confirmation de votre vol

Bonjour,

Votre vol AB 324 pour Lisbonne est confirmé.
Le départ est le jeudi 12 juin à 14 h 40. L'arrivée est à 16 h 55.
L'enregistrement ouvre deux heures avant le départ, au comptoir 25.
La porte d'embarquement est la porte B12. Elle ferme trente minutes avant le vol.
Vous avez droit à un bagage cabine de huit kilos.
Pour une valise en soute, le prix est de cinquante francs.
N'oubliez pas votre passeport et votre carte d'embarquement.

Bon vol,
Compagnie Air Bleu`;

const E6_3_CE_EMAIL_POOL = buildExpressPool("e6-3-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quelle est la destination du vol ?",
    text: ["Lisbonne", "Lausanne", "Genève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre _________ AB 324 pour Lisbonne est confirmé.",
    fill: "vol",
    vfQ: "Le vol AB 324 va à Lisbonne.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel jour part l'avion ?",
    text: ["Le jeudi 12 juin", "Le vendredi 13 juin", "Le jeudi 12 juillet"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le départ est le jeudi 12 _________.",
    fill: "juin",
    vfQ: "L'avion part le jeudi 12 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure est le départ ?",
    text: ["À 14 h 40", "À 15 h 40", "À 14 h 15"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le départ est le jeudi 12 juin à 14 h _________.",
    fill: "40",
    fillA: ["quarante"],
    vfQ: "Le départ est à 15 h 40.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure arrive l'avion ?",
    text: ["À 16 h 55", "À 17 h 55", "À 16 h 15"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'arrivée est à 16 h _________.",
    fill: "55",
    fillA: ["cinquante-cinq"],
    vfQ: "L'avion arrive à 16 h 55.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quand ouvre l'enregistrement ?",
    text: [
      "Deux heures avant le départ",
      "Une heure avant le départ",
      "Trente minutes avant le départ",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'enregistrement ouvre _________ heures avant le départ.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "L'enregistrement ouvre une heure avant le départ.",
    vfC: 1,
  }),
  q({
    id: "cem-q6",
    textQ: "Où est l'enregistrement ?",
    text: ["Au comptoir 25", "Au comptoir 52", "À la porte B12"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'enregistrement ouvre deux heures avant le départ, au comptoir _________.",
    fill: "25",
    fillA: ["vingt-cinq"],
    vfQ: "L'enregistrement est au comptoir 25.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle est la porte d'embarquement ?",
    text: ["La porte B12", "La porte A3", "La porte C7"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La porte d'embarquement est la porte B_________.",
    fill: "12",
    fillA: ["douze"],
    vfQ: "La porte d'embarquement est la porte C7.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Quand ferme la porte d'embarquement ?",
    text: [
      "Trente minutes avant le vol",
      "Dix minutes avant le vol",
      "Une heure avant le vol",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Elle ferme _________ minutes avant le vol.",
    fill: "trente",
    fillA: ["30"],
    vfQ: "La porte ferme trente minutes avant le vol.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Combien pèse le bagage cabine au maximum ?",
    text: ["Huit kilos", "Dix kilos", "Vingt kilos"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez droit à un bagage cabine de _________ kilos.",
    fill: "huit",
    fillA: ["8"],
    vfQ: "Le bagage cabine peut peser douze kilos.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Combien coûte la valise en soute ?",
    text: ["Cinquante francs", "Quinze francs", "Elle est gratuite"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour une valise en soute, le prix est de _________ francs.",
    fill: "cinquante",
    fillA: ["50"],
    vfQ: "La valise en soute est gratuite.",
    vfC: 1,
  }),
]);

export const E6_3_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e6-3-ce-email",
  readingText: E6_3_CE_EMAIL_TEXT,
  questionPool: E6_3_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E6_3_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e6-3-pee-1",
    title: "Prévenir d'un retard de vol",
    situation: "Un ami vient vous chercher à l'aéroport, mais votre vol est retardé.",
    sourceMessage: {
      from: "Rui",
      subject: "Je viens te chercher",
      body: "Salut,\nJe viens te chercher à l'aéroport de Lisbonne.\nTon avion arrive à quelle heure ?\nRui",
    },
    instruction: "Répondez à Rui : dites que le vol a deux heures de retard, donnez la nouvelle heure d'arrivée et remerciez-le.",
    points: ["Le retard du vol", "La nouvelle heure d'arrivée", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pee-2",
    title: "Emmener une amie à l'aéroport",
    situation: "Votre amie part en avion jeudi matin et demande votre aide.",
    sourceMessage: {
      from: "Fatou",
      subject: "Départ jeudi matin",
      body: "Salut,\nJe pars jeudi matin en avion. Mon vol est à 9 h.\nTu peux m'emmener à l'aéroport en voiture ?\nFatou",
    },
    instruction: "Répondez à Fatou : acceptez, proposez une heure de départ et demandez où vous vous retrouvez.",
    points: ["Votre réponse", "L'heure de départ", "Le lieu de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pee-3",
    title: "Choisir sa place",
    situation: "La compagnie aérienne vous propose de choisir votre place.",
    sourceMessage: {
      from: "Compagnie Air Bleu",
      subject: "Choisissez votre place",
      body: "Bonjour,\nVous pouvez choisir votre place pour le vol AB 324.\nCôté hublot ou côté couloir ?\nRépondez à cet e-mail.\nCompagnie Air Bleu",
    },
    instruction: "Répondez à la compagnie : choisissez votre place, expliquez pourquoi et posez une question sur les bagages.",
    points: ["La place choisie", "Pourquoi", "Une question sur les bagages"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pee-4",
    title: "Décrire sa valise perdue",
    situation: "Votre valise n'est pas arrivée. Le service bagages vous écrit.",
    sourceMessage: {
      from: "Service bagages",
      subject: "Votre bagage",
      body: "Bonjour,\nVous avez déclaré un bagage perdu à l'arrivée.\nDécrivez votre valise, s'il vous plaît : couleur, taille, contenu.\nLe service bagages",
    },
    instruction: "Répondez au service bagages : décrivez votre valise, donnez votre numéro de vol et expliquez où envoyer la valise.",
    points: ["La description de la valise", "Le numéro du vol", "Où envoyer la valise"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pee-5",
    title: "Rassurer une amie",
    situation: "Votre amie prend l'avion pour la première fois et elle a peur.",
    sourceMessage: {
      from: "Alba",
      subject: "Mon premier avion !",
      body: "Coucou,\nJe prends l'avion pour la première fois le mois prochain. J'ai un peu peur !\nQu'est-ce que je dois faire à l'aéroport ?\nAlba",
    },
    instruction: "Répondez à Alba : expliquez les étapes à l'aéroport (enregistrement, sécurité, porte), donnez un conseil et rassurez-la.",
    points: ["Les étapes à l'aéroport", "Un conseil", "Une phrase pour rassurer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pee-6",
    title: "Vol annulé",
    situation: "La compagnie annule votre vol et vous propose deux solutions.",
    sourceMessage: {
      from: "Compagnie Air Bleu",
      subject: "Vol annulé",
      body: "Bonjour,\nVotre vol de vendredi est annulé.\nNous vous proposons un vol samedi à 10 h ou le remboursement du billet.\nCompagnie Air Bleu",
    },
    instruction: "Répondez à la compagnie : choisissez le nouveau vol ou le remboursement, expliquez pourquoi et posez une question.",
    points: ["Votre choix", "Pourquoi", "Une question"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pee-7",
    title: "Venir de l'aéroport",
    situation: "Un ami arrive samedi à l'aéroport de votre ville.",
    sourceMessage: {
      from: "Diego",
      subject: "J'arrive samedi",
      body: "Salut,\nJ'arrive samedi à 11 h 30 à l'aéroport de ta ville.\nComment est-ce que je viens chez toi ?\nDiego",
    },
    instruction: "Répondez à Diego : expliquez le trajet depuis l'aéroport (train ou bus), donnez le prix du billet et la durée du trajet.",
    points: ["Le trajet depuis l'aéroport", "Le prix du billet", "La durée du trajet"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pee-8",
    title: "Objet oublié dans l'avion",
    situation: "Vous avez oublié un objet dans l'avion. Le service des objets trouvés vous répond.",
    sourceMessage: {
      from: "Aéroport — objets trouvés",
      subject: "Votre demande",
      body: "Bonjour,\nVous avez oublié un objet dans l'avion ?\nDonnez-nous le numéro du vol, la date et une description de l'objet.\nLe service des objets trouvés",
    },
    instruction: "Répondez au service : donnez le numéro du vol et la date, décrivez l'objet oublié et demandez comment le récupérer.",
    points: ["Le vol et la date", "La description de l'objet", "Comment récupérer l'objet"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pee-9",
    title: "Réserver la navette de l'hôtel",
    situation: "Votre hôtel propose une navette gratuite depuis l'aéroport.",
    sourceMessage: {
      from: "Hôtel des Voyageurs",
      subject: "Navette aéroport",
      body: "Bonjour,\nNotre hôtel propose une navette gratuite depuis l'aéroport.\nVoulez-vous une place ? Donnez-nous votre heure d'arrivée.\nHôtel des Voyageurs",
    },
    instruction: "Répondez à l'hôtel : acceptez la navette, donnez votre numéro de vol et votre heure d'arrivée.",
    points: ["Votre accord", "Le numéro du vol", "L'heure d'arrivée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pee-10",
    title: "Raconter son vol",
    situation: "Votre père demande si vous êtes bien arrivé(e).",
    sourceMessage: {
      from: "Papa",
      subject: "Bien arrivé ?",
      body: "Bonjour,\nTon avion est bien arrivé ? Le voyage était bon ?\nRaconte-moi ! Maman t'embrasse.\nPapa",
    },
    instruction: "Répondez à votre père : dites que vous êtes bien arrivé(e), racontez le vol et décrivez le temps qu'il fait.",
    points: ["Vous êtes bien arrivé(e)", "Le vol", "Le temps qu'il fait"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

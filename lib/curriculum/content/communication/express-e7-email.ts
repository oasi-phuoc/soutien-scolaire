import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E7 — Séjours et loisirs (hôtel, sport, lieux culturels).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 50;
const PE_MAX = 120;

/* ════════════════════════════════════════════════════════════════════════════
   E7.1 — Aller à l'hôtel
   ════════════════════════════════════════════════════════════════════════════ */

const E7_1_CE_EMAIL_TEXT = `De : Hôtel Bellevue
Objet : Confirmation de votre réservation

Bonjour,

Nous confirmons votre réservation d'une chambre double pour deux nuits,
du vendredi 8 août au dimanche 10 août.
Le prix est de cent vingt francs par nuit, petit-déjeuner compris.
Le petit-déjeuner est servi de 7 h à 10 h, au premier étage.
Votre chambre est prête à partir de 15 h. Le jour du départ, laissez la chambre avant 11 h.
La piscine de l'hôtel est gratuite pour vous.
Le parking coûte douze francs par jour.
L'hôtel est à cinq minutes à pied de la gare.

Cordialement,
La réception de l'Hôtel Bellevue`;

const E7_1_CE_EMAIL_POOL = buildExpressPool("e7-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quelle chambre est réservée ?",
    text: ["Une chambre double", "Une chambre simple", "Une chambre familiale"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous confirmons votre réservation d'une chambre _________.",
    fill: "double",
    vfQ: "La réservation est pour une chambre double.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Combien de nuits dure le séjour ?",
    text: ["Deux nuits", "Trois nuits", "Une nuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La réservation est pour _________ nuits.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "La réservation est pour cinq nuits.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le prix de la chambre par nuit ?",
    text: ["Cent vingt francs", "Cent francs", "Deux cents francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est de cent vingt _________ par nuit.",
    fill: "francs",
    vfQ: "La chambre coûte cent vingt francs par nuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Le petit-déjeuner est-il compris dans le prix ?",
    text: [
      "Oui, il est compris",
      "Non, il coûte dix francs en plus",
      "Il n'y a pas de petit-déjeuner",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est de cent vingt francs par nuit, petit-déjeuner _________.",
    fill: "compris",
    vfQ: "Le petit-déjeuner coûte dix francs en plus.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Quand est servi le petit-déjeuner ?",
    text: ["De 7 h à 10 h", "De 6 h à 9 h", "De 8 h à 11 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le petit-déjeuner est servi de 7 h à _________ h.",
    fill: "10",
    fillA: ["dix", "10 h"],
    vfQ: "Le petit-déjeuner est servi de 7 h à 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où est servi le petit-déjeuner ?",
    text: ["Au premier étage", "Dans la chambre", "Au bord de la piscine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le petit-déjeuner est servi au _________ étage.",
    fill: "premier",
    fillA: ["1er", "1"],
    vfQ: "Le petit-déjeuner est servi dans la chambre.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "À partir de quelle heure la chambre est-elle prête ?",
    text: ["À partir de 15 h", "À partir de 12 h", "À partir de 18 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre chambre est prête à partir de _________ h.",
    fill: "15",
    fillA: ["quinze", "15 h"],
    vfQ: "La chambre est prête à partir de 15 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Avant quelle heure faut-il laisser la chambre ?",
    text: ["Avant 11 h", "Avant 14 h", "Avant 9 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le jour du départ, laissez la chambre avant _________ h.",
    fill: "11",
    fillA: ["onze", "11 h"],
    vfQ: "Il faut laisser la chambre avant 14 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Combien coûte le parking ?",
    text: ["Douze francs par jour", "Il est gratuit", "Vingt francs par jour"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le parking coûte _________ francs par jour.",
    fill: "douze",
    fillA: ["12"],
    vfQ: "Le parking est gratuit.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "La piscine est-elle payante ?",
    text: ["Non, elle est gratuite", "Oui, cinq francs", "Il n'y a pas de piscine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La piscine de l'hôtel est _________ pour vous.",
    fill: "gratuite",
    vfQ: "La piscine de l'hôtel est gratuite.",
    vfC: 0,
  }),
]);

export const E7_1_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e7-1-ce-email",
  readingText: E7_1_CE_EMAIL_TEXT,
  questionPool: E7_1_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E7_1_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e7-1-pee-1",
    title: "Confirmer sa réservation",
    situation: "L'hôtel vous demande de confirmer les dates de votre séjour.",
    sourceMessage: {
      from: "Hôtel Bellevue",
      subject: "Votre réservation",
      body: "Bonjour,\nNous avons bien reçu votre demande pour une chambre double en août.\nPouvez-vous confirmer les dates de votre séjour ?\nLa réception",
    },
    instruction: "Répondez à l'hôtel : confirmez les dates, dites combien de personnes viennent et posez une question sur le parking.",
    points: ["Les dates du séjour", "Le nombre de personnes", "Une question sur le parking"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pee-2",
    title: "Donner son heure d'arrivée",
    situation: "L'hôtel veut connaître votre heure d'arrivée vendredi.",
    sourceMessage: {
      from: "Hôtel Bellevue",
      subject: "Votre arrivée",
      body: "Bonjour,\nVotre chambre est prête à partir de 15 h.\nÀ quelle heure arrivez-vous vendredi ?\nLa réception",
    },
    instruction: "Répondez à l'hôtel : donnez votre heure d'arrivée, dites comment vous venez (train, voiture) et demandez le chemin depuis la gare.",
    points: ["Votre heure d'arrivée", "Votre moyen de transport", "Une question sur le chemin"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pee-3",
    title: "Annuler une réservation",
    situation: "Vous ne pouvez plus partir en week-end. L'hôtel vous écrit.",
    sourceMessage: {
      from: "Hôtel du Lac",
      subject: "Votre séjour du 12 au 14 juillet",
      body: "Bonjour,\nNous vous attendons du 12 au 14 juillet.\nVoulez-vous ajouter le petit-déjeuner à votre réservation ?\nL'équipe de l'hôtel",
    },
    instruction: "Répondez à l'hôtel : excusez-vous, annulez votre réservation et expliquez pourquoi.",
    points: ["Une excuse", "L'annulation", "La raison"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pee-4",
    title: "Demander des informations",
    situation: "Vous cherchez un hôtel pour vos vacances et vous avez des questions.",
    sourceMessage: {
      from: "Hôtel des Montagnes",
      subject: "Votre demande",
      body: "Bonjour,\nMerci pour votre message. Que voulez-vous savoir sur notre hôtel ?\nNous répondons avec plaisir à vos questions.\nLa réception",
    },
    instruction: "Répondez à l'hôtel : demandez le prix d'une chambre double, les horaires du petit-déjeuner et si l'hôtel accepte les chiens.",
    points: ["Le prix de la chambre", "Le petit-déjeuner", "Les animaux"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pee-5",
    title: "Faire une réclamation",
    situation: "Votre chambre était bruyante et la douche était froide. L'hôtel demande votre avis.",
    sourceMessage: {
      from: "Hôtel Bellevue",
      subject: "Votre séjour",
      body: "Bonjour,\nVous avez passé deux nuits chez nous le week-end dernier.\nComment était votre séjour ?\nLa réception",
    },
    instruction: "Répondez à l'hôtel : expliquez les problèmes de la chambre (bruit, douche froide), restez poli(e) et demandez une réduction pour la prochaine fois.",
    points: ["Les problèmes de la chambre", "Une formule polie", "Votre demande"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pee-6",
    title: "Objet oublié à l'hôtel",
    situation: "L'hôtel a trouvé un objet dans votre chambre après votre départ.",
    sourceMessage: {
      from: "Hôtel du Lac",
      subject: "Objet trouvé",
      body: "Bonjour,\nNous avons trouvé un objet dans votre chambre après votre départ.\nPouvez-vous le décrire ?\nLa réception",
    },
    instruction: "Répondez à l'hôtel : décrivez l'objet oublié, remerciez et demandez comment le recevoir.",
    points: ["La description de l'objet", "Un remerciement", "Comment recevoir l'objet"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pee-7",
    title: "Conseiller un hôtel",
    situation: "Une amie cherche un hôtel pas trop cher dans votre région.",
    sourceMessage: {
      from: "Yuki",
      subject: "Un hôtel pour mes vacances",
      body: "Coucou,\nJe viens dans ta région cet été. Tu connais un bon hôtel pas trop cher ?\nMerci !\nYuki",
    },
    instruction: "Répondez à Yuki : conseillez un hôtel, donnez le prix et expliquez où il se trouve.",
    points: ["L'hôtel conseillé", "Le prix", "Où il se trouve"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pee-8",
    title: "Hôtel complet",
    situation: "L'hôtel est complet aux dates choisies et propose d'autres dates.",
    sourceMessage: {
      from: "Hôtel Bellevue",
      subject: "Hôtel complet",
      body: "Bonjour,\nNous sommes désolés : l'hôtel est complet du 8 au 10 août.\nNous avons des chambres libres du 15 au 17 août.\nLa réception",
    },
    instruction: "Répondez à l'hôtel : dites si les nouvelles dates vous conviennent, posez une question sur le prix et remerciez.",
    points: ["Votre réponse sur les dates", "Une question sur le prix", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pee-9",
    title: "Réserver pour la famille",
    situation: "Votre mère vous demande de réserver un hôtel pour un mariage.",
    sourceMessage: {
      from: "Maman",
      subject: "Hôtel pour le mariage",
      body: "Bonjour,\nPour le mariage de ta cousine, il nous faut un hôtel pour deux nuits.\nTu peux réserver pour nous ? Nous sommes quatre.\nMaman",
    },
    instruction: "Répondez à votre mère : acceptez, expliquez quel hôtel vous choisissez et donnez le prix des chambres.",
    points: ["Votre accord", "L'hôtel choisi", "Le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pee-10",
    title: "Remercier après le séjour",
    situation: "Après votre séjour, l'hôtel vous demande votre avis.",
    sourceMessage: {
      from: "Hôtel du Soleil",
      subject: "Merci de votre visite",
      body: "Bonjour,\nMerci pour votre séjour chez nous !\nVotre avis est important : comment était votre chambre ?\nÀ bientôt,\nL'équipe de l'hôtel",
    },
    instruction: "Répondez à l'hôtel : remerciez l'équipe, dites ce que vous avez aimé (chambre, petit-déjeuner, piscine) et dites si vous voulez revenir.",
    points: ["Un remerciement", "Ce que vous avez aimé", "Si vous voulez revenir"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   E7.2 — Pratiquer une activité sportive
   ════════════════════════════════════════════════════════════════════════════ */

const E7_2_CE_EMAIL_TEXT = `De : Club Sportif Tonic
Objet : Votre inscription au cours de natation

Bonjour,

Votre inscription au cours de natation pour débutants est confirmée.
Les cours ont lieu le mardi et le jeudi, de 18 h à 19 h, à la piscine municipale.
Le premier cours est le mardi 3 septembre.
Le prix est de quarante francs par mois.
Apportez votre maillot de bain, un bonnet et une serviette.
Les vestiaires ouvrent trente minutes avant le cours.
Votre carte de membre vous attend à la réception du club.

Sportivement,
Le Club Sportif Tonic`;

const E7_2_CE_EMAIL_POOL = buildExpressPool("e7-2-ce-email", [
  q({
    id: "cem-q1",
    textQ: "À quel cours la personne est-elle inscrite ?",
    text: [
      "Au cours de natation pour débutants",
      "Au cours de tennis",
      "Au cours de gymnastique",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre inscription au cours de _________ pour débutants est confirmée.",
    fill: "natation",
    vfQ: "L'inscription est pour un cours de natation.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quels jours ont lieu les cours ?",
    text: ["Le mardi et le jeudi", "Le lundi et le mercredi", "Le samedi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les cours ont lieu le mardi et le _________.",
    fill: "jeudi",
    vfQ: "Les cours ont lieu le lundi et le mercredi.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure commence le cours ?",
    text: ["À 18 h", "À 19 h", "À 17 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les cours ont lieu de _________ h à 19 h.",
    fill: "18",
    fillA: ["dix-huit", "18 h"],
    vfQ: "Le cours commence à 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ont lieu les cours ?",
    text: ["À la piscine municipale", "Au bord du lac", "Dans la salle de gym"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les cours ont lieu à la _________ municipale.",
    fill: "piscine",
    vfQ: "Les cours ont lieu au bord du lac.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Quand est le premier cours ?",
    text: ["Le mardi 3 septembre", "Le jeudi 5 septembre", "Le mardi 3 octobre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le premier cours est le mardi 3 _________.",
    fill: "septembre",
    vfQ: "Le premier cours est le mardi 3 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Combien coûte le cours par mois ?",
    text: ["Quarante francs", "Soixante francs", "Vingt francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est de _________ francs par mois.",
    fill: "quarante",
    fillA: ["40"],
    vfQ: "Le cours coûte soixante francs par mois.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Qu'est-ce qu'il faut apporter ?",
    text: [
      "Un maillot de bain, un bonnet et une serviette",
      "Des chaussures de sport",
      "Un ballon et une raquette",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Apportez votre maillot de bain, un bonnet et une _________.",
    fill: "serviette",
    vfQ: "Il faut apporter un bonnet.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Quand ouvrent les vestiaires ?",
    text: [
      "Trente minutes avant le cours",
      "Cinq minutes avant le cours",
      "Une heure avant le cours",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les vestiaires ouvrent _________ minutes avant le cours.",
    fill: "trente",
    fillA: ["30"],
    vfQ: "Les vestiaires ouvrent cinq minutes avant le cours.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Où est la carte de membre ?",
    text: ["À la réception du club", "Dans la boîte aux lettres", "À la piscine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre carte de membre vous attend à la _________ du club.",
    fill: "réception",
    fillA: ["reception"],
    vfQ: "La carte de membre est à la réception du club.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Combien de temps dure le cours ?",
    text: ["Une heure", "Deux heures", "Trente minutes"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les cours ont lieu de 18 h à _________ h.",
    fill: "19",
    fillA: ["dix-neuf", "19 h"],
    vfQ: "Le cours dure deux heures.",
    vfC: 1,
  }),
]);

export const E7_2_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e7-2-ce-email",
  readingText: E7_2_CE_EMAIL_TEXT,
  questionPool: E7_2_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E7_2_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e7-2-pee-1",
    title: "Confirmer son inscription",
    situation: "Le club de sport confirme votre inscription.",
    sourceMessage: {
      from: "Club Sportif Tonic",
      subject: "Bienvenue au club !",
      body: "Bonjour,\nVotre inscription est confirmée. Le premier cours est mardi à 18 h.\nÀ bientôt !\nLe Club Sportif Tonic",
    },
    instruction: "Répondez au club : remerciez, confirmez votre présence mardi et demandez ce qu'il faut apporter.",
    points: ["Un remerciement", "Votre présence mardi", "Une question sur l'équipement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pee-2",
    title: "Courir avec un ami",
    situation: "Un ami vous propose de courir samedi matin.",
    sourceMessage: {
      from: "Louis",
      subject: "On court samedi ?",
      body: "Salut,\nJe vais courir samedi matin au bord du lac.\nTu viens avec moi ?\nLouis",
    },
    instruction: "Répondez à Louis : acceptez, proposez une heure et un lieu de rendez-vous.",
    points: ["Votre réponse", "L'heure", "Le lieu de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pee-3",
    title: "Cours annulé",
    situation: "Le club annule votre cours de natation de jeudi.",
    sourceMessage: {
      from: "Club Sportif Tonic",
      subject: "Cours annulé",
      body: "Bonjour,\nLe cours de natation de jeudi est annulé : la piscine est en travaux.\nMerci de votre compréhension.\nLe club",
    },
    instruction: "Répondez au club : demandez quand le cours reprend, s'il y a un cours de remplacement et si vous payez ce cours.",
    points: ["Quand le cours reprend", "Un cours de remplacement", "Une question sur le paiement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pee-4",
    title: "Demander des informations",
    situation: "Vous voulez commencer le tennis et le club vous répond.",
    sourceMessage: {
      from: "Club de Tennis des Prés",
      subject: "Votre message",
      body: "Bonjour,\nMerci pour votre intérêt pour notre club de tennis.\nQue voulez-vous savoir ?\nLe club de tennis",
    },
    instruction: "Répondez au club : demandez le prix de l'inscription, les horaires des cours pour débutants et l'équipement nécessaire.",
    points: ["Le prix de l'inscription", "Les horaires débutants", "L'équipement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pee-5",
    title: "Annuler son abonnement",
    situation: "Votre abonnement de fitness se termine et vous ne voulez pas le renouveler.",
    sourceMessage: {
      from: "Fitness Plus",
      subject: "Votre abonnement",
      body: "Bonjour,\nVotre abonnement annuel se termine à la fin du mois.\nVoulez-vous le renouveler ?\nFitness Plus",
    },
    instruction: "Répondez au club : dites que vous ne renouvelez pas, expliquez pourquoi (déménagement, travail) et remerciez.",
    points: ["Votre décision", "La raison", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pee-6",
    title: "Parler de son sport",
    situation: "Une amie veut commencer un sport et vous demande conseil.",
    sourceMessage: {
      from: "Emma",
      subject: "Ton sport",
      body: "Coucou,\nJe veux commencer un sport, mais je ne sais pas quoi choisir.\nToi, tu fais quel sport ? C'est bien ?\nEmma",
    },
    instruction: "Répondez à Emma : dites quel sport vous faites, quand vous vous entraînez et pourquoi vous aimez ce sport.",
    points: ["Votre sport", "Vos horaires d'entraînement", "Pourquoi vous aimez ce sport"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pee-7",
    title: "S'excuser d'une absence",
    situation: "Vous étiez absent(e) au cours de mardi et le coach vous écrit.",
    sourceMessage: {
      from: "Coach Martin",
      subject: "Votre absence",
      body: "Bonjour,\nVous n'étiez pas au cours mardi soir.\nTout va bien ?\nCoach Martin",
    },
    instruction: "Répondez au coach : excusez-vous, expliquez pourquoi vous étiez absent(e) et dites quand vous revenez.",
    points: ["Une excuse", "La raison de l'absence", "Quand vous revenez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pee-8",
    title: "Louer un vélo",
    situation: "Un magasin de location de vélos vous répond.",
    sourceMessage: {
      from: "Location Vélo Soleil",
      subject: "Votre demande de location",
      body: "Bonjour,\nNous louons des vélos pour la journée (25 francs) ou la demi-journée (15 francs).\nQue voulez-vous réserver ?\nVélo Soleil",
    },
    instruction: "Répondez au magasin : choisissez une location, donnez le jour et demandez si un casque est compris.",
    points: ["La location choisie", "Le jour", "Une question sur le casque"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pee-9",
    title: "Conseiller sa sœur",
    situation: "Votre sœur veut faire du sport près de chez vous.",
    sourceMessage: {
      from: "Lina",
      subject: "Je veux bouger !",
      body: "Salut,\nJe veux faire du sport près de chez toi. Ton club est bien ?\nC'est cher ? Il y a des cours pour débutants ?\nLina",
    },
    instruction: "Répondez à Lina : décrivez votre club, donnez le prix et les horaires des cours pour débutants.",
    points: ["Votre club", "Le prix", "Les horaires débutants"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pee-10",
    title: "Journée portes ouvertes",
    situation: "Le club organise une journée portes ouvertes samedi.",
    sourceMessage: {
      from: "Club Sportif Tonic",
      subject: "Journée portes ouvertes",
      body: "Bonjour,\nSamedi, le club organise une journée portes ouvertes de 10 h à 17 h.\nTous les cours sont gratuits ce jour-là. Venez nombreux !\nLe club",
    },
    instruction: "Répondez au club : dites que vous venez, posez une question sur le programme et dites que vous venez avec un ami.",
    points: ["Votre présence", "Une question sur le programme", "Votre ami"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   E7.3 — Visiter des lieux culturels
   ════════════════════════════════════════════════════════════════════════════ */

const E7_3_CE_EMAIL_TEXT = `De : Musée des Beaux-Arts
Objet : Nouvelle exposition de photographies

Bonjour,

Notre nouvelle exposition de photographies commence le samedi 1er mai et dure jusqu'au 30 juin.
Le musée est ouvert du mardi au dimanche, de 10 h à 18 h. Il est fermé le lundi.
Le billet coûte quinze francs. Le tarif réduit pour les étudiants est de dix francs.
L'entrée est gratuite pour les enfants de moins de douze ans.
Une visite guidée a lieu chaque samedi à 14 h. Elle dure une heure.
Pour la visite guidée, réservez sur notre site internet.

À bientôt au musée,
Le Musée des Beaux-Arts`;

const E7_3_CE_EMAIL_POOL = buildExpressPool("e7-3-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Qu'est-ce qui commence le 1er mai ?",
    text: [
      "Une exposition de photographies",
      "Un concert",
      "Un cours de peinture",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Notre nouvelle exposition de _________ commence le samedi 1er mai.",
    fill: "photographies",
    vfQ: "L'exposition commence le 1er mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Jusqu'à quand dure l'exposition ?",
    text: ["Jusqu'au 30 juin", "Jusqu'au 30 septembre", "Jusqu'au 15 mai"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'exposition dure jusqu'au 30 _________.",
    fill: "juin",
    vfQ: "L'exposition dure jusqu'au 30 septembre.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Quels jours le musée est-il ouvert ?",
    text: ["Du mardi au dimanche", "Tous les jours", "Du lundi au vendredi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le musée est ouvert du _________ au dimanche.",
    fill: "mardi",
    vfQ: "Le musée est ouvert le lundi.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ferme le musée ?",
    text: ["À 18 h", "À 17 h", "À 20 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le musée est ouvert de 10 h à _________ h.",
    fill: "18",
    fillA: ["dix-huit", "18 h"],
    vfQ: "Le musée ferme à 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Combien coûte le billet ?",
    text: ["Quinze francs", "Dix francs", "Vingt francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le billet coûte _________ francs.",
    fill: "quinze",
    fillA: ["15"],
    vfQ: "Le billet coûte quinze francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est le tarif réduit pour les étudiants ?",
    text: ["Dix francs", "Douze francs", "Cinq francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le tarif réduit pour les étudiants est de _________ francs.",
    fill: "dix",
    fillA: ["10"],
    vfQ: "Les étudiants paient douze francs.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Pour qui l'entrée est-elle gratuite ?",
    text: [
      "Pour les enfants de moins de douze ans",
      "Pour les étudiants",
      "Pour tout le monde le samedi",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'entrée est gratuite pour les enfants de moins de _________ ans.",
    fill: "douze",
    fillA: ["12"],
    vfQ: "L'entrée est gratuite pour les enfants de moins de douze ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Quand a lieu la visite guidée ?",
    text: [
      "Chaque samedi à 14 h",
      "Chaque dimanche à 10 h",
      "Tous les jours à 16 h",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Une visite guidée a lieu chaque _________ à 14 h.",
    fill: "samedi",
    vfQ: "La visite guidée a lieu le dimanche.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Combien de temps dure la visite guidée ?",
    text: ["Une heure", "Deux heures", "Trente minutes"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La visite guidée dure une _________.",
    fill: "heure",
    vfQ: "La visite guidée dure une heure.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Comment réserver la visite guidée ?",
    text: [
      "Sur le site internet du musée",
      "Par téléphone seulement",
      "À la caisse seulement",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour la visite guidée, réservez sur notre _________ internet.",
    fill: "site",
    vfQ: "On réserve la visite guidée sur le site internet du musée.",
    vfC: 0,
  }),
]);

export const E7_3_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e7-3-ce-email",
  readingText: E7_3_CE_EMAIL_TEXT,
  questionPool: E7_3_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E7_3_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e7-3-pee-1",
    title: "Réserver une visite guidée",
    situation: "Le musée propose une visite guidée le samedi.",
    sourceMessage: {
      from: "Musée des Beaux-Arts",
      subject: "Visite guidée du samedi",
      body: "Bonjour,\nLa visite guidée a lieu chaque samedi à 14 h.\nVoulez-vous réserver des places ?\nLe musée",
    },
    instruction: "Répondez au musée : réservez deux places pour samedi, donnez les noms des visiteurs et demandez le prix.",
    points: ["La réservation", "Les noms des visiteurs", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pee-2",
    title: "Sortie au musée",
    situation: "Une amie vous propose une sortie au musée dimanche.",
    sourceMessage: {
      from: "Chloé",
      subject: "Musée dimanche ?",
      body: "Salut,\nIl y a une nouvelle exposition de photographies au musée.\nOn y va dimanche ?\nChloé",
    },
    instruction: "Répondez à Chloé : acceptez, proposez une heure et posez une question sur les billets.",
    points: ["Votre réponse", "L'heure", "Une question sur les billets"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pee-3",
    title: "Demander les tarifs",
    situation: "Vous voulez visiter le Musée d'Histoire et vous avez des questions.",
    sourceMessage: {
      from: "Musée d'Histoire",
      subject: "Votre question",
      body: "Bonjour,\nMerci pour votre message. Que voulez-vous savoir sur nos tarifs ?\nLe Musée d'Histoire",
    },
    instruction: "Répondez au musée : demandez le prix du billet, le tarif réduit pour les étudiants et les horaires du dimanche.",
    points: ["Le prix du billet", "Le tarif étudiant", "Les horaires du dimanche"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pee-4",
    title: "Répondre à l'office du tourisme",
    situation: "L'office du tourisme vous envoie des idées de visite pour le week-end.",
    sourceMessage: {
      from: "Office du tourisme",
      subject: "Votre week-end en ville",
      body: "Bonjour,\nVoici nos idées pour votre week-end : le château, le musée d'art et le vieux quartier.\nBonne visite !\nL'office du tourisme",
    },
    instruction: "Répondez à l'office du tourisme : remerciez, choisissez une visite et posez deux questions (horaires, billets).",
    points: ["Un remerciement", "Votre choix", "Deux questions"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pee-5",
    title: "Visite complète",
    situation: "La visite guidée du château est complète samedi.",
    sourceMessage: {
      from: "Château de Valmont",
      subject: "Visite complète",
      body: "Bonjour,\nLa visite guidée de samedi à 15 h est complète.\nIl reste des places dimanche à 10 h et à 14 h.\nLe château",
    },
    instruction: "Répondez au château : choisissez une nouvelle heure, dites combien de personnes viennent et remerciez.",
    points: ["La nouvelle heure", "Le nombre de personnes", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pee-6",
    title: "Raconter une exposition",
    situation: "Une amie veut savoir comment était l'exposition.",
    sourceMessage: {
      from: "Nora",
      subject: "L'exposition",
      body: "Coucou,\nTu as visité la nouvelle exposition au musée, non ?\nC'était comment ? Raconte-moi !\nNora",
    },
    instruction: "Répondez à Nora : racontez votre visite, dites ce que vous avez préféré et conseillez (ou non) l'exposition.",
    points: ["Votre visite", "Ce que vous avez préféré", "Votre conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pee-7",
    title: "Annuler des places de théâtre",
    situation: "Vous ne pouvez plus aller au théâtre vendredi.",
    sourceMessage: {
      from: "Théâtre Municipal",
      subject: "Vos places de vendredi",
      body: "Bonjour,\nNous confirmons vos deux places pour la pièce de vendredi à 20 h.\nÀ bientôt !\nLe Théâtre Municipal",
    },
    instruction: "Répondez au théâtre : excusez-vous, annulez vos places et demandez si un remboursement est possible.",
    points: ["Une excuse", "L'annulation", "Une question sur le remboursement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pee-8",
    title: "Billets non reçus",
    situation: "Vous avez commandé des e-billets, mais vous ne les avez pas reçus.",
    sourceMessage: {
      from: "Cinéma Le Rex",
      subject: "Votre commande de e-billets",
      body: "Bonjour,\nMerci pour votre commande de deux e-billets pour la séance de 20 h.\nBon film !\nCinéma Le Rex",
    },
    instruction: "Répondez au cinéma : dites que vous n'avez pas reçu les e-billets, donnez la date de la séance et demandez de les envoyer à nouveau.",
    points: ["Le problème", "La date de la séance", "Votre demande"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pee-9",
    title: "Visite avec la grand-mère",
    situation: "Vous voulez visiter le musée avec votre grand-mère.",
    sourceMessage: {
      from: "Musée des Beaux-Arts",
      subject: "Réductions",
      body: "Bonjour,\nNous proposons un tarif réduit pour les étudiants et les séniors.\nAvez-vous des questions ?\nLe musée",
    },
    instruction: "Répondez au musée : dites que vous venez avec votre grand-mère, demandez le tarif sénior et les horaires de la visite guidée.",
    points: ["Votre visite avec votre grand-mère", "Le tarif sénior", "Les horaires de la visite guidée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pee-10",
    title: "Conseiller des visites",
    situation: "Une amie passe trois jours dans votre ville et cherche des idées.",
    sourceMessage: {
      from: "Karla",
      subject: "Trois jours dans ta ville",
      body: "Salut,\nJe passe trois jours dans ta ville le mois prochain.\nQu'est-ce que je peux visiter ?\nKarla",
    },
    instruction: "Répondez à Karla : conseillez deux lieux culturels, donnez les prix et expliquez comment y aller.",
    points: ["Deux lieux à visiter", "Les prix", "Comment y aller"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

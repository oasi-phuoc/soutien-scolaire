import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E5 — Santé (médecin, pharmacie).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 50;
const PE_MAX = 120;

/* ════════════════════════════════════════════════════════════════════════════
   E5.1 — Aller chez le médecin
   ════════════════════════════════════════════════════════════════════════════ */

const E5_1_CE_EMAIL_TEXT = `De : Cabinet médical du Dr Morel
Objet : Confirmation de votre rendez-vous

Bonjour,

Nous confirmons votre rendez-vous avec le Dr Morel le mardi 14 mars à 10 h 30.
Merci d'arriver dix minutes en avance. Le cabinet est au deuxième étage, porte 5.
Apportez votre carte d'assurance et la liste de vos médicaments.
Si vous ne pouvez pas venir, appelez-nous au moins 24 heures avant le rendez-vous.
Le secrétariat est ouvert du lundi au vendredi, de 8 h à 17 h.

Cordialement,
Le secrétariat du cabinet`;

const E5_1_CE_EMAIL_POOL = buildExpressPool("e5-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel jour est le rendez-vous ?",
    text: ["Le mardi 14 mars", "Le mercredi 15 mars", "Le vendredi 17 mars"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le rendez-vous est le mardi 14 _________.",
    fill: "mars",
    vfQ: "Le rendez-vous est le mardi 14 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["À 10 h 30", "À 9 h 30", "À 11 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le rendez-vous est à 10 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "Le rendez-vous est à 11 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand faut-il arriver au cabinet ?",
    text: ["Dix minutes en avance", "Une heure en avance", "Juste à l'heure"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci d'arriver dix _________ en avance.",
    fill: "minutes",
    vfQ: "Il faut arriver dix minutes en avance.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où se trouve le cabinet ?",
    text: ["Au deuxième étage", "Au rez-de-chaussée", "Au cinquième étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le cabinet est au _________ étage.",
    fill: "deuxième",
    fillA: ["2e", "2ème", "2"],
    vfQ: "Le cabinet est au premier étage.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Qu'est-ce qu'il faut apporter ?",
    text: [
      "La carte d'assurance et la liste des médicaments",
      "Le passeport et une photo",
      "Le carnet de famille",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Apportez votre carte d'_________.",
    fill: "assurance",
    vfQ: "Il faut apporter sa carte d'assurance.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faire si on ne peut pas venir ?",
    text: [
      "Appeler au moins 24 heures avant",
      "Envoyer une lettre",
      "Venir un autre jour sans prévenir",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Appelez-nous au moins _________ heures avant le rendez-vous.",
    fill: "24",
    fillA: ["vingt-quatre"],
    vfQ: "On peut annuler une heure avant le rendez-vous.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Quels jours le secrétariat est-il ouvert ?",
    text: ["Du lundi au vendredi", "Tous les jours", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le secrétariat est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le secrétariat est ouvert le samedi.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "À quelle heure ferme le secrétariat ?",
    text: ["À 17 h", "À 18 h", "À 19 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le secrétariat est ouvert de 8 h à _________ h.",
    fill: "17",
    fillA: ["dix-sept", "17 h"],
    vfQ: "Le secrétariat ferme à 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Quelle est la porte du cabinet ?",
    text: ["La porte 5", "La porte 3", "La porte 12"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le cabinet est au deuxième étage, porte _________.",
    fill: "5",
    fillA: ["cinq"],
    vfQ: "Le cabinet est à la porte 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Le secrétariat du cabinet", "Le pharmacien", "L'assurance maladie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cet e-mail vient du _________ du cabinet.",
    fill: "secrétariat",
    fillA: ["secretariat"],
    vfQ: "Cet e-mail vient du cabinet du Dr Morel.",
    vfC: 0,
  }),
]);

export const E5_1_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e5-1-ce-email",
  readingText: E5_1_CE_EMAIL_TEXT,
  questionPool: E5_1_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E5_1_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e5-1-pee-1",
    title: "Confirmer un rendez-vous",
    situation: "Le cabinet médical vous propose un rendez-vous par e-mail.",
    sourceMessage: {
      from: "Cabinet du Dr Morel",
      subject: "Proposition de rendez-vous",
      body: "Bonjour,\nNous pouvons vous proposer un rendez-vous le jeudi 21 mars à 9 h ou le vendredi 22 mars à 16 h.\nQuelle date vous convient ?\nLe secrétariat",
    },
    instruction: "Répondez à l'e-mail : choisissez une date, remerciez et posez une question sur les documents à apporter.",
    points: ["La date choisie", "Un remerciement", "Une question sur les documents"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pee-2",
    title: "Décrire ses symptômes",
    situation: "Avant la consultation, le médecin vous demande des informations.",
    sourceMessage: {
      from: "Dr Morel",
      subject: "Avant votre visite",
      body: "Bonjour,\nAvant votre visite, pouvez-vous décrire vos symptômes ?\nDepuis quand êtes-vous malade ? Avez-vous de la fièvre ?\nMerci,\nDr Morel",
    },
    instruction: "Répondez à l'e-mail : décrivez vos symptômes, dites depuis quand vous êtes malade et ce que vous avez déjà pris.",
    points: ["Vos symptômes", "Depuis quand", "Ce que vous avez déjà pris"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pee-3",
    title: "Rassurer un ami",
    situation: "Votre ami sait que vous êtes allé(e) chez le médecin et il s'inquiète.",
    sourceMessage: {
      from: "Karim",
      subject: "Comment vas-tu ?",
      body: "Salut !\nTu es allé chez le médecin hier, non ? Qu'est-ce qu'il t'a dit ?\nJ'espère que ce n'est pas grave. Donne-moi vite de tes nouvelles !\nKarim",
    },
    instruction: "Répondez à Karim : racontez la visite, dites ce que le médecin a dit et rassurez votre ami.",
    points: ["La visite chez le médecin", "Les conseils du médecin", "Une phrase pour rassurer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pee-4",
    title: "Déplacer un rendez-vous",
    situation: "Le cabinet vous informe que le médecin est absent.",
    sourceMessage: {
      from: "Cabinet du Dr Morel",
      subject: "Rendez-vous annulé",
      body: "Bonjour,\nLe Dr Morel est malade. Votre rendez-vous de mardi est annulé.\nPouvez-vous venir jeudi à 14 h ou vendredi à 10 h ?\nLe secrétariat",
    },
    instruction: "Répondez au secrétariat : choisissez un nouveau rendez-vous et expliquez pourquoi cette date vous convient.",
    points: ["La nouvelle date choisie", "Pourquoi cette date", "Une formule de politesse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pee-5",
    title: "Prévenir son chef",
    situation: "Vous êtes malade et vous avez rendez-vous chez le médecin demain matin.",
    sourceMessage: {
      from: "Mme Favre",
      subject: "Réunion de demain",
      body: "Bonjour,\nLa réunion d'équipe a lieu demain à 9 h. Merci de confirmer votre présence.\nBonne journée,\nMme Favre",
    },
    instruction: "Répondez à votre cheffe : excusez-vous, expliquez que vous êtes malade et que vous avez rendez-vous chez le médecin.",
    points: ["L'excuse", "Le rendez-vous chez le médecin", "Quand vous revenez au travail"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pee-6",
    title: "Demander un certificat médical",
    situation: "L'école de votre fils demande un document.",
    sourceMessage: {
      from: "École des Vergers",
      subject: "Absence de votre fils",
      body: "Bonjour,\nVotre fils a manqué l'école trois jours. Merci de nous envoyer un certificat médical.\nCordialement,\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : expliquez la maladie de votre fils et dites quand vous apportez le certificat du médecin.",
    points: ["La maladie de votre fils", "La visite chez le médecin", "Quand vous apportez le certificat"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pee-7",
    title: "Demander des informations",
    situation: "Une amie vous conseille son médecin.",
    sourceMessage: {
      from: "Sofia",
      subject: "Mon médecin",
      body: "Coucou,\nTu cherches un médecin ? Le mien est très gentil. Il parle français et anglais.\nTu veux ses coordonnées ?\nSofia",
    },
    instruction: "Répondez à Sofia : remerciez-la et posez des questions sur le médecin (adresse, horaires, prix).",
    points: ["Un remerciement", "Deux questions sur le médecin", "Pourquoi vous cherchez un médecin"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pee-8",
    title: "Répondre au rappel de vaccin",
    situation: "Le cabinet médical vous envoie un rappel.",
    sourceMessage: {
      from: "Cabinet du Dr Morel",
      subject: "Rappel de vaccin",
      body: "Bonjour,\nVotre vaccin contre la grippe est à faire ce mois-ci.\nVoulez-vous prendre un rendez-vous ?\nLe secrétariat",
    },
    instruction: "Répondez au secrétariat : acceptez, proposez deux dates possibles et posez une question sur le vaccin.",
    points: ["Votre accord", "Deux dates possibles", "Une question sur le vaccin"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pee-9",
    title: "Donner des nouvelles à sa famille",
    situation: "Votre sœur s'inquiète pour votre santé.",
    sourceMessage: {
      from: "Leila",
      subject: "Ta santé",
      body: "Salut,\nMaman m'a dit que tu étais malade. Qu'est-ce que tu as ?\nTu es allé chez le médecin ? Réponds-moi vite !\nLeila",
    },
    instruction: "Répondez à votre sœur : expliquez votre maladie, racontez la visite chez le médecin et rassurez-la.",
    points: ["Votre maladie", "La visite chez le médecin", "Une phrase pour rassurer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pee-10",
    title: "Question à l'assurance",
    situation: "Votre assurance maladie vous écrit après une consultation.",
    sourceMessage: {
      from: "Assurance SantéPlus",
      subject: "Votre consultation du 14 mars",
      body: "Bonjour,\nNous avons reçu la facture de votre consultation.\nMerci de confirmer la date de la visite et le nom du médecin.\nVotre assurance",
    },
    instruction: "Répondez à l'assurance : confirmez la date et le médecin, et posez une question sur le remboursement.",
    points: ["La date de la visite", "Le nom du médecin", "Une question sur le remboursement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   E5.2 — Aller à la pharmacie
   ════════════════════════════════════════════════════════════════════════════ */

const E5_2_CE_EMAIL_TEXT = `De : Pharmacie du Centre
Objet : Votre commande est prête

Bonjour,

Votre médicament est arrivé. Vous pouvez venir le chercher à partir de demain.
La pharmacie est ouverte du lundi au samedi, de 8 h à 19 h.
Apportez votre ordonnance et votre carte d'assurance.
Le prix est de douze francs. Vous pouvez payer en espèces ou par carte.
Important : prenez un comprimé matin et soir, pendant le repas, pendant sept jours.
Si vous avez des questions, téléphonez-nous au 021 555 44 33.

Avec nos meilleures salutations,
Votre pharmacie`;

const E5_2_CE_EMAIL_POOL = buildExpressPool("e5-2-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Pourquoi la pharmacie écrit-elle cet e-mail ?",
    text: [
      "Le médicament est arrivé",
      "La pharmacie est fermée",
      "L'ordonnance n'est pas valable",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre _________ est arrivé.",
    fill: "médicament",
    fillA: ["medicament"],
    vfQ: "Le médicament est arrivé à la pharmacie.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quand peut-on venir chercher le médicament ?",
    text: ["À partir de demain", "Dans une semaine", "Aujourd'hui seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez venir le chercher à partir de _________.",
    fill: "demain",
    vfQ: "On peut venir chercher le médicament à partir de demain.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quels jours la pharmacie est-elle ouverte ?",
    text: ["Du lundi au samedi", "Tous les jours", "Du lundi au vendredi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La pharmacie est ouverte du lundi au _________.",
    fill: "samedi",
    vfQ: "La pharmacie est ouverte le dimanche.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ferme la pharmacie ?",
    text: ["À 19 h", "À 18 h", "À 20 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La pharmacie est ouverte de 8 h à _________ h.",
    fill: "19",
    fillA: ["dix-neuf", "19 h"],
    vfQ: "La pharmacie ferme à 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qu'est-ce qu'il faut apporter ?",
    text: [
      "L'ordonnance et la carte d'assurance",
      "Le passeport et une photo",
      "La carte bancaire seulement",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Apportez votre _________ et votre carte d'assurance.",
    fill: "ordonnance",
    vfQ: "Il faut apporter son ordonnance.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Combien coûte le médicament ?",
    text: ["Douze francs", "Vingt francs", "Deux francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est de _________ francs.",
    fill: "douze",
    fillA: ["12"],
    vfQ: "Le médicament coûte douze francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Comment peut-on payer ?",
    text: [
      "En espèces ou par carte",
      "Par carte seulement",
      "Par virement seulement",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez payer en espèces ou par _________.",
    fill: "carte",
    vfQ: "On peut payer seulement en espèces.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Combien de comprimés faut-il prendre par jour ?",
    text: ["Deux : un matin et un soir", "Un seul le matin", "Trois par jour"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prenez un comprimé matin et _________.",
    fill: "soir",
    vfQ: "Il faut prendre un comprimé matin et soir.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Pendant combien de jours dure le traitement ?",
    text: ["Sept jours", "Trois jours", "Quatorze jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prenez le médicament pendant _________ jours.",
    fill: "sept",
    fillA: ["7"],
    vfQ: "Le traitement dure deux jours.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Que faire si on a des questions ?",
    text: [
      "Téléphoner à la pharmacie",
      "Envoyer une lettre",
      "Aller à l'hôpital",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Si vous avez des questions, _________-nous au 021 555 44 33.",
    fill: "téléphonez",
    fillA: ["telephonez", "appelez"],
    vfQ: "On peut téléphoner à la pharmacie pour poser une question.",
    vfC: 0,
  }),
]);

export const E5_2_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e5-2-ce-email",
  readingText: E5_2_CE_EMAIL_TEXT,
  questionPool: E5_2_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E5_2_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e5-2-pee-1",
    title: "Répondre à la pharmacie",
    situation: "La pharmacie vous informe que votre médicament est prêt.",
    sourceMessage: {
      from: "Pharmacie du Centre",
      subject: "Votre commande est prête",
      body: "Bonjour,\nVotre médicament est arrivé. Vous pouvez venir le chercher cette semaine.\nAvec nos meilleures salutations,\nVotre pharmacie",
    },
    instruction: "Répondez à la pharmacie : remerciez, dites quel jour vous venez et posez une question sur le prix.",
    points: ["Un remerciement", "Le jour de votre visite", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pee-2",
    title: "Ordonnance manquante",
    situation: "La pharmacie ne peut pas préparer votre commande.",
    sourceMessage: {
      from: "Pharmacie du Centre",
      subject: "Ordonnance manquante",
      body: "Bonjour,\nNous ne pouvons pas préparer votre médicament : il nous faut votre ordonnance.\nPouvez-vous nous l'apporter ?\nVotre pharmacie",
    },
    instruction: "Répondez à la pharmacie : excusez-vous, expliquez où est l'ordonnance et dites quand vous l'apportez.",
    points: ["L'excuse", "Où est l'ordonnance", "Quand vous l'apportez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pee-3",
    title: "Conseiller un ami malade",
    situation: "Un ami malade vous demande conseil.",
    sourceMessage: {
      from: "Pedro",
      subject: "Je suis malade",
      body: "Salut,\nJe tousse beaucoup et j'ai mal à la gorge. Tu connais un bon médicament ?\nQu'est-ce que je peux acheter à la pharmacie ?\nPedro",
    },
    instruction: "Répondez à Pedro : donnez-lui des conseils, expliquez ce qu'il peut acheter et où se trouve la pharmacie.",
    points: ["Deux conseils santé", "Ce qu'il peut acheter", "Où est la pharmacie"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pee-4",
    title: "Accepter une livraison",
    situation: "La pharmacie propose de livrer vos médicaments.",
    sourceMessage: {
      from: "Pharmacie du Centre",
      subject: "Livraison à domicile",
      body: "Bonjour,\nNous proposons maintenant la livraison à domicile, du lundi au vendredi.\nÊtes-vous intéressé(e) ?\nVotre pharmacie",
    },
    instruction: "Répondez à la pharmacie : acceptez la livraison, donnez votre adresse et dites quand vous êtes à la maison.",
    points: ["Votre accord", "Votre adresse", "Vos horaires à la maison"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pee-5",
    title: "Donner des nouvelles au pharmacien",
    situation: "Le pharmacien demande si le traitement fonctionne.",
    sourceMessage: {
      from: "Pharmacie du Centre",
      subject: "Votre traitement",
      body: "Bonjour,\nVous avez commencé votre traitement il y a une semaine.\nComment vous sentez-vous ? Le médicament fonctionne bien ?\nVotre pharmacien",
    },
    instruction: "Répondez au pharmacien : dites comment vous vous sentez, si le médicament fonctionne et posez une question.",
    points: ["Comment vous vous sentez", "Si le médicament fonctionne", "Une question au pharmacien"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pee-6",
    title: "Rendre service à un voisin",
    situation: "Votre voisin âgé a besoin d'aide.",
    sourceMessage: {
      from: "M. Bernard",
      subject: "Petit service",
      body: "Bonjour,\nJe suis malade et je ne peux pas sortir. Pouvez-vous aller chercher mes médicaments à la pharmacie ?\nMerci beaucoup,\nM. Bernard",
    },
    instruction: "Répondez à M. Bernard : acceptez de l'aider, dites quand vous y allez et demandez ce qu'il faut apporter.",
    points: ["Votre accord", "Quand vous y allez", "Une question sur l'ordonnance ou la carte"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pee-7",
    title: "Médicament indisponible",
    situation: "La pharmacie n'a plus votre médicament.",
    sourceMessage: {
      from: "Pharmacie du Centre",
      subject: "Médicament indisponible",
      body: "Bonjour,\nVotre médicament n'est plus disponible. Nous pouvons vous proposer un autre produit, identique et moins cher.\nÊtes-vous d'accord ?\nVotre pharmacie",
    },
    instruction: "Répondez à la pharmacie : acceptez ou refusez, expliquez pourquoi et posez une question sur le nouveau produit.",
    points: ["Votre décision", "Pourquoi", "Une question sur le produit"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pee-8",
    title: "Répondre à l'assurance",
    situation: "Votre assurance demande un document.",
    sourceMessage: {
      from: "Assurance SantéPlus",
      subject: "Ticket de pharmacie",
      body: "Bonjour,\nPour le remboursement de vos médicaments, il nous faut le ticket de la pharmacie.\nPouvez-vous nous l'envoyer ?\nVotre assurance",
    },
    instruction: "Répondez à l'assurance : dites que vous envoyez le ticket, précisez le prix payé et posez une question sur le remboursement.",
    points: ["L'envoi du ticket", "Le prix payé", "Une question sur le remboursement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pee-9",
    title: "Pharmacie de garde",
    situation: "C'est dimanche, vous avez besoin d'un médicament. La pharmacie de garde vous répond.",
    sourceMessage: {
      from: "Pharmacie de la Gare",
      subject: "Pharmacie de garde",
      body: "Bonjour,\nNous sommes de garde ce dimanche, de 9 h à 18 h.\nQue vous faut-il ?\nPharmacie de la Gare",
    },
    instruction: "Répondez à la pharmacie : expliquez votre problème de santé, demandez si le médicament est disponible et dites quand vous arrivez.",
    points: ["Votre problème de santé", "Le médicament demandé", "Quand vous arrivez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pee-10",
    title: "Sirop pour un enfant",
    situation: "Une amie vous pose une question sur un médicament.",
    sourceMessage: {
      from: "Ana",
      subject: "Sirop pour ma fille",
      body: "Coucou,\nMa fille de 5 ans tousse beaucoup. Tu as pris quel sirop pour ton fils ?\nIl est bien ? Où est-ce que tu l'as acheté ?\nAna",
    },
    instruction: "Répondez à Ana : expliquez quel sirop vous connaissez, rappelez qu'il faut demander conseil au pharmacien pour un enfant de 5 ans et dites où est la pharmacie.",
    points: ["Le sirop que vous connaissez", "Le conseil du pharmacien", "Où est la pharmacie"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

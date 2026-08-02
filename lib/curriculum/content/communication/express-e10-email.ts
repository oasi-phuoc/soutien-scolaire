import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E10 — Vie sociale (invitations, rencontres, événements, école, associations).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E10.1 — Inviter et être invité
   ════════════════════════════════════════════════════════════════════════════ */

const E10_1_CE_EMAIL_TEXT = `De : Camille
Objet : Invitation à notre crémaillère

Bonjour,

Nous avons déménagé le mois dernier et nous organisons une crémaillère le samedi 21 juin, à partir de 18 h 30.
La fête a lieu dans notre nouvel appartement, au troisième étage du 12 rue des Lilas.
Nous serons une vingtaine d'invités. Au programme : apéritif, buffet et musique jusqu'à minuit.
Vous pouvez apporter une boisson ou un dessert, et venir avec une personne de votre choix.
Pour venir, prenez le tram ligne 14, arrêt « Lilas ». Il y a aussi un parking gratuit derrière l'immeuble.
Merci de répondre avant le 10 juin.

À très bientôt,
Camille et Hugo`;

const E10_1_CE_EMAIL_POOL = buildExpressPool("e10-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Pourquoi Camille écrit-elle cet e-mail ?",
    text: [
      "Pour inviter à une crémaillère",
      "Pour annoncer un mariage",
      "Pour annuler une fête",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous organisons une _________ le samedi 21 juin.",
    fill: "crémaillère",
    fillA: ["cremaillere"],
    vfQ: "Camille organise une crémaillère.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Le samedi 21 juin", "Le dimanche 22 juin", "Le samedi 14 juin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La crémaillère a lieu le samedi 21 _________.",
    fill: "juin",
    vfQ: "La fête a lieu un dimanche.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["À partir de 18 h 30", "À partir de 20 h", "À partir de 17 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La fête commence à partir de 18 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "La fête commence à 20 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "À quel étage se trouve l'appartement ?",
    text: ["Au troisième étage", "Au premier étage", "Au rez-de-chaussée"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'appartement est au _________ étage.",
    fill: "troisième",
    fillA: ["troisieme", "3e", "3ème", "3"],
    vfQ: "L'appartement est au troisième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Combien d'invités seront présents ?",
    text: ["Une vingtaine", "Une centaine", "Une dizaine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous serons une _________ d'invités.",
    fill: "vingtaine",
    vfQ: "Il y aura une centaine d'invités.",
    vfC: 1,
  }),
  q({
    id: "cem-q6",
    textQ: "Qu'est-ce qu'on peut apporter ?",
    text: [
      "Une boisson ou un dessert",
      "Une plante ou un livre",
      "Rien du tout",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez apporter une boisson ou un _________.",
    fill: "dessert",
    vfQ: "On peut apporter un dessert.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Jusqu'à quelle heure y aura-t-il de la musique ?",
    text: ["Jusqu'à minuit", "Jusqu'à 22 h", "Jusqu'à 2 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y aura de la musique jusqu'à _________.",
    fill: "minuit",
    vfQ: "La fête se termine à 22 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Comment peut-on venir en transports publics ?",
    text: ["Avec le tram ligne 14", "Avec le bus ligne 4", "Avec le train"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour venir, prenez le tram ligne _________.",
    fill: "14",
    fillA: ["quatorze"],
    vfQ: "On peut venir avec le tram ligne 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Où se trouve le parking gratuit ?",
    text: [
      "Derrière l'immeuble",
      "Devant la gare",
      "À côté du supermarché",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a un parking gratuit derrière l'_________.",
    fill: "immeuble",
    vfQ: "Le parking derrière l'immeuble est payant.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quand faut-il répondre à l'invitation ?",
    text: ["Avant le 10 juin", "Avant le 21 juin", "Le jour de la fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de répondre avant le _________ juin.",
    fill: "10",
    fillA: ["dix"],
    vfQ: "Il faut répondre avant le 10 juin.",
    vfC: 0,
  }),
]);

export const E10_1_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e10-1-ce-email",
  readingText: E10_1_CE_EMAIL_TEXT,
  questionPool: E10_1_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E10_1_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e10-1-pee-1",
    title: "Accepter une invitation",
    situation: "Camille vous invite à sa crémaillère.",
    sourceMessage: {
      from: "Camille",
      subject: "Invitation à notre crémaillère",
      body: "Bonjour,\nNous organisons notre crémaillère le samedi 21 juin, à partir de 18 h 30.\nTu peux venir avec une personne de ton choix.\nRéponds-moi avant le 10 juin, s'il te plaît !\nCamille",
    },
    instruction: "Répondez à Camille : acceptez l'invitation, dites avec qui vous allez venir et demandez ce que vous pouvez apporter.",
    points: ["Votre acceptation", "Avec qui vous venez", "Une question sur ce qu'il faut apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-2",
    title: "Refuser poliment",
    situation: "Une amie vous invite à son anniversaire, mais vous n'êtes pas libre.",
    sourceMessage: {
      from: "Nadia",
      subject: "Mes 30 ans !",
      body: "Coucou,\nJe fête mes 30 ans le vendredi 4 juillet au restaurant du Lac, à 19 h 30.\nJ'espère vraiment que tu vas venir !\nDis-moi vite,\nNadia",
    },
    instruction: "Répondez à Nadia : refusez poliment, expliquez pourquoi vous n'êtes pas libre et proposez une autre rencontre.",
    points: ["Un refus poli", "La raison de votre absence", "Une proposition de rencontre"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-3",
    title: "Répondre à une invitation de mariage",
    situation: "Des amis vous invitent à leur mariage.",
    sourceMessage: {
      from: "Julie et Marc",
      subject: "Notre mariage",
      body: "Bonjour,\nNous nous marions le samedi 6 septembre à la salle des fêtes de Morges.\nLa cérémonie commence à 15 h, puis il y a un repas le soir.\nMerci de nous dire combien de personnes viennent avec toi.\nJulie et Marc",
    },
    instruction: "Répondez à Julie et Marc : félicitez-les, dites combien de personnes viennent avec vous et posez une question sur la tenue ou le cadeau.",
    points: ["Vos félicitations", "Le nombre de personnes", "Une question sur la tenue ou le cadeau"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-4",
    title: "Un apéritif chez le voisin",
    situation: "Votre voisin vous invite à un apéritif.",
    sourceMessage: {
      from: "M. Roth",
      subject: "Petit apéritif entre voisins",
      body: "Bonjour,\nNous organisons un petit apéritif sur notre terrasse dimanche prochain.\nVous êtes les bienvenus avec toute la famille.\nBien à vous,\nM. Roth",
    },
    instruction: "Répondez à M. Roth : acceptez l'invitation, proposez d'apporter quelque chose et demandez à quelle heure il faut venir.",
    points: ["Votre acceptation", "Ce que vous proposez d'apporter", "Une question sur l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-5",
    title: "Conseiller un ami invité",
    situation: "Un ami est invité à dîner et il ne sait pas quoi apporter.",
    sourceMessage: {
      from: "Tomas",
      subject: "Petite question",
      body: "Salut,\nJe suis invité à dîner chez mes voisins samedi soir. C'est la première fois.\nQu'est-ce que je peux apporter ? Des fleurs ? Du vin ?\nMerci pour ton aide !\nTomas",
    },
    instruction: "Répondez à Tomas : donnez-lui deux idées de cadeaux, expliquez pourquoi et donnez un conseil de politesse pour la soirée.",
    points: ["Deux idées de cadeaux", "Pourquoi ces idées", "Un conseil de politesse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-6",
    title: "Pique-nique d'équipe",
    situation: "Une collègue organise un pique-nique pour toute l'équipe.",
    sourceMessage: {
      from: "Sandra",
      subject: "Pique-nique de l'équipe",
      body: "Bonjour à tous,\nJe propose un pique-nique d'équipe samedi 12 juillet à midi.\nChacun apporte quelque chose à manger ou à boire.\nQui vient ? Répondez-moi cette semaine !\nSandra",
    },
    instruction: "Répondez à Sandra : dites que vous venez, précisez ce que vous allez apporter et posez une question sur le lieu du pique-nique.",
    points: ["Votre présence", "Ce que vous apportez", "Une question sur le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-7",
    title: "Anniversaire surprise",
    situation: "Un ami organise une fête surprise pour sa femme.",
    sourceMessage: {
      from: "Léo",
      subject: "Chut, c'est une surprise !",
      body: "Salut,\nJ'organise une fête surprise pour les 40 ans d'Emma, samedi 28 juin à 19 h chez nous.\nSurtout, ne lui dis rien !\nTu peux venir ?\nLéo",
    },
    instruction: "Répondez à Léo : confirmez votre venue, promettez de garder le secret et demandez à quelle heure il faut arriver exactement.",
    points: ["Votre confirmation", "La promesse de garder le secret", "Une question sur l'heure d'arrivée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-8",
    title: "S'excuser après une absence",
    situation: "Vous n'êtes pas allé(e) à la fête d'une amie hier soir.",
    sourceMessage: {
      from: "Fatou",
      subject: "Tu n'es pas venu(e) hier ?",
      body: "Coucou,\nOn t'a attendu(e) hier soir à la fête, mais tu n'es pas venu(e).\nJ'espère que tout va bien. Qu'est-ce qui s'est passé ?\nFatou",
    },
    instruction: "Répondez à Fatou : excusez-vous, expliquez ce qui s'est passé et proposez de la voir bientôt.",
    points: ["Vos excuses", "L'explication de votre absence", "Une proposition de rencontre"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-9",
    title: "Fête reportée",
    situation: "L'hôte de la fête doit changer la date.",
    sourceMessage: {
      from: "Hugo",
      subject: "Changement de date",
      body: "Bonjour,\nMauvaise nouvelle : je suis malade, la fête de samedi est reportée au samedi suivant, le 28 juin.\nJ'espère que tu pourras venir quand même.\nHugo",
    },
    instruction: "Répondez à Hugo : souhaitez-lui un bon rétablissement, dites si la nouvelle date vous convient et proposez votre aide pour la préparation.",
    points: ["Un mot pour sa santé", "Votre réponse pour la nouvelle date", "Une proposition d'aide"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-10",
    title: "Remercier après une soirée",
    situation: "Camille vous écrit après sa crémaillère.",
    sourceMessage: {
      from: "Camille",
      subject: "Merci d'être venu(e) !",
      body: "Bonjour,\nMerci beaucoup d'être venu(e) samedi, c'était une très belle soirée !\nTon dessert a eu beaucoup de succès.\nÀ bientôt,\nCamille",
    },
    instruction: "Répondez à Camille : remerciez-la pour la soirée, dites ce que vous avez préféré et invitez-la chez vous à votre tour.",
    points: ["Un remerciement", "Ce que vous avez préféré", "Une invitation chez vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.2 — Faire des rencontres
   ════════════════════════════════════════════════════════════════════════════ */

const E10_2_CE_EMAIL_TEXT = `De : Café des langues
Objet : Bienvenue au Café des langues !

Bonjour,

Merci pour votre message ! Notre café des langues a lieu tous les jeudis, de 19 h à 21 h, au café du Pont, 3 place du Marché.
Chaque table a une langue : français, anglais, espagnol ou italien. Vous pouvez changer de table quand vous voulez.
La soirée est gratuite pour les membres ; pour les autres, l'entrée coûte cinq francs, avec une boisson offerte.
Nous sommes environ quarante participants, et une animatrice aide les débutants.
La prochaine soirée a lieu le jeudi 5 septembre : nous commencerons par un petit jeu pour faire connaissance.
L'inscription n'est pas obligatoire, mais vous pouvez réserver votre place par e-mail.

À très bientôt, nous l'espérons !
L'équipe du Café des langues`;

const E10_2_CE_EMAIL_POOL = buildExpressPool("e10-2-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel jour a lieu le café des langues ?",
    text: ["Tous les jeudis", "Tous les samedis", "Tous les lundis"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le café des langues a lieu tous les _________.",
    fill: "jeudis",
    fillA: ["jeudi"],
    vfQ: "Le café des langues a lieu le samedi.",
    vfC: 1,
  }),
  q({
    id: "cem-q2",
    textQ: "À quelle heure commence la soirée ?",
    text: ["À 19 h", "À 21 h", "À 18 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La soirée a lieu de _________ h à 21 h.",
    fill: "19",
    fillA: ["dix-neuf", "19 h"],
    vfQ: "La soirée commence à 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Où se passe la soirée ?",
    text: ["Au café du Pont", "À la bibliothèque", "À la gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La soirée se passe au _________ du Pont.",
    fill: "café",
    fillA: ["cafe"],
    vfQ: "La soirée se passe à la bibliothèque.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte l'entrée pour les non-membres ?",
    text: ["Cinq francs", "Dix francs", "Vingt francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour les non-membres, l'entrée coûte _________ francs.",
    fill: "cinq",
    fillA: ["5"],
    vfQ: "La soirée est gratuite pour les membres.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qu'est-ce qui est offert avec l'entrée ?",
    text: ["Une boisson", "Un repas complet", "Un livre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'entrée coûte cinq francs, avec une _________ offerte.",
    fill: "boisson",
    vfQ: "Un repas complet est offert avec l'entrée.",
    vfC: 1,
  }),
  q({
    id: "cem-q6",
    textQ: "Combien y a-t-il de participants environ ?",
    text: ["Environ quarante", "Environ dix", "Environ cent"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes environ _________ participants.",
    fill: "quarante",
    fillA: ["40"],
    vfQ: "Il y a environ quarante participants.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui aide les débutants ?",
    text: ["Une animatrice", "Un serveur", "Personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Une _________ aide les débutants.",
    fill: "animatrice",
    vfQ: "Les débutants ne reçoivent aucune aide.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Quand a lieu la prochaine soirée ?",
    text: [
      "Le jeudi 5 septembre",
      "Le jeudi 15 septembre",
      "Le vendredi 5 septembre",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La prochaine soirée a lieu le jeudi 5 _________.",
    fill: "septembre",
    vfQ: "La prochaine soirée a lieu le 5 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Comment commencera la prochaine soirée ?",
    text: [
      "Par un petit jeu pour faire connaissance",
      "Par un examen de grammaire",
      "Par un film en français",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous commencerons par un petit _________ pour faire connaissance.",
    fill: "jeu",
    vfQ: "La soirée commencera par un examen de grammaire.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "L'inscription est-elle obligatoire ?",
    text: [
      "Non, mais on peut réserver par e-mail",
      "Oui, elle est obligatoire",
      "Oui, et elle coûte dix francs",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'inscription n'est pas _________.",
    fill: "obligatoire",
    vfQ: "On peut réserver sa place par e-mail.",
    vfC: 0,
  }),
]);

export const E10_2_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e10-2-ce-email",
  readingText: E10_2_CE_EMAIL_TEXT,
  questionPool: E10_2_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E10_2_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e10-2-pee-1",
    title: "Un nouveau voisin",
    situation: "Un nouveau voisin se présente et vous invite pour un café.",
    sourceMessage: {
      from: "Marco",
      subject: "Votre nouveau voisin",
      body: "Bonjour,\nJe suis Marco, votre nouveau voisin du deuxième étage. Je suis arrivé la semaine dernière.\nVous voulez passer boire un café un de ces jours ?\nBonne journée,\nMarco",
    },
    instruction: "Répondez à Marco : souhaitez-lui la bienvenue, présentez-vous en quelques mots et proposez un jour pour le café.",
    points: ["Un mot de bienvenue", "Votre présentation", "Une proposition de jour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-2",
    title: "S'inscrire au café des langues",
    situation: "Le Café des langues vous demande des informations pour votre première soirée.",
    sourceMessage: {
      from: "Café des langues",
      subject: "Votre première soirée",
      body: "Bonjour,\nMerci pour votre intérêt ! Pour préparer votre venue, dites-nous :\nquelle langue voulez-vous pratiquer, et quel est votre niveau ?\nÀ jeudi !\nL'équipe du Café des langues",
    },
    instruction: "Répondez au Café des langues : dites quelle langue vous voulez pratiquer, décrivez votre niveau et posez une question sur la soirée.",
    points: ["La langue choisie", "Votre niveau", "Une question sur la soirée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-3",
    title: "Échange linguistique",
    situation: "Une étudiante cherche un partenaire pour un tandem de langues.",
    sourceMessage: {
      from: "Elena",
      subject: "Tandem français-espagnol",
      body: "Bonjour,\nJe suis espagnole et je cherche une personne pour un échange linguistique :\nune heure en français, une heure en espagnol, une fois par semaine.\nÊtes-vous intéressé(e) ?\nElena",
    },
    instruction: "Répondez à Elena : acceptez l'échange, proposez un lieu et un horaire, et décrivez votre niveau dans les deux langues.",
    points: ["Votre accord", "Un lieu et un horaire", "Votre niveau de langue"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-4",
    title: "Refuser une activité",
    situation: "Un ami vous propose de rejoindre son club de football.",
    sourceMessage: {
      from: "David",
      subject: "Viens jouer avec nous !",
      body: "Salut,\nNotre club de football cherche des joueurs. On s'entraîne le mardi soir à 20 h.\nC'est super pour rencontrer du monde ! Tu viens ?\nDavid",
    },
    instruction: "Répondez à David : refusez poliment, expliquez pourquoi le football ne vous convient pas et proposez une autre activité ensemble.",
    points: ["Un refus poli", "La raison du refus", "Une autre activité proposée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-5",
    title: "Se donner rendez-vous",
    situation: "Une personne rencontrée au café des langues veut vous revoir.",
    sourceMessage: {
      from: "Aïcha",
      subject: "C'était sympa jeudi !",
      body: "Bonjour,\nJ'ai beaucoup aimé notre discussion au café des langues jeudi dernier.\nÇa te dit de se revoir pour continuer à parler français ?\nAïcha",
    },
    instruction: "Répondez à Aïcha : dites que vous êtes content(e) de son message, proposez un jour et un lieu de rendez-vous et posez-lui une question.",
    points: ["Votre plaisir de la revoir", "Un jour et un lieu", "Une question pour Aïcha"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-6",
    title: "La fête des voisins",
    situation: "L'association de votre immeuble organise la fête des voisins.",
    sourceMessage: {
      from: "Association des habitants",
      subject: "Fête des voisins le 23 mai",
      body: "Chers habitants,\nLa fête des voisins a lieu le vendredi 23 mai à 18 h dans la cour de l'immeuble.\nChacun apporte un plat ou une boisson.\nMerci de nous dire si vous venez.\nL'association des habitants",
    },
    instruction: "Répondez à l'association : confirmez votre présence, dites ce que vous allez apporter et demandez combien de personnes sont attendues.",
    points: ["Votre présence", "Ce que vous apportez", "Une question sur le nombre de personnes"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-7",
    title: "Déjeuner avec un nouveau collègue",
    situation: "Un nouveau collègue aimerait faire connaissance.",
    sourceMessage: {
      from: "Samuel",
      subject: "On déjeune ensemble ?",
      body: "Bonjour,\nJe suis nouveau dans l'équipe et je ne connais encore personne.\nEst-ce que tu veux déjeuner avec moi cette semaine ?\nSamuel",
    },
    instruction: "Répondez à Samuel : acceptez avec plaisir, proposez un jour et un restaurant et posez-lui une question sur son travail.",
    points: ["Votre acceptation", "Un jour et un restaurant", "Une question sur son travail"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-8",
    title: "S'excuser pour un rendez-vous manqué",
    situation: "Vous avez oublié un rendez-vous avec votre partenaire de tandem.",
    sourceMessage: {
      from: "Elena",
      subject: "Je t'ai attendu(e) hier",
      body: "Bonjour,\nJe t'ai attendu(e) hier au café pendant une demi-heure, mais tu n'es pas venu(e).\nEst-ce que tout va bien ?\nElena",
    },
    instruction: "Répondez à Elena : excusez-vous, expliquez pourquoi vous n'êtes pas venu(e) et proposez un nouveau rendez-vous.",
    points: ["Vos excuses", "L'explication", "Un nouveau rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-9",
    title: "Groupe de marche",
    situation: "Un groupe de marche du quartier cherche de nouveaux membres.",
    sourceMessage: {
      from: "Simone",
      subject: "Groupe de marche du quartier",
      body: "Bonjour,\nNotre groupe de marche se retrouve chaque dimanche matin pour marcher deux heures.\nNous cherchons de nouveaux membres. Voulez-vous nous rejoindre ?\nSimone",
    },
    instruction: "Répondez à Simone : dites pourquoi cette activité vous intéresse, posez deux questions (lieu de départ, niveau) et demandez si on peut venir accompagné.",
    points: ["Pourquoi vous êtes intéressé(e)", "Deux questions pratiques", "Une question pour venir accompagné(e)"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-10",
    title: "Encourager un ami timide",
    situation: "Un ami n'ose pas aller vers les autres et vous demande conseil.",
    sourceMessage: {
      from: "Omar",
      subject: "Comment rencontrer des gens ?",
      body: "Salut,\nJe suis arrivé ici il y a deux mois et je ne connais presque personne.\nJe suis un peu timide. Comment est-ce que tu as rencontré tes amis ?\nOmar",
    },
    instruction: "Répondez à Omar : donnez-lui deux idées pour rencontrer des gens, proposez de l'accompagner une fois et encouragez-le.",
    points: ["Deux idées de rencontres", "Une proposition de l'accompagner", "Une phrase d'encouragement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.3 — Organiser un événement
   ════════════════════════════════════════════════════════════════════════════ */

const E10_3_CE_EMAIL_TEXT = `De : Sophie
Objet : Fête de départ de Luc — organisation

Bonjour à tous,

Notre collègue Luc part à la retraite. Nous organisons sa fête de départ le samedi 12 avril.
J'ai réservé la salle communale de 17 h à 23 h. La location coûte 150 francs.
Pour le budget, chaque personne donne 20 francs : cela paie la salle, le buffet et le cadeau commun.
Au programme : apéritif à 17 h 30, discours à 19 h, puis buffet et musique. Le gâteau arrivera à 21 h.
Nous attendons environ 25 personnes. Merci d'écrire votre nom sur la liste avant le 30 mars.
J'ai encore besoin de trois volontaires pour la décoration, samedi à 15 h.
Dites-moi aussi qui apporte les boissons et qui apporte les salades.

Merci d'avance,
Sophie`;

const E10_3_CE_EMAIL_POOL = buildExpressPool("e10-3-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Pourquoi organise-t-on cette fête ?",
    text: [
      "Luc part à la retraite",
      "Luc se marie",
      "Luc fête son anniversaire",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Notre collègue Luc part à la _________.",
    fill: "retraite",
    vfQ: "La fête est organisée pour un départ à la retraite.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Le samedi 12 avril", "Le samedi 30 mars", "Le dimanche 13 avril"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La fête a lieu le samedi 12 _________.",
    fill: "avril",
    vfQ: "La fête a lieu le 12 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Jusqu'à quelle heure la salle est-elle réservée ?",
    text: ["Jusqu'à 23 h", "Jusqu'à minuit", "Jusqu'à 21 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La salle est réservée de 17 h à _________ h.",
    fill: "23",
    fillA: ["vingt-trois", "23 h"],
    vfQ: "La salle est réservée jusqu'à minuit.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte la location de la salle ?",
    text: ["150 francs", "500 francs", "50 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La location de la salle coûte _________ francs.",
    fill: "150",
    fillA: ["cent cinquante", "cent-cinquante"],
    vfQ: "La salle coûte 500 francs.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Combien d'argent donne chaque personne ?",
    text: ["20 francs", "10 francs", "50 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chaque personne donne _________ francs.",
    fill: "20",
    fillA: ["vingt"],
    vfQ: "Chaque personne donne 20 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quelle heure a lieu le discours ?",
    text: ["À 19 h", "À 17 h 30", "À 21 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le discours est à _________ h.",
    fill: "19",
    fillA: ["dix-neuf", "19 h"],
    vfQ: "Le discours a lieu à 17 h 30.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "À quelle heure arrivera le gâteau ?",
    text: ["À 21 h", "À 19 h", "À 23 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le gâteau arrivera à _________ h.",
    fill: "21",
    fillA: ["vingt et un", "vingt-et-un", "21 h"],
    vfQ: "Le gâteau arrivera à 21 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Combien de personnes sont attendues ?",
    text: ["Environ 25", "Environ 100", "Environ 10"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous attendons environ _________ personnes.",
    fill: "25",
    fillA: ["vingt-cinq"],
    vfQ: "Une centaine de personnes sont attendues.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Quand faut-il s'inscrire sur la liste ?",
    text: ["Avant le 30 mars", "Avant le 12 avril", "Le jour de la fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Écrivez votre nom sur la liste avant le 30 _________.",
    fill: "mars",
    vfQ: "Il faut s'inscrire avant le 30 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Combien de volontaires Sophie cherche-t-elle pour la décoration ?",
    text: ["Trois", "Dix", "Un seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai besoin de _________ volontaires pour la décoration.",
    fill: "trois",
    fillA: ["3"],
    vfQ: "Sophie cherche dix volontaires pour la décoration.",
    vfC: 1,
  }),
]);

export const E10_3_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e10-3-ce-email",
  readingText: E10_3_CE_EMAIL_TEXT,
  questionPool: E10_3_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E10_3_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e10-3-pee-1",
    title: "Participer à la fête de départ",
    situation: "Sophie organise la fête de départ d'un collègue.",
    sourceMessage: {
      from: "Sophie",
      subject: "Fête de départ de Luc",
      body: "Bonjour,\nPour la fête de Luc le 12 avril, merci de me dire si tu viens.\nJe cherche aussi des volontaires pour la décoration et des personnes pour apporter à manger.\nSophie",
    },
    instruction: "Répondez à Sophie : confirmez votre venue, proposez d'apporter quelque chose et dites si vous pouvez aider pour la décoration.",
    points: ["Votre venue", "Ce que vous apportez", "Votre réponse pour la décoration"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-2",
    title: "Réserver une salle",
    situation: "L'administration communale répond à votre demande de salle.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Votre demande de salle",
      body: "Bonjour,\nLa salle communale est libre le samedi 12 avril et le samedi 19 avril.\nLa location coûte 150 francs pour la soirée.\nQuelle date choisissez-vous ?\nL'administration communale",
    },
    instruction: "Répondez à l'administration : choisissez une date, demandez si les tables et les chaises sont comprises et posez une question sur les horaires.",
    points: ["La date choisie", "Une question sur les tables et les chaises", "Une question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-3",
    title: "Sortie de groupe en montagne",
    situation: "Un ami organise une sortie de groupe en montagne.",
    sourceMessage: {
      from: "Karim",
      subject: "Sortie en montagne dimanche",
      body: "Salut,\nJ'organise une sortie en montagne dimanche prochain avec quelques amis.\nDépart à 8 h, retour vers 17 h. Tu veux venir ?\nKarim",
    },
    instruction: "Répondez à Karim : acceptez, demandez ce qu'il faut apporter et proposez de prendre votre voiture pour le trajet.",
    points: ["Votre acceptation", "Une question sur le matériel", "Votre proposition de voiture"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-4",
    title: "Qui apporte quoi ?",
    situation: "L'organisatrice d'un repas partagé prépare la liste des plats.",
    sourceMessage: {
      from: "Julia",
      subject: "Repas partagé de samedi",
      body: "Bonjour à tous,\nPour le repas de samedi, je prépare la liste : il manque encore des salades, des desserts et des boissons.\nQui apporte quoi ? Répondez-moi vite !\nJulia",
    },
    instruction: "Répondez à Julia : dites ce que vous allez apporter, proposez d'arriver plus tôt pour aider et demandez combien d'invités sont attendus.",
    points: ["Ce que vous apportez", "Votre proposition d'aide", "Une question sur le nombre d'invités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-5",
    title: "Payer sa participation",
    situation: "Le trésorier de l'équipe demande la participation pour la fête.",
    sourceMessage: {
      from: "Nicolas",
      subject: "Participation de 20 francs",
      body: "Bonjour,\nPour la fête du 12 avril, chaque personne donne 20 francs.\nMerci de me donner l'argent avant la fin du mois.\nNicolas",
    },
    instruction: "Répondez à Nicolas : confirmez que vous allez payer, demandez comment payer (en espèces ou par virement) et posez une question sur le programme.",
    points: ["Votre confirmation de paiement", "Une question sur le mode de paiement", "Une question sur le programme"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-6",
    title: "Problème de salle",
    situation: "La salle réservée pour votre événement a un problème.",
    sourceMessage: {
      from: "Salle des fêtes",
      subject: "Problème de chauffage",
      body: "Bonjour,\nLe chauffage de la salle est en panne. Nous ne pouvons pas vous accueillir samedi.\nNous pouvons vous proposer la petite salle ou une autre date.\nAvec nos excuses,\nLa salle des fêtes",
    },
    instruction: "Répondez à la salle des fêtes : dites quelle solution vous choisissez, expliquez pourquoi et demandez une réduction du prix.",
    points: ["La solution choisie", "Pourquoi ce choix", "Une demande de réduction"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-7",
    title: "Idées pour la fête de quartier",
    situation: "Une voisine prépare le programme de la fête de quartier et demande des idées.",
    sourceMessage: {
      from: "Leila",
      subject: "Programme de la fête de quartier",
      body: "Bonjour,\nJe prépare le programme de la fête de quartier de juin.\nAvez-vous des idées d'activités pour les enfants et pour les adultes ?\nMerci d'avance,\nLeila",
    },
    instruction: "Répondez à Leila : proposez deux activités, suggérez un horaire pour chaque activité et dites ce que vous pouvez apporter ou organiser.",
    points: ["Deux activités proposées", "Un horaire pour chaque activité", "Ce que vous pouvez faire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-8",
    title: "Musique pour la soirée",
    situation: "Un musicien répond à votre demande pour animer la soirée.",
    sourceMessage: {
      from: "Pascal",
      subject: "Musique pour votre soirée",
      body: "Bonjour,\nJe suis libre le samedi 12 avril. Je joue de 19 h à 23 h pour 300 francs.\nJ'apporte tout mon matériel.\nEst-ce que cela vous convient ?\nPascal",
    },
    instruction: "Répondez à Pascal : acceptez sa proposition, précisez l'adresse et l'heure d'arrivée et posez une question sur le style de musique.",
    points: ["Votre accord", "L'adresse et l'heure d'arrivée", "Une question sur la musique"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-9",
    title: "Sortie d'équipe",
    situation: "Un collègue propose deux idées pour la sortie d'équipe.",
    sourceMessage: {
      from: "Marc",
      subject: "Sortie d'équipe : bowling ou cinéma ?",
      body: "Bonjour à tous,\nPour notre sortie d'équipe, j'hésite entre un bowling et un cinéma, un jeudi soir.\nQu'est-ce que vous préférez ?\nMarc",
    },
    instruction: "Répondez à Marc : dites ce que vous préférez et pourquoi, proposez une date précise et proposez de faire la réservation.",
    points: ["Votre choix et la raison", "Une date précise", "Votre proposition de réserver"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-10",
    title: "Après la fête",
    situation: "Sophie fait le bilan de la fête de départ.",
    sourceMessage: {
      from: "Sophie",
      subject: "Merci à tous !",
      body: "Bonjour à tous,\nMerci pour cette belle fête, Luc était très content !\nIl reste 40 francs dans la caisse. Qu'est-ce qu'on en fait ?\nSophie",
    },
    instruction: "Répondez à Sophie : félicitez-la pour l'organisation, dites ce que vous avez préféré pendant la fête et proposez une idée pour les 40 francs.",
    points: ["Vos félicitations", "Ce que vous avez préféré", "Une idée pour l'argent restant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.4 — Participer à la vie scolaire
   ════════════════════════════════════════════════════════════════════════════ */

const E10_4_CE_EMAIL_TEXT = `De : École du Lac
Objet : Sortie scolaire de la classe de votre enfant

Chers parents,

La classe de votre enfant fera une sortie au musée de la nature le jeudi 16 mai.
Le départ est à 8 h 15 devant l'école et le retour est prévu à 16 h 30. Le voyage se fait en car.
La sortie coûte 10 francs par enfant. Merci de donner l'argent à l'enseignante avant la sortie.
Chaque enfant apporte un pique-nique, une gourde et de bonnes chaussures, car nous marcherons une heure dans la forêt.
Merci de signer l'autorisation et de la rendre avant le 8 mai.
Nous cherchons aussi deux parents accompagnateurs pour cette journée.
En cas de forte pluie, la sortie sera reportée au 23 mai.

Avec nos cordiales salutations,
Mme Girard, enseignante`;

const E10_4_CE_EMAIL_POOL = buildExpressPool("e10-4-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Où va la classe ?",
    text: [
      "Au musée de la nature",
      "À la piscine",
      "Au zoo",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La classe fera une sortie au _________ de la nature.",
    fill: "musée",
    fillA: ["musee"],
    vfQ: "La classe va au musée de la nature.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel jour a lieu la sortie ?",
    text: ["Le jeudi 16 mai", "Le mardi 8 mai", "Le jeudi 23 mai"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La sortie a lieu le jeudi 16 _________.",
    fill: "mai",
    vfQ: "La sortie a lieu un mardi.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure est le départ ?",
    text: ["À 8 h 15", "À 9 h", "À 8 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le départ est à 8 h _________.",
    fill: "15",
    fillA: ["quinze"],
    vfQ: "Le départ est à 8 h 15 devant l'école.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure est le retour ?",
    text: ["À 16 h 30", "À midi", "À 18 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le retour est prévu à 16 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "Les enfants rentrent à midi.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Comment se fait le voyage ?",
    text: ["En car", "En train", "À pied"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le voyage se fait en _________.",
    fill: "car",
    vfQ: "La classe voyage en train.",
    vfC: 1,
  }),
  q({
    id: "cem-q6",
    textQ: "Combien coûte la sortie ?",
    text: [
      "10 francs par enfant",
      "20 francs par enfant",
      "Elle est gratuite",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La sortie coûte _________ francs par enfant.",
    fill: "10",
    fillA: ["dix"],
    vfQ: "La sortie coûte 10 francs par enfant.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qu'est-ce que chaque enfant doit apporter ?",
    text: [
      "Un pique-nique, une gourde et de bonnes chaussures",
      "Un cahier et des crayons",
      "Un maillot de bain",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chaque enfant apporte un pique-nique, une _________ et de bonnes chaussures.",
    fill: "gourde",
    vfQ: "Le repas de midi est offert par l'école.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Pourquoi faut-il de bonnes chaussures ?",
    text: [
      "Parce que les enfants marcheront une heure dans la forêt",
      "Parce qu'ils feront du sport en salle",
      "Parce qu'ils iront à la montagne",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous marcherons une _________ dans la forêt.",
    fill: "heure",
    vfQ: "Les enfants marcheront une heure dans la forêt.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Quand faut-il rendre l'autorisation signée ?",
    text: ["Avant le 8 mai", "Avant le 16 mai", "Le jour de la sortie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de rendre l'autorisation avant le _________ mai.",
    fill: "8",
    fillA: ["huit"],
    vfQ: "On peut rendre l'autorisation le jour de la sortie.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Combien de parents accompagnateurs l'école cherche-t-elle ?",
    text: ["Deux", "Cinq", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous cherchons _________ parents accompagnateurs.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "L'école cherche deux parents accompagnateurs.",
    vfC: 0,
  }),
]);

export const E10_4_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e10-4-ce-email",
  readingText: E10_4_CE_EMAIL_TEXT,
  questionPool: E10_4_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E10_4_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e10-4-pee-1",
    title: "Autoriser la sortie scolaire",
    situation: "L'enseignante demande l'autorisation pour la sortie au musée.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Sortie scolaire du 16 mai",
      body: "Chers parents,\nLa classe fera une sortie au musée de la nature le jeudi 16 mai.\nMerci de signer l'autorisation. Nous cherchons aussi des parents accompagnateurs.\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : donnez votre autorisation, proposez d'accompagner la classe et posez une question sur la journée.",
    points: ["Votre autorisation", "Votre proposition d'accompagner", "Une question sur la journée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-2",
    title: "Réunion de parents",
    situation: "L'école vous invite à la réunion de parents.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Réunion de parents le mardi 3 juin",
      body: "Chers parents,\nLa réunion de parents a lieu le mardi 3 juin à 19 h dans la salle de classe.\nMerci de confirmer votre présence.\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : confirmez votre présence, prévenez que vous arriverez un peu en retard et demandez combien de temps dure la réunion.",
    points: ["Votre confirmation", "Votre retard annoncé", "Une question sur la durée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-3",
    title: "Excuser une absence",
    situation: "L'enseignante vous écrit car votre fille était absente.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Absence de votre fille",
      body: "Bonjour,\nVotre fille était absente hier et aujourd'hui.\nPouvez-vous nous expliquer la raison de cette absence ?\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : excusez-vous pour l'absence, expliquez que votre fille est malade et dites quand elle reviendra à l'école.",
    points: ["Vos excuses", "La raison de l'absence", "La date du retour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-4",
    title: "Gâteau pour la fête de l'école",
    situation: "L'association des parents cherche des gâteaux pour la fête de l'école.",
    sourceMessage: {
      from: "Association des parents",
      subject: "Fête de l'école : appel aux gâteaux",
      body: "Chers parents,\nPour la fête de l'école du samedi 21 juin, nous cherchons des gâteaux pour le stand pâtisserie.\nQui peut en apporter un ?\nL'association des parents",
    },
    instruction: "Répondez à l'association : acceptez d'apporter un gâteau, dites lequel et demandez à quelle heure et où il faut l'apporter.",
    points: ["Votre accord", "Le gâteau choisi", "Une question sur l'heure et le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-5",
    title: "Affaires de sport oubliées",
    situation: "L'enseignant de sport vous écrit au sujet de votre fils.",
    sourceMessage: {
      from: "M. Perret",
      subject: "Affaires de sport",
      body: "Bonjour,\nVotre fils a oublié ses affaires de sport trois fois ce mois-ci.\nIl ne peut pas participer au cours sans ses affaires.\nMerci de votre aide,\nM. Perret",
    },
    instruction: "Répondez à M. Perret : excusez-vous, expliquez la situation et dites ce que vous allez faire pour éviter ce problème.",
    points: ["Vos excuses", "Une explication", "Votre solution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-6",
    title: "Sortie reportée",
    situation: "L'école annonce que la sortie est reportée à cause de la pluie.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Sortie reportée au 23 mai",
      body: "Chers parents,\nÀ cause de la forte pluie annoncée, la sortie de jeudi est reportée au jeudi 23 mai.\nLes horaires ne changent pas.\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : remerciez pour l'information, dites si la nouvelle date convient pour votre enfant et posez une question sur le pique-nique.",
    points: ["Un remerciement", "Votre réponse pour la nouvelle date", "Une question sur le pique-nique"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-7",
    title: "Rendez-vous avec l'enseignante",
    situation: "L'enseignante souhaite vous rencontrer.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Rendez-vous",
      body: "Bonjour,\nJe souhaite vous rencontrer pour parler des progrès de votre enfant.\nQuand êtes-vous disponible cette semaine ou la semaine prochaine ?\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : remerciez-la, proposez deux dates possibles et demandez de quoi elle veut parler exactement.",
    points: ["Un remerciement", "Deux dates possibles", "Une question sur le sujet du rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-8",
    title: "Inscription à la cantine",
    situation: "La cantine scolaire prépare les inscriptions pour l'année prochaine.",
    sourceMessage: {
      from: "Cantine scolaire",
      subject: "Inscription pour l'année prochaine",
      body: "Chers parents,\nLes inscriptions à la cantine sont ouvertes.\nMerci de nous dire quels jours votre enfant mangera à la cantine et s'il a des allergies.\nLa cantine scolaire",
    },
    instruction: "Répondez à la cantine : indiquez les jours choisis, signalez une allergie ou une habitude alimentaire et posez une question sur le prix des repas.",
    points: ["Les jours choisis", "Une allergie ou une habitude", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-9",
    title: "Covoiturage pour l'école",
    situation: "Une maman d'élève propose un covoiturage.",
    sourceMessage: {
      from: "Mme Diallo",
      subject: "Covoiturage pour l'école",
      body: "Bonjour,\nNos enfants sont dans la même classe et nous habitons le même quartier.\nVoulez-vous organiser un covoiturage pour l'école ?\nMme Diallo",
    },
    instruction: "Répondez à Mme Diallo : acceptez sa proposition, expliquez vos horaires et proposez une organisation (par exemple une semaine sur deux).",
    points: ["Votre acceptation", "Vos horaires", "Votre proposition d'organisation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-10",
    title: "Tenir un stand à la kermesse",
    situation: "Le comité de la fête de l'école cherche des bénévoles.",
    sourceMessage: {
      from: "Comité de la fête",
      subject: "Bénévoles pour la kermesse",
      body: "Chers parents,\nPour la kermesse du 21 juin, nous cherchons des bénévoles pour tenir les stands :\njeux, boissons, pâtisserie, de 10 h à 17 h.\nMerci de votre aide !\nLe comité de la fête",
    },
    instruction: "Répondez au comité : proposez votre aide, dites quel stand vous préférez et à quelles heures vous êtes disponible.",
    points: ["Votre proposition d'aide", "Le stand choisi", "Vos heures disponibles"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.5 — Participer à la vie associative
   ════════════════════════════════════════════════════════════════════════════ */

const E10_5_CE_EMAIL_TEXT = `De : Association de quartier des Tilleuls
Objet : Bienvenue dans notre association !

Bonjour,

Merci pour votre inscription ! Vous êtes maintenant membre de notre association de quartier.
La cotisation est de 30 francs par année. Merci de la payer avant la fin du mois de janvier.
Notre assemblée générale a lieu le mardi 4 février à 20 h, à la maison de quartier. Nous y présenterons le programme et le budget.
Nos activités : un cours de cuisine le lundi soir, un atelier de réparation de vélos le samedi matin et un jardin partagé derrière l'église.
En juin, nous organiserons la fête du quartier : nous cherchons déjà des bénévoles pour les stands.
Notre permanence est ouverte le mercredi, de 17 h à 19 h. Vous recevrez aussi notre journal quatre fois par année.

À très bientôt,
Le comité de l'association`;

const E10_5_CE_EMAIL_POOL = buildExpressPool("e10-5-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Pourquoi l'association écrit-elle cet e-mail ?",
    text: [
      "Pour souhaiter la bienvenue à un nouveau membre",
      "Pour annoncer sa fermeture",
      "Pour vendre des billets de concert",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous êtes maintenant _________ de notre association.",
    fill: "membre",
    vfQ: "Le lecteur est un nouveau membre de l'association.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Combien coûte la cotisation ?",
    text: [
      "30 francs par année",
      "80 francs par année",
      "30 francs par mois",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La cotisation est de _________ francs par année.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "La cotisation coûte 80 francs par année.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand faut-il payer la cotisation ?",
    text: [
      "Avant la fin du mois de janvier",
      "Avant la fin du mois de juin",
      "À l'assemblée générale",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de payer la cotisation avant la fin du mois de _________.",
    fill: "janvier",
    vfQ: "Il faut payer la cotisation avant la fin du mois de janvier.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand a lieu l'assemblée générale ?",
    text: [
      "Le mardi 4 février à 20 h",
      "Le mercredi 5 février à 19 h",
      "Le dimanche 4 février à 20 h",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'assemblée générale a lieu le mardi 4 _________.",
    fill: "février",
    fillA: ["fevrier"],
    vfQ: "L'assemblée générale a lieu un dimanche.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'assemblée générale ?",
    text: [
      "À la maison de quartier",
      "À la mairie",
      "Dans un restaurant",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'assemblée a lieu à la maison de _________.",
    fill: "quartier",
    vfQ: "L'assemblée a lieu à la maison de quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quand a lieu le cours de cuisine ?",
    text: ["Le lundi soir", "Le samedi matin", "Le mercredi après-midi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le cours de cuisine a lieu le _________ soir.",
    fill: "lundi",
    vfQ: "Le cours de cuisine a lieu le samedi matin.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Que peut-on faire le samedi matin ?",
    text: [
      "Réparer son vélo à l'atelier",
      "Suivre un cours de cuisine",
      "Aller à l'assemblée générale",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'atelier de réparation de _________ a lieu le samedi matin.",
    fill: "vélos",
    fillA: ["velos", "vélo", "velo"],
    vfQ: "L'atelier de réparation de vélos a lieu le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Où se trouve le jardin partagé ?",
    text: ["Derrière l'église", "Derrière la gare", "Devant la mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le jardin partagé se trouve derrière l'_________.",
    fill: "église",
    fillA: ["eglise"],
    vfQ: "Le jardin partagé est derrière la gare.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Que cherche l'association pour la fête du quartier ?",
    text: [
      "Des bénévoles pour les stands",
      "Des musiciens professionnels",
      "Des nouvelles tables",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous cherchons des _________ pour les stands.",
    fill: "bénévoles",
    fillA: ["benevoles"],
    vfQ: "L'association cherche des bénévoles pour la fête du quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Quand la permanence est-elle ouverte ?",
    text: [
      "Le mercredi, de 17 h à 19 h",
      "Le week-end, de 10 h à 12 h",
      "Tous les jours, de 8 h à 18 h",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La permanence est ouverte le _________, de 17 h à 19 h.",
    fill: "mercredi",
    vfQ: "La permanence est ouverte le week-end.",
    vfC: 1,
  }),
]);

export const E10_5_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e10-5-ce-email",
  readingText: E10_5_CE_EMAIL_TEXT,
  questionPool: E10_5_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E10_5_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e10-5-pee-1",
    title: "Remercier l'association",
    situation: "L'association de quartier vous souhaite la bienvenue.",
    sourceMessage: {
      from: "Association des Tilleuls",
      subject: "Bienvenue !",
      body: "Bonjour,\nBienvenue dans notre association de quartier !\nL'assemblée générale a lieu le mardi 4 février à 20 h.\nNous espérons vous y voir.\nLe comité",
    },
    instruction: "Répondez au comité : remerciez pour l'accueil, confirmez votre présence à l'assemblée et posez une question sur une activité.",
    points: ["Un remerciement", "Votre présence à l'assemblée", "Une question sur une activité"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-2",
    title: "Devenir bénévole",
    situation: "L'association cherche des bénévoles pour la fête du quartier.",
    sourceMessage: {
      from: "Association des Tilleuls",
      subject: "Bénévoles pour la fête du quartier",
      body: "Bonjour,\nPour la fête du quartier du samedi 14 juin, nous cherchons des bénévoles\npour les stands, de 10 h à 22 h.\nPouvez-vous nous aider ?\nLe comité",
    },
    instruction: "Répondez au comité : proposez votre aide, indiquez vos heures disponibles et demandez quel stand vous pouvez tenir.",
    points: ["Votre proposition d'aide", "Vos heures disponibles", "Une question sur le stand"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-3",
    title: "Rappel de cotisation",
    situation: "La trésorière vous rappelle que la cotisation n'est pas payée.",
    sourceMessage: {
      from: "Mme Weber",
      subject: "Rappel : cotisation annuelle",
      body: "Bonjour,\nNous n'avons pas encore reçu votre cotisation de 30 francs pour cette année.\nMerci de la payer avant la fin du mois.\nMme Weber, trésorière",
    },
    instruction: "Répondez à Mme Weber : excusez-vous pour le retard, expliquez pourquoi vous avez oublié et dites quand et comment vous allez payer.",
    points: ["Vos excuses", "L'explication de l'oubli", "Quand et comment vous payez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-4",
    title: "Absent à l'assemblée",
    situation: "Le comité vous convoque à l'assemblée générale, mais vous ne pouvez pas venir.",
    sourceMessage: {
      from: "Association des Tilleuls",
      subject: "Convocation à l'assemblée générale",
      body: "Chers membres,\nL'assemblée générale a lieu le mardi 4 février à 20 h à la maison de quartier.\nNous présenterons le programme et le budget.\nMerci de confirmer votre présence.\nLe comité",
    },
    instruction: "Répondez au comité : dites que vous ne pouvez pas venir, expliquez pourquoi et demandez le compte rendu de la réunion.",
    points: ["Votre absence", "La raison de votre absence", "Une demande de compte rendu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-5",
    title: "Renseigner un ami",
    situation: "Un ami veut des informations sur votre association.",
    sourceMessage: {
      from: "Ibrahim",
      subject: "Ton association de quartier",
      body: "Salut,\nTu m'as parlé de ton association de quartier. Ça m'intéresse !\nQu'est-ce qu'on peut y faire ? C'est cher ?\nIbrahim",
    },
    instruction: "Répondez à Ibrahim : décrivez deux activités de l'association, donnez le prix de la cotisation et proposez de l'emmener avec vous une fois.",
    points: ["Deux activités", "Le prix de la cotisation", "Une invitation à venir avec vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-6",
    title: "Une parcelle au jardin partagé",
    situation: "Le responsable du jardin partagé vous propose une parcelle.",
    sourceMessage: {
      from: "M. Costa",
      subject: "Une parcelle est libre",
      body: "Bonjour,\nUne parcelle est libre au jardin partagé, derrière l'église.\nVous étiez sur la liste d'attente : la voulez-vous ?\nM. Costa",
    },
    instruction: "Répondez à M. Costa : acceptez la parcelle, demandez les règles du jardin (outils, eau) et dites quand vous allez commencer.",
    points: ["Votre acceptation", "Une question sur les règles", "Quand vous commencez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-7",
    title: "Proposer une nouvelle activité",
    situation: "Le comité demande des idées d'activités pour l'année prochaine.",
    sourceMessage: {
      from: "Association des Tilleuls",
      subject: "Appel à idées",
      body: "Chers membres,\nNous préparons le programme de l'année prochaine.\nAvez-vous des idées de nouvelles activités pour le quartier ?\nÉcrivez-nous !\nLe comité",
    },
    instruction: "Répondez au comité : proposez une nouvelle activité, indiquez un jour et un horaire possibles et dites comment vous pouvez aider à l'organiser.",
    points: ["L'activité proposée", "Un jour et un horaire", "Votre aide pour l'organisation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-8",
    title: "Vélo réparé",
    situation: "Un bénévole de l'atelier vélo vous écrit.",
    sourceMessage: {
      from: "Atelier vélo",
      subject: "Votre vélo est prêt",
      body: "Bonjour,\nNous avons réparé votre vélo : les freins et une roue.\nVous pouvez venir le chercher samedi matin, entre 9 h et 12 h.\nL'équipe de l'atelier",
    },
    instruction: "Répondez à l'atelier : remerciez l'équipe, demandez combien vous devez payer ou donner et proposez de devenir bénévole à votre tour.",
    points: ["Un remerciement", "Une question sur le prix", "Votre proposition de bénévolat"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-9",
    title: "Tenir la permanence",
    situation: "La présidente cherche quelqu'un pour la permanence du mercredi.",
    sourceMessage: {
      from: "Mme Blanc",
      subject: "Permanence du mercredi",
      body: "Bonjour,\nNous cherchons un membre pour tenir la permanence le mercredi, de 17 h à 19 h,\nune ou deux fois par mois.\nÊtes-vous intéressé(e) ?\nMme Blanc, présidente",
    },
    instruction: "Répondez à Mme Blanc : acceptez pour une fois par mois, expliquez vos disponibilités et demandez en quoi consiste exactement la permanence.",
    points: ["Votre acceptation", "Vos disponibilités", "Une question sur la permanence"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-10",
    title: "Collecte de vêtements",
    situation: "L'association organise une collecte pour des familles du quartier.",
    sourceMessage: {
      from: "Association des Tilleuls",
      subject: "Collecte de vêtements d'hiver",
      body: "Chers membres,\nNous organisons une collecte de vêtements d'hiver pour des familles du quartier.\nVous pouvez apporter vos dons à la permanence du mercredi.\nMerci pour votre générosité !\nLe comité",
    },
    instruction: "Répondez au comité : dites ce que vous allez donner, précisez quand vous apporterez vos dons et proposez votre aide pour la distribution.",
    points: ["Ce que vous donnez", "Quand vous l'apportez", "Votre aide pour la distribution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

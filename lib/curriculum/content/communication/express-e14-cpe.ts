import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPoDialogue,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E14.1 — Bilan A2 (thèmes transversaux : logement, consommation, santé,
   travail, voyages)
   ════════════════════════════════════════════════════════════════════════════ */

const E14_1_CE_TEXT = `E-mail de Camille à son amie Sofia

Chère Sofia,

Que de nouvelles depuis ton départ ! Le mois dernier, j'ai enfin trouvé un CDI dans un magasin de bricolage. Je commence tôt le matin, mais l'équipe est très sympathique.

Autre grande nouvelle : nous venons de signer le bail d'un appartement dans le quartier de la gare. Il est plus grand que l'ancien et le loyer reste raisonnable. On emménage le premier octobre. Pour les meubles, j'attends les soldes : le canapé que j'aime est encore trop cher.

Côté santé, je fais du vélo trois fois par semaine et je mange mieux. Je me sens en pleine forme !

Dernière chose : en décembre, nous prendrons le train pour venir te voir. Est-ce que tu peux nous réserver un petit hôtel près de chez toi ?

Réponds-moi vite !
Camille`;

const E14_1_CE_POOL = buildExpressPool("e14-1-ce", [
  q({
    id: "ce-q1",
    textQ: "Quelle bonne nouvelle professionnelle Camille annonce-t-elle ?",
    text: [
      "Elle a trouvé un CDI",
      "Elle a été augmentée",
      "Elle a ouvert son propre magasin",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai enfin trouvé un _________ dans un magasin de bricolage.",
    fill: "CDI",
    fillA: ["cdi"],
    vfQ: "Camille a trouvé un travail en CDI.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où se trouve le nouvel appartement de Camille ?",
    text: [
      "Dans le quartier de la gare",
      "Au bord du lac",
      "À la campagne",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous venons de signer le bail d'un appartement dans le quartier de la _________.",
    fill: "gare",
    vfQ: "Le nouvel appartement est plus petit que l'ancien.",
    vfC: 1,
  }),
  q({
    id: "ce-q3",
    textQ: "Pourquoi Camille attend-elle les soldes ?",
    text: [
      "Parce que le canapé qu'elle aime est encore trop cher",
      "Parce que les magasins sont fermés",
      "Parce qu'elle n'a pas le temps d'y aller",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le canapé que j'aime est encore trop _________.",
    fill: "cher",
    vfQ: "Camille a déjà acheté son canapé.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Que fait Camille pour rester en forme ?",
    text: [
      "Du vélo trois fois par semaine",
      "De la natation le week-end",
      "Du yoga tous les matins",
    ],
    textC: 0,
    img: ["vélo", "natation", "yoga"],
    imgC: 0,
    fillQ: "Je fais du _________ trois fois par semaine et je mange mieux.",
    fill: "vélo",
    fillA: ["velo"],
    vfQ: "Camille se sent en pleine forme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment Camille voyagera-t-elle en décembre ?",
    text: ["En train", "En avion", "En voiture"],
    textC: 0,
    img: ["train", "avion", "voiture"],
    imgC: 0,
    fillQ: "En décembre, nous prendrons le _________ pour venir te voir.",
    fill: "train",
    vfQ: "Camille viendra voir Sofia en avion.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "Que demande Camille à Sofia ?",
    text: [
      "De réserver un petit hôtel",
      "De venir la chercher à la gare",
      "De lui prêter des meubles",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Est-ce que tu peux nous réserver un petit _________ près de chez toi ?",
    fill: "hôtel",
    fillA: ["hotel"],
    vfQ: "Camille demande à Sofia de réserver un hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quand Camille emménage-t-elle dans le nouvel appartement ?",
    text: ["Le premier octobre", "Le premier septembre", "À la fin de l'année"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On emménage le premier _________.",
    fill: "octobre",
    vfQ: "Le montant du loyer est indiqué dans l'e-mail.",
    vfC: 2,
  }),
]);

export const E14_1_CE: CommunicationExercise = readingPoolExercise({
  id: "e14-1-ce",
  readingText: E14_1_CE_TEXT,
  questionPool: E14_1_CE_POOL,
});

/* ── Production orale — dialogues à jouer (bilan A2, thèmes variés) ────────── */

export const E14_1_PO: ExpressPoDialogue[] = [
  {
    id: "e14-1-po-1",
    title: "Visiter un appartement",
    context: "Vous visitez un appartement à louer avec l'agent immobilier.",
    roleA: { title: "L'agent immobilier", vous: "l'agent immobilier / l'agente immobilière" },
    roleB: { title: "Le visiteur", vous: "le visiteur / la visiteuse" },
    lines: [
      { role: "A", text: "Bonjour ! Voici l'appartement : trois pièces au deuxième étage." },
      { role: "B", text: "Il est lumineux ! Le salon est plus grand que sur les photos." },
      { role: "A", text: "Oui, et la cuisine a été refaite l'année dernière." },
      { role: "B", text: "Très bien. Quel est le montant du loyer, charges comprises ?" },
      { role: "A", text: "Mille deux cents francs par mois, avec la cave et le balcon." },
      { role: "B", text: "C'est raisonnable. À partir de quand est-il libre ?" },
      { role: "A", text: "Dès le premier du mois prochain. Il faudra un dossier complet." },
      { role: "B", text: "Parfait, je vous enverrai mes documents demain." },
    ],
  },
  {
    id: "e14-1-po-2",
    title: "Un problème dans l'appartement",
    context: "Vous téléphonez à votre propriétaire : il y a une fuite d'eau dans la salle de bain.",
    roleA: { title: "Le locataire", vous: "le locataire / la locataire" },
    roleB: { title: "Le propriétaire", vous: "le propriétaire / la propriétaire" },
    lines: [
      { role: "A", text: "Bonjour, je vous appelle parce qu'il y a une fuite d'eau dans la salle de bain." },
      { role: "B", text: "Ah, depuis quand avez-vous ce problème ?" },
      { role: "A", text: "Depuis hier soir. L'eau coule sous le lavabo." },
      { role: "B", text: "D'accord. Vous avez fermé le robinet principal ?" },
      { role: "A", text: "Oui, je l'ai fermé tout de suite, mais il faut réparer vite." },
      { role: "B", text: "Bien sûr. Le plombier passera demain matin, vers neuf heures." },
      { role: "A", text: "Très bien, je serai à la maison. Merci de votre réponse rapide." },
      { role: "B", text: "De rien. Appelez-moi si ça s'aggrave ce soir." },
    ],
  },
  {
    id: "e14-1-po-3",
    title: "Échanger un article",
    context: "Vous avez acheté un pull, mais il est trop petit. Vous retournez au magasin.",
    roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour ! Je peux vous aider ?" },
      { role: "B", text: "Bonjour, j'ai acheté ce pull samedi, mais il est trop petit." },
      { role: "A", text: "Pas de problème. Vous avez le ticket de caisse ?" },
      { role: "B", text: "Oui, le voici. Je voudrais l'échanger contre une taille plus grande." },
      { role: "A", text: "Nous avons le même modèle en taille L. Vous voulez l'essayer ?" },
      { role: "B", text: "Oui, s'il vous plaît… C'est parfait, celui-ci me va très bien." },
      { role: "A", text: "Très bien, je fais l'échange. C'est le même prix, il n'y a rien à payer." },
      { role: "B", text: "Merci beaucoup, bonne journée !" },
    ],
  },
  {
    id: "e14-1-po-4",
    title: "Profiter des soldes",
    context: "Vous cherchez un canapé pendant les soldes et vous demandez conseil au vendeur.",
    roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour ! Vous cherchez quelque chose de précis ?" },
      { role: "B", text: "Oui, un canapé pour mon nouvel appartement. J'ai vu qu'il y avait des soldes." },
      { role: "A", text: "Tout à fait, ce modèle gris est à moitié prix cette semaine." },
      { role: "B", text: "Il est confortable ? Je l'ai vu moins cher sur internet." },
      { role: "A", text: "Essayez-le ! Et chez nous, la livraison est gratuite." },
      { role: "B", text: "C'est un bon argument. Vous livrez en combien de temps ?" },
      { role: "A", text: "En une semaine. On peut aussi reprendre votre ancien canapé." },
      { role: "B", text: "Alors c'est décidé, je le prends !" },
    ],
  },
  {
    id: "e14-1-po-5",
    title: "Chez le médecin",
    context: "Vous êtes fatigué depuis deux semaines et vous consultez votre médecin.",
    roleA: { title: "Le médecin", vous: "le médecin / la médecin" },
    roleB: { title: "Le patient", vous: "le patient / la patiente" },
    lines: [
      { role: "A", text: "Bonjour, asseyez-vous. Qu'est-ce qui vous amène ?" },
      { role: "B", text: "Je suis très fatigué depuis deux semaines et je dors mal." },
      { role: "A", text: "Est-ce que vous avez changé quelque chose dans votre vie récemment ?" },
      { role: "B", text: "Oui, j'ai commencé un nouveau travail. Je finis souvent tard." },
      { role: "A", text: "Je vois. Vous faites du sport ? Vous mangez à des heures régulières ?" },
      { role: "B", text: "Pas vraiment, je n'ai plus le temps depuis que je travaille." },
      { role: "A", text: "Il faut marcher trente minutes par jour et vous coucher plus tôt." },
      { role: "B", text: "D'accord, docteur, je vais essayer. Merci pour vos conseils." },
    ],
  },
  {
    id: "e14-1-po-6",
    title: "Conseils pour être en forme",
    context: "Un ami vous trouve en pleine forme et vous demande votre secret.",
    roleA: { title: "L'ami curieux", vous: "l'ami / l'amie" },
    roleB: { title: "L'ami en forme", vous: "l'ami / l'amie" },
    lines: [
      { role: "A", text: "Tu as bonne mine en ce moment ! Qu'est-ce que tu as changé ?" },
      { role: "B", text: "Merci ! Je fais du vélo trois fois par semaine et je mange mieux." },
      { role: "A", text: "Tu as arrêté les plats préparés ?" },
      { role: "B", text: "Oui, je cuisine des légumes frais et je mange moins de sucre." },
      { role: "A", text: "Et tu trouves le temps, avec ton travail ?" },
      { role: "B", text: "Je vais au travail à vélo, comme ça je fais du sport tous les jours." },
      { role: "A", text: "Bonne idée ! Je vais essayer, ma voiture reste souvent au garage." },
      { role: "B", text: "Commence doucement, et tu verras la différence en un mois !" },
    ],
  },
  {
    id: "e14-1-po-7",
    title: "Entretien d'embauche",
    context: "Vous passez un entretien pour un poste de vendeur dans un magasin.",
    roleA: { title: "Le recruteur", vous: "le recruteur / la recruteuse" },
    roleB: { title: "Le candidat", vous: "le candidat / la candidate" },
    lines: [
      { role: "A", text: "Bonjour, merci d'être venu. Parlez-moi de votre expérience." },
      { role: "B", text: "Bonjour ! J'ai travaillé deux ans comme vendeur dans un supermarché." },
      { role: "A", text: "Très bien. Pourquoi voulez-vous travailler chez nous ?" },
      { role: "B", text: "J'aime le contact avec les clients et votre magasin est près de chez moi." },
      { role: "A", text: "Vous pouvez travailler le samedi ?" },
      { role: "B", text: "Oui, pas de problème. Je suis disponible tout de suite." },
      { role: "A", text: "Parfait. Nous vous donnerons une réponse à la fin de la semaine." },
      { role: "B", text: "Merci beaucoup pour cet entretien. Au revoir !" },
    ],
  },
  {
    id: "e14-1-po-8",
    title: "Annoncer une bonne nouvelle",
    context: "Vous venez de trouver un CDI et vous l'annoncez à un ami.",
    roleA: { title: "Le nouvel employé", vous: "l'ami / l'amie" },
    roleB: { title: "L'ami", vous: "l'ami / l'amie" },
    lines: [
      { role: "A", text: "Devine quoi ! J'ai enfin trouvé un CDI, après six mois de recherche !" },
      { role: "B", text: "Bravo, c'est une super nouvelle ! C'est dans quel domaine ?" },
      { role: "A", text: "Dans un magasin de bricolage. Je commence lundi prochain." },
      { role: "B", text: "Tu vas faire quoi exactement ?" },
      { role: "A", text: "Je vais conseiller les clients et m'occuper des commandes." },
      { role: "B", text: "Et les horaires ? Tu finiras tard le soir ?" },
      { role: "A", text: "Non, je commence tôt mais je finis à dix-sept heures." },
      { role: "B", text: "Génial ! Il faut fêter ça ce week-end !" },
    ],
  },
  {
    id: "e14-1-po-9",
    title: "Acheter un billet de train",
    context: "Vous achetez un billet de train au guichet de la gare pour partir en week-end.",
    roleA: { title: "L'employé de la gare", vous: "l'employé / l'employée" },
    roleB: { title: "Le voyageur", vous: "le voyageur / la voyageuse" },
    lines: [
      { role: "A", text: "Bonjour, que puis-je faire pour vous ?" },
      { role: "B", text: "Bonjour, je voudrais un billet pour Lyon, samedi matin." },
      { role: "A", text: "Il y a un train direct à huit heures et un autre à dix heures." },
      { role: "B", text: "Celui de huit heures, s'il vous plaît. Aller-retour." },
      { role: "A", text: "Vous revenez quand ?" },
      { role: "B", text: "Dimanche soir, vers dix-huit heures si possible." },
      { role: "A", text: "Très bien. Ça fait soixante-quatre francs, place côté fenêtre." },
      { role: "B", text: "Parfait, je paie par carte. Merci beaucoup !" },
    ],
  },
  {
    id: "e14-1-po-10",
    title: "À la réception de l'hôtel",
    context: "Vous arrivez à l'hôtel où vous avez réservé une chambre pour deux nuits.",
    roleA: { title: "Le réceptionniste", vous: "le réceptionniste / la réceptionniste" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonsoir, bienvenue à l'hôtel du Parc !" },
      { role: "B", text: "Bonsoir, j'ai réservé une chambre pour deux nuits, au nom de Martin." },
      { role: "A", text: "Oui, une chambre double avec vue sur le jardin. Voici votre clé." },
      { role: "B", text: "Merci. Le petit déjeuner est à quelle heure ?" },
      { role: "A", text: "De sept heures à dix heures, au rez-de-chaussée." },
      { role: "B", text: "Parfait. Est-ce qu'il y a le wifi dans la chambre ?" },
      { role: "A", text: "Oui, c'est gratuit. Le code est sur la carte de votre chambre." },
      { role: "B", text: "Merci beaucoup, bonne soirée !" },
    ],
  },
];

/* ── Production écrite — consignes (A2 : 80 mots minimum) ─────────────────── */

export const E14_1_PE: ExpressPePrompt[] = [
  {
    id: "e14-1-pe-1",
    title: "Raconter son déménagement",
    situation: "Vous venez d'emménager dans un nouvel appartement.",
    instruction: "Écrivez un e-mail à un ami : décrivez le nouvel appartement, comparez-le avec l'ancien et racontez comment le déménagement s'est passé.",
    points: ["La description du nouvel appartement", "La comparaison avec l'ancien", "Le récit du déménagement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pe-2",
    title: "Message au propriétaire",
    situation: "Il y a un problème dans votre appartement (fuite d'eau, chauffage en panne…).",
    instruction: "Écrivez un message à votre propriétaire : expliquez le problème, dites depuis quand il existe et demandez une réparation rapide.",
    points: ["Le problème et depuis quand", "Ce que vous avez déjà fait", "La demande de réparation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pe-3",
    title: "Réclamation après un achat",
    situation: "Vous avez commandé un objet sur internet, mais il est arrivé cassé.",
    instruction: "Écrivez un e-mail au service client : décrivez votre commande, expliquez le problème et demandez un échange ou un remboursement.",
    points: ["La commande (objet, date)", "Le problème constaté", "La demande d'échange ou de remboursement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pe-4",
    title: "Comparer deux magasins",
    situation: "Un ami nouveau dans votre ville vous demande où faire ses courses.",
    instruction: "Écrivez un message : comparez deux magasins de votre quartier (prix, choix, horaires) et dites lequel vous préférez et pourquoi.",
    points: ["Les points forts de chaque magasin", "La comparaison des prix et des horaires", "Votre préférence et la raison"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pe-5",
    title: "Message d'absence au travail",
    situation: "Vous êtes malade et vous ne pouvez pas aller travailler aujourd'hui.",
    instruction: "Écrivez un message à votre chef : excusez-vous, décrivez vos symptômes, dites que vous allez chez le médecin et quand vous pensez revenir.",
    points: ["L'excuse et les symptômes", "Le rendez-vous chez le médecin", "La date de retour prévue"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pe-6",
    title: "Conseils pour être en forme",
    situation: "Un ami se sent fatigué et vous demande comment vous restez en forme.",
    instruction: "Écrivez un message : décrivez vos bonnes habitudes (sport, alimentation, sommeil) et donnez-lui trois conseils pour aller mieux.",
    points: ["Vos habitudes de sport", "Votre alimentation", "Trois conseils pour votre ami"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pe-7",
    title: "Candidature pour un emploi",
    situation: "Un magasin de votre quartier cherche un vendeur ou une vendeuse.",
    instruction: "Écrivez un court e-mail de candidature : présentez-vous, décrivez votre expérience et expliquez pourquoi ce poste vous intéresse.",
    points: ["Votre présentation", "Votre expérience", "Pourquoi ce poste vous intéresse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pe-8",
    title: "Première semaine de travail",
    situation: "Vous venez de commencer un nouveau travail.",
    instruction: "Racontez votre première semaine à un ami : décrivez vos tâches, vos collègues et vos horaires, et dites ce que vous aimez ou non.",
    points: ["Vos tâches", "Les collègues et les horaires", "Ce que vous aimez ou non"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pe-9",
    title: "E-mail de vacances",
    situation: "Vous êtes en voyage depuis trois jours.",
    instruction: "Écrivez un e-mail à un ami : racontez votre voyage (transport, hôtel), décrivez ce que vous avez visité et ce que vous ferez demain.",
    points: ["Le voyage et l'hôtel", "Ce que vous avez déjà visité", "Le programme de demain"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pe-10",
    title: "Organiser un week-end",
    situation: "Vous voulez partir en week-end avec un ami le mois prochain.",
    instruction: "Écrivez un message pour lui proposer le programme : la destination, le transport et le logement, et deux activités prévues sur place.",
    points: ["La destination et les dates", "Le transport et le logement", "Deux activités prévues"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

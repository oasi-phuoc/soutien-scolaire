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

/* ── Compréhension écrite — E6.2 Voyager en transport public ──────────────── */

const CE_TEXT = `Objet : Notre voyage à Marseille

Salut Karim !

J'ai les billets pour Marseille. Nous partons samedi matin avec le TGV de 8 h 10.
Le trajet dure trois heures. Il y a un arrêt à Lyon.
J'ai réservé deux places côté fenêtre. Les places sont dans la voiture 12.
Le billet aller-retour coûte 58 euros par personne.
Attention ! Il y a une grève jeudi et vendredi. Samedi, il n'y a pas de grève.
Le rendez-vous est à la gare, à 7 h 45. Je t'attends devant le quai numéro 3.
N'oublie pas ton billet !

À samedi,
Julie`;

const CE_POOL = buildExpressPool("e6-2-ce", [
  q({
    id: "ce-q1",
    textQ: "Quel train Julie et Karim prennent-ils ?",
    text: ["Le TGV de 8 h 10", "Le TER de 8 h 10", "Le TGV de 10 h 08"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous partons samedi matin avec le _________ de 8 h 10.",
    fill: "TGV",
    fillA: ["tgv"],
    vfQ: "Julie et Karim partent samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de temps dure le trajet ?",
    text: ["Trois heures", "Deux heures", "Six heures"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le trajet dure _________ heures.",
    fill: "trois",
    fillA: ["3"],
    vfQ: "Le trajet est direct, sans arrêt.",
    vfC: 1,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelles places Julie a-t-elle réservées ?",
    text: [
      "Deux places côté fenêtre",
      "Deux places côté couloir",
      "Une place côté fenêtre",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai réservé deux places côté _________.",
    fill: "fenêtre",
    fillA: ["fenetre"],
    vfQ: "Les places sont dans la voiture 12.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le billet aller-retour ?",
    text: ["58 euros", "48 euros", "85 euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le billet aller-retour coûte _________ euros par personne.",
    fill: "58",
    fillA: ["cinquante-huit", "cinquante huit"],
    vfQ: "Le billet aller-retour coûte 85 euros.",
    vfC: 1,
  }),
  q({
    id: "ce-q5",
    textQ: "Quels jours y a-t-il une grève ?",
    text: ["Jeudi et vendredi", "Samedi et dimanche", "Lundi et mardi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a une _________ jeudi et vendredi.",
    fill: "grève",
    fillA: ["greve"],
    vfQ: "Il y a une grève samedi.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est le rendez-vous samedi ?",
    text: [
      "Devant le quai numéro 3",
      "Dans la voiture-bar",
      "Devant la gare routière",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'attends devant le quai numéro _________.",
    fill: "3",
    fillA: ["trois"],
    vfQ: "L'heure d'arrivée à Marseille est indiquée dans le message.",
    vfC: 2,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment Julie et Karim voyagent-ils ?",
    text: ["En train", "En avion", "En voiture"],
    textC: 0,
    img: ["train", "avion", "voiture"],
    imgC: 0,
    fillQ: "J'ai les _________ pour Marseille.",
    fill: "billets",
    fillA: ["billet"],
    vfQ: "Julie et Karim voyagent en train.",
    vfC: 0,
  }),
]);

export const E6_2_CE: CommunicationExercise = readingPoolExercise({
  id: "e6-2-ce",
  readingText: CE_TEXT,
  questionPool: CE_POOL,
});

/* ── Production orale — dialogues à jouer (thème transport public) ────────── */

const EMPLOYE = { title: "L'employé", vous: "l'employé / l'employée" };
const VOYAGEUR = { title: "Le voyageur", vous: "le voyageur / la voyageuse" };

export const E6_2_PO: ExpressPoDialogue[] = [
  {
    id: "e6-2-po-1",
    title: "Acheter un billet au guichet",
    context: "Vous achetez un billet de train au guichet de la gare.",
    roleA: EMPLOYE,
    roleB: VOYAGEUR,
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Bonjour, je voudrais un billet pour Lyon, s'il vous plaît." },
      { role: "A", text: "Un aller simple ou un aller-retour ?" },
      { role: "B", text: "Un aller simple, pour demain matin." },
      { role: "A", text: "Vous avez un train à 7 h 30. Le billet est à 35 euros." },
      { role: "B", text: "Parfait. Le trajet dure combien de temps ?" },
      { role: "A", text: "Deux heures, c'est un train direct." },
      { role: "B", text: "Très bien, je le prends. Merci !" },
    ],
  },
  {
    id: "e6-2-po-2",
    title: "Réserver une place côté fenêtre",
    context: "Vous réservez votre place dans le train pour un long trajet.",
    roleA: EMPLOYE,
    roleB: VOYAGEUR,
    lines: [
      { role: "A", text: "Bonjour, vous désirez ?" },
      { role: "B", text: "Je voudrais réserver une place dans le TGV de samedi." },
      { role: "A", text: "Vous préférez une place côté fenêtre ou côté couloir ?" },
      { role: "B", text: "Côté fenêtre, s'il vous plaît. J'aime regarder le paysage." },
      { role: "A", text: "Très bien. Vous avez la place 42, voiture 8." },
      { role: "B", text: "C'est en première ou en deuxième classe ?" },
      { role: "A", text: "En deuxième classe, comme demandé." },
      { role: "B", text: "Parfait, merci beaucoup !" },
    ],
  },
  {
    id: "e6-2-po-3",
    title: "Le TGV est complet",
    context: "Vous voulez un billet de TGV, mais le train est complet.",
    roleA: EMPLOYE,
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour, que puis-je faire pour vous ?" },
      { role: "B", text: "Je voudrais un billet pour le TGV de 9 h, pour Bordeaux." },
      { role: "A", text: "Désolé, le TGV de 9 h est complet." },
      { role: "B", text: "Ah… il y a un autre train ce matin ?" },
      { role: "A", text: "Oui, un TER à 9 h 20, mais le trajet est plus long." },
      { role: "B", text: "Il dure combien de temps ?" },
      { role: "A", text: "Trois heures et demie, avec dix arrêts." },
      { role: "B", text: "Bon, d'accord, je prends le TER. Merci !" },
    ],
  },
  {
    id: "e6-2-po-4",
    title: "Un retard annoncé",
    context: "Votre train a du retard et vous demandez des informations au guichet.",
    roleA: VOYAGEUR,
    roleB: EMPLOYE,
    lines: [
      { role: "A", text: "Bonjour, le train pour Nantes a du retard ?" },
      { role: "B", text: "Oui, il a trente minutes de retard." },
      { role: "A", text: "Oh non ! Pourquoi ?" },
      { role: "B", text: "Il y a un problème sur la ligne." },
      { role: "A", text: "Je vais rater ma correspondance à Paris…" },
      { role: "B", text: "Vous pouvez prendre le train suivant avec le même billet." },
      { role: "A", text: "Ah, très bien. Il part à quelle heure ?" },
      { role: "B", text: "À 14 h 15, quai numéro 5." },
    ],
  },
  {
    id: "e6-2-po-5",
    title: "Problème de place dans le train",
    context: "Quelqu'un est assis à votre place dans le train.",
    roleA: { title: "Le passager", vous: "le passager / la passagère" },
    roleB: { title: "La passagère", vous: "le passager / la passagère" },
    lines: [
      { role: "A", text: "Pardon madame, j'ai la place 46, côté fenêtre." },
      { role: "B", text: "Ah bon ? Moi aussi, j'ai la place 46 !" },
      { role: "A", text: "Vous êtes dans quelle voiture sur votre billet ?" },
      { role: "B", text: "Attendez, je regarde… voiture 5." },
      { role: "A", text: "Ici, c'est la voiture 4. La voiture 5 est à côté." },
      { role: "B", text: "Oh, excusez-moi ! Je me suis trompée." },
      { role: "A", text: "Pas de problème, ça arrive à tout le monde." },
      { role: "B", text: "Merci, bon voyage !" },
    ],
  },
  {
    id: "e6-2-po-6",
    title: "Le contrôleur passe",
    context: "Le contrôleur vérifie les billets dans le train.",
    roleA: { title: "Le contrôleur", vous: "le contrôleur / la contrôleuse" },
    roleB: { title: "Le passager", vous: "le passager / la passagère" },
    lines: [
      { role: "A", text: "Bonjour, votre billet s'il vous plaît." },
      { role: "B", text: "Bonjour, voilà. Il est sur mon téléphone." },
      { role: "A", text: "Merci… C'est bon. Vous allez jusqu'à Marseille ?" },
      { role: "B", text: "Oui. Nous arrivons à quelle heure ?" },
      { role: "A", text: "À 15 h 40, nous sommes à l'heure." },
      { role: "B", text: "Super. Il y a une voiture-bar dans ce train ?" },
      { role: "A", text: "Oui, en voiture 14, au milieu du train." },
      { role: "B", text: "Merci beaucoup, bonne journée !" },
    ],
  },
  {
    id: "e6-2-po-7",
    title: "Organiser un covoiturage",
    context: "Vous téléphonez à un conducteur pour un covoiturage trouvé sur une application.",
    roleA: { title: "Le conducteur", vous: "le conducteur / la conductrice" },
    roleB: { title: "Le passager", vous: "le passager / la passagère" },
    lines: [
      { role: "A", text: "Allô, bonjour ! C'est pour le covoiturage de samedi ?" },
      { role: "B", text: "Oui, bonjour. Vous allez bien à Toulouse ?" },
      { role: "A", text: "Oui, je pars à 8 h. Le trajet dure quatre heures." },
      { role: "B", text: "Parfait. On se retrouve où ?" },
      { role: "A", text: "Devant la gare, à côté du parking." },
      { role: "B", text: "D'accord. C'est combien par personne ?" },
      { role: "A", text: "Vingt euros. Vous payez sur l'application." },
      { role: "B", text: "Très bien, à samedi !" },
    ],
  },
  {
    id: "e6-2-po-8",
    title: "Quel quai ?",
    context: "Vous cherchez le quai de votre train dans une grande gare.",
    roleA: VOYAGEUR,
    roleB: EMPLOYE,
    lines: [
      { role: "A", text: "Excusez-moi, le train pour Lille part de quel quai ?" },
      { role: "B", text: "Le train de 10 h 12 ? Quai numéro 7." },
      { role: "A", text: "C'est de quel côté, s'il vous plaît ?" },
      { role: "B", text: "Tout droit, puis à droite après l'escalier." },
      { role: "A", text: "Merci. Le train est à l'heure ?" },
      { role: "B", text: "Oui, il arrive dans cinq minutes." },
      { role: "A", text: "Je dois composter mon billet ?" },
      { role: "B", text: "Non, votre e-billet suffit. Bon voyage !" },
    ],
  },
  {
    id: "e6-2-po-9",
    title: "TER ou TGV ?",
    context: "Vous hésitez entre le TER et le TGV pour votre voyage.",
    roleA: EMPLOYE,
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour, vous désirez ?" },
      { role: "B", text: "Je voudrais le prix d'un billet pour Lyon, le 2 décembre." },
      { role: "A", text: "Vous avez un TER à 49 euros et un TGV à 67 euros." },
      { role: "B", text: "Quelle est la différence de temps ?" },
      { role: "A", text: "Le TER dure 3 h 45, le TGV seulement 1 h 45." },
      { role: "B", text: "Deux heures de moins ! Et le TGV est direct ?" },
      { role: "A", text: "Presque, il y a deux arrêts seulement." },
      { role: "B", text: "Alors je prends le TGV. Merci !" },
    ],
  },
  {
    id: "e6-2-po-10",
    title: "Une grève : trouver une solution",
    context: "Il y a une grève des trains demain. Vous cherchez une solution avec un ami.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: { title: "L'amie", vous: "l'ami / l'amie" },
    lines: [
      { role: "A", text: "Tu as vu ? Il y a une grève des trains demain !" },
      { role: "B", text: "Oh non ! Et mon train pour Nice est annulé ?" },
      { role: "A", text: "Oui, regarde sur l'application, tous les trains sont annulés." },
      { role: "B", text: "Qu'est-ce que je peux faire ?" },
      { role: "A", text: "Tu peux faire du covoiturage. C'est moins cher que le train." },
      { role: "B", text: "Bonne idée ! Le trajet dure combien de temps en voiture ?" },
      { role: "A", text: "Cinq heures environ. Il y a un départ demain à 9 h." },
      { role: "B", text: "Parfait, je réserve tout de suite. Merci !" },
    ],
  },
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E6_2_PE: ExpressPePrompt[] = [
  {
    id: "e6-2-pe-1",
    title: "Proposer un voyage en train",
    situation: "Vous voulez partir en week-end en train avec un ami.",
    instruction: "Écrivez un message à votre ami : proposez la destination, le jour, l'heure du train et le prix du billet.",
    points: ["La destination et le jour", "L'heure du train", "Le prix du billet"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pe-2",
    title: "Un voyage avec un problème",
    situation: "Pendant votre dernier voyage en train, il y a eu un retard.",
    instruction: "Racontez ce voyage à un ami : où vous alliez, le problème et comment le voyage s'est terminé.",
    points: ["La destination", "Le problème (retard, grève…)", "La fin du voyage"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pe-3",
    title: "Réclamation pour un retard",
    situation: "Votre train a eu deux heures de retard et vous avez raté un rendez-vous important.",
    instruction: "Écrivez un e-mail à la compagnie de train : expliquez le problème, les conséquences et demandez un remboursement.",
    points: ["Le train et le retard", "Les conséquences pour vous", "La demande de remboursement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pe-4",
    title: "Mon premier covoiturage",
    situation: "Vous avez fait un covoiturage pour la première fois le week-end dernier.",
    instruction: "Racontez ce trajet : comment vous avez réservé, avec qui vous avez voyagé et votre opinion sur le covoiturage.",
    points: ["La réservation", "Le conducteur et les passagers", "Votre opinion"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pe-5",
    title: "Train ou covoiturage ?",
    situation: "Un ami hésite entre le train et le covoiturage pour un long trajet.",
    instruction: "Comparez les deux : le prix, la durée et le confort. Dites ce que vous conseillez et pourquoi.",
    points: ["Un avantage du train", "Un avantage du covoiturage", "Votre conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pe-6",
    title: "Message au conducteur",
    situation: "Vous avez réservé un covoiturage pour samedi sur une application.",
    instruction: "Écrivez un message au conducteur : présentez-vous, confirmez le trajet et demandez le lieu du rendez-vous.",
    points: ["Votre présentation", "La confirmation du trajet", "Une question sur le rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pe-7",
    title: "Acheter un billet sur l'application",
    situation: "Votre grand-père veut acheter un billet de train sur son téléphone, mais il ne sait pas comment faire.",
    instruction: "Écrivez les étapes pour lui : choisir le trajet, choisir la place et payer le billet.",
    points: ["Choisir le trajet et l'heure", "Choisir la place", "Payer et garder le billet"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pe-8",
    title: "Mon trajet en transport public",
    situation: "Un correspondant vous demande comment vous vous déplacez chaque jour.",
    instruction: "Décrivez votre trajet quotidien : le transport, la durée, le prix et ce que vous aimez ou n'aimez pas.",
    points: ["Le transport et la durée", "Le prix (ticket, abonnement)", "Ce que vous aimez ou pas"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pe-9",
    title: "Prévenir d'un retard",
    situation: "Votre train a du retard et un ami vous attend à la gare d'arrivée.",
    instruction: "Écrivez un message à votre ami : expliquez le retard, donnez la nouvelle heure d'arrivée et proposez une solution.",
    points: ["Le retard et la raison", "La nouvelle heure d'arrivée", "Une proposition (attendre, se retrouver ailleurs…)"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-2-pe-10",
    title: "Mon transport préféré",
    situation: "Un site de voyage demande aux lecteurs de présenter leur moyen de transport préféré.",
    instruction: "Décrivez votre transport préféré : pourquoi vous l'aimez, quand vous le prenez et un souvenir de voyage.",
    points: ["Le transport et pourquoi", "Quand vous le prenez", "Un souvenir de voyage"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

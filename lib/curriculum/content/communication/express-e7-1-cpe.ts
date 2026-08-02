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

/* ── Compréhension écrite — E7.1 Aller à l'hôtel ──────────────────────────── */

const CE_TEXT = `Hôtel Bellevue — Informations pour les clients

L'hôtel Bellevue se trouve à côté de la plage.
Il est entre la piscine et le parc.
La chambre double coûte 85 € la nuit.
Le petit déjeuner coûte 9 € par personne.
La demi-pension coûte 110 €.
La demi-pension comprend le petit déjeuner et le repas du soir.
Le repas du soir est au restaurant de l'hôtel.
La piscine est ouverte du 1er juin au 15 septembre.
La réception est ouverte de 7 h à 22 h.
Pour réserver, téléphonez à la réception ou envoyez un e-mail.
Attention : l'hôtel est complet en août. Réservez tôt !`;

const CE_POOL = buildExpressPool("e7-1-ce", [
  q({
    id: "ce-q1",
    textQ: "Où se trouve l'hôtel Bellevue ?",
    text: ["À côté de la plage", "À la montagne", "Au bord du lac"],
    textC: 0,
    img: ["plage", "montagne", "lac"],
    imgC: 0,
    fillQ: "L'hôtel Bellevue se trouve à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel Bellevue se trouve entre la piscine et le parc.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien coûte la chambre double pour une nuit ?",
    text: ["85 €", "58 €", "95 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La chambre double coûte _________ € la nuit.",
    fill: "85",
    fillA: ["quatre-vingt-cinq"],
    vfQ: "La chambre double coûte 95 € la nuit.",
    vfC: 1,
  }),
  q({
    id: "ce-q3",
    textQ: "Qu'est-ce que la demi-pension comprend ?",
    text: [
      "Le petit déjeuner et le repas du soir",
      "Le déjeuner seulement",
      "Tous les repas de la journée",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La demi-pension comprend le petit déjeuner et le repas du _________.",
    fill: "soir",
    vfQ: "Le restaurant de l'hôtel est ouvert à midi.",
    vfC: 2,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la piscine est-elle ouverte ?",
    text: ["Du 1er juin au 15 septembre", "Toute l'année", "Du 1er mai au 30 août"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La piscine est ouverte du 1er juin au 15 _________.",
    fill: "septembre",
    vfQ: "La piscine est ouverte toute l'année.",
    vfC: 1,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment peut-on réserver une chambre ?",
    text: ["Par téléphone ou par e-mail", "Seulement sur place", "Par courrier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour réserver, téléphonez à la _________ ou envoyez un e-mail.",
    fill: "réception",
    fillA: ["reception"],
    vfQ: "On peut réserver une chambre par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À quelle heure la réception ferme-t-elle ?",
    text: ["À 22 h", "À 20 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La réception est ouverte de 7 h à _________ h.",
    fill: "22",
    fillA: ["vingt-deux"],
    vfQ: "L'hôtel a des chambres libres en août.",
    vfC: 1,
  }),
]);

export const E7_1_CE: CommunicationExercise = readingPoolExercise({
  id: "e7-1-ce",
  readingText: CE_TEXT,
  questionPool: CE_POOL,
});

/* ── Production orale — dialogues à jouer (thème hôtel / camping) ─────────── */

const RECEPTIONNISTE = { title: "Le réceptionniste", vous: "le réceptionniste / la réceptionniste" };
const CLIENT = { title: "Le client", vous: "le client / la cliente" };
const AMI_1 = { title: "Le premier ami", vous: "le premier ami / la première amie" };
const AMI_2 = { title: "Le deuxième ami", vous: "le deuxième ami / la deuxième amie" };

export const E7_1_PO: ExpressPoDialogue[] = [
  {
    id: "e7-1-po-1",
    title: "Réserver une chambre par téléphone",
    context: "Vous téléphonez à l'hôtel pour réserver une chambre pour deux personnes.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Hôtel Bellevue, bonjour !" },
      { role: "B", text: "Bonjour, je voudrais réserver une chambre pour deux personnes, s'il vous plaît." },
      { role: "A", text: "Oui, pour quelles dates ?" },
      { role: "B", text: "Du 11 au 13 mai, pour deux nuits." },
      { role: "A", text: "J'ai une chambre avec un grand lit à 85 € la nuit. Ça vous va ?" },
      { role: "B", text: "Oui, très bien. Le petit déjeuner est compris ?" },
      { role: "A", text: "Non, il coûte 9 € par personne. C'est à quel nom ?" },
      { role: "B", text: "Au nom de Martin. Merci beaucoup !" },
    ],
  },
  {
    id: "e7-1-po-2",
    title: "L'arrivée à l'hôtel",
    context: "Vous arrivez à l'hôtel. Vous avez une réservation.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonsoir, bienvenue à l'hôtel ! Vous avez une réservation ?" },
      { role: "B", text: "Oui, une chambre double pour deux nuits." },
      { role: "A", text: "Très bien. Voici votre clé, chambre 12, au premier étage." },
      { role: "B", text: "Merci. Le petit déjeuner est à quelle heure ?" },
      { role: "A", text: "De 7 h à 10 h, dans la salle à côté de la réception." },
      { role: "B", text: "Parfait. Et il y a le wifi dans la chambre ?" },
      { role: "A", text: "Oui, le code est écrit sur la carte de la clé. Bonne soirée !" },
      { role: "B", text: "Merci, bonne soirée !" },
    ],
  },
  {
    id: "e7-1-po-3",
    title: "L'hôtel est complet",
    context: "Vous demandez une chambre, mais l'hôtel est complet.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Bonjour, vous avez une chambre disponible pour ce soir ?" },
      { role: "A", text: "Je suis désolé, l'hôtel est complet ce soir." },
      { role: "B", text: "Ah non… Vous connaissez un autre hôtel ?" },
      { role: "A", text: "Oui, l'hôtel de la Gare a souvent des chambres libres." },
      { role: "B", text: "Il est loin d'ici ?" },
      { role: "A", text: "Non, il est à côté de la gare, à dix minutes à pied." },
      { role: "B", text: "Merci beaucoup pour votre aide !" },
    ],
  },
  {
    id: "e7-1-po-4",
    title: "Une place au camping",
    context: "Vous arrivez au camping avec votre famille et votre tente.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, bienvenue au camping des Pins !" },
      { role: "B", text: "Bonjour, on voudrait une place pour notre tente, pour trois nuits." },
      { role: "A", text: "Vous préférez une place devant la rivière ou à côté de la piscine ?" },
      { role: "B", text: "Devant la rivière, s'il vous plaît. C'est plus calme." },
      { role: "A", text: "Très bien. C'est 20 € la nuit pour la place." },
      { role: "B", text: "D'accord. Il y a un restaurant au camping ?" },
      { role: "A", text: "Oui, il est ouvert le soir, derrière l'accueil." },
      { role: "B", text: "Parfait, merci !" },
    ],
  },
  {
    id: "e7-1-po-5",
    title: "Demi-pension ou petit déjeuner ?",
    context: "Vous demandez des informations sur les repas de l'hôtel.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, vous désirez ?" },
      { role: "B", text: "Bonjour, vous proposez la pension complète ?" },
      { role: "A", text: "Non, nous proposons le petit déjeuner ou la demi-pension." },
      { role: "B", text: "Qu'est-ce qui est compris dans la demi-pension ?" },
      { role: "A", text: "Le petit déjeuner et le repas du soir au restaurant." },
      { role: "B", text: "Et c'est combien ?" },
      { role: "A", text: "110 € par personne, avec la chambre." },
      { role: "B", text: "Très bien, je prends la demi-pension." },
    ],
  },
  {
    id: "e7-1-po-6",
    title: "Où est situé l'hôtel ?",
    context: "Vous téléphonez pour savoir où se trouve l'hôtel et comment y aller.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Hôtel de la Plage, bonjour !" },
      { role: "B", text: "Bonjour, où est situé votre hôtel, s'il vous plaît ?" },
      { role: "A", text: "Nous sommes à côté de la plage, entre le port et le parc." },
      { role: "B", text: "C'est loin de la gare ?" },
      { role: "A", text: "Non, à quinze minutes à pied. Vous pouvez aussi prendre le bus 3." },
      { role: "B", text: "Super. Il y a un parking pour la voiture ?" },
      { role: "A", text: "Oui, un parking gratuit derrière l'hôtel." },
      { role: "B", text: "Merci beaucoup, à demain !" },
    ],
  },
  {
    id: "e7-1-po-7",
    title: "Un problème dans la chambre",
    context: "Vous appelez la réception : il y a un problème dans votre chambre.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Réception, bonjour. Je vous écoute." },
      { role: "B", text: "Bonjour, il n'y a pas d'eau chaude dans ma salle de bain." },
      { role: "A", text: "Ah, je suis désolé. Vous êtes dans quelle chambre ?" },
      { role: "B", text: "Dans la chambre 25, au deuxième étage." },
      { role: "A", text: "Un technicien arrive dans dix minutes." },
      { role: "B", text: "Merci. Et ma chambre est très bruyante, à côté de l'ascenseur…" },
      { role: "A", text: "Demain, je peux vous donner une chambre plus calme." },
      { role: "B", text: "C'est très gentil, merci beaucoup !" },
    ],
  },
  {
    id: "e7-1-po-8",
    title: "Choisir un bungalow",
    context: "Vous voulez louer un bungalow pour quatre personnes au camping.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Qu'est-ce que je peux faire pour vous ?" },
      { role: "B", text: "Bonjour, vous avez un bungalow pour quatre personnes ?" },
      { role: "A", text: "Oui, il me reste deux bungalows : un devant la rivière et un à droite de la forêt." },
      { role: "B", text: "Je préfère celui devant la rivière. C'est combien ?" },
      { role: "A", text: "80 € la nuit. Vous restez combien de nuits ?" },
      { role: "B", text: "Deux nuits, s'il vous plaît." },
      { role: "A", text: "Très bien, ça fait 160 €. Voici la clé, c'est le bungalow n° 7." },
      { role: "B", text: "Merci, bonne journée !" },
    ],
  },
  {
    id: "e7-1-po-9",
    title: "Le départ de l'hôtel",
    context: "C'est le matin du départ. Vous payez et vous rendez la clé.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Vous partez aujourd'hui ?" },
      { role: "B", text: "Oui, voici la clé de la chambre 12." },
      { role: "A", text: "Merci. Alors, deux nuits et deux petits déjeuners… ça fait 188 €." },
      { role: "B", text: "Je peux payer par carte ?" },
      { role: "A", text: "Bien sûr. Voilà votre ticket." },
      { role: "B", text: "Merci. Vous pouvez appeler un taxi pour la gare ?" },
      { role: "A", text: "Oui, il arrive dans cinq minutes. Bon voyage !" },
      { role: "B", text: "Merci pour tout, au revoir !" },
    ],
  },
  {
    id: "e7-1-po-10",
    title: "Hôtel ou camping ?",
    context: "Vous préparez les vacances avec un ami : hôtel ou camping ?",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Alors, pour les vacances, on prend un hôtel ou un camping ?" },
      { role: "B", text: "Je préfère le camping, c'est moins cher !" },
      { role: "A", text: "Oui, mais à l'hôtel, il y a une vraie salle de bain…" },
      { role: "B", text: "Au camping des Pins, il y a des bungalows avec douche." },
      { role: "A", text: "C'est vrai ? Et il est où, ce camping ?" },
      { role: "B", text: "À côté de la plage, entre la mer et la forêt." },
      { role: "A", text: "Bon, d'accord pour le camping. On réserve un bungalow ?" },
      { role: "B", text: "Oui ! Je téléphone demain matin." },
    ],
  },
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E7_1_PE: ExpressPePrompt[] = [
  {
    id: "e7-1-pe-1",
    title: "E-mail de réservation",
    situation: "Vous voulez passer trois nuits à l'hôtel Bellevue au mois de juillet.",
    instruction: "Écrivez un e-mail à l'hôtel : présentez-vous, donnez les dates et le type de chambre, et posez une question sur le prix.",
    points: ["Les dates du séjour", "Le type de chambre", "Une question sur le prix ou le petit déjeuner"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-2",
    title: "Raconter son séjour",
    situation: "Vous rentrez de vacances. Vous avez passé une semaine dans un petit hôtel.",
    instruction: "Racontez votre séjour à un ami : où était l'hôtel, comment était la chambre et ce que vous avez aimé.",
    points: ["La situation de l'hôtel", "La description de la chambre", "Ce que vous avez aimé"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-3",
    title: "Annuler une réservation",
    situation: "Vous êtes malade et vous ne pouvez pas partir en week-end.",
    instruction: "Écrivez un message à l'hôtel : excusez-vous, expliquez le problème et demandez d'annuler votre réservation.",
    points: ["L'excuse", "La raison de l'annulation", "Les dates de la réservation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-4",
    title: "Carte postale du camping",
    situation: "Vous êtes en vacances au camping, à côté de la plage.",
    instruction: "Écrivez une carte postale à votre famille : décrivez le camping, le paysage autour et une activité que vous faites.",
    points: ["Le camping et le bungalow", "Le paysage (plage, forêt, rivière…)", "Une activité que vous faites"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-5",
    title: "Questions avant de réserver",
    situation: "Vous hésitez entre deux hôtels pour vos vacances.",
    instruction: "Écrivez un e-mail à un hôtel : posez trois questions sur la piscine, les repas et la situation de l'hôtel.",
    points: ["Une question sur la piscine", "Une question sur les repas", "Une question sur la situation de l'hôtel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-6",
    title: "Hôtel ou camping ?",
    situation: "Un ami prépare ses vacances et hésite entre l'hôtel et le camping.",
    instruction: "Expliquez la différence : les avantages de l'hôtel, les avantages du camping et votre préférence.",
    points: ["Les avantages de l'hôtel", "Les avantages du camping", "Votre préférence"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-7",
    title: "Avis sur internet",
    situation: "Vous avez passé deux nuits dans un hôtel et vous écrivez un avis sur internet.",
    instruction: "Écrivez votre avis : la chambre, le petit déjeuner et une phrase sur l'équipe de l'hôtel.",
    points: ["La chambre", "Le petit déjeuner", "L'équipe de l'hôtel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-8",
    title: "Message de réclamation",
    situation: "Votre chambre est bruyante et la douche ne marche pas.",
    instruction: "Écrivez un message à la réception : décrivez les deux problèmes et demandez une autre chambre.",
    points: ["Le premier problème", "Le deuxième problème", "Votre demande"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-9",
    title: "L'hôtel de mes rêves",
    situation: "Un magazine de voyage demande : « Comment est l'hôtel de vos rêves ? »",
    instruction: "Décrivez l'hôtel de vos rêves : où il se trouve, comment sont les chambres et ce qu'il y a autour.",
    points: ["La situation (mer, montagne…)", "Les chambres", "Ce qu'il y a autour de l'hôtel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-10",
    title: "Expliquer le chemin",
    situation: "Un ami vient vous voir à votre hôtel de vacances.",
    instruction: "Écrivez un message : expliquez où est l'hôtel avec des prépositions de lieu (devant, derrière, à côté de, entre).",
    points: ["Le point de départ (gare, arrêt de bus…)", "Deux prépositions de lieu", "Un lieu connu à côté de l'hôtel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

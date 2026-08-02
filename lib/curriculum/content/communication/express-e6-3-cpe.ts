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

/* ── Compréhension écrite — E6.3 Aller à l'aéroport ───────────────────────── */

const CE_TEXT = `Compagnie Air Bleu — Informations pour les passagers

Votre vol part à 14 h 30.
L'enregistrement ouvre trois heures avant le départ.
L'enregistrement est au comptoir 24.
Vous pouvez enregistrer une valise de 23 kilos maximum.
La valise cabine reste avec vous. Elle pèse 8 kilos maximum.
Au contrôle de sécurité, les bouteilles d'eau sont interdites.
Présentez votre passeport et votre carte d'embarquement à la porte B6.
L'embarquement commence à 13 h 50.
Attention ! La porte ferme vingt minutes avant le départ.
Bon vol !`;

const CE_POOL = buildExpressPool("e6-3-ce", [
  q({
    id: "ce-q1",
    textQ: "À quelle heure le vol part-il ?",
    text: ["À 14 h 30", "À 13 h 50", "À 16 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre vol part à 14 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "Le vol part à 14 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand l'enregistrement ouvre-t-il ?",
    text: [
      "Trois heures avant le départ",
      "Une heure avant le départ",
      "Vingt minutes avant le départ",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'enregistrement ouvre _________ heures avant le départ.",
    fill: "trois",
    fillA: ["3"],
    vfQ: "L'enregistrement se fait au comptoir 24.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le poids maximum de la valise enregistrée ?",
    text: ["23 kilos", "8 kilos", "32 kilos"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez enregistrer une valise de _________ kilos maximum.",
    fill: "23",
    fillA: ["vingt-trois", "vingt trois"],
    vfQ: "La valise cabine peut peser 10 kilos.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Qu'est-ce qui est interdit au contrôle de sécurité ?",
    text: ["Les bouteilles d'eau", "Les ordinateurs", "Les livres"],
    textC: 0,
    img: ["bouteille", "ordinateur", "livre"],
    imgC: 0,
    fillQ: "Au contrôle de sécurité, les bouteilles d'eau sont _________.",
    fill: "interdites",
    fillA: ["interdite", "interdits", "interdit"],
    vfQ: "On peut passer le contrôle de sécurité avec une bouteille d'eau.",
    vfC: 1,
  }),
  q({
    id: "ce-q5",
    textQ: "Quels documents faut-il présenter à la porte ?",
    text: [
      "Le passeport et la carte d'embarquement",
      "Le billet et le visa",
      "La carte d'identité seulement",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Présentez votre passeport et votre carte d'_________ à la porte B6.",
    fill: "embarquement",
    vfQ: "Il faut présenter son passeport à la porte B6.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À quelle heure l'embarquement commence-t-il ?",
    text: ["À 13 h 50", "À 14 h 30", "À 12 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'embarquement commence à 13 h _________.",
    fill: "50",
    fillA: ["cinquante"],
    vfQ: "Le numéro du siège est indiqué dans le texte.",
    vfC: 2,
  }),
  q({
    id: "ce-q7",
    textQ: "Quand la porte d'embarquement ferme-t-elle ?",
    text: [
      "Vingt minutes avant le départ",
      "Dix minutes avant le départ",
      "Cinq minutes avant le départ",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La porte ferme _________ minutes avant le départ.",
    fill: "vingt",
    fillA: ["20"],
    vfQ: "La porte ferme vingt minutes avant le départ.",
    vfC: 0,
  }),
]);

export const E6_3_CE: CommunicationExercise = readingPoolExercise({
  id: "e6-3-ce",
  readingText: CE_TEXT,
  questionPool: CE_POOL,
});

/* ── Production orale — dialogues à jouer (thème aéroport) ────────────────── */

const AGENT = { title: "L'agent", vous: "l'agent / l'agente" };
const VOYAGEUR = { title: "Le voyageur", vous: "le voyageur / la voyageuse" };
const PASSAGER = { title: "Le passager", vous: "le passager / la passagère" };

export const E6_3_PO: ExpressPoDialogue[] = [
  {
    id: "e6-3-po-1",
    title: "À l'enregistrement",
    context: "Vous enregistrez vos bagages au comptoir de la compagnie aérienne.",
    roleA: AGENT,
    roleB: VOYAGEUR,
    lines: [
      { role: "A", text: "Bonjour, quelle est votre destination ?" },
      { role: "B", text: "Bonjour, je vais à Bruxelles." },
      { role: "A", text: "Votre passeport, s'il vous plaît. Vous avez des bagages à enregistrer ?" },
      { role: "B", text: "Oui, une valise. Et je garde mon sac à dos en cabine." },
      { role: "A", text: "Très bien. Voici votre carte d'embarquement, siège 28F." },
      { role: "B", text: "C'est côté hublot ?" },
      { role: "A", text: "Oui. L'embarquement commence à 6 h 45, porte B12." },
      { role: "B", text: "Merci beaucoup, au revoir !" },
    ],
  },
  {
    id: "e6-3-po-2",
    title: "Au contrôle de sécurité",
    context: "Vous passez le contrôle de sécurité avant d'aller à votre porte.",
    roleA: { title: "L'agent de sécurité", vous: "l'agent / l'agente de sécurité" },
    roleB: PASSAGER,
    lines: [
      { role: "A", text: "Bonjour, posez votre sac sur le tapis, s'il vous plaît." },
      { role: "B", text: "Voilà. Je dois enlever ma veste aussi ?" },
      { role: "A", text: "Oui, et sortez votre ordinateur du sac." },
      { role: "B", text: "D'accord, il est ici." },
      { role: "A", text: "Vous avez une bouteille d'eau ? C'est interdit." },
      { role: "B", text: "Ah oui, désolé ! Je la jette." },
      { role: "A", text: "Merci. C'est bon, vous pouvez passer." },
      { role: "B", text: "Merci, bonne journée !" },
    ],
  },
  {
    id: "e6-3-po-3",
    title: "Contrôle des passeports",
    context: "Vous passez le contrôle des passeports avant un vol international.",
    roleA: AGENT,
    roleB: VOYAGEUR,
    lines: [
      { role: "A", text: "Bonjour, votre passeport s'il vous plaît. Quelle est votre destination ?" },
      { role: "B", text: "Bonjour, je vais aux États-Unis." },
      { role: "A", text: "Vous avez un visa ?" },
      { role: "B", text: "Oui, bien sûr. Le voilà." },
      { role: "A", text: "C'est un voyage de tourisme ou de travail ?" },
      { role: "B", text: "De tourisme, je pars deux semaines." },
      { role: "A", text: "Très bien, tout est en ordre. Bon vol !" },
      { role: "B", text: "Merci beaucoup !" },
    ],
  },
  {
    id: "e6-3-po-4",
    title: "Trouver la porte d'embarquement",
    context: "Vous ne trouvez pas votre porte d'embarquement et vous demandez de l'aide.",
    roleA: PASSAGER,
    roleB: { title: "L'employé de l'aéroport", vous: "l'employé / l'employée" },
    lines: [
      { role: "A", text: "Excusez-moi, je cherche la porte B6." },
      { role: "B", text: "C'est dans le terminal B, après le contrôle de sécurité." },
      { role: "A", text: "C'est loin ? Mon vol part dans quarante minutes." },
      { role: "B", text: "Non, dix minutes à pied. Suivez les panneaux." },
      { role: "A", text: "La porte n'est pas sur ma carte d'embarquement…" },
      { role: "B", text: "C'est normal, regardez le tableau des départs." },
      { role: "A", text: "Ah oui, vol pour Porto, porte B6. Merci !" },
      { role: "B", text: "De rien, dépêchez-vous ! Bon voyage !" },
    ],
  },
  {
    id: "e6-3-po-5",
    title: "Valise perdue",
    context: "Votre valise n'est pas arrivée sur le tapis. Vous allez au service bagages.",
    roleA: { title: "L'employé du service bagages", vous: "l'employé / l'employée" },
    roleB: VOYAGEUR,
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Oui, je ne trouve pas ma valise sur le tapis 4." },
      { role: "A", text: "Quel est votre numéro de vol ?" },
      { role: "B", text: "Le KL173, je viens d'Amsterdam." },
      { role: "A", text: "Comment est votre valise ?" },
      { role: "B", text: "Elle est rouge, avec une étiquette à mon nom." },
      { role: "A", text: "D'accord. Nous vous appelons quand nous la trouvons." },
      { role: "B", text: "Merci, voici mon numéro de téléphone." },
    ],
  },
  {
    id: "e6-3-po-6",
    title: "Vol retardé",
    context: "Votre vol est retardé et vous demandez des informations au comptoir.",
    roleA: PASSAGER,
    roleB: { title: "L'employé de la compagnie", vous: "l'employé / l'employée" },
    lines: [
      { role: "A", text: "Bonjour, le vol pour Lisbonne est retardé ?" },
      { role: "B", text: "Oui, il a une heure de retard." },
      { role: "A", text: "Pourquoi ce retard ?" },
      { role: "B", text: "À cause de la météo. L'avion arrive plus tard." },
      { role: "A", text: "À quelle heure part-il maintenant ?" },
      { role: "B", text: "À 15 h 30. L'embarquement commence à 15 h." },
      { role: "A", text: "D'accord. La porte reste la même ?" },
      { role: "B", text: "Oui, porte C4. Regardez le tableau des départs." },
    ],
  },
  {
    id: "e6-3-po-7",
    title: "Hublot ou couloir ?",
    context: "Vous choisissez votre siège au comptoir d'enregistrement.",
    roleA: AGENT,
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour, vous préférez un siège côté hublot ou côté couloir ?" },
      { role: "B", text: "Côté hublot, s'il vous plaît. J'aime regarder les nuages." },
      { role: "A", text: "Désolé, il ne reste que des sièges côté couloir." },
      { role: "B", text: "Ah… et à côté de la fenêtre de secours ?" },
      { role: "A", text: "Oui, le 15C est libre, avec plus de place pour les jambes." },
      { role: "B", text: "Parfait, je le prends !" },
      { role: "A", text: "Voici votre carte d'embarquement. Embarquement à 10 h 20." },
      { role: "B", text: "Merci beaucoup !" },
    ],
  },
  {
    id: "e6-3-po-8",
    title: "Valise trop lourde",
    context: "Votre valise dépasse le poids autorisé à l'enregistrement.",
    roleA: AGENT,
    roleB: VOYAGEUR,
    lines: [
      { role: "A", text: "Votre valise pèse 26 kilos. Le maximum est 23 kilos." },
      { role: "B", text: "Oh non ! Qu'est-ce que je peux faire ?" },
      { role: "A", text: "Vous pouvez payer un supplément ou enlever des affaires." },
      { role: "B", text: "Le supplément coûte combien ?" },
      { role: "A", text: "Cinquante euros." },
      { role: "B", text: "C'est cher ! Je mets des vêtements dans mon sac cabine." },
      { role: "A", text: "Bonne idée. Attention, le sac cabine est limité à 8 kilos." },
      { role: "B", text: "D'accord, merci. Voilà, c'est bon maintenant !" },
    ],
  },
  {
    id: "e6-3-po-9",
    title: "À bord de l'avion",
    context: "Vous montez dans l'avion et vous cherchez votre siège.",
    roleA: { title: "Le steward", vous: "le steward / l'hôtesse" },
    roleB: { title: "La passagère", vous: "le passager / la passagère" },
    lines: [
      { role: "A", text: "Bonjour, bienvenue à bord ! Votre carte d'embarquement ?" },
      { role: "B", text: "Bonjour, voilà. Je cherche le siège 28F." },
      { role: "A", text: "C'est au fond de l'avion, à droite, côté hublot." },
      { role: "B", text: "Merci. Je peux mettre ma valise cabine où ?" },
      { role: "A", text: "Dans le coffre au-dessus de votre siège." },
      { role: "B", text: "D'accord. Le vol dure combien de temps ?" },
      { role: "A", text: "Deux heures dix. Nous arrivons à 16 h 40." },
      { role: "B", text: "Parfait, merci beaucoup !" },
    ],
  },
  {
    id: "e6-3-po-10",
    title: "Accueillir un ami à l'aéroport",
    context: "Vous attendez un ami à l'aéroport, à la sortie des arrivées.",
    roleA: { title: "L'ami qui attend", vous: "l'ami / l'amie" },
    roleB: { title: "Le voyageur", vous: "le voyageur / la voyageuse" },
    lines: [
      { role: "A", text: "Salut ! Bienvenue ! Le vol s'est bien passé ?" },
      { role: "B", text: "Salut ! Oui, mais il y a eu une escale à Zurich." },
      { role: "A", text: "Tu as récupéré ta valise ?" },
      { role: "B", text: "Oui, elle est arrivée vite sur le tapis." },
      { role: "A", text: "Super. Tu veux boire quelque chose avant de partir ?" },
      { role: "B", text: "Non merci, je suis fatigué. On va chez toi ?" },
      { role: "A", text: "Oui, ma voiture est au parking de l'aéroport." },
      { role: "B", text: "Parfait, allons-y !" },
    ],
  },
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E6_3_PE: ExpressPePrompt[] = [
  {
    id: "e6-3-pe-1",
    title: "Annoncer son arrivée",
    situation: "Vous prenez l'avion vendredi et un ami vient vous chercher à l'aéroport.",
    instruction: "Écrivez un message à votre ami : donnez le numéro du vol, l'heure d'arrivée et le lieu du rendez-vous à l'aéroport.",
    points: ["Le numéro du vol", "L'heure d'arrivée", "Le lieu du rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pe-2",
    title: "Mon premier voyage en avion",
    situation: "Vous avez pris l'avion pour la première fois.",
    instruction: "Racontez ce voyage : l'enregistrement, le contrôle de sécurité et vos impressions pendant le vol.",
    points: ["L'enregistrement", "Le contrôle de sécurité", "Vos impressions en vol"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pe-3",
    title: "Valise perdue : e-mail à la compagnie",
    situation: "Votre valise n'est pas arrivée à l'aéroport après votre vol.",
    instruction: "Écrivez un e-mail à la compagnie aérienne : donnez le numéro du vol, décrivez votre valise et demandez quand vous allez la recevoir.",
    points: ["Le numéro du vol", "La description de la valise", "Votre question"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pe-4",
    title: "Préparer la valise cabine",
    situation: "Votre sœur prend l'avion pour la première fois et prépare sa valise cabine.",
    instruction: "Écrivez-lui des instructions : ce qu'elle peut mettre dans la valise cabine, ce qui est interdit et le poids maximum.",
    points: ["Ce qu'on peut emporter", "Ce qui est interdit", "Le poids maximum"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pe-5",
    title: "Les étapes à l'aéroport",
    situation: "Un ami prend l'avion pour la première fois et il a peur d'être perdu à l'aéroport.",
    instruction: "Expliquez-lui les étapes : l'enregistrement, le contrôle de sécurité et l'embarquement.",
    points: ["L'enregistrement des bagages", "Le contrôle de sécurité", "L'embarquement à la porte"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pe-6",
    title: "Vol retardé : prévenir la famille",
    situation: "Votre vol a trois heures de retard et votre famille vous attend.",
    instruction: "Écrivez un message à votre famille : expliquez le retard, donnez la nouvelle heure d'arrivée et rassurez-les.",
    points: ["Le retard et la raison", "La nouvelle heure d'arrivée", "Une phrase pour rassurer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pe-7",
    title: "Avion ou train ?",
    situation: "Un ami hésite entre l'avion et le train pour aller à Marseille.",
    instruction: "Comparez les deux : la durée, le prix et le confort. Dites ce que vous conseillez et pourquoi.",
    points: ["Un avantage de l'avion", "Un avantage du train", "Votre conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pe-8",
    title: "Message pendant l'escale",
    situation: "Vous êtes en escale dans un aéroport et vous attendez votre deuxième vol.",
    instruction: "Écrivez un message à un ami : racontez votre premier vol, décrivez l'aéroport et dites à quelle heure part le prochain avion.",
    points: ["Le premier vol", "L'aéroport de l'escale", "L'heure du prochain vol"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pe-9",
    title: "Question sur les bagages",
    situation: "Vous partez en voyage et vous voulez emporter beaucoup d'affaires.",
    instruction: "Écrivez un e-mail à la compagnie aérienne : demandez le poids autorisé, le prix d'une deuxième valise et les objets interdits.",
    points: ["Le poids autorisé", "Le prix d'une deuxième valise", "Les objets interdits"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-3-pe-10",
    title: "Un problème à l'aéroport",
    situation: "Pendant votre dernier voyage, vous avez eu un problème à l'aéroport.",
    instruction: "Racontez ce qui s'est passé : le problème (porte, retard, contrôle…), ce que vous avez fait et la fin de l'histoire.",
    points: ["Le problème", "Ce que vous avez fait", "La fin de l'histoire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

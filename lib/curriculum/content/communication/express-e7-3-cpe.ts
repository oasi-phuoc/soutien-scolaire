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

/* ── Compréhension écrite — E7.3 Visiter des lieux culturels ──────────────── */

const CE_TEXT = `Musée des Beaux-Arts — Exposition « Couleurs du Sud »

Le musée présente une grande exposition de peinture.
L'exposition dure du 3 juin au 30 août.
Le musée est ouvert du mardi au dimanche.
Il est ouvert de 10 h à 18 h.
Le musée est fermé le lundi.
Le billet coûte 12 € pour les adultes.
C'est gratuit pour les enfants de moins de 10 ans.
Avec la carte d'étudiant, le billet est à 6 €.
Il y a une visite guidée le samedi à 14 h.
Vous pouvez acheter vos e-billets en ligne sur le site du musée.`;

const CE_POOL = buildExpressPool("e7-3-ce", [
  q({
    id: "ce-q1",
    textQ: "Qu'est-ce que le musée présente cet été ?",
    text: [
      "Une exposition de peinture",
      "Un concert de musique",
      "Une pièce de théâtre",
    ],
    textC: 0,
    img: ["peinture", "concert", "théâtre"],
    imgC: 0,
    fillQ: "Le musée présente une grande exposition de _________.",
    fill: "peinture",
    vfQ: "L'exposition est une exposition de photographie.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour le musée est-il fermé ?",
    text: ["Le lundi", "Le dimanche", "Le samedi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le musée est fermé le _________.",
    fill: "lundi",
    vfQ: "Le musée est ouvert le dimanche.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien coûte le billet pour les adultes ?",
    text: ["12 €", "6 €", "20 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le billet coûte _________ € pour les adultes.",
    fill: "12",
    fillA: ["douze"],
    vfQ: "Avec la carte d'étudiant, le billet est à 6 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Pour qui l'entrée est-elle gratuite ?",
    text: [
      "Les enfants de moins de 10 ans",
      "Les étudiants",
      "Les personnes âgées",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est gratuit pour les enfants de moins de _________ ans.",
    fill: "10",
    fillA: ["dix"],
    vfQ: "Les personnes âgées ne paient pas le billet.",
    vfC: 2,
  }),
  q({
    id: "ce-q5",
    textQ: "Quand a lieu la visite guidée ?",
    text: ["Le samedi à 14 h", "Le dimanche à 10 h", "Le mercredi à 16 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a une visite guidée le samedi à _________ h.",
    fill: "14",
    fillA: ["quatorze"],
    vfQ: "La visite guidée a lieu le samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où peut-on acheter des e-billets ?",
    text: ["Sur le site du musée", "À la mairie", "Au cinéma"],
    textC: 0,
    img: ["internet", "mairie", "cinéma"],
    imgC: 0,
    fillQ: "Vous pouvez acheter vos e-billets en _________ sur le site du musée.",
    fill: "ligne",
    vfQ: "On peut acheter les billets seulement au musée.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Jusqu'à quand dure l'exposition ?",
    text: ["Jusqu'au 30 août", "Jusqu'au 3 juin", "Jusqu'au 31 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'exposition dure du 3 juin au 30 _________.",
    fill: "août",
    fillA: ["aout"],
    vfQ: "L'exposition commence le 3 juin.",
    vfC: 0,
  }),
]);

export const E7_3_CE: CommunicationExercise = readingPoolExercise({
  id: "e7-3-ce",
  readingText: CE_TEXT,
  questionPool: CE_POOL,
});

/* ── Production orale — dialogues à jouer (thème lieux culturels) ─────────── */

const EMPLOYE = { title: "L'employé", vous: "l'employé / l'employée" };
const VISITEUR = { title: "Le visiteur", vous: "le visiteur / la visiteuse" };
const AMI_1 = { title: "Le premier ami", vous: "le premier ami / la première amie" };
const AMI_2 = { title: "Le deuxième ami", vous: "le deuxième ami / la deuxième amie" };

export const E7_3_PO: ExpressPoDialogue[] = [
  {
    id: "e7-3-po-1",
    title: "Acheter des billets au musée",
    context: "Vous achetez des billets pour l'exposition avec votre famille.",
    roleA: EMPLOYE,
    roleB: VISITEUR,
    lines: [
      { role: "A", text: "Bonjour ! Vous désirez ?" },
      { role: "B", text: "Bonjour, je voudrais quatre billets pour l'exposition, s'il vous plaît." },
      { role: "A", text: "Quatre billets pour des adultes ?" },
      { role: "B", text: "Non, deux adultes et deux enfants de 8 ans." },
      { role: "A", text: "C'est gratuit pour les enfants de moins de 10 ans. Ça fait 24 €." },
      { role: "B", text: "Voilà. Il y a une visite guidée aujourd'hui ?" },
      { role: "A", text: "Oui, à 14 h, devant l'entrée de l'exposition." },
      { role: "B", text: "Parfait, merci beaucoup !" },
    ],
  },
  {
    id: "e7-3-po-2",
    title: "Les horaires du musée",
    context: "Vous téléphonez au musée pour connaître les horaires et les prix.",
    roleA: EMPLOYE,
    roleB: VISITEUR,
    lines: [
      { role: "A", text: "Musée des Beaux-Arts, bonjour !" },
      { role: "B", text: "Bonjour, le musée est ouvert le dimanche ?" },
      { role: "A", text: "Oui, de 10 h à 18 h. Nous sommes fermés le lundi." },
      { role: "B", text: "Et l'exposition de peinture, c'est jusqu'à quand ?" },
      { role: "A", text: "Jusqu'au 30 août." },
      { role: "B", text: "Le billet coûte combien ?" },
      { role: "A", text: "12 € pour les adultes, 6 € pour les étudiants." },
      { role: "B", text: "Merci beaucoup, à dimanche !" },
    ],
  },
  {
    id: "e7-3-po-3",
    title: "Cinéma ou théâtre ?",
    context: "Vous choisissez une sortie pour ce soir avec un ami.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "On sort ce soir ? Cinéma ou théâtre ?" },
      { role: "B", text: "Au cinéma ! Il y a un bon film à la séance de 20 h 30." },
      { role: "A", text: "Ah oui, le film avec cet acteur de la Comédie-Française ?" },
      { role: "B", text: "Oui ! J'adore cet acteur." },
      { role: "A", text: "On achète des e-billets sur internet ?" },
      { role: "B", text: "Bonne idée, c'est plus rapide." },
      { role: "A", text: "Et avant le film, on mange une pizza ?" },
      { role: "B", text: "Parfait ! Rendez-vous à 19 h devant la pizzeria." },
    ],
  },
  {
    id: "e7-3-po-4",
    title: "Réserver des places de concert",
    context: "Vous téléphonez pour réserver des places pour un concert.",
    roleA: EMPLOYE,
    roleB: VISITEUR,
    lines: [
      { role: "A", text: "Salle de concert, bonjour !" },
      { role: "B", text: "Bonjour, vous avez encore des places pour le concert de samedi ?" },
      { role: "A", text: "Désolé, samedi c'est complet. Mais il reste des places pour vendredi." },
      { role: "B", text: "D'accord, alors deux places pour vendredi." },
      { role: "A", text: "Très bien. C'est 25 € la place." },
      { role: "B", text: "Vous faites des réductions pour les étudiants ?" },
      { role: "A", text: "Oui, 15 € avec la carte d'étudiant." },
      { role: "B", text: "Super, une place normale et une place étudiant alors !" },
    ],
  },
  {
    id: "e7-3-po-5",
    title: "La visite guidée du château",
    context: "Vous visitez un château et vous demandez des informations.",
    roleA: EMPLOYE,
    roleB: VISITEUR,
    lines: [
      { role: "A", text: "Bonjour, bienvenue au château !" },
      { role: "B", text: "Bonjour, il y a des visites guidées aujourd'hui ?" },
      { role: "A", text: "Oui, à 11 h et à 15 h. La visite dure une heure." },
      { role: "B", text: "C'est combien avec la visite guidée ?" },
      { role: "A", text: "10 € l'entrée et 4 € pour la visite guidée." },
      { role: "B", text: "Très bien, deux billets pour la visite de 15 h." },
      { role: "A", text: "Voilà. Rendez-vous à 15 h devant l'escalier, dans la cour." },
      { role: "B", text: "Merci beaucoup !" },
    ],
  },
  {
    id: "e7-3-po-6",
    title: "La réduction étudiant",
    context: "Vous êtes étudiant(e) et vous demandez une réduction au cinéma.",
    roleA: EMPLOYE,
    roleB: VISITEUR,
    lines: [
      { role: "A", text: "Bonsoir, vous désirez ?" },
      { role: "B", text: "Bonsoir, une place pour la séance de 20 h, s'il vous plaît." },
      { role: "A", text: "Plein tarif, c'est 11 €." },
      { role: "B", text: "Vous faites des réductions pour les étudiants ?" },
      { role: "A", text: "Oui, 7 € 50 avec la carte d'étudiant." },
      { role: "B", text: "Voici ma carte." },
      { role: "A", text: "Merci. Voilà votre billet, salle 3." },
      { role: "B", text: "Merci, bonne soirée !" },
    ],
  },
  {
    id: "e7-3-po-7",
    title: "À l'office de tourisme",
    context: "Vous demandez des idées de visites culturelles dans la ville.",
    roleA: EMPLOYE,
    roleB: VISITEUR,
    lines: [
      { role: "A", text: "Bonjour, je peux vous renseigner ?" },
      { role: "B", text: "Bonjour, qu'est-ce qu'on peut visiter dans votre ville ?" },
      { role: "A", text: "Il y a le musée d'art moderne, le château et la cathédrale." },
      { role: "B", text: "J'aime beaucoup la peinture. Le musée est loin ?" },
      { role: "A", text: "Non, à dix minutes à pied. Il y a une belle exposition en ce moment." },
      { role: "B", text: "Il existe un pass pour tous les musées ?" },
      { role: "A", text: "Oui, le pass à 20 € pour trois jours." },
      { role: "B", text: "Parfait, je le prends. Merci !" },
    ],
  },
  {
    id: "e7-3-po-8",
    title: "Après le film",
    context: "Vous sortez du cinéma et vous parlez du film avec un ami.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Alors, tu as aimé ce film ?" },
      { role: "B", text: "Oui, beaucoup ! C'est un très beau film." },
      { role: "A", text: "Moi, j'adore cette actrice. Elle joue très bien." },
      { role: "B", text: "Et la musique du film est magnifique." },
      { role: "A", text: "On va voir son prochain film ensemble ?" },
      { role: "B", text: "D'accord ! Il sort le mois prochain." },
      { role: "A", text: "Cette fois, on prend les e-billets en avance." },
      { role: "B", text: "Bonne idée, comme ça on choisit les places !" },
    ],
  },
  {
    id: "e7-3-po-9",
    title: "Inviter un ami à une exposition",
    context: "Vous invitez un ami à voir une exposition avec vous.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Tu es libre samedi ? Il y a une grande exposition au musée." },
      { role: "B", text: "Ah oui ? Une exposition de quoi ?" },
      { role: "A", text: "De photographie. On dit qu'elle est magnifique." },
      { role: "B", text: "Pourquoi pas ! C'est combien, l'entrée ?" },
      { role: "A", text: "12 €, mais c'est moitié prix le samedi matin." },
      { role: "B", text: "Alors on y va samedi matin !" },
      { role: "A", text: "Rendez-vous à 10 h devant le musée ?" },
      { role: "B", text: "Parfait, à samedi !" },
    ],
  },
  {
    id: "e7-3-po-10",
    title: "Une journée libre",
    context: "Vous avez une journée libre et vous faites le programme avec un ami.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "On a une journée libre demain. Qu'est-ce qu'on fait ?" },
      { role: "B", text: "Le matin, on peut aller au musée voir l'exposition de peinture." },
      { role: "A", text: "Bonne idée ! Et l'après-midi ?" },
      { role: "B", text: "On peut visiter le château. Il y a des visites guidées." },
      { role: "A", text: "Super. Et le soir, cinéma ou concert ?" },
      { role: "B", text: "Un concert ! Il y a de la musique dans le parc, c'est gratuit." },
      { role: "A", text: "Quel beau programme ! On achète les billets du musée en ligne ?" },
      { role: "B", text: "Oui, je prends les e-billets ce soir." },
    ],
  },
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E7_3_PE: ExpressPePrompt[] = [
  {
    id: "e7-3-pe-1",
    title: "Invitation au musée",
    situation: "Une grande exposition de peinture arrive dans votre ville.",
    instruction: "Écrivez un message à un ami : invitez-le, donnez le jour et l'heure du rendez-vous, et dites pourquoi cette exposition vous intéresse.",
    points: ["L'invitation", "Le jour et l'heure du rendez-vous", "Pourquoi cette exposition vous intéresse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pe-2",
    title: "Raconter une visite",
    situation: "Dimanche, vous avez visité un musée avec votre famille.",
    instruction: "Racontez la visite à un ami : ce que vous avez vu, ce que vous avez préféré et le prix des billets.",
    points: ["Ce que vous avez vu", "Ce que vous avez préféré", "Les billets (prix, réduction)"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pe-3",
    title: "Réserver une visite guidée",
    situation: "Vous voulez faire une visite guidée du château avec un groupe de six personnes.",
    instruction: "Écrivez un e-mail au château : donnez le jour, le nombre de personnes et posez une question sur le prix.",
    points: ["Le jour de la visite", "Le nombre de personnes", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pe-4",
    title: "Mon film préféré",
    situation: "Votre classe prépare une soirée cinéma et chacun présente un film.",
    instruction: "Présentez votre film préféré : l'histoire en deux phrases, l'acteur ou l'actrice que vous aimez et pourquoi il faut voir ce film.",
    points: ["L'histoire en deux phrases", "Un acteur ou une actrice", "Pourquoi voir ce film"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pe-5",
    title: "Programme culturel du week-end",
    situation: "Des amis viennent chez vous ce week-end. Vous préparez le programme.",
    instruction: "Écrivez le programme : une visite le samedi, une sortie le samedi soir et une activité le dimanche.",
    points: ["La visite de samedi", "La sortie du samedi soir", "L'activité de dimanche"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pe-6",
    title: "Demander les réductions",
    situation: "Vous êtes étudiant(e) et vous voulez aller souvent au musée.",
    instruction: "Écrivez un e-mail au musée : demandez la réduction pour les étudiants, le prix du pass et les horaires.",
    points: ["La réduction étudiant", "Le pass ou l'abonnement", "Les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pe-7",
    title: "Avis sur une exposition",
    situation: "Vous avez vu une exposition et vous écrivez un avis sur le site du musée.",
    instruction: "Écrivez votre avis : ce que vous avez vu, ce que vous avez pensé et un conseil aux visiteurs.",
    points: ["Ce que vous avez vu", "Votre opinion", "Un conseil aux visiteurs"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pe-8",
    title: "Une soirée au cinéma",
    situation: "Hier soir, vous êtes allé(e) au cinéma avec des amis.",
    instruction: "Racontez la soirée : la séance et les billets, le film et le moment après le film.",
    points: ["La séance (heure, billets)", "Le film", "Après le film"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pe-9",
    title: "Un lieu culturel de ma ville",
    situation: "Un correspondant français veut connaître votre ville.",
    instruction: "Décrivez un lieu culturel de votre ville : ce que c'est, où il se trouve et ce qu'on peut y faire.",
    points: ["Le lieu (musée, théâtre…)", "Où il se trouve", "Ce qu'on peut y faire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-3-pe-10",
    title: "Cinéma ou théâtre ?",
    situation: "Un ami vous demande : « Tu préfères le cinéma ou le théâtre ? »",
    instruction: "Répondez à votre ami : votre préférence, deux raisons et un souvenir d'une sortie.",
    points: ["Votre préférence", "Deux raisons", "Un souvenir de sortie"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];

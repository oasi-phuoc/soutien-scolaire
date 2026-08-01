import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";
import type { ExpressListeningAudio } from "./express-e1-1-listening";
import { A1 } from "./express-lesson-factory";

function q(item: ExpressRawQ): ExpressRawQ { return item; }

const TR_049 = `- SOS Dépannage, j'écoute !
- Bonjour monsieur, je vous appelle pour une panne… Je n'ai plus de lumière…
- Qu'est-ce qui ne va pas exactement ?
- Les lampes, la télé, l'ordinateur, le frigo ne marchent pas… Je n'ai plus d'électricité !
- Et les radiateurs, ils sont chauds ?
- Oui, j'ai un chauffage au gaz.
- Bien… on peut prendre rendez-vous pour demain.
- Désolée, mais c'est vraiment urgent.
- D'accord, je peux venir aujourd'hui, mais à 16 heures. Vous pouvez me donner votre adresse s'il vous plaît ?
- J'habite 8, rue du Jura. Et le prix de la réparation ?
- Je viens, je regarde, ensuite je fais un devis.
- D'accord, merci !`;

const POOL_049 = buildExpressPool("e2-2-049", [
  q({
    id: "049-q1",
    textQ: "Quel est le problème de la cliente ?",
    text: ["Elle n'a plus d'électricité", "Elle n'a plus d'eau", "Elle n'a plus de gaz"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je n'ai plus d'_________ !",
    fill: "électricité",
    fillA: ["electricite"],
    vfQ: "La cliente appelle pour une panne d'électricité.",
    vfC: 0,
  }),
  q({
    id: "049-q2",
    textQ: "Quel appareil ne marche pas chez la cliente ?",
    text: ["Le frigo", "La douche", "Le vélo"],
    textC: 0,
    img: ["frigo", "douche", "vélo"],
    imgC: 0,
    fillQ: "Les lampes, la télé, l'ordinateur, le _________ ne marchent pas.",
    fill: "frigo",
    vfQ: "Le frigo de la cliente marche bien.",
    vfC: 1,
  }),
  q({
    id: "049-q3",
    textQ: "Pourquoi les radiateurs sont-ils encore chauds ?",
    text: ["Le chauffage est au gaz", "Le chauffage est électrique", "Les voisins ont allumé le feu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Oui, j'ai un chauffage au _________.",
    fill: "gaz",
    vfQ: "Le chauffage de la cliente est électrique.",
    vfC: 1,
  }),
  q({
    id: "049-q4",
    textQ: "Quand le dépanneur vient-il finalement ?",
    text: ["Aujourd'hui à 16 heures", "Demain matin", "La semaine prochaine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je peux venir aujourd'hui, mais à _________ heures.",
    fill: "16",
    fillA: ["seize"],
    vfQ: "Le dépanneur vient aujourd'hui à 16 heures.",
    vfC: 0,
  }),
  q({
    id: "049-q5",
    textQ: "La cliente peut-elle attendre demain ?",
    text: ["Non, c'est urgent", "Oui, pas de problème", "Oui, une semaine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Désolée, mais c'est vraiment _________.",
    fill: "urgent",
    vfQ: "La cliente peut attendre jusqu'à demain.",
    vfC: 1,
  }),
  q({
    id: "049-q6",
    textQ: "Comment le dépanneur donne-t-il le prix de la réparation ?",
    text: ["Il fait un devis après avoir regardé", "Il donne le prix au téléphone", "La réparation est gratuite"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens, je regarde, ensuite je fais un _________.",
    fill: "devis",
    vfQ: "La réparation coûte 100 euros.",
    vfC: 2,
  }),
]);

const TR_056 = `La société Allô Paul répare en 48 heures les appareils électriques : les télévisions, les frigos, les radiateurs... Allô Paul, la bonne adresse quand vous avez une panne !`;

const POOL_056 = buildExpressPool("e2-2-056", [
  q({
    id: "056-q1",
    textQ: "Que fait la société Allô Paul ?",
    text: ["Elle répare les appareils électriques", "Elle vend des télévisions", "Elle installe des cuisines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La société Allô Paul répare les appareils _________.",
    fill: "électriques",
    fillA: ["electriques"],
    vfQ: "Allô Paul répare les appareils électriques.",
    vfC: 0,
  }),
  q({
    id: "056-q2",
    textQ: "En combien de temps la société répare-t-elle ?",
    text: ["En 48 heures", "En 24 heures", "En une semaine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La société répare en _________ heures.",
    fill: "48",
    fillA: ["quarante-huit", "quarante huit"],
    vfQ: "La société répare en 24 heures.",
    vfC: 1,
  }),
  q({
    id: "056-q3",
    textQ: "Quel appareil la société peut-elle réparer ?",
    text: ["La télévision", "La voiture", "Le vélo"],
    textC: 0,
    img: ["télévision", "voiture", "vélo"],
    imgC: 0,
    fillQ: "Allô Paul répare les télévisions, les frigos, les _________.",
    fill: "radiateurs",
    vfQ: "Allô Paul répare les voitures.",
    vfC: 1,
  }),
  q({
    id: "056-q4",
    textQ: "Quand faut-il appeler Allô Paul ?",
    text: ["Quand on a une panne", "Quand on veut vendre un appareil", "Quand on déménage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La bonne adresse quand vous avez une _________ !",
    fill: "panne",
    vfQ: "Allô Paul aide quand on a une panne.",
    vfC: 0,
  }),
  q({
    id: "056-q5",
    textQ: "C'est une publicité pour quoi ?",
    text: ["Pour une société de réparation", "Pour un magasin de meubles", "Pour une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est une _________ pour la société Allô Paul.",
    fill: "publicité",
    fillA: ["publicite", "pub"],
    vfQ: "Le prix des réparations est donné dans la publicité.",
    vfC: 2,
  }),
]);

const TR_057 = `- Bonjour monsieur. J'ai un problème avec ma box. Comment ça se passe ?
- Le technicien vient chez vous, il regarde pourquoi ça ne marche pas et il fait un devis. Si vous êtes d'accord avec le devis, il fait la réparation`;

const POOL_057 = buildExpressPool("e2-2-057", [
  q({
    id: "057-q1",
    textQ: "Avec quel appareil le client a-t-il un problème ?",
    text: ["Avec sa box internet", "Avec sa télévision", "Avec son vélo"],
    textC: 0,
    img: ["ordinateur", "télévision", "vélo"],
    imgC: 0,
    fillQ: "J'ai un problème avec ma _________.",
    fill: "box",
    vfQ: "Le client a un problème avec sa box.",
    vfC: 0,
  }),
  q({
    id: "057-q2",
    textQ: "Qui vient chez le client ?",
    text: ["Un technicien", "Un plombier", "Un facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le _________ vient chez vous.",
    fill: "technicien",
    vfQ: "Personne ne se déplace chez le client.",
    vfC: 1,
  }),
  q({
    id: "057-q3",
    textQ: "Que fait le technicien d'abord ?",
    text: ["Il regarde pourquoi ça ne marche pas", "Il change la box tout de suite", "Il donne une nouvelle box"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il regarde pourquoi ça ne _________ pas.",
    fill: "marche",
    vfQ: "Le technicien répare sans regarder la box.",
    vfC: 1,
  }),
  q({
    id: "057-q4",
    textQ: "Que fait le technicien après avoir regardé la box ?",
    text: ["Il fait un devis", "Il envoie une facture", "Il appelle son chef"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il regarde… et il fait un _________.",
    fill: "devis",
    vfQ: "Le technicien fait un devis.",
    vfC: 0,
  }),
  q({
    id: "057-q5",
    textQ: "Quand le technicien fait-il la réparation ?",
    text: ["Si le client est d'accord avec le devis", "Tout de suite", "La semaine suivante"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Si vous êtes _________ avec le devis, il fait la réparation.",
    fill: "d'accord",
    fillA: ["daccord", "d accord"],
    vfQ: "Le prix de la réparation est donné dans le dialogue.",
    vfC: 2,
  }),
]);

const TR_058 = `Un problème d'eau ou d'électricité ? Un problème de serrure ? Vous pouvez appeler l'assistance téléphonique au 118 712. Un réparateur : plombier, électricien ou serrurier, peut venir très vite chez vous, même le dimanche !`;

const POOL_058 = buildExpressPool("e2-2-058", [
  q({
    id: "058-q1",
    textQ: "Pour quels problèmes peut-on appeler ce service ?",
    text: ["Eau, électricité ou serrure", "Télévision ou internet", "Jardin ou piscine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un problème d'eau ou d'_________ ?",
    fill: "électricité",
    fillA: ["electricite"],
    vfQ: "On peut appeler pour un problème de serrure.",
    vfC: 0,
  }),
  q({
    id: "058-q2",
    textQ: "Comment peut-on contacter l'assistance ?",
    text: ["Par téléphone", "Par courrier", "Par e-mail"],
    textC: 0,
    img: ["téléphone", "facteur", "ordinateur"],
    imgC: 0,
    fillQ: "Vous pouvez appeler l'assistance _________.",
    fill: "téléphonique",
    fillA: ["telephonique"],
    vfQ: "On peut appeler l'assistance au téléphone.",
    vfC: 0,
  }),
  q({
    id: "058-q3",
    textQ: "Quels réparateurs peuvent venir ?",
    text: ["Un plombier, un électricien ou un serrurier", "Un boulanger ou un boucher", "Un professeur ou un médecin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un réparateur : plombier, électricien ou _________.",
    fill: "serrurier",
    vfQ: "Un boulanger peut venir faire la réparation.",
    vfC: 1,
  }),
  q({
    id: "058-q4",
    textQ: "Quand le réparateur peut-il venir ?",
    text: ["Très vite, même le dimanche", "Seulement en semaine", "Dans un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un réparateur peut venir très vite, même le _________ !",
    fill: "dimanche",
    vfQ: "Le réparateur ne vient jamais le dimanche.",
    vfC: 1,
  }),
  q({
    id: "058-q5",
    textQ: "Où le réparateur peut-il venir ?",
    text: ["Chez vous", "Au bureau", "À l'école"],
    textC: 0,
    img: ["maison", "bureau", "école"],
    imgC: 0,
    fillQ: "Un réparateur peut _________ très vite chez vous.",
    fill: "venir",
    vfQ: "Le prix du dépannage est donné dans l'annonce.",
    vfC: 2,
  }),
]);

const TR_059 = `Bonjour M. Duchaud, c'est M. Dupré. Je vous appelle pour la panne de chauffage et les toilettes bouchées. Il y a aussi une fuite d'eau dans la cuisine. Merci de venir vite !`;

const POOL_059 = buildExpressPool("e2-2-059", [
  q({
    id: "059-q1",
    textQ: "Quel appareil est en panne chez M. Dupré ?",
    text: ["Le chauffage", "Le frigo", "La télévision"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je vous appelle pour la panne de _________.",
    fill: "chauffage",
    vfQ: "Le chauffage marche bien.",
    vfC: 1,
  }),
  q({
    id: "059-q2",
    textQ: "Quel est le problème avec les toilettes ?",
    text: ["Elles sont bouchées", "Elles sont trop petites", "Elles sont cassées"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les toilettes sont _________.",
    fill: "bouchées",
    fillA: ["bouchees"],
    vfQ: "Les toilettes sont bouchées.",
    vfC: 0,
  }),
  q({
    id: "059-q3",
    textQ: "Où y a-t-il une fuite d'eau ?",
    text: ["Dans la cuisine", "Dans la chambre", "Dans le salon"],
    textC: 0,
    img: ["cuisine", "chambre", "salon"],
    imgC: 0,
    fillQ: "Il y a une fuite d'eau dans la _________.",
    fill: "cuisine",
    vfQ: "La fuite d'eau est dans la salle de bains.",
    vfC: 1,
  }),
  q({
    id: "059-q4",
    textQ: "Que demande M. Dupré à la fin du message ?",
    text: ["De venir vite", "De rappeler demain", "D'envoyer une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de venir _________ !",
    fill: "vite",
    vfQ: "M. Dupré demande de venir rapidement.",
    vfC: 0,
  }),
  q({
    id: "059-q5",
    textQ: "Combien de problèmes M. Dupré signale-t-il ?",
    text: ["Trois", "Un", "Deux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "M. Dupré signale _________ problèmes.",
    fill: "trois",
    fillA: ["3"],
    vfQ: "L'heure de la visite du réparateur est fixée dans le message.",
    vfC: 2,
  }),
]);

const TR_060 = `- Répar' serrure, bonjour !
- Bonjour madame, j'ai un problème de serrure. Je ne peux plus ouvrir ma porte.
- Qu'est-ce qui ne va pas ?
- Je ne sais pas… la serrure ne marche plus.
- Votre adresse ?
- 20, avenue des Chartreux à Marseille.
- Un serrurier peut venir à 14 heures.
- Mais, il est 9 heures !
- Oui, je sais ! Mais ce n'est pas possible maintenant.
- Vous pouvez me donner le prix ?
- Le dépannage coûte 150 €. Vous pouvez me donner votre numéro de téléphone ?
- Oui, c'est le 07 03 04 05 06.
- Le serrurier va vous appeler avant de venir.`;

const POOL_060 = buildExpressPool("e2-2-060", [
  q({
    id: "060-q1",
    textQ: "Quel est le problème du client ?",
    text: ["Sa serrure ne marche plus", "Sa télévision est en panne", "Son frigo ne marche plus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je ne peux plus ouvrir ma _________.",
    fill: "porte",
    vfQ: "Le client ne peut plus ouvrir sa porte.",
    vfC: 0,
  }),
  q({
    id: "060-q2",
    textQ: "À quelle heure le serrurier peut-il venir ?",
    text: ["À 14 heures", "À 9 heures", "À 16 heures"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un serrurier peut venir à _________ heures.",
    fill: "14",
    fillA: ["quatorze"],
    vfQ: "Le serrurier peut venir tout de suite.",
    vfC: 1,
  }),
  q({
    id: "060-q3",
    textQ: "Quelle heure est-il pendant l'appel ?",
    text: ["9 heures", "14 heures", "18 heures"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mais, il est _________ heures !",
    fill: "9",
    fillA: ["neuf"],
    vfQ: "Il est 9 heures quand le client appelle.",
    vfC: 0,
  }),
  q({
    id: "060-q4",
    textQ: "Combien coûte le dépannage ?",
    text: ["150 €", "50 €", "115 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le dépannage coûte _________ euros.",
    fill: "150",
    fillA: ["cent cinquante", "cent-cinquante"],
    vfQ: "Le dépannage coûte 50 euros.",
    vfC: 1,
  }),
  q({
    id: "060-q5",
    textQ: "Que fait le serrurier avant de venir ?",
    text: ["Il téléphone au client", "Il envoie une lettre", "Il envoie un e-mail"],
    textC: 0,
    img: ["téléphone", "facteur", "ordinateur"],
    imgC: 0,
    fillQ: "Le serrurier va vous _________ avant de venir.",
    fill: "appeler",
    vfQ: "Le serrurier appelle le client avant de venir.",
    vfC: 0,
  }),
  q({
    id: "060-q6",
    textQ: "Que donne le client à la fin de l'appel ?",
    text: ["Son numéro de téléphone", "Sa carte bancaire", "Sa clé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez me donner votre _________ de téléphone ?",
    fill: "numéro",
    fillA: ["numero"],
    vfQ: "Le serrurier travaille aussi le dimanche.",
    vfC: 2,
  }),
]);

export const E2_2_TRAINING: ExpressListeningAudio[] = [
{
  id: "e2-2-049",
  audioSrc: A1(49),
  audioLabel: "Audio 049",
  transcript: TR_049,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_049,
  questionCount: 5,
},
{
  id: "e2-2-056",
  audioSrc: A1(56),
  audioLabel: "Audio 056",
  transcript: TR_056,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_056,
  questionCount: 5,
},
{
  id: "e2-2-057",
  audioSrc: A1(57),
  audioLabel: "Audio 057",
  transcript: TR_057,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_057,
  questionCount: 5,
},
{
  id: "e2-2-058",
  audioSrc: A1(58),
  audioLabel: "Audio 058",
  transcript: TR_058,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_058,
  questionCount: 5,
}
];

export const E2_2_EVAL: ExpressListeningAudio[] = [
{
  id: "e2-2-059",
  audioSrc: A1(59),
  audioLabel: "Audio 059",
  transcript: TR_059,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_059,
  questionCount: 5,
},
{
  id: "e2-2-060",
  audioSrc: A1(60),
  audioLabel: "Audio 060",
  transcript: TR_060,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_060,
  questionCount: 5,
}
];

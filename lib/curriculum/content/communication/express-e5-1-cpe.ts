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



/* ── Compréhension écrite — E5.1 Aller chez le médecin ── */

const E5_1_CE_TEXT_1 = `Affiche — Cabinet médical Les Tilleuls

Le cabinet est ouvert du lundi au vendredi, de 8 h à 18 h.
Pour un rendez-vous, appelez le 021 345 67 89 ou allez sur notre site Internet.
Le Dr Martin reçoit sans rendez-vous le mercredi matin, de 9 h à 12 h.
Si vous toussez ou si vous avez de la fièvre, mettez un masque dans la salle d'attente.
Apportez votre carte d'assurance à chaque visite.
Le week-end, le cabinet est fermé. Pour une urgence, composez le 144.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.`;

const E5_1_CE_POOL_1 = buildExpressPool("e5-1-ce-1", [
  q({
    id: "ce-q1",
    textQ: "Quels jours le cabinet est-il ouvert ?",
    text: ["Du lundi au vendredi","Tous les jours","Seulement le mercredi"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Le cabinet est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le cabinet est ouvert le samedi.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment prendre rendez-vous ?",
    text: ["Par téléphone ou sur Internet","Par lettre","Au guichet de la gare"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appelez le 021 345 67 89 ou allez sur notre site _________.",
    fill: "Internet",
    fillA: ["internet"],
    vfQ: "On peut prendre rendez-vous sur Internet.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand le Dr Martin reçoit-il sans rendez-vous ?",
    text: ["Le mercredi matin","Le vendredi soir","Le dimanche"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Le Dr Martin reçoit sans rendez-vous le _________ matin.",
    fill: "mercredi",
    vfQ: "Le Dr Martin reçoit sans rendez-vous le mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que faut-il faire si on tousse ?",
    text: ["Mettre un masque","Partir tout de suite","Appeler la police"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Mettez un _________ dans la salle d'attente.",
    fill: "masque",
    vfQ: "Il faut mettre un masque si on tousse.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que faut-il apporter à chaque visite ?",
    text: ["La carte d'assurance","Un passeport","Un livre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Apportez votre carte d'_________ à chaque visite.",
    fill: "assurance",
    vfQ: "Il faut apporter sa carte d'assurance.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faire en cas d'urgence le week-end ?",
    text: ["Composer le 144","Venir au cabinet","Attendre lundi"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pour une urgence, composez le _________.",
    fill: "144",
    vfQ: "Le 144 est un numéro d'urgence.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "À quelle heure ferme le cabinet ?",
    text: ["À 18 h","À 8 h","À midi"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Le cabinet ferme à _________ h.",
    fill: "18",
    fillA: ["dix-huit"],
    vfQ: "Le cabinet ferme à 20 h.",
    vfC: 1,
  }),
]);

const E5_1_CE_TEXT_2 = `SMS — Cabinet du Dr Leroy

Bonjour M. Dupont,
Nous vous rappelons votre rendez-vous demain, mardi 8 avril, à 14 h 30.
Adresse : rue des Lilas 12, 2e étage.
Apportez votre carte d'assurance et vos ordonnances.
Pour annuler, appelez avant 17 h aujourd'hui.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Merci, le secrétariat.`;

const E5_1_CE_POOL_2 = buildExpressPool("e5-1-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Quel jour est le rendez-vous ?",
    text: ["Mardi 8 avril","Mercredi 9 avril","Lundi 7 avril"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Votre rendez-vous est demain, mardi 8 _________.",
    fill: "avril",
    vfQ: "Le rendez-vous est mardi 8 avril.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["À 14 h 30","À 9 h","À 17 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rendez-vous à 14 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "Le rendez-vous est à 14 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où se trouve le cabinet ?",
    text: ["Rue des Lilas 12","Avenue du Lac 5","Place Centrale 1"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Adresse : rue des Lilas _________.",
    fill: "12",
    vfQ: "Le cabinet est rue des Lilas 12.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "À quel étage est le cabinet ?",
    text: ["Au 2e étage","Au rez-de-chaussée","Au 5e étage"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Le cabinet est au _________ étage.",
    fill: "2e",
    fillA: ["2","deuxième","2ème"],
    vfQ: "Le cabinet est au premier étage.",
    vfC: 1,
  }),
  q({
    id: "ce-q5",
    textQ: "Qu'est-ce qu'il faut apporter ?",
    text: ["Carte d'assurance et ordonnances","Un gâteau","Des baskets"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Apportez votre carte d'_________.",
    fill: "assurance",
    vfQ: "Il faut apporter des ordonnances.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Jusqu'à quelle heure peut-on annuler aujourd'hui ?",
    text: ["Avant 17 h","Avant 8 h","Après minuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pour annuler, appelez avant _________ h aujourd'hui.",
    fill: "17",
    fillA: ["dix-sept"],
    vfQ: "On peut annuler après 17 h.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "À qui est adressé ce message ?",
    text: ["M. Dupont","Mme Martin","Dr Leroy"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Bonjour M. _________.",
    fill: "Dupont",
    vfQ: "Le message est pour M. Dupont.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_3 = `Panneau — Salle d'attente, Hôpital de la Cité

Merci de respecter le silence.
Éteignez ou mettez votre téléphone en mode silencieux.
Portez un masque si vous toussez ou si vous avez de la fièvre.
Une personne accompagne maximum un patient.
Les enfants doivent rester avec un adulte.
Nous comptons sur vous.
Après cela, vous recevrez un petit rappel.
Gardez une copie papier si possible.
Les horaires habituels restent les mêmes.
Merci de votre compréhension.`;

const E5_1_CE_POOL_3 = buildExpressPool("e5-1-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Que faut-il faire avec le téléphone ?",
    text: ["Le mettre en silencieux","Le laisser sonner","Le donner à l'infirmier"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Mettez votre téléphone en mode _________.",
    fill: "silencieux",
    vfQ: "Il faut éteindre ou mettre le téléphone en silencieux.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand faut-il porter un masque ?",
    text: ["Si on tousse ou a de la fièvre","Toujours","Jamais"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Portez un masque si vous _________.",
    fill: "toussez",
    fillA: ["tousse"],
    vfQ: "Il faut un masque si on a de la fièvre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de personnes peuvent accompagner un patient ?",
    text: ["Une personne maximum","Trois personnes","Dix personnes"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Une personne accompagne _________ un patient.",
    fill: "maximum",
    vfQ: "Deux personnes peuvent accompagner un patient.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Où doivent rester les enfants ?",
    text: ["Avec un adulte","Seuls dans la rue","À la cafétéria"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Les enfants doivent rester avec un _________.",
    fill: "adulte",
    vfQ: "Les enfants doivent rester avec un adulte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que demande le panneau dans la salle d'attente ?",
    text: ["Le silence","De la musique","De chanter"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Merci de respecter le _________.",
    fill: "silence",
    vfQ: "On peut parler fort dans la salle d'attente.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "Où se trouve cette salle d'attente ?",
    text: ["À l'hôpital de la Cité","À la pharmacie","À l'école"],
    textC: 0,
    img: ["hôpital","pharmacie","école"],
    imgC: 0,
    fillQ: "Salle d'attente, Hôpital de la _________.",
    fill: "Cité",
    vfQ: "Le panneau est à l'hôpital de la Cité.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le panneau parle de quoi ?",
    text: ["Des règles dans la salle d'attente","Des horaires de bus","Du menu du restaurant"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Merci de respecter le silence dans la salle d'_________.",
    fill: "attente",
    vfQ: "Le panneau donne les horaires du bus.",
    vfC: 1,
  }),
]);

const E5_1_CE_TEXT_4 = `Flyer — Vaccination contre la grippe

La commune organise une vaccination gratuite samedi 12 octobre, de 9 h à 16 h.
Lieu : salle polyvalente, rue du Marché 4.
Pas besoin de rendez-vous. Apportez votre carte d'assurance.
La vaccination est pour les personnes de plus de 65 ans et les personnes à risque.
Les enfants ne sont pas concernés par cette séance.
Renseignements : 021 111 22 33.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.`;

const E5_1_CE_POOL_4 = buildExpressPool("e5-1-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la vaccination ?",
    text: ["Samedi 12 octobre","Lundi 1er janvier","Mercredi 5 juin"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Vaccination samedi 12 _________.",
    fill: "octobre",
    vfQ: "La vaccination est samedi 12 octobre.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où a lieu la vaccination ?",
    text: ["Salle polyvalente, rue du Marché 4","À l'aéroport","À la plage"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Lieu : salle polyvalente, rue du Marché _________.",
    fill: "4",
    vfQ: "La vaccination est rue du Marché 4.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Faut-il un rendez-vous ?",
    text: ["Non, pas besoin","Oui, obligatoire","Oui, par Internet seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pas besoin de _________.",
    fill: "rendez-vous",
    fillA: ["rendez vous"],
    vfQ: "Il faut prendre rendez-vous.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "La vaccination est-elle payante ?",
    text: ["Non, elle est gratuite","Oui, 50 francs","Oui, 200 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Vaccination _________ samedi 12 octobre.",
    fill: "gratuite",
    vfQ: "La vaccination est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Pour qui est cette séance ?",
    text: ["Personnes de plus de 65 ans et à risque","Tous les enfants","Seulement les étudiants"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pour les personnes de plus de _________ ans.",
    fill: "65",
    fillA: ["soixante-cinq"],
    vfQ: "Les enfants sont concernés par cette séance.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelles heures d'ouverture ?",
    text: ["De 9 h à 16 h","De 20 h à 23 h","De 6 h à 7 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "De 9 h à _________ h.",
    fill: "16",
    fillA: ["seize"],
    vfQ: "La séance finit à 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Que faut-il apporter ?",
    text: ["La carte d'assurance","Un passeport","Des skis"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Apportez votre carte d'_________.",
    fill: "assurance",
    vfQ: "Il faut apporter sa carte d'assurance.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_5 = `Note — Infirmerie, Collège des Alpes

Chers parents,
Si votre enfant est malade à l'école, l'infirmière appelle les parents.
L'infirmière peut donner un médicament seulement avec une autorisation écrite des parents.
Chaque élève doit avoir une petite trousse : un pansement et une fiche avec le numéro des parents.
L'infirmière est présente le lundi, le mercredi et le vendredi de 8 h à 12 h.
Pour une urgence grave, composez le 144.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de confirmer la bonne réception.
Cordialement, Mme Keller, infirmière.`;

const E5_1_CE_POOL_5 = buildExpressPool("e5-1-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Qui appelle les parents si l'enfant est malade ?",
    text: ["L'infirmière","Le directeur","Le cuisinier"],
    textC: 0,
    img: ["infirmier","professeur","cuisinier"],
    imgC: 0,
    fillQ: "L'_________ appelle les parents.",
    fill: "infirmière",
    fillA: ["infirmiere"],
    vfQ: "L'infirmière appelle les parents.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand peut-on donner un médicament à l'école ?",
    text: ["Avec une autorisation écrite des parents","Toujours","Jamais"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Avec une autorisation _________ des parents.",
    fill: "écrite",
    fillA: ["ecrite"],
    vfQ: "Il faut une autorisation écrite des parents.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Que doit contenir la trousse de l'élève ?",
    text: ["Un pansement et une fiche avec le numéro des parents","Un livre et un stylo","Un sandwich"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Un pansement et une _________ avec le numéro des parents.",
    fill: "fiche",
    vfQ: "La trousse contient un pansement.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels jours l'infirmière est-elle présente ?",
    text: ["Lundi, mercredi et vendredi","Tous les jours","Seulement le samedi"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "L'infirmière est présente le lundi, le mercredi et le _________.",
    fill: "vendredi",
    vfQ: "L'infirmière est là le mardi.",
    vfC: 1,
  }),
  q({
    id: "ce-q5",
    textQ: "À quelle heure finit l'infirmière le matin ?",
    text: ["À 12 h","À 18 h","À 20 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "De 8 h à _________ h.",
    fill: "12",
    fillA: ["midi","douze"],
    vfQ: "L'infirmière travaille jusqu'à 12 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel numéro pour une urgence grave ?",
    text: ["Le 144","Le 117","Le 118"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pour une urgence grave, composez le _________.",
    fill: "144",
    vfQ: "Le 144 est pour les urgences.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "À qui est adressée cette note ?",
    text: ["Aux parents","Aux médecins","Aux chauffeurs de bus"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Chers _________.",
    fill: "parents",
    vfQ: "La note est pour les parents.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_6 = `Affiche — Urgences médicales : quand appeler le 144 ?

Appelez le 144 si :
— une personne ne respire plus ;
— une personne est inconsciente ;
— il y a une hémorragie importante ;
Sinon on peut aussi en parler demain matin.
À bientôt, et merci de votre lecture.
Merci d'avance pour ta réponse.
Je suis disponible après 18 heures.
Passe le bonjour à tout le monde de ma part.
— une personne a une forte douleur à la poitrine.
N'appelez pas le 144 pour un simple rhume ou une petite coupure.
En cas de doute, le 144 vous conseille.
Le service est gratuit et disponible 24 h sur 24.`;

const E5_1_CE_POOL_6 = buildExpressPool("e5-1-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Quand faut-il appeler le 144 ?",
    text: ["Si une personne ne respire plus","Pour un simple rhume","Pour demander l'heure"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appelez le 144 si une personne ne _________ plus.",
    fill: "respire",
    vfQ: "On appelle le 144 si une personne ne respire plus.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Faut-il appeler le 144 pour un rhume ?",
    text: ["Non","Oui, toujours","Oui, le dimanche seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "N'appelez pas le 144 pour un simple _________.",
    fill: "rhume",
    vfQ: "Le 144 est pour un simple rhume.",
    vfC: 1,
  }),
  q({
    id: "ce-q3",
    textQ: "Le service du 144 est-il payant ?",
    text: ["Non, il est gratuit","Oui, 10 francs","Oui, 100 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Le service est _________ et disponible 24 h sur 24.",
    fill: "gratuit",
    vfQ: "Le 144 est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Le 144 est disponible quand ?",
    text: ["24 h sur 24","Seulement le matin","Seulement le week-end"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Disponible _________ h sur 24.",
    fill: "24",
    vfQ: "Le 144 fonctionne 24 h sur 24.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que faire en cas de doute ?",
    text: ["Appeler le 144 pour un conseil","Attendre une semaine","Aller au cinéma"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "En cas de doute, le 144 vous _________.",
    fill: "conseille",
    vfQ: "En cas de doute, on peut appeler le 144.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel cas est une urgence selon le texte ?",
    text: ["Une forte douleur à la poitrine","Un petit mal de tête","Une envie de dormir"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Une forte douleur à la _________.",
    fill: "poitrine",
    vfQ: "Une douleur à la poitrine est une urgence.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel numéro d'urgence est indiqué ?",
    text: ["Le 144","Le 999","Le 000"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appelez le _________.",
    fill: "144",
    vfQ: "Le numéro indiqué est le 144.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_7 = `Message sur un forum — Cherche médecin à Lausanne

Bonjour,
Je m'appelle Sofia. J'habite à Lausanne depuis deux mois.
Je cherche un médecin qui parle espagnol et français.
J'ai besoin d'un rendez-vous pour un contrôle général.
Mon assurance est CSS. Je peux me déplacer près de la gare.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Merci de vos conseils !
Sofia`;

const E5_1_CE_POOL_7 = buildExpressPool("e5-1-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Sofia","Marie","Lucas"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Sofia",
    vfQ: "La personne s'appelle Sofia.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps habite-t-elle à Lausanne ?",
    text: ["Depuis deux mois","Depuis deux ans","Depuis deux jours"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "J'habite à Lausanne depuis deux _________.",
    fill: "mois",
    vfQ: "Sofia habite à Lausanne depuis deux mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelles langues doit parler le médecin ?",
    text: ["Espagnol et français","Allemand seulement","Italien seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Un médecin qui parle espagnol et _________.",
    fill: "français",
    fillA: ["francais"],
    vfQ: "Le médecin doit parler espagnol et français.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Pourquoi Sofia cherche un médecin ?",
    text: ["Pour un contrôle général","Pour acheter des chaussures","Pour un voyage"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "J'ai besoin d'un rendez-vous pour un contrôle _________.",
    fill: "général",
    fillA: ["general"],
    vfQ: "Sofia veut un contrôle général.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle est son assurance ?",
    text: ["CSS","Swica","Visana"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Mon assurance est _________.",
    fill: "CSS",
    vfQ: "L'assurance de Sofia est CSS.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où peut-elle se déplacer ?",
    text: ["Près de la gare","À la montagne","À la plage"],
    textC: 0,
    img: ["gare","pharmacie","hôpital"],
    imgC: 0,
    fillQ: "Je peux me déplacer près de la _________.",
    fill: "gare",
    vfQ: "Sofia peut aller près de la gare.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Que demande Sofia sur le forum ?",
    text: ["Des conseils pour trouver un médecin","Une recette de gâteau","Un billet de train"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Merci de vos _________ !",
    fill: "conseils",
    vfQ: "Sofia demande des conseils.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_8 = `Carte — Centre de santé Les Acacias

Services disponibles :
— médecin généraliste (sur rendez-vous) ;
— infirmier pour les pansements ;
— sage-femme le mardi ;
Ce document complète les informations déjà données.
Nous comptons sur vous.
Il y a une fontaine d'eau près de l'entrée principale.
Les places assises sont limitées le week-end.
Un agent peut vous accompagner jusqu'au bon guichet.
— permanence sans rendez-vous le mercredi de 8 h à 10 h.
Horaires : lundi–vendredi 7 h 30–19 h, samedi 8 h–12 h.
Adresse : avenue des Acacias 20.
Parking gratuit pour les patients.
Le lieu est facile à trouver avec les indications.`;

const E5_1_CE_POOL_8 = buildExpressPool("e5-1-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Quel jour y a-t-il une permanence sans rendez-vous ?",
    text: ["Le mercredi matin","Le dimanche soir","Le vendredi nuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Permanence sans rendez-vous le _________ de 8 h à 10 h.",
    fill: "mercredi",
    vfQ: "La permanence sans RDV est mercredi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Qui est disponible le mardi ?",
    text: ["La sage-femme","Le dentiste","Le pilote"],
    textC: 0,
    img: ["infirmier","médecin","dentiste"],
    imgC: 0,
    fillQ: "Sage-_________ le mardi.",
    fill: "femme",
    vfQ: "La sage-femme est là le mardi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels jours le centre est-il ouvert le samedi ?",
    text: ["De 8 h à 12 h","De 20 h à 23 h","Fermé"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Samedi 8 h–_________ h.",
    fill: "12",
    fillA: ["midi","douze"],
    vfQ: "Le centre est ouvert samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est l'adresse ?",
    text: ["Avenue des Acacias 20","Rue du Lac 1","Place de la Gare 9"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Adresse : avenue des Acacias _________.",
    fill: "20",
    vfQ: "Le centre est avenue des Acacias 20.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le parking est-il payant ?",
    text: ["Non, il est gratuit","Oui, 5 francs","Oui, 50 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Parking _________ pour les patients.",
    fill: "gratuit",
    vfQ: "Le parking est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui fait les pansements ?",
    text: ["L'infirmier","Le professeur","Le boulanger"],
    textC: 0,
    img: ["infirmier","professeur","boulanger"],
    imgC: 0,
    fillQ: "_________ pour les pansements.",
    fill: "Infirmier",
    fillA: ["infirmiere","L'infirmier","L'infirmière"],
    vfQ: "L'infirmier fait les pansements.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Faut-il un rendez-vous pour le médecin généraliste ?",
    text: ["Oui, sur rendez-vous","Non, jamais","Seulement le dimanche"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Médecin généraliste sur _________.",
    fill: "rendez-vous",
    fillA: ["rendez vous"],
    vfQ: "Le médecin généraliste reçoit sur rendez-vous.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_9 = `Consignes — Téléconsultation avec le Dr Faure

Votre rendez-vous en ligne est jeudi 20 juin à 11 h.
Vous recevrez un lien par e-mail dix minutes avant.
Utilisez un ordinateur ou une tablette avec caméra et micro.
Installez-vous dans une pièce calme, avec une bonne connexion Internet.
La consultation dure environ 20 minutes.
Si la connexion ne marche pas, appelez le secrétariat au 021 222 33 44.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.`;

const E5_1_CE_POOL_9 = buildExpressPool("e5-1-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Quel jour est la téléconsultation ?",
    text: ["Jeudi 20 juin","Lundi 3 mars","Samedi 1er mai"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rendez-vous jeudi 20 _________.",
    fill: "juin",
    vfQ: "La téléconsultation est jeudi 20 juin.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quelle heure commence la consultation ?",
    text: ["À 11 h","À 7 h","À 23 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rendez-vous à _________ h.",
    fill: "11",
    fillA: ["onze"],
    vfQ: "La consultation est à 11 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Comment reçoit-on le lien ?",
    text: ["Par e-mail","Par la poste","Au restaurant"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Vous recevrez un lien par _________.",
    fill: "e-mail",
    fillA: ["email","mail"],
    vfQ: "Le lien arrive par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel appareil faut-il utiliser ?",
    text: ["Ordinateur ou tablette avec caméra","Une radio","Un vélo"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Utilisez un _________ ou une tablette avec caméra.",
    fill: "ordinateur",
    vfQ: "Il faut un ordinateur ou une tablette.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps dure la consultation ?",
    text: ["Environ 20 minutes","Environ 3 heures","Environ 2 jours"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "La consultation dure environ _________ minutes.",
    fill: "20",
    fillA: ["vingt"],
    vfQ: "La consultation dure 20 minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où faut-il s'installer ?",
    text: ["Dans une pièce calme","Dans la rue","Dans le bus"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Installez-vous dans une pièce _________.",
    fill: "calme",
    vfQ: "Il faut une pièce calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Que faire si la connexion ne marche pas ?",
    text: ["Appeler le secrétariat","Annuler tout","Dormir"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appelez le _________ au 021 222 33 44.",
    fill: "secrétariat",
    fillA: ["secretariat"],
    vfQ: "On peut appeler le secrétariat.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_10 = `Affiche — Service de pédiatrie, Clinique du Lac

Le service de pédiatrie reçoit les enfants de 0 à 12 ans.
Consultations sur rendez-vous : lundi à vendredi, 8 h–17 h.
Le Dr Petit reçoit sans rendez-vous le mercredi de 14 h à 16 h (grippe et fièvre seulement).
Apportez le carnet de vaccination de l'enfant.
Les parents peuvent accompagner l'enfant dans la salle de consultation.
Urgences pédiatriques : composez le 144.
Gardez votre ticket ou votre confirmation avec vous.
Les enfants doivent rester accompagnés d'un adulte.
Respectez la file d'attente, s'il vous plaît.
Le lieu est facile à trouver avec les indications.`;

const E5_1_CE_POOL_10 = buildExpressPool("e5-1-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Pour quels âges est le service ?",
    text: ["De 0 à 12 ans","De 18 à 65 ans","Seulement les adultes"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Enfants de 0 à _________ ans.",
    fill: "12",
    fillA: ["douze"],
    vfQ: "Le service est pour les enfants jusqu'à 12 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand le Dr Petit reçoit-il sans rendez-vous ?",
    text: ["Mercredi 14 h–16 h","Dimanche matin","Vendredi nuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Sans rendez-vous le _________ de 14 h à 16 h.",
    fill: "mercredi",
    vfQ: "Le Dr Petit reçoit sans RDV mercredi après-midi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Pour quels problèmes sans rendez-vous ?",
    text: ["Grippe et fièvre seulement","Tous les problèmes","Problèmes de dents"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Grippe et _________ seulement.",
    fill: "fièvre",
    fillA: ["fievre"],
    vfQ: "Sans RDV : grippe et fièvre seulement.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que faut-il apporter pour l'enfant ?",
    text: ["Le carnet de vaccination","Un ballon de foot","Un ordinateur"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Apportez le carnet de _________.",
    fill: "vaccination",
    vfQ: "Il faut le carnet de vaccination.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Les parents peuvent-ils entrer avec l'enfant ?",
    text: ["Oui","Non, jamais","Seulement le dimanche"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Les parents peuvent _________ l'enfant.",
    fill: "accompagner",
    vfQ: "Les parents peuvent accompagner l'enfant.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel numéro pour les urgences pédiatriques ?",
    text: ["Le 144","Le 111","Le 222"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Urgences pédiatriques : composez le _________.",
    fill: "144",
    vfQ: "Le 144 est pour les urgences pédiatriques.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quels jours les consultations sur rendez-vous ?",
    text: ["Lundi à vendredi","Samedi et dimanche","Seulement le mardi"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Consultations lundi à _________.",
    fill: "vendredi",
    vfQ: "Les RDV sont du lundi au vendredi.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_11 = `Notice — Avant votre consultation

Merci d'arriver dix minutes avant l'heure du rendez-vous.
Apportez : votre carte d'assurance, une pièce d'identité, la liste de vos médicaments actuels.
Si vous avez des examens récents (radio, analyse de sang), apportez les résultats.
Ne fumez pas dans le cabinet.
Les animaux ne sont pas acceptés, sauf chiens d'assistance.
Les photos peuvent être prises pour le souvenir.
Merci de respecter le calme des autres personnes.
Le personnel peut vous aider en français simple.
Conservez le numéro de contact indiqué.
Les horaires habituels restent les mêmes.
Merci.`;

const E5_1_CE_POOL_11 = buildExpressPool("e5-1-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Combien de temps avant faut-il arriver ?",
    text: ["Dix minutes","Deux heures","Une semaine"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Arrivez dix _________ avant l'heure.",
    fill: "minutes",
    vfQ: "Il faut arriver dix minutes avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il apporter obligatoirement ?",
    text: ["Carte d'assurance et pièce d'identité","Un chat","Des fleurs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Apportez votre carte d'_________.",
    fill: "assurance",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Faut-il apporter la liste des médicaments ?",
    text: ["Oui","Non","Seulement le week-end"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "La liste de vos _________ actuels.",
    fill: "médicaments",
    fillA: ["medicaments"],
    vfQ: "Il faut la liste des médicaments.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que faire avec les résultats d'examens récents ?",
    text: ["Les apporter","Les jeter","Les oublier"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Apportez les _________.",
    fill: "résultats",
    fillA: ["resultats"],
    vfQ: "Il faut apporter les résultats d'examens.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on fumer dans le cabinet ?",
    text: ["Non","Oui","Oui, dans la salle d'attente"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ne _________ pas dans le cabinet.",
    fill: "fumez",
    vfQ: "Il est interdit de fumer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Non, sauf chiens d'assistance","Oui, tous les animaux","Oui, seulement les chats"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Sauf chiens d'_________.",
    fill: "assistance",
    vfQ: "Les chiens d'assistance sont acceptés.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel type de document est cette notice ?",
    text: ["Des consignes avant consultation","Un menu de restaurant","Un horaire de bus"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Avant votre _________.",
    fill: "consultation",
    vfQ: "C'est une notice avant consultation.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_12 = `Panneau d'orientation — Hôpital Universitaire

Rez-de-chaussée : accueil, urgences, radiologie.
1er étage : consultations externes, laboratoire.
2e étage : maternité et pédiatrie.
3e étage : chirurgie et hospitalisation.
Ascenseurs A et B : tous les étages.
Visiteurs : de 14 h à 20 h. Merci de vous présenter à l'accueil.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.`;

const E5_1_CE_POOL_12 = buildExpressPool("e5-1-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Où sont les urgences ?",
    text: ["Au rez-de-chaussée","Au 3e étage","Au parking"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rez-de-chaussée : accueil, _________.",
    fill: "urgences",
    vfQ: "Les urgences sont au rez-de-chaussée.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Qu'est-ce qu'il y a au 1er étage ?",
    text: ["Consultations externes et laboratoire","La maternité","Le restaurant"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "1er étage : consultations externes, _________.",
    fill: "laboratoire",
    vfQ: "Le laboratoire est au 1er étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où se trouve la pédiatrie ?",
    text: ["Au 2e étage","Au rez-de-chaussée","Dehors"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "2e étage : maternité et _________.",
    fill: "pédiatrie",
    fillA: ["pediatrie"],
    vfQ: "La pédiatrie est au 2e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels ascenseurs servent tous les étages ?",
    text: ["A et B","C seulement","Aucun"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ascenseurs _________ et B.",
    fill: "A",
    vfQ: "Les ascenseurs A et B vont à tous les étages.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "À quelles heures peuvent venir les visiteurs ?",
    text: ["De 14 h à 20 h","De 6 h à 7 h","Toute la nuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Visiteurs : de 14 h à _________ h.",
    fill: "20",
    fillA: ["vingt"],
    vfQ: "Les visites sont de 14 h à 20 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où doivent aller les visiteurs d'abord ?",
    text: ["À l'accueil","Directement en chirurgie","Au parking"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Présentez-vous à l'_________.",
    fill: "accueil",
    vfQ: "Les visiteurs vont d'abord à l'accueil.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel étage pour la chirurgie ?",
    text: ["Le 3e étage","Le rez-de-chaussée","Le sous-sol"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "3e étage : _________ et hospitalisation.",
    fill: "chirurgie",
    vfQ: "La chirurgie est au 3e étage.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_13 = `Flyer — Dépistage du diabète, gratuit

La fondation Santé Pour Tous propose un dépistage gratuit.
Date : jeudi 5 décembre, 8 h–12 h.
Lieu : maison des associations, place du Marché.
Pas de rendez-vous. Test rapide : une goutte de sang au doigt.
Résultat en 5 minutes. Conseils avec une infirmière.
Pour les adultes de 40 ans et plus.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.`;

const E5_1_CE_POOL_13 = buildExpressPool("e5-1-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Le dépistage est-il payant ?",
    text: ["Non, il est gratuit","Oui, 30 francs","Oui, 80 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Dépistage _________.",
    fill: "gratuit",
    vfQ: "Le dépistage est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu le dépistage ?",
    text: ["Jeudi 5 décembre","Samedi 1er août","Mardi 2 février"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Jeudi 5 _________.",
    fill: "décembre",
    fillA: ["decembre"],
    vfQ: "C'est jeudi 5 décembre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où a lieu le dépistage ?",
    text: ["Maison des associations, place du Marché","À l'aéroport","À la piscine"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Lieu : maison des associations, place du _________.",
    fill: "Marché",
    vfQ: "C'est place du Marché.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il un rendez-vous ?",
    text: ["Non","Oui","Oui, par téléphone seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pas de _________.",
    fill: "rendez-vous",
    fillA: ["rendez vous"],
    vfQ: "Il faut un rendez-vous.",
    vfC: 1,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour le résultat ?",
    text: ["5 minutes","5 jours","5 mois"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Résultat en _________ minutes.",
    fill: "5",
    fillA: ["cinq"],
    vfQ: "Le résultat est en 5 minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour qui est ce dépistage ?",
    text: ["Adultes de 40 ans et plus","Bébés seulement","Adolescents seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pour les adultes de _________ ans et plus.",
    fill: "40",
    fillA: ["quarante"],
    vfQ: "C'est pour les adultes de 40 ans et plus.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui donne des conseils ?",
    text: ["Une infirmière","Un chauffeur","Un vendeur"],
    textC: 0,
    img: ["infirmier","chauffeur","vendeur"],
    imgC: 0,
    fillQ: "Conseils avec une _________.",
    fill: "infirmière",
    fillA: ["infirmiere"],
    vfQ: "Une infirmière donne des conseils.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_14 = `Courrier — Assurance SantéPlus

Madame, Monsieur,
Nous confirmons le remboursement de votre consultation du 3 mars.
Montant de la consultation : 120 francs.
Votre assurance rembourse 80 % : 96 francs.
Le reste à votre charge : 24 francs.
Le virement arrive sur votre compte dans dix jours ouvrables.
Pour toute question : service client, 0800 123 456.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Cordialement, SantéPlus`;

const E5_1_CE_POOL_14 = buildExpressPool("e5-1-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Quelle date de consultation ?",
    text: ["Le 3 mars","Le 30 juin","Le 1er janvier"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Consultation du 3 _________.",
    fill: "mars",
    vfQ: "La consultation est du 3 mars.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien coûte la consultation ?",
    text: ["120 francs","24 francs","96 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Montant : _________ francs.",
    fill: "120",
    fillA: ["cent vingt"],
    vfQ: "La consultation coûte 120 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel pourcentage rembourse l'assurance ?",
    text: ["80 %","50 %","10 %"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Votre assurance rembourse _________ %.",
    fill: "80",
    vfQ: "L'assurance rembourse 80 %.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien l'assurance rembourse-t-elle ?",
    text: ["96 francs","120 francs","200 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Remboursement : _________ francs.",
    fill: "96",
    fillA: ["quatre-vingt-seize"],
    vfQ: "Le remboursement est de 96 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien reste à payer ?",
    text: ["24 francs","96 francs","0 franc"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Le reste à votre charge : _________ francs.",
    fill: "24",
    fillA: ["vingt-quatre"],
    vfQ: "Il reste 24 francs à payer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand arrive le virement ?",
    text: ["Dans dix jours ouvrables","Dans un an","Immédiatement en espèces"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Le virement arrive dans dix jours _________.",
    fill: "ouvrables",
    vfQ: "Le virement arrive dans dix jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel numéro pour les questions ?",
    text: ["0800 123 456","144","117"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Service client : 0800 123 _________.",
    fill: "456",
    vfQ: "Le service client est au 0800 123 456.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_15 = `Affiche — Inscription chez un médecin traitant

Pour vous inscrire chez un médecin traitant :
1. Choisissez un médecin près de chez vous.
2. Prenez rendez-vous pour une première consultation.
3. Apportez votre carte d'assurance et une pièce d'identité.
4. Signez le formulaire d'inscription au cabinet.
Votre médecin traitant coordonne vos soins et vos spécialistes.
Vous pouvez changer de médecin traitant une fois par an.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.`;

const E5_1_CE_POOL_15 = buildExpressPool("e5-1-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Que faut-il apporter à la première consultation ?",
    text: ["Carte d'assurance et pièce d'identité","Un passeport seulement","Rien"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Apportez votre carte d'_________.",
    fill: "assurance",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que signe-t-on au cabinet ?",
    text: ["Le formulaire d'inscription","Un contrat de travail","Un billet de cinéma"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Signez le formulaire d'_________.",
    fill: "inscription",
    vfQ: "On signe le formulaire d'inscription.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel rôle a le médecin traitant ?",
    text: ["Coordonner les soins","Vendre des médicaments","Conduire le bus"],
    textC: 0,
    img: ["médecin","pharmacien","chauffeur"],
    imgC: 0,
    fillQ: "Votre médecin traitant _________ vos soins.",
    fill: "coordonne",
    vfQ: "Le médecin traitant coordonne les soins.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de fois peut-on changer de médecin traitant par an ?",
    text: ["Une fois","Tous les jours","Jamais"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Changer une fois par _________.",
    fill: "an",
    fillA: ["annee","année"],
    vfQ: "On peut changer une fois par an.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle est la première étape ?",
    text: ["Choisir un médecin près de chez soi","Aller à l'hôpital","Acheter des médicaments"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Choisissez un médecin près de chez _________.",
    fill: "vous",
    vfQ: "La première étape est de choisir un médecin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il un rendez-vous pour s'inscrire ?",
    text: ["Oui, pour une première consultation","Non, jamais","Seulement par Internet"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Prenez rendez-vous pour une première _________.",
    fill: "consultation",
    vfQ: "Il faut un rendez-vous pour la première consultation.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "De quoi parle cette affiche ?",
    text: ["De l'inscription chez un médecin traitant","Des soldes en magasin","Des vacances"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Inscription chez un médecin _________.",
    fill: "traitant",
    vfQ: "L'affiche parle du médecin traitant.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_16 = `Consigne — Prise de sang, laboratoire

Votre rendez-vous est vendredi 11 avril à 7 h 30.
Jeûne obligatoire : ne mangez rien pendant 12 heures avant le prélèvement.
Vous pouvez boire de l'eau plate.
Prenez vos ordonnances et votre carte d'assurance.
Évitez l'alcool la veille.
Résultats disponibles sur Internet dans 48 heures ou au guichet du laboratoire.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
C'est important pour moi, merci beaucoup.
Merci de votre attention et de votre patience.`;

const E5_1_CE_POOL_16 = buildExpressPool("e5-1-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Quel jour est le rendez-vous ?",
    text: ["Vendredi 11 avril","Lundi 1er mai","Dimanche 15 juin"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rendez-vous vendredi 11 _________.",
    fill: "avril",
    vfQ: "C'est vendredi 11 avril.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quelle heure ?",
    text: ["À 7 h 30","À 14 h","À 22 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rendez-vous à 7 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "Le RDV est à 7 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de temps de jeûne ?",
    text: ["12 heures","2 heures","48 heures"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Jeûne : _________ heures avant le prélèvement.",
    fill: "12",
    fillA: ["douze"],
    vfQ: "Le jeûne est de 12 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Peut-on boire de l'eau ?",
    text: ["Oui, de l'eau plate","Non, rien du tout","Oui, du café"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Vous pouvez boire de l'eau _________.",
    fill: "plate",
    vfQ: "On peut boire de l'eau plate.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que faut-il éviter la veille ?",
    text: ["L'alcool","L'eau","Le sommeil"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Évitez l'_________ la veille.",
    fill: "alcool",
    vfQ: "Il faut éviter l'alcool la veille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand sont les résultats sur Internet ?",
    text: ["Dans 48 heures","Dans 5 minutes","Dans 6 mois"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Résultats sur Internet dans _________ heures.",
    fill: "48",
    fillA: ["quarante-huit"],
    vfQ: "Les résultats sont en 48 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Que faut-il apporter ?",
    text: ["Ordonnances et carte d'assurance","Un sandwich","Des chaussures"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Prenez vos ordonnances et votre carte d'_________.",
    fill: "assurance",
    vfQ: "Il faut les ordonnances et la carte d'assurance.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_17 = `Permanence médicale de nuit — Région lémanique

De 19 h à 7 h du matin, le cabinet de votre médecin est fermé.
Pour un problème médical la nuit, appelez d'abord le 0844 000 000.
Un médecin de garde vous rappelle dans les 30 minutes.
Si c'est une urgence vitale, composez directement le 144.
La consultation de nuit coûte environ 150 francs (remboursée en partie par l'assurance).
Gardez votre carte d'assurance à portée de main.
Un agent peut vous accompagner jusqu'au bon guichet.
Le bâtiment est ouvert dès 8 heures.
Je t'écris aussi pour te donner un peu plus de nouvelles.
Nous traitons votre demande rapidement.`;

const E5_1_CE_POOL_17 = buildExpressPool("e5-1-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Quand le cabinet est-il fermé ?",
    text: ["De 19 h à 7 h","De 8 h à 18 h","Jamais"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "De 19 h à 7 h du _________.",
    fill: "matin",
    vfQ: "Le cabinet est fermé la nuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel numéro appeler la nuit ?",
    text: ["0844 000 000","117","118"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appelez le 0844 000 _________.",
    fill: "000",
    vfQ: "Le numéro de garde est 0844 000 000.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "En combien de temps le médecin rappelle-t-il ?",
    text: ["Dans les 30 minutes","Dans 3 jours","Jamais"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rappel dans les _________ minutes.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "Le médecin rappelle dans 30 minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel numéro pour une urgence vitale ?",
    text: ["Le 144","Le 0844 000 000","Le 0900"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Urgence vitale : composez le _________.",
    fill: "144",
    vfQ: "Pour une urgence vitale, c'est le 144.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien coûte environ la consultation de nuit ?",
    text: ["150 francs","15 francs","1500 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Consultation de nuit : environ _________ francs.",
    fill: "150",
    fillA: ["cent cinquante"],
    vfQ: "La consultation de nuit coûte 150 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "L'assurance rembourse-t-elle une partie ?",
    text: ["Oui, en partie","Non, jamais","Oui, tout"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Remboursée en partie par l'_________.",
    fill: "assurance",
    vfQ: "L'assurance rembourse en partie.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Que faut-il garder à portée de main ?",
    text: ["La carte d'assurance","Un livre","Un parapluie"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Gardez votre carte d'_________.",
    fill: "assurance",
    vfQ: "Il faut garder sa carte d'assurance.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_18 = `Affiche — Urgences dentaires

Douleur dentaire forte un dimanche ?
Appelez le 0840 840 848 (service dentaire de garde).
Un dentiste vous reçoit le jour même ou le lendemain matin.
Apportez votre carte d'assurance.
Le service est pour les urgences seulement (douleur, abcès, dent cassée).
Pour un simple contrôle, prenez rendez-vous en semaine chez votre dentiste.
Je t'écris aussi pour te donner un peu plus de nouvelles.
Dis-moi si tu as des questions, je réponds vite.
Tu peux m'appeler si c'est plus simple pour toi.
Gardez ce texte pour vous en souvenir.`;

const E5_1_CE_POOL_18 = buildExpressPool("e5-1-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro pour une urgence dentaire ?",
    text: ["0840 840 848","144","117"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appelez le 0840 840 _________.",
    fill: "848",
    vfQ: "Le numéro est 0840 840 848.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand appeler selon l'exemple ?",
    text: ["Un dimanche","Un mardi en journée","En août seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Douleur dentaire forte un _________ ?",
    fill: "dimanche",
    vfQ: "L'exemple parle d'un dimanche.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand le dentiste reçoit-il ?",
    text: ["Le jour même ou le lendemain matin","Dans un mois","Jamais"],
    textC: 0,
    img: ["dentiste","médecin","pharmacien"],
    imgC: 0,
    fillQ: "Reçu le jour même ou le lendemain _________.",
    fill: "matin",
    vfQ: "Le dentiste reçoit rapidement.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Pour quels problèmes ?",
    text: ["Douleur, abcès, dent cassée","Un simple contrôle","Acheter un livre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Urgences : douleur, abcès, dent _________.",
    fill: "cassée",
    fillA: ["cassee"],
    vfQ: "Une dent cassée est une urgence.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Faut-il la carte d'assurance ?",
    text: ["Oui","Non","Seulement en été"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Apportez votre carte d'_________.",
    fill: "assurance",
    vfQ: "Il faut la carte d'assurance.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour un simple contrôle, que faire ?",
    text: ["Prendre RDV en semaine chez son dentiste","Appeler le 0840","Aller aux urgences"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Prenez rendez-vous en _________ chez votre dentiste.",
    fill: "semaine",
    vfQ: "Un contrôle se fait en semaine chez son dentiste.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le service est-il pour toutes les visites ?",
    text: ["Non, urgences seulement","Oui, tout","Oui, gratuit toujours"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Service pour les _________ seulement.",
    fill: "urgences",
    vfQ: "C'est pour les urgences seulement.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_19 = `Règlement — Annulation de rendez-vous

Si vous ne pouvez pas venir à votre rendez-vous :
— appelez le secrétariat au moins 24 heures avant ;
— ou annulez sur notre site Internet.
En cas d'annulation tardive (moins de 24 h), des frais de 50 francs peuvent être facturés.
En cas d'absence sans prévenir, les frais sont de 80 francs.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Les personnes à mobilité réduite sont prioritaires.
Merci de respecter ces règles pour libérer le créneau pour d'autres patients.`;

const E5_1_CE_POOL_19 = buildExpressPool("e5-1-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Combien de temps avant faut-il annuler ?",
    text: ["Au moins 24 heures","5 minutes","1 mois"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appelez au moins _________ heures avant.",
    fill: "24",
    fillA: ["vingt-quatre"],
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment peut-on annuler ?",
    text: ["Par téléphone ou sur Internet","Par courrier seulement","En criant"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Annulez sur notre site _________.",
    fill: "Internet",
    fillA: ["internet"],
    vfQ: "On peut annuler sur Internet.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien coûte une annulation tardive ?",
    text: ["50 francs","0 franc","500 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Frais de _________ francs.",
    fill: "50",
    fillA: ["cinquante"],
    vfQ: "L'annulation tardive coûte 50 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte une absence sans prévenir ?",
    text: ["80 francs","20 francs","0 franc"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Absence sans prévenir : _________ francs.",
    fill: "80",
    fillA: ["quatre-vingts"],
    vfQ: "L'absence sans prévenir coûte 80 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "À qui profite l'annulation à temps ?",
    text: ["D'autres patients","Le médecin seulement","Personne"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Libérer le créneau pour d'autres _________.",
    fill: "patients",
    vfQ: "L'annulation libère un créneau pour d'autres patients.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui faut-il appeler pour annuler ?",
    text: ["Le secrétariat","La police","Le boulanger"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appelez le _________.",
    fill: "secrétariat",
    fillA: ["secretariat"],
    vfQ: "On appelle le secrétariat.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "De quoi parle ce texte ?",
    text: ["Des règles d'annulation de RDV","D'un menu","D'un voyage"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Annulation de _________.",
    fill: "rendez-vous",
    fillA: ["rendez vous"],
    vfQ: "Le texte parle de l'annulation de rendez-vous.",
    vfC: 0,
  }),
]);

const E5_1_CE_TEXT_20 = `Panneau — Pharmacie interne, Hôpital Central

La pharmacie de l'hôpital est au rez-de-chaussée, aile B.
Ouverte du lundi au vendredi, 8 h–18 h.
Elle délivre les médicaments prescrits pendant votre hospitalisation.
Présentez votre bracelet patient et l'ordonnance de l'hôpital.
Les médicaments pour sortie sont préparés 2 heures avant votre départ.
Pour les urgences la nuit, une pharmacie de garde est indiquée à l'accueil.
Bonne visite et merci de votre attention.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
N'hésite pas à me répondre quand tu peux.`;

const E5_1_CE_POOL_20 = buildExpressPool("e5-1-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Où est la pharmacie de l'hôpital ?",
    text: ["Rez-de-chaussée, aile B","3e étage","Parking"],
    textC: 0,
    img: ["pharmacie","hôpital","école"],
    imgC: 0,
    fillQ: "Pharmacie au rez-de-chaussée, aile _________.",
    fill: "B",
    vfQ: "La pharmacie est aile B au RDC.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels jours est-elle ouverte ?",
    text: ["Lundi au vendredi","Samedi et dimanche","Tous les jours 24 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ouverte du lundi au _________.",
    fill: "vendredi",
    vfQ: "Ouverte en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels médicaments délivre-t-elle ?",
    text: ["Ceux prescrits à l'hôpital","Des vêtements","Des billets de train"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Médicaments prescrits pendant votre _________.",
    fill: "hospitalisation",
    vfQ: "Ce sont les médicaments de l'hôpital.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que faut-il présenter ?",
    text: ["Bracelet patient et ordonnance","Un passeport seulement","Rien"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Présentez votre bracelet _________.",
    fill: "patient",
    vfQ: "Il faut le bracelet patient.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quand sont préparés les médicaments de sortie ?",
    text: ["2 heures avant le départ","1 semaine avant","Après le départ"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Préparés _________ heures avant votre départ.",
    fill: "2",
    fillA: ["deux"],
    vfQ: "Préparation 2 h avant le départ.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver une pharmacie de garde la nuit ?",
    text: ["À l'accueil de l'hôpital","À la gare","Sur Internet seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pharmacie de garde indiquée à l'_________.",
    fill: "accueil",
    vfQ: "L'accueil indique la pharmacie de garde.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "À quelle heure ferme la pharmacie ?",
    text: ["À 18 h","À 8 h","À minuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ouverte de 8 h à _________ h.",
    fill: "18",
    fillA: ["dix-huit"],
    vfQ: "Fermeture à 18 h.",
    vfC: 0,
  }),
]);

export const E5_1_CE: CommunicationExercise[] = [
  readingPoolExercise({
    id: "e5-1-ce-1",
    readingText: E5_1_CE_TEXT_1,
    questionPool: E5_1_CE_POOL_1,
  }),
  readingPoolExercise({
    id: "e5-1-ce-2",
    readingText: E5_1_CE_TEXT_2,
    questionPool: E5_1_CE_POOL_2,
  }),
  readingPoolExercise({
    id: "e5-1-ce-3",
    readingText: E5_1_CE_TEXT_3,
    questionPool: E5_1_CE_POOL_3,
  }),
  readingPoolExercise({
    id: "e5-1-ce-4",
    readingText: E5_1_CE_TEXT_4,
    questionPool: E5_1_CE_POOL_4,
  }),
  readingPoolExercise({
    id: "e5-1-ce-5",
    readingText: E5_1_CE_TEXT_5,
    questionPool: E5_1_CE_POOL_5,
  }),
  readingPoolExercise({
    id: "e5-1-ce-6",
    readingText: E5_1_CE_TEXT_6,
    questionPool: E5_1_CE_POOL_6,
  }),
  readingPoolExercise({
    id: "e5-1-ce-7",
    readingText: E5_1_CE_TEXT_7,
    questionPool: E5_1_CE_POOL_7,
  }),
  readingPoolExercise({
    id: "e5-1-ce-8",
    readingText: E5_1_CE_TEXT_8,
    questionPool: E5_1_CE_POOL_8,
  }),
  readingPoolExercise({
    id: "e5-1-ce-9",
    readingText: E5_1_CE_TEXT_9,
    questionPool: E5_1_CE_POOL_9,
  }),
  readingPoolExercise({
    id: "e5-1-ce-10",
    readingText: E5_1_CE_TEXT_10,
    questionPool: E5_1_CE_POOL_10,
  }),
  readingPoolExercise({
    id: "e5-1-ce-11",
    readingText: E5_1_CE_TEXT_11,
    questionPool: E5_1_CE_POOL_11,
  }),
  readingPoolExercise({
    id: "e5-1-ce-12",
    readingText: E5_1_CE_TEXT_12,
    questionPool: E5_1_CE_POOL_12,
  }),
  readingPoolExercise({
    id: "e5-1-ce-13",
    readingText: E5_1_CE_TEXT_13,
    questionPool: E5_1_CE_POOL_13,
  }),
  readingPoolExercise({
    id: "e5-1-ce-14",
    readingText: E5_1_CE_TEXT_14,
    questionPool: E5_1_CE_POOL_14,
  }),
  readingPoolExercise({
    id: "e5-1-ce-15",
    readingText: E5_1_CE_TEXT_15,
    questionPool: E5_1_CE_POOL_15,
  }),
  readingPoolExercise({
    id: "e5-1-ce-16",
    readingText: E5_1_CE_TEXT_16,
    questionPool: E5_1_CE_POOL_16,
  }),
  readingPoolExercise({
    id: "e5-1-ce-17",
    readingText: E5_1_CE_TEXT_17,
    questionPool: E5_1_CE_POOL_17,
  }),
  readingPoolExercise({
    id: "e5-1-ce-18",
    readingText: E5_1_CE_TEXT_18,
    questionPool: E5_1_CE_POOL_18,
  }),
  readingPoolExercise({
    id: "e5-1-ce-19",
    readingText: E5_1_CE_TEXT_19,
    questionPool: E5_1_CE_POOL_19,
  }),
  readingPoolExercise({
    id: "e5-1-ce-20",
    readingText: E5_1_CE_TEXT_20,
    questionPool: E5_1_CE_POOL_20,
  }),
];

/* ── Production orale — dialogues à jouer ──────────────────────────────────── */


const MEDECIN = { title: "Le médecin", vous: "le médecin / la médecin" };
const PATIENT = { title: "Le patient", vous: "le patient / la patiente" };
const SECRETAIRE = { title: "Le secrétaire", vous: "le secrétaire / la secrétaire" };


export const E5_1_PO: ExpressPoDialogue[] = [
{
    id: "e5-1-po-1",
    title: "Chez le médecin — la grippe",
    context: "Vous êtes malade depuis deux jours et vous consultez le médecin.",
    roleA: MEDECIN,
    roleB: PATIENT,
    lines: [
      { role: "A", text: "Bonjour, asseyez-vous. Vous avez mal où ?" },
      { role: "B", text: "J'ai mal à la gorge et j'ai mal à la tête." },
      { role: "A", text: "Vous avez de la fièvre ?" },
      { role: "B", text: "Oui, j'ai 39 degrés depuis hier." },
      { role: "A", text: "Alors c'est la grippe. Vous devez rester à la maison." },
      { role: "B", text: "D'accord. Pendant combien de jours ?" },
      { role: "A", text: "Cinq jours de repos, et buvez beaucoup d'eau." },
      { role: "B", text: "Merci docteur, au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-1-po-2",
    title: "Prendre rendez-vous par téléphone",
    context: "Vous téléphonez au cabinet médical pour prendre un rendez-vous.",
    roleA: SECRETAIRE,
    roleB: PATIENT,
    lines: [
      { role: "A", text: "Cabinet médical du Parc, bonjour !" },
      { role: "B", text: "Bonjour, je voudrais un rendez-vous avec le médecin." },
      { role: "A", text: "Oui. Vous pouvez venir demain à 10 h ?" },
      { role: "B", text: "Non, demain matin je travaille. Plutôt l'après-midi ?" },
      { role: "A", text: "Alors demain à 16 h 30, ça va ?" },
      { role: "B", text: "Oui, c'est parfait pour moi." },
      { role: "A", text: "Très bien. Apportez votre carte d'assurance, s'il vous plaît." },
      { role: "B", text: "D'accord, merci. À demain !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-1-po-3",
    title: "Mal au ventre",
    context: "Vous avez mal au ventre depuis ce matin et vous voyez le médecin.",
    roleA: MEDECIN,
    roleB: PATIENT,
    lines: [
      { role: "A", text: "Bonjour, qu'est-ce qui ne va pas ?" },
      { role: "B", text: "J'ai très mal au ventre depuis ce matin." },
      { role: "A", text: "Vous avez mangé quelque chose de spécial hier ?" },
      { role: "B", text: "Oui, j'ai mangé du poisson au restaurant." },
      { role: "A", text: "Je vois. Vous avez aussi de la fièvre ?" },
      { role: "B", text: "Non, je n'ai pas de fièvre." },
      { role: "A", text: "Buvez de l'eau et mangez du riz aujourd'hui. Ça va passer." },
      { role: "B", text: "Merci beaucoup, docteur." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-1-po-4",
    title: "Chez le pédiatre",
    context: "Votre fille de trois ans a de la fièvre. Vous êtes chez le pédiatre.",
    roleA: { title: "Le pédiatre", vous: "le pédiatre / la pédiatre" },
    roleB: { title: "Le parent", vous: "le papa / la maman" },
    lines: [
      { role: "A", text: "Bonjour ! Alors, qu'est-ce qu'elle a, la petite ?" },
      { role: "B", text: "Elle a de la fièvre depuis hier soir." },
      { role: "A", text: "Est-ce qu'elle mange bien ?" },
      { role: "B", text: "Non, elle ne mange pas et elle dort beaucoup." },
      { role: "A", text: "C'est un rhume. Voici un sirop pour enfants." },
      { role: "B", text: "Je lui donne le sirop combien de fois par jour ?" },
      { role: "A", text: "Matin et soir, pendant quatre jours." },
      { role: "B", text: "Très bien, merci docteur !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-1-po-5",
    title: "Une dent cassée",
    context: "Votre fils a une dent cassée. Vous appelez le cabinet médical.",
    roleA: SECRETAIRE,
    roleB: { title: "Le parent", vous: "le papa / la maman" },
    lines: [
      { role: "A", text: "Cabinet médical, bonjour, je vous écoute." },
      { role: "B", text: "Bonjour, mon fils a une dent cassée. Je peux venir ?" },
      { role: "A", text: "Non, pour les dents, il faut appeler le cabinet dentaire." },
      { role: "B", text: "Ah bon ? Vous avez le numéro du dentiste ?" },
      { role: "A", text: "Oui, c'est le cabinet dentaire de la Gare. Je vous donne le numéro." },
      { role: "B", text: "Merci. C'est loin d'ici ?" },
      { role: "A", text: "Non, c'est à cinq minutes à pied, en face de la gare." },
      { role: "B", text: "Parfait, merci beaucoup. Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-1-po-6",
    title: "Aux urgences",
    context: "Vous êtes tombé(e) à vélo et vous avez très mal à la jambe. Vous êtes aux urgences.",
    roleA: { title: "L'infirmier", vous: "l'infirmier / l'infirmière" },
    roleB: PATIENT,
    lines: [
      { role: "A", text: "Bonjour, qu'est-ce qui vous arrive ?" },
      { role: "B", text: "Je suis tombé à vélo et j'ai très mal à la jambe." },
      { role: "A", text: "Vous pouvez marcher ?" },
      { role: "B", text: "Non, je ne peux pas marcher. J'ai trop mal." },
      { role: "A", text: "D'accord. On va faire une radio de la jambe." },
      { role: "B", text: "Je dois attendre longtemps ?" },
      { role: "A", text: "Environ trente minutes. Asseyez-vous dans la salle d'attente." },
      { role: "B", text: "Merci, madame." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-1-po-7",
    title: "Annuler un rendez-vous",
    context: "Vous avez un rendez-vous demain, mais vous ne pouvez pas venir. Vous téléphonez.",
    roleA: SECRETAIRE,
    roleB: PATIENT,
    lines: [
      { role: "A", text: "Cabinet médical, bonjour !" },
      { role: "B", text: "Bonjour, j'ai un rendez-vous demain à 9 h, mais je ne peux pas venir." },
      { role: "A", text: "Pas de problème. Vous voulez un autre rendez-vous ?" },
      { role: "B", text: "Oui, s'il vous plaît. Vendredi, c'est possible ?" },
      { role: "A", text: "Oui, vendredi à 11 h, ça vous va ?" },
      { role: "B", text: "C'est parfait. Merci beaucoup." },
      { role: "A", text: "Je vous en prie. À vendredi !" },
      { role: "B", text: "À vendredi, au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-1-po-8",
    title: "Un gros rhume",
    context: "Vous toussez et vous avez le nez qui coule. Vous consultez le médecin.",
    roleA: MEDECIN,
    roleB: PATIENT,
    lines: [
      { role: "A", text: "Bonjour, je vous écoute. Comment vous sentez-vous ?" },
      { role: "B", text: "Je tousse beaucoup et j'ai le nez qui coule." },
      { role: "A", text: "Depuis combien de temps ?" },
      { role: "B", text: "Depuis trois jours. Et la nuit, je dors mal." },
      { role: "A", text: "Ce n'est pas grave, c'est un gros rhume." },
      { role: "B", text: "Qu'est-ce que je dois faire ?" },
      { role: "A", text: "Reposez-vous et prenez ce sirop contre la toux." },
      { role: "B", text: "D'accord, merci docteur !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-1-po-9",
    title: "Enfant malade le week-end",
    context: "C'est samedi et votre enfant est malade. Vous appelez le cabinet médical.",
    roleA: SECRETAIRE,
    roleB: { title: "Le parent", vous: "le papa / la maman" },
    lines: [
      { role: "A", text: "Cabinet médical, bonjour. Le cabinet est fermé le week-end." },
      { role: "B", text: "Bonjour, mais mon fils est malade. Il a beaucoup de fièvre." },
      { role: "A", text: "Il a quel âge, votre fils ?" },
      { role: "B", text: "Il a six ans. Qu'est-ce que je dois faire ?" },
      { role: "A", text: "Allez aux urgences de l'hôpital, elles sont ouvertes le week-end." },
      { role: "B", text: "D'accord. C'est où exactement ?" },
      { role: "A", text: "À l'hôpital du centre-ville, entrée B." },
      { role: "B", text: "Merci beaucoup, j'y vais tout de suite." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-1-po-10",
    title: "La fin de la consultation",
    context: "La consultation est finie. Le médecin vous donne une ordonnance et des conseils.",
    roleA: MEDECIN,
    roleB: PATIENT,
    lines: [
      { role: "A", text: "Voici votre ordonnance pour la pharmacie." },
      { role: "B", text: "Merci. Je prends les médicaments comment ?" },
      { role: "A", text: "Un comprimé matin, midi et soir, pendant le repas." },
      { role: "B", text: "D'accord. Et je peux aller travailler ?" },
      { role: "A", text: "Non, restez à la maison jusqu'à lundi. Vous avez besoin de repos." },
      { role: "B", text: "Très bien. Je dois revenir vous voir ?" },
      { role: "A", text: "Seulement si ça ne va pas mieux dans une semaine." },
      { role: "B", text: "Merci docteur, bonne journée !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
  id: "e5-1-po-11",
  title: "Demander une information sur la santé",
  context: "Vous parlez en français simple. Vous devez demander une information sur la santé : prendre ma tension à la pharmacie.",
  roleA: { title: "La secrétaire médicale", vous: "la secrétaire médicale" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour prendre ma tension à la pharmacie." },
    { role: "A", text: "Bien sûr. Le service est sans rendez-vous." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui. Il faut attendre cinq minutes." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
  {
  id: "e5-1-po-12",
  title: "Expliquer un problème avec la santé",
  context: "Vous parlez en français simple. Vous devez expliquer un problème avec la santé : j'ai mal au genou depuis hier.",
  roleA: { title: "La secrétaire médicale", vous: "la secrétaire médicale" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : j'ai mal au genou depuis hier." },
    { role: "A", text: "Je comprends. Le médecin peut vous voir cet après-midi." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Évitez de marcher longtemps." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
  {
  id: "e5-1-po-13",
  title: "Prendre rendez-vous pour la santé",
  context: "Vous parlez en français simple. Vous devez prendre rendez-vous pour la santé : un rendez-vous chez le dentiste.",
  roleA: { title: "La secrétaire médicale", vous: "la secrétaire médicale" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais un rendez-vous chez le dentiste." },
    { role: "A", text: "Je peux vous proposer mercredi à 16 heures." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "J'ai une douleur à une dent." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
  {
  id: "e5-1-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous parlez en français simple. Vous devez confirmer un rendez-vous : mon rendez-vous de contrôle.",
  roleA: { title: "La secrétaire médicale", vous: "la secrétaire médicale" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme mon rendez-vous de contrôle." },
    { role: "A", text: "Très bien. C'est bien demain à 8 h 30 ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "J'apporte mes résultats." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
  {
  id: "e5-1-po-15",
  title: "Demander conseil sur la santé",
  context: "Vous parlez en français simple. Vous devez demander conseil sur la santé : choisir un sirop pour la toux.",
  roleA: { title: "La secrétaire médicale", vous: "la secrétaire médicale" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour choisir un sirop pour la toux." },
    { role: "A", text: "Celui-ci se prend le soir." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "Buvez aussi beaucoup d'eau." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
  {
  id: "e5-1-po-16",
  title: "Signaler un retard",
  context: "Vous parlez en français simple. Vous devez signaler un retard : je serai en retard chez le médecin.",
  roleA: { title: "La secrétaire médicale", vous: "la secrétaire médicale" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : je serai en retard chez le médecin." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "Je cherche une place de parking." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "J'arrive dans dix minutes." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
  {
  id: "e5-1-po-17",
  title: "Faire une réclamation polie",
  context: "Vous parlez en français simple. Vous devez faire une réclamation polie : mon ordonnance n'est pas complète.",
  roleA: { title: "La secrétaire médicale", vous: "la secrétaire médicale" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : mon ordonnance n'est pas complète." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "Il manque le dosage." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Pouvez-vous appeler le cabinet ?" },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
  {
  id: "e5-1-po-18",
  title: "Demander une aide urgente",
  context: "Vous parlez en français simple. Vous devez demander une aide urgente : une fièvre forte chez mon enfant.",
  roleA: { title: "La secrétaire médicale", vous: "la secrétaire médicale" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour une fièvre forte chez mon enfant." },
    { role: "A", text: "Appelez le médecin de garde." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Donnez-lui de l'eau souvent." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
  {
  id: "e5-1-po-19",
  title: "Comparer deux possibilités",
  context: "Vous parlez en français simple. Vous devez comparer deux possibilités : un rendez-vous en cabinet ou en téléconsultation.",
  roleA: { title: "La secrétaire médicale", vous: "la secrétaire médicale" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare un rendez-vous en cabinet ou en téléconsultation." },
    { role: "A", text: "Le cabinet permet un examen." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "La téléconsultation est plus rapide." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
  {
  id: "e5-1-po-20",
  title: "Remercier pour une aide",
  context: "Vous parlez en français simple. Vous devez remercier pour une aide : votre aide après ma chute.",
  roleA: { title: "La secrétaire médicale", vous: "la secrétaire médicale" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour votre aide après ma chute." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "Vous avez appelé le médecin rapidement." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "Je vais beaucoup mieux." },
    { role: "A", text: "N'hésitez pas à revenir si besoin." },
    { role: "B", text: "Oui, je le ferai." },
    { role: "A", text: "Bonne continuation !" },
    { role: "B", text: "Merci, à vous aussi." },
  ],
},
];


/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E5_1_PE: ExpressPePrompt[] = [
  {
    id: "e5-1-pe-1",
    title: "Message depuis les urgences",
    situation: "",
    instruction: "Vous êtes aux urgences et vous envoyez un message à un(e) ami(e) pour lui expliquer votre problème.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-2",
    title: "Questions du médecin",
    situation: "",
    instruction: "Vous êtes médecin, un(e) malade vous appelle : vous lui posez des questions.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-3",
    title: "Rendez-vous médical",
    situation: "",
    instruction: "Vous écrivez au cabinet médical pour demander un rendez-vous, décrire vos symptômes et préciser vos disponibilités cette semaine.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-4",
    title: "Absence à l'école",
    situation: "",
    instruction: "Vous écrivez un message à votre professeur pour expliquer que vous êtes malade, dire ce que le médecin conseille et annoncer votre retour en classe.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-5",
    title: "Visite chez le médecin",
    situation: "",
    instruction: "Vous racontez à un(e) ami(e) votre visite chez le médecin, la raison de la consultation, les conseils reçus et le traitement à suivre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-6",
    title: "Certificat médical",
    situation: "",
    instruction: "Vous écrivez à votre responsable pour demander un certificat médical, expliquer votre problème de santé et dire combien de jours vous devez rester à la maison.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-7",
    title: "Conseils à un voisin",
    situation: "",
    instruction: "Votre voisin tousse beaucoup et vous lui écrivez un message pour lui conseiller de consulter un médecin, de se reposer et de boire de l'eau.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-8",
    title: "Douleur au dos",
    situation: "",
    instruction: "Vous avez mal au dos depuis deux jours et vous écrivez à un(e) ami(e) pour expliquer votre douleur, vos difficultés et votre rendez-vous chez le médecin.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-9",
    title: "Appel au secrétariat",
    situation: "",
    instruction: "Vous préparez un message pour le secrétariat médical afin d'annuler un rendez-vous, vous excuser et proposer un autre jour.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-10",
    title: "Carnet de symptômes",
    situation: "",
    instruction: "Vous notez dans un court texte vos symptômes de la journée, ce que vous avez mangé, votre température et ce que vous allez faire demain.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-11",
    title: "Accident de vélo",
    situation: "",
    instruction: "Vous êtes tombé(e) à vélo et vous écrivez à votre famille pour raconter l'accident, dire où vous avez mal et expliquer la visite médicale.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-12",
    title: "Salle d'attente",
    situation: "",
    instruction: "Vous décrivez à un(e) ami(e) votre attente au cabinet médical, l'accueil, les personnes présentes et le moment où le médecin vous reçoit.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-13",
    title: "Enfant malade",
    situation: "",
    instruction: "Votre enfant a de la fièvre et vous écrivez à l'école pour expliquer la situation, dire que vous allez chez le médecin et demander les devoirs.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-14",
    title: "Médecin du quartier",
    situation: "",
    instruction: "Vous recommandez un médecin de votre quartier à un(e) nouvel(le) habitant(e) en donnant l'adresse, les horaires et la façon de prendre rendez-vous.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-15",
    title: "Mauvaise nuit",
    situation: "",
    instruction: "Vous avez passé une mauvaise nuit à cause de la fièvre et vous écrivez à un(e) ami(e) pour décrire vos symptômes et vos projets pour vous soigner.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-16",
    title: "Consultation à distance",
    situation: "",
    instruction: "Vous écrivez au médecin pour demander une consultation par téléphone, expliquer pourquoi vous ne pouvez pas venir et donner votre numéro.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-17",
    title: "Retour après maladie",
    situation: "",
    instruction: "Vous écrivez à votre classe pour dire que vous allez mieux, remercier les camarades pour les messages et expliquer ce que le médecin a recommandé.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-18",
    title: "Urgence familiale",
    situation: "",
    instruction: "Un membre de votre famille est malade et vous écrivez un message pour expliquer les symptômes, le départ aux urgences et les nouvelles reçues.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-19",
    title: "Préparation de consultation",
    situation: "",
    instruction: "Vous préparez un texte pour votre médecin avec vos symptômes, vos questions, les médicaments déjà pris et vos habitudes de sommeil.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-20",
    title: "Collègue malade",
    situation: "",
    instruction: "Votre collègue travaille avec de la fièvre et vous lui écrivez pour lui conseiller de rentrer, d'appeler un médecin et de prendre soin de lui.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];

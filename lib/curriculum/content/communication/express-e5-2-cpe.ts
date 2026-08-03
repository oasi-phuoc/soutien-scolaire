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



/* ── Compréhension écrite — E5.2 Aller à la pharmacie ── */

const E5_2_CE_TEXT_1 = `Affiche — Pharmacie du Soleil

Ouverte du lundi au samedi, de 8 h à 19 h.
Fermée le dimanche.
Ordonnance ? Présentez-la au comptoir avec votre carte d'assurance.
Conseils gratuits sur les médicaments sans ordonnance.
Paiement : espèces, carte bancaire ou Twint.
Pharmacie de garde le week-end : appelez le 1818.
À très bientôt, prends soin de toi.
Je joins les détails importants juste après.
Si le plan change, je te préviens tout de suite.
À bientôt, et merci de votre lecture.`;

const E5_2_CE_POOL_1 = buildExpressPool("e5-2-ce-1", [
  q({
    id: "ce-q1",
    textQ: "Quels jours la pharmacie est-elle ouverte ?",
    text: ["Du lundi au samedi","Tous les jours","Seulement le dimanche"],
    textC: 0,
    img: ["pharmacie","hôpital","école"],
    imgC: 0,
    fillQ: "Ouverte du lundi au _________.",
    fill: "samedi",
    vfQ: "Ouverte du lundi au samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quelle heure ferme-t-elle ?",
    text: ["À 19 h","À 8 h","À midi"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ferme à _________ h.",
    fill: "19",
    fillA: ["dix-neuf"],
    vfQ: "Fermeture à 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Que faut-il pour une ordonnance ?",
    text: ["Ordonnance et carte d'assurance","Un passeport","Un livre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Présentez votre carte d'_________.",
    fill: "assurance",
    vfQ: "Il faut l'ordonnance et la carte d'assurance.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Les conseils sur médicaments sans ordonnance sont-ils payants ?",
    text: ["Non, gratuits","Oui, 20 francs","Oui, 100 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Conseils _________ sur les médicaments.",
    fill: "gratuits",
    vfQ: "Les conseils sont gratuits.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel numéro pour la pharmacie de garde ?",
    text: ["Le 1818","Le 144","Le 117"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pharmacie de garde : appelez le _________.",
    fill: "1818",
    vfQ: "Le 1818 indique la pharmacie de garde.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "La pharmacie est-elle ouverte le dimanche ?",
    text: ["Non, fermée","Oui","Oui, le matin"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Fermée le _________.",
    fill: "dimanche",
    vfQ: "Fermée le dimanche.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment peut-on payer ?",
    text: ["Espèces, carte ou Twint","Seulement en chèques","Avec des points"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Paiement : espèces, carte bancaire ou _________.",
    fill: "Twint",
    vfQ: "On peut payer par Twint.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_2 = `Notice — Sirop toux Enfant+ (sur la boîte)

Sirop pour enfants de 2 à 12 ans.
Posologie : 5 ml, 3 fois par jour, après les repas.
Secouez la bouteille avant utilisation.
Conservez au frais après ouverture. Utilisez dans les 3 mois.
Ne pas donner si l'enfant est allergique au miel.
En cas de fièvre persistante, consultez un médecin.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.`;

const E5_2_CE_POOL_2 = buildExpressPool("e5-2-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Pour quels âges ?",
    text: ["De 2 à 12 ans","De 0 à 1 an","Adultes seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Enfants de 2 à _________ ans.",
    fill: "12",
    fillA: ["douze"],
    vfQ: "Pour les 2–12 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle quantité par prise ?",
    text: ["5 ml","50 ml","1 litre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Posologie : _________ ml.",
    fill: "5",
    fillA: ["cinq"],
    vfQ: "La dose est 5 ml.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de fois par jour ?",
    text: ["3 fois","1 fois","10 fois"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ fois par jour.",
    fill: "3",
    fillA: ["trois"],
    vfQ: "3 fois par jour.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand donner le sirop ?",
    text: ["Après les repas","À jeun seulement","La nuit seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Après les _________.",
    fill: "repas",
    vfQ: "Après les repas.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que faire avant d'utiliser ?",
    text: ["Secouer la bouteille","La chauffer","La jeter"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ la bouteille avant utilisation.",
    fill: "Secouez",
    fillA: ["secouer","Secouer"],
    vfQ: "Il faut secouer la bouteille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Combien de temps après ouverture ?",
    text: ["3 mois","3 jours","3 ans"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Utilisez dans les _________ mois.",
    fill: "3",
    fillA: ["trois"],
    vfQ: "Utiliser dans les 3 mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Que faire si la fièvre continue ?",
    text: ["Consulter un médecin","Doubler la dose","Ne rien faire"],
    textC: 0,
    img: ["médecin","pharmacien","boulanger"],
    imgC: 0,
    fillQ: "Consultez un _________.",
    fill: "médecin",
    fillA: ["medecin"],
    vfQ: "Il faut voir un médecin si la fièvre continue.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_3 = `Flyer — Pharmacie de garde ce week-end

Ce samedi et ce dimanche, la pharmacie de garde est :
Pharmacie de la Gare, place de la Gare 3.
Ouverte 24 h sur 24.
Téléphone : 021 555 66 77.
Pour savoir quelle pharmacie est de garde : composez le 1818 depuis un téléphone fixe.
Apportez toujours votre ordonnance et votre carte d'assurance.
Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Une confirmation vous sera envoyée ensuite.
Passe le bonjour à tout le monde.`;

const E5_2_CE_POOL_3 = buildExpressPool("e5-2-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Quelle pharmacie est de garde ?",
    text: ["Pharmacie de la Gare","Pharmacie du Lac","Pharmacie du Soleil"],
    textC: 0,
    img: ["pharmacie","gare","hôpital"],
    imgC: 0,
    fillQ: "Pharmacie de la _________.",
    fill: "Gare",
    vfQ: "C'est la Pharmacie de la Gare.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels jours ?",
    text: ["Samedi et dimanche","Lundi et mardi","Mercredi seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ce _________ et ce dimanche.",
    fill: "samedi",
    vfQ: "Samedi et dimanche.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels horaires ?",
    text: ["24 h sur 24","8 h–12 h","Fermée"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ouverte _________ h sur 24.",
    fill: "24",
    vfQ: "Ouverte 24 h/24.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel numéro pour la pharmacie de garde ?",
    text: ["021 555 66 77","144","117"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Téléphone : 021 555 66 _________.",
    fill: "77",
    vfQ: "Le téléphone est 021 555 66 77.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel numéro composer pour savoir quelle pharmacie est de garde ?",
    text: ["Le 1818","Le 112","Le 999"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Composez le _________ depuis un fixe.",
    fill: "1818",
    vfQ: "Le 1818 indique la pharmacie de garde.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est la pharmacie ?",
    text: ["Place de la Gare 3","Rue du Lac 1","Avenue Centrale 9"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Place de la Gare _________.",
    fill: "3",
    vfQ: "Place de la Gare 3.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Que faut-il apporter ?",
    text: ["Ordonnance et carte d'assurance","Un chat","Des skis"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Apportez votre _________ et votre carte d'assurance.",
    fill: "ordonnance",
    vfQ: "Il faut l'ordonnance.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_4 = `Étiquette conseil — Crème solaire SPF 50

Crème solaire haute protection pour adultes et enfants.
Appliquez généreusement 30 minutes avant l'exposition au soleil.
Renouvelez toutes les 2 heures et après la bain.
Évitez le soleil entre 11 h et 15 h.
En cas de réaction cutanée, arrêtez l'utilisation et demandez conseil au pharmacien.
Ne pas utiliser sur les blessures ouvertes.
Le lieu est accessible en bus et à pied.
Un plan est disponible sur demande.
Nous vous attendons avec plaisir.
Merci de votre attention et de votre patience.`;

const E5_2_CE_POOL_4 = buildExpressPool("e5-2-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Quand appliquer la crème ?",
    text: ["30 minutes avant le soleil","Après le coucher du soleil","Une fois par mois"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appliquez _________ minutes avant l'exposition.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "30 minutes avant le soleil.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quelle fréquence renouveler ?",
    text: ["Toutes les 2 heures","Tous les 2 jours","Jamais"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Renouvelez toutes les _________ heures.",
    fill: "2",
    fillA: ["deux"],
    vfQ: "Renouveler toutes les 2 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand éviter le soleil ?",
    text: ["Entre 11 h et 15 h","Entre 6 h et 7 h","La nuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Évitez le soleil entre 11 h et _________ h.",
    fill: "15",
    fillA: ["quinze"],
    vfQ: "Éviter le soleil 11 h–15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Qui demander conseil en cas de réaction ?",
    text: ["Le pharmacien","Le facteur","Le pilote"],
    textC: 0,
    img: ["pharmacien","facteur","pilote"],
    imgC: 0,
    fillQ: "Demandez conseil au _________.",
    fill: "pharmacien",
    vfQ: "Demander conseil au pharmacien.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Sur quoi ne pas utiliser la crème ?",
    text: ["Blessures ouvertes","Le visage","Les mains"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ne pas utiliser sur les blessures _________.",
    fill: "ouvertes",
    vfQ: "Pas sur les blessures ouvertes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour qui est la crème ?",
    text: ["Adultes et enfants","Chats seulement","Plantes"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pour adultes et _________.",
    fill: "enfants",
    vfQ: "Pour adultes et enfants.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Que faire après la bain ?",
    text: ["Renouveler la crème","Arrêter pour toujours","Manger"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Renouvelez après le _________.",
    fill: "bain",
    vfQ: "Renouveler après le bain.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_5 = `Affiche — Automédication : attention !

Certains médicaments sont en vente libre sans ordonnance.
Lisez toujours la notice avant utilisation.
Ne dépassez pas la dose indiquée.
Ne donnez pas votre médicament à une autre personne.
En cas de doute, demandez conseil à votre pharmacien.
Les médicaments ne se jettent pas aux ordures : rapportez-les en pharmacie.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.`;

const E5_2_CE_POOL_5 = buildExpressPool("e5-2-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Faut-il lire la notice ?",
    text: ["Oui, toujours","Non","Seulement le dimanche"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Lisez toujours la _________.",
    fill: "notice",
    vfQ: "Il faut lire la notice.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Peut-on dépasser la dose ?",
    text: ["Non","Oui","Oui, le double"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ne _________ pas la dose indiquée.",
    fill: "dépassez",
    fillA: ["depassez"],
    vfQ: "Il ne faut pas dépasser la dose.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Peut-on donner son médicament à quelqu'un d'autre ?",
    text: ["Non","Oui, toujours","Oui, aux enfants"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ne donnez pas votre médicament à une autre _________.",
    fill: "personne",
    vfQ: "Ne pas donner à une autre personne.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Qui consulter en cas de doute ?",
    text: ["Le pharmacien","Le voisin","Le chauffeur"],
    textC: 0,
    img: ["pharmacien","médecin","infirmier"],
    imgC: 0,
    fillQ: "Demandez conseil à votre _________.",
    fill: "pharmacien",
    vfQ: "Demander conseil au pharmacien.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où rapporter les médicaments périmés ?",
    text: ["En pharmacie","Dans la poubelle","Dans la rue"],
    textC: 0,
    img: ["pharmacie","hôpital","école"],
    imgC: 0,
    fillQ: "Rapportez-les en _________.",
    fill: "pharmacie",
    vfQ: "Les rapporter en pharmacie.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Certains médicaments sont vendus comment ?",
    text: ["Sans ordonnance","Avec ordonnance seulement","Sur Internet seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "En vente libre sans _________.",
    fill: "ordonnance",
    vfQ: "Certains sont sans ordonnance.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "De quoi parle l'affiche ?",
    text: ["De l'automédication prudente","De voyages","De cuisine"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ : attention !",
    fill: "Automédication",
    fillA: ["automedication"],
    vfQ: "L'affiche parle d'automédication.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_6 = `SMS — Pharmacie Centrale

Bonjour Mme Rossi,
Votre commande est prête. Vous pouvez la retirer aujourd'hui avant 19 h.
Comptoir 2, entrée rue du Rhône.
N'oubliez pas votre carte d'assurance pour les produits remboursés.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
J'espère que tout se passe bien de ton côté.
Merci, l'équipe de la Pharmacie Centrale.`;

const E5_2_CE_POOL_6 = buildExpressPool("e5-2-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Pour qui est le message ?",
    text: ["Mme Rossi","M. Dupont","Dr Martin"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Bonjour Mme _________.",
    fill: "Rossi",
    vfQ: "C'est pour Mme Rossi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Qu'est-ce qui est prêt ?",
    text: ["La commande","Le restaurant","Le train"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Votre _________ est prête.",
    fill: "commande",
    vfQ: "La commande est prête.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Jusqu'à quelle heure peut-on retirer ?",
    text: ["Avant 19 h","Avant 8 h","Après minuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Retirer aujourd'hui avant _________ h.",
    fill: "19",
    fillA: ["dix-neuf"],
    vfQ: "Retrait avant 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel comptoir ?",
    text: ["Comptoir 2","Comptoir 9","Comptoir 0"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ 2.",
    fill: "Comptoir",
    vfQ: "Comptoir 2.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle entrée ?",
    text: ["Rue du Rhône","Rue du Lac","Avenue du Soleil"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Entrée rue du _________.",
    fill: "Rhône",
    fillA: ["Rhone"],
    vfQ: "Entrée rue du Rhône.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que ne pas oublier ?",
    text: ["La carte d'assurance","Un parapluie","Un livre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "N'oubliez pas votre carte d'_________.",
    fill: "assurance",
    vfQ: "Il faut la carte d'assurance.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Pour quels produits faut-il la carte ?",
    text: ["Produits remboursés","Tous les produits","Aucun"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pour les produits _________.",
    fill: "remboursés",
    fillA: ["rembourses"],
    vfQ: "Pour les produits remboursés.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_7 = `Panneau comptoir — Ordonnances

File d'attente ordonnances : tirez un numéro à l'entrée.
Temps d'attente moyen : 10 à 15 minutes.
Préparez votre ordonnance et votre carte d'assurance avant d'approcher le comptoir.
Les médicaments génériques sont moins chers et tout aussi efficaces.
Questions sur la posologie ? Le pharmacien répond à vos questions.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.`;

const E5_2_CE_POOL_7 = buildExpressPool("e5-2-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Comment obtenir sa place dans la file ?",
    text: ["Tirer un numéro à l'entrée","Crier fort","Envoyer un SMS"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Tirez un _________ à l'entrée.",
    fill: "numéro",
    fillA: ["numero"],
    vfQ: "Il faut tirer un numéro.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel temps d'attente moyen ?",
    text: ["10 à 15 minutes","2 heures","3 jours"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Attente moyenne : 10 à _________ minutes.",
    fill: "15",
    fillA: ["quinze"],
    vfQ: "Attente 10–15 minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Que préparer avant le comptoir ?",
    text: ["Ordonnance et carte d'assurance","Un sandwich","Des chaussures"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Préparez votre _________.",
    fill: "ordonnance",
    vfQ: "Préparer ordonnance et carte.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Les médicaments génériques sont-ils moins chers ?",
    text: ["Oui","Non","Plus chers"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Les génériques sont moins _________.",
    fill: "chers",
    vfQ: "Les génériques sont moins chers.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui répond aux questions sur la posologie ?",
    text: ["Le pharmacien","Le facteur","Le serveur"],
    textC: 0,
    img: ["pharmacien","facteur","serveur"],
    imgC: 0,
    fillQ: "Le _________ répond à vos questions.",
    fill: "pharmacien",
    vfQ: "Le pharmacien répond.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Les génériques sont-ils efficaces ?",
    text: ["Oui, tout aussi efficaces","Non","On ne sait pas"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Tout aussi _________.",
    fill: "efficaces",
    vfQ: "Les génériques sont efficaces.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Où se trouve ce panneau ?",
    text: ["Au comptoir des ordonnances","À la gare","À la plage"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Panneau _________ — Ordonnances.",
    fill: "comptoir",
    vfQ: "Au comptoir ordonnances.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_8 = `Flyer — Vaccination grippe en pharmacie

Cette année, la vaccination contre la grippe est disponible en pharmacie.
Sans rendez-vous : lundi à vendredi, 9 h–17 h.
Prix : 35 francs (remboursé en partie par l'assurance).
Apportez votre carte d'assurance.
La vaccination est recommandée pour les personnes de plus de 65 ans et les professionnels de santé.
Durée : 10 minutes.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Le lieu est facile à trouver avec les indications.`;

const E5_2_CE_POOL_8 = buildExpressPool("e5-2-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Où peut-on se faire vacciner ?",
    text: ["En pharmacie","À la plage","Au cinéma"],
    textC: 0,
    img: ["pharmacie","hôpital","école"],
    imgC: 0,
    fillQ: "Vaccination disponible en _________.",
    fill: "pharmacie",
    vfQ: "En pharmacie.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Faut-il un rendez-vous ?",
    text: ["Non","Oui, obligatoire","Oui, par lettre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Sans _________.",
    fill: "rendez-vous",
    fillA: ["rendez vous"],
    vfQ: "Sans rendez-vous.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le prix ?",
    text: ["35 francs","350 francs","Gratuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Prix : _________ francs.",
    fill: "35",
    fillA: ["trente-cinq"],
    vfQ: "35 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Pour qui est recommandée la vaccination ?",
    text: ["Plus de 65 ans et professionnels de santé","Bébés seulement","Personne"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Personnes de plus de _________ ans.",
    fill: "65",
    fillA: ["soixante-cinq"],
    vfQ: "Recommandée pour 65+ et pros de santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps dure la vaccination ?",
    text: ["10 minutes","3 heures","2 jours"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Durée : _________ minutes.",
    fill: "10",
    fillA: ["dix"],
    vfQ: "10 minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quels jours sans rendez-vous ?",
    text: ["Lundi à vendredi","Samedi et dimanche","Tous les jours 24 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Lundi à _________, 9 h–17 h.",
    fill: "vendredi",
    vfQ: "Lundi–vendredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "L'assurance rembourse-t-elle ?",
    text: ["En partie","Non","Tout"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Remboursé en partie par l'_________.",
    fill: "assurance",
    vfQ: "Remboursé en partie.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_9 = `Affiche — Parapharmacie, rayon bien-être

Shampoings, crèmes, compléments alimentaires et produits d'hygiène.
Pas besoin d'ordonnance pour ces produits.
Conseils personnalisés avec notre pharmacienne Mme Keller.
Promotions du mois : -20 % sur les crèmes mains jusqu'au 30 avril.
Rayon accessible sans file d'attente ordonnances.
Paiement à la caisse 3.
Le temps est beau, alors tout devrait bien se passer.
Prenez un pull, au cas où il ferait plus frais.
Le parking le plus proche est gratuit le soir.
Nous traitons votre demande rapidement.`;

const E5_2_CE_POOL_9 = buildExpressPool("e5-2-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Faut-il une ordonnance pour la parapharmacie ?",
    text: ["Non","Oui, toujours","Oui, le dimanche"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pas besoin d'_________.",
    fill: "ordonnance",
    vfQ: "Pas besoin d'ordonnance.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Qui donne des conseils ?",
    text: ["La pharmacienne Mme Keller","Le chauffeur","Le jardinier"],
    textC: 0,
    img: ["pharmacien","chauffeur","jardinier"],
    imgC: 0,
    fillQ: "Notre _________ Mme Keller.",
    fill: "pharmacienne",
    vfQ: "Mme Keller, pharmacienne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle promotion ce mois-ci ?",
    text: ["-20 % sur les crèmes mains","-50 % sur les voitures","Rien"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "-20 % sur les crèmes _________.",
    fill: "mains",
    vfQ: "-20 % crèmes mains.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Jusqu'à quand la promotion ?",
    text: ["30 avril","30 juin","30 décembre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Jusqu'au 30 _________.",
    fill: "avril",
    vfQ: "Jusqu'au 30 avril.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où payer ?",
    text: ["Caisse 3","Caisse 99","Dehors"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Paiement à la caisse _________.",
    fill: "3",
    vfQ: "Caisse 3.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Y a-t-il une file d'attente ordonnances ?",
    text: ["Non, accessible sans","Oui, toujours","Oui, 2 heures"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Sans file d'attente _________.",
    fill: "ordonnances",
    vfQ: "Sans file ordonnances.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quels produits trouve-t-on ?",
    text: ["Shampoings, crèmes, compléments","Voitures","Billets de train"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Shampoings, crèmes, compléments _________.",
    fill: "alimentaires",
    vfQ: "Produits de bien-être.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_10 = `Message — Livraison à domicile

La Pharmacie du Parc propose la livraison à domicile pour les personnes à mobilité réduite.
Commande par téléphone avant 14 h pour une livraison le jour même.
Frais de livraison : 5 francs (gratuit pour les plus de 75 ans).
Zone : Lausanne et communes voisines.
Paiement à la livraison : espèces ou carte.
Un plan est disponible sur demande.
Nous vous attendons avec plaisir.
Les places sont limitées, merci de confirmer.
En cas d'annulation, prévenez-nous rapidement.
Bonne journée à toutes et à tous.`;

const E5_2_CE_POOL_10 = buildExpressPool("e5-2-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Pour qui est la livraison ?",
    text: ["Personnes à mobilité réduite","Tous les enfants","Les touristes"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Personnes à mobilité _________.",
    fill: "réduite",
    fillA: ["reduite"],
    vfQ: "Pour mobilité réduite.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Avant quelle heure commander pour le jour même ?",
    text: ["14 h","20 h","6 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Commande avant _________ h.",
    fill: "14",
    fillA: ["quatorze"],
    vfQ: "Avant 14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien coûte la livraison ?",
    text: ["5 francs","50 francs","Gratuit pour tous"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Frais : _________ francs.",
    fill: "5",
    fillA: ["cinq"],
    vfQ: "5 francs de frais.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Pour qui la livraison est-elle gratuite ?",
    text: ["Plus de 75 ans","Moins de 10 ans","Tout le monde"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Gratuit pour les plus de _________ ans.",
    fill: "75",
    fillA: ["soixante-quinze"],
    vfQ: "Gratuit 75+.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle zone de livraison ?",
    text: ["Lausanne et communes voisines","Toute l'Europe","Paris seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Zone : Lausanne et communes _________.",
    fill: "voisines",
    vfQ: "Lausanne et environs.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment payer à la livraison ?",
    text: ["Espèces ou carte","Par chèque seulement","En points"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Paiement : espèces ou _________.",
    fill: "carte",
    vfQ: "Espèces ou carte.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment commander ?",
    text: ["Par téléphone","Par courrier seulement","En personne seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Commande par _________.",
    fill: "téléphone",
    fillA: ["telephone"],
    vfQ: "Par téléphone.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_11 = `Horaires spéciaux — Pharmacie des Alpes

Dimanche et jours fériés : ouvert de 10 h à 14 h uniquement.
Le 25 décembre et le 1er janvier : fermé.
Pharmacie de garde la nuit : composez le 1818.
Pendant les vacances d'été (juillet–août) : ouverture continue de 8 h à 20 h en semaine.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Un plan simple est disponible à l'accueil.
Merci de votre compréhension.`;

const E5_2_CE_POOL_11 = buildExpressPool("e5-2-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Quels horaires le dimanche ?",
    text: ["10 h–14 h","8 h–20 h","Fermé"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Dimanche : 10 h à _________ h.",
    fill: "14",
    fillA: ["quatorze"],
    vfQ: "Dimanche 10 h–14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand la pharmacie est-elle fermée ?",
    text: ["25 décembre et 1er janvier","Tous les mardis","En juin"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Fermé le 25 _________ et le 1er janvier.",
    fill: "décembre",
    fillA: ["decembre"],
    vfQ: "Fermé Noël et Nouvel An.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel numéro la nuit ?",
    text: ["1818","144","117"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Composez le _________.",
    fill: "1818",
    vfQ: "Le 1818 la nuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Horaires été en semaine ?",
    text: ["8 h–20 h","10 h–14 h","Fermé"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ouverture de 8 h à _________ h.",
    fill: "20",
    fillA: ["vingt"],
    vfQ: "Été : 8 h–20 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quels mois d'été ?",
    text: ["Juillet et août","Janvier et février","Mai et juin"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Vacances d'été (juillet–_________).",
    fill: "août",
    fillA: ["aout"],
    vfQ: "Juillet–août.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "La pharmacie est-elle ouverte les jours fériés ?",
    text: ["Oui, 10 h–14 h","Non, jamais","24 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Jours fériés : 10 h à _________ h.",
    fill: "14",
    vfQ: "Fériés : 10 h–14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "De quoi parle ce texte ?",
    text: ["Horaires spéciaux","Recette de cuisine","Horaires de bus"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Horaires _________.",
    fill: "spéciaux",
    fillA: ["speciaux"],
    vfQ: "Horaires spéciaux.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_12 = `Flyer — Test rapide COVID en pharmacie

Test antigénique disponible sans rendez-vous.
Résultat en 15 minutes.
Prix : 25 francs (non remboursé par l'assurance de base).
Apportez une pièce d'identité.
Pour les personnes avec symptômes ou contact avec une personne positive.
Si le test est positif, isolez-vous et informez vos contacts.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.`;

const E5_2_CE_POOL_12 = buildExpressPool("e5-2-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Faut-il un rendez-vous ?",
    text: ["Non","Oui","Oui, 1 mois avant"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Disponible sans _________.",
    fill: "rendez-vous",
    fillA: ["rendez vous"],
    vfQ: "Sans rendez-vous.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Résultat en combien de temps ?",
    text: ["15 minutes","15 jours","15 heures"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Résultat en _________ minutes.",
    fill: "15",
    fillA: ["quinze"],
    vfQ: "15 minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix ?",
    text: ["25 francs","250 francs","Gratuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Prix : _________ francs.",
    fill: "25",
    fillA: ["vingt-cinq"],
    vfQ: "25 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "L'assurance de base rembourse-t-elle ?",
    text: ["Non","Oui, tout","Oui, 80 %"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Non remboursé par l'assurance de _________.",
    fill: "base",
    vfQ: "Non remboursé.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que faut-il apporter ?",
    text: ["Pièce d'identité","Un chat","Un vélo"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Apportez une pièce d'_________.",
    fill: "identité",
    fillA: ["identite"],
    vfQ: "Pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour qui est le test ?",
    text: ["Symptômes ou contact positif","Tout le monde sans raison","Enfants seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Personnes avec _________ ou contact positif.",
    fill: "symptômes",
    fillA: ["symptomes"],
    vfQ: "Symptômes ou contact.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Que faire si positif ?",
    text: ["S'isoler et informer les contacts","Aller au cinéma","Rien"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ et informez vos contacts.",
    fill: "Isolez-vous",
    fillA: ["isolez vous","Isolement"],
    vfQ: "S'isoler si positif.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_13 = `Consigne — Conservation des médicaments

Rangez vos médicaments dans un endroit sec, à l'abri de la lumière.
Température idéale : 15–25 °C.
Ne conservez pas les médicaments dans la salle de bain (humidité).
Vérifiez la date de péremption régulièrement.
Les médicaments périmés : rapportez-les en pharmacie, ne les jetez pas.
Gardez les médicaments hors de portée des enfants.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
En cas de question, vous pouvez écrire ou téléphoner.`;

const E5_2_CE_POOL_13 = buildExpressPool("e5-2-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Où ne pas ranger les médicaments ?",
    text: ["Dans la salle de bain","Dans un placard sec","Dans une armoire"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pas dans la salle de _________.",
    fill: "bain",
    vfQ: "Pas dans la salle de bain.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle température idéale ?",
    text: ["15–25 °C","0–5 °C","50–60 °C"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Température : 15–25 _________.",
    fill: "°C",
    vfQ: "15–25 °C.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Que faire des médicaments périmés ?",
    text: ["Les rapporter en pharmacie","Les manger","Les donner aux voisins"],
    textC: 0,
    img: ["pharmacie","hôpital","école"],
    imgC: 0,
    fillQ: "Rapportez-les en _________.",
    fill: "pharmacie",
    vfQ: "Rapporter en pharmacie.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où garder les médicaments par rapport aux enfants ?",
    text: ["Hors de portée","Sur la table basse","Dans leur chambre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Hors de _________ des enfants.",
    fill: "portée",
    fillA: ["portee"],
    vfQ: "Hors de portée des enfants.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel endroit idéal ?",
    text: ["Sec, à l'abri de la lumière","Humide et ensoleillé","Dehors"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Endroit _______, à l'abri de la lumière.",
    fill: "sec",
    vfQ: "Endroit sec.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que vérifier régulièrement ?",
    text: ["La date de péremption","La couleur des murs","L'heure du train"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Vérifiez la date de _________.",
    fill: "péremption",
    fillA: ["peremption"],
    vfQ: "Vérifier la péremption.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Peut-on jeter les médicaments aux ordures ?",
    text: ["Non","Oui","Oui, toujours"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ne les _________ pas.",
    fill: "jetez",
    vfQ: "Ne pas jeter aux ordures.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_14 = `Affiche — Pharmacie de la Gare

Située dans la gare, hall principal, à côté de la billetterie.
Ouverte tous les jours de 7 h à 22 h.
Idéale pour les voyageurs : pansements, médicaments contre le mal des transports, crème solaire.
Ordonnances acceptées. Conseils en plusieurs langues : français, allemand, anglais.
Accès PMR (personnes à mobilité réduite) par ascenseur.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Je reste près de mon téléphone aujourd'hui.`;

const E5_2_CE_POOL_14 = buildExpressPool("e5-2-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Où est la pharmacie ?",
    text: ["Dans la gare, hall principal","À la plage","Dans un champ"],
    textC: 0,
    img: ["gare","pharmacie","aéroport"],
    imgC: 0,
    fillQ: "Dans la _________, hall principal.",
    fill: "gare",
    vfQ: "Dans la gare.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels horaires ?",
    text: ["7 h–22 h tous les jours","10 h–12 h le lundi","Fermée"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ouverte de 7 h à _________ h.",
    fill: "22",
    fillA: ["vingt-deux"],
    vfQ: "7 h–22 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À côté de quoi ?",
    text: ["La billetterie","La piscine","Le stade"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "À côté de la _________.",
    fill: "billetterie",
    vfQ: "À côté billetterie.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel produit pour les voyageurs ?",
    text: ["Médicaments mal des transports","Des skis","Des livres"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Médicaments contre le mal des _________.",
    fill: "transports",
    vfQ: "Mal des transports.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelles langues pour les conseils ?",
    text: ["Français, allemand, anglais","Latin seulement","Aucune"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Conseils en français, allemand, _________.",
    fill: "anglais",
    vfQ: "FR, DE, EN.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment accéder en fauteuil roulant ?",
    text: ["Par ascenseur","Par escalier seulement","Impossible"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Accès PMR par _________.",
    fill: "ascenseur",
    vfQ: "Par ascenseur.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Pour qui est cette pharmacie idéale ?",
    text: ["Les voyageurs","Les agriculteurs","Les plongeurs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Idéale pour les _________.",
    fill: "voyageurs",
    vfQ: "Pour les voyageurs.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_15 = `Message affiché — Rupture temporaire de stock

Chers clients,
Le médicament Dolirène 500 mg est temporairement indisponible.
Notre pharmacien propose un médicament équivalent : ParaGène 500 mg.
Même principe actif, même efficacité.
Délai de réapprovisionnement : environ 5 jours.
Pour toute question, parlez au comptoir 1.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Merci de votre patience.`;

const E5_2_CE_POOL_15 = buildExpressPool("e5-2-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Quel médicament est indisponible ?",
    text: ["Dolirène 500 mg","ParaGène 500 mg","Aspirine"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Le médicament Dolirène _________ mg.",
    fill: "500",
    vfQ: "Dolirène 500 mg indisponible.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel substitut propose-t-on ?",
    text: ["ParaGène 500 mg","Dolirène 1000 mg","Rien"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Propose : ParaGène _________ mg.",
    fill: "500",
    vfQ: "ParaGène 500 mg proposé.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le substitut a-t-il le même effet ?",
    text: ["Oui, même efficacité","Non","On ne sait pas"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Même _________ actif, même efficacité.",
    fill: "principe",
    vfQ: "Même efficacité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Délai de réapprovisionnement ?",
    text: ["Environ 5 jours","5 heures","5 mois"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Réapprovisionnement : _________ jours.",
    fill: "5",
    fillA: ["cinq"],
    vfQ: "5 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où poser des questions ?",
    text: ["Comptoir 1","Comptoir 9","Dehors"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Parlez au comptoir _________.",
    fill: "1",
    vfQ: "Comptoir 1.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "La rupture est-elle définitive ?",
    text: ["Non, temporaire","Oui, pour toujours","Oui, 10 ans"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Temporairement _________.",
    fill: "indisponible",
    vfQ: "Rupture temporaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui propose le substitut ?",
    text: ["Le pharmacien","Le client","Le facteur"],
    textC: 0,
    img: ["pharmacien","vendeur","facteur"],
    imgC: 0,
    fillQ: "Notre _________ propose un équivalent.",
    fill: "pharmacien",
    vfQ: "Le pharmacien propose.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_16 = `Flyer — Produits naturels et homéopathie

Nouveau rayon produits naturels au sous-sol.
Conseils avec notre spécialiste M. Weber, mardi et jeudi 14 h–18 h.
Produits bio, huiles essentielles, homéopathie.
Pas de remboursement assurance pour la plupart des produits.
Essai gratuit d'une crème mains bio ce samedi.
Les animaux ne sont pas autorisés, sauf chiens guides.
Photographies autorisées sans flash.
Un point d'eau potable est gratuit près de l'entrée.
Conservez le numéro de contact indiqué.`;

const E5_2_CE_POOL_16 = buildExpressPool("e5-2-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Où est le nouveau rayon ?",
    text: ["Au sous-sol","Sur le toit","Dehors"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rayon au _________.",
    fill: "sous-sol",
    fillA: ["sous sol"],
    vfQ: "Au sous-sol.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Qui est le spécialiste ?",
    text: ["M. Weber","Mme Keller","Dr Martin"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Spécialiste M. _________.",
    fill: "Weber",
    vfQ: "M. Weber.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels jours le spécialiste ?",
    text: ["Mardi et jeudi","Lundi seulement","Dimanche"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Mardi et _________, 14 h–18 h.",
    fill: "jeudi",
    vfQ: "Mardi et jeudi.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "L'assurance rembourse-t-elle ces produits ?",
    text: ["Non pour la plupart","Oui, tout","Oui, 100 %"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pas de remboursement pour la _________ des produits.",
    fill: "plupart",
    vfQ: "Pas remboursé en général.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel essai gratuit samedi ?",
    text: ["Crème mains bio","Voiture","Billet de train"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Essai gratuit d'une crème mains _________.",
    fill: "bio",
    vfQ: "Crème mains bio.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quels produits trouve-t-on ?",
    text: ["Bio, huiles essentielles, homéopathie","Voitures","Meubles"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Produits _______, huiles essentielles.",
    fill: "bio",
    vfQ: "Produits naturels.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelles heures avec le spécialiste ?",
    text: ["14 h–18 h","6 h–7 h","22 h–23 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "14 h à _________ h.",
    fill: "18",
    fillA: ["dix-huit"],
    vfQ: "14 h–18 h.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_17 = `Panneau — Paiement en pharmacie

Modes de paiement acceptés : espèces, carte bancaire (EC, Visa, Mastercard), Twint.
Pas de paiement par chèque.
Facture remise à chaque achat pour remboursement assurance.
Pour les ordonnances : la part assurance est déduite automatiquement si vous présentez votre carte.
Ticket de caisse à conserver.
Sans confirmation, la place n'est pas garantie.
Un plan simple est disponible à l'accueil.
Merci de lire attentivement toutes les informations.
En cas de doute, demandez de l'aide à l'accueil.
Les horaires peuvent changer en cas d'urgence.`;

const E5_2_CE_POOL_17 = buildExpressPool("e5-2-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Peut-on payer par chèque ?",
    text: ["Non","Oui","Oui, seulement le dimanche"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pas de paiement par _________.",
    fill: "chèque",
    fillA: ["cheque"],
    vfQ: "Pas de chèque.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels modes de paiement ?",
    text: ["Espèces, carte, Twint","Seulement espèces","Points fidélité"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Espèces, carte bancaire, _________.",
    fill: "Twint",
    vfQ: "Espèces, carte, Twint.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Que reçoit-on pour le remboursement ?",
    text: ["Une facture","Un cadeau","Rien"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ remise à chaque achat.",
    fill: "Facture",
    vfQ: "Une facture.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Pour les ordonnances, que fait l'assurance ?",
    text: ["Part déduite automatiquement","Rien","Paie tout en espèces"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Part assurance _________ automatiquement.",
    fill: "déduite",
    fillA: ["deduite"],
    vfQ: "Déduction automatique.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que faut-il conserver ?",
    text: ["Le ticket de caisse","Le panneau","La pharmacie"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ticket de caisse à _________.",
    fill: "conserver",
    vfQ: "Conserver le ticket.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle carte pour la déduction ordonnance ?",
    text: ["Carte d'assurance","Carte de bibliothèque","Carte de métro"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Si vous présentez votre _______.",
    fill: "carte",
    vfQ: "Carte d'assurance.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "De quoi parle le panneau ?",
    text: ["Du paiement","Des horaires de bus","Du menu"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Panneau — _________ en pharmacie.",
    fill: "Paiement",
    vfQ: "Paiement en pharmacie.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_18 = `Article blog — 5 conseils de votre pharmacien en hiver

1. Lavez-vous les mains régulièrement.
2. Buvez beaucoup d'eau et mangez des fruits.
3. Aérez votre logement chaque jour.
4. Portez un masque si vous toussez dans les transports.
5. Consultez votre pharmacien avant d'acheter un médicament.
Publié par la Pharmacie Bien-Être, janvier 2026.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.`;

const E5_2_CE_POOL_18 = buildExpressPool("e5-2-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Combien de conseils ?",
    text: ["5","50","500"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ conseils de votre pharmacien.",
    fill: "5",
    fillA: ["cinq"],
    vfQ: "5 conseils.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faire avec les mains ?",
    text: ["Les laver régulièrement","Les cacher","Les peindre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Lavez-vous les mains _________.",
    fill: "régulièrement",
    fillA: ["regulierement"],
    vfQ: "Laver les mains.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Que faire dans les transports si on tousse ?",
    text: ["Porter un masque","Chanter","Dormir"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Portez un _________ si vous toussez.",
    fill: "masque",
    vfQ: "Masque si toux.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Avant d'acheter un médicament ?",
    text: ["Consulter le pharmacien","Acheter le plus cher","Ne rien faire"],
    textC: 0,
    img: ["pharmacien","médecin","boulanger"],
    imgC: 0,
    fillQ: "Consultez votre _________.",
    fill: "pharmacien",
    vfQ: "Consulter le pharmacien.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que faire chaque jour à la maison ?",
    text: ["Aérer le logement","Fermer tout","Ne pas dormir"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ votre logement chaque jour.",
    fill: "Aérez",
    fillA: ["aerer","Aérer"],
    vfQ: "Aérer chaque jour.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui a publié l'article ?",
    text: ["Pharmacie Bien-Être","Gare Centrale","École primaire"],
    textC: 0,
    img: ["pharmacie","gare","école"],
    imgC: 0,
    fillQ: "Pharmacie Bien-_________.",
    fill: "Être",
    fillA: ["Etre","être"],
    vfQ: "Pharmacie Bien-Être.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle saison ?",
    text: ["Hiver","Été","Printemps"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Conseils en _________.",
    fill: "hiver",
    vfQ: "Conseils d'hiver.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_19 = `Carte de fidélité — Pharmacie Santé+

Inscription gratuite à la caisse.
1 franc dépensé = 1 point.
100 points = bon de 5 francs sur votre prochain achat.
Offre de bienvenue : 20 points offerts à l'inscription.
Valable 12 mois. Non cumulable avec d'autres promotions.
Renseignements au comptoir 4.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.`;

const E5_2_CE_POOL_19 = buildExpressPool("e5-2-ce-19", [
  q({
    id: "ce-q1",
    textQ: "L'inscription coûte-t-elle ?",
    text: ["Non, gratuite","Oui, 50 francs","Oui, 10 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "gratuite",
    vfQ: "Inscription gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de points par franc ?",
    text: ["1 point","10 points","0 point"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "1 franc = 1 _________.",
    fill: "point",
    vfQ: "1 franc = 1 point.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de points pour 5 francs ?",
    text: ["100 points","10 points","1000 points"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ points = bon de 5 francs.",
    fill: "100",
    fillA: ["cent"],
    vfQ: "100 points = 5 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Points offerts à l'inscription ?",
    text: ["20 points","200 points","0 point"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ points offerts à l'inscription.",
    fill: "20",
    fillA: ["vingt"],
    vfQ: "20 points offerts.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Durée de validité ?",
    text: ["12 mois","12 jours","12 heures"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Valable _________ mois.",
    fill: "12",
    fillA: ["douze"],
    vfQ: "12 mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Cumulable avec autres promos ?",
    text: ["Non","Oui","Oui, toujours"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Non _________ avec d'autres promotions.",
    fill: "cumulable",
    vfQ: "Non cumulable.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Où s'inscrire ?",
    text: ["À la caisse","À l'aéroport","En ligne seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Inscription gratuite à la _________.",
    fill: "caisse",
    vfQ: "À la caisse.",
    vfC: 0,
  }),
]);

const E5_2_CE_TEXT_20 = `Affiche — Promotions du mois de mars

-30 % sur tous les shampoings jusqu'au 31 mars.
Achetez 2 crèmes solaires, la 3e offerte.
Pansements hydrocolloïdes : 2e boîte à -50 %.
Offre valable en magasin uniquement, pas sur Internet.
Stocks limités. Une offre par client pour la 3e crème offerte.
Les informations importantes sont déjà notées plus haut.
Vous pouvez répondre directement à ce message.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.`;

const E5_2_CE_POOL_20 = buildExpressPool("e5-2-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Réduction sur les shampoings ?",
    text: ["-30 %","-3 %","-90 %"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "-_________ % sur tous les shampoings.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "-30 % shampoings.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Jusqu'à quand les shampoings ?",
    text: ["31 mars","31 décembre","31 janvier"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Jusqu'au 31 _________.",
    fill: "mars",
    vfQ: "Jusqu'au 31 mars.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Offre crèmes solaires ?",
    text: ["3e offerte si 2 achetées","Toutes gratuites","Rien"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Achetez 2, la 3e _________.",
    fill: "offerte",
    vfQ: "3e offerte.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où est valable l'offre ?",
    text: ["En magasin seulement","Sur Internet seulement","Partout"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Valable en _________ uniquement.",
    fill: "magasin",
    vfQ: "Magasin seulement.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Offre pansements ?",
    text: ["2e boîte à -50 %","Gratuit","-10 %"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "2e boîte à -_________ %.",
    fill: "50",
    fillA: ["cinquante"],
    vfQ: "2e à -50 %.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Combien d'offres 3e crème par client ?",
    text: ["Une","Dix","Illimité"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Une offre par _________.",
    fill: "client",
    vfQ: "Une par client.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel mois de promotions ?",
    text: ["Mars","Juillet","Décembre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Promotions du mois de _________.",
    fill: "mars",
    vfQ: "Mois de mars.",
    vfC: 0,
  }),
]);

export const E5_2_CE: CommunicationExercise[] = [
  readingPoolExercise({
    id: "e5-2-ce-1",
    readingText: E5_2_CE_TEXT_1,
    questionPool: E5_2_CE_POOL_1,
  }),
  readingPoolExercise({
    id: "e5-2-ce-2",
    readingText: E5_2_CE_TEXT_2,
    questionPool: E5_2_CE_POOL_2,
  }),
  readingPoolExercise({
    id: "e5-2-ce-3",
    readingText: E5_2_CE_TEXT_3,
    questionPool: E5_2_CE_POOL_3,
  }),
  readingPoolExercise({
    id: "e5-2-ce-4",
    readingText: E5_2_CE_TEXT_4,
    questionPool: E5_2_CE_POOL_4,
  }),
  readingPoolExercise({
    id: "e5-2-ce-5",
    readingText: E5_2_CE_TEXT_5,
    questionPool: E5_2_CE_POOL_5,
  }),
  readingPoolExercise({
    id: "e5-2-ce-6",
    readingText: E5_2_CE_TEXT_6,
    questionPool: E5_2_CE_POOL_6,
  }),
  readingPoolExercise({
    id: "e5-2-ce-7",
    readingText: E5_2_CE_TEXT_7,
    questionPool: E5_2_CE_POOL_7,
  }),
  readingPoolExercise({
    id: "e5-2-ce-8",
    readingText: E5_2_CE_TEXT_8,
    questionPool: E5_2_CE_POOL_8,
  }),
  readingPoolExercise({
    id: "e5-2-ce-9",
    readingText: E5_2_CE_TEXT_9,
    questionPool: E5_2_CE_POOL_9,
  }),
  readingPoolExercise({
    id: "e5-2-ce-10",
    readingText: E5_2_CE_TEXT_10,
    questionPool: E5_2_CE_POOL_10,
  }),
  readingPoolExercise({
    id: "e5-2-ce-11",
    readingText: E5_2_CE_TEXT_11,
    questionPool: E5_2_CE_POOL_11,
  }),
  readingPoolExercise({
    id: "e5-2-ce-12",
    readingText: E5_2_CE_TEXT_12,
    questionPool: E5_2_CE_POOL_12,
  }),
  readingPoolExercise({
    id: "e5-2-ce-13",
    readingText: E5_2_CE_TEXT_13,
    questionPool: E5_2_CE_POOL_13,
  }),
  readingPoolExercise({
    id: "e5-2-ce-14",
    readingText: E5_2_CE_TEXT_14,
    questionPool: E5_2_CE_POOL_14,
  }),
  readingPoolExercise({
    id: "e5-2-ce-15",
    readingText: E5_2_CE_TEXT_15,
    questionPool: E5_2_CE_POOL_15,
  }),
  readingPoolExercise({
    id: "e5-2-ce-16",
    readingText: E5_2_CE_TEXT_16,
    questionPool: E5_2_CE_POOL_16,
  }),
  readingPoolExercise({
    id: "e5-2-ce-17",
    readingText: E5_2_CE_TEXT_17,
    questionPool: E5_2_CE_POOL_17,
  }),
  readingPoolExercise({
    id: "e5-2-ce-18",
    readingText: E5_2_CE_TEXT_18,
    questionPool: E5_2_CE_POOL_18,
  }),
  readingPoolExercise({
    id: "e5-2-ce-19",
    readingText: E5_2_CE_TEXT_19,
    questionPool: E5_2_CE_POOL_19,
  }),
  readingPoolExercise({
    id: "e5-2-ce-20",
    readingText: E5_2_CE_TEXT_20,
    questionPool: E5_2_CE_POOL_20,
  }),
];

/* ── Production orale — dialogues à jouer ──────────────────────────────────── */


const PHARMACIEN = { title: "Le pharmacien", vous: "le pharmacien / la pharmacienne" };
const CLIENT = { title: "Le client", vous: "le client / la cliente" };


export const E5_2_PO: ExpressPoDialogue[] = [
{
    id: "e5-2-po-1",
    title: "Acheter un médicament avec ordonnance",
    context: "Vous êtes à la pharmacie avec une ordonnance du médecin.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, que puis-je faire pour vous ?" },
      { role: "B", text: "Bonjour, j'ai une ordonnance du médecin." },
      { role: "A", text: "Merci. Vous avez votre carte d'assurance ?" },
      { role: "B", text: "Oui, la voilà." },
      { role: "A", text: "Voici les comprimés. Il faut en prendre un matin et soir." },
      { role: "B", text: "D'accord. Pendant combien de jours ?" },
      { role: "A", text: "Pendant cinq jours. Avec un verre d'eau, pendant le repas." },
      { role: "B", text: "Merci beaucoup. Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-2-po-2",
    title: "Un sirop contre la toux",
    context: "Vous toussez depuis trois jours et vous demandez conseil.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Vous avez besoin d'aide ?" },
      { role: "B", text: "Oui, je tousse beaucoup depuis trois jours." },
      { role: "A", text: "Vous avez aussi de la fièvre ?" },
      { role: "B", text: "Non, pas de fièvre. Juste la toux." },
      { role: "A", text: "Je vous conseille ce sirop, deux cuillères par jour." },
      { role: "B", text: "C'est pour combien de temps ?" },
      { role: "A", text: "Une semaine. Si ça continue, il faut voir un médecin." },
      { role: "B", text: "Très bien, je le prends. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-2-po-3",
    title: "Mal de tête",
    context: "Vous avez mal à la tête et vous n'avez pas d'ordonnance.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Bonjour, j'ai très mal à la tête. Vous avez quelque chose ?" },
      { role: "A", text: "Oui. Vous êtes allergique à un médicament ?" },
      { role: "B", text: "Non, je ne suis pas allergique." },
      { role: "A", text: "Alors prenez ces comprimés, un toutes les six heures." },
      { role: "B", text: "Je peux en prendre combien par jour au maximum ?" },
      { role: "A", text: "Trois par jour au maximum, avec de l'eau." },
      { role: "B", text: "Parfait, merci pour votre aide." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-2-po-4",
    title: "Une crème pour une brûlure",
    context: "Votre enfant s'est brûlé la main en cuisinant.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, que vous faut-il ?" },
      { role: "B", text: "Mon fils s'est brûlé la main. Vous avez une crème ?" },
      { role: "A", text: "C'est une petite brûlure ou c'est grave ?" },
      { role: "B", text: "C'est petit, la peau est juste rouge." },
      { role: "A", text: "Voici une crème. Il faut en mettre deux fois par jour." },
      { role: "B", text: "D'accord. Et si ça ne va pas mieux ?" },
      { role: "A", text: "Si ça ne va pas mieux dans trois jours, allez chez le médecin." },
      { role: "B", text: "Merci beaucoup, bonne journée !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-2-po-5",
    title: "La pharmacie de garde",
    context: "C'est dimanche et vous téléphonez pour trouver une pharmacie ouverte.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Pharmacie de la Gare, bonjour !" },
      { role: "B", text: "Bonjour, vous êtes ouverts aujourd'hui ?" },
      { role: "A", text: "Oui, nous sommes de garde ce dimanche, de 9 h à 18 h." },
      { role: "B", text: "Super. J'ai besoin d'un médicament pour la fièvre." },
      { role: "A", text: "Pas de problème, nous en avons. C'est pour un adulte ?" },
      { role: "B", text: "Oui, c'est pour moi. J'arrive dans vingt minutes." },
      { role: "A", text: "Très bien, à tout à l'heure !" },
      { role: "B", text: "Merci, à tout à l'heure !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-2-po-6",
    title: "Des pastilles pour la gorge",
    context: "Vous avez mal à la gorge depuis ce matin.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Qu'est-ce qu'il vous faut ?" },
      { role: "B", text: "J'ai mal à la gorge. Vous avez des pastilles ?" },
      { role: "A", text: "Oui, bien sûr. Vous avez du mal à avaler ?" },
      { role: "B", text: "Un peu, surtout le matin." },
      { role: "A", text: "Prenez ces pastilles, une toutes les trois heures." },
      { role: "B", text: "D'accord. Ça coûte combien ?" },
      { role: "A", text: "Huit francs cinquante, s'il vous plaît." },
      { role: "B", text: "Voilà. Merci et bonne journée !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-2-po-7",
    title: "Oublié son ordonnance",
    context: "Vous voulez un médicament, mais vous avez oublié votre ordonnance à la maison.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, je vous écoute." },
      { role: "B", text: "Bonjour, je voudrais mes médicaments, mais j'ai oublié mon ordonnance." },
      { role: "A", text: "Sans ordonnance, je ne peux pas vous donner ce médicament." },
      { role: "B", text: "Qu'est-ce que je peux faire alors ?" },
      { role: "A", text: "Vous pouvez revenir avec l'ordonnance, ou le médecin peut nous l'envoyer." },
      { role: "B", text: "D'accord, je vais appeler mon médecin." },
      { role: "A", text: "Très bien. À tout à l'heure peut-être !" },
      { role: "B", text: "Merci, au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-2-po-8",
    title: "Un médicament pour un enfant",
    context: "Votre fille de 4 ans tousse. Vous demandez si le sirop convient.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Comment puis-je vous aider ?" },
      { role: "B", text: "Ma fille tousse. Ce sirop convient pour un enfant de 4 ans ?" },
      { role: "A", text: "Non, ce sirop est pour les enfants de plus de 6 ans." },
      { role: "B", text: "Ah… vous avez autre chose pour elle ?" },
      { role: "A", text: "Oui, ce sirop pour enfants : une cuillère matin et soir." },
      { role: "B", text: "Parfait. Il y a des effets secondaires ?" },
      { role: "A", text: "Non, mais si la toux continue, allez chez le pédiatre." },
      { role: "B", text: "D'accord, merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-2-po-9",
    title: "Demander le prix et payer",
    context: "Vous achetez de l'aspirine et vous demandez le prix.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, vous désirez ?" },
      { role: "B", text: "Bonjour, une boîte d'aspirine, s'il vous plaît." },
      { role: "A", text: "En comprimés ou en sachets ?" },
      { role: "B", text: "En sachets, s'il vous plaît. C'est combien ?" },
      { role: "A", text: "Six francs nonante. Vous payez par carte ?" },
      { role: "B", text: "Oui, par carte. Tenez." },
      { role: "A", text: "Merci. Voici votre ticket. Bonne journée !" },
      { role: "B", text: "Merci, au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-2-po-10",
    title: "Expliquer une allergie",
    context: "Vous avez des rougeurs sur les bras et vous demandez conseil.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, qu'est-ce qui vous amène ?" },
      { role: "B", text: "J'ai des rougeurs sur les bras depuis hier. Ça gratte." },
      { role: "A", text: "Vous avez mangé quelque chose de nouveau ?" },
      { role: "B", text: "Oui, des fruits de mer, hier soir." },
      { role: "A", text: "C'est peut-être une allergie. Prenez ce médicament, un par jour." },
      { role: "B", text: "D'accord. Et si ça ne part pas ?" },
      { role: "A", text: "Si ça ne part pas dans deux jours, il faut voir un médecin." },
      { role: "B", text: "Merci pour vos conseils !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e5-2-po-11",
    title: "Acheter du sirop",
    context: "Vous avez mal à la gorge.",
    roleA: { title: "Le pharmacien", vous: "le pharmacien / la pharmacienne" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Bonjour, j'ai mal à la gorge. Vous avez un sirop ?" },
      { role: "A", text: "Oui, voici un sirop pour la gorge." },
      { role: "B", text: "Je le prends comment ?" },
      { role: "A", text: "Une cuillère matin et soir." },
      { role: "B", text: "D'accord. Il coûte combien ?" },
      { role: "A", text: "Huit francs." },
      { role: "B", text: "Merci, je le prends." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e5-2-po-12",
    title: "Sans ordonnance",
    context: "Vous avez mal à la tête.",
    roleA: { title: "Le pharmacien", vous: "le pharmacien / la pharmacienne" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour !" },
      { role: "B", text: "Bonjour, j'ai mal à la tête. Je n'ai pas d'ordonnance." },
      { role: "A", text: "Pas de problème. Du paracétamol, ça va ?" },
      { role: "B", text: "Oui, s'il vous plaît." },
      { role: "A", text: "Voici. Prenez un comprimé si besoin." },
      { role: "B", text: "Merci. Je peux en prendre deux ?" },
      { role: "A", text: "Non, un seul à la fois." },
      { role: "B", text: "D'accord, merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e5-2-po-13",
    title: "Ordonnance du médecin",
    context: "Le médecin vous a donné une ordonnance.",
    roleA: { title: "Le pharmacien", vous: "le pharmacien / la pharmacienne" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour, vous avez une ordonnance ?" },
      { role: "B", text: "Oui, voici. C'est pour des antibiotiques." },
      { role: "A", text: "Très bien. Ça sera prêt dans dix minutes." },
      { role: "B", text: "Merci. Je dois attendre ici ?" },
      { role: "A", text: "Oui, asseyez-vous. C'est 15 francs." },
      { role: "B", text: "Je paie par carte ?" },
      { role: "A", text: "Oui, à la caisse." },
      { role: "B", text: "Parfait, merci." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e5-2-po-14",
    title: "Crème pour une brûlure",
    context: "Vous vous êtes brûlé la main.",
    roleA: { title: "Le pharmacien", vous: "le pharmacien / la pharmacienne" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour, qu'est-ce qu'il vous faut ?" },
      { role: "B", text: "Je me suis brûlé la main. Vous avez une crème ?" },
      { role: "A", text: "Oui, cette crème est très efficace." },
      { role: "B", text: "Je la mets combien de fois par jour ?" },
      { role: "A", text: "Deux ou trois fois par jour." },
      { role: "B", text: "Merci. Et si ça ne va pas mieux ?" },
      { role: "A", text: "Allez voir un médecin." },
      { role: "B", text: "D'accord, merci." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e5-2-po-15",
    title: "Médicament pour enfant",
    context: "Votre fille a de la fièvre.",
    roleA: { title: "Le pharmacien", vous: "le pharmacien / la pharmacienne" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour !" },
      { role: "B", text: "Bonjour, ma fille a de la fièvre. Elle a cinq ans." },
      { role: "A", text: "Voici un sirop pour enfants." },
      { role: "B", text: "La dose, c'est combien ?" },
      { role: "A", text: "Cinq millilitres, deux fois par jour." },
      { role: "B", text: "Merci. Il a un bon goût ?" },
      { role: "A", text: "Oui, goût fraise." },
      { role: "B", text: "Parfait, merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e5-2-po-16",
    title: "Pharmacie de garde",
    context: "C'est dimanche, vous avez besoin d'un médicament.",
    roleA: { title: "Le pharmacien", vous: "le pharmacien / la pharmacienne" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Pharmacie de garde, bonjour !" },
      { role: "B", text: "Bonjour, j'ai très mal au ventre." },
      { role: "A", text: "Depuis quand ?" },
      { role: "B", text: "Depuis ce matin." },
      { role: "A", text: "Prenez ce comprimé et reposez-vous." },
      { role: "B", text: "Si ça continue, je fais quoi ?" },
      { role: "A", text: "Allez aux urgences." },
      { role: "B", text: "Merci, bonne soirée." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e5-2-po-17",
    title: "Pansements",
    context: "Vous avez besoin de pansements.",
    roleA: { title: "Le pharmacien", vous: "le pharmacien / la pharmacienne" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour !" },
      { role: "B", text: "Bonjour, je voudrais des pansements, s'il vous plaît." },
      { role: "A", text: "Petits ou grands ?" },
      { role: "B", text: "Les grands, s'il vous plaît." },
      { role: "A", text: "Voici une boîte de dix." },
      { role: "B", text: "Merci. C'est combien ?" },
      { role: "A", text: "Cinq francs." },
      { role: "B", text: "Je les prends, merci." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e5-2-po-18",
    title: "Conseil sur vitamines",
    context: "Vous voulez des vitamines.",
    roleA: { title: "Le pharmacien", vous: "le pharmacien / la pharmacienne" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Bonjour, je suis fatigué. Des vitamines, c'est bien ?" },
      { role: "A", text: "Oui, en automne c'est une bonne idée." },
      { role: "B", text: "Lesquelles vous conseillez ?" },
      { role: "A", text: "Celles-ci, une par jour." },
      { role: "B", text: "D'accord. Combien de temps ?" },
      { role: "A", text: "Un mois, minimum." },
      { role: "B", text: "Merci pour le conseil." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e5-2-po-19",
    title: "Médicament indisponible",
    context: "Votre médicament n'est pas en stock.",
    roleA: { title: "Le pharmacien", vous: "le pharmacien / la pharmacienne" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour !" },
      { role: "B", text: "Bonjour, j'ai une ordonnance pour ce médicament." },
      { role: "A", text: "Désolé, il n'est plus disponible." },
      { role: "B", text: "Vous avez un équivalent ?" },
      { role: "A", text: "Oui, le même principe, moins cher." },
      { role: "B", text: "D'accord, je le prends." },
      { role: "A", text: "Ce sera prêt demain matin." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e5-2-po-20",
    title: "Question sur les effets",
    context: "Vous avez une question sur un médicament.",
    roleA: { title: "Le pharmacien", vous: "le pharmacien / la pharmacienne" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour !" },
      { role: "B", text: "Bonjour, ce médicament, il fait dormir ?" },
      { role: "A", text: "Un peu, oui. Prenez-le le soir." },
      { role: "B", text: "Je peux conduire après ?" },
      { role: "A", text: "Non, attention à la conduite." },
      { role: "B", text: "D'accord, merci pour l'info." },
      { role: "A", text: "De rien. Bonne journée !" },
      { role: "B", text: "Merci, au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
];


/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E5_2_PE: ExpressPePrompt[] = [
  {
    id: "e5-2-pe-1",
    title: "Grippe à la pharmacie",
    situation: "",
    instruction: "Vous avez la grippe. Vous allez à la pharmacie et vous expliquez où vous avez mal. Vous demandez des médicaments.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-2",
    title: "Brûlure et médicaments",
    situation: "",
    instruction: "Vous avez une brûlure. Vous écrivez un message à un(e) ami(e) pour lui demander d'aller acheter des médicaments.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-3",
    title: "Conseil du pharmacien",
    situation: "",
    instruction: "Vous écrivez à un(e) ami(e) après votre passage à la pharmacie pour raconter ce que le pharmacien vous a conseillé et comment vous devez prendre le médicament.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-4",
    title: "Ordonnance oubliée",
    situation: "",
    instruction: "Vous écrivez à votre médecin parce que vous avez oublié votre ordonnance à la maison et vous demandez comment récupérer vos médicaments.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-5",
    title: "Trousse de secours",
    situation: "",
    instruction: "Vous préparez une trousse de secours pour un week-end et vous écrivez la liste des produits nécessaires avec la raison de chaque achat.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-6",
    title: "Mal de gorge",
    situation: "",
    instruction: "Vous avez mal à la gorge et vous envoyez un message à la pharmacie pour demander si elle vend un sirop, des pastilles et un thermomètre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-7",
    title: "Pharmacie de garde",
    situation: "",
    instruction: "Il est tard et vous écrivez à un(e) voisin(e) pour demander où se trouve la pharmacie de garde et quels médicaments acheter.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-8",
    title: "Allergie légère",
    situation: "",
    instruction: "Vous avez une allergie légère et vous expliquez au pharmacien vos symptômes, depuis quand ils ont commencé et ce que vous avez déjà pris.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-9",
    title: "Médicament pour enfant",
    situation: "",
    instruction: "Vous écrivez un message à la pharmacie pour demander un médicament adapté à un enfant, donner son âge et décrire ses symptômes.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-10",
    title: "Douleur au ventre",
    situation: "",
    instruction: "Vous avez mal au ventre et vous écrivez à un(e) ami(e) pour expliquer votre état, demander un conseil et dire si vous allez consulter.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-11",
    title: "Achat pour les vacances",
    situation: "",
    instruction: "Avant de partir en vacances, vous écrivez à votre famille pour dire quels produits de pharmacie vous achetez et pourquoi ils sont utiles.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-12",
    title: "Mode d'emploi",
    situation: "",
    instruction: "Vous expliquez à un(e) ami(e) comment prendre un médicament, à quel moment de la journée le prendre et quelles précautions respecter.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-13",
    title: "Produit manquant",
    situation: "",
    instruction: "La pharmacie n'a plus votre médicament habituel et vous écrivez au pharmacien pour demander une solution, un autre produit ou une commande.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-14",
    title: "Piqûre d'insecte",
    situation: "",
    instruction: "Vous avez une piqûre d'insecte et vous écrivez à un(e) ami(e) pour décrire la douleur, demander une crème et expliquer où est la pharmacie.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-15",
    title: "Rhume au travail",
    situation: "",
    instruction: "Vous êtes enrhumé(e) au travail et vous écrivez à un(e) collègue pour demander de passer à la pharmacie pendant la pause.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-16",
    title: "Prix des médicaments",
    situation: "",
    instruction: "Vous écrivez à la pharmacie pour demander le prix de plusieurs produits, leurs horaires d'ouverture et la possibilité de payer par carte.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-17",
    title: "Médicament perdu",
    situation: "",
    instruction: "Vous avez perdu un médicament pendant un déplacement et vous écrivez à un(e) ami(e) pour expliquer le problème et demander de l'aide.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-18",
    title: "Soigner une coupure",
    situation: "",
    instruction: "Vous vous êtes coupé(e) la main et vous expliquez au pharmacien ce qui s'est passé, ce dont vous avez besoin et si la coupure saigne encore.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-19",
    title: "Médicaments à la maison",
    situation: "",
    instruction: "Vous écrivez à votre colocataire pour organiser les médicaments à la maison, jeter les produits trop vieux et acheter ce qui manque.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-20",
    title: "Retour à la pharmacie",
    situation: "",
    instruction: "Vous retournez à la pharmacie parce que le traitement ne marche pas bien et vous expliquez au pharmacien ce que vous ressentez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];

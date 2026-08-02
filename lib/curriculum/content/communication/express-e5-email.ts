import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 50;
const PE_MAX = 120;


/* ════════════════════════════════════════════════════════════════════════════
   E5.1 — Aller chez le médecin
   ════════════════════════════════════════════════════════════════════════════ */

const E5_1_CE_EMAIL_TEXT_1 = `De : Cabinet du Dr Morel
Objet : Confirmation de rendez-vous

Bonjour,

Votre rendez-vous est confirmé le mardi 14 mars à 10 h 30.
Adresse : avenue du Lac 8, 3e étage.
Apportez votre carte d'assurance.
Pour annuler, appelez 24 h avant.

Cordialement,
Le secrétariat`;

const E5_1_CE_EMAIL_POOL_1 = buildExpressPool("e5-1-ce-email-1", [
  q({
    id: "ce-q1",
    textQ: "Quel jour est le rendez-vous ?",
    text: ["Mardi 14 mars","Mercredi 15 mars","Vendredi 17 mars"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rendez-vous le mardi 14 _________.",
    fill: "mars",
    vfQ: "C'est mardi 14 mars.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quelle heure ?",
    text: ["10 h 30","9 h","14 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "À 10 h _________.",
    fill: "30",
    vfQ: "À 10 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est le cabinet ?",
    text: ["Avenue du Lac 8","Rue du Rhône 1","Place Centrale 5"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Avenue du Lac _________.",
    fill: "8",
    vfQ: "Avenue du Lac 8.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "À quel étage ?",
    text: ["3e étage","Rez-de-chaussée","5e étage"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Au _________ étage.",
    fill: "3e",
    fillA: ["3","troisième"],
    vfQ: "3e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que faut-il apporter ?",
    text: ["Carte d'assurance","Passeport","Cadeau"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Apportez votre carte d'_________.",
    fill: "assurance",
    vfQ: "Carte d'assurance.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Délai pour annuler ?",
    text: ["24 h avant","1 h avant","1 mois avant"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appelez _________ h avant.",
    fill: "24",
    vfQ: "24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Le secrétariat du Dr Morel","La gare","Le restaurant"],
    textC: 0,
    img: ["médecin","pharmacien","serveur"],
    imgC: 0,
    fillQ: "Cabinet du Dr _________.",
    fill: "Morel",
    vfQ: "Dr Morel.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_2 = `De : Dr Blanc
Objet : Report de votre rendez-vous

Bonjour Mme Favre,

Je dois reporter votre rendez-vous du jeudi 3 avril.
Nouvelle date proposée : vendredi 11 avril à 15 h.
Répondez à cet e-mail pour confirmer.
Désolé pour ce changement.

Dr Blanc`;

const E5_1_CE_EMAIL_POOL_2 = buildExpressPool("e5-1-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Pour qui est l'e-mail ?",
    text: ["Mme Favre","M. Dupont","Dr Blanc"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Bonjour Mme _________.",
    fill: "Favre",
    vfQ: "Mme Favre.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle était l'ancienne date ?",
    text: ["Jeudi 3 avril","Vendredi 11 avril","Lundi 1er mars"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rendez-vous du jeudi 3 _________.",
    fill: "avril",
    vfQ: "Ancienne date : jeudi 3 avril.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Nouvelle date proposée ?",
    text: ["Vendredi 11 avril à 15 h","Jeudi 3 avril à 8 h","Dimanche 20 mai"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Vendredi 11 avril à _________ h.",
    fill: "15",
    fillA: ["quinze"],
    vfQ: "Vendredi 11 avril 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment confirmer ?",
    text: ["Répondre à l'e-mail","Aller à la gare","Téléphoner au 117"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ à cet e-mail pour confirmer.",
    fill: "Répondez",
    fillA: ["repondez","Repondre"],
    vfQ: "Répondre à l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Pourquoi ce message ?",
    text: ["Report de rendez-vous","Invitation restaurant","Vente voiture"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ de votre rendez-vous.",
    fill: "Report",
    vfQ: "Report de RDV.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit ?",
    text: ["Dr Blanc","Mme Favre","Le facteur"],
    textC: 0,
    img: ["médecin","facteur","boulanger"],
    imgC: 0,
    fillQ: "Dr _________.",
    fill: "Blanc",
    vfQ: "Dr Blanc.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le médecin est-il désolé ?",
    text: ["Oui","Non","On ne sait pas"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ pour ce changement.",
    fill: "Désolé",
    fillA: ["Desole","désolé"],
    vfQ: "Il s'excuse.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_3 = `De : Laboratoire MediLab
Objet : Vos résultats d'analyse

Bonjour,

Vos résultats de prise de sang du 5 mai sont disponibles.
Connectez-vous sur www.medilab.ch avec votre code patient.
Pour une copie papier, passez au guichet du laboratoire.
En cas de valeur anormale, votre médecin vous contactera.

MediLab`;

const E5_1_CE_EMAIL_POOL_3 = buildExpressPool("e5-1-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quels résultats ?",
    text: ["Prise de sang du 5 mai","Radio du 5 mai","Test de vue"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Résultats de _________ de sang du 5 mai.",
    fill: "prise",
    vfQ: "Prise de sang.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment voir les résultats en ligne ?",
    text: ["Sur www.medilab.ch","À la plage","Au cinéma"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Connectez-vous sur www.medilab._________",
    fill: "ch",
    vfQ: "Site medilab.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Que faut-il pour se connecter ?",
    text: ["Code patient","Un chat","Un vélo"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Avec votre code _________.",
    fill: "patient",
    vfQ: "Code patient.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Copie papier où ?",
    text: ["Guichet du laboratoire","Gare","École"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Passez au guichet du _________.",
    fill: "laboratoire",
    vfQ: "Au guichet labo.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacte si valeur anormale ?",
    text: ["Votre médecin","Le boulanger","Le taxi"],
    textC: 0,
    img: ["médecin","boulanger","chauffeur"],
    imgC: 0,
    fillQ: "Votre _________ vous contactera.",
    fill: "médecin",
    fillA: ["medecin"],
    vfQ: "Le médecin contacte.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Date de la prise de sang ?",
    text: ["5 mai","5 mars","15 mai"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Du 5 _________.",
    fill: "mai",
    vfQ: "5 mai.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["MediLab","La poste","Le restaurant"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Laboratoire _________.",
    fill: "MediLab",
    vfQ: "MediLab.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_4 = `De : Cabinet SantéPlus
Objet : Rappel — vaccination grippe

Bonjour,

La vaccination contre la grippe est disponible dans notre cabinet.
Rendez-vous : appelez le 021 333 44 55.
Gratuit pour les patients du cabinet de plus de 65 ans.
Merci de venir avec votre carte d'assurance.

Le secrétariat`;

const E5_1_CE_EMAIL_POOL_4 = buildExpressPool("e5-1-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quelle vaccination ?",
    text: ["Contre la grippe","Contre la pluie","Contre la faim"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Vaccination contre la _________.",
    fill: "grippe",
    vfQ: "Vaccination grippe.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment prendre RDV ?",
    text: ["Appeler le 021 333 44 55","Envoyer une lettre","Crier"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appelez le 021 333 44 _________.",
    fill: "55",
    vfQ: "Par téléphone.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Gratuit pour qui ?",
    text: ["Patients du cabinet 65+","Tout le monde","Enfants seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Patients de plus de _________ ans.",
    fill: "65",
    vfQ: "Gratuit 65+ patients cabinet.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que faut-il apporter ?",
    text: ["Carte d'assurance","Skis","Livre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Carte d'_________.",
    fill: "assurance",
    vfQ: "Carte d'assurance.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où a lieu la vaccination ?",
    text: ["Dans le cabinet","À la plage","À la gare"],
    textC: 0,
    img: ["médecin","pharmacie","gare"],
    imgC: 0,
    fillQ: "Dans notre _________.",
    fill: "cabinet",
    vfQ: "Au cabinet.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Objet de l'e-mail ?",
    text: ["Rappel vaccination","Menu restaurant","Horaires bus"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rappel — vaccination _________.",
    fill: "grippe",
    vfQ: "Rappel vaccination.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui signe ?",
    text: ["Le secrétariat","Le chauffeur","Le jardinier"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Le _________.",
    fill: "secrétariat",
    fillA: ["secretariat"],
    vfQ: "Le secrétariat.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_5 = `De : Cabinet des Lilas
Objet : Nouveau médecin dans notre équipe

Bonjour,

Nous accueillons le Dr Nguyen à partir du 1er juin.
Elle parle français, anglais et vietnamien.
Spécialité : médecine générale.
Vous pouvez prendre rendez-vous avec elle dès maintenant.

Bienvenue à elle !
Le secrétariat`;

const E5_1_CE_EMAIL_POOL_5 = buildExpressPool("e5-1-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Qui arrive ?",
    text: ["Dr Nguyen","Dr Martin","Mme Keller"],
    textC: 0,
    img: ["médecin","infirmier","pharmacien"],
    imgC: 0,
    fillQ: "Dr _________.",
    fill: "Nguyen",
    vfQ: "Dr Nguyen.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À partir de quand ?",
    text: ["1er juin","1er janvier","1er septembre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "À partir du 1er _________.",
    fill: "juin",
    vfQ: "1er juin.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelles langues ?",
    text: ["Français, anglais, vietnamien","Latin","Aucune"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Français, anglais et _________.",
    fill: "vietnamien",
    vfQ: "3 langues.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle spécialité ?",
    text: ["Médecine générale","Pilote","Cuisinier"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ : médecine générale.",
    fill: "Spécialité",
    fillA: ["specialite","Spécialité"],
    vfQ: "Médecine générale.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on prendre RDV maintenant ?",
    text: ["Oui","Non","En 2028"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rendez-vous dès _________.",
    fill: "maintenant",
    vfQ: "Dès maintenant.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le Dr Nguyen est-il un homme ?",
    text: ["Non, elle","Oui","On ne sait pas"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ parle français.",
    fill: "Elle",
    vfQ: "C'est une femme (elle).",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Nouveau médecin","Vacances","Restaurant"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Nouveau _________ dans notre équipe.",
    fill: "médecin",
    fillA: ["medecin"],
    vfQ: "Nouveau médecin.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_6 = `De : Cabinet du Dr Leroy
Objet : Fermeture estivale

Bonjour,

Notre cabinet sera fermé du 1er au 31 juillet.
Pour une urgence, composez le 144.
Pour un médecin de garde : 0844 000 000.
Réouverture le 1er août aux horaires habituels.
Bonnes vacances !

Dr Leroy`;

const E5_1_CE_EMAIL_POOL_6 = buildExpressPool("e5-1-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quand le cabinet ferme-t-il ?",
    text: ["Du 1er au 31 juillet","En janvier","Tous les mardis"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Fermé du 1er au 31 _________.",
    fill: "juillet",
    vfQ: "Fermeture juillet.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Numéro urgence vitale ?",
    text: ["144","1818","0900"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Composez le _________.",
    fill: "144",
    vfQ: "144 urgences.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Numéro médecin de garde ?",
    text: ["0844 000 000","117","118"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Médecin de garde : 0844 000 _________.",
    fill: "000",
    vfQ: "0844 000 000.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand réouverture ?",
    text: ["1er août","1er juin","31 juillet"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Réouverture le 1er _________.",
    fill: "août",
    fillA: ["aout"],
    vfQ: "1er août.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Pourquoi ce message ?",
    text: ["Fermeture vacances","Nouveau médecin","Facture"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Fermeture _________.",
    fill: "estivale",
    vfQ: "Fermeture estivale.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que souhaite le Dr Leroy ?",
    text: ["Bonnes vacances","Bon appétit","Bon voyage en bus"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Bonnes _________ !",
    fill: "vacances",
    vfQ: "Bonnes vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le cabinet est-il ouvert en juillet ?",
    text: ["Non","Oui","Seulement le 15"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Fermé du 1er au 31 juillet.",
    fill: "juillet",
    vfQ: "Fermé tout juillet.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_7 = `De : Téléconsultation SantéNet
Objet : Lien pour votre consultation en ligne

Bonjour M. Costa,

Votre téléconsultation est aujourd'hui à 16 h.
Cliquez sur ce lien 5 minutes avant : https://santenett.ch/rdv-8821
Testez votre caméra et votre micro.
Si problème technique, appelez le 021 777 88 99.

L'équipe SantéNet`;

const E5_1_CE_EMAIL_POOL_7 = buildExpressPool("e5-1-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Pour qui ?",
    text: ["M. Costa","Mme Rossi","Dr Faure"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Bonjour M. _________.",
    fill: "Costa",
    vfQ: "M. Costa.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quelle heure ?",
    text: ["16 h","8 h","23 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Aujourd'hui à _________ h.",
    fill: "16",
    fillA: ["seize"],
    vfQ: "16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cliquer sur le lien ?",
    text: ["5 minutes avant","1 heure après","Jamais"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ minutes avant.",
    fill: "5",
    fillA: ["cinq"],
    vfQ: "5 min avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que tester avant ?",
    text: ["Caméra et micro","La voiture","Le four"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Testez votre caméra et votre _________.",
    fill: "micro",
    vfQ: "Caméra et micro.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Numéro si problème ?",
    text: ["021 777 88 99","144","117"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appelez le 021 777 88 _________.",
    fill: "99",
    vfQ: "021 777 88 99.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Type de consultation ?",
    text: ["En ligne / téléconsultation","Au restaurant","À la piscine"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Consultation en _________.",
    fill: "ligne",
    vfQ: "Téléconsultation.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui envoie ?",
    text: ["SantéNet","La gare","Le cinéma"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Équipe _________.",
    fill: "SantéNet",
    vfQ: "SantéNet.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_8 = `De : Cabinet du Dr Simon
Objet : Facture de consultation

Bonjour,

Veuillez trouver ci-joint la facture de votre consultation du 12 février.
Montant total : 95 francs.
Votre part après remboursement assurance : 19 francs.
Paiement par virement sous 30 jours.
IBAN : CH12 3456 7890 1234 5678 9.

Merci,
Comptabilité`;

const E5_1_CE_EMAIL_POOL_8 = buildExpressPool("e5-1-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Date consultation ?",
    text: ["12 février","12 mars","22 février"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Consultation du 12 _________.",
    fill: "février",
    fillA: ["fevrier"],
    vfQ: "12 février.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Montant total ?",
    text: ["95 francs","19 francs","500 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Montant total : _________ francs.",
    fill: "95",
    fillA: ["quatre-vingt-quinze"],
    vfQ: "95 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Part du patient ?",
    text: ["19 francs","95 francs","0 franc"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Votre part : _________ francs.",
    fill: "19",
    fillA: ["dix-neuf"],
    vfQ: "19 francs à payer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Délai de paiement ?",
    text: ["30 jours","3 jours","1 an"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Paiement sous _________ jours.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "30 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Mode de paiement ?",
    text: ["Virement","Espèces au cabinet","Points"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Paiement par _________.",
    fill: "virement",
    vfQ: "Par virement.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qui est joint ?",
    text: ["La facture","Un chat","Un billet"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ci-joint la _________.",
    fill: "facture",
    vfQ: "La facture.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui signe ?",
    text: ["Comptabilité","Le facteur","Le cuisinier"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________, Comptabilité.",
    fill: "Merci",
    vfQ: "Comptabilité.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_9 = `De : Assurance SantéVie
Objet : Votre carte d'assurance expire bientôt

Bonjour,

Votre carte d'assurance expire le 30 juin.
Commandez la nouvelle carte sur notre site avant cette date.
Sans carte valide, le remboursement des soins peut être retardé.
Besoin d'aide ? Appelez le 0800 456 789.

SantéVie`;

const E5_1_CE_EMAIL_POOL_9 = buildExpressPool("e5-1-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quand expire la carte ?",
    text: ["30 juin","30 mars","30 décembre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Expire le 30 _________.",
    fill: "juin",
    vfQ: "30 juin.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment commander la nouvelle ?",
    text: ["Sur le site","À la plage","Par SMS au 144"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Commandez sur notre _________.",
    fill: "site",
    vfQ: "Sur le site.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Risque sans carte valide ?",
    text: ["Remboursement retardé","Plus de médecin","Plus de nourriture"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Le remboursement peut être _________.",
    fill: "retardé",
    fillA: ["retarde"],
    vfQ: "Remboursement retardé.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Numéro d'aide ?",
    text: ["0800 456 789","144","1818"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appelez le 0800 456 _________.",
    fill: "789",
    vfQ: "0800 456 789.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui envoie ?",
    text: ["SantéVie","Le cabinet médical","La pharmacie"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Assurance _________.",
    fill: "SantéVie",
    fillA: ["SanteVie"],
    vfQ: "Assurance SantéVie.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Expiration carte assurance","Vacances","Restaurant"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Carte d'assurance _________ bientôt.",
    fill: "expire",
    vfQ: "Expiration carte.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Faut-il agir avant le 30 juin ?",
    text: ["Oui","Non","En 2030"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Commandez _________ cette date.",
    fill: "avant",
    vfQ: "Agir avant le 30 juin.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_10 = `De : Mairie de Renens
Objet : Invitation — dépistage gratuit

Bonjour,

La mairie vous invite au dépistage gratuit du diabète.
Date : samedi 18 mai, 9 h–13 h.
Lieu : salle communale, rue de Lausanne 15.
Sans rendez-vous. Apportez une pièce d'identité.

Service santé publique`;

const E5_1_CE_EMAIL_POOL_10 = buildExpressPool("e5-1-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel dépistage ?",
    text: ["Diabète","Pluie","Football"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Dépistage du _________.",
    fill: "diabète",
    fillA: ["diabete"],
    vfQ: "Dépistage diabète.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour ?",
    text: ["Samedi 18 mai","Lundi 3 avril","Dimanche 1er janvier"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Samedi 18 _________.",
    fill: "mai",
    vfQ: "Samedi 18 mai.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Horaires ?",
    text: ["9 h–13 h","20 h–23 h","Fermé"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "9 h à _________ h.",
    fill: "13",
    fillA: ["treize"],
    vfQ: "9 h–13 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où ?",
    text: ["Salle communale, rue de Lausanne 15","Aéroport","Plage"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rue de Lausanne _________.",
    fill: "15",
    vfQ: "Rue de Lausanne 15.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Rendez-vous nécessaire ?",
    text: ["Non","Oui","Par Internet seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Sans _________.",
    fill: "rendez-vous",
    fillA: ["rendez vous"],
    vfQ: "Sans RDV.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il apporter ?",
    text: ["Pièce d'identité","Skis","Chien"],
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
    id: "ce-q7",
    textQ: "Le dépistage est-il payant ?",
    text: ["Non, gratuit","Oui, 50 francs","Oui, 200 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Dépistage _________.",
    fill: "gratuit",
    vfQ: "Gratuit.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_11 = `De : Cabinet du Dr Garcia
Objet : Annulation de votre rendez-vous

Bonjour M. Weber,

Le Dr Garcia est malade. Votre rendez-vous du mardi 9 avril est annulé.
Nous vous proposons le jeudi 11 avril à 11 h ou le vendredi 12 avril à 9 h.
Répondez avant vendredi 5 avril.
Désolé pour la gêne occasionnée.

Le secrétariat`;

const E5_1_CE_EMAIL_POOL_11 = buildExpressPool("e5-1-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Pourquoi annulation ?",
    text: ["Le Dr Garcia est malade","Il pleut","C'est dimanche"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Le Dr Garcia est _________.",
    fill: "malade",
    vfQ: "Médecin malade.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "RDV annulé quand ?",
    text: ["Mardi 9 avril","Jeudi 11 avril","Vendredi 12 avril"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rendez-vous du mardi 9 _________.",
    fill: "avril",
    vfQ: "Mardi 9 avril annulé.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Une proposition ?",
    text: ["Jeudi 11 avril à 11 h","Lundi 1er mars","Samedi minuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Jeudi 11 avril à _________ h.",
    fill: "11",
    vfQ: "Jeudi 11 h 11.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Répondre avant ?",
    text: ["Vendredi 5 avril","1er janvier","Dans 2 ans"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Répondez avant vendredi 5 _________.",
    fill: "avril",
    vfQ: "Avant vendredi 5 avril.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Pour qui ?",
    text: ["M. Weber","Dr Garcia","Mme Keller"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Bonjour M. _________.",
    fill: "Weber",
    vfQ: "M. Weber.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Combien de dates proposées ?",
    text: ["Deux","Une","Dix"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Jeudi 11 avril ou vendredi 12 _________.",
    fill: "avril",
    vfQ: "Deux dates proposées.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Objet de l'e-mail ?",
    text: ["Annulation de rendez-vous","Facture","Vacances"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ de votre rendez-vous.",
    fill: "Annulation",
    vfQ: "Annulation RDV.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_12 = `De : Dr Martin
Objet : Renouvellement d'ordonnance

Bonjour Mme Dubois,

Votre ordonnance pour le médicament CardioPlus arrive à expiration.
Passez au cabinet pour un contrôle avant renouvellement.
Prenez rendez-vous en ligne ou par téléphone.
N'arrêtez pas le traitement sans avis médical.

Dr Martin`;

const E5_1_CE_EMAIL_POOL_12 = buildExpressPool("e5-1-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel médicament ?",
    text: ["CardioPlus","Dolirène","Aspirine"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Médicament _________.",
    fill: "CardioPlus",
    vfQ: "CardioPlus.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faire avant renouvellement ?",
    text: ["Passer au cabinet pour un contrôle","Arrêter le traitement","Aller à la plage"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Passez au cabinet pour un _________.",
    fill: "contrôle",
    fillA: ["controle"],
    vfQ: "Contrôle au cabinet.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Peut-on arrêter seul ?",
    text: ["Non, sans avis médical","Oui","Oui, demain"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "N'arrêtez pas sans avis _________.",
    fill: "médical",
    fillA: ["medical"],
    vfQ: "Pas sans avis médical.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment prendre RDV ?",
    text: ["En ligne ou par téléphone","Par courrier seulement","En criant"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rendez-vous en ligne ou par _________.",
    fill: "téléphone",
    fillA: ["telephone"],
    vfQ: "En ligne ou téléphone.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Pour qui ?",
    text: ["Mme Dubois","Dr Martin","M. Costa"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Bonjour Mme _________.",
    fill: "Dubois",
    vfQ: "Mme Dubois.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Problème avec l'ordonnance ?",
    text: ["Elle expire","Elle est gratuite","Elle est en couleur"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ordonnance arrive à _________.",
    fill: "expiration",
    vfQ: "Ordonnance expire.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui écrit ?",
    text: ["Dr Martin","Pharmacien","Facteur"],
    textC: 0,
    img: ["médecin","pharmacien","facteur"],
    imgC: 0,
    fillQ: "Dr _________.",
    fill: "Martin",
    vfQ: "Dr Martin.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_13 = `De : Cabinet du Dr Roux
Objet : Rappel — contrôle annuel

Bonjour,

Il y a un an que nous ne vous avons pas vu.
Nous vous recommandons un contrôle annuel.
Disponibilités : mardi et jeudi matin.
Appelez le 021 888 99 00 ou réservez sur notre site.

À bientôt,
Le secrétariat`;

const E5_1_CE_EMAIL_POOL_13 = buildExpressPool("e5-1-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Depuis combien de temps pas vu ?",
    text: ["Un an","Un jour","Dix ans"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Il y a un _________ que nous ne vous avons pas vu.",
    fill: "an",
    fillA: ["annee","année"],
    vfQ: "Un an.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que recommande le cabinet ?",
    text: ["Contrôle annuel","Vacances","Sport extrême"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Contrôle _________.",
    fill: "annuel",
    vfQ: "Contrôle annuel.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels créneaux ?",
    text: ["Mardi et jeudi matin","Dimanche soir","Nuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Mardi et _________ matin.",
    fill: "jeudi",
    vfQ: "Mardi et jeudi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Numéro de téléphone ?",
    text: ["021 888 99 00","144","1818"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appelez le 021 888 99 _________.",
    fill: "00",
    vfQ: "021 888 99 00.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on réserver en ligne ?",
    text: ["Oui, sur le site","Non","Sur Facebook seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Réservez sur notre _________.",
    fill: "site",
    vfQ: "Sur le site.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Objet de l'e-mail ?",
    text: ["Rappel contrôle annuel","Facture","Menu"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rappel — contrôle _________.",
    fill: "annuel",
    vfQ: "Rappel contrôle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel cabinet ?",
    text: ["Dr Roux","Dr Nguyen","Pharmacie Centrale"],
    textC: 0,
    img: ["médecin","pharmacien","dentiste"],
    imgC: 0,
    fillQ: "Cabinet du Dr _________.",
    fill: "Roux",
    vfQ: "Dr Roux.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_14 = `De : Centre médical Nord
Objet : Changement d'horaires

Bonjour,

À partir du 1er septembre, nous ouvrons à 7 h 30 (au lieu de 8 h).
Fermeture inchangée : 18 h.
Le secrétariat répond au téléphone de 7 h 30 à 17 h.
Merci de votre compréhension.

Direction`;

const E5_1_CE_EMAIL_POOL_14 = buildExpressPool("e5-1-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "À partir de quand ?",
    text: ["1er septembre","1er janvier","1er juillet"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "À partir du 1er _________.",
    fill: "septembre",
    vfQ: "1er septembre.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Nouvelle heure d'ouverture ?",
    text: ["7 h 30","8 h","9 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ouverture à 7 h _________.",
    fill: "30",
    vfQ: "7 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Ancienne ouverture ?",
    text: ["8 h","7 h","6 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Au lieu de _________ h.",
    fill: "8",
    fillA: ["huit"],
    vfQ: "Avant 8 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure de fermeture ?",
    text: ["18 h","12 h","22 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Fermeture : _________ h.",
    fill: "18",
    fillA: ["dix-huit"],
    vfQ: "18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Téléphone secrétariat jusqu'à ?",
    text: ["17 h","20 h","6 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Téléphone de 7 h 30 à _________ h.",
    fill: "17",
    fillA: ["dix-sept"],
    vfQ: "Jusqu'à 17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Changement d'horaires","Nouveau médecin","Restaurant"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Changement d'_________.",
    fill: "horaires",
    vfQ: "Changement horaires.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "La fermeture change-t-elle ?",
    text: ["Non, inchangée","Oui, plus tôt","Oui, plus tard"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Fermeture _________ : 18 h.",
    fill: "inchangée",
    fillA: ["inchangee"],
    vfQ: "Fermeture inchangée.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_15 = `De : Infirmerie, École des Cerisiers
Objet : Votre enfant a de la fièvre

Bonjour M. et Mme Keller,

Votre fils Lucas a de la fièvre à l'école (38,5 °C).
Merci de venir le chercher dès que possible.
Il attend à l'infirmerie avec Mme Rossi.
En cas d'impossibilité, appelez le 079 123 45 67.

Mme Rossi, infirmière`;

const E5_1_CE_EMAIL_POOL_15 = buildExpressPool("e5-1-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel enfant ?",
    text: ["Lucas Keller","Marie Dupont","Paul Martin"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Votre fils _________.",
    fill: "Lucas",
    vfQ: "Lucas Keller.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel problème ?",
    text: ["Fièvre 38,5 °C","Mal de dent","Faim"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "A de la _________.",
    fill: "fièvre",
    fillA: ["fievre"],
    vfQ: "Fièvre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Que doivent faire les parents ?",
    text: ["Venir le chercher","Attendre demain","Envoyer un SMS au 144"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Venez le _________ dès que possible.",
    fill: "chercher",
    vfQ: "Venir chercher.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où attend Lucas ?",
    text: ["À l'infirmerie","Dans la rue","À la gare"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Il attend à l'_________.",
    fill: "infirmerie",
    vfQ: "À l'infirmerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui reste avec lui ?",
    text: ["Mme Rossi","Dr Martin","Le cuisinier"],
    textC: 0,
    img: ["infirmier","médecin","cuisinier"],
    imgC: 0,
    fillQ: "Avec Mme _________.",
    fill: "Rossi",
    vfQ: "Mme Rossi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Numéro si impossible de venir ?",
    text: ["079 123 45 67","144","117"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appelez le 079 123 45 _________.",
    fill: "67",
    vfQ: "079 123 45 67.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui écrit ?",
    text: ["Mme Rossi, infirmière","Le directeur","Lucas"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Mme Rossi, _________.",
    fill: "infirmière",
    fillA: ["infirmiere"],
    vfQ: "L'infirmière.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_16 = `De : Cabinet du Dr Vincent
Objet : Urgence — consultez aux urgences

Bonjour Mme Lefebvre,

D'après vos symptômes décrits par téléphone, allez aux urgences de l'hôpital aujourd'hui.
Ne attendez pas un rendez-vous au cabinet.
Apportez votre carte d'assurance et la liste de vos médicaments.
Le Dr Vincent`;

const E5_1_CE_EMAIL_POOL_16 = buildExpressPool("e5-1-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Où aller ?",
    text: ["Aux urgences de l'hôpital","Au cabinet","À la pharmacie"],
    textC: 0,
    img: ["hôpital","pharmacie","école"],
    imgC: 0,
    fillQ: "Allez aux urgences de l'_________.",
    fill: "hôpital",
    fillA: ["hopital"],
    vfQ: "Aux urgences.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand ?",
    text: ["Aujourd'hui","Dans un mois","Jamais"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Allez aux urgences _________.",
    fill: "aujourd'hui",
    vfQ: "Aujourd'hui.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Faut-il attendre un RDV cabinet ?",
    text: ["Non","Oui","Oui, 2 semaines"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "N'_________ pas un rendez-vous au cabinet.",
    fill: "attendez",
    vfQ: "Ne pas attendre RDV cabinet.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que faut-il apporter ?",
    text: ["Carte d'assurance et liste médicaments","Un chat","Des fleurs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Carte d'assurance et liste de vos _________.",
    fill: "médicaments",
    fillA: ["medicaments"],
    vfQ: "Carte et liste médicaments.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Pour qui ?",
    text: ["Mme Lefebvre","Dr Vincent","M. Weber"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Bonjour Mme _________.",
    fill: "Lefebvre",
    vfQ: "Mme Lefebvre.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment le médecin connaît les symptômes ?",
    text: ["Par téléphone","Par e-mail seulement","Par hasard"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Décrits par _________.",
    fill: "téléphone",
    fillA: ["telephone"],
    vfQ: "Par téléphone.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Gravité de la situation ?",
    text: ["Urgence","Simple rhume","Rien"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ — consultez aux urgences.",
    fill: "Urgence",
    vfQ: "C'est une urgence.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_17 = `De : Cabinet du Dr Bertrand
Objet : Votre certificat médical est prêt

Bonjour,

Votre certificat médical est disponible au secrétariat.
Vous pouvez le retirer du lundi au vendredi, 8 h–17 h.
Pensez à apporter une pièce d'identité.
Le certificat est valable 7 jours à partir d'aujourd'hui.

Le secrétariat`;

const E5_1_CE_EMAIL_POOL_17 = buildExpressPool("e5-1-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Qu'est-ce qui est prêt ?",
    text: ["Certificat médical","Billet de train","Gâteau"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Votre certificat _________.",
    fill: "médical",
    fillA: ["medical"],
    vfQ: "Certificat médical.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où le retirer ?",
    text: ["Au secrétariat","À la plage","À la gare"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Disponible au _________.",
    fill: "secrétariat",
    fillA: ["secretariat"],
    vfQ: "Au secrétariat.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels jours ?",
    text: ["Lundi au vendredi","Samedi et dimanche","Tous les jours 24 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Du lundi au _________.",
    fill: "vendredi",
    vfQ: "En semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Horaires retrait ?",
    text: ["8 h–17 h","20 h–23 h","Minuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "8 h à _________ h.",
    fill: "17",
    fillA: ["dix-sept"],
    vfQ: "8 h–17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que faut-il apporter ?",
    text: ["Pièce d'identité","Chien","Vélo"],
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
    textQ: "Validité du certificat ?",
    text: ["7 jours","7 mois","7 ans"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Valable _________ jours.",
    fill: "7",
    fillA: ["sept"],
    vfQ: "7 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel cabinet ?",
    text: ["Dr Bertrand","Dr Garcia","Pharmacie du Lac"],
    textC: 0,
    img: ["médecin","pharmacien","dentiste"],
    imgC: 0,
    fillQ: "Cabinet du Dr _________.",
    fill: "Bertrand",
    vfQ: "Dr Bertrand.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_18 = `De : SantéConnect
Objet : Questionnaire santé à remplir

Bonjour,

Avant votre première visite, remplissez le questionnaire en ligne.
Lien : https://santeconnect.ch/form-442
Durée : environ 10 minutes.
Répondez sur vos antécédents, allergies et médicaments.
Merci de le faire 48 h avant le rendez-vous.

SantéConnect`;

const E5_1_CE_EMAIL_POOL_18 = buildExpressPool("e5-1-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quand remplir le questionnaire ?",
    text: ["Avant la première visite","Après 5 ans","Jamais"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Avant votre première _________.",
    fill: "visite",
    vfQ: "Avant première visite.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de temps ?",
    text: ["10 minutes","10 heures","10 jours"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Environ _________ minutes.",
    fill: "10",
    fillA: ["dix"],
    vfQ: "10 minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Sur quoi répondre ?",
    text: ["Antécédents, allergies, médicaments","Football","Cuisine"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Allergies et _________.",
    fill: "médicaments",
    fillA: ["medicaments"],
    vfQ: "Antécédents et médicaments.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Délai avant RDV ?",
    text: ["48 h avant","1 h après","1 an avant"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ h avant le rendez-vous.",
    fill: "48",
    fillA: ["quarante-huit"],
    vfQ: "48 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où remplir ?",
    text: ["En ligne","Dans la rue","Au cinéma"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Questionnaire en _________.",
    fill: "ligne",
    vfQ: "En ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui envoie ?",
    text: ["SantéConnect","La poste","Le restaurant"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________, SantéConnect.",
    fill: "Bonjour",
    vfQ: "SantéConnect.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Objet de l'e-mail ?",
    text: ["Questionnaire santé","Facture","Vacances"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Questionnaire _________ à remplir.",
    fill: "santé",
    fillA: ["sante"],
    vfQ: "Questionnaire santé.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_19 = `De : Laboratoire BioCheck
Objet : Rappel — jeûne avant prise de sang

Bonjour M. Patel,

Votre prise de sang est demain à 7 h 15.
Jeûne de 12 heures : ne mangez rien après 19 h 15 ce soir.
L'eau plate est autorisée.
Lieu : BioCheck, rue du Simplon 3, rez-de-chaussée.
Apportez votre ordonnance.

BioCheck`;

const E5_1_CE_EMAIL_POOL_19 = buildExpressPool("e5-1-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quand est la prise de sang ?",
    text: ["Demain à 7 h 15","Dans un mois","Hier"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Demain à 7 h _________.",
    fill: "15",
    vfQ: "Demain 7 h 15.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Durée du jeûne ?",
    text: ["12 heures","2 heures","48 heures"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Jeûne de _________ heures.",
    fill: "12",
    fillA: ["douze"],
    vfQ: "12 h de jeûne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Ne pas manger après quelle heure ?",
    text: ["19 h 15","7 h 15","12 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rien après 19 h _________.",
    fill: "15",
    vfQ: "Après 19 h 15.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Peut-on boire de l'eau ?",
    text: ["Oui, eau plate","Non","Oui, du café"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "L'eau _________ est autorisée.",
    fill: "plate",
    vfQ: "Eau plate OK.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où aller ?",
    text: ["BioCheck, rue du Simplon 3","Gare","Plage"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rue du Simplon _________.",
    fill: "3",
    vfQ: "Rue du Simplon 3.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il apporter ?",
    text: ["Ordonnance","Chien","Télévision"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Apportez votre _________.",
    fill: "ordonnance",
    vfQ: "Ordonnance.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Pour qui ?",
    text: ["M. Patel","Mme Rossi","Dr Martin"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Bonjour M. _________.",
    fill: "Patel",
    vfQ: "M. Patel.",
    vfC: 0,
  }),
]);

const E5_1_CE_EMAIL_TEXT_20 = `De : Cabinet du Dr Mercier
Objet : Bienvenue — nouveau patient

Bonjour Mme Aydin,

Bienvenue dans notre cabinet ! Votre dossier est créé.
Premier rendez-vous : mercredi 22 mai à 14 h.
Adresse : boulevard de la Gare 17, 2e étage.
Apportez carte d'assurance, pièce d'identité et liste des médicaments.
À mercredi,
Le secrétariat`;

const E5_1_CE_EMAIL_POOL_20 = buildExpressPool("e5-1-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Pour qui ?",
    text: ["Mme Aydin","Dr Mercier","M. Costa"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Bonjour Mme _________.",
    fill: "Aydin",
    vfQ: "Mme Aydin.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Premier RDV quand ?",
    text: ["Mercredi 22 mai à 14 h","Lundi 1er janvier","Samedi minuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Mercredi 22 mai à _________ h.",
    fill: "14",
    fillA: ["quatorze"],
    vfQ: "Mercredi 22 mai 14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Adresse ?",
    text: ["Boulevard de la Gare 17","Rue du Lac 1","Aéroport"],
    textC: 0,
    img: ["gare","aéroport","pharmacie"],
    imgC: 0,
    fillQ: "Boulevard de la Gare _________.",
    fill: "17",
    vfQ: "Bd de la Gare 17.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Étage ?",
    text: ["2e étage","Rez-de-chaussée","Sous-sol"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Au _________ étage.",
    fill: "2e",
    fillA: ["2","deuxième"],
    vfQ: "2e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que faut-il apporter ?",
    text: ["Carte assurance, identité, liste médicaments","Rien","Un vélo"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Carte d'assurance et pièce d'_________.",
    fill: "identité",
    fillA: ["identite"],
    vfQ: "Carte, identité, médicaments.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le dossier est-il créé ?",
    text: ["Oui","Non","En attente"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Votre dossier est _________.",
    fill: "créé",
    fillA: ["cree"],
    vfQ: "Dossier créé.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Type de message ?",
    text: ["Bienvenue nouveau patient","Facture","Annulation"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ — nouveau patient.",
    fill: "Bienvenue",
    vfQ: "Bienvenue.",
    vfC: 0,
  }),
]);

export const E5_1_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
    id: "e5-1-ce-email-1",
    readingText: E5_1_CE_EMAIL_TEXT_1,
    questionPool: E5_1_CE_EMAIL_POOL_1,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-2",
    readingText: E5_1_CE_EMAIL_TEXT_2,
    questionPool: E5_1_CE_EMAIL_POOL_2,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-3",
    readingText: E5_1_CE_EMAIL_TEXT_3,
    questionPool: E5_1_CE_EMAIL_POOL_3,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-4",
    readingText: E5_1_CE_EMAIL_TEXT_4,
    questionPool: E5_1_CE_EMAIL_POOL_4,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-5",
    readingText: E5_1_CE_EMAIL_TEXT_5,
    questionPool: E5_1_CE_EMAIL_POOL_5,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-6",
    readingText: E5_1_CE_EMAIL_TEXT_6,
    questionPool: E5_1_CE_EMAIL_POOL_6,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-7",
    readingText: E5_1_CE_EMAIL_TEXT_7,
    questionPool: E5_1_CE_EMAIL_POOL_7,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-8",
    readingText: E5_1_CE_EMAIL_TEXT_8,
    questionPool: E5_1_CE_EMAIL_POOL_8,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-9",
    readingText: E5_1_CE_EMAIL_TEXT_9,
    questionPool: E5_1_CE_EMAIL_POOL_9,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-10",
    readingText: E5_1_CE_EMAIL_TEXT_10,
    questionPool: E5_1_CE_EMAIL_POOL_10,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-11",
    readingText: E5_1_CE_EMAIL_TEXT_11,
    questionPool: E5_1_CE_EMAIL_POOL_11,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-12",
    readingText: E5_1_CE_EMAIL_TEXT_12,
    questionPool: E5_1_CE_EMAIL_POOL_12,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-13",
    readingText: E5_1_CE_EMAIL_TEXT_13,
    questionPool: E5_1_CE_EMAIL_POOL_13,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-14",
    readingText: E5_1_CE_EMAIL_TEXT_14,
    questionPool: E5_1_CE_EMAIL_POOL_14,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-15",
    readingText: E5_1_CE_EMAIL_TEXT_15,
    questionPool: E5_1_CE_EMAIL_POOL_15,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-16",
    readingText: E5_1_CE_EMAIL_TEXT_16,
    questionPool: E5_1_CE_EMAIL_POOL_16,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-17",
    readingText: E5_1_CE_EMAIL_TEXT_17,
    questionPool: E5_1_CE_EMAIL_POOL_17,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-18",
    readingText: E5_1_CE_EMAIL_TEXT_18,
    questionPool: E5_1_CE_EMAIL_POOL_18,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-19",
    readingText: E5_1_CE_EMAIL_TEXT_19,
    questionPool: E5_1_CE_EMAIL_POOL_19,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-1-ce-email-20",
    readingText: E5_1_CE_EMAIL_TEXT_20,
    questionPool: E5_1_CE_EMAIL_POOL_20,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
];

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
  {
    id: "e5-1-pee-11",
    title: "Question sur les horaires",
    situation: "Le cabinet demande vos disponibilités.",
    sourceMessage: {
      from: "Secrétariat",
      subject: "Vos disponibilités",
      body: "Bonjour,\nPour votre rendez-vous, quels jours vous conviennent ?\nLe secrétariat",
    },
    instruction: "Répondez : donnez deux créneaux possibles et posez une question.",
    points: ["Deux créneaux", "Une question", "Formule de politesse"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-1-pee-12",
    title: "Remercier le médecin",
    situation: "Le médecin vous a aidé.",
    sourceMessage: {
      from: "Dr Martin",
      subject: "Suivi",
      body: "Bonjour,\nComment allez-vous après le traitement ?\nDr Martin",
    },
    instruction: "Remerciez-le et dites que vous allez mieux.",
    points: ["Remerciement", "Votre état de santé", "Au revoir"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-1-pee-13",
    title: "Demander une ordonnance",
    situation: "Vous avez besoin d'un renouvellement.",
    sourceMessage: {
      from: "Dr Leroy",
      subject: "Ordonnance",
      body: "Bonjour,\nAvez-vous encore besoin de vos comprimés ?\nDr Leroy",
    },
    instruction: "Expliquez pourquoi et demandez une ordonnance.",
    points: ["Le médicament", "Pourquoi", "La demande"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-1-pee-14",
    title: "Prévenir d'un retard",
    situation: "Vous serez en retard.",
    sourceMessage: {
      from: "Secrétariat",
      subject: "Rendez-vous",
      body: "Bonjour,\nVotre rendez-vous est à 14 h aujourd'hui.\nLe secrétariat",
    },
    instruction: "Excusez-vous et dites à quelle heure vous arrivez.",
    points: ["L'excuse", "L'heure", "Politesse"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-1-pee-15",
    title: "Conseil à un parent",
    situation: "Un parent demande conseil.",
    sourceMessage: {
      from: "Sofia",
      subject: "Mon fils tousse",
      body: "Bonjour,\nMon fils tousse depuis trois jours. Que faire ?\nSofia",
    },
    instruction: "Donnez deux conseils pour un enfant malade.",
    points: ["Conseil 1", "Conseil 2", "Quand consulter"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-1-pee-16",
    title: "Confirmer une annulation",
    situation: "Vous annulez votre rendez-vous.",
    sourceMessage: {
      from: "Secrétariat",
      subject: "Annulation",
      body: "Bonjour,\nConfirmez-vous l'annulation de demain ?\nLe secrétariat",
    },
    instruction: "Confirmez l'annulation et demandez un nouveau rendez-vous.",
    points: ["L'annulation", "La raison", "Nouveau RDV"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-1-pee-17",
    title: "Question sur un vaccin",
    situation: "Le cabinet propose un vaccin.",
    sourceMessage: {
      from: "Dr Blanc",
      subject: "Vaccin grippe",
      body: "Bonjour,\nVoulez-vous le vaccin contre la grippe ?\nDr Blanc",
    },
    instruction: "Posez trois questions sur le vaccin.",
    points: ["Question 1", "Question 2", "Question 3"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-1-pee-18",
    title: "Informer son employeur",
    situation: "Votre chef demande des nouvelles.",
    sourceMessage: {
      from: "M. Favre",
      subject: "Absence",
      body: "Bonjour,\nQuand revenez-vous au travail ?\nM. Favre",
    },
    instruction: "Dites que vous êtes malade et quand vous revenez.",
    points: ["Votre maladie", "Le médecin", "Date de retour"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-1-pee-19",
    title: "Aider un ami",
    situation: "Un ami ne veut pas aller chez le médecin.",
    sourceMessage: {
      from: "Karim",
      subject: "Je n'aime pas les médecins",
      body: "Salut,\nJe déteste aller chez le médecin !\nKarim",
    },
    instruction: "Convainquez-le d'y aller et proposez de l'accompagner.",
    points: ["Pourquoi y aller", "Vos arguments", "Votre proposition"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-1-pee-20",
    title: "Demander des précisions",
    situation: "Le médecin a donné des instructions.",
    sourceMessage: {
      from: "Dr Morel",
      subject: "Votre traitement",
      body: "Bonjour,\nPrenez un comprimé matin et soir.\nDr Morel",
    },
    instruction: "Demandez des précisions sur le traitement.",
    points: ["Ce que vous avez compris", "Vos questions", "Remerciement"],
    minWords: 50,
    maxWords: 120,
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   E5.2 — Aller à la pharmacie
   ════════════════════════════════════════════════════════════════════════════ */

const E5_2_CE_EMAIL_TEXT_1 = `De : Pharmacie du Centre
Objet : Votre commande est prête

Bonjour,

Votre commande est prête. Retirez-la avant 19 h aujourd'hui.
Comptoir 2, entrée rue du Rhône.
Apportez votre carte d'assurance.

Pharmacie du Centre`;

const E5_2_CE_EMAIL_POOL_1 = buildExpressPool("e5-2-ce-email-1", [
  q({
    id: "ce-q1",
    textQ: "Qu'est-ce qui est prêt ?",
    text: ["La commande","Le train","Le gâteau"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Votre _________ est prête.",
    fill: "commande",
    vfQ: "La commande.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Avant quelle heure retirer ?",
    text: ["19 h","8 h","23 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Avant _________ h aujourd'hui.",
    fill: "19",
    vfQ: "Avant 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
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
    id: "ce-q4",
    textQ: "Quelle entrée ?",
    text: ["Rue du Rhône","Rue du Lac","Aéroport"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Entrée rue du _________.",
    fill: "Rhône",
    fillA: ["Rhone"],
    vfQ: "Rue du Rhône.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que faut-il apporter ?",
    text: ["Carte d'assurance","Chat","Vélo"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Carte d'_________.",
    fill: "assurance",
    vfQ: "Carte d'assurance.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui envoie ?",
    text: ["Pharmacie du Centre","Gare","École"],
    textC: 0,
    img: ["pharmacie","gare","école"],
    imgC: 0,
    fillQ: "Pharmacie du _________.",
    fill: "Centre",
    vfQ: "Pharmacie du Centre.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quand retirer ?",
    text: ["Aujourd'hui","Dans un an","Jamais"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Avant 19 h _________.",
    fill: "aujourd'hui",
    vfQ: "Aujourd'hui.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_2 = `De : Pharmacie Santé+
Objet : Médicament indisponible — substitut proposé

Bonjour M. Rossi,

Dolirène 500 mg est en rupture.
Nous proposons ParaGène 500 mg, même effet.
Répondez oui/non à cet e-mail.
Réapprovisionnement Dolirène : 5 jours.

Votre pharmacien`;

const E5_2_CE_EMAIL_POOL_2 = buildExpressPool("e5-2-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel médicament manque ?",
    text: ["Dolirène 500 mg","ParaGène","Aspirine"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ 500 mg est en rupture.",
    fill: "Dolirène",
    fillA: ["Dolirene"],
    vfQ: "Dolirène indisponible.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Substitut proposé ?",
    text: ["ParaGène 500 mg","Dolirène 1000 mg","Rien"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Nous proposons _________ 500 mg.",
    fill: "ParaGène",
    fillA: ["ParaGene"],
    vfQ: "ParaGène proposé.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Comment répondre ?",
    text: ["Oui/non par e-mail","Par lettre","En personne seulement"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Répondez oui/non à cet _________.",
    fill: "e-mail",
    fillA: ["email"],
    vfQ: "Répondre par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Délai réapprovisionnement ?",
    text: ["5 jours","5 heures","5 mois"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Réapprovisionnement : _________ jours.",
    fill: "5",
    vfQ: "5 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Pour qui ?",
    text: ["M. Rossi","Mme Keller","Dr Martin"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Bonjour M. _________.",
    fill: "Rossi",
    vfQ: "M. Rossi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le substitut a-t-il le même effet ?",
    text: ["Oui","Non","On ne sait pas"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Même _________.",
    fill: "effet",
    vfQ: "Même effet.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui signe ?",
    text: ["Votre pharmacien","Le facteur","Le cuisinier"],
    textC: 0,
    img: ["pharmacien","facteur","cuisinier"],
    imgC: 0,
    fillQ: "Votre _________.",
    fill: "pharmacien",
    vfQ: "Le pharmacien.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_3 = `De : Pharmacie du Lac
Objet : Rappel — renouvellement ordonnance

Bonjour,

Votre ordonnance pour Insuline Lente expire le 30 avril.
Contactez votre médecin pour un renouvellement.
Nous pouvons vous délivrer un appointement d'urgence de 7 jours si besoin.
Appelez le 021 444 55 66.

Pharmacie du Lac`;

const E5_2_CE_EMAIL_POOL_3 = buildExpressPool("e5-2-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel médicament ?",
    text: ["Insuline Lente","Dolirène","Shampoing"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ordonnance pour _________ Lente.",
    fill: "Insuline",
    vfQ: "Insuline Lente.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Expiration ?",
    text: ["30 avril","30 mars","30 juin"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Expire le 30 _________.",
    fill: "avril",
    vfQ: "30 avril.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Que faire ?",
    text: ["Contacter le médecin","Arrêter le traitement","Aller au cinéma"],
    textC: 0,
    img: ["médecin","pharmacien","serveur"],
    imgC: 0,
    fillQ: "Contactez votre _________.",
    fill: "médecin",
    fillA: ["medecin"],
    vfQ: "Voir le médecin.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Appointement d'urgence possible ?",
    text: ["7 jours","7 mois","Non"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appointement d'urgence de _________ jours.",
    fill: "7",
    fillA: ["sept"],
    vfQ: "7 jours d'appointement.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Téléphone ?",
    text: ["021 444 55 66","144","1818"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Appelez le 021 444 55 _________.",
    fill: "66",
    vfQ: "021 444 55 66.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Objet ?",
    text: ["Renouvellement ordonnance","Vacances","Bus"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rappel — renouvellement _________.",
    fill: "ordonnance",
    vfQ: "Renouvellement ordonnance.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui envoie ?",
    text: ["Pharmacie du Lac","Hôpital","Gare"],
    textC: 0,
    img: ["pharmacie","hôpital","gare"],
    imgC: 0,
    fillQ: "Pharmacie du _________.",
    fill: "Lac",
    vfQ: "Pharmacie du Lac.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_4 = `De : Pharmacie Bien-Être
Objet : Promotions de mars

Bonjour,

-30 % sur shampoings jusqu'au 31 mars.
2+1 sur crèmes solaires.
Offre valable en magasin seulement.
Carte fidélité : points doublés ce week-end.

À bientôt !`;

const E5_2_CE_EMAIL_POOL_4 = buildExpressPool("e5-2-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Réduction shampoings ?",
    text: ["-30 %","-3 %","-90 %"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "-_________ % sur shampoings.",
    fill: "30",
    vfQ: "-30 %.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Jusqu'à quand ?",
    text: ["31 mars","31 décembre","31 janvier"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Jusqu'au 31 _________.",
    fill: "mars",
    vfQ: "31 mars.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Offre crèmes solaires ?",
    text: ["2+1","Gratuit","Rien"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ sur crèmes solaires.",
    fill: "2+1",
    vfQ: "2+1 crèmes solaires.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où valable ?",
    text: ["En magasin seulement","Internet seulement","Partout"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Valable en _________ seulement.",
    fill: "magasin",
    vfQ: "Magasin seulement.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Carte fidélité ce week-end ?",
    text: ["Points doublés","Points supprimés","Rien"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Points _________ ce week-end.",
    fill: "doublés",
    fillA: ["doubles"],
    vfQ: "Points doublés.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Mois des promos ?",
    text: ["Mars","Juillet","Décembre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Promotions de _________.",
    fill: "mars",
    vfQ: "Mars.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui envoie ?",
    text: ["Pharmacie Bien-Être","Restaurant","Bus"],
    textC: 0,
    img: ["pharmacie","restaurant","bus"],
    imgC: 0,
    fillQ: "Pharmacie Bien-_________.",
    fill: "Être",
    fillA: ["Etre"],
    vfQ: "Pharmacie Bien-Être.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_5 = `De : Pharmacie du Parc
Objet : Livraison confirmée

Bonjour Mme Dubois,

Votre livraison est prévue demain entre 14 h et 16 h.
Adresse : rue des Fleurs 8, 3e étage.
Montant : 42 francs + 5 francs livraison.
Paiement à la livraison : carte ou espèces.

Pharmacie du Parc`;

const E5_2_CE_EMAIL_POOL_5 = buildExpressPool("e5-2-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quand livraison ?",
    text: ["Demain 14 h–16 h","Dans un mois","Hier"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Demain entre 14 h et _________ h.",
    fill: "16",
    vfQ: "Demain 14–16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Adresse ?",
    text: ["Rue des Fleurs 8","Rue du Lac 1","Gare"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rue des Fleurs _________.",
    fill: "8",
    vfQ: "Rue des Fleurs 8.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Montant produits ?",
    text: ["42 francs","5 francs","100 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Montant : _________ francs.",
    fill: "42",
    vfQ: "42 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Frais livraison ?",
    text: ["5 francs","42 francs","Gratuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "+ _________ francs livraison.",
    fill: "5",
    vfQ: "5 francs livraison.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Paiement comment ?",
    text: ["Carte ou espèces","Chèque seulement","Points"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Carte ou _________.",
    fill: "espèces",
    fillA: ["especes"],
    vfQ: "Carte ou espèces.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour qui ?",
    text: ["Mme Dubois","M. Rossi","Dr Martin"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Bonjour Mme _________.",
    fill: "Dubois",
    vfQ: "Mme Dubois.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Étage ?",
    text: ["3e étage","Rez-de-chaussée","Sous-sol"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Au _________ étage.",
    fill: "3e",
    fillA: ["3"],
    vfQ: "3e étage.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_6 = `De : Pharmacie Centrale
Objet : Vaccination grippe disponible

Bonjour,

Vaccination grippe sans rendez-vous.
Lundi–vendredi 9 h–17 h.
35 francs, remboursé en partie.
Apportez carte d'assurance.

Pharmacie Centrale`;

const E5_2_CE_EMAIL_POOL_6 = buildExpressPool("e5-2-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quelle vaccination ?",
    text: ["Grippe","Pluie","Foot"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Vaccination _________.",
    fill: "grippe",
    vfQ: "Grippe.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Rendez-vous ?",
    text: ["Sans rendez-vous","Obligatoire","Par lettre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Sans _________.",
    fill: "rendez-vous",
    fillA: ["rendez vous"],
    vfQ: "Sans RDV.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Horaires ?",
    text: ["Lun–ven 9 h–17 h","Dimanche","Nuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "9 h à _________ h.",
    fill: "17",
    vfQ: "9–17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Prix ?",
    text: ["35 francs","350 francs","Gratuit"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ francs.",
    fill: "35",
    vfQ: "35 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Remboursement ?",
    text: ["En partie","Non","Tout"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Remboursé en _________.",
    fill: "partie",
    vfQ: "En partie.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À apporter ?",
    text: ["Carte d'assurance","Skis","Livre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Carte d'_________.",
    fill: "assurance",
    vfQ: "Carte d'assurance.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Où ?",
    text: ["Pharmacie Centrale","Gare","Plage"],
    textC: 0,
    img: ["pharmacie","gare","hôpital"],
    imgC: 0,
    fillQ: "Pharmacie _________.",
    fill: "Centrale",
    vfQ: "Pharmacie Centrale.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_7 = `De : PharmaRappel
Objet : Rappel — prendre votre médicament

Bonjour,

Rappel : CardioPlus, 1 comprimé, ce soir à 20 h.
Programme de rappel gratuit PharmaRappel.
Pour désactiver : répondez STOP.

PharmaRappel`;

const E5_2_CE_EMAIL_POOL_7 = buildExpressPool("e5-2-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel médicament ?",
    text: ["CardioPlus","Dolirène","Shampoing"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________, 1 comprimé.",
    fill: "CardioPlus",
    vfQ: "CardioPlus.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle dose ?",
    text: ["1 comprimé","10 comprimés","1 litre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "1 _________.",
    fill: "comprimé",
    fillA: ["comprime"],
    vfQ: "1 comprimé.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle heure ?",
    text: ["20 h","8 h","14 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ce soir à _________ h.",
    fill: "20",
    vfQ: "20 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Service payant ?",
    text: ["Non, gratuit","Oui, 50 francs","Oui, 10 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Programme _________ PharmaRappel.",
    fill: "gratuit",
    vfQ: "Gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment désactiver ?",
    text: ["Répondre STOP","Appeler 144","Rien"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Répondez _________.",
    fill: "STOP",
    vfQ: "Répondre STOP.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand prendre ?",
    text: ["Ce soir","Dans un an","Hier"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ce _________.",
    fill: "soir",
    vfQ: "Ce soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Type de message ?",
    text: ["Rappel médicament","Facture","Vacances"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rappel — prendre votre _________.",
    fill: "médicament",
    fillA: ["medicament"],
    vfQ: "Rappel médicament.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_8 = `De : Pharmacie des Alpes
Objet : Facture de votre achat

Bonjour,

Facture du 6 mars : 28,50 francs.
Produits : pansements, sirop toux.
Part assurance déduite : 22 francs.
Reste à payer : 6,50 francs.
Merci de votre visite.

Pharmacie des Alpes`;

const E5_2_CE_EMAIL_POOL_8 = buildExpressPool("e5-2-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Date achat ?",
    text: ["6 mars","6 mai","16 mars"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Facture du 6 _________.",
    fill: "mars",
    vfQ: "6 mars.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Montant total ?",
    text: ["28,50 francs","6,50 francs","100 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ francs.",
    fill: "28,50",
    fillA: ["28.50"],
    vfQ: "28,50 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Produits achetés ?",
    text: ["Pansements et sirop toux","Voiture","Billet train"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pansements, sirop _________.",
    fill: "toux",
    vfQ: "Pansements et sirop.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Part assurance ?",
    text: ["22 francs","28 francs","0 franc"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Part assurance : _________ francs.",
    fill: "22",
    vfQ: "22 francs assurance.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Reste à payer ?",
    text: ["6,50 francs","22 francs","50 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Reste : _________ francs.",
    fill: "6,50",
    fillA: ["6.50"],
    vfQ: "6,50 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Type de document ?",
    text: ["Facture","Menu","Horaires bus"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ de votre achat.",
    fill: "Facture",
    vfQ: "Facture.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui envoie ?",
    text: ["Pharmacie des Alpes","Restaurant","École"],
    textC: 0,
    img: ["pharmacie","restaurant","école"],
    imgC: 0,
    fillQ: "Pharmacie des _________.",
    fill: "Alpes",
    vfQ: "Pharmacie des Alpes.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_9 = `De : Pharmacie du Centre
Objet : Attention — interaction médicaments

Bonjour M. Keller,

Votre nouvelle ordonnance peut interagir avec CardioPlus.
Ne prenez pas les deux sans avis du pharmacien.
Passez au comptoir ou appelez le 021 333 22 11.

Votre pharmacien`;

const E5_2_CE_EMAIL_POOL_9 = buildExpressPool("e5-2-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel risque ?",
    text: ["Interaction médicaments","Allergie au soleil","Panne bus"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Peut _________ avec CardioPlus.",
    fill: "interagir",
    vfQ: "Interaction.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que ne pas faire ?",
    text: ["Prendre les deux sans avis","Boire de l'eau","Dormir"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ne prenez pas les deux sans _______.",
    fill: "avis",
    vfQ: "Sans avis pharmacien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Que faire ?",
    text: ["Passer au comptoir ou appeler","Ignorer","Doubler la dose"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Passez au _________ ou appelez.",
    fill: "comptoir",
    vfQ: "Comptoir ou téléphone.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Téléphone ?",
    text: ["021 333 22 11","144","1818"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "021 333 22 _________.",
    fill: "11",
    vfQ: "021 333 22 11.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Pour qui ?",
    text: ["M. Keller","Mme Dubois","Dr Martin"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Bonjour M. _________.",
    fill: "Keller",
    vfQ: "M. Keller.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Médicament existant ?",
    text: ["CardioPlus","Dolirène","Shampoing"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Avec _________.",
    fill: "CardioPlus",
    vfQ: "CardioPlus.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui signe ?",
    text: ["Votre pharmacien","Le facteur","Le médecin"],
    textC: 0,
    img: ["pharmacien","facteur","médecin"],
    imgC: 0,
    fillQ: "Votre _________.",
    fill: "pharmacien",
    vfQ: "Pharmacien.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_10 = `De : Pharmacie Santé+
Objet : Carte fidélité activée

Bonjour,

Votre carte fidélité est active.
Numéro : 8844221.
100 points = bon de 5 francs.
20 points offerts aujourd'hui.

Pharmacie Santé+`;

const E5_2_CE_EMAIL_POOL_10 = buildExpressPool("e5-2-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Statut carte ?",
    text: ["Active","Expirée","Bloquée"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Carte fidélité est _________.",
    fill: "active",
    vfQ: "Active.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Numéro carte ?",
    text: ["8844221","144","1818"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Numéro : _________.",
    fill: "8844221",
    vfQ: "8844221.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Points pour 5 francs ?",
    text: ["100 points","10 points","1000 points"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ points = 5 francs.",
    fill: "100",
    vfQ: "100 points.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Points offerts aujourd'hui ?",
    text: ["20 points","200 points","0"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ points offerts.",
    fill: "20",
    vfQ: "20 points.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Objet ?",
    text: ["Carte fidélité activée","Facture","Bus"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Carte fidélité _________.",
    fill: "activée",
    fillA: ["activee"],
    vfQ: "Carte activée.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui envoie ?",
    text: ["Pharmacie Santé+","Gare","Hôtel"],
    textC: 0,
    img: ["pharmacie","gare","hôtel"],
    imgC: 0,
    fillQ: "Pharmacie Santé_________.",
    fill: "+",
    vfQ: "Pharmacie Santé+.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "La carte est-elle nouvelle ?",
    text: ["Oui, activée","Non, supprimée","On ne sait pas"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Votre carte fidélité est _________.",
    fill: "active",
    vfQ: "Nouvelle carte active.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_11 = `De : Pharmacie du Lac
Objet : Ordonnance reçue par fax

Bonjour,

Nous avons reçu l'ordonnance de votre médecin par fax.
Votre médicament sera prêt demain à 10 h.
Retrait comptoir 1.
Apportez carte d'assurance.

Pharmacie du Lac`;

const E5_2_CE_EMAIL_POOL_11 = buildExpressPool("e5-2-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Comment reçue l'ordonnance ?",
    text: ["Par fax","Par pigeon","Par bus"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Reçue par _________.",
    fill: "fax",
    vfQ: "Par fax.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand prêt ?",
    text: ["Demain 10 h","Dans un mois","Hier"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Prêt demain à _________ h.",
    fill: "10",
    vfQ: "Demain 10 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel comptoir ?",
    text: ["Comptoir 1","Comptoir 5","Dehors"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Comptoir _________.",
    fill: "1",
    vfQ: "Comptoir 1.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "À apporter ?",
    text: ["Carte d'assurance","Vélo","Chat"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Carte d'_________.",
    fill: "assurance",
    vfQ: "Carte d'assurance.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De qui l'ordonnance ?",
    text: ["Votre médecin","Le boulanger","Le taxi"],
    textC: 0,
    img: ["médecin","boulanger","chauffeur"],
    imgC: 0,
    fillQ: "Ordonnance de votre _________.",
    fill: "médecin",
    fillA: ["medecin"],
    vfQ: "Du médecin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qui sera prêt ?",
    text: ["Le médicament","Le train","Le gâteau"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Votre _________ sera prêt.",
    fill: "médicament",
    fillA: ["medicament"],
    vfQ: "Le médicament.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui envoie ?",
    text: ["Pharmacie du Lac","Gare","École"],
    textC: 0,
    img: ["pharmacie","gare","école"],
    imgC: 0,
    fillQ: "Pharmacie du _________.",
    fill: "Lac",
    vfQ: "Pharmacie du Lac.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_12 = `De : Pharmacie Centrale
Objet : Médicament périmé — rapportez-le

Bonjour,

Ne utilisez pas le lot Dolirène 500 mg lot A882 (périmé 02/2026).
Rapportez-le en pharmacie pour destruction gratuite.
Nous vous remboursons sur présentation du ticket.

Pharmacie Centrale`;

const E5_2_CE_EMAIL_POOL_12 = buildExpressPool("e5-2-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Que ne pas faire ?",
    text: ["Utiliser le lot périmé","Boire de l'eau","Dormir"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ne _________ pas le lot périmé.",
    fill: "utilisez",
    vfQ: "Ne pas utiliser.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel médicament ?",
    text: ["Dolirène 500 mg","CardioPlus","Shampoing"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Lot _________ 500 mg.",
    fill: "Dolirène",
    fillA: ["Dolirene"],
    vfQ: "Dolirène.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Que faire du médicament ?",
    text: ["Rapporter en pharmacie","Jeter aux ordures","Donner aux voisins"],
    textC: 0,
    img: ["pharmacie","hôpital","école"],
    imgC: 0,
    fillQ: "Rapportez-le en _________.",
    fill: "pharmacie",
    vfQ: "Rapporter en pharmacie.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Destruction payante ?",
    text: ["Non, gratuite","Oui, 50 francs","Oui, 10 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Destruction _________.",
    fill: "gratuite",
    vfQ: "Gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Remboursement ?",
    text: ["Sur présentation du ticket","Jamais","En points"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Remboursons sur présentation du _________.",
    fill: "ticket",
    vfQ: "Avec le ticket.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Numéro de lot ?",
    text: ["A882","B999","C000"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Lot _________.",
    fill: "A882",
    vfQ: "Lot A882.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Problème ?",
    text: ["Médicament périmé","Prix trop bas","Trop de clients"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Médicament _________.",
    fill: "périmé",
    fillA: ["perime"],
    vfQ: "Périmé.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_13 = `De : Pharmacie Bien-Être
Objet : Newsletter santé — conseils d'hiver

Bonjour,

5 conseils : laver les mains, boire de l'eau, aérer, masque si toux, demander conseil au pharmacien.
Lire la suite sur notre blog.
Désabonnement : lien en bas de page.

Pharmacie Bien-Être`;

const E5_2_CE_EMAIL_POOL_13 = buildExpressPool("e5-2-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Combien de conseils ?",
    text: ["5","50","1"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ conseils.",
    fill: "5",
    vfQ: "5 conseils.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Un conseil si on tousse ?",
    text: ["Porter un masque","Chanter","Courir"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ si toux.",
    fill: "Masque",
    vfQ: "Masque si toux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Qui consulter pour médicament ?",
    text: ["Pharmacien","Facteur","Pilote"],
    textC: 0,
    img: ["pharmacien","facteur","pilote"],
    imgC: 0,
    fillQ: "Demander conseil au _________.",
    fill: "pharmacien",
    vfQ: "Pharmacien.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où lire la suite ?",
    text: ["Sur le blog","À la gare","Au cinéma"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Sur notre _________.",
    fill: "blog",
    vfQ: "Sur le blog.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment se désabonner ?",
    text: ["Lien en bas de page","Appeler 144","Impossible"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Lien en bas de _________.",
    fill: "page",
    vfQ: "Lien en bas.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Saison ?",
    text: ["Hiver","Été","Printemps"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Conseils d'_________.",
    fill: "hiver",
    vfQ: "Hiver.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Type de message ?",
    text: ["Newsletter santé","Facture","Train"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Newsletter _________.",
    fill: "santé",
    fillA: ["sante"],
    vfQ: "Newsletter.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_14 = `De : Pharmacie des Alpes
Objet : Changement de pharmacien responsable

Bonjour,

M. Weber remplace Mme Keller comme pharmacien responsable à partir du 1er mai.
Même adresse, mêmes horaires.
M. Weber parle français et allemand.

Direction`;

const E5_2_CE_EMAIL_POOL_14 = buildExpressPool("e5-2-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Qui arrive ?",
    text: ["M. Weber","Mme Keller","Dr Martin"],
    textC: 0,
    img: ["pharmacien","médecin","infirmier"],
    imgC: 0,
    fillQ: "M. _________ remplace Mme Keller.",
    fill: "Weber",
    vfQ: "M. Weber.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À partir de quand ?",
    text: ["1er mai","1er janvier","1er juillet"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "À partir du 1er _________.",
    fill: "mai",
    vfQ: "1er mai.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "L'adresse change ?",
    text: ["Non, même adresse","Oui, nouvelle ville","Oui, à la gare"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Même _________.",
    fill: "adresse",
    vfQ: "Même adresse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Langues M. Weber ?",
    text: ["Français et allemand","Latin","Aucune"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Français et _________.",
    fill: "allemand",
    vfQ: "FR et DE.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Poste ?",
    text: ["Pharmacien responsable","Directeur école","Chauffeur"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ responsable.",
    fill: "Pharmacien",
    vfQ: "Pharmacien responsable.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Horaires changent ?",
    text: ["Non, mêmes horaires","Oui, fermé","Oui, 24 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Mêmes _________.",
    fill: "horaires",
    vfQ: "Mêmes horaires.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui part ?",
    text: ["Mme Keller","M. Weber","Personne"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Remplace Mme _________.",
    fill: "Keller",
    vfQ: "Mme Keller remplacée.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_15 = `De : Pharmacie du Parc
Objet : Réservation conseil — confirmée

Bonjour Mme Aydin,

Votre conseil avec la pharmacienne est confirmé.
Mardi 7 mai à 15 h 30, bureau conseil, 1er étage.
Sujet : choix de crème solaire pour enfant.
Durée : 20 minutes. Gratuit.

Pharmacie du Parc`;

const E5_2_CE_EMAIL_POOL_15 = buildExpressPool("e5-2-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Pour qui ?",
    text: ["Mme Aydin","M. Rossi","Dr Martin"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Bonjour Mme _________.",
    fill: "Aydin",
    vfQ: "Mme Aydin.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour ?",
    text: ["Mardi 7 mai","Mercredi 8 juin","Dimanche"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Mardi 7 _________.",
    fill: "mai",
    vfQ: "Mardi 7 mai.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Heure ?",
    text: ["15 h 30","8 h","22 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "À 15 h _________.",
    fill: "30",
    vfQ: "15 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où ?",
    text: ["Bureau conseil, 1er étage","Parking","Plage"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Bureau conseil, _________ étage.",
    fill: "1er",
    fillA: ["1"],
    vfQ: "1er étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Sujet ?",
    text: ["Crème solaire enfant","Voiture","Train"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Crème _________ pour enfant.",
    fill: "solaire",
    vfQ: "Crème solaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Durée ?",
    text: ["20 minutes","3 heures","2 jours"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ minutes.",
    fill: "20",
    vfQ: "20 min.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Payant ?",
    text: ["Non, gratuit","Oui, 50 francs","Oui, 100 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________. Gratuit.",
    fill: "Gratuit",
    vfQ: "Gratuit.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_16 = `De : Pharmacie Centrale
Objet : Résultat test COVID

Bonjour,

Votre test antigénique du 4 avril : négatif.
Vous pouvez retirer le certificat au comptoir 3.
En cas de symptômes, refaites un test ou consultez.

Pharmacie Centrale`;

const E5_2_CE_EMAIL_POOL_16 = buildExpressPool("e5-2-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Résultat ?",
    text: ["Négatif","Positif","Inconnu"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Test : _________.",
    fill: "négatif",
    fillA: ["negatif"],
    vfQ: "Négatif.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Date test ?",
    text: ["4 avril","4 mars","14 avril"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Du 4 _________.",
    fill: "avril",
    vfQ: "4 avril.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où retirer certificat ?",
    text: ["Comptoir 3","Gare","Plage"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Comptoir _________.",
    fill: "3",
    vfQ: "Comptoir 3.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Type de test ?",
    text: ["Antigénique","Sanguin complet","Vue"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Test _________.",
    fill: "antigénique",
    fillA: ["antigenique"],
    vfQ: "Antigénique.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Si symptômes ?",
    text: ["Refaire test ou consulter","Rien","Voyager"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Refaites un test ou _________.",
    fill: "consultez",
    vfQ: "Retester ou consulter.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que peut-on retirer ?",
    text: ["Certificat","Voiture","Billet"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Retirer le _________.",
    fill: "certificat",
    vfQ: "Certificat.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui envoie ?",
    text: ["Pharmacie Centrale","Hôpital","Bus"],
    textC: 0,
    img: ["pharmacie","hôpital","bus"],
    imgC: 0,
    fillQ: "Pharmacie _________.",
    fill: "Centrale",
    vfQ: "Pharmacie Centrale.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_17 = `De : Assurance SantéVie
Objet : Remboursement pharmacie

Bonjour,

Remboursement de votre achat du 15 mars : 18 francs.
Virement sous 10 jours.
Montant total achat : 45 francs. Votre part : 27 francs.

SantéVie`;

const E5_2_CE_EMAIL_POOL_17 = buildExpressPool("e5-2-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Montant remboursé ?",
    text: ["18 francs","45 francs","27 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Remboursement : _________ francs.",
    fill: "18",
    vfQ: "18 francs remboursés.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Date achat ?",
    text: ["15 mars","15 mai","5 mars"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Achat du 15 _________.",
    fill: "mars",
    vfQ: "15 mars.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Délai virement ?",
    text: ["10 jours","10 heures","10 mois"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Sous _________ jours.",
    fill: "10",
    vfQ: "10 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Montant total achat ?",
    text: ["45 francs","18 francs","100 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Total : _________ francs.",
    fill: "45",
    vfQ: "45 francs total.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Part du patient ?",
    text: ["27 francs","18 francs","0 franc"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Votre part : _________ francs.",
    fill: "27",
    vfQ: "27 francs à payer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui envoie ?",
    text: ["SantéVie","Pharmacie","Gare"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________, SantéVie.",
    fill: "Bonjour",
    vfQ: "Assurance SantéVie.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Type achat ?",
    text: ["Pharmacie","Restaurant","Train"],
    textC: 0,
    img: ["pharmacie","restaurant","train"],
    imgC: 0,
    fillQ: "Remboursement _________.",
    fill: "pharmacie",
    vfQ: "Achat pharmacie.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_18 = `De : Pharmacie du Soleil
Objet : Horaires jours fériés

Bonjour,

1er mai : fermé.
Ascension (9 mai) : ouvert 9 h–13 h.
Pentecôte (20 mai) : fermé.
Pharmacie de garde : composez le 1818.

Pharmacie du Soleil`;

const E5_2_CE_EMAIL_POOL_18 = buildExpressPool("e5-2-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "1er mai ?",
    text: ["Fermé","Ouvert 24 h","Ouvert 9–17 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "1er mai : _________.",
    fill: "fermé",
    fillA: ["ferme"],
    vfQ: "Fermé 1er mai.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Ascension horaires ?",
    text: ["9 h–13 h","Fermé","24 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ascension : 9 h à _________ h.",
    fill: "13",
    vfQ: "9–13 h Ascension.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Date Ascension ?",
    text: ["9 mai","1er mai","20 mai"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Ascension (9 _______).",
    fill: "mai",
    vfQ: "9 mai.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Pentecôte ?",
    text: ["20 mai, fermé","Ouvert","9 h–13 h"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Pentecôte (20 mai) : _________.",
    fill: "fermé",
    fillA: ["ferme"],
    vfQ: "Fermé Pentecôte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Garde ?",
    text: ["1818","144","117"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Composez le _________.",
    fill: "1818",
    vfQ: "1818 garde.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Sujet e-mail ?",
    text: ["Horaires fériés","Promo","Bus"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Horaires jours _________.",
    fill: "fériés",
    fillA: ["feries"],
    vfQ: "Horaires fériés.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle pharmacie ?",
    text: ["Pharmacie du Soleil","Du Lac","Centrale"],
    textC: 0,
    img: ["pharmacie","hôpital","gare"],
    imgC: 0,
    fillQ: "Pharmacie du _________.",
    fill: "Soleil",
    vfQ: "Du Soleil.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_19 = `De : Pharmacie Santé+
Objet : Rappel produit — lot retiré

Bonjour,

Le fabricant rappelle le sirop TouxPlus lot T991.
Si vous l'avez acheté chez nous, rapportez-le.
Remboursement intégral sur présentation du ticket.
Substitut disponible : TouxPlus Nouvelle Formule.

Pharmacie Santé+`;

const E5_2_CE_EMAIL_POOL_19 = buildExpressPool("e5-2-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel produit ?",
    text: ["Sirop TouxPlus lot T991","Shampoing","Crème solaire"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Sirop _________ lot T991.",
    fill: "TouxPlus",
    vfQ: "TouxPlus T991.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Qui rappelle ?",
    text: ["Le fabricant","Le client","Le bus"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Le _________ rappelle le lot.",
    fill: "fabricant",
    vfQ: "Fabricant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Que faire si acheté ?",
    text: ["Rapporter","Boire tout","Vendre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________-le.",
    fill: "Rapportez",
    fillA: ["Rapporter"],
    vfQ: "Rapporter.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Remboursement ?",
    text: ["Intégral avec ticket","Aucun","50 %"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Remboursement _________.",
    fill: "intégral",
    fillA: ["integral"],
    vfQ: "Intégral.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Substitut ?",
    text: ["TouxPlus Nouvelle Formule","Rien","Dolirène"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ Nouvelle Formule.",
    fill: "TouxPlus",
    vfQ: "Nouvelle formule.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Condition remboursement ?",
    text: ["Présentation ticket","Rien","Lettre"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Sur présentation du _________.",
    fill: "ticket",
    vfQ: "Avec ticket.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Type message ?",
    text: ["Rappel produit","Vacances","Train"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Rappel _________.",
    fill: "produit",
    vfQ: "Rappel produit.",
    vfC: 0,
  }),
]);

const E5_2_CE_EMAIL_TEXT_20 = `De : Pharmacie des Alpes
Objet : Merci pour votre visite

Bonjour,

Merci pour votre visite du 22 mars.
Votre avis compte : questionnaire de 2 minutes.
Lien : https://pharma-alpes.ch/avis
10 points fidélité offerts si vous répondez.

À bientôt,
Pharmacie des Alpes`;

const E5_2_CE_EMAIL_POOL_20 = buildExpressPool("e5-2-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Date visite ?",
    text: ["22 mars","22 mai","2 mars"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Visite du 22 _________.",
    fill: "mars",
    vfQ: "22 mars.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Durée questionnaire ?",
    text: ["2 minutes","2 heures","2 jours"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ minutes.",
    fill: "2",
    fillA: ["deux"],
    vfQ: "2 minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Points offerts ?",
    text: ["10 points","100 points","0"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ points fidélité.",
    fill: "10",
    vfQ: "10 points.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Condition points ?",
    text: ["Si vous répondez","Sans rien faire","En achetant 1000 francs"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Si vous _________.",
    fill: "répondez",
    fillA: ["repondez"],
    vfQ: "Si réponse.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où répondre ?",
    text: ["Lien en ligne","À la gare","Au téléphone 144"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "Questionnaire en _________.",
    fill: "ligne",
    vfQ: "En ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Ton du message ?",
    text: ["Remerciement","Menace","Facture"],
    textC: 0,
    img: ["","",""],
    imgC: 0,
    fillQ: "_________ pour votre visite.",
    fill: "Merci",
    vfQ: "Merci.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qui envoie ?",
    text: ["Pharmacie des Alpes","Restaurant","Bus"],
    textC: 0,
    img: ["pharmacie","restaurant","bus"],
    imgC: 0,
    fillQ: "Pharmacie des _________.",
    fill: "Alpes",
    vfQ: "Pharmacie des Alpes.",
    vfC: 0,
  }),
]);

export const E5_2_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
    id: "e5-2-ce-email-1",
    readingText: E5_2_CE_EMAIL_TEXT_1,
    questionPool: E5_2_CE_EMAIL_POOL_1,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-2",
    readingText: E5_2_CE_EMAIL_TEXT_2,
    questionPool: E5_2_CE_EMAIL_POOL_2,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-3",
    readingText: E5_2_CE_EMAIL_TEXT_3,
    questionPool: E5_2_CE_EMAIL_POOL_3,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-4",
    readingText: E5_2_CE_EMAIL_TEXT_4,
    questionPool: E5_2_CE_EMAIL_POOL_4,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-5",
    readingText: E5_2_CE_EMAIL_TEXT_5,
    questionPool: E5_2_CE_EMAIL_POOL_5,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-6",
    readingText: E5_2_CE_EMAIL_TEXT_6,
    questionPool: E5_2_CE_EMAIL_POOL_6,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-7",
    readingText: E5_2_CE_EMAIL_TEXT_7,
    questionPool: E5_2_CE_EMAIL_POOL_7,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-8",
    readingText: E5_2_CE_EMAIL_TEXT_8,
    questionPool: E5_2_CE_EMAIL_POOL_8,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-9",
    readingText: E5_2_CE_EMAIL_TEXT_9,
    questionPool: E5_2_CE_EMAIL_POOL_9,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-10",
    readingText: E5_2_CE_EMAIL_TEXT_10,
    questionPool: E5_2_CE_EMAIL_POOL_10,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-11",
    readingText: E5_2_CE_EMAIL_TEXT_11,
    questionPool: E5_2_CE_EMAIL_POOL_11,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-12",
    readingText: E5_2_CE_EMAIL_TEXT_12,
    questionPool: E5_2_CE_EMAIL_POOL_12,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-13",
    readingText: E5_2_CE_EMAIL_TEXT_13,
    questionPool: E5_2_CE_EMAIL_POOL_13,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-14",
    readingText: E5_2_CE_EMAIL_TEXT_14,
    questionPool: E5_2_CE_EMAIL_POOL_14,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-15",
    readingText: E5_2_CE_EMAIL_TEXT_15,
    questionPool: E5_2_CE_EMAIL_POOL_15,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-16",
    readingText: E5_2_CE_EMAIL_TEXT_16,
    questionPool: E5_2_CE_EMAIL_POOL_16,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-17",
    readingText: E5_2_CE_EMAIL_TEXT_17,
    questionPool: E5_2_CE_EMAIL_POOL_17,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-18",
    readingText: E5_2_CE_EMAIL_TEXT_18,
    questionPool: E5_2_CE_EMAIL_POOL_18,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-19",
    readingText: E5_2_CE_EMAIL_TEXT_19,
    questionPool: E5_2_CE_EMAIL_POOL_19,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
  readingPoolExercise({
    id: "e5-2-ce-email-20",
    readingText: E5_2_CE_EMAIL_TEXT_20,
    questionPool: E5_2_CE_EMAIL_POOL_20,
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }),
];

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
  {
    id: "e5-2-pee-11",
    title: "Répondre — la pharmacie 11",
    situation: "Vous recevez un e-mail sur le thème la pharmacie.",
    sourceMessage: {
      from: "Contact",
      subject: "Question sur la pharmacie",
      body: "Bonjour,\nJ'ai une question concernant la pharmacie. Pouvez-vous m'aider ?\nMerci,\nContact",
    },
    instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
    points: ["Votre réponse", "Les informations", "Une question"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-2-pee-12",
    title: "Répondre — la pharmacie 12",
    situation: "Vous recevez un e-mail sur le thème la pharmacie.",
    sourceMessage: {
      from: "Contact",
      subject: "Question sur la pharmacie",
      body: "Bonjour,\nJ'ai une question concernant la pharmacie. Pouvez-vous m'aider ?\nMerci,\nContact",
    },
    instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
    points: ["Votre réponse", "Les informations", "Une question"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-2-pee-13",
    title: "Répondre — la pharmacie 13",
    situation: "Vous recevez un e-mail sur le thème la pharmacie.",
    sourceMessage: {
      from: "Contact",
      subject: "Question sur la pharmacie",
      body: "Bonjour,\nJ'ai une question concernant la pharmacie. Pouvez-vous m'aider ?\nMerci,\nContact",
    },
    instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
    points: ["Votre réponse", "Les informations", "Une question"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-2-pee-14",
    title: "Répondre — la pharmacie 14",
    situation: "Vous recevez un e-mail sur le thème la pharmacie.",
    sourceMessage: {
      from: "Contact",
      subject: "Question sur la pharmacie",
      body: "Bonjour,\nJ'ai une question concernant la pharmacie. Pouvez-vous m'aider ?\nMerci,\nContact",
    },
    instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
    points: ["Votre réponse", "Les informations", "Une question"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-2-pee-15",
    title: "Répondre — la pharmacie 15",
    situation: "Vous recevez un e-mail sur le thème la pharmacie.",
    sourceMessage: {
      from: "Contact",
      subject: "Question sur la pharmacie",
      body: "Bonjour,\nJ'ai une question concernant la pharmacie. Pouvez-vous m'aider ?\nMerci,\nContact",
    },
    instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
    points: ["Votre réponse", "Les informations", "Une question"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-2-pee-16",
    title: "Répondre — la pharmacie 16",
    situation: "Vous recevez un e-mail sur le thème la pharmacie.",
    sourceMessage: {
      from: "Contact",
      subject: "Question sur la pharmacie",
      body: "Bonjour,\nJ'ai une question concernant la pharmacie. Pouvez-vous m'aider ?\nMerci,\nContact",
    },
    instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
    points: ["Votre réponse", "Les informations", "Une question"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-2-pee-17",
    title: "Répondre — la pharmacie 17",
    situation: "Vous recevez un e-mail sur le thème la pharmacie.",
    sourceMessage: {
      from: "Contact",
      subject: "Question sur la pharmacie",
      body: "Bonjour,\nJ'ai une question concernant la pharmacie. Pouvez-vous m'aider ?\nMerci,\nContact",
    },
    instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
    points: ["Votre réponse", "Les informations", "Une question"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-2-pee-18",
    title: "Répondre — la pharmacie 18",
    situation: "Vous recevez un e-mail sur le thème la pharmacie.",
    sourceMessage: {
      from: "Contact",
      subject: "Question sur la pharmacie",
      body: "Bonjour,\nJ'ai une question concernant la pharmacie. Pouvez-vous m'aider ?\nMerci,\nContact",
    },
    instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
    points: ["Votre réponse", "Les informations", "Une question"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-2-pee-19",
    title: "Répondre — la pharmacie 19",
    situation: "Vous recevez un e-mail sur le thème la pharmacie.",
    sourceMessage: {
      from: "Contact",
      subject: "Question sur la pharmacie",
      body: "Bonjour,\nJ'ai une question concernant la pharmacie. Pouvez-vous m'aider ?\nMerci,\nContact",
    },
    instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
    points: ["Votre réponse", "Les informations", "Une question"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e5-2-pee-20",
    title: "Répondre — la pharmacie 20",
    situation: "Vous recevez un e-mail sur le thème la pharmacie.",
    sourceMessage: {
      from: "Contact",
      subject: "Question sur la pharmacie",
      body: "Bonjour,\nJ'ai une question concernant la pharmacie. Pouvez-vous m'aider ?\nMerci,\nContact",
    },
    instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
    points: ["Votre réponse", "Les informations", "Une question"],
    minWords: 50,
    maxWords: 120,
  },
];

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
   E10.1 — Inviter et être invité
   ════════════════════════════════════════════════════════════════════════════ */

const E10_1_CE_TEXT = `Affiche — Camille

un dîner maison samedi soir.
Lieu : chez Camille, rue des Roses 4.
Date : samedi à 19 h 30.
il y aura une soupe, une tarte et une option végétarienne.
Participation libre : chacun apporte une boisson.
À faire : confirmer avant jeudi soir. Contact : camille@exemple.fr.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.`;

const E10_1_CE_POOL = buildExpressPool("e10-1-ce", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Camille", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Camille",
    vfQ: "Le message vient de Camille.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un dîner maison samedi soir", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "dîner",
    vfQ: "Le texte parle de un dîner maison samedi soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["chez Camille, rue des Roses 4", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "chez",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 19 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 19 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["il y aura une soupe, une tarte et une option végétarienne", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "il",
    vfQ: "Le texte précise que il y aura une soupe, une tarte et une option végétarienne.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["confirmer avant jeudi soir", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "confirmer",
    vfQ: "Il faut confirmer avant jeudi soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["camille@exemple.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "camille@exemple",
    vfQ: "Le contact indiqué est camille@exemple.fr.",
    vfC: 0,
  }),
]);

const E10_1_CE_2_TEXT = `SMS — Famille Morel à Lina

Bonjour Lina, petit rappel : un anniversaire surprise pour Inès.
On se retrouve dimanche à 15 h.
Adresse : salle du Parc, entrée côté jardin.
les invités doivent arriver dix minutes avant Inès.
Le trajet est simple, ne t'inquiète pas.
Apporte ce dont tu as besoin, juste au cas où.
Encore merci, vraiment.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci de garder le secret jusqu'à dimanche. Réponse : message à Hugo.`;

const E10_1_CE_2_POOL = buildExpressPool("e10-1-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Famille Morel", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Famille",
    vfQ: "Le message vient de Famille Morel.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un anniversaire surprise pour Inès", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "anniversaire",
    vfQ: "Le texte parle de un anniversaire surprise pour Inès.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle du Parc, entrée côté jardin", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["dimanche à 15 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "dimanche",
    vfQ: "Le moment indiqué est dimanche à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les invités doivent arriver dix minutes avant Inès", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "invités",
    vfQ: "Le texte précise que les invités doivent arriver dix minutes avant Inès.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["garder le secret jusqu'à dimanche", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "garder",
    vfQ: "Il faut garder le secret jusqu'à dimanche.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["message à Hugo", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "message",
    vfQ: "Le contact indiqué est message à Hugo.",
    vfC: 0,
  }),
]);

const E10_1_CE_3_TEXT = `Billet dans l'entrée — Voisins du 3e étage

Bonjour à tous,
Nous préparons un apéritif de bienvenue.
Le rendez-vous est fixé vendredi à 18 h 45, à palier du troisième étage.
Prévoir un verre ou une petite assiette salée.
les nouveaux voisins s'appellent Nora et Sami.
Pour aider, merci de indiquer si vous venez. Contact : groupe WhatsApp de l'immeuble.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.`;

const E10_1_CE_3_POOL = buildExpressPool("e10-1-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Voisins du 3e étage", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Voisins",
    vfQ: "Le message vient de Voisins du 3e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un apéritif de bienvenue", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "apéritif",
    vfQ: "Le texte parle de un apéritif de bienvenue.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["palier du troisième étage", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "palier",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 18 h 45", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 18 h 45.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les nouveaux voisins s'appellent Nora et Sami", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "nouveaux",
    vfQ: "Le texte précise que les nouveaux voisins s'appellent Nora et Sami.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["indiquer si vous venez", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "indiquer",
    vfQ: "Il faut indiquer si vous venez.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["groupe WhatsApp de l'immeuble", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "groupe",
    vfQ: "Le contact indiqué est groupe WhatsApp de l'immeuble.",
    vfC: 0,
  }),
]);

const E10_1_CE_4_TEXT = `Message de groupe — Médiathèque Jean-Jaurès

Ariane a partagé une information.
Sujet : une invitation à rencontrer une autrice.
Point de rencontre : salle bleue de la médiathèque.
Horaire prévu : mercredi à 17 h.
l'autrice parlera de son roman pendant trente minutes.
réserver une place en ligne. Questions : accueil@mediatheque.fr.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.`;

const E10_1_CE_4_POOL = buildExpressPool("e10-1-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Médiathèque Jean-Jaurès", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Médiathèque",
    vfQ: "Le message vient de Médiathèque Jean-Jaurès.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une invitation à rencontrer une autrice", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "invitation",
    vfQ: "Le texte parle de une invitation à rencontrer une autrice.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle bleue de la médiathèque", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mercredi à 17 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mercredi",
    vfQ: "Le moment indiqué est mercredi à 17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["l'autrice parlera de son roman pendant trente minutes", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "l'autrice",
    vfQ: "Le texte précise que l'autrice parlera de son roman pendant trente minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["réserver une place en ligne", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "réserver",
    vfQ: "Il faut réserver une place en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["accueil@mediatheque.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "accueil@mediatheque",
    vfQ: "Le contact indiqué est accueil@mediatheque.fr.",
    vfC: 0,
  }),
]);

const E10_1_CE_5_TEXT = `Brève locale — Club Photo Lumière

un vernissage ouvert aux amis est annoncé cette semaine.
Le public est attendu jeudi à 18 h.
L'adresse exacte est galerie du quai, 12 rue du Port.
trois élèves présentent leurs photos de voyage.
Un jus de fruit est offert à l'entrée.
Inscription ou question : 021 555 14 14; il faut venir avec une personne maximum.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore, et à bientôt.`;

const E10_1_CE_5_POOL = buildExpressPool("e10-1-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Club Photo Lumière", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "Le message vient de Club Photo Lumière.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un vernissage ouvert aux amis", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "vernissage",
    vfQ: "Le texte parle de un vernissage ouvert aux amis.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["galerie du quai, 12 rue du Port", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "galerie",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jeudi à 18 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi à 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["trois élèves présentent leurs photos de voyage", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "trois",
    vfQ: "Le texte précise que trois élèves présentent leurs photos de voyage.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["venir avec une personne maximum", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "venir",
    vfQ: "Il faut venir avec une personne maximum.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["021 555 14 14", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "021",
    vfQ: "Le contact indiqué est 021 555 14 14.",
    vfC: 0,
  }),
]);

const E10_1_CE_6_TEXT = `Carte d'invitation — Sofia

Chère/cher Clara,
Vous êtes invité(e) pour un pique-nique au bord du lac.
Cela aura lieu dimanche à 12 h 30.
Rendez-vous à pelouse près du ponton nord.
Sofia apporte des couvertures et des jeux de cartes.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Merci de dire ce que vous apportez. Contact : sms à Sofia.`;

const E10_1_CE_6_POOL = buildExpressPool("e10-1-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Sofia", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Sofia",
    vfQ: "Le message vient de Sofia.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un pique-nique au bord du lac", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "pique-nique",
    vfQ: "Le texte parle de un pique-nique au bord du lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["pelouse près du ponton nord", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "pelouse",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["dimanche à 12 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "dimanche",
    vfQ: "Le moment indiqué est dimanche à 12 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["Sofia apporte des couvertures et des jeux de cartes", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "Sofia",
    vfQ: "Le texte précise que Sofia apporte des couvertures et des jeux de cartes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["dire ce que vous apportez", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "dire",
    vfQ: "Il faut dire ce que vous apportez.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["sms à Sofia", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "sms",
    vfQ: "Le contact indiqué est sms à Sofia.",
    vfC: 0,
  }),
]);

const E10_1_CE_7_TEXT = `Note pratique — Restaurant Le Safran

Objet : une table réservée pour six personnes.
Les participants arrivent à 18 rue des Écoles.
Début : mardi à 20 h.
la réservation est au nom de Bensaïd.
Prévoir : Menu du soir : 24 € hors boissons.
Avant de venir, prévenir en cas de retard. Contact : restaurant@safran.fr.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.`;

const E10_1_CE_7_POOL = buildExpressPool("e10-1-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Restaurant Le Safran", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Restaurant",
    vfQ: "Le message vient de Restaurant Le Safran.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une table réservée pour six personnes", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "table",
    vfQ: "Le texte parle de une table réservée pour six personnes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["18 rue des Écoles", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "18",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mardi à 20 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mardi",
    vfQ: "Le moment indiqué est mardi à 20 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["la réservation est au nom de Bensaïd", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "réservation",
    vfQ: "Le texte précise que la réservation est au nom de Bensaïd.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["prévenir en cas de retard", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "prévenir",
    vfQ: "Il faut prévenir en cas de retard.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["restaurant@safran.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "restaurant@safran",
    vfQ: "Le contact indiqué est restaurant@safran.fr.",
    vfC: 0,
  }),
]);

const E10_1_CE_8_TEXT = `Page web — Centre social Bellevue

Nouvelle annonce : une soirée crêpes entre voisins.
Où ? grande cuisine du centre.
Quand ? vendredi à 19 h.
Ce qui est prévu : les enfants peuvent venir avec un adulte.
Participation : Ingrédients fournis, boisson à apporter.
Bouton à utiliser : s'inscrire à l'accueil. Aide : 04 76 20 30 40.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.`;

const E10_1_CE_8_POOL = buildExpressPool("e10-1-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Centre social Bellevue", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Centre",
    vfQ: "Le message vient de Centre social Bellevue.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une soirée crêpes entre voisins", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "soirée",
    vfQ: "Le texte parle de une soirée crêpes entre voisins.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["grande cuisine du centre", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "grande",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 19 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les enfants peuvent venir avec un adulte", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "enfants",
    vfQ: "Le texte précise que les enfants peuvent venir avec un adulte.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["s'inscrire à l'accueil", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "s'inscrire",
    vfQ: "Il faut s'inscrire à l'accueil.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["04 76 20 30 40", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "04",
    vfQ: "Le contact indiqué est 04 76 20 30 40.",
    vfC: 0,
  }),
]);

const E10_1_CE_9_TEXT = `Flyer distribué au quartier — Association Horizon

Envie de sortir ?
une sortie cinéma en groupe est ouvert aux voisins.
Accueil à cinéma Palace, devant l'entrée.
Rendez-vous mercredi à 18 h 20.
le film commence à 18 h 45 en version française. Billet réduit : 7 € pour les inscrits.
Pour participer : acheter le billet avant mardi. Contact : horizon.sorties@mail.fr.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.`;

const E10_1_CE_9_POOL = buildExpressPool("e10-1-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Association Horizon", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "Le message vient de Association Horizon.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une sortie cinéma en groupe", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "sortie",
    vfQ: "Le texte parle de une sortie cinéma en groupe.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["cinéma Palace, devant l'entrée", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "cinéma",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mercredi à 18 h 20", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mercredi",
    vfQ: "Le moment indiqué est mercredi à 18 h 20.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le film commence à 18 h 45 en version française", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "film",
    vfQ: "Le texte précise que le film commence à 18 h 45 en version française.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["acheter le billet avant mardi", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "acheter",
    vfQ: "Il faut acheter le billet avant mardi.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["horizon.sorties@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "horizon",
    vfQ: "Le contact indiqué est horizon.sorties@mail.fr.",
    vfC: 0,
  }),
]);

const E10_1_CE_10_TEXT = `Mémo pour les familles — École des Lilas

Information importante : un café des parents.
Les familles se présentent à préau couvert de l'école.
Le créneau retenu est vendredi à 8 h 15.
la directrice présentera les projets du trimestre.
Café offert, gâteaux bienvenus.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Merci de signaler votre présence dans le cahier; contact : secrétariat des Lilas.`;

const E10_1_CE_10_POOL = buildExpressPool("e10-1-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["École des Lilas", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "École",
    vfQ: "Le message vient de École des Lilas.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un café des parents", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "café",
    vfQ: "Le texte parle de un café des parents.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["préau couvert de l'école", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "préau",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 8 h 15", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 8 h 15.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["la directrice présentera les projets du trimestre", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "directrice",
    vfQ: "Le texte précise que la directrice présentera les projets du trimestre.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["signaler votre présence dans le cahier", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "signaler",
    vfQ: "Il faut signaler votre présence dans le cahier.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["secrétariat des Lilas", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "secrétariat",
    vfQ: "Le contact indiqué est secrétariat des Lilas.",
    vfC: 0,
  }),
]);

const E10_1_CE_11_TEXT = `Annonce au micro — Comité des fêtes

Attention, une information concerne une invitation au feu d'artifice.
Les personnes intéressées vont à place du Château.
L'activité commence samedi à 21 h 30.
la musique commencera avant le spectacle.
Il faut aussi noter : Apporter une veste chaude.
Dernière étape : venir quinze minutes avant le début. Contact : info@fetes-locales.fr.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.`;

const E10_1_CE_11_POOL = buildExpressPool("e10-1-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Comité des fêtes", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Comité",
    vfQ: "Le message vient de Comité des fêtes.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une invitation au feu d'artifice", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "invitation",
    vfQ: "Le texte parle de une invitation au feu d'artifice.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["place du Château", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "place",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 21 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 21 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["la musique commencera avant le spectacle", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "musique",
    vfQ: "Le texte précise que la musique commencera avant le spectacle.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["venir quinze minutes avant le début", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "venir",
    vfQ: "Il faut venir quinze minutes avant le début.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["info@fetes-locales.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "info@fetes-locales",
    vfQ: "Le contact indiqué est info@fetes-locales.fr.",
    vfC: 0,
  }),
]);

const E10_1_CE_12_TEXT = `Post sur le réseau du quartier — Groupe Randonnée Douce

Sébastien recommande une marche facile avec invités.
Le groupe se donne rendez-vous à parking de la forêt basse.
Moment choisi : dimanche à 9 h 15.
le parcours dure environ deux heures.
Prévoir eau, chaussures fermées et 2 € pour le covoiturage.
Répondez au message pour confirmer le nombre de participants. Contact : Nadia au 06 22 10 10 10.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.`;

const E10_1_CE_12_POOL = buildExpressPool("e10-1-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Groupe Randonnée Douce", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Groupe",
    vfQ: "Le message vient de Groupe Randonnée Douce.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une marche facile avec invités", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "marche",
    vfQ: "Le texte parle de une marche facile avec invités.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["parking de la forêt basse", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "parking",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["dimanche à 9 h 15", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "dimanche",
    vfQ: "Le moment indiqué est dimanche à 9 h 15.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le parcours dure environ deux heures", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "parcours",
    vfQ: "Le texte précise que le parcours dure environ deux heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["confirmer le nombre de participants", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "confirmer",
    vfQ: "Il faut confirmer le nombre de participants.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["Nadia au 06 22 10 10 10", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Nadia",
    vfQ: "Le contact indiqué est Nadia au 06 22 10 10 10.",
    vfC: 0,
  }),
]);

const E10_1_CE_13_TEXT = `Invitation imprimée — Atelier Cuisine Partagée

Nous serons heureux de vous accueillir.
Programme : un repas syrien ouvert aux curieux.
Adresse : cuisine B du centre associatif.
Début prévu samedi à 11 h.
Maha montrera comment préparer le houmous.
Réponse demandée : indiquer les allergies alimentaires. Contact : atelier.cuisine@mail.fr.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.`;

const E10_1_CE_13_POOL = buildExpressPool("e10-1-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Atelier Cuisine Partagée", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Atelier",
    vfQ: "Le message vient de Atelier Cuisine Partagée.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un repas syrien ouvert aux curieux", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "repas",
    vfQ: "Le texte parle de un repas syrien ouvert aux curieux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["cuisine B du centre associatif", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "cuisine",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 11 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 11 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["Maha montrera comment préparer le houmous", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "Maha",
    vfQ: "Le texte précise que Maha montrera comment préparer le houmous.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["indiquer les allergies alimentaires", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "indiquer",
    vfQ: "Il faut indiquer les allergies alimentaires.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["atelier.cuisine@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "atelier",
    vfQ: "Le contact indiqué est atelier.cuisine@mail.fr.",
    vfC: 0,
  }),
]);

const E10_1_CE_14_TEXT = `Compte rendu court — Bibliothèque du Lac

La réunion a confirmé un club lecture spécial polar.
Le lieu retenu est coin lecture au premier étage.
La date choisie est jeudi à 18 h 10.
le livre choisi est disponible à l'accueil.
Aucun achat n'est nécessaire.
Prochaine action : lire les deux premiers chapitres. Contact : bibliolac@ville.fr.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.`;

const E10_1_CE_14_POOL = buildExpressPool("e10-1-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Bibliothèque du Lac", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Bibliothèque",
    vfQ: "Le message vient de Bibliothèque du Lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un club lecture spécial polar", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "club",
    vfQ: "Le texte parle de un club lecture spécial polar.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["coin lecture au premier étage", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "coin",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jeudi à 18 h 10", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi à 18 h 10.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le livre choisi est disponible à l'accueil", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "livre",
    vfQ: "Le texte précise que le livre choisi est disponible à l'accueil.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["lire les deux premiers chapitres", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "lire",
    vfQ: "Il faut lire les deux premiers chapitres.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["bibliolac@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "bibliolac@ville",
    vfQ: "Le contact indiqué est bibliolac@ville.fr.",
    vfC: 0,
  }),
]);

const E10_1_CE_15_TEXT = `Encart dans le journal de l'école — Amina

À noter cette semaine : une invitation personnelle à prendre un café.
Tout se passe à Café du Théâtre, table près de la fenêtre.
Le rendez-vous est lundi à 16 h 30.
Amina veut discuter de son nouveau travail.
Chacun paie sa consommation.
Les lecteurs doivent répondre avant midi. Contact : amina.mobile.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.`;

const E10_1_CE_15_POOL = buildExpressPool("e10-1-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Amina", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Amina",
    vfQ: "Le message vient de Amina.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une invitation personnelle à prendre un café", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "invitation",
    vfQ: "Le texte parle de une invitation personnelle à prendre un café.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["Café du Théâtre, table près de la fenêtre", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Café",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["lundi à 16 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "lundi",
    vfQ: "Le moment indiqué est lundi à 16 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["Amina veut discuter de son nouveau travail", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "Amina",
    vfQ: "Le texte précise que Amina veut discuter de son nouveau travail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["répondre avant midi", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "répondre",
    vfQ: "Il faut répondre avant midi.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["amina.mobile", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "amina",
    vfQ: "Le contact indiqué est amina.mobile.",
    vfC: 0,
  }),
]);

const E10_1_CE_16_TEXT = `Message vocal retranscrit — Parents de Zoé

Bonjour Mehdi, voici les informations.
On maintient un goûter après le spectacle.
Retrouvons-nous à cour de l'école, près du marronnier.
L'heure reste mardi à 16 h 45.
les enfants chanteront deux chansons avant le goûter.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
Merci de noter votre contribution sur la feuille. Contact : Zoé via Pronote.`;

const E10_1_CE_16_POOL = buildExpressPool("e10-1-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Parents de Zoé", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Parents",
    vfQ: "Le message vient de Parents de Zoé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un goûter après le spectacle", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "goûter",
    vfQ: "Le texte parle de un goûter après le spectacle.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["cour de l'école, près du marronnier", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "cour",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mardi à 16 h 45", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mardi",
    vfQ: "Le moment indiqué est mardi à 16 h 45.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les enfants chanteront deux chansons avant le goûter", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "enfants",
    vfQ: "Le texte précise que les enfants chanteront deux chansons avant le goûter.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["noter votre contribution sur la feuille", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "noter",
    vfQ: "Il faut noter votre contribution sur la feuille.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["Zoé via Pronote", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Zoé",
    vfQ: "Le contact indiqué est Zoé via Pronote.",
    vfC: 0,
  }),
]);

const E10_1_CE_17_TEXT = `Programme de la semaine — Maison de quartier Ouest

Activité principale : une soirée jeux ouverte aux nouveaux.
Salle ou adresse : salle 2, maison de quartier.
Créneau : vendredi à 20 h.
des jeux courts seront expliqués par les bénévoles.
Entrée gratuite, boisson à 1 €.
Pour valider sa place, s'inscrire pour préparer les tables. Contact : accueil.mqo@ville.fr.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.`;

const E10_1_CE_17_POOL = buildExpressPool("e10-1-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Maison de quartier Ouest", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Maison",
    vfQ: "Le message vient de Maison de quartier Ouest.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une soirée jeux ouverte aux nouveaux", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "soirée",
    vfQ: "Le texte parle de une soirée jeux ouverte aux nouveaux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle 2, maison de quartier", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 20 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 20 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["des jeux courts seront expliqués par les bénévoles", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "jeux",
    vfQ: "Le texte précise que des jeux courts seront expliqués par les bénévoles.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["s'inscrire pour préparer les tables", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "s'inscrire",
    vfQ: "Il faut s'inscrire pour préparer les tables.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["accueil.mqo@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "accueil",
    vfQ: "Le contact indiqué est accueil.mqo@ville.fr.",
    vfC: 0,
  }),
]);

const E10_1_CE_18_TEXT = `Petit mot sur le cahier — Compagnie des Amis

Bonjour,
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de lire l'information sur une répétition publique de théâtre.
Le lieu indiqué est petite salle du conservatoire.
La date est samedi à 14 h.
le public pourra donner son avis après la scène.
Entrée libre dans la limite de 30 places. Action demandée : arriver sans faire de bruit. Contact : compagnie.amis@mail.fr.`;

const E10_1_CE_18_POOL = buildExpressPool("e10-1-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Compagnie des Amis", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Compagnie",
    vfQ: "Le message vient de Compagnie des Amis.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une répétition publique de théâtre", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "répétition",
    vfQ: "Le texte parle de une répétition publique de théâtre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["petite salle du conservatoire", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "petite",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 14 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le public pourra donner son avis après la scène", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "public",
    vfQ: "Le texte précise que le public pourra donner son avis après la scène.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["arriver sans faire de bruit", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "arriver",
    vfQ: "Il faut arriver sans faire de bruit.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["compagnie.amis@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "compagnie",
    vfQ: "Le contact indiqué est compagnie.amis@mail.fr.",
    vfC: 0,
  }),
]);

const E10_1_CE_19_TEXT = `Publication du club — Réseau Familles

une invitation à un brunch partagé aura bientôt lieu.
Les membres entrent par local familles, avenue Pasteur 9.
Accueil dimanche à 10 h 30.
un coin jeux sera installé pour les petits.
Apporter un plat froid avec une étiquette.
Le temps est beau, alors tout devrait bien se passer.
Prenez un pull, au cas où il ferait plus frais.
Le parking le plus proche est gratuit le soir.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de confirmer le nombre d'enfants; renseignements : familles@reseau.fr.`;

const E10_1_CE_19_POOL = buildExpressPool("e10-1-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Réseau Familles", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Réseau",
    vfQ: "Le message vient de Réseau Familles.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une invitation à un brunch partagé", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "invitation",
    vfQ: "Le texte parle de une invitation à un brunch partagé.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["local familles, avenue Pasteur 9", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "local",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["dimanche à 10 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "dimanche",
    vfQ: "Le moment indiqué est dimanche à 10 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["un coin jeux sera installé pour les petits", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "coin",
    vfQ: "Le texte précise que un coin jeux sera installé pour les petits.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["confirmer le nombre d'enfants", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "confirmer",
    vfQ: "Il faut confirmer le nombre d'enfants.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["familles@reseau.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "familles@reseau",
    vfQ: "Le contact indiqué est familles@reseau.fr.",
    vfC: 0,
  }),
]);

const E10_1_CE_20_TEXT = `Avis affiché à la porte — Mairie annexe

Changement ou rappel : une réception pour les nouveaux habitants.
L'adresse à retenir est salle des mariages de la mairie annexe.
Le moment à retenir est jeudi à 18 h 30.
le maire présentera les services du quartier.
Condition pratique : Pièce d'identité demandée à l'entrée.
Avant la date, répondre au formulaire d'invitation. Contact : mairie-annexe@ville.fr.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.`;

const E10_1_CE_20_POOL = buildExpressPool("e10-1-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Mairie annexe", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Mairie",
    vfQ: "Le message vient de Mairie annexe.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une réception pour les nouveaux habitants", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "réception",
    vfQ: "Le texte parle de une réception pour les nouveaux habitants.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle des mariages de la mairie annexe", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jeudi à 18 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi à 18 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le maire présentera les services du quartier", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "maire",
    vfQ: "Le texte précise que le maire présentera les services du quartier.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["répondre au formulaire d'invitation", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "répondre",
    vfQ: "Il faut répondre au formulaire d'invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["mairie-annexe@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "mairie-annexe@ville",
    vfQ: "Le contact indiqué est mairie-annexe@ville.fr.",
    vfC: 0,
  }),
]);

export const E10_1_CE: CommunicationExercise[] = [
readingPoolExercise({
  id: "e10-1-ce",
  readingText: E10_1_CE_TEXT,
  questionPool: E10_1_CE_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-2",
  readingText: E10_1_CE_2_TEXT,
  questionPool: E10_1_CE_2_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-3",
  readingText: E10_1_CE_3_TEXT,
  questionPool: E10_1_CE_3_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-4",
  readingText: E10_1_CE_4_TEXT,
  questionPool: E10_1_CE_4_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-5",
  readingText: E10_1_CE_5_TEXT,
  questionPool: E10_1_CE_5_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-6",
  readingText: E10_1_CE_6_TEXT,
  questionPool: E10_1_CE_6_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-7",
  readingText: E10_1_CE_7_TEXT,
  questionPool: E10_1_CE_7_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-8",
  readingText: E10_1_CE_8_TEXT,
  questionPool: E10_1_CE_8_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-9",
  readingText: E10_1_CE_9_TEXT,
  questionPool: E10_1_CE_9_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-10",
  readingText: E10_1_CE_10_TEXT,
  questionPool: E10_1_CE_10_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-11",
  readingText: E10_1_CE_11_TEXT,
  questionPool: E10_1_CE_11_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-12",
  readingText: E10_1_CE_12_TEXT,
  questionPool: E10_1_CE_12_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-13",
  readingText: E10_1_CE_13_TEXT,
  questionPool: E10_1_CE_13_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-14",
  readingText: E10_1_CE_14_TEXT,
  questionPool: E10_1_CE_14_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-15",
  readingText: E10_1_CE_15_TEXT,
  questionPool: E10_1_CE_15_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-16",
  readingText: E10_1_CE_16_TEXT,
  questionPool: E10_1_CE_16_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-17",
  readingText: E10_1_CE_17_TEXT,
  questionPool: E10_1_CE_17_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-18",
  readingText: E10_1_CE_18_TEXT,
  questionPool: E10_1_CE_18_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-19",
  readingText: E10_1_CE_19_TEXT,
  questionPool: E10_1_CE_19_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-1-ce-20",
  readingText: E10_1_CE_20_TEXT,
  questionPool: E10_1_CE_20_POOL,
  questionCount: 6,
}),
];

const E10_1_AMI_A = { title: "L'ami qui invite", vous: "l'ami / l'amie qui invite" };
const E10_1_AMI_B = { title: "L'ami invité", vous: "l'ami invité / l'amie invitée" };
const E10_1_HOTE = { title: "L'hôte", vous: "l'hôte / l'hôtesse" };
const E10_1_INVITE = { title: "L'invité", vous: "l'invité / l'invitée" };

export const E10_1_PO: ExpressPoDialogue[] = [

  {
    id: "e10-1-po-1",
    title: "Inviter à dîner",
    context: "Vous invitez un ami à dîner chez vous samedi soir.",
    roleA: E10_1_AMI_A,
    roleB: E10_1_AMI_B,
    lines: [
      { role: "A", text: "Salut ! Ça te dit de venir dîner à la maison samedi soir ?" },
      { role: "B", text: "Avec plaisir ! C'est à quelle heure ?" },
      { role: "A", text: "Vers 19 h 30, on prendra l'apéritif d'abord." },
      { role: "B", text: "Super. Qu'est-ce que je peux apporter ?" },
      { role: "A", text: "Rien du tout, j'ai déjà tout prévu !" },
      { role: "B", text: "Alors j'apporterai un dessert, j'insiste." },
      { role: "A", text: "D'accord, merci ! Tu te souviens de l'adresse ?" },
      { role: "B", text: "Oui, pas de problème. À samedi !" },
      { role: "A", text: "D'accord, merci beaucoup !" },
      { role: "B", text: "Avec plaisir. À bientôt !" },
],
  },
  {
    id: "e10-1-po-2",
    title: "Refuser poliment une invitation",
    context: "Un ami vous invite dimanche, mais vous n'êtes pas libre ce jour-là.",
    roleA: E10_1_AMI_A,
    roleB: E10_1_AMI_B,
    lines: [
      { role: "A", text: "Tu es libre dimanche ? On organise un déjeuner en famille." },
      { role: "B", text: "C'est gentil, mais je ne suis pas libre ce jour-là." },
      { role: "A", text: "Dommage ! Tu as déjà quelque chose de prévu ?" },
      { role: "B", text: "Oui, j'ai promis d'aider ma sœur à déménager." },
      { role: "A", text: "Je comprends. Et le dimanche d'après, ça irait ?" },
      { role: "B", text: "Le dimanche d'après, ça marche très bien !" },
      { role: "A", text: "Parfait, je te confirme l'heure dans la semaine." },
      { role: "B", text: "Merci pour l'invitation, à bientôt !" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e10-1-po-3",
    title: "Qu'est-ce que j'apporte ?",
    context: "Vous êtes invité(e) chez des amis samedi et vous téléphonez pour demander quoi apporter.",
    roleA: E10_1_INVITE,
    roleB: E10_1_HOTE,
    lines: [
      { role: "A", text: "Allô ? Je t'appelle pour samedi. Qu'est-ce que je peux apporter ?" },
      { role: "B", text: "Oh, ce n'est pas nécessaire, viens juste avec ta bonne humeur !" },
      { role: "A", text: "J'aimerais quand même offrir quelque chose. Des fleurs ?" },
      { role: "B", text: "Si tu veux, oui. On a un jardin, une plante ferait plaisir aussi." },
      { role: "A", text: "Bonne idée ! Et pour le repas, tu as besoin d'aide ?" },
      { role: "B", text: "Non merci, tout est prêt. Tu viens vers midi ?" },
      { role: "A", text: "Oui, j'arriverai à midi avec la plante." },
      { role: "B", text: "Génial, à samedi alors !" },
      { role: "A", text: "Merci, c'est noté." },
      { role: "B", text: "Parfait. À bientôt alors !" },
],
  },
  {
    id: "e10-1-po-4",
    title: "Arriver avec un cadeau",
    context: "Vous arrivez chez vos hôtes avec un bouquet de fleurs.",
    roleA: E10_1_HOTE,
    roleB: E10_1_INVITE,
    lines: [
      { role: "A", text: "Bonsoir ! Entrez, je suis très contente de vous voir !" },
      { role: "B", text: "Bonsoir ! Tenez, c'est pour vous : un bouquet de tulipes." },
      { role: "A", text: "Merci, il est superbe ! Je vais le mettre dans un vase." },
      { role: "B", text: "Votre appartement est très joli. On enlève nos chaussures ?" },
      { role: "A", text: "Non, ce n'est pas nécessaire, gardez-les." },
      { role: "B", text: "D'accord. Ça sent très bon ici !" },
      { role: "A", text: "Venez au salon, nous allons prendre l'apéritif." },
      { role: "B", text: "Volontiers, merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-1-po-5",
    title: "Invitation au cinéma",
    context: "Vous proposez à un ami d'aller voir un film cette semaine.",
    roleA: E10_1_AMI_A,
    roleB: E10_1_AMI_B,
    lines: [
      { role: "A", text: "Tu es dispo pour un ciné mercredi soir ?" },
      { role: "B", text: "Mercredi… non, impossible, j'ai rendez-vous chez le dentiste." },
      { role: "A", text: "Et jeudi alors ? Le film passe encore jeudi." },
      { role: "B", text: "Jeudi, c'est parfait ! C'est quel film ?" },
      { role: "A", text: "Une comédie française, elle a de très bonnes critiques." },
      { role: "B", text: "Super, j'adore les comédies. La séance est à quelle heure ?" },
      { role: "A", text: "À 20 h. On se retrouve devant le cinéma à 19 h 45 ?" },
      { role: "B", text: "D'accord, à jeudi !" },
      { role: "A", text: "On se voit au prochain cours ?" },
      { role: "B", text: "Oui, à mardi !" },
],
  },
  {
    id: "e10-1-po-6",
    title: "Une invitation formelle",
    context: "Vous invitez un collègue plus âgé et sa femme à dîner. Vous vous vouvoyez.",
    roleA: { title: "Le collègue qui invite", vous: "le/la collègue qui invite" },
    roleB: { title: "Le collègue invité", vous: "le collègue invité / la collègue invitée" },
    lines: [
      { role: "A", text: "Bonjour Paul, seriez-vous disponible pour dîner à la maison samedi prochain ?" },
      { role: "B", text: "C'est très gentil ! Attendez, je regarde mon agenda…" },
      { role: "A", text: "Nous serions ravis de vous recevoir avec votre femme." },
      { role: "B", text: "Samedi prochain, nous sommes libres. Nous acceptons avec plaisir !" },
      { role: "A", text: "Formidable ! Disons 19 h 30 chez nous ?" },
      { role: "B", text: "Très bien. Est-ce que nous pouvons apporter quelque chose ?" },
      { role: "A", text: "Non, rien du tout, juste votre présence !" },
      { role: "B", text: "Alors à samedi, et merci pour l'invitation." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-1-po-7",
    title: "Venir avec un ami",
    context: "On vous invite à une exposition et vous voulez venir avec un ami.",
    roleA: E10_1_AMI_A,
    roleB: E10_1_AMI_B,
    lines: [
      { role: "A", text: "Tu veux venir voir une expo avec moi samedi après-midi ?" },
      { role: "B", text: "Bonne idée ! Je peux venir avec un ami ?" },
      { role: "A", text: "Bien sûr, avec plaisir ! C'est qui ?" },
      { role: "B", text: "Un collègue portugais, il adore la peinture." },
      { role: "A", text: "Parfait, plus on est nombreux, mieux c'est !" },
      { role: "B", text: "On se retrouve où ?" },
      { role: "A", text: "Devant l'entrée du musée, à 14 h." },
      { role: "B", text: "Très bien, à samedi tous les trois !" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e10-1-po-8",
    title: "S'excuser pour un retard",
    context: "Vous arrivez en retard à un dîner chez madame Dumas.",
    roleA: E10_1_INVITE,
    roleB: E10_1_HOTE,
    lines: [
      { role: "A", text: "Bonsoir madame Dumas, je suis vraiment désolé pour mon retard." },
      { role: "B", text: "Ce n'est pas grave, entrez ! Le bus, encore ?" },
      { role: "A", text: "Oui, j'ai attendu vingt minutes à l'arrêt." },
      { role: "B", text: "Ne vous inquiétez pas, nous n'avons pas encore commencé." },
      { role: "A", text: "Tenez, j'ai apporté des chocolats pour me faire pardonner." },
      { role: "B", text: "Merci, c'est adorable ! Venez, tout le monde est au salon." },
      { role: "A", text: "Encore pardon. La prochaine fois, je partirai plus tôt !" },
      { role: "B", text: "Ne vous excusez plus, l'apéritif vous attend !" },
      { role: "A", text: "Merci pour les informations." },
      { role: "B", text: "Je vous en prie. Au revoir !" },
],
  },
  {
    id: "e10-1-po-9",
    title: "Le pique-nique du 14 Juillet",
    context: "Vous invitez un ami étranger à pique-niquer pour la fête nationale.",
    roleA: E10_1_AMI_A,
    roleB: E10_1_AMI_B,
    lines: [
      { role: "A", text: "Jeudi, c'est le 14 Juillet, on ne travaille pas. Tu as des projets ?" },
      { role: "B", text: "Non, rien de prévu. Pourquoi ?" },
      { role: "A", text: "Ça te dit de venir pique-niquer à la plage avec nous ?" },
      { role: "B", text: "Avec plaisir ! Qu'est-ce que j'apporte ?" },
      { role: "A", text: "Une salade ou des fruits, comme tu veux." },
      { role: "B", text: "D'accord. Et le soir, il y a quelque chose ?" },
      { role: "A", text: "Oui, le feu d'artifice et le bal sur la place de la mairie !" },
      { role: "B", text: "Génial, j'adore danser. À jeudi !" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e10-1-po-10",
    title: "Prendre un pot après le travail",
    context: "Vous proposez à un collègue de boire un verre avec l'équipe ce soir.",
    roleA: { title: "Le collègue qui invite", vous: "le/la collègue qui invite" },
    roleB: { title: "Le collègue invité", vous: "le collègue invité / la collègue invitée" },
    lines: [
      { role: "A", text: "Tu viens prendre un pot avec nous ce soir ?" },
      { role: "B", text: "Super idée ! On se retrouve où ?" },
      { role: "A", text: "Au café de la place, juste à côté du bureau." },
      { role: "B", text: "D'accord. À quelle heure ?" },
      { role: "A", text: "Vers 18 h, après la réunion." },
      { role: "B", text: "Parfait. Je peux proposer à Sarah de venir aussi ?" },
      { role: "A", text: "Bien sûr, plus on est de fous, plus on rit !" },
      { role: "B", text: "Génial, alors à ce soir !" },
      { role: "A", text: "Bon courage pour la suite !" },
      { role: "B", text: "Merci, toi aussi !" },
],
  },
{
  id: "e10-1-po-11",
  title: "Demander une information sur une invitation",
  context: "Vous voulez participer au repas de quartier.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour participer au repas de quartier." },
    { role: "A", text: "Bien sûr. L'inscription se fait avant vendredi." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui, c'est conseillé. Chacun apporte un plat." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e10-1-po-12",
  title: "Expliquer un problème avec une invitation",
  context: "Vous expliquez un problème : je n'ai pas reçu l'invitation par e-mail.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : je n'ai pas reçu l'invitation par e-mail." },
    { role: "A", text: "Je comprends. Elle est peut-être dans les spams." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Je vous la renvoie." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
{
  id: "e10-1-po-13",
  title: "Prendre rendez-vous pour une invitation",
  context: "Vous voulez prendre rendez-vous pour préparer une invitation pour une fête.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais préparer une invitation pour une fête." },
    { role: "A", text: "Je peux vous proposer on peut en parler mardi." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "Parfait. Je veux inviter quinze personnes." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
{
  id: "e10-1-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous confirmez ceci : votre présence samedi soir.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme votre présence samedi soir." },
    { role: "A", text: "Très bien. C'est bien la fête commence à 19 heures ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "Je viens avec mon frère." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
{
  id: "e10-1-po-15",
  title: "Demander conseil sur une invitation",
  context: "Vous demandez conseil pour inviter mes voisins pour la première fois.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour inviter mes voisins pour la première fois." },
    { role: "A", text: "Écrivez un petit message simple." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "Proposez aussi une heure claire." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
{
  id: "e10-1-po-16",
  title: "Signaler un retard",
  context: "Vous signalez un retard : j'arrive tard à l'anniversaire.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : j'arrive tard à l'anniversaire." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "Mon train part en retard." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "Gardez-moi une part de gâteau." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e10-1-po-17",
  title: "Faire une réclamation polie",
  context: "Vous faites une réclamation : mon nom manque sur la liste des invités.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : mon nom manque sur la liste des invités." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "J'ai pourtant confirmé lundi." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Pouvez-vous vérifier ?" },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
{
  id: "e10-1-po-18",
  title: "Demander une aide urgente",
  context: "Vous devez demander une aide urgente : savoir si je peux encore venir ce soir.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour savoir si je peux encore venir ce soir." },
    { role: "A", text: "Il reste une place." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Répondez avant 17 heures." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
{
  id: "e10-1-po-19",
  title: "Comparer deux possibilités",
  context: "Vous comparez deux options : inviter les amis au café ou à la maison.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare inviter les amis au café ou à la maison." },
    { role: "A", text: "Au café c'est plus simple." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "À la maison c'est plus calme." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
{
  id: "e10-1-po-20",
  title: "Remercier pour une aide",
  context: "Vous remerciez pour une aide : votre invitation au dîner.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour votre invitation au dîner." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "J'ai passé une très bonne soirée." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "Le dessert était délicieux." },
    { role: "A", text: "N'hésitez pas à revenir si besoin." },
    { role: "B", text: "Oui, je le ferai." },
    { role: "A", text: "Bonne continuation !" },
    { role: "B", text: "Merci, à vous aussi." },
  ],
}
];

export const E10_1_PE: ExpressPePrompt[] = [

  {
    id: "e10-1-pe-1",
    title: "Une invitation par e-mail",
    situation: "Vous organisez une fête chez vous le mois prochain.",
    instruction: "Écrivez un e-mail d'invitation à vos amis : donnez la date, l'heure et le lieu, expliquez ce que vous fêtez et dites ce qu'il faut apporter.",
    points: ["La date, l'heure et le lieu", "Ce que vous fêtez", "Ce qu'il faut apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pe-2",
    title: "Accepter une invitation",
    situation: "Un ami vous invite à son anniversaire samedi prochain.",
    instruction: "Répondez à son message : remerciez-le, acceptez l'invitation et posez deux questions (l'heure, le cadeau, les autres invités…).",
    points: ["Le remerciement", "L'acceptation", "Deux questions"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pe-3",
    title: "Refuser poliment",
    situation: "Des amis vous invitent à dîner, mais vous n'êtes pas libre ce soir-là.",
    instruction: "Écrivez un message : excusez-vous, expliquez pourquoi vous ne pouvez pas venir et proposez une autre date.",
    points: ["L'excuse", "La raison", "Une autre date"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pe-4",
    title: "Demander des conseils",
    situation: "Vous êtes invité(e) pour la première fois chez une famille française.",
    instruction: "Écrivez un message à un ami français : décrivez l'invitation et demandez des conseils : quoi apporter, à quelle heure arriver, comment s'habiller.",
    points: ["L'invitation reçue", "Vos questions", "Une formule de remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pe-5",
    title: "Raconter une soirée",
    situation: "Vous êtes allé(e) à une fête le week-end dernier.",
    instruction: "Racontez la soirée à un ami : qui vous a invité(e), ce que vous avez apporté et ce que vous avez fait pendant la soirée.",
    points: ["Qui vous a invité(e)", "Ce que vous avez apporté", "Ce que vous avez fait"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pe-6",
    title: "Un message d'excuse",
    situation: "Vous êtes arrivé(e) très en retard à un dîner hier soir.",
    instruction: "Écrivez un message à vos hôtes : excusez-vous, expliquez la raison du retard et remerciez-les pour la soirée.",
    points: ["L'excuse", "La raison du retard", "Le remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pe-7",
    title: "Les invitations dans votre pays",
    situation: "Un ami français veut savoir comment on reçoit les invités dans votre pays.",
    instruction: "Expliquez les habitudes de votre pays : ce qu'on apporte, l'heure d'arrivée, et comparez avec ce que vous connaissez de la France.",
    points: ["Ce qu'on apporte", "L'heure d'arrivée", "Une comparaison avec la France"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pe-8",
    title: "Une invitation formelle",
    situation: "Vous voulez inviter un collègue plus âgé et sa femme à dîner chez vous.",
    instruction: "Écrivez un e-mail formel (avec « vous ») : invitez-les, proposez une date et une heure, et demandez s'ils ont des préférences pour le repas.",
    points: ["La formule de politesse", "La date et l'heure", "La question sur le repas"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pe-9",
    title: "Merci pour le dîner",
    situation: "Des amis vous ont reçu(e) chez eux hier soir.",
    instruction: "Écrivez un message de remerciement : dites ce que vous avez aimé pendant la soirée et invitez-les chez vous à votre tour.",
    points: ["Le remerciement", "Ce que vous avez aimé", "Votre invitation en retour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pe-10",
    title: "Le pique-nique du 14 Juillet",
    situation: "Vous organisez un pique-nique pour la fête nationale avec un groupe d'amis.",
    instruction: "Écrivez un message au groupe : donnez le lieu et l'heure, répartissez ce que chacun apportera et parlez du programme du soir (feu d'artifice, bal).",
    points: ["Le lieu et l'heure", "Ce que chacun apportera", "Le programme du soir"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e10-1-pe-11",
  title: "Décrire une expérience — invitations",
  situation: "Vous avez vécu une situation importante liée à invitations.",
  instruction: "Racontez cette expérience : le contexte, ce qui s'est passé et le résultat.",
  points: ["Le contexte", "Les événements principaux", "Le résultat"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-1-pe-12",
  title: "Demander des informations — invitations",
  situation: "Vous avez besoin d'informations sur invitations.",
  instruction: "Écrivez un message formel : présentez-vous, posez trois questions précises et remerciez.",
  points: ["Votre présentation", "Trois questions", "Formule de politesse"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-1-pe-13",
  title: "Donner votre avis — invitations",
  situation: "On vous demande votre avis sur invitations.",
  instruction: "Exprimez votre opinion : avantages, inconvénients et recommandation.",
  points: ["Les points positifs", "Les points négatifs", "Votre recommandation"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-1-pe-14",
  title: "Raconter un problème — invitations",
  situation: "Vous avez rencontré un problème avec invitations.",
  instruction: "Décrivez le problème, ce que vous avez fait et ce que vous attendez maintenant.",
  points: ["Le problème", "Vos actions", "Votre attente"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-1-pe-15",
  title: "Proposer une solution — invitations",
  situation: "Un ami a un souci lié à invitations.",
  instruction: "Écrivez-lui un message avec deux conseils pratiques et une offre d'aide.",
  points: ["Deux conseils", "Votre offre d'aide", "Formule amicale"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-1-pe-16",
  title: "Comparer deux options — invitations",
  situation: "Vous hésitez entre deux choix pour invitations.",
  instruction: "Listez les avantages et inconvénients de chaque option et indiquez votre préférence.",
  points: ["Option A", "Option B", "Votre choix"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-1-pe-17",
  title: "Planifier une démarche — invitations",
  situation: "Vous devez organiser une démarche liée à invitations.",
  instruction: "Écrivez un plan avec les étapes, les documents nécessaires et les délais.",
  points: ["Les étapes", "Les documents", "Les délais"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-1-pe-18",
  title: "Remercier — invitations",
  situation: "Quelqu'un vous a aidé(e) pour invitations.",
  instruction: "Écrivez un message de remerciement : rappelez l'aide reçue et proposez de rendre la pareille.",
  points: ["L'aide reçue", "Votre gratitude", "Votre proposition"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-1-pe-19",
  title: "Informer — invitations",
  situation: "Vous devez informer un proche d'une nouvelle sur invitations.",
  instruction: "Écrivez un message clair avec les faits importants et une question pour lui.",
  points: ["Les informations clés", "Les détails pratiques", "Une question"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-1-pe-20",
  title: "Bilan personnel — invitations",
  situation: "Vous faites le bilan de votre expérience avec invitations.",
  instruction: "Rédigez un texte : ce que vous avez appris, ce qui reste à faire et vos objectifs.",
  points: ["Ce que vous avez appris", "Ce qui reste à faire", "Vos objectifs"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.2 — Faire des rencontres
   ════════════════════════════════════════════════════════════════════════════ */

const E10_2_CE_TEXT = `Affiche — Café des langues

une table pour pratiquer le français.
Lieu : Café Central, salle du fond.
Date : mardi à 18 h.
chaque table change de langue toutes les vingt minutes.
Une boisson minimum est demandée.
À faire : s'inscrire sur la liste en ligne. Contact : cafedeslangues@ville.fr.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.`;

const E10_2_CE_POOL = buildExpressPool("e10-2-ce", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Café des langues", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Café",
    vfQ: "Le message vient de Café des langues.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une table pour pratiquer le français", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "table",
    vfQ: "Le texte parle de une table pour pratiquer le français.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["Café Central, salle du fond", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Café",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mardi à 18 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mardi",
    vfQ: "Le moment indiqué est mardi à 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["chaque table change de langue toutes les vingt minutes", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "chaque",
    vfQ: "Le texte précise que chaque table change de langue toutes les vingt minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["s'inscrire sur la liste en ligne", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "s'inscrire",
    vfQ: "Il faut s'inscrire sur la liste en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["cafedeslangues@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "cafedeslangues@ville",
    vfQ: "Le contact indiqué est cafedeslangues@ville.fr.",
    vfC: 0,
  }),
]);

const E10_2_CE_2_TEXT = `SMS — Club Salsa Débutants à Nour

Bonjour Nour, petit rappel : une séance d'essai pour rencontrer le groupe.
On se retrouve jeudi à 19 h.
Adresse : studio Mambo, rue Verte 3.
aucun partenaire n'est nécessaire pour commencer.
Tu peux m'appeler si c'est plus simple pour toi.
J'espère que tu vas bien et que tout se passe comme prévu.
N'oublie pas de me confirmer dès que tu peux.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
Merci de envoyer votre prénom avant mercredi. Réponse : sms à Diego.`;

const E10_2_CE_2_POOL = buildExpressPool("e10-2-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Club Salsa Débutants", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "Le message vient de Club Salsa Débutants.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une séance d'essai pour rencontrer le groupe", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "séance",
    vfQ: "Le texte parle de une séance d'essai pour rencontrer le groupe.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["studio Mambo, rue Verte 3", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "studio",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jeudi à 19 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi à 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["aucun partenaire n'est nécessaire pour commencer", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "aucun",
    vfQ: "Le texte précise que aucun partenaire n'est nécessaire pour commencer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["envoyer votre prénom avant mercredi", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "envoyer",
    vfQ: "Il faut envoyer votre prénom avant mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["sms à Diego", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "sms",
    vfQ: "Le contact indiqué est sms à Diego.",
    vfC: 0,
  }),
]);

const E10_2_CE_3_TEXT = `Billet dans l'entrée — Application Voisins Actifs

Bonjour à tous,
Nous préparons une rencontre autour du jardin partagé.
Le rendez-vous est fixé samedi à 10 h, à jardin des Coccinelles.
Apporter des gants si possible.
les anciens membres expliqueront les parcelles.
Pour aider, merci de cliquer sur Je participe. Contact : appli Voisins Actifs.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Nous restons disponibles pour vous aider.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.`;

const E10_2_CE_3_POOL = buildExpressPool("e10-2-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Application Voisins Actifs", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Application",
    vfQ: "Le message vient de Application Voisins Actifs.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une rencontre autour du jardin partagé", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "rencontre",
    vfQ: "Le texte parle de une rencontre autour du jardin partagé.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["jardin des Coccinelles", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "jardin",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 10 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 10 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les anciens membres expliqueront les parcelles", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "anciens",
    vfQ: "Le texte précise que les anciens membres expliqueront les parcelles.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["cliquer sur Je participe", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "cliquer",
    vfQ: "Il faut cliquer sur Je participe.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["appli Voisins Actifs", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "appli",
    vfQ: "Le contact indiqué est appli Voisins Actifs.",
    vfC: 0,
  }),
]);

const E10_2_CE_4_TEXT = `Message de groupe — Atelier Cuisine du Monde

Karim a partagé une information.
Sujet : une activité pour faire connaissance.
Point de rencontre : cuisine de la MJC.
Horaire prévu : vendredi à 18 h 30.
les participants cuisineront par groupes de trois.
indiquer si vous mangez végétarien. Questions : mjc-cuisine@mail.fr.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.`;

const E10_2_CE_4_POOL = buildExpressPool("e10-2-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Atelier Cuisine du Monde", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Atelier",
    vfQ: "Le message vient de Atelier Cuisine du Monde.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une activité pour faire connaissance", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "activité",
    vfQ: "Le texte parle de une activité pour faire connaissance.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["cuisine de la MJC", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "cuisine",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 18 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 18 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les participants cuisineront par groupes de trois", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "participants",
    vfQ: "Le texte précise que les participants cuisineront par groupes de trois.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["indiquer si vous mangez végétarien", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "indiquer",
    vfQ: "Il faut indiquer si vous mangez végétarien.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["mjc-cuisine@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "mjc-cuisine@mail",
    vfQ: "Le contact indiqué est mjc-cuisine@mail.fr.",
    vfC: 0,
  }),
]);

const E10_2_CE_5_TEXT = `Brève locale — Groupe Nouveaux en ville

un parcours découverte du centre est annoncé cette semaine.
Le public est attendu dimanche à 14 h.
L'adresse exacte est fontaine de la place Royale.
la balade finit par un café partagé.
Prévoir un ticket de tram au cas où.
Inscription ou question : forum Nouveaux en ville; il faut répondre au sondage du groupe.
Le règlement est simple et affiché à l'entrée.
Un goûter ou une boisson est parfois offert.
Les photos peuvent être prises pour le souvenir.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.`;

const E10_2_CE_5_POOL = buildExpressPool("e10-2-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Groupe Nouveaux en ville", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Groupe",
    vfQ: "Le message vient de Groupe Nouveaux en ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un parcours découverte du centre", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "parcours",
    vfQ: "Le texte parle de un parcours découverte du centre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["fontaine de la place Royale", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "fontaine",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["dimanche à 14 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "dimanche",
    vfQ: "Le moment indiqué est dimanche à 14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["la balade finit par un café partagé", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "balade",
    vfQ: "Le texte précise que la balade finit par un café partagé.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["répondre au sondage du groupe", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "répondre",
    vfQ: "Il faut répondre au sondage du groupe.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["forum Nouveaux en ville", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "forum",
    vfQ: "Le contact indiqué est forum Nouveaux en ville.",
    vfC: 0,
  }),
]);

const E10_2_CE_6_TEXT = `Carte d'invitation — Médiathèque

Chère/cher Sami,
Vous êtes invité(e) pour un atelier conversation entre lecteurs.
Cela aura lieu mercredi à 16 h.
Rendez-vous à espace presse de la médiathèque.
chacun présente un article court qu'il a aimé.
À bientôt, et merci de votre lecture.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Merci de choisir un article avant de venir. Contact : accueil de la médiathèque.`;

const E10_2_CE_6_POOL = buildExpressPool("e10-2-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Médiathèque", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Médiathèque",
    vfQ: "Le message vient de Médiathèque.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un atelier conversation entre lecteurs", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "atelier",
    vfQ: "Le texte parle de un atelier conversation entre lecteurs.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["espace presse de la médiathèque", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "espace",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mercredi à 16 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mercredi",
    vfQ: "Le moment indiqué est mercredi à 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["chacun présente un article court qu'il a aimé", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "chacun",
    vfQ: "Le texte précise que chacun présente un article court qu'il a aimé.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["choisir un article avant de venir", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "choisir",
    vfQ: "Il faut choisir un article avant de venir.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["accueil de la médiathèque", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "accueil",
    vfQ: "Le contact indiqué est accueil de la médiathèque.",
    vfC: 0,
  }),
]);

const E10_2_CE_7_TEXT = `Note pratique — Club Randonnée Urbaine

Objet : une marche pour nouveaux amis.
Les participants arrivent à devant l'office du tourisme.
Début : samedi à 9 h 45.
le parcours passe par trois parcs.
Prévoir : Prévoir de l'eau et des baskets.
Avant de venir, confirmer sa présence sur le groupe. Contact : Marion au 06 30 44 55 10.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.`;

const E10_2_CE_7_POOL = buildExpressPool("e10-2-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Club Randonnée Urbaine", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "Le message vient de Club Randonnée Urbaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une marche pour nouveaux amis", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "marche",
    vfQ: "Le texte parle de une marche pour nouveaux amis.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["devant l'office du tourisme", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "devant",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 9 h 45", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 9 h 45.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le parcours passe par trois parcs", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "parcours",
    vfQ: "Le texte précise que le parcours passe par trois parcs.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["confirmer sa présence sur le groupe", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "confirmer",
    vfQ: "Il faut confirmer sa présence sur le groupe.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["Marion au 06 30 44 55 10", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Marion",
    vfQ: "Le contact indiqué est Marion au 06 30 44 55 10.",
    vfC: 0,
  }),
]);

const E10_2_CE_8_TEXT = `Page web — Soirée Jeux Coopératifs

Nouvelle annonce : une table ouverte aux personnes seules.
Où ? bar associatif La Pioche.
Quand ? vendredi à 20 h 15.
Ce qui est prévu : un animateur expliquera les règles.
Participation : Adhésion journée : 2 €.
Bouton à utiliser : arriver avant le début de la première partie. Aide : contact@lapioche.fr.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.`;

const E10_2_CE_8_POOL = buildExpressPool("e10-2-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Soirée Jeux Coopératifs", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Soirée",
    vfQ: "Le message vient de Soirée Jeux Coopératifs.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une table ouverte aux personnes seules", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "table",
    vfQ: "Le texte parle de une table ouverte aux personnes seules.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["bar associatif La Pioche", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "bar",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 20 h 15", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 20 h 15.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["un animateur expliquera les règles", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "animateur",
    vfQ: "Le texte précise que un animateur expliquera les règles.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["arriver avant le début de la première partie", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "arriver",
    vfQ: "Il faut arriver avant le début de la première partie.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["contact@lapioche.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "contact@lapioche",
    vfQ: "Le contact indiqué est contact@lapioche.fr.",
    vfC: 0,
  }),
]);

const E10_2_CE_9_TEXT = `Flyer distribué au quartier — Cours de français A2

Envie de sortir ?
un binôme de conversation est ouvert aux voisins.
Accueil à salle 14 du centre Alpha.
Rendez-vous lundi à 17 h 30.
les binômes changent toutes les semaines. Cahier et stylo nécessaires.
Pour participer : noter trois questions à poser. Contact : professeur Claire.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.`;

const E10_2_CE_9_POOL = buildExpressPool("e10-2-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Cours de français A2", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Cours",
    vfQ: "Le message vient de Cours de français A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un binôme de conversation", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "binôme",
    vfQ: "Le texte parle de un binôme de conversation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle 14 du centre Alpha", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["lundi à 17 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "lundi",
    vfQ: "Le moment indiqué est lundi à 17 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les binômes changent toutes les semaines", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "binômes",
    vfQ: "Le texte précise que les binômes changent toutes les semaines.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["noter trois questions à poser", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "noter",
    vfQ: "Il faut noter trois questions à poser.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["professeur Claire", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "professeur",
    vfQ: "Le contact indiqué est professeur Claire.",
    vfC: 0,
  }),
]);

const E10_2_CE_10_TEXT = `Mémo pour les familles — Groupe Parents Solo

Information importante : un café rencontre sans inscription compliquée.
Les familles se présentent à salon du centre familial.
Le créneau retenu est samedi à 15 h.
un coin dessin est prévu pour les enfants.
Participation libre pour le goûter.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Merci de prévenir si un enfant vient aussi; contact : parentsolo@asso.fr.`;

const E10_2_CE_10_POOL = buildExpressPool("e10-2-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Groupe Parents Solo", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Groupe",
    vfQ: "Le message vient de Groupe Parents Solo.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un café rencontre sans inscription compliquée", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "café",
    vfQ: "Le texte parle de un café rencontre sans inscription compliquée.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salon du centre familial", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salon",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 15 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["un coin dessin est prévu pour les enfants", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "coin",
    vfQ: "Le texte précise que un coin dessin est prévu pour les enfants.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["prévenir si un enfant vient aussi", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "prévenir",
    vfQ: "Il faut prévenir si un enfant vient aussi.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["parentsolo@asso.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "parentsolo@asso",
    vfQ: "Le contact indiqué est parentsolo@asso.fr.",
    vfC: 0,
  }),
]);

const E10_2_CE_11_TEXT = `Annonce au micro — Maison des Jeunes

Attention, une information concerne une soirée karaoké pour nouveaux membres.
Les personnes intéressées vont à salle musique de la MJ.
L'activité commence jeudi à 19 h 30.
les chansons faciles seront affichées sur écran.
Il faut aussi noter : Entrée gratuite avant 20 h.
Dernière étape : choisir une chanson ou venir écouter. Contact : MJ au 04 90 12 12 12.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.`;

const E10_2_CE_11_POOL = buildExpressPool("e10-2-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Maison des Jeunes", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Maison",
    vfQ: "Le message vient de Maison des Jeunes.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une soirée karaoké pour nouveaux membres", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "soirée",
    vfQ: "Le texte parle de une soirée karaoké pour nouveaux membres.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle musique de la MJ", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jeudi à 19 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi à 19 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les chansons faciles seront affichées sur écran", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "chansons",
    vfQ: "Le texte précise que les chansons faciles seront affichées sur écran.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["choisir une chanson ou venir écouter", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "choisir",
    vfQ: "Il faut choisir une chanson ou venir écouter.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["MJ au 04 90 12 12 12", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "MJ",
    vfQ: "Le contact indiqué est MJ au 04 90 12 12 12.",
    vfC: 0,
  }),
]);

const E10_2_CE_12_TEXT = `Post sur le réseau du quartier — Club Échecs Loisir

Pavel recommande une rencontre amicale débutants.
Le groupe se donne rendez-vous à bibliothèque de quartier, table ronde.
Moment choisi : mercredi à 18 h.
les règles seront rappelées au début.
Aucun matériel à acheter.
Répondez au message pour venir cinq minutes en avance. Contact : echecs.loisir@mail.fr.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.`;

const E10_2_CE_12_POOL = buildExpressPool("e10-2-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Club Échecs Loisir", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "Le message vient de Club Échecs Loisir.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une rencontre amicale débutants", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "rencontre",
    vfQ: "Le texte parle de une rencontre amicale débutants.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["bibliothèque de quartier, table ronde", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "bibliothèque",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mercredi à 18 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mercredi",
    vfQ: "Le moment indiqué est mercredi à 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les règles seront rappelées au début", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "règles",
    vfQ: "Le texte précise que les règles seront rappelées au début.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["venir cinq minutes en avance", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "venir",
    vfQ: "Il faut venir cinq minutes en avance.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["echecs.loisir@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "echecs",
    vfQ: "Le contact indiqué est echecs.loisir@mail.fr.",
    vfC: 0,
  }),
]);

const E10_2_CE_13_TEXT = `Invitation imprimée — Atelier Couture Partagée

Nous serons heureux de vous accueillir.
Programme : une séance pour discuter en cousant.
Adresse : local textile, 5 rue Neuve.
Début prévu samedi à 13 h 30.
la première heure est réservée aux présentations.
Réponse demandée : envoyer une photo du vêtement. Contact : ateliertextile@ville.fr.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.`;

const E10_2_CE_13_POOL = buildExpressPool("e10-2-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Atelier Couture Partagée", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Atelier",
    vfQ: "Le message vient de Atelier Couture Partagée.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une séance pour discuter en cousant", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "séance",
    vfQ: "Le texte parle de une séance pour discuter en cousant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["local textile, 5 rue Neuve", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "local",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 13 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 13 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["la première heure est réservée aux présentations", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "première",
    vfQ: "Le texte précise que la première heure est réservée aux présentations.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["envoyer une photo du vêtement", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "envoyer",
    vfQ: "Il faut envoyer une photo du vêtement.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["ateliertextile@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "ateliertextile@ville",
    vfQ: "Le contact indiqué est ateliertextile@ville.fr.",
    vfC: 0,
  }),
]);

const E10_2_CE_14_TEXT = `Compte rendu court — Groupe Balades avec chiens

La réunion a confirmé une promenade pour maîtres et animaux.
Le lieu retenu est entrée sud du parc Martin.
La date choisie est dimanche à 10 h.
les chiens doivent rester en laisse.
Sacs propres obligatoires.
Prochaine action : indiquer le nom de votre chien. Contact : groupe Balades chiens.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.`;

const E10_2_CE_14_POOL = buildExpressPool("e10-2-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Groupe Balades avec chiens", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Groupe",
    vfQ: "Le message vient de Groupe Balades avec chiens.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une promenade pour maîtres et animaux", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "promenade",
    vfQ: "Le texte parle de une promenade pour maîtres et animaux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["entrée sud du parc Martin", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "entrée",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["dimanche à 10 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "dimanche",
    vfQ: "Le moment indiqué est dimanche à 10 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les chiens doivent rester en laisse", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "chiens",
    vfQ: "Le texte précise que les chiens doivent rester en laisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["indiquer le nom de votre chien", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "indiquer",
    vfQ: "Il faut indiquer le nom de votre chien.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["groupe Balades chiens", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "groupe",
    vfQ: "Le contact indiqué est groupe Balades chiens.",
    vfC: 0,
  }),
]);

const E10_2_CE_15_TEXT = `Encart dans le journal de l'école — Cercle Ciné Discussion

À noter cette semaine : une rencontre après un film.
Tout se passe à hall du cinéma Rex.
Le rendez-vous est mardi à 20 h 40.
la discussion durera trente minutes au café voisin.
Billet à acheter soi-même.
Les lecteurs doivent venir avec une question sur le film. Contact : cine-discussion@mail.fr.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.`;

const E10_2_CE_15_POOL = buildExpressPool("e10-2-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Cercle Ciné Discussion", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Cercle",
    vfQ: "Le message vient de Cercle Ciné Discussion.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une rencontre après un film", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "rencontre",
    vfQ: "Le texte parle de une rencontre après un film.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["hall du cinéma Rex", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "hall",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mardi à 20 h 40", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mardi",
    vfQ: "Le moment indiqué est mardi à 20 h 40.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["la discussion durera trente minutes au café voisin", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "discussion",
    vfQ: "Le texte précise que la discussion durera trente minutes au café voisin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["venir avec une question sur le film", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "venir",
    vfQ: "Il faut venir avec une question sur le film.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["cine-discussion@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "cine-discussion@mail",
    vfQ: "Le contact indiqué est cine-discussion@mail.fr.",
    vfC: 0,
  }),
]);

const E10_2_CE_16_TEXT = `Message vocal retranscrit — Réseau Étudiants Adultes

Bonjour Sonia, voici les informations.
On maintient un déjeuner pour nouveaux inscrits.
Retrouvons-nous à restaurant universitaire, table 12.
L'heure reste vendredi à 12 h 10.
un tuteur accueillera les personnes à l'entrée.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Merci de prévenir en cas de retard. Contact : tuteur Ali.`;

const E10_2_CE_16_POOL = buildExpressPool("e10-2-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Réseau Étudiants Adultes", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Réseau",
    vfQ: "Le message vient de Réseau Étudiants Adultes.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un déjeuner pour nouveaux inscrits", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "déjeuner",
    vfQ: "Le texte parle de un déjeuner pour nouveaux inscrits.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["restaurant universitaire, table 12", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "restaurant",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 12 h 10", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 12 h 10.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["un tuteur accueillera les personnes à l'entrée", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "tuteur",
    vfQ: "Le texte précise que un tuteur accueillera les personnes à l'entrée.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["prévenir en cas de retard", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "prévenir",
    vfQ: "Il faut prévenir en cas de retard.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["tuteur Ali", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "tuteur",
    vfQ: "Le contact indiqué est tuteur Ali.",
    vfC: 0,
  }),
]);

const E10_2_CE_17_TEXT = `Programme de la semaine — Club Photo Mobile

Activité principale : une sortie pour apprendre à se connaître.
Salle ou adresse : devant la fresque du marché.
Créneau : samedi à 16 h.
chacun prendra trois photos du quartier.
Téléphone chargé recommandé.
Pour valider sa place, partager une photo après la sortie. Contact : clubphotomobile@net.fr.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.`;

const E10_2_CE_17_POOL = buildExpressPool("e10-2-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Club Photo Mobile", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "Le message vient de Club Photo Mobile.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une sortie pour apprendre à se connaître", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "sortie",
    vfQ: "Le texte parle de une sortie pour apprendre à se connaître.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["devant la fresque du marché", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "devant",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 16 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["chacun prendra trois photos du quartier", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "chacun",
    vfQ: "Le texte précise que chacun prendra trois photos du quartier.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["partager une photo après la sortie", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "partager",
    vfQ: "Il faut partager une photo après la sortie.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["clubphotomobile@net.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "clubphotomobile@net",
    vfQ: "Le contact indiqué est clubphotomobile@net.fr.",
    vfC: 0,
  }),
]);

const E10_2_CE_18_TEXT = `Petit mot sur le cahier — Association Bienvenue

Bonjour,
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Merci de lire l'information sur un parrainage entre habitants.
Le lieu indiqué est bureau 2 de la maison citoyenne.
La date est lundi à 18 h.
chaque nouveau rencontre une personne du quartier.
Service gratuit sur inscription. Action demandée : remplir la fiche de présentation. Contact : bienvenue@quartier.fr.`;

const E10_2_CE_18_POOL = buildExpressPool("e10-2-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Association Bienvenue", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "Le message vient de Association Bienvenue.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un parrainage entre habitants", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "parrainage",
    vfQ: "Le texte parle de un parrainage entre habitants.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["bureau 2 de la maison citoyenne", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "bureau",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["lundi à 18 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "lundi",
    vfQ: "Le moment indiqué est lundi à 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["chaque nouveau rencontre une personne du quartier", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "chaque",
    vfQ: "Le texte précise que chaque nouveau rencontre une personne du quartier.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["remplir la fiche de présentation", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "remplir",
    vfQ: "Il faut remplir la fiche de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["bienvenue@quartier.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "bienvenue@quartier",
    vfQ: "Le contact indiqué est bienvenue@quartier.fr.",
    vfC: 0,
  }),
]);

const E10_2_CE_19_TEXT = `Publication du club — Groupe Volley Détente

un entraînement ouvert aux débutants aura bientôt lieu.
Les membres entrent par gymnase Victor-Hugo.
Accueil mercredi à 19 h.
les équipes seront mélangées après chaque set.
Baskets propres demandées.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Un plan simple est disponible à l'accueil.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Merci de signaler votre niveau au responsable; renseignements : responsable volley.`;

const E10_2_CE_19_POOL = buildExpressPool("e10-2-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Groupe Volley Détente", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Groupe",
    vfQ: "Le message vient de Groupe Volley Détente.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un entraînement ouvert aux débutants", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "entraînement",
    vfQ: "Le texte parle de un entraînement ouvert aux débutants.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["gymnase Victor-Hugo", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "gymnase",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mercredi à 19 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mercredi",
    vfQ: "Le moment indiqué est mercredi à 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les équipes seront mélangées après chaque set", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "équipes",
    vfQ: "Le texte précise que les équipes seront mélangées après chaque set.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["signaler votre niveau au responsable", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "signaler",
    vfQ: "Il faut signaler votre niveau au responsable.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["responsable volley", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "responsable",
    vfQ: "Le contact indiqué est responsable volley.",
    vfC: 0,
  }),
]);

const E10_2_CE_20_TEXT = `Avis affiché à la porte — Atelier Podcast Amateur

Changement ou rappel : une rencontre pour créer une équipe.
L'adresse à retenir est studio radio de la MJC.
Le moment à retenir est jeudi à 18 h 15.
le thème proposé est la vie du quartier.
Condition pratique : Casque prêté sur place.
Avant la date, préparer une idée de sujet. Contact : podcast@mjc.fr.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.`;

const E10_2_CE_20_POOL = buildExpressPool("e10-2-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Atelier Podcast Amateur", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Atelier",
    vfQ: "Le message vient de Atelier Podcast Amateur.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une rencontre pour créer une équipe", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "rencontre",
    vfQ: "Le texte parle de une rencontre pour créer une équipe.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["studio radio de la MJC", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "studio",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jeudi à 18 h 15", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi à 18 h 15.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le thème proposé est la vie du quartier", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "thème",
    vfQ: "Le texte précise que le thème proposé est la vie du quartier.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["préparer une idée de sujet", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "préparer",
    vfQ: "Il faut préparer une idée de sujet.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["podcast@mjc.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "podcast@mjc",
    vfQ: "Le contact indiqué est podcast@mjc.fr.",
    vfC: 0,
  }),
]);

export const E10_2_CE: CommunicationExercise[] = [
readingPoolExercise({
  id: "e10-2-ce",
  readingText: E10_2_CE_TEXT,
  questionPool: E10_2_CE_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-2",
  readingText: E10_2_CE_2_TEXT,
  questionPool: E10_2_CE_2_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-3",
  readingText: E10_2_CE_3_TEXT,
  questionPool: E10_2_CE_3_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-4",
  readingText: E10_2_CE_4_TEXT,
  questionPool: E10_2_CE_4_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-5",
  readingText: E10_2_CE_5_TEXT,
  questionPool: E10_2_CE_5_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-6",
  readingText: E10_2_CE_6_TEXT,
  questionPool: E10_2_CE_6_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-7",
  readingText: E10_2_CE_7_TEXT,
  questionPool: E10_2_CE_7_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-8",
  readingText: E10_2_CE_8_TEXT,
  questionPool: E10_2_CE_8_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-9",
  readingText: E10_2_CE_9_TEXT,
  questionPool: E10_2_CE_9_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-10",
  readingText: E10_2_CE_10_TEXT,
  questionPool: E10_2_CE_10_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-11",
  readingText: E10_2_CE_11_TEXT,
  questionPool: E10_2_CE_11_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-12",
  readingText: E10_2_CE_12_TEXT,
  questionPool: E10_2_CE_12_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-13",
  readingText: E10_2_CE_13_TEXT,
  questionPool: E10_2_CE_13_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-14",
  readingText: E10_2_CE_14_TEXT,
  questionPool: E10_2_CE_14_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-15",
  readingText: E10_2_CE_15_TEXT,
  questionPool: E10_2_CE_15_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-16",
  readingText: E10_2_CE_16_TEXT,
  questionPool: E10_2_CE_16_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-17",
  readingText: E10_2_CE_17_TEXT,
  questionPool: E10_2_CE_17_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-18",
  readingText: E10_2_CE_18_TEXT,
  questionPool: E10_2_CE_18_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-19",
  readingText: E10_2_CE_19_TEXT,
  questionPool: E10_2_CE_19_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-2-ce-20",
  readingText: E10_2_CE_20_TEXT,
  questionPool: E10_2_CE_20_POOL,
  questionCount: 6,
}),
];

const E10_2_AMI = { title: "L'ami", vous: "l'ami / l'amie" };

export const E10_2_PO: ExpressPoDialogue[] = [

  {
    id: "e10-2-po-1",
    title: "Conseiller un site de rencontres d'activités",
    context: "Votre ami s'ennuie le week-end et ne connaît personne en ville.",
    roleA: { title: "L'ami qui conseille", vous: "l'ami / l'amie qui conseille" },
    roleB: { title: "L'ami qui s'ennuie", vous: "l'ami / l'amie qui s'ennuie" },
    lines: [
      { role: "A", text: "Ça va ? Tu as passé un bon week-end ?" },
      { role: "B", text: "Pas vraiment, j'étais seul et je ne savais pas quoi faire." },
      { role: "A", text: "Tu connais MeetFriends ? C'est un site de rencontres d'activités." },
      { role: "B", text: "Non, qu'est-ce qu'on peut y faire ?" },
      { role: "A", text: "Tu peux y faire du sport, des randonnées, aller à des soirées…" },
      { role: "B", text: "Ah oui, c'est bien ! Comment je m'inscris ?" },
      { role: "A", text: "Tu vas sur le site, tu choisis un pseudo, et c'est parti." },
      { role: "B", text: "Merci du conseil, je m'inscris ce soir !" },
      { role: "A", text: "Merci, c'est noté." },
      { role: "B", text: "Parfait. À bientôt alors !" },
],
  },
  {
    id: "e10-2-po-2",
    title: "Premier matin au Café des langues",
    context: "Vous arrivez pour la première fois au Café des langues.",
    roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
    roleB: { title: "Le nouveau participant", vous: "le nouveau participant / la nouvelle participante" },
    lines: [
      { role: "A", text: "Bonjour, bienvenue au Café des langues ! C'est votre première fois ?" },
      { role: "B", text: "Oui, bonjour ! Comment ça se passe ?" },
      { role: "A", text: "On s'assoit à une table et on discute autour d'un café." },
      { role: "B", text: "On y parle seulement français ?" },
      { role: "A", text: "Non, on y parle aussi anglais et espagnol. Vous choisissez votre table." },
      { role: "B", text: "Super ! Et c'est payant ?" },
      { role: "A", text: "Non, c'est gratuit et ouvert à tous. Vous payez juste votre café." },
      { role: "B", text: "Parfait, alors je vais m'asseoir à la table de français !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-2-po-3",
    title: "S'inscrire à un cours de salsa",
    context: "Vous téléphonez au studio de danse pour vous inscrire.",
    roleA: { title: "L'employé du studio", vous: "l'employé(e) du studio de danse" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Studio Danse Passion, bonjour !" },
      { role: "B", text: "Bonjour, je voudrais m'inscrire au cours de salsa du mardi." },
      { role: "A", text: "Bien sûr ! Vous avez déjà dansé la salsa ?" },
      { role: "B", text: "Un peu, mais je suis presque débutant." },
      { role: "A", text: "Pas de problème, le cours du mardi est pour les débutants." },
      { role: "B", text: "Génial. Est-ce que je peux venir avec une amie ?" },
      { role: "A", text: "Oui, bien sûr ! Le premier cours d'essai est gratuit." },
      { role: "B", text: "Parfait, nous viendrons mardi prochain. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-2-po-4",
    title: "Proposer une randonnée à un voisin",
    context: "Vous invitez votre nouveau voisin à la randonnée du jeudi.",
    roleA: { title: "Le voisin", vous: "le voisin / la voisine" },
    roleB: { title: "Le nouveau voisin", vous: "le nouveau voisin / la nouvelle voisine" },
    lines: [
      { role: "A", text: "Bonjour ! Vous êtes bien installé dans le quartier ?" },
      { role: "B", text: "Oui, merci. Mais je ne connais encore personne ici." },
      { role: "A", text: "Justement, on organise une randonnée jeudi avec un petit groupe. Ça vous dit ?" },
      { role: "B", text: "Pourquoi pas ! C'est loin ?" },
      { role: "A", text: "Non, on marche deux heures au bord du lac. Rendez-vous à 18 h." },
      { role: "B", text: "D'accord. Il faut apporter quelque chose ?" },
      { role: "A", text: "Juste de bonnes chaussures et une bouteille d'eau." },
      { role: "B", text: "Très bien, merci pour l'invitation, à jeudi !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-2-po-5",
    title: "Faire connaissance à une soirée",
    context: "À une soirée, vous discutez avec une personne que vous ne connaissez pas.",
    roleA: { title: "L'invitée qui habite ici", vous: "l'invité(e) qui habite la ville" },
    roleB: { title: "Le nouvel arrivant", vous: "le nouvel arrivant / la nouvelle arrivante" },
    lines: [
      { role: "A", text: "Bonsoir ! Vous êtes un ami de Karim ?" },
      { role: "B", text: "Oui, on travaille ensemble. Et vous ?" },
      { role: "A", text: "Moi, je suis sa voisine. Vous êtes arrivé dans la ville récemment ?" },
      { role: "B", text: "Oui, il y a trois mois. Je ne connais pas encore grand monde." },
      { role: "A", text: "Vous savez, il y a un Café des langues le samedi matin. J'y vais souvent." },
      { role: "B", text: "Ah bon ? J'aimerais bien pratiquer mon français !" },
      { role: "A", text: "Alors venez samedi, je vous présenterai le groupe." },
      { role: "B", text: "Volontiers, merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-2-po-6",
    title: "Une rencontre grâce à une application",
    context: "Vous racontez à un ami comment vous avez rencontré votre copine.",
    roleA: { title: "L'ami curieux", vous: "l'ami curieux / l'amie curieuse" },
    roleB: { title: "L'ami amoureux", vous: "l'ami amoureux / l'amie amoureuse" },
    lines: [
      { role: "A", text: "Elle est super sympa, ta nouvelle copine ! Tu l'as rencontrée où ?" },
      { role: "B", text: "Sur une application. On a discuté pendant deux semaines d'abord." },
      { role: "A", text: "Et ensuite, vous vous êtes rencontrés où ?" },
      { role: "B", text: "Dans un café, un samedi après-midi. J'étais très nerveux !" },
      { role: "A", text: "Et ça s'est bien passé ?" },
      { role: "B", text: "Très bien ! On a parlé pendant trois heures." },
      { role: "A", text: "Et maintenant, vous sortez ensemble ?" },
      { role: "B", text: "Oui, on va souvent au cinéma. Je suis très content !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-2-po-7",
    title: "Inviter un collègue au Café des langues",
    context: "Votre collègue veut améliorer son espagnol, vous lui proposez le Café des langues.",
    roleA: { title: "Le collègue qui invite", vous: "le/la collègue qui invite" },
    roleB: { title: "Le collègue invité", vous: "le collègue invité / la collègue invitée" },
    lines: [
      { role: "A", text: "Dis-moi, tu veux toujours améliorer ton espagnol ?" },
      { role: "B", text: "Oui, mais les cours coûtent cher…" },
      { role: "A", text: "Viens au Café des langues samedi ! On y parle espagnol autour d'un café." },
      { role: "B", text: "C'est une bonne idée, ça ! C'est où ?" },
      { role: "A", text: "Au café de la gare, de 10 h à midi. C'est gratuit." },
      { role: "B", text: "Et il y a beaucoup de monde ?" },
      { role: "A", text: "Une vingtaine de personnes, très sympas. J'y vais chaque semaine." },
      { role: "B", text: "D'accord, je viens avec toi samedi !" },
      { role: "A", text: "Bon voyage alors !" },
      { role: "B", text: "Merci, vous aussi !" },
],
  },
  {
    id: "e10-2-po-8",
    title: "Fixer un rendez-vous pour une activité",
    context: "Vous organisez la sortie bowling de samedi avec un membre du groupe.",
    roleA: E10_2_AMI,
    roleB: { title: "Le membre du groupe", vous: "le/la membre du groupe" },
    lines: [
      { role: "A", text: "Alors, on se retrouve où samedi pour le bowling ?" },
      { role: "B", text: "Devant l'entrée du bowling, c'est plus simple, non ?" },
      { role: "A", text: "D'accord. À quelle heure ?" },
      { role: "B", text: "À 15 h ? On aura le temps de faire connaissance avant de jouer." },
      { role: "A", text: "Parfait. Tu sais combien nous serons ?" },
      { role: "B", text: "Six personnes, il y a deux nouveaux du site." },
      { role: "A", text: "Super, je réserve deux pistes alors !" },
      { role: "B", text: "Très bien. À samedi !" },
      { role: "A", text: "Merci pour les informations." },
      { role: "B", text: "Je vous en prie. Au revoir !" },
],
  },
  {
  id: "e10-2-po-9",
  title: "Demander une information sur une rencontre",
  context: "Vous voulez la rencontre des nouveaux habitants.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour la rencontre des nouveaux habitants." },
    { role: "A", text: "Bien sûr. Elle a lieu à la salle communale." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui, c'est conseillé. Il y aura une visite du quartier." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
  {
    id: "e10-2-po-10",
    title: "Proposer de se revoir",
    context: "Après une randonnée, vous discutez avec une personne du groupe.",
    roleA: E10_2_AMI,
    roleB: { title: "Le membre du groupe", vous: "le/la membre du groupe" },
    lines: [
      { role: "A", text: "C'était une super randonnée ! Tu viens souvent ?" },
      { role: "B", text: "C'est ma deuxième fois. J'ai adoré aussi !" },
      { role: "A", text: "Le groupe organise une soirée jeux vendredi. Tu y vas ?" },
      { role: "B", text: "Je ne savais pas ! Où est-ce que ça se passe ?" },
      { role: "A", text: "Au café du centre, à 19 h. Je peux t'envoyer le lien." },
      { role: "B", text: "Volontiers ! Tu me donnes ton numéro ?" },
      { role: "A", text: "Bien sûr, je te l'écris. On s'y retrouve vendredi ?" },
      { role: "B", text: "Avec plaisir ! À vendredi !" },
      { role: "A", text: "Merci, c'est noté." },
      { role: "B", text: "Parfait. À bientôt alors !" },
],
  },
{
  id: "e10-2-po-11",
  title: "Demander une information sur une rencontre",
  context: "Vous voulez la rencontre des nouveaux habitants.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour la rencontre des nouveaux habitants." },
    { role: "A", text: "Bien sûr. Elle a lieu à la salle communale." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui, c'est conseillé. Il y aura une visite du quartier." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e10-2-po-12",
  title: "Expliquer un problème avec une rencontre",
  context: "Vous expliquez un problème : je ne trouve pas le groupe.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : je ne trouve pas le groupe." },
    { role: "A", text: "Je comprends. Ils sont dans la petite salle à gauche." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Je vous accompagne." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
{
  id: "e10-2-po-13",
  title: "Prendre rendez-vous pour une rencontre",
  context: "Vous voulez prendre rendez-vous pour rencontrer mon conseiller.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais rencontrer mon conseiller." },
    { role: "A", text: "Je peux vous proposer jeudi matin à 11 heures." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "Parfait. Je veux parler de mon projet." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
{
  id: "e10-2-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous confirmez ceci : notre rencontre de demain.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme notre rencontre de demain." },
    { role: "A", text: "Très bien. C'est bien à 10 heures devant la bibliothèque ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "J'apporte les documents." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
{
  id: "e10-2-po-15",
  title: "Demander conseil sur une rencontre",
  context: "Vous demandez conseil pour parler à de nouvelles personnes.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour parler à de nouvelles personnes." },
    { role: "A", text: "Commencez par une question simple." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "Présentez-vous calmement." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
{
  id: "e10-2-po-16",
  title: "Signaler un retard",
  context: "Vous signalez un retard : je serai en retard à la rencontre.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : je serai en retard à la rencontre." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "La route est fermée." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "J'arrive dans vingt minutes." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e10-2-po-17",
  title: "Faire une réclamation polie",
  context: "Vous faites une réclamation : personne n'était à l'accueil.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : personne n'était à l'accueil." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "J'ai attendu trente minutes." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Je voudrais un autre créneau." },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
{
  id: "e10-2-po-18",
  title: "Demander une aide urgente",
  context: "Vous devez demander une aide urgente : contacter le groupe avant ce soir.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour contacter le groupe avant ce soir." },
    { role: "A", text: "Voici le numéro de Clara." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Elle répond vite aux messages." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
{
  id: "e10-2-po-19",
  title: "Comparer deux possibilités",
  context: "Vous comparez deux options : une rencontre en ligne et une rencontre sur place.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare une rencontre en ligne et une rencontre sur place." },
    { role: "A", text: "En ligne c'est pratique." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "Sur place on parle plus facilement." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
{
  id: "e10-2-po-20",
  title: "Remercier pour une aide",
  context: "Vous remerciez pour une aide : votre accueil pendant la rencontre.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour votre accueil pendant la rencontre." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "Je me suis senti à l'aise." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "J'aimerais revenir la semaine prochaine." },
    { role: "A", text: "N'hésitez pas à revenir si besoin." },
    { role: "B", text: "Oui, je le ferai." },
    { role: "A", text: "Bonne continuation !" },
    { role: "B", text: "Merci, à vous aussi." },
  ],
}
];

export const E10_2_PE: ExpressPePrompt[] = [

  {
    id: "e10-2-pe-1",
    title: "Votre profil en ligne",
    situation: "Vous vous inscrivez sur un site de rencontres d'activités.",
    instruction: "Écrivez votre présentation : parlez de vous, de vos activités préférées et des personnes que vous aimeriez rencontrer.",
    points: ["Votre présentation", "Vos activités préférées", "Les personnes que vous cherchez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pe-2",
    title: "Proposer une sortie",
    situation: "Vous avez rencontré quelqu'un de sympathique au Café des langues.",
    instruction: "Écrivez-lui un message : rappelez votre rencontre, proposez une sortie et donnez un lieu et une heure.",
    points: ["Le rappel de la rencontre", "La proposition de sortie", "Le lieu et l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pe-3",
    title: "Une belle rencontre",
    situation: "Un ami vous demande comment vous avez rencontré votre meilleur(e) ami(e).",
    instruction: "Racontez cette rencontre : où et quand vous vous êtes rencontrés, votre première conversation et ce que vous faites ensemble aujourd'hui.",
    points: ["Le lieu et le moment", "La première conversation", "Ce que vous faites ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pe-4",
    title: "E-mail au Café des langues",
    situation: "Vous voulez participer au Café des langues de votre ville.",
    instruction: "Écrivez un e-mail aux organisateurs : présentez-vous, posez des questions (horaires, langues, prix) et demandez comment s'inscrire.",
    points: ["Votre présentation", "Deux ou trois questions", "La demande d'inscription"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pe-5",
    title: "Créer un groupe d'activité",
    situation: "Vous voulez créer un groupe de marche dans votre quartier.",
    instruction: "Écrivez une annonce : décrivez l'activité, donnez le jour et le lieu de rendez-vous et invitez les voisins à s'inscrire.",
    points: ["La description de l'activité", "Le jour et le lieu", "L'invitation à s'inscrire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pe-6",
    title: "Conseils à un nouvel arrivant",
    situation: "Un ami vient d'arriver dans votre ville et ne connaît personne.",
    instruction: "Écrivez-lui un message avec trois idées pour rencontrer des gens, et expliquez comment participer à chaque activité.",
    points: ["Trois idées de rencontres", "Comment participer", "Un encouragement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pe-7",
    title: "Ma première fois au Café des langues",
    situation: "Vous êtes allé(e) au Café des langues samedi dernier.",
    instruction: "Racontez cette expérience : comment ça s'est passé, les personnes que vous avez rencontrées et si vous y retournerez.",
    points: ["Le déroulement", "Les personnes rencontrées", "Votre conclusion"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pe-8",
    title: "Rencontres en ligne ou en vrai ?",
    situation: "Un magazine demande l'avis de ses lecteurs sur les applications de rencontres.",
    instruction: "Donnez votre avis : les avantages des rencontres en ligne, leurs inconvénients et ce que vous préférez.",
    points: ["Les avantages", "Les inconvénients", "Votre préférence"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pe-9",
    title: "Après la randonnée",
    situation: "Vous avez fait une randonnée avec un nouveau groupe dimanche.",
    instruction: "Écrivez un message au groupe : remerciez les participants, dites ce que vous avez aimé et proposez la prochaine activité.",
    points: ["Le remerciement", "Ce que vous avez aimé", "La prochaine activité"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pe-10",
    title: "L'activité idéale",
    situation: "Le site de rencontres d'activités demande des idées à ses membres.",
    instruction: "Décrivez l'activité de groupe idéale pour vous : le type d'activité, le rythme (jour, fréquence) et pourquoi elle aide à faire des rencontres.",
    points: ["Le type d'activité", "Le rythme (jour, fréquence)", "Pourquoi elle aide"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e10-2-pe-11",
  title: "Décrire une expérience — rencontres",
  situation: "Vous avez vécu une situation importante liée à rencontres.",
  instruction: "Racontez cette expérience : le contexte, ce qui s'est passé et le résultat.",
  points: ["Le contexte", "Les événements principaux", "Le résultat"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-2-pe-12",
  title: "Demander des informations — rencontres",
  situation: "Vous avez besoin d'informations sur rencontres.",
  instruction: "Écrivez un message formel : présentez-vous, posez trois questions précises et remerciez.",
  points: ["Votre présentation", "Trois questions", "Formule de politesse"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-2-pe-13",
  title: "Donner votre avis — rencontres",
  situation: "On vous demande votre avis sur rencontres.",
  instruction: "Exprimez votre opinion : avantages, inconvénients et recommandation.",
  points: ["Les points positifs", "Les points négatifs", "Votre recommandation"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-2-pe-14",
  title: "Raconter un problème — rencontres",
  situation: "Vous avez rencontré un problème avec rencontres.",
  instruction: "Décrivez le problème, ce que vous avez fait et ce que vous attendez maintenant.",
  points: ["Le problème", "Vos actions", "Votre attente"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-2-pe-15",
  title: "Proposer une solution — rencontres",
  situation: "Un ami a un souci lié à rencontres.",
  instruction: "Écrivez-lui un message avec deux conseils pratiques et une offre d'aide.",
  points: ["Deux conseils", "Votre offre d'aide", "Formule amicale"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-2-pe-16",
  title: "Comparer deux options — rencontres",
  situation: "Vous hésitez entre deux choix pour rencontres.",
  instruction: "Listez les avantages et inconvénients de chaque option et indiquez votre préférence.",
  points: ["Option A", "Option B", "Votre choix"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-2-pe-17",
  title: "Planifier une démarche — rencontres",
  situation: "Vous devez organiser une démarche liée à rencontres.",
  instruction: "Écrivez un plan avec les étapes, les documents nécessaires et les délais.",
  points: ["Les étapes", "Les documents", "Les délais"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-2-pe-18",
  title: "Remercier — rencontres",
  situation: "Quelqu'un vous a aidé(e) pour rencontres.",
  instruction: "Écrivez un message de remerciement : rappelez l'aide reçue et proposez de rendre la pareille.",
  points: ["L'aide reçue", "Votre gratitude", "Votre proposition"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-2-pe-19",
  title: "Informer — rencontres",
  situation: "Vous devez informer un proche d'une nouvelle sur rencontres.",
  instruction: "Écrivez un message clair avec les faits importants et une question pour lui.",
  points: ["Les informations clés", "Les détails pratiques", "Une question"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-2-pe-20",
  title: "Bilan personnel — rencontres",
  situation: "Vous faites le bilan de votre expérience avec rencontres.",
  instruction: "Rédigez un texte : ce que vous avez appris, ce qui reste à faire et vos objectifs.",
  points: ["Ce que vous avez appris", "Ce qui reste à faire", "Vos objectifs"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.3 — Organiser un événement
   ════════════════════════════════════════════════════════════════════════════ */

const E10_3_CE_TEXT = `Affiche — Comité Mariage Lina et Paul

l'organisation du mariage civil.
Lieu : mairie centrale, salle des mariages.
Date : samedi à 10 h 45.
les témoins doivent arriver avec leur pièce d'identité.
Photos autorisées seulement après la cérémonie.
À faire : confirmer votre présence au repas. Contact : mariage.lina.paul@mail.fr.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.`;

const E10_3_CE_POOL = buildExpressPool("e10-3-ce", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Comité Mariage Lina et Paul", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Comité",
    vfQ: "Le message vient de Comité Mariage Lina et Paul.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["l'organisation du mariage civil", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "l'organisation",
    vfQ: "Le texte parle de l'organisation du mariage civil.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["mairie centrale, salle des mariages", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "mairie",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 10 h 45", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 10 h 45.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les témoins doivent arriver avec leur pièce d'identité", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "témoins",
    vfQ: "Le texte précise que les témoins doivent arriver avec leur pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["confirmer votre présence au repas", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "confirmer",
    vfQ: "Il faut confirmer votre présence au repas.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["mariage.lina.paul@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "mariage",
    vfQ: "Le contact indiqué est mariage.lina.paul@mail.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_2_TEXT = `SMS — Fête du Quartier Nord à Farid

Bonjour Farid, petit rappel : la préparation des stands.
On se retrouve vendredi à 17 h.
Adresse : place des Tilleuls.
les tables seront montées par les bénévoles.
J'espère que tu vas bien et que tout se passe comme prévu.
N'oublie pas de me confirmer dès que tu peux.
Sinon on peut aussi en parler demain matin.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
Merci de choisir un créneau de montage. Réponse : comite.nord@ville.fr.`;

const E10_3_CE_2_POOL = buildExpressPool("e10-3-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Fête du Quartier Nord", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Fête",
    vfQ: "Le message vient de Fête du Quartier Nord.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["la préparation des stands", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "préparation",
    vfQ: "Le texte parle de la préparation des stands.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["place des Tilleuls", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "place",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 17 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les tables seront montées par les bénévoles", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "tables",
    vfQ: "Le texte précise que les tables seront montées par les bénévoles.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["choisir un créneau de montage", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "choisir",
    vfQ: "Il faut choisir un créneau de montage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["comite.nord@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "comite",
    vfQ: "Le contact indiqué est comite.nord@ville.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_3_TEXT = `Billet dans l'entrée — Équipe Concert Solidaire

Bonjour à tous,
Nous préparons un concert au profit de l'épicerie sociale.
Le rendez-vous est fixé samedi à 20 h, à salle Mandela.
Entrée : 8 € ou don alimentaire.
trois groupes locaux joueront chacun trente minutes.
Pour aider, merci de réserver les billets avant jeudi. Contact : concert.solidaire@mail.fr.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.`;

const E10_3_CE_3_POOL = buildExpressPool("e10-3-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Équipe Concert Solidaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Équipe",
    vfQ: "Le message vient de Équipe Concert Solidaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un concert au profit de l'épicerie sociale", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "concert",
    vfQ: "Le texte parle de un concert au profit de l'épicerie sociale.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle Mandela", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 20 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 20 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["trois groupes locaux joueront chacun trente minutes", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "trois",
    vfQ: "Le texte précise que trois groupes locaux joueront chacun trente minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["réserver les billets avant jeudi", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "réserver",
    vfQ: "Il faut réserver les billets avant jeudi.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["concert.solidaire@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "concert",
    vfQ: "Le contact indiqué est concert.solidaire@mail.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_4_TEXT = `Message de groupe — MJC Bellevue

Youssef a partagé une information.
Sujet : un vide-greniers de printemps.
Point de rencontre : cour de la MJC.
Horaire prévu : dimanche à 8 h.
les exposants entrent par le portail gris.
envoyer la fiche d'inscription. Questions : mjc-bellevue@ville.fr.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.`;

const E10_3_CE_4_POOL = buildExpressPool("e10-3-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["MJC Bellevue", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "MJC",
    vfQ: "Le message vient de MJC Bellevue.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un vide-greniers de printemps", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "vide-greniers",
    vfQ: "Le texte parle de un vide-greniers de printemps.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["cour de la MJC", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "cour",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["dimanche à 8 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "dimanche",
    vfQ: "Le moment indiqué est dimanche à 8 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les exposants entrent par le portail gris", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "exposants",
    vfQ: "Le texte précise que les exposants entrent par le portail gris.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["envoyer la fiche d'inscription", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "envoyer",
    vfQ: "Il faut envoyer la fiche d'inscription.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["mjc-bellevue@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "mjc-bellevue@ville",
    vfQ: "Le contact indiqué est mjc-bellevue@ville.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_5_TEXT = `Brève locale — Club Sport Santé

un tournoi amical de badminton est annoncé cette semaine.
Le public est attendu mercredi à 18 h 30.
L'adresse exacte est gymnase des Acacias.
les équipes seront tirées au sort sur place.
Raquette prêtée si besoin.
Inscription ou question : sport-sante@mail.fr; il faut apporter des chaussures propres.
Une question ? Écrivez ou téléphonez.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.`;

const E10_3_CE_5_POOL = buildExpressPool("e10-3-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Club Sport Santé", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "Le message vient de Club Sport Santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un tournoi amical de badminton", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "tournoi",
    vfQ: "Le texte parle de un tournoi amical de badminton.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["gymnase des Acacias", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "gymnase",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mercredi à 18 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mercredi",
    vfQ: "Le moment indiqué est mercredi à 18 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les équipes seront tirées au sort sur place", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "équipes",
    vfQ: "Le texte précise que les équipes seront tirées au sort sur place.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["apporter des chaussures propres", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "apporter",
    vfQ: "Il faut apporter des chaussures propres.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["sport-sante@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "sport-sante@mail",
    vfQ: "Le contact indiqué est sport-sante@mail.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_6_TEXT = `Carte d'invitation — Collectif Rue Verte

Chère/cher Sacha,
Vous êtes invité(e) pour une inauguration de fresque.
Cela aura lieu jeudi à 17 h 45.
Rendez-vous à mur du passage Colbert.
les artistes expliqueront leur travail.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
Merci de venir sans vélo dans le passage. Contact : collectif.rueverte@net.fr.`;

const E10_3_CE_6_POOL = buildExpressPool("e10-3-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Collectif Rue Verte", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Collectif",
    vfQ: "Le message vient de Collectif Rue Verte.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une inauguration de fresque", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "inauguration",
    vfQ: "Le texte parle de une inauguration de fresque.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["mur du passage Colbert", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "mur",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jeudi à 17 h 45", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi à 17 h 45.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les artistes expliqueront leur travail", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "artistes",
    vfQ: "Le texte précise que les artistes expliqueront leur travail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["venir sans vélo dans le passage", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "venir",
    vfQ: "Il faut venir sans vélo dans le passage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["collectif.rueverte@net.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "collectif",
    vfQ: "Le contact indiqué est collectif.rueverte@net.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_7_TEXT = `Note pratique — Festival des Saveurs

Objet : la réunion des bénévoles avant le festival.
Les participants arrivent à salle 3 du centre culturel.
Début : mardi à 19 h.
les tâches seront réparties par équipe.
Prévoir : Badge bénévole remis à l'entrée.
Avant de venir, choisir une mission sur le tableau. Contact : benevoles.saveurs@mail.fr.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.`;

const E10_3_CE_7_POOL = buildExpressPool("e10-3-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Festival des Saveurs", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Festival",
    vfQ: "Le message vient de Festival des Saveurs.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["la réunion des bénévoles avant le festival", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "réunion",
    vfQ: "Le texte parle de la réunion des bénévoles avant le festival.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle 3 du centre culturel", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mardi à 19 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mardi",
    vfQ: "Le moment indiqué est mardi à 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les tâches seront réparties par équipe", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "tâches",
    vfQ: "Le texte précise que les tâches seront réparties par équipe.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["choisir une mission sur le tableau", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "choisir",
    vfQ: "Il faut choisir une mission sur le tableau.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["benevoles.saveurs@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "benevoles",
    vfQ: "Le contact indiqué est benevoles.saveurs@mail.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_8_TEXT = `Page web — École de Musique

Nouvelle annonce : une audition de fin d'année.
Où ? auditorium du conservatoire.
Quand ? vendredi à 18 h.
Ce qui est prévu : chaque élève jouera un morceau court.
Participation : Entrée libre pour deux proches.
Bouton à utiliser : arriver avec l'instrument accordé. Aide : secretariat.musique@ville.fr.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.`;

const E10_3_CE_8_POOL = buildExpressPool("e10-3-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["École de Musique", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "École",
    vfQ: "Le message vient de École de Musique.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une audition de fin d'année", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "audition",
    vfQ: "Le texte parle de une audition de fin d'année.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["auditorium du conservatoire", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "auditorium",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 18 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["chaque élève jouera un morceau court", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "chaque",
    vfQ: "Le texte précise que chaque élève jouera un morceau court.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["arriver avec l'instrument accordé", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "arriver",
    vfQ: "Il faut arriver avec l'instrument accordé.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["secretariat.musique@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "secretariat",
    vfQ: "Le contact indiqué est secretariat.musique@ville.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_9_TEXT = `Flyer distribué au quartier — Association Culture Plus

Envie de sortir ?
une conférence sur les jardins urbains est ouvert aux voisins.
Accueil à salle Victor-Schœlcher.
Rendez-vous lundi à 18 h 30.
la conférencière répondra aux questions à la fin. Participation conseillée : 3 €.
Pour participer : réserver car la salle est petite. Contact : cultureplus@asso.fr.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.`;

const E10_3_CE_9_POOL = buildExpressPool("e10-3-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Association Culture Plus", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "Le message vient de Association Culture Plus.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une conférence sur les jardins urbains", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "conférence",
    vfQ: "Le texte parle de une conférence sur les jardins urbains.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle Victor-Schœlcher", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["lundi à 18 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "lundi",
    vfQ: "Le moment indiqué est lundi à 18 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["la conférencière répondra aux questions à la fin", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "conférencière",
    vfQ: "Le texte précise que la conférencière répondra aux questions à la fin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["réserver car la salle est petite", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "réserver",
    vfQ: "Il faut réserver car la salle est petite.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["cultureplus@asso.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "cultureplus@asso",
    vfQ: "Le contact indiqué est cultureplus@asso.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_10_TEXT = `Mémo pour les familles — Parents de CM2

Information importante : la kermesse de fin d'année.
Les familles se présentent à cour de l'école Jean-Moulin.
Le créneau retenu est samedi à 14 h.
les jeux ouvriront après le spectacle des élèves.
Chaque famille apporte un gâteau étiqueté.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Merci de s'inscrire pour tenir un stand; contact : cahier de liaison.`;

const E10_3_CE_10_POOL = buildExpressPool("e10-3-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Parents de CM2", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Parents",
    vfQ: "Le message vient de Parents de CM2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["la kermesse de fin d'année", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "kermesse",
    vfQ: "Le texte parle de la kermesse de fin d'année.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["cour de l'école Jean-Moulin", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "cour",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 14 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les jeux ouvriront après le spectacle des élèves", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "jeux",
    vfQ: "Le texte précise que les jeux ouvriront après le spectacle des élèves.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["s'inscrire pour tenir un stand", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "s'inscrire",
    vfQ: "Il faut s'inscrire pour tenir un stand.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["cahier de liaison", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "cahier",
    vfQ: "Le contact indiqué est cahier de liaison.",
    vfC: 0,
  }),
]);

const E10_3_CE_11_TEXT = `Annonce au micro — Cinéma Rex

Attention, une information concerne une projection débat.
Les personnes intéressées vont à salle 2 du cinéma Rex.
L'activité commence jeudi à 20 h.
le réalisateur participera par visioconférence.
Il faut aussi noter : Tarif unique : 6 €.
Dernière étape : acheter la place en avance. Contact : contact@cinemarex.fr.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.`;

const E10_3_CE_11_POOL = buildExpressPool("e10-3-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Cinéma Rex", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Cinéma",
    vfQ: "Le message vient de Cinéma Rex.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une projection débat", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "projection",
    vfQ: "Le texte parle de une projection débat.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle 2 du cinéma Rex", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jeudi à 20 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi à 20 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le réalisateur participera par visioconférence", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "réalisateur",
    vfQ: "Le texte précise que le réalisateur participera par visioconférence.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["acheter la place en avance", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "acheter",
    vfQ: "Il faut acheter la place en avance.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["contact@cinemarex.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "contact@cinemarex",
    vfQ: "Le contact indiqué est contact@cinemarex.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_12_TEXT = `Post sur le réseau du quartier — Office du Tourisme

Inès recommande une visite guidée nocturne.
Le groupe se donne rendez-vous à devant la tour de l'Horloge.
Moment choisi : vendredi à 21 h.
le guide racontera trois légendes locales.
Lampe de poche recommandée.
Répondez au message pour réserver avant mercredi midi. Contact : tourisme@ville.fr.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.`;

const E10_3_CE_12_POOL = buildExpressPool("e10-3-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Office du Tourisme", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Office",
    vfQ: "Le message vient de Office du Tourisme.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une visite guidée nocturne", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "visite",
    vfQ: "Le texte parle de une visite guidée nocturne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["devant la tour de l'Horloge", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "devant",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 21 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 21 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le guide racontera trois légendes locales", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "guide",
    vfQ: "Le texte précise que le guide racontera trois légendes locales.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["réserver avant mercredi midi", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "réserver",
    vfQ: "Il faut réserver avant mercredi midi.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["tourisme@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "tourisme@ville",
    vfQ: "Le contact indiqué est tourisme@ville.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_13_TEXT = `Invitation imprimée — Chorale Arc-en-Ciel

Nous serons heureux de vous accueillir.
Programme : un concert participatif.
Adresse : église Saint-Luc.
Début prévu dimanche à 16 h.
le public chantera le dernier refrain.
Réponse demandée : arriver avant la fermeture des portes. Contact : chorale.arc@mail.fr.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.`;

const E10_3_CE_13_POOL = buildExpressPool("e10-3-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Chorale Arc-en-Ciel", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Chorale",
    vfQ: "Le message vient de Chorale Arc-en-Ciel.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un concert participatif", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "concert",
    vfQ: "Le texte parle de un concert participatif.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["église Saint-Luc", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "église",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["dimanche à 16 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "dimanche",
    vfQ: "Le moment indiqué est dimanche à 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le public chantera le dernier refrain", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "public",
    vfQ: "Le texte précise que le public chantera le dernier refrain.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["arriver avant la fermeture des portes", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "arriver",
    vfQ: "Il faut arriver avant la fermeture des portes.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["chorale.arc@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "chorale",
    vfQ: "Le contact indiqué est chorale.arc@mail.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_14_TEXT = `Compte rendu court — Librairie Pages Ouvertes

La réunion a confirmé une séance de dédicace.
Le lieu retenu est librairie, espace jeunesse.
La date choisie est samedi à 11 h.
l'autrice signera son album après la lecture.
Livre disponible sur place à 12 €.
Prochaine action : demander un ticket d'attente. Contact : librairie.pages@net.fr.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.`;

const E10_3_CE_14_POOL = buildExpressPool("e10-3-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Librairie Pages Ouvertes", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Librairie",
    vfQ: "Le message vient de Librairie Pages Ouvertes.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une séance de dédicace", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "séance",
    vfQ: "Le texte parle de une séance de dédicace.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["librairie, espace jeunesse", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "librairie",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 11 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 11 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["l'autrice signera son album après la lecture", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "l'autrice",
    vfQ: "Le texte précise que l'autrice signera son album après la lecture.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["demander un ticket d'attente", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "demander",
    vfQ: "Il faut demander un ticket d'attente.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["librairie.pages@net.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "librairie",
    vfQ: "Le contact indiqué est librairie.pages@net.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_15_TEXT = `Encart dans le journal de l'école — Collectif Étudiants

À noter cette semaine : une soirée internationale.
Tout se passe à foyer universitaire.
Le rendez-vous est mercredi à 19 h.
chaque table présentera un pays.
Apporter un petit plat si possible.
Les lecteurs doivent indiquer le pays choisi. Contact : collectif.etudiants@mail.fr.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.`;

const E10_3_CE_15_POOL = buildExpressPool("e10-3-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Collectif Étudiants", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Collectif",
    vfQ: "Le message vient de Collectif Étudiants.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une soirée internationale", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "soirée",
    vfQ: "Le texte parle de une soirée internationale.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["foyer universitaire", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "foyer",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mercredi à 19 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mercredi",
    vfQ: "Le moment indiqué est mercredi à 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["chaque table présentera un pays", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "chaque",
    vfQ: "Le texte précise que chaque table présentera un pays.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["indiquer le pays choisi", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "indiquer",
    vfQ: "Il faut indiquer le pays choisi.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["collectif.etudiants@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "collectif",
    vfQ: "Le contact indiqué est collectif.etudiants@mail.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_16_TEXT = `Message vocal retranscrit — Service Culture

Bonjour Maëlle, voici les informations.
On maintient une exposition photo en plein air.
Retrouvons-nous à grilles du parc central.
L'heure reste mardi à 12 h.
les photos resteront visibles pendant trois semaines.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Merci de respecter le sens de visite. Contact : culture@ville.fr.`;

const E10_3_CE_16_POOL = buildExpressPool("e10-3-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Service Culture", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Service",
    vfQ: "Le message vient de Service Culture.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une exposition photo en plein air", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "exposition",
    vfQ: "Le texte parle de une exposition photo en plein air.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["grilles du parc central", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "grilles",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mardi à 12 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mardi",
    vfQ: "Le moment indiqué est mardi à 12 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les photos resteront visibles pendant trois semaines", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "photos",
    vfQ: "Le texte précise que les photos resteront visibles pendant trois semaines.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["respecter le sens de visite", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "respecter",
    vfQ: "Il faut respecter le sens de visite.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["culture@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "culture@ville",
    vfQ: "Le contact indiqué est culture@ville.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_17_TEXT = `Programme de la semaine — Club Cyclo

Activité principale : une course lente et familiale.
Salle ou adresse : piste du stade municipal.
Créneau : dimanche à 10 h 30.
le gagnant sera le dernier sans poser le pied.
Casque obligatoire pour tous.
Pour valider sa place, vérifier les freins du vélo. Contact : clubcyclo@asso.fr.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.`;

const E10_3_CE_17_POOL = buildExpressPool("e10-3-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Club Cyclo", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "Le message vient de Club Cyclo.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une course lente et familiale", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "course",
    vfQ: "Le texte parle de une course lente et familiale.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["piste du stade municipal", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "piste",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["dimanche à 10 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "dimanche",
    vfQ: "Le moment indiqué est dimanche à 10 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le gagnant sera le dernier sans poser le pied", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "gagnant",
    vfQ: "Le texte précise que le gagnant sera le dernier sans poser le pied.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["vérifier les freins du vélo", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "vérifier",
    vfQ: "Il faut vérifier les freins du vélo.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["clubcyclo@asso.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "clubcyclo@asso",
    vfQ: "Le contact indiqué est clubcyclo@asso.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_18_TEXT = `Petit mot sur le cahier — Atelier Théâtre

Bonjour,
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Merci de lire l'information sur une soirée d'improvisation.
Le lieu indiqué est salle noire de la MJC.
La date est vendredi à 20 h 30.
le public proposera des mots au début.
Participation : 5 €. Action demandée : réserver par message. Contact : theatre.mjc@mail.fr.`;

const E10_3_CE_18_POOL = buildExpressPool("e10-3-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Atelier Théâtre", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Atelier",
    vfQ: "Le message vient de Atelier Théâtre.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une soirée d'improvisation", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "soirée",
    vfQ: "Le texte parle de une soirée d'improvisation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle noire de la MJC", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 20 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 20 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le public proposera des mots au début", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "public",
    vfQ: "Le texte précise que le public proposera des mots au début.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["réserver par message", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "réserver",
    vfQ: "Il faut réserver par message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["theatre.mjc@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "theatre",
    vfQ: "Le contact indiqué est theatre.mjc@mail.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_19_TEXT = `Publication du club — Comité Jumelage

un accueil de visiteurs italiens aura bientôt lieu.
Les membres entrent par hall de la gare.
Accueil jeudi à 16 h 20.
les familles porteront un badge bleu.
Prévoir un ticket de bus pour le retour.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci de envoyer votre numéro de téléphone; renseignements : jumelage@ville.fr.`;

const E10_3_CE_19_POOL = buildExpressPool("e10-3-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Comité Jumelage", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Comité",
    vfQ: "Le message vient de Comité Jumelage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un accueil de visiteurs italiens", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "accueil",
    vfQ: "Le texte parle de un accueil de visiteurs italiens.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["hall de la gare", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "hall",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jeudi à 16 h 20", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi à 16 h 20.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les familles porteront un badge bleu", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "familles",
    vfQ: "Le texte précise que les familles porteront un badge bleu.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["envoyer votre numéro de téléphone", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "envoyer",
    vfQ: "Il faut envoyer votre numéro de téléphone.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["jumelage@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "jumelage@ville",
    vfQ: "Le contact indiqué est jumelage@ville.fr.",
    vfC: 0,
  }),
]);

const E10_3_CE_20_TEXT = `Avis affiché à la porte — Marché des Créateurs

Changement ou rappel : l'installation des exposants.
L'adresse à retenir est halle couverte du marché.
Le moment à retenir est samedi à 7 h 30.
les voitures doivent partir avant 9 h.
Condition pratique : Table fournie, rallonge non fournie.
Avant la date, imprimer votre autorisation. Contact : createurs@marche.fr.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.`;

const E10_3_CE_20_POOL = buildExpressPool("e10-3-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Marché des Créateurs", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Marché",
    vfQ: "Le message vient de Marché des Créateurs.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["l'installation des exposants", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "l'installation",
    vfQ: "Le texte parle de l'installation des exposants.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["halle couverte du marché", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "halle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 7 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 7 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les voitures doivent partir avant 9 h", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "voitures",
    vfQ: "Le texte précise que les voitures doivent partir avant 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["imprimer votre autorisation", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "imprimer",
    vfQ: "Il faut imprimer votre autorisation.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["createurs@marche.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "createurs@marche",
    vfQ: "Le contact indiqué est createurs@marche.fr.",
    vfC: 0,
  }),
]);

export const E10_3_CE: CommunicationExercise[] = [
readingPoolExercise({
  id: "e10-3-ce",
  readingText: E10_3_CE_TEXT,
  questionPool: E10_3_CE_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-2",
  readingText: E10_3_CE_2_TEXT,
  questionPool: E10_3_CE_2_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-3",
  readingText: E10_3_CE_3_TEXT,
  questionPool: E10_3_CE_3_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-4",
  readingText: E10_3_CE_4_TEXT,
  questionPool: E10_3_CE_4_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-5",
  readingText: E10_3_CE_5_TEXT,
  questionPool: E10_3_CE_5_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-6",
  readingText: E10_3_CE_6_TEXT,
  questionPool: E10_3_CE_6_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-7",
  readingText: E10_3_CE_7_TEXT,
  questionPool: E10_3_CE_7_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-8",
  readingText: E10_3_CE_8_TEXT,
  questionPool: E10_3_CE_8_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-9",
  readingText: E10_3_CE_9_TEXT,
  questionPool: E10_3_CE_9_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-10",
  readingText: E10_3_CE_10_TEXT,
  questionPool: E10_3_CE_10_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-11",
  readingText: E10_3_CE_11_TEXT,
  questionPool: E10_3_CE_11_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-12",
  readingText: E10_3_CE_12_TEXT,
  questionPool: E10_3_CE_12_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-13",
  readingText: E10_3_CE_13_TEXT,
  questionPool: E10_3_CE_13_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-14",
  readingText: E10_3_CE_14_TEXT,
  questionPool: E10_3_CE_14_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-15",
  readingText: E10_3_CE_15_TEXT,
  questionPool: E10_3_CE_15_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-16",
  readingText: E10_3_CE_16_TEXT,
  questionPool: E10_3_CE_16_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-17",
  readingText: E10_3_CE_17_TEXT,
  questionPool: E10_3_CE_17_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-18",
  readingText: E10_3_CE_18_TEXT,
  questionPool: E10_3_CE_18_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-19",
  readingText: E10_3_CE_19_TEXT,
  questionPool: E10_3_CE_19_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-3-ce-20",
  readingText: E10_3_CE_20_TEXT,
  questionPool: E10_3_CE_20_POOL,
  questionCount: 6,
}),
];

const E10_3_ORGANISATEUR = { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" };
const E10_3_AMI = { title: "L'ami qui aide", vous: "l'ami / l'amie qui aide" };

export const E10_3_PO: ExpressPoDialogue[] = [

  {
    id: "e10-3-po-1",
    title: "Répartir les tâches du mariage",
    context: "Vous organisez un mariage avec un ami et vous répartissez les tâches.",
    roleA: E10_3_ORGANISATEUR,
    roleB: E10_3_AMI,
    lines: [
      { role: "A", text: "Le mariage approche ! Qui s'occupera de la musique ?" },
      { role: "B", text: "Moi, je m'en occuperai. J'ai déjà une liste de chansons." },
      { role: "A", text: "Parfait. Et pour les fleurs ?" },
      { role: "B", text: "Ma sœur les achètera samedi matin chez le fleuriste." },
      { role: "A", text: "Super. Mes cousins viendront vendredi pour la décoration." },
      { role: "B", text: "Très bien. Et le buffet ?" },
      { role: "A", text: "Nous le préparerons ensemble samedi matin, à partir de 9 h." },
      { role: "B", text: "D'accord, ce sera une belle fête !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-3-po-2",
    title: "Réserver la salle des fêtes",
    context: "Vous téléphonez à la mairie pour réserver une salle.",
    roleA: { title: "L'employé de la mairie", vous: "l'employé(e) de la mairie" },
    roleB: E10_3_ORGANISATEUR,
    lines: [
      { role: "A", text: "Mairie, service des réservations, bonjour !" },
      { role: "B", text: "Bonjour, je voudrais réserver la salle des fêtes pour un anniversaire." },
      { role: "A", text: "Oui, pour quelle date ?" },
      { role: "B", text: "Le samedi 12 mars, pour environ cinquante personnes." },
      { role: "A", text: "La salle est libre ce jour-là. Elle coûte 150 euros la journée." },
      { role: "B", text: "Très bien. La salle a une cuisine ?" },
      { role: "A", text: "Oui, avec un frigo et un four. Vous rendrez les clés le dimanche matin." },
      { role: "B", text: "Parfait, je la réserve. Merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-3-po-3",
    title: "Commander un gâteau",
    context: "Vous commandez un gâteau de mariage chez le pâtissier.",
    roleA: { title: "Le pâtissier", vous: "le pâtissier / la pâtissière" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour ! Qu'est-ce qu'il vous faut ?" },
      { role: "B", text: "Bonjour, je voudrais commander un gâteau pour un mariage." },
      { role: "A", text: "Bien sûr ! Pour combien de personnes ?" },
      { role: "B", text: "Pour quatre-vingts personnes, samedi prochain." },
      { role: "A", text: "D'accord. Vous préférez chocolat, fraise ou vanille ?" },
      { role: "B", text: "Fraise, s'il vous plaît. Vous pourrez le livrer à la salle des fêtes ?" },
      { role: "A", text: "Oui, nous le livrerons samedi à 14 h." },
      { role: "B", text: "Parfait, merci ! Je passerai payer jeudi." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-3-po-4",
    title: "Un anniversaire surprise",
    context: "Vous organisez une fête surprise et vous demandez de l'aide à un ami.",
    roleA: E10_3_ORGANISATEUR,
    roleB: E10_3_AMI,
    lines: [
      { role: "A", text: "J'organise un anniversaire surprise pour Emma samedi. Tu m'aideras ?" },
      { role: "B", text: "Bien sûr ! Qu'est-ce que je devrai faire ?" },
      { role: "A", text: "Tu l'emmèneras au café pendant qu'on préparera la salle." },
      { role: "B", text: "D'accord. Et vous, vous ferez quoi ?" },
      { role: "A", text: "Nous décorerons le salon et nous préparerons le buffet." },
      { role: "B", text: "À quelle heure je devrai revenir avec elle ?" },
      { role: "A", text: "À 18 h précises. On criera tous « Surprise ! »." },
      { role: "B", text: "Génial ! Elle sera tellement contente !" },
      { role: "A", text: "L'addition s'il vous plaît." },
      { role: "B", text: "Tout de suite !" },
],
  },
  {
    id: "e10-3-po-5",
    title: "Trouver des musiciens",
    context: "Vous appelez un groupe de musique pour animer la fête.",
    roleA: E10_3_ORGANISATEUR,
    roleB: { title: "Le musicien", vous: "le musicien / la musicienne" },
    lines: [
      { role: "A", text: "Allô, bonjour ! Vous êtes bien le groupe Jazz et Compagnie ?" },
      { role: "B", text: "Oui, bonjour ! Que puis-je faire pour vous ?" },
      { role: "A", text: "Nous organisons un mariage le 12 juin. Vous serez disponibles ?" },
      { role: "B", text: "Le 12 juin… oui, nous sommes libres ce soir-là." },
      { role: "A", text: "Super ! Vous jouerez combien de temps ?" },
      { role: "B", text: "Trois heures, avec une pause. Nous arriverons à 14 h pour installer." },
      { role: "A", text: "Parfait. Vous pourrez m'envoyer le prix par e-mail ?" },
      { role: "B", text: "Bien sûr, je vous l'enverrai ce soir." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-3-po-6",
    title: "Prévoir le buffet",
    context: "Vous préparez le buffet de la fête avec un ami.",
    roleA: E10_3_ORGANISATEUR,
    roleB: E10_3_AMI,
    lines: [
      { role: "A", text: "Pour le buffet de la fête, qu'est-ce qu'on préparera ?" },
      { role: "B", text: "Des salades, des quiches et un grand plateau de fromages." },
      { role: "A", text: "Bonne idée. Qui achètera les boissons ?" },
      { role: "B", text: "Moi, j'irai au supermarché vendredi soir." },
      { role: "A", text: "Parfait. Et pour le dessert ?" },
      { role: "B", text: "Ma mère fera deux gâteaux au chocolat." },
      { role: "A", text: "Génial ! Nous installerons les tables samedi à 10 h." },
      { role: "B", text: "D'accord, je viendrai t'aider avec ma voiture." },
      { role: "A", text: "Super, merci beaucoup." },
      { role: "B", text: "Avec plaisir. Bonne continuation !" },
],
  },
  {
    id: "e10-3-po-7",
    title: "Envoyer les invitations",
    context: "Vous préparez la liste des invités et les invitations avec votre conjoint(e).",
    roleA: E10_3_ORGANISATEUR,
    roleB: { title: "Le conjoint", vous: "le conjoint / la conjointe" },
    lines: [
      { role: "A", text: "Tu as préparé les invitations pour la fête ?" },
      { role: "B", text: "Oui, je les enverrai demain par e-mail." },
      { role: "A", text: "Combien de personnes est-ce qu'on invitera ?" },
      { role: "B", text: "Une quarantaine, avec les collègues et les voisins." },
      { role: "A", text: "N'oublie pas de demander une réponse avant le 15." },
      { role: "B", text: "C'est noté. Je demanderai aussi qui vient avec des enfants." },
      { role: "A", text: "Bonne idée, on préparera un coin jeux pour eux." },
      { role: "B", text: "Parfait, je m'en occupe ce soir !" },
      { role: "A", text: "Bon courage pour la suite !" },
      { role: "B", text: "Merci, toi aussi !" },
],
  },
  {
    id: "e10-3-po-8",
    title: "Une baby-sitter pour le soir du mariage",
    context: "Vous rencontrez la baby-sitter qui gardera votre fils le soir de la fête.",
    roleA: { title: "La baby-sitter", vous: "le/la baby-sitter" },
    roleB: { title: "Le parent", vous: "le parent" },
    lines: [
      { role: "A", text: "Bonjour, je viens pour l'annonce de baby-sitting samedi soir." },
      { role: "B", text: "Bonjour ! Oui, nous irons à un mariage et nous rentrerons tard." },
      { role: "A", text: "Pas de problème. À quelle heure est-ce que je devrai arriver ?" },
      { role: "B", text: "À 17 h. Théo finira ses devoirs, puis vous pourrez jouer avec lui." },
      { role: "A", text: "D'accord. Et pour le repas ?" },
      { role: "B", text: "Vous trouverez le dîner dans le frigo. Il se couchera à 20 h 30." },
      { role: "A", text: "Très bien. Vous me laisserez un numéro de téléphone ?" },
      { role: "B", text: "Oui, je vous écrirai tout sur un papier. Merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-3-po-9",
    title: "La fête de quartier",
    context: "Vous invitez un voisin à participer à la fête de quartier.",
    roleA: E10_3_ORGANISATEUR,
    roleB: { title: "Le voisin", vous: "le voisin / la voisine" },
    lines: [
      { role: "A", text: "Bonjour ! Vous viendrez à la fête de quartier le mois prochain ?" },
      { role: "B", text: "Bonne question… C'est quand exactement ?" },
      { role: "A", text: "Le premier samedi de juin, sur la place. Chacun apportera un plat." },
      { role: "B", text: "Ah, c'est sympa ! Je préparerai une spécialité de mon pays." },
      { role: "A", text: "Excellente idée ! Vous pourrez aussi aider à installer les tables ?" },
      { role: "B", text: "Oui, bien sûr. À quelle heure il faudra venir ?" },
      { role: "A", text: "À 10 h du matin. La fête commencera à midi." },
      { role: "B", text: "Très bien, comptez sur moi !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-3-po-10",
    title: "Changer la date de la fête",
    context: "La salle n'est plus disponible : vous devez changer la date avec un ami.",
    roleA: E10_3_ORGANISATEUR,
    roleB: E10_3_AMI,
    lines: [
      { role: "A", text: "Allô ? J'ai un problème pour la fête de samedi." },
      { role: "B", text: "Ah bon ? Qu'est-ce qui se passe ?" },
      { role: "A", text: "La salle ne sera pas libre, il y a eu une erreur de réservation." },
      { role: "B", text: "Oh non ! Qu'est-ce qu'on va faire ?" },
      { role: "A", text: "La mairie propose le samedi suivant, le 19." },
      { role: "B", text: "Le 19, ça marche pour moi. Mais il faudra prévenir tout le monde !" },
      { role: "A", text: "Oui, j'enverrai un message au groupe ce soir." },
      { role: "B", text: "D'accord, et moi j'appellerai le pâtissier pour changer la commande." },
      { role: "A", text: "Parfait, j'ai toutes les infos." },
      { role: "B", text: "Super. À bientôt !" },
],
  },
{
  id: "e10-3-po-11",
  title: "Demander une information sur un événement",
  context: "Vous voulez le marché de printemps.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour le marché de printemps." },
    { role: "A", text: "Bien sûr. Il ouvre samedi à 10 heures." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui, c'est conseillé. L'entrée est gratuite." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e10-3-po-12",
  title: "Expliquer un problème avec un événement",
  context: "Vous expliquez un problème : mon billet ne s'affiche pas.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : mon billet ne s'affiche pas." },
    { role: "A", text: "Je comprends. Je peux chercher avec votre nom." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Vous êtes bien inscrit." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
{
  id: "e10-3-po-13",
  title: "Prendre rendez-vous pour un événement",
  context: "Vous voulez prendre rendez-vous pour préparer le stand de l'association.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais préparer le stand de l'association." },
    { role: "A", text: "Je peux vous proposer vendredi à 17 heures." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "Parfait. Nous apportons les affiches." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
{
  id: "e10-3-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous confirmez ceci : ma participation au concert.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme ma participation au concert." },
    { role: "A", text: "Très bien. C'est bien je viens avec deux amis ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "Nous arriverons avant 20 heures." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
{
  id: "e10-3-po-15",
  title: "Demander conseil sur un événement",
  context: "Vous demandez conseil pour choisir entre deux événements ce week-end.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour choisir entre deux événements ce week-end." },
    { role: "A", text: "Le festival est dehors." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "Le spectacle est à l'intérieur." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
{
  id: "e10-3-po-16",
  title: "Signaler un retard",
  context: "Vous signalez un retard : je serai en retard pour installer la salle.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : je serai en retard pour installer la salle." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "Je finis le travail à 18 heures." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "Je viens directement après." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e10-3-po-17",
  title: "Faire une réclamation polie",
  context: "Vous faites une réclamation : la musique était trop forte près des enfants.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : la musique était trop forte près des enfants." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "Plusieurs familles sont parties." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Pouvez-vous prévoir un espace calme ?" },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
{
  id: "e10-3-po-18",
  title: "Demander une aide urgente",
  context: "Vous devez demander une aide urgente : savoir si l'événement est annulé à cause de la pluie.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour savoir si l'événement est annulé à cause de la pluie." },
    { role: "A", text: "Il est maintenu sous la halle." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Prenez une veste." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
{
  id: "e10-3-po-19",
  title: "Comparer deux possibilités",
  context: "Vous comparez deux options : un billet journée et un billet soirée.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare un billet journée et un billet soirée." },
    { role: "A", text: "Le billet journée donne accès aux ateliers." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "Le billet soirée est moins cher." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
{
  id: "e10-3-po-20",
  title: "Remercier pour une aide",
  context: "Vous remerciez pour une aide : l'organisation de la fête.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour l'organisation de la fête." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "Tout était clair et agréable." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "Mes enfants ont beaucoup aimé." },
    { role: "A", text: "N'hésitez pas à revenir si besoin." },
    { role: "B", text: "Oui, je le ferai." },
    { role: "A", text: "Bonne continuation !" },
    { role: "B", text: "Merci, à vous aussi." },
  ],
}
];

export const E10_3_PE: ExpressPePrompt[] = [

  {
    id: "e10-3-pe-1",
    title: "L'invitation au mariage",
    situation: "Vous vous mariez cet été et vous invitez vos amis.",
    instruction: "Écrivez le message d'invitation : donnez la date et le lieu, décrivez le programme de la journée et demandez une réponse avant une date précise.",
    points: ["La date et le lieu", "Le programme", "La demande de réponse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pe-2",
    title: "Le planning des préparatifs",
    situation: "Vous organisez une grande fête et vous préparez la liste des choses à faire.",
    instruction: "Écrivez le planning au futur : ce que vous ferez chaque jour de la semaine avant la fête, et qui vous aidera.",
    points: ["Les tâches principales", "Qui fera quoi", "Les jours et les heures"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pe-3",
    title: "Répartir les tâches",
    situation: "Vous organisez l'anniversaire d'un ami avec trois autres personnes.",
    instruction: "Écrivez un message au groupe : proposez qui s'occupera de la musique, du buffet et de la décoration.",
    points: ["La musique", "Le buffet", "La décoration"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pe-4",
    title: "Réserver une salle",
    situation: "Vous voulez réserver la salle des fêtes de votre ville pour un anniversaire.",
    instruction: "Écrivez un e-mail à la mairie : présentez votre projet, donnez la date et le nombre d'invités, et posez des questions sur le prix et la cuisine.",
    points: ["La date et le nombre d'invités", "Vos questions", "La formule de politesse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pe-5",
    title: "Un événement réussi",
    situation: "Vous avez organisé une fête le mois dernier.",
    instruction: "Racontez : ce que vous avez préparé, comment la fête s'est passée et ce que vous changerez la prochaine fois.",
    points: ["Les préparatifs", "Le déroulement de la fête", "Ce que vous changerez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pe-6",
    title: "Commander le gâteau",
    situation: "Vous commandez un gâteau pour les 60 ans de votre mère.",
    instruction: "Écrivez un message au pâtissier : décrivez le gâteau (taille, parfum), donnez la date et demandez le prix et la livraison.",
    points: ["La description du gâteau", "La date", "Le prix et la livraison"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pe-7",
    title: "Le programme des invités",
    situation: "Des invités viennent de loin pour votre fête et resteront tout le week-end.",
    instruction: "Écrivez-leur le programme du week-end au futur : l'arrivée, le jour de la fête et le lendemain.",
    points: ["L'arrivée", "Le jour de la fête", "Le lendemain"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pe-8",
    title: "Changement de date",
    situation: "Vous devez changer la date de votre fête à cause d'un problème de salle.",
    instruction: "Écrivez un message aux invités : excusez-vous, expliquez le problème et donnez la nouvelle date.",
    points: ["L'excuse", "L'explication", "La nouvelle date"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pe-9",
    title: "Merci à tous !",
    situation: "Votre fête est finie et beaucoup d'amis vous ont aidé(e).",
    instruction: "Écrivez un message de remerciement au groupe : remerciez chacun pour son aide et rappelez un bon moment de la fête.",
    points: ["Le remerciement", "L'aide de chacun", "Un bon souvenir"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pe-10",
    title: "La fête de vos rêves",
    situation: "Un magazine organise un concours : « Décrivez la fête de vos rêves ».",
    instruction: "Décrivez au futur la fête que vous organiserez un jour : le lieu, les invités et le programme.",
    points: ["Le lieu", "Les invités", "Le programme"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e10-3-pe-11",
  title: "Décrire une expérience — événements",
  situation: "Vous avez vécu une situation importante liée à événements.",
  instruction: "Racontez cette expérience : le contexte, ce qui s'est passé et le résultat.",
  points: ["Le contexte", "Les événements principaux", "Le résultat"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-3-pe-12",
  title: "Demander des informations — événements",
  situation: "Vous avez besoin d'informations sur événements.",
  instruction: "Écrivez un message formel : présentez-vous, posez trois questions précises et remerciez.",
  points: ["Votre présentation", "Trois questions", "Formule de politesse"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-3-pe-13",
  title: "Donner votre avis — événements",
  situation: "On vous demande votre avis sur événements.",
  instruction: "Exprimez votre opinion : avantages, inconvénients et recommandation.",
  points: ["Les points positifs", "Les points négatifs", "Votre recommandation"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-3-pe-14",
  title: "Raconter un problème — événements",
  situation: "Vous avez rencontré un problème avec événements.",
  instruction: "Décrivez le problème, ce que vous avez fait et ce que vous attendez maintenant.",
  points: ["Le problème", "Vos actions", "Votre attente"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-3-pe-15",
  title: "Proposer une solution — événements",
  situation: "Un ami a un souci lié à événements.",
  instruction: "Écrivez-lui un message avec deux conseils pratiques et une offre d'aide.",
  points: ["Deux conseils", "Votre offre d'aide", "Formule amicale"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-3-pe-16",
  title: "Comparer deux options — événements",
  situation: "Vous hésitez entre deux choix pour événements.",
  instruction: "Listez les avantages et inconvénients de chaque option et indiquez votre préférence.",
  points: ["Option A", "Option B", "Votre choix"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-3-pe-17",
  title: "Planifier une démarche — événements",
  situation: "Vous devez organiser une démarche liée à événements.",
  instruction: "Écrivez un plan avec les étapes, les documents nécessaires et les délais.",
  points: ["Les étapes", "Les documents", "Les délais"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-3-pe-18",
  title: "Remercier — événements",
  situation: "Quelqu'un vous a aidé(e) pour événements.",
  instruction: "Écrivez un message de remerciement : rappelez l'aide reçue et proposez de rendre la pareille.",
  points: ["L'aide reçue", "Votre gratitude", "Votre proposition"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-3-pe-19",
  title: "Informer — événements",
  situation: "Vous devez informer un proche d'une nouvelle sur événements.",
  instruction: "Écrivez un message clair avec les faits importants et une question pour lui.",
  points: ["Les informations clés", "Les détails pratiques", "Une question"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-3-pe-20",
  title: "Bilan personnel — événements",
  situation: "Vous faites le bilan de votre expérience avec événements.",
  instruction: "Rédigez un texte : ce que vous avez appris, ce qui reste à faire et vos objectifs.",
  points: ["Ce que vous avez appris", "Ce qui reste à faire", "Vos objectifs"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.4 — Participer à la vie scolaire
   ════════════════════════════════════════════════════════════════════════════ */

const E10_4_CE_TEXT = `Affiche — École Jean-Moulin

la réunion parents-professeurs.
Lieu : salle polyvalente de l'école.
Date : mardi à 18 h.
les familles entreront par le portail vert.
Bulletin du trimestre à apporter.
À faire : prendre un créneau avec le professeur principal. Contact : pronote de la classe.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.`;

const E10_4_CE_POOL = buildExpressPool("e10-4-ce", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["École Jean-Moulin", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "École",
    vfQ: "Le message vient de École Jean-Moulin.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["la réunion parents-professeurs", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "réunion",
    vfQ: "Le texte parle de la réunion parents-professeurs.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle polyvalente de l'école", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mardi à 18 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mardi",
    vfQ: "Le moment indiqué est mardi à 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les familles entreront par le portail vert", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "familles",
    vfQ: "Le texte précise que les familles entreront par le portail vert.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["prendre un créneau avec le professeur principal", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "prendre",
    vfQ: "Il faut prendre un créneau avec le professeur principal.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["pronote de la classe", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "pronote",
    vfQ: "Le contact indiqué est pronote de la classe.",
    vfC: 0,
  }),
]);

const E10_4_CE_2_TEXT = `SMS — Collège Victor-Hugo à M. Lopez

Bonjour M. Lopez, petit rappel : une sortie au musée d'histoire.
On se retrouve jeudi à 8 h 15.
Adresse : devant le collège.
le retour est prévu avant la fin des cours.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Merci de signer l'autorisation parentale. Réponse : vie scolaire.`;

const E10_4_CE_2_POOL = buildExpressPool("e10-4-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Collège Victor-Hugo", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Collège",
    vfQ: "Le message vient de Collège Victor-Hugo.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une sortie au musée d'histoire", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "sortie",
    vfQ: "Le texte parle de une sortie au musée d'histoire.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["devant le collège", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "devant",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jeudi à 8 h 15", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi à 8 h 15.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le retour est prévu avant la fin des cours", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "retour",
    vfQ: "Le texte précise que le retour est prévu avant la fin des cours.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["signer l'autorisation parentale", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "signer",
    vfQ: "Il faut signer l'autorisation parentale.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["vie scolaire", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "vie",
    vfQ: "Le contact indiqué est vie scolaire.",
    vfC: 0,
  }),
]);

const E10_4_CE_3_TEXT = `Billet dans l'entrée — Association des Parents

Bonjour à tous,
Nous préparons un café d'accueil pour nouvelles familles.
Le rendez-vous est fixé vendredi à 8 h 30, à hall du bâtiment B.
Café offert par l'association.
deux parents expliqueront le fonctionnement de l'école.
Pour aider, merci de confirmer votre présence. Contact : parents.jeanmoulin@mail.fr.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.`;

const E10_4_CE_3_POOL = buildExpressPool("e10-4-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Association des Parents", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "Le message vient de Association des Parents.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un café d'accueil pour nouvelles familles", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "café",
    vfQ: "Le texte parle de un café d'accueil pour nouvelles familles.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["hall du bâtiment B", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "hall",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 8 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 8 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["deux parents expliqueront le fonctionnement de l'école", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "deux",
    vfQ: "Le texte précise que deux parents expliqueront le fonctionnement de l'école.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["confirmer votre présence", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "confirmer",
    vfQ: "Il faut confirmer votre présence.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["parents.jeanmoulin@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "parents",
    vfQ: "Le contact indiqué est parents.jeanmoulin@mail.fr.",
    vfC: 0,
  }),
]);

const E10_4_CE_4_TEXT = `Message de groupe — Cantine Municipale

Adam a partagé une information.
Sujet : le changement de menu de vendredi.
Point de rencontre : restaurant scolaire.
Horaire prévu : vendredi à midi.
le poisson sera remplacé par une omelette.
prévenir en cas d'allergie. Questions : cantine@ville.fr.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.`;

const E10_4_CE_4_POOL = buildExpressPool("e10-4-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Cantine Municipale", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Cantine",
    vfQ: "Le message vient de Cantine Municipale.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["le changement de menu de vendredi", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "changement",
    vfQ: "Le texte parle de le changement de menu de vendredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["restaurant scolaire", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "restaurant",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à midi", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à midi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le poisson sera remplacé par une omelette", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "poisson",
    vfQ: "Le texte précise que le poisson sera remplacé par une omelette.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["prévenir en cas d'allergie", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "prévenir",
    vfQ: "Il faut prévenir en cas d'allergie.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["cantine@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "cantine@ville",
    vfQ: "Le contact indiqué est cantine@ville.fr.",
    vfC: 0,
  }),
]);

const E10_4_CE_5_TEXT = `Brève locale — Professeur de français

un devoir de lecture à rendre est annoncé cette semaine.
Le public est attendu lundi à 9 h.
L'adresse exacte est salle 204.
les élèves doivent écrire dix lignes sur le chapitre 3.
Cahier bleu obligatoire.
Inscription ou question : messagerie ENT; il faut relire le texte avant le cours.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Merci de votre attention et de votre patience.`;

const E10_4_CE_5_POOL = buildExpressPool("e10-4-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Professeur de français", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Professeur",
    vfQ: "Le message vient de Professeur de français.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un devoir de lecture à rendre", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "devoir",
    vfQ: "Le texte parle de un devoir de lecture à rendre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle 204", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["lundi à 9 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "lundi",
    vfQ: "Le moment indiqué est lundi à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les élèves doivent écrire dix lignes sur le chapitre 3", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "élèves",
    vfQ: "Le texte précise que les élèves doivent écrire dix lignes sur le chapitre 3.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["relire le texte avant le cours", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "relire",
    vfQ: "Il faut relire le texte avant le cours.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["messagerie ENT", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "messagerie",
    vfQ: "Le contact indiqué est messagerie ENT.",
    vfC: 0,
  }),
]);

const E10_4_CE_6_TEXT = `Carte d'invitation — École des Platanes

Chère/cher Léo,
Vous êtes invité(e) pour la photo de classe.
Cela aura lieu jeudi à 10 h 20.
Rendez-vous à préau de l'école.
les frères et sœurs seront photographiés après la récréation.
Conservez le numéro de contact indiqué.
Tout le monde est le bienvenu.
À bientôt, et merci de votre lecture.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Merci de rapporter le bon de commande signé. Contact : secrétariat.`;

const E10_4_CE_6_POOL = buildExpressPool("e10-4-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["École des Platanes", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "École",
    vfQ: "Le message vient de École des Platanes.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["la photo de classe", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "photo",
    vfQ: "Le texte parle de la photo de classe.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["préau de l'école", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "préau",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jeudi à 10 h 20", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi à 10 h 20.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les frères et sœurs seront photographiés après la récréation", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "frères",
    vfQ: "Le texte précise que les frères et sœurs seront photographiés après la récréation.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["rapporter le bon de commande signé", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "rapporter",
    vfQ: "Il faut rapporter le bon de commande signé.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["secrétariat", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "secrétariat",
    vfQ: "Le contact indiqué est secrétariat.",
    vfC: 0,
  }),
]);

const E10_4_CE_7_TEXT = `Note pratique — Conseil d'École

Objet : une demande de représentants de parents.
Les participants arrivent à bureau de la directrice.
Début : mardi à 17 h 45.
deux postes sont encore libres.
Prévoir : Réunion prévue quatre fois par an.
Avant de venir, envoyer votre candidature. Contact : direction@ecole.fr.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.`;

const E10_4_CE_7_POOL = buildExpressPool("e10-4-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Conseil d'École", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Conseil",
    vfQ: "Le message vient de Conseil d'École.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une demande de représentants de parents", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "demande",
    vfQ: "Le texte parle de une demande de représentants de parents.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["bureau de la directrice", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "bureau",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mardi à 17 h 45", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mardi",
    vfQ: "Le moment indiqué est mardi à 17 h 45.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["deux postes sont encore libres", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "deux",
    vfQ: "Le texte précise que deux postes sont encore libres.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["envoyer votre candidature", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "envoyer",
    vfQ: "Il faut envoyer votre candidature.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["direction@ecole.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "direction@ecole",
    vfQ: "Le contact indiqué est direction@ecole.fr.",
    vfC: 0,
  }),
]);

const E10_4_CE_8_TEXT = `Page web — Bibliothèque Scolaire

Nouvelle annonce : un prêt de livres pour les vacances.
Où ? salle BCD.
Quand ? vendredi à 15 h.
Ce qui est prévu : chaque élève pourra emprunter deux livres.
Participation : Carte de lecteur à présenter.
Bouton à utiliser : rendre les anciens livres. Aide : bibliotheque.ecole@mail.fr.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Cordialement, et bonne journée.`;

const E10_4_CE_8_POOL = buildExpressPool("e10-4-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Bibliothèque Scolaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Bibliothèque",
    vfQ: "Le message vient de Bibliothèque Scolaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un prêt de livres pour les vacances", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "prêt",
    vfQ: "Le texte parle de un prêt de livres pour les vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle BCD", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 15 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["chaque élève pourra emprunter deux livres", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "chaque",
    vfQ: "Le texte précise que chaque élève pourra emprunter deux livres.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["rendre les anciens livres", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "rendre",
    vfQ: "Il faut rendre les anciens livres.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["bibliotheque.ecole@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "bibliotheque",
    vfQ: "Le contact indiqué est bibliotheque.ecole@mail.fr.",
    vfC: 0,
  }),
]);

const E10_4_CE_9_TEXT = `Flyer distribué au quartier — Club Devoirs

Envie de sortir ?
une aide aux devoirs après la classe est ouvert aux voisins.
Accueil à salle 12 du collège.
Rendez-vous lundi et jeudi à 16 h 45.
les groupes seront limités à huit élèves. Service gratuit sur inscription.
Pour participer : remplir la fiche avec un parent. Contact : cpe du collège.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.`;

const E10_4_CE_9_POOL = buildExpressPool("e10-4-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Club Devoirs", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "Le message vient de Club Devoirs.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une aide aux devoirs après la classe", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "aide",
    vfQ: "Le texte parle de une aide aux devoirs après la classe.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle 12 du collège", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["lundi et jeudi à 16 h 45", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "lundi",
    vfQ: "Le moment indiqué est lundi et jeudi à 16 h 45.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les groupes seront limités à huit élèves", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "groupes",
    vfQ: "Le texte précise que les groupes seront limités à huit élèves.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["remplir la fiche avec un parent", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "remplir",
    vfQ: "Il faut remplir la fiche avec un parent.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["cpe du collège", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "cpe",
    vfQ: "Le contact indiqué est cpe du collège.",
    vfC: 0,
  }),
]);

const E10_4_CE_10_TEXT = `Mémo pour les familles — Équipe EPS

Information importante : la journée sportive de printemps.
Les familles se présentent à stade municipal.
Le créneau retenu est mercredi à 13 h 30.
les classes tourneront sur quatre ateliers.
Bouteille d'eau et casquette demandées.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de venir en tenue de sport; contact : professeur d'EPS.`;

const E10_4_CE_10_POOL = buildExpressPool("e10-4-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Équipe EPS", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Équipe",
    vfQ: "Le message vient de Équipe EPS.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["la journée sportive de printemps", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "journée",
    vfQ: "Le texte parle de la journée sportive de printemps.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["stade municipal", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "stade",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mercredi à 13 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mercredi",
    vfQ: "Le moment indiqué est mercredi à 13 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les classes tourneront sur quatre ateliers", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "classes",
    vfQ: "Le texte précise que les classes tourneront sur quatre ateliers.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["venir en tenue de sport", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "venir",
    vfQ: "Il faut venir en tenue de sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["professeur d'EPS", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "professeur",
    vfQ: "Le contact indiqué est professeur d'EPS.",
    vfC: 0,
  }),
]);

const E10_4_CE_11_TEXT = `Annonce au micro — Secrétariat du lycée

Attention, une information concerne la remise des dossiers de bourse.
Les personnes intéressées vont à bureau 1 du secrétariat.
L'activité commence avant vendredi à 16 h.
les dossiers incomplets seront rendus aux familles.
Il faut aussi noter : Avis d'imposition à joindre.
Dernière étape : déposer le dossier signé. Contact : secretariat.lycee@mail.fr.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.`;

const E10_4_CE_11_POOL = buildExpressPool("e10-4-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Secrétariat du lycée", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Secrétariat",
    vfQ: "Le message vient de Secrétariat du lycée.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["la remise des dossiers de bourse", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "remise",
    vfQ: "Le texte parle de la remise des dossiers de bourse.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["bureau 1 du secrétariat", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "bureau",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["avant vendredi à 16 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "avant",
    vfQ: "Le moment indiqué est avant vendredi à 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les dossiers incomplets seront rendus aux familles", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "dossiers",
    vfQ: "Le texte précise que les dossiers incomplets seront rendus aux familles.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["déposer le dossier signé", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "déposer",
    vfQ: "Il faut déposer le dossier signé.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["secretariat.lycee@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "secretariat",
    vfQ: "Le contact indiqué est secretariat.lycee@mail.fr.",
    vfC: 0,
  }),
]);

const E10_4_CE_12_TEXT = `Post sur le réseau du quartier — Classe de CE2

Mila recommande une collecte de matériel pour les arts.
Le groupe se donne rendez-vous à carton près de la porte de classe.
Moment choisi : jusqu'à mardi matin.
les bouchons et boîtes propres seront utilisés.
Pas de verre ni d'objet coupant.
Répondez au message pour apporter seulement du matériel lavé. Contact : enseignante Mme Roy.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.`;

const E10_4_CE_12_POOL = buildExpressPool("e10-4-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Classe de CE2", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Classe",
    vfQ: "Le message vient de Classe de CE2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une collecte de matériel pour les arts", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "collecte",
    vfQ: "Le texte parle de une collecte de matériel pour les arts.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["carton près de la porte de classe", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "carton",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jusqu'à mardi matin", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jusqu'à",
    vfQ: "Le moment indiqué est jusqu'à mardi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les bouchons et boîtes propres seront utilisés", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "bouchons",
    vfQ: "Le texte précise que les bouchons et boîtes propres seront utilisés.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["apporter seulement du matériel lavé", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "apporter",
    vfQ: "Il faut apporter seulement du matériel lavé.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["enseignante Mme Roy", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "enseignante",
    vfQ: "Le contact indiqué est enseignante Mme Roy.",
    vfC: 0,
  }),
]);

const E10_4_CE_13_TEXT = `Invitation imprimée — Transport Scolaire

Nous serons heureux de vous accueillir.
Programme : un retard possible du car 4.
Adresse : arrêt Les Pins.
Début prévu vendredi à 7 h 40.
des travaux ralentissent la route principale.
Réponse demandée : rester à l'arrêt avec un adulte. Contact : ligne info transport.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.`;

const E10_4_CE_13_POOL = buildExpressPool("e10-4-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Transport Scolaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Transport",
    vfQ: "Le message vient de Transport Scolaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un retard possible du car 4", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "retard",
    vfQ: "Le texte parle de un retard possible du car 4.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["arrêt Les Pins", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "arrêt",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 7 h 40", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 7 h 40.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["des travaux ralentissent la route principale", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "travaux",
    vfQ: "Le texte précise que des travaux ralentissent la route principale.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["rester à l'arrêt avec un adulte", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "rester",
    vfQ: "Il faut rester à l'arrêt avec un adulte.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["ligne info transport", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "ligne",
    vfQ: "Le contact indiqué est ligne info transport.",
    vfC: 0,
  }),
]);

const E10_4_CE_14_TEXT = `Compte rendu court — Infirmerie du collège

La réunion a confirmé une séance sur le sommeil des adolescents.
Le lieu retenu est salle de permanence.
La date choisie est mardi à 14 h.
l'infirmière donnera des conseils simples.
Autorisation nécessaire pour les externes.
Prochaine action : rapporter le coupon réponse. Contact : infirmerie@college.fr.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.`;

const E10_4_CE_14_POOL = buildExpressPool("e10-4-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Infirmerie du collège", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Infirmerie",
    vfQ: "Le message vient de Infirmerie du collège.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une séance sur le sommeil des adolescents", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "séance",
    vfQ: "Le texte parle de une séance sur le sommeil des adolescents.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle de permanence", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mardi à 14 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mardi",
    vfQ: "Le moment indiqué est mardi à 14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["l'infirmière donnera des conseils simples", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "l'infirmière",
    vfQ: "Le texte précise que l'infirmière donnera des conseils simples.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["rapporter le coupon réponse", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "rapporter",
    vfQ: "Il faut rapporter le coupon réponse.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["infirmerie@college.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "infirmerie@college",
    vfQ: "Le contact indiqué est infirmerie@college.fr.",
    vfC: 0,
  }),
]);

const E10_4_CE_15_TEXT = `Encart dans le journal de l'école — Atelier Théâtre Scolaire

À noter cette semaine : les inscriptions au spectacle de fin d'année.
Tout se passe à salle culturelle.
Le rendez-vous est jeudi à 12 h 30.
les répétitions auront lieu pendant la pause déjeuner.
Texte distribué après l'inscription.
Les lecteurs doivent choisir un rôle court ou long. Contact : Mme Garnier.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.`;

const E10_4_CE_15_POOL = buildExpressPool("e10-4-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Atelier Théâtre Scolaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Atelier",
    vfQ: "Le message vient de Atelier Théâtre Scolaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["les inscriptions au spectacle de fin d'année", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "inscriptions",
    vfQ: "Le texte parle de les inscriptions au spectacle de fin d'année.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle culturelle", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jeudi à 12 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi à 12 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les répétitions auront lieu pendant la pause déjeuner", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "répétitions",
    vfQ: "Le texte précise que les répétitions auront lieu pendant la pause déjeuner.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["choisir un rôle court ou long", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "choisir",
    vfQ: "Il faut choisir un rôle court ou long.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["Mme Garnier", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Mme",
    vfQ: "Le contact indiqué est Mme Garnier.",
    vfC: 0,
  }),
]);

const E10_4_CE_16_TEXT = `Message vocal retranscrit — Foyer Socio-Éducatif

Bonjour Salma, voici les informations.
On maintient une vente de gâteaux pour financer le voyage.
Retrouvons-nous à devant la salle des professeurs.
L'heure reste vendredi à 10 h.
les élèves tiendront le stand par groupes de deux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Merci de apporter les gâteaux le matin. Contact : foyer.college@mail.fr.`;

const E10_4_CE_16_POOL = buildExpressPool("e10-4-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Foyer Socio-Éducatif", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Foyer",
    vfQ: "Le message vient de Foyer Socio-Éducatif.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une vente de gâteaux pour financer le voyage", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "vente",
    vfQ: "Le texte parle de une vente de gâteaux pour financer le voyage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["devant la salle des professeurs", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "devant",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 10 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 10 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les élèves tiendront le stand par groupes de deux", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "élèves",
    vfQ: "Le texte précise que les élèves tiendront le stand par groupes de deux.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["apporter les gâteaux le matin", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "apporter",
    vfQ: "Il faut apporter les gâteaux le matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["foyer.college@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "foyer",
    vfQ: "Le contact indiqué est foyer.college@mail.fr.",
    vfC: 0,
  }),
]);

const E10_4_CE_17_TEXT = `Programme de la semaine — Direction de l'école

Activité principale : un exercice d'évacuation incendie.
Salle ou adresse : dans toutes les classes.
Créneau : lundi à 10 h 05.
l'alarme sonnera pendant deux minutes.
Les parents ne doivent pas entrer dans la cour.
Pour valider sa place, rassurer les enfants avant l'école. Contact : direction@platanes.fr.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.`;

const E10_4_CE_17_POOL = buildExpressPool("e10-4-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Direction de l'école", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Direction",
    vfQ: "Le message vient de Direction de l'école.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un exercice d'évacuation incendie", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "exercice",
    vfQ: "Le texte parle de un exercice d'évacuation incendie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans toutes les classes", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "dans",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["lundi à 10 h 05", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "lundi",
    vfQ: "Le moment indiqué est lundi à 10 h 05.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["l'alarme sonnera pendant deux minutes", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "l'alarme",
    vfQ: "Le texte précise que l'alarme sonnera pendant deux minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["rassurer les enfants avant l'école", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "rassurer",
    vfQ: "Il faut rassurer les enfants avant l'école.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["direction@platanes.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "direction@platanes",
    vfQ: "Le contact indiqué est direction@platanes.fr.",
    vfC: 0,
  }),
]);

const E10_4_CE_18_TEXT = `Petit mot sur le cahier — Classe de 5e B

Bonjour,
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Merci de lire l'information sur un exposé par groupes.
Le lieu indiqué est salle 305.
La date est mercredi à 11 h.
chaque groupe parlera pendant cinq minutes.
Affiche A3 autorisée. Action demandée : envoyer le plan au professeur. Contact : ENT de français.`;

const E10_4_CE_18_POOL = buildExpressPool("e10-4-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Classe de 5e B", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Classe",
    vfQ: "Le message vient de Classe de 5e B.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un exposé par groupes", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "exposé",
    vfQ: "Le texte parle de un exposé par groupes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle 305", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mercredi à 11 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mercredi",
    vfQ: "Le moment indiqué est mercredi à 11 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["chaque groupe parlera pendant cinq minutes", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "chaque",
    vfQ: "Le texte précise que chaque groupe parlera pendant cinq minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["envoyer le plan au professeur", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "envoyer",
    vfQ: "Il faut envoyer le plan au professeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["ENT de français", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "ENT",
    vfQ: "Le contact indiqué est ENT de français.",
    vfC: 0,
  }),
]);

const E10_4_CE_19_TEXT = `Publication du club — Service Périscolaire

l'inscription à l'étude surveillée aura bientôt lieu.
Les membres entrent par bureau périscolaire.
Accueil avant le 5 septembre.
les places sont données selon l'ordre d'arrivée.
Tarif calculé avec le quotient familial.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Merci de compléter le formulaire municipal; renseignements : periscolaire@ville.fr.`;

const E10_4_CE_19_POOL = buildExpressPool("e10-4-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Service Périscolaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Service",
    vfQ: "Le message vient de Service Périscolaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["l'inscription à l'étude surveillée", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "l'inscription",
    vfQ: "Le texte parle de l'inscription à l'étude surveillée.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["bureau périscolaire", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "bureau",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["avant le 5 septembre", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "avant",
    vfQ: "Le moment indiqué est avant le 5 septembre.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les places sont données selon l'ordre d'arrivée", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "places",
    vfQ: "Le texte précise que les places sont données selon l'ordre d'arrivée.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["compléter le formulaire municipal", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "compléter",
    vfQ: "Il faut compléter le formulaire municipal.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["periscolaire@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "periscolaire@ville",
    vfQ: "Le contact indiqué est periscolaire@ville.fr.",
    vfC: 0,
  }),
]);

const E10_4_CE_20_TEXT = `Avis affiché à la porte — Musique au Collège

Changement ou rappel : une répétition de chorale.
L'adresse à retenir est salle de musique.
Le moment à retenir est mardi à 12 h 15.
les élèves prépareront deux chansons pour la fête.
Condition pratique : Repas rapide à prévoir avant la répétition.
Avant la date, apprendre le refrain. Contact : professeur de musique.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.`;

const E10_4_CE_20_POOL = buildExpressPool("e10-4-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Musique au Collège", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Musique",
    vfQ: "Le message vient de Musique au Collège.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une répétition de chorale", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "répétition",
    vfQ: "Le texte parle de une répétition de chorale.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle de musique", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mardi à 12 h 15", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mardi",
    vfQ: "Le moment indiqué est mardi à 12 h 15.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les élèves prépareront deux chansons pour la fête", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "élèves",
    vfQ: "Le texte précise que les élèves prépareront deux chansons pour la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["apprendre le refrain", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "apprendre",
    vfQ: "Il faut apprendre le refrain.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["professeur de musique", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "professeur",
    vfQ: "Le contact indiqué est professeur de musique.",
    vfC: 0,
  }),
]);

export const E10_4_CE: CommunicationExercise[] = [
readingPoolExercise({
  id: "e10-4-ce",
  readingText: E10_4_CE_TEXT,
  questionPool: E10_4_CE_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-2",
  readingText: E10_4_CE_2_TEXT,
  questionPool: E10_4_CE_2_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-3",
  readingText: E10_4_CE_3_TEXT,
  questionPool: E10_4_CE_3_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-4",
  readingText: E10_4_CE_4_TEXT,
  questionPool: E10_4_CE_4_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-5",
  readingText: E10_4_CE_5_TEXT,
  questionPool: E10_4_CE_5_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-6",
  readingText: E10_4_CE_6_TEXT,
  questionPool: E10_4_CE_6_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-7",
  readingText: E10_4_CE_7_TEXT,
  questionPool: E10_4_CE_7_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-8",
  readingText: E10_4_CE_8_TEXT,
  questionPool: E10_4_CE_8_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-9",
  readingText: E10_4_CE_9_TEXT,
  questionPool: E10_4_CE_9_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-10",
  readingText: E10_4_CE_10_TEXT,
  questionPool: E10_4_CE_10_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-11",
  readingText: E10_4_CE_11_TEXT,
  questionPool: E10_4_CE_11_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-12",
  readingText: E10_4_CE_12_TEXT,
  questionPool: E10_4_CE_12_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-13",
  readingText: E10_4_CE_13_TEXT,
  questionPool: E10_4_CE_13_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-14",
  readingText: E10_4_CE_14_TEXT,
  questionPool: E10_4_CE_14_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-15",
  readingText: E10_4_CE_15_TEXT,
  questionPool: E10_4_CE_15_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-16",
  readingText: E10_4_CE_16_TEXT,
  questionPool: E10_4_CE_16_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-17",
  readingText: E10_4_CE_17_TEXT,
  questionPool: E10_4_CE_17_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-18",
  readingText: E10_4_CE_18_TEXT,
  questionPool: E10_4_CE_18_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-19",
  readingText: E10_4_CE_19_TEXT,
  questionPool: E10_4_CE_19_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-4-ce-20",
  readingText: E10_4_CE_20_TEXT,
  questionPool: E10_4_CE_20_POOL,
  questionCount: 6,
}),
];

const E10_4_PARENT = { title: "Le parent", vous: "le parent d'élève" };
const E10_4_PROF = { title: "Le professeur", vous: "le professeur / la professeure" };
const E10_4_SECRETAIRE = { title: "La secrétaire de l'école", vous: "le/la secrétaire de l'école" };
const E10_4_ENFANT = { title: "L'enfant", vous: "l'enfant" };

export const E10_4_PO: ExpressPoDialogue[] = [

  {
    id: "e10-4-po-1",
    title: "À la réunion parents-professeurs",
    context: "Vous rencontrez le professeur de votre fille à la réunion parents-professeurs.",
    roleA: E10_4_PARENT,
    roleB: E10_4_PROF,
    lines: [
      { role: "A", text: "Bonjour, je suis le père de Léa, en classe de CM2." },
      { role: "B", text: "Bonjour ! Asseyez-vous. Léa travaille très bien en français." },
      { role: "A", text: "Tant mieux ! Et en maths ? J'ai lu votre mot dans le cahier." },
      { role: "B", text: "En maths, elle a quelques difficultés avec les fractions." },
      { role: "A", text: "Qu'est-ce que nous pouvons faire pour l'aider ?" },
      { role: "B", text: "Dix minutes d'exercices chaque soir, ce serait très utile." },
      { role: "A", text: "D'accord, nous ferons ça. Il y a du soutien scolaire à l'école ?" },
      { role: "B", text: "Oui, le mardi midi. Je peux l'inscrire, si vous voulez." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-4-po-2",
    title: "Un mot dans le cahier de liaison",
    context: "Vous discutez avec votre conjoint(e) d'un mot trouvé dans le cahier de liaison.",
    roleA: E10_4_PARENT,
    roleB: { title: "L'autre parent", vous: "l'autre parent" },
    lines: [
      { role: "A", text: "Tu as regardé le cahier de liaison d'Agathe ?" },
      { role: "B", text: "Non, pas encore. Il y a un mot ?" },
      { role: "A", text: "Oui, il faut aller à la réunion parents-profs jeudi." },
      { role: "B", text: "Jeudi soir ? Je finis le travail à 18 h…" },
      { role: "A", text: "La réunion commence à 17 h, mais je peux y aller seul." },
      { role: "B", text: "Merci. Il y a autre chose à faire ?" },
      { role: "A", text: "Oui, des documents à remplir, dater et signer avant lundi." },
      { role: "B", text: "D'accord, on fera ça ce soir après le dîner." },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e10-4-po-3",
    title: "Prendre rendez-vous avec la maîtresse",
    context: "Vous appelez l'école pour demander un rendez-vous avec la maîtresse de votre fils.",
    roleA: E10_4_PARENT,
    roleB: E10_4_SECRETAIRE,
    lines: [
      { role: "A", text: "Bonjour, je voudrais un rendez-vous avec la maîtresse de mon fils." },
      { role: "B", text: "Bonjour ! Oui, c'est à quel sujet ?" },
      { role: "A", text: "Il est inquiet le matin et il ne veut plus aller à l'école." },
      { role: "B", text: "Je comprends. La maîtresse est libre mardi à 16 h 30." },
      { role: "A", text: "Mardi à 16 h 30, c'est parfait." },
      { role: "B", text: "Très bien. Venez à l'accueil, je vous accompagnerai à la classe." },
      { role: "A", text: "Merci. Est-ce que mon fils doit venir aussi ?" },
      { role: "B", text: "Non, la première rencontre se fait entre adultes." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-4-po-4",
    title: "Prévenir d'une absence",
    context: "Votre fils est malade, vous appelez le secrétariat de l'école.",
    roleA: E10_4_SECRETAIRE,
    roleB: E10_4_PARENT,
    lines: [
      { role: "A", text: "École des Tilleuls, bonjour !" },
      { role: "B", text: "Bonjour, je vous appelle pour mon fils, en CE1. Il est malade." },
      { role: "A", text: "D'accord. Qu'est-ce qu'il a ?" },
      { role: "B", text: "Il a de la fièvre depuis cette nuit. Le médecin conseille deux jours de repos." },
      { role: "A", text: "Très bien, je préviens sa maîtresse. Il reviendra jeudi ?" },
      { role: "B", text: "Oui, normalement. Et pour les devoirs ?" },
      { role: "A", text: "Sa maîtresse enverra le travail par e-mail ce soir." },
      { role: "B", text: "Merci beaucoup, bonne journée !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-4-po-5",
    title: "Accompagner la sortie scolaire",
    context: "Vous proposez d'accompagner la sortie scolaire au musée.",
    roleA: E10_4_PARENT,
    roleB: E10_4_PROF,
    lines: [
      { role: "A", text: "Bonjour ! Vous avez besoin de parents pour la sortie au musée ?" },
      { role: "B", text: "Oui ! Vous êtes disponible vendredi ?" },
      { role: "A", text: "Oui, j'ai posé ma journée. Le car partira à quelle heure ?" },
      { role: "B", text: "À 8 h 30 devant l'école. Nous rentrerons vers 16 h." },
      { role: "A", text: "D'accord. Qu'est-ce que je devrai faire ?" },
      { role: "B", text: "Vous accompagnerez un groupe de six enfants dans le musée." },
      { role: "A", text: "Très bien. Il faut apporter quelque chose ?" },
      { role: "B", text: "Juste un pique-nique pour vous, comme les élèves !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-4-po-6",
    title: "S'inscrire à la cantine",
    context: "Vous inscrivez votre fille à la cantine de l'école.",
    roleA: E10_4_PARENT,
    roleB: E10_4_SECRETAIRE,
    lines: [
      { role: "A", text: "Bonjour, je voudrais inscrire ma fille à la cantine." },
      { role: "B", text: "Bien sûr ! Elle mangera à la cantine tous les jours ?" },
      { role: "A", text: "Non, seulement le lundi, le mardi et le jeudi." },
      { role: "B", text: "D'accord. Remplissez ce formulaire, s'il vous plaît." },
      { role: "A", text: "Voilà. Est-ce qu'il y a des menus spéciaux ?" },
      { role: "B", text: "Oui, il y a un menu végétarien. Les menus sont affichés à l'entrée." },
      { role: "A", text: "Parfait. Et le paiement ?" },
      { role: "B", text: "Vous recevrez une facture chaque mois par e-mail." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-4-po-7",
    title: "Le règlement intérieur",
    context: "Votre fils a oublié de vous donner le règlement intérieur à signer.",
    roleA: E10_4_PARENT,
    roleB: E10_4_ENFANT,
    lines: [
      { role: "A", text: "Alexandre, tu as donné le règlement intérieur à signer ?" },
      { role: "B", text: "Ah oui, c'est vrai… Il est dans mon sac depuis lundi." },
      { role: "A", text: "Il fallait le rendre cette semaine ! Donne-le-moi." },
      { role: "B", text: "Tiens. Il faut aussi signer la page deux." },
      { role: "A", text: "Je vois. Tu l'as lu, ce règlement ?" },
      { role: "B", text: "Oui… enfin, un peu." },
      { role: "A", text: "Lis-le ce soir. Ce sont les règles que tu devras respecter." },
      { role: "B", text: "D'accord, je le lirai après mes devoirs. Promis !" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e10-4-po-8",
    title: "Les devoirs non faits",
    context: "La maîtresse a écrit un mot : votre enfant ne fait pas ses devoirs.",
    roleA: E10_4_PARENT,
    roleB: E10_4_ENFANT,
    lines: [
      { role: "A", text: "La maîtresse a écrit que tu ne fais pas tes devoirs. C'est vrai ?" },
      { role: "B", text: "J'ai oublié deux fois seulement…" },
      { role: "A", text: "Trois fois cette semaine, d'après le mot." },
      { role: "B", text: "C'est parce que je ne comprends pas les exercices de maths." },
      { role: "A", text: "Alors il faut le dire ! On les fera ensemble ce soir." },
      { role: "B", text: "D'accord… Tu m'aideras vraiment ?" },
      { role: "A", text: "Oui, tous les soirs après le goûter, trente minutes." },
      { role: "B", text: "Bon, d'accord. Merci maman." },
      { role: "A", text: "Merci pour les informations." },
      { role: "B", text: "Je vous en prie. Au revoir !" },
],
  },
  {
    id: "e10-4-po-9",
    title: "La fête de l'école",
    context: "L'école cherche des parents pour organiser la fête de fin d'année.",
    roleA: E10_4_PARENT,
    roleB: { title: "L'autre parent", vous: "l'autre parent" },
    lines: [
      { role: "A", text: "Tu as vu ? L'école cherche des parents pour la fête de fin d'année." },
      { role: "B", text: "Oui, j'ai lu le mot. Qu'est-ce qu'il faut faire ?" },
      { role: "A", text: "Tenir un stand de gâteaux ou installer les jeux." },
      { role: "B", text: "Je préfère les gâteaux, je ferai des crêpes !" },
      { role: "A", text: "Bonne idée. Moi, je m'occuperai du stand de pêche aux canards." },
      { role: "B", text: "Il faut s'inscrire comment ?" },
      { role: "A", text: "On écrit un mot dans le cahier de liaison avant vendredi." },
      { role: "B", text: "Parfait, je fais ça ce soir." },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e10-4-po-10",
    title: "Un enfant inquiet le matin",
    context: "Votre fille pleure tous les matins. Vous en parlez à sa maîtresse.",
    roleA: E10_4_PARENT,
    roleB: { title: "La maîtresse", vous: "le maître / la maîtresse" },
    lines: [
      { role: "A", text: "Merci de me recevoir. Agathe pleure tous les matins avant l'école." },
      { role: "B", text: "Je suis contente que vous m'en parliez. Depuis quand ?" },
      { role: "A", text: "Depuis deux semaines environ. Elle ne veut rien expliquer." },
      { role: "B", text: "En classe, elle est plus calme que d'habitude, c'est vrai." },
      { role: "A", text: "Est-ce qu'il y a un problème avec un camarade ?" },
      { role: "B", text: "Je vais observer la classe cette semaine et je vous appellerai vendredi." },
      { role: "A", text: "Merci beaucoup. Qu'est-ce que nous pouvons faire à la maison ?" },
      { role: "B", text: "Parlez avec elle sans la forcer, et rassurez-la." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
{
  id: "e10-4-po-11",
  title: "Demander une information sur la vie scolaire",
  context: "Vous voulez inscrire mon fils à la cantine.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour inscrire mon fils à la cantine." },
    { role: "A", text: "Bien sûr. Les repas commencent lundi." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui, c'est conseillé. Il faut choisir les jours." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e10-4-po-12",
  title: "Expliquer un problème avec la vie scolaire",
  context: "Vous expliquez un problème : ma fille a perdu son carnet.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : ma fille a perdu son carnet." },
    { role: "A", text: "Je comprends. On peut lui en donner un nouveau." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Il faudra le signer ce soir." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
{
  id: "e10-4-po-13",
  title: "Prendre rendez-vous pour la vie scolaire",
  context: "Vous voulez prendre rendez-vous pour voir la maîtresse de mon fils.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais voir la maîtresse de mon fils." },
    { role: "A", text: "Je peux vous proposer mardi après la classe." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "Parfait. Je veux parler de ses devoirs." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
{
  id: "e10-4-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous confirmez ceci : la réunion parents-professeurs.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme la réunion parents-professeurs." },
    { role: "A", text: "Très bien. C'est bien jeudi à 18 heures ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "Je viendrai avec mon mari." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
{
  id: "e10-4-po-15",
  title: "Demander conseil sur la vie scolaire",
  context: "Vous demandez conseil pour aider mon enfant à faire ses devoirs.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour aider mon enfant à faire ses devoirs." },
    { role: "A", text: "Gardez un moment calme chaque soir." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "Préparez le cartable la veille." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
{
  id: "e10-4-po-16",
  title: "Signaler un retard",
  context: "Vous signalez un retard : mon enfant arrive en retard.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : mon enfant arrive en retard." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "Le bus scolaire a eu un problème." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "Il sera là dans dix minutes." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e10-4-po-17",
  title: "Faire une réclamation polie",
  context: "Vous faites une réclamation : un autre enfant prend souvent son goûter.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : un autre enfant prend souvent son goûter." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "Ma fille n'ose pas le dire." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Je voudrais que l'école regarde." },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
{
  id: "e10-4-po-18",
  title: "Demander une aide urgente",
  context: "Vous devez demander une aide urgente : récupérer mon fils malade.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour récupérer mon fils malade." },
    { role: "A", text: "Il est à l'infirmerie." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Venez par l'entrée principale." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
{
  id: "e10-4-po-19",
  title: "Comparer deux possibilités",
  context: "Vous comparez deux options : l'étude surveillée et l'aide aux devoirs.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare l'étude surveillée et l'aide aux devoirs." },
    { role: "A", text: "L'étude est plus calme." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "L'aide aux devoirs accompagne davantage." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
{
  id: "e10-4-po-20",
  title: "Remercier pour une aide",
  context: "Vous remerciez pour une aide : votre aide pour l'inscription.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour votre aide pour l'inscription." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "Tout est clair maintenant." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "Mon fils est content de commencer." },
    { role: "A", text: "N'hésitez pas à revenir si besoin." },
    { role: "B", text: "Oui, je le ferai." },
    { role: "A", text: "Bonne continuation !" },
    { role: "B", text: "Merci, à vous aussi." },
  ],
}
];

export const E10_4_PE: ExpressPePrompt[] = [

  {
    id: "e10-4-pe-1",
    title: "Un mot d'absence",
    situation: "Votre enfant est malade et ne peut pas aller à l'école pendant deux jours.",
    instruction: "Écrivez un mot dans le cahier de liaison : expliquez l'absence, donnez les dates et demandez les devoirs.",
    points: ["La raison de l'absence", "Les dates", "La demande de devoirs"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pe-2",
    title: "Rendez-vous avec le professeur",
    situation: "Vous voulez parler des notes de votre enfant avec son professeur.",
    instruction: "Écrivez un e-mail au professeur : présentez-vous, expliquez pourquoi vous voulez le rencontrer et proposez deux disponibilités.",
    points: ["Votre présentation", "La raison du rendez-vous", "Deux disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pe-3",
    title: "Un problème à l'école",
    situation: "Votre enfant pleure tous les matins et ne veut plus aller à l'école.",
    instruction: "Écrivez un message à la maîtresse : décrivez le problème, dites depuis quand il dure et demandez un rendez-vous.",
    points: ["Le problème", "Depuis quand", "La demande de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pe-4",
    title: "Accompagner la sortie scolaire",
    situation: "L'école cherche des parents pour accompagner une sortie au musée.",
    instruction: "Écrivez un mot à l'enseignant : proposez votre aide, donnez vos disponibilités et posez une question sur l'organisation.",
    points: ["Votre proposition d'aide", "Vos disponibilités", "Une question"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pe-5",
    title: "Après la réunion parents-profs",
    situation: "Vous êtes allé(e) à la réunion parents-professeurs, mais votre conjoint(e) travaillait.",
    instruction: "Racontez la réunion dans un message : les professeurs rencontrés, ce qu'ils ont dit et ce que vous ferez pour aider votre enfant.",
    points: ["Les professeurs rencontrés", "Ce qu'ils ont dit", "Ce que vous ferez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pe-6",
    title: "Instructions pour la baby-sitter",
    situation: "Une nouvelle baby-sitter ira chercher votre enfant à l'école cette semaine.",
    instruction: "Écrivez les instructions : l'heure et le lieu de sortie, le goûter et les devoirs à faire.",
    points: ["L'heure et le lieu", "Le goûter", "Les devoirs"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pe-7",
    title: "L'école ici et dans votre pays",
    situation: "Un ami français vous demande comment était l'école dans votre pays.",
    instruction: "Comparez l'école de votre pays et l'école française : les horaires, les devoirs et les relations entre parents et professeurs.",
    points: ["Les horaires", "Les devoirs", "Les relations parents-professeurs"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pe-8",
    title: "La fête de l'école",
    situation: "Vous participez à l'organisation de la fête de fin d'année de l'école.",
    instruction: "Écrivez un message au groupe des parents : proposez des idées de stands, demandez de l'aide et donnez le jour et l'heure de la fête.",
    points: ["Vos idées de stands", "La demande d'aide", "Le jour et l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pe-9",
    title: "Question sur la cantine",
    situation: "Votre enfant commence l'école et vous voulez l'inscrire à la cantine.",
    instruction: "Écrivez un e-mail au secrétariat : demandez les jours possibles, les menus et le prix.",
    points: ["Les jours", "Les menus", "Le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pe-10",
    title: "Une journée d'école",
    situation: "Les grands-parents de votre enfant veulent savoir comment se passent ses journées.",
    instruction: "Décrivez une journée d'école de votre enfant : le matin, la cantine et les activités de l'après-midi.",
    points: ["Le matin", "La cantine", "L'après-midi"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e10-4-pe-11",
  title: "Décrire une expérience — vie scolaire",
  situation: "Vous avez vécu une situation importante liée à vie scolaire.",
  instruction: "Racontez cette expérience : le contexte, ce qui s'est passé et le résultat.",
  points: ["Le contexte", "Les événements principaux", "Le résultat"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-4-pe-12",
  title: "Demander des informations — vie scolaire",
  situation: "Vous avez besoin d'informations sur vie scolaire.",
  instruction: "Écrivez un message formel : présentez-vous, posez trois questions précises et remerciez.",
  points: ["Votre présentation", "Trois questions", "Formule de politesse"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-4-pe-13",
  title: "Donner votre avis — vie scolaire",
  situation: "On vous demande votre avis sur vie scolaire.",
  instruction: "Exprimez votre opinion : avantages, inconvénients et recommandation.",
  points: ["Les points positifs", "Les points négatifs", "Votre recommandation"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-4-pe-14",
  title: "Raconter un problème — vie scolaire",
  situation: "Vous avez rencontré un problème avec vie scolaire.",
  instruction: "Décrivez le problème, ce que vous avez fait et ce que vous attendez maintenant.",
  points: ["Le problème", "Vos actions", "Votre attente"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-4-pe-15",
  title: "Proposer une solution — vie scolaire",
  situation: "Un ami a un souci lié à vie scolaire.",
  instruction: "Écrivez-lui un message avec deux conseils pratiques et une offre d'aide.",
  points: ["Deux conseils", "Votre offre d'aide", "Formule amicale"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-4-pe-16",
  title: "Comparer deux options — vie scolaire",
  situation: "Vous hésitez entre deux choix pour vie scolaire.",
  instruction: "Listez les avantages et inconvénients de chaque option et indiquez votre préférence.",
  points: ["Option A", "Option B", "Votre choix"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-4-pe-17",
  title: "Planifier une démarche — vie scolaire",
  situation: "Vous devez organiser une démarche liée à vie scolaire.",
  instruction: "Écrivez un plan avec les étapes, les documents nécessaires et les délais.",
  points: ["Les étapes", "Les documents", "Les délais"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-4-pe-18",
  title: "Remercier — vie scolaire",
  situation: "Quelqu'un vous a aidé(e) pour vie scolaire.",
  instruction: "Écrivez un message de remerciement : rappelez l'aide reçue et proposez de rendre la pareille.",
  points: ["L'aide reçue", "Votre gratitude", "Votre proposition"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-4-pe-19",
  title: "Informer — vie scolaire",
  situation: "Vous devez informer un proche d'une nouvelle sur vie scolaire.",
  instruction: "Écrivez un message clair avec les faits importants et une question pour lui.",
  points: ["Les informations clés", "Les détails pratiques", "Une question"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-4-pe-20",
  title: "Bilan personnel — vie scolaire",
  situation: "Vous faites le bilan de votre expérience avec vie scolaire.",
  instruction: "Rédigez un texte : ce que vous avez appris, ce qui reste à faire et vos objectifs.",
  points: ["Ce que vous avez appris", "Ce qui reste à faire", "Vos objectifs"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.5 — Participer à la vie associative
   ════════════════════════════════════════════════════════════════════════════ */

const E10_5_CE_TEXT = `Affiche — Maison du Bénévolat

une réunion d'accueil des nouveaux bénévoles.
Lieu : salle 1 de la maison citoyenne.
Date : mardi à 18 h.
trois associations présenteront leurs missions.
Entrée libre sans cotisation le premier soir.
À faire : remplir la fiche de disponibilité. Contact : benevolat@ville.fr.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.`;

const E10_5_CE_POOL = buildExpressPool("e10-5-ce", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Maison du Bénévolat", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Maison",
    vfQ: "Le message vient de Maison du Bénévolat.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une réunion d'accueil des nouveaux bénévoles", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "réunion",
    vfQ: "Le texte parle de une réunion d'accueil des nouveaux bénévoles.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle 1 de la maison citoyenne", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mardi à 18 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mardi",
    vfQ: "Le moment indiqué est mardi à 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["trois associations présenteront leurs missions", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "trois",
    vfQ: "Le texte précise que trois associations présenteront leurs missions.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["remplir la fiche de disponibilité", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "remplir",
    vfQ: "Il faut remplir la fiche de disponibilité.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["benevolat@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "benevolat@ville",
    vfQ: "Le contact indiqué est benevolat@ville.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_2_TEXT = `SMS — Association Les Paniers Solidaires à Claire

Bonjour Claire, petit rappel : une distribution alimentaire.
On se retrouve jeudi à 14 h.
Adresse : local rue des Frères 8.
les bénévoles prépareront les sacs avant l'ouverture.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Merci de indiquer vos horaires possibles. Réponse : paniers.solidaires@mail.fr.`;

const E10_5_CE_2_POOL = buildExpressPool("e10-5-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Association Les Paniers Solidaires", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "Le message vient de Association Les Paniers Solidaires.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une distribution alimentaire", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "distribution",
    vfQ: "Le texte parle de une distribution alimentaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["local rue des Frères 8", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "local",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jeudi à 14 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi à 14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les bénévoles prépareront les sacs avant l'ouverture", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "bénévoles",
    vfQ: "Le texte précise que les bénévoles prépareront les sacs avant l'ouverture.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["indiquer vos horaires possibles", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "indiquer",
    vfQ: "Il faut indiquer vos horaires possibles.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["paniers.solidaires@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "paniers",
    vfQ: "Le contact indiqué est paniers.solidaires@mail.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_3_TEXT = `Billet dans l'entrée — Club Nature du Canal

Bonjour à tous,
Nous préparons un nettoyage des berges.
Le rendez-vous est fixé samedi à 9 h 30, à pont de la Minoterie.
Gants personnels conseillés.
les sacs et pinces seront fournis.
Pour aider, merci de s'inscrire pour prévoir le matériel. Contact : clubnature@asso.fr.
Nous comptons sur vous.
Pensez à arriver un peu en avance.
Le trajet dure environ quinze minutes à pied.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.`;

const E10_5_CE_3_POOL = buildExpressPool("e10-5-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Club Nature du Canal", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "Le message vient de Club Nature du Canal.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un nettoyage des berges", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "nettoyage",
    vfQ: "Le texte parle de un nettoyage des berges.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["pont de la Minoterie", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "pont",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 9 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 9 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les sacs et pinces seront fournis", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "sacs",
    vfQ: "Le texte précise que les sacs et pinces seront fournis.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["s'inscrire pour prévoir le matériel", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "s'inscrire",
    vfQ: "Il faut s'inscrire pour prévoir le matériel.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["clubnature@asso.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "clubnature@asso",
    vfQ: "Le contact indiqué est clubnature@asso.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_4_TEXT = `Message de groupe — Secours Amitié Local

Olivier a partagé une information.
Sujet : une permanence d'écoute bénévole.
Point de rencontre : bureau 4 du centre social.
Horaire prévu : lundi à 17 h.
une formation courte est obligatoire avant de commencer.
prendre rendez-vous avec la coordinatrice. Questions : coordination@secoursamitie.fr.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.`;

const E10_5_CE_4_POOL = buildExpressPool("e10-5-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Secours Amitié Local", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Secours",
    vfQ: "Le message vient de Secours Amitié Local.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une permanence d'écoute bénévole", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "permanence",
    vfQ: "Le texte parle de une permanence d'écoute bénévole.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["bureau 4 du centre social", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "bureau",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["lundi à 17 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "lundi",
    vfQ: "Le moment indiqué est lundi à 17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["une formation courte est obligatoire avant de commencer", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "formation",
    vfQ: "Le texte précise que une formation courte est obligatoire avant de commencer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["prendre rendez-vous avec la coordinatrice", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "prendre",
    vfQ: "Il faut prendre rendez-vous avec la coordinatrice.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["coordination@secoursamitie.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "coordination@secoursamitie",
    vfQ: "Le contact indiqué est coordination@secoursamitie.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_5_TEXT = `Brève locale — Association Sport Pour Tous

une séance adaptée aux seniors est annoncé cette semaine.
Le public est attendu mercredi à 10 h.
L'adresse exacte est gymnase des Prés.
les bénévoles aideront à installer les tapis.
Tenue confortable demandée.
Inscription ou question : sportpourtous@mail.fr; il faut arriver quinze minutes avant la séance.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
Merci de votre attention et de votre patience.`;

const E10_5_CE_5_POOL = buildExpressPool("e10-5-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Association Sport Pour Tous", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "Le message vient de Association Sport Pour Tous.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une séance adaptée aux seniors", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "séance",
    vfQ: "Le texte parle de une séance adaptée aux seniors.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["gymnase des Prés", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "gymnase",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mercredi à 10 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mercredi",
    vfQ: "Le moment indiqué est mercredi à 10 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les bénévoles aideront à installer les tapis", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "bénévoles",
    vfQ: "Le texte précise que les bénévoles aideront à installer les tapis.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["arriver quinze minutes avant la séance", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "arriver",
    vfQ: "Il faut arriver quinze minutes avant la séance.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["sportpourtous@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "sportpourtous@mail",
    vfQ: "Le contact indiqué est sportpourtous@mail.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_6_TEXT = `Carte d'invitation — Collectif Zéro Déchet

Chère/cher Rachid,
Vous êtes invité(e) pour un atelier réparation d'objets.
Cela aura lieu samedi à 14 h.
Rendez-vous à atelier municipal, porte jaune.
les bénévoles essaieront de réparer petit électroménager et jouets.
Une réponse rapide nous aide beaucoup.
Vous pouvez venir avec un ami ou un membre de la famille.
Apportez une pièce d'identité si possible.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Merci de décrire l'objet à l'avance. Contact : zerodechet@ville.fr.`;

const E10_5_CE_6_POOL = buildExpressPool("e10-5-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Collectif Zéro Déchet", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Collectif",
    vfQ: "Le message vient de Collectif Zéro Déchet.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un atelier réparation d'objets", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "atelier",
    vfQ: "Le texte parle de un atelier réparation d'objets.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["atelier municipal, porte jaune", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "atelier",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 14 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les bénévoles essaieront de réparer petit électroménager et jouets", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "bénévoles",
    vfQ: "Le texte précise que les bénévoles essaieront de réparer petit électroménager et jouets.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["décrire l'objet à l'avance", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "décrire",
    vfQ: "Il faut décrire l'objet à l'avance.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["zerodechet@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "zerodechet@ville",
    vfQ: "Le contact indiqué est zerodechet@ville.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_7_TEXT = `Note pratique — Bibliothèque de Rue

Objet : une lecture pour enfants au square.
Les participants arrivent à square des Marronniers.
Début : mercredi à 15 h.
les bénévoles liront des albums sous la tente.
Prévoir : Livres prêtés par la médiathèque.
Avant de venir, venir avec une couverture. Contact : bibliorue@mail.fr.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.`;

const E10_5_CE_7_POOL = buildExpressPool("e10-5-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Bibliothèque de Rue", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Bibliothèque",
    vfQ: "Le message vient de Bibliothèque de Rue.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une lecture pour enfants au square", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "lecture",
    vfQ: "Le texte parle de une lecture pour enfants au square.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["square des Marronniers", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "square",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mercredi à 15 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mercredi",
    vfQ: "Le moment indiqué est mercredi à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les bénévoles liront des albums sous la tente", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "bénévoles",
    vfQ: "Le texte précise que les bénévoles liront des albums sous la tente.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["venir avec une couverture", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "venir",
    vfQ: "Il faut venir avec une couverture.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["bibliorue@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "bibliorue@mail",
    vfQ: "Le contact indiqué est bibliorue@mail.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_8_TEXT = `Page web — Comité de Quartier Sud

Nouvelle annonce : l'assemblée générale annuelle.
Où ? salle des associations.
Quand ? vendredi à 19 h.
Ce qui est prévu : le budget et les projets seront présentés.
Participation : Cotisation possible sur place : 5 €.
Bouton à utiliser : voter pour le nouveau bureau. Aide : quartiersud@asso.fr.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.`;

const E10_5_CE_8_POOL = buildExpressPool("e10-5-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Comité de Quartier Sud", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Comité",
    vfQ: "Le message vient de Comité de Quartier Sud.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["l'assemblée générale annuelle", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "l'assemblée",
    vfQ: "Le texte parle de l'assemblée générale annuelle.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle des associations", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 19 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le budget et les projets seront présentés", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "budget",
    vfQ: "Le texte précise que le budget et les projets seront présentés.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["voter pour le nouveau bureau", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "voter",
    vfQ: "Il faut voter pour le nouveau bureau.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["quartiersud@asso.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "quartiersud@asso",
    vfQ: "Le contact indiqué est quartiersud@asso.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_9_TEXT = `Flyer distribué au quartier — Atelier Vélo Solidaire

Envie de sortir ?
une permanence de réparation est ouvert aux voisins.
Accueil à garage partagé, rue du Moulin.
Rendez-vous jeudi à 18 h.
les bénévoles apprennent à régler les freins. Pièces neuves à prix coûtant.
Pour participer : venir avec son vélo propre. Contact : atelier.velo@mail.fr.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.`;

const E10_5_CE_9_POOL = buildExpressPool("e10-5-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Atelier Vélo Solidaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Atelier",
    vfQ: "Le message vient de Atelier Vélo Solidaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une permanence de réparation", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "permanence",
    vfQ: "Le texte parle de une permanence de réparation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["garage partagé, rue du Moulin", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "garage",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jeudi à 18 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi à 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les bénévoles apprennent à régler les freins", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "bénévoles",
    vfQ: "Le texte précise que les bénévoles apprennent à régler les freins.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["venir avec son vélo propre", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "venir",
    vfQ: "Il faut venir avec son vélo propre.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["atelier.velo@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "atelier",
    vfQ: "Le contact indiqué est atelier.velo@mail.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_10_TEXT = `Mémo pour les familles — Association Lire Ensemble

Information importante : un appel à lecteurs bénévoles.
Les familles se présentent à école Paul-Bert.
Le créneau retenu est mardi à 16 h 30.
les lecteurs accompagnent de petits groupes pendant trente minutes.
Extrait de casier demandé après inscription.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
Merci de choisir un jour de présence; contact : lireensemble@asso.fr.`;

const E10_5_CE_10_POOL = buildExpressPool("e10-5-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Association Lire Ensemble", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "Le message vient de Association Lire Ensemble.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un appel à lecteurs bénévoles", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "appel",
    vfQ: "Le texte parle de un appel à lecteurs bénévoles.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["école Paul-Bert", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "école",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mardi à 16 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mardi",
    vfQ: "Le moment indiqué est mardi à 16 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les lecteurs accompagnent de petits groupes pendant trente minutes", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "lecteurs",
    vfQ: "Le texte précise que les lecteurs accompagnent de petits groupes pendant trente minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["choisir un jour de présence", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "choisir",
    vfQ: "Il faut choisir un jour de présence.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["lireensemble@asso.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "lireensemble@asso",
    vfQ: "Le contact indiqué est lireensemble@asso.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_11_TEXT = `Annonce au micro — Jardins Partagés Est

Attention, une information concerne une matinée de plantation.
Les personnes intéressées vont à jardin derrière la piscine.
L'activité commence dimanche à 9 h.
des plants de tomates et de basilic seront distribués.
Il faut aussi noter : Apporter une bouteille d'eau.
Dernière étape : noter votre nom sur le tableau. Contact : jardins.est@mail.fr.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.`;

const E10_5_CE_11_POOL = buildExpressPool("e10-5-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Jardins Partagés Est", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Jardins",
    vfQ: "Le message vient de Jardins Partagés Est.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une matinée de plantation", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "matinée",
    vfQ: "Le texte parle de une matinée de plantation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["jardin derrière la piscine", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "jardin",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["dimanche à 9 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "dimanche",
    vfQ: "Le moment indiqué est dimanche à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["des plants de tomates et de basilic seront distribués", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "plants",
    vfQ: "Le texte précise que des plants de tomates et de basilic seront distribués.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["noter votre nom sur le tableau", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "noter",
    vfQ: "Il faut noter votre nom sur le tableau.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["jardins.est@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "jardins",
    vfQ: "Le contact indiqué est jardins.est@mail.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_12_TEXT = `Post sur le réseau du quartier — Association Culture Ouverte

Théo recommande un accueil de visiteurs au musée.
Le groupe se donne rendez-vous à hall du musée municipal.
Moment choisi : samedi à 13 h.
les bénévoles orienteront les familles vers les ateliers.
Badge remis à l'arrivée.
Répondez au message pour lire le plan du musée avant samedi. Contact : cultureouverte@ville.fr.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.`;

const E10_5_CE_12_POOL = buildExpressPool("e10-5-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Association Culture Ouverte", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "Le message vient de Association Culture Ouverte.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un accueil de visiteurs au musée", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "accueil",
    vfQ: "Le texte parle de un accueil de visiteurs au musée.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["hall du musée municipal", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "hall",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 13 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 13 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les bénévoles orienteront les familles vers les ateliers", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "bénévoles",
    vfQ: "Le texte précise que les bénévoles orienteront les familles vers les ateliers.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["lire le plan du musée avant samedi", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "lire",
    vfQ: "Il faut lire le plan du musée avant samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["cultureouverte@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "cultureouverte@ville",
    vfQ: "Le contact indiqué est cultureouverte@ville.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_13_TEXT = `Invitation imprimée — Banque du Temps

Nous serons heureux de vous accueillir.
Programme : un échange de services entre habitants.
Adresse : local associatif du marché.
Début prévu lundi à 18 h 30.
une heure donnée vaut une heure reçue.
Réponse demandée : préparer une compétence à proposer. Contact : banquedutemps@net.fr.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.`;

const E10_5_CE_13_POOL = buildExpressPool("e10-5-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Banque du Temps", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Banque",
    vfQ: "Le message vient de Banque du Temps.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un échange de services entre habitants", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "échange",
    vfQ: "Le texte parle de un échange de services entre habitants.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["local associatif du marché", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "local",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["lundi à 18 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "lundi",
    vfQ: "Le moment indiqué est lundi à 18 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["une heure donnée vaut une heure reçue", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "heure",
    vfQ: "Le texte précise que une heure donnée vaut une heure reçue.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["préparer une compétence à proposer", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "préparer",
    vfQ: "Il faut préparer une compétence à proposer.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["banquedutemps@net.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "banquedutemps@net",
    vfQ: "Le contact indiqué est banquedutemps@net.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_14_TEXT = `Compte rendu court — Association Refuge Animal

La réunion a confirmé une collecte de couvertures.
Le lieu retenu est devant la clinique vétérinaire.
La date choisie est samedi de 10 h à 12 h.
les couvertures doivent être propres et sans trous.
Croquettes acceptées en petits sacs.
Prochaine action : déposer les dons dans les cartons marqués. Contact : refuge.local@mail.fr.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.`;

const E10_5_CE_14_POOL = buildExpressPool("e10-5-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Association Refuge Animal", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "Le message vient de Association Refuge Animal.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une collecte de couvertures", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "collecte",
    vfQ: "Le texte parle de une collecte de couvertures.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["devant la clinique vétérinaire", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "devant",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi de 10 h à 12 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi de 10 h à 12 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les couvertures doivent être propres et sans trous", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "couvertures",
    vfQ: "Le texte précise que les couvertures doivent être propres et sans trous.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["déposer les dons dans les cartons marqués", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "déposer",
    vfQ: "Il faut déposer les dons dans les cartons marqués.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["refuge.local@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "refuge",
    vfQ: "Le contact indiqué est refuge.local@mail.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_15_TEXT = `Encart dans le journal de l'école — Radio Associative Onde Libre

À noter cette semaine : une réunion pour nouveaux chroniqueurs.
Tout se passe à studio 2, maison des médias.
Le rendez-vous est jeudi à 18 h 45.
la première émission parlera des initiatives locales.
Aucune expérience radio nécessaire.
Les lecteurs doivent préparer une idée de rubrique. Contact : ondelibre@radio.fr.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.`;

const E10_5_CE_15_POOL = buildExpressPool("e10-5-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Radio Associative Onde Libre", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Radio",
    vfQ: "Le message vient de Radio Associative Onde Libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une réunion pour nouveaux chroniqueurs", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "réunion",
    vfQ: "Le texte parle de une réunion pour nouveaux chroniqueurs.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["studio 2, maison des médias", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "studio",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jeudi à 18 h 45", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi à 18 h 45.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["la première émission parlera des initiatives locales", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "première",
    vfQ: "Le texte précise que la première émission parlera des initiatives locales.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["préparer une idée de rubrique", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "préparer",
    vfQ: "Il faut préparer une idée de rubrique.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["ondelibre@radio.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "ondelibre@radio",
    vfQ: "Le contact indiqué est ondelibre@radio.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_16_TEXT = `Message vocal retranscrit — Collectif Couture Solidaire

Bonjour Mehdi, voici les informations.
On maintient un atelier de sacs en tissu.
Retrouvons-nous à salle textile du centre social.
L'heure reste vendredi à 14 h.
les sacs seront donnés à l'épicerie sociale.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Merci de apporter du tissu propre si possible. Contact : couturesolidaire@mail.fr.`;

const E10_5_CE_16_POOL = buildExpressPool("e10-5-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Collectif Couture Solidaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Collectif",
    vfQ: "Le message vient de Collectif Couture Solidaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un atelier de sacs en tissu", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "atelier",
    vfQ: "Le texte parle de un atelier de sacs en tissu.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle textile du centre social", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi à 14 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi à 14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les sacs seront donnés à l'épicerie sociale", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "sacs",
    vfQ: "Le texte précise que les sacs seront donnés à l'épicerie sociale.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["apporter du tissu propre si possible", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "apporter",
    vfQ: "Il faut apporter du tissu propre si possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["couturesolidaire@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "couturesolidaire@mail",
    vfQ: "Le contact indiqué est couturesolidaire@mail.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_17_TEXT = `Programme de la semaine — Association Mémoire du Quartier

Activité principale : une collecte de photos anciennes.
Salle ou adresse : archives municipales, salle 2.
Créneau : mercredi à 17 h.
les photos seront scannées puis rendues.
Écrire le nom des personnes au dos si possible.
Pour valider sa place, prendre rendez-vous pour scanner. Contact : memoirequartier@ville.fr.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.`;

const E10_5_CE_17_POOL = buildExpressPool("e10-5-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Association Mémoire du Quartier", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "Le message vient de Association Mémoire du Quartier.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une collecte de photos anciennes", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "collecte",
    vfQ: "Le texte parle de une collecte de photos anciennes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["archives municipales, salle 2", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "archives",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mercredi à 17 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mercredi",
    vfQ: "Le moment indiqué est mercredi à 17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les photos seront scannées puis rendues", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "photos",
    vfQ: "Le texte précise que les photos seront scannées puis rendues.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["prendre rendez-vous pour scanner", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "prendre",
    vfQ: "Il faut prendre rendez-vous pour scanner.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["memoirequartier@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "memoirequartier@ville",
    vfQ: "Le contact indiqué est memoirequartier@ville.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_18_TEXT = `Petit mot sur le cahier — Club Handi-Loisirs

Bonjour,
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Merci de lire l'information sur une sortie accompagnée au parc.
Le lieu indiqué est arrêt de tram Université.
La date est samedi à 10 h 15.
chaque bénévole accompagne une personne pendant la balade.
Pique-nique fourni par l'association. Action demandée : confirmer votre disponibilité. Contact : handiloisirs@asso.fr.`;

const E10_5_CE_18_POOL = buildExpressPool("e10-5-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Club Handi-Loisirs", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "Le message vient de Club Handi-Loisirs.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une sortie accompagnée au parc", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "sortie",
    vfQ: "Le texte parle de une sortie accompagnée au parc.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["arrêt de tram Université", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "arrêt",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["samedi à 10 h 15", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 10 h 15.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["chaque bénévole accompagne une personne pendant la balade", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "chaque",
    vfQ: "Le texte précise que chaque bénévole accompagne une personne pendant la balade.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["confirmer votre disponibilité", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "confirmer",
    vfQ: "Il faut confirmer votre disponibilité.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["handiloisirs@asso.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "handiloisirs@asso",
    vfQ: "Le contact indiqué est handiloisirs@asso.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_19_TEXT = `Publication du club — Association Aide Numérique

un atelier pour apprendre les démarches en ligne aura bientôt lieu.
Les membres entrent par salle informatique de la mairie.
Accueil mardi à 9 h 30.
les bénévoles aident à créer une adresse e-mail.
Ordinateurs fournis sur place.
Merci de confirmer la bonne réception de ce message.
Vous pouvez répondre directement à cet e-mail.
Nous traitons votre demande dans les meilleurs délais.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Merci de venir avec une pièce d'identité; renseignements : aidenumerique@ville.fr.`;

const E10_5_CE_19_POOL = buildExpressPool("e10-5-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Association Aide Numérique", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "Le message vient de Association Aide Numérique.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un atelier pour apprendre les démarches en ligne", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "atelier",
    vfQ: "Le texte parle de un atelier pour apprendre les démarches en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salle informatique de la mairie", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mardi à 9 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mardi",
    vfQ: "Le moment indiqué est mardi à 9 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les bénévoles aident à créer une adresse e-mail", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "bénévoles",
    vfQ: "Le texte précise que les bénévoles aident à créer une adresse e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["venir avec une pièce d'identité", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "venir",
    vfQ: "Il faut venir avec une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["aidenumerique@ville.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "aidenumerique@ville",
    vfQ: "Le contact indiqué est aidenumerique@ville.fr.",
    vfC: 0,
  }),
]);

const E10_5_CE_20_TEXT = `Avis affiché à la porte — Collectif Fête Solidaire

Changement ou rappel : la préparation d'un repas partagé.
L'adresse à retenir est cuisine du centre Fraternité.
Le moment à retenir est dimanche à 11 h.
les plats seront servis aux habitants isolés.
Condition pratique : Tablier conseillé.
Avant la date, choisir une équipe cuisine ou service. Contact : fetesolidaire@mail.fr.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.`;

const E10_5_CE_20_POOL = buildExpressPool("e10-5-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Collectif Fête Solidaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Collectif",
    vfQ: "Le message vient de Collectif Fête Solidaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["la préparation d'un repas partagé", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "préparation",
    vfQ: "Le texte parle de la préparation d'un repas partagé.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["cuisine du centre Fraternité", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "cuisine",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["dimanche à 11 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "dimanche",
    vfQ: "Le moment indiqué est dimanche à 11 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les plats seront servis aux habitants isolés", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "plats",
    vfQ: "Le texte précise que les plats seront servis aux habitants isolés.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["choisir une équipe cuisine ou service", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "choisir",
    vfQ: "Il faut choisir une équipe cuisine ou service.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["fetesolidaire@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "fetesolidaire@mail",
    vfQ: "Le contact indiqué est fetesolidaire@mail.fr.",
    vfC: 0,
  }),
]);

export const E10_5_CE: CommunicationExercise[] = [
readingPoolExercise({
  id: "e10-5-ce",
  readingText: E10_5_CE_TEXT,
  questionPool: E10_5_CE_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-2",
  readingText: E10_5_CE_2_TEXT,
  questionPool: E10_5_CE_2_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-3",
  readingText: E10_5_CE_3_TEXT,
  questionPool: E10_5_CE_3_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-4",
  readingText: E10_5_CE_4_TEXT,
  questionPool: E10_5_CE_4_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-5",
  readingText: E10_5_CE_5_TEXT,
  questionPool: E10_5_CE_5_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-6",
  readingText: E10_5_CE_6_TEXT,
  questionPool: E10_5_CE_6_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-7",
  readingText: E10_5_CE_7_TEXT,
  questionPool: E10_5_CE_7_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-8",
  readingText: E10_5_CE_8_TEXT,
  questionPool: E10_5_CE_8_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-9",
  readingText: E10_5_CE_9_TEXT,
  questionPool: E10_5_CE_9_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-10",
  readingText: E10_5_CE_10_TEXT,
  questionPool: E10_5_CE_10_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-11",
  readingText: E10_5_CE_11_TEXT,
  questionPool: E10_5_CE_11_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-12",
  readingText: E10_5_CE_12_TEXT,
  questionPool: E10_5_CE_12_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-13",
  readingText: E10_5_CE_13_TEXT,
  questionPool: E10_5_CE_13_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-14",
  readingText: E10_5_CE_14_TEXT,
  questionPool: E10_5_CE_14_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-15",
  readingText: E10_5_CE_15_TEXT,
  questionPool: E10_5_CE_15_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-16",
  readingText: E10_5_CE_16_TEXT,
  questionPool: E10_5_CE_16_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-17",
  readingText: E10_5_CE_17_TEXT,
  questionPool: E10_5_CE_17_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-18",
  readingText: E10_5_CE_18_TEXT,
  questionPool: E10_5_CE_18_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-19",
  readingText: E10_5_CE_19_TEXT,
  questionPool: E10_5_CE_19_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e10-5-ce-20",
  readingText: E10_5_CE_20_TEXT,
  questionPool: E10_5_CE_20_POOL,
  questionCount: 6,
}),
];

const E10_5_RESPONSABLE = { title: "Le responsable", vous: "le/la responsable de l'association" };
const E10_5_BENEVOLE = { title: "Le bénévole", vous: "le/la bénévole" };
const E10_5_AMI = { title: "L'ami", vous: "l'ami / l'amie" };

export const E10_5_PO: ExpressPoDialogue[] = [

  {
    id: "e10-5-po-1",
    title: "Appeler la Maison du bénévolat",
    context: "Vous téléphonez pour devenir bénévole.",
    roleA: { title: "L'employé de la Maison du bénévolat", vous: "l'employé(e) de la Maison du bénévolat" },
    roleB: { title: "Le futur bénévole", vous: "le futur bénévole / la future bénévole" },
    lines: [
      { role: "A", text: "Maison du bénévolat, bonjour !" },
      { role: "B", text: "Bonjour, je voudrais m'engager comme bénévole." },
      { role: "A", text: "Très bien ! Vous avez déjà une idée de mission ?" },
      { role: "B", text: "Oui, le soutien scolaire. Je me suis déjà investi dans ce domaine." },
      { role: "A", text: "Parfait ! Nous cherchons justement quelqu'un pour le mercredi." },
      { role: "B", text: "Le mercredi, je suis libre à partir de 14 h." },
      { role: "A", text: "Alors venez à la réunion d'information mardi à 18 h 30." },
      { role: "B", text: "D'accord, j'y serai. Merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-5-po-2",
    title: "Premier jour au soutien scolaire",
    context: "C'est votre premier mercredi comme bénévole au soutien scolaire.",
    roleA: E10_5_RESPONSABLE,
    roleB: { title: "Le nouveau bénévole", vous: "le nouveau bénévole / la nouvelle bénévole" },
    lines: [
      { role: "A", text: "Bonjour, bienvenue ! C'est votre premier mercredi avec nous ?" },
      { role: "B", text: "Oui, je suis un peu nerveux. Comment ça se passe ?" },
      { role: "A", text: "Vous aiderez deux enfants avec leurs devoirs, de 14 h à 16 h." },
      { role: "B", text: "D'accord. Quel âge ont-ils ?" },
      { role: "A", text: "Neuf et dix ans. Ils ont surtout besoin d'aide en lecture." },
      { role: "B", text: "Très bien, j'adore lire ! Et s'ils ne comprennent pas ?" },
      { role: "A", text: "Prenez votre temps, et appelez-moi si besoin. Je reste dans la salle." },
      { role: "B", text: "Parfait, merci. Je me sens déjà plus tranquille !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-5-po-3",
    title: "Faire un don de vêtements",
    context: "Vous apportez des cartons de dons à l'accueil de l'association.",
    roleA: { title: "Le bénévole à l'accueil", vous: "le/la bénévole à l'accueil" },
    roleB: { title: "Le donateur", vous: "le donateur / la donatrice" },
    lines: [
      { role: "A", text: "Bonjour ! Je peux vous aider ?" },
      { role: "B", text: "Bonjour, je viens déposer un don : des vêtements et des jouets." },
      { role: "A", text: "Merci beaucoup ! Ils sont en bon état ?" },
      { role: "B", text: "Oui, tout est propre et presque neuf. Il y a aussi des livres." },
      { role: "A", text: "C'est parfait. Posez les cartons ici, à l'accueil." },
      { role: "B", text: "Voilà. Vous acceptez les dons tous les jours ?" },
      { role: "A", text: "Du mardi au samedi, de 14 h à 18 h." },
      { role: "B", text: "Très bien, je reviendrai le mois prochain avec d'autres cartons !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-5-po-4",
    title: "Raconter son dimanche avec le club alpin",
    context: "Vous racontez à un ami votre sortie de dimanche avec le club alpin.",
    roleA: E10_5_AMI,
    roleB: { title: "Le membre du club", vous: "le/la membre du club alpin" },
    lines: [
      { role: "A", text: "Alors, ce dimanche avec le club alpin, c'était comment ?" },
      { role: "B", text: "Génial ! On s'est retrouvés à 7 h et on s'est promenés en montagne." },
      { role: "A", text: "À 7 h ? Tu t'es levé si tôt un dimanche ?" },
      { role: "B", text: "Oui, je me suis couché tôt samedi, exprès !" },
      { role: "A", text: "Et le groupe était sympa ?" },
      { role: "B", text: "Très sympa. On s'est arrêtés pour pique-niquer près d'un lac." },
      { role: "A", text: "Ça me donne envie ! Je peux venir la prochaine fois ?" },
      { role: "B", text: "Bien sûr, inscris-toi sur le site du club !" },
      { role: "A", text: "Merci, c'est noté." },
      { role: "B", text: "Parfait. À bientôt alors !" },
],
  },
  {
    id: "e10-5-po-5",
    title: "Convaincre un ami de devenir bénévole",
    context: "Vous proposez à un ami de venir distribuer des repas avec vous.",
    roleA: { title: "L'ami bénévole", vous: "l'ami / l'amie bénévole" },
    roleB: { title: "L'ami hésitant", vous: "l'ami hésitant / l'amie hésitante" },
    lines: [
      { role: "A", text: "Tu fais quoi le samedi matin, en général ?" },
      { role: "B", text: "Pas grand-chose, je dors ou je regarde la télé…" },
      { role: "A", text: "Viens avec moi à l'association ! On distribue des repas le samedi midi." },
      { role: "B", text: "Je ne sais pas… je n'ai jamais fait ça." },
      { role: "A", text: "Ce n'est pas difficile, et l'équipe est super sympa." },
      { role: "B", text: "Et ça dure combien de temps ?" },
      { role: "A", text: "De 11 h à 14 h. Après, on mange tous ensemble." },
      { role: "B", text: "Bon, d'accord, j'essaie samedi prochain !" },
      { role: "A", text: "OK, je comprends. Merci !" },
      { role: "B", text: "Pas de problème. À plus tard !" },
],
  },
  {
    id: "e10-5-po-6",
    title: "La réunion d'information",
    context: "Vous assistez à la réunion d'information de la Maison du bénévolat.",
    roleA: E10_5_RESPONSABLE,
    roleB: { title: "Le futur bénévole", vous: "le futur bénévole / la future bénévole" },
    lines: [
      { role: "A", text: "Bonsoir à tous ! Vous venez pour devenir bénévoles ?" },
      { role: "B", text: "Oui, bonsoir. Quelles missions proposez-vous en ce moment ?" },
      { role: "A", text: "Soutien scolaire, distribution de repas et visites aux personnes âgées." },
      { role: "B", text: "Les visites, ça m'intéresse. Ça se passe comment ?" },
      { role: "A", text: "Vous rendez visite à une personne âgée une heure par semaine." },
      { role: "B", text: "Je peux choisir le jour ?" },
      { role: "A", text: "Oui, vous vous organiserez directement avec la personne." },
      { role: "B", text: "Très bien, je m'inscris pour cette mission !" },
      { role: "A", text: "D'accord, je vous appelle si besoin." },
      { role: "B", text: "Très bien. Au revoir !" },
],
  },
  {
    id: "e10-5-po-7",
    title: "S'inscrire à une sortie du club alpin",
    context: "Vous téléphonez au club alpin pour la randonnée de dimanche.",
    roleA: { title: "L'employé du club", vous: "l'employé(e) du club alpin" },
    roleB: { title: "Le membre", vous: "le/la membre" },
    lines: [
      { role: "A", text: "Club alpin, bonjour !" },
      { role: "B", text: "Bonjour, je voudrais m'inscrire à la sortie de dimanche." },
      { role: "A", text: "Bien sûr ! Vous avez déjà marché en montagne ?" },
      { role: "B", text: "Oui, je me suis promené plusieurs fois en montagne cet été." },
      { role: "A", text: "Parfait. Le rendez-vous est à 7 h devant le local du club." },
      { role: "B", text: "D'accord. Qu'est-ce qu'il faut apporter ?" },
      { role: "A", text: "De bonnes chaussures, de l'eau et un pique-nique." },
      { role: "B", text: "Très bien, merci. À dimanche !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-5-po-8",
    title: "Un don pour Emmaüs",
    context: "Votre ami prépare des cartons pour faire un don à Emmaüs.",
    roleA: E10_5_AMI,
    roleB: { title: "L'ami qui donne", vous: "l'ami / l'amie qui donne" },
    lines: [
      { role: "A", text: "Salut ! Qu'est-ce que tu fais avec tous ces cartons ?" },
      { role: "B", text: "Je vais faire un don à Emmaüs. Je me suis décidé hier." },
      { role: "A", text: "Ah oui ? Qu'est-ce que tu donnes ?" },
      { role: "B", text: "Des vêtements, de la vaisselle et une petite table." },
      { role: "A", text: "C'est une bonne idée. Ils prennent les meubles aussi ?" },
      { role: "B", text: "Oui, ils peuvent même venir les chercher à la maison." },
      { role: "A", text: "Je ne savais pas ! J'ai un vieux canapé à donner." },
      { role: "B", text: "Appelle-les, ou viens avec moi cet après-midi !" },
      { role: "A", text: "Merci pour les informations." },
      { role: "B", text: "Je vous en prie. Au revoir !" },
],
  },
  {
    id: "e10-5-po-9",
    title: "Organiser une collecte dans le quartier",
    context: "Votre association organise une collecte de jouets ; vous en parlez à un voisin.",
    roleA: E10_5_BENEVOLE,
    roleB: { title: "Le voisin", vous: "le voisin / la voisine" },
    lines: [
      { role: "A", text: "Bonjour ! Je peux vous parler deux minutes ?" },
      { role: "B", text: "Oui, bien sûr. C'est à quel sujet ?" },
      { role: "A", text: "Notre association organise une collecte de jouets pour Noël." },
      { role: "B", text: "Ah, c'est une belle idée ! Comment ça marche ?" },
      { role: "A", text: "Vous déposez les jouets à la salle du quartier, samedi de 10 h à 17 h." },
      { role: "B", text: "D'accord. Les jouets doivent être neufs ?" },
      { role: "A", text: "Non, mais en bon état et complets." },
      { role: "B", text: "Parfait, mes enfants ont plein de jeux à donner !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e10-5-po-10",
    title: "Après la première mission",
    context: "Le responsable fait le bilan de votre première distribution de repas.",
    roleA: E10_5_RESPONSABLE,
    roleB: E10_5_BENEVOLE,
    lines: [
      { role: "A", text: "Alors, cette première distribution de repas, ça s'est bien passé ?" },
      { role: "B", text: "Très bien ! Je me suis occupé des boissons avec Fatima." },
      { role: "A", text: "Vous vous êtes bien organisés, l'équipe était contente." },
      { role: "B", text: "Merci ! On a servi combien de personnes ?" },
      { role: "A", text: "Environ quatre-vingts. C'est plus que le mois dernier." },
      { role: "B", text: "Je reviendrai samedi prochain, c'est sûr." },
      { role: "A", text: "Super ! Vous pouvez aussi venir jeudi pour préparer les colis." },
      { role: "B", text: "Jeudi soir, oui, je suis libre. Comptez sur moi !" },
      { role: "A", text: "Très bien, je note. Merci !" },
      { role: "B", text: "Avec plaisir. À bientôt !" },
],
  },
{
  id: "e10-5-po-11",
  title: "Demander une information sur une rencontre",
  context: "Vous voulez la rencontre des nouveaux habitants.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour la rencontre des nouveaux habitants." },
    { role: "A", text: "Bien sûr. Elle a lieu à la salle communale." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui, c'est conseillé. Il y aura une visite du quartier." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e10-5-po-12",
  title: "Expliquer un problème avec une rencontre",
  context: "Vous expliquez un problème : je ne trouve pas le groupe.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : je ne trouve pas le groupe." },
    { role: "A", text: "Je comprends. Ils sont dans la petite salle à gauche." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Je vous accompagne." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
{
  id: "e10-5-po-13",
  title: "Prendre rendez-vous pour une rencontre",
  context: "Vous voulez prendre rendez-vous pour rencontrer mon conseiller.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais rencontrer mon conseiller." },
    { role: "A", text: "Je peux vous proposer jeudi matin à 11 heures." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "Parfait. Je veux parler de mon projet." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
{
  id: "e10-5-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous confirmez ceci : notre rencontre de demain.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme notre rencontre de demain." },
    { role: "A", text: "Très bien. C'est bien à 10 heures devant la bibliothèque ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "J'apporte les documents." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
{
  id: "e10-5-po-15",
  title: "Demander conseil sur une rencontre",
  context: "Vous demandez conseil pour parler à de nouvelles personnes.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour parler à de nouvelles personnes." },
    { role: "A", text: "Commencez par une question simple." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "Présentez-vous calmement." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
{
  id: "e10-5-po-16",
  title: "Signaler un retard",
  context: "Vous signalez un retard : je serai en retard à la rencontre.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : je serai en retard à la rencontre." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "La route est fermée." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "J'arrive dans vingt minutes." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e10-5-po-17",
  title: "Faire une réclamation polie",
  context: "Vous faites une réclamation : personne n'était à l'accueil.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : personne n'était à l'accueil." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "J'ai attendu trente minutes." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Je voudrais un autre créneau." },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
{
  id: "e10-5-po-18",
  title: "Demander une aide urgente",
  context: "Vous devez demander une aide urgente : contacter le groupe avant ce soir.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour contacter le groupe avant ce soir." },
    { role: "A", text: "Voici le numéro de Clara." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Elle répond vite aux messages." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
{
  id: "e10-5-po-19",
  title: "Comparer deux possibilités",
  context: "Vous comparez deux options : une rencontre en ligne et une rencontre sur place.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare une rencontre en ligne et une rencontre sur place." },
    { role: "A", text: "En ligne c'est pratique." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "Sur place on parle plus facilement." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
{
  id: "e10-5-po-20",
  title: "Remercier pour une aide",
  context: "Vous remerciez pour une aide : votre accueil pendant la rencontre.",
  roleA: { title: "L'organisateur", vous: "l'organisateur / l'organisatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour votre accueil pendant la rencontre." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "Je me suis senti à l'aise." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "J'aimerais revenir la semaine prochaine." },
    { role: "A", text: "N'hésitez pas à revenir si besoin." },
    { role: "B", text: "Oui, je le ferai." },
    { role: "A", text: "Bonne continuation !" },
    { role: "B", text: "Merci, à vous aussi." },
  ],
}
];

export const E10_5_PE: ExpressPePrompt[] = [

  {
    id: "e10-5-pe-1",
    title: "Devenir bénévole",
    situation: "Vous voulez devenir bénévole à la Maison du bénévolat.",
    instruction: "Écrivez un e-mail : présentez-vous, dites quelle mission vous intéresse et donnez vos disponibilités.",
    points: ["Votre présentation", "La mission choisie", "Vos disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pe-2",
    title: "Ma première journée de bénévolat",
    situation: "Vous avez fait votre première journée de bénévolat samedi.",
    instruction: "Racontez au passé composé : comment vous vous êtes préparé(e), ce que vous avez fait et comment vous vous êtes senti(e).",
    points: ["La préparation", "Les activités", "Vos sentiments"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pe-3",
    title: "Annonce pour une collecte",
    situation: "Votre association organise une collecte de jouets pour Noël.",
    instruction: "Écrivez l'annonce pour le quartier : expliquez le but de la collecte, dites ce qu'on peut donner et où déposer les dons.",
    points: ["Le but de la collecte", "Ce qu'on peut donner", "Le lieu et les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pe-4",
    title: "Convaincre un ami",
    situation: "Votre ami a du temps libre mais hésite à faire du bénévolat.",
    instruction: "Écrivez-lui un message : racontez votre expérience, expliquez ce que le bénévolat vous apporte et proposez-lui de venir avec vous.",
    points: ["Votre expérience", "Ce que ça vous apporte", "Votre proposition"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pe-5",
    title: "Présenter une association",
    situation: "Le journal du quartier vous demande de présenter votre association.",
    instruction: "Décrivez-la : ses missions, ses bénévoles et comment les habitants peuvent aider.",
    points: ["Les missions", "Les bénévoles", "Comment aider"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pe-6",
    title: "Le compte rendu de la réunion",
    situation: "Vous avez participé à la réunion mensuelle de votre association ; un membre était absent.",
    instruction: "Écrivez-lui un résumé : les décisions prises, les prochaines activités et ce qu'il devra faire.",
    points: ["Les décisions", "Les prochaines activités", "Sa mission"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pe-7",
    title: "Merci aux bénévoles",
    situation: "Votre association a organisé un grand événement réussi grâce aux bénévoles.",
    instruction: "Écrivez un message de remerciement à l'équipe : remerciez, rappelez les moments forts et annoncez le prochain rendez-vous.",
    points: ["Le remerciement", "Les moments forts", "Le prochain rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pe-8",
    title: "Bénévolat ou travail ?",
    situation: "Un ami ne comprend pas pourquoi vous travaillez gratuitement pour une association.",
    instruction: "Expliquez la différence entre bénévolat et travail payé, et ce que le bénévolat vous apporte. Donnez un exemple.",
    points: ["La différence", "Ce que ça apporte", "Un exemple"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pe-9",
    title: "S'inscrire à une sortie du club",
    situation: "Le club alpin organise une randonnée en montagne dimanche.",
    instruction: "Écrivez un message au club : inscrivez-vous, posez des questions sur le rendez-vous et le matériel, et parlez de votre expérience de la montagne.",
    points: ["L'inscription", "Vos questions", "Votre expérience"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pe-10",
    title: "Votre engagement idéal",
    situation: "La Maison du bénévolat demande aux nouveaux inscrits de décrire leur mission idéale.",
    instruction: "Décrivez la mission de bénévolat idéale pour vous : le domaine, le temps que vous pouvez donner et pourquoi ce choix.",
    points: ["Le domaine", "Le temps disponible", "Pourquoi ce choix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e10-5-pe-11",
  title: "Décrire une expérience — vie associative",
  situation: "Vous avez vécu une situation importante liée à vie associative.",
  instruction: "Racontez cette expérience : le contexte, ce qui s'est passé et le résultat.",
  points: ["Le contexte", "Les événements principaux", "Le résultat"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-5-pe-12",
  title: "Demander des informations — vie associative",
  situation: "Vous avez besoin d'informations sur vie associative.",
  instruction: "Écrivez un message formel : présentez-vous, posez trois questions précises et remerciez.",
  points: ["Votre présentation", "Trois questions", "Formule de politesse"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-5-pe-13",
  title: "Donner votre avis — vie associative",
  situation: "On vous demande votre avis sur vie associative.",
  instruction: "Exprimez votre opinion : avantages, inconvénients et recommandation.",
  points: ["Les points positifs", "Les points négatifs", "Votre recommandation"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-5-pe-14",
  title: "Raconter un problème — vie associative",
  situation: "Vous avez rencontré un problème avec vie associative.",
  instruction: "Décrivez le problème, ce que vous avez fait et ce que vous attendez maintenant.",
  points: ["Le problème", "Vos actions", "Votre attente"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-5-pe-15",
  title: "Proposer une solution — vie associative",
  situation: "Un ami a un souci lié à vie associative.",
  instruction: "Écrivez-lui un message avec deux conseils pratiques et une offre d'aide.",
  points: ["Deux conseils", "Votre offre d'aide", "Formule amicale"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-5-pe-16",
  title: "Comparer deux options — vie associative",
  situation: "Vous hésitez entre deux choix pour vie associative.",
  instruction: "Listez les avantages et inconvénients de chaque option et indiquez votre préférence.",
  points: ["Option A", "Option B", "Votre choix"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-5-pe-17",
  title: "Planifier une démarche — vie associative",
  situation: "Vous devez organiser une démarche liée à vie associative.",
  instruction: "Écrivez un plan avec les étapes, les documents nécessaires et les délais.",
  points: ["Les étapes", "Les documents", "Les délais"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-5-pe-18",
  title: "Remercier — vie associative",
  situation: "Quelqu'un vous a aidé(e) pour vie associative.",
  instruction: "Écrivez un message de remerciement : rappelez l'aide reçue et proposez de rendre la pareille.",
  points: ["L'aide reçue", "Votre gratitude", "Votre proposition"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-5-pe-19",
  title: "Informer — vie associative",
  situation: "Vous devez informer un proche d'une nouvelle sur vie associative.",
  instruction: "Écrivez un message clair avec les faits importants et une question pour lui.",
  points: ["Les informations clés", "Les détails pratiques", "Une question"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e10-5-pe-20",
  title: "Bilan personnel — vie associative",
  situation: "Vous faites le bilan de votre expérience avec vie associative.",
  instruction: "Rédigez un texte : ce que vous avez appris, ce qui reste à faire et vos objectifs.",
  points: ["Ce que vous avez appris", "Ce qui reste à faire", "Vos objectifs"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

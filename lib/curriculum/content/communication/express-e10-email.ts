import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E10 — Vie sociale (invitations, rencontres, événements, école, associations).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E10.1 — Inviter et être invité
   ════════════════════════════════════════════════════════════════════════════ */

const E10_1_CE_EMAIL_TEXT = `De : Camille

Objet : Confirmation — un dîner maison samedi soir
Bonjour Nadia,
Je vous confirme un dîner maison samedi soir.
Le rendez-vous est prévu samedi à 19 h 30, à chez Camille, rue des Roses 4.
il y aura une soupe, une tarte et une option végétarienne.
Participation libre : chacun apporte une boisson.
Merci de confirmer avant jeudi soir.
Vous pouvez répondre par camille@exemple.fr.
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
Cordialement, Camille`;

const E10_1_CE_EMAIL_POOL = buildExpressPool("e10-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Camille", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Camille",
    vfQ: "L'e-mail vient de Camille.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_2_TEXT = `De : Famille Morel

Objet : Petite organisation pour un anniversaire surprise pour Inès
Bonjour Lina,
Nous préparons les derniers détails.
Tout aura lieu à salle du Parc, entrée côté jardin, dimanche à 15 h.
les invités doivent arriver dix minutes avant Inès.
À retenir : Cadeau commun : 5 € maximum par personne.
Pouvez-vous garder le secret jusqu'à dimanche ?
Contact direct : message à Hugo.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
À bientôt, Famille Morel`;

const E10_1_CE_EMAIL_2_POOL = buildExpressPool("e10-1-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Famille Morel", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Famille",
    vfQ: "L'e-mail vient de Famille Morel.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_3_TEXT = `De : Voisins du 3e étage

Objet : Réponse attendue — un apéritif de bienvenue
Bonjour Marc,
Votre présence nous aidera beaucoup.
Le lieu reste palier du troisième étage.
L'horaire confirmé est vendredi à 18 h 45.
les nouveaux voisins s'appellent Nora et Sami.
Prévoir un verre ou une petite assiette salée.
Merci de indiquer si vous venez avant la date.
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
Bien à vous, Voisins du 3e étage`;

const E10_1_CE_EMAIL_3_POOL = buildExpressPool("e10-1-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Voisins du 3e étage", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Voisins",
    vfQ: "L'e-mail vient de Voisins du 3e étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_4_TEXT = `De : Médiathèque Jean-Jaurès

Objet : Informations pratiques
Bonjour Ariane,
Voici les informations pour une invitation à rencontrer une autrice.
Nous vous attendons à salle bleue de la médiathèque.
Le début est fixé mercredi à 17 h.
l'autrice parlera de son roman pendant trente minutes.
Prévoir aussi : Entrée gratuite sur réservation.
Pour toute question : accueil@mediatheque.fr.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
Merci, Médiathèque Jean-Jaurès`;

const E10_1_CE_EMAIL_4_POOL = buildExpressPool("e10-1-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Médiathèque Jean-Jaurès", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Médiathèque",
    vfQ: "L'e-mail vient de Médiathèque Jean-Jaurès.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_5_TEXT = `De : Club Photo Lumière

Objet : Invitation mise à jour
Bonjour Omar,
Nous avons modifié un détail pour un vernissage ouvert aux amis.
Le point de rendez-vous est maintenant galerie du quai, 12 rue du Port.
La date ne change pas : jeudi à 18 h.
trois élèves présentent leurs photos de voyage.
Un jus de fruit est offert à l'entrée.
Merci de venir avec une personne maximum.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Bonne journée, Club Photo Lumière`;

const E10_1_CE_EMAIL_5_POOL = buildExpressPool("e10-1-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Club Photo Lumière", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "L'e-mail vient de Club Photo Lumière.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_6_TEXT = `De : Sofia

Objet : Votre aide pour un pique-nique au bord du lac
Bonjour Clara,
Nous cherchons encore quelques personnes pour aider.
L'équipe se retrouve à pelouse près du ponton nord.
Rendez-vous dimanche à 12 h 30.
Sofia apporte des couvertures et des jeux de cartes.
Indication pratique : Chacun prépare un plat facile à partager.
Si vous êtes disponible, dire ce que vous apportez.
Réponse à sms à Sofia.
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

const E10_1_CE_EMAIL_6_POOL = buildExpressPool("e10-1-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Sofia", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Sofia",
    vfQ: "L'e-mail vient de Sofia.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_7_TEXT = `De : Restaurant Le Safran

Objet : Rappel avant demain
Bonjour Yanis,
Je vous rappelle une table réservée pour six personnes.
Tout se passera à 18 rue des Écoles.
Merci d'arriver mardi à 20 h.
la réservation est au nom de Bensaïd.
Menu du soir : 24 € hors boissons.
N'oubliez pas de prévenir en cas de retard.
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
Cordialement, Restaurant Le Safran`;

const E10_1_CE_EMAIL_7_POOL = buildExpressPool("e10-1-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Restaurant Le Safran", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Restaurant",
    vfQ: "L'e-mail vient de Restaurant Le Safran.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_8_TEXT = `De : Centre social Bellevue

Objet : Documents et horaires
Bonjour Élise,
Pour une soirée crêpes entre voisins, voici ce qu'il faut savoir.
Adresse : grande cuisine du centre.
Horaire : vendredi à 19 h.
les enfants peuvent venir avec un adulte.
Frais ou matériel : Ingrédients fournis, boisson à apporter.
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
Merci de s'inscrire à l'accueil; contact : 04 76 20 30 40.
Avec nos salutations, Centre social Bellevue`;

const E10_1_CE_EMAIL_8_POOL = buildExpressPool("e10-1-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Centre social Bellevue", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Centre",
    vfQ: "L'e-mail vient de Centre social Bellevue.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_9_TEXT = `De : Association Horizon

Objet : Merci de confirmer
Bonjour Malik,
Nous devons compter les participants pour une sortie cinéma en groupe.
Le rendez-vous aura lieu à cinéma Palace, devant l'entrée.
Il est prévu mercredi à 18 h 20.
le film commence à 18 h 45 en version française.
Billet réduit : 7 € pour les inscrits.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
Merci de acheter le billet avant mardi.
Réponse souhaitée : horizon.sorties@mail.fr.`;

const E10_1_CE_EMAIL_9_POOL = buildExpressPool("e10-1-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Association Horizon", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "L'e-mail vient de Association Horizon.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_10_TEXT = `De : École des Lilas

Objet : Changement de salle
Bonjour Fatou,
Une précision concerne un café des parents.
Le nouveau lieu est préau couvert de l'école.
L'horaire reste vendredi à 8 h 15.
la directrice présentera les projets du trimestre.
Café offert, gâteaux bienvenus.
Merci de signaler votre présence dans le cahier.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
À bientôt, École des Lilas`;

const E10_1_CE_EMAIL_10_POOL = buildExpressPool("e10-1-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["École des Lilas", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "École",
    vfQ: "L'e-mail vient de École des Lilas.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_11_TEXT = `De : Comité des fêtes

Objet : Programme court
Bonjour Romain,
Voici le programme de une invitation au feu d'artifice.
Accueil à place du Château.
Début samedi à 21 h 30.
la musique commencera avant le spectacle.
Apporter une veste chaude.
Pour participer, venir quinze minutes avant le début.
Questions : info@fetes-locales.fr.
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

const E10_1_CE_EMAIL_11_POOL = buildExpressPool("e10-1-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Comité des fêtes", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Comité",
    vfQ: "L'e-mail vient de Comité des fêtes.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_12_TEXT = `De : Groupe Randonnée Douce

Objet : Suite à votre inscription
Bonjour Sébastien,
Nous avons bien reçu votre inscription pour une marche facile avec invités.
Vous êtes attendu(e) à parking de la forêt basse.
La rencontre commence dimanche à 9 h 15.
le parcours dure environ deux heures.
Prévoir eau, chaussures fermées et 2 € pour le covoiturage.
Merci de confirmer le nombre de participants.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Cordialement, Groupe Randonnée Douce`;

const E10_1_CE_EMAIL_12_POOL = buildExpressPool("e10-1-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Groupe Randonnée Douce", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Groupe",
    vfQ: "L'e-mail vient de Groupe Randonnée Douce.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_13_TEXT = `De : Atelier Cuisine Partagée

Objet : Message aux participants
Bonjour Julie,
Ce message est envoyé à toutes les personnes inscrites.
Sujet : un repas syrien ouvert aux curieux.
Lieu : cuisine B du centre associatif.
Horaire : samedi à 11 h.
Maha montrera comment préparer le houmous.
Participation : 6 € pour les ingrédients. Merci de indiquer les allergies alimentaires.
Contact : atelier.cuisine@mail.fr.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.`;

const E10_1_CE_EMAIL_13_POOL = buildExpressPool("e10-1-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Atelier Cuisine Partagée", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Atelier",
    vfQ: "L'e-mail vient de Atelier Cuisine Partagée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_14_TEXT = `De : Bibliothèque du Lac

Objet : Dernière vérification
Bonjour Thomas,
Avant un club lecture spécial polar, nous vérifions les détails.
Le groupe se retrouve à coin lecture au premier étage.
Le rendez-vous est jeudi à 18 h 10.
le livre choisi est disponible à l'accueil.
Aucun achat n'est nécessaire.
Pouvez-vous lire les deux premiers chapitres ?
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
Merci, Bibliothèque du Lac`;

const E10_1_CE_EMAIL_14_POOL = buildExpressPool("e10-1-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Bibliothèque du Lac", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Bibliothèque",
    vfQ: "L'e-mail vient de Bibliothèque du Lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_15_TEXT = `De : Amina

Objet : Invitation personnelle
Bonjour Luc,
Je serais content(e) de vous voir pour une invitation personnelle à prendre un café.
Je propose Café du Théâtre, table près de la fenêtre.
La date choisie est lundi à 16 h 30.
Amina veut discuter de son nouveau travail.
Chacun paie sa consommation.
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
Merci de répondre avant midi.
À très vite, Amina`;

const E10_1_CE_EMAIL_15_POOL = buildExpressPool("e10-1-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Amina", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Amina",
    vfQ: "L'e-mail vient de Amina.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_16_TEXT = `De : Parents de Zoé

Objet : Organisation du groupe
Bonjour Mehdi,
Le groupe confirme un goûter après le spectacle.
Nous partirons de cour de l'école, près du marronnier.
Le départ est prévu mardi à 16 h 45.
les enfants chanteront deux chansons avant le goûter.
Merci d'apporter un fruit ou un gâteau simple.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
Merci de noter votre contribution sur la feuille; contact : Zoé via Pronote.
Amicalement, Parents de Zoé`;

const E10_1_CE_EMAIL_16_POOL = buildExpressPool("e10-1-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Parents de Zoé", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Parents",
    vfQ: "L'e-mail vient de Parents de Zoé.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_17_TEXT = `De : Maison de quartier Ouest

Objet : À lire avant de venir
Bonjour Priya,
Avant une soirée jeux ouverte aux nouveaux, lisez ces informations.
Entrée par salle 2, maison de quartier.
Accueil vendredi à 20 h.
des jeux courts seront expliqués par les bénévoles.
Entrée gratuite, boisson à 1 €.
Il faudra s'inscrire pour préparer les tables.
Bonne réception, Maison de quartier Ouest
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

const E10_1_CE_EMAIL_17_POOL = buildExpressPool("e10-1-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Maison de quartier Ouest", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Maison",
    vfQ: "L'e-mail vient de Maison de quartier Ouest.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_18_TEXT = `De : Compagnie des Amis

Objet : Compte rendu et prochaine étape
Bonjour Nolan,
Après notre échange, nous gardons une répétition publique de théâtre.
Le lieu choisi est petite salle du conservatoire.
La prochaine date est samedi à 14 h.
le public pourra donner son avis après la scène.
Entrée libre dans la limite de 30 places.
La prochaine étape est de arriver sans faire de bruit.
Contact : compagnie.amis@mail.fr.
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

const E10_1_CE_EMAIL_18_POOL = buildExpressPool("e10-1-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Compagnie des Amis", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Compagnie",
    vfQ: "L'e-mail vient de Compagnie des Amis.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_19_TEXT = `De : Réseau Familles

Objet : Participation confirmée
Bonjour Sara,
Votre participation à une invitation à un brunch partagé est confirmée.
Merci de venir à local familles, avenue Pasteur 9.
Nous commencerons dimanche à 10 h 30.
un coin jeux sera installé pour les petits.
Apporter un plat froid avec une étiquette.
Merci aussi de confirmer le nombre d'enfants.
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
Cordialement, Réseau Familles`;

const E10_1_CE_EMAIL_19_POOL = buildExpressPool("e10-1-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Réseau Familles", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Réseau",
    vfQ: "L'e-mail vient de Réseau Familles.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_1_CE_EMAIL_20_TEXT = `De : Mairie annexe

Objet : Question rapide
Bonjour Antoine,
J'ai une question au sujet de une réception pour les nouveaux habitants.
Est-ce que salle des mariages de la mairie annexe vous convient ?
Le moment proposé est jeudi à 18 h 30.
le maire présentera les services du quartier.
Pièce d'identité demandée à l'entrée.
Pouvez-vous répondre au formulaire d'invitation ?
Répondez à mairie-annexe@ville.fr.
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

const E10_1_CE_EMAIL_20_POOL = buildExpressPool("e10-1-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Mairie annexe", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Mairie",
    vfQ: "L'e-mail vient de Mairie annexe.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

export const E10_1_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e10-1-ce-email",
  readingText: E10_1_CE_EMAIL_TEXT,
  questionPool: E10_1_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e10-1-ce-email-2",
  readingText: E10_1_CE_EMAIL_2_TEXT,
  questionPool: E10_1_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-3",
  readingText: E10_1_CE_EMAIL_3_TEXT,
  questionPool: E10_1_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-4",
  readingText: E10_1_CE_EMAIL_4_TEXT,
  questionPool: E10_1_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-5",
  readingText: E10_1_CE_EMAIL_5_TEXT,
  questionPool: E10_1_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-6",
  readingText: E10_1_CE_EMAIL_6_TEXT,
  questionPool: E10_1_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-7",
  readingText: E10_1_CE_EMAIL_7_TEXT,
  questionPool: E10_1_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-8",
  readingText: E10_1_CE_EMAIL_8_TEXT,
  questionPool: E10_1_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-9",
  readingText: E10_1_CE_EMAIL_9_TEXT,
  questionPool: E10_1_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-10",
  readingText: E10_1_CE_EMAIL_10_TEXT,
  questionPool: E10_1_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-11",
  readingText: E10_1_CE_EMAIL_11_TEXT,
  questionPool: E10_1_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-12",
  readingText: E10_1_CE_EMAIL_12_TEXT,
  questionPool: E10_1_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-13",
  readingText: E10_1_CE_EMAIL_13_TEXT,
  questionPool: E10_1_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-14",
  readingText: E10_1_CE_EMAIL_14_TEXT,
  questionPool: E10_1_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-15",
  readingText: E10_1_CE_EMAIL_15_TEXT,
  questionPool: E10_1_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-16",
  readingText: E10_1_CE_EMAIL_16_TEXT,
  questionPool: E10_1_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-17",
  readingText: E10_1_CE_EMAIL_17_TEXT,
  questionPool: E10_1_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-18",
  readingText: E10_1_CE_EMAIL_18_TEXT,
  questionPool: E10_1_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-19",
  readingText: E10_1_CE_EMAIL_19_TEXT,
  questionPool: E10_1_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-1-ce-email-20",
  readingText: E10_1_CE_EMAIL_20_TEXT,
  questionPool: E10_1_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E10_1_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e10-1-pee-1",
    title: "Accepter une invitation",
    situation: "Camille vous invite à sa crémaillère.",
    sourceMessage: {
      from: "Camille",
      subject: "Invitation à notre crémaillère",
      body: "Bonjour,\nNous organisons notre crémaillère le samedi 21 juin, à partir de 18 h 30.\nTu peux venir avec une personne de ton choix.\nRéponds-moi avant le 10 juin, s'il te plaît !\nCamille",
    },
    instruction: "Répondez à Camille : acceptez l'invitation, dites avec qui vous allez venir et demandez ce que vous pouvez apporter.",
    points: ["Votre acceptation", "Avec qui vous venez", "Une question sur ce qu'il faut apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-2",
    title: "Refuser poliment",
    situation: "Une amie vous invite à son anniversaire, mais vous n'êtes pas libre.",
    sourceMessage: {
      from: "Nadia",
      subject: "Mes 30 ans !",
      body: "Coucou,\nJe fête mes 30 ans le vendredi 4 juillet au restaurant du Lac, à 19 h 30.\nJ'espère vraiment que tu vas venir !\nDis-moi vite,\nNadia",
    },
    instruction: "Répondez à Nadia : refusez poliment, expliquez pourquoi vous n'êtes pas libre et proposez une autre rencontre.",
    points: ["Un refus poli", "La raison de votre absence", "Une proposition de rencontre"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-3",
    title: "Répondre à une invitation de mariage",
    situation: "Des amis vous invitent à leur mariage.",
    sourceMessage: {
      from: "Julie et Marc",
      subject: "Notre mariage",
      body: "Bonjour,\nNous nous marions le samedi 6 septembre à la salle des fêtes de Morges.\nLa cérémonie commence à 15 h, puis il y a un repas le soir.\nMerci de nous dire combien de personnes viennent avec toi.\nJulie et Marc",
    },
    instruction: "Répondez à Julie et Marc : félicitez-les, dites combien de personnes viennent avec vous et posez une question sur la tenue ou le cadeau.",
    points: ["Vos félicitations", "Le nombre de personnes", "Une question sur la tenue ou le cadeau"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-4",
    title: "Un apéritif chez le voisin",
    situation: "Votre voisin vous invite à un apéritif.",
    sourceMessage: {
      from: "M. Roth",
      subject: "Petit apéritif entre voisins",
      body: "Bonjour,\nNous organisons un petit apéritif sur notre terrasse dimanche prochain.\nVous êtes les bienvenus avec toute la famille.\nBien à vous,\nM. Roth",
    },
    instruction: "Répondez à M. Roth : acceptez l'invitation, proposez d'apporter quelque chose et demandez à quelle heure il faut venir.",
    points: ["Votre acceptation", "Ce que vous proposez d'apporter", "Une question sur l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-5",
    title: "Conseiller un ami invité",
    situation: "Un ami est invité à dîner et il ne sait pas quoi apporter.",
    sourceMessage: {
      from: "Tomas",
      subject: "Petite question",
      body: "Salut,\nJe suis invité à dîner chez mes voisins samedi soir. C'est la première fois.\nQu'est-ce que je peux apporter ? Des fleurs ? Du vin ?\nMerci pour ton aide !\nTomas",
    },
    instruction: "Répondez à Tomas : donnez-lui deux idées de cadeaux, expliquez pourquoi et donnez un conseil de politesse pour la soirée.",
    points: ["Deux idées de cadeaux", "Pourquoi ces idées", "Un conseil de politesse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-6",
    title: "Pique-nique d'équipe",
    situation: "Une collègue organise un pique-nique pour toute l'équipe.",
    sourceMessage: {
      from: "Sandra",
      subject: "Pique-nique de l'équipe",
      body: "Bonjour à tous,\nJe propose un pique-nique d'équipe samedi 12 juillet à midi.\nChacun apporte quelque chose à manger ou à boire.\nQui vient ? Répondez-moi cette semaine !\nSandra",
    },
    instruction: "Répondez à Sandra : dites que vous venez, précisez ce que vous allez apporter et posez une question sur le lieu du pique-nique.",
    points: ["Votre présence", "Ce que vous apportez", "Une question sur le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-7",
    title: "Anniversaire surprise",
    situation: "Un ami organise une fête surprise pour sa femme.",
    sourceMessage: {
      from: "Léo",
      subject: "Chut, c'est une surprise !",
      body: "Salut,\nJ'organise une fête surprise pour les 40 ans d'Emma, samedi 28 juin à 19 h chez nous.\nSurtout, ne lui dis rien !\nTu peux venir ?\nLéo",
    },
    instruction: "Répondez à Léo : confirmez votre venue, promettez de garder le secret et demandez à quelle heure il faut arriver exactement.",
    points: ["Votre confirmation", "La promesse de garder le secret", "Une question sur l'heure d'arrivée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-8",
    title: "S'excuser après une absence",
    situation: "Vous n'êtes pas allé(e) à la fête d'une amie hier soir.",
    sourceMessage: {
      from: "Fatou",
      subject: "Tu n'es pas venu(e) hier ?",
      body: "Coucou,\nOn t'a attendu(e) hier soir à la fête, mais tu n'es pas venu(e).\nJ'espère que tout va bien. Qu'est-ce qui s'est passé ?\nFatou",
    },
    instruction: "Répondez à Fatou : excusez-vous, expliquez ce qui s'est passé et proposez de la voir bientôt.",
    points: ["Vos excuses", "L'explication de votre absence", "Une proposition de rencontre"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-9",
    title: "Fête reportée",
    situation: "L'hôte de la fête doit changer la date.",
    sourceMessage: {
      from: "Hugo",
      subject: "Changement de date",
      body: "Bonjour,\nMauvaise nouvelle : je suis malade, la fête de samedi est reportée au samedi suivant, le 28 juin.\nJ'espère que tu pourras venir quand même.\nHugo",
    },
    instruction: "Répondez à Hugo : souhaitez-lui un bon rétablissement, dites si la nouvelle date vous convient et proposez votre aide pour la préparation.",
    points: ["Un mot pour sa santé", "Votre réponse pour la nouvelle date", "Une proposition d'aide"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-10",
    title: "Remercier après une soirée",
    situation: "Camille vous écrit après sa crémaillère.",
    sourceMessage: {
      from: "Camille",
      subject: "Merci d'être venu(e) !",
      body: "Bonjour,\nMerci beaucoup d'être venu(e) samedi, c'était une très belle soirée !\nTon dessert a eu beaucoup de succès.\nÀ bientôt,\nCamille",
    },
    instruction: "Répondez à Camille : remerciez-la pour la soirée, dites ce que vous avez préféré et invitez-la chez vous à votre tour.",
    points: ["Un remerciement", "Ce que vous avez préféré", "Une invitation chez vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-11",
    title: "Répondre — invitations (11)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-12",
    title: "Répondre — invitations (12)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-13",
    title: "Répondre — invitations (13)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-14",
    title: "Répondre — invitations (14)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-15",
    title: "Répondre — invitations (15)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-16",
    title: "Répondre — invitations (16)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-17",
    title: "Répondre — invitations (17)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-18",
    title: "Répondre — invitations (18)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-19",
    title: "Répondre — invitations (19)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-20",
    title: "Répondre — invitations (20)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.2 — Faire des rencontres
   ════════════════════════════════════════════════════════════════════════════ */

const E10_2_CE_EMAIL_TEXT = `De : Café des langues

Objet : Confirmation — une table pour pratiquer le français
Bonjour Lena,
Je vous confirme une table pour pratiquer le français.
Le rendez-vous est prévu mardi à 18 h, à Café Central, salle du fond.
chaque table change de langue toutes les vingt minutes.
Une boisson minimum est demandée.
Merci de s'inscrire sur la liste en ligne.
Vous pouvez répondre par cafedeslangues@ville.fr.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Cordialement, Café des langues`;

const E10_2_CE_EMAIL_POOL = buildExpressPool("e10-2-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Café des langues", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Café",
    vfQ: "L'e-mail vient de Café des langues.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_2_TEXT = `De : Club Salsa Débutants

Objet : Petite organisation pour une séance d'essai pour rencontrer le groupe
Bonjour Nour,
Nous préparons les derniers détails.
Tout aura lieu à studio Mambo, rue Verte 3, jeudi à 19 h.
aucun partenaire n'est nécessaire pour commencer.
À retenir : Essai gratuit, chaussures propres obligatoires.
Pouvez-vous envoyer votre prénom avant mercredi ?
Contact direct : sms à Diego.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
À bientôt, Club Salsa Débutants`;

const E10_2_CE_EMAIL_2_POOL = buildExpressPool("e10-2-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Club Salsa Débutants", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "L'e-mail vient de Club Salsa Débutants.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_3_TEXT = `De : Application Voisins Actifs

Objet : Réponse attendue — une rencontre autour du jardin partagé
Bonjour Mina,
Votre présence nous aidera beaucoup.
Le lieu reste jardin des Coccinelles.
L'horaire confirmé est samedi à 10 h.
les anciens membres expliqueront les parcelles.
Apporter des gants si possible.
Merci de cliquer sur Je participe avant la date.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
Bien à vous, Application Voisins Actifs`;

const E10_2_CE_EMAIL_3_POOL = buildExpressPool("e10-2-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Application Voisins Actifs", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Application",
    vfQ: "L'e-mail vient de Application Voisins Actifs.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_4_TEXT = `De : Atelier Cuisine du Monde

Objet : Informations pratiques
Bonjour Karim,
Voici les informations pour une activité pour faire connaissance.
Nous vous attendons à cuisine de la MJC.
Le début est fixé vendredi à 18 h 30.
les participants cuisineront par groupes de trois.
Prévoir aussi : Participation : 4 € pour les ingrédients.
Pour toute question : mjc-cuisine@mail.fr.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
Merci, Atelier Cuisine du Monde`;

const E10_2_CE_EMAIL_4_POOL = buildExpressPool("e10-2-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Atelier Cuisine du Monde", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Atelier",
    vfQ: "L'e-mail vient de Atelier Cuisine du Monde.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_5_TEXT = `De : Groupe Nouveaux en ville

Objet : Invitation mise à jour
Bonjour Olga,
Nous avons modifié un détail pour un parcours découverte du centre.
Le point de rendez-vous est maintenant fontaine de la place Royale.
La date ne change pas : dimanche à 14 h.
la balade finit par un café partagé.
Prévoir un ticket de tram au cas où.
Merci de répondre au sondage du groupe.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Bonne journée, Groupe Nouveaux en ville`;

const E10_2_CE_EMAIL_5_POOL = buildExpressPool("e10-2-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Groupe Nouveaux en ville", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Groupe",
    vfQ: "L'e-mail vient de Groupe Nouveaux en ville.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_6_TEXT = `De : Médiathèque

Objet : Votre aide pour un atelier conversation entre lecteurs
Bonjour Sami,
Nous cherchons encore quelques personnes pour aider.
L'équipe se retrouve à espace presse de la médiathèque.
Rendez-vous mercredi à 16 h.
chacun présente un article court qu'il a aimé.
Indication pratique : Carte de médiathèque demandée.
Si vous êtes disponible, choisir un article avant de venir.
Réponse à accueil de la médiathèque.
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

const E10_2_CE_EMAIL_6_POOL = buildExpressPool("e10-2-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Médiathèque", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Médiathèque",
    vfQ: "L'e-mail vient de Médiathèque.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_7_TEXT = `De : Club Randonnée Urbaine

Objet : Rappel avant demain
Bonjour Éva,
Je vous rappelle une marche pour nouveaux amis.
Tout se passera à devant l'office du tourisme.
Merci d'arriver samedi à 9 h 45.
le parcours passe par trois parcs.
Prévoir de l'eau et des baskets.
N'oubliez pas de confirmer sa présence sur le groupe.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Cordialement, Club Randonnée Urbaine`;

const E10_2_CE_EMAIL_7_POOL = buildExpressPool("e10-2-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Club Randonnée Urbaine", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "L'e-mail vient de Club Randonnée Urbaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_8_TEXT = `De : Soirée Jeux Coopératifs

Objet : Documents et horaires
Bonjour Boris,
Pour une table ouverte aux personnes seules, voici ce qu'il faut savoir.
Adresse : bar associatif La Pioche.
Horaire : vendredi à 20 h 15.
un animateur expliquera les règles.
Frais ou matériel : Adhésion journée : 2 €.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Merci de arriver avant le début de la première partie; contact : contact@lapioche.fr.
Avec nos salutations, Soirée Jeux Coopératifs`;

const E10_2_CE_EMAIL_8_POOL = buildExpressPool("e10-2-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Soirée Jeux Coopératifs", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Soirée",
    vfQ: "L'e-mail vient de Soirée Jeux Coopératifs.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_9_TEXT = `De : Cours de français A2

Objet : Merci de confirmer
Bonjour Jade,
Nous devons compter les participants pour un binôme de conversation.
Le rendez-vous aura lieu à salle 14 du centre Alpha.
Il est prévu lundi à 17 h 30.
les binômes changent toutes les semaines.
Cahier et stylo nécessaires.
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
Merci de noter trois questions à poser.
Réponse souhaitée : professeur Claire.`;

const E10_2_CE_EMAIL_9_POOL = buildExpressPool("e10-2-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Cours de français A2", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Cours",
    vfQ: "L'e-mail vient de Cours de français A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_10_TEXT = `De : Groupe Parents Solo

Objet : Changement de salle
Bonjour Hassan,
Une précision concerne un café rencontre sans inscription compliquée.
Le nouveau lieu est salon du centre familial.
L'horaire reste samedi à 15 h.
un coin dessin est prévu pour les enfants.
Participation libre pour le goûter.
Merci de prévenir si un enfant vient aussi.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
À bientôt, Groupe Parents Solo`;

const E10_2_CE_EMAIL_10_POOL = buildExpressPool("e10-2-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Groupe Parents Solo", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Groupe",
    vfQ: "L'e-mail vient de Groupe Parents Solo.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_11_TEXT = `De : Maison des Jeunes

Objet : Programme court
Bonjour Ana,
Voici le programme de une soirée karaoké pour nouveaux membres.
Accueil à salle musique de la MJ.
Début jeudi à 19 h 30.
les chansons faciles seront affichées sur écran.
Entrée gratuite avant 20 h.
Pour participer, choisir une chanson ou venir écouter.
Questions : MJ au 04 90 12 12 12.
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

const E10_2_CE_EMAIL_11_POOL = buildExpressPool("e10-2-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Maison des Jeunes", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Maison",
    vfQ: "L'e-mail vient de Maison des Jeunes.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_12_TEXT = `De : Club Échecs Loisir

Objet : Suite à votre inscription
Bonjour Pavel,
Nous avons bien reçu votre inscription pour une rencontre amicale débutants.
Vous êtes attendu(e) à bibliothèque de quartier, table ronde.
La rencontre commence mercredi à 18 h.
les règles seront rappelées au début.
Aucun matériel à acheter.
Merci de venir cinq minutes en avance.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Cordialement, Club Échecs Loisir`;

const E10_2_CE_EMAIL_12_POOL = buildExpressPool("e10-2-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Club Échecs Loisir", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "L'e-mail vient de Club Échecs Loisir.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_13_TEXT = `De : Atelier Couture Partagée

Objet : Message aux participants
Bonjour Maya,
Ce message est envoyé à toutes les personnes inscrites.
Sujet : une séance pour discuter en cousant.
Lieu : local textile, 5 rue Neuve.
Horaire : samedi à 13 h 30.
la première heure est réservée aux présentations.
Apporter un vêtement simple à réparer. Merci de envoyer une photo du vêtement.
Contact : ateliertextile@ville.fr.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.`;

const E10_2_CE_EMAIL_13_POOL = buildExpressPool("e10-2-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Atelier Couture Partagée", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Atelier",
    vfQ: "L'e-mail vient de Atelier Couture Partagée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_14_TEXT = `De : Groupe Balades avec chiens

Objet : Dernière vérification
Bonjour Tom,
Avant une promenade pour maîtres et animaux, nous vérifions les détails.
Le groupe se retrouve à entrée sud du parc Martin.
Le rendez-vous est dimanche à 10 h.
les chiens doivent rester en laisse.
Sacs propres obligatoires.
Pouvez-vous indiquer le nom de votre chien ?
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
Merci, Groupe Balades avec chiens`;

const E10_2_CE_EMAIL_14_POOL = buildExpressPool("e10-2-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Groupe Balades avec chiens", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Groupe",
    vfQ: "L'e-mail vient de Groupe Balades avec chiens.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_15_TEXT = `De : Cercle Ciné Discussion

Objet : Invitation personnelle
Bonjour Leïla,
Je serais content(e) de vous voir pour une rencontre après un film.
Je propose hall du cinéma Rex.
La date choisie est mardi à 20 h 40.
la discussion durera trente minutes au café voisin.
Billet à acheter soi-même.
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
Merci de venir avec une question sur le film.
À très vite, Cercle Ciné Discussion`;

const E10_2_CE_EMAIL_15_POOL = buildExpressPool("e10-2-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Cercle Ciné Discussion", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Cercle",
    vfQ: "L'e-mail vient de Cercle Ciné Discussion.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_16_TEXT = `De : Réseau Étudiants Adultes

Objet : Organisation du groupe
Bonjour Sonia,
Le groupe confirme un déjeuner pour nouveaux inscrits.
Nous partirons de restaurant universitaire, table 12.
Le départ est prévu vendredi à 12 h 10.
un tuteur accueillera les personnes à l'entrée.
Menu étudiant : 3,30 € avec carte.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Merci de prévenir en cas de retard; contact : tuteur Ali.
Amicalement, Réseau Étudiants Adultes`;

const E10_2_CE_EMAIL_16_POOL = buildExpressPool("e10-2-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Réseau Étudiants Adultes", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Réseau",
    vfQ: "L'e-mail vient de Réseau Étudiants Adultes.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_17_TEXT = `De : Club Photo Mobile

Objet : À lire avant de venir
Bonjour Ilyas,
Avant une sortie pour apprendre à se connaître, lisez ces informations.
Entrée par devant la fresque du marché.
Accueil samedi à 16 h.
chacun prendra trois photos du quartier.
Téléphone chargé recommandé.
Il faudra partager une photo après la sortie.
Bonne réception, Club Photo Mobile
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.`;

const E10_2_CE_EMAIL_17_POOL = buildExpressPool("e10-2-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Club Photo Mobile", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "L'e-mail vient de Club Photo Mobile.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_18_TEXT = `De : Association Bienvenue

Objet : Compte rendu et prochaine étape
Bonjour Greta,
Après notre échange, nous gardons un parrainage entre habitants.
Le lieu choisi est bureau 2 de la maison citoyenne.
La prochaine date est lundi à 18 h.
chaque nouveau rencontre une personne du quartier.
Service gratuit sur inscription.
La prochaine étape est de remplir la fiche de présentation.
Contact : bienvenue@quartier.fr.
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

const E10_2_CE_EMAIL_18_POOL = buildExpressPool("e10-2-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Association Bienvenue", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "L'e-mail vient de Association Bienvenue.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_19_TEXT = `De : Groupe Volley Détente

Objet : Participation confirmée
Bonjour Nico,
Votre participation à un entraînement ouvert aux débutants est confirmée.
Merci de venir à gymnase Victor-Hugo.
Nous commencerons mercredi à 19 h.
les équipes seront mélangées après chaque set.
Baskets propres demandées.
Merci aussi de signaler votre niveau au responsable.
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
Cordialement, Groupe Volley Détente`;

const E10_2_CE_EMAIL_19_POOL = buildExpressPool("e10-2-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Groupe Volley Détente", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Groupe",
    vfQ: "L'e-mail vient de Groupe Volley Détente.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_2_CE_EMAIL_20_TEXT = `De : Atelier Podcast Amateur

Objet : Question rapide
Bonjour Rita,
J'ai une question au sujet de une rencontre pour créer une équipe.
Est-ce que studio radio de la MJC vous convient ?
Le moment proposé est jeudi à 18 h 15.
le thème proposé est la vie du quartier.
Casque prêté sur place.
Pouvez-vous préparer une idée de sujet ?
Répondez à podcast@mjc.fr.
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

const E10_2_CE_EMAIL_20_POOL = buildExpressPool("e10-2-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Atelier Podcast Amateur", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Atelier",
    vfQ: "L'e-mail vient de Atelier Podcast Amateur.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

export const E10_2_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e10-2-ce-email",
  readingText: E10_2_CE_EMAIL_TEXT,
  questionPool: E10_2_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e10-2-ce-email-2",
  readingText: E10_2_CE_EMAIL_2_TEXT,
  questionPool: E10_2_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-3",
  readingText: E10_2_CE_EMAIL_3_TEXT,
  questionPool: E10_2_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-4",
  readingText: E10_2_CE_EMAIL_4_TEXT,
  questionPool: E10_2_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-5",
  readingText: E10_2_CE_EMAIL_5_TEXT,
  questionPool: E10_2_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-6",
  readingText: E10_2_CE_EMAIL_6_TEXT,
  questionPool: E10_2_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-7",
  readingText: E10_2_CE_EMAIL_7_TEXT,
  questionPool: E10_2_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-8",
  readingText: E10_2_CE_EMAIL_8_TEXT,
  questionPool: E10_2_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-9",
  readingText: E10_2_CE_EMAIL_9_TEXT,
  questionPool: E10_2_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-10",
  readingText: E10_2_CE_EMAIL_10_TEXT,
  questionPool: E10_2_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-11",
  readingText: E10_2_CE_EMAIL_11_TEXT,
  questionPool: E10_2_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-12",
  readingText: E10_2_CE_EMAIL_12_TEXT,
  questionPool: E10_2_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-13",
  readingText: E10_2_CE_EMAIL_13_TEXT,
  questionPool: E10_2_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-14",
  readingText: E10_2_CE_EMAIL_14_TEXT,
  questionPool: E10_2_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-15",
  readingText: E10_2_CE_EMAIL_15_TEXT,
  questionPool: E10_2_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-16",
  readingText: E10_2_CE_EMAIL_16_TEXT,
  questionPool: E10_2_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-17",
  readingText: E10_2_CE_EMAIL_17_TEXT,
  questionPool: E10_2_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-18",
  readingText: E10_2_CE_EMAIL_18_TEXT,
  questionPool: E10_2_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-19",
  readingText: E10_2_CE_EMAIL_19_TEXT,
  questionPool: E10_2_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-2-ce-email-20",
  readingText: E10_2_CE_EMAIL_20_TEXT,
  questionPool: E10_2_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E10_2_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e10-2-pee-1",
    title: "Un nouveau voisin",
    situation: "Un nouveau voisin se présente et vous invite pour un café.",
    sourceMessage: {
      from: "Marco",
      subject: "Votre nouveau voisin",
      body: "Bonjour,\nJe suis Marco, votre nouveau voisin du deuxième étage. Je suis arrivé la semaine dernière.\nVous voulez passer boire un café un de ces jours ?\nBonne journée,\nMarco",
    },
    instruction: "Répondez à Marco : souhaitez-lui la bienvenue, présentez-vous en quelques mots et proposez un jour pour le café.",
    points: ["Un mot de bienvenue", "Votre présentation", "Une proposition de jour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-2",
    title: "S'inscrire au café des langues",
    situation: "Le Café des langues vous demande des informations pour votre première soirée.",
    sourceMessage: {
      from: "Café des langues",
      subject: "Votre première soirée",
      body: "Bonjour,\nMerci pour votre intérêt ! Pour préparer votre venue, dites-nous :\nquelle langue voulez-vous pratiquer, et quel est votre niveau ?\nÀ jeudi !\nL'équipe du Café des langues",
    },
    instruction: "Répondez au Café des langues : dites quelle langue vous voulez pratiquer, décrivez votre niveau et posez une question sur la soirée.",
    points: ["La langue choisie", "Votre niveau", "Une question sur la soirée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-3",
    title: "Échange linguistique",
    situation: "Une étudiante cherche un partenaire pour un tandem de langues.",
    sourceMessage: {
      from: "Elena",
      subject: "Tandem français-espagnol",
      body: "Bonjour,\nJe suis espagnole et je cherche une personne pour un échange linguistique :\nune heure en français, une heure en espagnol, une fois par semaine.\nÊtes-vous intéressé(e) ?\nElena",
    },
    instruction: "Répondez à Elena : acceptez l'échange, proposez un lieu et un horaire, et décrivez votre niveau dans les deux langues.",
    points: ["Votre accord", "Un lieu et un horaire", "Votre niveau de langue"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-4",
    title: "Refuser une activité",
    situation: "Un ami vous propose de rejoindre son club de football.",
    sourceMessage: {
      from: "David",
      subject: "Viens jouer avec nous !",
      body: "Salut,\nNotre club de football cherche des joueurs. On s'entraîne le mardi soir à 20 h.\nC'est super pour rencontrer du monde ! Tu viens ?\nDavid",
    },
    instruction: "Répondez à David : refusez poliment, expliquez pourquoi le football ne vous convient pas et proposez une autre activité ensemble.",
    points: ["Un refus poli", "La raison du refus", "Une autre activité proposée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-5",
    title: "Se donner rendez-vous",
    situation: "Une personne rencontrée au café des langues veut vous revoir.",
    sourceMessage: {
      from: "Aïcha",
      subject: "C'était sympa jeudi !",
      body: "Bonjour,\nJ'ai beaucoup aimé notre discussion au café des langues jeudi dernier.\nÇa te dit de se revoir pour continuer à parler français ?\nAïcha",
    },
    instruction: "Répondez à Aïcha : dites que vous êtes content(e) de son message, proposez un jour et un lieu de rendez-vous et posez-lui une question.",
    points: ["Votre plaisir de la revoir", "Un jour et un lieu", "Une question pour Aïcha"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-6",
    title: "La fête des voisins",
    situation: "L'association de votre immeuble organise la fête des voisins.",
    sourceMessage: {
      from: "Association des habitants",
      subject: "Fête des voisins le 23 mai",
      body: "Chers habitants,\nLa fête des voisins a lieu le vendredi 23 mai à 18 h dans la cour de l'immeuble.\nChacun apporte un plat ou une boisson.\nMerci de nous dire si vous venez.\nL'association des habitants",
    },
    instruction: "Répondez à l'association : confirmez votre présence, dites ce que vous allez apporter et demandez combien de personnes sont attendues.",
    points: ["Votre présence", "Ce que vous apportez", "Une question sur le nombre de personnes"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-7",
    title: "Déjeuner avec un nouveau collègue",
    situation: "Un nouveau collègue aimerait faire connaissance.",
    sourceMessage: {
      from: "Samuel",
      subject: "On déjeune ensemble ?",
      body: "Bonjour,\nJe suis nouveau dans l'équipe et je ne connais encore personne.\nEst-ce que tu veux déjeuner avec moi cette semaine ?\nSamuel",
    },
    instruction: "Répondez à Samuel : acceptez avec plaisir, proposez un jour et un restaurant et posez-lui une question sur son travail.",
    points: ["Votre acceptation", "Un jour et un restaurant", "Une question sur son travail"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-8",
    title: "S'excuser pour un rendez-vous manqué",
    situation: "Vous avez oublié un rendez-vous avec votre partenaire de tandem.",
    sourceMessage: {
      from: "Elena",
      subject: "Je t'ai attendu(e) hier",
      body: "Bonjour,\nJe t'ai attendu(e) hier au café pendant une demi-heure, mais tu n'es pas venu(e).\nEst-ce que tout va bien ?\nElena",
    },
    instruction: "Répondez à Elena : excusez-vous, expliquez pourquoi vous n'êtes pas venu(e) et proposez un nouveau rendez-vous.",
    points: ["Vos excuses", "L'explication", "Un nouveau rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-9",
    title: "Groupe de marche",
    situation: "Un groupe de marche du quartier cherche de nouveaux membres.",
    sourceMessage: {
      from: "Simone",
      subject: "Groupe de marche du quartier",
      body: "Bonjour,\nNotre groupe de marche se retrouve chaque dimanche matin pour marcher deux heures.\nNous cherchons de nouveaux membres. Voulez-vous nous rejoindre ?\nSimone",
    },
    instruction: "Répondez à Simone : dites pourquoi cette activité vous intéresse, posez deux questions (lieu de départ, niveau) et demandez si on peut venir accompagné.",
    points: ["Pourquoi vous êtes intéressé(e)", "Deux questions pratiques", "Une question pour venir accompagné(e)"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-10",
    title: "Encourager un ami timide",
    situation: "Un ami n'ose pas aller vers les autres et vous demande conseil.",
    sourceMessage: {
      from: "Omar",
      subject: "Comment rencontrer des gens ?",
      body: "Salut,\nJe suis arrivé ici il y a deux mois et je ne connais presque personne.\nJe suis un peu timide. Comment est-ce que tu as rencontré tes amis ?\nOmar",
    },
    instruction: "Répondez à Omar : donnez-lui deux idées pour rencontrer des gens, proposez de l'accompagner une fois et encouragez-le.",
    points: ["Deux idées de rencontres", "Une proposition de l'accompagner", "Une phrase d'encouragement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-11",
    title: "Répondre — rencontres (11)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-12",
    title: "Répondre — rencontres (12)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-13",
    title: "Répondre — rencontres (13)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-14",
    title: "Répondre — rencontres (14)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-15",
    title: "Répondre — rencontres (15)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-16",
    title: "Répondre — rencontres (16)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-17",
    title: "Répondre — rencontres (17)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-18",
    title: "Répondre — rencontres (18)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-19",
    title: "Répondre — rencontres (19)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-20",
    title: "Répondre — rencontres (20)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.3 — Organiser un événement
   ════════════════════════════════════════════════════════════════════════════ */

const E10_3_CE_EMAIL_TEXT = `De : Comité Mariage Lina et Paul

Objet : Confirmation — l'organisation du mariage civil
Bonjour Emma,
Je vous confirme l'organisation du mariage civil.
Le rendez-vous est prévu samedi à 10 h 45, à mairie centrale, salle des mariages.
les témoins doivent arriver avec leur pièce d'identité.
Photos autorisées seulement après la cérémonie.
Merci de confirmer votre présence au repas.
Vous pouvez répondre par mariage.lina.paul@mail.fr.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Cordialement, Comité Mariage Lina et Paul`;

const E10_3_CE_EMAIL_POOL = buildExpressPool("e10-3-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Comité Mariage Lina et Paul", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Comité",
    vfQ: "L'e-mail vient de Comité Mariage Lina et Paul.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_2_TEXT = `De : Fête du Quartier Nord

Objet : Petite organisation pour la préparation des stands
Bonjour Farid,
Nous préparons les derniers détails.
Tout aura lieu à place des Tilleuls, vendredi à 17 h.
les tables seront montées par les bénévoles.
À retenir : Chaque stand reçoit deux chaises.
Pouvez-vous choisir un créneau de montage ?
Contact direct : comite.nord@ville.fr.
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
À bientôt, Fête du Quartier Nord`;

const E10_3_CE_EMAIL_2_POOL = buildExpressPool("e10-3-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Fête du Quartier Nord", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Fête",
    vfQ: "L'e-mail vient de Fête du Quartier Nord.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_3_TEXT = `De : Équipe Concert Solidaire

Objet : Réponse attendue — un concert au profit de l'épicerie sociale
Bonjour Claire,
Votre présence nous aidera beaucoup.
Le lieu reste salle Mandela.
L'horaire confirmé est samedi à 20 h.
trois groupes locaux joueront chacun trente minutes.
Entrée : 8 € ou don alimentaire.
Merci de réserver les billets avant jeudi avant la date.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Bien à vous, Équipe Concert Solidaire`;

const E10_3_CE_EMAIL_3_POOL = buildExpressPool("e10-3-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Équipe Concert Solidaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Équipe",
    vfQ: "L'e-mail vient de Équipe Concert Solidaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_4_TEXT = `De : MJC Bellevue

Objet : Informations pratiques
Bonjour Youssef,
Voici les informations pour un vide-greniers de printemps.
Nous vous attendons à cour de la MJC.
Le début est fixé dimanche à 8 h.
les exposants entrent par le portail gris.
Prévoir aussi : Emplacement : 6 € avec table.
Pour toute question : mjc-bellevue@ville.fr.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Merci, MJC Bellevue`;

const E10_3_CE_EMAIL_4_POOL = buildExpressPool("e10-3-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["MJC Bellevue", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "MJC",
    vfQ: "L'e-mail vient de MJC Bellevue.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_5_TEXT = `De : Club Sport Santé

Objet : Invitation mise à jour
Bonjour Lou,
Nous avons modifié un détail pour un tournoi amical de badminton.
Le point de rendez-vous est maintenant gymnase des Acacias.
La date ne change pas : mercredi à 18 h 30.
les équipes seront tirées au sort sur place.
Raquette prêtée si besoin.
Merci de apporter des chaussures propres.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Bonne journée, Club Sport Santé`;

const E10_3_CE_EMAIL_5_POOL = buildExpressPool("e10-3-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Club Sport Santé", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "L'e-mail vient de Club Sport Santé.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_6_TEXT = `De : Collectif Rue Verte

Objet : Votre aide pour une inauguration de fresque
Bonjour Sacha,
Nous cherchons encore quelques personnes pour aider.
L'équipe se retrouve à mur du passage Colbert.
Rendez-vous jeudi à 17 h 45.
les artistes expliqueront leur travail.
Indication pratique : Goûter offert par les commerçants.
Si vous êtes disponible, venir sans vélo dans le passage.
Réponse à collectif.rueverte@net.fr.
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

const E10_3_CE_EMAIL_6_POOL = buildExpressPool("e10-3-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Collectif Rue Verte", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Collectif",
    vfQ: "L'e-mail vient de Collectif Rue Verte.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_7_TEXT = `De : Festival des Saveurs

Objet : Rappel avant demain
Bonjour Nora,
Je vous rappelle la réunion des bénévoles avant le festival.
Tout se passera à salle 3 du centre culturel.
Merci d'arriver mardi à 19 h.
les tâches seront réparties par équipe.
Badge bénévole remis à l'entrée.
N'oubliez pas de choisir une mission sur le tableau.
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
Cordialement, Festival des Saveurs`;

const E10_3_CE_EMAIL_7_POOL = buildExpressPool("e10-3-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Festival des Saveurs", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Festival",
    vfQ: "L'e-mail vient de Festival des Saveurs.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_8_TEXT = `De : École de Musique

Objet : Documents et horaires
Bonjour Adrien,
Pour une audition de fin d'année, voici ce qu'il faut savoir.
Adresse : auditorium du conservatoire.
Horaire : vendredi à 18 h.
chaque élève jouera un morceau court.
Frais ou matériel : Entrée libre pour deux proches.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
Merci de arriver avec l'instrument accordé; contact : secretariat.musique@ville.fr.
Avec nos salutations, École de Musique`;

const E10_3_CE_EMAIL_8_POOL = buildExpressPool("e10-3-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["École de Musique", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "École",
    vfQ: "L'e-mail vient de École de Musique.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_9_TEXT = `De : Association Culture Plus

Objet : Merci de confirmer
Bonjour Mila,
Nous devons compter les participants pour une conférence sur les jardins urbains.
Le rendez-vous aura lieu à salle Victor-Schœlcher.
Il est prévu lundi à 18 h 30.
la conférencière répondra aux questions à la fin.
Participation conseillée : 3 €.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Merci de réserver car la salle est petite.
Réponse souhaitée : cultureplus@asso.fr.`;

const E10_3_CE_EMAIL_9_POOL = buildExpressPool("e10-3-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Association Culture Plus", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "L'e-mail vient de Association Culture Plus.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_10_TEXT = `De : Parents de CM2

Objet : Changement de salle
Bonjour Rania,
Une précision concerne la kermesse de fin d'année.
Le nouveau lieu est cour de l'école Jean-Moulin.
L'horaire reste samedi à 14 h.
les jeux ouvriront après le spectacle des élèves.
Chaque famille apporte un gâteau étiqueté.
Merci de s'inscrire pour tenir un stand.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
À bientôt, Parents de CM2`;

const E10_3_CE_EMAIL_10_POOL = buildExpressPool("e10-3-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Parents de CM2", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Parents",
    vfQ: "L'e-mail vient de Parents de CM2.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_11_TEXT = `De : Cinéma Rex

Objet : Programme court
Bonjour Victor,
Voici le programme de une projection débat.
Accueil à salle 2 du cinéma Rex.
Début jeudi à 20 h.
le réalisateur participera par visioconférence.
Tarif unique : 6 €.
Pour participer, acheter la place en avance.
Questions : contact@cinemarex.fr.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.`;

const E10_3_CE_EMAIL_11_POOL = buildExpressPool("e10-3-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Cinéma Rex", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Cinéma",
    vfQ: "L'e-mail vient de Cinéma Rex.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_12_TEXT = `De : Office du Tourisme

Objet : Suite à votre inscription
Bonjour Inès,
Nous avons bien reçu votre inscription pour une visite guidée nocturne.
Vous êtes attendu(e) à devant la tour de l'Horloge.
La rencontre commence vendredi à 21 h.
le guide racontera trois légendes locales.
Lampe de poche recommandée.
Merci de réserver avant mercredi midi.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Cordialement, Office du Tourisme`;

const E10_3_CE_EMAIL_12_POOL = buildExpressPool("e10-3-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Office du Tourisme", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Office",
    vfQ: "L'e-mail vient de Office du Tourisme.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_13_TEXT = `De : Chorale Arc-en-Ciel

Objet : Message aux participants
Bonjour Mathis,
Ce message est envoyé à toutes les personnes inscrites.
Sujet : un concert participatif.
Lieu : église Saint-Luc.
Horaire : dimanche à 16 h.
le public chantera le dernier refrain.
Entrée gratuite, panier à la sortie. Merci de arriver avant la fermeture des portes.
Contact : chorale.arc@mail.fr.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.`;

const E10_3_CE_EMAIL_13_POOL = buildExpressPool("e10-3-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Chorale Arc-en-Ciel", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Chorale",
    vfQ: "L'e-mail vient de Chorale Arc-en-Ciel.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_14_TEXT = `De : Librairie Pages Ouvertes

Objet : Dernière vérification
Bonjour Salomé,
Avant une séance de dédicace, nous vérifions les détails.
Le groupe se retrouve à librairie, espace jeunesse.
Le rendez-vous est samedi à 11 h.
l'autrice signera son album après la lecture.
Livre disponible sur place à 12 €.
Pouvez-vous demander un ticket d'attente ?
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci, Librairie Pages Ouvertes`;

const E10_3_CE_EMAIL_14_POOL = buildExpressPool("e10-3-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Librairie Pages Ouvertes", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Librairie",
    vfQ: "L'e-mail vient de Librairie Pages Ouvertes.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_15_TEXT = `De : Collectif Étudiants

Objet : Invitation personnelle
Bonjour Kenji,
Je serais content(e) de vous voir pour une soirée internationale.
Je propose foyer universitaire.
La date choisie est mercredi à 19 h.
chaque table présentera un pays.
Apporter un petit plat si possible.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Merci de indiquer le pays choisi.
À très vite, Collectif Étudiants`;

const E10_3_CE_EMAIL_15_POOL = buildExpressPool("e10-3-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Collectif Étudiants", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Collectif",
    vfQ: "L'e-mail vient de Collectif Étudiants.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_16_TEXT = `De : Service Culture

Objet : Organisation du groupe
Bonjour Maëlle,
Le groupe confirme une exposition photo en plein air.
Nous partirons de grilles du parc central.
Le départ est prévu mardi à 12 h.
les photos resteront visibles pendant trois semaines.
Accès libre sans billet.
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
Merci de respecter le sens de visite; contact : culture@ville.fr.
Amicalement, Service Culture`;

const E10_3_CE_EMAIL_16_POOL = buildExpressPool("e10-3-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Service Culture", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Service",
    vfQ: "L'e-mail vient de Service Culture.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_17_TEXT = `De : Club Cyclo

Objet : À lire avant de venir
Bonjour Jules,
Avant une course lente et familiale, lisez ces informations.
Entrée par piste du stade municipal.
Accueil dimanche à 10 h 30.
le gagnant sera le dernier sans poser le pied.
Casque obligatoire pour tous.
Il faudra vérifier les freins du vélo.
Bonne réception, Club Cyclo
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.`;

const E10_3_CE_EMAIL_17_POOL = buildExpressPool("e10-3-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Club Cyclo", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "L'e-mail vient de Club Cyclo.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_18_TEXT = `De : Atelier Théâtre

Objet : Compte rendu et prochaine étape
Bonjour Lola,
Après notre échange, nous gardons une soirée d'improvisation.
Le lieu choisi est salle noire de la MJC.
La prochaine date est vendredi à 20 h 30.
le public proposera des mots au début.
Participation : 5 €.
La prochaine étape est de réserver par message.
Contact : theatre.mjc@mail.fr.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.`;

const E10_3_CE_EMAIL_18_POOL = buildExpressPool("e10-3-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Atelier Théâtre", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Atelier",
    vfQ: "L'e-mail vient de Atelier Théâtre.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_19_TEXT = `De : Comité Jumelage

Objet : Participation confirmée
Bonjour Marco,
Votre participation à un accueil de visiteurs italiens est confirmée.
Merci de venir à hall de la gare.
Nous commencerons jeudi à 16 h 20.
les familles porteront un badge bleu.
Prévoir un ticket de bus pour le retour.
Merci aussi de envoyer votre numéro de téléphone.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Cordialement, Comité Jumelage`;

const E10_3_CE_EMAIL_19_POOL = buildExpressPool("e10-3-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Comité Jumelage", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Comité",
    vfQ: "L'e-mail vient de Comité Jumelage.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_3_CE_EMAIL_20_TEXT = `De : Marché des Créateurs

Objet : Question rapide
Bonjour Zoé,
J'ai une question au sujet de l'installation des exposants.
Est-ce que halle couverte du marché vous convient ?
Le moment proposé est samedi à 7 h 30.
les voitures doivent partir avant 9 h.
Table fournie, rallonge non fournie.
Pouvez-vous imprimer votre autorisation ?
Répondez à createurs@marche.fr.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.`;

const E10_3_CE_EMAIL_20_POOL = buildExpressPool("e10-3-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Marché des Créateurs", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Marché",
    vfQ: "L'e-mail vient de Marché des Créateurs.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

export const E10_3_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e10-3-ce-email",
  readingText: E10_3_CE_EMAIL_TEXT,
  questionPool: E10_3_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e10-3-ce-email-2",
  readingText: E10_3_CE_EMAIL_2_TEXT,
  questionPool: E10_3_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-3",
  readingText: E10_3_CE_EMAIL_3_TEXT,
  questionPool: E10_3_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-4",
  readingText: E10_3_CE_EMAIL_4_TEXT,
  questionPool: E10_3_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-5",
  readingText: E10_3_CE_EMAIL_5_TEXT,
  questionPool: E10_3_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-6",
  readingText: E10_3_CE_EMAIL_6_TEXT,
  questionPool: E10_3_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-7",
  readingText: E10_3_CE_EMAIL_7_TEXT,
  questionPool: E10_3_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-8",
  readingText: E10_3_CE_EMAIL_8_TEXT,
  questionPool: E10_3_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-9",
  readingText: E10_3_CE_EMAIL_9_TEXT,
  questionPool: E10_3_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-10",
  readingText: E10_3_CE_EMAIL_10_TEXT,
  questionPool: E10_3_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-11",
  readingText: E10_3_CE_EMAIL_11_TEXT,
  questionPool: E10_3_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-12",
  readingText: E10_3_CE_EMAIL_12_TEXT,
  questionPool: E10_3_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-13",
  readingText: E10_3_CE_EMAIL_13_TEXT,
  questionPool: E10_3_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-14",
  readingText: E10_3_CE_EMAIL_14_TEXT,
  questionPool: E10_3_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-15",
  readingText: E10_3_CE_EMAIL_15_TEXT,
  questionPool: E10_3_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-16",
  readingText: E10_3_CE_EMAIL_16_TEXT,
  questionPool: E10_3_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-17",
  readingText: E10_3_CE_EMAIL_17_TEXT,
  questionPool: E10_3_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-18",
  readingText: E10_3_CE_EMAIL_18_TEXT,
  questionPool: E10_3_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-19",
  readingText: E10_3_CE_EMAIL_19_TEXT,
  questionPool: E10_3_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-3-ce-email-20",
  readingText: E10_3_CE_EMAIL_20_TEXT,
  questionPool: E10_3_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E10_3_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e10-3-pee-1",
    title: "Participer à la fête de départ",
    situation: "Sophie organise la fête de départ d'un collègue.",
    sourceMessage: {
      from: "Sophie",
      subject: "Fête de départ de Luc",
      body: "Bonjour,\nPour la fête de Luc le 12 avril, merci de me dire si tu viens.\nJe cherche aussi des volontaires pour la décoration et des personnes pour apporter à manger.\nSophie",
    },
    instruction: "Répondez à Sophie : confirmez votre venue, proposez d'apporter quelque chose et dites si vous pouvez aider pour la décoration.",
    points: ["Votre venue", "Ce que vous apportez", "Votre réponse pour la décoration"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-2",
    title: "Réserver une salle",
    situation: "L'administration communale répond à votre demande de salle.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Votre demande de salle",
      body: "Bonjour,\nLa salle communale est libre le samedi 12 avril et le samedi 19 avril.\nLa location coûte 150 francs pour la soirée.\nQuelle date choisissez-vous ?\nL'administration communale",
    },
    instruction: "Répondez à l'administration : choisissez une date, demandez si les tables et les chaises sont comprises et posez une question sur les horaires.",
    points: ["La date choisie", "Une question sur les tables et les chaises", "Une question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-3",
    title: "Sortie de groupe en montagne",
    situation: "Un ami organise une sortie de groupe en montagne.",
    sourceMessage: {
      from: "Karim",
      subject: "Sortie en montagne dimanche",
      body: "Salut,\nJ'organise une sortie en montagne dimanche prochain avec quelques amis.\nDépart à 8 h, retour vers 17 h. Tu veux venir ?\nKarim",
    },
    instruction: "Répondez à Karim : acceptez, demandez ce qu'il faut apporter et proposez de prendre votre voiture pour le trajet.",
    points: ["Votre acceptation", "Une question sur le matériel", "Votre proposition de voiture"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-4",
    title: "Qui apporte quoi ?",
    situation: "L'organisatrice d'un repas partagé prépare la liste des plats.",
    sourceMessage: {
      from: "Julia",
      subject: "Repas partagé de samedi",
      body: "Bonjour à tous,\nPour le repas de samedi, je prépare la liste : il manque encore des salades, des desserts et des boissons.\nQui apporte quoi ? Répondez-moi vite !\nJulia",
    },
    instruction: "Répondez à Julia : dites ce que vous allez apporter, proposez d'arriver plus tôt pour aider et demandez combien d'invités sont attendus.",
    points: ["Ce que vous apportez", "Votre proposition d'aide", "Une question sur le nombre d'invités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-5",
    title: "Payer sa participation",
    situation: "Le trésorier de l'équipe demande la participation pour la fête.",
    sourceMessage: {
      from: "Nicolas",
      subject: "Participation de 20 francs",
      body: "Bonjour,\nPour la fête du 12 avril, chaque personne donne 20 francs.\nMerci de me donner l'argent avant la fin du mois.\nNicolas",
    },
    instruction: "Répondez à Nicolas : confirmez que vous allez payer, demandez comment payer (en espèces ou par virement) et posez une question sur le programme.",
    points: ["Votre confirmation de paiement", "Une question sur le mode de paiement", "Une question sur le programme"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-6",
    title: "Problème de salle",
    situation: "La salle réservée pour votre événement a un problème.",
    sourceMessage: {
      from: "Salle des fêtes",
      subject: "Problème de chauffage",
      body: "Bonjour,\nLe chauffage de la salle est en panne. Nous ne pouvons pas vous accueillir samedi.\nNous pouvons vous proposer la petite salle ou une autre date.\nAvec nos excuses,\nLa salle des fêtes",
    },
    instruction: "Répondez à la salle des fêtes : dites quelle solution vous choisissez, expliquez pourquoi et demandez une réduction du prix.",
    points: ["La solution choisie", "Pourquoi ce choix", "Une demande de réduction"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-7",
    title: "Idées pour la fête de quartier",
    situation: "Une voisine prépare le programme de la fête de quartier et demande des idées.",
    sourceMessage: {
      from: "Leila",
      subject: "Programme de la fête de quartier",
      body: "Bonjour,\nJe prépare le programme de la fête de quartier de juin.\nAvez-vous des idées d'activités pour les enfants et pour les adultes ?\nMerci d'avance,\nLeila",
    },
    instruction: "Répondez à Leila : proposez deux activités, suggérez un horaire pour chaque activité et dites ce que vous pouvez apporter ou organiser.",
    points: ["Deux activités proposées", "Un horaire pour chaque activité", "Ce que vous pouvez faire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-8",
    title: "Musique pour la soirée",
    situation: "Un musicien répond à votre demande pour animer la soirée.",
    sourceMessage: {
      from: "Pascal",
      subject: "Musique pour votre soirée",
      body: "Bonjour,\nJe suis libre le samedi 12 avril. Je joue de 19 h à 23 h pour 300 francs.\nJ'apporte tout mon matériel.\nEst-ce que cela vous convient ?\nPascal",
    },
    instruction: "Répondez à Pascal : acceptez sa proposition, précisez l'adresse et l'heure d'arrivée et posez une question sur le style de musique.",
    points: ["Votre accord", "L'adresse et l'heure d'arrivée", "Une question sur la musique"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-9",
    title: "Sortie d'équipe",
    situation: "Un collègue propose deux idées pour la sortie d'équipe.",
    sourceMessage: {
      from: "Marc",
      subject: "Sortie d'équipe : bowling ou cinéma ?",
      body: "Bonjour à tous,\nPour notre sortie d'équipe, j'hésite entre un bowling et un cinéma, un jeudi soir.\nQu'est-ce que vous préférez ?\nMarc",
    },
    instruction: "Répondez à Marc : dites ce que vous préférez et pourquoi, proposez une date précise et proposez de faire la réservation.",
    points: ["Votre choix et la raison", "Une date précise", "Votre proposition de réserver"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-10",
    title: "Après la fête",
    situation: "Sophie fait le bilan de la fête de départ.",
    sourceMessage: {
      from: "Sophie",
      subject: "Merci à tous !",
      body: "Bonjour à tous,\nMerci pour cette belle fête, Luc était très content !\nIl reste 40 francs dans la caisse. Qu'est-ce qu'on en fait ?\nSophie",
    },
    instruction: "Répondez à Sophie : félicitez-la pour l'organisation, dites ce que vous avez préféré pendant la fête et proposez une idée pour les 40 francs.",
    points: ["Vos félicitations", "Ce que vous avez préféré", "Une idée pour l'argent restant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-11",
    title: "Répondre — événements (11)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-12",
    title: "Répondre — événements (12)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-13",
    title: "Répondre — événements (13)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-14",
    title: "Répondre — événements (14)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-15",
    title: "Répondre — événements (15)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-16",
    title: "Répondre — événements (16)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-17",
    title: "Répondre — événements (17)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-18",
    title: "Répondre — événements (18)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-19",
    title: "Répondre — événements (19)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-20",
    title: "Répondre — événements (20)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.4 — Participer à la vie scolaire
   ════════════════════════════════════════════════════════════════════════════ */

const E10_4_CE_EMAIL_TEXT = `De : École Jean-Moulin

Objet : Confirmation — la réunion parents-professeurs
Bonjour Mme Diallo,
Je vous confirme la réunion parents-professeurs.
Le rendez-vous est prévu mardi à 18 h, à salle polyvalente de l'école.
les familles entreront par le portail vert.
Bulletin du trimestre à apporter.
Merci de prendre un créneau avec le professeur principal.
Vous pouvez répondre par pronote de la classe.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Cordialement, École Jean-Moulin`;

const E10_4_CE_EMAIL_POOL = buildExpressPool("e10-4-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["École Jean-Moulin", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "École",
    vfQ: "L'e-mail vient de École Jean-Moulin.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_2_TEXT = `De : Collège Victor-Hugo

Objet : Petite organisation pour une sortie au musée d'histoire
Bonjour M. Lopez,
Nous préparons les derniers détails.
Tout aura lieu à devant le collège, jeudi à 8 h 15.
le retour est prévu avant la fin des cours.
À retenir : Pique-nique froid obligatoire.
Pouvez-vous signer l'autorisation parentale ?
Contact direct : vie scolaire.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
À bientôt, Collège Victor-Hugo`;

const E10_4_CE_EMAIL_2_POOL = buildExpressPool("e10-4-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Collège Victor-Hugo", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Collège",
    vfQ: "L'e-mail vient de Collège Victor-Hugo.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_3_TEXT = `De : Association des Parents

Objet : Réponse attendue — un café d'accueil pour nouvelles familles
Bonjour Nora,
Votre présence nous aidera beaucoup.
Le lieu reste hall du bâtiment B.
L'horaire confirmé est vendredi à 8 h 30.
deux parents expliqueront le fonctionnement de l'école.
Café offert par l'association.
Merci de confirmer votre présence avant la date.
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
Bien à vous, Association des Parents`;

const E10_4_CE_EMAIL_3_POOL = buildExpressPool("e10-4-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Association des Parents", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "L'e-mail vient de Association des Parents.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_4_TEXT = `De : Cantine Municipale

Objet : Informations pratiques
Bonjour Adam,
Voici les informations pour le changement de menu de vendredi.
Nous vous attendons à restaurant scolaire.
Le début est fixé vendredi à midi.
le poisson sera remplacé par une omelette.
Prévoir aussi : Menu végétarien disponible sur demande.
Pour toute question : cantine@ville.fr.
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
Merci, Cantine Municipale`;

const E10_4_CE_EMAIL_4_POOL = buildExpressPool("e10-4-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Cantine Municipale", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Cantine",
    vfQ: "L'e-mail vient de Cantine Municipale.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_5_TEXT = `De : Professeur de français

Objet : Invitation mise à jour
Bonjour Sofia,
Nous avons modifié un détail pour un devoir de lecture à rendre.
Le point de rendez-vous est maintenant salle 204.
La date ne change pas : lundi à 9 h.
les élèves doivent écrire dix lignes sur le chapitre 3.
Cahier bleu obligatoire.
Merci de relire le texte avant le cours.
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
Bonne journée, Professeur de français`;

const E10_4_CE_EMAIL_5_POOL = buildExpressPool("e10-4-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Professeur de français", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Professeur",
    vfQ: "L'e-mail vient de Professeur de français.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_6_TEXT = `De : École des Platanes

Objet : Votre aide pour la photo de classe
Bonjour Léo,
Nous cherchons encore quelques personnes pour aider.
L'équipe se retrouve à préau de l'école.
Rendez-vous jeudi à 10 h 20.
les frères et sœurs seront photographiés après la récréation.
Indication pratique : Tenue simple recommandée.
Si vous êtes disponible, rapporter le bon de commande signé.
Réponse à secrétariat.
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

const E10_4_CE_EMAIL_6_POOL = buildExpressPool("e10-4-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["École des Platanes", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "École",
    vfQ: "L'e-mail vient de École des Platanes.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_7_TEXT = `De : Conseil d'École

Objet : Rappel avant demain
Bonjour Hajar,
Je vous rappelle une demande de représentants de parents.
Tout se passera à bureau de la directrice.
Merci d'arriver mardi à 17 h 45.
deux postes sont encore libres.
Réunion prévue quatre fois par an.
N'oubliez pas de envoyer votre candidature.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Cordialement, Conseil d'École`;

const E10_4_CE_EMAIL_7_POOL = buildExpressPool("e10-4-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Conseil d'École", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Conseil",
    vfQ: "L'e-mail vient de Conseil d'École.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_8_TEXT = `De : Bibliothèque Scolaire

Objet : Documents et horaires
Bonjour Yanis,
Pour un prêt de livres pour les vacances, voici ce qu'il faut savoir.
Adresse : salle BCD.
Horaire : vendredi à 15 h.
chaque élève pourra emprunter deux livres.
Frais ou matériel : Carte de lecteur à présenter.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Merci de rendre les anciens livres; contact : bibliotheque.ecole@mail.fr.
Avec nos salutations, Bibliothèque Scolaire`;

const E10_4_CE_EMAIL_8_POOL = buildExpressPool("e10-4-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Bibliothèque Scolaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Bibliothèque",
    vfQ: "L'e-mail vient de Bibliothèque Scolaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_9_TEXT = `De : Club Devoirs

Objet : Merci de confirmer
Bonjour Maya,
Nous devons compter les participants pour une aide aux devoirs après la classe.
Le rendez-vous aura lieu à salle 12 du collège.
Il est prévu lundi et jeudi à 16 h 45.
les groupes seront limités à huit élèves.
Service gratuit sur inscription.
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
Merci de remplir la fiche avec un parent.
Réponse souhaitée : cpe du collège.`;

const E10_4_CE_EMAIL_9_POOL = buildExpressPool("e10-4-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Club Devoirs", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "L'e-mail vient de Club Devoirs.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_10_TEXT = `De : Équipe EPS

Objet : Changement de salle
Bonjour Noé,
Une précision concerne la journée sportive de printemps.
Le nouveau lieu est stade municipal.
L'horaire reste mercredi à 13 h 30.
les classes tourneront sur quatre ateliers.
Bouteille d'eau et casquette demandées.
Merci de venir en tenue de sport.
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
À bientôt, Équipe EPS`;

const E10_4_CE_EMAIL_10_POOL = buildExpressPool("e10-4-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Équipe EPS", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Équipe",
    vfQ: "L'e-mail vient de Équipe EPS.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_11_TEXT = `De : Secrétariat du lycée

Objet : Programme court
Bonjour Inès,
Voici le programme de la remise des dossiers de bourse.
Accueil à bureau 1 du secrétariat.
Début avant vendredi à 16 h.
les dossiers incomplets seront rendus aux familles.
Avis d'imposition à joindre.
Pour participer, déposer le dossier signé.
Questions : secretariat.lycee@mail.fr.
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

const E10_4_CE_EMAIL_11_POOL = buildExpressPool("e10-4-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Secrétariat du lycée", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Secrétariat",
    vfQ: "L'e-mail vient de Secrétariat du lycée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_12_TEXT = `De : Classe de CE2

Objet : Suite à votre inscription
Bonjour Mila,
Nous avons bien reçu votre inscription pour une collecte de matériel pour les arts.
Vous êtes attendu(e) à carton près de la porte de classe.
La rencontre commence jusqu'à mardi matin.
les bouchons et boîtes propres seront utilisés.
Pas de verre ni d'objet coupant.
Merci de apporter seulement du matériel lavé.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
Cordialement, Classe de CE2`;

const E10_4_CE_EMAIL_12_POOL = buildExpressPool("e10-4-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Classe de CE2", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Classe",
    vfQ: "L'e-mail vient de Classe de CE2.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_13_TEXT = `De : Transport Scolaire

Objet : Message aux participants
Bonjour Basile,
Ce message est envoyé à toutes les personnes inscrites.
Sujet : un retard possible du car 4.
Lieu : arrêt Les Pins.
Horaire : vendredi à 7 h 40.
des travaux ralentissent la route principale.
Attente possible de dix minutes. Merci de rester à l'arrêt avec un adulte.
Contact : ligne info transport.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.`;

const E10_4_CE_EMAIL_13_POOL = buildExpressPool("e10-4-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Transport Scolaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Transport",
    vfQ: "L'e-mail vient de Transport Scolaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_14_TEXT = `De : Infirmerie du collège

Objet : Dernière vérification
Bonjour Amel,
Avant une séance sur le sommeil des adolescents, nous vérifions les détails.
Le groupe se retrouve à salle de permanence.
Le rendez-vous est mardi à 14 h.
l'infirmière donnera des conseils simples.
Autorisation nécessaire pour les externes.
Pouvez-vous rapporter le coupon réponse ?
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Merci, Infirmerie du collège`;

const E10_4_CE_EMAIL_14_POOL = buildExpressPool("e10-4-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Infirmerie du collège", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Infirmerie",
    vfQ: "L'e-mail vient de Infirmerie du collège.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_15_TEXT = `De : Atelier Théâtre Scolaire

Objet : Invitation personnelle
Bonjour Ruben,
Je serais content(e) de vous voir pour les inscriptions au spectacle de fin d'année.
Je propose salle culturelle.
La date choisie est jeudi à 12 h 30.
les répétitions auront lieu pendant la pause déjeuner.
Texte distribué après l'inscription.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
Merci de choisir un rôle court ou long.
À très vite, Atelier Théâtre Scolaire`;

const E10_4_CE_EMAIL_15_POOL = buildExpressPool("e10-4-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Atelier Théâtre Scolaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Atelier",
    vfQ: "L'e-mail vient de Atelier Théâtre Scolaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_16_TEXT = `De : Foyer Socio-Éducatif

Objet : Organisation du groupe
Bonjour Salma,
Le groupe confirme une vente de gâteaux pour financer le voyage.
Nous partirons de devant la salle des professeurs.
Le départ est prévu vendredi à 10 h.
les élèves tiendront le stand par groupes de deux.
Prix conseillé : 1 € la part.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Merci de apporter les gâteaux le matin; contact : foyer.college@mail.fr.
Amicalement, Foyer Socio-Éducatif`;

const E10_4_CE_EMAIL_16_POOL = buildExpressPool("e10-4-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Foyer Socio-Éducatif", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Foyer",
    vfQ: "L'e-mail vient de Foyer Socio-Éducatif.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_17_TEXT = `De : Direction de l'école

Objet : À lire avant de venir
Bonjour Éric,
Avant un exercice d'évacuation incendie, lisez ces informations.
Entrée par dans toutes les classes.
Accueil lundi à 10 h 05.
l'alarme sonnera pendant deux minutes.
Les parents ne doivent pas entrer dans la cour.
Il faudra rassurer les enfants avant l'école.
Bonne réception, Direction de l'école
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.`;

const E10_4_CE_EMAIL_17_POOL = buildExpressPool("e10-4-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Direction de l'école", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Direction",
    vfQ: "L'e-mail vient de Direction de l'école.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_18_TEXT = `De : Classe de 5e B

Objet : Compte rendu et prochaine étape
Bonjour Lina,
Après notre échange, nous gardons un exposé par groupes.
Le lieu choisi est salle 305.
La prochaine date est mercredi à 11 h.
chaque groupe parlera pendant cinq minutes.
Affiche A3 autorisée.
La prochaine étape est de envoyer le plan au professeur.
Contact : ENT de français.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.`;

const E10_4_CE_EMAIL_18_POOL = buildExpressPool("e10-4-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Classe de 5e B", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Classe",
    vfQ: "L'e-mail vient de Classe de 5e B.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_19_TEXT = `De : Service Périscolaire

Objet : Participation confirmée
Bonjour Pablo,
Votre participation à l'inscription à l'étude surveillée est confirmée.
Merci de venir à bureau périscolaire.
Nous commencerons avant le 5 septembre.
les places sont données selon l'ordre d'arrivée.
Tarif calculé avec le quotient familial.
Merci aussi de compléter le formulaire municipal.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Cordialement, Service Périscolaire`;

const E10_4_CE_EMAIL_19_POOL = buildExpressPool("e10-4-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Service Périscolaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Service",
    vfQ: "L'e-mail vient de Service Périscolaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_4_CE_EMAIL_20_TEXT = `De : Musique au Collège

Objet : Question rapide
Bonjour Élina,
J'ai une question au sujet de une répétition de chorale.
Est-ce que salle de musique vous convient ?
Le moment proposé est mardi à 12 h 15.
les élèves prépareront deux chansons pour la fête.
Repas rapide à prévoir avant la répétition.
Pouvez-vous apprendre le refrain ?
Répondez à professeur de musique.
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

const E10_4_CE_EMAIL_20_POOL = buildExpressPool("e10-4-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Musique au Collège", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Musique",
    vfQ: "L'e-mail vient de Musique au Collège.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

export const E10_4_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e10-4-ce-email",
  readingText: E10_4_CE_EMAIL_TEXT,
  questionPool: E10_4_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e10-4-ce-email-2",
  readingText: E10_4_CE_EMAIL_2_TEXT,
  questionPool: E10_4_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-3",
  readingText: E10_4_CE_EMAIL_3_TEXT,
  questionPool: E10_4_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-4",
  readingText: E10_4_CE_EMAIL_4_TEXT,
  questionPool: E10_4_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-5",
  readingText: E10_4_CE_EMAIL_5_TEXT,
  questionPool: E10_4_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-6",
  readingText: E10_4_CE_EMAIL_6_TEXT,
  questionPool: E10_4_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-7",
  readingText: E10_4_CE_EMAIL_7_TEXT,
  questionPool: E10_4_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-8",
  readingText: E10_4_CE_EMAIL_8_TEXT,
  questionPool: E10_4_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-9",
  readingText: E10_4_CE_EMAIL_9_TEXT,
  questionPool: E10_4_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-10",
  readingText: E10_4_CE_EMAIL_10_TEXT,
  questionPool: E10_4_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-11",
  readingText: E10_4_CE_EMAIL_11_TEXT,
  questionPool: E10_4_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-12",
  readingText: E10_4_CE_EMAIL_12_TEXT,
  questionPool: E10_4_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-13",
  readingText: E10_4_CE_EMAIL_13_TEXT,
  questionPool: E10_4_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-14",
  readingText: E10_4_CE_EMAIL_14_TEXT,
  questionPool: E10_4_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-15",
  readingText: E10_4_CE_EMAIL_15_TEXT,
  questionPool: E10_4_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-16",
  readingText: E10_4_CE_EMAIL_16_TEXT,
  questionPool: E10_4_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-17",
  readingText: E10_4_CE_EMAIL_17_TEXT,
  questionPool: E10_4_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-18",
  readingText: E10_4_CE_EMAIL_18_TEXT,
  questionPool: E10_4_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-19",
  readingText: E10_4_CE_EMAIL_19_TEXT,
  questionPool: E10_4_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-4-ce-email-20",
  readingText: E10_4_CE_EMAIL_20_TEXT,
  questionPool: E10_4_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E10_4_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e10-4-pee-1",
    title: "Autoriser la sortie scolaire",
    situation: "L'enseignante demande l'autorisation pour la sortie au musée.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Sortie scolaire du 16 mai",
      body: "Chers parents,\nLa classe fera une sortie au musée de la nature le jeudi 16 mai.\nMerci de signer l'autorisation. Nous cherchons aussi des parents accompagnateurs.\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : donnez votre autorisation, proposez d'accompagner la classe et posez une question sur la journée.",
    points: ["Votre autorisation", "Votre proposition d'accompagner", "Une question sur la journée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-2",
    title: "Réunion de parents",
    situation: "L'école vous invite à la réunion de parents.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Réunion de parents le mardi 3 juin",
      body: "Chers parents,\nLa réunion de parents a lieu le mardi 3 juin à 19 h dans la salle de classe.\nMerci de confirmer votre présence.\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : confirmez votre présence, prévenez que vous arriverez un peu en retard et demandez combien de temps dure la réunion.",
    points: ["Votre confirmation", "Votre retard annoncé", "Une question sur la durée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-3",
    title: "Excuser une absence",
    situation: "L'enseignante vous écrit car votre fille était absente.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Absence de votre fille",
      body: "Bonjour,\nVotre fille était absente hier et aujourd'hui.\nPouvez-vous nous expliquer la raison de cette absence ?\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : excusez-vous pour l'absence, expliquez que votre fille est malade et dites quand elle reviendra à l'école.",
    points: ["Vos excuses", "La raison de l'absence", "La date du retour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-4",
    title: "Gâteau pour la fête de l'école",
    situation: "L'association des parents cherche des gâteaux pour la fête de l'école.",
    sourceMessage: {
      from: "Association des parents",
      subject: "Fête de l'école : appel aux gâteaux",
      body: "Chers parents,\nPour la fête de l'école du samedi 21 juin, nous cherchons des gâteaux pour le stand pâtisserie.\nQui peut en apporter un ?\nL'association des parents",
    },
    instruction: "Répondez à l'association : acceptez d'apporter un gâteau, dites lequel et demandez à quelle heure et où il faut l'apporter.",
    points: ["Votre accord", "Le gâteau choisi", "Une question sur l'heure et le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-5",
    title: "Affaires de sport oubliées",
    situation: "L'enseignant de sport vous écrit au sujet de votre fils.",
    sourceMessage: {
      from: "M. Perret",
      subject: "Affaires de sport",
      body: "Bonjour,\nVotre fils a oublié ses affaires de sport trois fois ce mois-ci.\nIl ne peut pas participer au cours sans ses affaires.\nMerci de votre aide,\nM. Perret",
    },
    instruction: "Répondez à M. Perret : excusez-vous, expliquez la situation et dites ce que vous allez faire pour éviter ce problème.",
    points: ["Vos excuses", "Une explication", "Votre solution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-6",
    title: "Sortie reportée",
    situation: "L'école annonce que la sortie est reportée à cause de la pluie.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Sortie reportée au 23 mai",
      body: "Chers parents,\nÀ cause de la forte pluie annoncée, la sortie de jeudi est reportée au jeudi 23 mai.\nLes horaires ne changent pas.\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : remerciez pour l'information, dites si la nouvelle date convient pour votre enfant et posez une question sur le pique-nique.",
    points: ["Un remerciement", "Votre réponse pour la nouvelle date", "Une question sur le pique-nique"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-7",
    title: "Rendez-vous avec l'enseignante",
    situation: "L'enseignante souhaite vous rencontrer.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Rendez-vous",
      body: "Bonjour,\nJe souhaite vous rencontrer pour parler des progrès de votre enfant.\nQuand êtes-vous disponible cette semaine ou la semaine prochaine ?\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : remerciez-la, proposez deux dates possibles et demandez de quoi elle veut parler exactement.",
    points: ["Un remerciement", "Deux dates possibles", "Une question sur le sujet du rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-8",
    title: "Inscription à la cantine",
    situation: "La cantine scolaire prépare les inscriptions pour l'année prochaine.",
    sourceMessage: {
      from: "Cantine scolaire",
      subject: "Inscription pour l'année prochaine",
      body: "Chers parents,\nLes inscriptions à la cantine sont ouvertes.\nMerci de nous dire quels jours votre enfant mangera à la cantine et s'il a des allergies.\nLa cantine scolaire",
    },
    instruction: "Répondez à la cantine : indiquez les jours choisis, signalez une allergie ou une habitude alimentaire et posez une question sur le prix des repas.",
    points: ["Les jours choisis", "Une allergie ou une habitude", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-9",
    title: "Covoiturage pour l'école",
    situation: "Une maman d'élève propose un covoiturage.",
    sourceMessage: {
      from: "Mme Diallo",
      subject: "Covoiturage pour l'école",
      body: "Bonjour,\nNos enfants sont dans la même classe et nous habitons le même quartier.\nVoulez-vous organiser un covoiturage pour l'école ?\nMme Diallo",
    },
    instruction: "Répondez à Mme Diallo : acceptez sa proposition, expliquez vos horaires et proposez une organisation (par exemple une semaine sur deux).",
    points: ["Votre acceptation", "Vos horaires", "Votre proposition d'organisation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-10",
    title: "Tenir un stand à la kermesse",
    situation: "Le comité de la fête de l'école cherche des bénévoles.",
    sourceMessage: {
      from: "Comité de la fête",
      subject: "Bénévoles pour la kermesse",
      body: "Chers parents,\nPour la kermesse du 21 juin, nous cherchons des bénévoles pour tenir les stands :\njeux, boissons, pâtisserie, de 10 h à 17 h.\nMerci de votre aide !\nLe comité de la fête",
    },
    instruction: "Répondez au comité : proposez votre aide, dites quel stand vous préférez et à quelles heures vous êtes disponible.",
    points: ["Votre proposition d'aide", "Le stand choisi", "Vos heures disponibles"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-11",
    title: "Répondre — vie scolaire (11)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-12",
    title: "Répondre — vie scolaire (12)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-13",
    title: "Répondre — vie scolaire (13)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-14",
    title: "Répondre — vie scolaire (14)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-15",
    title: "Répondre — vie scolaire (15)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-16",
    title: "Répondre — vie scolaire (16)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-17",
    title: "Répondre — vie scolaire (17)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-18",
    title: "Répondre — vie scolaire (18)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-19",
    title: "Répondre — vie scolaire (19)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-20",
    title: "Répondre — vie scolaire (20)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.5 — Participer à la vie associative
   ════════════════════════════════════════════════════════════════════════════ */

const E10_5_CE_EMAIL_TEXT = `De : Maison du Bénévolat

Objet : Confirmation — une réunion d'accueil des nouveaux bénévoles
Bonjour Samir,
Je vous confirme une réunion d'accueil des nouveaux bénévoles.
Le rendez-vous est prévu mardi à 18 h, à salle 1 de la maison citoyenne.
trois associations présenteront leurs missions.
Entrée libre sans cotisation le premier soir.
Merci de remplir la fiche de disponibilité.
Vous pouvez répondre par benevolat@ville.fr.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Cordialement, Maison du Bénévolat`;

const E10_5_CE_EMAIL_POOL = buildExpressPool("e10-5-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Maison du Bénévolat", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Maison",
    vfQ: "L'e-mail vient de Maison du Bénévolat.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_2_TEXT = `De : Association Les Paniers Solidaires

Objet : Petite organisation pour une distribution alimentaire
Bonjour Claire,
Nous préparons les derniers détails.
Tout aura lieu à local rue des Frères 8, jeudi à 14 h.
les bénévoles prépareront les sacs avant l'ouverture.
À retenir : Chaussures fermées recommandées.
Pouvez-vous indiquer vos horaires possibles ?
Contact direct : paniers.solidaires@mail.fr.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
À bientôt, Association Les Paniers Solidaires`;

const E10_5_CE_EMAIL_2_POOL = buildExpressPool("e10-5-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Association Les Paniers Solidaires", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "L'e-mail vient de Association Les Paniers Solidaires.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_3_TEXT = `De : Club Nature du Canal

Objet : Réponse attendue — un nettoyage des berges
Bonjour Nina,
Votre présence nous aidera beaucoup.
Le lieu reste pont de la Minoterie.
L'horaire confirmé est samedi à 9 h 30.
les sacs et pinces seront fournis.
Gants personnels conseillés.
Merci de s'inscrire pour prévoir le matériel avant la date.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Bien à vous, Club Nature du Canal`;

const E10_5_CE_EMAIL_3_POOL = buildExpressPool("e10-5-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Club Nature du Canal", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "L'e-mail vient de Club Nature du Canal.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_4_TEXT = `De : Secours Amitié Local

Objet : Informations pratiques
Bonjour Olivier,
Voici les informations pour une permanence d'écoute bénévole.
Nous vous attendons à bureau 4 du centre social.
Le début est fixé lundi à 17 h.
une formation courte est obligatoire avant de commencer.
Prévoir aussi : Adhésion annuelle : 10 €.
Pour toute question : coordination@secoursamitie.fr.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Merci, Secours Amitié Local`;

const E10_5_CE_EMAIL_4_POOL = buildExpressPool("e10-5-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Secours Amitié Local", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Secours",
    vfQ: "L'e-mail vient de Secours Amitié Local.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_5_TEXT = `De : Association Sport Pour Tous

Objet : Invitation mise à jour
Bonjour Maya,
Nous avons modifié un détail pour une séance adaptée aux seniors.
Le point de rendez-vous est maintenant gymnase des Prés.
La date ne change pas : mercredi à 10 h.
les bénévoles aideront à installer les tapis.
Tenue confortable demandée.
Merci de arriver quinze minutes avant la séance.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Bonne journée, Association Sport Pour Tous`;

const E10_5_CE_EMAIL_5_POOL = buildExpressPool("e10-5-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Association Sport Pour Tous", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "L'e-mail vient de Association Sport Pour Tous.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_6_TEXT = `De : Collectif Zéro Déchet

Objet : Votre aide pour un atelier réparation d'objets
Bonjour Rachid,
Nous cherchons encore quelques personnes pour aider.
L'équipe se retrouve à atelier municipal, porte jaune.
Rendez-vous samedi à 14 h.
les bénévoles essaieront de réparer petit électroménager et jouets.
Indication pratique : Un seul objet par personne.
Si vous êtes disponible, décrire l'objet à l'avance.
Réponse à zerodechet@ville.fr.
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

const E10_5_CE_EMAIL_6_POOL = buildExpressPool("e10-5-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Collectif Zéro Déchet", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Collectif",
    vfQ: "L'e-mail vient de Collectif Zéro Déchet.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_7_TEXT = `De : Bibliothèque de Rue

Objet : Rappel avant demain
Bonjour Anaïs,
Je vous rappelle une lecture pour enfants au square.
Tout se passera à square des Marronniers.
Merci d'arriver mercredi à 15 h.
les bénévoles liront des albums sous la tente.
Livres prêtés par la médiathèque.
N'oubliez pas de venir avec une couverture.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Cordialement, Bibliothèque de Rue`;

const E10_5_CE_EMAIL_7_POOL = buildExpressPool("e10-5-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Bibliothèque de Rue", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Bibliothèque",
    vfQ: "L'e-mail vient de Bibliothèque de Rue.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_8_TEXT = `De : Comité de Quartier Sud

Objet : Documents et horaires
Bonjour Kamel,
Pour l'assemblée générale annuelle, voici ce qu'il faut savoir.
Adresse : salle des associations.
Horaire : vendredi à 19 h.
le budget et les projets seront présentés.
Frais ou matériel : Cotisation possible sur place : 5 €.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Merci de voter pour le nouveau bureau; contact : quartiersud@asso.fr.
Avec nos salutations, Comité de Quartier Sud`;

const E10_5_CE_EMAIL_8_POOL = buildExpressPool("e10-5-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Comité de Quartier Sud", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Comité",
    vfQ: "L'e-mail vient de Comité de Quartier Sud.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_9_TEXT = `De : Atelier Vélo Solidaire

Objet : Merci de confirmer
Bonjour Lise,
Nous devons compter les participants pour une permanence de réparation.
Le rendez-vous aura lieu à garage partagé, rue du Moulin.
Il est prévu jeudi à 18 h.
les bénévoles apprennent à régler les freins.
Pièces neuves à prix coûtant.
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
Merci de venir avec son vélo propre.
Réponse souhaitée : atelier.velo@mail.fr.`;

const E10_5_CE_EMAIL_9_POOL = buildExpressPool("e10-5-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Atelier Vélo Solidaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Atelier",
    vfQ: "L'e-mail vient de Atelier Vélo Solidaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_10_TEXT = `De : Association Lire Ensemble

Objet : Changement de salle
Bonjour Gabriel,
Une précision concerne un appel à lecteurs bénévoles.
Le nouveau lieu est école Paul-Bert.
L'horaire reste mardi à 16 h 30.
les lecteurs accompagnent de petits groupes pendant trente minutes.
Extrait de casier demandé après inscription.
Merci de choisir un jour de présence.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
À bientôt, Association Lire Ensemble`;

const E10_5_CE_EMAIL_10_POOL = buildExpressPool("e10-5-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Association Lire Ensemble", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "L'e-mail vient de Association Lire Ensemble.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_11_TEXT = `De : Jardins Partagés Est

Objet : Programme court
Bonjour Sara,
Voici le programme de une matinée de plantation.
Accueil à jardin derrière la piscine.
Début dimanche à 9 h.
des plants de tomates et de basilic seront distribués.
Apporter une bouteille d'eau.
Pour participer, noter votre nom sur le tableau.
Questions : jardins.est@mail.fr.
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

const E10_5_CE_EMAIL_11_POOL = buildExpressPool("e10-5-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Jardins Partagés Est", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Jardins",
    vfQ: "L'e-mail vient de Jardins Partagés Est.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_12_TEXT = `De : Association Culture Ouverte

Objet : Suite à votre inscription
Bonjour Théo,
Nous avons bien reçu votre inscription pour un accueil de visiteurs au musée.
Vous êtes attendu(e) à hall du musée municipal.
La rencontre commence samedi à 13 h.
les bénévoles orienteront les familles vers les ateliers.
Badge remis à l'arrivée.
Merci de lire le plan du musée avant samedi.
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
Cordialement, Association Culture Ouverte`;

const E10_5_CE_EMAIL_12_POOL = buildExpressPool("e10-5-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Association Culture Ouverte", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "L'e-mail vient de Association Culture Ouverte.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_13_TEXT = `De : Banque du Temps

Objet : Message aux participants
Bonjour Yara,
Ce message est envoyé à toutes les personnes inscrites.
Sujet : un échange de services entre habitants.
Lieu : local associatif du marché.
Horaire : lundi à 18 h 30.
une heure donnée vaut une heure reçue.
Inscription gratuite avec adresse du quartier. Merci de préparer une compétence à proposer.
Contact : banquedutemps@net.fr.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.`;

const E10_5_CE_EMAIL_13_POOL = buildExpressPool("e10-5-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Banque du Temps", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Banque",
    vfQ: "L'e-mail vient de Banque du Temps.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_14_TEXT = `De : Association Refuge Animal

Objet : Dernière vérification
Bonjour Hugo,
Avant une collecte de couvertures, nous vérifions les détails.
Le groupe se retrouve à devant la clinique vétérinaire.
Le rendez-vous est samedi de 10 h à 12 h.
les couvertures doivent être propres et sans trous.
Croquettes acceptées en petits sacs.
Pouvez-vous déposer les dons dans les cartons marqués ?
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
Merci, Association Refuge Animal`;

const E10_5_CE_EMAIL_14_POOL = buildExpressPool("e10-5-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Association Refuge Animal", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "L'e-mail vient de Association Refuge Animal.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_15_TEXT = `De : Radio Associative Onde Libre

Objet : Invitation personnelle
Bonjour Iris,
Je serais content(e) de vous voir pour une réunion pour nouveaux chroniqueurs.
Je propose studio 2, maison des médias.
La date choisie est jeudi à 18 h 45.
la première émission parlera des initiatives locales.
Aucune expérience radio nécessaire.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Merci de préparer une idée de rubrique.
À très vite, Radio Associative Onde Libre`;

const E10_5_CE_EMAIL_15_POOL = buildExpressPool("e10-5-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Radio Associative Onde Libre", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Radio",
    vfQ: "L'e-mail vient de Radio Associative Onde Libre.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_16_TEXT = `De : Collectif Couture Solidaire

Objet : Organisation du groupe
Bonjour Mehdi,
Le groupe confirme un atelier de sacs en tissu.
Nous partirons de salle textile du centre social.
Le départ est prévu vendredi à 14 h.
les sacs seront donnés à l'épicerie sociale.
Machines disponibles sur place.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Merci de apporter du tissu propre si possible; contact : couturesolidaire@mail.fr.
Amicalement, Collectif Couture Solidaire`;

const E10_5_CE_EMAIL_16_POOL = buildExpressPool("e10-5-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Collectif Couture Solidaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Collectif",
    vfQ: "L'e-mail vient de Collectif Couture Solidaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_17_TEXT = `De : Association Mémoire du Quartier

Objet : À lire avant de venir
Bonjour Jeanne,
Avant une collecte de photos anciennes, lisez ces informations.
Entrée par archives municipales, salle 2.
Accueil mercredi à 17 h.
les photos seront scannées puis rendues.
Écrire le nom des personnes au dos si possible.
Il faudra prendre rendez-vous pour scanner.
Bonne réception, Association Mémoire du Quartier
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

const E10_5_CE_EMAIL_17_POOL = buildExpressPool("e10-5-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Association Mémoire du Quartier", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "L'e-mail vient de Association Mémoire du Quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_18_TEXT = `De : Club Handi-Loisirs

Objet : Compte rendu et prochaine étape
Bonjour Benoît,
Après notre échange, nous gardons une sortie accompagnée au parc.
Le lieu choisi est arrêt de tram Université.
La prochaine date est samedi à 10 h 15.
chaque bénévole accompagne une personne pendant la balade.
Pique-nique fourni par l'association.
La prochaine étape est de confirmer votre disponibilité.
Contact : handiloisirs@asso.fr.
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

const E10_5_CE_EMAIL_18_POOL = buildExpressPool("e10-5-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Club Handi-Loisirs", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Club",
    vfQ: "L'e-mail vient de Club Handi-Loisirs.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_19_TEXT = `De : Association Aide Numérique

Objet : Participation confirmée
Bonjour Rosa,
Votre participation à un atelier pour apprendre les démarches en ligne est confirmée.
Merci de venir à salle informatique de la mairie.
Nous commencerons mardi à 9 h 30.
les bénévoles aident à créer une adresse e-mail.
Ordinateurs fournis sur place.
Merci aussi de venir avec une pièce d'identité.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Cordialement, Association Aide Numérique`;

const E10_5_CE_EMAIL_19_POOL = buildExpressPool("e10-5-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Association Aide Numérique", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Association",
    vfQ: "L'e-mail vient de Association Aide Numérique.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

const E10_5_CE_EMAIL_20_TEXT = `De : Collectif Fête Solidaire

Objet : Question rapide
Bonjour Mounir,
J'ai une question au sujet de la préparation d'un repas partagé.
Est-ce que cuisine du centre Fraternité vous convient ?
Le moment proposé est dimanche à 11 h.
les plats seront servis aux habitants isolés.
Tablier conseillé.
Pouvez-vous choisir une équipe cuisine ou service ?
Répondez à fetesolidaire@mail.fr.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.`;

const E10_5_CE_EMAIL_20_POOL = buildExpressPool("e10-5-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Collectif Fête Solidaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Collectif",
    vfQ: "L'e-mail vient de Collectif Fête Solidaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
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
    id: "cem-q3",
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
    id: "cem-q4",
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
    id: "cem-q5",
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
    id: "cem-q6",
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
    id: "cem-q7",
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

export const E10_5_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e10-5-ce-email",
  readingText: E10_5_CE_EMAIL_TEXT,
  questionPool: E10_5_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e10-5-ce-email-2",
  readingText: E10_5_CE_EMAIL_2_TEXT,
  questionPool: E10_5_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-3",
  readingText: E10_5_CE_EMAIL_3_TEXT,
  questionPool: E10_5_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-4",
  readingText: E10_5_CE_EMAIL_4_TEXT,
  questionPool: E10_5_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-5",
  readingText: E10_5_CE_EMAIL_5_TEXT,
  questionPool: E10_5_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-6",
  readingText: E10_5_CE_EMAIL_6_TEXT,
  questionPool: E10_5_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-7",
  readingText: E10_5_CE_EMAIL_7_TEXT,
  questionPool: E10_5_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-8",
  readingText: E10_5_CE_EMAIL_8_TEXT,
  questionPool: E10_5_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-9",
  readingText: E10_5_CE_EMAIL_9_TEXT,
  questionPool: E10_5_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-10",
  readingText: E10_5_CE_EMAIL_10_TEXT,
  questionPool: E10_5_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-11",
  readingText: E10_5_CE_EMAIL_11_TEXT,
  questionPool: E10_5_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-12",
  readingText: E10_5_CE_EMAIL_12_TEXT,
  questionPool: E10_5_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-13",
  readingText: E10_5_CE_EMAIL_13_TEXT,
  questionPool: E10_5_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-14",
  readingText: E10_5_CE_EMAIL_14_TEXT,
  questionPool: E10_5_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-15",
  readingText: E10_5_CE_EMAIL_15_TEXT,
  questionPool: E10_5_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-16",
  readingText: E10_5_CE_EMAIL_16_TEXT,
  questionPool: E10_5_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-17",
  readingText: E10_5_CE_EMAIL_17_TEXT,
  questionPool: E10_5_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-18",
  readingText: E10_5_CE_EMAIL_18_TEXT,
  questionPool: E10_5_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-19",
  readingText: E10_5_CE_EMAIL_19_TEXT,
  questionPool: E10_5_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e10-5-ce-email-20",
  readingText: E10_5_CE_EMAIL_20_TEXT,
  questionPool: E10_5_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E10_5_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e10-5-pee-1",
    title: "Remercier l'association",
    situation: "L'association de quartier vous souhaite la bienvenue.",
    sourceMessage: {
      from: "Association des Tilleuls",
      subject: "Bienvenue !",
      body: "Bonjour,\nBienvenue dans notre association de quartier !\nL'assemblée générale a lieu le mardi 4 février à 20 h.\nNous espérons vous y voir.\nLe comité",
    },
    instruction: "Répondez au comité : remerciez pour l'accueil, confirmez votre présence à l'assemblée et posez une question sur une activité.",
    points: ["Un remerciement", "Votre présence à l'assemblée", "Une question sur une activité"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-2",
    title: "Devenir bénévole",
    situation: "L'association cherche des bénévoles pour la fête du quartier.",
    sourceMessage: {
      from: "Association des Tilleuls",
      subject: "Bénévoles pour la fête du quartier",
      body: "Bonjour,\nPour la fête du quartier du samedi 14 juin, nous cherchons des bénévoles\npour les stands, de 10 h à 22 h.\nPouvez-vous nous aider ?\nLe comité",
    },
    instruction: "Répondez au comité : proposez votre aide, indiquez vos heures disponibles et demandez quel stand vous pouvez tenir.",
    points: ["Votre proposition d'aide", "Vos heures disponibles", "Une question sur le stand"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-3",
    title: "Rappel de cotisation",
    situation: "La trésorière vous rappelle que la cotisation n'est pas payée.",
    sourceMessage: {
      from: "Mme Weber",
      subject: "Rappel : cotisation annuelle",
      body: "Bonjour,\nNous n'avons pas encore reçu votre cotisation de 30 francs pour cette année.\nMerci de la payer avant la fin du mois.\nMme Weber, trésorière",
    },
    instruction: "Répondez à Mme Weber : excusez-vous pour le retard, expliquez pourquoi vous avez oublié et dites quand et comment vous allez payer.",
    points: ["Vos excuses", "L'explication de l'oubli", "Quand et comment vous payez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-4",
    title: "Absent à l'assemblée",
    situation: "Le comité vous convoque à l'assemblée générale, mais vous ne pouvez pas venir.",
    sourceMessage: {
      from: "Association des Tilleuls",
      subject: "Convocation à l'assemblée générale",
      body: "Chers membres,\nL'assemblée générale a lieu le mardi 4 février à 20 h à la maison de quartier.\nNous présenterons le programme et le budget.\nMerci de confirmer votre présence.\nLe comité",
    },
    instruction: "Répondez au comité : dites que vous ne pouvez pas venir, expliquez pourquoi et demandez le compte rendu de la réunion.",
    points: ["Votre absence", "La raison de votre absence", "Une demande de compte rendu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-5",
    title: "Renseigner un ami",
    situation: "Un ami veut des informations sur votre association.",
    sourceMessage: {
      from: "Ibrahim",
      subject: "Ton association de quartier",
      body: "Salut,\nTu m'as parlé de ton association de quartier. Ça m'intéresse !\nQu'est-ce qu'on peut y faire ? C'est cher ?\nIbrahim",
    },
    instruction: "Répondez à Ibrahim : décrivez deux activités de l'association, donnez le prix de la cotisation et proposez de l'emmener avec vous une fois.",
    points: ["Deux activités", "Le prix de la cotisation", "Une invitation à venir avec vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-6",
    title: "Une parcelle au jardin partagé",
    situation: "Le responsable du jardin partagé vous propose une parcelle.",
    sourceMessage: {
      from: "M. Costa",
      subject: "Une parcelle est libre",
      body: "Bonjour,\nUne parcelle est libre au jardin partagé, derrière l'église.\nVous étiez sur la liste d'attente : la voulez-vous ?\nM. Costa",
    },
    instruction: "Répondez à M. Costa : acceptez la parcelle, demandez les règles du jardin (outils, eau) et dites quand vous allez commencer.",
    points: ["Votre acceptation", "Une question sur les règles", "Quand vous commencez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-7",
    title: "Proposer une nouvelle activité",
    situation: "Le comité demande des idées d'activités pour l'année prochaine.",
    sourceMessage: {
      from: "Association des Tilleuls",
      subject: "Appel à idées",
      body: "Chers membres,\nNous préparons le programme de l'année prochaine.\nAvez-vous des idées de nouvelles activités pour le quartier ?\nÉcrivez-nous !\nLe comité",
    },
    instruction: "Répondez au comité : proposez une nouvelle activité, indiquez un jour et un horaire possibles et dites comment vous pouvez aider à l'organiser.",
    points: ["L'activité proposée", "Un jour et un horaire", "Votre aide pour l'organisation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-8",
    title: "Vélo réparé",
    situation: "Un bénévole de l'atelier vélo vous écrit.",
    sourceMessage: {
      from: "Atelier vélo",
      subject: "Votre vélo est prêt",
      body: "Bonjour,\nNous avons réparé votre vélo : les freins et une roue.\nVous pouvez venir le chercher samedi matin, entre 9 h et 12 h.\nL'équipe de l'atelier",
    },
    instruction: "Répondez à l'atelier : remerciez l'équipe, demandez combien vous devez payer ou donner et proposez de devenir bénévole à votre tour.",
    points: ["Un remerciement", "Une question sur le prix", "Votre proposition de bénévolat"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-9",
    title: "Tenir la permanence",
    situation: "La présidente cherche quelqu'un pour la permanence du mercredi.",
    sourceMessage: {
      from: "Mme Blanc",
      subject: "Permanence du mercredi",
      body: "Bonjour,\nNous cherchons un membre pour tenir la permanence le mercredi, de 17 h à 19 h,\nune ou deux fois par mois.\nÊtes-vous intéressé(e) ?\nMme Blanc, présidente",
    },
    instruction: "Répondez à Mme Blanc : acceptez pour une fois par mois, expliquez vos disponibilités et demandez en quoi consiste exactement la permanence.",
    points: ["Votre acceptation", "Vos disponibilités", "Une question sur la permanence"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-10",
    title: "Collecte de vêtements",
    situation: "L'association organise une collecte pour des familles du quartier.",
    sourceMessage: {
      from: "Association des Tilleuls",
      subject: "Collecte de vêtements d'hiver",
      body: "Chers membres,\nNous organisons une collecte de vêtements d'hiver pour des familles du quartier.\nVous pouvez apporter vos dons à la permanence du mercredi.\nMerci pour votre générosité !\nLe comité",
    },
    instruction: "Répondez au comité : dites ce que vous allez donner, précisez quand vous apporterez vos dons et proposez votre aide pour la distribution.",
    points: ["Ce que vous donnez", "Quand vous l'apportez", "Votre aide pour la distribution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-11",
    title: "Répondre — vie associative (11)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-12",
    title: "Répondre — vie associative (12)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-13",
    title: "Répondre — vie associative (13)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-14",
    title: "Répondre — vie associative (14)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-15",
    title: "Répondre — vie associative (15)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-16",
    title: "Répondre — vie associative (16)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-17",
    title: "Répondre — vie associative (17)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-18",
    title: "Répondre — vie associative (18)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-19",
    title: "Répondre — vie associative (19)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-20",
    title: "Répondre — vie associative (20)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

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
   E9.1 — Faire des achats
   ════════════════════════════════════════════════════════════════════════════ */

const E9_1_CE_TEXT = `Affiche — Boutique Lina

le retrait d'un sac à dos bleu commandé en ligne.
Lieu : comptoir retrait, rue du Marché 8.
Date : vendredi entre 16 h et 18 h.
la commande porte le numéro 2847.
Prix déjà payé : 45 €.
À faire : présenter une pièce d'identité. Contact : retrait@boutiquelina.fr.
Le personnel porte un badge visible.
Les animaux ne sont pas autorisés, sauf chiens guides.
Photographies autorisées sans flash.
Un point d'eau potable est gratuit près de l'entrée.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Bonne visite et merci de votre attention.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.`;

const E9_1_CE_POOL = buildExpressPool("e9-1-ce", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Boutique Lina", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Boutique",
    vfQ: "Le message vient de Boutique Lina.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["le retrait d'un sac à dos bleu commandé en ligne", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "retrait",
    vfQ: "Le texte parle de le retrait d'un sac à dos bleu commandé en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["comptoir retrait, rue du Marché 8", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "comptoir",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["vendredi entre 16 h et 18 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi entre 16 h et 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["la commande porte le numéro 2847", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "commande",
    vfQ: "Le texte précise que la commande porte le numéro 2847.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["présenter une pièce d'identité", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "présenter",
    vfQ: "Il faut présenter une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["retrait@boutiquelina.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "retrait@boutiquelina",
    vfQ: "Le contact indiqué est retrait@boutiquelina.fr.",
    vfC: 0,
  }),
]);

const E9_1_CE_2_TEXT = `SMS — Électro Service à Marc

Bonjour Marc, petit rappel : une garantie prolongée pour un lave-linge.
On se retrouve jusqu'au 30 avril.
Adresse : rayon service après-vente.
la garantie couvre les pièces et le déplacement.
Le temps est beau, alors tout devrait bien se passer.
Prenez un pull, au cas où il ferait plus frais.
Le parking le plus proche est gratuit le soir.
Vous pouvez venir en vélo s'il fait beau.
Je t'écris aussi pour te donner un peu plus de nouvelles.
Dis-moi si tu as des questions, je réponds vite.
Tu peux m'appeler si c'est plus simple pour toi.
J'espère que tu vas bien et que tout se passe comme prévu.
N'oublie pas de me confirmer dès que tu peux.
Sinon on peut aussi en parler demain matin.
Merci d'avance pour ta réponse.
Merci de garder la facture originale. Réponse : 021 440 18 18.`;

const E9_1_CE_2_POOL = buildExpressPool("e9-1-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Électro Service", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Électro",
    vfQ: "Le message vient de Électro Service.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une garantie prolongée pour un lave-linge", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "garantie",
    vfQ: "Le texte parle de une garantie prolongée pour un lave-linge.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["rayon service après-vente", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "rayon",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jusqu'au 30 avril", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jusqu'au",
    vfQ: "Le moment indiqué est jusqu'au 30 avril.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["la garantie couvre les pièces et le déplacement", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "garantie",
    vfQ: "Le texte précise que la garantie couvre les pièces et le déplacement.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["garder la facture originale", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "garder",
    vfQ: "Il faut garder la facture originale.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["021 440 18 18", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "021",
    vfQ: "Le contact indiqué est 021 440 18 18.",
    vfC: 0,
  }),
]);

const E9_1_CE_3_TEXT = `Billet dans l'entrée — Librairie des Alpes

Bonjour à tous,
Nous préparons une offre sur les romans de poche.
Le rendez-vous est fixé du 1er au 15 mai, à caisse de la librairie.
Carte de fidélité gratuite.
le quatrième roman est offert après trois achats.
Pour aider, merci de demander le tampon avant de payer. Contact : librairie.alpes@mail.fr.
Merci de respecter le calme des autres personnes.
Le personnel peut vous aider en français simple.
Conservez le numéro de contact indiqué.
Tout le monde est le bienvenu.
À bientôt, et merci de votre lecture.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.`;

const E9_1_CE_3_POOL = buildExpressPool("e9-1-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Librairie des Alpes", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Librairie",
    vfQ: "Le message vient de Librairie des Alpes.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une offre sur les romans de poche", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "offre",
    vfQ: "Le texte parle de une offre sur les romans de poche.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["caisse de la librairie", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "caisse",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["du 1er au 15 mai", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "1er",
    vfQ: "Le moment indiqué est du 1er au 15 mai.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le quatrième roman est offert après trois achats", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "quatrième",
    vfQ: "Le texte précise que le quatrième roman est offert après trois achats.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["demander le tampon avant de payer", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "demander",
    vfQ: "Il faut demander le tampon avant de payer.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["librairie.alpes@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "librairie",
    vfQ: "Le contact indiqué est librairie.alpes@mail.fr.",
    vfC: 0,
  }),
]);

const E9_1_CE_4_TEXT = `Message de groupe — Jouets & Cie

Sarah a partagé une information.
Sujet : une liste de naissance à préparer.
Point de rencontre : espace conseils du magasin.
Horaire prévu : samedi à 10 h 30.
un vendeur aide à choisir poussette, lit et doudou.
prendre rendez-vous en magasin. Questions : naissance@jouetscie.fr.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.`;

const E9_1_CE_4_POOL = buildExpressPool("e9-1-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Jouets & Cie", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Jouets",
    vfQ: "Le message vient de Jouets & Cie.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une liste de naissance à préparer", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "liste",
    vfQ: "Le texte parle de une liste de naissance à préparer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["espace conseils du magasin", "à la gare centrale", "dans une pharmacie"],
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
    text: ["samedi à 10 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi à 10 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["un vendeur aide à choisir poussette, lit et doudou", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "vendeur",
    vfQ: "Le texte précise que un vendeur aide à choisir poussette, lit et doudou.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["prendre rendez-vous en magasin", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "prendre",
    vfQ: "Il faut prendre rendez-vous en magasin.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["naissance@jouetscie.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "naissance@jouetscie",
    vfQ: "Le contact indiqué est naissance@jouetscie.fr.",
    vfC: 0,
  }),
]);

const E9_1_CE_5_TEXT = `Brève locale — SportRent

la location de skis pour le week-end est annoncé cette semaine.
Le public est attendu vendredi dès 17 h.
L'adresse exacte est atelier location, niveau -1.
le casque est inclus dans le prix.
Forfait week-end : 25 francs.
Inscription ou question : sport-rent@montagne.ch; il faut laisser une caution et montrer une pièce d'identité.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Après cela, vous recevrez un petit rappel.
Gardez une copie papier si possible.
Le cachet de la date est important.
Sans confirmation, la place n'est pas garantie.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.`;

const E9_1_CE_5_POOL = buildExpressPool("e9-1-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["SportRent", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "SportRent",
    vfQ: "Le message vient de SportRent.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["la location de skis pour le week-end", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "location",
    vfQ: "Le texte parle de la location de skis pour le week-end.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["atelier location, niveau -1", "à la gare centrale", "dans une pharmacie"],
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
    text: ["vendredi dès 17 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi dès 17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le casque est inclus dans le prix", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "casque",
    vfQ: "Le texte précise que le casque est inclus dans le prix.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["laisser une caution et montrer une pièce d'identité", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "laisser",
    vfQ: "Il faut laisser une caution et montrer une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["sport-rent@montagne.ch", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "sport-rent@montagne",
    vfQ: "Le contact indiqué est sport-rent@montagne.ch.",
    vfC: 0,
  }),
]);

const E9_1_CE_6_TEXT = `Carte d'invitation — Vrac & Bio

Chère/cher Clara,
Vous êtes invité(e) pour une remise sur les produits en vrac.
Cela aura lieu mardi toute la journée.
Rendez-vous à balance à l'entrée du magasin.
riz, pâtes et lentilles sont concernés.
Merci de respecter le calme des autres personnes.
Le personnel peut vous aider en français simple.
Conservez le numéro de contact indiqué.
Tout le monde est le bienvenu.
À bientôt, et merci de votre lecture.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Merci de peser les contenants avant de remplir. Contact : vracbio@local.fr.`;

const E9_1_CE_6_POOL = buildExpressPool("e9-1-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Vrac & Bio", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Vrac",
    vfQ: "Le message vient de Vrac & Bio.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une remise sur les produits en vrac", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "remise",
    vfQ: "Le texte parle de une remise sur les produits en vrac.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["balance à l'entrée du magasin", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "balance",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mardi toute la journée", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mardi",
    vfQ: "Le moment indiqué est mardi toute la journée.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["riz, pâtes et lentilles sont concernés", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "riz",
    vfQ: "Le texte précise que riz, pâtes et lentilles sont concernés.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["peser les contenants avant de remplir", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "peser",
    vfQ: "Il faut peser les contenants avant de remplir.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["vracbio@local.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "vracbio@local",
    vfQ: "Le contact indiqué est vracbio@local.fr.",
    vfC: 0,
  }),
]);

const E9_1_CE_7_TEXT = `Note pratique — Horlogerie Centrale

Objet : un devis pour réparer une montre.
Les participants arrivent à atelier derrière la vitrine.
Début : jeudi entre 10 h et 18 h.
le devis est gratuit et valable quinze jours.
Prévoir : Garantie réparation : six mois.
Avant de venir, déposer la montre avec son bracelet. Contact : atelier@horlogerie.ch.
Merci de ne pas bloquer les issues de secours.
Le personnel porte un badge visible.
Les animaux ne sont pas autorisés, sauf chiens guides.
Photographies autorisées sans flash.
Un point d'eau potable est gratuit près de l'entrée.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Bonne visite et merci de votre attention.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.`;

const E9_1_CE_7_POOL = buildExpressPool("e9-1-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Horlogerie Centrale", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Horlogerie",
    vfQ: "Le message vient de Horlogerie Centrale.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un devis pour réparer une montre", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "devis",
    vfQ: "Le texte parle de un devis pour réparer une montre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["atelier derrière la vitrine", "à la gare centrale", "dans une pharmacie"],
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
    text: ["jeudi entre 10 h et 18 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jeudi",
    vfQ: "Le moment indiqué est jeudi entre 10 h et 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le devis est gratuit et valable quinze jours", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "devis",
    vfQ: "Le texte précise que le devis est gratuit et valable quinze jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["déposer la montre avec son bracelet", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "déposer",
    vfQ: "Il faut déposer la montre avec son bracelet.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["atelier@horlogerie.ch", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "atelier@horlogerie",
    vfQ: "Le contact indiqué est atelier@horlogerie.ch.",
    vfC: 0,
  }),
]);

const E9_1_CE_8_TEXT = `Page web — Harmonie Music

Nouvelle annonce : l'achat d'une guitare d'occasion.
Où ? coin instruments d'occasion.
Quand ? samedi à 14 h.
Ce qui est prévu : la guitare est vendue avec un étui souple.
Participation : Prix : 120 francs, cours d'essai offert.
Bouton à utiliser : essayer l'instrument avant de payer. Aide : music@harmonie.fr.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const E9_1_CE_8_POOL = buildExpressPool("e9-1-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Harmonie Music", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Harmonie",
    vfQ: "Le message vient de Harmonie Music.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["l'achat d'une guitare d'occasion", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "l'achat",
    vfQ: "Le texte parle de l'achat d'une guitare d'occasion.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["coin instruments d'occasion", "à la gare centrale", "dans une pharmacie"],
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
    text: ["la guitare est vendue avec un étui souple", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "guitare",
    vfQ: "Le texte précise que la guitare est vendue avec un étui souple.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["essayer l'instrument avant de payer", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "essayer",
    vfQ: "Il faut essayer l'instrument avant de payer.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["music@harmonie.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "music@harmonie",
    vfQ: "Le contact indiqué est music@harmonie.fr.",
    vfC: 0,
  }),
]);

const E9_1_CE_9_TEXT = `Flyer distribué au quartier — Refuge Compagnons

Envie de sortir ?
une vente d'accessoires pour animaux est ouvert aux voisins.
Accueil à stand devant le refuge municipal.
Rendez-vous dimanche de 9 h à 12 h.
les bénéfices paient les soins des chats. Laisses à 6 € et paniers à 12 €.
Pour participer : venir avec de la monnaie. Contact : refuge.compagnons@mail.fr.
Une version en plusieurs langues est disponible à l'accueil.
Merci de ne pas bloquer les issues de secours.
Le personnel porte un badge visible.
Les animaux ne sont pas autorisés, sauf chiens guides.
Photographies autorisées sans flash.
Un point d'eau potable est gratuit près de l'entrée.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Bonne visite et merci de votre attention.`;

const E9_1_CE_9_POOL = buildExpressPool("e9-1-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Refuge Compagnons", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Refuge",
    vfQ: "Le message vient de Refuge Compagnons.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une vente d'accessoires pour animaux", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "vente",
    vfQ: "Le texte parle de une vente d'accessoires pour animaux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["stand devant le refuge municipal", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "stand",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["dimanche de 9 h à 12 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "dimanche",
    vfQ: "Le moment indiqué est dimanche de 9 h à 12 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les bénéfices paient les soins des chats", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "bénéfices",
    vfQ: "Le texte précise que les bénéfices paient les soins des chats.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["venir avec de la monnaie", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "venir",
    vfQ: "Il faut venir avec de la monnaie.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["refuge.compagnons@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "refuge",
    vfQ: "Le contact indiqué est refuge.compagnons@mail.fr.",
    vfC: 0,
  }),
]);

const E9_1_CE_10_TEXT = `Mémo pour les familles — Fleurs de Lys

Information importante : une commande de bouquet pour un mariage.
Les familles se présentent à atelier floral, rue Haute 3.
Le créneau retenu est avant le 20 juin.
la fleuriste propose des pivoines blanches.
Acompte demandé : 30 €.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Le service répond en français et en anglais.
Merci de envoyer une photo des couleurs souhaitées; contact : contact@fleursdelys.fr.`;

const E9_1_CE_10_POOL = buildExpressPool("e9-1-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Fleurs de Lys", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Fleurs",
    vfQ: "Le message vient de Fleurs de Lys.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une commande de bouquet pour un mariage", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "commande",
    vfQ: "Le texte parle de une commande de bouquet pour un mariage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["atelier floral, rue Haute 3", "à la gare centrale", "dans une pharmacie"],
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
    text: ["avant le 20 juin", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "avant",
    vfQ: "Le moment indiqué est avant le 20 juin.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["la fleuriste propose des pivoines blanches", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "fleuriste",
    vfQ: "Le texte précise que la fleuriste propose des pivoines blanches.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["envoyer une photo des couleurs souhaitées", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "envoyer",
    vfQ: "Il faut envoyer une photo des couleurs souhaitées.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["contact@fleursdelys.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "contact@fleursdelys",
    vfQ: "Le contact indiqué est contact@fleursdelys.fr.",
    vfC: 0,
  }),
]);

const E9_1_CE_11_TEXT = `Annonce au micro — Pressing Rapide

Attention, une information concerne un tarif spécial pour costumes et chemises.
Les personnes intéressées vont à pressing de la gare.
L'activité commence du lundi au samedi avant 11 h.
les vêtements déposés le matin sont prêts le soir.
Il faut aussi noter : Chemise : 3,50 €; costume : 8 €.
Dernière étape : conserver le ticket jaune. Contact : pressing.rapide@mail.fr.
Les photos peuvent être prises pour le souvenir.
Merci de respecter le calme des autres personnes.
Le personnel peut vous aider en français simple.
Conservez le numéro de contact indiqué.
Tout le monde est le bienvenu.
À bientôt, et merci de votre lecture.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.`;

const E9_1_CE_11_POOL = buildExpressPool("e9-1-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Pressing Rapide", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Pressing",
    vfQ: "Le message vient de Pressing Rapide.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un tarif spécial pour costumes et chemises", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "tarif",
    vfQ: "Le texte parle de un tarif spécial pour costumes et chemises.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["pressing de la gare", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "pressing",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["du lundi au samedi avant 11 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "lundi",
    vfQ: "Le moment indiqué est du lundi au samedi avant 11 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les vêtements déposés le matin sont prêts le soir", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "vêtements",
    vfQ: "Le texte précise que les vêtements déposés le matin sont prêts le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["conserver le ticket jaune", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "conserver",
    vfQ: "Il faut conserver le ticket jaune.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["pressing.rapide@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "pressing",
    vfQ: "Le contact indiqué est pressing.rapide@mail.fr.",
    vfC: 0,
  }),
]);

const E9_1_CE_12_TEXT = `Post sur le réseau du quartier — OptiVue

Amina recommande un contrôle gratuit des lunettes.
Le groupe se donne rendez-vous à boutique OptiVue du centre.
Moment choisi : mercredi après-midi.
l'opticien vérifie les vis et nettoie les verres.
Montures dès 89 francs.
Répondez au message pour apporter l'ordonnance si elle est récente. Contact : optivue@lunettes.ch.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.`;

const E9_1_CE_12_POOL = buildExpressPool("e9-1-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["OptiVue", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "OptiVue",
    vfQ: "Le message vient de OptiVue.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un contrôle gratuit des lunettes", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "contrôle",
    vfQ: "Le texte parle de un contrôle gratuit des lunettes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["boutique OptiVue du centre", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "boutique",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mercredi après-midi", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mercredi",
    vfQ: "Le moment indiqué est mercredi après-midi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["l'opticien vérifie les vis et nettoie les verres", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "l'opticien",
    vfQ: "Le texte précise que l'opticien vérifie les vis et nettoie les verres.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["apporter l'ordonnance si elle est récente", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "apporter",
    vfQ: "Il faut apporter l'ordonnance si elle est récente.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["optivue@lunettes.ch", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "optivue@lunettes",
    vfQ: "Le contact indiqué est optivue@lunettes.ch.",
    vfC: 0,
  }),
]);

const E9_1_CE_13_TEXT = `Invitation imprimée — Cave du Rhône

Nous serons heureux de vous accueillir.
Programme : une dégustation de vins suisses.
Adresse : caveau sous le magasin.
Début prévu vendredi à 18 h.
cinq vins seront présentés avec des fromages.
Réponse demandée : réserver car il y a huit places. Contact : cave-rhone@mail.ch.
Les documents se téléchargent aussi en ligne.
Le numéro d'urgence est affiché partout.
Merci de garder ce document avec vous.
Les informations sont valables pour cette semaine.
Si quelque chose n'est pas clair, posez la question.
Pensez à vérifier la date et le lieu.
Une réponse rapide nous aide beaucoup.
Vous pouvez venir avec un ami ou un membre de la famille.
Apportez une pièce d'identité si possible.
Le lieu est accessible en bus et à pied.`;

const E9_1_CE_13_POOL = buildExpressPool("e9-1-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Cave du Rhône", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Cave",
    vfQ: "Le message vient de Cave du Rhône.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une dégustation de vins suisses", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "dégustation",
    vfQ: "Le texte parle de une dégustation de vins suisses.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["caveau sous le magasin", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "caveau",
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
    text: ["cinq vins seront présentés avec des fromages", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "cinq",
    vfQ: "Le texte précise que cinq vins seront présentés avec des fromages.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["réserver car il y a huit places", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "réserver",
    vfQ: "Il faut réserver car il y a huit places.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["cave-rhone@mail.ch", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "cave-rhone@mail",
    vfQ: "Le contact indiqué est cave-rhone@mail.ch.",
    vfC: 0,
  }),
]);

const E9_1_CE_14_TEXT = `Compte rendu court — Fil & Aiguille

La réunion a confirmé un atelier couture pour débutants.
Le lieu retenu est arrière-boutique textile.
La date choisie est mardi soir à 18 h 30.
le matériel est fourni pour coudre une trousse.
Atelier : 40 francs, tablier offert.
Prochaine action : s'inscrire avant lundi. Contact : atelier@filetaiguille.fr.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.`;

const E9_1_CE_14_POOL = buildExpressPool("e9-1-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Fil & Aiguille", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Fil",
    vfQ: "Le message vient de Fil & Aiguille.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un atelier couture pour débutants", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "atelier",
    vfQ: "Le texte parle de un atelier couture pour débutants.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["arrière-boutique textile", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "arrière-boutique",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["mardi soir à 18 h 30", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "mardi",
    vfQ: "Le moment indiqué est mardi soir à 18 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["le matériel est fourni pour coudre une trousse", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "matériel",
    vfQ: "Le texte précise que le matériel est fourni pour coudre une trousse.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["s'inscrire avant lundi", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "s'inscrire",
    vfQ: "Il faut s'inscrire avant lundi.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["atelier@filetaiguille.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "atelier@filetaiguille",
    vfQ: "Le contact indiqué est atelier@filetaiguille.fr.",
    vfC: 0,
  }),
]);

const E9_1_CE_15_TEXT = `Encart dans le journal de l'école — Papeterie Scolaire

À noter cette semaine : une opération rentrée sur cahiers et trousses.
Tout se passe à rayon école au premier étage.
Le rendez-vous est tout le mois d'août.
la liste officielle du collège est disponible.
Réduction : 30 % sur le deuxième cartable.
Les lecteurs doivent demander la gravure du prénom à la caisse. Contact : papeterie.scolaire@mail.fr.
Nous vous attendons avec plaisir.
Les places sont limitées, merci de confirmer.
En cas d'annulation, prévenez-nous rapidement.
Le règlement est simple et affiché à l'entrée.
Un goûter ou une boisson est parfois offert.
Les photos peuvent être prises pour le souvenir.
Merci de respecter le calme des autres personnes.
Le personnel peut vous aider en français simple.
Conservez le numéro de contact indiqué.
Tout le monde est le bienvenu.`;

const E9_1_CE_15_POOL = buildExpressPool("e9-1-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Papeterie Scolaire", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Papeterie",
    vfQ: "Le message vient de Papeterie Scolaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une opération rentrée sur cahiers et trousses", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "opération",
    vfQ: "Le texte parle de une opération rentrée sur cahiers et trousses.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["rayon école au premier étage", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "rayon",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["tout le mois d'août", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "tout",
    vfQ: "Le moment indiqué est tout le mois d'août.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["la liste officielle du collège est disponible", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "liste",
    vfQ: "Le texte précise que la liste officielle du collège est disponible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["demander la gravure du prénom à la caisse", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "demander",
    vfQ: "Il faut demander la gravure du prénom à la caisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["papeterie.scolaire@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "papeterie",
    vfQ: "Le contact indiqué est papeterie.scolaire@mail.fr.",
    vfC: 0,
  }),
]);

const E9_1_CE_16_TEXT = `Message vocal retranscrit — Antiquités Bellerive

Bonjour Jeanne, voici les informations.
On maintient une estimation gratuite de bijoux anciens.
Retrouvons-nous à salon privé du magasin.
L'heure reste samedi 20 avril.
un expert regarde chaque objet pendant dix minutes.
J'espère que tu vas bien et que tout se passe comme prévu.
N'oublie pas de me confirmer dès que tu peux.
Sinon on peut aussi en parler demain matin.
Merci d'avance pour ta réponse.
Je suis disponible après 18 heures.
Passe le bonjour à tout le monde de ma part.
À très bientôt, prends soin de toi.
Je joins les détails importants juste après.
Si le plan change, je te préviens tout de suite.
C'est important pour moi, merci de lire jusqu'à la fin.
Merci de apporter des photos pour les meubles lourds. Contact : bellerive@antiquites.fr.`;

const E9_1_CE_16_POOL = buildExpressPool("e9-1-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Antiquités Bellerive", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Antiquités",
    vfQ: "Le message vient de Antiquités Bellerive.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une estimation gratuite de bijoux anciens", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "estimation",
    vfQ: "Le texte parle de une estimation gratuite de bijoux anciens.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["salon privé du magasin", "à la gare centrale", "dans une pharmacie"],
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
    text: ["samedi 20 avril", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi 20 avril.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["un expert regarde chaque objet pendant dix minutes", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "expert",
    vfQ: "Le texte précise que un expert regarde chaque objet pendant dix minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["apporter des photos pour les meubles lourds", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "apporter",
    vfQ: "Il faut apporter des photos pour les meubles lourds.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["bellerive@antiquites.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "bellerive@antiquites",
    vfQ: "Le contact indiqué est bellerive@antiquites.fr.",
    vfC: 0,
  }),
]);

const E9_1_CE_17_TEXT = `Programme de la semaine — Épicerie du Coin

Activité principale : un marché de producteurs locaux.
Salle ou adresse : devant l'épicerie couverte.
Créneau : samedi matin dès 8 h.
un producteur fera goûter miel et fromages.
Consigne : 1 € pour les bocaux.
Pour valider sa place, rapporter les bocaux propres. Contact : epicerieducoin@local.fr.
Merci de parler doucement dans les couloirs.
Les sacs volumineux se déposent à l'accueil.
Un vestiaire gratuit est disponible.
Les consignes de sécurité sont affichées en rouge.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.`;

const E9_1_CE_17_POOL = buildExpressPool("e9-1-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Épicerie du Coin", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Épicerie",
    vfQ: "Le message vient de Épicerie du Coin.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["un marché de producteurs locaux", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "marché",
    vfQ: "Le texte parle de un marché de producteurs locaux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["devant l'épicerie couverte", "à la gare centrale", "dans une pharmacie"],
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
    text: ["samedi matin dès 8 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "samedi",
    vfQ: "Le moment indiqué est samedi matin dès 8 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["un producteur fera goûter miel et fromages", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "producteur",
    vfQ: "Le texte précise que un producteur fera goûter miel et fromages.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["rapporter les bocaux propres", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "rapporter",
    vfQ: "Il faut rapporter les bocaux propres.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["epicerieducoin@local.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "epicerieducoin@local",
    vfQ: "Le contact indiqué est epicerieducoin@local.fr.",
    vfC: 0,
  }),
]);

const E9_1_CE_18_TEXT = `Petit mot sur le cahier — Centre Lumière

Bonjour,
Merci de respecter le calme des autres personnes.
Le personnel peut vous aider en français simple.
Conservez le numéro de contact indiqué.
Tout le monde est le bienvenu.
À bientôt, et merci de votre lecture.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Merci de lire l'information sur une soirée shopping avec navette gratuite.
Le lieu indiqué est entrée principale du centre commercial.
La date est vendredi de 18 h à 21 h.
cinquante boutiques resteront ouvertes plus tard.
Restaurants ouverts avec menus à 12 €. Action demandée : prendre la carte de réduction à l'accueil. Contact : centre.lumiere@mail.fr.`;

const E9_1_CE_18_POOL = buildExpressPool("e9-1-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["Centre Lumière", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "Centre",
    vfQ: "Le message vient de Centre Lumière.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une soirée shopping avec navette gratuite", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "soirée",
    vfQ: "Le texte parle de une soirée shopping avec navette gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["entrée principale du centre commercial", "à la gare centrale", "dans une pharmacie"],
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
    text: ["vendredi de 18 h à 21 h", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "vendredi",
    vfQ: "Le moment indiqué est vendredi de 18 h à 21 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["cinquante boutiques resteront ouvertes plus tard", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "cinquante",
    vfQ: "Le texte précise que cinquante boutiques resteront ouvertes plus tard.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["prendre la carte de réduction à l'accueil", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "prendre",
    vfQ: "Il faut prendre la carte de réduction à l'accueil.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["centre.lumiere@mail.fr", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "centre",
    vfQ: "Le contact indiqué est centre.lumiere@mail.fr.",
    vfC: 0,
  }),
]);

const E9_1_CE_19_TEXT = `Publication du club — VentePrivée.ch

une vente en ligne de marques premium aura bientôt lieu.
Les membres entrent par site web et application mobile.
Accueil pendant quarante-huit heures.
les retours sont possibles sous quatorze jours.
Compte gratuit obligatoire.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
J'ai noté votre numéro dans mon téléphone.
Le message est aussi envoyé au groupe WhatsApp.
Si vous changez d'avis, dites-le sans attendre.
On peut décaler d'une demi-heure si besoin.
Je t'écris aussi pour te donner un peu plus de nouvelles.
Dis-moi si tu as des questions, je réponds vite.
Tu peux m'appeler si c'est plus simple pour toi.
J'espère que tu vas bien et que tout se passe comme prévu.
Merci de activer les alertes SMS; renseignements : support@venteprivee.ch.`;

const E9_1_CE_19_POOL = buildExpressPool("e9-1-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["VentePrivée.ch", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "VentePrivée",
    vfQ: "Le message vient de VentePrivée.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["une vente en ligne de marques premium", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "vente",
    vfQ: "Le texte parle de une vente en ligne de marques premium.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["site web et application mobile", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "site",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["pendant quarante-huit heures", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "pendant",
    vfQ: "Le moment indiqué est pendant quarante-huit heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les retours sont possibles sous quatorze jours", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "retours",
    vfQ: "Le texte précise que les retours sont possibles sous quatorze jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["activer les alertes SMS", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "activer",
    vfQ: "Il faut activer les alertes SMS.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["support@venteprivee.ch", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "support@venteprivee",
    vfQ: "Le contact indiqué est support@venteprivee.ch.",
    vfC: 0,
  }),
]);

const E9_1_CE_20_TEXT = `Avis affiché à la porte — ReTech

Changement ou rappel : la reprise d'un ancien téléphone.
L'adresse à retenir est comptoir recyclage du magasin.
Le moment à retenir est jusqu'à samedi soir.
les données sont effacées devant le client.
Condition pratique : Bon d'achat dès 50 francs selon l'état.
Avant la date, apporter le chargeur et la facture. Contact : reprise@retech.ch.
À très bientôt, prends soin de toi.
Je joins les détails importants juste après.
Si le plan change, je te préviens tout de suite.
C'est important pour moi, merci de lire jusqu'à la fin.
Tu peux partager ce message si besoin.
Bonne journée et à tout de suite !
Je reste près de mon téléphone aujourd'hui.
On se voit bientôt, j'ai hâte.
Le trajet est simple, ne t'inquiète pas.
Apporte ce dont tu as besoin, juste au cas où.`;

const E9_1_CE_20_POOL = buildExpressPool("e9-1-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Qui envoie le message ?",
    text: ["ReTech", "La mairie de Lyon", "Un magasin de meubles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message vient de _________.",
    fill: "ReTech",
    vfQ: "Le message vient de ReTech.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle le texte ?",
    text: ["la reprise d'un ancien téléphone", "D'un problème de facture", "D'une location de voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le texte parle de _________.",
    fill: "reprise",
    vfQ: "Le texte parle de la reprise d'un ancien téléphone.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où cela se passe-t-il ?",
    text: ["comptoir recyclage du magasin", "à la gare centrale", "dans une pharmacie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "comptoir",
    vfQ: "Cela se passe sur une plage privée.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est le rendez-vous ou l'activité ?",
    text: ["jusqu'à samedi soir", "lundi à 7 h", "le 31 décembre à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moment : _________.",
    fill: "jusqu'à",
    vfQ: "Le moment indiqué est jusqu'à samedi soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel détail est donné ?",
    text: ["les données sont effacées devant le client", "les animaux sont obligatoires", "le repas est interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "données",
    vfQ: "Le texte précise que les données sont effacées devant le client.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["apporter le chargeur et la facture", "annuler sans prévenir", "apporter un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "apporter",
    vfQ: "Il faut apporter le chargeur et la facture.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment demander des informations ?",
    text: ["reprise@retech.ch", "le 144", "la caisse du supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "reprise@retech",
    vfQ: "Le contact indiqué est reprise@retech.ch.",
    vfC: 0,
  }),
]);

export const E9_1_CE: CommunicationExercise[] = [
readingPoolExercise({
  id: "e9-1-ce",
  readingText: E9_1_CE_TEXT,
  questionPool: E9_1_CE_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-2",
  readingText: E9_1_CE_2_TEXT,
  questionPool: E9_1_CE_2_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-3",
  readingText: E9_1_CE_3_TEXT,
  questionPool: E9_1_CE_3_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-4",
  readingText: E9_1_CE_4_TEXT,
  questionPool: E9_1_CE_4_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-5",
  readingText: E9_1_CE_5_TEXT,
  questionPool: E9_1_CE_5_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-6",
  readingText: E9_1_CE_6_TEXT,
  questionPool: E9_1_CE_6_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-7",
  readingText: E9_1_CE_7_TEXT,
  questionPool: E9_1_CE_7_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-8",
  readingText: E9_1_CE_8_TEXT,
  questionPool: E9_1_CE_8_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-9",
  readingText: E9_1_CE_9_TEXT,
  questionPool: E9_1_CE_9_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-10",
  readingText: E9_1_CE_10_TEXT,
  questionPool: E9_1_CE_10_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-11",
  readingText: E9_1_CE_11_TEXT,
  questionPool: E9_1_CE_11_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-12",
  readingText: E9_1_CE_12_TEXT,
  questionPool: E9_1_CE_12_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-13",
  readingText: E9_1_CE_13_TEXT,
  questionPool: E9_1_CE_13_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-14",
  readingText: E9_1_CE_14_TEXT,
  questionPool: E9_1_CE_14_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-15",
  readingText: E9_1_CE_15_TEXT,
  questionPool: E9_1_CE_15_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-16",
  readingText: E9_1_CE_16_TEXT,
  questionPool: E9_1_CE_16_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-17",
  readingText: E9_1_CE_17_TEXT,
  questionPool: E9_1_CE_17_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-18",
  readingText: E9_1_CE_18_TEXT,
  questionPool: E9_1_CE_18_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-19",
  readingText: E9_1_CE_19_TEXT,
  questionPool: E9_1_CE_19_POOL,
  questionCount: 6,
}),
readingPoolExercise({
  id: "e9-1-ce-20",
  readingText: E9_1_CE_20_TEXT,
  questionPool: E9_1_CE_20_POOL,
  questionCount: 6,
}),
];

const E9_1_VENDEUR = { title: "Le vendeur", vous: "le vendeur / la vendeuse" };
const E9_1_CLIENT = { title: "Le client", vous: "le client / la cliente" };
const E9_1_SAV = { title: "L'employé du service après-vente", vous: "l'employé(e) du service après-vente" };
const E9_1_PARTICULIER = { title: "Le vendeur particulier", vous: "le vendeur / la vendeuse" };
const E9_1_ACHETEUR = { title: "L'acheteur", vous: "l'acheteur / l'acheteuse" };
const E9_1_AMI = { title: "L'ami", vous: "l'ami(e)" };

export const E9_1_PO: ExpressPoDialogue[] = [

  {
    id: "e9-1-po-1",
    title: "Acheter un lave-linge en solde",
    context: "Vous êtes dans un magasin d'électroménager pendant les soldes.",
    roleA: E9_1_VENDEUR,
    roleB: E9_1_CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Je peux vous aider ?" },
      { role: "B", text: "Bonjour, je cherche un lave-linge. J'ai vu que vous faites des soldes." },
      { role: "A", text: "Oui, jusqu'au 19 juillet. Celui-ci est à 299 € au lieu de 499 €." },
      { role: "B", text: "Il est sous garantie combien de temps ?" },
      { role: "A", text: "Deux ans. Et la livraison est gratuite à partir de 300 € d'achat." },
      { role: "B", text: "Parfait. Vous pouvez le livrer samedi matin ?" },
      { role: "A", text: "Bien sûr, le livreur passera entre 9 h et midi." },
      { role: "B", text: "Très bien, je le prends. Je paie par carte." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-1-po-2",
    title: "Rapporter un manteau",
    context: "Vous avez acheté un manteau samedi, mais il ne vous va pas.",
    roleA: E9_1_VENDEUR,
    roleB: E9_1_CLIENT,
    lines: [
      { role: "A", text: "Bonjour madame, que puis-je faire pour vous ?" },
      { role: "B", text: "Bonjour, je viens rapporter ce manteau. Je l'ai acheté samedi, mais il ne me va pas." },
      { role: "A", text: "D'accord. Nous avons d'autres tailles, vous voulez échanger ?" },
      { role: "B", text: "Non merci, je préfère un remboursement." },
      { role: "A", text: "Pas de problème. Vous avez le ticket de caisse ?" },
      { role: "B", text: "Oui, le voilà. J'ai payé par carte." },
      { role: "A", text: "Très bien, le remboursement arrivera sur votre compte dans trois jours." },
      { role: "B", text: "Merci beaucoup, bonne journée !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-1-po-3",
    title: "Appeler le service après-vente",
    context: "Votre tablette, achetée en ligne, ne s'allume plus depuis hier.",
    roleA: E9_1_SAV,
    roleB: E9_1_CLIENT,
    lines: [
      { role: "A", text: "Service après-vente, bonjour ! Que puis-je faire pour vous ?" },
      { role: "B", text: "Bonjour, j'ai acheté une tablette sur votre site, mais elle ne s'allume plus depuis hier." },
      { role: "A", text: "Je suis désolé. Pourriez-vous me donner la référence de votre commande ?" },
      { role: "B", text: "Oui, c'est la commande AB2450." },
      { role: "A", text: "Merci. Votre tablette est encore sous garantie, je vous envoie un bon de retour par e-mail." },
      { role: "B", text: "Et je dois l'envoyer où ?" },
      { role: "A", text: "Au service réparation, tout est indiqué sur le bon. Le retour est gratuit." },
      { role: "B", text: "Parfait, merci pour votre aide !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-1-po-4",
    title: "Acheter un frigo d'occasion",
    context: "Vous appelez un particulier qui vend son réfrigérateur sur un site d'annonces.",
    roleA: E9_1_PARTICULIER,
    roleB: E9_1_ACHETEUR,
    lines: [
      { role: "A", text: "Allô, bonjour ! Vous appelez pour l'annonce du réfrigérateur ?" },
      { role: "B", text: "Oui, bonjour. Il est encore disponible ?" },
      { role: "A", text: "Oui. Il a trois ans et il est en très bon état." },
      { role: "B", text: "Il est encore sous garantie ?" },
      { role: "A", text: "Non, la garantie est terminée, mais il marche parfaitement." },
      { role: "B", text: "D'accord. Est-ce que vous proposez une livraison à domicile ?" },
      { role: "A", text: "Non, désolé, il faut venir le chercher avec une voiture." },
      { role: "B", text: "Pas de problème, je peux passer samedi avec mon frère." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-1-po-5",
    title: "Négocier le prix d'un vélo",
    context: "Vous êtes venu(e) voir un vélo d'occasion trouvé sur une annonce.",
    roleA: E9_1_PARTICULIER,
    roleB: E9_1_ACHETEUR,
    lines: [
      { role: "A", text: "Bonjour ! Vous venez pour le vélo de l'annonce ?" },
      { role: "B", text: "Oui, bonjour. Je peux le regarder ?" },
      { role: "A", text: "Bien sûr. Je l'ai acheté il y a deux ans, il est en bon état." },
      { role: "B", text: "Les freins sont un peu usés… Vous le vendez à 120 €, c'est ça ?" },
      { role: "A", text: "Oui, mais je peux vous le laisser à 100 € si vous le prenez aujourd'hui." },
      { role: "B", text: "D'accord pour 100 €. Vous acceptez les espèces ?" },
      { role: "A", text: "Oui, parfait. Je vous donne aussi l'antivol avec." },
      { role: "B", text: "Super, merci ! C'est une bonne affaire." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-1-po-6",
    title: "Un colis qui n'arrive pas",
    context: "Vous avez commandé des chaussures en ligne il y a deux semaines et vous n'avez rien reçu.",
    roleA: E9_1_SAV,
    roleB: E9_1_CLIENT,
    lines: [
      { role: "A", text: "Boutique en ligne Modéo, bonjour !" },
      { role: "B", text: "Bonjour, j'ai commandé des chaussures il y a deux semaines et je n'ai rien reçu." },
      { role: "A", text: "Je vais vérifier. Vous avez le numéro de commande ?" },
      { role: "B", text: "Oui, c'est le numéro 78 415." },
      { role: "A", text: "Je vois… le colis est resté au centre de tri. Je suis désolée." },
      { role: "B", text: "Qu'est-ce que vous pouvez faire ?" },
      { role: "A", text: "Je vous renvoie la commande aujourd'hui, et je vous offre la livraison." },
      { role: "B", text: "Merci, j'espère qu'il arrivera cette fois !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-1-po-7",
    title: "Neuf ou occasion ?",
    context: "Un ami cherche un ordinateur pour ses cours et vous demande conseil.",
    roleA: E9_1_AMI,
    roleB: E9_1_AMI,
    lines: [
      { role: "A", text: "Tu as trouvé un ordinateur pour tes cours ?" },
      { role: "B", text: "Pas encore. Le neuf est trop cher pour moi en ce moment." },
      { role: "A", text: "Tu as regardé les annonces d'occasion sur Internet ?" },
      { role: "B", text: "Oui, j'ai vu un portable pas cher, mais je ne connais pas le vendeur." },
      { role: "A", text: "Regarde ses commentaires. S'ils sont positifs, c'est bon signe." },
      { role: "B", text: "Il a de très bons commentaires, et il vend l'ordinateur avec la facture." },
      { role: "A", text: "Alors vas-y ! Et teste bien la machine avant de payer." },
      { role: "B", text: "Bonne idée, je vais prendre rendez-vous avec lui." },
      { role: "A", text: "On se voit au prochain cours ?" },
      { role: "B", text: "Oui, à mardi !" },
],
  },
  {
    id: "e9-1-po-8",
    title: "Échanger un cadeau",
    context: "Vous avez reçu un pull en cadeau, mais il est trop petit.",
    roleA: E9_1_VENDEUR,
    roleB: E9_1_CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Vous désirez ?" },
      { role: "B", text: "Bonjour, j'ai reçu ce pull en cadeau, mais il est trop petit." },
      { role: "A", text: "Vous voulez l'échanger contre une taille au-dessus ?" },
      { role: "B", text: "Oui, s'il vous plaît. Vous l'avez en taille M ?" },
      { role: "A", text: "Je vais vérifier… Oui, il nous reste un pull en M, mais dans une autre couleur." },
      { role: "B", text: "Le bleu me plaît aussi. Je peux l'essayer ?" },
      { role: "A", text: "Bien sûr, la cabine est au fond du magasin." },
      { role: "B", text: "Merci, il est parfait ! Je le garde." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-1-po-9",
    title: "Au rayon multimédia pendant les soldes",
    context: "Vous cherchez un smartphone pas trop cher pendant les soldes.",
    roleA: E9_1_VENDEUR,
    roleB: E9_1_CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Vous cherchez quelque chose ?" },
      { role: "B", text: "Oui, un smartphone pas trop cher. C'est encore les soldes ?" },
      { role: "A", text: "Oui, jusqu'à samedi. Ce modèle est à moins 40 %." },
      { role: "B", text: "Il a une bonne batterie ?" },
      { role: "A", text: "Oui, elle tient deux jours, et l'appareil photo est excellent." },
      { role: "B", text: "Vous faites un paiement en trois fois ?" },
      { role: "A", text: "Oui, sans frais à partir de 200 €." },
      { role: "B", text: "Très bien, je vais le prendre alors." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
  id: "e9-1-po-10",
  title: "Demander une information sur un achat",
  context: "Vous voulez retirer un sac commandé en ligne.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour retirer un sac commandé en ligne." },
    { role: "A", text: "Bien sûr. Il est au comptoir retrait." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui, c'est conseillé. Il faut le numéro de commande." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e9-1-po-11",
  title: "Demander une information sur un achat",
  context: "Vous voulez retirer un sac commandé en ligne.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour retirer un sac commandé en ligne." },
    { role: "A", text: "Bien sûr. Il est au comptoir retrait." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui, c'est conseillé. Il faut le numéro de commande." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e9-1-po-12",
  title: "Expliquer un problème avec un achat",
  context: "Vous expliquez un problème : mon casque audio ne s'allume plus.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : mon casque audio ne s'allume plus." },
    { role: "A", text: "Je comprends. Nous allons tester la batterie." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Si besoin, on l'échange." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
{
  id: "e9-1-po-13",
  title: "Prendre rendez-vous pour un achat",
  context: "Vous voulez prendre rendez-vous pour un rendez-vous au service réparation.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais un rendez-vous au service réparation." },
    { role: "A", text: "Je peux vous proposer vendredi à 15 heures." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "Parfait. Apportez la facture." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
{
  id: "e9-1-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous confirmez ceci : la livraison du canapé.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme la livraison du canapé." },
    { role: "A", text: "Très bien. C'est bien demain entre 10 h et midi ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "Je serai à la maison." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
{
  id: "e9-1-po-15",
  title: "Demander conseil sur un achat",
  context: "Vous demandez conseil pour choisir un téléphone simple.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour choisir un téléphone simple." },
    { role: "A", text: "Celui-ci a une bonne batterie." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "L'autre prend de meilleures photos." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
{
  id: "e9-1-po-16",
  title: "Signaler un retard",
  context: "Vous signalez un retard : je viens chercher ma commande.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : je viens chercher ma commande." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "Je sors du travail plus tard." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "Je peux passer à 18 h 30." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e9-1-po-17",
  title: "Faire une réclamation polie",
  context: "Vous faites une réclamation : la lampe achetée hier est cassée.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : la lampe achetée hier est cassée." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "J'ai gardé le ticket." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Je voudrais un échange." },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
{
  id: "e9-1-po-18",
  title: "Demander une aide urgente",
  context: "Vous devez demander une aide urgente : un chargeur pour mon ordinateur.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour un chargeur pour mon ordinateur." },
    { role: "A", text: "Ce modèle est compatible." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Vous pouvez l'utiliser tout de suite." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
{
  id: "e9-1-po-19",
  title: "Comparer deux possibilités",
  context: "Vous comparez deux options : deux manteaux en solde.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare deux manteaux en solde." },
    { role: "A", text: "Le gris est plus chaud." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "Le bleu est plus léger." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
{
  id: "e9-1-po-20",
  title: "Remercier pour une aide",
  context: "Vous remerciez pour une aide : vos conseils pour les chaussures.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour vos conseils pour les chaussures." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "Elles sont très confortables." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "Je les porte déjà." },
    { role: "A", text: "N'hésitez pas à revenir si besoin." },
    { role: "B", text: "Oui, je le ferai." },
    { role: "A", text: "Bonne continuation !" },
    { role: "B", text: "Merci, à vous aussi." },
  ],
}
];

export const E9_1_PE: ExpressPePrompt[] = [

  {
    id: "e9-1-pe-1",
    title: "Votre annonce en ligne",
    situation: "Vous déménagez et vous voulez vendre votre lave-linge sur un site d'annonces.",
    instruction: "Écrivez l'annonce : décrivez l'appareil (âge, état, prix), expliquez pourquoi vous le vendez et comment venir le chercher.",
    points: ["La description et le prix", "La raison de la vente", "Comment récupérer l'appareil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pe-2",
    title: "Message au vendeur",
    situation: "Une annonce pour un canapé d'occasion vous intéresse, mais il manque des informations.",
    instruction: "Écrivez un message au vendeur : présentez-vous, posez des questions sur l'état et les dimensions, et demandez s'il propose une livraison.",
    points: ["Deux questions sur le canapé", "Une question sur la livraison", "Votre proposition de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pe-3",
    title: "E-mail au service après-vente",
    situation: "Le téléphone que vous avez acheté en ligne le mois dernier est tombé en panne.",
    instruction: "Écrivez un e-mail au service après-vente : rappelez votre achat, décrivez le problème et demandez une réparation ou un remboursement.",
    points: ["La date d'achat et la référence", "Le problème de l'appareil", "Votre demande"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pe-4",
    title: "Raconter un achat raté",
    situation: "Vous avez acheté un objet d'occasion et vous avez eu une mauvaise surprise.",
    instruction: "Racontez cette histoire à un ami au passé composé : ce que vous avez acheté, le problème découvert et ce que vous avez fait ensuite.",
    points: ["L'objet acheté et le prix", "Le problème découvert", "La solution trouvée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pe-5",
    title: "Votre avis sur un magasin",
    situation: "Un site vous demande votre avis après un achat dans un magasin d'électroménager.",
    instruction: "Écrivez votre avis : décrivez l'accueil des vendeurs, donnez votre opinion sur les prix et dites si vous recommandez ce magasin.",
    points: ["L'accueil et les conseils", "Les prix", "Votre recommandation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pe-6",
    title: "Neuf ou occasion ?",
    situation: "Votre amie hésite entre une machine à laver neuve et une machine d'occasion.",
    instruction: "Écrivez-lui un message : donnez les avantages et les inconvénients de chaque solution, puis donnez votre conseil.",
    points: ["Les avantages du neuf", "Les avantages de l'occasion", "Votre conseil final"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pe-7",
    title: "Organiser la livraison",
    situation: "Vous avez acheté un frigo et le magasin doit vous le livrer à domicile.",
    instruction: "Écrivez un message au magasin : donnez vos disponibilités, décrivez l'accès à votre logement et posez une question sur la livraison.",
    points: ["Le jour et l'heure possibles", "L'étage et l'accès", "Une question au livreur"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pe-8",
    title: "Réclamation : commande non reçue",
    situation: "Vous avez commandé des vêtements en ligne il y a trois semaines et rien n'est arrivé.",
    instruction: "Écrivez un e-mail de réclamation : rappelez votre commande, expliquez le problème et dites ce que vous demandez (renvoi ou remboursement).",
    points: ["Le numéro et la date de commande", "Le problème", "Votre demande"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pe-9",
    title: "Conseils pour les soldes",
    situation: "Un ami vient d'arriver en France et veut profiter des soldes pour la première fois.",
    instruction: "Écrivez-lui un message : expliquez quand ont lieu les soldes, comment trouver les bonnes affaires et donnez un piège à éviter.",
    points: ["Les dates des soldes", "Deux conseils pour bien acheter", "Un piège à éviter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pe-10",
    title: "Votre première vente en ligne",
    situation: "Vous venez de vendre un objet pour la première fois sur un site entre particuliers.",
    instruction: "Racontez cette expérience : l'objet vendu, la rencontre avec l'acheteur et votre impression sur ce type de vente.",
    points: ["L'objet et le prix de vente", "La rencontre avec l'acheteur", "Votre impression"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e9-1-pe-11",
  title: "Comparer deux offres",
  situation: "Vous hésitez entre acheter un réfrigérateur neuf en magasin ou d'occasion sur Internet.",
  instruction: "Écrivez un message à un ami : décrivez les deux offres, donnez votre avis et demandez son conseil.",
  points: ["Les deux offres (prix, état)", "Votre hésitation", "Sa question ou demande de conseil"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-1-pe-12",
  title: "Réclamation livraison",
  situation: "Un colis est arrivé avec un jour de retard et l'emballage est abîmé.",
  instruction: "Écrivez au service clients : décrivez le problème, demandez une solution et restez poli.",
  points: ["Le retard et l'état du colis", "Ce que vous attendez comme solution", "Votre ton poli"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-1-pe-13",
  title: "Avis sur un site",
  situation: "Vous avez acheté un objet d'occasion sur un site entre particuliers.",
  instruction: "Rédigez un avis : décrivez le vendeur, l'objet reçu et recommandez ou non ce site.",
  points: ["Le vendeur et la communication", "L'état de l'objet", "Votre recommandation"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-1-pe-14",
  title: "Budget achats",
  situation: "Vous préparez vos achats pour la rentrée avec un budget limité.",
  instruction: "Écrivez une liste avec priorités : expliquez ce que vous achetez en priorité et pourquoi.",
  points: ["Votre budget", "Trois achats prioritaires", "Ce que vous reporterez"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-1-pe-15",
  title: "Conseil à un ami",
  situation: "Un ami veut acheter son premier smartphone en France.",
  instruction: "Écrivez-lui un message : donnez trois conseils pour bien choisir et éviter les arnaques.",
  points: ["Trois conseils pratiques", "Un piège à éviter", "Une formule de politesse"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-1-pe-16",
  title: "Retour produit",
  situation: "Un appareil acheté en ligne ne fonctionne pas correctement.",
  instruction: "Écrivez au service après-vente : rappelez l'achat, décrivez le défaut et demandez un échange.",
  points: ["La référence de commande", "Le problème constaté", "Votre demande d'échange"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-1-pe-17",
  title: "Soldes et promotions",
  situation: "Les soldes commencent demain et vous voulez organiser vos achats.",
  instruction: "Écrivez un plan : quels articles chercher, quel budget par article et où aller.",
  points: ["Les articles recherchés", "Le budget par article", "Les magasins ou sites"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-1-pe-18",
  title: "Vente entre particuliers",
  situation: "Vous vendez un canapé sur un site d'annonces.",
  instruction: "Rédigez l'annonce : décrivez le canapé, fixez le prix et indiquez comment le récupérer.",
  points: ["Description et dimensions", "Le prix et la négociation", "Modalités de retrait"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-1-pe-19",
  title: "Garantie et SAV",
  situation: "Votre télévision tombe en panne un mois après l'achat.",
  instruction: "Écrivez au magasin : rappelez la date d'achat, décrivez la panne et demandez une intervention.",
  points: ["La date et le modèle", "La panne constatée", "Votre demande"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-1-pe-20",
  title: "Achat responsable",
  situation: "Vous voulez acheter un ordinateur portable en pensant à l'environnement.",
  instruction: "Écrivez un court texte : expliquez vos critères (reconditionné, durabilité) et votre choix final.",
  points: ["Vos critères écologiques", "Les options comparées", "Votre décision"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E9.2 — Se déplacer
   ════════════════════════════════════════════════════════════════════════════ */

const E9_2_CE_TEXT = `CFF — Offre Mobilis

Information transport : tous les transports publics. Tarif ou coût : soixante-quinze francs.
Zone ou itinéraire : zones 110 et 111. Détail pratique : ABonnement annuel.
Condition ou horaire : réduction de quinze pour cent. Service complémentaire : gare.
Contact ou réservation : application. Remarque : .
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const E9_2_CE_POOL = buildExpressPool("e9-2-ce", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["CFF", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "CFF _________.",
    fill: "CFF",
    vfQ: "Transport : CFF — Offre Mobilis.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Soixante-quinze francs", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : soixante-quinze francs.",
    fill: "soixante-quinze",
    vfQ: "Coût : soixante-quinze francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Zones 110 et 111", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : zones 110 et 111.",
    fill: "zones",
    vfQ: "Zone : zones 110 et 111.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Abonnement annuel", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : ABonnement annuel.",
    fill: "ABonnement",
    vfQ: "Détail : ABonnement annuel.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Réduction de quinze pour cent", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : réduction de quinze pour cent.",
    fill: "réduction",
    vfQ: "Condition : réduction de quinze pour cent.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Gare", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : gare.",
    fill: "gare",
    vfQ: "Service : gare.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Application", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : application.",
    fill: "application",
    vfQ: "Contact : application.",
    vfC: 0,
  }),
]);

const E9_2_CE_2_TEXT = `TPG — Grève annoncée

Information transport : mardi 14 mai. Tarif ou coût : lignes de tramway.
Zone ou itinéraire : bus de remplacement. Détail pratique : six heures du matin.
Condition ou horaire : service réduit. Service complémentaire : site Internet.
Contact ou réservation : alternatives. Remarque : .
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.`;

const E9_2_CE_2_POOL = buildExpressPool("e9-2-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["TPG", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "TPG _________.",
    fill: "TPG",
    vfQ: "Transport : TPG — Grève annoncée.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Lignes de tramway", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : lignes de tramway.",
    fill: "lignes",
    vfQ: "Coût : lignes de tramway.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Bus de remplacement", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : bus de remplacement.",
    fill: "bus",
    vfQ: "Zone : bus de remplacement.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Six heures du matin", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : six heures du matin.",
    fill: "six",
    vfQ: "Détail : six heures du matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Service réduit", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : service réduit.",
    fill: "service",
    vfQ: "Condition : service réduit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Site internet", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : site Internet.",
    fill: "site",
    vfQ: "Service : site Internet.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Alternatives", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : alternatives.",
    fill: "alternatives",
    vfQ: "Contact : alternatives.",
    vfC: 0,
  }),
]);

const E9_2_CE_3_TEXT = `EasyJet — Changement d'embarquement

Information transport : vol EZS 442. Tarif ou coût : porte B12.
Zone ou itinéraire : quarante-cinq minutes avant. Détail pratique : Genève–Porto.
Condition ou horaire : bagage cabine. Service complémentaire : enregistrement en ligne.
Contact ou réservation : retard de vingt minutes. Remarque : .
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.`;

const E9_2_CE_3_POOL = buildExpressPool("e9-2-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["EasyJet", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "EasyJet _________.",
    fill: "EasyJet",
    vfQ: "Transport : EasyJet — Changement d'embarquement.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Porte b12", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : porte B12.",
    fill: "porte",
    vfQ: "Coût : porte B12.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Quarante-cinq minutes avant", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : quarante-cinq minutes avant.",
    fill: "quarante-cinq",
    vfQ: "Zone : quarante-cinq minutes avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Genève–porto", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : Genève–Porto.",
    fill: "Genève–Porto",
    vfQ: "Détail : Genève–Porto.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Bagage cabine", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : bagage cabine.",
    fill: "bagage",
    vfQ: "Condition : bagage cabine.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Enregistrement en ligne", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : enregistrement en ligne.",
    fill: "enregistrement",
    vfQ: "Service : enregistrement en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Retard de vingt minutes", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : retard de vingt minutes.",
    fill: "retard",
    vfQ: "Contact : retard de vingt minutes.",
    vfC: 0,
  }),
]);

const E9_2_CE_4_TEXT = `Mobility — Carsharing

Information transport : abonnement annuel. Tarif ou coût : trente-neuf francs.
Zone ou itinéraire : essence incluse. Détail pratique : réservation par application.
Condition ou horaire : kilométrage. Service complémentaire : véhicule électrique.
Contact ou réservation : assurance. Remarque : .
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Le temps est beau, alors tout devrait bien se passer.
Prenez un pull, au cas où il ferait plus frais.
Le parking le plus proche est gratuit le soir.
Vous pouvez venir en vélo s'il fait beau.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.`;

const E9_2_CE_4_POOL = buildExpressPool("e9-2-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["Mobility", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mobility _________.",
    fill: "Mobility",
    vfQ: "Transport : Mobility — Carsharing.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Trente-neuf francs", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : trente-neuf francs.",
    fill: "trente-neuf",
    vfQ: "Coût : trente-neuf francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Essence incluse", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : essence incluse.",
    fill: "essence",
    vfQ: "Zone : essence incluse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Réservation par application", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : réservation par application.",
    fill: "réservation",
    vfQ: "Détail : réservation par application.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Kilométrage", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : kilométrage.",
    fill: "kilométrage",
    vfQ: "Condition : kilométrage.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Véhicule électrique", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : véhicule électrique.",
    fill: "véhicule",
    vfQ: "Service : véhicule électrique.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Assurance", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : assurance.",
    fill: "assurance",
    vfQ: "Contact : assurance.",
    vfC: 0,
  }),
]);

const E9_2_CE_5_TEXT = `VéloCité — Location longue durée

Information transport : vélos électriques. Tarif ou coût : quarante-neuf francs par mois.
Zone ou itinéraire : antivol fourni. Détail pratique : atelier réparation.
Condition ou horaire : casque. Service complémentaire : contrat minimum trois mois.
Contact ou réservation : caution. Remarque : .
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const E9_2_CE_5_POOL = buildExpressPool("e9-2-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["VéloCité", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "VéloCité _________.",
    fill: "VéloCité",
    vfQ: "Transport : VéloCité — Location longue durée.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Quarante-neuf francs par mois", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : quarante-neuf francs par mois.",
    fill: "quarante-neuf",
    vfQ: "Coût : quarante-neuf francs par mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Antivol fourni", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : antivol fourni.",
    fill: "antivol",
    vfQ: "Zone : antivol fourni.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Atelier réparation", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : atelier réparation.",
    fill: "atelier",
    vfQ: "Détail : atelier réparation.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Casque", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : casque.",
    fill: "casque",
    vfQ: "Condition : casque.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Contrat minimum trois mois", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : contrat minimum trois mois.",
    fill: "contrat",
    vfQ: "Service : contrat minimum trois mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Caution", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : caution.",
    fill: "caution",
    vfQ: "Contact : caution.",
    vfC: 0,
  }),
]);

const E9_2_CE_6_TEXT = `Léman Express — Nouveau tarif

Information transport : Genève–Lausanne. Tarif ou coût : quarante-deux francs.
Zone ou itinéraire : aller-retour. Détail pratique : enfants moins de seize ans.
Condition ou horaire : demi-tarif. Service complémentaire : achat en ligne.
Contact ou réservation : validité un jour. Remarque : .
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.`;

const E9_2_CE_6_POOL = buildExpressPool("e9-2-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["Léman Express", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Léman Express _________.",
    fill: "Express",
    vfQ: "Transport : Léman Express — Nouveau tarif.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Quarante-deux francs", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : quarante-deux francs.",
    fill: "quarante-deux",
    vfQ: "Coût : quarante-deux francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Aller-retour", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : aller-retour.",
    fill: "aller-retour",
    vfQ: "Zone : aller-retour.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Enfants moins de seize ans", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : enfants moins de seize ans.",
    fill: "enfants",
    vfQ: "Détail : enfants moins de seize ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Demi-tarif", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : demi-tarif.",
    fill: "demi-tarif",
    vfQ: "Condition : demi-tarif.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Achat en ligne", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : achat en ligne.",
    fill: "achat",
    vfQ: "Service : achat en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Validité un jour", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : validité un jour.",
    fill: "validité",
    vfQ: "Contact : validité un jour.",
    vfC: 0,
  }),
]);

const E9_2_CE_7_TEXT = `Aéroport Genève — Navette hôtel

Information transport : gratuite. Tarif ou coût : toutes les quinze minutes.
Zone ou itinéraire : terminal 1. Détail pratique : nuit.
Condition ou horaire : réservation. Service complémentaire : quarante-cinq places.
Contact ou réservation : fauteuils roulants. Remarque : .
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.`;

const E9_2_CE_7_POOL = buildExpressPool("e9-2-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["Aéroport Genève", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Aéroport Genève _________.",
    fill: "Genève",
    vfQ: "Transport : Aéroport Genève — Navette hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Toutes les quinze minutes", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : toutes les quinze minutes.",
    fill: "toutes",
    vfQ: "Coût : toutes les quinze minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Terminal 1", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : terminal 1.",
    fill: "terminal",
    vfQ: "Zone : terminal 1.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Nuit", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : nuit.",
    fill: "nuit",
    vfQ: "Détail : nuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Réservation", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : réservation.",
    fill: "réservation",
    vfQ: "Condition : réservation.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Quarante-cinq places", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : quarante-cinq places.",
    fill: "quarante-cinq",
    vfQ: "Service : quarante-cinq places.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Fauteuils roulants", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : fauteuils roulants.",
    fill: "fauteuils",
    vfQ: "Contact : fauteuils roulants.",
    vfC: 0,
  }),
]);

const E9_2_CE_8_TEXT = `Parking Bleu — Tarif nuit

Information transport : dix-huit heures à huit heures. Tarif ou coût : cinq francs.
Zone ou itinéraire : cent soixante places. Détail pratique : paiement par application.
Condition ou horaire : souterrain. Service complémentaire : sécurisé.
Contact ou réservation : abonnement. Remarque : .
Sans confirmation, la place n'est pas garantie.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.`;

const E9_2_CE_8_POOL = buildExpressPool("e9-2-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["Parking Bleu", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Parking Bleu _________.",
    fill: "Bleu",
    vfQ: "Transport : Parking Bleu — Tarif nuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Cinq francs", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : cinq francs.",
    fill: "cinq",
    vfQ: "Coût : cinq francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Cent soixante places", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : cent soixante places.",
    fill: "cent",
    vfQ: "Zone : cent soixante places.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Paiement par application", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : paiement par application.",
    fill: "paiement",
    vfQ: "Détail : paiement par application.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Souterrain", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : souterrain.",
    fill: "souterrain",
    vfQ: "Condition : souterrain.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Sécurisé", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : sécurisé.",
    fill: "sécurisé",
    vfQ: "Service : sécurisé.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Abonnement", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : abonnement.",
    fill: "abonnement",
    vfQ: "Contact : abonnement.",
    vfC: 0,
  }),
]);

const E9_2_CE_9_TEXT = `FlixBus — Nouvelle ligne

Information transport : Genève–Milan. Tarif ou coût : vingt-neuf euros.
Zone ou itinéraire : deux départs par jour. Détail pratique : huit heures de trajet.
Condition ou horaire : Wi-Fi gratuit. Service complémentaire : prises USB.
Contact ou réservation : bagages. Remarque : .
Ce document complète les informations déjà données.
Nous comptons sur vous.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.`;

const E9_2_CE_9_POOL = buildExpressPool("e9-2-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["FlixBus", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "FlixBus _________.",
    fill: "FlixBus",
    vfQ: "Transport : FlixBus — Nouvelle ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Vingt-neuf euros", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : vingt-neuf euros.",
    fill: "vingt-neuf",
    vfQ: "Coût : vingt-neuf euros.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Deux départs par jour", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : deux départs par jour.",
    fill: "deux",
    vfQ: "Zone : deux départs par jour.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Huit heures de trajet", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : huit heures de trajet.",
    fill: "huit",
    vfQ: "Détail : huit heures de trajet.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Wi-fi gratuit", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : Wi-Fi gratuit.",
    fill: "Wi-Fi",
    vfQ: "Condition : Wi-Fi gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Prises usb", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : prises USB.",
    fill: "prises",
    vfQ: "Service : prises USB.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Bagages", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : bagages.",
    fill: "bagages",
    vfQ: "Contact : bagages.",
    vfC: 0,
  }),
]);

const E9_2_CE_10_TEXT = `Taxi Genève — Tarif aéroport

Information transport : forfait trente-cinq francs. Tarif ou coût : centre-ville.
Zone ou itinéraire : bagages inclus. Détail pratique : réservation vingt-quatre heures.
Condition ou horaire : paiement carte. Service complémentaire : reçu.
Contact ou réservation : attente gratuite quinze minutes. Remarque : .
Les informations sont valables pour cette semaine.
Si quelque chose n'est pas clair, posez la question.
Pensez à vérifier la date et le lieu.
Une réponse rapide nous aide beaucoup.
Vous pouvez venir avec un ami ou un membre de la famille.
Apportez une pièce d'identité si possible.
Le lieu est accessible en bus et à pied.
Un plan est disponible sur demande.
Nous vous attendons avec plaisir.
Les places sont limitées, merci de confirmer.`;

const E9_2_CE_10_POOL = buildExpressPool("e9-2-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["Taxi Genève", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Taxi Genève _________.",
    fill: "Genève",
    vfQ: "Transport : Taxi Genève — Tarif aéroport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Centre-ville", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : centre-ville.",
    fill: "centre-ville",
    vfQ: "Coût : centre-ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Bagages inclus", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : bagages inclus.",
    fill: "bagages",
    vfQ: "Zone : bagages inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Réservation vingt-quatre heures", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : réservation vingt-quatre heures.",
    fill: "réservation",
    vfQ: "Détail : réservation vingt-quatre heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Paiement carte", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : paiement carte.",
    fill: "paiement",
    vfQ: "Condition : paiement carte.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Reçu", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : reçu.",
    fill: "reçu",
    vfQ: "Service : reçu.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Attente gratuite quinze minutes", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : attente gratuite quinze minutes.",
    fill: "attente",
    vfQ: "Contact : attente gratuite quinze minutes.",
    vfC: 0,
  }),
]);

const E9_2_CE_11_TEXT = `Lime — Trottinettes

Information transport : déverrouillage un franc cinquante. Tarif ou coût : trente centimes par minute.
Zone ou itinéraire : zones autorisées. Détail pratique : casque recommandé.
Condition ou horaire : application. Service complémentaire : photo de fin.
Contact ou réservation : stationnement. Remarque : .
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.`;

const E9_2_CE_11_POOL = buildExpressPool("e9-2-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["Lime", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lime _________.",
    fill: "Lime",
    vfQ: "Transport : Lime — Trottinettes.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Trente centimes par minute", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : trente centimes par minute.",
    fill: "trente",
    vfQ: "Coût : trente centimes par minute.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Zones autorisées", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : zones autorisées.",
    fill: "zones",
    vfQ: "Zone : zones autorisées.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Casque recommandé", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : casque recommandé.",
    fill: "casque",
    vfQ: "Détail : casque recommandé.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Application", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : application.",
    fill: "application",
    vfQ: "Condition : application.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Photo de fin", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : photo de fin.",
    fill: "photo",
    vfQ: "Service : photo de fin.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Stationnement", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : stationnement.",
    fill: "stationnement",
    vfQ: "Contact : stationnement.",
    vfC: 0,
  }),
]);

const E9_2_CE_12_TEXT = `SBB — Carte demi-tarif

Information transport : cent quatre-vingt-cinq francs. Tarif ou coût : validité un an.
Zone ou itinéraire : cinquante pour cent. Détail pratique : achat en ligne.
Condition ou horaire : photo d'identité. Service complémentaire : renouvellement.
Contact ou réservation : jeunes. Remarque : .
Une réponse rapide nous aide beaucoup.
Vous pouvez venir avec un ami ou un membre de la famille.
Apportez une pièce d'identité si possible.
Le lieu est accessible en bus et à pied.
Un plan est disponible sur demande.
Nous vous attendons avec plaisir.
Les places sont limitées, merci de confirmer.
En cas d'annulation, prévenez-nous rapidement.
Le règlement est simple et affiché à l'entrée.
Un goûter ou une boisson est parfois offert.`;

const E9_2_CE_12_POOL = buildExpressPool("e9-2-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["SBB", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "SBB _________.",
    fill: "SBB",
    vfQ: "Transport : SBB — Carte demi-tarif.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Validité un an", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : validité un an.",
    fill: "validité",
    vfQ: "Coût : validité un an.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Cinquante pour cent", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : cinquante pour cent.",
    fill: "cinquante",
    vfQ: "Zone : cinquante pour cent.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Achat en ligne", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : achat en ligne.",
    fill: "achat",
    vfQ: "Détail : achat en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Photo d'identité", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : photo d'identité.",
    fill: "photo",
    vfQ: "Condition : photo d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Renouvellement", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : renouvellement.",
    fill: "renouvellement",
    vfQ: "Service : renouvellement.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Jeunes", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : jeunes.",
    fill: "jeunes",
    vfQ: "Contact : jeunes.",
    vfC: 0,
  }),
]);

const E9_2_CE_13_TEXT = `Bateau CGN — Croisière lac

Information transport : Lausanne–Évian. Tarif ou coût : quarante minutes.
Zone ou itinéraire : départs toutes les heures. Détail pratique : pont supérieur.
Condition ou horaire : restauration à bord. Service complémentaire : vélo accepté.
Contact ou réservation : tarif réduit. Remarque : .
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Après cela, vous recevrez un petit rappel.
Gardez une copie papier si possible.
Le cachet de la date est important.
Sans confirmation, la place n'est pas garantie.
Voici quelques détails utiles pour la suite.`;

const E9_2_CE_13_POOL = buildExpressPool("e9-2-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["Bateau CGN", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Bateau CGN _________.",
    fill: "CGN",
    vfQ: "Transport : Bateau CGN — Croisière lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Quarante minutes", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : quarante minutes.",
    fill: "quarante",
    vfQ: "Coût : quarante minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Départs toutes les heures", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : départs toutes les heures.",
    fill: "départs",
    vfQ: "Zone : départs toutes les heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Pont supérieur", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : pont supérieur.",
    fill: "pont",
    vfQ: "Détail : pont supérieur.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Restauration à bord", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : restauration à bord.",
    fill: "restauration",
    vfQ: "Condition : restauration à bord.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Vélo accepté", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : vélo accepté.",
    fill: "vélo",
    vfQ: "Service : vélo accepté.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Tarif réduit", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : tarif réduit.",
    fill: "tarif",
    vfQ: "Contact : tarif réduit.",
    vfC: 0,
  }),
]);

const E9_2_CE_14_TEXT = `Alerte trafic — Tunnel du Gothard

Information transport : fermeture nocturne. Tarif ou coût : vingt-deux heures à cinq heures.
Zone ou itinéraire : déviation A2. Détail pratique : poids lourds.
Condition ou horaire : travaux. Service complémentaire : juin.
Contact ou réservation : info trafic. Remarque : .
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.`;

const E9_2_CE_14_POOL = buildExpressPool("e9-2-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["Alerte trafic", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Alerte trafic _________.",
    fill: "trafic",
    vfQ: "Transport : Alerte trafic — Tunnel du Gothard.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Vingt-deux heures à cinq heures", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : vingt-deux heures à cinq heures.",
    fill: "vingt-deux",
    vfQ: "Coût : vingt-deux heures à cinq heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Déviation a2", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : déviation A2.",
    fill: "déviation",
    vfQ: "Zone : déviation A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Poids lourds", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : poids lourds.",
    fill: "poids",
    vfQ: "Détail : poids lourds.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Travaux", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : travaux.",
    fill: "travaux",
    vfQ: "Condition : travaux.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Juin", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : juin.",
    fill: "juin",
    vfQ: "Service : juin.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Info trafic", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : info trafic.",
    fill: "info",
    vfQ: "Contact : info trafic.",
    vfC: 0,
  }),
]);

const E9_2_CE_15_TEXT = `Navette entreprise — Horaires

Information transport : départ huit heures. Tarif ou coût : retour dix-sept heures trente.
Zone ou itinéraire : parking P3. Détail pratique : réservation obligatoire.
Condition ou horaire : cinquante places. Service complémentaire : lundi au vendredi.
Contact ou réservation : badge. Remarque : .
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.`;

const E9_2_CE_15_POOL = buildExpressPool("e9-2-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["Navette entreprise", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Navette entreprise _________.",
    fill: "entreprise",
    vfQ: "Transport : Navette entreprise — Horaires.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Retour dix-sept heures trente", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : retour dix-sept heures trente.",
    fill: "retour",
    vfQ: "Coût : retour dix-sept heures trente.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Parking p3", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : parking P3.",
    fill: "parking",
    vfQ: "Zone : parking P3.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Réservation obligatoire", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : réservation obligatoire.",
    fill: "réservation",
    vfQ: "Détail : réservation obligatoire.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Cinquante places", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : cinquante places.",
    fill: "cinquante",
    vfQ: "Condition : cinquante places.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Lundi au vendredi", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : lundi au vendredi.",
    fill: "lundi",
    vfQ: "Service : lundi au vendredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Badge", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : badge.",
    fill: "badge",
    vfQ: "Contact : badge.",
    vfC: 0,
  }),
]);

const E9_2_CE_16_TEXT = `Autopartage — Places disponibles

Information transport : quartier des Pâquis. Tarif ou coût : stationnement gratuit.
Zone ou itinéraire : réservation une heure. Détail pratique : véhicule compact.
Condition ou horaire : carburant. Service complémentaire : nettoyage.
Contact ou réservation : assurance tous risques. Remarque : .
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.`;

const E9_2_CE_16_POOL = buildExpressPool("e9-2-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["Autopartage", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Autopartage _________.",
    fill: "Autopartage",
    vfQ: "Transport : Autopartage — Places disponibles.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Stationnement gratuit", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : stationnement gratuit.",
    fill: "stationnement",
    vfQ: "Coût : stationnement gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Réservation une heure", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : réservation une heure.",
    fill: "réservation",
    vfQ: "Zone : réservation une heure.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Véhicule compact", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : véhicule compact.",
    fill: "véhicule",
    vfQ: "Détail : véhicule compact.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Carburant", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : carburant.",
    fill: "carburant",
    vfQ: "Condition : carburant.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Nettoyage", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : nettoyage.",
    fill: "nettoyage",
    vfQ: "Service : nettoyage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Assurance tous risques", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : assurance tous risques.",
    fill: "assurance",
    vfQ: "Contact : assurance tous risques.",
    vfC: 0,
  }),
]);

const E9_2_CE_17_TEXT = `Train de nuit — Paris

Information transport : couchette. Tarif ou coût : quatre-vingt-neuf euros.
Zone ou itinéraire : départ vingt-et-une heures. Détail pratique : arrivée sept heures.
Condition ou horaire : petit-déjeuner. Service complémentaire : wagon-lit.
Contact ou réservation : réservation. Remarque : .
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Pensez à arriver un peu en avance.`;

const E9_2_CE_17_POOL = buildExpressPool("e9-2-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["Train de nuit", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Train de nuit _________.",
    fill: "nuit",
    vfQ: "Transport : Train de nuit — Paris.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Quatre-vingt-neuf euros", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : quatre-vingt-neuf euros.",
    fill: "quatre-vingt-neuf",
    vfQ: "Coût : quatre-vingt-neuf euros.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Départ vingt-et-une heures", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : départ vingt-et-une heures.",
    fill: "départ",
    vfQ: "Zone : départ vingt-et-une heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Arrivée sept heures", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : arrivée sept heures.",
    fill: "arrivée",
    vfQ: "Détail : arrivée sept heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Petit-déjeuner", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : petit-déjeuner.",
    fill: "petit-déjeuner",
    vfQ: "Condition : petit-déjeuner.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Wagon-lit", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : wagon-lit.",
    fill: "wagon-lit",
    vfQ: "Service : wagon-lit.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Réservation", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : réservation.",
    fill: "réservation",
    vfQ: "Contact : réservation.",
    vfC: 0,
  }),
]);

const E9_2_CE_18_TEXT = `Info piétons — Travaux rue du Rhône

Information transport : trois semaines. Tarif ou coût : trottoir alterné.
Zone ou itinéraire : passage protégé. Détail pratique : engins.
Condition ou horaire : horaires huit à dix-huit heures. Service complémentaire : signalétique.
Contact ou réservation : accessibilité. Remarque : .
Ce document complète les informations déjà données.
Nous comptons sur vous.
Le service répond en français et en anglais.
Une version audio est disponible sur demande.
Les documents se téléchargent aussi en ligne.
Le numéro d'urgence est affiché partout.
Merci de lire attentivement toutes les informations.
En cas de doute, demandez de l'aide à l'accueil.
Les horaires peuvent changer en cas d'urgence.
Gardez votre ticket ou votre confirmation avec vous.`;

const E9_2_CE_18_POOL = buildExpressPool("e9-2-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["Info piétons", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Info piétons _________.",
    fill: "piétons",
    vfQ: "Transport : Info piétons — Travaux rue du Rhône.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Trottoir alterné", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : trottoir alterné.",
    fill: "trottoir",
    vfQ: "Coût : trottoir alterné.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Passage protégé", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : passage protégé.",
    fill: "passage",
    vfQ: "Zone : passage protégé.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Engins", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : engins.",
    fill: "engins",
    vfQ: "Détail : engins.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Horaires huit à dix-huit heures", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : horaires huit à dix-huit heures.",
    fill: "horaires",
    vfQ: "Condition : horaires huit à dix-huit heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Signalétique", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : signalétique.",
    fill: "signalétique",
    vfQ: "Service : signalétique.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Accessibilité", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : accessibilité.",
    fill: "accessibilité",
    vfQ: "Contact : accessibilité.",
    vfC: 0,
  }),
]);

const E9_2_CE_19_TEXT = `Location van — Déménagement week-end

Information transport : quatre-vingt-dix-neuf francs. Tarif ou coût : kilométrage illimité.
Zone ou itinéraire : caution cinq cents francs. Détail pratique : permis B.
Condition ou horaire : assurance. Service complémentaire : réservation en ligne.
Contact ou réservation : carburant plein. Remarque : .
Nous comptons sur vous.
Après cela, vous recevrez un petit rappel.
Gardez une copie papier si possible.
Le cachet de la date est important.
Sans confirmation, la place n'est pas garantie.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.`;

const E9_2_CE_19_POOL = buildExpressPool("e9-2-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["Location van", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Location van _________.",
    fill: "van",
    vfQ: "Transport : Location van — Déménagement week-end.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Kilométrage illimité", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : kilométrage illimité.",
    fill: "kilométrage",
    vfQ: "Coût : kilométrage illimité.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Caution cinq cents francs", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : caution cinq cents francs.",
    fill: "caution",
    vfQ: "Zone : caution cinq cents francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Permis b", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : permis B.",
    fill: "permis",
    vfQ: "Détail : permis B.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Assurance", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : assurance.",
    fill: "assurance",
    vfQ: "Condition : assurance.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Réservation en ligne", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : réservation en ligne.",
    fill: "réservation",
    vfQ: "Service : réservation en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Carburant plein", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : carburant plein.",
    fill: "carburant",
    vfQ: "Contact : carburant plein.",
    vfC: 0,
  }),
]);

const E9_2_CE_20_TEXT = `Unireso — Abonnement jeunes

Information transport : moins de vingt-cinq ans. Tarif ou coût : quarante-neuf francs par mois.
Zone ou itinéraire : tous les transports genevois. Détail pratique : carte étudiante.
Condition ou horaire : renouvellement annuel. Service complémentaire : guichet TPG.
Contact ou réservation : application. Remarque : .
Si quelque chose n'est pas clair, posez la question.
Pensez à vérifier la date et le lieu.
Une réponse rapide nous aide beaucoup.
Vous pouvez venir avec un ami ou un membre de la famille.
Apportez une pièce d'identité si possible.
Le lieu est accessible en bus et à pied.
Un plan est disponible sur demande.
Nous vous attendons avec plaisir.
Les places sont limitées, merci de confirmer.
En cas d'annulation, prévenez-nous rapidement.`;

const E9_2_CE_20_POOL = buildExpressPool("e9-2-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Quel mode de transport ?",
    text: ["Unireso", "Un bateau de pêche", "Un hélicoptère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Unireso _________.",
    fill: "Unireso",
    vfQ: "Transport : Unireso — Abonnement jeunes.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel tarif ou coût ?",
    text: ["Quarante-neuf francs par mois", "Gratuit toujours", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tarif ou coût : quarante-neuf francs par mois.",
    fill: "quarante-neuf",
    vfQ: "Coût : quarante-neuf francs par mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone ou itinéraire ?",
    text: ["Tous les transports genevois", "À l'étranger", "Nulle part"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Zone ou itinéraire : tous les transports genevois.",
    fill: "tous",
    vfQ: "Zone : tous les transports genevois.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail pratique ?",
    text: ["Carte étudiante", "Rien", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail pratique : carte étudiante.",
    fill: "carte",
    vfQ: "Détail : carte étudiante.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Renouvellement annuel", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition ou horaire : renouvellement annuel.",
    fill: "renouvellement",
    vfQ: "Condition : renouvellement annuel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel service complémentaire ?",
    text: ["Guichet tpg", "Rien", "Un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Service complémentaire : guichet TPG.",
    fill: "guichet",
    vfQ: "Service : guichet TPG.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Comment réserver ou contacter ?",
    text: ["Application", "Par courrier", "En personne seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact ou réservation : application.",
    fill: "application",
    vfQ: "Contact : application.",
    vfC: 0,
  }),
]);

export const E9_2_CE: CommunicationExercise[] = [
readingPoolExercise({
  id: "e9-2-ce",
  readingText: E9_2_CE_TEXT,
  questionPool: E9_2_CE_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-2",
  readingText: E9_2_CE_2_TEXT,
  questionPool: E9_2_CE_2_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-3",
  readingText: E9_2_CE_3_TEXT,
  questionPool: E9_2_CE_3_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-4",
  readingText: E9_2_CE_4_TEXT,
  questionPool: E9_2_CE_4_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-5",
  readingText: E9_2_CE_5_TEXT,
  questionPool: E9_2_CE_5_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-6",
  readingText: E9_2_CE_6_TEXT,
  questionPool: E9_2_CE_6_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-7",
  readingText: E9_2_CE_7_TEXT,
  questionPool: E9_2_CE_7_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-8",
  readingText: E9_2_CE_8_TEXT,
  questionPool: E9_2_CE_8_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-9",
  readingText: E9_2_CE_9_TEXT,
  questionPool: E9_2_CE_9_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-10",
  readingText: E9_2_CE_10_TEXT,
  questionPool: E9_2_CE_10_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-11",
  readingText: E9_2_CE_11_TEXT,
  questionPool: E9_2_CE_11_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-12",
  readingText: E9_2_CE_12_TEXT,
  questionPool: E9_2_CE_12_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-13",
  readingText: E9_2_CE_13_TEXT,
  questionPool: E9_2_CE_13_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-14",
  readingText: E9_2_CE_14_TEXT,
  questionPool: E9_2_CE_14_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-15",
  readingText: E9_2_CE_15_TEXT,
  questionPool: E9_2_CE_15_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-16",
  readingText: E9_2_CE_16_TEXT,
  questionPool: E9_2_CE_16_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-17",
  readingText: E9_2_CE_17_TEXT,
  questionPool: E9_2_CE_17_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-18",
  readingText: E9_2_CE_18_TEXT,
  questionPool: E9_2_CE_18_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-19",
  readingText: E9_2_CE_19_TEXT,
  questionPool: E9_2_CE_19_POOL,
}),
readingPoolExercise({
  id: "e9-2-ce-20",
  readingText: E9_2_CE_20_TEXT,
  questionPool: E9_2_CE_20_POOL,
}),
];

const E9_2_PROPRIETAIRE = { title: "Le propriétaire de la voiture", vous: "le/la propriétaire" };
const E9_2_LOCATAIRE = { title: "Le locataire", vous: "le/la locataire de la voiture" };
const E9_2_GARAGISTE = { title: "Le garagiste", vous: "le/la garagiste" };
const E9_2_CLIENT = { title: "Le client", vous: "le client / la cliente" };
const E9_2_AGENT = { title: "L'agent des transports", vous: "l'agent des transports" };
const E9_2_VOYAGEUR = { title: "Le voyageur", vous: "le voyageur / la voyageuse" };
const E9_2_CONDUCTRICE = { title: "La conductrice", vous: "le conducteur / la conductrice" };
const E9_2_PASSAGER = { title: "Le passager", vous: "le passager / la passagère" };
const E9_2_EMPLOYE = { title: "L'employé", vous: "l'employé(e)" };
const E9_2_AMI = { title: "L'ami", vous: "l'ami(e)" };

export const E9_2_PO: ExpressPoDialogue[] = [

  {
    id: "e9-2-po-1",
    title: "Louer une voiture entre particuliers",
    context: "Vous venez chercher la voiture que vous avez réservée sur un site de location entre particuliers.",
    roleA: E9_2_PROPRIETAIRE,
    roleB: E9_2_LOCATAIRE,
    lines: [
      { role: "A", text: "Bonjour, vous venez pour la location de la voiture ?" },
      { role: "B", text: "Oui, bonjour. Je l'ai réservée sur le site pour le week-end." },
      { role: "A", text: "Très bien. Vous avez enregistré votre permis de conduire ?" },
      { role: "B", text: "Oui, et ma pièce d'identité aussi. L'assurance est bien comprise ?" },
      { role: "A", text: "Oui, tout est compris. Et je viens de faire le contrôle technique." },
      { role: "B", text: "Parfait. Pour l'essence, je fais comment ?" },
      { role: "A", text: "Le réservoir est plein. Il faut juste faire le plein avant de rendre la voiture." },
      { role: "B", text: "D'accord, je vous la ramène dimanche soir. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-2-po-2",
    title: "Au garage",
    context: "Vous venez d'avoir un petit accident et le clignotant de votre voiture ne marche plus.",
    roleA: E9_2_GARAGISTE,
    roleB: E9_2_CLIENT,
    lines: [
      { role: "A", text: "Bonjour madame, qu'est-ce qui vous amène ?" },
      { role: "B", text: "Bonjour, je viens d'avoir un petit accident et le clignotant ne marche plus." },
      { role: "A", text: "Je vais regarder ça. Il y a d'autres problèmes ?" },
      { role: "B", text: "La portière avant fait aussi un bruit bizarre." },
      { role: "A", text: "D'accord. Je vérifie l'état général du véhicule et je vous appelle dans la journée." },
      { role: "B", text: "La réparation va coûter combien, à peu près ?" },
      { role: "A", text: "Je ne peux pas encore vous dire, je vous prépare un devis." },
      { role: "B", text: "Très bien, j'attends votre appel. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-2-po-3",
    title: "Panne sur la ligne de métro",
    context: "Le trafic est interrompu sur votre ligne et vous demandez une solution à un agent.",
    roleA: E9_2_AGENT,
    roleB: E9_2_VOYAGEUR,
    lines: [
      { role: "A", text: "Bonsoir madame, je peux vous renseigner ?" },
      { role: "B", text: "Bonsoir, je viens d'entendre l'annonce. Il y a une panne sur la ligne 8 ?" },
      { role: "A", text: "Oui, malheureusement le trafic est interrompu pour une heure au moins." },
      { role: "B", text: "Je dois aller place de la République. Je peux prendre le bus 14 ?" },
      { role: "A", text: "Non, le service des bus termine à 23 h. Mais le bus de nuit N5 vous laisse rue Voltaire." },
      { role: "B", text: "C'est loin de la place ?" },
      { role: "A", text: "Non, cinq minutes à pied. Sinon, une navette va être proposée dans une petite heure." },
      { role: "B", text: "Je vais prendre le N5 alors. Merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-2-po-4",
    title: "Proposer un covoiturage",
    context: "Vous appelez une conductrice qui propose un covoiturage pour samedi.",
    roleA: E9_2_CONDUCTRICE,
    roleB: E9_2_PASSAGER,
    lines: [
      { role: "A", text: "Allô, bonjour ! Vous m'appelez pour le covoiturage de samedi ?" },
      { role: "B", text: "Oui, bonjour. Vous partez bien à 9 h pour Lyon ?" },
      { role: "A", text: "C'est ça, départ à 9 h devant la gare. J'ai encore deux places." },
      { role: "B", text: "Super. C'est combien par personne ?" },
      { role: "A", text: "Quinze euros, et je peux vous déposer au centre-ville." },
      { role: "B", text: "Parfait. Je peux prendre une grande valise ?" },
      { role: "A", text: "Oui, le coffre est vide. Soyez là dix minutes avant le départ." },
      { role: "B", text: "Entendu, à samedi ! Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-2-po-5",
    title: "Le ticket commun au parc relais",
    context: "Vous laissez votre voiture au parc relais pour la première fois.",
    roleA: E9_2_EMPLOYE,
    roleB: E9_2_CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Bienvenue au parc relais des Cerisiers." },
      { role: "B", text: "Bonjour, je laisse ma voiture ici pour la journée. Comment ça marche ?" },
      { role: "A", text: "Vous prenez un ticket commun : parking et tram pour 2 € la journée." },
      { role: "B", text: "Le tram passe souvent ?" },
      { role: "A", text: "Toutes les six minutes. L'arrêt est juste derrière le parking." },
      { role: "B", text: "Et le ticket est valable pour le retour ?" },
      { role: "A", text: "Oui, transports illimités jusqu'à minuit." },
      { role: "B", text: "C'est très pratique, j'évite les embouteillages du centre. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-2-po-6",
    title: "À la station-service",
    context: "Vous devez faire le plein avant de rendre une voiture de location.",
    roleA: E9_2_EMPLOYE,
    roleB: E9_2_CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Vous avez besoin d'aide ?" },
      { role: "B", text: "Bonjour, la pompe numéro 3 ne marche pas, je crois." },
      { role: "A", text: "Ah oui, elle est en panne, désolé. Prenez la pompe 5." },
      { role: "B", text: "D'accord. Je dois rendre une voiture de location, il faut faire le plein." },
      { role: "A", text: "Après le plein, vous pouvez payer à la caisse ou à la borne." },
      { role: "B", text: "Vous vendez aussi des tickets de lavage ?" },
      { role: "A", text: "Oui, le lavage est à 8 €, mais il y a un peu d'attente aujourd'hui." },
      { role: "B", text: "Non merci, juste l'essence alors. Bonne journée !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-2-po-7",
    title: "Quel bus pour la gare ?",
    context: "Vous devez prendre un train et vous demandez votre chemin à un chauffeur de bus.",
    roleA: { title: "Le chauffeur de bus", vous: "le chauffeur / la chauffeuse" },
    roleB: E9_2_VOYAGEUR,
    lines: [
      { role: "A", text: "Bonjour ! Montez, je pars dans deux minutes." },
      { role: "B", text: "Bonjour, ce bus va bien à la gare ?" },
      { role: "A", text: "Non, il faut prendre le 12. Mais avec les travaux, il est dévié." },
      { role: "B", text: "Ah… et il s'arrête où maintenant ?" },
      { role: "A", text: "Rue de la Poste, juste après le pont. C'est à cinq minutes de la gare." },
      { role: "B", text: "Mon train part à 10 h 40, ça va aller ?" },
      { role: "A", text: "Oui, le prochain 12 passe dans cinq minutes. Vous avez le temps." },
      { role: "B", text: "Merci beaucoup pour l'information !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-2-po-8",
    title: "Rendre la voiture de location",
    context: "Le week-end est fini : vous rendez la voiture louée à son propriétaire.",
    roleA: E9_2_PROPRIETAIRE,
    roleB: E9_2_LOCATAIRE,
    lines: [
      { role: "A", text: "Bonsoir ! Alors, ce week-end avec la voiture ?" },
      { role: "B", text: "Très bien, elle roule super bien. Je viens de faire le plein à la station-service." },
      { role: "A", text: "Merci ! Je fais vite le tour du véhicule… Tout est en ordre." },
      { role: "B", text: "J'ai juste une question : j'ai un petit doute sur le pneu avant." },
      { role: "A", text: "Ah oui, il est un peu usé, je vais le changer. Ce n'est pas de votre faute." },
      { role: "B", text: "Tant mieux. Je vous laisse les clés et les papiers ?" },
      { role: "A", text: "Oui, et je vous rends la caution sur le site ce soir." },
      { role: "B", text: "Parfait, merci ! Je relouerai avec plaisir." },
      { role: "A", text: "Merci pour les informations." },
      { role: "B", text: "Je vous en prie. Au revoir !" },
],
  },
  {
    id: "e9-2-po-9",
    title: "Embouteillages : changer de plan",
    context: "Vous venez de partir du bureau en voiture, mais votre amie vous annonce des embouteillages.",
    roleA: E9_2_AMI,
    roleB: E9_2_AMI,
    lines: [
      { role: "A", text: "Salut ! Tu es parti du bureau ? Je t'attends pour le dîner." },
      { role: "B", text: "Oui, je viens de partir, je vais chercher ma voiture au parking." },
      { role: "A", text: "Attention, ils viennent d'annoncer un accident sur la D5. Il y a de gros embouteillages." },
      { role: "B", text: "Ah non… Qu'est-ce que tu me conseilles ?" },
      { role: "A", text: "Laisse ta voiture au parc relais et prends le tram, c'est direct." },
      { role: "B", text: "Bonne idée. Le ticket est commun pour le parking et le tram ?" },
      { role: "A", text: "Oui, et c'est transports illimités pour la soirée." },
      { role: "B", text: "Super, j'arrive dans trente minutes. À tout à l'heure !" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e9-2-po-10",
    title: "Acheter un billet de train",
    context: "Vous achetez un aller-retour au guichet de la gare.",
    roleA: { title: "L'employée de la gare", vous: "l'employé(e) de la gare" },
    roleB: E9_2_VOYAGEUR,
    lines: [
      { role: "A", text: "Bonjour, je vous écoute." },
      { role: "B", text: "Bonjour, je voudrais un aller-retour pour Marseille samedi prochain." },
      { role: "A", text: "À quelle heure voulez-vous partir ?" },
      { role: "B", text: "Le matin, vers 8 h si possible." },
      { role: "A", text: "Il y a un train direct à 8 h 12. Le retour dimanche soir à 19 h 30, ça vous va ?" },
      { role: "B", text: "Parfait. Il y a une réduction avec la carte jeune ?" },
      { role: "A", text: "Oui, moins 30 %. Ça fait 54 € au lieu de 78 €." },
      { role: "B", text: "Très bien, je prends. Voici ma carte." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
{
  id: "e9-2-po-11",
  title: "Demander une information sur un déplacement",
  context: "Vous voulez prendre le bus pour l'hôpital.",
  roleA: { title: "L'employé des transports", vous: "l'employé(e) des transports" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour prendre le bus pour l'hôpital." },
    { role: "A", text: "Bien sûr. La ligne 8 part devant la gare." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui, c'est conseillé. Il faut descendre à l'arrêt Parc." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e9-2-po-12",
  title: "Expliquer un problème avec un déplacement",
  context: "Vous expliquez un problème : mon ticket ne passe pas dans le bus.",
  roleA: { title: "L'employé des transports", vous: "l'employé(e) des transports" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : mon ticket ne passe pas dans le bus." },
    { role: "A", text: "Je comprends. La bande est abîmée." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Je peux vous faire un échange." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
{
  id: "e9-2-po-13",
  title: "Prendre rendez-vous pour un déplacement",
  context: "Vous voulez prendre rendez-vous pour réserver une place pour le car de demain.",
  roleA: { title: "L'employé des transports", vous: "l'employé(e) des transports" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais réserver une place pour le car de demain." },
    { role: "A", text: "Je peux vous proposer départ à 7 h 45." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "Parfait. Je voudrais un aller-retour." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
{
  id: "e9-2-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous confirmez ceci : la navette pour l'aéroport.",
  roleA: { title: "L'employé des transports", vous: "l'employé(e) des transports" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme la navette pour l'aéroport." },
    { role: "A", text: "Très bien. C'est bien samedi à 6 heures ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "Elle passe devant l'hôtel." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
{
  id: "e9-2-po-15",
  title: "Demander conseil sur un déplacement",
  context: "Vous demandez conseil pour choisir entre le train et le car.",
  roleA: { title: "L'employé des transports", vous: "l'employé(e) des transports" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour choisir entre le train et le car." },
    { role: "A", text: "Le train est plus rapide." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "Le car coûte moins cher." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
{
  id: "e9-2-po-16",
  title: "Signaler un retard",
  context: "Vous signalez un retard : mon train a du retard.",
  roleA: { title: "L'employé des transports", vous: "l'employé(e) des transports" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : mon train a du retard." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "J'arrive à 18 h 20 au lieu de 18 heures." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "Je vous attends à la sortie." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e9-2-po-17",
  title: "Faire une réclamation polie",
  context: "Vous faites une réclamation : le bus de 7 h 10 n'est pas passé.",
  roleA: { title: "L'employé des transports", vous: "l'employé(e) des transports" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : le bus de 7 h 10 n'est pas passé." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "Je suis arrivé en retard au travail." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Je veux signaler le problème." },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
{
  id: "e9-2-po-18",
  title: "Demander une aide urgente",
  context: "Vous devez demander une aide urgente : le dernier train pour rentrer.",
  roleA: { title: "L'employé des transports", vous: "l'employé(e) des transports" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour le dernier train pour rentrer." },
    { role: "A", text: "Il part du quai 5 dans dix minutes." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Achetez le billet sur l'application." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
{
  id: "e9-2-po-19",
  title: "Comparer deux possibilités",
  context: "Vous comparez deux options : un abonnement mensuel et une carte dix trajets.",
  roleA: { title: "L'employé des transports", vous: "l'employé(e) des transports" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare un abonnement mensuel et une carte dix trajets." },
    { role: "A", text: "L'abonnement est mieux si vous voyagez souvent." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "La carte dix trajets suffit pour deux jours par semaine." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
{
  id: "e9-2-po-20",
  title: "Remercier pour une aide",
  context: "Vous remerciez pour une aide : l'aide pour trouver le quai.",
  roleA: { title: "L'employé des transports", vous: "l'employé(e) des transports" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour l'aide pour trouver le quai." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "Vous m'avez évité de manquer le train." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "Je peux partir tranquille." },
    { role: "A", text: "N'hésitez pas à revenir si besoin." },
    { role: "B", text: "Oui, je le ferai." },
    { role: "A", text: "Bonne continuation !" },
    { role: "B", text: "Merci, à vous aussi." },
  ],
}
];

export const E9_2_PE: ExpressPePrompt[] = [

  {
    id: "e9-2-pe-1",
    title: "Annonce de covoiturage",
    situation: "Vous allez à Lyon samedi en voiture et vous avez trois places libres.",
    instruction: "Écrivez une annonce de covoiturage : le trajet, le jour et l'heure de départ, le prix et vos conditions (bagages, pauses…).",
    points: ["Le trajet et l'horaire", "Le prix par personne", "Vos conditions"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pe-2",
    title: "Message au propriétaire",
    situation: "Vous voulez louer la voiture d'un particulier pour le week-end prochain.",
    instruction: "Écrivez un message au propriétaire : présentez-vous, donnez vos dates et posez des questions sur l'assurance et l'essence.",
    points: ["Vos dates de location", "Une question sur l'assurance", "Une question sur l'essence"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pe-3",
    title: "Raconter une panne",
    situation: "Votre voiture est tombée en panne la semaine dernière sur la route du travail.",
    instruction: "Racontez à un ami ce qui s'est passé : où vous étiez, le problème de la voiture et comment vous avez trouvé une solution.",
    points: ["Le lieu et le moment", "Le problème", "La solution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pe-4",
    title: "Votre trajet quotidien",
    situation: "Un site sur la mobilité vous demande de décrire vos déplacements de tous les jours.",
    instruction: "Décrivez votre trajet quotidien : les transports que vous utilisez, la durée du trajet et ce que vous faites pendant le voyage.",
    points: ["Les transports utilisés", "La durée", "Vos activités pendant le trajet"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pe-5",
    title: "Conseils à un visiteur",
    situation: "Un ami arrive en train dans votre ville samedi et ne la connaît pas.",
    instruction: "Écrivez-lui un e-mail : expliquez comment venir chez vous depuis la gare, quels tickets acheter et donnez un conseil pratique.",
    points: ["L'itinéraire depuis la gare", "Les tickets à acheter", "Un conseil pratique"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pe-6",
    title: "Réclamation aux transports",
    situation: "Le bus de votre ligne est arrivé en retard tous les jours cette semaine.",
    instruction: "Écrivez un message à la compagnie de transports : indiquez la ligne, décrivez le problème et dites ce que vous demandez.",
    points: ["La ligne et les horaires", "Le problème répété", "Votre demande"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pe-7",
    title: "Voiture ou transports en commun ?",
    situation: "Votre collègue hésite entre venir au travail en voiture ou en tram.",
    instruction: "Écrivez-lui un message : comparez les deux solutions (prix, temps, confort) et donnez votre conseil avec un exemple.",
    points: ["Les avantages de la voiture", "Les avantages du tram", "Votre conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pe-8",
    title: "Message au garage",
    situation: "Votre voiture fait un bruit bizarre et vous voulez prendre rendez-vous au garage.",
    instruction: "Écrivez un message au garagiste : décrivez le problème, donnez vos disponibilités et demandez un devis.",
    points: ["Le problème de la voiture", "Vos disponibilités", "La demande de devis"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pe-9",
    title: "Vendre sa voiture",
    situation: "Vous n'utilisez plus votre voiture et vous voulez la vendre sur un site d'annonces.",
    instruction: "Écrivez l'annonce : décrivez la voiture (âge, kilomètres, état), indiquez le prix et expliquez comment vous contacter.",
    points: ["La description de la voiture", "Le prix", "Le contact et les visites"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pe-10",
    title: "Un voyage compliqué",
    situation: "Hier, votre trajet a été très difficile : travaux, panne et correspondance manquée.",
    instruction: "Racontez ce voyage à un ami au passé composé : les problèmes rencontrés, vos solutions et la fin de l'histoire.",
    points: ["Les problèmes du trajet", "Ce que vous avez fait", "La fin de l'histoire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e9-2-pe-11",
  title: "Décrire une expérience — déplacements",
  situation: "Vous avez vécu une situation importante liée à déplacements.",
  instruction: "Racontez cette expérience : le contexte, ce qui s'est passé et le résultat.",
  points: ["Le contexte", "Les événements principaux", "Le résultat"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-2-pe-12",
  title: "Demander des informations — déplacements",
  situation: "Vous avez besoin d'informations sur déplacements.",
  instruction: "Écrivez un message formel : présentez-vous, posez trois questions précises et remerciez.",
  points: ["Votre présentation", "Trois questions", "Formule de politesse"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-2-pe-13",
  title: "Donner votre avis — déplacements",
  situation: "On vous demande votre avis sur déplacements.",
  instruction: "Exprimez votre opinion : avantages, inconvénients et recommandation.",
  points: ["Les points positifs", "Les points négatifs", "Votre recommandation"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-2-pe-14",
  title: "Raconter un problème — déplacements",
  situation: "Vous avez rencontré un problème avec déplacements.",
  instruction: "Décrivez le problème, ce que vous avez fait et ce que vous attendez maintenant.",
  points: ["Le problème", "Vos actions", "Votre attente"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-2-pe-15",
  title: "Proposer une solution — déplacements",
  situation: "Un ami a un souci lié à déplacements.",
  instruction: "Écrivez-lui un message avec deux conseils pratiques et une offre d'aide.",
  points: ["Deux conseils", "Votre offre d'aide", "Formule amicale"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-2-pe-16",
  title: "Comparer deux options — déplacements",
  situation: "Vous hésitez entre deux choix pour déplacements.",
  instruction: "Listez les avantages et inconvénients de chaque option et indiquez votre préférence.",
  points: ["Option A", "Option B", "Votre choix"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-2-pe-17",
  title: "Planifier une démarche — déplacements",
  situation: "Vous devez organiser une démarche liée à déplacements.",
  instruction: "Écrivez un plan avec les étapes, les documents nécessaires et les délais.",
  points: ["Les étapes", "Les documents", "Les délais"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-2-pe-18",
  title: "Remercier — déplacements",
  situation: "Quelqu'un vous a aidé(e) pour déplacements.",
  instruction: "Écrivez un message de remerciement : rappelez l'aide reçue et proposez de rendre la pareille.",
  points: ["L'aide reçue", "Votre gratitude", "Votre proposition"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-2-pe-19",
  title: "Informer — déplacements",
  situation: "Vous devez informer un proche d'une nouvelle sur déplacements.",
  instruction: "Écrivez un message clair avec les faits importants et une question pour lui.",
  points: ["Les informations clés", "Les détails pratiques", "Une question"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-2-pe-20",
  title: "Bilan personnel — déplacements",
  situation: "Vous faites le bilan de votre expérience avec déplacements.",
  instruction: "Rédigez un texte : ce que vous avez appris, ce qui reste à faire et vos objectifs.",
  points: ["Ce que vous avez appris", "Ce qui reste à faire", "Vos objectifs"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E9.3 — Chercher un logement
   ════════════════════════════════════════════════════════════════════════════ */

const E9_3_CE_TEXT = `Agence du Parc — Studio à louer

Agence du Parc — Studio à louer — Studio meublé trente-deux mètres carrés.
Information clé : loyer mille cent francs charges comprises. Détail : caution trois mois.
Condition : disponible premier juin. Délai : quartier calme.
Contact : visite sur rendez-vous. Remarque : balcon.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.`;

const E9_3_CE_POOL = buildExpressPool("e9-3-ce", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Agence du Parc — Studio à louer", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Agence du Parc — Studio à louer — _________.",
    fill: "Agence",
    vfQ: "Sujet : Agence du Parc — Studio à louer.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Studio meublé trente-deux mètres carrés", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Studio meublé trente-deux mètres carrés.",
    fill: "Studio",
    vfQ: "Info : Studio meublé trente-deux mètres carrés.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Loyer mille cent francs charges comprises", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : loyer mille cent francs charges comprises.",
    fill: "loyer",
    vfQ: "Clé : loyer mille cent francs charges comprises.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Caution trois mois", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : caution trois mois.",
    fill: "caution",
    vfQ: "Détail : caution trois mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Disponible premier juin", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : disponible premier juin.",
    fill: "disponible",
    vfQ: "Condition : disponible premier juin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Quartier calme", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : quartier calme.",
    fill: "quartier",
    vfQ: "Délai : quartier calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Visite sur rendez-vous", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : visite sur rendez-vous.",
    fill: "visite",
    vfQ: "Contact : visite sur rendez-vous.",
    vfC: 0,
  }),
]);

const E9_3_CE_2_TEXT = `Colocation Étudiants — Chambre libre

Colocation Étudiants — Chambre libre — chambre douze mètres carrés.
Information clé : loyer six cent cinquante francs. Détail : cuisine partagée.
Condition : proche université. Délai : non-fumeur.
Contact : dossier complet. Remarque : dès septembre.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.`;

const E9_3_CE_2_POOL = buildExpressPool("e9-3-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Colocation Étudiants — Chambre libre", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Colocation Étudiants — Chambre libre — _________.",
    fill: "Colocation",
    vfQ: "Sujet : Colocation Étudiants — Chambre libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Chambre douze mètres carrés", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chambre douze mètres carrés.",
    fill: "chambre",
    vfQ: "Info : chambre douze mètres carrés.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Loyer six cent cinquante francs", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : loyer six cent cinquante francs.",
    fill: "loyer",
    vfQ: "Clé : loyer six cent cinquante francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Cuisine partagée", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : cuisine partagée.",
    fill: "cuisine",
    vfQ: "Détail : cuisine partagée.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Proche université", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : proche université.",
    fill: "proche",
    vfQ: "Condition : proche université.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Non-fumeur", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : non-fumeur.",
    fill: "non-fumeur",
    vfQ: "Délai : non-fumeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Dossier complet", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : dossier complet.",
    fill: "dossier",
    vfQ: "Contact : dossier complet.",
    vfC: 0,
  }),
]);

const E9_3_CE_3_TEXT = `Régie Centrale — Visite appartement

Régie Centrale — Visite appartement — trois pièces soixante mètres carrés.
Information clé : quatrième étage avec ascenseur. Détail : samedi quatorze heures.
Condition : rue des Alpes. Délai : cave incluse.
Contact : place de parc optionnelle. Remarque : animaux non acceptés.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Il y a une fontaine d'eau près de l'entrée principale.
Les places assises sont limitées le week-end.
Un agent peut vous accompagner jusqu'au bon guichet.
Le bâtiment est ouvert dès 8 heures.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.`;

const E9_3_CE_3_POOL = buildExpressPool("e9-3-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Régie Centrale — Visite appartement", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Régie Centrale — Visite appartement — _________.",
    fill: "Régie",
    vfQ: "Sujet : Régie Centrale — Visite appartement.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Trois pièces soixante mètres carrés", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "trois pièces soixante mètres carrés.",
    fill: "trois",
    vfQ: "Info : trois pièces soixante mètres carrés.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Quatrième étage avec ascenseur", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : quatrième étage avec ascenseur.",
    fill: "quatrième",
    vfQ: "Clé : quatrième étage avec ascenseur.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Samedi quatorze heures", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : samedi quatorze heures.",
    fill: "samedi",
    vfQ: "Détail : samedi quatorze heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Rue des alpes", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : rue des Alpes.",
    fill: "rue",
    vfQ: "Condition : rue des Alpes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Cave incluse", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : cave incluse.",
    fill: "cave",
    vfQ: "Délai : cave incluse.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Place de parc optionnelle", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : place de parc optionnelle.",
    fill: "place",
    vfQ: "Contact : place de parc optionnelle.",
    vfC: 0,
  }),
]);

const E9_3_CE_4_TEXT = `Petite annonce — Sous-location été

Petite annonce — Sous-location été — juillet et août.
Information clé : appartement deux pièces. Détail : mille cinq cents francs par mois.
Condition : meublé. Délai : proche lac.
Contact : étudiant préféré. Remarque : contrat écrit.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
En cas d'annulation, prévenez-nous rapidement.
Le règlement est simple et affiché à l'entrée.
Un goûter ou une boisson est parfois offert.
Les photos peuvent être prises pour le souvenir.
Merci de respecter le calme des autres personnes.
Le personnel peut vous aider en français simple.
Conservez le numéro de contact indiqué.
Tout le monde est le bienvenu.
À bientôt, et merci de votre lecture.`;

const E9_3_CE_4_POOL = buildExpressPool("e9-3-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Petite annonce — Sous-location été", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petite annonce — Sous-location été — _________.",
    fill: "Petite",
    vfQ: "Sujet : Petite annonce — Sous-location été.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Juillet et août", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "juillet et août.",
    fill: "juillet",
    vfQ: "Info : juillet et août.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Appartement deux pièces", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : appartement deux pièces.",
    fill: "appartement",
    vfQ: "Clé : appartement deux pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Mille cinq cents francs par mois", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : mille cinq cents francs par mois.",
    fill: "mille",
    vfQ: "Détail : mille cinq cents francs par mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Meublé", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : meublé.",
    fill: "meublé",
    vfQ: "Condition : meublé.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Proche lac", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : proche lac.",
    fill: "proche",
    vfQ: "Délai : proche lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Étudiant préféré", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : étudiant préféré.",
    fill: "étudiant",
    vfQ: "Contact : étudiant préféré.",
    vfC: 0,
  }),
]);

const E9_3_CE_5_TEXT = `Caution solidaire — Information

Caution solidaire — Information — garant exigé.
Information clé : revenus trois fois le loyer. Détail : documents justificatifs.
Condition : formulaire en ligne. Délai : délai cinq jours.
Contact : régie partenaire. Remarque : gratuit.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.`;

const E9_3_CE_5_POOL = buildExpressPool("e9-3-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Caution solidaire — Information", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Caution solidaire — Information — _________.",
    fill: "Caution",
    vfQ: "Sujet : Caution solidaire — Information.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Garant exigé", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "garant exigé.",
    fill: "garant",
    vfQ: "Info : garant exigé.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Revenus trois fois le loyer", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : revenus trois fois le loyer.",
    fill: "revenus",
    vfQ: "Clé : revenus trois fois le loyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Documents justificatifs", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : documents justificatifs.",
    fill: "documents",
    vfQ: "Détail : documents justificatifs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Formulaire en ligne", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : formulaire en ligne.",
    fill: "formulaire",
    vfQ: "Condition : formulaire en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Délai cinq jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai cinq jours.",
    fill: "délai",
    vfQ: "Délai : délai cinq jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Régie partenaire", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : régie partenaire.",
    fill: "régie",
    vfQ: "Contact : régie partenaire.",
    vfC: 0,
  }),
]);

const E9_3_CE_6_TEXT = `État des lieux — Rendez-vous

État des lieux — Rendez-vous — entrée premier octobre.
Information clé : dix heures. Détail : présence obligatoire.
Condition : photos. Délai : compteur eau.
Contact : clés remises. Remarque : procès-verbal.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Les documents se téléchargent aussi en ligne.
Le numéro d'urgence est affiché partout.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.`;

const E9_3_CE_6_POOL = buildExpressPool("e9-3-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["État des lieux — Rendez-vous", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "État des lieux — Rendez-vous — _________.",
    fill: "État",
    vfQ: "Sujet : État des lieux — Rendez-vous.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Entrée premier octobre", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "entrée premier octobre.",
    fill: "entrée",
    vfQ: "Info : entrée premier octobre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Dix heures", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : dix heures.",
    fill: "dix",
    vfQ: "Clé : dix heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Présence obligatoire", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : présence obligatoire.",
    fill: "présence",
    vfQ: "Détail : présence obligatoire.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Photos", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : photos.",
    fill: "photos",
    vfQ: "Condition : photos.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Compteur eau", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : compteur eau.",
    fill: "compteur",
    vfQ: "Délai : compteur eau.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Clés remises", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : clés remises.",
    fill: "clés",
    vfQ: "Contact : clés remises.",
    vfC: 0,
  }),
]);

const E9_3_CE_7_TEXT = `Assurance ménage — Obligatoire

Assurance ménage — Obligatoire — responsabilité civile.
Information clé : quarante-cinq francs par an. Détail : attestation à fournir.
Condition : avant emménagement. Délai : sinistre couvert.
Contact : partenaire recommandé. Remarque : en ligne.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.`;

const E9_3_CE_7_POOL = buildExpressPool("e9-3-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Assurance ménage — Obligatoire", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Assurance ménage — Obligatoire — _________.",
    fill: "Assurance",
    vfQ: "Sujet : Assurance ménage — Obligatoire.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Responsabilité civile", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "responsabilité civile.",
    fill: "responsabilité",
    vfQ: "Info : responsabilité civile.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Quarante-cinq francs par an", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : quarante-cinq francs par an.",
    fill: "quarante-cinq",
    vfQ: "Clé : quarante-cinq francs par an.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Attestation à fournir", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : attestation à fournir.",
    fill: "attestation",
    vfQ: "Détail : attestation à fournir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Avant emménagement", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : avant emménagement.",
    fill: "avant",
    vfQ: "Condition : avant emménagement.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Sinistre couvert", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : sinistre couvert.",
    fill: "sinistre",
    vfQ: "Délai : sinistre couvert.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Partenaire recommandé", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : partenaire recommandé.",
    fill: "partenaire",
    vfQ: "Contact : partenaire recommandé.",
    vfC: 0,
  }),
]);

const E9_3_CE_8_TEXT = `Charges locatives — Détail

Charges locatives — Détail — eau chauffage ascenseur.
Information clé : deux cent vingt francs. Détail : provision mensuelle.
Condition : régularisation annuelle. Délai : compteur individuel.
Contact : économies possibles. Remarque : réunion copropriété.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.`;

const E9_3_CE_8_POOL = buildExpressPool("e9-3-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Charges locatives — Détail", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Charges locatives — Détail — _________.",
    fill: "Charges",
    vfQ: "Sujet : Charges locatives — Détail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Eau chauffage ascenseur", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "eau chauffage ascenseur.",
    fill: "eau",
    vfQ: "Info : eau chauffage ascenseur.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Deux cent vingt francs", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : deux cent vingt francs.",
    fill: "deux",
    vfQ: "Clé : deux cent vingt francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Provision mensuelle", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : provision mensuelle.",
    fill: "provision",
    vfQ: "Détail : provision mensuelle.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Régularisation annuelle", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : régularisation annuelle.",
    fill: "régularisation",
    vfQ: "Condition : régularisation annuelle.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Compteur individuel", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : compteur individuel.",
    fill: "compteur",
    vfQ: "Délai : compteur individuel.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Économies possibles", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : économies possibles.",
    fill: "économies",
    vfQ: "Contact : économies possibles.",
    vfC: 0,
  }),
]);

const E9_3_CE_9_TEXT = `Quittance de loyer — Demande

Quittance de loyer — Demande — modèle officiel.
Information clé : envoi mensuel. Détail : preuve paiement.
Condition : banque. Délai : délai quarante-huit heures.
Contact : format PDF. Remarque : archivage.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.`;

const E9_3_CE_9_POOL = buildExpressPool("e9-3-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Quittance de loyer — Demande", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quittance de loyer — Demande — _________.",
    fill: "Quittance",
    vfQ: "Sujet : Quittance de loyer — Demande.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Modèle officiel", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "modèle officiel.",
    fill: "modèle",
    vfQ: "Info : modèle officiel.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Envoi mensuel", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : envoi mensuel.",
    fill: "envoi",
    vfQ: "Clé : envoi mensuel.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Preuve paiement", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : preuve paiement.",
    fill: "preuve",
    vfQ: "Détail : preuve paiement.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Banque", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : banque.",
    fill: "banque",
    vfQ: "Condition : banque.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Délai quarante-huit heures", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai quarante-huit heures.",
    fill: "délai",
    vfQ: "Délai : délai quarante-huit heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Format pdf", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : format PDF.",
    fill: "format",
    vfQ: "Contact : format PDF.",
    vfC: 0,
  }),
]);

const E9_3_CE_10_TEXT = `Résiliation bail — Préavis

Résiliation bail — Préavis — trois mois.
Information clé : lettre recommandée. Détail : fin de mois.
Condition : état des lieux sortie. Délai : restitution caution.
Contact : délai un mois. Remarque : modèle fourni.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Merci de parler doucement dans les couloirs.`;

const E9_3_CE_10_POOL = buildExpressPool("e9-3-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Résiliation bail — Préavis", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Résiliation bail — Préavis — _________.",
    fill: "Résiliation",
    vfQ: "Sujet : Résiliation bail — Préavis.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Trois mois", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "trois mois.",
    fill: "trois",
    vfQ: "Info : trois mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Lettre recommandée", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : lettre recommandée.",
    fill: "lettre",
    vfQ: "Clé : lettre recommandée.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Fin de mois", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : fin de mois.",
    fill: "fin",
    vfQ: "Détail : fin de mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["État des lieux sortie", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : état des lieux sortie.",
    fill: "état",
    vfQ: "Condition : état des lieux sortie.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Restitution caution", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : restitution caution.",
    fill: "restitution",
    vfQ: "Délai : restitution caution.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Délai un mois", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : délai un mois.",
    fill: "délai",
    vfQ: "Contact : délai un mois.",
    vfC: 0,
  }),
]);

const E9_3_CE_11_TEXT = `Travaux copropriété — Information

Travaux copropriété — Information — ravalement façade.
Information clé : juin à septembre. Détail : nuisances possibles.
Condition : ascenseur maintenu. Délai : parking extérieur.
Contact : réunion info. Remarque : budget voté.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Pensez à arriver un peu en avance.
Le trajet dure environ quinze minutes à pied.
Une carte de la zone est affichée dehors.
Les ascenseurs se trouvent à gauche de l'entrée.`;

const E9_3_CE_11_POOL = buildExpressPool("e9-3-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Travaux copropriété — Information", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Travaux copropriété — Information — _________.",
    fill: "Travaux",
    vfQ: "Sujet : Travaux copropriété — Information.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Ravalement façade", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "ravalement façade.",
    fill: "ravalement",
    vfQ: "Info : ravalement façade.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Juin à septembre", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : juin à septembre.",
    fill: "juin",
    vfQ: "Clé : juin à septembre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Nuisances possibles", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : nuisances possibles.",
    fill: "nuisances",
    vfQ: "Détail : nuisances possibles.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Ascenseur maintenu", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : ascenseur maintenu.",
    fill: "ascenseur",
    vfQ: "Condition : ascenseur maintenu.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Parking extérieur", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : parking extérieur.",
    fill: "parking",
    vfQ: "Délai : parking extérieur.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Réunion info", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : réunion info.",
    fill: "réunion",
    vfQ: "Contact : réunion info.",
    vfC: 0,
  }),
]);

const E9_3_CE_12_TEXT = `Logement social — Candidature

Logement social — Candidature — dossier en ligne.
Information clé : revenus plafonnés. Détail : priorité familles.
Condition : délai six mois. Délai : visite attribution.
Contact : bail trois ans. Remarque : renouvelable.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
J'ai noté votre numéro dans mon téléphone.
Le message est aussi envoyé au groupe WhatsApp.
Si vous changez d'avis, dites-le sans attendre.
On peut décaler d'une demi-heure si besoin.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.`;

const E9_3_CE_12_POOL = buildExpressPool("e9-3-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Logement social — Candidature", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Logement social — Candidature — _________.",
    fill: "Logement",
    vfQ: "Sujet : Logement social — Candidature.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Dossier en ligne", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "dossier en ligne.",
    fill: "dossier",
    vfQ: "Info : dossier en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Revenus plafonnés", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : revenus plafonnés.",
    fill: "revenus",
    vfQ: "Clé : revenus plafonnés.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Priorité familles", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : priorité familles.",
    fill: "priorité",
    vfQ: "Détail : priorité familles.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Délai six mois", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : délai six mois.",
    fill: "délai",
    vfQ: "Condition : délai six mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Visite attribution", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : visite attribution.",
    fill: "visite",
    vfQ: "Délai : visite attribution.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Bail trois ans", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : bail trois ans.",
    fill: "bail",
    vfQ: "Contact : bail trois ans.",
    vfC: 0,
  }),
]);

const E9_3_CE_13_TEXT = `Airbnb règlement — Quartier

Airbnb règlement — Quartier — locations courtes durées.
Information clé : autorisation commune. Détail : nuisances signalées.
Condition : amende possible. Délai : voisins.
Contact : règlement intérieur. Remarque : calme après vingt-deux heures.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
À bientôt, et merci de votre lecture.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.`;

const E9_3_CE_13_POOL = buildExpressPool("e9-3-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Airbnb règlement — Quartier", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Airbnb règlement — Quartier — _________.",
    fill: "Airbnb",
    vfQ: "Sujet : Airbnb règlement — Quartier.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Locations courtes durées", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "locations courtes durées.",
    fill: "locations",
    vfQ: "Info : locations courtes durées.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Autorisation commune", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : autorisation commune.",
    fill: "autorisation",
    vfQ: "Clé : autorisation commune.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Nuisances signalées", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : nuisances signalées.",
    fill: "nuisances",
    vfQ: "Détail : nuisances signalées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Amende possible", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : amende possible.",
    fill: "amende",
    vfQ: "Condition : amende possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Voisins", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : voisins.",
    fill: "voisins",
    vfQ: "Délai : voisins.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Règlement intérieur", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : règlement intérieur.",
    fill: "règlement",
    vfQ: "Contact : règlement intérieur.",
    vfC: 0,
  }),
]);

const E9_3_CE_14_TEXT = `Déménagement — Ascenseur réservation

Déménagement — Ascenseur réservation — samedi réservé.
Information clé : caution deux cents francs. Détail : protection sols.
Condition : horaire huit à dix-huit heures. Délai : réservation gardien.
Contact : monte-meubles. Remarque : assurance.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
J'ai noté votre numéro dans mon téléphone.
Le message est aussi envoyé au groupe WhatsApp.`;

const E9_3_CE_14_POOL = buildExpressPool("e9-3-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Déménagement — Ascenseur réservation", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Déménagement — Ascenseur réservation — _________.",
    fill: "Déménagement",
    vfQ: "Sujet : Déménagement — Ascenseur réservation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Samedi réservé", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "samedi réservé.",
    fill: "samedi",
    vfQ: "Info : samedi réservé.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Caution deux cents francs", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : caution deux cents francs.",
    fill: "caution",
    vfQ: "Clé : caution deux cents francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Protection sols", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : protection sols.",
    fill: "protection",
    vfQ: "Détail : protection sols.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Horaire huit à dix-huit heures", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : horaire huit à dix-huit heures.",
    fill: "horaire",
    vfQ: "Condition : horaire huit à dix-huit heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Réservation gardien", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : réservation gardien.",
    fill: "réservation",
    vfQ: "Délai : réservation gardien.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Monte-meubles", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : monte-meubles.",
    fill: "monte-meubles",
    vfQ: "Contact : monte-meubles.",
    vfC: 0,
  }),
]);

const E9_3_CE_15_TEXT = `Diagnostic énergétique — Obligatoire

Diagnostic énergétique — Obligatoire — classe C.
Information clé : validité dix ans. Détail : travaux recommandés.
Condition : isolation. Délai : chauffage.
Contact : coût estimé. Remarque : aides cantonales.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.`;

const E9_3_CE_15_POOL = buildExpressPool("e9-3-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Diagnostic énergétique — Obligatoire", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Diagnostic énergétique — Obligatoire — _________.",
    fill: "Diagnostic",
    vfQ: "Sujet : Diagnostic énergétique — Obligatoire.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Classe c", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "classe C.",
    fill: "classe",
    vfQ: "Info : classe C.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Validité dix ans", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : validité dix ans.",
    fill: "validité",
    vfQ: "Clé : validité dix ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Travaux recommandés", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : travaux recommandés.",
    fill: "travaux",
    vfQ: "Détail : travaux recommandés.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Isolation", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : isolation.",
    fill: "isolation",
    vfQ: "Condition : isolation.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Chauffage", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : chauffage.",
    fill: "chauffage",
    vfQ: "Délai : chauffage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Coût estimé", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : coût estimé.",
    fill: "coût",
    vfQ: "Contact : coût estimé.",
    vfC: 0,
  }),
]);

const E9_3_CE_16_TEXT = `Colocation — Règlement intérieur

Colocation — Règlement intérieur — ménage tournant.
Information clé : visiteurs limités. Détail : cuisine propre.
Condition : factures partagées. Délai : réunion mensuelle.
Contact : médiateur. Remarque : caution partagée.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.`;

const E9_3_CE_16_POOL = buildExpressPool("e9-3-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Colocation — Règlement intérieur", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Colocation — Règlement intérieur — _________.",
    fill: "Colocation",
    vfQ: "Sujet : Colocation — Règlement intérieur.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Ménage tournant", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "ménage tournant.",
    fill: "ménage",
    vfQ: "Info : ménage tournant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Visiteurs limités", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : visiteurs limités.",
    fill: "visiteurs",
    vfQ: "Clé : visiteurs limités.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Cuisine propre", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : cuisine propre.",
    fill: "cuisine",
    vfQ: "Détail : cuisine propre.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Factures partagées", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : factures partagées.",
    fill: "factures",
    vfQ: "Condition : factures partagées.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Réunion mensuelle", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : réunion mensuelle.",
    fill: "réunion",
    vfQ: "Délai : réunion mensuelle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Médiateur", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : médiateur.",
    fill: "médiateur",
    vfQ: "Contact : médiateur.",
    vfC: 0,
  }),
]);

const E9_3_CE_17_TEXT = `Garage à louer — Annonce

Garage à louer — Annonce — quinze mètres carrés.
Information clé : cent quatre-vingts francs. Détail : sous-sol sécurisé.
Condition : accès badge. Délai : vélo possible.
Contact : disponible immédiatement. Remarque : bail un an.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Il y a une fontaine d'eau près de l'entrée principale.
Les places assises sont limitées le week-end.
Un agent peut vous accompagner jusqu'au bon guichet.
Le bâtiment est ouvert dès 8 heures.
Merci de garder ce document avec vous.
Les informations sont valables pour cette semaine.
Si quelque chose n'est pas clair, posez la question.`;

const E9_3_CE_17_POOL = buildExpressPool("e9-3-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Garage à louer — Annonce", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garage à louer — Annonce — _________.",
    fill: "Garage",
    vfQ: "Sujet : Garage à louer — Annonce.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Quinze mètres carrés", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "quinze mètres carrés.",
    fill: "quinze",
    vfQ: "Info : quinze mètres carrés.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Cent quatre-vingts francs", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : cent quatre-vingts francs.",
    fill: "cent",
    vfQ: "Clé : cent quatre-vingts francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Sous-sol sécurisé", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : sous-sol sécurisé.",
    fill: "sous-sol",
    vfQ: "Détail : sous-sol sécurisé.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Accès badge", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : accès badge.",
    fill: "accès",
    vfQ: "Condition : accès badge.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Vélo possible", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : vélo possible.",
    fill: "vélo",
    vfQ: "Délai : vélo possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Disponible immédiatement", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : disponible immédiatement.",
    fill: "disponible",
    vfQ: "Contact : disponible immédiatement.",
    vfC: 0,
  }),
]);

const E9_3_CE_18_TEXT = `Logement temporaire — Hôtel résidence

Logement temporaire — Hôtel résidence — studio équipé.
Information clé : quatre-vingt-dix francs par nuit. Détail : minimum sept nuits.
Condition : ménage hebdomadaire. Délai : réception vingt-quatre heures.
Contact : proche gare. Remarque : réservation en ligne.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Je prépare déjà tout pour que ce soit prêt.
Si tu veux, on peut faire une liste ensemble.`;

const E9_3_CE_18_POOL = buildExpressPool("e9-3-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Logement temporaire — Hôtel résidence", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Logement temporaire — Hôtel résidence — _________.",
    fill: "Logement",
    vfQ: "Sujet : Logement temporaire — Hôtel résidence.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Studio équipé", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "studio équipé.",
    fill: "studio",
    vfQ: "Info : studio équipé.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Quatre-vingt-dix francs par nuit", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : quatre-vingt-dix francs par nuit.",
    fill: "quatre-vingt-dix",
    vfQ: "Clé : quatre-vingt-dix francs par nuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Minimum sept nuits", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : minimum sept nuits.",
    fill: "minimum",
    vfQ: "Détail : minimum sept nuits.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Ménage hebdomadaire", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : ménage hebdomadaire.",
    fill: "ménage",
    vfQ: "Condition : ménage hebdomadaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Réception vingt-quatre heures", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : réception vingt-quatre heures.",
    fill: "réception",
    vfQ: "Délai : réception vingt-quatre heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Proche gare", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : proche gare.",
    fill: "proche",
    vfQ: "Contact : proche gare.",
    vfC: 0,
  }),
]);

const E9_3_CE_19_TEXT = `Aide au logement — Subvention

Aide au logement — Subvention — complément loyer.
Information clé : dossier CAF. Détail : revenus modestes.
Condition : montant variable. Délai : renouvellement annuel.
Contact : justificatifs. Remarque : délai traitement.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.`;

const E9_3_CE_19_POOL = buildExpressPool("e9-3-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Aide au logement — Subvention", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Aide au logement — Subvention — _________.",
    fill: "Aide",
    vfQ: "Sujet : Aide au logement — Subvention.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Complément loyer", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "complément loyer.",
    fill: "complément",
    vfQ: "Info : complément loyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Dossier caf", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : dossier CAF.",
    fill: "dossier",
    vfQ: "Clé : dossier CAF.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Revenus modestes", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : revenus modestes.",
    fill: "revenus",
    vfQ: "Détail : revenus modestes.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Montant variable", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : montant variable.",
    fill: "montant",
    vfQ: "Condition : montant variable.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Renouvellement annuel", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : renouvellement annuel.",
    fill: "renouvellement",
    vfQ: "Délai : renouvellement annuel.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Justificatifs", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : justificatifs.",
    fill: "justificatifs",
    vfQ: "Contact : justificatifs.",
    vfC: 0,
  }),
]);

const E9_3_CE_20_TEXT = `Visite virtuelle — Appartement

Visite virtuelle — Appartement — lien vidéo.
Information clé : trois pièces lumineuses. Détail : visite physique ensuite.
Condition : candidature en ligne. Délai : dossier PDF.
Contact : réponse sous une semaine. Remarque : priorité premier arrivé.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Sans confirmation, la place n'est pas garantie.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.`;

const E9_3_CE_20_POOL = buildExpressPool("e9-3-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Visite virtuelle — Appartement", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Visite virtuelle — Appartement — _________.",
    fill: "Visite",
    vfQ: "Sujet : Visite virtuelle — Appartement.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Lien vidéo", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "lien vidéo.",
    fill: "lien",
    vfQ: "Info : lien vidéo.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Trois pièces lumineuses", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : trois pièces lumineuses.",
    fill: "trois",
    vfQ: "Clé : trois pièces lumineuses.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Visite physique ensuite", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : visite physique ensuite.",
    fill: "visite",
    vfQ: "Détail : visite physique ensuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Candidature en ligne", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : candidature en ligne.",
    fill: "candidature",
    vfQ: "Condition : candidature en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Dossier pdf", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : dossier PDF.",
    fill: "dossier",
    vfQ: "Délai : dossier PDF.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Réponse sous une semaine", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : réponse sous une semaine.",
    fill: "réponse",
    vfQ: "Contact : réponse sous une semaine.",
    vfC: 0,
  }),
]);

export const E9_3_CE: CommunicationExercise[] = [
readingPoolExercise({
  id: "e9-3-ce",
  readingText: E9_3_CE_TEXT,
  questionPool: E9_3_CE_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-2",
  readingText: E9_3_CE_2_TEXT,
  questionPool: E9_3_CE_2_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-3",
  readingText: E9_3_CE_3_TEXT,
  questionPool: E9_3_CE_3_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-4",
  readingText: E9_3_CE_4_TEXT,
  questionPool: E9_3_CE_4_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-5",
  readingText: E9_3_CE_5_TEXT,
  questionPool: E9_3_CE_5_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-6",
  readingText: E9_3_CE_6_TEXT,
  questionPool: E9_3_CE_6_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-7",
  readingText: E9_3_CE_7_TEXT,
  questionPool: E9_3_CE_7_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-8",
  readingText: E9_3_CE_8_TEXT,
  questionPool: E9_3_CE_8_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-9",
  readingText: E9_3_CE_9_TEXT,
  questionPool: E9_3_CE_9_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-10",
  readingText: E9_3_CE_10_TEXT,
  questionPool: E9_3_CE_10_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-11",
  readingText: E9_3_CE_11_TEXT,
  questionPool: E9_3_CE_11_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-12",
  readingText: E9_3_CE_12_TEXT,
  questionPool: E9_3_CE_12_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-13",
  readingText: E9_3_CE_13_TEXT,
  questionPool: E9_3_CE_13_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-14",
  readingText: E9_3_CE_14_TEXT,
  questionPool: E9_3_CE_14_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-15",
  readingText: E9_3_CE_15_TEXT,
  questionPool: E9_3_CE_15_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-16",
  readingText: E9_3_CE_16_TEXT,
  questionPool: E9_3_CE_16_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-17",
  readingText: E9_3_CE_17_TEXT,
  questionPool: E9_3_CE_17_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-18",
  readingText: E9_3_CE_18_TEXT,
  questionPool: E9_3_CE_18_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-19",
  readingText: E9_3_CE_19_TEXT,
  questionPool: E9_3_CE_19_POOL,
}),
readingPoolExercise({
  id: "e9-3-ce-20",
  readingText: E9_3_CE_20_TEXT,
  questionPool: E9_3_CE_20_POOL,
}),
];

const E9_3_AGENT = { title: "L'agent immobilier", vous: "l'agent immobilier" };
const E9_3_CANDIDAT = { title: "Le candidat locataire", vous: "le candidat / la candidate" };
const E9_3_GARDIENNE = { title: "La gardienne", vous: "le gardien / la gardienne" };
const E9_3_PROPRIETAIRE = { title: "Le propriétaire", vous: "le/la propriétaire" };
const E9_3_AMI = { title: "L'ami", vous: "l'ami(e)" };

export const E9_3_PO: ExpressPoDialogue[] = [

  {
    id: "e9-3-po-1",
    title: "Appeler l'agence immobilière",
    context: "Vous appelez pour une annonce de T2 vue sur Internet.",
    roleA: E9_3_AGENT,
    roleB: E9_3_CANDIDAT,
    lines: [
      { role: "A", text: "Agence du Parc, bonjour !" },
      { role: "B", text: "Bonjour, j'appelle pour l'annonce du T2, rue des Lilas. Il est toujours disponible ?" },
      { role: "A", text: "Oui, il est libre à partir du 1er avril. Nous allons organiser les visites cette semaine." },
      { role: "B", text: "Très bien. C'est à quel étage ?" },
      { role: "A", text: "Au 3e étage, avec ascenseur. L'immeuble est rénové." },
      { role: "B", text: "Et le loyer est bien de 690 €, charges comprises ?" },
      { role: "A", text: "Exactement. La visite groupée a lieu samedi de 10 h à 12 h, sans inscription." },
      { role: "B", text: "Parfait, je viendrai samedi. Merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-3-po-2",
    title: "La visite de l'appartement",
    context: "Un agent immobilier vous fait visiter un appartement.",
    roleA: E9_3_AGENT,
    roleB: E9_3_CANDIDAT,
    lines: [
      { role: "A", text: "Entrez, je vous en prie. Voici le salon de 19 m2." },
      { role: "B", text: "Il est très lumineux ! Il est exposé comment ?" },
      { role: "A", text: "Plein sud, avec vue sur le parc. Et là, vous avez la cuisine équipée." },
      { role: "B", text: "La chambre donne sur la rue ?" },
      { role: "A", text: "Non, sur la cour. C'est très calme, même le soir." },
      { role: "B", text: "Et le chauffage, il est compris dans les charges ?" },
      { role: "A", text: "Oui, chauffage et eau chaude compris." },
      { role: "B", text: "C'est un coup de cœur ! Je vais déposer mon dossier aujourd'hui." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-3-po-3",
    title: "Questions à la gardienne",
    context: "Vous arrivez en avance pour visiter un studio et vous parlez avec la gardienne.",
    roleA: E9_3_GARDIENNE,
    roleB: E9_3_CANDIDAT,
    lines: [
      { role: "A", text: "Bonjour, vous cherchez quelqu'un ?" },
      { role: "B", text: "Bonjour madame, vous êtes la gardienne ? Je viens visiter le studio au rez-de-chaussée." },
      { role: "A", text: "Ah oui, la visite groupée est à 16 h. Vous êtes un peu en avance." },
      { role: "B", text: "Pas grave, j'attendrai. L'immeuble est calme ?" },
      { role: "A", text: "Très calme. Les voisins sont surtout des étudiants et des familles." },
      { role: "B", text: "Et pour les vélos, il y a un local ?" },
      { role: "A", text: "Oui, dans la cour, et une cave pour chaque logement." },
      { role: "B", text: "Merci pour ces informations, c'est très gentil !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-3-po-4",
    title: "Raconter sa visite",
    context: "Vous venez de visiter un studio et vous racontez la visite à un ami.",
    roleA: E9_3_AMI,
    roleB: E9_3_AMI,
    lines: [
      { role: "A", text: "Alors, cette visite ? Tu penses quoi du studio ?" },
      { role: "B", text: "C'est un coup de cœur ! Il fait 35 m2 et il est exposé est-ouest." },
      { role: "A", text: "Pas mal ! Et le quartier ?" },
      { role: "B", text: "Super : à cinq minutes d'une station de métro, avec plein de commerces." },
      { role: "A", text: "Et le loyer, c'est combien ?" },
      { role: "B", text: "490 €, mais les charges sont comprises. Ça va aller." },
      { role: "A", text: "Tu signes le bail quand ?" },
      { role: "B", text: "Attends, attends… l'agence va me donner une réponse demain !" },
      { role: "A", text: "Merci, c'est gentil." },
      { role: "B", text: "De rien. Au revoir !" },
],
  },
  {
    id: "e9-3-po-5",
    title: "Signer le bail",
    context: "Votre dossier a été accepté : vous signez le bail chez le propriétaire.",
    roleA: E9_3_PROPRIETAIRE,
    roleB: E9_3_CANDIDAT,
    lines: [
      { role: "A", text: "Bonjour ! Asseyez-vous, j'ai préparé le bail." },
      { role: "B", text: "Bonjour, merci. Le contrat est de combien de temps ?" },
      { role: "A", text: "Un an, renouvelable. Le loyer est à payer le 1er de chaque mois." },
      { role: "B", text: "D'accord. Il faut une caution ?" },
      { role: "A", text: "Oui, un mois de loyer. Et on fera l'état des lieux jeudi, avant votre arrivée." },
      { role: "B", text: "Parfait. Je pourrai emménager quand ?" },
      { role: "A", text: "Dès vendredi, je vous donnerai les clés après l'état des lieux." },
      { role: "B", text: "Très bien, je signe ici ? Merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-3-po-6",
    title: "Chercher une colocation",
    context: "Vous visitez une chambre libre dans une colocation.",
    roleA: { title: "Le colocataire", vous: "le/la colocataire" },
    roleB: E9_3_CANDIDAT,
    lines: [
      { role: "A", text: "Salut ! Entre, je te fais visiter l'appartement." },
      { role: "B", text: "Merci ! La chambre libre, c'est laquelle ?" },
      { role: "A", text: "Celle du fond, avec le balcon. Elle fait 12 m2." },
      { role: "B", text: "Elle me plaît ! Vous êtes combien dans la colocation ?" },
      { role: "A", text: "On est trois : deux étudiants et une infirmière. On partage le salon et la cuisine." },
      { role: "B", text: "Et le loyer par personne ?" },
      { role: "A", text: "380 € charges comprises, Internet inclus." },
      { role: "B", text: "Ça me va ! Comment on fait pour la suite ?" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-3-po-7",
    title: "L'état des lieux",
    context: "Vous faites l'état des lieux d'entrée avec l'agent immobilier.",
    roleA: E9_3_AGENT,
    roleB: E9_3_CANDIDAT,
    lines: [
      { role: "A", text: "Bonjour ! Nous allons faire l'état des lieux d'entrée ensemble." },
      { role: "B", text: "D'accord. On commence par quelle pièce ?" },
      { role: "A", text: "Par le salon. Les murs sont blancs, en bon état. Vous êtes d'accord ?" },
      { role: "B", text: "Oui, mais il y a une petite tache près de la fenêtre. On peut la noter ?" },
      { role: "A", text: "Bien sûr, je l'écris dans le document. Ensuite, la cuisine : tout fonctionne." },
      { role: "B", text: "Le frigo fait un peu de bruit, non ?" },
      { role: "A", text: "C'est normal, il est un peu ancien. Je le note aussi." },
      { role: "B", text: "Parfait. Comme ça, tout sera clair pour la sortie !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-3-po-8",
    title: "Négocier le loyer",
    context: "Le studio vous plaît, mais le loyer est un peu trop cher pour votre budget.",
    roleA: E9_3_PROPRIETAIRE,
    roleB: { title: "L'étudiante", vous: "l'étudiant(e)" },
    lines: [
      { role: "A", text: "Alors, le studio vous plaît ?" },
      { role: "B", text: "Oui, beaucoup ! Mais 520 €, c'est un peu cher pour mon budget d'étudiante." },
      { role: "A", text: "C'est le prix du quartier, vous savez." },
      { role: "B", text: "Je comprends, mais il n'y a pas d'ascenseur et la cuisine n'est pas équipée." },
      { role: "A", text: "Hum… Qu'est-ce que vous proposez ?" },
      { role: "B", text: "490 € charges comprises. Je suis sérieuse et j'ai un garant." },
      { role: "A", text: "Vous avez un bon dossier… D'accord pour 490 €." },
      { role: "B", text: "Merci beaucoup ! Vous ne le regretterez pas." },
      { role: "A", text: "C'est tout pour moi, merci." },
      { role: "B", text: "Merci à vous. Au revoir !" },
],
  },
  {
    id: "e9-3-po-9",
    title: "Quel quartier choisir ?",
    context: "Vous cherchez un appartement et vous hésitez entre deux quartiers.",
    roleA: { title: "Le collègue", vous: "le/la collègue" },
    roleB: E9_3_CANDIDAT,
    lines: [
      { role: "A", text: "Tu as commencé à chercher un appartement ?" },
      { role: "B", text: "Oui, mais j'hésite entre le centre-ville et le quartier de la gare." },
      { role: "A", text: "Le centre est agréable, mais les loyers viennent d'augmenter." },
      { role: "B", text: "C'est vrai. Et le quartier de la gare, il est comment ?" },
      { role: "A", text: "Plus calme qu'avant, et bien desservi : tram, bus, trains directs." },
      { role: "B", text: "Il y a des commerces ?" },
      { role: "A", text: "Oui, un marché le samedi et plein de petites boutiques." },
      { role: "B", text: "Tu m'as convaincu, je vais chercher là-bas !" },
      { role: "A", text: "Bon voyage alors !" },
      { role: "B", text: "Merci, vous aussi !" },
],
  },
  {
    id: "e9-3-po-10",
    title: "Répondre à une annonce",
    context: "Vous appelez un propriétaire qui loue un T3 sans agence.",
    roleA: E9_3_PROPRIETAIRE,
    roleB: E9_3_CANDIDAT,
    lines: [
      { role: "A", text: "Allô, oui ?" },
      { role: "B", text: "Bonjour monsieur, je vous appelle pour l'annonce du T3 sur Internet. Il est encore libre ?" },
      { role: "A", text: "Oui, mais j'ai déjà beaucoup de demandes. Vous travaillez ?" },
      { role: "B", text: "Oui, je suis cuisinier, en CDI depuis trois ans." },
      { role: "A", text: "Très bien. Vous voulez le visiter quand ?" },
      { role: "B", text: "Demain après le travail, vers 18 h 30, c'est possible ?" },
      { role: "A", text: "Parfait. Apportez votre dossier : fiches de paie et pièce d'identité." },
      { role: "B", text: "Entendu, à demain. Merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
{
  id: "e9-3-po-11",
  title: "Demander une information sur un logement",
  context: "Vous voulez visiter un studio près de la gare.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour visiter un studio près de la gare." },
    { role: "A", text: "Bien sûr. La visite est jeudi à 17 heures." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui, c'est conseillé. Le loyer est de 850 francs charges comprises." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e9-3-po-12",
  title: "Expliquer un problème avec un logement",
  context: "Vous expliquez un problème : le chauffage ne marche plus dans le salon.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : le chauffage ne marche plus dans le salon." },
    { role: "A", text: "Je comprends. Un technicien peut passer demain matin." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Je serai à la maison avant 10 heures." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
{
  id: "e9-3-po-13",
  title: "Prendre rendez-vous pour un logement",
  context: "Vous voulez prendre rendez-vous pour une visite pour un appartement de deux pièces.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais une visite pour un appartement de deux pièces." },
    { role: "A", text: "Je peux vous proposer mardi à 18 heures." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "Parfait. Je viens avec mon dossier." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
{
  id: "e9-3-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous confirmez ceci : la visite de l'appartement.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme la visite de l'appartement." },
    { role: "A", text: "Très bien. C'est bien jeudi à 16 h 30 ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "L'adresse est rue du Nord 14." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
{
  id: "e9-3-po-15",
  title: "Demander conseil sur un logement",
  context: "Vous demandez conseil pour choisir entre un studio proche du travail et un appartement plus grand.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour choisir entre un studio proche du travail et un appartement plus grand." },
    { role: "A", text: "Le studio est plus cher." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "L'appartement est à vingt minutes en bus." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
{
  id: "e9-3-po-16",
  title: "Signaler un retard",
  context: "Vous signalez un retard : la visite du logement.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : la visite du logement." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "Le bus est bloqué." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "J'arrive avec quinze minutes de retard." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e9-3-po-17",
  title: "Faire une réclamation polie",
  context: "Vous faites une réclamation : une fenêtre cassée depuis une semaine.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : une fenêtre cassée depuis une semaine." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "L'air froid entre dans la chambre." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Je demande une réparation rapide." },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
{
  id: "e9-3-po-18",
  title: "Demander une aide urgente",
  context: "Vous devez demander une aide urgente : une fuite d'eau dans la cuisine.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour une fuite d'eau dans la cuisine." },
    { role: "A", text: "Coupez l'eau sous l'évier." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Un plombier arrive cet après-midi." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
{
  id: "e9-3-po-19",
  title: "Comparer deux possibilités",
  context: "Vous comparez deux options : un studio meublé et un deux-pièces vide.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare un studio meublé et un deux-pièces vide." },
    { role: "A", text: "Le studio est libre tout de suite." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "Le deux-pièces a plus de place." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
{
  id: "e9-3-po-20",
  title: "Remercier pour une aide",
  context: "Vous remerciez pour une aide : la visite du logement.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour la visite du logement." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "Vos explications sur le dossier." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "Je vais envoyer les papiers ce soir." },
    { role: "A", text: "N'hésitez pas à revenir si besoin." },
    { role: "B", text: "Oui, je le ferai." },
    { role: "A", text: "Bonne continuation !" },
    { role: "B", text: "Merci, à vous aussi." },
  ],
}
];

export const E9_3_PE: ExpressPePrompt[] = [

  {
    id: "e9-3-pe-1",
    title: "E-mail à l'agence",
    situation: "Une annonce de T2 vous intéresse, mais il manque des informations importantes.",
    instruction: "Écrivez un e-mail à l'agence : présentez-vous, posez des questions sur le logement (étage, charges, chauffage) et demandez une visite.",
    points: ["Votre présentation", "Deux questions sur le logement", "La demande de visite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pe-2",
    title: "Votre logement idéal",
    situation: "Un site immobilier vous demande de décrire le logement de vos rêves.",
    instruction: "Décrivez votre logement idéal : le type et la taille, les pièces importantes pour vous et le quartier où vous voulez habiter.",
    points: ["Le type de logement", "Les pièces importantes", "Le quartier"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pe-3",
    title: "Message après la visite",
    situation: "Vous venez de visiter un appartement qui vous plaît beaucoup.",
    instruction: "Écrivez un message à l'agence : dites que vous voulez cet appartement, présentez votre situation et annoncez l'envoi de votre dossier.",
    points: ["Votre intérêt pour l'appartement", "Votre situation (travail, garant)", "L'envoi du dossier"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pe-4",
    title: "Annonce de colocation",
    situation: "Une chambre est libre dans votre appartement et vous cherchez un colocataire.",
    instruction: "Écrivez l'annonce : décrivez la chambre et l'appartement, indiquez le loyer et expliquez quel colocataire vous cherchez.",
    points: ["La chambre et l'appartement", "Le loyer et les charges", "Le colocataire idéal"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pe-5",
    title: "Raconter votre déménagement",
    situation: "Vous avez emménagé dans un nouvel appartement le mois dernier.",
    instruction: "Racontez votre déménagement à un ami au passé composé : la recherche, le jour du déménagement et vos premières impressions.",
    points: ["La recherche du logement", "Le jour du déménagement", "Vos premières impressions"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pe-6",
    title: "Comparer deux appartements",
    situation: "Vous hésitez entre deux appartements : un grand T2 loin du centre et un petit studio en centre-ville.",
    instruction: "Écrivez un message à un ami : comparez les deux logements (taille, loyer, quartier) et expliquez votre choix.",
    points: ["Les avantages du T2", "Les avantages du studio", "Votre choix et pourquoi"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pe-7",
    title: "Compléter son dossier",
    situation: "L'agence vous demande d'envoyer les documents qui manquent à votre dossier.",
    instruction: "Écrivez un e-mail : listez les documents que vous envoyez, posez une question sur le dossier et donnez vos disponibilités pour signer.",
    points: ["Les documents envoyés", "Une question sur le dossier", "Vos disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pe-8",
    title: "Questions au propriétaire",
    situation: "Vous allez signer le bail la semaine prochaine, mais vous avez encore des questions.",
    instruction: "Écrivez un message au propriétaire : posez des questions sur les charges, l'état des lieux et la cave ou le parking.",
    points: ["Une question sur les charges", "Une question sur l'état des lieux", "Une question sur la cave ou le parking"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pe-9",
    title: "Décrire votre quartier",
    situation: "Une amie veut emménager près de chez vous et vous demande des informations.",
    instruction: "Décrivez votre quartier : les transports, les commerces et ce que vous aimez ou n'aimez pas dans ce quartier.",
    points: ["Les transports", "Les commerces", "Votre opinion sur le quartier"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pe-10",
    title: "Conseils pour une visite",
    situation: "Votre amie va visiter son premier appartement en France demain.",
    instruction: "Écrivez-lui un message : expliquez ce qu'il faut regarder pendant la visite, les questions à poser et les documents à apporter.",
    points: ["Ce qu'il faut regarder", "Les questions à poser", "Les documents à apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e9-3-pe-11",
  title: "Décrire une expérience — logement",
  situation: "Vous avez vécu une situation importante liée à logement.",
  instruction: "Racontez cette expérience : le contexte, ce qui s'est passé et le résultat.",
  points: ["Le contexte", "Les événements principaux", "Le résultat"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-3-pe-12",
  title: "Demander des informations — logement",
  situation: "Vous avez besoin d'informations sur logement.",
  instruction: "Écrivez un message formel : présentez-vous, posez trois questions précises et remerciez.",
  points: ["Votre présentation", "Trois questions", "Formule de politesse"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-3-pe-13",
  title: "Donner votre avis — logement",
  situation: "On vous demande votre avis sur logement.",
  instruction: "Exprimez votre opinion : avantages, inconvénients et recommandation.",
  points: ["Les points positifs", "Les points négatifs", "Votre recommandation"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-3-pe-14",
  title: "Raconter un problème — logement",
  situation: "Vous avez rencontré un problème avec logement.",
  instruction: "Décrivez le problème, ce que vous avez fait et ce que vous attendez maintenant.",
  points: ["Le problème", "Vos actions", "Votre attente"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-3-pe-15",
  title: "Proposer une solution — logement",
  situation: "Un ami a un souci lié à logement.",
  instruction: "Écrivez-lui un message avec deux conseils pratiques et une offre d'aide.",
  points: ["Deux conseils", "Votre offre d'aide", "Formule amicale"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-3-pe-16",
  title: "Comparer deux options — logement",
  situation: "Vous hésitez entre deux choix pour logement.",
  instruction: "Listez les avantages et inconvénients de chaque option et indiquez votre préférence.",
  points: ["Option A", "Option B", "Votre choix"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-3-pe-17",
  title: "Planifier une démarche — logement",
  situation: "Vous devez organiser une démarche liée à logement.",
  instruction: "Écrivez un plan avec les étapes, les documents nécessaires et les délais.",
  points: ["Les étapes", "Les documents", "Les délais"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-3-pe-18",
  title: "Remercier — logement",
  situation: "Quelqu'un vous a aidé(e) pour logement.",
  instruction: "Écrivez un message de remerciement : rappelez l'aide reçue et proposez de rendre la pareille.",
  points: ["L'aide reçue", "Votre gratitude", "Votre proposition"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-3-pe-19",
  title: "Informer — logement",
  situation: "Vous devez informer un proche d'une nouvelle sur logement.",
  instruction: "Écrivez un message clair avec les faits importants et une question pour lui.",
  points: ["Les informations clés", "Les détails pratiques", "Une question"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-3-pe-20",
  title: "Bilan personnel — logement",
  situation: "Vous faites le bilan de votre expérience avec logement.",
  instruction: "Rédigez un texte : ce que vous avez appris, ce qui reste à faire et vos objectifs.",
  points: ["Ce que vous avez appris", "Ce qui reste à faire", "Vos objectifs"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E9.4 — Faire des démarches administratives
   ════════════════════════════════════════════════════════════════════════════ */

const E9_4_CE_TEXT = `Préfecture — Renouvellement titre de séjour

Préfecture — Renouvellement titre de séjour — rendez-vous obligatoire.
Information clé : dossier complet. Détail : quatre photos.
Condition : justificatif domicile. Délai : trois mois avant expiration.
Contact : frais cent vingt-six euros. Remarque : délai deux mois.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.`;

const E9_4_CE_POOL = buildExpressPool("e9-4-ce", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Préfecture — Renouvellement titre de séjour", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Préfecture — Renouvellement titre de séjour — _________.",
    fill: "Préfecture",
    vfQ: "Sujet : Préfecture — Renouvellement titre de séjour.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Rendez-vous obligatoire", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "rendez-vous obligatoire.",
    fill: "rendez-vous",
    vfQ: "Info : rendez-vous obligatoire.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Dossier complet", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : dossier complet.",
    fill: "dossier",
    vfQ: "Clé : dossier complet.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Quatre photos", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : quatre photos.",
    fill: "quatre",
    vfQ: "Détail : quatre photos.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Justificatif domicile", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : justificatif domicile.",
    fill: "justificatif",
    vfQ: "Condition : justificatif domicile.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Trois mois avant expiration", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : trois mois avant expiration.",
    fill: "trois",
    vfQ: "Délai : trois mois avant expiration.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Frais cent vingt-six euros", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : frais cent vingt-six euros.",
    fill: "frais",
    vfQ: "Contact : frais cent vingt-six euros.",
    vfC: 0,
  }),
]);

const E9_4_CE_2_TEXT = `Mairie — Inscription sur les listes électorales

Mairie — Inscription sur les listes électorales — avant vendredi trente et un mars.
Information clé : carte d'identité. Détail : justificatif domicile.
Condition : formulaire Cerfa. Délai : premier vote.
Contact : bureau de vote attribué. Remarque : carte électorale.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Merci de parler doucement dans les couloirs.
Les sacs volumineux se déposent à l'accueil.
Un vestiaire gratuit est disponible.
Les consignes de sécurité sont affichées en rouge.
Merci de garder ce document avec vous.
Les informations sont valables pour cette semaine.
Si quelque chose n'est pas clair, posez la question.
Pensez à vérifier la date et le lieu.
Une réponse rapide nous aide beaucoup.`;

const E9_4_CE_2_POOL = buildExpressPool("e9-4-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Mairie — Inscription sur les listes électorales", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mairie — Inscription sur les listes électorales — _________.",
    fill: "Mairie",
    vfQ: "Sujet : Mairie — Inscription sur les listes électorales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Avant vendredi trente et un mars", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant vendredi trente et un mars.",
    fill: "avant",
    vfQ: "Info : avant vendredi trente et un mars.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Carte d'identité", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : carte d'identité.",
    fill: "carte",
    vfQ: "Clé : carte d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Justificatif domicile", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : justificatif domicile.",
    fill: "justificatif",
    vfQ: "Détail : justificatif domicile.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Formulaire cerfa", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : formulaire Cerfa.",
    fill: "formulaire",
    vfQ: "Condition : formulaire Cerfa.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Premier vote", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : premier vote.",
    fill: "premier",
    vfQ: "Délai : premier vote.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Bureau de vote attribué", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : bureau de vote attribué.",
    fill: "bureau",
    vfQ: "Contact : bureau de vote attribué.",
    vfC: 0,
  }),
]);

const E9_4_CE_3_TEXT = `CAF — Aide au logement

CAF — Aide au logement — dossier en ligne.
Information clé : revenus deux mille cinq cents euros max. Détail : bail et quittances.
Condition : RIB. Délai : traitement six semaines.
Contact : versement mensuel. Remarque : renouvellement annuel.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const E9_4_CE_3_POOL = buildExpressPool("e9-4-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["CAF — Aide au logement", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "CAF — Aide au logement — _________.",
    fill: "CAF",
    vfQ: "Sujet : CAF — Aide au logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Dossier en ligne", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "dossier en ligne.",
    fill: "dossier",
    vfQ: "Info : dossier en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Revenus deux mille cinq cents euros max", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : revenus deux mille cinq cents euros max.",
    fill: "revenus",
    vfQ: "Clé : revenus deux mille cinq cents euros max.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Bail et quittances", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : bail et quittances.",
    fill: "bail",
    vfQ: "Détail : bail et quittances.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Rib", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : RIB.",
    fill: "RIB",
    vfQ: "Condition : RIB.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Traitement six semaines", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : traitement six semaines.",
    fill: "traitement",
    vfQ: "Délai : traitement six semaines.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Versement mensuel", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : versement mensuel.",
    fill: "versement",
    vfQ: "Contact : versement mensuel.",
    vfC: 0,
  }),
]);

const E9_4_CE_4_TEXT = `Impôts — Déclaration revenus

Impôts — Déclaration revenus — avant trente et un mai.
Information clé : formulaire en ligne. Détail : numéro fiscal.
Condition : pièces justificatives. Délai : avis automatique.
Contact : remboursement possible. Remarque : délai traitement.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.`;

const E9_4_CE_4_POOL = buildExpressPool("e9-4-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Impôts — Déclaration revenus", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Impôts — Déclaration revenus — _________.",
    fill: "Impôts",
    vfQ: "Sujet : Impôts — Déclaration revenus.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Avant trente et un mai", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant trente et un mai.",
    fill: "avant",
    vfQ: "Info : avant trente et un mai.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Formulaire en ligne", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : formulaire en ligne.",
    fill: "formulaire",
    vfQ: "Clé : formulaire en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Numéro fiscal", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : numéro fiscal.",
    fill: "numéro",
    vfQ: "Détail : numéro fiscal.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Pièces justificatives", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : pièces justificatives.",
    fill: "pièces",
    vfQ: "Condition : pièces justificatives.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Avis automatique", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : avis automatique.",
    fill: "avis",
    vfQ: "Délai : avis automatique.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Remboursement possible", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : remboursement possible.",
    fill: "remboursement",
    vfQ: "Contact : remboursement possible.",
    vfC: 0,
  }),
]);

const E9_4_CE_5_TEXT = `Pôle Emploi — Actualisation

Pôle Emploi — Actualisation — tous les mois.
Information clé : Internet ou téléphone. Détail : attestation employeur.
Condition : formation. Délai : indemnisation.
Contact : rendez-vous conseiller. Remarque : offres adaptées.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.`;

const E9_4_CE_5_POOL = buildExpressPool("e9-4-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Pôle Emploi — Actualisation", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pôle Emploi — Actualisation — _________.",
    fill: "Pôle",
    vfQ: "Sujet : Pôle Emploi — Actualisation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Tous les mois", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tous les mois.",
    fill: "tous",
    vfQ: "Info : tous les mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Internet ou téléphone", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : Internet ou téléphone.",
    fill: "Internet",
    vfQ: "Clé : Internet ou téléphone.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Attestation employeur", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : attestation employeur.",
    fill: "attestation",
    vfQ: "Détail : attestation employeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Formation", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : formation.",
    fill: "formation",
    vfQ: "Condition : formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Indemnisation", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : indemnisation.",
    fill: "indemnisation",
    vfQ: "Délai : indemnisation.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Rendez-vous conseiller", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : rendez-vous conseiller.",
    fill: "rendez-vous",
    vfQ: "Contact : rendez-vous conseiller.",
    vfC: 0,
  }),
]);

const E9_4_CE_6_TEXT = `Sécurité sociale — Carte Vitale

Sécurité sociale — Carte Vitale — mise à jour adresse.
Information clé : attestation mutuelle. Détail : médecin traitant.
Condition : déclaration naissance. Délai : remboursement soins.
Contact : espace ameli. Remarque : délai quinze jours.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Il y a une fontaine d'eau près de l'entrée principale.
Les places assises sont limitées le week-end.
Un agent peut vous accompagner jusqu'au bon guichet.`;

const E9_4_CE_6_POOL = buildExpressPool("e9-4-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Sécurité sociale — Carte Vitale", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sécurité sociale — Carte Vitale — _________.",
    fill: "Sécurité",
    vfQ: "Sujet : Sécurité sociale — Carte Vitale.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Mise à jour adresse", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "mise à jour adresse.",
    fill: "mise",
    vfQ: "Info : mise à jour adresse.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Attestation mutuelle", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : attestation mutuelle.",
    fill: "attestation",
    vfQ: "Clé : attestation mutuelle.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Médecin traitant", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : médecin traitant.",
    fill: "médecin",
    vfQ: "Détail : médecin traitant.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Déclaration naissance", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : déclaration naissance.",
    fill: "déclaration",
    vfQ: "Condition : déclaration naissance.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Remboursement soins", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : remboursement soins.",
    fill: "remboursement",
    vfQ: "Délai : remboursement soins.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Espace ameli", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : espace ameli.",
    fill: "espace",
    vfQ: "Contact : espace ameli.",
    vfC: 0,
  }),
]);

const E9_4_CE_7_TEXT = `Consulat — Passeport

Consulat — Passeport — rendez-vous en ligne.
Information clé : deux photos norme. Détail : ancien passeport.
Condition : justificatif identité. Délai : délai six semaines.
Contact : retrait sur place. Remarque : urgence voyage.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const E9_4_CE_7_POOL = buildExpressPool("e9-4-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Consulat — Passeport", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consulat — Passeport — _________.",
    fill: "Consulat",
    vfQ: "Sujet : Consulat — Passeport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Rendez-vous en ligne", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "rendez-vous en ligne.",
    fill: "rendez-vous",
    vfQ: "Info : rendez-vous en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Deux photos norme", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : deux photos norme.",
    fill: "deux",
    vfQ: "Clé : deux photos norme.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Ancien passeport", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : ancien passeport.",
    fill: "ancien",
    vfQ: "Détail : ancien passeport.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Justificatif identité", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : justificatif identité.",
    fill: "justificatif",
    vfQ: "Condition : justificatif identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Délai six semaines", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai six semaines.",
    fill: "délai",
    vfQ: "Délai : délai six semaines.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Retrait sur place", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : retrait sur place.",
    fill: "retrait",
    vfQ: "Contact : retrait sur place.",
    vfC: 0,
  }),
]);

const E9_4_CE_8_TEXT = `Poste — Changement adresse

Poste — Changement adresse — service gratuit.
Information clé : redirection courrier six mois. Détail : formulaire en ligne.
Condition : ancienne et nouvelle adresse. Délai : confirmation e-mail.
Contact : début sous cinq jours. Remarque : tous expéditeurs.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.`;

const E9_4_CE_8_POOL = buildExpressPool("e9-4-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Poste — Changement adresse", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste — Changement adresse — _________.",
    fill: "Poste",
    vfQ: "Sujet : Poste — Changement adresse.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Service gratuit", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "service gratuit.",
    fill: "service",
    vfQ: "Info : service gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Redirection courrier six mois", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : redirection courrier six mois.",
    fill: "redirection",
    vfQ: "Clé : redirection courrier six mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Formulaire en ligne", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : formulaire en ligne.",
    fill: "formulaire",
    vfQ: "Détail : formulaire en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Ancienne et nouvelle adresse", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : ancienne et nouvelle adresse.",
    fill: "ancienne",
    vfQ: "Condition : ancienne et nouvelle adresse.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Confirmation e-mail", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : confirmation e-mail.",
    fill: "confirmation",
    vfQ: "Délai : confirmation e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Début sous cinq jours", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : début sous cinq jours.",
    fill: "début",
    vfQ: "Contact : début sous cinq jours.",
    vfC: 0,
  }),
]);

const E9_4_CE_9_TEXT = `Banque — Ouverture compte

Banque — Ouverture compte — rendez-vous agence.
Information clé : pièce identité. Détail : justificatif domicile.
Condition : contrat travail. Délai : dépôt minimum cent euros.
Contact : carte sous dix jours. Remarque : application mobile.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.`;

const E9_4_CE_9_POOL = buildExpressPool("e9-4-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Banque — Ouverture compte", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Banque — Ouverture compte — _________.",
    fill: "Banque",
    vfQ: "Sujet : Banque — Ouverture compte.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Rendez-vous agence", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "rendez-vous agence.",
    fill: "rendez-vous",
    vfQ: "Info : rendez-vous agence.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Pièce identité", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : pièce identité.",
    fill: "pièce",
    vfQ: "Clé : pièce identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Justificatif domicile", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : justificatif domicile.",
    fill: "justificatif",
    vfQ: "Détail : justificatif domicile.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Contrat travail", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : contrat travail.",
    fill: "contrat",
    vfQ: "Condition : contrat travail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Dépôt minimum cent euros", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : dépôt minimum cent euros.",
    fill: "dépôt",
    vfQ: "Délai : dépôt minimum cent euros.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Carte sous dix jours", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : carte sous dix jours.",
    fill: "carte",
    vfQ: "Contact : carte sous dix jours.",
    vfC: 0,
  }),
]);

const E9_4_CE_10_TEXT = `Assurance maladie — Affiliation

Assurance maladie — Affiliation — formulaire S1106.
Information clé : carte Vitale. Détail : médecin déclaré.
Condition : droits ouverts. Délai : remboursement soins.
Contact : complémentaire. Remarque : délai trois semaines.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Tout le monde est le bienvenu.
À bientôt, et merci de votre lecture.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.`;

const E9_4_CE_10_POOL = buildExpressPool("e9-4-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Assurance maladie — Affiliation", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Assurance maladie — Affiliation — _________.",
    fill: "Assurance",
    vfQ: "Sujet : Assurance maladie — Affiliation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Formulaire s1106", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "formulaire S1106.",
    fill: "formulaire",
    vfQ: "Info : formulaire S1106.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Carte vitale", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : carte Vitale.",
    fill: "carte",
    vfQ: "Clé : carte Vitale.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Médecin déclaré", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : médecin déclaré.",
    fill: "médecin",
    vfQ: "Détail : médecin déclaré.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Droits ouverts", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : droits ouverts.",
    fill: "droits",
    vfQ: "Condition : droits ouverts.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Remboursement soins", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : remboursement soins.",
    fill: "remboursement",
    vfQ: "Délai : remboursement soins.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Complémentaire", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : complémentaire.",
    fill: "complémentaire",
    vfQ: "Contact : complémentaire.",
    vfC: 0,
  }),
]);

const E9_4_CE_11_TEXT = `Permis de conduire — Échange

Permis de conduire — Échange — permis étranger.
Information clé : traduction officielle. Détail : visite médicale.
Condition : photo norme. Délai : délai deux mois.
Contact : retrait préfecture. Remarque : frais quatre-vingt-six euros.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.`;

const E9_4_CE_11_POOL = buildExpressPool("e9-4-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Permis de conduire — Échange", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Permis de conduire — Échange — _________.",
    fill: "Permis",
    vfQ: "Sujet : Permis de conduire — Échange.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Permis étranger", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "permis étranger.",
    fill: "permis",
    vfQ: "Info : permis étranger.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Traduction officielle", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : traduction officielle.",
    fill: "traduction",
    vfQ: "Clé : traduction officielle.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Visite médicale", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : visite médicale.",
    fill: "visite",
    vfQ: "Détail : visite médicale.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Photo norme", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : photo norme.",
    fill: "photo",
    vfQ: "Condition : photo norme.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Délai deux mois", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai deux mois.",
    fill: "délai",
    vfQ: "Délai : délai deux mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Retrait préfecture", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : retrait préfecture.",
    fill: "retrait",
    vfQ: "Contact : retrait préfecture.",
    vfC: 0,
  }),
]);

const E9_4_CE_12_TEXT = `École — Inscription enfant

École — Inscription enfant — rentrée septembre.
Information clé : certificat scolarité. Détail : vaccinations.
Condition : justificatif domicile. Délai : délai mars.
Contact : affectation école. Remarque : fournitures liste.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.`;

const E9_4_CE_12_POOL = buildExpressPool("e9-4-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["École — Inscription enfant", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "École — Inscription enfant — _________.",
    fill: "École",
    vfQ: "Sujet : École — Inscription enfant.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Rentrée septembre", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "rentrée septembre.",
    fill: "rentrée",
    vfQ: "Info : rentrée septembre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Certificat scolarité", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : certificat scolarité.",
    fill: "certificat",
    vfQ: "Clé : certificat scolarité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Vaccinations", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : vaccinations.",
    fill: "vaccinations",
    vfQ: "Détail : vaccinations.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Justificatif domicile", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : justificatif domicile.",
    fill: "justificatif",
    vfQ: "Condition : justificatif domicile.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Délai mars", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai mars.",
    fill: "délai",
    vfQ: "Délai : délai mars.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Affectation école", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : affectation école.",
    fill: "affectation",
    vfQ: "Contact : affectation école.",
    vfC: 0,
  }),
]);

const E9_4_CE_13_TEXT = `Allocation familiale — Demande

Allocation familiale — Demande — dossier CAF.
Information clé : livret de famille. Détail : revenus.
Condition : enfants à charge. Délai : versement trimestriel.
Contact : délai traitement. Remarque : espace en ligne.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.`;

const E9_4_CE_13_POOL = buildExpressPool("e9-4-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Allocation familiale — Demande", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Allocation familiale — Demande — _________.",
    fill: "Allocation",
    vfQ: "Sujet : Allocation familiale — Demande.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Dossier caf", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "dossier CAF.",
    fill: "dossier",
    vfQ: "Info : dossier CAF.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Livret de famille", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : livret de famille.",
    fill: "livret",
    vfQ: "Clé : livret de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Revenus", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : revenus.",
    fill: "revenus",
    vfQ: "Détail : revenus.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Enfants à charge", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : enfants à charge.",
    fill: "enfants",
    vfQ: "Condition : enfants à charge.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Versement trimestriel", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : versement trimestriel.",
    fill: "versement",
    vfQ: "Délai : versement trimestriel.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Délai traitement", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : délai traitement.",
    fill: "délai",
    vfQ: "Contact : délai traitement.",
    vfC: 0,
  }),
]);

const E9_4_CE_14_TEXT = `Carte handicap — Demande MDPH

Carte handicap — Demande MDPH — formulaire Cerfa.
Information clé : certificat médical. Détail : entretien.
Condition : délai quatre mois. Délai : droits associés.
Contact : stationnement. Remarque : aides adaptées.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Les photos peuvent être prises pour le souvenir.
Merci de respecter le calme des autres personnes.
Le personnel peut vous aider en français simple.
Conservez le numéro de contact indiqué.
Tout le monde est le bienvenu.
À bientôt, et merci de votre lecture.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.`;

const E9_4_CE_14_POOL = buildExpressPool("e9-4-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Carte handicap — Demande MDPH", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Carte handicap — Demande MDPH — _________.",
    fill: "Carte",
    vfQ: "Sujet : Carte handicap — Demande MDPH.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Formulaire cerfa", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "formulaire Cerfa.",
    fill: "formulaire",
    vfQ: "Info : formulaire Cerfa.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Certificat médical", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : certificat médical.",
    fill: "certificat",
    vfQ: "Clé : certificat médical.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Entretien", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : entretien.",
    fill: "entretien",
    vfQ: "Détail : entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Délai quatre mois", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : délai quatre mois.",
    fill: "délai",
    vfQ: "Condition : délai quatre mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Droits associés", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : droits associés.",
    fill: "droits",
    vfQ: "Délai : droits associés.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Stationnement", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : stationnement.",
    fill: "stationnement",
    vfQ: "Contact : stationnement.",
    vfC: 0,
  }),
]);

const E9_4_CE_15_TEXT = `Naturalisation — Dossier

Naturalisation — Dossier — cinq ans résidence.
Information clé : test langue B1. Détail : entretien civique.
Condition : casier judiciaire. Délai : délai dix-huit mois.
Contact : cérémonie. Remarque : frais.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.`;

const E9_4_CE_15_POOL = buildExpressPool("e9-4-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Naturalisation — Dossier", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Naturalisation — Dossier — _________.",
    fill: "Naturalisation",
    vfQ: "Sujet : Naturalisation — Dossier.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Cinq ans résidence", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "cinq ans résidence.",
    fill: "cinq",
    vfQ: "Info : cinq ans résidence.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Test langue b1", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : test langue B1.",
    fill: "test",
    vfQ: "Clé : test langue B1.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Entretien civique", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : entretien civique.",
    fill: "entretien",
    vfQ: "Détail : entretien civique.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Casier judiciaire", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : casier judiciaire.",
    fill: "casier",
    vfQ: "Condition : casier judiciaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Délai dix-huit mois", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai dix-huit mois.",
    fill: "délai",
    vfQ: "Délai : délai dix-huit mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Cérémonie", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : cérémonie.",
    fill: "cérémonie",
    vfQ: "Contact : cérémonie.",
    vfC: 0,
  }),
]);

const E9_4_CE_16_TEXT = `Déclaration naissance — Mairie

Déclaration naissance — Mairie — trois jours après accouchement.
Information clé : certificat médical. Détail : pièces parents.
Condition : livret famille. Délai : acte naissance.
Contact : gratuit. Remarque : choix prénom.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Nous comptons sur vous.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.`;

const E9_4_CE_16_POOL = buildExpressPool("e9-4-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Déclaration naissance — Mairie", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Déclaration naissance — Mairie — _________.",
    fill: "Déclaration",
    vfQ: "Sujet : Déclaration naissance — Mairie.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Trois jours après accouchement", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "trois jours après accouchement.",
    fill: "trois",
    vfQ: "Info : trois jours après accouchement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Certificat médical", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : certificat médical.",
    fill: "certificat",
    vfQ: "Clé : certificat médical.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Pièces parents", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : pièces parents.",
    fill: "pièces",
    vfQ: "Détail : pièces parents.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Livret famille", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : livret famille.",
    fill: "livret",
    vfQ: "Condition : livret famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Acte naissance", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : acte naissance.",
    fill: "acte",
    vfQ: "Délai : acte naissance.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Gratuit", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : gratuit.",
    fill: "gratuit",
    vfQ: "Contact : gratuit.",
    vfC: 0,
  }),
]);

const E9_4_CE_17_TEXT = `Changement état civil — Mariage

Changement état civil — Mariage — publication bans.
Information clé : dossier mairie. Détail : témoins.
Condition : cérémonie civile. Délai : délai deux mois.
Contact : acte mariage. Remarque : nom conjoint.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.`;

const E9_4_CE_17_POOL = buildExpressPool("e9-4-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Changement état civil — Mariage", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Changement état civil — Mariage — _________.",
    fill: "Changement",
    vfQ: "Sujet : Changement état civil — Mariage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Publication bans", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "publication bans.",
    fill: "publication",
    vfQ: "Info : publication bans.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Dossier mairie", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : dossier mairie.",
    fill: "dossier",
    vfQ: "Clé : dossier mairie.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Témoins", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : témoins.",
    fill: "témoins",
    vfQ: "Détail : témoins.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Cérémonie civile", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : cérémonie civile.",
    fill: "cérémonie",
    vfQ: "Condition : cérémonie civile.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Délai deux mois", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai deux mois.",
    fill: "délai",
    vfQ: "Délai : délai deux mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Acte mariage", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : acte mariage.",
    fill: "acte",
    vfQ: "Contact : acte mariage.",
    vfC: 0,
  }),
]);

const E9_4_CE_18_TEXT = `Recensement citoyen — JDC

Recensement citoyen — JDC — dix-huit ans.
Information clé : convocation automatique. Détail : journée défense.
Condition : formulaire. Délai : attestation.
Contact : obligatoire. Remarque : report possible.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Le message est aussi envoyé au groupe WhatsApp.
Si vous changez d'avis, dites-le sans attendre.
On peut décaler d'une demi-heure si besoin.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.`;

const E9_4_CE_18_POOL = buildExpressPool("e9-4-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Recensement citoyen — JDC", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Recensement citoyen — JDC — _________.",
    fill: "Recensement",
    vfQ: "Sujet : Recensement citoyen — JDC.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Dix-huit ans", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "dix-huit ans.",
    fill: "dix-huit",
    vfQ: "Info : dix-huit ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Convocation automatique", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : convocation automatique.",
    fill: "convocation",
    vfQ: "Clé : convocation automatique.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Journée défense", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : journée défense.",
    fill: "journée",
    vfQ: "Détail : journée défense.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Formulaire", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : formulaire.",
    fill: "formulaire",
    vfQ: "Condition : formulaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Attestation", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : attestation.",
    fill: "attestation",
    vfQ: "Délai : attestation.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Obligatoire", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : obligatoire.",
    fill: "obligatoire",
    vfQ: "Contact : obligatoire.",
    vfC: 0,
  }),
]);

const E9_4_CE_19_TEXT = `Extrait casier judiciaire — Demande

Extrait casier judiciaire — Demande — bulletin n°3.
Information clé : en ligne. Détail : gratuit.
Condition : délai vingt-quatre heures. Délai : PDF sécurisé.
Contact : employeur. Remarque : volontariat.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.`;

const E9_4_CE_19_POOL = buildExpressPool("e9-4-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Extrait casier judiciaire — Demande", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Extrait casier judiciaire — Demande — _________.",
    fill: "Extrait",
    vfQ: "Sujet : Extrait casier judiciaire — Demande.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Bulletin n°3", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "bulletin n°3.",
    fill: "bulletin",
    vfQ: "Info : bulletin n°3.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["En ligne", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : en ligne.",
    fill: "en",
    vfQ: "Clé : en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Gratuit", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : gratuit.",
    fill: "gratuit",
    vfQ: "Détail : gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Délai vingt-quatre heures", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : délai vingt-quatre heures.",
    fill: "délai",
    vfQ: "Condition : délai vingt-quatre heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Pdf sécurisé", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : PDF sécurisé.",
    fill: "PDF",
    vfQ: "Délai : PDF sécurisé.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Employeur", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : employeur.",
    fill: "employeur",
    vfQ: "Contact : employeur.",
    vfC: 0,
  }),
]);

const E9_4_CE_20_TEXT = `Attestation hébergement — Modèle

Attestation hébergement — Modèle — hébergeant déclare.
Information clé : pièce identité hébergeur. Détail : justificatif domicile.
Condition : signature. Délai : gratuit.
Contact : démarches administratives. Remarque : validité trois mois.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.`;

const E9_4_CE_20_POOL = buildExpressPool("e9-4-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Attestation hébergement — Modèle", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Attestation hébergement — Modèle — _________.",
    fill: "Attestation",
    vfQ: "Sujet : Attestation hébergement — Modèle.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Hébergeant déclare", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "hébergeant déclare.",
    fill: "hébergeant",
    vfQ: "Info : hébergeant déclare.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Pièce identité hébergeur", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : pièce identité hébergeur.",
    fill: "pièce",
    vfQ: "Clé : pièce identité hébergeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Justificatif domicile", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : justificatif domicile.",
    fill: "justificatif",
    vfQ: "Détail : justificatif domicile.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Signature", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : signature.",
    fill: "signature",
    vfQ: "Condition : signature.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Gratuit", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : gratuit.",
    fill: "gratuit",
    vfQ: "Délai : gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Démarches administratives", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : démarches administratives.",
    fill: "démarches",
    vfQ: "Contact : démarches administratives.",
    vfC: 0,
  }),
]);

export const E9_4_CE: CommunicationExercise[] = [
readingPoolExercise({
  id: "e9-4-ce",
  readingText: E9_4_CE_TEXT,
  questionPool: E9_4_CE_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-2",
  readingText: E9_4_CE_2_TEXT,
  questionPool: E9_4_CE_2_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-3",
  readingText: E9_4_CE_3_TEXT,
  questionPool: E9_4_CE_3_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-4",
  readingText: E9_4_CE_4_TEXT,
  questionPool: E9_4_CE_4_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-5",
  readingText: E9_4_CE_5_TEXT,
  questionPool: E9_4_CE_5_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-6",
  readingText: E9_4_CE_6_TEXT,
  questionPool: E9_4_CE_6_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-7",
  readingText: E9_4_CE_7_TEXT,
  questionPool: E9_4_CE_7_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-8",
  readingText: E9_4_CE_8_TEXT,
  questionPool: E9_4_CE_8_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-9",
  readingText: E9_4_CE_9_TEXT,
  questionPool: E9_4_CE_9_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-10",
  readingText: E9_4_CE_10_TEXT,
  questionPool: E9_4_CE_10_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-11",
  readingText: E9_4_CE_11_TEXT,
  questionPool: E9_4_CE_11_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-12",
  readingText: E9_4_CE_12_TEXT,
  questionPool: E9_4_CE_12_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-13",
  readingText: E9_4_CE_13_TEXT,
  questionPool: E9_4_CE_13_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-14",
  readingText: E9_4_CE_14_TEXT,
  questionPool: E9_4_CE_14_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-15",
  readingText: E9_4_CE_15_TEXT,
  questionPool: E9_4_CE_15_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-16",
  readingText: E9_4_CE_16_TEXT,
  questionPool: E9_4_CE_16_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-17",
  readingText: E9_4_CE_17_TEXT,
  questionPool: E9_4_CE_17_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-18",
  readingText: E9_4_CE_18_TEXT,
  questionPool: E9_4_CE_18_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-19",
  readingText: E9_4_CE_19_TEXT,
  questionPool: E9_4_CE_19_POOL,
}),
readingPoolExercise({
  id: "e9-4-ce-20",
  readingText: E9_4_CE_20_TEXT,
  questionPool: E9_4_CE_20_POOL,
}),
];

const E9_4_AGENT = { title: "L'agent du guichet", vous: "l'agent du guichet" };
const E9_4_USAGER = { title: "L'usager", vous: "l'usager / l'usagère" };
const E9_4_EMPLOYE_POSTE = { title: "L'employé de la poste", vous: "l'employé(e) de la poste" };
const E9_4_CONSEILLER = { title: "Le conseiller bancaire", vous: "le conseiller / la conseillère" };
const E9_4_CLIENT = { title: "Le client", vous: "le client / la cliente" };

export const E9_4_PO: ExpressPoDialogue[] = [

  {
    id: "e9-4-po-1",
    title: "Au guichet de la préfecture",
    context: "Votre titre de séjour expire dans quatre mois et vous demandez comment le renouveler.",
    roleA: E9_4_AGENT,
    roleB: E9_4_USAGER,
    lines: [
      { role: "A", text: "Personne suivante ! Bonjour, je vous écoute." },
      { role: "B", text: "Bonjour, je voudrais renouveler mon titre de séjour. Il expire dans quatre mois." },
      { role: "A", text: "Très bien. Vous devez envoyer votre carte actuelle avec le formulaire de demande." },
      { role: "B", text: "Je dois envoyer une lettre recommandée ?" },
      { role: "A", text: "Non, une lettre simple suffit. Ajoutez un justificatif de domicile et trois photos d'identité." },
      { role: "B", text: "Et je dois faire la demande quand ?" },
      { role: "A", text: "Au moins 60 jours avant l'expiration. N'attendez pas trop !" },
      { role: "B", text: "D'accord, j'ai tout noté. Merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-4-po-2",
    title: "Envoyer une lettre recommandée",
    context: "Vous êtes à la poste pour envoyer un document important.",
    roleA: E9_4_EMPLOYE_POSTE,
    roleB: E9_4_CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! C'est à vous." },
      { role: "B", text: "Bonjour, je voudrais envoyer une lettre recommandée. Comment ça fonctionne ?" },
      { role: "A", text: "Vous remplissez ce petit formulaire, et vous recevrez un accusé de réception chez vous." },
      { role: "B", text: "C'est la preuve que le destinataire a reçu ma lettre ?" },
      { role: "A", text: "Exactement. C'est important pour les documents officiels." },
      { role: "B", text: "Et ça coûte combien ?" },
      { role: "A", text: "4,55 € avec l'accusé de réception." },
      { role: "B", text: "Très bien, je vous la donne. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-4-po-3",
    title: "Ouvrir un compte bancaire",
    context: "Vous venez d'arriver en France et vous voulez ouvrir un compte courant.",
    roleA: E9_4_CONSEILLER,
    roleB: E9_4_CLIENT,
    lines: [
      { role: "A", text: "Bonjour, asseyez-vous. Vous voulez ouvrir un compte courant ?" },
      { role: "B", text: "Oui, je viens d'arriver en France pour le travail." },
      { role: "A", text: "Bienvenue ! Il me faut un justificatif de domicile et une pièce d'identité." },
      { role: "B", text: "J'ai apporté une facture de téléphone portable, ça va ?" },
      { role: "A", text: "Non, il faut plutôt une facture d'électricité ou une attestation de logement." },
      { role: "B", text: "D'accord, je reviendrai avec ça. Et pour la carte bancaire ?" },
      { role: "A", text: "Comptez une semaine pour la carte et deux semaines pour le chéquier." },
      { role: "B", text: "Parfait, merci pour ces informations !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-4-po-4",
    title: "Le livret A",
    context: "Votre conseiller vous propose d'ouvrir un livret d'épargne.",
    roleA: E9_4_CONSEILLER,
    roleB: E9_4_CLIENT,
    lines: [
      { role: "A", text: "En plus de votre compte courant, vous pouvez ouvrir un livret A." },
      { role: "B", text: "Qu'est-ce que c'est exactement ?" },
      { role: "A", text: "C'est un compte qui vous permet d'épargner. Vous mettez de côté le montant que vous voulez." },
      { role: "B", text: "Et si j'ai besoin de cet argent rapidement ?" },
      { role: "A", text: "Aucun problème, vous pouvez le retirer à tout moment." },
      { role: "B", text: "Il y a un montant maximum ?" },
      { role: "A", text: "Oui, 23 000 €. Et le virement peut être automatique chaque mois." },
      { role: "B", text: "C'est intéressant ! Je vais commencer avec 50 € par mois." },
      { role: "A", text: "Merci, c'est gentil." },
      { role: "B", text: "De rien. Au revoir !" },
],
  },
  {
    id: "e9-4-po-5",
    title: "Demander une réduction à son opérateur",
    context: "Votre forfait de téléphone est cher et vous êtes client depuis cinq ans.",
    roleA: { title: "Le conseiller téléphonique", vous: "le conseiller / la conseillère" },
    roleB: E9_4_CLIENT,
    lines: [
      { role: "A", text: "Green Mobile bonjour, que puis-je faire pour vous ?" },
      { role: "B", text: "Bonjour, je vous appelle au sujet de mon forfait. Je paie 25 € par mois, c'est cher." },
      { role: "A", text: "Je regarde votre dossier… Vous êtes cliente chez nous depuis cinq ans." },
      { role: "B", text: "Oui, je suis une cliente fidèle ! Vous pouvez me faire une réduction ?" },
      { role: "A", text: "Je peux vous proposer le même forfait à 18 € par mois pendant un an." },
      { role: "B", text: "Et les SMS restent illimités ?" },
      { role: "A", text: "Oui, tout reste identique : les appels, les SMS et Internet." },
      { role: "B", text: "Alors j'accepte. Merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-4-po-6",
    title: "Résilier un abonnement",
    context: "Vous déménagez à l'étranger et vous voulez résilier votre abonnement Internet.",
    roleA: { title: "L'employé du service clients", vous: "l'employé(e) du service clients" },
    roleB: E9_4_CLIENT,
    lines: [
      { role: "A", text: "Service clients, bonjour !" },
      { role: "B", text: "Bonjour, je voudrais résilier mon abonnement Internet. Je déménage à l'étranger." },
      { role: "A", text: "Je comprends. Vous devez nous envoyer une lettre avec un justificatif." },
      { role: "B", text: "Une lettre recommandée ?" },
      { role: "A", text: "Oui, avec accusé de réception, c'est plus sûr. La résiliation prend dix jours." },
      { role: "B", text: "Et je dois rendre la box ?" },
      { role: "A", text: "Oui, en boutique ou par colis. Je vous envoie l'étiquette de retour par e-mail." },
      { role: "B", text: "Parfait. Merci pour votre aide !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-4-po-7",
    title: "Changement d'adresse à la mairie",
    context: "Vous venez de déménager et vous déclarez votre nouvelle adresse.",
    roleA: { title: "L'employée de la mairie", vous: "l'employé(e) de la mairie" },
    roleB: E9_4_USAGER,
    lines: [
      { role: "A", text: "Bonjour ! Qu'est-ce qui vous amène ?" },
      { role: "B", text: "Bonjour, je viens de déménager et je voudrais déclarer mon changement d'adresse." },
      { role: "A", text: "D'accord. Vous avez un justificatif de votre nouveau domicile ?" },
      { role: "B", text: "Oui, j'ai apporté mon contrat de location et une facture d'électricité." },
      { role: "A", text: "Parfait. Vous remplissez ce formulaire avec votre nom et votre nouvelle adresse." },
      { role: "B", text: "Je dois aussi prévenir d'autres services ?" },
      { role: "A", text: "Oui, pensez à la banque, à l'assurance et à votre opérateur." },
      { role: "B", text: "Merci, je vais faire la liste en rentrant !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-4-po-8",
    title: "Un dossier incomplet",
    context: "Vous déposez un dossier au guichet, mais il manque un document.",
    roleA: E9_4_AGENT,
    roleB: E9_4_USAGER,
    lines: [
      { role: "A", text: "Bonjour, vous venez déposer votre dossier ?" },
      { role: "B", text: "Oui, voici tous mes documents pour la demande." },
      { role: "A", text: "Voyons… Il manque le justificatif de domicile de moins de trois mois." },
      { role: "B", text: "Ah bon ? J'ai mis une facture de l'année dernière." },
      { role: "A", text: "Elle est trop ancienne, désolé. Il faut une facture récente." },
      { role: "B", text: "Je peux vous l'envoyer par e-mail cet après-midi ?" },
      { role: "A", text: "Oui, ou vous revenez demain avec le document. Le dossier sera complet." },
      { role: "B", text: "D'accord, je reviens demain matin. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-4-po-9",
    title: "Prendre rendez-vous par téléphone",
    context: "Vous appelez la préfecture pour obtenir un rendez-vous.",
    roleA: { title: "La secrétaire", vous: "le/la secrétaire" },
    roleB: E9_4_USAGER,
    lines: [
      { role: "A", text: "Préfecture de Valmont, bonjour !" },
      { role: "B", text: "Bonjour, je voudrais un rendez-vous pour déposer une demande de titre de séjour." },
      { role: "A", text: "Le prochain rendez-vous disponible est le mardi 12, à 9 h 30." },
      { role: "B", text: "Je travaille le matin… Vous avez quelque chose l'après-midi ?" },
      { role: "A", text: "Oui, le jeudi 14 à 14 h 15, ça vous convient ?" },
      { role: "B", text: "C'est parfait. Quels documents je dois apporter ?" },
      { role: "A", text: "Votre passeport, un justificatif de domicile et vos photos d'identité." },
      { role: "B", text: "Très bien, merci. À jeudi !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-4-po-10",
    title: "La carte bancaire n'est pas arrivée",
    context: "Vous avez ouvert un compte il y a trois semaines, mais vous n'avez pas reçu votre carte.",
    roleA: E9_4_CONSEILLER,
    roleB: E9_4_CLIENT,
    lines: [
      { role: "A", text: "Bonjour, que puis-je faire pour vous ?" },
      { role: "B", text: "Bonjour, j'ai ouvert un compte il y a trois semaines et je n'ai pas reçu ma carte bancaire." },
      { role: "A", text: "Je vérifie… La carte est arrivée à l'agence hier. Vous avez une pièce d'identité ?" },
      { role: "B", text: "Oui, voici mon passeport." },
      { role: "A", text: "Merci. Voici votre carte. Le code secret arrive par courrier séparé." },
      { role: "B", text: "Je peux l'utiliser tout de suite ?" },
      { role: "A", text: "Dès que vous recevrez le code, dans deux ou trois jours." },
      { role: "B", text: "Très bien. Merci beaucoup, au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
{
  id: "e9-4-po-11",
  title: "Demander une information sur une démarche administrative",
  context: "Vous voulez renouveler une carte de séjour.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour renouveler une carte de séjour." },
    { role: "A", text: "Bien sûr. Le formulaire se remplit en ligne." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui, c'est conseillé. Il faut aussi une photo récente." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e9-4-po-12",
  title: "Expliquer un problème avec une démarche administrative",
  context: "Vous expliquez un problème : je n'arrive pas à ouvrir mon compte en ligne.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : je n'arrive pas à ouvrir mon compte en ligne." },
    { role: "A", text: "Je comprends. Le code arrive par SMS." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Nous pouvons le renvoyer maintenant." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
{
  id: "e9-4-po-13",
  title: "Prendre rendez-vous pour une démarche administrative",
  context: "Vous voulez prendre rendez-vous pour un rendez-vous pour déposer un dossier.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais un rendez-vous pour déposer un dossier." },
    { role: "A", text: "Je peux vous proposer lundi à 9 h 30." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "Parfait. Prenez tous les originaux." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
{
  id: "e9-4-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous confirmez ceci : mon rendez-vous à la mairie.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme mon rendez-vous à la mairie." },
    { role: "A", text: "Très bien. C'est bien mercredi à 14 heures ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "Je confirme ma présence." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
{
  id: "e9-4-po-15",
  title: "Demander conseil sur une démarche administrative",
  context: "Vous demandez conseil pour préparer les papiers pour la commune.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour préparer les papiers pour la commune." },
    { role: "A", text: "Faites des copies avant de venir." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "Gardez aussi les originaux." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
{
  id: "e9-4-po-16",
  title: "Signaler un retard",
  context: "Vous signalez un retard : mon rendez-vous administratif.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : mon rendez-vous administratif." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "Mon tram est arrêté." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "Je serai là dans vingt minutes." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e9-4-po-17",
  title: "Faire une réclamation polie",
  context: "Vous faites une réclamation : une erreur sur mon nom dans le courrier.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : une erreur sur mon nom dans le courrier." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "La lettre indique deux dates différentes." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Je demande une correction." },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
{
  id: "e9-4-po-18",
  title: "Demander une aide urgente",
  context: "Vous devez demander une aide urgente : un document pour commencer le travail.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour un document pour commencer le travail." },
    { role: "A", text: "L'attestation peut être imprimée aujourd'hui." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Revenez au guichet 3." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
{
  id: "e9-4-po-19",
  title: "Comparer deux possibilités",
  context: "Vous comparez deux options : faire la démarche en ligne ou au guichet.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare faire la démarche en ligne ou au guichet." },
    { role: "A", text: "En ligne c'est plus rapide." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "Au guichet on vous aide directement." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
{
  id: "e9-4-po-20",
  title: "Remercier pour une aide",
  context: "Vous remerciez pour une aide : votre aide pour le formulaire.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour votre aide pour le formulaire." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "Je comprends mieux les étapes." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "Je vais finir le dossier ce soir." },
    { role: "A", text: "N'hésitez pas à revenir si besoin." },
    { role: "B", text: "Oui, je le ferai." },
    { role: "A", text: "Bonne continuation !" },
    { role: "B", text: "Merci, à vous aussi." },
  ],
}
];

export const E9_4_PE: ExpressPePrompt[] = [

  {
    id: "e9-4-pe-1",
    title: "Lettre à la préfecture",
    situation: "Votre titre de séjour expire dans trois mois et vous envoyez votre demande de renouvellement.",
    instruction: "Écrivez la lettre : présentez-vous, expliquez votre demande et listez les documents joints au dossier.",
    points: ["La formule de politesse", "La demande de renouvellement", "La liste des documents joints"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pe-2",
    title: "E-mail à la banque",
    situation: "Vous venez d'arriver en France et vous voulez ouvrir un compte courant.",
    instruction: "Écrivez un e-mail à la banque : présentez votre situation, demandez un rendez-vous et posez une question sur les documents nécessaires.",
    points: ["Votre situation", "La demande de rendez-vous", "Une question sur les documents"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pe-3",
    title: "Lettre de résiliation",
    situation: "Vous déménagez et vous devez résilier votre abonnement Internet.",
    instruction: "Écrivez la lettre de résiliation : indiquez votre numéro de client, expliquez la raison et demandez une confirmation.",
    points: ["Le numéro de client et l'abonnement", "La raison de la résiliation", "La demande de confirmation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pe-4",
    title: "Les démarches expliquées à un ami",
    situation: "Un ami vient d'arriver en France et ne connaît pas les démarches administratives.",
    instruction: "Écrivez-lui un message : expliquez trois démarches importantes à faire (banque, téléphone, logement…) et par quoi commencer.",
    points: ["Trois démarches à faire", "Les documents utiles", "Par quoi commencer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pe-5",
    title: "Une matinée à la préfecture",
    situation: "Vous êtes allé(e) à la préfecture ce matin pour déposer un dossier.",
    instruction: "Racontez cette matinée au passé composé : l'attente, votre passage au guichet et le résultat de votre démarche.",
    points: ["L'attente au guichet", "Votre demande", "Le résultat"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pe-6",
    title: "Demander une réduction",
    situation: "Vous êtes client fidèle de votre opérateur depuis cinq ans et votre forfait est cher.",
    instruction: "Écrivez un e-mail à l'opérateur : rappelez votre fidélité, comparez avec les offres des concurrents et demandez une réduction.",
    points: ["Votre ancienneté de client", "La comparaison avec d'autres offres", "Votre demande"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pe-7",
    title: "Changement d'adresse",
    situation: "Vous venez de déménager et vous devez prévenir votre assurance.",
    instruction: "Écrivez un message à votre assurance : annoncez votre déménagement, donnez votre nouvelle adresse et posez une question sur votre contrat.",
    points: ["L'annonce du déménagement", "La nouvelle adresse", "Une question sur le contrat"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pe-8",
    title: "Demander une attestation",
    situation: "La banque vous demande une attestation de travail pour ouvrir votre compte.",
    instruction: "Écrivez un e-mail à votre employeur : expliquez pourquoi vous avez besoin de l'attestation et pour quand il vous la faut.",
    points: ["La raison de la demande", "Le document demandé", "La date limite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pe-9",
    title: "La lettre recommandée, mode d'emploi",
    situation: "Votre amie doit envoyer un document officiel, mais elle ne connaît pas la lettre recommandée.",
    instruction: "Écrivez-lui un message : expliquez ce qu'est une lettre recommandée, à quoi sert l'accusé de réception et combien ça coûte.",
    points: ["Ce qu'est une lettre recommandée", "L'accusé de réception", "Le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pe-10",
    title: "Mon compte en banque",
    situation: "Vous avez ouvert votre premier compte bancaire en France le mois dernier.",
    instruction: "Racontez cette expérience : les documents demandés, le rendez-vous avec le conseiller et ce que vous avez reçu ensuite.",
    points: ["Les documents demandés", "Le rendez-vous", "La carte et le chéquier"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e9-4-pe-11",
  title: "Décrire une expérience — démarches administratives",
  situation: "Vous avez vécu une situation importante liée à démarches administratives.",
  instruction: "Racontez cette expérience : le contexte, ce qui s'est passé et le résultat.",
  points: ["Le contexte", "Les événements principaux", "Le résultat"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-4-pe-12",
  title: "Demander des informations — démarches administratives",
  situation: "Vous avez besoin d'informations sur démarches administratives.",
  instruction: "Écrivez un message formel : présentez-vous, posez trois questions précises et remerciez.",
  points: ["Votre présentation", "Trois questions", "Formule de politesse"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-4-pe-13",
  title: "Donner votre avis — démarches administratives",
  situation: "On vous demande votre avis sur démarches administratives.",
  instruction: "Exprimez votre opinion : avantages, inconvénients et recommandation.",
  points: ["Les points positifs", "Les points négatifs", "Votre recommandation"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-4-pe-14",
  title: "Raconter un problème — démarches administratives",
  situation: "Vous avez rencontré un problème avec démarches administratives.",
  instruction: "Décrivez le problème, ce que vous avez fait et ce que vous attendez maintenant.",
  points: ["Le problème", "Vos actions", "Votre attente"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-4-pe-15",
  title: "Proposer une solution — démarches administratives",
  situation: "Un ami a un souci lié à démarches administratives.",
  instruction: "Écrivez-lui un message avec deux conseils pratiques et une offre d'aide.",
  points: ["Deux conseils", "Votre offre d'aide", "Formule amicale"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-4-pe-16",
  title: "Comparer deux options — démarches administratives",
  situation: "Vous hésitez entre deux choix pour démarches administratives.",
  instruction: "Listez les avantages et inconvénients de chaque option et indiquez votre préférence.",
  points: ["Option A", "Option B", "Votre choix"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-4-pe-17",
  title: "Planifier une démarche — démarches administratives",
  situation: "Vous devez organiser une démarche liée à démarches administratives.",
  instruction: "Écrivez un plan avec les étapes, les documents nécessaires et les délais.",
  points: ["Les étapes", "Les documents", "Les délais"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-4-pe-18",
  title: "Remercier — démarches administratives",
  situation: "Quelqu'un vous a aidé(e) pour démarches administratives.",
  instruction: "Écrivez un message de remerciement : rappelez l'aide reçue et proposez de rendre la pareille.",
  points: ["L'aide reçue", "Votre gratitude", "Votre proposition"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-4-pe-19",
  title: "Informer — démarches administratives",
  situation: "Vous devez informer un proche d'une nouvelle sur démarches administratives.",
  instruction: "Écrivez un message clair avec les faits importants et une question pour lui.",
  points: ["Les informations clés", "Les détails pratiques", "Une question"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-4-pe-20",
  title: "Bilan personnel — démarches administratives",
  situation: "Vous faites le bilan de votre expérience avec démarches administratives.",
  instruction: "Rédigez un texte : ce que vous avez appris, ce qui reste à faire et vos objectifs.",
  points: ["Ce que vous avez appris", "Ce qui reste à faire", "Vos objectifs"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E9.5 — S'informer sur l'actualité
   ════════════════════════════════════════════════════════════════════════════ */

const E9_5_CE_TEXT = `La Tribune — Municipales : les candidats débattent

La Tribune — Municipales : les candidats débattent — élection dimanche.
Information clé : cinq candidats. Détail : débat télévisé jeudi.
Condition : thèmes logement et transports. Délai : sondage serré.
Contact : abstention prévue. Remarque : bureaux ouverts huit à dix-huit heures.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.`;

const E9_5_CE_POOL = buildExpressPool("e9-5-ce", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["La Tribune — Municipales : les candidats débattent", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La Tribune — Municipales : les candidats débattent — _________.",
    fill: "La",
    vfQ: "Sujet : La Tribune — Municipales : les candidats débattent.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Élection dimanche", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "élection dimanche.",
    fill: "élection",
    vfQ: "Info : élection dimanche.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Cinq candidats", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : cinq candidats.",
    fill: "cinq",
    vfQ: "Clé : cinq candidats.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Débat télévisé jeudi", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : débat télévisé jeudi.",
    fill: "débat",
    vfQ: "Détail : débat télévisé jeudi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Thèmes logement et transports", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : thèmes logement et transports.",
    fill: "thèmes",
    vfQ: "Condition : thèmes logement et transports.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Sondage serré", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : sondage serré.",
    fill: "sondage",
    vfQ: "Délai : sondage serré.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Abstention prévue", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : abstention prévue.",
    fill: "abstention",
    vfQ: "Contact : abstention prévue.",
    vfC: 0,
  }),
]);

const E9_5_CE_2_TEXT = `Météo-France — Vigilance orange

Météo-France — Vigilance orange — orages violents.
Information clé : vendredi soir. Détail : pluies intenses.
Condition : vents forts. Délai : éviter déplacements.
Contact : inondations possibles. Remarque : mise à jour seize heures.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Un agent peut vous accompagner jusqu'au bon guichet.
Le bâtiment est ouvert dès 8 heures.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.`;

const E9_5_CE_2_POOL = buildExpressPool("e9-5-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Météo-France — Vigilance orange", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Météo-France — Vigilance orange — _________.",
    fill: "Météo-France",
    vfQ: "Sujet : Météo-France — Vigilance orange.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Orages violents", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "orages violents.",
    fill: "orages",
    vfQ: "Info : orages violents.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Vendredi soir", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : vendredi soir.",
    fill: "vendredi",
    vfQ: "Clé : vendredi soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Pluies intenses", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : pluies intenses.",
    fill: "pluies",
    vfQ: "Détail : pluies intenses.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Vents forts", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : vents forts.",
    fill: "vents",
    vfQ: "Condition : vents forts.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Éviter déplacements", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : éviter déplacements.",
    fill: "éviter",
    vfQ: "Délai : éviter déplacements.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Inondations possibles", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : inondations possibles.",
    fill: "inondations",
    vfQ: "Contact : inondations possibles.",
    vfC: 0,
  }),
]);

const E9_5_CE_3_TEXT = `Radio Lac — Festival musique annoncé

Radio Lac — Festival musique annoncé — juillet trois jours.
Information clé : tête d'affiche internationale. Détail : billets en vente lundi.
Condition : camping sur place. Délai : transports renforcés.
Contact : bénévoles recherchés. Remarque : programme complet site.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Un agent peut vous accompagner jusqu'au bon guichet.
Le bâtiment est ouvert dès 8 heures.
Merci de lire attentivement toutes les informations.
En cas de doute, demandez de l'aide à l'accueil.
Les horaires peuvent changer en cas d'urgence.
Gardez votre ticket ou votre confirmation avec vous.
Les enfants doivent rester accompagnés d'un adulte.
Respectez la file d'attente, s'il vous plaît.
Un plan simple est affiché juste à côté.`;

const E9_5_CE_3_POOL = buildExpressPool("e9-5-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Radio Lac — Festival musique annoncé", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Radio Lac — Festival musique annoncé — _________.",
    fill: "Radio",
    vfQ: "Sujet : Radio Lac — Festival musique annoncé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Juillet trois jours", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "juillet trois jours.",
    fill: "juillet",
    vfQ: "Info : juillet trois jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Tête d'affiche internationale", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : tête d'affiche internationale.",
    fill: "tête",
    vfQ: "Clé : tête d'affiche internationale.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Billets en vente lundi", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : billets en vente lundi.",
    fill: "billets",
    vfQ: "Détail : billets en vente lundi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Camping sur place", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : camping sur place.",
    fill: "camping",
    vfQ: "Condition : camping sur place.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Transports renforcés", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : transports renforcés.",
    fill: "transports",
    vfQ: "Délai : transports renforcés.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Bénévoles recherchés", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : bénévoles recherchés.",
    fill: "bénévoles",
    vfQ: "Contact : bénévoles recherchés.",
    vfC: 0,
  }),
]);

const E9_5_CE_4_TEXT = `Le Quotidien — Grève transports

Le Quotidien — Grève transports — mardi toute la journée.
Information clé : bus et tramways. Détail : manifestation matin.
Condition : perturbations majeures. Délai : télétravail conseillé.
Contact : info trafic temps réel. Remarque : reprise mercredi.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.`;

const E9_5_CE_4_POOL = buildExpressPool("e9-5-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Le Quotidien — Grève transports", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le Quotidien — Grève transports — _________.",
    fill: "Le",
    vfQ: "Sujet : Le Quotidien — Grève transports.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Mardi toute la journée", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "mardi toute la journée.",
    fill: "mardi",
    vfQ: "Info : mardi toute la journée.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Bus et tramways", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : bus et tramways.",
    fill: "bus",
    vfQ: "Clé : bus et tramways.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Manifestation matin", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : manifestation matin.",
    fill: "manifestation",
    vfQ: "Détail : manifestation matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Perturbations majeures", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : perturbations majeures.",
    fill: "perturbations",
    vfQ: "Condition : perturbations majeures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Télétravail conseillé", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : télétravail conseillé.",
    fill: "télétravail",
    vfQ: "Délai : télétravail conseillé.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Info trafic temps réel", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : info trafic temps réel.",
    fill: "info",
    vfQ: "Contact : info trafic temps réel.",
    vfC: 0,
  }),
]);

const E9_5_CE_5_TEXT = `TV Locale — Reportage agriculture

TV Locale — Reportage agriculture — producteurs locaux.
Information clé : circuit court. Détail : marché hebdomadaire.
Condition : bio en hausse. Délai : jeunes agriculteurs.
Contact : aides cantonales. Remarque : interview ministre.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.`;

const E9_5_CE_5_POOL = buildExpressPool("e9-5-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["TV Locale — Reportage agriculture", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "TV Locale — Reportage agriculture — _________.",
    fill: "TV",
    vfQ: "Sujet : TV Locale — Reportage agriculture.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Producteurs locaux", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "producteurs locaux.",
    fill: "producteurs",
    vfQ: "Info : producteurs locaux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Circuit court", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : circuit court.",
    fill: "circuit",
    vfQ: "Clé : circuit court.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Marché hebdomadaire", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : marché hebdomadaire.",
    fill: "marché",
    vfQ: "Détail : marché hebdomadaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Bio en hausse", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : bio en hausse.",
    fill: "bio",
    vfQ: "Condition : bio en hausse.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Jeunes agriculteurs", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : jeunes agriculteurs.",
    fill: "jeunes",
    vfQ: "Délai : jeunes agriculteurs.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Aides cantonales", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : aides cantonales.",
    fill: "aides",
    vfQ: "Contact : aides cantonales.",
    vfC: 0,
  }),
]);

const E9_5_CE_6_TEXT = `Blog Citoyen — Projet vélo

Blog Citoyen — Projet vélo — piste cyclable nouvelle.
Information clé : douze kilomètres. Détail : fin travaux automne.
Condition : budget deux millions. Délai : sécurité améliorée.
Contact : pétition soutien. Remarque : réunion publique.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.`;

const E9_5_CE_6_POOL = buildExpressPool("e9-5-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Blog Citoyen — Projet vélo", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Blog Citoyen — Projet vélo — _________.",
    fill: "Blog",
    vfQ: "Sujet : Blog Citoyen — Projet vélo.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Piste cyclable nouvelle", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "piste cyclable nouvelle.",
    fill: "piste",
    vfQ: "Info : piste cyclable nouvelle.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Douze kilomètres", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : douze kilomètres.",
    fill: "douze",
    vfQ: "Clé : douze kilomètres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Fin travaux automne", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : fin travaux automne.",
    fill: "fin",
    vfQ: "Détail : fin travaux automne.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Budget deux millions", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : budget deux millions.",
    fill: "budget",
    vfQ: "Condition : budget deux millions.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Sécurité améliorée", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : sécurité améliorée.",
    fill: "sécurité",
    vfQ: "Délai : sécurité améliorée.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Pétition soutien", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : pétition soutien.",
    fill: "pétition",
    vfQ: "Contact : pétition soutien.",
    vfC: 0,
  }),
]);

const E9_5_CE_7_TEXT = `Agence Presse — Économie locale

Agence Presse — Économie locale — chômage en baisse.
Information clé : taux cinq pour cent. Détail : créations emploi.
Condition : secteur santé. Délai : tourisme record.
Contact : inflation modérée. Remarque : prévisions positives.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.`;

const E9_5_CE_7_POOL = buildExpressPool("e9-5-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Agence Presse — Économie locale", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Agence Presse — Économie locale — _________.",
    fill: "Agence",
    vfQ: "Sujet : Agence Presse — Économie locale.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Chômage en baisse", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chômage en baisse.",
    fill: "chômage",
    vfQ: "Info : chômage en baisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Taux cinq pour cent", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : taux cinq pour cent.",
    fill: "taux",
    vfQ: "Clé : taux cinq pour cent.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Créations emploi", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : créations emploi.",
    fill: "créations",
    vfQ: "Détail : créations emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Secteur santé", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : secteur santé.",
    fill: "secteur",
    vfQ: "Condition : secteur santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Tourisme record", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : tourisme record.",
    fill: "tourisme",
    vfQ: "Délai : tourisme record.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Inflation modérée", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : inflation modérée.",
    fill: "inflation",
    vfQ: "Contact : inflation modérée.",
    vfC: 0,
  }),
]);

const E9_5_CE_8_TEXT = `Journal Régional — Santé publique

Journal Régional — Santé publique — campagne vaccination.
Information clé : grippe saisonnière. Détail : pharmacies participantes.
Condition : gratuit plus de soixante-cinq ans. Délai : rendez-vous en ligne.
Contact : couverture soixante-dix pour cent. Remarque : rappel conseillé.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.`;

const E9_5_CE_8_POOL = buildExpressPool("e9-5-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Journal Régional — Santé publique", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Journal Régional — Santé publique — _________.",
    fill: "Journal",
    vfQ: "Sujet : Journal Régional — Santé publique.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Campagne vaccination", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "campagne vaccination.",
    fill: "campagne",
    vfQ: "Info : campagne vaccination.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Grippe saisonnière", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : grippe saisonnière.",
    fill: "grippe",
    vfQ: "Clé : grippe saisonnière.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Pharmacies participantes", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : pharmacies participantes.",
    fill: "pharmacies",
    vfQ: "Détail : pharmacies participantes.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Gratuit plus de soixante-cinq ans", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : gratuit plus de soixante-cinq ans.",
    fill: "gratuit",
    vfQ: "Condition : gratuit plus de soixante-cinq ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Rendez-vous en ligne", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : rendez-vous en ligne.",
    fill: "rendez-vous",
    vfQ: "Délai : rendez-vous en ligne.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Couverture soixante-dix pour cent", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : couverture soixante-dix pour cent.",
    fill: "couverture",
    vfQ: "Contact : couverture soixante-dix pour cent.",
    vfC: 0,
  }),
]);

const E9_5_CE_9_TEXT = `Podcast Info — Éducation

Podcast Info — Éducation — réforme scolaire.
Information clé : numérique en classe. Détail : formation enseignants.
Condition : budget augmenté. Délai : parents inquiets.
Contact : déploiement trois ans. Remarque : expert interviewé.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Le temps est beau, alors tout devrait bien se passer.
Prenez un pull, au cas où il ferait plus frais.
Le parking le plus proche est gratuit le soir.
Vous pouvez venir en vélo s'il fait beau.
Voici quelques détails utiles pour la suite.`;

const E9_5_CE_9_POOL = buildExpressPool("e9-5-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Podcast Info — Éducation", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Podcast Info — Éducation — _________.",
    fill: "Podcast",
    vfQ: "Sujet : Podcast Info — Éducation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Réforme scolaire", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "réforme scolaire.",
    fill: "réforme",
    vfQ: "Info : réforme scolaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Numérique en classe", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : numérique en classe.",
    fill: "numérique",
    vfQ: "Clé : numérique en classe.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Formation enseignants", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : formation enseignants.",
    fill: "formation",
    vfQ: "Détail : formation enseignants.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Budget augmenté", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : budget augmenté.",
    fill: "budget",
    vfQ: "Condition : budget augmenté.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Parents inquiets", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : parents inquiets.",
    fill: "parents",
    vfQ: "Délai : parents inquiets.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Déploiement trois ans", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : déploiement trois ans.",
    fill: "déploiement",
    vfQ: "Contact : déploiement trois ans.",
    vfC: 0,
  }),
]);

const E9_5_CE_10_TEXT = `Flash Info — Accident route

Flash Info — Accident route — autoroute A9.
Information clé : bouchon cinq kilomètres. Détail : secours sur place.
Condition : deux blessés légers. Délai : circulation alternée.
Contact : éviter secteur. Remarque : mise à jour continue.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.`;

const E9_5_CE_10_POOL = buildExpressPool("e9-5-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Flash Info — Accident route", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flash Info — Accident route — _________.",
    fill: "Flash",
    vfQ: "Sujet : Flash Info — Accident route.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Autoroute a9", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "autoroute A9.",
    fill: "autoroute",
    vfQ: "Info : autoroute A9.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Bouchon cinq kilomètres", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : bouchon cinq kilomètres.",
    fill: "bouchon",
    vfQ: "Clé : bouchon cinq kilomètres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Secours sur place", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : secours sur place.",
    fill: "secours",
    vfQ: "Détail : secours sur place.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Deux blessés légers", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : deux blessés légers.",
    fill: "deux",
    vfQ: "Condition : deux blessés légers.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Circulation alternée", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : circulation alternée.",
    fill: "circulation",
    vfQ: "Délai : circulation alternée.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Éviter secteur", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : éviter secteur.",
    fill: "éviter",
    vfQ: "Contact : éviter secteur.",
    vfC: 0,
  }),
]);

const E9_5_CE_11_TEXT = `Enquête Opinion — Environnement

Enquête Opinion — Environnement — soixante-dix pour cent préoccupés.
Information clé : recyclage insuffisant. Détail : transports publics favorisés.
Condition : énergie renouvelable. Délai : jeunes engagés.
Contact : municipalité responsable. Remarque : résultats complets.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.`;

const E9_5_CE_11_POOL = buildExpressPool("e9-5-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Enquête Opinion — Environnement", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Enquête Opinion — Environnement — _________.",
    fill: "Enquête",
    vfQ: "Sujet : Enquête Opinion — Environnement.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Soixante-dix pour cent préoccupés", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "soixante-dix pour cent préoccupés.",
    fill: "soixante-dix",
    vfQ: "Info : soixante-dix pour cent préoccupés.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Recyclage insuffisant", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : recyclage insuffisant.",
    fill: "recyclage",
    vfQ: "Clé : recyclage insuffisant.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Transports publics favorisés", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : transports publics favorisés.",
    fill: "transports",
    vfQ: "Détail : transports publics favorisés.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Énergie renouvelable", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : énergie renouvelable.",
    fill: "énergie",
    vfQ: "Condition : énergie renouvelable.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Jeunes engagés", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : jeunes engagés.",
    fill: "jeunes",
    vfQ: "Délai : jeunes engagés.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Municipalité responsable", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : municipalité responsable.",
    fill: "municipalité",
    vfQ: "Contact : municipalité responsable.",
    vfC: 0,
  }),
]);

const E9_5_CE_12_TEXT = `Culture Plus — Exposition art

Culture Plus — Exposition art — musée des Beaux-Arts.
Information clé : artistes contemporains. Détail : entrée gratuite dimanche.
Condition : visite guidée quatorze heures. Délai : catalogue vente.
Contact : jusqu'au trente juin. Remarque : réservation conseillée.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.`;

const E9_5_CE_12_POOL = buildExpressPool("e9-5-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Culture Plus — Exposition art", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Culture Plus — Exposition art — _________.",
    fill: "Culture",
    vfQ: "Sujet : Culture Plus — Exposition art.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Musée des beaux-arts", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "musée des Beaux-Arts.",
    fill: "musée",
    vfQ: "Info : musée des Beaux-Arts.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Artistes contemporains", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : artistes contemporains.",
    fill: "artistes",
    vfQ: "Clé : artistes contemporains.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Entrée gratuite dimanche", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : entrée gratuite dimanche.",
    fill: "entrée",
    vfQ: "Détail : entrée gratuite dimanche.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Visite guidée quatorze heures", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : visite guidée quatorze heures.",
    fill: "visite",
    vfQ: "Condition : visite guidée quatorze heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Catalogue vente", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : catalogue vente.",
    fill: "catalogue",
    vfQ: "Délai : catalogue vente.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Jusqu'au trente juin", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : jusqu'au trente juin.",
    fill: "jusqu'au",
    vfQ: "Contact : jusqu'au trente juin.",
    vfC: 0,
  }),
]);

const E9_5_CE_13_TEXT = `Sport Hebdo — Marathon ville

Sport Hebdo — Marathon ville — dix mille participants.
Information clé : parcours urbain. Détail : dimanche huit heures.
Condition : inscriptions complètes. Délai : bénévoles.
Contact : ravitaillement. Remarque : médaille finisher.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.`;

const E9_5_CE_13_POOL = buildExpressPool("e9-5-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Sport Hebdo — Marathon ville", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sport Hebdo — Marathon ville — _________.",
    fill: "Sport",
    vfQ: "Sujet : Sport Hebdo — Marathon ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Dix mille participants", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "dix mille participants.",
    fill: "dix",
    vfQ: "Info : dix mille participants.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Parcours urbain", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : parcours urbain.",
    fill: "parcours",
    vfQ: "Clé : parcours urbain.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Dimanche huit heures", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : dimanche huit heures.",
    fill: "dimanche",
    vfQ: "Détail : dimanche huit heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Inscriptions complètes", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : inscriptions complètes.",
    fill: "inscriptions",
    vfQ: "Condition : inscriptions complètes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Bénévoles", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : bénévoles.",
    fill: "bénévoles",
    vfQ: "Délai : bénévoles.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Ravitaillement", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : ravitaillement.",
    fill: "ravitaillement",
    vfQ: "Contact : ravitaillement.",
    vfC: 0,
  }),
]);

const E9_5_CE_14_TEXT = `Tech News — Fibre optique

Tech News — Fibre optique — déploiement accéléré.
Information clé : quatre-vingts pour cent foyers. Détail : débit gigabit.
Condition : opérateurs. Délai : fin deux mille vingt-six.
Contact : inscription en ligne. Remarque : installation gratuite.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const E9_5_CE_14_POOL = buildExpressPool("e9-5-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Tech News — Fibre optique", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tech News — Fibre optique — _________.",
    fill: "Tech",
    vfQ: "Sujet : Tech News — Fibre optique.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Déploiement accéléré", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "déploiement accéléré.",
    fill: "déploiement",
    vfQ: "Info : déploiement accéléré.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Quatre-vingts pour cent foyers", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : quatre-vingts pour cent foyers.",
    fill: "quatre-vingts",
    vfQ: "Clé : quatre-vingts pour cent foyers.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Débit gigabit", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : débit gigabit.",
    fill: "débit",
    vfQ: "Détail : débit gigabit.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Opérateurs", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : opérateurs.",
    fill: "opérateurs",
    vfQ: "Condition : opérateurs.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Fin deux mille vingt-six", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : fin deux mille vingt-six.",
    fill: "fin",
    vfQ: "Délai : fin deux mille vingt-six.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Inscription en ligne", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : inscription en ligne.",
    fill: "inscription",
    vfQ: "Contact : inscription en ligne.",
    vfC: 0,
  }),
]);

const E9_5_CE_15_TEXT = `Société — Logement étudiant

Société — Logement étudiant — pénurie chambres.
Information clé : prix en hausse. Détail : résidences saturées.
Condition : colocations. Délai : aides étudiants.
Contact : construction prévue. Remarque : témoignages.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Le temps est beau, alors tout devrait bien se passer.`;

const E9_5_CE_15_POOL = buildExpressPool("e9-5-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Société — Logement étudiant", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Société — Logement étudiant — _________.",
    fill: "Société",
    vfQ: "Sujet : Société — Logement étudiant.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Pénurie chambres", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "pénurie chambres.",
    fill: "pénurie",
    vfQ: "Info : pénurie chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Prix en hausse", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : prix en hausse.",
    fill: "prix",
    vfQ: "Clé : prix en hausse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Résidences saturées", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : résidences saturées.",
    fill: "résidences",
    vfQ: "Détail : résidences saturées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Colocations", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : colocations.",
    fill: "colocations",
    vfQ: "Condition : colocations.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Aides étudiants", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : aides étudiants.",
    fill: "aides",
    vfQ: "Délai : aides étudiants.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Construction prévue", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : construction prévue.",
    fill: "construction",
    vfQ: "Contact : construction prévue.",
    vfC: 0,
  }),
]);

const E9_5_CE_16_TEXT = `International — Sommet climat

International — Sommet climat — accord partiel.
Information clé : réduction émissions. Détail : finances vertes.
Condition : manifestations. Délai : prochaine étape.
Contact : réactions locales. Remarque : analyse expert.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Nous comptons sur vous.
Après cela, vous recevrez un petit rappel.
Gardez une copie papier si possible.
Le cachet de la date est important.
Sans confirmation, la place n'est pas garantie.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.`;

const E9_5_CE_16_POOL = buildExpressPool("e9-5-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["International — Sommet climat", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "International — Sommet climat — _________.",
    fill: "International",
    vfQ: "Sujet : International — Sommet climat.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Accord partiel", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "accord partiel.",
    fill: "accord",
    vfQ: "Info : accord partiel.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Réduction émissions", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : réduction émissions.",
    fill: "réduction",
    vfQ: "Clé : réduction émissions.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Finances vertes", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : finances vertes.",
    fill: "finances",
    vfQ: "Détail : finances vertes.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Manifestations", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : manifestations.",
    fill: "manifestations",
    vfQ: "Condition : manifestations.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Prochaine étape", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : prochaine étape.",
    fill: "prochaine",
    vfQ: "Délai : prochaine étape.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Réactions locales", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : réactions locales.",
    fill: "réactions",
    vfQ: "Contact : réactions locales.",
    vfC: 0,
  }),
]);

const E9_5_CE_17_TEXT = `Faits Divers — Vol vélo

Faits Divers — Vol vélo — campus universitaire.
Information clé : caméras surveillance. Détail : témoignages.
Condition : plainte déposée. Délai : conseils sécurité.
Contact : marquage antivol. Remarque : statistiques hausse.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.`;

const E9_5_CE_17_POOL = buildExpressPool("e9-5-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Faits Divers — Vol vélo", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Faits Divers — Vol vélo — _________.",
    fill: "Faits",
    vfQ: "Sujet : Faits Divers — Vol vélo.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Campus universitaire", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "campus universitaire.",
    fill: "campus",
    vfQ: "Info : campus universitaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Caméras surveillance", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : caméras surveillance.",
    fill: "caméras",
    vfQ: "Clé : caméras surveillance.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Témoignages", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : témoignages.",
    fill: "témoignages",
    vfQ: "Détail : témoignages.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Plainte déposée", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : plainte déposée.",
    fill: "plainte",
    vfQ: "Condition : plainte déposée.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Conseils sécurité", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : conseils sécurité.",
    fill: "conseils",
    vfQ: "Délai : conseils sécurité.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Marquage antivol", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : marquage antivol.",
    fill: "marquage",
    vfQ: "Contact : marquage antivol.",
    vfC: 0,
  }),
]);

const E9_5_CE_18_TEXT = `Économie — Ouverture magasin

Économie — Ouverture magasin — centre commercial.
Information clé : cent cinquante emplois. Détail : samedi inauguration.
Condition : promotions. Délai : parkings gratuits.
Contact : horaires étendus. Remarque : concours.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Bonne visite et merci de votre attention.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.`;

const E9_5_CE_18_POOL = buildExpressPool("e9-5-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Économie — Ouverture magasin", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Économie — Ouverture magasin — _________.",
    fill: "Économie",
    vfQ: "Sujet : Économie — Ouverture magasin.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Centre commercial", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "centre commercial.",
    fill: "centre",
    vfQ: "Info : centre commercial.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Cent cinquante emplois", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : cent cinquante emplois.",
    fill: "cent",
    vfQ: "Clé : cent cinquante emplois.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Samedi inauguration", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : samedi inauguration.",
    fill: "samedi",
    vfQ: "Détail : samedi inauguration.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Promotions", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : promotions.",
    fill: "promotions",
    vfQ: "Condition : promotions.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Parkings gratuits", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : parkings gratuits.",
    fill: "parkings",
    vfQ: "Délai : parkings gratuits.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Horaires étendus", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : horaires étendus.",
    fill: "horaires",
    vfQ: "Contact : horaires étendus.",
    vfC: 0,
  }),
]);

const E9_5_CE_19_TEXT = `Santé — Canicule prévue

Santé — Canicule prévue — températures trente-cinq degrés.
Information clé : recommandations préfecture. Détail : hydratation.
Condition : personnes fragiles. Délai : îlots fraîcheur.
Contact : écoles adaptées. Remarque : vigilance.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.`;

const E9_5_CE_19_POOL = buildExpressPool("e9-5-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Santé — Canicule prévue", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Santé — Canicule prévue — _________.",
    fill: "Santé",
    vfQ: "Sujet : Santé — Canicule prévue.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Températures trente-cinq degrés", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "températures trente-cinq degrés.",
    fill: "températures",
    vfQ: "Info : températures trente-cinq degrés.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Recommandations préfecture", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : recommandations préfecture.",
    fill: "recommandations",
    vfQ: "Clé : recommandations préfecture.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Hydratation", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : hydratation.",
    fill: "hydratation",
    vfQ: "Détail : hydratation.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Personnes fragiles", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : personnes fragiles.",
    fill: "personnes",
    vfQ: "Condition : personnes fragiles.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Îlots fraîcheur", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : îlots fraîcheur.",
    fill: "îlots",
    vfQ: "Délai : îlots fraîcheur.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Écoles adaptées", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : écoles adaptées.",
    fill: "écoles",
    vfQ: "Contact : écoles adaptées.",
    vfC: 0,
  }),
]);

const E9_5_CE_20_TEXT = `Médias — Nouveau journal local

Médias — Nouveau journal local — lancement septembre.
Information clé : gratuit. Détail : actualité quartier.
Condition : petites annonces. Délai : journalistes indépendants.
Contact : distribution boîtes. Remarque : version en ligne.
Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.
Le règlement est simple et affiché à l'entrée.
Un goûter ou une boisson est parfois offert.
Les photos peuvent être prises pour le souvenir.
Merci de respecter le calme des autres personnes.
Le personnel peut vous aider en français simple.
Conservez le numéro de contact indiqué.
Tout le monde est le bienvenu.
À bientôt, et merci de votre lecture.
Voici quelques détails utiles pour la suite.`;

const E9_5_CE_20_POOL = buildExpressPool("e9-5-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Quel est le sujet ?",
    text: ["Médias — Nouveau journal local", "Un sport", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Médias — Nouveau journal local — _________.",
    fill: "Médias",
    vfQ: "Sujet : Médias — Nouveau journal local.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Première information ?",
    text: ["Lancement septembre", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "lancement septembre.",
    fill: "lancement",
    vfQ: "Info : lancement septembre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Information clé ?",
    text: ["Gratuit", "Aucune", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information clé : gratuit.",
    fill: "gratuit",
    vfQ: "Clé : gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel détail ?",
    text: ["Actualité quartier", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : actualité quartier.",
    fill: "actualité",
    vfQ: "Détail : actualité quartier.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle condition ?",
    text: ["Petites annonces", "Aucune", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : petites annonces.",
    fill: "petites",
    vfQ: "Condition : petites annonces.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel délai ?",
    text: ["Journalistes indépendants", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : journalistes indépendants.",
    fill: "journalistes",
    vfQ: "Délai : journalistes indépendants.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel contact ?",
    text: ["Distribution boîtes", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : distribution boîtes.",
    fill: "distribution",
    vfQ: "Contact : distribution boîtes.",
    vfC: 0,
  }),
]);

export const E9_5_CE: CommunicationExercise[] = [
readingPoolExercise({
  id: "e9-5-ce",
  readingText: E9_5_CE_TEXT,
  questionPool: E9_5_CE_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-2",
  readingText: E9_5_CE_2_TEXT,
  questionPool: E9_5_CE_2_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-3",
  readingText: E9_5_CE_3_TEXT,
  questionPool: E9_5_CE_3_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-4",
  readingText: E9_5_CE_4_TEXT,
  questionPool: E9_5_CE_4_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-5",
  readingText: E9_5_CE_5_TEXT,
  questionPool: E9_5_CE_5_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-6",
  readingText: E9_5_CE_6_TEXT,
  questionPool: E9_5_CE_6_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-7",
  readingText: E9_5_CE_7_TEXT,
  questionPool: E9_5_CE_7_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-8",
  readingText: E9_5_CE_8_TEXT,
  questionPool: E9_5_CE_8_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-9",
  readingText: E9_5_CE_9_TEXT,
  questionPool: E9_5_CE_9_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-10",
  readingText: E9_5_CE_10_TEXT,
  questionPool: E9_5_CE_10_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-11",
  readingText: E9_5_CE_11_TEXT,
  questionPool: E9_5_CE_11_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-12",
  readingText: E9_5_CE_12_TEXT,
  questionPool: E9_5_CE_12_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-13",
  readingText: E9_5_CE_13_TEXT,
  questionPool: E9_5_CE_13_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-14",
  readingText: E9_5_CE_14_TEXT,
  questionPool: E9_5_CE_14_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-15",
  readingText: E9_5_CE_15_TEXT,
  questionPool: E9_5_CE_15_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-16",
  readingText: E9_5_CE_16_TEXT,
  questionPool: E9_5_CE_16_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-17",
  readingText: E9_5_CE_17_TEXT,
  questionPool: E9_5_CE_17_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-18",
  readingText: E9_5_CE_18_TEXT,
  questionPool: E9_5_CE_18_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-19",
  readingText: E9_5_CE_19_TEXT,
  questionPool: E9_5_CE_19_POOL,
}),
readingPoolExercise({
  id: "e9-5-ce-20",
  readingText: E9_5_CE_20_TEXT,
  questionPool: E9_5_CE_20_POOL,
}),
];

const E9_5_AMI = { title: "L'ami", vous: "l'ami(e)" };
const E9_5_COLLEGUE = { title: "Le collègue", vous: "le/la collègue" };
const E9_5_VENDEUR = { title: "Le vendeur de journaux", vous: "le vendeur / la vendeuse" };
const E9_5_CLIENT = { title: "Le client", vous: "le client / la cliente" };
const E9_5_CONSEILLER = { title: "Le conseiller abonnements", vous: "le conseiller / la conseillère" };

export const E9_5_PO: ExpressPoDialogue[] = [

  {
    id: "e9-5-po-1",
    title: "Au kiosque à journaux",
    context: "Vous partez à la plage et vous achetez des magazines à lire.",
    roleA: E9_5_VENDEUR,
    roleB: E9_5_CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Qu'est-ce que je vous sers aujourd'hui ?" },
      { role: "B", text: "Bonjour, je pars à la plage, je voudrais des magazines à lire." },
      { role: "A", text: "J'ai un magazine d'actualité économique, un magazine de mode et un magazine culturel." },
      { role: "B", text: "Je prends les trois ! Et vous avez un journal avec du sport ?" },
      { role: "A", text: "Oui, le journal sportif vient d'arriver ce matin." },
      { role: "B", text: "Parfait, ajoutez-le. Ça fait combien ?" },
      { role: "A", text: "Douze euros cinquante en tout." },
      { role: "B", text: "Voilà. Merci et bonne journée !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-5-po-2",
    title: "Tu as vu les infos ?",
    context: "Vous discutez des informations d'hier soir avec une amie.",
    roleA: E9_5_AMI,
    roleB: E9_5_AMI,
    lines: [
      { role: "A", text: "Tu as regardé les infos hier soir ? Ils ont parlé de la crise économique." },
      { role: "B", text: "Non, je suis rentrée tard du bureau. Je lis plutôt la presse en ligne." },
      { role: "A", text: "Tu es abonnée à un journal ?" },
      { role: "B", text: "Je reçois une newsletter tous les matins. Et toi ?" },
      { role: "A", text: "Moi, je préfère le journal télévisé, à 19 h 45." },
      { role: "B", text: "Tu écoutes la radio aussi ?" },
      { role: "A", text: "Oui, ce matin j'ai écouté l'interview du ministre à 8 h." },
      { role: "B", text: "Tu es un vrai journaliste ! Tu me raconteras tout ça ce midi." },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e9-5-po-3",
    title: "S'abonner à une offre numérique",
    context: "Vous appelez un journal pour profiter d'une offre d'abonnement 100 % numérique.",
    roleA: E9_5_CONSEILLER,
    roleB: E9_5_CLIENT,
    lines: [
      { role: "A", text: "Bonjour, vous appelez pour notre offre d'abonnement ?" },
      { role: "B", text: "Oui, j'ai vu la publicité : 1 € par mois, c'est bien ça ?" },
      { role: "A", text: "Exactement, au lieu de 8,35 €, jusqu'au 10 octobre. C'est 100 % numérique." },
      { role: "B", text: "Qu'est-ce qui est compris dans l'offre ?" },
      { role: "A", text: "L'accès illimité au site et à l'appli, la chaîne en replay et des podcasts." },
      { role: "B", text: "Et je peux arrêter quand je veux ?" },
      { role: "A", text: "Oui, la résiliation est possible à tout moment, en deux clics." },
      { role: "B", text: "Très bien, je m'abonne. On fait comment ?" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-5-po-4",
    title: "Recommander un podcast",
    context: "Un collègue vous demande ce que vous écoutez dans les transports.",
    roleA: E9_5_COLLEGUE,
    roleB: E9_5_COLLEGUE,
    lines: [
      { role: "A", text: "Qu'est-ce que tu écoutes dans le tram le matin ?" },
      { role: "B", text: "Un podcast d'actualité, quinze minutes chaque jour. C'est parfait pour mon trajet." },
      { role: "A", text: "Ah bon ? Moi je n'ai jamais essayé les podcasts." },
      { role: "B", text: "Tu devrais ! Les journalistes expliquent une grande info du jour, très clairement." },
      { role: "A", text: "C'est gratuit ?" },
      { role: "B", text: "Oui, tu télécharges l'appli et tu choisis tes émissions." },
      { role: "A", text: "Et pour améliorer mon français, tu as une idée ?" },
      { role: "B", text: "Oui, il y a un podcast en français facile, je t'envoie le lien !" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e9-5-po-5",
    title: "La radio du matin",
    context: "Vous discutez de vos habitudes du matin avec un ami.",
    roleA: E9_5_AMI,
    roleB: E9_5_AMI,
    lines: [
      { role: "A", text: "Tu écoutes quoi le matin pendant le petit déjeuner ?" },
      { role: "B", text: "La radio, le journal de 8 h. Et toi ?" },
      { role: "A", text: "Moi, je regarde les titres sur mon téléphone, c'est plus rapide." },
      { role: "B", text: "Oui, mais à la radio, il y a des interviews intéressantes." },
      { role: "A", text: "C'est vrai. Ce matin, ils ont parlé de quoi ?" },
      { role: "B", text: "Du nouveau projet du gouvernement et de la neige sur les routes." },
      { role: "A", text: "Ah, c'est pour ça que le bus est arrivé en retard !" },
      { role: "B", text: "Exactement ! Écoute la radio, tu seras informé avant tout le monde." },
      { role: "A", text: "Merci, c'est noté." },
      { role: "B", text: "Parfait. À bientôt alors !" },
],
  },
  {
    id: "e9-5-po-6",
    title: "Un fait divers dans le quartier",
    context: "Le journal parle d'un accident arrivé dans votre quartier.",
    roleA: { title: "Le voisin", vous: "le voisin / la voisine" },
    roleB: { title: "La voisine", vous: "le voisin / la voisine" },
    lines: [
      { role: "A", text: "Vous avez lu le journal ce matin ? Ils parlent de notre quartier !" },
      { role: "B", text: "Non, qu'est-ce qui s'est passé ?" },
      { role: "A", text: "Un accident au carrefour de la poste, hier soir. Heureusement, personne n'est blessé." },
      { role: "B", text: "C'est le troisième accident cette année à ce carrefour…" },
      { role: "A", text: "Oui, et l'article dit que la mairie va installer un feu rouge." },
      { role: "B", text: "Enfin une bonne nouvelle ! C'était dans quel journal ?" },
      { role: "A", text: "Dans la presse régionale, il y a même une photo du carrefour." },
      { role: "B", text: "Je vais l'acheter, je veux lire l'article. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-5-po-7",
    title: "Passer au numérique",
    context: "Vous voulez arrêter votre abonnement au journal papier.",
    roleA: E9_5_CONSEILLER,
    roleB: E9_5_CLIENT,
    lines: [
      { role: "A", text: "Service abonnements, bonjour !" },
      { role: "B", text: "Bonjour, je voudrais arrêter mon abonnement au journal papier." },
      { role: "A", text: "Puis-je vous demander pourquoi ?" },
      { role: "B", text: "Je lis tout sur l'appli maintenant. Le papier, c'est fini pour moi." },
      { role: "A", text: "Je comprends. Je peux vous proposer l'offre 100 % numérique à moitié prix." },
      { role: "B", text: "C'est intéressant ! Les podcasts sont compris ?" },
      { role: "A", text: "Oui, et vous gardez l'accès illimité aux articles du site." },
      { role: "B", text: "Alors d'accord, passez-moi au numérique. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e9-5-po-8",
    title: "Télé ou presse en ligne ?",
    context: "Vous comparez le journal télévisé et la presse en ligne avec un ami.",
    roleA: E9_5_AMI,
    roleB: E9_5_AMI,
    lines: [
      { role: "A", text: "Franchement, je ne comprends pas : tu ne regardes jamais le JT ?" },
      { role: "B", text: "Non, presque jamais. Hier, je suis sortie du travail à 21 h, c'était trop tard." },
      { role: "A", text: "Justement, le JT, c'est un bon résumé de la journée." },
      { role: "B", text: "La presse en ligne aussi ! Et je lis quand je veux, où je veux." },
      { role: "A", text: "Mais à la télé, il y a les images, les reportages…" },
      { role: "B", text: "Sur les sites aussi, il y a des vidéos. Et moins de publicité !" },
      { role: "A", text: "Bon, un point pour toi. Tu me montres ton appli ?" },
      { role: "B", text: "Bien sûr, regarde : on choisit ses rubriques, sport, culture, économie." },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e9-5-po-9",
    title: "Les titres du jour",
    context: "Vous n'avez pas eu le temps d'écouter les informations ce matin.",
    roleA: E9_5_COLLEGUE,
    roleB: E9_5_COLLEGUE,
    lines: [
      { role: "A", text: "Tu as écouté les titres ce matin ? Moi, je n'ai pas eu le temps." },
      { role: "B", text: "Oui, à 8 h à la radio. Il y a eu un accident sur l'autoroute A7." },
      { role: "A", text: "C'est grave ?" },
      { role: "B", text: "Trente blessés, mais rien de très grave d'après les journalistes." },
      { role: "A", text: "Et quoi d'autre ?" },
      { role: "B", text: "Le gouvernement a présenté un nouveau projet social contre la crise." },
      { role: "A", text: "Et le sport ? Le match d'hier ?" },
      { role: "B", text: "Deux à un ! Je te raconte tout à la pause." },
      { role: "A", text: "Merci pour votre aide." },
      { role: "B", text: "Je vous en prie. Bonne journée !" },
],
  },
  {
    id: "e9-5-po-10",
    title: "Interview pour le journal du quartier",
    context: "Un journaliste du journal du quartier vous pose des questions sur vos habitudes.",
    roleA: { title: "Le journaliste", vous: "le/la journaliste" },
    roleB: { title: "L'habitante", vous: "l'habitant(e)" },
    lines: [
      { role: "A", text: "Bonjour madame, je suis journaliste pour le journal du quartier. Vous avez deux minutes ?" },
      { role: "B", text: "Bonjour ! Oui, bien sûr. C'est à quel sujet ?" },
      { role: "A", text: "Nous préparons un article : comment les habitants s'informent-ils ?" },
      { role: "B", text: "Moi, je lis la presse régionale le matin et j'écoute la radio dans la voiture." },
      { role: "A", text: "Vous utilisez aussi Internet ?" },
      { role: "B", text: "Oui, je reçois deux newsletters et je regarde des vidéos d'actualité le soir." },
      { role: "A", text: "Parfait ! Et le journal papier, vous l'achetez encore ?" },
      { role: "B", text: "Seulement le samedi, pour le programme télé et les petites annonces !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
{
  id: "e9-5-po-11",
  title: "Demander une information sur la ville",
  context: "Vous voulez trouver la bibliothèque municipale.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour trouver la bibliothèque municipale." },
    { role: "A", text: "Bien sûr. Elle est derrière la poste." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui, c'est conseillé. Elle ferme à 19 heures." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e9-5-po-12",
  title: "Expliquer un problème avec la ville",
  context: "Vous expliquez un problème : le lampadaire devant chez moi ne fonctionne plus.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : le lampadaire devant chez moi ne fonctionne plus." },
    { role: "A", text: "Je comprends. Nous allons signaler la panne." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Un technicien passe cette semaine." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
{
  id: "e9-5-po-13",
  title: "Prendre rendez-vous pour la ville",
  context: "Vous voulez prendre rendez-vous pour rencontrer le service logement de la ville.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais rencontrer le service logement de la ville." },
    { role: "A", text: "Je peux vous proposer mardi à 15 heures." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "Parfait. J'apporte mon dossier." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
{
  id: "e9-5-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous confirmez ceci : la visite guidée du centre.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme la visite guidée du centre." },
    { role: "A", text: "Très bien. C'est bien samedi à 10 heures ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "Je viens avec mon voisin." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
{
  id: "e9-5-po-15",
  title: "Demander conseil sur la ville",
  context: "Vous demandez conseil pour choisir un quartier calme.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour choisir un quartier calme." },
    { role: "A", text: "Près du parc c'est agréable." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "Près de la gare c'est plus bruyant." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
{
  id: "e9-5-po-16",
  title: "Signaler un retard",
  context: "Vous signalez un retard : j'arrive en retard à la visite.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : j'arrive en retard à la visite." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "Je me suis trompé de bus." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "Je rejoins le groupe à la mairie." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e9-5-po-17",
  title: "Faire une réclamation polie",
  context: "Vous faites une réclamation : les poubelles de ma rue débordent.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : les poubelles de ma rue débordent." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "L'odeur est forte." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Pouvez-vous demander un passage ?" },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
{
  id: "e9-5-po-18",
  title: "Demander une aide urgente",
  context: "Vous devez demander une aide urgente : trouver une pharmacie ouverte ce soir.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour trouver une pharmacie ouverte ce soir." },
    { role: "A", text: "Celle de la gare est de garde." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Elle ferme à 22 heures." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
{
  id: "e9-5-po-19",
  title: "Comparer deux possibilités",
  context: "Vous comparez deux options : prendre le bus ou marcher jusqu'au marché.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare prendre le bus ou marcher jusqu'au marché." },
    { role: "A", text: "À pied c'est quinze minutes." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "Le bus est utile avec des sacs." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
{
  id: "e9-5-po-20",
  title: "Remercier pour une aide",
  context: "Vous remerciez pour une aide : vos informations sur la ville.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour vos informations sur la ville." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "J'ai trouvé la piscine facilement." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "Vos explications étaient très claires." },
    { role: "A", text: "N'hésitez pas à revenir si besoin." },
    { role: "B", text: "Oui, je le ferai." },
    { role: "A", text: "Bonne continuation !" },
    { role: "B", text: "Merci, à vous aussi." },
  ],
}
];

export const E9_5_PE: ExpressPePrompt[] = [

  {
    id: "e9-5-pe-1",
    title: "Vos habitudes d'information",
    situation: "Un magazine prépare un article sur la façon dont les gens s'informent.",
    instruction: "Décrivez vos habitudes : les médias que vous utilisez, à quel moment de la journée et pourquoi vous les préférez.",
    points: ["Les médias utilisés", "Les moments de la journée", "Vos raisons"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pe-2",
    title: "Recommander un média",
    situation: "Un ami apprend le français et cherche un média simple pour s'informer.",
    instruction: "Écrivez-lui un message : recommandez un média (radio, podcast, site), expliquez pourquoi il est adapté et comment y accéder.",
    points: ["Le média recommandé", "Pourquoi il est adapté", "Comment y accéder"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pe-3",
    title: "Résumer une info",
    situation: "Votre amie n'a pas suivi les informations cette semaine.",
    instruction: "Écrivez-lui un e-mail : racontez une information importante de la semaine, où vous l'avez apprise et ce que vous en pensez.",
    points: ["L'information racontée", "Votre source", "Votre opinion"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pe-4",
    title: "Papier ou numérique ?",
    situation: "Votre grand-père lit le journal papier et ne comprend pas pourquoi vous lisez sur votre téléphone.",
    instruction: "Écrivez-lui un message : comparez le journal papier et la presse numérique, puis expliquez votre préférence.",
    points: ["Les avantages du papier", "Les avantages du numérique", "Votre préférence"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pe-5",
    title: "Courrier des lecteurs",
    situation: "Vous avez lu un article intéressant sur les transports de votre ville.",
    instruction: "Écrivez au courrier des lecteurs : rappelez le sujet de l'article, donnez votre avis et proposez une idée.",
    points: ["Le sujet de l'article", "Votre avis", "Votre proposition"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pe-6",
    title: "Raconter un fait divers",
    situation: "Il s'est passé quelque chose d'inhabituel dans votre quartier cette semaine.",
    instruction: "Racontez ce fait divers au passé composé, comme un petit article : ce qui s'est passé, où et quand, et la réaction des habitants.",
    points: ["Ce qui s'est passé", "Le lieu et le moment", "La réaction des habitants"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pe-7",
    title: "Expliquer une offre d'abonnement",
    situation: "Vous avez vu une offre d'abonnement numérique à 1 € par mois et vous pensez à un ami.",
    instruction: "Écrivez-lui un message : décrivez l'offre, ce qui est compris dans l'abonnement et jusqu'à quand elle est valable.",
    points: ["Le prix de l'offre", "Ce qui est compris", "La date limite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pe-8",
    title: "La newsletter du quartier",
    situation: "Vous écrivez la petite newsletter mensuelle de votre association de quartier.",
    instruction: "Rédigez la newsletter : annoncez trois nouvelles du quartier (travaux, fête, nouveau commerce…) avec un ton sympathique.",
    points: ["Trois nouvelles du quartier", "Les dates importantes", "Une phrase d'invitation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pe-9",
    title: "Hier soir, au journal télévisé",
    situation: "Vous avez regardé le journal de 20 h hier soir.",
    instruction: "Racontez à un ami ce que vous avez vu : deux sujets présentés, le reportage qui vous a marqué et pourquoi.",
    points: ["Deux sujets du JT", "Le reportage marquant", "Pourquoi il vous a marqué"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pe-10",
    title: "Interview d'un proche",
    situation: "Pour le journal de votre cours de français, vous interviewez un proche sur les médias.",
    instruction: "Écrivez un petit article : présentez la personne, racontez comment elle s'informe et terminez par une citation d'elle.",
    points: ["La présentation de la personne", "Ses habitudes d'information", "Une citation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e9-5-pe-11",
  title: "Décrire une expérience — l'actualité",
  situation: "Vous avez vécu une situation importante liée à l'actualité.",
  instruction: "Racontez cette expérience : le contexte, ce qui s'est passé et le résultat.",
  points: ["Le contexte", "Les événements principaux", "Le résultat"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-5-pe-12",
  title: "Demander des informations — l'actualité",
  situation: "Vous avez besoin d'informations sur l'actualité.",
  instruction: "Écrivez un message formel : présentez-vous, posez trois questions précises et remerciez.",
  points: ["Votre présentation", "Trois questions", "Formule de politesse"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-5-pe-13",
  title: "Donner votre avis — l'actualité",
  situation: "On vous demande votre avis sur l'actualité.",
  instruction: "Exprimez votre opinion : avantages, inconvénients et recommandation.",
  points: ["Les points positifs", "Les points négatifs", "Votre recommandation"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-5-pe-14",
  title: "Raconter un problème — l'actualité",
  situation: "Vous avez rencontré un problème avec l'actualité.",
  instruction: "Décrivez le problème, ce que vous avez fait et ce que vous attendez maintenant.",
  points: ["Le problème", "Vos actions", "Votre attente"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-5-pe-15",
  title: "Proposer une solution — l'actualité",
  situation: "Un ami a un souci lié à l'actualité.",
  instruction: "Écrivez-lui un message avec deux conseils pratiques et une offre d'aide.",
  points: ["Deux conseils", "Votre offre d'aide", "Formule amicale"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-5-pe-16",
  title: "Comparer deux options — l'actualité",
  situation: "Vous hésitez entre deux choix pour l'actualité.",
  instruction: "Listez les avantages et inconvénients de chaque option et indiquez votre préférence.",
  points: ["Option A", "Option B", "Votre choix"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-5-pe-17",
  title: "Planifier une démarche — l'actualité",
  situation: "Vous devez organiser une démarche liée à l'actualité.",
  instruction: "Écrivez un plan avec les étapes, les documents nécessaires et les délais.",
  points: ["Les étapes", "Les documents", "Les délais"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-5-pe-18",
  title: "Remercier — l'actualité",
  situation: "Quelqu'un vous a aidé(e) pour l'actualité.",
  instruction: "Écrivez un message de remerciement : rappelez l'aide reçue et proposez de rendre la pareille.",
  points: ["L'aide reçue", "Votre gratitude", "Votre proposition"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-5-pe-19",
  title: "Informer — l'actualité",
  situation: "Vous devez informer un proche d'une nouvelle sur l'actualité.",
  instruction: "Écrivez un message clair avec les faits importants et une question pour lui.",
  points: ["Les informations clés", "Les détails pratiques", "Une question"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e9-5-pe-20",
  title: "Bilan personnel — l'actualité",
  situation: "Vous faites le bilan de votre expérience avec l'actualité.",
  instruction: "Rédigez un texte : ce que vous avez appris, ce qui reste à faire et vos objectifs.",
  points: ["Ce que vous avez appris", "Ce qui reste à faire", "Vos objectifs"],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

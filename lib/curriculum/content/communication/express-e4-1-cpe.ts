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

/* ── Compréhension écrite — E4.1 Acheter des vêtements ── */

const CE_TEXT_1 = `SMS amie

Je regarde une robe d'été. Détail important : bleu.
L'information affichée est 59 francs chez H&M.
Avant de partir, il faut essayer la robe. Détail : taille M.
Je reste près de mon téléphone aujourd'hui.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.`;

const CE_POOL_1 = buildExpressPool("e4-1-1", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un SMS", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un SMS",
    vfQ: "Le texte mentionne un SMS.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["une robe d'été", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "une robe d'été",
    vfQ: "Le texte mentionne une robe d'été.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["59 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "59 francs",
    vfQ: "Le texte mentionne 59 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["H&M", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "H&M",
    vfQ: "Le texte mentionne H&M.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["bleu", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "bleu",
    vfQ: "Le texte mentionne bleu.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille M", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille M",
    vfQ: "Le texte mentionne taille M.",
    vfC: 0,
  }),
]);
const CE_TEXT_2 = `Petite annonce

Salut ! Pour un manteau d'hiver, information : 80 francs.
On se retrouve chez vente entre particuliers. noir est le détail à vérifier.
Pense à contacter le vendeur; Détail : taille L.
Nous comptons sur vous.
Après cela, vous recevrez un petit rappel.
Gardez une copie papier si possible.
Le cachet de la date est important.
Une confirmation sera envoyée ensuite.`;

const CE_POOL_2 = buildExpressPool("e4-1-2", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une annonce", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une annonce",
    vfQ: "Le texte mentionne une annonce.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un manteau d'hiver", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un manteau d'hiver",
    vfQ: "Le texte mentionne un manteau d'hiver.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["80 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "80 francs",
    vfQ: "Le texte mentionne 80 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["vente entre particuliers", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "vente entre particuliers",
    vfQ: "Le texte mentionne vente entre particuliers.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["noir", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "noir",
    vfQ: "Le texte mentionne noir.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille L", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille L",
    vfQ: "Le texte mentionne taille L.",
    vfC: 0,
  }),
]);
const CE_TEXT_3 = `WhatsApp shopping

À noter aujourd'hui : un jean slim.
Lieu : C&A. Moment : 69 francs.
Petit détail : gris. Action prévue : vérifier la cabine.
taille 32.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.`;

const CE_POOL_3 = buildExpressPool("e4-1-3", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un WhatsApp", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un WhatsApp",
    vfQ: "Le texte mentionne un WhatsApp.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un jean slim", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un jean slim",
    vfQ: "Le texte mentionne un jean slim.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["69 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "69 francs",
    vfQ: "Le texte mentionne 69 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["C&A", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "C&A",
    vfQ: "Le texte mentionne C&A.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["gris", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "gris",
    vfQ: "Le texte mentionne gris.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille 32", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille 32",
    vfQ: "Le texte mentionne taille 32.",
    vfC: 0,
  }),
]);
const CE_TEXT_4 = `Note shopping

La cliente hésite encore pour un pull en laine.
Chez Migros mode, elle vérifie rouge et demande conseil.
Information : 45 francs. Elle doit prendre la carte client.
taille S.
Pensez à vérifier la date et le lieu.
Une réponse rapide nous aide beaucoup.
Vous pouvez venir avec un ami ou un membre de la famille.
Apportez une pièce d'identité si possible.
Le lieu est accessible en bus et à pied.
Les personnes à mobilité réduite sont prioritaires.`;

const CE_POOL_4 = buildExpressPool("e4-1-4", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une note", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une note",
    vfQ: "Le texte mentionne une note.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un pull en laine", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un pull en laine",
    vfQ: "Le texte mentionne un pull en laine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["45 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "45 francs",
    vfQ: "Le texte mentionne 45 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Migros mode", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Migros mode",
    vfQ: "Le texte mentionne Migros mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["rouge", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "rouge",
    vfQ: "Le texte mentionne rouge.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille S", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille S",
    vfQ: "Le texte mentionne taille S.",
    vfC: 0,
  }),
]);
const CE_TEXT_5 = `Message vendeur

Offre courte sur une chemise blanche.
Elle est disponible chez Zara. Information : 39 francs.
Le vendeur rappelle blanc. Pour profiter de l'offre, il faut demander le cintre.
taille M.
J'espère que tu vas bien et que tout se passe comme prévu.
N'oublie pas de me confirmer dès que tu peux.
Sinon on peut aussi en parler demain matin.
Le lieu est facile à trouver avec les indications.
Merci d'avance pour ta réponse.`;

const CE_POOL_5 = buildExpressPool("e4-1-5", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un message", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un message",
    vfQ: "Le texte mentionne un message.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["une chemise blanche", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "une chemise blanche",
    vfQ: "Le texte mentionne une chemise blanche.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["39 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "39 francs",
    vfQ: "Le texte mentionne 39 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Zara", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Zara",
    vfQ: "Le texte mentionne Zara.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["blanc", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "blanc",
    vfQ: "Le texte mentionne blanc.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille M", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille M",
    vfQ: "Le texte mentionne taille M.",
    vfC: 0,
  }),
]);
const CE_TEXT_6 = `Forum mode

Bonjour, votre demande pour des baskets de sport est prête.
Passez chez Decathlon. Information : 89 francs.
Au comptoir, annoncez blanc et noir et pensez à utiliser la carte fidélité.
taille 42.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
À bientôt, et merci de votre lecture.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.`;

const CE_POOL_6 = buildExpressPool("e4-1-6", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un forum", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un forum",
    vfQ: "Le texte mentionne un forum.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["des baskets de sport", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "des baskets de sport",
    vfQ: "Le texte mentionne des baskets de sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["89 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "89 francs",
    vfQ: "Le texte mentionne 89 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Decathlon", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Decathlon",
    vfQ: "Le texte mentionne Decathlon.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["blanc et noir", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "blanc et noir",
    vfQ: "Le texte mentionne blanc et noir.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille 42", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille 42",
    vfQ: "Le texte mentionne taille 42.",
    vfC: 0,
  }),
]);
const CE_TEXT_7 = `E-mail boutique

Liste rapide avant de sortir : un pantalon de costume.
Adresse : PKZ. Moment prévu : 99 francs.
Détail à ne pas oublier : bleu marine.
Sur place, il faut réserver l'ourlet. Détail : taille 48.
Nous restons disponibles pour vous aider.
Merci de parler doucement dans les couloirs.
Les sacs volumineux se déposent à l'accueil.
Un vestiaire gratuit est disponible.`;

const CE_POOL_7 = buildExpressPool("e4-1-7", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un pantalon de costume", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un pantalon de costume",
    vfQ: "Le texte mentionne un pantalon de costume.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["99 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "99 francs",
    vfQ: "Le texte mentionne 99 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["PKZ", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "PKZ",
    vfQ: "Le texte mentionne PKZ.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["bleu marine", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "bleu marine",
    vfQ: "Le texte mentionne bleu marine.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille 48", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille 48",
    vfQ: "Le texte mentionne taille 48.",
    vfC: 0,
  }),
]);
const CE_TEXT_8 = `Affiche vitrine

Notification du magasin : une écharpe en soie est disponible.
Le retrait se fait chez Boutique Soie+. Information : 25 francs.
La note indique vert.
Le client doit passer au comptoir. Détail : taille unique.
Les informations importantes sont déjà notées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.`;

const CE_POOL_8 = buildExpressPool("e4-1-8", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une affiche", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une affiche",
    vfQ: "Le texte mentionne une affiche.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["une écharpe en soie", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "une écharpe en soie",
    vfQ: "Le texte mentionne une écharpe en soie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["25 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "25 francs",
    vfQ: "Le texte mentionne 25 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Boutique Soie+", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Boutique Soie+",
    vfQ: "Le texte mentionne Boutique Soie+.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["vert", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "vert",
    vfQ: "Le texte mentionne vert.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille unique", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille unique",
    vfQ: "Le texte mentionne taille unique.",
    vfC: 0,
  }),
]);
const CE_TEXT_9 = `Avis client

Petit avis sur une jupe plissée.
J'ai testé chez Promod; rose m'a plu.
J'y retourne avec cette information : 35 francs. Action prévue : garder le ticket.
taille 38.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
À très bientôt, prends soin de toi.`;

const CE_POOL_9 = buildExpressPool("e4-1-9", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un avis", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un avis",
    vfQ: "Le texte mentionne un avis.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["une jupe plissée", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "une jupe plissée",
    vfQ: "Le texte mentionne une jupe plissée.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["35 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "35 francs",
    vfQ: "Le texte mentionne 35 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Promod", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Promod",
    vfQ: "Le texte mentionne Promod.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["rose", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "rose",
    vfQ: "Le texte mentionne rose.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille 38", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille 38",
    vfQ: "Le texte mentionne taille 38.",
    vfC: 0,
  }),
]);
const CE_TEXT_10 = `Commande de groupe

Commande de groupe : des shorts de sport.
La personne responsable passe chez Intersport. Information notée : 29 francs.
Elle confirme noir par téléphone.
Il reste à payer avant jeudi. Détail : taille L.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Respectez la file d'attente, s'il vous plaît.`;

const CE_POOL_10 = buildExpressPool("e4-1-10", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une commande", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une commande",
    vfQ: "Le texte mentionne une commande.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["des shorts de sport", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "des shorts de sport",
    vfQ: "Le texte mentionne des shorts de sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["29 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "29 francs",
    vfQ: "Le texte mentionne 29 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Intersport", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Intersport",
    vfQ: "Le texte mentionne Intersport.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["noir", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "noir",
    vfQ: "Le texte mentionne noir.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille L", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille L",
    vfQ: "Le texte mentionne taille L.",
    vfC: 0,
  }),
]);
const CE_TEXT_11 = `Alerte stock

Alerte du jour : des chaussettes.
Chez Coop mode, il reste peu de stock.
Information : 12 francs. Cherchez blanc.
Pour finaliser, il faut prendre deux packs. Détail : taille 39-42.
N'oubliez pas de vérifier la date.
Vous pouvez répondre directement à ce message.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.`;

const CE_POOL_11 = buildExpressPool("e4-1-11", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une alerte", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une alerte",
    vfQ: "Le texte mentionne une alerte.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["des chaussettes", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "des chaussettes",
    vfQ: "Le texte mentionne des chaussettes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["12 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "12 francs",
    vfQ: "Le texte mentionne 12 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Coop mode", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Coop mode",
    vfQ: "Le texte mentionne Coop mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["blanc", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "blanc",
    vfQ: "Le texte mentionne blanc.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille 39-42", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille 39-42",
    vfQ: "Le texte mentionne taille 39-42.",
    vfC: 0,
  }),
]);
const CE_TEXT_12 = `Dialogue boutique

Conversation courte :
— Tu veux un costume complet ?
— Oui, chez Charles Vögele.
— Information : 250 francs; détail : gris foncé.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Merci encore pour votre compréhension.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
— D'accord, action : prendre rendez-vous. Détail : taille 50.`;

const CE_POOL_12 = buildExpressPool("e4-1-12", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un dialogue", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un dialogue",
    vfQ: "Le texte mentionne un dialogue.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un costume complet", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un costume complet",
    vfQ: "Le texte mentionne un costume complet.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["250 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "250 francs",
    vfQ: "Le texte mentionne 250 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Charles Vögele", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Charles Vögele",
    vfQ: "Le texte mentionne Charles Vögele.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["gris foncé", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "gris foncé",
    vfQ: "Le texte mentionne gris foncé.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille 50", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille 50",
    vfQ: "Le texte mentionne taille 50.",
    vfC: 0,
  }),
]);
const CE_TEXT_13 = `Ardoise soldes

Sur l'ardoise, on lit un t-shirt coton.
Le lieu est Ochsner; l'information indiquée est 15 francs.
La ligne suivante parle de jaune.
Le client doit choisir trois couleurs. Détail : taille L.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.`;

const CE_POOL_13 = buildExpressPool("e4-1-13", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une ardoise", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une ardoise",
    vfQ: "Le texte mentionne une ardoise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un t-shirt coton", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un t-shirt coton",
    vfQ: "Le texte mentionne un t-shirt coton.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["15 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "15 francs",
    vfQ: "Le texte mentionne 15 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Ochsner", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Ochsner",
    vfQ: "Le texte mentionne Ochsner.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["jaune", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "jaune",
    vfQ: "Le texte mentionne jaune.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille L", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille L",
    vfQ: "Le texte mentionne taille L.",
    vfC: 0,
  }),
]);
const CE_TEXT_14 = `Rappel téléphone

Rappel dans le téléphone : un blouson jeans.
Départ ou passage avec cette information : 55 francs.
Lieu : Gap.
Vérifier bleu clair avant de payer.
Ensuite, vérifier les manches. Détail : taille M.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.`;

const CE_POOL_14 = buildExpressPool("e4-1-14", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un rappel", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un rappel",
    vfQ: "Le texte mentionne un rappel.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un blouson jeans", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un blouson jeans",
    vfQ: "Le texte mentionne un blouson jeans.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["55 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "55 francs",
    vfQ: "Le texte mentionne 55 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Gap", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Gap",
    vfQ: "Le texte mentionne Gap.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["bleu clair", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "bleu clair",
    vfQ: "Le texte mentionne bleu clair.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille M", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille M",
    vfQ: "Le texte mentionne taille M.",
    vfC: 0,
  }),
]);
const CE_TEXT_15 = `Annonce locale

Annonce locale : un legging yoga arrive ce matin.
Chez Athleta, l'information affichée est 32 francs.
violet est mis de côté.
Action simple : entrer le code promo. Détail : taille S.
Un goûter ou une boisson est parfois offert.
Les photos peuvent être prises pour le souvenir.
Gardez ce texte pour vous en souvenir.
Merci de respecter le calme des autres personnes.
Le personnel peut vous aider en français simple.`;

const CE_POOL_15 = buildExpressPool("e4-1-15", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une annonce", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une annonce",
    vfQ: "Le texte mentionne une annonce.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un legging yoga", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un legging yoga",
    vfQ: "Le texte mentionne un legging yoga.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["32 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "32 francs",
    vfQ: "Le texte mentionne 32 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Athleta", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Athleta",
    vfQ: "Le texte mentionne Athleta.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["violet", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "violet",
    vfQ: "Le texte mentionne violet.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille S", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille S",
    vfQ: "Le texte mentionne taille S.",
    vfC: 0,
  }),
]);
const CE_TEXT_16 = `Message au vendeur

Petit message au vendeur : je viens pour des chaussures de ville.
Je serai chez friperie du Lac. Information : 60 francs.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Le service client répond aussi par téléphone.
Merci de préparer noir.
Sur place, je vais essayer la paire. Détail : taille 40.`;

const CE_POOL_16 = buildExpressPool("e4-1-16", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un message", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un message",
    vfQ: "Le texte mentionne un message.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["des chaussures de ville", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "des chaussures de ville",
    vfQ: "Le texte mentionne des chaussures de ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["60 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "60 francs",
    vfQ: "Le texte mentionne 60 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["friperie du Lac", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "friperie du Lac",
    vfQ: "Le texte mentionne friperie du Lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["noir", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "noir",
    vfQ: "Le texte mentionne noir.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille 40", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille 40",
    vfQ: "Le texte mentionne taille 40.",
    vfC: 0,
  }),
]);
const CE_TEXT_17 = `Offre fidélité

Carte de fidélité : offre sur un manteau imperméable.
Elle fonctionne chez Globus; information : 110 francs.
Le détail lu en magasin est kaki.
Pour l'utiliser, il faut montrer la carte bonus. Détail : taille XL.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Le trajet est simple, ne t'inquiète pas.`;

const CE_POOL_17 = buildExpressPool("e4-1-17", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une offre", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une offre",
    vfQ: "Le texte mentionne une offre.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un manteau imperméable", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un manteau imperméable",
    vfQ: "Le texte mentionne un manteau imperméable.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["110 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "110 francs",
    vfQ: "Le texte mentionne 110 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Globus", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Globus",
    vfQ: "Le texte mentionne Globus.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["kaki", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "kaki",
    vfQ: "Le texte mentionne kaki.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille XL", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille XL",
    vfQ: "Le texte mentionne taille XL.",
    vfC: 0,
  }),
]);
const CE_TEXT_18 = `Réservation fête

Pour la fête, il faut une cravate en soie.
La réservation est chez boutique homme. Information : 35 francs.
La vendeuse confirme bordeaux.
Dernière étape : demander un coffret. Détail : taille unique.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les horaires habituels restent les mêmes.`;

const CE_POOL_18 = buildExpressPool("e4-1-18", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une réservation", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une réservation",
    vfQ: "Le texte mentionne une réservation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["une cravate en soie", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "une cravate en soie",
    vfQ: "Le texte mentionne une cravate en soie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["35 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "35 francs",
    vfQ: "Le texte mentionne 35 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["boutique homme", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "boutique homme",
    vfQ: "Le texte mentionne boutique homme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["bordeaux", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "bordeaux",
    vfQ: "Le texte mentionne bordeaux.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille unique", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille unique",
    vfQ: "Le texte mentionne taille unique.",
    vfC: 0,
  }),
]);
const CE_TEXT_19 = `Confirmation retrait

Message de confirmation : un pyjama coton.
Le retrait se fait chez Manor. Information : 28 francs.
La commande porte la note bleu marine.
Consigne : présenter le numéro. Détail : taille M.
Le message est aussi envoyé au groupe WhatsApp.
Si vous changez d'avis, dites-le sans attendre.
On peut décaler d'une demi-heure si besoin.
Nous vous souhaitons une excellente journée.`;

const CE_POOL_19 = buildExpressPool("e4-1-19", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une confirmation", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une confirmation",
    vfQ: "Le texte mentionne une confirmation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un pyjama coton", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un pyjama coton",
    vfQ: "Le texte mentionne un pyjama coton.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["28 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "28 francs",
    vfQ: "Le texte mentionne 28 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Manor", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Manor",
    vfQ: "Le texte mentionne Manor.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["bleu marine", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "bleu marine",
    vfQ: "Le texte mentionne bleu marine.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille M", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille M",
    vfQ: "Le texte mentionne taille M.",
    vfC: 0,
  }),
]);
const CE_TEXT_20 = `Idée week-end

Dernière idée du week-end : une veste légère.
On passe chez Outlet Aubonne. Information : 49 francs.
On regarde d'abord beige.
Si tout va bien, on peut comparer deux modèles. Détail : taille L.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Le service répond en français et en anglais.
Je reste près de mon téléphone aujourd'hui.`;

const CE_POOL_20 = buildExpressPool("e4-1-20", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une idée", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une idée",
    vfQ: "Le texte mentionne une idée.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["une veste légère", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "une veste légère",
    vfQ: "Le texte mentionne une veste légère.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["49 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "49 francs",
    vfQ: "Le texte mentionne 49 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Outlet Aubonne", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Outlet Aubonne",
    vfQ: "Le texte mentionne Outlet Aubonne.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["beige", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "beige",
    vfQ: "Le texte mentionne beige.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille L", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille L",
    vfQ: "Le texte mentionne taille L.",
    vfC: 0,
  }),
]);

export const E4_1_CE: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e4-1-1",
  readingText: CE_TEXT_1,
  questionPool: CE_POOL_1
}),
  readingPoolExercise({
  id: "e4-1-2",
  readingText: CE_TEXT_2,
  questionPool: CE_POOL_2
}),
  readingPoolExercise({
  id: "e4-1-3",
  readingText: CE_TEXT_3,
  questionPool: CE_POOL_3
}),
  readingPoolExercise({
  id: "e4-1-4",
  readingText: CE_TEXT_4,
  questionPool: CE_POOL_4
}),
  readingPoolExercise({
  id: "e4-1-5",
  readingText: CE_TEXT_5,
  questionPool: CE_POOL_5
}),
  readingPoolExercise({
  id: "e4-1-6",
  readingText: CE_TEXT_6,
  questionPool: CE_POOL_6
}),
  readingPoolExercise({
  id: "e4-1-7",
  readingText: CE_TEXT_7,
  questionPool: CE_POOL_7
}),
  readingPoolExercise({
  id: "e4-1-8",
  readingText: CE_TEXT_8,
  questionPool: CE_POOL_8
}),
  readingPoolExercise({
  id: "e4-1-9",
  readingText: CE_TEXT_9,
  questionPool: CE_POOL_9
}),
  readingPoolExercise({
  id: "e4-1-10",
  readingText: CE_TEXT_10,
  questionPool: CE_POOL_10
}),
  readingPoolExercise({
  id: "e4-1-11",
  readingText: CE_TEXT_11,
  questionPool: CE_POOL_11
}),
  readingPoolExercise({
  id: "e4-1-12",
  readingText: CE_TEXT_12,
  questionPool: CE_POOL_12
}),
  readingPoolExercise({
  id: "e4-1-13",
  readingText: CE_TEXT_13,
  questionPool: CE_POOL_13
}),
  readingPoolExercise({
  id: "e4-1-14",
  readingText: CE_TEXT_14,
  questionPool: CE_POOL_14
}),
  readingPoolExercise({
  id: "e4-1-15",
  readingText: CE_TEXT_15,
  questionPool: CE_POOL_15
}),
  readingPoolExercise({
  id: "e4-1-16",
  readingText: CE_TEXT_16,
  questionPool: CE_POOL_16
}),
  readingPoolExercise({
  id: "e4-1-17",
  readingText: CE_TEXT_17,
  questionPool: CE_POOL_17
}),
  readingPoolExercise({
  id: "e4-1-18",
  readingText: CE_TEXT_18,
  questionPool: CE_POOL_18
}),
  readingPoolExercise({
  id: "e4-1-19",
  readingText: CE_TEXT_19,
  questionPool: CE_POOL_19
}),
  readingPoolExercise({
  id: "e4-1-20",
  readingText: CE_TEXT_20,
  questionPool: CE_POOL_20
}),
];

/* ── Production orale — dialogues à jouer (thème vêtements) ───────────────── */

const VENDEUR = { title: "Le vendeur", vous: "le vendeur / la vendeuse" };
const CLIENT = { title: "Le client", vous: "le client / la cliente" };

export const E4_1_PO: ExpressPoDialogue[] = [
  {
    id: "e4-1-po-1",
    title: "Essayer une robe",
    context: "Vous êtes dans un magasin de vêtements et vous voulez essayer une robe.",
    roleA: VENDEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Bonjour, je voudrais essayer la robe rouge, s'il vous plaît." },
      { role: "A", text: "Bien sûr. Vous faites quelle taille ?" },
      { role: "B", text: "Je fais du 38." },
      { role: "A", text: "Voici du 38. La cabine est au fond du magasin." },
      { role: "B", text: "Merci… Qu'est-ce que vous en pensez ?" },
      { role: "A", text: "Elle vous va très bien ! Ça vous plaît ?" },
      { role: "B", text: "Oui, ça me plaît beaucoup. Je la prends !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-1-po-2",
    title: "Acheter des chaussures",
    context: "Vous cherchez des chaussures noires pour le travail.",
    roleA: VENDEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, vous désirez ?" },
      { role: "B", text: "Je voudrais des chaussures noires pour le travail." },
      { role: "A", text: "Quelle est votre pointure ?" },
      { role: "B", text: "Je fais du 41." },
      { role: "A", text: "Voici deux modèles en 41. Vous voulez essayer ?" },
      { role: "B", text: "Oui… Le premier modèle est très confortable." },
      { role: "A", text: "Il coûte soixante francs. Ça vous va ?" },
      { role: "B", text: "Oui, je les prends. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-1-po-3",
    title: "Un pull en laine",
    context: "C'est l'hiver et vous cherchez un pull chaud.",
    roleA: VENDEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Qu'est-ce qu'il vous faut ?" },
      { role: "B", text: "Je cherche un pull chaud pour l'hiver." },
      { role: "A", text: "Nous avons ce pull en laine, très chaud." },
      { role: "B", text: "Il est joli ! Vous l'avez en bleu ?" },
      { role: "A", text: "Oui, en bleu, en gris et en noir. Quelle taille ?" },
      { role: "B", text: "Du M, s'il vous plaît." },
      { role: "A", text: "Voilà un pull bleu en M. Vous voulez l'essayer ?" },
      { role: "B", text: "Oui, merci. Où est la cabine ?" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-1-po-4",
    title: "Un cadeau pour une amie",
    context: "Vous cherchez un cadeau pour l'anniversaire d'une amie.",
    roleA: VENDEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Oui, je cherche un cadeau pour une amie." },
      { role: "A", text: "Une écharpe, peut-être ? C'est un joli cadeau." },
      { role: "B", text: "Bonne idée ! Vous avez des écharpes en coton ?" },
      { role: "A", text: "Oui, voici nos écharpes. La verte est très jolie." },
      { role: "B", text: "J'aime bien la verte. Elle coûte combien ?" },
      { role: "A", text: "Vingt-cinq francs. Je fais un paquet cadeau ?" },
      { role: "B", text: "Oui, s'il vous plaît. Merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-1-po-5",
    title: "Échanger un pantalon",
    context: "Vous avez acheté un pantalon trop petit et vous revenez au magasin.",
    roleA: VENDEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Bonjour, ce pantalon est trop petit. Je voudrais l'échanger." },
      { role: "A", text: "Pas de problème. Vous avez le ticket ?" },
      { role: "B", text: "Oui, le voilà." },
      { role: "A", text: "Merci. Vous voulez la taille au-dessus ?" },
      { role: "B", text: "Oui, du 40, s'il vous plaît." },
      { role: "A", text: "Voici du 40. Vous pouvez l'essayer en cabine." },
      { role: "B", text: "Parfait, merci pour votre aide !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-1-po-6",
    title: "Les soldes",
    context: "C'est les soldes et vous demandez le prix d'une veste.",
    roleA: VENDEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Aujourd'hui, tout est en solde." },
      { role: "B", text: "Super ! Cette veste coûte combien ?" },
      { role: "A", text: "Elle est à moitié prix : quarante francs." },
      { role: "B", text: "C'est une bonne affaire ! Elle est en cuir ?" },
      { role: "A", text: "Non, elle est en coton. Vous voulez l'essayer ?" },
      { role: "B", text: "Oui, s'il vous plaît. Je fais du M." },
      { role: "A", text: "Voici la veste en M. Ça vous va très bien !" },
      { role: "B", text: "Merci, je la prends !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-1-po-7",
    title: "Des vêtements pour un enfant",
    context: "Vous cherchez un manteau pour votre fils de six ans.",
    roleA: VENDEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, vous cherchez quelque chose ?" },
      { role: "B", text: "Oui, un manteau pour mon fils. Il a six ans." },
      { role: "A", text: "Le rayon enfants est ici. Vous aimeriez quelle couleur ?" },
      { role: "B", text: "Bleu ou vert, s'il vous plaît." },
      { role: "A", text: "Voici un manteau bleu, très chaud pour l'hiver." },
      { role: "B", text: "Il est parfait. Il coûte combien ?" },
      { role: "A", text: "Trente-cinq francs. Il vous faut autre chose ?" },
      { role: "B", text: "Non, c'est tout. Merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-1-po-8",
    title: "À la caisse",
    context: "Vous avez choisi vos vêtements et vous allez payer à la caisse.",
    roleA: { title: "Le caissier", vous: "le caissier / la caissière" },
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Vous avez trouvé tout ce qu'il vous faut ?" },
      { role: "B", text: "Oui, merci. Une robe et une écharpe." },
      { role: "A", text: "Ça fait cinquante-cinq francs. Vous payez comment ?" },
      { role: "B", text: "Par carte, s'il vous plaît." },
      { role: "A", text: "Sans contact, c'est possible. Voilà, c'est bon." },
      { role: "B", text: "Je peux avoir le ticket, s'il vous plaît ?" },
      { role: "A", text: "Bien sûr, le voici. Merci de votre visite !" },
      { role: "B", text: "Merci, au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-1-po-9",
    title: "Devant la vitrine",
    context: "Vous regardez une vitrine avec un ami et vous parlez des vêtements.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: { title: "L'autre ami", vous: "l'ami / l'amie" },
    lines: [
      { role: "A", text: "Regarde cette vitrine ! Le pull rouge est super." },
      { role: "B", text: "Oui, mais je préfère la veste noire." },
      { role: "A", text: "Elle est jolie. On entre dans la boutique ?" },
      { role: "B", text: "D'accord ! J'aimerais essayer la veste." },
      { role: "A", text: "Et moi, je voudrais voir les chaussures." },
      { role: "B", text: "Tu fais quelle pointure ?" },
      { role: "A", text: "Je fais du 39. Et toi, quelle taille pour la veste ?" },
      { role: "B", text: "Du L. Allez, on y va !" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e4-1-po-10",
    title: "Une veste pour un entretien",
    context: "Vous avez un entretien de travail demain et il vous faut une veste élégante.",
    roleA: VENDEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Oui, j'ai un entretien demain. Il me faudrait une veste élégante." },
      { role: "A", text: "Très bien. Quelle est votre taille ?" },
      { role: "B", text: "Je fais du 50." },
      { role: "A", text: "Voici une veste grise, très élégante. Essayez-la." },
      { role: "B", text: "Elle me va bien. Vous avez aussi des cravates ?" },
      { role: "A", text: "Oui, juste ici. La bleue va bien avec le gris." },
      { role: "B", text: "Parfait, je prends la veste et la cravate. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
{
  id: "e4-1-po-11",
  title: "Demander une information sur des vêtements",
  context: "Vous parlez en français simple. Vous devez demander une information sur des vêtements : trouver une veste pour la pluie.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour trouver une veste pour la pluie." },
    { role: "A", text: "Bien sûr. Ce modèle est imperméable." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui. Il existe en bleu et en noir." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e4-1-po-12",
  title: "Expliquer un problème avec des vêtements",
  context: "Vous parlez en français simple. Vous devez expliquer un problème avec des vêtements : le pantalon acheté hier est trop petit.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : le pantalon acheté hier est trop petit." },
    { role: "A", text: "Je comprends. Vous pouvez l'échanger." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Gardez le ticket." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
{
  id: "e4-1-po-13",
  title: "Prendre rendez-vous pour des vêtements",
  context: "Vous parlez en français simple. Vous devez prendre rendez-vous pour des vêtements : faire retoucher une robe.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais faire retoucher une robe." },
    { role: "A", text: "Je peux vous proposer la couturière vient jeudi." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "La retouche prend une semaine." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
{
  id: "e4-1-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous parlez en français simple. Vous devez confirmer un rendez-vous : la réservation d'un manteau.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme la réservation d'un manteau." },
    { role: "A", text: "Très bien. C'est bien taille M en bleu ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "Je passe le chercher ce soir." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
{
  id: "e4-1-po-15",
  title: "Demander conseil sur des vêtements",
  context: "Vous parlez en français simple. Vous devez demander conseil sur des vêtements : choisir une chemise pour un entretien.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour choisir une chemise pour un entretien." },
    { role: "A", text: "La blanche est plus classique." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "La bleue est aussi élégante." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
{
  id: "e4-1-po-16",
  title: "Signaler un retard",
  context: "Vous parlez en français simple. Vous devez signaler un retard : je viens essayer la veste plus tard.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : je viens essayer la veste plus tard." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "Je finis le travail à 18 heures." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "Le magasin ferme à 19 heures." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e4-1-po-17",
  title: "Faire une réclamation polie",
  context: "Vous parlez en français simple. Vous devez faire une réclamation polie : la fermeture du sac est cassée.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : la fermeture du sac est cassée." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "Je l'ai acheté samedi." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Je voudrais un échange." },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
{
  id: "e4-1-po-18",
  title: "Demander une aide urgente",
  context: "Vous parlez en français simple. Vous devez demander une aide urgente : trouver une tenue pour ce soir.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour trouver une tenue pour ce soir." },
    { role: "A", text: "Cette robe est simple et jolie." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Les chaussures vont avec." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
{
  id: "e4-1-po-19",
  title: "Comparer deux possibilités",
  context: "Vous parlez en français simple. Vous devez comparer deux possibilités : un manteau long et une veste courte.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare un manteau long et une veste courte." },
    { role: "A", text: "Le manteau tient plus chaud." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "La veste est plus pratique." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
{
  id: "e4-1-po-20",
  title: "Remercier pour une aide",
  context: "Vous parlez en français simple. Vous devez remercier pour une aide : vos conseils pour la taille.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour vos conseils pour la taille." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "Le pantalon me va très bien." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "Je suis content de mon achat." },
    { role: "A", text: "N'hésitez pas à revenir si besoin." },
    { role: "B", text: "Oui, je le ferai." },
    { role: "A", text: "Bonne continuation !" },
    { role: "B", text: "Merci, à vous aussi." },
  ],
}
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E4_1_PE: ExpressPePrompt[] = [
  {
    id: "e4-1-pe-1",
    title: "Week-end montagne",
    situation: "",
    instruction: "C'est l'hiver. Vous invitez un ami pour un week-end à la montagne et vous expliquez quels vêtements il doit prendre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-2",
    title: "Don de vêtements",
    situation: "",
    instruction: "Vous voulez donner des vêtements et des accessoires à la Croix-Rouge. Vous décrivez les vêtements et les accessoires.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-3",
    title: "Valise d'ete",
    situation: "",
    instruction: "Vous préparez une valise pour une semaine à la mer. Écrivez un message pour dire quels vêtements vous prenez et pourquoi.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-4",
    title: "Conseil de pluie",
    situation: "",
    instruction: "Un ami vient dans votre ville et il pleut souvent. Écrivez un message pour conseiller des vêtements et des chaussures adaptes.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-5",
    title: "Tenue de travail",
    situation: "",
    instruction: "Décrivez la tenue que vous portez pour aller au travail. Parlez des couleurs, des accessoires et du confort.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-6",
    title: "Achat en magasin",
    situation: "",
    instruction: "Vous cherchez une veste dans un magasin. Écrivez un message à un ami pour décrire la veste idéale et demander son avis.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-7",
    title: "Fête elegante",
    situation: "",
    instruction: "Vous êtes invite à une fête elegante. Décrivez la tenue que vous voulez porter avec les vêtements, les chaussures et un accessoire.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-8",
    title: "Vêtements d'enfant",
    situation: "",
    instruction: "Vous donnez des vêtements d'enfant à une amie. Décrivez les tailles, les couleurs et l'etat des vêtements.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-9",
    title: "Look préfère",
    situation: "",
    instruction: "Présentez votre look préfère dans un court texte. Dites quels vêtements vous aimez porter et dans quelles situations.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-10",
    title: "Sac oublie",
    situation: "",
    instruction: "Vous avez oublie un sac avec des vêtements chez un ami. Écrivez un message pour décrire le sac et les vêtements à l'interieur.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-11",
    title: "Shopping solidaire",
    situation: "",
    instruction: "Vous organisez un petit echange de vêtements entre amis. Écrivez un message pour expliquer le principe et dire quoi apporter.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-12",
    title: "Conseil entretien",
    situation: "",
    instruction: "Expliquez à un ami comment laver un pull fragile. Donnez des conseils simples sur l'eau, le sechage et le rangement.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-13",
    title: "Saison froide",
    situation: "",
    instruction: "Décrivez les vêtements que vous portez quand il fait très froid. Parlez des couches, des chaussures et des accessoires.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-14",
    title: "Erreur de taille",
    situation: "",
    instruction: "Vous avez achete un pantalon trop grand. Écrivez un message au magasin pour expliquer le problème et demander un echange.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-15",
    title: "Tenue de sport",
    situation: "",
    instruction: "Décrivez votre tenue pour faire du sport. Dites quels vêtements et accessoires vous utilisez et pourquoi ils sont pratiques.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-16",
    title: "Couleurs préfèrees",
    situation: "",
    instruction: "Écrivez un petit texte sur vos couleurs préfèrees pour les vêtements. Expliquez ce que vous portez souvent et ce que vous n'aimez pas.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-17",
    title: "Mariage simple",
    situation: "",
    instruction: "Vous allez à un mariage simple. Écrivez à un ami pour demander son avis sur deux tenues possibles.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-18",
    title: "Voyage leger",
    situation: "",
    instruction: "Vous partez deux jours avec un petit sac. Écrivez un message pour dire quels vêtements essentiels vous choisissez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-19",
    title: "Objet perdu",
    situation: "",
    instruction: "Vous avez perdu une écharpe dans le bus. Écrivez une annonce courte pour décrire l'echarpe et donner vos coordonnees.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pe-20",
    title: "Boutique en ligne",
    situation: "",
    instruction: "Vous voyez des chaussures en ligne. Écrivez un message à un ami pour les décrire et demander si elles sont bien pour vous.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];

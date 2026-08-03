#!/usr/bin/env node
/**
 * Rewrites generic Production Orale (PO) dialogues in Communication content.
 *
 * The script uses the TypeScript AST only to find PO object boundaries. It
 * generates complete replacement objects from topic/action scenario banks and
 * then validates every PO dialogue for 10 alternating A/B lines.
 */
import fs from "fs";
import path from "path";
import ts from "typescript";

const COMM_DIR = "lib/curriculum/content/communication";
const TARGET_ID_RE = /-po-(1[1-9]|20)$/;
const BAD_MARKER_RE =
  /solution simple pour|C'est au sujet de|Pour (?:la |le |l')?\w+, je peux vous donner|Je voudrais des informations sur|j'ai une question à propos de|mon dossier \/ ma situation|avancer sur |Je voudrais comprendre comment ça marche pour|vous avez déjà un dossier|pièce d'identité et un justificatif de domicile/i;

const SAMPLE_IDS = ["e4-3-po-11", "e1-2-po-11", "e12-1-po-17"];
const ACTION_SEQUENCE = ["info", "problem", "appointment", "confirm", "advice", "delay", "complaint", "urgent", "compare", "thanks"];

const ROLE = {
  client: { title: "Le client", vous: "le client / la cliente" },
  vousClient: { title: "Vous", vous: "le client / la cliente" },
  vendeur: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  ami: { title: "L'ami", vous: "l'ami(e)" },
  vousAmi: { title: "Vous", vous: "l'ami(e)" },
  agent: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  vous: { title: "Vous", vous: "la personne qui parle" },
};

function hash(input) {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function normalize(input) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function line(role, text) {
  return { role, text };
}

function cap(text) {
  return text ? `${text.charAt(0).toUpperCase()}${text.slice(1)}` : text;
}

function sentence(text) {
  const value = cap(text).trim();
  return /[.!?]$/.test(value) ? value : `${value}.`;
}

function sentenceOrQuestion(text) {
  const value = cap(text).trim();
  if (/[.!?]$/.test(value)) return value;
  return /^(Pouvez-vous|Peux-tu|Est-ce|Dois-je|Doit-on)\b/.test(value) ? `${value} ?` : `${value}.`;
}

function targetIndex(id) {
  return Number(id.match(/-po-(\d+)$/)?.[1] || "11") - 11;
}

function actionByTargetIndex(id) {
  const index = targetIndex(id);
  return ACTION_SEQUENCE[index] || "info";
}

function makeDialogue(title, context, roleA, roleB, lines) {
  if (lines.length !== 10) {
    throw new Error(`${title}: expected 10 lines, got ${lines.length}`);
  }
  lines.forEach((item, index) => {
    const expected = index % 2 === 0 ? "A" : "B";
    if (item.role !== expected) {
      throw new Error(`${title}: line ${index + 1} must be ${expected}`);
    }
  });
  return { title, context, roleA, roleB, lines };
}

const A1_BANKS = {
  rencontre: [
    makeDialogue("Au parc avec un chien", "Vous êtes au parc. Une personne vous demande le nom de votre chien.", ROLE.ami, ROLE.vousAmi, [
      line("A", "Bonjour ! Il est gentil, votre chien ?"),
      line("B", "Oui, très gentil. Il s'appelle Paco."),
      line("A", "Il a quel âge ?"),
      line("B", "Il a trois ans."),
      line("A", "Vous venez souvent ici ?"),
      line("B", "Oui, le matin après le petit déjeuner."),
      line("A", "Moi aussi, avec ma fille."),
      line("B", "Alors on se reverra peut-être demain."),
      line("A", "Avec plaisir. Bonne promenade !"),
      line("B", "Merci, bonne journée !"),
    ]),
    makeDialogue("À la piscine municipale", "C'est votre premier jour à la piscine. Vous parlez avec l'employé à l'entrée.", { title: "L'employé", vous: "l'employé(e) de la piscine" }, ROLE.vousClient, [
      line("A", "Bonjour, vous venez nager ?"),
      line("B", "Oui, c'est ma première fois ici."),
      line("A", "Bienvenue. Vous voulez une entrée simple ?"),
      line("B", "Oui, s'il vous plaît. C'est combien ?"),
      line("A", "Cinq francs. Les vestiaires sont à gauche."),
      line("B", "Merci. Il faut un bonnet ?"),
      line("A", "Non, mais la douche est obligatoire."),
      line("B", "D'accord, je vais me changer."),
      line("A", "Bonne séance !"),
      line("B", "Merci beaucoup !"),
    ]),
    makeDialogue("Première visite chez le médecin", "Vous arrivez chez un nouveau médecin et vous donnez votre nom.", { title: "La secrétaire", vous: "la secrétaire médicale" }, ROLE.vous, [
      line("A", "Bonjour, vous avez rendez-vous ?"),
      line("B", "Oui, à 9 heures. Je m'appelle Karim Benali."),
      line("A", "Très bien. C'est votre première visite ?"),
      line("B", "Oui, je viens d'arriver dans le quartier."),
      line("A", "D'accord. Vous pouvez attendre ici."),
      line("B", "Merci. Le médecin a du retard ?"),
      line("A", "Un petit peu, environ dix minutes."),
      line("B", "Pas de problème, j'attends."),
      line("A", "Je vous appelle bientôt."),
      line("B", "Merci madame."),
    ]),
    makeDialogue("Journée portes ouvertes", "Vous visitez une université et vous demandez où aller.", { title: "L'étudiant bénévole", vous: "l'étudiant bénévole" }, ROLE.vous, [
      line("A", "Bonjour, vous cherchez une salle ?"),
      line("B", "Oui, je cherche la visite en français."),
      line("A", "Elle commence dans dix minutes, au deuxième étage."),
      line("B", "Merci. Je peux venir même sans inscription ?"),
      line("A", "Oui, bien sûr. Vous êtes seul ?"),
      line("B", "Oui, je veux découvrir l'école."),
      line("A", "Alors prenez ce plan."),
      line("B", "Très bien. Merci pour votre aide."),
      line("A", "Bonne visite !"),
      line("B", "Merci, à bientôt !"),
    ]),
    makeDialogue("Au marché des fruits", "Vous êtes au marché et vous parlez avec une vendeuse de fruits.", { title: "La vendeuse", vous: "la vendeuse du marché" }, ROLE.vousClient, [
      line("A", "Bonjour ! Vous voulez goûter une fraise ?"),
      line("B", "Oui, merci. Elles sont très bonnes."),
      line("A", "Elles viennent de la région."),
      line("B", "Je prends une barquette, s'il vous plaît."),
      line("A", "Voilà. Vous voulez aussi des pommes ?"),
      line("B", "Oui, trois pommes rouges."),
      line("A", "Ça fait huit francs en tout."),
      line("B", "Voici dix francs."),
      line("A", "Et deux francs de monnaie. Bonne journée !"),
      line("B", "Merci, au revoir !"),
    ]),
    makeDialogue("Sur le quai de la gare", "Vous attendez le train et vous vérifiez le quai avec une personne.", { title: "Le voyageur", vous: "le voyageur / la voyageuse" }, ROLE.vous, [
      line("A", "Excusez-moi, ce train va à Lausanne ?"),
      line("B", "Oui, je crois. Il part à 14 h 20."),
      line("A", "Merci. Vous allez aussi à Lausanne ?"),
      line("B", "Oui, pour voir ma sœur."),
      line("A", "Le train est souvent à l'heure ?"),
      line("B", "Oui, en général."),
      line("A", "Parfait, je suis rassuré."),
      line("B", "Regardez, il arrive maintenant."),
      line("A", "Ah oui, merci !"),
      line("B", "Bon voyage !"),
    ]),
    makeDialogue("Premier cours en visio", "Vous êtes en ligne pour un cours de français et vous testez le son.", { title: "Le professeur", vous: "le professeur" }, ROLE.vous, [
      line("A", "Bonjour, vous m'entendez bien ?"),
      line("B", "Oui, je vous entends très bien."),
      line("A", "Parfait. Vous pouvez dire votre prénom ?"),
      line("B", "Je m'appelle Lina."),
      line("A", "Bienvenue Lina. Vous êtes à la maison ?"),
      line("B", "Oui, dans ma cuisine."),
      line("A", "Très bien. On commence doucement."),
      line("B", "D'accord, je suis prête."),
      line("A", "Ouvrez le document, s'il vous plaît."),
      line("B", "C'est ouvert, merci."),
    ]),
    makeDialogue("Au café du quartier", "Vous commandez au café et vous échangez quelques mots avec le serveur.", { title: "Le serveur", vous: "le serveur / la serveuse" }, ROLE.vousClient, [
      line("A", "Bonjour, vous prenez quoi ?"),
      line("B", "Bonjour, un café crème, s'il vous plaît."),
      line("A", "Sur place ou à emporter ?"),
      line("B", "Sur place, près de la fenêtre."),
      line("A", "Très bien. Vous voulez un croissant ?"),
      line("B", "Oui, un petit croissant aussi."),
      line("A", "Ça fait six francs."),
      line("B", "Voici ma carte."),
      line("A", "Merci. Je vous apporte ça."),
      line("B", "Merci beaucoup."),
    ]),
    makeDialogue("Arrivée à l'hôtel", "Vous arrivez à l'hôtel et vous donnez votre nom à la réception.", { title: "Le réceptionniste", vous: "le / la réceptionniste" }, ROLE.vousClient, [
      line("A", "Bonsoir, bienvenue à l'hôtel du Lac."),
      line("B", "Bonsoir, j'ai une réservation au nom de Rossi."),
      line("A", "Oui, une chambre pour deux nuits."),
      line("B", "C'est exact."),
      line("A", "Voici la clé, chambre 204."),
      line("B", "Merci. Le petit déjeuner est à quelle heure ?"),
      line("A", "De 7 heures à 10 heures."),
      line("B", "Parfait. L'ascenseur est où ?"),
      line("A", "Juste à droite."),
      line("B", "Merci, bonne soirée."),
    ]),
    makeDialogue("Au musée", "Vous visitez un musée et vous demandez le prix d'entrée.", { title: "L'agent du musée", vous: "l'agent / l'agente du musée" }, ROLE.vousClient, [
      line("A", "Bonjour, vous voulez un billet ?"),
      line("B", "Oui, un billet adulte, s'il vous plaît."),
      line("A", "C'est douze francs. Vous voulez un plan ?"),
      line("B", "Oui, merci. L'exposition commence où ?"),
      line("A", "Au premier étage, salle bleue."),
      line("B", "Je peux prendre des photos ?"),
      line("A", "Oui, mais sans flash."),
      line("B", "D'accord, je ferai attention."),
      line("A", "Bonne visite !"),
      line("B", "Merci beaucoup."),
    ]),
  ],
  famille: [
    makeDialogue("Carte de famille à la mairie", "Vous êtes à la mairie pour demander une carte famille pour la piscine municipale.", ROLE.agent, ROLE.vous, [
      line("A", "Bonjour, que puis-je faire pour vous ?"),
      line("B", "Bonjour, je voudrais une carte famille pour la piscine."),
      line("A", "Combien de personnes vivent chez vous ?"),
      line("B", "Nous sommes quatre : deux adultes et deux enfants."),
      line("A", "Les enfants ont quel âge ?"),
      line("B", "Ils ont six ans et neuf ans."),
      line("A", "Très bien. La carte sera prête demain."),
      line("B", "Je peux venir la chercher le matin ?"),
      line("A", "Oui, dès 9 heures."),
      line("B", "Merci, à demain."),
    ]),
    makeDialogue("Appeler pour une visite", "Vous appelez votre tante pour organiser une visite en famille dimanche.", { title: "La tante", vous: "la tante" }, ROLE.vous, [
      line("A", "Allô, bonjour ! Comment vas-tu ?"),
      line("B", "Bonjour tante Rosa, ça va bien."),
      line("A", "Tu appelles pour dimanche ?"),
      line("B", "Oui, nous voulons venir avec les enfants."),
      line("A", "Avec plaisir. Vous arrivez vers quelle heure ?"),
      line("B", "Vers 15 heures, après le repas."),
      line("A", "Très bien, je prépare un gâteau."),
      line("B", "Super. On apporte du jus de fruit."),
      line("A", "Parfait, à dimanche !"),
      line("B", "À dimanche, bisous."),
    ]),
    makeDialogue("Nouveau voisin et famille", "Vous rencontrez votre voisin dans l'immeuble et vous présentez votre famille.", { title: "Le voisin", vous: "le voisin / la voisine" }, ROLE.vous, [
      line("A", "Bonjour, vous êtes les nouveaux voisins ?"),
      line("B", "Oui, nous venons d'emménager au troisième."),
      line("A", "Bienvenue ! Vous êtes en famille ?"),
      line("B", "Oui, avec mon mari et notre fille."),
      line("A", "Votre fille va à l'école du quartier ?"),
      line("B", "Oui, elle commence lundi."),
      line("A", "Ma fille aussi y va. Elles pourront se rencontrer."),
      line("B", "Ce serait très bien."),
      line("A", "Alors à bientôt dans l'immeuble."),
      line("B", "À bientôt, merci."),
    ]),
    makeDialogue("Inscription à l'accueil", "Vous êtes à l'accueil d'un centre de loisirs pour inscrire votre enfant.", { title: "L'accueil", vous: "la personne à l'accueil" }, ROLE.vous, [
      line("A", "Bonjour, vous voulez une information ?"),
      line("B", "Oui, je veux inscrire mon fils au centre."),
      line("A", "Il a quel âge ?"),
      line("B", "Il a huit ans."),
      line("A", "Il reste des places le mercredi après-midi."),
      line("B", "C'est parfait, je travaille ce jour-là."),
      line("A", "Il faut remplir cette fiche."),
      line("B", "Je peux la remplir maintenant ?"),
      line("A", "Oui, prenez cette table."),
      line("B", "Merci beaucoup."),
    ]),
    makeDialogue("Chemin vers la crèche", "Dans la rue, vous demandez à une passante où se trouve la crèche de votre petit frère.", { title: "La passante", vous: "la passante" }, ROLE.vous, [
      line("A", "Bonjour, vous cherchez quelque chose ?"),
      line("B", "Oui, je cherche la crèche des Petits Pins."),
      line("A", "C'est pour votre enfant ?"),
      line("B", "Non, pour mon petit frère."),
      line("A", "Elle est au bout de la rue, à gauche."),
      line("B", "Merci. C'est loin à pied ?"),
      line("A", "Non, cinq minutes seulement."),
      line("B", "Parfait, je suis rassuré."),
      line("A", "Bonne journée !"),
      line("B", "Merci, vous aussi."),
    ]),
    makeDialogue("Photo de famille au bureau", "Au bureau, un collègue voit une photo de votre famille sur votre téléphone.", { title: "Le collègue", vous: "le collègue / la collègue" }, ROLE.vous, [
      line("A", "C'est ta famille sur la photo ?"),
      line("B", "Oui, c'est ma femme et mes deux enfants."),
      line("A", "Ils sont grands !"),
      line("B", "Oui, ma fille a dix ans maintenant."),
      line("A", "Et ton fils ?"),
      line("B", "Il a quatre ans, il parle beaucoup."),
      line("A", "Vous partez en vacances ensemble ?"),
      line("B", "Oui, une semaine au bord du lac."),
      line("A", "Profitez bien !"),
      line("B", "Merci, c'est gentil."),
    ]),
    makeDialogue("Chambre familiale à la réception", "À la réception d'un hôtel, vous confirmez que la chambre convient à votre famille.", { title: "Le réceptionniste", vous: "le / la réceptionniste" }, ROLE.vousClient, [
      line("A", "Bonjour, vous avez une réservation ?"),
      line("B", "Oui, une chambre familiale au nom de Silva."),
      line("A", "Je vois : deux adultes et un bébé."),
      line("B", "Oui. Est-ce qu'il y a un lit bébé ?"),
      line("A", "Oui, il est déjà dans la chambre."),
      line("B", "Merci. La chambre est calme ?"),
      line("A", "Oui, elle donne sur le jardin."),
      line("B", "Parfait pour notre bébé."),
      line("A", "Voici votre clé."),
      line("B", "Merci beaucoup."),
    ]),
    makeDialogue("Appel vidéo avec les grands-parents", "En visio, vous présentez votre bébé aux grands-parents.", { title: "La grand-mère", vous: "la grand-mère" }, ROLE.vous, [
      line("A", "Oh, je vois le bébé !"),
      line("B", "Oui, il sourit aujourd'hui."),
      line("A", "Il a bien dormi cette nuit ?"),
      line("B", "Oui, presque six heures."),
      line("A", "Et toi, tu n'es pas trop fatiguée ?"),
      line("B", "Un peu, mais ça va."),
      line("A", "Nous venons vous voir samedi."),
      line("B", "Super, on vous attend après le repas."),
      line("A", "On apportera des fruits."),
      line("B", "Merci, à samedi !"),
    ]),
    makeDialogue("Guichet des activités enfants", "Au guichet, vous demandez une réduction pour les activités de vos enfants.", { title: "L'employé", vous: "l'employé / l'employée du guichet" }, ROLE.vous, [
      line("A", "Bonjour, vous venez pour les activités ?"),
      line("B", "Oui, pour mes deux enfants."),
      line("A", "Ils veulent faire quel cours ?"),
      line("B", "Natation pour ma fille et dessin pour mon fils."),
      line("A", "Il y a une réduction pour deux inscriptions."),
      line("B", "Très bien. Ça fait combien ?"),
      line("A", "Quarante francs par mois au total."),
      line("B", "D'accord, je les inscris."),
      line("A", "Je prépare les fiches."),
      line("B", "Merci beaucoup."),
    ]),
    makeDialogue("Vêtements pour la famille", "Dans un magasin, vous cherchez des pulls pour toute la famille.", ROLE.vendeur, ROLE.vousClient, [
      line("A", "Bonjour, je peux vous aider ?"),
      line("B", "Oui, je cherche trois pulls pour ma famille."),
      line("A", "Pour adultes ou enfants ?"),
      line("B", "Un pour moi et deux pour mes enfants."),
      line("A", "Voici les tailles enfants au fond."),
      line("B", "Vous avez du bleu et du rouge ?"),
      line("A", "Oui, dans cette rangée."),
      line("B", "Parfait. Je peux les essayer ?"),
      line("A", "Bien sûr, les cabines sont à droite."),
      line("B", "Merci."),
    ]),
  ],
  invitation: [
    makeDialogue("Invitation à la fête de quartier", "À la mairie, vous invitez une agente à la fête de quartier de samedi.", ROLE.agent, ROLE.vous, [
      line("A", "Bonjour, vous venez pour quelle demande ?"),
      line("B", "Bonjour, je veux inviter la mairie à notre fête de quartier."),
      line("A", "C'est quand ?"),
      line("B", "Samedi à 16 heures, sur la place des Tilleuls."),
      line("A", "Il y aura combien de personnes ?"),
      line("B", "Environ trente voisins."),
      line("A", "Très bien, je transmets l'invitation."),
      line("B", "Merci. Vous pouvez venir aussi ?"),
      line("A", "Je vais essayer."),
      line("B", "Avec plaisir, à samedi peut-être."),
    ]),
    makeDialogue("Appel pour un anniversaire", "Vous appelez un ami pour l'inviter à votre anniversaire.", ROLE.ami, ROLE.vousAmi, [
      line("A", "Allô ?"),
      line("B", "Salut Samir, c'est Nadia."),
      line("A", "Salut Nadia ! Ça va ?"),
      line("B", "Oui. Je t'invite à mon anniversaire vendredi soir."),
      line("A", "Avec plaisir ! C'est à quelle heure ?"),
      line("B", "À 19 heures, chez moi."),
      line("A", "Je peux apporter quelque chose ?"),
      line("B", "Oui, une boisson si tu veux."),
      line("A", "D'accord, à vendredi !"),
      line("B", "Super, à vendredi."),
    ]),
    makeDialogue("Inviter le voisin au barbecue", "Vous croisez votre voisin et vous l'invitez à un barbecue dans la cour.", { title: "Le voisin", vous: "le voisin / la voisine" }, ROLE.vous, [
      line("A", "Bonjour, vous allez bien ?"),
      line("B", "Oui, merci. Dimanche, nous faisons un barbecue."),
      line("A", "Ah, c'est sympa !"),
      line("B", "Vous voulez venir avec votre famille ?"),
      line("A", "Oui, volontiers. À quelle heure ?"),
      line("B", "Vers midi, dans la cour."),
      line("A", "Je peux apporter une salade ?"),
      line("B", "Oui, ce serait parfait."),
      line("A", "Merci pour l'invitation."),
      line("B", "Avec plaisir, à dimanche."),
    ]),
    makeDialogue("Sortie au cinéma", "À l'accueil d'un centre, vous invitez une personne de votre cours au cinéma.", ROLE.ami, ROLE.vousAmi, [
      line("A", "Tu attends le cours de français ?"),
      line("B", "Oui. Après le cours, tu es libre ?"),
      line("A", "Oui, pourquoi ?"),
      line("B", "Je vais au cinéma à 18 heures. Tu veux venir ?"),
      line("A", "Pourquoi pas ! Quel film ?"),
      line("B", "Une comédie française, assez simple."),
      line("A", "D'accord. On achète les billets ici ?"),
      line("B", "Non, au cinéma, c'est plus facile."),
      line("A", "Très bien, je viens."),
      line("B", "Super !"),
    ]),
    makeDialogue("Invitation à prendre un café", "Dans la rue, vous retrouvez une connaissance et vous l'invitez à boire un café.", ROLE.ami, ROLE.vousAmi, [
      line("A", "Oh, bonjour ! Ça fait longtemps."),
      line("B", "Oui, bonjour ! Tu as cinq minutes ?"),
      line("A", "Oui, je ne suis pas pressé."),
      line("B", "Tu veux boire un café avec moi ?"),
      line("A", "Bonne idée. Où ?"),
      line("B", "Au café du coin, juste là."),
      line("A", "Parfait, j'aime bien cet endroit."),
      line("B", "Alors on y va ?"),
      line("A", "Oui, allons-y."),
      line("B", "Super."),
    ]),
    makeDialogue("Déjeuner entre collègues", "Au bureau, vous invitez un collègue à déjeuner dehors.", { title: "Le collègue", vous: "le collègue / la collègue" }, ROLE.vous, [
      line("A", "Tu manges à la cantine aujourd'hui ?"),
      line("B", "Non, je vais au restaurant indien. Tu veux venir ?"),
      line("A", "Oui, pourquoi pas. C'est loin ?"),
      line("B", "Non, cinq minutes à pied."),
      line("A", "On part à quelle heure ?"),
      line("B", "À midi quinze, après la réunion."),
      line("A", "D'accord. Je prends ma veste."),
      line("B", "Je t'attends à l'entrée."),
      line("A", "Merci pour l'idée."),
      line("B", "Avec plaisir."),
    ]),
    makeDialogue("Apéritif à l'hôtel", "À la réception, vous invitez un autre client à l'apéritif de l'hôtel.", { title: "Le client", vous: "le client / la cliente" }, ROLE.vousClient, [
      line("A", "Vous cherchez la salle du petit déjeuner ?"),
      line("B", "Oui, et j'ai vu qu'il y a un apéritif ce soir."),
      line("A", "Oui, à 18 heures dans le salon."),
      line("B", "Vous voulez y aller ensemble ?"),
      line("A", "Avec plaisir, je ne connais personne ici."),
      line("B", "Moi non plus. On se retrouve ici ?"),
      line("A", "Oui, devant la réception."),
      line("B", "Parfait, à 18 heures."),
      line("A", "À tout à l'heure."),
      line("B", "À tout à l'heure."),
    ]),
    makeDialogue("Invitation en visio", "En visio, vous invitez un ami à visiter votre nouvelle ville.", ROLE.ami, ROLE.vousAmi, [
      line("A", "Ton appartement est prêt maintenant ?"),
      line("B", "Oui, enfin ! Tu veux venir ce week-end ?"),
      line("A", "Oui, ça me ferait plaisir."),
      line("B", "Samedi, je peux te montrer le centre-ville."),
      line("A", "Je prends le train du matin ?"),
      line("B", "Oui, j'irai te chercher à la gare."),
      line("A", "Super. Je reste une nuit ?"),
      line("B", "Oui, il y a un canapé-lit."),
      line("A", "Merci pour l'invitation !"),
      line("B", "Avec plaisir."),
    ]),
    makeDialogue("Invitation à un atelier", "Au guichet d'une bibliothèque, vous invitez une personne à un atelier lecture.", { title: "Le bibliothécaire", vous: "le / la bibliothécaire" }, ROLE.vous, [
      line("A", "Bonjour, vous rendez des livres ?"),
      line("B", "Oui, et je voudrais parler de l'atelier lecture."),
      line("A", "Vous voulez vous inscrire ?"),
      line("B", "Oui, et inviter ma voisine aussi."),
      line("A", "Bien sûr. Il reste deux places."),
      line("B", "C'est samedi matin ?"),
      line("A", "Oui, de 10 heures à midi."),
      line("B", "Parfait, je vais lui proposer."),
      line("A", "Je note vos deux noms ?"),
      line("B", "Oui, merci."),
    ]),
    makeDialogue("Invitation en magasin", "Dans un magasin de sport, vous invitez un ami à une randonnée organisée.", ROLE.ami, ROLE.vousAmi, [
      line("A", "Tu regardes les chaussures de marche ?"),
      line("B", "Oui, il y a une randonnée samedi."),
      line("A", "Ah bon ? Où ça ?"),
      line("B", "Au bord du lac. Tu veux venir avec moi ?"),
      line("A", "Oui, si le niveau est facile."),
      line("B", "C'est facile, deux heures seulement."),
      line("A", "Alors je prends aussi ces chaussures."),
      line("B", "Bonne idée. On part ensemble ?"),
      line("A", "Oui, rendez-vous à 8 heures."),
      line("B", "Parfait."),
    ]),
  ],
};

const TOPIC_PROFILES = {
  logement: {
    noun: "un logement",
    roles: [{ title: "La régie", vous: "l'employé(e) de la régie" }, ROLE.vous],
    info: ["visiter un studio près de la gare", "la visite est jeudi à 17 heures", "le loyer est de 850 francs charges comprises"],
    problem: ["le chauffage ne marche plus dans le salon", "un technicien peut passer demain matin", "je serai à la maison avant 10 heures"],
    appointment: ["une visite pour un appartement de deux pièces", "mardi à 18 heures", "je viens avec mon dossier"],
    confirm: ["la visite de l'appartement", "jeudi à 16 h 30", "l'adresse est rue du Nord 14"],
    advice: ["choisir entre un studio proche du travail et un appartement plus grand", "le studio est plus cher", "l'appartement est à vingt minutes en bus"],
    delay: ["la visite du logement", "le bus est bloqué", "j'arrive avec quinze minutes de retard"],
    complaint: ["une fenêtre cassée depuis une semaine", "l'air froid entre dans la chambre", "je demande une réparation rapide"],
    urgent: ["une fuite d'eau dans la cuisine", "coupez l'eau sous l'évier", "un plombier arrive cet après-midi"],
    compare: ["un studio meublé et un deux-pièces vide", "le studio est libre tout de suite", "le deux-pièces a plus de place"],
    thanks: ["la visite du logement", "vos explications sur le dossier", "je vais envoyer les papiers ce soir"],
  },
  transports: {
    noun: "un déplacement",
    roles: [{ title: "L'employé des transports", vous: "l'employé(e) des transports" }, ROLE.vousClient],
    info: ["prendre le bus pour l'hôpital", "la ligne 8 part devant la gare", "il faut descendre à l'arrêt Parc"],
    problem: ["mon ticket ne passe pas dans le bus", "la bande est abîmée", "je peux vous faire un échange"],
    appointment: ["réserver une place pour le car de demain", "départ à 7 h 45", "je voudrais un aller-retour"],
    confirm: ["la navette pour l'aéroport", "samedi à 6 heures", "elle passe devant l'hôtel"],
    advice: ["choisir entre le train et le car", "le train est plus rapide", "le car coûte moins cher"],
    delay: ["mon train a du retard", "j'arrive à 18 h 20 au lieu de 18 heures", "je vous attends à la sortie"],
    complaint: ["le bus de 7 h 10 n'est pas passé", "je suis arrivé en retard au travail", "je veux signaler le problème"],
    urgent: ["le dernier train pour rentrer", "il part du quai 5 dans dix minutes", "achetez le billet sur l'application"],
    compare: ["un abonnement mensuel et une carte dix trajets", "l'abonnement est mieux si vous voyagez souvent", "la carte dix trajets suffit pour deux jours par semaine"],
    thanks: ["l'aide pour trouver le quai", "vous m'avez évité de manquer le train", "je peux partir tranquille"],
  },
  administration: {
    noun: "une démarche administrative",
    roles: [ROLE.agent, ROLE.vous],
    info: ["renouveler une carte de séjour", "le formulaire se remplit en ligne", "il faut aussi une photo récente"],
    problem: ["je n'arrive pas à ouvrir mon compte en ligne", "le code arrive par SMS", "nous pouvons le renvoyer maintenant"],
    appointment: ["un rendez-vous pour déposer un dossier", "lundi à 9 h 30", "prenez tous les originaux"],
    confirm: ["mon rendez-vous à la mairie", "mercredi à 14 heures", "je confirme ma présence"],
    advice: ["préparer les papiers pour la commune", "faites des copies avant de venir", "gardez aussi les originaux"],
    delay: ["mon rendez-vous administratif", "mon tram est arrêté", "je serai là dans vingt minutes"],
    complaint: ["une erreur sur mon nom dans le courrier", "la lettre indique deux dates différentes", "je demande une correction"],
    urgent: ["un document pour commencer le travail", "l'attestation peut être imprimée aujourd'hui", "revenez au guichet 3"],
    compare: ["faire la démarche en ligne ou au guichet", "en ligne c'est plus rapide", "au guichet on vous aide directement"],
    thanks: ["votre aide pour le formulaire", "je comprends mieux les étapes", "je vais finir le dossier ce soir"],
  },
  achats: {
    noun: "un achat",
    roles: [ROLE.vendeur, ROLE.vousClient],
    info: ["retirer un sac commandé en ligne", "il est au comptoir retrait", "il faut le numéro de commande"],
    problem: ["mon casque audio ne s'allume plus", "nous allons tester la batterie", "si besoin, on l'échange"],
    appointment: ["un rendez-vous au service réparation", "vendredi à 15 heures", "apportez la facture"],
    confirm: ["la livraison du canapé", "demain entre 10 h et midi", "je serai à la maison"],
    advice: ["choisir un téléphone simple", "celui-ci a une bonne batterie", "l'autre prend de meilleures photos"],
    delay: ["je viens chercher ma commande", "je sors du travail plus tard", "je peux passer à 18 h 30"],
    complaint: ["la lampe achetée hier est cassée", "j'ai gardé le ticket", "je voudrais un échange"],
    urgent: ["un chargeur pour mon ordinateur", "ce modèle est compatible", "vous pouvez l'utiliser tout de suite"],
    compare: ["deux manteaux en solde", "le gris est plus chaud", "le bleu est plus léger"],
    thanks: ["vos conseils pour les chaussures", "elles sont très confortables", "je les porte déjà"],
  },
  invitation: {
    noun: "une invitation",
    roles: [{ title: "L'organisateur", vous: "l'organisateur / l'organisatrice" }, ROLE.vous],
    info: ["participer au repas de quartier", "l'inscription se fait avant vendredi", "chacun apporte un plat"],
    problem: ["je n'ai pas reçu l'invitation par e-mail", "elle est peut-être dans les spams", "je vous la renvoie"],
    appointment: ["préparer une invitation pour une fête", "on peut en parler mardi", "je veux inviter quinze personnes"],
    confirm: ["votre présence samedi soir", "la fête commence à 19 heures", "je viens avec mon frère"],
    advice: ["inviter mes voisins pour la première fois", "écrivez un petit message simple", "proposez aussi une heure claire"],
    delay: ["j'arrive tard à l'anniversaire", "mon train part en retard", "gardez-moi une part de gâteau"],
    complaint: ["mon nom manque sur la liste des invités", "j'ai pourtant confirmé lundi", "pouvez-vous vérifier"],
    urgent: ["savoir si je peux encore venir ce soir", "il reste une place", "répondez avant 17 heures"],
    compare: ["inviter les amis au café ou à la maison", "au café c'est plus simple", "à la maison c'est plus calme"],
    thanks: ["votre invitation au dîner", "j'ai passé une très bonne soirée", "le dessert était délicieux"],
  },
  rencontre: {
    noun: "une rencontre",
    roles: [{ title: "L'organisateur", vous: "l'organisateur / l'organisatrice" }, ROLE.vous],
    info: ["la rencontre des nouveaux habitants", "elle a lieu à la salle communale", "il y aura une visite du quartier"],
    problem: ["je ne trouve pas le groupe", "ils sont dans la petite salle à gauche", "je vous accompagne"],
    appointment: ["rencontrer mon conseiller", "jeudi matin à 11 heures", "je veux parler de mon projet"],
    confirm: ["notre rencontre de demain", "à 10 heures devant la bibliothèque", "j'apporte les documents"],
    advice: ["parler à de nouvelles personnes", "commencez par une question simple", "présentez-vous calmement"],
    delay: ["je serai en retard à la rencontre", "la route est fermée", "j'arrive dans vingt minutes"],
    complaint: ["personne n'était à l'accueil", "j'ai attendu trente minutes", "je voudrais un autre créneau"],
    urgent: ["contacter le groupe avant ce soir", "voici le numéro de Clara", "elle répond vite aux messages"],
    compare: ["une rencontre en ligne et une rencontre sur place", "en ligne c'est pratique", "sur place on parle plus facilement"],
    thanks: ["votre accueil pendant la rencontre", "je me suis senti à l'aise", "j'aimerais revenir la semaine prochaine"],
  },
  evenement: {
    noun: "un événement",
    roles: [{ title: "L'organisateur", vous: "l'organisateur / l'organisatrice" }, ROLE.vous],
    info: ["le marché de printemps", "il ouvre samedi à 10 heures", "l'entrée est gratuite"],
    problem: ["mon billet ne s'affiche pas", "je peux chercher avec votre nom", "vous êtes bien inscrit"],
    appointment: ["préparer le stand de l'association", "vendredi à 17 heures", "nous apportons les affiches"],
    confirm: ["ma participation au concert", "je viens avec deux amis", "nous arriverons avant 20 heures"],
    advice: ["choisir entre deux événements ce week-end", "le festival est dehors", "le spectacle est à l'intérieur"],
    delay: ["je serai en retard pour installer la salle", "je finis le travail à 18 heures", "je viens directement après"],
    complaint: ["la musique était trop forte près des enfants", "plusieurs familles sont parties", "pouvez-vous prévoir un espace calme"],
    urgent: ["savoir si l'événement est annulé à cause de la pluie", "il est maintenu sous la halle", "prenez une veste"],
    compare: ["un billet journée et un billet soirée", "le billet journée donne accès aux ateliers", "le billet soirée est moins cher"],
    thanks: ["l'organisation de la fête", "tout était clair et agréable", "mes enfants ont beaucoup aimé"],
  },
  ecole: {
    noun: "la vie scolaire",
    roles: [{ title: "La secrétaire", vous: "la secrétaire de l'école" }, ROLE.vous],
    info: ["inscrire mon fils à la cantine", "les repas commencent lundi", "il faut choisir les jours"],
    problem: ["ma fille a perdu son carnet", "on peut lui en donner un nouveau", "il faudra le signer ce soir"],
    appointment: ["voir la maîtresse de mon fils", "mardi après la classe", "je veux parler de ses devoirs"],
    confirm: ["la réunion parents-professeurs", "jeudi à 18 heures", "je viendrai avec mon mari"],
    advice: ["aider mon enfant à faire ses devoirs", "gardez un moment calme chaque soir", "préparez le cartable la veille"],
    delay: ["mon enfant arrive en retard", "le bus scolaire a eu un problème", "il sera là dans dix minutes"],
    complaint: ["un autre enfant prend souvent son goûter", "ma fille n'ose pas le dire", "je voudrais que l'école regarde"],
    urgent: ["récupérer mon fils malade", "il est à l'infirmerie", "venez par l'entrée principale"],
    compare: ["l'étude surveillée et l'aide aux devoirs", "l'étude est plus calme", "l'aide aux devoirs accompagne davantage"],
    thanks: ["votre aide pour l'inscription", "tout est clair maintenant", "mon fils est content de commencer"],
  },
  travail: {
    noun: "le travail",
    roles: [{ title: "Le collègue", vous: "le collègue / la collègue" }, ROLE.vous],
    info: ["comprendre le planning de la semaine", "vous travaillez mardi et jeudi", "la réunion est vendredi matin"],
    problem: ["l'imprimante ne marche plus", "elle manque de papier", "je vais chercher une ramette"],
    appointment: ["parler avec la responsable", "lundi à 14 heures", "je veux discuter des horaires"],
    confirm: ["la réunion d'équipe", "demain à 9 heures", "j'apporte le dossier client"],
    advice: ["demander une formation interne", "écrivez à votre responsable", "expliquez ce que vous voulez apprendre"],
    delay: ["j'arrive en retard au bureau", "mon train est supprimé", "je commence en visio depuis la gare"],
    complaint: ["mon badge ne fonctionne plus", "je reste bloqué à l'entrée", "pouvez-vous appeler la sécurité"],
    urgent: ["remplacer un collègue malade", "il faut couvrir l'accueil ce matin", "je peux venir à 10 heures"],
    compare: ["travailler le matin ou l'après-midi", "le matin est plus calme", "l'après-midi convient mieux aux clients"],
    thanks: ["ton aide sur le rapport", "j'ai fini avant la réunion", "je te dois un café"],
  },
  sante: {
    noun: "la santé",
    roles: [{ title: "La secrétaire médicale", vous: "la secrétaire médicale" }, ROLE.vous],
    info: ["prendre ma tension à la pharmacie", "le service est sans rendez-vous", "il faut attendre cinq minutes"],
    problem: ["j'ai mal au genou depuis hier", "le médecin peut vous voir cet après-midi", "évitez de marcher longtemps"],
    appointment: ["un rendez-vous chez le dentiste", "mercredi à 16 heures", "j'ai une douleur à une dent"],
    confirm: ["mon rendez-vous de contrôle", "demain à 8 h 30", "j'apporte mes résultats"],
    advice: ["choisir un sirop pour la toux", "celui-ci se prend le soir", "buvez aussi beaucoup d'eau"],
    delay: ["je serai en retard chez le médecin", "je cherche une place de parking", "j'arrive dans dix minutes"],
    complaint: ["mon ordonnance n'est pas complète", "il manque le dosage", "pouvez-vous appeler le cabinet"],
    urgent: ["une fièvre forte chez mon enfant", "appelez le médecin de garde", "donnez-lui de l'eau souvent"],
    compare: ["un rendez-vous en cabinet ou en téléconsultation", "le cabinet permet un examen", "la téléconsultation est plus rapide"],
    thanks: ["votre aide après ma chute", "vous avez appelé le médecin rapidement", "je vais beaucoup mieux"],
  },
  cuisine: {
    noun: "la cuisine",
    roles: [{ title: "Le cuisinier", vous: "le cuisinier / la cuisinière" }, ROLE.vous],
    info: ["un cours de cuisine facile", "on prépare une soupe et une tarte", "le matériel est fourni"],
    problem: ["mon gâteau ne monte pas", "le four n'était peut-être pas assez chaud", "essayez 180 degrés"],
    appointment: ["réserver un atelier cuisine", "samedi à 10 heures", "je viens avec ma sœur"],
    confirm: ["ma place au cours de cuisine", "vendredi soir", "je confirme pour deux personnes"],
    advice: ["préparer un repas simple pour des amis", "faites des pâtes au four", "préparez la salade avant"],
    delay: ["je serai en retard au cours", "mon bus est parti sans moi", "gardez-moi une place près de la porte"],
    complaint: ["le plat livré est froid", "la soupe a coulé dans le sac", "je voudrais une nouvelle livraison"],
    urgent: ["trouver une idée de repas pour ce soir", "faites une omelette avec une salade", "c'est rapide et bon"],
    compare: ["acheter un robot ou un simple mixeur", "le robot fait plus de choses", "le mixeur prend moins de place"],
    thanks: ["la recette que vous m'avez donnée", "ma famille a adoré le gratin", "je vais la refaire dimanche"],
  },
  loisirs: {
    noun: "une activité",
    roles: [{ title: "L'animateur", vous: "l'animateur / l'animatrice" }, ROLE.vous],
    info: ["un atelier de peinture pour adultes", "il a lieu le mardi soir", "le matériel est inclus"],
    problem: ["je ne peux pas venir au cours aujourd'hui", "prévenez simplement par message", "vous pourrez rattraper samedi"],
    appointment: ["essayer le cours de danse", "jeudi à 18 heures", "je veux voir le niveau"],
    confirm: ["mon inscription à l'atelier photo", "samedi matin", "j'apporte mon appareil"],
    advice: ["choisir une activité calme", "le dessin est très agréable", "la chorale est plus sociale"],
    delay: ["j'arrive en retard au club", "mon rendez-vous a fini tard", "commencez sans moi"],
    complaint: ["la salle était fermée hier", "personne n'a prévenu le groupe", "pouvez-vous envoyer un message la prochaine fois"],
    urgent: ["savoir si le cours est maintenu ce soir", "oui, mais dans la salle B", "venez dix minutes avant"],
    compare: ["le yoga et la danse", "le yoga est plus calme", "la danse bouge beaucoup plus"],
    thanks: ["l'accueil au club", "je me suis tout de suite senti bien", "je reviens la semaine prochaine"],
  },
  vacances: {
    noun: "les vacances",
    roles: [{ title: "L'agent de voyage", vous: "l'agent / l'agente de voyage" }, ROLE.vousClient],
    info: ["un séjour de trois jours au bord du lac", "le départ est vendredi", "l'hôtel est près de la plage"],
    problem: ["ma réservation indique une mauvaise date", "je vais corriger au 12 août", "vous recevrez un nouveau mail"],
    appointment: ["parler d'un voyage en famille", "demain à 11 heures", "je cherche quelque chose de calme"],
    confirm: ["notre chambre pour les vacances", "du 3 au 7 juillet", "nous arrivons vers 18 heures"],
    advice: ["choisir entre mer et montagne", "la mer est plus reposante", "la montagne est moins chère cette semaine"],
    delay: ["j'arrive plus tard à l'hôtel", "il y a beaucoup de trafic", "gardez la chambre s'il vous plaît"],
    complaint: ["la chambre ne correspond pas aux photos", "elle donne sur le parking", "je voudrais changer si possible"],
    urgent: ["trouver un hôtel pour ce soir", "il reste une chambre près de la gare", "je peux la réserver maintenant"],
    compare: ["un appartement et une chambre d'hôtel", "l'appartement permet de cuisiner", "l'hôtel offre le petit déjeuner"],
    thanks: ["vos conseils pour les vacances", "le village était très joli", "nous avons passé une belle semaine"],
  },
  ville: {
    noun: "la ville",
    roles: [ROLE.agent, ROLE.vous],
    info: ["trouver la bibliothèque municipale", "elle est derrière la poste", "elle ferme à 19 heures"],
    problem: ["le lampadaire devant chez moi ne fonctionne plus", "nous allons signaler la panne", "un technicien passe cette semaine"],
    appointment: ["rencontrer le service logement de la ville", "mardi à 15 heures", "j'apporte mon dossier"],
    confirm: ["la visite guidée du centre", "samedi à 10 heures", "je viens avec mon voisin"],
    advice: ["choisir un quartier calme", "près du parc c'est agréable", "près de la gare c'est plus bruyant"],
    delay: ["j'arrive en retard à la visite", "je me suis trompé de bus", "je rejoins le groupe à la mairie"],
    complaint: ["les poubelles de ma rue débordent", "l'odeur est forte", "pouvez-vous demander un passage"],
    urgent: ["trouver une pharmacie ouverte ce soir", "celle de la gare est de garde", "elle ferme à 22 heures"],
    compare: ["prendre le bus ou marcher jusqu'au marché", "à pied c'est quinze minutes", "le bus est utile avec des sacs"],
    thanks: ["vos informations sur la ville", "j'ai trouvé la piscine facilement", "vos explications étaient très claires"],
  },
  formation: {
    noun: "une formation",
    roles: [{ title: "Le conseiller", vous: "le conseiller / la conseillère" }, ROLE.vous],
    info: ["un cours de français professionnel", "il commence le 5 septembre", "il y a deux soirs par semaine"],
    problem: ["je ne vois pas mon inscription en ligne", "elle est en attente de validation", "je la confirme aujourd'hui"],
    appointment: ["un entretien pour choisir une formation", "lundi à 13 h 30", "j'apporte mon CV"],
    confirm: ["ma place dans le cours", "je commence mardi prochain", "je serai présent à 8 heures"],
    advice: ["choisir entre français et informatique", "le français vous aidera au travail", "l'informatique peut venir après"],
    delay: ["je serai en retard au cours", "mon bus est bloqué", "je préviens aussi le professeur"],
    complaint: ["je n'ai pas reçu les documents du cours", "mes camarades les ont déjà", "pouvez-vous vérifier mon adresse"],
    urgent: ["savoir si je peux encore m'inscrire", "il reste une place", "venez signer avant midi"],
    compare: ["un cours du soir et un cours intensif", "le soir permet de travailler", "l'intensif progresse plus vite"],
    thanks: ["votre aide pour l'inscription", "je commence enfin la semaine prochaine", "cela compte beaucoup pour moi"],
  },
  emploi: {
    noun: "un emploi",
    roles: [{ title: "Le conseiller emploi", vous: "le conseiller / la conseillère emploi" }, ROLE.vous],
    info: ["postuler pour un poste de vendeur", "l'annonce demande un CV simple", "la lettre peut être courte"],
    problem: ["je n'arrive pas à envoyer ma candidature", "le fichier est trop lourd", "nous allons le réduire"],
    appointment: ["préparer un entretien d'embauche", "jeudi à 10 heures", "j'apporte l'offre d'emploi"],
    confirm: ["mon entretien de demain", "à 9 heures au magasin", "je viendrai dix minutes avant"],
    advice: ["améliorer mon CV", "mettez votre expérience la plus récente en haut", "ajoutez votre numéro de téléphone"],
    delay: ["j'arrive en retard à l'entretien", "mon train est arrêté", "je téléphone tout de suite à l'entreprise"],
    complaint: ["je n'ai pas reçu de réponse après l'entretien", "cela fait trois semaines", "je peux envoyer un message poli"],
    urgent: ["trouver quelqu'un pour relire ma lettre", "je peux la regarder maintenant", "l'offre finit ce soir"],
    compare: ["un stage et un petit emploi", "le stage apprend le métier", "l'emploi donne un salaire tout de suite"],
    thanks: ["vos conseils pour l'entretien", "j'étais moins stressé", "j'ai obtenu un deuxième rendez-vous"],
  },
  restaurant: {
    noun: "un restaurant",
    roles: [{ title: "Le serveur", vous: "le serveur / la serveuse" }, ROLE.vousClient],
    info: ["réserver une table pour deux", "il reste une place à 19 h 30", "la terrasse est ouverte"],
    problem: ["ma réservation n'apparaît pas", "je vais vérifier avec votre numéro", "nous avons encore une table libre"],
    appointment: ["organiser un repas de groupe", "vendredi prochain", "nous serons huit personnes"],
    confirm: ["la table de ce soir", "au nom de Martin", "nous arrivons à 20 heures"],
    advice: ["choisir un plat sans viande", "le risotto aux légumes est très bon", "la soupe est aussi végétarienne"],
    delay: ["nous arrivons en retard au restaurant", "le bus est plein", "gardez la table encore quinze minutes"],
    complaint: ["mon plat est froid", "je ne peux pas le manger comme ça", "pouvez-vous le réchauffer ou le remplacer"],
    urgent: ["trouver une table maintenant", "il reste deux places au comptoir", "le service finit à 21 heures"],
    compare: ["le menu du jour et la carte", "le menu est moins cher", "la carte offre plus de choix"],
    thanks: ["votre accueil au restaurant", "le service était très agréable", "nous reviendrons bientôt"],
  },
  boulangerie: {
    noun: "la boulangerie",
    roles: [{ title: "Le boulanger", vous: "le boulanger / la boulangère" }, ROLE.vousClient],
    info: ["commander des croissants pour demain", "nous les mettons de côté à 8 heures", "il faut donner votre prénom"],
    problem: ["il manque deux pains au chocolat dans mon sachet", "excusez-nous", "je vous les ajoute tout de suite"],
    appointment: ["préparer un gâteau d'anniversaire", "samedi matin", "il sera pour six personnes"],
    confirm: ["ma commande de viennoiseries", "demain à 7 h 30", "je viens les chercher avant le travail"],
    advice: ["choisir un pain pour du fromage", "le pain aux noix va très bien", "la miche complète est plus douce"],
    delay: ["je viens chercher ma commande plus tard", "ma réunion finit à 11 heures", "pouvez-vous la garder"],
    complaint: ["la tarte commandée n'a pas le bon prénom", "c'est pour l'anniversaire de ma fille", "pouvez-vous corriger la plaque rapidement"],
    urgent: ["acheter du pain avant la fermeture", "il reste deux baguettes", "je vous en garde une"],
    compare: ["une brioche et une couronne", "la brioche est plus moelleuse", "la couronne se partage mieux"],
    thanks: ["la commande du bureau", "tout était prêt à l'heure", "mes collègues étaient contents"],
  },
  vetements: {
    noun: "des vêtements",
    roles: [ROLE.vendeur, ROLE.vousClient],
    info: ["trouver une veste pour la pluie", "ce modèle est imperméable", "il existe en bleu et en noir"],
    problem: ["le pantalon acheté hier est trop petit", "vous pouvez l'échanger", "gardez le ticket"],
    appointment: ["faire retoucher une robe", "la couturière vient jeudi", "la retouche prend une semaine"],
    confirm: ["la réservation d'un manteau", "taille M en bleu", "je passe le chercher ce soir"],
    advice: ["choisir une chemise pour un entretien", "la blanche est plus classique", "la bleue est aussi élégante"],
    delay: ["je viens essayer la veste plus tard", "je finis le travail à 18 heures", "le magasin ferme à 19 heures"],
    complaint: ["la fermeture du sac est cassée", "je l'ai acheté samedi", "je voudrais un échange"],
    urgent: ["trouver une tenue pour ce soir", "cette robe est simple et jolie", "les chaussures vont avec"],
    compare: ["un manteau long et une veste courte", "le manteau tient plus chaud", "la veste est plus pratique"],
    thanks: ["vos conseils pour la taille", "le pantalon me va très bien", "je suis content de mon achat"],
  },
};

const PROFILE_ALIASES = {
  deplacement: "transports",
  déplacements: "transports",
  transport: "transports",
  train: "transports",
  bus: "transports",
  gare: "transports",
  aeroport: "transports",
  avion: "transports",
  hotel: "vacances",
  hôtel: "vacances",
  voyage: "vacances",
  vacances: "vacances",
  achat: "achats",
  achats: "achats",
  courses: "achats",
  course: "achats",
  cuisine: "cuisine",
  alimentation: "cuisine",
  activites: "loisirs",
  activités: "loisirs",
  loisirs: "loisirs",
  sport: "loisirs",
  culture: "loisirs",
  musée: "loisirs",
  cinema: "loisirs",
  cinéma: "loisirs",
  sante: "sante",
  santé: "sante",
  pharmacie: "sante",
  "bien-etre": "sante",
  "bien-être": "sante",
  famille: "famille",
  invitation: "invitation",
  invitations: "invitation",
  inviter: "invitation",
  rencontre: "rencontre",
  rencontres: "rencontre",
  evenement: "evenement",
  événement: "evenement",
  événements: "evenement",
  scolaire: "ecole",
  école: "ecole",
  ecole: "ecole",
  logement: "logement",
  domestique: "logement",
  règlement: "administration",
  reglement: "administration",
  administratif: "administration",
  administrative: "administration",
  administratives: "administration",
  actualite: "ville",
  actualité: "ville",
  ville: "ville",
  formation: "formation",
  stage: "emploi",
  emploi: "emploi",
  entretien: "emploi",
  entreprise: "emploi",
  travail: "travail",
  restaurant: "restaurant",
  boulangerie: "boulangerie",
  vêtement: "vetements",
  vêtements: "vetements",
  vetement: "vetements",
  vetements: "vetements",
  bilan: "administration",
  quotidien: "ville",
  voisinage: "ville",
  association: "rencontre",
  associative: "rencontre",
  telephone: "administration",
  téléphone: "administration",
  internet: "administration",
  banque: "administration",
  poste: "administration",
};

function inferTopicKey(id, title, context) {
  const byPrefix = [
    [/^e1-1-/, "rencontre"],
    [/^e1-2-/, "famille"],
    [/^e1-3-/, "invitation"],
    [/^e2-1-/, "logement"],
    [/^e2-2-/, "logement"],
    [/^e2-3-/, "administration"],
    [/^e3-1-/, "ecole"],
    [/^e3-2-/, "ville"],
    [/^e3-3-/, "travail"],
    [/^e4-1-/, "vetements"],
    [/^e4-2-/, "restaurant"],
    [/^e4-3-/, "boulangerie"],
    [/^e5-1-/, "sante"],
    [/^e5-2-/, "sante"],
    [/^e6-1-/, "transports"],
    [/^e6-2-/, "transports"],
    [/^e6-3-/, "transports"],
    [/^e7-1-/, "vacances"],
    [/^e7-2-/, "loisirs"],
    [/^e7-3-/, "loisirs"],
    [/^e8-1-/, "rencontre"],
    [/^e9-1-/, "achats"],
    [/^e9-2-/, "transports"],
    [/^e9-3-/, "logement"],
    [/^e9-4-/, "administration"],
    [/^e9-5-/, "ville"],
    [/^e10-1-/, "invitation"],
    [/^e10-2-/, "rencontre"],
    [/^e10-3-/, "evenement"],
    [/^e10-4-/, "ecole"],
    [/^e10-5-/, "rencontre"],
    [/^e11-1-/, "cuisine"],
    [/^e11-2-/, "loisirs"],
    [/^e11-3-/, "loisirs"],
    [/^e11-4-/, "vacances"],
    [/^e12-1-/, "sante"],
    [/^e12-2-/, "loisirs"],
    [/^e12-3-/, "cuisine"],
    [/^e12-4-/, "ville"],
    [/^e12-5-/, "sante"],
    [/^e13-1-/, "formation"],
    [/^e13-2-/, "emploi"],
    [/^e13-3-/, "emploi"],
    [/^e13-4-/, "emploi"],
    [/^e13-5-/, "emploi"],
    [/^e14-1-/, "administration"],
  ];
  const prefix = byPrefix.find(([re]) => re.test(id));
  if (prefix) return prefix[1];

  const haystack = normalize(`${title} ${context}`);
  const alias = Object.entries(PROFILE_ALIASES).find(([needle]) => haystack.includes(normalize(needle)));
  return alias ? alias[1] : "ville";
}

function inferAction(title, context) {
  const haystack = normalize(`${title} ${context}`);
  if (haystack.includes("resoudre") || haystack.includes("probleme") || haystack.includes("perdu") || haystack.includes("manque")) return "problem";
  if (haystack.includes("prendre un rendez-vous") || haystack.includes("rendez-vous") || haystack.includes("reserver")) return "appointment";
  if (haystack.includes("confirmer")) return "confirm";
  if (haystack.includes("conseil") || haystack.includes("choisir")) return "advice";
  if (haystack.includes("retard")) return "delay";
  if (haystack.includes("reclamation") || haystack.includes("réclamation")) return "complaint";
  if (haystack.includes("urgent") || haystack.includes("garde")) return "urgent";
  if (haystack.includes("comparer") || haystack.includes("option") || haystack.includes("deux")) return "compare";
  if (haystack.includes("remercier") || haystack.includes("merci")) return "thanks";
  if (haystack.includes("informations") || haystack.includes("renseignement")) return "info";
  return "info";
}

function normalizeActionKey(action) {
  return {
    problem: "problem",
    appointment: "appointment",
    confirm: "confirm",
    advice: "advice",
    delay: "delay",
    complaint: "complaint",
    urgent: "urgent",
    compare: "compare",
    thanks: "thanks",
    info: "info",
  }[action] || "info";
}

function a2Title(action, profile) {
  const titles = {
    info: `Demander une information sur ${profile.noun}`,
    problem: `Expliquer un problème avec ${profile.noun}`,
    appointment: `Prendre rendez-vous pour ${profile.noun}`,
    confirm: `Confirmer un rendez-vous`,
    advice: `Demander conseil sur ${profile.noun}`,
    delay: `Signaler un retard`,
    complaint: `Faire une réclamation polie`,
    urgent: `Demander une aide urgente`,
    compare: `Comparer deux possibilités`,
    thanks: `Remercier pour une aide`,
  };
  return titles[action];
}

function buildActionDialogue(topicKey, action, level) {
  const profile = TOPIC_PROFILES[topicKey] || TOPIC_PROFILES.ville;
  const data = profile[normalizeActionKey(action)];
  const [roleA, roleB] = profile.roles;
  const isA2 = level === "a2";
  const contextPrefix = isA2 ? "Vous êtes dans une situation réelle." : "Vous parlez en français simple.";
  const title = a2Title(action, profile);
  const context = `${contextPrefix} Vous devez ${title.toLowerCase()} : ${data[0]}.`;

  const bank = {
    info: [
      line("A", "Bonjour, je peux vous renseigner ?"),
      line("B", `Bonjour, je voudrais savoir comment faire pour ${data[0]}.`),
      line("A", `Bien sûr. ${sentence(data[1])}`),
      line("B", "D'accord. Est-ce qu'il faut réserver avant ?"),
      line("A", isA2 ? `Oui, c'est conseillé. ${sentence(data[2])}` : `Oui. ${sentence(data[2])}`),
      line("B", "Très bien. Je peux le faire aujourd'hui ?"),
      line("A", "Oui, si vous avez quelques minutes."),
      line("B", "Parfait, je commence tout de suite."),
      line("A", "Je reste disponible si vous avez une question."),
      line("B", "Merci beaucoup pour votre aide."),
    ],
    problem: [
      line("A", "Bonjour, qu'est-ce qui se passe ?"),
      line("B", `Bonjour, j'ai un problème : ${data[0]}.`),
      line("A", `Je comprends. ${sentence(data[1])}`),
      line("B", "Merci. Est-ce possible de régler ça maintenant ?"),
      line("A", sentence(data[2])),
      line("B", "Très bien, merci."),
      line("A", "Je m'en occupe tout de suite."),
      line("B", "C'est gentil, je vous remercie."),
      line("A", "Je vous en prie."),
      line("B", "Merci, bonne journée."),
    ],
    appointment: [
      line("A", "Bonjour, vous souhaitez un rendez-vous ?"),
      line("B", `Oui, je voudrais ${data[0]}.`),
      line("A", `Je peux vous proposer ${data[1]}.`),
      line("B", "Oui, ce créneau me convient."),
      line("A", isA2 ? `Parfait. ${sentence(data[2])}` : sentence(data[2])),
      line("B", "D'accord, je le note."),
      line("A", "Je vous envoie une confirmation par message."),
      line("B", "Merci. Vous avez mon numéro ?"),
      line("A", "Oui, il est noté ici."),
      line("B", "Parfait, à bientôt."),
    ],
    confirm: [
      line("A", "Bonjour, vous appelez pour confirmer ?"),
      line("B", `Oui, je confirme ${data[0]}.`),
      line("A", `Très bien. C'est bien ${data[1]} ?`),
      line("B", "Oui, c'est exact."),
      line("A", "Parfait, c'est noté."),
      line("B", sentence(data[2])),
      line("A", "Oui, aucun problème."),
      line("B", "Merci, c'est très clair."),
      line("A", "Parfait, à ce moment-là."),
      line("B", "Merci, à bientôt."),
    ],
    advice: [
      line("A", "Vous voulez un conseil ?"),
      line("B", `Oui, j'hésite pour ${data[0]}.`),
      line("A", sentence(data[1])),
      line("B", "C'est vrai, mais je veux aussi quelque chose de pratique."),
      line("A", sentence(data[2])),
      line("B", "Je comprends mieux la différence."),
      line("A", "Choisissez ce qui vous simplifie la vie."),
      line("B", "Vous avez raison. Je vais y réfléchir ce soir."),
      line("A", "Revenez me voir si vous voulez en reparler."),
      line("B", "Merci pour votre conseil."),
    ],
    delay: [
      line("A", "Bonjour, je vous écoute."),
      line("B", `Bonjour, je vous préviens : ${data[0]}.`),
      line("A", "Merci de nous prévenir. Que se passe-t-il ?"),
      line("B", sentence(data[1])),
      line("A", "D'accord, ce n'est pas grave."),
      line("B", sentenceOrQuestion(data[2])),
      line("A", "Très bien, nous vous attendons."),
      line("B", "Merci pour votre compréhension."),
      line("A", "À tout à l'heure."),
      line("B", "À tout à l'heure."),
    ],
    complaint: [
      line("A", "Bonjour, comment puis-je vous aider ?"),
      line("B", `Bonjour, je voudrais signaler un problème : ${data[0]}.`),
      line("A", "Je suis désolé pour cela."),
      line("B", sentence(data[1])),
      line("A", "Je comprends. Quelle solution souhaitez-vous ?"),
      line("B", sentenceOrQuestion(data[2])),
      line("A", "D'accord, je vais transmettre votre demande."),
      line("B", "Merci. J'aimerais être informé rapidement."),
      line("A", "Je vous réponds dès que possible."),
      line("B", "Très bien, merci."),
    ],
    urgent: [
      line("A", "Bonjour, c'est urgent ?"),
      line("B", `Oui, j'ai besoin d'aide pour ${data[0]}.`),
      line("A", sentence(data[1])),
      line("B", "D'accord, je fais ça tout de suite."),
      line("A", sentence(data[2])),
      line("B", "Merci. Est-ce que je dois rappeler ?"),
      line("A", "Non, venez directement si besoin."),
      line("B", "Très bien, je pars maintenant."),
      line("A", "Bon courage."),
      line("B", "Merci beaucoup."),
    ],
    compare: [
      line("A", "Vous hésitez entre deux possibilités ?"),
      line("B", `Oui, je compare ${data[0]}.`),
      line("A", sentence(data[1])),
      line("B", "Et l'autre possibilité ?"),
      line("A", sentence(data[2])),
      line("B", "Je vois. Je cherche surtout quelque chose de pratique."),
      line("A", "Dans ce cas, la première option est peut-être meilleure."),
      line("B", "D'accord, je vais choisir celle-là."),
      line("A", "Très bien, je vous prépare ça."),
      line("B", "Merci pour vos conseils."),
    ],
    thanks: [
      line("A", "Bonjour, vous vouliez me parler ?"),
      line("B", `Oui, je voulais vous remercier pour ${data[0]}.`),
      line("A", "C'est gentil, merci."),
      line("B", sentence(data[1])),
      line("A", "Je suis content que cela vous ait aidé."),
      line("B", sentence(data[2])),
      line("A", "N'hésitez pas à revenir si besoin."),
      line("B", "Oui, je le ferai."),
      line("A", "Bonne continuation !"),
      line("B", "Merci, à vous aussi."),
    ],
  };

  return makeDialogue(title, context, roleA, roleB, bank[normalizeActionKey(action)]);
}

function buildA1Dialogue(id, title, context) {
  const topicKey = inferTopicKey(id, title, context);
  const index = targetIndex(id);

  if (A1_BANKS[topicKey]?.[index]) {
    return A1_BANKS[topicKey][index];
  }

  const concreteByTitle = {
    "mal aux dents": "appointment",
    "certificat": "info",
    "vaccin": "appointment",
    "ordonnance": "info",
    "fièvre": "urgent",
    "retard": "delay",
    "douleur": "problem",
    "résultats": "info",
    "sirop": "advice",
    "brûlure": "urgent",
    "pansements": "info",
    "vitamines": "advice",
    "indisponible": "problem",
    "bibliothèque": "info",
    "piscine": "info",
    "métro": "info",
    "perdu": "urgent",
    "vélo": "advice",
    "marché": "info",
    "bus": "urgent",
    "taxi": "compare",
    "billet": "info",
    "train": "delay",
    "abonnement": "compare",
    "grève": "problem",
    "quai": "urgent",
    "enregistrement": "info",
    "sécurité": "info",
    "valise": "problem",
    "vol": "delay",
    "passeport": "urgent",
    "hublot": "advice",
    "navette": "info",
    "hôtel": "info",
    "chambre": "complaint",
    "camping": "info",
    "départ": "confirm",
    "wifi": "info",
    "natation": "info",
    "vtt": "info",
    "cours annulé": "problem",
    "escalade": "advice",
    "météo": "advice",
    "tennis": "appointment",
    "ski": "info",
    "niveau": "advice",
    "musée": "info",
    "horaires": "info",
    "étudiant": "info",
    "cinéma": "appointment",
    "concert": "info",
    "exposition": "info",
    "tourisme": "info",
    "film": "thanks",
    "théâtre": "appointment",
    "café": "info",
    "pharmacie": "info",
    "restaurant": "info",
  };
  const normTitle = normalize(title);
  const action = TARGET_ID_RE.test(id)
    ? actionByTargetIndex(id)
    : Object.entries(concreteByTitle).find(([needle]) => normTitle.includes(normalize(needle)))?.[1] ||
      inferAction(title, context);
  return buildActionDialogue(topicKey, action, "a1");
}

function buildReplacement(old) {
  const level = /^e([1-8])(?:-|$)/.test(old.id) ? "a1" : "a2";
  const action = TARGET_ID_RE.test(old.id) ? actionByTargetIndex(old.id) : inferAction(old.title, old.context);
  const built =
    level === "a1"
      ? buildA1Dialogue(old.id, old.title, old.context)
      : buildActionDialogue(inferTopicKey(old.id, old.title, old.context), action, "a2");
  return {
    id: old.id,
    title: built.title,
    context: built.context,
    roleA: built.roleA,
    roleB: built.roleB,
    lines: built.lines,
  };
}

function prop(node, name) {
  if (!ts.isObjectLiteralExpression(node)) return undefined;
  return node.properties.find(
    (item) => ts.isPropertyAssignment(item) && ts.isIdentifier(item.name) && item.name.text === name
  );
}

function stringProp(node, name, sourceFile) {
  const item = prop(node, name);
  if (!item) return "";
  if (ts.isStringLiteralLike(item.initializer)) return item.initializer.text;
  return item.initializer.getText(sourceFile);
}

function lineTexts(node, sourceFile) {
  const item = prop(node, "lines");
  if (!item || !ts.isArrayLiteralExpression(item.initializer)) return [];
  return item.initializer.elements
    .filter((element) => ts.isObjectLiteralExpression(element))
    .map((element) => ({
      role: stringProp(element, "role", sourceFile),
      text: stringProp(element, "text", sourceFile),
    }));
}

function formatRole(role) {
  return `{ title: ${JSON.stringify(role.title)}, vous: ${JSON.stringify(role.vous)} }`;
}

function formatPoObject(dialogue) {
  const lines = dialogue.lines
    .map((item) => `    { role: ${JSON.stringify(item.role)}, text: ${JSON.stringify(item.text)} },`)
    .join("\n");
  return `{
  id: ${JSON.stringify(dialogue.id)},
  title: ${JSON.stringify(dialogue.title)},
  context: ${JSON.stringify(dialogue.context)},
  roleA: ${formatRole(dialogue.roleA)},
  roleB: ${formatRole(dialogue.roleB)},
  lines: [
${lines}
  ],
}`;
}

function concise(dialogue) {
  return [
    `${dialogue.id} — ${dialogue.title}`,
    `Contexte: ${dialogue.context}`,
    ...dialogue.lines.map((item) => `${item.role}: ${item.text}`),
  ].join("\n");
}

function collectPoObjects(sourceText, filePath) {
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true);
  const objects = [];
  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      /PO$/.test(node.name.getText(sourceFile)) &&
      node.initializer &&
      ts.isArrayLiteralExpression(node.initializer)
    ) {
      for (const element of node.initializer.elements) {
        if (!ts.isObjectLiteralExpression(element)) continue;
        const id = stringProp(element, "id", sourceFile);
        if (!id.includes("-po-")) continue;
        const lines = lineTexts(element, sourceFile);
        objects.push({
          filePath,
          node: element,
          id,
          title: stringProp(element, "title", sourceFile),
          context: stringProp(element, "context", sourceFile),
          lines,
          text: sourceText.slice(element.getStart(sourceFile), element.getEnd()),
          start: element.getStart(sourceFile),
          end: element.getEnd(),
        });
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);
  return objects;
}

function isBad(po) {
  return TARGET_ID_RE.test(po.id) || BAD_MARKER_RE.test(`${po.title}\n${po.context}\n${po.lines.map((l) => l.text).join("\n")}`);
}

function rewriteFile(filePath, dryRun) {
  const sourceText = fs.readFileSync(filePath, "utf8");
  const objects = collectPoObjects(sourceText, filePath).filter(isBad);
  if (!objects.length) return { count: 0, samplesBefore: new Map(), samplesAfter: new Map() };

  const samplesBefore = new Map();
  const samplesAfter = new Map();
  const replacements = objects.map((po) => {
    const oldDialogue = {
      id: po.id,
      title: po.title,
      context: po.context,
      lines: po.lines,
    };
    if (SAMPLE_IDS.includes(po.id)) samplesBefore.set(po.id, oldDialogue);
    const replacement = buildReplacement(oldDialogue);
    if (SAMPLE_IDS.includes(po.id)) samplesAfter.set(po.id, replacement);
    return { start: po.start, end: po.end, text: formatPoObject(replacement) };
  });

  if (!dryRun) {
    let output = sourceText;
    for (const replacement of replacements.sort((a, b) => b.start - a.start)) {
      output = `${output.slice(0, replacement.start)}${replacement.text}${output.slice(replacement.end)}`;
    }
    fs.writeFileSync(filePath, output);
  }

  return { count: replacements.length, samplesBefore, samplesAfter };
}

function validateAll(files) {
  const errors = [];
  let markerCount = 0;
  let totalPo = 0;
  let targetPo = 0;

  for (const filePath of files) {
    const sourceText = fs.readFileSync(filePath, "utf8");
    const objects = collectPoObjects(sourceText, filePath);
    totalPo += objects.length;
    for (const po of objects) {
      if (TARGET_ID_RE.test(po.id)) targetPo += 1;
      const haystack = `${po.title}\n${po.context}\n${po.lines.map((l) => l.text).join("\n")}`;
      if (BAD_MARKER_RE.test(haystack)) markerCount += 1;
      if (po.lines.length !== 10) {
        errors.push(`${po.filePath}:${po.id} has ${po.lines.length} lines`);
      }
      po.lines.forEach((item, index) => {
        const expected = index % 2 === 0 ? "A" : "B";
        if (item.role !== expected) {
          errors.push(`${po.filePath}:${po.id} line ${index + 1} role is ${item.role}, expected ${expected}`);
        }
      });
    }
  }

  return { errors, markerCount, totalPo, targetPo };
}

function main() {
  const dryRun = process.argv.includes("--check");
  const files = fs
    .readdirSync(COMM_DIR)
    .filter((file) => /^express-.*-cpe\.ts$/.test(file))
    .sort()
    .map((file) => path.join(COMM_DIR, file));

  let totalRewritten = 0;
  const samplesBefore = new Map();
  const samplesAfter = new Map();
  for (const filePath of files) {
    const result = rewriteFile(filePath, dryRun);
    totalRewritten += result.count;
    for (const [id, dialogue] of result.samplesBefore) samplesBefore.set(id, dialogue);
    for (const [id, dialogue] of result.samplesAfter) samplesAfter.set(id, dialogue);
    if (result.count > 0) {
      console.log(`${filePath}: ${dryRun ? "would rewrite" : "rewrote"} ${result.count}`);
    }
  }

  const validation = validateAll(files);
  console.log(`Total rewritten: ${totalRewritten}`);
  console.log(`PO dialogues checked: ${validation.totalPo}`);
  console.log(`Target po-11..20 checked: ${validation.targetPo}`);
  console.log(`Remaining gabarit marker count: ${validation.markerCount}`);

  for (const id of SAMPLE_IDS) {
    const before = samplesBefore.get(id);
    const after = samplesAfter.get(id);
    if (!before || !after) continue;
    console.log(`\n--- SAMPLE ${id} BEFORE ---`);
    console.log(concise(before));
    console.log(`--- SAMPLE ${id} AFTER ---`);
    console.log(concise(after));
  }

  if (validation.errors.length > 0) {
    console.error(`\nValidation errors:\n${validation.errors.join("\n")}`);
    process.exitCode = 1;
  }
  if (validation.markerCount > 0) {
    process.exitCode = 1;
  }
}

main();

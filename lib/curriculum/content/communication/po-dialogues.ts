export type PoDialogueRole = "A" | "B";

export type PoDialogueLine = {
  role: PoDialogueRole;
  text: string;
};

export type PoDialogueScript = {
  roleA: { title: string; vous: string };
  roleB: { title: string; vous: string };
  lines: PoDialogueLine[];
};

function d(
  roleA: { title: string; vous: string },
  roleB: { title: string; vous: string },
  lines: PoDialogueLine[],
): PoDialogueScript {
  return { roleA, roleB, lines };
}

const GENERIC_DIALOGUE: PoDialogueScript = d(
  { title: "l'interlocuteur", vous: "l'interlocuteur" },
  { title: "le client", vous: "le client" },
  [
    { role: "A", text: "Bonjour, que puis-je faire pour vous ?" },
    { role: "B", text: "Bonjour, j'ai besoin d'aide, s'il vous plaît." },
    { role: "A", text: "Pouvez-vous m'expliquer votre situation ?" },
    { role: "B", text: "Oui, bien sûr. Je voudrais des informations." },
    { role: "A", text: "D'accord. Avez-vous un document avec vous ?" },
    { role: "B", text: "Oui, voici ma carte d'identité." },
    { role: "A", text: "Merci. Quand souhaitez-vous revenir ?" },
    { role: "B", text: "Demain matin, si c'est possible." },
    { role: "A", text: "Très bien, c'est noté pour demain à dix heures." },
    { role: "B", text: "Parfait, merci beaucoup. Au revoir." },
    { role: "A", text: "Au revoir et bonne journée." },
  ],
);

export const PO_DIALOGUES: Record<string, PoDialogueScript> = {
  // ——— A1 (base) ———
  "a1-ecole": d(
    { title: "le professeur", vous: "le professeur" },
    { title: "le parent", vous: "le parent" },
    [
      { role: "A", text: "Bonjour, qu'est-ce que je peux faire pour vous ?" },
      { role: "B", text: "Bonjour, je voudrais parler d'un problème à l'école." },
      { role: "A", text: "Votre enfant est dans quelle classe ?" },
      { role: "B", text: "Il est en cinquième primaire, classe de Madame Martin." },
      { role: "A", text: "Quel est le problème ?" },
      { role: "B", text: "Il a des difficultés en mathématiques depuis quelques semaines." },
      { role: "A", text: "Vous avez une pièce d'identité ?" },
      { role: "B", text: "Oui, la voici." },
      { role: "A", text: "Je vais en parler avec l'enseignante. Revenez jeudi à quinze heures." },
      { role: "B", text: "Très bien, merci beaucoup. Au revoir." },
      { role: "A", text: "Au revoir et bonne journée." },
    ],
  ),

  "a1-hotel": d(
    { title: "la réceptionniste", vous: "la réceptionniste" },
    { title: "le client", vous: "le client" },
    [
      { role: "A", text: "Bonjour, bienvenue. Vous avez une réservation ?" },
      { role: "B", text: "Bonjour, oui. Je m'appelle Dupont." },
      { role: "A", text: "Pour combien de nuits ?" },
      { role: "B", text: "Pour deux nuits, s'il vous plaît." },
      { role: "A", text: "Vous voulez une chambre pour combien de personnes ?" },
      { role: "B", text: "Pour deux personnes, une chambre double." },
      { role: "A", text: "C'est quatre-vingt-cinq francs par nuit. Vous payez comment ?" },
      { role: "B", text: "Par carte, s'il vous plaît." },
      { role: "A", text: "Voici votre clé. La chambre est au deuxième étage." },
      { role: "B", text: "Merci beaucoup. Bonne soirée." },
      { role: "A", text: "Bonne soirée et bon séjour." },
    ],
  ),

  "a1-bibliotheque": d(
    { title: "la bibliothécaire", vous: "la bibliothécaire" },
    { title: "le lecteur", vous: "le lecteur" },
    [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Bonjour, je cherche un livre, s'il vous plaît." },
      { role: "A", text: "Quel type de livre cherchez-vous ?" },
      { role: "B", text: "Un livre pour apprendre le français, niveau débutant." },
      { role: "A", text: "Avez-vous une carte de bibliothèque ?" },
      { role: "B", text: "Non, pas encore. Comment je fais pour l'avoir ?" },
      { role: "A", text: "Il faut une pièce d'identité. Vous pouvez garder le livre trois semaines." },
      { role: "B", text: "D'accord. Où se trouvent les livres de français ?" },
      { role: "A", text: "Au premier étage, section langues étrangères." },
      { role: "B", text: "Merci beaucoup pour votre aide." },
      { role: "A", text: "Je vous en prie. Bonne lecture !" },
    ],
  ),

  "a1-boucherie": d(
    { title: "le boucher", vous: "le boucher" },
    { title: "la cliente", vous: "la cliente" },
    [
      { role: "A", text: "Bonjour, qu'est-ce que vous désirez ?" },
      { role: "B", text: "Bonjour, je voudrais du bœuf, s'il vous plaît." },
      { role: "A", text: "Quelle quantité voulez-vous ?" },
      { role: "B", text: "Cinq cents grammes, s'il vous plaît." },
      { role: "A", text: "C'est pour cuisiner comment ?" },
      { role: "B", text: "Pour faire un ragoût ce soir." },
      { role: "A", text: "Très bien. Ça fait douze francs cinquante." },
      { role: "B", text: "Vous payez comment ? Je peux payer en espèces ?" },
      { role: "A", text: "Oui, espèces ou carte. Voici votre viande." },
      { role: "B", text: "Merci, bonne journée." },
      { role: "A", text: "Bonne journée à vous aussi." },
    ],
  ),

  "a1-boulangerie": d(
    { title: "la boulangère", vous: "la boulangère" },
    { title: "le client", vous: "le client" },
    [
      { role: "A", text: "Bonjour, qu'est-ce qu'il vous faut ?" },
      { role: "B", text: "Bonjour, je voudrais du pain, s'il vous plaît." },
      { role: "A", text: "Vous voulez quel type de pain ?" },
      { role: "B", text: "Une baguette et un pain complet, s'il vous plaît." },
      { role: "A", text: "C'est pour combien de personnes ?" },
      { role: "B", text: "Pour quatre personnes à la maison." },
      { role: "A", text: "Ça fait trois francs cinquante. Vous payez en espèces ?" },
      { role: "B", text: "Oui, voici cinq francs." },
      { role: "A", text: "Et voici votre monnaie. Bon appétit !" },
      { role: "B", text: "Merci beaucoup. Au revoir." },
      { role: "A", text: "Au revoir et à bientôt." },
    ],
  ),

  "a1-gare": d(
    { title: "l'employé", vous: "l'employé" },
    { title: "le voyageur", vous: "le voyageur" },
    [
      { role: "A", text: "Bonjour, où voulez-vous aller ?" },
      { role: "B", text: "Bonjour, je voudrais aller à Lausanne, s'il vous plaît." },
      { role: "A", text: "Un aller simple ou aller-retour ?" },
      { role: "B", text: "Un aller simple, s'il vous plaît." },
      { role: "A", text: "À quelle heure voulez-vous partir ?" },
      { role: "B", text: "Le prochain train, si possible." },
      { role: "A", text: "Le train part à quatorze heures trente, voie trois." },
      { role: "B", text: "Combien coûte le billet ?" },
      { role: "A", text: "Vingt-six francs. Voici votre billet." },
      { role: "B", text: "Merci beaucoup. Bonne journée." },
      { role: "A", text: "Bon voyage !" },
    ],
  ),

  "a1-poste": d(
    { title: "l'employé", vous: "l'employé" },
    { title: "le client", vous: "le client" },
    [
      { role: "A", text: "Bonjour, que puis-je faire pour vous ?" },
      { role: "B", text: "Bonjour, je voudrais envoyer un colis." },
      { role: "A", text: "C'est une lettre ou un colis ?" },
      { role: "B", text: "Un petit colis, s'il vous plaît." },
      { role: "A", text: "Quelle est la destination ?" },
      { role: "B", text: "À Genève, en Suisse." },
      { role: "A", text: "Ça fait huit francs. Vous voulez un reçu ?" },
      { role: "B", text: "Oui, s'il vous plaît." },
      { role: "A", text: "Voici votre reçu. Le colis arrive dans deux jours." },
      { role: "B", text: "Parfait, merci beaucoup." },
      { role: "A", text: "Je vous en prie. Au revoir." },
    ],
  ),

  "a1-accident-velo": d(
    { title: "la passante", vous: "la passante" },
    { title: "le cycliste", vous: "le cycliste" },
    [
      { role: "A", text: "Bonjour, qu'est-ce qui s'est passé ?" },
      { role: "B", text: "Bonjour, je suis tombé de mon vélo." },
      { role: "A", text: "Vous êtes blessé ?" },
      { role: "B", text: "Un peu. J'ai mal au genou." },
      { role: "A", text: "Où avez-vous mal exactement ?" },
      { role: "B", text: "Ici, sur le genou droit." },
      { role: "A", text: "Voulez-vous appeler les secours ?" },
      { role: "B", text: "Non, ce n'est pas grave. Je peux marcher." },
      { role: "A", text: "D'accord. Je peux vous aider à rentrer chez vous ?" },
      { role: "B", text: "Oui, merci beaucoup, c'est gentil." },
      { role: "A", text: "Allez doucement. Prenez soin de vous." },
    ],
  ),

  "a1-arret-bus": d(
    { title: "l'habitant", vous: "l'habitant" },
    { title: "le voyageur", vous: "le voyageur" },
    [
      { role: "B", text: "Excusez-moi, quel bus va au centre-ville ?" },
      { role: "A", text: "Bonjour. C'est le bus numéro trois." },
      { role: "B", text: "Merci. C'est loin d'ici ?" },
      { role: "A", text: "Non, environ dix minutes en bus." },
      { role: "B", text: "Il passe souvent ?" },
      { role: "A", text: "Oui, toutes les quinze minutes." },
      { role: "B", text: "Où je dois descendre pour le centre ?" },
      { role: "A", text: "À l'arrêt Place du Marché." },
      { role: "B", text: "Combien coûte le billet ?" },
      { role: "A", text: "Deux francs cinquante. Vous pouvez payer dans le bus." },
      { role: "B", text: "Merci beaucoup ! Bonne journée." },
      { role: "A", text: "De rien. Bonne journée à vous." },
    ],
  ),

  "a1-cafe": d(
    { title: "la serveuse", vous: "la serveuse" },
    { title: "le client", vous: "le client" },
    [
      { role: "A", text: "Bonjour, qu'est-ce que vous prenez ?" },
      { role: "B", text: "Bonjour, un café, s'il vous plaît." },
      { role: "A", text: "Avec du lait ou du sucre ?" },
      { role: "B", text: "Avec un peu de lait, sans sucre." },
      { role: "A", text: "Vous consommez ici ou à emporter ?" },
      { role: "B", text: "Je consomme ici, merci." },
      { role: "A", text: "Très bien. Autre chose ?" },
      { role: "B", text: "Non, c'est tout. Ça fait combien ?" },
      { role: "A", text: "Quatre francs cinquante, s'il vous plaît." },
      { role: "B", text: "Voici cinq francs. Gardez la monnaie." },
      { role: "A", text: "Merci. Bonne journée !" },
    ],
  ),

  "a1-cinema": d(
    { title: "l'employé", vous: "l'employé" },
    { title: "le spectateur", vous: "le spectateur" },
    [
      { role: "A", text: "Bonjour, quel film vous intéresse ?" },
      { role: "B", text: "Bonjour, je voudrais voir le film de vingt heures." },
      { role: "A", text: "Pour quelle heure exactement ?" },
      { role: "B", text: "La séance de vingt heures, s'il vous plaît." },
      { role: "A", text: "Combien de places ?" },
      { role: "B", text: "Deux places, s'il vous plaît." },
      { role: "A", text: "Vous avez une carte de réduction ?" },
      { role: "B", text: "Non, pas de réduction." },
      { role: "A", text: "Ça fait trente francs. Salle deux, au premier étage." },
      { role: "B", text: "Merci beaucoup. Bonne soirée." },
      { role: "A", text: "Bon film !" },
    ],
  ),

  "a1-commissariat": d(
    { title: "l'agent de police", vous: "l'agent de police" },
    { title: "le citoyen", vous: "le citoyen" },
    [
      { role: "A", text: "Bonjour, que voulez-vous signaler ?" },
      { role: "B", text: "Bonjour, j'ai perdu mon portefeuille." },
      { role: "A", text: "Qu'avez-vous perdu exactement ?" },
      { role: "B", text: "Mon portefeuille avec ma carte d'identité et de l'argent." },
      { role: "A", text: "Où et quand l'avez-vous perdu ?" },
      { role: "B", text: "Hier après-midi, dans le bus numéro cinq." },
      { role: "A", text: "Votre nom et adresse, s'il vous plaît ?" },
      { role: "B", text: "Je m'appelle Ahmed Benali. J'habite rue des Lilas, numéro douze." },
      { role: "A", text: "Merci. Nous allons faire une déclaration." },
      { role: "B", text: "D'accord. Merci pour votre aide." },
      { role: "A", text: "Je vous en prie. Bonne journée." },
    ],
  ),

  "a1-marche": d(
    { title: "le vendeur", vous: "le vendeur" },
    { title: "la cliente", vous: "la cliente" },
    [
      { role: "A", text: "Bonjour, qu'est-ce qu'il vous faut ?" },
      { role: "B", text: "Bonjour, je voudrais des pommes, s'il vous plaît." },
      { role: "A", text: "Combien de kilos ?" },
      { role: "B", text: "Un kilo, s'il vous plaît." },
      { role: "A", text: "Vous voulez aussi des tomates ? Elles sont très bonnes." },
      { role: "B", text: "Oui, un demi-kilo de tomates aussi." },
      { role: "A", text: "Ça fait six francs en tout." },
      { role: "B", text: "C'est tout pour aujourd'hui, merci." },
      { role: "A", text: "Voici vos légumes. Bonne journée !" },
      { role: "B", text: "Merci, au revoir." },
      { role: "A", text: "À bientôt !" },
    ],
  ),

  "a1-restaurant": d(
    { title: "le serveur", vous: "le serveur" },
    { title: "le client", vous: "le client" },
    [
      { role: "A", text: "Bonjour, vous avez choisi ?" },
      { role: "B", text: "Bonjour, oui. Je voudrais commander, s'il vous plaît." },
      { role: "A", text: "Qu'est-ce que vous prenez comme plat principal ?" },
      { role: "B", text: "Le poulet rôti avec des légumes, s'il vous plaît." },
      { role: "A", text: "Et comme boisson ?" },
      { role: "B", text: "Une eau minérale et un jus d'orange." },
      { role: "A", text: "Vous voulez un dessert ?" },
      { role: "B", text: "Oui, une glace vanille, s'il vous plaît." },
      { role: "A", text: "Très bien. Votre commande arrive dans quinze minutes." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie. Bon appétit !" },
    ],
  ),

  "a1-urgence": d(
    { title: "l'infirmière", vous: "l'infirmière" },
    { title: "le patient", vous: "le patient" },
    [
      { role: "A", text: "Bonjour, qu'est-ce qui ne va pas ?" },
      { role: "B", text: "Bonjour, j'ai très mal à la tête." },
      { role: "A", text: "Depuis quand avez-vous mal ?" },
      { role: "B", text: "Depuis ce matin, vers huit heures." },
      { role: "A", text: "Vous avez de la fièvre ?" },
      { role: "B", text: "Je ne sais pas. Je me sens très fatigué." },
      { role: "A", text: "Avez-vous votre carte d'assurance ?" },
      { role: "B", text: "Oui, la voici." },
      { role: "A", text: "Asseyez-vous, s'il vous plaît. Le médecin va vous voir." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ne vous inquiétez pas. Vous allez être pris en charge." },
    ],
  ),

  "a1-coiffeur": d(
    { title: "le coiffeur", vous: "le coiffeur" },
    { title: "le client", vous: "le client" },
    [
      { role: "A", text: "Bonjour, qu'est-ce que je vous fais ?" },
      { role: "B", text: "Bonjour, je voudrais une coupe simple, s'il vous plaît." },
      { role: "A", text: "Vous voulez couper combien ?" },
      { role: "B", text: "Juste les pointes, pas trop court." },
      { role: "A", text: "Vous voulez aussi un shampoing ?" },
      { role: "B", text: "Oui, s'il vous plaît." },
      { role: "A", text: "C'est tout ce que vous voulez ?" },
      { role: "B", text: "Oui, c'est tout. Combien ça coûte ?" },
      { role: "A", text: "Trente-cinq francs avec le shampoing." },
      { role: "B", text: "D'accord. Merci." },
      { role: "A", text: "Asseyez-vous, on commence." },
    ],
  ),

  "a1-docteur": d(
    { title: "le médecin", vous: "le médecin" },
    { title: "le patient", vous: "le patient" },
    [
      { role: "A", text: "Bonjour, qu'est-ce qui ne va pas ?" },
      { role: "B", text: "Bonjour docteur. Je ne me sens pas bien." },
      { role: "A", text: "Où avez-vous mal ?" },
      { role: "B", text: "J'ai mal à la gorge et je tousse beaucoup." },
      { role: "A", text: "Depuis quand ?" },
      { role: "B", text: "Depuis trois jours." },
      { role: "A", text: "Vous avez de la fièvre ?" },
      { role: "B", text: "Un peu, trente-huit degrés hier soir." },
      { role: "A", text: "Ouvrez la bouche, s'il vous plaît. Je vais vous prescrire un médicament." },
      { role: "B", text: "Merci docteur." },
      { role: "A", text: "Reposez-vous et buvez beaucoup d'eau. Au revoir." },
    ],
  ),

  "a1-pediatre": d(
    { title: "le pédiatre", vous: "le pédiatre" },
    { title: "le parent", vous: "le parent" },
    [
      { role: "A", text: "Bonjour, qu'est-ce qui ne va pas chez votre enfant ?" },
      { role: "B", text: "Bonjour docteur. Mon fils est malade." },
      { role: "A", text: "Quel âge a-t-il ?" },
      { role: "B", text: "Il a six ans." },
      { role: "A", text: "Il a de la fièvre ?" },
      { role: "B", text: "Oui, trente-neuf degrés depuis hier." },
      { role: "A", text: "Depuis combien de temps est-il malade ?" },
      { role: "B", text: "Depuis deux jours. Il tousse aussi." },
      { role: "A", text: "D'accord. Je vais l'examiner maintenant." },
      { role: "B", text: "Merci docteur." },
      { role: "A", text: "Ce n'est pas grave. Je vous donne une ordonnance." },
    ],
  ),

  "a1-controle-train": d(
    { title: "le contrôleur", vous: "le contrôleur" },
    { title: "le voyageur", vous: "le voyageur" },
    [
      { role: "A", text: "Bonjour, votre billet, s'il vous plaît." },
      { role: "B", text: "Bonjour, voici mon billet." },
      { role: "A", text: "Merci. Où allez-vous ?" },
      { role: "B", text: "À Berne, gare centrale." },
      { role: "A", text: "Vous avez un abonnement ?" },
      { role: "B", text: "Non, c'est un billet simple." },
      { role: "A", text: "Très bien, tout est en ordre." },
      { role: "B", text: "Merci. Bonne journée." },
      { role: "A", text: "Merci, bon voyage." },
      { role: "B", text: "Au revoir." },
      { role: "A", text: "Au revoir." },
    ],
  ),

  "a1-coupure-courant": d(
    { title: "l'opérateur", vous: "l'opérateur" },
    { title: "l'habitant", vous: "l'habitant" },
    [
      { role: "A", text: "Allô, bonjour. Quel est votre problème ?" },
      { role: "B", text: "Bonjour, il n'y a plus d'électricité chez moi." },
      { role: "A", text: "Quelle est votre adresse ?" },
      { role: "B", text: "Rue du Lac, numéro quinze, à Vevey." },
      { role: "A", text: "Depuis combien de temps n'avez-vous plus d'électricité ?" },
      { role: "B", text: "Depuis une heure, vers midi." },
      { role: "A", text: "D'autres voisins ont le même problème ?" },
      { role: "B", text: "Oui, tout l'immeuble est sans courant." },
      { role: "A", text: "D'accord. Un technicien va venir cet après-midi." },
      { role: "B", text: "Merci beaucoup pour votre aide." },
      { role: "A", text: "Je vous en prie. Bonne journée." },
    ],
  ),

  "a1-fuite-eau": d(
    { title: "l'opérateur", vous: "l'opérateur" },
    { title: "l'habitant", vous: "l'habitant" },
    [
      { role: "A", text: "Bonjour, que se passe-t-il ?" },
      { role: "B", text: "Bonjour, il y a une fuite d'eau dans ma salle de bain." },
      { role: "A", text: "Où est la fuite exactement ?" },
      { role: "B", text: "Sous le lavabo, l'eau coule sur le sol." },
      { role: "A", text: "Avez-vous fermé l'eau ?" },
      { role: "B", text: "Oui, j'ai fermé le robinet principal." },
      { role: "A", text: "À quelle adresse êtes-vous ?" },
      { role: "B", text: "Avenue de la Gare, numéro vingt-deux, appartement quatre." },
      { role: "A", text: "Un plombier arrive dans une heure." },
      { role: "B", text: "Merci beaucoup. C'est urgent." },
      { role: "A", text: "Ne vous inquiétez pas. Il sera là rapidement." },
    ],
  ),

  "a1-inscription-club": d(
    { title: "l'accueil", vous: "l'accueil" },
    { title: "le nouveau membre", vous: "le nouveau membre" },
    [
      { role: "A", text: "Bonjour, quelle activité vous intéresse ?" },
      { role: "B", text: "Bonjour, je voudrais m'inscrire au club de natation." },
      { role: "A", text: "Quel jour êtes-vous libre ?" },
      { role: "B", text: "Le mardi et le jeudi soir." },
      { role: "A", text: "Vous avez déjà fait cette activité ?" },
      { role: "B", text: "Un peu, quand j'étais enfant." },
      { role: "A", text: "Il faut apporter quelque chose ?" },
      { role: "B", text: "Un maillot de bain et une serviette ?" },
      { role: "A", text: "Oui, et une photo d'identité. L'inscription coûte soixante francs." },
      { role: "B", text: "D'accord. Je m'inscris aujourd'hui." },
      { role: "A", text: "Parfait. Bienvenue au club !" },
    ],
  ),

  "a1-magasin-chaussure": d(
    { title: "le vendeur", vous: "le vendeur" },
    { title: "le client", vous: "le client" },
    [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Bonjour, je cherche des chaussures, s'il vous plaît." },
      { role: "A", text: "Quelle est votre pointure ?" },
      { role: "B", text: "Pointure quarante-deux." },
      { role: "A", text: "Vous voulez quelle couleur ?" },
      { role: "B", text: "Noir ou marron, s'il vous plaît." },
      { role: "A", text: "Est-ce que vous voulez les essayer ?" },
      { role: "B", text: "Oui, je voudrais essayer cette paire." },
      { role: "A", text: "Elles vous vont bien. Ça fait quatre-vingt-neuf francs." },
      { role: "B", text: "D'accord, je les prends. Merci." },
      { role: "A", text: "Merci à vous. Bonne journée !" },
    ],
  ),

  "a1-magasin-vetement": d(
    { title: "la vendeuse", vous: "la vendeuse" },
    { title: "la cliente", vous: "la cliente" },
    [
      { role: "A", text: "Bonjour, vous cherchez quelque chose ?" },
      { role: "B", text: "Bonjour, je cherche une veste, s'il vous plaît." },
      { role: "A", text: "Quelle taille faites-vous ?" },
      { role: "B", text: "Taille M, s'il vous plaît." },
      { role: "A", text: "Quelle couleur vous plaît ?" },
      { role: "B", text: "Bleu foncé ou gris." },
      { role: "A", text: "Vous voulez l'essayer ?" },
      { role: "B", text: "Oui, s'il vous plaît. Combien ça coûte ?" },
      { role: "A", text: "Soixante-dix-neuf francs. La cabine est là-bas." },
      { role: "B", text: "Merci, j'y vais." },
      { role: "A", text: "Dites-moi si vous avez besoin d'aide." },
    ],
  ),

  "a1-mot-de-passe": d(
    { title: "le conseiller", vous: "le conseiller" },
    { title: "l'utilisateur", vous: "l'utilisateur" },
    [
      { role: "A", text: "Allô, bonjour. C'est pour quel service ?" },
      { role: "B", text: "Bonjour, j'ai oublié mon mot de passe." },
      { role: "A", text: "Quel est votre nom d'utilisateur ?" },
      { role: "B", text: "C'est marie.dupont@email.ch." },
      { role: "A", text: "Vous voulez réinitialiser votre mot de passe ?" },
      { role: "B", text: "Oui, s'il vous plaît." },
      { role: "A", text: "Vous avez reçu un code par SMS ?" },
      { role: "B", text: "Oui, je viens de le recevoir. C'est six, huit, quatre, deux." },
      { role: "A", text: "Parfait. Choisissez un nouveau mot de passe maintenant." },
      { role: "B", text: "C'est fait. Merci beaucoup." },
      { role: "A", text: "Je vous en prie. Bonne journée." },
    ],
  ),

  "a1-rendez-vous": d(
    { title: "la secrétaire", vous: "la secrétaire" },
    { title: "le patient", vous: "le patient" },
    [
      { role: "A", text: "Bonjour, c'est pour un rendez-vous ?" },
      { role: "B", text: "Bonjour, oui. Je voudrais prendre un rendez-vous." },
      { role: "A", text: "Quel est votre nom ?" },
      { role: "B", text: "Je m'appelle Fatima Hassan." },
      { role: "A", text: "Vous êtes disponible quel jour ?" },
      { role: "B", text: "Lundi ou mardi prochain, si possible." },
      { role: "A", text: "À quelle heure ?" },
      { role: "B", text: "Le matin, vers dix heures." },
      { role: "A", text: "D'accord, mardi à dix heures. C'est noté." },
      { role: "B", text: "Merci beaucoup. Au revoir." },
      { role: "A", text: "Au revoir. À mardi." },
    ],
  ),

  "a1-logement": d(
    { title: "l'agent immobilier", vous: "l'agent immobilier" },
    { title: "le locataire", vous: "le locataire" },
    [
      { role: "A", text: "Bonjour, vous cherchez quel type de logement ?" },
      { role: "B", text: "Bonjour, je cherche un appartement à louer." },
      { role: "A", text: "Combien de pièces voulez-vous ?" },
      { role: "B", text: "Trois pièces, avec une cuisine." },
      { role: "A", text: "Quel loyer maximum pouvez-vous payer ?" },
      { role: "B", text: "Mille deux cents francs par mois maximum." },
      { role: "A", text: "Quand pouvez-vous visiter ?" },
      { role: "B", text: "Samedi après-midi, si c'est possible." },
      { role: "A", text: "J'ai un appartement à Montreux. Visite samedi à quatorze heures." },
      { role: "B", text: "Parfait, merci. J'apporte mes documents ?" },
      { role: "A", text: "Oui, pièce d'identité et fiches de salaire. À samedi." },
    ],
  ),

  "a1-permis": d(
    { title: "l'agent", vous: "l'agent" },
    { title: "le demandeur", vous: "le demandeur" },
    [
      { role: "A", text: "Bonjour, qu'est-ce que je peux faire pour vous ?" },
      { role: "B", text: "Bonjour, je voudrais renouveler mon permis de séjour." },
      { role: "A", text: "Votre permis est valable jusqu'à quand ?" },
      { role: "B", text: "Jusqu'au trente juin de cette année." },
      { role: "A", text: "Avez-vous vos documents d'identité ?" },
      { role: "B", text: "Oui, voici mon passeport et ma carte de séjour." },
      { role: "A", text: "Vous devez prendre un rendez-vous pour le renouvellement." },
      { role: "B", text: "D'accord. Quand est le prochain rendez-vous ?" },
      { role: "A", text: "Le quinze mars à neuf heures. C'est noté." },
      { role: "B", text: "Merci beaucoup pour les informations." },
      { role: "A", text: "Je vous en prie. N'oubliez pas vos documents." },
    ],
  ),

  "a1-telephone-docteur": d(
    { title: "la secrétaire médicale", vous: "la secrétaire médicale" },
    { title: "le patient", vous: "le patient" },
    [
      { role: "A", text: "Cabinet médical, bonjour." },
      { role: "B", text: "Bonjour, je ne me sens pas bien." },
      { role: "A", text: "Qu'est-ce qui ne va pas ?" },
      { role: "B", text: "J'ai mal au ventre et des nausées." },
      { role: "A", text: "Depuis quand avez-vous ces symptômes ?" },
      { role: "B", text: "Depuis hier soir." },
      { role: "A", text: "Vous pouvez venir aujourd'hui ?" },
      { role: "B", text: "Oui, cet après-midi, si possible." },
      { role: "A", text: "Rendez-vous à seize heures avec le docteur Martin." },
      { role: "B", text: "Merci beaucoup. À tout à l'heure." },
      { role: "A", text: "À tout à l'heure. Bon courage." },
    ],
  ),

  "a1-hopital": d(
    { title: "l'accueil", vous: "l'accueil" },
    { title: "le visiteur", vous: "le visiteur" },
    [
      { role: "A", text: "Bonjour, vous venez pour qui ?" },
      { role: "B", text: "Bonjour, je viens voir mon père, Monsieur Keller." },
      { role: "A", text: "Quelle est votre relation avec le patient ?" },
      { role: "B", text: "Je suis sa fille." },
      { role: "A", text: "Avez-vous une pièce d'identité ?" },
      { role: "B", text: "Oui, voici ma carte d'identité." },
      { role: "A", text: "La chambre est au troisième étage, chambre trois-cent-deux." },
      { role: "B", text: "Les visites sont jusqu'à quelle heure ?" },
      { role: "A", text: "Jusqu'à vingt heures. L'ascenseur est à droite." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie. Bonne visite." },
    ],
  ),

  // ——— A2-B1 (moyen) ———
  medecin: d(
    { title: "le médecin", vous: "le médecin" },
    { title: "le patient", vous: "le patient" },
    [
      { role: "A", text: "Bonjour, qu'est-ce qui vous amène aujourd'hui ?" },
      { role: "B", text: "Bonjour docteur. Je me sens fatigué et j'ai des maux de tête depuis une semaine." },
      { role: "A", text: "Depuis quand avez-vous ces symptômes exactement ?" },
      { role: "B", text: "Depuis environ sept jours, ça s'aggrave le soir." },
      { role: "A", text: "Avez-vous de la fièvre ou des douleurs ailleurs ?" },
      { role: "B", text: "Pas de fièvre, mais parfois des douleurs dans le dos." },
      { role: "A", text: "Prenez-vous déjà un médicament ?" },
      { role: "B", text: "Oui, du paracétamol, mais ça ne suffit pas." },
      { role: "A", text: "Je vais vous prescrire un traitement et faire une analyse de sang." },
      { role: "B", text: "D'accord. Dois-je revenir pour les résultats ?" },
      { role: "A", text: "Oui, reprenez rendez-vous dans une semaine. Reposez-vous bien." },
    ],
  ),

  accident: d(
    { title: "le secouriste", vous: "le secouriste" },
    { title: "le témoin", vous: "le témoin" },
    [
      { role: "A", text: "Services d'urgence, que s'est-il passé ?" },
      { role: "B", text: "Bonjour, il y a eu un accident de voiture devant chez moi." },
      { role: "A", text: "Où se trouve exactement l'accident ?" },
      { role: "B", text: "Rue de la Gare, au carrefour avec l'avenue du Léman." },
      { role: "A", text: "Combien de personnes sont blessées ?" },
      { role: "B", text: "Deux personnes, elles sont conscientes mais blessées." },
      { role: "A", text: "La circulation est-elle bloquée ?" },
      { role: "B", text: "Oui, la route est fermée dans les deux sens." },
      { role: "A", text: "Restez sur place. Une ambulance arrive dans cinq minutes." },
      { role: "B", text: "D'accord, je reste avec les personnes." },
      { role: "A", text: "Merci. Ne bougez pas les blessés. Les secours arrivent." },
    ],
  ),

  bibliotheque: d(
    { title: "la bibliothécaire", vous: "la bibliothécaire" },
    { title: "le lecteur", vous: "le lecteur" },
    [
      { role: "A", text: "Bonjour, que puis-je faire pour vous ?" },
      { role: "B", text: "Bonjour, je souhaite m'inscrire à la bibliothèque." },
      { role: "A", text: "Habitez-vous dans la commune ?" },
      { role: "B", text: "Oui, j'habite à Lausanne depuis deux ans." },
      { role: "A", text: "Quels types de documents voulez-vous emprunter ?" },
      { role: "B", text: "Des romans et des livres pour apprendre le français." },
      { role: "A", text: "Avez-vous besoin d'informations sur nos horaires ?" },
      { role: "B", text: "Oui, quels sont les horaires d'ouverture ?" },
      { role: "A", text: "Du mardi au samedi, de dix heures à dix-huit heures. Prêt de trois semaines." },
      { role: "B", text: "Parfait. Quels documents faut-il pour s'inscrire ?" },
      { role: "A", text: "Une pièce d'identité et un justificatif de domicile. L'inscription est gratuite." },
    ],
  ),

  boucherie: d(
    { title: "le boucher", vous: "le boucher" },
    { title: "la cliente", vous: "la cliente" },
    [
      { role: "A", text: "Bonjour, qu'est-ce que je vous sers ?" },
      { role: "B", text: "Bonjour, je prépare un dîner pour des amis samedi soir." },
      { role: "A", text: "Pour combien de personnes cuisinez-vous ?" },
      { role: "B", text: "Pour six personnes." },
      { role: "A", text: "Vous préférez une viande à cuire rapidement ?" },
      { role: "B", text: "Oui, quelque chose de simple, peut-être du poulet ou du veau." },
      { role: "A", text: "Est-ce que je vous la prépare en tranches ?" },
      { role: "B", text: "Oui, s'il vous plaît. Et pouvez-vous me conseiller une quantité ?" },
      { role: "A", text: "Pour six personnes, un kilo et demi de blanc de poulet suffit." },
      { role: "B", text: "Parfait. Combien ça coûte ?" },
      { role: "A", text: "Vingt-huit francs le kilo. Ça fait quarante-deux francs en tout." },
    ],
  ),

  boulangerie: d(
    { title: "la boulangère", vous: "la boulangère" },
    { title: "la cliente", vous: "la cliente" },
    [
      { role: "A", text: "Bonjour, qu'est-ce que vous désirez ?" },
      { role: "B", text: "Bonjour, j'organise un petit déjeuner pour dix personnes dimanche." },
      { role: "A", text: "Combien de personnes serez-vous exactement ?" },
      { role: "B", text: "Dix personnes, dont quatre enfants." },
      { role: "A", text: "Voulez-vous aussi des croissants ?" },
      { role: "B", text: "Oui, une vingtaine de croissants et quelques pains au chocolat." },
      { role: "A", text: "Vous payez par carte ou en espèces ?" },
      { role: "B", text: "Par carte, s'il vous plaît. Quel est le prix total ?" },
      { role: "A", text: "Soixante-cinq francs pour le tout. Vous pouvez récupérer dimanche à huit heures." },
      { role: "B", text: "Parfait, merci beaucoup." },
      { role: "A", text: "Je vous en prie. Bon appétit dimanche !" },
    ],
  ),

  bus: d(
    { title: "le conducteur", vous: "le conducteur" },
    { title: "le voyageur", vous: "le voyageur" },
    [
      { role: "A", text: "Bonjour, où souhaitez-vous aller ?" },
      { role: "B", text: "Bonjour, je dois aller au quartier de Montchoisi, mais je ne connais pas le trajet." },
      { role: "A", text: "Avez-vous déjà un billet ?" },
      { role: "B", text: "Non, pas encore." },
      { role: "A", text: "Voulez-vous un aller simple ou un aller-retour ?" },
      { role: "B", text: "Un aller simple suffit, s'il vous plaît." },
      { role: "A", text: "Ça coûte deux francs quatre-vingts." },
      { role: "B", text: "D'accord. Savez-vous à quel arrêt je dois descendre ?" },
      { role: "A", text: "Descendez à l'arrêt Montchoisi, dans environ vingt minutes." },
      { role: "B", text: "C'est le prochain arrêt après le centre-ville ?" },
      { role: "A", text: "Non, après la gare et le parc. Je vous préviendrai." },
      { role: "B", text: "Merci beaucoup, c'est très gentil." },
      { role: "A", text: "De rien. Installez-vous, le bus part maintenant." },
    ],
  ),

  cafe: d(
    { title: "la serveuse", vous: "la serveuse" },
    { title: "le client", vous: "le client" },
    [
      { role: "A", text: "Bonjour, qu'est-ce que vous prenez ?" },
      { role: "B", text: "Bonjour, un cappuccino et un croissant, s'il vous plaît." },
      { role: "A", text: "Vous désirez manger quelque chose d'autre ?" },
      { role: "B", text: "Non merci, c'est suffisant pour le moment." },
      { role: "A", text: "Vous consommez ici ou à emporter ?" },
      { role: "B", text: "Je consomme ici, à la terrasse si possible." },
      { role: "A", text: "Puis-je vous apporter autre chose ?" },
      { role: "B", text: "Une carafe d'eau, s'il vous plaît." },
      { role: "A", text: "Bien sûr. Ça fait neuf francs cinquante en tout." },
      { role: "B", text: "Voici dix francs. Gardez la monnaie." },
      { role: "A", text: "Merci. Je vous apporte tout de suite." },
    ],
  ),

  chaussure: d(
    { title: "le vendeur", vous: "le vendeur" },
    { title: "le client", vous: "le client" },
    [
      { role: "A", text: "Bonjour, quel type de chaussures cherchez-vous ?" },
      { role: "B", text: "Bonjour, je cherche des chaussures de marche confortables." },
      { role: "A", text: "Quelle est votre pointure ?" },
      { role: "B", text: "Pointure quarante-trois, parfois quarante-quatre selon la marque." },
      { role: "A", text: "Quel est votre budget ?" },
      { role: "B", text: "Maximum cent vingt francs." },
      { role: "A", text: "Voulez-vous essayer cette paire ? Elle est très légère." },
      { role: "B", text: "Oui, volontiers. Elles sont disponibles en marron ?" },
      { role: "A", text: "Oui, en marron et en noir. Elles coûtent cent dix francs." },
      { role: "B", text: "Elles me plaisent bien. Je les prends en marron." },
      { role: "A", text: "Excellent choix. Je vous les emballe." },
    ],
  ),

  cinema: d(
    { title: "l'employé", vous: "l'employé" },
    { title: "le spectateur", vous: "le spectateur" },
    [
      { role: "A", text: "Bonjour, quel genre de film souhaitez-vous voir ?" },
      { role: "B", text: "Bonjour, je cherche un film français, peut-être une comédie." },
      { role: "A", text: "Préférez-vous un film en français ou en version originale ?" },
      { role: "B", text: "En français, s'il vous plaît. Avec des sous-titres si possible." },
      { role: "A", text: "À quelle heure voulez-vous commencer la séance ?" },
      { role: "B", text: "Vers dix-neuf heures, après le travail." },
      { role: "A", text: "Bénéficiez-vous d'une réduction ?" },
      { role: "B", text: "Oui, j'ai la carte demi-tarif." },
      { role: "A", text: "La comédie « La Famille » est à dix-neuf heures quinze. Durée : une heure quarante." },
      { role: "B", text: "Parfait. Deux places, s'il vous plaît." },
      { role: "A", text: "Vingt-deux francs. Salle un, au rez-de-chaussée. Bon film !" },
    ],
  ),

  club: d(
    { title: "l'accueil", vous: "l'accueil" },
    { title: "le nouveau membre", vous: "le nouveau membre" },
    [
      { role: "A", text: "Bonjour, quelle activité vous intéresse ?" },
      { role: "B", text: "Bonjour, je voudrais rejoindre le club et faire du tennis." },
      { role: "A", text: "Avez-vous déjà pratiqué cette activité ?" },
      { role: "B", text: "Oui, j'ai joué pendant plusieurs années dans mon pays." },
      { role: "A", text: "Quels jours êtes-vous disponible ?" },
      { role: "B", text: "Le mercredi soir et le samedi matin." },
      { role: "A", text: "Souhaitez-vous faire une séance d'essai ?" },
      { role: "B", text: "Oui, c'est une bonne idée. Quel est le prix de l'inscription ?" },
      { role: "A", text: "Cent cinquante francs par an, plus vingt francs la séance d'essai." },
      { role: "B", text: "D'accord. Faut-il apporter du matériel ?" },
      { role: "A", text: "Une raquette et des chaussures de sport. Bienvenue au club !" },
    ],
  ),

  coiffeur: d(
    { title: "la coiffeuse", vous: "la coiffeuse" },
    { title: "la cliente", vous: "la cliente" },
    [
      { role: "A", text: "Bonjour, qu'est-ce que vous souhaitez faire aujourd'hui ?" },
      { role: "B", text: "Bonjour, je voudrais une nouvelle coupe, un peu plus courte sur les côtés." },
      { role: "A", text: "Quelle longueur voulez-vous garder sur le dessus ?" },
      { role: "B", text: "Environ cinq centimètres, pas trop court." },
      { role: "A", text: "Voulez-vous aussi un shampoing ?" },
      { role: "B", text: "Oui, s'il vous plaît. Et un brushing si possible." },
      { role: "A", text: "Avez-vous une heure à laquelle vous devez partir ?" },
      { role: "B", text: "Oui, je dois partir avant seize heures." },
      { role: "A", text: "Pas de problème. Le service dure environ quarante-cinq minutes." },
      { role: "B", text: "Combien ça coûte en tout ?" },
      { role: "A", text: "Soixante-cinq francs. Asseyez-vous, on commence." },
    ],
  ),

  ecole: d(
    { title: "l'accueil", vous: "l'accueil" },
    { title: "le parent", vous: "le parent" },
    [
      { role: "A", text: "Bonjour, pour quelle classe souhaitez-vous une inscription ?" },
      { role: "B", text: "Bonjour, je voudrais inscrire ma fille en huitième année primaire." },
      { role: "A", text: "Votre enfant était-elle déjà scolarisée en Suisse ?" },
      { role: "B", text: "Non, elle vient d'arriver. Elle était scolarisée en Turquie." },
      { role: "A", text: "Avez-vous apporté ses documents ?" },
      { role: "B", text: "Oui, le certificat de scolarité et les bulletins de notes." },
      { role: "A", text: "Avez-vous besoin d'un accueil parascolaire ?" },
      { role: "B", text: "Oui, le mercredi après-midi et certains soirs." },
      { role: "A", text: "Les cours commencent à huit heures. L'accueil parascolaire coûte deux cents francs par mois." },
      { role: "B", text: "D'accord. Quand commence l'école ?" },
      { role: "A", text: "La rentrée est le vingt août. Je vous donne le dossier à compléter." },
    ],
  ),

  fuite: d(
    { title: "la régie", vous: "la régie" },
    { title: "le locataire", vous: "le locataire" },
    [
      { role: "A", text: "Bonjour, où se trouve la fuite ?" },
      { role: "B", text: "Bonjour, il y a une fuite importante dans la cuisine, sous l'évier." },
      { role: "A", text: "Depuis quand l'eau coule-t-elle ?" },
      { role: "B", text: "Depuis ce matin, vers six heures. Ça empire." },
      { role: "A", text: "Avez-vous fermé l'arrivée d'eau ?" },
      { role: "B", text: "Oui, j'ai fermé le robinet principal tout de suite." },
      { role: "A", text: "Y a-t-il des dégâts chez vos voisins ?" },
      { role: "B", text: "Je ne sais pas, mais l'eau a coulé vers l'appartement du dessous." },
      { role: "A", text: "Un plombier d'urgence arrive dans trente minutes." },
      { role: "B", text: "Merci. Dois-je prévenir mes voisins ?" },
      { role: "A", text: "Oui, et prenez des photos des dégâts pour l'assurance." },
    ],
  ),

  gare: d(
    { title: "l'employé", vous: "l'employé" },
    { title: "le voyageur", vous: "le voyageur" },
    [
      { role: "A", text: "Bonjour, quelle est votre destination ?" },
      { role: "B", text: "Bonjour, je voudrais aller à Genève, puis continuer vers Lyon." },
      { role: "A", text: "Quand souhaitez-vous voyager ?" },
      { role: "B", text: "Demain matin, le plus tôt possible." },
      { role: "A", text: "Voulez-vous un aller simple ou un aller-retour ?" },
      { role: "B", text: "Un aller simple pour Genève, et un billet séparé pour Lyon." },
      { role: "A", text: "Avez-vous un abonnement demi-tarif ?" },
      { role: "B", text: "Oui, voici ma carte." },
      { role: "A", text: "Train à sept heures quarante-cinq, correspondance à Genève à neuf heures. Quai quatre." },
      { role: "B", text: "Combien coûte le billet avec la réduction ?" },
      { role: "A", text: "Quarante-huit francs jusqu'à Genève. Voici votre billet. Bon voyage !" },
    ],
  ),

  hopital: d(
    { title: "l'accueil", vous: "l'accueil" },
    { title: "l'accompagnant", vous: "l'accompagnant" },
    [
      { role: "A", text: "Bonjour, est-ce une urgence ?" },
      { role: "B", text: "Bonjour, oui. J'accompagne ma mère, elle a très mal au ventre." },
      { role: "A", text: "Quels symptômes présente la personne ?" },
      { role: "B", text: "Des douleurs fortes, des nausées et de la fièvre depuis ce matin." },
      { role: "A", text: "Avez-vous sa carte d'assurance ?" },
      { role: "B", text: "Oui, la voici. Et voici sa carte d'identité." },
      { role: "A", text: "Pouvez-vous patienter dans la salle d'attente ? Un médecin va la voir." },
      { role: "B", text: "Combien de temps faut-il attendre ?" },
      { role: "A", text: "Environ trente minutes. Les urgences sont prioritaires." },
      { role: "B", text: "D'accord. Merci." },
      { role: "A", text: "Asseyez-vous ici. Je vous appelle quand c'est prêt." },
    ],
  ),

  immobilier: d(
    { title: "l'agent immobilier", vous: "l'agent immobilier" },
    { title: "le locataire", vous: "le locataire" },
    [
      { role: "A", text: "Bonjour, quel type de logement recherchez-vous ?" },
      { role: "B", text: "Bonjour, je cherche un appartement de quatre pièces avec balcon." },
      { role: "A", text: "Dans quelle région souhaitez-vous habiter ?" },
      { role: "B", text: "À Lausanne ou dans les environs, près des transports publics." },
      { role: "A", text: "Quel loyer maximum pouvez-vous payer ?" },
      { role: "B", text: "Deux mille francs par mois, charges comprises." },
      { role: "A", text: "Quand voulez-vous emménager ?" },
      { role: "B", text: "Le premier juillet, si possible." },
      { role: "A", text: "J'ai un appartement à Pully, mille neuf cents francs. Visite samedi ?" },
      { role: "B", text: "Oui, samedi après-midi me convient. Quels documents faut-il ?" },
      { role: "A", text: "Fiches de salaire, extrait des poursuites et pièce d'identité. À samedi." },
    ],
  ),

  pediatre: d(
    { title: "la secrétaire", vous: "la secrétaire" },
    { title: "le parent", vous: "le parent" },
    [
      { role: "A", text: "Cabinet du pédiatre, bonjour." },
      { role: "B", text: "Bonjour, mon fils est malade, j'ai besoin d'un rendez-vous urgent." },
      { role: "A", text: "Quel âge a votre enfant ?" },
      { role: "B", text: "Il a quatre ans." },
      { role: "A", text: "Quels symptômes a-t-il ?" },
      { role: "B", text: "De la fièvre, une toux forte et il ne mange presque pas." },
      { role: "A", text: "Depuis quand est-il malade ?" },
      { role: "B", text: "Depuis deux jours, et ça s'aggrave depuis hier soir." },
      { role: "A", text: "Pouvez-vous venir cet après-midi ?" },
      { role: "B", text: "Oui, n'importe quelle heure. C'est urgent." },
      { role: "A", text: "Rendez-vous à quinze heures trente. Apportez son carnet de santé." },
    ],
  ),

  pharmacie: d(
    { title: "la pharmacienne", vous: "la pharmacienne" },
    { title: "le client", vous: "le client" },
    [
      { role: "A", text: "Bonjour, quels sont vos symptômes ?" },
      { role: "B", text: "Bonjour, j'ai le nez bouché, un mal de gorge et je tousse." },
      { role: "A", text: "Depuis combien de temps les avez-vous ?" },
      { role: "B", text: "Depuis quatre jours. Ça ne passe pas." },
      { role: "A", text: "Avez-vous des allergies ?" },
      { role: "B", text: "Non, pas d'allergie connue." },
      { role: "A", text: "Prenez-vous d'autres médicaments ?" },
      { role: "B", text: "Non, seulement des vitamines." },
      { role: "A", text: "Je vous conseille ce sirop et des pastilles pour la gorge. Dix-huit francs." },
      { role: "B", text: "Comment je dois les prendre ?" },
      { role: "A", text: "Une cuillère trois fois par jour. Reposez-vous et buvez beaucoup." },
    ],
  ),

  police: d(
    { title: "l'agent de police", vous: "l'agent de police" },
    { title: "le plaignant", vous: "le plaignant" },
    [
      { role: "A", text: "Bonjour, que voulez-vous déclarer ?" },
      { role: "B", text: "Bonjour, on m'a volé mon téléphone portable dans le bus ce matin." },
      { role: "A", text: "Où et quand cela s'est-il passé ?" },
      { role: "B", text: "Vers huit heures trente, dans le bus numéro huit, direction la gare." },
      { role: "A", text: "Pouvez-vous décrire l'objet ?" },
      { role: "B", text: "Un iPhone noir, avec une coque bleue et un écran fissuré." },
      { role: "A", text: "Avez-vous un justificatif ou une photo ?" },
      { role: "B", text: "Oui, j'ai la facture et une photo sur mon ordinateur." },
      { role: "A", text: "Merci. Je note tout pour le rapport. Avez-vous bloqué la carte SIM ?" },
      { role: "B", text: "Oui, j'ai appelé mon opérateur tout de suite." },
      { role: "A", text: "Bien. Voici votre numéro de déclaration. Bonne journée." },
    ],
  ),

  "rendez-vous": d(
    { title: "la secrétaire", vous: "la secrétaire" },
    { title: "l'appelant", vous: "l'appelant" },
    [
      { role: "A", text: "Bonjour, pour quel service appelez-vous ?" },
      { role: "B", text: "Bonjour, j'appelle pour le dentiste, docteur Weber." },
      { role: "A", text: "Souhaitez-vous un nouveau rendez-vous ?" },
      { role: "B", text: "Non, je voudrais déplacer mon rendez-vous de jeudi." },
      { role: "A", text: "Quels jours êtes-vous disponible ?" },
      { role: "B", text: "Lundi ou mardi prochain, de préférence le matin." },
      { role: "A", text: "Puis-je avoir votre nom et votre numéro ?" },
      { role: "B", text: "Maria Santos, zéro sept neuf, trois cent quarante-cinq, douze, vingt." },
      { role: "A", text: "Mardi à dix heures trente, est-ce que cela vous convient ?" },
      { role: "B", text: "Oui, parfait. Merci beaucoup." },
      { role: "A", text: "C'est noté. À mardi. Bonne journée." },
    ],
  ),

  restaurant: d(
    { title: "le serveur", vous: "le serveur" },
    { title: "le client", vous: "le client" },
    [
      { role: "A", text: "Bonjour, avez-vous choisi ?" },
      { role: "B", text: "Bonjour, pas encore. Quel est le plat du jour ?" },
      { role: "A", text: "Souhaitez-vous connaître le plat du jour ? C'est un filet de perche." },
      { role: "B", text: "Ça a l'air bon. Avez-vous des plats végétariens ?" },
      { role: "A", text: "Avez-vous des allergies alimentaires ?" },
      { role: "B", text: "Non, mais je ne mange pas de viande rouge." },
      { role: "A", text: "Que voulez-vous boire ?" },
      { role: "B", text: "Une eau gazeuse et un verre de vin blanc, s'il vous plaît." },
      { role: "A", text: "Je vous propose le risotto aux légumes ou le plat du jour." },
      { role: "B", text: "Le risotto, s'il vous plaît. Et une salade en entrée." },
      { role: "A", text: "Excellent choix. Votre commande arrive dans vingt minutes." },
    ],
  ),

  telephone: d(
    { title: "la secrétaire médicale", vous: "la secrétaire médicale" },
    { title: "le patient", vous: "le patient" },
    [
      { role: "A", text: "Cabinet médical, bonjour. Que puis-je faire pour vous ?" },
      { role: "B", text: "Bonjour, je ne me sens pas bien depuis quelques jours." },
      { role: "A", text: "Quels symptômes avez-vous ?" },
      { role: "B", text: "De la fièvre, des courbatures et une toux sèche." },
      { role: "A", text: "Depuis quand ne vous sentez-vous pas bien ?" },
      { role: "B", text: "Depuis quatre jours. C'est de plus en plus difficile." },
      { role: "A", text: "Êtes-vous disponible aujourd'hui pour un rendez-vous ?" },
      { role: "B", text: "Oui, je peux venir cet après-midi ou demain matin." },
      { role: "A", text: "Le docteur peut vous recevoir aujourd'hui à dix-sept heures." },
      { role: "B", text: "D'accord. Dois-je apporter quelque chose ?" },
      { role: "A", text: "Votre carte d'assurance. À tout à l'heure. Bon courage." },
    ],
  ),

  train: d(
    { title: "l'employé des CFF", vous: "l'employé des CFF" },
    { title: "le voyageur", vous: "le voyageur" },
    [
      { role: "A", text: "Bonjour, quand souhaitez-vous partir pour Sion ?" },
      { role: "B", text: "Bonjour, je suis à Lausanne et je voudrais partir cet après-midi." },
      { role: "A", text: "Avez-vous un abonnement demi-tarif ?" },
      { role: "B", text: "Oui, voici ma carte demi-tarif." },
      { role: "A", text: "Voulez-vous un aller simple ou un aller-retour ?" },
      { role: "B", text: "Un aller-retour, je reviens dimanche soir." },
      { role: "A", text: "Préférez-vous le trajet le plus rapide ?" },
      { role: "B", text: "Oui, et pouvez-vous me dire la durée du trajet ?" },
      { role: "A", text: "Une heure vingt, sans correspondance. Départ à quatorze heures dix, voie cinq." },
      { role: "B", text: "Combien coûte le billet avec la réduction ?" },
      { role: "A", text: "Soixante-deux francs l'aller-retour. Voici votre billet. Bon voyage !" },
    ],
  ),

  travail: d(
    { title: "le recruteur", vous: "le recruteur" },
    { title: "le candidat", vous: "le candidat" },
    [
      { role: "A", text: "Bonjour, pouvez-vous vous présenter ?" },
      { role: "B", text: "Bonjour, je m'appelle Karim Benali. J'ai trente-deux ans et je viens de Lausanne." },
      { role: "A", text: "Quelle expérience avez-vous dans ce domaine ?" },
      { role: "B", text: "J'ai travaillé cinq ans comme vendeur dans un magasin d'électronique." },
      { role: "A", text: "Pourquoi souhaitez-vous travailler avec nous ?" },
      { role: "B", text: "Votre entreprise a une bonne réputation et j'aime le contact avec les clients." },
      { role: "A", text: "Quand pourriez-vous commencer ?" },
      { role: "B", text: "Dans un mois, après mon préavis actuel." },
      { role: "A", text: "Êtes-vous disponible à temps plein ?" },
      { role: "B", text: "Oui, du lundi au vendredi, et le samedi si nécessaire." },
      { role: "A", text: "Merci. Nous vous recontactons dans une semaine." },
    ],
  ),

  vetement: d(
    { title: "la vendeuse", vous: "la vendeuse" },
    { title: "la cliente", vous: "la cliente" },
    [
      { role: "A", text: "Bonjour, que recherchez-vous ?" },
      { role: "B", text: "Bonjour, je cherche une robe pour un mariage le mois prochain." },
      { role: "A", text: "Quelle taille portez-vous ?" },
      { role: "B", text: "Taille trente-huit, parfois quarante selon la coupe." },
      { role: "A", text: "Quelle couleur préférez-vous ?" },
      { role: "B", text: "Bleu marine ou bordeaux, pas de blanc." },
      { role: "A", text: "Quel est votre budget ?" },
      { role: "B", text: "Maximum cent cinquante francs." },
      { role: "A", text: "Voulez-vous l'essayer en cabine ? Cette robe est à cent vingt-neuf francs." },
      { role: "B", text: "Oui, elle est jolie. Je vais l'essayer." },
      { role: "A", text: "Les cabines sont au fond à droite. Dites-moi si vous avez besoin d'une autre taille." },
    ],
  ),
};

export function getPoDialogue(situationId: string): PoDialogueScript {
  return PO_DIALOGUES[situationId] ?? GENERIC_DIALOGUE;
}

export function pickStudentRole(): PoDialogueRole {
  return Math.random() < 0.5 ? "A" : "B";
}

export function roleAssignmentText(
  script: PoDialogueScript,
  studentRole: PoDialogueRole,
): string {
  const student = studentRole === "A" ? script.roleA : script.roleB;
  const interlocutor = studentRole === "A" ? script.roleB : script.roleA;
  return `Vous êtes ${student.title}. Je suis ${interlocutor.title}.`;
}

export function interlocutorLines(
  script: PoDialogueScript,
  studentRole: PoDialogueRole,
): { index: number; text: string; label: string }[] {
  const interlocutorRole: PoDialogueRole = studentRole === "A" ? "B" : "A";
  const label =
    interlocutorRole === "A" ? script.roleA.vous : script.roleB.vous;
  return script.lines
    .map((line, index) => ({ line, index }))
    .filter(({ line }) => line.role === interlocutorRole)
    .map(({ line, index }) => ({ index, text: line.text, label }));
}

export function studentLineIndices(
  script: PoDialogueScript,
  studentRole: PoDialogueRole,
): number[] {
  return script.lines
    .map((line, index) => (line.role === studentRole ? index : -1))
    .filter((index) => index >= 0);
}

export type WritingLevel = "base" | "moyen" | "avance";

export type WritingPrompt = {
  id: string;
  title: string;
  situation: string;
  instruction: string;
  points: string[];
  minWords: number;
  maxWords: number;
};

type Scenario = {
  id: string;
  title: string;
  situation: string;
  recipient: string;
  purpose: string;
  details: [string, string, string, string, string];
  formal?: boolean;
};

const GROUPS: Array<{
  key: string;
  topics: Array<[string, string, string, string, [string, string, string, string, string], boolean?]>;
}> = [
  { key: "transport", topics: [
    ["Téléphone perdu", "Vous avez perdu votre téléphone portable dans un bus.", "service des objets trouvés", "demander de l'aide pour le retrouver", ["votre nom", "le jour et la ligne de bus", "la description du téléphone", "les conséquences de la perte", "les démarches possibles"], true],
    ["Train supprimé", "Votre train a été supprimé et vous êtes arrivé très en retard.", "service clientèle de la compagnie", "demander une explication et une solution", ["la date du voyage", "le trajet prévu", "le retard subi", "les frais occasionnés", "la solution souhaitée"], true],
    ["Abonnement de bus", "Vous souhaitez acheter un abonnement de bus adapté à vos déplacements.", "bureau des transports", "demander des renseignements", ["vos trajets habituels", "la fréquence des voyages", "la durée souhaitée", "votre situation", "les tarifs et documents nécessaires"], true],
    ["Objet oublié dans un taxi", "Vous avez oublié un sac dans un taxi après une course.", "compagnie de taxis", "signaler l'oubli", ["l'heure de la course", "le lieu de départ et d'arrivée", "la description du sac", "son contenu important", "vos coordonnées"], true],
    ["Piste cyclable dangereuse", "Une piste cyclable de votre quartier est devenue dangereuse.", "service communal", "signaler le problème", ["le lieu exact", "le danger observé", "le moment où il apparaît", "les risques pour les usagers", "l'intervention demandée"], true],
  ]},
  { key: "logement", topics: [
    ["Chauffage en panne", "Le chauffage de votre logement ne fonctionne plus.", "propriétaire ou régie", "demander une réparation", ["votre adresse", "la date de la panne", "les pièces concernées", "les difficultés rencontrées", "le délai d'intervention souhaité"], true],
    ["Bruit du voisinage", "Des bruits répétés vous empêchent de dormir dans votre immeuble.", "gérance de l'immeuble", "signaler les nuisances", ["les jours concernés", "les heures du bruit", "la nature des nuisances", "vos démarches précédentes", "une solution raisonnable"], true],
    ["Recherche d'appartement", "Vous avez vu une annonce pour un appartement qui vous intéresse.", "personne qui loue le logement", "demander une visite", ["votre présentation", "la référence de l'annonce", "vos disponibilités", "le nombre d'occupants", "les informations souhaitées"], true],
    ["Déménagement", "Vous allez déménager et vous demandez de l'aide à une connaissance.", "ami ou amie", "organiser le déménagement", ["la date", "la nouvelle adresse", "l'aide nécessaire", "la durée prévue", "ce que vous offrirez après"]],
    ["Dégât d'eau", "Vous découvrez une fuite d'eau dans votre cuisine.", "service d'urgence de la régie", "obtenir une intervention rapide", ["votre adresse", "l'origine apparente", "les dégâts visibles", "les mesures déjà prises", "la manière de vous joindre"], true],
  ]},
  { key: "travail", topics: [
    ["Absence au travail", "Vous êtes malade et ne pouvez pas aller travailler demain.", "responsable", "annoncer votre absence", ["la date", "la raison générale", "la durée probable", "le travail urgent à transmettre", "le moyen de rester joignable"], true],
    ["Candidature", "Une offre d'emploi dans votre domaine vous intéresse.", "responsable du recrutement", "présenter votre candidature", ["le poste", "votre expérience", "vos qualités utiles", "votre disponibilité", "une demande d'entretien"], true],
    ["Changement d'horaire", "Votre nouvel horaire de travail crée une difficulté familiale.", "responsable", "demander un aménagement", ["l'horaire actuel", "la difficulté rencontrée", "les jours concernés", "votre proposition", "les avantages de cette solution"], true],
    ["Formation professionnelle", "Vous souhaitez suivre une formation utile pour votre emploi.", "employeur", "demander une participation", ["le nom de la formation", "les dates", "les compétences acquises", "l'intérêt pour l'entreprise", "le soutien demandé"], true],
    ["Départ d'un collègue", "Un collègue quitte votre équipe et vous organisez un moment de départ.", "équipe de travail", "proposer une organisation", ["la date", "le lieu", "l'activité prévue", "la participation demandée", "la réponse attendue"]],
  ]},
  { key: "formation", topics: [
    ["Cours de français", "Vous cherchez un cours de français compatible avec vos horaires.", "école de langues", "demander des informations", ["votre niveau", "vos disponibilités", "votre objectif", "le format souhaité", "le prix et l'inscription"], true],
    ["Examen manqué", "Vous n'avez pas pu participer à un examen pour une raison importante.", "enseignant ou enseignante", "demander une nouvelle date", ["l'examen concerné", "la date", "la raison de l'absence", "un justificatif disponible", "vos disponibilités"], true],
    ["Projet de groupe", "Un membre de votre groupe ne participe pas au projet commun.", "enseignant ou enseignante", "expliquer la situation", ["le sujet du projet", "la répartition prévue", "le problème rencontré", "ce que vous avez déjà fait", "la solution proposée"], true],
    ["Bibliothèque", "La bibliothèque ne possède pas un livre nécessaire à votre formation.", "bibliothécaire", "demander une solution", ["le titre du livre", "l'auteur", "le cours concerné", "la date limite", "un achat ou un prêt entre bibliothèques"], true],
    ["Atelier annulé", "Un atelier auquel vous étiez inscrit a été annulé sans nouvelle date.", "organisateur", "demander des précisions", ["le nom de l'atelier", "la date prévue", "votre inscription", "l'importance pour vous", "le report ou le remboursement souhaité"], true],
  ]},
  { key: "sante", topics: [
    ["Rendez-vous médical", "Vous devez déplacer un rendez-vous médical.", "cabinet médical", "fixer une nouvelle date", ["votre nom", "la date actuelle", "la raison générale", "vos disponibilités", "la confirmation demandée"], true],
    ["Ordonnance oubliée", "Vous avez quitté le cabinet sans votre ordonnance.", "médecin", "demander l'ordonnance", ["la date de consultation", "le traitement concerné", "le besoin actuel", "le mode d'envoi souhaité", "vos coordonnées"], true],
    ["Activité sportive", "Vous souhaitez commencer une activité sportive adaptée à votre condition.", "centre sportif", "demander conseil", ["votre âge", "votre expérience", "vos disponibilités", "vos objectifs", "les cours et tarifs"], true],
    ["Repas spécial", "Vous avez une allergie alimentaire avant un repas organisé.", "organisateur du repas", "prévenir et proposer une solution", ["l'événement", "l'allergie", "les aliments à éviter", "une alternative possible", "la confirmation souhaitée"], true],
    ["Pharmacie de garde", "Vous avez besoin d'un médicament un dimanche.", "service de santé local", "obtenir une information urgente", ["votre commune", "le moment", "le besoin général", "votre moyen de transport", "l'adresse et les horaires demandés"], true],
  ]},
  { key: "achats", topics: [
    ["Produit défectueux", "Un appareil acheté récemment ne fonctionne plus.", "service après-vente", "demander une réparation ou un échange", ["le produit", "la date d'achat", "le défaut", "les essais effectués", "la solution souhaitée"], true],
    ["Commande incomplète", "Une commande reçue sur Internet est incomplète.", "service clientèle", "signaler les articles manquants", ["le numéro de commande", "la date de livraison", "les articles reçus", "les articles manquants", "l'envoi ou le remboursement demandé"], true],
    ["Marché local", "Vous souhaitez réserver plusieurs produits auprès d'un commerçant du marché.", "commerçant", "passer une commande", ["les produits", "les quantités", "le jour de retrait", "l'heure", "le prix à confirmer"]],
    ["Vêtement à échanger", "Un vêtement offert n'est pas à la bonne taille.", "magasin", "demander les conditions d'échange", ["le vêtement", "la taille reçue", "la taille souhaitée", "le ticket disponible", "le délai d'échange"], true],
    ["Double paiement", "Vous constatez deux fois le même paiement sur votre relevé.", "service de facturation", "faire corriger l'erreur", ["la date", "le montant", "le commerce concerné", "la preuve disponible", "le remboursement demandé"], true],
  ]},
  { key: "administration", topics: [
    ["Document perdu", "Vous avez perdu un document officiel important.", "administration compétente", "demander son remplacement", ["le document", "la date de la perte", "les circonstances", "l'urgence", "les démarches et pièces nécessaires"], true],
    ["Changement d'adresse", "Vous devez annoncer votre nouvelle adresse.", "administration communale", "mettre votre dossier à jour", ["votre identité", "l'ancienne adresse", "la nouvelle adresse", "la date du déménagement", "les justificatifs disponibles"], true],
    ["Facture communale", "Vous ne comprenez pas un montant sur une facture officielle.", "service des finances", "demander une explication", ["la référence", "le montant", "la ligne concernée", "votre compréhension", "la vérification demandée"], true],
    ["Attestation", "Vous avez besoin rapidement d'une attestation pour un dossier.", "secrétariat", "demander le document", ["le type d'attestation", "son utilisation", "la date limite", "le format souhaité", "le mode de réception"], true],
    ["Inscription communale", "Vous venez d'arriver dans une nouvelle commune.", "contrôle des habitants", "préparer votre inscription", ["votre date d'arrivée", "votre situation familiale", "votre adresse", "les documents disponibles", "un rendez-vous possible"], true],
  ]},
  { key: "voisinage", topics: [
    ["Fête de quartier", "Vous souhaitez organiser une fête avec les habitants de votre quartier.", "voisins", "proposer l'événement", ["la date", "le lieu", "les activités", "ce que chacun peut apporter", "la manière de répondre"]],
    ["Déchets", "Des déchets sont régulièrement déposés au mauvais endroit.", "service communal", "signaler la situation", ["le lieu", "les jours concernés", "les déchets observés", "les effets sur le quartier", "une mesure souhaitée"], true],
    ["Jardin partagé", "Vous souhaitez participer au jardin partagé de votre quartier.", "association locale", "demander une place", ["votre présentation", "votre expérience", "vos disponibilités", "ce que vous pouvez apporter", "les conditions d'inscription"], true],
    ["Animal trouvé", "Vous avez trouvé un animal domestique seul dans la rue.", "habitants du quartier", "retrouver son propriétaire", ["le lieu", "le moment", "la description de l'animal", "l'endroit où il se trouve", "vos coordonnées"]],
    ["Éclairage public", "Une rue de votre quartier reste sombre le soir.", "service communal", "demander une réparation", ["la rue", "les lampes concernées", "la durée du problème", "les risques", "une intervention rapide"], true],
  ]},
  { key: "loisirs", topics: [
    ["Invitation", "Vous organisez une sortie et souhaitez inviter une connaissance.", "ami ou amie", "présenter votre invitation", ["l'activité", "la date", "le lieu", "le prix éventuel", "la réponse souhaitée"]],
    ["Club sportif", "Vous voulez rejoindre un club sportif local.", "responsable du club", "demander une séance d'essai", ["le sport", "votre niveau", "vos disponibilités", "votre matériel", "les horaires et tarifs"], true],
    ["Événement culturel", "Vous proposez à un groupe de visiter un événement culturel.", "groupe d'amis", "organiser la visite", ["l'événement", "la date", "le rendez-vous", "le transport", "la réservation"]],
    ["Cours de musique", "Vous cherchez des cours de musique pour vous ou votre enfant.", "école de musique", "demander des informations", ["l'instrument", "le niveau", "l'âge de l'élève", "les disponibilités", "le prix et le matériel"], true],
    ["Bénévolat", "Vous souhaitez aider une association pendant votre temps libre.", "association", "proposer votre aide", ["votre motivation", "vos compétences", "vos disponibilités", "les activités préférées", "la prochaine étape"], true],
  ]},
  { key: "voyage", topics: [
    ["Réservation d'hôtel", "Vous préparez un séjour et souhaitez réserver une chambre.", "hôtel", "demander une réservation", ["les dates", "le nombre de personnes", "le type de chambre", "un besoin particulier", "le prix total"], true],
    ["Bagage endommagé", "Votre valise a été endommagée pendant un voyage.", "compagnie de transport", "demander une indemnisation", ["le trajet", "la date", "les dégâts", "la déclaration déjà faite", "les preuves et la suite"], true],
    ["Visite familiale", "Des proches vont venir vous rendre visite.", "membre de la famille", "préparer leur séjour", ["les dates", "le transport", "le logement", "les activités prévues", "les affaires à apporter"]],
    ["Information touristique", "Vous souhaitez découvrir une région pendant un week-end.", "office du tourisme", "demander des conseils", ["les dates", "vos centres d'intérêt", "votre moyen de transport", "votre budget", "les visites recommandées"], true],
    ["Location de vacances", "Le logement loué pour vos vacances ne correspond pas à l'annonce.", "propriétaire", "signaler les différences", ["la référence", "les dates", "les problèmes constatés", "les preuves", "la solution attendue"], true],
  ]},
  { key: "services", topics: [
    ["Internet en panne", "Votre connexion Internet ne fonctionne plus depuis plusieurs jours.", "fournisseur", "obtenir une réparation", ["votre numéro client", "le début de la panne", "les appareils concernés", "les tests effectués", "le délai et le geste commercial demandés"], true],
    ["Téléphone cassé", "Vous souhaitez faire réparer l'écran de votre téléphone.", "atelier de réparation", "demander un devis", ["le modèle", "le dommage", "le fonctionnement actuel", "le délai souhaité", "le prix et la garantie"], true],
    ["Colis non livré", "Un colis annoncé comme livré n'est pas arrivé.", "service de livraison", "ouvrir une recherche", ["le numéro du colis", "la date annoncée", "l'adresse", "les vérifications faites", "la solution souhaitée"], true],
    ["Rendez-vous oublié", "Un professionnel n'est pas venu au rendez-vous fixé chez vous.", "entreprise concernée", "demander un nouveau rendez-vous", ["la date", "l'heure", "le service prévu", "le temps attendu", "un nouveau créneau"], true],
    ["Contrat à résilier", "Vous souhaitez mettre fin à un abonnement devenu inutile.", "service des abonnements", "demander la résiliation", ["votre numéro client", "le contrat", "la date de fin souhaitée", "la raison générale", "la confirmation écrite"], true],
  ]},
  { key: "famille", topics: [
    ["Garde d'enfant", "Vous cherchez une personne pour garder votre enfant une soirée.", "personne de confiance", "demander son aide", ["la date", "les horaires", "l'âge de l'enfant", "les habitudes importantes", "la rémunération ou le service en retour"]],
    ["Réunion de famille", "Vous préparez une réunion familiale pour une occasion spéciale.", "famille", "organiser la rencontre", ["l'occasion", "la date", "le lieu", "le repas", "la participation de chacun"]],
    ["Activité scolaire", "Votre enfant participera à une activité scolaire et vous avez une question.", "enseignant ou enseignante", "obtenir une précision", ["le nom de l'enfant", "l'activité", "la date", "votre question", "une information médicale ou pratique"], true],
    ["Anniversaire oublié", "Vous avez oublié l'anniversaire d'une personne proche.", "personne concernée", "présenter vos excuses", ["vos excuses", "la raison sans trop vous justifier", "un souvenir positif", "une proposition pour vous rattraper", "vos souhaits"]],
    ["Aide à un proche", "Un proche traverse une période difficile et vous voulez l'aider.", "personne concernée", "proposer votre soutien", ["ce que vous avez appris", "votre disponibilité", "une aide concrète", "le respect de son choix", "une invitation à répondre"]],
  ]},
  { key: "ecole", topics: [
    ["Retard scolaire", "Votre enfant est arrivé plusieurs fois en retard à l'école.", "enseignant ou enseignante", "expliquer et proposer une solution", ["le nom de l'enfant", "les jours concernés", "la cause", "les mesures prises", "votre disponibilité pour en parler"], true],
    ["Sortie scolaire", "Vous souhaitez accompagner une sortie scolaire.", "enseignant ou enseignante", "proposer votre aide", ["la sortie", "la date", "vos disponibilités", "votre expérience", "les tâches possibles"], true],
    ["Matériel perdu", "Votre enfant a perdu du matériel à l'école.", "secrétariat ou enseignant", "demander de vérifier", ["l'objet", "sa description", "le dernier lieu connu", "la date", "vos coordonnées"], true],
    ["Cantine", "Le menu de la cantine pose un problème pour votre enfant.", "responsable de la cantine", "demander une adaptation", ["le nom de l'enfant", "la classe", "le problème alimentaire", "les documents disponibles", "une solution possible"], true],
    ["Entretien", "Vous souhaitez parler des progrès de votre enfant.", "enseignant ou enseignante", "demander un rendez-vous", ["le nom de l'enfant", "la classe", "les sujets à discuter", "vos disponibilités", "le format du rendez-vous"], true],
  ]},
  { key: "banque", topics: [
    ["Carte bloquée", "Votre carte bancaire ne fonctionne plus.", "banque", "faire débloquer ou remplacer la carte", ["votre identité", "le moment du problème", "la dernière utilisation", "votre besoin urgent", "la procédure à suivre"], true],
    ["Virement incorrect", "Vous avez envoyé un virement avec un montant incorrect.", "conseiller bancaire", "demander une solution", ["la date", "le montant", "le bénéficiaire", "l'erreur", "les possibilités d'annulation"], true],
    ["Compte étudiant", "Vous comparez les offres bancaires pour ouvrir un compte.", "banque", "demander des renseignements", ["votre situation", "les services nécessaires", "la carte souhaitée", "les frais", "les documents à fournir"], true],
    ["Prélèvement inconnu", "Un prélèvement inconnu apparaît sur votre compte.", "service de sécurité bancaire", "contester l'opération", ["la date", "le montant", "le nom affiché", "vos vérifications", "le blocage et le remboursement demandés"], true],
    ["Rendez-vous financier", "Vous souhaitez discuter d'un projet important avec votre banque.", "conseiller ou conseillère", "obtenir un rendez-vous", ["le projet", "le montant approximatif", "votre calendrier", "les documents disponibles", "vos disponibilités"], true],
  ]},
  { key: "environnement", topics: [
    ["Arbre dangereux", "Un arbre endommagé menace un passage public.", "service communal", "demander une vérification", ["le lieu", "l'état de l'arbre", "la date d'observation", "les personnes exposées", "l'intervention souhaitée"], true],
    ["Économie d'énergie", "Vous proposez une action pour réduire l'énergie dans votre immeuble.", "voisins ou gérance", "présenter votre idée", ["le problème constaté", "votre proposition", "le coût possible", "les avantages", "la décision demandée"], true],
    ["Nettoyage collectif", "Vous voulez organiser un nettoyage d'un espace naturel.", "habitants ou association", "inviter des participants", ["le lieu", "la date", "le rendez-vous", "le matériel", "l'inscription"]],
    ["Fontaine qui fuit", "Une fontaine publique coule sans arrêt.", "service communal", "signaler le gaspillage", ["le lieu exact", "la durée", "l'importance de la fuite", "les conséquences", "une réparation rapide"], true],
    ["Tri des déchets", "Les consignes de tri de votre immeuble ne sont pas claires.", "gérance", "demander des informations", ["les déchets concernés", "les conteneurs disponibles", "les difficultés", "un affichage souhaité", "la réponse à transmettre aux habitants"], true],
  ]},
  { key: "restauration", topics: [
    ["Réservation au restaurant", "Vous souhaitez réserver une table pour une occasion.", "restaurant", "faire une réservation", ["la date", "l'heure", "le nombre de personnes", "l'occasion", "un besoin alimentaire"], true],
    ["Erreur de commande", "Votre repas livré ne correspond pas à votre commande.", "restaurant", "demander une correction", ["le numéro de commande", "les plats commandés", "les plats reçus", "le problème immédiat", "la solution souhaitée"], true],
    ["Avis positif", "Vous avez apprécié le service d'un établissement.", "responsable de l'établissement", "remercier l'équipe", ["la date", "l'occasion", "les éléments appréciés", "une personne à remercier", "votre recommandation"]],
    ["Repas de groupe", "Vous organisez un repas pour un grand groupe.", "restaurant", "demander une offre", ["la date", "le nombre de personnes", "le budget", "les régimes alimentaires", "le menu et les conditions"], true],
    ["Hygiène", "Vous avez constaté un problème d'hygiène dans un établissement.", "responsable", "signaler le problème", ["la date", "le lieu précis", "le fait observé", "votre réaction", "les mesures attendues"], true],
  ]},
  { key: "culture", topics: [
    ["Billet de spectacle", "Vous avez acheté un billet mais ne pouvez plus assister au spectacle.", "billetterie", "demander un échange", ["le spectacle", "la date", "la référence du billet", "la raison générale", "une autre date ou un avoir"], true],
    ["Exposition", "Vous souhaitez proposer une visite d'exposition à votre classe.", "enseignant ou groupe", "présenter la sortie", ["l'exposition", "le lieu", "les dates", "l'intérêt pédagogique", "l'organisation pratique"]],
    ["Livre emprunté", "Vous avez rendu un livre mais il apparaît encore sur votre compte.", "bibliothèque", "faire corriger votre dossier", ["le titre", "la date de retour", "le lieu de dépôt", "le message reçu", "la vérification demandée"], true],
    ["Atelier créatif", "Vous voulez animer un petit atelier dans une association.", "responsable de l'association", "proposer votre projet", ["le thème", "le public", "la durée", "le matériel", "vos disponibilités"], true],
    ["Article local", "Vous avez assisté à un événement et souhaitez écrire au journal local.", "rédaction du journal", "raconter et donner votre avis", ["l'événement", "le contexte", "les moments importants", "votre opinion", "une amélioration possible"], true],
  ]},
  { key: "numerique", topics: [
    ["Mot de passe", "Vous ne pouvez plus accéder à un service en ligne important.", "assistance technique", "récupérer votre accès", ["votre identifiant", "le moment du blocage", "le message affiché", "les essais effectués", "une méthode de récupération"], true],
    ["Cours en ligne", "Une plateforme de cours n'enregistre pas votre travail.", "support de la plateforme", "faire restaurer votre progression", ["le cours", "la date", "l'activité concernée", "les preuves", "la restauration demandée"], true],
    ["Photo publiée", "Une photo de vous a été publiée sans votre accord.", "responsable du site", "demander son retrait", ["la page", "la photo", "la date de découverte", "votre absence d'accord", "le retrait et la confirmation"], true],
    ["Application utile", "Vous proposez une application numérique à votre groupe.", "camarades ou collègues", "expliquer son intérêt", ["le nom", "son fonctionnement", "un usage concret", "ses limites", "une proposition d'essai"]],
    ["Arnaque en ligne", "Vous avez reçu un message qui semble frauduleux.", "service de sécurité", "signaler le message", ["la date", "l'expéditeur", "le contenu général", "les actions effectuées", "les conseils demandés"], true],
  ]},
  { key: "citoyennete", topics: [
    ["Réunion publique", "Vous souhaitez participer à une réunion sur un projet communal.", "administration communale", "demander les modalités", ["le projet", "la date annoncée", "votre lien avec le quartier", "vos questions", "l'inscription et le lieu"], true],
    ["Passage piéton", "Un endroit fréquenté manque d'un passage piéton sécurisé.", "service communal", "proposer un aménagement", ["le lieu", "les usagers concernés", "les horaires difficiles", "les risques observés", "la mesure proposée"], true],
    ["Association", "Vous souhaitez devenir membre d'une association locale.", "comité", "présenter votre intérêt", ["votre présentation", "votre motivation", "vos compétences", "vos disponibilités", "les conditions d'adhésion"], true],
    ["Information multilingue", "Une information publique importante n'est pas facile à comprendre.", "service responsable", "demander une version accessible", ["le document", "le public concerné", "les difficultés", "le format souhaité", "l'utilité pour la population"], true],
    ["Projet pour les jeunes", "Vous avez une idée d'activité pour les jeunes de votre commune.", "responsable communal", "présenter le projet", ["l'activité", "le public", "le lieu", "les moyens nécessaires", "les bénéfices attendus"], true],
  ]},
  { key: "relations", topics: [
    ["Remerciement", "Une personne vous a beaucoup aidé récemment.", "personne concernée", "la remercier", ["l'aide reçue", "le moment", "ce que cela a changé", "votre reconnaissance", "une invitation ou un geste en retour"]],
    ["Refuser une invitation", "Vous ne pouvez pas accepter une invitation importante.", "personne qui vous invite", "refuser poliment", ["vos remerciements", "la raison générale", "vos regrets", "une autre proposition", "une formule amicale"]],
    ["Malentendu", "Un message a créé un malentendu avec une connaissance.", "personne concernée", "clarifier la situation", ["le message", "votre intention", "ce qui a été mal compris", "vos excuses éventuelles", "une proposition pour en parler"]],
    ["Conseil", "Une connaissance hésite avant de prendre une décision importante.", "personne concernée", "donner un conseil", ["votre compréhension", "les avantages", "les risques", "votre conseil", "votre soutien quel que soit son choix"]],
    ["Nouvelle importante", "Vous devez annoncer un changement important dans votre vie.", "proche", "partager la nouvelle", ["le changement", "la date", "les raisons", "vos émotions", "les conséquences pour vos projets communs"]],
  ]},
];

const SCENARIOS: Scenario[] = GROUPS.flatMap((group) =>
  group.topics.map(([title, situation, recipient, purpose, details, formal], index) => ({
    id: `${group.key}-${index + 1}`,
    title,
    situation,
    recipient,
    purpose,
    details,
    formal,
  })),
);

if (SCENARIOS.length !== 100) {
  throw new Error(`Le catalogue d'expression doit contenir 100 situations (actuellement ${SCENARIOS.length}).`);
}

const LEVEL_CONFIG = {
  base: { minWords: 30, maxWords: 40, format: "un petit message de 4 à 5 phrases", detailCount: 4 },
  moyen: { minWords: 60, maxWords: 80, format: "un courriel organisé", detailCount: 4 },
  avance: { minWords: 120, maxWords: 150, format: "un texte développé et structuré", detailCount: 5 },
} as const;

export function getWritingPrompt(level: WritingLevel, index: number): WritingPrompt {
  const scenario = SCENARIOS[((index % SCENARIOS.length) + SCENARIOS.length) % SCENARIOS.length]!;
  const config = LEVEL_CONFIG[level];
  const tone = scenario.formal && level !== "base" ? "formel " : "";
  const progression = level === "base"
    ? scenario.situation
    : level === "moyen"
      ? `${scenario.situation} Vous devez expliquer clairement la situation.`
      : `${scenario.situation} Malgré une première démarche, la situation n'est pas encore résolue.`;

  return {
    id: scenario.id,
    title: scenario.title,
    situation: progression,
    instruction: `Écrivez ${config.format} ${tone}à ${scenario.recipient} pour ${scenario.purpose}.`,
    points: scenario.details.slice(0, config.detailCount),
    minWords: config.minWords,
    maxWords: config.maxWords,
  };
}

export function randomWritingPrompt(level: WritingLevel): WritingPrompt {
  return getWritingPrompt(level, Math.floor(Math.random() * SCENARIOS.length));
}

export const WRITING_PROMPT_COUNT = SCENARIOS.length;

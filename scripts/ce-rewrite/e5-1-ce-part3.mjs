/** @type {import('./helpers.mjs').ItemSpec[]} */
export const E5_1_CE_PART3 = [
  {
    slug: "e5-1-ce-14",
    text: `Courrier — Assurance SantéPlus

Madame, Monsieur,
Nous confirmons le remboursement de votre consultation du 3 mars.
Montant de la consultation : 120 francs.
Votre assurance rembourse 80 % : 96 francs.
Le reste à votre charge : 24 francs.
Le virement arrive sur votre compte dans dix jours ouvrables.
Pour toute question : service client, 0800 123 456.
Cordialement, SantéPlus`,
    questions: [
      { textQ: "Quelle date de consultation ?", choices: ["Le 3 mars", "Le 30 juin", "Le 1er janvier"], correct: 0, fillQ: "Consultation du 3 _________.", fill: "mars", vfQ: "La consultation est du 3 mars.", vfCorrect: 0 },
      { textQ: "Combien coûte la consultation ?", choices: ["120 francs", "24 francs", "96 francs"], correct: 0, fillQ: "Montant : _________ francs.", fill: "120", fillA: ["cent vingt"], vfQ: "La consultation coûte 120 francs.", vfCorrect: 0 },
      { textQ: "Quel pourcentage rembourse l'assurance ?", choices: ["80 %", "50 %", "10 %"], correct: 0, fillQ: "Votre assurance rembourse _________ %.", fill: "80", vfQ: "L'assurance rembourse 80 %.", vfCorrect: 0 },
      { textQ: "Combien l'assurance rembourse-t-elle ?", choices: ["96 francs", "120 francs", "200 francs"], correct: 0, fillQ: "Remboursement : _________ francs.", fill: "96", fillA: ["quatre-vingt-seize"], vfQ: "Le remboursement est de 96 francs.", vfCorrect: 0 },
      { textQ: "Combien reste à payer ?", choices: ["24 francs", "96 francs", "0 franc"], correct: 0, fillQ: "Le reste à votre charge : _________ francs.", fill: "24", fillA: ["vingt-quatre"], vfQ: "Il reste 24 francs à payer.", vfCorrect: 0 },
      { textQ: "Quand arrive le virement ?", choices: ["Dans dix jours ouvrables", "Dans un an", "Immédiatement en espèces"], correct: 0, fillQ: "Le virement arrive dans dix jours _________.", fill: "ouvrables", vfQ: "Le virement arrive dans dix jours.", vfCorrect: 0 },
      { textQ: "Quel numéro pour les questions ?", choices: ["0800 123 456", "144", "117"], correct: 0, fillQ: "Service client : 0800 123 _________.", fill: "456", vfQ: "Le service client est au 0800 123 456.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-1-ce-15",
    text: `Affiche — Inscription chez un médecin traitant

Pour vous inscrire chez un médecin traitant :
1. Choisissez un médecin près de chez vous.
2. Prenez rendez-vous pour une première consultation.
3. Apportez votre carte d'assurance et une pièce d'identité.
4. Signez le formulaire d'inscription au cabinet.
Votre médecin traitant coordonne vos soins et vos spécialistes.
Vous pouvez changer de médecin traitant une fois par an.`,
    questions: [
      { textQ: "Que faut-il apporter à la première consultation ?", choices: ["Carte d'assurance et pièce d'identité", "Un passeport seulement", "Rien"], correct: 0, fillQ: "Apportez votre carte d'_________.", fill: "assurance", vfQ: "Il faut une pièce d'identité.", vfCorrect: 0 },
      { textQ: "Que signe-t-on au cabinet ?", choices: ["Le formulaire d'inscription", "Un contrat de travail", "Un billet de cinéma"], correct: 0, fillQ: "Signez le formulaire d'_________.", fill: "inscription", vfQ: "On signe le formulaire d'inscription.", vfCorrect: 0 },
      { textQ: "Quel rôle a le médecin traitant ?", choices: ["Coordonner les soins", "Vendre des médicaments", "Conduire le bus"], correct: 0, img: ["médecin", "pharmacien", "chauffeur"], imgCorrect: 0, fillQ: "Votre médecin traitant _________ vos soins.", fill: "coordonne", vfQ: "Le médecin traitant coordonne les soins.", vfCorrect: 0 },
      { textQ: "Combien de fois peut-on changer de médecin traitant par an ?", choices: ["Une fois", "Tous les jours", "Jamais"], correct: 0, fillQ: "Changer une fois par _________.", fill: "an", fillA: ["annee", "année"], vfQ: "On peut changer une fois par an.", vfCorrect: 0 },
      { textQ: "Quelle est la première étape ?", choices: ["Choisir un médecin près de chez soi", "Aller à l'hôpital", "Acheter des médicaments"], correct: 0, fillQ: "Choisissez un médecin près de chez _________.", fill: "vous", vfQ: "La première étape est de choisir un médecin.", vfCorrect: 0 },
      { textQ: "Faut-il un rendez-vous pour s'inscrire ?", choices: ["Oui, pour une première consultation", "Non, jamais", "Seulement par Internet"], correct: 0, fillQ: "Prenez rendez-vous pour une première _________.", fill: "consultation", vfQ: "Il faut un rendez-vous pour la première consultation.", vfCorrect: 0 },
      { textQ: "De quoi parle cette affiche ?", choices: ["De l'inscription chez un médecin traitant", "Des soldes en magasin", "Des vacances"], correct: 0, fillQ: "Inscription chez un médecin _________.", fill: "traitant", vfQ: "L'affiche parle du médecin traitant.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-1-ce-16",
    text: `Consigne — Prise de sang, laboratoire

Votre rendez-vous est vendredi 11 avril à 7 h 30.
Jeûne obligatoire : ne mangez rien pendant 12 heures avant le prélèvement.
Vous pouvez boire de l'eau plate.
Prenez vos ordonnances et votre carte d'assurance.
Évitez l'alcool la veille.
Résultats disponibles sur Internet dans 48 heures ou au guichet du laboratoire.`,
    questions: [
      { textQ: "Quel jour est le rendez-vous ?", choices: ["Vendredi 11 avril", "Lundi 1er mai", "Dimanche 15 juin"], correct: 0, fillQ: "Rendez-vous vendredi 11 _________.", fill: "avril", vfQ: "C'est vendredi 11 avril.", vfCorrect: 0 },
      { textQ: "À quelle heure ?", choices: ["À 7 h 30", "À 14 h", "À 22 h"], correct: 0, fillQ: "Rendez-vous à 7 h _________.", fill: "30", fillA: ["trente"], vfQ: "Le RDV est à 7 h 30.", vfCorrect: 0 },
      { textQ: "Combien de temps de jeûne ?", choices: ["12 heures", "2 heures", "48 heures"], correct: 0, fillQ: "Jeûne : _________ heures avant le prélèvement.", fill: "12", fillA: ["douze"], vfQ: "Le jeûne est de 12 heures.", vfCorrect: 0 },
      { textQ: "Peut-on boire de l'eau ?", choices: ["Oui, de l'eau plate", "Non, rien du tout", "Oui, du café"], correct: 0, fillQ: "Vous pouvez boire de l'eau _________.", fill: "plate", vfQ: "On peut boire de l'eau plate.", vfCorrect: 0 },
      { textQ: "Que faut-il éviter la veille ?", choices: ["L'alcool", "L'eau", "Le sommeil"], correct: 0, fillQ: "Évitez l'_________ la veille.", fill: "alcool", vfQ: "Il faut éviter l'alcool la veille.", vfCorrect: 0 },
      { textQ: "Quand sont les résultats sur Internet ?", choices: ["Dans 48 heures", "Dans 5 minutes", "Dans 6 mois"], correct: 0, fillQ: "Résultats sur Internet dans _________ heures.", fill: "48", fillA: ["quarante-huit"], vfQ: "Les résultats sont en 48 heures.", vfCorrect: 0 },
      { textQ: "Que faut-il apporter ?", choices: ["Ordonnances et carte d'assurance", "Un sandwich", "Des chaussures"], correct: 0, fillQ: "Prenez vos ordonnances et votre carte d'_________.", fill: "assurance", vfQ: "Il faut les ordonnances et la carte d'assurance.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-1-ce-17",
    text: `Permanence médicale de nuit — Région lémanique

De 19 h à 7 h du matin, le cabinet de votre médecin est fermé.
Pour un problème médical la nuit, appelez d'abord le 0844 000 000.
Un médecin de garde vous rappelle dans les 30 minutes.
Si c'est une urgence vitale, composez directement le 144.
La consultation de nuit coûte environ 150 francs (remboursée en partie par l'assurance).
Gardez votre carte d'assurance à portée de main.`,
    questions: [
      { textQ: "Quand le cabinet est-il fermé ?", choices: ["De 19 h à 7 h", "De 8 h à 18 h", "Jamais"], correct: 0, fillQ: "De 19 h à 7 h du _________.", fill: "matin", vfQ: "Le cabinet est fermé la nuit.", vfCorrect: 0 },
      { textQ: "Quel numéro appeler la nuit ?", choices: ["0844 000 000", "117", "118"], correct: 0, fillQ: "Appelez le 0844 000 _________.", fill: "000", vfQ: "Le numéro de garde est 0844 000 000.", vfCorrect: 0 },
      { textQ: "En combien de temps le médecin rappelle-t-il ?", choices: ["Dans les 30 minutes", "Dans 3 jours", "Jamais"], correct: 0, fillQ: "Rappel dans les _________ minutes.", fill: "30", fillA: ["trente"], vfQ: "Le médecin rappelle dans 30 minutes.", vfCorrect: 0 },
      { textQ: "Quel numéro pour une urgence vitale ?", choices: ["Le 144", "Le 0844 000 000", "Le 0900"], correct: 0, fillQ: "Urgence vitale : composez le _________.", fill: "144", vfQ: "Pour une urgence vitale, c'est le 144.", vfCorrect: 0 },
      { textQ: "Combien coûte environ la consultation de nuit ?", choices: ["150 francs", "15 francs", "1500 francs"], correct: 0, fillQ: "Consultation de nuit : environ _________ francs.", fill: "150", fillA: ["cent cinquante"], vfQ: "La consultation de nuit coûte 150 francs.", vfCorrect: 0 },
      { textQ: "L'assurance rembourse-t-elle une partie ?", choices: ["Oui, en partie", "Non, jamais", "Oui, tout"], correct: 0, fillQ: "Remboursée en partie par l'_________.", fill: "assurance", vfQ: "L'assurance rembourse en partie.", vfCorrect: 0 },
      { textQ: "Que faut-il garder à portée de main ?", choices: ["La carte d'assurance", "Un livre", "Un parapluie"], correct: 0, fillQ: "Gardez votre carte d'_________.", fill: "assurance", vfQ: "Il faut garder sa carte d'assurance.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-1-ce-18",
    text: `Affiche — Urgences dentaires

Douleur dentaire forte un dimanche ?
Appelez le 0840 840 848 (service dentaire de garde).
Un dentiste vous reçoit le jour même ou le lendemain matin.
Apportez votre carte d'assurance.
Le service est pour les urgences seulement (douleur, abcès, dent cassée).
Pour un simple contrôle, prenez rendez-vous en semaine chez votre dentiste.`,
    questions: [
      { textQ: "Quel numéro pour une urgence dentaire ?", choices: ["0840 840 848", "144", "117"], correct: 0, fillQ: "Appelez le 0840 840 _________.", fill: "848", vfQ: "Le numéro est 0840 840 848.", vfCorrect: 0 },
      { textQ: "Quand appeler selon l'exemple ?", choices: ["Un dimanche", "Un mardi en journée", "En août seulement"], correct: 0, fillQ: "Douleur dentaire forte un _________ ?", fill: "dimanche", vfQ: "L'exemple parle d'un dimanche.", vfCorrect: 0 },
      { textQ: "Quand le dentiste reçoit-il ?", choices: ["Le jour même ou le lendemain matin", "Dans un mois", "Jamais"], correct: 0, img: ["dentiste", "médecin", "pharmacien"], imgCorrect: 0, fillQ: "Reçu le jour même ou le lendemain _________.", fill: "matin", vfQ: "Le dentiste reçoit rapidement.", vfCorrect: 0 },
      { textQ: "Pour quels problèmes ?", choices: ["Douleur, abcès, dent cassée", "Un simple contrôle", "Acheter un livre"], correct: 0, fillQ: "Urgences : douleur, abcès, dent _________.", fill: "cassée", fillA: ["cassee"], vfQ: "Une dent cassée est une urgence.", vfCorrect: 0 },
      { textQ: "Faut-il la carte d'assurance ?", choices: ["Oui", "Non", "Seulement en été"], correct: 0, fillQ: "Apportez votre carte d'_________.", fill: "assurance", vfQ: "Il faut la carte d'assurance.", vfCorrect: 0 },
      { textQ: "Pour un simple contrôle, que faire ?", choices: ["Prendre RDV en semaine chez son dentiste", "Appeler le 0840", "Aller aux urgences"], correct: 0, fillQ: "Prenez rendez-vous en _________ chez votre dentiste.", fill: "semaine", vfQ: "Un contrôle se fait en semaine chez son dentiste.", vfCorrect: 0 },
      { textQ: "Le service est-il pour toutes les visites ?", choices: ["Non, urgences seulement", "Oui, tout", "Oui, gratuit toujours"], correct: 0, fillQ: "Service pour les _________ seulement.", fill: "urgences", vfQ: "C'est pour les urgences seulement.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-1-ce-19",
    text: `Règlement — Annulation de rendez-vous

Si vous ne pouvez pas venir à votre rendez-vous :
— appelez le secrétariat au moins 24 heures avant ;
— ou annulez sur notre site Internet.
En cas d'annulation tardive (moins de 24 h), des frais de 50 francs peuvent être facturés.
En cas d'absence sans prévenir, les frais sont de 80 francs.
Merci de respecter ces règles pour libérer le créneau pour d'autres patients.`,
    questions: [
      { textQ: "Combien de temps avant faut-il annuler ?", choices: ["Au moins 24 heures", "5 minutes", "1 mois"], correct: 0, fillQ: "Appelez au moins _________ heures avant.", fill: "24", fillA: ["vingt-quatre"], vfQ: "Il faut annuler 24 h avant.", vfCorrect: 0 },
      { textQ: "Comment peut-on annuler ?", choices: ["Par téléphone ou sur Internet", "Par courrier seulement", "En criant"], correct: 0, fillQ: "Annulez sur notre site _________.", fill: "Internet", fillA: ["internet"], vfQ: "On peut annuler sur Internet.", vfCorrect: 0 },
      { textQ: "Combien coûte une annulation tardive ?", choices: ["50 francs", "0 franc", "500 francs"], correct: 0, fillQ: "Frais de _________ francs.", fill: "50", fillA: ["cinquante"], vfQ: "L'annulation tardive coûte 50 francs.", vfCorrect: 0 },
      { textQ: "Combien coûte une absence sans prévenir ?", choices: ["80 francs", "20 francs", "0 franc"], correct: 0, fillQ: "Absence sans prévenir : _________ francs.", fill: "80", fillA: ["quatre-vingts"], vfQ: "L'absence sans prévenir coûte 80 francs.", vfCorrect: 0 },
      { textQ: "À qui profite l'annulation à temps ?", choices: ["D'autres patients", "Le médecin seulement", "Personne"], correct: 0, fillQ: "Libérer le créneau pour d'autres _________.", fill: "patients", vfQ: "L'annulation libère un créneau pour d'autres patients.", vfCorrect: 0 },
      { textQ: "Qui faut-il appeler pour annuler ?", choices: ["Le secrétariat", "La police", "Le boulanger"], correct: 0, fillQ: "Appelez le _________.", fill: "secrétariat", fillA: ["secretariat"], vfQ: "On appelle le secrétariat.", vfCorrect: 0 },
      { textQ: "De quoi parle ce texte ?", choices: ["Des règles d'annulation de RDV", "D'un menu", "D'un voyage"], correct: 0, fillQ: "Annulation de _________.", fill: "rendez-vous", fillA: ["rendez vous"], vfQ: "Le texte parle de l'annulation de rendez-vous.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-1-ce-20",
    text: `Panneau — Pharmacie interne, Hôpital Central

La pharmacie de l'hôpital est au rez-de-chaussée, aile B.
Ouverte du lundi au vendredi, 8 h–18 h.
Elle délivre les médicaments prescrits pendant votre hospitalisation.
Présentez votre bracelet patient et l'ordonnance de l'hôpital.
Les médicaments pour sortie sont préparés 2 heures avant votre départ.
Pour les urgences la nuit, une pharmacie de garde est indiquée à l'accueil.`,
    questions: [
      { textQ: "Où est la pharmacie de l'hôpital ?", choices: ["Rez-de-chaussée, aile B", "3e étage", "Parking"], correct: 0, img: ["pharmacie", "hôpital", "école"], imgCorrect: 0, fillQ: "Pharmacie au rez-de-chaussée, aile _________.", fill: "B", vfQ: "La pharmacie est aile B au RDC.", vfCorrect: 0 },
      { textQ: "Quels jours est-elle ouverte ?", choices: ["Lundi au vendredi", "Samedi et dimanche", "Tous les jours 24 h"], correct: 0, fillQ: "Ouverte du lundi au _________.", fill: "vendredi", vfQ: "Ouverte en semaine.", vfCorrect: 0 },
      { textQ: "Quels médicaments délivre-t-elle ?", choices: ["Ceux prescrits à l'hôpital", "Des vêtements", "Des billets de train"], correct: 0, fillQ: "Médicaments prescrits pendant votre _________.", fill: "hospitalisation", vfQ: "Ce sont les médicaments de l'hôpital.", vfCorrect: 0 },
      { textQ: "Que faut-il présenter ?", choices: ["Bracelet patient et ordonnance", "Un passeport seulement", "Rien"], correct: 0, fillQ: "Présentez votre bracelet _________.", fill: "patient", vfQ: "Il faut le bracelet patient.", vfCorrect: 0 },
      { textQ: "Quand sont préparés les médicaments de sortie ?", choices: ["2 heures avant le départ", "1 semaine avant", "Après le départ"], correct: 0, fillQ: "Préparés _________ heures avant votre départ.", fill: "2", fillA: ["deux"], vfQ: "Préparation 2 h avant le départ.", vfCorrect: 0 },
      { textQ: "Où trouver une pharmacie de garde la nuit ?", choices: ["À l'accueil de l'hôpital", "À la gare", "Sur Internet seulement"], correct: 0, fillQ: "Pharmacie de garde indiquée à l'_________.", fill: "accueil", vfQ: "L'accueil indique la pharmacie de garde.", vfCorrect: 0 },
      { textQ: "À quelle heure ferme la pharmacie ?", choices: ["À 18 h", "À 8 h", "À minuit"], correct: 0, fillQ: "Ouverte de 8 h à _________ h.", fill: "18", fillA: ["dix-huit"], vfQ: "Fermeture à 18 h.", vfCorrect: 0 },
    ],
  },
];

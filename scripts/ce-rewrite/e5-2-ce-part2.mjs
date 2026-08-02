/** @type {import('./helpers.mjs').ItemSpec[]} */
export const E5_2_CE_PART2 = [
  {
    slug: "e5-2-ce-11",
    text: `Horaires spéciaux — Pharmacie des Alpes

Dimanche et jours fériés : ouvert de 10 h à 14 h uniquement.
Le 25 décembre et le 1er janvier : fermé.
Pharmacie de garde la nuit : composez le 1818.
Pendant les vacances d'été (juillet–août) : ouverture continue de 8 h à 20 h en semaine.
Merci de votre compréhension.`,
    questions: [
      { textQ: "Quels horaires le dimanche ?", choices: ["10 h–14 h", "8 h–20 h", "Fermé"], correct: 0, fillQ: "Dimanche : 10 h à _________ h.", fill: "14", fillA: ["quatorze"], vfQ: "Dimanche 10 h–14 h.", vfCorrect: 0 },
      { textQ: "Quand la pharmacie est-elle fermée ?", choices: ["25 décembre et 1er janvier", "Tous les mardis", "En juin"], correct: 0, fillQ: "Fermé le 25 _________ et le 1er janvier.", fill: "décembre", fillA: ["decembre"], vfQ: "Fermé Noël et Nouvel An.", vfCorrect: 0 },
      { textQ: "Quel numéro la nuit ?", choices: ["1818", "144", "117"], correct: 0, fillQ: "Composez le _________.", fill: "1818", vfQ: "Le 1818 la nuit.", vfCorrect: 0 },
      { textQ: "Horaires été en semaine ?", choices: ["8 h–20 h", "10 h–14 h", "Fermé"], correct: 0, fillQ: "Ouverture de 8 h à _________ h.", fill: "20", fillA: ["vingt"], vfQ: "Été : 8 h–20 h.", vfCorrect: 0 },
      { textQ: "Quels mois d'été ?", choices: ["Juillet et août", "Janvier et février", "Mai et juin"], correct: 0, fillQ: "Vacances d'été (juillet–_________).", fill: "août", fillA: ["aout"], vfQ: "Juillet–août.", vfCorrect: 0 },
      { textQ: "La pharmacie est-elle ouverte les jours fériés ?", choices: ["Oui, 10 h–14 h", "Non, jamais", "24 h"], correct: 0, fillQ: "Jours fériés : 10 h à _________ h.", fill: "14", vfQ: "Fériés : 10 h–14 h.", vfCorrect: 0 },
      { textQ: "De quoi parle ce texte ?", choices: ["Horaires spéciaux", "Recette de cuisine", "Horaires de bus"], correct: 0, fillQ: "Horaires _________.", fill: "spéciaux", fillA: ["speciaux"], vfQ: "Horaires spéciaux.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-12",
    text: `Flyer — Test rapide COVID en pharmacie

Test antigénique disponible sans rendez-vous.
Résultat en 15 minutes.
Prix : 25 francs (non remboursé par l'assurance de base).
Apportez une pièce d'identité.
Pour les personnes avec symptômes ou contact avec une personne positive.
Si le test est positif, isolez-vous et informez vos contacts.`,
    questions: [
      { textQ: "Faut-il un rendez-vous ?", choices: ["Non", "Oui", "Oui, 1 mois avant"], correct: 0, fillQ: "Disponible sans _________.", fill: "rendez-vous", fillA: ["rendez vous"], vfQ: "Sans rendez-vous.", vfCorrect: 0 },
      { textQ: "Résultat en combien de temps ?", choices: ["15 minutes", "15 jours", "15 heures"], correct: 0, fillQ: "Résultat en _________ minutes.", fill: "15", fillA: ["quinze"], vfQ: "15 minutes.", vfCorrect: 0 },
      { textQ: "Quel prix ?", choices: ["25 francs", "250 francs", "Gratuit"], correct: 0, fillQ: "Prix : _________ francs.", fill: "25", fillA: ["vingt-cinq"], vfQ: "25 francs.", vfCorrect: 0 },
      { textQ: "L'assurance de base rembourse-t-elle ?", choices: ["Non", "Oui, tout", "Oui, 80 %"], correct: 0, fillQ: "Non remboursé par l'assurance de _________.", fill: "base", vfQ: "Non remboursé.", vfCorrect: 0 },
      { textQ: "Que faut-il apporter ?", choices: ["Pièce d'identité", "Un chat", "Un vélo"], correct: 0, fillQ: "Apportez une pièce d'_________.", fill: "identité", fillA: ["identite"], vfQ: "Pièce d'identité.", vfCorrect: 0 },
      { textQ: "Pour qui est le test ?", choices: ["Symptômes ou contact positif", "Tout le monde sans raison", "Enfants seulement"], correct: 0, fillQ: "Personnes avec _________ ou contact positif.", fill: "symptômes", fillA: ["symptomes"], vfQ: "Symptômes ou contact.", vfCorrect: 0 },
      { textQ: "Que faire si positif ?", choices: ["S'isoler et informer les contacts", "Aller au cinéma", "Rien"], correct: 0, fillQ: "_________ et informez vos contacts.", fill: "Isolez-vous", fillA: ["isolez vous", "Isolement"], vfQ: "S'isoler si positif.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-13",
    text: `Consigne — Conservation des médicaments

Rangez vos médicaments dans un endroit sec, à l'abri de la lumière.
Température idéale : 15–25 °C.
Ne conservez pas les médicaments dans la salle de bain (humidité).
Vérifiez la date de péremption régulièrement.
Les médicaments périmés : rapportez-les en pharmacie, ne les jetez pas.
Gardez les médicaments hors de portée des enfants.`,
    questions: [
      { textQ: "Où ne pas ranger les médicaments ?", choices: ["Dans la salle de bain", "Dans un placard sec", "Dans une armoire"], correct: 0, fillQ: "Pas dans la salle de _________.", fill: "bain", vfQ: "Pas dans la salle de bain.", vfCorrect: 0 },
      { textQ: "Quelle température idéale ?", choices: ["15–25 °C", "0–5 °C", "50–60 °C"], correct: 0, fillQ: "Température : 15–25 _________.", fill: "°C", vfQ: "15–25 °C.", vfCorrect: 0 },
      { textQ: "Que faire des médicaments périmés ?", choices: ["Les rapporter en pharmacie", "Les manger", "Les donner aux voisins"], correct: 0, img: ["pharmacie", "hôpital", "école"], imgCorrect: 0, fillQ: "Rapportez-les en _________.", fill: "pharmacie", vfQ: "Rapporter en pharmacie.", vfCorrect: 0 },
      { textQ: "Où garder les médicaments par rapport aux enfants ?", choices: ["Hors de portée", "Sur la table basse", "Dans leur chambre"], correct: 0, fillQ: "Hors de _________ des enfants.", fill: "portée", fillA: ["portee"], vfQ: "Hors de portée des enfants.", vfCorrect: 0 },
      { textQ: "Quel endroit idéal ?", choices: ["Sec, à l'abri de la lumière", "Humide et ensoleillé", "Dehors"], correct: 0, fillQ: "Endroit _______, à l'abri de la lumière.", fill: "sec", vfQ: "Endroit sec.", vfCorrect: 0 },
      { textQ: "Que vérifier régulièrement ?", choices: ["La date de péremption", "La couleur des murs", "L'heure du train"], correct: 0, fillQ: "Vérifiez la date de _________.", fill: "péremption", fillA: ["peremption"], vfQ: "Vérifier la péremption.", vfCorrect: 0 },
      { textQ: "Peut-on jeter les médicaments aux ordures ?", choices: ["Non", "Oui", "Oui, toujours"], correct: 0, fillQ: "Ne les _________ pas.", fill: "jetez", vfQ: "Ne pas jeter aux ordures.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-14",
    text: `Affiche — Pharmacie de la Gare

Située dans la gare, hall principal, à côté de la billetterie.
Ouverte tous les jours de 7 h à 22 h.
Idéale pour les voyageurs : pansements, médicaments contre le mal des transports, crème solaire.
Ordonnances acceptées. Conseils en plusieurs langues : français, allemand, anglais.
Accès PMR (personnes à mobilité réduite) par ascenseur.`,
    questions: [
      { textQ: "Où est la pharmacie ?", choices: ["Dans la gare, hall principal", "À la plage", "Dans un champ"], correct: 0, img: ["gare", "pharmacie", "aéroport"], imgCorrect: 0, fillQ: "Dans la _________, hall principal.", fill: "gare", vfQ: "Dans la gare.", vfCorrect: 0 },
      { textQ: "Quels horaires ?", choices: ["7 h–22 h tous les jours", "10 h–12 h le lundi", "Fermée"], correct: 0, fillQ: "Ouverte de 7 h à _________ h.", fill: "22", fillA: ["vingt-deux"], vfQ: "7 h–22 h.", vfCorrect: 0 },
      { textQ: "À côté de quoi ?", choices: ["La billetterie", "La piscine", "Le stade"], correct: 0, fillQ: "À côté de la _________.", fill: "billetterie", vfQ: "À côté billetterie.", vfCorrect: 0 },
      { textQ: "Quel produit pour les voyageurs ?", choices: ["Médicaments mal des transports", "Des skis", "Des livres"], correct: 0, fillQ: "Médicaments contre le mal des _________.", fill: "transports", vfQ: "Mal des transports.", vfCorrect: 0 },
      { textQ: "Quelles langues pour les conseils ?", choices: ["Français, allemand, anglais", "Latin seulement", "Aucune"], correct: 0, fillQ: "Conseils en français, allemand, _________.", fill: "anglais", vfQ: "FR, DE, EN.", vfCorrect: 0 },
      { textQ: "Comment accéder en fauteuil roulant ?", choices: ["Par ascenseur", "Par escalier seulement", "Impossible"], correct: 0, fillQ: "Accès PMR par _________.", fill: "ascenseur", vfQ: "Par ascenseur.", vfCorrect: 0 },
      { textQ: "Pour qui est cette pharmacie idéale ?", choices: ["Les voyageurs", "Les agriculteurs", "Les plongeurs"], correct: 0, fillQ: "Idéale pour les _________.", fill: "voyageurs", vfQ: "Pour les voyageurs.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-15",
    text: `Message affiché — Rupture temporaire de stock

Chers clients,
Le médicament Dolirène 500 mg est temporairement indisponible.
Notre pharmacien propose un médicament équivalent : ParaGène 500 mg.
Même principe actif, même efficacité.
Délai de réapprovisionnement : environ 5 jours.
Pour toute question, parlez au comptoir 1.
Merci de votre patience.`,
    questions: [
      { textQ: "Quel médicament est indisponible ?", choices: ["Dolirène 500 mg", "ParaGène 500 mg", "Aspirine"], correct: 0, fillQ: "Le médicament Dolirène _________ mg.", fill: "500", vfQ: "Dolirène 500 mg indisponible.", vfCorrect: 0 },
      { textQ: "Quel substitut propose-t-on ?", choices: ["ParaGène 500 mg", "Dolirène 1000 mg", "Rien"], correct: 0, fillQ: "Propose : ParaGène _________ mg.", fill: "500", vfQ: "ParaGène 500 mg proposé.", vfCorrect: 0 },
      { textQ: "Le substitut a-t-il le même effet ?", choices: ["Oui, même efficacité", "Non", "On ne sait pas"], correct: 0, fillQ: "Même _________ actif, même efficacité.", fill: "principe", vfQ: "Même efficacité.", vfCorrect: 0 },
      { textQ: "Délai de réapprovisionnement ?", choices: ["Environ 5 jours", "5 heures", "5 mois"], correct: 0, fillQ: "Réapprovisionnement : _________ jours.", fill: "5", fillA: ["cinq"], vfQ: "5 jours.", vfCorrect: 0 },
      { textQ: "Où poser des questions ?", choices: ["Comptoir 1", "Comptoir 9", "Dehors"], correct: 0, fillQ: "Parlez au comptoir _________.", fill: "1", vfQ: "Comptoir 1.", vfCorrect: 0 },
      { textQ: "La rupture est-elle définitive ?", choices: ["Non, temporaire", "Oui, pour toujours", "Oui, 10 ans"], correct: 0, fillQ: "Temporairement _________.", fill: "indisponible", vfQ: "Rupture temporaire.", vfCorrect: 0 },
      { textQ: "Qui propose le substitut ?", choices: ["Le pharmacien", "Le client", "Le facteur"], correct: 0, img: ["pharmacien", "vendeur", "facteur"], imgCorrect: 0, fillQ: "Notre _________ propose un équivalent.", fill: "pharmacien", vfQ: "Le pharmacien propose.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-16",
    text: `Flyer — Produits naturels et homéopathie

Nouveau rayon produits naturels au sous-sol.
Conseils avec notre spécialiste M. Weber, mardi et jeudi 14 h–18 h.
Produits bio, huiles essentielles, homéopathie.
Pas de remboursement assurance pour la plupart des produits.
Essai gratuit d'une crème mains bio ce samedi.`,
    questions: [
      { textQ: "Où est le nouveau rayon ?", choices: ["Au sous-sol", "Sur le toit", "Dehors"], correct: 0, fillQ: "Rayon au _________.", fill: "sous-sol", fillA: ["sous sol"], vfQ: "Au sous-sol.", vfCorrect: 0 },
      { textQ: "Qui est le spécialiste ?", choices: ["M. Weber", "Mme Keller", "Dr Martin"], correct: 0, fillQ: "Spécialiste M. _________.", fill: "Weber", vfQ: "M. Weber.", vfCorrect: 0 },
      { textQ: "Quels jours le spécialiste ?", choices: ["Mardi et jeudi", "Lundi seulement", "Dimanche"], correct: 0, fillQ: "Mardi et _________, 14 h–18 h.", fill: "jeudi", vfQ: "Mardi et jeudi.", vfCorrect: 0 },
      { textQ: "L'assurance rembourse-t-elle ces produits ?", choices: ["Non pour la plupart", "Oui, tout", "Oui, 100 %"], correct: 0, fillQ: "Pas de remboursement pour la _________ des produits.", fill: "plupart", vfQ: "Pas remboursé en général.", vfCorrect: 0 },
      { textQ: "Quel essai gratuit samedi ?", choices: ["Crème mains bio", "Voiture", "Billet de train"], correct: 0, fillQ: "Essai gratuit d'une crème mains _________.", fill: "bio", vfQ: "Crème mains bio.", vfCorrect: 0 },
      { textQ: "Quels produits trouve-t-on ?", choices: ["Bio, huiles essentielles, homéopathie", "Voitures", "Meubles"], correct: 0, fillQ: "Produits _______, huiles essentielles.", fill: "bio", vfQ: "Produits naturels.", vfCorrect: 0 },
      { textQ: "Quelles heures avec le spécialiste ?", choices: ["14 h–18 h", "6 h–7 h", "22 h–23 h"], correct: 0, fillQ: "14 h à _________ h.", fill: "18", fillA: ["dix-huit"], vfQ: "14 h–18 h.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-17",
    text: `Panneau — Paiement en pharmacie

Modes de paiement acceptés : espèces, carte bancaire (EC, Visa, Mastercard), Twint.
Pas de paiement par chèque.
Facture remise à chaque achat pour remboursement assurance.
Pour les ordonnances : la part assurance est déduite automatiquement si vous présentez votre carte.
Ticket de caisse à conserver.`,
    questions: [
      { textQ: "Peut-on payer par chèque ?", choices: ["Non", "Oui", "Oui, seulement le dimanche"], correct: 0, fillQ: "Pas de paiement par _________.", fill: "chèque", fillA: ["cheque"], vfQ: "Pas de chèque.", vfCorrect: 0 },
      { textQ: "Quels modes de paiement ?", choices: ["Espèces, carte, Twint", "Seulement espèces", "Points fidélité"], correct: 0, fillQ: "Espèces, carte bancaire, _________.", fill: "Twint", vfQ: "Espèces, carte, Twint.", vfCorrect: 0 },
      { textQ: "Que reçoit-on pour le remboursement ?", choices: ["Une facture", "Un cadeau", "Rien"], correct: 0, fillQ: "_________ remise à chaque achat.", fill: "Facture", vfQ: "Une facture.", vfCorrect: 0 },
      { textQ: "Pour les ordonnances, que fait l'assurance ?", choices: ["Part déduite automatiquement", "Rien", "Paie tout en espèces"], correct: 0, fillQ: "Part assurance _________ automatiquement.", fill: "déduite", fillA: ["deduite"], vfQ: "Déduction automatique.", vfCorrect: 0 },
      { textQ: "Que faut-il conserver ?", choices: ["Le ticket de caisse", "Le panneau", "La pharmacie"], correct: 0, fillQ: "Ticket de caisse à _________.", fill: "conserver", vfQ: "Conserver le ticket.", vfCorrect: 0 },
      { textQ: "Quelle carte pour la déduction ordonnance ?", choices: ["Carte d'assurance", "Carte de bibliothèque", "Carte de métro"], correct: 0, fillQ: "Si vous présentez votre _______.", fill: "carte", vfQ: "Carte d'assurance.", vfCorrect: 0 },
      { textQ: "De quoi parle le panneau ?", choices: ["Du paiement", "Des horaires de bus", "Du menu"], correct: 0, fillQ: "Panneau — _________ en pharmacie.", fill: "Paiement", vfQ: "Paiement en pharmacie.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-18",
    text: `Article blog — 5 conseils de votre pharmacien en hiver

1. Lavez-vous les mains régulièrement.
2. Buvez beaucoup d'eau et mangez des fruits.
3. Aérez votre logement chaque jour.
4. Portez un masque si vous toussez dans les transports.
5. Consultez votre pharmacien avant d'acheter un médicament.
Publié par la Pharmacie Bien-Être, janvier 2026.`,
    questions: [
      { textQ: "Combien de conseils ?", choices: ["5", "50", "500"], correct: 0, fillQ: "_________ conseils de votre pharmacien.", fill: "5", fillA: ["cinq"], vfQ: "5 conseils.", vfCorrect: 0 },
      { textQ: "Que faire avec les mains ?", choices: ["Les laver régulièrement", "Les cacher", "Les peindre"], correct: 0, fillQ: "Lavez-vous les mains _________.", fill: "régulièrement", fillA: ["regulierement"], vfQ: "Laver les mains.", vfCorrect: 0 },
      { textQ: "Que faire dans les transports si on tousse ?", choices: ["Porter un masque", "Chanter", "Dormir"], correct: 0, fillQ: "Portez un _________ si vous toussez.", fill: "masque", vfQ: "Masque si toux.", vfCorrect: 0 },
      { textQ: "Avant d'acheter un médicament ?", choices: ["Consulter le pharmacien", "Acheter le plus cher", "Ne rien faire"], correct: 0, img: ["pharmacien", "médecin", "boulanger"], imgCorrect: 0, fillQ: "Consultez votre _________.", fill: "pharmacien", vfQ: "Consulter le pharmacien.", vfCorrect: 0 },
      { textQ: "Que faire chaque jour à la maison ?", choices: ["Aérer le logement", "Fermer tout", "Ne pas dormir"], correct: 0, fillQ: "_________ votre logement chaque jour.", fill: "Aérez", fillA: ["aerer", "Aérer"], vfQ: "Aérer chaque jour.", vfCorrect: 0 },
      { textQ: "Qui a publié l'article ?", choices: ["Pharmacie Bien-Être", "Gare Centrale", "École primaire"], correct: 0, img: ["pharmacie", "gare", "école"], imgCorrect: 0, fillQ: "Pharmacie Bien-_________.", fill: "Être", fillA: ["Etre", "être"], vfQ: "Pharmacie Bien-Être.", vfCorrect: 0 },
      { textQ: "Quelle saison ?", choices: ["Hiver", "Été", "Printemps"], correct: 0, fillQ: "Conseils en _________.", fill: "hiver", vfQ: "Conseils d'hiver.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-19",
    text: `Carte de fidélité — Pharmacie Santé+

Inscription gratuite à la caisse.
1 franc dépensé = 1 point.
100 points = bon de 5 francs sur votre prochain achat.
Offre de bienvenue : 20 points offerts à l'inscription.
Valable 12 mois. Non cumulable avec d'autres promotions.
Renseignements au comptoir 4.`,
    questions: [
      { textQ: "L'inscription coûte-t-elle ?", choices: ["Non, gratuite", "Oui, 50 francs", "Oui, 10 francs"], correct: 0, fillQ: "Inscription _________.", fill: "gratuite", vfQ: "Inscription gratuite.", vfCorrect: 0 },
      { textQ: "Combien de points par franc ?", choices: ["1 point", "10 points", "0 point"], correct: 0, fillQ: "1 franc = 1 _________.", fill: "point", vfQ: "1 franc = 1 point.", vfCorrect: 0 },
      { textQ: "Combien de points pour 5 francs ?", choices: ["100 points", "10 points", "1000 points"], correct: 0, fillQ: "_________ points = bon de 5 francs.", fill: "100", fillA: ["cent"], vfQ: "100 points = 5 francs.", vfCorrect: 0 },
      { textQ: "Points offerts à l'inscription ?", choices: ["20 points", "200 points", "0 point"], correct: 0, fillQ: "_________ points offerts à l'inscription.", fill: "20", fillA: ["vingt"], vfQ: "20 points offerts.", vfCorrect: 0 },
      { textQ: "Durée de validité ?", choices: ["12 mois", "12 jours", "12 heures"], correct: 0, fillQ: "Valable _________ mois.", fill: "12", fillA: ["douze"], vfQ: "12 mois.", vfCorrect: 0 },
      { textQ: "Cumulable avec autres promos ?", choices: ["Non", "Oui", "Oui, toujours"], correct: 0, fillQ: "Non _________ avec d'autres promotions.", fill: "cumulable", vfQ: "Non cumulable.", vfCorrect: 0 },
      { textQ: "Où s'inscrire ?", choices: ["À la caisse", "À l'aéroport", "En ligne seulement"], correct: 0, fillQ: "Inscription gratuite à la _________.", fill: "caisse", vfQ: "À la caisse.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-20",
    text: `Affiche — Promotions du mois de mars

-30 % sur tous les shampoings jusqu'au 31 mars.
Achetez 2 crèmes solaires, la 3e offerte.
Pansements hydrocolloïdes : 2e boîte à -50 %.
Offre valable en magasin uniquement, pas sur Internet.
Stocks limités. Une offre par client pour la 3e crème offerte.`,
    questions: [
      { textQ: "Réduction sur les shampoings ?", choices: ["-30 %", "-3 %", "-90 %"], correct: 0, fillQ: "-_________ % sur tous les shampoings.", fill: "30", fillA: ["trente"], vfQ: "-30 % shampoings.", vfCorrect: 0 },
      { textQ: "Jusqu'à quand les shampoings ?", choices: ["31 mars", "31 décembre", "31 janvier"], correct: 0, fillQ: "Jusqu'au 31 _________.", fill: "mars", vfQ: "Jusqu'au 31 mars.", vfCorrect: 0 },
      { textQ: "Offre crèmes solaires ?", choices: ["3e offerte si 2 achetées", "Toutes gratuites", "Rien"], correct: 0, fillQ: "Achetez 2, la 3e _________.", fill: "offerte", vfQ: "3e offerte.", vfCorrect: 0 },
      { textQ: "Où est valable l'offre ?", choices: ["En magasin seulement", "Sur Internet seulement", "Partout"], correct: 0, fillQ: "Valable en _________ uniquement.", fill: "magasin", vfQ: "Magasin seulement.", vfCorrect: 0 },
      { textQ: "Offre pansements ?", choices: ["2e boîte à -50 %", "Gratuit", "-10 %"], correct: 0, fillQ: "2e boîte à -_________ %.", fill: "50", fillA: ["cinquante"], vfQ: "2e à -50 %.", vfCorrect: 0 },
      { textQ: "Combien d'offres 3e crème par client ?", choices: ["Une", "Dix", "Illimité"], correct: 0, fillQ: "Une offre par _________.", fill: "client", vfQ: "Une par client.", vfCorrect: 0 },
      { textQ: "Quel mois de promotions ?", choices: ["Mars", "Juillet", "Décembre"], correct: 0, fillQ: "Promotions du mois de _________.", fill: "mars", vfQ: "Mois de mars.", vfCorrect: 0 },
    ],
  },
];

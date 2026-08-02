/** @type {import('./helpers.mjs').ItemSpec[]} */
export const E5_2_CE = [
  {
    slug: "e5-2-ce-1",
    text: `Affiche — Pharmacie du Soleil

Ouverte du lundi au samedi, de 8 h à 19 h.
Fermée le dimanche.
Ordonnance ? Présentez-la au comptoir avec votre carte d'assurance.
Conseils gratuits sur les médicaments sans ordonnance.
Paiement : espèces, carte bancaire ou Twint.
Pharmacie de garde le week-end : appelez le 1818.`,
    questions: [
      { textQ: "Quels jours la pharmacie est-elle ouverte ?", choices: ["Du lundi au samedi", "Tous les jours", "Seulement le dimanche"], correct: 0, img: ["pharmacie", "hôpital", "école"], imgCorrect: 0, fillQ: "Ouverte du lundi au _________.", fill: "samedi", vfQ: "Ouverte du lundi au samedi.", vfCorrect: 0 },
      { textQ: "À quelle heure ferme-t-elle ?", choices: ["À 19 h", "À 8 h", "À midi"], correct: 0, fillQ: "Ferme à _________ h.", fill: "19", fillA: ["dix-neuf"], vfQ: "Fermeture à 19 h.", vfCorrect: 0 },
      { textQ: "Que faut-il pour une ordonnance ?", choices: ["Ordonnance et carte d'assurance", "Un passeport", "Un livre"], correct: 0, fillQ: "Présentez votre carte d'_________.", fill: "assurance", vfQ: "Il faut l'ordonnance et la carte d'assurance.", vfCorrect: 0 },
      { textQ: "Les conseils sur médicaments sans ordonnance sont-ils payants ?", choices: ["Non, gratuits", "Oui, 20 francs", "Oui, 100 francs"], correct: 0, fillQ: "Conseils _________ sur les médicaments.", fill: "gratuits", vfQ: "Les conseils sont gratuits.", vfCorrect: 0 },
      { textQ: "Quel numéro pour la pharmacie de garde ?", choices: ["Le 1818", "Le 144", "Le 117"], correct: 0, fillQ: "Pharmacie de garde : appelez le _________.", fill: "1818", vfQ: "Le 1818 indique la pharmacie de garde.", vfCorrect: 0 },
      { textQ: "La pharmacie est-elle ouverte le dimanche ?", choices: ["Non, fermée", "Oui", "Oui, le matin"], correct: 0, fillQ: "Fermée le _________.", fill: "dimanche", vfQ: "Fermée le dimanche.", vfCorrect: 0 },
      { textQ: "Comment peut-on payer ?", choices: ["Espèces, carte ou Twint", "Seulement en chèques", "Avec des points"], correct: 0, fillQ: "Paiement : espèces, carte bancaire ou _________.", fill: "Twint", vfQ: "On peut payer par Twint.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-2",
    text: `Notice — Sirop toux Enfant+ (sur la boîte)

Sirop pour enfants de 2 à 12 ans.
Posologie : 5 ml, 3 fois par jour, après les repas.
Secouez la bouteille avant utilisation.
Conservez au frais après ouverture. Utilisez dans les 3 mois.
Ne pas donner si l'enfant est allergique au miel.
En cas de fièvre persistante, consultez un médecin.`,
    questions: [
      { textQ: "Pour quels âges ?", choices: ["De 2 à 12 ans", "De 0 à 1 an", "Adultes seulement"], correct: 0, fillQ: "Enfants de 2 à _________ ans.", fill: "12", fillA: ["douze"], vfQ: "Pour les 2–12 ans.", vfCorrect: 0 },
      { textQ: "Quelle quantité par prise ?", choices: ["5 ml", "50 ml", "1 litre"], correct: 0, fillQ: "Posologie : _________ ml.", fill: "5", fillA: ["cinq"], vfQ: "La dose est 5 ml.", vfCorrect: 0 },
      { textQ: "Combien de fois par jour ?", choices: ["3 fois", "1 fois", "10 fois"], correct: 0, fillQ: "_________ fois par jour.", fill: "3", fillA: ["trois"], vfQ: "3 fois par jour.", vfCorrect: 0 },
      { textQ: "Quand donner le sirop ?", choices: ["Après les repas", "À jeun seulement", "La nuit seulement"], correct: 0, fillQ: "Après les _________.", fill: "repas", vfQ: "Après les repas.", vfCorrect: 0 },
      { textQ: "Que faire avant d'utiliser ?", choices: ["Secouer la bouteille", "La chauffer", "La jeter"], correct: 0, fillQ: "_________ la bouteille avant utilisation.", fill: "Secouez", fillA: ["secouer", "Secouer"], vfQ: "Il faut secouer la bouteille.", vfCorrect: 0 },
      { textQ: "Combien de temps après ouverture ?", choices: ["3 mois", "3 jours", "3 ans"], correct: 0, fillQ: "Utilisez dans les _________ mois.", fill: "3", fillA: ["trois"], vfQ: "Utiliser dans les 3 mois.", vfCorrect: 0 },
      { textQ: "Que faire si la fièvre continue ?", choices: ["Consulter un médecin", "Doubler la dose", "Ne rien faire"], correct: 0, img: ["médecin", "pharmacien", "boulanger"], imgCorrect: 0, fillQ: "Consultez un _________.", fill: "médecin", fillA: ["medecin"], vfQ: "Il faut voir un médecin si la fièvre continue.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-3",
    text: `Flyer — Pharmacie de garde ce week-end

Ce samedi et ce dimanche, la pharmacie de garde est :
Pharmacie de la Gare, place de la Gare 3.
Ouverte 24 h sur 24.
Téléphone : 021 555 66 77.
Pour savoir quelle pharmacie est de garde : composez le 1818 depuis un téléphone fixe.
Apportez toujours votre ordonnance et votre carte d'assurance.`,
    questions: [
      { textQ: "Quelle pharmacie est de garde ?", choices: ["Pharmacie de la Gare", "Pharmacie du Lac", "Pharmacie du Soleil"], correct: 0, img: ["pharmacie", "gare", "hôpital"], imgCorrect: 0, fillQ: "Pharmacie de la _________.", fill: "Gare", vfQ: "C'est la Pharmacie de la Gare.", vfCorrect: 0 },
      { textQ: "Quels jours ?", choices: ["Samedi et dimanche", "Lundi et mardi", "Mercredi seulement"], correct: 0, fillQ: "Ce _________ et ce dimanche.", fill: "samedi", vfQ: "Samedi et dimanche.", vfCorrect: 0 },
      { textQ: "Quels horaires ?", choices: ["24 h sur 24", "8 h–12 h", "Fermée"], correct: 0, fillQ: "Ouverte _________ h sur 24.", fill: "24", vfQ: "Ouverte 24 h/24.", vfCorrect: 0 },
      { textQ: "Quel numéro pour la pharmacie de garde ?", choices: ["021 555 66 77", "144", "117"], correct: 0, fillQ: "Téléphone : 021 555 66 _________.", fill: "77", vfQ: "Le téléphone est 021 555 66 77.", vfCorrect: 0 },
      { textQ: "Quel numéro composer pour savoir quelle pharmacie est de garde ?", choices: ["Le 1818", "Le 112", "Le 999"], correct: 0, fillQ: "Composez le _________ depuis un fixe.", fill: "1818", vfQ: "Le 1818 indique la pharmacie de garde.", vfCorrect: 0 },
      { textQ: "Où est la pharmacie ?", choices: ["Place de la Gare 3", "Rue du Lac 1", "Avenue Centrale 9"], correct: 0, fillQ: "Place de la Gare _________.", fill: "3", vfQ: "Place de la Gare 3.", vfCorrect: 0 },
      { textQ: "Que faut-il apporter ?", choices: ["Ordonnance et carte d'assurance", "Un chat", "Des skis"], correct: 0, fillQ: "Apportez votre _________ et votre carte d'assurance.", fill: "ordonnance", vfQ: "Il faut l'ordonnance.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-4",
    text: `Étiquette conseil — Crème solaire SPF 50

Crème solaire haute protection pour adultes et enfants.
Appliquez généreusement 30 minutes avant l'exposition au soleil.
Renouvelez toutes les 2 heures et après la bain.
Évitez le soleil entre 11 h et 15 h.
En cas de réaction cutanée, arrêtez l'utilisation et demandez conseil au pharmacien.
Ne pas utiliser sur les blessures ouvertes.`,
    questions: [
      { textQ: "Quand appliquer la crème ?", choices: ["30 minutes avant le soleil", "Après le coucher du soleil", "Une fois par mois"], correct: 0, fillQ: "Appliquez _________ minutes avant l'exposition.", fill: "30", fillA: ["trente"], vfQ: "30 minutes avant le soleil.", vfCorrect: 0 },
      { textQ: "À quelle fréquence renouveler ?", choices: ["Toutes les 2 heures", "Tous les 2 jours", "Jamais"], correct: 0, fillQ: "Renouvelez toutes les _________ heures.", fill: "2", fillA: ["deux"], vfQ: "Renouveler toutes les 2 h.", vfCorrect: 0 },
      { textQ: "Quand éviter le soleil ?", choices: ["Entre 11 h et 15 h", "Entre 6 h et 7 h", "La nuit"], correct: 0, fillQ: "Évitez le soleil entre 11 h et _________ h.", fill: "15", fillA: ["quinze"], vfQ: "Éviter le soleil 11 h–15 h.", vfCorrect: 0 },
      { textQ: "Qui demander conseil en cas de réaction ?", choices: ["Le pharmacien", "Le facteur", "Le pilote"], correct: 0, img: ["pharmacien", "facteur", "pilote"], imgCorrect: 0, fillQ: "Demandez conseil au _________.", fill: "pharmacien", vfQ: "Demander conseil au pharmacien.", vfCorrect: 0 },
      { textQ: "Sur quoi ne pas utiliser la crème ?", choices: ["Blessures ouvertes", "Le visage", "Les mains"], correct: 0, fillQ: "Ne pas utiliser sur les blessures _________.", fill: "ouvertes", vfQ: "Pas sur les blessures ouvertes.", vfCorrect: 0 },
      { textQ: "Pour qui est la crème ?", choices: ["Adultes et enfants", "Chats seulement", "Plantes"], correct: 0, fillQ: "Pour adultes et _________.", fill: "enfants", vfQ: "Pour adultes et enfants.", vfCorrect: 0 },
      { textQ: "Que faire après la bain ?", choices: ["Renouveler la crème", "Arrêter pour toujours", "Manger"], correct: 0, fillQ: "Renouvelez après le _________.", fill: "bain", vfQ: "Renouveler après le bain.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-5",
    text: `Affiche — Automédication : attention !

Certains médicaments sont en vente libre sans ordonnance.
Lisez toujours la notice avant utilisation.
Ne dépassez pas la dose indiquée.
Ne donnez pas votre médicament à une autre personne.
En cas de doute, demandez conseil à votre pharmacien.
Les médicaments ne se jettent pas aux ordures : rapportez-les en pharmacie.`,
    questions: [
      { textQ: "Faut-il lire la notice ?", choices: ["Oui, toujours", "Non", "Seulement le dimanche"], correct: 0, fillQ: "Lisez toujours la _________.", fill: "notice", vfQ: "Il faut lire la notice.", vfCorrect: 0 },
      { textQ: "Peut-on dépasser la dose ?", choices: ["Non", "Oui", "Oui, le double"], correct: 0, fillQ: "Ne _________ pas la dose indiquée.", fill: "dépassez", fillA: ["depassez"], vfQ: "Il ne faut pas dépasser la dose.", vfCorrect: 0 },
      { textQ: "Peut-on donner son médicament à quelqu'un d'autre ?", choices: ["Non", "Oui, toujours", "Oui, aux enfants"], correct: 0, fillQ: "Ne donnez pas votre médicament à une autre _________.", fill: "personne", vfQ: "Ne pas donner à une autre personne.", vfCorrect: 0 },
      { textQ: "Qui consulter en cas de doute ?", choices: ["Le pharmacien", "Le voisin", "Le chauffeur"], correct: 0, img: ["pharmacien", "médecin", "infirmier"], imgCorrect: 0, fillQ: "Demandez conseil à votre _________.", fill: "pharmacien", vfQ: "Demander conseil au pharmacien.", vfCorrect: 0 },
      { textQ: "Où rapporter les médicaments périmés ?", choices: ["En pharmacie", "Dans la poubelle", "Dans la rue"], correct: 0, img: ["pharmacie", "hôpital", "école"], imgCorrect: 0, fillQ: "Rapportez-les en _________.", fill: "pharmacie", vfQ: "Les rapporter en pharmacie.", vfCorrect: 0 },
      { textQ: "Certains médicaments sont vendus comment ?", choices: ["Sans ordonnance", "Avec ordonnance seulement", "Sur Internet seulement"], correct: 0, fillQ: "En vente libre sans _________.", fill: "ordonnance", vfQ: "Certains sont sans ordonnance.", vfCorrect: 0 },
      { textQ: "De quoi parle l'affiche ?", choices: ["De l'automédication prudente", "De voyages", "De cuisine"], correct: 0, fillQ: "_________ : attention !", fill: "Automédication", fillA: ["automedication"], vfQ: "L'affiche parle d'automédication.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-6",
    text: `SMS — Pharmacie Centrale

Bonjour Mme Rossi,
Votre commande est prête. Vous pouvez la retirer aujourd'hui avant 19 h.
Comptoir 2, entrée rue du Rhône.
N'oubliez pas votre carte d'assurance pour les produits remboursés.
Merci, l'équipe de la Pharmacie Centrale.`,
    questions: [
      { textQ: "Pour qui est le message ?", choices: ["Mme Rossi", "M. Dupont", "Dr Martin"], correct: 0, fillQ: "Bonjour Mme _________.", fill: "Rossi", vfQ: "C'est pour Mme Rossi.", vfCorrect: 0 },
      { textQ: "Qu'est-ce qui est prêt ?", choices: ["La commande", "Le restaurant", "Le train"], correct: 0, fillQ: "Votre _________ est prête.", fill: "commande", vfQ: "La commande est prête.", vfCorrect: 0 },
      { textQ: "Jusqu'à quelle heure peut-on retirer ?", choices: ["Avant 19 h", "Avant 8 h", "Après minuit"], correct: 0, fillQ: "Retirer aujourd'hui avant _________ h.", fill: "19", fillA: ["dix-neuf"], vfQ: "Retrait avant 19 h.", vfCorrect: 0 },
      { textQ: "Quel comptoir ?", choices: ["Comptoir 2", "Comptoir 9", "Comptoir 0"], correct: 0, fillQ: "_________ 2.", fill: "Comptoir", vfQ: "Comptoir 2.", vfCorrect: 0 },
      { textQ: "Quelle entrée ?", choices: ["Rue du Rhône", "Rue du Lac", "Avenue du Soleil"], correct: 0, fillQ: "Entrée rue du _________.", fill: "Rhône", fillA: ["Rhone"], vfQ: "Entrée rue du Rhône.", vfCorrect: 0 },
      { textQ: "Que ne pas oublier ?", choices: ["La carte d'assurance", "Un parapluie", "Un livre"], correct: 0, fillQ: "N'oubliez pas votre carte d'_________.", fill: "assurance", vfQ: "Il faut la carte d'assurance.", vfCorrect: 0 },
      { textQ: "Pour quels produits faut-il la carte ?", choices: ["Produits remboursés", "Tous les produits", "Aucun"], correct: 0, fillQ: "Pour les produits _________.", fill: "remboursés", fillA: ["rembourses"], vfQ: "Pour les produits remboursés.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-7",
    text: `Panneau comptoir — Ordonnances

File d'attente ordonnances : tirez un numéro à l'entrée.
Temps d'attente moyen : 10 à 15 minutes.
Préparez votre ordonnance et votre carte d'assurance avant d'approcher le comptoir.
Les médicaments génériques sont moins chers et tout aussi efficaces.
Questions sur la posologie ? Le pharmacien répond à vos questions.`,
    questions: [
      { textQ: "Comment obtenir sa place dans la file ?", choices: ["Tirer un numéro à l'entrée", "Crier fort", "Envoyer un SMS"], correct: 0, fillQ: "Tirez un _________ à l'entrée.", fill: "numéro", fillA: ["numero"], vfQ: "Il faut tirer un numéro.", vfCorrect: 0 },
      { textQ: "Quel temps d'attente moyen ?", choices: ["10 à 15 minutes", "2 heures", "3 jours"], correct: 0, fillQ: "Attente moyenne : 10 à _________ minutes.", fill: "15", fillA: ["quinze"], vfQ: "Attente 10–15 minutes.", vfCorrect: 0 },
      { textQ: "Que préparer avant le comptoir ?", choices: ["Ordonnance et carte d'assurance", "Un sandwich", "Des chaussures"], correct: 0, fillQ: "Préparez votre _________.", fill: "ordonnance", vfQ: "Préparer ordonnance et carte.", vfCorrect: 0 },
      { textQ: "Les médicaments génériques sont-ils moins chers ?", choices: ["Oui", "Non", "Plus chers"], correct: 0, fillQ: "Les génériques sont moins _________.", fill: "chers", vfQ: "Les génériques sont moins chers.", vfCorrect: 0 },
      { textQ: "Qui répond aux questions sur la posologie ?", choices: ["Le pharmacien", "Le facteur", "Le serveur"], correct: 0, img: ["pharmacien", "facteur", "serveur"], imgCorrect: 0, fillQ: "Le _________ répond à vos questions.", fill: "pharmacien", vfQ: "Le pharmacien répond.", vfCorrect: 0 },
      { textQ: "Les génériques sont-ils efficaces ?", choices: ["Oui, tout aussi efficaces", "Non", "On ne sait pas"], correct: 0, fillQ: "Tout aussi _________.", fill: "efficaces", vfQ: "Les génériques sont efficaces.", vfCorrect: 0 },
      { textQ: "Où se trouve ce panneau ?", choices: ["Au comptoir des ordonnances", "À la gare", "À la plage"], correct: 0, fillQ: "Panneau _________ — Ordonnances.", fill: "comptoir", vfQ: "Au comptoir ordonnances.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-8",
    text: `Flyer — Vaccination grippe en pharmacie

Cette année, la vaccination contre la grippe est disponible en pharmacie.
Sans rendez-vous : lundi à vendredi, 9 h–17 h.
Prix : 35 francs (remboursé en partie par l'assurance).
Apportez votre carte d'assurance.
La vaccination est recommandée pour les personnes de plus de 65 ans et les professionnels de santé.
Durée : 10 minutes.`,
    questions: [
      { textQ: "Où peut-on se faire vacciner ?", choices: ["En pharmacie", "À la plage", "Au cinéma"], correct: 0, img: ["pharmacie", "hôpital", "école"], imgCorrect: 0, fillQ: "Vaccination disponible en _________.", fill: "pharmacie", vfQ: "En pharmacie.", vfCorrect: 0 },
      { textQ: "Faut-il un rendez-vous ?", choices: ["Non", "Oui, obligatoire", "Oui, par lettre"], correct: 0, fillQ: "Sans _________.", fill: "rendez-vous", fillA: ["rendez vous"], vfQ: "Sans rendez-vous.", vfCorrect: 0 },
      { textQ: "Quel est le prix ?", choices: ["35 francs", "350 francs", "Gratuit"], correct: 0, fillQ: "Prix : _________ francs.", fill: "35", fillA: ["trente-cinq"], vfQ: "35 francs.", vfCorrect: 0 },
      { textQ: "Pour qui est recommandée la vaccination ?", choices: ["Plus de 65 ans et professionnels de santé", "Bébés seulement", "Personne"], correct: 0, fillQ: "Personnes de plus de _________ ans.", fill: "65", fillA: ["soixante-cinq"], vfQ: "Recommandée pour 65+ et pros de santé.", vfCorrect: 0 },
      { textQ: "Combien de temps dure la vaccination ?", choices: ["10 minutes", "3 heures", "2 jours"], correct: 0, fillQ: "Durée : _________ minutes.", fill: "10", fillA: ["dix"], vfQ: "10 minutes.", vfCorrect: 0 },
      { textQ: "Quels jours sans rendez-vous ?", choices: ["Lundi à vendredi", "Samedi et dimanche", "Tous les jours 24 h"], correct: 0, fillQ: "Lundi à _________, 9 h–17 h.", fill: "vendredi", vfQ: "Lundi–vendredi.", vfCorrect: 0 },
      { textQ: "L'assurance rembourse-t-elle ?", choices: ["En partie", "Non", "Tout"], correct: 0, fillQ: "Remboursé en partie par l'_________.", fill: "assurance", vfQ: "Remboursé en partie.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-9",
    text: `Affiche — Parapharmacie, rayon bien-être

Shampoings, crèmes, compléments alimentaires et produits d'hygiène.
Pas besoin d'ordonnance pour ces produits.
Conseils personnalisés avec notre pharmacienne Mme Keller.
Promotions du mois : -20 % sur les crèmes mains jusqu'au 30 avril.
Rayon accessible sans file d'attente ordonnances.
Paiement à la caisse 3.`,
    questions: [
      { textQ: "Faut-il une ordonnance pour la parapharmacie ?", choices: ["Non", "Oui, toujours", "Oui, le dimanche"], correct: 0, fillQ: "Pas besoin d'_________.", fill: "ordonnance", vfQ: "Pas besoin d'ordonnance.", vfCorrect: 0 },
      { textQ: "Qui donne des conseils ?", choices: ["La pharmacienne Mme Keller", "Le chauffeur", "Le jardinier"], correct: 0, img: ["pharmacien", "chauffeur", "jardinier"], imgCorrect: 0, fillQ: "Notre _________ Mme Keller.", fill: "pharmacienne", vfQ: "Mme Keller, pharmacienne.", vfCorrect: 0 },
      { textQ: "Quelle promotion ce mois-ci ?", choices: ["-20 % sur les crèmes mains", "-50 % sur les voitures", "Rien"], correct: 0, fillQ: "-20 % sur les crèmes _________.", fill: "mains", vfQ: "-20 % crèmes mains.", vfCorrect: 0 },
      { textQ: "Jusqu'à quand la promotion ?", choices: ["30 avril", "30 juin", "30 décembre"], correct: 0, fillQ: "Jusqu'au 30 _________.", fill: "avril", vfQ: "Jusqu'au 30 avril.", vfCorrect: 0 },
      { textQ: "Où payer ?", choices: ["Caisse 3", "Caisse 99", "Dehors"], correct: 0, fillQ: "Paiement à la caisse _________.", fill: "3", vfQ: "Caisse 3.", vfCorrect: 0 },
      { textQ: "Y a-t-il une file d'attente ordonnances ?", choices: ["Non, accessible sans", "Oui, toujours", "Oui, 2 heures"], correct: 0, fillQ: "Sans file d'attente _________.", fill: "ordonnances", vfQ: "Sans file ordonnances.", vfCorrect: 0 },
      { textQ: "Quels produits trouve-t-on ?", choices: ["Shampoings, crèmes, compléments", "Voitures", "Billets de train"], correct: 0, fillQ: "Shampoings, crèmes, compléments _________.", fill: "alimentaires", vfQ: "Produits de bien-être.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-2-ce-10",
    text: `Message — Livraison à domicile

La Pharmacie du Parc propose la livraison à domicile pour les personnes à mobilité réduite.
Commande par téléphone avant 14 h pour une livraison le jour même.
Frais de livraison : 5 francs (gratuit pour les plus de 75 ans).
Zone : Lausanne et communes voisines.
Paiement à la livraison : espèces ou carte.`,
    questions: [
      { textQ: "Pour qui est la livraison ?", choices: ["Personnes à mobilité réduite", "Tous les enfants", "Les touristes"], correct: 0, fillQ: "Personnes à mobilité _________.", fill: "réduite", fillA: ["reduite"], vfQ: "Pour mobilité réduite.", vfCorrect: 0 },
      { textQ: "Avant quelle heure commander pour le jour même ?", choices: ["14 h", "20 h", "6 h"], correct: 0, fillQ: "Commande avant _________ h.", fill: "14", fillA: ["quatorze"], vfQ: "Avant 14 h.", vfCorrect: 0 },
      { textQ: "Combien coûte la livraison ?", choices: ["5 francs", "50 francs", "Gratuit pour tous"], correct: 0, fillQ: "Frais : _________ francs.", fill: "5", fillA: ["cinq"], vfQ: "5 francs de frais.", vfCorrect: 0 },
      { textQ: "Pour qui la livraison est-elle gratuite ?", choices: ["Plus de 75 ans", "Moins de 10 ans", "Tout le monde"], correct: 0, fillQ: "Gratuit pour les plus de _________ ans.", fill: "75", fillA: ["soixante-quinze"], vfQ: "Gratuit 75+.", vfCorrect: 0 },
      { textQ: "Quelle zone de livraison ?", choices: ["Lausanne et communes voisines", "Toute l'Europe", "Paris seulement"], correct: 0, fillQ: "Zone : Lausanne et communes _________.", fill: "voisines", vfQ: "Lausanne et environs.", vfCorrect: 0 },
      { textQ: "Comment payer à la livraison ?", choices: ["Espèces ou carte", "Par chèque seulement", "En points"], correct: 0, fillQ: "Paiement : espèces ou _________.", fill: "carte", vfQ: "Espèces ou carte.", vfCorrect: 0 },
      { textQ: "Comment commander ?", choices: ["Par téléphone", "Par courrier seulement", "En personne seulement"], correct: 0, fillQ: "Commande par _________.", fill: "téléphone", fillA: ["telephone"], vfQ: "Par téléphone.", vfCorrect: 0 },
    ],
  },
];

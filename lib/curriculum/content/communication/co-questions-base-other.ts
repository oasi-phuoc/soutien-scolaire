import { buildPool, type COMultiQuestion, type RawQ } from "./co-questions-helpers";

// Placeholder questions until real transcripts are added.

const ANNONCE_1 = buildPool("base", "annonce-1", [
  {
    id: "an1-q1", textQ: "Selon l'annonce, quel lieu est concerné ?", text: ["La bibliothèque", "La piscine", "Le cinéma"], textC: 0,
    img: ["La bibliothèque", "La piscine", "Le cinéma"], imgC: 0,
    fillQ: "Selon l'annonce, le message concerne la _________.", fill: "bibliothèque"
  },
  {
    id: "an1-q2", textQ: "Selon l'annonce, à quelle heure ouvre-t-on le matin ?", text: ["À 9 h", "À 10 h", "À 11 h"], textC: 0,
    img: ["À 9 h", "À 10 h", "À 11 h"], imgC: 0,
    fillQ: "Selon l'annonce, ouverture à ___ h.", fill: "9"
  },
  {
    id: "an1-q3", textQ: "Selon l'annonce, à quelle heure ferme-t-on ?", text: ["À 18 h", "À 19 h", "À 20 h"], textC: 1,
    img: ["À 18 h", "À 19 h", "À 20 h"], imgC: 1,
    fillQ: "Selon l'annonce, fermeture à ___ h.", fill: "19"
  },
  {
    id: "an1-q4", textQ: "Selon l'annonce, quel jour est fermé ?", text: ["Le dimanche", "Le samedi", "Le lundi"], textC: 0,
    img: ["Le dimanche", "Le samedi", "Le lundi"], imgC: 0,
    fillQ: "Selon l'annonce, fermé le _________.", fill: "dimanche"
  },
  {
    id: "an1-q5", textQ: "Selon l'annonce, qu'est-ce qu'on peut emprunter ?", text: ["Des livres", "Des vélos", "Des jeux"], textC: 0,
    img: ["Des livres", "Des vélos", "Des jeux"], imgC: 0,
    fillQ: "Selon l'annonce, on peut emprunter des _________.", fill: "livres"
  }
] as RawQ[]);

const ANNONCE_2 = buildPool("base", "annonce-2", [
  {
    id: "an2-q1", textQ: "Selon l'annonce, où a lieu la promotion ?", text: ["Au supermarché", "Au restaurant", "À la gare"], textC: 0,
    img: ["Au supermarché", "Au restaurant", "À la gare"], imgC: 0,
    fillQ: "Selon l'annonce, la promotion est au _________.", fill: "supermarché", fillA: ["supermarche"]
  },
  {
    id: "an2-q2", textQ: "Selon l'annonce, quelle réduction est proposée ?", text: ["20 %", "30 %", "50 %"], textC: 1,
    img: ["20 %", "30 %", "50 %"], imgC: 1,
    fillQ: "Selon l'annonce, réduction de ___ %.", fill: "30"
  },
  {
    id: "an2-q3", textQ: "Selon l'annonce, sur quels produits ?", text: ["Sur les fruits", "Sur la viande", "Sur le pain"], textC: 0,
    img: ["Sur les fruits", "Sur la viande", "Sur le pain"], imgC: 0,
    fillQ: "Selon l'annonce, promotion sur les _________.", fill: "fruits"
  },
  {
    id: "an2-q4", textQ: "Selon l'annonce, jusqu'à quand ?", text: ["Aujourd'hui", "Demain", "Samedi"], textC: 0,
    img: ["Aujourd'hui", "Demain", "Samedi"], imgC: 0,
    fillQ: "Selon l'annonce, offre valable _________.", fill: "aujourd'hui"
  },
  {
    id: "an2-q5", textQ: "Selon l'annonce, où payer moins cher ?", text: ["À la caisse 3", "À la caisse 5", "À l'entrée"], textC: 0,
    img: ["À la caisse 3", "À la caisse 5", "À l'entrée"], imgC: 0,
    fillQ: "Selon l'annonce, allez à la caisse ___.", fill: "3", fillA: ["caisse 3"]
  }
] as RawQ[]);

const ANNONCE_3 = buildPool("base", "annonce-3", [
  {
    id: "an3-q1", textQ: "Selon l'annonce, où écoute-t-on ce message ?", text: ["À la gare", "À l'aéroport", "Au métro"], textC: 0,
    img: ["À la gare", "À l'aéroport", "Au métro"], imgC: 0,
    fillQ: "Selon l'annonce, message à la _________.", fill: "gare"
  },
  {
    id: "an3-q2", textQ: "Selon l'annonce, quel train est en retard ?", text: ["Le train 42", "Le train 15", "Le train 8"], textC: 0,
    img: ["Le train 42", "Le train 15", "Le train 8"], imgC: 0,
    fillQ: "Selon l'annonce, retard du train ___.", fill: "42"
  },
  {
    id: "an3-q3", textQ: "Selon l'annonce, de combien de minutes ?", text: ["10 minutes", "15 minutes", "20 minutes"], textC: 1,
    img: ["10 minutes", "15 minutes", "20 minutes"], imgC: 1,
    fillQ: "Selon l'annonce, retard de ___ minutes.", fill: "15"
  },
  {
    id: "an3-q4", textQ: "Selon l'annonce, quelle est la destination ?", text: ["Lyon", "Marseille", "Bordeaux"], textC: 0,
    img: ["Lyon", "Marseille", "Bordeaux"], imgC: 0,
    fillQ: "Selon l'annonce, destination : _________.", fill: "Lyon", fillA: ["lyon"]
  },
  {
    id: "an3-q5", textQ: "Selon l'annonce, sur quel quai ?", text: ["Quai 2", "Quai 5", "Quai 7"], textC: 1,
    img: ["Quai 2", "Quai 5", "Quai 7"], imgC: 1,
    fillQ: "Selon l'annonce, embarquement quai ___.", fill: "5"
  }
] as RawQ[]);

const ANNONCE_4 = buildPool("base", "annonce-4", [
  {
    id: "an4-q1", textQ: "Selon l'annonce, quel lieu est fermé ?", text: ["La piscine", "Le musée", "La bibliothèque"], textC: 0,
    img: ["La piscine", "Le musée", "La bibliothèque"], imgC: 0,
    fillQ: "Selon l'annonce, la _________ est fermée.", fill: "piscine"
  },
  {
    id: "an4-q2", textQ: "Selon l'annonce, pourquoi ?", text: ["Pour des travaux", "Pour une fête", "Pour un match"], textC: 0,
    img: ["Pour des travaux", "Pour une fête", "Pour un match"], imgC: 0,
    fillQ: "Selon l'annonce, fermeture pour des _________.", fill: "travaux"
  },
  {
    id: "an4-q3", textQ: "Selon l'annonce, quand rouvre-t-on ?", text: ["Lundi", "Mardi", "Mercredi"], textC: 0,
    img: ["Lundi", "Mardi", "Mercredi"], imgC: 0,
    fillQ: "Selon l'annonce, réouverture _________.", fill: "lundi"
  },
  {
    id: "an4-q4", textQ: "Selon l'annonce, à quelle heure le matin ?", text: ["À 8 h", "À 9 h", "À 10 h"], textC: 1,
    img: ["À 8 h", "À 9 h", "À 10 h"], imgC: 1,
    fillQ: "Selon l'annonce, ouverture à ___ h.", fill: "9"
  },
  {
    id: "an4-q5", textQ: "Selon l'annonce, qu'est-ce qu'il faut apporter ?", text: ["Un maillot", "Un bonnet", "Une serviette"], textC: 0,
    img: ["Un maillot", "Un bonnet", "Une serviette"], imgC: 0,
    fillQ: "Selon l'annonce, apportez un _________.", fill: "maillot"
  }
] as RawQ[]);

const ANNONCE_5 = buildPool("base", "annonce-5", [
  {
    id: "an5-q1", textQ: "Selon l'annonce, quel type d'événement ?", text: ["Un concert", "Un film", "Un match"], textC: 0,
    img: ["Un concert", "Un film", "Un match"], imgC: 0,
    fillQ: "Selon l'annonce, c'est un _________.", fill: "concert"
  },
  {
    id: "an5-q2", textQ: "Selon l'annonce, qui chante ?", text: ["Marie Dubois", "Le groupe Nova", "Pierre Martin"], textC: 0,
    img: ["Marie Dubois", "Le groupe Nova", "Pierre Martin"], imgC: 0,
    fillQ: "Selon l'annonce, artiste : Marie _________.", fill: "Dubois", fillA: ["dubois"]
  },
  {
    id: "an5-q3", textQ: "Selon l'annonce, à quelle heure ?", text: ["À 20 h", "À 20 h 30", "À 21 h"], textC: 0,
    img: ["À 20 h", "À 20 h 30", "À 21 h"], imgC: 0,
    fillQ: "Selon l'annonce, début à ___ h.", fill: "20"
  },
  {
    id: "an5-q4", textQ: "Selon l'annonce, combien coûte une place ?", text: ["15 €", "20 €", "25 €"], textC: 1,
    img: ["15 €", "20 €", "25 €"], imgC: 1,
    fillQ: "Selon l'annonce, place à ___ €.", fill: "20"
  },
  {
    id: "an5-q5", textQ: "Selon l'annonce, par quelle porte entrer ?", text: ["Porte 2", "Porte 4", "Porte 6"], textC: 1,
    img: ["Porte 2", "Porte 4", "Porte 6"], imgC: 1,
    fillQ: "Selon l'annonce, entrée par la porte ___.", fill: "4"
  }
] as RawQ[]);

const ANNONCE_6 = buildPool("base", "annonce-6", [
  {
    id: "an6-q1", textQ: "Selon l'annonce, quel transport ?", text: ["Le bus 12", "Le tramway", "Le métro"], textC: 0,
    img: ["Le bus 12", "Le tramway", "Le métro"], imgC: 0,
    fillQ: "Selon l'annonce, le bus numéro ___.", fill: "12"
  },
  {
    id: "an6-q2", textQ: "Selon l'annonce, quel arrêt n'est pas desservi ?", text: ["République", "Gare", "Mairie"], textC: 0,
    img: ["République", "Gare", "Mairie"], imgC: 0,
    fillQ: "Selon l'annonce, arrêt _________ non desservi.", fill: "République", fillA: ["republique"]
  },
  {
    id: "an6-q3", textQ: "Selon l'annonce, où descendre à la place ?", text: ["Arrêt Hôtel de Ville", "Arrêt Marché", "Arrêt École"], textC: 0,
    img: ["Arrêt Hôtel de Ville", "Arrêt Marché", "Arrêt École"], imgC: 0,
    fillQ: "Selon l'annonce, descendez à l'arrêt Hôtel de _________.", fill: "Ville", fillA: ["ville"]
  },
  {
    id: "an6-q4", textQ: "Selon l'annonce, à partir de quelle heure ?", text: ["14 h", "15 h", "16 h"], textC: 1,
    img: ["14 h", "15 h", "16 h"], imgC: 1,
    fillQ: "Selon l'annonce, changement à partir de ___ h.", fill: "15"
  },
  {
    id: "an6-q5", textQ: "Selon l'annonce, qu'est-ce qu'il faut avoir ?", text: ["Un ticket", "Une carte", "Un pass"], textC: 0,
    img: ["Un ticket", "Une carte", "Un pass"], imgC: 0,
    fillQ: "Selon l'annonce, il faut un _________.", fill: "ticket"
  }
] as RawQ[]);

const ANNONCE_7 = buildPool("base", "annonce-7", [
  {
    id: "an7-q1", textQ: "Selon l'annonce, quel magasin ?", text: ["Un magasin de vêtements", "Une librairie", "Une boulangerie"], textC: 0,
    img: ["Un magasin de vêteme…", "Une librairie", "Une boulangerie"], imgC: 0,
    fillQ: "Selon l'annonce, soldes de _________.", fill: "vêtements", fillA: ["vetements"]
  },
  {
    id: "an7-q2", textQ: "Selon l'annonce, quelle réduction ?", text: ["-30 %", "-40 %", "-50 %"], textC: 2,
    img: ["-30 %", "-40 %", "-50 %"], imgC: 2,
    fillQ: "Selon l'annonce, réduction de ___ %.", fill: "50"
  },
  {
    id: "an7-q3", textQ: "Selon l'annonce, sur quoi ?", text: ["Les pantalons", "Les robes", "Les manteaux"], textC: 0,
    img: ["Les pantalons", "Les robes", "Les manteaux"], imgC: 0,
    fillQ: "Selon l'annonce, soldes sur les _________.", fill: "pantalons"
  },
  {
    id: "an7-q4", textQ: "Selon l'annonce, jusqu'à quel jour ?", text: ["Vendredi", "Samedi", "Dimanche"], textC: 2,
    img: ["Vendredi", "Samedi", "Dimanche"], imgC: 2,
    fillQ: "Selon l'annonce, soldes jusqu'au _________.", fill: "dimanche"
  },
  {
    id: "an7-q5", textQ: "Selon l'annonce, à quel étage ?", text: ["1er étage", "2e étage", "Rez-de-chaussée"], textC: 0,
    img: ["1er étage", "2e étage", "Rez-de-chaussée"], imgC: 0,
    fillQ: "Selon l'annonce, articles au ___ étage.", fill: "1er", fillA: ["premier"]
  }
] as RawQ[]);

const ANNONCE_8 = buildPool("base", "annonce-8", [
  {
    id: "an8-q1", textQ: "Selon l'annonce, où sommes-nous ?", text: ["À l'aéroport", "À la gare", "Au port"], textC: 0,
    img: ["À l'aéroport", "À la gare", "Au port"], imgC: 0,
    fillQ: "Selon l'annonce, message à l'_________.", fill: "aéroport", fillA: ["aeroport"]
  },
  {
    id: "an8-q2", textQ: "Selon l'annonce, quel vol ?", text: ["AF 1205", "AF 3402", "AF 8910"], textC: 0,
    img: ["AF 1205", "AF 3402", "AF 8910"], imgC: 0,
    fillQ: "Selon l'annonce, vol AF _________.", fill: "1205"
  },
  {
    id: "an8-q3", textQ: "Selon l'annonce, quelle porte d'embarquement ?", text: ["Porte 12", "Porte 18", "Porte 24"], textC: 1,
    img: ["Porte 12", "Porte 18", "Porte 24"], imgC: 1,
    fillQ: "Selon l'annonce, porte d'embarquement ___.", fill: "18"
  },
  {
    id: "an8-q4", textQ: "Selon l'annonce, quelle destination ?", text: ["Nice", "Toulouse", "Nantes"], textC: 0,
    img: ["Nice", "Toulouse", "Nantes"], imgC: 0,
    fillQ: "Selon l'annonce, destination : _________.", fill: "Nice", fillA: ["nice"]
  },
  {
    id: "an8-q5", textQ: "Selon l'annonce, à quelle heure ?", text: ["11 h 20", "11 h 45", "12 h 10"], textC: 1,
    img: ["11 h 20", "11 h 45", "12 h 10"], imgC: 1,
    fillQ: "Selon l'annonce, départ à 11 h ___.", fill: "45"
  }
] as RawQ[]);

const ANNONCE_9 = buildPool("base", "annonce-9", [
  {
    id: "an9-q1", textQ: "Selon l'annonce, quel lieu culturel ?", text: ["Le musée", "Le théâtre", "La galerie"], textC: 0,
    img: ["Le musée", "Le théâtre", "La galerie"], imgC: 0,
    fillQ: "Selon l'annonce, visite du _________.", fill: "musée", fillA: ["musee"]
  },
  {
    id: "an9-q2", textQ: "Selon l'annonce, à quelle heure ouvre-t-on ?", text: ["À 9 h 30", "À 10 h", "À 11 h"], textC: 1,
    img: ["À 9 h 30", "À 10 h", "À 11 h"], imgC: 1,
    fillQ: "Selon l'annonce, ouverture à ___ h.", fill: "10"
  },
  {
    id: "an9-q3", textQ: "Selon l'annonce, quel est le prix d'entrée ?", text: ["8 €", "10 €", "12 €"], textC: 1,
    img: ["8 €", "10 €", "12 €"], imgC: 1,
    fillQ: "Selon l'annonce, entrée à ___ €.", fill: "10"
  },
  {
    id: "an9-q4", textQ: "Selon l'annonce, qui entre gratuitement ?", text: ["Les moins de 12 ans", "Les moins de 18 ans", "Les étudiants"], textC: 1,
    img: ["Les moins de 12 ans", "Les moins de 18 ans", "Les étudiants"], imgC: 1,
    fillQ: "Selon l'annonce, gratuit pour les moins de ___ ans.", fill: "18"
  },
  {
    id: "an9-q5", textQ: "Selon l'annonce, quel jour est fermé ?", text: ["Le lundi", "Le mardi", "Le mercredi"], textC: 1,
    img: ["Le lundi", "Le mardi", "Le mercredi"], imgC: 1,
    fillQ: "Selon l'annonce, fermé le _________.", fill: "mardi"
  }
] as RawQ[]);

const ANNONCE_10 = buildPool("base", "annonce-10", [
  {
    id: "an10-q1", textQ: "Selon l'annonce, où aller ?", text: ["Au cinéma", "Au théâtre", "Au concert"], textC: 0,
    img: ["Au cinéma", "Au théâtre", "Au concert"], imgC: 0,
    fillQ: "Selon l'annonce, séance au _________.", fill: "cinéma", fillA: ["cinema"]
  },
  {
    id: "an10-q2", textQ: "Selon l'annonce, quel film ?", text: ["Le Petit Prince", "Amélie", "Intouchables"], textC: 0,
    img: ["Le Petit Prince", "Amélie", "Intouchables"], imgC: 0,
    fillQ: "Selon l'annonce, film : Le Petit _________.", fill: "Prince", fillA: ["prince"]
  },
  {
    id: "an10-q3", textQ: "Selon l'annonce, à quelle heure la séance ?", text: ["À 15 h", "À 17 h 30", "À 20 h"], textC: 2,
    img: ["À 15 h", "À 17 h 30", "À 20 h"], imgC: 2,
    fillQ: "Selon l'annonce, séance à ___ h.", fill: "20"
  },
  {
    id: "an10-q4", textQ: "Selon l'annonce, dans quelle salle ?", text: ["Salle 1", "Salle 3", "Salle 5"], textC: 1,
    img: ["Salle 1", "Salle 3", "Salle 5"], imgC: 1,
    fillQ: "Selon l'annonce, salle numéro ___.", fill: "3"
  },
  {
    id: "an10-q5", textQ: "Selon l'annonce, quel prix ?", text: ["7 €", "8 €", "9 €"], textC: 0,
    img: ["7 €", "8 €", "9 €"], imgC: 0,
    fillQ: "Selon l'annonce, place à ___ €.", fill: "7"
  }
] as RawQ[]);

const ANNONCE_11 = buildPool("base", "annonce-11", [
  {
    id: "an11-q1", textQ: "Selon l'annonce, quel événement ?", text: ["Le marché", "La braderie", "La foire"], textC: 0,
    img: ["Le marché", "La braderie", "La foire"], imgC: 0,
    fillQ: "Selon l'annonce, c'est le _________.", fill: "marché", fillA: ["marche"]
  },
  {
    id: "an11-q2", textQ: "Selon l'annonce, quel jour ?", text: ["Dimanche matin", "Samedi matin", "Vendredi matin"], textC: 0,
    img: ["Dimanche matin", "Samedi matin", "Vendredi matin"], imgC: 0,
    fillQ: "Selon l'annonce, le _________ matin.", fill: "dimanche"
  },
  {
    id: "an11-q3", textQ: "Selon l'annonce, où ?", text: ["Place du Marché", "Rue Centrale", "Place de la Mairie"], textC: 0,
    img: ["Place du Marché", "Rue Centrale", "Place de la Mairie"], imgC: 0,
    fillQ: "Selon l'annonce, rendez-vous place du _________.", fill: "Marché", fillA: ["marche"]
  },
  {
    id: "an11-q4", textQ: "Selon l'annonce, quels produits ?", text: ["Des légumes", "Des fromages", "Des fleurs"], textC: 0,
    img: ["Des légumes", "Des fromages", "Des fleurs"], imgC: 0,
    fillQ: "Selon l'annonce, vente de _________.", fill: "légumes", fillA: ["legumes"]
  },
  {
    id: "an11-q5", textQ: "Selon l'annonce, à partir de quelle heure ?", text: ["7 h 30", "8 h", "9 h"], textC: 1,
    img: ["7 h 30", "8 h", "9 h"], imgC: 1,
    fillQ: "Selon l'annonce, ouverture à ___ h.", fill: "8"
  }
] as RawQ[]);

const ANNONCE_12 = buildPool("base", "annonce-12", [
  {
    id: "an12-q1", textQ: "Selon l'annonce, quel métro est concerné ?", text: ["La ligne 3", "La ligne 5", "La ligne 9"], textC: 0,
    img: ["La ligne 3", "La ligne 5", "La ligne 9"], imgC: 0,
    fillQ: "Selon l'annonce, ligne ___ du métro.", fill: "3"
  },
  {
    id: "an12-q2", textQ: "Selon l'annonce, quelle station est fermée ?", text: ["Opéra", "République", "Bastille"], textC: 0,
    img: ["Opéra", "République", "Bastille"], imgC: 0,
    fillQ: "Selon l'annonce, station _________ fermée.", fill: "Opéra", fillA: ["opera"]
  },
  {
    id: "an12-q3", textQ: "Selon l'annonce, pourquoi ?", text: ["Des travaux", "Un incident", "Une manifestation"], textC: 0,
    img: ["Des travaux", "Un incident", "Une manifestation"], imgC: 0,
    fillQ: "Selon l'annonce, fermeture pour des _________.", fill: "travaux"
  },
  {
    id: "an12-q4", textQ: "Selon l'annonce, quel transport alternatif ?", text: ["Le bus 21", "Le bus 38", "Le tramway"], textC: 0,
    img: ["Le bus 21", "Le bus 38", "Le tramway"], imgC: 0,
    fillQ: "Selon l'annonce, prenez le bus ___.", fill: "21"
  },
  {
    id: "an12-q5", textQ: "Selon l'annonce, jusqu'à quel jour ?", text: ["Vendredi", "Samedi", "Dimanche"], textC: 2,
    img: ["Vendredi", "Samedi", "Dimanche"], imgC: 2,
    fillQ: "Selon l'annonce, travaux jusqu'au _________.", fill: "dimanche"
  }
] as RawQ[]);

const ANNONCE_13 = buildPool("base", "annonce-13", [
  {
    id: "an13-q1", textQ: "Selon l'annonce, quel établissement ?", text: ["Le restaurant Le Jardin", "Le café Central", "La brasserie du Port"], textC: 0,
    img: ["Le restaurant Le Jar…", "Le café Central", "La brasserie du Port"], imgC: 0,
    fillQ: "Selon l'annonce, restaurant Le _________.", fill: "Jardin", fillA: ["jardin"]
  },
  {
    id: "an13-q2", textQ: "Selon l'annonce, quel est le menu du jour ?", text: ["Salade et poulet", "Soupe et poisson", "Pâtes et dessert"], textC: 0,
    img: ["Salade et poulet", "Soupe et poisson", "Pâtes et dessert"], imgC: 0,
    fillQ: "Selon l'annonce, menu : salade et _________.", fill: "poulet"
  },
  {
    id: "an13-q3", textQ: "Selon l'annonce, quel prix ?", text: ["12 €", "14 €", "16 €"], textC: 1,
    img: ["12 €", "14 €", "16 €"], imgC: 1,
    fillQ: "Selon l'annonce, menu à ___ €.", fill: "14"
  },
  {
    id: "an13-q4", textQ: "Selon l'annonce, à quelle heure déjeuner ?", text: ["À midi", "À 12 h 30", "À 13 h"], textC: 0,
    img: ["À midi", "À 12 h 30", "À 13 h"], imgC: 0,
    fillQ: "Selon l'annonce, déjeuner à _________.", fill: "midi"
  },
  {
    id: "an13-q5", textQ: "Selon l'annonce, quelle boisson incluse ?", text: ["De l'eau", "Du jus", "Un café"], textC: 0,
    img: ["De l'eau", "Du jus", "Un café"], imgC: 0,
    fillQ: "Selon l'annonce, boisson : de l'_________.", fill: "eau"
  }
] as RawQ[]);

const ANNONCE_14 = buildPool("base", "annonce-14", [
  {
    id: "an14-q1", textQ: "Selon l'annonce, quel lieu ?", text: ["Le parc", "Le jardin", "La forêt"], textC: 0,
    img: ["Le parc", "Le jardin", "La forêt"], imgC: 0,
    fillQ: "Selon l'annonce, règles du _________.", fill: "parc"
  },
  {
    id: "an14-q2", textQ: "Selon l'annonce, quelle règle ?", text: ["Ne pas courir", "Ne pas fumer", "Ne pas nager"], textC: 0,
    img: ["Ne pas courir", "Ne pas fumer", "Ne pas nager"], imgC: 0,
    fillQ: "Selon l'annonce, il est interdit de _________.", fill: "courir"
  },
  {
    id: "an14-q3", textQ: "Selon l'annonce, ouverture à quelle heure ?", text: ["À 7 h", "À 8 h", "À 9 h"], textC: 1,
    img: ["À 7 h", "À 8 h", "À 9 h"], imgC: 1,
    fillQ: "Selon l'annonce, ouvert à ___ h.", fill: "8"
  },
  {
    id: "an14-q4", textQ: "Selon l'annonce, fermeture à quelle heure ?", text: ["À 19 h", "À 20 h", "À 21 h"], textC: 1,
    img: ["À 19 h", "À 20 h", "À 21 h"], imgC: 1,
    fillQ: "Selon l'annonce, fermé à ___ h.", fill: "20"
  },
  {
    id: "an14-q5", textQ: "Selon l'annonce, règle pour les chiens ?", text: ["Chiens en laisse", "Pas d'animaux", "Chats interdits"], textC: 0,
    img: ["Chiens en laisse", "Pas d'animaux", "Chats interdits"], imgC: 0,
    fillQ: "Selon l'annonce, chiens en _________.", fill: "laisse"
  }
] as RawQ[]);

const ANNONCE_16 = buildPool("base", "annonce-16", [
  {
    id: "an16-q1", textQ: "Selon l'annonce, quel commerce ?", text: ["La pharmacie", "La boulangerie", "La banque"], textC: 0,
    img: ["La pharmacie", "La boulangerie", "La banque"], imgC: 0,
    fillQ: "Selon l'annonce, horaires de la _________.", fill: "pharmacie"
  },
  {
    id: "an16-q2", textQ: "Selon l'annonce, quels horaires ?", text: ["8 h – 20 h", "9 h – 19 h", "8 h 30 – 18 h 30"], textC: 0,
    img: ["8 h – 20 h", "9 h – 19 h", "8 h 30 – 18 h 30"], imgC: 0,
    fillQ: "Selon l'annonce, ouverte jusqu'à ___ h.", fill: "20"
  },
  {
    id: "an16-q3", textQ: "Selon l'annonce, quel service ?", text: ["Les ordonnances", "Les vaccins", "Les conseils"], textC: 0,
    img: ["Les ordonnances", "Les vaccins", "Les conseils"], imgC: 0,
    fillQ: "Selon l'annonce, service des _________.", fill: "ordonnances"
  },
  {
    id: "an16-q4", textQ: "Selon l'annonce, la nuit, où aller ?", text: ["Pharmacie de garde", "Aux urgences", "À l'hôpital"], textC: 0,
    img: ["Pharmacie de garde", "Aux urgences", "À l'hôpital"], imgC: 0,
    fillQ: "Selon l'annonce, nuit : pharmacie de _________.", fill: "garde"
  },
  {
    id: "an16-q5", textQ: "Selon l'annonce, quelle adresse ?", text: ["Rue Pasteur", "Avenue Victor Hugo", "Boulevard Gambetta"], textC: 0,
    img: ["Rue Pasteur", "Avenue Victor Hugo", "Boulevard Gambetta"], imgC: 0,
    fillQ: "Selon l'annonce, adresse : rue _________.", fill: "Pasteur", fillA: ["pasteur"]
  }
] as RawQ[]);

const ANNONCE_17 = buildPool("base", "annonce-17", [
  {
    id: "an17-q1", textQ: "Selon l'annonce, quel lieu ?", text: ["Le centre commercial", "Le marché", "La galerie"], textC: 0,
    img: ["Le centre commercial", "Le marché", "La galerie"], imgC: 0,
    fillQ: "Selon l'annonce, événement au centre _________.", fill: "commercial"
  },
  {
    id: "an17-q2", textQ: "Selon l'annonce, quel événement ?", text: ["Les soldes d'été", "La fête de la musique", "Journée portes ouvertes"], textC: 1,
    img: ["Les soldes d'été", "La fête de la musique", "Journée portes ouver…"], imgC: 1,
    fillQ: "Selon l'annonce, fête de la _________.", fill: "musique"
  },
  {
    id: "an17-q3", textQ: "Selon l'annonce, à quelle heure ?", text: ["À 14 h", "À 15 h", "À 16 h"], textC: 1,
    img: ["À 14 h", "À 15 h", "À 16 h"], imgC: 1,
    fillQ: "Selon l'annonce, début à ___ h.", fill: "15"
  },
  {
    id: "an17-q4", textQ: "Selon l'annonce, quel magasin participe ?", text: ["Fnac", "Décathlon", "H&M"], textC: 0,
    img: ["Fnac", "Décathlon", "H&M"], imgC: 0,
    fillQ: "Selon l'annonce, participation de la _________.", fill: "Fnac", fillA: ["fnac"]
  },
  {
    id: "an17-q5", textQ: "Selon l'annonce, le parking est-il gratuit ?", text: ["Oui, gratuit", "Non, payant", "Fermé"], textC: 0,
    img: ["Oui, gratuit", "Non, payant", "Fermé"], imgC: 0,
    fillQ: "Selon l'annonce, parking _________.", fill: "gratuit"
  }
] as RawQ[]);

const INSTRUCTION_1 = buildPool("base", "instruction-1", [
  {
    id: "in1-q1", textQ: "Selon les instructions, que prépare-t-on ?", text: ["Une salade", "Un gâteau", "Une soupe"], textC: 0,
    img: ["Une salade", "Un gâteau", "Une soupe"], imgC: 0,
    fillQ: "Selon les instructions, on prépare un _________.", fill: "gâteau", fillA: ["gateau"]
  },
  {
    id: "in1-q2", textQ: "Selon les instructions, quelle est la première étape ?", text: ["Mélanger la farine", "Préchauffer le four", "Couper les légumes"], textC: 1,
    img: ["Mélanger la farine", "Préchauffer le four", "Couper les légumes"], imgC: 1,
    fillQ: "Selon les instructions, d'abord préchauffer le _________.", fill: "four"
  },
  {
    id: "in1-q3", textQ: "Selon les instructions, combien d'œufs ?", text: ["Deux œufs", "Trois œufs", "Quatre œufs"], textC: 2,
    img: ["Deux œufs", "Trois œufs", "Quatre œufs"], imgC: 2,
    fillQ: "Selon les instructions, il faut ___ œufs.", fill: "quatre", fillA: ["4"]
  },
  {
    id: "in1-q4", textQ: "Selon les instructions, à quelle température ?", text: ["160 °C", "180 °C", "200 °C"], textC: 1,
    img: ["160 °C", "180 °C", "200 °C"], imgC: 1,
    fillQ: "Selon les instructions, four à ___ °C.", fill: "180"
  },
  {
    id: "in1-q5", textQ: "Selon les instructions, combien de temps au four ?", text: ["20 minutes", "30 minutes", "40 minutes"], textC: 1,
    img: ["20 minutes", "30 minutes", "40 minutes"], imgC: 1,
    fillQ: "Selon les instructions, cuisson ___ minutes.", fill: "30"
  }
] as RawQ[]);

const INSTRUCTION_2 = buildPool("base", "instruction-2", [
  {
    id: "in2-q1", textQ: "Selon les instructions, où se passe l'examen ?", text: ["Salle 12", "Salle 8", "Salle 20"], textC: 0,
    img: ["Salle 12", "Salle 8", "Salle 20"], imgC: 0,
    fillQ: "Selon les instructions, examen salle ___.", fill: "12"
  },
  {
    id: "in2-q2", textQ: "Selon les instructions, à quelle heure arriver ?", text: ["À 8 h 30", "À 9 h", "À 9 h 30"], textC: 0,
    img: ["À 8 h 30", "À 9 h", "À 9 h 30"], imgC: 0,
    fillQ: "Selon les instructions, arriver à 8 h ___.", fill: "30"
  },
  {
    id: "in2-q3", textQ: "Selon les instructions, qu'est-ce qu'il faut apporter ?", text: ["Une pièce d'identité", "Un dictionnaire", "Un téléphone"], textC: 0,
    img: ["Une pièce d'identité", "Un dictionnaire", "Un téléphone"], imgC: 0,
    fillQ: "Selon les instructions, apporter une pièce d'_________.", fill: "identité", fillA: ["identite"]
  },
  {
    id: "in2-q4", textQ: "Selon les instructions, qu'est-ce qui est interdit ?", text: ["Le téléphone", "L'eau", "Le stylo"], textC: 0,
    img: ["Le téléphone", "L'eau", "Le stylo"], imgC: 0,
    fillQ: "Selon les instructions, le _________ est interdit.", fill: "téléphone", fillA: ["telephone"]
  },
  {
    id: "in2-q5", textQ: "Selon les instructions, combien de temps dure l'examen ?", text: ["1 heure", "1 h 30", "2 heures"], textC: 1,
    img: ["1 heure", "1 h 30", "2 heures"], imgC: 1,
    fillQ: "Selon les instructions, durée : 1 h ___.", fill: "30", fillA: ["1h30"]
  }
] as RawQ[]);

const INSTRUCTION_3 = buildPool("base", "instruction-3", [
  {
    id: "in3-q1", textQ: "Selon les consignes, que faut-il porter ?", text: ["Un bonnet", "Des chaussures", "Un manteau"], textC: 0,
    img: ["Un bonnet", "Des chaussures", "Un manteau"], imgC: 0,
    fillQ: "Selon les consignes, porter un _________.", fill: "bonnet"
  },
  {
    id: "in3-q2", textQ: "Selon les consignes, peut-on courir ?", text: ["Oui", "Non", "Seulement les enfants"], textC: 1,
    img: ["Oui", "Non", "Seulement les enfants"], imgC: 1,
    fillQ: "Selon les consignes, courir : _________.", fill: "non"
  },
  {
    id: "in3-q3", textQ: "Selon les consignes, où se doucher ?", text: ["Avant la piscine", "Après la piscine", "Ce n'est pas obligatoire"], textC: 0,
    img: ["Avant la piscine", "Après la piscine", "Ce n'est pas obligat…"], imgC: 0,
    fillQ: "Selon les consignes, douche _________ la piscine.", fill: "avant"
  },
  {
    id: "in3-q4", textQ: "Selon les consignes, les enfants de moins de 8 ans ?", text: ["Doivent être accompagnés", "Ne peuvent pas entrer", "Nagent seuls"], textC: 0,
    img: ["Doivent être accompa…", "Ne peuvent pas entrer", "Nagent seuls"], imgC: 0,
    fillQ: "Selon les consignes, enfants accompagnés : _________.", fill: "oui", fillA: ["doivent être accompagnés"]
  },
  {
    id: "in3-q5", textQ: "Selon les consignes, peut-on manger au bord ?", text: ["Oui", "Non", "Seulement des fruits"], textC: 1,
    img: ["Oui", "Non", "Seulement des fruits"], imgC: 1,
    fillQ: "Selon les consignes, manger au bord : _________.", fill: "non"
  }
] as RawQ[]);

const INSTRUCTION_4 = buildPool("base", "instruction-4", [
  {
    id: "in4-q1", textQ: "Selon le mode d'emploi, quel bouton appuyer d'abord ?", text: ["Marche/Arrêt", "Programme", "Température"], textC: 0,
    img: ["Marche/Arrêt", "Programme", "Température"], imgC: 0,
    fillQ: "Selon le mode d'emploi, bouton Marche/_________.", fill: "Arrêt", fillA: ["arret"]
  },
  {
    id: "in4-q2", textQ: "Selon le mode d'emploi, combien de lessive ?", text: ["Une dose", "Deux doses", "Trois doses"], textC: 0,
    img: ["Une dose", "Deux doses", "Trois doses"], imgC: 0,
    fillQ: "Selon le mode d'emploi, ___ dose de lessive.", fill: "une", fillA: ["1"]
  },
  {
    id: "in4-q3", textQ: "Selon le mode d'emploi, quel programme pour le coton ?", text: ["Programme 1", "Programme 3", "Programme 5"], textC: 1,
    img: ["Programme 1", "Programme 3", "Programme 5"], imgC: 1,
    fillQ: "Selon le mode d'emploi, programme ___.", fill: "3"
  },
  {
    id: "in4-q4", textQ: "Selon le mode d'emploi, que ne faut-il pas faire ?", text: ["Ouvrir pendant le cycle", "Fermer la porte", "Brancher la machine"], textC: 0,
    img: ["Ouvrir pendant le cy…", "Fermer la porte", "Brancher la machine"], imgC: 0,
    fillQ: "Selon le mode d'emploi, ne pas _________ pendant le cycle.", fill: "ouvrir"
  },
  {
    id: "in4-q5", textQ: "Selon le mode d'emploi, combien de temps le cycle ?", text: ["45 minutes", "60 minutes", "90 minutes"], textC: 1,
    img: ["45 minutes", "60 minutes", "90 minutes"], imgC: 1,
    fillQ: "Selon le mode d'emploi, cycle de ___ minutes.", fill: "60"
  }
] as RawQ[]);

const INSTRUCTION_5 = buildPool("base", "instruction-5", [
  {
    id: "in5-q1", textQ: "Selon les instructions, où aller d'abord ?", text: ["Tout droit", "À gauche", "À droite"], textC: 0,
    img: ["Tout droit", "À gauche", "À droite"], imgC: 0,
    fillQ: "Selon les instructions, aller tout _________.", fill: "droit"
  },
  {
    id: "in5-q2", textQ: "Selon les instructions, combien de minutes marcher ?", text: ["5 minutes", "10 minutes", "15 minutes"], textC: 1,
    img: ["5 minutes", "10 minutes", "15 minutes"], imgC: 1,
    fillQ: "Selon les instructions, marcher ___ minutes.", fill: "10"
  },
  {
    id: "in5-q3", textQ: "Selon les instructions, quoi prendre après le pont ?", text: ["Le bus 4", "Le métro", "Le tramway"], textC: 0,
    img: ["Le bus 4", "Le métro", "Le tramway"], imgC: 0,
    fillQ: "Selon les instructions, prendre le bus ___.", fill: "4"
  },
  {
    id: "in5-q4", textQ: "Selon les instructions, où descendre ?", text: ["Arrêt Mairie", "Arrêt Gare", "Arrêt École"], textC: 0,
    img: ["Arrêt Mairie", "Arrêt Gare", "Arrêt École"], imgC: 0,
    fillQ: "Selon les instructions, descendre à l'arrêt _________.", fill: "Mairie", fillA: ["mairie"]
  },
  {
    id: "in5-q5", textQ: "Selon les instructions, le bâtiment est ?", text: ["En face de l'église", "Derrière le parc", "À côté de la poste"], textC: 2,
    img: ["En face de l'église", "Derrière le parc", "À côté de la poste"], imgC: 2,
    fillQ: "Selon les instructions, bâtiment à côté de la _________.", fill: "poste"
  }
] as RawQ[]);

const CONVERSATION_1 = buildPool("base", "conversation-1", [
  {
    id: "cv1-q1", textQ: "Dans cette conversation, qui parle en premier ?", text: ["Le serveur", "Le client", "Un ami"], textC: 0,
    img: ["Le serveur", "Le client", "Un ami"], imgC: 0,
    fillQ: "Dans cette conversation, le _________ parle en premier.", fill: "serveur"
  },
  {
    id: "cv1-q2", textQ: "Dans cette conversation, où sont les personnes ?", text: ["Au café", "Au restaurant", "À la boulangerie"], textC: 0,
    img: ["Au café", "Au restaurant", "À la boulangerie"], imgC: 0,
    fillQ: "Dans cette conversation, elles sont au _________.", fill: "café", fillA: ["cafe"]
  },
  {
    id: "cv1-q3", textQ: "Dans cette conversation, que commande le client ?", text: ["Un café", "Un thé", "Un jus"], textC: 0,
    img: ["Un café", "Un thé", "Un jus"], imgC: 0,
    fillQ: "Dans cette conversation, il commande un _________.", fill: "café", fillA: ["cafe"]
  },
  {
    id: "cv1-q4", textQ: "Dans cette conversation, combien ça coûte ?", text: ["2 €", "2,50 €", "3 €"], textC: 1,
    img: ["2 €", "2,50 €", "3 €"], imgC: 1,
    fillQ: "Dans cette conversation, le prix est 2,50 _________.", fill: "€", fillA: ["euros"]
  },
  {
    id: "cv1-q5", textQ: "Dans cette conversation, comment paie-t-on ?", text: ["En espèces", "Par carte", "Par téléphone"], textC: 1,
    img: ["En espèces", "Par carte", "Par téléphone"], imgC: 1,
    fillQ: "Dans cette conversation, paiement par _________.", fill: "carte"
  },
  {
    id: "cv1-q6", textQ: "Dans cette conversation, quand a lieu l'échange ?", text: ["Le matin", "L'après-midi", "Le soir"], textC: 0,
    img: ["Le matin", "L'après-midi", "Le soir"], imgC: 0,
    fillQ: "Dans cette conversation, c'est le _________.", fill: "matin"
  },
  {
    id: "cv1-q7", textQ: "Dans cette conversation, le client veut-il autre chose ?", text: ["Non, c'est tout", "Oui, un dessert", "Oui, un sandwich"], textC: 0,
    img: ["Non, c'est tout", "Oui, un dessert", "Oui, un sandwich"], imgC: 0,
    fillQ: "Dans cette conversation, réponse : c'est _________.", fill: "tout"
  },
  {
    id: "cv1-q8", textQ: "Dans cette conversation, quel est le ton ?", text: ["Poli", "En colère", "Triste"], textC: 0,
    img: ["Poli", "En colère", "Triste"], imgC: 0,
    fillQ: "Dans cette conversation, le ton est _________.", fill: "poli"
  },
  {
    id: "cv1-q9", textQ: "Dans cette conversation, le serveur est-il disponible ?", text: ["Oui", "Non", "On ne sait pas"], textC: 0,
    img: ["Oui", "Non", "On ne sait pas"], imgC: 0,
    fillQ: "Dans cette conversation, le serveur est _________.", fill: "disponible", fillA: ["oui"]
  },
  {
    id: "cv1-q10", textQ: "Dans cette conversation, que dit le client à la fin ?", text: ["Merci", "Au revoir seulement", "Rien"], textC: 0,
    img: ["Merci", "Au revoir seulement", "Rien"], imgC: 0,
    fillQ: "Dans cette conversation, le client dit _________.", fill: "merci"
  }
] as RawQ[]);

const CONVERSATION_2 = buildPool("base", "conversation-2", [
  {
    id: "cv2-q1", textQ: "Dans cette conversation, qui demande de l'aide ?", text: ["Un voyageur", "Un employé", "Un enfant"], textC: 0,
    img: ["Un voyageur", "Un employé", "Un enfant"], imgC: 0,
    fillQ: "Dans cette conversation, le _________ demande de l'aide.", fill: "voyageur"
  },
  {
    id: "cv2-q2", textQ: "Dans cette conversation, où sont-ils ?", text: ["À la gare", "À l'aéroport", "Au métro"], textC: 0,
    img: ["À la gare", "À l'aéroport", "Au métro"], imgC: 0,
    fillQ: "Dans cette conversation, ils sont à la _________.", fill: "gare"
  },
  {
    id: "cv2-q3", textQ: "Dans cette conversation, quelle destination ?", text: ["Paris", "Lille", "Rennes"], textC: 0,
    img: ["Paris", "Lille", "Rennes"], imgC: 0,
    fillQ: "Dans cette conversation, destination : _________.", fill: "Paris", fillA: ["paris"]
  },
  {
    id: "cv2-q4", textQ: "Dans cette conversation, à quelle heure part le train ?", text: ["14 h 20", "15 h 05", "16 h 40"], textC: 0,
    img: ["14 h 20", "15 h 05", "16 h 40"], imgC: 0,
    fillQ: "Dans cette conversation, départ à 14 h ___.", fill: "20"
  },
  {
    id: "cv2-q5", textQ: "Dans cette conversation, quel quai ?", text: ["Quai 3", "Quai 5", "Quai 7"], textC: 1,
    img: ["Quai 3", "Quai 5", "Quai 7"], imgC: 1,
    fillQ: "Dans cette conversation, train au quai ___.", fill: "5"
  },
  {
    id: "cv2-q6", textQ: "Dans cette conversation, quel billet ?", text: ["Aller simple", "Aller-retour", "Abonnement"], textC: 0,
    img: ["Aller simple", "Aller-retour", "Abonnement"], imgC: 0,
    fillQ: "Dans cette conversation, billet _________ simple.", fill: "aller"
  },
  {
    id: "cv2-q7", textQ: "Dans cette conversation, l'employé aide-t-il ?", text: ["Oui", "Non", "Il refuse"], textC: 0,
    img: ["Oui", "Non", "Il refuse"], imgC: 0,
    fillQ: "Dans cette conversation, l'employé _________.", fill: "aide"
  },
  {
    id: "cv2-q8", textQ: "Dans cette conversation, y a-t-il un retard ?", text: ["Non", "Oui, 10 minutes", "Oui, 30 minutes"], textC: 0,
    img: ["Non", "Oui, 10 minutes", "Oui, 30 minutes"], imgC: 0,
    fillQ: "Dans cette conversation, retard : _________.", fill: "non"
  },
  {
    id: "cv2-q9", textQ: "Dans cette conversation, quand voyage-t-on ?", text: ["Aujourd'hui", "Demain", "La semaine prochaine"], textC: 0,
    img: ["Aujourd'hui", "Demain", "La semaine prochaine"], imgC: 0,
    fillQ: "Dans cette conversation, voyage _________.", fill: "aujourd'hui"
  },
  {
    id: "cv2-q10", textQ: "Dans cette conversation, que dit le voyageur ?", text: ["Merci beaucoup", "Je ne comprends pas", "Au revoir seulement"], textC: 0,
    img: ["Merci beaucoup", "Je ne comprends pas", "Au revoir seulement"], imgC: 0,
    fillQ: "Dans cette conversation, il dit merci _________.", fill: "beaucoup"
  }
] as RawQ[]);

const CONVERSATION_3 = buildPool("base", "conversation-3", [
  {
    id: "cv3-q1", textQ: "Dans cette conversation, qui parle ?", text: ["Un vendeur et une cliente", "Deux amis", "Un professeur et un élève"], textC: 0,
    img: ["Un vendeur et une cl…", "Deux amis", "Un professeur et un …"], imgC: 0,
    fillQ: "Dans cette conversation, un vendeur et une _________.", fill: "cliente"
  },
  {
    id: "cv3-q2", textQ: "Dans cette conversation, où sont-ils ?", text: ["Au magasin", "À la maison", "À l'école"], textC: 0,
    img: ["Au magasin", "À la maison", "À l'école"], imgC: 0,
    fillQ: "Dans cette conversation, ils sont au _________.", fill: "magasin"
  },
  {
    id: "cv3-q3", textQ: "Dans cette conversation, quel article ?", text: ["Une robe", "Un pantalon", "Un manteau"], textC: 0,
    img: ["Une robe", "Un pantalon", "Un manteau"], imgC: 0,
    fillQ: "Dans cette conversation, elle achète une _________.", fill: "robe"
  },
  {
    id: "cv3-q4", textQ: "Dans cette conversation, quelle couleur ?", text: ["Bleu", "Rouge", "Vert"], textC: 0,
    img: ["Bleu", "Rouge", "Vert"], imgC: 0,
    fillQ: "Dans cette conversation, couleur : _________.", fill: "bleu"
  },
  {
    id: "cv3-q5", textQ: "Dans cette conversation, quel prix ?", text: ["29 €", "35 €", "45 €"], textC: 0,
    img: ["29 €", "35 €", "45 €"], imgC: 0,
    fillQ: "Dans cette conversation, prix : ___ €.", fill: "29"
  },
  {
    id: "cv3-q6", textQ: "Dans cette conversation, quelle taille ?", text: ["S", "M", "L"], textC: 1,
    img: ["S", "M", "L"], imgC: 1,
    fillQ: "Dans cette conversation, taille ___.", fill: "M"
  },
  {
    id: "cv3-q7", textQ: "Dans cette conversation, la cliente achète-t-elle ?", text: ["Oui", "Non", "Plus tard"], textC: 0,
    img: ["Oui", "Non", "Plus tard"], imgC: 0,
    fillQ: "Dans cette conversation, elle _________.", fill: "achète"
  },
  {
    id: "cv3-q8", textQ: "Dans cette conversation, comment paie-t-elle ?", text: ["Par carte", "En espèces", "Par chèque"], textC: 0,
    img: ["Par carte", "En espèces", "Par chèque"], imgC: 0,
    fillQ: "Dans cette conversation, paiement par _________.", fill: "carte"
  },
  {
    id: "cv3-q9", textQ: "Dans cette conversation, le vendeur est-il aimable ?", text: ["Oui", "Non", "Il est pressé"], textC: 0,
    img: ["Oui", "Non", "Il est pressé"], imgC: 0,
    fillQ: "Dans cette conversation, le vendeur est _________.", fill: "aimable", fillA: ["oui"]
  },
  {
    id: "cv3-q10", textQ: "Dans cette conversation, que fait la cliente à la fin ?", text: ["Elle part avec son achat", "Elle reviendra demain", "Elle échange l'article"], textC: 0,
    img: ["Elle part avec son a…", "Elle reviendra demain", "Elle échange l'article"], imgC: 0,
    fillQ: "Dans cette conversation, elle part avec son _________.", fill: "achat"
  }
] as RawQ[]);

const CONVERSATION_4 = buildPool("base", "conversation-4", [
  {
    id: "cv4-q1", textQ: "Dans cette conversation, où mangent-ils ?", text: ["Au restaurant", "À la maison", "Au café"], textC: 0,
    img: ["Au restaurant", "À la maison", "Au café"], imgC: 0,
    fillQ: "Dans cette conversation, repas au _________.", fill: "restaurant"
  },
  {
    id: "cv4-q2", textQ: "Dans cette conversation, quel plat ?", text: ["Du poisson", "De la viande", "Des pâtes"], textC: 0,
    img: ["Du poisson", "De la viande", "Des pâtes"], imgC: 0,
    fillQ: "Dans cette conversation, plat : du _________.", fill: "poisson"
  },
  {
    id: "cv4-q3", textQ: "Dans cette conversation, quelle boisson ?", text: ["De l'eau", "Du vin", "Du jus"], textC: 0,
    img: ["De l'eau", "Du vin", "Du jus"], imgC: 0,
    fillQ: "Dans cette conversation, boisson : de l'_________.", fill: "eau"
  },
  {
    id: "cv4-q4", textQ: "Dans cette conversation, quel dessert ?", text: ["Une glace", "Un gâteau", "Un fruit"], textC: 0,
    img: ["Une glace", "Un gâteau", "Un fruit"], imgC: 0,
    fillQ: "Dans cette conversation, dessert : une _________.", fill: "glace"
  },
  {
    id: "cv4-q5", textQ: "Dans cette conversation, combien coûte le repas ?", text: ["28 €", "32 €", "38 €"], textC: 1,
    img: ["28 €", "32 €", "38 €"], imgC: 1,
    fillQ: "Dans cette conversation, addition : ___ €.", fill: "32"
  },
  {
    id: "cv4-q6", textQ: "Dans cette conversation, qui sert ?", text: ["Le serveur", "Le cuisinier", "Le patron"], textC: 0,
    img: ["Le serveur", "Le cuisinier", "Le patron"], imgC: 0,
    fillQ: "Dans cette conversation, c'est le _________ qui sert.", fill: "serveur"
  },
  {
    id: "cv4-q7", textQ: "Dans cette conversation, les clients sont-ils contents ?", text: ["Oui", "Non", "Ils se plaignent"], textC: 0,
    img: ["Oui", "Non", "Ils se plaignent"], imgC: 0,
    fillQ: "Dans cette conversation, clients _________.", fill: "contents", fillA: ["oui"]
  },
  {
    id: "cv4-q8", textQ: "Dans cette conversation, à quelle heure ?", text: ["Midi", "Le soir", "Le matin"], textC: 0,
    img: ["Midi", "Le soir", "Le matin"], imgC: 0,
    fillQ: "Dans cette conversation, repas à _________.", fill: "midi"
  },
  {
    id: "cv4-q9", textQ: "Dans cette conversation, combien de personnes ?", text: ["Deux", "Trois", "Quatre"], textC: 0,
    img: ["Deux", "Trois", "Quatre"], imgC: 0,
    fillQ: "Dans cette conversation, ils sont _________.", fill: "deux", fillA: ["2"]
  },
  {
    id: "cv4-q10", textQ: "Dans cette conversation, que demande le client ?", text: ["L'addition", "Le menu", "Une réservation"], textC: 0,
    img: ["L'addition", "Le menu", "Une réservation"], imgC: 0,
    fillQ: "Dans cette conversation, il demande l'_________.", fill: "addition"
  }
] as RawQ[]);

const CONVERSATION_5 = buildPool("base", "conversation-5", [
  {
    id: "cv5-q1", textQ: "Dans cette conversation, où sont-ils ?", text: ["À l'école", "À la maison", "Au parc"], textC: 0,
    img: ["À l'école", "À la maison", "Au parc"], imgC: 0,
    fillQ: "Dans cette conversation, ils sont à l'_________.", fill: "école", fillA: ["ecole"]
  },
  {
    id: "cv5-q2", textQ: "Dans cette conversation, qui parle ?", text: ["Un professeur et un élève", "Deux parents", "Deux amis"], textC: 0,
    img: ["Un professeur et un …", "Deux parents", "Deux amis"], imgC: 0,
    fillQ: "Dans cette conversation, un professeur et un _________.", fill: "élève", fillA: ["eleve"]
  },
  {
    id: "cv5-q3", textQ: "Dans cette conversation, quelle matière ?", text: ["Les maths", "Le français", "L'histoire"], textC: 0,
    img: ["Les maths", "Le français", "L'histoire"], imgC: 0,
    fillQ: "Dans cette conversation, matière : les _________.", fill: "maths"
  },
  {
    id: "cv5-q4", textQ: "Dans cette conversation, dans quelle salle ?", text: ["Salle 12", "Salle 8", "Salle 15"], textC: 0,
    img: ["Salle 12", "Salle 8", "Salle 15"], imgC: 0,
    fillQ: "Dans cette conversation, cours salle ___.", fill: "12"
  },
  {
    id: "cv5-q5", textQ: "Dans cette conversation, à quelle heure ?", text: ["9 h", "10 h 30", "14 h"], textC: 0,
    img: ["9 h", "10 h 30", "14 h"], imgC: 0,
    fillQ: "Dans cette conversation, cours à ___ h.", fill: "9"
  },
  {
    id: "cv5-q6", textQ: "Dans cette conversation, quel devoir ?", text: ["Exercices page 20", "Une rédaction", "Une lecture"], textC: 0,
    img: ["Exercices page 20", "Une rédaction", "Une lecture"], imgC: 0,
    fillQ: "Dans cette conversation, devoir page ___.", fill: "20"
  },
  {
    id: "cv5-q7", textQ: "Dans cette conversation, quand est l'examen ?", text: ["Demain", "La semaine prochaine", "Aujourd'hui"], textC: 0,
    img: ["Demain", "La semaine prochaine", "Aujourd'hui"], imgC: 0,
    fillQ: "Dans cette conversation, examen _________.", fill: "demain"
  },
  {
    id: "cv5-q8", textQ: "Dans cette conversation, l'élève comprend-il ?", text: ["Oui", "Non", "Il est confus"], textC: 0,
    img: ["Oui", "Non", "Il est confus"], imgC: 0,
    fillQ: "Dans cette conversation, l'élève _________.", fill: "comprend", fillA: ["oui"]
  },
  {
    id: "cv5-q9", textQ: "Dans cette conversation, le professeur est-il strict ?", text: ["Non, il est patient", "Oui, très strict", "Il est en colère"], textC: 0,
    img: ["Non, il est patient", "Oui, très strict", "Il est en colère"], imgC: 0,
    fillQ: "Dans cette conversation, le professeur est _________.", fill: "patient"
  },
  {
    id: "cv5-q10", textQ: "Dans cette conversation, que doit faire l'élève ?", text: ["Réviser", "Partir", "Dormir"], textC: 0,
    img: ["Réviser", "Partir", "Dormir"], imgC: 0,
    fillQ: "Dans cette conversation, l'élève doit _________.", fill: "réviser", fillA: ["reviser"]
  }
] as RawQ[]);

const CONVERSATION_6 = buildPool("base", "conversation-6", [
  {
    id: "cv6-q1", textQ: "Dans cette conversation, où sont-ils ?", text: ["Chez le médecin", "À la pharmacie", "À l'hôpital"], textC: 0,
    img: ["Chez le médecin", "À la pharmacie", "À l'hôpital"], imgC: 0,
    fillQ: "Dans cette conversation, rendez-vous chez le _________.", fill: "médecin", fillA: ["medecin"]
  },
  {
    id: "cv6-q2", textQ: "Dans cette conversation, quel problème ?", text: ["Mal à la tête", "Mal à la gorge", "De la fièvre"], textC: 0,
    img: ["Mal à la tête", "Mal à la gorge", "De la fièvre"], imgC: 0,
    fillQ: "Dans cette conversation, mal à la _________.", fill: "tête", fillA: ["tete"]
  },
  {
    id: "cv6-q3", textQ: "Dans cette conversation, quel rendez-vous ?", text: ["10 h 15", "11 h", "15 h 30"], textC: 0,
    img: ["10 h 15", "11 h", "15 h 30"], imgC: 0,
    fillQ: "Dans cette conversation, RDV à 10 h ___.", fill: "15"
  },
  {
    id: "cv6-q4", textQ: "Dans cette conversation, quel conseil ?", text: ["Se reposer", "Boire de l'eau", "Prendre un médicament"], textC: 0,
    img: ["Se reposer", "Boire de l'eau", "Prendre un médicament"], imgC: 0,
    fillQ: "Dans cette conversation, conseil : se _________.", fill: "reposer"
  },
  {
    id: "cv6-q5", textQ: "Dans cette conversation, qui parle au patient ?", text: ["Le médecin", "L'infirmière", "La secrétaire"], textC: 0,
    img: ["Le médecin", "L'infirmière", "La secrétaire"], imgC: 0,
    fillQ: "Dans cette conversation, c'est le _________ qui parle.", fill: "médecin", fillA: ["medecin"]
  },
  {
    id: "cv6-q6", textQ: "Dans cette conversation, le patient est-il malade ?", text: ["Oui, un peu", "Non", "Très gravement"], textC: 0,
    img: ["Oui, un peu", "Non", "Très gravement"], imgC: 0,
    fillQ: "Dans cette conversation, il est malade un _________.", fill: "peu"
  },
  {
    id: "cv6-q7", textQ: "Dans cette conversation, faut-il une ordonnance ?", text: ["Oui", "Non", "On ne sait pas"], textC: 0,
    img: ["Oui", "Non", "On ne sait pas"], imgC: 0,
    fillQ: "Dans cette conversation, ordonnance : _________.", fill: "oui"
  },
  {
    id: "cv6-q8", textQ: "Dans cette conversation, quand revenir ?", text: ["Si ça ne va pas", "Jamais", "Dans un an"], textC: 0,
    img: ["Si ça ne va pas", "Jamais", "Dans un an"], imgC: 0,
    fillQ: "Dans cette conversation, revenir si ça ne va _________.", fill: "pas"
  },
  {
    id: "cv6-q9", textQ: "Dans cette conversation, le patient a-t-il de la fièvre ?", text: ["Non", "Oui", "Un peu"], textC: 0,
    img: ["Non", "Oui", "Un peu"], imgC: 0,
    fillQ: "Dans cette conversation, fièvre : _________.", fill: "non"
  },
  {
    id: "cv6-q10", textQ: "Dans cette conversation, que dit le patient ?", text: ["Merci docteur", "Je ne suis pas d'accord", "Rien"], textC: 0,
    img: ["Merci docteur", "Je ne suis pas d'acc…", "Rien"], imgC: 0,
    fillQ: "Dans cette conversation, il dit merci _________.", fill: "docteur"
  }
] as RawQ[]);

const CONVERSATION_7 = buildPool("base", "conversation-7", [
  {
    id: "cv7-q1", textQ: "Dans cette conversation, où sont-ils ?", text: ["À la bibliothèque", "À la librairie", "À l'école"], textC: 0,
    img: ["À la bibliothèque", "À la librairie", "À l'école"], imgC: 0,
    fillQ: "Dans cette conversation, ils sont à la _________.", fill: "bibliothèque", fillA: ["bibliotheque"]
  },
  {
    id: "cv7-q2", textQ: "Dans cette conversation, qui parle ?", text: ["La bibliothécaire et un lecteur", "Deux étudiants", "Un enfant et sa mère"], textC: 0,
    img: ["La bibliothécaire et…", "Deux étudiants", "Un enfant et sa mère"], imgC: 0,
    fillQ: "Dans cette conversation, la bibliothécaire et un _________.", fill: "lecteur"
  },
  {
    id: "cv7-q3", textQ: "Dans cette conversation, quel type de livre ?", text: ["Un roman", "Une BD", "Un dictionnaire"], textC: 0,
    img: ["Un roman", "Une BD", "Un dictionnaire"], imgC: 0,
    fillQ: "Dans cette conversation, emprunt d'un _________.", fill: "roman"
  },
  {
    id: "cv7-q4", textQ: "Dans cette conversation, combien de jours d'emprunt ?", text: ["7 jours", "14 jours", "21 jours"], textC: 1,
    img: ["7 jours", "14 jours", "21 jours"], imgC: 1,
    fillQ: "Dans cette conversation, emprunt ___ jours.", fill: "14"
  },
  {
    id: "cv7-q5", textQ: "Dans cette conversation, quelle carte faut-il ?", text: ["Carte de bibliothèque", "Carte d'identité", "Carte étudiante"], textC: 0,
    img: ["Carte de bibliothèque", "Carte d'identité", "Carte étudiante"], imgC: 0,
    fillQ: "Dans cette conversation, carte de _________.", fill: "bibliothèque", fillA: ["bibliotheque"]
  },
  {
    id: "cv7-q6", textQ: "Dans cette conversation, y a-t-il une amende ?", text: ["Non", "Oui, 1 €", "Oui, 5 €"], textC: 0,
    img: ["Non", "Oui, 1 €", "Oui, 5 €"], imgC: 0,
    fillQ: "Dans cette conversation, amende : _________.", fill: "non"
  },
  {
    id: "cv7-q7", textQ: "Dans cette conversation, le livre est-il disponible ?", text: ["Oui", "Non", "Réservé"], textC: 0,
    img: ["Oui", "Non", "Réservé"], imgC: 0,
    fillQ: "Dans cette conversation, livre _________.", fill: "disponible", fillA: ["oui"]
  },
  {
    id: "cv7-q8", textQ: "Dans cette conversation, quand rendre le livre ?", text: ["Dans 14 jours", "Demain", "Dans un mois"], textC: 0,
    img: ["Dans 14 jours", "Demain", "Dans un mois"], imgC: 0,
    fillQ: "Dans cette conversation, rendre dans ___ jours.", fill: "14"
  },
  {
    id: "cv7-q9", textQ: "Dans cette conversation, peut-on prolonger ?", text: ["Oui", "Non", "Une seule fois"], textC: 0,
    img: ["Oui", "Non", "Une seule fois"], imgC: 0,
    fillQ: "Dans cette conversation, prolongation : _________.", fill: "oui"
  },
  {
    id: "cv7-q10", textQ: "Dans cette conversation, que fait le lecteur ?", text: ["Il emprunte un livre", "Il achète un livre", "Il lit sur place"], textC: 0,
    img: ["Il emprunte un livre", "Il achète un livre", "Il lit sur place"], imgC: 0,
    fillQ: "Dans cette conversation, il emprunte un _________.", fill: "livre"
  }
] as RawQ[]);

const CONVERSATION_8 = buildPool("base", "conversation-8", [
  {
    id: "cv8-q1", textQ: "Dans cette conversation, où sont-ils ?", text: ["À l'hôtel", "À la gare", "À l'aéroport"], textC: 0,
    img: ["À l'hôtel", "À la gare", "À l'aéroport"], imgC: 0,
    fillQ: "Dans cette conversation, accueil à l'_________.", fill: "hôtel", fillA: ["hotel"]
  },
  {
    id: "cv8-q2", textQ: "Dans cette conversation, qui parle ?", text: ["La réceptionniste et un client", "Deux touristes", "Un couple d'amis"], textC: 0,
    img: ["La réceptionniste et…", "Deux touristes", "Un couple d'amis"], imgC: 0,
    fillQ: "Dans cette conversation, la réceptionniste et un _________.", fill: "client"
  },
  {
    id: "cv8-q3", textQ: "Dans cette conversation, quelle chambre ?", text: ["101", "205", "312"], textC: 1,
    img: ["101", "205", "312"], imgC: 1,
    fillQ: "Dans cette conversation, chambre ___.", fill: "205"
  },
  {
    id: "cv8-q4", textQ: "Dans cette conversation, combien de nuits ?", text: ["1 nuit", "2 nuits", "3 nuits"], textC: 1,
    img: ["1 nuit", "2 nuits", "3 nuits"], imgC: 1,
    fillQ: "Dans cette conversation, séjour de ___ nuits.", fill: "2"
  },
  {
    id: "cv8-q5", textQ: "Dans cette conversation, le petit-déjeuner est quand ?", text: ["7 h – 10 h", "8 h – 11 h", "6 h 30 – 9 h 30"], textC: 0,
    img: ["7 h – 10 h", "8 h – 11 h", "6 h 30 – 9 h 30"], imgC: 0,
    fillQ: "Dans cette conversation, petit-déjeuner dès ___ h.", fill: "7"
  },
  {
    id: "cv8-q6", textQ: "Dans cette conversation, le Wi-Fi est-il gratuit ?", text: ["Oui", "Non", "Non disponible"], textC: 0,
    img: ["Oui", "Non", "Non disponible"], imgC: 0,
    fillQ: "Dans cette conversation, Wi-Fi _________.", fill: "gratuit"
  },
  {
    id: "cv8-q7", textQ: "Dans cette conversation, le client a une réservation ?", text: ["Oui", "Non", "Il ne sait pas"], textC: 0,
    img: ["Oui", "Non", "Il ne sait pas"], imgC: 0,
    fillQ: "Dans cette conversation, réservation : _________.", fill: "oui"
  },
  {
    id: "cv8-q8", textQ: "Dans cette conversation, quelle clé reçoit-il ?", text: ["Clé chambre 205", "Clé chambre 101", "Pas de clé"], textC: 0,
    img: ["Clé chambre 205", "Clé chambre 101", "Pas de clé"], imgC: 0,
    fillQ: "Dans cette conversation, clé chambre ___.", fill: "205"
  },
  {
    id: "cv8-q9", textQ: "Dans cette conversation, à quelle heure check-in ?", text: ["14 h", "15 h", "16 h"], textC: 0,
    img: ["14 h", "15 h", "16 h"], imgC: 0,
    fillQ: "Dans cette conversation, enregistrement à ___ h.", fill: "14"
  },
  {
    id: "cv8-q10", textQ: "Dans cette conversation, que dit le client ?", text: ["Merci", "Je veux annuler", "Où est la piscine ?"], textC: 0,
    img: ["Merci", "Je veux annuler", "Où est la piscine ?"], imgC: 0,
    fillQ: "Dans cette conversation, le client dit _________.", fill: "merci"
  }
] as RawQ[]);

const OBJET_1 = buildPool("base", "objet-1", [
  {
    id: "ob1-q1", textQ: "Quel objet est décrit ?", text: ["Un stylo", "Un livre", "Un chapeau"], textC: 0,
    img: ["Un stylo", "Un livre", "Un chapeau"], imgC: 0,
    fillQ: "L'objet décrit est un/un(e) _________.", fill: "stylo"
  },
  {
    id: "ob1-q2", textQ: "De quelle couleur est l'objet ?", text: ["Bleu", "Rouge", "Vert"], textC: 0,
    img: ["Bleu", "Rouge", "Vert"], imgC: 0,
    fillQ: "L'objet est de couleur _________.", fill: "bleu"
  },
  {
    id: "ob1-q3", textQ: "Combien coûte l'objet ?", text: ["2 €", "10 €", "50 €"], textC: 0,
    img: ["2 €", "10 €", "50 €"], imgC: 0,
    fillQ: "Le prix de l'objet est ___ €.", fill: "2"
  },
  {
    id: "ob1-q4", textQ: "À quoi sert cet objet ?", text: ["Écrire", "Dormir", "Jouer"], textC: 0,
    img: ["Écrire", "Dormir", "Jouer"], imgC: 0,
    fillQ: "Cet objet sert à _________.", fill: "écrire"
  },
  {
    id: "ob1-q5", textQ: "De quel matériau est-il fait ?", text: ["Plastique", "Pierre", "Carton"], textC: 0,
    img: ["Plastique", "Pierre", "Carton"], imgC: 0,
    fillQ: "L'objet est en _________.", fill: "plastique"
  },
  {
    id: "ob1-q6", textQ: "Où peut-on acheter cet objet ?", text: ["Dans une papeterie", "À la boulangerie", "À la pharmacie"], textC: 0,
    img: ["Dans une papeterie", "À la boulangerie", "À la pharmacie"], imgC: 0,
    fillQ: "On peut l'acheter dans une/en _________.", fill: "papeterie"
  }
] as RawQ[]);

const OBJET_2 = buildPool("base", "objet-2", [
  {
    id: "ob2-q1", textQ: "Quel objet est décrit ?", text: ["Un sac", "Une veste", "Un sac"], textC: 0,
    img: ["Un sac", "Une veste", "Un sac"], imgC: 0,
    fillQ: "L'objet décrit est un/un(e) _________.", fill: "sac"
  },
  {
    id: "ob2-q2", textQ: "De quelle couleur est l'objet ?", text: ["Noir", "Marron", "Gris"], textC: 0,
    img: ["Noir", "Marron", "Gris"], imgC: 0,
    fillQ: "L'objet est de couleur _________.", fill: "noir"
  },
  {
    id: "ob2-q3", textQ: "Combien coûte l'objet ?", text: ["25 €", "10 €", "50 €"], textC: 0,
    img: ["25 €", "10 €", "50 €"], imgC: 0,
    fillQ: "Le prix de l'objet est ___ €.", fill: "25"
  },
  {
    id: "ob2-q4", textQ: "À quoi sert cet objet ?", text: ["Porter des livres", "Jouer", "Nager"], textC: 0,
    img: ["Porter des livres", "Jouer", "Nager"], imgC: 0,
    fillQ: "Cet objet sert à _________.", fill: "porter"
  },
  {
    id: "ob2-q5", textQ: "De quel matériau est-il fait ?", text: ["Cuir", "Carton", "Soie"], textC: 0,
    img: ["Cuir", "Carton", "Soie"], imgC: 0,
    fillQ: "L'objet est en _________.", fill: "cuir"
  },
  {
    id: "ob2-q6", textQ: "Où peut-on acheter cet objet ?", text: ["Dans un magasin", "À la boulangerie", "À la pharmacie"], textC: 0,
    img: ["Dans un magasin", "À la boulangerie", "À la pharmacie"], imgC: 0,
    fillQ: "On peut l'acheter dans une/en _________.", fill: "magasin"
  }
] as RawQ[]);

const OBJET_3 = buildPool("base", "objet-3", [
  {
    id: "ob3-q1", textQ: "Quel objet est décrit ?", text: ["Une montre", "Un chapeau", "Un stylo"], textC: 0,
    img: ["Une montre", "Un chapeau", "Un stylo"], imgC: 0,
    fillQ: "L'objet décrit est un/un(e) _________.", fill: "montre"
  },
  {
    id: "ob3-q2", textQ: "De quelle couleur est l'objet ?", text: ["Argent", "Or", "Noir"], textC: 0,
    img: ["Argent", "Or", "Noir"], imgC: 0,
    fillQ: "L'objet est de couleur _________.", fill: "argent"
  },
  {
    id: "ob3-q3", textQ: "Combien coûte l'objet ?", text: ["45 €", "10 €", "50 €"], textC: 0,
    img: ["45 €", "10 €", "50 €"], imgC: 0,
    fillQ: "Le prix de l'objet est ___ €.", fill: "45"
  },
  {
    id: "ob3-q4", textQ: "À quoi sert cet objet ?", text: ["Donner l'heure", "Nager", "Courir"], textC: 0,
    img: ["Donner l'heure", "Nager", "Courir"], imgC: 0,
    fillQ: "Cet objet sert à _________.", fill: "donner"
  },
  {
    id: "ob3-q5", textQ: "De quel matériau est-il fait ?", text: ["Métal", "Soie", "Bois"], textC: 0,
    img: ["Métal", "Soie", "Bois"], imgC: 0,
    fillQ: "L'objet est en _________.", fill: "métal"
  },
  {
    id: "ob3-q6", textQ: "Où peut-on acheter cet objet ?", text: ["Dans une bijouterie", "À la boulangerie", "À la pharmacie"], textC: 0,
    img: ["Dans une bijouterie", "À la boulangerie", "À la pharmacie"], imgC: 0,
    fillQ: "On peut l'acheter dans une/en _________.", fill: "bijouterie"
  }
] as RawQ[]);

const OBJET_4 = buildPool("base", "objet-4", [
  {
    id: "ob4-q1", textQ: "Quel objet est décrit ?", text: ["Un parapluie", "Un sac", "Un crayon"], textC: 0,
    img: ["Un parapluie", "Un sac", "Un crayon"], imgC: 0,
    fillQ: "L'objet décrit est un/un(e) _________.", fill: "parapluie"
  },
  {
    id: "ob4-q2", textQ: "De quelle couleur est l'objet ?", text: ["Rouge", "Bleu", "Jaune"], textC: 0,
    img: ["Rouge", "Bleu", "Jaune"], imgC: 0,
    fillQ: "L'objet est de couleur _________.", fill: "rouge"
  },
  {
    id: "ob4-q3", textQ: "Combien coûte l'objet ?", text: ["12 €", "10 €", "50 €"], textC: 0,
    img: ["12 €", "10 €", "50 €"], imgC: 0,
    fillQ: "Le prix de l'objet est ___ €.", fill: "12"
  },
  {
    id: "ob4-q4", textQ: "À quoi sert cet objet ?", text: ["Se protéger de la pluie", "Courir", "Cuisiner"], textC: 0,
    img: ["Se protéger de la pl…", "Courir", "Cuisiner"], imgC: 0,
    fillQ: "Cet objet sert à _________.", fill: "se"
  },
  {
    id: "ob4-q5", textQ: "De quel matériau est-il fait ?", text: ["Tissu", "Bois", "Pierre"], textC: 0,
    img: ["Tissu", "Bois", "Pierre"], imgC: 0,
    fillQ: "L'objet est en _________.", fill: "tissu"
  },
  {
    id: "ob4-q6", textQ: "Où peut-on acheter cet objet ?", text: ["Dans un magasin", "À la boulangerie", "À la pharmacie"], textC: 0,
    img: ["Dans un magasin", "À la boulangerie", "À la pharmacie"], imgC: 0,
    fillQ: "On peut l'acheter dans une/en _________.", fill: "magasin"
  }
] as RawQ[]);

const OBJET_5 = buildPool("base", "objet-5", [
  {
    id: "ob5-q1", textQ: "Quel objet est décrit ?", text: ["Un téléphone", "Un stylo", "Un livre"], textC: 0,
    img: ["Un téléphone", "Un stylo", "Un livre"], imgC: 0,
    fillQ: "L'objet décrit est un/un(e) _________.", fill: "téléphone"
  },
  {
    id: "ob5-q2", textQ: "De quelle couleur est l'objet ?", text: ["Gris", "Noir", "Blanc"], textC: 0,
    img: ["Gris", "Noir", "Blanc"], imgC: 0,
    fillQ: "L'objet est de couleur _________.", fill: "gris"
  },
  {
    id: "ob5-q3", textQ: "Combien coûte l'objet ?", text: ["199 €", "10 €", "50 €"], textC: 0,
    img: ["199 €", "10 €", "50 €"], imgC: 0,
    fillQ: "Le prix de l'objet est ___ €.", fill: "199"
  },
  {
    id: "ob5-q4", textQ: "À quoi sert cet objet ?", text: ["Appeler", "Cuisiner", "Dormir"], textC: 0,
    img: ["Appeler", "Cuisiner", "Dormir"], imgC: 0,
    fillQ: "Cet objet sert à _________.", fill: "appeler"
  },
  {
    id: "ob5-q5", textQ: "De quel matériau est-il fait ?", text: ["Plastique", "Pierre", "Carton"], textC: 0,
    img: ["Plastique", "Pierre", "Carton"], imgC: 0,
    fillQ: "L'objet est en _________.", fill: "plastique"
  },
  {
    id: "ob5-q6", textQ: "Où peut-on acheter cet objet ?", text: ["Dans un magasin", "À la boulangerie", "À la pharmacie"], textC: 0,
    img: ["Dans un magasin", "À la boulangerie", "À la pharmacie"], imgC: 0,
    fillQ: "On peut l'acheter dans une/en _________.", fill: "magasin"
  }
] as RawQ[]);

const OBJET_6 = buildPool("base", "objet-6", [
  {
    id: "ob6-q1", textQ: "Quel objet est décrit ?", text: ["Des lunettes", "Un crayon", "Une veste"], textC: 0,
    img: ["Des lunettes", "Un crayon", "Une veste"], imgC: 0,
    fillQ: "L'objet décrit est un/un(e) _________.", fill: "lunettes"
  },
  {
    id: "ob6-q2", textQ: "De quelle couleur est l'objet ?", text: ["Marron", "Noir", "Bleu"], textC: 0,
    img: ["Marron", "Noir", "Bleu"], imgC: 0,
    fillQ: "L'objet est de couleur _________.", fill: "marron"
  },
  {
    id: "ob6-q3", textQ: "Combien coûte l'objet ?", text: ["89 €", "10 €", "50 €"], textC: 0,
    img: ["89 €", "10 €", "50 €"], imgC: 0,
    fillQ: "Le prix de l'objet est ___ €.", fill: "89"
  },
  {
    id: "ob6-q4", textQ: "À quoi sert cet objet ?", text: ["Voir", "Dormir", "Jouer"], textC: 0,
    img: ["Voir", "Dormir", "Jouer"], imgC: 0,
    fillQ: "Cet objet sert à _________.", fill: "voir"
  },
  {
    id: "ob6-q5", textQ: "De quel matériau est-il fait ?", text: ["Verre", "Carton", "Soie"], textC: 0,
    img: ["Verre", "Carton", "Soie"], imgC: 0,
    fillQ: "L'objet est en _________.", fill: "verre"
  },
  {
    id: "ob6-q6", textQ: "Où peut-on acheter cet objet ?", text: ["Chez l'opticien", "À la boulangerie", "À la pharmacie"], textC: 0,
    img: ["Chez l'opticien", "À la boulangerie", "À la pharmacie"], imgC: 0,
    fillQ: "On peut l'acheter dans une/en _________.", fill: "opticien"
  }
] as RawQ[]);

const OBJET_7 = buildPool("base", "objet-7", [
  {
    id: "ob7-q1", textQ: "Quel objet est décrit ?", text: ["Des clés", "Un livre", "Un chapeau"], textC: 0,
    img: ["Des clés", "Un livre", "Un chapeau"], imgC: 0,
    fillQ: "L'objet décrit est un/un(e) _________.", fill: "clés"
  },
  {
    id: "ob7-q2", textQ: "De quelle couleur est l'objet ?", text: ["Doré", "Argent", "Cuivre"], textC: 0,
    img: ["Doré", "Argent", "Cuivre"], imgC: 0,
    fillQ: "L'objet est de couleur _________.", fill: "doré"
  },
  {
    id: "ob7-q3", textQ: "Combien coûte l'objet ?", text: ["5 €", "10 €", "50 €"], textC: 0,
    img: ["5 €", "10 €", "50 €"], imgC: 0,
    fillQ: "Le prix de l'objet est ___ €.", fill: "5"
  },
  {
    id: "ob7-q4", textQ: "À quoi sert cet objet ?", text: ["Ouvrir une porte", "Jouer", "Nager"], textC: 0,
    img: ["Ouvrir une porte", "Jouer", "Nager"], imgC: 0,
    fillQ: "Cet objet sert à _________.", fill: "ouvrir"
  },
  {
    id: "ob7-q5", textQ: "De quel matériau est-il fait ?", text: ["Métal", "Soie", "Bois"], textC: 0,
    img: ["Métal", "Soie", "Bois"], imgC: 0,
    fillQ: "L'objet est en _________.", fill: "métal"
  },
  {
    id: "ob7-q6", textQ: "Où peut-on acheter cet objet ?", text: ["En quincaillerie", "À la boulangerie", "À la pharmacie"], textC: 0,
    img: ["En quincaillerie", "À la boulangerie", "À la pharmacie"], imgC: 0,
    fillQ: "On peut l'acheter dans une/en _________.", fill: "quincaillerie"
  }
] as RawQ[]);

const OBJET_8 = buildPool("base", "objet-8", [
  {
    id: "ob8-q1", textQ: "Quel objet est décrit ?", text: ["Une bouteille", "Une veste", "Un sac"], textC: 0,
    img: ["Une bouteille", "Une veste", "Un sac"], imgC: 0,
    fillQ: "L'objet décrit est un/un(e) _________.", fill: "bouteille"
  },
  {
    id: "ob8-q2", textQ: "De quelle couleur est l'objet ?", text: ["Verte", "Bleue", "Transparente"], textC: 0,
    img: ["Verte", "Bleue", "Transparente"], imgC: 0,
    fillQ: "L'objet est de couleur _________.", fill: "verte"
  },
  {
    id: "ob8-q3", textQ: "Combien coûte l'objet ?", text: ["8 €", "10 €", "50 €"], textC: 0,
    img: ["8 €", "10 €", "50 €"], imgC: 0,
    fillQ: "Le prix de l'objet est ___ €.", fill: "8"
  },
  {
    id: "ob8-q4", textQ: "À quoi sert cet objet ?", text: ["Boire", "Nager", "Courir"], textC: 0,
    img: ["Boire", "Nager", "Courir"], imgC: 0,
    fillQ: "Cet objet sert à _________.", fill: "boire"
  },
  {
    id: "ob8-q5", textQ: "De quel matériau est-il fait ?", text: ["Verre", "Bois", "Pierre"], textC: 0,
    img: ["Verre", "Bois", "Pierre"], imgC: 0,
    fillQ: "L'objet est en _________.", fill: "verre"
  },
  {
    id: "ob8-q6", textQ: "Où peut-on acheter cet objet ?", text: ["Dans un magasin", "À la boulangerie", "À la pharmacie"], textC: 0,
    img: ["Dans un magasin", "À la boulangerie", "À la pharmacie"], imgC: 0,
    fillQ: "On peut l'acheter dans une/en _________.", fill: "magasin"
  }
] as RawQ[]);

const OBJET_9 = buildPool("base", "objet-9", [
  {
    id: "ob9-q1", textQ: "Quel objet est décrit ?", text: ["Un cahier", "Un chapeau", "Un stylo"], textC: 0,
    img: ["Un cahier", "Un chapeau", "Un stylo"], imgC: 0,
    fillQ: "L'objet décrit est un/un(e) _________.", fill: "cahier"
  },
  {
    id: "ob9-q2", textQ: "De quelle couleur est l'objet ?", text: ["Jaune", "Rouge", "Bleu"], textC: 0,
    img: ["Jaune", "Rouge", "Bleu"], imgC: 0,
    fillQ: "L'objet est de couleur _________.", fill: "jaune"
  },
  {
    id: "ob9-q3", textQ: "Combien coûte l'objet ?", text: ["3 €", "10 €", "50 €"], textC: 0,
    img: ["3 €", "10 €", "50 €"], imgC: 0,
    fillQ: "Le prix de l'objet est ___ €.", fill: "3"
  },
  {
    id: "ob9-q4", textQ: "À quoi sert cet objet ?", text: ["Écrire des notes", "Courir", "Cuisiner"], textC: 0,
    img: ["Écrire des notes", "Courir", "Cuisiner"], imgC: 0,
    fillQ: "Cet objet sert à _________.", fill: "écrire"
  },
  {
    id: "ob9-q5", textQ: "De quel matériau est-il fait ?", text: ["Papier", "Pierre", "Carton"], textC: 0,
    img: ["Papier", "Pierre", "Carton"], imgC: 0,
    fillQ: "L'objet est en _________.", fill: "papier"
  },
  {
    id: "ob9-q6", textQ: "Où peut-on acheter cet objet ?", text: ["Dans une papeterie", "À la boulangerie", "À la pharmacie"], textC: 0,
    img: ["Dans une papeterie", "À la boulangerie", "À la pharmacie"], imgC: 0,
    fillQ: "On peut l'acheter dans une/en _________.", fill: "papeterie"
  }
] as RawQ[]);

const OBJET_10 = buildPool("base", "objet-10", [
  {
    id: "ob10-q1", textQ: "Quel objet est décrit ?", text: ["Des chaussures", "Un sac", "Un crayon"], textC: 0,
    img: ["Des chaussures", "Un sac", "Un crayon"], imgC: 0,
    fillQ: "L'objet décrit est un/un(e) _________.", fill: "chaussures"
  },
  {
    id: "ob10-q2", textQ: "De quelle couleur est l'objet ?", text: ["Blanc", "Noir", "Rouge"], textC: 0,
    img: ["Blanc", "Noir", "Rouge"], imgC: 0,
    fillQ: "L'objet est de couleur _________.", fill: "blanc"
  },
  {
    id: "ob10-q3", textQ: "Combien coûte l'objet ?", text: ["59 €", "10 €", "50 €"], textC: 0,
    img: ["59 €", "10 €", "50 €"], imgC: 0,
    fillQ: "Le prix de l'objet est ___ €.", fill: "59"
  },
  {
    id: "ob10-q4", textQ: "À quoi sert cet objet ?", text: ["Marcher", "Cuisiner", "Dormir"], textC: 0,
    img: ["Marcher", "Cuisiner", "Dormir"], imgC: 0,
    fillQ: "Cet objet sert à _________.", fill: "marcher"
  },
  {
    id: "ob10-q5", textQ: "De quel matériau est-il fait ?", text: ["Cuir", "Carton", "Soie"], textC: 0,
    img: ["Cuir", "Carton", "Soie"], imgC: 0,
    fillQ: "L'objet est en _________.", fill: "cuir"
  },
  {
    id: "ob10-q6", textQ: "Où peut-on acheter cet objet ?", text: ["Dans un magasin", "À la boulangerie", "À la pharmacie"], textC: 0,
    img: ["Dans un magasin", "À la boulangerie", "À la pharmacie"], imgC: 0,
    fillQ: "On peut l'acheter dans une/en _________.", fill: "magasin"
  }
] as RawQ[]);

const OBJET_11 = buildPool("base", "objet-11", [
  {
    id: "ob11-q1", textQ: "Quel objet est décrit ?", text: ["Un ordinateur", "Un stylo", "Un livre"], textC: 0,
    img: ["Un ordinateur", "Un stylo", "Un livre"], imgC: 0,
    fillQ: "L'objet décrit est un/un(e) _________.", fill: "ordinateur"
  },
  {
    id: "ob11-q2", textQ: "De quelle couleur est l'objet ?", text: ["Noir", "Gris", "Blanc"], textC: 0,
    img: ["Noir", "Gris", "Blanc"], imgC: 0,
    fillQ: "L'objet est de couleur _________.", fill: "noir"
  },
  {
    id: "ob11-q3", textQ: "Combien coûte l'objet ?", text: ["499 €", "10 €", "50 €"], textC: 0,
    img: ["499 €", "10 €", "50 €"], imgC: 0,
    fillQ: "Le prix de l'objet est ___ €.", fill: "499"
  },
  {
    id: "ob11-q4", textQ: "À quoi sert cet objet ?", text: ["Travailler", "Dormir", "Jouer"], textC: 0,
    img: ["Travailler", "Dormir", "Jouer"], imgC: 0,
    fillQ: "Cet objet sert à _________.", fill: "travailler"
  },
  {
    id: "ob11-q5", textQ: "De quel matériau est-il fait ?", text: ["Plastique", "Soie", "Bois"], textC: 0,
    img: ["Plastique", "Soie", "Bois"], imgC: 0,
    fillQ: "L'objet est en _________.", fill: "plastique"
  },
  {
    id: "ob11-q6", textQ: "Où peut-on acheter cet objet ?", text: ["Dans un magasin", "À la boulangerie", "À la pharmacie"], textC: 0,
    img: ["Dans un magasin", "À la boulangerie", "À la pharmacie"], imgC: 0,
    fillQ: "On peut l'acheter dans une/en _________.", fill: "magasin"
  }
] as RawQ[]);

const OBJET_12 = buildPool("base", "objet-12", [
  {
    id: "ob12-q1", textQ: "Quel objet est décrit ?", text: ["Un appareil photo", "Un crayon", "Une veste"], textC: 0,
    img: ["Un appareil photo", "Un crayon", "Une veste"], imgC: 0,
    fillQ: "L'objet décrit est un/un(e) _________.", fill: "photo"
  },
  {
    id: "ob12-q2", textQ: "De quelle couleur est l'objet ?", text: ["Noir", "Argent", "Rouge"], textC: 0,
    img: ["Noir", "Argent", "Rouge"], imgC: 0,
    fillQ: "L'objet est de couleur _________.", fill: "noir"
  },
  {
    id: "ob12-q3", textQ: "Combien coûte l'objet ?", text: ["299 €", "10 €", "50 €"], textC: 0,
    img: ["299 €", "10 €", "50 €"], imgC: 0,
    fillQ: "Le prix de l'objet est ___ €.", fill: "299"
  },
  {
    id: "ob12-q4", textQ: "À quoi sert cet objet ?", text: ["Prendre des photos", "Jouer", "Nager"], textC: 0,
    img: ["Prendre des photos", "Jouer", "Nager"], imgC: 0,
    fillQ: "Cet objet sert à _________.", fill: "prendre"
  },
  {
    id: "ob12-q5", textQ: "De quel matériau est-il fait ?", text: ["Métal", "Bois", "Pierre"], textC: 0,
    img: ["Métal", "Bois", "Pierre"], imgC: 0,
    fillQ: "L'objet est en _________.", fill: "métal"
  },
  {
    id: "ob12-q6", textQ: "Où peut-on acheter cet objet ?", text: ["Dans un magasin", "À la boulangerie", "À la pharmacie"], textC: 0,
    img: ["Dans un magasin", "À la boulangerie", "À la pharmacie"], imgC: 0,
    fillQ: "On peut l'acheter dans une/en _________.", fill: "magasin"
  }
] as RawQ[]);

export const CO_QUESTION_POOLS_BASE_OTHER: Record<string, COMultiQuestion[]> = {
  "base-annonce-1": ANNONCE_1,
  "base-annonce-2": ANNONCE_2,
  "base-annonce-3": ANNONCE_3,
  "base-annonce-4": ANNONCE_4,
  "base-annonce-5": ANNONCE_5,
  "base-annonce-6": ANNONCE_6,
  "base-annonce-7": ANNONCE_7,
  "base-annonce-8": ANNONCE_8,
  "base-annonce-9": ANNONCE_9,
  "base-annonce-10": ANNONCE_10,
  "base-annonce-11": ANNONCE_11,
  "base-annonce-12": ANNONCE_12,
  "base-annonce-13": ANNONCE_13,
  "base-annonce-14": ANNONCE_14,
  "base-annonce-16": ANNONCE_16,
  "base-annonce-17": ANNONCE_17,
  "base-instruction-1": INSTRUCTION_1,
  "base-instruction-2": INSTRUCTION_2,
  "base-instruction-3": INSTRUCTION_3,
  "base-instruction-4": INSTRUCTION_4,
  "base-instruction-5": INSTRUCTION_5,
  "base-conversation-1": CONVERSATION_1,
  "base-conversation-2": CONVERSATION_2,
  "base-conversation-3": CONVERSATION_3,
  "base-conversation-4": CONVERSATION_4,
  "base-conversation-5": CONVERSATION_5,
  "base-conversation-6": CONVERSATION_6,
  "base-conversation-7": CONVERSATION_7,
  "base-conversation-8": CONVERSATION_8,
  "base-objet-1": OBJET_1,
  "base-objet-2": OBJET_2,
  "base-objet-3": OBJET_3,
  "base-objet-4": OBJET_4,
  "base-objet-5": OBJET_5,
  "base-objet-6": OBJET_6,
  "base-objet-7": OBJET_7,
  "base-objet-8": OBJET_8,
  "base-objet-9": OBJET_9,
  "base-objet-10": OBJET_10,
  "base-objet-11": OBJET_11,
  "base-objet-12": OBJET_12,
};

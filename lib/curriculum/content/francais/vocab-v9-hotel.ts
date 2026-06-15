import type { VocabTheme } from "../../vocabulary-data";

export const V9_HOTEL_THEME: VocabTheme = {
  slug: "v9-hotel",
  code: "V9.7",
  title: "L'hÃ´tel",
  section: "V9",
  words: [
    { word: "rÃ©ception", image: "reception.jpg",       article: "la",  gender: "f", definition: "accueil principal de l'hÃ´tel" },
    { word: "clÃ©", image: "cle.jpg",             article: "la",  gender: "f", definition: "objet pour ouvrir la chambre" },
    { word: "chambre", image: "/vocab/images/V4/chambre.jpg",         article: "la",  gender: "f", definition: "piÃ¨ce pour dormir Ã  l'hÃ´tel" },
    { word: "chambre double", image: "chambre-double.jpg",  article: "la",  gender: "f", definition: "chambre avec un grand lit pour deux personnes" },
    { word: "chambre simple", image: "chambre-simple.jpg",  article: "la",  gender: "f", definition: "chambre avec un lit pour une personne" },
    { word: "piscine", image: "piscine.jpg",         article: "la",  gender: "f", definition: "bassin d'eau pour nager Ã  l'hÃ´tel" },
    { word: "petit-dÃ©jeuner", image: "petit-dejeuner.jpg",  article: "le",  gender: "m", definition: "repas du matin Ã  l'hÃ´tel" },
    { word: "demi-pension", image: "demi-pension.jpg",    article: "la",  gender: "f", definition: "formule hÃ´tel avec petit-dÃ©jeuner et dÃ®ner" },
    { word: "rÃ©servation", image: "reservation.jpg",     article: "la",  gender: "f", definition: "action de retenir une chambre Ã  l'avance" },
    { word: "nuit", image: "/vocab/images/V2/nuit.jpg",            article: "la",  gender: "f", definition: "unitÃ© de sÃ©jour Ã  l'hÃ´tel" },
    { word: "Ã©tage", image: "etage.jpg",           article: "l'",  gender: "m", definition: "niveau du bÃ¢timent" },
    { word: "ascenseur", image: "/vocab/images/V5/ascenseur.png",       article: "l'",  gender: "m", definition: "cabine pour monter et descendre" },
    { word: "coffre-fort", image: "coffre-fort.jpg",     article: "le",  gender: "m", definition: "boÃ®te sÃ©curisÃ©e pour les objets de valeur" },
    { word: "concierge", image: "concierge.jpg",       article: "le",  gender: "m", definition: "employÃ© d'accueil de l'hÃ´tel" },
    { word: "parking", image: "parking.jpg",         article: "le",  gender: "m", definition: "espace pour garer sa voiture Ã  l'hÃ´tel" },
  ],
  sentences: [
    { sentence: "Il fait une ___ pour deux nuits Ã  l'hÃ´tel.",            answer: "rÃ©servation" },
    { sentence: "La ___ vous remettra la clÃ© de votre chambre.",         answer: "rÃ©ception" },
    { sentence: "Le ___ est servi de 7h Ã  10h.",                         answer: "petit-dÃ©jeuner" },
    { sentence: "Je range mes bijoux dans le ___ de la chambre.",        answer: "coffre-fort" },
    { sentence: "La chambre est au troisiÃ¨me ___, prenez l'ascenseur.",  answer: "Ã©tage" },
  ],
};

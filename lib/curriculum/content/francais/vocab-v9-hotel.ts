import type { VocabTheme } from "../../vocabulary-data";

export const V9_HOTEL_THEME: VocabTheme = {
  slug: "v9-hotel",
  code: "V9.7",
  title: "L'hôtel",
  section: "V9",
  words: [
    { word: "réception", image: "réception.jpg",       article: "la",  gender: "f", definition: "accueil principal de l'hôtel" },
    { word: "clé", image: "clé.jpg",             article: "la",  gender: "f", definition: "objet pour ouvrir la chambre" },
    { word: "chambre", image: "chambre.jpg",         article: "la",  gender: "f", definition: "pièce pour dormir à l'hôtel" },
    { word: "chambre double", image: "chambre-double.jpg",  article: "la",  gender: "f", definition: "chambre avec un grand lit pour deux personnes" },
    { word: "chambre simple", image: "chambre-simple.jpg",  article: "la",  gender: "f", definition: "chambre avec un lit pour une personne" },
    { word: "piscine", image: "piscine.jpg",         article: "la",  gender: "f", definition: "bassin d'eau pour nager à l'hôtel" },
    { word: "petit-déjeuner", image: "petit-déjeuner.jpg",  article: "le",  gender: "m", definition: "repas du matin à l'hôtel" },
    { word: "demi-pension", image: "demi-pension.jpg",    article: "la",  gender: "f", definition: "formule hôtel avec petit-déjeuner et dîner" },
    { word: "réservation", image: "réservation.jpg",     article: "la",  gender: "f", definition: "action de retenir une chambre à l'avance" },
    { word: "nuit", image: "nuit.jpg",            article: "la",  gender: "f", definition: "unité de séjour à l'hôtel" },
    { word: "étage", image: "étage.jpg",           article: "l'",  gender: "m", definition: "niveau du bâtiment" },
    { word: "ascenseur", image: "ascenseur.jpg",       article: "l'",  gender: "m", definition: "cabine pour monter et descendre" },
    { word: "coffre-fort", image: "coffre-fort.jpg",     article: "le",  gender: "m", definition: "boîte sécurisée pour les objets de valeur" },
    { word: "concierge", image: "concierge.jpg",       article: "le",  gender: "m", definition: "employé d'accueil de l'hôtel" },
    { word: "parking", image: "parking.jpg",         article: "le",  gender: "m", definition: "espace pour garer sa voiture à l'hôtel" },
  ],
  sentences: [
    { sentence: "Il fait une ___ pour deux nuits à l'hôtel.",            answer: "réservation" },
    { sentence: "La ___ vous remettra la clé de votre chambre.",         answer: "réception" },
    { sentence: "Le ___ est servi de 7h à 10h.",                         answer: "petit-déjeuner" },
    { sentence: "Je range mes bijoux dans le ___ de la chambre.",        answer: "coffre-fort" },
    { sentence: "La chambre est au troisième ___, prenez l'ascenseur.",  answer: "étage" },
  ],
};

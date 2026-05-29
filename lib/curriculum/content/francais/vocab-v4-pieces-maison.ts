import type { VocabTheme } from "../../vocabulary-data";

export const V4_PIECES_MAISON_THEME: VocabTheme = {
  slug: "v4-pieces-maison",
  code: "V4.3",
  title: "Les pièces de la maison",
  section: "V4",
  words: [
    { word: "cuisine",       article: "la",  gender: "f", definition: "pièce où l'on prépare les repas" },
    { word: "salon",         article: "le",  gender: "m", definition: "pièce principale pour se détendre" },
    { word: "chambre",       article: "la",  gender: "f", definition: "pièce pour dormir" },
    { word: "salle de bain", article: "la",  gender: "f", definition: "pièce avec baignoire ou douche" },
    { word: "toilettes",     article: "les", gender: "f", definition: "pièce avec les WC" },
    { word: "bureau",        article: "le",  gender: "m", definition: "pièce pour travailler ou étudier" },
    { word: "couloir",       article: "le",  gender: "m", definition: "passage entre les pièces" },
    { word: "balcon",        article: "le",  gender: "m", definition: "plateforme extérieure d'un appartement" },
    { word: "terrasse",      article: "la",  gender: "f", definition: "espace extérieur plat attenant à la maison" },
    { word: "cave",          article: "la",  gender: "f", definition: "pièce souterraine pour le stockage" },
    { word: "grenier",       article: "le",  gender: "m", definition: "espace sous le toit pour ranger" },
    { word: "salle à manger",article: "la",  gender: "f", definition: "pièce pour prendre les repas" },
    { word: "jardin",        article: "le",  gender: "m", definition: "espace vert autour de la maison" },
    { word: "sous-sol",      article: "le",  gender: "m", definition: "niveau en dessous du rez-de-chaussée" },
    { word: "entrée",        article: "l'",  gender: "f", definition: "espace d'accueil à l'entrée du logement" },
  ],
  sentences: [
    { sentence: "Elle prépare le dîner dans la ___.",                     answer: "cuisine" },
    { sentence: "Les enfants dorment dans leur ___.",                     answer: "chambre" },
    { sentence: "On se retrouve dans le ___ pour regarder la télé.",      answer: "salon" },
    { sentence: "Les vieilles bouteilles sont rangées dans la ___.",      answer: "cave" },
    { sentence: "Je mange avec ma famille dans la ___ à manger.",         answer: "salle à manger" },
  ],
};

import type { VocabTheme } from "../../vocabulary-data";

export const V4_PIECES_MAISON_THEME: VocabTheme = {
  slug: "v4-pieces-maison",
  code: "V4.2",
  title: "Les pièces de la maison",
  section: "V4",
  words: [
    { word: "cuisine", image: "cuisine.jpg",       article: "la",  gender: "f", definition: "pièce où l'on prépare les repas" },
    { word: "salon", image: "salon.jpg",         article: "le",  gender: "m", definition: "pièce principale pour se détendre" },
    { word: "chambre", image: "chambre.jpg",       article: "la",  gender: "f", definition: "pièce pour dormir" },
    { word: "salle de bain", image: "salle-de-bain.jpg", article: "la",  gender: "f", definition: "pièce avec baignoire ou douche" },
    { word: "toilettes", image: "toilettes.jpg",     article: "les", gender: "f", definition: "pièce avec les WC" },
    { word: "bureau", image: "bureau.jpg",        article: "le",  gender: "m", definition: "pièce pour travailler ou étudier" },
    { word: "couloir", image: "couloir.jpg",       article: "le",  gender: "m", definition: "passage entre les pièces" },
    { word: "balcon", image: "balcon.jpg",        article: "le",  gender: "m", definition: "plateforme extérieure d'un appartement" },
    { word: "terrasse", image: "terrasse.jpg",      article: "la",  gender: "f", definition: "espace extérieur plat attenant à la maison" },
    { word: "cave", image: "cave.jpg",          article: "la",  gender: "f", definition: "pièce souterraine pour le stockage" },
    { word: "grenier", image: "grenier.jpg",       article: "le",  gender: "m", definition: "espace sous le toit pour ranger" },
    { word: "salle à manger", image: "salle-a-manger.jpg",article: "la",  gender: "f", definition: "pièce pour prendre les repas" },
    { word: "jardin", image: "jardin.jpg",        article: "le",  gender: "m", definition: "espace vert autour de la maison" },
    { word: "sous-sol", image: "sous-sol.jpg",      article: "le",  gender: "m", definition: "niveau en dessous du rez-de-chaussée" },
    { word: "entrée", image: "entree.jpg",        article: "l'",  gender: "f", definition: "espace d'accueil à l'entrée du logement" },
    { word: "garage", image: "garage.jpg",        article: "le",  gender: "m", definition: "pièce ou espace pour garer une voiture" },
  ],
  sentences: [
    { sentence: "Elle prépare le dîner dans la ___.",                     answer: "cuisine" },
    { sentence: "Les enfants dorment dans leur ___.",                     answer: "chambre" },
    { sentence: "On se retrouve dans le ___ pour regarder la télé.",      answer: "salon" },
    { sentence: "Les vieilles bouteilles sont rangées dans la ___.",      answer: "cave" },
    { sentence: "Je mange avec ma famille dans la ___ à manger.",         answer: "salle à manger" },
  ],
};

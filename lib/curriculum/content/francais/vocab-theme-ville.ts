import type { VocabTheme } from "../../vocabulary-data";

export const VILLE_THEME: VocabTheme = {
  slug: "a1-voc-l12",
  code: "V.9",
  title: "La ville et les lieux",
  section: "A1",
  words: [
    { word: "cinéma",      article: "le",  gender: "m", definition: "lieu où on regarde des films" },
    { word: "musée",       article: "le",  gender: "m", definition: "lieu où on regarde des œuvres d'art" },
    { word: "bibliothèque",article: "la",  gender: "f", definition: "lieu où on emprunte des livres" },
    { word: "boulangerie", article: "la",  gender: "f", definition: "magasin où on achète du pain" },
    { word: "pharmacie",   article: "la",  gender: "f", definition: "magasin où on achète des médicaments" },
    { word: "mairie",      article: "la",  gender: "f", definition: "bâtiment administratif municipal" },
    { word: "gare",        article: "la",  gender: "f", definition: "lieu de départ et d'arrivée des trains" },
    { word: "piscine",     article: "la",  gender: "f", definition: "lieu où on fait de la natation" },
    { word: "marché",      article: "le",  gender: "m", definition: "lieu où on achète des produits frais" },
    { word: "parc",        article: "le",  gender: "m", definition: "espace vert pour se promener" },
    { word: "hôpital",     article: "l'",  gender: "m", definition: "lieu de soins médicaux" },
    { word: "restaurant",  article: "le",  gender: "m", definition: "lieu où on mange contre paiement" },
  ],
  sentences: [
    { sentence: "Pour emprunter des livres, je vais à la ___.", answer: "bibliothèque" },
    { sentence: "J'achète une baguette à la ___ du quartier.", answer: "boulangerie" },
    { sentence: "Nous allons nager à la ___ municipale.", answer: "piscine" },
    { sentence: "Le ___ est ouvert tous les dimanches matin.", answer: "marché" },
    { sentence: "Je prends le train, je dois aller à la ___.", answer: "gare" },
  ],
};

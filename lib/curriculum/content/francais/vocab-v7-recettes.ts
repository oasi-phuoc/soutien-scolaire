import type { VocabTheme } from "../../vocabulary-data";

export const V7_RECETTES_THEME: VocabTheme = {
  slug: "v7-recettes",
  code: "V7.6",
  title: "Les recettes",
  section: "V7",
  words: [
    { word: "farine",      article: "la",  gender: "f", definition: "poudre de céréale pour faire la pâte" },
    { word: "sucre",       article: "le",  gender: "m", definition: "ingrédient sucrant blanc ou roux" },
    { word: "lait",        article: "le",  gender: "m", definition: "liquide blanc produit par les vaches" },
    { word: "sel",         article: "le",  gender: "m", definition: "minéral blanc pour assaisonner" },
    { word: "œuf",         article: "l'",  gender: "m", definition: "ingrédient pondu par la poule" },
    { word: "beurre",      article: "le",  gender: "m", definition: "matière grasse faite de crème de lait" },
    { word: "ingrédient",  article: "l'",  gender: "m", definition: "élément de base d'une recette" },
    { word: "pâte",        article: "la",  gender: "f", definition: "mélange de farine et liquide pour cuisiner" },
    { word: "sauce",       article: "la",  gender: "f", definition: "liquide aromatisé pour accompagner un plat" },
    { word: "soupe",       article: "la",  gender: "f", definition: "plat liquide chaud à base de légumes" },
    { word: "recette",     article: "la",  gender: "f", definition: "liste des étapes pour préparer un plat" },
    { word: "cuisson",     article: "la",  gender: "f", definition: "action et durée de chauffage d'un aliment" },
    { word: "moule",       article: "le",  gender: "m", definition: "récipient pour donner une forme à un gâteau" },
    { word: "ustensile",   article: "l'",  gender: "m", definition: "outil de cuisine comme une casserole ou louche" },
    { word: "mélange",     article: "le",  gender: "m", definition: "résultat de la combinaison de plusieurs ingrédients" },
  ],
  sentences: [
    { sentence: "Il faut ajouter un ___ dans la pâte à gâteau.",         answer: "œuf" },
    { sentence: "La ___ du gâteau dure 30 minutes à 180°C.",             answer: "cuisson" },
    { sentence: "Verse le ___ dans le bol pour faire la béchamel.",      answer: "lait" },
    { sentence: "L'___ principal de cette tarte est le citron.",         answer: "ingrédient" },
    { sentence: "Elle suit la ___ de sa grand-mère pour le cake.",       answer: "recette" },
  ],
};

import type { VocabTheme } from "../../vocabulary-data";

export const V7_RECETTES_THEME: VocabTheme = {
  slug: "v7-recettes",
  code: "V7.6",
  title: "Les recettes",
  section: "V7",
  words: [
    { word: "farine", image: "farine.jpg",      article: "la",  gender: "f", definition: "poudre de céréale pour faire la pâte" },
    { word: "sucre", image: "sucre.jpg",       article: "le",  gender: "m", definition: "ingrédient sucrant blanc ou roux" },
    { word: "lait", image: "lait.jpg",        article: "le",  gender: "m", definition: "liquide blanc produit par les vaches" },
    { word: "sel", image: "sel.jpg",         article: "le",  gender: "m", definition: "minéral blanc pour assaisonner" },
    { word: "œuf", image: "œuf.jpg",         article: "l'",  gender: "m", definition: "ingrédient pondu par la poule" },
    { word: "beurre", image: "beurre.jpg",      article: "le",  gender: "m", definition: "matière grasse faite de crème de lait" },
    { word: "ingrédient", image: "ingrédient.jpg",  article: "l'",  gender: "m", definition: "élément de base d'une recette" },
    { word: "pâte", image: "pâte.jpg",        article: "la",  gender: "f", definition: "mélange de farine et liquide pour cuisiner" },
    { word: "sauce", image: "sauce.jpg",       article: "la",  gender: "f", definition: "liquide aromatisé pour accompagner un plat" },
    { word: "soupe", image: "soupe.jpg",       article: "la",  gender: "f", definition: "plat liquide chaud à base de légumes" },
    { word: "recette", image: "recette.jpg",     article: "la",  gender: "f", definition: "liste des étapes pour préparer un plat" },
    { word: "cuisson", image: "cuisson.jpg",     article: "la",  gender: "f", definition: "action et durée de chauffage d'un aliment" },
    { word: "moule", image: "moule.jpg",       article: "le",  gender: "m", definition: "récipient pour donner une forme à un gâteau" },
    { word: "ustensile", image: "ustensile.jpg",   article: "l'",  gender: "m", definition: "outil de cuisine comme une casserole ou louche" },
    { word: "mélange", image: "mélange.jpg",     article: "le",  gender: "m", definition: "résultat de la combinaison de plusieurs ingrédients" },
  ],
  sentences: [
    { sentence: "Il faut ajouter un ___ dans la pâte à gâteau.",         answer: "œuf" },
    { sentence: "La ___ du gâteau dure 30 minutes à 180°C.",             answer: "cuisson" },
    { sentence: "Verse le ___ dans le bol pour faire la béchamel.",      answer: "lait" },
    { sentence: "L'___ principal de cette tarte est le citron.",         answer: "ingrédient" },
    { sentence: "Elle suit la ___ de sa grand-mère pour le cake.",       answer: "recette" },
  ],
};

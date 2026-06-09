import type { VocabTheme } from "../../vocabulary-data";

export const V7_BOULANGERIE_THEME: VocabTheme = {
  slug: "v7-boulangerie",
  code: "V7.4",
  title: "La boulangerie",
  section: "V7",
  words: [
    { word: "pain", image: "pain.jpg",            article: "le",  gender: "m", definition: "aliment de base fait de farine cuite" },
    { word: "baguette", image: "baguette.jpg",        article: "la",  gender: "f", definition: "pain long et fin typiquement français" },
    { word: "croissant", image: "croissant.jpg",       article: "le",  gender: "m", definition: "viennoiserie feuilletée en forme de lune" },
    { word: "pain au chocolat", image: "pain-au-chocolat.jpg",article: "le",  gender: "m", definition: "viennoiserie feuilletée avec du chocolat" },
    { word: "brioche", image: "brioche.jpg",         article: "la",  gender: "f", definition: "pain sucré et moelleux au beurre" },
    { word: "gâteau", image: "gateau.jpg",          article: "le",  gender: "m", definition: "pâtisserie sucrée pour les fêtes" },
    { word: "tarte", image: "tarte.jpg",           article: "la",  gender: "f", definition: "pâtisserie plate avec garniture" },
    { word: "sandwich", image: "sandwich.jpg",        article: "le",  gender: "m", definition: "pain fourré avec des ingrédients" },
    { word: "biscuit", image: "biscuit.jpg",         article: "le",  gender: "m", definition: "petite pâtisserie sèche et sucrée" },
    { word: "viennoiserie", image: "viennoiserie.jpg",    article: "la",  gender: "f", definition: "pâtisserie feuilletée à base de beurre" },
    { word: "farine", image: "farine.jpg",          article: "la",  gender: "f", definition: "poudre obtenue en moulant les céréales" },
    { word: "levure", image: "levure.jpg",          article: "la",  gender: "f", definition: "ingrédient qui fait lever la pâte" },
    { word: "pâtisserie", image: "patisserie.jpg",      article: "la",  gender: "f", definition: "art de faire des gâteaux et friandises" },
    { word: "éclair", image: "eclair.jpg",          article: "l'",  gender: "m", definition: "gâteau allongé fourré de crème" },
    { word: "madeleine", image: "madeleine.jpg",       article: "la",  gender: "f", definition: "petit gâteau moelleux en forme de coquille" },
  ],
  sentences: [
    { sentence: "Il achète une ___ fraîche chaque matin.",               answer: "baguette" },
    { sentence: "Je prends un ___ au chocolat pour le petit-déjeuner.", answer: "pain au chocolat" },
    { sentence: "La ___ est très moelleuse et dorée.",                   answer: "brioche" },
    { sentence: "Elle a commandé un ___ au citron pour le goûter.",      answer: "éclair" },
    { sentence: "La ___ est utilisée pour faire le pain.",               answer: "farine" },
  ],
};

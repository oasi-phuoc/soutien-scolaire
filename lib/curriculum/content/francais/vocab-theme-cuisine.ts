import type { VocabTheme } from "../../vocabulary-data";

export const CUISINE_THEME: VocabTheme = {
  slug: "a2-voc-l05",
  code: "V.17",
  title: "La cuisine et les recettes",
  section: "A2",
  words: [
    { word: "farine",       article: "la",  gender: "f", definition: "poudre blanche utilisée pour faire du pain ou des gâteaux" },
    { word: "beurre",       article: "le",  gender: "m", definition: "matière grasse faite à partir du lait" },
    { word: "œuf",          article: "l'",  gender: "m", definition: "aliment pondu par une poule, utilisé en cuisine" },
    { word: "casserole",    article: "la",  gender: "f", definition: "récipient pour faire cuire sur le feu" },
    { word: "fouet",        article: "le",  gender: "m", definition: "ustensile pour battre les œufs ou la crème" },
    { word: "four",         article: "le",  gender: "m", definition: "appareil pour cuire les aliments à la chaleur" },
    { word: "mélanger",     article: "le",  gender: "m", definition: "combiner plusieurs ingrédients ensemble" },
    { word: "recette",      article: "la",  gender: "f", definition: "liste des ingrédients et des étapes d'un plat" },
    { word: "poêle",        article: "la",  gender: "f", definition: "ustensile plat pour faire frire les aliments" },
    { word: "sucre",        article: "le",  gender: "m", definition: "produit blanc qui sucre les desserts" },
    { word: "sel",          article: "le",  gender: "m", definition: "condiment blanc pour assaisonner les plats" },
    { word: "ingrédient",   article: "l'",  gender: "m", definition: "produit de base utilisé dans une recette" },
  ],
  sentences: [
    { sentence: "Pour faire un gâteau, on a besoin de ___, de beurre et d'œufs.", answer: "farine" },
    { sentence: "Je bats les œufs avec un ___ avant de les ajouter.", answer: "fouet" },
    { sentence: "Je fais cuire la soupe dans une grande ___.", answer: "casserole" },
    { sentence: "Je mets le gâteau dans le ___ à 180 degrés.", answer: "four" },
    { sentence: "J'ajoute une pincée de ___ pour assaisonner le plat.", answer: "sel" },
  ],
};

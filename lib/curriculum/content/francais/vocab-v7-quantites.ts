import type { VocabTheme } from "../../vocabulary-data";

export const V7_QUANTITES_THEME: VocabTheme = {
  slug: "v7-quantites",
  code: "V7.7",
  title: "Les quantités",
  section: "V7",
  words: [
    { word: "gramme",      article: "le",  gender: "m", definition: "unité de mesure de masse (g)" },
    { word: "kilogramme",  article: "le",  gender: "m", definition: "mille grammes (kg)" },
    { word: "millilitre",  article: "le",  gender: "m", definition: "unité de mesure de volume (ml)" },
    { word: "litre",       article: "le",  gender: "m", definition: "unité principale de volume (L)" },
    { word: "paquet",      article: "le",  gender: "m", definition: "emballage de plusieurs produits ensemble" },
    { word: "sachet",      article: "le",  gender: "m", definition: "petit sac contenant un produit" },
    { word: "tranche",     article: "la",  gender: "f", definition: "morceau fin coupé dans un aliment" },
    { word: "part",        article: "la",  gender: "f", definition: "portion d'un gâteau ou plat" },
    { word: "morceau",     article: "le",  gender: "m", definition: "petit morceau d'aliment découpé" },
    { word: "bol",         article: "le",  gender: "m", definition: "récipient rond pour le petit-déjeuner" },
    { word: "bouteille",   article: "la",  gender: "f", definition: "récipient en verre ou plastique pour liquides" },
    { word: "cuillère",    article: "la",  gender: "f", definition: "mesure d'ingrédient prise avec une cuillère" },
    { word: "pincée",      article: "la",  gender: "f", definition: "très petite quantité prise entre les doigts" },
    { word: "boîte",       article: "la",  gender: "f", definition: "contenant rigide pour conserver les aliments" },
    { word: "portion",     article: "la",  gender: "f", definition: "quantité d'aliment pour une personne" },
  ],
  sentences: [
    { sentence: "Il faut 200 ___ de farine pour cette recette.",         answer: "grammes" },
    { sentence: "Ajoute une ___ de sel à la pâte.",                      answer: "pincée" },
    { sentence: "Il boit un ___ de café au lait chaque matin.",          answer: "bol" },
    { sentence: "Achète une ___ d'eau minérale au supermarché.",         answer: "bouteille" },
    { sentence: "Elle prend une ___ de gâteau au chocolat.",             answer: "part" },
  ],
};

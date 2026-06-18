import type { VocabTheme } from "../../vocabulary-data";

export const V7_QUANTITES_THEME: VocabTheme = {
  slug: "v7-quantites",
  code: "V7.7",
  title: "Les quantités",
  section: "V7",
  words: [
    { word: "gramme",     image: "gramme.png",     article: "le",  gender: "m", definition: "unité de mesure de masse (g)" },
    { word: "kilogramme", image: "kilogramme.png", article: "le",  gender: "m", definition: "mille grammes (kg)" },
    { word: "paquet",     image: "paquet.png",     article: "le",  gender: "m", definition: "emballage de plusieurs produits ensemble" },
    { word: "sachet",     image: "sachet.png",     article: "le",  gender: "m", definition: "petit sac contenant un produit" },
    { word: "tranche",    image: "tranche.png",    article: "la",  gender: "f", definition: "morceau fin coupé dans un aliment" },
    { word: "part",       image: "part.png",       article: "la",  gender: "f", definition: "portion d'un gâteau ou plat" },
    { word: "morceau",    image: "morceau.png",    article: "le",  gender: "m", definition: "petit morceau d'aliment découpé" },
    { word: "bol",        image: "bol.png",        article: "le",  gender: "m", definition: "récipient rond pour le petit-déjeuner" },
    { word: "bouteille",  image: "bouteille.png",  article: "la",  gender: "f", definition: "récipient en verre ou plastique pour liquides" },
    { word: "cuillère",   image: "cuillere.png",   article: "la",  gender: "f", definition: "mesure d'ingrédient prise avec une cuillère" },
    { word: "pincée",     image: "pincee.png",     article: "la",  gender: "f", definition: "très petite quantité prise entre les doigts" },
    { word: "boîte",      image: "boite.png",      article: "la",  gender: "f", definition: "contenant rigide pour conserver les aliments" },
  ],
  sentences: [
    { sentence: "Il faut 200 ___ de farine pour cette recette.",         answer: "gramme" },
    { sentence: "Ajoute une ___ de sel à la pâte.",                      answer: "pincée" },
    { sentence: "Il boit un ___ de café au lait chaque matin.",          answer: "bol" },
    { sentence: "Achète une ___ d'eau minérale au supermarché.",         answer: "bouteille" },
    { sentence: "Elle prend une ___ de gâteau au chocolat.",             answer: "part" },
  ],
};

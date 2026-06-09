import type { VocabTheme } from "../../vocabulary-data";

export const V9_PAYSAGE_THEME: VocabTheme = {
  slug: "v9-paysage",
  code: "V9.8",
  title: "Le paysage",
  section: "V9",
  words: [
    { word: "montagne", image: "montagne.jpg", article: "la",  gender: "f", definition: "relief élevé avec des sommets" },
    { word: "mer", image: "mer.jpg",      article: "la",  gender: "f", definition: "grande étendue d'eau salée" },
    { word: "plage", image: "plage.jpg",    article: "la",  gender: "f", definition: "bande de sable au bord de la mer" },
    { word: "campagne", image: "campagne.jpg", article: "la",  gender: "f", definition: "zone rurale avec champs et nature" },
    { word: "forêt", image: "foret.jpg",    article: "la",  gender: "f", definition: "grande étendue d'arbres" },
    { word: "rivière", image: "riviere.jpg",  article: "la",  gender: "f", definition: "cours d'eau naturel" },
    { word: "lac", image: "lac.jpg",      article: "le",  gender: "m", definition: "étendue d'eau douce entourée de terres" },
    { word: "colline", image: "colline.jpg",  article: "la",  gender: "f", definition: "élévation de terrain moins haute qu'une montagne" },
    { word: "vallée", image: "vallee.jpg",   article: "la",  gender: "f", definition: "espace plat entre deux reliefs" },
    { word: "désert", image: "desert.jpg",   article: "le",  gender: "m", definition: "région très sèche et peu habitée" },
    { word: "île", image: "ile.jpg",      article: "l'",  gender: "f", definition: "terre entourée d'eau de tous côtés" },
    { word: "nature", image: "nature.jpg",   article: "la",  gender: "f", definition: "l'ensemble du monde naturel" },
    { word: "paysage", image: "paysage.jpg",  article: "le",  gender: "m", definition: "vue d'ensemble d'un lieu naturel" },
    { word: "côte", image: "cote.jpg",     article: "la",  gender: "f", definition: "zone littorale entre terre et mer" },
    { word: "volcan", image: "volcan.jpg",   article: "le",  gender: "m", definition: "montagne qui peut cracher de la lave" },
  ],
  sentences: [
    { sentence: "Ils passent les vacances à la ___ pour nager.",         answer: "mer" },
    { sentence: "La ___ est couverte de pins et de chênes.",             answer: "forêt" },
    { sentence: "Le ___ du Léman est très grand et calme.",              answer: "lac" },
    { sentence: "On voit des sapins tout le long de cette ___.",         answer: "vallée" },
    { sentence: "L'___ est entourée d'eau de tous côtés.",               answer: "île" },
  ],
};

import type { VocabTheme } from "../../vocabulary-data";

export const VETEMENTS_THEME: VocabTheme = {
  slug: "a1-voc-l27",
  code: "V.11",
  title: "Les vêtements et les achats",
  section: "A1",
  words: [
    { word: "robe",       article: "la",  gender: "f", definition: "vêtement féminin d'une seule pièce" },
    { word: "pantalon",   article: "le",  gender: "m", definition: "vêtement qui couvre les deux jambes" },
    { word: "pull",       article: "le",  gender: "m", definition: "vêtement chaud qu'on enfile par la tête" },
    { word: "veste",      article: "la",  gender: "f", definition: "vêtement court porté sur une chemise" },
    { word: "manteau",    article: "le",  gender: "m", definition: "vêtement long et chaud pour l'extérieur" },
    { word: "écharpe",    article: "l'",  gender: "f", definition: "accessoire porté autour du cou" },
    { word: "chaussures", article: "les", gender: "f", definition: "ce qu'on porte aux pieds" },
    { word: "chapeau",    article: "le",  gender: "m", definition: "couvre-chef porté sur la tête" },
    { word: "jean",       article: "le",  gender: "m", definition: "pantalon en denim" },
    { word: "chemise",    article: "la",  gender: "f", definition: "vêtement avec col et boutons" },
    { word: "taille",     article: "la",  gender: "f", definition: "mesure du vêtement (S, M, L, XL)" },
    { word: "soldes",     article: "les", gender: "m", definition: "période de réductions dans les magasins" },
  ],
  sentences: [
    { sentence: "En hiver, je mets toujours un ___ pour avoir chaud.", answer: "manteau" },
    { sentence: "Elle porte une belle ___ rouge pour la soirée.", answer: "robe" },
    { sentence: "Je veux essayer ce ___ — vous avez du 40 ?", answer: "pantalon" },
    { sentence: "Il met une ___ autour du cou par temps froid.", answer: "écharpe" },
    { sentence: "Pendant les ___, les prix baissent de 30 à 50%.", answer: "soldes" },
  ],
};

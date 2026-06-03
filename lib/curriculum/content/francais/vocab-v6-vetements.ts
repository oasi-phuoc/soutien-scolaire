import type { VocabTheme } from "../../vocabulary-data";

export const V6_VETEMENTS_THEME: VocabTheme = {
  slug: "v6-vetements",
  code: "V6.1",
  title: "Les vêtements",
  section: "V6",
  words: [
    { word: "t-shirt",      article: "le",  gender: "m", image: "t-shirt.jpg",     definition: "haut à manches courtes en coton" },
    { word: "chemise",      article: "la",  gender: "f", image: "chemise.jpg",     definition: "haut boutonné à manches longues" },
    { word: "pull",         article: "le",  gender: "m", image: "pull.jpg",        definition: "haut chaud en laine ou coton épais" },
    { word: "pantalon",     article: "le",  gender: "m", image: "pantalon.jpg",    definition: "vêtement qui couvre les deux jambes" },
    { word: "jupe",         article: "la",  gender: "f", image: "jupe.jpg",        definition: "vêtement féminin couvrant le bas du corps" },
    { word: "robe",         article: "la",  gender: "f", image: "robe.jpg",        definition: "vêtement d'une pièce couvrant le haut et le bas" },
    { word: "veste",        article: "la",  gender: "f", image: "veste.jpg",       definition: "vêtement court avec manches, ouvert devant" },
    { word: "manteau",      article: "le",  gender: "m", image: "manteau.jpg",     definition: "vêtement long et chaud pour l'extérieur" },
    { word: "short",        article: "le",  gender: "m", image: "short.jpg",       definition: "pantalon très court pour le sport ou l'été" },
    { word: "chaussettes",  article: "les", gender: "f", image: "chaussettes.jpg", definition: "vêtements qui couvrent les pieds" },
    { word: "chaussures",   article: "les", gender: "f", image: "chaussures.jpg",  definition: "paire de souliers pour les pieds" },
    { word: "bottes",       article: "les", gender: "f", image: "bottes.jpg",      definition: "chaussures hautes montant jusqu'aux genoux" },
    { word: "pyjama",       article: "le",  gender: "m", image: "pyjama.jpg",      definition: "vêtement pour dormir" },
    { word: "maillot",      article: "le",  gender: "m", image: "maillot.jpg",     definition: "vêtement de sport ou de bain" },
    { word: "combinaison",  article: "la",  gender: "f", image: "combinaison.jpg", definition: "vêtement d'une pièce couvrant le corps entier" },
  ],
  sentences: [
    { sentence: "Il fait froid, mets ton ___ avant de sortir.",          answer: "manteau" },
    { sentence: "Elle porte une belle ___ bleue pour la fête.",          answer: "robe" },
    { sentence: "Je mets un ___ de bain pour aller à la piscine.",       answer: "maillot" },
    { sentence: "Il fait chaud, je préfère un ___ et un t-shirt.",       answer: "short" },
    { sentence: "Elle a mis ses ___ noires pour aller au travail.",      answer: "bottes" },
  ],
};

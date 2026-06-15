import type { VocabTheme } from "../../vocabulary-data";

export const V6_VETEMENTS_THEME: VocabTheme = {
  slug: "v6-vetements",
  code: "V6.1",
  title: "Les vêtements",
  section: "V6",
  words: [
    { word: "t-shirt", article: "le", gender: "m", image: "t-shirt.png", definition: "haut à manches courtes en coton" },
    { word: "chemise", article: "la", gender: "f", image: "chemise.png", definition: "haut boutonné à manches longues" },
    { word: "pull", article: "le", gender: "m", image: "gilet.png", definition: "haut chaud en laine ou coton épais" },
    { word: "pantalon", article: "le", gender: "m", image: "jean.png", definition: "vêtement qui couvre les deux jambes" },
    { word: "jupe", article: "la", gender: "f", image: "jupe.png", definition: "vêtement féminin couvrant le bas du corps" },
    { word: "robe", article: "la", gender: "f", image: "robe.png", definition: "vêtement d'une pièce couvrant le haut et le bas" },
    { word: "veste", article: "la", gender: "f", image: "veste.png", definition: "vêtement court avec manches, ouvert devant" },
    { word: "manteau", article: "le", gender: "m", image: "manteau.png", definition: "vêtement long et chaud pour l'extérieur" },
    { word: "short", article: "le", gender: "m", image: "short.png", definition: "pantalon très court pour le sport ou l'été" },
    { word: "pyjama", article: "le", gender: "m", image: "pyjama.png", definition: "vêtement pour dormir" },
    { word: "maillot", article: "le", gender: "m", image: "maillot.jpg", definition: "vêtement de sport ou de bain" },
    { word: "combinaison", article: "la", gender: "f", image: "combinaison.png", definition: "vêtement d'une pièce couvrant le corps entier" },
    { word: "caleçon", article: "le", gender: "m", image: "calecon.png", group: "Sous-vêtements", definition: "sous-vêtement masculin" },
    { word: "soutien-gorge", article: "le", gender: "m", image: "soutien-gorge.png", group: "Sous-vêtements", definition: "sous-vêtement qui soutient la poitrine" },
    { word: "culotte", article: "la", gender: "f", image: "culotte.png", group: "Sous-vêtements", definition: "sous-vêtement du bas du corps" },
    { word: "débardeur", article: "le", gender: "m", image: "t-shirt.png", group: "Sous-vêtements", definition: "haut sans manches porté sous ou sur les vêtements" },
  ],
  sentences: [
    { sentence: "Il fait froid, mets ton ___ avant de sortir.", answer: "manteau" },
    { sentence: "Elle porte une belle ___ bleue pour la fête.", answer: "robe" },
    { sentence: "Je mets un ___ de bain pour aller à la piscine.", answer: "maillot" },
    { sentence: "Il fait chaud, je préfère un ___ et un t-shirt.", answer: "short" },
    { sentence: "Le soir, je mets mon ___ pour dormir.", answer: "pyjama" },
  ],
};

import type { VocabTheme } from "../../vocabulary-data";

export const V4_TYPE_LOGEMENT_THEME: VocabTheme = {
  slug: "v4-type-logement",
  code: "V4.1",
  title: "Les types de logement",
  section: "V4",
  words: [
    { word: "maison", image: "maison.jpg",      article: "la",  gender: "f", definition: "habitation individuelle avec jardin" },
    { word: "appartement", image: "appartement.jpg", article: "l'",  gender: "m", definition: "logement dans un immeuble" },
    { word: "studio", image: "studio.jpg",      article: "le",  gender: "m", definition: "petit appartement d'une seule pièce" },
    { word: "ferme", image: "ferme.jpg",       article: "la",  gender: "f", definition: "exploitation agricole avec logement" },
    { word: "immeuble", image: "immeuble.jpg",    article: "l'",  gender: "m", definition: "bâtiment collectif à plusieurs étages" },
    { word: "chalet", image: "chalet.jpg",      article: "le",  gender: "m", definition: "maison en bois à la montagne" },
    { word: "cabane", image: "cabane.jpg",      article: "la",  gender: "f", definition: "petite construction simple en bois" },
    { word: "logement", image: "logement.jpg",    article: "le",  gender: "m", definition: "endroit où l'on habite" },
    { word: "dortoir", image: "dortoir.jpg",     article: "le",  gender: "m", definition: "grande pièce avec plusieurs lits" },
  ],
  sentences: [
    { sentence: "Il habite dans un ___ au troisième étage.",              answer: "appartement" },
    { sentence: "Un ___ est parfait pour une seule personne.",            answer: "studio" },
    { sentence: "Le ___ en bois est typique des régions montagneuses.",   answer: "chalet" },
  ],
};

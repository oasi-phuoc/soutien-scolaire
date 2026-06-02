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
    { word: "villa", image: "villa.jpg",       article: "la",  gender: "f", definition: "grande maison luxueuse avec jardin" },
    { word: "ferme", image: "ferme.jpg",       article: "la",  gender: "f", definition: "exploitation agricole avec logement" },
    { word: "immeuble", image: "immeuble.jpg",    article: "l'",  gender: "m", definition: "bâtiment collectif à plusieurs étages" },
    { word: "résidence", image: "résidence.jpg",   article: "la",  gender: "f", definition: "ensemble d'habitations avec services communs" },
    { word: "chalet", image: "chalet.jpg",      article: "le",  gender: "m", definition: "maison en bois à la montagne" },
    { word: "pavillon", image: "pavillon.jpg",    article: "le",  gender: "m", definition: "petite maison individuelle en périphérie" },
    { word: "cabane", image: "cabane.jpg",      article: "la",  gender: "f", definition: "petite construction simple en bois" },
    { word: "logement", image: "logement.jpg",    article: "le",  gender: "m", definition: "endroit où l'on habite" },
    { word: "chambre", image: "chambre.jpg",     article: "la",  gender: "f", definition: "pièce pour dormir dans un hôtel ou logement" },
    { word: "dortoir", image: "dortoir.jpg",     article: "le",  gender: "m", definition: "grande pièce avec plusieurs lits" },
    { word: "gîte", image: "gîte.jpg",        article: "le",  gender: "m", definition: "logement de vacances à la campagne" },
    { word: "garage", image: "garage.jpg",      article: "le",  gender: "m", definition: "espace couvert pour garer une voiture" },
  ],
  sentences: [
    { sentence: "Il habite dans un ___ au troisième étage.",              answer: "appartement" },
    { sentence: "Ils ont loué un ___ à la campagne pour les vacances.",   answer: "gîte" },
    { sentence: "La ___ en montagne a un balcon avec vue sur les pistes.", answer: "villa" },
    { sentence: "Un ___ est parfait pour une seule personne.",            answer: "studio" },
    { sentence: "Le ___ en bois est typique des régions montagneuses.",   answer: "chalet" },
  ],
};

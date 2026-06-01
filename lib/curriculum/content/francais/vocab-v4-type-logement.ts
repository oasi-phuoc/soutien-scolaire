import type { VocabTheme } from "../../vocabulary-data";

export const V4_TYPE_LOGEMENT_THEME: VocabTheme = {
  slug: "v4-type-logement",
  code: "V4.1",
  title: "Les types de logement",
  section: "V4",
  words: [
    { word: "maison", image: "maison.jpg",      article: "la",  gender: "f", definition: "habitation individuelle avec jardin" },
    { word: "appartement", article: "l'",  gender: "m", definition: "logement dans un immeuble" },
    { word: "studio",      article: "le",  gender: "m", definition: "petit appartement d'une seule pièce" },
    { word: "villa",       article: "la",  gender: "f", definition: "grande maison luxueuse avec jardin" },
    { word: "ferme",       article: "la",  gender: "f", definition: "exploitation agricole avec logement" },
    { word: "immeuble",    article: "l'",  gender: "m", definition: "bâtiment collectif à plusieurs étages" },
    { word: "résidence",   article: "la",  gender: "f", definition: "ensemble d'habitations avec services communs" },
    { word: "chalet",      article: "le",  gender: "m", definition: "maison en bois à la montagne" },
    { word: "pavillon",    article: "le",  gender: "m", definition: "petite maison individuelle en périphérie" },
    { word: "cabane",      article: "la",  gender: "f", definition: "petite construction simple en bois" },
    { word: "logement",    article: "le",  gender: "m", definition: "endroit où l'on habite" },
    { word: "chambre",     article: "la",  gender: "f", definition: "pièce pour dormir dans un hôtel ou logement" },
    { word: "dortoir",     article: "le",  gender: "m", definition: "grande pièce avec plusieurs lits" },
    { word: "gîte",        article: "le",  gender: "m", definition: "logement de vacances à la campagne" },
    { word: "garage",      article: "le",  gender: "m", definition: "espace couvert pour garer une voiture" },
  ],
  sentences: [
    { sentence: "Il habite dans un ___ au troisième étage.",              answer: "appartement" },
    { sentence: "Ils ont loué un ___ à la campagne pour les vacances.",   answer: "gîte" },
    { sentence: "La ___ en montagne a un balcon avec vue sur les pistes.", answer: "villa" },
    { sentence: "Un ___ est parfait pour une seule personne.",            answer: "studio" },
    { sentence: "Le ___ en bois est typique des régions montagneuses.",   answer: "chalet" },
  ],
};

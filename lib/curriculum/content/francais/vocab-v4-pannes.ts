import type { VocabTheme } from "../../vocabulary-data";

export const V4_PANNES_THEME: VocabTheme = {
  slug: "v4-pannes",
  code: "V4.5",
  title: "Les pannes",
  section: "V4",
  words: [
    { word: "panne",         article: "la",  gender: "f", definition: "arrêt de fonctionnement d'un appareil" },
    { word: "fuite",         article: "la",  gender: "f", definition: "écoulement d'eau ou de gaz hors d'un tuyau" },
    { word: "court-circuit", article: "le",  gender: "m", definition: "défaut électrique causant une coupure" },
    { word: "chauffage",     article: "le",  gender: "m", definition: "système pour réchauffer un logement" },
    { word: "serrure",       article: "la",  gender: "f", definition: "mécanisme pour fermer une porte à clé" },
    { word: "ampoule",       article: "l'",  gender: "f", definition: "source lumineuse électrique" },
    { word: "robinet",       article: "le",  gender: "m", definition: "dispositif pour ouvrir ou fermer l'eau" },
    { word: "prise",         article: "la",  gender: "f", definition: "point de connexion électrique au mur" },
    { word: "chaudière",     article: "la",  gender: "f", definition: "appareil qui chauffe l'eau du logement" },
    { word: "réparation",    article: "la",  gender: "f", definition: "action de réparer quelque chose" },
    { word: "plombier",      article: "le",  gender: "m", definition: "artisan spécialiste des installations d'eau" },
    { word: "électricien",   article: "l'",  gender: "m", definition: "artisan spécialiste des installations électriques" },
    { word: "lave-linge",    article: "le",  gender: "m", definition: "machine pour laver le linge" },
    { word: "lave-vaisselle",article: "le",  gender: "m", definition: "machine pour laver la vaisselle" },
    { word: "tuyau",         article: "le",  gender: "m", definition: "conduit pour l'eau ou le gaz" },
  ],
  sentences: [
    { sentence: "Il y a une ___ d'eau sous l'évier.",                    answer: "fuite" },
    { sentence: "Le ___ est venu réparer le robinet cassé.",              answer: "plombier" },
    { sentence: "La ___ est tombée en panne, il n'y a plus de chauffage.", answer: "chaudière" },
    { sentence: "L'___ a changé les prises électriques.",                answer: "électricien" },
    { sentence: "Le ___ ne marche plus, il faut une réparation.",        answer: "lave-linge" },
  ],
};

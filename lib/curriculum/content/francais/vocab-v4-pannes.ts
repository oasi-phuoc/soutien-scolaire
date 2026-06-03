import type { VocabTheme } from "../../vocabulary-data";

export const V4_PANNES_THEME: VocabTheme = {
  slug: "v4-pannes",
  code: "V4.5",
  title: "Les pannes",
  section: "V4",
  words: [
    { word: "panne", image: "panne.jpg",         article: "la",  gender: "f", definition: "arrêt de fonctionnement d'un appareil" },
    { word: "fuite", image: "fuite.jpg",         article: "la",  gender: "f", definition: "écoulement d'eau ou de gaz hors d'un tuyau" },
    { word: "court-circuit", image: "court-circuit.jpg", article: "le",  gender: "m", definition: "défaut électrique causant une coupure" },
    { word: "chauffage", image: "chauffage.jpg",     article: "le",  gender: "m", definition: "système pour réchauffer un logement" },
    { word: "serrure", image: "serrure.jpg",       article: "la",  gender: "f", definition: "mécanisme pour fermer une porte à clé" },
    { word: "ampoule", image: "ampoule.jpg",       article: "l'",  gender: "f", definition: "source lumineuse électrique" },
    { word: "robinet", image: "robinet.jpg",       article: "le",  gender: "m", definition: "dispositif pour ouvrir ou fermer l'eau" },
    { word: "prise", image: "prise.jpg",         article: "la",  gender: "f", definition: "point de connexion électrique au mur" },
    { word: "chaudière", image: "chaudière.jpg",     article: "la",  gender: "f", definition: "appareil qui chauffe l'eau du logement" },
    { word: "réparation", image: "réparation.jpg",    article: "la",  gender: "f", definition: "action de réparer quelque chose" },
    { word: "plombier", image: "plombier.jpg",      article: "le",  gender: "m", definition: "artisan spécialiste des installations d'eau" },
    { word: "électricien", image: "électricien.jpg",   article: "l'",  gender: "m", definition: "artisan spécialiste des installations électriques" },
    { word: "lave-linge", image: "lave-linge.jpg",    article: "le",  gender: "m", definition: "machine pour laver le linge" },
    { word: "lave-vaisselle", image: "lave-vaisselle.jpg",article: "le",  gender: "m", definition: "machine pour laver la vaisselle" },
    { word: "tuyau", image: "tuyau.jpg",         article: "le",  gender: "m", definition: "conduit pour l'eau ou le gaz" },
  ],
  sentences: [
    { sentence: "Il y a une ___ d'eau sous l'évier.",                    answer: "fuite" },
    { sentence: "Le ___ est venu réparer le robinet cassé.",              answer: "plombier" },
    { sentence: "La ___ est tombée en panne, il n'y a plus de chauffage.", answer: "chaudière" },
    { sentence: "L'___ a changé les prises électriques.",                answer: "électricien" },
    { sentence: "Le ___ ne marche plus, il faut une réparation.",        answer: "lave-linge" },
  ],
};

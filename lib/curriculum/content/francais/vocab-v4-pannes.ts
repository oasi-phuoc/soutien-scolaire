import type { VocabTheme } from "../../vocabulary-data";

export const V4_PANNES_THEME: VocabTheme = {
  slug: "v4-pannes",
  code: "V4.5",
  title: "Les pannes",
  section: "V4",
  words: [
    // Les problèmes électriques
    { word: "panne",        image: "panne-de-courant.png", article: "la",  gender: "f", definition: "arrêt de fonctionnement d'un appareil ou coupure d'électricité",  group: "Les problèmes électriques" },
    { word: "électricien",  image: "electricien.png",      article: "l'",  gender: "m", feminine: "électricienne", definition: "artisan spécialiste des installations électriques", group: "Les problèmes électriques" },
    { word: "électricité",  image: "electricite.png",      article: "l'",  gender: "f", definition: "énergie utilisée pour alimenter les appareils",                   group: "Les problèmes électriques" },
    { word: "ampoule",      image: "ampoule.png",          article: "l'",  gender: "f", definition: "source lumineuse électrique",                                     group: "Les problèmes électriques" },
    { word: "interrupteur", image: "interrupteur.png",     article: "l'",  gender: "m", definition: "commande pour allumer ou éteindre la lumière",                   group: "Les problèmes électriques" },
    { word: "prise",        image: "prise.jpg",            article: "la",  gender: "f", definition: "point de connexion électrique au mur",                           group: "Les problèmes électriques" },

    // Les problèmes d'eau
    { word: "fuite",        image: "fuite.png",            article: "la",  gender: "f", definition: "écoulement d'eau hors d'un tuyau",                               group: "Les problèmes d'eau" },
    { word: "plombier",     image: "plombier.png",         article: "le",  gender: "m", feminine: "plombière",    definition: "artisan spécialiste des installations d'eau",        group: "Les problèmes d'eau" },
    { word: "robinet",      image: "robinet.png",          article: "le",  gender: "m", definition: "dispositif pour ouvrir ou fermer l'eau",                         group: "Les problèmes d'eau" },
    { word: "évier",        image: "evier.png",            article: "l'",  gender: "m", definition: "bac pour laver la vaisselle dans la cuisine",                    group: "Les problèmes d'eau" },
    { word: "lavabo",       image: "lavabo.png",           article: "le",  gender: "m", definition: "bac pour se laver les mains dans la salle de bain",              group: "Les problèmes d'eau" },
    { word: "tuyau",        image: "tuyau.png",            article: "le",  gender: "m", definition: "conduit pour l'eau ou le gaz",                                   group: "Les problèmes d'eau" },

    // Les problèmes de chauffage
    { word: "chauffage",    image: "probleme-de-chauffage.png", article: "le", gender: "m", definition: "système pour réchauffer un logement",                       group: "Les problèmes de chauffage" },
    { word: "réparateur",   image: "reparateur.png",       article: "le",  gender: "m", feminine: "réparatrice", definition: "personne qui répare les appareils en panne",                     group: "Les problèmes de chauffage" },
    { word: "radiateur",    image: "radiateur.png",        article: "le",  gender: "m", definition: "appareil qui diffuse la chaleur dans une pièce",                 group: "Les problèmes de chauffage" },
    { word: "thermostat",   image: "thermostat.png",       article: "le",  gender: "m", definition: "dispositif pour régler la température",                          group: "Les problèmes de chauffage" },

    // Les problèmes de portes
    { word: "serrure",       image: "probleme-de-serrure.png", article: "la", gender: "f", definition: "mécanisme pour fermer une porte à clé",                    group: "Les problèmes de portes" },
    { word: "serrurier",    image: "serrurier.png",        article: "le",  gender: "m", feminine: "serrurière",   definition: "artisan spécialiste des serrures et des clés",       group: "Les problèmes de portes" },
    { word: "porte",        image: "porte.png",            article: "la",  gender: "f", definition: "ouverture avec un battant pour entrer ou sortir",                group: "Les problèmes de portes" },
    { word: "clé",          image: "cle.png",              article: "la",  gender: "f", definition: "objet pour ouvrir ou fermer une serrure",                        group: "Les problèmes de portes" },
  ],
  sentences: [
    { sentence: "Il y a une ___ d'eau sous l'évier.",                   answer: "fuite" },
    { sentence: "Le ___ est venu réparer le robinet cassé.",             answer: "plombier" },
    { sentence: "L'___ a changé les prises et les ampoules.",           answer: "électricien" },
    { sentence: "Le ___ règle la température du chauffage.",             answer: "thermostat" },
    { sentence: "Le ___ est venu ouvrir la porte bloquée.",             answer: "serrurier" },
    { sentence: "L'appartement est en ___, il n'y a plus d'électricité.", answer: "panne" },
  ],
};

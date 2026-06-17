import type { VocabTheme } from "../../vocabulary-data";

export const V4_PANNES_THEME: VocabTheme = {
  slug: "v4-pannes",
  code: "V4.3",
  title: "Les pannes",
  section: "V4",
  words: [
    // Les problèmes électriques
    { word: "panne de courant",  image: "panne-de-courant.png",  article: "la",  gender: "f", definition: "coupure d'électricité dans un logement",                group: "Les problèmes électriques" },
    { word: "court-circuit",     image: "court-circuit.jpg",     article: "le",  gender: "m", definition: "défaut électrique causant une coupure",                   group: "Les problèmes électriques" },
    { word: "ampoule",           image: "ampoule.png",           article: "l'",  gender: "f", definition: "source lumineuse électrique",                            group: "Les problèmes électriques" },
    { word: "interrupteur",      image: "interrupteur.png",      article: "l'",  gender: "m", definition: "commande pour allumer ou éteindre la lumière",           group: "Les problèmes électriques" },
    { word: "prise",             image: "prise.jpg",             article: "la",  gender: "f", definition: "point de connexion électrique au mur",                   group: "Les problèmes électriques" },
    { word: "cafetière",         image: "cafetiere.png",         article: "la",  gender: "f", definition: "appareil électrique pour préparer le café",              group: "Les problèmes électriques" },
    { word: "bouilloire",        image: "bouilloire.png",        article: "la",  gender: "f", definition: "appareil électrique pour faire bouillir l'eau",          group: "Les problèmes électriques" },
    { word: "électricien",       image: "electricien.png",       article: "l'",  gender: "m", definition: "artisan spécialiste des installations électriques",       group: "Les problèmes électriques" },

    // Les problèmes d'eau
    { word: "fuite",             image: "fuite.jpg",             article: "la",  gender: "f", definition: "écoulement d'eau hors d'un tuyau",                       group: "Les problèmes d'eau" },
    { word: "robinet",           image: "robinet.png",           article: "le",  gender: "m", definition: "dispositif pour ouvrir ou fermer l'eau",                 group: "Les problèmes d'eau" },
    { word: "tuyau",             image: "tuyau.png",             article: "le",  gender: "m", definition: "conduit pour l'eau ou le gaz",                           group: "Les problèmes d'eau" },
    { word: "évier",             image: "evier.png",             article: "l'",  gender: "m", definition: "bac pour laver la vaisselle dans la cuisine",            group: "Les problèmes d'eau" },
    { word: "lavabo",            image: "lavabo.png",            article: "le",  gender: "m", definition: "bac pour se laver les mains dans la salle de bain",      group: "Les problèmes d'eau" },
    { word: "plombier",          image: "plombier.png",          article: "le",  gender: "m", definition: "artisan spécialiste des installations d'eau",             group: "Les problèmes d'eau" },

    // Les problèmes de chauffage
    { word: "problème de chauffage", image: "probleme-de-chauffage.png", article: "le", gender: "m", definition: "dysfonctionnement du système de chauffage",       group: "Les problèmes de chauffage" },
    { word: "radiateur",         image: "radiateur.png",         article: "le",  gender: "m", definition: "appareil qui diffuse la chaleur dans une pièce",         group: "Les problèmes de chauffage" },
    { word: "thermostat",        image: "thermostat.png",        article: "le",  gender: "m", definition: "dispositif pour régler la température",                  group: "Les problèmes de chauffage" },
    { word: "réparateur",        image: "reparateur.png",        article: "le",  gender: "m", definition: "personne qui répare les appareils en panne",             group: "Les problèmes de chauffage" },

    // Les problèmes de portes
    { word: "porte",             image: "porte.png",             article: "la",  gender: "f", definition: "ouverture avec un battant pour entrer ou sortir",        group: "Les problèmes de portes" },
    { word: "serrure",           image: "serrure.png",           article: "la",  gender: "f", definition: "mécanisme pour fermer une porte à clé",                  group: "Les problèmes de portes" },
    { word: "clé",               image: "cle.png",               article: "la",  gender: "f", definition: "objet pour ouvrir ou fermer une serrure",                group: "Les problèmes de portes" },
    { word: "problème de serrure", image: "probleme-de-serrure.png", article: "le", gender: "m", definition: "dysfonctionnement du mécanisme de fermeture",         group: "Les problèmes de portes" },
    { word: "serrurier",         image: "serrurier.png",         article: "le",  gender: "m", definition: "artisan spécialiste des serrures et des clés",           group: "Les problèmes de portes" },
  ],
  sentences: [
    { sentence: "Il y a une ___ d'eau sous l'évier.",                        answer: "fuite" },
    { sentence: "Le ___ est venu réparer le robinet cassé.",                  answer: "plombier" },
    { sentence: "L'___ a changé les prises et les ampoules.",                answer: "électricien" },
    { sentence: "Le ___ règle la température du chauffage.",                  answer: "thermostat" },
    { sentence: "La ___ est bloquée, le serrurier doit intervenir.",          answer: "serrure" },
    { sentence: "La ___ est en panne, je ne peux plus faire de café.",        answer: "cafetière" },
  ],
};

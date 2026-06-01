import type { VocabTheme } from "../../vocabulary-data";

export const V9_DIRECTION_THEME: VocabTheme = {
  slug: "v9-direction",
  code: "V9.3",
  title: "La direction",
  section: "V9",
  words: [
    { word: "gauche",          article: "la",  gender: "f", definition: "côté opposé à la droite" },
    { word: "droite",          article: "la",  gender: "f", definition: "côté opposé à la gauche" },
    { word: "nord",            article: "le",  gender: "m", definition: "direction vers le pôle Nord" },
    { word: "sud",             article: "le",  gender: "m", definition: "direction vers le pôle Sud" },
    { word: "est",             article: "l'",  gender: "m", definition: "direction du lever du soleil" },
    { word: "ouest",           article: "l'",  gender: "m", definition: "direction du coucher du soleil" },
    { word: "carrefour",       article: "le",  gender: "m", definition: "intersection de plusieurs routes" },
    { word: "rond-point",      article: "le",  gender: "m", definition: "carrefour circulaire" },
    { word: "rue", image: "rue.jpg",             article: "la",  gender: "f", definition: "voie publique en ville" },
    { word: "panneau",         article: "le",  gender: "m", definition: "signe routier avec indications" },
    { word: "feu rouge",       article: "le",  gender: "m", definition: "signal lumineux pour la circulation" },
    { word: "passage piéton",  article: "le",  gender: "m", definition: "zone réservée pour traverser la rue" },
    { word: "sortie",          article: "la",  gender: "f", definition: "point de départ d'un lieu" },
    { word: "entrée",          article: "l'",  gender: "f", definition: "point d'accès à un lieu" },
    { word: "chemin",          article: "le",  gender: "m", definition: "voie étroite ou itinéraire à suivre" },
  ],
  sentences: [
    { sentence: "Tourne à ___ au prochain carrefour.",                   answer: "gauche" },
    { sentence: "Il attend que le ___ rouge passe au vert.",             answer: "feu rouge" },
    { sentence: "La ville de Lyon est au ___ de la France.",             answer: "sud" },
    { sentence: "Traverse sur le ___ piéton pour être en sécurité.",    answer: "passage piéton" },
    { sentence: "Il regarde le ___ pour trouver la sortie de l'autoroute.", answer: "panneau" },
  ],
};

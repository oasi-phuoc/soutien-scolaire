import type { VocabTheme } from "../../vocabulary-data";

export const V9_DIRECTION_THEME: VocabTheme = {
  slug: "v9-direction",
  code: "V9.3",
  title: "La direction",
  section: "V9",
  words: [
    { word: "gauche", image: "gauche.jpg",          article: "la",  gender: "f", definition: "côté opposé à la droite" },
    { word: "droite", image: "droite.jpg",          article: "la",  gender: "f", definition: "côté opposé à la gauche" },
    { word: "nord", image: "nord.jpg",            article: "le",  gender: "m", definition: "direction vers le pôle Nord" },
    { word: "sud", image: "sud.jpg",             article: "le",  gender: "m", definition: "direction vers le pôle Sud" },
    { word: "est", image: "est.jpg",             article: "l'",  gender: "m", definition: "direction du lever du soleil" },
    { word: "ouest", image: "ouest.jpg",           article: "l'",  gender: "m", definition: "direction du coucher du soleil" },
    { word: "carrefour", image: "carrefour.jpg",       article: "le",  gender: "m", definition: "intersection de plusieurs routes" },
    { word: "rond-point", image: "rond-point.jpg",      article: "le",  gender: "m", definition: "carrefour circulaire" },
    { word: "rue", image: "rue.jpg",             article: "la",  gender: "f", definition: "voie publique en ville" },
    { word: "panneau", image: "/vocab/images/V5/panneau.png",         article: "le",  gender: "m", definition: "signe routier avec indications" },
    { word: "feu rouge", image: "feu-rouge.jpg",       article: "le",  gender: "m", definition: "signal lumineux pour la circulation" },
    { word: "passage piéton", image: "passage-pieton.jpg",  article: "le",  gender: "m", definition: "zone réservée pour traverser la rue" },
    { word: "sortie", image: "sortie.jpg",          article: "la",  gender: "f", definition: "point de départ d'un lieu" },
    { word: "entrée", image: "/vocab/images/V4/entree.jpg",          article: "l'",  gender: "f", definition: "point d'accès à un lieu" },
    { word: "chemin", image: "chemin.jpg",          article: "le",  gender: "m", definition: "voie étroite ou itinéraire à suivre" },
  ],
  sentences: [
    { sentence: "Tourne à ___ au prochain carrefour.",                   answer: "gauche" },
    { sentence: "Il attend que le ___ rouge passe au vert.",             answer: "feu rouge" },
    { sentence: "La ville de Lyon est au ___ de la France.",             answer: "sud" },
    { sentence: "Traverse sur le ___ piéton pour être en sécurité.",    answer: "passage piéton" },
    { sentence: "Il regarde le ___ pour trouver la sortie de l'autoroute.", answer: "panneau" },
  ],
};

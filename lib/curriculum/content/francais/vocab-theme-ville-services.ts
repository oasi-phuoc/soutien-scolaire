import type { VocabTheme } from "../../vocabulary-data";

export const VILLE_SERVICES_THEME: VocabTheme = {
  slug: "a2-voc-l08",
  code: "V.20",
  title: "La ville et les services",
  section: "A2",
  words: [
    { word: "mairie",       article: "la",  gender: "f", definition: "bâtiment principal d'une commune" },
    { word: "préfecture",   article: "la",  gender: "f", definition: "administration principale d'un département" },
    { word: "librairie",    article: "la",  gender: "f", definition: "magasin où on achète des livres" },
    { word: "carrefour",    article: "le",  gender: "m", definition: "croisement de plusieurs routes" },
    { word: "boulangerie",  article: "la",  gender: "f", definition: "boutique où on achète du pain frais" },
    { word: "commissariat", article: "le",  gender: "m", definition: "poste de police dans une ville" },
    { word: "traverser",    article: "le",  gender: "m", definition: "passer d'un côté à l'autre d'une rue" },
    { word: "bibliothèque", article: "la",  gender: "f", definition: "lieu public où on emprunte des livres" },
    { word: "arrêt",        article: "l'",  gender: "m", definition: "point où s'arrête un bus ou un tram" },
    { word: "feu rouge",    article: "le",  gender: "m", definition: "signal lumineux pour régler la circulation" },
    { word: "tout droit",   article: "le",  gender: "m", definition: "continuer sans tourner" },
    { word: "épicerie",     article: "l'",  gender: "f", definition: "petit magasin d'alimentation générale" },
  ],
  sentences: [
    { sentence: "Pour acheter un roman, je vais à la ___.", answer: "librairie" },
    { sentence: "Allez tout droit et tournez à gauche au ___.", answer: "carrefour" },
    { sentence: "Pour aller à la mairie, il faut ___ la rue.", answer: "traverser" },
    { sentence: "J'achète mon pain tous les matins à la ___ du coin.", answer: "boulangerie" },
    { sentence: "Le bus s'arrête à l'___ en face de la mairie.", answer: "arrêt" },
  ],
};

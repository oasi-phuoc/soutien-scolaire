import type { VocabTheme } from "../../vocabulary-data";

export const NOURRITURE_THEME: VocabTheme = {
  slug: "a1-voc-l16",
  code: "V.6",
  title: "La nourriture et le restaurant",
  section: "A1",
  words: [
    { word: "pain",           article: "le",  gender: "m", definition: "aliment de base fait avec de la farine" },
    { word: "fromage",        article: "le",  gender: "m", definition: "aliment fait avec du lait" },
    { word: "viande",         article: "la",  gender: "f", definition: "chair animale qu'on mange" },
    { word: "poisson",        article: "le",  gender: "m", definition: "animal aquatique qu'on mange" },
    { word: "légumes",        article: "les", gender: "m", definition: "végétaux qu'on mange (carotte, tomate…)" },
    { word: "fruits",         article: "les", gender: "m", definition: "aliments sucrés des arbres (pomme, poire…)" },
    { word: "eau",            article: "l'",  gender: "f", definition: "boisson essentielle sans goût" },
    { word: "vin",            article: "le",  gender: "m", definition: "boisson alcoolisée faite avec du raisin" },
    { word: "entrée",         article: "l'",  gender: "f", definition: "premier plat d'un repas" },
    { word: "dessert",        article: "le",  gender: "m", definition: "plat sucré à la fin du repas" },
    { word: "addition",       article: "l'",  gender: "f", definition: "la note à payer au restaurant" },
    { word: "serveur",        article: "le",  gender: "m", definition: "personne qui sert les plats au restaurant" },
  ],
  sentences: [
    { sentence: "On commande au ___ qui apporte les plats.", answer: "serveur" },
    { sentence: "Pour finir, je prends un ___ : une tarte au citron.", answer: "dessert" },
    { sentence: "L'___, s'il vous plaît ! On doit partir.", answer: "addition" },
    { sentence: "En France, on mange du ___ à chaque repas.", answer: "pain" },
    { sentence: "Comme ___, je prends une soupe à l'oignon.", answer: "entrée" },
  ],
};

import type { VocabTheme } from "../../vocabulary-data";

export const VACANCES_THEME: VocabTheme = {
  slug: "vacances-plage",
  code: "V.12b",
  title: "Les vacances et la plage",
  section: "A1",
  words: [
    { word: "plage",           article: "la",  gender: "f", definition: "bord de mer avec du sable" },
    { word: "mer",             article: "la",  gender: "f", definition: "grande étendue d'eau salée" },
    { word: "vague",           article: "la",  gender: "f", definition: "mouvement de l'eau de mer" },
    { word: "maillot de bain", article: "le",  gender: "m", definition: "vêtement pour nager" },
    { word: "crème solaire",   article: "la",  gender: "f", definition: "produit de protection contre le soleil" },
    { word: "serviette",       article: "la",  gender: "f", definition: "tissu pour se sécher" },
    { word: "parasol",         article: "le",  gender: "m", definition: "grand parapluie de plage pour l'ombre" },
    { word: "coup de soleil",  article: "le",  gender: "m", definition: "brûlure de la peau due au soleil" },
    { word: "baignade",        article: "la",  gender: "f", definition: "action de se baigner dans l'eau" },
    { word: "sieste",          article: "la",  gender: "f", definition: "petit sommeil après le déjeuner" },
    { word: "combinaison",     article: "la",  gender: "f", definition: "tenue néoprène pour les sports nautiques" },
    { word: "bronzer",         article: "le",  gender: "m", definition: "devenir plus foncé sous le soleil" },
  ],
  sentences: [
    { sentence: "Elle met de la ___ avant d'aller à la plage.", answer: "crème solaire" },
    { sentence: "Les enfants adorent jouer dans les ___.", answer: "vague" },
    { sentence: "Il a eu un ___ parce qu'il est resté trop longtemps au soleil.", answer: "coup de soleil" },
    { sentence: "Elle étend sa ___ sur le sable.", answer: "serviette" },
    { sentence: "Après le déjeuner, ils font une petite ___.", answer: "sieste" },
  ],
};

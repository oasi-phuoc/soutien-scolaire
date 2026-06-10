import type { VocabTheme } from "../../vocabulary-data";

export const V7_FRUITS_THEME: VocabTheme = {
  slug: "v7-fruits",
  code: "V7.1",
  title: "Les fruits",
  section: "V7",
  words: [
    { word: "pomme", image: "pomme.jpg",    article: "la",  gender: "f", definition: "fruit rouge ou vert de forme ronde" },
    { word: "poire", image: "poire.jpg",    article: "la",  gender: "f", definition: "fruit jaune-vert de forme allongée" },
    { word: "banane", image: "banane.jpg",   article: "la",  gender: "f", definition: "fruit jaune courbé à peau épaisse" },
    { word: "orange", image: "orange.jpg",   article: "l'",  gender: "f", definition: "fruit rond orange à peau épaisse" },
    { word: "fraise", image: "fraise.jpg",   article: "la",  gender: "f", definition: "petit fruit rouge et sucré" },
    { word: "raisin", image: "raisin.jpg",   article: "le",  gender: "m", definition: "fruit en grappes, violet ou vert" },
    { word: "kiwi", image: "kiwi.jpg",     article: "le",  gender: "m", definition: "petit fruit vert à peau brune et velue" },
    { word: "pêche", image: "peche.jpg",    article: "la",  gender: "f", definition: "fruit juteux à peau veloutée, orange ou jaune" },
    { word: "abricot", image: "abricot.jpg",  article: "l'",  gender: "m", definition: "petit fruit orange et sucré" },
    { word: "cerise", image: "cerise.jpg",   article: "la",  gender: "f", definition: "petit fruit rond rouge sur une tige" },
    { word: "ananas", image: "ananas.jpg",   article: "l'",  gender: "m", definition: "grand fruit tropical avec une couronne de feuilles" },
    { word: "citron", image: "citron.jpg",   article: "le",  gender: "m", definition: "fruit jaune très acide" },
    { word: "melon", image: "melon.jpg",    article: "le",  gender: "m", definition: "gros fruit rond à chair orange et sucrée" },
    { word: "pastèque", image: "pasteque.jpg", article: "la",  gender: "f", definition: "grand fruit vert à chair rouge et rafraîchissante" },
    { word: "mangue", image: "mangue.jpg",   article: "la",  gender: "f", definition: "fruit tropical jaune-orange très sucré" },
  ],
  sentences: [
    { sentence: "Je mange une ___ par jour pour rester en bonne santé.", answer: "pomme" },
    { sentence: "La ___ est un fruit tropical que j'adore en smoothie.", answer: "mangue" },
    { sentence: "En été, nous mangeons de la ___ pour nous rafraîchir.", answer: "pastèque" },
    { sentence: "Les enfants adorent la ___ rouge avec de la crème.",   answer: "fraise" },
    { sentence: "Il presse un ___ pour faire du jus frais.",             answer: "citron" },
  ],
};

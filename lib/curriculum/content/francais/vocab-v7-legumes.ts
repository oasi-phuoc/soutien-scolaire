import type { VocabTheme } from "../../vocabulary-data";

export const V7_LEGUMES_THEME: VocabTheme = {
  slug: "v7-legumes",
  code: "V7.2",
  title: "Les légumes",
  section: "V7",
  words: [
    { word: "carotte", image: "carotte.jpg",        article: "la",  gender: "f", definition: "légume orange allongé qui pousse en terre" },
    { word: "tomate", image: "tomate.jpg",         article: "la",  gender: "f", definition: "légume-fruit rouge et juteux" },
    { word: "salade", image: "salade.jpg",         article: "la",  gender: "f", definition: "légume à feuilles vertes mangé cru" },
    { word: "concombre", image: "concombre.jpg",      article: "le",  gender: "m", definition: "légume long vert et frais" },
    { word: "pomme de terre", image: "pomme-de-terre.jpg", article: "la",  gender: "f", definition: "légume en tubercule qui pousse en terre" },
    { word: "oignon", image: "oignon.jpg",         article: "l'",  gender: "m", definition: "légume rond à pelure, au goût fort" },
    { word: "poivron", image: "poivron.jpg",        article: "le",  gender: "m", definition: "légume de couleur rouge, verte ou jaune" },
    { word: "courgette", image: "courgette.jpg",      article: "la",  gender: "f", definition: "légume vert allongé et doux" },
    { word: "aubergine", image: "aubergine.jpg",      article: "l'",  gender: "f", definition: "légume violet brillant de forme ovale" },
    { word: "brocoli", image: "brocoli.jpg",        article: "le",  gender: "m", definition: "légume vert en fleur très nutritif" },
    { word: "chou", image: "chou.jpg",           article: "le",  gender: "m", definition: "légume à grosses feuilles vertes ou blanches" },
    { word: "haricot", image: "haricot.jpg",        article: "le",  gender: "m", definition: "légume en cosse, vert ou blanc" },
    { word: "ail", image: "ail.jpg",            article: "l'",  gender: "m", definition: "bulbe aromatique utilisé en cuisine" },
    { word: "maïs", image: "mais.jpg",           article: "le",  gender: "m", definition: "céréale en épi jaune dorée" },
    { word: "champignon", image: "champignon.jpg",     article: "le",  gender: "m", definition: "végétal sans chlorophylle qui pousse en forêt" },
  ],
  sentences: [
    { sentence: "Je coupe une ___ rouge pour mettre dans ma salade.",    answer: "tomate" },
    { sentence: "La ___ de terre est un légume de base en cuisine.",     answer: "pomme de terre" },
    { sentence: "L'___ donne beaucoup de goût aux sauces.",              answer: "ail" },
    { sentence: "Il fait sauter du ___ avec du beurre.",                 answer: "champignon" },
    { sentence: "Elle mange du ___ cuit à la vapeur.",                   answer: "brocoli" },
  ],
};

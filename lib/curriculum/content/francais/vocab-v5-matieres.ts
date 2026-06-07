import type { VocabTheme } from "../../vocabulary-data";

export const V5_MATIERES_THEME: VocabTheme = {
  slug: "v5-matieres",
  code: "V5.1",
  title: "Les matières scolaires",
  section: "V5",
  words: [
    { word: "fran?ais", image: "francais.png",        article: "le",  gender: "m", definition: "mati?re sur la langue fran?aise" },
    { word: "math?matiques", image: "mathematiques.png",   article: "les", gender: "f", definition: "mati?re sur les chiffres et calculs" },
    { word: "histoire", image: "histoire.png",        article: "l'",  gender: "f", definition: "mati?re sur les ?v?nements du pass?" },
    { word: "g?ographie", image: "geographie.png",      article: "la",  gender: "f", definition: "mati?re sur les pays et les paysages" },
    { word: "sport", image: "sport.png",           article: "le",  gender: "m", definition: "mati?re d'?ducation physique" },
    { word: "musique", image: "musique.png",         article: "la",  gender: "f", definition: "mati?re sur le chant et les instruments" },
    { word: "art", image: "art.png",             article: "l'",  gender: "m", definition: "mati?re sur le dessin et la peinture" },
    { word: "informatique", image: "image.jpg",    article: "l'",  gender: "f", definition: "mati?re sur les ordinateurs et le num?rique" },
    { word: "biologie", image: "biologie.png",        article: "la",  gender: "f", definition: "mati?re sur les ?tres vivants" },
    { word: "physique", image: "physique.png",        article: "la",  gender: "f", definition: "mati?re sur la mati?re et l'?nergie" },
    { word: "chimie", image: "chimie.png",          article: "la",  gender: "f", definition: "mati?re sur les substances et r?actions" },
  ],
  sentences: [
    { sentence: "J'aime les ___ parce que j'adore calculer.",            answer: "mathématiques" },
    { sentence: "En ___, on apprend des événements de l'Antiquité.",     answer: "histoire" },
    { sentence: "Le cours de ___ se passe dans la salle informatique.",  answer: "informatique" },
    { sentence: "En ___, on étudie les plantes et les animaux.",         answer: "biologie" },
    { sentence: "La ___ aide à bien parler et écrire en France.",        answer: "géographie" },
  ],
};

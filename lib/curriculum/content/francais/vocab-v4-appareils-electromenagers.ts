import type { VocabTheme } from "../../vocabulary-data";

export const V4_APPAREILS_ELECTROMENAGERS_THEME: VocabTheme = {
  slug: "v4-appareils-electromenagers",
  code: "V4.5",
  title: "Les appareils électroménagers",
  section: "V4",
  words: [
    { word: "frigo", image: "frigo.jpg", article: "le", gender: "m", definition: "appareil pour conserver les aliments au frais" },
    { word: "four", image: "four.jpg", article: "le", gender: "m", definition: "appareil pour cuire les aliments" },
    { word: "télévision", image: "television.jpg", article: "la", gender: "f", definition: "écran pour regarder des programmes" },
    { word: "ordinateur", image: "ordinateur.jpg", article: "l'", gender: "m", definition: "machine informatique pour travailler" },
    { word: "machine à laver", image: "machine-a-laver.jpg", article: "la", gender: "f", definition: "appareil pour laver le linge" },
    { word: "aspirateur", image: "aspirateur.jpg", article: "l'", gender: "m", definition: "appareil pour aspirer la poussière" },
  ],
  sentences: [
    { sentence: "Le ___ garde les aliments frais.", answer: "frigo" },
    { sentence: "Elle met le gâteau dans le ___.", answer: "four" },
    { sentence: "Il passe l'___ pour nettoyer le salon.", answer: "aspirateur" },
    { sentence: "La ___ lave le linge.", answer: "machine à laver" },
    { sentence: "Je travaille sur l'___.", answer: "ordinateur" },
  ],
};

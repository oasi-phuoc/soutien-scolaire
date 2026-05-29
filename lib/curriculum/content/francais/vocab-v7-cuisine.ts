import type { VocabTheme } from "../../vocabulary-data";

export const V7_CUISINE_THEME: VocabTheme = {
  slug: "v7-cuisine",
  code: "V7.5",
  title: "La cuisine",
  section: "V7",
  words: [
    { word: "cuisiner",  definition: "préparer des plats" },
    { word: "couper",    definition: "diviser avec un couteau" },
    { word: "mélanger",  definition: "combiner des ingrédients" },
    { word: "cuire",     definition: "chauffer un aliment pour le rendre comestible" },
    { word: "bouillir",  definition: "chauffer un liquide jusqu'à 100°C" },
    { word: "frire",     definition: "cuire dans de l'huile très chaude" },
    { word: "rôtir",     definition: "cuire au four à chaleur sèche" },
    { word: "saler",     definition: "ajouter du sel à un plat" },
    { word: "sucrer",    definition: "ajouter du sucre à une préparation" },
    { word: "goûter",    definition: "tester le goût d'un aliment" },
    { word: "laver",     definition: "nettoyer à l'eau" },
    { word: "éplucher",  definition: "enlever la peau d'un légume ou fruit" },
    { word: "verser",    definition: "faire couler un liquide d'un récipient" },
    { word: "préparer",  definition: "mettre en ordre les ingrédients avant de cuisiner" },
    { word: "réchauffer",definition: "chauffer à nouveau un plat déjà cuit" },
  ],
  sentences: [
    { sentence: "Il faut ___ les carottes avant de les couper.",         answer: "éplucher" },
    { sentence: "Elle va ___ la soupe pour le dîner de ce soir.",        answer: "réchauffer" },
    { sentence: "Il faut ___ l'eau avant d'y mettre les pâtes.",         answer: "bouillir" },
    { sentence: "Tu peux ___ la sauce pour vérifier si elle est bonne.", answer: "goûter" },
    { sentence: "Il aime ___ le dimanche pour toute sa famille.",        answer: "cuisiner" },
  ],
};

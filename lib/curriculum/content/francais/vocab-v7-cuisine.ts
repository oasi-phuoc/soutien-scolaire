import type { VocabTheme } from "../../vocabulary-data";

export const V7_CUISINE_THEME: VocabTheme = {
  slug: "v7-cuisine",
  code: "V7.5",
  title: "La cuisine",
  section: "V7",
  words: [
    { word: "cuisiner", image: "cuisiner.jpg",  definition: "préparer des plats" },
    { word: "couper", image: "couper.jpg",    definition: "diviser avec un couteau" },
    { word: "mélanger", image: "melanger.jpg",  definition: "combiner des ingrédients" },
    { word: "cuire", image: "cuire.jpg",     definition: "chauffer un aliment pour le rendre comestible" },
    { word: "bouillir", image: "bouillir.jpg",  definition: "chauffer un liquide jusqu'à 100°C" },
    { word: "frire", image: "frire.jpg",     definition: "cuire dans de l'huile très chaude" },
    { word: "rôtir", image: "rotir.jpg",     definition: "cuire au four à chaleur sèche" },
    { word: "saler", image: "saler.jpg",     definition: "ajouter du sel à un plat" },
    { word: "goûter", image: "gouter.jpg",    definition: "tester le goût d'un aliment" },
    { word: "laver", image: "laver.jpg",     definition: "nettoyer à l'eau" },
    { word: "éplucher", image: "eplucher.jpg",  definition: "enlever la peau d'un légume ou fruit" },
    { word: "verser", image: "verser.jpg",    definition: "faire couler un liquide d'un récipient" },
    { word: "réchauffer", image: "rechauffer.jpeg",definition: "chauffer à nouveau un plat déjà cuit" },
  ],
  sentences: [
    { sentence: "Il faut ___ les carottes avant de les couper.",         answer: "éplucher" },
    { sentence: "Elle va ___ la soupe pour le dîner de ce soir.",        answer: "réchauffer" },
    { sentence: "Il faut ___ l'eau avant d'y mettre les pâtes.",         answer: "bouillir" },
    { sentence: "Tu peux ___ la sauce pour vérifier si elle est bonne.", answer: "goûter" },
    { sentence: "Il aime ___ le dimanche pour toute sa famille.",        answer: "cuisiner" },
  ],
};

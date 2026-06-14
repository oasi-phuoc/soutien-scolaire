import type { VocabTheme } from "../../vocabulary-data";

export const V4_APPAREILS_ELECTROMENAGERS_THEME: VocabTheme = {
  slug: "v4-appareils-electromenagers",
  code: "V4.5",
  title: "Les appareils électroménagers",
  section: "V4",
  words: [
    { word: "four", image: "four.jpg", article: "le", gender: "m", definition: "appareil pour cuire les aliments" },
    { word: "lave-linge", image: "lave-linge.jpg", article: "le", gender: "m", definition: "appareil pour laver le linge" },
    { word: "lave-vaisselle", image: "lave-vaisselle.jpg", article: "le", gender: "m", definition: "appareil pour laver la vaisselle" },
    { word: "ampoule", image: "ampoule.jpg", article: "l'", gender: "f", definition: "objet qui produit de la lumière" },
    { word: "chauffage", image: "chauffage.jpg", article: "le", gender: "m", definition: "appareil ou système pour chauffer une pièce" },
    { word: "chaudière", image: "chaudiere.jpg", article: "la", gender: "f", definition: "appareil qui chauffe l'eau du logement" },
  ],
  sentences: [
    { sentence: "Elle met le gâteau dans le ___.", answer: "four" },
    { sentence: "Le ___ lave le linge.", answer: "lave-linge" },
    { sentence: "Le ___ lave les assiettes.", answer: "lave-vaisselle" },
    { sentence: "L'___ éclaire la pièce.", answer: "ampoule" },
    { sentence: "La ___ chauffe l'eau du logement.", answer: "chaudière" },
  ],
};

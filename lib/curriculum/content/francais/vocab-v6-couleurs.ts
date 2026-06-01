import type { VocabTheme } from "../../vocabulary-data";

export const V6_COULEURS_THEME: VocabTheme = {
  slug: "v6-couleurs",
  code: "V6.3",
  title: "Les couleurs",
  section: "V6",
  words: [
    { word: "rouge",     image: "rouge.svg",     definition: "couleur du sang et des fraises" },
    { word: "bleu",      image: "bleu.svg",      feminine: "bleue",     definition: "couleur du ciel et de la mer" },
    { word: "vert",      image: "vert.svg",      feminine: "verte",     definition: "couleur de l'herbe et des arbres" },
    { word: "jaune",     image: "jaune.svg",     definition: "couleur du soleil et du citron" },
    { word: "noir",      image: "noir.svg",      feminine: "noire",     definition: "couleur de la nuit, absence de lumière" },
    { word: "blanc",     image: "blanc.svg",     feminine: "blanche",   definition: "couleur de la neige, toutes les lumières" },
    { word: "gris",      image: "gris.svg",      feminine: "grise",     definition: "couleur intermédiaire entre noir et blanc" },
    { word: "rose",      image: "rose.svg",      definition: "couleur entre rouge et blanc" },
    { word: "orange",    image: "orange.svg",    definition: "couleur du fruit orange, entre rouge et jaune" },
    { word: "violet",    image: "violet.svg",    feminine: "violette",  definition: "couleur entre bleu et rouge" },
    { word: "marron",    image: "marron.svg",    definition: "couleur brun foncé comme le chocolat" },
    { word: "beige",     image: "beige.svg",     definition: "couleur crème, brun très clair" },
    { word: "turquoise", image: "turquoise.svg", definition: "couleur bleu-vert vif" },
    { word: "doré",      image: "dore.svg",      feminine: "dorée",     definition: "couleur brillante semblable à l'or" },
    { word: "argenté",   image: "argente.svg",   feminine: "argentée",  definition: "couleur brillante semblable à l'argent" },
  ],
  sentences: [
    { sentence: "Le ciel est ___ et le soleil brille.",                  answer: "bleu" },
    { sentence: "Elle porte une robe ___ pour la Saint-Valentin.",       answer: "rouge" },
    { sentence: "Les feuilles de cet arbre sont de couleur ___.",        answer: "vert" },
    { sentence: "Sa veste préférée est ___, comme la nuit.",             answer: "noir" },
    { sentence: "Il a une montre ___ qui brille comme de l'or.",         answer: "doré" },
  ],
};

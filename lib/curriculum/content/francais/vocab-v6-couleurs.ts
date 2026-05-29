import type { VocabTheme } from "../../vocabulary-data";

export const V6_COULEURS_THEME: VocabTheme = {
  slug: "v6-couleurs",
  code: "V6.3",
  title: "Les couleurs",
  section: "V6",
  words: [
    { word: "rouge",      definition: "couleur du sang et des fraises" },
    { word: "bleu",       feminine: "bleue",     definition: "couleur du ciel et de la mer" },
    { word: "vert",       feminine: "verte",     definition: "couleur de l'herbe et des arbres" },
    { word: "jaune",      definition: "couleur du soleil et du citron" },
    { word: "noir",       feminine: "noire",     definition: "couleur de la nuit, absence de lumière" },
    { word: "blanc",      feminine: "blanche",   definition: "couleur de la neige, toutes les lumières" },
    { word: "gris",       feminine: "grise",     definition: "couleur intermédiaire entre noir et blanc" },
    { word: "rose",       definition: "couleur entre rouge et blanc" },
    { word: "orange",     definition: "couleur du fruit orange, entre rouge et jaune" },
    { word: "violet",     feminine: "violette",  definition: "couleur entre bleu et rouge" },
    { word: "marron",     definition: "couleur brun foncé comme le chocolat" },
    { word: "beige",      definition: "couleur crème, brun très clair" },
    { word: "turquoise",  definition: "couleur bleu-vert vif" },
    { word: "doré",       feminine: "dorée",     definition: "couleur brillante semblable à l'or" },
    { word: "argenté",    feminine: "argentée",  definition: "couleur brillante semblable à l'argent" },
  ],
  sentences: [
    { sentence: "Le ciel est ___ et le soleil brille.",                  answer: "bleu" },
    { sentence: "Elle porte une robe ___ pour la Saint-Valentin.",       answer: "rouge" },
    { sentence: "Les feuilles sont ___ au printemps.",                   answer: "vertes" },
    { sentence: "Sa veste est ___, comme la nuit.",                      answer: "noire" },
    { sentence: "Il a une montre ___ qui brille comme de l'or.",         answer: "dorée" },
  ],
};

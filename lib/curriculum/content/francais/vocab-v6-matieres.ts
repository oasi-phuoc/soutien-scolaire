import type { VocabTheme } from "../../vocabulary-data";

export const V6_MATIERES_THEME: VocabTheme = {
  slug: "v6-matieres",
  code: "V6.4",
  title: "Les matières (tissus)",
  section: "V6",
  words: [
    { word: "coton", image: "coton.jpg",       article: "le",  gender: "m", definition: "tissu doux fait de la plante de coton" },
    { word: "laine", image: "laine.jpg",       article: "la",  gender: "f", definition: "tissu chaud fait de poils de mouton" },
    { word: "cuir", image: "cuir.jpg",        article: "le",  gender: "m", definition: "matière faite de peau animale tannée" },
    { word: "soie", image: "soie.jpg",        article: "la",  gender: "f", definition: "tissu fin et brillant produit par les vers à soie" },
    { word: "plastique", image: "plastique.jpg",   article: "le",  gender: "m", definition: "matière synthétique légère et imperméable" },
    { word: "métal", image: "métal.jpg",       article: "le",  gender: "m", definition: "matière dure et conductrice comme le fer" },
    { word: "bois", image: "bois.jpg",        article: "le",  gender: "m", definition: "matière naturelle provenant des arbres" },
    { word: "verre", image: "verre.jpg",       article: "le",  gender: "m", definition: "matière transparente et fragile" },
    { word: "papier", image: "papier.jpg",      article: "le",  gender: "m", definition: "matière fine faite de fibres végétales" },
    { word: "nylon", image: "nylon.jpg",       article: "le",  gender: "m", definition: "tissu synthétique résistant" },
    { word: "lin", image: "lin.jpg",         article: "le",  gender: "m", definition: "tissu naturel léger fait de la plante de lin" },
    { word: "polyester", image: "polyester.jpg",   article: "le",  gender: "m", definition: "tissu synthétique facile à entretenir" },
    { word: "caoutchouc", image: "caoutchouc.jpg",  article: "le",  gender: "m", definition: "matière élastique pour imperméables et chaussures" },
    { word: "tissu", image: "tissu.jpg",       article: "le",  gender: "m", definition: "matière textile tissée pour faire des vêtements" },
    { word: "velours", image: "velours.jpg",     article: "le",  gender: "m", definition: "tissu doux avec un côté poilu et brillant" },
  ],
  sentences: [
    { sentence: "Ce t-shirt est en ___, c'est très doux et respirant.",  answer: "coton" },
    { sentence: "Son manteau d'hiver est en ___, c'est très chaud.",     answer: "laine" },
    { sentence: "Ces chaussures sont en ___, elles durent longtemps.",   answer: "cuir" },
    { sentence: "La robe en ___ est très fine et brillante.",            answer: "soie" },
    { sentence: "Le canapé en ___ est très agréable au toucher.",        answer: "velours" },
  ],
};

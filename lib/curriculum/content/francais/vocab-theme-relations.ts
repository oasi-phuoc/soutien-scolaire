import type { VocabTheme } from "../../vocabulary-data";

export const RELATIONS_THEME: VocabTheme = {
  slug: "a2-voc-l06",
  code: "V.18",
  title: "La famille et les relations",
  section: "A2",
  words: [
    { word: "petit-fils",   article: "le",  gender: "m", definition: "le fils du fils ou de la fille" },
    { word: "petite-fille", article: "la",  gender: "f", definition: "la fille du fils ou de la fille" },
    { word: "nièce",        article: "la",  gender: "f", definition: "la fille du frère ou de la sœur" },
    { word: "neveu",        article: "le",  gender: "m", definition: "le fils du frère ou de la sœur" },
    { word: "timide",       article: "le",  gender: "m", definition: "qui n'aime pas parler en public" },
    { word: "généreux",     article: "le",  gender: "m", definition: "qui aime donner et aider les autres" },
    { word: "bavard",       article: "le",  gender: "m", definition: "qui parle beaucoup" },
    { word: "partenaire",   article: "le",  gender: "m", definition: "compagnon de vie d'une personne" },
    { word: "se marier",    article: "le",  gender: "m", definition: "s'unir officiellement avec quelqu'un" },
    { word: "ressembler",   article: "le",  gender: "m", definition: "avoir le même aspect physique" },
    { word: "cheveux",      article: "les", gender: "m", definition: "poils qui poussent sur la tête" },
    { word: "personnalité", article: "la",  gender: "f", definition: "ensemble des caractéristiques d'une personne" },
  ],
  sentences: [
    { sentence: "La fille de mon frère est ma ___.", answer: "nièce" },
    { sentence: "Il est très ___ : il parle tout le temps !", answer: "bavard" },
    { sentence: "Mon frère est ___ : il aide toujours les autres.", answer: "généreux" },
    { sentence: "Elle est ___ et n'aime pas parler en public.", answer: "timide" },
    { sentence: "Ils ont beaucoup de ___ en commun : drôles et gentils.", answer: "personnalité" },
  ],
};

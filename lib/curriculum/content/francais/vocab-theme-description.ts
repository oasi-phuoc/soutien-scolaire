import type { VocabTheme } from "../../vocabulary-data";

export const DESCRIPTION_THEME: VocabTheme = {
  slug: "a1-voc-description",
  code: "V.3",
  title: "La description",
  section: "A1",
  words: [
    { word: "taille",       article: "la",  gender: "f", definition: "la hauteur d'une personne" },
    { word: "cheveux",      article: "les", gender: "m", definition: "poils sur la tête" },
    { word: "yeux",         article: "les", gender: "m", definition: "organes pour voir, pluriel de œil" },
    { word: "barbe",        article: "la",  gender: "f", definition: "poils sur le visage d'un homme" },
    { word: "lunettes",     article: "les", gender: "f", definition: "verres correcteurs pour les yeux" },
    { word: "sourire",      article: "le",  gender: "m", definition: "expression joyeuse du visage" },
    { word: "maquillage",   article: "le",  gender: "m", definition: "produits pour embellir le visage" },
    { word: "tatouage",     article: "le",  gender: "m", definition: "dessin permanent sur la peau" },
    { word: "bouche",       article: "la",  gender: "f", definition: "partie du visage pour parler et manger" },
    { word: "nez",          article: "le",  gender: "m", definition: "partie du visage pour respirer et sentir" },
    { word: "visage",       article: "le",  gender: "m", definition: "la face d'une personne" },
    { word: "peau",         article: "la",  gender: "f", definition: "l'enveloppe extérieure du corps" },
  ],
  sentences: [
    { sentence: "Elle a les ___ longs et bruns.", answer: "cheveux" },
    { sentence: "Il porte des ___ depuis l'âge de 10 ans.", answer: "lunettes" },
    { sentence: "Son ___ est très expressif quand il parle.", answer: "visage" },
    { sentence: "Elle a un beau ___ naturel.", answer: "sourire" },
    { sentence: "Il a les ___ bleus et le ___ fin.", answer: "yeux" },
  ],
};

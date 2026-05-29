import type { VocabTheme } from "../../vocabulary-data";

export const V9_VILLE_THEME: VocabTheme = {
  slug: "v9-ville",
  code: "V9.1",
  title: "La ville",
  section: "V9",
  words: [
    { word: "ville",       article: "la",  gender: "f", definition: "agglomération urbaine importante" },
    { word: "quartier",    article: "le",  gender: "m", definition: "zone d'une ville avec ses habitants" },
    { word: "centre-ville",article: "le",  gender: "m", definition: "partie centrale d'une ville" },
    { word: "rue",         article: "la",  gender: "f", definition: "voie publique entre des bâtiments" },
    { word: "avenue",      article: "l'",  gender: "f", definition: "large voie plantée d'arbres" },
    { word: "place",       article: "la",  gender: "f", definition: "espace public ouvert en ville" },
    { word: "marché",      article: "le",  gender: "m", definition: "lieu de vente en plein air" },
    { word: "mairie",      article: "la",  gender: "f", definition: "bâtiment administratif de la commune" },
    { word: "gare",        article: "la",  gender: "f", definition: "bâtiment pour les trains et transports" },
    { word: "hôpital",     article: "l'",  gender: "m", definition: "établissement de soins médicaux" },
    { word: "magasin",     article: "le",  gender: "m", definition: "boutique pour acheter des produits" },
    { word: "banque",      article: "la",  gender: "f", definition: "établissement financier" },
    { word: "parc",        article: "le",  gender: "m", definition: "espace vert public en ville" },
    { word: "boulangerie", article: "la",  gender: "f", definition: "boutique qui vend du pain et des viennoiseries" },
    { word: "église",      article: "l'",  gender: "f", definition: "lieu de culte chrétien" },
  ],
  sentences: [
    { sentence: "Il va acheter du pain à la ___ du quartier.",           answer: "boulangerie" },
    { sentence: "La ___ organise les services pour les habitants.",       answer: "mairie" },
    { sentence: "Les enfants jouent dans le ___ après l'école.",         answer: "parc" },
    { sentence: "Elle prend son train à la ___ centrale.",               answer: "gare" },
    { sentence: "Il achète des légumes frais au ___ du samedi.",         answer: "marché" },
  ],
};

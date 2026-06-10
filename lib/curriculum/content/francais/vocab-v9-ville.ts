import type { VocabTheme } from "../../vocabulary-data";

export const V9_VILLE_THEME: VocabTheme = {
  slug: "v9-ville",
  code: "V9.1",
  title: "La ville",
  section: "V9",
  words: [
    { word: "ville", image: "ville.jpg",       article: "la",  gender: "f", definition: "agglomération urbaine importante" },
    { word: "quartier", image: "quartier.jpg",    article: "le",  gender: "m", definition: "zone d'une ville avec ses habitants" },
    { word: "centre-ville", image: "centre-ville.jpg",article: "le",  gender: "m", definition: "partie centrale d'une ville" },
    { word: "rue", image: "rue.jpg",         article: "la",  gender: "f", definition: "voie publique entre des bâtiments" },
    { word: "avenue", image: "avenue.jpg",      article: "l'",  gender: "f", definition: "large voie plantée d'arbres" },
    { word: "place", image: "place.jpg",       article: "la",  gender: "f", definition: "espace public ouvert en ville" },
    { word: "marché", image: "marche.jpg",      article: "le",  gender: "m", definition: "lieu de vente en plein air" },
    { word: "mairie", image: "mairie.jpg",      article: "la",  gender: "f", definition: "bâtiment administratif de la commune" },
    { word: "gare", image: "gare.jpg",        article: "la",  gender: "f", definition: "bâtiment pour les trains et transports" },
    { word: "hôpital", image: "hopital.jpg",     article: "l'",  gender: "m", definition: "établissement de soins médicaux" },
    { word: "magasin", image: "magasin.jpg",     article: "le",  gender: "m", definition: "boutique pour acheter des produits" },
    { word: "banque", image: "banque.jpg",      article: "la",  gender: "f", definition: "établissement financier" },
    { word: "parc", image: "parc.jpg",        article: "le",  gender: "m", definition: "espace vert public en ville" },
    { word: "boulangerie", image: "boulangerie.jpg", article: "la",  gender: "f", definition: "boutique qui vend du pain et des viennoiseries" },
    { word: "église", image: "eglise.jpg",      article: "l'",  gender: "f", definition: "lieu de culte chrétien" },
  ],
  sentences: [
    { sentence: "Il va acheter du pain à la ___ du quartier.",           answer: "boulangerie" },
    { sentence: "La ___ organise les services pour les habitants.",       answer: "mairie" },
    { sentence: "Les enfants jouent dans le ___ après l'école.",         answer: "parc" },
    { sentence: "Elle prend son train à la ___ centrale.",               answer: "gare" },
    { sentence: "Il achète des légumes frais au ___ du samedi.",         answer: "marché" },
  ],
};

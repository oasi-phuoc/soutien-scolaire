import { buildObjectPickTask, type COObjectPickCard } from "./co-questions-helpers";

export type COObjetPickDef = {
  cards: [COObjectPickCard, COObjectPickCard, COObjectPickCard, COObjectPickCard, COObjectPickCard];
};

/** Cartes image 5× (3 + 2) — A1 base « Identifier des objets ». */
export const CO_OBJET_PICK: Record<string, COObjetPickDef> = {
  "base-objet-1": {
    cards: [
      { label: "lampe", image: "/vocab/images/V4/lamp.webp", heard: false },
      { label: "poubelle", heard: true },
      { label: "fleur", image: "/assets/words/img/fleur.webp", heard: true },
      { label: "table", image: "/vocab/images/V4/table.webp", heard: true },
      { label: "clé", image: "/vocab/images/V4/cle.webp", heard: true },
    ],
  },
  "base-objet-2": {
    cards: [
      { label: "guitare", image: "/assets/words/img/guitare.webp", heard: true },
      { label: "piano", image: "/assets/words/img/piano.webp", heard: false },
      { label: "sac", image: "/vocab/images/V6/sac-a-main.webp", heard: false },
      { label: "robe", image: "/vocab/images/V6/robe.webp", heard: true },
      { label: "talon", heard: false },
    ],
  },
  "base-objet-3": {
    cards: [
      { label: "carte d'étudiant", heard: true },
      { label: "passeport", image: "/vocab/images/V10/passeport.webp", heard: false },
      { label: "photo", image: "/assets/words/img/photo.webp", heard: true },
      { label: "carte de crédit", heard: false },
      { label: "carte d'identité", heard: true },
    ],
  },
  "base-objet-4": {
    cards: [
      { label: "cahier", image: "/vocab/images/V5/cahier.webp", heard: false },
      { label: "surligneur", image: "/vocab/images/V5/surligneur.webp", heard: false },
      { label: "stylo", image: "/vocab/images/V5/stylo.webp", heard: true },
      { label: "règle", image: "/vocab/images/V5/regle.webp", heard: true },
      { label: "carte", heard: false },
    ],
  },
  "base-objet-5": {
    cards: [
      { label: "voiture", image: "/vocab/images/V9/voiture.webp", heard: true },
      { label: "avion", image: "/assets/words/img/avion.webp", heard: false },
      { label: "États-Unis", image: "/vocab/images/V1/etats-unis.webp", heard: true },
      { label: "hélicoptère", heard: true },
      { label: "appareil photo", heard: true },
    ],
  },
  "base-objet-6": {
    cards: [
      { label: "scotch", heard: true },
      { label: "feuille", image: "/vocab/images/V5/feuille.webp", heard: false },
      { label: "ciseaux", image: "/assets/words/img/ciseaux.webp", heard: false },
      { label: "colle", image: "/vocab/images/V5/colle.webp", heard: false },
      { label: "crayon de couleur", image: "/vocab/images/V5/crayon.webp", heard: true },
    ],
  },
  "base-objet-7": {
    cards: [
      { label: "gâteau", image: "/vocab/images/V10/gateau.webp", heard: true },
      { label: "poulet", heard: true },
      { label: "radis", image: "/vocab/images/V7/radis.webp", heard: false },
      { label: "salade", image: "/vocab/images/V7/salade.webp", heard: true },
      { label: "gratin", heard: false },
    ],
  },
  "base-objet-8": {
    cards: [
      { label: "chaise", image: "/vocab/images/V4/chaise.webp", heard: true },
      { label: "bureau", image: "/vocab/images/V4/bureau.webp", heard: true },
      { label: "lunettes", image: "/vocab/images/V6/lunettes.webp", heard: false },
      { label: "médicament", image: "/vocab/images/V8/medicament.webp", heard: true },
      { label: "ordinateur", heard: true },
    ],
  },
  "base-objet-9": {
    cards: [
      { label: "fleur", image: "/assets/words/img/fleur.webp", heard: true },
      { label: "table", image: "/vocab/images/V4/table.webp", heard: false },
      { label: "plume", heard: true },
      { label: "cheval", image: "/vocab/images/V9/cheval.webp", heard: false },
      { label: "gâteau", image: "/vocab/images/V10/gateau.webp", heard: true },
    ],
  },
};

export function buildObjetPickTask(groupId: string) {
  const def = CO_OBJET_PICK[groupId];
  if (!def) return null;
  return buildObjectPickTask(def.cards);
}

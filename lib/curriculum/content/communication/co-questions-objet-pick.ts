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
};

export function buildObjetPickTask(groupId: string) {
  const def = CO_OBJET_PICK[groupId];
  if (!def) return null;
  return buildObjectPickTask(def.cards);
}

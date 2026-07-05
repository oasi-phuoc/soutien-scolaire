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
};

export function buildObjetPickTask(groupId: string) {
  const def = CO_OBJET_PICK[groupId];
  if (!def) return null;
  return buildObjectPickTask(def.cards);
}

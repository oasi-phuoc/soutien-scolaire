import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_SUPERLATIF: GrammarLesson = {
  slug: "a2-gr-superlatif",
  code: "R8.3",
  level: "A2",
  title: "Le superlatif",
  theory: [
    { type: "heading", text: "Le superlatif" },
    {
      type: "grid",
      headers: ["Avec", "Structure", "Exemple"],
      rows: [
        ["adjectif", "le / la / les plus ou moins + adjectif", "la ville la plus grande"],
        ["adverbe", "le plus ou le moins + adverbe", "celui qui court le plus vite"],
        ["bon", "le meilleur / la meilleure / les meilleurs", "le meilleur résultat"],
        ["bien", "le mieux", "elle chante le mieux"],
        ["mauvais", "le pire", "la pire journée"],
      ],
      boldFirstCol: true,
    },
    { type: "highlight", label: "Accord", items: ["Avec un adjectif, l'article et l'adjectif s'accordent avec le nom : le plus grand, la plus grande, les plus grandes.", "Avec un adverbe, le reste toujours invariable : elles travaillent le plus rapidement."] },
  ],
  exercises: [],
};

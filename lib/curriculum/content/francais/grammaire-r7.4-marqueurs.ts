import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_MARQUEURS_TEMPORELS: GrammarLesson = {
  slug: "a2-gr-marqueurs-temporels",
  code: "R7.4",
  level: "A2",
  title: "Les marqueurs chronologiques",
  theory: [
    { type: "heading", text: "Situer un événement dans le temps" },
    {
      type: "grid",
      headers: ["Repère direct", "Repère dans un récit"],
      rows: [
        ["hier", "la veille"], ["aujourd'hui", "ce jour-là"], ["demain", "le lendemain"],
        ["avant-hier", "l'avant-veille"], ["après-demain", "le surlendemain"],
        ["la semaine prochaine", "la semaine suivante"], ["la semaine dernière", "la semaine précédente"],
      ],
      equalCols: true,
    },
    { type: "highlight", label: "Point de vue", items: ["Hier, aujourd'hui et demain se calculent depuis le moment où l'on parle.", "La veille, ce jour-là et le lendemain se calculent depuis un autre moment du récit."] },
  ],
  exercises: [],
};

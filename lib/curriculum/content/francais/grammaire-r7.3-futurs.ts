import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_FUTUR_SIMPLE_PROCHE: GrammarLesson = {
  slug: "a2-gr-futur-simple-ou-proche",
  code: "R7.3",
  level: "A2",
  title: "Futur simple ou futur proche ?",
  theory: [
    { type: "heading", text: "Futur simple ou futur proche ?" },
    {
      type: "grid",
      headers: ["Futur proche", "Futur simple"],
      rows: [
        ["aller au présent + infinitif", "infinitif ou base irrégulière + terminaison"],
        ["action imminente", "action plus éloignée"],
        ["intention déjà décidée", "prévision, promesse ou fait futur"],
        ["Je vais partir maintenant.", "Je partirai l'année prochaine."],
      ],
      equalCols: true,
    },
    { type: "highlight", label: "Le contexte décide", items: ["Les deux futurs peuvent parfois être possibles ; le choix dépend de la proximité et de l'intention du locuteur."] },
  ],
  exercises: [],
};

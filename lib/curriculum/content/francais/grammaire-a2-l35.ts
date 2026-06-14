import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_L35: GrammarLesson = {
  slug: "a2-gr-l35",
  code: "R4.22",
  level: "A2",
  title: "Les pronoms COD et COI",
  theory: [
    { type: "heading", text: "Les pronoms COD et COI" },
    {
      type: "plain_list",
      items: [
        "Les pronoms personnels remplacent un {a}nom déjà mentionné{/a} pour éviter les répétitions.",
        "{a}COD{/a} = Complément d'Objet Direct (sans préposition).",
        "{a}COI{/a} = Complément d'Objet Indirect (avec la préposition {a}à{/a}).",
      ],
    },
    {
      type: "grid",
      headers: ["Personne", "COD", "COI"],
      boldFirstCol: true,
      rows: [
        ["1re sing.", "{a}me / m'{/a}", "{a}me / m'{/a}"],
        ["2e sing.", "{a}te / t'{/a}", "{a}te / t'{/a}"],
        ["3e sing. masc.", "{a}le / l'{/a}", "{a}lui{/a}"],
        ["3e sing. fém.", "{a}la / l'{/a}", "{a}lui{/a}"],
        ["1re plur.", "{a}nous{/a}", "{a}nous{/a}"],
        ["2e plur.", "{a}vous{/a}", "{a}vous{/a}"],
        ["3e plur.", "{a}les{/a}", "{a}leur{/a}"],
      ],
    },
    { type: "heading", text: "Comment identifier COD vs COI ?", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Question à poser", "Réponse = …", "Pronom"],
      boldFirstCol: true,
      rows: [
        ["Je vois {a}qui / quoi ?{/a}", "COD (sans à)", "le, la, les, me, te…"],
        ["Je parle {a}à qui ?{/a}", "COI (avec à)", "lui, leur, me, te…"],
      ],
    },
    {
      type: "grid",
      headers: ["Phrase originale", "→ Avec pronom"],
      rows: [
        ["J'appelle Marco.", "Je {a}le{/a} appelle. → Je {a}l'{/a}appelle. (COD)"],
        ["Je parle à Marco.", "Je {a}lui{/a} parle. (COI)"],
        ["Je regarde le film.", "Je {a}le{/a} regarde. (COD)"],
        ["J'écris à mes amis.", "Je {a}leur{/a} écris. (COI)"],
        ["Il nous aide.", "Il {a}nous{/a} aide. (COD)"],
        ["Elle te téléphone.", "Elle {a}te{/a} téléphone. (COI)"],
      ],
    },
    { type: "heading", text: "Place du pronom", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "Le pronom se place {a}avant{/a} le verbe conjugué.",
        "Au passé composé : avant l'auxiliaire.",
        "Avec infinitif : avant l'infinitif.",
      ],
    },
    {
      type: "grid",
      headers: ["Temps", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Présent", "Je {a}le{/a} vois."],
        ["Passé composé", "Je {a}l'{/a}ai vu."],
        ["Futur proche", "Je vais {a}le{/a} voir."],
        ["Négatif", "Je {a}ne{/a} {a}le{/a} vois {a}pas{/a}."],
        ["Impératif affirmatif", "Vois-{a}le{/a} ! (pronom après)"],
        ["Impératif négatif", "Ne {a}le{/a} vois {a}pas{/a} !"],
      ],
    },
  ],
  exercises: [],
};

import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L04: ConjLesson = {
  slug: "a2-conj-l04",
  code: "G4.14",
  level: "A2",
  title: "Le conditionnel de politesse",
  theory: [
    { type: "heading", text: "Le conditionnel présent" },
    {
      type: "plain_list",
      items: [
        "Le conditionnel exprime une action {a}hypothétique, souhaitée ou polie{/a}.",
        "Formation : {a}base du futur{/a} + terminaisons de l'imparfait",
        "Terminaisons : {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
      ],
    },
    {
      type: "table",
      tables: [
        {
          verb: "aimer (conditionnel)",
          accentForms: true,
          rows: [
            { pronoun: "j'", form: "aimerais" },
            { pronoun: "tu", form: "aimerais" },
            { pronoun: "il / elle / on", form: "aimerait" },
            { pronoun: "nous", form: "aimerions" },
            { pronoun: "vous", form: "aimeriez" },
            { pronoun: "ils / elles", form: "aimeraient" },
          ],
        },
      ],
    },
    { type: "heading", text: "Bases irrégulières au conditionnel", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Infinitif", "Base conditionnel", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["être", "{a}ser-{/a}", "je serais"],
        ["avoir", "{a}aur-{/a}", "j'aurais"],
        ["aller", "{a}ir-{/a}", "j'irais"],
        ["faire", "{a}fer-{/a}", "je ferais"],
        ["pouvoir", "{a}pourr-{/a}", "je pourrais"],
        ["vouloir", "{a}voudr-{/a}", "je voudrais"],
        ["venir", "{a}viendr-{/a}", "je viendrais"],
        ["devoir", "{a}devr-{/a}", "je devrais"],
        ["savoir", "{a}saur-{/a}", "je saurais"],
      ],
    },
    { type: "heading", text: "Emplois du conditionnel", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Usage", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Demande polie", "Je {a}voudrais{/a} un café, s'il vous plaît."],
        ["Conseil", "Tu {a}devrais{/a} consulter un médecin."],
        ["Souhait", "J'{a}aimerais{/a} voyager en Italie."],
        ["Hypothèse (si + imparfait)", "Si j'avais le temps, je {a}ferais{/a} du sport."],
        ["Information non confirmée", "Il {a}serait{/a} malade. (selon la rumeur)"],
      ],
    },
    {
      type: "highlight",
      label: "Politesse : impératif vs conditionnel",
      items: [
        "{a}Impératif{/a} (direct) : Donnez-moi un café !",
        "{a}Conditionnel{/a} (poli) : Je voudrais un café, s'il vous plaît.",
        "En contexte formel ou professionnel, privilégiez toujours le conditionnel.",
      ],
    },
  ],
  exercises: [],
};

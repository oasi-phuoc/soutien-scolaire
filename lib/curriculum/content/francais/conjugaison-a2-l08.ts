import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L08: ConjLesson = {
  slug: "a2-conj-l08",
  code: "G.46",
  level: "A2",
  title: "Le futur simple",
  theory: [
    { type: "heading", text: "Le futur simple : formation" },
    {
      type: "plain_list",
      items: [
        "Formation régulière : {a}infinitif{/a} + terminaisons du futur.",
        "Terminaisons : {a}-ai / -as / -a / -ons / -ez / -ont{/a}",
        "Pour les verbes en -re : supprimer le -e final avant d'ajouter les terminaisons.",
      ],
    },
    {
      type: "table",
      tables: [
        {
          verb: "parler (futur simple)",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "parlerai" },
            { pronoun: "tu", form: "parleras" },
            { pronoun: "il / elle / on", form: "parlera" },
            { pronoun: "nous", form: "parlerons" },
            { pronoun: "vous", form: "parlerez" },
            { pronoun: "ils / elles", form: "parleront" },
          ],
        },
        {
          verb: "finir (futur simple)",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "finirai" },
            { pronoun: "tu", form: "finiras" },
            { pronoun: "il / elle / on", form: "finira" },
            { pronoun: "nous", form: "finirons" },
            { pronoun: "vous", form: "finirez" },
            { pronoun: "ils / elles", form: "finiront" },
          ],
        },
      ],
    },
    { type: "heading", text: "Bases irrégulières au futur", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Infinitif", "Base futur", "je…", "Aussi pour le conditionnel"],
      boldFirstCol: true,
      rows: [
        ["être", "{a}ser-{/a}", "je serai", "je serais"],
        ["avoir", "{a}aur-{/a}", "j'aurai", "j'aurais"],
        ["aller", "{a}ir-{/a}", "j'irai", "j'irais"],
        ["faire", "{a}fer-{/a}", "je ferai", "je ferais"],
        ["pouvoir", "{a}pourr-{/a}", "je pourrai", "je pourrais"],
        ["vouloir", "{a}voudr-{/a}", "je voudrai", "je voudrais"],
        ["venir", "{a}viendr-{/a}", "je viendrai", "je viendrais"],
        ["savoir", "{a}saur-{/a}", "je saurai", "je saurais"],
        ["devoir", "{a}devr-{/a}", "je devrai", "je devrais"],
        ["voir", "{a}verr-{/a}", "je verrai", "je verrais"],
        ["envoyer", "{a}enverr-{/a}", "j'enverrai", "j'enverrais"],
      ],
    },
    { type: "heading", text: "Emplois du futur simple", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Usage", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Événement futur certain", "Demain, je {a}partirai{/a} à 8h."],
        ["Promesse / engagement", "Je t'{a}appellerai{/a} dès que j'arrive."],
        ["Hypothèse (si + présent → futur)", "Si tu étudies, tu {a}réussiras{/a}."],
        ["Prévision", "Il {a}pleuvra{/a} demain."],
      ],
    },
    { type: "heading", text: "Futur simple vs Futur proche", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Futur proche", "Futur simple"],
      rows: [
        ["Action {a}imminente{/a} / très prévue", "Action {a}plus lointaine{/a} ou certaine"],
        ["Je vais appeler maintenant.", "Je l'appellerai ce soir."],
        ["Intention planifiée", "Promesse ou prévision"],
      ],
    },
    {
      type: "highlight",
      label: "Marqueurs temporels du futur simple",
      items: [
        "demain, après-demain, dans + durée",
        "la semaine / le mois / l'année prochaine",
        "bientôt, un jour, plus tard, quand + futur",
      ],
    },
  ],
  exercises: [],
};

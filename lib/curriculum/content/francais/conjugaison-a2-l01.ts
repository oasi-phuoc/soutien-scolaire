import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L01: ConjLesson = {
  slug: "a2-conj-l01",
  code: "G4.9",
  level: "A2",
  title: "Les verbes en -er — révision et particularités",
  theory: [
    { type: "heading", text: "Révision : terminaisons des verbes en -er" },
    {
      type: "grid",
      headers: ["Pronom", "Terminaison", "Exemple (parler)"],
      boldFirstCol: true,
      rows: [
        ["je", "{a}-e{/a}", "parl{a}e{/a}"],
        ["tu", "{a}-es{/a}", "parl{a}es{/a}"],
        ["il / elle / on", "{a}-e{/a}", "parl{a}e{/a}"],
        ["nous", "{a}-ons{/a}", "parl{a}ons{/a}"],
        ["vous", "{a}-ez{/a}", "parl{a}ez{/a}"],
        ["ils / elles", "{a}-ent{/a}", "parl{a}ent{/a}"],
      ],
    },
    { type: "heading", text: "Cas particuliers : orthographe", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Type de verbe", "Règle", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Verbes en {a}-ger{/a}", "Ajouter {a}e{/a} avant -ons (son [ʒ])", "nous mang{a}e{/a}ons"],
        ["Verbes en {a}-cer{/a}", "Remplacer c par {a}ç{/a} avant -ons", "nous commen{a}ç{/a}ons"],
      ],
    },
    { type: "heading", text: "Verbes à deux bases (radical qui change)", sub: true, accent: true },
    {
      type: "table",
      tables: [
        {
          verb: "préférer — è / é",
          accentForms: true,
          rows: [
            { pronoun: "je / tu / il", form: "préfère" },
            { pronoun: "nous / vous", form: "préférons / préférez" },
            { pronoun: "ils / elles", form: "préfèrent" },
          ],
        },
        {
          verb: "appeler — ll / l",
          accentForms: true,
          rows: [
            { pronoun: "j' / tu / il", form: "appelle" },
            { pronoun: "nous / vous", form: "appelons / appelez" },
            { pronoun: "ils / elles", form: "appellent" },
          ],
        },
        {
          verb: "acheter — è / e",
          accentForms: true,
          rows: [
            { pronoun: "j' / tu / il", form: "achète" },
            { pronoun: "nous / vous", form: "achetons / achetez" },
            { pronoun: "ils / elles", form: "achètent" },
          ],
        },
        {
          verb: "payer — i / y (optionnel)",
          accentForms: true,
          rows: [
            { pronoun: "je / tu / il", form: "paie (ou paye)" },
            { pronoun: "nous / vous", form: "payons / payez" },
            { pronoun: "ils / elles", form: "paient (ou payent)" },
          ],
        },
      ],
    },
    {
      type: "highlight",
      label: "Règle des deux bases",
      items: [
        "Le radical fort (avec accent ou consonne double) s'utilise avec {a}je, tu, il, ils{/a}.",
        "Le radical faible (forme originale) s'utilise avec {a}nous, vous{/a}.",
        "Cette alternance est régulière pour toute la famille de ces verbes.",
      ],
    },
  ],
  exercises: [],
};

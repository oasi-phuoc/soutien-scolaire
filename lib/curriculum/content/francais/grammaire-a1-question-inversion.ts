import type { GrammarLesson } from "../../grammar-data";

/** Unité 33 — La question avec inversion (G4.3) */
export const A1_GR_QUESTION_INVERSION: GrammarLesson = {
  slug: "a1-gr-question-inversion",
  code: "G4.3",
  level: "A1",
  title: "La question avec inversion",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "L'inversion sujet-verbe s'utilise en général dans les situations formelles.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["Registre", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Familier", "Vous êtes satisfait ?"],
        ["Standard", "Est-ce que vous êtes satisfait ?"],
        ["Formel", "Êtes-vous satisfait ?"],
      ],
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "plain_list",
      items: [
        "On place le verbe avant le pronom sujet. → Venez-vous souvent ?",
        "Aux temps composés, l'auxiliaire passe devant le pronom. → Avez-vous aimé votre séjour ? ; Pourquoi avez-vous choisi notre centre ?",
        "Verbes pronominaux : attention à l'ordre. → Quand vous inscrivez-vous ? ; Quand s'est-il inscrit ?",
        "Sujet nom : le nom reste devant, on ajoute un pronom après le verbe. → Les animateurs sont-ils sympathiques ? ; Combien de fois le directeur est-il venu vous voir ?",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "plain_list",
      items: [
        "Verbe en {a}-d{/a} + pronom voyelle : le {a}d{/a} se prononce [t]. → Que répond-il ?",
        "Forme très formelle de je peux : {a}Puis-je{/a}. → Puis-je vous poser une question ?",
        "Verbe voyelle + pronom voyelle : on ajoute {a}-t-{/a}. → Aime-t-elle… ? ; Y a-t-il… ? ; Pourquoi a-t-il… ?",
        "Trait d'union obligatoire entre le verbe et le pronom. → Que pensez-vous de nos services ?",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Inversion",
      instruction: "Choisissez la forme avec inversion correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ satisfait ?", choices: ["Êtes-vous", "Vous êtes", "Est-ce êtes-vous"], correctIdx: 0 },
        { sentence: "___ souvent ?", choices: ["Venez-vous", "Vous venez", "Venez vous"], correctIdx: 0 },
        { sentence: "___ aimé votre séjour ?", choices: ["Avez-vous", "Vous avez", "Avez vous"], correctIdx: 0 },
        { sentence: "Les animateurs ___ sympathiques ?", choices: ["sont-ils", "sont", "ils sont"], correctIdx: 0 },
        { sentence: "___ les centres de vacances ?", choices: ["Aime-t-elle", "Aime-elle", "Aime t elle"], correctIdx: 0 },
        { sentence: "___ une salle de repos ?", choices: ["Y a-t-il", "Y a-il", "Il y a"], correctIdx: 0 },
        { sentence: "___ vous poser une question ?", choices: ["Puis-je", "Peux-je", "Je peux"], correctIdx: 0 },
        { sentence: "Que ___ de nos services ?", choices: ["pensez-vous", "vous pensez", "pensez vous"], correctIdx: 0 },
        { sentence: "Quand ___ ?", choices: ["vous inscrivez-vous", "inscrivez-vous vous", "vous vous inscrivez"], correctIdx: 0 },
        { sentence: "Registre formel de « Vous êtes satisfait ? » :", choices: ["Êtes-vous satisfait ?", "Est-ce que vous êtes satisfait ?", "Vous êtes satisfait ?"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez l'inversion",
      instruction: "Écrivez la forme manquante (verbe-pronom).",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ satisfait ?", hint: "être + vous", answer: "Êtes-vous" },
        { sentence: "___ souvent ?", hint: "venir + vous", answer: "Venez-vous" },
        { sentence: "___ aimé votre séjour ?", hint: "avoir + vous", answer: "Avez-vous" },
        { sentence: "Les animateurs ___ sympathiques ?", hint: "être + ils", answer: "sont-ils" },
        { sentence: "___ les centres ?", hint: "aimer + elle + -t-", answer: "Aime-t-elle" },
        { sentence: "___ une salle ?", hint: "y avoir", answer: "Y a-t-il" },
        { sentence: "___ vous poser une question ?", hint: "pouvoir formel", answer: "Puis-je" },
        { sentence: "Que ___ ?", hint: "penser + vous", answer: "pensez-vous" },
        { sentence: "Pourquoi ___ choisi ce centre ?", hint: "avoir + il + -t-", answer: "a-t-il" },
        { sentence: "Combien de jours ___ restés ?", hint: "être + vous", answer: "êtes-vous" },
      ],
    },
  ],
};

import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_L52: GrammarLesson = {
  slug: "a2-gr-l52",
  code: "G4.28",
  level: "A2",
  title: "La cause et la conséquence",
  theory: [
    { type: "heading", text: "Exprimer la cause" },
    {
      type: "plain_list",
      items: [
        "La cause explique {a}pourquoi{/a} quelque chose se passe.",
        "On peut exprimer la cause avec différents mots selon le registre et la position dans la phrase.",
      ],
    },
    {
      type: "grid",
      headers: ["Connecteur", "Structure", "Registre", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}parce que{/a}", "+ sujet + verbe (milieu ou fin)", "courant", "Je reste parce qu'il pleut."],
        ["{a}car{/a}", "+ sujet + verbe (après virgule)", "soutenu / écrit", "Je reste, car il pleut."],
        ["{a}comme{/a}", "début de phrase uniquement", "courant", "Comme il pleut, je reste."],
        ["{a}puisque{/a}", "+ sujet + verbe (cause évidente)", "courant", "Puisque tu es là, restons."],
        ["{a}à cause de{/a}", "+ nom (connotation neutre/négative)", "courant", "Il est en retard à cause du trafic."],
        ["{a}grâce à{/a}", "+ nom (connotation positive)", "courant", "Elle a réussi grâce à son travail."],
        ["{a}en raison de{/a}", "+ nom (cause officielle)", "soutenu", "Fermeture en raison des travaux."],
      ],
    },
    { type: "heading", text: "Exprimer la conséquence", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "La conséquence exprime {a}ce qui résulte{/a} d'une cause.",
      ],
    },
    {
      type: "grid",
      headers: ["Connecteur", "Structure", "Registre", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}donc{/a}", "virgule + donc + sujet + verbe", "courant", "Il pleut, {a}donc{/a} je prends un parapluie."],
        ["{a}alors{/a}", "virgule + alors + sujet + verbe", "familier", "J'ai faim, {a}alors{/a} je mange."],
        ["{a}c'est pourquoi{/a}", "phrase + c'est pourquoi + sujet + verbe", "courant/soutenu", "Il fait froid, {a}c'est pourquoi{/a} je mets un manteau."],
        ["{a}par conséquent{/a}", "phrase + par conséquent + sujet + verbe", "soutenu / écrit", "Il est absent. {a}Par conséquent{/a}, la réunion est annulée."],
        ["{a}du coup{/a}", "virgule + du coup + sujet + verbe", "familier / oral", "Il est parti tôt, {a}du coup{/a} j'ai fini seul."],
        ["{a}si bien que{/a}", "+ sujet + verbe", "soutenu", "Il a beaucoup étudié, {a}si bien qu'{/a}il a réussi."],
      ],
    },
    {
      type: "highlight",
      label: "À cause de vs Grâce à",
      items: [
        "{a}À cause de{/a} → connotation {a}négative{/a} : Il a échoué {a}à cause de{/a} sa paresse.",
        "{a}Grâce à{/a} → connotation {a}positive{/a} : Il a réussi {a}grâce à{/a} ses efforts.",
        "Les deux sont suivis d'un nom ou d'un pronom tonique.",
      ],
      noBulletItems: [0],
    },
    { type: "heading", text: "Construire un raisonnement", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Structure", "Exemple"],
      rows: [
        ["Cause → conséquence", "Il pleut {a}donc{/a} je reste."],
        ["Conséquence ← cause", "Je reste {a}parce qu'{/a}il pleut."],
        ["Cause + conséquence liées", "{a}Comme{/a} il pleut, {a}c'est pourquoi{/a} je reste."],
      ],
    },
  ],
  exercises: [],
};

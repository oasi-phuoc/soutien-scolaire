import type { GrammarLesson } from "../../grammar-data";

/** Unité 72 — Subjonctif ou indicatif ? (G4.42) */
export const A1_GR_SUBJONCTIF_OU_INDICATIF: GrammarLesson = {
  slug: "a1-gr-subjonctif-ou-indicatif",
  code: "G4.42",
  level: "A1",
  title: "Subjonctif ou indicatif ?",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Le choix du mode dépend du verbe principal.",
        "Déclaration, constatation, réalité → {a}indicatif{/a}. → Je vous assure qu'un cambrioleur {a}est entré{/a} chez moi.",
        "Appréciation, sentiment → {a}subjonctif{/a}. → C'est incroyable qu'il {a}soit passé{/a} par la fenêtre !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Opinion : certitude ou doute ?",
    },
    {
      type: "plain_list",
      items: [
        "Verbes comme {a}penser{/a}, {a}trouver{/a}, {a}croire{/a} ; expressions {a}être sûr{/a}, {a}être convaincu{/a}…",
        "À l'{a}affirmatif{/a} → toujours l'indicatif. → Je pense qu'il y avait un seul cambrioleur.",
        "À la {a}négative{/a} : indicatif ≈ quasi-certitude ; subjonctif ≈ doute.",
        "Négatif + indicatif : Je ne pense pas qu'il {a}est entré{/a} par la fenêtre. (= presque sûr que non)",
        "Négatif + subjonctif : Je ne crois pas qu'il {a}soit entré{/a} par la fenêtre. (= doute)",
        "À l'{a}interrogatif{/a} : subjonctif possible surtout avec inversion. → Pensez-vous que les voleurs {a}sont / soient{/a} passés par là ?",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Je crois qu'ils {a}sont entrés{/a}… (affirmatif → indicatif) / Je ne crois pas qu'ils {a}soient passés{/a}… (négatif → souvent subjonctif).",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Subjonctif ou indicatif",
      instruction: "Choisissez la forme adaptée.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je crois qu'ils ___ par la fenêtre. (entrer)", choices: ["sont entrés", "soient entrés", "aient entrés", "entrent"], correctIdx: 0 },
        { sentence: "Je ne crois pas qu'ils ___ par l'extérieur. (passer)", choices: ["soient passés", "sont passés", "passent", "aient passés"], correctIdx: 0 },
        { sentence: "Je vous assure qu'un cambrioleur ___ chez moi.", choices: ["est entré", "soit entré", "entre", "ait entré"], correctIdx: 0 },
        { sentence: "C'est incroyable qu'il ___ par la fenêtre !", choices: ["soit passé", "est passé", "passe", "ait passé"], correctIdx: 0 },
        { sentence: "Je pense qu'il y ___ un seul cambrioleur.", choices: ["avait", "ait", "ait eu", "ait avoir"], correctIdx: 0 },
        { sentence: "Je suis convaincu que la police ___ l'arrêter.", choices: ["va", "aille", "ait", "soit"], correctIdx: 0 },
        { sentence: "Affirmatif (penser/croire) → ___ .", choices: ["indicatif", "subjonctif", "impératif", "infinitif"], correctIdx: 0 },
        { sentence: "Sentiment / appréciation → ___ .", choices: ["subjonctif", "indicatif", "impératif", "conditionnel"], correctIdx: 0 },
        { sentence: "On voit qu'il n'y ___ pas de trace.", choices: ["a", "ait", "soit", "ait eu"], correctIdx: 0 },
        { sentence: "Je ne pense pas qu'il ___ (quasi-certitude).", choices: ["est entré", "soit entré", "entre", "ait entré"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez le verbe au mode attendu (indicatif ou subjonctif).",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je crois qu'ils ___ . (entrer, indicatif)", hint: "affirmatif", answer: "sont entrés" },
        { sentence: "Je ne crois pas qu'ils ___ . (passer, subjonctif)", hint: "doute", answer: "soient passés" },
        { sentence: "Je vous assure qu'il ___ . (entrer)", hint: "réalité", answer: "est entré" },
        { sentence: "C'est incroyable qu'il ___ . (passer)", hint: "appréciation", answer: "soit passé" },
        { sentence: "Je pense qu'il ___ . (venir, affirmatif)", hint: "indicatif", answer: "vient" },
        { sentence: "Je ne crois pas qu'elle ___ . (savoir, doute)", hint: "subjonctif", answer: "sache" },
        { sentence: "On voit qu'il n'y ___ pas de trace.", hint: "constatation", answer: "a" },
        { sentence: "Je suis sûr que tu ___ . (avoir raison)", hint: "certitude", answer: "as raison" },
        { sentence: "Je ne pense pas qu'il ___ . (être, doute)", hint: "subjonctif", answer: "soit" },
        { sentence: "C'est dommage qu'ils ___ . (partir)", hint: "sentiment", answer: "partent" },
      ],
    },
  ],
};

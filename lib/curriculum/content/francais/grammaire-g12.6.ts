import type { GrammarLesson } from "../../grammar-data";

/** Unité 57 — Les doubles pronoms (G4.27) */
export const A1_GR_DOUBLES_PRONOMS: GrammarLesson = {
  slug: "a1-gr-doubles-pronoms",
  code: "G4.27",
  level: "A1",
  title: "Les doubles pronoms",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Beaucoup de verbes ont deux compléments ; les deux peuvent être remplacés par des pronoms.",
        "Exemple : Je parle de mes vacances à mes amis. → Je leur en parle.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Ordre des pronoms",
    },
    {
      type: "text",
      label: "me / te / nous / vous + le / la / les",
      items: [
        "Il me prête sa voiture. → Il me la prête.",
        "Elle te prête son vélo. → Elle te le prête.",
        "Il nous donne ses vêtements. → Il nous les donne.",
        "Elle vous donne ses chaussures. → Elle vous les donne.",
      ],
    },
    {
      type: "text",
      label: "le / la / les + lui / leur",
      items: [
        "Il prête sa voiture à son ami. → Il la lui prête.",
        "Elle prête ses vêtements à ses sœurs. → Elle les leur prête.",
      ],
    },
    {
      type: "text",
      label: "Pronoms de personne + en",
      items: [
        "Il me donne des conseils. → Il m'en donne.",
        "Elle offre du parfum à son ami. → Elle lui en offre.",
        "Il nous donne des informations. → Il nous en donne.",
        "Il offre des cadeaux à ses parents. → Il leur en offre.",
      ],
    },
    {
      type: "text",
      label: "Pronoms + y",
      items: [
        "Il m'emmène à la gare. → Il m'y emmène.",
        "Elle conduit son ami à l'aéroport. → Elle l'y conduit.",
        "Il vous retrouve dans le parc. → Il vous y retrouve.",
        "Il a rencontré ses amies dans la rue. → Il les y a rencontrées.",
      ],
    },
    {
      type: "note",
      text: "Impératif affirmatif : l'ordre change. → Donne-le-moi !",
    },
    {
      type: "note",
      text: "Négation : les pronoms restent ensemble entre {a}ne{/a} et le verbe. → Je ne la lui donne pas. ; Elle ne me l'a pas donné. ; Il ne va pas nous en parler.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Doubles pronoms",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je parle de mes vacances à mes amis. → Je ___ parle.", choices: ["leur en", "en leur", "les leur"], correctIdx: 0 },
        { sentence: "Il me prête sa voiture. → Il ___ prête.", choices: ["me la", "la me", "me le"], correctIdx: 0 },
        { sentence: "Elle te prête son vélo. → Elle ___ prête.", choices: ["te le", "le te", "te la"], correctIdx: 0 },
        { sentence: "Il prête sa voiture à son ami. → Il ___ prête.", choices: ["la lui", "lui la", "le lui"], correctIdx: 0 },
        { sentence: "Elle prête ses vêtements à ses sœurs. → Elle ___ prête.", choices: ["les leur", "leur les", "les lui"], correctIdx: 0 },
        { sentence: "Il me donne des conseils. → Il ___ donne.", choices: ["m'en", "me en", "en me"], correctIdx: 0 },
        { sentence: "Elle offre du parfum à son ami. → Elle ___ offre.", choices: ["lui en", "en lui", "le lui"], correctIdx: 0 },
        { sentence: "Il m'emmène à la gare. → Il ___ emmène.", choices: ["m'y", "me y", "y me"], correctIdx: 0 },
        { sentence: "Elle conduit son ami à l'aéroport. → Elle ___ conduit.", choices: ["l'y", "le y", "y le"], correctIdx: 0 },
        { sentence: "Impératif : ___ !", choices: ["Donne-le-moi", "Donne-moi-le", "Me le donne"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez les deux pronoms dans l'ordre (ex. me la, leur en).",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il ___ donne. (des infos à nous)", hint: "nous + en", answer: "nous en" },
        { sentence: "Il ___ offre. (des cadeaux à eux)", hint: "leur + en", answer: "leur en" },
        { sentence: "Il ___ donne. (les vêtements à nous)", hint: "nous + les", answer: "nous les" },
        { sentence: "Elle ___ prête. (la voiture à lui)", hint: "la + lui", answer: "la lui" },
        { sentence: "Elle ___ prête. (le vélo à toi)", hint: "te + le", answer: "te le" },
        { sentence: "Il ___ emmène. (moi → gare)", hint: "m' + y", answer: "m'y" },
        { sentence: "Il ___ a rencontrées. (elles → rue)", hint: "les + y", answer: "les y" },
        { sentence: "Je ne ___ donne pas. (la → à lui)", hint: "négation", answer: "la lui" },
        { sentence: "Il ne va pas ___ parler. (de ça à nous)", hint: "nous + en", answer: "nous en" },
        { sentence: "Je ___ donne régulièrement. (argent à eux)", hint: "leur + en", answer: "leur en" },
      ],
    },
  ],
};

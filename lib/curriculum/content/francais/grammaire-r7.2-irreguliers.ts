import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_FUTUR_IRREGULIERS: GrammarLesson = {
  slug: "a2-gr-futur-irreguliers",
  code: "R7.2",
  level: "A2",
  title: "Les verbes irréguliers au futur simple",
  theory: [
    { type: "heading", text: "Les bases irrégulières du futur simple" },
    {
      type: "plain_list",
      items: ["La base change, mais les terminaisons restent toujours -ai, -as, -a, -ons, -ez, -ont."],
    },
    {
      type: "grid",
      headers: ["Verbe", "Base", "Exemple"],
      rows: [
        ["être", "ser-", "je serai"], ["avoir", "aur-", "tu auras"], ["aller", "ir-", "il ira"],
        ["courir", "courr-", "nous courrons"], ["devoir", "devr-", "vous devrez"], ["envoyer", "enverr-", "ils enverront"],
        ["faire", "fer-", "je ferai"], ["falloir", "faudr-", "il faudra"], ["pouvoir", "pourr-", "tu pourras"],
        ["recevoir", "recevr-", "elle recevra"], ["savoir", "saur-", "nous saurons"], ["tenir", "tiendr-", "vous tiendrez"],
        ["venir", "viendr-", "ils viendront"], ["voir", "verr-", "je verrai"], ["vouloir", "voudr-", "tu voudras"],
      ],
      boldFirstCol: true,
    },
  ],
  exercises: [],
};

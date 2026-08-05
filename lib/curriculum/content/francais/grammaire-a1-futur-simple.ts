import type { GrammarLesson } from "../../grammar-data";
import { A2_GR_FUTUR_IRREGULIERS } from "./grammaire-r7.2-irreguliers";

/** G9.2 — Le futur simple, enrichi avec G19.27 (futur irrégulier) */
export const A1_GR_FUTUR_SIMPLE: GrammarLesson = {
  slug: "a1-gr-futur-simple",
  code: "G9.2",
  level: "A1",
  title: "Le futur simple",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Le futur simple sert pour des événements futurs, dans des situations de communication précises, souvent avec une idée de certitude.",
        "Prévision : Demain, il pleuvra dans toutes les régions.",
        "Promesse / résolution : Je te téléphonerai demain à 8 heures.",
        "Consigne ou refus catégorique : Vous prendrez ce médicament pendant un mois. ; Je ne partirai pas avec toi !",
        "Programme / horaire : Ce voyage commencera à Athènes.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjugaison",
    },
    {
      type: "plain_list",
      items: [
        "Infinitif (radical) + terminaisons {a}-ai, -as, -a, -ons, -ez, -ont{/a}. → je commencerai ; je partirai.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["", "radical", "terminaison", "suite"],
      boldFirstCol: true,
      rows: [
        ["je", "changer", "ai", "d'habitudes alimentaires."],
        ["tu", "manger", "as", "moins."],
        ["il / elle / on", "préparer", "a", "des repas légers."],
        ["nous", "marcher", "ons", "une heure par jour."],
        ["vous", "choisir", "ez", "des produits frais."],
        ["ils / elles", "maigrir", "ont", "sûrement."],
      ],
    },
    {
      type: "note",
      text: "Verbes en {a}-e{/a} : on enlève le {a}e{/a} avant les terminaisons. → prendre → je prendrai.",
    },
    {
      type: "highlight",
      label: "Cas particuliers (-er)",
      items: [
        "{a}-oyer / -uyer{/a} : y → i. → nettoyer → tu nettoieras.",
        "{a}-ayer{/a} : deux formes possibles. → payer → on paiera / on payera.",
        "{a}-eter / -eler{/a} : à partir du {a}je{/a} du présent + {a}r{/a} + terminaison. → appeler → j'appellerai ; acheter → nous achèterons.",
      ],
    },
    {
      type: "heading",
      text: "Radicaux irréguliers",
    },
    {
      type: "grid",
      headers: ["Infinitif", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["aller", "il ira"],
        ["avoir", "nous aurons"],
        ["courir", "tu courras"],
        ["devoir", "elle devra"],
        ["envoyer", "j'enverrai"],
        ["être", "vous serez"],
        ["faire", "nous ferons"],
        ["falloir", "il faudra"],
        ["mourir", "on mourra"],
        ["pleuvoir", "il pleuvra"],
        ["pouvoir", "je pourrai"],
        ["recevoir", "on recevra"],
        ["savoir", "tu sauras"],
        ["tenir", "elle tiendra"],
        ["venir", "je viendrai"],
        ["voir", "ils verront"],
        ["vouloir", "elles voudront"],
      ],
    },
    {
      type: "note",
      text: "Attention à la différence entre futur proche et futur simple.",
    },
    ...A2_GR_FUTUR_IRREGULIERS.theory,
  ],
  exercises: [],
};
